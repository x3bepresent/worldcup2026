/**
 * Enrich Day 38 todayMatches (m104 · 决赛西班牙 vs 阿根廷)
 * Run: node scripts/enrich-day38.js && node scripts/apply-prediction-signals.js && node scripts/enrich-day38.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day38');
const { getTeamNews } = require('./injuries-rumors-day38');
const { getReferee } = require('./referee-data-day38');
const { getTeamStars } = require('./star-data-day38');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const KNOCKOUT_CTX = {
  m104: 'M104 · 决赛 · 西班牙 vs 阿根廷 · 冠军争夺',
};

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function patchKnockoutInsight(match) {
  const text = KNOCKOUT_CTX[match.id];
  if (!text || !match.prediction) return;
  if (!match.prediction.insight_factors) match.prediction.insight_factors = [];
  const idx = match.prediction.insight_factors.findIndex((f) => f.label === '淘汰赛形势');
  const factor = { icon: '⚔️', label: '淘汰赛形势', text };
  if (idx >= 0) match.prediction.insight_factors[idx] = factor;
  else match.prediction.insight_factors.unshift(factor);
}

function patchWeatherInsight(match) {
  const w = match.weather;
  if (!w || !match.prediction?.insight_factors) return;
  const bits = [
    w.condition_cn,
    w.temp != null ? `${w.temp}°C` : null,
    w.humidity != null ? `湿度 ${w.humidity}%` : null,
    w.rain_chance != null ? `降雨概率 ${w.rain_chance}%` : null,
    w.wind || null,
  ].filter(Boolean);
  const factorBits = (w.weather_factors || []).map((f) => f.label).slice(0, 2);
  const text = `${bits.join(' · ')}；${w.impact_summary || ''}${factorBits.length ? `（${factorBits.join(' · ')}）` : ''}`;
  const idx = match.prediction.insight_factors.findIndex((f) => f.label === '赛场气候');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
  else match.prediction.insight_factors.push({ icon: '🌤️', label: '赛场气候', text });
}

const ids = ['m104'];
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;

  const w = venueWeather(m.id);
  if (w) m.weather = w;

  const homeNews = getTeamNews(m.id, 'home');
  const awayNews = getTeamNews(m.id, 'away');
  m.home.injuries = homeNews.injuries;
  m.home.rumors = homeNews.rumors;
  m.away.injuries = awayNews.injuries;
  m.away.rumors = awayNews.rumors;

  const homeStars = getTeamStars(m.id, 'home');
  const awayStars = getTeamStars(m.id, 'away');
  if (homeStars.stars?.length) {
    m.home.stars = homeStars.stars;
    m.home.star = homeStars.star;
  }
  if (awayStars.stars?.length) {
    m.away.stars = awayStars.stars;
    m.away.star = awayStars.star;
  }

  m.referee = { ...getReferee(m.id), updated: TS };
  patchKnockoutInsight(m);
  patchWeatherInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 38 · 决赛 enriched · 裁判/伤病/球星/赛场气候';

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 38 · 决赛 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

if (fs.existsSync(LIVE_PATH)) {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = { note: 'Day 38 enriched · 西班牙/阿根廷 决赛' };
  fs.writeFileSync(LIVE_PATH, `// Auto-synced · enrich-day38\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
}

console.log('✅ Day 38 enriched — m104');
