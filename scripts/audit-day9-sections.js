/**
 * Audit Day 9 (m29–m32) referee / lineup / venue / mystic completeness
 */
const fs = require('fs');
const path = require('path');

const MATCH_PATH = path.join(__dirname, '..', 'js', 'matches-data.js');
const raw = fs.readFileSync(MATCH_PATH, 'utf8');
const MATCH_DATA = new Function(raw + '\nreturn MATCH_DATA;')();

const EXPECT = {
  m32: { venue: 'Lumen Field', beijing: '03:00', city: 'Seattle' },
  m30: { venue: 'Gillette Stadium', beijing: '06:00', city: 'Boston' },
  m29: { venue: 'Lincoln Financial Field', beijing: '09:00', city: 'Philadelphia' },
  m31: { venue: "Levi's Stadium", beijing: '11:00', city: 'Santa Clara' },
};

function auditMatch(m) {
  const exp = EXPECT[m.id];
  const ref = m.referee || {};
  const lu = m.lineup || {};
  const w = m.weather || {};
  const my = m.mystic || {};
  const gaps = [];
  const ok = [];

  if (m.venue === exp.venue) ok.push('venue_name');
  else gaps.push(`venue mismatch: ${m.venue} vs ${exp.venue}`);
  if (m.city.includes(exp.city.split(',')[0])) ok.push('city');
  else gaps.push(`city check: ${m.city}`);
  if (m.time_beijing === exp.beijing) ok.push('kickoff_beijing');
  else gaps.push(`beijing time: ${m.time_beijing} vs ${exp.beijing}`);

  if (ref.confirmed) ok.push('referee_confirmed');
  else gaps.push('referee: pending (等待官方确认)');

  if (lu.confirmed) ok.push('lineup_confirmed');
  else if (lu.predicted?.home) ok.push('lineup_predicted_only');
  else gaps.push('lineup: no predicted XI');

  if (w.temp != null && w.condition_cn) ok.push('weather_basic');
  else gaps.push('weather: missing basic');
  if (w.forecast_updated) ok.push('weather_forecast_ts');
  else gaps.push('weather: no forecast_updated (Day8 enrich missing)');
  if (w.weather_factors?.length) ok.push('weather_factors');
  else gaps.push('weather: no weather_factors detail');

  if (m.coach_analysis) ok.push('coach_analysis');
  else gaps.push('coach_analysis: missing');

  if (m.upset_alert) ok.push('upset_alert');
  else gaps.push('upset_alert: missing');

  if (my.hexagram?.name && my.hexagram.name !== '待卦') ok.push('mystic_hexagram');
  else gaps.push('mystic: placeholder 待卦');
  if (my.goal_peak) ok.push('mystic_goal_peak');
  else gaps.push('mystic: no goal_peak');
  if (my.wuxing?.home?.verdict && my.wuxing.home.verdict !== '待定') ok.push('mystic_wuxing');
  else gaps.push('mystic: wuxing 待定');
  if (my.model_bridge) ok.push('mystic_model_bridge');
  else gaps.push('mystic: no model_bridge');

  return {
    id: m.id,
    label: `${m.home.name} vs ${m.away.name}`,
    venue: `${m.venue} · ${m.city}`,
    time: m.time_beijing_full,
    referee: ref.confirmed ? `${ref.name} (${ref.nation})` : '等待官方确认',
    lineup: lu.confirmed ? 'FIFA 已确认' : `媒体预测 · ${lu.predicted?.source || '—'}`,
    weather: `${w.condition_cn || '—'} · ${w.temp ?? '?'}°C · ${w.impact_summary || ''}`,
    mystic: `${my.hexagram?.name || '—'} · 灵力 ${my.home_score}/${my.away_score}`,
    ok,
    gaps,
  };
}

console.log('Day 9 audit —', MATCH_DATA.todayDate || '2026-06-20', '\n');
const rows = (MATCH_DATA.todayMatches || []).map(auditMatch);
for (const r of rows) {
  console.log(`=== ${r.id} ${r.label} ===`);
  console.log('  开球:', r.time);
  console.log('  场地:', r.venue);
  console.log('  裁判:', r.referee);
  console.log('  首发:', r.lineup);
  console.log('  气候:', r.weather);
  console.log('  灵力:', r.mystic);
  console.log('  ✅ OK:', r.ok.length ? r.ok.join(', ') : '—');
  console.log('  ⚠ 缺口:', r.gaps.length ? r.gaps.join('\n         ') : '—');
  console.log('');
}

const totalGaps = rows.reduce((s, r) => s + r.gaps.length, 0);
const expectedPending = rows.filter(r => r.gaps.some(g => /referee|lineup.*pending|等待官方/.test(g))).length;
console.log(`Summary: ${rows.length} matches · ${totalGaps} gap items total`);
console.log(`Expected pending (referee/lineup): ${expectedPending} matches — update referee-data-day9.js when FIFA confirms.`);
