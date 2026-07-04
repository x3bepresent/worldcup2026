/**
 * Enrich Day 24 todayMatches (m89–m90 · 16强开赛)
 * Run: node scripts/enrich-day24.js && node scripts/apply-prediction-signals.js && node scripts/enrich-day24.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day24');
const { getTeamNews } = require('./injuries-rumors-day24');
const { getReferee } = require('./referee-data-day24');
const { getTeamStars } = require('./star-data-day24');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const KNOCKOUT_CTX = {
  m90: 'M90 · 16强 · 加拿大 vs 摩洛哥 · 胜者 M97 对 M89 胜者',
  m89: 'M89 · 16强 · 巴拉圭 vs 法国 · 胜者 M97 对 M90 胜者',
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

const ids = ['m89', 'm90'];
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
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 24 · 16强开赛 enriched · 裁判/伤病/球星/赛场';

const agentDay23Note = {
  tag: 'UPDATE',
  text: '📊 Day23 Agent：让球1.5/3 · 大小1/2 · 倾向★50% · 佛+2/2.5✓/哥-0.5✓/澳-0/0.5输半',
  time: '复盘',
};
MATCH_DATA.breakingNews = [
  agentDay23Note,
  ...(MATCH_DATA.breakingNews || []).filter((n) => !n.text?.includes('Day23 Agent') && !n.text?.includes('Day22 Agent')),
].slice(0, 12);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 24 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = {
  note: 'Day 24 · M89/M90 · FIFA 裁判已确认 · 16强开赛',
  m90: '加拿大：Eustáquio 黄牌累积 · 摩洛哥：Aguerd 队检',
  m89: '法国：Dembélé 队检（或 Coman 顶替）· 巴拉圭：铁桶全员',
};
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/enrich-day24.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Day 24 enriched —', ids.join(', '));
