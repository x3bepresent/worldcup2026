/**
 * Enrich Day 11 todayMatches (m38/m39/m37/m40)
 * Run: node scripts/enrich-day11.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day11');

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
      { icon: '📊', label: '小组积分', text: `${match.group}组第2轮 · G/H 四队均1分乱局` },
      { icon: '🌤️', label: '赛场气候', text: '' },
      { icon: '⚽', label: '战术与阵容', text: match.prediction.key_factor || '' },
    ];
  }
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const ids = ['m38', 'm39', 'm37', 'm40'];

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  ensureInsightFactors(m);
  const w = venueWeather(m.id);
  if (w) m.weather = w;
  patchWeatherInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 11 · weather enriched';

const filtered = (MATCH_DATA.breakingNews || []).filter(n => !/Day 11 气候/.test(n.text || ''));
filtered.unshift(
  { tag: 'UPDATE', text: '✅ Day 11 气候预报已更新（m37–m40）', time: '6月22日' },
  { tag: 'PREVIEW', text: 'H组：西班牙 0-0 后须破局 · 乌拉圭控球碾压未赢', time: '焦点' },
  { tag: 'PREVIEW', text: 'G组四队均1分 · 比利时伊朗 · 新西兰埃及', time: '焦点' },
);
MATCH_DATA.breakingNews = filtered.slice(0, 12);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 11 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = { note: 'Day 11 · G/H组第2轮 · 西班牙/比利时首发待确认' };
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/enrich-day11.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );
} catch { /* optional */ }

console.log('✅ Day 11 enriched:', ids.join(', '));
