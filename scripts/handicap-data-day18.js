/** Day 18 handicap — m73 · 32强 M73 · A2 vs B2
 *  market_tier：正=主队让 · 负=客队让（须与 public_lean 一致）
 */
module.exports = {
  m73: {
    market_tier: 0.25,
    totals_line: 2.25,
    public_lean: 'away',
    public_pct: 54,
    spread_fav_odds: 0.92,
    spread_dog_odds: 0.98,
    totals_over_odds: 0.94,
    totals_under_odds: 0.92,
    spread_open: { home_handicap: '+0/0.5', home_odds: 1.02, away_handicap: '-0/0.5', away_odds: 0.88 },
    spread_now: { home_handicap: '+0/0.5', home_odds: 0.98, away_handicap: '-0/0.5', away_odds: 0.92 },
    totals_now: { line: 2.25, line_display: '2/2.5', over_odds: 0.94, under_odds: 0.92 },
    line_move: { tag: 'away_edge', cn: '向加拿大倾斜', detail: '初盘平手 → 现加拿大 -0/0.5 @0.92；南非 A 组次席防守型，加拿大 B 组次席进攻更猛但末轮曾闷平。' },
    wc_venue_note: '洛杉矶 neutral · 主客仅为 FIFA 标记',
    agent_pick: {
      primary: 'spread',
      tendency_cn: '更倾向让球盘',
      tendency_reason_cn: '淘汰赛首轮平局概率高，受让 +0/0.5 比 2/2.5 大小结构更清晰。',
      spread: { side: 'dog', label_cn: '南非 +0/0.5 @0.98', reason_cn: 'A 组次席 4 分出线 · 小组赛 2 失球偏稳；加拿大须破局但 -0/0.5 低水未必穿。模型平局约 32%。' },
      totals: { side: 'under', label_cn: '小球 2/2.5', reason_cn: '32 强首轮双方偏谨慎 · 模型总 xG 约 2.1 · 2/2.5 线下 ≤2 球即全赢。' },
      picked_at: '2026-06-29',
    },
    _source: 'user_lines_day18',
    analysis: '32强 M73 · 南非 vs 加拿大 · A2 vs B2 · 胜者 M90 碰 M75 胜者（荷兰/摩洛哥走廊）。',
  },
};
