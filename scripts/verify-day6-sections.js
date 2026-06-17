/**
 * Day 6 板块完整性检查 — m17–m20
 */
const fs = require('fs');
const path = require('path');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

const MATCH_DATA = loadData(path.join(__dirname, '..', 'js', 'matches-data.js'), 'MATCH_DATA');
const REQUIRED_SECTIONS = [
  ['actualResult.status', m => m.actualResult?.status === 'FT'],
  ['venue + city', m => m.venue && m.city],
  ['lineup', m => m.lineup?.home || m.lineup?.predicted?.home],
  ['referee.confirmed', m => m.referee?.confirmed === true && m.referee?.name],
  ['home.injuries', m => Array.isArray(m.home?.injuries) && m.home.injuries.length > 0],
  ['away.injuries', m => Array.isArray(m.away?.injuries) && m.away.injuries.length > 0],
  ['home.stars', m => (m.home?.stars?.length || 0) >= 3],
  ['h2h', m => m.h2h && (m.h2h.note || m.h2h.home_wins != null)],
  ['prediction', m => m.prediction?.score && m.prediction?.home_win != null],
  ['weather.impact_summary', m => m.weather?.impact_summary || m.weather?.condition_cn],
  ['coach_analysis', m => m.coach_analysis?.home?.name && m.coach_analysis?.away?.name],
  ['mystic.hexagram', m => m.mystic?.hexagram?.name || m.mystic?.date_bazi],
  ['depth_calibration', m => m.depth_calibration?.display_summary],
  ['group_context', m => m.group_context?.standings?.length === 4],
  ['upset_alert', m => m.upset_alert?.index != null],
];

let ok = true;
for (const m of MATCH_DATA.todayMatches || []) {
  console.log(`\n── ${m.id} ${m.home?.name} vs ${m.away?.name} ──`);
  if (m.actualResult) {
    console.log(`   赛果: ${m.actualResult.home_score}-${m.actualResult.away_score} (${m.actualResult.label})`);
  }
  for (const [label, check] of REQUIRED_SECTIONS) {
    const pass = check(m);
    console.log(`   ${pass ? '✓' : '✗'} ${label}`);
    if (!pass) ok = false;
  }
}

console.log(`\n${ok ? 'OK' : 'FAIL'} — Day 6 section check (${MATCH_DATA.todayMatches?.length || 0} matches)`);
process.exit(ok ? 0 : 1);
