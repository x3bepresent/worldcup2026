/**
 * Enrich Day 13 — m47/m45/m46/m48
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day13');
const { pendingReferee } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

const ids = ['m47', 'm45', 'm46', 'm48'];
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  const w = venueWeather(m.id);
  if (w) m.weather = w;
  if (!m.referee?.confirmed) m.referee = pendingReferee(`FIFA Match ${m.fifa_match_number} 裁判名单赛前公布。`);
  if (m.prediction && !m.prediction.insight_factors) {
    m.prediction.insight_factors = [
      { icon: '📊', label: '小组积分', text: `${m.group}组第2轮` },
      { icon: '🌤️', label: '赛场气候', text: w ? `${w.condition_cn} · ${w.temp}°C` : '' },
      { icon: '⚽', label: '战术与阵容', text: m.prediction.key_factor || '' },
    ];
  }
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 13 · weather enriched';
const news = (MATCH_DATA.breakingNews || []).filter(n => !/Day 13 气候/.test(n.text || ''));
news.unshift({ tag: 'UPDATE', text: '✅ Day 13 气候预报已更新（m45–m48）', time: '6月24日' });
MATCH_DATA.breakingNews = news.slice(0, 12);

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 13 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = { note: 'Day 13 · K/L组第2轮 · 葡萄牙/英格兰/哥伦比亚须抢分' };
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/enrich-day13.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
} catch { /* optional */ }

console.log('✅ Day 13 enriched:', ids.join(', '));
