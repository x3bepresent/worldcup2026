/**
 * Downloads all 48 WC 2026 team flags from flagcdn.com to /flags/ folder
 * Run: node scripts/download-flags.js
 */
const https = require('https');
const fs    = require('fs');
const path  = require('path');

const TEAMS = {
  'mx':'Mexico',       'za':'South Africa',  'kr':'South Korea',  'cz':'Czechia',
  'ca':'Canada',       'ba':'Bosnia',        'qa':'Qatar',        'ch':'Switzerland',
  'ht':'Haiti',        'gb-sct':'Scotland',  'br':'Brazil',       'ma':'Morocco',
  'us':'USA',          'py':'Paraguay',      'au':'Australia',    'tr':'Turkey',
  'ci':'Ivory Coast',  'ec':'Ecuador',       'de':'Germany',      'cw':'Curacao',
  'nl':'Netherlands',  'jp':'Japan',         'se':'Sweden',       'tn':'Tunisia',
  'ir':'Iran',         'nz':'New Zealand',   'be':'Belgium',      'eg':'Egypt',
  'sa':'Saudi Arabia', 'uy':'Uruguay',       'es':'Spain',        'cv':'Cape Verde',
  'fr':'France',       'sn':'Senegal',       'iq':'Iraq',         'no':'Norway',
  'ar':'Argentina',    'dz':'Algeria',       'at':'Austria',      'jo':'Jordan',
  'pt':'Portugal',     'uz':'Uzbekistan',    'co':'Colombia',     'cd':'Congo DR',
  'gb-eng':'England',  'hr':'Croatia',       'gh':'Ghana',        'pa':'Panama'
};

const FLAGS_DIR = path.join(__dirname, '..', 'flags');
if (!fs.existsSync(FLAGS_DIR)) fs.mkdirSync(FLAGS_DIR, { recursive: true });

function download(iso, name) {
  return new Promise((resolve) => {
    const url  = `https://flagcdn.com/w40/${iso.toLowerCase()}.png`;
    const dest = path.join(FLAGS_DIR, `${iso.toLowerCase()}.png`);

    if (fs.existsSync(dest)) {
      console.log(`  ✓ skip  ${iso} (${name}) — already exists`);
      return resolve(true);
    }

    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        console.log(`  ✗ fail  ${iso} (${name}) — HTTP ${res.statusCode}`);
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`  ✓ done  ${iso} (${name})`);
        resolve(true);
      });
    }).on('error', err => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      console.log(`  ✗ error ${iso} (${name}) — ${err.message}`);
      resolve(false);
    });
  });
}

async function main() {
  console.log(`\n🏳  Downloading ${Object.keys(TEAMS).length} flags to flags/ ...\n`);
  let ok = 0, fail = 0;
  for (const [iso, name] of Object.entries(TEAMS)) {
    const success = await download(iso, name);
    if (success) ok++; else fail++;
    await new Promise(r => setTimeout(r, 80)); // polite delay
  }
  console.log(`\n✅  Done: ${ok} ok, ${fail} failed`);
  if (fail > 0) console.log('   Re-run the script to retry failed ones.');
}

main();
