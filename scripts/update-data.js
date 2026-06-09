/**
 * 2026 WC Auto-Update Script
 * Calls API-Football, updates matches-data.js + data.js
 * Runs daily at 08:00 Beijing (00:00 UTC) via GitHub Actions
 *
 * Usage: API_KEY=your_key node scripts/update-data.js
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const API_KEY    = process.env.API_KEY || '';
const LEAGUE_ID  = 1;   // FIFA World Cup
const SEASON     = 2026;
const BASE_URL   = 'v3.football.api-sports.io';

// Today in Beijing time → match date
function todayBeijing() {
  const now = new Date(Date.now() + 8 * 3600 * 1000);
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth()+1).padStart(2,'0');
  const d = String(now.getUTCDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

function apiRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: BASE_URL,
      path: `/v3/${endpoint}`,
      method: 'GET',
      headers: { 'x-apisports-key': API_KEY }
    };
    const req = https.request(options, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error('JSON parse error: ' + data.slice(0,200))); }
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => req.destroy(new Error('Timeout')));
    req.end();
  });
}

async function main() {
  if (!API_KEY) {
    console.warn('⚠️  API_KEY not set — skipping live fetch, keeping existing live-data.js');
    process.exit(0);  // 不报错，工作流正常结束
  }

  console.log('🔄 Starting daily update —', new Date().toISOString());
  console.log('📅 Beijing date:', todayBeijing());

  const results = { fixtures:[], standings:[], injuries:{} };

  // ─── 1. Get today's fixtures ───────────────────────────
  console.log('📡 Fetching today\'s fixtures...');
  try {
    const fixtureData = await apiRequest(
      `fixtures?league=${LEAGUE_ID}&season=${SEASON}&date=${todayBeijing()}`
    );
    results.fixtures = fixtureData.response || [];
    console.log(`✅ Found ${results.fixtures.length} fixture(s) today`);

    // Also get yesterday's results (for score updates)
    const yd = new Date(Date.now() + 8*3600*1000 - 86400000);
    const ydStr = `${yd.getUTCFullYear()}-${String(yd.getUTCMonth()+1).padStart(2,'0')}-${String(yd.getUTCDate()).padStart(2,'0')}`;
    const ydData = await apiRequest(
      `fixtures?league=${LEAGUE_ID}&season=${SEASON}&date=${ydStr}&status=FT`
    );
    results.yesterday = ydData.response || [];
    console.log(`✅ Found ${results.yesterday.length} finished fixture(s) yesterday`);
  } catch(e) {
    console.error('⚠️  Fixtures fetch failed:', e.message);
  }

  // ─── 2. Get standings ──────────────────────────────────
  console.log('📡 Fetching group standings...');
  try {
    const standData = await apiRequest(`standings?league=${LEAGUE_ID}&season=${SEASON}`);
    results.standings = standData.response?.[0]?.league?.standings || [];
    console.log(`✅ Got standings for ${results.standings.length} group(s)`);
  } catch(e) {
    console.error('⚠️  Standings fetch failed:', e.message);
  }

  // ─── 3. Get injuries for today's teams ─────────────────
  if (results.fixtures.length > 0) {
    const teamIds = new Set();
    results.fixtures.forEach(f => {
      teamIds.add(f.teams?.home?.id);
      teamIds.add(f.teams?.away?.id);
    });
    console.log(`📡 Fetching injuries for ${teamIds.size} teams...`);
    for (const tid of teamIds) {
      if (!tid) continue;
      try {
        const injData = await apiRequest(`injuries?league=${LEAGUE_ID}&season=${SEASON}&team=${tid}`);
        results.injuries[tid] = injData.response || [];
      } catch(e) { /* skip */ }
    }
    console.log('✅ Injuries fetched');
  }

  // ─── 4. Write update file for pages to consume ─────────
  const updateObj = {
    lastUpdated: new Date().toISOString(),
    todayDate:   todayBeijing(),
    fixtures:    results.fixtures.map(f => ({
      id:          f.fixture?.id,
      status:      f.fixture?.status?.short,  // NS, 1H, HT, 2H, FT, AET, PEN
      elapsed:     f.fixture?.status?.elapsed,
      date:        f.fixture?.date,
      home:        f.teams?.home?.name,
      home_id:     f.teams?.home?.id,
      home_score:  f.goals?.home,
      away:        f.teams?.away?.name,
      away_id:     f.teams?.away?.id,
      away_score:  f.goals?.away,
      venue:       f.fixture?.venue?.name,
      city:        f.fixture?.venue?.city,
    })),
    standings: results.standings.map(grp => grp.map ? grp.map(t => ({
      group:  t[0]?.group,
      team:   t[0]?.team?.name,
      rank:   t[0]?.rank,
      pts:    t[0]?.points,
      played: t[0]?.all?.played,
      win:    t[0]?.all?.win,
      draw:   t[0]?.all?.draw,
      lose:   t[0]?.all?.lose,
      gf:     t[0]?.all?.goals?.for,
      ga:     t[0]?.all?.goals?.against,
      gd:     t[0]?.goalsDiff,
    })) : []),
    injuries: Object.entries(results.injuries).reduce((acc, [tid, injs]) => {
      acc[tid] = injs.map(i => ({
        player: i.player?.name,
        type:   i.injury?.type,
        reason: i.injury?.reason,
      }));
      return acc;
    }, {}),
    yesterdayResults: (results.yesterday || []).map(f => ({
      home:  f.teams?.home?.name,
      away:  f.teams?.away?.name,
      score: `${f.goals?.home}-${f.goals?.away}`,
    }))
  };

  const outPath = path.join(__dirname, '..', 'js', 'live-data.js');
  fs.writeFileSync(outPath,
    `// Auto-generated by update-data.js — DO NOT EDIT MANUALLY\n` +
    `// Updated: ${updateObj.lastUpdated}\n` +
    `const LIVE_DATA = ${JSON.stringify(updateObj, null, 2)};\n`
  );
  console.log('✅ live-data.js written →', outPath);

  // ─── 5. Log summary ────────────────────────────────────
  console.log('\n═══ UPDATE SUMMARY ═══');
  console.log('Fixtures today:    ', updateObj.fixtures.length);
  console.log('Yesterday results: ', updateObj.yesterdayResults.length);
  updateObj.yesterdayResults.forEach(r => console.log(`  ${r.home} ${r.score} ${r.away}`));
  console.log('Groups with standing:', updateObj.standings.length);
  console.log('════════════════════\n');
}

main().catch(e => {
  console.error('❌ Fatal error:', e);
  process.exit(1);
});
