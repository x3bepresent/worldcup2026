/**
 * 进球氛围 / 进球路径 / 路径兑现 — 全量已赛回测
 * node scripts/backtest-goal-modules.js
 */
const fs = require('fs');
const path = require('path');
const lib = require('../js/prediction-signals-lib.js');

function loadResults() {
  const text = fs.readFileSync(path.join(__dirname, '..', 'js', 'results-data.js'), 'utf8');
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  return JSON.parse(text.slice(start, end + 1));
}

function pct(n, d) {
  return d ? Math.round((n / d) * 1000) / 10 : 0;
}

function computePreviewPath(m) {
  const p = m.prediction;
  if (!p || p.xg_home == null) return null;
  const xgH = Number(p.xg_home);
  const xgA = Number(p.xg_away);
  const xgT = Math.round((xgH + xgA) * 100) / 100;
  const gap = Math.round(Math.abs(xgH - xgA) * 100) / 100;
  const favXg = Math.max(xgH, xgA);
  const dogXg = Math.min(xgH, xgA);
  const scores = lib.scoreGoalPathPreview(favXg, dogXg, gap, xgT);
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = ranked[0][0];
  const ms = m.market_snapshot || {};
  const gp = lib.buildGoalEfficiencyPreview({
    prediction: p,
    home: m.home,
    away: m.away,
    depth_calibration: { totals_line: ms.totals_line ?? 2.5 },
  });
  return {
    primary,
    primaryCn: { fav_burst: '热门爆发', dog_bloom: '弱队开花', open: '对攻', low: '铁局/小比分' }[primary],
    lean: gp?.lean,
    lean_cn: gp?.lean_cn,
    lean_mode: gp?.lean_mode,
    path_pct: gp?.scenarios?.[0]?.prob_pct,
    scores,
    gp,
  };
}

function evalPathHit(m, preview, ge) {
  if (!preview || !ge) return null;
  const predPath = preview.primary;
  const actualPath = ge.path_type;
  const goals = ge.total_goals;
  const line = m.market_snapshot?.totals_line ?? 2.5;
  const pathMap = { open: 'open_game' };
  if ((pathMap[predPath] || predPath) === actualPath) return true;
  if (predPath === 'low') return goals <= 2 || (actualPath === 'mixed' && goals <= 3);
  if (predPath === 'fav_burst') return actualPath === 'fav_burst' || (ge.fav_eff >= 1.5 && goals >= 3);
  if (predPath === 'dog_bloom') return actualPath === 'dog_bloom' || ge.dog_eff >= 1.2;
  if (predPath === 'open') {
    return actualPath === 'open_game' || (ge.fav_eff >= 1.2 && ge.dog_eff >= 1.0 && goals >= 4);
  }
  if (preview.lean === 'high') return goals > line;
  if (preview.lean === 'low') return goals < line || Math.abs(goals - line) < 0.01;
  return false;
}

function getTotalsOutlook(m) {
  const ms = m.market_snapshot || {};
  const to = m.depth_calibration?.display_summary?.customer_reading?.totals || {};
  return {
    level: to.level ?? ms.totals_level,
    show_lean: to.show_lean ?? ms.totals_show_lean ?? false,
    lean_side: to.lean_side ?? ms.totals_lean_side,
    over_pct: m.depth_calibration?.display_summary?.totals_view?.over_pct ?? ms.over_pct,
    line: ms.totals_line ?? 2.5,
  };
}

function evalAtmosphere(m, total) {
  const o = getTotalsOutlook(m);
  const line = o.line;
  const push = Math.abs(total - line) < 0.01;
  const over = total > line;
  const under = total < line;

  if (!o.show_lean) {
    return { gradeable: false, verdict: 'neutral', hit: null, note: '未强判' };
  }

  const dull = o.lean_side === 'dull' || (o.level || '').includes('low');
  const bright = o.lean_side === 'bright' || o.lean_side === 'exciting' || (o.level || '').includes('high');

  if (push) return { gradeable: true, verdict: dull ? 'dull' : bright ? 'bright' : 'neutral', hit: null, note: '走水' };
  if (dull) return { gradeable: true, verdict: 'dull', hit: under, note: `偏闷→实际${total}球` };
  if (bright) return { gradeable: true, verdict: 'bright', hit: over, note: `偏精彩→实际${total}球` };
  return { gradeable: false, verdict: 'mild', hit: null, note: '弱信号' };
}

