/**
 * 进球氛围 vs 进球路径 — 统一「至少 N 球」口径回测
 * 2.25 / 2.5 / 2.75 → 至少 3 球；3.5 → 至少 4 球（formatMarketGoalsInteger）
 * node scripts/backtest-totals-atmosphere-path.js
 */
const fs = require('fs');
const path = require('path');
const lib = require('../js/prediction-signals-lib.js');

const handicapFiles = [
  'handicap-data-day6.js',
  'handicap-data-day7.js',
  'handicap-data-day8.js',
  'handicap-data-day9.js',
];
const rawById = {};
for (const f of handicapFiles) {
  Object.assign(rawById, require(path.join(__dirname, f)));
}

function loadResults() {
  const text = fs.readFileSync(path.join(__dirname, '..', 'js', 'results-data.js'), 'utf8');
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  return JSON.parse(text.slice(start, end + 1));
}

function pct(n, d) {
  return d ? Math.round((n / d) * 1000) / 10 : 0;
}

function getTotalsLine(m) {
  const raw = rawById[m.id];
  return raw?.totals_line ?? m.depth_calibration?.totals_line ?? m.market_snapshot?.totals_line ?? 2.5;
}

function actualMeetsThreshold(total, threshold) {
  return total >= threshold;
}

function atmosDirection(outlook) {
  if (!outlook?.level) return null;
  if (outlook.level.includes('high')) return 'over';
  if (outlook.level.includes('low')) return 'under';
  return null;
}

function pathDirection(lean) {
  if (lean === 'high') return 'over';
  if (lean === 'low') return 'under';
  return null;
}

const data = loadResults();
const matches = data.finishedMatches || [];
const rows = [];

for (const m of matches) {
  const ar = m.actualResult;
  if (ar?.home_score == null) continue;
  const pred = m.prediction || {};
  if (pred.xg_home == null) continue;

  const line = getTotalsLine(m);
  const threshold = lib.formatMarketGoalsInteger(line);
  const total = ar.home_score + ar.away_score;
  const actualOver = actualMeetsThreshold(total, threshold);

  const ctx = lib.buildMatchContextAdjustments(m, pred.xg_home, pred.xg_away);
  const tv = m.depth_calibration?.display_summary?.totals_view;
  const atmosOverPct = tv?.over_pct ?? lib.probTotalsAtLeast(ctx.xg_home, ctx.xg_away, threshold);
  const storedOutlook = tv?.totals_outlook || lib.classifyTotalsOutlook(
    atmosOverPct,
    tv?.line_gap ?? 0,
    line,
    tv?.fair_line ?? 2.5
  );

  const gp = lib.buildGoalEfficiencyPreview({
    ...m,
    prediction: pred,
    depth_calibration: {
      ...(m.depth_calibration || {}),
      totals_line: line,
      display_summary: m.depth_calibration?.display_summary
        || (tv ? { xg_context: m.depth_calibration?.display_summary?.xg_context, totals_view: tv } : null),
    },
  });

  const atmosCall = atmosDirection(storedOutlook);
  const pathCall = pathDirection(gp?.lean);

  const atmosPoissonOver = atmosOverPct >= 50;
  const pathPoissonOver = lib.probTotalsAtLeast(pred.xg_home, pred.xg_away, threshold) >= 50;
  const pathProbAtThreshold = lib.probTotalsAtLeast(pred.xg_home, pred.xg_away, threshold);

  rows.push({
    id: m.id,
    label: `${m.home.name} vs ${m.away.name}`,
    line,
    threshold,
    total,
    actualScore: `${ar.home_score}-${ar.away_score}`,
    actualOver,
    atmosLevel: storedOutlook.level,
    atmosCall,
    atmosOverPct,
    pathLean: gp?.lean,
    pathCall,
    pathLeanCn: gp?.lean_cn,
    pathProbAtThreshold: pathProbAtThreshold,
    pathProbOverLine: gp?.prob_over_line,
    adjXgSum: Math.round((ctx.xg_home + ctx.xg_away) * 100) / 100,
    rawXgSum: Math.round((pred.xg_home + pred.xg_away) * 100) / 100,
    atmosLabelHit: atmosCall ? (atmosCall === 'over') === actualOver : null,
    pathLabelHit: pathCall ? (pathCall === 'over') === actualOver : null,
    atmosPoissonHit: atmosPoissonOver === actualOver,
    pathPoissonHit: pathPoissonOver === actualOver,
    conflict: atmosCall && pathCall && atmosCall !== pathCall,
  });
}

