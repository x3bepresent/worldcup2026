/**
 * Enrich Day 15 todayMatches (m55–m60)
 * Run: node scripts/enrich-day15.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day15');
const { getTeamNews } = require('./injuries-rumors-day15');
const { getReferee } = require('./referee-data-day15');
const { buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS } = require('./coach-data-day15');
const { getTeamStars } = require('./star-data-day15');

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
  m55: 'Côte d\'Ivoire 3 分须胜 vs Curaçao 1 分 · 德国 6 分已领跑',
  m56: 'Germany 6 分 vs Ecuador 1 分须胜 · 同开 m55 决定 E 组次席',
  m57: 'Japan 4 分 vs Sweden 3 分须胜 · F 组出线战',
  m58: 'Netherlands 4 分 vs Tunisia 0 分 · 同开 m57 联动',
  m59: 'USA 6 分已出线 vs Türkiye 0 分须胜',
  m60: 'Paraguay/Australia 各 3 分 · D 组争二生死战',
};

function patchGroupInsight(match) {
  const text = GROUP_CTX[match.id];
  if (!text || !match.prediction?.insight_factors) return;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '小组积分');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

function applyCoachAndUpset(match) {
  const keys = MATCH_COACH_KEYS[match.id];
  if (!keys) return;
  match.coach_analysis = buildCoachAnalysis(keys.homeKey, keys.awayKey);
  const upset = getUpsetAlert(match.id);
  if (upset) match.upset_alert = upset;
}

const ids = ['m55', 'm56', 'm57', 'm58', 'm59', 'm60'];
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
  applyCoachAndUpset(m);
  m.referee = { ...getReferee(m.id), updated: TS };
  patchWeatherInsight(m);
  patchGroupInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 15 · 官方裁判+场地气候已确认';

const filtered = (MATCH_DATA.breakingNews || []).filter(n => !/Day 15 气候|教练分析|伤病预报|核心球员|官方裁判|场地/.test(n.text || ''));
filtered.unshift(
  { tag: 'REFEREE', text: '✅ FIFA 官方裁判 m55–m60 已确认（Nyberg/Penso/Barton/García/Ghorbal/Turpin）', time: '6月26日' },
  { tag: 'UPDATE', text: '✅ Day 15 场地气候+草皮条件已更新（6 场含 weather_factors）', time: '6月26日' },
  { tag: 'UPDATE', text: '✅ Day 15 教练分析&冷门预警已纳入（m55–m60）', time: '6月26日' },
  { tag: 'INJURY', text: '✅ Day 15 伤病/更衣室：德国/美国或轮换 · 日本瑞典生死战', time: '6月26日' },
);
MATCH_DATA.breakingNews = filtered.slice(0, 14);

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 15 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = { note: 'Day 15 · D/E/F末轮 · 德国/美国6分 · 日本荷兰各4分 · 巴拉圭澳大利亚生死战' };
fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/enrich-day15.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

console.log('✅ Day 15 enriched:', ids.join(', '));
