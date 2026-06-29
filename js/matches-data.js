// 今日赛事 — Day 19 enriched
// Last updated: 2026-06-29T15:31:12+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-29T15:31:12+08:00",
  "syncSource": "FIFA 赛程 · Day 19 · 32强 3场 enriched",
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
      "text": "🏁 昨日 M73：南非 0-1 加拿大 · Eustaquio 90+2'",
      "time": "6月29日"
    },
    {
      "tag": "PREVIEW",
      "text": "⚔️ 今日 3 场：巴西-日本(01:00) · 德国-巴拉圭(04:30) · 荷兰-摩洛哥(09:00)",
      "time": "6月30日"
    },
    {
      "tag": "PREVIEW",
      "text": "M75 胜者 vs 加拿大(M73) · M90 16强走廊",
      "time": "路径"
    }
  ],
  "todayMatches": [
    {
      "id": "m76",
      "fifa_match_number": 76,
      "fifa_match_id": "400021516",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M76 · C组冠军 vs F组亚军",
      "knockout_next": "胜者 → M91（16强 · 对 M78 胜者）",
      "date": "2026-06-29",
      "time": "12:00",
      "time_local": "12:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "01:00",
      "date_beijing": "6月30日",
      "time_beijing_full": "北京时间 6月30日 01:00",
      "venue": "NRG Stadium",
      "city": "Houston, USA",
      "note": "32强 M76 · 巴西 vs 日本 · 休斯顿",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-2-3-1",
          "home": "Alisson; Danilo, Marquinhos, Gabriel, Wendell; Paquetá, Gerson; Raphinha, Rodrygo, Vinícius; Richarlison",
          "away": "Suzuki; Ito, Tomiyasu, Taniguchi; Endo, Morita; Kubo, Minamino, Mitoma; Maeda, Asano",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Brazil",
        "iso": "br",
        "flag": "",
        "fifa_rank": 3,
        "rating": 92,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Dorival Júnior",
        "stars": [
          {
            "name": "Vinícius Júnior",
            "pos": "LW",
            "club": "Real Madrid",
            "rating": 9,
            "desc": "一对一 · 7 分零失球轴心"
          },
          {
            "name": "Raphinha",
            "pos": "RW",
            "club": "Barcelona",
            "rating": 8.6,
            "desc": "宽度 · 定位球"
          },
          {
            "name": "Bruno Guimarães",
            "pos": "CDM",
            "club": "Newcastle",
            "rating": 8.5,
            "desc": "屏障 · 转换发起点"
          }
        ],
        "star": {
          "name": "Vinícius Júnior",
          "pos": "LW",
          "club": "Real Madrid",
          "rating": 9,
          "desc": "C 组头名 · 爆点"
        },
        "injuries": [
          {
            "player": "Vinícius Júnior",
            "status": "FIT",
            "note": "C 组头名 · 7 分零失球 · 左路爆点",
            "confirmed": true
          },
          {
            "player": "Raphinha",
            "status": "FIT",
            "note": "宽度+定位球 · 3 球 2 助",
            "confirmed": true
          },
          {
            "player": "Rodrygo",
            "status": "FIT",
            "note": "肋部轮换选项 · 破密集",
            "confirmed": true
          },
          {
            "player": "Danilo",
            "status": "DOUBT",
            "note": "小组赛末段轻微肌肉疲劳 · 赛前队检",
            "confirmed": false
          }
        ],
        "rumors": [
          "Dorival：「淘汰赛没有容错——日本 F 组不败，须早破门避免加时」",
          "预计 4-2-3-1 高位 · Vinícius/Raphinha 宽度拉满破日本低位",
          "C 组曾 1-1 摩洛哥 · 破密集+定位球是今日轴心",
          "休斯顿夜场 · 体能优势在 70 分钟后或显现"
        ]
      },
      "away": {
        "name": "Japan",
        "iso": "jp",
        "flag": "",
        "fifa_rank": 18,
        "rating": 78,
        "form": [
          "W",
          "D",
          "D",
          "W",
          "D"
        ],
        "coach": "Hajime Moriyasu",
        "stars": [
          {
            "name": "Takefusa Kubo",
            "pos": "RW",
            "club": "Real Sociedad",
            "rating": 8.2,
            "desc": "肋部 · 破防第一选择"
          },
          {
            "name": "Kaoru Mitoma",
            "pos": "LW",
            "club": "Brighton",
            "rating": 8,
            "desc": "速度 · 纵深"
          },
          {
            "name": "Wataru Endo",
            "pos": "CDM",
            "club": "Liverpool",
            "rating": 7.9,
            "desc": "绞杀 · 屏障"
          }
        ],
        "star": {
          "name": "Takefusa Kubo",
          "pos": "RW",
          "club": "Real Sociedad",
          "rating": 8.2,
          "desc": "F 组次席 · 反击"
        },
        "injuries": [
          {
            "player": "Takefusa Kubo",
            "status": "FIT",
            "note": "F 组次席 · 一对一破局",
            "confirmed": true
          },
          {
            "player": "Kaoru Mitoma",
            "status": "FIT",
            "note": "左翼速度 · 反击第一选择",
            "confirmed": true
          },
          {
            "player": "Wataru Endo",
            "status": "FIT",
            "note": "屏障 · 绞杀巴西中路",
            "confirmed": true
          },
          {
            "player": "Ko Itakura",
            "status": "DOUBT",
            "note": "中卫轻微撞伤 · 末练减量",
            "confirmed": false
          }
        ],
        "rumors": [
          "Moriyasu：「对巴西须守平争胜——受让 +0.5/1 结构是我们熟悉的」",
          "预计 4-2-3-1 低位+5 人防线 · Kubo/Mitoma 反击",
          "F 组对荷兰、瑞典均不败 · 定位球+转换是冷门路径",
          "Agent 大信心倾向日本受让 · 皇冠热门巴西高水"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 0,
        "away_wins": 1,
        "recent": [
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "1-0",
            "winner": "Japan"
          }
        ],
        "note": "日本偶有冷门"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-29",
        "name": "Maurizio Mariani",
        "nation": "Italy",
        "iso": "it",
        "age": 43,
        "wc_experience": "2026 世界杯 · 32强 M76 主裁 · 小组赛沙特-乌拉圭、哥伦比亚-刚果(金) · Serie A 精英 · 本届唯一意大利主裁",
        "avg_yellow": 4.4,
        "avg_red": 0.12,
        "avg_penalty": 0.28,
        "home_win_rate": 51,
        "bias_index": 52,
        "bias_note": "意大利主裁执法休斯顿 NRG 夜场。巴西 C 组零失球高位压迫 vs 日本 F 组不败低位转换；对 Vinícius 速度犯规与 Endo 战术犯规尺度受关注，优势判罚利于日本反击。",
        "tendencies": [
          "助理：Daniele Bindoni、Alberto Tegoni（意大利）",
          "第四官员 Sandro Schärer（瑞士）· 候补 Stéphane De Almeida（SUI）",
          "VAR Marco Di Bello（意大利）· AVAR Juan Martinez（西班牙）",
          "休斯顿 32°C 封闭 · 补水暂停后体能犯规或升",
          "小组赛已执法巴西相关场次 · 对南美-欧洲对抗尺度有经验"
        ],
        "officials": {
          "ar1": "Daniele Bindoni (ITA)",
          "ar2": "Alberto Tegoni (ITA)",
          "fourth": "Sandro Schärer (SUI)",
          "var": "Marco Di Bello (ITA)",
          "avar": "Juan Martinez (ESP)"
        },
        "fifa_match_id": "400021516",
        "note": "FIFA M76 · 巴西 vs 日本 · 休斯顿 NRG Stadium",
        "updated": "2026-06-29T15:31:12+08:00"
      },
      "prediction": {
        "home_win": 54,
        "draw": 29,
        "away_win": 17,
        "score": "1-0",
        "confidence": 76,
        "xg_home": 1.88,
        "xg_away": 0.98,
        "key_factor": "32强 M76 · 巴西 C1（7 分零失球）vs 日本 F2（5 分不败）· 日本低位+转换 · 泊松 2-0/1-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 13.3
          },
          {
            "score": "2-0",
            "prob": 13
          },
          {
            "score": "1-1",
            "prob": 9.7
          },
          {
            "score": "2-1",
            "prob": 9.5
          },
          {
            "score": "3-0",
            "prob": 8.5
          },
          {
            "score": "0-0",
            "prob": 6.8
          },
          {
            "score": "3-1",
            "prob": 6.2
          }
        ],
        "insight_factors": [
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "休斯顿夏夜 · 32°C · 湿度 58%；M76 巴西 vs 日本 · 高温封闭"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M76 · 巴西 C1（7 分零失球）vs 日本 F2（5 分不败）· 日本低位+转换 · 泊松 2-0/1-0"
          }
        ],
        "base_home_win": 53,
        "base_draw": 30,
        "base_away_win": 18,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 7,
          "ironBucket": true,
          "closeXg": false,
          "gap": 0.9,
          "notes": [
            "热门难破密集"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.96,
        "xg_poisson_away": 0.73,
        "xg_tier_calibrated": true,
        "score_prob": 13.3,
        "score_top3": [
          {
            "score": "1-0",
            "prob": 13.3
          },
          {
            "score": "2-0",
            "prob": 13
          },
          {
            "score": "1-1",
            "prob": 9.7
          }
        ],
        "expected_score": "2-1"
      },
      "weather": {
        "city": "休斯顿",
        "country": "美国",
        "venue": "NRG Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "封闭式",
        "temp": 32,
        "humidity": 58,
        "altitude_m": 15,
        "rain_chance": 20,
        "wind": "封闭",
        "condition_cn": "休斯顿夏夜",
        "impact_level": "MEDIUM",
        "impact_summary": "M76 巴西 vs 日本 · 高温封闭",
        "home_adapt": 88,
        "away_adapt": 84,
        "weather_factors": [
          {
            "label": "32°C 封闭",
            "impact": "中",
            "detail": "北京时间 6月30日 01:00"
          }
        ],
        "forecast_updated": "2026-06-29 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "己亥日",
          "day_summary": "己亥日——水土相涵",
          "hour_home": "见各场",
          "hour_home_element": "水"
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
        "home_score": 68,
        "away_score": 32,
        "mystic_verdict": "巴西火土旺，日本水守反击。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.75,
        "tier_label": "Brazil -0.75 · Japan +0.75",
        "implied_tier": 0.25,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Brazil（约 62%）",
        "analysis": "M76 · 巴西 vs 日本 · 皇冠 -0.5/1 巴 0.96 / 日 0.88 · 大小 2/2.5 大 0.88 小 1.00。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 10.8
            },
            {
              "score": "1-1",
              "prob": 10.6
            },
            {
              "score": "2-0",
              "prob": 10.2
            }
          ],
          "one_goal_win_pct": 24.3,
          "two_plus_win_pct": 34,
          "full_cover_pct": 50.1,
          "dog_hold_pct": 49.9,
          "fav_win_pct": 58.3,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.3,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0.166,
          "dog_cover_ev": -0.166,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 2.86,
          "fair_totals_line": 2,
          "over_2_5_pct": 54.3,
          "over_3_pct": 31.9,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 58.3%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 58.3,
          "dog_hold_pct_raw": 41.7
        },
        "spread_odds": {
          "fav": 0.96,
          "dog": 0.88,
          "note": "Brazil 0.96 · Japan 0.88"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "market_goals_int": 3,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.86,
          "fair_line": 2,
          "line_gap": 0.25,
          "over_pct": 65.7,
          "under_pct": 34.3,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大比分侧 0.88 / 小比分侧 1",
          "totals_odds": {
            "over": 0.88,
            "under": 1,
            "note": "大比分 0.88 · 小比分 1"
          },
          "rational_cn": "模型略看大比分（超 2.25 约 65.7%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "market_line_movement": {
          "wc_note": "休斯顿 neutral · 主客仅为 FIFA 标记",
          "spread_open_cn": "Brazil -0.5/1@1.04 · Japan +0.5/1@0.8",
          "spread_now_cn": "Brazil -0.5/1@0.96 · Japan +0.5/1@0.88",
          "totals_now_cn": "大小 2/2.5 · 大 0.88 / 小 1",
          "tag": "fav_defense",
          "tag_cn": "降大小 · 巴西高水",
          "tag_color": "#D95F6A",
          "detail_cn": "让球 -0.5/1 不动 · 巴西 1.04→0.96 仍高水、日本 0.80→0.88；大小 2.5→2/2.5，大 1.00→0.88、小 0.80→1.00 抬水。"
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
          "tendency_cn": "更倾向让球盘",
          "tendency_reason_cn": "巴西 -0.5/1 @0.96 高水穿盘难 · 日本 +0.5/1 不败/赢半结构优于大小降盘后的噪音。",
          "confidence": "high",
          "confidence_cn": "大信心",
          "confidence_reason_cn": "皇冠热门高水 + 模型「大众心理预期偏高」· 日本小组赛 5 分不败 · 受让 +0.5/1 @0.88 为今日最清晰「热门防守」样本。",
          "spread": {
            "side": "dog",
            "label_cn": "日本 +0.5/1 @0.88",
            "reason_cn": "巴西 1.04→0.96 仍高水；日本低位+转换 · 平局/小负赢半区 · 符合先不输。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2/2.5 @0.88",
            "reason_cn": "线 2.5→2/2.5 降盘但大 1.00→0.88 低水 · 小 0.80→1.00 抬水卖小球 · 模型总 xG 约 2.9。"
          },
          "picked_at": "2026-06-30",
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
            "over_pct": 65.7,
            "line_gap": 0.25
          }
        },
        "applied_delta": {
          "home_win": 2,
          "draw": -1,
          "away_win": -1
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 -1% · 客 -1%",
        "adjusted_probs": {
          "home_win": 54,
          "draw": 29,
          "away_win": 17
        },
        "display_summary": {
          "fav_name": "Brazil",
          "expected_total_goals": 2.51,
          "poisson_fav_win_pct": 55.5,
          "small_lead_pct": 25.5,
          "small_example_score": "1-0",
          "small_example_pct": 13.2,
          "big_cover_pct": 30,
          "big_example_score": "2-0",
          "big_example_pct": 10.9,
          "win_shape": {
            "fav_name": "Brazil",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 30.6%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 13.2,
                "pct": 23.8
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.3,
                "pct": 22.1
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 17,
                "pct": 30.6
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 13,
                "pct": 23.5
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 45.9
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 30.6
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 23.5
              }
            ],
            "fav_win_pct": 54
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 35.4 分",
            "first_goal_wait": 35.4,
            "fast_pct": 57.1,
            "moderate_pct": 14.8,
            "slow_pct": 28.1,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 57.1
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 28.1
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Brazil 暂无重要伤停 · Japan 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M76 巴西 vs 日本 · 高温封闭"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：热门难破密集（平 +7%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.88,
            "baseline_away": 0.98,
            "adjusted_home": 1.66,
            "adjusted_away": 0.88,
            "note": "基准 xG 1.88–0.98 → 调整后 1.66–0.88"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "Brazil -0.25 · Japan +0.25",
            "market_tier_label": "Brazil -0.75 · Japan +0.75",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5"
          },
          "win_outlook": {
            "fav_name": "Brazil",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 45.9
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 30.6
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 23.5
              }
            ],
            "margin_line_cn": "Brazil · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 48.5,
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
            "model_total_xg": 2.54,
            "totals_line_gap": 0.25,
            "totals_high_pct": 59.1,
            "totals_low_pct": 40.9,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 24.1,
            "win_margin2_low_total_pct": 10.9,
            "win_margin2_high_total_pct": 30,
            "readout_cn": "取胜约 54%；若取胜，以「险胜收工」为主（45.9%）。 对着赛前净胜参考，净胜≥1（全达标）约 48.5%；对着总进球参考 2.25，模型超线概率约 59.1%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 13.1
            },
            {
              "score": "1-1",
              "pct": 11.5
            },
            {
              "score": "2-0",
              "pct": 10.9
            }
          ],
          "totals_view": {
            "expected_total": 2.5,
            "fair_line": 2,
            "market_line": 2.25,
            "line_gap": 0.25,
            "over_pct": 59.1,
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
              "over_pct": 59.1,
              "line_gap": 0.25,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.5 · 合理值 2 · 总进球参考 2.25（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Brazil -0.75 穿盘：有达标可能",
            "sub_cn": "Brazil 胜 55.7% · 胜后穿 100% · Japan +0.75 守 51.4% 进球氛围：几乎五五开",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Brazil",
              "dog_name": "Japan",
              "fav_handicap_cn": "Brazil -0.75",
              "dog_handicap_cn": "Japan +0.75",
              "market_expect_cn": "Brazil -0.75 · 净胜≥1",
              "meet_pct": 48.6,
              "dog_hold_pct": 51.4,
              "fav_win_pct": 55.7,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 55.7,
              "meet_pct_label": "Brazil -0.75 穿盘概率（校准）",
              "dog_hold_label": "Japan +0.75 守住概率（校准）",
              "two_stage_cn": "Brazil 取胜约 55.7% · 赢球后穿盘约 100% · Japan +0.75 守住约 51.4%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Brazil -0.75 穿盘：有达标可能",
              "pill_cn": "Brazil 胜 55.7% · 胜后穿 100% · Japan +0.75 守 51.4%",
              "detail_cn": "Brazil 取胜约 55.7% · 赢球后穿盘约 100% · Japan +0.75 守住约 51.4%（泊松 raw 55.7% → 校准 48.6%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 48.6,
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
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 59.1,
              "line_gap": 0.25,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
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
                  "fav_name": "Brazil",
                  "dog_name": "Japan",
                  "fav_handicap_cn": "Brazil -0.75",
                  "dog_handicap_cn": "Japan +0.75",
                  "market_expect_cn": "Brazil -0.75 · 净胜≥1",
                  "meet_pct": 48.6,
                  "dog_hold_pct": 51.4,
                  "fav_win_pct": 55.7,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 55.7,
                  "meet_pct_label": "Brazil -0.75 穿盘概率（校准）",
                  "dog_hold_label": "Japan +0.75 守住概率（校准）",
                  "two_stage_cn": "Brazil 取胜约 55.7% · 赢球后穿盘约 100% · Japan +0.75 守住约 51.4%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Brazil -0.75 穿盘：有达标可能",
                  "pill_cn": "Brazil 胜 55.7% · 胜后穿 100% · Japan +0.75 守 51.4%",
                  "detail_cn": "Brazil 取胜约 55.7% · 赢球后穿盘约 100% · Japan +0.75 守住约 51.4%（泊松 raw 55.7% → 校准 48.6%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 48.6,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "Brazil 胜 55.7% · 胜后穿 100% · Japan +0.75 守 51.4%",
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
                  "over_pct": 59.1,
                  "line_gap": 0.25,
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
              "team": "Brazil",
              "first_goal_pct": 65.4,
              "start_score": "1-0",
              "fav_name": "Brazil",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 93.3,
              "small_lead_pct": 29.1,
              "big_lead_pct": 48.6,
              "fav_win_pct": 77.7,
              "fav_draw_pct": 15.6,
              "fav_lose_pct": 6.6,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Brazil 保持胜果（净胜≥1）",
                  "pct": 77.7
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 15.6
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 6.6
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 36.1 分",
                "first_goal_wait": 36.1,
                "fast_pct": 49.4,
                "moderate_pct": 14.6,
                "slow_pct": 36,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 49.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.6
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 36
                  }
                ]
              },
              "big_delta": 18.6,
              "small_delta": 3.6,
              "narrative": "Brazil 先破门（已 1-0） → 「巩固防守」；Japan 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Brazil",
                "state_label": "Brazil 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 45.9
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 30.6
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 23.5
                  }
                ],
                "margin_line_cn": "Brazil · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 77.7,
                "margin_half_pct": 0,
                "margin_fail_pct": 29.1,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.04,
                "totals_line_gap": 0,
                "totals_high_pct": 73.7,
                "totals_low_pct": 26.3,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 29.6,
                "win_margin2_low_total_pct": 16.6,
                "win_margin2_high_total_pct": 48.6,
                "readout_cn": "Brazil 已 1-0 领先：仍取胜约 77.7%。 对着总进球参考 2.25，模型超线概率约 73.7%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Japan",
              "first_goal_pct": 34.6,
              "start_score": "0-1",
              "fav_name": "Brazil",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 55.3,
              "small_lead_pct": 17.1,
              "big_lead_pct": 10.9,
              "fav_win_pct": 28,
              "fav_draw_pct": 27.3,
              "fav_lose_pct": 44.7,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Brazil 追平（平局）",
                  "pct": 27.3
                },
                {
                  "key": "win1",
                  "label": "Brazil 净胜1球翻盘（如 2-1）",
                  "pct": 17.1
                },
                {
                  "key": "win2",
                  "label": "Brazil 净胜≥2球翻盘（如 3-1）",
                  "pct": 10.9
                },
                {
                  "key": "upset_hold",
                  "label": "Japan 保持胜果至终场",
                  "pct": 44.7
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
              "big_delta": -19.1,
              "small_delta": -8.4,
              "narrative": "Japan 先破门（已 0-1） → 「巩固防守」；Brazil 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.5 · 合理值 2 · 总进球参考 2.25（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 59.1,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 26,
              "readout_cn": "Brazil · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
            "xg_home_ht": 0.73,
            "xg_away_ht": 0.39,
            "xg_home_2h": 0.93,
            "xg_away_2h": 0.49,
            "home_win": 39.7,
            "draw": 42.6,
            "away_win": 17.7,
            "top_score": "0-0",
            "top_score_prob": 32.6,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 32.6
              },
              {
                "score": "1-0",
                "prob": 23.8
              },
              {
                "score": "0-1",
                "prob": 12.7
              }
            ],
            "ht_goals_expected": 1.12,
            "ht_over_0_5_pct": 67.4,
            "ht_over_1_5_pct": 30.8,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.73–0.39（约占全场 44%） · 最可能 0-0（32.6%） · 胜平负 39.7/42.6/17.7 · 半场≥1球约 67.4%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Brazil · 常规对抗。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.86,
          "xg_gap": 0.9,
          "xg_home": 1.88,
          "xg_away": 0.98,
          "xg_baseline_home": 1.88,
          "xg_baseline_away": 0.98,
          "xg_note": "结构推演用基准 xG 1.88–0.98（进球氛围用调整后 1.66–0.88）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Brazil",
          "dog_name": "Japan",
          "fav_xg": 1.88,
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
          "prob_over_line": 65.7,
          "prob_meet_guess": 53.9,
          "guess_n": 3,
          "prob_4_plus": 31.2,
          "prob_2_or_less": 46.1,
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
          "summary_cn": "【路径·基准 xG】合计 2.86 · Brazil 1.88 / Japan 0.98 → 主路径「弱队开花」约 41%。 至少 3 球约 53.9% · 超 2.25 约 65.7% · ≤2球 46.1%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.75,
        "tier_label": "Brazil -0.75 · Japan +0.75",
        "totals_line": 2.25,
        "over_pct": 59.1,
        "fair_line": 2,
        "line_gap": 0.25,
        "full_cover_pct": 48.6,
        "fav_win_pct": 55.7,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Brazil -0.75 · 净胜≥1",
        "line_move_tag": "fav_defense",
        "line_move_cn": "降大小 · 巴西高水",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘",
        "agent_pick_confidence": "high",
        "agent_spread_cn": "日本 +0.5/1 @0.88",
        "agent_totals_cn": "大球 2/2.5 @0.88",
        "totals_level": "neutral",
        "totals_show_lean": false,
        "totals_lean_side": "neutral"
      }
    },
    {
      "id": "m74",
      "fifa_match_number": 74,
      "fifa_match_id": "400021513",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M74 · E组冠军 vs 巴拉圭(3rd)",
      "knockout_next": "胜者 → M89（16强 · 对 M77 胜者）",
      "date": "2026-06-29",
      "time": "16:30",
      "time_local": "16:30 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "04:30",
      "date_beijing": "6月30日",
      "time_beijing_full": "北京时间 6月30日 04:30",
      "venue": "Gillette Stadium",
      "city": "Foxborough, USA",
      "note": "32强 M74 · 德国 vs 巴拉圭 · 波士顿",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 5-4-1",
          "home": "Neuer; Kimmich, Rüdiger, Tah, Mittelstädt; Kroos, Andrich; Wirtz, Musiala, Sané; Havertz",
          "away": "Martínez; Velázquez, Gómez, Alonso; Kaku, Sánchez; Almirón, Sosa, Benítez; Romero, Sosa",
          "source": "BBC 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Germany",
        "iso": "de",
        "flag": "",
        "fifa_rank": 11,
        "rating": 86,
        "form": [
          "W",
          "W",
          "L",
          "W",
          "D"
        ],
        "coach": "Julian Nagelsmann",
        "stars": [
          {
            "name": "Jamal Musiala",
            "pos": "AM",
            "club": "Bayern",
            "rating": 8.8,
            "desc": "肋部 · 深盘破局"
          },
          {
            "name": "Florian Wirtz",
            "pos": "AM",
            "club": "Leverkusen",
            "rating": 8.7,
            "desc": "组织 · 最后一传"
          },
          {
            "name": "Kai Havertz",
            "pos": "ST",
            "club": "Arsenal",
            "rating": 8.4,
            "desc": "支点 · 定位球"
          }
        ],
        "star": {
          "name": "Jamal Musiala",
          "pos": "AM",
          "club": "Bayern",
          "rating": 8.8,
          "desc": "E 组头名 · 穿盘核心"
        },
        "injuries": [
          {
            "player": "Jamal Musiala",
            "status": "FIT",
            "note": "E 组头名 · 肋部穿盘核心",
            "confirmed": true
          },
          {
            "player": "Florian Wirtz",
            "status": "FIT",
            "note": "组织+最后一传",
            "confirmed": true
          },
          {
            "player": "Kai Havertz",
            "status": "FIT",
            "note": "锋线支点 · 定位球",
            "confirmed": true
          },
          {
            "player": "Manuel Neuer",
            "status": "FIT",
            "note": "一门 · 小组赛 3 场全勤",
            "confirmed": true
          }
        ],
        "rumors": [
          "Nagelsmann：「巴拉圭 D 组第3 出线靠防守——须耐心破铁桶」",
          "预计 4-2-3-1 控球压迫 · Musiala/Wirtz 双 10 号位",
          "E 组 10 球 2 场后末轮小负 · 淘汰赛须兑现深盘",
          "Agent 大信心德国 -1/1.5 低水穿盘"
        ]
      },
      "away": {
        "name": "Paraguay",
        "iso": "py",
        "flag": "",
        "fifa_rank": 52,
        "rating": 68,
        "form": [
          "W",
          "D",
          "D",
          "L",
          "W"
        ],
        "coach": "Gustavo Alfaro",
        "stars": [
          {
            "name": "Miguel Almirón",
            "pos": "RW",
            "club": "Newcastle",
            "rating": 7.8,
            "desc": "速度 · 反击第一出口"
          },
          {
            "name": "Diego Gómez",
            "pos": "CM",
            "club": "Brighton",
            "rating": 7.6,
            "desc": "推进 · 长传"
          },
          {
            "name": "Gustavo Gómez",
            "pos": "CB",
            "club": "Palmeiras",
            "rating": 7.7,
            "desc": "队长 · 定位球"
          }
        ],
        "star": {
          "name": "Miguel Almirón",
          "pos": "RW",
          "club": "Newcastle",
          "rating": 7.8,
          "desc": "D 组第3 · 反击"
        },
        "injuries": [
          {
            "player": "Miguel Almirón",
            "status": "FIT",
            "note": "D 组第3 出线 · 反击速度",
            "confirmed": true
          },
          {
            "player": "Diego Gómez",
            "status": "FIT",
            "note": "中场推进 · 长传找 Almirón",
            "confirmed": true
          },
          {
            "player": "Gustavo Gómez",
            "status": "FIT",
            "note": "队长中卫 · 定位球威胁",
            "confirmed": true
          },
          {
            "player": "Omar Sosa",
            "status": "FIT",
            "note": "锋线支点 · 5-4-1 轴心",
            "confirmed": true
          }
        ],
        "rumors": [
          "Alfaro：「对德国没有包袱——5-4-1 低位+定位球偷一个」",
          "D 组净胜球劣势靠第3 名横向比较晋级 · 铁桶心态",
          "预计 5-4-1 极深 · 全场 xG 或低于 1.5",
          "受让 +1/1.5 高水 · 平局即赢半结构"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 0,
        "away_wins": 0,
        "recent": [
          {
            "year": 2010,
            "comp": "友谊赛",
            "score": "3-1",
            "winner": "Germany"
          }
        ],
        "note": "德国历史占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-29",
        "name": "Jalal Jayed",
        "nation": "Morocco",
        "iso": "ma",
        "age": 41,
        "wc_experience": "2026 世界杯 · 32强 M74 主裁 · 小组赛德国-库拉索、葡萄牙-乌兹别克 · CAF 精英裁判",
        "avg_yellow": 4.8,
        "avg_red": 0.15,
        "avg_penalty": 0.32,
        "home_win_rate": 49,
        "bias_index": 50,
        "bias_note": "摩洛哥主裁执法波士顿 Gillette 凌晨场。德国 E 组头名深盘穿盘 vs 巴拉圭 D 组第3 铁桶+定位球；对 Musiala 肋部被拉与巴拉圭禁区拉扯判罚尺度是关键。",
        "tendencies": [
          "助理：Zakaria Brinsi、Mostafa Akarkad（摩洛哥）",
          "第四官员 Ma Ning（中国）· 候补 Zhou Fei（CHN）",
          "VAR Tatiana Guzmán（尼加拉瓜）· AVAR Hamza El-Fariq（摩洛哥）· SVAR Abdullah Al-Shehri（沙特）",
          "小组赛已执法德国 · 熟悉 Nagelsmann 球队节奏",
          "深盘场常见早期点球争议 · 定位球犯规需盯紧"
        ],
        "officials": {
          "ar1": "Zakaria Brinsi (MAR)",
          "ar2": "Mostafa Akarkad (MAR)",
          "fourth": "Ma Ning (CHN)",
          "var": "Tatiana Guzmán (NCA)",
          "avar": "Hamza El-Fariq (MAR)",
          "svar": "Abdullah Al-Shehri (KSA)"
        },
        "fifa_match_id": "400021513",
        "note": "FIFA M74 · 德国 vs 巴拉圭 · 波士顿 Gillette Stadium",
        "updated": "2026-06-29T15:31:12+08:00"
      },
      "prediction": {
        "home_win": 62,
        "draw": 25,
        "away_win": 13,
        "score": "2-0",
        "confidence": 78,
        "xg_home": 1.82,
        "xg_away": 0.72,
        "key_factor": "32强 M74 · 德国 E1 vs 巴拉圭 D 组第3 · 深盘 -1/1.5 · 泊松 2-0/3-0",
        "score_dist": [
          {
            "score": "2-0",
            "prob": 16
          },
          {
            "score": "1-0",
            "prob": 14.3
          },
          {
            "score": "3-0",
            "prob": 12
          },
          {
            "score": "2-1",
            "prob": 8.2
          },
          {
            "score": "1-1",
            "prob": 7.3
          },
          {
            "score": "4-0",
            "prob": 6.7
          },
          {
            "score": "0-0",
            "prob": 6.4
          }
        ],
        "insight_factors": [
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "波士顿夏晨 · 24°C · 湿度 62%；M74 德国 vs 巴拉圭"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M74 · 德国 E1 vs 巴拉圭 D 组第3 · 深盘 -1/1.5 · 泊松 2-0/3-0"
          }
        ],
        "base_home_win": 60,
        "base_draw": 26,
        "base_away_win": 14,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 4,
          "ironBucket": false,
          "closeXg": false,
          "gap": 1.1,
          "notes": [
            "xG 暗示胶着"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 2.24,
        "xg_poisson_away": 0.51,
        "xg_tier_calibrated": true,
        "score_prob": 16,
        "score_top3": [
          {
            "score": "2-0",
            "prob": 16
          },
          {
            "score": "1-0",
            "prob": 14.3
          },
          {
            "score": "3-0",
            "prob": 12
          }
        ],
        "expected_score": "2-1"
      },
      "weather": {
        "city": "波士顿",
        "country": "美国",
        "venue": "Gillette Stadium",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 24,
        "humidity": 62,
        "altitude_m": 60,
        "rain_chance": 25,
        "wind": "海风 2级",
        "condition_cn": "波士顿夏晨",
        "impact_level": "LOW",
        "impact_summary": "M74 德国 vs 巴拉圭",
        "home_adapt": 86,
        "away_adapt": 78,
        "weather_factors": [
          {
            "label": "24°C",
            "impact": "低",
            "detail": "北京时间 6月30日 04:30"
          }
        ],
        "forecast_updated": "2026-06-29 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "己亥日",
          "day_summary": "己亥日——水土相涵",
          "hour_home": "见各场",
          "hour_home_element": "水"
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
        "mystic_verdict": "德国金旺深盘，巴拉圭土守。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1.25,
        "tier_label": "Germany -1.25 · Paraguay +1.25",
        "implied_tier": 0.75,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Germany（约 70%）",
        "analysis": "M74 · 德国 vs 巴拉圭 · 皇冠 -1/1.5 德 0.83 / 巴 1.06 · 大小 2.5/3 大 0.91 小 0.97。 赛前净胜参考高于 xG 隐含（+0.5），且净胜 1 球占 26.1%——热门净胜拉开偏难。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 14.4
            },
            {
              "score": "2-0",
              "prob": 13.1
            },
            {
              "score": "1-1",
              "prob": 10.4
            }
          ],
          "one_goal_win_pct": 26.1,
          "two_plus_win_pct": 37.4,
          "full_cover_pct": 46.7,
          "dog_hold_pct": 53.3,
          "fav_win_pct": 63.5,
          "cover_given_win_pct": 58.9,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.3,
          "half_cover_pct": 0,
          "half_lose_pct": 26.1,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": null,
          "fav_cover_ev": -0.121,
          "dog_cover_ev": 0.122,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.54,
          "fair_totals_line": 2,
          "over_2_5_pct": 46.5,
          "over_3_pct": 24.9,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 26.1%：常见「赢球但净胜仅 1 球」",
          "full_cover_pct_raw": 37.4,
          "dog_hold_pct_raw": 62.6
        },
        "spread_odds": {
          "fav": 0.83,
          "dog": 1.06,
          "note": "Germany 0.83 · Paraguay 1.06"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.54,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 35.2,
          "under_pct": 64.8,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大比分侧 0.91 / 小比分侧 0.97",
          "totals_odds": {
            "over": 0.91,
            "under": 0.97,
            "note": "大比分 0.91 · 小比分 0.97"
          },
          "rational_cn": "模型略看小比分（超 2.75 约 64.8% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "market_line_movement": {
          "wc_note": "波士顿 neutral · 主客仅为 FIFA 标记",
          "spread_open_cn": "Germany -1/1.5@0.9 · Paraguay +1/1.5@0.92",
          "spread_now_cn": "Germany -1/1.5@0.83 · Paraguay +1/1.5@1.06",
          "totals_now_cn": "大小 2.5/3 · 大 0.91 / 小 0.97",
          "tag": "fav_steam",
          "tag_cn": "德国低水加深 · 小球抬水",
          "tag_color": "#7BB8D4",
          "detail_cn": "让球 -1/1.5 不动 · 德国 0.90→0.83 低水、巴拉圭 0.92→1.06 高水；大小 2.5/3 不动，小 0.82→0.97 抬水向进球上修。"
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
          "tendency_cn": "更倾向让球盘",
          "tendency_reason_cn": "德国 0.83 低水穿盘预期明确 · 深于大小 2.5/3 胶着定价。",
          "confidence": "high",
          "confidence_cn": "大信心",
          "confidence_reason_cn": "皇冠 -1/1.5 德 0.83 降水 · 巴拉圭 1.06 高水 · 模型主胜 62% 与盘路同向。",
          "spread": {
            "side": "fav",
            "label_cn": "德国 -1/1.5 @0.83",
            "reason_cn": "E1 vs D 组第3 · 小组赛 10 球 · 低水穿盘叙事强于受让守平。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2.5/3 @0.91",
            "reason_cn": "小 0.82→0.97 抬水 · 德国进攻火力 + 巴拉圭须对攻 · 副项跟盘路进球上修。",
            "manual_override": true,
            "recommended_side": "under"
          },
          "picked_at": "2026-06-30",
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
            "over_pct": 35.2,
            "line_gap": 0.75
          }
        },
        "applied_delta": {
          "home_win": 2,
          "draw": -1,
          "away_win": -1
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 -1% · 客 -1%",
        "adjusted_probs": {
          "home_win": 62,
          "draw": 25,
          "away_win": 13
        },
        "display_summary": {
          "fav_name": "Germany",
          "expected_total_goals": 2.49,
          "poisson_fav_win_pct": 63.3,
          "small_lead_pct": 26.3,
          "small_example_score": "1-0",
          "small_example_pct": 14.5,
          "big_cover_pct": 36.9,
          "big_example_score": "2-0",
          "big_example_pct": 13.2,
          "win_shape": {
            "fav_name": "Germany",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 33.6%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 14.5,
                "pct": 22.9
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.8,
                "pct": 18.7
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 21.2,
                "pct": 33.6
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 15.7,
                "pct": 24.8
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 41.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.6
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24.8
              }
            ],
            "fav_win_pct": 62
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 35.4 分",
            "first_goal_wait": 35.4,
            "fast_pct": 57.1,
            "moderate_pct": 14.8,
            "slow_pct": 28.1,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 57.1
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 28.1
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Germany 暂无重要伤停 · Paraguay 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M74 德国 vs 巴拉圭"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 暗示胶着（平 +4%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.82,
            "baseline_away": 0.72,
            "adjusted_home": 1.82,
            "adjusted_away": 0.72,
            "note": "基准 xG 1.82–0.72（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "Germany -0.75 · Paraguay +0.75",
            "market_tier_label": "Germany -1.25 · Paraguay +1.25",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5 · 模型认为仅小胜 1 球仍约 26.1%"
          },
          "win_outlook": {
            "fav_name": "Germany",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 41.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.6
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24.8
              }
            ],
            "margin_line_cn": "Germany · 赛前净胜参考 净胜≥2（全达标）",
            "margin_meet_pct": 46.4,
            "margin_half_pct": 0,
            "margin_fail_pct": 26.3,
            "margin_full_label": "净胜≥2",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.54,
            "totals_line_gap": 0.75,
            "totals_high_pct": 35.2,
            "totals_low_pct": 64.8,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 27.7,
            "win_margin2_low_total_pct": 13.2,
            "win_margin2_high_total_pct": 23.7,
            "readout_cn": "取胜约 62%；若取胜，以「险胜收工」为主（41.6%）。 对着赛前净胜参考，净胜≥2（全达标）约 46.4%；对着总进球参考 2.75，模型超线概率约 35.2%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 2.75。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 14.4
            },
            {
              "score": "2-0",
              "pct": 13.1
            },
            {
              "score": "1-1",
              "pct": 10.4
            }
          ],
          "totals_view": {
            "expected_total": 2.5,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 35.2,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 35,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 35.2,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.5 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Germany -1.25 穿盘：有达标可能",
            "sub_cn": "Germany 胜 63.5% · 胜后穿 58.9% · Paraguay +1.25 守 53.3% 进球氛围：略偏闷",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Germany",
              "dog_name": "Paraguay",
              "fav_handicap_cn": "Germany -1.25",
              "dog_handicap_cn": "Paraguay +1.25",
              "market_expect_cn": "Germany -1.25 · 净胜≥2",
              "meet_pct": 46.7,
              "dog_hold_pct": 53.3,
              "fav_win_pct": 63.5,
              "cover_given_win_pct": 58.9,
              "full_cover_pct_raw": 37.4,
              "meet_pct_label": "Germany -1.25 穿盘概率（校准）",
              "dog_hold_label": "Paraguay +1.25 守住概率（校准）",
              "two_stage_cn": "Germany 取胜约 63.5% · 赢球后穿盘约 58.9% · Paraguay +1.25 守住约 53.3%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Germany -1.25 穿盘：有达标可能",
              "pill_cn": "Germany 胜 63.5% · 胜后穿 58.9% · Paraguay +1.25 守 53.3%",
              "detail_cn": "Germany 取胜约 63.5% · 赢球后穿盘约 58.9% · Paraguay +1.25 守住约 53.3%（泊松 raw 37.4% → 校准 46.7%）；穿盘与受让守住均有一定空间（仅胜 1 球约 26.1%）。",
              "extra_stats_cn": "仅胜 1 球约 26.1%",
              "full_cover_pct": 46.7,
              "half_cover_pct": 0,
              "lose1_pct": 26.1,
              "margin_full_label": "净胜≥2",
              "margin_half_label": null,
              "tier_gap": 0.5,
              "show_cover": true
            },
            "totals": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 35,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 35.2,
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
                  "fav_name": "Germany",
                  "dog_name": "Paraguay",
                  "fav_handicap_cn": "Germany -1.25",
                  "dog_handicap_cn": "Paraguay +1.25",
                  "market_expect_cn": "Germany -1.25 · 净胜≥2",
                  "meet_pct": 46.7,
                  "dog_hold_pct": 53.3,
                  "fav_win_pct": 63.5,
                  "cover_given_win_pct": 58.9,
                  "full_cover_pct_raw": 37.4,
                  "meet_pct_label": "Germany -1.25 穿盘概率（校准）",
                  "dog_hold_label": "Paraguay +1.25 守住概率（校准）",
                  "two_stage_cn": "Germany 取胜约 63.5% · 赢球后穿盘约 58.9% · Paraguay +1.25 守住约 53.3%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Germany -1.25 穿盘：有达标可能",
                  "pill_cn": "Germany 胜 63.5% · 胜后穿 58.9% · Paraguay +1.25 守 53.3%",
                  "detail_cn": "Germany 取胜约 63.5% · 赢球后穿盘约 58.9% · Paraguay +1.25 守住约 53.3%（泊松 raw 37.4% → 校准 46.7%）；穿盘与受让守住均有一定空间（仅胜 1 球约 26.1%）。",
                  "extra_stats_cn": "仅胜 1 球约 26.1%",
                  "full_cover_pct": 46.7,
                  "half_cover_pct": 0,
                  "lose1_pct": 26.1,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "Germany 胜 63.5% · 胜后穿 58.9% · Paraguay +1.25 守 53.3%",
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
                  "meter_pos": 35,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 35.2,
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
              "team": "Germany",
              "first_goal_pct": 71.7,
              "start_score": "1-0",
              "fav_name": "Germany",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 95.8,
              "small_lead_pct": 27.6,
              "big_lead_pct": 55.8,
              "fav_win_pct": 83.4,
              "fav_draw_pct": 12.4,
              "fav_lose_pct": 4.2,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Germany 保持胜果（净胜≥1）",
                  "pct": 83.4
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 12.4
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 4.2
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 36.4 分",
                "first_goal_wait": 36.4,
                "fast_pct": 49.1,
                "moderate_pct": 14.6,
                "slow_pct": 36.3,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 49.1
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.6
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 36.3
                  }
                ]
              },
              "big_delta": 18.9,
              "small_delta": 1.3,
              "narrative": "Germany 先破门（已 1-0） → 「巩固防守」；Paraguay 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Germany",
                "state_label": "Germany 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 41.6
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 33.6
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 24.8
                  }
                ],
                "margin_line_cn": "Germany · 赛前净胜参考 净胜≥2（全达标）",
                "margin_meet_pct": 55.8,
                "margin_half_pct": 0,
                "margin_fail_pct": 27.6,
                "margin_full_label": "净胜≥2",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.03,
                "totals_line_gap": 0.5,
                "totals_high_pct": 46.4,
                "totals_low_pct": 53.6,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 31.8,
                "win_margin2_low_total_pct": 18.6,
                "win_margin2_high_total_pct": 37.3,
                "readout_cn": "Germany 已 1-0 领先：仍取胜约 83.4%。 对着总进球参考 2.75，模型超线概率约 46.4%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Paraguay",
              "first_goal_pct": 28.3,
              "start_score": "0-1",
              "fav_name": "Germany",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 62.3,
              "small_lead_pct": 19.7,
              "big_lead_pct": 14.3,
              "fav_win_pct": 34,
              "fav_draw_pct": 28.3,
              "fav_lose_pct": 37.7,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Germany 追平（平局）",
                  "pct": 28.3
                },
                {
                  "key": "win1",
                  "label": "Germany 净胜1球翻盘（如 2-1）",
                  "pct": 19.7
                },
                {
                  "key": "win2",
                  "label": "Germany 净胜≥2球翻盘（如 3-1）",
                  "pct": 14.3
                },
                {
                  "key": "upset_hold",
                  "label": "Paraguay 保持胜果至终场",
                  "pct": 37.7
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
              "big_delta": -22.6,
              "small_delta": -6.6,
              "narrative": "Paraguay 先破门（已 0-1） → 「巩固防守」；Germany 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.5 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 35.2,
              "type_tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 22,
              "readout_cn": "Germany · 压制局。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 22,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.8,
            "xg_away_ht": 0.32,
            "xg_home_2h": 1.02,
            "xg_away_2h": 0.4,
            "home_win": 44.6,
            "draw": 41.5,
            "away_win": 13.9,
            "top_score": "0-0",
            "top_score_prob": 32.6,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 32.6
              },
              {
                "score": "1-0",
                "prob": 26.1
              },
              {
                "score": "0-1",
                "prob": 10.4
              }
            ],
            "ht_goals_expected": 1.12,
            "ht_over_0_5_pct": 67.4,
            "ht_over_1_5_pct": 30.8,
            "pick": "home",
            "pick_name": "Germany",
            "summary_cn": "半场 xG 0.8–0.32（约占全场 44%） · 最可能 0-0（32.6%） · 胜平负 44.6/41.5/13.9 · 半场≥1球约 67.4%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Germany · 压制局。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5 · 模型认为仅小胜 1 球仍约 26.1%（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.54,
          "xg_gap": 1.1,
          "xg_home": 1.82,
          "xg_away": 0.72,
          "xg_baseline_home": 1.82,
          "xg_baseline_away": 0.72,
          "xg_note": "结构推演用基准 xG 1.82–0.72",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Germany",
          "dog_name": "Paraguay",
          "fav_xg": 1.82,
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
          "prob_over_line": 35.2,
          "prob_meet_guess": 46,
          "guess_n": 3,
          "prob_4_plus": 24.3,
          "prob_2_or_less": 54,
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
          "summary_cn": "【路径·基准 xG】合计 2.54 · Germany 1.82 / Paraguay 0.72 → 主路径「铁局/小比分」约 69%。 至少 3 球约 46% · 超 2.75 约 35.2% · ≤2球 54%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 1.25,
        "tier_label": "Germany -1.25 · Paraguay +1.25",
        "totals_line": 2.75,
        "over_pct": 35.2,
        "fair_line": 2,
        "line_gap": 0.75,
        "full_cover_pct": 46.7,
        "fav_win_pct": 63.5,
        "cover_given_win_pct": 58.9,
        "spread_level": "possible",
        "spread_market_expect": "Germany -1.25 · 净胜≥2",
        "line_move_tag": "fav_steam",
        "line_move_cn": "德国低水加深 · 小球抬水",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘",
        "agent_pick_confidence": "high",
        "agent_spread_cn": "德国 -1/1.5 @0.83",
        "agent_totals_cn": "大球 2.5/3 @0.91",
        "totals_level": "mild_low",
        "totals_show_lean": false,
        "totals_lean_side": "dull"
      }
    },
    {
      "id": "m75",
      "fifa_match_number": 75,
      "fifa_match_id": "400021522",
      "group": "KO",
      "round": "R32",
      "round_cn": "32强",
      "matchday": null,
      "knockout_slot": "M75 · F组冠军 vs C组亚军",
      "knockout_next": "胜者 → M90（16强 · 对 M73 胜者 · 加拿大）",
      "date": "2026-06-29",
      "time": "20:00",
      "time_local": "20:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "09:00",
      "date_beijing": "6月30日",
      "time_beijing_full": "北京时间 6月30日 09:00",
      "venue": "Estadio BBVA",
      "city": "Guadalupe, Mexico",
      "note": "32强 M75 · 荷兰 vs 摩洛哥 · 蒙特雷",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Verbruggen; Dumfries, De Ligt, Van Dijk, Blind; Reijnders, Wijnaldum; Gakpo, Simons, Depay; Brobbey",
          "away": "Bono; Hakimi, Saïss, Aguerd; Amrabat, Azzedine; Ziyech, Ounahi, Boufal; En-Nesyri",
          "source": "FotMob 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Netherlands",
        "iso": "nl",
        "flag": "",
        "fifa_rank": 7,
        "rating": 84,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "D"
        ],
        "coach": "Ronald Koeman",
        "stars": [
          {
            "name": "Cody Gakpo",
            "pos": "LW",
            "club": "Liverpool",
            "rating": 8.5,
            "desc": "内切 · 7 分领跑"
          },
          {
            "name": "Virgil van Dijk",
            "pos": "CB",
            "club": "Liverpool",
            "rating": 8.7,
            "desc": "防线领袖"
          },
          {
            "name": "Xavi Simons",
            "pos": "AM",
            "club": "RB Leipzig",
            "rating": 8.4,
            "desc": "创造力 · 破密集"
          }
        ],
        "star": {
          "name": "Cody Gakpo",
          "pos": "LW",
          "club": "Liverpool",
          "rating": 8.5,
          "desc": "F 组头名 · 宽度"
        },
        "injuries": [
          {
            "player": "Cody Gakpo",
            "status": "FIT",
            "note": "F 组头名 · 7 分 · 左路宽度",
            "confirmed": true
          },
          {
            "player": "Virgil van Dijk",
            "status": "FIT",
            "note": "防线领袖 · 定位球",
            "confirmed": true
          },
          {
            "player": "Xavi Simons",
            "status": "FIT",
            "note": "肋部创造力 · 破密集",
            "confirmed": true
          },
          {
            "player": "Memphis Depay",
            "status": "DOUBT",
            "note": "肌肉疲劳延续 · 赛前队检决定首发",
            "confirmed": false
          }
        ],
        "rumors": [
          "Koeman：「摩洛哥 C 组次席 7 分不败——2022 阴影仍在，但 F 组头名须主动」",
          "预计 4-3-3 · Gakpo/Simons 宽度 · Depay 或 Brobbey 中锋",
          "皇冠退档 -0.5→-0/0.5 · 模型倾向摩洛哥受让",
          "同区胜者 M90 对加拿大 · 16 强半区已清晰"
        ]
      },
      "away": {
        "name": "Morocco",
        "iso": "ma",
        "flag": "",
        "fifa_rank": 13,
        "rating": 80,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "D"
        ],
        "coach": "Walid Regragui",
        "stars": [
          {
            "name": "Achraf Hakimi",
            "pos": "RB",
            "club": "PSG",
            "rating": 8.6,
            "desc": "右路速度 · 反击"
          },
          {
            "name": "Sofyan Amrabat",
            "pos": "CDM",
            "club": "Manchester Utd",
            "rating": 8.2,
            "desc": "屏障 · 绞杀"
          },
          {
            "name": "Youssef En-Nesyri",
            "pos": "ST",
            "club": "Sevilla",
            "rating": 8,
            "desc": "支点 · 定位球"
          }
        ],
        "star": {
          "name": "Achraf Hakimi",
          "pos": "RB",
          "club": "PSG",
          "rating": 8.6,
          "desc": "C 组次席 · 插上"
        },
        "injuries": [
          {
            "player": "Achraf Hakimi",
            "status": "FIT",
            "note": "C 组次席 · 右路插上",
            "confirmed": true
          },
          {
            "player": "Sofyan Amrabat",
            "status": "FIT",
            "note": "屏障 · 绞杀 Simons/Gakpo",
            "confirmed": true
          },
          {
            "player": "Youssef En-Nesyri",
            "status": "FIT",
            "note": "锋线支点 · 定位球",
            "confirmed": true
          },
          {
            "player": "Nayef Aguerd",
            "status": "DOUBT",
            "note": "中卫轻微不适 · 末练单独恢复",
            "confirmed": false
          }
        ],
        "rumors": [
          "Regragui：「对荷兰不摆大巴——小组赛 7 分不败，淘汰赛要进球」",
          "预计 4-2-3-1 · Amrabat 屏障 + Hakimi 反击",
          "2022 半决赛阴影 · 荷兰退盘挺受让是盘口叙事",
          "Agent 双选摩洛哥 +0/0.5 · 小球 2/2.5"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2022,
            "comp": "世界杯",
            "score": "2-0",
            "winner": "Morocco"
          }
        ],
        "note": "2022 摩洛哥胜"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-29",
        "name": "Wilton Sampaio",
        "nation": "Brazil",
        "iso": "br",
        "age": 43,
        "wc_experience": "2026 世界杯 · 32强 M75 主裁 · 小组赛墨西哥-南非、挪威-塞内加尔 · CONMEBOL 精英 · 2018/2022 世界杯执法",
        "avg_yellow": 5.2,
        "avg_red": 0.18,
        "avg_penalty": 0.35,
        "home_win_rate": 48,
        "bias_index": 49,
        "bias_note": "巴西主裁执法蒙特雷 BBVA 上午场。荷兰 F 组头名 vs 摩洛哥 C 组次席（2022 阴影）；对 Hakimi 插上犯规与 Amrabat 绞杀 Gakpo 尺度受关注，牌面可能偏紧。",
        "tendencies": [
          "助理：Bruno Pires、Bruno Boschilia（巴西）",
          "第四官员 Cristián Garay（智利）· 候补 Jose Retamal（CHI）",
          "VAR Juan Gabriel Benítez（巴拉圭）· AVAR Eduardo Cardozo（PAR）",
          "蒙特雷 28°C · 淘汰赛身体对抗升级",
          "执法牌面偏多 · 对 Amrabat 累计犯规需预警"
        ],
        "officials": {
          "ar1": "Bruno Pires (BRA)",
          "ar2": "Bruno Boschilia (BRA)",
          "fourth": "Cristián Garay (CHI)",
          "var": "Juan Gabriel Benítez (PAR)",
          "avar": "Eduardo Cardozo (PAR)"
        },
        "fifa_match_id": "400021522",
        "note": "FIFA M75 · 荷兰 vs 摩洛哥 · 蒙特雷 Estadio BBVA",
        "updated": "2026-06-29T15:31:12+08:00"
      },
      "prediction": {
        "home_win": 43,
        "draw": 25,
        "away_win": 32,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.52,
        "xg_away": 1.28,
        "key_factor": "32强 M75 · 荷兰 F1 vs 摩洛哥 C2 · 2022 冷门阴影 · 泊松 1-1/2-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.4
          },
          {
            "score": "1-0",
            "prob": 10.3
          },
          {
            "score": "2-1",
            "prob": 8.8
          },
          {
            "score": "0-1",
            "prob": 8.6
          },
          {
            "score": "1-2",
            "prob": 7.4
          },
          {
            "score": "2-0",
            "prob": 7.4
          },
          {
            "score": "0-0",
            "prob": 7.2
          }
        ],
        "insight_factors": [
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "蒙特雷夏午 · 30°C · 湿度 48%；M75 荷兰 vs 摩洛哥 · 海拔 540m"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "32强 M75 · 荷兰 F1 vs 摩洛哥 C2 · 2022 冷门阴影 · 泊松 1-1/2-1"
          }
        ],
        "base_home_win": 42.7,
        "base_draw": 25.2,
        "base_away_win": 32,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.24,
          "notes": [],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.43,
        "xg_poisson_away": 1.2,
        "xg_tier_calibrated": false,
        "score_prob": 12.4,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 12.4
          },
          {
            "score": "1-0",
            "prob": 10.3
          },
          {
            "score": "2-1",
            "prob": 8.8
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "蒙特雷",
        "country": "墨西哥",
        "venue": "Estadio BBVA",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 30,
        "humidity": 48,
        "altitude_m": 540,
        "rain_chance": 15,
        "wind": "微风",
        "condition_cn": "蒙特雷夏午",
        "impact_level": "MEDIUM",
        "impact_summary": "M75 荷兰 vs 摩洛哥 · 海拔 540m",
        "home_adapt": 84,
        "away_adapt": 86,
        "weather_factors": [
          {
            "label": "30°C · 海拔",
            "impact": "中",
            "detail": "北京时间 6月30日 09:00"
          }
        ],
        "forecast_updated": "2026-06-29 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "己亥日",
          "day_summary": "己亥日——水土相涵",
          "hour_home": "见各场",
          "hour_home_element": "水"
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
        "mystic_verdict": "荷摩均势，火土相制宜胶着。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.25,
        "tier_label": "Netherlands -0.25 · Morocco +0.25",
        "implied_tier": 0,
        "tier_gap": 0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Netherlands（约 55%）",
        "analysis": "M75 · 荷兰 vs 摩洛哥 · 皇冠 -0/0.5 荷 0.97 / 摩 0.92 · 大小 2/2.5 大 0.95 小 0.93。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.8
            },
            {
              "score": "1-0",
              "prob": 9.3
            },
            {
              "score": "2-1",
              "prob": 9
            }
          ],
          "one_goal_win_pct": 21.7,
          "two_plus_win_pct": 21.1,
          "full_cover_pct": 49.7,
          "dog_hold_pct": 50.3,
          "fav_win_pct": 42.9,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.1,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.142,
          "dog_cover_ev": 0.142,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.8,
          "fair_totals_line": 2,
          "over_2_5_pct": 53,
          "over_3_pct": 30.7,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 42.9%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 42.9,
          "dog_hold_pct_raw": 57.1
        },
        "spread_odds": {
          "fav": 0.97,
          "dog": 0.92,
          "note": "Netherlands 0.97 · Morocco 0.92"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "market_goals_int": 3,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.8,
          "fair_line": 2,
          "line_gap": 0.25,
          "over_pct": 64.7,
          "under_pct": 35.3,
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
          "rational_cn": "模型略看大比分（超 2.25 约 64.7%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "market_line_movement": {
          "wc_note": "蒙特雷 neutral · 主客仅为 FIFA 标记",
          "spread_open_cn": "Netherlands -0.5@1.02 · Morocco +0.5@0.8",
          "spread_now_cn": "Netherlands -0/0.5@0.97 · Morocco +0/0.5@0.92",
          "totals_now_cn": "大小 2/2.5 · 大 0.95 / 小 0.93",
          "tag": "fav_defense",
          "tag_cn": "荷兰退半档 · 摩洛哥升水",
          "tag_color": "#D95F6A",
          "detail_cn": "让球 -0.5→-0/0.5 · 荷 1.02→0.97、摩 0.80→0.92；大小 2/2.5 不动，小 0.85→0.93 略抬。"
        },
        "totals_pick_layers": {
          "model_side": "over",
          "situation_side": "neutral",
          "market_line_side": "under",
          "market_odds_side": "neutral",
          "market_side": "neutral",
          "recommended_side": "over",
          "conflict": false,
          "conflict_cn": null,
          "situation_dampened": false,
          "votes": {
            "model": "over",
            "line": "under",
            "odds": "neutral",
            "situation": "neutral"
          },
          "vote_summary_cn": "大球(model) · 小球(line) · 观望(odds) · 观望(situation)",
          "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权"
        },
        "agent_pick": {
          "primary": "spread",
          "tendency_cn": "更倾向让球盘",
          "tendency_reason_cn": "荷兰退档 -0.5→-0/0.5 · 摩洛哥 +0/0.5 不败结构优于大小 2/2.5 五五开。",
          "spread": {
            "side": "dog",
            "label_cn": "摩洛哥 +0/0.5 @0.92",
            "reason_cn": "皇冠退档挺受让 · 2022 阴影 + 摩洛哥 7 分不败 · PK/小负不输半。"
          },
          "totals": {
            "side": "under",
            "label_cn": "小球 2/2.5 @0.93",
            "reason_cn": "淘汰赛胶着 · 大小大 0.95 无低水优势 · ≤2 球全赢路径仍在。",
            "manual_override": true,
            "recommended_side": "over"
          },
          "picked_at": "2026-06-30",
          "pick_meta": {
            "model_side": "over",
            "situation_side": "neutral",
            "market_line_side": "under",
            "market_odds_side": "neutral",
            "market_side": "neutral",
            "pick_side": "under",
            "recommended_side": "over",
            "merge_rule_cn": "模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权",
            "conflict": false,
            "conflict_cn": null,
            "votes": {
              "model": "over",
              "line": "under",
              "odds": "neutral",
              "situation": "neutral"
            },
            "vote_summary_cn": "大球(model) · 小球(line) · 观望(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 64.7,
            "line_gap": 0.25
          }
        },
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 43,
          "draw": 25,
          "away_win": 32
        },
        "display_summary": {
          "fav_name": "Netherlands",
          "expected_total_goals": 2.61,
          "poisson_fav_win_pct": 42.2,
          "small_lead_pct": 22.2,
          "small_example_score": "1-0",
          "small_example_pct": 10.4,
          "big_cover_pct": 20,
          "big_example_score": "2-0",
          "big_example_pct": 7.4,
          "win_shape": {
            "fav_name": "Netherlands",
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
            "fav_win_pct": 43
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
              "note": "Netherlands 暂无重要伤停 · Morocco 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M75 荷兰 vs 摩洛哥 · 海拔 540m"
            }
          ],
          "xg_context": {
            "baseline_home": 1.52,
            "baseline_away": 1.28,
            "adjusted_home": 1.43,
            "adjusted_away": 1.2,
            "note": "基准 xG 1.52–1.28 → 调整后 1.43–1.2"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0.25,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Netherlands -0.25 · Morocco +0.25",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）"
          },
          "win_outlook": {
            "fav_name": "Netherlands",
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
            "margin_line_cn": "Netherlands · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 49.3,
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
            "model_total_xg": 2.63,
            "totals_line_gap": 0.25,
            "totals_high_pct": 61.2,
            "totals_low_pct": 38.8,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 17.8,
            "win_margin2_low_total_pct": 7.4,
            "win_margin2_high_total_pct": 20,
            "readout_cn": "取胜约 43%；若取胜，以「险胜收工」为主（52.6%）。 对着赛前净胜参考，净胜≥1（全达标）约 49.3%；对着总进球参考 2.25，模型超线概率约 61.2%。"
          },
          "totals_line": 2.25,
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
            "market_line": 2.25,
            "line_gap": 0.25,
            "over_pct": 61.2,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_high",
              "label_cn": "略倾向精彩",
              "color": "#E8A54B",
              "meter_label_cn": "略倾向精彩",
              "meter_pos": 61,
              "lean_side": "exciting",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "略偏精彩（弱）",
              "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
              "headline_cn": "进球氛围：略偏精彩",
              "show_lean": false,
              "over_pct": 61.2,
              "line_gap": 0.25,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.6 · 合理值 2 · 总进球参考 2.25（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Netherlands -0.25 穿盘：有达标可能",
            "sub_cn": "Netherlands 胜 42.3% · 胜后穿 100% · Morocco +0.25 守 50.6% 进球氛围：略偏精彩",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Netherlands",
              "dog_name": "Morocco",
              "fav_handicap_cn": "Netherlands -0.25",
              "dog_handicap_cn": "Morocco +0.25",
              "market_expect_cn": "Netherlands -0.25 · 净胜≥1",
              "meet_pct": 49.4,
              "dog_hold_pct": 50.6,
              "fav_win_pct": 42.3,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 42.3,
              "meet_pct_label": "Netherlands -0.25 穿盘概率（校准）",
              "dog_hold_label": "Morocco +0.25 守住概率（校准）",
              "two_stage_cn": "Netherlands 取胜约 42.3% · 赢球后穿盘约 100% · Morocco +0.25 守住约 50.6%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Netherlands -0.25 穿盘：有达标可能",
              "pill_cn": "Netherlands 胜 42.3% · 胜后穿 100% · Morocco +0.25 守 50.6%",
              "detail_cn": "Netherlands 取胜约 42.3% · 赢球后穿盘约 100% · Morocco +0.25 守住约 50.6%（泊松 raw 42.3% → 校准 49.4%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 49.4,
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
              "meter_pos": 61,
              "lean_side": "exciting",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "略偏精彩（弱）",
              "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
              "headline_cn": "进球氛围：略偏精彩",
              "show_lean": false,
              "over_pct": 61.2,
              "line_gap": 0.25,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
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
                  "fav_name": "Netherlands",
                  "dog_name": "Morocco",
                  "fav_handicap_cn": "Netherlands -0.25",
                  "dog_handicap_cn": "Morocco +0.25",
                  "market_expect_cn": "Netherlands -0.25 · 净胜≥1",
                  "meet_pct": 49.4,
                  "dog_hold_pct": 50.6,
                  "fav_win_pct": 42.3,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 42.3,
                  "meet_pct_label": "Netherlands -0.25 穿盘概率（校准）",
                  "dog_hold_label": "Morocco +0.25 守住概率（校准）",
                  "two_stage_cn": "Netherlands 取胜约 42.3% · 赢球后穿盘约 100% · Morocco +0.25 守住约 50.6%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Netherlands -0.25 穿盘：有达标可能",
                  "pill_cn": "Netherlands 胜 42.3% · 胜后穿 100% · Morocco +0.25 守 50.6%",
                  "detail_cn": "Netherlands 取胜约 42.3% · 赢球后穿盘约 100% · Morocco +0.25 守住约 50.6%（泊松 raw 42.3% → 校准 49.4%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 49.4,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.25,
                  "show_cover": true
                },
                "text": "Netherlands 胜 42.3% · 胜后穿 100% · Morocco +0.25 守 50.6%",
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
                  "meter_pos": 61,
                  "lean_side": "exciting",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
                  "pill_cn": "略偏精彩（弱）",
                  "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
                  "headline_cn": "进球氛围：略偏精彩",
                  "show_lean": false,
                  "over_pct": 61.2,
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
              "team": "Netherlands",
              "first_goal_pct": 54.4,
              "start_score": "1-0",
              "fav_name": "Netherlands",
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
                  "label": "Netherlands 保持胜果（净胜≥1）",
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
              "narrative": "Netherlands 先破门（已 1-0） → 「巩固防守」；Morocco 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Netherlands",
                "state_label": "Netherlands 已 1-0 领先",
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
                "margin_line_cn": "Netherlands · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 66.3,
                "margin_half_pct": 0,
                "margin_fail_pct": 29.7,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.14,
                "totals_line_gap": 0,
                "totals_high_pct": 75.6,
                "totals_low_pct": 24.4,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 24.7,
                "win_margin2_low_total_pct": 12.9,
                "win_margin2_high_total_pct": 36.6,
                "readout_cn": "Netherlands 已 1-0 领先：仍取胜约 66.3%。 对着总进球参考 2.25，模型超线概率约 75.6%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Morocco",
              "first_goal_pct": 45.6,
              "start_score": "0-1",
              "fav_name": "Netherlands",
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
                  "label": "Netherlands 追平（平局）",
                  "pct": 24.2
                },
                {
                  "key": "win1",
                  "label": "Netherlands 净胜1球翻盘（如 2-1）",
                  "pct": 12.8
                },
                {
                  "key": "win2",
                  "label": "Netherlands 净胜≥2球翻盘（如 3-1）",
                  "pct": 6.6
                },
                {
                  "key": "upset_hold",
                  "label": "Morocco 保持胜果至终场",
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
              "narrative": "Morocco 先破门（已 0-1） → 「巩固防守」；Netherlands 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.6 · 合理值 2 · 总进球参考 2.25（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 61.2,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 21,
              "readout_cn": "Netherlands · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
        "public_summary_note": "【推演概要】Netherlands · 常规对抗。 · 与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.8,
          "xg_gap": 0.24,
          "xg_home": 1.52,
          "xg_away": 1.28,
          "xg_baseline_home": 1.52,
          "xg_baseline_away": 1.28,
          "xg_note": "结构推演用基准 xG 1.52–1.28（进球氛围用调整后 1.43–1.2）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Netherlands",
          "dog_name": "Morocco",
          "fav_xg": 1.52,
          "dog_xg": 1.28,
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
          "prob_over_line": 64.7,
          "prob_meet_guess": 52.7,
          "guess_n": 3,
          "prob_4_plus": 30.3,
          "prob_2_or_less": 47.3,
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
            "弱队上半场效率≥1.0 → 关注弱队开花路径",
            "结构类似 m12/m26——热门爆发路径需防 4+ 球"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 2.8 · Netherlands 1.52 / Morocco 1.28 → 主路径「铁局/小比分」约 45%。 至少 3 球约 52.7% · 超 2.25 约 64.7% · ≤2球 47.3%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.25,
        "tier_label": "Netherlands -0.25 · Morocco +0.25",
        "totals_line": 2.25,
        "over_pct": 61.2,
        "fair_line": 2,
        "line_gap": 0.25,
        "full_cover_pct": 49.4,
        "fav_win_pct": 42.3,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Netherlands -0.25 · 净胜≥1",
        "line_move_tag": "fav_defense",
        "line_move_cn": "荷兰退半档 · 摩洛哥升水",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘",
        "agent_pick_confidence": null,
        "agent_spread_cn": "摩洛哥 +0/0.5 @0.92",
        "agent_totals_cn": "小球 2/2.5 @0.93",
        "totals_level": "mild_high",
        "totals_show_lean": false,
        "totals_lean_side": "exciting"
      }
    }
  ],
  "nextMatch": {
    "group": "KO",
    "matchday": null,
    "date": "2026-06-29",
    "time": "12:00",
    "time_local": "12:00 CT",
    "timezone": "CDT (UTC-5)",
    "time_beijing": "01:00",
    "date_beijing": "6月30日",
    "time_beijing_full": "北京时间 6月30日 01:00",
    "venue": "NRG Stadium",
    "city": "Houston, USA",
    "home": {
      "name": "Brazil",
      "iso": "br",
      "fifaRank": 3,
      "rating": 92
    },
    "away": {
      "name": "Japan",
      "iso": "jp",
      "fifaRank": 18,
      "rating": 78
    },
    "teaser": "32强 M76 · 巴西 vs 日本",
    "home_win": 54,
    "draw": 29,
    "away_win": 17,
    "predicted_score": "1-0",
    "key_player_home": "Vinícius Júnior",
    "key_player_away": "Takefusa Kubo"
  },
  "upcomingMatches": [
    {
      "group": "KO",
      "time_beijing_full": "北京时间 6月30日 04:30",
      "venue": "Gillette Stadium",
      "city": "Foxborough, USA",
      "home": {
        "name": "Germany",
        "iso": "de"
      },
      "away": {
        "name": "Paraguay",
        "iso": "py"
      },
      "teaser": "32强 M74"
    },
    {
      "group": "KO",
      "time_beijing_full": "北京时间 6月30日 09:00",
      "venue": "Estadio BBVA",
      "city": "Guadalupe, Mexico",
      "home": {
        "name": "Netherlands",
        "iso": "nl"
      },
      "away": {
        "name": "Morocco",
        "iso": "ma"
      },
      "teaser": "32强 M75"
    }
  ]
};
