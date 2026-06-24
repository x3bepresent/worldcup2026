/**
 * Enrich Day 14 — m51/m52/m49/m50/m53/m54（6场）
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day14');
const { pendingReferee } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

const ids = ['m51', 'm52', 'm49', 'm50', 'm53', 'm54'];
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  const w = venueWeather(m.id);
  if (w) m.weather = w;
  if (!m.referee?.confirmed) {
    m.referee = pendingReferee(`FIFA Match ${m.fifa_match_number} 裁判名单赛前公布。`);
  }
  if (m.prediction && !m.prediction.insight_factors) {
    m.prediction.insight_factors = [
      { icon: '📊', label: '小组积分', text: `${m.group}组末轮 · 出线形势见各场详情` },
      { icon: '🌤️', label: '赛场气候', text: w ? `${w.condition_cn} · ${w.temp}°C` : '' },
      { icon: '⚽', label: '战术与阵容', text: m.prediction.key_factor || '' },
    ];
  }
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 14 · weather enriched';
const news = (MATCH_DATA.breakingNews || []).filter(n => !/Day 14 气候/.test(n.text || ''));
news.unshift({ tag: 'UPDATE', text: '✅ Day 14 气候预报已更新（m49–m54，共6场）', time: '6月25日' });
MATCH_DATA.breakingNews = news.slice(0, 12);

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 14 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = { note: 'Day 14 · A/B/C组末轮6场 · 墨西哥6分 · 瑞士/加拿大各4分' };
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/enrich-day14.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
} catch { /* optional */ }

console.log('✅ Day 14 enriched:', ids.join(', '));
