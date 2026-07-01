/**
 * Enrich Day 21 todayMatches (m80–m82 · 32强)
 */
const fs = require('fs');
const path = require('path');
const { getReferee } = require('./referee-data-day21');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const KNOCKOUT_CTX = {
  m80: 'M80 · 英格兰 L1 vs 刚果(金)(3rd) · 胜者 M92 对墨西哥',
  m81: 'M81 · 美国 D1 vs 波黑(3rd) · 胜者 M94',
  m82: 'M82 · 比利时 G1 vs 塞内加尔(3rd) · 胜者 M94',
};

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function ensureInsightFactors(match) {
  if (!match.prediction) return;
  if (!match.prediction.insight_factors) {
    match.prediction.insight_factors = [
      { icon: '⚔️', label: '淘汰赛形势', text: match.knockout_slot || '32强单场淘汰' },
      { icon: '🌤️', label: '赛场气候', text: '' },
      { icon: '⚽', label: '战术与阵容', text: match.prediction.key_factor || '' },
    ];
  }
}

function patchKnockoutInsight(match) {
  const text = KNOCKOUT_CTX[match.id];
  if (!text || !match.prediction?.insight_factors) return;
  const idx = match.prediction.insight_factors.findIndex((f) => f.label === '淘汰赛形势');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

function patchWeatherInsight(match) {
  const w = match.weather;
  if (!w || !match.prediction?.insight_factors) return;
  const text = `${w.condition_cn || ''} · ${w.temp}°C · 湿度 ${w.humidity}%；${w.impact_summary || ''}`;
  const idx = match.prediction.insight_factors.findIndex((f) => f.label === '赛场气候');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
}

const ids = ['m80', 'm81', 'm82'];
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  ensureInsightFactors(m);
  patchKnockoutInsight(m);
  patchWeatherInsight(m);
  m.referee = { ...getReferee(m.id), updated: TS };
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 21 · 32强 3场 enriched';

fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 21 enriched\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);

const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
LIVE_DATA.lastUpdated = TS;
LIVE_DATA.injuries = { note: 'Day 21 · 32强 3 场 enriched · 待临场盘' };
fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/enrich-day21.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

console.log('✅ Day 21 enriched —', ids.join(', '));
