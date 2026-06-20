// 今日赛事 — Day 9 (signals enriched)
// Last updated: 2026-06-20T14:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-20T14:00:00+08:00",
  "syncSource": "FIFA 赛程 · Day 10 · weather/mystic/injuries/coach/referee enriched · 推演概要+小组形势",
  "breakingNews": [
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m36 · Istvan Kovacs（罗马尼亚 · 第1000场）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m34 · 马宁 Ning Ma（中国 · 24年来首位主裁）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m33 · Juan Gabriel Benítez（巴拉圭）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m35 · Michael Oliver（英格兰）",
      "time": "官方确认"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 10 教练分析&冷门预警已纳入（m33–m36）",
      "time": "6月21日"
    },
    {
      "tag": "INJURY",
      "text": "✅ Day 10 伤病&更衣室已更新：Kubo 缺阵 m36 · Timber 兄弟 OUT m35 · Wahi 归队 m33",
      "time": "6月20日"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 10 气候预报+灵力分析已更新（m33–m36）",
      "time": "6月21日"
    },
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
    }
  ],
  "todayMatches": [
    {
      "id": "m35",
      "group": "F",
      "matchday": 2,
      "date": "2026-06-20",
      "time": "12:00",
      "time_local": "12:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "01:00",
      "date_beijing": "6月21日",
      "time_beijing_full": "北京时间 6月21日 01:00",
      "venue": "NRG Stadium",
      "city": "Houston, USA",
      "note": "F组第2轮 · 荷兰 vs 瑞典 · 休斯顿 · FIFA 官方裁判已确认（Michael Oliver）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-4-2",
          "home": "Verbruggen; Dumfries, De Ligt, Van Dijk, Blind; Reijnders, Wijnaldum, Simons; Gakpo, Depay, Bergwijn",
          "away": "Olsen; Krafth, Lindelöf, Granqvist, Augustinsson; Olsson, Forsberg, Kulusevski; Isak, Gyökeres, Elanga",
          "source": "ESPN / VI 预测 · 非官方",
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
          "D",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Ronald Koeman",
        "stars": [
          {
            "name": "Virgil van Dijk",
            "pos": "CB",
            "club": "Liverpool",
            "desc": "队长 · 防线核心",
            "rating": 8.5
          }
        ],
        "star": {
          "name": "Virgil van Dijk",
          "pos": "CB",
          "club": "Liverpool",
          "desc": "队长 · 防线核心",
          "rating": 8.5
        },
        "injuries": [
          {
            "player": "Jurriën Timber",
            "status": "OUT",
            "note": "腹股沟长期伤，未进世界杯名单",
            "confirmed": true
          },
          {
            "player": "Quinten Timber",
            "status": "OUT",
            "note": "训练 concussion，无法出战瑞典",
            "confirmed": true
          },
          {
            "player": "Virgil van Dijk",
            "status": "FIT",
            "note": "队长中卫；2-2 日本后防线组织责任加重",
            "confirmed": true
          },
          {
            "player": "Cody Gakpo",
            "status": "FIT",
            "note": "2-2 破门；Koeman 进攻宽度首选",
            "confirmed": true
          },
          {
            "player": "Memphis Depay",
            "status": "FIT",
            "note": "大腿伤愈，对日本替补后有望首发替 Malen",
            "confirmed": true
          },
          {
            "player": "Tijjani Reijnders",
            "status": "FIT",
            "note": "中场推进核心，休斯顿湿热下体能分配关键",
            "confirmed": true
          },
          {
            "player": "Xavi Simons",
            "status": "FIT",
            "note": "肋部创造力；Koeman 称「必须比首轮更高效」",
            "confirmed": true
          }
        ],
        "rumors": [
          "Koeman（赛前）：「2-2 日本可以接受过程，对瑞典必须取胜；瑞典 5-1 后不是同一级别的轻松」",
          "F 组：瑞典 3 分领跑，荷兰/日本各 1 分——荷兰再失分则出线告急",
          "Koeman 无新增伤疑；Depay 恢复或替 Malen 首发，De Jong+Reijnders+Gravenberch 中场不动",
          "Andersson 预计沿用 5-1 突尼斯原班，Isak+Gyökeres 双前锋",
          "Oliver 执法：荷兰球员熟悉英超裁判尺度，预计对抗强度不低"
        ]
      },
      "away": {
        "name": "Sweden",
        "iso": "se",
        "flag": "",
        "fifa_rank": 25,
        "rating": 74,
        "form": [
          "W",
          "L",
          "D",
          "W",
          "L"
        ],
        "coach": "Janne Andersson",
        "stars": [
          {
            "name": "Alexander Isak",
            "pos": "ST",
            "club": "Newcastle",
            "desc": "锋线支点",
            "rating": 8.2
          }
        ],
        "star": {
          "name": "Alexander Isak",
          "pos": "ST",
          "club": "Newcastle",
          "desc": "锋线支点",
          "rating": 8.2
        },
        "injuries": [
          {
            "player": "Gabriel Gudmundsson",
            "status": "DOUBT",
            "note": "对突尼斯抽筋下场，赛后称无碍、预计可战荷兰",
            "confirmed": true
          },
          {
            "player": "Alexander Isak",
            "status": "FIT",
            "note": "5-1 突尼斯双响+1 助，本届状态最佳前锋之一",
            "confirmed": true
          },
          {
            "player": "Viktor Gyökeres",
            "status": "FIT",
            "note": "支点中锋，与 Isak 双前锋或轮换",
            "confirmed": true
          },
          {
            "player": "Emil Forsberg",
            "status": "FIT",
            "note": "经验前腰，定位球主罚",
            "confirmed": true
          },
          {
            "player": "Victor Lindelöf",
            "status": "FIT",
            "note": "中卫主力，对 Depay/Gakpo 速度",
            "confirmed": true
          },
          {
            "player": "Dejan Kulusevski",
            "status": "FIT",
            "note": "肋部推进，对 Blind 侧翼是突破口",
            "confirmed": true
          }
        ],
        "rumors": [
          "Andersson（赛前）：「5-1 只是开始；对荷兰我们要证明能赢强队，Isak 是箭头」",
          "瑞典更衣室士气因 5-1 暴涨；媒体称「2018 后最强小组赛开局」",
          "Gudmundsson 抽筋后已恢复训练；Bergvall 或继续替补，Ayari 中场位置稳固",
          "Isak 将对位 club 队友 Van Dijk + Van Hecke——更衣室话题",
          "平局对瑞典仍有利（7 分大概率出线），荷兰必须进攻"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 1,
        "away_wins": 1,
        "recent": [],
        "note": "大赛交锋荷兰略优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-20",
        "name": "Michael Oliver",
        "nation": "England",
        "iso": "gb-eng",
        "age": 41,
        "wc_experience": "2018/2022 世界杯 · 2024 欧洲杯 · 英超顶级裁判 · 2026 本届首场主裁",
        "avg_yellow": 3.9,
        "avg_red": 0.08,
        "avg_penalty": 0.31,
        "home_win_rate": 46,
        "bias_index": 49,
        "bias_note": "英格兰名哨执法 F 组榜首对话。荷兰 Koeman 肋部 vs 瑞典 Isak 支点；Oliver 以允许对抗、少打断节奏著称，休斯顿湿热下体能犯规或升。",
        "tendencies": [
          "英格兰助理：Stuart Burt、James Mainwaring",
          "第四官员 Abongile Tom（南非）· 候补 Zakhele Siwela",
          "VAR Jarred Gillett（澳大利亚）",
          "瑞典 5-1 突尼斯后身体对抗强；荷兰 2-2 日本需取胜",
          "预计卡牌适中；对禁区内拉扯与手球 VAR 复核积极"
        ],
        "officials": {
          "ar1": "Stuart Burt (ENG)",
          "ar2": "James Mainwaring (ENG)",
          "fourth": "Abongile Tom (RSA)",
          "var": "Jarred Gillett (AUS)"
        },
        "fifa_match_id": "400021472",
        "fifa_official_id": "347710",
        "updated": "2026-06-20T12:46:45+08:00"
      },
      "prediction": {
        "home_win": 55,
        "draw": 23,
        "away_win": 22,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.72,
        "xg_away": 1.05,
        "key_factor": "F组榜首对话：瑞典首轮 5-1 后士气高 · 荷兰首轮平日本需取胜；Isak vs Van Dijk · 泊松倾向 2-1/1-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 11.3
          },
          {
            "score": "1-0",
            "prob": 10.8
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
            "prob": 6.6
          },
          {
            "score": "0-0",
            "prob": 6.3
          },
          {
            "score": "1-2",
            "prob": 5.9
          }
        ],
        "base_home_win": 53,
        "base_draw": 24,
        "base_away_win": 23,
        "depth_calibrated": true,
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Netherlands 暂列 F 组第 3（1 分 · 已赛 1 场） vs Sweden 第 1（3 分 · 已赛 1 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "休斯顿 midday 闷热，体感约 38°C · 33°C · 湿度 72% · 降雨概率 35% · 东南风 2级 · 湿热；湿热偏高——领先方后段守势、替补深度与换人节奏关键；模型略抬上半场 xG 权重（33°C · 12:00 CT 开球 · 湿度 72%）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "F组榜首对话：瑞典首轮 5-1 后士气高 · 荷兰首轮平日本需取胜；Isak vs Van Dijk · 泊松倾向 2-1/1-1"
          }
        ]
      },
      "weather": {
        "city": "休斯顿",
        "country": "美国",
        "venue": "NRG Stadium",
        "temp": 33,
        "humidity": 72,
        "altitude_m": 15,
        "rain_chance": 35,
        "wind": "东南风 2级 · 湿热",
        "condition_cn": "休斯顿 midday 闷热，体感约 38°C",
        "impact_level": "HIGH",
        "impact": "NRG Stadium 33°C+72% 湿度午间开球，荷兰与瑞典均须 15 分钟补水 breaks；高位压迫后段体能衰减是隐性变量",
        "impact_summary": "湿热偏高——领先方后段守势、替补深度与换人节奏关键；模型略抬上半场 xG 权重",
        "home_adapt": 78,
        "away_adapt": 76,
        "home_note": "荷兰首轮 2-2 日本已暴露后段专注度问题；休斯顿湿热对欧洲球队体能考验大",
        "away_note": "瑞典 5-1 突尼斯士气高但 Isak 支点消耗大；Andersson 轮换与补水管理是重点",
        "prediction_note": "湿热下总球面：上半场开放、70' 后若领先或可能回落；忌领先后「终乱」",
        "weather_factors": [
          {
            "label": "33°C · 12:00 CT 开球",
            "impact": "高",
            "detail": "北京时间 6月21日 01:00；NRG 封闭式但空调难完全抵消湿热"
          },
          {
            "label": "湿度 72%",
            "impact": "高",
            "detail": "体感超 38°C，FIFA 强制补水暂停概率高"
          },
          {
            "label": "降雨概率 35%",
            "impact": "低-中",
            "detail": "对流雨可能，对传球影响有限"
          }
        ],
        "historical_note": "NRG Stadium · F组第2轮 · 荷兰 vs 瑞典 · 预报更新 2026-06-20 22:00 本地",
        "forecast_updated": "2026-06-20 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "month": "甲午月",
          "month_element": "金+火",
          "day": "庚寅日",
          "day_element": "金+木",
          "day_dominant": "金木相战",
          "day_summary": "庚寅日——庚金坐寅木，金木相战。《道德经》曰：「知止不殆。」宜早段破局、忌领先后松懈；非力之大小，乃气之顺逆。",
          "hour_home": "丑时（01:00-03:00）",
          "hour_home_element": "土"
        },
        "wuxing": {
          "home": {
            "team": "Netherlands",
            "colors": "橙+白+蓝",
            "elements": "火、金、水",
            "wuxing_short": "火金水杂",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 55,
            "reason": "橙色属火。丑土当令，火生土——休斯顿湿热土气厚重，宜早段破局。",
            "advantage": "丑土泄火气，宜上半场主动"
          },
          "away": {
            "team": "Sweden",
            "colors": "黄+蓝",
            "elements": "土、水",
            "wuxing_short": "土水相涵",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 53,
            "reason": "黄属土、蓝属水。丑土日土气叠加，瑞典土性守中。",
            "advantage": "土水守势，忌早段失球"
          },
          "summary": "五行裁定：丑土当令；荷兰火金、瑞典土水——气运接近，早段破局者占先机"
        },
        "hexagram": {
          "name": "地天泰",
          "symbol": "☷☰",
          "number": 11,
          "upper": "坤地",
          "lower": "乾天",
          "quote": "《周易·泰卦》：「小往大来，吉亨。」",
          "general": "泰卦——天地交泰，小往大来；F 组榜首战宜上半场相济破局。",
          "advantage_team": "Netherlands",
          "disadvantage_team": null,
          "hexagram_analysis": "泰卦「上下交泰」：丑时土气，乾天在下——气运宜早段主动。",
          "match_nature": "交泰破局 · 宜早动",
          "yellow_card_risk": "中",
          "yellow_card_reason": "榜首战+湿热，预计 4-5 黄。",
          "scenarios": [
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 28-45 分钟"
            }
          ]
        },
        "goal_peak": {
          "scope": "first_half",
          "title": "上半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 28,
              "end_min": 45,
              "hex_reason": "泰卦「小往大来」",
              "time_reason": "丑时土气，宜上半场破局"
            }
          ],
          "periods": "第 28-45 分钟",
          "rationale": "丑时土厚，泰卦主交泰——气运集中于上半场一段。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 63,
        "away_score": 55,
        "mystic_verdict": "荷兰火金交泰，瑞典土水守中——休斯顿湿热，宜早段破局。",
        "model_bridge": "xG 1.72-1.05 略看好荷兰，Isak 对 VVD 是竞技关键。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "depth_calibration": {
        "tier_home": 0.75,
        "tier_label": "Netherlands 被看好 · 净胜约 0.5–1 球",
        "implied_tier": 0.25,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Netherlands（约 56%）",
        "analysis": "即时：荷兰 -0.75（初 -0.5 升盘）/ 大小 2.75（初 2.5 升，13 家升盘）；澳 0.88/0.96 · 大 0.78 小 1.02。瑞典首轮 5-1 后盘口仍浅升，大小球明显往 3 球靠。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.4
            },
            {
              "score": "1-0",
              "prob": 10.9
            },
            {
              "score": "2-1",
              "prob": 9.8
            }
          ],
          "one_goal_win_pct": 24.1,
          "two_plus_win_pct": 28.6,
          "full_cover_pct": 52.7,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0.054,
          "dog_cover_ev": -0.054,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 2.77,
          "fair_totals_line": 2,
          "over_2_5_pct": 51.9,
          "over_3_pct": 29.5,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 52.7%；仅赢 1 球约 0%"
        },
        "spread_odds": {
          "fav": 0.88,
          "dog": 0.96,
          "note": "Netherlands 0.88 · Sweden 0.96"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.77,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 40.7,
          "under_pct": 59.3,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 62,
          "public_lean_cn": "舆论略看好多进球（约 62%）",
          "index_note": "大比分侧 0.78 / 小比分侧 1.02 · 录入 2.5→2.75",
          "totals_odds": {
            "over": 0.78,
            "under": 1.02,
            "note": "大比分 0.78 · 小比分 1.02"
          },
          "rational_cn": "模型略看小比分（超 2.75 约 59.3% 难达）；参考高于合理值",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "applied_delta": {
          "home_win": 2,
          "draw": -1,
          "away_win": -1
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 -1% · 客 -1%",
        "adjusted_probs": {
          "home_win": 55,
          "draw": 23,
          "away_win": 22
        },
        "display_summary": {
          "fav_name": "Netherlands",
          "expected_total_goals": 1.91,
          "poisson_fav_win_pct": 42.9,
          "small_lead_pct": 25,
          "small_example_score": "1-0",
          "small_example_pct": 16.4,
          "big_cover_pct": 17.9,
          "big_example_score": "2-0",
          "big_example_pct": 9.2,
          "win_shape": {
            "fav_name": "Netherlands",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 38.3%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 16.4,
                "pct": 38.3
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 8.6,
                "pct": 19.9
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 12.6,
                "pct": 29.5
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 5.3,
                "pct": 12.3
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 58.2
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 29.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 12.3
              }
            ],
            "fav_win_pct": 55
          },
          "excitement": {
            "label_cn": "偏晚",
            "label_key": "slow",
            "label_color": "#7BB8D4",
            "sub_cn": "预期首球等待约 46.9 分",
            "first_goal_wait": 46.9,
            "fast_pct": 47.3,
            "moderate_pct": 14.4,
            "slow_pct": 38.3,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 47.3
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
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Netherlands：Jurriën Timber、Quinten Timber 缺阵 · Sweden：Gabriel Gudmundsson 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "控节奏 / 4-5-1 收缩（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "湿热偏高——领先方后段守势、替补深度与换人节奏关键；模型略抬上半场 xG 权重"
            }
          ],
          "xg_context": {
            "baseline_home": 1.72,
            "baseline_away": 1.05,
            "adjusted_home": 1.12,
            "adjusted_away": 0.8,
            "note": "基准 xG 1.72–1.05 → 调整后 1.12–0.8"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "Netherlands 被看好 · 净胜约 0.25 球",
            "market_tier_label": "Netherlands 被看好 · 净胜约 0.5–1 球",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5"
          },
          "win_outlook": {
            "fav_name": "Netherlands",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 58.2
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 29.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 12.3
              }
            ],
            "margin_line_cn": "Netherlands · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 42.9,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2.25,
            "model_total_xg": 1.92,
            "totals_line_gap": 0.5,
            "totals_high_pct": 21.4,
            "totals_low_pct": 78.6,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 25.6,
            "win_margin2_low_total_pct": 9.2,
            "win_margin2_high_total_pct": 8.7,
            "readout_cn": "取胜约 55%；若取胜，以「险胜收工」为主（58.2%）。 对着赛前净胜参考，净胜≥1（全达标）约 42.9%；对着总进球参考 2.75，模型超线概率约 21.4%。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 16.4
            },
            {
              "score": "0-0",
              "pct": 14.7
            },
            {
              "score": "1-1",
              "pct": 13.2
            }
          ],
          "totals_view": {
            "expected_total": 1.9,
            "fair_line": 2.25,
            "market_line": 2.75,
            "line_gap": 0.5,
            "over_pct": 21.4,
            "gap_warning": null,
            "totals_outlook": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 21,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": true,
              "over_pct": 21.4,
              "line_gap": 0.5,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 1.9 · 合理值 2.25 · 总进球参考 2.75（高于合理值 0.5） · 高于合理值 0.5 · 进球氛围：倾向沉闷"
          },
          "customer_reading": {
            "headline_cn": "Netherlands · 净胜走向：有达标可能",
            "sub_cn": "达标概率约 42.9% · 有达标可能 进球氛围：倾向沉闷",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Netherlands",
              "market_expect_cn": "净胜≥1",
              "meet_pct": 42.9,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "有达标可能",
              "headline_cn": "Netherlands · 净胜走向：有达标可能",
              "pill_cn": "达标概率约 42.9% · 有达标可能",
              "detail_cn": "Netherlands · 赛前外界预期 净胜≥1。模型推演达标概率约 42.9%；有一定达标空间，但非高把握。",
              "extra_stats_cn": "",
              "full_cover_pct": 42.9,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": 0.5,
              "show_cover": true
            },
            "totals": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 21,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": true,
              "over_pct": 21.4,
              "line_gap": 0.5,
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
                  "level": "possible",
                  "label_cn": "有达标可能",
                  "color": "#C8A96E",
                  "fav_name": "Netherlands",
                  "market_expect_cn": "净胜≥1",
                  "meet_pct": 42.9,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Netherlands · 净胜走向：有达标可能",
                  "pill_cn": "达标概率约 42.9% · 有达标可能",
                  "detail_cn": "Netherlands · 赛前外界预期 净胜≥1。模型推演达标概率约 42.9%；有一定达标空间，但非高把握。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 42.9,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "达标概率约 42.9% · 有达标可能",
                "color": "#C8A96E",
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
                  "meter_pos": 21,
                  "lean_side": "dull",
                  "lean_strength": "clear",
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "倾向沉闷",
                  "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
                  "headline_cn": "进球氛围：倾向沉闷",
                  "show_lean": true,
                  "over_pct": 21.4,
                  "line_gap": 0.5,
                  "market_line": 2.75,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 2.75",
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
              "team": "Netherlands",
              "first_goal_pct": 58.3,
              "start_score": "1-0",
              "fav_name": "Netherlands",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 90.9,
              "small_lead_pct": 36.7,
              "big_lead_pct": 32.8,
              "fav_win_pct": 69.6,
              "fav_draw_pct": 21.3,
              "fav_lose_pct": 9.1,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Netherlands 保持胜果（净胜≥1）",
                  "pct": 69.6
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 21.3
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 9.1
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 49.2 分",
                "first_goal_wait": 49.2,
                "fast_pct": 39.4,
                "moderate_pct": 13.4,
                "slow_pct": 47.2,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 39.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.4
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 47.2
                  }
                ]
              },
              "big_delta": 14.9,
              "small_delta": 11.7,
              "narrative": "Netherlands 先破门（已 1-0） → 「控节奏」；Sweden 「堆前锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": {
                "fav_name": "Netherlands",
                "state_label": "Netherlands 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 58.2
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 29.5
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 12.3
                  }
                ],
                "margin_line_cn": "Netherlands · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 69.6,
                "margin_half_pct": 0,
                "margin_fail_pct": 36.7,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.5,
                "totals_line_gap": 0.5,
                "totals_high_pct": 31.7,
                "totals_low_pct": 68.3,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 39.5,
                "win_margin2_low_total_pct": 17.2,
                "win_margin2_high_total_pct": 15.6,
                "readout_cn": "Netherlands 已 1-0 领先：仍取胜约 69.6%。 对着总进球参考 2.75，模型超线概率约 31.7%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Sweden",
              "first_goal_pct": 41.7,
              "start_score": "0-1",
              "fav_name": "Netherlands",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 46.2,
              "small_lead_pct": 13,
              "big_lead_pct": 5.4,
              "fav_win_pct": 18.4,
              "fav_draw_pct": 27.8,
              "fav_lose_pct": 53.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Netherlands 追平（平局）",
                  "pct": 27.8
                },
                {
                  "key": "win1",
                  "label": "Netherlands 净胜1球翻盘（如 2-1）",
                  "pct": 13
                },
                {
                  "key": "win2",
                  "label": "Netherlands 净胜≥2球翻盘（如 3-1）",
                  "pct": 5.4
                },
                {
                  "key": "upset_hold",
                  "label": "Sweden 保持胜果至终场",
                  "pct": 53.9
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 47.1 分",
                "first_goal_wait": 47.1,
                "fast_pct": 40.7,
                "moderate_pct": 13.6,
                "slow_pct": 45.7,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 40.7
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.6
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 45.7
                  }
                ]
              },
              "big_delta": -12.5,
              "small_delta": -12,
              "narrative": "Sweden 先破门（已 0-1） → 「4-5-1 收缩」；Netherlands 「堆边锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 1.9 · 合理值 2.25 · 总进球参考 2.75（高于合理值 0.5） · 高于合理值 0.5 · 进球氛围：倾向沉闷",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 21.4,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                },
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 30,
              "readout_cn": "Netherlands · 低位反击 · 进球偏少。进球氛围倾向沉闷（模型推演）；时间段分布见下方历史节奏参考。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 30% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                },
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 30,
              "fav_lead_style": "defensive"
            }
          },
          "goal_timing": {
            "sample_label": "近30场",
            "source_note": "user_screenshot_2026-06-20_ned_swe",
            "home_name": "Netherlands",
            "away_name": "Sweden",
            "intervals": [
              "1–15",
              "16–30",
              "31–45",
              "46–60",
              "61–75",
              "76–90",
              "90+"
            ],
            "peaks": {
              "home_scored": {
                "interval": "46–60",
                "pct": 19
              },
              "home_conceded": {
                "interval": "31–45",
                "pct": 22
              },
              "away_scored": {
                "interval": "46–60",
                "pct": 21
              },
              "away_conceded": {
                "interval": "31–45",
                "pct": 21
              }
            },
            "cross_insight": {
              "has_cross": true,
              "hits": [
                {
                  "type": "open_play",
                  "interval": "46–60",
                  "color": "#E8A54B",
                  "title": "对攻高发时段",
                  "text": "46–60 分：双方惯常进球高峰重合，该时段比赛更开放、进球面相对更大。"
                },
                {
                  "type": "both_leak",
                  "interval": "31–45",
                  "color": "#C8A96E",
                  "title": "双方易失球时段",
                  "text": "31–45 分：双方惯常失球高峰重合，该时段防守相对更松、总进球面可能抬升。"
                }
              ],
              "cross_intervals": [
                "46–60",
                "31–45"
              ],
              "summary_cn": "发现 2 处节奏重合窗口"
            },
            "disclaimer_cn": "以上为两队近30场历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。"
          }
        },
        "public_summary_note": "【推演概要】Netherlands · 低位反击 · 进球偏少。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.77,
          "xg_gap": 0.67,
          "xg_home": 1.72,
          "xg_away": 1.05,
          "xg_baseline_home": 1.72,
          "xg_baseline_away": 1.05,
          "xg_note": "结构推演用基准 xG 1.72–1.05（进球氛围用调整后 1.12–0.8）",
          "lean_note": "进球氛围偏闷（预测约 1.9），但「弱队开花」结构需防弱队开花抬高总进球",
          "fav_name": "Netherlands",
          "dog_name": "Sweden",
          "fav_xg": 1.72,
          "dog_xg": 1.05,
          "path_type": "dog_bloom",
          "path_label": "弱队开花",
          "lean": "prevention_high",
          "lean_cn": "预防大比分",
          "lean_mode": "prevention",
          "lean_confidence": null,
          "prevention_reason_cn": "进球氛围偏闷（预测约 1.9），但「弱队开花」结构需防弱队开花抬高总进球",
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [
            {
              "key": "dog_goal",
              "label": "Sweden进球",
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
              "label": "仅Netherlands进球",
              "detail": "热门单榜领先、弱队仍无球 → 仍按进球氛围小比分，不必因路径升级",
              "severity": "calm"
            },
            {
              "key": "bloom_score",
              "label": "弱队开花比分",
              "detail": "留意 2-2、1-2 等弱队 contribution 抬高总进球",
              "severity": "mid"
            }
          ],
          "prob_over_line": 40.7,
          "prob_meet_guess": 51.9,
          "guess_n": 3,
          "prob_4_plus": 29.5,
          "prob_2_or_less": 48.1,
          "totals_line": 2.75,
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
              "key": "prevention_high",
              "label": "预防大比分",
              "color": "#E8A54B",
              "bg": "rgba(232,165,75,0.12)"
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
          "pattern_note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "summary_cn": "【路径·基准 xG】合计 2.77 · Netherlands 1.72 / Sweden 1.05 → 主路径「弱队开花」约 41% · 预防大比分。 至少 3 球约 51.9% · 超 2.75 约 40.7% · ≤2球 48.1%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "F",
        "label": "F组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Sweden",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 5,
            "ga": 1
          },
          {
            "team": "Japan",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Netherlands",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Tunisia",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 5
          }
        ],
        "home": {
          "team": "Netherlands",
          "rank": 3,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 C 组第 2倾向 Morocco（强队）",
          "if_1st_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_1st_corridor": "荷兰若夺 F 组头名，32 强直接对话 C 组次席（巴西若列次席则提前相遇）",
          "if_2nd": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 C 组第 1倾向 Brazil（强队）",
          "if_2nd_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_2nd_corridor": "F 组次席 32 强碰 C 组头名，16 强进 E/I 次席走廊",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Sweden",
          "rank": 1,
          "pts": 3,
          "played": 1,
          "if_1st": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 C 组第 2倾向 Morocco（强队）",
          "if_1st_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_1st_corridor": "荷兰若夺 F 组头名，32 强直接对话 C 组次席（巴西若列次席则提前相遇）",
          "if_2nd": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 C 组第 1倾向 Brazil（强队）",
          "if_2nd_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_2nd_corridor": "F 组次席 32 强碰 C 组头名，16 强进 E/I 次席走廊",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "C 组：头名 Brazil 4 分 · 次席 Morocco 同分（32强绑定组）",
          "E 组：头名 Germany 3 分 · 次席 Côte d'Ivoire 同分（32强绑定组）",
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "I 组 Norway 3 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": null,
          "reason": "本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。",
          "optimal_summary": "策略最优解（推演）：关联组形势胶着，本场 Sweden 取胜最能巩固主动，Netherlands 则需积极抢 3 分；若握手各取 1 分，对领先方尚可接受，对追赶方则略偏保守——此阶段仍以全力争胜、抢 3 分为上策；尚未到以演练或轮换为名调整名次、接受非胜结果的窗口。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Netherlands 若取胜：积分 4，F 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Sweden 若取胜：积分 6，客场抢分将改变 F 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 C 组：头名 Brazil 4 分 · 次席 Morocco 同分（32强绑定组） · E 组：头名 Germany 3 分 · 次席 Côte d'Ivoire 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。"
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Ronald Koeman",
          "age": 62,
          "nation": "荷兰",
          "tenure": "2024年—",
          "wc_exp": "2020 欧洲杯 · 2026 二进宫",
          "style_tags": [
            "4-3-3",
            "Gakpo 宽度",
            "Simons 肋部",
            "VVD 防线"
          ],
          "formation_pref": "4-3-3 · Depay 支点",
          "style_summary": "2-2 日本后可接受但 F 组被动；对瑞典必须取胜，Koeman 强调休斯顿湿热下补水与效率。",
          "subs": {
            "timing": "首换 58–65 分钟",
            "pattern": "Simons+Gakpo 宽度",
            "avg_first_sub": "61'",
            "note": "再失分则出线告急"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "1 球领先：Reijnders 节拍器。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：Gakpo/Simons 加码。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "对瑞典 Isak 对位 VVD。"
          },
          "vs_weak": {
            "label": "对弱队：压上",
            "detail": "对突尼斯会不同。"
          },
          "tournament": "Koeman 二进宫压力；F 组再平则被动。",
          "traits": [
            "Gakpo 核心",
            "必须取胜",
            "湿热",
            "Isak 对位"
          ],
          "match_note": "F 组再失分则被动——Gakpo/Simons 宽度 vs Isak 支点；休斯顿湿热体能变量。"
        },
        "away": {
          "name": "Janne Andersson",
          "age": 62,
          "nation": "瑞典",
          "tenure": "2016年—",
          "wc_exp": "2018/2022 世界杯 · 2026 带队",
          "style_tags": [
            "4-4-2",
            "Isak 支点",
            "Forsberg 组织",
            "身体对抗"
          ],
          "formation_pref": "4-4-2 · Isak+Gyökeres",
          "style_summary": "5-1 突尼斯后 F 组领跑；Andersson 称对荷兰「证明能赢强队」，Isak 状态火热是更衣室最大话题。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "Isak 打满",
            "avg_first_sub": "67'",
            "note": "5-1 士气高"
          },
          "when_leading": {
            "label": "4-5-1 收缩",
            "detail": "1 球领先：Forsberg 定位球。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "unlikely 先丢球。"
          },
          "vs_strong": {
            "label": "对强队：反击+定位球",
            "detail": "对荷兰 Isak 速度。"
          },
          "vs_weak": {
            "label": "对弱队：压制",
            "detail": "5-1 突尼斯已验证。"
          },
          "tournament": "2018 后最强小组赛开局；休斯顿体能考验。",
          "traits": [
            "Isak 爆发",
            "Forsberg 定位球",
            "领跑",
            "身体对抗"
          ],
          "match_note": "5-1 突尼斯领跑——Isak 状态火热，平局对瑞典仍有利。"
        }
      },
      "upset_alert": {
        "favorite": "Netherlands",
        "underdog": "Sweden",
        "favorite_iso": "NED",
        "index": 32,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 30,
        "verdict": "瑞典 5-1 领跑后 Isak 状态火热——荷兰 2-2 日本效率成疑，瑞典冷胜/平局约 30%。",
        "tactical": "Koeman 4-3-3 vs Andersson 4-4-2；Isak 对 VVD 是关键对位。",
        "psychology": "荷兰「必须取胜」；瑞典「2018 后最强开局」。",
        "historical": "大赛荷兰略优；瑞典 5-1 士气高。",
        "factors": [
          {
            "tag": "Isak",
            "impact": "强",
            "detail": "5-1 双响状态"
          },
          {
            "tag": "湿热",
            "impact": "中",
            "detail": "休斯顿 33°C 体能变量"
          },
          {
            "tag": "F组形势",
            "impact": "强",
            "detail": "荷兰再失分则被动"
          }
        ]
      }
    },
    {
      "id": "m33",
      "group": "E",
      "matchday": 2,
      "date": "2026-06-20",
      "time": "16:00",
      "time_local": "16:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "04:00",
      "date_beijing": "6月21日",
      "time_beijing_full": "北京时间 6月21日 04:00",
      "venue": "BMO Field",
      "city": "Toronto, Canada",
      "note": "E组第2轮 · 德国 vs 科特迪瓦 · 多伦多 · FIFA 官方裁判已确认（Juan Gabriel Benítez）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Neuer; Kimmich, Rüdiger, Tah, Raum; Goretzka, Andrich; Musiala, Wirtz, Sané; Havertz",
          "away": "Fodé; Konan, Boly, Aurier; Serper, Sangaré; Zaha, Adingra, Bamba; Krasso, Haller",
          "source": "Kicker / BBC 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Germany",
        "iso": "de",
        "flag": "",
        "fifa_rank": 8,
        "rating": 86,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Julian Nagelsmann",
        "stars": [
          {
            "name": "Florian Wirtz",
            "pos": "CAM",
            "club": "Leverkusen",
            "desc": "组织核心",
            "rating": 8.7
          }
        ],
        "star": {
          "name": "Florian Wirtz",
          "pos": "CAM",
          "club": "Leverkusen",
          "desc": "组织核心",
          "rating": 8.7
        },
        "injuries": [
          {
            "player": "Jamal Musiala",
            "status": "FIT",
            "note": "7-1 库拉索梅开二度+助攻，Nagelsmann 确认「完全可用」",
            "confirmed": true
          },
          {
            "player": "Florian Wirtz",
            "status": "FIT",
            "note": "组织核心状态正佳；对科特迪瓦肋部渗透是破局关键",
            "confirmed": true
          },
          {
            "player": "Kai Havertz",
            "status": "FIT",
            "note": "中锋支点，首轮戴帽后更衣室士气极高",
            "confirmed": true
          },
          {
            "player": "Manuel Neuer",
            "status": "FIT",
            "note": "小腿伤愈后对库拉索复出；Nagelsmann 称「经验与领导力不可替代」",
            "confirmed": true
          },
          {
            "player": "Joshua Kimmich",
            "status": "FIT",
            "note": "右闸/后腰摇摆，7-1 后战术自由度提升",
            "confirmed": true
          },
          {
            "player": "Lennart Karl",
            "status": "OUT",
            "note": "大腿伤赛前退出，Assan Ouédraogo 递补入队",
            "confirmed": true
          }
        ],
        "rumors": [
          "Nagelsmann（赛前）：「7-1 是态度回应，但对科特迪瓦是不同比赛——非洲杯冠军边路速度极快」",
          "德媒：训练演练多种阵型以限制 Pépé/Amad  flank 速度，人员预计与首轮相近",
          "德国 7-1 库拉索后 E 组净胜球 +6，科特迪瓦 1-0 厄瓜多尔同积 3 分——Toronto 榜首战",
          "更衣室：Musiala+Wirtz 双核被称「新一代节拍器」；Neuer 40 岁回归一门成话题",
          "Toronto 最后一次队检：除 Karl 外无新增伤疑"
        ]
      },
      "away": {
        "name": "Côte d'Ivoire",
        "iso": "ci",
        "flag": "",
        "fifa_rank": 36,
        "rating": 75,
        "form": [
          "W",
          "D",
          "L",
          "W",
          "D"
        ],
        "coach": "Emerse Faé",
        "stars": [
          {
            "name": "Nicolas Pépé",
            "pos": "RW",
            "club": "Trabzonspor",
            "desc": "边路爆点",
            "rating": 8
          }
        ],
        "star": {
          "name": "Nicolas Pépé",
          "pos": "RW",
          "club": "Trabzonspor",
          "desc": "边路爆点",
          "rating": 8
        },
        "injuries": [
          {
            "player": "Nicolas Pépé",
            "status": "FIT",
            "note": "边路爆点；1-0 厄瓜多尔全场最威胁一点",
            "confirmed": true
          },
          {
            "player": "Franck Kessié",
            "status": "FIT",
            "note": "中场屏障+前插，Faé 战术轴心",
            "confirmed": true
          },
          {
            "player": "Seko Fofana",
            "status": "FIT",
            "note": "串联中场，对德国高位需出球质量",
            "confirmed": true
          },
          {
            "player": "Evan N'Dicka",
            "status": "FIT",
            "note": "中卫主力，对 Havertz 空中球是考验",
            "confirmed": true
          },
          {
            "player": "Ange-Yoan Bonny",
            "status": "FIT",
            "note": "锋线支点，1-0 制胜球贡献者",
            "confirmed": true
          },
          {
            "player": "Elye Wahi",
            "status": "FIT",
            "note": "签证风波后已抵 Toronto 合练；与 Bonny/Guessand 争首发",
            "confirmed": true
          }
        ],
        "rumors": [
          "Faé（赛前）：「1-0 厄瓜多尔证明我们可以零封；对德国要纪律+速度，不是龟缩」",
          "Wahi 入境加拿大一度受阻（场外调查传闻），FIF 确认授权后周五与队合练——更衣室称「欢迎归队」",
          "Singo：「全队在加拿大受到欢迎，期待明天好结果」",
          "预计 4-4-2 低位+双前锋（Wahi 或 Bonny）+ Pépé 边路，Kessié 保护防线",
          "Faé 强调「不能给 Wirtz 和 Musiala 肋部空间」"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 1,
        "away_wins": 0,
        "recent": [],
        "note": "德国大赛占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-20",
        "name": "Juan Gabriel Benítez",
        "nation": "Paraguay",
        "iso": "py",
        "age": 44,
        "wc_experience": "2026 世界杯首秀主裁（此前任第四官员）· 南美 WCQ 场均约 22.6 犯规 · FIFA 国际裁判",
        "avg_yellow": 4.8,
        "avg_red": 0.15,
        "avg_penalty": 0.22,
        "home_win_rate": 48,
        "bias_index": 50,
        "bias_note": "巴拉圭名哨执法 E 组榜首战。德国高位压迫下战术犯规、科特迪瓦 Pépé/Kessié 转换速度、禁区内拉扯尺度是焦点；本届首次担任主裁。",
        "tendencies": [
          "巴拉圭助理：Eduardo Cardozo、Milcíades Saldívar",
          "第四官员 Khalid Al-Turais（沙特）· 候补 Mohammed Al-Bakry",
          "VAR Antonio García（乌拉圭）· AVAR Guillermo Pacheco · SVAR Juan Soto",
          "榜首战预计 4–5 张黄牌；对重复犯规与拖延时间容忍度中等",
          "德国 7-1 后节奏快，科特迪瓦 1-0 厄瓜多尔后反击纪律受考验"
        ],
        "officials": {
          "ar1": "Eduardo Cardozo (PAR)",
          "ar2": "Milcíades Saldívar (PAR)",
          "fourth": "Khalid Al-Turais (KSA)",
          "var": "Antonio García (URU)",
          "avar": "Guillermo Pacheco (MEX)",
          "svar": "Juan Soto (VEN)"
        },
        "fifa_match_id": "400021469",
        "fifa_official_id": "416159",
        "updated": "2026-06-20T12:46:45+08:00"
      },
      "prediction": {
        "home_win": 62,
        "draw": 21,
        "away_win": 17,
        "score": "2-0",
        "confidence": 76,
        "xg_home": 2.05,
        "xg_away": 0.95,
        "key_factor": "E组榜首战：德国 7-1 库拉索后 xG 高位 · 科特迪瓦 1-0 厄瓜多尔 · Wirtz+Musiala vs 非洲杯冠军反击",
        "score_dist": [
          {
            "score": "2-0",
            "prob": 10.5
          },
          {
            "score": "1-0",
            "prob": 10.2
          },
          {
            "score": "2-1",
            "prob": 9.9
          },
          {
            "score": "1-1",
            "prob": 9.7
          },
          {
            "score": "3-0",
            "prob": 7.1
          },
          {
            "score": "3-1",
            "prob": 6.8
          },
          {
            "score": "0-0",
            "prob": 5
          }
        ],
        "base_home_win": 62,
        "base_draw": 21,
        "base_away_win": 17,
        "depth_calibrated": true,
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Germany 暂列 E 组第 1（3 分 · 已赛 1 场） vs Côte d'Ivoire 第 2（3 分 · 已赛 1 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "多伦多傍晚温和，微有湖风 · 22°C · 湿度 58% · 降雨概率 20% · 安大略湖 breeze 3级；气候变量低——Wirtz+Musiala 肋部 vs Pépé 反击不受天气明显扰动（22°C · 16:00 ET 开球 · 湖风 3级）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "E组榜首战：德国 7-1 库拉索后 xG 高位 · 科特迪瓦 1-0 厄瓜多尔 · Wirtz+Musiala vs 非洲杯冠军反击"
          }
        ]
      },
      "weather": {
        "city": "多伦多",
        "country": "加拿大",
        "venue": "BMO Field",
        "temp": 22,
        "humidity": 58,
        "altitude_m": 90,
        "rain_chance": 20,
        "wind": "安大略湖 breeze 3级",
        "condition_cn": "多伦多傍晚温和，微有湖风",
        "impact_level": "LOW",
        "impact": "BMO Field 22°C 傍晚开球，德国与科特迪瓦均适应温带气候；战术对位主导，气候非主变量",
        "impact_summary": "气候变量低——Wirtz+Musiala 肋部 vs Pépé 反击不受天气明显扰动",
        "home_adapt": 86,
        "away_adapt": 84,
        "home_note": "德国首轮 7-1 后节奏自信；多伦多傍晚对传控型球队友好",
        "away_note": "科特迪瓦 1-0 厄瓜多尔后低位+转换；非洲球队 22°C 级夜场是舒适区",
        "prediction_note": "模型不因气候微调 xG；若微雨场地略滑，反击速度微升",
        "weather_factors": [
          {
            "label": "22°C · 16:00 ET 开球",
            "impact": "低",
            "detail": "北京时间 6月21日 04:00；多伦多傍晚降温"
          },
          {
            "label": "湖风 3级",
            "impact": "低",
            "detail": "开放式球场，长传精度略受影响"
          },
          {
            "label": "降雨 20%",
            "impact": "低",
            "detail": "天然草状态良好"
          }
        ],
        "historical_note": "BMO Field · E组榜首战 · 预报更新 2026-06-20 22:00 本地",
        "forecast_updated": "2026-06-20 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "month": "甲午月",
          "month_element": "金+火",
          "day": "庚寅日",
          "day_element": "金+木",
          "day_dominant": "金木相战",
          "day_summary": "庚寅日——庚金坐寅木，金木相战。《道德经》曰：「知止不殆。」宜早段破局、忌领先后松懈；非力之大小，乃气之顺逆。",
          "hour_home": "寅时（04:00-06:00）",
          "hour_home_element": "木"
        },
        "wuxing": {
          "home": {
            "team": "Germany",
            "colors": "白+黑",
            "elements": "金、水",
            "wuxing_short": "金水相涵",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 58,
            "reason": "白属金、黑属水。寅木当令，金生水——多伦多 evening 金水相济。",
            "advantage": "寅木泄金气，组织流畅"
          },
          "away": {
            "team": "Côte d'Ivoire",
            "colors": "橙+绿+白",
            "elements": "火、木、金",
            "wuxing_short": "火木金杂",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 52,
            "reason": "橙火、绿木。寅木旺，火木相生宜反击。",
            "advantage": "寅木助火木，转换有暗流"
          },
          "summary": "五行裁定：寅木当令；德国金水、科特迪瓦火木——气运略利热门，忌轻敌"
        },
        "hexagram": {
          "name": "火风鼎",
          "symbol": "☲☴",
          "number": 50,
          "upper": "离火",
          "lower": "巽风",
          "quote": "《周易·鼎卦》：「元吉，亨。」",
          "general": "鼎卦——火风相济，革故鼎新；榜首战宜主动变革。",
          "advantage_team": "Germany",
          "disadvantage_team": null,
          "hexagram_analysis": "鼎卦「亨」：寅木助风，离火在上——气运宜上半场破局。",
          "match_nature": "鼎新破局 · 宜主动",
          "yellow_card_risk": "中",
          "yellow_card_reason": "榜首战转换快，预计 4-5 黄。",
          "scenarios": [
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 32-50 分钟"
            }
          ]
        },
        "goal_peak": {
          "scope": "first_half",
          "title": "上半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 32,
              "end_min": 50,
              "hex_reason": "鼎卦「元亨」",
              "time_reason": "寅木当令，宜上半场破局"
            }
          ],
          "periods": "第 32-50 分钟",
          "rationale": "寅木当令，鼎卦主革故鼎新——气运集中于上半场一段。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 68,
        "away_score": 54,
        "mystic_verdict": "德国金水相济，科特迪瓦火木反击——寅木当令，热门宜早破局。",
        "model_bridge": "xG 2.05-0.95 看好德国，Pépé 反击是变数。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "depth_calibration": {
        "tier_home": 1,
        "tier_label": "Germany 被看好 · 净胜约 1 球",
        "implied_tier": 0.75,
        "tier_gap": 0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Germany（约 68%）",
        "analysis": "即时：德国 -1（初盘 0.75–1.5 不一，现多为一球）/ 大小 3.0（初 2.5 升，13 家升盘）；大 0.98 小 0.86。首轮 7-1 后大小球明显往 3 球靠，科特迪瓦反击仍须防。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "2-0",
              "prob": 10.7
            },
            {
              "score": "1-0",
              "prob": 10.4
            },
            {
              "score": "2-1",
              "prob": 10.1
            }
          ],
          "one_goal_win_pct": 24.4,
          "two_plus_win_pct": 37.7,
          "full_cover_pct": 37.7,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": 24.4,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "走水净胜=1",
          "fav_cover_ev": -0.002,
          "dog_cover_ev": 0.002,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 3,
          "fair_totals_line": 2.75,
          "over_2_5_pct": 56.9,
          "over_3_pct": 34,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 24.4%：参考净胜 1 球时，仅赢一球与拉开差距须分开看"
        },
        "spread_odds": {
          "fav": 0.92,
          "dog": 0.94,
          "note": "Germany 0.92 · Côte d'Ivoire 0.94"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 3,
          "market_goals_int": 3,
          "line_label": "总进球约 3 个",
          "implied_xg_total": 3,
          "fair_line": 2.75,
          "line_gap": 0.25,
          "over_pct": 34,
          "under_pct": 66,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 68,
          "public_lean_cn": "舆论略看好多进球（约 68%）",
          "index_note": "大比分侧 0.98 / 小比分侧 0.86 · 小比分侧更热 · 录入 2.5→3",
          "totals_odds": {
            "over": 0.98,
            "under": 0.86,
            "note": "大比分 0.98 · 小比分 0.86"
          },
          "rational_cn": "模型略看小比分（超 3 约 66% 难达）；参考高于合理值",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 3,
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 62,
          "draw": 21,
          "away_win": 17
        },
        "display_summary": {
          "fav_name": "Germany",
          "expected_total_goals": 2.76,
          "poisson_fav_win_pct": 58.5,
          "small_lead_pct": 24.8,
          "small_example_score": "1-0",
          "small_example_pct": 11.3,
          "big_cover_pct": 33.7,
          "big_example_score": "2-0",
          "big_example_pct": 10.6,
          "win_shape": {
            "fav_name": "Germany",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 29.4%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 11.3,
                "pct": 19.3
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 13.5,
                "pct": 23
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 17.1,
                "pct": 29.4
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 16.6,
                "pct": 28.3
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 42.3
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 29.4
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 28.3
              }
            ],
            "fav_win_pct": 62
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 31.9 分",
            "first_goal_wait": 31.9,
            "fast_pct": 60.9,
            "moderate_pct": 14.6,
            "slow_pct": 24.4,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 60.9
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.6
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 24.4
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Germany：Lennart Karl 缺阵 · Côte d'Ivoire 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "控节奏 / 4-5-1 收缩（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "气候变量低——Wirtz+Musiala 肋部 vs Pépé 反击不受天气明显扰动"
            }
          ],
          "xg_context": {
            "baseline_home": 2.05,
            "baseline_away": 0.95,
            "adjusted_home": 1.87,
            "adjusted_away": 0.95,
            "note": "基准 xG 2.05–0.95 → 调整后 1.87–0.95"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0.25,
            "implied_tier_label": "Germany 被看好 · 净胜约 0.5–1 球",
            "market_tier_label": "Germany 被看好 · 净胜约 1 球",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）"
          },
          "win_outlook": {
            "fav_name": "Germany",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 42.3
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 29.4
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 28.3
              }
            ],
            "margin_line_cn": "Germany · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
            "margin_meet_pct": 33.7,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "走水净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 3,
            "totals_line_cn": "总进球参考 3",
            "fair_totals_line": 2,
            "model_total_xg": 2.82,
            "totals_line_gap": 1,
            "totals_high_pct": 30.4,
            "totals_low_pct": 69.6,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 21.8,
            "win_margin2_low_total_pct": 10.6,
            "win_margin2_high_total_pct": 16.6,
            "readout_cn": "取胜约 62%；若取胜，以「险胜收工」为主（42.3%）。 对着赛前净胜参考，净胜≥2（全达标）约 33.7%；对着总进球参考 3，模型超线概率约 30.4%。"
          },
          "totals_line": 3,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 11.3
            },
            {
              "score": "1-1",
              "pct": 10.7
            },
            {
              "score": "2-0",
              "pct": 10.6
            }
          ],
          "totals_view": {
            "expected_total": 2.8,
            "fair_line": 2,
            "market_line": 3,
            "line_gap": 1,
            "over_pct": 30.4,
            "gap_warning": {
              "level": "medium",
              "cn": "总进球参考 3 vs 合理值 2，高于合理值 1"
            },
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 30,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 3）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 30.4,
              "line_gap": 1,
              "market_line": 3,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 3",
              "caution_public_high": true
            },
            "summary_cn": "预测 2.8 · 合理值 2 · 总进球参考 3（高于合理值 1） · 高于合理值 1 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Germany · 净胜走向：达标与否难下定论",
            "sub_cn": "达标概率约 33.7% · 达标与否难下定论 进球氛围：略偏闷",
            "spread": {
              "level": "uncertain",
              "label_cn": "净胜幅度难下定论",
              "color": "#8A96A8",
              "fav_name": "Germany",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 33.7,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达标与否难下定论",
              "headline_cn": "Germany · 净胜走向：达标与否难下定论",
              "pill_cn": "达标概率约 33.7% · 达标与否难下定论",
              "detail_cn": "Germany · 赛前外界预期 净胜≥2。模型推演达标概率约 33.7%。",
              "extra_stats_cn": "",
              "full_cover_pct": 33.7,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "走水净胜=1",
              "tier_gap": 0.25,
              "show_cover": true
            },
            "totals": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 30,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 3）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 30.4,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "uncertain",
                  "label_cn": "净胜幅度难下定论",
                  "color": "#8A96A8",
                  "fav_name": "Germany",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 33.7,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达标与否难下定论",
                  "headline_cn": "Germany · 净胜走向：达标与否难下定论",
                  "pill_cn": "达标概率约 33.7% · 达标与否难下定论",
                  "detail_cn": "Germany · 赛前外界预期 净胜≥2。模型推演达标概率约 33.7%。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 33.7,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "走水净胜=1",
                  "tier_gap": 0.25,
                  "show_cover": true
                },
                "text": "达标概率约 33.7% · 达标与否难下定论",
                "color": "#8A96A8",
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
                  "meter_pos": 30,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 3）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 30.4,
                  "line_gap": 1,
                  "market_line": 3,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 3",
                  "caution_public_high": true
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
              "first_goal_pct": 66.3,
              "start_score": "1-0",
              "fav_name": "Germany",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 94.9,
              "small_lead_pct": 31.3,
              "big_lead_pct": 48.9,
              "fav_win_pct": 80.2,
              "fav_draw_pct": 14.7,
              "fav_lose_pct": 5.1,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Germany 保持胜果（净胜≥1）",
                  "pct": 80.2
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 14.7
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
                "sub_cn": "预期首球等待约 41.3 分",
                "first_goal_wait": 41.3,
                "fast_pct": 44.9,
                "moderate_pct": 14.2,
                "slow_pct": 40.9,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 44.9
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.2
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 40.9
                  }
                ]
              },
              "big_delta": 15.2,
              "small_delta": 6.5,
              "narrative": "Germany 先破门（已 1-0） → 「控节奏」；Côte d'Ivoire 「堆边锋」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "Germany",
                "state_label": "Germany 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 42.3
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 29.4
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 28.3
                  }
                ],
                "margin_line_cn": "Germany · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
                "margin_meet_pct": 48.9,
                "margin_half_pct": 0,
                "margin_fail_pct": 31.3,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "走水净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 3,
                "totals_line_cn": "总进球参考 3",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.79,
                "totals_line_gap": 0.75,
                "totals_high_pct": 26.5,
                "totals_low_pct": 73.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 36.3,
                "win_margin2_low_total_pct": 19.5,
                "win_margin2_high_total_pct": 18,
                "readout_cn": "Germany 已 1-0 领先：仍取胜约 80.2%。 对着总进球参考 3，模型超线概率约 26.5%。 常见 2-0 收尾（相对总进球参考 3仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Côte d'Ivoire",
              "first_goal_pct": 33.7,
              "start_score": "0-1",
              "fav_name": "Germany",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 57.6,
              "small_lead_pct": 17.9,
              "big_lead_pct": 11.6,
              "fav_win_pct": 29.6,
              "fav_draw_pct": 28,
              "fav_lose_pct": 42.4,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Germany 追平（平局）",
                  "pct": 28
                },
                {
                  "key": "win1",
                  "label": "Germany 净胜1球翻盘（如 2-1）",
                  "pct": 17.9
                },
                {
                  "key": "win2",
                  "label": "Germany 净胜≥2球翻盘（如 3-1）",
                  "pct": 11.6
                },
                {
                  "key": "upset_hold",
                  "label": "Côte d'Ivoire 保持胜果至终场",
                  "pct": 42.4
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 35.6 分",
                "first_goal_wait": 35.6,
                "fast_pct": 49.9,
                "moderate_pct": 14.6,
                "slow_pct": 35.4,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 49.9
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.6
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 35.4
                  }
                ]
              },
              "big_delta": -22.1,
              "small_delta": -6.9,
              "narrative": "Côte d'Ivoire 先破门（已 0-1） → 「4-5-1 收缩」；Germany 「堆攻击手」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.8 · 合理值 2 · 总进球参考 3（高于合理值 1） · 高于合理值 1 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 3",
              "totals_high_pct": 30.4,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 18,
              "readout_cn": "Germany · 低位反击。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 18% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 18,
              "fav_lead_style": "defensive"
            }
          },
          "goal_timing": {
            "sample_label": "近30场",
            "source_note": "user_screenshot_2026-06-20_ger_civ",
            "home_name": "Germany",
            "away_name": "Côte d'Ivoire",
            "intervals": [
              "1–15",
              "16–30",
              "31–45",
              "46–60",
              "61–75",
              "76–90",
              "90+"
            ],
            "peaks": {
              "home_scored": {
                "interval": "31–45",
                "pct": 19
              },
              "home_conceded": {
                "interval": "61–75",
                "pct": 23
              },
              "away_scored": {
                "interval": "31–45",
                "pct": 22
              },
              "away_conceded": {
                "interval": "31–45",
                "pct": 27
              }
            },
            "cross_insight": {
              "has_cross": true,
              "hits": [
                {
                  "type": "home_attack",
                  "interval": "31–45",
                  "color": "#7BB8D4",
                  "title": "主队进攻有利窗口",
                  "text": "31–45 分：Germany惯常进球高峰（19%）与Côte d'Ivoire惯常失球高峰（27%）重合——该时段主队破门相对更容易发生。"
                }
              ],
              "cross_intervals": [
                "31–45"
              ],
              "summary_cn": "主队进攻有利窗口 · 31–45 分"
            },
            "disclaimer_cn": "以上为两队近30场历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。"
          }
        },
        "public_summary_note": "【推演概要】Germany · 低位反击。 · 与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 3,
          "xg_gap": 1.1,
          "xg_home": 2.05,
          "xg_away": 0.95,
          "xg_baseline_home": 2.05,
          "xg_baseline_away": 0.95,
          "xg_note": "结构推演用基准 xG 2.05–0.95（进球氛围用调整后 1.87–0.95）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Germany",
          "dog_name": "Côte d'Ivoire",
          "fav_xg": 2.05,
          "dog_xg": 0.95,
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
          "prob_over_line": 34,
          "prob_meet_guess": 56.9,
          "guess_n": 3,
          "prob_4_plus": 34,
          "prob_2_or_less": 43.1,
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
          "summary_cn": "【路径·基准 xG】合计 3 · Germany 2.05 / Côte d'Ivoire 0.95 → 主路径「铁局/小比分」约 54%。 至少 3 球约 56.9% · 超 3 约 34% · ≤2球 43.1%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "E",
        "label": "E组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Germany",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 7,
            "ga": 1
          },
          {
            "team": "Côte d'Ivoire",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 1,
            "ga": 0
          },
          {
            "team": "Ecuador",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 0,
            "ga": 1
          },
          {
            "team": "Curaçao",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 7
          }
        ],
        "home": {
          "team": "Germany",
          "rank": 1,
          "pts": 3,
          "played": 1,
          "if_1st": "32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池） → 当前 I 组第 2倾向 France（强队）",
          "if_1st_r16": "16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者",
          "if_1st_corridor": "德国头名出线后 16 强对手取决于第 3 名组合",
          "if_2nd": "32强 M78 · E 组第 2 vs I 组第 2 → 当前 I 组第 1倾向 Norway",
          "if_2nd_r16": "16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者",
          "if_2nd_corridor": "德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 F/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Côte d'Ivoire",
          "rank": 2,
          "pts": 3,
          "played": 1,
          "if_1st": "32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池） → 当前 I 组第 2倾向 France（强队）",
          "if_1st_r16": "16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者",
          "if_1st_corridor": "德国头名出线后 16 强对手取决于第 3 名组合",
          "if_2nd": "32强 M78 · E 组第 2 vs I 组第 2 → 当前 I 组第 1倾向 Norway",
          "if_2nd_r16": "16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者",
          "if_2nd_corridor": "德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 F/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "I 组：头名 Norway 3 分 · 次席 France 同分（32强绑定组）",
          "F 组：头名 Sweden 3 分 · 次席 Japan 1 分（32强绑定组）",
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": null,
          "reason": "本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。",
          "optimal_summary": "策略最优解（推演）：本组及关联组积分纠缠，本场以抢 3 分（至少 1 分）为先；锻炼新兵与战术演练宜留到末轮、出线形势明朗后再考虑，届时非胜结果方有可接受空间。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Germany 若取胜：积分 6，E 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Côte d'Ivoire 若取胜：积分 6，客场抢分将改变 E 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 I 组：头名 Norway 3 分 · 次席 France 同分（32强绑定组） · F 组：头名 Sweden 3 分 · 次席 Japan 1 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。"
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Julian Nagelsmann",
          "age": 38,
          "nation": "德国",
          "tenure": "2024年—",
          "wc_exp": "2026 带队 · 拜仁/莱比锡经验",
          "style_tags": [
            "4-2-3-1",
            "Wirtz+Musiala",
            "高位",
            "肋部渗透"
          ],
          "formation_pref": "4-2-3-1 · Musiala 10 号位",
          "style_summary": "7-1 库拉索后 E 组净胜球优势；对科特迪瓦 Nagelsmann 警告「非洲杯冠军反击极快」，预计控球但防 Pépé 速度。",
          "subs": {
            "timing": "首换 60–65 分钟",
            "pattern": "Havertz 支点+Sané 宽度",
            "avg_first_sub": "62'",
            "note": "全员可用"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "2 球领先：轮换保护 Musiala/Wirtz。"
          },
          "when_trailing": {
            "label": "堆攻击手",
            "detail": "unlikely 先丢球。"
          },
          "vs_strong": {
            "label": "对强队：控球+防反",
            "detail": "对科特迪瓦须平衡压上与转换风险。"
          },
          "vs_weak": {
            "label": "对弱队：不留余地",
            "detail": "7-1 已验证。"
          },
          "tournament": "德国更衣室士气因 7-1 回升；Toronto 榜首战。",
          "traits": [
            "Wirtz 核心",
            "Musiala 爆发",
            "榜首战",
            "防反击"
          ],
          "match_note": "E 组榜首战——Wirtz+Musiala 肋部 vs Pépé 反击；7-1 后德国须防转换。"
        },
        "away": {
          "name": "Emerse Faé",
          "age": 42,
          "nation": "科特迪瓦",
          "tenure": "2023年—",
          "wc_exp": "2023 非洲杯冠军 · 2026 带队",
          "style_tags": [
            "4-4-2",
            "Pépé 速度",
            "Kessié 屏障",
            "转换"
          ],
          "formation_pref": "4-4-2 · Bonny 支点",
          "style_summary": "1-0 厄瓜多尔零封后信心高；Faé 称对德国「纪律+速度，不是龟缩」，Pépé+Kessié 是战术轴心。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "Pépé 打满概率高",
            "avg_first_sub": "68'",
            "note": "非洲杯 DNA"
          },
          "when_leading": {
            "label": "4-5-1 收缩",
            "detail": "1 球领先：Kessié 屏障+长传找 Pépé。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：Pépé 反击加码。"
          },
          "vs_strong": {
            "label": "对强队：低位+转换",
            "detail": "对德国教科书反击模板。"
          },
          "vs_weak": {
            "label": "对弱队：压上",
            "detail": "对厄瓜多尔 1-0 已验证。"
          },
          "tournament": "2023 非洲杯冠军身份；Faé 强调「不能给肋部空间」。",
          "traits": [
            "Pépé 爆点",
            "Kessié 屏障",
            "转换",
            "榜首战"
          ],
          "match_note": "2023 非洲杯冠军；Faé 强调纪律+速度，Kessié 屏障是关键。"
        }
      },
      "upset_alert": {
        "favorite": "Germany",
        "underdog": "Côte d'Ivoire",
        "favorite_iso": "GER",
        "index": 22,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 18,
        "verdict": "德国 7-1 后深盘但科特迪瓦 2023 非洲杯冠军——Pépé 反击使平局/冷胜空间约 18%。",
        "tactical": "Nagelsmann 4-2-3-1 控球 vs Faé 4-4-2 转换；Kessié 对 Wirtz 对位关键。",
        "psychology": "德国「7-1 是态度不是模板」；Faé「我们要在转换中惩罚」。",
        "historical": "大赛德国占优；科特迪瓦非洲杯冠军信心。",
        "factors": [
          {
            "tag": "榜首战",
            "impact": "强",
            "detail": "胜者大概率锁定出线"
          },
          {
            "tag": "反击",
            "impact": "强",
            "detail": "Pépé 速度 vs 德国压上"
          },
          {
            "tag": "气候",
            "impact": "低",
            "detail": "多伦多 22°C 影响小"
          }
        ]
      }
    },
    {
      "id": "m34",
      "group": "E",
      "matchday": 2,
      "date": "2026-06-20",
      "time": "20:00",
      "time_local": "20:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "08:00",
      "date_beijing": "6月21日",
      "time_beijing_full": "北京时间 6月21日 08:00",
      "venue": "Arrowhead Stadium",
      "city": "Kansas City, USA",
      "note": "E组第2轮 · 厄瓜多尔 vs 库拉索 · 堪萨斯城 · FIFA 官方裁判已确认（Ning Ma）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 5-4-1",
          "home": "Domínguez; Preciado, Torres, Hincapié, Estupiñán; Caicedo, Gruezo, Plata; Sarmiento, Valencia, Estrada",
          "away": "Rosa; Martina, Lacroes, Maria; Gaari, Leerdam; Janga, Hooi, Rijssel; Beaumont, Jansen, Baas",
          "source": "ESPN 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Ecuador",
        "iso": "ec",
        "flag": "",
        "fifa_rank": 29,
        "rating": 73,
        "form": [
          "L",
          "D",
          "W",
          "L",
          "W"
        ],
        "coach": "Sebastián Beccacece",
        "stars": [
          {
            "name": "Moisés Caicedo",
            "pos": "DM",
            "club": "Chelsea",
            "desc": "中场屏障",
            "rating": 8.3
          }
        ],
        "star": {
          "name": "Moisés Caicedo",
          "pos": "DM",
          "club": "Chelsea",
          "desc": "中场屏障",
          "rating": 8.3
        },
        "injuries": [
          {
            "player": "Moisés Caicedo",
            "status": "FIT",
            "note": "中场屏障；0-1 科特迪瓦后须扛住 Advocaat 铁桶",
            "confirmed": true
          },
          {
            "player": "Enner Valencia",
            "status": "FIT",
            "note": "队长锋线，对科特迪瓦踢满 90 分钟——体能疑虑已解",
            "confirmed": true
          },
          {
            "player": "Kendry Páez",
            "status": "FIT",
            "note": "年轻创造力；Beccacece 可能给予更多自由度",
            "confirmed": true
          },
          {
            "player": "Piero Hincapié",
            "status": "DOUBT",
            "note": "肌肉小问题持续，对库拉索仍可能先发",
            "confirmed": true
          },
          {
            "player": "Alexander Domínguez",
            "status": "FIT",
            "note": "经验一门，0-1 后更衣室仍信任防线",
            "confirmed": true
          }
        ],
        "rumors": [
          "Beccacece（赛前）：「0-1 可接受过程不可接受；对库拉索必须 3 分，否则出线形势严峻」",
          "E 组：德国/科特迪瓦同积 3 分，厄瓜多尔 0 分已落后半个身位",
          "19 场不败纪录刚被科特迪瓦终结——更衣室强调「必须立即回应」",
          "Advocaat 称库拉索「对德国学到一课，对厄瓜多尔会更保守」——须破 5-4-1",
          "Kansas City 夜场 · 马宁主裁：Beccacece 提醒定位球与早段破局"
        ]
      },
      "away": {
        "name": "Curaçao",
        "iso": "cw",
        "flag": "",
        "fifa_rank": 88,
        "rating": 65,
        "form": [
          "L",
          "D",
          "L",
          "W",
          "L"
        ],
        "coach": "Dick Advocaat",
        "stars": [
          {
            "name": "Leandro Bacuna",
            "pos": "CM",
            "club": "Cardiff",
            "desc": "经验老将",
            "rating": 7.2
          }
        ],
        "star": {
          "name": "Leandro Bacuna",
          "pos": "CM",
          "club": "Cardiff",
          "desc": "经验老将",
          "rating": 7.2
        },
        "injuries": [
          {
            "player": "Leandro Bacuna",
            "status": "FIT",
            "note": "队长经验中场；1-7 后更衣室仍听 Advocaat 指挥",
            "confirmed": true
          },
          {
            "player": "Eloy Room",
            "status": "FIT",
            "note": "一门；对德国 7 失球但多次扑救",
            "confirmed": true
          },
          {
            "player": "Rangelo Janga",
            "status": "FIT",
            "note": "1-7 中唯一进球者；反击希望",
            "confirmed": true
          },
          {
            "player": "Livano Comenencia",
            "status": "FIT",
            "note": "对德国攻入队史世界杯首球，预计继续先发",
            "confirmed": true
          },
          {
            "player": "Sontje Hansen",
            "status": "FIT",
            "note": "半场被换下但无伤病报告，预计仍在轮换名单",
            "confirmed": true
          }
        ],
        "rumors": [
          "Advocaat（赛前）：「7-1 是痛苦，但德国也给了我们空间教训；对厄瓜多尔 5-4-1 是生存之道」",
          "库拉索首次世界杯正赛，更衣室强调「代表加勒比骄傲」",
          "预计极深低位 + Locadia/Hansen 反击 + 定位球偷分",
          "马宁主裁+中国裁判组：Advocaat 提醒球员注意战术犯规纪律",
          "平局对库拉索价值极大；厄瓜多尔必须耐心破密集"
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
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-20",
        "name": "Ning Ma",
        "nation": "China",
        "iso": "cn",
        "age": 47,
        "wc_experience": "2022 世界杯第四官员 · 2026 首场主裁——24 年来首位执法世界杯的中国主裁 · 中超场均约 26.4 犯规",
        "avg_yellow": 5.2,
        "avg_red": 0.12,
        "avg_penalty": 0.28,
        "home_win_rate": 52,
        "bias_index": 51,
        "bias_note": "中国主裁历史性执法。厄瓜多尔 Caicedo 屏障 + 库拉索 Advocaat 铁桶低位；三名中国裁判同场（马宁主裁、周飞边裁、傅明 VAR）为世界杯首次。",
        "tendencies": [
          "中国助理：Zhou Fei · 第四官员 Campbell-Kirk Kawana-Waugh（新西兰）",
          "VAR Fu Ming（中国）· 中国裁判组同场执法",
          "库拉索 1-7 德国后预计 5-4-1 极守；对战术犯规与模拟接触尺度受关注",
          "厄瓜多尔 0-1 后抢分动机强，Advocaat 低位或拖慢节奏",
          "历史意义场次——判罚尺度预计偏稳、避免过度干预"
        ],
        "officials": {
          "ar1": "Zhou Fei (CHN)",
          "ar2": "Saoud Ahmed Saoud Abdulla Al Maqaleh (BHR)",
          "fourth": "Campbell-Kirk Kawana-Waugh (NZL)",
          "var": "Fu Ming (CHN)"
        },
        "fifa_match_id": "400021465",
        "fifa_official_id": "328495",
        "updated": "2026-06-20T12:46:45+08:00"
      },
      "prediction": {
        "home_win": 55,
        "draw": 25,
        "away_win": 20,
        "score": "1-0",
        "confidence": 72,
        "xg_home": 1.65,
        "xg_away": 0.72,
        "key_factor": "厄瓜多尔 0-1 科特迪瓦后须抢分；库拉索 1-7 德国后或铁桶 · Caicedo 控中场 · 最可能 2-0/1-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 15.4
          },
          {
            "score": "2-0",
            "prob": 12.7
          },
          {
            "score": "1-1",
            "prob": 11.1
          },
          {
            "score": "0-0",
            "prob": 9.3
          },
          {
            "score": "2-1",
            "prob": 9.2
          },
          {
            "score": "3-0",
            "prob": 7
          },
          {
            "score": "0-1",
            "prob": 6.7
          }
        ],
        "base_home_win": 59,
        "base_draw": 24,
        "base_away_win": 16,
        "depth_calibrated": true,
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Ecuador 暂列 E 组第 3（0 分 · 已赛 1 场） vs Curaçao 第 4（0 分 · 已赛 1 场）；组内 Germany 3分、Côte d'Ivoire 3分 领先；直接对话权重极高"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "堪萨斯城夏夜温热，开放式球场 · 29°C · 湿度 65% · 降雨概率 28% · 西风 2级 · 夏夜；温热中等——弱队低位在 75' 后专注度或降；利好先破门一方（29°C · 20:00 CT 开球 · 湿度 65%）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "厄瓜多尔 0-1 科特迪瓦后须抢分；库拉索 1-7 德国后或铁桶 · Caicedo 控中场 · 最可能 2-0/1-0"
          }
        ]
      },
      "weather": {
        "city": "堪萨斯城",
        "country": "美国",
        "venue": "Arrowhead Stadium",
        "temp": 29,
        "humidity": 65,
        "altitude_m": 280,
        "rain_chance": 28,
        "wind": "西风 2级 · 夏夜",
        "condition_cn": "堪萨斯城夏夜温热，开放式球场",
        "impact_level": "MEDIUM",
        "impact": "Arrowhead 29°C 夜场仍有余热；厄瓜多尔须强攻，库拉索铁桶后段体能是变量",
        "impact_summary": "温热中等——弱队低位在 75' 后专注度或降；利好先破门一方",
        "home_adapt": 83,
        "away_adapt": 75,
        "home_note": "厄瓜多尔 Caicedo 屏障+Plata 宽度；0-1 科特迪瓦后必须抢 3 分",
        "away_note": "库拉索 1-7 德国后预计 5-4-1；Advocaat 铁桶在温热夜场守 90 分钟难度大",
        "prediction_note": "若厄瓜多尔 2-0 领先，下半场总球面可能回落；定位球是库拉索唯一机会",
        "weather_factors": [
          {
            "label": "29°C · 20:00 CT 开球",
            "impact": "中",
            "detail": "北京时间 6月21日 08:00；夏夜仍暖"
          },
          {
            "label": "湿度 65%",
            "impact": "中",
            "detail": "开放式球场无顶棚，替补深度关键"
          },
          {
            "label": "海拔 280m",
            "impact": "低",
            "detail": "对两队影响中性"
          }
        ],
        "historical_note": "Arrowhead Stadium · E组 · 厄瓜多尔 vs 库拉索 · 预报更新 2026-06-20 22:00 本地",
        "forecast_updated": "2026-06-20 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "month": "甲午月",
          "month_element": "金+火",
          "day": "庚寅日",
          "day_element": "金+木",
          "day_dominant": "金木相战",
          "day_summary": "庚寅日——庚金坐寅木，金木相战。《道德经》曰：「知止不殆。」宜早段破局、忌领先后松懈；非力之大小，乃气之顺逆。",
          "hour_home": "辰时（08:00-10:00）",
          "hour_home_element": "土"
        },
        "wuxing": {
          "home": {
            "team": "Ecuador",
            "colors": "黄+蓝+红",
            "elements": "土、水、火",
            "wuxing_short": "土水火杂",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 54,
            "reason": "黄属土。辰土当令，土气厚重——须耐心破密集。",
            "advantage": "辰土当令，宜稳攻"
          },
          "away": {
            "team": "Curaçao",
            "colors": "蓝+黄",
            "elements": "水、土",
            "wuxing_short": "水土相涵",
            "verdict": "中性偏逆",
            "verdict_color": "#C8A96E",
            "compat": 46,
            "reason": "蓝属水、黄属土。辰土日，弱队土水守中。",
            "advantage": "水土铁桶，忌早段失球"
          },
          "summary": "五行裁定：辰土当令；厄瓜多尔须「破土」；库拉索水土守中"
        },
        "hexagram": {
          "name": "山地剥",
          "symbol": "☶☷",
          "number": 23,
          "upper": "艮山",
          "lower": "坤地",
          "quote": "《周易·剥卦》：「不利有攸往。」",
          "general": "剥卦——山附于地，剥蚀之象；破密集需耐心，忌急躁。",
          "advantage_team": "Ecuador",
          "disadvantage_team": "Curaçao",
          "hexagram_analysis": "剥卦「不利有攸往」：弱队宜守；热门须耐心剥蚀。",
          "match_nature": "剥蚀破局 · 忌急躁",
          "yellow_card_risk": "低",
          "yellow_card_reason": "铁桶局，预计 3-4 黄。",
          "scenarios": [
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 55-72 分钟"
            }
          ]
        },
        "goal_peak": {
          "scope": "second_half",
          "title": "下半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "下半场",
              "half": "second",
              "start_min": 55,
              "end_min": 72,
              "hex_reason": "剥卦后段「剥极必复」",
              "time_reason": "辰土后段，铁桶或松动"
            }
          ],
          "periods": "第 55-72 分钟",
          "rationale": "辰土厚重，剥卦主耐心——气运后段才可能破局。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 62,
        "away_score": 38,
        "mystic_verdict": "厄瓜多尔土火求破，库拉索水土铁桶——辰土日宜耐心围攻。",
        "model_bridge": "xG 1.65-0.72 看好厄瓜多尔，Advocaat 5-4-1 是阻力。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "depth_calibration": {
        "tier_home": 2.25,
        "tier_label": "Ecuador 被看好 · 净胜约 2.25 球",
        "implied_tier": 0.25,
        "tier_gap": 2,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Ecuador（约 72%）",
        "analysis": "即时：厄瓜多尔 -2.25（初 1.5–1.75 升至两球/两球半，12 家升盘）/ 大小 3.0（初 2.75 升，15 家升盘）；大 0.96 小 0.88。库拉索 1-7 德国后深盘，弱队或铁桶但市场仍看主队大胜。 赛前净胜参考高于 xG 隐含（+2），且净胜 1 球占 26.8%——热门净胜拉开偏难。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 15.5
            },
            {
              "score": "2-0",
              "prob": 12.8
            },
            {
              "score": "1-1",
              "prob": 11.2
            }
          ],
          "one_goal_win_pct": 26.8,
          "two_plus_win_pct": 32.7,
          "full_cover_pct": 13.9,
          "half_cover_pct": 0,
          "half_lose_pct": 26.8,
          "push_pct": null,
          "margin_full_label": "净胜≥3",
          "margin_half_label": null,
          "fav_cover_ev": -0.401,
          "dog_cover_ev": 0.401,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.37,
          "fair_totals_line": 2.25,
          "over_2_5_pct": 41.8,
          "over_3_pct": 20.9,
          "totals_lean_cn": "超 2.5 偏小比分（约 58.2%）；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 26.8%：常见「赢球但净胜仅 1 球」"
        },
        "spread_odds": {
          "fav": 0.95,
          "dog": 0.88,
          "note": "Ecuador 0.95 · Curaçao 0.88"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 3,
          "market_goals_int": 3,
          "line_label": "总进球约 3 个",
          "implied_xg_total": 2.37,
          "fair_line": 2.25,
          "line_gap": 0.75,
          "over_pct": 20.9,
          "under_pct": 79.1,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 75,
          "public_lean_cn": "舆论略看好多进球（约 75%）",
          "index_note": "大比分侧 0.96 / 小比分侧 0.88 · 小比分侧更热 · 录入 2.75→3",
          "totals_odds": {
            "over": 0.96,
            "under": 0.88,
            "note": "大比分 0.96 · 小比分 0.88"
          },
          "rational_cn": "模型略看小比分（超 3 约 79.1% 难达）；参考高于合理值",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 3,
        "applied_delta": {
          "home_win": -5,
          "draw": 1,
          "away_win": 4
        },
        "adjustment_note": "模型微调：主胜 -5% · 平 +1% · 客 +4%",
        "adjusted_probs": {
          "home_win": 55,
          "draw": 25,
          "away_win": 20
        },
        "display_summary": {
          "fav_name": "Ecuador",
          "expected_total_goals": 2.16,
          "poisson_fav_win_pct": 56.8,
          "small_lead_pct": 27.3,
          "small_example_score": "1-0",
          "small_example_pct": 17,
          "big_cover_pct": 29.5,
          "big_example_score": "2-0",
          "big_example_pct": 12.8,
          "win_shape": {
            "fav_name": "Ecuador",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 33.7%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 17,
                "pct": 30
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.3,
                "pct": 18.1
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 19.2,
                "pct": 33.7
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 10.3,
                "pct": 18.2
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 48.1
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.7
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 18.2
              }
            ],
            "fav_win_pct": 55
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 41.3 分",
            "first_goal_wait": 41.3,
            "fast_pct": 51.6,
            "moderate_pct": 14.7,
            "slow_pct": 33.6,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 51.6
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.7
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 33.6
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Ecuador：Piero Hincapié 存疑 · Curaçao 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "继续压迫 / 5-5 铁桶（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "温热中等——弱队低位在 75' 后专注度或降；利好先破门一方"
            }
          ],
          "xg_context": {
            "baseline_home": 1.65,
            "baseline_away": 0.72,
            "adjusted_home": 1.5,
            "adjusted_away": 0.68,
            "note": "基准 xG 1.65–0.72 → 调整后 1.5–0.68"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 2,
            "implied_tier_label": "Ecuador 被看好 · 净胜约 0.25 球",
            "market_tier_label": "Ecuador 被看好 · 净胜约 2.25 球",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 2 · 模型认为仅小胜 1 球仍约 27.3% · 净胜≥3（全达标）约 11.8%"
          },
          "win_outlook": {
            "fav_name": "Ecuador",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 48.1
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.7
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 18.2
              }
            ],
            "margin_line_cn": "Ecuador · 赛前净胜参考 净胜≥3（全达标）",
            "margin_meet_pct": 11.8,
            "margin_half_pct": 0,
            "margin_fail_pct": 27.3,
            "margin_full_label": "净胜≥3",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 3,
            "totals_line_cn": "总进球参考 3",
            "fair_totals_line": 2.25,
            "model_total_xg": 2.18,
            "totals_line_gap": 0.75,
            "totals_high_pct": 17.3,
            "totals_low_pct": 82.7,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 29.8,
            "win_margin2_low_total_pct": 12.8,
            "win_margin2_high_total_pct": 10.3,
            "readout_cn": "取胜约 55%；若取胜，以「险胜收工」为主（48.1%）。 对着赛前净胜参考，净胜≥3（全达标）约 11.8%；对着总进球参考 3，模型超线概率约 17.3%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 3。"
          },
          "totals_line": 3,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 17
            },
            {
              "score": "2-0",
              "pct": 12.8
            },
            {
              "score": "1-1",
              "pct": 11.6
            }
          ],
          "totals_view": {
            "expected_total": 2.2,
            "fair_line": 2.25,
            "market_line": 3,
            "line_gap": 0.75,
            "over_pct": 17.3,
            "gap_warning": null,
            "totals_outlook": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 17,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": true,
              "over_pct": 17.3,
              "line_gap": 0.75,
              "market_line": 3,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 3",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.2 · 合理值 2.25 · 总进球参考 3（高于合理值 0.75） · 高于合理值 0.75 · 进球氛围：倾向沉闷"
          },
          "customer_reading": {
            "headline_cn": "Ecuador · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 11.8% · 达到预期难度偏大 进球氛围：倾向沉闷",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "Ecuador",
              "market_expect_cn": "净胜≥3",
              "meet_pct": 11.8,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "Ecuador · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 11.8% · 达到预期难度偏大",
              "detail_cn": "Ecuador · 赛前外界预期 净胜≥3。模型推演达标概率约 11.8%；外界看法高于 xG 隐含约 2 球，达到预期难度偏大（仅胜 1 球约 27.3%）。",
              "extra_stats_cn": "仅胜 1 球约 27.3%",
              "full_cover_pct": 11.8,
              "half_cover_pct": 0,
              "lose1_pct": 27.3,
              "margin_full_label": "净胜≥3",
              "margin_half_label": null,
              "tier_gap": 2,
              "show_cover": true
            },
            "totals": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 17,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
              "pill_cn": "倾向沉闷",
              "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": true,
              "over_pct": 17.3,
              "line_gap": 0.75,
              "market_line": 3,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 3",
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
                  "fav_name": "Ecuador",
                  "market_expect_cn": "净胜≥3",
                  "meet_pct": 11.8,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "Ecuador · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 11.8% · 达到预期难度偏大",
                  "detail_cn": "Ecuador · 赛前外界预期 净胜≥3。模型推演达标概率约 11.8%；外界看法高于 xG 隐含约 2 球，达到预期难度偏大（仅胜 1 球约 27.3%）。",
                  "extra_stats_cn": "仅胜 1 球约 27.3%",
                  "full_cover_pct": 11.8,
                  "half_cover_pct": 0,
                  "lose1_pct": 27.3,
                  "margin_full_label": "净胜≥3",
                  "margin_half_label": null,
                  "tier_gap": 2,
                  "show_cover": true
                },
                "text": "达标概率约 11.8% · 达到预期难度偏大",
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
                  "meter_pos": 17,
                  "lean_side": "dull",
                  "lean_strength": "clear",
                  "section_intro_cn": "对照总进球参考 3，看偏闷还是偏精彩",
                  "pill_cn": "倾向沉闷",
                  "detail_cn": "倾向沉闷——小比分概率高（合理值 2.25）。",
                  "headline_cn": "进球氛围：倾向沉闷",
                  "show_lean": true,
                  "over_pct": 17.3,
                  "line_gap": 0.75,
                  "market_line": 3,
                  "market_goals_int": 3,
                  "market_goals_cn": "总进球参考 3",
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
              "team": "Ecuador",
              "first_goal_pct": 68.8,
              "start_score": "1-0",
              "fav_name": "Ecuador",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 96.6,
              "small_lead_pct": 36.7,
              "big_lead_pct": 46,
              "fav_win_pct": 82.8,
              "fav_draw_pct": 13.8,
              "fav_lose_pct": 3.4,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Ecuador 保持胜果（净胜≥1）",
                  "pct": 82.8
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 13.8
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 3.4
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 53.3 分",
                "first_goal_wait": 53.3,
                "fast_pct": 37,
                "moderate_pct": 13,
                "slow_pct": 50,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 37
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 50
                  }
                ]
              },
              "big_delta": 16.5,
              "small_delta": 9.4,
              "narrative": "Ecuador 先破门（已 1-0） → 「继续压迫」；Curaçao 「维持低位」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "Ecuador",
                "state_label": "Ecuador 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 48.1
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 33.7
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 18.2
                  }
                ],
                "margin_line_cn": "Ecuador · 赛前净胜参考 净胜≥3（全达标）",
                "margin_meet_pct": 17.3,
                "margin_half_pct": 0,
                "margin_fail_pct": 36.7,
                "margin_full_label": "净胜≥3",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": 15.3,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 3,
                "totals_line_cn": "总进球参考 3",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.39,
                "totals_line_gap": 0.75,
                "totals_high_pct": 16.3,
                "totals_low_pct": 83.7,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 48.4,
                "win_margin2_low_total_pct": 23.4,
                "win_margin2_high_total_pct": 11.7,
                "readout_cn": "Ecuador 已 1-0 领先：仍取胜约 82.8%。 对着总进球参考 3，模型超线概率约 16.3%。 常见收尾：2-0 约 23.4%（部分达标，非全达标）； 3-0+ 约 15.3%（对着 净胜≥3 全达标）。"
              }
            },
            {
              "side": "away",
              "team": "Curaçao",
              "first_goal_pct": 31.2,
              "start_score": "0-1",
              "fav_name": "Ecuador",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 48.8,
              "small_lead_pct": 13.7,
              "big_lead_pct": 5.6,
              "fav_win_pct": 19.3,
              "fav_draw_pct": 29.5,
              "fav_lose_pct": 51.2,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Ecuador 追平（平局）",
                  "pct": 29.5
                },
                {
                  "key": "win1",
                  "label": "Ecuador 净胜1球翻盘（如 2-1）",
                  "pct": 13.7
                },
                {
                  "key": "win2",
                  "label": "Ecuador 净胜≥2球翻盘（如 3-1）",
                  "pct": 5.6
                },
                {
                  "key": "upset_hold",
                  "label": "Curaçao 保持胜果至终场",
                  "pct": 51.2
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 52 分",
                "first_goal_wait": 52,
                "fast_pct": 37.7,
                "moderate_pct": 13.1,
                "slow_pct": 49.2,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 37.7
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.1
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 49.2
                  }
                ]
              },
              "big_delta": -23.9,
              "small_delta": -13.6,
              "narrative": "Curaçao 先破门（已 0-1） → 「5-5 铁桶」；Ecuador 「堆前锋」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.2 · 合理值 2.25 · 总进球参考 3（高于合理值 0.75） · 高于合理值 0.75 · 进球氛围：倾向沉闷",
              "totals_line_cn": "总进球参考 3",
              "totals_high_pct": 17.3,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                },
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 15,
              "readout_cn": "Ecuador · 低位反击 · 进球偏少。进球氛围倾向沉闷（模型推演）；时间段分布见下方历史节奏参考。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 15% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                },
                {
                  "key": "low_scoring",
                  "label": "进球偏少"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 15,
              "fav_lead_style": "defensive"
            }
          },
          "goal_timing": {
            "sample_label": "近30场",
            "source_note": "user_screenshot_2026-06-20_ecu_cur",
            "home_name": "Ecuador",
            "away_name": "Curaçao",
            "intervals": [
              "1–15",
              "16–30",
              "31–45",
              "46–60",
              "61–75",
              "76–90",
              "90+"
            ],
            "peaks": {
              "home_scored": {
                "interval": "16–30",
                "pct": 25
              },
              "home_conceded": {
                "interval": "76–90",
                "pct": 26
              },
              "away_scored": {
                "interval": "16–30",
                "pct": 19
              },
              "away_conceded": {
                "interval": "31–45",
                "pct": 25
              }
            },
            "cross_insight": {
              "has_cross": true,
              "hits": [
                {
                  "type": "open_play",
                  "interval": "16–30",
                  "color": "#E8A54B",
                  "title": "对攻高发时段",
                  "text": "16–30 分：双方惯常进球高峰重合，该时段比赛更开放、进球面相对更大。"
                }
              ],
              "cross_intervals": [
                "16–30"
              ],
              "summary_cn": "对攻高发时段 · 16–30 分"
            },
            "disclaimer_cn": "以上为两队近30场历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。"
          }
        },
        "public_summary_note": "【推演概要】Ecuador · 低位反击 · 进球偏少。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 2 · 模型认为仅小胜 1 球仍约 27.3% · 净胜≥3（全达标）约 11.8%（模型微调：主胜 -5% · 平 +1% · 客 +4%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.37,
          "xg_gap": 0.93,
          "xg_home": 1.65,
          "xg_away": 0.72,
          "xg_baseline_home": 1.65,
          "xg_baseline_away": 0.72,
          "xg_note": "结构推演用基准 xG 1.65–0.72（进球氛围用调整后 1.5–0.68）",
          "lean_note": "进球氛围偏闷（预测约 2.2），但「弱队开花」结构需防弱队开花抬高总进球",
          "fav_name": "Ecuador",
          "dog_name": "Curaçao",
          "fav_xg": 1.65,
          "dog_xg": 0.72,
          "path_type": "dog_bloom",
          "path_label": "弱队开花",
          "lean": "prevention_high",
          "lean_cn": "预防大比分",
          "lean_mode": "prevention",
          "lean_confidence": null,
          "prevention_reason_cn": "进球氛围偏闷（预测约 2.2），但「弱队开花」结构需防弱队开花抬高总进球",
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [
            {
              "key": "dog_goal",
              "label": "Curaçao进球",
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
              "label": "仅Ecuador进球",
              "detail": "热门单榜领先、弱队仍无球 → 仍按进球氛围小比分，不必因路径升级",
              "severity": "calm"
            },
            {
              "key": "bloom_score",
              "label": "弱队开花比分",
              "detail": "留意 2-2、1-2 等弱队 contribution 抬高总进球",
              "severity": "mid"
            }
          ],
          "prob_over_line": 20.9,
          "prob_meet_guess": 41.8,
          "guess_n": 3,
          "prob_4_plus": 20.9,
          "prob_2_or_less": 58.2,
          "totals_line": 3,
          "scenarios": [
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 58
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 15
            },
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 15
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 12
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
              "key": "dog_bloom",
              "label": "弱队开花",
              "color": "#E8B84B",
              "bg": "rgba(232,184,75,0.12)"
            }
          ],
          "watch_notes": [],
          "pattern_note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "summary_cn": "【路径·基准 xG】合计 2.37 · Ecuador 1.65 / Curaçao 0.72 → 主路径「弱队开花」约 58% · 预防大比分。 至少 3 球约 41.8% · 超 3 约 20.9% · ≤2球 58.2%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "E",
        "label": "E组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Germany",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 7,
            "ga": 1
          },
          {
            "team": "Côte d'Ivoire",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 1,
            "ga": 0
          },
          {
            "team": "Ecuador",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 0,
            "ga": 1
          },
          {
            "team": "Curaçao",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 7
          }
        ],
        "home": {
          "team": "Ecuador",
          "rank": 3,
          "pts": 0,
          "played": 1,
          "if_1st": "32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池） → 当前 I 组第 2倾向 France（强队）",
          "if_1st_r16": "16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者",
          "if_1st_corridor": "德国头名出线后 16 强对手取决于第 3 名组合",
          "if_2nd": "32强 M78 · E 组第 2 vs I 组第 2 → 当前 I 组第 1倾向 Norway",
          "if_2nd_r16": "16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者",
          "if_2nd_corridor": "德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 F/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Curaçao",
          "rank": 4,
          "pts": 0,
          "played": 1,
          "if_1st": "32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池） → 当前 I 组第 2倾向 France（强队）",
          "if_1st_r16": "16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者",
          "if_1st_corridor": "德国头名出线后 16 强对手取决于第 3 名组合",
          "if_2nd": "32强 M78 · E 组第 2 vs I 组第 2 → 当前 I 组第 1倾向 Norway",
          "if_2nd_r16": "16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者",
          "if_2nd_corridor": "德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 F/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "I 组：头名 Norway 3 分 · 次席 France 同分（32强绑定组）",
          "F 组：头名 Sweden 3 分 · 次席 Japan 1 分（32强绑定组）",
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": null,
          "reason": "本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。",
          "optimal_summary": "策略最优解（推演）：本组及关联组积分纠缠，本场以抢 3 分（至少 1 分）为先；锻炼新兵与战术演练宜留到末轮、出线形势明朗后再考虑，届时非胜结果方有可接受空间。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Ecuador 若取胜：积分 3，E 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Curaçao 若取胜：积分 3，客场抢分将改变 E 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 I 组：头名 Norway 3 分 · 次席 France 同分（32强绑定组） · F 组：头名 Sweden 3 分 · 次席 Japan 1 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。"
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Sebastián Beccacece",
          "age": 45,
          "nation": "阿根廷",
          "tenure": "2024年—",
          "wc_exp": "2026 带队 · 南美青训背景",
          "style_tags": [
            "4-3-3",
            "Caicedo 屏障",
            "Páez 创造力",
            "宽度"
          ],
          "formation_pref": "4-3-3 · Valencia 支点",
          "style_summary": "0-1 科特迪瓦后 0 分危急；对库拉索必须 3 分，Beccacece 预计 4-3-3 围攻 Advocaat 铁桶。",
          "subs": {
            "timing": "首换 55–60 分钟",
            "pattern": "Páez 后手",
            "avg_first_sub": "58'",
            "note": "出线压力大"
          },
          "when_leading": {
            "label": "继续压迫",
            "detail": "1 球领先：维持宽度。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "先丢球：60' 换进攻手。"
          },
          "vs_strong": {
            "label": "对强队：稳守",
            "detail": "对科特迪瓦已验证低位。"
          },
          "vs_weak": {
            "label": "对弱队：必须穿盘",
            "detail": "对库拉索 xG 1.65 须兑现。"
          },
          "tournament": "0 分起步；Kansas City 必须取胜。",
          "traits": [
            "Caicedo 核心",
            "必须抢分",
            "破密集",
            "宽度"
          ],
          "match_note": "0 分必须 3 分——Caicedo 屏障 + 宽度破 Advocaat 5-4-1 铁桶。"
        },
        "away": {
          "name": "Dick Advocaat",
          "age": 78,
          "nation": "荷兰",
          "tenure": "2024年—",
          "wc_exp": "多届大赛 · 2026 库拉索",
          "style_tags": [
            "5-4-1",
            "极深低位",
            "Janga 反击",
            "定位球"
          ],
          "formation_pref": "5-4-1 · Room 一门",
          "style_summary": "1-7 德国后 Advocaat 称「对厄瓜多尔 5-4-1 是生存」；78 岁老帅更衣室凝聚力是加勒比球队精神支柱。",
          "subs": {
            "timing": "首换 70 分钟+",
            "pattern": "换人偏晚",
            "avg_first_sub": "72'",
            "note": "弱队体能优先"
          },
          "when_leading": {
            "label": "5-5 铁桶",
            "detail": "若意外领先：全员退守。"
          },
          "when_trailing": {
            "label": "维持低位",
            "detail": "unlikely 大举压上。"
          },
          "vs_strong": {
            "label": "对强队：龟缩",
            "detail": "对德国 1-7 已验证。"
          },
          "vs_weak": {
            "label": "对弱队：偷分",
            "detail": "对厄瓜多尔 1 分也有价值。"
          },
          "tournament": "首次世界杯；Advocaat「代表加勒比骄傲」。",
          "traits": [
            "5 后卫",
            "极守",
            "定位球",
            "偷分动机"
          ],
          "match_note": "1-7 德国后极深低位；1 分对库拉索仍有价值，定位球偷分。"
        }
      },
      "upset_alert": {
        "favorite": "Ecuador",
        "underdog": "Curaçao",
        "favorite_iso": "ECU",
        "index": 20,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 15,
        "verdict": "厄瓜多尔 0 分须穿盘——Advocaat 5-4-1 铁桶使 1-1 偷分空间约 15%。",
        "tactical": "Beccacece 4-3-3 围攻 vs Advocaat 5-4-1；Caicedo 破密集是关键。",
        "psychology": "厄瓜多尔「必须 3 分」；库拉索「代表加勒比骄傲」。",
        "historical": "无大赛交锋；库拉索 1-7 德国后更低预期。",
        "factors": [
          {
            "tag": "铁桶",
            "impact": "强",
            "detail": "Advocaat 5-4-1 极守"
          },
          {
            "tag": "出线",
            "impact": "强",
            "detail": "厄瓜多尔 0 分已落后"
          },
          {
            "tag": "主裁",
            "impact": "中",
            "detail": "马宁历史性执法"
          }
        ]
      }
    },
    {
      "id": "m36",
      "group": "F",
      "matchday": 2,
      "date": "2026-06-21",
      "time": "00:00",
      "time_local": "00:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "12:00",
      "date_beijing": "6月21日",
      "time_beijing_full": "北京时间 6月21日 12:00",
      "venue": "Estadio BBVA",
      "city": "Monterrey, Mexico",
      "note": "F组第2轮 · 突尼斯 vs 日本 · 蒙特雷 · FIFA 官方裁判已确认（Istvan Kovacs）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Dahmen; Dräger, Meriah, Talbi, Laabidi; Skhiri, Laidouni; Khazri, Sliti, Msakni; Jebali",
          "away": "Suzuki; Ito, Tomiyasu, Taniguchi, Hiroki; Endo, Morita; Kubo, Minamino, Doan; Mitoma, Suzuki",
          "source": "FotMob / ESPN 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Tunisia",
        "iso": "tn",
        "flag": "",
        "fifa_rank": 40,
        "rating": 71,
        "form": [
          "L",
          "D",
          "W",
          "L",
          "D"
        ],
        "coach": "Samuel Zaouali",
        "stars": [
          {
            "name": "Wahbi Khazri",
            "pos": "CAM",
            "club": "Montpellier",
            "desc": "进攻核心",
            "rating": 7.8
          }
        ],
        "star": {
          "name": "Wahbi Khazri",
          "pos": "CAM",
          "club": "Montpellier",
          "desc": "进攻核心",
          "rating": 7.8
        },
        "injuries": [
          {
            "player": "Wahbi Khazri",
            "status": "FIT",
            "note": "进攻核心；1-5 瑞典后仍是定位球与创造力来源",
            "confirmed": true
          },
          {
            "player": "Aïssa Laïdouni",
            "status": "FIT",
            "note": "中场工兵，对 Japan Endo 对位",
            "confirmed": true
          },
          {
            "player": "Ellyes Skhiri",
            "status": "FIT",
            "note": "屏障后腰，Zaouali 战术轴心",
            "confirmed": true
          },
          {
            "player": "Youssef Msakni",
            "status": "FIT",
            "note": "经验前腰，须利用日本肋部空档",
            "confirmed": true
          },
          {
            "player": "Aymen Dahmen",
            "status": "FIT",
            "note": "一门，1-5 后仍获更衣室信任",
            "confirmed": true
          }
        ],
        "rumors": [
          "Zaouali（赛前）：「5-1 是现实检验；对日本我们要抢 3 分，否则只能争最佳第三」",
          "突尼斯 0 分垫底，日本 1 分——本场突尼斯必须进攻",
          "Kubo 缺阵对日本边路是机会——Zaouali 称「要逼日本走中路」",
          "世界杯第 1000 场：Zaouali 称「历史场次是动力，不是压力」",
          "Kovacs 执法里程碑场次，突尼斯强调纪律避免 early 红牌"
        ]
      },
      "away": {
        "name": "Japan",
        "iso": "jp",
        "flag": "",
        "fifa_rank": 18,
        "rating": 78,
        "form": [
          "D",
          "W",
          "W",
          "L",
          "D"
        ],
        "coach": "Hajime Moriyasu",
        "stars": [
          {
            "name": "Takefusa Kubo",
            "pos": "RW",
            "club": "Real Sociedad",
            "desc": "边路创造力",
            "rating": 8.2
          }
        ],
        "star": {
          "name": "Takefusa Kubo",
          "pos": "RW",
          "club": "Real Sociedad",
          "desc": "边路创造力",
          "rating": 8.2
        },
        "injuries": [
          {
            "player": "Takefusa Kubo",
            "status": "OUT",
            "note": "对荷兰左膝扭伤，未随队赴蒙特雷；Moriyasu 称有望淘汰赛阶段回归",
            "confirmed": true
          },
          {
            "player": "Kaoru Mitoma",
            "status": "FIT",
            "note": "左路爆点，对 Laïdouni 侧翼",
            "confirmed": true
          },
          {
            "player": "Wataru Endo",
            "status": "FIT",
            "note": "队长后腰屏障",
            "confirmed": true
          },
          {
            "player": "Ritsu Doan",
            "status": "FIT",
            "note": "2-2 荷兰破门；Kubo 缺阵后右路责任加重",
            "confirmed": true
          },
          {
            "player": "Takehiro Tomiyasu",
            "status": "FIT",
            "note": "中卫/右闸，防线领袖",
            "confirmed": true
          },
          {
            "player": "Ao Tanaka",
            "status": "FIT",
            "note": "中场引擎，Kubo 缺阵后串联任务上升",
            "confirmed": true
          }
        ],
        "rumors": [
          "Moriyasu（赛前）：「Kubo 略伤缺席本场，对突尼斯仍要 3 分；Doan+Mitoma 要拉开宽度」",
          "日本未带 Kubo 前往蒙特雷——更衣室：Mitoma+Doan 被称「必须集体补位」",
          "F 组形势：瑞典 3 分，日本 1 分——再平则出线被动",
          "第 1000 场：Moriyasu 称「用日本足球的方式尊重历史」",
          "预计 4-2-3-1 控球主导，Endo+Tanaka 双闸 + Kamada 前腰"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [],
        "note": "日本近年略优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-20",
        "name": "Istvan Kovacs",
        "nation": "Romania",
        "iso": "ro",
        "age": 40,
        "wc_experience": "2022 世界杯 · 2024 欧洲杯 · UEFA 精英裁判 · 执法世界杯史上第 1000 场比赛",
        "avg_yellow": 4.5,
        "avg_red": 0.18,
        "avg_penalty": 0.25,
        "home_win_rate": 50,
        "bias_index": 50,
        "bias_note": "罗马尼亚名哨执法「世界杯第 1000 场」——FIFA 特制金色袖标球衣。日本 Kubo+Mitoma 控球 vs 突尼斯 Khazri 定位球；里程碑场次判罚尺度预计稳健。",
        "tendencies": [
          "罗马尼亚助理裁判组 · VAR/AVAR 待 FIFA 开赛前完整公布",
          "FIFA 第 1000 场纪念 · Collina 称「选中当时最佳主裁之一」",
          "突尼斯 1-5 瑞典后须抢分；日本 2-2 荷兰后 Moriyasu 控球主导",
          "蒙特雷夜场 · 预计 4–5 黄 · 对拖延与战术犯规零容忍",
          "历史场次——点球/红牌尺度受全球关注"
        ],
        "officials": {
          "fourth": "（FIFA 开赛前公布完整执法组）"
        },
        "fifa_match_id": "400021475",
        "fifa_official_id": "314605",
        "milestone_note": "FIFA World Cup 第 1000 场比赛 · 特制金色袖标",
        "updated": "2026-06-20T12:46:45+08:00"
      },
      "prediction": {
        "home_win": 32,
        "draw": 28,
        "away_win": 41,
        "score": "1-1",
        "confidence": 68,
        "xg_home": 1.08,
        "xg_away": 1.42,
        "key_factor": "日本首轮 2-2 荷兰后 xG 不差 · 突尼斯 1-5 瑞典后须抢分 · Kubo+Mitoma vs 北非低位",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.6
          },
          {
            "score": "0-1",
            "prob": 11.7
          },
          {
            "score": "1-2",
            "prob": 8.9
          },
          {
            "score": "1-0",
            "prob": 8.9
          },
          {
            "score": "0-2",
            "prob": 8.3
          },
          {
            "score": "0-0",
            "prob": 8.2
          },
          {
            "score": "2-1",
            "prob": 6.8
          }
        ],
        "base_home_win": 29,
        "base_draw": 27,
        "base_away_win": 45,
        "depth_calibrated": true,
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Tunisia 暂列 F 组第 4（0 分 · 已赛 1 场） vs Japan 第 2（1 分 · 已赛 1 场）；组内 Sweden 3分 领先；直接对话权重极高"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "蒙特雷夜场干燥，海拔适中 · 26°C · 湿度 52% · 降雨概率 15% · 北风 1级 · 夜场；气候变量低——世界杯第 1000 场节奏由 Moriyasu 控球 vs 突尼斯低位决定（26°C · 22:00 CT 开球 · 海拔 540m）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "日本首轮 2-2 荷兰后 xG 不差 · 突尼斯 1-5 瑞典后须抢分 · Kubo+Mitoma vs 北非低位"
          }
        ]
      },
      "weather": {
        "city": "蒙特雷",
        "country": "墨西哥",
        "venue": "Estadio BBVA",
        "temp": 26,
        "humidity": 52,
        "altitude_m": 540,
        "rain_chance": 15,
        "wind": "北风 1级 · 夜场",
        "condition_cn": "蒙特雷夜场干燥，海拔适中",
        "impact_level": "LOW",
        "impact": "BBVA 26°C 夜场+540m 海拔，日本控球型打法受益；突尼斯 Khazri 定位球仍有效",
        "impact_summary": "气候变量低——世界杯第 1000 场节奏由 Moriyasu 控球 vs 突尼斯低位决定",
        "home_adapt": 80,
        "away_adapt": 85,
        "home_note": "突尼斯 1-5 瑞典后须抢分；北非球队对墨西哥高原需适应",
        "away_note": "日本 2-2 荷兰后 Mitoma+Kubo 肋部渗透；Moriyasu 习惯高原客场",
        "prediction_note": "海拔对传球略快；夜场干燥利于日本短传，模型影响可忽略",
        "weather_factors": [
          {
            "label": "26°C · 22:00 CT 开球",
            "impact": "低",
            "detail": "北京时间 6月21日 12:00；夜场微凉"
          },
          {
            "label": "海拔 540m",
            "impact": "低-中",
            "detail": "略利于传控，远射弧线微变"
          },
          {
            "label": "干燥夜场",
            "impact": "中性",
            "detail": "草皮快，日本传导受益"
          }
        ],
        "historical_note": "Estadio BBVA · F组 · 世界杯第 1000 场 · 预报更新 2026-06-20 22:00 本地",
        "forecast_updated": "2026-06-20 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "month": "甲午月",
          "month_element": "金+火",
          "day": "庚寅日",
          "day_element": "金+木",
          "day_dominant": "金木相战",
          "day_summary": "庚寅日——庚金坐寅木，金木相战。《道德经》曰：「知止不殆。」宜早段破局、忌领先后松懈；非力之大小，乃气之顺逆。",
          "hour_home": "午时（12:00-14:00）",
          "hour_home_element": "火"
        },
        "wuxing": {
          "home": {
            "team": "Tunisia",
            "colors": "红+白",
            "elements": "火、金",
            "wuxing_short": "火金相涵",
            "verdict": "中性偏逆",
            "verdict_color": "#C8A96E",
            "compat": 48,
            "reason": "红属火、白属金。午火当令，火炼金——须抢分但气运略逆。",
            "advantage": "午火炼金，守中待变"
          },
          "away": {
            "team": "Japan",
            "colors": "蓝+白",
            "elements": "水、金",
            "wuxing_short": "水金相生",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 60,
            "reason": "蓝属水、白属金。午火日，水金相济——如「水火既济」初吉。",
            "advantage": "水金流动，控球受益"
          },
          "summary": "五行裁定：午火当令；日本水金相济略占「既济」；突尼斯火金守中"
        },
        "hexagram": {
          "name": "水火既济",
          "symbol": "☵☲",
          "number": 63,
          "upper": "坎水",
          "lower": "离火",
          "quote": "《周易·既济卦》：「初吉，终乱。」",
          "general": "既济卦——世界杯第 1000 场；水火相济，初吉终乱。",
          "advantage_team": "Japan",
          "disadvantage_team": "Tunisia",
          "hexagram_analysis": "既济「初吉终乱」：午火当令，坎水在上——日本水金略占先机。",
          "match_nature": "初吉终乱 · 里程碑场次",
          "yellow_card_risk": "中",
          "yellow_card_reason": "第 1000 场+抢分战，预计 4-5 黄。",
          "scenarios": [
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 38-55 分钟"
            }
          ]
        },
        "goal_peak": {
          "scope": "first_half",
          "title": "上半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 38,
              "end_min": 55,
              "hex_reason": "既济「水火相济」",
              "time_reason": "午火当令，宜上半场破局"
            }
          ],
          "periods": "第 38-55 分钟",
          "rationale": "午火当令，既济卦主初吉——气运集中于上半场一段；第 1000 场纪念。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 40,
        "away_score": 70,
        "mystic_verdict": "日本水金既济，突尼斯火金守中——午火当令，控球方略占「初吉」。",
        "model_bridge": "xG 1.08-1.42 看好日本，Khazri 定位球是变数。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "depth_calibration": {
        "tier_home": -1,
        "tier_label": "Japan 被看好 · 净胜约 1 球",
        "implied_tier": 0,
        "tier_gap": -1,
        "signal": "heat_deflection",
        "signal_cn": "预期偏热",
        "signal_color": "#C8A96E",
        "signal_desc": "舆论一边倒但实力差未同步放大，模型略下调热门方权重。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Japan（约 62%）",
        "analysis": "即时：日本 -1（初 -0.5 多数降至受让一球，13 家降盘）/ 大小 2.25（2/2.5，部分 2.5）；突 0.90 日 0.94 · 大 0.83 小 1.02。日本略被看好加深，大小球仍偏小。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12.6
            },
            {
              "score": "0-1",
              "prob": 11.7
            },
            {
              "score": "1-2",
              "prob": 9
            }
          ],
          "one_goal_win_pct": 17.7,
          "two_plus_win_pct": 11,
          "full_cover_pct": 21.4,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": 23.3,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "走水净胜=1",
          "fav_cover_ev": -0.34,
          "dog_cover_ev": 0.34,
          "rational_spread_cn": "主队 守住差距概率略高",
          "total_xg": 2.5,
          "fair_totals_line": 2,
          "over_2_5_pct": 45.4,
          "over_3_pct": 23.9,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 17.7%：参考净胜 1 球时，仅赢一球与拉开差距须分开看"
        },
        "spread_odds": {
          "fav": 0.94,
          "dog": 0.9,
          "note": "Tunisia 0.94 · Japan 0.9"
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
          "public_over_pct": 52,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大比分侧 0.83 / 小比分侧 1.02 · 录入 2→2.25",
          "totals_odds": {
            "over": 0.83,
            "under": 1.02,
            "note": "大比分 0.83 · 小比分 1.02"
          },
          "rational_cn": "模型略看大比分（超 2.25 约 58.3%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "applied_delta": {
          "home_win": 3,
          "draw": 1,
          "away_win": -4
        },
        "adjustment_note": "模型微调：主胜 +3% · 平 +1% · 客 -4%",
        "adjusted_probs": {
          "home_win": 32,
          "draw": 28,
          "away_win": 41
        },
        "display_summary": {
          "fav_name": "Japan",
          "expected_total_goals": 2.35,
          "poisson_fav_win_pct": 41.2,
          "small_lead_pct": 22.7,
          "small_example_score": "0-1",
          "small_example_pct": 12.1,
          "big_cover_pct": 18.5,
          "big_example_score": "0-2",
          "big_example_pct": 7.8,
          "win_shape": {
            "fav_name": "Japan",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 29.4%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 12.1,
                "pct": 29.4
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.6,
                "pct": 25.8
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 11.2,
                "pct": 27.1
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 7.3,
                "pct": 17.7
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.2
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 27.1
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 17.7
              }
            ],
            "fav_win_pct": 41
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 38 分",
            "first_goal_wait": 38,
            "fast_pct": 54.6,
            "moderate_pct": 14.8,
            "slow_pct": 30.6,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 54.6
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 30.6
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Tunisia 暂无重要伤停 · Japan：Takefusa Kubo 缺阵"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "控节奏 / 控节奏（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "气候变量低——世界杯第 1000 场节奏由 Moriyasu 控球 vs 突尼斯低位决定"
            }
          ],
          "xg_context": {
            "baseline_home": 1.08,
            "baseline_away": 1.42,
            "adjusted_home": 1.08,
            "adjusted_away": 1.29,
            "note": "基准 xG 1.08–1.42 → 调整后 1.08–1.29"
          },
          "calibration": {
            "signal_cn": "预期偏热",
            "signal_color": "#C8A96E",
            "signal_desc": "舆论一边倒但实力差未同步放大，模型略下调热门方权重。",
            "tier_gap": -1,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Japan 被看好 · 净胜约 1 球",
            "summary_cn": "与模型 xG 对照：预期偏热 · 赛前净胜看法低于 xG 隐含约 1"
          },
          "win_outlook": {
            "fav_name": "Japan",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.2
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 27.1
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 17.7
              }
            ],
            "margin_line_cn": "Japan · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
            "margin_meet_pct": 18.5,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "走水净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.25,
            "totals_line_cn": "总进球参考 2.25",
            "fair_totals_line": 2.25,
            "model_total_xg": 2.37,
            "totals_line_gap": 0,
            "totals_high_pct": 55.2,
            "totals_low_pct": 44.8,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 19.9,
            "win_margin2_low_total_pct": 7.8,
            "win_margin2_high_total_pct": 18.5,
            "readout_cn": "取胜约 41%；若取胜，以「险胜收工」为主（55.2%）。 对着赛前净胜参考，净胜≥2（全达标）约 18.5%；对着总进球参考 2.25，模型超线概率约 55.2%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 13.1
            },
            {
              "score": "0-1",
              "pct": 12.1
            },
            {
              "score": "1-0",
              "pct": 10.1
            }
          ],
          "totals_view": {
            "expected_total": 2.4,
            "fair_line": 2.25,
            "market_line": 2.25,
            "line_gap": 0,
            "over_pct": 55.2,
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
              "over_pct": 55.2,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.4 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Japan · 净胜走向：达标与否难下定论",
            "sub_cn": "达标概率约 18.5% · 达标与否难下定论 进球氛围：几乎五五开 平局约 28%，与热门取胜概率接近，存在「赢球变平局」空间。",
            "spread": {
              "level": "uncertain",
              "label_cn": "净胜幅度难下定论",
              "color": "#8A96A8",
              "fav_name": "Japan",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 18.5,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达标与否难下定论",
              "headline_cn": "Japan · 净胜走向：达标与否难下定论",
              "pill_cn": "达标概率约 18.5% · 达标与否难下定论",
              "detail_cn": "Japan · 赛前外界预期 净胜≥2。模型推演达标概率约 18.5%。",
              "extra_stats_cn": "",
              "full_cover_pct": 18.5,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "走水净胜=1",
              "tier_gap": -1,
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
              "over_pct": 55.2,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "draw_risk": {
              "level": "medium",
              "color": "#C8A96E",
              "note": "平局约 28%，与热门取胜概率接近，存在「赢球变平局」空间。"
            },
            "pills": [
              {
                "key": "spread",
                "icon": "⚖️",
                "label": "净胜走向",
                "outlook": {
                  "level": "uncertain",
                  "label_cn": "净胜幅度难下定论",
                  "color": "#8A96A8",
                  "fav_name": "Japan",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 18.5,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达标与否难下定论",
                  "headline_cn": "Japan · 净胜走向：达标与否难下定论",
                  "pill_cn": "达标概率约 18.5% · 达标与否难下定论",
                  "detail_cn": "Japan · 赛前外界预期 净胜≥2。模型推演达标概率约 18.5%。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 18.5,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "走水净胜=1",
                  "tier_gap": -1,
                  "show_cover": true
                },
                "text": "达标概率约 18.5% · 达标与否难下定论",
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
                  "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 55.2,
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
              "team": "Tunisia",
              "first_goal_pct": 45.6,
              "start_score": "1-0",
              "fav_name": "Japan",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 45.9,
              "small_lead_pct": 13.4,
              "big_lead_pct": 6.5,
              "fav_win_pct": 19.9,
              "fav_draw_pct": 26,
              "fav_lose_pct": 54.1,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Japan 追平（平局）",
                  "pct": 26
                },
                {
                  "key": "win1",
                  "label": "Japan 净胜1球翻盘（如 2-1）",
                  "pct": 13.4
                },
                {
                  "key": "win2",
                  "label": "Japan 净胜≥2球翻盘（如 3-1）",
                  "pct": 6.5
                },
                {
                  "key": "upset_hold",
                  "label": "Tunisia 保持胜果至终场",
                  "pct": 54.1
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
              "big_delta": -12,
              "small_delta": -9.3,
              "narrative": "Tunisia 先破门（已 1-0） → 「控节奏」；Japan 「堆边锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "Japan",
              "first_goal_pct": 54.4,
              "start_score": "0-1",
              "fav_name": "Japan",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 86.2,
              "small_lead_pct": 32.1,
              "big_lead_pct": 31.3,
              "fav_win_pct": 63.4,
              "fav_draw_pct": 22.8,
              "fav_lose_pct": 13.7,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Japan 保持胜果（净胜≥1）",
                  "pct": 63.4
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 22.8
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 13.7
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 39.5 分",
                "first_goal_wait": 39.5,
                "fast_pct": 46.4,
                "moderate_pct": 14.4,
                "slow_pct": 39.3,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 46.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.4
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 39.3
                  }
                ]
              },
              "big_delta": 12.8,
              "small_delta": 9.4,
              "narrative": "Japan 先破门（已 0-1） → 「控节奏」；Tunisia 「堆攻击手」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": {
                "fav_name": "Japan",
                "state_label": "Japan 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 55.2
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 27.1
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 17.7
                  }
                ],
                "margin_line_cn": "Japan · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
                "margin_meet_pct": 31.3,
                "margin_half_pct": 0,
                "margin_fail_pct": 32.1,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "走水净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.87,
                "totals_line_gap": 0,
                "totals_high_pct": 70.1,
                "totals_low_pct": 29.9,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 29.1,
                "win_margin2_low_total_pct": 13.7,
                "win_margin2_high_total_pct": 31.3,
                "readout_cn": "Japan 已 1-0 领先：仍取胜约 63.4%。 对着总进球参考 2.25，模型超线概率约 70.1%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.4 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 55.2,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 20,
              "readout_cn": "Japan · 低位反击。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 20% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 20,
              "fav_lead_style": "defensive"
            }
          },
          "goal_timing": {
            "sample_label": "近30场",
            "source_note": "user_screenshot_2026-06-20_tun_jpn",
            "home_name": "Tunisia",
            "away_name": "Japan",
            "intervals": [
              "1–15",
              "16–30",
              "31–45",
              "46–60",
              "61–75",
              "76–90",
              "90+"
            ],
            "peaks": {
              "home_scored": {
                "interval": "61–75",
                "pct": 21
              },
              "home_conceded": {
                "interval": "46–60",
                "pct": 24
              },
              "away_scored": {
                "interval": "76–90",
                "pct": 19
              },
              "away_conceded": {
                "interval": "46–60",
                "pct": 23
              }
            },
            "cross_insight": {
              "has_cross": true,
              "hits": [
                {
                  "type": "both_leak",
                  "interval": "46–60",
                  "color": "#C8A96E",
                  "title": "双方易失球时段",
                  "text": "46–60 分：双方惯常失球高峰重合，该时段防守相对更松、总进球面可能抬升。"
                }
              ],
              "cross_intervals": [
                "46–60"
              ],
              "summary_cn": "双方易失球时段 · 46–60 分"
            },
            "disclaimer_cn": "以上为两队近30场历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。"
          }
        },
        "public_summary_note": "【推演概要】Japan · 低位反击。 · 与模型 xG 对照：预期偏热 · 赛前净胜看法低于 xG 隐含约 1（模型微调：主胜 +3% · 平 +1% · 客 -4%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.5,
          "xg_gap": 0.34,
          "xg_home": 1.08,
          "xg_away": 1.42,
          "xg_baseline_home": 1.08,
          "xg_baseline_away": 1.42,
          "xg_note": "结构推演用基准 xG 1.08–1.42（进球氛围用调整后 1.08–1.29）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Japan",
          "dog_name": "Tunisia",
          "fav_xg": 1.42,
          "dog_xg": 1.08,
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
          "summary_cn": "【路径·基准 xG】合计 2.5 · Japan 1.42 / Tunisia 1.08 → 主路径「铁局/小比分」约 56%。 至少 3 球约 45.4% · 超 2.25 约 58.3% · ≤2球 54.6%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "F",
        "label": "F组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Sweden",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 5,
            "ga": 1
          },
          {
            "team": "Japan",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Netherlands",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Tunisia",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 5
          }
        ],
        "home": {
          "team": "Tunisia",
          "rank": 4,
          "pts": 0,
          "played": 1,
          "if_1st": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 C 组第 2倾向 Morocco（强队）",
          "if_1st_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_1st_corridor": "荷兰若夺 F 组头名，32 强直接对话 C 组次席（巴西若列次席则提前相遇）",
          "if_2nd": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 C 组第 1倾向 Brazil（强队）",
          "if_2nd_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_2nd_corridor": "F 组次席 32 强碰 C 组头名，16 强进 E/I 次席走廊",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Japan",
          "rank": 2,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 C 组第 2倾向 Morocco（强队）",
          "if_1st_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_1st_corridor": "荷兰若夺 F 组头名，32 强直接对话 C 组次席（巴西若列次席则提前相遇）",
          "if_2nd": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 C 组第 1倾向 Brazil（强队）",
          "if_2nd_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_2nd_corridor": "F 组次席 32 强碰 C 组头名，16 强进 E/I 次席走廊",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "C 组：头名 Brazil 4 分 · 次席 Morocco 同分（32强绑定组）",
          "E 组：头名 Germany 3 分 · 次席 Côte d'Ivoire 同分（32强绑定组）",
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "I 组 Norway 3 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": null,
          "reason": "本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。",
          "optimal_summary": "策略最优解（推演）：关联组形势胶着，本场 Japan 取胜最能巩固主动，Tunisia 则需积极抢 3 分；若握手各取 1 分，对领先方尚可接受，对追赶方则略偏保守——此阶段仍以全力争胜、抢 3 分为上策；尚未到以演练或轮换为名调整名次、接受非胜结果的窗口。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Tunisia 若取胜：积分 3，F 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Japan 若取胜：积分 4，客场抢分将改变 F 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 C 组：头名 Brazil 4 分 · 次席 Morocco 同分（32强绑定组） · E 组：头名 Germany 3 分 · 次席 Côte d'Ivoire 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。"
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Samuel Zaouali",
          "age": 45,
          "nation": "突尼斯",
          "tenure": "2024年—",
          "wc_exp": "2026 带队 · 非洲联赛经验",
          "style_tags": [
            "4-3-3",
            "Khazri 自由人",
            "Skhiri 屏障",
            "定位球"
          ],
          "formation_pref": "4-3-3 · Khazri 10 号位",
          "style_summary": "1-5 瑞典后 0 分垫底；对日本必须 3 分，Zaouali 预计高位逼抢+Khazri 创造力，第 1000 场是动力。",
          "subs": {
            "timing": "首换 60–65 分钟",
            "pattern": "Khazri 核心",
            "avg_first_sub": "63'",
            "note": "必须进攻"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "若意外领先：Skhiri 屏障。"
          },
          "when_trailing": {
            "label": "堆攻击手",
            "detail": "先丢球：Msakni 加码。"
          },
          "vs_strong": {
            "label": "对强队：低位",
            "detail": "对瑞典 1-5 已暴露问题。"
          },
          "vs_weak": {
            "label": "对弱队：压上",
            "detail": "对日本必须抢分。"
          },
          "tournament": "0 分危急；世界杯第 1000 场。",
          "traits": [
            "Khazri 核心",
            "必须抢分",
            "第1000场",
            "高位逼抢"
          ],
          "match_note": "0 分必须抢分——Khazri 创造力 vs Endo 屏障；世界杯第 1000 场动力。"
        },
        "away": {
          "name": "Hajime Moriyasu",
          "age": 56,
          "nation": "日本",
          "tenure": "2018年—",
          "wc_exp": "2022 16 强 · 2026 带队",
          "style_tags": [
            "4-2-3-1",
            "Kubo 肋部",
            "Mitoma 宽度",
            "控球"
          ],
          "formation_pref": "4-2-3-1 · Endo 单闸",
          "style_summary": "2-2 荷兰后 Moriyasu 称「可以用控球对攻」；对突尼斯必须 3 分，Mitoma+Kubo 是破局关键。",
          "subs": {
            "timing": "首换 60–65 分钟",
            "pattern": "Doan 右路",
            "avg_first_sub": "62'",
            "note": "控球主导"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "1 球领先：Endo 屏障。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：Mitoma 加码。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "2-2 荷兰已验证。"
          },
          "vs_weak": {
            "label": "对弱队：穿盘",
            "detail": "对突尼斯 xG 优势。"
          },
          "tournament": "Moriyasu 长期执教稳定；第 1000 场用「日本足球方式」致敬历史。",
          "traits": [
            "Kubo+Mitoma",
            "控球",
            "必须取胜",
            "里程碑场次"
          ],
          "match_note": "2-2 荷兰后控球自信——Mitoma+Kubo 对突尼斯高位逼抢。"
        }
      },
      "upset_alert": {
        "favorite": "Japan",
        "underdog": "Tunisia",
        "favorite_iso": "JPN",
        "index": 24,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 20,
        "verdict": "日本 2-2 荷兰后控球自信——突尼斯 1-5 后须抢分，Khazri 定位球使约 20% 偷分空间。",
        "tactical": "Moriyasu 4-2-3-1 控球 vs Zaouali 4-3-3 逼抢；Kubo+Mitoma 宽度。",
        "psychology": "第 1000 场历史意义；突尼斯「必须 3 分」。",
        "historical": "日本近年略优；突尼斯 1-5 瑞典暴露防线。",
        "factors": [
          {
            "tag": "里程碑",
            "impact": "中",
            "detail": "世界杯第 1000 场"
          },
          {
            "tag": "控球",
            "impact": "强",
            "detail": "日本 Kubo+Mitoma"
          },
          {
            "tag": "出线",
            "impact": "强",
            "detail": "双方均需 3 分"
          }
        ]
      }
    }
  ],
  "nextMatch": {
    "group": "F",
    "matchday": 2,
    "date": "2026-06-20",
    "time": "12:00",
    "time_local": "12:00 CT",
    "timezone": "CDT (UTC-5)",
    "time_beijing": "01:00",
    "date_beijing": "6月21日",
    "time_beijing_full": "北京时间 6月21日 01:00",
    "venue": "NRG Stadium",
    "city": "Houston, USA",
    "home": {
      "name": "Netherlands",
      "iso": "nl",
      "fifaRank": 7,
      "rating": 84
    },
    "away": {
      "name": "Sweden",
      "iso": "se",
      "fifaRank": 25,
      "rating": 74
    },
    "teaser": "F组第2轮 · 荷兰 vs 瑞典",
    "home_win": 55,
    "draw": 23,
    "away_win": 22,
    "predicted_score": "1-1",
    "key_player_home": "Virgil van Dijk",
    "key_player_away": "Alexander Isak"
  },
  "upcomingMatches": [
    {
      "group": "E",
      "time_beijing_full": "北京时间 6月21日 04:00",
      "venue": "BMO Field",
      "city": "Toronto, Canada",
      "home": {
        "name": "Germany",
        "iso": "de"
      },
      "away": {
        "name": "Côte d'Ivoire",
        "iso": "ci"
      },
      "teaser": "E组第2轮"
    },
    {
      "group": "E",
      "time_beijing_full": "北京时间 6月21日 08:00",
      "venue": "Arrowhead Stadium",
      "city": "Kansas City, USA",
      "home": {
        "name": "Ecuador",
        "iso": "ec"
      },
      "away": {
        "name": "Curaçao",
        "iso": "cw"
      },
      "teaser": "E组第2轮"
    },
    {
      "group": "F",
      "time_beijing_full": "北京时间 6月21日 12:00",
      "venue": "Estadio BBVA",
      "city": "Monterrey, Mexico",
      "home": {
        "name": "Tunisia",
        "iso": "tn"
      },
      "away": {
        "name": "Japan",
        "iso": "jp"
      },
      "teaser": "F组第2轮"
    }
  ]
};
