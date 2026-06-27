/**
 * 全量已结束场次回测 — 胜平负 / 比分 / 大小球 / 净胜档
 * node scripts/backtest-predictions.js
 */
const fs = require('fs');
const path = require('path');
const lib = require('../js/prediction-signals-lib.js');
const scoreModel = require('../js/score-model.js');

const handicapFiles = fs.readdirSync(path.join(__dirname))
  .filter(f => f.startsWith('handicap-data-day') && f.endsWith('.js'));
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

function parseActual(m) {
  const ar = m.actualResult;
  if (ar?.home_score != null && ar?.away_score != null) {
    return { h: ar.home_score, a: ar.away_score, total: ar.home_score + ar.away_score, margin: ar.home_score - ar.away_score };
  }
  const sc = m.prediction?.score;
  if (m.note?.includes('已结束') && ar) {
    return null;
  }
  return null;
}

function outcomeKey(margin) {
  if (margin > 0) return 'home';
  if (margin < 0) return 'away';
  return 'draw';
}

function pickOutcome(pred) {
  const hw = pred.home_win ?? 0;
  const d = pred.draw ?? 0;
  const aw = pred.away_win ?? 0;
  if (hw >= d && hw >= aw) return 'home';
  if (aw >= hw && aw >= d) return 'away';
  return 'draw';
}

function totalsOverWeight(total, line) {
  if (Math.abs(total - line) < 0.001) return 0.5;
  return total > line ? 1 : 0;
}

function getTierCoverThresholds(tier) {
  return lib.getTierCoverThresholds(tier);
}

/** 实际赛果对着亚让档的结算：full / half / lose */
function actualSpreadResult(marginHome, tier) {
  if (tier === 0) return 'n/a';
  const favSide = tier > 0 ? 'home' : 'away';
  const favMargin = favSide === 'home' ? marginHome : -marginHome;
  const th = getTierCoverThresholds(tier);
  if (favMargin >= th.fullMin) return 'full_cover';
  if (th.halfExact != null && favMargin === th.halfExact) return 'half_cover';
  if (th.pushExact != null && favMargin === th.pushExact) return 'push';
  if (favMargin === 1) return 'half_lose';
  if (favMargin <= 0) return 'full_lose';
  if (favMargin >= 2 && favMargin < th.fullMin) return 'half_cover';
  return 'partial';
}

function poissonTopScores(xgH, xgA, n = 6) {
  const grid = scoreModel.computeFullScoreGrid(xgH, xgA, 5);
  return (grid.rows || grid.cells || []).slice(0, n).map(c => ({
    score: c.score || `${c.home}-${c.away}`,
    pct: c.pct ?? Math.round(c.prob * 1000) / 10,
  }));
}

function pct(n, d) {
  return d ? Math.round((n / d) * 1000) / 10 : 0;
}

const data = loadResults();
const matches = data.finishedMatches || [];
const rows = [];

