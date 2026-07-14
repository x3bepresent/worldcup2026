/** Day 34 handicap — m101 · 半决赛法国 vs 西班牙 · 皇冠初盘（临场待用户） */
module.exports = {
  m101: {
    market_tier: -0.25,
    totals_line: 2.5,
    public_lean: 'away',
    public_pct: 54,
    spread_fav_odds: 0.92,
    spread_dog_odds: 0.90,
    spread_open: { home_handicap: '+0/0.5', home_odds: 0.90, away_handicap: '-0/0.5', away_odds: 0.92 },
    spread_now: { home_handicap: '+0/0.5', home_odds: 0.90, away_handicap: '-0/0.5', away_odds: 0.92 },
    totals_open: { line: 2.5, line_display: '2.5', over_odds: 0.94, under_odds: 0.88 },
    totals_now: { line: 2.5, line_display: '2.5', over_odds: 0.94, under_odds: 0.88 },
    line_move: { tag: 'balanced_sf', cn: '日盘：西班牙 -0/0.5 浅盘 · 大小 2.5', detail: '欧洲杯恩怨重演 · Mbappé vs Yamal · 浅盘均势。' },
    agent_pick: {
      primary: 'spread',
      tendency_cn: '更倾向让球盘（法国受让）',
      tendency_reason_cn: '西班牙仅浅让 -0/0.5 · 法国半决赛经验+Mbappé 金靴状态 · ★法+0/0.5 · 小2.5副项。',
      confidence: 'medium',
      confidence_cn: '中信心',
      spread: { side: 'dog', label_cn: '法国 +0/0.5 @0.90', reason_cn: '浅盘说明市场接近均势；法国 2-0 摩洛哥气势足，半决赛经验占优 · 1-1/1-0 路径 · ★主项。' },
      totals: { side: 'under', label_cn: '小球 2.5 @0.88', reason_cn: '半决赛节奏偏谨慎 · 两边防线质量高 · 1-0/1-1 路径 · 副项。' },
      picked_at: '2026-07-15-open',
    },
    _source: 'crown_day34_open',
    analysis: 'M101 · 法国 vs 西班牙 · 西-0/0.5@0.92/法+0/0.5@0.90 · 大小 2.5 大0.94小0.88。',
  },
};
