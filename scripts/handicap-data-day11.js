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
    market_tier: 1.25,
    spread_fav_odds: 0.98,
    spread_dog_odds: 0.91,
    totals_line: 2.75,
    totals_line_open: 2.5,
    totals_over_odds: 1.07,
    totals_under_odds: 0.81,
    totals_public_over_pct: 38,
    public_lean: 'home',
    public_pct: 58,
    _source: 'user_live_2026-06-22',
    analysis: '即时：比利时 -1/1.5（-1.25）比 0.98 / 伊 0.91 / 大小 2.5/3（2.75）大 1.07 小 0.81；较初盘 -0.75 升档，大小升线后小球侧更热。',
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
