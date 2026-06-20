const fs = require('fs');
const { computeOutcomeFromXg } = require('./score-model.js');

const appSrc = fs.readFileSync('js/matches-app.js', 'utf8');
const cut = appSrc.indexOf('// ── Init ──');
const fnSrc = appSrc.slice(0, cut);
const code = `
${fs.readFileSync('js/data-integrity.js', 'utf8')}
${fs.readFileSync('js/score-model.js', 'utf8')}
${fs.readFileSync('js/results-data.js', 'utf8')}
${fnSrc}
return RESULTS_DATA.finishedMatches.map(m => {
  const poisson = computeOutcomeFromXg(m.prediction.xg_home, m.prediction.xg_away).score;
  const official = m.actualResult.home_score + '-' + m.actualResult.away_score;
  const stored = m.prediction.score;
  return {
    id: m.id,
    html: renderMatch(m).length,
    verdict: computePredictionVerdict(m),
    poisson,
    official,
    stored,
    suspect: stored === official && stored !== poisson,
  };
});
`;
const rows = new Function(code)();

let bad = 0;
rows.forEach(({ id, html, verdict, poisson, official, stored, suspect }) => {
  if (html < 500) {
    console.error('FAIL render', id, html);
    bad++;
    return;
  }
  const extras = [
    verdict.totals?.available ? `totals=${verdict.totals.hit}` : 'totals=n/a',
    verdict.margin?.available ? `margin=${verdict.margin.hit}` : 'margin=n/a',
    verdict.goalTiming?.available ? `timing=${verdict.goalTiming.hit}` : 'timing=n/a',
  ].join(' ');
  console.log(
    id,
    `official=${official}`,
    `pred=${stored}`,
    `poisson=${poisson}`,
    `scoreHit=${verdict.scoreHit}`,
    `outcomeHit=${verdict.outcomeHit}`,
    `top3Hit=${verdict.anyTop3Hit}`,
    extras,
    suspect ? 'SUSPECT' : 'OK'
  );
  if (suspect) bad++;
});

if (bad) {
  console.error('FAILED', bad, 'issues');
  process.exit(1);
}
console.log('OK', rows.length, 'archived matches with verdict panel');
