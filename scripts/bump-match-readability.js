/**
 * One-off / repeatable bump for match page inline font sizes
 */
const fs = require('fs');
const path = require('path');

const BUMP = [
  ['0.95rem', '1.05rem'],
  ['0.9rem', '1rem'],
  ['0.88rem', '0.98rem'],
  ['0.85rem', '0.96rem'],
  ['0.82rem', '0.92rem'],
  ['0.8rem', '0.92rem'],
  ['0.78rem', '0.9rem'],
  ['0.75rem', '0.86rem'],
  ['0.74rem', '0.86rem'],
  ['0.72rem', '0.84rem'],
  ['0.7rem', '0.82rem'],
  ['0.68rem', '0.8rem'],
  ['0.67rem', '0.78rem'],
  ['0.66rem', '0.78rem'],
  ['0.65rem', '0.76rem'],
  ['0.64rem', '0.76rem'],
  ['0.62rem', '0.74rem'],
  ['0.6rem', '0.72rem'],
  ['0.58rem', '0.68rem'],
  ['0.55rem', '0.66rem'],
  ['0.5rem', '0.62rem'],
];

function bumpContent(s) {
  let out = s;
  for (const [from, to] of BUMP) {
    out = out.split(`font-size:${from}`).join(`font-size:${to}`);
  }
  out = out.replace(/line-height:1\.45/g, 'line-height:1.55');
  out = out.replace(/line-height:1\.5(?![0-9])/g, 'line-height:1.62');
  return out;
}

const files = [
  path.join(__dirname, '..', 'js', 'matches-app.js'),
  path.join(__dirname, '..', 'matches.html'),
  path.join(__dirname, '..', 'results.html'),
];

for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = bumpContent(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    console.log('✅', path.basename(file));
  }
}
