// 今日赛事 — 手动/自动同步
// Last updated: 2026-06-13T06:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-13T06:00:00+08:00",
  "syncSource": "manual",
  "breakingNews": [
    {
      "tag": "OFFICIAL",
      "text": "📅 今日赛事 · 加拿大 vs 波黑（03:00）· 美国 vs 巴拉圭（09:00）· 北京时间 6月13日",
      "time": "今日赛程"
    },
    {
      "tag": "LINEUP",
      "text": "加拿大：Davies 左路锁定首发，Jonathan David 领衔锋线；Marsch 确认 4-3-3 攻击阵型",
      "time": "赛前情报"
    },
    {
      "tag": "INJURY",
      "text": "波黑：Kolašinac 肌肉拉伤存疑，Džeko 完全健康将首发担任支点",
      "time": "伤情快报"
    },
    {
      "tag": "OFFICIAL",
      "text": "美国：Pulisic 队长领衔，Pochettino 排出 4-3-3；McKennie 坐镇中场",
      "time": "官方消息"
    },
    {
      "tag": "LINEUP",
      "text": "Paraguay：Almirón 10号位核心，Gómez 统领三中卫 5-3-2 低位防守",
      "time": "阵容情报"
    },
    {
      "tag": "RUMOR",
      "text": "传言：SoFi Stadium 预计7万观众创纪录，美国球迷「红色浪潮」或成第12人",
      "time": "媒体传言"
    },
    {
      "tag": "OFFICIAL",
      "text": "A组回顾：墨西哥、韩国各3分领跑 · 详见「过往赛果」页面",
      "time": "小组动态"
    },
    {
      "tag": "REFEREE",
      "text": "Taylor（加拿大战）+ Vinčić（美国战）执法，均为欧洲杯/世界杯级别裁判",
      "time": "裁判信息"
    }
  ],
  "todayMatches": [
    {
      "id": "m03",
      "group": "B",
      "matchday": 1,
      "date": "2026-06-12",
      "time": "15:00",
      "time_local": "15:00 ET / 15:00 EDT",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "03:00",
      "date_beijing": "6月13日",
      "time_beijing_full": "北京时间 6月13日 03:00",
      "venue": "BMO Field",
      "city": "Toronto, Canada",
      "note": "B组揭幕 · 东道主加拿大主场首战 · 海拔76m",
      "home": {
        "name": "Canada",
        "iso": "ca",
        "flag": "",
        "fifa_rank": 17,
        "rating": 78,
        "form": [
          "W",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Jesse Marsch",
        "star": {
          "name": "Alphonso Davies",
          "pos": "LB/LW",
          "club": "Bayern Munich",
          "desc": "加拿大旗帜性球员，速度与边路突破是主队最大武器。BMO Field 主场氛围加持，左路走廊将是波黑防线的最大考验"
        },
        "injuries": [
          {
            "player": "Jonathan David",
            "status": "FIT",
            "note": "里尔前锋状态正佳，预计与 Buchanan 搭档锋线",
            "confirmed": true
          }
        ],
        "rumors": [
          "Opta 模型：加拿大小组晋级概率 79.8%，B组夺冠呼声最高",
          "主帅 Marsch：「这是加拿大足球的历史性时刻，我们要在主场拿下3分」",
          "Davies 赛前训练完成全部合练，无伤病疑虑",
          "多伦多预计气温 22°C，夜场转凌晨，湿度适中利于高速攻防"
        ]
      },
      "away": {
        "name": "Bosnia and Herzegovina",
        "iso": "ba",
        "flag": "",
        "fifa_rank": 55,
        "rating": 68,
        "form": [
          "W",
          "L",
          "W",
          "D",
          "W"
        ],
        "coach": "Sergej Barbarez",
        "star": {
          "name": "Edin Džeko",
          "pos": "ST",
          "club": "Fiorentina",
          "desc": "38岁传奇前锋，制空与经验仍是波黑最大威胁。加拿大中卫组合需在定位球上高度专注"
        },
        "injuries": [
          {
            "player": "Sead Kolašinac",
            "status": "DOUBT",
            "note": "肌肉轻微拉伤，能否首发待赛前2小时确认",
            "confirmed": false
          }
        ],
        "rumors": [
          "Džeko 第四次世界杯，赛前称「经验是我们的武器，加拿大年轻人会犯错」",
          "波黑媒体：球队将以 5-4-1 低位防守，限制 Davies 内切",
          "Squawka 推演：最可能比分为 2-1 加拿大胜（概率 18%）",
          "更衣室稳定，无内讧传言，但客场面对东道主压力极大"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 0,
        "away_wins": 0,
        "recent": [
          {
            "year": 2020,
            "comp": "友谊赛",
            "score": "3-0",
            "winner": "Canada",
            "venue": "Neutral"
          },
          {
            "year": 2016,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "Canada",
            "venue": "Canada"
          }
        ],
        "note": "历史交锋加拿大占优，但样本极少，参考价值有限"
      },
      "referee": {
        "name": "Anthony Taylor",
        "nation": "英格兰",
        "age": 45,
        "avg_yellow": 4.1,
        "avg_red": 0.15,
        "bias_note": "执法风格稳健，对东道主无显著偏袒记录，定位球判罚较严",
        "tendencies": [
          "补时慷慨",
          "对战术犯规零容忍",
          "大场面经验丰富"
        ]
      },
      "prediction": {
        "home_win": 55,
        "draw": 25,
        "away_win": 20,
        "score": "2-1",
        "confidence": 74,
        "xg_home": 1.9,
        "xg_away": 1.2,
        "key_factor": "东道主主场 + Davies 速度对位波黑 ageing 防线是核心变量。Džeko 定位球是波黑唯一稳定得分手段；若加拿大前30分钟破门，模型倾向主队扩大优势（概率62%）。",
        "score_dist": [
          {
            "score": "2-1",
            "prob": 22
          },
          {
            "score": "1-0",
            "prob": 18
          },
          {
            "score": "2-0",
            "prob": 16
          },
          {
            "score": "1-1",
            "prob": 14
          },
          {
            "score": "3-1",
            "prob": 10
          },
          {
            "score": "0-1",
            "prob": 8
          },
          {
            "score": "其他",
            "prob": 12
          }
        ]
      },
      "weather": {
        "temp": 22,
        "humidity": 65,
        "altitude_m": 76,
        "rain_chance": 20,
        "condition_cn": "多云，凌晨气温舒适",
        "impact_level": "LOW",
        "impact_summary": "海平面球场，无海拔影响；凌晨开球气温适宜高强度比赛",
        "home_adapt": 88,
        "away_adapt": 82,
        "home_note": "加拿大全队熟悉 BMO Field，主场作战",
        "away_note": "波黑来自欧洲，时差与旅途影响轻微",
        "weather_factors": [
          {
            "label": "海平面",
            "impact": "无海拔影响",
            "detail": "双方体能条件对等"
          },
          {
            "label": "凌晨开球",
            "impact": "中性",
            "detail": "气温 22°C 利于速度型球员"
          }
        ],
        "historical_note": "BMO Field 承办2026世界杯B组赛事，加拿大主场氛围预计创纪录"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "庚午月",
          "day": "癸未日",
          "day_summary": "癸未日——水土相涵，东道主如大地承载万民。《周易》曰：「厚德载物」，主场之利在此日尤为显著。",
          "hour_home": "丑时（01:00-03:00）",
          "hour_home_element": "土"
        },
        "wuxing": {
          "home": {
            "team": "Canada",
            "colors": "红+白",
            "elements": "火、金",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "wuxing_short": "火金相生",
            "reason": "加拿大红色属火，丑时土旺火生，主场气势如虹",
            "advantage": "开场冲击力强"
          },
          "away": {
            "team": "Bosnia and Herzegovina",
            "colors": "蓝+白",
            "elements": "水、金",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "wuxing_short": "水土相克",
            "reason": "波黑蓝色属水，丑时土克水，客场气场受压",
            "disadvantage": "开局易被动"
          },
          "summary": "五行裁定：东道主火土顺局，波黑水土受制"
        },
        "hexagram": {
          "name": "泰卦",
          "symbol": "☷",
          "number": 11,
          "quote": "《周易·泰卦》：「小往大来，吉亨。」",
          "general": "天地交泰，主场小胜之象。利于顺势而行的一方。",
          "advantage_team": "Canada",
          "disadvantage_team": "Bosnia and Herzegovina",
          "match_nature": "东道主小胜局",
          "yellow_card_risk": "中",
          "yellow_card_reason": "预计4-5张黄牌，波黑低位防守战术犯规为主",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "加拿大控场小胜概率55%，平局25%，波黑爆冷20%"
            },
            {
              "icon": "⏱",
              "label": "进球高峰",
              "text": "第20-35分钟及第70-85分钟"
            }
          ],
          "early_goal": {
            "scenario": "若加拿大先进球",
            "prediction": "泰卦「小往大来」——主队将扩大控球，波黑被迫压出，Davies 反击空间增大",
            "favors": "Canada",
            "favors_prob": 68
          },
          "no_early_goal": {
            "scenario": "若前30分钟无进球",
            "prediction": "Džeko 定位球成为波黑最大威胁，比赛进入消耗战",
            "favors": "Draw",
            "favors_prob": 45
          },
          "away_goal": {
            "scenario": "若波黑先进球",
            "prediction": "加拿大主场反扑力度大，扳平概率58%，但逆转需防 Džeko 反击",
            "favors": "Canada",
            "favors_prob": 52
          },
          "halftime": {
            "scenario": "半场0-0",
            "prediction": "下半场 Marsch 战术调整+主场声浪，加拿大进球概率65%",
            "favors": "Canada",
            "favors_prob": 58
          },
          "extra_time": {
            "scenario": "加时",
            "prediction": "极低概率（8%）",
            "favors": "Canada",
            "favors_prob": 55
          }
        },
        "home_score": 72,
        "away_score": 38,
        "mystic_verdict": "☷ 泰卦天地交——加拿大主场如大地承载，Davies 如风行地上。波黑水德受制，Džeko 经验或是唯一变数。",
        "disclaimer": "文化解读 · 非竞技推演"
      }
    },
    {
      "id": "m04",
      "group": "D",
      "matchday": 1,
      "date": "2026-06-12",
      "time": "21:00",
      "time_local": "21:00 ET / 18:00 PT",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "09:00",
      "date_beijing": "6月13日",
      "time_beijing_full": "北京时间 6月13日 09:00",
      "venue": "SoFi Stadium",
      "city": "Los Angeles, USA",
      "note": "D组揭幕 · 东道主美国主场 · 洛杉矶",
      "home": {
        "name": "USA",
        "iso": "us",
        "flag": "",
        "fifa_rank": 13,
        "rating": 79,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Mauricio Pochettino",
        "star": {
          "name": "Christian Pulisic",
          "pos": "RW",
          "club": "AC Milan",
          "desc": "美国队长，米兰赛季状态出色。SoFi Stadium 预计7万观众，Pulisic 是主队进攻灵魂"
        },
        "injuries": [
          {
            "player": "Weston McKennie",
            "status": "FIT",
            "note": "尤文中场完全健康，将出任中路屏障",
            "confirmed": true
          },
          {
            "player": "Sergiño Dest",
            "status": "DOUBT",
            "note": "肌肉疲劳，可能轮换替补",
            "confirmed": false
          }
        ],
        "rumors": [
          "Pochettino：「我们在主场必须打出侵略性，洛杉矶是我们的城市」",
          "美国媒体：本场预计上座率创 SoFi 足球纪录",
          "Paraguay 主帅 Alfaro 称将「压缩空间、限制 Pulisic 接球」",
          "Opta：美国胜概率 60%，零封概率 38%"
        ]
      },
      "away": {
        "name": "Paraguay",
        "iso": "py",
        "flag": "",
        "fifa_rank": 52,
        "rating": 67,
        "form": [
          "L",
          "W",
          "D",
          "L",
          "W"
        ],
        "coach": "Gustavo Alfaro",
        "star": {
          "name": "Miguel Almirón",
          "pos": "CAM",
          "club": "Newcastle United",
          "desc": "巴拉圭进攻核心，远射与直塞是最大威胁。美国中场需限制其拿球转身"
        },
        "injuries": [
          {
            "player": "Gustavo Gómez",
            "status": "FIT",
            "note": "队长中卫伤愈复出，统领三中卫体系",
            "confirmed": true
          }
        ],
        "rumors": [
          "Paraguay 将以 5-3-2 极度低位防守，Almirón 是唯一反击出口",
          "美国与巴拉圭历史5次交锋美国3胜，但2011年美洲杯巴拉圭曾淘汰美国",
          "Alfaro 赛前放话：「我们不惧怕东道主，防守是我们的语言」",
          "洛杉矶白天气温 28°C，午后比赛对体能消耗较大"
        ]
      },
      "h2h": {
        "home_wins": 3,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2011,
            "comp": "Copa América",
            "score": "0-0",
            "winner": "Draw",
            "venue": "Neutral"
          },
          {
            "year": 2016,
            "comp": "Copa América",
            "score": "1-0",
            "winner": "USA",
            "venue": "USA"
          },
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "2-0",
            "winner": "USA",
            "venue": "USA"
          }
        ],
        "note": "美国历史占优，但巴拉圭防守韧性不可低估"
      },
      "referee": {
        "name": "Slavko Vinčić",
        "nation": "斯洛文尼亚",
        "age": 44,
        "avg_yellow": 3.8,
        "avg_red": 0.12,
        "bias_note": "欧洲杯决赛执法者，风格偏宽松，允许身体对抗",
        "tendencies": [
          "对东道主无特殊倾向",
          "补时平均4分钟",
          "点球判罚谨慎"
        ]
      },
      "prediction": {
        "home_win": 60,
        "draw": 25,
        "away_win": 15,
        "score": "2-0",
        "confidence": 78,
        "xg_home": 2.1,
        "xg_away": 0.8,
        "key_factor": "美国主场 + Pulisic 对位 Paraguay 三中卫体系是决定性因素。Paraguay 5-3-2 低位防守可能拖慢节奏，但美国边路深度（Weah、Pulisic）足以撕开空间。模型倾向美国零封小胜（2-0 概率 24%）。",
        "score_dist": [
          {
            "score": "2-0",
            "prob": 24
          },
          {
            "score": "1-0",
            "prob": 20
          },
          {
            "score": "2-1",
            "prob": 16
          },
          {
            "score": "1-1",
            "prob": 14
          },
          {
            "score": "3-0",
            "prob": 12
          },
          {
            "score": "0-0",
            "prob": 8
          },
          {
            "score": "其他",
            "prob": 6
          }
        ]
      },
      "weather": {
        "temp": 28,
        "humidity": 55,
        "altitude_m": 30,
        "rain_chance": 5,
        "condition_cn": "晴朗，午后偏热",
        "impact_level": "MEDIUM",
        "impact_summary": "28°C 午后气温对体能消耗有影响，Paraguay 南美球员适应性略优",
        "home_adapt": 90,
        "away_adapt": 75,
        "home_note": "美国本土作战，完全适应气候",
        "away_note": "巴拉圭来自南半球，高温适应性中等",
        "weather_factors": [
          {
            "label": "28°C 午后",
            "impact": "体能消耗",
            "detail": "下半场70分钟后进球概率上升"
          },
          {
            "label": "低湿度",
            "impact": "有利传球",
            "detail": "场地干燥，传球速度快"
          }
        ],
        "historical_note": "SoFi Stadium 2026世界杯D组主场，美国队在此尚未输球"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "month": "庚午月",
          "day": "癸未日",
          "day_summary": "癸未日巳时——火旺土燥，东道主如烈日当空。《道德经》：「知人者智，自知者明。」美国需避免轻敌。",
          "hour_home": "巳时（09:00-11:00）",
          "hour_home_element": "火"
        },
        "wuxing": {
          "home": {
            "team": "USA",
            "colors": "白+蓝+红",
            "elements": "金、水、火",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "wuxing_short": "火金土旺",
            "reason": "美国队服多色，巳时火旺，主场气势正盛",
            "advantage": "上半场压制力强"
          },
          "away": {
            "team": "Paraguay",
            "colors": "白+蓝+红",
            "elements": "金、水、火",
            "verdict": "中性",
            "verdict_color": "#C8A96E",
            "wuxing_short": "同色相对",
            "reason": "两队队服五行相近，比拼纯竞技与战术",
            "disadvantage": "客场气场略逊"
          },
          "summary": "五行裁定：美国火时顺局，巴拉圭同色相争需靠防守"
        },
        "hexagram": {
          "name": "大有卦",
          "symbol": "☲",
          "number": 14,
          "quote": "《周易·大有卦》：「自天佑之，吉无不利。」",
          "general": "火在天上，光明盛大。利于占据主场、气势正盛的一方。",
          "advantage_team": "USA",
          "disadvantage_team": "Paraguay",
          "match_nature": "东道主控场局",
          "yellow_card_risk": "低",
          "yellow_card_reason": "预计3-4张黄牌，Paraguay 战术犯规为主",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "美国控场小胜60%，平局25%，巴拉圭爆冷15%"
            },
            {
              "icon": "⏱",
              "label": "进球高峰",
              "text": "第30-45分钟及第75-90分钟"
            }
          ],
          "early_goal": {
            "scenario": "若美国先进球",
            "prediction": "大有卦「自天佑之」——主队将完全掌控节奏，Paraguay 被迫压出，反击空间打开",
            "favors": "USA",
            "favors_prob": 72
          },
          "no_early_goal": {
            "scenario": "若前45分钟无进球",
            "prediction": "Paraguay 5-3-2 奏效，下半场美国体能+换人成为关键",
            "favors": "USA",
            "favors_prob": 55
          },
          "away_goal": {
            "scenario": "若巴拉圭反击破门",
            "prediction": "美国主场声浪下反扑猛烈，扳平概率65%",
            "favors": "USA",
            "favors_prob": 58
          },
          "halftime": {
            "scenario": "半场0-0",
            "prediction": "Pochettino 半场调整+球迷压力，美国下半场破门概率70%",
            "favors": "USA",
            "favors_prob": 62
          },
          "extra_time": {
            "scenario": "加时",
            "prediction": "极低（5%）",
            "favors": "USA",
            "favors_prob": 60
          }
        },
        "home_score": 78,
        "away_score": 35,
        "mystic_verdict": "☲ 大有卦火在天上——美国主场如烈日，Pulisic 如光普照。Paraguay 需以厚土（防守）承火，方能求存。",
        "disclaimer": "文化解读 · 非竞技推演"
      }
    }
  ],
  "nextMatch": {
    "group": "B",
    "matchday": 1,
    "date": "2026-06-13",
    "time": "15:00",
    "time_local": "15:00 PT",
    "timezone": "PDT (UTC-7)",
    "time_beijing": "06:00",
    "date_beijing": "6月14日",
    "time_beijing_full": "北京时间 6月14日 06:00",
    "venue": "Levi's Stadium",
    "city": "Santa Clara, USA",
    "home": {
      "name": "Qatar",
      "iso": "qa",
      "fifaRank": 68,
      "rating": 60
    },
    "away": {
      "name": "Switzerland",
      "iso": "ch",
      "fifaRank": 19,
      "rating": 77
    },
    "teaser": "B组第2场：卡塔尔 vs 瑞士，Xhaka 领衔瑞士中场控制。Opta 倾向瑞士小胜（58%），但卡塔尔主场（2022经验）不可完全忽视。",
    "home_win": 18,
    "draw": 24,
    "away_win": 58,
    "predicted_score": "0-2",
    "key_player_home": "Almoez Ali",
    "key_player_away": "Granit Xhaka"
  }
};
