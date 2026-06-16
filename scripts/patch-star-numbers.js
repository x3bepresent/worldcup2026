const fs = require('fs');
const path = require('path');

const SOURCE = 'FIFA 2026 世界杯最终名单';

const FILES = [
  { path: path.join(__dirname, '..', 'js', 'matches-data.js'), key: 'MATCH_DATA' },
  { path: path.join(__dirname, '..', 'js', 'results-data.js'), key: 'RESULTS_DATA' },
];

const NUMS = {
  'Akram Afif': 11,
  'Boualem Khoukhi': 16,
  'Hassan Al-Haydos': 10,
  'Granit Xhaka': 10,
  'Breel Embolo': 7,
  'Dan Ndoye': 11,
  'Vinícius Jr.': 7,
  'Lucas Paquetá': 20,
  'Matheus Cunha': 9,
  'Achraf Hakimi': 2,
  'Brahim Díaz': 10,
  'Sofyan Amrabat': 4,
  'Duckens Nazon': 9,
  'Johny Placide': 1,
  'Jean-Ricner Bellegarde': 10,
  'Scott McTominay': 4,
  'Andrew Robertson': 3,
  'Lawrence Shankland': 20,
  'Mathew Ryan': 1,
  'Mohamed Toure': 9,
  'Jackson Irvine': 22,
  'Hakan Çalhanoğlu': 10,
  'Arda Güler': 8,
  'Kenan Yildiz': 11,
  'Raúl Jiménez': 9,
  '孙兴慜 Son Heung-min': 7,
  'Son Heung-min': 7,
  'Patrik Schick': 10,
  'Jonathan David': 10,
  'Tajon Buchanan': 17,
  'Cyle Larin': 9,
  'Edin Džeko': 11,
  'Esmir Bajraktarević': 20,
  'Sead Kolašinac': 5,
  'Christian Pulisic': 10,
  'Folarin Balogun': 20,
  'Weston McKennie': 8,
  'Miguel Almirón': 10,
  'Gustavo Gómez': 15,
  'Antonio Sanabria': 9,
};

function patchFile({ path: filePath, key }) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = new Function(raw + `\nreturn ${key};`)();
  let patched = 0;

  function patchStar(s) {
    if (!s?.name || s.number_confirmed) return;
    const n = NUMS[s.name];
    if (n == null) return;
    s.number = n;
    s.number_confirmed = true;
    s.number_source = SOURCE;
    patched++;
  }

  function walkTeam(side) {
    if (!side) return;
    (side.stars || []).forEach(patchStar);
    if (side.star) patchStar(side.star);
  }

  for (const m of data.todayMatches || data.finishedMatches || data.pastMatches || []) {
    walkTeam(m.home);
    walkTeam(m.away);
  }

  const headerLines = [];
  for (const line of raw.split('\n')) {
    if (line.startsWith(`const ${key}`)) break;
    headerLines.push(line);
  }
  const header = headerLines.join('\n') + `\nconst ${key} = `;
  fs.writeFileSync(filePath, header + JSON.stringify(data, null, 2) + ';\n');
  console.log(path.basename(filePath), '→', patched, 'numbers added');
  return patched;
}

let total = 0;
for (const f of FILES) total += patchFile(f);
console.log('Total:', total);