/** 有盘口时：over_pct≥50 为大，<50 为小 */
function evalAtmosphereModelPct(m, total) {
  const o = getTotalsOutlook(m);
  const line = o.line;
  if (o.over_pct == null) return null;
  const push = Math.abs(total - line) < 0.01;
  if (push) return { hit: null, modelOver: o.over_pct >= 50 };
  const modelOver = o.over_pct >= 50;
  const actualOver = total > line;
  return { hit: modelOver === actualOver, modelOver, actualOver, line, over_pct: o.over_pct };
}

function evalXgTotalDirection(m, total) {
  const p = m.prediction;
  if (!p) return null;
  const xgT = (Number(p.xg_home) || 0) + (Number(p.xg_away) || 0);
  const diff = total - xgT;
  if (Math.abs(diff) < 0.5) return { hit: null, note: '接近xG' };
  const modelUnder = xgT < total;
  return { hit: modelUnder === (total > xgT), xgT, diff: Math.round(diff * 100) / 100 };
}

const matches = (loadResults().finishedMatches || []).filter(m => m.actualResult?.status === 'FT');
const rows = [];

for (const m of matches) {
  const ar = m.actualResult;
  const total = ar.home_score + ar.away_score;
  const ge = m.depth_calibration?.goal_efficiency;
  const preview = computePreviewPath(m);
  const replay = m.depth_calibration?.preview_replay;

  const atm = evalAtmosphere(m, total);
  const atmPct = evalAtmosphereModelPct(m, total);
  const pathHit = evalPathHit(m, preview, ge);
  const xgDir = evalXgTotalDirection(m, total);

  rows.push({
    id: m.id,
    label: `${m.home.name} vs ${m.away.name}`,
    score: `${ar.home_score}-${ar.away_score}`,
    total,
    atm,
    atmPct,
    previewPrimary: preview?.primaryCn,
    previewLean: preview?.lean_cn,
    previewMode: preview?.lean_mode,
    pathHit,
    actualPath: ge?.path_label,
    replayHits: replay?.hits || [],
    replayMisses: replay?.misses || [],
    xgDir,
    hasLine: m.market_snapshot?.totals_line != null && m.market_snapshot.totals_line !== 2.5 || m.market_snapshot?.over_pct != null,
  });
}

const stats = {
  n: rows.length,
  atmosphere: {
    strongLean: { hit: 0, n: 0, push: 0 },
    modelOver50: { hit: 0, n: 0, push: 0 },
    replayTagged: { hit: 0, n: 0 },
  },
  path: { hit: 0, n: 0 },
  xgTotal: { hit: 0, n: 0, near: 0 },
};

for (const r of rows) {
  if (r.atm.gradeable && r.atm.hit != null) {
    stats.atmosphere.strongLean.n += 1;
    if (r.atm.hit) stats.atmosphere.strongLean.hit += 1;
  } else if (r.atm.gradeable && r.atm.hit == null) {
    stats.atmosphere.strongLean.push += 1;
  }

  if (r.atmPct) {
    if (r.atmPct.hit == null) stats.atmosphere.modelOver50.push = (stats.atmosphere.modelOver50.push || 0) + 1;
    else {
      stats.atmosphere.modelOver50.n += 1;
      if (r.atmPct.hit) stats.atmosphere.modelOver50.hit += 1;
    }
  }

  const replayAtm = [...r.replayHits, ...r.replayMisses].filter(t => /进球氛围|沉闷|精彩|强判/.test(t));
  if (replayAtm.length) {
    stats.atmosphere.replayTagged.n += 1;
    if (r.replayHits.some(h => /进球氛围|沉闷|精彩|强判/.test(h))) stats.atmosphere.replayTagged.hit += 1;
  }

  if (r.pathHit != null) {
    stats.path.n += 1;
    if (r.pathHit) stats.path.hit += 1;
  }

  if (r.xgDir) {
    if (r.xgDir.hit == null) stats.xgTotal.near += 1;
    else {
      stats.xgTotal.n += 1;
      if (r.xgDir.hit) stats.xgTotal.hit += 1;
    }
  }
}

