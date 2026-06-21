/**
 * Enrich Day 11 todayMatches (m38/m39/m37/m40)
 * weather + injuries/rumors + coach_analysis + upset_alert + referee
 * Run: node scripts/enrich-day11.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day11');
const { getTeamNews } = require('./injuries-rumors-day11');
const { getReferee } = require('./referee-data-day11');
const { buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS } = require('./coach-data-day11');

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
      { icon: '📊', label: '小组积分', text: `${match.group}组第2轮 · G/H 四队均1分乱局` },
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

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const ids = ['m38', 'm39', 'm37', 'm40'];

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  ensureInsightFactors(m);
  const w = venueWeather(m.id);
  if (w) m.weather = w;
  applyTeamNews(m);
  applyCoachAndUpset(m);
  applyReferee(m);
  patchWeatherInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 11 · weather/injuries/coach/referee enriched';

const refLines = [
  { id: 'm38', text: '✅ FIFA 官方裁判 m38 · Raphael Claus（巴西）' },
  { id: 'm39', text: '✅ FIFA 官方裁判 m39 · Darío Herrera（阿根廷）' },
  { id: 'm37', text: '✅ FIFA 官方裁判 m37 · Espen Eskås（挪威）' },
  { id: 'm40', text: '✅ FIFA 官方裁判 m40 · Omar Mohamed Al Ali（阿联酋）' },
];

const filtered = dedupeNews(MATCH_DATA.breakingNews || [])
  .filter(n => !/Day 11 气候|教练分析|伤病预报/.test(n.text || ''));

filtered.unshift(
  { tag: 'UPDATE', text: '✅ Day 11 教练分析&冷门预警已纳入（m37–m40）', time: '6月22日' },
  { tag: 'INJURY', text: '✅ m38 西班牙 0-0 后 Yamal+Pedri 须破局 · 沙特 Renard 5-4-1', time: '6月22日' },
  { tag: 'INJURY', text: '✅ m37 Vozinha 0-0 西班牙后铁桶 · Bielsa 须破密集', time: '6月22日' },
  { tag: 'UPDATE', text: '✅ Day 11 气候预报已更新（m37–m40）', time: '6月22日' },
);

for (const r of refLines) {
  filtered.unshift({ tag: 'OFFICIAL', text: r.text, time: '官方确认' });
}

MATCH_DATA.breakingNews = filtered.slice(0, 12);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 11 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = {
    note: 'Day 11 · m38 Yamal/Pedri 破局 · m37 Vozinha 铁桶 · m39 KDB vs Taremi · m40 Wood+Just vs Salah',
  };
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/enrich-day11.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );
} catch { /* optional */ }

console.log('✅ Day 11 enriched:', ids.join(', '));
for (const id of ids) {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  if (!m) continue;
  console.log(`   ${id} ref=${m.referee?.confirmed ? m.referee.name : 'pending'} · injuries H${m.home.injuries?.length}/A${m.away.injuries?.length} · weather=${m.weather?.temp ?? '?'}°C`);
}
