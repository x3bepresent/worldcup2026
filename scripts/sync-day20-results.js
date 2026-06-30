/**
 * Day 20 赛果同步 — m78（2026-07-01 · 32强 · 用户报分 + 滚球盘归档）
 * Run: node scripts/sync-day20-results.js && node scripts/grade-agent-picks.js day20
 */
const fs = require('fs');
const path = require('path');
const { archiveFinishedMatch } = require('./archive-match.js');
const { enrichArchivedFull } = require('./archived-enrich.js');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');
const { buildM78 } = require('./roll-day20.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const HANDICAP = { ...require('./handicap-data-day20.js') };
const SYNC_IDS = ['m78'];

const MANUAL = {
  m78: {
    home_score: 1,
    away_score: 2,
    status: 'FT',
    label: '全场结束',
    scorers: '科特迪瓦扳平 · 挪威再进（73\'/85\' 段）',
    highlights: '达拉斯 · 科特迪瓦 1-2 挪威 · 半场 0-1 · 挪 -0/0.5 全赢 · 小 2.5 穿',
    ht_score: '0-1',
    fifa_id: '400021514',
  },
};

const REVIEW = {
  m78: '【赛后复盘】半场 0-1 挪领先 · 73\' 1-1 · 85\' 1-2 挪胜。Agent：挪威 -0/0.5 全赢；小 2.5 总3穿。滚球：42\'/65\' 挪平手1.14 两次预警 1-1（非诱盘，诚实定价）；73\' 大0.85 后 1-2 路径。诱盘嫌疑：临场挪低水非深诱上；68\' 小0.80 为情境盘非锁死。',
};

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
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
  m.note = (m.note || '').replace(/待赛|32强 M78/, '32强 M78 · 已结束 1-2');
  return m;
}

function main() {
  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches?.find((x) => x.id === id);
    if (!m) m = buildM78();
    const r = MANUAL[id];
    const patched = applyResult(JSON.parse(JSON.stringify(m)), r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex((x) => x.id === id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = archived;
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter((m) => !SYNC_IDS.includes(m.id));
  MATCH_DATA.lastUpdated = TS;
  const remaining = MATCH_DATA.todayMatches || [];
  MATCH_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 M78：科特迪瓦 1-2 挪威 · 半场 0-1 · 挪晋级走廊', time: '7月1日' },
    ...(MATCH_DATA.breakingNews || []).filter((b) => !b.text?.includes('M78')),
  ].slice(0, 12);

  RESULTS_DATA.lastUpdated = TS;

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-07-01',
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
    allResults: [{ id: 'm78', home: "Côte d'Ivoire", away: 'Norway', score: '1-2', group: 'KO' }],
    yesterdayResults: [],
    standings: [],
    injuries: {},
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 20\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Day 20 · m78 FT\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ m78 synced FT 1-2');
  try { rebuildScheduleScores(); } catch (e) { console.warn('schedule-scores:', e.message); }
}

main();