console.log(`\n📊 进球模块回测 · ${stats.n} 场已归档\n`);

console.log('=== 1. 进球氛围 ===');
const sl = stats.atmosphere.strongLean;
console.log(`  强倾向（show_lean=true）：${sl.hit}/${sl.n} = ${pct(sl.hit, sl.n)}%  （走水 ${sl.push} 场未计）`);
const mo = stats.atmosphere.modelOver50;
console.log(`  模型 over% vs 外界线：${mo.hit}/${mo.n} = ${pct(mo.hit, mo.n)}%  （走水 ${mo.push || 0} 场）`);
const rt = stats.atmosphere.replayTagged;
console.log(`  赛后 replay 氛围标签：${rt.hit}/${rt.n} = ${pct(rt.hit, rt.n)}%`);

console.log('\n  逐场（有强判或 replay 氛围）:');
for (const r of rows) {
  if (!r.atm.gradeable && !r.replayHits.length) continue;
  const ok = r.atm.hit === true ? '✓' : r.atm.hit === false ? '✗' : '—';
  console.log(`    ${ok} ${r.id} ${r.score} 总${r.total} | ${r.atm.note || r.atm.verdict} | replay:${(r.replayHits[0] || r.replayMisses[0] || '—').slice(0, 28)}`);
}

console.log('\n=== 2. 进球路径（赛前主路径 vs 赛后 path_type）===');
console.log(`  路径兑现：${stats.path.hit}/${stats.path.n} = ${pct(stats.path.hit, stats.path.n)}%`);

console.log('\n  逐场:');
for (const r of rows) {
  if (r.pathHit == null) continue;
  console.log(`    ${r.pathHit ? '✓' : '✗'} ${r.id} ${r.score} 赛前「${r.previewPrimary}」${r.previewLean ? '/' + r.previewLean : ''} → 实际「${r.actualPath || '—'}」`);
}

console.log('\n=== 3. 归纳：哪些有用 ===');
const useful = [];
const weak = [];
if (pct(sl.hit, sl.n) >= 55) useful.push(`进球氛围「强倾向」(${pct(sl.hit, sl.n)}%)`);
else if (sl.n >= 5) weak.push(`进球氛围「强倾向」仅 ${pct(sl.hit, sl.n)}%（${sl.n} 场）`);

if (pct(mo.hit, mo.n) >= 52) useful.push(`模型 over% 对界外(${pct(mo.hit, mo.n)}%)`);
else if (mo.n >= 5) weak.push(`模型 over% 对界外 ${pct(mo.hit, mo.n)}%（${mo.n} 场）`);

if (pct(stats.path.hit, stats.path.n) >= 45) useful.push(`进球路径主标签(${pct(stats.path.hit, stats.path.n)}%)`);
else weak.push(`进球路径主标签 ${pct(stats.path.hit, stats.path.n)}% — 尾部赛果常偏离；宜作结构提示`);

if (sl.n >= 3 && pct(sl.hit, sl.n) < 50) {
  weak.push(`进球氛围「强倾向」仅 ${pct(sl.hit, sl.n)}%（${sl.n} 场）— 多数场次已改为五五开`);
}
if (mo.n >= 5 && pct(mo.hit, mo.n) < 50) {
  weak.push(`模型 over% 对盘口线 ${pct(mo.hit, mo.n)}%（${mo.n} 场）`);
}

useful.forEach((t, i) => console.log(`  ✓ ${i + 1}. ${t}`));
weak.forEach((t, i) => console.log(`  △ ${i + 1}. ${t}`));

console.log('\n  建议：保留「进球氛围」作弱信号；「进球路径」作结构提示非比分预测；取消灵力（无回测口径）。\n');

fs.writeFileSync(
  path.join(__dirname, 'backtest-goal-modules.json'),
  JSON.stringify({ stats, rows }, null, 2),
);
console.log('✅ 明细 → scripts/backtest-goal-modules.json\n');
