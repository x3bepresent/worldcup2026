// 今日赛事 — Day 34 · 半决赛 enriched
// Last updated: 2026-07-14T14:20:24+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-07-14T14:20:24+08:00",
  "syncSource": "FIFA 赛程 · Day 34 · 半决赛 enriched · 裁判/伤病/球星/赛场气候",
  "phase": "knockout",
  "phase_cn": "淘汰赛 · 半决赛",
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
      "text": "⚔️ 半决赛：法国 vs 西班牙 · 北京时间 7月15日 03:00 · 达拉斯 AT&T",
      "time": "7月15日"
    },
    {
      "tag": "PREVIEW",
      "text": "⚔️ 半决赛：英格兰 vs 阿根廷 · 北京时间 7月16日 03:00 · 亚特兰大",
      "time": "7月16日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 8强：法国2-0摩洛哥 · 西班牙2-1比利时 · 挪威加时1-2英格兰 · 阿根廷加时3-1瑞士",
      "time": "路径"
    }
  ],
  "todayMatches": [
    {
      "id": "m101",
      "fifa_match_number": 101,
      "fifa_match_id": "400021541",
      "group": "KO",
      "round": "SF",
      "round_cn": "半决赛",
      "matchday": null,
      "knockout_slot": "M101 · 半决赛 · M97胜(法国) vs M98胜(西班牙)",
      "knockout_next": "胜者 → M104 决赛 · 负者 → M103 季军赛",
      "date": "2026-07-14",
      "time": "14:00",
      "time_local": "14:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "03:00",
      "date_beijing": "7月15日",
      "time_beijing_full": "北京时间 7月15日 03:00",
      "venue": "AT&T Stadium",
      "city": "Arlington, USA",
      "note": "半决赛 M101 · 法国 vs 西班牙 · 达拉斯",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Maignan; Koundé, Saliba, Upamecano, T. Hernández; Tchouaméni, Camavinga; Dembélé, Griezmann, Mbappé; Kolo Muani",
          "away": "Unai Simón; Carvajal, Cubarsí, Le Normand, Cucurella; Rodri, Fabian Ruiz; Pedri; Yamal, Morata, Nico Williams",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "France",
        "iso": "fr",
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
        "coach": "Didier Deschamps",
        "stars": [
          {
            "name": "Kylian Mbappé",
            "pos": "ST",
            "club": "Real Madrid",
            "rating": 9.5,
            "desc": "速度 · 终结 · 破局"
          },
          {
            "name": "Antoine Griezmann",
            "pos": "AM",
            "club": "Atlético",
            "rating": 8.6,
            "desc": "前场组织轴"
          },
          {
            "name": "Aurélien Tchouaméni",
            "pos": "CDM",
            "club": "Real Madrid",
            "rating": 8.4,
            "desc": "后腰屏障 · 出球"
          }
        ],
        "star": {
          "name": "Kylian Mbappé",
          "pos": "ST",
          "club": "Real Madrid",
          "rating": 9.5,
          "desc": "金靴领跑 · 半决赛核心"
        },
        "injuries": [
          {
            "player": "Kylian Mbappé",
            "status": "FIT",
            "note": "金靴领跑 · 状态火热",
            "confirmed": true
          },
          {
            "player": "Antoine Griezmann",
            "status": "FIT",
            "note": "前场组织轴",
            "confirmed": true
          },
          {
            "player": "Aurélien Tchouaméni",
            "status": "FIT",
            "note": "后腰屏障",
            "confirmed": true
          },
          {
            "player": "Ousmane Dembélé",
            "status": "DOUBT",
            "note": "大腿轮换 · 或 Coman 顶替",
            "confirmed": false
          }
        ],
        "rumors": [
          "Deschamps：「西班牙淘汰比利时说明他们很强——半决赛要控制节奏」",
          "预计 4-2-3-1：Mbappé 中锋 · Griezmann 前腰 · Dembélé/Coman 边路",
          "2-0 淘汰摩洛哥后信心足 · 半决赛经验是最大王牌",
          "须限制 Yamal 右路一对一"
        ]
      },
      "away": {
        "name": "Spain",
        "iso": "es",
        "flag": "",
        "fifa_rank": 3,
        "rating": 90,
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
            "rating": 9.2,
            "desc": "一对一 · 倒三角 · 破局核心"
          },
          {
            "name": "Pedri",
            "pos": "CM",
            "club": "Barcelona",
            "rating": 8.7,
            "desc": "中场组织 · 节奏控制"
          },
          {
            "name": "Rodri",
            "pos": "CDM",
            "club": "Man City",
            "rating": 9,
            "desc": "后腰核心 · 出球+防守"
          }
        ],
        "star": {
          "name": "Lamine Yamal",
          "pos": "RW",
          "club": "Barcelona",
          "rating": 9.2,
          "desc": "右路爆点 · 淘汰葡萄牙"
        },
        "injuries": [
          {
            "player": "Lamine Yamal",
            "status": "FIT",
            "note": "右路爆点 · 淘汰葡萄牙功臣",
            "confirmed": true
          },
          {
            "player": "Pedri",
            "status": "FIT",
            "note": "中场组织",
            "confirmed": true
          },
          {
            "player": "Rodri",
            "status": "FIT",
            "note": "后腰核心",
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
          "de la Fuente：「对法国是欧洲杯半决赛的续集——我们准备好了」",
          "预计 4-3-3：Yamal 右路 · Nico 左路 · Morata/Oyarzabal 支点",
          "淘汰葡萄牙+比利时 · 传控体系运转良好",
          "须防 Mbappé 身后速度 · Rodri 出球是关键"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2021,
            "comp": "欧国联",
            "score": "2-1",
            "winner": "France"
          },
          {
            "year": 2024,
            "comp": "欧洲杯半决赛",
            "score": "1-2",
            "winner": "Spain"
          }
        ],
        "note": "欧洲杯2024半决赛西班牙2-1法国"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-14",
        "name": "Iván Arcides Barton Cisneros",
        "nation": "El Salvador",
        "iso": "sv",
        "wc_experience": "2026 世界杯 · 半决赛 M101 主裁 · CONCACAF · 执法法国 vs 西班牙",
        "avg_yellow": 4.3,
        "avg_red": 0.12,
        "avg_penalty": 0.28,
        "home_win_rate": 50,
        "bias_index": 50,
        "bias_note": "萨尔瓦多主裁执法达拉斯 AT&T。法国身体对抗 vs 西班牙传控；半决赛尺度稳健，关键判罚果断。",
        "tendencies": [
          "FIFA 官方主裁 · Iván Barton（萨尔瓦多）",
          "第四官员 Glenn Nyberg（瑞典）",
          "半决赛 · Mbappé vs Yamal"
        ],
        "officials": {
          "referee": "Iván Barton (SLV)",
          "fourth": "Glenn Nyberg (SWE)"
        },
        "fifa_match_id": "400021541",
        "note": "FIFA M101 · 法国 vs 西班牙 · Dallas AT&T",
        "updated": "2026-07-14T14:20:24+08:00"
      },
      "prediction": {
        "home_win": 34,
        "draw": 28,
        "away_win": 38,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.45,
        "xg_away": 1.55,
        "key_factor": "半决赛 M101 · 法国 vs 西班牙 · Mbappé vs Yamal · 泊松 1-1/1-2",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12
          },
          {
            "score": "0-1",
            "prob": 9.1
          },
          {
            "score": "1-2",
            "prob": 8.7
          },
          {
            "score": "1-0",
            "prob": 8.2
          },
          {
            "score": "2-1",
            "prob": 7.9
          },
          {
            "score": "0-2",
            "prob": 6.6
          },
          {
            "score": "0-0",
            "prob": 6.2
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M101 · 半决赛 · 法国 vs 西班牙 · 胜者进决赛 M104 · 负者季军赛 M103"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "达拉斯午后高温·多云 · 30°C · 湿度 62% · 降雨概率 16% · 东风 3级 · 关顶则场内空调；M101 法国 vs 西班牙 · 30°C 午后·关顶概率高 · 封闭空调控温后气候影响降为中低（30°C 午后多云 · 关顶空调）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "半决赛 M101 · 法国 vs 西班牙 · Mbappé vs Yamal · 泊松 1-1/1-2"
          }
        ],
        "base_home_win": 34,
        "base_draw": 28,
        "base_away_win": 38,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 4,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.1,
          "notes": [
            "xG 极接近"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.32,
        "xg_poisson_away": 1.46,
        "xg_tier_calibrated": false,
        "score_prob": 12,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 12
          },
          {
            "score": "0-1",
            "prob": 9.1
          },
          {
            "score": "1-2",
            "prob": 8.7
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "达拉斯",
        "country": "美国",
        "venue": "AT&T Stadium",
        "pitch_surface": "人造/天然混",
        "stadium_type": "可开合屋顶",
        "temp": 30,
        "humidity": 62,
        "altitude_m": 167,
        "rain_chance": 16,
        "wind": "东风 3级 · 关顶则场内空调",
        "condition_cn": "达拉斯午后高温·多云",
        "impact_level": "MEDIUM",
        "impact_summary": "M101 法国 vs 西班牙 · 30°C 午后·关顶概率高 · 封闭空调控温后气候影响降为中低",
        "home_adapt": 86,
        "away_adapt": 85,
        "weather_factors": [
          {
            "label": "30°C 午后多云",
            "impact": "中",
            "detail": "北京时间 7月15日 03:00 · 当地 7/14 14:00 CT · Open-Meteo"
          },
          {
            "label": "关顶空调",
            "impact": "低-中",
            "detail": "AT&T 可开合屋顶 · 高温时段通常关顶"
          }
        ],
        "forecast_updated": "2026-07-14 22:20 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲寅日",
          "day_summary": "甲寅日——木气当令",
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
        "mystic_verdict": "法国火金锐，西班牙木火盛。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": -0.25,
        "tier_label": "Spain -0.25 · France +0.25",
        "implied_tier": 0,
        "tier_gap": -0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Spain（约 54%）",
        "analysis": "M101 · 法国 vs 西班牙 · 西-0/0.5@0.92/法+0/0.5@0.90 · 大小 2.5 大0.94小0.88。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.2
            },
            {
              "score": "1-2",
              "prob": 8.7
            },
            {
              "score": "2-1",
              "prob": 8.1
            }
          ],
          "one_goal_win_pct": 19,
          "two_plus_win_pct": 16.6,
          "full_cover_pct": 48.1,
          "dog_hold_pct": 51.9,
          "fav_win_pct": 40,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.2,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.2,
          "dog_cover_ev": 0.2,
          "rational_spread_cn": "主队 守住差距概率略高",
          "total_xg": 3,
          "fair_totals_line": 2.75,
          "over_2_5_pct": 57.6,
          "over_3_pct": 35.2,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 40%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 40,
          "dog_hold_pct_raw": 60
        },
        "spread_odds": {
          "fav": 0.92,
          "dog": 0.9,
          "note": "France 0.92 · Spain 0.9"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 3,
          "fair_line": 2.75,
          "line_gap": -0.25,
          "over_pct": 57.3,
          "under_pct": 42.7,
          "signal": "low_line",
          "signal_cn": "参考偏低",
          "signal_color": "#7BB8D4",
          "signal_desc": "总进球参考低于合理值，模型偏大比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 57.3%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "France +0/0.5@0.9 · Spain -0/0.5@0.92",
          "spread_now_cn": "France +0/0.5@0.9 · Spain -0/0.5@0.92",
          "totals_now_cn": "大小 2.5 · 大 0.94 / 小 0.88",
          "tag": "book_value_dog",
          "tag_cn": "受让低水定价",
          "tag_color": "#C8A96E",
          "detail_cn": "退 0.5 档 · 热门 0.92→0.92 · 受让 0.9→0.9 现盘去水隐含：Spain 49.7% · France 50.3%（超收 4.7%） 模型穿盘（现档 Spain -0.25 · France +0.25）：Spain 48.1% · France 51.9% 模型−市场：Spain -1.6pp · France +1.6pp 期望 ROI@现水：Spain -7.6% · France +50.5% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "actuarial": {
            "actuarial_type": "book_value_dog",
            "actuarial_cn": "受让低水定价",
            "actuarial_color": "#C8A96E",
            "actuarial_desc": "退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
            "summary_cn": "退 0.5 档 · 热门 0.92→0.92 · 受让 0.9→0.9 现盘去水隐含：Spain 49.7% · France 50.3%（超收 4.7%） 模型穿盘（现档 Spain -0.25 · France +0.25）：Spain 48.1% · France 51.9% 模型−市场：Spain -1.6pp · France +1.6pp 期望 ROI@现水：Spain -7.6% · France +50.5% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
            "line_delta": -0.5,
            "line_delta_cn": "退 0.5 档",
            "fav_odds_delta": 0,
            "dog_odds_delta": 0,
            "water_move_cn": "热门 0.92→0.92 · 受让 0.9→0.9",
            "open_tier": 0.25,
            "open_tier_label": "France -0.25 · Spain +0.25",
            "now_tier": -0.25,
            "implied_tier": 0,
            "open_tier_gap": 0.25,
            "now_tier_gap": -0.25,
            "open_devig": {
              "fav_pct": 49.7,
              "dog_pct": 50.3,
              "overround_pct": 4.7
            },
            "now_devig": {
              "fav_pct": 49.7,
              "dog_pct": 50.3,
              "overround_pct": 4.7
            },
            "model_cover_open_pct": 45.7,
            "model_cover_now_pct": 48.1,
            "model_dog_cover_now_pct": 51.9,
            "market_fav_cover_now_pct": 49.7,
            "market_dog_cover_now_pct": 50.3,
            "model_vs_market_fav_pp": -1.6,
            "model_vs_market_dog_pp": 1.6,
            "fav_roi_pct": -7.6,
            "dog_roi_pct": 50.5,
            "fav_name": "Spain",
            "dog_name": "France"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "book_value_dog",
          "actuarial_cn": "受让低水定价",
          "actuarial_color": "#C8A96E",
          "actuarial_desc": "退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "summary_cn": "退 0.5 档 · 热门 0.92→0.92 · 受让 0.9→0.9 现盘去水隐含：Spain 49.7% · France 50.3%（超收 4.7%） 模型穿盘（现档 Spain -0.25 · France +0.25）：Spain 48.1% · France 51.9% 模型−市场：Spain -1.6pp · France +1.6pp 期望 ROI@现水：Spain -7.6% · France +50.5% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "line_delta": -0.5,
          "line_delta_cn": "退 0.5 档",
          "fav_odds_delta": 0,
          "dog_odds_delta": 0,
          "water_move_cn": "热门 0.92→0.92 · 受让 0.9→0.9",
          "open_tier": 0.25,
          "open_tier_label": "France -0.25 · Spain +0.25",
          "now_tier": -0.25,
          "implied_tier": 0,
          "open_tier_gap": 0.25,
          "now_tier_gap": -0.25,
          "open_devig": {
            "fav_pct": 49.7,
            "dog_pct": 50.3,
            "overround_pct": 4.7
          },
          "now_devig": {
            "fav_pct": 49.7,
            "dog_pct": 50.3,
            "overround_pct": 4.7
          },
          "model_cover_open_pct": 45.7,
          "model_cover_now_pct": 48.1,
          "model_dog_cover_now_pct": 51.9,
          "market_fav_cover_now_pct": 49.7,
          "market_dog_cover_now_pct": 50.3,
          "model_vs_market_fav_pp": -1.6,
          "model_vs_market_dog_pp": 1.6,
          "fav_roi_pct": -7.6,
          "dog_roi_pct": 50.5,
          "fav_name": "Spain",
          "dog_name": "France"
        },
        "totals_pick_layers": {
          "model_side": "over",
          "situation_side": "neutral",
          "market_line_side": "over",
          "market_odds_side": "under",
          "market_side": "over",
          "recommended_side": "over",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "over",
            "line": "over",
            "odds": "under",
            "situation": "neutral"
          },
          "vote_summary_cn": "大球(model) · 大球(line) · 小球(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘（法国受让）",
          "tendency_reason_cn": "西班牙仅浅让 -0/0.5 · 法国半决赛经验+Mbappé 金靴状态 · ★法+0/0.5 · 小2.5副项。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "dog",
            "label_cn": "法国 +0/0.5 @0.90",
            "reason_cn": "浅盘说明市场接近均势；法国 2-0 摩洛哥气势足，半决赛经验占优 · 1-1/1-0 路径 · ★主项。"
          },
          "totals": {
            "side": "under",
            "label_cn": "小球 2.5 @0.88",
            "reason_cn": "半决赛节奏偏谨慎 · 两边防线质量高 · 1-0/1-1 路径 · 副项。",
            "manual_override": true,
            "recommended_side": "over",
            "skipped": true,
            "skip_reason_cn": "淘汰赛副项不打小球（R9）"
          },
          "picked_at": "2026-07-15-open",
          "pick_meta": {
            "model_side": "over",
            "situation_side": "neutral",
            "market_line_side": "over",
            "market_odds_side": "under",
            "market_side": "over",
            "pick_side": "under",
            "recommended_side": "over",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "over",
              "line": "over",
              "odds": "under",
              "situation": "neutral"
            },
            "vote_summary_cn": "大球(model) · 大球(line) · 小球(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 57.3,
            "line_gap": -0.25
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
          "home_win": 34,
          "draw": 28,
          "away_win": 38
        },
        "display_summary": {
          "fav_name": "Spain",
          "expected_total_goals": 2.75,
          "poisson_fav_win_pct": 40.4,
          "small_lead_pct": 21.2,
          "small_example_score": "0-1",
          "small_example_pct": 9.1,
          "big_cover_pct": 19.2,
          "big_example_score": "0-2",
          "big_example_pct": 6.7,
          "win_shape": {
            "fav_name": "Spain",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 29.9%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 9.1,
                "pct": 22.6
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.1,
                "pct": 29.9
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 9.9,
                "pct": 24.5
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 9.3,
                "pct": 23
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 52.5
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
                "pct": 23
              }
            ],
            "fav_win_pct": 38
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 32.4 分",
            "first_goal_wait": 32.4,
            "fast_pct": 60.4,
            "moderate_pct": 14.7,
            "slow_pct": 24.9,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 60.4
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.7
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 24.9
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "France：Ousmane Dembélé 存疑 · Spain 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M101 法国 vs 西班牙 · 30°C 午后·关顶概率高 · 封闭空调控温后气候影响降为中低"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 极接近（平 +4%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.45,
            "baseline_away": 1.55,
            "adjusted_home": 1.32,
            "adjusted_away": 1.46,
            "note": "基准 xG 1.45–1.55 → 调整后 1.32–1.46"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": -0.25,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Spain -0.25 · France +0.25",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略低（约 -0.25）"
          },
          "win_outlook": {
            "fav_name": "Spain",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 52.5
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
                "pct": 23
              }
            ],
            "margin_line_cn": "Spain · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 48.3,
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
            "model_total_xg": 2.78,
            "totals_line_gap": 0.5,
            "totals_high_pct": 52.3,
            "totals_low_pct": 47.7,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 15.8,
            "win_margin2_low_total_pct": 6.7,
            "win_margin2_high_total_pct": 12.5,
            "readout_cn": "取胜约 38%；若取胜，以「险胜收工」为主（52.5%）。 对着赛前净胜参考，净胜≥1（全达标）约 48.3%；对着总进球参考 2.5，模型超线概率约 52.3%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12
            },
            {
              "score": "0-1",
              "pct": 9.1
            },
            {
              "score": "1-2",
              "pct": 8.7
            }
          ],
          "totals_view": {
            "expected_total": 2.8,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 52.3,
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
              "over_pct": 52.3,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.8 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Spain -0.25 穿盘：有达标可能",
            "sub_cn": "Spain 胜 40.5% · 胜后穿 100% · France +0.25 守 51.6% 进球氛围：几乎五五开",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Spain",
              "dog_name": "France",
              "fav_handicap_cn": "Spain -0.25",
              "dog_handicap_cn": "France +0.25",
              "market_expect_cn": "Spain -0.25 · 净胜≥1",
              "meet_pct": 48.4,
              "dog_hold_pct": 51.6,
              "fav_win_pct": 40.5,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 40.5,
              "meet_pct_label": "Spain -0.25 穿盘概率（校准）",
              "dog_hold_label": "France +0.25 守住概率（校准）",
              "two_stage_cn": "Spain 取胜约 40.5% · 赢球后穿盘约 100% · France +0.25 守住约 51.6%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Spain -0.25 穿盘：有达标可能",
              "pill_cn": "Spain 胜 40.5% · 胜后穿 100% · France +0.25 守 51.6%",
              "detail_cn": "Spain 取胜约 40.5% · 赢球后穿盘约 100% · France +0.25 守住约 51.6%（泊松 raw 40.5% → 校准 48.4%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 48.4,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": -0.25,
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
              "over_pct": 52.3,
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
                  "level": "possible",
                  "label_cn": "有达标可能",
                  "color": "#C8A96E",
                  "fav_name": "Spain",
                  "dog_name": "France",
                  "fav_handicap_cn": "Spain -0.25",
                  "dog_handicap_cn": "France +0.25",
                  "market_expect_cn": "Spain -0.25 · 净胜≥1",
                  "meet_pct": 48.4,
                  "dog_hold_pct": 51.6,
                  "fav_win_pct": 40.5,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 40.5,
                  "meet_pct_label": "Spain -0.25 穿盘概率（校准）",
                  "dog_hold_label": "France +0.25 守住概率（校准）",
                  "two_stage_cn": "Spain 取胜约 40.5% · 赢球后穿盘约 100% · France +0.25 守住约 51.6%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Spain -0.25 穿盘：有达标可能",
                  "pill_cn": "Spain 胜 40.5% · 胜后穿 100% · France +0.25 守 51.6%",
                  "detail_cn": "Spain 取胜约 40.5% · 赢球后穿盘约 100% · France +0.25 守住约 51.6%（泊松 raw 40.5% → 校准 48.4%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 48.4,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": -0.25,
                  "show_cover": true
                },
                "text": "Spain 胜 40.5% · 胜后穿 100% · France +0.25 守 51.6%",
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
                  "over_pct": 52.3,
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
              "team": "France",
              "first_goal_pct": 47.5,
              "start_score": "1-0",
              "fav_name": "Spain",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 42.1,
              "small_lead_pct": 12.4,
              "big_lead_pct": 6.4,
              "fav_win_pct": 18.8,
              "fav_draw_pct": 23.3,
              "fav_lose_pct": 57.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Spain 追平（平局）",
                  "pct": 23.3
                },
                {
                  "key": "win1",
                  "label": "Spain 净胜1球翻盘（如 2-1）",
                  "pct": 12.4
                },
                {
                  "key": "win2",
                  "label": "Spain 净胜≥2球翻盘（如 3-1）",
                  "pct": 6.4
                },
                {
                  "key": "upset_hold",
                  "label": "France 保持胜果至终场",
                  "pct": 57.9
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
              "big_delta": -12.8,
              "small_delta": -8.8,
              "narrative": "France 先破门（已 1-0） → 「巩固防守」；Spain 「组织反扑」。热门先丢球（已 1-0），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "Spain",
              "first_goal_pct": 52.5,
              "start_score": "0-1",
              "fav_name": "Spain",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 85.1,
              "small_lead_pct": 28.6,
              "big_lead_pct": 35.1,
              "fav_win_pct": 63.7,
              "fav_draw_pct": 21.4,
              "fav_lose_pct": 14.9,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Spain 保持胜果（净胜≥1）",
                  "pct": 63.7
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 21.4
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 14.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 32.5 分",
                "first_goal_wait": 32.5,
                "fast_pct": 53.1,
                "moderate_pct": 14.8,
                "slow_pct": 32.1,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 53.1
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 32.1
                  }
                ]
              },
              "big_delta": 15.9,
              "small_delta": 7.4,
              "narrative": "Spain 先破门（已 0-1） → 「巩固防守」；France 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Spain",
                "state_label": "Spain 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 52.5
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
                    "pct": 23
                  }
                ],
                "margin_line_cn": "Spain · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 63.7,
                "margin_half_pct": 0,
                "margin_fail_pct": 28.6,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.27,
                "totals_line_gap": 0.25,
                "totals_high_pct": 66.2,
                "totals_low_pct": 33.8,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 22,
                "win_margin2_low_total_pct": 11.6,
                "win_margin2_high_total_pct": 23.5,
                "readout_cn": "Spain 已 1-0 领先：仍取胜约 63.7%。 对着总进球参考 2.5，模型超线概率约 66.2%。 常见 2-0 收尾（相对总进球参考 2.5仍偏小比分）。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.8 · 合理值 2 · 总进球参考 2.5（高于合理值 0.5） · 高于合理值 0.5 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 52.3,
              "type_tags": [
                {
                  "key": "even_open",
                  "label": "均势开放"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 24,
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
              "draw_trap_pct": 24,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.58,
            "xg_away_ht": 0.64,
            "xg_home_2h": 0.74,
            "xg_away_2h": 0.82,
            "home_win": 27.3,
            "draw": 41.5,
            "away_win": 31.1,
            "top_score": "0-0",
            "top_score_prob": 29.5,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 29.5
              },
              {
                "score": "0-1",
                "prob": 18.9
              },
              {
                "score": "1-0",
                "prob": 17.1
              }
            ],
            "ht_goals_expected": 1.22,
            "ht_over_0_5_pct": 70.5,
            "ht_over_1_5_pct": 34.5,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.58–0.64（约占全场 44%） · 最可能 0-0（29.5%） · 胜平负 27.3/41.5/31.1 · 半场≥1球约 70.5%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Spain · 均势开放。 · 与模型 xG 对照：均衡 · 赛前净胜看法略低（约 -0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 3,
          "xg_gap": 0.1,
          "xg_home": 1.45,
          "xg_away": 1.55,
          "xg_baseline_home": 1.45,
          "xg_baseline_away": 1.55,
          "xg_note": "结构推演用基准 xG 1.45–1.55（进球氛围用调整后 1.32–1.46）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Spain",
          "dog_name": "France",
          "fav_xg": 1.55,
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
          "prob_over_line": 57.3,
          "prob_meet_guess": 57.3,
          "guess_n": 3,
          "prob_4_plus": 34.7,
          "prob_2_or_less": 42.7,
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
          "summary_cn": "【路径·基准 xG】合计 3 · Spain 1.55 / France 1.45 → 主路径「铁局/小比分」约 45%。 超 2.5 约 57.3% · ≤2球 42.7%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": -0.25,
        "tier_label": "Spain -0.25 · France +0.25",
        "totals_line": 2.5,
        "over_pct": 52.3,
        "fair_line": 2,
        "line_gap": 0.5,
        "full_cover_pct": 48.4,
        "fav_win_pct": 40.5,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Spain -0.25 · 净胜≥1",
        "line_move_tag": "book_value_dog",
        "line_move_cn": "受让低水定价",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（法国受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "法国 +0/0.5 @0.90",
        "agent_totals_cn": null,
        "agent_totals_skipped": true,
        "agent_totals_skip_cn": "淘汰赛副项不打小球（R9）",
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
    "date": "2026-07-14",
    "time": "14:00",
    "time_local": "14:00 CT",
    "timezone": "CDT (UTC-5)",
    "time_beijing": "03:00",
    "date_beijing": "7月15日",
    "time_beijing_full": "北京时间 7月15日 03:00",
    "venue": "AT&T Stadium",
    "city": "Arlington, USA",
    "home": {
      "name": "France",
      "iso": "fr",
      "fifaRank": 2,
      "rating": 91
    },
    "away": {
      "name": "Spain",
      "iso": "es",
      "fifaRank": 3,
      "rating": 90
    },
    "teaser": "半决赛 M101 · 法国 vs 西班牙",
    "home_win": 34,
    "draw": 28,
    "away_win": 38,
    "predicted_score": "1-1",
    "key_player_home": "Kylian Mbappé",
    "key_player_away": "Lamine Yamal"
  },
  "upcomingMatches": [
    {
      "id": "m102",
      "round": "SF",
      "round_cn": "半决赛",
      "group": "KO",
      "time_beijing_full": "北京时间 7月16日 03:00",
      "venue": "Mercedes-Benz Stadium",
      "city": "亚特兰大",
      "home": {
        "name": "England",
        "iso": "gb-eng"
      },
      "away": {
        "name": "Argentina",
        "iso": "ar"
      },
      "teaser": "M102 · M99胜 vs M100胜"
    }
  ]
};
