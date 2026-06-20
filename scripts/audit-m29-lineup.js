/**
 * m29 官方首发后数据一致性审计
 * Run: node scripts/audit-m29-lineup.js
 */
const fs = require('fs');
const path = require('path');

const MATCH_PATH = path.join(__dirname, '..', 'js', 'matches-data.js');
const raw = fs.readFileSync(MATCH_PATH, 'utf8');
const DATA = new Function(raw + '\nreturn MATCH_DATA;')();
const m = DATA.todayMatches.find(x => x.id === 'm29');
if (!m) {
  console.error('m29 not found');
  process.exit(1);
}

const EXPECT = {
  xg_home: 1.85,
  xg_away: 0.69,
  probs: { home: 60, draw: 23, away: 17 },
  formation: '4-4-2 / 5-4-1',
  homeXi: /Matheus Cunha.*Paquetá|Bruno Guimarães/,
  awayXi: /Pierrot/,
  noAwayNazonStart: true,
};

const checks = [];
function pass(label, detail) {
  checks.push({ ok: true, label, detail });
}
function fail(label, detail) {
  checks.push({ ok: false, label, detail });
}

// 首发
if (m.lineup?.confirmed) pass('lineup.confirmed', m.lineup.formation);
else fail('lineup.confirmed', '未确认');

if (m.lineup?.formation === EXPECT.formation) pass('formation', EXPECT.formation);
else fail('formation', `got ${m.lineup?.formation}`);

if (EXPECT.homeXi.test(m.lineup?.home || '')) pass('home XI', 'Bruno G / Cunha 在列');
else fail('home XI', m.lineup?.home);

if (EXPECT.awayXi.test(m.lineup?.away || '') && !/Nazon.*先发/.test(m.lineup?.away || '')) {
  pass('away XI', 'Pierrot 单箭');
} else fail('away XI', m.lineup?.away);

// xG / 概率
const p = m.prediction || {};
if (p.xg_home === EXPECT.xg_home && p.xg_away === EXPECT.xg_away) {
  pass('prediction xG', `${p.xg_home}–${p.xg_away}`);
} else fail('prediction xG', `${p.xg_home}–${p.xg_away}`);

if (p.home_win === EXPECT.probs.home && p.draw === EXPECT.probs.draw && p.away_win === EXPECT.probs.away) {
  pass('depth-calibrated probs', `${p.home_win}/${p.draw}/${p.away_win}`);
} else fail('depth-calibrated probs', `${p.home_win}/${p.draw}/${p.away_win}`);

if (p.depth_calibrated) pass('depth_calibrated flag', 'true');
else fail('depth_calibrated flag', String(p.depth_calibrated));

// 文案一致性
const stalePatterns = [
  { re: /xG 1\.85-0\.75/, where: 'mystic.model_bridge', val: m.mystic?.model_bridge },
  { re: /Nazon 反击窗口/, where: 'weather.away_note', val: m.weather?.away_note },
  { re: /^Nazon 支点$/, where: 'coach away style_tags', val: (m.coach_analysis?.away?.style_tags || []).join('|') },
  { re: /复出与否/, where: 'upset Neymar factor', val: JSON.stringify(m.upset_alert?.factors) },
  { re: /0\.75(?!.*before)/, where: 'goal_efficiency_preview', val: m.depth_calibration?.goal_efficiency_preview?.summary_cn },
];

for (const { re, where, val } of stalePatterns) {
  if (val && re.test(String(val))) fail(`stale: ${where}`, String(val).slice(0, 80));
  else pass(`fresh: ${where}`, 'OK');
}

if (/0\.69/.test(m.mystic?.model_bridge || '')) pass('mystic xG', m.mystic.model_bridge);
else fail('mystic xG', m.mystic?.model_bridge);

if (/Nazon 替补|Pierrot/.test(m.weather?.away_note || '')) pass('weather away_note', 'Pierrot/Nazon替补');
else fail('weather away_note', m.weather?.away_note);

const dc = m.depth_calibration?.display_summary?.xg_context;
if (dc?.baseline_away === 0.69) pass('dc xg_context', `${dc.baseline_home}–${dc.baseline_away}`);
else fail('dc xg_context', JSON.stringify(dc));

const gp = m.depth_calibration?.goal_efficiency_preview;
if (gp?.away_xg === 0.69 || /Haiti 0\.69/.test(gp?.summary_cn || '')) {
  pass('goal_efficiency_preview', gp?.lean_cn || gp?.summary_cn?.slice(0, 40));
} else fail('goal_efficiency_preview', gp?.summary_cn?.slice(0, 60));

const lineupCtx = m.depth_calibration?.display_summary?.context_factors?.find(f => f.label === '官方首发');
if (lineupCtx?.note?.includes('Nazon 替补')) pass('dc 官方首发 factor', '含 Nazon 替补');
else fail('dc 官方首发 factor', lineupCtx?.note);

const newsStale = (DATA.breakingNews || []).some(n => /裁判\/首发仍待 FIFA 官方/.test(n.text || ''));
if (!newsStale) pass('breakingNews', '无「首发仍待」旧稿');
else fail('breakingNews', '仍有「裁判/首发仍待 FIFA 官方」');

console.log('=== m29 Brazil vs Haiti 首发数据审计 ===\n');
for (const c of checks) {
  console.log((c.ok ? '✅' : '❌') + ' ' + c.label + (c.detail ? ' — ' + c.detail : ''));
}
const fails = checks.filter(c => !c.ok);
console.log(`\n${checks.length - fails.length}/${checks.length} passed`);
if (fails.length) process.exit(1);