function summarize(title, filter, hitKey) {
  const subset = rows.filter(filter);
  const called = subset.filter(r => r[hitKey] != null);
  const hits = called.filter(r => r[hitKey]).length;
  console.log(
    `${title}: ${hits}/${called.length} = ${pct(hits, called.length)}%`
    + (called.length < subset.length ? ` （出手 ${called.length}/${subset.length} 场）` : ` （全 ${subset.length} 场）`)
  );
}

console.log('\n📊 进球氛围 vs 进球路径 — 统一「至少 N 球」回测\n');
console.log(`样本：${rows.length} 场已归档赛果`);
console.log('口径：2.25 / 2.5 / 2.75 → 至少 3 球；3.5 → 至少 4 球；实际 ≥ 门槛 = 达标\n');

const lineGroups = {};
for (const r of rows) {
  const k = `${r.line} → ≥${r.threshold}`;
  lineGroups[k] = (lineGroups[k] || 0) + 1;
}
console.log('盘口分布：');
Object.entries(lineGroups).sort().forEach(([k, n]) => console.log(`  ${n} 场 · ${k}`));

console.log('\n=== 1. 标签口径（有倾向才计） ===');
summarize('进球氛围 · 标签（含 mild 弱信号）', () => true, 'atmosLabelHit');
summarize('进球氛围 · 仅 clear 强信号', r => /^clear_/.test(r.atmosLevel), 'atmosLabelHit');
summarize('进球路径 · lean 大/小（不含 split）', () => true, 'pathLabelHit');

console.log('\n=== 2. 泊松 50% 分界（每场都出方向） ===');
summarize('进球氛围 · 调整后 xG · P(≥N)≥50%', () => true, 'atmosPoissonHit');
summarize('进球路径 · 原始 xG · P(≥N)≥50%', () => true, 'pathPoissonHit');

console.log('\n=== 3. 实际达标率 ===');
const actualOverCount = rows.filter(r => r.actualOver).length;
console.log(`实际 ≥ 门槛：${actualOverCount}/${rows.length} = ${pct(actualOverCount, rows.length)}%`);

const noAtmos = rows.filter(r => !r.atmosCall).length;
const noPath = rows.filter(r => !r.pathCall).length;
const conflicts = rows.filter(r => r.conflict);
console.log(`\n无标签：氛围 neutral ${noAtmos} 场 · 路径 split/无 ${noPath} 场`);
console.log(`方向矛盾（均有标签且相反）：${conflicts.length} 场`);

console.log('\n=== 4. 逐场明细 ===');
console.log('id | 盘→门槛 | 比分 | 实际 | 氛围 | 路径 | 氛围中? | 路径中?');
for (const r of rows) {
  const act = r.actualOver ? '≥' + r.threshold : '<' + r.threshold;
  const ah = r.atmosLabelHit == null ? '—' : r.atmosLabelHit ? '✓' : '✗';
  const ph = r.pathLabelHit == null ? '—' : r.pathLabelHit ? '✓' : '✗';
  const ac = r.atmosCall ? (r.atmosCall === 'over' ? '偏精彩' : '偏沉闷') : '五五开';
  const pc = r.pathCall ? (r.pathCall === 'over' ? '大球' : '小球') : (r.pathLeanCn || '—');
  console.log(
    `${r.id} | ${r.line}→${r.threshold} | ${r.actualScore}(${r.total}) | ${act}`
    + ` | ${ac}(${r.atmosOverPct}%) | ${pc} | ${ah} | ${ph}`
  );
}

if (conflicts.length) {
  console.log('\n=== 矛盾场次 ===');
  conflicts.forEach(r => {
    console.log(`  ${r.id} ${r.label} · 氛围${r.atmosCall} vs 路径${r.pathCall} · 实际${r.total}球 · adj xG${r.adjXgSum} raw xG${r.rawXgSum}`);
  });
}

console.log('');