for (const m of matches) {
  const actual = parseActual(m);
  if (!actual) continue;
  const pred = m.prediction || {};
  const xgH = pred.xg_home ?? 0;
  const xgA = pred.xg_away ?? 0;
  const xgSum = Math.round((xgH + xgA) * 100) / 100;
  const raw = rawById[m.id];

  const pick = pickOutcome(pred);
  const actualOut = outcomeKey(actual.margin);
  const directionHit = pick === actualOut;

  const predScore = pred.score ? String(pred.score).replace(/\s/g, '') : null;
  const actualScore = `${actual.h}-${actual.a}`;
  const exactScoreHit = predScore === actualScore;

  let topScores = [];
  try {
    const dist = scoreModel.computeScoreDistribution(xgH, xgA, { topN: 6 });
    topScores = dist.map(c => c.score);
  } catch (_) {
    topScores = pred.score_dist?.map(s => s.score) || [];
  }
  const inTop1 = topScores[0] === actualScore;
  const inTop3 = topScores.slice(0, 3).includes(actualScore);
  const inTop5 = topScores.slice(0, 5).includes(actualScore);
  const inTop6 = topScores.slice(0, 6).includes(actualScore);

  const defaultLine = 2.5;
  const marketLine = raw?.totals_line ?? defaultLine;
  const totals = raw ? lib.computeTotalsAnalysis(xgH, xgA, raw) : lib.computeTotalsAnalysis(xgH, xgA, { totals_line: defaultLine });
  const actualOverMarket = actual.total > marketLine;
  const actualOverFair = actual.total > totals.fair_line;
  const modelFavoredOver = totals.over_pct >= 50;
  const modelOverHit = modelFavoredOver === actualOverMarket;

  const goalError = Math.round((actual.total - xgSum) * 100) / 100;
  const modelUnderActualGoals = xgSum < actual.total;

  let spread = null;
  if (raw?.market_tier != null) {
    const tier = raw.market_tier;
    const implied = lib.impliedTierFromXg(xgH, xgA);
    const cover = lib.computeSpreadCover(xgH, xgA, tier);
    const actualSpread = actualSpreadResult(actual.margin, tier);
    const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : null;
    const favWon = favSide === 'home' ? actual.margin > 0 : favSide === 'away' ? actual.margin < 0 : null;
    spread = {
      tier,
      implied,
      tierGap: Math.round((tier - implied) * 100) / 100,
      lineGap: totals.line_gap,
      modelOverPct: totals.over_pct,
      fullCoverPct: cover.full_cover_pct,
      fullCoverPctRaw: cover.full_cover_pct_raw,
      favWinPct: cover.fav_win_pct,
      coverGivenWinPct: cover.cover_given_win_pct,
      gridMaxGoals: cover.grid_max_goals,
      gridTailPct: cover.grid_tail_pct,
      actualSpread,
      favWon,
      fullCoverHit: actualSpread === 'full_cover',
    };
  }

  rows.push({
    id: m.id,
    label: `${m.home.name} vs ${m.away.name}`,
    actualScore,
    actualTotal: actual.total,
    actualMargin: actual.margin,
    pick,
    actualOut,
    directionHit,
    exactScoreHit,
    inTop1,
    inTop3,
    inTop5,
    inTop6,
    predScore,
    xgSum,
    xgH,
    xgA,
    goalError,
    modelUnderActualGoals,
    marketLine,
    fairLine: totals.fair_line,
    lineGap: totals.line_gap,
    modelOverPct: totals.over_pct,
    actualOverMarket,
    modelOverHit,
    actualOverFair,
    spread,
    confidence: pred.confidence,
    basePick: pred.base_home_win != null ? pickOutcome({ home_win: pred.base_home_win, draw: pred.base_draw, away_win: pred.base_away_win }) : null,
  });
}

console.log(`\n📊 回测样本：${rows.length} 场已结束（共 ${matches.length} 场记录在 results-data）\n`);

// ── 汇总 ──
const stats = {
  direction: { hit: rows.filter(r => r.directionHit).length, n: rows.length },
  exactScore: { hit: rows.filter(r => r.exactScoreHit).length, n: rows.length },
  top1: { hit: rows.filter(r => r.inTop1).length, n: rows.length },
  top3: { hit: rows.filter(r => r.inTop3).length, n: rows.length },
  top5: { hit: rows.filter(r => r.inTop5).length, n: rows.length },
  top6: { hit: rows.filter(r => r.inTop6).length, n: rows.length },
};

const withHandicap = rows.filter(r => r.spread);
const totalsN = withHandicap.length;

console.log('=== 1. 胜平负方向 ===');
console.log(`  最高概率项命中: ${stats.direction.hit}/${stats.direction.n} = ${pct(stats.direction.hit, stats.direction.n)}%`);

const byOut = { home: [], draw: [], away: [] };
for (const r of rows) byOut[r.actualOut].push(r);
console.log(`  实际赛果分布: 主胜 ${byOut.home.length} · 平 ${byOut.draw.length} · 客胜 ${byOut.away.length}`);

const wrongDir = rows.filter(r => !r.directionHit);
console.log(`  方向失误 ${wrongDir.length} 场:`);
wrongDir.forEach(r => console.log(`    ${r.id} ${r.label} 预测${r.pick} 实际${r.actualOut} ${r.actualScore} (主${r.predScore})`));

console.log('\n=== 2. 比分精度 ===');
console.log(`  首推比分完全命中: ${stats.exactScore.hit}/${stats.exactScore.n} = ${pct(stats.exactScore.hit, stats.exactScore.n)}%`);
console.log(`  泊松 Top1 含实际: ${stats.top1.hit}/${stats.top1.n} = ${pct(stats.top1.hit, stats.top1.n)}%`);
console.log(`  泊松 Top3 含实际: ${stats.top3.hit}/${stats.top3.n} = ${pct(stats.top3.hit, stats.top3.n)}%`);
console.log(`  泊松 Top5 含实际: ${stats.top5.hit}/${stats.top5.n} = ${pct(stats.top5.hit, stats.top5.n)}%`);
console.log(`  泊松 Top6 含实际: ${stats.top6.hit}/${stats.top6.n} = ${pct(stats.top6.hit, stats.top6.n)}%`);

