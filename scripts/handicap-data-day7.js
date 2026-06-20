/**
 * 内部参考数据录入 — Day 7（m21–m24）
 *
 * totals_line：亚盘总进球分隔线（大/小分界），每场独立；超线=大比分，不足=小比分
 */
module.exports = {
  m23: {
    market_tier: 1.75,
    totals_line: 2.75,
    totals_over_index: 0.98,
    totals_under_index: 0.9,
    totals_public_over_pct: 62,
    public_lean: 'home',
    public_pct: 78,
    _source: 'manual_estimate_2026-06-18_por_cdr',
    analysis: '外界高度看好葡萄牙；模型认为净胜 2 球有难度，Wissa 反击需保留权重。',
  },
  m22: {
    market_tier: 0.5,
    totals_line: 2.5,
    totals_over_index: 0.94,
    totals_under_index: 0.96,
    totals_public_over_pct: 48,
    public_lean: 'home',
    public_pct: 58,
    signal_override: 'genuine_favorite',
    _source: 'manual_estimate_2026-06-18_eng_cro',
    analysis: '外界略看好英格兰；2018 半决赛重演，模型保留平局与克罗地亚后段空间。',
  },
  m21: {
    market_tier: 1.0,
    totals_line: 2.25,
    totals_over_index: 0.92,
    totals_under_index: 1.0,
    totals_public_over_pct: 44,
    public_lean: 'home',
    public_pct: 65,
    _source: 'manual_estimate_2026-06-18_gha_pan',
    analysis: '外界看好加纳；总 xG 偏少，模型倾向 2 球左右赛果，加纳慢热需防。',
  },
  m24: {
    market_tier: -1.25,
    totals_line: 2.5,
    totals_over_index: 0.96,
    totals_under_index: 0.94,
    totals_public_over_pct: 52,
    public_lean: 'away',
    public_pct: 72,
    signal_override: 'genuine_favorite',
    _source: 'manual_estimate_2026-06-18_uzb_col',
    analysis: '外界看好哥伦比亚；高原因素略抬主队防守权重，少球侧需保留。',
  },
};
