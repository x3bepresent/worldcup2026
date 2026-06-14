const fs = require('fs');
const appSrc = fs.readFileSync('js/matches-app.js', 'utf8');
const cut = appSrc.indexOf('// ── Init ──');
const fnSrc = appSrc.slice(0, cut);
const code = `
${fs.readFileSync('js/data-integrity.js', 'utf8')}
${fs.readFileSync('js/score-model.js', 'utf8')}
${fs.readFileSync('js/matches-data.js', 'utf8')}
${fnSrc}
return MATCH_DATA.todayMatches.map(m => renderMatch(m).length);
`;
const lens = new Function(code)();
console.log('lengths', lens);
if (lens.some(n => n < 500)) process.exit(1);
console.log('OK', lens.length, 'matches render');
