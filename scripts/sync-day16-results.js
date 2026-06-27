/**
 * Day 16 赛果同步 — m61–m66 全部 6 场（2026-06-27 北京时间 · G/H/I 组末轮）
 * Run: node scripts/sync-day16-results.js && node scripts/roll-day17.js && node scripts/enrich-day17.js && node scripts/apply-prediction-signals.js
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

const HANDICAP = { ...require('./handicap-data-day16') };
const { todayMatches: buildDay16Matches } = require('./roll-day16');

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
  m61: '400021489',
  m62: '400021493',
  m63: '400021479',
  m64: '400021481',
  m65: '400021485',
  m66: '400021484',
};

const MANUAL = {
  m61: {
    home_score: 1, away_score: 4, status: 'FT', label: '全场结束',
    scorers: "Thelo Aasgaard 21'; Ousmane Dembélé 7'; Ousmane Dembélé 20'; Ousmane Dembélé 32'; Désiré Doué 90'+4'",
    highlights: '波士顿 · 法国 4-1 挪威 · Dembélé 帽子戏法 · 法国 9 分 I 组第一 · 挪威 6 分第二',
    ht_score: '1-3', first_goal_min: 7, fifa_id: '400021489',
  },
  m62: {
    home_score: 5, away_score: 0, status: 'FT', label: '全场结束',
    scorers: "Habib Diarra 4'; Ismaïla Sarr 56'; Pape Gueye 59'; Pape Gueye 71'; Iliman Ndiaye 82'",
    highlights: '多伦多 · 塞内加尔 5-0 伊拉克 · Diarra/Sarr/Gueye 双响 · 塞内加尔 3 分第三',
    ht_score: '1-0', first_goal_min: 4, fifa_id: '400021493',
  },
  m63: {
    home_score: 1, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Mahmoud Saber 5'; Ramin Rezaeian 14'",
    highlights: '西雅图 · 埃及 1-1 伊朗 · 早段对轰 · 埃及 5 分 G 组第二 · 伊朗 3 分第三',
    ht_score: '1-1', first_goal_min: 5, fifa_id: '400021479',
  },
  m64: {
    home_score: 1, away_score: 5, status: 'FT', label: '全场结束',
    scorers: "Elijah Just 84'; Leandro Trossard 28'; Leandro Trossard 50'; Kevin De Bruyne 66'; Romelu Lukaku 86'; Alexis Saelemaekers 90'+4'",
    highlights: '温哥华 · 比利时 5-1 新西兰 · Trossard 双响 · 比利时 5 分 G 组第一',
    ht_score: '0-1', first_goal_min: 28, fifa_id: '400021481',
  },
  m65: {
    home_score: 0, away_score: 0, status: 'FT', label: '全场结束',
    scorers: '',
    highlights: '休斯顿 · 佛得角 0-0 沙特 · 闷平 · 佛得角 3 分 H 组第二 · 西班牙 7 分第一',
    ht_score: '0-0', first_goal_min: null, fifa_id: '400021485',
  },
  m66: {
    home_score: 0, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Alex Baena 42'",
    highlights: '瓜达拉哈拉 · 西班牙 1-0 乌拉圭 · Baena 42\' · 西班牙 7 分 H 组第一',
    ht_score: '0-1', first_goal_min: 42, fifa_id: '400021484',
  },
};

const REVIEW = {
  m61: '【赛后复盘】赛前客胜 37%/首推 1-1；实际 1-4 法国胜。Dembélé 7\'/20\'/32\' 帽子戏法 · Aasgaard 21\' · Doué 90+4\'。方向：客胜命中；比分 1-4 深盘穿；总球 5（大 2.75 穿）。路径：法国 9 分 I 组第一 · 挪威 6 分第二。',
  m62: '【赛后复盘】赛前主胜 48%/首推 2-0；实际 5-0 塞内加尔大胜。Diarra 4\' · Sarr 56\' · Gueye 59\'/71\' · Ndiaye 82\'。方向：主胜命中；比分 5-0 超 Top3；总球 5（大 2.5 穿）。路径：塞内加尔 3 分第三 · 伊拉克 0 分出局。',
  m63: '【赛后复盘】赛前主胜 41%/首推 1-1；实际 1-1 平局。Saber 5\' · Rezaeian 14\' 早段对轰。方向：平局命中；总球 2（小 2.5 走水）。路径：埃及 5 分第二 · 伊朗 3 分第三 · 比利时 G 组第一。',
  m64: '【赛后复盘】赛前客胜 57%/首推 0-2；实际 1-5 比利时大胜。Trossard 28\'/50\' · De Bruyne 66\' · Lukaku 86\' · Just 84\' 挽回颜面。方向：客胜命中；比分 1-5 穿盘；总球 6（大 2.75 穿）。路径：比利时 5 分 G 组第一（净胜球压埃及）。',
  m65: '【赛后复盘】赛前客胜 44%/首推 1-1；实际 0-0 平局。90 分钟无进球。方向：平局命中（客胜未中）；总球 0（小 2.5 赢）。路径：佛得角 3 分 H 组第二 · 沙特 2 分出局。',
  m66: '【赛后复盘】赛前客胜 49%/首推 0-2；实际 0-1 西班牙小胜。Baena 42\' 制胜。方向：客胜命中；比分 0-1 在 Top3；总球 1（小 2.5 赢）。路径：西班牙 7 分 H 组第一 · 乌拉圭 2 分第三争八。',
};

const GROUP_G_FINAL = [
  { team: 'Belgium', pts: 5, p: 3, w: 1, d: 2, l: 0, gf: 6, ga: 2 },
  { team: 'Egypt', pts: 5, p: 3, w: 1, d: 2, l: 0, gf: 5, ga: 4 },
  { team: 'Iran', pts: 3, p: 3, w: 0, d: 3, l: 0, gf: 3, ga: 3 },
  { team: 'New Zealand', pts: 1, p: 3, w: 0, d: 0, l: 3, gf: 4, ga: 10 },
];

const GROUP_H_FINAL = [
  { team: 'Spain', pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 5, ga: 1 },
  { team: 'Cape Verde', pts: 3, p: 3, w: 0, d: 3, l: 0, gf: 2, ga: 2 },
  { team: 'Uruguay', pts: 2, p: 3, w: 0, d: 2, l: 1, gf: 3, ga: 3 },
  { team: 'Saudi Arabia', pts: 2, p: 3, w: 0, d: 2, l: 1, gf: 1, ga: 5 },
];

const GROUP_I_FINAL = [
  { team: 'France', pts: 9, p: 3, w: 3, d: 0, l: 0, gf: 10, ga: 2 },
  { team: 'Norway', pts: 6, p: 3, w: 2, d: 0, l: 1, gf: 8, ga: 7 },
  { team: 'Senegal', pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 8, ga: 6 },
  { team: 'Iraq', pts: 0, p: 3, w: 0, d: 0, l: 3, gf: 1, ga: 12 },
];

function upsertGroup(snaps, group, label, table) {
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  return snaps;
}

function patchStars(m, id) {
  if (id === 'm61' && m.away?.stars?.[0]) {
    m.away.stars[0] = { name: 'Ousmane Dembélé', pos: 'RW', club: 'PSG', stats: "7', 20', 32' 帽子戏法", rating: 9.5, desc: '4-1 · 法国 9 分 I 组第一' };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }
  if (id === 'm62' && m.home?.stars?.[0]) {
    m.home.stars[0] = { name: 'Pape Gueye', pos: 'CM', club: 'Marseille', stats: "59', 71' 双响", rating: 9.0, desc: '5-0 大胜 · 塞内加尔 3 分第三' };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm64' && m.away?.stars?.[0]) {
    m.away.stars[0] = { name: 'Leandro Trossard', pos: 'LW', club: 'Arsenal', stats: "28', 50' 双响", rating: 9.0, desc: '5-1 穿盘 · 比利时 G 组第一' };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }
  if (id === 'm66' && m.away?.stars?.[0]) {
    m.away.stars[0] = { name: 'Alex Baena', pos: 'AM', club: 'Villarreal', stats: "42' 制胜", rating: 8.5, desc: '1-0 · 西班牙 7 分 H 组第一' };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
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
  const SYNC_IDS = ['m61', 'm62', 'm63', 'm64', 'm65', 'm66'];

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches.find(x => x.id === id);
    if (!m) m = buildDay16Matches().find(x => x.id === id);
    const fromResults = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    if (!m && fromResults) m = JSON.parse(JSON.stringify(fromResults));
    const r = resolved[id];
    if (!m || !r || r.status !== 'FT') continue;

    const patched = applyResult(m, r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex(x => x.id === id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = archived;
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter(m => !SYNC_IDS.includes(m.id));

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'G', 'G组 · 末轮后', GROUP_G_FINAL);
  snaps = upsertGroup(snaps, 'H', 'H组 · 末轮后', GROUP_H_FINAL);
  snaps = upsertGroup(snaps, 'I', 'I组 · 末轮后', GROUP_I_FINAL);
  RESULTS_DATA.groupSnapshots = snaps;
  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 16 全部 6 场完结 · G/H/I 组定档';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 16 完结：法国4-1挪威 · 比5-1新西兰 · 塞5-0伊 · 西1-0乌 · 埃1-1伊 · 佛0-0沙', time: '6月27日' },
    { tag: 'OFFICIAL', text: 'G/H/I出线：比利时/西班牙/法国头名 · 埃及/佛得角/挪威次席', time: '积分榜' },
    { tag: 'PREVIEW', text: '📅 6月28日 J/K/L末轮6场 · 巴拿马-英格兰/克罗地亚-加纳(05:00) · 哥伦-葡/刚果-乌兹(07:30) · 阿尔-奥/约-阿(10:00)', time: '今日赛程' },
  ].slice(0, 12);

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'FIFA 官方赛果 · Day 16 完结 · Day 17 待滚日';
  MATCH_DATA.breakingNews = RESULTS_DATA.breakingNews;

  const day16Results = SYNC_IDS.map(id => {
    const r = resolved[id];
    const m = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    return m && r ? {
      id, home: m.home?.name || m.home, away: m.away?.name || m.away,
      score: `${r.home_score}-${r.away_score}`, group: m.group,
    } : null;
  }).filter(Boolean);

  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.todayDate = '2026-06-27';
  LIVE_DATA.allResults = [...day16Results, ...(LIVE_DATA.allResults || []).filter(r => !SYNC_IDS.includes(r.id))];
  LIVE_DATA.yesterdayResults = day16Results.map(r => ({ id: r.id, score: r.score }));
  LIVE_DATA.injuries = { note: 'Day 16 全部完结 · 法国 Dembélé 帽子戏法 · 比利时 5-1 · Day 17 J/K/L 末轮' };
  LIVE_DATA.standings = snaps.filter(g => ['G', 'H', 'I', 'J', 'K', 'L'].includes(g.group));
  LIVE_DATA.fixtures = [];

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 16 全部完结\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/sync-day16-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 16 synced (6/6 finished)');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r) console.log(`   ${id} FT ${r.home_score}-${r.away_score}`);
  }
  try { rebuildScheduleScores(); } catch (e) { console.warn('⚠ schedule-scores:', e.message); }
}

main().catch(e => { console.error(e); process.exit(1); });
