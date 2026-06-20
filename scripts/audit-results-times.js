/** Audit archived results times vs FIFA (match by fifa_match_id or teams) */
const fs = require('fs');
const path = require('path');
const https = require('https');

const TEAM = {
  'Korea Republic': 'South Korea',
  'Bosnia and Herzegovina': 'Bosnia & Herz.',
  'Türkiye': 'Türkiye',
  'Turkey': 'Türkiye',
  'Cabo Verde': 'Cape Verde',
  'Curaçao': 'Curaçao',
  "Côte d'Ivoire": "Côte d'Ivoire",
  'IR Iran': 'Iran',
};

function normTeam(n) {
  return TEAM[n] || n;
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let raw = '';
      res.on('data', (c) => { raw += c; });
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function beijingFromUtc(iso) {
  const b = new Date(new Date(iso).getTime() + 8 * 3600000);
  return {
    month: b.getUTCMonth() + 1,
    day: b.getUTCDate(),
    time: `${String(b.getUTCHours()).padStart(2, '0')}:${String(b.getUTCMinutes()).padStart(2, '0')}`,
    full: `北京时间 ${b.getUTCMonth() + 1}月${b.getUTCDate()}日 ${String(b.getUTCHours()).padStart(2, '0')}:${String(b.getUTCMinutes()).padStart(2, '0')}`,
    dateLabel: `${b.getUTCMonth() + 1}月${b.getUTCDate()}日`,
  };
}

function findFifaMatch(fifaList, archived) {
  const fid = archived.lineup?.fifa_match_id
    || archived.actualResult?.fifa_match_id
    || archived.fifa_match_id;
  if (fid) {
    const byId = fifaList.find(x => String(x.IdMatch) === String(fid));
    if (byId) return byId;
  }
  const h = normTeam(archived.home?.name);
  const a = normTeam(archived.away?.name);
  return fifaList.find(x =>
    normTeam(x.Home?.TeamName?.[0]?.Description) === h
    && normTeam(x.Away?.TeamName?.[0]?.Description) === a,
  );
}

async function main() {
  const raw = fs.readFileSync(path.join(__dirname, '..', 'js', 'results-data.js'), 'utf8');
  const data = new Function(`${raw}\nreturn RESULTS_DATA;`)();
  const api = await fetchJSON(
    'https://api.fifa.com/api/v3/calendar/matches?language=en&count=500&idSeason=285023',
  );
  const diffs = [];
  for (const m of data.finishedMatches || []) {
    const f = findFifaMatch(api.Results, m);
    if (!f) {
      diffs.push({ id: m.id, issue: 'no FIFA match found', home: m.home?.name, away: m.away?.name });
      continue;
    }
    const b = beijingFromUtc(f.Date);
    const db = m.date_beijing?.match(/(\d+)月(\d+)日/);
    const month = db ? Number(db[1]) : null;
    const day = db ? Number(db[2]) : null;
    if (m.time_beijing !== b.time) {
      diffs.push({
        id: m.id, fifaNo: f.MatchNumber, home: m.home?.name, away: m.away?.name,
        field: 'time', have: m.time_beijing, want: b.time,
      });
    }
    if (month !== b.month || day !== b.day) {
      diffs.push({
        id: m.id, fifaNo: f.MatchNumber,
        field: 'date', have: m.date_beijing, want: b.dateLabel,
      });
    }
  }
  console.log(`Archived: ${(data.finishedMatches || []).length} · discrepancies: ${diffs.length}`);
  for (const d of diffs) console.log(JSON.stringify(d));
  process.exit(diffs.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
