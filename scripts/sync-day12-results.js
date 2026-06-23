/**
 * Day 12 赛果同步 — m43/m42/m41/m44（2026-06-23 北京时间 · I/J 组）
 * Run: node scripts/sync-day12-results.js && node scripts/roll-day13.js && node scripts/enrich-day13.js && node scripts/apply-prediction-signals.js
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

const HANDICAP = { ...require('./handicap-data-day12') };

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
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

function isFinished(j) {
  return j.MatchStatus === 0 && j.Period === 10;
}

const FIFA_IDS = {
  m43: '400021494',
  m42: '400021492',
  m41: '400021491',
  m44: '400021499',
};

const MANUAL = {
  m43: {
    home_score: 2, away_score: 0, status: 'FT', label: '全场结束',
    scorers: "Lionel Messi 38'; Lionel Messi 90+5'",
    highlights: 'AT&T 达拉斯 · J组榜首对话 · Messi 38\'/90+5\' 双响 · 阿根廷 6 分领跑',
    ht_score: '1-0', first_goal_min: 38, fifa_id: '400021494',
  },
  m42: {
    home_score: 3, away_score: 0, status: 'FT', label: '全场结束',
    scorers: "Kylian Mbappé 14', 54'; Ousmane Dembélé 66'",
    highlights: 'Lincoln Financial 费城 · Mbappé 双响 · 法国 6 分 I 组领跑',
    ht_score: '1-0', first_goal_min: 14, fifa_id: '400021492',
  },
  m41: {
    home_score: 3, away_score: 2, status: 'FT', label: '全场结束',
    scorers: "Marcus Holmgren Pedersen 43'; Erling Haaland 48', 58'; Ismaila Sarr 53', 90+3'",
    highlights: 'MetLife 纽约 · Haaland 双响 · Sarr 扳平再追 · 挪威 6 分与法国同分',
    ht_score: '1-0', first_goal_min: 43, fifa_id: '400021491',
  },
  m44: {
    home_score: 1, away_score: 2, status: 'FT', label: '全场结束',
    scorers: "Nizar Alrashdan 36'; Nadhir Benbouali 69'; Amine Gouiri 82'",
    highlights: "Levi's 湾区 · 约旦半场领先 · Benbouali/Gouiri 逆转 · 阿尔及利亚 3 分",
    ht_score: '1-0', first_goal_min: 36, fifa_id: '400021499',
  },
};

const REVIEW = {
  m43: '【赛后复盘】赛前主胜 51%/首推胶着；实际 2-0 阿根廷胜。Messi 38\'/90+5\' 双响 · 奥地利未能破门。方向：主胜命中；比分 2-0 在模型范围；总球 2（小 2.5 走/赢）。路径：榜首对话→梅西定海神针。',
  m42: '【赛后复盘】赛前主胜 66%/首推 2-0；实际 3-0。Mbappé 14\'/54\' 双响 · Dembélé 66\'。方向：主胜命中；比分命中；总球 3（大 2.75 走/穿）。路径：深盘热门穿盘兑现。',
  m41: '【赛后复盘】赛前主胜 56%/首推 2-1；实际 3-2。Haaland 48\'/58\' · Sarr 53\'/90+3\' 追至 3-2。方向：主胜命中；比分 3-2 大球；总球 5（大 2.5 穿）。路径：对攻→Haaland 个人爆发。',
  m44: '【赛后复盘】赛前均衡/首推 1-1；实际 1-2 阿尔及利亚胜。Alrashdan 36\' → Benbouali 69\'/Gouiri 82\' 逆转。方向：客胜（32%）命中；比分未中；总球 3。路径：垫底对话→客队下半场逆转。',
};

const GROUP_I_FINAL = [
  { team: 'France', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 6, ga: 1 },
  { team: 'Norway', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 7, ga: 3 },
  { team: 'Senegal', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 3, ga: 6 },
  { team: 'Iraq', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 7 },
];

const GROUP_J_FINAL = [
  { team: 'Argentina', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 5, ga: 0 },
  { team: 'Austria', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 3, ga: 5 },
  { team: 'Algeria', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 4 },
  { team: 'Jordan', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 5 },
];

function upsertGroup(snaps, group, label, table) {
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  return snaps;
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
    ...(r.elapsed ? { elapsed: r.elapsed } : {}),
  };
  if (REVIEW[reviewKey] && m.prediction) {
    m.prediction.key_factor = REVIEW[reviewKey];
    const idx = m.prediction.insight_factors?.findIndex(f => f.label === '战术与阵容');
    if (idx >= 0) m.prediction.insight_factors[idx].text = REVIEW[reviewKey];
  }
  if (r.status === 'FT') {
    m.note = (m.note || '').replace(/待赛|预览/, '已结束').replace(/ · 已结束.*$/, '') + ` · 已结束 ${r.home_score}-${r.away_score}`;
  }
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
          status: 'FT',
          label: '全场结束',
          elapsed: j.MatchTime ? `${j.MatchTime}'` : undefined,
          fifa_id: fid,
        };
      }
    } catch (e) {
      console.warn('⚠ FIFA fetch', mid, e.message);
    }
  }

  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const SYNC_IDS = ['m43', 'm42', 'm41', 'm44'];
  const archiveIds = [];

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches.find(x => x.id === id);
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

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'I', 'I组 · 第2轮后', GROUP_I_FINAL);
  snaps = upsertGroup(snaps, 'J', 'J组 · 第2轮后', GROUP_J_FINAL);
  RESULTS_DATA.groupSnapshots = snaps;
  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 12 完结';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 12：阿2-0奥 · 法3-0伊 · 挪3-2塞 · 约1-2阿', time: '6月23日' },
    { tag: 'OFFICIAL', text: 'I组：法/挪各 6 分 · J组：阿根廷 6 分领跑', time: '积分榜' },
    { tag: 'PREVIEW', text: '📅 6月24日 K/L组 · 葡-乌(01:00) · 英-加(04:00) · 巴-克(07:00) · 哥-刚(10:00)', time: '今日赛程' },
  ].slice(0, 12);

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'FIFA 官方赛果 · Day 12 完结 · Day 13 预览';

  const day12Results = SYNC_IDS.map(id => {
    const r = resolved[id];
    const m = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    return m && r ? {
      id, home: m.home?.name || m.home, away: m.away?.name || m.away,
      score: `${r.home_score}-${r.away_score}`, group: m.group,
    } : null;
  }).filter(Boolean);

  const day11Results = [
    { id: 'm38', home: 'Spain', away: 'Saudi Arabia', score: '4-0', group: 'H' },
    { id: 'm39', home: 'Belgium', away: 'Iran', score: '0-0', group: 'G' },
    { id: 'm37', home: 'Uruguay', away: 'Cape Verde', score: '2-2', group: 'H' },
    { id: 'm40', home: 'New Zealand', away: 'Egypt', score: '1-3', group: 'G' },
  ];

  const todayIsDay13 = (MATCH_DATA.todayMatches || []).some(m => m.id === 'm47');

  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  if (todayIsDay13) {
    LIVE_DATA.allResults = day12Results;
    LIVE_DATA.yesterdayResults = day12Results.map(r => ({ id: r.id, score: r.score }));
    LIVE_DATA.injuries = { note: 'Day 12 完结 · Messi/Haaland/Mbappé 双响 · 阿根廷 6 分' };
  } else {
    LIVE_DATA.todayDate = '2026-06-23';
    LIVE_DATA.fixtures = MATCH_DATA.todayMatches.map(m => ({
      id: m.id, home: m.home.name, away: m.away.name,
      status: m.actualResult?.status || 'NS',
      home_score: m.actualResult?.home_score ?? null,
      away_score: m.actualResult?.away_score ?? null,
      group: m.group,
    }));
    LIVE_DATA.allResults = [...day11Results, ...day12Results];
    LIVE_DATA.yesterdayResults = day11Results.map(r => ({ id: r.id, score: r.score }));
    LIVE_DATA.injuries = { note: 'Day 12 完结 · Messi/Haaland/Mbappé 双响 · 阿根廷 6 分' };
  }
  LIVE_DATA.standings = snaps.filter(g => ['G', 'H', 'I', 'J', 'K', 'L'].includes(g.group));

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  if (!todayIsDay13) {
    fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 12 (results synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  }
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/sync-day12-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 12 synced');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r) console.log(`   ${id} FT ${r.home_score}-${r.away_score}`);
  }
  console.log('✅ Archived:', archiveIds.join(', ') || '(updated)');
  try { rebuildScheduleScores(); } catch (e) { console.warn('⚠ schedule-scores:', e.message); }
}

main().catch(e => { console.error(e); process.exit(1); });
