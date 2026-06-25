// 今日赛事 — Day 9 (signals enriched)
// Last updated: 2026-06-20T14:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-20T14:00:00+08:00",
  "syncSource": "FIFA 官方赛果 · Day 14（B/C 末轮 4 场已归档 · A 组 m53/m54 待赛） · 推演概要+小组形势",
  "breakingNews": [
    {
      "tag": "OFFICIAL",
      "text": "✅ m53 FIFA 官方首发：墨西哥大面积轮换（Jiménez/Ochoa/Vega 替补）· 捷克 Schick/Souček 替补",
      "time": "6月25日"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ m54 FIFA 官方首发：韩国 3-4-1-2 · 孙兴慜替补 · 李刚仁前腰",
      "time": "6月25日"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m54 · Mohammed Abdulla（阿联酋）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m53 · Mario Escobar（危地马拉）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m50 · Wilton Sampaio（巴西）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m49 · Slavko Vinčić（斯洛文尼亚）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m52 · Yoshimi Yamashita（日本）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m51 · Danny Makkelie（荷兰）",
      "time": "官方确认"
    },
    {
      "tag": "INJURY",
      "text": "✅ Day 14 伤病/更衣室：Davies 主场 · Son 须胜 · Schick 高原破局",
      "time": "6月25日"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 14 核心球员已更新（m49–m54，各队 3 人）",
      "time": "6月25日"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 14 气候预报已更新（m49–m54，共6场）",
      "time": "6月25日"
    },
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
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
    }
  ],
  "todayMatches": [
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
      "note": "A组末轮 · 捷克 vs 墨西哥 · 阿兹特克 · FIFA 官方首发已确认（双方大面积轮换）",
      "lineup": {
        "confirmed": true,
        "formation": "5-2-3 / 4-1-2-3",
        "home": "Kovar; Holes, Hranac, Coufal, Krejci, Doudera; Cerv, Sadilek; Hlozek, Sulc, Visinsky",
        "away": "Rangel; Sanchez, Montes, Alvarez, Reyes; Romo; Chavez, Alvarado; Mora, Quinones, Martinez",
        "note": "✅ FIFA 官方 team sheet（Match 53 · 400021444 · 2026-06-25T00:55:32+08:00）",
        "source": "FIFA Match Centre · api.fifa.com",
        "updated": "2026-06-25T00:55:32+08:00",
        "fifa_match_id": "400021444",
        "impact": {
          "xg_home_delta": -0.12,
          "xg_away_delta": -0.42,
          "summary": "FIFA 官方：墨西哥 4-1-2-3 大面积轮换（Ochoa/Jiménez/Vega 替补 · Rangel 一门 · 青年锋线） vs 捷克 5-2-3（Schick/Souček 替补 · Kovář 一门）；双方均非主力 XI，墨西哥轮换幅度更大，客 xG 显著下调。",
          "xg_home_before": 0.95,
          "xg_away_before": 1.88
        },
        "diff": {
          "home": "⚠️ 5-2-3（非预测 4-2-3-1）：Schick #10 替补 · Souček #22 替补 · Kovář 一门 · Hložek/Sulc/Visinsky 锋线 · 无 Provod/Barák 首发",
          "away": "⚠️ 4-1-2-3 大面积轮换：Ochoa #13 替补 · Jiménez #9 替补 · Vega #10 替补 · Rangel 一门 · Quinones/Martinez/Alvarado 锋线 · 无 Lozano/Guardado · Montes+Álvarez 留阵"
        },
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
            "name": "Adam Hložek",
            "pos": "ST",
            "club": "Bayer Leverkusen",
            "stats": "官方 #9 锋线",
            "rating": 7.8,
            "desc": "无 Schick 首发时的支点"
          },
          {
            "name": "Vladimír Coufal",
            "pos": "RB",
            "club": "West Ham",
            "stats": "官方 #5 翼卫",
            "rating": 7.6,
            "desc": "五后卫体系右路宽度"
          },
          {
            "name": "Patrik Schick",
            "pos": "ST",
            "club": "Bayer Leverkusen",
            "stats": "替补 #10",
            "rating": 8.4,
            "desc": "60' 后替补破局关键"
          }
        ],
        "star": {
          "name": "Patrik Schick",
          "pos": "ST",
          "club": "Bayer Leverkusen",
          "stats": "替补 #10",
          "rating": 8.4,
          "desc": "60' 后替补破局关键"
        },
        "injuries": [
          {
            "player": "Patrik Schick",
            "status": "BENCH",
            "note": "FIFA 替补 #10 · 60' 后破局后手",
            "confirmed": true
          },
          {
            "player": "Tomáš Souček",
            "status": "BENCH",
            "note": "FIFA 替补 #22 · 绞杀轴心后手",
            "confirmed": true
          },
          {
            "player": "Matej Kovář",
            "status": "FIT",
            "note": "FIFA 官方一门 #1",
            "confirmed": true
          },
          {
            "player": "Adam Hložek",
            "status": "FIT",
            "note": "官方 5-2-3 锋线 #9",
            "confirmed": true
          },
          {
            "player": "Tomáš Holes",
            "status": "FIT",
            "note": "官方五后卫之一 #3",
            "confirmed": true
          }
        ],
        "rumors": [
          "【官方】FIFA 5-2-3：Schick/Souček 均未首发 — 须胜但 Hašek 变阵五后卫",
          "Kovář 一门 · Coufal/Holes/Hranac 后防 · Hložek/Sulc/Visinsky 攻击线",
          "Schick #10 · Souček #22 替补 — 60' 后高原破局最大变量",
          "对墨西哥轮换版 4-1-2-3 · 定位球仍是捷克唯一路径"
        ]
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
            "name": "Edson Álvarez",
            "pos": "CDM",
            "club": "West Ham",
            "stats": "官方 #4 屏障",
            "rating": 8,
            "desc": "轮换版中轴唯一主力"
          },
          {
            "name": "Julián Quiñones",
            "pos": "FW",
            "club": "América",
            "stats": "官方 #16 锋线",
            "rating": 7.5,
            "desc": "替 Jiménez 的先发中锋"
          },
          {
            "name": "Raúl Jiménez",
            "pos": "ST",
            "club": "Fulham",
            "stats": "替补 #9",
            "rating": 8.5,
            "desc": "60' 后替补破局"
          }
        ],
        "star": {
          "name": "Raúl Jiménez",
          "pos": "ST",
          "club": "Fulham",
          "stats": "替补 #9",
          "rating": 8.5,
          "desc": "60' 后替补破局"
        },
        "injuries": [
          {
            "player": "Edson Álvarez",
            "status": "FIT",
            "note": "FIFA 官方后防/屏障 #4",
            "confirmed": true
          },
          {
            "player": "César Montes",
            "status": "FIT",
            "note": "官方中卫 #3",
            "confirmed": true
          },
          {
            "player": "Luis Romo",
            "status": "FIT",
            "note": "官方单后腰 #7",
            "confirmed": true
          },
          {
            "player": "Raúl Rangel",
            "status": "FIT",
            "note": "官方一门 #1 · 替 Ochoa",
            "confirmed": true
          },
          {
            "player": "Guillermo Ochoa",
            "status": "BENCH",
            "note": "传奇一门 #13 替补",
            "confirmed": true
          },
          {
            "player": "Raúl Jiménez",
            "status": "BENCH",
            "note": "主力前锋 #9 替补",
            "confirmed": true
          },
          {
            "player": "Alexis Vega",
            "status": "BENCH",
            "note": "攻击核心 #10 替补",
            "confirmed": true
          },
          {
            "player": "Hirving Lozano",
            "status": "OUT",
            "note": "未进 FIFA 大名单/XI",
            "confirmed": true
          },
          {
            "player": "Andrés Guardado",
            "status": "OUT",
            "note": "未进 FIFA 大名单/XI",
            "confirmed": true
          }
        ],
        "rumors": [
          "【官方】FIFA 4-1-2-3：6 分已出线 — Aguirre 轮换 8+ 位置",
          "Rangel #1 替 Ochoa · Jiménez #9 / Vega #10 替补 · Quinones/Martinez/Alvarado 青年锋线",
          "Montes #3 + Álvarez #4 留阵保防线 · Romo #7 单后腰",
          "无 Lozano/Guardado · 60' 后 Jiménez/Vega 破局后手",
          "Escobar 执法 · 轮换版仍要捍卫 Azteca 主场"
        ]
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
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-24",
        "name": "Mario Escobar",
        "nation": "Guatemala",
        "iso": "gt",
        "age": 45,
        "wc_experience": "2022 世界杯第四官员 · 2026 首场主裁 · CONCACAF 精英 · 中美洲代表执法 Azteca 大战",
        "avg_yellow": 4.5,
        "avg_red": 0.11,
        "avg_penalty": 0.34,
        "home_win_rate": 53,
        "bias_index": 52,
        "bias_note": "危地马拉主裁执法 A 组 Azteca 大战。Schick 高原破局 vs 墨西哥 6 分已出线；对禁区内拉扯与 Schick 定位球犯规尺度受关注，主场氛围或影响判罚节奏。",
        "tendencies": [
          "危地马拉助理：Juan Daniel López、Leonardo García",
          "第四官员 Ismail Elfath（美国）· 候补 Frank Anderson（USA）",
          "VAR Armando Villarreal（美国）· AVAR Juan Pablo Montiel（巴拉圭）· SVAR Danny Makkelie（荷兰）",
          "阿兹特克 2240m 海拔——捷克 70' 后体能犯规或升",
          "墨西哥 6 分领跑 · 末轮或轮换但仍要捍卫主场"
        ],
        "officials": {
          "ar1": "Juan Daniel López (GUA)",
          "ar2": "Leonardo García (GUA)",
          "fourth": "Ismail Elfath (USA)",
          "reserve_ar": "Frank Anderson (USA)",
          "var": "Armando Villarreal (USA)",
          "avar": "Juan Pablo Montiel (PAR)",
          "svar": "Danny Makkelie (NED)"
        },
        "fifa_match_id": "400021444",
        "fifa_official_id": "416166",
        "updated": "2026-06-24T15:29:03+08:00"
      },
      "prediction": {
        "home_win": 16,
        "draw": 28,
        "away_win": 56,
        "score": "0-1",
        "confidence": 74,
        "xg_home": 0.83,
        "xg_away": 1.46,
        "key_factor": "FIFA 官方：墨西哥 4-1-2-3 大面积轮换（Rangel 一门 · Jiménez/Ochoa/Vega 替补 · 青年锋线） vs 捷克 5-2-3（Schick/Souček 替补 · Kovář 一门）；6 分已出线控分+捷克变阵，平局权重上升",
        "score_dist": [
          {
            "score": "0-1",
            "prob": 14.8
          },
          {
            "score": "1-1",
            "prob": 12.3
          },
          {
            "score": "0-2",
            "prob": 10.8
          },
          {
            "score": "0-0",
            "prob": 10.1
          },
          {
            "score": "1-2",
            "prob": 9
          },
          {
            "score": "1-0",
            "prob": 8.4
          },
          {
            "score": "0-3",
            "prob": 5.3
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
            "text": "阿兹特克高原 2240m，午后干燥 · 22°C · 湿度 52% · 降雨概率 20% · 海拔 2240m · 高原微风 1级 · 干燥；海拔2240m——墨西哥主场优势显著，Schick 支点 vs 东道主轮换阵容（2240m 海拔 · 22°C · 09:00 本地）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "FIFA 官方：墨西哥 4-1-2-3 大面积轮换（Rangel 一门 · Jiménez/Ochoa/Vega 替补 · 青年锋线） vs 捷克 5-2-3（Schick/Souček 替补 · Kovář 一门）；6 分已出线控分+捷克变阵，平局权重上升"
          }
        ],
        "base_home_win": 21.4,
        "base_draw": 26.8,
        "base_away_win": 51.8,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": false,
          "closeXg": false,
          "gap": 0.63,
          "notes": []
        }
      },
      "weather": {
        "city": "墨西哥城",
        "country": "墨西哥",
        "venue": "Estadio Azteca",
        "temp": 22,
        "humidity": 52,
        "altitude_m": 2240,
        "rain_chance": 20,
        "wind": "高原微风 1级 · 干燥",
        "condition_cn": "阿兹特克高原 2240m，午后干燥",
        "impact_level": "HIGH",
        "impact": "Azteca 2240m 海拔+22°C 午后，捷克须抢 3 分 vs 墨西哥 6 分已出线；高原缺氧对欧洲球队后段是最大变量",
        "impact_summary": "海拔2240m——墨西哥主场优势显著，Schick 支点 vs 东道主轮换阵容",
        "home_adapt": 92,
        "away_adapt": 68,
        "home_note": "墨西哥 6 分已出线；Lozano/Jiménez 高原主场，末轮或轮换但仍要捍卫不败",
        "away_note": "捷克 1 分须胜；Schick 定位球+Souček 屏障，高原 70' 后体能是瓶颈",
        "prediction_note": "模型显著下调客队后段 xG；上半场破局是捷克唯一路径",
        "weather_factors": [
          {
            "label": "2240m 海拔",
            "impact": "高",
            "detail": " oxygen 约 -21%；客队 60' 后传球精度或降"
          },
          {
            "label": "22°C · 09:00 本地",
            "impact": "中",
            "detail": "北京时间 6月25日 09:00；高原午后紫外线强"
          },
          {
            "label": "湿度 52%",
            "impact": "低",
            "detail": "干燥利于墨西哥快节奏传导"
          }
        ],
        "historical_note": "Estadio Azteca · A组末轮 · 捷克 vs 墨西哥 · 预报更新 2026-06-24 22:00 本地",
        "forecast_updated": "2026-06-24 22:00 本地"
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
              "prob": 14.8
            },
            {
              "score": "1-1",
              "prob": 12.3
            },
            {
              "score": "0-2",
              "prob": 10.8
            }
          ],
          "one_goal_win_pct": 14.7,
          "two_plus_win_pct": 6.7,
          "full_cover_pct": 6.7,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": 14.7,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "走水净胜=1",
          "fav_cover_ev": -0.719,
          "dog_cover_ev": 0.719,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.29,
          "fair_totals_line": 2.25,
          "over_2_5_pct": 39.9,
          "over_3_pct": 19.5,
          "totals_lean_cn": "超 2.5 偏小比分（约 60.1%）；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 14.7%：参考净胜 1 球时，仅赢一球与拉开差距须分开看"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.29,
          "fair_line": 2.25,
          "line_gap": 0.25,
          "over_pct": 39.9,
          "under_pct": 60.1,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 2.5 约 60.1% 难达）",
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
          "home_win": 16,
          "draw": 28,
          "away_win": 56
        },
        "display_summary": {
          "fav_name": "Czechia",
          "expected_total_goals": 1.78,
          "poisson_fav_win_pct": 25,
          "small_lead_pct": 17.7,
          "small_example_score": "1-0",
          "small_example_pct": 12.3,
          "big_cover_pct": 7.3,
          "big_example_score": "2-0",
          "big_example_pct": 4.5,
          "win_shape": {
            "fav_name": "Czechia",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 49.3%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 12.3,
                "pct": 49.3
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 5.4,
                "pct": 21.4
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 5.6,
                "pct": 22.3
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 1.8,
                "pct": 7
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 70.7
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 22.3
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 7
              }
            ],
            "fav_win_pct": 16
          },
          "excitement": {
            "label_cn": "偏晚",
            "label_key": "slow",
            "label_color": "#7BB8D4",
            "sub_cn": "预期首球等待约 50.6 分",
            "first_goal_wait": 50.6,
            "fast_pct": 44.8,
            "moderate_pct": 14.2,
            "slow_pct": 41.1,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 44.8
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.2
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 41.1
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Czechia 暂无重要伤停 · Mexico：Hirving Lozano、Andrés Guardado 缺阵"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "海拔2240m——墨西哥主场优势显著，Schick 支点 vs 东道主轮换阵容"
            },
            {
              "icon": "📋",
              "label": "官方首发",
              "note": "FIFA 官方：墨西哥 4-1-2-3 大面积轮换（Ochoa/Jiménez/Vega 替补 · Rangel 一门 · 青年锋线） vs 捷克 5-2-3（Schick/Souček 替补 · Kovář 一门）；双方均非主力 XI，墨西哥轮换幅度更大，客 xG 显著下调。"
            }
          ],
          "xg_context": {
            "baseline_home": 0.83,
            "baseline_away": 1.46,
            "adjusted_home": 0.73,
            "adjusted_away": 1.05,
            "note": "基准 xG 0.83–1.46 → 调整后 0.73–1.05"
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
                "pct": 70.7
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 22.3
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 7
              }
            ],
            "margin_line_cn": "Czechia · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
            "margin_meet_pct": 7.3,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "走水净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球参考 2.5",
            "fair_totals_line": 2.25,
            "model_total_xg": 1.78,
            "totals_line_gap": 0.25,
            "totals_high_pct": 26.3,
            "totals_low_pct": 73.7,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 16.8,
            "win_margin2_low_total_pct": 4.5,
            "win_margin2_high_total_pct": 2.8,
            "readout_cn": "取胜约 16%；若取胜，以「险胜收工」为主（70.7%）。 对着赛前净胜参考，净胜≥2（全达标）约 7.3%；对着总进球参考 2.5，模型超线概率约 26.3%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "0-1",
              "pct": 17.7
            },
            {
              "score": "0-0",
              "pct": 16.9
            },
            {
              "score": "1-1",
              "pct": 12.9
            }
          ],
          "totals_view": {
            "expected_total": 1.8,
            "fair_line": 2.25,
            "market_line": 2.5,
            "line_gap": 0.25,
            "over_pct": 26.3,
            "gap_warning": null,
            "totals_outlook": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 26,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": true,
              "over_pct": 26.3,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 1.8 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 进球氛围：倾向沉闷"
          },
          "customer_reading": {
            "headline_cn": "Czechia · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 7.3% · 达到预期难度偏大 进球氛围：倾向沉闷",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "Czechia",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 7.3,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "Czechia · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 7.3% · 达到预期难度偏大",
              "detail_cn": "Czechia · 赛前外界预期 净胜≥2。模型推演达标概率约 7.3%；外界看法高于 xG 隐含约 1.25 球，达到预期难度偏大。",
              "extra_stats_cn": "",
              "full_cover_pct": 7.3,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "走水净胜=1",
              "tier_gap": 1.25,
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
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": true,
              "over_pct": 26.3,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "skeptical",
                  "label_cn": "外界预期偏高",
                  "color": "#D95F6A",
                  "fav_name": "Czechia",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 7.3,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "Czechia · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 7.3% · 达到预期难度偏大",
                  "detail_cn": "Czechia · 赛前外界预期 净胜≥2。模型推演达标概率约 7.3%；外界看法高于 xG 隐含约 1.25 球，达到预期难度偏大。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 7.3,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "走水净胜=1",
                  "tier_gap": 1.25,
                  "show_cover": true
                },
                "text": "达标概率约 7.3% · 达到预期难度偏大",
                "color": "#D95F6A",
                "primary": true
              },
              {
                "key": "totals",
                "icon": "🌙",
                "label": "进球氛围",
                "outlook": {
                  "level": "clear_low",
                  "label_cn": "倾向沉闷",
                  "color": "#7BB8D4",
                  "meter_label_cn": "倾向沉闷",
                  "meter_pos": 26,
                  "lean_side": "dull",
                  "lean_strength": "clear",
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "倾向沉闷",
                  "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
                  "headline_cn": "进球氛围：倾向沉闷",
                  "show_lean": true,
                  "over_pct": 26.3,
                  "line_gap": 0.25,
                  "market_line": 2.5,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.5",
                  "caution_public_high": false
                },
                "text": "倾向沉闷",
                "color": "#7BB8D4",
                "muted": false
              }
            ],
            "methodology_note": "读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Czechia",
              "first_goal_pct": 41,
              "start_score": "1-0",
              "fav_name": "Czechia",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 84.6,
              "small_lead_pct": 36.2,
              "big_lead_pct": 21.8,
              "fav_win_pct": 58,
              "fav_draw_pct": 26.6,
              "fav_lose_pct": 15.3,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Czechia 保持胜果（净胜≥1）",
                  "pct": 58
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 26.6
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 15.3
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 50 分",
                "first_goal_wait": 50,
                "fast_pct": 38.9,
                "moderate_pct": 13.3,
                "slow_pct": 47.8,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 38.9
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.3
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 47.8
                  }
                ]
              },
              "big_delta": 14.5,
              "small_delta": 18.5,
              "narrative": "Czechia 先破门（已 1-0） → 「巩固防守」；Mexico 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Czechia",
                "state_label": "Czechia 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 70.7
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 22.3
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 7
                  }
                ],
                "margin_line_cn": "Czechia · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
                "margin_meet_pct": 21.8,
                "margin_half_pct": 0,
                "margin_fail_pct": 36.2,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "走水净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.48,
                "totals_line_gap": 0.25,
                "totals_high_pct": 43.4,
                "totals_low_pct": 56.6,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 35.8,
                "win_margin2_low_total_pct": 12.9,
                "win_margin2_high_total_pct": 8.9,
                "readout_cn": "Czechia 已 1-0 领先：仍取胜约 58%。 对着总进球参考 2.5，模型超线概率约 43.4%。 常见 2-0 收尾（相对总进球参考 2.5仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Mexico",
              "first_goal_pct": 59,
              "start_score": "0-1",
              "fav_name": "Czechia",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 26,
              "small_lead_pct": 5.6,
              "big_lead_pct": 1.3,
              "fav_win_pct": 6.9,
              "fav_draw_pct": 19.1,
              "fav_lose_pct": 74,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Czechia 追平（平局）",
                  "pct": 19.1
                },
                {
                  "key": "win1",
                  "label": "Czechia 净胜1球翻盘（如 2-1）",
                  "pct": 5.6
                },
                {
                  "key": "win2",
                  "label": "Czechia 净胜≥2球翻盘（如 3-1）",
                  "pct": 1.3
                },
                {
                  "key": "upset_hold",
                  "label": "Mexico 保持胜果至终场",
                  "pct": 74
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 51.1 分",
                "first_goal_wait": 51.1,
                "fast_pct": 38.2,
                "moderate_pct": 13.2,
                "slow_pct": 48.6,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 38.2
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.2
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 48.6
                  }
                ]
              },
              "big_delta": -6,
              "small_delta": -12.1,
              "narrative": "Mexico 先破门（已 0-1） → 「巩固防守」；Czechia 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 1.8 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 进球氛围：倾向沉闷",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 26.3,
              "type_tags": [
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 23,
              "readout_cn": "Czechia · 进球偏少。进球氛围倾向沉闷（模型推演）；时间段分布见下方历史节奏参考。"
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
            "xg_home_ht": 0.32,
            "xg_away_ht": 0.46,
            "xg_home_2h": 0.41,
            "xg_away_2h": 0.59,
            "home_win": 18.5,
            "draw": 52.8,
            "away_win": 28.6,
            "top_score": "0-0",
            "top_score_prob": 45.8,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 45.8
              },
              {
                "score": "0-1",
                "prob": 21.1
              },
              {
                "score": "1-0",
                "prob": 14.7
              }
            ],
            "ht_goals_expected": 0.78,
            "ht_over_0_5_pct": 54.2,
            "ht_over_1_5_pct": 18.4,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.32–0.46（约占全场 44%） · 最可能 0-0（45.8%） · 胜平负 18.5/52.8/28.6 · 半场≥1球约 54.2%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Czechia · 进球偏少。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 1.25（模型微调：主胜 -5% · 平 +1% · 客 +4%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.29,
          "xg_gap": 0.63,
          "xg_home": 0.83,
          "xg_away": 1.46,
          "xg_baseline_home": 0.83,
          "xg_baseline_away": 1.46,
          "xg_note": "结构推演用基准 xG 0.83–1.46（进球氛围用调整后 0.73–1.05）",
          "lean_note": "与进球氛围同向——可参考权重提高",
          "fav_name": "Mexico",
          "dog_name": "Czechia",
          "fav_xg": 1.46,
          "dog_xg": 0.83,
          "path_type": "dog_bloom",
          "path_label": "弱队开花",
          "lean": "low",
          "lean_cn": "小比分预测",
          "lean_mode": "prediction",
          "lean_confidence": 60.1,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": "与进球氛围同向——可参考权重提高",
          "modules_aligned": true,
          "live_watch": [],
          "prob_over_line": 39.9,
          "prob_meet_guess": 39.9,
          "guess_n": 3,
          "prob_4_plus": 19.5,
          "prob_2_or_less": 60.1,
          "totals_line": 2.5,
          "scenarios": [
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
              "prob_pct": 27
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 27
            },
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 17
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
          "pattern_note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。 已纳入官方首发变阵对 xG 的修正。",
          "summary_cn": "【路径·基准 xG】合计 2.29 · Mexico 1.46 / Czechia 0.83 → 主路径「弱队开花」约 30% · 小比分预测。 超 2.5 约 39.9% · ≤2球 60.1%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。 已纳入官方首发变阵对 xG 的修正。",
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
          "if_1st": "32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池） → 当前 B 组第 2倾向 Canada",
          "if_1st_r16": "16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者",
          "if_1st_corridor": "出线后半区对手强度取决于第 3 名组合",
          "if_2nd": "32强 M73 · A 组第 2 vs B 组第 2 → 当前 B 组第 1倾向 Switzerland",
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
          "if_1st": "32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池） → 当前 B 组第 2倾向 Canada",
          "if_1st_r16": "16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者",
          "if_1st_corridor": "出线后半区对手强度取决于第 3 名组合",
          "if_2nd": "32强 M73 · A 组第 2 vs B 组第 2 → 当前 B 组第 1倾向 Switzerland",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "若 F 组头名为荷兰、C 组次席为巴西，此半区将提前碰强队",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/H/I 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "B 组：头名 Switzerland 7 分 · 次席 Canada 4 分（32强绑定组）",
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
          "平局：双方各 +1 分；在 B 组：头名 Switzerland 7 分 · 次席 Canada 4 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
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
      "note": "A组末轮 · 南非 vs 韩国 · 蒙特雷 · FIFA 官方首发已确认（孙兴慜替补）",
      "lineup": {
        "confirmed": true,
        "formation": "4-2-3-1 / 3-4-1-2",
        "home": "Williams; Modiba, Mbokazi, Mudau, Okon; Mbatha, Sithole; Appollis, Mofokeng, Maseko; Makgopa",
        "away": "Kim Seung-gyu; Lee Han-beom, Kim Min-jae, Lee Tae-seok; Seol Young-woo, Lee Gi-hyuk, Hwang In-beom, Paik Seung-ho; Lee Kang-in; Hwang Hee-chan, Oh Hyeon-gyu",
        "note": "✅ FIFA 官方 team sheet（Match 54 · 400021445 · 2026-06-25T00:45:17+08:00）",
        "source": "FIFA Match Centre · api.fifa.com",
        "updated": "2026-06-25T00:45:17+08:00",
        "fifa_match_id": "400021445",
        "impact": {
          "xg_home_delta": 0,
          "xg_away_delta": -0.2,
          "summary": "FIFA 官方：韩国 3-4-1-2（孙兴慜替补 · 吴贤洙+黄喜灿 双锋 · 金承奎一门） vs 南非 4-2-3-1（无 Tau/Mokoena 首发 · Makgopa 单箭）；韩国最大变阵：队长孙兴慜替补，客场 xG 下调。",
          "xg_home_before": 1.12,
          "xg_away_before": 1.58
        },
        "diff": {
          "home": "⚠️ 4-2-3-1：无 Tau/Mokoena 首发 · Makgopa 单箭 · Appollis/Mofokeng/Maseko 攻击线",
          "away": "⚠️ 3-4-1-2（非预测 4-2-3-1）：孙兴慜 #7 替补 · 吴贤洙+黄喜灿 双锋 · 金承奎一门 · 李刚仁前腰 · 薛英佑/李基赫边翼"
        },
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
            "name": "Evidence Makgopa",
            "pos": "ST",
            "club": "Orlando Pirates",
            "stats": "官方 #17 单箭",
            "rating": 7.5,
            "desc": "FIFA 官方先发中锋"
          },
          {
            "name": "Oswin Appollis",
            "pos": "RW",
            "club": "Cape Town City",
            "stats": "官方 #7",
            "rating": 7.3,
            "desc": "右路攻击核心"
          },
          {
            "name": "Ronwen Williams",
            "pos": "GK",
            "club": "Mamelodi Sundowns",
            "stats": "官方 #1",
            "rating": 7.5,
            "desc": "一门 · 对韩国须零封开局"
          }
        ],
        "star": {
          "name": "Evidence Makgopa",
          "pos": "ST",
          "club": "Orlando Pirates",
          "stats": "官方 #17 单箭",
          "rating": 7.5,
          "desc": "FIFA 官方先发中锋"
        },
        "injuries": [
          {
            "player": "Ronwen Williams",
            "status": "FIT",
            "note": "FIFA 官方一门 #1",
            "confirmed": true
          },
          {
            "player": "Evidence Makgopa",
            "status": "FIT",
            "note": "官方 4-2-3-1 单箭 #17",
            "confirmed": true
          },
          {
            "player": "Sphephelo Sithole",
            "status": "FIT",
            "note": "官方双闸 #13",
            "confirmed": true
          },
          {
            "player": "Percy Tau",
            "status": "BENCH",
            "note": "未进 FIFA XI · 替补后手",
            "confirmed": true
          },
          {
            "player": "Teboho Mokoena",
            "status": "BENCH",
            "note": "未进首发 · 替补",
            "confirmed": true
          }
        ],
        "rumors": [
          "【官方】FIFA 4-2-3-1：Makgopa 单箭 · Appollis/Mofokeng/Maseko 攻击线 · 无 Tau/Mokoena 首发",
          "Broos 末轮须抢分但变阵年轻化 · Mbatha+Sithole 双闸",
          "对韩国 3-4-1-2 低位+反击 · 定位球仍是冷门路径"
        ]
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
            "name": "Lee Kang-in",
            "pos": "AM",
            "club": "Paris Saint-Germain",
            "stats": "官方 #19 前腰",
            "rating": 8.6,
            "desc": "无孙首发时的组织核心"
          },
          {
            "name": "Kim Min-jae",
            "pos": "CB",
            "club": "Bayern Munich",
            "stats": "官方 #4 中卫",
            "rating": 8.4,
            "desc": "三中卫轴心"
          },
          {
            "name": "Hwang Hee-chan",
            "pos": "FW",
            "club": "Wolves",
            "stats": "官方 #11 锋线",
            "rating": 8.2,
            "desc": "与吴贤洙双锋"
          }
        ],
        "star": {
          "name": "Lee Kang-in",
          "pos": "AM",
          "club": "Paris Saint-Germain",
          "stats": "官方 #19 前腰",
          "rating": 8.6,
          "desc": "无孙首发时的组织核心"
        },
        "injuries": [
          {
            "player": "Kim Min-jae",
            "status": "FIT",
            "note": "FIFA 官方三中卫 #4",
            "confirmed": true
          },
          {
            "player": "Lee Kang-in",
            "status": "FIT",
            "note": "官方前腰 #19",
            "confirmed": true
          },
          {
            "player": "Hwang Hee-chan",
            "status": "FIT",
            "note": "官方双锋之一 #11",
            "confirmed": true
          },
          {
            "player": "Oh Hyeon-gyu",
            "status": "FIT",
            "note": "官方双锋之一 #18",
            "confirmed": true
          },
          {
            "player": "Kim Seung-gyu",
            "status": "FIT",
            "note": "官方一门 #1",
            "confirmed": true
          },
          {
            "player": "Son Heung-min",
            "status": "BENCH",
            "note": "队长 #7 替补 · 60' 后或破局后手",
            "confirmed": true
          },
          {
            "player": "Jo Hyeon-woo",
            "status": "BENCH",
            "note": "替补门将 #21",
            "confirmed": true
          },
          {
            "player": "Cho Guesung",
            "status": "BENCH",
            "note": "替补前锋 #9",
            "confirmed": true
          }
        ],
        "rumors": [
          "【官方】FIFA 3-4-1-2：孙兴慜 #7 替补 — 末轮须胜但洪明甫轮换",
          "李刚仁 #19 前腰 · 吴贤洙 #18 + 黄喜灿 #11 双锋 · 金承奎 #1 一门",
          "薛英佑 #22 / 李基赫 #3 边翼 · 白昇浩 #8 中场",
          "A 组出线须胜 · 孙兴慜 60' 后替补破局是最大变量"
        ]
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
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-24",
        "name": "Mohammed Abdulla",
        "nation": "United Arab Emirates",
        "iso": "ae",
        "age": 40,
        "wc_experience": "2022 世界杯第四官员 · 2026 主裁 · AFC 精英 · 执法 A 组南非 vs 韩国",
        "avg_yellow": 4.4,
        "avg_red": 0.1,
        "avg_penalty": 0.3,
        "home_win_rate": 48,
        "bias_index": 50,
        "bias_note": "阿联酋主裁执法 A 组末轮。Son 肋部 vs Tau 反击 + Mokoena 屏障；对转换速度与模拟接触尺度受关注，蒙特雷 33°C 午后体能犯规是焦点。",
        "tendencies": [
          "阿联酋助理：Mohamed Al Hammadi、Hasan Al Mahri",
          "第四官员 Ko Hyung-jin（韩国）· 候补 Kim Woo-sung（KOR）",
          "VAR Abdulla Al-Marri（卡塔尔）· AVAR Yoshimi Yamashita（日本）· SVAR Clément Turpin（法国）",
          "蒙特雷 33°C 午后——韩国 3 分须胜 · 南非 1 分须抢分",
          "A 组出线形势复杂 · Son+李刚仁 肋部是核心对位"
        ],
        "officials": {
          "ar1": "Mohamed Al Hammadi (UAE)",
          "ar2": "Hasan Al Mahri (UAE)",
          "fourth": "Ko Hyung-jin (KOR)",
          "reserve_ar": "Kim Woo-sung (KOR)",
          "var": "Abdulla Al-Marri (QAT)",
          "avar": "Yoshimi Yamashita (JPN)",
          "svar": "Clément Turpin (FRA)"
        },
        "fifa_match_id": "400021445",
        "fifa_official_id": "416167",
        "updated": "2026-06-24T15:29:03+08:00"
      },
      "prediction": {
        "home_win": 28,
        "draw": 36,
        "away_win": 36,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.12,
        "xg_away": 1.38,
        "key_factor": "FIFA 官方：韩国 3-4-1-2（孙兴慜 #7 替补 · 李刚仁前腰 · 吴贤洙+黄喜灿锋线） vs 南非 4-2-3-1（Makgopa 单箭 · 无 Tau/Mokoena 首发）；韩国须胜但队长替补，模型略下调客胜权重",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.7
          },
          {
            "score": "0-1",
            "prob": 11.3
          },
          {
            "score": "1-0",
            "prob": 9.2
          },
          {
            "score": "1-2",
            "prob": 8.8
          },
          {
            "score": "0-0",
            "prob": 8.2
          },
          {
            "score": "0-2",
            "prob": 7.8
          },
          {
            "score": "2-1",
            "prob": 7.1
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
            "text": "蒙特雷午后晴热，体感约 37°C · 33°C · 湿度 58% · 降雨概率 15% · 北风 1级 · 午后晴热；湿热中等——韩国须全取 3 分争出线，非洲球队午后高温适应度是变量（33°C · 09:00 本地 · 湿度 58%）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "FIFA 官方：韩国 3-4-1-2（孙兴慜 #7 替补 · 李刚仁前腰 · 吴贤洙+黄喜灿锋线） vs 南非 4-2-3-1（Makgopa 单箭 · 无 Tau/Mokoena 首发）；韩国须胜但队长替补，模型略下调客胜权重"
          }
        ],
        "base_home_win": 26,
        "base_draw": 37,
        "base_away_win": 37,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 10,
          "ironBucket": true,
          "closeXg": true,
          "gap": 0.26,
          "notes": [
            "xG 接近且战术偏保守",
            "热门难破密集",
            "抢分遇铁桶"
          ]
        }
      },
      "weather": {
        "city": "蒙特雷",
        "country": "墨西哥",
        "venue": "Estadio BBVA",
        "temp": 33,
        "humidity": 58,
        "altitude_m": 540,
        "rain_chance": 15,
        "wind": "北风 1级 · 午后晴热",
        "condition_cn": "蒙特雷午后晴热，体感约 37°C",
        "impact_level": "MEDIUM",
        "impact": "BBVA 33°C 午后开球，韩国 3 分 vs 南非 1 分；Son 肋部 vs Mokoena 屏障，湿热下转换速度关键",
        "impact_summary": "湿热中等——韩国须全取 3 分争出线，非洲球队午后高温适应度是变量",
        "home_adapt": 76,
        "away_adapt": 82,
        "home_note": "南非 1 分须抢分；Williams 反击速度 vs 韩国高位压迫",
        "away_note": "韩国 2-1 捷克、0-2 墨西哥后 3 分；Son+李刚仁 肋部渗透是核心",
        "prediction_note": "午后开球模型略抬补水暂停概率；领先方后段守势常见",
        "weather_factors": [
          {
            "label": "33°C · 09:00 本地",
            "impact": "中-高",
            "detail": "北京时间 09:00；墨西哥北部午后晴热"
          },
          {
            "label": "湿度 58%",
            "impact": "中",
            "detail": "体感约 37°C，替补深度关键"
          },
          {
            "label": "海拔 540m",
            "impact": "低",
            "detail": "韩国预选高原客场有经验"
          }
        ],
        "historical_note": "Estadio BBVA · A组末轮 · 南非 vs 韩国 · 预报更新 2026-06-24 22:00 本地",
        "forecast_updated": "2026-06-24 22:00 本地"
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
              "prob": 12.7
            },
            {
              "score": "0-1",
              "prob": 11.4
            },
            {
              "score": "1-0",
              "prob": 9.2
            }
          ],
          "one_goal_win_pct": 18.5,
          "two_plus_win_pct": 12,
          "full_cover_pct": 30.5,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.39,
          "dog_cover_ev": 0.39,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.5,
          "fair_totals_line": 2,
          "over_2_5_pct": 45.4,
          "over_3_pct": 23.9,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 30.5%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.5,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 45.4,
          "under_pct": 54.6,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "超 2.5 球接近五五开（约 45.4%）",
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
          "home_win": 28,
          "draw": 36,
          "away_win": 36
        },
        "display_summary": {
          "fav_name": "South Africa",
          "expected_total_goals": 2.09,
          "poisson_fav_win_pct": 29,
          "small_lead_pct": 18.8,
          "small_example_score": "1-0",
          "small_example_pct": 11.4,
          "big_cover_pct": 10.2,
          "big_example_score": "2-0",
          "big_example_pct": 5.3,
          "win_shape": {
            "fav_name": "South Africa",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 39.3%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 11.4,
                "pct": 39.3
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 7.4,
                "pct": 25.6
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 6.9,
                "pct": 23.9
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 3.2,
                "pct": 11.2
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 64.9
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 23.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 11.2
              }
            ],
            "fav_win_pct": 28
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
              "note": "湿热中等——韩国须全取 3 分争出线，非洲球队午后高温适应度是变量"
            },
            {
              "icon": "📋",
              "label": "官方首发",
              "note": "FIFA 官方：韩国 3-4-1-2（孙兴慜替补 · 吴贤洙+黄喜灿 双锋 · 金承奎一门） vs 南非 4-2-3-1（无 Tau/Mokoena 首发 · Makgopa 单箭）；韩国最大变阵：队长孙兴慜替补，客场 xG 下调。"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 接近且战术偏保守 · 热门难破密集 · 抢分遇铁桶（平 +10%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.12,
            "baseline_away": 1.38,
            "adjusted_home": 0.93,
            "adjusted_away": 1.17,
            "note": "基准 xG 1.12–1.38 → 调整后 0.93–1.17"
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
                "pct": 64.9
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 23.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 11.2
              }
            ],
            "margin_line_cn": "South Africa · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 29,
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
            "model_total_xg": 2.1,
            "totals_line_gap": 0.25,
            "totals_high_pct": 34.9,
            "totals_low_pct": 65.1,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 16.7,
            "win_margin2_low_total_pct": 5.3,
            "win_margin2_high_total_pct": 4.9,
            "readout_cn": "取胜约 28%；若取胜，以「险胜收工」为主（64.9%）。 对着赛前净胜参考，净胜≥1（全达标）约 29%；对着总进球参考 2.5，模型超线概率约 34.9%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "0-1",
              "pct": 14.4
            },
            {
              "score": "1-1",
              "pct": 13.3
            },
            {
              "score": "0-0",
              "pct": 12.3
            }
          ],
          "totals_view": {
            "expected_total": 2.1,
            "fair_line": 2.25,
            "market_line": 2.5,
            "line_gap": 0.25,
            "over_pct": 34.9,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 35,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 34.9,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.1 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "South Africa · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 29% · 达到预期难度偏大 进球氛围：略偏闷 平局权重约 36%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "South Africa",
              "market_expect_cn": "净胜≥1",
              "meet_pct": 29,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "South Africa · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 29% · 达到预期难度偏大",
              "detail_cn": "South Africa · 赛前外界预期 净胜≥1。模型推演达标概率约 29%；外界看法高于 xG 隐含约 0.5 球，达到预期难度偏大。",
              "extra_stats_cn": "",
              "full_cover_pct": 29,
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
              "meter_pos": 35,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 34.9,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "skeptical",
                  "label_cn": "外界预期偏高",
                  "color": "#D95F6A",
                  "fav_name": "South Africa",
                  "market_expect_cn": "净胜≥1",
                  "meet_pct": 29,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "South Africa · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 29% · 达到预期难度偏大",
                  "detail_cn": "South Africa · 赛前外界预期 净胜≥1。模型推演达标概率约 29%；外界看法高于 xG 隐含约 0.5 球，达到预期难度偏大。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 29,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "达标概率约 29% · 达到预期难度偏大",
                "color": "#D95F6A",
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
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.5）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 34.9,
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
              "team": "South Africa",
              "first_goal_pct": 44.3,
              "start_score": "1-0",
              "fav_name": "South Africa",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 83.6,
              "small_lead_pct": 33.1,
              "big_lead_pct": 25.1,
              "fav_win_pct": 58.2,
              "fav_draw_pct": 25.4,
              "fav_lose_pct": 16.4,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "South Africa 保持胜果（净胜≥1）",
                  "pct": 58.2
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 25.4
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 16.4
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
              "big_delta": 14.9,
              "small_delta": 14.3,
              "narrative": "South Africa 先破门（已 1-0） → 「巩固防守」；South Korea 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "South Africa",
                "state_label": "South Africa 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 64.9
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 23.9
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 11.2
                  }
                ],
                "margin_line_cn": "South Africa · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 58.2,
                "margin_half_pct": 0,
                "margin_fail_pct": 33.1,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.73,
                "totals_line_gap": 0.25,
                "totals_high_pct": 51.6,
                "totals_low_pct": 48.4,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 30.4,
                "win_margin2_low_total_pct": 12.7,
                "win_margin2_high_total_pct": 12.4,
                "readout_cn": "South Africa 已 1-0 领先：仍取胜约 58.2%。 对着总进球参考 2.5，模型超线概率约 51.6%。 常见 2-0 收尾（相对总进球参考 2.5仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "South Korea",
              "first_goal_pct": 55.7,
              "start_score": "0-1",
              "fav_name": "South Africa",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 30.6,
              "small_lead_pct": 7.5,
              "big_lead_pct": 2.4,
              "fav_win_pct": 9.9,
              "fav_draw_pct": 20.7,
              "fav_lose_pct": 69.4,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "South Africa 追平（平局）",
                  "pct": 20.7
                },
                {
                  "key": "win1",
                  "label": "South Africa 净胜1球翻盘（如 2-1）",
                  "pct": 7.5
                },
                {
                  "key": "win2",
                  "label": "South Africa 净胜≥2球翻盘（如 3-1）",
                  "pct": 2.4
                },
                {
                  "key": "upset_hold",
                  "label": "South Korea 保持胜果至终场",
                  "pct": 69.4
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
              "big_delta": -7.8,
              "small_delta": -11.3,
              "narrative": "South Korea 先破门（已 0-1） → 「巩固防守」；South Africa 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.1 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 34.9,
              "type_tags": [
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 31,
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
              "draw_trap_pct": 31,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.41,
            "xg_away_ht": 0.51,
            "xg_home_2h": 0.52,
            "xg_away_2h": 0.66,
            "home_win": 22.2,
            "draw": 48.6,
            "away_win": 29.1,
            "top_score": "0-0",
            "top_score_prob": 39.9,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 39.9
              },
              {
                "score": "0-1",
                "prob": 20.3
              },
              {
                "score": "1-0",
                "prob": 16.3
              }
            ],
            "ht_goals_expected": 0.92,
            "ht_over_0_5_pct": 60.1,
            "ht_over_1_5_pct": 23.5,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.41–0.51（约占全场 44%） · 最可能 0-0（39.9%） · 胜平负 22.2/48.6/29.1 · 半场≥1球约 60.1%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】South Africa · 进球偏少。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.5,
          "xg_gap": 0.26,
          "xg_home": 1.12,
          "xg_away": 1.38,
          "xg_baseline_home": 1.12,
          "xg_baseline_away": 1.38,
          "xg_note": "结构推演用基准 xG 1.12–1.38（进球氛围用调整后 0.93–1.17）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "South Korea",
          "dog_name": "South Africa",
          "fav_xg": 1.38,
          "dog_xg": 1.12,
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
          "prob_meet_guess": 45.4,
          "guess_n": 3,
          "prob_4_plus": 23.9,
          "prob_2_or_less": 54.6,
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
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。 已纳入官方首发变阵对 xG 的修正。",
          "summary_cn": "【路径·基准 xG】合计 2.5 · South Korea 1.38 / South Africa 1.12 → 主路径「铁局/小比分」约 56%。 超 2.5 约 45.4% · ≤2球 54.6%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。 已纳入官方首发变阵对 xG 的修正。",
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
          "if_1st": "32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池） → 当前 B 组第 2倾向 Canada",
          "if_1st_r16": "16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者",
          "if_1st_corridor": "出线后半区对手强度取决于第 3 名组合",
          "if_2nd": "32强 M73 · A 组第 2 vs B 组第 2 → 当前 B 组第 1倾向 Switzerland",
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
          "if_1st": "32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池） → 当前 B 组第 2倾向 Canada",
          "if_1st_r16": "16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者",
          "if_1st_corridor": "出线后半区对手强度取决于第 3 名组合",
          "if_2nd": "32强 M73 · A 组第 2 vs B 组第 2 → 当前 B 组第 1倾向 Switzerland",
          "if_2nd_r16": "16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者",
          "if_2nd_corridor": "若 F 组头名为荷兰、C 组次席为巴西，此半区将提前碰强队",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/H/I 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "B 组：头名 Switzerland 7 分 · 次席 Canada 4 分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 France 6 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "A 组次席走 M73→M90 通道，与 B 组次席同槽；头名则打第 3 名，路径更不确定。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "South Africa、South Korea 末轮须抢 3 分争出线，无控分空间；路径博弈须等积分落袋后再谈。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "South Africa 若取胜：积分 4，A 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "South Korea 若取胜：积分 6，客场抢分将改变 A 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 B 组：头名 Switzerland 7 分 · 次席 Canada 4 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：A 组次席走 M73→M90 通道，与 B 组次席同槽；头名则打第 3 名，路径更不确定。"
        ]
      }
    }
  ],
  "nextMatch": {
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
    "home": {
      "name": "Czechia",
      "iso": "cz",
      "fifaRank": 40,
      "rating": 72
    },
    "away": {
      "name": "Mexico",
      "iso": "mx",
      "fifaRank": 12,
      "rating": 80
    },
    "teaser": "A组末轮 · 捷克 vs 墨西哥",
    "home_win": 16,
    "draw": 28,
    "away_win": 56,
    "predicted_score": "0-1",
    "key_player_home": "Patrik Schick",
    "key_player_away": "Raúl Jiménez"
  },
  "upcomingMatches": [
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
