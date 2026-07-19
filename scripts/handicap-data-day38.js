/** Day 38 handicap — m104 · 决赛西班牙 vs 阿根廷 · 皇冠临场 2026-07-19
 *  market_tier：正=主队让 · 负=客队让（须与 public_lean 一致）
 *  让球档持平 -0/0.5 · 大小 2→2/2.5 升线
 */
module.exports = {
  m104: {
    market_tier: 0.25,
    totals_line: 2.25,
    public_lean: 'home',
    public_pct: 52,
    spread_fav_odds: 0.93,
    spread_dog_odds: 0.96,
    spread_open: { home_handicap: '-0/0.5', home_odds: 0.85, away_handicap: '+0/0.5', away_odds: 0.97 },
    spread_now: { home_handicap: '-0/0.5', home_odds: 0.93, away_handicap: '+0/0.5', away_odds: 0.96 },
    totals_open: { line: 2, line_display: '2', over_odds: 0.78, under_odds: 1.02 },
    totals_now: { line: 2.25, line_display: '2/2.5', over_odds: 1.05, under_odds: 0.83 },
    line_move: {
      tag: 'fav_high_water_totals_under',
      cn: '临场：西班牙 -0/0.5 抬水(0.93) · 阿根廷受让近均水(0.96) · 大小升线偏小球',
      detail: '让球档 -0/0.5 不变：西班牙 0.85→0.93 抬水，阿根廷 0.97→0.96 微降，浅盘近均势。大小 2→2/2.5 升线，大 0.78→1.05 抬水、小 1.02→0.83 降水，升线后资金偏小球。',
    },
    agent_pick: {
      primary: 'spread',
      tendency_cn: '更倾向让球盘（阿根廷受让）',
      tendency_reason_cn: '西班牙 -0/0.5 抬到 0.93、阿根廷 +0/0.5 近均水 0.96；分盘结算：平局西输半/阿赢半 · ★阿+0/0.5 · 大2/2.5副项(R9不打小)。',
      confidence: 'medium',
      confidence_cn: '中信心',
      spread: {
        side: 'dog',
        label_cn: '阿根廷 +0/0.5 @0.96',
        reason_cn: '分盘 -0/0.5：平局西班牙输半、阿根廷赢半；西胜→西全赢/阿全输，阿胜→阿全赢/西全输。西抬水·阿近均水 · Messi 决赛经验 · ★主项。',
      },
      totals: {
        side: 'over',
        label_cn: '大球 2/2.5 @1.05',
        reason_cn: '升线后 over 1.05 高水但 R9 副项不打小 · Yamal/Messi 对攻终局开放 · 3球全赢/2球赢半 · 副项。',
      },
      picked_at: '2026-07-19-prematch',
    },
    _source: 'crown_day38_prematch',
    analysis: 'M104 · 西班牙 vs 阿根廷 · 西-0/0.5@0.93/阿+0/0.5@0.96 · 大小 2/2.5 大1.05小0.83。',
  },
};
