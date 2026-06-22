/**
 * Build js/schedule-scores.js — FIFA MatchNumber → final score
 * Uses: results-data.js + js/fifa-match-index.json + schedule.html (validation)
 *
 * Run after syncing results:
 *   node scripts/build-schedule-scores.js
 *
 * Refresh FIFA index from API (optional):
 *   node scripts/build-schedule-scores.js --refresh-fifa
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { teamsPairKey, teamsMatch, toScheduleName } = require('./fifa-team-names');

const ROOT = path.join(__dirname, '..');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const SCHEDULE_PATH = path.join(ROOT, 'schedule.html');
const FIFA_INDEX_PATH = path.join(ROOT, 'js', 'fifa-match-index.json');
const OUT_PATH = path.join(ROOT, 'js', 'schedule-scores.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadResults() {
  const raw = fs.readFileSync(RESULTS_PATH, 'utf8');
  return new Function(`${raw}\nreturn RESULTS_DATA;`)();
}

function parseScheduleMatches() {
  const html = fs.readFileSync(SCHEDULE_PATH, 'utf8');
  const block = html.match(/const MATCHES = \[([\s\S]*?)\];/);
  if (!block) throw new Error('MATCHES not found in schedule.html');
  return new Function(`return [${block[1]}];`)();
}

function fetchFifaCalendar() {
  return new Promise((resolve, reject) => {
    https.get(
      'https://api.fifa.com/api/v3/calendar/matches?language=en&count=500&idSeason=285023',
      (res) => {
        let raw = '';
        res.on('data', (c) => { raw += c; });
        res.on('end', () => {
          try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
        });
      },
    ).on('error', reject);
  });
}

async function loadOrRefreshFifaIndex(refresh) {
  if (refresh) {
    console.log('↻ Fetching FIFA calendar…');
    const api = await fetchFifaCalendar();
    const matches = {};
    for (const m of api.Results || []) {
      matches[String(m.MatchNumber)] = {
        fifaId: String(m.IdMatch),
        home: m.Home?.TeamName?.[0]?.Description,
        away: m.Away?.TeamName?.[0]?.Description,
      };
    }
    const payload = { generated: new Date().toISOString(), matches };
    fs.writeFileSync(FIFA_INDEX_PATH, `${JSON.stringify(payload, null, 2)}\n`);
    console.log(`✅ Updated ${FIFA_INDEX_PATH} (${Object.keys(matches).length} matches)`);
    return payload;
  }
  if (!fs.existsSync(FIFA_INDEX_PATH)) {
    return loadOrRefreshFifaIndex(true);
  }
  return JSON.parse(fs.readFileSync(FIFA_INDEX_PATH, 'utf8'));
}

function getFifaId(fm) {
  return fm.actualResult?.fifa_match_id
    || fm.fifa_match_id
    || fm.lineup?.fifa_match_id
    || null;
}

function resolveFifaNo(fm, ctx) {
  const home = typeof fm.home === 'string' ? fm.home : fm.home?.name;
  const away = typeof fm.away === 'string' ? fm.away : fm.away?.name;
  const methods = [];

  const fid = getFifaId(fm);
  if (fid && ctx.fifaIdToNo[fid]) {
    methods.push({ no: ctx.fifaIdToNo[fid], via: 'fifa_match_id' });
  }

  const pair = teamsPairKey(home, away);
  if (ctx.scheduleByTeams[pair] != null) {
    methods.push({ no: ctx.scheduleByTeams[pair], via: 'schedule_teams' });
  }
  if (ctx.fifaByTeams[pair] != null) {
    methods.push({ no: ctx.fifaByTeams[pair], via: 'fifa_index_teams' });
  }

  const uniq = [...new Set(methods.map(m => m.no))];
  if (uniq.length > 1) {
    return {
      error: 'CONFLICT',
      home,
      away,
      id: fm.id,
      methods,
    };
  }
  if (uniq.length === 1) {
    return { no: uniq[0], via: methods.map(m => m.via).join('+'), home, away };
  }
  return { error: 'UNRESOLVED', id: fm.id, home, away };
}

async function main() {
  const refresh = process.argv.includes('--refresh-fifa');
  const fifaIndex = await loadOrRefreshFifaIndex(refresh);
  const RESULTS = loadResults();
  const schedule = parseScheduleMatches();

  const fifaIdToNo = {};
  const fifaByTeams = {};
  for (const [noStr, row] of Object.entries(fifaIndex.matches || {})) {
    const no = Number(noStr);
    fifaIdToNo[row.fifaId] = no;
    const hk = teamsPairKey(toScheduleName(row.home), toScheduleName(row.away));
    fifaByTeams[hk] = no;
  }

  const scheduleByTeams = {};
  const scheduleByNo = {};
  for (const s of schedule) {
    scheduleByTeams[teamsPairKey(s.home, s.away)] = s.no;
    scheduleByNo[s.no] = s;
  }

  const ctx = { fifaIdToNo, fifaByTeams, scheduleByTeams, scheduleByNo };
  const byFifaNo = {};
  const errors = [];
  const warnings = [];

  for (const fm of RESULTS.finishedMatches || []) {
    const ar = fm.actualResult;
    if (!ar || !['FT', 'AET', 'PEN'].includes(ar.status)) continue;
    if (ar.home_score == null || ar.away_score == null) continue;

    const resolved = resolveFifaNo(fm, ctx);
    if (resolved.error) {
      errors.push(resolved);
      continue;
    }

    const { no, via, home, away } = resolved;
    const sched = scheduleByNo[no];
    if (sched && !teamsMatch(sched.home, sched.away, home, away)) {
      errors.push({
        error: 'SCHEDULE_TEAM_MISMATCH',
        no,
        id: fm.id,
        schedule: `${sched.home} vs ${sched.away}`,
        results: `${home} vs ${away}`,
      });
      continue;
    }

    if (byFifaNo[no]) {
      errors.push({
        error: 'DUPLICATE_FIFA_NO',
        no,
        existing: byFifaNo[no].siteId,
        incoming: fm.id,
      });
      continue;
    }

    byFifaNo[no] = {
      home: ar.home_score,
      away: ar.away_score,
      status: ar.status,
      siteId: fm.id,
      via,
    };
  }

  if (errors.length) {
    console.error('❌ build-schedule-scores failed:');
    errors.forEach(e => console.error(JSON.stringify(e)));
    process.exit(1);
  }

  // Warn: finished results not in first 72 group slots
  const count = Object.keys(byFifaNo).length;
  const payload = {
    lastUpdated: TS,
    source: 'results-data.js × FIFA MatchNumber (fifa-match-index.json)',
    count,
    byFifaNo,
  };

  fs.writeFileSync(
    OUT_PATH,
    `// Auto-generated — do not edit manually\n`
    + `// Run: node scripts/build-schedule-scores.js\n`
    + `// Last updated: ${TS}\n`
    + `const SCHEDULE_SCORES = ${JSON.stringify(payload, null, 2)};\n`,
  );

  console.log(`✅ ${OUT_PATH}`);
  console.log(`   ${count} scores keyed by FIFA MatchNumber (#1–#${Math.max(...Object.keys(byFifaNo).map(Number))})`);
  if (warnings.length) warnings.forEach(w => console.warn('⚠', w));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
