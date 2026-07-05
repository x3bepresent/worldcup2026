/**
 * Enrich Day 25 todayMatches (m91–m92 · 16强续战)
 * Run: node scripts/enrich-day25.js && node scripts/apply-prediction-signals.js && node scripts/enrich-day25.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day25');
const { getTeamNews } = require('./injuries-rumors-day25');
const { getReferee } = require('./referee-data-day25');
const { getTeamStars } = require('./star-data-day25');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const KNOCKOUT_CTX = {
  m91: 'M91 · 16强 · 巴西 vs 挪威 · 胜者 M99 对 M92 胜者',
  m92: 'M92 · 16强 · 墨西哥 vs 英格兰 · 胜者 M99 对 M91 胜者',
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

const ids = ['m91', 'm92'];
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
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 25 · 16强续战 enriched · 裁判/伤病/球星/赛场';

const agentDay24Note = {
  tag: 'UPDATE',
  text: '📊 Day24 Agent：让球1/2 · 大小2/2 · 倾向★50% · 巴+2✓/加+0.5✗',
  time: '复盘',
};
MATCH_DATA.breakingNews = [
  agentDay24Note,
  ...(MATCH_DATA.breakingNews || []).filter((n) => !n.text?.includes('Day24 Agent') && !n.text?.includes('Day23 Agent')),
].slice(0, 12);

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 25 · 16强续战 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

if (fs.existsSync(LIVE_PATH)) {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = { note: 'Day 25 enriched · 巴西/挪威/墨西哥/英格兰' };
  fs.writeFileSync(LIVE_PATH, `// Auto-synced · enrich-day25\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
}

console.log('✅ Day 25 enriched — m91, m92');
