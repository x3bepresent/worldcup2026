/** Day 21 handicap — m80–m82 · 32强 · 皇冠 CROWN
 *  spread_open / totals_open = 初盘 · spread_now / totals_now = 现盘
 *  agent_pick：每场 spread + totals 双选项，primary 标★倾向
 */
module.exports = {
  "m80": {
    "market_tier": 1.5,
    "totals_line": 2.5,
    "public_lean": "home",
    "public_pct": 68,
    "spread_fav_odds": 0.96,
    "spread_dog_odds": 0.93,
    "totals_over_odds": 1.03,
    "totals_under_odds": 0.85,
    "spread_open": {
      "home_handicap": "-1.5",
      "home_odds": 0.88,
      "away_handicap": "+1.5",
      "away_odds": 0.94
    },
    "spread_mid": {
      "home_handicap": "-1.5",
      "home_odds": 0.88,
      "away_handicap": "+1.5",
      "away_odds": 0.94
    },
    "spread_now": {
      "home_handicap": "-1.5",
      "home_odds": 0.96,
      "away_handicap": "+1.5",
      "away_odds": 0.93
    },
    "totals_open": {
      "line": 2.5,
      "line_display": "2.5",
      "over_odds": 0.85,
      "under_odds": 0.95
    },
    "totals_mid": {
      "line": 2.5,
      "line_display": "2.5",
      "over_odds": 0.85,
      "under_odds": 0.95
    },
    "totals_now": {
      "line": 2.5,
      "line_display": "2.5",
      "over_odds": 1.03,
      "under_odds": 0.85
    },
    "line_move": {
      "tag": "totals_rise_under_chase",
      "cn": "临场：大小回2.5小低水 · 英-1.5稳",
      "detail": "让球 英 -1.5 0.96/刚果0.93 不动。大小 2/2.5→2.5 · 大1.03小0.85（升整球线、小降水=收小）。"
    },
    "wc_venue_note": "亚特兰大 neutral · 主客仅为 FIFA 标记",
    "agent_pick": {
      "primary": "totals",
      "tendency_cn": "更倾向大小球（小）",
      "tendency_reason_cn": "临场2/2.5→2.5小0.85低水+英FIFA轮换大 · 撤销日盘★大 · ★小2.5 · 刚果+1.5副项。",
      "confidence": "medium",
      "confidence_cn": "中信心",
      "confidence_reason_cn": "★小2.5：线回整球+小0.85=共识收小(非诱小极端但推翻日盘大) · 英无Walker/Stones/Saka削弱穿盘；让球：53.3%挺刚果。",
      "spread": {
        "side": "dog",
        "label_cn": "刚果（金） +1.5 @0.93",
        "reason_cn": "blocker_inflate·英-1.5穿46.7%·1-0全赢/2-0全输 · 英0.96升水+轮换 · 模型53.3% · 副项。"
      },
      "totals": {
        "side": "under",
        "label_cn": "小球 2.5 @0.85",
        "reason_cn": "初2.5→2/2.5大0.84→临2.5小0.85(线+水双收小) · 公平线~2 · 2-0仍小全赢 · 3球+小全输 · ★主项。"
      },
      "pick_meta": {
        "model_side": "over",
        "market_side": "under",
        "pick_side": "under",
        "recommended_side": "under",
        "conflict": true
      },
      "picked_at": "2026-07-02-agent-final"
    },
    "_source": "crown_day21_agent_final",
    "analysis": "M80 · 75' 2-1 · （未报） · 3.5 大1.69 小0.46",
    "live_timeline": [
      {
        "min": 0,
        "score": "0-0",
        "spread": "英-1.5@0.96/刚果0.93",
        "totals": "2.5 大1.03小0.85",
        "trap_note": "大小回2.5小0.85低水"
      },
      {
        "min": 7,
        "score": "0-1",
        "spread": "英 -1.5/2@0.94 / 刚果 +1.5/2@0.94",
        "totals": "3.5 大1.06 小0.80",
        "trap_note": "刚果7'闪击 · 英升-1.5/2仍0.94 · 大小飞3.5小0.80"
      },
      {
        "min": null,
        "score": "0-1",
        "spread": "英 -1.5/2@0.99 / 刚果 +1.5/2@0.89",
        "totals": "3/3.5 大0.96 小0.91",
        "trap_note": "0-1维持 · 英0.99升水/刚果0.89收水 · 大小3/3.5趋均衡 · 2-0英胜路径已死"
      },
      {
        "min": null,
        "score": "0-1",
        "spread": "英 -1.5@1.00 / 刚果 +1.5@0.88",
        "totals": "3 大0.86 小1.01",
        "trap_note": "回整-1.5 · 英1.00高水=穿盘意愿弱 · 刚果0.88低水 · 3球大0.86低水追大"
      },
      {
        "min": 41,
        "score": "0-1",
        "spread": "英 -1/1.5@0.95 / 刚果 +1/1.5@0.93",
        "totals": "2.5/3 大0.81 小1.06",
        "trap_note": "41'0-1 · 让球均衡 · 2.5/3大0.81低水=下半至少再进一球预期"
      },
      {
        "min": 45,
        "score": "0-1",
        "spread": "英 -1/1.5@0.94 / 刚果 +1/1.5@0.94",
        "totals": "2.5/3 大0.79 小1.08",
        "trap_note": "HT 0-1 · 让球双0.94均衡 · 2.5/3大0.79=下半必进球定价"
      },
      {
        "min": 62,
        "score": "0-1",
        "spread": "英 -0.5/1@0.87 / 刚果 +0.5/1@1.01",
        "totals": "2/2.5 大1.14 小0.74",
        "trap_note": "62'0-1 · 退-0.5/1英0.87 · 2/2.5小0.74极低水=认闷局收工"
      },
      {
        "min": 75,
        "score": "1-1",
        "spread": "英 -0.5@1.19 / 刚果 +0.5@0.72",
        "totals": "2.5 大0.85 小1.02",
        "trap_note": "75'1-1 · 英-0.5@1.19高水难赢 · 刚果+0.5@0.72 · 2.5略偏大"
      },
      {
        "min": 87,
        "score": "2-1",
        "spread": "（未报）",
        "totals": "3.5 大1.69 小0.46",
        "trap_note": "87'2-1 · 82'大1.04仍偏低水→晚场破门 · 3.5小0.46=3球收工"
      }
    ],
    "live": {
      "period": "2H",
      "minute": 87,
      "score": "2-1",
      "captured_at": "2026-07-01T17:51:14+08:00",
      "spread_live": {
        "home_handicap": "-0.5",
        "home_odds": 1.19,
        "away_handicap": "+0.5",
        "away_odds": 0.72,
        "line_display": "英 -0.5"
      },
      "totals_live": {
        "line": 2.5,
        "line_display": "2.5",
        "over_odds": 0.85,
        "under_odds": 1.02
      },
      "line_move_live_cn": "75' 2-1 · （未报） · 3.5 大1.69 小0.46",
      "read_cn": "87'2-1 · 小2.5已死 · 刚果+1.5/2全赢(英只净胜1) · 3.5小锁3球"
    }
  },
  "m81": {
    "market_tier": 1.5,
    "totals_line": 2.75,
    "public_lean": "home",
    "public_pct": 55,
    "spread_fav_odds": 1.03,
    "spread_dog_odds": 0.86,
    "totals_over_odds": 0.82,
    "totals_under_odds": 1.06,
    "spread_open": {
      "home_handicap": "-1",
      "home_odds": 0.92,
      "away_handicap": "+1",
      "away_odds": 0.9
    },
    "spread_mid": {
      "home_handicap": "-1",
      "home_odds": 0.92,
      "away_handicap": "+1",
      "away_odds": 0.9
    },
    "spread_now": {
      "home_handicap": "-1.5",
      "home_odds": 1.03,
      "away_handicap": "+1.5",
      "away_odds": 0.86
    },
    "totals_open": {
      "line": 2.5,
      "line_display": "2.5",
      "over_odds": 0.92,
      "under_odds": 0.88
    },
    "totals_mid": {
      "line": 2.5,
      "line_display": "2.5",
      "over_odds": 0.92,
      "under_odds": 0.88
    },
    "totals_now": {
      "line": 2.75,
      "line_display": "2.5/3",
      "over_odds": 0.82,
      "under_odds": 1.06
    },
    "line_move": {
      "tag": "fav_line_up_water_up",
      "cn": "临场：美升-1.5@1.03高水 · 波+1.5@0.86低水",
      "detail": "让球 -1/1.5→-1.5 · 美 0.82→1.03（升档+高水=穿盘意愿弱）· 波 1.07→0.86（受让收水）。大小 2.5/3 大0.85→0.82、小1.03→1.06（大略再降）。"
    },
    "wc_venue_note": "旧金山湾区 neutral · 主客仅为 FIFA 标记",
    "agent_pick": {
      "primary": "spread",
      "tendency_cn": "更倾向让球盘",
      "tendency_reason_cn": "美升-1.5@1.03高水=诱热穿盘弱 · 波+1.5@0.86低水 · ★波+1.5不变 · 大2.5/3@0.82副项。",
      "confidence": "high",
      "confidence_cn": "大信心",
      "confidence_reason_cn": "★波+1.5：模型穿盘仍低+美1.03高水确认 · 1-0/1-1/2-1全赢/2-0·3-0全输；副项大0.82再低水。",
      "spread": {
        "side": "dog",
        "label_cn": "波黑 +1.5 @0.86",
        "reason_cn": "美-1/1.5→-1.5@1.03高水 · 穿盘37%档 · 1-0·1-1·2-1全赢/2-0·3-0全输 · ★主项。"
      },
      "totals": {
        "side": "over",
        "label_cn": "大球 2.5/3 @0.82",
        "reason_cn": "大0.82再降水 · 小1.06升水 · 3球大赢半/4+全赢 · 副项。"
      },
      "pick_meta": {
        "model_side": "under",
        "market_side": "over",
        "pick_side": "over",
        "recommended_side": "under",
        "conflict": true
      },
      "picked_at": "2026-07-02-kickoff"
    },
    "_source": "crown_day21_kickoff",
    "analysis": "M81 · 美国 vs 波黑 · 现 -1.5 美 1.03 / 波 0.86 · 大小 2.5/3 大 0.82 小 1.06 · Agent终选：★波+1.5+大2.5/3。",
    "live_timeline": [
      {
        "min": 0,
        "score": "0-0",
        "spread": "美-1/1.5@0.90/波0.99",
        "totals": "2.5/3 大0.91小0.97",
        "trap_note": "美升档低水；大小升线"
      },
      {
        "min": 0,
        "score": "0-0",
        "spread": "美-1/1.5@0.82/波1.07",
        "totals": "2.5/3 大0.85小1.03",
        "trap_note": "美再降水；大略低"
      },
      {
        "min": 0,
        "score": "0-0",
        "spread": "美-1.5@1.03/波0.86",
        "totals": "2.5/3 大0.82小1.06",
        "trap_note": "临场升-1.5美高水 · 波+1.5低水"
      }
    ],
    "live": {
      "period": "PRE",
      "minute": 0,
      "score": "0-0",
      "captured_at": "2026-07-02-kickoff+08:00",
      "spread_live": {
        "home_handicap": "-1.5",
        "home_odds": 1.03,
        "away_handicap": "+1.5",
        "away_odds": 0.86,
        "line_display": "美 -1.5"
      },
      "totals_live": {
        "line": 2.75,
        "line_display": "2.5/3",
        "over_odds": 0.82,
        "under_odds": 1.06
      },
      "line_move_live_cn": "现：美 -1.5 1.03 / 波 0.86 · 2.5/3 大 0.82 小 1.06",
      "read_cn": "升-1.5美1.03高水 · 波+1.5@0.86 · ★波+大2.5/3"
    }
  },
  "m82": {
    "market_tier": 0.25,
    "totals_line": 2.5,
    "public_lean": "home",
    "public_pct": 58,
    "spread_fav_odds": 0.83,
    "spread_dog_odds": 1.06,
    "totals_over_odds": 0.88,
    "totals_under_odds": 1,
    "spread_open": {
      "home_handicap": "-0.5",
      "home_odds": 1.02,
      "away_handicap": "+0.5",
      "away_odds": 0.8
    },
    "spread_mid": {
      "home_handicap": "-0.5",
      "home_odds": 1.02,
      "away_handicap": "+0.5",
      "away_odds": 0.8
    },
    "spread_now": {
      "home_handicap": "-0/0.5",
      "home_odds": 0.83,
      "away_handicap": "+0/0.5",
      "away_odds": 1.06
    },
    "totals_open": {
      "line": 2.25,
      "line_display": "2/2.5",
      "over_odds": 1,
      "under_odds": 0.8
    },
    "totals_mid": {
      "line": 2.25,
      "line_display": "2/2.5",
      "over_odds": 1,
      "under_odds": 0.8
    },
    "totals_now": {
      "line": 2.5,
      "line_display": "2.5",
      "over_odds": 0.88,
      "under_odds": 1
    },
    "line_move": {
      "tag": "fav_water_down",
      "cn": "现盘：比0.83再降水 · 大小均衡",
      "detail": "让球 -0/0.5 档不动 · 比 0.85→0.83、塞 1.04→1.06。大小 2.5 大1.01→0.88、小0.87→1.00（大略降、小升水趋均衡）。"
    },
    "wc_venue_note": "西雅图 neutral · 主客仅为 FIFA 标记",
    "agent_pick": {
      "primary": "spread",
      "tendency_cn": "更倾向让球盘",
      "tendency_reason_cn": "比0.83极低水退档后仍挺=诱比嫌疑 · 1-1(11.3%)平半赢半 · ★塞+0/0.5 · 大2.5副项随均衡盘。",
      "confidence": "medium",
      "confidence_cn": "中信心",
      "confidence_reason_cn": "★塞受让：模型51.9%+比低水非 massacre · 非大信心因2-2常规平局仅赢半；1-1赢半仍中；副项大0.88略低水。",
      "spread": {
        "side": "dog",
        "label_cn": "塞内加尔 +0/0.5 @1.06",
        "reason_cn": "比-0.5→-0/0.5仍0.83 · 1-1赢半/0-0·0-1·塞全赢/比1-0·2-1·2-2赢半（90'） · 加时3-2不计盘 · ★主项。"
      },
      "totals": {
        "side": "over",
        "label_cn": "大球 2.5 @0.88",
        "reason_cn": "小1.00升水趋均衡 · 大0.88略低 · 模型超2.5约52% · 3球+全赢 · 副项。"
      },
      "pick_meta": {
        "model_side": "over",
        "market_side": "over",
        "pick_side": "over",
        "recommended_side": "over",
        "conflict": false
      },
      "picked_at": "2026-07-02-agent-final"
    },
    "_source": "crown_day21_agent_final",
    "analysis": "M82 · 比利时 vs 塞内加尔 · 现 -0/0.5 比 0.83 / 塞 1.06 · 大小 2.5 大 0.88 小 1.00 · Agent终选：★塞受让+大2.5。",
    "live_timeline": [
      {
        "min": 0,
        "score": "0-0",
        "spread": "比-0/0.5@0.85/塞1.04",
        "totals": "2.5 大1.01小0.87",
        "trap_note": "比退档低水；大小升线"
      },
      {
        "min": 0,
        "score": "0-0",
        "spread": "比-0/0.5@0.83/塞1.06",
        "totals": "2.5 大0.88小1.00",
        "trap_note": "比再降水；大小趋均衡"
      }
    ],
    "live": {
      "period": "PRE",
      "minute": 0,
      "score": "0-0",
      "captured_at": "2026-07-02T04:00+08:00",
      "spread_live": {
        "home_handicap": "-0/0.5",
        "home_odds": 0.83,
        "away_handicap": "+0/0.5",
        "away_odds": 1.06,
        "line_display": "比 -0/0.5"
      },
      "totals_live": {
        "line": 2.5,
        "line_display": "2.5",
        "over_odds": 0.88,
        "under_odds": 1
      },
      "line_move_live_cn": "现：比 -0/0.5 0.83 / 塞 1.06 · 2.5 大 0.88 小 1.00",
      "read_cn": "比0.83极低水挺比；大小2.5均衡略偏大0.88。"
    }
  }
};
