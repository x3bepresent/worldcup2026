/**
 * Day 15 赛果同步 — m55–m60 全部 6 场（2026-06-26 北京时间 · D/E/F 组末轮）
 * Run: node scripts/sync-day15-results.js && node scripts/roll-day16.js && node scripts/enrich-day16.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { archiveFinishedMatch } = require('./archive-match.js');
const { enrichArchivedFull } = require('./archived-enrich.js');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const HANDICAP = { ...require('./handicap-data-day15') };
const { todayMatches: buildDay15Matches } = require('./roll-day15');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function pushForm(form, r) {
  const f = [...(form || ['W', 'D', 'L', 'W', 'D'])];
  f.shift();
  f.push(r);
  return f;
}

function fetchFifa(id) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.fifa.com/api/v3/live/football/${id}`, (res) => {
      let raw = '';
      res.on('data', (c) => { raw += c; });
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function playerName(j, idPlayer) {
  const p = [...(j.HomeTeam?.Players || []), ...(j.AwayTeam?.Players || [])]
    .find(x => x.IdPlayer === idPlayer);
  return p?.PlayerName?.[0]?.Description || p?.AliasName?.[0]?.Description || idPlayer;
}

function formatScorers(j) {
  const rows = [];
  for (const g of j.HomeTeam?.Goals || []) {
    rows.push(`${playerName(j, g.IdPlayer)} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  for (const g of j.AwayTeam?.Goals || []) {
    rows.push(`${playerName(j, g.IdPlayer)} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  return rows.join('; ');
}

function inferHt(j, hs, as) {
  const ht = j.HomeTeam?.HalfTimeScore;
  const at = j.AwayTeam?.HalfTimeScore;
  if (ht != null && at != null) return `${ht}-${at}`;
  let h = 0; let a = 0;
  for (const g of j.HomeTeam?.Goals || []) {
    if (g.Period === 3 || parseInt(g.Minute, 10) <= 45) h++;
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if (g.Period === 3 || parseInt(g.Minute, 10) <= 45) a++;
  }
  if (h + a > 0) return `${h}-${a}`;
  if (hs === 0 && as === 0) return '0-0';
  return null;
}

function isFinished(j) {
  return j.MatchStatus === 0 && j.Period === 10;
}

const FIFA_IDS = {
  m55: '400021468',
  m56: '400021466',
  m57: '400021471',
  m58: '400021473',
  m59: '400021459',
  m60: '400021461',
};

const MANUAL = {
  m55: {
    home_score: 0, away_score: 2, status: 'FT', label: '全场结束',
    scorers: "Nicolas Pépé 7'; Nicolas Pépé 64'",
    highlights: '费城 · Pépé 双响 0-2 · 科特迪瓦 6 分出线 · 德国同分净胜球领跑 E 组',
    ht_score: '0-1', first_goal_min: 7, fifa_id: '400021468',
  },
  m56: {
    home_score: 2, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Leroy Sané 2'; Nilson Angulo 9'; Gonzalo Plata 77'",
    highlights: 'MetLife 爆冷 · 厄瓜多尔 2-1 德国 · Plata 77\' 制胜 · 德国 6 分仍出线',
    ht_score: '1-1', first_goal_min: 2, fifa_id: '400021466',
  },
  m57: {
    home_score: 1, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Daizen Maeda 56'; Anthony Elanga 62'",
    highlights: '达拉斯 · 日本 1-1 瑞典 · Maeda/Elanga 6 分钟对轰 · 日本 5 分出线瑞典出局',
    ht_score: '0-0', first_goal_min: 56, fifa_id: '400021471',
  },
  m58: {
    home_score: 1, away_score: 3, status: 'FT', label: '全场结束',
    scorers: "Ellyes Skhiri 3' (og); Brian Brobbey 7'; Hazem Mastouri 54'; Jan Paul van Hecke 62'",
    highlights: '堪萨斯城 · 荷兰 3-1 · Brobbey/van Hecke · 荷兰 7 分 F 组第一',
    ht_score: '0-2', first_goal_min: 3, fifa_id: '400021473',
  },
  m59: {
    home_score: 3, away_score: 2, status: 'FT', label: '全场结束',
    scorers: "Auston Trusty 3' (og); Arda Güler 10'; Barış Alper Yılmaz 31'; Sebastian Berhalter 49'; Kaan Ayhan 90'+8'",
    highlights: 'SoFi 土耳其 3-2 爆冷 · Güler/Yılmaz · Ayhan 90+8\' · 美国 6 分仍头名',
    ht_score: '2-1', first_goal_min: 3, fifa_id: '400021459',
  },
  m60: {
    home_score: 0, away_score: 0, status: 'FT', label: '全场结束',
    scorers: '',
    highlights: '湾区 0-0 闷平 · 澳大利亚/巴拉圭各 4 分 · 公平竞赛分决 D 组次席',
    ht_score: '0-0', first_goal_min: null, fifa_id: '400021461',
  },
};

const REVIEW = {
  m55: '【赛后复盘】赛前客胜 55%/首推 0-1；实际 0-2 科特迪瓦胜。Pépé 7\'/64\' 双响穿盘。方向：客胜命中；比分 0-2 在 Top3；总球 2（小 2.5 走水边缘）。路径：须胜兑现→科特迪瓦 6 分出线。',
  m56: '【赛后复盘】赛前客胜 61%/首推 0-2；实际 2-1 厄瓜多尔胜（大冷）。Sané 2\' 先开 · Angulo 9\' · Plata 77\' 制胜。方向：主胜冷门命中（约 17%）；客胜深盘未中；总球 3（大 2.75 赢）。路径：德国轮换/轻敌→厄瓜多尔 4 分仍出局。',
  m57: '【赛后复盘】赛前主胜 38%/首推 2-1；实际 1-1 平局。Maeda 56\'/Elanga 62\' 对轰。方向：平局命中；主胜/客胜均未中；总球 2（小 2.5 赢）。路径：出线战→日本 5 分第二瑞典 4 分出局。',
  m58: '【赛后复盘】赛前客胜 73%/首推 0-2；实际 1-3 荷兰胜。Skhiri 3\'(og)/Brobbey 7\'/Mastouri 54\'/van Hecke 62\'。方向：客胜命中；比分接近；总球 4（大 3 穿）。路径：深盘穿盘→荷兰 7 分 F 组第一。',
  m59: '【赛后复盘】赛前客胜 60%/首推 0-2；实际 3-2 土耳其胜（冷门）。Trusty 3\'(og)/Güler 10\'/Yılmaz 31\'/Berhalter 49\'/Ayhan 90+8\'。方向：主胜冷门命中；客胜未中；总球 5（大 2.75 穿）。路径：轮换版美国后防松动→土耳其 3 分仍出局。',
  m60: '【赛后复盘】赛前主胜 35%/首推 1-1；实际 0-0 平局。闷平 90 分钟无进球。方向：平局命中；总球 0（小 2.5 赢）。路径：生死战互不敢输→澳大利亚/巴拉圭同分次席待定。',
};

const GROUP_D_FINAL = [
  { team: 'USA', pts: 6, p: 3, w: 2, d: 0, l: 1, gf: 8, ga: 4 },
  { team: 'Australia', pts: 4, p: 3, w: 1, d: 2, l: 0, gf: 2, ga: 4 },
  { team: 'Paraguay', pts: 4, p: 3, w: 1, d: 2, l: 0, gf: 2, ga: 4 },
  { team: 'Türkiye', pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 3, ga: 5 },
];

const GROUP_E_FINAL = [
  { team: 'Germany', pts: 6, p: 3, w: 2, d: 0, l: 1, gf: 10, ga: 4 },
  { team: "Côte d'Ivoire", pts: 6, p: 3, w: 2, d: 0, l: 1, gf: 4, ga: 2 },
  { team: 'Ecuador', pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 3 },
  { team: 'Curaçao', pts: 1, p: 3, w: 0, d: 1, l: 2, gf: 1, ga: 9 },
];

const GROUP_F_FINAL = [
  { team: 'Netherlands', pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 10, ga: 4 },
  { team: 'Japan', pts: 5, p: 3, w: 1, d: 2, l: 0, gf: 7, ga: 3 },
  { team: 'Sweden', pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 7, ga: 7 },
  { team: 'Tunisia', pts: 0, p: 3, w: 0, d: 0, l: 3, gf: 1, ga: 12 },
];

function upsertGroup(snaps, group, label, table) {
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  return snaps;
}

function patchStars(m, id) {
  if (id === 'm55' && m.away?.stars?.[0]) {
    m.away.stars[0] = { name: 'Nicolas Pépé', pos: 'RW', club: 'Villarreal', stats: "7', 64' 双响", rating: 8.8, desc: '0-2 穿盘 · 科特迪瓦 6 分出线' };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }
  if (id === 'm56' && m.home?.stars?.[0]) {
    m.home.stars[0] = { name: 'Gonzalo Plata', pos: 'RW', club: 'Flamengo', stats: "77' 制胜", rating: 8.5, desc: '2-1 爆冷德国 · 厄瓜多尔 4 分' };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm57' && m.home?.stars?.[0]) {
    m.home.stars[0] = { name: 'Daizen Maeda', pos: 'FW', club: 'Celtic', stats: "56' 破门", rating: 8.0, desc: '1-1 出线 · 日本 5 分第二' };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm58' && m.away?.stars?.[0]) {
    m.away.stars[0] = { name: 'Brian Brobbey', pos: 'ST', club: 'Ajax', stats: "7' 首开", rating: 8.2, desc: '3-1 穿盘 · 荷兰 7 分 F 组第一' };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }
  if (id === 'm59' && m.home?.stars?.[0]) {
    m.home.stars[0] = { name: 'Arda Güler', pos: 'AM', club: 'Real Madrid', stats: "10' 破门", rating: 8.4, desc: '3-2 爆冷美国 · Ayhan 90+8\'' };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
}

function applyResult(m, r, reviewKey) {
  m.actualResult = {
    home_score: r.home_score,
    away_score: r.away_score,
    status: r.status,
    label: r.label,
    scorers: r.scorers,
    highlights: r.highlights,
    ht_score: r.ht_score,
    first_goal_min: r.first_goal_min,
    fifa_match_id: r.fifa_id,
    updated: TS,
  };
  if (REVIEW[reviewKey] && m.prediction) {
    m.prediction.key_factor = REVIEW[reviewKey];
    const idx = m.prediction.insight_factors?.findIndex(f => f.label === '战术与阵容');
    if (idx >= 0) m.prediction.insight_factors[idx].text = REVIEW[reviewKey];
  }
  if (r.status === 'FT') {
    m.note = (m.note || '').replace(/待赛|预览/, '已结束').replace(/ · 已结束.*$/, '') + ` · 已结束 ${r.home_score}-${r.away_score}`;
    if (m.home?.form) {
      const hr = r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D';
      m.home.form = pushForm(m.home.form, hr);
    }
    if (m.away?.form) {
      const ar = r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D';
      m.away.form = pushForm(m.away.form, ar);
    }
  }
  patchStars(m, reviewKey);
  return m;
}

async function main() {
  const resolved = { ...MANUAL };

  for (const [mid, fid] of Object.entries(FIFA_IDS)) {
    try {
      const j = await fetchFifa(fid);
      const hs = j.HomeTeam?.Score ?? resolved[mid]?.home_score;
      const as = j.AwayTeam?.Score ?? resolved[mid]?.away_score;
      const scorers = formatScorers(j) || resolved[mid]?.scorers;
      if (isFinished(j)) {
        resolved[mid] = {
          ...resolved[mid],
          home_score: hs,
          away_score: as,
          scorers,
          ht_score: inferHt(j, hs, as) || resolved[mid]?.ht_score,
          status: 'FT',
          label: '全场结束',
          fifa_id: fid,
        };
      }
    } catch (e) {
      console.warn('⚠ FIFA fetch', mid, e.message);
    }
  }

  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const SYNC_IDS = ['m55', 'm56', 'm57', 'm58', 'm59', 'm60'];
  const archiveIds = [];

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches.find(x => x.id === id);
    if (!m) m = buildDay15Matches().find(x => x.id === id);
    const fromResults = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    if (!m && fromResults) m = JSON.parse(JSON.stringify(fromResults));
    const r = resolved[id];
    if (!m || !r || r.status !== 'FT') continue;

    const patched = applyResult(m, r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex(x => x.id === id);
    if (i < 0) {
      RESULTS_DATA.finishedMatches.push(archived);
      archiveIds.push(id);
    } else {
      RESULTS_DATA.finishedMatches[i] = archived;
      archiveIds.push(id);
    }
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter(m => !SYNC_IDS.includes(m.id));
  // 保留 Day 16 今日赛事（若已滚日）

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'D', 'D组 · 末轮后', GROUP_D_FINAL);
  snaps = upsertGroup(snaps, 'E', 'E组 · 末轮后', GROUP_E_FINAL);
  snaps = upsertGroup(snaps, 'F', 'F组 · 末轮后', GROUP_F_FINAL);
  RESULTS_DATA.groupSnapshots = snaps;
  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 15 全部 6 场完结';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 15 完结：厄瓜多尔2-1德国爆冷 · 土3-2美 · 荷3-1突 · 日1-1瑞 · 澳0-0巴', time: '6月26日' },
    { tag: 'OFFICIAL', text: 'D/E/F出线：美国/德国/荷兰头名 · 澳大利亚/科特迪瓦/日本次席', time: '积分榜' },
  ].slice(0, 12);

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = MATCH_DATA.todayMatches?.length
    ? 'FIFA 官方赛果 · Day 15 完结 · Day 16 今日赛事'
    : 'FIFA 官方赛果 · Day 15 全部 6 场完结';
  MATCH_DATA.breakingNews = RESULTS_DATA.breakingNews;

  const day15Results = SYNC_IDS.map(id => {
    const r = resolved[id];
    const m = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    return m && r ? {
      id,
      home: m.home?.name || m.home,
      away: m.away?.name || m.away,
      score: `${r.home_score}-${r.away_score}`,
      group: m.group,
    } : null;
  }).filter(Boolean);

  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.todayDate = LIVE_DATA.todayDate || '2026-06-26';
  LIVE_DATA.allResults = [...day15Results, ...(LIVE_DATA.allResults || []).filter(r => !SYNC_IDS.includes(r.id))];
  LIVE_DATA.yesterdayResults = day15Results.map(r => ({ id: r.id, score: r.score }));
  LIVE_DATA.injuries = { note: 'Day 15 全部完结 · 厄瓜多尔爆冷德国 · 土耳其3-2美国 · Day 16 G/H/I末轮' };
  const snapsAll = RESULTS_DATA.groupSnapshots || [];
  LIVE_DATA.standings = snapsAll.filter(g => ['D', 'E', 'F', 'G', 'H', 'I'].includes(g.group));
  if (!LIVE_DATA.fixtures?.length) LIVE_DATA.fixtures = [];

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 15 全部完结\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/sync-day15-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 15 synced (6/6 finished)');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r) console.log(`   ${id} FT ${r.home_score}-${r.away_score}`);
  }
  try { rebuildScheduleScores(); } catch (e) { console.warn('⚠ schedule-scores:', e.message); }
}

main().catch(e => { console.error(e); process.exit(1); });
