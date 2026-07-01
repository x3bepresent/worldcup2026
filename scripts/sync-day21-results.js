/**
 * Day 21 赛果同步 — m80（单场，m81/m82 待赛）
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
const SYNC_IDS = ['m80'];
const FIFA_IDS = { m80: '400021512' };

const MANUAL = {
  m80: {
    home_score: 2,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: '（待 FIFA 进球者补全）',
    highlights: '亚特兰大 · 英格兰 2-1 刚果（金）· 半场 0-1 · 晚场扳平后小胜',
    ht_score: '0-1',
    fifa_id: '400021512',
  },
};

const REVIEW = {
  m80: '【赛后复盘】英格兰 2-1 刚果（金）· 半场 0-1 · 下半场扳平后小胜。Agent：★小 2.5 总3全输；刚果 +1.5 全赢（英仅净胜1）。滚球路径 1-1→2-1 分裂点兑现。',
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
    if ((g.Type !== 2 && g.Type !== 3) || !g.Minute) continue;
    const n = playerName(j, g.IdPlayer);
    rows.push(`${n} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if ((g.Type !== 2 && g.Type !== 3) || !g.Minute) continue;
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
  return '0-1';
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
  m.note = `32强 M80 · 已结束 ${score} · 英格兰 vs 刚果（金）`;
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
      const scorers = formatScorers(j);
      resolved[mid] = {
        ...resolved[mid],
        home_score: hs,
        away_score: as,
        scorers: scorers || resolved[mid]?.scorers,
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
    const m = MATCH_DATA.todayMatches?.find((x) => x.id === id);
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
  MATCH_DATA.syncSource = 'Day 21 · M80 完场 · M81/M82 待赛';

  const ftNews = {
    tag: 'OFFICIAL',
    text: '🏁 M80：英格兰 2-1 刚果（金）· 半场 0-1 · Agent ★小2.5✗ 刚果+1.5✓',
    time: '7月2日',
  };
  const filterM80 = (n) => !/M80.*2-1|M80.*英格兰.*刚果.*完/.test(n.text || '');
  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方 · Day 21 M80 完场';
  RESULTS_DATA.breakingNews = [
    ftNews,
    ...(RESULTS_DATA.breakingNews || []).filter(filterM80),
  ].slice(0, 12);
  MATCH_DATA.breakingNews = [
    ftNews,
    ...(MATCH_DATA.breakingNews || []).filter(filterM80),
  ].slice(0, 12);

  const remaining = MATCH_DATA.todayMatches || [];
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  const m80fix = LIVE_DATA.fixtures?.find((f) => f.id === 'm80');
  if (m80fix) {
    m80fix.status = 'FT';
    m80fix.home_score = 2;
    m80fix.away_score = 1;
    m80fix.elapsed = 90;
  }
  const ftRow = { id: 'm80', home: 'England', away: 'Congo DR', score: '2-1', group: 'KO' };
  LIVE_DATA.allResults = [ftRow, ...(LIVE_DATA.allResults || []).filter((r) => r.id !== 'm80')];

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 21 M80 FT\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Day 21 · M80 FT\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  for (const id of SYNC_IDS) {
    const r = resolved[id];
    console.log(`✅ ${id} FT ${r.home_score}-${r.away_score} · HT ${r.ht_score} · ${r.scorers || ''}`);
  }
  console.log(`   今日剩余 ${remaining.length} 场：${remaining.map((m) => m.id).join(', ') || '—'}`);
  try { rebuildScheduleScores(); } catch (e) { console.warn('schedule-scores:', e.message); }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
