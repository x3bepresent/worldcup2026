/**
 * Enrich Day 13 todayMatches (m47/m45/m46/m48)
 * weather + injuries/rumors + coach_analysis + upset_alert + referee
 * Run: node scripts/enrich-day13.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day13');
const { getTeamNews } = require('./injuries-rumors-day13');
const { getReferee } = require('./referee-data-day13');
const { buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS } = require('./coach-data-day13');
const { getTeamStars } = require('./star-data-day13');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function patchWeatherInsight(match) {
  const w = match.weather;
  if (!w || !match.prediction?.insight_factors) return;
  const text = `${w.condition_cn || ''} · ${w.temp}°C · 湿度 ${w.humidity}%；${w.impact_summary || w.impact || ''}`;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '赛场气候');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
  else match.prediction.insight_factors.push({ icon: '🌤️', label: '赛场气候', text });
}

function ensureInsightFactors(match) {
  if (!match.prediction) return;
  if (!match.prediction.insight_factors) {
    match.prediction.insight_factors = [
      { icon: '📊', label: '小组积分', text: `${match.group}组第2轮 · K/L 组形势见各场详情` },
      { icon: '🌤️', label: '赛场气候', text: '' },
      { icon: '⚽', label: '战术与阵容', text: match.prediction.key_factor || '' },
    ];
  }
}

function applyTeamNews(match) {
  const homeNews = getTeamNews(match.id, 'home');
  const awayNews = getTeamNews(match.id, 'away');
  match.home.injuries = homeNews.injuries;
  match.home.rumors = homeNews.rumors;
  match.away.injuries = awayNews.injuries;
  match.away.rumors = awayNews.rumors;
}

function applyStars(match) {
  const home = getTeamStars(match.id, 'home');
  const away = getTeamStars(match.id, 'away');
  if (home.stars.length) {
    match.home.stars = home.stars;
    match.home.star = home.star;
  }
  if (away.stars.length) {
    match.away.stars = away.stars;
    match.away.star = away.star;
  }
}

function applyCoachAndUpset(match) {
  const keys = MATCH_COACH_KEYS[match.id];
  if (!keys) return;
  match.coach_analysis = buildCoachAnalysis(keys.homeKey, keys.awayKey);
  const upset = getUpsetAlert(match.id);
  if (upset) match.upset_alert = upset;
}

function applyReferee(match) {
  const ref = getReferee(match.id);
  ref.updated = TS;
  match.referee = ref;
  if (ref.confirmed && match.note && !/裁判已确认/.test(match.note)) {
    match.note += ` · FIFA 官方裁判已确认（${ref.name}）`;
  }
}

function dedupeNews(news) {
  const seen = new Set();
  return (news || []).filter(n => {
    const key = `${n.tag}|${n.text}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const ids = ['m47', 'm45', 'm46', 'm48'];
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  ensureInsightFactors(m);
  const w = venueWeather(m.id);
  if (w) m.weather = w;
  applyTeamNews(m);
  applyStars(m);
  applyCoachAndUpset(m);
  applyReferee(m);
  patchWeatherInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 13 · weather/injuries/coach/referee enriched';

const refLines = [
  { id: 'm47', text: '✅ FIFA 官方裁判 m47 · Jalal Jayed（摩洛哥）' },
  { id: 'm45', text: '✅ FIFA 官方裁判 m45 · Héctor Said Martínez（洪都拉斯）' },
  { id: 'm46', text: '✅ FIFA 官方裁判 m46 · Pierre Atcho（加蓬）' },
  { id: 'm48', text: '✅ FIFA 官方裁判 m48 · Maurizio Mariani（意大利）' },
];

const filtered = dedupeNews(MATCH_DATA.breakingNews || [])
  .filter(n => !/Day 13 气候|教练分析|伤病预报|裁判待 FIFA/.test(n.text || ''));

filtered.unshift(
  { tag: 'UPDATE', text: '✅ Day 13 教练分析&冷门预警已纳入（m45–m48）', time: '6月24日' },
  { tag: 'INJURY', text: '✅ m47 C罗破局压力 · m45 Kudus 反击 · m48 Wissa 信心', time: '6月24日' },
  { tag: 'UPDATE', text: '✅ Day 13 气候预报已更新（m45–m48）', time: '6月24日' },
);

for (const r of refLines) {
  filtered.unshift({ tag: 'OFFICIAL', text: r.text, time: '官方确认' });
}

MATCH_DATA.breakingNews = filtered.slice(0, 12);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 13 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = {
    note: 'Day 13 · m47 C罗/B费 破局 · m45 Kudus vs Bellingham · m46 Modrić 穿盘 · m48 Wissa 反击',
  };
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/enrich-day13.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );
} catch { /* optional */ }

console.log('✅ Day 13 enriched:', ids.join(', '));
for (const id of ids) {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  if (!m) continue;
  console.log(
    `   ${id} ref=${m.referee?.confirmed ? m.referee.name : 'pending'} · stars H${m.home.stars?.length}/A${m.away.stars?.length} · coach=${m.coach_analysis ? 'yes' : 'no'}`,
  );
}
