// 今日赛事 — Day 9 (signals enriched)
// Last updated: 2026-06-20T14:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-20T14:00:00+08:00",
  "syncSource": "FIFA 赛程 · Day 11 · weather/injuries/coach/referee enriched · 推演概要+小组形势",
  "breakingNews": [
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m40 · Omar Mohamed Al Ali（阿联酋）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m37 · Espen Eskås（挪威）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m39 · Darío Herrera（阿根廷）",
      "time": "官方确认"
    },
    {
      "tag": "OFFICIAL",
      "text": "✅ FIFA 官方裁判 m38 · Raphael Claus（巴西）",
      "time": "官方确认"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 11 教练分析&冷门预警已纳入（m37–m40）",
      "time": "6月22日"
    },
    {
      "tag": "INJURY",
      "text": "✅ m38 西班牙 0-0 后 Yamal+Pedri 须破局 · 沙特 Renard 5-4-1",
      "time": "6月22日"
    },
    {
      "tag": "INJURY",
      "text": "✅ m37 Vozinha 0-0 西班牙后铁桶 · Bielsa 须破密集",
      "time": "6月22日"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 11 气候预报已更新（m37–m40）",
      "time": "6月22日"
    },
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
    },
    {
      "tag": "PREVIEW",
      "text": "H组：西班牙 0-0 后须破局 · 乌拉圭控球碾压未赢",
      "time": "焦点"
    },
    {
      "tag": "PREVIEW",
      "text": "G组四队均1分 · 比利时伊朗 · 新西兰埃及",
      "time": "焦点"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 昨日：荷5-1瑞 · 德2-1科特 · 厄0-0库 · 突0-4日 · 日本第1000场大胜",
      "time": "赛果回顾"
    }
  ],
  "todayMatches": [
    {
      "id": "m38",
      "group": "H",
      "matchday": 2,
      "date": "2026-06-21",
      "time": "12:00",
      "time_local": "12:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "00:00",
      "date_beijing": "6月22日",
      "time_beijing_full": "北京时间 6月22日 00:00",
      "venue": "Mercedes-Benz Stadium",
      "city": "Atlanta, USA",
      "note": "H组第2轮 · 西班牙 vs 沙特 · 亚特兰大 · FIFA 官方裁判已确认（Raphael Claus）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 5-4-1",
          "home": "Simón; Carvajal, Laporte, Cubarsí, Cucurella; Zubimendi, Pedri, Olmo; Yamal, Morata, Williams",
          "away": "Al-Owais; Al-Breik, Al-Amri, Al-Boleahi, Al-Shahrani; Al-Dawsari, Kanno, Al-Faraj; Al-Shehri, Al-Dawsari, Al-Buraikan",
          "source": "Marca / ESPN 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Spain",
        "iso": "es",
        "flag": "",
        "fifa_rank": 3,
        "rating": 88,
        "form": [
          "D",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Luis de la Fuente",
        "stars": [
          {
            "name": "Lamine Yamal",
            "pos": "RW",
            "club": "Barcelona",
            "desc": "0-0 后须破局",
            "rating": 9
          }
        ],
        "star": {
          "name": "Lamine Yamal",
          "pos": "RW",
          "club": "Barcelona",
          "desc": "0-0 后须破局",
          "rating": 9
        },
        "injuries": [
          {
            "player": "Lamine Yamal",
            "status": "FIT",
            "note": "0-0 佛得角后核心爆点 · 预计首发 RW · de la Fuente 称「必须更早破局」",
            "confirmed": true
          },
          {
            "player": "Pedri",
            "status": "FIT",
            "note": "中场节拍器 · 对沙特铁桶肋部渗透是关键",
            "confirmed": true
          },
          {
            "player": "Dani Olmo",
            "status": "FIT",
            "note": "10 号位/二前锋灵活位 · 0-0 后或比首轮更靠前",
            "confirmed": true
          },
          {
            "player": "Álvaro Morata",
            "status": "FIT",
            "note": "中锋支点 · 对密集防守头球/做球是破局选项",
            "confirmed": true
          },
          {
            "player": "Nico Williams",
            "status": "FIT",
            "note": "左路宽度 · 与 Yamal 双翼是 de la Fuente 破密首选",
            "confirmed": true
          },
          {
            "player": "Unai Simón",
            "status": "FIT",
            "note": "一门 · 对沙特反击须保持防线高度",
            "confirmed": true
          },
          {
            "player": "Fermín López",
            "status": "OUT",
            "note": "右脚骨折整届缺阵 · 中路创造力深度略受影响",
            "confirmed": true
          }
        ],
        "rumors": [
          "de la Fuente（赛前）：「0-0 不可接受过程；对沙特必须 3 分，Yamal+Pedri 要更早进入状态」",
          "H 组四队均 1 分——西班牙再平则出线形势急转；预计最强 4-3-3 而非轮换",
          "Marca/ESPN 预测：Simón; Carvajal, Laporte, Cubarsí, Cucurella; Zubimendi, Pedri, Olmo; Yamal, Morata, N. Williams",
          "更衣室：0-0 佛得角后球员承认「终结效率是问题」，训练强调禁区内最后一传",
          "Claus 巴西组执法：de la Fuente 提醒定位球与早段破局，避免重蹈 0-0"
        ]
      },
      "away": {
        "name": "Saudi Arabia",
        "iso": "sa",
        "flag": "",
        "fifa_rank": 58,
        "rating": 68,
        "form": [
          "D",
          "L",
          "W",
          "D",
          "L"
        ],
        "coach": "Manuel Hervé Renard",
        "stars": [
          {
            "name": "Salem Al-Dawsari",
            "pos": "LW",
            "club": "Al-Hilal",
            "desc": "1-1 乌拉圭后信心",
            "rating": 7.8
          }
        ],
        "star": {
          "name": "Salem Al-Dawsari",
          "pos": "LW",
          "club": "Al-Hilal",
          "desc": "1-1 乌拉圭后信心",
          "rating": 7.8
        },
        "injuries": [
          {
            "player": "Salem Al-Dawsari",
            "status": "FIT",
            "note": "队长/左边锋 · 1-1 乌拉圭全场最威胁 · Renard 反击轴心",
            "confirmed": true
          },
          {
            "player": "Mohammed Al-Owais",
            "status": "FIT",
            "note": "一门 · 2022 世界杯 4 场经验 · 对西班牙须重复对乌拉圭表现",
            "confirmed": true
          },
          {
            "player": "Salman Al-Faraj",
            "status": "FIT",
            "note": "中场组织 · 5-4-1 出球点 · 对西班牙须减少失误",
            "confirmed": true
          },
          {
            "player": "Ali Al-Boleahi",
            "status": "FIT",
            "note": "中卫 · 对 Yamal/Williams 速度的一对一",
            "confirmed": true
          },
          {
            "player": "Firas Al-Buraikan",
            "status": "FIT",
            "note": "锋线支点 · 定位球与反击接应",
            "confirmed": true
          },
          {
            "player": "Abdullah Al-Hamdan",
            "status": "DOUBT",
            "note": "首轮后轻微肌肉疲劳 · 仍可能进入轮换名单",
            "confirmed": false
          }
        ],
        "rumors": [
          "Renard（赛前）：「对西班牙不是对乌拉圭——我们会更低位，但 2022 精神仍在」",
          "预计 5-4-1/5-3-2 极深低位 · Al-Dawsari 留前场反击 · Kanno+Al-Faraj 双闸",
          "1-1 乌拉圭后更衣室士气回升；Renard 强调「对西班牙拿 1 分是巨大成功」",
          "全队仍以国内联赛球员为主 · 硬实力差距大但低位纪律是生存之本",
          "亚特兰大夏午开球 · Renard 训练增加 hydration 与拖延节奏演练"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 1,
        "away_wins": 0,
        "recent": [],
        "note": "西班牙大赛占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-22",
        "name": "Raphael Claus",
        "nation": "Brazil",
        "iso": "br",
        "age": 44,
        "wc_experience": "2022 世界杯第四官员 · 2026 主裁——南美顶级 · 巴甲/解放者杯场均约 25 犯规",
        "avg_yellow": 4.6,
        "avg_red": 0.14,
        "avg_penalty": 0.28,
        "home_win_rate": 49,
        "bias_index": 50,
        "bias_note": "巴西全组执法（Claus+Manis+Figueiredo）。西班牙控球破局 vs Renard 5-4-1 铁桶；对战术犯规、拖延时间容忍度中等，点球尺度相对明确。",
        "tendencies": [
          "巴西助理：Danilo Manis、Rodrigo Figueiredo",
          "第四官员 Andrés Rojas（哥伦比亚）· 候补 Alexander Guzmán（COL）",
          "VAR Andrés Rojas（COL）——部分名单待 FIFA 开球前最终确认",
          "亚特兰大夏午 30°C——领先方后段拖延与战术犯规是黄牌高发点",
          "西班牙 0-0 后须破局；沙特 1-1 乌拉圭低位纪律受考验"
        ],
        "officials": {
          "ar1": "Danilo Manis (BRA)",
          "ar2": "Rodrigo Figueiredo (BRA)",
          "fourth": "Andrés Rojas (COL)",
          "var": "Andrés Rojas (COL)",
          "reserve_ar": "Alexander Guzmán (COL)"
        },
        "fifa_match_id": "400021483",
        "fifa_official_id": "416158",
        "updated": "2026-06-21T12:25:40+08:00"
      },
      "prediction": {
        "home_win": 76,
        "draw": 16,
        "away_win": 8,
        "score": "2-0",
        "confidence": 78,
        "xg_home": 2.25,
        "xg_away": 0.62,
        "key_factor": "H组：西班牙 0-0 佛得角效率归零后须取胜 · 沙特 1-1 乌拉圭低位顽强 · Yamal+Pedri vs Renard 铁桶 · 泊松 2-0/1-0",
        "score_dist": [
          {
            "score": "2-0",
            "prob": 14.4
          },
          {
            "score": "1-0",
            "prob": 12.8
          },
          {
            "score": "3-0",
            "prob": 10.8
          },
          {
            "score": "2-1",
            "prob": 8.9
          },
          {
            "score": "1-1",
            "prob": 7.9
          },
          {
            "score": "3-1",
            "prob": 6.7
          },
          {
            "score": "4-0",
            "prob": 6.1
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Spain 暂列 H 组第 3（1 分 · 已赛 1 场） vs Saudi Arabia 第 1（1 分 · 已赛 1 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "亚特兰大夏午闷热 · 30°C · 湿度 65% · 降雨概率 25% · 东南风 2级；湿热中等——领先方后段体能与专注度关键"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "H组：西班牙 0-0 佛得角效率归零后须取胜 · 沙特 1-1 乌拉圭低位顽强 · Yamal+Pedri vs Renard 铁桶 · 泊松 2-0/1-0"
          }
        ],
        "base_home_win": 73.8,
        "base_draw": 17.3,
        "base_away_win": 8.9,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": true,
          "closeXg": false,
          "gap": 1.63,
          "notes": []
        }
      },
      "weather": {
        "city": "亚特兰大",
        "country": "美国",
        "venue": "Mercedes-Benz Stadium",
        "temp": 30,
        "humidity": 65,
        "rain_chance": 25,
        "wind": "东南风 2级",
        "condition_cn": "亚特兰大夏午闷热",
        "impact_level": "MEDIUM",
        "impact": "封闭球场但午间开球仍偏热；西班牙须早破局避免重蹈 0-0",
        "impact_summary": "湿热中等——领先方后段体能与专注度关键",
        "home_adapt": 86,
        "away_adapt": 80,
        "historical_note": "Mercedes-Benz · H组第2轮 · 预报 2026-06-22 06:00 本地",
        "forecast_updated": "2026-06-22 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "辛卯日",
          "day_summary": "辛卯日——金木相战，热门宜早破局；忌领先后松懈。",
          "hour_home": "见各场开球时辰",
          "hour_home_element": "木"
        },
        "wuxing": {
          "home": {
            "team": "",
            "verdict": "待定",
            "verdict_color": "#C8A96E",
            "wuxing_short": "待观",
            "reason": "赛前五行随队服与开球时辰而定",
            "advantage": ""
          },
          "away": {
            "team": "",
            "verdict": "待定",
            "verdict_color": "#C8A96E",
            "wuxing_short": "待观",
            "reason": "赛前五行随队服与开球时辰而定",
            "disadvantage": ""
          },
          "summary": "文化解读 · 正式推演见各场详情"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "开赛前结合时辰与阵容再行解读。",
          "scenarios": []
        },
        "home_score": 72,
        "away_score": 28,
        "mystic_verdict": "西班牙火金旺，沙特水土守；亚特兰大午火，宜上半场破局。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1.75,
        "tier_label": "Spain 被看好 · 净胜约 1.5–2 球",
        "implied_tier": 1.25,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Spain（约 82%）",
        "analysis": "西班牙 0-0 后深盘；沙特 1-1 低位但 xG 差大，市场仍看主队穿档。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "2-0",
              "prob": 14.8
            },
            {
              "score": "1-0",
              "prob": 13.1
            },
            {
              "score": "3-0",
              "prob": 11.1
            }
          ],
          "one_goal_win_pct": 24.7,
          "two_plus_win_pct": 49.2,
          "full_cover_pct": 49.2,
          "half_cover_pct": 24.7,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "部分达标净胜=1",
          "fav_cover_ev": 0.23,
          "dog_cover_ev": -0.23,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 2.87,
          "fair_totals_line": 2,
          "over_2_5_pct": 53.4,
          "over_3_pct": 30.5,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥2 约 49.2%；部分达标净胜=1 约 24.7%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.87,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 41.9,
          "under_pct": 58.1,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 2.75 约 58.1% 难达）",
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
          "home_win": 76,
          "draw": 16,
          "away_win": 8
        },
        "display_summary": {
          "fav_name": "Spain",
          "expected_total_goals": 2.42,
          "poisson_fav_win_pct": 69.5,
          "small_lead_pct": 26.8,
          "small_example_score": "1-0",
          "small_example_pct": 16.3,
          "big_cover_pct": 42.8,
          "big_example_score": "2-0",
          "big_example_pct": 15.7,
          "win_shape": {
            "fav_name": "Spain",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 36.9%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 16.3,
                "pct": 23.4
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.5,
                "pct": 15.1
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 25.7,
                "pct": 36.9
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 17.1,
                "pct": 24.6
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 38.5
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 36.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24.6
              }
            ],
            "fav_win_pct": 76
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 36.3 分",
            "first_goal_wait": 36.3,
            "fast_pct": 56.2,
            "moderate_pct": 14.8,
            "slow_pct": 28.9,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 56.2
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 28.9
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Spain：Fermín López 缺阵 · Saudi Arabia：Abdullah Al-Hamdan 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "继续宽度 / 5-5 铁桶（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "湿热中等——领先方后段体能与专注度关键"
            }
          ],
          "xg_context": {
            "baseline_home": 2.25,
            "baseline_away": 0.62,
            "adjusted_home": 1.92,
            "adjusted_away": 0.56,
            "note": "基准 xG 2.25–0.62 → 调整后 1.92–0.56"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "Spain 被看好 · 净胜约 1–2 球",
            "market_tier_label": "Spain 被看好 · 净胜约 1.5–2 球",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5 · 部分达标净胜=1 约 26.8%"
          },
          "win_outlook": {
            "fav_name": "Spain",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 38.5
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 36.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24.6
              }
            ],
            "margin_line_cn": "Spain · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
            "margin_meet_pct": 42.8,
            "margin_half_pct": 26.8,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "部分达标净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.48,
            "totals_line_gap": 0.75,
            "totals_high_pct": 33.5,
            "totals_low_pct": 66.5,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 32,
            "win_margin2_low_total_pct": 15.7,
            "win_margin2_high_total_pct": 27.1,
            "readout_cn": "取胜约 76%；若取胜，以「险胜收工」为主（38.5%）。 对着赛前净胜参考，净胜≥2（全达标）约 42.8%；部分达标净胜=1 约 26.8%；对着总进球参考 2.75，模型超线概率约 33.5%。 2-0 类：净胜扩大但总进球仍可能低于总进球参考 2.75。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 16.3
            },
            {
              "score": "2-0",
              "pct": 15.7
            },
            {
              "score": "3-0",
              "pct": 10
            }
          ],
          "totals_view": {
            "expected_total": 2.4,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 33.5,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 34,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 33.5,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.4 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Spain · 净胜走向：有达标可能",
            "sub_cn": "达标概率约 42.8% · 有达标可能 进球氛围：略偏闷",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Spain",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 42.8,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "有达标可能",
              "headline_cn": "Spain · 净胜走向：有达标可能",
              "pill_cn": "达标概率约 42.8% · 有达标可能",
              "detail_cn": "Spain · 赛前外界预期 净胜≥2。模型推演达标概率约 42.8%；有一定达标空间，但非高把握（部分达标净胜=1 约 26.8%）。",
              "extra_stats_cn": "部分达标净胜=1 约 26.8%",
              "full_cover_pct": 42.8,
              "half_cover_pct": 26.8,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "部分达标净胜=1",
              "tier_gap": 0.5,
              "show_cover": true
            },
            "totals": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 34,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 33.5,
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
                  "level": "possible",
                  "label_cn": "有达标可能",
                  "color": "#C8A96E",
                  "fav_name": "Spain",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 42.8,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Spain · 净胜走向：有达标可能",
                  "pill_cn": "达标概率约 42.8% · 有达标可能",
                  "detail_cn": "Spain · 赛前外界预期 净胜≥2。模型推演达标概率约 42.8%；有一定达标空间，但非高把握（部分达标净胜=1 约 26.8%）。",
                  "extra_stats_cn": "部分达标净胜=1 约 26.8%",
                  "full_cover_pct": 42.8,
                  "half_cover_pct": 26.8,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "部分达标净胜=1",
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "达标概率约 42.8% · 有达标可能",
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
                  "meter_pos": 34,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 33.5,
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
              "team": "Spain",
              "first_goal_pct": 77.4,
              "start_score": "1-0",
              "fav_name": "Spain",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 98.2,
              "small_lead_pct": 31.2,
              "big_lead_pct": 57.4,
              "fav_win_pct": 88.6,
              "fav_draw_pct": 9.6,
              "fav_lose_pct": 1.9,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Spain 保持胜果（净胜≥1）",
                  "pct": 88.6
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 9.6
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 1.9
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
              "big_delta": 14.6,
              "small_delta": 4.4,
              "narrative": "Spain 先破门（已 1-0） → 「继续宽度」；Saudi Arabia 「维持低位」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "Spain",
                "state_label": "Spain 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 38.5
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 36.9
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 24.6
                  }
                ],
                "margin_line_cn": "Spain · 赛前净胜参考 净胜≥2（全达标） · 部分达标净胜=1",
                "margin_meet_pct": 57.4,
                "margin_half_pct": 31.2,
                "margin_fail_pct": 31.2,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "部分达标净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.57,
                "totals_line_gap": 0.5,
                "totals_high_pct": 33.5,
                "totals_low_pct": 66.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 46,
                "win_margin2_low_total_pct": 25,
                "win_margin2_high_total_pct": 32.3,
                "readout_cn": "Spain 已 1-0 领先：仍取胜约 88.6%。 对着总进球参考 2.75，模型超线概率约 33.5%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Saudi Arabia",
              "first_goal_pct": 22.6,
              "start_score": "0-1",
              "fav_name": "Spain",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 59.9,
              "small_lead_pct": 18.4,
              "big_lead_pct": 10.3,
              "fav_win_pct": 28.7,
              "fav_draw_pct": 31.2,
              "fav_lose_pct": 40.1,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Spain 追平（平局）",
                  "pct": 31.2
                },
                {
                  "key": "win1",
                  "label": "Spain 净胜1球翻盘（如 2-1）",
                  "pct": 18.4
                },
                {
                  "key": "win2",
                  "label": "Spain 净胜≥2球翻盘（如 3-1）",
                  "pct": 10.3
                },
                {
                  "key": "upset_hold",
                  "label": "Saudi Arabia 保持胜果至终场",
                  "pct": 40.1
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 45.7 分",
                "first_goal_wait": 45.7,
                "fast_pct": 41.6,
                "moderate_pct": 13.8,
                "slow_pct": 44.6,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 41.6
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 44.6
                  }
                ]
              },
              "big_delta": -32.5,
              "small_delta": -8.4,
              "narrative": "Saudi Arabia 先破门（已 0-1） → 「5-5 铁桶」；Spain 「堆边锋」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.4 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 33.5,
              "type_tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                },
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 12,
              "readout_cn": "Spain · 压制局 · 低位反击。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 12% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "dominance",
                  "label": "压制局"
                },
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 12,
              "fav_lead_style": "defensive"
            }
          }
        },
        "public_summary_note": "【推演概要】Spain · 压制局 · 低位反击。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5 · 部分达标净胜=1 约 26.8%（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.87,
          "xg_gap": 1.63,
          "xg_home": 2.25,
          "xg_away": 0.62,
          "xg_baseline_home": 2.25,
          "xg_baseline_away": 0.62,
          "xg_note": "结构推演用基准 xG 2.25–0.62（进球氛围用调整后 1.92–0.56）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Spain",
          "dog_name": "Saudi Arabia",
          "fav_xg": 2.25,
          "dog_xg": 0.62,
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
          "prob_over_line": 41.9,
          "prob_meet_guess": 53.4,
          "guess_n": 3,
          "prob_4_plus": 30.5,
          "prob_2_or_less": 46.6,
          "totals_line": 2.75,
          "scenarios": [
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 74
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 11
            },
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 8
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 8
            }
          ],
          "tags": [
            {
              "key": "dog_weak",
              "label": "弱队难进球",
              "color": "#6B8FA3",
              "bg": "rgba(107,143,163,0.1)"
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
            "弱队 xG 偏低——哑火则难破 3 球",
            "xG 差≥1.0——样本多为小比分"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 2.87 · Spain 2.25 / Saudi Arabia 0.62 → 主路径「铁局/小比分」约 74%。 至少 3 球约 53.4% · 超 2.75 约 41.9% · ≤2球 46.6%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "H",
        "label": "H组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Saudi Arabia",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Uruguay",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Spain",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 0,
            "ga": 0
          },
          {
            "team": "Cape Verde",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 0,
            "ga": 0
          }
        ],
        "home": {
          "team": "Spain",
          "rank": 3,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M84 · H 组第 1 vs J 组第 2 → 当前 J 组第 2倾向 Austria",
          "if_1st_r16": "16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者",
          "if_1st_corridor": "西班牙头名 → 16 强或遇 K/L 次席",
          "if_2nd": "32强 M86 · J 组第 1 vs H 组第 2 → 当前 J 组第 1倾向 Argentina（强队）",
          "if_2nd_r16": "16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者",
          "if_2nd_corridor": "沙特/佛得角次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/F/G/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Saudi Arabia",
          "rank": 1,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M84 · H 组第 1 vs J 组第 2 → 当前 J 组第 2倾向 Austria",
          "if_1st_r16": "16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者",
          "if_1st_corridor": "西班牙头名 → 16 强或遇 K/L 次席",
          "if_2nd": "32强 M86 · J 组第 1 vs H 组第 2 → 当前 J 组第 1倾向 Argentina（强队）",
          "if_2nd_r16": "16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者",
          "if_2nd_corridor": "沙特/佛得角次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/F/G/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "J 组：头名 Argentina 3 分 · 次席 Austria 同分（32强绑定组）",
          "G 组：头名 Iran 1 分 · 次席 New Zealand 同分（32强绑定组）",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 Norway 3 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "H 组与 J 组绑定；头名次席决定 32 强对位。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "暂无明确控分动机；出线后 32 强/16 强路径见下方绑定组预判。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Spain 若取胜：积分 4，H 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Saudi Arabia 若取胜：积分 4，客场抢分将改变 H 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 J 组：头名 Argentina 3 分 · 次席 Austria 同分（32强绑定组） · G 组：头名 Iran 1 分 · 次席 New Zealand 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：H 组与 J 组绑定；头名次席决定 32 强对位。"
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Luis de la Fuente",
          "age": 63,
          "nation": "西班牙",
          "tenure": "2022年—",
          "wc_exp": "2024 欧洲杯冠军 · 2026 带队",
          "style_tags": [
            "4-3-3",
            "传控",
            "Yamal 宽度",
            "Pedri 节拍"
          ],
          "formation_pref": "4-3-3 · Olmo 10 号位",
          "style_summary": "0-0 佛得角后 H 组形势急转；de la Fuente 预计最强 XI，Yamal+Pedri 肋部破局 vs Renard 5-4-1 铁桶。",
          "subs": {
            "timing": "首换 55–60 分钟",
            "pattern": "Morata/Oyarzabal 互替；70' 换 Zubimendi 控场",
            "avg_first_sub": "58'",
            "note": "0-0 后换人会更早"
          },
          "when_leading": {
            "label": "继续宽度",
            "detail": "1 球领先：维持 4-3-3，不早退；2 球+：65' 轮换。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：55' 加 Morata/额外边锋。"
          },
          "vs_strong": {
            "label": "对强队：传控对攻",
            "detail": "对乌拉圭会高位对攻。"
          },
          "vs_weak": {
            "label": "对弱队：必须穿盘",
            "detail": "对沙特仍须 3 分，xG 2.25 须兑现。"
          },
          "tournament": "欧洲杯冠军班底；0-0 佛得角是本届最大意外之一。",
          "traits": [
            "Yamal 核心",
            "必须取胜",
            "破密集",
            "终结效率"
          ],
          "match_note": "0-0 后须 3 分——Yamal+Pedri 肋部 vs Renard 5-4-1；亚特兰大夏午宜早破局。"
        },
        "away": {
          "name": "Manuel Hervé Renard",
          "age": 56,
          "nation": "法国/沙特",
          "tenure": "2024年—",
          "wc_exp": "2012/2015 非洲杯冠军 · 2022 沙特带队",
          "style_tags": [
            "5-4-1",
            "低位",
            "Al-Dawsari 反击",
            "2022 DNA"
          ],
          "formation_pref": "5-4-1 · Al-Owais 一门",
          "style_summary": "1-1 乌拉圭后信心回升；对西班牙 Renard 预计更低位，Al-Dawsari 反击 + 定位球偷分是唯一路径。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "Al-Buraikan/Al-Shehri 后手",
            "avg_first_sub": "68'",
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
            "detail": "对西班牙教科书 5-4-1。"
          },
          "vs_weak": {
            "label": "不适用",
            "detail": "H 组无弱于沙特的对手。"
          },
          "tournament": "2022 对阿根廷 2-1 仍是心理资产；Renard 大赛低位经验足。",
          "traits": [
            "极深低位",
            "Al-Dawsari",
            "2022 DNA",
            "偷分动机"
          ],
          "match_note": "1-1 乌拉圭后更低位；Al-Dawsari 反击 + 2022 DNA，1 分即是胜利。"
        }
      },
      "upset_alert": {
        "favorite": "Spain",
        "underdog": "Saudi Arabia",
        "favorite_iso": "ESP",
        "index": 18,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 12,
        "verdict": "西班牙 0-0 佛得角后深盘——Renard 5-4-1 + Al-Dawsari 反击使平局/冷胜空间约 12%。",
        "tactical": "de la Fuente 4-3-3 控球 vs Renard 5-4-1；Yamal 肋部破局是关键。",
        "psychology": "西班牙「必须 3 分」；沙特「2022 精神 + 1-1 乌拉圭信心」。",
        "historical": "大赛西班牙占优；沙特 2022 对阿根廷仍是心理资产。",
        "factors": [
          {
            "tag": "铁桶",
            "impact": "强",
            "detail": "Renard 5-4-1 极守"
          },
          {
            "tag": "0-0",
            "impact": "强",
            "detail": "西班牙终结效率成疑"
          },
          {
            "tag": "气候",
            "impact": "中",
            "detail": "亚特兰大 30°C 夏午"
          }
        ]
      }
    },
    {
      "id": "m39",
      "group": "G",
      "matchday": 2,
      "date": "2026-06-21",
      "time": "15:00",
      "time_local": "12:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "03:00",
      "date_beijing": "6月22日",
      "time_beijing_full": "北京时间 6月22日 03:00",
      "venue": "SoFi Stadium",
      "city": "Inglewood, USA",
      "note": "G组第2轮 · 比利时 vs 伊朗 · 洛杉矶 · FIFA 官方裁判已确认（Darío Herrera）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "3-4-2-1 / 4-1-4-1",
          "home": "Casteels; De Cuyper, Theate, De Bast, Castagne; Tielemans, Onana; Doku, De Bruyne, Trossard; Lukaku",
          "away": "Beiranvand; Rezaeian, Hosseini, Kanani, Mohammadi; Ezatolahi, Nourollahi; Jahanbakhsh, Ghoddos, Taremi; Azmoun",
          "source": "Het Laatste Nieuws / ESPN 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Belgium",
        "iso": "be",
        "flag": "",
        "fifa_rank": 4,
        "rating": 85,
        "form": [
          "D",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Domenico Tedesco",
        "stars": [
          {
            "name": "Kevin De Bruyne",
            "pos": "CAM",
            "club": "Man City",
            "desc": "1-1 埃及后须主导",
            "rating": 8.8
          }
        ],
        "star": {
          "name": "Kevin De Bruyne",
          "pos": "CAM",
          "club": "Man City",
          "desc": "1-1 埃及后须主导",
          "rating": 8.8
        },
        "injuries": [
          {
            "player": "Kevin De Bruyne",
            "status": "FIT",
            "note": "队长/前腰 · 1-1 埃及后须主导 G 组乱局",
            "confirmed": true
          },
          {
            "player": "Jeremy Doku",
            "status": "FIT",
            "note": "左路爆点 · 对伊朗 Rezaeian 侧是突破口",
            "confirmed": true
          },
          {
            "player": "Romelu Lukaku",
            "status": "FIT",
            "note": "中锋 · 1-1 埃及后预计首发 · 支点+终结",
            "confirmed": true
          },
          {
            "player": "Koen Casteels",
            "status": "FIT",
            "note": "一门 · 对 Taremi 背身与定位球须警惕",
            "confirmed": true
          },
          {
            "player": "Amadou Onana",
            "status": "FIT",
            "note": "后腰屏障 · 限制 Ezatolahi+Taremi 连线",
            "confirmed": true
          },
          {
            "player": "Zeno Debast",
            "status": "OUT",
            "note": "大腿伤 · 世界杯前期无法出场 · 中卫深度受损",
            "confirmed": true
          },
          {
            "player": "Arthur Theate",
            "status": "FIT",
            "note": "三中卫体系中卫 · Tedesco 3-4-2-1 关键",
            "confirmed": true
          }
        ],
        "rumors": [
          "Tedesco（赛前）：「G 组没人有优势；对伊朗必须拿 3 分，De Bruyne 要在肋部拿球」",
          "Het Laatste Nieuws 预测 3-4-2-1：Casteels; De Cuyper, Theate, De Bast, Castagne; Tielemans, Onana; Doku, De Bruyne, Trossard; Lukaku",
          "1-1 埃及后更衣室：Tedesco 称「过程 OK 结果不够」——本场预计比首轮更激进",
          "G 组四队均 1 分 · 平局对比利时仍被动 · Herrera 阿根廷主裁尺度偏严",
          "伊朗 2-2 新西兰进攻回暖 · Onana+Tielemans 屏障是防守轴心"
        ]
      },
      "away": {
        "name": "Iran",
        "iso": "ir",
        "flag": "",
        "fifa_rank": 22,
        "rating": 76,
        "form": [
          "D",
          "D",
          "W",
          "L",
          "W"
        ],
        "coach": "Amir Ghalenoei",
        "stars": [
          {
            "name": "Mehdi Taremi",
            "pos": "ST",
            "club": "Inter",
            "desc": "2-2 新西兰后士气",
            "rating": 8.1
          }
        ],
        "star": {
          "name": "Mehdi Taremi",
          "pos": "ST",
          "club": "Inter",
          "desc": "2-2 新西兰后士气",
          "rating": 8.1
        },
        "injuries": [
          {
            "player": "Mehdi Taremi",
            "status": "FIT",
            "note": "队长/中锋 · 2-2 新西兰破门 · 进攻唯一世界级支点",
            "confirmed": true
          },
          {
            "player": "Alireza Beiranvand",
            "status": "FIT",
            "note": "一门 · 对 Doku 速度须保持防线深度",
            "confirmed": true
          },
          {
            "player": "Saeid Ezatolahi",
            "status": "FIT",
            "note": "后腰屏障 · 预选赛 10 零封 DNA 仍在",
            "confirmed": true
          },
          {
            "player": "Alireza Jahanbakhsh",
            "status": "FIT",
            "note": "右路宽度 · 对 Castagne/De Cuyper 侧反击",
            "confirmed": true
          },
          {
            "player": "Sardar Azmoun",
            "status": "OUT",
            "note": "未进 26 人名单（非伤病）· Taremi 单核锋线",
            "confirmed": true
          },
          {
            "player": "Ehsan Hajsafi",
            "status": "FIT",
            "note": "左后卫/队长副 · 世界杯出场纪录追逐者",
            "confirmed": true
          }
        ],
        "rumors": [
          "Ghalenoei（赛前）：「2-2 新西兰证明进攻可以；对比利时我们不怕对攻，但纪律第一」",
          "预计 4-1-4-1/4-4-2 · Taremi 背身 · Ezatolahi 屏障 · Jahanbakhsh+Ghoddos 宽度",
          "伊朗基地跨境至洛杉矶 · 国内联赛长期停摆后状态仍是隐忧，但 2-2 提振士气",
          "无 Azmoun 后 Taremi 压力更大 · 定位球是伊朗传统破局手段",
          "Herrera 执法：Ghalenoei 提醒球员注意转换犯规与模拟接触"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 0,
        "away_wins": 0,
        "recent": [],
        "note": "友谊赛比利时略优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-22",
        "name": "Darío Herrera",
        "nation": "Argentina",
        "iso": "ar",
        "age": 42,
        "wc_experience": "2026 世界杯主裁 · 阿根廷顶级 · 南美 WCQ/解放者杯执法 · 身体对抗判罚果断",
        "avg_yellow": 5,
        "avg_red": 0.16,
        "avg_penalty": 0.32,
        "home_win_rate": 51,
        "bias_index": 52,
        "bias_note": "阿根廷组执法 G 组均分乱局。Doku/KDB 肋部 vs Taremi/Ezatolahi 屏障；对身体对抗与模拟接触尺度受关注，预计 4–5 张黄牌。",
        "tendencies": [
          "阿根廷助理：Cristian Navarro、Gabriel Chade",
          "第四官员 Yusuke Araki（日本）· 候补 Jun Mihara（JPN）",
          "VAR/AVAR 待 FIFA 开球前完整公布",
          "SoFi 封闭球场气候影响低——判罚节奏与转换犯规是焦点",
          "G 组四队均 1 分，平局对双方均可接受但比利时更须 3 分"
        ],
        "officials": {
          "ar1": "Cristian Navarro (ARG)",
          "ar2": "Gabriel Chade (ARG)",
          "fourth": "Yusuke Araki (JPN)",
          "reserve_ar": "Jun Mihara (JPN)"
        },
        "fifa_match_id": "400021477",
        "fifa_official_id": "328496",
        "updated": "2026-06-21T12:25:40+08:00"
      },
      "prediction": {
        "home_win": 52,
        "draw": 23,
        "away_win": 25,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.92,
        "xg_away": 1.05,
        "key_factor": "G组均分乱局：比利时 1-1 埃及效率一般 · 伊朗 2-2 新西兰进攻回暖 · Doku+KDB vs Taremi · 1-1/2-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 10.3
          },
          {
            "score": "2-1",
            "prob": 9.9
          },
          {
            "score": "1-0",
            "prob": 9.9
          },
          {
            "score": "2-0",
            "prob": 9.5
          },
          {
            "score": "3-1",
            "prob": 6.4
          },
          {
            "score": "3-0",
            "prob": 6.1
          },
          {
            "score": "1-2",
            "prob": 5.4
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Belgium 暂列 G 组第 3（1 分 · 已赛 1 场） vs Iran 第 1（1 分 · 已赛 1 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "洛杉矶温和 · 26°C · 湿度 55% · 降雨概率 5% · 海风 2级；气候影响低"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "G组均分乱局：比利时 1-1 埃及效率一般 · 伊朗 2-2 新西兰进攻回暖 · Doku+KDB vs Taremi · 1-1/2-1"
          }
        ],
        "base_home_win": 57.1,
        "base_draw": 22.3,
        "base_away_win": 20.6,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 0,
          "ironBucket": true,
          "closeXg": false,
          "gap": 0.87,
          "notes": []
        }
      },
      "weather": {
        "city": "洛杉矶",
        "country": "美国",
        "venue": "SoFi Stadium",
        "temp": 26,
        "humidity": 55,
        "rain_chance": 5,
        "wind": "海风 2级",
        "condition_cn": "洛杉矶温和",
        "impact_level": "LOW",
        "impact": "气候对比赛影响低；G组均分乱局更看战术",
        "impact_summary": "气候影响低",
        "home_adapt": 84,
        "away_adapt": 82,
        "historical_note": "SoFi · G组第2轮 · 预报 2026-06-22 06:00 本地",
        "forecast_updated": "2026-06-22 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "辛卯日",
          "day_summary": "辛卯日——金木相战，热门宜早破局；忌领先后松懈。",
          "hour_home": "见各场开球时辰",
          "hour_home_element": "木"
        },
        "wuxing": {
          "home": {
            "team": "",
            "verdict": "待定",
            "verdict_color": "#C8A96E",
            "wuxing_short": "待观",
            "reason": "赛前五行随队服与开球时辰而定",
            "advantage": ""
          },
          "away": {
            "team": "",
            "verdict": "待定",
            "verdict_color": "#C8A96E",
            "wuxing_short": "待观",
            "reason": "赛前五行随队服与开球时辰而定",
            "disadvantage": ""
          },
          "summary": "文化解读 · 正式推演见各场详情"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "开赛前结合时辰与阵容再行解读。",
          "scenarios": []
        },
        "home_score": 58,
        "away_score": 42,
        "mystic_verdict": "比利时金水相济，伊朗火土守中；G组四队均1分，宜稳。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1.25,
        "tier_label": "Belgium 被看好 · 净胜约 1–2 球",
        "implied_tier": 0.25,
        "tier_gap": 1,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Belgium（约 58%）",
        "analysis": "即时：比利时 -1/1.5（-1.25）比 0.98 / 伊 0.91 / 大小 2.5/3（2.75）大 1.07 小 0.81；较初盘 -0.75 升档，大小升线后小球侧更热。 赛前净胜参考高于 xG 隐含（+1），且净胜 1 球占 24.1%——热门净胜拉开偏难。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 10.5
            },
            {
              "score": "2-1",
              "prob": 10.1
            },
            {
              "score": "1-0",
              "prob": 10
            }
          ],
          "one_goal_win_pct": 24.1,
          "two_plus_win_pct": 33,
          "full_cover_pct": 33,
          "half_cover_pct": 0,
          "half_lose_pct": 24.1,
          "push_pct": null,
          "margin_full_label": "净胜≥2",
          "margin_half_label": null,
          "fav_cover_ev": -0.219,
          "dog_cover_ev": 0.219,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.97,
          "fair_totals_line": 2.75,
          "over_2_5_pct": 56.4,
          "over_3_pct": 33.6,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 24.1%：常见「赢球但净胜仅 1 球」"
        },
        "spread_odds": {
          "fav": 0.98,
          "dog": 0.91,
          "note": "Belgium 0.98 · Iran 0.91"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.97,
          "fair_line": 2.75,
          "line_gap": 0,
          "over_pct": 45,
          "under_pct": 55,
          "signal": "aligned",
          "signal_cn": "线与模型贴合",
          "signal_color": "#5BBF8A",
          "signal_desc": "总进球参考与合理值接近。",
          "public_over_pct": 38,
          "public_lean_cn": "舆论略看好少进球（约 62%）",
          "index_note": "大比分侧 1.07 / 小比分侧 0.81 · 小比分侧更热 · 录入 2.5→2.75",
          "totals_odds": {
            "over": 1.07,
            "under": 0.81,
            "note": "大比分 1.07 · 小比分 0.81"
          },
          "rational_cn": "超 2.75 球接近五五开（约 45%）",
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
          "home_win": 52,
          "draw": 23,
          "away_win": 25
        },
        "display_summary": {
          "fav_name": "Belgium",
          "expected_total_goals": 2.53,
          "poisson_fav_win_pct": 54,
          "small_lead_pct": 25.2,
          "small_example_score": "1-0",
          "small_example_pct": 12.8,
          "big_cover_pct": 28.9,
          "big_example_score": "2-0",
          "big_example_pct": 10.5,
          "win_shape": {
            "fav_name": "Belgium",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 30%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 12.8,
                "pct": 23.6
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.4,
                "pct": 22.9
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 16.2,
                "pct": 30
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 12.7,
                "pct": 23.5
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 46.5
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 30
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 23.5
              }
            ],
            "fav_win_pct": 52
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 35.2 分",
            "first_goal_wait": 35.2,
            "fast_pct": 57.4,
            "moderate_pct": 14.8,
            "slow_pct": 27.8,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 57.4
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 27.8
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Belgium：Zeno Debast 缺阵 · Iran：Sardar Azmoun 缺阵"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "继续进攻 / 4-5-1 收缩（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "气候影响低"
            }
          ],
          "xg_context": {
            "baseline_home": 1.92,
            "baseline_away": 1.05,
            "adjusted_home": 1.64,
            "adjusted_away": 0.92,
            "note": "基准 xG 1.92–1.05 → 调整后 1.64–0.92"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 1,
            "implied_tier_label": "Belgium 被看好 · 净胜约 0.25 球",
            "market_tier_label": "Belgium 被看好 · 净胜约 1–2 球",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 1 · 模型认为仅小胜 1 球仍约 25.2%"
          },
          "win_outlook": {
            "fav_name": "Belgium",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 46.5
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 30
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 23.5
              }
            ],
            "margin_line_cn": "Belgium · 赛前净胜参考 净胜≥2（全达标）",
            "margin_meet_pct": 28.9,
            "margin_half_pct": 0,
            "margin_fail_pct": 25.2,
            "margin_full_label": "净胜≥2",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.75,
            "totals_line_cn": "总进球参考 2.75",
            "fair_totals_line": 2,
            "model_total_xg": 2.56,
            "totals_line_gap": 0.75,
            "totals_high_pct": 35.9,
            "totals_low_pct": 64.1,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 23.2,
            "win_margin2_low_total_pct": 10.5,
            "win_margin2_high_total_pct": 18.4,
            "readout_cn": "取胜约 52%；若取胜，以「险胜收工」为主（46.5%）。 对着赛前净胜参考，净胜≥2（全达标）约 28.9%；对着总进球参考 2.75，模型超线概率约 35.9%。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 12.8
            },
            {
              "score": "1-1",
              "pct": 11.7
            },
            {
              "score": "2-0",
              "pct": 10.5
            }
          ],
          "totals_view": {
            "expected_total": 2.5,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 35.9,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 36,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 35.9,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.5 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Belgium · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 28.9% · 达到预期难度偏大 进球氛围：略偏闷",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "Belgium",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 28.9,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "Belgium · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 28.9% · 达到预期难度偏大",
              "detail_cn": "Belgium · 赛前外界预期 净胜≥2。模型推演达标概率约 28.9%；外界看法高于 xG 隐含约 1 球，达到预期难度偏大（仅胜 1 球约 25.2%）。",
              "extra_stats_cn": "仅胜 1 球约 25.2%",
              "full_cover_pct": 28.9,
              "half_cover_pct": 0,
              "lose1_pct": 25.2,
              "margin_full_label": "净胜≥2",
              "margin_half_label": null,
              "tier_gap": 1,
              "show_cover": true
            },
            "totals": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 36,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 35.9,
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
                  "fav_name": "Belgium",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 28.9,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "Belgium · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 28.9% · 达到预期难度偏大",
                  "detail_cn": "Belgium · 赛前外界预期 净胜≥2。模型推演达标概率约 28.9%；外界看法高于 xG 隐含约 1 球，达到预期难度偏大（仅胜 1 球约 25.2%）。",
                  "extra_stats_cn": "仅胜 1 球约 25.2%",
                  "full_cover_pct": 28.9,
                  "half_cover_pct": 0,
                  "lose1_pct": 25.2,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": null,
                  "tier_gap": 1,
                  "show_cover": true
                },
                "text": "达标概率约 28.9% · 达到预期难度偏大",
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
                  "meter_pos": 36,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
                  "pill_cn": "略偏闷（弱）",
                  "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
                  "headline_cn": "进球氛围：略偏闷",
                  "show_lean": false,
                  "over_pct": 35.9,
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
              "team": "Belgium",
              "first_goal_pct": 64.1,
              "start_score": "1-0",
              "fav_name": "Belgium",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 94.6,
              "small_lead_pct": 33.8,
              "big_lead_pct": 44.9,
              "fav_win_pct": 78.6,
              "fav_draw_pct": 16,
              "fav_lose_pct": 5.4,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Belgium 保持胜果（净胜≥1）",
                  "pct": 78.6
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 16
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 5.4
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 45.2 分",
                "first_goal_wait": 45.2,
                "fast_pct": 42,
                "moderate_pct": 13.8,
                "slow_pct": 44.2,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 42
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 44.2
                  }
                ]
              },
              "big_delta": 16,
              "small_delta": 8.6,
              "narrative": "Belgium 先破门（已 1-0） → 「继续进攻」；Iran 「堆前锋」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "Belgium",
                "state_label": "Belgium 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 46.5
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 30
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 23.5
                  }
                ],
                "margin_line_cn": "Belgium · 赛前净胜参考 净胜≥2（全达标）",
                "margin_meet_pct": 44.9,
                "margin_half_pct": 0,
                "margin_fail_pct": 33.8,
                "margin_full_label": "净胜≥2",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.63,
                "totals_line_gap": 0.5,
                "totals_high_pct": 35.5,
                "totals_low_pct": 64.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 39.6,
                "win_margin2_low_total_pct": 20.1,
                "win_margin2_high_total_pct": 24.8,
                "readout_cn": "Belgium 已 1-0 领先：仍取胜约 78.6%。 对着总进球参考 2.75，模型超线概率约 35.5%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Iran",
              "first_goal_pct": 35.9,
              "start_score": "0-1",
              "fav_name": "Belgium",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 47.7,
              "small_lead_pct": 13.7,
              "big_lead_pct": 6.2,
              "fav_win_pct": 19.9,
              "fav_draw_pct": 27.8,
              "fav_lose_pct": 52.3,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Belgium 追平（平局）",
                  "pct": 27.8
                },
                {
                  "key": "win1",
                  "label": "Belgium 净胜1球翻盘（如 2-1）",
                  "pct": 13.7
                },
                {
                  "key": "win2",
                  "label": "Belgium 净胜≥2球翻盘（如 3-1）",
                  "pct": 6.2
                },
                {
                  "key": "upset_hold",
                  "label": "Iran 保持胜果至终场",
                  "pct": 52.3
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
              "big_delta": -22.7,
              "small_delta": -11.5,
              "narrative": "Iran 先破门（已 0-1） → 「4-5-1 收缩」；Belgium 「堆前锋」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.5 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 35.9,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 25,
              "readout_cn": "Belgium · 低位反击。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 25% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 25,
              "fav_lead_style": "defensive"
            }
          }
        },
        "public_summary_note": "【推演概要】Belgium · 低位反击。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 1 · 模型认为仅小胜 1 球仍约 25.2%（模型微调：主胜 -5% · 平 +1% · 客 +4%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.97,
          "xg_gap": 0.87,
          "xg_home": 1.92,
          "xg_away": 1.05,
          "xg_baseline_home": 1.92,
          "xg_baseline_away": 1.05,
          "xg_note": "结构推演用基准 xG 1.92–1.05（进球氛围用调整后 1.64–0.92）",
          "lean_note": "进球氛围偏闷（预测约 2.5），但「弱队开花」结构需防弱队开花抬高总进球",
          "fav_name": "Belgium",
          "dog_name": "Iran",
          "fav_xg": 1.92,
          "dog_xg": 1.05,
          "path_type": "dog_bloom",
          "path_label": "弱队开花",
          "lean": "prevention_high",
          "lean_cn": "预防大比分",
          "lean_mode": "prevention",
          "lean_confidence": null,
          "prevention_reason_cn": "进球氛围偏闷（预测约 2.5），但「弱队开花」结构需防弱队开花抬高总进球",
          "atmosphere_link_cn": null,
          "modules_aligned": false,
          "live_watch": [
            {
              "key": "dog_goal",
              "label": "Iran进球",
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
              "label": "仅Belgium进球",
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
          "prob_over_line": 45,
          "prob_meet_guess": 56.4,
          "guess_n": 3,
          "prob_4_plus": 33.6,
          "prob_2_or_less": 43.6,
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
          "summary_cn": "【路径·基准 xG】合计 2.97 · Belgium 1.92 / Iran 1.05 → 主路径「弱队开花」约 41% · 预防大比分。 至少 3 球约 56.4% · 超 2.75 约 45% · ≤2球 43.6%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "G",
        "label": "G组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Iran",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "New Zealand",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Belgium",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Egypt",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          }
        ],
        "home": {
          "team": "Belgium",
          "rank": 3,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M82 · G 组第 1 vs 最佳第 3（A/E/H/I/J 池） → 当前 D 组第 2倾向 Australia",
          "if_1st_r16": "16强 M94 · 对阵 D 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "比利时头名通道",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 D 组第 1倾向 USA（强队）",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/乌拉圭 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/F/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Iran",
          "rank": 1,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M82 · G 组第 1 vs 最佳第 3（A/E/H/I/J 池） → 当前 D 组第 2倾向 Australia",
          "if_1st_r16": "16强 M94 · 对阵 D 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "比利时头名通道",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 D 组第 1倾向 USA（强队）",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/乌拉圭 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/F/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "D 组：头名 USA 6 分 · 次席 Australia 3 分（32强绑定组）",
          "H 组：头名 Saudi Arabia 1 分 · 次席 Uruguay 同分（32强绑定组）",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 Norway 3 分领跑"
        ],
        "path_tradeoff": "G 组次席与 D 组次席同槽，16 强进入 J/H 半区。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "暂无明确控分动机；出线后 32 强/16 强路径见下方绑定组预判。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Belgium 若取胜：积分 4，G 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Iran 若取胜：积分 4，客场抢分将改变 G 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 D 组：头名 USA 6 分 · 次席 Australia 3 分（32强绑定组） · H 组：头名 Saudi Arabia 1 分 · 次席 Uruguay 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：G 组次席与 D 组次席同槽，16 强进入 J/H 半区。"
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Domenico Tedesco",
          "age": 39,
          "nation": "德国/意大利",
          "tenure": "2024年—",
          "wc_exp": "2024 欧洲杯 · 沙尔克/莱比锡经验",
          "style_tags": [
            "3-4-2-1",
            "De Bruyne 核心",
            "Doku 宽度",
            "三中卫"
          ],
          "formation_pref": "3-4-2-1 · Lukaku 支点",
          "style_summary": "1-1 埃及后 G 组乱局；Tedesco 预计 3-4-2-1 全场压制，KDB+Doku 肋部 vs Ghalenoei 铁桶。",
          "subs": {
            "timing": "首换 58–65 分钟",
            "pattern": "Trossard/Lukaku 互替",
            "avg_first_sub": "61'",
            "note": "G 组须抢分"
          },
          "when_leading": {
            "label": "继续进攻",
            "detail": "1 球领先：维持宽度，De Bruyne 仍前插。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "先丢球：55' 改 3-4-3 堆边锋。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "对埃及 1-1 后须更激进。"
          },
          "vs_weak": {
            "label": "对弱队：穿盘",
            "detail": "对伊朗 xG 1.92 须兑现。"
          },
          "tournament": "接替 Garcia 后战术更灵活；G 组四队均 1 分。",
          "traits": [
            "KDB 核心",
            "三中卫",
            "必须取胜",
            "Doku 爆点"
          ],
          "match_note": "G 组乱局须 3 分——KDB+Doku 3-4-2-1 压制 vs Taremi 背身。"
        },
        "away": {
          "name": "Amir Ghalenoei",
          "age": 61,
          "nation": "伊朗",
          "tenure": "2023年—",
          "wc_exp": "2026 带队 · 亚冠经验",
          "style_tags": [
            "4-1-4-1",
            "Taremi 支点",
            "Ezatolahi 屏障",
            "定位球"
          ],
          "formation_pref": "4-1-4-1 · 领先时 4-5-1",
          "style_summary": "2-2 新西兰进攻回暖；对比利时 Ghalenoei 或 4-5-1 低位求 1 分，Taremi 背身 + 定位球是冷门点。",
          "subs": {
            "timing": "首换 60–70 分钟",
            "pattern": "Jahanbakhsh/Ghoddos 边路",
            "avg_first_sub": "65'",
            "note": "领先易收缩"
          },
          "when_leading": {
            "label": "4-5-1 收缩",
            "detail": "1 球领先：五后卫，Taremi 留前场。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "先丢球：60' 加强定位球。"
          },
          "vs_strong": {
            "label": "对强队：低位",
            "detail": "对比利时低位 + Taremi 反击合理。"
          },
          "vs_weak": {
            "label": "对弱队：压制",
            "detail": "2-2 新西兰已验证进攻。"
          },
          "tournament": "预选赛 10 零封；无 Azmoun 后 Taremi 单核。",
          "traits": [
            "Taremi 核心",
            "防守纪律",
            "定位球",
            "偷分动机"
          ],
          "match_note": "2-2 新西兰进攻回暖；对比利时或 4-5-1 低位，Taremi 定位球是冷门点。"
        }
      },
      "upset_alert": {
        "favorite": "Belgium",
        "underdog": "Iran",
        "favorite_iso": "BEL",
        "index": 28,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 25,
        "verdict": "G 组均分乱局——伊朗 2-2 新西兰进攻回暖 + Ghalenoei 铁桶，平局/伊朗冷胜约 25%。",
        "tactical": "Tedesco 3-4-2-1 vs Ghalenoei 4-5-1；Taremi 背身 vs Onana 屏障。",
        "psychology": "比利时「必须 3 分」；伊朗「2-2 后可以进攻」。",
        "historical": "友谊赛比利时略优；伊朗预选赛防守顶级。",
        "factors": [
          {
            "tag": "Taremi",
            "impact": "强",
            "detail": "2-2 新西兰破门"
          },
          {
            "tag": "G组乱局",
            "impact": "强",
            "detail": "四队均 1 分"
          },
          {
            "tag": "气候",
            "impact": "低",
            "detail": "SoFi 26°C 影响小"
          }
        ]
      }
    },
    {
      "id": "m37",
      "group": "H",
      "matchday": 2,
      "date": "2026-06-21",
      "time": "18:00",
      "time_local": "18:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "06:00",
      "date_beijing": "6月22日",
      "time_beijing_full": "北京时间 6月22日 06:00",
      "venue": "Hard Rock Stadium",
      "city": "Miami, USA",
      "note": "H组第2轮 · 乌拉圭 vs 佛得角 · 迈阿密 · FIFA 官方裁判已确认（Espen Eskås）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 5-4-1",
          "home": "Rocher; Núñez, Araujo, Cáceres, Viña; Ugarte, Valverde; Pellistri, De la Cruz, Maxi Araújo; Núñez",
          "away": "Vozinha; Monteiro, Cabo, Ponck; Borges, Lopes; Semedo, Pina, Moreira; Cabral, Bebé",
          "source": "Olé / BBC 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Uruguay",
        "iso": "uy",
        "flag": "",
        "fifa_rank": 9,
        "rating": 82,
        "form": [
          "D",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Marcelo Bielsa",
        "stars": [
          {
            "name": "Darwin Núñez",
            "pos": "ST",
            "club": "Liverpool",
            "desc": "1-1 沙特控球未赢",
            "rating": 8.4
          }
        ],
        "star": {
          "name": "Darwin Núñez",
          "pos": "ST",
          "club": "Liverpool",
          "desc": "1-1 沙特控球未赢",
          "rating": 8.4
        },
        "injuries": [
          {
            "player": "Darwin Núñez",
            "status": "FIT",
            "note": "中锋 · 1-1 沙特全场 xG 占优但未赢 · Bielsa 破局首选",
            "confirmed": true
          },
          {
            "player": "Federico Valverde",
            "status": "FIT",
            "note": "全能中场 · 压迫体系发动机 · 迈阿密湿热下体能分配关键",
            "confirmed": true
          },
          {
            "player": "Facundo Pellistri",
            "status": "FIT",
            "note": "右路速度 · 对 Bebé/Monteiro 侧一对一",
            "confirmed": true
          },
          {
            "player": "Ronald Araújo",
            "status": "DOUBT",
            "note": "小腿伤后恢复训练 · 对佛得角或仍替补 · Cáceres/Araujo 搭档",
            "confirmed": false
          },
          {
            "player": "José María Giménez",
            "status": "DOUBT",
            "note": "脚踝伤后逐步合练 · Bielsa 对密集防守或冒险首发",
            "confirmed": false
          },
          {
            "player": "Giorgian De Arrascaeta",
            "status": "DOUBT",
            "note": "小腿伤 · De la Cruz 继续顶替前腰 · 创造力略降",
            "confirmed": false
          },
          {
            "player": "Matías Viña",
            "status": "FIT",
            "note": "左后卫 · 1-1 沙特后已恢复先发",
            "confirmed": true
          }
        ],
        "rumors": [
          "Bielsa（赛前）：「1-1 沙特是警告——控球不等于胜利；对佛得角必须转化 xG」",
          "Olé 预测 4-2-3-1：Rocher; Núñez, Araujo, Cáceres, Viña; Ugarte, Valverde; Pellistri, De la Cruz, Maxi Araújo; Núñez",
          "0-0 西班牙证明 Vozinha+五后卫有效 · Bielsa 训练强调远射与定位球",
          "迈阿密 31°C/78% 湿度 · Bielsa 仍坚持高位压迫但 60' 后轮换幅度或加大",
          "Eskås 挪威组执法 · 压迫局战术犯规多，Ugarte/Valverde 黄牌风险"
        ]
      },
      "away": {
        "name": "Cape Verde",
        "iso": "cv",
        "flag": "",
        "fifa_rank": 73,
        "rating": 62,
        "form": [
          "D",
          "L",
          "D",
          "W",
          "L"
        ],
        "coach": "Bubista",
        "stars": [
          {
            "name": "Vozinha",
            "pos": "GK",
            "club": "AEL Limassol",
            "desc": "0-0 西班牙 MOM",
            "rating": 8.5
          }
        ],
        "star": {
          "name": "Vozinha",
          "pos": "GK",
          "club": "AEL Limassol",
          "desc": "0-0 西班牙 MOM",
          "rating": 8.5
        },
        "injuries": [
          {
            "player": "Vozinha",
            "status": "FIT",
            "note": "队长/一门 · 0-0 西班牙 MOM · 本届最铁门将之一",
            "confirmed": true
          },
          {
            "player": "Stopira",
            "status": "FIT",
            "note": "中卫领袖 · 防空+组织 · 对 Núñez 一对一",
            "confirmed": true
          },
          {
            "player": "Logan Costa",
            "status": "FIT",
            "note": "比利亚雷亚尔中卫 · 0-0 西班牙后信心暴涨",
            "confirmed": true
          },
          {
            "player": "Ryan Mendes",
            "status": "FIT",
            "note": "经验边锋 · 反击发起点 · 定位球",
            "confirmed": true
          },
          {
            "player": "Bebé",
            "status": "FIT",
            "note": "右路速度 · 对 Viña 侧是唯一反击希望",
            "confirmed": true
          },
          {
            "player": "Jovane Cabral",
            "status": "BENCH",
            "note": "锋线后手 · 60' 后若仍 0-0 可能加强反击",
            "confirmed": true
          }
        ],
        "rumors": [
          "Bubista（赛前）：「0-0 西班牙是团队胜利；对乌拉圭我们同样 5-4-1，Vozinha 是信心来源」",
          "预计 5-4-1 极深低位 · Stopira+Logan Costa 防空 · Bebé/Mendes 反击",
          "更衣室：0-0 西班牙后全队相信「可以拿分」——对乌拉圭目标仍是 1 分",
          "BBC：佛得角控球率或低于 30% · 定位球偷分是现实路径",
          "迈阿密湿热对低位队反而有利——乌拉圭压迫体能消耗更大"
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
        "source": "FIFA · Match officials · 2026-06-22",
        "name": "Espen Eskås",
        "nation": "Norway",
        "iso": "no",
        "age": 41,
        "wc_experience": "2026 世界杯主裁 · 挪威/北欧联赛 · UEFA 精英裁判 · 出牌率中等偏稳",
        "avg_yellow": 4.2,
        "avg_red": 0.1,
        "avg_penalty": 0.25,
        "home_win_rate": 47,
        "bias_index": 49,
        "bias_note": "挪威全组执法。Bielsa 高位压迫 vs Bubista 5-4-1 铁桶；迈阿密湿热下战术犯规打断节奏，Tori Penso 任第四官员。",
        "tendencies": [
          "挪威助理：Jan Erik Engan、Isaak Bashevkin",
          "第四官员 Tori Penso（美国）· 候补 Brooke Mayo（USA）",
          "VAR/AVAR 待 FIFA 开球前完整公布",
          "迈阿密 31°C/78% 湿度——Bielsa 压迫局黄牌或偏多",
          "佛得角 0-0 西班牙后低位更自信；乌拉圭 1-1 控球未赢须破密集"
        ],
        "officials": {
          "ar1": "Jan Erik Engan (NOR)",
          "ar2": "Isaak Bashevkin (NOR)",
          "fourth": "Tori Penso (USA)",
          "reserve_ar": "Brooke Mayo (USA)"
        },
        "fifa_match_id": "400021487",
        "fifa_official_id": "416160",
        "updated": "2026-06-21T12:25:40+08:00"
      },
      "prediction": {
        "home_win": 50,
        "draw": 31,
        "away_win": 19,
        "score": "1-0",
        "confidence": 74,
        "xg_home": 1.78,
        "xg_away": 0.82,
        "key_factor": "H组：乌拉圭 1-1 沙特控球碾压未取3分 · 佛得角 0-0 西班牙 Vozinha 铁桶 · Bielsa 须破密集 · 1-0/2-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 13.2
          },
          {
            "score": "2-0",
            "prob": 11.8
          },
          {
            "score": "1-1",
            "prob": 10.8
          },
          {
            "score": "2-1",
            "prob": 9.6
          },
          {
            "score": "0-0",
            "prob": 7.4
          },
          {
            "score": "3-0",
            "prob": 7
          },
          {
            "score": "0-1",
            "prob": 6.1
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Uruguay 暂列 H 组第 2（1 分 · 已赛 1 场） vs Cape Verde 第 4（1 分 · 已赛 1 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "迈阿密晚场湿热 · 31°C · 湿度 78% · 降雨概率 40% · 东南风 3级 · 高湿；湿热偏高——破密集防守难度上升"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "H组：乌拉圭 1-1 沙特控球碾压未取3分 · 佛得角 0-0 西班牙 Vozinha 铁桶 · Bielsa 须破密集 · 1-0/2-0"
          }
        ],
        "base_home_win": 54,
        "base_draw": 30,
        "base_away_win": 16,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 7,
          "ironBucket": true,
          "closeXg": false,
          "gap": 0.96,
          "notes": [
            "热门难破密集"
          ]
        }
      },
      "weather": {
        "city": "迈阿密",
        "country": "美国",
        "venue": "Hard Rock Stadium",
        "temp": 31,
        "humidity": 78,
        "rain_chance": 40,
        "wind": "东南风 3级 · 高湿",
        "condition_cn": "迈阿密晚场湿热",
        "impact_level": "HIGH",
        "impact": "高湿拖慢节奏；佛得角低位+乌拉圭控球或成闷局",
        "impact_summary": "湿热偏高——破密集防守难度上升",
        "home_adapt": 80,
        "away_adapt": 78,
        "historical_note": "Hard Rock · H组第2轮 · 预报 2026-06-22 06:00 本地",
        "forecast_updated": "2026-06-22 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "辛卯日",
          "day_summary": "辛卯日——金木相战，热门宜早破局；忌领先后松懈。",
          "hour_home": "见各场开球时辰",
          "hour_home_element": "木"
        },
        "wuxing": {
          "home": {
            "team": "",
            "verdict": "待定",
            "verdict_color": "#C8A96E",
            "wuxing_short": "待观",
            "reason": "赛前五行随队服与开球时辰而定",
            "advantage": ""
          },
          "away": {
            "team": "",
            "verdict": "待定",
            "verdict_color": "#C8A96E",
            "wuxing_short": "待观",
            "reason": "赛前五行随队服与开球时辰而定",
            "disadvantage": ""
          },
          "summary": "文化解读 · 正式推演见各场详情"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "开赛前结合时辰与阵容再行解读。",
          "scenarios": []
        },
        "home_score": 65,
        "away_score": 35,
        "mystic_verdict": "乌拉圭金水相济，佛得角土守；迈阿密晚场宜控局。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 1,
        "tier_label": "Uruguay 被看好 · 净胜约 1 球",
        "implied_tier": 0.25,
        "tier_gap": 0.75,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Uruguay（约 64%）",
        "analysis": "乌拉圭 -1 vs 佛得角；Vozinha 0-0 西班牙后市场仍信 Bielsa 破密。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 13.4
            },
            {
              "score": "2-0",
              "prob": 11.9
            },
            {
              "score": "1-1",
              "prob": 11
            }
          ],
          "one_goal_win_pct": 25.8,
          "two_plus_win_pct": 34,
          "full_cover_pct": 34,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": 25.8,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "走水净胜=1",
          "fav_cover_ev": -0.062,
          "dog_cover_ev": 0.062,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.6,
          "fair_totals_line": 2,
          "over_2_5_pct": 47.6,
          "over_3_pct": 25.7,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜 1 球概率 25.8%：参考净胜 1 球时，仅赢一球与拉开差距须分开看"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "market_goals_int": 3,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.6,
          "fair_line": 2,
          "line_gap": 0.25,
          "over_pct": 60.3,
          "under_pct": 39.7,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看大比分（超 2.25 约 60.3%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "applied_delta": {
          "home_win": -4,
          "draw": 1,
          "away_win": 3
        },
        "adjustment_note": "模型微调：主胜 -4% · 平 +1% · 客 +3%",
        "adjusted_probs": {
          "home_win": 50,
          "draw": 31,
          "away_win": 19
        },
        "display_summary": {
          "fav_name": "Uruguay",
          "expected_total_goals": 1.93,
          "poisson_fav_win_pct": 50.8,
          "small_lead_pct": 27.3,
          "small_example_score": "1-0",
          "small_example_pct": 18.3,
          "big_cover_pct": 23.6,
          "big_example_score": "2-0",
          "big_example_pct": 11.6,
          "win_shape": {
            "fav_name": "Uruguay",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 36.1%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 18.3,
                "pct": 36.1
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 9,
                "pct": 17.6
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 16.5,
                "pct": 32.5
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 7,
                "pct": 13.8
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 53.7
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 32.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 13.8
              }
            ],
            "fav_win_pct": 50
          },
          "excitement": {
            "label_cn": "偏晚",
            "label_key": "slow",
            "label_color": "#7BB8D4",
            "sub_cn": "预期首球等待约 46.4 分",
            "first_goal_wait": 46.4,
            "fast_pct": 47.6,
            "moderate_pct": 14.5,
            "slow_pct": 37.9,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 47.6
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.5
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 37.9
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Uruguay：Ronald Araújo、José María Giménez 存疑 · Cape Verde 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "继续压迫 / 5-5 铁桶（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "湿热偏高——破密集防守难度上升"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：热门难破密集（平 +7%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.78,
            "baseline_away": 0.82,
            "adjusted_home": 1.27,
            "adjusted_away": 0.67,
            "note": "基准 xG 1.78–0.82 → 调整后 1.27–0.67"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 0.75,
            "implied_tier_label": "Uruguay 被看好 · 净胜约 0.25 球",
            "market_tier_label": "Uruguay 被看好 · 净胜约 1 球",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75"
          },
          "win_outlook": {
            "fav_name": "Uruguay",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 53.7
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 32.5
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 13.8
              }
            ],
            "margin_line_cn": "Uruguay · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
            "margin_meet_pct": 23.6,
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
            "model_total_xg": 1.94,
            "totals_line_gap": 0,
            "totals_high_pct": 44.1,
            "totals_low_pct": 55.9,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 29.9,
            "win_margin2_low_total_pct": 11.6,
            "win_margin2_high_total_pct": 23.6,
            "readout_cn": "取胜约 50%；若取胜，以「险胜收工」为主（53.7%）。 对着赛前净胜参考，净胜≥2（全达标）约 23.6%；对着总进球参考 2.25，模型超线概率约 44.1%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 18.3
            },
            {
              "score": "0-0",
              "pct": 14.4
            },
            {
              "score": "1-1",
              "pct": 12.3
            }
          ],
          "totals_view": {
            "expected_total": 1.9,
            "fair_line": 2.25,
            "market_line": 2.25,
            "line_gap": 0,
            "over_pct": 44.1,
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
              "over_pct": 44.1,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 1.9 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Uruguay · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 23.6% · 达到预期难度偏大 进球氛围：几乎五五开 平局权重约 31%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "Uruguay",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 23.6,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "Uruguay · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 23.6% · 达到预期难度偏大",
              "detail_cn": "Uruguay · 赛前外界预期 净胜≥2。模型推演达标概率约 23.6%；外界看法高于 xG 隐含约 0.75 球，达到预期难度偏大。",
              "extra_stats_cn": "",
              "full_cover_pct": 23.6,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥2",
              "margin_half_label": "走水净胜=1",
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
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 44.1,
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
                "label": "净胜走向",
                "outlook": {
                  "level": "skeptical",
                  "label_cn": "外界预期偏高",
                  "color": "#D95F6A",
                  "fav_name": "Uruguay",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 23.6,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "Uruguay · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 23.6% · 达到预期难度偏大",
                  "detail_cn": "Uruguay · 赛前外界预期 净胜≥2。模型推演达标概率约 23.6%；外界看法高于 xG 隐含约 0.75 球，达到预期难度偏大。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 23.6,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "走水净胜=1",
                  "tier_gap": 0.75,
                  "show_cover": true
                },
                "text": "达标概率约 23.6% · 达到预期难度偏大",
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
                  "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 44.1,
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
              "team": "Uruguay",
              "first_goal_pct": 65.5,
              "start_score": "1-0",
              "fav_name": "Uruguay",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 96.3,
              "small_lead_pct": 33.4,
              "big_lead_pct": 49.2,
              "fav_win_pct": 82.7,
              "fav_draw_pct": 13.6,
              "fav_lose_pct": 3.8,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Uruguay 保持胜果（净胜≥1）",
                  "pct": 82.7
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 13.6
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 3.8
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 46.6 分",
                "first_goal_wait": 46.6,
                "fast_pct": 41,
                "moderate_pct": 13.7,
                "slow_pct": 45.3,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 41
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 45.3
                  }
                ]
              },
              "big_delta": 25.6,
              "small_delta": 6.1,
              "narrative": "Uruguay 先破门（已 1-0） → 「继续压迫」；Cape Verde 「维持低位」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Uruguay",
                "state_label": "Uruguay 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 53.7
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 32.5
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 13.8
                  }
                ],
                "margin_line_cn": "Uruguay · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
                "margin_meet_pct": 49.2,
                "margin_half_pct": 0,
                "margin_fail_pct": 33.4,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "走水净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.58,
                "totals_line_gap": 0,
                "totals_high_pct": 63.2,
                "totals_low_pct": 36.8,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 42.6,
                "win_margin2_low_total_pct": 22.1,
                "win_margin2_high_total_pct": 49.2,
                "readout_cn": "Uruguay 已 1-0 领先：仍取胜约 82.7%。 对着总进球参考 2.25，模型超线概率约 63.2%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Cape Verde",
              "first_goal_pct": 34.5,
              "start_score": "0-1",
              "fav_name": "Uruguay",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 53.3,
              "small_lead_pct": 15.8,
              "big_lead_pct": 7.8,
              "fav_win_pct": 23.6,
              "fav_draw_pct": 29.7,
              "fav_lose_pct": 46.7,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Uruguay 追平（平局）",
                  "pct": 29.7
                },
                {
                  "key": "win1",
                  "label": "Uruguay 净胜1球翻盘（如 2-1）",
                  "pct": 15.8
                },
                {
                  "key": "win2",
                  "label": "Uruguay 净胜≥2球翻盘（如 3-1）",
                  "pct": 7.8
                },
                {
                  "key": "upset_hold",
                  "label": "Cape Verde 保持胜果至终场",
                  "pct": 46.7
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 45.7 分",
                "first_goal_wait": 45.7,
                "fast_pct": 41.6,
                "moderate_pct": 13.8,
                "slow_pct": 44.6,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 41.6
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.8
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 44.6
                  }
                ]
              },
              "big_delta": -15.8,
              "small_delta": -11.5,
              "narrative": "Cape Verde 先破门（已 0-1） → 「5-5 铁桶」；Uruguay 「更疯压迫」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 1.9 · 合理值 2.25 · 总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 44.1,
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
              "depth_label": "板凳深度偏高",
              "draw_trap_pct": 18,
              "readout_cn": "Uruguay · 低位反击 · 进球偏少。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 18% 冷门空间含平局）。",
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
              "depth_score": 2,
              "depth_label": "板凳深度偏高",
              "draw_trap_pct": 18,
              "fav_lead_style": "aggressive"
            }
          }
        },
        "public_summary_note": "【推演概要】Uruguay · 低位反击 · 进球偏少。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75（模型微调：主胜 -4% · 平 +1% · 客 +3%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.6,
          "xg_gap": 0.96,
          "xg_home": 1.78,
          "xg_away": 0.82,
          "xg_baseline_home": 1.78,
          "xg_baseline_away": 0.82,
          "xg_note": "结构推演用基准 xG 1.78–0.82（进球氛围用调整后 1.27–0.67）",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Uruguay",
          "dog_name": "Cape Verde",
          "fav_xg": 1.78,
          "dog_xg": 0.82,
          "path_type": "fav_burst",
          "path_label": "热门爆发",
          "lean": "neutral",
          "lean_cn": "热门爆发路径",
          "lean_mode": "prediction",
          "lean_confidence": null,
          "prevention_reason_cn": null,
          "atmosphere_link_cn": "热门效率路径与结构一致",
          "modules_aligned": false,
          "live_watch": [],
          "prob_over_line": 60.3,
          "prob_meet_guess": 47.6,
          "guess_n": 3,
          "prob_4_plus": 25.7,
          "prob_2_or_less": 52.4,
          "totals_line": 2.25,
          "scenarios": [
            {
              "key": "fav_burst",
              "label": "热门爆发",
              "example": "2-0 / 3-0 / 4-1",
              "note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
              "prob_pct": 26
            },
            {
              "key": "dog_bloom",
              "label": "弱队开花",
              "example": "2-2 / 1-3 / 3-1",
              "note": "样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
              "prob_pct": 26
            },
            {
              "key": "low",
              "label": "铁局/小比分",
              "example": "1-0 / 1-1 / 0-0",
              "note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
              "prob_pct": 26
            },
            {
              "key": "open",
              "label": "对攻/open",
              "example": "2-2 / 4-2 / 3-2",
              "note": "双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。",
              "prob_pct": 21
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
              "key": "fav_burst",
              "label": "热门爆发",
              "color": "#FF6B35",
              "bg": "rgba(255,107,53,0.1)"
            }
          ],
          "watch_notes": [
            "弱队上半场效率≥1.0 → 关注弱队开花路径"
          ],
          "pattern_note": "样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
          "summary_cn": "【路径·基准 xG】合计 2.6 · Uruguay 1.78 / Cape Verde 0.82 → 主路径「热门爆发」约 26% · 热门爆发路径。 至少 3 球约 47.6% · 超 2.25 约 60.3% · ≤2球 52.4%。样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "H",
        "label": "H组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Saudi Arabia",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Uruguay",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Spain",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 0,
            "ga": 0
          },
          {
            "team": "Cape Verde",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 0,
            "ga": 0
          }
        ],
        "home": {
          "team": "Uruguay",
          "rank": 2,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M84 · H 组第 1 vs J 组第 2 → 当前 J 组第 2倾向 Austria",
          "if_1st_r16": "16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者",
          "if_1st_corridor": "西班牙头名 → 16 强或遇 K/L 次席",
          "if_2nd": "32强 M86 · J 组第 1 vs H 组第 2 → 当前 J 组第 1倾向 Argentina（强队）",
          "if_2nd_r16": "16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者",
          "if_2nd_corridor": "沙特/佛得角次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/F/G/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Cape Verde",
          "rank": 4,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M84 · H 组第 1 vs J 组第 2 → 当前 J 组第 2倾向 Austria",
          "if_1st_r16": "16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者",
          "if_1st_corridor": "西班牙头名 → 16 强或遇 K/L 次席",
          "if_2nd": "32强 M86 · J 组第 1 vs H 组第 2 → 当前 J 组第 1倾向 Argentina（强队）",
          "if_2nd_r16": "16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者",
          "if_2nd_corridor": "沙特/佛得角次席通道",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/F/G/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "J 组：头名 Argentina 3 分 · 次席 Austria 同分（32强绑定组）",
          "G 组：头名 Iran 1 分 · 次席 New Zealand 同分（32强绑定组）",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 Norway 3 分领跑",
          "D 组 USA 6 分领跑"
        ],
        "path_tradeoff": "H 组与 J 组绑定；头名次席决定 32 强对位。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "暂无明确控分动机；出线后 32 强/16 强路径见下方绑定组预判。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Uruguay 若取胜：积分 4，H 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Cape Verde 若取胜：积分 4，客场抢分将改变 H 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 J 组：头名 Argentina 3 分 · 次席 Austria 同分（32强绑定组） · G 组：头名 Iran 1 分 · 次席 New Zealand 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：H 组与 J 组绑定；头名次席决定 32 强对位。"
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Marcelo Bielsa",
          "age": 70,
          "nation": "阿根廷",
          "tenure": "2023年—",
          "wc_exp": "2010 世界杯（智利）· 2026 带队",
          "style_tags": [
            "4-2-3-1",
            "高位压迫",
            "Valverde 覆盖",
            "Núñez 支点"
          ],
          "formation_pref": "4-2-3-1 · 全场压迫",
          "style_summary": "1-1 沙特控球碾压未赢；对 0-0 西班牙的佛得角 Bielsa 须破密集，Núñez+远射+定位球是破局组合。",
          "subs": {
            "timing": "首换 55–62 分钟",
            "pattern": "Pellistri/前锋批量换",
            "avg_first_sub": "58'",
            "note": "迈阿密湿热轮换或更早"
          },
          "when_leading": {
            "label": "继续压迫",
            "detail": "1 球领先：维持高位。"
          },
          "when_trailing": {
            "label": "更疯压迫",
            "detail": "先丢球：压迫加码。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "对西班牙高位对攻。"
          },
          "vs_weak": {
            "label": "对弱队：必须穿盘",
            "detail": "对佛得角 xG 1.78 须兑现。"
          },
          "tournament": "防线仍有 Giménez/Araújo 疑虑；压迫强度不变。",
          "traits": [
            "高位压迫",
            "破密集",
            "Núñez 核心",
            "湿热体能"
          ],
          "match_note": "1-1 沙特控球未赢——对 0-0 西班牙的佛得角须转化 xG；迈阿密湿热体能变量。"
        },
        "away": {
          "name": "Bubista",
          "age": 48,
          "nation": "佛得角",
          "tenure": "2020年—",
          "wc_exp": "2023 非洲杯八强 · 2026 带队",
          "style_tags": [
            "5-4-1",
            "Vozinha 铁桶",
            "Bebé 反击",
            "定位球"
          ],
          "formation_pref": "5-4-1 · Vozinha 一门",
          "style_summary": "0-0 西班牙后信心暴涨；Bubista 对乌拉圭同样 5-4-1，Vozinha+Stopira 防空是生存之本。",
          "subs": {
            "timing": "首换 70 分钟+",
            "pattern": "单换前锋；极少早换",
            "avg_first_sub": "72'",
            "note": "弱队体能优先"
          },
          "when_leading": {
            "label": "5-5 铁桶",
            "detail": "若意外领先：全员退守。"
          },
          "when_trailing": {
            "label": "维持低位",
            "detail": "unlikely 压上。"
          },
          "vs_strong": {
            "label": "对强队：龟缩",
            "detail": "对乌拉圭/西班牙同一模板。"
          },
          "vs_weak": {
            "label": "不适用",
            "detail": "H 组最弱。"
          },
          "tournament": "0-0 西班牙是本届最大冷门之一；更衣室士气高涨。",
          "traits": [
            "Vozinha",
            "5 后卫",
            "定位球",
            "偷分动机"
          ],
          "match_note": "0-0 西班牙信心暴涨；Vozinha 铁桶 + Bebé 反击，1 分仍是目标。"
        }
      },
      "upset_alert": {
        "favorite": "Uruguay",
        "underdog": "Cape Verde",
        "favorite_iso": "URU",
        "index": 22,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 18,
        "verdict": "乌拉圭 1-1 沙特控球未赢——0-0 西班牙的佛得角 Vozinha 铁桶使平局偷分约 18%。",
        "tactical": "Bielsa 4-2-3-1 压迫 vs Bubista 5-4-1；Núñez 破密集是关键。",
        "psychology": "乌拉圭「控球≠胜利」；佛得角「0-0 西班牙可以复制」。",
        "historical": "无大赛交锋；佛得角 0-0 西班牙是最大冷门信号。",
        "factors": [
          {
            "tag": "Vozinha",
            "impact": "强",
            "detail": "0-0 西班牙 MOM"
          },
          {
            "tag": "湿热",
            "impact": "中",
            "detail": "迈阿密 31°C/78%"
          },
          {
            "tag": "破密集",
            "impact": "强",
            "detail": "Bielsa 须转化 xG"
          }
        ]
      }
    },
    {
      "id": "m40",
      "group": "G",
      "matchday": 2,
      "date": "2026-06-21",
      "time": "18:00",
      "time_local": "18:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "09:00",
      "date_beijing": "6月22日",
      "time_beijing_full": "北京时间 6月22日 09:00",
      "venue": "BC Place",
      "city": "Vancouver, Canada",
      "note": "G组第2轮 · 新西兰 vs 埃及 · 温哥华 · FIFA 官方裁判已确认（Omar Mohamed Al Ali）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-4-2 / 4-2-3-1",
          "home": "Baptiste; Boxall, Kelly, Mitchell; Singh, Garbett, Just, van Hattum; Wood, Singh; Just, Wood",
          "away": "El Shenawy; Hany, Hegazi, Abdelmonem, Hamdy; Elneny, Fathy; Trezeguet, Marmoush, Salah; Mostafa Mohamed",
          "source": "Stuff / KingFut 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "New Zealand",
        "iso": "nz",
        "flag": "",
        "fifa_rank": 103,
        "rating": 58,
        "form": [
          "D",
          "D",
          "L",
          "W",
          "L"
        ],
        "coach": "Darije Kalezić",
        "stars": [
          {
            "name": "Chris Wood",
            "pos": "ST",
            "club": "Nottm Forest",
            "desc": "2-2 伊朗连线 Just",
            "rating": 7.6
          }
        ],
        "star": {
          "name": "Chris Wood",
          "pos": "ST",
          "club": "Nottm Forest",
          "desc": "2-2 伊朗连线 Just",
          "rating": 7.6
        },
        "injuries": [
          {
            "player": "Chris Wood",
            "status": "FIT",
            "note": "队长/中锋 · 2-2 伊朗连线 Just · G 组最稳定得分点",
            "confirmed": true
          },
          {
            "player": "Marko Just",
            "status": "FIT",
            "note": "2-2 伊朗双响 · 中场前插是新西兰最大惊喜",
            "confirmed": true
          },
          {
            "player": "Michael Boxall",
            "status": "FIT",
            "note": "中卫 · 对 Salah/Marmoush 速度须保持防线",
            "confirmed": true
          },
          {
            "player": "Alex Paulsen",
            "status": "FIT",
            "note": "一门 · 对埃及定位球与 Salah 内切",
            "confirmed": true
          },
          {
            "player": "Marco Garbett",
            "status": "FIT",
            "note": "中场屏障 · 限制 Elneny 组织",
            "confirmed": true
          }
        ],
        "rumors": [
          "Kalezić（赛前）：「2-2 伊朗证明我们可以进球；对埃及 Wood+Just 仍是核心，但要更稳守」",
          "Stuff 预测 4-4-2：Paulsen; Boxall, Kelly, Mitchell; Singh, Garbett, Just, van Hattum; Wood",
          "G 组四队均 1 分 · 新西兰再拿 1 分即可保持竞争力",
          "温哥华 19°C 凉爽 · 利于 Wood 全场跑动与 Just 前插",
          "更衣室：2-2 伊朗后士气大振 · 但 Salah 级别完全不同"
        ]
      },
      "away": {
        "name": "Egypt",
        "iso": "eg",
        "flag": "",
        "fifa_rank": 36,
        "rating": 72,
        "form": [
          "D",
          "D",
          "W",
          "L",
          "W"
        ],
        "coach": "Rui Vitória",
        "stars": [
          {
            "name": "Mohamed Salah",
            "pos": "RW",
            "club": "Liverpool",
            "desc": "1-1 比利时后",
            "rating": 8.9
          }
        ],
        "star": {
          "name": "Mohamed Salah",
          "pos": "RW",
          "club": "Liverpool",
          "desc": "1-1 比利时后",
          "rating": 8.9
        },
        "injuries": [
          {
            "player": "Mohamed Salah",
            "status": "FIT",
            "note": "队长/RW · 1-1 比利时后 · G 组最大个人威胁",
            "confirmed": true
          },
          {
            "player": "Omar Marmoush",
            "status": "FIT",
            "note": "伪 9/二前锋 · 与 Salah 组成反击双核",
            "confirmed": true
          },
          {
            "player": "Mohamed Elneny",
            "status": "FIT",
            "note": "后腰屏障 · 限制 Just 前插",
            "confirmed": true
          },
          {
            "player": "Mohamed El Shenawy",
            "status": "FIT",
            "note": "一门 · 对 Wood 头球须警惕",
            "confirmed": true
          },
          {
            "player": "Mohamed Trezeguet",
            "status": "FIT",
            "note": "左路宽度 · 定位球主罚之一",
            "confirmed": true
          },
          {
            "player": "Mostafa Mohamed",
            "status": "FIT",
            "note": "中锋支点 · 与 Marmoush 轮换/双锋",
            "confirmed": true
          }
        ],
        "rumors": [
          "Vitória（赛前）：「1-1 比利时满意过程；对新西兰必须 3 分，Salah 要在肋部拿球」",
          "KingFut 预测 4-2-3-1：El Shenawy; Hany, Hegazi, Abdelmonem, Hamdy; Elneny, Fathy; Trezeguet, Marmoush, Salah; Mostafa Mohamed",
          "1-1 比利时后 Vitória 强调「Salah 一人不够，需要 Marmoush 更多跑动」",
          "BC Place 凉爽利于埃及高位逼抢 · 对 Wood 长传须保持压迫",
          "阿联酋主裁 Al Ali 执法 · Vitória 提醒定位球纪律"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 0,
        "recent": [],
        "note": "友谊赛平局"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-22",
        "name": "Omar Mohamed Al Ali",
        "nation": "UAE",
        "iso": "ae",
        "age": 37,
        "wc_experience": "2022 世界杯 VAR · 2026 主裁——阿联酋代表亚洲 · AFC 精英裁判",
        "avg_yellow": 4.4,
        "avg_red": 0.12,
        "avg_penalty": 0.3,
        "home_win_rate": 50,
        "bias_index": 50,
        "bias_note": "阿联酋组执法。Wood vs Salah 对位 + 双方均须抢分；温哥华凉爽利于高强度，对拖延与战术犯规尺度预计稳健。",
        "tendencies": [
          "阿联酋助理：Mohammed Al Hammadi",
          "其余 VAR/AVAR/第四官员待 FIFA 开球前完整公布",
          "延续阿联酋裁判世界杯传统（Bujsaim 1994–2002 三届主裁）",
          "G 组四队均 1 分——平局对双方均可接受",
          "BC Place 19°C 凉爽——90 分钟对抗强度可维持"
        ],
        "officials": {
          "ar1": "Mohammed Al Hammadi (UAE)",
          "ar2": "（FIFA 开赛前公布）",
          "fourth": "（FIFA 开赛前公布）"
        },
        "fifa_match_id": "400021480",
        "fifa_official_id": "328497",
        "updated": "2026-06-21T12:25:40+08:00"
      },
      "prediction": {
        "home_win": 32,
        "draw": 32,
        "away_win": 35,
        "score": "1-1",
        "confidence": 65,
        "xg_home": 1.12,
        "xg_away": 1.18,
        "key_factor": "G组四队均1分：新西兰 2-2 伊朗 Just 双响 · 埃及 1-1 比利时 · Wood vs Salah · 势均力敌 1-1/1-2",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 13.3
          },
          {
            "score": "0-1",
            "prob": 11.8
          },
          {
            "score": "1-0",
            "prob": 11.2
          },
          {
            "score": "0-0",
            "prob": 10
          },
          {
            "score": "1-2",
            "prob": 7.8
          },
          {
            "score": "2-1",
            "prob": 7.4
          },
          {
            "score": "0-2",
            "prob": 7
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "New Zealand 暂列 G 组第 2（1 分 · 已赛 1 场） vs Egypt 第 4（1 分 · 已赛 1 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "温哥华凉爽 · 19°C · 湿度 62% · 降雨概率 15% · 太平洋 breeze 2级；凉爽气候利于对攻"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "G组四队均1分：新西兰 2-2 伊朗 Just 双响 · 埃及 1-1 比利时 · Wood vs Salah · 势均力敌 1-1/1-2"
          }
        ],
        "base_home_win": 32,
        "base_draw": 32,
        "base_away_win": 35,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 4,
          "ironBucket": false,
          "closeXg": true,
          "gap": 0.06,
          "notes": [
            "xG 极接近"
          ]
        }
      },
      "weather": {
        "city": "温哥华",
        "country": "加拿大",
        "venue": "BC Place",
        "temp": 19,
        "humidity": 62,
        "rain_chance": 15,
        "wind": "太平洋 breeze 2级",
        "condition_cn": "温哥华凉爽",
        "impact_level": "LOW",
        "impact": "凉爽利于高强度；Salah vs Wood 对位是焦点",
        "impact_summary": "凉爽气候利于对攻",
        "home_adapt": 82,
        "away_adapt": 80,
        "historical_note": "BC Place · G组第2轮 · 预报 2026-06-22 06:00 本地",
        "forecast_updated": "2026-06-22 06:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "辛卯日",
          "day_summary": "辛卯日——金木相战，热门宜早破局；忌领先后松懈。",
          "hour_home": "见各场开球时辰",
          "hour_home_element": "木"
        },
        "wuxing": {
          "home": {
            "team": "",
            "verdict": "待定",
            "verdict_color": "#C8A96E",
            "wuxing_short": "待观",
            "reason": "赛前五行随队服与开球时辰而定",
            "advantage": ""
          },
          "away": {
            "team": "",
            "verdict": "待定",
            "verdict_color": "#C8A96E",
            "wuxing_short": "待观",
            "reason": "赛前五行随队服与开球时辰而定",
            "disadvantage": ""
          },
          "summary": "文化解读 · 正式推演见各场详情"
        },
        "hexagram": {
          "name": "待卦",
          "symbol": "☯",
          "quote": "赛前更新",
          "general": "开赛前结合时辰与阵容再行解读。",
          "scenarios": []
        },
        "home_score": 46,
        "away_score": 54,
        "mystic_verdict": "新西兰木土守中，埃及金水流动；温哥华晚场宜胶着。",
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
        "public_lean_cn": "舆论看法较分散",
        "analysis": "G组四队均1分；新西兰 vs 埃及 xG 接近，平局权重高。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 13.3
            },
            {
              "score": "0-1",
              "prob": 11.9
            },
            {
              "score": "1-0",
              "prob": 11.3
            }
          ],
          "one_goal_win_pct": 20.5,
          "two_plus_win_pct": 13.8,
          "full_cover_pct": 0,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 2.3,
          "fair_totals_line": 2.25,
          "over_2_5_pct": 40.3,
          "over_3_pct": 19.9,
          "totals_lean_cn": "超 2.5 偏小比分（约 59.7%）；4球+偏少",
          "margin_risk_note": "净胜≥1 约 0%；仅赢 1 球约 0%"
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.3,
          "fair_line": 2.25,
          "line_gap": 0.25,
          "over_pct": 40.3,
          "under_pct": 59.7,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 2.5 约 59.7% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 32,
          "draw": 32,
          "away_win": 35
        },
        "display_summary": {
          "fav_name": "Egypt",
          "expected_total_goals": 2.29,
          "poisson_fav_win_pct": 37.3,
          "small_lead_pct": 21.6,
          "small_example_score": "0-1",
          "small_example_pct": 11.9,
          "big_cover_pct": 15.6,
          "big_example_score": "0-2",
          "big_example_pct": 7,
          "win_shape": {
            "fav_name": "Egypt",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 31.8%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 11.9,
                "pct": 31.8
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 9.8,
                "pct": 26.2
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 9.7,
                "pct": 26.2
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 5.9,
                "pct": 15.8
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 58
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 26.2
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 15.8
              }
            ],
            "fav_win_pct": 35
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 39.1 分",
            "first_goal_wait": 39.1,
            "fast_pct": 53.5,
            "moderate_pct": 14.8,
            "slow_pct": 31.7,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 53.5
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 31.7
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "New Zealand 暂无重要伤停 · Egypt 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "4-5-1 收缩 / 控节奏（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "凉爽气候利于对攻"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 极接近（平 +4%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.12,
            "baseline_away": 1.18,
            "adjusted_home": 1.12,
            "adjusted_away": 1.18,
            "note": "基准 xG 1.12–1.18（未因伤病/气候下调）"
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
            "fav_name": "Egypt",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 58
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 26.2
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 15.8
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
            "totals_line": 2.5,
            "totals_line_cn": "总进球参考 2.5",
            "fair_totals_line": 2.25,
            "model_total_xg": 2.3,
            "totals_line_gap": 0.25,
            "totals_high_pct": 40.3,
            "totals_low_pct": 59.7,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 18.9,
            "win_margin2_low_total_pct": 7,
            "win_margin2_high_total_pct": 8.6,
            "readout_cn": "取胜约 35%；若取胜，以「险胜收工」为主（58%）。 对着赛前净胜参考，净胜≥1（全达标）约 0%；对着总进球参考 2.5，模型超线概率约 40.3%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 13.3
            },
            {
              "score": "0-1",
              "pct": 11.9
            },
            {
              "score": "1-0",
              "pct": 11.3
            }
          ],
          "totals_view": {
            "expected_total": 2.3,
            "fair_line": 2.25,
            "market_line": 2.5,
            "line_gap": 0.25,
            "over_pct": 40.3,
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
              "over_pct": 40.3,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.3 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "净胜走向：双方实力接近",
            "sub_cn": "双方实力接近，暂无单侧净胜预期。 进球氛围：几乎五五开 平局权重约 32%，小组赛易出守平——勿只盯胜负一方。",
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
              "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
              "pill_cn": "几乎五五开",
              "detail_cn": "模型五五开，临场决定节奏。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 40.3,
              "line_gap": 0.25,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.5",
              "caution_public_high": false
            },
            "draw_risk": {
              "level": "high",
              "color": "#C8A96E",
              "note": "平局权重约 32%，小组赛易出守平——勿只盯胜负一方。"
            },
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
                  "section_intro_cn": "对照总进球参考 2.5，看偏闷还是偏精彩",
                  "pill_cn": "几乎五五开",
                  "detail_cn": "模型五五开，临场决定节奏。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 40.3,
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
              "team": "New Zealand",
              "first_goal_pct": 48.7,
              "start_score": "1-0",
              "fav_name": "New Zealand",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 82.9,
              "small_lead_pct": 31.9,
              "big_lead_pct": 25.9,
              "fav_win_pct": 57.8,
              "fav_draw_pct": 25.1,
              "fav_lose_pct": 17.1,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "New Zealand 追平（平局）",
                  "pct": 25.1
                },
                {
                  "key": "win1",
                  "label": "New Zealand 净胜1球翻盘（如 2-1）",
                  "pct": 31.9
                },
                {
                  "key": "win2",
                  "label": "New Zealand 净胜≥2球翻盘（如 3-1）",
                  "pct": 25.9
                },
                {
                  "key": "upset_hold",
                  "label": "New Zealand 保持胜果至终场",
                  "pct": 17.1
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 40 分",
                "first_goal_wait": 40,
                "fast_pct": 45.9,
                "moderate_pct": 14.3,
                "slow_pct": 39.8,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 45.9
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.3
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 39.8
                  }
                ]
              },
              "big_delta": 10.3,
              "small_delta": 10.3,
              "narrative": "New Zealand 先破门（已 1-0） → 「4-5-1 收缩」；Egypt 「Salah 单核」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "Egypt",
              "first_goal_pct": 51.3,
              "start_score": "0-1",
              "fav_name": "Egypt",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 84.7,
              "small_lead_pct": 32.4,
              "big_lead_pct": 28.3,
              "fav_win_pct": 60.6,
              "fav_draw_pct": 24.1,
              "fav_lose_pct": 15.3,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Egypt 保持胜果（净胜≥1）",
                  "pct": 60.6
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 24.1
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 15.3
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 40.4 分",
                "first_goal_wait": 40.4,
                "fast_pct": 45.6,
                "moderate_pct": 14.3,
                "slow_pct": 40.1,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 45.6
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.3
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 40.1
                  }
                ]
              },
              "big_delta": 12.7,
              "small_delta": 10.8,
              "narrative": "Egypt 先破门（已 0-1） → 「控节奏」；New Zealand 「堆前锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": {
                "fav_name": "Egypt",
                "state_label": "Egypt 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 58
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 26.2
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 15.8
                  }
                ],
                "margin_line_cn": "净胜差距参考 · 势均力敌",
                "margin_meet_pct": 15.3,
                "margin_half_pct": 0,
                "margin_fail_pct": 10.8,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球参考 2.5",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.83,
                "totals_line_gap": 0.25,
                "totals_high_pct": 54.5,
                "totals_low_pct": 45.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 0,
                "win_margin2_low_total_pct": 0,
                "win_margin2_high_total_pct": 4.4,
                "readout_cn": "Egypt 已 1-0 领先：仍取胜约 15.3%。 对着总进球参考 2.5，模型超线概率约 54.5%。 若再扩大，偏「险胜收工」。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.3 · 合理值 2.25 · 总进球参考 2.5（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.5",
              "totals_high_pct": 40.3,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 22,
              "readout_cn": "Egypt · 低位反击。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 22% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 22,
              "fav_lead_style": "defensive"
            }
          }
        },
        "public_summary_note": "【推演概要】Egypt · 低位反击。 · 与模型 xG 对照：均衡 · 与赛前净胜看法基本一致（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.3,
          "xg_gap": 0.06,
          "xg_home": 1.12,
          "xg_away": 1.18,
          "xg_baseline_home": 1.12,
          "xg_baseline_away": 1.18,
          "xg_note": "结构推演用基准 xG 1.12–1.18",
          "lean_note": "总进球大/小标签未达强信号（基准 xG · 需≥60% 或 ≤40%），以下以进球故事线为主。",
          "fav_name": "Egypt",
          "dog_name": "New Zealand",
          "fav_xg": 1.18,
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
          "prob_over_line": 40.3,
          "prob_meet_guess": 40.3,
          "guess_n": 3,
          "prob_4_plus": 19.9,
          "prob_2_or_less": 59.7,
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
          "summary_cn": "【路径·基准 xG】合计 2.3 · Egypt 1.18 / New Zealand 1.12 → 主路径「铁局/小比分」约 56%。 超 2.5 约 40.3% · ≤2球 59.7%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "group_context": {
        "group": "G",
        "label": "G组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Iran",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "New Zealand",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 2,
            "ga": 2
          },
          {
            "team": "Belgium",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Egypt",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          }
        ],
        "home": {
          "team": "New Zealand",
          "rank": 2,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M82 · G 组第 1 vs 最佳第 3（A/E/H/I/J 池） → 当前 D 组第 2倾向 Australia",
          "if_1st_r16": "16强 M94 · 对阵 D 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "比利时头名通道",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 D 组第 1倾向 USA（强队）",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/乌拉圭 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/F/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Egypt",
          "rank": 4,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M82 · G 组第 1 vs 最佳第 3（A/E/H/I/J 池） → 当前 D 组第 2倾向 Australia",
          "if_1st_r16": "16强 M94 · 对阵 D 组第 1 vs 最佳第 3 之胜者",
          "if_1st_corridor": "比利时头名通道",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 D 组第 1倾向 USA（强队）",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/乌拉圭 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 E/F/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "D 组：头名 USA 6 分 · 次席 Australia 3 分（32强绑定组）",
          "H 组：头名 Saudi Arabia 1 分 · 次席 Uruguay 同分（32强绑定组）",
          "E 组 Germany 6 分领跑",
          "F 组 Netherlands 4 分领跑",
          "I 组 Norway 3 分领跑"
        ],
        "path_tradeoff": "G 组次席与 D 组次席同槽，16 强进入 J/H 半区。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "暂无明确控分动机；出线后 32 强/16 强路径见下方绑定组预判。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "New Zealand 若取胜：积分 4，G 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Egypt 若取胜：积分 4，客场抢分将改变 G 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 D 组：头名 USA 6 分 · 次席 Australia 3 分（32强绑定组） · H 组：头名 Saudi Arabia 1 分 · 次席 Uruguay 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：G 组次席与 D 组次席同槽，16 强进入 J/H 半区。"
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Darije Kalezić",
          "age": 48,
          "nation": "黑山/新西兰",
          "tenure": "2024年—",
          "wc_exp": "2026 带队 · 大洋洲联赛经验",
          "style_tags": [
            "4-4-2",
            "Wood 支点",
            "Just 前插",
            "定位球"
          ],
          "formation_pref": "4-4-2 · Wood+Just 连线",
          "style_summary": "2-2 伊朗 Just 双响后士气大振；对埃及 Kalezić 预计 4-4-2 对攻，Wood 头球 + Just 前插 vs Salah。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "Wood 打满；Just 后段或替补",
            "avg_first_sub": "67'",
            "note": "G 组须抢分"
          },
          "when_leading": {
            "label": "4-5-1 收缩",
            "detail": "若意外领先：退守 + Wood 留前场。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "先丢球：60' 加强定位球。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "2-2 伊朗后信心提升；对埃及仍处下风。"
          },
          "vs_weak": {
            "label": "不适用",
            "detail": "G 组最弱之一。"
          },
          "tournament": "2-2 伊朗是大赛最佳表现；Salah 是全新级别考验。",
          "traits": [
            "Wood+Just",
            "定位球",
            "士气回升",
            "Salah 对位"
          ],
          "match_note": "2-2 伊朗 Just 双响——Wood+Just vs Salah 全新级别；温哥华凉爽利于对攻。"
        },
        "away": {
          "name": "Rui Vitória",
          "age": 54,
          "nation": "葡萄牙",
          "tenure": "2024年—",
          "wc_exp": "本菲卡/沙特联赛 · 2026 带队",
          "style_tags": [
            "4-2-3-1",
            "Salah 核心",
            "Marmoush 跑动",
            "定位球"
          ],
          "formation_pref": "4-2-3-1 · Salah RW",
          "style_summary": "1-1 比利时后 Vitória 强调 Salah+Marmoush 双核；对新西兰预计全场压制，定位球是破局手段。",
          "subs": {
            "timing": "首换 60–65 分钟",
            "pattern": "Trezeguet/Mostafa Mohamed 互替",
            "avg_first_sub": "63'",
            "note": "Salah 极少换下"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "1 球领先：Elneny 屏障。"
          },
          "when_trailing": {
            "label": "Salah 单核",
            "detail": "先丢球：堆边锋。"
          },
          "vs_strong": {
            "label": "对强队：低位+Salah",
            "detail": "对比利时 1-1 已验证。"
          },
          "vs_weak": {
            "label": "对弱队：穿盘",
            "detail": "对新西兰须 3 分。"
          },
          "tournament": "接替 Hassan 后战术更开放；Salah 仍是绝对核心。",
          "traits": [
            "Salah 依赖",
            "Marmoush",
            "必须取胜",
            "定位球"
          ],
          "match_note": "1-1 比利时后须 3 分——Salah+Marmoush 肋部 vs Wood 头球。"
        }
      },
      "upset_alert": {
        "favorite": "Egypt",
        "underdog": "New Zealand",
        "favorite_iso": "EGY",
        "index": 26,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 22,
        "verdict": "埃及 Salah 领衔但 1-1 比利时效率一般——Wood+Just 2-2 伊朗后冷门平局约 22%。",
        "tactical": "Vitória 4-2-3-1 vs Kalezić 4-4-2；Salah 肋部 vs Wood 头球。",
        "psychology": "埃及「须 3 分」；新西兰「2-2 伊朗可以再来」。",
        "historical": "2003 友谊赛伊朗 3-0 新西兰；G 组势均力敌。",
        "factors": [
          {
            "tag": "Wood+Just",
            "impact": "强",
            "detail": "2-2 伊朗 Just 双响"
          },
          {
            "tag": "Salah",
            "impact": "强",
            "detail": "G 组最大个人威胁"
          },
          {
            "tag": "气候",
            "impact": "低",
            "detail": "温哥华 19°C 凉爽"
          }
        ]
      }
    }
  ],
  "nextMatch": {
    "group": "H",
    "matchday": 2,
    "date": "2026-06-21",
    "time": "12:00",
    "time_local": "12:00 ET",
    "timezone": "EDT (UTC-4)",
    "time_beijing": "00:00",
    "date_beijing": "6月22日",
    "time_beijing_full": "北京时间 6月22日 00:00",
    "venue": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "home": {
      "name": "Spain",
      "iso": "es",
      "fifaRank": 3,
      "rating": 88
    },
    "away": {
      "name": "Saudi Arabia",
      "iso": "sa",
      "fifaRank": 58,
      "rating": 68
    },
    "teaser": "H组第2轮 · 西班牙 vs 沙特",
    "home_win": 76,
    "draw": 16,
    "away_win": 8,
    "predicted_score": "2-0",
    "key_player_home": "Lamine Yamal",
    "key_player_away": "Salem Al-Dawsari"
  },
  "upcomingMatches": [
    {
      "group": "G",
      "time_beijing_full": "北京时间 6月22日 03:00",
      "venue": "SoFi Stadium",
      "city": "Inglewood, USA",
      "home": {
        "name": "Belgium",
        "iso": "be"
      },
      "away": {
        "name": "Iran",
        "iso": "ir"
      },
      "teaser": "G组第2轮"
    },
    {
      "group": "H",
      "time_beijing_full": "北京时间 6月22日 06:00",
      "venue": "Hard Rock Stadium",
      "city": "Miami, USA",
      "home": {
        "name": "Uruguay",
        "iso": "uy"
      },
      "away": {
        "name": "Cape Verde",
        "iso": "cv"
      },
      "teaser": "H组第2轮"
    },
    {
      "group": "G",
      "time_beijing_full": "北京时间 6月22日 09:00",
      "venue": "BC Place",
      "city": "Vancouver, Canada",
      "home": {
        "name": "New Zealand",
        "iso": "nz"
      },
      "away": {
        "name": "Egypt",
        "iso": "eg"
      },
      "teaser": "G组第2轮"
    }
  ]
};