console.log('\n=== 3. 总进球 / xG ===');
const xgUnder = rows.filter(r => r.modelUnderActualGoals).length;
const xgOver = rows.filter(r => !r.modelUnderActualGoals && r.goalError < 0).length;
const xgExact = rows.filter(r => Math.abs(r.goalError) < 0.01).length;
console.log(`  xG合计低于实际进球: ${xgUnder}/${rows.length} = ${pct(xgUnder, rows.length)}%`);
console.log(`  xG合计高于实际进球: ${xgOver}/${rows.length} = ${pct(xgOver, rows.length)}%`);
const avgGoalErr = rows.reduce((s, r) => s + r.goalError, 0) / rows.length;
console.log(`  平均进球误差(实际−xG合计): ${avgGoalErr.toFixed(2)} 球/场`);

const bigScores = rows.filter(r => r.actualTotal >= 5).sort((a, b) => b.actualTotal - a.actualTotal);
console.log(`\n  大比分场次(总进球≥5): ${bigScores.length} 场`);
bigScores.forEach(r => {
  console.log(`    ${r.id} ${r.label} 实际${r.actualScore} xG合计${r.xgSum} 误差+${r.goalError} 首推${r.predScore}`);
});

console.log('\n=== 4. 大小球 ===');
// 4a 全样本默认 2.5 线
const all25 = rows.map(r => {
  const t = lib.computeTotalsAnalysis(r.xgH, r.xgA, { totals_line: 2.5 });
  const actualOver = r.actualTotal > 2.5;
  const modelOver = t.over_pct >= 50;
  return { ...r, over25: t.over_pct, hit25: modelOver === actualOver, actualOver };
});
const hit25 = all25.filter(r => r.hit25).length;
console.log(`  [全${rows.length}场] 默认2.5线 模型倾向命中: ${hit25}/${rows.length} = ${pct(hit25, rows.length)}%`);
console.log(`  [全${rows.length}场] 实际大球(>2.5): ${all25.filter(r => r.actualOver).length}/${rows.length}`);

console.log(`\n  [有外界参考 ${totalsN} 场]`);
if (totalsN) {
  const overHit = withHandicap.filter(r => r.modelOverHit).length;
  console.log(`  模型大/小倾向 vs 实际(对着外界线): ${overHit}/${totalsN} = ${pct(overHit, totalsN)}%`);

  const marketOver = withHandicap.filter(r => r.actualOverMarket).length;
  console.log(`  实际大球(>外界线): ${marketOver}/${totalsN} = ${pct(marketOver, totalsN)}%`);

  const modelSaidUnderMarket = withHandicap.filter(r => r.modelOverPct < 50);
  const modelUnderCorrect = modelSaidUnderMarket.filter(r => !r.actualOverMarket).length;
  console.log(`  模型看少(over<50%)时实际也偏少: ${modelUnderCorrect}/${modelSaidUnderMarket.length} = ${pct(modelUnderCorrect, modelSaidUnderMarket.length)}%`);

  const modelSaidOver = withHandicap.filter(r => r.modelOverPct >= 50);
  const modelOverCorrect = modelSaidOver.filter(r => r.actualOverMarket).length;
  console.log(`  模型看多(over≥50%)时实际偏多: ${modelOverCorrect}/${modelSaidOver.length} = ${pct(modelOverCorrect, modelSaidOver.length)}%`);

  const bigGap = withHandicap.filter(r => r.lineGap >= 0.75);
  const bigGapUnder = bigGap.filter(r => !r.actualOverMarket).length;
  console.log(`  外界明显高于模型(gap≥0.75)时实际未大球: ${bigGapUnder}/${bigGap.length}`);

  console.log('\n  逐场大小球:');
  withHandicap.forEach(r => {
    const side = r.actualOverMarket ? '大' : '小/走';
    const model = r.modelOverPct >= 50 ? '偏多' : '偏少';
    const ok = r.modelOverHit ? '✓' : '✗';
    console.log(`    ${ok} ${r.id} ${r.actualScore} 总${r.actualTotal} 外界${r.marketLine} 模型over${r.modelOverPct}%→${model} 实际${side} gap${r.lineGap}`);
  });
}

