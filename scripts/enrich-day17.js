/**
 * Enrich Day 17 todayMatches (m67–m72)
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day17');
const { getTeamNews } = require('./injuries-rumors-day17');
const { getReferee } = require('./referee-data-day17');
const { getTeamStars } = require('./star-data-day17');

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
}

function ensureInsightFactors(match) {
  if (!match.prediction) return;
  if (!match.prediction.insight_factors) {
    match.prediction.insight_factors = [
      { icon: '📊', label: '小组积分', text: `${match.group}组末轮 · 出线形势见各场详情` },
      { icon: '🌤️', label: '赛场气候', text: '' },
      { icon: '⚽', label: '战术与阵容', text: match.prediction.key_factor || '' },
    ];
  }
}

const GROUP_CTX = {
  m67: '巴拿马 0 分 vs 英格兰 4 分 · L 组末轮',
  m68: '加纳 4 分 vs 克罗地亚 3 分 · L 组榜首对话',
  m69: '阿尔/奥各 3 分 · J 组生死战',
  m70: '阿根廷 6 分已出线 vs 约旦 0 分',
  m71: '哥伦 6 分 vs 葡萄牙 4 分 · K 组榜首战',
  m72: '刚果(金) 1 分须胜 vs 乌兹别克 0 分',
};

function patchGroupInsight(match) {
  const text = GROUP_CTX[match.id];
  if (!text || !match.prediction?.insight_factors) return;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '小组积分');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

const ids = ['m67', 'm68', 'm69', 'm70', 'm71', 'm72'];
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
  patchGroupInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 17 · J/K/L 末轮 enriched';

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 17 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = { note: 'Day 17 · J/K/L 末轮 enriched · 6 场' };
fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/enrich-day17.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

console.log('✅ Day 17 enriched —', ids.length, 'matches');
