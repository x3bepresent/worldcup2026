/**
 * 内部参考数据录入 — Day 11（m37–m40 · m38/m39/m37/m40）
 * 来源：赛前 xG + 舆论倾向推断 · 开赛前可覆盖
 */
module.exports = {
  m38: {
    market_tier: 1.75,
    totals_line: 2.75,
    public_lean: 'home',
    public_pct: 82,
    signal_override: 'genuine_favorite',
    _source: 'xG_inferred_day11',
    analysis: '西班牙 0-0 后深盘；沙特 1-1 低位但 xG 差大，市场仍看主队穿档。',
  },
  m39: {
    market_tier: 0.75,
    totals_line: 2.5,
    public_lean: 'home',
    public_pct: 58,
    _source: 'xG_inferred_day11',
    analysis: '比利时 -0.5–1 vs 伊朗；G组均分，大小 2.5 偏均衡。',
  },
  m37: {
    market_tier: 1,
    totals_line: 2.25,
    public_lean: 'home',
    public_pct: 64,
    _source: 'xG_inferred_day11',
    analysis: '乌拉圭 -1 vs 佛得角；Vozinha 0-0 西班牙后市场仍信 Bielsa 破密。',
  },
  m40: {
    market_tier: 0,
    totals_line: 2.5,
    public_lean: 'balanced',
    public_pct: 48,
    _source: 'xG_inferred_day11',
    analysis: 'G组四队均1分；新西兰 vs 埃及 xG 接近，平局权重高。',
  },
};
