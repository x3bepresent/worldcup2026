/** Day 34 handicap — m101 · 半决赛法国 vs 西班牙 · 皇冠临场 2026-07-14
 *  market_tier：正=主队让 · 负=客队让（须与 public_lean 一致）
 *  临场翻盘：日盘西班牙浅让 → 现盘法国 -0/0.5
 */
module.exports = {
  m101: {
    market_tier: 0.25,
    totals_line: 2.5,
    public_lean: 'home',
    public_pct: 55,
    spread_fav_odds: 1.04,
    spread_dog_odds: 0.85,
    spread_open: { home_handicap: '-0/0.5', home_odds: 1.00, away_handicap: '+0/0.5', away_odds: 0.82 },
    spread_now: { home_handicap: '-0/0.5', home_odds: 1.04, away_handicap: '+0/0.5', away_odds: 0.85 },
    totals_open: { line: 2.5, line_display: '2.5', over_odds: 1.01, under_odds: 0.79 },
    totals_now: { line: 2.5, line_display: '2.5', over_odds: 0.95, under_odds: 0.93 },
    line_move: {
      tag: 'fav_high_water_totals_over',
      cn: '临场：法国 -0/0.5 抬水(1.04) · 西班牙受让低水(0.85) · 大小偏大球',
      detail: '让球翻成法国 -0/0.5：初盘法1.00/西0.82 → 现盘法1.04抬水、西0.85仍低水，资金观望热门侧、受让维持降水低水。大小 2.5 不动，大1.01→0.95 降水、小0.79→0.93 抬水，节奏预期偏大球。',
    },
    agent_pick: {
      primary: 'spread',
      tendency_cn: '更倾向让球盘（西班牙受让）',
      tendency_reason_cn: '法国升为让方 -0/0.5 但抬到 1.04 高水，西班牙 +0/0.5 维持 0.85 低水；分盘结算：平局法输半/西赢半，任一方取胜即该边全赢 · ★西+0/0.5 · 大2.5副项(R9不打小)。',
      confidence: 'medium',
      confidence_cn: '中信心',
      spread: {
        side: 'dog',
        label_cn: '西班牙 +0/0.5 @0.85',
        reason_cn: '分盘 -0/0.5：平局法国输半、西班牙赢半；法国胜→法全赢/西全输，西班牙胜→西全赢/法全输。法1.04高水·西0.85低水 · Yamal破局 · ★主项。',
      },
      totals: {
        side: 'over',
        label_cn: '大球 2.5 @0.95',
        reason_cn: 'over 1.01→0.95 降水资金偏大 · Mbappé/Yamal 对攻 · 关顶空调利于进攻 · R9副项不打小 · 副项。',
      },
      picked_at: '2026-07-15-prematch',
    },
    _source: 'crown_day34_prematch',
    analysis: 'M101 · 法国 vs 西班牙 · 法-0/0.5@1.04/西+0/0.5@0.85 · 大小 2.5 大0.95小0.93。',
  },
};
