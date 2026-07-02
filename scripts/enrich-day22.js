/**
 * Enrich Day 22 todayMatches (m83–m85 · 32强)
 * Run: node scripts/enrich-day22.js && node scripts/apply-prediction-signals.js && node scripts/enrich-day22.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day22');
const { getTeamNews } = require('./injuries-rumors-day22');
const { getReferee } = require('./referee-data-day22');
const { getTeamStars } = require('./star-data-day22');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const KNOCKOUT_CTX = {
  m83: 'M83 · 葡萄牙 K2 vs 克罗地亚 L2 · 胜者 M93 对西班牙',
  m84: 'M84 · 西班牙 H1 vs 奥地利 J2 · 胜者 M93',
  m85: 'M85 · 瑞士 B1 vs 阿尔及利亚(3rd) · 胜者 M96',
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

const ids = ['m83', 'm84', 'm85'];
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
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 22 · 32强 enriched · 裁判/伤病/球星/赛场';

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 22 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = {
  note: 'Day 22 · M84/M83/M85 · FIFA 裁判已确认 · 伤病/更衣室/赛场已更新',
  m84: '西班牙：Carvajal 队检 · 奥地利：Laimer 减量',
  m83: '葡萄牙：Pepe 体能轮换 · 克罗地亚：Brozović 队检',
  m85: '瑞士：Embolo 膝伤管理 · 阿尔及利亚：Bounedjah 队检',
};
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/enrich-day22.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Day 22 enriched —', ids.join(', '));
