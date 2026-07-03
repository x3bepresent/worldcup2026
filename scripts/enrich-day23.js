/**
 * Enrich Day 23 todayMatches (m86–m88 · 32强收官)
 * Run: node scripts/enrich-day23.js && node scripts/apply-prediction-signals.js && node scripts/enrich-day23.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day23');
const { getTeamNews } = require('./injuries-rumors-day23');
const { getReferee } = require('./referee-data-day23');
const { getTeamStars } = require('./star-data-day23');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const KNOCKOUT_CTX = {
  m88: 'M88 · 澳大利亚 D2 vs 埃及 G2 · 胜者 M95 对阿根廷',
  m86: 'M86 · 阿根廷 J1 vs 佛得角 H2 · 胜者 M95',
  m87: 'M87 · 哥伦比亚 K1 vs 加纳(3rd) · 胜者 M96 对瑞士',
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

const ids = ['m86', 'm87', 'm88'];
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
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 23 · 32强收官 enriched · 裁判/伤病/球星/赛场';

const agentDay22Note = {
  tag: 'UPDATE',
  text: '📊 Day22 Agent：★全让球 3/3 · 净-0.5单位(★) · 6项合计0 · 西-1.5✓/克+0.5/1输半/阿+0.5✗',
  time: '复盘',
};
MATCH_DATA.breakingNews = [
  agentDay22Note,
  ...(MATCH_DATA.breakingNews || []).filter((n) => !n.text?.includes('Day22 Agent')),
].slice(0, 12);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 23 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = {
  note: 'Day 23 · M88/M86/M87 · FIFA 裁判已确认 · 哥伦比亚 vs 加纳(官方)',
  m86: '阿根廷：Paredes 队检',
  m87: '加纳：Inaki Williams 队检',
  m88: '澳大利亚：Souttar 减量',
};
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/enrich-day23.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Day 23 enriched —', ids.join(', '));
