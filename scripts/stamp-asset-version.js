/**
 * Stamp ?v=<git-short-hash> on local css/js assets in *.html (cache busting).
 * Run: node scripts/stamp-asset-version.js
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');

function gitShortHash() {
  try {
    return execSync('git rev-parse --short HEAD', { cwd: ROOT, encoding: 'utf8' }).trim();
  } catch {
    const stamp = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '');
    console.warn(`⚠ git unavailable, using timestamp ${stamp}`);
    return stamp;
  }
}

function stampAssetRefs(html, version) {
  return html.replace(
    /((?:href|src)="(?:\.\/)?(css|js)\/[^"?#]+)(?:\?v=[^"#]*)?(")/g,
    `$1?v=${version}$3`,
  );
}

const version = gitShortHash();
const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));

let updated = 0;
for (const file of htmlFiles) {
  const filePath = path.join(ROOT, file);
  const before = fs.readFileSync(filePath, 'utf8');
  const after = stampAssetRefs(before, version);
  if (after !== before) {
    fs.writeFileSync(filePath, after, 'utf8');
    updated += 1;
  }
}

console.log(`✅ Asset cache bust v=${version} · ${updated}/${htmlFiles.length} html files updated`);
