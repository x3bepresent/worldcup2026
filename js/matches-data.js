// 今日赛事 — Day 9 (signals enriched)
// Last updated: 2026-06-20T14:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-20T14:00:00+08:00",
  "syncSource": "FIFA 赛程 · Day 14 · weather enriched · 推演概要+小组形势",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 14 气候预报已更新（m49–m54，共6场）",
      "time": "6月25日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 昨日：葡5-0乌 · 英0-0加 · 巴0-1克 · 哥1-0刚 · C罗双响",
      "time": "赛果回顾"
    },
    {
      "tag": "PREVIEW",
      "text": "📅 今日6场 · 瑞-加/波黑-卡(03:00) · 苏-巴/摩-海(06:00) · 捷-墨/南非-韩(09:00)",
      "time": "6月25日"
    },
    {
      "tag": "PREVIEW",
      "text": "A/B/C组末轮：墨西哥6分 · 瑞士加拿大各4分 · 巴西/摩洛哥领跑",
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
      "id": "m51",
      "fifa_match_number": 51,
      "fifa_match_id": "400021451",
      "group": "B",
      "matchday": 3,
      "date": "2026-06-24",
      "time": "12:00",
      "time_local": "12:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "03:00",
      "date_beijing": "6月25日",
      "time_beijing_full": "北京时间 6月25日 03:00",
      "venue": "BC Place",
      "city": "Vancouver, Canada",
      "note": "B组末轮 · 瑞士 vs 加拿大 · 温哥华",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Kobel; Akanji, Schär, Rodríguez, Widmer; Xhaka, Freuler; Vargas, Rieder, Embolo; Ndoye",
          "away": "St. Clair; Johnston, Miller, Cornelius; Buchanan, Eustáquio, Osorio; Larin, David, Ahmed",
          "source": "TSN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Switzerland",
        "iso": "ch",
        "flag": "",
        "fifa_rank": 19,
        "rating": 77,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "D"
        ],
        "coach": "Murat Yakin",
        "stars": [
          {
            "name": "Granit Xhaka",
            "pos": "CM",
            "club": "Sunderland",
            "desc": "B组榜首对话 · 各4分",
            "rating": 8.2
          }
        ],
        "star": {
          "name": "Granit Xhaka",
          "pos": "CM",
          "club": "Sunderland",
          "desc": "B组榜首对话 · 各4分",
          "rating": 8.2
        },
        "injuries": [],
        "rumors": []
      },
      "away": {
        "name": "Canada",
        "iso": "ca",
        "flag": "",
        "fifa_rank": 17,
        "rating": 78,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "W"
        ],
        "coach": "Jesse Marsch",
        "stars": [
          {
            "name": "Alphonso Davies",
            "pos": "LB",
            "club": "Bayern Munich",
            "desc": "东道主末轮须抢分",
            "rating": 8.5
          }
        ],
        "star": {
          "name": "Alphonso Davies",
          "pos": "LB",
          "club": "Bayern Munich",
          "desc": "东道主末轮须抢分",
          "rating": 8.5
        },
        "injuries": [],
        "rumors": []
      },
      "h2h": {
        "home_wins": 1,
        "draws": 1,
        "away_wins": 0,
        "recent": [
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "1-0",
            "winner": "Switzerland"
          }
        ],
        "note": "瑞士略占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 51 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 41,
        "draw": 25,
        "away_win": 34,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.55,
        "xg_away": 1.38,
        "key_factor": "B组榜首对话各4分 · Xhaka vs Davies · 泊松 1-1/2-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 11.4
          },
          {
            "score": "2-1",
            "prob": 8.9
          },
          {
            "score": "1-0",
            "prob": 8.3
          },
          {
            "score": "1-2",
            "prob": 7.9
          },
          {
            "score": "0-1",
            "prob": 7.4
          },
          {
            "score": "2-0",
            "prob": 6.4
          },
          {
            "score": "2-2",
            "prob": 6.1
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Switzerland 暂列 B 组第 2（4 分 · 已赛 2 场） vs Canada 第 1（4 分 · 已赛 2 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "温哥华凉爽 · 20°C · 湿度 65%；气候影响低"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "B组榜首对话各4分 · Xhaka vs Davies · 泊松 1-1/2-1"
          }
        ],
        "base_home_win": 41.3,
        "base_draw": 24.7,
        "base_away_win": 33.9,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.17,
          "notes": []
        }
      },
      "weather": {
        "city": "温哥华",
        "venue": "BC Place",
        "temp": 20,
        "humidity": 65,
        "condition_cn": "温哥华凉爽",
        "impact_summary": "气候影响低",
        "home_adapt": 82,
        "away_adapt": 88,
        "forecast_updated": "2026-06-25 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲午日",
          "day_summary": "甲午日——木火通明",
          "hour_home": "见各场",
          "hour_home_element": "火"
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
        "mystic_verdict": "瑞士金水相济，加拿大木火主场；均分乱局宜稳守。",
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
        "public_lean_cn": "舆论倾向 Switzerland（约 52%）",
        "analysis": "B组榜首对话：瑞士/加拿大各 4 分。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.5
            },
            {
              "score": "2-1",
              "prob": 8.9
            },
            {
              "score": "1-0",
              "prob": 8.3
            }
          ],
          "one_goal_win_pct": 21.1,
          "two_plus_win_pct": 20.2,
          "full_cover_pct": 0,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 2.93,
          "fair_totals_line": 2.75,
          "over_2_5_pct": 55.7,
          "over_3_pct": 33.2,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 0%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.93,
          "fair_line": 2.75,
          "line_gap": 0,
          "over_pct": 44.4,
          "under_pct": 55.6,
          "signal": "aligned",
          "signal_cn": "线与模型贴合",
          "signal_color": "#5BBF8A",
          "signal_desc": "总进球参考与合理值接近。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.75 球接近五五开（约 44.4%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 41,
          "draw": 25,
          "away_win": 34
        },
        "display_summary": {
          "fav_name": "Switzerland",
          "expected_total_goals": 2.89,
          "poisson_fav_win_pct": 41.3,
          "small_lead_pct": 21.1,
          "small_example_score": "1-0",
          "small_example_pct": 8.3,
          "big_cover_pct": 20.2,
          "big_example_score": "2-0",
          "big_example_pct": 6.5,
          "win_shape": {
            "fav_name": "Switzerland",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 30.8%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 8.3,
                "pct": 20.2
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.7,
                "pct": 30.8
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 9.8,
                "pct": 23.7
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 10.4,
                "pct": 25.3
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 51
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 23.7
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 25.3
              }
            ],
            "fav_win_pct": 41
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 30.7 分",
            "first_goal_wait": 30.7,
            "fast_pct": 62.3,
            "moderate_pct": 14.5,
            "slow_pct": 23.1,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 62.3
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.5
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 23.1
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Switzerland 暂无重要伤停 · Canada 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "气候影响低"
            }
          ],
          "xg_context": {
            "baseline_home": 1.55,
            "baseline_away": 1.38,
            "adjusted_home": 1.55,
            "adjusted_away": 1.38,
            "note": "基准 xG 1.55–1.38（未因伤病/气候下调）"
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
            "fav_name": "Switzerland",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 51
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 23.7
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 25.3
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
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2.75,
            "model_total_xg": 2.93,
            "totals_line_gap": 0,
            "totals_high_pct": 44.4,
            "totals_low_pct": 55.6,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 14.8,
            "win_margin2_low_total_pct": 6.5,
            "win_margin2_high_total_pct": 13.8,
            "readout_cn": "取胜约 41%；若取胜，以「险胜收工」为主（51%）。 对着赛前净胜参考，净胜≥1（全达标）约 0%；对着总进球参考 2.75，模型超线概率约 44.4%。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 11.5
            },
            {
              "score": "2-1",
              "pct": 8.9
            },
            {
              "score": "1-0",
              "pct": 8.3
            }
          ],
          "totals_view": {
            "expected_total": 2.9,
            "fair_line": 2.75,
            "market_line": 2.75,
            "line_gap": 0,
            "over_pct": 44.4,
            "gap_warning": null,
            "totals_outlook": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 44.4,
              "line_gap": 0,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.9 · 合理值 2.75 · 总进球参考 2.75 · 模型在常见进球预期附近均衡，不作强倾向"
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
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 44.4,
              "line_gap": 0,
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
                "label": "净胜走向",
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
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 44.4,
                  "line_gap": 0,
                  "market_line": 2.75,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.75",
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
              "team": "Switzerland",
              "first_goal_pct": 52.9,
              "start_score": "1-0",
              "fav_name": "Switzerland",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 84.8,
              "small_lead_pct": 27.8,
              "big_lead_pct": 36.1,
              "fav_win_pct": 63.9,
              "fav_draw_pct": 20.9,
              "fav_lose_pct": 15.2,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Switzerland 保持胜果（净胜≥1）",
                  "pct": 63.9
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 20.9
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 15.2
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 30.8 分",
                "first_goal_wait": 30.8,
                "fast_pct": 55,
                "moderate_pct": 14.8,
                "slow_pct": 30.2,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 55
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 30.2
                  }
                ]
              },
              "big_delta": 15.9,
              "small_delta": 6.7,
              "narrative": "Switzerland 先破门（已 1-0） → 「巩固防守」；Canada 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Switzerland",
                "state_label": "Switzerland 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 51
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 23.7
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 25.3
                  }
                ],
                "margin_line_cn": "净胜差距参考 · 势均力敌",
                "margin_meet_pct": 63.9,
                "margin_half_pct": 0,
                "margin_fail_pct": 27.8,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.39,
                "totals_line_gap": 0.5,
                "totals_high_pct": 55.8,
                "totals_low_pct": 44.2,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 20.1,
                "win_margin2_low_total_pct": 11,
                "win_margin2_high_total_pct": 25.2,
                "readout_cn": "Switzerland 已 1-0 领先：仍取胜约 63.9%。 对着总进球参考 2.75，模型超线概率约 55.8%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Canada",
              "first_goal_pct": 47.1,
              "start_score": "0-1",
              "fav_name": "Canada",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 80.1,
              "small_lead_pct": 27.3,
              "big_lead_pct": 29.7,
              "fav_win_pct": 57,
              "fav_draw_pct": 23.1,
              "fav_lose_pct": 19.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Canada 追平（平局）",
                  "pct": 23.1
                },
                {
                  "key": "win1",
                  "label": "Canada 净胜1球翻盘（如 2-1）",
                  "pct": 27.3
                },
                {
                  "key": "win2",
                  "label": "Canada 净胜≥2球翻盘（如 3-1）",
                  "pct": 29.7
                },
                {
                  "key": "upset_hold",
                  "label": "Canada 保持胜果至终场",
                  "pct": 19.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 30.6 分",
                "first_goal_wait": 30.6,
                "fast_pct": 55.2,
                "moderate_pct": 14.8,
                "slow_pct": 30,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 55.2
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 30
                  }
                ]
              },
              "big_delta": 9.5,
              "small_delta": 6.2,
              "narrative": "Canada 先破门（已 0-1） → 「巩固防守」；Switzerland 「组织反扑」。落后方压上反扑，比赛更开放，但热门要净胜两球以上仍须连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.9 · 合理值 2.75 · 总进球参考 2.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 44.4,
              "type_tags": [
                {
                  "key": "even_open",
                  "label": "均势开放"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 21,
              "readout_cn": "Switzerland · 均势开放。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": null,
            "archetype": {
              "tags": [
                {
                  "key": "even_open",
                  "label": "均势开放"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 21,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.68,
            "xg_away_ht": 0.61,
            "xg_home_2h": 0.87,
            "xg_away_2h": 0.77,
            "home_win": 32.1,
            "draw": 40.2,
            "away_win": 27.7,
            "top_score": "0-0",
            "top_score_prob": 27.5,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 27.5
              },
              {
                "score": "1-0",
                "prob": 18.7
              },
              {
                "score": "0-1",
                "prob": 16.8
              }
            ],
            "ht_goals_expected": 1.29,
            "ht_over_0_5_pct": 72.5,
            "ht_over_1_5_pct": 37,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.68–0.61（约占全场 44%） · 最可能 0-0（27.5%） · 胜平负 32.1/40.2/27.7 · 半场≥1球约 72.5%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Switzerland · 均势开放。 · 与模型 xG 对照：均衡 · 与赛前净胜看法基本一致（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.93,
          "xg_gap": 0.17,
          "xg_home": 1.55,
          "xg_away": 1.38,
          "xg_baseline_home": 1.55,
          "xg_baseline_away": 1.38,
          "xg_note": "结构推演用基准 xG 1.55–1.38",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Switzerland",
          "dog_name": "Canada",
          "fav_xg": 1.55,
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
          "prob_over_line": 44.4,
          "prob_meet_guess": 55.7,
          "guess_n": 3,
          "prob_4_plus": 33.2,
          "prob_2_or_less": 44.3,
          "totals_line": 2.75,
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
          "summary_cn": "【路径·基准 xG】合计 2.93 · Switzerland 1.55 / Canada 1.38 → 主路径「铁局/小比分」约 45%。 至少 3 球约 55.7% · 超 2.75 约 44.4% · ≤2球 44.3%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "B",
        "label": "B组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Canada",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 7,
            "ga": 1
          },
          {
            "team": "Switzerland",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 5,
            "ga": 2
          },
          {
            "team": "Bosnia and Herzegovina",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 2,
            "ga": 5
          },
          {
            "team": "Qatar",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 1,
            "ga": 7
          }
        ],
        "home": {
          "team": "Switzerland",
          "rank": 2,
          "pts": 4,
          "played": 2,
          "if_1st": "32强 M85 · B 组第 1 vs 最佳第 3（E/F/G/I/J 池） → 当前 A 组第 2倾向 South Korea",
          "if_1st_r16": "16强 M96 · 对阵 K 组第 1 vs 最佳第 3（D/E/I/J/L 池）之胜者",
          "if_1st_corridor": "上半区深度取决于第 3 名落位",
          "if_2nd": "32强 M73 · B 组第 2 vs A 组第 2 → 当前 A 组第 1倾向 Mexico（强队）",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "墨/韩/加/瑞次席若出线，16 强或遇 F1/C2 胜者（荷兰/巴西走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 A/E/F/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Canada",
          "rank": 1,
          "pts": 4,
          "played": 2,
          "if_1st": "32强 M85 · B 组第 1 vs 最佳第 3（E/F/G/I/J 池） → 当前 A 组第 2倾向 South Korea",
          "if_1st_r16": "16强 M96 · 对阵 K 组第 1 vs 最佳第 3（D/E/I/J/L 池）之胜者",
          "if_1st_corridor": "上半区深度取决于第 3 名落位",
          "if_2nd": "32强 M73 · B 组第 2 vs A 组第 2 → 当前 A 组第 1倾向 Mexico（强队）",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "墨/韩/加/瑞次席若出线，16 强或遇 F1/C2 胜者（荷兰/巴西走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 A/E/F/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "A 组：头名 Mexico 6 分 · 次席 South Korea 3 分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 France 6 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "B 组次席与 A 组次席同进 M73，16 强进入 M90 上半区。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Canada",
          "reason": "Canada 末轮或存在「避开某 32 强对手 / 保小组第 2 进更顺半区」的战术选择，需结合绑定组（如 C↔F）同期赛果。",
          "optimal_summary": "策略最优解（推演）：Canada 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；若次席仍紧追，仍宜控制场面——可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Switzerland 若取胜：积分 7，B 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Canada 若取胜：积分 7，客场抢分将改变 B 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 A 组：头名 Mexico 6 分 · 次席 South Korea 3 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：B 组次席与 A 组次席同进 M73，16 强进入 M90 上半区。"
        ]
      }
    },
    {
      "id": "m52",
      "fifa_match_number": 52,
      "fifa_match_id": "400021448",
      "group": "B",
      "matchday": 3,
      "date": "2026-06-24",
      "time": "12:00",
      "time_local": "12:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "03:00",
      "date_beijing": "6月25日",
      "time_beijing_full": "北京时间 6月25日 03:00",
      "venue": "Lumen Field",
      "city": "Seattle, USA",
      "note": "B组末轮 · 波黑 vs 卡塔尔 · 西雅图",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Begović; Dedić, Hadžikadunić, Karić; Tahirović, Stevanović; Bajraktarević, Krpić, Džeko; Prekazi",
          "away": "Barsham; Miguel, Ró-Ró, Aïeb; Hatem, Boudiaf; Afif, Al-Haydos, Muntari; Muntazir",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Bosnia and Herzegovina",
        "iso": "ba",
        "flag": "",
        "fifa_rank": 68,
        "rating": 68,
        "form": [
          "L",
          "D",
          "W",
          "L",
          "W"
        ],
        "coach": "Sergej Barbarez",
        "stars": [
          {
            "name": "Edin Džeko",
            "pos": "ST",
            "club": "Fiorentina",
            "desc": "1分须取胜",
            "rating": 8
          }
        ],
        "star": {
          "name": "Edin Džeko",
          "pos": "ST",
          "club": "Fiorentina",
          "desc": "1分须取胜",
          "rating": 8
        },
        "injuries": [],
        "rumors": []
      },
      "away": {
        "name": "Qatar",
        "iso": "qa",
        "flag": "",
        "fifa_rank": 65,
        "rating": 60,
        "form": [
          "L",
          "D",
          "L",
          "W",
          "L"
        ],
        "coach": "Luis Castro",
        "stars": [
          {
            "name": "Akram Afif",
            "pos": "LW",
            "club": "Al-Sadd",
            "desc": "1分垫底争出线",
            "rating": 7.8
          }
        ],
        "star": {
          "name": "Akram Afif",
          "pos": "LW",
          "club": "Al-Sadd",
          "desc": "1分垫底争出线",
          "rating": 7.8
        },
        "injuries": [],
        "rumors": []
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 1,
        "recent": [
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "0-1",
            "winner": "Qatar"
          }
        ],
        "note": "卡塔尔友谊赛胜"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 52 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 45,
        "draw": 29,
        "away_win": 26,
        "score": "1-1",
        "confidence": 68,
        "xg_home": 1.42,
        "xg_away": 1.05,
        "key_factor": "B组垫底对话 · Džeko vs Afif · 泊松 2-1/1-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.6
          },
          {
            "score": "1-0",
            "prob": 12
          },
          {
            "score": "2-1",
            "prob": 9
          },
          {
            "score": "0-1",
            "prob": 8.9
          },
          {
            "score": "2-0",
            "prob": 8.5
          },
          {
            "score": "0-0",
            "prob": 8.5
          },
          {
            "score": "1-2",
            "prob": 6.6
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Bosnia and Herzegovina 暂列 B 组第 3（1 分 · 已赛 2 场） vs Qatar 第 4（1 分 · 已赛 2 场）；组内 Canada 4分、Switzerland 4分 领先；直接对话权重极高"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "西雅图凉爽 · 19°C · 湿度 58%；气候影响低"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "B组垫底对话 · Džeko vs Afif · 泊松 2-1/1-1"
          }
        ],
        "base_home_win": 43,
        "base_draw": 30,
        "base_away_win": 27,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 3,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.37,
          "notes": [
            "xG 接近且战术偏保守"
          ]
        }
      },
      "weather": {
        "city": "西雅图",
        "venue": "Lumen Field",
        "temp": 19,
        "humidity": 58,
        "condition_cn": "西雅图凉爽",
        "impact_summary": "气候影响低",
        "home_adapt": 80,
        "away_adapt": 78,
        "forecast_updated": "2026-06-25 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲午日",
          "day_summary": "甲午日——木火通明",
          "hour_home": "见各场",
          "hour_home_element": "火"
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
        "home_score": 58,
        "away_score": 42,
        "mystic_verdict": "波黑金土须破局，卡塔尔水火守势。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.5,
        "tier_label": "Bosnia and Herzegovina 被看好 · 净胜约 0.5 球",
        "implied_tier": 0,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Bosnia and Herzegovina（约 58%）",
        "analysis": "波黑 1 分 vs 卡塔尔 1 分 · 垫底争出线。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12.7
            },
            {
              "score": "1-0",
              "prob": 12.1
            },
            {
              "score": "2-1",
              "prob": 9
            }
          ],
          "one_goal_win_pct": 23.6,
          "two_plus_win_pct": 21.8,
          "full_cover_pct": 45.3,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.094,
          "dog_cover_ev": 0.094,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.47,
          "fair_totals_line": 2,
          "over_2_5_pct": 44.6,
          "over_3_pct": 23.3,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 45.3%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.47,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 44.6,
          "under_pct": 55.4,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 44.6%）",
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
          "home_win": 45,
          "draw": 29,
          "away_win": 26
        },
        "display_summary": {
          "fav_name": "Bosnia and Herzegovina",
          "expected_total_goals": 2.45,
          "poisson_fav_win_pct": 45.3,
          "small_lead_pct": 23.6,
          "small_example_score": "1-0",
          "small_example_pct": 12.1,
          "big_cover_pct": 21.8,
          "big_example_score": "2-0",
          "big_example_pct": 8.6,
          "win_shape": {
            "fav_name": "Bosnia and Herzegovina",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 27.8%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 12.1,
                "pct": 26.6
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.5,
                "pct": 25.4
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 12.6,
                "pct": 27.8
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 9.1,
                "pct": 20.2
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 52
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 27.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.2
              }
            ],
            "fav_win_pct": 45
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 36.4 分",
            "first_goal_wait": 36.4,
            "fast_pct": 56.1,
            "moderate_pct": 14.8,
            "slow_pct": 29.1,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 56.1
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 29.1
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Bosnia and Herzegovina 暂无重要伤停 · Qatar 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "气候影响低"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 接近且战术偏保守（平 +3%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.42,
            "baseline_away": 1.05,
            "adjusted_home": 1.42,
            "adjusted_away": 1.05,
            "note": "基准 xG 1.42–1.05（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Bosnia and Herzegovina 被看好 · 净胜约 0.5 球",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5"
          },
          "win_outlook": {
            "fav_name": "Bosnia and Herzegovina",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 52
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 27.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.2
              }
            ],
            "margin_line_cn": "Bosnia and Herzegovina · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 45.3,
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
            "model_total_xg": 2.47,
            "totals_line_gap": 0.5,
            "totals_high_pct": 44.6,
            "totals_low_pct": 55.4,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 20.6,
            "win_margin2_low_total_pct": 8.6,
            "win_margin2_high_total_pct": 13.2,
            "readout_cn": "取胜约 45%；若取胜，以「险胜收工」为主（52%）。 对着赛前净胜参考，净胜≥1（全达标）约 45.3%；对着总进球参考 2.5，模型超线概率约 44.6%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.7
            },
            {
              "score": "1-0",
              "pct": 12.1
            },
            {
              "score": "2-1",
              "pct": 9
            }
          ],
          "totals_view": {
            "expected_total": 2.5,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 44.6,
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
              "over_pct": 44.6,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.5 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Bosnia and Herzegovina · 净胜走向：有达标可能",
            "sub_cn": "达标概率约 45.3% · 有达标可能 进球氛围：几乎五五开",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Bosnia and Herzegovina",
              "market_expect_cn": "净胜≥1",
              "meet_pct": 45.3,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "有达标可能",
              "headline_cn": "Bosnia and Herzegovina · 净胜走向：有达标可能",
              "pill_cn": "达标概率约 45.3% · 有达标可能",
              "detail_cn": "Bosnia and Herzegovina · 赛前外界预期 净胜≥1。模型推演达标概率约 45.3%；有一定达标空间，但非高把握。",
              "extra_stats_cn": "",
              "full_cover_pct": 45.3,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": 0.5,
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
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 44.6,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "possible",
                  "label_cn": "有达标可能",
                  "color": "#C8A96E",
                  "fav_name": "Bosnia and Herzegovina",
                  "market_expect_cn": "净胜≥1",
                  "meet_pct": 45.3,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Bosnia and Herzegovina · 净胜走向：有达标可能",
                  "pill_cn": "达标概率约 45.3% · 有达标可能",
                  "detail_cn": "Bosnia and Herzegovina · 赛前外界预期 净胜≥1。模型推演达标概率约 45.3%；有一定达标空间，但非高把握。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 45.3,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "达标概率约 45.3% · 有达标可能",
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
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 44.6,
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
              "team": "Bosnia and Herzegovina",
              "first_goal_pct": 57.5,
              "start_score": "1-0",
              "fav_name": "Bosnia and Herzegovina",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 89.5,
              "small_lead_pct": 30.7,
              "big_lead_pct": 39.3,
              "fav_win_pct": 70,
              "fav_draw_pct": 19.5,
              "fav_lose_pct": 10.4,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Bosnia and Herzegovina 保持胜果（净胜≥1）",
                  "pct": 70
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 19.5
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 10.4
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 36.9 分",
                "first_goal_wait": 36.9,
                "fast_pct": 48.7,
                "moderate_pct": 14.6,
                "slow_pct": 36.8,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 48.7
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.6
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 36.8
                  }
                ]
              },
              "big_delta": 17.5,
              "small_delta": 7.1,
              "narrative": "Bosnia and Herzegovina 先破门（已 1-0） → 「巩固防守」；Qatar 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Bosnia and Herzegovina",
                "state_label": "Bosnia and Herzegovina 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 52
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 27.8
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 20.2
                  }
                ],
                "margin_line_cn": "Bosnia and Herzegovina · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 70,
                "margin_half_pct": 0,
                "margin_fail_pct": 30.7,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 2,
                "totals_line_gap": 0.25,
                "totals_high_pct": 59.4,
                "totals_low_pct": 40.6,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 28.3,
                "win_margin2_low_total_pct": 14.8,
                "win_margin2_high_total_pct": 24.6,
                "readout_cn": "Bosnia and Herzegovina 已 1-0 领先：仍取胜约 70%。 对着总进球参考 2.5，模型超线概率约 59.4%。 常见 2-0 收尾（相对总进球参考 2.5仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Qatar",
              "first_goal_pct": 42.5,
              "start_score": "0-1",
              "fav_name": "Bosnia and Herzegovina",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 46.2,
              "small_lead_pct": 13.6,
              "big_lead_pct": 7,
              "fav_win_pct": 20.7,
              "fav_draw_pct": 25.5,
              "fav_lose_pct": 53.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Bosnia and Herzegovina 追平（平局）",
                  "pct": 25.5
                },
                {
                  "key": "win1",
                  "label": "Bosnia and Herzegovina 净胜1球翻盘（如 2-1）",
                  "pct": 13.6
                },
                {
                  "key": "win2",
                  "label": "Bosnia and Herzegovina 净胜≥2球翻盘（如 3-1）",
                  "pct": 7
                },
                {
                  "key": "upset_hold",
                  "label": "Qatar 保持胜果至终场",
                  "pct": 53.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 36 分",
                "first_goal_wait": 36,
                "fast_pct": 49.5,
                "moderate_pct": 14.6,
                "slow_pct": 35.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 49.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.6
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 35.9
                  }
                ]
              },
              "big_delta": -14.8,
              "small_delta": -10,
              "narrative": "Qatar 先破门（已 0-1） → 「巩固防守」；Bosnia and Herzegovina 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.5 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 44.6,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 26,
              "readout_cn": "Bosnia and Herzegovina · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 26,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.62,
            "xg_away_ht": 0.46,
            "xg_home_2h": 0.8,
            "xg_away_2h": 0.59,
            "home_win": 33.1,
            "draw": 44.4,
            "away_win": 22.6,
            "top_score": "0-0",
            "top_score_prob": 34,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 34
              },
              {
                "score": "1-0",
                "prob": 21.1
              },
              {
                "score": "0-1",
                "prob": 15.6
              }
            ],
            "ht_goals_expected": 1.08,
            "ht_over_0_5_pct": 66,
            "ht_over_1_5_pct": 29.4,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.62–0.46（约占全场 44%） · 最可能 0-0（34%） · 胜平负 33.1/44.4/22.6 · 半场≥1球约 66%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Bosnia and Herzegovina · 常规对抗。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.47,
          "xg_gap": 0.37,
          "xg_home": 1.42,
          "xg_away": 1.05,
          "xg_baseline_home": 1.42,
          "xg_baseline_away": 1.05,
          "xg_note": "结构推演用基准 xG 1.42–1.05",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Bosnia and Herzegovina",
          "dog_name": "Qatar",
          "fav_xg": 1.42,
          "dog_xg": 1.05,
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
          "prob_over_line": 44.6,
          "prob_meet_guess": 44.6,
          "guess_n": 3,
          "prob_4_plus": 23.3,
          "prob_2_or_less": 55.4,
          "totals_line": 2.5,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 56
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 16
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 16
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
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
          "summary_cn": "【路径·基准 xG】合计 2.47 · Bosnia and Herzegovina 1.42 / Qatar 1.05 → 主路径「铁局/小比分」约 56%。 超 2.5 约 44.6% · ≤2球 55.4%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "B",
        "label": "B组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Canada",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 7,
            "ga": 1
          },
          {
            "team": "Switzerland",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 5,
            "ga": 2
          },
          {
            "team": "Bosnia and Herzegovina",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 2,
            "ga": 5
          },
          {
            "team": "Qatar",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 1,
            "ga": 7
          }
        ],
        "home": {
          "team": "Bosnia and Herzegovina",
          "rank": 3,
          "pts": 1,
          "played": 2,
          "if_1st": "32强 M85 · B 组第 1 vs 最佳第 3（E/F/G/I/J 池） → 当前 A 组第 2倾向 South Korea",
          "if_1st_r16": "16强 M96 · 对阵 K 组第 1 vs 最佳第 3（D/E/I/J/L 池）之胜者",
          "if_1st_corridor": "上半区深度取决于第 3 名落位",
          "if_2nd": "32强 M73 · B 组第 2 vs A 组第 2 → 当前 A 组第 1倾向 Mexico（强队）",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "墨/韩/加/瑞次席若出线，16 强或遇 F1/C2 胜者（荷兰/巴西走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 A/E/F/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Qatar",
          "rank": 4,
          "pts": 1,
          "played": 2,
          "if_1st": "32强 M85 · B 组第 1 vs 最佳第 3（E/F/G/I/J 池） → 当前 A 组第 2倾向 South Korea",
          "if_1st_r16": "16强 M96 · 对阵 K 组第 1 vs 最佳第 3（D/E/I/J/L 池）之胜者",
          "if_1st_corridor": "上半区深度取决于第 3 名落位",
          "if_2nd": "32强 M73 · B 组第 2 vs A 组第 2 → 当前 A 组第 1倾向 Mexico（强队）",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "墨/韩/加/瑞次席若出线，16 强或遇 F1/C2 胜者（荷兰/巴西走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 A/E/F/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "A 组：头名 Mexico 6 分 · 次席 South Korea 3 分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 France 6 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "B 组次席与 A 组次席同进 M73，16 强进入 M90 上半区。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Canada",
          "reason": "Canada 末轮或存在「避开某 32 强对手 / 保小组第 2 进更顺半区」的战术选择，需结合绑定组（如 C↔F）同期赛果。",
          "optimal_summary": "策略最优解（推演）：Canada 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；若次席仍紧追，仍宜控制场面——可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Bosnia and Herzegovina 若取胜：积分 4，B 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Qatar 若取胜：积分 4，客场抢分将改变 B 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 A 组：头名 Mexico 6 分 · 次席 South Korea 3 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：B 组次席与 A 组次席同进 M73，16 强进入 M90 上半区。"
        ]
      }
    },
    {
      "id": "m49",
      "fifa_match_number": 49,
      "fifa_match_id": "400021455",
      "group": "C",
      "matchday": 3,
      "date": "2026-06-24",
      "time": "15:00",
      "time_local": "15:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "06:00",
      "date_beijing": "6月25日",
      "time_beijing_full": "北京时间 6月25日 06:00",
      "venue": "Hard Rock Stadium",
      "city": "Miami Gardens, USA",
      "note": "C组末轮 · 苏格兰 vs 巴西 · 迈阿密",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-2-3-1",
          "home": "Gordon; Hickey, Hanley, Souttar, Robertson; McTominay, McGregor; Gannon-Doak, McGinn, Christie; Adams",
          "away": "Alisson; Danilo, Marquinhos, Militão; Wendell, Casemiro; Vinícius, Paquetá, Rodrygo; Raphinha, Richarlison",
          "source": "BBC 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Scotland",
        "iso": "gb-sct",
        "flag": "",
        "fifa_rank": 38,
        "rating": 71,
        "form": [
          "L",
          "W",
          "D",
          "W",
          "D"
        ],
        "coach": "Steve Clarke",
        "stars": [
          {
            "name": "Scott McTominay",
            "pos": "CM",
            "club": "Napoli",
            "desc": "3分须抢分",
            "rating": 8.2
          }
        ],
        "star": {
          "name": "Scott McTominay",
          "pos": "CM",
          "club": "Napoli",
          "desc": "3分须抢分",
          "rating": 8.2
        },
        "injuries": [],
        "rumors": []
      },
      "away": {
        "name": "Brazil",
        "iso": "br",
        "flag": "",
        "fifa_rank": 5,
        "rating": 88,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "W"
        ],
        "coach": "Carlo Ancelotti",
        "stars": [
          {
            "name": "Vinícius Jr",
            "pos": "LW",
            "club": "Real Madrid",
            "desc": "4分领跑 · 末轮穿盘",
            "rating": 9
          }
        ],
        "star": {
          "name": "Vinícius Jr",
          "pos": "LW",
          "club": "Real Madrid",
          "desc": "4分领跑 · 末轮穿盘",
          "rating": 9
        },
        "injuries": [],
        "rumors": []
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 2,
        "recent": [
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "Brazil"
          }
        ],
        "note": "巴西历史占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 49 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 12,
        "draw": 23,
        "away_win": 66,
        "score": "0-1",
        "confidence": 76,
        "xg_home": 0.88,
        "xg_away": 1.95,
        "key_factor": "C组末轮 · McTominay vs Vinícius · 巴西深盘 · 泊松 0-2/1-2",
        "score_dist": [
          {
            "score": "0-1",
            "prob": 11.5
          },
          {
            "score": "0-2",
            "prob": 11.2
          },
          {
            "score": "1-1",
            "prob": 10.1
          },
          {
            "score": "1-2",
            "prob": 9.9
          },
          {
            "score": "0-3",
            "prob": 7.3
          },
          {
            "score": "1-3",
            "prob": 6.4
          },
          {
            "score": "0-0",
            "prob": 5.9
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Scotland 暂列 C 组第 3（3 分 · 已赛 2 场） vs Brazil 第 1（4 分 · 已赛 2 场）；巴西仅积 4 分须先抢分；C↔F 绑定：头名 32强避 F 组头名（荷兰若领跑 F 组）、次席 32强或直碰荷兰，16 强半区相反"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "迈阿密湿热 · 31°C · 湿度 78%；湿热高"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "C组末轮 · McTominay vs Vinícius · 巴西深盘 · 泊松 0-2/1-2"
          }
        ],
        "base_home_win": 16.5,
        "base_draw": 21.6,
        "base_away_win": 61.9,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": false,
          "closeXg": false,
          "gap": 1.07,
          "notes": []
        }
      },
      "weather": {
        "city": "迈阿密",
        "venue": "Hard Rock Stadium",
        "temp": 31,
        "humidity": 78,
        "condition_cn": "迈阿密湿热",
        "impact_summary": "湿热高",
        "home_adapt": 78,
        "away_adapt": 85,
        "forecast_updated": "2026-06-25 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲午日",
          "day_summary": "甲午日——木火通明",
          "hour_home": "见各场",
          "hour_home_element": "火"
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
        "home_score": 32,
        "away_score": 68,
        "mystic_verdict": "巴西火土旺，苏格兰木水守势。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1.25,
        "tier_label": "Scotland 被看好 · 净胜约 1–2 球",
        "implied_tier": -0.75,
        "tier_gap": 2,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Brazil（约 72%）",
        "analysis": "巴西深盘 vs 苏格兰 3 分须抢分。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "0-1",
              "prob": 11.7
            },
            {
              "score": "0-2",
              "prob": 11.4
            },
            {
              "score": "1-1",
              "prob": 10.3
            }
          ],
          "one_goal_win_pct": 11.3,
          "two_plus_win_pct": 5.2,
          "full_cover_pct": 5.2,
          "half_cover_pct": 0,
          "half_lose_pct": 11.3,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": null,
          "fav_cover_ev": -0.839,
          "dog_cover_ev": 0.839,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.83,
          "fair_totals_line": 2,
          "over_2_5_pct": 53.1,
          "over_3_pct": 30.4,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥2 约 5.2%；仅赢 1 球约 11.3%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.83,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 41.7,
          "under_pct": 58.3,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 2.75 约 58.3% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "applied_delta": {
          "home_win": -5,
          "draw": 1,
          "away_win": 4
        },
        "adjustment_note": "模型微调：主胜 -5% · 平 +1% · 客 +4%",
        "adjusted_probs": {
          "home_win": 12,
          "draw": 23,
          "away_win": 66
        },
        "display_summary": {
          "fav_name": "Scotland",
          "expected_total_goals": 2.76,
          "poisson_fav_win_pct": 16.5,
          "small_lead_pct": 11.3,
          "small_example_score": "1-0",
          "small_example_pct": 5.3,
          "big_cover_pct": 5.2,
          "big_example_score": "2-0",
          "big_example_pct": 2.3,
          "win_shape": {
            "fav_name": "Scotland",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 36.5%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 5.3,
                "pct": 31.9
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 6,
                "pct": 36.5
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 3,
                "pct": 18.2
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 2.2,
                "pct": 13.4
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 68.4
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 18.2
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 13.4
              }
            ],
            "fav_win_pct": 12
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 31.8 分",
            "first_goal_wait": 31.8,
            "fast_pct": 61.1,
            "moderate_pct": 14.6,
            "slow_pct": 24.3,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 61.1
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.6
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 24.3
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Scotland 暂无重要伤停 · Brazil 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "湿热高"
            }
          ],
          "xg_context": {
            "baseline_home": 0.88,
            "baseline_away": 1.95,
            "adjusted_home": 0.88,
            "adjusted_away": 1.95,
            "note": "基准 xG 0.88–1.95（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 2,
            "implied_tier_label": "Brazil 被看好 · 净胜约 0.5–1 球",
            "market_tier_label": "Scotland 被看好 · 净胜约 1–2 球",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 2"
          },
          "win_outlook": {
            "fav_name": "Scotland",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 68.4
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 18.2
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 13.4
              }
            ],
            "margin_line_cn": "Scotland · 赛前净胜参考 净胜≥2（全达标）",
            "margin_meet_pct": 5.2,
            "margin_half_pct": 0,
            "margin_fail_pct": 11.3,
            "margin_full_label": "净胜≥2",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.83,
            "totals_line_gap": 0.75,
            "totals_high_pct": 41.7,
            "totals_low_pct": 58.3,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 7.6,
            "win_margin2_low_total_pct": 2.3,
            "win_margin2_high_total_pct": 2.9,
            "readout_cn": "取胜约 12%；若取胜，以「险胜收工」为主（68.4%）。 对着赛前净胜参考，净胜≥2（全达标）约 5.2%；对着总进球参考 2.75，模型超线概率约 41.7%。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "0-1",
              "pct": 11.7
            },
            {
              "score": "0-2",
              "pct": 11.4
            },
            {
              "score": "1-1",
              "pct": 10.3
            }
          ],
          "totals_view": {
            "expected_total": 2.8,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 41.7,
            "gap_warning": null,
            "totals_outlook": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 41.7,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.8 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Scotland · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 5.2% · 达到预期难度偏大 进球氛围：几乎五五开",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "Scotland",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 5.2,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "Scotland · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 5.2% · 达到预期难度偏大",
              "detail_cn": "Scotland · 赛前外界预期 净胜≥2。模型推演达标概率约 5.2%；外界看法高于 xG 隐含约 2 球，达到预期难度偏大。",
              "extra_stats_cn": "",
              "full_cover_pct": 5.2,
              "half_cover_pct": 0,
              "lose1_pct": 11.3,
              "margin_full_label": "净胜≥2",
              "margin_half_label": null,
              "tier_gap": 2,
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
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 41.7,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "skeptical",
                  "label_cn": "外界预期偏高",
                  "color": "#D95F6A",
                  "fav_name": "Scotland",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 5.2,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "Scotland · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 5.2% · 达到预期难度偏大",
                  "detail_cn": "Scotland · 赛前外界预期 净胜≥2。模型推演达标概率约 5.2%；外界看法高于 xG 隐含约 2 球，达到预期难度偏大。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 5.2,
                  "half_cover_pct": 0,
                  "lose1_pct": 11.3,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": null,
                  "tier_gap": 2,
                  "show_cover": true
                },
                "text": "达标概率约 5.2% · 达到预期难度偏大",
                "color": "#D95F6A",
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
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 41.7,
                  "line_gap": 0.75,
                  "market_line": 2.75,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.75",
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
              "team": "Scotland",
              "first_goal_pct": 31.1,
              "start_score": "1-0",
              "fav_name": "Scotland",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 65.4,
              "small_lead_pct": 23.7,
              "big_lead_pct": 14.7,
              "fav_win_pct": 38.4,
              "fav_draw_pct": 27,
              "fav_lose_pct": 34.6,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Scotland 保持胜果（净胜≥1）",
                  "pct": 38.4
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 27
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 34.6
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 31 分",
                "first_goal_wait": 31,
                "fast_pct": 54.7,
                "moderate_pct": 14.8,
                "slow_pct": 30.5,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 54.7
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 30.5
                  }
                ]
              },
              "big_delta": 9.5,
              "small_delta": 12.4,
              "narrative": "Scotland 先破门（已 1-0） → 「巩固防守」；Brazil 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Scotland",
                "state_label": "Scotland 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 68.4
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 18.2
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 13.4
                  }
                ],
                "margin_line_cn": "Scotland · 赛前净胜参考 净胜≥2（全达标）",
                "margin_meet_pct": 14.7,
                "margin_half_pct": 0,
                "margin_fail_pct": 23.7,
                "margin_full_label": "净胜≥2",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.38,
                "totals_line_gap": 0.5,
                "totals_high_pct": 55.2,
                "totals_low_pct": 44.8,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 15.7,
                "win_margin2_low_total_pct": 6.4,
                "win_margin2_high_total_pct": 8.3,
                "readout_cn": "Scotland 已 1-0 领先：仍取胜约 38.4%。 对着总进球参考 2.75，模型超线概率约 55.2%。 若再扩大，偏「险胜收工」。"
              }
            },
            {
              "side": "away",
              "team": "Brazil",
              "first_goal_pct": 68.9,
              "start_score": "0-1",
              "fav_name": "Scotland",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 19.1,
              "small_lead_pct": 4.4,
              "big_lead_pct": 1.2,
              "fav_win_pct": 5.6,
              "fav_draw_pct": 13.5,
              "fav_lose_pct": 80.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Scotland 追平（平局）",
                  "pct": 13.5
                },
                {
                  "key": "win1",
                  "label": "Scotland 净胜1球翻盘（如 2-1）",
                  "pct": 4.4
                },
                {
                  "key": "win2",
                  "label": "Scotland 净胜≥2球翻盘（如 3-1）",
                  "pct": 1.2
                },
                {
                  "key": "upset_hold",
                  "label": "Brazil 保持胜果至终场",
                  "pct": 80.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 32.6 分",
                "first_goal_wait": 32.6,
                "fast_pct": 53,
                "moderate_pct": 14.8,
                "slow_pct": 32.3,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 53
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 32.3
                  }
                ]
              },
              "big_delta": -4,
              "small_delta": -6.9,
              "narrative": "Brazil 先破门（已 0-1） → 「巩固防守」；Scotland 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.8 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 41.7,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 18,
              "readout_cn": "Scotland · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 18,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.39,
            "xg_away_ht": 0.86,
            "xg_home_2h": 0.49,
            "xg_away_2h": 1.09,
            "home_win": 15.9,
            "draw": 39.1,
            "away_win": 45,
            "top_score": "0-0",
            "top_score_prob": 28.7,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 28.7
              },
              {
                "score": "0-1",
                "prob": 24.6
              },
              {
                "score": "1-0",
                "prob": 11.2
              }
            ],
            "ht_goals_expected": 1.25,
            "ht_over_0_5_pct": 71.3,
            "ht_over_1_5_pct": 35.5,
            "pick": "away",
            "pick_name": "Brazil",
            "summary_cn": "半场 xG 0.39–0.86（约占全场 44%） · 最可能 0-0（28.7%） · 胜平负 15.9/39.1/45 · 半场≥1球约 71.3%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Scotland · 常规对抗。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 2（模型微调：主胜 -5% · 平 +1% · 客 +4%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.83,
          "xg_gap": 1.07,
          "xg_home": 0.88,
          "xg_away": 1.95,
          "xg_baseline_home": 0.88,
          "xg_baseline_away": 1.95,
          "xg_note": "结构推演用基准 xG 0.88–1.95",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Brazil",
          "dog_name": "Scotland",
          "fav_xg": 1.95,
          "dog_xg": 0.88,
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
          "prob_over_line": 41.7,
          "prob_meet_guess": 53.1,
          "guess_n": 3,
          "prob_4_plus": 30.4,
          "prob_2_or_less": 46.9,
          "totals_line": 2.75,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 54
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 19
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
            "弱队上半场效率≥1.0 → 关注弱队开花路径",
            "xG 差≥1.0——样本多为小比分"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 2.83 · Brazil 1.95 / Scotland 0.88 → 主路径「铁局/小比分」约 54%。 至少 3 球约 53.1% · 超 2.75 约 41.7% · ≤2球 46.9%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "C",
        "label": "C组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Brazil",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 3,
            "ga": 0
          },
          {
            "team": "Morocco",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 1
          },
          {
            "team": "Scotland",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 2
          },
          {
            "team": "Haiti",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 0,
            "ga": 3
          }
        ],
        "home": {
          "team": "Scotland",
          "rank": 3,
          "pts": 3,
          "played": 2,
          "if_1st": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 F 组第 2倾向 Japan",
          "if_1st_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_1st_corridor": "法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区",
          "if_2nd": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 F 组第 1倾向 Netherlands（强队）",
          "if_2nd_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_2nd_corridor": "墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 D/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Brazil",
          "rank": 1,
          "pts": 4,
          "played": 2,
          "if_1st": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 F 组第 2倾向 Japan",
          "if_1st_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_1st_corridor": "法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区",
          "if_2nd": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 F 组第 1倾向 Netherlands（强队）",
          "if_2nd_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_2nd_corridor": "墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 D/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "F 组：头名 Netherlands 4 分 · 次席 Japan 同分（32强绑定组）",
          "E 组：头名 Germany 6 分 · 次席 Côte d'Ivoire 3 分（32强绑定组）",
          "I 组：头名 France 6 分 · 次席 Norway 同分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Brazil",
          "reason": "C 组末轮：若 Brazil 已确保出线，头名 32 强打 F 组第 2（Netherlands 若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 通道（法国/德国/挪威/塞内加尔）；次席 32 强极可能直碰 F 组头名，16 强走 A2/B2 温和通道。历史上有强队「算分选半区」先例，但末轮仍须先确保出线。",
          "optimal_summary": "策略最优解（推演）：若 Brazil 末轮前已确保出线，可在「保头名、32强避开 Netherlands」与「落在次席、置换更温和 16 强半区」之间取舍。可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。出线分未稳时，此阶段仍以全力争胜、抢 3 分为上策；尚未到以演练或轮换为名调整名次、接受非胜结果的窗口。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Scotland 若取胜：积分 6，C 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Brazil 若取胜：积分 7，客场抢分将改变 C 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 F 组：头名 Netherlands 4 分 · 次席 Japan 同分（32强绑定组） · E 组：头名 Germany 6 分 · 次席 Côte d'Ivoire 3 分（32强绑定组） · I 组：头名 France 6 分 · 次席 Norway 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "巴西路径提示：C 组第 1 → 32强 M76 打 F 组第 2（荷兰若 F 组头名则 32 强避荷兰）→ 16强 M91 进 E/I 次席走廊；C 组第 2 → 32强 M75 极可能碰 F 组第 1（荷兰）→ 16强 M90 进 A/B 次席走廊。末轮才存在「选半区」博弈，本轮须先抢分。",
          "头名/次席博弈：C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。"
        ]
      }
    },
    {
      "id": "m50",
      "fifa_match_number": 50,
      "fifa_match_id": "400021452",
      "group": "C",
      "matchday": 3,
      "date": "2026-06-24",
      "time": "15:00",
      "time_local": "15:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "06:00",
      "date_beijing": "6月25日",
      "time_beijing_full": "北京时间 6月25日 06:00",
      "venue": "Mercedes-Benz Stadium",
      "city": "Atlanta, USA",
      "note": "C组末轮 · 摩洛哥 vs 海地 · 亚特兰大",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-4-2",
          "home": "Bounou; Hakimi, Saïss, Aguerd; Mazraoui, Amrabat; Ziyech, Ounahi, Sabiri; En-Nesyri, Boufal",
          "away": "Duverger; Jean, Surpris, Gérard; Pierre, Dumond; Jean-Baptiste, Nazon, Arcus; Moreira",
          "source": "FotMob 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Morocco",
        "iso": "ma",
        "flag": "",
        "fifa_rank": 13,
        "rating": 78,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "D"
        ],
        "coach": "Walid Regragui",
        "stars": [
          {
            "name": "Achraf Hakimi",
            "pos": "RB",
            "club": "PSG",
            "desc": "4分领跑 · 末轮穿盘",
            "rating": 8.5
          }
        ],
        "star": {
          "name": "Achraf Hakimi",
          "pos": "RB",
          "club": "PSG",
          "desc": "4分领跑 · 末轮穿盘",
          "rating": 8.5
        },
        "injuries": [],
        "rumors": []
      },
      "away": {
        "name": "Haiti",
        "iso": "ht",
        "flag": "",
        "fifa_rank": 87,
        "rating": 62,
        "form": [
          "L",
          "L",
          "D",
          "L",
          "W"
        ],
        "coach": "Sébastien Migné",
        "stars": [
          {
            "name": "Duckens Nazon",
            "pos": "ST",
            "club": "Pau",
            "desc": "0分已出局",
            "rating": 7
          }
        ],
        "star": {
          "name": "Duckens Nazon",
          "pos": "ST",
          "club": "Pau",
          "desc": "0分已出局",
          "rating": 7
        },
        "injuries": [],
        "rumors": []
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
        "bias_note": "FIFA Match 50 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 53,
        "draw": 29,
        "away_win": 18,
        "score": "1-0",
        "confidence": 78,
        "xg_home": 1.72,
        "xg_away": 0.72,
        "key_factor": "摩洛哥 4 分领跑 vs 海地 0 分 · Hakimi vs Nazon · 泊松 2-0/3-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 15
          },
          {
            "score": "2-0",
            "prob": 12.9
          },
          {
            "score": "1-1",
            "prob": 10.8
          },
          {
            "score": "2-1",
            "prob": 9.3
          },
          {
            "score": "0-0",
            "prob": 8.7
          },
          {
            "score": "3-0",
            "prob": 7.4
          },
          {
            "score": "0-1",
            "prob": 6.3
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Morocco 暂列 C 组第 2（4 分 · 已赛 2 场） vs Haiti 第 4（0 分 · 已赛 2 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "亚特兰大夏午 · 30°C · 湿度 72%；湿热中等"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "摩洛哥 4 分领跑 vs 海地 0 分 · Hakimi vs Nazon · 泊松 2-0/3-0"
          }
        ],
        "base_home_win": 58,
        "base_draw": 28,
        "base_away_win": 15,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 4,
          "ironBucket": false,
          "closeXg": false,
          "gap": 1,
          "notes": [
            "xG 暗示胶着"
          ]
        }
      },
      "weather": {
        "city": "亚特兰大",
        "venue": "Mercedes-Benz Stadium",
        "temp": 30,
        "humidity": 72,
        "condition_cn": "亚特兰大夏午",
        "impact_summary": "湿热中等",
        "home_adapt": 86,
        "away_adapt": 74,
        "forecast_updated": "2026-06-25 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲午日",
          "day_summary": "甲午日——木火通明",
          "hour_home": "见各场",
          "hour_home_element": "火"
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
        "home_score": 72,
        "away_score": 28,
        "mystic_verdict": "摩洛哥金水相生宜穿盘，海地水木偏弱。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1.5,
        "tier_label": "Morocco 被看好 · 净胜约 1.5 球",
        "implied_tier": 0.75,
        "tier_gap": 0.75,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Morocco（约 75%）",
        "analysis": "摩洛哥 4 分领跑 vs 海地 0 分。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 15.1
            },
            {
              "score": "2-0",
              "prob": 13
            },
            {
              "score": "1-1",
              "prob": 10.9
            }
          ],
          "one_goal_win_pct": 26.6,
          "two_plus_win_pct": 34.4,
          "full_cover_pct": 34.4,
          "half_cover_pct": 26.6,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "部分达标净胜=1",
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 2.44,
          "fair_totals_line": 2,
          "over_2_5_pct": 43.6,
          "over_3_pct": 22.3,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥2 约 34.4%；部分达标净胜=1 约 26.6%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.44,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 32.9,
          "under_pct": 67.1,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 2.75 约 67.1% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "applied_delta": {
          "home_win": -4,
          "draw": 1,
          "away_win": 3
        },
        "adjustment_note": "模型微调：主胜 -4% · 平 +1% · 客 +3%",
        "adjusted_probs": {
          "home_win": 53,
          "draw": 29,
          "away_win": 18
        },
        "display_summary": {
          "fav_name": "Morocco",
          "expected_total_goals": 2.4,
          "poisson_fav_win_pct": 61.1,
          "small_lead_pct": 26.6,
          "small_example_score": "1-0",
          "small_example_pct": 15.1,
          "big_cover_pct": 34.4,
          "big_example_score": "2-0",
          "big_example_pct": 13,
          "win_shape": {
            "fav_name": "Morocco",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 33.5%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 15.1,
                "pct": 24.8
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.5,
                "pct": 18.8
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 20.5,
                "pct": 33.5
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 14,
                "pct": 22.9
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 43.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 22.9
              }
            ],
            "fav_win_pct": 53
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 36.9 分",
            "first_goal_wait": 36.9,
            "fast_pct": 55.7,
            "moderate_pct": 14.8,
            "slow_pct": 29.5,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 55.7
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 29.5
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Morocco 暂无重要伤停 · Haiti 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "湿热中等"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 暗示胶着（平 +4%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.72,
            "baseline_away": 0.72,
            "adjusted_home": 1.72,
            "adjusted_away": 0.72,
            "note": "基准 xG 1.72–0.72（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 0.75,
            "implied_tier_label": "Morocco 被看好 · 净胜约 0.5–1 球",
            "market_tier_label": "Morocco 被看好 · 净胜约 1.5 球",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75 · 部分达标净胜=1 约 26.6%"
          },
          "win_outlook": {
            "fav_name": "Morocco",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 43.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 22.9
              }
            ],
            "margin_line_cn": "Morocco · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
            "margin_meet_pct": 34.4,
            "margin_half_pct": 26.6,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "部分达标净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.44,
            "totals_line_gap": 0.75,
            "totals_high_pct": 32.9,
            "totals_low_pct": 67.1,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 28.1,
            "win_margin2_low_total_pct": 13,
            "win_margin2_high_total_pct": 21.4,
            "readout_cn": "取胜约 53%；若取胜，以「险胜收工」为主（43.6%）。 对着赛前净胜参考，净胜≥2（全达标）约 34.4%；部分达标净胜=1 约 26.6%；对着总进球参考 2.75，模型超线概率约 32.9%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 2.75。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 15.1
            },
            {
              "score": "2-0",
              "pct": 13
            },
            {
              "score": "1-1",
              "pct": 10.9
            }
          ],
          "totals_view": {
            "expected_total": 2.4,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 32.9,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 33,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 32.9,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.4 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Morocco · 净胜走向：部分达标更现实",
            "sub_cn": "达标概率约 34.4% · 部分达标更现实 进球氛围：略偏闷",
            "spread": {
              "level": "partial",
              "label_cn": "部分达标更现实",
              "color": "#C8A96E",
              "fav_name": "Morocco",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 34.4,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "部分达标更现实",
              "headline_cn": "Morocco · 净胜走向：部分达标更现实",
              "pill_cn": "达标概率约 34.4% · 部分达标更现实",
              "detail_cn": "Morocco · 赛前外界预期 净胜≥2。模型推演达标概率约 34.4%；全档达标偏难，部分达标更现实（部分达标净胜=1 约 26.6%）。",
              "extra_stats_cn": "部分达标净胜=1 约 26.6%",
              "full_cover_pct": 34.4,
              "half_cover_pct": 26.6,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "部分达标净胜=1",
              "tier_gap": 0.75,
              "show_cover": true
            },
            "totals": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 33,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 32.9,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "partial",
                  "label_cn": "部分达标更现实",
                  "color": "#C8A96E",
                  "fav_name": "Morocco",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 34.4,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "部分达标更现实",
                  "headline_cn": "Morocco · 净胜走向：部分达标更现实",
                  "pill_cn": "达标概率约 34.4% · 部分达标更现实",
                  "detail_cn": "Morocco · 赛前外界预期 净胜≥2。模型推演达标概率约 34.4%；全档达标偏难，部分达标更现实（部分达标净胜=1 约 26.6%）。",
                  "extra_stats_cn": "部分达标净胜=1 约 26.6%",
                  "full_cover_pct": 34.4,
                  "half_cover_pct": 26.6,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "部分达标净胜=1",
                  "tier_gap": 0.75,
                  "show_cover": true
                },
                "text": "达标概率约 34.4% · 部分达标更现实",
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
                  "meter_pos": 33,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 32.9,
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
              "team": "Morocco",
              "first_goal_pct": 70.5,
              "start_score": "1-0",
              "fav_name": "Morocco",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 95.6,
              "small_lead_pct": 28.7,
              "big_lead_pct": 53.8,
              "fav_win_pct": 82.5,
              "fav_draw_pct": 13.1,
              "fav_lose_pct": 4.4,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Morocco 保持胜果（净胜≥1）",
                  "pct": 82.5
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 13.1
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 4.4
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 37.8 分",
                "first_goal_wait": 37.8,
                "fast_pct": 47.8,
                "moderate_pct": 14.5,
                "slow_pct": 37.7,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 47.8
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.5
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 37.7
                  }
                ]
              },
              "big_delta": 19.4,
              "small_delta": 2.1,
              "narrative": "Morocco 先破门（已 1-0） → 「巩固防守」；Haiti 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Morocco",
                "state_label": "Morocco 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 43.6
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 33.5
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 22.9
                  }
                ],
                "margin_line_cn": "Morocco · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
                "margin_meet_pct": 53.8,
                "margin_half_pct": 28.7,
                "margin_fail_pct": 28.7,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "部分达标净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.95,
                "totals_line_gap": 0.5,
                "totals_high_pct": 44.4,
                "totals_low_pct": 55.6,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 33.2,
                "win_margin2_low_total_pct": 18.9,
                "win_margin2_high_total_pct": 34.9,
                "readout_cn": "Morocco 已 1-0 领先：仍取胜约 82.5%。 对着总进球参考 2.75，模型超线概率约 44.4%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Haiti",
              "first_goal_pct": 29.5,
              "start_score": "0-1",
              "fav_name": "Morocco",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 60,
              "small_lead_pct": 18.8,
              "big_lead_pct": 12.7,
              "fav_win_pct": 31.5,
              "fav_draw_pct": 28.5,
              "fav_lose_pct": 40,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Morocco 追平（平局）",
                  "pct": 28.5
                },
                {
                  "key": "win1",
                  "label": "Morocco 净胜1球翻盘（如 2-1）",
                  "pct": 18.8
                },
                {
                  "key": "win2",
                  "label": "Morocco 净胜≥2球翻盘（如 3-1）",
                  "pct": 12.7
                },
                {
                  "key": "upset_hold",
                  "label": "Haiti 保持胜果至终场",
                  "pct": 40
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 36 分",
                "first_goal_wait": 36,
                "fast_pct": 49.5,
                "moderate_pct": 14.6,
                "slow_pct": 35.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 49.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.6
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 35.9
                  }
                ]
              },
              "big_delta": -21.7,
              "small_delta": -7.8,
              "narrative": "Haiti 先破门（已 0-1） → 「巩固防守」；Morocco 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.4 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 32.9,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 24,
              "readout_cn": "Morocco · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
            "xg_home_ht": 0.76,
            "xg_away_ht": 0.32,
            "xg_home_2h": 0.96,
            "xg_away_2h": 0.4,
            "home_win": 42.9,
            "draw": 42.7,
            "away_win": 14.3,
            "top_score": "0-0",
            "top_score_prob": 34,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 34
              },
              {
                "score": "1-0",
                "prob": 25.8
              },
              {
                "score": "0-1",
                "prob": 10.9
              }
            ],
            "ht_goals_expected": 1.08,
            "ht_over_0_5_pct": 66,
            "ht_over_1_5_pct": 29.4,
            "pick": "home",
            "pick_name": "Morocco",
            "summary_cn": "半场 xG 0.76–0.32（约占全场 44%） · 最可能 0-0（34%） · 胜平负 42.9/42.7/14.3 · 半场≥1球约 66%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Morocco · 常规对抗。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75 · 部分达标净胜=1 约 26.6%（模型微调：主胜 -4% · 平 +1% · 客 +3%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.44,
          "xg_gap": 1,
          "xg_home": 1.72,
          "xg_away": 0.72,
          "xg_baseline_home": 1.72,
          "xg_baseline_away": 0.72,
          "xg_note": "结构推演用基准 xG 1.72–0.72",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Morocco",
          "dog_name": "Haiti",
          "fav_xg": 1.72,
          "dog_xg": 0.72,
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
          "prob_over_line": 32.9,
          "prob_meet_guess": 43.6,
          "guess_n": 3,
          "prob_4_plus": 22.3,
          "prob_2_or_less": 56.4,
          "totals_line": 2.75,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 69
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 17
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 7
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 7
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
          "summary_cn": "【路径·基准 xG】合计 2.44 · Morocco 1.72 / Haiti 0.72 → 主路径「铁局/小比分」约 69%。 至少 3 球约 43.6% · 超 2.75 约 32.9% · ≤2球 56.4%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "C",
        "label": "C组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Brazil",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 3,
            "ga": 0
          },
          {
            "team": "Morocco",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 1
          },
          {
            "team": "Scotland",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 2
          },
          {
            "team": "Haiti",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 0,
            "ga": 3
          }
        ],
        "home": {
          "team": "Morocco",
          "rank": 2,
          "pts": 4,
          "played": 2,
          "if_1st": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 F 组第 2倾向 Japan",
          "if_1st_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_1st_corridor": "法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区",
          "if_2nd": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 F 组第 1倾向 Netherlands（强队）",
          "if_2nd_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_2nd_corridor": "墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 D/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Haiti",
          "rank": 4,
          "pts": 0,
          "played": 2,
          "if_1st": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 F 组第 2倾向 Japan",
          "if_1st_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_1st_corridor": "法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区",
          "if_2nd": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 F 组第 1倾向 Netherlands（强队）",
          "if_2nd_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_2nd_corridor": "墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 D/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "F 组：头名 Netherlands 4 分 · 次席 Japan 同分（32强绑定组）",
          "E 组：头名 Germany 6 分 · 次席 Côte d'Ivoire 3 分（32强绑定组）",
          "I 组：头名 France 6 分 · 次席 Norway 同分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Morocco",
          "reason": "C 组末轮：若 Morocco 已确保出线，头名 32 强打 F 组第 2（Netherlands 若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 通道（法国/德国/挪威/塞内加尔）；次席 32 强极可能直碰 F 组头名，16 强走 A2/B2 温和通道。历史上有强队「算分选半区」先例，但末轮仍须先确保出线。",
          "optimal_summary": "策略最优解（推演）：若 Morocco 末轮前已确保出线，可在「保头名、32强避开 Netherlands」与「落在次席、置换更温和 16 强半区」之间取舍。可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。出线分未稳时，此阶段仍以全力争胜、抢 3 分为上策；尚未到以演练或轮换为名调整名次、接受非胜结果的窗口。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Morocco 若取胜：积分 7，C 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Haiti 若取胜：积分 3，客场抢分将改变 C 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 F 组：头名 Netherlands 4 分 · 次席 Japan 同分（32强绑定组） · E 组：头名 Germany 6 分 · 次席 Côte d'Ivoire 3 分（32强绑定组） · I 组：头名 France 6 分 · 次席 Norway 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。"
        ]
      }
    },
    {
      "id": "m53",
      "fifa_match_number": 53,
      "fifa_match_id": "400021444",
      "group": "A",
      "matchday": 3,
      "date": "2026-06-24",
      "time": "21:00",
      "time_local": "20:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "09:00",
      "date_beijing": "6月25日",
      "time_beijing_full": "北京时间 6月25日 09:00",
      "venue": "Estadio Azteca",
      "city": "Mexico City, Mexico",
      "note": "A组末轮 · 捷克 vs 墨西哥 · 阿兹特克",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "3-4-3 / 4-2-3-1",
          "home": "Staněk; Holes, Brabec, Zmrhal; Coufal, Souček, Sadílek; Schick, Chytil, Provod",
          "away": "Ochoa; Arteaga, Montes, Vasquez; Álvarez, Chávez; Lozano, Jiménez, Vega; Mora",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Czechia",
        "iso": "cz",
        "flag": "",
        "fifa_rank": 40,
        "rating": 72,
        "form": [
          "L",
          "D",
          "W",
          "W",
          "L"
        ],
        "coach": "Ivan Hašek",
        "stars": [
          {
            "name": "Patrik Schick",
            "pos": "ST",
            "club": "Bayer Leverkusen",
            "desc": "1分须抢分",
            "rating": 8
          }
        ],
        "star": {
          "name": "Patrik Schick",
          "pos": "ST",
          "club": "Bayer Leverkusen",
          "desc": "1分须抢分",
          "rating": 8
        },
        "injuries": [],
        "rumors": []
      },
      "away": {
        "name": "Mexico",
        "iso": "mx",
        "flag": "",
        "fifa_rank": 12,
        "rating": 80,
        "form": [
          "W",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Javier Aguirre",
        "stars": [
          {
            "name": "Raúl Jiménez",
            "pos": "ST",
            "club": "Fulham",
            "desc": "6分领跑 · 阿兹特克主场",
            "rating": 8.5
          }
        ],
        "star": {
          "name": "Raúl Jiménez",
          "pos": "ST",
          "club": "Fulham",
          "desc": "6分领跑 · 阿兹特克主场",
          "rating": 8.5
        },
        "injuries": [],
        "rumors": []
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "0-1",
            "winner": "Mexico"
          }
        ],
        "note": "墨西哥略占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 53 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 13,
        "draw": 28,
        "away_win": 59,
        "score": "0-1",
        "confidence": 74,
        "xg_home": 0.95,
        "xg_away": 1.88,
        "key_factor": "A组末轮 · 墨西哥 6 分领跑 vs 捷克 1 分 · Schick vs Jiménez · 泊松 0-2/1-2",
        "score_dist": [
          {
            "score": "0-1",
            "prob": 11.1
          },
          {
            "score": "1-1",
            "prob": 10.5
          },
          {
            "score": "0-2",
            "prob": 10.4
          },
          {
            "score": "1-2",
            "prob": 9.9
          },
          {
            "score": "0-3",
            "prob": 6.5
          },
          {
            "score": "1-3",
            "prob": 6.2
          },
          {
            "score": "0-0",
            "prob": 5.9
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Czechia 暂列 A 组第 3（1 分 · 已赛 2 场） vs Mexico 第 1（6 分 · 已赛 2 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "阿兹特克高原 · 24°C · 湿度 55%；海拔2240m"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "A组末轮 · 墨西哥 6 分领跑 vs 捷克 1 分 · Schick vs Jiménez · 泊松 0-2/1-2"
          }
        ],
        "base_home_win": 18,
        "base_draw": 27,
        "base_away_win": 56,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 4,
          "ironBucket": false,
          "closeXg": false,
          "gap": 0.93,
          "notes": [
            "xG 暗示胶着"
          ]
        }
      },
      "weather": {
        "city": "墨西哥城",
        "venue": "Estadio Azteca",
        "temp": 24,
        "humidity": 55,
        "condition_cn": "阿兹特克高原",
        "impact_summary": "海拔2240m",
        "home_adapt": 78,
        "away_adapt": 92,
        "forecast_updated": "2026-06-25 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲午日",
          "day_summary": "甲午日——木火通明",
          "hour_home": "见各场",
          "hour_home_element": "火"
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
        "home_score": 28,
        "away_score": 72,
        "mystic_verdict": "墨西哥火土旺于高原主场，捷克须早破局。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1,
        "tier_label": "Czechia 被看好 · 净胜约 1 球",
        "implied_tier": -0.25,
        "tier_gap": 1.25,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Mexico（约 70%）",
        "analysis": "墨西哥 6 分领跑 · 阿兹特克主场优势。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "0-1",
              "prob": 11.2
            },
            {
              "score": "1-1",
              "prob": 10.7
            },
            {
              "score": "0-2",
              "prob": 10.6
            }
          ],
          "one_goal_win_pct": 12.5,
          "two_plus_win_pct": 6.3,
          "full_cover_pct": 6.3,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": 12.5,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "走水净胜=1",
          "fav_cover_ev": -0.749,
          "dog_cover_ev": 0.749,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.83,
          "fair_totals_line": 2,
          "over_2_5_pct": 53.2,
          "over_3_pct": 30.6,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 12.5%：参考净胜 1 球时，仅赢一球与拉开差距须分开看"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.83,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 53.2,
          "under_pct": 46.8,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 53.2%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": -5,
          "draw": 1,
          "away_win": 4
        },
        "adjustment_note": "模型微调：主胜 -5% · 平 +1% · 客 +4%",
        "adjusted_probs": {
          "home_win": 13,
          "draw": 28,
          "away_win": 59
        },
        "display_summary": {
          "fav_name": "Czechia",
          "expected_total_goals": 2.77,
          "poisson_fav_win_pct": 18.8,
          "small_lead_pct": 12.5,
          "small_example_score": "1-0",
          "small_example_pct": 5.7,
          "big_cover_pct": 6.3,
          "big_example_score": "2-0",
          "big_example_pct": 2.7,
          "win_shape": {
            "fav_name": "Czechia",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 36.2%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 5.7,
                "pct": 30.2
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 6.8,
                "pct": 36.2
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 3.6,
                "pct": 18.9
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 2.8,
                "pct": 14.7
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 66.4
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 18.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 14.7
              }
            ],
            "fav_win_pct": 13
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 31.8 分",
            "first_goal_wait": 31.8,
            "fast_pct": 61.1,
            "moderate_pct": 14.6,
            "slow_pct": 24.3,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 61.1
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.6
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 24.3
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Czechia 暂无重要伤停 · Mexico 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "海拔2240m"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 暗示胶着（平 +4%）"
            }
          ],
          "xg_context": {
            "baseline_home": 0.95,
            "baseline_away": 1.88,
            "adjusted_home": 0.95,
            "adjusted_away": 1.88,
            "note": "基准 xG 0.95–1.88（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 1.25,
            "implied_tier_label": "Mexico 被看好 · 净胜约 0.25 球",
            "market_tier_label": "Czechia 被看好 · 净胜约 1 球",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 1.25"
          },
          "win_outlook": {
            "fav_name": "Czechia",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 66.4
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 18.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 14.7
              }
            ],
            "margin_line_cn": "Czechia · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
            "margin_meet_pct": 6.3,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "走水净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球参考 2.5",
            "fair_totals_line": 2,
            "model_total_xg": 2.83,
            "totals_line_gap": 0.5,
            "totals_high_pct": 53.2,
            "totals_low_pct": 46.8,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 8.4,
            "win_margin2_low_total_pct": 2.7,
            "win_margin2_high_total_pct": 3.6,
            "readout_cn": "取胜约 13%；若取胜，以「险胜收工」为主（66.4%）。 对着赛前净胜参考，净胜≥2（全达标）约 6.3%；对着总进球参考 2.5，模型超线概率约 53.2%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "0-1",
              "pct": 11.2
            },
            {
              "score": "1-1",
              "pct": 10.7
            },
            {
              "score": "0-2",
              "pct": 10.6
            }
          ],
          "totals_view": {
            "expected_total": 2.8,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 53.2,
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
              "over_pct": 53.2,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.8 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Czechia · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 6.3% · 达到预期难度偏大 进球氛围：几乎五五开",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "Czechia",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 6.3,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "Czechia · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 6.3% · 达到预期难度偏大",
              "detail_cn": "Czechia · 赛前外界预期 净胜≥2。模型推演达标概率约 6.3%；外界看法高于 xG 隐含约 1.25 球，达到预期难度偏大。",
              "extra_stats_cn": "",
              "full_cover_pct": 6.3,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "走水净胜=1",
              "tier_gap": 1.25,
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
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 53.2,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "skeptical",
                  "label_cn": "外界预期偏高",
                  "color": "#D95F6A",
                  "fav_name": "Czechia",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 6.3,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "Czechia · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 6.3% · 达到预期难度偏大",
                  "detail_cn": "Czechia · 赛前外界预期 净胜≥2。模型推演达标概率约 6.3%；外界看法高于 xG 隐含约 1.25 球，达到预期难度偏大。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 6.3,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "走水净胜=1",
                  "tier_gap": 1.25,
                  "show_cover": true
                },
                "text": "达标概率约 6.3% · 达到预期难度偏大",
                "color": "#D95F6A",
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
                  "over_pct": 53.2,
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
              "team": "Czechia",
              "first_goal_pct": 33.6,
              "start_score": "1-0",
              "fav_name": "Czechia",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 68,
              "small_lead_pct": 24.6,
              "big_lead_pct": 16.6,
              "fav_win_pct": 41.3,
              "fav_draw_pct": 26.7,
              "fav_lose_pct": 32,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Czechia 保持胜果（净胜≥1）",
                  "pct": 41.3
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 26.7
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 32
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 31.2 分",
                "first_goal_wait": 31.2,
                "fast_pct": 54.5,
                "moderate_pct": 14.8,
                "slow_pct": 30.7,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 54.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 30.7
                  }
                ]
              },
              "big_delta": 10.3,
              "small_delta": 12.1,
              "narrative": "Czechia 先破门（已 1-0） → 「巩固防守」；Mexico 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Czechia",
                "state_label": "Czechia 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 66.4
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 18.9
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 14.7
                  }
                ],
                "margin_line_cn": "Czechia · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
                "margin_meet_pct": 16.6,
                "margin_half_pct": 0,
                "margin_fail_pct": 24.6,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "走水净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.36,
                "totals_line_gap": 0.25,
                "totals_high_pct": 68.1,
                "totals_low_pct": 31.9,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 16.4,
                "win_margin2_low_total_pct": 6.9,
                "win_margin2_high_total_pct": 9.7,
                "readout_cn": "Czechia 已 1-0 领先：仍取胜约 41.3%。 对着总进球参考 2.5，模型超线概率约 68.1%。 若再扩大，偏「险胜收工」。"
              }
            },
            {
              "side": "away",
              "team": "Mexico",
              "first_goal_pct": 66.4,
              "start_score": "0-1",
              "fav_name": "Czechia",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 21.5,
              "small_lead_pct": 5.2,
              "big_lead_pct": 1.6,
              "fav_win_pct": 6.7,
              "fav_draw_pct": 14.8,
              "fav_lose_pct": 78.5,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Czechia 追平（平局）",
                  "pct": 14.8
                },
                {
                  "key": "win1",
                  "label": "Czechia 净胜1球翻盘（如 2-1）",
                  "pct": 5.2
                },
                {
                  "key": "win2",
                  "label": "Czechia 净胜≥2球翻盘（如 3-1）",
                  "pct": 1.6
                },
                {
                  "key": "upset_hold",
                  "label": "Mexico 保持胜果至终场",
                  "pct": 78.5
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 32.4 分",
                "first_goal_wait": 32.4,
                "fast_pct": 53.2,
                "moderate_pct": 14.8,
                "slow_pct": 32,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 53.2
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 32
                  }
                ]
              },
              "big_delta": -4.7,
              "small_delta": -7.3,
              "narrative": "Mexico 先破门（已 0-1） → 「巩固防守」；Czechia 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.8 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 53.2,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 23,
              "readout_cn": "Czechia · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 23,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.42,
            "xg_away_ht": 0.83,
            "xg_home_2h": 0.53,
            "xg_away_2h": 1.05,
            "home_win": 17.5,
            "draw": 39.6,
            "away_win": 42.9,
            "top_score": "0-0",
            "top_score_prob": 28.7,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 28.7
              },
              {
                "score": "0-1",
                "prob": 23.8
              },
              {
                "score": "1-0",
                "prob": 12
              }
            ],
            "ht_goals_expected": 1.25,
            "ht_over_0_5_pct": 71.3,
            "ht_over_1_5_pct": 35.5,
            "pick": "away",
            "pick_name": "Mexico",
            "summary_cn": "半场 xG 0.42–0.83（约占全场 44%） · 最可能 0-0（28.7%） · 胜平负 17.5/39.6/42.9 · 半场≥1球约 71.3%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Czechia · 常规对抗。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 1.25（模型微调：主胜 -5% · 平 +1% · 客 +4%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.83,
          "xg_gap": 0.93,
          "xg_home": 0.95,
          "xg_away": 1.88,
          "xg_baseline_home": 0.95,
          "xg_baseline_away": 1.88,
          "xg_note": "结构推演用基准 xG 0.95–1.88",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Mexico",
          "dog_name": "Czechia",
          "fav_xg": 1.88,
          "dog_xg": 0.95,
          "path_type": "dog_bloom",
          "path_label": "弱队开花",
          "lean": "neutral",
          "lean_cn": "中性",
          "lean_mode": "neutral",
          "lean_confidence": null,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 53.2,
          "prob_meet_guess": 53.2,
          "guess_n": 3,
          "prob_4_plus": 30.6,
          "prob_2_or_less": 46.8,
          "totals_line": 2.5,
          "scenarios": [
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 41
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 41
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 9
            },
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 9
            }
          ],
          "tags": [
            {
              "key": "dog_threat",
              "label": "弱队有球",
              "color": "#E8B84B",
              "bg": "rgba(232,184,75,0.1)"
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "color": "#E8B84B",
              "bg": "rgba(232,184,75,0.12)"
            }
          ],
          "watch_notes": [
            "弱队上半场效率≥1.0 → 关注弱队开花路径"
          ],
          "pattern_note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "summary_cn": "【路径·基准 xG】合计 2.83 · Mexico 1.88 / Czechia 0.95 → 主路径「弱队开花」约 41%。 超 2.5 约 53.2% · ≤2球 46.8%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "A",
        "label": "A组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Mexico",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 4,
            "ga": 0
          },
          {
            "team": "South Korea",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Czechia",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 2,
            "ga": 3
          },
          {
            "team": "South Africa",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 1,
            "ga": 3
          }
        ],
        "home": {
          "team": "Czechia",
          "rank": 3,
          "pts": 1,
          "played": 2,
          "if_1st": "32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池） → 当前 B 组第 2倾向 Switzerland",
          "if_1st_r16": "16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者",
          "if_1st_corridor": "出线后半区对手强度取决于第 3 名组合",
          "if_2nd": "32强 M73 · A 组第 2 vs B 组第 2 → 当前 B 组第 1倾向 Canada",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "若 F 组头名为荷兰、C 组次席为巴西，此半区将提前碰强队",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/H/I 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Mexico",
          "rank": 1,
          "pts": 6,
          "played": 2,
          "if_1st": "32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池） → 当前 B 组第 2倾向 Switzerland",
          "if_1st_r16": "16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者",
          "if_1st_corridor": "出线后半区对手强度取决于第 3 名组合",
          "if_2nd": "32强 M73 · A 组第 2 vs B 组第 2 → 当前 B 组第 1倾向 Canada",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "若 F 组头名为荷兰、C 组次席为巴西，此半区将提前碰强队",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/H/I 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "B 组：头名 Canada 4 分 · 次席 Switzerland 同分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 France 6 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "A 组次席走 M73→M90 通道，与 B 组次席同槽；头名则打第 3 名，路径更不确定。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Mexico",
          "reason": "A 组次席走 M73→M90 通道，与 B 组次席同槽；头名则打第 3 名，路径更不确定。",
          "optimal_summary": "策略最优解（推演）：Mexico 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；若次席仍紧追，仍宜控制场面——可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Czechia 若取胜：积分 4，A 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Mexico 若取胜：积分 9，客场抢分将改变 A 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 B 组：头名 Canada 4 分 · 次席 Switzerland 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：A 组次席走 M73→M90 通道，与 B 组次席同槽；头名则打第 3 名，路径更不确定。"
        ]
      }
    },
    {
      "id": "m54",
      "fifa_match_number": 54,
      "fifa_match_id": "400021445",
      "group": "A",
      "matchday": 3,
      "date": "2026-06-24",
      "time": "21:00",
      "time_local": "20:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "09:00",
      "date_beijing": "6月25日",
      "time_beijing_full": "北京时间 6月25日 09:00",
      "venue": "Estadio BBVA",
      "city": "Monterrey, Mexico",
      "note": "A组末轮 · 南非 vs 韩国 · 蒙特雷",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-2-3-1",
          "home": "Williams; Mphahlele, Xaba, Mokoena; Modiba, Mthethwa; Tau, Zwane, Baccus; Foster",
          "away": "Jo Hyeon-woo; Kim Min-jae, Kim Young-gwon; Hwang In-beom, Lee Kang-in; Son, Hwang Hee-chan; Cho",
          "source": "BBC 预测",
          "alt": null
        }
      },
      "home": {
        "name": "South Africa",
        "iso": "za",
        "flag": "",
        "fifa_rank": 58,
        "rating": 65,
        "form": [
          "L",
          "D",
          "L",
          "W",
          "W"
        ],
        "coach": "Hugo Broos",
        "stars": [
          {
            "name": "Percy Tau",
            "pos": "LW",
            "club": "Al Ahly",
            "desc": "1分须抢分",
            "rating": 7.4
          }
        ],
        "star": {
          "name": "Percy Tau",
          "pos": "LW",
          "club": "Al Ahly",
          "desc": "1分须抢分",
          "rating": 7.4
        },
        "injuries": [],
        "rumors": []
      },
      "away": {
        "name": "South Korea",
        "iso": "kr",
        "flag": "",
        "fifa_rank": 23,
        "rating": 76,
        "form": [
          "W",
          "L",
          "W",
          "D",
          "W"
        ],
        "coach": "Hong Myung-bo",
        "stars": [
          {
            "name": "孙兴慜 Son Heung-min",
            "pos": "LW",
            "club": "LAFC",
            "desc": "3分争出线",
            "rating": 8.8
          }
        ],
        "star": {
          "name": "孙兴慜 Son Heung-min",
          "pos": "LW",
          "club": "LAFC",
          "desc": "3分争出线",
          "rating": 8.8
        },
        "injuries": [],
        "rumors": []
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "0-2",
            "winner": "South Korea"
          }
        ],
        "note": "韩国友谊赛胜"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 54 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 29,
        "draw": 24,
        "away_win": 47,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.12,
        "xg_away": 1.58,
        "key_factor": "A组末轮 · 韩国 3 分 vs 南非 1 分 · 孙兴慜 vs Tau · 泊松 1-2/0-2",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 11.9
          },
          {
            "score": "0-1",
            "prob": 10.6
          },
          {
            "score": "1-2",
            "prob": 9.4
          },
          {
            "score": "0-2",
            "prob": 8.4
          },
          {
            "score": "1-0",
            "prob": 7.5
          },
          {
            "score": "0-0",
            "prob": 6.7
          },
          {
            "score": "2-1",
            "prob": 6.7
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "South Africa 暂列 A 组第 4（1 分 · 已赛 2 场） vs South Korea 第 2（3 分 · 已赛 2 场）；组内 Mexico 6分 领先；直接对话权重极高"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "蒙特雷午后 · 32°C · 湿度 58%；湿热中等"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "A组末轮 · 韩国 3 分 vs 南非 1 分 · 孙兴慜 vs Tau · 泊松 1-2/0-2"
          }
        ],
        "base_home_win": 27.1,
        "base_draw": 25.2,
        "base_away_win": 47.7,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": false,
          "closeXg": false,
          "gap": 0.46,
          "notes": []
        }
      },
      "weather": {
        "city": "蒙特雷",
        "venue": "Estadio BBVA",
        "temp": 32,
        "humidity": 58,
        "condition_cn": "蒙特雷午后",
        "impact_summary": "湿热中等",
        "home_adapt": 76,
        "away_adapt": 84,
        "forecast_updated": "2026-06-25 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲午日",
          "day_summary": "甲午日——木火通明",
          "hour_home": "见各场",
          "hour_home_element": "火"
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
        "home_score": 35,
        "away_score": 65,
        "mystic_verdict": "韩国金水相生略优，南非须防反击。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.5,
        "tier_label": "South Africa 被看好 · 净胜约 0.5 球",
        "implied_tier": 0,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 South Korea（约 62%）",
        "analysis": "韩国 3 分 vs 南非 1 分 · 孙兴慜。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12
            },
            {
              "score": "0-1",
              "prob": 10.7
            },
            {
              "score": "1-2",
              "prob": 9.5
            }
          ],
          "one_goal_win_pct": 16.6,
          "two_plus_win_pct": 10.5,
          "full_cover_pct": 27.1,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.458,
          "dog_cover_ev": 0.458,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.7,
          "fair_totals_line": 2,
          "over_2_5_pct": 50.3,
          "over_3_pct": 28.1,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 27.1%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.7,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 50.3,
          "under_pct": 49.7,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 50.3%）",
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
          "home_win": 29,
          "draw": 24,
          "away_win": 47
        },
        "display_summary": {
          "fav_name": "South Africa",
          "expected_total_goals": 2.67,
          "poisson_fav_win_pct": 27.1,
          "small_lead_pct": 16.6,
          "small_example_score": "1-0",
          "small_example_pct": 7.6,
          "big_cover_pct": 10.5,
          "big_example_score": "2-0",
          "big_example_pct": 4.2,
          "win_shape": {
            "fav_name": "South Africa",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 33.3%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 7.6,
                "pct": 28
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 9,
                "pct": 33.3
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 5.8,
                "pct": 21.5
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 4.6,
                "pct": 17.2
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 61.3
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 21.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 17.2
              }
            ],
            "fav_win_pct": 29
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 33.3 分",
            "first_goal_wait": 33.3,
            "fast_pct": 59.3,
            "moderate_pct": 14.7,
            "slow_pct": 25.9,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 59.3
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.7
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 25.9
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "South Africa 暂无重要伤停 · South Korea 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "湿热中等"
            }
          ],
          "xg_context": {
            "baseline_home": 1.12,
            "baseline_away": 1.58,
            "adjusted_home": 1.12,
            "adjusted_away": 1.58,
            "note": "基准 xG 1.12–1.58（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "South Africa 被看好 · 净胜约 0.5 球",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5"
          },
          "win_outlook": {
            "fav_name": "South Africa",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 61.3
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 21.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 17.2
              }
            ],
            "margin_line_cn": "South Africa · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 27.1,
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
            "model_total_xg": 2.7,
            "totals_line_gap": 0.5,
            "totals_high_pct": 50.3,
            "totals_low_pct": 49.7,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 11.8,
            "win_margin2_low_total_pct": 4.2,
            "win_margin2_high_total_pct": 6.2,
            "readout_cn": "取胜约 29%；若取胜，以「险胜收工」为主（61.3%）。 对着赛前净胜参考，净胜≥1（全达标）约 27.1%；对着总进球参考 2.5，模型超线概率约 50.3%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12
            },
            {
              "score": "0-1",
              "pct": 10.7
            },
            {
              "score": "1-2",
              "pct": 9.5
            }
          ],
          "totals_view": {
            "expected_total": 2.7,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 50.3,
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
              "over_pct": 50.3,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.7 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "South Africa · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 27.1% · 达到预期难度偏大 进球氛围：几乎五五开",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "South Africa",
              "market_expect_cn": "净胜≥1",
              "meet_pct": 27.1,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "South Africa · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 27.1% · 达到预期难度偏大",
              "detail_cn": "South Africa · 赛前外界预期 净胜≥1。模型推演达标概率约 27.1%；外界看法高于 xG 隐含约 0.5 球，达到预期难度偏大。",
              "extra_stats_cn": "",
              "full_cover_pct": 27.1,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": 0.5,
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
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 50.3,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "skeptical",
                  "label_cn": "外界预期偏高",
                  "color": "#D95F6A",
                  "fav_name": "South Africa",
                  "market_expect_cn": "净胜≥1",
                  "meet_pct": 27.1,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "South Africa · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 27.1% · 达到预期难度偏大",
                  "detail_cn": "South Africa · 赛前外界预期 净胜≥1。模型推演达标概率约 27.1%；外界看法高于 xG 隐含约 0.5 球，达到预期难度偏大。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 27.1,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "达标概率约 27.1% · 达到预期难度偏大",
                "color": "#D95F6A",
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
                  "over_pct": 50.3,
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
              "team": "South Africa",
              "first_goal_pct": 41.5,
              "start_score": "1-0",
              "fav_name": "South Africa",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 76.8,
              "small_lead_pct": 27.8,
              "big_lead_pct": 23.6,
              "fav_win_pct": 51.4,
              "fav_draw_pct": 25.4,
              "fav_lose_pct": 23.2,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "South Africa 保持胜果（净胜≥1）",
                  "pct": 51.4
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 25.4
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 23.2
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 33.1 分",
                "first_goal_wait": 33.1,
                "fast_pct": 52.5,
                "moderate_pct": 14.8,
                "slow_pct": 32.8,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 52.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 32.8
                  }
                ]
              },
              "big_delta": 13.1,
              "small_delta": 11.2,
              "narrative": "South Africa 先破门（已 1-0） → 「巩固防守」；South Korea 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "South Africa",
                "state_label": "South Africa 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 61.3
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 21.5
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 17.2
                  }
                ],
                "margin_line_cn": "South Africa · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 51.4,
                "margin_half_pct": 0,
                "margin_fail_pct": 27.8,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.23,
                "totals_line_gap": 0.25,
                "totals_high_pct": 65.2,
                "totals_low_pct": 34.8,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 20.1,
                "win_margin2_low_total_pct": 9.3,
                "win_margin2_high_total_pct": 14.4,
                "readout_cn": "South Africa 已 1-0 领先：仍取胜约 51.4%。 对着总进球参考 2.5，模型超线概率约 65.2%。 若再扩大，偏「险胜收工」。"
              }
            },
            {
              "side": "away",
              "team": "South Korea",
              "first_goal_pct": 58.5,
              "start_score": "0-1",
              "fav_name": "South Africa",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 29.4,
              "small_lead_pct": 7.7,
              "big_lead_pct": 2.9,
              "fav_win_pct": 10.6,
              "fav_draw_pct": 18.8,
              "fav_lose_pct": 70.6,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "South Africa 追平（平局）",
                  "pct": 18.8
                },
                {
                  "key": "win1",
                  "label": "South Africa 净胜1球翻盘（如 2-1）",
                  "pct": 7.7
                },
                {
                  "key": "win2",
                  "label": "South Africa 净胜≥2球翻盘（如 3-1）",
                  "pct": 2.9
                },
                {
                  "key": "upset_hold",
                  "label": "South Korea 保持胜果至终场",
                  "pct": 70.6
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
              "big_delta": -7.6,
              "small_delta": -8.9,
              "narrative": "South Korea 先破门（已 0-1） → 「巩固防守」；South Africa 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.7 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 50.3,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 21,
              "readout_cn": "South Africa · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 21,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.49,
            "xg_away_ht": 0.7,
            "xg_home_2h": 0.63,
            "xg_away_2h": 0.88,
            "home_win": 22.4,
            "draw": 41.8,
            "away_win": 35.8,
            "top_score": "0-0",
            "top_score_prob": 30.4,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 30.4
              },
              {
                "score": "0-1",
                "prob": 21.3
              },
              {
                "score": "1-0",
                "prob": 14.9
              }
            ],
            "ht_goals_expected": 1.19,
            "ht_over_0_5_pct": 69.6,
            "ht_over_1_5_pct": 33.4,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.49–0.7（约占全场 44%） · 最可能 0-0（30.4%） · 胜平负 22.4/41.8/35.8 · 半场≥1球约 69.6%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】South Africa · 常规对抗。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.7,
          "xg_gap": 0.46,
          "xg_home": 1.12,
          "xg_away": 1.58,
          "xg_baseline_home": 1.12,
          "xg_baseline_away": 1.58,
          "xg_note": "结构推演用基准 xG 1.12–1.58",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "South Korea",
          "dog_name": "South Africa",
          "fav_xg": 1.58,
          "dog_xg": 1.12,
          "path_type": "open",
          "path_label": "对攻/open",
          "lean": "neutral",
          "lean_cn": "中性",
          "lean_mode": "neutral",
          "lean_confidence": null,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 50.3,
          "prob_meet_guess": 50.3,
          "guess_n": 3,
          "prob_4_plus": 28.1,
          "prob_2_or_less": 49.7,
          "totals_line": 2.5,
          "scenarios": [
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 33
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 30
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 19
            },
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 19
            }
          ],
          "tags": [
            {
              "key": "open_game",
              "label": "对攻兑现",
              "color": "#9B7EDE",
              "bg": "rgba(155,126,222,0.1)"
            }
          ],
          "watch_notes": [
            "弱队上半场效率≥1.0 → 关注弱队开花路径",
            "结构类似 m12/m26——热门爆发路径需防 4+ 球"
          ],
          "pattern_note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
          "summary_cn": "【路径·基准 xG】合计 2.7 · South Korea 1.58 / South Africa 1.12 → 主路径「对攻/open」约 33%。 超 2.5 约 50.3% · ≤2球 49.7%。双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "A",
        "label": "A组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Mexico",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 4,
            "ga": 0
          },
          {
            "team": "South Korea",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Czechia",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 2,
            "ga": 3
          },
          {
            "team": "South Africa",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 1,
            "ga": 3
          }
        ],
        "home": {
          "team": "South Africa",
          "rank": 4,
          "pts": 1,
          "played": 2,
          "if_1st": "32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池） → 当前 B 组第 2倾向 Switzerland",
          "if_1st_r16": "16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者",
          "if_1st_corridor": "出线后半区对手强度取决于第 3 名组合",
          "if_2nd": "32强 M73 · A 组第 2 vs B 组第 2 → 当前 B 组第 1倾向 Canada",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "若 F 组头名为荷兰、C 组次席为巴西，此半区将提前碰强队",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/H/I 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "South Korea",
          "rank": 2,
          "pts": 3,
          "played": 2,
          "if_1st": "32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池） → 当前 B 组第 2倾向 Switzerland",
          "if_1st_r16": "16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者",
          "if_1st_corridor": "出线后半区对手强度取决于第 3 名组合",
          "if_2nd": "32强 M73 · A 组第 2 vs B 组第 2 → 当前 B 组第 1倾向 Canada",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "若 F 组头名为荷兰、C 组次席为巴西，此半区将提前碰强队",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/H/I 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "B 组：头名 Canada 4 分 · 次席 Switzerland 同分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 France 6 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "A 组次席走 M73→M90 通道，与 B 组次席同槽；头名则打第 3 名，路径更不确定。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Mexico",
          "reason": "Mexico 末轮或存在「避开某 32 强对手 / 保小组第 2 进更顺半区」的战术选择，需结合绑定组（如 C↔F）同期赛果。",
          "optimal_summary": "策略最优解（推演）：Mexico 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；若次席仍紧追，仍宜控制场面——可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "South Africa 若取胜：积分 4，A 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "South Korea 若取胜：积分 6，客场抢分将改变 A 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 B 组：头名 Canada 4 分 · 次席 Switzerland 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：A 组次席走 M73→M90 通道，与 B 组次席同槽；头名则打第 3 名，路径更不确定。"
        ]
      }
    }
  ],
  "nextMatch": {
    "group": "B",
    "matchday": 3,
    "date": "2026-06-24",
    "time": "12:00",
    "time_local": "12:00 PT",
    "timezone": "PDT (UTC-7)",
    "time_beijing": "03:00",
    "date_beijing": "6月25日",
    "time_beijing_full": "北京时间 6月25日 03:00",
    "venue": "BC Place",
    "city": "Vancouver, Canada",
    "home": {
      "name": "Switzerland",
      "iso": "ch",
      "fifaRank": 19,
      "rating": 77
    },
    "away": {
      "name": "Canada",
      "iso": "ca",
      "fifaRank": 17,
      "rating": 78
    },
    "teaser": "B组末轮 · 瑞士 vs 加拿大",
    "home_win": 41,
    "draw": 25,
    "away_win": 34,
    "predicted_score": "1-1",
    "key_player_home": "Granit Xhaka",
    "key_player_away": "Alphonso Davies"
  },
  "upcomingMatches": [
    {
      "group": "B",
      "time_beijing_full": "北京时间 6月25日 03:00",
      "venue": "Lumen Field",
      "city": "Seattle, USA",
      "home": {
        "name": "Bosnia and Herzegovina",
        "iso": "ba"
      },
      "away": {
        "name": "Qatar",
        "iso": "qa"
      },
      "teaser": "B组末轮"
    },
    {
      "group": "C",
      "time_beijing_full": "北京时间 6月25日 06:00",
      "venue": "Hard Rock Stadium",
      "city": "Miami Gardens, USA",
      "home": {
        "name": "Scotland",
        "iso": "gb-sct"
      },
      "away": {
        "name": "Brazil",
        "iso": "br"
      },
      "teaser": "C组末轮"
    },
    {
      "group": "C",
      "time_beijing_full": "北京时间 6月25日 06:00",
      "venue": "Mercedes-Benz Stadium",
      "city": "Atlanta, USA",
      "home": {
        "name": "Morocco",
        "iso": "ma"
      },
      "away": {
        "name": "Haiti",
        "iso": "ht"
      },
      "teaser": "C组末轮"
    },
    {
      "group": "A",
      "time_beijing_full": "北京时间 6月25日 09:00",
      "venue": "Estadio Azteca",
      "city": "Mexico City, Mexico",
      "home": {
        "name": "Czechia",
        "iso": "cz"
      },
      "away": {
        "name": "Mexico",
        "iso": "mx"
      },
      "teaser": "A组末轮"
    },
    {
      "group": "A",
      "time_beijing_full": "北京时间 6月25日 09:00",
      "venue": "Estadio BBVA",
      "city": "Monterrey, Mexico",
      "home": {
        "name": "South Africa",
        "iso": "za"
      },
      "away": {
        "name": "South Korea",
        "iso": "kr"
      },
      "teaser": "A组末轮"
    }
  ]
};
