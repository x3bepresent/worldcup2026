// 今日赛事 — Day 9 (signals enriched)
// Last updated: 2026-06-20T14:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-20T14:00:00+08:00",
  "syncSource": "FIFA 赛程 · Day 17 · J/K/L 末轮 enriched · 推演概要+小组形势",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 昨日：法国4-1挪威 · 比利时5-1新西兰 · 塞内加尔5-0伊拉克",
      "time": "赛果回顾"
    },
    {
      "tag": "PREVIEW",
      "text": "📅 今日6场 · 巴拿马-英格兰/克罗地亚-加纳(05:00) · 哥伦-葡/刚果-乌兹(07:30) · 阿尔-奥/约-阿(10:00)",
      "time": "6月28日"
    },
    {
      "tag": "PREVIEW",
      "text": "J/K/L末轮：阿根廷已出线 · 英格兰/加纳争L组 · 哥伦/葡争K组头名",
      "time": "焦点"
    },
    {
      "tag": "REFEREE",
      "text": "今日各场裁判待 FIFA 官方确认",
      "time": "裁判"
    }
  ],
  "todayMatches": [
    {
      "id": "m67",
      "fifa_match_number": 67,
      "fifa_match_id": "400021508",
      "group": "L",
      "matchday": 3,
      "date": "2026-06-27",
      "time": "17:00",
      "time_local": "17:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "05:00",
      "date_beijing": "6月28日",
      "time_beijing_full": "北京时间 6月28日 05:00",
      "venue": "MetLife Stadium",
      "city": "East Rutherford, USA",
      "note": "L组末轮 · 巴拿马 vs 英格兰 · 纽约/新泽西",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "5-4-1 / 4-2-3-1",
          "home": "Mosquera; Anderson, Escobar, Cummings; Fajardo, Bristán, Rodríguez; Gómez, Torres, Waterman; Ismael",
          "away": "Pickford; Walker, Stones, Guehi, Shaw; Rice, Mainoo; Saka, Bellingham, Foden; Kane",
          "source": "BBC 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Panama",
        "iso": "pa",
        "flag": "",
        "fifa_rank": 75,
        "rating": 58,
        "form": [
          "L",
          "L",
          "D",
          "L",
          "W"
        ],
        "coach": "Thomas Christiansen",
        "stars": [
          {
            "name": "José Fajardo",
            "pos": "ST",
            "club": "Plaza Amador",
            "rating": 7.2,
            "desc": "锋线"
          }
        ],
        "star": {
          "name": "José Fajardo",
          "pos": "ST",
          "club": "Plaza Amador",
          "rating": 7.2,
          "desc": "0 分须奇迹"
        },
        "injuries": [],
        "rumors": [
          "巴拿马 0 分须奇迹 · 5-4-1 铁桶"
        ]
      },
      "away": {
        "name": "England",
        "iso": "gb-eng",
        "flag": "",
        "fifa_rank": 9,
        "rating": 87,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "W"
        ],
        "coach": "Thomas Tuchel",
        "stars": [
          {
            "name": "Jude Bellingham",
            "pos": "CM",
            "club": "Real Madrid",
            "rating": 9,
            "desc": "核心"
          },
          {
            "name": "Harry Kane",
            "pos": "ST",
            "club": "Bayern",
            "rating": 8.8,
            "desc": "锋线"
          },
          {
            "name": "Bukayo Saka",
            "pos": "RW",
            "club": "Arsenal",
            "rating": 8.6,
            "desc": "宽度"
          }
        ],
        "star": {
          "name": "Jude Bellingham",
          "pos": "CM",
          "club": "Real Madrid",
          "rating": 9,
          "desc": "4 分争头名"
        },
        "injuries": [
          {
            "player": "Jude Bellingham",
            "status": "FIT",
            "note": "4 分争头名",
            "confirmed": true
          }
        ],
        "rumors": [
          "Tuchel：末轮须确保出线顺位"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 1,
        "recent": [
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "0-6",
            "winner": "England"
          }
        ],
        "note": "英格兰历史大胜"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 67 · 巴拿马 vs 英格兰 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-27T06:00:10+08:00"
      },
      "prediction": {
        "home_win": 13,
        "draw": 20,
        "away_win": 66,
        "score": "0-2",
        "confidence": 78,
        "xg_home": 0.68,
        "xg_away": 2.08,
        "key_factor": "L组末轮 · 巴拿马 0 分 vs 英格兰 4 分 · Bellingham/Kane vs 铁桶 · 泊松 0-2/0-3",
        "score_dist": [
          {
            "score": "0-2",
            "prob": 16.3
          },
          {
            "score": "0-3",
            "prob": 13.9
          },
          {
            "score": "0-1",
            "prob": 12.7
          },
          {
            "score": "0-4",
            "prob": 8.9
          },
          {
            "score": "1-2",
            "prob": 7.2
          },
          {
            "score": "1-3",
            "prob": 6.1
          },
          {
            "score": "1-1",
            "prob": 5.6
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Panama 暂列 L 组第 4（0 分 · 已赛 2 场） vs England 第 1（4 分 · 已赛 2 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "新泽西夏夜 · 24°C · 湿度 58% · 降雨概率 15% · 微风 2级；英格兰深盘 · 巴拿马铁桶（24°C · 17:00 ET）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "L组末轮 · 巴拿马 0 分 vs 英格兰 4 分 · Bellingham/Kane vs 铁桶 · 泊松 0-2/0-3"
          }
        ],
        "base_home_win": 11.2,
        "base_draw": 19.4,
        "base_away_win": 69.4,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": true,
          "closeXg": false,
          "gap": 1.4,
          "notes": [],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 0.44,
        "xg_poisson_away": 2.56,
        "xg_tier_calibrated": true,
        "score_prob": 16.3,
        "score_top3": [
          {
            "score": "0-2",
            "prob": 16.3
          },
          {
            "score": "0-3",
            "prob": 13.9
          },
          {
            "score": "0-1",
            "prob": 12.7
          }
        ],
        "expected_score": "0-3"
      },
      "weather": {
        "city": "纽约/新泽西",
        "country": "美国",
        "venue": "MetLife Stadium",
        "pitch_surface": "FieldTurf 人工草",
        "stadium_type": "开放式",
        "temp": 24,
        "humidity": 58,
        "altitude_m": 10,
        "rain_chance": 15,
        "wind": "微风 2级",
        "condition_cn": "新泽西夏夜",
        "impact_level": "LOW",
        "impact_summary": "英格兰深盘 · 巴拿马铁桶",
        "home_adapt": 74,
        "away_adapt": 88,
        "weather_factors": [
          {
            "label": "24°C · 17:00 ET",
            "impact": "低",
            "detail": "北京时间 05:00 · 同开 m68"
          }
        ],
        "forecast_updated": "2026-06-27 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "丁酉日",
          "day_summary": "丁酉日——火金相制",
          "hour_home": "见各场",
          "hour_home_element": "金"
        },
        "wuxing": {
          "home": {
            "verdict": "待定"
          },
          "away": {
            "verdict": "待定"
          },
          "summary": "文化解读"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "",
          "scenarios": []
        },
        "home_score": 25,
        "away_score": 75,
        "mystic_verdict": "英格兰金水旺深盘，巴拿马须铁桶。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": -1.5,
        "tier_label": "England -1.5 · Panama +1.5",
        "implied_tier": -0.75,
        "tier_gap": -0.75,
        "signal": "heat_deflection",
        "signal_cn": "预期偏热",
        "signal_color": "#C8A96E",
        "signal_desc": "舆论一边倒但实力差未同步放大，模型略下调热门方权重。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 England（约 78%）",
        "analysis": "巴拿马 0 分 vs 英格兰 4 分 · 英格兰 -1.5 深盘。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "0-2",
              "prob": 14
            },
            {
              "score": "0-1",
              "prob": 13.4
            },
            {
              "score": "0-3",
              "prob": 9.7
            }
          ],
          "one_goal_win_pct": 8.3,
          "two_plus_win_pct": 2.9,
          "full_cover_pct": 44,
          "dog_hold_pct": 56,
          "half_cover_pct": 25.4,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "部分达标净胜=1",
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 2.76,
          "fair_totals_line": 2,
          "over_2_5_pct": 51.1,
          "over_3_pct": 28.5,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥2 约 44%；部分达标净胜=1 约 25.4%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.76,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 39.8,
          "under_pct": 60.2,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 2.75 约 60.2% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "applied_delta": {
          "home_win": 2,
          "draw": 1,
          "away_win": -3
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 +1% · 客 -3%",
        "adjusted_probs": {
          "home_win": 13,
          "draw": 20,
          "away_win": 66
        },
        "display_summary": {
          "fav_name": "England",
          "expected_total_goals": 2.67,
          "poisson_fav_win_pct": 69.4,
          "small_lead_pct": 25.4,
          "small_example_score": "0-1",
          "small_example_pct": 13.4,
          "big_cover_pct": 44,
          "big_example_score": "0-2",
          "big_example_pct": 14,
          "win_shape": {
            "fav_name": "England",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 34.1%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 13.4,
                "pct": 19.3
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12,
                "pct": 17.3
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 23.6,
                "pct": 34.1
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 20.3,
                "pct": 29.3
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 36.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 34.1
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 29.3
              }
            ],
            "fav_win_pct": 66
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 32.6 分",
            "first_goal_wait": 32.6,
            "fast_pct": 60.1,
            "moderate_pct": 14.7,
            "slow_pct": 25.2,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 60.1
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.7
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 25.2
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Panama 暂无重要伤停 · England 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "英格兰深盘 · 巴拿马铁桶"
            }
          ],
          "xg_context": {
            "baseline_home": 0.68,
            "baseline_away": 2.08,
            "adjusted_home": 0.68,
            "adjusted_away": 2.08,
            "note": "基准 xG 0.68–2.08（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "预期偏热",
            "signal_color": "#C8A96E",
            "signal_desc": "舆论一边倒但实力差未同步放大，模型略下调热门方权重。",
            "tier_gap": -0.75,
            "implied_tier_label": "England -0.75 · Panama +0.75",
            "market_tier_label": "England -1.5 · Panama +1.5",
            "summary_cn": "与模型 xG 对照：预期偏热 · 赛前净胜看法低于 xG 隐含约 0.75 · 部分达标净胜=1 约 25.4%"
          },
          "win_outlook": {
            "fav_name": "England",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 36.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 34.1
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 29.3
              }
            ],
            "margin_line_cn": "England · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
            "margin_meet_pct": 44,
            "margin_half_pct": 25.4,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "部分达标净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.76,
            "totals_line_gap": 0.75,
            "totals_high_pct": 39.8,
            "totals_low_pct": 60.2,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 27.4,
            "win_margin2_low_total_pct": 14,
            "win_margin2_high_total_pct": 30,
            "readout_cn": "取胜约 66%；若取胜，以「险胜收工」为主（36.6%）。 对着赛前净胜参考，净胜≥2（全达标）约 44%；部分达标净胜=1 约 25.4%；对着总进球参考 2.75，模型超线概率约 39.8%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 2.75。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "0-2",
              "pct": 14
            },
            {
              "score": "0-1",
              "pct": 13.4
            },
            {
              "score": "0-3",
              "pct": 9.7
            }
          ],
          "totals_view": {
            "expected_total": 2.7,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 39.8,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 40,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 39.8,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.7 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "England -1.5 穿盘：有达标可能",
            "sub_cn": "England -1.5 穿盘 44% · Panama +1.5 守住 56% 进球氛围：略偏闷",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "England",
              "dog_name": "Panama",
              "fav_handicap_cn": "England -1.5",
              "dog_handicap_cn": "Panama +1.5",
              "market_expect_cn": "England -1.5 · 净胜≥2",
              "meet_pct": 44,
              "dog_hold_pct": 56,
              "meet_pct_label": "England -1.5 穿盘概率",
              "dog_hold_label": "Panama +1.5 守住概率",
              "verdict_cn": "有达标可能",
              "headline_cn": "England -1.5 穿盘：有达标可能",
              "pill_cn": "England -1.5 穿盘 44% · Panama +1.5 守住 56%",
              "detail_cn": "England -1.5 穿盘约 44%（净胜≥2） · Panama +1.5 守住约 56%；穿盘与受让守住均有一定空间（部分达标净胜=1 约 25.4%）。",
              "extra_stats_cn": "部分达标净胜=1 约 25.4%",
              "full_cover_pct": 44,
              "half_cover_pct": 25.4,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "部分达标净胜=1",
              "tier_gap": -0.75,
              "show_cover": true
            },
            "totals": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 40,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 39.8,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "draw_risk": null,
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "让球盘",
                "outlook": {
                  "level": "possible",
                  "label_cn": "有达标可能",
                  "color": "#C8A96E",
                  "fav_name": "England",
                  "dog_name": "Panama",
                  "fav_handicap_cn": "England -1.5",
                  "dog_handicap_cn": "Panama +1.5",
                  "market_expect_cn": "England -1.5 · 净胜≥2",
                  "meet_pct": 44,
                  "dog_hold_pct": 56,
                  "meet_pct_label": "England -1.5 穿盘概率",
                  "dog_hold_label": "Panama +1.5 守住概率",
                  "verdict_cn": "有达标可能",
                  "headline_cn": "England -1.5 穿盘：有达标可能",
                  "pill_cn": "England -1.5 穿盘 44% · Panama +1.5 守住 56%",
                  "detail_cn": "England -1.5 穿盘约 44%（净胜≥2） · Panama +1.5 守住约 56%；穿盘与受让守住均有一定空间（部分达标净胜=1 约 25.4%）。",
                  "extra_stats_cn": "部分达标净胜=1 约 25.4%",
                  "full_cover_pct": 44,
                  "half_cover_pct": 25.4,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "部分达标净胜=1",
                  "tier_gap": -0.75,
                  "show_cover": true
                },
                "text": "England -1.5 穿盘 44% · Panama +1.5 守住 56%",
                "color": "#C8A96E",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "◎",
                "label": "进球氛围",
                "outlook": {
                  "level": "mild_low",
                  "label_cn": "略倾向沉闷",
                  "color": "#7BB8D4",
                  "meter_label_cn": "略倾向沉闷",
                  "meter_pos": 40,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 39.8,
                  "line_gap": 0.75,
                  "market_line": 2.75,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.75",
                  "caution_public_high": false
                },
                "text": "略偏闷（弱）",
                "color": "#7BB8D4",
                "muted": true
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Panama",
              "first_goal_pct": 24.6,
              "start_score": "1-0",
              "fav_name": "England",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 68.2,
              "small_lead_pct": 21.7,
              "big_lead_pct": 18.9,
              "fav_win_pct": 40.6,
              "fav_draw_pct": 27.6,
              "fav_lose_pct": 31.8,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "England 追平（平局）",
                  "pct": 27.6
                },
                {
                  "key": "win1",
                  "label": "England 净胜1球翻盘（如 2-1）",
                  "pct": 21.7
                },
                {
                  "key": "win2",
                  "label": "England 净胜≥2球翻盘（如 3-1）",
                  "pct": 18.9
                },
                {
                  "key": "upset_hold",
                  "label": "Panama 保持胜果至终场",
                  "pct": 31.8
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 31.7 分",
                "first_goal_wait": 31.7,
                "fast_pct": 54,
                "moderate_pct": 14.8,
                "slow_pct": 31.2,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 54
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 31.2
                  }
                ]
              },
              "big_delta": -25.1,
              "small_delta": -3.7,
              "narrative": "Panama 先破门（已 1-0） → 「巩固防守」；England 「组织反扑」。热门先丢球（已 1-0），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "England",
              "first_goal_pct": 75.4,
              "start_score": "0-1",
              "fav_name": "England",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 96.8,
              "small_lead_pct": 24.6,
              "big_lead_pct": 62,
              "fav_win_pct": 86.5,
              "fav_draw_pct": 10.3,
              "fav_lose_pct": 3.2,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "England 保持胜果（净胜≥1）",
                  "pct": 86.5
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 10.3
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 3.2
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 33.6 分",
                "first_goal_wait": 33.6,
                "fast_pct": 51.9,
                "moderate_pct": 14.7,
                "slow_pct": 33.3,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51.9
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.3
                  }
                ]
              },
              "big_delta": 18,
              "small_delta": -0.8,
              "narrative": "England 先破门（已 0-1） → 「巩固防守」；Panama 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "England",
                "state_label": "England 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 36.6
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 34.1
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 29.3
                  }
                ],
                "margin_line_cn": "England · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
                "margin_meet_pct": 62,
                "margin_half_pct": 24.6,
                "margin_fail_pct": 24.6,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "部分达标净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.2,
                "totals_line_gap": 0.5,
                "totals_high_pct": 50.8,
                "totals_low_pct": 49.2,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 29.1,
                "win_margin2_low_total_pct": 18,
                "win_margin2_high_total_pct": 44,
                "readout_cn": "England 已 1-0 领先：仍取胜约 86.5%。 对着总进球参考 2.75，模型超线概率约 50.8%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.7 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 39.8,
              "type_tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 16,
              "readout_cn": "England · 压制局。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": null,
            "archetype": {
              "tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 16,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.3,
            "xg_away_ht": 0.92,
            "xg_home_2h": 0.38,
            "xg_away_2h": 1.16,
            "home_win": 11.7,
            "draw": 38.3,
            "away_win": 50,
            "top_score": "0-0",
            "top_score_prob": 29.5,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 29.5
              },
              {
                "score": "0-1",
                "prob": 27.2
              },
              {
                "score": "0-2",
                "prob": 12.5
              }
            ],
            "ht_goals_expected": 1.22,
            "ht_over_0_5_pct": 70.5,
            "ht_over_1_5_pct": 34.4,
            "pick": "away",
            "pick_name": "England",
            "summary_cn": "半场 xG 0.3–0.92（约占全场 44%） · 最可能 0-0（29.5%） · 胜平负 11.7/38.3/50 · 半场≥1球约 70.5%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】England · 压制局。 · 与模型 xG 对照：预期偏热 · 赛前净胜看法低于 xG 隐含约 0.75 · 部分达标净胜=1 约 25.4%（模型微调：主胜 +2% · 平 +1% · 客 -3%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.76,
          "xg_gap": 1.4,
          "xg_home": 0.68,
          "xg_away": 2.08,
          "xg_baseline_home": 0.68,
          "xg_baseline_away": 2.08,
          "xg_note": "结构推演用基准 xG 0.68–2.08",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "England",
          "dog_name": "Panama",
          "fav_xg": 2.08,
          "dog_xg": 0.68,
          "path_type": "low",
          "path_label": "铁局/小比分",
          "lean": "neutral",
          "lean_cn": "中性",
          "lean_mode": "neutral",
          "lean_confidence": null,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 39.8,
          "prob_meet_guess": 51.1,
          "guess_n": 3,
          "prob_4_plus": 28.5,
          "prob_2_or_less": 48.9,
          "totals_line": 2.75,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 65
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 14
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 10
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 10
            }
          ],
          "tags": [
            {
              "key": "fav_dominant",
              "label": "xG碾压",
              "color": "#FF6B35",
              "bg": "rgba(255,107,53,0.08)"
            },
            {
              "key": "low_scoring",
              "label": "小比分",
              "color": "#7BB8D4",
              "bg": "rgba(123,184,212,0.1)"
            }
          ],
          "watch_notes": [
            "xG 差≥1.0——样本多为小比分"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 2.76 · England 2.08 / Panama 0.68 → 主路径「铁局/小比分」约 65%。 至少 3 球约 51.1% · 超 2.75 约 39.8% · ≤2球 48.9%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "L",
        "label": "L组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "England",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 4,
            "ga": 2
          },
          {
            "team": "Ghana",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 0
          },
          {
            "team": "Croatia",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 4
          },
          {
            "team": "Panama",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 0,
            "ga": 2
          }
        ],
        "home": {
          "team": "Panama",
          "rank": 4,
          "pts": 0,
          "played": 2,
          "if_1st": "32强 M80 · L 组第 1 vs 最佳第 3（E/H/I/J/K 池） → 当前 K 组第 2倾向 Portugal（强队）",
          "if_1st_r16": "16强 M92 · 对阵 A 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "英格兰头名通道",
          "if_2nd": "32强 M83 · K 组第 2 vs L 组第 2 → 当前 K 组第 1倾向 Colombia（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者",
          "if_2nd_corridor": "克罗地亚/加纳次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 K/J/I/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "England",
          "rank": 1,
          "pts": 4,
          "played": 2,
          "if_1st": "32强 M80 · L 组第 1 vs 最佳第 3（E/H/I/J/K 池） → 当前 K 组第 2倾向 Portugal（强队）",
          "if_1st_r16": "16强 M92 · 对阵 A 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "英格兰头名通道",
          "if_2nd": "32强 M83 · K 组第 2 vs L 组第 2 → 当前 K 组第 1倾向 Colombia（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者",
          "if_2nd_corridor": "克罗地亚/加纳次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 K/J/I/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "K 组：头名 Colombia 6 分 · 次席 Portugal 4 分（32强绑定组）",
          "A 组：头名 Mexico 9 分 · 次席 South Africa 4 分（32强绑定组）",
          "G 组 Belgium 5 分领跑",
          "H 组 Spain 7 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 7 分领跑",
          "I 组 France 9 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "L 组次席走 M83，16 强进入 H/J 半区。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "Panama 末轮须抢 3 分争出线，无控分空间；路径博弈须等积分落袋后再谈。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Panama 若取胜：积分 3，L 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "England 若取胜：积分 7，客场抢分将改变 L 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 K 组：头名 Colombia 6 分 · 次席 Portugal 4 分（32强绑定组） · A 组：头名 Mexico 9 分 · 次席 South Africa 4 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：L 组次席走 M83，16 强进入 H/J 半区。"
        ]
      }
    },
    {
      "id": "m68",
      "fifa_match_number": 68,
      "fifa_match_id": "400021509",
      "group": "L",
      "matchday": 3,
      "date": "2026-06-27",
      "time": "17:00",
      "time_local": "17:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "05:00",
      "date_beijing": "6月28日",
      "time_beijing_full": "北京时间 6月28日 05:00",
      "venue": "Lincoln Financial Field",
      "city": "Philadelphia, USA",
      "note": "L组末轮 · 克罗地亚 vs 加纳 · 费城",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Livaković; Juranović, Gvardiol, Šutalo, Sosa; Modrić, Brozović, Pašalić; Perišić, Kramarić, Ivanušec",
          "away": "Ati-Zigi; Lamptey, Amartey, Djiku; Partey, Idrissu; Kudus, André Ayew, Jordan Ayew; Semenyo",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Croatia",
        "iso": "hr",
        "flag": "",
        "fifa_rank": 15,
        "rating": 79,
        "form": [
          "W",
          "L",
          "W",
          "W",
          "D"
        ],
        "coach": "Zlatko Dalić",
        "stars": [
          {
            "name": "Luka Modrić",
            "pos": "CM",
            "club": "Real Madrid",
            "rating": 8.8,
            "desc": "组织"
          },
          {
            "name": "Joško Gvardiol",
            "pos": "CB",
            "club": "Man City",
            "rating": 8.4,
            "desc": "防线"
          }
        ],
        "star": {
          "name": "Luka Modrić",
          "pos": "CM",
          "club": "Real Madrid",
          "rating": 8.8,
          "desc": "3 分须胜"
        },
        "injuries": [
          {
            "player": "Luka Modrić",
            "status": "FIT",
            "note": "3 分须胜",
            "confirmed": true
          }
        ],
        "rumors": [
          "克罗地亚末轮须 3 分"
        ]
      },
      "away": {
        "name": "Ghana",
        "iso": "gh",
        "flag": "",
        "fifa_rank": 60,
        "rating": 65,
        "form": [
          "W",
          "D",
          "W",
          "D",
          "L"
        ],
        "coach": "Otto Addo",
        "stars": [
          {
            "name": "Mohammed Kudus",
            "pos": "RW",
            "club": "West Ham",
            "rating": 8.3,
            "desc": "核心"
          },
          {
            "name": "Thomas Partey",
            "pos": "CDM",
            "club": "Arsenal",
            "rating": 8,
            "desc": "屏障"
          }
        ],
        "star": {
          "name": "Mohammed Kudus",
          "pos": "RW",
          "club": "West Ham",
          "rating": 8.3,
          "desc": "4 分领跑"
        },
        "injuries": [
          {
            "player": "Mohammed Kudus",
            "status": "FIT",
            "note": "4 分领跑",
            "confirmed": true
          }
        ],
        "rumors": [
          "加纳净胜球优势"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 0,
        "away_wins": 0,
        "recent": [
          {
            "year": 2014,
            "comp": "友谊赛",
            "score": "1-0",
            "winner": "Croatia"
          }
        ],
        "note": "克罗地亚略占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 68 · 克罗地亚 vs 加纳 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-27T06:00:10+08:00"
      },
      "prediction": {
        "home_win": 29,
        "draw": 43,
        "away_win": 28,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.42,
        "xg_away": 1.38,
        "key_factor": "L组榜首对话 · 加纳 4 分 vs 克罗地亚 3 分须胜 · Modrić vs Kudus · 泊松 1-1/2-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.4
          },
          {
            "score": "0-1",
            "prob": 9.4
          },
          {
            "score": "1-0",
            "prob": 9.4
          },
          {
            "score": "1-2",
            "prob": 8.2
          },
          {
            "score": "2-1",
            "prob": 8.2
          },
          {
            "score": "0-0",
            "prob": 7.1
          },
          {
            "score": "0-2",
            "prob": 6.2
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Croatia 暂列 L 组第 3（3 分 · 已赛 2 场） vs Ghana 第 2（4 分 · 已赛 2 场）"
          },
          {
            "icon": "🎯",
            "label": "出线博弈",
            "text": "Ghana 已锁前二；Croatia 仍不确定：输球基本出局，握手可争第 3 进「12 进 8」争八池（4 分），赢球则稳进 · 强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契） · 已出线争顺位"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "费城夏夜 · 26°C · 湿度 62% · 降雨概率 20% · 东南风 2级；L组榜首对话 · 加纳 4 分 vs 克罗地亚 3 分（26°C）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "L组榜首对话 · 加纳 4 分 vs 克罗地亚 3 分须胜 · Modrić vs Kudus · 泊松 1-1/2-1"
          }
        ],
        "base_home_win": 33,
        "base_draw": 36,
        "base_away_win": 31,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 11,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.04,
          "notes": [
            "xG 极接近",
            "争八不对称：弱队保平争第三，平局权重上调",
            "Croatia 输球出局 · 平局争第 3 · 赢球稳进"
          ],
          "qual_dynamics": {
            "scenario_type": "asymmetric_third",
            "mutual_draw_advances": false,
            "path_control": false,
            "asymmetric_third": {
              "strong_side": "Ghana",
              "weak_side": "Croatia",
              "weak_is_home": true,
              "weak_dead_on_loss": true,
              "weak_third_live_on_draw": true,
              "weak_through_on_win": true,
              "weak_likely_underdog": false,
              "draw_pts_if_draw": 4
            },
            "both_already_qualified": false,
            "home_already_qualified": false,
            "away_already_qualified": true,
            "home_out_if_loss": true,
            "away_out_if_loss": false,
            "logic_steps": [
              "Croatia 3 分 vs Ghana 4 分；同组另一场 England（4 分）vs Panama（0 分）",
              "逻辑：Ghana 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵",
              "逻辑：Croatia 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（4 分）",
              "逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守",
              "逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）"
            ],
            "drawBoost": 7,
            "xgScaleHome": 0.93,
            "xgScaleAway": 0.96,
            "notes": [
              "争八不对称：弱队保平争第三，平局权重上调",
              "Croatia 输球出局 · 平局争第 3 · 赢球稳进"
            ],
            "summary": "争八不对称默契：强队已出线，弱队保平争第三（输球出局）"
          }
        },
        "qual_dynamics": {
          "scenario_type": "asymmetric_third",
          "mutual_draw_advances": false,
          "path_control": false,
          "asymmetric_third": {
            "strong_side": "Ghana",
            "weak_side": "Croatia",
            "weak_is_home": true,
            "weak_dead_on_loss": true,
            "weak_third_live_on_draw": true,
            "weak_through_on_win": true,
            "weak_likely_underdog": false,
            "draw_pts_if_draw": 4
          },
          "both_already_qualified": false,
          "home_already_qualified": false,
          "away_already_qualified": true,
          "home_out_if_loss": true,
          "away_out_if_loss": false,
          "logic_steps": [
            "Croatia 3 分 vs Ghana 4 分；同组另一场 England（4 分）vs Panama（0 分）",
            "逻辑：Ghana 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵",
            "逻辑：Croatia 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（4 分）",
            "逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守",
            "逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）"
          ],
          "drawBoost": 7,
          "xgScaleHome": 0.93,
          "xgScaleAway": 0.96,
          "notes": [
            "争八不对称：弱队保平争第三，平局权重上调",
            "Croatia 输球出局 · 平局争第 3 · 赢球稳进"
          ],
          "summary": "争八不对称默契：强队已出线，弱队保平争第三（输球出局）"
        },
        "xg_poisson_home": 1.32,
        "xg_poisson_away": 1.32,
        "xg_tier_calibrated": false,
        "score_prob": 12.4,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 12.4
          },
          {
            "score": "0-1",
            "prob": 9.4
          },
          {
            "score": "1-0",
            "prob": 9.4
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "费城",
        "country": "美国",
        "venue": "Lincoln Financial Field",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 26,
        "humidity": 62,
        "altitude_m": 15,
        "rain_chance": 20,
        "wind": "东南风 2级",
        "condition_cn": "费城夏夜",
        "impact_level": "LOW",
        "impact_summary": "L组榜首对话 · 加纳 4 分 vs 克罗地亚 3 分",
        "home_adapt": 84,
        "away_adapt": 82,
        "weather_factors": [
          {
            "label": "26°C",
            "impact": "低",
            "detail": "北京时间 05:00"
          }
        ],
        "forecast_updated": "2026-06-27 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "丁酉日",
          "day_summary": "丁酉日——火金相制",
          "hour_home": "见各场",
          "hour_home_element": "金"
        },
        "wuxing": {
          "home": {
            "verdict": "待定"
          },
          "away": {
            "verdict": "待定"
          },
          "summary": "文化解读"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "",
          "scenarios": []
        },
        "home_score": 52,
        "away_score": 48,
        "mystic_verdict": "均分乱局宜稳守，Modrić 中场定调。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0,
        "tier_label": "势均力敌",
        "implied_tier": 0,
        "tier_gap": 0,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Croatia（约 52%）",
        "analysis": "L组榜首对话 · 加纳 4 分 vs 克罗地亚 3 分。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12
            },
            {
              "score": "1-0",
              "prob": 8.7
            },
            {
              "score": "2-1",
              "prob": 8.5
            }
          ],
          "one_goal_win_pct": 20.5,
          "two_plus_win_pct": 17.7,
          "full_cover_pct": 0,
          "dog_hold_pct": null,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 2.8,
          "fair_totals_line": 2,
          "over_2_5_pct": 52.8,
          "over_3_pct": 30.4,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 0%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.8,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 52.8,
          "under_pct": 47.2,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 52.8%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 33,
          "draw": 36,
          "away_win": 31
        },
        "display_summary": {
          "fav_name": "Croatia",
          "expected_total_goals": 2.62,
          "poisson_fav_win_pct": 36.9,
          "small_lead_pct": 20.5,
          "small_example_score": "1-0",
          "small_example_pct": 9.5,
          "big_cover_pct": 16.4,
          "big_example_score": "2-0",
          "big_example_pct": 6.2,
          "win_shape": {
            "fav_name": "Croatia",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 29.9%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 9.5,
                "pct": 25.7
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11,
                "pct": 29.9
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 9,
                "pct": 24.4
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 7.4,
                "pct": 20
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 24.4
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20
              }
            ],
            "fav_win_pct": 33
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 34.1 分",
            "first_goal_wait": 34.1,
            "fast_pct": 58.5,
            "moderate_pct": 14.8,
            "slow_pct": 26.7,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 58.5
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 26.7
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Croatia 暂无重要伤停 · Ghana 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "L组榜首对话 · 加纳 4 分 vs 克罗地亚 3 分"
            },
            {
              "icon": "🎯",
              "label": "出线博弈",
              "note": "争八不对称默契：强队已出线，弱队保平争第三（输球出局） · 争八不对称"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 极接近 · 争八不对称：弱队保平争第三，平局权重上调 · Croatia 输球出局 · 平局争第 3 · 赢球稳进（平 +11%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.42,
            "baseline_away": 1.38,
            "adjusted_home": 1.32,
            "adjusted_away": 1.32,
            "note": "基准 xG 1.42–1.38 → 调整后 1.32–1.32"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "势均力敌",
            "summary_cn": "与模型 xG 对照：均衡 · 与赛前净胜看法基本一致"
          },
          "win_outlook": {
            "fav_name": "Croatia",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 24.4
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20
              }
            ],
            "margin_line_cn": "净胜差距参考 · 势均力敌",
            "margin_meet_pct": 0,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球参考 2.5",
            "fair_totals_line": 2,
            "model_total_xg": 2.64,
            "totals_line_gap": 0.5,
            "totals_high_pct": 48.9,
            "totals_low_pct": 51.1,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 15.7,
            "win_margin2_low_total_pct": 6.2,
            "win_margin2_high_total_pct": 10.1,
            "readout_cn": "取胜约 33%；若取胜，以「险胜收工」为主（55.6%）。 对着赛前净胜参考，净胜≥1（全达标）约 0%；对着总进球参考 2.5，模型超线概率约 48.9%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.5
            },
            {
              "score": "0-1",
              "pct": 9.5
            },
            {
              "score": "1-0",
              "pct": 9.5
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 48.9,
            "gap_warning": null,
            "totals_outlook": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 48.9,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.6 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "净胜走向：双方实力接近",
            "sub_cn": "双方实力接近，暂无单侧净胜预期。 进球氛围：几乎五五开 平局权重约 36%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "even",
              "label_cn": "势均力敌",
              "color": "#8A96A8",
              "fav_name": null,
              "market_expect_cn": "势均力敌",
              "meet_pct": null,
              "verdict_cn": "无明确净胜拉开预期",
              "headline_cn": "净胜走向：双方实力接近",
              "pill_cn": "双方实力接近，暂无单侧净胜预期。",
              "detail_cn": "赛前外界为势均力敌档，模型未给出哪一方能明显拉开净胜的信号。",
              "full_cover_pct": 0,
              "half_cover_pct": 0,
              "show_cover": false
            },
            "totals": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 48.9,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "draw_risk": {
              "level": "high",
              "color": "#C8A96E",
              "note": "平局权重约 36%，小组赛易出守平——勿只盯胜负一方。"
            },
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "让球盘",
                "outlook": {
                  "level": "even",
                  "label_cn": "势均力敌",
                  "color": "#8A96A8",
                  "fav_name": null,
                  "market_expect_cn": "势均力敌",
                  "meet_pct": null,
                  "verdict_cn": "无明确净胜拉开预期",
                  "headline_cn": "净胜走向：双方实力接近",
                  "pill_cn": "双方实力接近，暂无单侧净胜预期。",
                  "detail_cn": "赛前外界为势均力敌档，模型未给出哪一方能明显拉开净胜的信号。",
                  "full_cover_pct": 0,
                  "half_cover_pct": 0,
                  "show_cover": false
                },
                "text": "双方实力接近，暂无单侧净胜预期。",
                "color": "#8A96A8",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "◎",
                "label": "进球氛围",
                "outlook": {
                  "level": "neutral",
                  "label_cn": "暂无明显倾向",
                  "color": "#8A96A8",
                  "meter_label_cn": "几乎五五开",
                  "meter_pos": 50,
                  "lean_side": "neutral",
                  "lean_strength": "none",
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 48.9,
                  "line_gap": 0.5,
                  "market_line": 2.5,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.5",
                  "caution_public_high": false
                },
                "text": "几乎五五开",
                "color": "#8A96A8",
                "muted": true
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Croatia",
              "first_goal_pct": 50,
              "start_score": "1-0",
              "fav_name": "Croatia",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 84,
              "small_lead_pct": 29.4,
              "big_lead_pct": 32,
              "fav_win_pct": 61.4,
              "fav_draw_pct": 22.6,
              "fav_lose_pct": 16.1,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Croatia 保持胜果（净胜≥1）",
                  "pct": 61.4
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 22.6
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 16.1
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.1 分",
                "first_goal_wait": 34.1,
                "fast_pct": 51.4,
                "moderate_pct": 14.7,
                "slow_pct": 33.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.9
                  }
                ]
              },
              "big_delta": 15.6,
              "small_delta": 8.9,
              "narrative": "Croatia 先破门（已 1-0） → 「巩固防守」；Ghana 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Croatia",
                "state_label": "Croatia 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 55.6
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 24.4
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 20
                  }
                ],
                "margin_line_cn": "净胜差距参考 · 势均力敌",
                "margin_meet_pct": 16.1,
                "margin_half_pct": 0,
                "margin_fail_pct": 11,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.16,
                "totals_line_gap": 0.25,
                "totals_high_pct": 63.6,
                "totals_low_pct": 36.4,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 0,
                "win_margin2_low_total_pct": 0,
                "win_margin2_high_total_pct": 5.1,
                "readout_cn": "Croatia 已 1-0 领先：仍取胜约 16.1%。 对着总进球参考 2.5，模型超线概率约 63.6%。 若再扩大，偏「险胜收工」。"
              }
            },
            {
              "side": "away",
              "team": "Ghana",
              "first_goal_pct": 50,
              "start_score": "0-1",
              "fav_name": "Ghana",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 84,
              "small_lead_pct": 29.4,
              "big_lead_pct": 32,
              "fav_win_pct": 61.4,
              "fav_draw_pct": 22.6,
              "fav_lose_pct": 16.1,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Ghana 追平（平局）",
                  "pct": 22.6
                },
                {
                  "key": "win1",
                  "label": "Ghana 净胜1球翻盘（如 2-1）",
                  "pct": 29.4
                },
                {
                  "key": "win2",
                  "label": "Ghana 净胜≥2球翻盘（如 3-1）",
                  "pct": 32
                },
                {
                  "key": "upset_hold",
                  "label": "Ghana 保持胜果至终场",
                  "pct": 16.1
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.1 分",
                "first_goal_wait": 34.1,
                "fast_pct": 51.4,
                "moderate_pct": 14.7,
                "slow_pct": 33.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.9
                  }
                ]
              },
              "big_delta": 15.6,
              "small_delta": 8.9,
              "narrative": "Ghana 先破门（已 0-1） → 「巩固防守」；Croatia 「组织反扑」。落后方压上反扑，比赛更开放，但热门要净胜两球以上仍须连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.6 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 48.9,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 31,
              "readout_cn": "Croatia · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": null,
            "archetype": {
              "tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 31,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.58,
            "xg_away_ht": 0.58,
            "xg_home_2h": 0.74,
            "xg_away_2h": 0.74,
            "home_win": 28.6,
            "draw": 42.8,
            "away_win": 28.6,
            "top_score": "0-0",
            "top_score_prob": 31.4,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 31.4
              },
              {
                "score": "0-1",
                "prob": 18.2
              },
              {
                "score": "1-0",
                "prob": 18.2
              }
            ],
            "ht_goals_expected": 1.16,
            "ht_over_0_5_pct": 68.6,
            "ht_over_1_5_pct": 32.3,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.58–0.58（约占全场 44%） · 最可能 0-0（31.4%） · 胜平负 28.6/42.8/28.6 · 半场≥1球约 68.6%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Croatia · 常规对抗。 · 与模型 xG 对照：均衡 · 与赛前净胜看法基本一致（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.8,
          "xg_gap": 0.04,
          "xg_home": 1.42,
          "xg_away": 1.38,
          "xg_baseline_home": 1.42,
          "xg_baseline_away": 1.38,
          "xg_note": "结构推演用基准 xG 1.42–1.38（进球氛围用调整后 1.32–1.32）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Croatia",
          "dog_name": "Ghana",
          "fav_xg": 1.42,
          "dog_xg": 1.38,
          "path_type": "low",
          "path_label": "铁局/小比分",
          "lean": "split",
          "lean_cn": "大/小比分分裂",
          "lean_mode": "neutral",
          "lean_confidence": null,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 52.8,
          "prob_meet_guess": 52.8,
          "guess_n": 3,
          "prob_4_plus": 30.4,
          "prob_2_or_less": 47.2,
          "totals_line": 2.5,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 45
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 23
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 20
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 13
            }
          ],
          "tags": [
            {
              "key": "even_xg",
              "label": "xG接近",
              "color": "#5BBF8A",
              "bg": "rgba(91,191,138,0.08)"
            },
            {
              "key": "low_scoring",
              "label": "小比分",
              "color": "#7BB8D4",
              "bg": "rgba(123,184,212,0.1)"
            }
          ],
          "watch_notes": [
            "弱队上半场效率≥1.0 → 关注弱队开花路径"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 2.8 · Croatia 1.42 / Ghana 1.38 → 主路径「铁局/小比分」约 45%。 超 2.5 约 52.8% · ≤2球 47.2%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "L",
        "label": "L组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "England",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 4,
            "ga": 2
          },
          {
            "team": "Ghana",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 0
          },
          {
            "team": "Croatia",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 4
          },
          {
            "team": "Panama",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 0,
            "ga": 2
          }
        ],
        "home": {
          "team": "Croatia",
          "rank": 3,
          "pts": 3,
          "played": 2,
          "if_1st": "32强 M80 · L 组第 1 vs 最佳第 3（E/H/I/J/K 池） → 当前 K 组第 2倾向 Portugal（强队）",
          "if_1st_r16": "16强 M92 · 对阵 A 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "英格兰头名通道",
          "if_2nd": "32强 M83 · K 组第 2 vs L 组第 2 → 当前 K 组第 1倾向 Colombia（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者",
          "if_2nd_corridor": "克罗地亚/加纳次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 K/J/I/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Ghana",
          "rank": 2,
          "pts": 4,
          "played": 2,
          "if_1st": "32强 M80 · L 组第 1 vs 最佳第 3（E/H/I/J/K 池） → 当前 K 组第 2倾向 Portugal（强队）",
          "if_1st_r16": "16强 M92 · 对阵 A 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "英格兰头名通道",
          "if_2nd": "32强 M83 · K 组第 2 vs L 组第 2 → 当前 K 组第 1倾向 Colombia（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者",
          "if_2nd_corridor": "克罗地亚/加纳次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 K/J/I/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "K 组：头名 Colombia 6 分 · 次席 Portugal 4 分（32强绑定组）",
          "A 组：头名 Mexico 9 分 · 次席 South Africa 4 分（32强绑定组）",
          "G 组 Belgium 5 分领跑",
          "H 组 Spain 7 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 7 分领跑",
          "I 组 France 9 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "L 组次席走 M83，16 强进入 H/J 半区。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Croatia",
          "reason": "Ghana 已锁前二；Croatia 仍不确定：输球基本出局，握手可争第 3 进「12 进 8」争八池（4 分），赢球则稳进。弱队或「保平争胜」、强队可低强度——不对称默契，推演略抬平局。",
          "logic_steps": [
            "Croatia 3 分 vs Ghana 4 分；同组另一场 England（4 分）vs Panama（0 分）",
            "逻辑：Ghana 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵",
            "逻辑：Croatia 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（4 分）",
            "逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守",
            "逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）"
          ],
          "optimal_summary": "策略最优解（推演）：Croatia 末轮可在「保住现有名次」与「为淘汰赛选半区」之间微调；未完全锁定出线前，此阶段仍以全力争胜、抢 3 分为上策；尚未到以演练或轮换为名调整名次、接受非胜结果的窗口。已锁定后，可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。",
          "qual_model": {
            "scenario_type": "asymmetric_third",
            "mutual_draw_advances": false,
            "path_control": false,
            "asymmetric_third": {
              "strong_side": "Ghana",
              "weak_side": "Croatia",
              "weak_is_home": true,
              "weak_dead_on_loss": true,
              "weak_third_live_on_draw": true,
              "weak_through_on_win": true,
              "weak_likely_underdog": false,
              "draw_pts_if_draw": 4
            },
            "both_already_qualified": false,
            "home_already_qualified": false,
            "away_already_qualified": true,
            "home_out_if_loss": true,
            "away_out_if_loss": false,
            "logic_steps": [
              "Croatia 3 分 vs Ghana 4 分；同组另一场 England（4 分）vs Panama（0 分）",
              "逻辑：Ghana 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵",
              "逻辑：Croatia 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（4 分）",
              "逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守",
              "逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）"
            ],
            "drawBoost": 7,
            "xgScaleHome": 0.93,
            "xgScaleAway": 0.96,
            "notes": [
              "争八不对称：弱队保平争第三，平局权重上调",
              "Croatia 输球出局 · 平局争第 3 · 赢球稳进"
            ],
            "summary": "争八不对称默契：强队已出线，弱队保平争第三（输球出局）"
          }
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Croatia 若取胜：积分 6，L 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Ghana 若取胜：积分 7，客场抢分将改变 L 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 K 组：头名 Colombia 6 分 · 次席 Portugal 4 分（32强绑定组） · A 组：头名 Mexico 9 分 · 次席 South Africa 4 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：L 组次席走 M83，16 强进入 H/J 半区。"
        ]
      }
    },
    {
      "id": "m71",
      "fifa_match_number": 71,
      "fifa_match_id": "400021505",
      "group": "K",
      "matchday": 3,
      "date": "2026-06-27",
      "time": "19:30",
      "time_local": "19:30 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "07:30",
      "date_beijing": "6月28日",
      "time_beijing_full": "北京时间 6月28日 07:30",
      "venue": "Hard Rock Stadium",
      "city": "Miami Gardens, USA",
      "note": "K组末轮 · 哥伦比亚 vs 葡萄牙 · 迈阿密",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Campos; Muñoz, Sánchez, Lerma; Arias, Barrios, Ríos; Díaz, James, Quinteros; Borré",
          "away": "Costa; Cancelo, Dias, Pepe, Mendes; Palhinha, Vitinha; Leão, Bruno Fernandes, Rafael Leão; Ronaldo",
          "source": "BBC 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Colombia",
        "iso": "co",
        "flag": "",
        "fifa_rank": 27,
        "rating": 75,
        "form": [
          "W",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Néstor Lorenzo",
        "stars": [
          {
            "name": "Luis Díaz",
            "pos": "LW",
            "club": "Liverpool",
            "rating": 8.6,
            "desc": "速度"
          },
          {
            "name": "James Rodríguez",
            "pos": "AM",
            "club": "León",
            "rating": 8.2,
            "desc": "组织"
          }
        ],
        "star": {
          "name": "Luis Díaz",
          "pos": "LW",
          "club": "Liverpool",
          "rating": 8.6,
          "desc": "6 分争头名"
        },
        "injuries": [
          {
            "player": "Luis Díaz",
            "status": "FIT",
            "note": "6 分争头名",
            "confirmed": true
          }
        ],
        "rumors": [
          "哥伦比亚末轮须保头名"
        ]
      },
      "away": {
        "name": "Portugal",
        "iso": "pt",
        "flag": "",
        "fifa_rank": 6,
        "rating": 88,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "W"
        ],
        "coach": "Roberto Martínez",
        "stars": [
          {
            "name": "Cristiano Ronaldo",
            "pos": "ST",
            "club": "Al-Nassr",
            "rating": 8.8,
            "desc": "锋线"
          },
          {
            "name": "Bruno Fernandes",
            "pos": "AM",
            "club": "Man Utd",
            "rating": 8.5,
            "desc": "组织"
          }
        ],
        "star": {
          "name": "Cristiano Ronaldo",
          "pos": "ST",
          "club": "Al-Nassr",
          "rating": 8.8,
          "desc": "4 分争头名"
        },
        "injuries": [
          {
            "player": "Cristiano Ronaldo",
            "status": "FIT",
            "note": "4 分争头名",
            "confirmed": true
          }
        ],
        "rumors": [
          "葡萄牙须胜抢 K 组第一"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2014,
            "comp": "世界杯",
            "score": "0-1",
            "winner": "Portugal"
          }
        ],
        "note": "葡萄牙大赛占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 71 · 哥伦比亚 vs 葡萄牙 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-27T06:00:10+08:00"
      },
      "prediction": {
        "home_win": 35,
        "draw": 28,
        "away_win": 37,
        "score": "1-1",
        "confidence": 72,
        "xg_home": 1.55,
        "xg_away": 1.58,
        "key_factor": "K组榜首战 · 哥伦/葡各争头名 · Díaz vs Ronaldo · 泊松 1-1/2-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.4
          },
          {
            "score": "0-1",
            "prob": 9.5
          },
          {
            "score": "1-0",
            "prob": 9.3
          },
          {
            "score": "1-2",
            "prob": 8.3
          },
          {
            "score": "2-1",
            "prob": 8.1
          },
          {
            "score": "0-0",
            "prob": 7.1
          },
          {
            "score": "0-2",
            "prob": 6.3
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Colombia 暂列 K 组第 1（6 分 · 已赛 2 场） vs Portugal 第 2（4 分 · 已赛 2 场）"
          },
          {
            "icon": "🎯",
            "label": "出线博弈",
            "text": "Colombia、Portugal 均已锁定出线（输球亦稳居前二） · 可轮换、试战术，但≠默契球 —— 没有「必须平局才能两人携手出线」的必要；头名之争仍可能真刀真枪 · 已出线争顺位"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "迈阿密湿热 · 31°C · 湿度 76% · 降雨概率 40% · 海风 3级；K组榜首战 · 哥伦 6 分 vs 葡萄牙 4 分（31°C 湿度 76%）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "K组榜首战 · 哥伦/葡各争头名 · Díaz vs Ronaldo · 泊松 1-1/2-1"
          }
        ],
        "base_home_win": 35,
        "base_draw": 28,
        "base_away_win": 37,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 4,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.03,
          "notes": [
            "xG 极接近"
          ],
          "qual_dynamics": {
            "scenario_type": "path_control",
            "mutual_draw_advances": false,
            "path_control": true,
            "asymmetric_third": null,
            "both_already_qualified": true,
            "home_already_qualified": true,
            "away_already_qualified": true,
            "home_out_if_loss": false,
            "away_out_if_loss": false,
            "logic_steps": [
              "Colombia 6 分 vs Portugal 4 分；同组另一场 Congo DR（1 分）vs Uzbekistan（0 分）",
              "逻辑：即使本场输球，Colombia、Portugal 仍稳居前二 → 均已出线",
              "逻辑：胜负不改变「进不进淘汰赛」，只决定头名/次席 → 32 强/16 强对位不同（K 组次席与 L 组次席同槽 M83。）",
              "逻辑：可轮换、试战术，但≠默契球 —— 没有「必须平局才能两人携手出线」的必要；头名之争仍可能真刀真枪"
            ],
            "drawBoost": 0,
            "xgScaleHome": 0.94,
            "xgScaleAway": 0.94,
            "notes": [
              "已出线：或轮换/练兵，xG 略降",
              "头名/次席影响淘汰对位，不额外抬平局"
            ],
            "summary": "已出线控分：胜负只争头/次席与淘汰对位，可练兵但≠默契球"
          }
        },
        "qual_dynamics": {
          "scenario_type": "path_control",
          "mutual_draw_advances": false,
          "path_control": true,
          "asymmetric_third": null,
          "both_already_qualified": true,
          "home_already_qualified": true,
          "away_already_qualified": true,
          "home_out_if_loss": false,
          "away_out_if_loss": false,
          "logic_steps": [
            "Colombia 6 分 vs Portugal 4 分；同组另一场 Congo DR（1 分）vs Uzbekistan（0 分）",
            "逻辑：即使本场输球，Colombia、Portugal 仍稳居前二 → 均已出线",
            "逻辑：胜负不改变「进不进淘汰赛」，只决定头名/次席 → 32 强/16 强对位不同（K 组次席与 L 组次席同槽 M83。）",
            "逻辑：可轮换、试战术，但≠默契球 —— 没有「必须平局才能两人携手出线」的必要；头名之争仍可能真刀真枪"
          ],
          "drawBoost": 0,
          "xgScaleHome": 0.94,
          "xgScaleAway": 0.94,
          "notes": [
            "已出线：或轮换/练兵，xG 略降",
            "头名/次席影响淘汰对位，不额外抬平局"
          ],
          "summary": "已出线控分：胜负只争头/次席与淘汰对位，可练兵但≠默契球"
        },
        "xg_poisson_home": 1.31,
        "xg_poisson_away": 1.34,
        "xg_tier_calibrated": false,
        "score_prob": 12.4,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 12.4
          },
          {
            "score": "0-1",
            "prob": 9.5
          },
          {
            "score": "1-0",
            "prob": 9.3
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "迈阿密",
        "country": "美国",
        "venue": "Hard Rock Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 31,
        "humidity": 76,
        "altitude_m": 5,
        "rain_chance": 40,
        "wind": "海风 3级",
        "condition_cn": "迈阿密湿热",
        "impact_level": "MEDIUM",
        "impact_summary": "K组榜首战 · 哥伦 6 分 vs 葡萄牙 4 分",
        "home_adapt": 86,
        "away_adapt": 84,
        "weather_factors": [
          {
            "label": "31°C 湿度 76%",
            "impact": "中",
            "detail": "北京时间 07:30 · 同开 m72"
          }
        ],
        "forecast_updated": "2026-06-27 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "丁酉日",
          "day_summary": "丁酉日——火金相制",
          "hour_home": "见各场",
          "hour_home_element": "金"
        },
        "wuxing": {
          "home": {
            "verdict": "待定"
          },
          "away": {
            "verdict": "待定"
          },
          "summary": "文化解读"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "",
          "scenarios": []
        },
        "home_score": 48,
        "away_score": 52,
        "mystic_verdict": "榜首对话，火金相制宜对攻。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0,
        "tier_label": "势均力敌",
        "implied_tier": 0,
        "tier_gap": 0,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Portugal（约 53%）",
        "analysis": "K组榜首战 · 哥伦 6 分 vs 葡萄牙 4 分。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 10.8
            },
            {
              "score": "1-2",
              "prob": 8.6
            },
            {
              "score": "2-1",
              "prob": 8.4
            }
          ],
          "one_goal_win_pct": 19.4,
          "two_plus_win_pct": 17.9,
          "full_cover_pct": 0,
          "dog_hold_pct": null,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 3.13,
          "fair_totals_line": 2.75,
          "over_2_5_pct": 60.1,
          "over_3_pct": 37.5,
          "totals_lean_cn": "超 2.5 偏大比分（约 60.1%）；4球+偏少",
          "margin_risk_note": "净胜≥1 约 0%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 3.13,
          "fair_line": 2.75,
          "line_gap": -0.25,
          "over_pct": 60.1,
          "under_pct": 39.9,
          "signal": "low_line",
          "signal_cn": "参考偏低",
          "signal_color": "#7BB8D4",
          "signal_desc": "总进球参考低于合理值，模型偏大比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看大比分（超 2.5 约 60.1%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 35,
          "draw": 28,
          "away_win": 37
        },
        "display_summary": {
          "fav_name": "Portugal",
          "expected_total_goals": 2.63,
          "poisson_fav_win_pct": 37.6,
          "small_lead_pct": 20.7,
          "small_example_score": "0-1",
          "small_example_pct": 9.5,
          "big_cover_pct": 16.9,
          "big_example_score": "0-2",
          "big_example_pct": 6.4,
          "win_shape": {
            "fav_name": "Portugal",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 29.8%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 9.5,
                "pct": 25.3
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.2,
                "pct": 29.8
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 9.2,
                "pct": 24.5
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 7.7,
                "pct": 20.4
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.1
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 24.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.4
              }
            ],
            "fav_win_pct": 37
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 34 分",
            "first_goal_wait": 34,
            "fast_pct": 58.7,
            "moderate_pct": 14.8,
            "slow_pct": 26.6,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 58.7
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 26.6
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Colombia 暂无重要伤停 · Portugal 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "K组榜首战 · 哥伦 6 分 vs 葡萄牙 4 分"
            },
            {
              "icon": "🎯",
              "label": "出线博弈",
              "note": "已出线控分：胜负只争头/次席与淘汰对位，可练兵但≠默契球 · 已出线争顺位"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 极接近（平 +4%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.55,
            "baseline_away": 1.58,
            "adjusted_home": 1.31,
            "adjusted_away": 1.34,
            "note": "基准 xG 1.55–1.58 → 调整后 1.31–1.34"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "势均力敌",
            "summary_cn": "与模型 xG 对照：均衡 · 与赛前净胜看法基本一致"
          },
          "win_outlook": {
            "fav_name": "Portugal",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.1
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 24.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.4
              }
            ],
            "margin_line_cn": "净胜差距参考 · 势均力敌",
            "margin_meet_pct": 0,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球参考 2.5",
            "fair_totals_line": 2,
            "model_total_xg": 2.65,
            "totals_line_gap": 0.5,
            "totals_high_pct": 49.2,
            "totals_low_pct": 50.8,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 15.9,
            "win_margin2_low_total_pct": 6.4,
            "win_margin2_high_total_pct": 10.5,
            "readout_cn": "取胜约 37%；若取胜，以「险胜收工」为主（55.1%）。 对着赛前净胜参考，净胜≥1（全达标）约 0%；对着总进球参考 2.5，模型超线概率约 49.2%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.5
            },
            {
              "score": "0-1",
              "pct": 9.5
            },
            {
              "score": "1-0",
              "pct": 9.3
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 49.2,
            "gap_warning": null,
            "totals_outlook": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 49.2,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.6 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "净胜走向：双方实力接近",
            "sub_cn": "双方实力接近，暂无单侧净胜预期。 进球氛围：几乎五五开",
            "spread": {
              "level": "even",
              "label_cn": "势均力敌",
              "color": "#8A96A8",
              "fav_name": null,
              "market_expect_cn": "势均力敌",
              "meet_pct": null,
              "verdict_cn": "无明确净胜拉开预期",
              "headline_cn": "净胜走向：双方实力接近",
              "pill_cn": "双方实力接近，暂无单侧净胜预期。",
              "detail_cn": "赛前外界为势均力敌档，模型未给出哪一方能明显拉开净胜的信号。",
              "full_cover_pct": 0,
              "half_cover_pct": 0,
              "show_cover": false
            },
            "totals": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 49.2,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "draw_risk": null,
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "让球盘",
                "outlook": {
                  "level": "even",
                  "label_cn": "势均力敌",
                  "color": "#8A96A8",
                  "fav_name": null,
                  "market_expect_cn": "势均力敌",
                  "meet_pct": null,
                  "verdict_cn": "无明确净胜拉开预期",
                  "headline_cn": "净胜走向：双方实力接近",
                  "pill_cn": "双方实力接近，暂无单侧净胜预期。",
                  "detail_cn": "赛前外界为势均力敌档，模型未给出哪一方能明显拉开净胜的信号。",
                  "full_cover_pct": 0,
                  "half_cover_pct": 0,
                  "show_cover": false
                },
                "text": "双方实力接近，暂无单侧净胜预期。",
                "color": "#8A96A8",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "◎",
                "label": "进球氛围",
                "outlook": {
                  "level": "neutral",
                  "label_cn": "暂无明显倾向",
                  "color": "#8A96A8",
                  "meter_label_cn": "几乎五五开",
                  "meter_pos": 50,
                  "lean_side": "neutral",
                  "lean_strength": "none",
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 49.2,
                  "line_gap": 0.5,
                  "market_line": 2.5,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.5",
                  "caution_public_high": false
                },
                "text": "几乎五五开",
                "color": "#8A96A8",
                "muted": true
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Colombia",
              "first_goal_pct": 49.4,
              "start_score": "1-0",
              "fav_name": "Colombia",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 83.5,
              "small_lead_pct": 29.3,
              "big_lead_pct": 31.4,
              "fav_win_pct": 60.7,
              "fav_draw_pct": 22.8,
              "fav_lose_pct": 16.5,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Colombia 追平（平局）",
                  "pct": 22.8
                },
                {
                  "key": "win1",
                  "label": "Colombia 净胜1球翻盘（如 2-1）",
                  "pct": 29.3
                },
                {
                  "key": "win2",
                  "label": "Colombia 净胜≥2球翻盘（如 3-1）",
                  "pct": 31.4
                },
                {
                  "key": "upset_hold",
                  "label": "Colombia 保持胜果至终场",
                  "pct": 16.5
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34 分",
                "first_goal_wait": 34,
                "fast_pct": 51.5,
                "moderate_pct": 14.7,
                "slow_pct": 33.7,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.7
                  }
                ]
              },
              "big_delta": 14.5,
              "small_delta": 8.6,
              "narrative": "Colombia 先破门（已 1-0） → 「巩固防守」；Portugal 「组织反扑」。落后方压上反扑，比赛更开放，但热门要净胜两球以上仍须连续破门。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "Portugal",
              "first_goal_pct": 50.6,
              "start_score": "0-1",
              "fav_name": "Portugal",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 84.3,
              "small_lead_pct": 29.3,
              "big_lead_pct": 32.6,
              "fav_win_pct": 62,
              "fav_draw_pct": 22.3,
              "fav_lose_pct": 15.7,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Portugal 保持胜果（净胜≥1）",
                  "pct": 62
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 22.3
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 15.7
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34 分",
                "first_goal_wait": 34,
                "fast_pct": 51.5,
                "moderate_pct": 14.7,
                "slow_pct": 33.7,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.7
                  }
                ]
              },
              "big_delta": 15.7,
              "small_delta": 8.6,
              "narrative": "Portugal 先破门（已 0-1） → 「巩固防守」；Colombia 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Portugal",
                "state_label": "Portugal 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 55.1
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 24.5
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 20.4
                  }
                ],
                "margin_line_cn": "净胜差距参考 · 势均力敌",
                "margin_meet_pct": 15.7,
                "margin_half_pct": 0,
                "margin_fail_pct": 10.8,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.17,
                "totals_line_gap": 0.25,
                "totals_high_pct": 63.8,
                "totals_low_pct": 36.2,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 0,
                "win_margin2_low_total_pct": 0,
                "win_margin2_high_total_pct": 4.9,
                "readout_cn": "Portugal 已 1-0 领先：仍取胜约 15.7%。 对着总进球参考 2.5，模型超线概率约 63.8%。 若再扩大，偏「险胜收工」。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.6 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 49.2,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 24,
              "readout_cn": "Portugal · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": null,
            "archetype": {
              "tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 24,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.58,
            "xg_away_ht": 0.59,
            "xg_home_2h": 0.73,
            "xg_away_2h": 0.75,
            "home_win": 28.4,
            "draw": 42.6,
            "away_win": 29,
            "top_score": "0-0",
            "top_score_prob": 31,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 31
              },
              {
                "score": "0-1",
                "prob": 18.3
              },
              {
                "score": "1-0",
                "prob": 18
              }
            ],
            "ht_goals_expected": 1.17,
            "ht_over_0_5_pct": 69,
            "ht_over_1_5_pct": 32.6,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.58–0.59（约占全场 44%） · 最可能 0-0（31%） · 胜平负 28.4/42.6/29 · 半场≥1球约 69%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Portugal · 常规对抗。 · 与模型 xG 对照：均衡 · 与赛前净胜看法基本一致（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 3.13,
          "xg_gap": 0.03,
          "xg_home": 1.55,
          "xg_away": 1.58,
          "xg_baseline_home": 1.55,
          "xg_baseline_away": 1.58,
          "xg_note": "结构推演用基准 xG 1.55–1.58（进球氛围用调整后 1.31–1.34）",
          "lean_note": "基准 xG 结构偏多球，但进球氛围偏闷（预测约 2.6）——作岔路预警，非默认剧本",
          "fav_name": "Portugal",
          "dog_name": "Colombia",
          "fav_xg": 1.58,
          "dog_xg": 1.55,
          "path_type": "low",
          "path_label": "铁局/小比分",
          "lean": "prevention_high",
          "lean_cn": "预防大比分",
          "lean_mode": "prevention",
          "lean_confidence": 60.1,
          "prevention_reason_cn": "基准 xG 结构偏多球，但进球氛围偏闷（预测约 2.6）——作岔路预警，非默认剧本",
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [
            {
              "key": "dog_goal",
              "label": "Colombia进球",
              "detail": "弱队破门 → 预防大比分抬升；对照弱队开花/对攻路径",
              "severity": "high"
            },
            {
              "key": "dog_eff",
              "label": "弱队效率≥1.0",
              "detail": "弱队射门兑现超预期 → 上调大比分留意（样本：效率≥1.2 易凑 3 球+）",
              "severity": "high"
            },
            {
              "key": "fav_only",
              "label": "仅Portugal进球",
              "detail": "热门单榜领先、弱队仍无球 → 仍按进球氛围小比分，不必因路径升级",
              "severity": "calm"
            }
          ],
          "prob_over_line": 60.1,
          "prob_meet_guess": 60.1,
          "guess_n": 3,
          "prob_4_plus": 37.5,
          "prob_2_or_less": 39.9,
          "totals_line": 2.5,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 45
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 23
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 20
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 13
            }
          ],
          "tags": [
            {
              "key": "prevention_high",
              "label": "预防大比分",
              "color": "#E8A54B",
              "bg": "rgba(232,165,75,0.12)"
            },
            {
              "key": "even_xg",
              "label": "xG接近",
              "color": "#5BBF8A",
              "bg": "rgba(91,191,138,0.08)"
            },
            {
              "key": "low_scoring",
              "label": "小比分",
              "color": "#7BB8D4",
              "bg": "rgba(123,184,212,0.1)"
            }
          ],
          "watch_notes": [
            "弱队上半场效率≥1.0 → 关注弱队开花路径",
            "结构类似 m12/m26——热门爆发路径需防 4+ 球"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 3.13 · Portugal 1.58 / Colombia 1.55 → 主路径「铁局/小比分」约 45% · 预防大比分。 超 2.5 约 60.1% · ≤2球 39.9%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": false,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "K",
        "label": "K组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Colombia",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 4,
            "ga": 1
          },
          {
            "team": "Portugal",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 6,
            "ga": 1
          },
          {
            "team": "Congo DR",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 1,
            "ga": 2
          },
          {
            "team": "Uzbekistan",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 1,
            "ga": 8
          }
        ],
        "home": {
          "team": "Colombia",
          "rank": 1,
          "pts": 6,
          "played": 2,
          "if_1st": "32强 M87 · K 组第 1 vs 最佳第 3（D/E/I/J/L 池） → 当前 L 组第 2倾向 Ghana",
          "if_1st_r16": "16强 M96 · 对阵 B 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "葡萄牙头名通道",
          "if_2nd": "32强 M83 · K 组第 2 vs L 组第 2 → 当前 L 组第 1倾向 England（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者",
          "if_2nd_corridor": "哥伦比亚/乌兹别克次席 → 16 强或遇西班牙/阿根廷半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 J/L/I/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Portugal",
          "rank": 2,
          "pts": 4,
          "played": 2,
          "if_1st": "32强 M87 · K 组第 1 vs 最佳第 3（D/E/I/J/L 池） → 当前 L 组第 2倾向 Ghana",
          "if_1st_r16": "16强 M96 · 对阵 B 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "葡萄牙头名通道",
          "if_2nd": "32强 M83 · K 组第 2 vs L 组第 2 → 当前 L 组第 1倾向 England（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者",
          "if_2nd_corridor": "哥伦比亚/乌兹别克次席 → 16 强或遇西班牙/阿根廷半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 J/L/I/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "L 组：头名 England 4 分 · 次席 Ghana 同分（32强绑定组）",
          "J 组：头名 Argentina 6 分 · 次席 Austria 3 分（32强绑定组）",
          "G 组 Belgium 5 分领跑",
          "H 组 Spain 7 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 7 分领跑",
          "I 组 France 9 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "K 组次席与 L 组次席同槽 M83。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Colombia",
          "reason": "Colombia、Portugal 均已锁定出线（输球亦稳居前二）。胜负不影响晋级，只争头名/次席及淘汰赛对位（K 组次席与 L 组次席同槽 M83。）。可轮换练兵，但≠默契球——没有「必须平局才能携手出线」的逻辑。",
          "logic_steps": [
            "Colombia 6 分 vs Portugal 4 分；同组另一场 Congo DR（1 分）vs Uzbekistan（0 分）",
            "逻辑：即使本场输球，Colombia、Portugal 仍稳居前二 → 均已出线",
            "逻辑：胜负不改变「进不进淘汰赛」，只决定头名/次席 → 32 强/16 强对位不同（K 组次席与 L 组次席同槽 M83。）",
            "逻辑：可轮换、试战术，但≠默契球 —— 没有「必须平局才能两人携手出线」的必要；头名之争仍可能真刀真枪"
          ],
          "optimal_summary": "策略最优解（推演）：Colombia 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；若次席仍紧追，仍宜控制场面——可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。",
          "qual_model": {
            "scenario_type": "path_control",
            "mutual_draw_advances": false,
            "path_control": true,
            "asymmetric_third": null,
            "both_already_qualified": true,
            "home_already_qualified": true,
            "away_already_qualified": true,
            "home_out_if_loss": false,
            "away_out_if_loss": false,
            "logic_steps": [
              "Colombia 6 分 vs Portugal 4 分；同组另一场 Congo DR（1 分）vs Uzbekistan（0 分）",
              "逻辑：即使本场输球，Colombia、Portugal 仍稳居前二 → 均已出线",
              "逻辑：胜负不改变「进不进淘汰赛」，只决定头名/次席 → 32 强/16 强对位不同（K 组次席与 L 组次席同槽 M83。）",
              "逻辑：可轮换、试战术，但≠默契球 —— 没有「必须平局才能两人携手出线」的必要；头名之争仍可能真刀真枪"
            ],
            "drawBoost": 0,
            "xgScaleHome": 0.94,
            "xgScaleAway": 0.94,
            "notes": [
              "已出线：或轮换/练兵，xG 略降",
              "头名/次席影响淘汰对位，不额外抬平局"
            ],
            "summary": "已出线控分：胜负只争头/次席与淘汰对位，可练兵但≠默契球"
          }
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Colombia 若取胜：积分 9，K 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Portugal 若取胜：积分 7，客场抢分将改变 K 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 L 组：头名 England 4 分 · 次席 Ghana 同分（32强绑定组） · J 组：头名 Argentina 6 分 · 次席 Austria 3 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：K 组次席与 L 组次席同槽 M83。"
        ]
      }
    },
    {
      "id": "m72",
      "fifa_match_number": 72,
      "fifa_match_id": "400021500",
      "group": "K",
      "matchday": 3,
      "date": "2026-06-27",
      "time": "19:30",
      "time_local": "19:30 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "07:30",
      "date_beijing": "6月28日",
      "time_beijing_full": "北京时间 6月28日 07:30",
      "venue": "Mercedes-Benz Stadium",
      "city": "Atlanta, USA",
      "note": "K组末轮 · 刚果(金) vs 乌兹别克 · 亚特兰大",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-4-2",
          "home": "Mpebe; Muyuma, Mukau, Batubinsika; Mbemba, Mwamba; Bamba, Kakuta, Wissa; Bakambu",
          "away": "Nesterov; Khusanov, Ismailov, Alikulov; Shomurodov, Jaloliddinov; Hamrobekov, Nasirov; Turgunboev, Abdullaev",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Congo DR",
        "iso": "cd",
        "flag": "",
        "fifa_rank": 61,
        "rating": 63,
        "form": [
          "D",
          "L",
          "W",
          "D",
          "W"
        ],
        "coach": "Sébastien Desabre",
        "stars": [
          {
            "name": "Yoane Wissa",
            "pos": "ST",
            "club": "Brentford",
            "rating": 8,
            "desc": "锋线"
          },
          {
            "name": "Chancel Mbemba",
            "pos": "CB",
            "club": "Marseille",
            "rating": 7.8,
            "desc": "防线"
          }
        ],
        "star": {
          "name": "Yoane Wissa",
          "pos": "ST",
          "club": "Brentford",
          "rating": 8,
          "desc": "1 分须胜"
        },
        "injuries": [
          {
            "player": "Yoane Wissa",
            "status": "FIT",
            "note": "1 分须胜",
            "confirmed": true
          }
        ],
        "rumors": [
          "刚果(金)末轮须 3 分争出线"
        ]
      },
      "away": {
        "name": "Uzbekistan",
        "iso": "uz",
        "flag": "",
        "fifa_rank": 62,
        "rating": 58,
        "form": [
          "L",
          "L",
          "D",
          "W",
          "L"
        ],
        "coach": "Slavisa Jokanovic",
        "stars": [
          {
            "name": "Eldor Shomurodov",
            "pos": "ST",
            "club": "Cagliari",
            "rating": 7.5,
            "desc": "锋线"
          }
        ],
        "star": {
          "name": "Eldor Shomurodov",
          "pos": "ST",
          "club": "Cagliari",
          "rating": 7.5,
          "desc": "0 分出局"
        },
        "injuries": [],
        "rumors": [
          "乌兹别克 0 分已出局"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 0,
        "recent": [],
        "note": "无大赛交锋"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 72 · 刚果(金) vs 乌兹别克 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-27T06:00:10+08:00"
      },
      "prediction": {
        "home_win": 57,
        "draw": 26,
        "away_win": 17,
        "score": "1-0",
        "confidence": 74,
        "xg_home": 1.48,
        "xg_away": 0.72,
        "key_factor": "K组末轮 · 刚果(金) 1 分须胜 vs 乌兹别克 0 分 · Wissa 穿盘 · 泊松 2-0/1-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 17
          },
          {
            "score": "2-0",
            "prob": 15.1
          },
          {
            "score": "1-1",
            "prob": 9.7
          },
          {
            "score": "0-0",
            "prob": 9.5
          },
          {
            "score": "3-0",
            "prob": 9
          },
          {
            "score": "2-1",
            "prob": 8.6
          },
          {
            "score": "0-1",
            "prob": 5.4
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Congo DR 暂列 K 组第 3（1 分 · 已赛 2 场） vs Uzbekistan 第 4（0 分 · 已赛 2 场）；组内 Colombia 6分、Portugal 4分 领先；直接对话权重极高"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "亚特兰大夏午 · 29°C · 湿度 68% · 降雨概率 30% · 封闭；刚果(金) 1 分须胜 vs 乌兹别克 0 分（29°C 封闭）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "K组末轮 · 刚果(金) 1 分须胜 vs 乌兹别克 0 分 · Wissa 穿盘 · 泊松 2-0/1-0"
          }
        ],
        "base_home_win": 55.2,
        "base_draw": 26.5,
        "base_away_win": 18.2,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": false,
          "closeXg": false,
          "gap": 0.76,
          "notes": [],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.78,
        "xg_poisson_away": 0.57,
        "xg_tier_calibrated": true,
        "score_prob": 17,
        "score_top3": [
          {
            "score": "1-0",
            "prob": 17
          },
          {
            "score": "2-0",
            "prob": 15.1
          },
          {
            "score": "1-1",
            "prob": 9.7
          }
        ],
        "expected_score": "2-1"
      },
      "weather": {
        "city": "亚特兰大",
        "country": "美国",
        "venue": "Mercedes-Benz Stadium",
        "pitch_surface": "人工草（有顶盖）",
        "stadium_type": "封闭式",
        "temp": 29,
        "humidity": 68,
        "altitude_m": 320,
        "rain_chance": 30,
        "wind": "封闭",
        "condition_cn": "亚特兰大夏午",
        "impact_level": "LOW",
        "impact_summary": "刚果(金) 1 分须胜 vs 乌兹别克 0 分",
        "home_adapt": 82,
        "away_adapt": 76,
        "weather_factors": [
          {
            "label": "29°C 封闭",
            "impact": "低",
            "detail": "北京时间 07:30"
          }
        ],
        "forecast_updated": "2026-06-27 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "丁酉日",
          "day_summary": "丁酉日——火金相制",
          "hour_home": "见各场",
          "hour_home_element": "金"
        },
        "wuxing": {
          "home": {
            "verdict": "待定"
          },
          "away": {
            "verdict": "待定"
          },
          "summary": "文化解读"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "",
          "scenarios": []
        },
        "home_score": 65,
        "away_score": 35,
        "mystic_verdict": "刚果(金)须破局，乌兹别克守势。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.75,
        "tier_label": "Congo DR -0.75 · Uzbekistan +0.75",
        "implied_tier": 0.25,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Congo DR（约 65%）",
        "analysis": "刚果(金) 1 分须胜 vs 乌兹别克 0 分。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 16.5
            },
            {
              "score": "2-0",
              "prob": 12.2
            },
            {
              "score": "1-1",
              "prob": 11.9
            }
          ],
          "one_goal_win_pct": 26.9,
          "two_plus_win_pct": 28.3,
          "full_cover_pct": 55.2,
          "dog_hold_pct": 44.8,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0.104,
          "dog_cover_ev": -0.104,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 2.2,
          "fair_totals_line": 2.25,
          "over_2_5_pct": 37.5,
          "over_3_pct": 17.7,
          "totals_lean_cn": "超 2.5 偏小比分（约 62.5%）；4球+偏少",
          "margin_risk_note": "净胜≥1 约 55.2%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.2,
          "fair_line": 2.25,
          "line_gap": 0.25,
          "over_pct": 37.5,
          "under_pct": 62.5,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 2.5 约 62.5% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": 2,
          "draw": -1,
          "away_win": -1
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 -1% · 客 -1%",
        "adjusted_probs": {
          "home_win": 57,
          "draw": 26,
          "away_win": 17
        },
        "display_summary": {
          "fav_name": "Congo DR",
          "expected_total_goals": 2.18,
          "poisson_fav_win_pct": 55.2,
          "small_lead_pct": 26.9,
          "small_example_score": "1-0",
          "small_example_pct": 16.5,
          "big_cover_pct": 28.3,
          "big_example_score": "2-0",
          "big_example_pct": 12.2,
          "win_shape": {
            "fav_name": "Congo DR",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 33%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 16.5,
                "pct": 29.8
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.5,
                "pct": 19
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 18.2,
                "pct": 33
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 10.1,
                "pct": 18.2
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 48.8
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 18.2
              }
            ],
            "fav_win_pct": 57
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 40.9 分",
            "first_goal_wait": 40.9,
            "fast_pct": 52,
            "moderate_pct": 14.7,
            "slow_pct": 33.3,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 52
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.7
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 33.3
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Congo DR 暂无重要伤停 · Uzbekistan 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "刚果(金) 1 分须胜 vs 乌兹别克 0 分"
            }
          ],
          "xg_context": {
            "baseline_home": 1.48,
            "baseline_away": 0.72,
            "adjusted_home": 1.48,
            "adjusted_away": 0.72,
            "note": "基准 xG 1.48–0.72（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "Congo DR -0.25 · Uzbekistan +0.25",
            "market_tier_label": "Congo DR -0.75 · Uzbekistan +0.75",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5"
          },
          "win_outlook": {
            "fav_name": "Congo DR",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 48.8
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 18.2
              }
            ],
            "margin_line_cn": "Congo DR · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 55.2,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球参考 2.5",
            "fair_totals_line": 2.25,
            "model_total_xg": 2.2,
            "totals_line_gap": 0.25,
            "totals_high_pct": 37.5,
            "totals_low_pct": 62.5,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 28.7,
            "win_margin2_low_total_pct": 12.2,
            "win_margin2_high_total_pct": 16.1,
            "readout_cn": "取胜约 57%；若取胜，以「险胜收工」为主（48.8%）。 对着赛前净胜参考，净胜≥1（全达标）约 55.2%；对着总进球参考 2.5，模型超线概率约 37.5%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 2.5。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 16.5
            },
            {
              "score": "2-0",
              "pct": 12.2
            },
            {
              "score": "1-1",
              "pct": 11.9
            }
          ],
          "totals_view": {
            "expected_total": 2.2,
            "fair_line": 2.25,
            "market_line": 2.5,
            "line_gap": 0.25,
            "over_pct": 37.5,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 38,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 37.5,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.2 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Congo DR -0.75 穿盘：达到预期较有希望",
            "sub_cn": "Congo DR -0.75 穿盘 55.2% · Uzbekistan +0.75 守住 44.8% 进球氛围：略偏闷",
            "spread": {
              "level": "likely",
              "label_cn": "达到预期较有希望",
              "color": "#5BBF8A",
              "fav_name": "Congo DR",
              "dog_name": "Uzbekistan",
              "fav_handicap_cn": "Congo DR -0.75",
              "dog_handicap_cn": "Uzbekistan +0.75",
              "market_expect_cn": "Congo DR -0.75 · 净胜≥1",
              "meet_pct": 55.2,
              "dog_hold_pct": 44.8,
              "meet_pct_label": "Congo DR -0.75 穿盘概率",
              "dog_hold_label": "Uzbekistan +0.75 守住概率",
              "verdict_cn": "达到预期较有希望",
              "headline_cn": "Congo DR -0.75 穿盘：达到预期较有希望",
              "pill_cn": "Congo DR -0.75 穿盘 55.2% · Uzbekistan +0.75 守住 44.8%",
              "detail_cn": "Congo DR -0.75 穿盘约 55.2%（净胜≥1） · Uzbekistan +0.75 守住约 44.8%；模型认为热门穿盘概率相对较高。",
              "extra_stats_cn": "",
              "full_cover_pct": 55.2,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": 0.5,
              "show_cover": true
            },
            "totals": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 38,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 37.5,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "draw_risk": null,
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "让球盘",
                "outlook": {
                  "level": "likely",
                  "label_cn": "达到预期较有希望",
                  "color": "#5BBF8A",
                  "fav_name": "Congo DR",
                  "dog_name": "Uzbekistan",
                  "fav_handicap_cn": "Congo DR -0.75",
                  "dog_handicap_cn": "Uzbekistan +0.75",
                  "market_expect_cn": "Congo DR -0.75 · 净胜≥1",
                  "meet_pct": 55.2,
                  "dog_hold_pct": 44.8,
                  "meet_pct_label": "Congo DR -0.75 穿盘概率",
                  "dog_hold_label": "Uzbekistan +0.75 守住概率",
                  "verdict_cn": "达到预期较有希望",
                  "headline_cn": "Congo DR -0.75 穿盘：达到预期较有希望",
                  "pill_cn": "Congo DR -0.75 穿盘 55.2% · Uzbekistan +0.75 守住 44.8%",
                  "detail_cn": "Congo DR -0.75 穿盘约 55.2%（净胜≥1） · Uzbekistan +0.75 守住约 44.8%；模型认为热门穿盘概率相对较高。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 55.2,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "Congo DR -0.75 穿盘 55.2% · Uzbekistan +0.75 守住 44.8%",
                "color": "#5BBF8A",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "◎",
                "label": "进球氛围",
                "outlook": {
                  "level": "mild_low",
                  "label_cn": "略倾向沉闷",
                  "color": "#7BB8D4",
                  "meter_label_cn": "略倾向沉闷",
                  "meter_pos": 38,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 37.5,
                  "line_gap": 0.25,
                  "market_line": 2.5,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.5",
                  "caution_public_high": false
                },
                "text": "略偏闷（弱）",
                "color": "#7BB8D4",
                "muted": true
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Congo DR",
              "first_goal_pct": 67.3,
              "start_score": "1-0",
              "fav_name": "Congo DR",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 94.9,
              "small_lead_pct": 31.7,
              "big_lead_pct": 48.1,
              "fav_win_pct": 79.9,
              "fav_draw_pct": 15,
              "fav_lose_pct": 5.2,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Congo DR 保持胜果（净胜≥1）",
                  "pct": 79.9
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 15
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 5.2
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 41.9 分",
                "first_goal_wait": 41.9,
                "fast_pct": 44.4,
                "moderate_pct": 14.1,
                "slow_pct": 41.4,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 44.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.1
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 41.4
                  }
                ]
              },
              "big_delta": 19.8,
              "small_delta": 4.8,
              "narrative": "Congo DR 先破门（已 1-0） → 「巩固防守」；Uzbekistan 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Congo DR",
                "state_label": "Congo DR 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 48.8
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 33
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 18.2
                  }
                ],
                "margin_line_cn": "Congo DR · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 79.9,
                "margin_half_pct": 0,
                "margin_fail_pct": 31.7,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.76,
                "totals_line_gap": 0.25,
                "totals_high_pct": 52.5,
                "totals_low_pct": 47.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 36.7,
                "win_margin2_low_total_pct": 19.6,
                "win_margin2_high_total_pct": 28.6,
                "readout_cn": "Congo DR 已 1-0 领先：仍取胜约 79.9%。 对着总进球参考 2.5，模型超线概率约 52.5%。 常见 2-0 收尾（相对总进球参考 2.5仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Uzbekistan",
              "first_goal_pct": 32.7,
              "start_score": "0-1",
              "fav_name": "Congo DR",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 54.4,
              "small_lead_pct": 16.6,
              "big_lead_pct": 9.3,
              "fav_win_pct": 25.8,
              "fav_draw_pct": 28.6,
              "fav_lose_pct": 45.6,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Congo DR 追平（平局）",
                  "pct": 28.6
                },
                {
                  "key": "win1",
                  "label": "Congo DR 净胜1球翻盘（如 2-1）",
                  "pct": 16.6
                },
                {
                  "key": "win2",
                  "label": "Congo DR 净胜≥2球翻盘（如 3-1）",
                  "pct": 9.3
                },
                {
                  "key": "upset_hold",
                  "label": "Uzbekistan 保持胜果至终场",
                  "pct": 45.6
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 40 分",
                "first_goal_wait": 40,
                "fast_pct": 45.9,
                "moderate_pct": 14.3,
                "slow_pct": 39.8,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 45.9
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.3
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 39.8
                  }
                ]
              },
              "big_delta": -19,
              "small_delta": -10.3,
              "narrative": "Uzbekistan 先破门（已 0-1） → 「巩固防守」；Congo DR 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.2 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 37.5,
              "type_tags": [
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 23,
              "readout_cn": "Congo DR · 进球偏少。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": null,
            "archetype": {
              "tags": [
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 23,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.65,
            "xg_away_ht": 0.32,
            "xg_home_2h": 0.83,
            "xg_away_2h": 0.4,
            "home_win": 38,
            "draw": 46.2,
            "away_win": 15.8,
            "top_score": "0-0",
            "top_score_prob": 37.9,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 37.9
              },
              {
                "score": "1-0",
                "prob": 24.6
              },
              {
                "score": "0-1",
                "prob": 12.1
              }
            ],
            "ht_goals_expected": 0.97,
            "ht_over_0_5_pct": 62.1,
            "ht_over_1_5_pct": 25.3,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.65–0.32（约占全场 44%） · 最可能 0-0（37.9%） · 胜平负 38/46.2/15.8 · 半场≥1球约 62.1%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Congo DR · 进球偏少。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.2,
          "xg_gap": 0.76,
          "xg_home": 1.48,
          "xg_away": 0.72,
          "xg_baseline_home": 1.48,
          "xg_baseline_away": 0.72,
          "xg_note": "结构推演用基准 xG 1.48–0.72",
          "lean_note": "与进球氛围同向——可参考权重提高",
          "fav_name": "Congo DR",
          "dog_name": "Uzbekistan",
          "fav_xg": 1.48,
          "dog_xg": 0.72,
          "path_type": "dog_bloom",
          "path_label": "弱队开花",
          "lean": "low",
          "lean_cn": "小比分预测",
          "lean_mode": "prediction",
          "lean_confidence": 62.5,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": "与进球氛围同向——可参考权重提高",
          "modules_aligned": true,
          "live_watch": [],
          "prob_over_line": 37.5,
          "prob_meet_guess": 37.5,
          "guess_n": 3,
          "prob_4_plus": 17.7,
          "prob_2_or_less": 62.5,
          "totals_line": 2.5,
          "scenarios": [
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 40
            },
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 40
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 11
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 9
            }
          ],
          "tags": [
            {
              "key": "lean_low",
              "label": "小比分预测",
              "color": "#7BB8D4",
              "bg": "rgba(123,184,212,0.1)"
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "color": "#E8B84B",
              "bg": "rgba(232,184,75,0.12)"
            }
          ],
          "watch_notes": [],
          "pattern_note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "summary_cn": "【路径·基准 xG】合计 2.2 · Congo DR 1.48 / Uzbekistan 0.72 → 主路径「弱队开花」约 40% · 小比分预测。 超 2.5 约 37.5% · ≤2球 62.5%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "K",
        "label": "K组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Colombia",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 4,
            "ga": 1
          },
          {
            "team": "Portugal",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 6,
            "ga": 1
          },
          {
            "team": "Congo DR",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 1,
            "ga": 2
          },
          {
            "team": "Uzbekistan",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 1,
            "ga": 8
          }
        ],
        "home": {
          "team": "Congo DR",
          "rank": 3,
          "pts": 1,
          "played": 2,
          "if_1st": "32强 M87 · K 组第 1 vs 最佳第 3（D/E/I/J/L 池） → 当前 L 组第 2倾向 Ghana",
          "if_1st_r16": "16强 M96 · 对阵 B 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "葡萄牙头名通道",
          "if_2nd": "32强 M83 · K 组第 2 vs L 组第 2 → 当前 L 组第 1倾向 England（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者",
          "if_2nd_corridor": "哥伦比亚/乌兹别克次席 → 16 强或遇西班牙/阿根廷半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 J/L/I/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Uzbekistan",
          "rank": 4,
          "pts": 0,
          "played": 2,
          "if_1st": "32强 M87 · K 组第 1 vs 最佳第 3（D/E/I/J/L 池） → 当前 L 组第 2倾向 Ghana",
          "if_1st_r16": "16强 M96 · 对阵 B 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "葡萄牙头名通道",
          "if_2nd": "32强 M83 · K 组第 2 vs L 组第 2 → 当前 L 组第 1倾向 England（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者",
          "if_2nd_corridor": "哥伦比亚/乌兹别克次席 → 16 强或遇西班牙/阿根廷半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 J/L/I/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "L 组：头名 England 4 分 · 次席 Ghana 同分（32强绑定组）",
          "J 组：头名 Argentina 6 分 · 次席 Austria 3 分（32强绑定组）",
          "G 组 Belgium 5 分领跑",
          "H 组 Spain 7 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 7 分领跑",
          "I 组 France 9 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "K 组次席与 L 组次席同槽 M83。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "Congo DR（1 分）与 Uzbekistan（0 分）末轮生死战，均无控分空间，须全力抢 3 分。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Congo DR 若取胜：积分 4，K 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Uzbekistan 若取胜：积分 3，客场抢分将改变 K 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 L 组：头名 England 4 分 · 次席 Ghana 同分（32强绑定组） · J 组：头名 Argentina 6 分 · 次席 Austria 3 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：K 组次席与 L 组次席同槽 M83。"
        ]
      }
    },
    {
      "id": "m69",
      "fifa_match_number": 69,
      "fifa_match_id": "400021497",
      "group": "J",
      "matchday": 3,
      "date": "2026-06-27",
      "time": "21:00",
      "time_local": "20:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "10:00",
      "date_beijing": "6月28日",
      "time_beijing_full": "北京时间 6月28日 10:00",
      "venue": "Arrowhead Stadium",
      "city": "Kansas City, USA",
      "note": "J组末轮 · 阿尔及利亚 vs 奥地利 · 堪萨斯城",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Mandrea; Atal, Mandi, Belkheir; Aouar, Bentaleb; Mahrez, Bennacer, Bounedjah; Bounedjah, Slimani",
          "away": "Pentz; Posch, Alaba, Lienhart; Seiwald, Schlager; Baumgartner, Sabitzer, Grüll; Arnautović",
          "source": "FotMob 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Algeria",
        "iso": "dz",
        "flag": "",
        "fifa_rank": 46,
        "rating": 67,
        "form": [
          "W",
          "L",
          "W",
          "D",
          "W"
        ],
        "coach": "Djamel Belmadi",
        "stars": [
          {
            "name": "Riyad Mahrez",
            "pos": "RW",
            "club": "Al-Ahli",
            "rating": 8.2,
            "desc": "肋部"
          },
          {
            "name": "Ismaël Bennacer",
            "pos": "CM",
            "club": "Milan",
            "rating": 7.9,
            "desc": "组织"
          }
        ],
        "star": {
          "name": "Riyad Mahrez",
          "pos": "RW",
          "club": "Al-Ahli",
          "rating": 8.2,
          "desc": "3 分须胜"
        },
        "injuries": [
          {
            "player": "Riyad Mahrez",
            "status": "FIT",
            "note": "3 分须胜",
            "confirmed": true
          }
        ],
        "rumors": [
          "阿尔及利亚末轮生死战"
        ]
      },
      "away": {
        "name": "Austria",
        "iso": "at",
        "flag": "",
        "fifa_rank": 28,
        "rating": 74,
        "form": [
          "W",
          "L",
          "W",
          "D",
          "D"
        ],
        "coach": "Ralf Rangnick",
        "stars": [
          {
            "name": "David Alaba",
            "pos": "CB",
            "club": "Real Madrid",
            "rating": 8.5,
            "desc": "防线"
          },
          {
            "name": "Marko Arnautović",
            "pos": "ST",
            "club": "Inter",
            "rating": 8,
            "desc": "锋线"
          }
        ],
        "star": {
          "name": "David Alaba",
          "pos": "CB",
          "club": "Real Madrid",
          "rating": 8.5,
          "desc": "3 分同分"
        },
        "injuries": [
          {
            "player": "David Alaba",
            "status": "FIT",
            "note": "3 分同分",
            "confirmed": true
          }
        ],
        "rumors": [
          "奥地利须胜争 J 组次席"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "0-2",
            "winner": "Austria"
          }
        ],
        "note": "奥地利友谊赛胜"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 69 · 阿尔及利亚 vs 奥地利 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-27T06:00:10+08:00"
      },
      "prediction": {
        "home_win": 27,
        "draw": 47,
        "away_win": 26,
        "score": "1-1",
        "confidence": 68,
        "xg_home": 1.52,
        "xg_away": 1.45,
        "key_factor": "J组末轮 · 阿尔/奥各 3 分生死战 · Mahrez vs Alaba · 泊松 1-1/2-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.4
          },
          {
            "score": "1-0",
            "prob": 9.5
          },
          {
            "score": "0-1",
            "prob": 9.3
          },
          {
            "score": "2-1",
            "prob": 8.3
          },
          {
            "score": "1-2",
            "prob": 8.1
          },
          {
            "score": "0-0",
            "prob": 7.1
          },
          {
            "score": "2-0",
            "prob": 6.3
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Algeria 暂列 J 组第 3（3 分 · 已赛 2 场） vs Austria 第 2（3 分 · 已赛 2 场）；组内 Argentina 6分 领先；直接对话权重极高"
          },
          {
            "icon": "🎯",
            "label": "出线博弈",
            "text": "Austria 已锁前二；Algeria 仍不确定：输球基本出局，握手可争第 3 进「12 进 8」争八池（4 分），赢球则稳进 · 强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契） · 已出线争顺位"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "堪萨斯城夏午 · 30°C · 湿度 55% · 降雨概率 25% · 南风 3级；J组同分生死战 · 阿尔及利亚 vs 奥地利各 3 分（30°C · 20:00 CT）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "J组末轮 · 阿尔/奥各 3 分生死战 · Mahrez vs Alaba · 泊松 1-1/2-1"
          }
        ],
        "base_home_win": 32,
        "base_draw": 38,
        "base_away_win": 30,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 13,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.07,
          "notes": [
            "xG 极接近",
            "争八不对称：弱队保平争第三，平局权重上调",
            "Algeria 输球出局 · 平局争第 3 · 赢球稳进"
          ],
          "qual_dynamics": {
            "scenario_type": "asymmetric_third",
            "mutual_draw_advances": false,
            "path_control": false,
            "asymmetric_third": {
              "strong_side": "Austria",
              "weak_side": "Algeria",
              "weak_is_home": true,
              "weak_dead_on_loss": true,
              "weak_third_live_on_draw": true,
              "weak_through_on_win": true,
              "weak_likely_underdog": true,
              "draw_pts_if_draw": 4
            },
            "both_already_qualified": false,
            "home_already_qualified": false,
            "away_already_qualified": true,
            "home_out_if_loss": true,
            "away_out_if_loss": false,
            "logic_steps": [
              "Algeria 3 分 vs Austria 3 分；同组另一场 Argentina（6 分）vs Jordan（0 分）",
              "逻辑：Austria 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵",
              "逻辑：Algeria 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（4 分）",
              "逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守",
              "逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）"
            ],
            "drawBoost": 9,
            "xgScaleHome": 0.93,
            "xgScaleAway": 0.96,
            "notes": [
              "争八不对称：弱队保平争第三，平局权重上调",
              "Algeria 输球出局 · 平局争第 3 · 赢球稳进"
            ],
            "summary": "争八不对称默契：强队已出线，弱队保平争第三（输球出局）"
          }
        },
        "qual_dynamics": {
          "scenario_type": "asymmetric_third",
          "mutual_draw_advances": false,
          "path_control": false,
          "asymmetric_third": {
            "strong_side": "Austria",
            "weak_side": "Algeria",
            "weak_is_home": true,
            "weak_dead_on_loss": true,
            "weak_third_live_on_draw": true,
            "weak_through_on_win": true,
            "weak_likely_underdog": true,
            "draw_pts_if_draw": 4
          },
          "both_already_qualified": false,
          "home_already_qualified": false,
          "away_already_qualified": true,
          "home_out_if_loss": true,
          "away_out_if_loss": false,
          "logic_steps": [
            "Algeria 3 分 vs Austria 3 分；同组另一场 Argentina（6 分）vs Jordan（0 分）",
            "逻辑：Austria 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵",
            "逻辑：Algeria 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（4 分）",
            "逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守",
            "逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）"
          ],
          "drawBoost": 9,
          "xgScaleHome": 0.93,
          "xgScaleAway": 0.96,
          "notes": [
            "争八不对称：弱队保平争第三，平局权重上调",
            "Algeria 输球出局 · 平局争第 3 · 赢球稳进"
          ],
          "summary": "争八不对称默契：强队已出线，弱队保平争第三（输球出局）"
        },
        "xg_poisson_home": 1.33,
        "xg_poisson_away": 1.31,
        "xg_tier_calibrated": false,
        "score_prob": 12.4,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 12.4
          },
          {
            "score": "1-0",
            "prob": 9.5
          },
          {
            "score": "0-1",
            "prob": 9.3
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "堪萨斯城",
        "country": "美国",
        "venue": "Arrowhead Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 30,
        "humidity": 55,
        "altitude_m": 280,
        "rain_chance": 25,
        "wind": "南风 3级",
        "condition_cn": "堪萨斯城夏午",
        "impact_level": "MEDIUM",
        "impact_summary": "J组同分生死战 · 阿尔及利亚 vs 奥地利各 3 分",
        "home_adapt": 80,
        "away_adapt": 82,
        "weather_factors": [
          {
            "label": "30°C · 20:00 CT",
            "impact": "中",
            "detail": "北京时间 10:00 · 同开 m70"
          }
        ],
        "forecast_updated": "2026-06-27 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "丁酉日",
          "day_summary": "丁酉日——火金相制",
          "hour_home": "见各场",
          "hour_home_element": "金"
        },
        "wuxing": {
          "home": {
            "verdict": "待定"
          },
          "away": {
            "verdict": "待定"
          },
          "summary": "文化解读"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "",
          "scenarios": []
        },
        "home_score": 51,
        "away_score": 49,
        "mystic_verdict": "同分对话，火土相涵宜胶着。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0,
        "tier_label": "势均力敌",
        "implied_tier": 0,
        "tier_gap": 0,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Algeria（约 51%）",
        "analysis": "J组末轮 · 阿尔/奥各 3 分生死战。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.4
            },
            {
              "score": "2-1",
              "prob": 8.7
            },
            {
              "score": "1-2",
              "prob": 8.3
            }
          ],
          "one_goal_win_pct": 20.4,
          "two_plus_win_pct": 18.8,
          "full_cover_pct": 0,
          "dog_hold_pct": null,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 2.97,
          "fair_totals_line": 2.75,
          "over_2_5_pct": 56.6,
          "over_3_pct": 34,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 0%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.97,
          "fair_line": 2.75,
          "line_gap": -0.25,
          "over_pct": 56.6,
          "under_pct": 43.4,
          "signal": "low_line",
          "signal_cn": "参考偏低",
          "signal_color": "#7BB8D4",
          "signal_desc": "总进球参考低于合理值，模型偏大比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 56.6%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 32,
          "draw": 38,
          "away_win": 30
        },
        "display_summary": {
          "fav_name": "Algeria",
          "expected_total_goals": 2.62,
          "poisson_fav_win_pct": 37.3,
          "small_lead_pct": 20.6,
          "small_example_score": "1-0",
          "small_example_pct": 9.5,
          "big_cover_pct": 16.7,
          "big_example_score": "2-0",
          "big_example_pct": 6.3,
          "win_shape": {
            "fav_name": "Algeria",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 29.7%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 9.5,
                "pct": 25.6
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.1,
                "pct": 29.7
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 9.2,
                "pct": 24.5
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 7.5,
                "pct": 20.2
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.3
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 24.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.2
              }
            ],
            "fav_win_pct": 32
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 34.1 分",
            "first_goal_wait": 34.1,
            "fast_pct": 58.5,
            "moderate_pct": 14.8,
            "slow_pct": 26.7,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 58.5
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 26.7
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Algeria 暂无重要伤停 · Austria 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "J组同分生死战 · 阿尔及利亚 vs 奥地利各 3 分"
            },
            {
              "icon": "🎯",
              "label": "出线博弈",
              "note": "争八不对称默契：强队已出线，弱队保平争第三（输球出局） · 争八不对称"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 极接近 · 争八不对称：弱队保平争第三，平局权重上调 · Algeria 输球出局 · 平局争第 3 · 赢球稳进（平 +13%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.52,
            "baseline_away": 1.45,
            "adjusted_home": 1.33,
            "adjusted_away": 1.31,
            "note": "基准 xG 1.52–1.45 → 调整后 1.33–1.31"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "势均力敌",
            "summary_cn": "与模型 xG 对照：均衡 · 与赛前净胜看法基本一致"
          },
          "win_outlook": {
            "fav_name": "Algeria",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.3
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 24.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.2
              }
            ],
            "margin_line_cn": "净胜差距参考 · 势均力敌",
            "margin_meet_pct": 0,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球参考 2.5",
            "fair_totals_line": 2,
            "model_total_xg": 2.64,
            "totals_line_gap": 0.5,
            "totals_high_pct": 48.9,
            "totals_low_pct": 51.1,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 15.9,
            "win_margin2_low_total_pct": 6.3,
            "win_margin2_high_total_pct": 10.3,
            "readout_cn": "取胜约 32%；若取胜，以「险胜收工」为主（55.3%）。 对着赛前净胜参考，净胜≥1（全达标）约 0%；对着总进球参考 2.5，模型超线概率约 48.9%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.5
            },
            {
              "score": "1-0",
              "pct": 9.5
            },
            {
              "score": "0-1",
              "pct": 9.4
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 48.9,
            "gap_warning": null,
            "totals_outlook": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 48.9,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.6 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "净胜走向：双方实力接近",
            "sub_cn": "双方实力接近，暂无单侧净胜预期。 进球氛围：几乎五五开 平局权重约 38%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "even",
              "label_cn": "势均力敌",
              "color": "#8A96A8",
              "fav_name": null,
              "market_expect_cn": "势均力敌",
              "meet_pct": null,
              "verdict_cn": "无明确净胜拉开预期",
              "headline_cn": "净胜走向：双方实力接近",
              "pill_cn": "双方实力接近，暂无单侧净胜预期。",
              "detail_cn": "赛前外界为势均力敌档，模型未给出哪一方能明显拉开净胜的信号。",
              "full_cover_pct": 0,
              "half_cover_pct": 0,
              "show_cover": false
            },
            "totals": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 48.9,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "draw_risk": {
              "level": "high",
              "color": "#C8A96E",
              "note": "平局权重约 38%，小组赛易出守平——勿只盯胜负一方。"
            },
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "让球盘",
                "outlook": {
                  "level": "even",
                  "label_cn": "势均力敌",
                  "color": "#8A96A8",
                  "fav_name": null,
                  "market_expect_cn": "势均力敌",
                  "meet_pct": null,
                  "verdict_cn": "无明确净胜拉开预期",
                  "headline_cn": "净胜走向：双方实力接近",
                  "pill_cn": "双方实力接近，暂无单侧净胜预期。",
                  "detail_cn": "赛前外界为势均力敌档，模型未给出哪一方能明显拉开净胜的信号。",
                  "full_cover_pct": 0,
                  "half_cover_pct": 0,
                  "show_cover": false
                },
                "text": "双方实力接近，暂无单侧净胜预期。",
                "color": "#8A96A8",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "◎",
                "label": "进球氛围",
                "outlook": {
                  "level": "neutral",
                  "label_cn": "暂无明显倾向",
                  "color": "#8A96A8",
                  "meter_label_cn": "几乎五五开",
                  "meter_pos": 50,
                  "lean_side": "neutral",
                  "lean_strength": "none",
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 48.9,
                  "line_gap": 0.5,
                  "market_line": 2.5,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.5",
                  "caution_public_high": false
                },
                "text": "几乎五五开",
                "color": "#8A96A8",
                "muted": true
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Algeria",
              "first_goal_pct": 50.4,
              "start_score": "1-0",
              "fav_name": "Algeria",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 84.2,
              "small_lead_pct": 29.4,
              "big_lead_pct": 32.4,
              "fav_win_pct": 61.8,
              "fav_draw_pct": 22.4,
              "fav_lose_pct": 15.8,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Algeria 保持胜果（净胜≥1）",
                  "pct": 61.8
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 22.4
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 15.8
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.1 分",
                "first_goal_wait": 34.1,
                "fast_pct": 51.4,
                "moderate_pct": 14.7,
                "slow_pct": 33.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.9
                  }
                ]
              },
              "big_delta": 15.7,
              "small_delta": 8.8,
              "narrative": "Algeria 先破门（已 1-0） → 「巩固防守」；Austria 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Algeria",
                "state_label": "Algeria 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 55.3
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 24.5
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 20.2
                  }
                ],
                "margin_line_cn": "净胜差距参考 · 势均力敌",
                "margin_meet_pct": 15.8,
                "margin_half_pct": 0,
                "margin_fail_pct": 10.8,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.16,
                "totals_line_gap": 0.25,
                "totals_high_pct": 63.6,
                "totals_low_pct": 36.4,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 0,
                "win_margin2_low_total_pct": 0,
                "win_margin2_high_total_pct": 4.9,
                "readout_cn": "Algeria 已 1-0 领先：仍取胜约 15.8%。 对着总进球参考 2.5，模型超线概率约 63.6%。 若再扩大，偏「险胜收工」。"
              }
            },
            {
              "side": "away",
              "team": "Austria",
              "first_goal_pct": 49.6,
              "start_score": "0-1",
              "fav_name": "Austria",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 83.7,
              "small_lead_pct": 29.4,
              "big_lead_pct": 31.6,
              "fav_win_pct": 61,
              "fav_draw_pct": 22.7,
              "fav_lose_pct": 16.3,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Austria 追平（平局）",
                  "pct": 22.7
                },
                {
                  "key": "win1",
                  "label": "Austria 净胜1球翻盘（如 2-1）",
                  "pct": 29.4
                },
                {
                  "key": "win2",
                  "label": "Austria 净胜≥2球翻盘（如 3-1）",
                  "pct": 31.6
                },
                {
                  "key": "upset_hold",
                  "label": "Austria 保持胜果至终场",
                  "pct": 16.3
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.1 分",
                "first_goal_wait": 34.1,
                "fast_pct": 51.4,
                "moderate_pct": 14.7,
                "slow_pct": 33.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.9
                  }
                ]
              },
              "big_delta": 14.9,
              "small_delta": 8.8,
              "narrative": "Austria 先破门（已 0-1） → 「巩固防守」；Algeria 「组织反扑」。落后方压上反扑，比赛更开放，但热门要净胜两球以上仍须连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.6 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 48.9,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 32,
              "readout_cn": "Algeria · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": null,
            "archetype": {
              "tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 32,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.59,
            "xg_away_ht": 0.58,
            "xg_home_2h": 0.74,
            "xg_away_2h": 0.73,
            "home_win": 29,
            "draw": 42.6,
            "away_win": 28.4,
            "top_score": "0-0",
            "top_score_prob": 31,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 31
              },
              {
                "score": "1-0",
                "prob": 18.3
              },
              {
                "score": "0-1",
                "prob": 18
              }
            ],
            "ht_goals_expected": 1.17,
            "ht_over_0_5_pct": 69,
            "ht_over_1_5_pct": 32.6,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.59–0.58（约占全场 44%） · 最可能 0-0（31%） · 胜平负 29/42.6/28.4 · 半场≥1球约 69%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Algeria · 常规对抗。 · 与模型 xG 对照：均衡 · 与赛前净胜看法基本一致（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.97,
          "xg_gap": 0.07,
          "xg_home": 1.52,
          "xg_away": 1.45,
          "xg_baseline_home": 1.52,
          "xg_baseline_away": 1.45,
          "xg_note": "结构推演用基准 xG 1.52–1.45（进球氛围用调整后 1.33–1.31）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Algeria",
          "dog_name": "Austria",
          "fav_xg": 1.52,
          "dog_xg": 1.45,
          "path_type": "low",
          "path_label": "铁局/小比分",
          "lean": "split",
          "lean_cn": "大/小比分分裂",
          "lean_mode": "neutral",
          "lean_confidence": null,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 56.6,
          "prob_meet_guess": 56.6,
          "guess_n": 3,
          "prob_4_plus": 34,
          "prob_2_or_less": 43.4,
          "totals_line": 2.5,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 45
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 23
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 20
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 13
            }
          ],
          "tags": [
            {
              "key": "even_xg",
              "label": "xG接近",
              "color": "#5BBF8A",
              "bg": "rgba(91,191,138,0.08)"
            },
            {
              "key": "low_scoring",
              "label": "小比分",
              "color": "#7BB8D4",
              "bg": "rgba(123,184,212,0.1)"
            }
          ],
          "watch_notes": [
            "弱队上半场效率≥1.0 → 关注弱队开花路径",
            "结构类似 m12/m26——热门爆发路径需防 4+ 球"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 2.97 · Algeria 1.52 / Austria 1.45 → 主路径「铁局/小比分」约 45%。 超 2.5 约 56.6% · ≤2球 43.4%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "J",
        "label": "J组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Argentina",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 5,
            "ga": 0
          },
          {
            "team": "Austria",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 3,
            "ga": 5
          },
          {
            "team": "Algeria",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 4
          },
          {
            "team": "Jordan",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 1,
            "ga": 5
          }
        ],
        "home": {
          "team": "Algeria",
          "rank": 3,
          "pts": 3,
          "played": 2,
          "if_1st": "32强 M86 · J 组第 1 vs H 组第 2 → 当前 H 组第 2倾向 Cape Verde",
          "if_1st_r16": "16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者",
          "if_1st_corridor": "阿根廷头名半区",
          "if_2nd": "32强 M84 · H 组第 1 vs J 组第 2 → 当前 H 组第 1倾向 Spain（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者",
          "if_2nd_corridor": "约旦/阿尔及利亚次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 I/K/L/G/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Austria",
          "rank": 2,
          "pts": 3,
          "played": 2,
          "if_1st": "32强 M86 · J 组第 1 vs H 组第 2 → 当前 H 组第 2倾向 Cape Verde",
          "if_1st_r16": "16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者",
          "if_1st_corridor": "阿根廷头名半区",
          "if_2nd": "32强 M84 · H 组第 1 vs J 组第 2 → 当前 H 组第 1倾向 Spain（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者",
          "if_2nd_corridor": "约旦/阿尔及利亚次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 I/K/L/G/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "H 组：头名 Spain 7 分 · 次席 Cape Verde 3 分（32强绑定组）",
          "I 组：头名 France 9 分 · 次席 Norway 6 分（32强绑定组）",
          "G 组 Belgium 5 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 7 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "J 组与 H 组绑定；阿根廷若头名走 M86→M95。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Algeria",
          "reason": "Austria 已锁前二；Algeria 仍不确定：输球基本出局，握手可争第 3 进「12 进 8」争八池（4 分），赢球则稳进。弱队或「保平争胜」、强队可低强度——不对称默契，推演略抬平局。",
          "logic_steps": [
            "Algeria 3 分 vs Austria 3 分；同组另一场 Argentina（6 分）vs Jordan（0 分）",
            "逻辑：Austria 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵",
            "逻辑：Algeria 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（4 分）",
            "逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守",
            "逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）"
          ],
          "optimal_summary": "策略最优解（推演）：Algeria 末轮可在「保住现有名次」与「为淘汰赛选半区」之间微调；未完全锁定出线前，此阶段仍以全力争胜、抢 3 分为上策；尚未到以演练或轮换为名调整名次、接受非胜结果的窗口。已锁定后，可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。",
          "qual_model": {
            "scenario_type": "asymmetric_third",
            "mutual_draw_advances": false,
            "path_control": false,
            "asymmetric_third": {
              "strong_side": "Austria",
              "weak_side": "Algeria",
              "weak_is_home": true,
              "weak_dead_on_loss": true,
              "weak_third_live_on_draw": true,
              "weak_through_on_win": true,
              "weak_likely_underdog": true,
              "draw_pts_if_draw": 4
            },
            "both_already_qualified": false,
            "home_already_qualified": false,
            "away_already_qualified": true,
            "home_out_if_loss": true,
            "away_out_if_loss": false,
            "logic_steps": [
              "Algeria 3 分 vs Austria 3 分；同组另一场 Argentina（6 分）vs Jordan（0 分）",
              "逻辑：Austria 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵",
              "逻辑：Algeria 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（4 分）",
              "逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守",
              "逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）"
            ],
            "drawBoost": 9,
            "xgScaleHome": 0.93,
            "xgScaleAway": 0.96,
            "notes": [
              "争八不对称：弱队保平争第三，平局权重上调",
              "Algeria 输球出局 · 平局争第 3 · 赢球稳进"
            ],
            "summary": "争八不对称默契：强队已出线，弱队保平争第三（输球出局）"
          }
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Algeria 若取胜：积分 6，J 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Austria 若取胜：积分 6，客场抢分将改变 J 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 H 组：头名 Spain 7 分 · 次席 Cape Verde 3 分（32强绑定组） · I 组：头名 France 9 分 · 次席 Norway 6 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：J 组与 H 组绑定；阿根廷若头名走 M86→M95。"
        ]
      }
    },
    {
      "id": "m70",
      "fifa_match_number": 70,
      "fifa_match_id": "400021495",
      "group": "J",
      "matchday": 3,
      "date": "2026-06-27",
      "time": "21:00",
      "time_local": "20:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "10:00",
      "date_beijing": "6月28日",
      "time_beijing_full": "北京时间 6月28日 10:00",
      "venue": "AT&T Stadium",
      "city": "Arlington, USA",
      "note": "J组末轮 · 约旦 vs 阿根廷 · 达拉斯",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "5-4-1 / 4-3-3",
          "home": "Abu Layla; Al-Rosan, Al-Amro, Al-Bashir; Al-Naimat, Al-Rawashdeh; Al-Malkawi, Al-Dardour, Al-Naimat; Al-Rashdan",
          "away": "Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Lautaro, Garnacho",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Jordan",
        "iso": "jo",
        "flag": "",
        "fifa_rank": 72,
        "rating": 57,
        "form": [
          "L",
          "L",
          "D",
          "W",
          "D"
        ],
        "coach": "Hussein Ammouta",
        "stars": [
          {
            "name": "Yazan Al-Naimat",
            "pos": "ST",
            "club": "Al-Gharafa",
            "rating": 7.4,
            "desc": "锋线"
          }
        ],
        "star": {
          "name": "Yazan Al-Naimat",
          "pos": "ST",
          "club": "Al-Gharafa",
          "rating": 7.4,
          "desc": "0 分出局"
        },
        "injuries": [],
        "rumors": [
          "约旦 0 分已出局 · 锻炼新人"
        ]
      },
      "away": {
        "name": "Argentina",
        "iso": "ar",
        "flag": "",
        "fifa_rank": 1,
        "rating": 94,
        "form": [
          "W",
          "W",
          "W",
          "W",
          "D"
        ],
        "coach": "Lionel Scaloni",
        "stars": [
          {
            "name": "Lionel Messi",
            "pos": "RW",
            "club": "Inter Miami",
            "rating": 9.3,
            "desc": "核心"
          },
          {
            "name": "Lautaro Martínez",
            "pos": "ST",
            "club": "Inter",
            "rating": 8.8,
            "desc": "锋线"
          }
        ],
        "star": {
          "name": "Lionel Messi",
          "pos": "RW",
          "club": "Inter Miami",
          "rating": 9.3,
          "desc": "6 分已锁"
        },
        "injuries": [
          {
            "player": "Lionel Messi",
            "status": "FIT",
            "note": "6 分已锁",
            "confirmed": true
          }
        ],
        "rumors": [
          "Scaloni 或轮换但 Messi 预计替补登场"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 1,
        "recent": [
          {
            "year": 2011,
            "comp": "友谊赛",
            "score": "0-2",
            "winner": "Argentina"
          }
        ],
        "note": "阿根廷占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 70 · 约旦 vs 阿根廷 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-27T06:00:10+08:00"
      },
      "prediction": {
        "home_win": 10,
        "draw": 17,
        "away_win": 73,
        "score": "0-2",
        "confidence": 76,
        "xg_home": 0.62,
        "xg_away": 2.42,
        "key_factor": "J组末轮 · 阿根廷 6 分已出线 vs 约旦 0 分 · Messi 或轮换 · 泊松 0-2/0-3",
        "score_dist": [
          {
            "score": "0-2",
            "prob": 17.6
          },
          {
            "score": "0-3",
            "prob": 15.4
          },
          {
            "score": "0-1",
            "prob": 13.4
          },
          {
            "score": "0-4",
            "prob": 10.1
          },
          {
            "score": "1-2",
            "prob": 6.2
          },
          {
            "score": "1-3",
            "prob": 5.4
          },
          {
            "score": "0-5",
            "prob": 5.3
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Jordan 暂列 J 组第 4（0 分 · 已赛 2 场） vs Argentina 第 1（6 分 · 已赛 2 场）"
          },
          {
            "icon": "🎯",
            "label": "出线博弈",
            "text": "J 组与 H 组绑定；阿根廷若头名走 M86→M95 · 已出线争顺位"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "达拉斯夏午 · 33°C · 湿度 52% · 降雨概率 10% · 封闭无风；阿根廷 6 分已出线 · 或轮换（33°C 封闭）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "J组末轮 · 阿根廷 6 分已出线 vs 约旦 0 分 · Messi 或轮换 · 泊松 0-2/0-3"
          }
        ],
        "base_home_win": 7.9,
        "base_draw": 15.7,
        "base_away_win": 76.4,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": false,
          "closeXg": false,
          "gap": 1.8,
          "notes": [],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 0.35,
        "xg_poisson_away": 2.62,
        "xg_tier_calibrated": true,
        "score_prob": 17.6,
        "score_top3": [
          {
            "score": "0-2",
            "prob": 17.6
          },
          {
            "score": "0-3",
            "prob": 15.4
          },
          {
            "score": "0-1",
            "prob": 13.4
          }
        ],
        "expected_score": "0-3"
      },
      "weather": {
        "city": "达拉斯",
        "country": "美国",
        "venue": "AT&T Stadium",
        "pitch_surface": "人工草（有顶盖）",
        "stadium_type": "封闭式",
        "temp": 33,
        "humidity": 52,
        "altitude_m": 200,
        "rain_chance": 10,
        "wind": "封闭无风",
        "condition_cn": "达拉斯夏午",
        "impact_level": "MEDIUM",
        "impact_summary": "阿根廷 6 分已出线 · 或轮换",
        "home_adapt": 72,
        "away_adapt": 88,
        "weather_factors": [
          {
            "label": "33°C 封闭",
            "impact": "中",
            "detail": "北京时间 10:00"
          }
        ],
        "forecast_updated": "2026-06-27 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "丁酉日",
          "day_summary": "丁酉日——火金相制",
          "hour_home": "见各场",
          "hour_home_element": "金"
        },
        "wuxing": {
          "home": {
            "verdict": "待定"
          },
          "away": {
            "verdict": "待定"
          },
          "summary": "文化解读"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "",
          "scenarios": []
        },
        "home_score": 22,
        "away_score": 78,
        "mystic_verdict": "阿根廷火土旺，约旦铁桶守势。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": -1.75,
        "tier_label": "Argentina -1.75 · Jordan +1.75",
        "implied_tier": -1.25,
        "tier_gap": -0.5,
        "signal": "heat_deflection",
        "signal_cn": "预期偏热",
        "signal_color": "#C8A96E",
        "signal_desc": "舆论一边倒但实力差未同步放大，模型略下调热门方权重。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Argentina（约 82%）",
        "analysis": "阿根廷 6 分已出线 vs 约旦 0 分 · 阿根廷 -1.75。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "0-2",
              "prob": 14.5
            },
            {
              "score": "0-1",
              "prob": 12
            },
            {
              "score": "0-3",
              "prob": 11.7
            }
          ],
          "one_goal_win_pct": 6,
          "two_plus_win_pct": 1.9,
          "full_cover_pct": 52.8,
          "dog_hold_pct": 47.2,
          "half_cover_pct": 23.6,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "部分达标净胜=1",
          "fav_cover_ev": 0.292,
          "dog_cover_ev": -0.292,
          "rational_spread_cn": "客队 净胜达标概率略高",
          "total_xg": 3.04,
          "fair_totals_line": 2.75,
          "over_2_5_pct": 57,
          "over_3_pct": 33.7,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥2 约 52.8%；部分达标净胜=1 约 23.6%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 3.04,
          "fair_line": 2.75,
          "line_gap": 0,
          "over_pct": 45.4,
          "under_pct": 54.6,
          "signal": "aligned",
          "signal_cn": "线与模型贴合",
          "signal_color": "#5BBF8A",
          "signal_desc": "总进球参考与合理值接近。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.75 球接近五五开（约 45.4%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "applied_delta": {
          "home_win": 2,
          "draw": 1,
          "away_win": -3
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 +1% · 客 -3%",
        "adjusted_probs": {
          "home_win": 10,
          "draw": 17,
          "away_win": 73
        },
        "display_summary": {
          "fav_name": "Argentina",
          "expected_total_goals": 2.59,
          "poisson_fav_win_pct": 73.8,
          "small_lead_pct": 25.5,
          "small_example_score": "0-1",
          "small_example_pct": 14.9,
          "big_cover_pct": 48.3,
          "big_example_score": "0-2",
          "big_example_pct": 15.9,
          "win_shape": {
            "fav_name": "Argentina",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 37%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 14.9,
                "pct": 20.1
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.6,
                "pct": 14.4
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 27.2,
                "pct": 37
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 21,
                "pct": 28.5
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 34.5
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 37
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 28.5
              }
            ],
            "fav_win_pct": 73
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 33.5 分",
            "first_goal_wait": 33.5,
            "fast_pct": 59.2,
            "moderate_pct": 14.7,
            "slow_pct": 26.1,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 59.2
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.7
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 26.1
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Jordan 暂无重要伤停 · Argentina 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "阿根廷 6 分已出线 · 或轮换"
            }
          ],
          "xg_context": {
            "baseline_home": 0.62,
            "baseline_away": 2.42,
            "adjusted_home": 0.55,
            "adjusted_away": 2.14,
            "note": "基准 xG 0.62–2.42 → 调整后 0.55–2.14"
          },
          "calibration": {
            "signal_cn": "预期偏热",
            "signal_color": "#C8A96E",
            "signal_desc": "舆论一边倒但实力差未同步放大，模型略下调热门方权重。",
            "tier_gap": -0.5,
            "implied_tier_label": "Argentina -1.25 · Jordan +1.25",
            "market_tier_label": "Argentina -1.75 · Jordan +1.75",
            "summary_cn": "与模型 xG 对照：预期偏热 · 赛前净胜看法低于 xG 隐含约 0.5 · 部分达标净胜=1 约 25.5%"
          },
          "win_outlook": {
            "fav_name": "Argentina",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 34.5
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 37
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 28.5
              }
            ],
            "margin_line_cn": "Argentina · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
            "margin_meet_pct": 48.3,
            "margin_half_pct": 25.5,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "部分达标净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.69,
            "totals_line_gap": 0.75,
            "totals_high_pct": 38,
            "totals_low_pct": 62,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 30.8,
            "win_margin2_low_total_pct": 15.9,
            "win_margin2_high_total_pct": 32.4,
            "readout_cn": "取胜约 73%；若取胜，以「零封拉开」为主（37%）。 对着赛前净胜参考，净胜≥2（全达标）约 48.3%；部分达标净胜=1 约 25.5%；对着总进球参考 2.75，模型超线概率约 38%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 2.75。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "0-2",
              "pct": 15.9
            },
            {
              "score": "0-1",
              "pct": 14.9
            },
            {
              "score": "0-3",
              "pct": 11.3
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 38,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 38,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 38,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.6 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Argentina -1.75 穿盘：有达标可能",
            "sub_cn": "Argentina -1.75 穿盘 48.3% · Jordan +1.75 守住 51.7% 进球氛围：略偏闷",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Argentina",
              "dog_name": "Jordan",
              "fav_handicap_cn": "Argentina -1.75",
              "dog_handicap_cn": "Jordan +1.75",
              "market_expect_cn": "Argentina -1.75 · 净胜≥2",
              "meet_pct": 48.3,
              "dog_hold_pct": 51.7,
              "meet_pct_label": "Argentina -1.75 穿盘概率",
              "dog_hold_label": "Jordan +1.75 守住概率",
              "verdict_cn": "有达标可能",
              "headline_cn": "Argentina -1.75 穿盘：有达标可能",
              "pill_cn": "Argentina -1.75 穿盘 48.3% · Jordan +1.75 守住 51.7%",
              "detail_cn": "Argentina -1.75 穿盘约 48.3%（净胜≥2） · Jordan +1.75 守住约 51.7%；穿盘与受让守住均有一定空间（部分达标净胜=1 约 25.5%）。",
              "extra_stats_cn": "部分达标净胜=1 约 25.5%",
              "full_cover_pct": 48.3,
              "half_cover_pct": 25.5,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "部分达标净胜=1",
              "tier_gap": -0.5,
              "show_cover": true
            },
            "totals": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 38,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 38,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "draw_risk": null,
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "让球盘",
                "outlook": {
                  "level": "possible",
                  "label_cn": "有达标可能",
                  "color": "#C8A96E",
                  "fav_name": "Argentina",
                  "dog_name": "Jordan",
                  "fav_handicap_cn": "Argentina -1.75",
                  "dog_handicap_cn": "Jordan +1.75",
                  "market_expect_cn": "Argentina -1.75 · 净胜≥2",
                  "meet_pct": 48.3,
                  "dog_hold_pct": 51.7,
                  "meet_pct_label": "Argentina -1.75 穿盘概率",
                  "dog_hold_label": "Jordan +1.75 守住概率",
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Argentina -1.75 穿盘：有达标可能",
                  "pill_cn": "Argentina -1.75 穿盘 48.3% · Jordan +1.75 守住 51.7%",
                  "detail_cn": "Argentina -1.75 穿盘约 48.3%（净胜≥2） · Jordan +1.75 守住约 51.7%；穿盘与受让守住均有一定空间（部分达标净胜=1 约 25.5%）。",
                  "extra_stats_cn": "部分达标净胜=1 约 25.5%",
                  "full_cover_pct": 48.3,
                  "half_cover_pct": 25.5,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "部分达标净胜=1",
                  "tier_gap": -0.5,
                  "show_cover": true
                },
                "text": "Argentina -1.75 穿盘 48.3% · Jordan +1.75 守住 51.7%",
                "color": "#C8A96E",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "◎",
                "label": "进球氛围",
                "outlook": {
                  "level": "mild_low",
                  "label_cn": "略倾向沉闷",
                  "color": "#7BB8D4",
                  "meter_label_cn": "略倾向沉闷",
                  "meter_pos": 38,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 38,
                  "line_gap": 0.75,
                  "market_line": 2.75,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.75",
                  "caution_public_high": false
                },
                "text": "略偏闷（弱）",
                "color": "#7BB8D4",
                "muted": true
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Jordan",
              "first_goal_pct": 20.4,
              "start_score": "1-0",
              "fav_name": "Argentina",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 72.1,
              "small_lead_pct": 23,
              "big_lead_pct": 21.3,
              "fav_win_pct": 44.3,
              "fav_draw_pct": 27.8,
              "fav_lose_pct": 27.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Argentina 追平（平局）",
                  "pct": 27.8
                },
                {
                  "key": "win1",
                  "label": "Argentina 净胜1球翻盘（如 2-1）",
                  "pct": 23
                },
                {
                  "key": "win2",
                  "label": "Argentina 净胜≥2球翻盘（如 3-1）",
                  "pct": 21.3
                },
                {
                  "key": "upset_hold",
                  "label": "Jordan 保持胜果至终场",
                  "pct": 27.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 32.3 分",
                "first_goal_wait": 32.3,
                "fast_pct": 53.4,
                "moderate_pct": 14.8,
                "slow_pct": 31.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 53.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 31.9
                  }
                ]
              },
              "big_delta": -27,
              "small_delta": -2.5,
              "narrative": "Jordan 先破门（已 1-0） → 「巩固防守」；Argentina 「组织反扑」。热门先丢球（已 1-0），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "Argentina",
              "first_goal_pct": 79.6,
              "start_score": "0-1",
              "fav_name": "Argentina",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 98,
              "small_lead_pct": 23.5,
              "big_lead_pct": 66.2,
              "fav_win_pct": 89.7,
              "fav_draw_pct": 8.3,
              "fav_lose_pct": 2,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Argentina 保持胜果（净胜≥1）",
                  "pct": 89.7
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 8.3
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 2
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.7 分",
                "first_goal_wait": 34.7,
                "fast_pct": 50.7,
                "moderate_pct": 14.7,
                "slow_pct": 34.6,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 50.7
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 34.6
                  }
                ]
              },
              "big_delta": 17.9,
              "small_delta": -2,
              "narrative": "Argentina 先破门（已 0-1） → 「巩固防守」；Jordan 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Argentina",
                "state_label": "Argentina 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 34.5
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 37
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 28.5
                  }
                ],
                "margin_line_cn": "Argentina · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
                "margin_meet_pct": 66.2,
                "margin_half_pct": 23.5,
                "margin_fail_pct": 23.5,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "部分达标净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.12,
                "totals_line_gap": 0.5,
                "totals_high_pct": 48.8,
                "totals_low_pct": 51.2,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 31.9,
                "win_margin2_low_total_pct": 19.8,
                "win_margin2_high_total_pct": 46.3,
                "readout_cn": "Argentina 已 1-0 领先：仍取胜约 89.7%。 对着总进球参考 2.75，模型超线概率约 48.8%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.6 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 38,
              "type_tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 13,
              "readout_cn": "Argentina · 压制局。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": null,
            "archetype": {
              "tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 13,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.24,
            "xg_away_ht": 0.94,
            "xg_home_2h": 0.31,
            "xg_away_2h": 1.2,
            "home_win": 9.3,
            "draw": 38.1,
            "away_win": 52.6,
            "top_score": "0-0",
            "top_score_prob": 30.7,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 30.7
              },
              {
                "score": "0-1",
                "prob": 28.9
              },
              {
                "score": "0-2",
                "prob": 13.6
              }
            ],
            "ht_goals_expected": 1.18,
            "ht_over_0_5_pct": 69.3,
            "ht_over_1_5_pct": 33,
            "pick": "away",
            "pick_name": "Argentina",
            "summary_cn": "半场 xG 0.24–0.94（约占全场 44%） · 最可能 0-0（30.7%） · 胜平负 9.3/38.1/52.6 · 半场≥1球约 69.3%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Argentina · 压制局。 · 与模型 xG 对照：预期偏热 · 赛前净胜看法低于 xG 隐含约 0.5 · 部分达标净胜=1 约 25.5%（模型微调：主胜 +2% · 平 +1% · 客 -3%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 3.04,
          "xg_gap": 1.8,
          "xg_home": 0.62,
          "xg_away": 2.42,
          "xg_baseline_home": 0.62,
          "xg_baseline_away": 2.42,
          "xg_note": "结构推演用基准 xG 0.62–2.42（进球氛围用调整后 0.55–2.14）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Argentina",
          "dog_name": "Jordan",
          "fav_xg": 2.42,
          "dog_xg": 0.62,
          "path_type": "low",
          "path_label": "铁局/小比分",
          "lean": "neutral",
          "lean_cn": "中性",
          "lean_mode": "neutral",
          "lean_confidence": null,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 45.4,
          "prob_meet_guess": 57,
          "guess_n": 3,
          "prob_4_plus": 33.7,
          "prob_2_or_less": 43,
          "totals_line": 2.75,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 74
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 11
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 8
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 8
            }
          ],
          "tags": [
            {
              "key": "dog_weak",
              "label": "弱队难进球",
              "color": "#6B8FA3",
              "bg": "rgba(107,143,163,0.1)"
            },
            {
              "key": "fav_dominant",
              "label": "xG碾压",
              "color": "#FF6B35",
              "bg": "rgba(255,107,53,0.08)"
            },
            {
              "key": "low_scoring",
              "label": "小比分",
              "color": "#7BB8D4",
              "bg": "rgba(123,184,212,0.1)"
            }
          ],
          "watch_notes": [
            "弱队 xG 偏低——哑火则难破 3 球",
            "xG 差≥1.0——样本多为小比分"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 3.04 · Argentina 2.42 / Jordan 0.62 → 主路径「铁局/小比分」约 74%。 至少 3 球约 57% · 超 2.75 约 45.4% · ≤2球 43%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": false,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "J",
        "label": "J组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Argentina",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 5,
            "ga": 0
          },
          {
            "team": "Austria",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 3,
            "ga": 5
          },
          {
            "team": "Algeria",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 4
          },
          {
            "team": "Jordan",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 1,
            "ga": 5
          }
        ],
        "home": {
          "team": "Jordan",
          "rank": 4,
          "pts": 0,
          "played": 2,
          "if_1st": "32强 M86 · J 组第 1 vs H 组第 2 → 当前 H 组第 2倾向 Cape Verde",
          "if_1st_r16": "16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者",
          "if_1st_corridor": "阿根廷头名半区",
          "if_2nd": "32强 M84 · H 组第 1 vs J 组第 2 → 当前 H 组第 1倾向 Spain（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者",
          "if_2nd_corridor": "约旦/阿尔及利亚次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 I/K/L/G/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Argentina",
          "rank": 1,
          "pts": 6,
          "played": 2,
          "if_1st": "32强 M86 · J 组第 1 vs H 组第 2 → 当前 H 组第 2倾向 Cape Verde",
          "if_1st_r16": "16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者",
          "if_1st_corridor": "阿根廷头名半区",
          "if_2nd": "32强 M84 · H 组第 1 vs J 组第 2 → 当前 H 组第 1倾向 Spain（强队）",
          "if_2nd_r16": "16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者",
          "if_2nd_corridor": "约旦/阿尔及利亚次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 I/K/L/G/H 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "H 组：头名 Spain 7 分 · 次席 Cape Verde 3 分（32强绑定组）",
          "I 组：头名 France 9 分 · 次席 Norway 6 分（32强绑定组）",
          "G 组 Belgium 5 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 7 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "J 组与 H 组绑定；阿根廷若头名走 M86→M95。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Argentina",
          "reason": "J 组与 H 组绑定；阿根廷若头名走 M86→M95。",
          "optimal_summary": "策略最优解（推演）：Argentina 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；若次席仍紧追，仍宜控制场面——可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Jordan 若取胜：积分 3，J 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Argentina 若取胜：积分 9，客场抢分将改变 J 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 H 组：头名 Spain 7 分 · 次席 Cape Verde 3 分（32强绑定组） · I 组：头名 France 9 分 · 次席 Norway 6 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：J 组与 H 组绑定；阿根廷若头名走 M86→M95。"
        ]
      }
    }
  ],
  "nextMatch": {
    "group": "L",
    "matchday": 3,
    "date": "2026-06-27",
    "time": "17:00",
    "time_local": "17:00 ET",
    "timezone": "EDT (UTC-4)",
    "time_beijing": "05:00",
    "date_beijing": "6月28日",
    "time_beijing_full": "北京时间 6月28日 05:00",
    "venue": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "home": {
      "name": "Panama",
      "iso": "pa",
      "fifaRank": 75,
      "rating": 58
    },
    "away": {
      "name": "England",
      "iso": "gb-eng",
      "fifaRank": 9,
      "rating": 87
    },
    "teaser": "L组末轮 · 巴拿马 vs 英格兰",
    "home_win": 13,
    "draw": 20,
    "away_win": 66,
    "predicted_score": "0-2",
    "key_player_home": "José Fajardo",
    "key_player_away": "Jude Bellingham"
  },
  "upcomingMatches": [
    {
      "group": "L",
      "time_beijing_full": "北京时间 6月28日 05:00",
      "venue": "Lincoln Financial Field",
      "city": "Philadelphia, USA",
      "home": {
        "name": "Croatia",
        "iso": "hr"
      },
      "away": {
        "name": "Ghana",
        "iso": "gh"
      },
      "teaser": "L组末轮"
    },
    {
      "group": "K",
      "time_beijing_full": "北京时间 6月28日 07:30",
      "venue": "Hard Rock Stadium",
      "city": "Miami Gardens, USA",
      "home": {
        "name": "Colombia",
        "iso": "co"
      },
      "away": {
        "name": "Portugal",
        "iso": "pt"
      },
      "teaser": "K组末轮"
    },
    {
      "group": "K",
      "time_beijing_full": "北京时间 6月28日 07:30",
      "venue": "Mercedes-Benz Stadium",
      "city": "Atlanta, USA",
      "home": {
        "name": "Congo DR",
        "iso": "cd"
      },
      "away": {
        "name": "Uzbekistan",
        "iso": "uz"
      },
      "teaser": "K组末轮"
    },
    {
      "group": "J",
      "time_beijing_full": "北京时间 6月28日 10:00",
      "venue": "Arrowhead Stadium",
      "city": "Kansas City, USA",
      "home": {
        "name": "Algeria",
        "iso": "dz"
      },
      "away": {
        "name": "Austria",
        "iso": "at"
      },
      "teaser": "J组末轮"
    },
    {
      "group": "J",
      "time_beijing_full": "北京时间 6月28日 10:00",
      "venue": "AT&T Stadium",
      "city": "Arlington, USA",
      "home": {
        "name": "Jordan",
        "iso": "jo"
      },
      "away": {
        "name": "Argentina",
        "iso": "ar"
      },
      "teaser": "J组末轮"
    }
  ]
};
