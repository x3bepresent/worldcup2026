/**
 * Day 18 赛果同步 — m73（2026-06-29 北京时间 · 32强揭幕）
 * Run: node scripts/sync-day18-results.js && node scripts/roll-day19.js && node scripts/enrich-day19.js && node scripts/apply-prediction-signals.js
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

const HANDICAP = { ...require('./handicap-data-day18') };
const { buildM73 } = require('./roll-day18');

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

function firstGoalMin(j) {
  const goals = [...(j.HomeTeam?.Goals || []), ...(j.AwayTeam?.Goals || [])];
  if (!goals.length) return null;
  goals.sort((a, b) => parseInt(String(a.Minute).replace(/\D/g, ''), 10) - parseInt(String(b.Minute).replace(/\D/g, ''), 10));
  return parseInt(String(goals[0].Minute).replace(/\D/g, ''), 10) || null;
}

const FIFA_IDS = { m73: '400021518' };

const MANUAL = {
  m73: {
    home_score: 0, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Stephen EUSTAQUIO 90'+2'",
    highlights: '洛杉矶 · 南非 0-1 加拿大 · Eustaquio 90+2\' 绝杀 · 加拿大 -0/0.5 穿 · 小球 2/2.5 赢',
    ht_score: '0-0', first_goal_min: 92, fifa_id: '400021518',
  },
};

const REVIEW = {
  m73: '【赛后复盘】赛前模型客胜 42%/首推 1-1；实际 0-1 加拿大胜。Eustaquio 90+2\' 绝杀 · 半场 0-0。方向：客胜命中；比分 0-1 在 Top3；总球 1（小 2/2.5 全赢）。加拿大 -0/0.5 穿。路径：胜者 M90 对 M75 胜者。',
};

const SYNC_IDS = ['m73'];

function patchStars(m, id) {
  if (id === 'm73' && m.away?.stars?.[0]) {
    m.away.stars[0] = { name: 'Stephen Eustáquio', pos: 'CM', club: 'Porto', stats: "90+2' 绝杀", rating: 8.5, desc: '0-1 · 加拿大晋级 16 强走廊' };
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
          first_goal_min: firstGoalMin(j) ?? resolved[mid]?.first_goal_min,
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

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches?.find(x => x.id === id);
    if (!m) m = buildM73();
    const fromResults = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    if (!m && fromResults) m = JSON.parse(JSON.stringify(fromResults));
    const r = resolved[id];
    if (!m || !r || r.status !== 'FT') continue;

    const patched = applyResult(JSON.parse(JSON.stringify(m)), r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex(x => x.id === id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = archived;
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter(m => !SYNC_IDS.includes(m.id));

  const day18Results = SYNC_IDS.map(id => {
    const r = resolved[id];
    const m = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    return m && r ? {
      id,
      home: m.home?.name || m.home,
      away: m.away?.name || m.away,
      score: `${r.home_score}-${r.away_score}`,
      group: 'KO',
    } : null;
  }).filter(Boolean);

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 18 M73 完结 · 32强连战';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 M73：南非 0-1 加拿大 · Eustaquio 90+2\' 绝杀', time: '6月29日' },
    { tag: 'PREVIEW', text: '⚔️ 6月30日 32强 3 场：巴西-日本(01:00) · 德国-巴拉圭(04:30) · 荷兰-摩洛哥(09:00)', time: '今日赛程' },
    { tag: 'PREVIEW', text: '加拿大晋级 · M90 走廊对 M75 胜者（荷兰/摩洛哥）', time: '路径' },
  ].slice(0, 12);

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'Day 18 M73 完结 · Day 19 待滚日';
  MATCH_DATA.breakingNews = RESULTS_DATA.breakingNews;

  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.todayDate = '2026-06-30';
  LIVE_DATA.allResults = [...day18Results, ...(LIVE_DATA.allResults || []).filter(r => !SYNC_IDS.includes(r.id))];
  LIVE_DATA.yesterdayResults = day18Results.map(r => ({ id: r.id, score: r.score }));
  LIVE_DATA.injuries = { note: 'Day 18 M73 完结 · Day 19 32强 3 场待赛' };
  LIVE_DATA.fixtures = [];

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 18 M73 完结\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/sync-day18-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 18 synced (1/1 finished)');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r?.status === 'FT') console.log(`   ${id} FT ${r.home_score}-${r.away_score} · ${r.scorers || ''}`);
  }
  try { rebuildScheduleScores(); } catch (e) { console.warn('⚠ schedule-scores:', e.message); }
}

main().catch(e => { console.error(e); process.exit(1); });
