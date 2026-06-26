/**
 * Enrich Day 16 todayMatches (m61–m66)
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day16');
const { getTeamNews } = require('./injuries-rumors-day16');
const { getReferee } = require('./referee-data-day16');
const { getTeamStars } = require('./star-data-day16');

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
  m61: 'Norway/France 各 6 分 · I 组榜首生死战',
  m62: 'Senegal/Iraq 各 0 分 · 荣誉战',
  m63: 'Egypt 4 分领跑 vs Iran 2 分须胜',
  m64: 'Belgium 2 分须胜 vs New Zealand 1 分',
  m65: 'Cape Verde 2 分 vs Saudi Arabia 1 分 · H 组争出线',
  m66: 'Spain 4 分 vs Uruguay 2 分须胜 · 高原夜战',
};

function patchGroupInsight(match) {
  const text = GROUP_CTX[match.id];
  if (!text || !match.prediction?.insight_factors) return;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '小组积分');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

const ids = ['m61', 'm62', 'm63', 'm64', 'm65', 'm66'];
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
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 16 · G/H/I 末轮 enriched';

const filtered = (MATCH_DATA.breakingNews || []).filter(n => !/Day 16|伤病|核心球员|气候/.test(n.text || ''));
filtered.unshift(
  { tag: 'PREVIEW', text: '✅ Day 16 预测已更新（m61–m66 · G/H/I 末轮）', time: '6月27日' },
  { tag: 'INJURY', text: '✅ Day 16 伤病/更衣室：挪威法国榜首战 · 比利时须胜', time: '6月27日' },
);
MATCH_DATA.breakingNews = filtered.slice(0, 14);

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 16 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = { note: 'Day 16 · G/H/I末轮 · 挪威法国各6分 · 埃及4分 · 西班牙4分' };
fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/enrich-day16.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

console.log('✅ Day 16 enriched:', ids.join(', '));
