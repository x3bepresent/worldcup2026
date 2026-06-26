/**
 * 比分概率 — 基于 xG 的 0-0 … 5-5 全表独立泊松推演
 */
const FACT = [1, 1, 2, 6, 24, 120];

function poissonP(k, lambda) {
  if (k < 0 || k > 5) return 0;
  if (lambda <= 0) return k === 0 ? 1 : 0;
  return (Math.exp(-lambda) * Math.pow(lambda, k)) / FACT[k];
}

function computeFullScoreMatrix(xgHome, xgAway, maxGoals = 5) {
  const xgH = Math.max(0, Number(xgHome) || 0);
  const xgA = Math.max(0, Number(xgAway) || 0);
  const cells = [];
  let gridMass = 0;
  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = poissonP(h, xgH) * poissonP(a, xgA);
      gridMass += p;
      cells.push({ home: h, away: a, score: `${h}-${a}`, prob: p });
    }
  }
  return { cells, gridMass, tailMass: Math.max(0, 1 - gridMass), maxGoals, xgHome: xgH, xgAway: xgA };
}

/** 6×6 全表展示数据（不含「其他」） */
function computeFullScoreGrid(xgHome, xgAway, maxGoals = 5) {
  const { cells, gridMass, tailMass, xgHome: xgH, xgAway: xgA } = computeFullScoreMatrix(xgHome, xgAway, maxGoals);
  const matrix = [];
  let maxProb = 0;
  for (let h = 0; h <= maxGoals; h++) {
    const row = [];
    for (let a = 0; a <= maxGoals; a++) {
      const cell = cells.find(c => c.home === h && c.away === a);
      const prob = cell.prob;
      if (prob > maxProb) maxProb = prob;
      row.push({ home: h, away: a, score: `${h}-${a}`, prob, probPct: prob * 100 });
    }
    matrix.push(row);
  }
  return { matrix, maxGoals, maxProb, gridMassPct: gridMass * 100, tailMassPct: tailMass * 100, xgHome: xgH, xgAway: xgA };
}

/** 按概率降序，默认取 Top 5 用于页面展示 */
function computeScoreDistribution(xgHome, xgAway, opts = {}) {
  const topN = opts.topN ?? 5;
  const { cells } = computeFullScoreMatrix(xgHome, xgAway, opts.maxGoals ?? 5);
  return cells
    .sort((a, b) => b.prob - a.prob)
    .slice(0, topN)
    .map(c => ({ score: c.score, prob: Math.round(c.prob * 1000) / 10 }));
}

/** Top N 最可能比分（含概率） */
function computeTopScores(xgHome, xgAway, topN = 3, maxGoals = 5) {
  return computeScoreDistribution(xgHome, xgAway, { topN, maxGoals });
}

/** xG 四舍五入 → 期望比分（展示用，非 mode） */
function computeExpectedScoreFromXg(xgHome, xgAway) {
  const h = Math.min(5, Math.max(0, Math.round(Number(xgHome) || 0)));
  const a = Math.min(5, Math.max(0, Math.round(Number(xgAway) || 0)));
  return `${h}-${a}`;
}

/**
 * 深盘 tier 校准 xG — tier>0 主队让球/热门，tier<0 客队让球/热门
 * 拉开强弱差距，使 2-0 / 3-1 等比分有机会进入 Top3
 */
function calibrateXgForTier(xgHome, xgAway, tierSigned) {
  const t = Number(tierSigned) || 0;
  if (Math.abs(t) < 0.5) {
    return { xgHome: Number(xgHome) || 0, xgAway: Number(xgAway) || 0, tierApplied: false };
  }
  const mag = Math.min(1.5, Math.abs(t));
  const boost = 0.12 + mag * 0.24;
  const cut = 0.06 + mag * 0.12;
  let h = Number(xgHome) || 0;
  let a = Number(xgAway) || 0;
  if (t > 0) {
    h += boost;
    a = Math.max(0.35, a - cut);
  } else {
    a += boost;
    h = Math.max(0.35, h - cut);
  }
  return {
    xgHome: Math.round(h * 100) / 100,
    xgAway: Math.round(a * 100) / 100,
    tierApplied: true,
  };
}

/** 写入 prediction：泊松比分 + Top3 + 期望比分（tierSigned：正=主热门，负=客热门） */
function applyPoissonToPrediction(prediction, xgHome, xgAway, tierSigned = 0) {
  if (!prediction) return prediction;
  const cal = calibrateXgForTier(xgHome, xgAway, tierSigned);
  const raw = computeOutcomeFromXg(cal.xgHome, cal.xgAway);
  const top3 = computeTopScores(cal.xgHome, cal.xgAway, 3);
  const expected = computeExpectedScoreFromXg(cal.xgHome, cal.xgAway);
  return {
    ...prediction,
    xg_poisson_home: cal.xgHome,
    xg_poisson_away: cal.xgAway,
    xg_tier_calibrated: cal.tierApplied,
    score: raw.score,
    score_prob: raw.score_prob,
    score_top3: top3,
    expected_score: expected,
    score_dist: computeScoreDistribution(cal.xgHome, cal.xgAway, { topN: 7 }),
  };
}

/** 由 xG 泊松全表汇总胜平负与最可能比分（0-0…5-5 网格内） */
function computeOutcomeFromXg(xgHome, xgAway, maxGoals = 5) {
  const { cells, gridMass, tailMass } = computeFullScoreMatrix(xgHome, xgAway, maxGoals);
  let homeWin = 0;
  let draw = 0;
  let awayWin = 0;
  let top = cells[0];
  for (const c of cells) {
    if (c.home > c.away) homeWin += c.prob;
    else if (c.home === c.away) draw += c.prob;
    else awayWin += c.prob;
    if (c.prob > top.prob) top = c;
  }
  const mass = gridMass || 1;
  return {
    home_win: Math.round((homeWin / mass) * 1000) / 10,
    draw: Math.round((draw / mass) * 1000) / 10,
    away_win: Math.round((awayWin / mass) * 1000) / 10,
    score: top.score,
    score_prob: Math.round(top.prob * 1000) / 10,
    grid_mass_pct: Math.round(gridMass * 1000) / 10,
    tail_mass_pct: Math.round(tailMass * 1000) / 10,
  };
}

if (typeof window !== 'undefined') {
  window.computeFullScoreGrid = computeFullScoreGrid;
  window.computeFullScoreMatrix = computeFullScoreMatrix;
  window.computeScoreDistribution = computeScoreDistribution;
  window.computeOutcomeFromXg = computeOutcomeFromXg;
  window.computeTopScores = computeTopScores;
  window.computeExpectedScoreFromXg = computeExpectedScoreFromXg;
  window.calibrateXgForTier = calibrateXgForTier;
  window.applyPoissonToPrediction = applyPoissonToPrediction;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    computeFullScoreGrid,
    computeFullScoreMatrix,
    computeScoreDistribution,
    computeOutcomeFromXg,
    computeTopScores,
    computeExpectedScoreFromXg,
    calibrateXgForTier,
    applyPoissonToPrediction,
  };
}
