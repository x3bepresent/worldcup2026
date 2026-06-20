/**
 * Enrich Day 10 todayMatches (m33–m36)
 * weather + mystic + injuries/rumors + coach_analysis + upset_alert + referee
 * Run: node scripts/enrich-day10.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day10');
const { getMystic } = require('./mystic-data-day10');
const { getTeamNews } = require('./injuries-rumors-day10');
const { getReferee } = require('./referee-data-day10');
const { buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS } = require('./coach-data-day10');

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
  if (idx >= 0) {
    match.prediction.insight_factors[idx].text = text;
  } else {
    match.prediction.insight_factors.push({ icon: '🌤️', label: '赛场气候', text });
  }
}

function ensureInsightFactors(match) {
  if (!match.prediction) return;
  if (!match.prediction.insight_factors) {
    match.prediction.insight_factors = [
      { icon: '📊', label: '小组积分', text: `${match.group}组第2轮 · 详见小组形势面板` },
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
const ids = ['m35', 'm33', 'm34', 'm36'];

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  ensureInsightFactors(m);
  const w = venueWeather(m.id);
  const my = getMystic(m.id);
  if (w) m.weather = w;
  if (my) m.mystic = my;
  applyTeamNews(m);
  applyCoachAndUpset(m);
  applyReferee(m);
  patchWeatherInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 10 · weather/mystic/injuries/coach/referee enriched';

const refLines = [
  { id: 'm35', text: '✅ FIFA 官方裁判 m35 · Michael Oliver（英格兰）' },
  { id: 'm33', text: '✅ FIFA 官方裁判 m33 · Juan Gabriel Benítez（巴拉圭）' },
  { id: 'm34', text: '✅ FIFA 官方裁判 m34 · 马宁 Ning Ma（中国 · 24年来首位主裁）' },
  { id: 'm36', text: '✅ FIFA 官方裁判 m36 · Istvan Kovacs（罗马尼亚 · 第1000场）' },
];

const filtered = dedupeNews(MATCH_DATA.breakingNews || [])
  .filter(n => !/Day 10 伤病|教练分析|气候预报/.test(n.text || ''));

filtered.unshift(
  { tag: 'LINEUP', text: '✅ FIFA 官方首发 m33 · 德 3-4-3 Kimmich中卫 · 科特 4-3-3 Pépé/Wahi替补', time: '官方确认' },
  { tag: 'UPDATE', text: '✅ Day 10 教练分析&冷门预警已纳入（m33–m36）', time: '6月21日' },
  { tag: 'INJURY', text: '✅ m33 首发确认：Rüdiger/Goretzka 替补 · Pépé/Wahi/N\'Dicka 替补 · Karl OUT', time: '6月21日' },
  { tag: 'UPDATE', text: '✅ Day 10 气候预报+灵力分析已更新（m33–m36）', time: '6月21日' },
);

for (const r of refLines) {
  filtered.unshift({ tag: 'OFFICIAL', text: r.text, time: '官方确认' });
}

MATCH_DATA.breakingNews = filtered.slice(0, 12);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 10 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = {
    note: 'Day 10 · m33 首发已确认 · Kubo OUT(m36) · Timber OUT(m35) · Pépé/Wahi 替补(m33)',
  };
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/enrich-day10.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );
} catch {
  /* live-data optional */
}

console.log('✅ Day 10 enriched:', ids.join(', '));
for (const id of ids) {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  if (!m) continue;
  console.log(`   ${id} ref=${m.referee?.confirmed ? m.referee.name : 'pending'} · injuries H${m.home.injuries?.length}/A${m.away.injuries?.length} · weather=${m.weather?.temp ?? '?'}°C`);
}
