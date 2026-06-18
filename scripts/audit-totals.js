'use strict';
const fs = require('fs');
const lib = require('../js/prediction-signals-lib.js');

function loadMatches(file) {
  const src = fs.readFileSync(file, 'utf8');
  const fn = new Function(src + '; return typeof MATCH_DATA !== "undefined" ? MATCH_DATA.todayMatches : (typeof RESULTS_DATA !== "undefined" ? RESULTS_DATA.finishedMatches : []);');
  return fn();
}

const today = loadMatches('js/matches-data.js');
const finished = loadMatches('js/results-data.js');
const all = [...today, ...finished];

function pickLine(m) {
  const s = m.depth_calibration?.display_summary;
  const wo = s?.win_outlook;
  const tv = s?.totals_view;
  const p = m.prediction || {};
  const rawLine = m.depth_calibration?.totals_line;
  const xgSum = (p.xg_home || 0) + (p.xg_away || 0);
  const fair = lib.computeTotalsAnalysis(p.xg_home, p.xg_away, { totals_line: rawLine ?? 2.5 });
  const overAtMarket = fair.over_pct;
  return {
    id: m.id,
    match: `${m.home?.name} vs ${m.away?.name}`,
    xg: `${p.xg_home}–${p.xg_away}`,
    xgSum: Math.round(xgSum * 100) / 100,
    modelExpected: s?.expected_total_goals ?? tv?.expected_total,
    fairLine: fair.fair_line,
    marketLine: rawLine ?? 2.5,
    uiLine: wo?.totals_line_cn || tv?.summary_cn,
    overPctAtMarket: overAtMarket,
    totalsHighPct: wo?.totals_high_pct,
  };
}

const rows = all.map(pickLine);
console.log('id\txgSum\tmodelExp\tfairLine\tmarketLine\tover%@mkt\thigh%\tui');
rows.forEach(r => {
  console.log([
    r.id, r.xgSum, r.modelExpected, r.fairLine, r.marketLine,
    r.overPctAtMarket, r.totalsHighPct, (r.uiLine || '').replace(/\s+/g, ' '),
  ].join('\t'));
});

const marketLines = {};
rows.forEach(r => { marketLines[r.marketLine] = (marketLines[r.marketLine] || 0) + 1; });
console.log('\nMarket totals_line distribution:', marketLines);
const xgSums = rows.map(r => r.xgSum);
console.log('xG sum range:', Math.min(...xgSums), '-', Math.max(...xgSums),
  'avg', (xgSums.reduce((a,b)=>a+b,0)/xgSums.length).toFixed(2));
