// 今日赛事 — Day 38 · 决赛 enriched
// Last updated: 2026-07-19T14:34:41+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-07-19T14:34:41+08:00",
  "syncSource": "FIFA 赛程 · Day 38 · 决赛 enriched · 裁判/伤病/球星/赛场气候",
  "phase": "knockout",
  "phase_cn": "淘汰赛 · 决赛",
  "breakingNews": [
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
      "tag": "PREVIEW",
      "text": "🏆 决赛：西班牙 vs 阿根廷 · 北京时间 7月20日 03:00 · MetLife",
      "time": "7月20日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 半决赛：西班牙2-0法国 · 阿根廷2-1英格兰",
      "time": "路径"
    },
    {
      "tag": "OFFICIAL",
      "text": "🥉 季军赛：英格兰6-4法国 · 英格兰获季军",
      "time": "7月18日"
    }
  ],
  "todayMatches": [
    {
      "id": "m104",
      "fifa_match_number": 104,
      "fifa_match_id": "400021543",
      "group": "KO",
      "round": "FINAL",
      "round_cn": "决赛",
      "matchday": null,
      "knockout_slot": "M104 · 决赛 · M101胜(西班牙) vs M102胜(阿根廷)",
      "knockout_next": "冠军 / 亚军",
      "date": "2026-07-19",
      "time": "15:00",
      "time_local": "15:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "03:00",
      "date_beijing": "7月20日",
      "time_beijing_full": "北京时间 7月20日 03:00",
      "venue": "MetLife Stadium",
      "city": "East Rutherford, USA",
      "note": "决赛 M104 · 西班牙 vs 阿根廷 · 纽约/新泽西 MetLife",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-3-3",
          "home": "Unai Simón; Carvajal, Cubarsí, Le Normand, Cucurella; Rodri, Fabian Ruiz, Pedri; Yamal, Oyarzabal, Nico Williams",
          "away": "E. Martínez; Molina, Romero, Lisandro, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Álvarez, Lautaro",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Spain",
        "iso": "es",
        "flag": "",
        "fifa_rank": 1,
        "rating": 92,
        "form": [
          "W",
          "W",
          "W",
          "W",
          "W"
        ],
        "coach": "Luis de la Fuente",
        "stars": [
          {
            "name": "Lamine Yamal",
            "pos": "RW",
            "club": "Barcelona",
            "rating": 9.3,
            "desc": "一对一 · 倒三角 · 破局核心"
          },
          {
            "name": "Rodri",
            "pos": "CDM",
            "club": "Man City",
            "rating": 9.1,
            "desc": "后腰核心 · 出球+防守"
          },
          {
            "name": "Pedri",
            "pos": "CM",
            "club": "Barcelona",
            "rating": 8.8,
            "desc": "中场组织 · 节奏控制"
          }
        ],
        "star": {
          "name": "Lamine Yamal",
          "pos": "RW",
          "club": "Barcelona",
          "rating": 9.3,
          "desc": "右路爆点 · 半决赛点杀法国"
        },
        "injuries": [
          {
            "player": "Lamine Yamal",
            "status": "FIT",
            "note": "半决赛造点 · 状态火热",
            "confirmed": true
          },
          {
            "player": "Rodri",
            "status": "FIT",
            "note": "后腰核心 · 半决赛完赛",
            "confirmed": true
          },
          {
            "player": "Pedri",
            "status": "FIT",
            "note": "中场组织",
            "confirmed": true
          },
          {
            "player": "Nico Williams",
            "status": "FIT",
            "note": "左路速度",
            "confirmed": true
          }
        ],
        "rumors": [
          "de la Fuente：「这是一代人的决赛——我们准备好了」",
          "预计 4-3-3：Yamal 右路 · Nico 左路 · Oyarzabal 支点",
          "2-0 淘汰法国 · 37 场正式比赛不败纪录",
          "须限制 Messi 肋部拿球 · Rodri 出球是关键"
        ]
      },
      "away": {
        "name": "Argentina",
        "iso": "ar",
        "flag": "",
        "fifa_rank": 2,
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
            "rating": 9.4,
            "desc": "组织 · 任意球 · 决赛经验"
          },
          {
            "name": "Lautaro Martínez",
            "pos": "ST",
            "club": "Inter",
            "rating": 8.9,
            "desc": "半决赛制胜球 · 终结"
          },
          {
            "name": "Enzo Fernández",
            "pos": "CM",
            "club": "Chelsea",
            "rating": 8.6,
            "desc": "中场串联 · 关键进球"
          }
        ],
        "star": {
          "name": "Lionel Messi",
          "pos": "RW",
          "club": "Inter Miami",
          "rating": 9.4,
          "desc": "卫冕核心 · 半决赛助攻双响"
        },
        "injuries": [
          {
            "player": "Lionel Messi",
            "status": "FIT",
            "note": "半决赛两助攻 · 决赛经验",
            "confirmed": true
          },
          {
            "player": "Lautaro Martínez",
            "status": "FIT",
            "note": "半决赛绝杀 · 终结",
            "confirmed": true
          },
          {
            "player": "Enzo Fernández",
            "status": "FIT",
            "note": "中场串联",
            "confirmed": true
          },
          {
            "player": "Julián Álvarez",
            "status": "FIT",
            "note": "8强远射破门",
            "confirmed": true
          }
        ],
        "rumors": [
          "Scaloni：「卫冕之路走到最后一战——享受决赛」",
          "预计 4-3-3：Messi 伪边 · Alvarez/Lautaro 轮转支点",
          "2-1 淘汰英格兰 · 多场淘汰赛逆转经验",
          "须防 Yamal 右路一对一 · 定位球是第二破局点"
        ]
      },
      "h2h": {
        "home_wins": 6,
        "draws": 2,
        "away_wins": 6,
        "recent": [
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "6-1",
            "winner": "Spain"
          },
          {
            "year": 1966,
            "comp": "世界杯小组赛",
            "score": "1-2",
            "winner": "Argentina"
          }
        ],
        "note": "1966 世界杯小组赛阿根廷胜 · 2018 友谊赛西班牙大胜"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · 2026-07-16",
        "name": "Slavko Vinčić",
        "nation": "Slovenia",
        "iso": "si",
        "wc_experience": "2022 · 2026 世界杯 · 2024 欧冠决赛主裁 · 决赛 M104",
        "avg_yellow": 4.1,
        "avg_red": 0.1,
        "avg_penalty": 0.25,
        "home_win_rate": 48,
        "bias_index": 50,
        "bias_note": "斯洛文尼亚主裁执法 MetLife 决赛。西班牙传控 vs 阿根廷身体对抗；欧冠决赛级尺度，关键判罚果断。",
        "tendencies": [
          "FIFA 官方主裁 · Slavko Vinčić（斯洛文尼亚）",
          "助理：Tomaž Klančnik、Andraž Kovačič（斯洛文尼亚）",
          "第四官员 Adham Makhadmeh（约旦）",
          "决赛 · Yamal vs Messi"
        ],
        "officials": {
          "referee": "Slavko Vinčić (SVN)",
          "assistants": "Tomaž Klančnik / Andraž Kovačič (SVN)",
          "fourth": "Adham Makhadmeh (JOR)"
        },
        "fifa_match_id": "400021543",
        "note": "FIFA M104 · 西班牙 vs 阿根廷 · MetLife Stadium",
        "updated": "2026-07-19T14:34:41+08:00"
      },
      "prediction": {
        "home_win": 37,
        "draw": 29,
        "away_win": 34,
        "score": "1-1",
        "confidence": 68,
        "xg_home": 1.48,
        "xg_away": 1.42,
        "key_factor": "决赛 M104 · 西班牙 vs 阿根廷 · Yamal vs Messi · 泊松 1-1/1-0",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 11.6
          },
          {
            "score": "2-1",
            "prob": 8.6
          },
          {
            "score": "1-2",
            "prob": 8.2
          },
          {
            "score": "1-0",
            "prob": 8.1
          },
          {
            "score": "0-1",
            "prob": 7.8
          },
          {
            "score": "2-2",
            "prob": 6.1
          },
          {
            "score": "2-0",
            "prob": 6
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M104 · 决赛 · 西班牙 vs 阿根廷 · 冠军争夺"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "新泽西午后·多云间晴 · 29°C · 湿度 58% · 降雨概率 18% · 西南风 2级；M104 西班牙 vs 阿根廷 · 29°C 午后多云 · 开放球场气候影响低 · 利于双方传控推进（29°C 午后多云 · 西南风 2级）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "决赛 M104 · 西班牙 vs 阿根廷 · Yamal vs Messi · 泊松 1-1/1-0"
          }
        ],
        "base_home_win": 37,
        "base_draw": 29,
        "base_away_win": 34,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 4,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.06,
          "notes": [
            "xG 极接近"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.48,
        "xg_poisson_away": 1.42,
        "xg_tier_calibrated": false,
        "score_prob": 11.6,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 11.6
          },
          {
            "score": "2-1",
            "prob": 8.6
          },
          {
            "score": "1-2",
            "prob": 8.2
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "纽约/新泽西",
        "country": "美国",
        "venue": "MetLife Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 29,
        "humidity": 58,
        "altitude_m": 3,
        "rain_chance": 18,
        "wind": "西南风 2级",
        "condition_cn": "新泽西午后·多云间晴",
        "impact_level": "LOW",
        "impact_summary": "M104 西班牙 vs 阿根廷 · 29°C 午后多云 · 开放球场气候影响低 · 利于双方传控推进",
        "home_adapt": 86,
        "away_adapt": 86,
        "weather_factors": [
          {
            "label": "29°C 午后多云",
            "impact": "低",
            "detail": "北京时间 7月20日 03:00 · 当地 7/19 15:00 ET"
          },
          {
            "label": "西南风 2级",
            "impact": "低",
            "detail": "对远射/定位球影响有限"
          }
        ],
        "forecast_updated": "2026-07-19 22:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "己未日",
          "day_summary": "己未日——土气当令",
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
        "home_score": 51,
        "away_score": 49,
        "mystic_verdict": "西班牙木火盛，阿根廷金土守。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.25,
        "tier_label": "Spain -0.25 · Argentina +0.25",
        "implied_tier": 0,
        "tier_gap": 0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Spain（约 52%）",
        "analysis": "M104 · 西班牙 vs 阿根廷 · 西-0/0.5@0.93/阿+0/0.5@0.96 · 大小 2/2.5 大1.05小0.83。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.6
            },
            {
              "score": "2-1",
              "prob": 8.6
            },
            {
              "score": "1-2",
              "prob": 8.2
            }
          ],
          "one_goal_win_pct": 20.3,
          "two_plus_win_pct": 18.6,
          "full_cover_pct": 47.5,
          "dog_hold_pct": 52.5,
          "fav_win_pct": 38.9,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.2,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.222,
          "dog_cover_ev": 0.222,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.9,
          "fair_totals_line": 2,
          "over_2_5_pct": 55.3,
          "over_3_pct": 32.9,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 38.9%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 38.9,
          "dog_hold_pct_raw": 61.1
        },
        "spread_odds": {
          "fav": 0.93,
          "dog": 0.96,
          "note": "Spain 0.93 · Argentina 0.96"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "market_goals_int": 3,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.9,
          "fair_line": 2,
          "line_gap": 0.25,
          "over_pct": 66.7,
          "under_pct": 33.3,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看大比分（超 2.25 约 66.7%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "Spain -0/0.5@0.85 · Argentina +0/0.5@0.97",
          "spread_now_cn": "Spain -0/0.5@0.93 · Argentina +0/0.5@0.96",
          "totals_now_cn": "大小 2/2.5 · 大 1.05 / 小 0.83",
          "tag": "flat",
          "tag_cn": "盘路平稳",
          "tag_color": "#7BB8D4",
          "detail_cn": "档位持平 · 热门 0.85→0.93（抬水） · 受让 0.97→0.96（降水） 现盘去水隐含：Spain 50.4% · Argentina 49.6%（超收 2.8%） 模型穿盘（现档 Spain -0.25 · Argentina +0.25）：Spain 47.5% · Argentina 52.5% 模型−市场：Spain -2.9pp · Argentina +2.9pp 期望 ROI@现水：Spain -8.3% · Argentina +55.4% 档位与水位变化幅度有限，暂无明确单向资金信号。",
          "actuarial": {
            "actuarial_type": "flat",
            "actuarial_cn": "盘路平稳",
            "actuarial_color": "#7BB8D4",
            "actuarial_desc": "档位与水位变化幅度有限，暂无明确单向资金信号。",
            "summary_cn": "档位持平 · 热门 0.85→0.93（抬水） · 受让 0.97→0.96（降水） 现盘去水隐含：Spain 50.4% · Argentina 49.6%（超收 2.8%） 模型穿盘（现档 Spain -0.25 · Argentina +0.25）：Spain 47.5% · Argentina 52.5% 模型−市场：Spain -2.9pp · Argentina +2.9pp 期望 ROI@现水：Spain -8.3% · Argentina +55.4% 档位与水位变化幅度有限，暂无明确单向资金信号。",
            "line_delta": 0,
            "line_delta_cn": "档位持平",
            "fav_odds_delta": 0.08,
            "dog_odds_delta": -0.01,
            "water_move_cn": "热门 0.85→0.93（抬水） · 受让 0.97→0.96（降水）",
            "open_tier": 0.25,
            "open_tier_label": "Spain -0.25 · Argentina +0.25",
            "now_tier": 0.25,
            "implied_tier": 0,
            "open_tier_gap": 0.25,
            "now_tier_gap": 0.25,
            "open_devig": {
              "fav_pct": 51.6,
              "dog_pct": 48.4,
              "overround_pct": 4.8
            },
            "now_devig": {
              "fav_pct": 50.4,
              "dog_pct": 49.6,
              "overround_pct": 2.8
            },
            "model_cover_open_pct": 47.5,
            "model_cover_now_pct": 47.5,
            "model_dog_cover_now_pct": 52.5,
            "market_fav_cover_now_pct": 50.4,
            "market_dog_cover_now_pct": 49.6,
            "model_vs_market_fav_pp": -2.9,
            "model_vs_market_dog_pp": 2.9,
            "fav_roi_pct": -8.3,
            "dog_roi_pct": 55.4,
            "fav_name": "Spain",
            "dog_name": "Argentina"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "flat",
          "actuarial_cn": "盘路平稳",
          "actuarial_color": "#7BB8D4",
          "actuarial_desc": "档位与水位变化幅度有限，暂无明确单向资金信号。",
          "summary_cn": "档位持平 · 热门 0.85→0.93（抬水） · 受让 0.97→0.96（降水） 现盘去水隐含：Spain 50.4% · Argentina 49.6%（超收 2.8%） 模型穿盘（现档 Spain -0.25 · Argentina +0.25）：Spain 47.5% · Argentina 52.5% 模型−市场：Spain -2.9pp · Argentina +2.9pp 期望 ROI@现水：Spain -8.3% · Argentina +55.4% 档位与水位变化幅度有限，暂无明确单向资金信号。",
          "line_delta": 0,
          "line_delta_cn": "档位持平",
          "fav_odds_delta": 0.08,
          "dog_odds_delta": -0.01,
          "water_move_cn": "热门 0.85→0.93（抬水） · 受让 0.97→0.96（降水）",
          "open_tier": 0.25,
          "open_tier_label": "Spain -0.25 · Argentina +0.25",
          "now_tier": 0.25,
          "implied_tier": 0,
          "open_tier_gap": 0.25,
          "now_tier_gap": 0.25,
          "open_devig": {
            "fav_pct": 51.6,
            "dog_pct": 48.4,
            "overround_pct": 4.8
          },
          "now_devig": {
            "fav_pct": 50.4,
            "dog_pct": 49.6,
            "overround_pct": 2.8
          },
          "model_cover_open_pct": 47.5,
          "model_cover_now_pct": 47.5,
          "model_dog_cover_now_pct": 52.5,
          "market_fav_cover_now_pct": 50.4,
          "market_dog_cover_now_pct": 49.6,
          "model_vs_market_fav_pp": -2.9,
          "model_vs_market_dog_pp": 2.9,
          "fav_roi_pct": -8.3,
          "dog_roi_pct": 55.4,
          "fav_name": "Spain",
          "dog_name": "Argentina"
        },
        "totals_pick_layers": {
          "model_side": "over",
          "situation_side": "neutral",
          "market_line_side": "under",
          "market_odds_side": "under",
          "market_side": "under",
          "recommended_side": "under",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "over",
            "line": "under",
            "odds": "under",
            "situation": "neutral"
          },
          "vote_summary_cn": "大球(model) · 小球(line) · 小球(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘（阿根廷受让）",
          "tendency_reason_cn": "西班牙 -0/0.5 抬到 0.93、阿根廷 +0/0.5 近均水 0.96；分盘结算：平局西输半/阿赢半 · ★阿+0/0.5 · 大2/2.5副项(R9不打小)。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "dog",
            "label_cn": "阿根廷 +0/0.5 @0.96",
            "reason_cn": "分盘 -0/0.5：平局西班牙输半、阿根廷赢半；西胜→西全赢/阿全输，阿胜→阿全赢/西全输。西抬水·阿近均水 · Messi 决赛经验 · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2/2.5 @1.05",
            "reason_cn": "升线后 over 1.05 高水但 R9 副项不打小 · Yamal/Messi 对攻终局开放 · 3球全赢/2球赢半 · 副项。",
            "manual_override": true,
            "recommended_side": "under"
          },
          "picked_at": "2026-07-19-prematch",
          "pick_meta": {
            "model_side": "over",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "under",
            "market_side": "under",
            "pick_side": "over",
            "recommended_side": "under",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "over",
              "line": "under",
              "odds": "under",
              "situation": "neutral"
            },
            "vote_summary_cn": "大球(model) · 小球(line) · 小球(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 66.7,
            "line_gap": 0.25
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
          "home_win": 37,
          "draw": 29,
          "away_win": 34
        },
        "display_summary": {
          "fav_name": "Spain",
          "expected_total_goals": 2.86,
          "poisson_fav_win_pct": 38.8,
          "small_lead_pct": 20.4,
          "small_example_score": "1-0",
          "small_example_pct": 8.2,
          "big_cover_pct": 18.4,
          "big_example_score": "2-0",
          "big_example_pct": 6.1,
          "win_shape": {
            "fav_name": "Spain",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 31.6%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 8.2,
                "pct": 21.1
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.2,
                "pct": 31.6
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 9.1,
                "pct": 23.3
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 9.3,
                "pct": 24
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 52.7
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 23.3
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24
              }
            ],
            "fav_win_pct": 37
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 31 分",
            "first_goal_wait": 31,
            "fast_pct": 62,
            "moderate_pct": 14.6,
            "slow_pct": 23.5,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 62
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.6
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 23.5
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Spain 暂无重要伤停 · Argentina 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M104 西班牙 vs 阿根廷 · 29°C 午后多云 · 开放球场气候影响低 · 利于双方传控推进"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 极接近（平 +4%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.48,
            "baseline_away": 1.42,
            "adjusted_home": 1.48,
            "adjusted_away": 1.42,
            "note": "基准 xG 1.48–1.42（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0.25,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Spain -0.25 · Argentina +0.25",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）"
          },
          "win_outlook": {
            "fav_name": "Spain",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 52.7
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 23.3
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24
              }
            ],
            "margin_line_cn": "Spain · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 47.4,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.25,
            "totals_line_cn": "总进球参考 2.25",
            "fair_totals_line": 2,
            "model_total_xg": 2.9,
            "totals_line_gap": 0.25,
            "totals_high_pct": 66.7,
            "totals_low_pct": 33.3,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 14.3,
            "win_margin2_low_total_pct": 6.1,
            "win_margin2_high_total_pct": 18.4,
            "readout_cn": "取胜约 37%；若取胜，以「险胜收工」为主（52.7%）。 对着赛前净胜参考，净胜≥1（全达标）约 47.4%；对着总进球参考 2.25，模型超线概率约 66.7%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 11.6
            },
            {
              "score": "2-1",
              "pct": 8.6
            },
            {
              "score": "1-2",
              "pct": 8.2
            }
          ],
          "totals_view": {
            "expected_total": 2.9,
            "fair_line": 2,
            "market_line": 2.25,
            "line_gap": 0.25,
            "over_pct": 66.7,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_high",
              "label_cn": "略倾向精彩",
              "color": "#E8A54B",
              "meter_label_cn": "略倾向精彩",
              "meter_pos": 67,
              "lean_side": "exciting",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "略偏精彩（弱）",
              "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
              "headline_cn": "进球氛围：略偏精彩",
              "show_lean": false,
              "over_pct": 66.7,
              "line_gap": 0.25,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.9 · 合理值 2 · 总进球参考 2.25（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Spain -0.25 穿盘：有达标可能",
            "sub_cn": "Spain 胜 38.9% · 胜后穿 100% · Argentina +0.25 守 52.5% 进球氛围：略偏精彩 平局约 29%，与热门取胜概率接近（Top2 区间），存在「赢球变平局」空间。",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Spain",
              "dog_name": "Argentina",
              "fav_handicap_cn": "Spain -0.25",
              "dog_handicap_cn": "Argentina +0.25",
              "market_expect_cn": "Spain -0.25 · 净胜≥1",
              "meet_pct": 47.5,
              "dog_hold_pct": 52.5,
              "fav_win_pct": 38.9,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 38.9,
              "meet_pct_label": "Spain -0.25 穿盘概率（校准）",
              "dog_hold_label": "Argentina +0.25 守住概率（校准）",
              "two_stage_cn": "Spain 取胜约 38.9% · 赢球后穿盘约 100% · Argentina +0.25 守住约 52.5%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Spain -0.25 穿盘：有达标可能",
              "pill_cn": "Spain 胜 38.9% · 胜后穿 100% · Argentina +0.25 守 52.5%",
              "detail_cn": "Spain 取胜约 38.9% · 赢球后穿盘约 100% · Argentina +0.25 守住约 52.5%（泊松 raw 38.9% → 校准 47.5%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 47.5,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": 0.25,
              "show_cover": true
            },
            "totals": {
              "level": "mild_high",
              "label_cn": "略倾向精彩",
              "color": "#E8A54B",
              "meter_label_cn": "略倾向精彩",
              "meter_pos": 67,
              "lean_side": "exciting",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "略偏精彩（弱）",
              "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
              "headline_cn": "进球氛围：略偏精彩",
              "show_lean": false,
              "over_pct": 66.7,
              "line_gap": 0.25,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "draw_risk": {
              "level": "medium",
              "color": "#C8A96E",
              "note": "平局约 29%，与热门取胜概率接近（Top2 区间），存在「赢球变平局」空间。"
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
                  "fav_name": "Spain",
                  "dog_name": "Argentina",
                  "fav_handicap_cn": "Spain -0.25",
                  "dog_handicap_cn": "Argentina +0.25",
                  "market_expect_cn": "Spain -0.25 · 净胜≥1",
                  "meet_pct": 47.5,
                  "dog_hold_pct": 52.5,
                  "fav_win_pct": 38.9,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 38.9,
                  "meet_pct_label": "Spain -0.25 穿盘概率（校准）",
                  "dog_hold_label": "Argentina +0.25 守住概率（校准）",
                  "two_stage_cn": "Spain 取胜约 38.9% · 赢球后穿盘约 100% · Argentina +0.25 守住约 52.5%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Spain -0.25 穿盘：有达标可能",
                  "pill_cn": "Spain 胜 38.9% · 胜后穿 100% · Argentina +0.25 守 52.5%",
                  "detail_cn": "Spain 取胜约 38.9% · 赢球后穿盘约 100% · Argentina +0.25 守住约 52.5%（泊松 raw 38.9% → 校准 47.5%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 47.5,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.25,
                  "show_cover": true
                },
                "text": "Spain 胜 38.9% · 胜后穿 100% · Argentina +0.25 守 52.5%",
                "color": "#C8A96E",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "◎",
                "label": "进球氛围",
                "outlook": {
                  "level": "mild_high",
                  "label_cn": "略倾向精彩",
                  "color": "#E8A54B",
                  "meter_label_cn": "略倾向精彩",
                  "meter_pos": 67,
                  "lean_side": "exciting",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
                  "pill_cn": "略偏精彩（弱）",
                  "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
                  "headline_cn": "进球氛围：略偏精彩",
                  "show_lean": false,
                  "over_pct": 66.7,
                  "line_gap": 0.25,
                  "market_line": 2.25,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.25",
                  "caution_public_high": false
                },
                "text": "略偏精彩（弱）",
                "color": "#E8A54B",
                "muted": true
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Spain",
              "first_goal_pct": 51,
              "start_score": "1-0",
              "fav_name": "Spain",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 83.4,
              "small_lead_pct": 27.9,
              "big_lead_pct": 33.7,
              "fav_win_pct": 61.6,
              "fav_draw_pct": 21.8,
              "fav_lose_pct": 16.7,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Spain 保持胜果（净胜≥1）",
                  "pct": 61.6
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 21.8
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 16.7
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
              "big_delta": 15.3,
              "small_delta": 7.5,
              "narrative": "Spain 先破门（已 1-0） → 「巩固防守」；Argentina 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Spain",
                "state_label": "Spain 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 52.7
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 23.3
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 24
                  }
                ],
                "margin_line_cn": "Spain · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 61.6,
                "margin_half_pct": 0,
                "margin_fail_pct": 27.9,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.38,
                "totals_line_gap": 0,
                "totals_high_pct": 79.6,
                "totals_low_pct": 20.4,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 19.9,
                "win_margin2_low_total_pct": 10.6,
                "win_margin2_high_total_pct": 33.7,
                "readout_cn": "Spain 已 1-0 领先：仍取胜约 61.6%。 对着总进球参考 2.25，模型超线概率约 79.6%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Argentina",
              "first_goal_pct": 49,
              "start_score": "0-1",
              "fav_name": "Spain",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 40.9,
              "small_lead_pct": 12,
              "big_lead_pct": 6.3,
              "fav_win_pct": 18.3,
              "fav_draw_pct": 22.6,
              "fav_lose_pct": 59.1,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Spain 追平（平局）",
                  "pct": 22.6
                },
                {
                  "key": "win1",
                  "label": "Spain 净胜1球翻盘（如 2-1）",
                  "pct": 12
                },
                {
                  "key": "win2",
                  "label": "Spain 净胜≥2球翻盘（如 3-1）",
                  "pct": 6.3
                },
                {
                  "key": "upset_hold",
                  "label": "Argentina 保持胜果至终场",
                  "pct": 59.1
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
              "big_delta": -12.1,
              "small_delta": -8.4,
              "narrative": "Argentina 先破门（已 0-1） → 「巩固防守」；Spain 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.9 · 合理值 2 · 总进球参考 2.25（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 66.7,
              "type_tags": [
                {
                  "key": "even_open",
                  "label": "均势开放"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 25,
              "readout_cn": "Spain · 均势开放。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 25,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.65,
            "xg_away_ht": 0.62,
            "xg_home_2h": 0.83,
            "xg_away_2h": 0.8,
            "home_win": 30.6,
            "draw": 40.6,
            "away_win": 28.8,
            "top_score": "0-0",
            "top_score_prob": 28.1,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 28.1
              },
              {
                "score": "1-0",
                "prob": 18.3
              },
              {
                "score": "0-1",
                "prob": 17.4
              }
            ],
            "ht_goals_expected": 1.27,
            "ht_over_0_5_pct": 71.9,
            "ht_over_1_5_pct": 36.2,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.65–0.62（约占全场 44%） · 最可能 0-0（28.1%） · 胜平负 30.6/40.6/28.8 · 半场≥1球约 71.9%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Spain · 均势开放。 · 与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.9,
          "xg_gap": 0.06,
          "xg_home": 1.48,
          "xg_away": 1.42,
          "xg_baseline_home": 1.48,
          "xg_baseline_away": 1.42,
          "xg_note": "结构推演用基准 xG 1.48–1.42",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Spain",
          "dog_name": "Argentina",
          "fav_xg": 1.48,
          "dog_xg": 1.42,
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
          "prob_over_line": 66.7,
          "prob_meet_guess": 55.1,
          "guess_n": 3,
          "prob_4_plus": 32.5,
          "prob_2_or_less": 44.9,
          "totals_line": 2.25,
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
          "summary_cn": "【路径·基准 xG】合计 2.9 · Spain 1.48 / Argentina 1.42 → 主路径「铁局/小比分」约 45%。 至少 3 球约 55.1% · 超 2.25 约 66.7% · ≤2球 44.9%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.25,
        "tier_label": "Spain -0.25 · Argentina +0.25",
        "totals_line": 2.25,
        "over_pct": 66.7,
        "fair_line": 2,
        "line_gap": 0.25,
        "full_cover_pct": 47.5,
        "fav_win_pct": 38.9,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Spain -0.25 · 净胜≥1",
        "line_move_tag": "flat",
        "line_move_cn": "盘路平稳",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（阿根廷受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "阿根廷 +0/0.5 @0.96",
        "agent_totals_cn": "大球 2/2.5 @1.05",
        "agent_totals_skipped": false,
        "agent_totals_skip_cn": null,
        "ko_totals_policy": "R9",
        "totals_level": "mild_high",
        "totals_show_lean": false,
        "totals_lean_side": "exciting"
      }
    }
  ],
  "nextMatch": {
    "group": "KO",
    "matchday": null,
    "date": "2026-07-19",
    "time": "15:00",
    "time_local": "15:00 ET",
    "timezone": "EDT (UTC-4)",
    "time_beijing": "03:00",
    "date_beijing": "7月20日",
    "time_beijing_full": "北京时间 7月20日 03:00",
    "venue": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "home": {
      "name": "Spain",
      "iso": "es",
      "fifaRank": 1,
      "rating": 92
    },
    "away": {
      "name": "Argentina",
      "iso": "ar",
      "fifaRank": 2,
      "rating": 91
    },
    "teaser": "决赛 M104 · 西班牙 vs 阿根廷",
    "home_win": 37,
    "draw": 29,
    "away_win": 34,
    "predicted_score": "1-1",
    "key_player_home": "Lamine Yamal",
    "key_player_away": "Lionel Messi"
  },
  "upcomingMatches": []
};
