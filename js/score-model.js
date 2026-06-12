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

if (typeof window !== 'undefined') {
  window.computeFullScoreGrid = computeFullScoreGrid;
  window.computeFullScoreMatrix = computeFullScoreMatrix;
  window.computeScoreDistribution = computeScoreDistribution;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { computeFullScoreGrid, computeFullScoreMatrix, computeScoreDistribution };
}
