/**
 * 内部参考数据录入 — Day 9（m29–m32）
 * 默认来源：足球魔方 cubegoal.com 即时盘（2026-06-20 抓取）
 * 若用户手动提交 Titan007 数据，覆盖对应场次后重跑 apply-prediction-signals.js
 *
 * totals_line：亚盘总进球分隔线（大/小分界），每场独立；超线=大比分，不足=小比分
 */
module.exports = {
  m32: {
    market_tier: 1.0,
    spread_fav_odds: 1.02,
    spread_dog_odds: 0.82,
    totals_line: 2.5,
    totals_over_odds: 1.0,
    totals_under_odds: 0.8,
    totals_public_over_pct: 52,
    public_lean: 'home',
    public_pct: 62,
    _source: 'cubegoal_84702_2026-06-20',
    analysis: '魔方：美国 -1 / 大小 2.5；东道主首轮 4-1 后略被看好，模型 xG 1.68 支持小胜但穿 -1 需效率。',
  },
  m30: {
    market_tier: -0.5,
    spread_fav_odds: 0.7,
    spread_dog_odds: 1.1,
    totals_line: 2.25,
    totals_over_odds: 0.94,
    totals_under_odds: 0.81,
    totals_public_over_pct: 46,
    public_lean: 'away',
    public_pct: 55,
    _source: 'cubegoal_84703_2026-06-20',
    analysis: '魔方：摩洛哥 -0.5 / 大小 2.25 偏小；盘口浅于名气，模型 xG 接近均势，平局与 1 球差均需保留。',
  },
  m29: {
    market_tier: 2.5,
    spread_fav_odds: 0.85,
    spread_dog_odds: 1.0,
    totals_line: 3.5,
    totals_line_open: 3.75,
    totals_over_odds: 0.98,
    totals_under_odds: 0.89,
    totals_public_over_pct: 58,
    public_lean: 'home',
    public_pct: 72,
    signal_override: 'blocker_inflate',
    _source: 'user_totals_2026-06-20',
    analysis: '魔方：巴西 -2.5 / 大小 3.5（开盘 3.75 下调）大 0.98 小 0.89；深盘高于 xG 隐含，大胜需早段破门；海地 5-4-1 极守或拖慢节奏。',
  },
  m31: {
    market_tier: 0.5,
    spread_fav_odds: 1.0,
    spread_dog_odds: 0.85,
    totals_line: 2.5,
    totals_over_odds: 1.1,
    totals_under_odds: 0.73,
    totals_public_over_pct: 38,
    public_lean: 'home',
    public_pct: 52,
    _source: 'cubegoal_84701_2026-06-20',
    analysis: '魔方：土耳其 -0.5 / 大小 2.5 偏小；生死战双方谨慎，模型略看好主队但低比分权重上升。',
  },
};
