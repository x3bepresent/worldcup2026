/**
 * 全量重算已归档赛果 — day1–5 handicap + v2 胜平负 + pre_match_context
 * node scripts/rehydrate-archived-results.js
 */
const fs = require('fs');
const path = require('path');
const { enrichArchivedFull } = require('./archived-enrich.js');
const { archiveFinishedMatch } = require('./archive-match.js');

const ROOT = path.join(__dirname, '..');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const handicapFiles = [
  'handicap-data-day1-5.js',
  'handicap-data-day6.js',
  'handicap-data-day7.js',
  'handicap-data-day8.js',
  'handicap-data-day9.js',
  'handicap-data-day10.js',
];
const allHandicap = {};
for (const f of handicapFiles) {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) Object.assign(allHandicap, require(p));
}

const goalTiming = {
  ...require('./goal-timing-data-day9'),
  ...require('./goal-timing-data-day10'),
};

function loadResults() {
  const raw = fs.readFileSync(RESULTS_PATH, 'utf8');
  return new Function(raw + '\nreturn RESULTS_DATA;')();
}

const data = loadResults();
let updated = 0;

data.finishedMatches = (data.finishedMatches || []).map(m => {
  if (!m.archived && m.actualResult?.home_score == null) return m;
  const enriched = enrichArchivedFull(m, allHandicap, goalTiming);
  updated += 1;
  return archiveFinishedMatch(enriched, { archivedAt: m.archivedAt || TS });
});

data.lastUpdated = TS;
data.syncSource = (data.syncSource || '').replace(/ · rehydrate v2/g, '') + ' · rehydrate v2';

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 精简归档（推演 + 赛果核验 + 复盘概要）\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(data, null, 2)};\n`,
);

console.log(`✅ Rehydrated ${updated} archived matches (handicap day1–10 + v2 probs)`);
console.log(`   handicap keys: ${Object.keys(allHandicap).length}`);
