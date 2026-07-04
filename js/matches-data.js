// 今日赛事 — 淘汰赛 · 16强 (signals enriched)
// Last updated: 2026-07-04T15:04:19+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-07-04T15:04:19+08:00",
  "syncSource": "FIFA 赛程 · Day 24 · 16强开赛 enriched · 裁判/伤病/球星/赛场 · 推演概要+小组形势",
  "phase": "knockout",
  "phase_cn": "淘汰赛 · 16强",
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
      "tag": "UPDATE",
      "text": "📊 Day23 Agent：让球1.5/3 · 大小1/2 · 倾向★50% · 佛+2/2.5✓/哥-0.5✓/澳-0/0.5输半",
      "time": "复盘"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M86：阿根廷 常规1-1→加时3-2 佛得角 · Messi 29' · 晋级16强",
      "time": "7月4日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M87：哥伦比亚 1-0 加纳 · Arias 14' · 晋级16强",
      "time": "7月4日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M88：澳大利亚 1-1 埃及 · 点球(4-2)埃及晋级",
      "time": "7月4日"
    },
    {
      "tag": "PREVIEW",
      "text": "⚔️ 16强 7/5：加拿大-摩洛哥(01:00) · 巴拉圭-法国(05:00)",
      "time": "7月5日"
    },
    {
      "tag": "PREVIEW",
      "text": "16强续战 7/6：巴西-挪威(04:00) · 墨西哥-英格兰(08:00)",
      "time": "路径"
    }
  ],
  "todayMatches": [
    {
      "id": "m90",
      "fifa_match_number": 90,
      "fifa_match_id": "400021530",
      "group": "KO",
      "round": "R16",
      "round_cn": "16强",
      "matchday": null,
      "knockout_slot": "M90 · 16强 · M73胜(加拿大) vs M75胜(摩洛哥)",
      "knockout_next": "胜者 → M97（8强 · 对 M89 胜者）",
      "date": "2026-07-04",
      "time": "12:00",
      "time_local": "12:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "01:00",
      "date_beijing": "7月5日",
      "time_beijing_full": "北京时间 7月5日 01:00",
      "venue": "NRG Stadium",
      "city": "Houston, USA",
      "note": "16强 M90 · 加拿大 vs 摩洛哥 · 休斯顿",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-3-3",
          "home": "Crépeau; Johnston, Vitória, Cornelius, Davies; Koné, Eustáquio, Buchanan; Larin, J. David, Shaffelburg",
          "away": "Bounou; Hakimi, Aguerd, Saïss, Mazraoui; Amrabat, Ounahi, Amallah; Brahim Díaz, En-Nesyri, Ziyech",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Canada",
        "iso": "ca",
        "flag": "",
        "fifa_rank": 40,
        "rating": 77,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "L"
        ],
        "coach": "Jesse Marsch",
        "stars": [
          {
            "name": "Alphonso Davies",
            "pos": "LB",
            "club": "Real Madrid",
            "rating": 8.4,
            "desc": "左路突进 · 攻守转换"
          },
          {
            "name": "Jonathan David",
            "pos": "ST",
            "club": "Lille",
            "rating": 8,
            "desc": "终结 · 支点"
          },
          {
            "name": "Tajon Buchanan",
            "pos": "RW",
            "club": "Inter",
            "rating": 7.6,
            "desc": "右路宽度 · 一对一"
          }
        ],
        "star": {
          "name": "Alphonso Davies",
          "pos": "LB",
          "club": "Real Madrid",
          "rating": 8.4,
          "desc": "B 组次席 · 左路引擎"
        },
        "injuries": [
          {
            "player": "Alphonso Davies",
            "status": "FIT",
            "note": "左路引擎 · 攻守转换核心",
            "confirmed": true
          },
          {
            "player": "Jonathan David",
            "status": "FIT",
            "note": "中锋终结点",
            "confirmed": true
          },
          {
            "player": "Stephen Eustáquio",
            "status": "DOUBT",
            "note": "黄牌累积 · 中场调度存疑",
            "confirmed": false
          }
        ],
        "rumors": [
          "Marsch：「摩洛哥是夺冠级别的对手，但我们有 Davies 这样的世界级武器」",
          "预计 4-3-3：Davies 左路突进 · J. David 支点 · Buchanan 右路",
          "32强淘汰南非后信心足 · 主打转换速度",
          "休斯顿封闭空调 · 体能分配是关键"
        ]
      },
      "away": {
        "name": "Morocco",
        "iso": "ma",
        "flag": "",
        "fifa_rank": 13,
        "rating": 84,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Walid Regragui",
        "stars": [
          {
            "name": "Achraf Hakimi",
            "pos": "RB",
            "club": "PSG",
            "rating": 8.6,
            "desc": "攻守翼卫 · 定位球"
          },
          {
            "name": "Brahim Díaz",
            "pos": "AM",
            "club": "Real Madrid",
            "rating": 8.1,
            "desc": "组织 · 肋部破局"
          },
          {
            "name": "Youssef En-Nesyri",
            "pos": "ST",
            "club": "Fenerbahçe",
            "rating": 7.9,
            "desc": "支点 · 争顶"
          }
        ],
        "star": {
          "name": "Achraf Hakimi",
          "pos": "RB",
          "club": "PSG",
          "rating": 8.6,
          "desc": "右路核心 · 点球淘汰荷兰"
        },
        "injuries": [
          {
            "player": "Achraf Hakimi",
            "status": "FIT",
            "note": "右路核心 · 点球淘汰荷兰功臣",
            "confirmed": true
          },
          {
            "player": "Youssef En-Nesyri",
            "status": "FIT",
            "note": "支点中锋 · 争顶",
            "confirmed": true
          },
          {
            "player": "Sofyan Amrabat",
            "status": "FIT",
            "note": "中场屏障",
            "confirmed": true
          },
          {
            "player": "Nayef Aguerd",
            "status": "DOUBT",
            "note": "肌肉疲劳 · 赛前队检",
            "confirmed": false
          }
        ],
        "rumors": [
          "Regragui：「点球淘汰荷兰证明我们的韧性——对加拿大要控制边路」",
          "预计 4-3-3：Hakimi/Mazraoui 双翼卫 · Brahim Díaz 组织 · En-Nesyri 支点",
          "2022 四强班底 · 淘汰赛经验占优",
          "须防 Davies 反击速度 · Hakimi 攻守平衡是胜负手"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2022,
            "comp": "世界杯",
            "score": "1-2",
            "winner": "Morocco"
          }
        ],
        "note": "2022 小组赛摩洛哥 2-1"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-05",
        "name": "Michael Oliver",
        "nation": "England",
        "iso": "gb-eng",
        "wc_experience": "2026 世界杯 · 16强 M90 主裁 · UEFA 精英 · 执法加拿大 vs 摩洛哥",
        "avg_yellow": 4,
        "avg_red": 0.1,
        "avg_penalty": 0.3,
        "home_win_rate": 50,
        "bias_index": 50,
        "bias_note": "英格兰顶级主裁执法休斯顿 NRG 封闭场。Davies vs Hakimi 边路对攻；对身体对抗尺度稳健，允许比赛流畅，禁区内拉扯判罚果断。",
        "tendencies": [
          "FIFA 官方主裁 · Michael Oliver（英格兰）",
          "第四官员 Danny Makkelie（荷兰）",
          "边路对攻 · 休斯顿封闭空调"
        ],
        "officials": {
          "referee": "Michael Oliver (ENG)",
          "fourth": "Danny Makkelie (NED)"
        },
        "fifa_match_id": "400021530",
        "note": "FIFA M90 · 加拿大 vs 摩洛哥 · Houston",
        "updated": "2026-07-04T15:04:18+08:00"
      },
      "prediction": {
        "home_win": 26,
        "draw": 36,
        "away_win": 38,
        "score": "0-1",
        "confidence": 68,
        "xg_home": 1.15,
        "xg_away": 1.35,
        "key_factor": "16强 M90 · 加拿大 vs 摩洛哥 · Davies vs Hakimi 边路对攻 · 泊松 1-1/1-0",
        "score_dist": [
          {
            "score": "0-1",
            "prob": 15.7
          },
          {
            "score": "1-1",
            "prob": 12.6
          },
          {
            "score": "0-0",
            "prob": 11.6
          },
          {
            "score": "0-2",
            "prob": 10.6
          },
          {
            "score": "1-0",
            "prob": 9.3
          },
          {
            "score": "1-2",
            "prob": 8.5
          },
          {
            "score": "2-1",
            "prob": 5
          }
        ],
        "insight_factors": [
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "休斯顿午后高温 · 33°C · 湿度 62% · 降雨概率 15% · 封闭场内 · 空调；M90 加拿大 vs 摩洛哥 · 封闭空调控温 · 边路高强度对抗耗体能（33°C 封闭空调）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "16强 M90 · 加拿大 vs 摩洛哥 · Davies vs Hakimi 边路对攻 · 泊松 1-1/1-0"
          }
        ],
        "base_home_win": 27,
        "base_draw": 37,
        "base_away_win": 36,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 10,
          "ironBucket": true,
          "closeXg": true,
          "gap": 0.2,
          "notes": [
            "xG 接近且战术偏保守",
            "热门难破密集"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 0.8,
        "xg_poisson_away": 1.35,
        "xg_tier_calibrated": true,
        "score_prob": 15.7,
        "score_top3": [
          {
            "score": "0-1",
            "prob": 15.7
          },
          {
            "score": "1-1",
            "prob": 12.6
          },
          {
            "score": "0-0",
            "prob": 11.6
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "休斯顿",
        "country": "美国",
        "venue": "NRG Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "封闭式",
        "temp": 33,
        "humidity": 62,
        "altitude_m": 15,
        "rain_chance": 15,
        "wind": "封闭场内 · 空调",
        "condition_cn": "休斯顿午后高温",
        "impact_level": "MEDIUM",
        "impact_summary": "M90 加拿大 vs 摩洛哥 · 封闭空调控温 · 边路高强度对抗耗体能",
        "home_adapt": 84,
        "away_adapt": 85,
        "weather_factors": [
          {
            "label": "33°C 封闭空调",
            "impact": "中",
            "detail": "北京时间 7月5日 01:00"
          }
        ],
        "forecast_updated": "2026-07-05 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲辰日",
          "day_summary": "甲辰日——木土相制",
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
        "home_score": 46,
        "away_score": 54,
        "mystic_verdict": "加拿大木气升，摩洛哥火金锐。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": -0.5,
        "tier_label": "Morocco -0.5 · Canada +0.5",
        "implied_tier": 0,
        "tier_gap": -0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Morocco（约 63%）",
        "analysis": "M90 · 加拿大 vs 摩洛哥 · 摩-0.5@0.83/加+0.5@1.05 · 大小 2/2.5 大0.92小0.95。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12.8
            },
            {
              "score": "0-1",
              "prob": 11.1
            },
            {
              "score": "1-0",
              "prob": 9.4
            }
          ],
          "one_goal_win_pct": 18.9,
          "two_plus_win_pct": 12.9,
          "full_cover_pct": 48.8,
          "dog_hold_pct": 51.2,
          "fav_win_pct": 41.3,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.1,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.174,
          "dog_cover_ev": 0.174,
          "rational_spread_cn": "主队 守住差距概率略高",
          "total_xg": 2.5,
          "fair_totals_line": 2,
          "over_2_5_pct": 45.6,
          "over_3_pct": 24.2,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 41.3%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 41.3,
          "dog_hold_pct_raw": 58.7
        },
        "spread_odds": {
          "fav": 0.83,
          "dog": 1.05,
          "note": "Canada 0.83 · Morocco 1.05"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "market_goals_int": 3,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.5,
          "fair_line": 2,
          "line_gap": 0.25,
          "over_pct": 58.3,
          "under_pct": 41.7,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看大比分（超 2.25 约 58.3%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "Canada +0.5@0.89 · Morocco -0.5@0.93",
          "spread_now_cn": "Canada +0.5@1.05 · Morocco -0.5@0.83",
          "totals_now_cn": "大小 2/2.5 · 大 0.92 / 小 0.95",
          "tag": "book_value_dog",
          "tag_cn": "受让低水定价",
          "tag_color": "#C8A96E",
          "detail_cn": "退 1 档 · 热门 0.93→0.83（降水） · 受让 0.89→1.05（抬水） 现盘去水隐含：Morocco 52.8% · Canada 47.2%（超收 3.4%） 模型穿盘（现档 Morocco -0.5 · Canada +0.5）：Morocco 48.8% · Canada 51.2% 模型−市场：Morocco -4pp · Canada +4pp 期望 ROI@现水：Morocco -10.7% · Canada +56.2% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "actuarial": {
            "actuarial_type": "book_value_dog",
            "actuarial_cn": "受让低水定价",
            "actuarial_color": "#C8A96E",
            "actuarial_desc": "退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
            "summary_cn": "退 1 档 · 热门 0.93→0.83（降水） · 受让 0.89→1.05（抬水） 现盘去水隐含：Morocco 52.8% · Canada 47.2%（超收 3.4%） 模型穿盘（现档 Morocco -0.5 · Canada +0.5）：Morocco 48.8% · Canada 51.2% 模型−市场：Morocco -4pp · Canada +4pp 期望 ROI@现水：Morocco -10.7% · Canada +56.2% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
            "line_delta": -1,
            "line_delta_cn": "退 1 档",
            "fav_odds_delta": -0.1,
            "dog_odds_delta": 0.16,
            "water_move_cn": "热门 0.93→0.83（降水） · 受让 0.89→1.05（抬水）",
            "open_tier": 0.5,
            "open_tier_label": "Canada -0.5 · Morocco +0.5",
            "now_tier": -0.5,
            "implied_tier": 0,
            "open_tier_gap": 0.5,
            "now_tier_gap": -0.5,
            "open_devig": {
              "fav_pct": 49.5,
              "dog_pct": 50.5,
              "overround_pct": 4.7
            },
            "now_devig": {
              "fav_pct": 52.8,
              "dog_pct": 47.2,
              "overround_pct": 3.4
            },
            "model_cover_open_pct": 40.9,
            "model_cover_now_pct": 48.8,
            "model_dog_cover_now_pct": 51.2,
            "market_fav_cover_now_pct": 52.8,
            "market_dog_cover_now_pct": 47.2,
            "model_vs_market_fav_pp": -4,
            "model_vs_market_dog_pp": 4,
            "fav_roi_pct": -10.7,
            "dog_roi_pct": 56.2,
            "fav_name": "Morocco",
            "dog_name": "Canada"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "book_value_dog",
          "actuarial_cn": "受让低水定价",
          "actuarial_color": "#C8A96E",
          "actuarial_desc": "退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "summary_cn": "退 1 档 · 热门 0.93→0.83（降水） · 受让 0.89→1.05（抬水） 现盘去水隐含：Morocco 52.8% · Canada 47.2%（超收 3.4%） 模型穿盘（现档 Morocco -0.5 · Canada +0.5）：Morocco 48.8% · Canada 51.2% 模型−市场：Morocco -4pp · Canada +4pp 期望 ROI@现水：Morocco -10.7% · Canada +56.2% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "line_delta": -1,
          "line_delta_cn": "退 1 档",
          "fav_odds_delta": -0.1,
          "dog_odds_delta": 0.16,
          "water_move_cn": "热门 0.93→0.83（降水） · 受让 0.89→1.05（抬水）",
          "open_tier": 0.5,
          "open_tier_label": "Canada -0.5 · Morocco +0.5",
          "now_tier": -0.5,
          "implied_tier": 0,
          "open_tier_gap": 0.5,
          "now_tier_gap": -0.5,
          "open_devig": {
            "fav_pct": 49.5,
            "dog_pct": 50.5,
            "overround_pct": 4.7
          },
          "now_devig": {
            "fav_pct": 52.8,
            "dog_pct": 47.2,
            "overround_pct": 3.4
          },
          "model_cover_open_pct": 40.9,
          "model_cover_now_pct": 48.8,
          "model_dog_cover_now_pct": 51.2,
          "market_fav_cover_now_pct": 52.8,
          "market_dog_cover_now_pct": 47.2,
          "model_vs_market_fav_pp": -4,
          "model_vs_market_dog_pp": 4,
          "fav_roi_pct": -10.7,
          "dog_roi_pct": 56.2,
          "fav_name": "Morocco",
          "dog_name": "Canada"
        },
        "totals_pick_layers": {
          "model_side": "over",
          "situation_side": "neutral",
          "market_line_side": "under",
          "market_odds_side": "over",
          "market_side": "over",
          "recommended_side": "over",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "over",
            "line": "under",
            "odds": "over",
            "situation": "neutral"
          },
          "vote_summary_cn": "大球(model) · 小球(line) · 大球(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘（加拿大受让）",
          "tendency_reason_cn": "档位 -0.5 摩洛哥低水(0.83)资金进，但模型近均势(加胜27%+平37%=加+0.5约64%守住)且受让抬到 1.05 高水，价值在受让侧 · ★加+0.5 · 大2/2.5副项。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "dog",
            "label_cn": "加拿大 +0.5 @1.05",
            "reason_cn": "摩洛哥低水但须净胜1球(-0.5)；模型平局权重高(37%)，加拿大平或胜即全赢(约64%)，1.05 高水放大价值 · 1-1/0-0/1-0 路径 · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2/2.5 @0.92",
            "reason_cn": "over 1.00→0.92 降水资金偏大 · Davies/Hakimi 双翼卫对攻 · 模型总 xG 约2.5 · 3球全赢/2球赢半 · 副项。"
          },
          "picked_at": "2026-07-05-prematch",
          "pick_meta": {
            "model_side": "over",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "over",
            "market_side": "over",
            "pick_side": "over",
            "recommended_side": "over",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "over",
              "line": "under",
              "odds": "over",
              "situation": "neutral"
            },
            "vote_summary_cn": "大球(model) · 小球(line) · 大球(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 58.3,
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
          "home_win": -1,
          "draw": -1,
          "away_win": 2
        },
        "adjustment_note": "模型微调：主胜 -1% · 平 -1% · 客 +2%",
        "adjusted_probs": {
          "home_win": 26,
          "draw": 36,
          "away_win": 38
        },
        "display_summary": {
          "fav_name": "Morocco",
          "expected_total_goals": 2.02,
          "poisson_fav_win_pct": 39.7,
          "small_lead_pct": 23.4,
          "small_example_score": "0-1",
          "small_example_pct": 14.6,
          "big_cover_pct": 16.3,
          "big_example_score": "0-2",
          "big_example_pct": 8.1,
          "win_shape": {
            "fav_name": "Morocco",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 36.7%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 14.6,
                "pct": 36.7
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 8.8,
                "pct": 22.3
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 11.1,
                "pct": 28
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 5.2,
                "pct": 13
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 59
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 28
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 13
              }
            ],
            "fav_win_pct": 38
          },
          "excitement": {
            "label_cn": "偏晚",
            "label_key": "slow",
            "label_color": "#7BB8D4",
            "sub_cn": "预期首球等待约 44.3 分",
            "first_goal_wait": 44.3,
            "fast_pct": 49.2,
            "moderate_pct": 14.6,
            "slow_pct": 36.2,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 49.2
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.6
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 36.2
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Canada：Stephen Eustáquio 存疑 · Morocco：Nayef Aguerd 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M90 加拿大 vs 摩洛哥 · 封闭空调控温 · 边路高强度对抗耗体能"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 接近且战术偏保守 · 热门难破密集（平 +10%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.15,
            "baseline_away": 1.35,
            "adjusted_home": 0.92,
            "adjusted_away": 1.11,
            "note": "基准 xG 1.15–1.35 → 调整后 0.92–1.11"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": -0.5,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Morocco -0.5 · Canada +0.5",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法低于 xG 隐含约 0.5"
          },
          "win_outlook": {
            "fav_name": "Morocco",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 59
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 28
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 13
              }
            ],
            "margin_line_cn": "Morocco · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 47.9,
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
            "model_total_xg": 2.03,
            "totals_line_gap": 0,
            "totals_high_pct": 46.6,
            "totals_low_pct": 53.4,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 22.7,
            "win_margin2_low_total_pct": 8.1,
            "win_margin2_high_total_pct": 16.3,
            "readout_cn": "取胜约 38%；若取胜，以「险胜收工」为主（59%）。 对着赛前净胜参考，净胜≥1（全达标）约 47.9%；对着总进球参考 2.25，模型超线概率约 46.6%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "0-1",
              "pct": 14.6
            },
            {
              "score": "1-1",
              "pct": 13.4
            },
            {
              "score": "0-0",
              "pct": 13.1
            }
          ],
          "totals_view": {
            "expected_total": 2,
            "fair_line": 2.25,
            "market_line": 2.25,
            "line_gap": 0,
            "over_pct": 46.6,
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
              "over_pct": 46.6,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 2 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Morocco -0.5 穿盘：有达标可能",
            "sub_cn": "Morocco 胜 39.7% · 胜后穿 100% · Canada +0.5 守 52.1% 进球氛围：几乎五五开 平局权重约 36%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Morocco",
              "dog_name": "Canada",
              "fav_handicap_cn": "Morocco -0.5",
              "dog_handicap_cn": "Canada +0.5",
              "market_expect_cn": "Morocco -0.5 · 净胜≥1",
              "meet_pct": 47.9,
              "dog_hold_pct": 52.1,
              "fav_win_pct": 39.7,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 39.7,
              "meet_pct_label": "Morocco -0.5 穿盘概率（校准）",
              "dog_hold_label": "Canada +0.5 守住概率（校准）",
              "two_stage_cn": "Morocco 取胜约 39.7% · 赢球后穿盘约 100% · Canada +0.5 守住约 52.1%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Morocco -0.5 穿盘：有达标可能",
              "pill_cn": "Morocco 胜 39.7% · 胜后穿 100% · Canada +0.5 守 52.1%",
              "detail_cn": "Morocco 取胜约 39.7% · 赢球后穿盘约 100% · Canada +0.5 守住约 52.1%（泊松 raw 39.7% → 校准 47.9%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 47.9,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": -0.5,
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
              "over_pct": 46.6,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
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
                  "fav_name": "Morocco",
                  "dog_name": "Canada",
                  "fav_handicap_cn": "Morocco -0.5",
                  "dog_handicap_cn": "Canada +0.5",
                  "market_expect_cn": "Morocco -0.5 · 净胜≥1",
                  "meet_pct": 47.9,
                  "dog_hold_pct": 52.1,
                  "fav_win_pct": 39.7,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 39.7,
                  "meet_pct_label": "Morocco -0.5 穿盘概率（校准）",
                  "dog_hold_label": "Canada +0.5 守住概率（校准）",
                  "two_stage_cn": "Morocco 取胜约 39.7% · 赢球后穿盘约 100% · Canada +0.5 守住约 52.1%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Morocco -0.5 穿盘：有达标可能",
                  "pill_cn": "Morocco 胜 39.7% · 胜后穿 100% · Canada +0.5 守 52.1%",
                  "detail_cn": "Morocco 取胜约 39.7% · 赢球后穿盘约 100% · Canada +0.5 守住约 52.1%（泊松 raw 39.7% → 校准 47.9%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 47.9,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": -0.5,
                  "show_cover": true
                },
                "text": "Morocco 胜 39.7% · 胜后穿 100% · Canada +0.5 守 52.1%",
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
                  "over_pct": 46.6,
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
              "team": "Canada",
              "first_goal_pct": 45.3,
              "start_score": "1-0",
              "fav_name": "Morocco",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 40.3,
              "small_lead_pct": 11,
              "big_lead_pct": 4.3,
              "fav_win_pct": 15.2,
              "fav_draw_pct": 25.1,
              "fav_lose_pct": 59.6,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Morocco 追平（平局）",
                  "pct": 25.1
                },
                {
                  "key": "win1",
                  "label": "Morocco 净胜1球翻盘（如 2-1）",
                  "pct": 11
                },
                {
                  "key": "win2",
                  "label": "Morocco 净胜≥2球翻盘（如 3-1）",
                  "pct": 4.3
                },
                {
                  "key": "upset_hold",
                  "label": "Canada 保持胜果至终场",
                  "pct": 59.6
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 44.1 分",
                "first_goal_wait": 44.1,
                "fast_pct": 42.7,
                "moderate_pct": 13.9,
                "slow_pct": 43.3,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 42.7
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.9
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 43.3
                  }
                ]
              },
              "big_delta": -12,
              "small_delta": -12.4,
              "narrative": "Canada 先破门（已 1-0） → 「巩固防守」；Morocco 「组织反扑」。热门先丢球（已 1-0），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "Morocco",
              "first_goal_pct": 54.7,
              "start_score": "0-1",
              "fav_name": "Morocco",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 89.9,
              "small_lead_pct": 34.6,
              "big_lead_pct": 34.1,
              "fav_win_pct": 68.7,
              "fav_draw_pct": 21.2,
              "fav_lose_pct": 10.1,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Morocco 保持胜果（净胜≥1）",
                  "pct": 68.7
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 21.2
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 10.1
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 44.6 分",
                "first_goal_wait": 44.6,
                "fast_pct": 42.4,
                "moderate_pct": 13.9,
                "slow_pct": 43.7,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 42.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.9
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 43.7
                  }
                ]
              },
              "big_delta": 17.8,
              "small_delta": 11.2,
              "narrative": "Morocco 先破门（已 0-1） → 「巩固防守」；Canada 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Morocco",
                "state_label": "Morocco 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 59
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 28
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 13
                  }
                ],
                "margin_line_cn": "Morocco · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 68.7,
                "margin_half_pct": 0,
                "margin_fail_pct": 34.6,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.66,
                "totals_line_gap": 0,
                "totals_high_pct": 65.1,
                "totals_low_pct": 34.9,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 35.4,
                "win_margin2_low_total_pct": 16.3,
                "win_margin2_high_total_pct": 34.1,
                "readout_cn": "Morocco 已 1-0 领先：仍取胜约 68.7%。 对着总进球参考 2.25，模型超线概率约 65.1%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 46.6,
              "type_tags": [
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 31,
              "readout_cn": "Morocco · 进球偏少。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 31,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.4,
            "xg_away_ht": 0.49,
            "xg_home_2h": 0.52,
            "xg_away_2h": 0.62,
            "home_win": 22.1,
            "draw": 49.5,
            "away_win": 28.4,
            "top_score": "0-0",
            "top_score_prob": 41.1,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 41.1
              },
              {
                "score": "0-1",
                "prob": 20.1
              },
              {
                "score": "1-0",
                "prob": 16.4
              }
            ],
            "ht_goals_expected": 0.89,
            "ht_over_0_5_pct": 58.9,
            "ht_over_1_5_pct": 22.4,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.4–0.49（约占全场 44%） · 最可能 0-0（41.1%） · 胜平负 22.1/49.5/28.4 · 半场≥1球约 58.9%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Morocco · 进球偏少。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法低于 xG 隐含约 0.5（模型微调：主胜 -1% · 平 -1% · 客 +2%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.5,
          "xg_gap": 0.2,
          "xg_home": 1.15,
          "xg_away": 1.35,
          "xg_baseline_home": 1.15,
          "xg_baseline_away": 1.35,
          "xg_note": "结构推演用基准 xG 1.15–1.35（进球氛围用调整后 0.92–1.11）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Morocco",
          "dog_name": "Canada",
          "fav_xg": 1.35,
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
          "prob_over_line": 58.3,
          "prob_meet_guess": 45.4,
          "guess_n": 3,
          "prob_4_plus": 23.9,
          "prob_2_or_less": 54.6,
          "totals_line": 2.25,
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
          "summary_cn": "【路径·基准 xG】合计 2.5 · Morocco 1.35 / Canada 1.15 → 主路径「铁局/小比分」约 56%。 至少 3 球约 45.4% · 超 2.25 约 58.3% · ≤2球 54.6%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": -0.5,
        "tier_label": "Morocco -0.5 · Canada +0.5",
        "totals_line": 2.25,
        "over_pct": 46.6,
        "fair_line": 2.25,
        "line_gap": 0,
        "full_cover_pct": 47.9,
        "fav_win_pct": 39.7,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Morocco -0.5 · 净胜≥1",
        "line_move_tag": "book_value_dog",
        "line_move_cn": "受让低水定价",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（加拿大受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "加拿大 +0.5 @1.05",
        "agent_totals_cn": "大球 2/2.5 @0.92",
        "agent_totals_skipped": false,
        "agent_totals_skip_cn": null,
        "ko_totals_policy": "R9",
        "totals_level": "neutral",
        "totals_show_lean": false,
        "totals_lean_side": "neutral"
      }
    },
    {
      "id": "m89",
      "fifa_match_number": 89,
      "fifa_match_id": "400021533",
      "group": "KO",
      "round": "R16",
      "round_cn": "16强",
      "matchday": null,
      "knockout_slot": "M89 · 16强 · M74胜(巴拉圭) vs M77胜(法国)",
      "knockout_next": "胜者 → M97（8强 · 对 M90 胜者）",
      "date": "2026-07-04",
      "time": "17:00",
      "time_local": "17:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "05:00",
      "date_beijing": "7月5日",
      "time_beijing_full": "北京时间 7月5日 05:00",
      "venue": "Lincoln Financial Field",
      "city": "Philadelphia, USA",
      "note": "16强 M89 · 巴拉圭 vs 法国 · 费城",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-2-3-1",
          "home": "Coronel; Espínola, Gómez, Balbuena, Alonso; Cubas, Villasanti; Almirón, Enciso, Sosa; Sanabria",
          "away": "Maignan; Koundé, Saliba, Upamecano, T. Hernández; Tchouaméni, Camavinga; Dembélé, Griezmann, Mbappé; Kolo Muani",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Paraguay",
        "iso": "py",
        "flag": "",
        "fifa_rank": 45,
        "rating": 74,
        "form": [
          "W",
          "D",
          "D",
          "W",
          "D"
        ],
        "coach": "Gustavo Alfaro",
        "stars": [
          {
            "name": "Julio Enciso",
            "pos": "AM",
            "club": "Brighton",
            "rating": 7.6,
            "desc": "反击爆点 · 远射"
          },
          {
            "name": "Miguel Almirón",
            "pos": "RW",
            "club": "Newcastle",
            "rating": 7.5,
            "desc": "速度 · 反击第一出口"
          },
          {
            "name": "Gustavo Gómez",
            "pos": "CB",
            "club": "Palmeiras",
            "rating": 7.7,
            "desc": "防线领袖 · 定位球"
          }
        ],
        "star": {
          "name": "Julio Enciso",
          "pos": "AM",
          "club": "Brighton",
          "rating": 7.6,
          "desc": "点球淘汰德国 · 前场爆点"
        },
        "injuries": [
          {
            "player": "Julio Enciso",
            "status": "FIT",
            "note": "点球淘汰德国功臣 · 前场爆点",
            "confirmed": true
          },
          {
            "player": "Antonio Sanabria",
            "status": "FIT",
            "note": "支点中锋",
            "confirmed": true
          },
          {
            "player": "Miguel Almirón",
            "status": "FIT",
            "note": "右路速度 · 反击第一出口",
            "confirmed": true
          },
          {
            "player": "Gustavo Gómez",
            "status": "FIT",
            "note": "中卫领袖 · 定位球",
            "confirmed": true
          }
        ],
        "rumors": [
          "Alfaro：「对法国没人看好我们——但对德国也是，我们信铁桶+反击」",
          "预计 4-2-3-1 极深 · Cubas/Villasanti 双屏障 · Enciso 反击",
          "点球淘汰德国的冷门班底 · 低位纪律是生存之道",
          "受让深盘 · 须防 Mbappé 身后球"
        ]
      },
      "away": {
        "name": "France",
        "iso": "fr",
        "flag": "",
        "fifa_rank": 2,
        "rating": 91,
        "form": [
          "W",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Didier Deschamps",
        "stars": [
          {
            "name": "Kylian Mbappé",
            "pos": "ST",
            "club": "Real Madrid",
            "rating": 9.4,
            "desc": "速度 · 终结 · 破铁桶核心"
          },
          {
            "name": "Antoine Griezmann",
            "pos": "AM",
            "club": "Atlético",
            "rating": 8.5,
            "desc": "前场组织轴"
          },
          {
            "name": "Aurélien Tchouaméni",
            "pos": "CDM",
            "club": "Real Madrid",
            "rating": 8.3,
            "desc": "后腰屏障 · 出球"
          }
        ],
        "star": {
          "name": "Kylian Mbappé",
          "pos": "ST",
          "club": "Real Madrid",
          "rating": 9.4,
          "desc": "锋线核心 · 队史射手王"
        },
        "injuries": [
          {
            "player": "Kylian Mbappé",
            "status": "FIT",
            "note": "锋线核心 · 队史射手王 · 状态火热",
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
            "note": "大腿轻微不适 · 或 Coman 顶替",
            "confirmed": false
          }
        ],
        "rumors": [
          "Deschamps：「巴拉圭淘汰德国不是偶然——低位铁桶最难破，须耐心」",
          "预计 4-2-3-1：Mbappé 中锋 · Griezmann 前腰 · Dembélé/Coman 边路",
          "锋线豪华 · 破铁桶靠个人能力与定位球",
          "深盘热门 · 须早破门避免陷入闷战"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 0,
        "recent": [],
        "note": "大赛首次交锋"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-05",
        "name": "Ilgiz Tantashev",
        "nation": "Uzbekistan",
        "iso": "uz",
        "wc_experience": "2026 世界杯 · 16强 M89 主裁 · AFC 精英 · 执法巴拉圭 vs 法国",
        "avg_yellow": 4.6,
        "avg_red": 0.13,
        "avg_penalty": 0.32,
        "home_win_rate": 48,
        "bias_index": 50,
        "bias_note": "乌兹别克主裁执法费城夏夜。巴拉圭铁桶+犯规打断 vs 法国豪华锋线；对战术犯规、拖延时间容忍度中等，Mbappé 被侵犯尺度是关键。",
        "tendencies": [
          "FIFA 官方主裁 · Ilgiz Tantashev（乌兹别克斯坦）",
          "第四官员 Abdulrahman Al-Jassim（卡塔尔）",
          "深盘场 · 巴拉圭战术犯规高发"
        ],
        "officials": {
          "referee": "Ilgiz Tantashev (UZB)",
          "fourth": "Abdulrahman Al-Jassim (QAT)"
        },
        "fifa_match_id": "400021533",
        "note": "FIFA M89 · 巴拉圭 vs 法国 · Philadelphia",
        "updated": "2026-07-04T15:04:18+08:00"
      },
      "prediction": {
        "home_win": 18,
        "draw": 23,
        "away_win": 59,
        "score": "0-2",
        "confidence": 74,
        "xg_home": 0.8,
        "xg_away": 1.9,
        "key_factor": "16强 M89 · 巴拉圭 vs 法国 · Alfaro 铁桶 vs 法国豪华锋线 · 泊松 0-2/1-2",
        "score_dist": [
          {
            "score": "0-2",
            "prob": 15.1
          },
          {
            "score": "0-1",
            "prob": 13.1
          },
          {
            "score": "0-3",
            "prob": 11.6
          },
          {
            "score": "1-2",
            "prob": 8.5
          },
          {
            "score": "1-1",
            "prob": 7.3
          },
          {
            "score": "0-4",
            "prob": 6.7
          },
          {
            "score": "1-3",
            "prob": 6.5
          }
        ],
        "insight_factors": [
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "费城夏夜 · 29°C · 湿度 66% · 降雨概率 25% · 西南风 2级；M89 巴拉圭 vs 法国 · 气候影响低 · 夜场凉爽利于法国提速（29°C 夜场）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "16强 M89 · 巴拉圭 vs 法国 · Alfaro 铁桶 vs 法国豪华锋线 · 泊松 0-2/1-2"
          }
        ],
        "base_home_win": 15.3,
        "base_draw": 21.8,
        "base_away_win": 62.9,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": true,
          "closeXg": false,
          "gap": 1.1,
          "notes": [],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 0.56,
        "xg_poisson_away": 2.31,
        "xg_tier_calibrated": true,
        "score_prob": 15.1,
        "score_top3": [
          {
            "score": "0-2",
            "prob": 15.1
          },
          {
            "score": "0-1",
            "prob": 13.1
          },
          {
            "score": "0-3",
            "prob": 11.6
          }
        ],
        "expected_score": "1-2"
      },
      "weather": {
        "city": "费城",
        "country": "美国",
        "venue": "Lincoln Financial Field",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 29,
        "humidity": 66,
        "altitude_m": 12,
        "rain_chance": 25,
        "wind": "西南风 2级",
        "condition_cn": "费城夏夜",
        "impact_level": "LOW",
        "impact_summary": "M89 巴拉圭 vs 法国 · 气候影响低 · 夜场凉爽利于法国提速",
        "home_adapt": 84,
        "away_adapt": 85,
        "weather_factors": [
          {
            "label": "29°C 夜场",
            "impact": "低",
            "detail": "北京时间 7月5日 05:00"
          }
        ],
        "forecast_updated": "2026-07-05 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "甲辰日",
          "day_summary": "甲辰日——木土相制",
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
        "home_score": 30,
        "away_score": 70,
        "mystic_verdict": "巴拉圭土守，法国火木盛。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": -2,
        "tier_label": "France -2 · Paraguay +2",
        "implied_tier": -0.75,
        "tier_gap": -1.25,
        "signal": "heat_deflection",
        "signal_cn": "预期偏热",
        "signal_color": "#C8A96E",
        "signal_desc": "舆论一边倒但实力差未同步放大，模型略下调热门方权重。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 France（约 68%）",
        "analysis": "M89 · 巴拉圭 vs 法国 · 法-2@1.09/巴+2@0.80 · 大小 3 大1.05小0.83。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "0-1",
              "prob": 12.8
            },
            {
              "score": "0-2",
              "prob": 12.2
            },
            {
              "score": "1-1",
              "prob": 10.3
            }
          ],
          "one_goal_win_pct": 10.7,
          "two_plus_win_pct": 4.5,
          "full_cover_pct": 22.6,
          "dog_hold_pct": 77.4,
          "fav_win_pct": 63.2,
          "cover_given_win_pct": 28.8,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.3,
          "half_cover_pct": 0,
          "half_lose_pct": 25.4,
          "push_pct": 19.6,
          "margin_full_label": "净胜≥3",
          "margin_half_label": "走水净胜=2",
          "fav_cover_ev": -0.186,
          "dog_cover_ev": 0.186,
          "rational_spread_cn": "主队 守住差距概率略高",
          "total_xg": 2.7,
          "fair_totals_line": 2,
          "over_2_5_pct": 50.5,
          "over_3_pct": 28.3,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 25.4%：常见「赢球但净胜仅 1 球」",
          "full_cover_pct_raw": 18.2,
          "dog_hold_pct_raw": 81.8
        },
        "spread_odds": {
          "fav": 1.09,
          "dog": 0.8,
          "note": "Paraguay 1.09 · France 0.8"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 3,
          "market_goals_int": 3,
          "line_label": "总进球约 3 个",
          "implied_xg_total": 2.7,
          "fair_line": 2,
          "line_gap": 1,
          "over_pct": 27.6,
          "under_pct": 72.4,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 3 约 72.4% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 3,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "Paraguay +2@0.83 · France -2@0.99",
          "spread_now_cn": "Paraguay +2@0.8 · France -2@1.09",
          "totals_now_cn": "大小 3 · 大 1.05 / 小 0.83",
          "tag": "correction",
          "tag_cn": "向模型修正",
          "tag_color": "#C8A96E",
          "detail_cn": "退 4 档 · 热门 0.99→1.09（抬水） · 受让 0.83→0.8（降水） 现盘去水隐含：France 46.3% · Paraguay 53.7%（超收 3.4%） 模型穿盘（现档 France -2 · Paraguay +2）：France 22.6% · Paraguay 77.4% 模型−市场：France -23.7pp · Paraguay +23.7pp 期望 ROI@现水：France -45.9% · Paraguay +78.2% 盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
          "actuarial": {
            "actuarial_type": "correction",
            "actuarial_cn": "向模型修正",
            "actuarial_color": "#C8A96E",
            "actuarial_desc": "盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
            "summary_cn": "退 4 档 · 热门 0.99→1.09（抬水） · 受让 0.83→0.8（降水） 现盘去水隐含：France 46.3% · Paraguay 53.7%（超收 3.4%） 模型穿盘（现档 France -2 · Paraguay +2）：France 22.6% · Paraguay 77.4% 模型−市场：France -23.7pp · Paraguay +23.7pp 期望 ROI@现水：France -45.9% · Paraguay +78.2% 盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
            "line_delta": -4,
            "line_delta_cn": "退 4 档",
            "fav_odds_delta": 0.1,
            "dog_odds_delta": -0.03,
            "water_move_cn": "热门 0.99→1.09（抬水） · 受让 0.83→0.8（降水）",
            "open_tier": 2,
            "open_tier_label": "Paraguay -2 · France +2",
            "now_tier": -2,
            "implied_tier": -0.75,
            "open_tier_gap": 2.75,
            "now_tier_gap": -1.25,
            "open_devig": {
              "fav_pct": 47.9,
              "dog_pct": 52.1,
              "overround_pct": 4.9
            },
            "now_devig": {
              "fav_pct": 46.3,
              "dog_pct": 53.7,
              "overround_pct": 3.4
            },
            "model_cover_open_pct": 13.2,
            "model_cover_now_pct": 22.6,
            "model_dog_cover_now_pct": 77.4,
            "market_fav_cover_now_pct": 46.3,
            "market_dog_cover_now_pct": 53.7,
            "model_vs_market_fav_pp": -23.7,
            "model_vs_market_dog_pp": 23.7,
            "fav_roi_pct": -45.9,
            "dog_roi_pct": 78.2,
            "fav_name": "France",
            "dog_name": "Paraguay"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "correction",
          "actuarial_cn": "向模型修正",
          "actuarial_color": "#C8A96E",
          "actuarial_desc": "盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
          "summary_cn": "退 4 档 · 热门 0.99→1.09（抬水） · 受让 0.83→0.8（降水） 现盘去水隐含：France 46.3% · Paraguay 53.7%（超收 3.4%） 模型穿盘（现档 France -2 · Paraguay +2）：France 22.6% · Paraguay 77.4% 模型−市场：France -23.7pp · Paraguay +23.7pp 期望 ROI@现水：France -45.9% · Paraguay +78.2% 盘路向 xG 隐含档位收敛，属于定价修正而非单向诱盘。",
          "line_delta": -4,
          "line_delta_cn": "退 4 档",
          "fav_odds_delta": 0.1,
          "dog_odds_delta": -0.03,
          "water_move_cn": "热门 0.99→1.09（抬水） · 受让 0.83→0.8（降水）",
          "open_tier": 2,
          "open_tier_label": "Paraguay -2 · France +2",
          "now_tier": -2,
          "implied_tier": -0.75,
          "open_tier_gap": 2.75,
          "now_tier_gap": -1.25,
          "open_devig": {
            "fav_pct": 47.9,
            "dog_pct": 52.1,
            "overround_pct": 4.9
          },
          "now_devig": {
            "fav_pct": 46.3,
            "dog_pct": 53.7,
            "overround_pct": 3.4
          },
          "model_cover_open_pct": 13.2,
          "model_cover_now_pct": 22.6,
          "model_dog_cover_now_pct": 77.4,
          "market_fav_cover_now_pct": 46.3,
          "market_dog_cover_now_pct": 53.7,
          "model_vs_market_fav_pp": -23.7,
          "model_vs_market_dog_pp": 23.7,
          "fav_roi_pct": -45.9,
          "dog_roi_pct": 78.2,
          "fav_name": "France",
          "dog_name": "Paraguay"
        },
        "totals_pick_layers": {
          "model_side": "under",
          "situation_side": "neutral",
          "market_line_side": "under",
          "market_odds_side": "under",
          "market_side": "under",
          "recommended_side": "under",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "under",
            "line": "under",
            "odds": "under",
            "situation": "neutral"
          },
          "vote_summary_cn": "小球(model) · 小球(line) · 小球(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘（巴拉圭受让）",
          "tendency_reason_cn": "法国 -2 深盘须净胜3球，受让方巴拉圭降水低水(0.80)资金进；巴拉圭铁桶（点球淘汰德国），法国胜但难净胜3球 · ★巴+2 · 小3副项。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "dog",
            "label_cn": "巴拉圭 +2 @0.80",
            "reason_cn": "法国 -2 须净胜3球是硬指标；巴拉圭 Alfaro 低位铁桶（点球淘汰德国），受让 +2 降水低水 0.80 市场压受让。法国 0-1/0-2/1-2 皆守住（净胜2走水）· ★主项。"
          },
          "totals": {
            "side": "under",
            "label_cn": "小球 3 @0.83",
            "reason_cn": "over 0.96→1.05 抬水资金偏小；法国破铁桶常见 1-0/2-1 · 线 3 整数（2球内全赢、恰3走水）· 副项。",
            "skipped": true,
            "skip_reason_cn": "淘汰赛副项不打小球（R9）"
          },
          "picked_at": "2026-07-05-prematch",
          "pick_meta": {
            "model_side": "under",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "under",
            "market_side": "under",
            "pick_side": "under",
            "recommended_side": "under",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "under",
              "line": "under",
              "odds": "under",
              "situation": "neutral"
            },
            "vote_summary_cn": "小球(model) · 小球(line) · 小球(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 27.6,
            "line_gap": 1
          },
          "ko_totals_policy": {
            "enabled": true,
            "rule_id": "R9",
            "rule_cn": "★=大小无模型/盘冲突 · 副项仅大球 · 大信心仅绑★=大小",
            "applied_at": "buildDepthCalibration"
          }
        },
        "applied_delta": {
          "home_win": 3,
          "draw": 1,
          "away_win": -4
        },
        "adjustment_note": "模型微调：主胜 +3% · 平 +1% · 客 -4%",
        "adjusted_probs": {
          "home_win": 18,
          "draw": 23,
          "away_win": 59
        },
        "display_summary": {
          "fav_name": "France",
          "expected_total_goals": 2.58,
          "poisson_fav_win_pct": 61.4,
          "small_lead_pct": 25.8,
          "small_example_score": "0-1",
          "small_example_pct": 13.3,
          "big_cover_pct": 35.6,
          "big_example_score": "0-2",
          "big_example_pct": 12.2,
          "win_shape": {
            "fav_name": "France",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 32.1%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 13.3,
                "pct": 21.7
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.5,
                "pct": 20.3
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 19.7,
                "pct": 32.1
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 15.9,
                "pct": 25.9
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 42
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 32.1
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 25.9
              }
            ],
            "fav_win_pct": 59
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
              "note": "Paraguay 暂无重要伤停 · France：Ousmane Dembélé 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M89 巴拉圭 vs 法国 · 气候影响低 · 夜场凉爽利于法国提速"
            }
          ],
          "xg_context": {
            "baseline_home": 0.8,
            "baseline_away": 1.9,
            "adjusted_home": 0.8,
            "adjusted_away": 1.83,
            "note": "基准 xG 0.8–1.9 → 调整后 0.8–1.83"
          },
          "calibration": {
            "signal_cn": "预期偏热",
            "signal_color": "#C8A96E",
            "signal_desc": "舆论一边倒但实力差未同步放大，模型略下调热门方权重。",
            "tier_gap": -1.25,
            "implied_tier_label": "France -0.75 · Paraguay +0.75",
            "market_tier_label": "France -2 · Paraguay +2",
            "summary_cn": "与模型 xG 对照：预期偏热 · 赛前净胜看法低于 xG 隐含约 1.25 · 模型认为仅小胜 1 球仍约 25.6% · 净胜≥3（全达标）约 21.9%"
          },
          "win_outlook": {
            "fav_name": "France",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 42
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 32.1
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 25.9
              }
            ],
            "margin_line_cn": "France · 赛前净胜参考 净胜≥3（全达标） · 走水净胜=2",
            "margin_meet_pct": 21.5,
            "margin_half_pct": 0,
            "margin_fail_pct": 25.8,
            "margin_full_label": "净胜≥3",
            "margin_half_label": "走水净胜=2",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 3,
            "totals_line_cn": "总进球参考 3",
            "fair_totals_line": 2,
            "model_total_xg": 2.63,
            "totals_line_gap": 1,
            "totals_high_pct": 26.2,
            "totals_low_pct": 73.8,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 25.5,
            "win_margin2_low_total_pct": 12.2,
            "win_margin2_high_total_pct": 15.9,
            "readout_cn": "取胜约 59%；若取胜，以「险胜收工」为主（42%）。 对着赛前净胜参考，净胜≥3（全达标）约 21.5%；对着总进球参考 3，模型超线概率约 26.2%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 3。"
          },
          "totals_line": 3,
          "score_patterns": [
            {
              "score": "0-1",
              "pct": 13.2
            },
            {
              "score": "0-2",
              "pct": 12.1
            },
            {
              "score": "1-1",
              "pct": 10.6
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 3,
            "line_gap": 1,
            "over_pct": 26.2,
            "gap_warning": {
              "level": "medium",
              "cn": "总进球参考 3 vs 合理值 2，高于合理值 1"
            },
            "totals_outlook": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 26,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2）。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": false,
              "over_pct": 26.2,
              "line_gap": 1,
              "market_line": 3,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 3",
              "caution_public_high": true
            },
            "summary_cn": "预测 2.6 · 合理值 2 · 总进球参考 3（高于合理值 1） · 高于合理值 1 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "France -2 穿盘：达标与否难下定论",
            "sub_cn": "France 胜 61.7% · 胜后穿 27.4% · Paraguay +2 守 78.1% 进球氛围：倾向沉闷",
            "spread": {
              "level": "uncertain",
              "label_cn": "净胜幅度难下定论",
              "color": "#8A96A8",
              "fav_name": "France",
              "dog_name": "Paraguay",
              "fav_handicap_cn": "France -2",
              "dog_handicap_cn": "Paraguay +2",
              "market_expect_cn": "France -2 · 净胜≥3",
              "meet_pct": 21.9,
              "dog_hold_pct": 78.1,
              "fav_win_pct": 61.7,
              "cover_given_win_pct": 27.4,
              "full_cover_pct_raw": 16.9,
              "meet_pct_label": "France -2 穿盘概率（校准）",
              "dog_hold_label": "Paraguay +2 守住概率（校准）",
              "two_stage_cn": "France 取胜约 61.7% · 赢球后穿盘约 27.4% · Paraguay +2 守住约 78.1%",
              "grid_tail_pct": null,
              "verdict_cn": "达标与否难下定论",
              "headline_cn": "France -2 穿盘：达标与否难下定论",
              "pill_cn": "France 胜 61.7% · 胜后穿 27.4% · Paraguay +2 守 78.1%",
              "detail_cn": "France 取胜约 61.7% · 赢球后穿盘约 27.4% · Paraguay +2 守住约 78.1%（泊松 raw 16.9% → 校准 21.9%）（仅胜 1 球约 25.6%）。",
              "extra_stats_cn": "仅胜 1 球约 25.6%",
              "full_cover_pct": 21.9,
              "half_cover_pct": 0,
              "lose1_pct": 25.6,
              "margin_full_label": "净胜≥3",
              "margin_half_label": "走水净胜=2",
              "tier_gap": -1.25,
              "show_cover": true
            },
            "totals": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 26,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2）。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": false,
              "over_pct": 26.2,
              "line_gap": 1,
              "market_line": 3,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 3",
              "caution_public_high": true
            },
            "draw_risk": null,
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "让球盘",
                "outlook": {
                  "level": "uncertain",
                  "label_cn": "净胜幅度难下定论",
                  "color": "#8A96A8",
                  "fav_name": "France",
                  "dog_name": "Paraguay",
                  "fav_handicap_cn": "France -2",
                  "dog_handicap_cn": "Paraguay +2",
                  "market_expect_cn": "France -2 · 净胜≥3",
                  "meet_pct": 21.9,
                  "dog_hold_pct": 78.1,
                  "fav_win_pct": 61.7,
                  "cover_given_win_pct": 27.4,
                  "full_cover_pct_raw": 16.9,
                  "meet_pct_label": "France -2 穿盘概率（校准）",
                  "dog_hold_label": "Paraguay +2 守住概率（校准）",
                  "two_stage_cn": "France 取胜约 61.7% · 赢球后穿盘约 27.4% · Paraguay +2 守住约 78.1%",
                  "grid_tail_pct": null,
                  "verdict_cn": "达标与否难下定论",
                  "headline_cn": "France -2 穿盘：达标与否难下定论",
                  "pill_cn": "France 胜 61.7% · 胜后穿 27.4% · Paraguay +2 守 78.1%",
                  "detail_cn": "France 取胜约 61.7% · 赢球后穿盘约 27.4% · Paraguay +2 守住约 78.1%（泊松 raw 16.9% → 校准 21.9%）（仅胜 1 球约 25.6%）。",
                  "extra_stats_cn": "仅胜 1 球约 25.6%",
                  "full_cover_pct": 21.9,
                  "half_cover_pct": 0,
                  "lose1_pct": 25.6,
                  "margin_full_label": "净胜≥3",
                  "margin_half_label": "走水净胜=2",
                  "tier_gap": -1.25,
                  "show_cover": true
                },
                "text": "France 胜 61.7% · 胜后穿 27.4% · Paraguay +2 守 78.1%",
                "color": "#8A96A8",
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
                  "meter_pos": 26,
                  "lean_side": "dull",
                  "lean_strength": "clear",
                  "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
                  "pill_cn": "倾向沉闷",
                  "detail_cn": "倾向沉闷——小比分概率高（合理值 2）。",
                  "headline_cn": "进球氛围：倾向沉闷",
                  "show_lean": false,
                  "over_pct": 26.2,
                  "line_gap": 1,
                  "market_line": 3,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 3",
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
              "team": "Paraguay",
              "first_goal_pct": 30.4,
              "start_score": "1-0",
              "fav_name": "France",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 60.9,
              "small_lead_pct": 19.2,
              "big_lead_pct": 13.9,
              "fav_win_pct": 33.1,
              "fav_draw_pct": 27.8,
              "fav_lose_pct": 39.1,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "France 追平（平局）",
                  "pct": 27.8
                },
                {
                  "key": "win1",
                  "label": "France 净胜1球翻盘（如 2-1）",
                  "pct": 19.2
                },
                {
                  "key": "win2",
                  "label": "France 净胜≥2球翻盘（如 3-1）",
                  "pct": 13.9
                },
                {
                  "key": "upset_hold",
                  "label": "Paraguay 保持胜果至终场",
                  "pct": 39.1
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 33.5 分",
                "first_goal_wait": 33.5,
                "fast_pct": 52.1,
                "moderate_pct": 14.7,
                "slow_pct": 33.2,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 52.1
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 33.2
                  }
                ]
              },
              "big_delta": -21.7,
              "small_delta": -6.6,
              "narrative": "Paraguay 先破门（已 1-0） → 「巩固防守」；France 「组织反扑」。热门先丢球（已 1-0），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "France",
              "first_goal_pct": 69.6,
              "start_score": "0-1",
              "fav_name": "France",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 94.9,
              "small_lead_pct": 27.5,
              "big_lead_pct": 54,
              "fav_win_pct": 81.5,
              "fav_draw_pct": 13.4,
              "fav_lose_pct": 5.1,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "France 保持胜果（净胜≥1）",
                  "pct": 81.5
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 13.4
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 5.1
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 35 分",
                "first_goal_wait": 35,
                "fast_pct": 50.5,
                "moderate_pct": 14.7,
                "slow_pct": 34.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 50.5
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 34.9
                  }
                ]
              },
              "big_delta": 18.4,
              "small_delta": 1.7,
              "narrative": "France 先破门（已 0-1） → 「巩固防守」；Paraguay 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "France",
                "state_label": "France 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 42
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 32.1
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 25.9
                  }
                ],
                "margin_line_cn": "France · 赛前净胜参考 净胜≥3（全达标） · 走水净胜=2",
                "margin_meet_pct": 26.8,
                "margin_half_pct": 0,
                "margin_fail_pct": 27.5,
                "margin_full_label": "净胜≥3",
                "margin_half_label": "走水净胜=2",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": 20.4,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 3,
                "totals_line_cn": "总进球参考 3",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.11,
                "totals_line_gap": 0.75,
                "totals_high_pct": 35,
                "totals_low_pct": 65,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 29.4,
                "win_margin2_low_total_pct": 17.2,
                "win_margin2_high_total_pct": 24.7,
                "readout_cn": "France 已 1-0 领先：仍取胜约 81.5%。 对着总进球参考 3，模型超线概率约 35%。 常见收尾：2-0 约 17.2%（部分达标，非全达标）； 3-0+ 约 20.4%（对着 净胜≥3 全达标）。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.6 · 合理值 2 · 总进球参考 3（高于合理值 1） · 高于合理值 1 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 3",
              "totals_high_pct": 26.2,
              "type_tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 19,
              "readout_cn": "France · 压制局。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 19,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.35,
            "xg_away_ht": 0.81,
            "xg_home_2h": 0.45,
            "xg_away_2h": 1.02,
            "home_win": 15,
            "draw": 40.9,
            "away_win": 44.1,
            "top_score": "0-0",
            "top_score_prob": 31.4,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 31.4
              },
              {
                "score": "0-1",
                "prob": 25.4
              },
              {
                "score": "1-0",
                "prob": 11
              }
            ],
            "ht_goals_expected": 1.16,
            "ht_over_0_5_pct": 68.6,
            "ht_over_1_5_pct": 32.3,
            "pick": "away",
            "pick_name": "France",
            "summary_cn": "半场 xG 0.35–0.81（约占全场 44%） · 最可能 0-0（31.4%） · 胜平负 15/40.9/44.1 · 半场≥1球约 68.6%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】France · 压制局。 · 与模型 xG 对照：预期偏热 · 赛前净胜看法低于 xG 隐含约 1.25 · 模型认为仅小胜 1 球仍约 25.6% · 净胜≥3（全达标）约 21.9%（模型微调：主胜 +3% · 平 +1% · 客 -4%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.7,
          "xg_gap": 1.1,
          "xg_home": 0.8,
          "xg_away": 1.9,
          "xg_baseline_home": 0.8,
          "xg_baseline_away": 1.9,
          "xg_note": "结构推演用基准 xG 0.8–1.9（进球氛围用调整后 0.8–1.83）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "France",
          "dog_name": "Paraguay",
          "fav_xg": 1.9,
          "dog_xg": 0.8,
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
          "prob_over_line": 27.6,
          "prob_meet_guess": 50,
          "guess_n": 3,
          "prob_4_plus": 27.6,
          "prob_2_or_less": 50,
          "totals_line": 3,
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
          "summary_cn": "【路径·基准 xG】合计 2.7 · France 1.9 / Paraguay 0.8 → 主路径「铁局/小比分」约 54%。 至少 3 球约 50% · 超 3 约 27.6% · ≤2球 50%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": -2,
        "tier_label": "France -2 · Paraguay +2",
        "totals_line": 3,
        "over_pct": 26.2,
        "fair_line": 2,
        "line_gap": 1,
        "full_cover_pct": 21.9,
        "fav_win_pct": 61.7,
        "cover_given_win_pct": 27.4,
        "spread_level": "uncertain",
        "spread_market_expect": "France -2 · 净胜≥3",
        "line_move_tag": "correction",
        "line_move_cn": "向模型修正",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（巴拉圭受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "巴拉圭 +2 @0.80",
        "agent_totals_cn": null,
        "agent_totals_skipped": true,
        "agent_totals_skip_cn": "淘汰赛副项不打小球（R9）",
        "ko_totals_policy": "R9",
        "totals_level": "clear_low",
        "totals_show_lean": false,
        "totals_lean_side": "dull"
      }
    }
  ],
  "nextMatch": {
    "group": "KO",
    "matchday": null,
    "date": "2026-07-04",
    "time": "12:00",
    "time_local": "12:00 CT",
    "timezone": "CDT (UTC-5)",
    "time_beijing": "01:00",
    "date_beijing": "7月5日",
    "time_beijing_full": "北京时间 7月5日 01:00",
    "venue": "NRG Stadium",
    "city": "Houston, USA",
    "home": {
      "name": "Canada",
      "iso": "ca",
      "fifaRank": 40,
      "rating": 77
    },
    "away": {
      "name": "Morocco",
      "iso": "ma",
      "fifaRank": 13,
      "rating": 84
    },
    "teaser": "16强 M90 · 加拿大 vs 摩洛哥",
    "home_win": 26,
    "draw": 36,
    "away_win": 38,
    "predicted_score": "0-1",
    "key_player_home": "Alphonso Davies",
    "key_player_away": "Achraf Hakimi"
  },
  "upcomingMatches": [
    {
      "group": "KO",
      "time_beijing_full": "北京时间 7月5日 05:00",
      "venue": "Lincoln Financial Field",
      "city": "Philadelphia, USA",
      "home": {
        "name": "Paraguay",
        "iso": "py"
      },
      "away": {
        "name": "France",
        "iso": "fr"
      },
      "teaser": "16强 M89"
    }
  ]
};
