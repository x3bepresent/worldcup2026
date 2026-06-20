/**
 * m31 Türkiye vs Paraguay — FIFA 官方主裁 + 执法组
 * API: https://api.fifa.com/api/v3/live/football/400021460
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { getReferee } = require('./referee-data-day9');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021460';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 9 (FIFA official referee m31)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
  );
}

function fetchFifaMatch() {
  return new Promise((resolve, reject) => {
    https.get(`https://api.fifa.com/api/v3/live/football/${FIFA_MATCH_ID}`, (res) => {
      let raw = '';
      res.on('data', (c) => { raw += c; });
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function verifyReferee(apiJson) {
  if (apiJson.MatchNumber !== 31) throw new Error('Expected Match 31, got ' + apiJson.MatchNumber);
  const main = (apiJson.Officials || []).find(o => o.OfficialType === 1);
  if (!main) throw new Error('No main referee in FIFA API response');
  const name = main.Name?.[0]?.Description || '';
  if (!/Barton/i.test(name)) throw new Error('Unexpected referee: ' + name);
  if (main.IdCountry !== 'SLV') throw new Error('Unexpected nation: ' + main.IdCountry);
  return main;
}

async function main() {
  const api = await fetchFifaMatch();
  const main = verifyReferee(api);

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m31 = data.todayMatches?.find(m => m.id === 'm31');
  if (!m31) throw new Error('m31 not found');

  const ref = getReferee('m31');
  ref.fifa_match_id = FIFA_MATCH_ID;
  ref.fifa_official_id = main.OfficialId;
  ref.api_name = main.Name?.[0]?.Description;
  ref.updated = TS;
  m31.referee = ref;

  if (m31.note && !/裁判已确认/.test(m31.note)) {
    m31.note = m31.note.replace(/FIFA 官方首发已确认/, 'FIFA 官方首发·裁判已确认');
    if (!/裁判/.test(m31.note)) {
      m31.note += ' · FIFA 官方裁判已确认';
    }
  }

  const refNews = {
    tag: 'OFFICIAL',
    text: '✅ FIFA 官方裁判 m31 · Iván Barton（萨尔瓦多）· VAR Al Marri',
    time: '官方确认',
  };
  const news = (data.breakingNews || []).filter(
    n => !(n.tag === 'OFFICIAL' && /裁判.*m31|Barton/i.test(n.text)),
  );
  data.breakingNews = [refNews, ...news].slice(0, 12);

  saveMatchData(data);

  console.log('✅ m31 FIFA official referee synced');
  console.log('   Main:', ref.name, '(' + ref.nation + ')');
  console.log('   API:', main.Name?.[0]?.Description, '·', main.IdCountry);
  console.log('   VAR:', ref.officials?.var);
}

main().catch(e => { console.error(e); process.exit(1); });
