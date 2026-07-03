// 今日赛事 — Day 23 enriched
// Last updated: 2026-07-03T14:36:13+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-07-03T14:36:13+08:00",
  "syncSource": "FIFA 赛程 · Day 23 · 32强收官 enriched · 裁判/伤病/球星/赛场",
  "phase": "knockout",
  "phase_cn": "淘汰赛 · 32强",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 Day22 Agent：★全让球 3/3 · 净-0.5单位(★) · 6项合计0 · 西-1.5✓/克+0.5/1输半/阿+0.5✗",
      "time": "复盘"
    },
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 淘汰赛晋级路径矩阵",
      "time": "模型"
    },
    {
      "tag": "UPDATE",
      "text": "🎯 淘汰赛大小球 R9 已开启：副项不打小 · ★冲突跳过 · 大信心仅绑★大小",
      "time": "Agent"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M84：西班牙 3-0 奥地利 · Oyarzabal 双响 · 半场 1-0",
      "time": "7月3日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M83：葡萄牙 2-1 克罗地亚 · Ronaldo 68' · 半场 0-0",
      "time": "7月3日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M85：瑞士 2-0 阿尔及利亚 · Embolo 10' · 半场 1-0",
      "time": "7月3日"
    },
    {
      "tag": "PREVIEW",
      "text": "⚔️ 今日 3 场：澳大利亚-埃及(02:00) · 阿根廷-佛得角(06:00) · 哥伦比亚-加纳(09:30)",
      "time": "7月4日"
    },
    {
      "tag": "PREVIEW",
      "text": "32强收官 · 明日 7/5 起 16 强赛",
      "time": "路径"
    }
  ],
  "todayMatches": [
    {
      "id": "m88",
      "fifa_match_number": 88,
      "fifa_match_id": "400021515",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M88 · D组亚军 vs G组亚军",
      "knockout_next": "胜者 → M95（16强 · 对 M86 胜者）",
      "date": "2026-07-03",
      "time": "13:00",
      "time_local": "13:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "02:00",
      "date_beijing": "7月4日",
      "time_beijing_full": "北京时间 7月4日 02:00",
      "venue": "AT&T Stadium",
      "city": "Dallas, USA",
      "note": "32强 M88 · 澳大利亚 vs 埃及 · 达拉斯",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Ryan; Atkinson, Souttar, Rowles, Behich; Irvine, Baccus; Goodwin, Metcalfe, Boyle; Duke",
          "away": "El Shenawy; Hany, Rabia, Hegazi, Ayman; Elneny, Hamdi; Trezeguet, Marmoush, Salah; Mostafa",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Australia",
        "iso": "au",
        "flag": "",
        "fifa_rank": 24,
        "rating": 76,
        "form": [
          "W",
          "D",
          "D",
          "W",
          "L"
        ],
        "coach": "Graham Arnold",
        "stars": [
          {
            "name": "Mitchell Duke",
            "pos": "ST",
            "club": "Machida",
            "rating": 7.5,
            "desc": "支点 · 定位球"
          },
          {
            "name": "Craig Goodwin",
            "pos": "LW",
            "club": "Al-Wehda",
            "rating": 7.6,
            "desc": "宽度 · 传中"
          },
          {
            "name": "Mathew Ryan",
            "pos": "GK",
            "club": "Roma",
            "rating": 7.8,
            "desc": "一门 · 经验"
          }
        ],
        "star": {
          "name": "Mathew Ryan",
          "pos": "GK",
          "club": "Roma",
          "rating": 7.8,
          "desc": "D 组亚军"
        },
        "injuries": [
          {
            "player": "Mitchell Duke",
            "status": "FIT",
            "note": "锋线支点",
            "confirmed": true
          },
          {
            "player": "Craig Goodwin",
            "status": "FIT",
            "note": "左路宽度",
            "confirmed": true
          },
          {
            "player": "Harry Souttar",
            "status": "DOUBT",
            "note": "中卫轻微撞伤 · 末练减量",
            "confirmed": false
          }
        ],
        "rumors": [
          "Arnold：「Salah 是埃及全部——但 -0/0.5 均衡盘我们有机会」",
          "预计 4-2-3-1 · Goodwin 宽度 · Duke 支点",
          "D 组 4 分出线 · 32强收官首场 · 达拉斯高温",
          "Agent ★埃及 +0/0.5@0.93 · Salah 反击轴"
        ]
      },
      "away": {
        "name": "Egypt",
        "iso": "eg",
        "flag": "",
        "fifa_rank": 36,
        "rating": 75,
        "form": [
          "W",
          "D",
          "D",
          "W",
          "D"
        ],
        "coach": "Hossam Hassan",
        "stars": [
          {
            "name": "Mohamed Salah",
            "pos": "RW",
            "club": "Liverpool",
            "rating": 8.8,
            "desc": "一对一 · 均衡盘轴心"
          },
          {
            "name": "Omar Marmoush",
            "pos": "ST",
            "club": "Frankfurt",
            "rating": 8,
            "desc": "速度 · 转换"
          },
          {
            "name": "Mohamed Elneny",
            "pos": "CM",
            "club": "Arsenal",
            "rating": 7.7,
            "desc": "屏障 · 绞杀"
          }
        ],
        "star": {
          "name": "Mohamed Salah",
          "pos": "RW",
          "club": "Liverpool",
          "rating": 8.8,
          "desc": "G 组亚军 · 反击第一选择"
        },
        "injuries": [
          {
            "player": "Mohamed Salah",
            "status": "FIT",
            "note": "G 组次席 · 反击轴",
            "confirmed": true
          },
          {
            "player": "Omar Marmoush",
            "status": "FIT",
            "note": "速度 · 转换",
            "confirmed": true
          },
          {
            "player": "Mohamed Elneny",
            "status": "FIT",
            "note": "屏障",
            "confirmed": true
          }
        ],
        "rumors": [
          "Hassan：「澳大利亚 D 组次席不虚——Salah 一人改变均衡盘」",
          "预计 4-3-3 低位 · Salah 右路孤立 · Marmoush 速度",
          "受让 +0/0.5@0.93 · 1-1/0-1 路径"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 1,
        "away_wins": 0,
        "recent": [
          {
            "year": 2017,
            "comp": "友谊赛",
            "score": "1-0",
            "winner": "Australia"
          }
        ],
        "note": "交锋少"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-04",
        "name": "Gustavo Tejera",
        "nation": "Uruguay",
        "iso": "uy",
        "wc_experience": "2026 世界杯 · 32强 M88 主裁 · CONMEBOL · 执法澳大利亚 vs 埃及",
        "avg_yellow": 4.5,
        "avg_red": 0.12,
        "avg_penalty": 0.3,
        "home_win_rate": 50,
        "bias_index": 50,
        "bias_note": "乌拉圭主裁执法达拉斯 AT&T 凌晨场。均衡盘澳 -0/0.5 vs 埃及 Salah 轴；对身体对抗与速度犯规尺度需平衡。",
        "tendencies": [
          "FIFA 官方主裁 · Gustavo Tejera（乌拉圭）",
          "32强收官首场 · 达拉斯高温封闭",
          "均衡盘 1-1 路径常见"
        ],
        "officials": {
          "referee": "Gustavo Tejera (URU)"
        },
        "fifa_match_id": "400021515",
        "note": "FIFA M88 · 澳大利亚 vs 埃及 · Dallas",
        "updated": "2026-07-03T14:36:13+08:00"
      },
      "prediction": {
        "home_win": 38,
        "draw": 36,
        "away_win": 26,
        "score": "1-1",
        "confidence": 65,
        "xg_home": 1.45,
        "xg_away": 1.15,
        "key_factor": "32强 M88 · 澳大利亚 D2 vs 埃及 G2 · Salah 轴 · 泊松 1-1/2-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 13.2
          },
          {
            "score": "1-0",
            "prob": 12.7
          },
          {
            "score": "0-1",
            "prob": 10.6
          },
          {
            "score": "0-0",
            "prob": 10.2
          },
          {
            "score": "2-1",
            "prob": 8.2
          },
          {
            "score": "2-0",
            "prob": 7.9
          },
          {
            "score": "1-2",
            "prob": 6.9
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M88 · 澳大利亚 D2 vs 埃及 G2 · 胜者 M95 对阿根廷"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "达拉斯夏夜高温 · 31°C · 湿度 55% · 降雨概率 10% · 封闭场内 · 微风；M88 澳大利亚 vs 埃及 · 封闭仍偏热 · 70 分钟后体能关键（31°C 封闭）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M88 · 澳大利亚 D2 vs 埃及 G2 · Salah 轴 · 泊松 1-1/2-1"
          }
        ],
        "base_home_win": 38,
        "base_draw": 36,
        "base_away_win": 26,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 10,
          "ironBucket": true,
          "closeXg": true,
          "gap": 0.3,
          "notes": [
            "xG 接近且战术偏保守",
            "热门难破密集"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.24,
        "xg_poisson_away": 1.04,
        "xg_tier_calibrated": false,
        "score_prob": 13.2,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 13.2
          },
          {
            "score": "1-0",
            "prob": 12.7
          },
          {
            "score": "0-1",
            "prob": 10.6
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "达拉斯",
        "country": "美国",
        "venue": "AT&T Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "封闭式",
        "temp": 31,
        "humidity": 55,
        "altitude_m": 200,
        "rain_chance": 10,
        "wind": "封闭场内 · 微风",
        "condition_cn": "达拉斯夏夜高温",
        "impact_level": "MEDIUM",
        "impact_summary": "M88 澳大利亚 vs 埃及 · 封闭仍偏热 · 70 分钟后体能关键",
        "home_adapt": 85,
        "away_adapt": 83,
        "weather_factors": [
          {
            "label": "31°C 封闭",
            "impact": "中",
            "detail": "北京时间 7月4日 02:00"
          }
        ],
        "forecast_updated": "2026-07-04 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "癸卯日",
          "day_summary": "癸卯日——水木相生",
          "hour_home": "见各场",
          "hour_home_element": "木"
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
        "mystic_verdict": "澳大利亚土旺，埃及火金韧。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.25,
        "tier_label": "Australia -0.25 · Egypt +0.25",
        "implied_tier": 0,
        "tier_gap": 0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Australia（约 52%）",
        "analysis": "M88 · 澳大利亚 vs 埃及 · 澳-0/0.5@0.96/埃+0/0.5@0.93 · 大小 2.5 大0.92小0.94。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12.4
            },
            {
              "score": "1-0",
              "prob": 10.8
            },
            {
              "score": "2-1",
              "prob": 9
            }
          ],
          "one_goal_win_pct": 22.6,
          "two_plus_win_pct": 21.3,
          "full_cover_pct": 50.2,
          "dog_hold_pct": 49.8,
          "fav_win_pct": 43.9,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.1,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.122,
          "dog_cover_ev": 0.122,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.6,
          "fair_totals_line": 2,
          "over_2_5_pct": 48.1,
          "over_3_pct": 26.3,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 43.9%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 43.9,
          "dog_hold_pct_raw": 56.1
        },
        "spread_odds": {
          "fav": 0.96,
          "dog": 0.93,
          "note": "Australia 0.96 · Egypt 0.93"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.6,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 47.9,
          "under_pct": 52.1,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 47.9%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "Australia -0/0.5@0.98 · Egypt +0/0.5@0.9",
          "spread_now_cn": "Australia -0/0.5@0.96 · Egypt +0/0.5@0.93",
          "totals_now_cn": "大小 2.5 · 大 0.92 / 小 0.94",
          "tag": "flat",
          "tag_cn": "盘路平稳",
          "tag_color": "#7BB8D4",
          "detail_cn": "档位持平 · 热门 0.98→0.96（降水） · 受让 0.9→0.93（抬水） 现盘去水隐含：Australia 49.6% · Egypt 50.4%（超收 2.8%） 模型穿盘（现档 Australia -0.25 · Egypt +0.25）：Australia 50.2% · Egypt 49.8% 模型−市场：Australia +0.6pp · Egypt -0.6pp 期望 ROI@现水：Australia -1.6% · Egypt +45.9% 档位与水位变化幅度有限，暂无明确单向资金信号。",
          "actuarial": {
            "actuarial_type": "flat",
            "actuarial_cn": "盘路平稳",
            "actuarial_color": "#7BB8D4",
            "actuarial_desc": "档位与水位变化幅度有限，暂无明确单向资金信号。",
            "summary_cn": "档位持平 · 热门 0.98→0.96（降水） · 受让 0.9→0.93（抬水） 现盘去水隐含：Australia 49.6% · Egypt 50.4%（超收 2.8%） 模型穿盘（现档 Australia -0.25 · Egypt +0.25）：Australia 50.2% · Egypt 49.8% 模型−市场：Australia +0.6pp · Egypt -0.6pp 期望 ROI@现水：Australia -1.6% · Egypt +45.9% 档位与水位变化幅度有限，暂无明确单向资金信号。",
            "line_delta": 0,
            "line_delta_cn": "档位持平",
            "fav_odds_delta": -0.02,
            "dog_odds_delta": 0.03,
            "water_move_cn": "热门 0.98→0.96（降水） · 受让 0.9→0.93（抬水）",
            "open_tier": 0.25,
            "open_tier_label": "Australia -0.25 · Egypt +0.25",
            "now_tier": 0.25,
            "implied_tier": 0,
            "open_tier_gap": 0.25,
            "now_tier_gap": 0.25,
            "open_devig": {
              "fav_pct": 49,
              "dog_pct": 51,
              "overround_pct": 3.1
            },
            "now_devig": {
              "fav_pct": 49.6,
              "dog_pct": 50.4,
              "overround_pct": 2.8
            },
            "model_cover_open_pct": 50.2,
            "model_cover_now_pct": 50.2,
            "model_dog_cover_now_pct": 49.8,
            "market_fav_cover_now_pct": 49.6,
            "market_dog_cover_now_pct": 50.4,
            "model_vs_market_fav_pp": 0.6,
            "model_vs_market_dog_pp": -0.6,
            "fav_roi_pct": -1.6,
            "dog_roi_pct": 45.9,
            "fav_name": "Australia",
            "dog_name": "Egypt"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "flat",
          "actuarial_cn": "盘路平稳",
          "actuarial_color": "#7BB8D4",
          "actuarial_desc": "档位与水位变化幅度有限，暂无明确单向资金信号。",
          "summary_cn": "档位持平 · 热门 0.98→0.96（降水） · 受让 0.9→0.93（抬水） 现盘去水隐含：Australia 49.6% · Egypt 50.4%（超收 2.8%） 模型穿盘（现档 Australia -0.25 · Egypt +0.25）：Australia 50.2% · Egypt 49.8% 模型−市场：Australia +0.6pp · Egypt -0.6pp 期望 ROI@现水：Australia -1.6% · Egypt +45.9% 档位与水位变化幅度有限，暂无明确单向资金信号。",
          "line_delta": 0,
          "line_delta_cn": "档位持平",
          "fav_odds_delta": -0.02,
          "dog_odds_delta": 0.03,
          "water_move_cn": "热门 0.98→0.96（降水） · 受让 0.9→0.93（抬水）",
          "open_tier": 0.25,
          "open_tier_label": "Australia -0.25 · Egypt +0.25",
          "now_tier": 0.25,
          "implied_tier": 0,
          "open_tier_gap": 0.25,
          "now_tier_gap": 0.25,
          "open_devig": {
            "fav_pct": 49,
            "dog_pct": 51,
            "overround_pct": 3.1
          },
          "now_devig": {
            "fav_pct": 49.6,
            "dog_pct": 50.4,
            "overround_pct": 2.8
          },
          "model_cover_open_pct": 50.2,
          "model_cover_now_pct": 50.2,
          "model_dog_cover_now_pct": 49.8,
          "market_fav_cover_now_pct": 49.6,
          "market_dog_cover_now_pct": 50.4,
          "model_vs_market_fav_pp": 0.6,
          "model_vs_market_dog_pp": -0.6,
          "fav_roi_pct": -1.6,
          "dog_roi_pct": 45.9,
          "fav_name": "Australia",
          "dog_name": "Egypt"
        },
        "totals_pick_layers": {
          "model_side": "neutral",
          "situation_side": "neutral",
          "market_line_side": "under",
          "market_odds_side": "neutral",
          "market_side": "under",
          "recommended_side": "under",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "neutral",
            "line": "under",
            "odds": "neutral",
            "situation": "neutral"
          },
          "vote_summary_cn": "观望(model) · 小球(line) · 观望(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘（埃及受让）",
          "tendency_reason_cn": "均衡盘 · Salah 反击轴 · ★埃+0/0.5 · 大2.5副项。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "dog",
            "label_cn": "埃及 +0/0.5 @0.93",
            "reason_cn": "Salah 轴守盘 · 1-1/0-1 路径 · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2.5 @0.92",
            "reason_cn": "均衡线 · 副项。",
            "manual_override": true,
            "recommended_side": "under"
          },
          "picked_at": "2026-07-04-prematch",
          "pick_meta": {
            "model_side": "neutral",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "neutral",
            "market_side": "under",
            "pick_side": "over",
            "recommended_side": "under",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "neutral",
              "line": "under",
              "odds": "neutral",
              "situation": "neutral"
            },
            "vote_summary_cn": "观望(model) · 小球(line) · 观望(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 47.9,
            "line_gap": 0.5
          },
          "ko_totals_policy": {
            "enabled": true,
            "rule_id": "R9",
            "rule_cn": "★=大小无模型/盘冲突 · 副项仅大球 · 大信心仅绑★=大小",
            "applied_at": "buildDepthCalibration"
          }
        },
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 38,
          "draw": 36,
          "away_win": 26
        },
        "display_summary": {
          "fav_name": "Australia",
          "expected_total_goals": 2.27,
          "poisson_fav_win_pct": 40.7,
          "small_lead_pct": 22.9,
          "small_example_score": "1-0",
          "small_example_pct": 12.7,
          "big_cover_pct": 17.8,
          "big_example_score": "2-0",
          "big_example_pct": 7.9,
          "win_shape": {
            "fav_name": "Australia",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 31.2%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 12.7,
                "pct": 31.2
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.2,
                "pct": 25
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 11.1,
                "pct": 27.4
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 6.7,
                "pct": 16.4
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 56.2
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 27.4
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 16.4
              }
            ],
            "fav_win_pct": 38
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 39.5 分",
            "first_goal_wait": 39.5,
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
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Australia：Harry Souttar 存疑 · Egypt 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M88 澳大利亚 vs 埃及 · 封闭仍偏热 · 70 分钟后体能关键"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 接近且战术偏保守 · 热门难破密集（平 +10%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.45,
            "baseline_away": 1.15,
            "adjusted_home": 1.24,
            "adjusted_away": 1.04,
            "note": "基准 xG 1.45–1.15 → 调整后 1.24–1.04"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0.25,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Australia -0.25 · Egypt +0.25",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）"
          },
          "win_outlook": {
            "fav_name": "Australia",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 56.2
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 27.4
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 16.4
              }
            ],
            "margin_line_cn": "Australia · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 48.5,
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
            "model_total_xg": 2.28,
            "totals_line_gap": 0.25,
            "totals_high_pct": 39.7,
            "totals_low_pct": 60.3,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 20.6,
            "win_margin2_low_total_pct": 7.9,
            "win_margin2_high_total_pct": 9.9,
            "readout_cn": "取胜约 38%；若取胜，以「险胜收工」为主（56.2%）。 对着赛前净胜参考，净胜≥1（全达标）约 48.5%；对着总进球参考 2.5，模型超线概率约 39.7%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 13.2
            },
            {
              "score": "1-0",
              "pct": 12.7
            },
            {
              "score": "0-1",
              "pct": 10.6
            }
          ],
          "totals_view": {
            "expected_total": 2.3,
            "fair_line": 2.25,
            "market_line": 2.5,
            "line_gap": 0.25,
            "over_pct": 39.7,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 40,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 39.7,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.3 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Australia -0.25 穿盘：有达标可能",
            "sub_cn": "Australia 胜 40.8% · 胜后穿 100% · Egypt +0.25 守 51.5% 进球氛围：略偏闷 平局权重约 36%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Australia",
              "dog_name": "Egypt",
              "fav_handicap_cn": "Australia -0.25",
              "dog_handicap_cn": "Egypt +0.25",
              "market_expect_cn": "Australia -0.25 · 净胜≥1",
              "meet_pct": 48.5,
              "dog_hold_pct": 51.5,
              "fav_win_pct": 40.8,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 40.8,
              "meet_pct_label": "Australia -0.25 穿盘概率（校准）",
              "dog_hold_label": "Egypt +0.25 守住概率（校准）",
              "two_stage_cn": "Australia 取胜约 40.8% · 赢球后穿盘约 100% · Egypt +0.25 守住约 51.5%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Australia -0.25 穿盘：有达标可能",
              "pill_cn": "Australia 胜 40.8% · 胜后穿 100% · Egypt +0.25 守 51.5%",
              "detail_cn": "Australia 取胜约 40.8% · 赢球后穿盘约 100% · Egypt +0.25 守住约 51.5%（泊松 raw 40.8% → 校准 48.5%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 48.5,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": 0.25,
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
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 39.7,
              "line_gap": 0.25,
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
                  "level": "possible",
                  "label_cn": "有达标可能",
                  "color": "#C8A96E",
                  "fav_name": "Australia",
                  "dog_name": "Egypt",
                  "fav_handicap_cn": "Australia -0.25",
                  "dog_handicap_cn": "Egypt +0.25",
                  "market_expect_cn": "Australia -0.25 · 净胜≥1",
                  "meet_pct": 48.5,
                  "dog_hold_pct": 51.5,
                  "fav_win_pct": 40.8,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 40.8,
                  "meet_pct_label": "Australia -0.25 穿盘概率（校准）",
                  "dog_hold_label": "Egypt +0.25 守住概率（校准）",
                  "two_stage_cn": "Australia 取胜约 40.8% · 赢球后穿盘约 100% · Egypt +0.25 守住约 51.5%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Australia -0.25 穿盘：有达标可能",
                  "pill_cn": "Australia 胜 40.8% · 胜后穿 100% · Egypt +0.25 守 51.5%",
                  "detail_cn": "Australia 取胜约 40.8% · 赢球后穿盘约 100% · Egypt +0.25 守住约 51.5%（泊松 raw 40.8% → 校准 48.5%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 48.5,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.25,
                  "show_cover": true
                },
                "text": "Australia 胜 40.8% · 胜后穿 100% · Egypt +0.25 守 51.5%",
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
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 39.7,
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
              "team": "Australia",
              "first_goal_pct": 54.4,
              "start_score": "1-0",
              "fav_name": "Australia",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 88.7,
              "small_lead_pct": 32.2,
              "big_lead_pct": 35.4,
              "fav_win_pct": 67.7,
              "fav_draw_pct": 21,
              "fav_lose_pct": 11.3,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Australia 保持胜果（净胜≥1）",
                  "pct": 67.7
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 21
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 11.3
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 39.6 分",
                "first_goal_wait": 39.6,
                "fast_pct": 46.2,
                "moderate_pct": 14.3,
                "slow_pct": 39.4,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 46.2
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.3
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 39.4
                  }
                ]
              },
              "big_delta": 17.6,
              "small_delta": 9.3,
              "narrative": "Australia 先破门（已 1-0） → 「巩固防守」；Egypt 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Australia",
                "state_label": "Australia 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 56.2
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 27.4
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 16.4
                  }
                ],
                "margin_line_cn": "Australia · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 67.7,
                "margin_half_pct": 0,
                "margin_fail_pct": 32.2,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.86,
                "totals_line_gap": 0.25,
                "totals_high_pct": 55.5,
                "totals_low_pct": 44.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 30.5,
                "win_margin2_low_total_pct": 14.9,
                "win_margin2_high_total_pct": 20.5,
                "readout_cn": "Australia 已 1-0 领先：仍取胜约 67.7%。 对着总进球参考 2.5，模型超线概率约 55.5%。 常见 2-0 收尾（相对总进球参考 2.5仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Egypt",
              "first_goal_pct": 45.6,
              "start_score": "0-1",
              "fav_name": "Australia",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 41.3,
              "small_lead_pct": 11.7,
              "big_lead_pct": 5.1,
              "fav_win_pct": 16.7,
              "fav_draw_pct": 24.6,
              "fav_lose_pct": 58.6,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Australia 追平（平局）",
                  "pct": 24.6
                },
                {
                  "key": "win1",
                  "label": "Australia 净胜1球翻盘（如 2-1）",
                  "pct": 11.7
                },
                {
                  "key": "win2",
                  "label": "Australia 净胜≥2球翻盘（如 3-1）",
                  "pct": 5.1
                },
                {
                  "key": "upset_hold",
                  "label": "Egypt 保持胜果至终场",
                  "pct": 58.6
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 39.3 分",
                "first_goal_wait": 39.3,
                "fast_pct": 46.5,
                "moderate_pct": 14.4,
                "slow_pct": 39.1,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 46.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.4
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 39.1
                  }
                ]
              },
              "big_delta": -12.7,
              "small_delta": -11.2,
              "narrative": "Egypt 先破门（已 0-1） → 「巩固防守」；Australia 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.3 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 39.7,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 31,
              "readout_cn": "Australia · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
            "xg_home_ht": 0.55,
            "xg_away_ht": 0.46,
            "xg_home_2h": 0.69,
            "xg_away_2h": 0.58,
            "home_win": 29.9,
            "draw": 46.2,
            "away_win": 23.9,
            "top_score": "0-0",
            "top_score_prob": 36.4,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 36.4
              },
              {
                "score": "1-0",
                "prob": 20
              },
              {
                "score": "0-1",
                "prob": 16.8
              }
            ],
            "ht_goals_expected": 1.01,
            "ht_over_0_5_pct": 63.6,
            "ht_over_1_5_pct": 26.8,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.55–0.46（约占全场 44%） · 最可能 0-0（36.4%） · 胜平负 29.9/46.2/23.9 · 半场≥1球约 63.6%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Australia · 常规对抗。 · 与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.6,
          "xg_gap": 0.3,
          "xg_home": 1.45,
          "xg_away": 1.15,
          "xg_baseline_home": 1.45,
          "xg_baseline_away": 1.15,
          "xg_note": "结构推演用基准 xG 1.45–1.15（进球氛围用调整后 1.24–1.04）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Australia",
          "dog_name": "Egypt",
          "fav_xg": 1.45,
          "dog_xg": 1.15,
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
          "prob_over_line": 47.9,
          "prob_meet_guess": 47.9,
          "guess_n": 3,
          "prob_4_plus": 26,
          "prob_2_or_less": 52.1,
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
          "summary_cn": "【路径·基准 xG】合计 2.6 · Australia 1.45 / Egypt 1.15 → 主路径「铁局/小比分」约 56%。 超 2.5 约 47.9% · ≤2球 52.1%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.25,
        "tier_label": "Australia -0.25 · Egypt +0.25",
        "totals_line": 2.5,
        "over_pct": 39.7,
        "fair_line": 2.25,
        "line_gap": 0.25,
        "full_cover_pct": 48.5,
        "fav_win_pct": 40.8,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Australia -0.25 · 净胜≥1",
        "line_move_tag": "flat",
        "line_move_cn": "盘路平稳",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（埃及受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "埃及 +0/0.5 @0.93",
        "agent_totals_cn": "大球 2.5 @0.92",
        "agent_totals_skipped": false,
        "agent_totals_skip_cn": null,
        "ko_totals_policy": "R9",
        "totals_level": "mild_low",
        "totals_show_lean": false,
        "totals_lean_side": "dull"
      }
    },
    {
      "id": "m86",
      "fifa_match_number": 86,
      "fifa_match_id": "400021521",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M86 · J组冠军 vs H组亚军",
      "knockout_next": "胜者 → M95（16强 · 对 M88 胜者）",
      "date": "2026-07-03",
      "time": "18:00",
      "time_local": "18:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "06:00",
      "date_beijing": "7月4日",
      "time_beijing_full": "北京时间 7月4日 06:00",
      "venue": "Hard Rock Stadium",
      "city": "Miami, USA",
      "note": "32强 M86 · 阿根廷 vs 佛得角 · 迈阿密",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-4-2",
          "home": "Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Fernández, Mac Allister; Messi, Álvarez, Garnacho",
          "away": "Vozinha; Monteiro, Cabo, Ponck, Borges; Duarte, Monteiro; Mendes, Cabral, Ryan; Platini",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Argentina",
        "iso": "ar",
        "flag": "",
        "fifa_rank": 1,
        "rating": 91,
        "form": [
          "W",
          "W",
          "W",
          "W",
          "W"
        ],
        "coach": "Lionel Scaloni",
        "stars": [
          {
            "name": "Lionel Messi",
            "pos": "RW",
            "club": "Inter Miami",
            "rating": 9.2,
            "desc": "深盘轴心 · 迈阿密主场"
          },
          {
            "name": "Julián Álvarez",
            "pos": "ST",
            "club": "Atlético",
            "rating": 8.8,
            "desc": "终结 · 跑位"
          },
          {
            "name": "Enzo Fernández",
            "pos": "CM",
            "club": "Chelsea",
            "rating": 8.6,
            "desc": "组织发起点"
          }
        ],
        "star": {
          "name": "Lionel Messi",
          "pos": "RW",
          "club": "Inter Miami",
          "rating": 9.2,
          "desc": "J 组头名 9 分"
        },
        "injuries": [
          {
            "player": "Lionel Messi",
            "status": "FIT",
            "note": "J 组 3 战 3 胜 · 迈阿密主场 · 预计首发",
            "confirmed": true
          },
          {
            "player": "Julián Álvarez",
            "status": "FIT",
            "note": "锋线轮换核心",
            "confirmed": true
          },
          {
            "player": "Leandro Paredes",
            "status": "DOUBT",
            "note": "小腿轻微疲劳 · 或 Enzo 单后腰",
            "confirmed": false
          }
        ],
        "rumors": [
          "Scaloni：「佛得角 3 连平出线不可轻视，但 -1.5/2 我们必须穿盘」",
          "预计 4-3-3：Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Álvarez, Garnacho",
          "J 组 9 分零失球 · 深盘 -1.5/2@0.94 低水 · Agent ★阿-1.5/2 🔥",
          "迈阿密主场标签 · Messi 最后一届世界杯情感加成"
        ]
      },
      "away": {
        "name": "Cape Verde",
        "iso": "cv",
        "flag": "",
        "fifa_rank": 65,
        "rating": 68,
        "form": [
          "D",
          "D",
          "D",
          "W",
          "D"
        ],
        "coach": "Bubista",
        "stars": [
          {
            "name": "Ryan Mendes",
            "pos": "LW",
            "club": "Al Nasr",
            "rating": 7.2,
            "desc": "速度 · 定位球"
          },
          {
            "name": "Jóvio",
            "pos": "CB",
            "club": "Famalicão",
            "rating": 7,
            "desc": "防线领袖"
          },
          {
            "name": "Platini",
            "pos": "ST",
            "club": "Santa Clara",
            "rating": 7.1,
            "desc": "支点 · 铁桶轴"
          }
        ],
        "star": {
          "name": "Ryan Mendes",
          "pos": "LW",
          "club": "Al Nasr",
          "rating": 7.2,
          "desc": "H 组亚军 · 反击"
        },
        "injuries": [
          {
            "player": "Ryan Mendes",
            "status": "FIT",
            "note": "反击第一出口",
            "confirmed": true
          },
          {
            "player": "Jóvio",
            "status": "FIT",
            "note": "中卫 · 定位球",
            "confirmed": true
          }
        ],
        "rumors": [
          "Bubista：「对阿根廷没有包袱——+1.5/2 是我们熟悉的铁桶+偷一个」",
          "预计 4-4-2 极深 · Platini 孤立 · Mendes 反击",
          "H 组 3 连平出线 · 受让 +1.5/2@0.95"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 0,
        "recent": [],
        "note": "首次大赛交锋"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-04",
        "name": "Drew Fischer",
        "nation": "Canada",
        "iso": "ca",
        "wc_experience": "2026 世界杯 · 32强 M86 主裁 · CONCACAF · 执法阿根廷 vs 佛得角",
        "avg_yellow": 4.2,
        "avg_red": 0.1,
        "avg_penalty": 0.28,
        "home_win_rate": 55,
        "bias_index": 52,
        "bias_note": "加拿大主裁执法迈阿密晨场。阿根廷 -1.5/2 深盘 vs 佛得角铁桶；对 Messi 被侵犯与非洲球队身体对抗尺度是关键。",
        "tendencies": [
          "FIFA 官方主裁 · Drew Fischer（加拿大）",
          "第四官员 Katia Itzel García（墨西哥）",
          "深盘单场 · 迈阿密湿热"
        ],
        "officials": {
          "referee": "Drew Fischer (CAN)",
          "fourth": "Katia Itzel García (MEX)"
        },
        "fifa_match_id": "400021521",
        "note": "FIFA M86 · 阿根廷 vs 佛得角 · Miami",
        "updated": "2026-07-03T14:36:13+08:00"
      },
      "prediction": {
        "home_win": 71,
        "draw": 18,
        "away_win": 12,
        "score": "2-0",
        "confidence": 85,
        "xg_home": 2.35,
        "xg_away": 0.65,
        "key_factor": "32强 M86 · 阿根廷 J1 vs 佛得角 H2 · 深盘 · 泊松 3-0/2-0",
        "score_dist": [
          {
            "score": "2-0",
            "prob": 18.4
          },
          {
            "score": "1-0",
            "prob": 15.3
          },
          {
            "score": "3-0",
            "prob": 14.7
          },
          {
            "score": "4-0",
            "prob": 8.8
          },
          {
            "score": "2-1",
            "prob": 6.4
          },
          {
            "score": "0-0",
            "prob": 6.4
          },
          {
            "score": "1-1",
            "prob": 5.4
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M86 · 阿根廷 J1 vs 佛得角 H2 · 胜者 M95"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "迈阿密晨场湿热 · 29°C · 湿度 78% · 降雨概率 35% · 东南风 2级 · 高湿；M86 阿根廷 vs 佛得角 · 湿热拖慢节奏 · 深盘穿盘须早破门（29°C · 湿度78%）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M86 · 阿根廷 J1 vs 佛得角 H2 · 深盘 · 泊松 3-0/2-0"
          }
        ],
        "base_home_win": 74.6,
        "base_draw": 16.6,
        "base_away_win": 8.8,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": true,
          "closeXg": false,
          "gap": 1.7,
          "notes": [],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 2.4,
        "xg_poisson_away": 0.35,
        "xg_tier_calibrated": true,
        "score_prob": 18.4,
        "score_top3": [
          {
            "score": "2-0",
            "prob": 18.4
          },
          {
            "score": "1-0",
            "prob": 15.3
          },
          {
            "score": "3-0",
            "prob": 14.7
          }
        ],
        "expected_score": "2-0"
      },
      "weather": {
        "city": "迈阿密",
        "country": "美国",
        "venue": "Hard Rock Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 29,
        "humidity": 78,
        "altitude_m": 5,
        "rain_chance": 35,
        "wind": "东南风 2级 · 高湿",
        "condition_cn": "迈阿密晨场湿热",
        "impact_level": "HIGH",
        "impact_summary": "M86 阿根廷 vs 佛得角 · 湿热拖慢节奏 · 深盘穿盘须早破门",
        "home_adapt": 88,
        "away_adapt": 79,
        "weather_factors": [
          {
            "label": "29°C · 湿度78%",
            "impact": "高",
            "detail": "北京时间 7月4日 06:00"
          }
        ],
        "forecast_updated": "2026-07-04 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "癸卯日",
          "day_summary": "癸卯日——水木相生",
          "hour_home": "见各场",
          "hour_home_element": "木"
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
        "home_score": 82,
        "away_score": 18,
        "mystic_verdict": "阿根廷火土旺，佛得角金水守。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1.75,
        "tier_label": "Argentina -1.75 · Cape Verde +1.75",
        "implied_tier": 1.25,
        "tier_gap": 0.5,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Argentina（约 78%）",
        "analysis": "M86 · 阿根廷 vs 佛得角 · 阿-1.5/2@0.94 · 大小 3.5 大0.88小0.98。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "2-0",
              "prob": 13.9
            },
            {
              "score": "1-0",
              "prob": 11.8
            },
            {
              "score": "3-0",
              "prob": 10.9
            }
          ],
          "one_goal_win_pct": 23.5,
          "two_plus_win_pct": 51.7,
          "full_cover_pct": 47.3,
          "dog_hold_pct": 52.7,
          "fav_win_pct": 75.2,
          "cover_given_win_pct": 68.8,
          "grid_max_goals": 6,
          "grid_tail_pct": 1,
          "half_cover_pct": 23.5,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "部分达标净胜=1",
          "fav_cover_ev": 0.269,
          "dog_cover_ev": -0.269,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 3,
          "fair_totals_line": 2.75,
          "over_2_5_pct": 57.2,
          "over_3_pct": 34.6,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥2 约 51.7%；部分达标净胜=1 约 23.5%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 51.7,
          "dog_hold_pct_raw": 48.3
        },
        "spread_odds": {
          "fav": 0.94,
          "dog": 0.95,
          "note": "Argentina 0.94 · Cape Verde 0.95"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 3.5,
          "market_goals_int": 4,
          "line_label": "总进球约 3.5 个",
          "implied_xg_total": 3,
          "fair_line": 2.75,
          "line_gap": 0.75,
          "over_pct": 33.1,
          "under_pct": 66.9,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 3.5 约 66.9% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 3.5,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "Argentina -1.5/2@0.92 · Cape Verde +1.5/2@0.94",
          "spread_now_cn": "Argentina -1.5/2@0.94 · Cape Verde +1.5/2@0.95",
          "totals_now_cn": "大小 3.5 · 大 0.88 / 小 0.98",
          "tag": "flat",
          "tag_cn": "盘路平稳",
          "tag_color": "#7BB8D4",
          "detail_cn": "档位持平 · 热门 0.92→0.94（抬水） · 受让 0.94→0.95（抬水） 现盘去水隐含：Argentina 50.1% · Cape Verde 49.9%（超收 2.8%） 模型穿盘（现档 Argentina -1.75 · Cape Verde +1.75）：Argentina 47.3% · Cape Verde 52.7% 模型−市场：Argentina -2.8pp · Cape Verde +2.8pp 期望 ROI@现水：Argentina +14.6% · Cape Verde -2.1% 档位与水位变化幅度有限，暂无明确单向资金信号。",
          "actuarial": {
            "actuarial_type": "flat",
            "actuarial_cn": "盘路平稳",
            "actuarial_color": "#7BB8D4",
            "actuarial_desc": "档位与水位变化幅度有限，暂无明确单向资金信号。",
            "summary_cn": "档位持平 · 热门 0.92→0.94（抬水） · 受让 0.94→0.95（抬水） 现盘去水隐含：Argentina 50.1% · Cape Verde 49.9%（超收 2.8%） 模型穿盘（现档 Argentina -1.75 · Cape Verde +1.75）：Argentina 47.3% · Cape Verde 52.7% 模型−市场：Argentina -2.8pp · Cape Verde +2.8pp 期望 ROI@现水：Argentina +14.6% · Cape Verde -2.1% 档位与水位变化幅度有限，暂无明确单向资金信号。",
            "line_delta": 0,
            "line_delta_cn": "档位持平",
            "fav_odds_delta": 0.02,
            "dog_odds_delta": 0.01,
            "water_move_cn": "热门 0.92→0.94（抬水） · 受让 0.94→0.95（抬水）",
            "open_tier": 1.75,
            "open_tier_label": "Argentina -1.75 · Cape Verde +1.75",
            "now_tier": 1.75,
            "implied_tier": 1.25,
            "open_tier_gap": 0.5,
            "now_tier_gap": 0.5,
            "open_devig": {
              "fav_pct": 50.3,
              "dog_pct": 49.7,
              "overround_pct": 3.6
            },
            "now_devig": {
              "fav_pct": 50.1,
              "dog_pct": 49.9,
              "overround_pct": 2.8
            },
            "model_cover_open_pct": 47.3,
            "model_cover_now_pct": 47.3,
            "model_dog_cover_now_pct": 52.7,
            "market_fav_cover_now_pct": 50.1,
            "market_dog_cover_now_pct": 49.9,
            "model_vs_market_fav_pp": -2.8,
            "model_vs_market_dog_pp": 2.8,
            "fav_roi_pct": 14.6,
            "dog_roi_pct": -2.1,
            "fav_name": "Argentina",
            "dog_name": "Cape Verde"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "flat",
          "actuarial_cn": "盘路平稳",
          "actuarial_color": "#7BB8D4",
          "actuarial_desc": "档位与水位变化幅度有限，暂无明确单向资金信号。",
          "summary_cn": "档位持平 · 热门 0.92→0.94（抬水） · 受让 0.94→0.95（抬水） 现盘去水隐含：Argentina 50.1% · Cape Verde 49.9%（超收 2.8%） 模型穿盘（现档 Argentina -1.75 · Cape Verde +1.75）：Argentina 47.3% · Cape Verde 52.7% 模型−市场：Argentina -2.8pp · Cape Verde +2.8pp 期望 ROI@现水：Argentina +14.6% · Cape Verde -2.1% 档位与水位变化幅度有限，暂无明确单向资金信号。",
          "line_delta": 0,
          "line_delta_cn": "档位持平",
          "fav_odds_delta": 0.02,
          "dog_odds_delta": 0.01,
          "water_move_cn": "热门 0.92→0.94（抬水） · 受让 0.94→0.95（抬水）",
          "open_tier": 1.75,
          "open_tier_label": "Argentina -1.75 · Cape Verde +1.75",
          "now_tier": 1.75,
          "implied_tier": 1.25,
          "open_tier_gap": 0.5,
          "now_tier_gap": 0.5,
          "open_devig": {
            "fav_pct": 50.3,
            "dog_pct": 49.7,
            "overround_pct": 3.6
          },
          "now_devig": {
            "fav_pct": 50.1,
            "dog_pct": 49.9,
            "overround_pct": 2.8
          },
          "model_cover_open_pct": 47.3,
          "model_cover_now_pct": 47.3,
          "model_dog_cover_now_pct": 52.7,
          "market_fav_cover_now_pct": 50.1,
          "market_dog_cover_now_pct": 49.9,
          "model_vs_market_fav_pp": -2.8,
          "model_vs_market_dog_pp": 2.8,
          "fav_roi_pct": 14.6,
          "dog_roi_pct": -2.1,
          "fav_name": "Argentina",
          "dog_name": "Cape Verde"
        },
        "totals_pick_layers": {
          "model_side": "under",
          "situation_side": "neutral",
          "market_line_side": "under",
          "market_odds_side": "over",
          "market_side": "under",
          "recommended_side": "under",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "under",
            "line": "under",
            "odds": "over",
            "situation": "neutral"
          },
          "vote_summary_cn": "小球(model) · 小球(line) · 大球(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘（阿根廷穿盘）",
          "tendency_reason_cn": "J1 vs H2 深盘 -1.5/2 · xG 2.35:0.65 · ★阿-1.5/2 · 大3.5副项（R9不打副项小）。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "fav",
            "label_cn": "阿根廷 -1.5/2 @0.94",
            "reason_cn": "深盘低水 · 模型 3-0/2-0 · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 3.5 @0.88",
            "reason_cn": "升线大侧略低水 · 副项。",
            "manual_override": true,
            "recommended_side": "under",
            "skipped": true,
            "skip_reason_cn": "大信心仅绑★=大小，副项大小不出（R9）"
          },
          "picked_at": "2026-07-04-prematch",
          "pick_meta": {
            "model_side": "under",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "over",
            "market_side": "under",
            "pick_side": "over",
            "recommended_side": "under",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "under",
              "line": "under",
              "odds": "over",
              "situation": "neutral"
            },
            "vote_summary_cn": "小球(model) · 小球(line) · 大球(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 33.1,
            "line_gap": 0.75
          },
          "ko_totals_policy": {
            "enabled": true,
            "rule_id": "R9",
            "rule_cn": "★=大小无模型/盘冲突 · 副项仅大球 · 大信心仅绑★=大小",
            "applied_at": "buildDepthCalibration"
          },
          "confidence_before_ko": "high",
          "confidence_downgrade_cn": "淘汰赛大信心仅绑★=大小（R9）"
        },
        "applied_delta": {
          "home_win": -4,
          "draw": 1,
          "away_win": 3
        },
        "adjustment_note": "模型微调：主胜 -4% · 平 +1% · 客 +3%",
        "adjusted_probs": {
          "home_win": 71,
          "draw": 18,
          "away_win": 12
        },
        "display_summary": {
          "fav_name": "Argentina",
          "expected_total_goals": 2.41,
          "poisson_fav_win_pct": 69.8,
          "small_lead_pct": 26.8,
          "small_example_score": "1-0",
          "small_example_pct": 16.5,
          "big_cover_pct": 43,
          "big_example_score": "2-0",
          "big_example_pct": 15.8,
          "win_shape": {
            "fav_name": "Argentina",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 37.2%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 16.5,
                "pct": 23.6
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.4,
                "pct": 14.8
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 25.9,
                "pct": 37.2
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 17.1,
                "pct": 24.4
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 38.4
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 37.2
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24.4
              }
            ],
            "fav_win_pct": 71
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
              "note": "Argentina：Leandro Paredes 存疑 · Cape Verde 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M86 阿根廷 vs 佛得角 · 湿热拖慢节奏 · 深盘穿盘须早破门"
            }
          ],
          "xg_context": {
            "baseline_home": 2.35,
            "baseline_away": 0.65,
            "adjusted_home": 1.92,
            "adjusted_away": 0.55,
            "note": "基准 xG 2.35–0.65 → 调整后 1.92–0.55"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 0.5,
            "implied_tier_label": "Argentina -1.25 · Cape Verde +1.25",
            "market_tier_label": "Argentina -1.75 · Cape Verde +1.75",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.5 · 部分达标净胜=1 约 26.6%"
          },
          "win_outlook": {
            "fav_name": "Argentina",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 38.4
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 37.2
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24.4
              }
            ],
            "margin_line_cn": "Argentina · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
            "margin_meet_pct": 49.8,
            "margin_half_pct": 26.8,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "部分达标净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 3.5,
            "totals_line_cn": "总进球参考 3.5",
            "fair_totals_line": 2,
            "model_total_xg": 2.47,
            "totals_line_gap": 1.5,
            "totals_high_pct": 22.5,
            "totals_low_pct": 77.5,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 32.3,
            "win_margin2_low_total_pct": 15.8,
            "win_margin2_high_total_pct": 17.1,
            "readout_cn": "取胜约 71%；若取胜，以「险胜收工」为主（38.4%）。 对着赛前净胜参考，净胜≥2（全达标）约 49.8%；部分达标净胜=1 约 26.8%；对着总进球参考 3.5，模型超线概率约 22.5%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 3.5。"
          },
          "totals_line": 3.5,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 16.3
            },
            {
              "score": "2-0",
              "pct": 15.6
            },
            {
              "score": "3-0",
              "pct": 10
            }
          ],
          "totals_view": {
            "expected_total": 2.4,
            "fair_line": 2,
            "market_line": 3.5,
            "line_gap": 1.5,
            "over_pct": 22.5,
            "gap_warning": {
              "level": "high",
              "cn": "总进球参考 3.5，合理值 2——高于合理值 1.5，模型宜谨慎"
            },
            "totals_outlook": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 23,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 3.5，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2）。 警惕参考定得偏高、实际仍走小比分。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": false,
              "over_pct": 22.5,
              "line_gap": 1.5,
              "market_line": 3.5,
              "market_goals_int": 4,
              "market_goals_cn": "总进球参考 3.5",
              "caution_public_high": true
            },
            "summary_cn": "预测 2.4 · 合理值 2 · 总进球参考 3.5（高于合理值 1.5） · ⚠ 高于合理值 1.5 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Argentina -1.75 穿盘：达到预期较有希望",
            "sub_cn": "Argentina 胜 70.1% · 胜后穿 62.1% · Cape Verde +1.75 守 49.9% 进球氛围：倾向沉闷",
            "spread": {
              "level": "likely",
              "label_cn": "达到预期较有希望",
              "color": "#5BBF8A",
              "fav_name": "Argentina",
              "dog_name": "Cape Verde",
              "fav_handicap_cn": "Argentina -1.75",
              "dog_handicap_cn": "Cape Verde +1.75",
              "market_expect_cn": "Argentina -1.75 · 净胜≥2",
              "meet_pct": 50.1,
              "dog_hold_pct": 49.9,
              "fav_win_pct": 70.1,
              "cover_given_win_pct": 62.1,
              "full_cover_pct_raw": 43.6,
              "meet_pct_label": "Argentina -1.75 穿盘概率（校准）",
              "dog_hold_label": "Cape Verde +1.75 守住概率（校准）",
              "two_stage_cn": "Argentina 取胜约 70.1% · 赢球后穿盘约 62.1% · Cape Verde +1.75 守住约 49.9%",
              "grid_tail_pct": 0.4,
              "verdict_cn": "达到预期较有希望",
              "headline_cn": "Argentina -1.75 穿盘：达到预期较有希望",
              "pill_cn": "Argentina 胜 70.1% · 胜后穿 62.1% · Cape Verde +1.75 守 49.9%",
              "detail_cn": "Argentina 取胜约 70.1% · 赢球后穿盘约 62.1% · Cape Verde +1.75 守住约 49.9%（泊松 raw 43.6% → 校准 50.1%）；模型认为热门穿盘概率相对较高（部分达标净胜=1 约 26.6%）。",
              "extra_stats_cn": "部分达标净胜=1 约 26.6%",
              "full_cover_pct": 50.1,
              "half_cover_pct": 26.6,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "部分达标净胜=1",
              "tier_gap": 0.5,
              "show_cover": true
            },
            "totals": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 23,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 3.5，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2）。 警惕参考定得偏高、实际仍走小比分。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": false,
              "over_pct": 22.5,
              "line_gap": 1.5,
              "market_line": 3.5,
              "market_goals_int": 4,
              "market_goals_cn": "总进球参考 3.5",
              "caution_public_high": true
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
                  "fav_name": "Argentina",
                  "dog_name": "Cape Verde",
                  "fav_handicap_cn": "Argentina -1.75",
                  "dog_handicap_cn": "Cape Verde +1.75",
                  "market_expect_cn": "Argentina -1.75 · 净胜≥2",
                  "meet_pct": 50.1,
                  "dog_hold_pct": 49.9,
                  "fav_win_pct": 70.1,
                  "cover_given_win_pct": 62.1,
                  "full_cover_pct_raw": 43.6,
                  "meet_pct_label": "Argentina -1.75 穿盘概率（校准）",
                  "dog_hold_label": "Cape Verde +1.75 守住概率（校准）",
                  "two_stage_cn": "Argentina 取胜约 70.1% · 赢球后穿盘约 62.1% · Cape Verde +1.75 守住约 49.9%",
                  "grid_tail_pct": 0.4,
                  "verdict_cn": "达到预期较有希望",
                  "headline_cn": "Argentina -1.75 穿盘：达到预期较有希望",
                  "pill_cn": "Argentina 胜 70.1% · 胜后穿 62.1% · Cape Verde +1.75 守 49.9%",
                  "detail_cn": "Argentina 取胜约 70.1% · 赢球后穿盘约 62.1% · Cape Verde +1.75 守住约 49.9%（泊松 raw 43.6% → 校准 50.1%）；模型认为热门穿盘概率相对较高（部分达标净胜=1 约 26.6%）。",
                  "extra_stats_cn": "部分达标净胜=1 约 26.6%",
                  "full_cover_pct": 50.1,
                  "half_cover_pct": 26.6,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "部分达标净胜=1",
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "Argentina 胜 70.1% · 胜后穿 62.1% · Cape Verde +1.75 守 49.9%",
                "color": "#5BBF8A",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "◎",
                "label": "进球氛围",
                "outlook": {
                  "level": "clear_low",
                  "label_cn": "倾向沉闷",
                  "color": "#7BB8D4",
                  "meter_label_cn": "倾向沉闷",
                  "meter_pos": 23,
                  "lean_side": "dull",
                  "lean_strength": "clear",
                  "section_intro_cn": "对照总进球参考 3.5，看偏闷还是偏精彩",
                  "pill_cn": "倾向沉闷",
                  "detail_cn": "倾向沉闷——小比分概率高（合理值 2）。 警惕参考定得偏高、实际仍走小比分。",
                  "headline_cn": "进球氛围：倾向沉闷",
                  "show_lean": false,
                  "over_pct": 22.5,
                  "line_gap": 1.5,
                  "market_line": 3.5,
                  "market_goals_int": 4,
                  "market_goals_cn": "总进球参考 3.5",
                  "caution_public_high": true
                },
                "text": "倾向沉闷",
                "color": "#7BB8D4",
                "muted": true
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Argentina",
              "first_goal_pct": 77.7,
              "start_score": "1-0",
              "fav_name": "Argentina",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 97.7,
              "small_lead_pct": 26.2,
              "big_lead_pct": 62,
              "fav_win_pct": 88.2,
              "fav_draw_pct": 9.5,
              "fav_lose_pct": 2.4,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Argentina 保持胜果（净胜≥1）",
                  "pct": 88.2
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 9.5
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 2.4
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
              "big_delta": 19,
              "small_delta": -0.6,
              "narrative": "Argentina 先破门（已 1-0） → 「巩固防守」；Cape Verde 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Argentina",
                "state_label": "Argentina 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 38.4
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 37.2
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 24.4
                  }
                ],
                "margin_line_cn": "Argentina · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
                "margin_meet_pct": 62,
                "margin_half_pct": 26.2,
                "margin_fail_pct": 26.2,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "部分达标净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 3.5,
                "totals_line_cn": "总进球参考 3.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.95,
                "totals_line_gap": 1.25,
                "totals_high_pct": 30.7,
                "totals_low_pct": 69.3,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 35.3,
                "win_margin2_low_total_pct": 21.1,
                "win_margin2_high_total_pct": 25.4,
                "readout_cn": "Argentina 已 1-0 领先：仍取胜约 88.2%。 对着总进球参考 3.5，模型超线概率约 30.7%。 常见 2-0 收尾（相对总进球参考 3.5仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Cape Verde",
              "first_goal_pct": 22.3,
              "start_score": "0-1",
              "fav_name": "Argentina",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 68.2,
              "small_lead_pct": 21.8,
              "big_lead_pct": 17.4,
              "fav_win_pct": 39.2,
              "fav_draw_pct": 29,
              "fav_lose_pct": 31.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Argentina 追平（平局）",
                  "pct": 29
                },
                {
                  "key": "win1",
                  "label": "Argentina 净胜1球翻盘（如 2-1）",
                  "pct": 21.8
                },
                {
                  "key": "win2",
                  "label": "Argentina 净胜≥2球翻盘（如 3-1）",
                  "pct": 17.4
                },
                {
                  "key": "upset_hold",
                  "label": "Cape Verde 保持胜果至终场",
                  "pct": 31.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 35.2 分",
                "first_goal_wait": 35.2,
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
              "big_delta": -25.6,
              "small_delta": -5,
              "narrative": "Cape Verde 先破门（已 0-1） → 「巩固防守」；Argentina 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.4 · 合理值 2 · 总进球参考 3.5（高于合理值 1.5） · ⚠ 高于合理值 1.5 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 3.5",
              "totals_high_pct": 22.5,
              "type_tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 14,
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
              "draw_trap_pct": 14,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.84,
            "xg_away_ht": 0.24,
            "xg_home_2h": 1.08,
            "xg_away_2h": 0.31,
            "home_win": 48.7,
            "draw": 41.2,
            "away_win": 10.1,
            "top_score": "0-0",
            "top_score_prob": 34,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 34
              },
              {
                "score": "1-0",
                "prob": 28.5
              },
              {
                "score": "2-0",
                "prob": 12
              }
            ],
            "ht_goals_expected": 1.08,
            "ht_over_0_5_pct": 66,
            "ht_over_1_5_pct": 29.3,
            "pick": "home",
            "pick_name": "Argentina",
            "summary_cn": "半场 xG 0.84–0.24（约占全场 44%） · 最可能 0-0（34%） · 胜平负 48.7/41.2/10.1 · 半场≥1球约 66%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Argentina · 压制局。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.5 · 部分达标净胜=1 约 26.6%（模型微调：主胜 -4% · 平 +1% · 客 +3%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 3,
          "xg_gap": 1.7,
          "xg_home": 2.35,
          "xg_away": 0.65,
          "xg_baseline_home": 2.35,
          "xg_baseline_away": 0.65,
          "xg_note": "结构推演用基准 xG 2.35–0.65（进球氛围用调整后 1.92–0.55）",
          "lean_note": "与进球氛围同向——可参考权重提高",
          "fav_name": "Argentina",
          "dog_name": "Cape Verde",
          "fav_xg": 2.35,
          "dog_xg": 0.65,
          "path_type": "low",
          "path_label": "铁局/小比分",
          "lean": "low",
          "lean_cn": "小比分预测",
          "lean_mode": "prediction",
          "lean_confidence": 66.9,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": "与进球氛围同向——可参考权重提高",
          "modules_aligned": true,
          "live_watch": [],
          "prob_over_line": 33.1,
          "prob_meet_guess": 33.1,
          "guess_n": 4,
          "prob_4_plus": 33.1,
          "prob_2_or_less": 43.8,
          "totals_line": 3.5,
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
              "key": "lean_low",
              "label": "小比分预测",
              "color": "#7BB8D4",
              "bg": "rgba(123,184,212,0.1)"
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
            "xG 差≥1.0——样本多为小比分"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 3 · Argentina 2.35 / Cape Verde 0.65 → 主路径「铁局/小比分」约 65% · 小比分预测。 超 3.5 约 33.1% · ≤2球 43.8%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 1.75,
        "tier_label": "Argentina -1.75 · Cape Verde +1.75",
        "totals_line": 3.5,
        "over_pct": 22.5,
        "fair_line": 2,
        "line_gap": 1.5,
        "full_cover_pct": 50.1,
        "fav_win_pct": 70.1,
        "cover_given_win_pct": 62.1,
        "spread_level": "likely",
        "spread_market_expect": "Argentina -1.75 · 净胜≥2",
        "line_move_tag": "flat",
        "line_move_cn": "盘路平稳",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（阿根廷穿盘）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "阿根廷 -1.5/2 @0.94",
        "agent_totals_cn": null,
        "agent_totals_skipped": true,
        "agent_totals_skip_cn": "大信心仅绑★=大小，副项大小不出（R9）",
        "ko_totals_policy": "R9",
        "totals_level": "clear_low",
        "totals_show_lean": false,
        "totals_lean_side": "dull"
      }
    },
    {
      "id": "m87",
      "fifa_match_number": 87,
      "fifa_match_id": "400021517",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M87 · K组冠军 vs 加纳(3rd)",
      "knockout_next": "胜者 → M96（16强 · 对 M85 胜者）",
      "date": "2026-07-03",
      "time": "20:30",
      "time_local": "20:30 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "09:30",
      "date_beijing": "7月4日",
      "time_beijing_full": "北京时间 7月4日 09:30",
      "venue": "Arrowhead Stadium",
      "city": "Kansas City, USA",
      "note": "32强 M87 · 哥伦比亚 vs 加纳 · 堪萨斯城 · FIFA 官方 DEIJL 池第3",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Mina; Muñoz, Sánchez, Lucumí, Mojica; Barrios, Lerma; Arias, James, Cuadrado; Borré",
          "away": "Ati-Zigi; Lamptey, Amartey, Djiku, Baba; Partey, Abdul; Kudus, Sulemana, Semenyo; Jordan",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Colombia",
        "iso": "co",
        "flag": "",
        "fifa_rank": 12,
        "rating": 84,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Néstor Lorenzo",
        "stars": [
          {
            "name": "James Rodríguez",
            "pos": "AM",
            "club": "León",
            "rating": 8.5,
            "desc": "定位球 · 最后一传"
          },
          {
            "name": "Luis Díaz",
            "pos": "LW",
            "club": "Liverpool",
            "rating": 8.6,
            "desc": "宽度 · 一对一"
          },
          {
            "name": "Wilmar Barrios",
            "pos": "CM",
            "club": "Zenit",
            "rating": 8,
            "desc": "屏障 · 绞杀 Kudus"
          }
        ],
        "star": {
          "name": "James Rodríguez",
          "pos": "AM",
          "club": "León",
          "rating": 8.5,
          "desc": "K 组头名"
        },
        "injuries": [
          {
            "player": "James Rodríguez",
            "status": "FIT",
            "note": "K 组头名 · 定位球轴",
            "confirmed": true
          },
          {
            "player": "Luis Díaz",
            "status": "FIT",
            "note": "左路爆点",
            "confirmed": true
          },
          {
            "player": "Radamel Falcao",
            "status": "OUT",
            "note": "未入选大名单",
            "confirmed": true
          }
        ],
        "rumors": [
          "Lorenzo：「加纳 DEIJL 池第3 出线——Kudus 速度是我们最要防的」",
          "预计 4-2-3-1：James 前腰 · Díaz/Cuadrado 宽度 · Borré 中锋",
          "FIFA 官方对阵：哥伦比亚 vs 加纳（非厄瓜多尔）· -0.5@0.93",
          "Agent ★哥伦比亚 -0.5 · 副项大 2.5"
        ]
      },
      "away": {
        "name": "Ghana",
        "iso": "gh",
        "flag": "",
        "fifa_rank": 70,
        "rating": 72,
        "form": [
          "W",
          "D",
          "L",
          "W",
          "D"
        ],
        "coach": "Otto Addo",
        "stars": [
          {
            "name": "Mohammed Kudus",
            "pos": "AM",
            "club": "West Ham",
            "rating": 8,
            "desc": "肋部破局 · 速度"
          },
          {
            "name": "Thomas Partey",
            "pos": "CDM",
            "club": "Arsenal",
            "rating": 8.1,
            "desc": "屏障 · 经验"
          },
          {
            "name": "Jordan Ayew",
            "pos": "ST",
            "club": "Leicester",
            "rating": 7.6,
            "desc": "支点 · 定位球"
          }
        ],
        "star": {
          "name": "Mohammed Kudus",
          "pos": "AM",
          "club": "West Ham",
          "rating": 8,
          "desc": "DEIJL 池第3 · 反击轴"
        },
        "injuries": [
          {
            "player": "Mohammed Kudus",
            "status": "FIT",
            "note": "反击轴 · 预计首发",
            "confirmed": true
          },
          {
            "player": "Thomas Partey",
            "status": "FIT",
            "note": "屏障 · 绞杀 James",
            "confirmed": true
          },
          {
            "player": "Inaki Williams",
            "status": "DOUBT",
            "note": "肌肉轻微不适 · 赛前队检",
            "confirmed": false
          }
        ],
        "rumors": [
          "Addo：「哥伦比亚浅盘 -0.5 说明他们也有压力——我们 +0.5 守平就是胜利」",
          "预计 4-3-3 低位+转换 · Kudus 肋部 · Partey 屏障",
          "L 组 4 分压线晋级 · 无包袱心态"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 1,
        "away_wins": 0,
        "recent": [
          {
            "year": 2017,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "Colombia"
          }
        ],
        "note": "哥伦比亚历史占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-04",
        "name": "Clément Turpin",
        "nation": "France",
        "iso": "fr",
        "wc_experience": "2026 世界杯 · 32强 M87 主裁 · UEFA 精英 · 执法哥伦比亚 vs 加纳",
        "avg_yellow": 4.4,
        "avg_red": 0.11,
        "avg_penalty": 0.32,
        "home_win_rate": 53,
        "bias_index": 51,
        "bias_note": "法国主裁执法堪萨斯城。哥伦比亚 -0.5 vs 加纳 Kudus 反击轴；对南美技术犯规与非洲速度犯规平衡执法。",
        "tendencies": [
          "FIFA 官方主裁 · Clément Turpin（法国）",
          "第四官员 Alejandro Hernández（西班牙）",
          "浅盘场 · 哥伦比亚主场标签"
        ],
        "officials": {
          "referee": "Clément Turpin (FRA)",
          "fourth": "Alejandro Hernández (ESP)"
        },
        "fifa_match_id": "400021517",
        "note": "FIFA M87 · 哥伦比亚 vs 加纳 · Kansas City",
        "updated": "2026-07-03T14:36:13+08:00"
      },
      "prediction": {
        "home_win": 49,
        "draw": 31,
        "away_win": 20,
        "score": "1-0",
        "confidence": 74,
        "xg_home": 1.72,
        "xg_away": 0.98,
        "key_factor": "32强 M87 · 哥伦比亚 K1 vs 加纳(3rd) · James vs Kudus · 泊松 2-1/1-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 14
          },
          {
            "score": "2-0",
            "prob": 12
          },
          {
            "score": "1-1",
            "prob": 11.1
          },
          {
            "score": "2-1",
            "prob": 9.5
          },
          {
            "score": "0-0",
            "prob": 8.2
          },
          {
            "score": "3-0",
            "prob": 6.8
          },
          {
            "score": "0-1",
            "prob": 6.5
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M87 · 哥伦比亚 K1 vs 加纳(3rd) · 胜者 M96 对瑞士"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "堪萨斯城夏午 · 27°C · 湿度 60% · 降雨概率 20% · 西风 2级；M87 哥伦比亚 vs 加纳 · 气候影响低（27°C）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M87 · 哥伦比亚 K1 vs 加纳(3rd) · James vs Kudus · 泊松 2-1/1-0"
          }
        ],
        "base_home_win": 49,
        "base_draw": 31,
        "base_away_win": 20,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 7,
          "ironBucket": true,
          "closeXg": false,
          "gap": 0.74,
          "notes": [
            "热门难破密集"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.71,
        "xg_poisson_away": 0.79,
        "xg_tier_calibrated": true,
        "score_prob": 14,
        "score_top3": [
          {
            "score": "1-0",
            "prob": 14
          },
          {
            "score": "2-0",
            "prob": 12
          },
          {
            "score": "1-1",
            "prob": 11.1
          }
        ],
        "expected_score": "2-1"
      },
      "weather": {
        "city": "堪萨斯城",
        "country": "美国",
        "venue": "Arrowhead Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 27,
        "humidity": 60,
        "altitude_m": 280,
        "rain_chance": 20,
        "wind": "西风 2级",
        "condition_cn": "堪萨斯城夏午",
        "impact_level": "LOW",
        "impact_summary": "M87 哥伦比亚 vs 加纳 · 气候影响低",
        "home_adapt": 86,
        "away_adapt": 84,
        "weather_factors": [
          {
            "label": "27°C",
            "impact": "低",
            "detail": "北京时间 7月4日 09:30"
          }
        ],
        "forecast_updated": "2026-07-04 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "癸卯日",
          "day_summary": "癸卯日——水木相生",
          "hour_home": "见各场",
          "hour_home_element": "木"
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
        "mystic_verdict": "哥伦比亚木火攻，厄瓜多尔土金守。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.5,
        "tier_label": "Colombia -0.5 · Ghana +0.5",
        "implied_tier": 0.25,
        "tier_gap": 0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Colombia（约 62%）",
        "analysis": "M87 · 哥伦比亚 vs 加纳 · 哥-0.5@0.93 · 大小 2.5 大0.90小0.96。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 11.6
            },
            {
              "score": "1-1",
              "prob": 11.4
            },
            {
              "score": "2-0",
              "prob": 10
            }
          ],
          "one_goal_win_pct": 24.5,
          "two_plus_win_pct": 30.2,
          "full_cover_pct": 49,
          "dog_hold_pct": 51,
          "fav_win_pct": 54.7,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.2,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0.094,
          "dog_cover_ev": -0.094,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 2.7,
          "fair_totals_line": 2,
          "over_2_5_pct": 50.5,
          "over_3_pct": 28.4,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 54.7%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 54.7,
          "dog_hold_pct_raw": 45.3
        },
        "spread_odds": {
          "fav": 0.93,
          "dog": 0.96,
          "note": "Colombia 0.93 · Ghana 0.96"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.7,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 50.2,
          "under_pct": 49.8,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 50.2%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "Colombia -0.5@0.95 · Ghana +0.5@0.91",
          "spread_now_cn": "Colombia -0.5@0.93 · Ghana +0.5@0.96",
          "totals_now_cn": "大小 2.5 · 大 0.9 / 小 0.96",
          "tag": "flat",
          "tag_cn": "盘路平稳",
          "tag_color": "#7BB8D4",
          "detail_cn": "档位持平 · 热门 0.95→0.93（降水） · 受让 0.91→0.96（抬水） 现盘去水隐含：Colombia 50.4% · Ghana 49.6%（超收 2.8%） 模型穿盘（现档 Colombia -0.5 · Ghana +0.5）：Colombia 49% · Ghana 51% 模型−市场：Colombia -1.4pp · Ghana +1.4pp 期望 ROI@现水：Colombia -5.4% · Ghana +51% 档位与水位变化幅度有限，暂无明确单向资金信号。",
          "actuarial": {
            "actuarial_type": "flat",
            "actuarial_cn": "盘路平稳",
            "actuarial_color": "#7BB8D4",
            "actuarial_desc": "档位与水位变化幅度有限，暂无明确单向资金信号。",
            "summary_cn": "档位持平 · 热门 0.95→0.93（降水） · 受让 0.91→0.96（抬水） 现盘去水隐含：Colombia 50.4% · Ghana 49.6%（超收 2.8%） 模型穿盘（现档 Colombia -0.5 · Ghana +0.5）：Colombia 49% · Ghana 51% 模型−市场：Colombia -1.4pp · Ghana +1.4pp 期望 ROI@现水：Colombia -5.4% · Ghana +51% 档位与水位变化幅度有限，暂无明确单向资金信号。",
            "line_delta": 0,
            "line_delta_cn": "档位持平",
            "fav_odds_delta": -0.02,
            "dog_odds_delta": 0.05,
            "water_move_cn": "热门 0.95→0.93（降水） · 受让 0.91→0.96（抬水）",
            "open_tier": 0.5,
            "open_tier_label": "Colombia -0.5 · Ghana +0.5",
            "now_tier": 0.5,
            "implied_tier": 0.25,
            "open_tier_gap": 0.25,
            "now_tier_gap": 0.25,
            "open_devig": {
              "fav_pct": 49.5,
              "dog_pct": 50.5,
              "overround_pct": 3.6
            },
            "now_devig": {
              "fav_pct": 50.4,
              "dog_pct": 49.6,
              "overround_pct": 2.8
            },
            "model_cover_open_pct": 49,
            "model_cover_now_pct": 49,
            "model_dog_cover_now_pct": 51,
            "market_fav_cover_now_pct": 50.4,
            "market_dog_cover_now_pct": 49.6,
            "model_vs_market_fav_pp": -1.4,
            "model_vs_market_dog_pp": 1.4,
            "fav_roi_pct": -5.4,
            "dog_roi_pct": 51,
            "fav_name": "Colombia",
            "dog_name": "Ghana"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "flat",
          "actuarial_cn": "盘路平稳",
          "actuarial_color": "#7BB8D4",
          "actuarial_desc": "档位与水位变化幅度有限，暂无明确单向资金信号。",
          "summary_cn": "档位持平 · 热门 0.95→0.93（降水） · 受让 0.91→0.96（抬水） 现盘去水隐含：Colombia 50.4% · Ghana 49.6%（超收 2.8%） 模型穿盘（现档 Colombia -0.5 · Ghana +0.5）：Colombia 49% · Ghana 51% 模型−市场：Colombia -1.4pp · Ghana +1.4pp 期望 ROI@现水：Colombia -5.4% · Ghana +51% 档位与水位变化幅度有限，暂无明确单向资金信号。",
          "line_delta": 0,
          "line_delta_cn": "档位持平",
          "fav_odds_delta": -0.02,
          "dog_odds_delta": 0.05,
          "water_move_cn": "热门 0.95→0.93（降水） · 受让 0.91→0.96（抬水）",
          "open_tier": 0.5,
          "open_tier_label": "Colombia -0.5 · Ghana +0.5",
          "now_tier": 0.5,
          "implied_tier": 0.25,
          "open_tier_gap": 0.25,
          "now_tier_gap": 0.25,
          "open_devig": {
            "fav_pct": 49.5,
            "dog_pct": 50.5,
            "overround_pct": 3.6
          },
          "now_devig": {
            "fav_pct": 50.4,
            "dog_pct": 49.6,
            "overround_pct": 2.8
          },
          "model_cover_open_pct": 49,
          "model_cover_now_pct": 49,
          "model_dog_cover_now_pct": 51,
          "market_fav_cover_now_pct": 50.4,
          "market_dog_cover_now_pct": 49.6,
          "model_vs_market_fav_pp": -1.4,
          "model_vs_market_dog_pp": 1.4,
          "fav_roi_pct": -5.4,
          "dog_roi_pct": 51,
          "fav_name": "Colombia",
          "dog_name": "Ghana"
        },
        "totals_pick_layers": {
          "model_side": "neutral",
          "situation_side": "neutral",
          "market_line_side": "under",
          "market_odds_side": "over",
          "market_side": "neutral",
          "recommended_side": "neutral",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "neutral",
            "line": "under",
            "odds": "over",
            "situation": "neutral"
          },
          "vote_summary_cn": "观望(model) · 小球(line) · 大球(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘（哥伦比亚穿盘）",
          "tendency_reason_cn": "K1 vs 加纳(3rd) · -0.5 低水 · James/Kudus 对位 · ★哥-0.5 · 大2.5副项。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "fav",
            "label_cn": "哥伦比亚 -0.5 @0.93",
            "reason_cn": "浅盘低水 · Kudus 反击有变数 · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2.5 @0.90",
            "reason_cn": "副项 · R9不打副项小。"
          },
          "picked_at": "2026-07-04-prematch",
          "pick_meta": {
            "model_side": "neutral",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "over",
            "market_side": "neutral",
            "pick_side": "over",
            "recommended_side": "neutral",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "neutral",
              "line": "under",
              "odds": "over",
              "situation": "neutral"
            },
            "vote_summary_cn": "观望(model) · 小球(line) · 大球(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 50.2,
            "line_gap": 0.5
          },
          "ko_totals_policy": {
            "enabled": true,
            "rule_id": "R9",
            "rule_cn": "★=大小无模型/盘冲突 · 副项仅大球 · 大信心仅绑★=大小",
            "applied_at": "buildDepthCalibration"
          }
        },
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 49,
          "draw": 31,
          "away_win": 20
        },
        "display_summary": {
          "fav_name": "Colombia",
          "expected_total_goals": 2.36,
          "poisson_fav_win_pct": 50,
          "small_lead_pct": 25.1,
          "small_example_score": "1-0",
          "small_example_pct": 13.7,
          "big_cover_pct": 25,
          "big_example_score": "2-0",
          "big_example_pct": 10,
          "win_shape": {
            "fav_name": "Colombia",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 29.9%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 13.7,
                "pct": 27.3
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.4,
                "pct": 22.8
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 15,
                "pct": 29.9
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 10,
                "pct": 20
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 50.1
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 29.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20
              }
            ],
            "fav_win_pct": 49
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 37.8 分",
            "first_goal_wait": 37.8,
            "fast_pct": 54.8,
            "moderate_pct": 14.8,
            "slow_pct": 30.4,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 54.8
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 30.4
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Colombia：Radamel Falcao 缺阵 · Ghana：Inaki Williams 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M87 哥伦比亚 vs 加纳 · 气候影响低"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：热门难破密集（平 +7%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.72,
            "baseline_away": 0.98,
            "adjusted_home": 1.47,
            "adjusted_away": 0.91,
            "note": "基准 xG 1.72–0.98 → 调整后 1.47–0.91"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0.25,
            "implied_tier_label": "Colombia -0.25 · Ghana +0.25",
            "market_tier_label": "Colombia -0.5 · Ghana +0.5",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）"
          },
          "win_outlook": {
            "fav_name": "Colombia",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 50.1
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 29.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20
              }
            ],
            "margin_line_cn": "Colombia · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 46.4,
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
            "model_total_xg": 2.38,
            "totals_line_gap": 0.25,
            "totals_high_pct": 42.3,
            "totals_low_pct": 57.7,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 23.7,
            "win_margin2_low_total_pct": 10,
            "win_margin2_high_total_pct": 14.9,
            "readout_cn": "取胜约 49%；若取胜，以「险胜收工」为主（50.1%）。 对着赛前净胜参考，净胜≥1（全达标）约 46.4%；对着总进球参考 2.5，模型超线概率约 42.3%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 13.6
            },
            {
              "score": "1-1",
              "pct": 12.4
            },
            {
              "score": "2-0",
              "pct": 10
            }
          ],
          "totals_view": {
            "expected_total": 2.4,
            "fair_line": 2.25,
            "market_line": 2.5,
            "line_gap": 0.25,
            "over_pct": 42.3,
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
              "over_pct": 42.3,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.4 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Colombia -0.5 穿盘：有达标可能",
            "sub_cn": "Colombia 胜 50.2% · 胜后穿 100% · Ghana +0.5 守 53.5% 进球氛围：几乎五五开 平局权重约 31%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Colombia",
              "dog_name": "Ghana",
              "fav_handicap_cn": "Colombia -0.5",
              "dog_handicap_cn": "Ghana +0.5",
              "market_expect_cn": "Colombia -0.5 · 净胜≥1",
              "meet_pct": 46.5,
              "dog_hold_pct": 53.5,
              "fav_win_pct": 50.2,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 50.2,
              "meet_pct_label": "Colombia -0.5 穿盘概率（校准）",
              "dog_hold_label": "Ghana +0.5 守住概率（校准）",
              "two_stage_cn": "Colombia 取胜约 50.2% · 赢球后穿盘约 100% · Ghana +0.5 守住约 53.5%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Colombia -0.5 穿盘：有达标可能",
              "pill_cn": "Colombia 胜 50.2% · 胜后穿 100% · Ghana +0.5 守 53.5%",
              "detail_cn": "Colombia 取胜约 50.2% · 赢球后穿盘约 100% · Ghana +0.5 守住约 53.5%（泊松 raw 50.2% → 校准 46.5%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 46.5,
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
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 42.3,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "draw_risk": {
              "level": "high",
              "color": "#C8A96E",
              "note": "平局权重约 31%，小组赛易出守平——勿只盯胜负一方。"
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
                  "fav_name": "Colombia",
                  "dog_name": "Ghana",
                  "fav_handicap_cn": "Colombia -0.5",
                  "dog_handicap_cn": "Ghana +0.5",
                  "market_expect_cn": "Colombia -0.5 · 净胜≥1",
                  "meet_pct": 46.5,
                  "dog_hold_pct": 53.5,
                  "fav_win_pct": 50.2,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 50.2,
                  "meet_pct_label": "Colombia -0.5 穿盘概率（校准）",
                  "dog_hold_label": "Ghana +0.5 守住概率（校准）",
                  "two_stage_cn": "Colombia 取胜约 50.2% · 赢球后穿盘约 100% · Ghana +0.5 守住约 53.5%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Colombia -0.5 穿盘：有达标可能",
                  "pill_cn": "Colombia 胜 50.2% · 胜后穿 100% · Ghana +0.5 守 53.5%",
                  "detail_cn": "Colombia 取胜约 50.2% · 赢球后穿盘约 100% · Ghana +0.5 守住约 53.5%（泊松 raw 50.2% → 校准 46.5%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 46.5,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.25,
                  "show_cover": true
                },
                "text": "Colombia 胜 50.2% · 胜后穿 100% · Ghana +0.5 守 53.5%",
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
                  "over_pct": 42.3,
                  "line_gap": 0.25,
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
              "first_goal_pct": 61.8,
              "start_score": "1-0",
              "fav_name": "Colombia",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 92.1,
              "small_lead_pct": 31,
              "big_lead_pct": 43.6,
              "fav_win_pct": 74.6,
              "fav_draw_pct": 17.5,
              "fav_lose_pct": 7.9,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Colombia 保持胜果（净胜≥1）",
                  "pct": 74.6
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 17.5
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 7.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 38.5 分",
                "first_goal_wait": 38.5,
                "fast_pct": 47.2,
                "moderate_pct": 14.4,
                "slow_pct": 38.3,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 47.2
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.4
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 38.3
                  }
                ]
              },
              "big_delta": 18.6,
              "small_delta": 5.9,
              "narrative": "Colombia 先破门（已 1-0） → 「巩固防守」；Ghana 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Colombia",
                "state_label": "Colombia 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 50.1
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 29.9
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 20
                  }
                ],
                "margin_line_cn": "Colombia · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 74.6,
                "margin_half_pct": 0,
                "margin_fail_pct": 31,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.92,
                "totals_line_gap": 0.25,
                "totals_high_pct": 57.1,
                "totals_low_pct": 42.9,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 31.3,
                "win_margin2_low_total_pct": 16.6,
                "win_margin2_high_total_pct": 26.9,
                "readout_cn": "Colombia 已 1-0 领先：仍取胜约 74.6%。 对着总进球参考 2.5，模型超线概率约 57.1%。 常见 2-0 收尾（相对总进球参考 2.5仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Ghana",
              "first_goal_pct": 38.2,
              "start_score": "0-1",
              "fav_name": "Colombia",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 50.2,
              "small_lead_pct": 15.1,
              "big_lead_pct": 8.2,
              "fav_win_pct": 23.3,
              "fav_draw_pct": 26.9,
              "fav_lose_pct": 49.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Colombia 追平（平局）",
                  "pct": 26.9
                },
                {
                  "key": "win1",
                  "label": "Colombia 净胜1球翻盘（如 2-1）",
                  "pct": 15.1
                },
                {
                  "key": "win2",
                  "label": "Colombia 净胜≥2球翻盘（如 3-1）",
                  "pct": 8.2
                },
                {
                  "key": "upset_hold",
                  "label": "Ghana 保持胜果至终场",
                  "pct": 49.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 37.2 分",
                "first_goal_wait": 37.2,
                "fast_pct": 48.4,
                "moderate_pct": 14.5,
                "slow_pct": 37.1,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 48.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.5
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 37.1
                  }
                ]
              },
              "big_delta": -16.8,
              "small_delta": -10,
              "narrative": "Ghana 先破门（已 0-1） → 「巩固防守」；Colombia 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.4 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 42.3,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 26,
              "readout_cn": "Colombia · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
            "xg_home_ht": 0.65,
            "xg_away_ht": 0.4,
            "xg_home_2h": 0.82,
            "xg_away_2h": 0.51,
            "home_win": 35.9,
            "draw": 44.7,
            "away_win": 19.4,
            "top_score": "0-0",
            "top_score_prob": 35,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 35
              },
              {
                "score": "1-0",
                "prob": 22.7
              },
              {
                "score": "0-1",
                "prob": 14
              }
            ],
            "ht_goals_expected": 1.05,
            "ht_over_0_5_pct": 65,
            "ht_over_1_5_pct": 28.3,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.65–0.4（约占全场 44%） · 最可能 0-0（35%） · 胜平负 35.9/44.7/19.4 · 半场≥1球约 65%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Colombia · 常规对抗。 · 与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.7,
          "xg_gap": 0.74,
          "xg_home": 1.72,
          "xg_away": 0.98,
          "xg_baseline_home": 1.72,
          "xg_baseline_away": 0.98,
          "xg_note": "结构推演用基准 xG 1.72–0.98（进球氛围用调整后 1.47–0.91）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Colombia",
          "dog_name": "Ghana",
          "fav_xg": 1.72,
          "dog_xg": 0.98,
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
          "prob_over_line": 50.2,
          "prob_meet_guess": 50.2,
          "guess_n": 3,
          "prob_4_plus": 27.9,
          "prob_2_or_less": 49.8,
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
          "summary_cn": "【路径·基准 xG】合计 2.7 · Colombia 1.72 / Ghana 0.98 → 主路径「弱队开花」约 41%。 超 2.5 约 50.2% · ≤2球 49.8%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.5,
        "tier_label": "Colombia -0.5 · Ghana +0.5",
        "totals_line": 2.5,
        "over_pct": 42.3,
        "fair_line": 2.25,
        "line_gap": 0.25,
        "full_cover_pct": 46.5,
        "fav_win_pct": 50.2,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Colombia -0.5 · 净胜≥1",
        "line_move_tag": "flat",
        "line_move_cn": "盘路平稳",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（哥伦比亚穿盘）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "哥伦比亚 -0.5 @0.93",
        "agent_totals_cn": "大球 2.5 @0.90",
        "agent_totals_skipped": false,
        "agent_totals_skip_cn": null,
        "ko_totals_policy": "R9",
        "totals_level": "neutral",
        "totals_show_lean": false,
        "totals_lean_side": "neutral"
      }
    }
  ],
  "nextMatch": {
    "group": "KO",
    "matchday": null,
    "date": "2026-07-03",
    "time": "13:00",
    "time_local": "13:00 CT",
    "timezone": "CDT (UTC-5)",
    "time_beijing": "02:00",
    "date_beijing": "7月4日",
    "time_beijing_full": "北京时间 7月4日 02:00",
    "venue": "AT&T Stadium",
    "city": "Dallas, USA",
    "home": {
      "name": "Australia",
      "iso": "au",
      "fifaRank": 24,
      "rating": 76
    },
    "away": {
      "name": "Egypt",
      "iso": "eg",
      "fifaRank": 36,
      "rating": 75
    },
    "teaser": "32强 M88 · 澳大利亚 vs 埃及",
    "home_win": 38,
    "draw": 36,
    "away_win": 26,
    "predicted_score": "1-1",
    "key_player_home": "Mathew Ryan",
    "key_player_away": "Mohamed Salah"
  },
  "upcomingMatches": [
    {
      "group": "KO",
      "time_beijing_full": "北京时间 7月4日 06:00",
      "venue": "Hard Rock Stadium",
      "city": "Miami, USA",
      "home": {
        "name": "Argentina",
        "iso": "ar"
      },
      "away": {
        "name": "Cape Verde",
        "iso": "cv"
      },
      "teaser": "32强 M86"
    },
    {
      "group": "KO",
      "time_beijing_full": "北京时间 7月4日 09:30",
      "venue": "Arrowhead Stadium",
      "city": "Kansas City, USA",
      "home": {
        "name": "Colombia",
        "iso": "co"
      },
      "away": {
        "name": "Ghana",
        "iso": "gh"
      },
      "teaser": "32强 M87"
    }
  ]
};