console.log('\n=== 5. 亚让净胜（有外界参考的 ' + totalsN + ' 场）===');
if (totalsN) {
  const favWin = withHandicap.filter(r => r.spread.favWon).length;
  console.log(`  热门实际取胜: ${favWin}/${totalsN} = ${pct(favWin, totalsN)}%`);

  const fullCover = withHandicap.filter(r => r.spread.fullCoverHit).length;
  console.log(`  热门全达标(对着录入档): ${fullCover}/${totalsN} = ${pct(fullCover, totalsN)}%`);

  const inflate = withHandicap.filter(r => r.spread.tierGap >= 0.5);
  const inflateNoCover = inflate.filter(r => !r.spread.fullCoverHit).length;
  console.log(`  外界净胜偏高(tierGap≥0.5)且未全达标: ${inflateNoCover}/${inflate.length}`);

  console.log('\n  净胜档逐场:');
  withHandicap.forEach(r => {
    const s = r.spread;
    console.log(`    ${r.id} ${r.actualScore} 外界档${s.tier} 模型隐含${s.implied} 全达标预测${s.fullCoverPct}% 实际${s.actualSpread} 热门${s.favWon ? '赢' : '未赢'}`);
  });
}

console.log('\n=== 6. 系统性偏差 ===');
const avgLineGap = withHandicap.reduce((s, r) => s + r.lineGap, 0) / (withHandicap.length || 1);
console.log(`  平均外界总进球线 − 模型公允线: +${avgLineGap.toFixed(2)} 球`);
const modelUnderMarketActual = withHandicap.filter(r => r.lineGap > 0 && r.actualOverMarket).length;
console.log(`  外界高于模型时实际仍大球: ${modelUnderMarketActual}/${withHandicap.filter(r => r.lineGap > 0).length}`);

console.log('\n=== 7. 尾部异常（|实际总球−xG|≥2）===');
const tails = rows.filter(r => Math.abs(r.goalError) >= 2).sort((a, b) => Math.abs(b.goalError) - Math.abs(a.goalError));
tails.forEach(r => {
  console.log(`  ${r.id} ${r.label} 实际${r.actualScore} xG${r.xgSum} Δ${r.goalError > 0 ? '+' : ''}${r.goalError} 方向${r.directionHit ? '✓' : '✗'}`);
});
console.log(`  共 ${tails.length}/${rows.length} 场 = ${pct(tails.length, rows.length)}% — ${tails.length <= 2 ? '属小概率尾部，非系统性' : '尾部偏多，需关注'}`);

console.log('\n=== 8. 回测 v2（平局修正 + 深度校准后）===');
let v1Hit = 0;
let v2BaseHit = 0;
let v2CalHit = 0;
let v2DrawPick = 0;
const v2Fixed = [];
for (const r of rows) {
  const m = matches.find(x => x.id === r.id);
  if (m?.prediction?.xg_home == null) continue;
  const p = m.prediction;
  const margin = r.actualMargin;
  const actualOut = outcomeKey(margin);
  if (r.directionHit) v1Hit += 1;

  const raw = scoreModel.computeOutcomeFromXg(p.xg_home, p.xg_away);
  const adj = lib.applyDrawContextAdjust(
    { home_win: raw.home_win, draw: raw.draw, away_win: raw.away_win },
    m,
    p.xg_home,
    p.xg_away,
  );
  const v2Pick = pickOutcome(adj);
  if (v2Pick === actualOut) v2BaseHit += 1;
  if (v2Pick === 'draw') v2DrawPick += 1;
  if (v2Pick === actualOut && !r.directionHit) {
    v2Fixed.push(`${r.id} ${r.label} v1→${r.pick} v2→${v2Pick} 实际${actualOut} ${r.actualScore}`);
  }

  if (rawById[m.id]) {
    const slim = { ...m, prediction: { ...p, ...adj, base_home_win: adj.home_win, base_draw: adj.draw, base_away_win: adj.away_win } };
    const dc = lib.buildDepthCalibration(slim, rawById[m.id]);
    const cal = lib.applyDepthToPrediction({ ...slim.prediction }, dc);
    const v2CalPick = pickOutcome(cal);
    if (v2CalPick === actualOut) v2CalHit += 1;
  }
}
const n = rows.length;
console.log(`  v1 方向（归档预测）: ${v1Hit}/${n} = ${pct(v1Hit, n)}%`);
console.log(`  v2 base（泊松+平局修正）: ${v2BaseHit}/${n} = ${pct(v2BaseHit, n)}%`);
console.log(`  v2 首推平局场次: ${v2DrawPick}/${n}`);
console.log(`  v2+深度校准（有盘 ${rows.filter(r => rawById[r.id]).length} 场）: ${v2CalHit}/${rows.filter(r => rawById[r.id]).length} = ${pct(v2CalHit, rows.filter(r => rawById[r.id]).length)}%`);
if (v2Fixed.length) {
  console.log('  v2 修正 v1 失手:');
  v2Fixed.forEach(t => console.log('    ' + t));
}

