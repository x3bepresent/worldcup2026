/**
 * Enrich Day 12 todayMatches (m41–m44)
 * Run: node scripts/enrich-day12.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day12');
const { pendingReferee } = require('./pending-templates');

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
  else match.prediction.insight_factors.push({ icon: '🌤️', label: '赛场气候', text });
}

function ensureInsightFactors(match) {
  if (!match.prediction) return;
  if (!match.prediction.insight_factors) {
    match.prediction.insight_factors = [
      { icon: '📊', label: '小组积分', text: `${match.group}组第2轮 · K/L 组形势见各场详情` },
      { icon: '🌤️', label: '赛场气候', text: '' },
      { icon: '⚽', label: '战术与阵容', text: match.prediction.key_factor || '' },
    ];
  }
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const ids = ['m43', 'm42', 'm41', 'm44'];

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  ensureInsightFactors(m);
  const w = venueWeather(m.id);
  if (w) m.weather = w;
  if (!m.referee?.confirmed) {
    m.referee = pendingReferee(`FIFA Match ${m.id.replace('m', '')} 裁判名单赛前公布。`);
  }
  patchWeatherInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 12 · weather enriched';

const filtered = (MATCH_DATA.breakingNews || []).filter(n => !/Day 12 气候/.test(n.text || ''));
filtered.unshift({ tag: 'UPDATE', text: '✅ Day 12 气候预报已更新（m41–m44）', time: '6月24日' });
MATCH_DATA.breakingNews = filtered.slice(0, 12);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 12 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = { note: 'Day 12 · I/J组第2轮 · 阿根廷/奥地利榜首 · Haaland vs Mané' };
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/enrich-day12.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );
} catch { /* optional */ }

console.log('✅ Day 12 enriched:', ids.join(', '));
