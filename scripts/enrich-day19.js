/**
 * Enrich Day 19 todayMatches (m74–m76 · 32强)
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day19');
const { getTeamNews } = require('./injuries-rumors-day19');
const { getReferee } = require('./referee-data-day19');
const { getTeamStars } = require('./star-data-day19');

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
  const text = `${w.condition_cn || ''} · ${w.temp}°C · 湿度 ${w.humidity}%；${w.impact_summary || ''}`;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '赛场气候');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

function ensureInsightFactors(match) {
  if (!match.prediction) return;
  if (!match.prediction.insight_factors) {
    match.prediction.insight_factors = [
      { icon: '⚔️', label: '淘汰赛形势', text: match.knockout_slot || '32强单场淘汰' },
      { icon: '🌤️', label: '赛场气候', text: '' },
      { icon: '⚽', label: '战术与阵容', text: match.prediction.key_factor || '' },
    ];
  }
}

const KNOCKOUT_CTX = {
  m76: 'M76 · 巴西 C1 vs 日本 F2 · 胜者 M91 对 M78 胜者',
  m74: 'M74 · 德国 E1 vs 巴拉圭(3rd) · 胜者 M89 对 M77 胜者',
  m75: 'M75 · 荷兰 F1 vs 摩洛哥 C2 · 胜者 M90 对加拿大(M73)',
};

function patchKnockoutInsight(match) {
  const text = KNOCKOUT_CTX[match.id];
  if (!text || !match.prediction?.insight_factors) return;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '淘汰赛形势');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

const ids = ['m74', 'm75', 'm76'];
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  ensureInsightFactors(m);
  const w = venueWeather(m.id);
  if (w) m.weather = w;
  const homeNews = getTeamNews(m.id, 'home');
  const awayNews = getTeamNews(m.id, 'away');
  m.home.injuries = homeNews.injuries;
  m.home.rumors = homeNews.rumors;
  m.away.injuries = awayNews.injuries;
  m.away.rumors = awayNews.rumors;
  const home = getTeamStars(m.id, 'home');
  const away = getTeamStars(m.id, 'away');
  if (home.stars?.length) { m.home.stars = home.stars; m.home.star = home.star; }
  if (away.stars?.length) { m.away.stars = away.stars; m.away.star = away.star; }
  m.referee = { ...getReferee(m.id), updated: TS };
  patchWeatherInsight(m);
  patchKnockoutInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 19 · 32强 3场 enriched';

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 19 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = { note: 'Day 19 · 32强 3 场 enriched' };
fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/enrich-day19.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

console.log('✅ Day 19 enriched —', ids.length, 'matches');
