/**
 * Day 22 赛果同步 — m83–m85
 * Run: node scripts/sync-day22-results.js && node scripts/grade-agent-picks.js day22 && node scripts/roll-day23.js && node scripts/enrich-day23.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { archiveFinishedMatch } = require('./archive-match.js');
const { enrichArchivedFull } = require('./archived-enrich.js');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');
const { buildM83, buildM84, buildM85 } = require('./roll-day22.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const HANDICAP = { ...require('./handicap-data-day22.js') };
const SYNC_IDS = ['m84', 'm83', 'm85'];

const FIFA_IDS = {
  m84: '400021519',
  m83: '400021526',
  m85: '400021527',
};

const BUILDERS = { m83: buildM83, m84: buildM84, m85: buildM85 };

const MANUAL = {
  m84: {
    home_score: 3,
    away_score: 0,
    ht_score: '1-0',
    scorers: "Oyarzabal 36'; Porro 66'; Oyarzabal 89'",
    highlights: '洛杉矶 · 西班牙 3-0 奥地利 · 半场 1-0',
  },
  m83: {
    home_score: 2,
    away_score: 1,
    ht_score: '0-0',
    scorers: "Perišić 53'; Ronaldo 68'; Ramos 90+4'",
    highlights: '多伦多 · 葡萄牙 2-1 克罗地亚 · 半场 0-0',
  },
  m85: {
    home_score: 2,
    away_score: 0,
    ht_score: '1-0',
    scorers: "Embolo 10'; Ndoye 46'",
    highlights: '温哥华 · 瑞士 2-0 阿尔及利亚 · 半场 1-0',
  },
};

const REVIEW = {
  m84: '【复盘】西班牙 3-0 奥地利 · 半场 1-0 · Oyarzabal 36\'/89\' · Porro 66\'。Agent：★西-1.5✓ · 大2.5/3赢半（总3）。',
  m83: '【复盘】葡萄牙 2-1 克罗地亚 · 半场 0-0 · Perišić 53\' · Ronaldo 68\' · Ramos 90+4\'。Agent：★克+0.5/1输半 · 大2.5/3赢半。',
  m85: '【复盘】瑞士 2-0 阿尔及利亚 · 半场 1-0 · Embolo 10\' · Ndoye 46\'。Agent：★阿+0.5✗ · 大2/2.5输半（总2）。',
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
    if ((g.Type === 2 || g.Type === 3) && g.Minute && (g.Period === 3 || parseInt(String(g.Minute), 10) <= 45)) h++;
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if ((g.Type === 2 || g.Type === 3) && g.Minute && (g.Period === 3 || parseInt(String(g.Minute), 10) <= 45)) a++;
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
    status: r.status || 'FT',
    label: r.label || '全场结束',
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
  m.note = `32强 ${m.id?.toUpperCase()} · 已结束 ${r.home_score}-${r.away_score}`;
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
      status: 'FT',
      label: '全场结束',
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
    if (!m) m = (RESULTS_DATA.finishedMatches || []).find((x) => x.id === id);
    const r = resolved[id];
    if (!m || !r) continue;
    const patched = applyResult(JSON.parse(JSON.stringify(m)), r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex((x) => x.id === id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = archived;
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter((m) => !SYNC_IDS.includes(m.id));
  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'Day 22 完结 · M83–M85 全部完场';

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方 · Day 22 M83–M85 完结';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 M84：西班牙 3-0 奥地利 · Oyarzabal 双响 · 半场 1-0', time: '7月3日' },
    { tag: 'OFFICIAL', text: '🏁 M83：葡萄牙 2-1 克罗地亚 · Ronaldo 68\' · Ramos 90+4\' · 半场 0-0', time: '7月3日' },
    { tag: 'OFFICIAL', text: '🏁 M85：瑞士 2-0 阿尔及利亚 · Embolo 10\' · Ndoye 46\' · 半场 1-0', time: '7月3日' },
    { tag: 'OFFICIAL', text: '🏁 昨日：英格兰2-1刚果 · 美国2-0波黑 · 比利时常规2-2加时3-2塞内加尔', time: '7月2日' },
    { tag: 'PREVIEW', text: '📊 Day22 Agent 双选已全部结算', time: '复盘' },
  ].slice(0, 12);

  const day22Ft = SYNC_IDS.map((id) => {
    const r = resolved[id];
    const m = (RESULTS_DATA.finishedMatches || []).find((x) => x.id === id);
    return {
      id,
      home: m?.home?.name || id,
      away: m?.away?.name || id,
      score: `${r.home_score}-${r.away_score}`,
      group: 'KO',
    };
  });

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-07-03',
    fixtures: [],
    allResults: day22Ft,
    yesterdayResults: day22Ft.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 22 全部完场 · M83–M85 已归档' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 22 全部完场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Day 22 FT · M83–M85\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

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
