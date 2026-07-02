/**
 * Day 21 赛果同步 — m80–m82
 * Run: node scripts/sync-day21-results.js && node scripts/grade-agent-picks.js day21 && node scripts/build-agent-stats.js
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

const HANDICAP = { ...require('./handicap-data-day21.js') };
const SYNC_IDS = ['m80', 'm81', 'm82'];

const FIFA_IDS = {
  m80: '400021512',
  m81: '400021524',
  m82: '400021525',
};

const MANUAL = {
  m80: {
    home_score: 2,
    away_score: 1,
    ht_score: '0-1',
    highlights: '亚特兰大 · 英格兰 2-1 刚果（金）· 半场 0-1',
  },
  m81: {
    home_score: 2,
    away_score: 0,
    ht_score: '1-0',
    highlights: '旧金山湾区 · 美国 2-0 波黑 · 半场 1-0',
  },
  m82: {
    home_score: 3,
    away_score: 2,
    regulation_home_score: 2,
    regulation_away_score: 2,
    status: 'AET',
    label: '加时结束',
    ht_score: '0-1',
    highlights: '西雅图 · 比利时 常规2-2 · 加时3-2 塞内加尔 · 半场 0-1',
  },
};

const REVIEW = {
  m80: '【复盘】英格兰 2-1 刚果（金）· 半场 0-1 · Kane 75\'/86\'。Agent：★小2.5✗ · 刚果+1.5✓（英仅净胜1）。',
  m81: '【复盘】美国 2-0 波黑 · Balogun 45\' · Tillman 82\'。Agent：★波+1.5✗ · 大2.5/3✗（总2球）。',
  m82: '【复盘】比利时 常规2-2 · 加时3-2 塞内加尔 · 半场 0-1 · Diarra 24\'/Sarr 51\' · Lukaku 86\'/Tielemans 89\'。球盘按90分钟：★塞+0/0.5赢半 · 大2.5✓（总4球）。',
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
    if ((g.Type === 2 || g.Type === 3) && g.Minute) {
      rows.push(`${playerName(j, g.IdPlayer)} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
    }
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if ((g.Type === 2 || g.Type === 3) && g.Minute) {
      rows.push(`${playerName(j, g.IdPlayer)} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
    }
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
  return `${h}-${a}`;
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
    regulation_home_score: r.regulation_home_score ?? null,
    regulation_away_score: r.regulation_away_score ?? null,
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
  const score = r.regulation_home_score != null
    ? `${r.regulation_home_score}-${r.regulation_away_score}（90'）→ ${r.home_score}-${r.away_score}（加时）`
    : `${r.home_score}-${r.away_score}`;
  m.note = `32强 ${m.id?.toUpperCase()} · 已结束 ${score}`;
  if (m.home?.form) {
    m.home.form = pushForm(m.home.form, r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D');
  }
  if (m.away?.form) {
    m.away.form = pushForm(m.away.form, r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D');
  }
  return m;
}

async function main() {
  const resolved = {};
  for (const id of SYNC_IDS) {
    resolved[id] = {
      ...MANUAL[id],
      status: MANUAL[id].status || 'FT',
      label: MANUAL[id].label || '全场结束',
      fifa_id: FIFA_IDS[id],
    };
  }

  for (const [mid, fid] of Object.entries(FIFA_IDS)) {
    try {
      const j = await fetchFifa(fid);
      if (!isFinished(j)) continue;
      resolved[mid] = {
        ...resolved[mid],
        home_score: j.HomeTeam?.Score ?? resolved[mid].home_score,
        away_score: j.AwayTeam?.Score ?? resolved[mid].away_score,
        scorers: formatScorers(j) || resolved[mid].scorers,
        ht_score: inferHt(j) || resolved[mid].ht_score,
        status: resolved[mid].status || 'FT',
        label: resolved[mid].label || '全场结束',
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
    if (!m) {
      m = (RESULTS_DATA.finishedMatches || []).find((x) => x.id === id);
    }
    const r = resolved[id];
    if (!m || !r || !['FT', 'AET', 'PEN'].includes(r.status)) continue;
    const patched = applyResult(JSON.parse(JSON.stringify(m)), r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex((x) => x.id === id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = archived;
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter((m) => !SYNC_IDS.includes(m.id));
  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'Day 21 完结 · M80–M82 全部完场';
  MATCH_DATA.phase_cn = '淘汰赛 · 32强';
  if (!MATCH_DATA.todayMatches?.length) {
    MATCH_DATA.breakingNews = [
      { tag: 'OFFICIAL', text: '🏁 Day21 完结：英格兰2-1刚果 · 美国2-0波黑 · 比利时常规2-2加时3-2塞内加尔', time: '7月2日' },
      { tag: 'PREVIEW', text: '📊 Day21 Agent 双选已全部结算', time: '复盘' },
    ];
  }

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方 · Day 21 M80–M82 完结';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 M80：英格兰 2-1 刚果（金）· Kane 双响 · 半场 0-1', time: '7月2日' },
    { tag: 'OFFICIAL', text: '🏁 M81：美国 2-0 波黑 · Balogun 45\' · Tillman 82\'', time: '7月2日' },
    { tag: 'OFFICIAL', text: '🏁 M82：比利时 常规2-2 · 加时3-2 塞内加尔 · 球盘按90分钟结算 · 半场 0-1', time: '7月2日' },
    ...(RESULTS_DATA.breakingNews || []).filter((n) => !/^🏁 M8[012]/.test(n.text || '')),
  ].slice(0, 12);

  const day21Ft = SYNC_IDS.map((id) => {
    const r = resolved[id];
    const m = (RESULTS_DATA.finishedMatches || []).find((x) => x.id === id);
    const score = r.regulation_home_score != null
      ? `${r.regulation_home_score}-${r.regulation_away_score}(90')→${r.home_score}-${r.away_score}`
      : `${r.home_score}-${r.away_score}`;
    return {
      id,
      home: m?.home?.name || id,
      away: m?.away?.name || id,
      score,
      group: 'KO',
    };
  });

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-07-02',
    fixtures: [],
    allResults: day21Ft,
    yesterdayResults: day21Ft.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 21 全部完场 · M80–M82 已归档' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 21 全部完场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Day 21 FT · M80–M82\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  for (const id of SYNC_IDS) {
    const r = resolved[id];
    console.log(`✅ ${id} FT ${r.home_score}-${r.away_score} · HT ${r.ht_score} · ${r.scorers || ''}`);
  }
  try { rebuildScheduleScores(); } catch (e) { console.warn('schedule-scores:', e.message); }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
