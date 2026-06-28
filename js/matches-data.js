// 今日赛事 — Day 18 · 32强揭幕 (signals enriched)
// Last updated: 2026-06-28T08:32:07+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-28T08:32:07+08:00",
  "syncSource": "FIFA 赛程 · Day 18 · 32强 M73 enriched · 推演概要+小组形势",
  "phase": "knockout",
  "phase_cn": "淘汰赛 · 32强",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 小组赛收官：阿根廷/哥伦比亚/英格兰头名 · 48→32 强对阵已定",
      "time": "6月28日"
    },
    {
      "tag": "PREVIEW",
      "text": "⚔️ 6月29日 03:00 32强揭幕 · 南非 vs 加拿大（M73 · A2 vs B2）· 洛杉矶",
      "time": "今日赛程"
    },
    {
      "tag": "PREVIEW",
      "text": "📅 6月30日：德国-巴拉圭 · 巴西-日本 · 荷兰-摩洛哥 · 32强连战",
      "time": "明日预告"
    },
    {
      "tag": "PREVIEW",
      "text": "M73 胜者 → 16强 M90 · 对 M75 胜者（荷兰/摩洛哥走廊）",
      "time": "路径"
    }
  ],
  "todayMatches": [
    {
      "id": "m73",
      "fifa_match_number": 73,
      "fifa_match_id": "400021518",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M73 · A组亚军 vs B组亚军",
      "knockout_next": "胜者 → M90（16强 · 对 M75 胜者）",
      "source_rank_home": "A2",
      "source_rank_away": "B2",
      "date": "2026-06-28",
      "time": "12:00",
      "time_local": "12:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "03:00",
      "date_beijing": "6月29日",
      "time_beijing_full": "北京时间 6月29日 03:00",
      "venue": "SoFi Stadium",
      "city": "Inglewood, USA",
      "note": "32强 M73 · 南非 vs 加拿大 · 洛杉矶 · A2 vs B2",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Williams; Mobbie, Mokoena, Xoki; Teboho, Mashego; Tau, Zwane, Appollis; Foster",
          "away": "St. Clair; Johnston, Miller, Cornelius; Buchanan, Eustaquio, Kone; Laryea, David, Davies; Larin",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "South Africa",
        "iso": "za",
        "flag": "",
        "fifa_rank": 59,
        "rating": 65,
        "form": [
          "L",
          "W",
          "D",
          "W",
          "D"
        ],
        "coach": "Hugo Broos",
        "stars": [
          {
            "name": "Teboho Mokoena",
            "pos": "CDM",
            "club": "Sundowns",
            "rating": 7.8,
            "desc": "屏障"
          },
          {
            "name": "Percy Tau",
            "pos": "RW",
            "club": "Al Ahly",
            "rating": 7.6,
            "desc": "反击"
          }
        ],
        "star": {
          "name": "Teboho Mokoena",
          "pos": "CDM",
          "club": "Sundowns",
          "rating": 7.8,
          "desc": "A 组次席 · 屏障"
        },
        "injuries": [
          {
            "player": "Ronwen Williams",
            "status": "存疑",
            "detail": "小组赛末段轻微不适 · 赛前体检",
            "source": "队报"
          }
        ],
        "rumors": [
          {
            "text": "南非延续 A 组末轮低位+反击思路 · 淘汰赛加时规则生效",
            "tag": "战术"
          }
        ]
      },
      "away": {
        "name": "Canada",
        "iso": "ca",
        "flag": "",
        "fifa_rank": 27,
        "rating": 78,
        "form": [
          "W",
          "D",
          "L",
          "W",
          "D"
        ],
        "coach": "Jesse Marsch",
        "stars": [
          {
            "name": "Alphonso Davies",
            "pos": "LB",
            "club": "Bayern",
            "rating": 8.6,
            "desc": "左路爆点"
          },
          {
            "name": "Jonathan David",
            "pos": "ST",
            "club": "Lille",
            "rating": 8.2,
            "desc": "锋线"
          }
        ],
        "star": {
          "name": "Alphonso Davies",
          "pos": "LB",
          "club": "Bayern",
          "rating": 8.6,
          "desc": "B 组次席 · 宽度"
        },
        "injuries": [],
        "rumors": [
          {
            "text": "加拿大 B 组次席出线 · Davies 宽度+David 终结为破局点",
            "tag": "战术"
          }
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2024,
            "comp": "友谊赛",
            "score": "0-3",
            "winner": "Canada"
          }
        ],
        "note": "加拿大友谊赛占优"
      },
      "referee": {
        "name": "João Pinheiro",
        "nation": "葡萄牙",
        "nation_iso": "pt",
        "age": 44,
        "wc_exp": "2022 世界杯 · 2026 32强 M73",
        "style": "对身体对抗尺度明确 · 转换犯规抓得紧",
        "note": "FIFA 官方 · 32强揭幕战 M73 · 南非 vs 加拿大 · 洛杉矶 SoFi",
        "fifa_match_id": "400021518",
        "var": "Juan Martinez (西班牙)",
        "updated": "2026-06-28T08:32:07+08:00"
      },
      "prediction": {
        "home_win": 29,
        "draw": 30,
        "away_win": 42,
        "score": "0-1",
        "confidence": 68,
        "xg_home": 0.92,
        "xg_away": 1.18,
        "key_factor": "32强 M73 · 南非 A2（4 分 · 2 失球）vs 加拿大 B2（4 分 · 8 进球）· 淘汰赛平局概率抬升 · 泊松 1-1/0-1 · 加时/点球规则生效",
        "score_dist": [
          {
            "score": "0-1",
            "prob": 14.4
          },
          {
            "score": "1-1",
            "prob": 13.3
          },
          {
            "score": "0-0",
            "prob": 12.2
          },
          {
            "score": "1-0",
            "prob": 11.3
          },
          {
            "score": "0-2",
            "prob": 8.5
          },
          {
            "score": "1-2",
            "prob": 7.8
          },
          {
            "score": "2-1",
            "prob": 6.1
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "South Africa 暂列 KO 组第 —（0 分 · 已赛 0 场） vs Canada 第 —（0 分 · 已赛 0 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "洛杉矶夏夜 · 26°C · 湿度 55% · 降雨概率 5% · 海风 2级；32强揭幕 · 南非 vs 加拿大 · 气候影响低（26°C · 12:00 PT）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M73 · 南非 A2（4 分 · 2 失球）vs 加拿大 B2（4 分 · 8 进球）· 淘汰赛平局概率抬升 · 泊松 1-1/0-1 · 加时/点球规则生效"
          }
        ],
        "base_home_win": 28.6,
        "base_draw": 29.7,
        "base_away_win": 41.8,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.26,
          "notes": [],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 0.92,
        "xg_poisson_away": 1.18,
        "xg_tier_calibrated": false,
        "score_prob": 14.4,
        "score_top3": [
          {
            "score": "0-1",
            "prob": 14.4
          },
          {
            "score": "1-1",
            "prob": 13.3
          },
          {
            "score": "0-0",
            "prob": 12.2
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "洛杉矶",
        "country": "美国",
        "venue": "SoFi Stadium",
        "pitch_surface": "人工草",
        "stadium_type": "开放式",
        "temp": 26,
        "humidity": 55,
        "altitude_m": 30,
        "rain_chance": 5,
        "wind": "海风 2级",
        "condition_cn": "洛杉矶夏夜",
        "impact_level": "LOW",
        "impact_summary": "32强揭幕 · 南非 vs 加拿大 · 气候影响低",
        "home_adapt": 78,
        "away_adapt": 82,
        "weather_factors": [
          {
            "label": "26°C · 12:00 PT",
            "impact": "低",
            "detail": "北京时间 6月29日 03:00 · 32强 M73"
          }
        ],
        "forecast_updated": "2026-06-28 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "戊戌日",
          "day_summary": "戊戌日——土旺相制",
          "hour_home": "见各场",
          "hour_home_element": "土"
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
        "home_score": 42,
        "away_score": 58,
        "mystic_verdict": "加拿大金水略旺，南非土守反击。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.25,
        "tier_label": "South Africa -0.25 · Canada +0.25",
        "implied_tier": 0,
        "tier_gap": 0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Canada（约 54%）",
        "analysis": "32强 M73 · 南非 vs 加拿大 · A2 vs B2 · 胜者 M90 碰 M75 胜者（荷兰/摩洛哥走廊）。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "0-1",
              "prob": 14.5
            },
            {
              "score": "1-1",
              "prob": 13.3
            },
            {
              "score": "0-0",
              "prob": 12.2
            }
          ],
          "one_goal_win_pct": 18.6,
          "two_plus_win_pct": 9.9,
          "full_cover_pct": 39.1,
          "dog_hold_pct": 60.9,
          "fav_win_pct": 28.5,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.43,
          "dog_cover_ev": 0.43,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.1,
          "fair_totals_line": 2.25,
          "over_2_5_pct": 35,
          "over_3_pct": 16.1,
          "totals_lean_cn": "超 2.5 偏小比分（约 65%）；4球+偏少",
          "margin_risk_note": "净胜≥1 约 28.5%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 28.5,
          "dog_hold_pct_raw": 71.5
        },
        "spread_odds": {
          "fav": 0.92,
          "dog": 0.98,
          "note": "South Africa 0.92 · Canada 0.98"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "market_goals_int": 3,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.1,
          "fair_line": 2.25,
          "line_gap": 0,
          "over_pct": 48.4,
          "under_pct": 51.6,
          "signal": "aligned",
          "signal_cn": "线与模型贴合",
          "signal_color": "#5BBF8A",
          "signal_desc": "总进球参考与合理值接近。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大比分侧 0.94 / 小比分侧 0.92",
          "totals_odds": {
            "over": 0.94,
            "under": 0.92,
            "note": "大比分 0.94 · 小比分 0.92"
          },
          "rational_cn": "超 2.25 球接近五五开（约 48.4%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "market_line_movement": {
          "wc_note": "洛杉矶 neutral · 主客仅为 FIFA 标记",
          "spread_open_cn": "South Africa +0/0.5@1.02 · Canada -0/0.5@0.88",
          "spread_now_cn": "South Africa +0/0.5@0.98 · Canada -0/0.5@0.92",
          "totals_now_cn": "大小 2/2.5 · 大 0.94 / 小 0.92",
          "tag": "away_edge",
          "tag_cn": "向加拿大倾斜",
          "tag_color": "#7BB8D4",
          "detail_cn": "初盘平手 → 现加拿大 -0/0.5 @0.92；南非 A 组次席防守型，加拿大 B 组次席进攻更猛但末轮曾闷平。"
        },
        "totals_pick_layers": {
          "model_side": "neutral",
          "situation_side": "neutral",
          "market_line_side": "neutral",
          "market_odds_side": "neutral",
          "market_side": "neutral",
          "recommended_side": "neutral",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "neutral",
            "line": "neutral",
            "odds": "neutral",
            "situation": "neutral"
          },
          "vote_summary_cn": "观望(model) · 观望(line) · 观望(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘",
          "tendency_reason_cn": "淘汰赛首轮平局概率高，受让 +0/0.5 比 2/2.5 大小结构更清晰。",
          "spread": {
            "side": "dog",
            "label_cn": "南非 +0/0.5 @0.98",
            "reason_cn": "A 组次席 4 分出线 · 小组赛 2 失球偏稳；加拿大须破局但 -0/0.5 低水未必穿。模型平局约 32%。"
          },
          "totals": {
            "side": "under",
            "label_cn": "小球 2/2.5",
            "reason_cn": "32 强首轮双方偏谨慎 · 模型总 xG 约 2.1 · 2/2.5 线下 ≤2 球即全赢。"
          },
          "picked_at": "2026-06-29",
          "pick_meta": {
            "model_side": "neutral",
            "situation_side": "neutral",
            "market_line_side": "neutral",
            "market_odds_side": "neutral",
            "market_side": "neutral",
            "pick_side": "under",
            "recommended_side": "neutral",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "neutral",
              "line": "neutral",
              "odds": "neutral",
              "situation": "neutral"
            },
            "vote_summary_cn": "观望(model) · 观望(line) · 观望(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 48.4,
            "line_gap": 0
          }
        },
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 29,
          "draw": 30,
          "away_win": 42
        },
        "display_summary": {
          "fav_name": "South Africa",
          "expected_total_goals": 2.09,
          "poisson_fav_win_pct": 28.6,
          "small_lead_pct": 18.6,
          "small_example_score": "1-0",
          "small_example_pct": 11.3,
          "big_cover_pct": 9.9,
          "big_example_score": "2-0",
          "big_example_pct": 5.2,
          "win_shape": {
            "fav_name": "South Africa",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 39.5%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 11.3,
                "pct": 39.5
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 7.3,
                "pct": 25.7
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 6.8,
                "pct": 23.8
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 3.1,
                "pct": 11
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 65.2
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 23.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 11
              }
            ],
            "fav_win_pct": 29
          },
          "excitement": {
            "label_cn": "偏晚",
            "label_key": "slow",
            "label_color": "#7BB8D4",
            "sub_cn": "预期首球等待约 42.9 分",
            "first_goal_wait": 42.9,
            "fast_pct": 50.3,
            "moderate_pct": 14.7,
            "slow_pct": 35,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 50.3
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.7
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 35
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "South Africa 暂无重要伤停 · Canada 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "32强揭幕 · 南非 vs 加拿大 · 气候影响低"
            }
          ],
          "xg_context": {
            "baseline_home": 0.92,
            "baseline_away": 1.18,
            "adjusted_home": 0.92,
            "adjusted_away": 1.18,
            "note": "基准 xG 0.92–1.18（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0.25,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "South Africa -0.25 · Canada +0.25",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）"
          },
          "win_outlook": {
            "fav_name": "South Africa",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 65.2
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 23.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 11
              }
            ],
            "margin_line_cn": "South Africa · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 39.1,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.25,
            "totals_line_cn": "总进球参考 2.25",
            "fair_totals_line": 2.25,
            "model_total_xg": 2.1,
            "totals_line_gap": 0,
            "totals_high_pct": 48.4,
            "totals_low_pct": 51.6,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 16.5,
            "win_margin2_low_total_pct": 5.2,
            "win_margin2_high_total_pct": 9.9,
            "readout_cn": "取胜约 29%；若取胜，以「险胜收工」为主（65.2%）。 对着赛前净胜参考，净胜≥1（全达标）约 39.1%；对着总进球参考 2.25，模型超线概率约 48.4%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "0-1",
              "pct": 14.5
            },
            {
              "score": "1-1",
              "pct": 13.3
            },
            {
              "score": "0-0",
              "pct": 12.2
            }
          ],
          "totals_view": {
            "expected_total": 2.1,
            "fair_line": 2.25,
            "market_line": 2.25,
            "line_gap": 0,
            "over_pct": 48.4,
            "gap_warning": null,
            "totals_outlook": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 48.4,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.1 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "South Africa -0.25 穿盘：有达标可能",
            "sub_cn": "South Africa 胜 28.5% · 胜后穿 100% · Canada +0.25 守 60.9% 进球氛围：几乎五五开 平局权重约 30%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "South Africa",
              "dog_name": "Canada",
              "fav_handicap_cn": "South Africa -0.25",
              "dog_handicap_cn": "Canada +0.25",
              "market_expect_cn": "South Africa -0.25 · 净胜≥1",
              "meet_pct": 39.1,
              "dog_hold_pct": 60.9,
              "fav_win_pct": 28.5,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 28.5,
              "meet_pct_label": "South Africa -0.25 穿盘概率（校准）",
              "dog_hold_label": "Canada +0.25 守住概率（校准）",
              "two_stage_cn": "South Africa 取胜约 28.5% · 赢球后穿盘约 100% · Canada +0.25 守住约 60.9%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "South Africa -0.25 穿盘：有达标可能",
              "pill_cn": "South Africa 胜 28.5% · 胜后穿 100% · Canada +0.25 守 60.9%",
              "detail_cn": "South Africa 取胜约 28.5% · 赢球后穿盘约 100% · Canada +0.25 守住约 60.9%（泊松 raw 28.5% → 校准 39.1%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 39.1,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": 0.25,
              "show_cover": true
            },
            "totals": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 48.4,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "draw_risk": {
              "level": "high",
              "color": "#C8A96E",
              "note": "平局权重约 30%，小组赛易出守平——勿只盯胜负一方。"
            },
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "让球盘",
                "outlook": {
                  "level": "possible",
                  "label_cn": "有达标可能",
                  "color": "#C8A96E",
                  "fav_name": "South Africa",
                  "dog_name": "Canada",
                  "fav_handicap_cn": "South Africa -0.25",
                  "dog_handicap_cn": "Canada +0.25",
                  "market_expect_cn": "South Africa -0.25 · 净胜≥1",
                  "meet_pct": 39.1,
                  "dog_hold_pct": 60.9,
                  "fav_win_pct": 28.5,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 28.5,
                  "meet_pct_label": "South Africa -0.25 穿盘概率（校准）",
                  "dog_hold_label": "Canada +0.25 守住概率（校准）",
                  "two_stage_cn": "South Africa 取胜约 28.5% · 赢球后穿盘约 100% · Canada +0.25 守住约 60.9%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "South Africa -0.25 穿盘：有达标可能",
                  "pill_cn": "South Africa 胜 28.5% · 胜后穿 100% · Canada +0.25 守 60.9%",
                  "detail_cn": "South Africa 取胜约 28.5% · 赢球后穿盘约 100% · Canada +0.25 守住约 60.9%（泊松 raw 28.5% → 校准 39.1%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 39.1,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.25,
                  "show_cover": true
                },
                "text": "South Africa 胜 28.5% · 胜后穿 100% · Canada +0.25 守 60.9%",
                "color": "#C8A96E",
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
                  "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 48.4,
                  "line_gap": 0,
                  "market_line": 2.25,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.25",
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
              "team": "South Africa",
              "first_goal_pct": 43.8,
              "start_score": "1-0",
              "fav_name": "South Africa",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 83.3,
              "small_lead_pct": 33.1,
              "big_lead_pct": 24.7,
              "fav_win_pct": 57.7,
              "fav_draw_pct": 25.6,
              "fav_lose_pct": 16.7,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "South Africa 保持胜果（净胜≥1）",
                  "pct": 57.7
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 25.6
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 16.7
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 42.7 分",
                "first_goal_wait": 42.7,
                "fast_pct": 43.8,
                "moderate_pct": 14.1,
                "slow_pct": 42.1,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 43.8
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.1
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 42.1
                  }
                ]
              },
              "big_delta": 14.8,
              "small_delta": 14.5,
              "narrative": "South Africa 先破门（已 1-0） → 「巩固防守」；Canada 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "South Africa",
                "state_label": "South Africa 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 65.2
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 23.8
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 11
                  }
                ],
                "margin_line_cn": "South Africa · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 57.7,
                "margin_half_pct": 0,
                "margin_fail_pct": 33.1,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.73,
                "totals_line_gap": 0,
                "totals_high_pct": 66.9,
                "totals_low_pct": 33.1,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 30.2,
                "win_margin2_low_total_pct": 12.5,
                "win_margin2_high_total_pct": 24.7,
                "readout_cn": "South Africa 已 1-0 领先：仍取胜约 57.7%。 对着总进球参考 2.25，模型超线概率约 66.9%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Canada",
              "first_goal_pct": 56.2,
              "start_score": "0-1",
              "fav_name": "South Africa",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 30.2,
              "small_lead_pct": 7.4,
              "big_lead_pct": 2.3,
              "fav_win_pct": 9.7,
              "fav_draw_pct": 20.5,
              "fav_lose_pct": 69.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "South Africa 追平（平局）",
                  "pct": 20.5
                },
                {
                  "key": "win1",
                  "label": "South Africa 净胜1球翻盘（如 2-1）",
                  "pct": 7.4
                },
                {
                  "key": "win2",
                  "label": "South Africa 净胜≥2球翻盘（如 3-1）",
                  "pct": 2.3
                },
                {
                  "key": "upset_hold",
                  "label": "Canada 保持胜果至终场",
                  "pct": 69.9
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 43.1 分",
                "first_goal_wait": 43.1,
                "fast_pct": 43.5,
                "moderate_pct": 14,
                "slow_pct": 42.4,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 43.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 42.4
                  }
                ]
              },
              "big_delta": -7.6,
              "small_delta": -11.2,
              "narrative": "Canada 先破门（已 0-1） → 「巩固防守」；South Africa 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.1 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 48.4,
              "type_tags": [
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 25,
              "readout_cn": "South Africa · 进球偏少。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 25,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.4,
            "xg_away_ht": 0.52,
            "xg_home_2h": 0.52,
            "xg_away_2h": 0.66,
            "home_win": 21.6,
            "draw": 48.6,
            "away_win": 29.8,
            "top_score": "0-0",
            "top_score_prob": 39.9,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 39.9
              },
              {
                "score": "0-1",
                "prob": 20.7
              },
              {
                "score": "1-0",
                "prob": 15.9
              }
            ],
            "ht_goals_expected": 0.92,
            "ht_over_0_5_pct": 60.1,
            "ht_over_1_5_pct": 23.5,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.4–0.52（约占全场 44%） · 最可能 0-0（39.9%） · 胜平负 21.6/48.6/29.8 · 半场≥1球约 60.1%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】South Africa · 进球偏少。 · 与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.1,
          "xg_gap": 0.26,
          "xg_home": 0.92,
          "xg_away": 1.18,
          "xg_baseline_home": 0.92,
          "xg_baseline_away": 1.18,
          "xg_note": "结构推演用基准 xG 0.92–1.18",
          "lean_note": null,
          "fav_name": "Canada",
          "dog_name": "South Africa",
          "fav_xg": 1.18,
          "dog_xg": 0.92,
          "path_type": "low",
          "path_label": "铁局/小比分",
          "lean": "low",
          "lean_cn": "小比分预测",
          "lean_mode": "prediction",
          "lean_confidence": 65.1,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 48.4,
          "prob_meet_guess": 34.9,
          "guess_n": 3,
          "prob_4_plus": 16,
          "prob_2_or_less": 65.1,
          "totals_line": 2.25,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 62
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 14
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 14
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 11
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
          "summary_cn": "【路径·基准 xG】合计 2.1 · Canada 1.18 / South Africa 0.92 → 主路径「铁局/小比分」约 62% · 小比分预测。 至少 3 球约 34.9% · 超 2.25 约 48.4% · ≤2球 65.1%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.25,
        "tier_label": "South Africa -0.25 · Canada +0.25",
        "totals_line": 2.25,
        "over_pct": 48.4,
        "fair_line": 2.25,
        "line_gap": 0,
        "full_cover_pct": 39.1,
        "fav_win_pct": 28.5,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "South Africa -0.25 · 净胜≥1",
        "line_move_tag": "away_edge",
        "line_move_cn": "向加拿大倾斜",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘",
        "agent_pick_confidence": null,
        "agent_spread_cn": "南非 +0/0.5 @0.98",
        "agent_totals_cn": "小球 2/2.5",
        "totals_level": "neutral",
        "totals_show_lean": false,
        "totals_lean_side": "neutral"
      },
      "group_context": {
        "group": "KO",
        "label": "KO组 · 第 1 轮",
        "matchday": 1,
        "standings": [],
        "home": {
          "team": "South Africa",
          "rank": "—",
          "pts": 0,
          "played": 0,
          "if_1st": "32强路径待定",
          "if_1st_r16": "—",
          "if_1st_corridor": "",
          "if_2nd": "32强路径待定",
          "if_2nd_r16": "—",
          "if_2nd_corridor": "",
          "if_3rd": "32强路径待定",
          "if_3rd_r16": "—"
        },
        "away": {
          "team": "Canada",
          "rank": "—",
          "pts": 0,
          "played": 0,
          "if_1st": "32强路径待定",
          "if_1st_r16": "—",
          "if_1st_corridor": "",
          "if_2nd": "32强路径待定",
          "if_2nd_r16": "—",
          "if_2nd_corridor": "",
          "if_3rd": "32强路径待定",
          "if_3rd_r16": "—"
        },
        "cross_group_notes": [
          "G 组 Belgium 5 分领跑",
          "H 组 Spain 7 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 7 分领跑",
          "I 组 France 9 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": null,
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "小组赛第 1 轮，各队普遍抢分意愿强，故意控分动机低；以下路径预判供后续轮次参考。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "South Africa 若取胜：积分 3，KO 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Canada 若取胜：积分 3，客场抢分将改变 KO 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 绑定组 背景下，名次差 1 位可能改变 32 强对手。"
        ]
      }
    }
  ],
  "nextMatch": {
    "group": "KO",
    "matchday": null,
    "date": "2026-06-28",
    "time": "12:00",
    "time_local": "12:00 PT",
    "timezone": "PDT (UTC-7)",
    "time_beijing": "03:00",
    "date_beijing": "6月29日",
    "time_beijing_full": "北京时间 6月29日 03:00",
    "venue": "SoFi Stadium",
    "city": "Inglewood, USA",
    "home": {
      "name": "South Africa",
      "iso": "za",
      "fifaRank": 59,
      "rating": 65
    },
    "away": {
      "name": "Canada",
      "iso": "ca",
      "fifaRank": 27,
      "rating": 78
    },
    "teaser": "32强 M73 · 南非 vs 加拿大",
    "home_win": 29,
    "draw": 30,
    "away_win": 42,
    "predicted_score": "0-1",
    "key_player_home": "Teboho Mokoena",
    "key_player_away": "Alphonso Davies"
  },
  "upcomingMatches": [
    {
      "id": "m74",
      "round": "R32",
      "round_cn": "32强",
      "group": "KO",
      "time_beijing_full": "北京时间 6月30日 04:30",
      "venue": "Gillette Stadium",
      "city": "波士顿",
      "home": {
        "name": "Germany",
        "iso": "de"
      },
      "away": {
        "name": "Paraguay",
        "iso": "py"
      },
      "teaser": "M74 · E1 vs 3rd"
    },
    {
      "id": "m76",
      "round": "R32",
      "round_cn": "32强",
      "group": "KO",
      "time_beijing_full": "北京时间 6月30日 01:00",
      "venue": "NRG Stadium",
      "city": "休斯顿",
      "home": {
        "name": "Brazil",
        "iso": "br"
      },
      "away": {
        "name": "Japan",
        "iso": "jp"
      },
      "teaser": "M76 · C1 vs F2"
    },
    {
      "id": "m75",
      "round": "R32",
      "round_cn": "32强",
      "group": "KO",
      "time_beijing_full": "北京时间 6月30日 09:00",
      "venue": "Estadio BBVA",
      "city": "蒙特雷",
      "home": {
        "name": "Netherlands",
        "iso": "nl"
      },
      "away": {
        "name": "Morocco",
        "iso": "ma"
      },
      "teaser": "M75 · F1 vs C2"
    },
    {
      "id": "m77",
      "round": "R32",
      "round_cn": "32强",
      "group": "KO",
      "time_beijing_full": "北京时间 7月1日 05:00",
      "venue": "MetLife Stadium",
      "city": "纽约/新泽西",
      "home": {
        "name": "France",
        "iso": "fr"
      },
      "away": {
        "name": "Sweden",
        "iso": "se"
      },
      "teaser": "M77 · I1 vs 3rd"
    },
    {
      "id": "m78",
      "round": "R32",
      "round_cn": "32强",
      "group": "KO",
      "time_beijing_full": "北京时间 7月1日 01:00",
      "venue": "AT&T Stadium",
      "city": "达拉斯",
      "home": {
        "name": "Côte d'Ivoire",
        "iso": "py"
      },
      "away": {
        "name": "Norway",
        "iso": "no"
      },
      "teaser": "M78 · E2 vs I2"
    }
  ]
};
