/**
 * Rebuild js/schedule-scores.js after results sync.
 * Called from sync-day*.js scripts.
 */
const { execSync } = require('child_process');
const path = require('path');

function rebuildScheduleScores() {
  const root = path.join(__dirname, '..');
  execSync('node scripts/build-schedule-scores.js', { cwd: root, stdio: 'inherit' });
}

module.exports = { rebuildScheduleScores };
