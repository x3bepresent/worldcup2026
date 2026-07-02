// 今日赛事 — Day 22 enriched
// Last updated: 2026-07-02T13:35:21+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-07-02T13:35:21+08:00",
  "syncSource": "FIFA 赛程 · Day 22 · 32强 enriched · 裁判/伤病/球星/赛场",
  "phase": "knockout",
  "phase_cn": "淘汰赛 · 32强",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 淘汰赛晋级路径矩阵",
      "time": "模型"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M80：英格兰 2-1 刚果（金）· Kane 双响 · 半场 0-1",
      "time": "7月2日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M81：美国 2-0 波黑 · Balogun 45' · Tillman 82'",
      "time": "7月2日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M82：比利时 常规2-2 · 加时3-2 塞内加尔 · 球盘按90分钟结算 · 半场 0-1",
      "time": "7月2日"
    },
    {
      "tag": "PREVIEW",
      "text": "⚔️ 今日 3 场：西班牙-奥地利(03:00) · 葡萄牙-克罗地亚(07:00) · 瑞士-阿尔及利亚(11:00)",
      "time": "7月3日"
    },
    {
      "tag": "PREVIEW",
      "text": "M83/M84 胜者 → M93 · M85 胜者 → M96",
      "time": "路径"
    },
    {
      "tag": "UPDATE",
      "text": "🎯 淘汰赛大小球 R9 已开启：副项不打小 · ★冲突跳过 · 大信心仅绑★大小",
      "time": "Agent"
    }
  ],
  "todayMatches": [
    {
      "id": "m84",
      "fifa_match_number": 84,
      "fifa_match_id": "400021519",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M84 · H组冠军 vs J组亚军",
      "knockout_next": "胜者 → M93（16强 · 对 M83 胜者）",
      "date": "2026-07-02",
      "time": "12:00",
      "time_local": "12:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "03:00",
      "date_beijing": "7月3日",
      "time_beijing_full": "北京时间 7月3日 03:00",
      "venue": "SoFi Stadium",
      "city": "Los Angeles, USA",
      "note": "32强 M84 · 西班牙 vs 奥地利 · 洛杉矶",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Simón; Carvajal, Laporte, Le Normand, Cucurella; Rodri, Zubimendi; Yamal, Olmo, Williams; Morata",
          "away": "Schlager; Laimer, Alaba, Danso, Mwene; Seiwald, Sabitzer; Baumgartner, Grüll, Laimer; Gregoritsch",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Spain",
        "iso": "es",
        "flag": "",
        "fifa_rank": 8,
        "rating": 90,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Luis de la Fuente",
        "stars": [
          {
            "name": "Lamine Yamal",
            "pos": "RW",
            "club": "Barcelona",
            "rating": 9,
            "desc": "一对一 · 破奥地利低位第一选择"
          },
          {
            "name": "Nico Williams",
            "pos": "LW",
            "club": "Athletic",
            "rating": 8.8,
            "desc": "左路速度 · 宽度拉满"
          },
          {
            "name": "Rodri",
            "pos": "CDM",
            "club": "Man City",
            "rating": 8.9,
            "desc": "屏障 · 控球发起点"
          }
        ],
        "star": {
          "name": "Lamine Yamal",
          "pos": "RW",
          "club": "Barcelona",
          "rating": 9,
          "desc": "H 组头名 · 右路爆点"
        },
        "injuries": [
          {
            "player": "Lamine Yamal",
            "status": "FIT",
            "note": "H 组头名 · 3 场 5 球进攻轴 · 预计首发 RW",
            "confirmed": true
          },
          {
            "player": "Nico Williams",
            "status": "FIT",
            "note": "左路宽度 · 对奥地利低位关键",
            "confirmed": true
          },
          {
            "player": "Pedri",
            "status": "FIT",
            "note": "肋部组织 · 破密集",
            "confirmed": true
          },
          {
            "player": "Carvajal",
            "status": "DOUBT",
            "note": "右腿轻微不适 · 赛前队检决定能否首发",
            "confirmed": false
          }
        ],
        "rumors": [
          "de la Fuente：「淘汰赛没有容错——奥地利 J 组次席有 Sabitzer/Alaba，须早破门穿 -1.5」",
          "预计 4-3-3：Simón; Carvajal/Laporte, Le Normand, Cucurella; Rodri, Zubimendi; Yamal, Olmo, N. Williams; Morata",
          "H 组 3 场仅 5 球 · 进攻效率偏低但零失球防守稳 · 深盘 -1.5@0.87 低水挺穿",
          "Agent ★西班牙 -1.5 · 副项大 2.5/3@0.86（升线+大侧降水）",
          "更衣室：老将 Morata 与年轻球员 Yamal 分工明确 · 无内讧报道"
        ]
      },
      "away": {
        "name": "Austria",
        "iso": "at",
        "flag": "",
        "fifa_rank": 22,
        "rating": 78,
        "form": [
          "W",
          "L",
          "D",
          "W",
          "L"
        ],
        "coach": "Ralf Rangnick",
        "stars": [
          {
            "name": "Marcel Sabitzer",
            "pos": "CM",
            "club": "Dortmund",
            "rating": 8,
            "desc": "屏障 Rodri/Olmo · 定位球"
          },
          {
            "name": "David Alaba",
            "pos": "CB",
            "club": "Real Madrid",
            "rating": 8.3,
            "desc": "防线领袖 · 经验组织"
          },
          {
            "name": "Gregoritsch",
            "pos": "ST",
            "club": "Freiburg",
            "rating": 7.6,
            "desc": "支点 · 反击第一落点"
          }
        ],
        "star": {
          "name": "Marcel Sabitzer",
          "pos": "CM",
          "club": "Dortmund",
          "rating": 8,
          "desc": "J 组次席 · 绞杀+远射"
        },
        "injuries": [
          {
            "player": "David Alaba",
            "status": "FIT",
            "note": "防线领袖 · 对位 Morata/Yamal",
            "confirmed": true
          },
          {
            "player": "Marcel Sabitzer",
            "status": "FIT",
            "note": "屏障 Rodri · 远射破局点",
            "confirmed": true
          },
          {
            "player": "Gregoritsch",
            "status": "FIT",
            "note": "锋线支点 · 反击第一落点",
            "confirmed": true
          },
          {
            "player": "Laimer",
            "status": "DOUBT",
            "note": "中场轻微撞伤 · 末练减量",
            "confirmed": false
          }
        ],
        "rumors": [
          "Rangnick：「对西班牙没有包袱——+1.5@1.02 是我们熟悉的铁桶+转换」",
          "预计 4-2-3-1 低位 · Sabitzer/Seiwald 双屏障 · Gregoritsch 孤立前场",
          "J 组对阿根廷 1 胜 1 负 · 遇强队可收缩 · 定位球偷一个仍是路径",
          "受让 +1.5 高水 · 0-2/1-3 全输 · 0-1/1-1 赢盘"
        ]
      },
      "h2h": {
        "home_wins": 3,
        "draws": 1,
        "away_wins": 0,
        "recent": [
          {
            "year": 2023,
            "comp": "欧国联",
            "score": "2-1",
            "winner": "Spain"
          }
        ],
        "note": "西班牙近年占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-03",
        "name": "Glenn Nyberg",
        "nation": "Sweden",
        "iso": "se",
        "wc_experience": "2026 世界杯 · 32强 M84 主裁 · UEFA 精英 · 执法西班牙 vs 奥地利 · 洛杉矶 SoFi",
        "avg_yellow": 4.3,
        "avg_red": 0.11,
        "avg_penalty": 0.3,
        "home_win_rate": 54,
        "bias_index": 52,
        "bias_note": "瑞典主裁执法洛杉矶 SoFi 午间场。西班牙 -1.5@0.87 深盘热门 vs 奥地利铁桶；对 Yamal/Williams 速度犯规与 Sabitzer 绞杀 Rodri 尺度是关键，深盘场早期进球常改盘口节奏。",
        "tendencies": [
          "FIFA 官方主裁 · Glenn Nyberg（瑞典）",
          "第四官员 Dahane Beida（毛里塔尼亚）",
          "深盘单场淘汰 · 西班牙须净胜 2+ 穿 -1.5",
          "对战术犯规与禁区拉扯判罚尺度偏严",
          "午间开球 · 体能充沛段或决定穿盘"
        ],
        "officials": {
          "referee": "Glenn Nyberg (SWE)",
          "fourth": "Dahane Beida (MTN)"
        },
        "fifa_match_id": "400021519",
        "note": "FIFA M84 · 西班牙 vs 奥地利 · Los Angeles SoFi Stadium",
        "updated": "2026-07-02T13:35:21+08:00"
      },
      "prediction": {
        "home_win": 66,
        "draw": 20,
        "away_win": 14,
        "score": "2-0",
        "confidence": 82,
        "xg_home": 2.18,
        "xg_away": 0.72,
        "key_factor": "32强 M84 · 西班牙 H1 vs 奥地利 J2 · 深盘 · 泊松 2-0/3-0",
        "score_dist": [
          {
            "score": "2-0",
            "prob": 16.1
          },
          {
            "score": "3-0",
            "prob": 13.8
          },
          {
            "score": "1-0",
            "prob": 12.5
          },
          {
            "score": "4-0",
            "prob": 8.9
          },
          {
            "score": "2-1",
            "prob": 7.2
          },
          {
            "score": "3-1",
            "prob": 6.2
          },
          {
            "score": "1-1",
            "prob": 5.6
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M84 · 西班牙 H1 vs 奥地利 J2 · 胜者 M93"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "洛杉矶夏午 · 27°C · 湿度 52% · 降雨概率 5% · 海风 2级 · 干燥；M84 西班牙 vs 奥地利 · 气候影响低 · 深盘穿盘更看战术（27°C 干燥 · SoFi 开放式）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M84 · 西班牙 H1 vs 奥地利 J2 · 深盘 · 泊松 2-0/3-0"
          }
        ],
        "base_home_win": 70.2,
        "base_draw": 18.6,
        "base_away_win": 11.2,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": true,
          "closeXg": false,
          "gap": 1.46,
          "notes": [],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 2.58,
        "xg_poisson_away": 0.45,
        "xg_tier_calibrated": true,
        "score_prob": 16.1,
        "score_top3": [
          {
            "score": "2-0",
            "prob": 16.1
          },
          {
            "score": "3-0",
            "prob": 13.8
          },
          {
            "score": "1-0",
            "prob": 12.5
          }
        ],
        "expected_score": "3-0"
      },
      "weather": {
        "city": "洛杉矶",
        "country": "美国",
        "venue": "SoFi Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 27,
        "humidity": 52,
        "altitude_m": 30,
        "rain_chance": 5,
        "wind": "海风 2级 · 干燥",
        "condition_cn": "洛杉矶夏午",
        "impact_level": "LOW",
        "impact_summary": "M84 西班牙 vs 奥地利 · 气候影响低 · 深盘穿盘更看战术",
        "home_adapt": 88,
        "away_adapt": 85,
        "weather_factors": [
          {
            "label": "27°C 干燥",
            "impact": "低",
            "detail": "北京时间 7月3日 03:00 · 当地 7月2日 12:00 PT"
          },
          {
            "label": "SoFi 开放式",
            "impact": "低",
            "detail": "午间日照 · 双方均适应北美气候"
          }
        ],
        "forecast_updated": "2026-07-03 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "壬寅日",
          "day_summary": "壬寅日——水木相生",
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
        "home_score": 78,
        "away_score": 22,
        "mystic_verdict": "西班牙火土旺，奥地利金水守。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1.5,
        "tier_label": "Spain -1.5 · Austria +1.5",
        "implied_tier": 0.75,
        "tier_gap": 0.75,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Spain（约 72%）",
        "analysis": "M84 · 西班牙 vs 奥地利 · 现 西-1.5@0.87/奥+1.5@1.02 · 大小 2.5/3 大0.86小1.02。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "2-0",
              "prob": 13.2
            },
            {
              "score": "1-0",
              "prob": 12.1
            },
            {
              "score": "3-0",
              "prob": 9.6
            }
          ],
          "one_goal_win_pct": 24.4,
          "two_plus_win_pct": 46.3,
          "full_cover_pct": 44.4,
          "dog_hold_pct": 55.6,
          "fav_win_pct": 70.7,
          "cover_given_win_pct": 65.5,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.7,
          "half_cover_pct": 24.4,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "部分达标净胜=1",
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 2.9,
          "fair_totals_line": 2,
          "over_2_5_pct": 55.1,
          "over_3_pct": 32.6,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥2 约 46.3%；部分达标净胜=1 约 24.4%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 46.3,
          "dog_hold_pct_raw": 53.7
        },
        "spread_odds": {
          "fav": 0.87,
          "dog": 1.02,
          "note": "Spain 0.87 · Austria 1.02"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.9,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 42.8,
          "under_pct": 57.2,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大比分侧 0.86 / 小比分侧 1.02",
          "totals_odds": {
            "over": 0.86,
            "under": 1.02,
            "note": "大比分 0.86 · 小比分 1.02"
          },
          "rational_cn": "超 2.75 球接近五五开（约 42.8%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "market_line_movement": {
          "wc_note": "洛杉矶 neutral · 主客仅为 FIFA 标记",
          "spread_open_cn": "Spain -1.5@0.99 · Austria +1.5@0.83",
          "spread_now_cn": "Spain -1.5@0.87 · Austria +1.5@1.02",
          "totals_now_cn": "大小 2.5/3 · 大 0.86 / 小 1.02",
          "tag": "genuine_strength",
          "tag_cn": "真实挺盘",
          "tag_color": "#5BBF8A",
          "detail_cn": "档位持平 · 热门 0.99→0.87（降水） · 受让 0.83→1.02（抬水） 现盘去水隐含：Spain 51.9% · Austria 48.1%（超收 3%） 模型穿盘（现档 Spain -1.5 · Austria +1.5）：Spain 44.4% · Austria 55.6% 模型−市场：Spain -7.5pp · Austria +7.5pp 期望 ROI@现水：Spain +5.8% · Austria +6.4% 档位向热门加深且热门降水，盘路变化与实力/xG 方向一致，定价支持热门穿盘。",
          "actuarial": {
            "actuarial_type": "genuine_strength",
            "actuarial_cn": "真实挺盘",
            "actuarial_color": "#5BBF8A",
            "actuarial_desc": "档位向热门加深且热门降水，盘路变化与实力/xG 方向一致，定价支持热门穿盘。",
            "summary_cn": "档位持平 · 热门 0.99→0.87（降水） · 受让 0.83→1.02（抬水） 现盘去水隐含：Spain 51.9% · Austria 48.1%（超收 3%） 模型穿盘（现档 Spain -1.5 · Austria +1.5）：Spain 44.4% · Austria 55.6% 模型−市场：Spain -7.5pp · Austria +7.5pp 期望 ROI@现水：Spain +5.8% · Austria +6.4% 档位向热门加深且热门降水，盘路变化与实力/xG 方向一致，定价支持热门穿盘。",
            "line_delta": 0,
            "line_delta_cn": "档位持平",
            "fav_odds_delta": -0.12,
            "dog_odds_delta": 0.19,
            "water_move_cn": "热门 0.99→0.87（降水） · 受让 0.83→1.02（抬水）",
            "open_tier": 1.5,
            "open_tier_label": "Spain -1.5 · Austria +1.5",
            "now_tier": 1.5,
            "implied_tier": 0.75,
            "open_tier_gap": 0.75,
            "now_tier_gap": 0.75,
            "open_devig": {
              "fav_pct": 47.9,
              "dog_pct": 52.1,
              "overround_pct": 4.9
            },
            "now_devig": {
              "fav_pct": 51.9,
              "dog_pct": 48.1,
              "overround_pct": 3
            },
            "model_cover_open_pct": 44.4,
            "model_cover_now_pct": 44.4,
            "model_dog_cover_now_pct": 55.6,
            "market_fav_cover_now_pct": 51.9,
            "market_dog_cover_now_pct": 48.1,
            "model_vs_market_fav_pp": -7.5,
            "model_vs_market_dog_pp": 7.5,
            "fav_roi_pct": 5.8,
            "dog_roi_pct": 6.4,
            "fav_name": "Spain",
            "dog_name": "Austria"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "genuine_strength",
          "actuarial_cn": "真实挺盘",
          "actuarial_color": "#5BBF8A",
          "actuarial_desc": "档位向热门加深且热门降水，盘路变化与实力/xG 方向一致，定价支持热门穿盘。",
          "summary_cn": "档位持平 · 热门 0.99→0.87（降水） · 受让 0.83→1.02（抬水） 现盘去水隐含：Spain 51.9% · Austria 48.1%（超收 3%） 模型穿盘（现档 Spain -1.5 · Austria +1.5）：Spain 44.4% · Austria 55.6% 模型−市场：Spain -7.5pp · Austria +7.5pp 期望 ROI@现水：Spain +5.8% · Austria +6.4% 档位向热门加深且热门降水，盘路变化与实力/xG 方向一致，定价支持热门穿盘。",
          "line_delta": 0,
          "line_delta_cn": "档位持平",
          "fav_odds_delta": -0.12,
          "dog_odds_delta": 0.19,
          "water_move_cn": "热门 0.99→0.87（降水） · 受让 0.83→1.02（抬水）",
          "open_tier": 1.5,
          "open_tier_label": "Spain -1.5 · Austria +1.5",
          "now_tier": 1.5,
          "implied_tier": 0.75,
          "open_tier_gap": 0.75,
          "now_tier_gap": 0.75,
          "open_devig": {
            "fav_pct": 47.9,
            "dog_pct": 52.1,
            "overround_pct": 4.9
          },
          "now_devig": {
            "fav_pct": 51.9,
            "dog_pct": 48.1,
            "overround_pct": 3
          },
          "model_cover_open_pct": 44.4,
          "model_cover_now_pct": 44.4,
          "model_dog_cover_now_pct": 55.6,
          "market_fav_cover_now_pct": 51.9,
          "market_dog_cover_now_pct": 48.1,
          "model_vs_market_fav_pp": -7.5,
          "model_vs_market_dog_pp": 7.5,
          "fav_roi_pct": 5.8,
          "dog_roi_pct": 6.4,
          "fav_name": "Spain",
          "dog_name": "Austria"
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
          "tendency_cn": "更倾向让球盘（西班牙穿盘）",
          "tendency_reason_cn": "西 -1.5@0.87 临场低水挺穿 · xG 2.2:0.7 · ★西-1.5 · 大2.5/3@0.86副项（R9不打副项小）。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "confidence_reason_cn": "★让球：-1.5低水0.87+模型深盘一致 · 奥+1.5@1.02高水防穿 · 大小升线大侧降水作副项。",
          "spread": {
            "side": "fav",
            "label_cn": "西班牙 -1.5 @0.87",
            "reason_cn": "H1 vs J2 · -1.5 0.87 低水 · 2-0/3-0 穿盘路径 · 模型约58% · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2.5/3 @0.86",
            "reason_cn": "2.5→2.5/3升线+大0.86低水 · 3球大赢半/4+全赢 · 副项 · R9不打副项小。",
            "manual_override": true,
            "recommended_side": "under",
            "skipped": true,
            "skip_reason_cn": "大信心仅绑★=大小，副项大小不出（R9）"
          },
          "pick_meta": {
            "model_side": "over",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "over",
            "market_side": "over",
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
            "over_pct": 42.8,
            "line_gap": 0.75
          },
          "picked_at": "2026-07-03-kickoff",
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
          "home_win": 66,
          "draw": 20,
          "away_win": 14
        },
        "display_summary": {
          "fav_name": "Spain",
          "expected_total_goals": 2.7,
          "poisson_fav_win_pct": 69.5,
          "small_lead_pct": 25.3,
          "small_example_score": "1-0",
          "small_example_pct": 13.2,
          "big_cover_pct": 44.2,
          "big_example_score": "2-0",
          "big_example_pct": 13.8,
          "win_shape": {
            "fav_name": "Spain",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 33.8%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 13.2,
                "pct": 18.9
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.1,
                "pct": 17.5
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 23.5,
                "pct": 33.8
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 20.7,
                "pct": 29.8
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 36.4
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 29.8
              }
            ],
            "fav_win_pct": 66
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 32.3 分",
            "first_goal_wait": 32.3,
            "fast_pct": 60.5,
            "moderate_pct": 14.7,
            "slow_pct": 24.8,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 60.5
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.7
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 24.8
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Spain：Carvajal 存疑 · Austria：Laimer 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M84 西班牙 vs 奥地利 · 气候影响低 · 深盘穿盘更看战术"
            }
          ],
          "xg_context": {
            "baseline_home": 2.18,
            "baseline_away": 0.72,
            "adjusted_home": 2.1,
            "adjusted_away": 0.69,
            "note": "基准 xG 2.18–0.72 → 调整后 2.1–0.69"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 0.75,
            "implied_tier_label": "Spain -0.75 · Austria +0.75",
            "market_tier_label": "Spain -1.5 · Austria +1.5",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75 · 部分达标净胜=1 约 24.9%"
          },
          "win_outlook": {
            "fav_name": "Spain",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 36.4
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 29.8
              }
            ],
            "margin_line_cn": "Spain · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
            "margin_meet_pct": 50.4,
            "margin_half_pct": 25.3,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "部分达标净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.79,
            "totals_line_gap": 0.75,
            "totals_high_pct": 40.5,
            "totals_low_pct": 59.5,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 27,
            "win_margin2_low_total_pct": 13.8,
            "win_margin2_high_total_pct": 30.4,
            "readout_cn": "取胜约 66%；若取胜，以「险胜收工」为主（36.4%）。 对着赛前净胜参考，净胜≥2（全达标）约 50.4%；部分达标净胜=1 约 25.3%；对着总进球参考 2.75，模型超线概率约 40.5%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 2.75。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "2-0",
              "pct": 13.6
            },
            {
              "score": "1-0",
              "pct": 13
            },
            {
              "score": "3-0",
              "pct": 9.5
            }
          ],
          "totals_view": {
            "expected_total": 2.7,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 40.5,
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
              "over_pct": 40.5,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.7 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Spain -1.5 穿盘：有达标可能",
            "sub_cn": "Spain 胜 70% · 胜后穿 64.4% · Austria +1.5 守 56.3% 进球氛围：几乎五五开",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Spain",
              "dog_name": "Austria",
              "fav_handicap_cn": "Spain -1.5",
              "dog_handicap_cn": "Austria +1.5",
              "market_expect_cn": "Spain -1.5 · 净胜≥2",
              "meet_pct": 43.7,
              "dog_hold_pct": 56.3,
              "fav_win_pct": 70,
              "cover_given_win_pct": 64.4,
              "full_cover_pct_raw": 45,
              "meet_pct_label": "Spain -1.5 穿盘概率（校准）",
              "dog_hold_label": "Austria +1.5 守住概率（校准）",
              "two_stage_cn": "Spain 取胜约 70% · 赢球后穿盘约 64.4% · Austria +1.5 守住约 56.3%",
              "grid_tail_pct": 0.6,
              "verdict_cn": "有达标可能",
              "headline_cn": "Spain -1.5 穿盘：有达标可能",
              "pill_cn": "Spain 胜 70% · 胜后穿 64.4% · Austria +1.5 守 56.3%",
              "detail_cn": "Spain 取胜约 70% · 赢球后穿盘约 64.4% · Austria +1.5 守住约 56.3%；穿盘与受让守住均有一定空间（部分达标净胜=1 约 24.9%）。",
              "extra_stats_cn": "部分达标净胜=1 约 24.9%",
              "full_cover_pct": 43.7,
              "half_cover_pct": 24.9,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "部分达标净胜=1",
              "tier_gap": 0.75,
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
              "over_pct": 40.5,
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
                  "fav_name": "Spain",
                  "dog_name": "Austria",
                  "fav_handicap_cn": "Spain -1.5",
                  "dog_handicap_cn": "Austria +1.5",
                  "market_expect_cn": "Spain -1.5 · 净胜≥2",
                  "meet_pct": 43.7,
                  "dog_hold_pct": 56.3,
                  "fav_win_pct": 70,
                  "cover_given_win_pct": 64.4,
                  "full_cover_pct_raw": 45,
                  "meet_pct_label": "Spain -1.5 穿盘概率（校准）",
                  "dog_hold_label": "Austria +1.5 守住概率（校准）",
                  "two_stage_cn": "Spain 取胜约 70% · 赢球后穿盘约 64.4% · Austria +1.5 守住约 56.3%",
                  "grid_tail_pct": 0.6,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Spain -1.5 穿盘：有达标可能",
                  "pill_cn": "Spain 胜 70% · 胜后穿 64.4% · Austria +1.5 守 56.3%",
                  "detail_cn": "Spain 取胜约 70% · 赢球后穿盘约 64.4% · Austria +1.5 守住约 56.3%；穿盘与受让守住均有一定空间（部分达标净胜=1 约 24.9%）。",
                  "extra_stats_cn": "部分达标净胜=1 约 24.9%",
                  "full_cover_pct": 43.7,
                  "half_cover_pct": 24.9,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "部分达标净胜=1",
                  "tier_gap": 0.75,
                  "show_cover": true
                },
                "text": "Spain 胜 70% · 胜后穿 64.4% · Austria +1.5 守 56.3%",
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
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 40.5,
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
              "team": "Spain",
              "first_goal_pct": 75.3,
              "start_score": "1-0",
              "fav_name": "Spain",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 96.7,
              "small_lead_pct": 24.5,
              "big_lead_pct": 61.9,
              "fav_win_pct": 86.4,
              "fav_draw_pct": 10.3,
              "fav_lose_pct": 3.3,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Spain 保持胜果（净胜≥1）",
                  "pct": 86.4
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 10.3
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 3.3
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 33.3 分",
                "first_goal_wait": 33.3,
                "fast_pct": 52.2,
                "moderate_pct": 14.8,
                "slow_pct": 33.1,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 52.2
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.1
                  }
                ]
              },
              "big_delta": 17.7,
              "small_delta": -0.8,
              "narrative": "Spain 先破门（已 1-0） → 「巩固防守」；Austria 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Spain",
                "state_label": "Spain 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 36.4
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 33.8
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 29.8
                  }
                ],
                "margin_line_cn": "Spain · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
                "margin_meet_pct": 61.9,
                "margin_half_pct": 24.5,
                "margin_fail_pct": 24.5,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "部分达标净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.21,
                "totals_line_gap": 0.5,
                "totals_high_pct": 51.2,
                "totals_low_pct": 48.8,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 28.8,
                "win_margin2_low_total_pct": 17.8,
                "win_margin2_high_total_pct": 44.2,
                "readout_cn": "Spain 已 1-0 领先：仍取胜约 86.4%。 对着总进球参考 2.75，模型超线概率约 51.2%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Austria",
              "first_goal_pct": 24.7,
              "start_score": "0-1",
              "fav_name": "Spain",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 68.4,
              "small_lead_pct": 21.8,
              "big_lead_pct": 19.2,
              "fav_win_pct": 41,
              "fav_draw_pct": 27.4,
              "fav_lose_pct": 31.5,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Spain 追平（平局）",
                  "pct": 27.4
                },
                {
                  "key": "win1",
                  "label": "Spain 净胜1球翻盘（如 2-1）",
                  "pct": 21.8
                },
                {
                  "key": "win2",
                  "label": "Spain 净胜≥2球翻盘（如 3-1）",
                  "pct": 19.2
                },
                {
                  "key": "upset_hold",
                  "label": "Austria 保持胜果至终场",
                  "pct": 31.5
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 31.3 分",
                "first_goal_wait": 31.3,
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
              "big_delta": -25,
              "small_delta": -3.5,
              "narrative": "Austria 先破门（已 0-1） → 「巩固防守」；Spain 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.7 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 40.5,
              "type_tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 16,
              "readout_cn": "Spain · 压制局。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
            "xg_home_ht": 0.92,
            "xg_away_ht": 0.3,
            "xg_home_2h": 1.18,
            "xg_away_2h": 0.39,
            "home_win": 50,
            "draw": 38.3,
            "away_win": 11.7,
            "top_score": "0-0",
            "top_score_prob": 29.5,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 29.5
              },
              {
                "score": "1-0",
                "prob": 27.2
              },
              {
                "score": "2-0",
                "prob": 12.5
              }
            ],
            "ht_goals_expected": 1.22,
            "ht_over_0_5_pct": 70.5,
            "ht_over_1_5_pct": 34.4,
            "pick": "home",
            "pick_name": "Spain",
            "summary_cn": "半场 xG 0.92–0.3（约占全场 44%） · 最可能 0-0（29.5%） · 胜平负 50/38.3/11.7 · 半场≥1球约 70.5%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Spain · 压制局。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75 · 部分达标净胜=1 约 24.9%（模型微调：主胜 -4% · 平 +1% · 客 +3%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.9,
          "xg_gap": 1.46,
          "xg_home": 2.18,
          "xg_away": 0.72,
          "xg_baseline_home": 2.18,
          "xg_baseline_away": 0.72,
          "xg_note": "结构推演用基准 xG 2.18–0.72（进球氛围用调整后 2.1–0.69）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Spain",
          "dog_name": "Austria",
          "fav_xg": 2.18,
          "dog_xg": 0.72,
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
          "prob_over_line": 42.8,
          "prob_meet_guess": 54.3,
          "guess_n": 3,
          "prob_4_plus": 31.4,
          "prob_2_or_less": 45.7,
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
          "summary_cn": "【路径·基准 xG】合计 2.9 · Spain 2.18 / Austria 0.72 → 主路径「铁局/小比分」约 65%。 至少 3 球约 54.3% · 超 2.75 约 42.8% · ≤2球 45.7%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 1.5,
        "tier_label": "Spain -1.5 · Austria +1.5",
        "totals_line": 2.75,
        "over_pct": 40.5,
        "fair_line": 2,
        "line_gap": 0.75,
        "full_cover_pct": 43.7,
        "fav_win_pct": 70,
        "cover_given_win_pct": 64.4,
        "spread_level": "possible",
        "spread_market_expect": "Spain -1.5 · 净胜≥2",
        "line_move_tag": "genuine_strength",
        "line_move_cn": "真实挺盘",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（西班牙穿盘）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "西班牙 -1.5 @0.87",
        "agent_totals_cn": null,
        "agent_totals_skipped": true,
        "agent_totals_skip_cn": "大信心仅绑★=大小，副项大小不出（R9）",
        "ko_totals_policy": "R9",
        "totals_level": "neutral",
        "totals_show_lean": false,
        "totals_lean_side": "neutral"
      }
    },
    {
      "id": "m83",
      "fifa_match_number": 83,
      "fifa_match_id": "400021526",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M83 · K组亚军 vs L组亚军",
      "knockout_next": "胜者 → M93（16强 · 对 M84 胜者）",
      "date": "2026-07-02",
      "time": "19:00",
      "time_local": "19:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "07:00",
      "date_beijing": "7月3日",
      "time_beijing_full": "北京时间 7月3日 07:00",
      "venue": "BMO Field",
      "city": "Toronto, Canada",
      "note": "32强 M83 · 葡萄牙 vs 克罗地亚 · 多伦多",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-3-3",
          "home": "Costa; Cancelo, Dias, Inácio, Mendes; Neves, Vitinha, B. Fernandes; Leão, Ronaldo, Jota",
          "away": "Livaković; Juranović, Gvardiol, Šutalo, Perišić; Modrić, Brozović, Kovačić; Rebić, Kramarić, Petković",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Portugal",
        "iso": "pt",
        "flag": "",
        "fifa_rank": 6,
        "rating": 88,
        "form": [
          "W",
          "D",
          "D",
          "W",
          "W"
        ],
        "coach": "Roberto Martínez",
        "stars": [
          {
            "name": "Cristiano Ronaldo",
            "pos": "ST",
            "club": "Al Nassr",
            "rating": 8.8,
            "desc": "定位球+禁区 · 淘汰赛须兑现"
          },
          {
            "name": "Bruno Fernandes",
            "pos": "AM",
            "club": "Man Utd",
            "rating": 8.7,
            "desc": "最后一传 · 肋部穿盘"
          },
          {
            "name": "Vitinha",
            "pos": "CM",
            "club": "PSG",
            "rating": 8.5,
            "desc": "控球节拍 · 对克中场绞杀"
          }
        ],
        "star": {
          "name": "Cristiano Ronaldo",
          "pos": "ST",
          "club": "Al Nassr",
          "rating": 8.8,
          "desc": "K 组亚军 · 终结点"
        },
        "injuries": [
          {
            "player": "Cristiano Ronaldo",
            "status": "FIT",
            "note": "K 组 5 分出线 · 淘汰赛须兑现 · 预计首发 ST",
            "confirmed": true
          },
          {
            "player": "Bruno Fernandes",
            "status": "FIT",
            "note": "肋部穿盘 · 定位球",
            "confirmed": true
          },
          {
            "player": "Vitinha",
            "status": "FIT",
            "note": "控球节拍 · 对 Modrić 中场博弈",
            "confirmed": true
          },
          {
            "player": "Pepe",
            "status": "DOUBT",
            "note": "41 岁中卫 · 连续作战体能 · 或轮换 Íñacio",
            "confirmed": false
          }
        ],
        "rumors": [
          "Martínez：「克罗地亚 L 组 6 分不虚——Modrić 仍是世界级，但我们会升压」",
          "预计 4-3-3：Costa; Cancelo, Dias, Inácio; Mendes; Palhinha, Vitinha, B. Fernandes; Leão, Ronaldo, Jota",
          "K 组 0-0 哥伦比亚暴露破密集难题 · 临场升 -0.5/1@0.90 市场略挺葡",
          "Agent ★克罗地亚 +0.5/1@0.99 · 模型 1-1 概率高 · 副项大 2.5/3",
          "更衣室：C罗与 B 费分工清晰 · Martínez 强调「别被大赛经验吓住」"
        ]
      },
      "away": {
        "name": "Croatia",
        "iso": "hr",
        "flag": "",
        "fifa_rank": 10,
        "rating": 84,
        "form": [
          "W",
          "W",
          "L",
          "D",
          "W"
        ],
        "coach": "Zlatko Dalić",
        "stars": [
          {
            "name": "Luka Modrić",
            "pos": "CM",
            "club": "Real Madrid",
            "rating": 8.7,
            "desc": "大赛经验 · 控制节奏拖入均衡"
          },
          {
            "name": "Joško Gvardiol",
            "pos": "CB",
            "club": "Man City",
            "rating": 8.4,
            "desc": "左路出球 · 防线核心"
          },
          {
            "name": "Andrej Kramarić",
            "pos": "ST",
            "club": "Hoffenheim",
            "rating": 8,
            "desc": "支点 · 定位球威胁"
          }
        ],
        "star": {
          "name": "Luka Modrić",
          "pos": "CM",
          "club": "Real Madrid",
          "rating": 8.7,
          "desc": "L 组亚军 · 节拍器"
        },
        "injuries": [
          {
            "player": "Luka Modrić",
            "status": "FIT",
            "note": "最后一届世界杯 · 节拍器预计首发",
            "confirmed": true
          },
          {
            "player": "Joško Gvardiol",
            "status": "FIT",
            "note": "防线核心 · 左路出球",
            "confirmed": true
          },
          {
            "player": "Andrej Kramarić",
            "status": "FIT",
            "note": "支点 · 定位球",
            "confirmed": true
          },
          {
            "player": "Brozović",
            "status": "DOUBT",
            "note": "小腿轻微疲劳 · 赛前队检",
            "confirmed": false
          }
        ],
        "rumors": [
          "Dalić：「葡萄牙有 C罗和 B费，但 1-1 是我们能接受的——+0.5/1 结构对我们有利」",
          "预计 4-3-3：Livaković; Juranović, Gvardiol, Šutalo, Perišić; Modrić, Kovačić; Rebić, Sarr, Kramarić",
          "L 组曾 2-4 英格兰半场对攻 · 证明进攻可以 · 淘汰赛或更务实",
          "升档 +0.5/1@0.99 · 1-1 全赢 / 1-0 输半 / 0-1 全赢",
          "更衣室：Modrić 赛前称「这可能是我的最后一场世界杯」· 全队士气凝聚"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 1,
        "away_wins": 2,
        "recent": [
          {
            "year": 2016,
            "comp": "欧洲杯",
            "score": "1-0",
            "winner": "Portugal"
          }
        ],
        "note": "大赛经验均丰富"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-03",
        "name": "Espen Eskås",
        "nation": "Norway",
        "iso": "no",
        "wc_experience": "2026 世界杯 · 32强 M83 主裁 · UEFA · 执法葡萄牙 vs 克罗地亚 · 多伦多 BMO Field",
        "avg_yellow": 4.5,
        "avg_red": 0.13,
        "avg_penalty": 0.28,
        "home_win_rate": 50,
        "bias_index": 50,
        "bias_note": "挪威主裁执法多伦多夏夜。葡升 -0.5/1@0.90 vs 克 +0.5/1@0.99 均衡盘；C罗 vs 莫德里奇经验对决，对身体对抗与战术犯规尺度需平衡，牌面或影响下半场节奏。",
        "tendencies": [
          "FIFA 官方主裁 · Espen Eskås（挪威）",
          "32强均衡盘 · 1-1 路径常见",
          "多伦多湿度偏高 · 补水暂停后犯规尺度或收紧",
          "对老将战术犯规容忍度中等"
        ],
        "officials": {
          "referee": "Espen Eskås (NOR)"
        },
        "fifa_match_id": "400021526",
        "note": "FIFA M83 · 葡萄牙 vs 克罗地亚 · Toronto BMO Field",
        "updated": "2026-07-02T13:35:21+08:00"
      },
      "prediction": {
        "home_win": 39,
        "draw": 26,
        "away_win": 35,
        "score": "1-1",
        "confidence": 68,
        "xg_home": 1.58,
        "xg_away": 1.32,
        "key_factor": "32强 M83 · 葡萄牙 K2 vs 克罗地亚 L2 · C罗 vs 莫德里奇 · 泊松 1-1/2-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 11.3
          },
          {
            "score": "1-0",
            "prob": 10.7
          },
          {
            "score": "2-1",
            "prob": 9.7
          },
          {
            "score": "2-0",
            "prob": 9.3
          },
          {
            "score": "0-1",
            "prob": 6.5
          },
          {
            "score": "0-0",
            "prob": 6.2
          },
          {
            "score": "1-2",
            "prob": 5.9
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M83 · 葡萄牙 K2 vs 克罗地亚 L2 · 胜者 M93 对西班牙"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "多伦多夏夜湿热 · 24°C · 湿度 72% · 降雨概率 25% · 东南风 2级 · 闷热；M83 葡萄牙 vs 克罗地亚 · 湿度偏高 · 70 分钟后体能或分化（24°C · 湿度72% · 开放式草皮）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M83 · 葡萄牙 K2 vs 克罗地亚 L2 · C罗 vs 莫德里奇 · 泊松 1-1/2-1"
          }
        ],
        "base_home_win": 43.3,
        "base_draw": 24.7,
        "base_away_win": 32,
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
        "xg_poisson_home": 1.73,
        "xg_poisson_away": 1.05,
        "xg_tier_calibrated": true,
        "score_prob": 11.3,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 11.3
          },
          {
            "score": "1-0",
            "prob": 10.7
          },
          {
            "score": "2-1",
            "prob": 9.7
          }
        ],
        "expected_score": "2-1"
      },
      "weather": {
        "city": "多伦多",
        "country": "加拿大",
        "venue": "BMO Field",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 24,
        "humidity": 72,
        "altitude_m": 90,
        "rain_chance": 25,
        "wind": "东南风 2级 · 闷热",
        "condition_cn": "多伦多夏夜湿热",
        "impact_level": "MEDIUM",
        "impact_summary": "M83 葡萄牙 vs 克罗地亚 · 湿度偏高 · 70 分钟后体能或分化",
        "home_adapt": 86,
        "away_adapt": 86,
        "weather_factors": [
          {
            "label": "24°C · 湿度72%",
            "impact": "中",
            "detail": "北京时间 7月3日 07:00 · 当地 7月2日 19:00 ET"
          },
          {
            "label": "开放式草皮",
            "impact": "中",
            "detail": "均衡盘场 · 湿热拖慢转换速度"
          }
        ],
        "forecast_updated": "2026-07-03 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "壬寅日",
          "day_summary": "壬寅日——水木相生",
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
        "home_score": 52,
        "away_score": 48,
        "mystic_verdict": "葡萄牙火土略旺，克罗地亚金水韧。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.75,
        "tier_label": "Portugal -0.75 · Croatia +0.75",
        "implied_tier": 0,
        "tier_gap": 0.75,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Portugal（约 58%）",
        "analysis": "M83 · 葡萄牙 vs 克罗地亚 · 现 葡-0.5/1@0.90/克+0.5/1@0.99 · 大小 2.5/3 大0.95小0.93。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.5
            },
            {
              "score": "2-1",
              "prob": 9.1
            },
            {
              "score": "1-0",
              "prob": 8.7
            }
          ],
          "one_goal_win_pct": 21.6,
          "two_plus_win_pct": 21.9,
          "full_cover_pct": 50,
          "dog_hold_pct": 50,
          "fav_win_pct": 43.5,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.2,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.13,
          "dog_cover_ev": 0.13,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.9,
          "fair_totals_line": 2,
          "over_2_5_pct": 55.3,
          "over_3_pct": 32.9,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 43.5%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 43.5,
          "dog_hold_pct_raw": 56.5
        },
        "spread_odds": {
          "fav": 0.9,
          "dog": 0.99,
          "note": "Portugal 0.9 · Croatia 0.99"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.9,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 43.8,
          "under_pct": 56.2,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大比分侧 0.95 / 小比分侧 0.93",
          "totals_odds": {
            "over": 0.95,
            "under": 0.93,
            "note": "大比分 0.95 · 小比分 0.93"
          },
          "rational_cn": "超 2.75 球接近五五开（约 43.8%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "market_line_movement": {
          "wc_note": "多伦多 neutral · 主客仅为 FIFA 标记",
          "spread_open_cn": "Portugal -0.5@0.82 · Croatia +0.5@1",
          "spread_now_cn": "Portugal -0.5/1@0.9 · Croatia +0.5/1@0.99",
          "totals_now_cn": "大小 2.5/3 · 大 0.95 / 小 0.93",
          "tag": "book_trap_fav",
          "tag_cn": "精算诱上",
          "tag_color": "#D95F6A",
          "detail_cn": "升 0.25 档 · 热门 0.82→0.9（抬水） · 受让 1→0.99（降水） 现盘去水隐含：Portugal 51.2% · Croatia 48.8%（超收 2.9%） 模型穿盘（现档 Portugal -0.75 · Croatia +0.75）：Portugal 50% · Croatia 50% 模型−市场：Portugal -1.2pp · Croatia +1.2pp 期望 ROI@现水：Portugal -5% · Croatia +49.5% 升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
          "actuarial": {
            "actuarial_type": "book_trap_fav",
            "actuarial_cn": "精算诱上",
            "actuarial_color": "#D95F6A",
            "actuarial_desc": "升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
            "summary_cn": "升 0.25 档 · 热门 0.82→0.9（抬水） · 受让 1→0.99（降水） 现盘去水隐含：Portugal 51.2% · Croatia 48.8%（超收 2.9%） 模型穿盘（现档 Portugal -0.75 · Croatia +0.75）：Portugal 50% · Croatia 50% 模型−市场：Portugal -1.2pp · Croatia +1.2pp 期望 ROI@现水：Portugal -5% · Croatia +49.5% 升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
            "line_delta": 0.25,
            "line_delta_cn": "升 0.25 档",
            "fav_odds_delta": 0.08,
            "dog_odds_delta": -0.01,
            "water_move_cn": "热门 0.82→0.9（抬水） · 受让 1→0.99（降水）",
            "open_tier": 0.5,
            "open_tier_label": "Portugal -0.5 · Croatia +0.5",
            "now_tier": 0.75,
            "implied_tier": 0,
            "open_tier_gap": 0.5,
            "now_tier_gap": 0.75,
            "open_devig": {
              "fav_pct": 52.4,
              "dog_pct": 47.6,
              "overround_pct": 4.9
            },
            "now_devig": {
              "fav_pct": 51.2,
              "dog_pct": 48.8,
              "overround_pct": 2.9
            },
            "model_cover_open_pct": 50,
            "model_cover_now_pct": 50,
            "model_dog_cover_now_pct": 50,
            "market_fav_cover_now_pct": 51.2,
            "market_dog_cover_now_pct": 48.8,
            "model_vs_market_fav_pp": -1.2,
            "model_vs_market_dog_pp": 1.2,
            "fav_roi_pct": -5,
            "dog_roi_pct": 49.5,
            "fav_name": "Portugal",
            "dog_name": "Croatia"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "book_trap_fav",
          "actuarial_cn": "精算诱上",
          "actuarial_color": "#D95F6A",
          "actuarial_desc": "升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
          "summary_cn": "升 0.25 档 · 热门 0.82→0.9（抬水） · 受让 1→0.99（降水） 现盘去水隐含：Portugal 51.2% · Croatia 48.8%（超收 2.9%） 模型穿盘（现档 Portugal -0.75 · Croatia +0.75）：Portugal 50% · Croatia 50% 模型−市场：Portugal -1.2pp · Croatia +1.2pp 期望 ROI@现水：Portugal -5% · Croatia +49.5% 升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
          "line_delta": 0.25,
          "line_delta_cn": "升 0.25 档",
          "fav_odds_delta": 0.08,
          "dog_odds_delta": -0.01,
          "water_move_cn": "热门 0.82→0.9（抬水） · 受让 1→0.99（降水）",
          "open_tier": 0.5,
          "open_tier_label": "Portugal -0.5 · Croatia +0.5",
          "now_tier": 0.75,
          "implied_tier": 0,
          "open_tier_gap": 0.5,
          "now_tier_gap": 0.75,
          "open_devig": {
            "fav_pct": 52.4,
            "dog_pct": 47.6,
            "overround_pct": 4.9
          },
          "now_devig": {
            "fav_pct": 51.2,
            "dog_pct": 48.8,
            "overround_pct": 2.9
          },
          "model_cover_open_pct": 50,
          "model_cover_now_pct": 50,
          "model_dog_cover_now_pct": 50,
          "market_fav_cover_now_pct": 51.2,
          "market_dog_cover_now_pct": 48.8,
          "model_vs_market_fav_pp": -1.2,
          "model_vs_market_dog_pp": 1.2,
          "fav_roi_pct": -5,
          "dog_roi_pct": 49.5,
          "fav_name": "Portugal",
          "dog_name": "Croatia"
        },
        "totals_pick_layers": {
          "model_side": "under",
          "situation_side": "neutral",
          "market_line_side": "under",
          "market_odds_side": "neutral",
          "market_side": "under",
          "recommended_side": "under",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "under",
            "line": "under",
            "odds": "neutral",
            "situation": "neutral"
          },
          "vote_summary_cn": "小球(model) · 小球(line) · 观望(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘（克罗地亚受让）",
          "tendency_reason_cn": "葡升-0.5/1但0.90/0.99近均衡 · 模型1-1概率高 · ★克+0.5/1 · 大2.5/3副项。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "confidence_reason_cn": "★受让：升档后克+0.5/1@0.99 · 1-1/0-1全赢/1-0输半 · 大小升线后趋均衡不绑高信心。",
          "spread": {
            "side": "dog",
            "label_cn": "克罗地亚 +0.5/1 @0.99",
            "reason_cn": "K2 vs L2 · 葡升-0.5/1仍0.99高水侧 · 1-1全赢/1-0输半/0-1全赢 · 模型守盘约54% · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2.5/3 @0.95",
            "reason_cn": "2/2.5→2.5/3升线 · 大0.95小0.93近均衡略偏大 · 副项 · R9不打副项小。",
            "manual_override": true,
            "recommended_side": "under"
          },
          "pick_meta": {
            "model_side": "under",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "neutral",
            "market_side": "over",
            "pick_side": "over",
            "recommended_side": "under",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": true,
            "conflict_cn": null,
            "votes": {
              "model": "under",
              "line": "under",
              "odds": "neutral",
              "situation": "neutral"
            },
            "vote_summary_cn": "小球(model) · 小球(line) · 观望(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 43.8,
            "line_gap": 0.75
          },
          "picked_at": "2026-07-03-kickoff",
          "ko_totals_policy": {
            "enabled": true,
            "rule_id": "R9",
            "rule_cn": "★=大小无模型/盘冲突 · 副项仅大球 · 大信心仅绑★=大小",
            "applied_at": "buildDepthCalibration"
          }
        },
        "applied_delta": {
          "home_win": -4,
          "draw": 1,
          "away_win": 3
        },
        "adjustment_note": "模型微调：主胜 -4% · 平 +1% · 客 +3%",
        "adjusted_probs": {
          "home_win": 39,
          "draw": 26,
          "away_win": 35
        },
        "display_summary": {
          "fav_name": "Portugal",
          "expected_total_goals": 2.61,
          "poisson_fav_win_pct": 42.2,
          "small_lead_pct": 22.2,
          "small_example_score": "1-0",
          "small_example_pct": 10.4,
          "big_cover_pct": 20,
          "big_example_score": "2-0",
          "big_example_pct": 7.4,
          "win_shape": {
            "fav_name": "Portugal",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 28.1%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 10.4,
                "pct": 24.5
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.8,
                "pct": 28.1
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 10.9,
                "pct": 25.9
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 9.1,
                "pct": 21.5
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 52.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 25.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 21.5
              }
            ],
            "fav_win_pct": 39
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 34.2 分",
            "first_goal_wait": 34.2,
            "fast_pct": 58.4,
            "moderate_pct": 14.8,
            "slow_pct": 26.8,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 58.4
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 26.8
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Portugal：Pepe 存疑 · Croatia：Brozović 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M83 葡萄牙 vs 克罗地亚 · 湿度偏高 · 70 分钟后体能或分化"
            }
          ],
          "xg_context": {
            "baseline_home": 1.58,
            "baseline_away": 1.32,
            "adjusted_home": 1.43,
            "adjusted_away": 1.2,
            "note": "基准 xG 1.58–1.32 → 调整后 1.43–1.2"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 0.75,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Portugal -0.75 · Croatia +0.75",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75"
          },
          "win_outlook": {
            "fav_name": "Portugal",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 52.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 25.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 21.5
              }
            ],
            "margin_line_cn": "Portugal · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 49.3,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.63,
            "totals_line_gap": 0.75,
            "totals_high_pct": 37.7,
            "totals_low_pct": 62.3,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 17.8,
            "win_margin2_low_total_pct": 7.4,
            "win_margin2_high_total_pct": 12.6,
            "readout_cn": "取胜约 39%；若取胜，以「险胜收工」为主（52.6%）。 对着赛前净胜参考，净胜≥1（全达标）约 49.3%；对着总进球参考 2.75，模型超线概率约 37.7%。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.4
            },
            {
              "score": "1-0",
              "pct": 10.3
            },
            {
              "score": "2-1",
              "pct": 8.9
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 37.7,
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
              "over_pct": 37.7,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.6 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Portugal -0.75 穿盘：有达标可能",
            "sub_cn": "Portugal 胜 42.3% · 胜后穿 100% · Croatia +0.75 守 50.6% 进球氛围：略偏闷",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Portugal",
              "dog_name": "Croatia",
              "fav_handicap_cn": "Portugal -0.75",
              "dog_handicap_cn": "Croatia +0.75",
              "market_expect_cn": "Portugal -0.75 · 净胜≥1",
              "meet_pct": 49.4,
              "dog_hold_pct": 50.6,
              "fav_win_pct": 42.3,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 42.3,
              "meet_pct_label": "Portugal -0.75 穿盘概率（校准）",
              "dog_hold_label": "Croatia +0.75 守住概率（校准）",
              "two_stage_cn": "Portugal 取胜约 42.3% · 赢球后穿盘约 100% · Croatia +0.75 守住约 50.6%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Portugal -0.75 穿盘：有达标可能",
              "pill_cn": "Portugal 胜 42.3% · 胜后穿 100% · Croatia +0.75 守 50.6%",
              "detail_cn": "Portugal 取胜约 42.3% · 赢球后穿盘约 100% · Croatia +0.75 守住约 50.6%（泊松 raw 42.3% → 校准 49.4%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 49.4,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": 0.75,
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
              "over_pct": 37.7,
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
                  "fav_name": "Portugal",
                  "dog_name": "Croatia",
                  "fav_handicap_cn": "Portugal -0.75",
                  "dog_handicap_cn": "Croatia +0.75",
                  "market_expect_cn": "Portugal -0.75 · 净胜≥1",
                  "meet_pct": 49.4,
                  "dog_hold_pct": 50.6,
                  "fav_win_pct": 42.3,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 42.3,
                  "meet_pct_label": "Portugal -0.75 穿盘概率（校准）",
                  "dog_hold_label": "Croatia +0.75 守住概率（校准）",
                  "two_stage_cn": "Portugal 取胜约 42.3% · 赢球后穿盘约 100% · Croatia +0.75 守住约 50.6%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Portugal -0.75 穿盘：有达标可能",
                  "pill_cn": "Portugal 胜 42.3% · 胜后穿 100% · Croatia +0.75 守 50.6%",
                  "detail_cn": "Portugal 取胜约 42.3% · 赢球后穿盘约 100% · Croatia +0.75 守住约 50.6%（泊松 raw 42.3% → 校准 49.4%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 49.4,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.75,
                  "show_cover": true
                },
                "text": "Portugal 胜 42.3% · 胜后穿 100% · Croatia +0.75 守 50.6%",
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
                  "over_pct": 37.7,
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
              "team": "Portugal",
              "first_goal_pct": 54.4,
              "start_score": "1-0",
              "fav_name": "Portugal",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 87.1,
              "small_lead_pct": 29.7,
              "big_lead_pct": 36.6,
              "fav_win_pct": 66.3,
              "fav_draw_pct": 20.8,
              "fav_lose_pct": 13,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Portugal 保持胜果（净胜≥1）",
                  "pct": 66.3
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 20.8
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 13
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.5 分",
                "first_goal_wait": 34.5,
                "fast_pct": 51,
                "moderate_pct": 14.7,
                "slow_pct": 34.3,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 34.3
                  }
                ]
              },
              "big_delta": 16.6,
              "small_delta": 7.5,
              "narrative": "Portugal 先破门（已 1-0） → 「巩固防守」；Croatia 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Portugal",
                "state_label": "Portugal 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 52.6
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 25.9
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 21.5
                  }
                ],
                "margin_line_cn": "Portugal · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 66.3,
                "margin_half_pct": 0,
                "margin_fail_pct": 29.7,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.14,
                "totals_line_gap": 0.5,
                "totals_high_pct": 49.5,
                "totals_low_pct": 50.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 24.7,
                "win_margin2_low_total_pct": 12.9,
                "win_margin2_high_total_pct": 23.7,
                "readout_cn": "Portugal 已 1-0 领先：仍取胜约 66.3%。 对着总进球参考 2.75，模型超线概率约 49.5%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Croatia",
              "first_goal_pct": 45.6,
              "start_score": "0-1",
              "fav_name": "Portugal",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 43.6,
              "small_lead_pct": 12.8,
              "big_lead_pct": 6.6,
              "fav_win_pct": 19.4,
              "fav_draw_pct": 24.2,
              "fav_lose_pct": 56.5,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Portugal 追平（平局）",
                  "pct": 24.2
                },
                {
                  "key": "win1",
                  "label": "Portugal 净胜1球翻盘（如 2-1）",
                  "pct": 12.8
                },
                {
                  "key": "win2",
                  "label": "Portugal 净胜≥2球翻盘（如 3-1）",
                  "pct": 6.6
                },
                {
                  "key": "upset_hold",
                  "label": "Croatia 保持胜果至终场",
                  "pct": 56.5
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
              "big_delta": -13.4,
              "small_delta": -9.4,
              "narrative": "Croatia 先破门（已 0-1） → 「巩固防守」；Portugal 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.6 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 37.7,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 21,
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
              "draw_trap_pct": 21,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.63,
            "xg_away_ht": 0.53,
            "xg_home_2h": 0.8,
            "xg_away_2h": 0.67,
            "home_win": 31.8,
            "draw": 42.7,
            "away_win": 25.4,
            "top_score": "0-0",
            "top_score_prob": 31.4,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 31.4
              },
              {
                "score": "1-0",
                "prob": 19.8
              },
              {
                "score": "0-1",
                "prob": 16.6
              }
            ],
            "ht_goals_expected": 1.16,
            "ht_over_0_5_pct": 68.6,
            "ht_over_1_5_pct": 32.3,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.63–0.53（约占全场 44%） · 最可能 0-0（31.4%） · 胜平负 31.8/42.7/25.4 · 半场≥1球约 68.6%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Portugal · 常规对抗。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75（模型微调：主胜 -4% · 平 +1% · 客 +3%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.9,
          "xg_gap": 0.26,
          "xg_home": 1.58,
          "xg_away": 1.32,
          "xg_baseline_home": 1.58,
          "xg_baseline_away": 1.32,
          "xg_note": "结构推演用基准 xG 1.58–1.32（进球氛围用调整后 1.43–1.2）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Portugal",
          "dog_name": "Croatia",
          "fav_xg": 1.58,
          "dog_xg": 1.32,
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
          "prob_over_line": 43.8,
          "prob_meet_guess": 55,
          "guess_n": 3,
          "prob_4_plus": 32.5,
          "prob_2_or_less": 45,
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
          "summary_cn": "【路径·基准 xG】合计 2.9 · Portugal 1.58 / Croatia 1.32 → 主路径「铁局/小比分」约 45%。 至少 3 球约 55% · 超 2.75 约 43.8% · ≤2球 45%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.75,
        "tier_label": "Portugal -0.75 · Croatia +0.75",
        "totals_line": 2.75,
        "over_pct": 37.7,
        "fair_line": 2,
        "line_gap": 0.75,
        "full_cover_pct": 49.4,
        "fav_win_pct": 42.3,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Portugal -0.75 · 净胜≥1",
        "line_move_tag": "book_trap_fav",
        "line_move_cn": "精算诱上",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（克罗地亚受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "克罗地亚 +0.5/1 @0.99",
        "agent_totals_cn": "大球 2.5/3 @0.95",
        "agent_totals_skipped": false,
        "agent_totals_skip_cn": null,
        "ko_totals_policy": "R9",
        "totals_level": "mild_low",
        "totals_show_lean": false,
        "totals_lean_side": "dull"
      }
    },
    {
      "id": "m85",
      "fifa_match_number": 85,
      "fifa_match_id": "400021527",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M85 · B组冠军 vs 阿尔及利亚(3rd)",
      "knockout_next": "胜者 → M96（16强 · 对 M87 胜者）",
      "date": "2026-07-02",
      "time": "20:00",
      "time_local": "20:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "11:00",
      "date_beijing": "7月3日",
      "time_beijing_full": "北京时间 7月3日 11:00",
      "venue": "BC Place",
      "city": "Vancouver, Canada",
      "note": "32强 M85 · 瑞士 vs 阿尔及利亚 · 温哥华",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Sommer; Widmer, Akanji, Elvedi, Rodriguez; Xhaka, Freuler; Shaqiri, Rieder, Vargas; Embolo",
          "away": "Mandrea; Atal, Mandi, Belkacemi; Aouar, Bentaleb, Saïd; Mahrez, Bounedjah, Bouanani",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Switzerland",
        "iso": "ch",
        "flag": "",
        "fifa_rank": 19,
        "rating": 82,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "D"
        ],
        "coach": "Murat Yakin",
        "stars": [
          {
            "name": "Granit Xhaka",
            "pos": "CM",
            "club": "Leverkusen",
            "rating": 8.4,
            "desc": "长传调度 · 绞杀马赫雷斯"
          },
          {
            "name": "Manuel Akanji",
            "pos": "CB",
            "club": "Inter",
            "rating": 8.2,
            "desc": "防线领袖 · 出球"
          },
          {
            "name": "Breel Embolo",
            "pos": "ST",
            "club": "Monaco",
            "rating": 8,
            "desc": "支点 · 破密集"
          }
        ],
        "star": {
          "name": "Granit Xhaka",
          "pos": "CM",
          "club": "Leverkusen",
          "rating": 8.4,
          "desc": "B 组头名 · 控场轴心"
        },
        "injuries": [
          {
            "player": "Granit Xhaka",
            "status": "FIT",
            "note": "B 组头名 7 分 · 控场轴心",
            "confirmed": true
          },
          {
            "player": "Manuel Akanji",
            "status": "FIT",
            "note": "防线领袖",
            "confirmed": true
          },
          {
            "player": "Xherdan Shaqiri",
            "status": "FIT",
            "note": "定位球 · 破密集",
            "confirmed": true
          },
          {
            "player": "Embolo",
            "status": "DOUBT",
            "note": "膝部旧伤管理 · 赛前决定能否首发",
            "confirmed": false
          }
        ],
        "rumors": [
          "Yakin：「阿尔及利亚有 Mahrez——我们不会轻敌，但必须主导球权」",
          "预计 4-2-3-1：Sommer; Widmer, Akanji, Elvedi, Rodriguez; Xhaka, Freuler; Shaqiri, Rieder, Vargas; Embolo/Duah",
          "皇冠初 -1@1.02 退至 -0.5@0.98 · 市场不信瑞士深穿 · Agent 转挺受让",
          "B 组 7 分但末轮对加拿大非大胜 · 进攻上限受质疑",
          "更衣室：Xhaka 强调「退盘不是坏事——降低预期反而踢得更开」"
        ]
      },
      "away": {
        "name": "Algeria",
        "iso": "dz",
        "flag": "",
        "fifa_rank": 37,
        "rating": 74,
        "form": [
          "W",
          "D",
          "L",
          "W",
          "D"
        ],
        "coach": "Vahid Halilhodžić",
        "stars": [
          {
            "name": "Riyad Mahrez",
            "pos": "RW",
            "club": "Al Ahli",
            "rating": 8.2,
            "desc": "一对一 · 瑞士退盘后的冷门爆点"
          },
          {
            "name": "Sofiane Feghouli",
            "pos": "RW",
            "club": "Kayserispor",
            "rating": 7.8,
            "desc": "宽度 · 定位球"
          },
          {
            "name": "Ramy Bensebaini",
            "pos": "CB",
            "club": "Dortmund",
            "rating": 7.9,
            "desc": "中卫 · 定位球威胁"
          }
        ],
        "star": {
          "name": "Riyad Mahrez",
          "pos": "RW",
          "club": "Al Ahli",
          "rating": 8.2,
          "desc": "E/F/G/I/J 池第3 · 反击轴"
        },
        "injuries": [
          {
            "player": "Riyad Mahrez",
            "status": "FIT",
            "note": "J 组第3 晋级 · 反击第一爆点",
            "confirmed": true
          },
          {
            "player": "Ramy Bensebaini",
            "status": "FIT",
            "note": "中卫 · 定位球",
            "confirmed": true
          },
          {
            "player": "Aouar",
            "status": "FIT",
            "note": "中场推进",
            "confirmed": true
          },
          {
            "player": "Bounedjah",
            "status": "DOUBT",
            "note": "肌肉轻微不适 · 或由 Bounedjah/Amoura 轮换",
            "confirmed": false
          }
        ],
        "rumors": [
          "Halilhodžić：「瑞士退盘说明他们也有压力——我们 +0.5@0.91 低水，守平就是胜利」",
          "预计 4-3-3 低位+转换 · Mahrez 右路孤立 · 定位球+反击",
          "J 组 4 分压线晋级 · 对阿根廷 0-3 但曾逼平奥地利 · 无包袱",
          "Agent ★阿尔及利亚 +0.5@0.91 · 大小降 2/2.5 小 0.90（R9 副项不打小）",
          "更衣室：Mahrez 赛前社交媒体低调 · 全队强调「非洲球队淘汰赛冷门传统」"
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
            "score": "3-0",
            "winner": "Switzerland"
          }
        ],
        "note": "瑞士历史占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-03",
        "name": "Yael Falcón Pérez",
        "nation": "Argentina",
        "iso": "ar",
        "wc_experience": "2026 世界杯 · 32强 M85 主裁 · CONMEBOL · 执法瑞士 vs 阿尔及利亚 · 温哥华 BC Place",
        "avg_yellow": 4.6,
        "avg_red": 0.12,
        "avg_penalty": 0.31,
        "home_win_rate": 51,
        "bias_index": 50,
        "bias_note": "阿根廷主裁执法温哥华 BC Place。瑞初 -1 退至 -0.5@0.98（市场不信深穿）vs 阿 +0.5@0.91 收水；对马赫雷斯速度犯规与 Xhaka 绞杀尺度受关注，非洲球队身体对抗判罚是关键。",
        "tendencies": [
          "FIFA 官方主裁 · Yael Falcón Pérez（阿根廷）",
          "BC Place 可闭合顶棚 · 气候影响低",
          "瑞退档场 · 受让方低水结构",
          "定位球+转换是阿尔及利亚冷门路径"
        ],
        "officials": {
          "referee": "Yael Falcón Pérez (ARG)"
        },
        "fifa_match_id": "400021527",
        "note": "FIFA M85 · 瑞士 vs 阿尔及利亚 · Vancouver BC Place",
        "updated": "2026-07-02T13:35:21+08:00"
      },
      "prediction": {
        "home_win": 49,
        "draw": 31,
        "away_win": 19,
        "score": "1-1",
        "confidence": 74,
        "xg_home": 1.68,
        "xg_away": 0.95,
        "key_factor": "32强 M85 · 瑞士 B1 vs 阿尔及利亚(3rd) · 沙基里轴 vs 马赫雷斯 · 泊松 2-1/1-0",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.6
          },
          {
            "score": "1-0",
            "prob": 11.3
          },
          {
            "score": "0-1",
            "prob": 9
          },
          {
            "score": "2-1",
            "prob": 8.8
          },
          {
            "score": "0-0",
            "prob": 8
          },
          {
            "score": "2-0",
            "prob": 7.9
          },
          {
            "score": "1-2",
            "prob": 7.1
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M85 · 瑞士 B1 vs 阿尔及利亚(3rd) · 胜者 M96"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "温哥华夏午 · 场内恒温 · 20°C · 湿度 58% · 降雨概率 15% · 封闭场内 · 微风；M85 瑞士 vs 阿尔及利亚 · BC Place 顶棚常闭 · 气候变量小（20°C 场内 · 人工草+封闭）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M85 · 瑞士 B1 vs 阿尔及利亚(3rd) · 沙基里轴 vs 马赫雷斯 · 泊松 2-1/1-0"
          }
        ],
        "base_home_win": 49,
        "base_draw": 31,
        "base_away_win": 19,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 7,
          "ironBucket": true,
          "closeXg": false,
          "gap": 0.73,
          "notes": [
            "热门难破密集"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.4,
        "xg_poisson_away": 1.12,
        "xg_tier_calibrated": true,
        "score_prob": 12.6,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 12.6
          },
          {
            "score": "1-0",
            "prob": 11.3
          },
          {
            "score": "0-1",
            "prob": 9
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "温哥华",
        "country": "加拿大",
        "venue": "BC Place",
        "pitch_surface": "人工草",
        "stadium_type": "可闭合式",
        "temp": 20,
        "humidity": 58,
        "altitude_m": 15,
        "rain_chance": 15,
        "wind": "封闭场内 · 微风",
        "condition_cn": "温哥华夏午 · 场内恒温",
        "impact_level": "LOW",
        "impact_summary": "M85 瑞士 vs 阿尔及利亚 · BC Place 顶棚常闭 · 气候变量小",
        "home_adapt": 87,
        "away_adapt": 84,
        "weather_factors": [
          {
            "label": "20°C 场内",
            "impact": "低",
            "detail": "北京时间 7月3日 11:00 · 当地 7月2日 20:00 PT"
          },
          {
            "label": "人工草+封闭",
            "impact": "低",
            "detail": "球速偏快 · 瑞士传控略受益"
          }
        ],
        "forecast_updated": "2026-07-03 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "壬寅日",
          "day_summary": "壬寅日——水木相生",
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
        "home_score": 62,
        "away_score": 38,
        "mystic_verdict": "瑞士土金稳，阿尔及利亚火木反击。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.5,
        "tier_label": "Switzerland -0.5 · Algeria +0.5",
        "implied_tier": 0.25,
        "tier_gap": 0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Algeria（约 56%）",
        "analysis": "M85 · 瑞士 vs 阿尔及利亚 · 现 瑞-0.5@0.98/阿+0.5@0.91 · 大小 2/2.5 大0.98小0.90。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 12.1
            },
            {
              "score": "1-1",
              "prob": 11.5
            },
            {
              "score": "2-0",
              "prob": 10.2
            }
          ],
          "one_goal_win_pct": 24.8,
          "two_plus_win_pct": 29.7,
          "full_cover_pct": 48.9,
          "dog_hold_pct": 51.1,
          "fav_win_pct": 54.5,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.2,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0.09,
          "dog_cover_ev": -0.09,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 2.63,
          "fair_totals_line": 2,
          "over_2_5_pct": 48.8,
          "over_3_pct": 26.9,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 54.5%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 54.5,
          "dog_hold_pct_raw": 45.5
        },
        "spread_odds": {
          "fav": 0.98,
          "dog": 0.91,
          "note": "Switzerland 0.98 · Algeria 0.91"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "market_goals_int": 3,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.63,
          "fair_line": 2,
          "line_gap": 0.25,
          "over_pct": 61.1,
          "under_pct": 38.9,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大比分侧 0.98 / 小比分侧 0.9 · 小比分侧更热",
          "totals_odds": {
            "over": 0.98,
            "under": 0.9,
            "note": "大比分 0.98 · 小比分 0.9"
          },
          "rational_cn": "模型略看大比分（超 2.25 约 61.1%）；参考高于合理值但模型仍偏小比分",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "market_line_movement": {
          "wc_note": "温哥华 neutral · 主客仅为 FIFA 标记",
          "spread_open_cn": "Switzerland -1@1.02 · Algeria +1@0.8",
          "spread_now_cn": "Switzerland -0.5@0.98 · Algeria +0.5@0.91",
          "totals_now_cn": "大小 2/2.5 · 大 0.98 / 小 0.9",
          "tag": "correction",
          "tag_cn": "向模型修正",
          "tag_color": "#C8A96E",
          "detail_cn": "退 0.5 档 · 热门 1.02→0.98（降水） · 受让 0.8→0.91（抬水） 现盘去水隐含：Switzerland 49.1% · Algeria 50.9%（超收 2.9%） 模型穿盘（现档 Switzerland -0.5 · Algeria +0.5）：Switzerland 48.9% · Algeria 51.1% 模型−市场：Switzerland -0.2pp · Algeria +0.2pp 期望 ROI@现水：Switzerland -3.2% · Algeria +48.7% 盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
          "actuarial": {
            "actuarial_type": "correction",
            "actuarial_cn": "向模型修正",
            "actuarial_color": "#C8A96E",
            "actuarial_desc": "盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
            "summary_cn": "退 0.5 档 · 热门 1.02→0.98（降水） · 受让 0.8→0.91（抬水） 现盘去水隐含：Switzerland 49.1% · Algeria 50.9%（超收 2.9%） 模型穿盘（现档 Switzerland -0.5 · Algeria +0.5）：Switzerland 48.9% · Algeria 51.1% 模型−市场：Switzerland -0.2pp · Algeria +0.2pp 期望 ROI@现水：Switzerland -3.2% · Algeria +48.7% 盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
            "line_delta": -0.5,
            "line_delta_cn": "退 0.5 档",
            "fav_odds_delta": -0.04,
            "dog_odds_delta": 0.11,
            "water_move_cn": "热门 1.02→0.98（降水） · 受让 0.8→0.91（抬水）",
            "open_tier": 1,
            "open_tier_label": "Switzerland -1 · Algeria +1",
            "now_tier": 0.5,
            "implied_tier": 0.25,
            "open_tier_gap": 0.75,
            "now_tier_gap": 0.25,
            "open_devig": {
              "fav_pct": 47.1,
              "dog_pct": 52.9,
              "overround_pct": 5.1
            },
            "now_devig": {
              "fav_pct": 49.1,
              "dog_pct": 50.9,
              "overround_pct": 2.9
            },
            "model_cover_open_pct": 39.7,
            "model_cover_now_pct": 48.9,
            "model_dog_cover_now_pct": 51.1,
            "market_fav_cover_now_pct": 49.1,
            "market_dog_cover_now_pct": 50.9,
            "model_vs_market_fav_pp": -0.2,
            "model_vs_market_dog_pp": 0.2,
            "fav_roi_pct": -3.2,
            "dog_roi_pct": 48.7,
            "fav_name": "Switzerland",
            "dog_name": "Algeria"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "correction",
          "actuarial_cn": "向模型修正",
          "actuarial_color": "#C8A96E",
          "actuarial_desc": "盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
          "summary_cn": "退 0.5 档 · 热门 1.02→0.98（降水） · 受让 0.8→0.91（抬水） 现盘去水隐含：Switzerland 49.1% · Algeria 50.9%（超收 2.9%） 模型穿盘（现档 Switzerland -0.5 · Algeria +0.5）：Switzerland 48.9% · Algeria 51.1% 模型−市场：Switzerland -0.2pp · Algeria +0.2pp 期望 ROI@现水：Switzerland -3.2% · Algeria +48.7% 盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
          "line_delta": -0.5,
          "line_delta_cn": "退 0.5 档",
          "fav_odds_delta": -0.04,
          "dog_odds_delta": 0.11,
          "water_move_cn": "热门 1.02→0.98（降水） · 受让 0.8→0.91（抬水）",
          "open_tier": 1,
          "open_tier_label": "Switzerland -1 · Algeria +1",
          "now_tier": 0.5,
          "implied_tier": 0.25,
          "open_tier_gap": 0.75,
          "now_tier_gap": 0.25,
          "open_devig": {
            "fav_pct": 47.1,
            "dog_pct": 52.9,
            "overround_pct": 5.1
          },
          "now_devig": {
            "fav_pct": 49.1,
            "dog_pct": 50.9,
            "overround_pct": 2.9
          },
          "model_cover_open_pct": 39.7,
          "model_cover_now_pct": 48.9,
          "model_dog_cover_now_pct": 51.1,
          "market_fav_cover_now_pct": 49.1,
          "market_dog_cover_now_pct": 50.9,
          "model_vs_market_fav_pp": -0.2,
          "model_vs_market_dog_pp": 0.2,
          "fav_roi_pct": -3.2,
          "dog_roi_pct": 48.7,
          "fav_name": "Switzerland",
          "dog_name": "Algeria"
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
          "tendency_cn": "更倾向让球盘（阿尔及利亚受让）",
          "tendency_reason_cn": "瑞初-1退至-0.5=市场不信深穿 · 阿+0.5@0.91低水 · ★阿+0.5 · 小2/2.5仅模型侧（R9副项不打小）。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "confidence_reason_cn": "★受让：瑞退档+阿0.91收水 · 1-1/0-0/0-1全赢/1-0输 · 大小降线小0.90好但R9副项不打小。",
          "spread": {
            "side": "dog",
            "label_cn": "阿尔及利亚 +0.5 @0.91",
            "reason_cn": "瑞 -1→-0.5退档 · 阿+0.5@0.91低水 · 1-1/0-1全赢/1-0输 · 马赫雷斯反击轴 · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2/2.5 @0.98",
            "reason_cn": "降线后大0.98高水=市场偏小球 · 仅作副项占位 · R9跳过副项小故不打小2/2.5。",
            "manual_override": true,
            "recommended_side": "under"
          },
          "pick_meta": {
            "model_side": "under",
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
            "over_pct": 61.1,
            "line_gap": 0.25
          },
          "picked_at": "2026-07-03-kickoff",
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
          "away_win": 19
        },
        "display_summary": {
          "fav_name": "Switzerland",
          "expected_total_goals": 2.38,
          "poisson_fav_win_pct": 52.1,
          "small_lead_pct": 25.4,
          "small_example_score": "1-0",
          "small_example_pct": 13.9,
          "big_cover_pct": 26.6,
          "big_example_score": "2-0",
          "big_example_pct": 10.5,
          "win_shape": {
            "fav_name": "Switzerland",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 30.5%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 13.9,
                "pct": 26.6
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.6,
                "pct": 22.2
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 15.9,
                "pct": 30.5
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 10.8,
                "pct": 20.7
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
                "pct": 30.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.7
              }
            ],
            "fav_win_pct": 49
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 37.5 分",
            "first_goal_wait": 37.5,
            "fast_pct": 55.1,
            "moderate_pct": 14.8,
            "slow_pct": 30.1,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 55.1
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 30.1
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Switzerland：Embolo 存疑 · Algeria：Bounedjah 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M85 瑞士 vs 阿尔及利亚 · BC Place 顶棚常闭 · 气候变量小"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：热门难破密集（平 +7%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.68,
            "baseline_away": 0.95,
            "adjusted_home": 1.52,
            "adjusted_away": 0.88,
            "note": "基准 xG 1.68–0.95 → 调整后 1.52–0.88"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0.25,
            "implied_tier_label": "Switzerland -0.25 · Algeria +0.25",
            "market_tier_label": "Switzerland -0.5 · Algeria +0.5",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）"
          },
          "win_outlook": {
            "fav_name": "Switzerland",
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
                "pct": 30.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.7
              }
            ],
            "margin_line_cn": "Switzerland · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 47.6,
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
            "model_total_xg": 2.4,
            "totals_line_gap": 0,
            "totals_high_pct": 55.9,
            "totals_low_pct": 44.1,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 24.4,
            "win_margin2_low_total_pct": 10.5,
            "win_margin2_high_total_pct": 26.6,
            "readout_cn": "取胜约 49%；若取胜，以「险胜收工」为主（48.8%）。 对着赛前净胜参考，净胜≥1（全达标）约 47.6%；对着总进球参考 2.25，模型超线概率约 55.9%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 13.8
            },
            {
              "score": "1-1",
              "pct": 12.1
            },
            {
              "score": "2-0",
              "pct": 10.5
            }
          ],
          "totals_view": {
            "expected_total": 2.4,
            "fair_line": 2.25,
            "market_line": 2.25,
            "line_gap": 0,
            "over_pct": 55.9,
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
              "over_pct": 55.9,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.4 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Switzerland -0.5 穿盘：有达标可能",
            "sub_cn": "Switzerland 胜 52.2% · 胜后穿 100% · Algeria +0.5 守 52.4% 进球氛围：几乎五五开 平局权重约 31%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Switzerland",
              "dog_name": "Algeria",
              "fav_handicap_cn": "Switzerland -0.5",
              "dog_handicap_cn": "Algeria +0.5",
              "market_expect_cn": "Switzerland -0.5 · 净胜≥1",
              "meet_pct": 47.6,
              "dog_hold_pct": 52.4,
              "fav_win_pct": 52.2,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 52.2,
              "meet_pct_label": "Switzerland -0.5 穿盘概率（校准）",
              "dog_hold_label": "Algeria +0.5 守住概率（校准）",
              "two_stage_cn": "Switzerland 取胜约 52.2% · 赢球后穿盘约 100% · Algeria +0.5 守住约 52.4%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Switzerland -0.5 穿盘：有达标可能",
              "pill_cn": "Switzerland 胜 52.2% · 胜后穿 100% · Algeria +0.5 守 52.4%",
              "detail_cn": "Switzerland 取胜约 52.2% · 赢球后穿盘约 100% · Algeria +0.5 守住约 52.4%（泊松 raw 52.2% → 校准 47.6%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 47.6,
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
              "over_pct": 55.9,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
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
                  "fav_name": "Switzerland",
                  "dog_name": "Algeria",
                  "fav_handicap_cn": "Switzerland -0.5",
                  "dog_handicap_cn": "Algeria +0.5",
                  "market_expect_cn": "Switzerland -0.5 · 净胜≥1",
                  "meet_pct": 47.6,
                  "dog_hold_pct": 52.4,
                  "fav_win_pct": 52.2,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 52.2,
                  "meet_pct_label": "Switzerland -0.5 穿盘概率（校准）",
                  "dog_hold_label": "Algeria +0.5 守住概率（校准）",
                  "two_stage_cn": "Switzerland 取胜约 52.2% · 赢球后穿盘约 100% · Algeria +0.5 守住约 52.4%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Switzerland -0.5 穿盘：有达标可能",
                  "pill_cn": "Switzerland 胜 52.2% · 胜后穿 100% · Algeria +0.5 守 52.4%",
                  "detail_cn": "Switzerland 取胜约 52.2% · 赢球后穿盘约 100% · Algeria +0.5 守住约 52.4%（泊松 raw 52.2% → 校准 47.6%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 47.6,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.25,
                  "show_cover": true
                },
                "text": "Switzerland 胜 52.2% · 胜后穿 100% · Algeria +0.5 守 52.4%",
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
                  "over_pct": 55.9,
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
              "team": "Switzerland",
              "first_goal_pct": 63.3,
              "start_score": "1-0",
              "fav_name": "Switzerland",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 92.8,
              "small_lead_pct": 30.6,
              "big_lead_pct": 45.5,
              "fav_win_pct": 76,
              "fav_draw_pct": 16.8,
              "fav_lose_pct": 7.2,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Switzerland 保持胜果（净胜≥1）",
                  "pct": 76
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 16.8
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 7.2
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 38.1 分",
                "first_goal_wait": 38.1,
                "fast_pct": 47.5,
                "moderate_pct": 14.5,
                "slow_pct": 38,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 47.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.5
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 38
                  }
                ]
              },
              "big_delta": 18.9,
              "small_delta": 5.2,
              "narrative": "Switzerland 先破门（已 1-0） → 「巩固防守」；Algeria 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Switzerland",
                "state_label": "Switzerland 已 1-0 领先",
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
                    "pct": 30.5
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 20.7
                  }
                ],
                "margin_line_cn": "Switzerland · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 76,
                "margin_half_pct": 0,
                "margin_fail_pct": 30.6,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.94,
                "totals_line_gap": 0,
                "totals_high_pct": 71.5,
                "totals_low_pct": 28.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 31.4,
                "win_margin2_low_total_pct": 17,
                "win_margin2_high_total_pct": 45.5,
                "readout_cn": "Switzerland 已 1-0 领先：仍取胜约 76%。 对着总进球参考 2.25，模型超线概率约 71.5%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Algeria",
              "first_goal_pct": 36.7,
              "start_score": "0-1",
              "fav_name": "Switzerland",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 51.9,
              "small_lead_pct": 15.8,
              "big_lead_pct": 8.9,
              "fav_win_pct": 24.7,
              "fav_draw_pct": 27.2,
              "fav_lose_pct": 48,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Switzerland 追平（平局）",
                  "pct": 27.2
                },
                {
                  "key": "win1",
                  "label": "Switzerland 净胜1球翻盘（如 2-1）",
                  "pct": 15.8
                },
                {
                  "key": "win2",
                  "label": "Switzerland 净胜≥2球翻盘（如 3-1）",
                  "pct": 8.9
                },
                {
                  "key": "upset_hold",
                  "label": "Algeria 保持胜果至终场",
                  "pct": 48
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
              "big_delta": -17.7,
              "small_delta": -9.6,
              "narrative": "Algeria 先破门（已 0-1） → 「巩固防守」；Switzerland 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.4 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 55.9,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 26,
              "readout_cn": "Switzerland · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
            "xg_home_ht": 0.67,
            "xg_away_ht": 0.39,
            "xg_home_2h": 0.85,
            "xg_away_2h": 0.49,
            "home_win": 37.1,
            "draw": 44.3,
            "away_win": 18.6,
            "top_score": "0-0",
            "top_score_prob": 34.6,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 34.6
              },
              {
                "score": "1-0",
                "prob": 23.2
              },
              {
                "score": "0-1",
                "prob": 13.5
              }
            ],
            "ht_goals_expected": 1.06,
            "ht_over_0_5_pct": 65.4,
            "ht_over_1_5_pct": 28.6,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.67–0.39（约占全场 44%） · 最可能 0-0（34.6%） · 胜平负 37.1/44.3/18.6 · 半场≥1球约 65.4%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Switzerland · 常规对抗。 · 与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.63,
          "xg_gap": 0.73,
          "xg_home": 1.68,
          "xg_away": 0.95,
          "xg_baseline_home": 1.68,
          "xg_baseline_away": 0.95,
          "xg_note": "结构推演用基准 xG 1.68–0.95（进球氛围用调整后 1.52–0.88）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Switzerland",
          "dog_name": "Algeria",
          "fav_xg": 1.68,
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
          "prob_over_line": 61.1,
          "prob_meet_guess": 48.5,
          "guess_n": 3,
          "prob_4_plus": 26.5,
          "prob_2_or_less": 51.5,
          "totals_line": 2.25,
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
              "prob_pct": 37
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 11
            },
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 11
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
          "summary_cn": "【路径·基准 xG】合计 2.63 · Switzerland 1.68 / Algeria 0.95 → 主路径「弱队开花」约 41%。 至少 3 球约 48.5% · 超 2.25 约 61.1% · ≤2球 51.5%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.5,
        "tier_label": "Switzerland -0.5 · Algeria +0.5",
        "totals_line": 2.25,
        "over_pct": 55.9,
        "fair_line": 2.25,
        "line_gap": 0,
        "full_cover_pct": 47.6,
        "fav_win_pct": 52.2,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Switzerland -0.5 · 净胜≥1",
        "line_move_tag": "correction",
        "line_move_cn": "向模型修正",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（阿尔及利亚受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "阿尔及利亚 +0.5 @0.91",
        "agent_totals_cn": "大球 2/2.5 @0.98",
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
    "date": "2026-07-02",
    "time": "12:00",
    "time_local": "12:00 PT",
    "timezone": "PDT (UTC-7)",
    "time_beijing": "03:00",
    "date_beijing": "7月3日",
    "time_beijing_full": "北京时间 7月3日 03:00",
    "venue": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "home": {
      "name": "Spain",
      "iso": "es",
      "fifaRank": 8,
      "rating": 90
    },
    "away": {
      "name": "Austria",
      "iso": "at",
      "fifaRank": 22,
      "rating": 78
    },
    "teaser": "32强 M84 · 西班牙 vs 奥地利",
    "home_win": 66,
    "draw": 20,
    "away_win": 14,
    "predicted_score": "2-0",
    "key_player_home": "Lamine Yamal",
    "key_player_away": "Marcel Sabitzer"
  },
  "upcomingMatches": [
    {
      "group": "KO",
      "time_beijing_full": "北京时间 7月3日 07:00",
      "venue": "BMO Field",
      "city": "Toronto, Canada",
      "home": {
        "name": "Portugal",
        "iso": "pt"
      },
      "away": {
        "name": "Croatia",
        "iso": "hr"
      },
      "teaser": "32强 M83"
    },
    {
      "group": "KO",
      "time_beijing_full": "北京时间 7月3日 11:00",
      "venue": "BC Place",
      "city": "Vancouver, Canada",
      "home": {
        "name": "Switzerland",
        "iso": "ch"
      },
      "away": {
        "name": "Algeria",
        "iso": "dz"
      },
      "teaser": "32强 M85"
    }
  ]
};
