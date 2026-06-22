/**
 * Verify js/schedule-scores.js vs results-data.js (via FIFA MatchNumber)
 * Run: node scripts/audit-schedule-scores.js
 */
const fs = require('fs');
const path = require('path');
const { teamsMatch } = require('./fifa-team-names');

const ROOT = path.join(__dirname, '..');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const SCHEDULE_PATH = path.join(ROOT, 'schedule.html');
const SCORES_PATH = path.join(ROOT, 'js', 'schedule-scores.js');
const FIFA_INDEX_PATH = path.join(ROOT, 'js', 'fifa-match-index.json');

function loadResults() {
  const raw = fs.readFileSync(RESULTS_PATH, 'utf8');
  return new Function(`${raw}\nreturn RESULTS_DATA;`)();
}

function loadScheduleScores() {
  const raw = fs.readFileSync(SCORES_PATH, 'utf8');
  return new Function(`${raw}\nreturn SCHEDULE_SCORES;`)();
}

function parseScheduleMatches() {
  const html = fs.readFileSync(SCHEDULE_PATH, 'utf8');
  const block = html.match(/const MATCHES = \[([\s\S]*?)\];/);
  if (!block) throw new Error('MATCHES not found');
  return new Function(`return [${block[1]}];`)();
}

// Reuse build resolver (inline minimal)
const { teamsPairKey, toScheduleName } = require('./fifa-team-names');

function buildExpectedByFifaNo() {
  const RESULTS = loadResults();
  const schedule = parseScheduleMatches();
  const fifaIndex = JSON.parse(fs.readFileSync(FIFA_INDEX_PATH, 'utf8'));

  const fifaIdToNo = {};
  const fifaByTeams = {};
  for (const [noStr, row] of Object.entries(fifaIndex.matches || {})) {
    fifaIdToNo[row.fifaId] = Number(noStr);
    fifaByTeams[teamsPairKey(toScheduleName(row.home), toScheduleName(row.away))] = Number(noStr);
  }
  const scheduleByTeams = {};
  for (const s of schedule) {
    scheduleByTeams[teamsPairKey(s.home, s.away)] = s.no;
  }

  const expected = {};
  for (const fm of RESULTS.finishedMatches || []) {
    const ar = fm.actualResult;
    if (!ar || !['FT', 'AET', 'PEN'].includes(ar.status)) continue;
    const home = typeof fm.home === 'string' ? fm.home : fm.home?.name;
    const away = typeof fm.away === 'string' ? fm.away : fm.away?.name;
    const fid = ar.fifa_match_id || fm.fifa_match_id || fm.lineup?.fifa_match_id;
    let no = fid ? fifaIdToNo[fid] : null;
    if (no == null) no = scheduleByTeams[teamsPairKey(home, away)];
    if (no == null) no = fifaByTeams[teamsPairKey(home, away)];
    if (no == null) throw new Error(`Cannot resolve FIFA # for ${fm.id} ${home} vs ${away}`);
    expected[no] = {
      home: ar.home_score,
      away: ar.away_score,
      status: ar.status,
      siteId: fm.id,
      teams: `${home} vs ${away}`,
    };
  }
  return { expected, schedule };
}

const { expected, schedule } = buildExpectedByFifaNo();
const SCORES = loadScheduleScores();
const errors = [];
const ok = [];

for (const [noStr, exp] of Object.entries(expected)) {
  const no = Number(noStr);
  const got = SCORES.byFifaNo?.[noStr] || SCORES.byFifaNo?.[no];
  const sched = schedule.find(s => s.no === no);
  if (!got) {
    errors.push({ no, issue: 'MISSING_IN_SCHEDULE_SCORES', expected: `${exp.home}-${exp.away}`, teams: exp.teams });
    continue;
  }
  if (got.home !== exp.home || got.away !== exp.away) {
    errors.push({
      no,
      issue: 'WRONG_SCORE',
      expected: `${exp.home}-${exp.away}`,
      got: `${got.home}-${got.away}`,
      siteId: exp.siteId,
    });
    continue;
  }
  if (sched && !teamsMatch(sched.home, sched.away, exp.teams.split(' vs ')[0], exp.teams.split(' vs ')[1])) {
    errors.push({ no, issue: 'SCHEDULE_TEAM_SANITY', schedule: `${sched.home} vs ${sched.away}`, results: exp.teams });
    continue;
  }
  ok.push({ no, score: `${exp.home}-${exp.away}`, teams: sched ? `${sched.home} vs ${sched.away}` : exp.teams });
}

for (const noStr of Object.keys(SCORES.byFifaNo || {})) {
  if (!expected[Number(noStr)]) {
    errors.push({ no: Number(noStr), issue: 'ORPHAN_IN_SCHEDULE_SCORES', got: SCORES.byFifaNo[noStr] });
  }
}

console.log(`Expected (from results): ${Object.keys(expected).length}`);
console.log(`In schedule-scores.js: ${Object.keys(SCORES.byFifaNo || {}).length}`);
console.log(`Verified OK: ${ok.length}/${Object.keys(expected).length}`);

if (errors.length) {
  console.log('\n❌ ERRORS:');
  errors.forEach(e => console.log(JSON.stringify(e)));
  process.exit(1);
}

console.log('\n✅ schedule-scores.js matches results-data via FIFA MatchNumber');
console.log('\nFull list (FIFA # · score · teams):');
ok.sort((a, b) => a.no - b.no).forEach(x => console.log(`  #${String(x.no).padStart(2)} ${x.score.padEnd(5)} ${x.teams}`));
process.exit(0);
