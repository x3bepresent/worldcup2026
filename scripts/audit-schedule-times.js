/**
 * Full schedule audit — all 104 matches vs FIFA calendar API (Beijing time)
 * Run: node scripts/audit-schedule-times.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const SCHEDULE_PATH = path.join(ROOT, 'schedule.html');

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
  const d = new Date(iso);
  const b = new Date(d.getTime() + 8 * 3600000);
  const hh = String(b.getUTCHours()).padStart(2, '0');
  const mm = String(b.getUTCMinutes()).padStart(2, '0');
  return {
    month: b.getUTCMonth() + 1,
    day: b.getUTCDate(),
    time: `${hh}:${mm}`,
    label: `${b.getUTCMonth() + 1}月${b.getUTCDate()}日`,
  };
}

function loadSchedule() {
  const html = fs.readFileSync(SCHEDULE_PATH, 'utf8');
  const groupBlock = html.match(/const MATCHES = \[([\s\S]*?)\];/)[1];
  const group = eval(`[${groupBlock}]`);
  const koBlock = html.match(/const KO_ROUNDS = \[([\s\S]*?)\];/)[1];
  const koRounds = eval(`[${koBlock}]`);
  const knockout = [];
  for (const rnd of koRounds) {
    for (const m of rnd.matches) knockout.push(m);
  }
  return { group, knockout };
}

function parseKoDate(dStr) {
  const m = dStr.match(/(\d+)月(\d+)日/);
  if (!m) return null;
  return { month: Number(m[1]), day: Number(m[2]) };
}

async function main() {
  const { group, knockout } = loadSchedule();
  const api = await fetchJSON(
    'https://api.fifa.com/api/v3/calendar/matches?language=en&count=500&idSeason=285023',
  );
  const fifa = api.Results.sort((a, b) => a.MatchNumber - b.MatchNumber);

  const groupDiffs = [];
  const koDiffs = [];
  const halfHour = [];

  for (const m of fifa) {
    const bj = beijingFromUtc(m.Date);
    if (bj.time.endsWith(':30')) {
      halfHour.push({ no: m.MatchNumber, bj: `${bj.label} ${bj.time}` });
    }

    if (m.MatchNumber <= 72) {
      const s = group.find(x => x.no === m.MatchNumber);
      if (!s) {
        groupDiffs.push({ no: m.MatchNumber, issue: 'missing in schedule.html group' });
        continue;
      }
      const issues = [];
      if (s.t !== bj.time) issues.push(`time ${s.t} → ${bj.time}`);
      if (s.m !== bj.month || s.d !== bj.day) {
        issues.push(`date ${s.m}/${s.d} → ${bj.month}/${bj.day} (Beijing)`);
      }
      if (issues.length) {
        groupDiffs.push({
          no: m.MatchNumber,
          home: m.Home?.TeamName?.[0]?.Description,
          away: m.Away?.TeamName?.[0]?.Description,
          sched: `${s.m}/${s.d} ${s.t}`,
          fifa: `${bj.month}/${bj.day} ${bj.time}`,
          issues,
        });
      }
    } else {
      const s = knockout.find(x => x.no === m.MatchNumber);
      if (!s) {
        koDiffs.push({ no: m.MatchNumber, issue: 'missing in schedule.html knockout' });
        continue;
      }
      const kd = parseKoDate(s.d);
      const issues = [];
      if (s.t !== bj.time) issues.push(`time ${s.t} → ${bj.time}`);
      if (!kd || kd.month !== bj.month || kd.day !== bj.day) {
        issues.push(`date ${s.d} → ${bj.label} (Beijing)`);
      }
      if (issues.length) {
        koDiffs.push({
          no: m.MatchNumber,
          sched: `${s.d} ${s.t}`,
          fifa: `${bj.label} ${bj.time}`,
          issues,
        });
      }
    }
  }

  console.log(`FIFA total: ${fifa.length} matches`);
  console.log(`Half-hour kickoffs (${halfHour.length}):`);
  for (const h of halfHour) console.log(`  #${h.no} ${h.bj}`);
  console.log('');

  console.log(`Group stage: ${fifa.filter(x => x.MatchNumber <= 72).length} checked · ${groupDiffs.length} discrepancies`);
  for (const d of groupDiffs) {
    console.log(`  #${d.no} ${d.home || ''} vs ${d.away || ''} | ${d.sched} → ${d.fifa} | ${d.issues?.join(' · ') || d.issue}`);
  }
  console.log('');

  console.log(`Knockout: ${fifa.filter(x => x.MatchNumber > 72).length} checked · ${koDiffs.length} discrepancies`);
  for (const d of koDiffs) {
    console.log(`  #${d.no} | ${d.sched} → ${d.fifa} | ${d.issues?.join(' · ') || d.issue}`);
  }

  const total = groupDiffs.length + koDiffs.length;
  console.log(`\n${total === 0 ? '✅ ALL 104 MATCHES MATCH FIFA (Beijing time)' : `⚠ ${total} discrepancies remain`}`);
  process.exit(total ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
