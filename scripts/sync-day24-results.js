/**
 * Day 24 赛果同步 — m89–m90 · 16强开赛
 * Run: node scripts/sync-day24-results.js && node scripts/grade-agent-picks.js day24
 */
const fs = require('fs');
const path = require('path');
const { archiveFinishedMatch } = require('./archive-match.js');
const { enrichArchivedFull } = require('./archived-enrich.js');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');
const { buildM89, buildM90 } = require('./roll-day24.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const HANDICAP = { ...require('./handicap-data-day24.js') };
const SYNC_IDS = ['m89', 'm90'];
const BUILDERS = { m89: buildM89, m90: buildM90 };

// FIFA Match Centre · api.fifa.com · 2026-07-05
const MANUAL = {
  m89: {
    home_score: 0,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Kylian Mbappé 70' (点球)",
    highlights: '费城 Lincoln Financial · 巴拉圭 0-1 法国 · Mbappé 点球破铁桶 · 出席 68,324',
    ht_score: '0-0',
    fifa_match_id: '400021533',
    note: '16强 M89 · 已结束 0-1 · 法国晋级8强',
  },
  m90: {
    home_score: 0,
    away_score: 3,
    status: 'FT',
    label: '全场结束',
    scorers: "Azzedine Ounahi 50', 82'; Soufiane Rahimi 90'+8'",
    highlights: '休斯顿 NRG · 加拿大 0-3 摩洛哥 · Ounahi 双响 · 出席 68,777',
    ht_score: '0-0',
    fifa_match_id: '400021530',
    note: '16强 M90 · 已结束 0-3 · 摩洛哥晋级8强',
  },
};

const REVIEW = {
  m89: '【复盘】巴拉圭 0-1 法国 · Mbappé 70\'点球 · 半场0-0。球盘：★巴+2全赢(净胜1) · 小3全赢(总1)。受让深盘+小球双命中——法国胜但难穿3球。',
  m90: '【复盘】加拿大 0-3 摩洛哥 · Ounahi 50\'/82\' · Rahimi 90\'+8\' · 半场0-0。球盘：★加+0.5全输 · 大2/2.5全赢(总3)。受让主项落空，大球副项命中。',
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

function applyResult(m, r, reviewKey) {
  const regH = r.regulation_home_score ?? null;
  const regA = r.regulation_away_score ?? null;
  m.actualResult = {
    home_score: r.home_score,
    away_score: r.away_score,
    regulation_home_score: regH,
    regulation_away_score: regA,
    status: r.status || 'FT',
    label: r.label || '全场结束',
    scorers: r.scorers,
    highlights: r.highlights,
    ht_score: r.ht_score,
    pk_winner: r.pk_winner || null,
    pk_score: r.pk_score || null,
    fifa_match_id: r.fifa_match_id,
    updated: TS,
  };
  if (reviewKey && REVIEW[reviewKey]) {
    m.prediction = m.prediction || {};
    m.prediction.key_factor = REVIEW[reviewKey];
  }
  m.note = r.note || `16强 ${m.id?.toUpperCase()} · 已结束 ${r.home_score}-${r.away_score}`;
  const bh = regH != null ? regH : r.home_score;
  const ba = regA != null ? regA : r.away_score;
  if (m.home?.form) {
    m.home.form = pushForm(m.home.form, bh > ba ? 'W' : bh < ba ? 'L' : 'D');
  }
  if (m.away?.form) {
    m.away.form = pushForm(m.away.form, ba > bh ? 'W' : ba < bh ? 'L' : 'D');
  }
  return m;
}

function main() {
  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches?.find((x) => x.id === id);
    if (!m && BUILDERS[id]) m = BUILDERS[id]();
    if (!m) m = (RESULTS_DATA.finishedMatches || []).find((x) => x.id === id);
    const r = MANUAL[id];
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
  MATCH_DATA.syncSource = 'Day 24 完结 · M89–M90 全部完场 · 16强续战';

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方 · Day 24 M89–M90 完结 · 16强续战 7/6';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: "🏁 M89：巴拉圭 0-1 法国 · Mbappé 70'点球 · 法国晋级8强", time: '7月5日' },
    { tag: 'OFFICIAL', text: "🏁 M90：加拿大 0-3 摩洛哥 · Ounahi 双响 · 摩洛哥晋级8强", time: '7月5日' },
    { tag: 'PREVIEW', text: '⚔️ 16强 7/6：巴西-挪威(04:00) · 墨西哥-英格兰(08:00)', time: '7月6日' },
    { tag: 'UPDATE', text: '📊 Day24 Agent 双选已全部结算', time: '复盘' },
  ].slice(0, 12);

  const day24Ft = SYNC_IDS.map((id) => {
    const r = MANUAL[id];
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
    todayDate: '2026-07-05',
    fixtures: [],
    allResults: day24Ft,
    yesterdayResults: day24Ft.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 24 全部完场 · M89–M90 已归档 · 16强续战 7/6' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 24 全部完场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Day 24 FT · M89–M90\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  for (const id of SYNC_IDS) {
    const r = MANUAL[id];
    console.log(`✅ ${id} ${r.status} ${r.home_score}-${r.away_score} · HT ${r.ht_score} · ${r.scorers}`);
  }
  try { rebuildScheduleScores(); } catch (e) { console.warn('schedule-scores:', e.message); }
}

main();
