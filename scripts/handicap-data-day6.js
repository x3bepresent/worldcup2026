/**
 * 内部参考数据录入 — Day 6（m17–m20）
 * ⚠ 手动录入后运行 node scripts/apply-prediction-signals.js
 * 页面仅展示模型概要；此处数据用于内部胜率微调，不在页面显示赔率/盘口字样。
 */
module.exports = {
  m17: {
    market_tier: 1.25,
    spread_fav_odds: 1.04,
    spread_dog_odds: 0.85,
    spread_alt_tier: 1.0,
    spread_alt_fav_odds: 0.75,
    spread_alt_dog_odds: 1.16,
    totals_line: 2.75,
    totals_over_odds: 1.0,
    totals_under_odds: 0.88,
    totals_public_over_pct: 58,
    public_lean: 'home',
    public_pct: 76,
    _source: 'user_spread_2026-06-17_fra_sen_v2',
    analysis:
      '外界普遍看好法国且预期净胜幅度上调；模型仍认为一球小胜与两球小胜并存，总进球集中在 2–3 个较合理。',
  },
  m18: {
    market_tier: -1.5,
    totals_line: 2.5,
    totals_over_index: 0.95,
    totals_under_index: 0.98,
    totals_public_over_pct: 44,
    public_lean: 'away',
    public_pct: 71,
    signal_override: 'genuine_favorite',
    _source: 'manual_estimate_2026-06-17_totals_review',
    analysis:
      '外界看好挪威且预期净胜约 1.5 球；总 xG 略偏少，模型倾向 2 球左右的赛果。',
  },
  m19: {
    market_tier: 2.0,
    totals_line: 3,
    totals_over_index: 0.96,
    totals_under_index: 0.94,
    totals_public_over_pct: 66,
    public_lean: 'home',
    public_pct: 84,
    signal_override: 'blocker_inflate',
    _source: 'manual_estimate_2026-06-17_totals_review',
    analysis:
      '外界高度看好阿根廷；模型认为净胜 2 球有难度，小比分取胜与平局均需保留权重。',
  },
  m20: {
    market_tier: 1.0,
    totals_line: 2.5,
    totals_over_index: 0.94,
    totals_under_index: 0.99,
    totals_public_over_pct: 41,
    public_lean: 'home',
    public_pct: 68,
    signal_override: 'heat_deflection',
    _source: 'manual_estimate_2026-06-17_totals_review',
    analysis:
      '外界看好奥地利主场；总进球预期不高，模型倾向 1–2 球的控制型比赛。',
  },
};