console.log('\n=== 9. 平局低估（方向失误主因）===');
const drawMiss = wrongDir.filter(r => r.actualOut === 'draw');
console.log(`  10 场方向失误中 ${drawMiss.length} 场实际是平局`);
console.log(`  28 场中预测平局最高: ${rows.filter(r => r.pick === 'draw').length} 场，实际平局: ${byOut.draw.length} 场`);
const avgDrawProb = rows.reduce((s, r) => {
  const m = matches.find(x => x.id === r.id);
  return s + (m?.prediction?.draw ?? 0);
}, 0) / rows.length;
console.log(`  平均预测平局概率: ${avgDrawProb.toFixed(1)}%`);
console.log(`  实际平局占比: ${pct(byOut.draw.length, rows.length)}%`);

console.log('\n=== 10. 瑕疵归纳（自动）===');
const issues = [];
if (pct(stats.exactScore.hit, stats.exactScore.n) < 15) issues.push('首推比分命中率偏低（泊松模型常态，非致命）');
if (pct(xgUnder, rows.length) > 55) issues.push('xG合计系统性偏低，大比分尾部捕捉不足');
if (totalsN && pct(withHandicap.filter(r => r.modelOverPct < 50 && !r.actualOverMarket).length, withHandicap.filter(r => r.modelOverPct < 50).length) > 60) {
  issues.push('「模型看少」方向较可靠');
}
if (totalsN && pct(withHandicap.filter(r => r.modelOverPct >= 50 && r.actualOverMarket).length, withHandicap.filter(r => r.modelOverPct >= 50).length) < 45) {
  issues.push('「模型看多」时准确率偏低');
}
if (pct(stats.direction.hit, stats.direction.n) < 50) issues.push('胜平负方向弱于随机');
else if (pct(stats.direction.hit, stats.direction.n) >= 55) issues.push('胜平负方向尚可');
issues.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));

console.log('\n=== 11. 让球穿盘校准（raw vs 校准）===');
const spreadRows = withHandicap.filter(r => Math.abs(r.spread.tier) >= 0.01);
if (spreadRows.length) {
  let brierRaw = 0;
  let brierCal = 0;
  let hitRaw50 = { hit: 0, n: 0 };
  let hitCal50 = { hit: 0, n: 0 };
  spreadRows.forEach(r => {
    const y = r.spread.fullCoverHit ? 1 : 0;
    const raw = (r.spread.fullCoverPctRaw ?? r.spread.fullCoverPct) / 100;
    const cal = r.spread.fullCoverPct / 100;
    brierRaw += (raw - y) ** 2;
    brierCal += (cal - y) ** 2;
    if (r.spread.fullCoverPctRaw >= 50) {
      hitRaw50.n += 1;
      if (y) hitRaw50.hit += 1;
    }
    if (r.spread.fullCoverPct >= 50) {
      hitCal50.n += 1;
      if (y) hitCal50.hit += 1;
    }
  });
  const nSp = spreadRows.length;
  const fullHit = spreadRows.filter(r => r.spread.fullCoverHit).length;
  console.log(`  样本 ${nSp} 场 · 实际热门穿盘 ${pct(fullHit, nSp)}%`);
  console.log(`  Brier(raw): ${(brierRaw / nSp).toFixed(3)} · Brier(校准): ${(brierCal / nSp).toFixed(3)}`);
  console.log(`  预测≥50% raw 命中: ${hitRaw50.hit}/${hitRaw50.n} · 校准后: ${hitCal50.hit}/${hitCal50.n}`);
  const avgGrid = spreadRows.reduce((s, r) => s + (r.spread.gridMaxGoals || 0), 0) / nSp;
  const avgTail = spreadRows.reduce((s, r) => s + (r.spread.gridTailPct || 0), 0) / nSp;
  console.log(`  动态网格均上限 ${avgGrid.toFixed(1)} 球 · 平均截断质量 ${avgTail.toFixed(2)}%`);
}

// output json for reference
fs.writeFileSync(
  path.join(__dirname, '..', 'scripts', 'backtest-last-run.json'),
  JSON.stringify({ n: rows.length, stats, rows }, null, 2)
);
console.log('\n✅ 明细已写入 scripts/backtest-last-run.json\n');
