// 今日赛事 — Day 25 · 16强续战 enriched
// Last updated: 2026-07-05T17:28:38+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-07-05T17:28:38+08:00",
  "syncSource": "FIFA 赛程 · Day 25 · 16强续战 enriched · 裁判/伤病/球星/赛场",
  "phase": "knockout",
  "phase_cn": "淘汰赛 · 16强",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 Day24 Agent：让球1/2 · 大小2/2 · 倾向★50% · 巴+2✓/加+0.5✗",
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
      "text": "🏁 M89：巴拉圭 0-1 法国 · Mbappé 70'点球 · 法国晋级8强",
      "time": "7月5日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 M90：加拿大 0-3 摩洛哥 · Ounahi 双响 · 摩洛哥晋级8强",
      "time": "7月5日"
    },
    {
      "tag": "PREVIEW",
      "text": "⚔️ 16强 7/6：巴西-挪威(04:00) · 墨西哥-英格兰(08:00)",
      "time": "7月6日"
    },
    {
      "tag": "PREVIEW",
      "text": "8强预告：法国 vs 摩洛哥(7/9) · 巴西/挪威 vs 墨西哥/英格兰(7/12)",
      "time": "路径"
    }
  ],
  "todayMatches": [
    {
      "id": "m91",
      "fifa_match_number": 91,
      "fifa_match_id": "400021532",
      "group": "KO",
      "round": "R16",
      "round_cn": "16强",
      "matchday": null,
      "knockout_slot": "M91 · 16强 · M76胜(巴西) vs M78胜(挪威)",
      "knockout_next": "胜者 → M99（8强 · 对 M92 胜者）",
      "date": "2026-07-05",
      "time": "16:00",
      "time_local": "16:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "04:00",
      "date_beijing": "7月6日",
      "time_beijing_full": "北京时间 7月6日 04:00",
      "venue": "MetLife Stadium",
      "city": "East Rutherford, USA",
      "note": "16强 M91 · 巴西 vs 挪威 · 纽约/新泽西",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Alisson; Danilo, Marquinhos, Bento, Wendell; Guimarães, Paquetá; Raphinha, Rodrygo, Vinícius Júnior; Richarlison",
          "away": "Nyland; Ryerson, Høibråten, Nouri, Meling; Berg, Nygren; Ødegaard, Berge, Haaland; Ekitiké",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Brazil",
        "iso": "br",
        "flag": "",
        "fifa_rank": 5,
        "rating": 88,
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
            "desc": "一对一 · 破局核心"
          },
          {
            "name": "Raphinha",
            "pos": "RW",
            "club": "Barcelona",
            "rating": 8.4,
            "desc": "边路突破 · 宽度"
          },
          {
            "name": "Bruno Guimarães",
            "pos": "CDM",
            "club": "Newcastle",
            "rating": 8.3,
            "desc": "后腰屏障 · 出球"
          }
        ],
        "star": {
          "name": "Vinícius Júnior",
          "pos": "LW",
          "club": "Real Madrid",
          "rating": 9,
          "desc": "C组冠军 · 左路爆点"
        },
        "injuries": [
          {
            "player": "Vinícius Júnior",
            "status": "FIT",
            "note": "左路爆点 · C组冠军核心",
            "confirmed": true
          },
          {
            "player": "Rodrygo",
            "status": "FIT",
            "note": "右路宽度",
            "confirmed": true
          },
          {
            "player": "Raphinha",
            "status": "FIT",
            "note": "边路突破",
            "confirmed": true
          },
          {
            "player": "Marquinhos",
            "status": "DOUBT",
            "note": "肌肉轻微不适 · 赛前队检",
            "confirmed": false
          }
        ],
        "rumors": [
          "Dorival：「挪威有 Haaland，但我们有完整的进攻体系——须早破门」",
          "预计 4-2-3-1：Vini 左路 · Rodrygo 右路 · Richarlison 支点",
          "2-1 淘汰日本后状态正佳 · 控球+宽度是破挪威铁桶关键",
          "深盘热门 · 须防 Haaland 反击偷一个"
        ]
      },
      "away": {
        "name": "Norway",
        "iso": "no",
        "flag": "",
        "fifa_rank": 42,
        "rating": 76,
        "form": [
          "W",
          "L",
          "W",
          "W",
          "W"
        ],
        "coach": "Ståle Solbakken",
        "stars": [
          {
            "name": "Erling Haaland",
            "pos": "ST",
            "club": "Man City",
            "rating": 9.2,
            "desc": "禁区终结 · 反击威胁"
          },
          {
            "name": "Martin Ødegaard",
            "pos": "AM",
            "club": "Arsenal",
            "rating": 8.5,
            "desc": "组织轴 · 定位球"
          },
          {
            "name": "Felix Nmecha",
            "pos": "CM",
            "club": "Dortmund",
            "rating": 7.8,
            "desc": "中场跑动 · 屏障"
          }
        ],
        "star": {
          "name": "Erling Haaland",
          "pos": "ST",
          "club": "Man City",
          "rating": 9.2,
          "desc": "终结核心 · 2-1 淘汰科特迪瓦"
        },
        "injuries": [
          {
            "player": "Erling Haaland",
            "status": "FIT",
            "note": "终结核心 · 2-1 淘汰科特迪瓦",
            "confirmed": true
          },
          {
            "player": "Martin Ødegaard",
            "status": "FIT",
            "note": "组织轴 · 出球",
            "confirmed": true
          },
          {
            "player": "Alexander Sorloth",
            "status": "FIT",
            "note": "替补奇兵",
            "confirmed": true
          }
        ],
        "rumors": [
          "Solbakken：「对巴西没人看好我们——但 Haaland 能进任何队的球」",
          "预计 4-3-3：Haaland 单箭头 · Ødegaard 前腰 · 低位+反击",
          "I组出线后状态回升 · 受让深盘有守盘空间",
          "须限制 Vini 一对一 · 定位球是少数得分手段"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 1,
        "away_wins": 0,
        "recent": [
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "4-0",
            "winner": "Brazil"
          }
        ],
        "note": "巴西历史占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-06",
        "name": "Ismail Elfath",
        "nation": "USA",
        "iso": "us",
        "wc_experience": "2026 世界杯 · 16强 M91 主裁 · CONCACAF 精英 · 执法巴西 vs 挪威",
        "avg_yellow": 4.2,
        "avg_red": 0.12,
        "avg_penalty": 0.28,
        "home_win_rate": 52,
        "bias_index": 50,
        "bias_note": "美国主裁执法 MetLife 开放场。巴西控球 vs 挪威 Haaland 反击；对身体对抗尺度稳健，定位球判罚果断。",
        "tendencies": [
          "FIFA 官方主裁 · Ismail Elfath（美国）",
          "第四官员 Said Martinez（洪都拉斯）",
          "Vini vs Haaland · 新泽西夏夜"
        ],
        "officials": {
          "referee": "Ismail Elfath (USA)",
          "fourth": "Said Martinez (HON)"
        },
        "fifa_match_id": "400021532",
        "note": "FIFA M91 · 巴西 vs 挪威 · MetLife",
        "updated": "2026-07-05T17:28:38+08:00"
      },
      "prediction": {
        "home_win": 52,
        "draw": 30,
        "away_win": 18,
        "score": "1-1",
        "confidence": 73,
        "xg_home": 1.75,
        "xg_away": 0.95,
        "key_factor": "16强 M91 · 巴西 vs 挪威 · Vini/Haaland 对位 · 泊松 2-1/2-0",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.3
          },
          {
            "score": "1-0",
            "prob": 10.2
          },
          {
            "score": "2-1",
            "prob": 8.9
          },
          {
            "score": "0-1",
            "prob": 8.5
          },
          {
            "score": "1-2",
            "prob": 7.4
          },
          {
            "score": "2-0",
            "prob": 7.3
          },
          {
            "score": "0-0",
            "prob": 7.1
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M91 · 16强 · 巴西 vs 挪威 · 胜者 M99 对 M92 胜者"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "新泽西夏夜 · 28°C · 湿度 68% · 降雨概率 20% · 东南风 2级；M91 巴西 vs 挪威 · 气候影响低 · 开放球场利于巴西控球（28°C 夜场）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "16强 M91 · 巴西 vs 挪威 · Vini/Haaland 对位 · 泊松 2-1/2-0"
          }
        ],
        "base_home_win": 51,
        "base_draw": 31,
        "base_away_win": 19,
        "depth_calibrated": true,
        "draw_context": {
          "drawBoost": 7,
          "ironBucket": true,
          "closeXg": false,
          "gap": 0.8,
          "notes": [
            "热门难破密集"
          ],
          "qual_dynamics": null
        },
        "qual_dynamics": null,
        "xg_poisson_home": 1.44,
        "xg_poisson_away": 1.21,
        "xg_tier_calibrated": true,
        "score_prob": 12.3,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 12.3
          },
          {
            "score": "1-0",
            "prob": 10.2
          },
          {
            "score": "2-1",
            "prob": 8.9
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
        "temp": 28,
        "humidity": 68,
        "altitude_m": 3,
        "rain_chance": 20,
        "wind": "东南风 2级",
        "condition_cn": "新泽西夏夜",
        "impact_level": "LOW",
        "impact_summary": "M91 巴西 vs 挪威 · 气候影响低 · 开放球场利于巴西控球",
        "home_adapt": 85,
        "away_adapt": 84,
        "weather_factors": [
          {
            "label": "28°C 夜场",
            "impact": "低",
            "detail": "北京时间 7月6日 04:00"
          }
        ],
        "forecast_updated": "2026-07-06 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "乙巳日",
          "day_summary": "乙巳日——木火相生",
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
        "home_score": 62,
        "away_score": 38,
        "mystic_verdict": "巴西火木盛，挪威金水锐。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": 0.75,
        "tier_label": "Brazil -0.75 · Norway +0.75",
        "implied_tier": 0.25,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Norway（约 61%）",
        "analysis": "M91 · 巴西 vs 挪威 · 巴-0/0.5@1.00/挪+0/0.5@0.89 · 大小 2.5/3 大0.84小0.94。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 11.8
            },
            {
              "score": "1-1",
              "prob": 11.2
            },
            {
              "score": "2-0",
              "prob": 10.3
            }
          ],
          "one_goal_win_pct": 24.7,
          "two_plus_win_pct": 31.4,
          "full_cover_pct": 48.9,
          "dog_hold_pct": 51.1,
          "fav_win_pct": 56.1,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.2,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": 0.122,
          "dog_cover_ev": -0.122,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 2.7,
          "fair_totals_line": 2,
          "over_2_5_pct": 50.5,
          "over_3_pct": 28.4,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 56.1%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 56.1,
          "dog_hold_pct_raw": 43.9
        },
        "spread_odds": {
          "fav": 1,
          "dog": 0.89,
          "note": "Brazil 1 · Norway 0.89"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.75,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5–3 个",
          "implied_xg_total": 2.7,
          "fair_line": 2,
          "line_gap": 0.75,
          "over_pct": 39,
          "under_pct": 61,
          "signal": "high_line",
          "signal_cn": "参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "总进球参考高于合理值，模型偏小比分。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看小比分（超 2.75 约 61% 难达）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.75,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "Brazil -0.5@0.83 · Norway +0.5@0.99",
          "spread_now_cn": "Brazil -0/0.5@1 · Norway +0/0.5@0.89",
          "totals_now_cn": "大小 2.5/3 · 大 0.84 / 小 0.94",
          "tag": "book_trap_fav",
          "tag_cn": "精算诱上",
          "tag_color": "#D95F6A",
          "detail_cn": "升 0.25 档 · 热门 0.83→1（抬水） · 受让 0.99→0.89（降水） 现盘去水隐含：Brazil 48.6% · Norway 51.4%（超收 2.9%） 模型穿盘（现档 Brazil -0.75 · Norway +0.75）：Brazil 48.9% · Norway 51.1% 模型−市场：Brazil +0.3pp · Norway -0.3pp 期望 ROI@现水：Brazil -2.2% · Norway +47.7% 升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
          "actuarial": {
            "actuarial_type": "book_trap_fav",
            "actuarial_cn": "精算诱上",
            "actuarial_color": "#D95F6A",
            "actuarial_desc": "升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
            "summary_cn": "升 0.25 档 · 热门 0.83→1（抬水） · 受让 0.99→0.89（降水） 现盘去水隐含：Brazil 48.6% · Norway 51.4%（超收 2.9%） 模型穿盘（现档 Brazil -0.75 · Norway +0.75）：Brazil 48.9% · Norway 51.1% 模型−市场：Brazil +0.3pp · Norway -0.3pp 期望 ROI@现水：Brazil -2.2% · Norway +47.7% 升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
            "line_delta": 0.25,
            "line_delta_cn": "升 0.25 档",
            "fav_odds_delta": 0.17,
            "dog_odds_delta": -0.1,
            "water_move_cn": "热门 0.83→1（抬水） · 受让 0.99→0.89（降水）",
            "open_tier": 0.5,
            "open_tier_label": "Brazil -0.5 · Norway +0.5",
            "now_tier": 0.75,
            "implied_tier": 0.25,
            "open_tier_gap": 0.25,
            "now_tier_gap": 0.5,
            "open_devig": {
              "fav_pct": 52.1,
              "dog_pct": 47.9,
              "overround_pct": 4.9
            },
            "now_devig": {
              "fav_pct": 48.6,
              "dog_pct": 51.4,
              "overround_pct": 2.9
            },
            "model_cover_open_pct": 48.9,
            "model_cover_now_pct": 48.9,
            "model_dog_cover_now_pct": 51.1,
            "market_fav_cover_now_pct": 48.6,
            "market_dog_cover_now_pct": 51.4,
            "model_vs_market_fav_pp": 0.3,
            "model_vs_market_dog_pp": -0.3,
            "fav_roi_pct": -2.2,
            "dog_roi_pct": 47.7,
            "fav_name": "Brazil",
            "dog_name": "Norway"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "book_trap_fav",
          "actuarial_cn": "精算诱上",
          "actuarial_color": "#D95F6A",
          "actuarial_desc": "升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
          "summary_cn": "升 0.25 档 · 热门 0.83→1（抬水） · 受让 0.99→0.89（降水） 现盘去水隐含：Brazil 48.6% · Norway 51.4%（超收 2.9%） 模型穿盘（现档 Brazil -0.75 · Norway +0.75）：Brazil 48.9% · Norway 51.1% 模型−市场：Brazil +0.3pp · Norway -0.3pp 期望 ROI@现水：Brazil -2.2% · Norway +47.7% 升档或维持深盘但热门抬水、受让降水，庄家限损热门方向、引导资金接受让。",
          "line_delta": 0.25,
          "line_delta_cn": "升 0.25 档",
          "fav_odds_delta": 0.17,
          "dog_odds_delta": -0.1,
          "water_move_cn": "热门 0.83→1（抬水） · 受让 0.99→0.89（降水）",
          "open_tier": 0.5,
          "open_tier_label": "Brazil -0.5 · Norway +0.5",
          "now_tier": 0.75,
          "implied_tier": 0.25,
          "open_tier_gap": 0.25,
          "now_tier_gap": 0.5,
          "open_devig": {
            "fav_pct": 52.1,
            "dog_pct": 47.9,
            "overround_pct": 4.9
          },
          "now_devig": {
            "fav_pct": 48.6,
            "dog_pct": 51.4,
            "overround_pct": 2.9
          },
          "model_cover_open_pct": 48.9,
          "model_cover_now_pct": 48.9,
          "model_dog_cover_now_pct": 51.1,
          "market_fav_cover_now_pct": 48.6,
          "market_dog_cover_now_pct": 51.4,
          "model_vs_market_fav_pp": 0.3,
          "model_vs_market_dog_pp": -0.3,
          "fav_roi_pct": -2.2,
          "dog_roi_pct": 47.7,
          "fav_name": "Brazil",
          "dog_name": "Norway"
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
          "tendency_cn": "更倾向让球盘（挪威受让）",
          "tendency_reason_cn": "巴西升档 -0/0.5 但热门抬到 1.00、挪威 +0/0.5 降水 0.89 低水；引擎「大众心理预期偏高」+ Haaland 反击 · 1-0/1-1 挪威守盘价值 · ★挪+0/0.5 · 大2.5/3副项。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "dog",
            "label_cn": "挪威 +0/0.5 @0.89",
            "reason_cn": "升档但巴西 1.00 高水、挪威 0.89 低水资金进受让；须净胜2球才全穿(-0/0.5)，1-0 挪威赢半/1-1 全赢 · Haaland 爆点 · ★主项。"
          },
          "totals": {
            "side": "over",
            "label_cn": "大球 2.5/3 @0.84",
            "reason_cn": "线升 2.5/3 且 over 0.84 降水低水 · Haaland+Vini 对攻 · 模型总 xG 约2.7 · 3球全赢/2球赢半 · 副项。",
            "manual_override": true,
            "recommended_side": "under"
          },
          "picked_at": "2026-07-06-prematch",
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
            "over_pct": 39,
            "line_gap": 0.75
          },
          "ko_totals_policy": {
            "enabled": true,
            "rule_id": "R9",
            "rule_cn": "★=大小无模型/盘冲突 · 副项仅大球 · 大信心仅绑★=大小",
            "applied_at": "buildDepthCalibration"
          }
        },
        "applied_delta": {
          "home_win": 2,
          "draw": -1,
          "away_win": -1
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 -1% · 客 -1%",
        "adjusted_probs": {
          "home_win": 52,
          "draw": 30,
          "away_win": 18
        },
        "display_summary": {
          "fav_name": "Brazil",
          "expected_total_goals": 2.47,
          "poisson_fav_win_pct": 53.1,
          "small_lead_pct": 25.2,
          "small_example_score": "1-0",
          "small_example_pct": 13.1,
          "big_cover_pct": 27.8,
          "big_example_score": "2-0",
          "big_example_pct": 10.4,
          "win_shape": {
            "fav_name": "Brazil",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 30%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 13.1,
                "pct": 24.8
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.1,
                "pct": 22.8
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 16,
                "pct": 30
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 11.9,
                "pct": 22.4
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 47.6
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
                "pct": 22.4
              }
            ],
            "fav_win_pct": 52
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 36 分",
            "first_goal_wait": 36,
            "fast_pct": 56.5,
            "moderate_pct": 14.8,
            "slow_pct": 28.7,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 56.5
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 28.7
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Brazil：Marquinhos 存疑 · Norway 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M91 巴西 vs 挪威 · 气候影响低 · 开放球场利于巴西控球"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：热门难破密集（平 +7%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.75,
            "baseline_away": 0.95,
            "adjusted_home": 1.59,
            "adjusted_away": 0.91,
            "note": "基准 xG 1.75–0.95 → 调整后 1.59–0.91"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "Brazil -0.25 · Norway +0.25",
            "market_tier_label": "Brazil -0.75 · Norway +0.75",
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
                "pct": 47.6
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
                "pct": 22.4
              }
            ],
            "margin_line_cn": "Brazil · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 48.1,
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
            "model_total_xg": 2.5,
            "totals_line_gap": 0.75,
            "totals_high_pct": 34.5,
            "totals_low_pct": 65.5,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 23.6,
            "win_margin2_low_total_pct": 10.4,
            "win_margin2_high_total_pct": 17.4,
            "readout_cn": "取胜约 52%；若取胜，以「险胜收工」为主（47.6%）。 对着赛前净胜参考，净胜≥1（全达标）约 48.1%；对着总进球参考 2.75，模型超线概率约 34.5%。"
          },
          "totals_line": 2.75,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 13.1
            },
            {
              "score": "1-1",
              "pct": 11.9
            },
            {
              "score": "2-0",
              "pct": 10.4
            }
          ],
          "totals_view": {
            "expected_total": 2.5,
            "fair_line": 2,
            "market_line": 2.75,
            "line_gap": 0.75,
            "over_pct": 34.5,
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
              "over_pct": 34.5,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.5 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Brazil -0.75 穿盘：有达标可能",
            "sub_cn": "Brazil 胜 53.3% · 胜后穿 100% · Norway +0.75 守 51.8% 进球氛围：略偏闷 平局权重约 30%，小组赛易出守平——勿只盯胜负一方。",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Brazil",
              "dog_name": "Norway",
              "fav_handicap_cn": "Brazil -0.75",
              "dog_handicap_cn": "Norway +0.75",
              "market_expect_cn": "Brazil -0.75 · 净胜≥1",
              "meet_pct": 48.2,
              "dog_hold_pct": 51.8,
              "fav_win_pct": 53.3,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 53.3,
              "meet_pct_label": "Brazil -0.75 穿盘概率（校准）",
              "dog_hold_label": "Norway +0.75 守住概率（校准）",
              "two_stage_cn": "Brazil 取胜约 53.3% · 赢球后穿盘约 100% · Norway +0.75 守住约 51.8%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "Brazil -0.75 穿盘：有达标可能",
              "pill_cn": "Brazil 胜 53.3% · 胜后穿 100% · Norway +0.75 守 51.8%",
              "detail_cn": "Brazil 取胜约 53.3% · 赢球后穿盘约 100% · Norway +0.75 守住约 51.8%（泊松 raw 53.3% → 校准 48.2%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 48.2,
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
              "section_intro_cn": "对照总进球参考 2.75，看偏闷还是偏精彩",
              "pill_cn": "略偏闷（弱）",
              "detail_cn": "略偏闷，模型更看小比分（难超线 2.75）；弱信号。",
              "headline_cn": "进球氛围：略偏闷",
              "show_lean": false,
              "over_pct": 34.5,
              "line_gap": 0.75,
              "market_line": 2.75,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.75",
              "caution_public_high": false
            },
            "draw_risk": {
              "level": "high",
              "color": "#C8A96E",
              "note": "平局权重约 30%，小组赛易出守平——勿只盯胜负一方。"
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
                  "fav_name": "Brazil",
                  "dog_name": "Norway",
                  "fav_handicap_cn": "Brazil -0.75",
                  "dog_handicap_cn": "Norway +0.75",
                  "market_expect_cn": "Brazil -0.75 · 净胜≥1",
                  "meet_pct": 48.2,
                  "dog_hold_pct": 51.8,
                  "fav_win_pct": 53.3,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 53.3,
                  "meet_pct_label": "Brazil -0.75 穿盘概率（校准）",
                  "dog_hold_label": "Norway +0.75 守住概率（校准）",
                  "two_stage_cn": "Brazil 取胜约 53.3% · 赢球后穿盘约 100% · Norway +0.75 守住约 51.8%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Brazil -0.75 穿盘：有达标可能",
                  "pill_cn": "Brazil 胜 53.3% · 胜后穿 100% · Norway +0.75 守 51.8%",
                  "detail_cn": "Brazil 取胜约 53.3% · 赢球后穿盘约 100% · Norway +0.75 守住约 51.8%（泊松 raw 53.3% → 校准 48.2%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 48.2,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "Brazil 胜 53.3% · 胜后穿 100% · Norway +0.75 守 51.8%",
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
                  "over_pct": 34.5,
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
              "team": "Brazil",
              "first_goal_pct": 63.6,
              "start_score": "1-0",
              "fav_name": "Brazil",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 92.6,
              "small_lead_pct": 29.8,
              "big_lead_pct": 46.3,
              "fav_win_pct": 76.1,
              "fav_draw_pct": 16.5,
              "fav_lose_pct": 7.3,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Brazil 保持胜果（净胜≥1）",
                  "pct": 76.1
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 16.5
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 7.3
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 36.7 分",
                "first_goal_wait": 36.7,
                "fast_pct": 48.8,
                "moderate_pct": 14.6,
                "slow_pct": 36.6,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 48.8
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.6
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 36.6
                  }
                ]
              },
              "big_delta": 18.5,
              "small_delta": 4.6,
              "narrative": "Brazil 先破门（已 1-0） → 「巩固防守」；Norway 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Brazil",
                "state_label": "Brazil 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 47.6
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
                    "pct": 22.4
                  }
                ],
                "margin_line_cn": "Brazil · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 76.1,
                "margin_half_pct": 0,
                "margin_fail_pct": 29.8,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.75,
                "totals_line_cn": "总进球参考 2.75",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.01,
                "totals_line_gap": 0.5,
                "totals_high_pct": 46,
                "totals_low_pct": 54,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 29.9,
                "win_margin2_low_total_pct": 16.4,
                "win_margin2_high_total_pct": 29.9,
                "readout_cn": "Brazil 已 1-0 领先：仍取胜约 76.1%。 对着总进球参考 2.75，模型超线概率约 46%。 常见 2-0 收尾（相对总进球参考 2.75仍偏小比分）。"
              }
            },
            {
              "side": "away",
              "team": "Norway",
              "first_goal_pct": 36.4,
              "start_score": "0-1",
              "fav_name": "Brazil",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 53.2,
              "small_lead_pct": 16.3,
              "big_lead_pct": 9.8,
              "fav_win_pct": 26.1,
              "fav_draw_pct": 27.1,
              "fav_lose_pct": 46.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Brazil 追平（平局）",
                  "pct": 27.1
                },
                {
                  "key": "win1",
                  "label": "Brazil 净胜1球翻盘（如 2-1）",
                  "pct": 16.3
                },
                {
                  "key": "win2",
                  "label": "Brazil 净胜≥2球翻盘（如 3-1）",
                  "pct": 9.8
                },
                {
                  "key": "upset_hold",
                  "label": "Norway 保持胜果至终场",
                  "pct": 46.9
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 35.3 分",
                "first_goal_wait": 35.3,
                "fast_pct": 50.2,
                "moderate_pct": 14.7,
                "slow_pct": 35.2,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 50.2
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 35.2
                  }
                ]
              },
              "big_delta": -18,
              "small_delta": -8.9,
              "narrative": "Norway 先破门（已 0-1） → 「巩固防守」；Brazil 「组织反扑」。热门先丢球（已 0-1），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.5 · 合理值 2 · 总进球参考 2.75（高于合理值 0.75） · 高于合理值 0.75 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.75",
              "totals_high_pct": 34.5,
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
            "xg_home_ht": 0.7,
            "xg_away_ht": 0.4,
            "xg_home_2h": 0.89,
            "xg_away_2h": 0.51,
            "home_win": 38.1,
            "draw": 43.3,
            "away_win": 18.6,
            "top_score": "0-0",
            "top_score_prob": 33.3,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 33.3
              },
              {
                "score": "1-0",
                "prob": 23.3
              },
              {
                "score": "0-1",
                "prob": 13.3
              }
            ],
            "ht_goals_expected": 1.1,
            "ht_over_0_5_pct": 66.7,
            "ht_over_1_5_pct": 30.1,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.7–0.4（约占全场 44%） · 最可能 0-0（33.3%） · 胜平负 38.1/43.3/18.6 · 半场≥1球约 66.7%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】Brazil · 常规对抗。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5（模型微调：主胜 +2% · 平 -1% · 客 -1%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.7,
          "xg_gap": 0.8,
          "xg_home": 1.75,
          "xg_away": 0.95,
          "xg_baseline_home": 1.75,
          "xg_baseline_away": 0.95,
          "xg_note": "结构推演用基准 xG 1.75–0.95（进球氛围用调整后 1.59–0.91）",
          "lean_note": "进球氛围偏闷（预测约 2.5），但「弱队开花」结构需防弱队开花抬高总进球",
          "fav_name": "Brazil",
          "dog_name": "Norway",
          "fav_xg": 1.75,
          "dog_xg": 0.95,
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
              "label": "Norway进球",
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
              "label": "仅Brazil进球",
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
          "prob_over_line": 39,
          "prob_meet_guess": 50.2,
          "guess_n": 3,
          "prob_4_plus": 27.9,
          "prob_2_or_less": 49.8,
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
          "summary_cn": "【路径·基准 xG】合计 2.7 · Brazil 1.75 / Norway 0.95 → 主路径「弱队开花」约 41% · 预防大比分。 至少 3 球约 50.2% · 超 2.75 约 39% · ≤2球 49.8%。样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": 0.75,
        "tier_label": "Brazil -0.75 · Norway +0.75",
        "totals_line": 2.75,
        "over_pct": 34.5,
        "fair_line": 2,
        "line_gap": 0.75,
        "full_cover_pct": 48.2,
        "fav_win_pct": 53.3,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "Brazil -0.75 · 净胜≥1",
        "line_move_tag": "book_trap_fav",
        "line_move_cn": "精算诱上",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（挪威受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "挪威 +0/0.5 @0.89",
        "agent_totals_cn": "大球 2.5/3 @0.84",
        "agent_totals_skipped": false,
        "agent_totals_skip_cn": null,
        "ko_totals_policy": "R9",
        "totals_level": "mild_low",
        "totals_show_lean": false,
        "totals_lean_side": "dull"
      }
    },
    {
      "id": "m92",
      "fifa_match_number": 92,
      "fifa_match_id": "400021531",
      "group": "KO",
      "round": "R16",
      "round_cn": "16强",
      "matchday": null,
      "knockout_slot": "M92 · 16强 · M79胜(墨西哥) vs M80胜(英格兰)",
      "knockout_next": "胜者 → M99（8强 · 对 M91 胜者）",
      "date": "2026-07-05",
      "time": "20:00",
      "time_local": "20:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "08:00",
      "date_beijing": "7月6日",
      "time_beijing_full": "北京时间 7月6日 08:00",
      "venue": "Estadio Azteca",
      "city": "Mexico City, Mexico",
      "note": "16强 M92 · 墨西哥 vs 英格兰 · 墨西哥城",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Acevedo; Montes, Héctor Moreno, Vásquez, Arteaga; Chávez, Pizarro, Lozano; Quiñones, Jiménez, Vega",
          "away": "Pickford; Walker, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, Palmer; Kane",
          "source": "媒体预测",
          "alt": null
        }
      },
      "home": {
        "name": "Mexico",
        "iso": "mx",
        "flag": "",
        "fifa_rank": 14,
        "rating": 82,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Javier Aguirre",
        "stars": [
          {
            "name": "Raúl Jiménez",
            "pos": "ST",
            "club": "Fulham",
            "rating": 8.1,
            "desc": "支点 · 定位球"
          },
          {
            "name": "Hirving Lozano",
            "pos": "LW",
            "club": "PSV",
            "rating": 7.9,
            "desc": "边路速度 · 一对一"
          },
          {
            "name": "Edson Álvarez",
            "pos": "CDM",
            "club": "West Ham",
            "rating": 8,
            "desc": "后腰屏障 · 犯规打断"
          }
        ],
        "star": {
          "name": "Raúl Jiménez",
          "pos": "ST",
          "club": "Fulham",
          "rating": 8.1,
          "desc": "Azteca 支点 · A组冠军"
        },
        "injuries": [
          {
            "player": "Raúl Jiménez",
            "status": "FIT",
            "note": "Azteca 支点 · A组冠军",
            "confirmed": true
          },
          {
            "player": "Edson Álvarez",
            "status": "FIT",
            "note": "后腰屏障",
            "confirmed": true
          },
          {
            "player": "Hirving Lozano",
            "status": "FIT",
            "note": "边路速度",
            "confirmed": true
          },
          {
            "player": "Guillermo Ochoa",
            "status": "FIT",
            "note": "门将 · Azteca 守护神",
            "confirmed": true
          }
        ],
        "rumors": [
          "Aguirre：「Azteca 是我们的第12人——对英格兰要打出主场气势」",
          "预计 4-3-3：Jiménez 支点 · Lozano/Vega 双翼 · 高位逼抢",
          "2-0 淘汰厄瓜多尔 · 主场+高原是最大武器",
          "受让浅盘 · 1-1/1-0 是高频路径"
        ]
      },
      "away": {
        "name": "England",
        "iso": "gb-eng",
        "flag": "",
        "fifa_rank": 4,
        "rating": 87,
        "form": [
          "W",
          "W",
          "W",
          "W",
          "W"
        ],
        "coach": "Gareth Southgate",
        "stars": [
          {
            "name": "Harry Kane",
            "pos": "ST",
            "club": "Bayern",
            "rating": 9,
            "desc": "终结 · 组织 · 定位球"
          },
          {
            "name": "Bukayo Saka",
            "pos": "RW",
            "club": "Arsenal",
            "rating": 8.6,
            "desc": "右路爆点 · 一对一"
          },
          {
            "name": "Phil Foden",
            "pos": "AM",
            "club": "Man City",
            "rating": 8.5,
            "desc": "肋部破局 · 创造力"
          }
        ],
        "star": {
          "name": "Harry Kane",
          "pos": "ST",
          "club": "Bayern",
          "rating": 9,
          "desc": "锋线核心 · L组全胜"
        },
        "injuries": [
          {
            "player": "Harry Kane",
            "status": "FIT",
            "note": "锋线核心 · 终结+组织",
            "confirmed": true
          },
          {
            "player": "Bukayo Saka",
            "status": "FIT",
            "note": "右路爆点",
            "confirmed": true
          },
          {
            "player": "Phil Foden",
            "status": "FIT",
            "note": "肋部破局",
            "confirmed": true
          },
          {
            "player": "John Stones",
            "status": "DOUBT",
            "note": "小腿存疑 · 或 Guehi 搭档",
            "confirmed": false
          }
        ],
        "rumors": [
          "Southgate：「Azteca 氛围会很强——但我们有 Kane 这样的世界级射手」",
          "预计 4-2-3-1：Kane 单箭头 · Saka/Foden 双翼 · Rice 屏障",
          "L组全胜出线 · 锋线火力足但高原适应是隐患",
          "浅让 -0/0.5 · 早破门避免陷入闷战"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 2,
        "recent": [
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "0-1",
            "winner": "England"
          }
        ],
        "note": "英格兰近绩占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA Match Centre · api.fifa.com · 2026-07-06",
        "name": "Alireza Faghani",
        "nation": "Australia",
        "iso": "au",
        "wc_experience": "2026 世界杯 · 16强 M92 主裁 · AFC 精英 · 执法墨西哥 vs 英格兰",
        "avg_yellow": 4.4,
        "avg_red": 0.1,
        "avg_penalty": 0.3,
        "home_win_rate": 48,
        "bias_index": 50,
        "bias_note": "伊朗裔澳籍主裁执法 Azteca 高原夜场。墨西哥主场氛围 vs 英格兰三狮；对拖延时间容忍度低，关键判罚果断。",
        "tendencies": [
          "FIFA 官方主裁 · Alireza Faghani（澳大利亚）",
          "第四官员 Jalal Jayed（摩洛哥）",
          "Azteca 高原 · Kane vs Jiménez"
        ],
        "officials": {
          "referee": "Alireza Faghani (AUS)",
          "fourth": "Jalal Jayed (MAR)"
        },
        "fifa_match_id": "400021531",
        "note": "FIFA M92 · 墨西哥 vs 英格兰 · Azteca",
        "updated": "2026-07-05T17:28:38+08:00"
      },
      "prediction": {
        "home_win": 33,
        "draw": 29,
        "away_win": 37,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.35,
        "xg_away": 1.45,
        "key_factor": "16强 M92 · 墨西哥 vs 英格兰 · Azteca 主场 vs 三狮锋线 · 泊松 1-1/1-2",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.6
          },
          {
            "score": "0-1",
            "prob": 9.9
          },
          {
            "score": "1-0",
            "prob": 9.5
          },
          {
            "score": "1-2",
            "prob": 8.3
          },
          {
            "score": "2-1",
            "prob": 8
          },
          {
            "score": "0-0",
            "prob": 7.5
          },
          {
            "score": "0-2",
            "prob": 6.5
          }
        ],
        "insight_factors": [
          {
            "icon": "⚔️",
            "label": "淘汰赛形势",
            "text": "M92 · 16强 · 墨西哥 vs 英格兰 · 胜者 M99 对 M91 胜者"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "墨西哥城高原夜场 · 22°C · 湿度 55% · 降雨概率 30% · 海拔 2240m · 西南风 1级；M92 墨西哥 vs 英格兰 · 海拔2240m · 主场适应优势显著（2240m 高原）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "16强 M92 · 墨西哥 vs 英格兰 · Azteca 主场 vs 三狮锋线 · 泊松 1-1/1-2"
          }
        ],
        "base_home_win": 33,
        "base_draw": 29,
        "base_away_win": 37,
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
        "xg_poisson_home": 1.27,
        "xg_poisson_away": 1.32,
        "xg_tier_calibrated": false,
        "score_prob": 12.6,
        "score_top3": [
          {
            "score": "1-1",
            "prob": 12.6
          },
          {
            "score": "0-1",
            "prob": 9.9
          },
          {
            "score": "1-0",
            "prob": 9.5
          }
        ],
        "expected_score": "1-1"
      },
      "weather": {
        "city": "墨西哥城",
        "country": "墨西哥",
        "venue": "Estadio Azteca",
        "pitch_surface": "天然草",
        "stadium_type": "开放式",
        "temp": 22,
        "humidity": 55,
        "altitude_m": 2240,
        "rain_chance": 30,
        "wind": "西南风 1级",
        "condition_cn": "墨西哥城高原夜场",
        "impact_level": "MEDIUM",
        "impact_summary": "M92 墨西哥 vs 英格兰 · 海拔2240m · 主场适应优势显著",
        "home_adapt": 88,
        "away_adapt": 82,
        "weather_factors": [
          {
            "label": "2240m 高原",
            "impact": "中",
            "detail": "北京时间 7月6日 08:00"
          }
        ],
        "forecast_updated": "2026-07-06 00:00 北京"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "甲午月",
          "day": "乙巳日",
          "day_summary": "乙巳日——木火相生",
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
        "home_score": 48,
        "away_score": 52,
        "mystic_verdict": "墨西哥土火守，英格兰金水进。",
        "disclaimer": "文化解读 · 非竞技推演"
      },
      "depth_calibration": {
        "tier_home": -0.25,
        "tier_label": "England -0.25 · Mexico +0.25",
        "implied_tier": 0,
        "tier_gap": -0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Mexico（约 64%）",
        "analysis": "M92 · 墨西哥 vs 英格兰 · 英-0/0.5@1.08/墨+0/0.5@0.81 · 大小 2/2.5 大1.11小0.78。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.9
            },
            {
              "score": "0-1",
              "prob": 8.8
            },
            {
              "score": "1-2",
              "prob": 8.6
            }
          ],
          "one_goal_win_pct": 19.4,
          "two_plus_win_pct": 15.7,
          "full_cover_pct": 47.9,
          "dog_hold_pct": 52.1,
          "fav_win_pct": 39.6,
          "cover_given_win_pct": 100,
          "grid_max_goals": 6,
          "grid_tail_pct": 0.1,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.208,
          "dog_cover_ev": 0.208,
          "rational_spread_cn": "主队 守住差距概率略高",
          "total_xg": 2.8,
          "fair_totals_line": 2,
          "over_2_5_pct": 53,
          "over_3_pct": 30.7,
          "totals_lean_cn": "超 2.5 接近均衡；4球+偏少",
          "margin_risk_note": "净胜≥1 约 39.6%；仅赢 1 球约 0%",
          "full_cover_pct_raw": 39.6,
          "dog_hold_pct_raw": 60.4
        },
        "spread_odds": {
          "fav": 1.08,
          "dog": 0.81,
          "note": "Mexico 1.08 · England 0.81"
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
          "index_note": "大/小比分两侧接近",
          "totals_odds": null,
          "rational_cn": "模型略看大比分（超 2.25 约 64.7%）",
          "score_link_cn": "小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分"
        },
        "totals_line": 2.25,
        "market_line_movement": {
          "wc_note": "世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势",
          "spread_open_cn": "Mexico +0/0.5@0.92 · England -0/0.5@0.9",
          "spread_now_cn": "Mexico +0/0.5@0.81 · England -0/0.5@1.08",
          "totals_now_cn": "大小 2/2.5 · 大 1.11 / 小 0.78",
          "tag": "book_value_dog",
          "tag_cn": "受让低水定价",
          "tag_color": "#C8A96E",
          "detail_cn": "退 0.5 档 · 热门 0.9→1.08（抬水） · 受让 0.92→0.81（降水） 现盘去水隐含：England 46.5% · Mexico 53.5%（超收 3.3%） 模型穿盘（现档 England -0.25 · Mexico +0.25）：England 47.9% · Mexico 52.1% 模型−市场：England +1.4pp · Mexico -1.4pp 期望 ROI@现水：England -0.4% · Mexico +46.4% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "actuarial": {
            "actuarial_type": "book_value_dog",
            "actuarial_cn": "受让低水定价",
            "actuarial_color": "#C8A96E",
            "actuarial_desc": "退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
            "summary_cn": "退 0.5 档 · 热门 0.9→1.08（抬水） · 受让 0.92→0.81（降水） 现盘去水隐含：England 46.5% · Mexico 53.5%（超收 3.3%） 模型穿盘（现档 England -0.25 · Mexico +0.25）：England 47.9% · Mexico 52.1% 模型−市场：England +1.4pp · Mexico -1.4pp 期望 ROI@现水：England -0.4% · Mexico +46.4% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
            "line_delta": -0.5,
            "line_delta_cn": "退 0.5 档",
            "fav_odds_delta": 0.18,
            "dog_odds_delta": -0.11,
            "water_move_cn": "热门 0.9→1.08（抬水） · 受让 0.92→0.81（降水）",
            "open_tier": 0.25,
            "open_tier_label": "Mexico -0.25 · England +0.25",
            "now_tier": -0.25,
            "implied_tier": 0,
            "open_tier_gap": 0.25,
            "now_tier_gap": -0.25,
            "open_devig": {
              "fav_pct": 50.3,
              "dog_pct": 49.7,
              "overround_pct": 4.7
            },
            "now_devig": {
              "fav_pct": 46.5,
              "dog_pct": 53.5,
              "overround_pct": 3.3
            },
            "model_cover_open_pct": 45.4,
            "model_cover_now_pct": 47.9,
            "model_dog_cover_now_pct": 52.1,
            "market_fav_cover_now_pct": 46.5,
            "market_dog_cover_now_pct": 53.5,
            "model_vs_market_fav_pp": 1.4,
            "model_vs_market_dog_pp": -1.4,
            "fav_roi_pct": -0.4,
            "dog_roi_pct": 46.4,
            "fav_name": "England",
            "dog_name": "Mexico"
          }
        },
        "spread_market_analysis": {
          "actuarial_type": "book_value_dog",
          "actuarial_cn": "受让低水定价",
          "actuarial_color": "#C8A96E",
          "actuarial_desc": "退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "summary_cn": "退 0.5 档 · 热门 0.9→1.08（抬水） · 受让 0.92→0.81（降水） 现盘去水隐含：England 46.5% · Mexico 53.5%（超收 3.3%） 模型穿盘（现档 England -0.25 · Mexico +0.25）：England 47.9% · Mexico 52.1% 模型−市场：England +1.4pp · Mexico -1.4pp 期望 ROI@现水：England -0.4% · Mexico +46.4% 退档或热门抬水配合受让降水，定价重心在防守侧/受让。",
          "line_delta": -0.5,
          "line_delta_cn": "退 0.5 档",
          "fav_odds_delta": 0.18,
          "dog_odds_delta": -0.11,
          "water_move_cn": "热门 0.9→1.08（抬水） · 受让 0.92→0.81（降水）",
          "open_tier": 0.25,
          "open_tier_label": "Mexico -0.25 · England +0.25",
          "now_tier": -0.25,
          "implied_tier": 0,
          "open_tier_gap": 0.25,
          "now_tier_gap": -0.25,
          "open_devig": {
            "fav_pct": 50.3,
            "dog_pct": 49.7,
            "overround_pct": 4.7
          },
          "now_devig": {
            "fav_pct": 46.5,
            "dog_pct": 53.5,
            "overround_pct": 3.3
          },
          "model_cover_open_pct": 45.4,
          "model_cover_now_pct": 47.9,
          "model_dog_cover_now_pct": 52.1,
          "market_fav_cover_now_pct": 46.5,
          "market_dog_cover_now_pct": 53.5,
          "model_vs_market_fav_pp": 1.4,
          "model_vs_market_dog_pp": -1.4,
          "fav_roi_pct": -0.4,
          "dog_roi_pct": 46.4,
          "fav_name": "England",
          "dog_name": "Mexico"
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
          "tendency_cn": "更倾向让球盘（墨西哥受让）",
          "tendency_reason_cn": "英格兰 -0/0.5 浅让但墨西哥 Azteca 降水低水(0.81)、英格兰抬到 1.08 高水；模型守盘约67% · ★墨+0/0.5 · 小2/2.5副项。",
          "confidence": "medium",
          "confidence_cn": "中信心",
          "spread": {
            "side": "dog",
            "label_cn": "墨西哥 +0/0.5 @0.81",
            "reason_cn": "Azteca 2240m 主场+受让降水低水 0.81；英格兰 1.08 高水须净胜1球，1-1/1-0/2-1 墨守盘 · ★主项。"
          },
          "totals": {
            "side": "under",
            "label_cn": "小球 2/2.5 @0.78",
            "reason_cn": "over 1.11 大幅抬水资金偏小；高原夜场+Kane 破密集常见 1-0/1-1 · 2球内全赢 · 副项。",
            "skipped": true,
            "skip_reason_cn": "淘汰赛副项不打小球（R9）"
          },
          "picked_at": "2026-07-06-prematch",
          "pick_meta": {
            "model_side": "over",
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
              "model": "over",
              "line": "under",
              "odds": "under",
              "situation": "neutral"
            },
            "vote_summary_cn": "大球(model) · 小球(line) · 小球(odds) · 观望(situation)",
            "situation_dampened": false,
            "over_pct": 64.7,
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
          "home_win": 33,
          "draw": 29,
          "away_win": 37
        },
        "display_summary": {
          "fav_name": "England",
          "expected_total_goals": 2.57,
          "poisson_fav_win_pct": 37.9,
          "small_lead_pct": 21,
          "small_example_score": "0-1",
          "small_example_pct": 9.9,
          "big_cover_pct": 16.9,
          "big_example_score": "0-2",
          "big_example_pct": 6.6,
          "win_shape": {
            "fav_name": "England",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 29%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 9.9,
                "pct": 26.3
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11,
                "pct": 29
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 9.5,
                "pct": 25
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 7.5,
                "pct": 19.7
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.3
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 25
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 19.7
              }
            ],
            "fav_win_pct": 37
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 34.7 分",
            "first_goal_wait": 34.7,
            "fast_pct": 57.8,
            "moderate_pct": 14.8,
            "slow_pct": 27.4,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 57.8
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 27.4
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Mexico 暂无重要伤停 · England：John Stones 存疑"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "— / —（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "M92 墨西哥 vs 英格兰 · 海拔2240m · 主场适应优势显著"
            },
            {
              "icon": "⚖️",
              "label": "平局修正",
              "note": "回测校准：xG 极接近（平 +4%）"
            }
          ],
          "xg_context": {
            "baseline_home": 1.35,
            "baseline_away": 1.45,
            "adjusted_home": 1.27,
            "adjusted_away": 1.32,
            "note": "基准 xG 1.35–1.45 → 调整后 1.27–1.32"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": -0.25,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "England -0.25 · Mexico +0.25",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略低（约 -0.25）"
          },
          "win_outlook": {
            "fav_name": "England",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 55.3
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 25
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 19.7
              }
            ],
            "margin_line_cn": "England · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 46.9,
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
            "model_total_xg": 2.59,
            "totals_line_gap": 0.25,
            "totals_high_pct": 60.3,
            "totals_low_pct": 39.7,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 16.5,
            "win_margin2_low_total_pct": 6.6,
            "win_margin2_high_total_pct": 16.9,
            "readout_cn": "取胜约 37%；若取胜，以「险胜收工」为主（55.3%）。 对着赛前净胜参考，净胜≥1（全达标）约 46.9%；对着总进球参考 2.25，模型超线概率约 60.3%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.6
            },
            {
              "score": "0-1",
              "pct": 9.9
            },
            {
              "score": "1-0",
              "pct": 9.5
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 2.25,
            "line_gap": 0.25,
            "over_pct": 60.3,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_high",
              "label_cn": "略倾向精彩",
              "color": "#E8A54B",
              "meter_label_cn": "略倾向精彩",
              "meter_pos": 60,
              "lean_side": "exciting",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "略偏精彩（弱）",
              "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
              "headline_cn": "进球氛围：略偏精彩",
              "show_lean": false,
              "over_pct": 60.3,
              "line_gap": 0.25,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "总进球参考 2.25",
              "caution_public_high": false
            },
            "summary_cn": "预测 2.6 · 合理值 2 · 总进球参考 2.25（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "England -0.25 穿盘：有达标可能",
            "sub_cn": "England 胜 37.9% · 胜后穿 100% · Mexico +0.25 守 53.1% 进球氛围：略偏精彩 平局约 29%，与热门取胜概率接近（Top2 区间），存在「赢球变平局」空间。",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "England",
              "dog_name": "Mexico",
              "fav_handicap_cn": "England -0.25",
              "dog_handicap_cn": "Mexico +0.25",
              "market_expect_cn": "England -0.25 · 净胜≥1",
              "meet_pct": 46.9,
              "dog_hold_pct": 53.1,
              "fav_win_pct": 37.9,
              "cover_given_win_pct": 100,
              "full_cover_pct_raw": 37.9,
              "meet_pct_label": "England -0.25 穿盘概率（校准）",
              "dog_hold_label": "Mexico +0.25 守住概率（校准）",
              "two_stage_cn": "England 取胜约 37.9% · 赢球后穿盘约 100% · Mexico +0.25 守住约 53.1%",
              "grid_tail_pct": null,
              "verdict_cn": "有达标可能",
              "headline_cn": "England -0.25 穿盘：有达标可能",
              "pill_cn": "England 胜 37.9% · 胜后穿 100% · Mexico +0.25 守 53.1%",
              "detail_cn": "England 取胜约 37.9% · 赢球后穿盘约 100% · Mexico +0.25 守住约 53.1%（泊松 raw 37.9% → 校准 46.9%）；穿盘与受让守住均有一定空间。",
              "extra_stats_cn": "",
              "full_cover_pct": 46.9,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": -0.25,
              "show_cover": true
            },
            "totals": {
              "level": "mild_high",
              "label_cn": "略倾向精彩",
              "color": "#E8A54B",
              "meter_label_cn": "略倾向精彩",
              "meter_pos": 60,
              "lean_side": "exciting",
              "lean_strength": "mild",
              "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
              "pill_cn": "略偏精彩（弱）",
              "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
              "headline_cn": "进球氛围：略偏精彩",
              "show_lean": false,
              "over_pct": 60.3,
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
                  "fav_name": "England",
                  "dog_name": "Mexico",
                  "fav_handicap_cn": "England -0.25",
                  "dog_handicap_cn": "Mexico +0.25",
                  "market_expect_cn": "England -0.25 · 净胜≥1",
                  "meet_pct": 46.9,
                  "dog_hold_pct": 53.1,
                  "fav_win_pct": 37.9,
                  "cover_given_win_pct": 100,
                  "full_cover_pct_raw": 37.9,
                  "meet_pct_label": "England -0.25 穿盘概率（校准）",
                  "dog_hold_label": "Mexico +0.25 守住概率（校准）",
                  "two_stage_cn": "England 取胜约 37.9% · 赢球后穿盘约 100% · Mexico +0.25 守住约 53.1%",
                  "grid_tail_pct": null,
                  "verdict_cn": "有达标可能",
                  "headline_cn": "England -0.25 穿盘：有达标可能",
                  "pill_cn": "England 胜 37.9% · 胜后穿 100% · Mexico +0.25 守 53.1%",
                  "detail_cn": "England 取胜约 37.9% · 赢球后穿盘约 100% · Mexico +0.25 守住约 53.1%（泊松 raw 37.9% → 校准 46.9%）；穿盘与受让守住均有一定空间。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 46.9,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": -0.25,
                  "show_cover": true
                },
                "text": "England 胜 37.9% · 胜后穿 100% · Mexico +0.25 守 53.1%",
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
                  "meter_pos": 60,
                  "lean_side": "exciting",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照总进球参考 2.25，看偏闷还是偏精彩",
                  "pill_cn": "略偏精彩（弱）",
                  "detail_cn": "略偏精彩，较易超线走大比分；弱信号。",
                  "headline_cn": "进球氛围：略偏精彩",
                  "show_lean": false,
                  "over_pct": 60.3,
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
              "team": "Mexico",
              "first_goal_pct": 49,
              "start_score": "1-0",
              "fav_name": "England",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 39.5,
              "small_lead_pct": 11.3,
              "big_lead_pct": 5.2,
              "fav_win_pct": 16.5,
              "fav_draw_pct": 23,
              "fav_lose_pct": 60.5,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "England 追平（平局）",
                  "pct": 23
                },
                {
                  "key": "win1",
                  "label": "England 净胜1球翻盘（如 2-1）",
                  "pct": 11.3
                },
                {
                  "key": "win2",
                  "label": "England 净胜≥2球翻盘（如 3-1）",
                  "pct": 5.2
                },
                {
                  "key": "upset_hold",
                  "label": "Mexico 保持胜果至终场",
                  "pct": 60.5
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
              "big_delta": -11.7,
              "small_delta": -9.7,
              "narrative": "Mexico 先破门（已 1-0） → 「巩固防守」；England 「组织反扑」。热门先丢球（已 1-0），需再进至少两球才能净胜两球以上，该路径概率明显下降。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "England",
              "first_goal_pct": 51,
              "start_score": "0-1",
              "fav_name": "England",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 84.9,
              "small_lead_pct": 29.8,
              "big_lead_pct": 32.8,
              "fav_win_pct": 62.6,
              "fav_draw_pct": 22.3,
              "fav_lose_pct": 15.1,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "England 保持胜果（净胜≥1）",
                  "pct": 62.6
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 22.3
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 15.1
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
              "big_delta": 15.9,
              "small_delta": 8.8,
              "narrative": "England 先破门（已 0-1） → 「巩固防守」；Mexico 「组织反扑」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "England",
                "state_label": "England 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 55.3
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 25
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 19.7
                  }
                ],
                "margin_line_cn": "England · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 62.6,
                "margin_half_pct": 0,
                "margin_fail_pct": 29.8,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球参考 2.25",
                "fair_totals_line": 2.25,
                "model_total_xg": 2.12,
                "totals_line_gap": 0,
                "totals_high_pct": 75.3,
                "totals_low_pct": 24.7,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 24.2,
                "win_margin2_low_total_pct": 12.2,
                "win_margin2_high_total_pct": 32.8,
                "readout_cn": "England 已 1-0 领先：仍取胜约 62.6%。 对着总进球参考 2.25，模型超线概率约 75.3%。 常见 2-0 收尾（相对总进球参考 2.25仍偏小比分）。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预测 2.6 · 合理值 2 · 总进球参考 2.25（高于合理值 0.25） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球参考 2.25",
              "totals_high_pct": 60.3,
              "type_tags": [
                {
                  "key": "balanced",
                  "label": "常规对抗"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 25,
              "readout_cn": "England · 常规对抗。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
              "draw_trap_pct": 25,
              "fav_lead_style": "balanced"
            }
          },
          "halftime_preview": {
            "ht_xg_share": 0.44,
            "xg_home_ht": 0.56,
            "xg_away_ht": 0.58,
            "xg_home_2h": 0.71,
            "xg_away_2h": 0.74,
            "home_win": 27.7,
            "draw": 43.2,
            "away_win": 29,
            "top_score": "0-0",
            "top_score_prob": 32,
            "top3_scores": [
              {
                "score": "0-0",
                "prob": 32
              },
              {
                "score": "0-1",
                "prob": 18.6
              },
              {
                "score": "1-0",
                "prob": 17.9
              }
            ],
            "ht_goals_expected": 1.14,
            "ht_over_0_5_pct": 68,
            "ht_over_1_5_pct": 31.6,
            "pick": "draw",
            "pick_name": "平局",
            "summary_cn": "半场 xG 0.56–0.58（约占全场 44%） · 最可能 0-0（32%） · 胜平负 27.7/43.2/29 · 半场≥1球约 68%",
            "disclaimer_cn": "按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。"
          }
        },
        "public_summary_note": "【推演概要】England · 常规对抗。 · 与模型 xG 对照：均衡 · 赛前净胜看法略低（约 -0.25）（模型微调：主胜 +0% · 平 +0% · 客 +0%）",
        "goal_efficiency_preview": {
          "mode": "preview",
          "xg_total": 2.8,
          "xg_gap": 0.1,
          "xg_home": 1.35,
          "xg_away": 1.45,
          "xg_baseline_home": 1.35,
          "xg_baseline_away": 1.45,
          "xg_note": "结构推演用基准 xG 1.35–1.45（进球氛围用调整后 1.27–1.32）",
          "lean_note": "大/小概率接近或路径互斥——不作单边大/小标签。",
          "fav_name": "England",
          "dog_name": "Mexico",
          "fav_xg": 1.45,
          "dog_xg": 1.35,
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
          "prob_4_plus": 30.4,
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
            "弱队上半场效率≥1.0 → 关注弱队开花路径"
          ],
          "pattern_note": "样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "summary_cn": "【路径·基准 xG】合计 2.8 · England 1.45 / Mexico 1.35 → 主路径「铁局/小比分」约 45%。 至少 3 球约 52.7% · 超 2.25 约 64.7% · ≤2球 47.3%。样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。",
          "in_mid_band": true,
          "sample_note": "结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥60%/≤40%"
        }
      },
      "market_snapshot": {
        "market_tier": -0.25,
        "tier_label": "England -0.25 · Mexico +0.25",
        "totals_line": 2.25,
        "over_pct": 60.3,
        "fair_line": 2,
        "line_gap": 0.25,
        "full_cover_pct": 46.9,
        "fav_win_pct": 37.9,
        "cover_given_win_pct": 100,
        "spread_level": "possible",
        "spread_market_expect": "England -0.25 · 净胜≥1",
        "line_move_tag": "book_value_dog",
        "line_move_cn": "受让低水定价",
        "agent_pick_primary": "spread",
        "agent_pick_tendency_cn": "更倾向让球盘（墨西哥受让）",
        "agent_pick_confidence": "medium",
        "agent_spread_cn": "墨西哥 +0/0.5 @0.81",
        "agent_totals_cn": null,
        "agent_totals_skipped": true,
        "agent_totals_skip_cn": "淘汰赛副项不打小球（R9）",
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
    "date": "2026-07-05",
    "time": "16:00",
    "time_local": "16:00 ET",
    "timezone": "EDT (UTC-4)",
    "time_beijing": "04:00",
    "date_beijing": "7月6日",
    "time_beijing_full": "北京时间 7月6日 04:00",
    "venue": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "home": {
      "name": "Brazil",
      "iso": "br",
      "fifaRank": 5,
      "rating": 88
    },
    "away": {
      "name": "Norway",
      "iso": "no",
      "fifaRank": 42,
      "rating": 76
    },
    "teaser": "16强 M91 · 巴西 vs 挪威",
    "home_win": 52,
    "draw": 30,
    "away_win": 18,
    "predicted_score": "1-1",
    "key_player_home": "Vinícius Júnior",
    "key_player_away": "Erling Haaland"
  },
  "upcomingMatches": [
    {
      "group": "KO",
      "time_beijing_full": "北京时间 7月6日 08:00",
      "venue": "Estadio Azteca",
      "city": "Mexico City, Mexico",
      "home": {
        "name": "Mexico",
        "iso": "mx"
      },
      "away": {
        "name": "England",
        "iso": "gb-eng"
      },
      "teaser": "16强 M92"
    }
  ]
};
