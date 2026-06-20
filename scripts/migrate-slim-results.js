/**
 * 压缩 results-data.js 为精简归档格式
 * node scripts/migrate-slim-results.js
 */
const fs = require('fs');
const path = require('path');
const lib = require('../js/prediction-signals-lib.js');
const { archiveFinishedMatch, isSlimArchive } = require('./archive-match.js');

const ROOT = path.join(__dirname, '..');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const handicapFiles = [
  'handicap-data-day6.js',
  'handicap-data-day7.js',
  'handicap-data-day8.js',
  'handicap-data-day9.js',
];
const allHandicap = {};
for (const f of handicapFiles) {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) Object.assign(allHandicap, require(p));
}

function loadResults() {
  const raw = fs.readFileSync(RESULTS_PATH, 'utf8');
  return new Function(raw + '\nreturn RESULTS_DATA;')();
}

function enrichBeforeArchive(m) {
  const copy = JSON.parse(JSON.stringify(m));
  const raw = allHandicap[copy.id];
  if (raw && !copy.depth_calibration?.display_summary) {
    copy.depth_calibration = lib.buildDepthCalibration(copy, raw);
    if (copy.prediction) {
      copy.prediction = lib.applyDepthToPrediction(copy.prediction, copy.depth_calibration);
    }
  }
  if (copy.actualResult?.home_score != null && copy.prediction?.xg_home != null) {
    const ge = lib.buildGoalEfficiencyReview(copy);
    if (ge) {
      if (!copy.depth_calibration) copy.depth_calibration = {};
      copy.depth_calibration.goal_efficiency = ge;
    }
    const dc = copy.depth_calibration;
    if (dc?.display_summary && !dc.preview_replay) {
      const ar = lib.enrichActualResultForReview(copy);
      dc.preview_replay = lib.buildPreviewPostMatchReview(
        dc.display_summary,
        ar,
        copy.home?.name,
        copy.away?.name,
        {
          tier_home: dc.tier_home,
          tier_gap: dc.tier_gap,
          totals_line: dc.totals_line,
        }
      );
    }
  }
  return copy;
}

const data = loadResults();
const before = JSON.stringify(data.finishedMatches).length;
let migrated = 0;
let skipped = 0;

data.finishedMatches = (data.finishedMatches || []).map(m => {
  if (isSlimArchive(m)) {
    skipped += 1;
    return m;
  }
  const enriched = enrichBeforeArchive(m);
  migrated += 1;
  return archiveFinishedMatch(enriched, { archivedAt: m.archivedAt || TS });
});

const after = JSON.stringify(data.finishedMatches).length;
data.lastUpdated = TS;
data.syncSource = (data.syncSource || '') + ' · slim archive';

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 精简归档（推演 + 赛果核验 + 复盘概要）\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(data, null, 2)};\n`
);

console.log(`✅ migrated ${migrated} matches · skipped ${skipped} already slim`);
console.log(`   size ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB (${Math.round((1 - after / before) * 100)}% smaller)`);
console.log(`   total finished: ${data.finishedMatches.length}`);
