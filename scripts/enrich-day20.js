/**
 * Enrich Day 20 todayMatches (m77–m79 · 32强)
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day20');
const { getTeamNews } = require('./injuries-rumors-day20');
const { getReferee } = require('./referee-data-day20');
const { getTeamStars } = require('./star-data-day20');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
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

function patchWeatherInsight(match) {
  const w = match.weather;
  if (!w || !match.prediction?.insight_factors) return;
  const text = `${w.condition_cn || ''} · ${w.temp}°C · 湿度 ${w.humidity}%；${w.impact_summary || ''}`;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '赛场气候');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

const KNOCKOUT_CTX = {
  m78: 'M78 · 科特迪瓦 E2 vs 挪威 I2 · 胜者 M91 对巴西(M76)',
  m77: 'M77 · 法国 I1 vs 瑞典(3rd) · 胜者 M89 对巴拉圭(M74)',
  m79: 'M79 · 墨西哥 A1 vs 厄瓜多尔(3rd) · 胜者 M92',
};

function patchKnockoutInsight(match) {
  const text = KNOCKOUT_CTX[match.id];
  if (!text || !match.prediction?.insight_factors) return;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '淘汰赛形势');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

const ids = ['m77', 'm78', 'm79'];
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
  m.referee = { ...getReferee(m.id), updated: TS };
  patchWeatherInsight(m);
  patchKnockoutInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 20 · 32强 3场 enriched';

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 20 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = { note: 'Day 20 · 32强 3 场 enriched' };
fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/enrich-day20.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

console.log('✅ Day 20 enriched —', ids.length, 'matches');
