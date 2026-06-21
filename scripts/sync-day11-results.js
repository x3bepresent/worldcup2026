/**
 * Day 11 赛果同步 — m38/m39/m37/m40（2026-06-22 北京时间 · 4场）
 * Run: node scripts/sync-day11-results.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { archiveFinishedMatch } = require('./archive-match.js');
const { enrichArchivedFull } = require('./archived-enrich.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const HANDICAP = {
  ...require('./handicap-data-day11'),
};

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

function isFinished(j) {
  return j.MatchStatus === 0 && j.Period === 10;
}

const FIFA_IDS = {
  m38: '400021483',
  m39: '400021477',
  m37: '400021487',
  m40: '400021480',
};

/** 手工补充（API 无半场/助攻时） */
const MANUAL = {};

async function syncMatch(m) {
  const fifaId = FIFA_IDS[m.id];
  if (!fifaId) return m;

  let j;
  try {
    j = await fetchFifa(fifaId);
  } catch (e) {
    console.warn(`   ⚠ ${m.id} FIFA fetch failed:`, e.message);
    return m;
  }

  const manual = MANUAL[m.id] || {};
  if (!isFinished(j) && manual.home_score == null) {
    return m;
  }

  const hs = manual.home_score ?? j.HomeTeam?.Score ?? j.HomeTeamScore;
  const as = manual.away_score ?? j.AwayTeam?.Score ?? j.AwayTeamScore;
  if (hs == null || as == null) return m;

  const homeW = hs > as ? 'W' : hs < as ? 'L' : 'D';
  const awayW = hs < as ? 'W' : hs > as ? 'L' : 'D';

  m.actualResult = {
    home_score: hs,
    away_score: as,
    status: 'FT',
    label: manual.label || '全场结束',
    scorers: manual.scorers || formatScorers(j) || null,
    highlights: manual.highlights || null,
    ht_score: manual.ht_score || null,
    first_goal_min: manual.first_goal_min ?? null,
    xg_report: manual.xg_report || null,
    fifa_id: fifaId,
    updated: TS,
  };

  m.home.form = pushForm(m.home.form, homeW);
  m.away.form = pushForm(m.away.form, awayW);
  m.note = `${m.note?.split(' · 已结束')[0] || m.note} · 已结束 ${hs}-${as}`;

  if (m.prediction?.key_factor && !m.prediction.key_factor.includes('【赛后复盘】')) {
    const review = `【赛后复盘】实际 ${hs}-${as}；${manual.highlights || '详见 actualResult'}`;
    m.prediction.key_factor = `${m.prediction.key_factor} ${review}`.trim();
  }

  console.log(`   ${m.id} FT ${hs}-${as}`);
  return m;
}

function upsertGroup(snapshots, group, label, table) {
  const i = snapshots.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snapshots[i] = snap;
  else snapshots.push(snap);
  return snapshots;
}

(async () => {
  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  const ids = ['m38', 'm39', 'm37', 'm40'];
  let synced = 0;
  const archiveIds = [];

  for (const m of MATCH_DATA.todayMatches || []) {
    if (!ids.includes(m.id)) continue;
    const before = m.actualResult?.status;
    await syncMatch(m);
    if (m.actualResult?.status === 'FT' && before !== 'FT') synced += 1;

    if (m.actualResult?.status === 'FT') {
      const enriched = enrichArchivedFull(m, HANDICAP);
      const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
      const i = (RESULTS_DATA.finishedMatches || []).findIndex(x => x.id === m.id);
      if (i < 0) {
        RESULTS_DATA.finishedMatches.push(archived);
        archiveIds.push(m.id);
      } else {
        RESULTS_DATA.finishedMatches[i] = archived;
      }
    }
  }

  // 积分榜在全部 4 场结束后更新 — 目前仅同步已结束场次
  RESULTS_DATA.lastUpdated = TS;
  MATCH_DATA.lastUpdated = TS;

  const day10Results = [
    { id: 'm35', home: 'Netherlands', away: 'Sweden', score: '5-1', group: 'F' },
    { id: 'm33', home: 'Germany', away: "Côte d'Ivoire", score: '2-1', group: 'E' },
    { id: 'm34', home: 'Ecuador', away: 'Curaçao', score: '0-0', group: 'E' },
    { id: 'm36', home: 'Tunisia', away: 'Japan', score: '0-4', group: 'F' },
  ];
  const todayFt = MATCH_DATA.todayMatches
    .filter(m => m.actualResult?.status === 'FT')
    .map(m => ({
      id: m.id,
      home: m.home.name,
      away: m.away.name,
      score: `${m.actualResult.home_score}-${m.actualResult.away_score}`,
      group: m.group,
    }));

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-22',
    fixtures: MATCH_DATA.todayMatches.map(m => ({
      id: m.id,
      home: m.home.name,
      away: m.away.name,
      status: m.actualResult?.status || 'NS',
      home_score: m.actualResult?.home_score ?? null,
      away_score: m.actualResult?.away_score ?? null,
      group: m.group,
    })),
    allResults: [...day10Results, ...todayFt],
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: `Day 11 · 已同步 ${todayFt.length}/4 场` },
    yesterdayResults: day10Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 11\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
  );
  fs.writeFileSync(
    RESULTS_PATH,
    `// 过往赛果 — 精简归档\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
  );
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/sync-day11-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );

  console.log(`✅ Day 11 results synced · ${synced} newly finished · archived: ${archiveIds.join(', ') || 'none new'}`);
  if (!synced) {
    console.log('   (四场尚未全部结束 — 赛后重跑本脚本)');
  }
})();
