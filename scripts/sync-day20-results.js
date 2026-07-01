/**
 * Day 20 赛果同步 — m77、m79（FIFA 官方 · m78 已归档）
 * Run: node scripts/sync-day20-results.js && node scripts/grade-agent-picks.js day20 && node scripts/roll-day21.js && node scripts/enrich-day21.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { archiveFinishedMatch } = require('./archive-match.js');
const { enrichArchivedFull } = require('./archived-enrich.js');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');
const { buildM77, buildM79 } = require('./roll-day20.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const HANDICAP = { ...require('./handicap-data-day20.js') };
const SYNC_IDS = ['m77', 'm79'];

const FIFA_IDS = {
  m77: '400021523',
  m79: '400021520',
};

const BUILDERS = { m77: buildM77, m79: buildM79 };

const MANUAL = {
  m77: {
    home_score: 3,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Mbappé 45'/74'; Barcola 53'",
    highlights: '纽约 · 法国 3-0 瑞典 · 半场 1-0',
    ht_score: '1-0',
    fifa_id: '400021523',
  },
  m79: {
    home_score: 2,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Quiñones 22'; Jiménez 31'",
    highlights: '墨西哥城 · 墨西哥 2-0 厄瓜多尔 · 半场 2-0',
    ht_score: '2-0',
    fifa_id: '400021520',
  },
};

const REVIEW = {
  m77: '【赛后复盘】法国 3-0 瑞典 · 半场 1-0（Mbappé 45\'）· 下半场 Barcola 53\'、Mbappé 74\'。Agent：★小 3.5 总3全赢；瑞典 +1.5/2 全输。模型 2-0/3-0 路径兑现，深盘穿。',
  m79: '【赛后复盘】墨西哥 2-0 厄瓜多尔 · 半场 2-0（Quiñones 22\'、Jiménez 31\'）· 阿兹特克零封。Agent 待 Day20 结算。',
};

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
    .find((x) => x.IdPlayer === idPlayer);
  return p?.PlayerName?.[0]?.Description || p?.AliasName?.[0]?.Description || '';
}

function formatScorers(j) {
  const rows = [];
  for (const g of j.HomeTeam?.Goals || []) {
    if (g.Type !== 2 && g.Type !== 3 || !g.Minute) continue;
    const n = playerName(j, g.IdPlayer);
    rows.push(`${n} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if (g.Type !== 2 && g.Type !== 3 || !g.Minute) continue;
    const n = playerName(j, g.IdPlayer);
    rows.push(`${n} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  return rows.join('; ');
}

function inferHt(j) {
  let h = 0;
  let a = 0;
  for (const g of j.HomeTeam?.Goals || []) {
    if ((g.Type === 2 || g.Type === 3) && g.Minute && (g.Period === 3 || parseInt(g.Minute, 10) <= 45)) h++;
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if ((g.Type === 2 || g.Type === 3) && g.Minute && (g.Period === 3 || parseInt(g.Minute, 10) <= 45)) a++;
  }
  if (h + a > 0) return `${h}-${a}`;
  return '0-0';
}

function isFinished(j) {
  return j.MatchStatus === 0 && j.Period === 10;
}

function pushForm(form, r) {
  const f = [...(form || ['W', 'D', 'L', 'W', 'D'])];
  f.shift();
  f.push(r);
  return f;
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
    fifa_match_id: r.fifa_id,
    updated: TS,
  };
  if (reviewKey && REVIEW[reviewKey]) {
    m.prediction = m.prediction || {};
    m.prediction.key_factor = REVIEW[reviewKey];
  }
  const score = `${r.home_score}-${r.away_score}`;
  m.note = (m.note || '').replace(/待赛|32强 M\d+/, `32强 ${m.id?.toUpperCase()} · 已结束 ${score}`);
  if (m.home?.form) {
    m.home.form = pushForm(m.home.form, r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D');
  }
  if (m.away?.form) {
    m.away.form = pushForm(m.away.form, r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D');
  }
  return m;
}

async function main() {
  const resolved = { ...MANUAL };

  for (const [mid, fid] of Object.entries(FIFA_IDS)) {
    try {
      const j = await fetchFifa(fid);
      if (!isFinished(j)) continue;
      const hs = j.HomeTeam?.Score ?? resolved[mid]?.home_score;
      const as = j.AwayTeam?.Score ?? resolved[mid]?.away_score;
      resolved[mid] = {
        ...resolved[mid],
        home_score: hs,
        away_score: as,
        scorers: formatScorers(j) || resolved[mid]?.scorers,
        ht_score: inferHt(j) || resolved[mid]?.ht_score,
        status: 'FT',
        label: '全场结束',
        fifa_id: fid,
      };
    } catch (e) {
      console.warn('⚠ FIFA', mid, e.message);
    }
  }

  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches?.find((x) => x.id === id);
    if (!m && BUILDERS[id]) m = BUILDERS[id]();
    const r = resolved[id];
    if (!m || !r || r.status !== 'FT') continue;
    const patched = applyResult(JSON.parse(JSON.stringify(m)), r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex((x) => x.id === id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = archived;
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter((m) => !SYNC_IDS.includes(m.id));
  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'Day 20 完结 · 待 roll-day21';

  const day20Ft = [
    { id: 'm77', home: 'France', away: 'Sweden', score: `${resolved.m77.home_score}-${resolved.m77.away_score}`, group: 'KO' },
    { id: 'm78', home: "Côte d'Ivoire", away: 'Norway', score: '1-2', group: 'KO' },
    { id: 'm79', home: 'Mexico', away: 'Ecuador', score: `${resolved.m79.home_score}-${resolved.m79.away_score}`, group: 'KO' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 20 M77–M79 完结';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 M77：法国 3-0 瑞典 · Mbappé 双响 · 半场 1-0', time: '7月1日' },
    { tag: 'OFFICIAL', text: '🏁 M78：科特迪瓦 1-2 挪威', time: '7月1日' },
    { tag: 'OFFICIAL', text: '🏁 M79：墨西哥 2-0 厄瓜多尔 · 半场 2-0', time: '7月1日' },
    { tag: 'PREVIEW', text: '⚔️ 7月2日 32强：英格兰-刚果(金)(00:00) · 阿根廷-哥伦比亚(04:00) · 美国-葡萄牙(08:00)', time: '今日赛程' },
  ].slice(0, 12);
  MATCH_DATA.breakingNews = RESULTS_DATA.breakingNews;

  const remaining = MATCH_DATA.todayMatches || [];

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-07-02',
    fixtures: remaining.map((m) => ({
      id: m.id,
      home: m.home?.name,
      away: m.away?.name,
      status: 'NS',
      home_score: null,
      away_score: null,
      group: 'KO',
      round: 'R32',
    })),
    allResults: day20Ft,
    yesterdayResults: day20Ft.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 20 完结 · 运行 roll-day21 切换今日赛程' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 20 赛果同步\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Day 20 FT · pending roll-day21\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  for (const id of SYNC_IDS) {
    const r = resolved[id];
    console.log(`✅ ${id} synced FT ${r.home_score}-${r.away_score} · ${r.scorers || ''}`);
  }
  try { rebuildScheduleScores(); } catch (e) { console.warn('schedule-scores:', e.message); }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
