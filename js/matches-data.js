// 今日赛事 — Day 9 (signals enriched)
// Last updated: 2026-06-20T14:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-20T14:00:00+08:00",
  "syncSource": "FIFA 赛程 · Day 15 · weather/injuries/stars enriched · 推演概要+小组形势",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
    },
    {
      "tag": "INJURY",
      "text": "✅ Day 15 伤病/更衣室：德国/美国或轮换 · 日本瑞典生死战 · 巴拉圭澳大利亚争二",
      "time": "6月26日"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 15 核心球员已更新（m55–m60，各队 3 人）",
      "time": "6月26日"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 15 气候预报已更新（m55–m60，共6场）",
      "time": "6月26日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 昨日：墨3-0捷 · 南非1-0韩爆冷 · 瑞2-1加 · 苏0-3巴",
      "time": "赛果回顾"
    },
    {
      "tag": "PREVIEW",
      "text": "📅 今日6场 · 库拉索-科特迪瓦/厄瓜多尔-德国(04:00) · 日本-瑞典/突尼斯-荷兰(07:00) · 土-美/巴拉圭-澳(10:00)",
      "time": "6月26日"
    },
    {
      "tag": "PREVIEW",
      "text": "D/E/F末轮：美国德国已6分 · 日本瑞典争F组 · 巴拉圭澳大利亚生死战",
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
      "id": "m55",
      "fifa_match_number": 55,
      "fifa_match_id": "400021468",
      "group": "E",
      "matchday": 3,
      "date": "2026-06-25",
      "time": "16:00",
      "time_local": "16:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "04:00",
      "date_beijing": "6月26日",
      "time_beijing_full": "北京时间 6月26日 04:00",
      "venue": "Lincoln Financial Field",
      "city": "Philadelphia, USA",
      "note": "E组末轮 · 库拉索 vs 科特迪瓦 · 费城",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "5-4-1 / 4-3-3",
          "home": "Rosa; Martina, Larmond, Maria, Gaari, Kemper; Leerdam, Janga, Hooijer; Rijssel; van der Sar",
          "away": "Fadiga; Konan, Boly, Aurier; Seri, Kessié; Boga, Gradel, Zaha; Krasso, Adingra",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Curaçao",
        "iso": "cw",
        "flag": "",
        "fifa_rank": 88,
        "rating": 58,
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
            "stats": "1 分垫底",
            "rating": 6.8,
            "desc": "经验中场 · 铁桶轴心"
          }
        ],
        "star": {
          "name": "Leandro Bacuna",
          "pos": "CM",
          "club": "Cardiff",
          "stats": "1 分垫底",
          "rating": 6.8,
          "desc": "须奇迹"
        },
        "injuries": [
          {
            "player": "Leandro Bacuna",
            "status": "FIT",
            "note": "中场核心 · 5-4-1 轴心",
            "confirmed": true
          },
          {
            "player": "Rangelo Janga",
            "status": "FIT",
            "note": "锋线唯一威胁",
            "confirmed": true
          }
        ],
        "rumors": [
          "Advocaat：「1 分已不可能出线——对科特迪瓦须零封+奇迹」",
          "预计 5-4-1 极深低位 · 定位球是唯一路径",
          "E 组末轮 · 德国 6 分已领跑"
        ]
      },
      "away": {
        "name": "Côte d'Ivoire",
        "iso": "ci",
        "flag": "",
        "fifa_rank": 36,
        "rating": 72,
        "form": [
          "W",
          "L",
          "W",
          "D",
          "W"
        ],
        "coach": "Emerse Fae",
        "stars": [
          {
            "name": "Nicolas Pépé",
            "pos": "RW",
            "club": "Villarreal",
            "stats": "3 分须胜",
            "rating": 8,
            "desc": "肋部破局"
          },
          {
            "name": "Sébastien Haller",
            "pos": "ST",
            "club": "Borussia Dortmund",
            "stats": "支点",
            "rating": 7.8,
            "desc": "防空破密集"
          },
          {
            "name": "Franck Kessié",
            "pos": "CM",
            "club": "Al-Ain",
            "stats": "屏障",
            "rating": 7.9,
            "desc": "中场控制"
          }
        ],
        "star": {
          "name": "Nicolas Pépé",
          "pos": "RW",
          "club": "Villarreal",
          "stats": "3 分须胜",
          "rating": 8,
          "desc": "肋部破局"
        },
        "injuries": [
          {
            "player": "Nicolas Pépé",
            "status": "FIT",
            "note": "3 分须胜 · 肋部破局",
            "confirmed": true
          },
          {
            "player": "Sébastien Haller",
            "status": "FIT",
            "note": "支点 · 破密集防守",
            "confirmed": true
          },
          {
            "player": "Franck Kessié",
            "status": "FIT",
            "note": "屏障 · 控制节奏",
            "confirmed": true
          }
        ],
        "rumors": [
          "Fae：「3 分须胜——厄瓜多尔-德国同开，净胜球可能决定次席」",
          "预计 4-3-3 强攻 · Pépé/Haller 双锋",
          "费城夏夜 · 破铁桶定位球是关键"
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
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 55 · 库拉索 vs 科特迪瓦 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-25T15:09:16+08:00"
      },
      "prediction": {
        "home_win": 16,
        "draw": 31,
        "away_win": 53,
        "score": "0-1",
        "confidence": 70,
        "xg_home": 0.78,
        "xg_away": 1.68,
        "key_factor": "E组末轮 · 科特迪瓦 3 分须胜 vs 库拉索 1 分 · Pépé vs 铁桶 · 泊松 0-2/1-2。",
        "score_dist": [
          {
            "score": "0-1",
            "prob": 14.4
          },
          {
            "score": "0-2",
            "prob": 12.1
          },
          {
            "score": "1-1",
            "prob": 11.2
          },
          {
            "score": "1-2",
            "prob": 9.4
          },
          {
            "score": "0-0",
            "prob": 8.5
          },
          {
            "score": "0-3",
            "prob": 6.8
          },
          {
            "score": "1-0",
            "prob": 6.7
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Curaçao 暂列 E 组第 4（1 分 · 已赛 2 场） vs Côte d'Ivoire 第 2（3 分 · 已赛 2 场）；组内 Germany 6分 领先；直接对话权重极高"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "费城夏夜温和 · 24°C · 湿度 65% · 降雨概率 20% · 东北风 2级 · 夏夜；气候影响低——科特迪瓦须胜，库拉索铁桶守势"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "E组末轮 · 科特迪瓦 3 分须胜 vs 库拉索 1 分 · Pépé vs 铁桶 · 泊松 0-2/1-2"
          }
        ],
        "base_home_win": 16,
        "base_draw": 31,
        "base_away_win": 53,
        "depth_calibrated": false,
        "draw_context": {
          "drawBoost": 7,
          "ironBucket": true,
          "closeXg": false,
          "gap": 0.9,
          "notes": [
            "热门难破密集"
          ]
        }
      },
      "weather": {
        "city": "费城",
        "country": "美国",
        "venue": "Lincoln Financial Field",
        "temp": 24,
        "humidity": 65,
        "altitude_m": 12,
        "rain_chance": 20,
        "wind": "东北风 2级 · 夏夜",
        "condition_cn": "费城夏夜温和",
        "impact_level": "LOW",
        "impact_summary": "气候影响低——科特迪瓦须胜，库拉索铁桶守势",
        "home_adapt": 74,
        "away_adapt": 82,
        "impact": "Lincoln Financial 24°C 夏夜，库拉索 5-4-1 低位 vs 科特迪瓦肋部渗透",
        "historical_note": "费城 · E组末轮 · 库拉索 vs 科特迪瓦 · 2026-06-25 22:00 本地",
        "forecast_updated": "2026-06-25 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "乙未日",
          "day_summary": "乙未日——木土相制",
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
        "home_score": 30,
        "away_score": 70,
        "mystic_verdict": "科特迪瓦火土旺须破局，库拉索守势。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "group_context": {
        "group": "E",
        "label": "E组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Germany",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 9,
            "ga": 2
          },
          {
            "team": "Côte d'Ivoire",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Ecuador",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 0,
            "ga": 1
          },
          {
            "team": "Curaçao",
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
          "team": "Curaçao",
          "rank": 4,
          "pts": 1,
          "played": 2,
          "if_1st": "32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池） → 当前 I 组第 2倾向 Norway",
          "if_1st_r16": "16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者",
          "if_1st_corridor": "德国头名出线后 16 强对手取决于第 3 名组合",
          "if_2nd": "32强 M78 · E 组第 2 vs I 组第 2 → 当前 I 组第 1倾向 France（强队）",
          "if_2nd_r16": "16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者",
          "if_2nd_corridor": "德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 F/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Côte d'Ivoire",
          "rank": 2,
          "pts": 3,
          "played": 2,
          "if_1st": "32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池） → 当前 I 组第 2倾向 Norway",
          "if_1st_r16": "16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者",
          "if_1st_corridor": "德国头名出线后 16 强对手取决于第 3 名组合",
          "if_2nd": "32强 M78 · E 组第 2 vs I 组第 2 → 当前 I 组第 1倾向 France（强队）",
          "if_2nd_r16": "16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者",
          "if_2nd_corridor": "德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 F/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "I 组：头名 France 6 分 · 次席 Norway 同分（32强绑定组）",
          "F 组：头名 Netherlands 4 分 · 次席 Japan 同分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "Curaçao、Côte d'Ivoire 末轮须抢 3 分争出线，无控分空间；路径博弈须等积分落袋后再谈。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Curaçao 若取胜：积分 4，E 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Côte d'Ivoire 若取胜：积分 6，客场抢分将改变 E 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 I 组：头名 France 6 分 · 次席 Norway 同分（32强绑定组） · F 组：头名 Netherlands 4 分 · 次席 Japan 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。"
        ]
      },
      "depth_calibration": {
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.46,
          "xg_gap": 0.9,
          "xg_home": 0.78,
          "xg_away": 1.68,
          "xg_baseline_home": 0.78,
          "xg_baseline_away": 1.68,
          "xg_note": "结构推演用基准 xG 0.78–1.68（进球氛围用调整后 0.73–1.61）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Côte d'Ivoire",
          "dog_name": "Curaçao",
          "fav_xg": 1.68,
          "dog_xg": 0.78,
          "path_type": "dog_bloom",
          "path_label": "弱队开花",
          "lean": "split",
          "lean_cn": "大/小比分分裂",
          "lean_mode": "neutral",
          "lean_confidence": null,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 44.2,
          "prob_meet_guess": 44.2,
          "guess_n": 3,
          "prob_4_plus": 22.8,
          "prob_2_or_less": 55.8,
          "totals_line": 2.5,
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
          "summary_cn": "【路径·基准 xG】合计 2.46 · Côte d'Ivoire 1.68 / Curaçao 0.78 → 主路径「弱队开花」约 58%。 超 2.5 约 44.2% · ≤2球 55.8%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      }
    },
    {
      "id": "m56",
      "fifa_match_number": 56,
      "fifa_match_id": "400021466",
      "group": "E",
      "matchday": 3,
      "date": "2026-06-25",
      "time": "16:00",
      "time_local": "16:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "04:00",
      "date_beijing": "6月26日",
      "time_beijing_full": "北京时间 6月26日 04:00",
      "venue": "MetLife Stadium",
      "city": "East Rutherford, USA",
      "note": "E组末轮 · 厄瓜多尔 vs 德国 · 纽约/新泽西",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-2-3-1",
          "home": "Domínguez; Preciado, Torres, Hincapié, Estupiñán; Gruezo, Caicedo; Plata, Ibarra, Sarmiento; Valencia",
          "away": "Ter Stegen; Kimmich, Rüdiger, Tah, Mittelstädt; Andrich, Kroos; Musiala, Wirtz, Sané; Füllkrug",
          "source": "BBC 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Ecuador",
        "iso": "ec",
        "flag": "",
        "fifa_rank": 29,
        "rating": 74,
        "form": [
          "L",
          "D",
          "W",
          "W",
          "L"
        ],
        "coach": "Sebastián Beccacece",
        "stars": [
          {
            "name": "Moisés Caicedo",
            "pos": "CDM",
            "club": "Chelsea",
            "stats": "1 分须胜",
            "rating": 8.2,
            "desc": "屏障+出球"
          },
          {
            "name": "Enner Valencia",
            "pos": "ST",
            "club": "Internacional",
            "stats": "锋线",
            "rating": 7.9,
            "desc": "定位球威胁"
          },
          {
            "name": "Pervis Estupiñán",
            "pos": "LB",
            "club": "Brighton",
            "stats": "左翼",
            "rating": 7.7,
            "desc": "宽度破局"
          }
        ],
        "star": {
          "name": "Moisés Caicedo",
          "pos": "CDM",
          "club": "Chelsea",
          "stats": "1 分须胜",
          "rating": 8.2,
          "desc": "屏障+出球"
        },
        "injuries": [
          {
            "player": "Moisés Caicedo",
            "status": "FIT",
            "note": "1 分须胜 · 屏障轴心",
            "confirmed": true
          },
          {
            "player": "Enner Valencia",
            "status": "FIT",
            "note": "锋线终结 · 定位球",
            "confirmed": true
          }
        ],
        "rumors": [
          "Beccacece：「对德国须抢 3 分——Caicedo 屏障+Estupiñán 宽度」",
          "E 组末轮生死战 · 德国或轮换但深度仍强",
          "MetLife 开球与 m55 同时 · 须关注同组赛果"
        ]
      },
      "away": {
        "name": "Germany",
        "iso": "de",
        "flag": "",
        "fifa_rank": 11,
        "rating": 87,
        "form": [
          "W",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Julian Nagelsmann",
        "stars": [
          {
            "name": "Jamal Musiala",
            "pos": "AM",
            "club": "Bayern Munich",
            "stats": "6 分领跑",
            "rating": 8.8,
            "desc": "肋部穿盘"
          },
          {
            "name": "Florian Wirtz",
            "pos": "AM",
            "club": "Bayer Leverkusen",
            "stats": "组织",
            "rating": 8.6,
            "desc": "前场串联"
          },
          {
            "name": "Joshua Kimmich",
            "pos": "RB",
            "club": "Bayern Munich",
            "stats": "节拍",
            "rating": 8.4,
            "desc": "控球轴心"
          }
        ],
        "star": {
          "name": "Jamal Musiala",
          "pos": "AM",
          "club": "Bayern Munich",
          "stats": "6 分领跑",
          "rating": 8.8,
          "desc": "肋部穿盘"
        },
        "injuries": [
          {
            "player": "Jamal Musiala",
            "status": "FIT",
            "note": "6 分领跑 · 或轮换",
            "confirmed": true
          },
          {
            "player": "Florian Wirtz",
            "status": "FIT",
            "note": "组织核心",
            "confirmed": true
          },
          {
            "player": "Manuel Neuer",
            "status": "DOUBT",
            "note": "轻微不适 · Ter Stegen 待命",
            "confirmed": false
          }
        ],
        "rumors": [
          "Nagelsmann：「6 分已够但须尊重对手——轮换幅度赛前保密」",
          "德国 9 球 2 场后或轮换 · Musiala/Wirtz 仍可能首发",
          "深盘穿盘 vs 厄瓜多尔须胜矛盾"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2017,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "Germany"
          }
        ],
        "note": "德国历史占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 56 · 厄瓜多尔 vs 德国 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-25T15:09:16+08:00"
      },
      "prediction": {
        "home_win": 17,
        "draw": 26,
        "away_win": 56,
        "score": "0-1",
        "confidence": 76,
        "xg_home": 0.92,
        "xg_away": 1.88,
        "key_factor": "E组末轮 · 德国 6 分 vs 厄瓜多尔 1 分须胜 · Caicedo vs Musiala · 泊松 0-2/1-2。",
        "score_dist": [
          {
            "score": "0-1",
            "prob": 11.4
          },
          {
            "score": "0-2",
            "prob": 10.7
          },
          {
            "score": "1-1",
            "prob": 10.5
          },
          {
            "score": "1-2",
            "prob": 9.9
          },
          {
            "score": "0-3",
            "prob": 6.7
          },
          {
            "score": "1-3",
            "prob": 6.2
          },
          {
            "score": "0-0",
            "prob": 6.1
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Ecuador 暂列 E 组第 3（1 分 · 已赛 2 场） vs Germany 第 1（6 分 · 已赛 2 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "新泽西夏夜 · 25°C · 湿度 62% · 降雨概率 25% · 海风 2级；气候均衡——厄瓜多尔须胜 vs 德国深盘"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "E组末轮 · 德国 6 分 vs 厄瓜多尔 1 分须胜 · Caicedo vs Musiala · 泊松 0-2/1-2"
          }
        ],
        "base_home_win": 17,
        "base_draw": 26,
        "base_away_win": 56,
        "depth_calibrated": false,
        "draw_context": {
          "drawBoost": 4,
          "ironBucket": false,
          "closeXg": false,
          "gap": 0.96,
          "notes": [
            "xG 暗示胶着"
          ]
        }
      },
      "weather": {
        "city": "纽约/新泽西",
        "country": "美国",
        "venue": "MetLife Stadium",
        "temp": 25,
        "humidity": 62,
        "altitude_m": 10,
        "rain_chance": 25,
        "wind": "海风 2级",
        "condition_cn": "新泽西夏夜",
        "impact_level": "LOW",
        "impact_summary": "气候均衡——厄瓜多尔须胜 vs 德国深盘",
        "home_adapt": 80,
        "away_adapt": 86,
        "impact": "MetLife 25°C，厄瓜多尔高原球队适应良好；德国或轮换",
        "historical_note": "MetLife · E组末轮 · 厄瓜多尔 vs 德国 · 2026-06-25 22:00 本地",
        "forecast_updated": "2026-06-25 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "乙未日",
          "day_summary": "乙未日——木土相制",
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
        "home_score": 28,
        "away_score": 72,
        "mystic_verdict": "德国金水相生深盘，厄瓜多尔须早破局。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "group_context": {
        "group": "E",
        "label": "E组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Germany",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 9,
            "ga": 2
          },
          {
            "team": "Côte d'Ivoire",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Ecuador",
            "pts": 1,
            "p": 2,
            "w": 0,
            "d": 1,
            "l": 1,
            "gf": 0,
            "ga": 1
          },
          {
            "team": "Curaçao",
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
          "team": "Ecuador",
          "rank": 3,
          "pts": 1,
          "played": 2,
          "if_1st": "32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池） → 当前 I 组第 2倾向 Norway",
          "if_1st_r16": "16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者",
          "if_1st_corridor": "德国头名出线后 16 强对手取决于第 3 名组合",
          "if_2nd": "32强 M78 · E 组第 2 vs I 组第 2 → 当前 I 组第 1倾向 France（强队）",
          "if_2nd_r16": "16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者",
          "if_2nd_corridor": "德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 F/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Germany",
          "rank": 1,
          "pts": 6,
          "played": 2,
          "if_1st": "32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池） → 当前 I 组第 2倾向 Norway",
          "if_1st_r16": "16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者",
          "if_1st_corridor": "德国头名出线后 16 强对手取决于第 3 名组合",
          "if_2nd": "32强 M78 · E 组第 2 vs I 组第 2 → 当前 I 组第 1倾向 France（强队）",
          "if_2nd_r16": "16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者",
          "if_2nd_corridor": "德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 F/G/H/I/J/K/L 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "I 组：头名 France 6 分 · 次席 Norway 同分（32强绑定组）",
          "F 组：头名 Netherlands 4 分 · 次席 Japan 同分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "Germany",
          "reason": "E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。",
          "optimal_summary": "策略最优解（推演）：Germany 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；若次席仍紧追，仍宜控制场面——可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Ecuador 若取胜：积分 4，E 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Germany 若取胜：积分 9，客场抢分将改变 E 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 I 组：头名 France 6 分 · 次席 Norway 同分（32强绑定组） · F 组：头名 Netherlands 4 分 · 次席 Japan 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。"
        ]
      },
      "depth_calibration": {
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.8,
          "xg_gap": 0.96,
          "xg_home": 0.92,
          "xg_away": 1.88,
          "xg_baseline_home": 0.92,
          "xg_baseline_away": 1.88,
          "xg_note": "结构推演用基准 xG 0.92–1.88（进球氛围用调整后 0.92–1.81）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Germany",
          "dog_name": "Ecuador",
          "fav_xg": 1.88,
          "dog_xg": 0.92,
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
          "prob_over_line": 52.4,
          "prob_meet_guess": 52.4,
          "guess_n": 3,
          "prob_4_plus": 29.9,
          "prob_2_or_less": 47.6,
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
              "key": "dog_threat",
              "label": "弱队有球",
              "color": "#E8B84B",
              "bg": "rgba(232,184,75,0.1)"
            },
            {
              "key": "open_game",
              "label": "对攻兑现",
              "color": "#9B7EDE",
              "bg": "rgba(155,126,222,0.1)"
            }
          ],
          "watch_notes": [
            "弱队上半场效率≥1.0 → 关注弱队开花路径"
          ],
          "pattern_note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
          "summary_cn": "【路径·基准 xG】合计 2.8 · Germany 1.88 / Ecuador 0.92 → 主路径「对攻/open」约 33%。 超 2.5 约 52.4% · ≤2球 47.6%。双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      }
    },
    {
      "id": "m57",
      "fifa_match_number": 57,
      "fifa_match_id": "400021471",
      "group": "F",
      "matchday": 3,
      "date": "2026-06-25",
      "time": "19:00",
      "time_local": "19:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "07:00",
      "date_beijing": "6月26日",
      "time_beijing_full": "北京时间 6月26日 07:00",
      "venue": "AT&T Stadium",
      "city": "Arlington, USA",
      "note": "F组末轮 · 日本 vs 瑞典 · 达拉斯",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-4-2",
          "home": "Suzuki; Ito, Tomiyasu, Suzuki, Mitoma; Endo, Morita; Kubo, Minamino, Doan; Maeda",
          "away": "Olsen; Augustinsson, Lindelöf, Krafth; Forsberg, Olsson, Kulusevski; Isak, Gyökeres",
          "source": "FotMob 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Japan",
        "iso": "jp",
        "flag": "",
        "fifa_rank": 18,
        "rating": 77,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "L"
        ],
        "coach": "Hajime Moriyasu",
        "stars": [
          {
            "name": "Takefusa Kubo",
            "pos": "RW",
            "club": "Real Sociedad",
            "stats": "4 分争头名",
            "rating": 8.3,
            "desc": "一对一破局"
          },
          {
            "name": "Wataru Endo",
            "pos": "CDM",
            "club": "Liverpool",
            "stats": "屏障",
            "rating": 8,
            "desc": "绞杀 Isak 背身"
          },
          {
            "name": "Kaoru Mitoma",
            "pos": "LW",
            "club": "Brighton",
            "stats": "左翼",
            "rating": 8.1,
            "desc": "速度宽度"
          }
        ],
        "star": {
          "name": "Takefusa Kubo",
          "pos": "RW",
          "club": "Real Sociedad",
          "stats": "4 分争头名",
          "rating": 8.3,
          "desc": "一对一破局"
        },
        "injuries": [
          {
            "player": "Takefusa Kubo",
            "pos": "RW",
            "status": "FIT",
            "note": "4 分 · 一对一破局",
            "confirmed": true
          },
          {
            "player": "Wataru Endo",
            "status": "FIT",
            "note": "屏障 · 绞杀 Isak",
            "confirmed": true
          },
          {
            "player": "Kaoru Mitoma",
            "status": "FIT",
            "note": "左翼速度",
            "confirmed": true
          }
        ],
        "rumors": [
          "Moriyasu：「4 分仍不够稳——对瑞典须全取 3 分或盯荷兰赛果」",
          "F 组出线战 · 达拉斯 34°C 补水是关键",
          "Kubo 对位 Krafth 是战术轴心"
        ]
      },
      "away": {
        "name": "Sweden",
        "iso": "se",
        "flag": "",
        "fifa_rank": 32,
        "rating": 73,
        "form": [
          "L",
          "W",
          "D",
          "W",
          "L"
        ],
        "coach": "Jon Dahl Tomasson",
        "stars": [
          {
            "name": "Alexander Isak",
            "pos": "ST",
            "club": "Newcastle",
            "stats": "3 分须胜",
            "rating": 8.4,
            "desc": "锋线终结"
          },
          {
            "name": "Emil Forsberg",
            "pos": "AM",
            "club": "New York Red Bulls",
            "stats": "远射",
            "rating": 7.9,
            "desc": "定位球"
          },
          {
            "name": "Victor Lindelöf",
            "pos": "CB",
            "club": "Aston Villa",
            "stats": "中卫",
            "rating": 7.6,
            "desc": "防空 Kubo 传中"
          }
        ],
        "star": {
          "name": "Alexander Isak",
          "pos": "ST",
          "club": "Newcastle",
          "stats": "3 分须胜",
          "rating": 8.4,
          "desc": "锋线终结"
        },
        "injuries": [
          {
            "player": "Alexander Isak",
            "status": "FIT",
            "note": "3 分须胜",
            "confirmed": true
          },
          {
            "player": "Emil Forsberg",
            "status": "FIT",
            "note": "远射+定位球",
            "confirmed": true
          }
        ],
        "rumors": [
          "Tomasson：「3 分须胜——平局可能出局」",
          "瑞典 6 球 2 场进攻火但防 6 球 · 须攻守平衡",
          "湿热午后 · 后段体能是瓶颈"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 0,
        "away_wins": 1,
        "recent": [
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "Japan"
          }
        ],
        "note": "互有胜负"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 57 · 日本 vs 瑞典 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-25T15:09:16+08:00"
      },
      "prediction": {
        "home_win": 38,
        "draw": 35,
        "away_win": 28,
        "score": "1-1",
        "confidence": 72,
        "xg_home": 1.58,
        "xg_away": 1.32,
        "key_factor": "F组末轮 · 日本 4 分 vs 瑞典 3 分须胜 · Kubo vs Isak · 泊松 2-1/1-1。",
        "score_dist": [
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
          },
          {
            "score": "1-2",
            "prob": 7.6
          },
          {
            "score": "0-1",
            "prob": 7.3
          },
          {
            "score": "2-0",
            "prob": 6.9
          },
          {
            "score": "2-2",
            "prob": 6
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Japan 暂列 F 组第 2（4 分 · 已赛 2 场） vs Sweden 第 3（3 分 · 已赛 2 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "达拉斯午后晴热，体感约 38°C · 34°C · 湿度 55% · 降雨概率 15% · 南风 1级 · 晴热；湿热中等——日本/瑞典均分争出线，后段体能是变量"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "F组末轮 · 日本 4 分 vs 瑞典 3 分须胜 · Kubo vs Isak · 泊松 2-1/1-1"
          }
        ],
        "base_home_win": 38,
        "base_draw": 35,
        "base_away_win": 28,
        "depth_calibrated": false,
        "draw_context": {
          "drawBoost": 10,
          "ironBucket": true,
          "closeXg": true,
          "gap": 0.26,
          "notes": [
            "xG 接近且战术偏保守",
            "热门难破密集"
          ]
        }
      },
      "weather": {
        "city": "达拉斯",
        "country": "美国",
        "venue": "AT&T Stadium",
        "temp": 34,
        "humidity": 55,
        "altitude_m": 200,
        "rain_chance": 15,
        "wind": "南风 1级 · 晴热",
        "condition_cn": "达拉斯午后晴热，体感约 38°C",
        "impact_level": "MEDIUM",
        "impact_summary": "湿热中等——日本/瑞典均分争出线，后段体能是变量",
        "home_adapt": 84,
        "away_adapt": 80,
        "impact": "AT&T 34°C 有顶盖但仍热，F 组出线战补水暂停概率高",
        "historical_note": "达拉斯 · F组末轮 · 日本 vs 瑞典 · 2026-06-25 22:00 本地",
        "forecast_updated": "2026-06-25 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "乙未日",
          "day_summary": "乙未日——木土相制",
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
        "home_score": 52,
        "away_score": 48,
        "mystic_verdict": "日本火木相生主场略优，瑞典须胜。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "group_context": {
        "group": "F",
        "label": "F组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Netherlands",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 7,
            "ga": 3
          },
          {
            "team": "Japan",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 6,
            "ga": 2
          },
          {
            "team": "Sweden",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 6,
            "ga": 6
          },
          {
            "team": "Tunisia",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 1,
            "ga": 9
          }
        ],
        "home": {
          "team": "Japan",
          "rank": 2,
          "pts": 4,
          "played": 2,
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
          "rank": 3,
          "pts": 3,
          "played": 2,
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
          "C 组：头名 Brazil 7 分 · 次席 Morocco 7 分（32强绑定组）",
          "E 组：头名 Germany 6 分 · 次席 Côte d'Ivoire 3 分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "I 组 France 6 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "Sweden 末轮须抢 3 分争出线，无控分空间；路径博弈须等积分落袋后再谈。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Japan 若取胜：积分 7，F 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Sweden 若取胜：积分 6，客场抢分将改变 F 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 C 组：头名 Brazil 7 分 · 次席 Morocco 7 分（32强绑定组） · E 组：头名 Germany 6 分 · 次席 Côte d'Ivoire 3 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。"
        ]
      },
      "depth_calibration": {
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.9,
          "xg_gap": 0.26,
          "xg_home": 1.58,
          "xg_away": 1.32,
          "xg_baseline_home": 1.58,
          "xg_baseline_away": 1.32,
          "xg_note": "结构推演用基准 xG 1.58–1.32（进球氛围用调整后 1.31–1.12）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Japan",
          "dog_name": "Sweden",
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
          "prob_over_line": 55,
          "prob_meet_guess": 55,
          "guess_n": 3,
          "prob_4_plus": 32.5,
          "prob_2_or_less": 45,
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
          "summary_cn": "【路径·基准 xG】合计 2.9 · Japan 1.58 / Sweden 1.32 → 主路径「铁局/小比分」约 45%。 超 2.5 约 55% · ≤2球 45%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      }
    },
    {
      "id": "m58",
      "fifa_match_number": 58,
      "fifa_match_id": "400021473",
      "group": "F",
      "matchday": 3,
      "date": "2026-06-25",
      "time": "19:00",
      "time_local": "19:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "07:00",
      "date_beijing": "6月26日",
      "time_beijing_full": "北京时间 6月26日 07:00",
      "venue": "Arrowhead Stadium",
      "city": "Kansas City, USA",
      "note": "F组末轮 · 突尼斯 vs 荷兰 · 堪萨斯城",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "5-4-1 / 4-3-3",
          "home": "Dahmen; Talbi, Meriah, Bronn; Laabidi, Skhiri, Laidouni; Sliti, Msakni, Khazri; Jebali",
          "away": "Verbruggen; Dumfries, De Ligt, Van Dijk, Blind; Reijnders, Wijnaldum; Gakpo, Simons, Depay; Brobbey",
          "source": "BBC 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Tunisia",
        "iso": "tn",
        "flag": "",
        "fifa_rank": 41,
        "rating": 68,
        "form": [
          "L",
          "L",
          "D",
          "W",
          "L"
        ],
        "coach": "Samuel Veglio",
        "stars": [
          {
            "name": "Wahbi Khazri",
            "pos": "AM",
            "club": "Montpellier",
            "stats": "0 分出局",
            "rating": 7.5,
            "desc": "远射+定位球"
          }
        ],
        "star": {
          "name": "Wahbi Khazri",
          "pos": "AM",
          "club": "Montpellier",
          "stats": "0 分出局",
          "rating": 7.5,
          "desc": "荣誉之战"
        },
        "injuries": [
          {
            "player": "Wahbi Khazri",
            "status": "FIT",
            "note": "0 分已出局 · 荣誉战",
            "confirmed": true
          }
        ],
        "rumors": [
          "Veglio：「0 分但须捍卫尊严——5-4-1 低位+Khazri 远射」",
          "突尼斯 9 球 2 场失守 · 末轮或轮换"
        ]
      },
      "away": {
        "name": "Netherlands",
        "iso": "nl",
        "flag": "",
        "fifa_rank": 7,
        "rating": 86,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "D"
        ],
        "coach": "Ronald Koeman",
        "stars": [
          {
            "name": "Cody Gakpo",
            "pos": "LW",
            "club": "Liverpool",
            "stats": "4 分领跑",
            "rating": 8.5,
            "desc": "左翼速度"
          },
          {
            "name": "Virgil van Dijk",
            "pos": "CB",
            "club": "Liverpool",
            "stats": "防线",
            "rating": 8.6,
            "desc": "防空领袖"
          },
          {
            "name": "Xavi Simons",
            "pos": "AM",
            "club": "RB Leipzig",
            "stats": "前腰",
            "rating": 8.3,
            "desc": "肋部渗透"
          }
        ],
        "star": {
          "name": "Cody Gakpo",
          "pos": "LW",
          "club": "Liverpool",
          "stats": "4 分领跑",
          "rating": 8.5,
          "desc": "左翼速度"
        },
        "injuries": [
          {
            "player": "Cody Gakpo",
            "status": "FIT",
            "note": "4 分领跑",
            "confirmed": true
          },
          {
            "player": "Virgil van Dijk",
            "status": "FIT",
            "note": "防线领袖",
            "confirmed": true
          },
          {
            "player": "Memphis Depay",
            "status": "DOUBT",
            "note": "肌肉疲劳 · 赛前队检",
            "confirmed": false
          }
        ],
        "rumors": [
          "Koeman：「4 分不够稳——须胜但可能轮换 Gakpo 以外位置」",
          "荷兰 7 球火力 · 对突尼斯深盘",
          "同开 m57 日本-瑞典 · 出线形势联动"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2010,
            "comp": "友谊赛",
            "score": "0-1",
            "winner": "Netherlands"
          }
        ],
        "note": "荷兰占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 58 · 突尼斯 vs 荷兰 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-25T15:09:16+08:00"
      },
      "prediction": {
        "home_win": 11.4,
        "draw": 19.7,
        "away_win": 68.9,
        "score": "0-2",
        "confidence": 78,
        "xg_home": 0.68,
        "xg_away": 2.05,
        "key_factor": "F组末轮 · 荷兰 4 分 vs 突尼斯 0 分 · Gakpo vs Khazri · 泊松 0-2/1-3。",
        "score_dist": [
          {
            "score": "0-2",
            "prob": 13.7
          },
          {
            "score": "0-1",
            "prob": 13.4
          },
          {
            "score": "0-3",
            "prob": 9.4
          },
          {
            "score": "1-2",
            "prob": 9.3
          },
          {
            "score": "1-1",
            "prob": 9.1
          },
          {
            "score": "0-0",
            "prob": 6.5
          },
          {
            "score": "1-3",
            "prob": 6.4
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Tunisia 暂列 F 组第 4（0 分 · 已赛 2 场） vs Netherlands 第 1（4 分 · 已赛 2 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "堪萨斯城午后热 · 32°C · 湿度 58% · 降雨概率 30% · 西风 2级 · 热；荷兰深盘 vs 突尼斯 0 分——战术差距大于气候"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "F组末轮 · 荷兰 4 分 vs 突尼斯 0 分 · Gakpo vs Khazri · 泊松 0-2/1-3"
          }
        ],
        "base_home_win": 11.4,
        "base_draw": 19.7,
        "base_away_win": 68.9,
        "depth_calibrated": false,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": true,
          "closeXg": false,
          "gap": 1.37,
          "notes": []
        }
      },
      "weather": {
        "city": "堪萨斯城",
        "country": "美国",
        "venue": "Arrowhead Stadium",
        "temp": 32,
        "humidity": 58,
        "altitude_m": 270,
        "rain_chance": 30,
        "wind": "西风 2级 · 热",
        "condition_cn": "堪萨斯城午后热",
        "impact_level": "MEDIUM",
        "impact_summary": "荷兰深盘 vs 突尼斯 0 分——战术差距大于气候",
        "home_adapt": 76,
        "away_adapt": 88,
        "impact": "Arrowhead 开放式 32°C，荷兰轮换版仍占优",
        "historical_note": "堪萨斯城 · F组末轮 · 突尼斯 vs 荷兰 · 2026-06-25 22:00 本地",
        "forecast_updated": "2026-06-25 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "乙未日",
          "day_summary": "乙未日——木土相制",
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
        "home_score": 25,
        "away_score": 75,
        "mystic_verdict": "荷兰火土旺深盘，突尼斯守势。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "group_context": {
        "group": "F",
        "label": "F组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "Netherlands",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 7,
            "ga": 3
          },
          {
            "team": "Japan",
            "pts": 4,
            "p": 2,
            "w": 1,
            "d": 1,
            "l": 0,
            "gf": 6,
            "ga": 2
          },
          {
            "team": "Sweden",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 6,
            "ga": 6
          },
          {
            "team": "Tunisia",
            "pts": 0,
            "p": 2,
            "w": 0,
            "d": 0,
            "l": 2,
            "gf": 1,
            "ga": 9
          }
        ],
        "home": {
          "team": "Tunisia",
          "rank": 4,
          "pts": 0,
          "played": 2,
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
          "team": "Netherlands",
          "rank": 1,
          "pts": 4,
          "played": 2,
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
          "C 组：头名 Brazil 7 分 · 次席 Morocco 7 分（32强绑定组）",
          "E 组：头名 Germany 6 分 · 次席 Côte d'Ivoire 3 分（32强绑定组）",
          "G 组 Egypt 4 分领跑",
          "H 组 Spain 4 分领跑",
          "I 组 France 6 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "Tunisia 末轮须抢 3 分争出线，无控分空间；路径博弈须等积分落袋后再谈。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Tunisia 若取胜：积分 3，F 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Netherlands 若取胜：积分 7，客场抢分将改变 F 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 C 组：头名 Brazil 7 分 · 次席 Morocco 7 分（32强绑定组） · E 组：头名 Germany 6 分 · 次席 Côte d'Ivoire 3 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。"
        ]
      },
      "depth_calibration": {
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.73,
          "xg_gap": 1.37,
          "xg_home": 0.68,
          "xg_away": 2.05,
          "xg_baseline_home": 0.68,
          "xg_baseline_away": 2.05,
          "xg_note": "结构推演用基准 xG 0.68–2.05（进球氛围用调整后 0.64–1.86）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Netherlands",
          "dog_name": "Tunisia",
          "fav_xg": 2.05,
          "dog_xg": 0.68,
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
          "prob_over_line": 50.5,
          "prob_meet_guess": 50.5,
          "guess_n": 3,
          "prob_4_plus": 27.9,
          "prob_2_or_less": 49.5,
          "totals_line": 2.5,
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
          "summary_cn": "【路径·基准 xG】合计 2.73 · Netherlands 2.05 / Tunisia 0.68 → 主路径「铁局/小比分」约 65%。 超 2.5 约 50.5% · ≤2球 49.5%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      }
    },
    {
      "id": "m59",
      "fifa_match_number": 59,
      "fifa_match_id": "400021459",
      "group": "D",
      "matchday": 3,
      "date": "2026-06-25",
      "time": "22:00",
      "time_local": "19:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "10:00",
      "date_beijing": "6月26日",
      "time_beijing_full": "北京时间 6月26日 10:00",
      "venue": "SoFi Stadium",
      "city": "Inglewood, USA",
      "note": "D组末轮 · 土耳其 vs 美国 · 洛杉矶",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Çakır; Çelik, Demiral, Bardakcı, Kadioglu; İnanç, Yıldız; Güler, Çalhanoğlu, Yılmaz; Aktürkoğlu",
          "away": "Turner; Dest, Richards, Ream, Robinson; Adams, Musah; Pulisic, McKennie, Weah; Balogun",
          "source": "ESPN 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Türkiye",
        "iso": "tr",
        "flag": "",
        "fifa_rank": 42,
        "rating": 70,
        "form": [
          "L",
          "L",
          "W",
          "D",
          "W"
        ],
        "coach": "Vincenzo Montella",
        "stars": [
          {
            "name": "Hakan Çalhanoğlu",
            "pos": "CM",
            "club": "Inter Milan",
            "stats": "0 分须胜",
            "rating": 8.1,
            "desc": "远射+定位球"
          },
          {
            "name": "Arda Güler",
            "pos": "AM",
            "club": "Real Madrid",
            "stats": "前腰",
            "rating": 8,
            "desc": "肋部创造力"
          },
          {
            "name": "Merih Demiral",
            "pos": "CB",
            "club": "Al-Ahli",
            "stats": "中卫",
            "rating": 7.7,
            "desc": "防空"
          }
        ],
        "star": {
          "name": "Hakan Çalhanoğlu",
          "pos": "CM",
          "club": "Inter Milan",
          "stats": "0 分须胜",
          "rating": 8.1,
          "desc": "远射+定位球"
        },
        "injuries": [
          {
            "player": "Hakan Çalhanoğlu",
            "status": "FIT",
            "note": "0 分须胜",
            "confirmed": true
          },
          {
            "player": "Arda Güler",
            "status": "FIT",
            "note": "肋部创造力",
            "confirmed": true
          }
        ],
        "rumors": [
          "Montella：「0 分等于出局——对东道主须早进球」",
          "土耳其 0 球 2 场 · 进攻乏力是最大问题",
          "SoFi 洛杉矶 · 美国或大幅轮换"
        ]
      },
      "away": {
        "name": "USA",
        "iso": "us",
        "flag": "",
        "fifa_rank": 15,
        "rating": 82,
        "form": [
          "W",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Mauricio Pochettino",
        "stars": [
          {
            "name": "Christian Pulisic",
            "pos": "RW",
            "club": "AC Milan",
            "stats": "6 分已出线",
            "rating": 8.6,
            "desc": "右路破局"
          },
          {
            "name": "Weston McKennie",
            "pos": "CM",
            "club": "Juventus",
            "stats": "屏障",
            "rating": 8,
            "desc": "中场绞杀"
          },
          {
            "name": "Folarin Balogun",
            "pos": "ST",
            "club": "Monaco",
            "stats": "锋线",
            "rating": 8.1,
            "desc": "终结"
          }
        ],
        "star": {
          "name": "Christian Pulisic",
          "pos": "RW",
          "club": "AC Milan",
          "stats": "6 分已出线",
          "rating": 8.6,
          "desc": "右路破局"
        },
        "injuries": [
          {
            "player": "Christian Pulisic",
            "status": "FIT",
            "note": "6 分已出线 · 或替补",
            "confirmed": true
          },
          {
            "player": "Weston McKennie",
            "status": "FIT",
            "note": "屏障",
            "confirmed": true
          },
          {
            "player": "Matt Turner",
            "status": "FIT",
            "note": "一门 · 轮换待定",
            "confirmed": true
          }
        ],
        "rumors": [
          "Pochettino：「6 分已出线——末轮轮换但 SoFi 主场仍要赢」",
          "2-0 澳大利亚、2-0 巴拉圭后士气足",
          "无 Pulisic 首发可能略抬平局权重"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 1,
        "recent": [
          {
            "year": 2016,
            "comp": "友谊赛",
            "score": "0-1",
            "winner": "USA"
          }
        ],
        "note": "美国友谊赛胜"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 59 · 土耳其 vs 美国 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-25T15:09:16+08:00"
      },
      "prediction": {
        "home_win": 17,
        "draw": 27,
        "away_win": 56,
        "score": "0-1",
        "confidence": 74,
        "xg_home": 0.85,
        "xg_away": 1.78,
        "key_factor": "D组末轮 · 美国 6 分 vs 土耳其 0 分须胜 · Çalhanoğlu vs Pulisic · 泊松 0-2/1-2。",
        "score_dist": [
          {
            "score": "0-1",
            "prob": 12.8
          },
          {
            "score": "0-2",
            "prob": 11.4
          },
          {
            "score": "1-1",
            "prob": 10.9
          },
          {
            "score": "1-2",
            "prob": 9.7
          },
          {
            "score": "0-0",
            "prob": 7.2
          },
          {
            "score": "0-3",
            "prob": 6.8
          },
          {
            "score": "1-0",
            "prob": 6.1
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Türkiye 暂列 D 组第 4（0 分 · 已赛 2 场） vs USA 第 1（6 分 · 已赛 2 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "洛杉矶夏夜凉爽 · 23°C · 湿度 58% · 降雨概率 10% · 海风 1级；美国 6 分或轮换 · 土耳其须胜"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "D组末轮 · 美国 6 分 vs 土耳其 0 分须胜 · Çalhanoğlu vs Pulisic · 泊松 0-2/1-2"
          }
        ],
        "base_home_win": 17,
        "base_draw": 27,
        "base_away_win": 56,
        "depth_calibrated": false,
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
        "city": "洛杉矶",
        "country": "美国",
        "venue": "SoFi Stadium",
        "temp": 23,
        "humidity": 58,
        "altitude_m": 30,
        "rain_chance": 10,
        "wind": "海风 1级",
        "condition_cn": "洛杉矶夏夜凉爽",
        "impact_level": "LOW",
        "impact_summary": "美国 6 分或轮换 · 土耳其须胜",
        "home_adapt": 78,
        "away_adapt": 92,
        "impact": "SoFi 23°C 凉爽，Pochettino 末轮轮换幅度是最大变量",
        "historical_note": "洛杉矶 · D组末轮 · 土耳其 vs 美国 · 2026-06-25 22:00 本地",
        "forecast_updated": "2026-06-25 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "乙未日",
          "day_summary": "乙未日——木土相制",
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
        "home_score": 32,
        "away_score": 68,
        "mystic_verdict": "美国火土旺主场，土耳其须胜。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "group_context": {
        "group": "D",
        "label": "D组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "USA",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 6,
            "ga": 1
          },
          {
            "team": "Australia",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 4
          },
          {
            "team": "Paraguay",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 4
          },
          {
            "team": "Türkiye",
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
          "team": "Türkiye",
          "rank": 4,
          "pts": 0,
          "played": 2,
          "if_1st": "32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池） → 当前 G 组第 2倾向 Iran",
          "if_1st_r16": "16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者",
          "if_1st_corridor": "比利时/埃及 等 G 组头名走廊",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 G 组第 1倾向 Egypt",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/西班牙 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "USA",
          "rank": 1,
          "pts": 6,
          "played": 2,
          "if_1st": "32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池） → 当前 G 组第 2倾向 Iran",
          "if_1st_r16": "16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者",
          "if_1st_corridor": "比利时/埃及 等 G 组头名走廊",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 G 组第 1倾向 Egypt",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/西班牙 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "C 组：头名 Brazil 7 分 · 次席 Morocco 7 分（32强绑定组）",
          "G 组：头名 Egypt 4 分 · 次席 Iran 2 分（32强绑定组）",
          "H 组 Spain 4 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 France 6 分领跑"
        ],
        "path_tradeoff": "美国 6 分已锁 M81 头名；土/巴争 M88 次席（D2 vs G2 · 倾向 Iran）——土耳其同分须靠净胜球/进球数弥补对澳 0-2 的相互战绩劣势。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": "USA",
          "reason": "D 组次席走 M88（D2 vs G2）；头名 M81 打第 3 名池。美国已出线时，土/巴争次席并须关注相互战绩与净胜球。",
          "optimal_summary": "策略最优解（推演）：USA 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；若次席仍紧追，仍宜控制场面——可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Türkiye 若取胜：积分 3，D 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "USA 若取胜：积分 9，客场抢分将改变 D 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 C 组：头名 Brazil 7 分 · 次席 Morocco 7 分（32强绑定组） · G 组：头名 Egypt 4 分 · 次席 Iran 2 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：D 组次席走 M88（D2 vs G2）；头名 M81 打第 3 名池。美国已出线时，土/巴争次席并须关注相互战绩与净胜球。"
        ]
      },
      "depth_calibration": {
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.63,
          "xg_gap": 0.93,
          "xg_home": 0.85,
          "xg_away": 1.78,
          "xg_baseline_home": 0.85,
          "xg_baseline_away": 1.78,
          "xg_note": "结构推演用基准 xG 0.85–1.78",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "USA",
          "dog_name": "Türkiye",
          "fav_xg": 1.78,
          "dog_xg": 0.85,
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
          "prob_over_line": 48.4,
          "prob_meet_guess": 48.4,
          "guess_n": 3,
          "prob_4_plus": 26.3,
          "prob_2_or_less": 51.6,
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
          "summary_cn": "【路径·基准 xG】合计 2.63 · USA 1.78 / Türkiye 0.85 → 主路径「弱队开花」约 41%。 超 2.5 约 48.4% · ≤2球 51.6%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      }
    },
    {
      "id": "m60",
      "fifa_match_number": 60,
      "fifa_match_id": "400021461",
      "group": "D",
      "matchday": 3,
      "date": "2026-06-25",
      "time": "22:00",
      "time_local": "19:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "10:00",
      "date_beijing": "6月26日",
      "time_beijing_full": "北京时间 6月26日 10:00",
      "venue": "Levi's Stadium",
      "city": "Santa Clara, USA",
      "note": "D组末轮 · 巴拉圭 vs 澳大利亚 · 旧金山湾区",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-4-2 / 4-2-3-1",
          "home": "Martínez; Velázquez, Gómez, Alonso, Espínola; Sosa, Villamayor; Almirón, Romero, Sanabria; González",
          "away": "Ryan; Atkinson, Souttar, Bos; Metcalfe, Irvine; Goodwin, Leckie, Baccus; Taggart",
          "source": "BBC 预测",
          "alt": null
        }
      },
      "home": {
        "name": "Paraguay",
        "iso": "py",
        "flag": "",
        "fifa_rank": 52,
        "rating": 68,
        "form": [
          "L",
          "W",
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
            "stats": "3 分争出线",
            "rating": 8,
            "desc": "右路速度"
          },
          {
            "name": "Gustavo Gómez",
            "pos": "CB",
            "club": "Palmeiras",
            "stats": "中卫",
            "rating": 7.8,
            "desc": "防线领袖"
          },
          {
            "name": "Ramón Sosa",
            "pos": "LW",
            "club": "Nottingham Forest",
            "stats": "左翼",
            "rating": 7.6,
            "desc": "宽度"
          }
        ],
        "star": {
          "name": "Miguel Almirón",
          "pos": "RW",
          "club": "Newcastle",
          "stats": "3 分争出线",
          "rating": 8,
          "desc": "右路速度"
        },
        "injuries": [
          {
            "player": "Miguel Almirón",
            "status": "FIT",
            "note": "3 分争出线",
            "confirmed": true
          },
          {
            "player": "Gustavo Gómez",
            "status": "FIT",
            "note": "中卫领袖",
            "confirmed": true
          }
        ],
        "rumors": [
          "Alfaro：「3 分同分生死战——Almirón 宽度是破局」",
          "巴拉圭 1-2 美国后须胜 · 定位球关键",
          "D 组美国 6 分已基本锁定头名"
        ]
      },
      "away": {
        "name": "Australia",
        "iso": "au",
        "flag": "",
        "fifa_rank": 24,
        "rating": 74,
        "form": [
          "W",
          "L",
          "W",
          "D",
          "W"
        ],
        "coach": "Tony Popovic",
        "stars": [
          {
            "name": "Mathew Ryan",
            "pos": "GK",
            "club": "Roma",
            "stats": "3 分同分",
            "rating": 7.8,
            "desc": "一门经验"
          },
          {
            "name": "Mitchell Duke",
            "pos": "ST",
            "club": "Machida Zelvia",
            "stats": "支点",
            "rating": 7.5,
            "desc": "身体对抗"
          },
          {
            "name": "Craig Goodwin",
            "pos": "LW",
            "club": "Adelaide United",
            "stats": "左翼",
            "rating": 7.6,
            "desc": "传中破局"
          }
        ],
        "star": {
          "name": "Craig Goodwin",
          "pos": "LW",
          "club": "Adelaide United",
          "stats": "3 分同分",
          "rating": 7.6,
          "desc": "传中破局"
        },
        "injuries": [
          {
            "player": "Craig Goodwin",
            "status": "FIT",
            "note": "左翼传中",
            "confirmed": true
          },
          {
            "player": "Harry Souttar",
            "status": "FIT",
            "note": "防空",
            "confirmed": true
          }
        ],
        "rumors": [
          "Popovic：「3 分须胜——2-0 美国后士气足但巴拉圭不好打」",
          "澳大利亚 5-4-1 模板对土耳其验证",
          "湾区凉爽 · 均分乱局定位球破局"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 0,
        "recent": [
          {
            "year": 2015,
            "comp": "友谊赛",
            "score": "0-0",
            "winner": "draw"
          }
        ],
        "note": "友谊赛平局"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 60 · 巴拉圭 vs 澳大利亚 · 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ],
        "updated": "2026-06-25T15:09:16+08:00"
      },
      "prediction": {
        "home_win": 35,
        "draw": 36,
        "away_win": 29,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.42,
        "xg_away": 1.28,
        "key_factor": "D组末轮 · 巴拉圭/澳大利亚各 3 分 · Almirón vs Goodwin · 泊松 1-1/2-1。",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.2
          },
          {
            "score": "1-0",
            "prob": 9.5
          },
          {
            "score": "2-1",
            "prob": 8.7
          },
          {
            "score": "0-1",
            "prob": 8.6
          },
          {
            "score": "1-2",
            "prob": 7.8
          },
          {
            "score": "2-0",
            "prob": 6.8
          },
          {
            "score": "0-0",
            "prob": 6.7
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Paraguay 暂列 D 组第 3（3 分 · 已赛 2 场） vs Australia 第 2（3 分 · 已赛 2 场）；组内 USA 6分 领先；直接对话权重极高"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "湾区夏夜凉爽 · 21°C · 湿度 62% · 降雨概率 15% · 太平洋 breeze 2级；均分生死战——巴拉圭/澳大利亚各 3 分"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "D组末轮 · 巴拉圭/澳大利亚各 3 分 · Almirón vs Goodwin · 泊松 1-1/2-1"
          }
        ],
        "base_home_win": 35,
        "base_draw": 36,
        "base_away_win": 29,
        "depth_calibrated": false,
        "draw_context": {
          "drawBoost": 10,
          "ironBucket": true,
          "closeXg": true,
          "gap": 0.14,
          "notes": [
            "xG 极接近",
            "热门难破密集"
          ]
        }
      },
      "weather": {
        "city": "旧金山湾区",
        "country": "美国",
        "venue": "Levi's Stadium",
        "temp": 21,
        "humidity": 62,
        "altitude_m": 15,
        "rain_chance": 15,
        "wind": "太平洋 breeze 2级",
        "condition_cn": "湾区夏夜凉爽",
        "impact_level": "LOW",
        "impact_summary": "均分生死战——巴拉圭/澳大利亚各 3 分",
        "home_adapt": 82,
        "away_adapt": 84,
        "impact": "Levi's 21°C 凉爽，定位球与转换是破局路径",
        "historical_note": "湾区 · D组末轮 · 巴拉圭 vs 澳大利亚 · 2026-06-25 22:00 本地",
        "forecast_updated": "2026-06-25 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "乙未日",
          "day_summary": "乙未日——木土相制",
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
        "home_score": 48,
        "away_score": 52,
        "mystic_verdict": "均分乱局宜稳守，定位球破局。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "group_context": {
        "group": "D",
        "label": "D组 · 第2轮后",
        "matchday": 3,
        "standings": [
          {
            "team": "USA",
            "pts": 6,
            "p": 2,
            "w": 2,
            "d": 0,
            "l": 0,
            "gf": 6,
            "ga": 1
          },
          {
            "team": "Australia",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 4
          },
          {
            "team": "Paraguay",
            "pts": 3,
            "p": 2,
            "w": 1,
            "d": 0,
            "l": 1,
            "gf": 2,
            "ga": 4
          },
          {
            "team": "Türkiye",
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
          "team": "Paraguay",
          "rank": 3,
          "pts": 3,
          "played": 2,
          "if_1st": "32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池） → 当前 G 组第 2倾向 Iran",
          "if_1st_r16": "16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者",
          "if_1st_corridor": "比利时/埃及 等 G 组头名走廊",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 G 组第 1倾向 Egypt",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/西班牙 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Australia",
          "rank": 2,
          "pts": 3,
          "played": 2,
          "if_1st": "32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池） → 当前 G 组第 2倾向 Iran",
          "if_1st_r16": "16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者",
          "if_1st_corridor": "比利时/埃及 等 G 组头名走廊",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 G 组第 1倾向 Egypt",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/西班牙 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "C 组：头名 Brazil 7 分 · 次席 Morocco 7 分（32强绑定组）",
          "G 组：头名 Egypt 4 分 · 次席 Iran 2 分（32强绑定组）",
          "H 组 Spain 4 分领跑",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 France 6 分领跑"
        ],
        "path_tradeoff": "美国 6 分已锁 M81 头名；土/巴争 M88 次席（D2 vs G2 · 倾向 Iran）——土耳其同分须靠净胜球/进球数弥补对澳 0-2 的相互战绩劣势。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "Paraguay、Australia 末轮须抢 3 分争出线，无控分空间；路径博弈须等积分落袋后再谈。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Paraguay 若取胜：积分 6，D 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Australia 若取胜：积分 6，客场抢分将改变 D 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 C 组：头名 Brazil 7 分 · 次席 Morocco 7 分（32强绑定组） · G 组：头名 Egypt 4 分 · 次席 Iran 2 分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：D 组次席走 M88（D2 vs G2）；头名 M81 打第 3 名池。美国已出线时，土/巴争次席并须关注相互战绩与净胜球。"
        ]
      },
      "depth_calibration": {
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.7,
          "xg_gap": 0.14,
          "xg_home": 1.42,
          "xg_away": 1.28,
          "xg_baseline_home": 1.42,
          "xg_baseline_away": 1.28,
          "xg_note": "结构推演用基准 xG 1.42–1.28（进球氛围用调整后 1.33–1.23）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "Paraguay",
          "dog_name": "Australia",
          "fav_xg": 1.42,
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
          "prob_over_line": 50.4,
          "prob_meet_guess": 50.4,
          "guess_n": 3,
          "prob_4_plus": 28.2,
          "prob_2_or_less": 49.6,
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
            "弱队上半场效率≥1.0 → 关注弱队开花路径"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 2.7 · Paraguay 1.42 / Australia 1.28 → 主路径「铁局/小比分」约 45%。 超 2.5 约 50.4% · ≤2球 49.6%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      }
    }
  ],
  "nextMatch": {
    "group": "E",
    "matchday": 3,
    "date": "2026-06-25",
    "time": "16:00",
    "time_local": "16:00 ET",
    "timezone": "EDT (UTC-4)",
    "time_beijing": "04:00",
    "date_beijing": "6月26日",
    "time_beijing_full": "北京时间 6月26日 04:00",
    "venue": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "home": {
      "name": "Curaçao",
      "iso": "cw",
      "fifaRank": 88,
      "rating": 58
    },
    "away": {
      "name": "Côte d'Ivoire",
      "iso": "ci",
      "fifaRank": 36,
      "rating": 72
    },
    "teaser": "E组末轮 · 库拉索 vs 科特迪瓦",
    "home_win": 16,
    "draw": 31,
    "away_win": 53,
    "predicted_score": "0-1",
    "key_player_home": "Leandro Bacuna",
    "key_player_away": "Nicolas Pépé"
  },
  "upcomingMatches": [
    {
      "group": "E",
      "time_beijing_full": "北京时间 6月26日 04:00",
      "venue": "MetLife Stadium",
      "city": "East Rutherford, USA",
      "home": {
        "name": "Ecuador",
        "iso": "ec"
      },
      "away": {
        "name": "Germany",
        "iso": "de"
      },
      "teaser": "E组末轮"
    },
    {
      "group": "F",
      "time_beijing_full": "北京时间 6月26日 07:00",
      "venue": "AT&T Stadium",
      "city": "Arlington, USA",
      "home": {
        "name": "Japan",
        "iso": "jp"
      },
      "away": {
        "name": "Sweden",
        "iso": "se"
      },
      "teaser": "F组末轮"
    },
    {
      "group": "F",
      "time_beijing_full": "北京时间 6月26日 07:00",
      "venue": "Arrowhead Stadium",
      "city": "Kansas City, USA",
      "home": {
        "name": "Tunisia",
        "iso": "tn"
      },
      "away": {
        "name": "Netherlands",
        "iso": "nl"
      },
      "teaser": "F组末轮"
    },
    {
      "group": "D",
      "time_beijing_full": "北京时间 6月26日 10:00",
      "venue": "SoFi Stadium",
      "city": "Inglewood, USA",
      "home": {
        "name": "Türkiye",
        "iso": "tr"
      },
      "away": {
        "name": "USA",
        "iso": "us"
      },
      "teaser": "D组末轮"
    },
    {
      "group": "D",
      "time_beijing_full": "北京时间 6月26日 10:00",
      "venue": "Levi's Stadium",
      "city": "Santa Clara, USA",
      "home": {
        "name": "Paraguay",
        "iso": "py"
      },
      "away": {
        "name": "Australia",
        "iso": "au"
      },
      "teaser": "D组末轮"
    }
  ]
};
