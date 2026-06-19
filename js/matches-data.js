// 今日赛事 — Day 9 (signals enriched)
// Last updated: 2026-06-20T14:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-20T14:00:00+08:00",
  "syncSource": "FIFA 赛程 · Day 9 · weather/mystic/injuries/coach enriched · 推演概要+小组形势",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 9 教练分析&冷门预警已纳入（m29–m32）",
      "time": "6月20日"
    },
    {
      "tag": "INJURY",
      "text": "✅ Day 9 伤病&更衣室动态已更新（m29–m32）；裁判/首发仍待 FIFA 官方",
      "time": "6月20日"
    },
    {
      "tag": "UPDATE",
      "text": "✅ Day 9 气候预报 + 灵力分析已更新（m29–m32）；裁判/首发仍待 FIFA 官方",
      "time": "站点"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 昨日：捷1-1南非 · 瑞4-1波 · 加6-0卡 · 墨1-0韩 · 墨西哥锁定32强",
      "time": "赛果回顾"
    },
    {
      "tag": "PREVIEW",
      "text": "📅 今日4场 · 美国-澳(03:00) · 苏-摩(06:00) · 巴-海(09:00) · 土-巴(11:00)",
      "time": "6月20日"
    },
    {
      "tag": "PREVIEW",
      "text": "C/D组第2轮：东道主美国西雅图 · 巴西 vs 海地 · Yıldız/Güler",
      "time": "焦点"
    },
    {
      "tag": "OFFICIAL",
      "text": "A/B组第2轮完结 · 墨西哥&加拿大领跑",
      "time": "积分榜"
    },
    {
      "tag": "REFEREE",
      "text": "今日各场裁判待 FIFA 官方确认",
      "time": "裁判"
    }
  ],
  "todayMatches": [
    {
      "id": "m32",
      "group": "D",
      "matchday": 2,
      "date": "2026-06-19",
      "time": "12:00",
      "time_local": "12:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "03:00",
      "date_beijing": "6月20日",
      "time_beijing_full": "北京时间 6月20日 03:00",
      "venue": "Lumen Field",
      "city": "Seattle, USA",
      "note": "D组第2轮 · 美国 vs 澳大利亚 · 西雅图",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Turner; Dest, Ream, Robinson; Adams, Musah; Pulisic, McKennie, Reyna; Balogun, Weah",
          "away": "Ryan; Atkinson, Souttar, Bos; Irvine, Irvine; Goodwin, Irvine, Boyle; Maclaren, Leckie",
          "source": "ESPN / Fox 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "USA",
        "iso": "us",
        "flag": "",
        "fifa_rank": 11,
        "rating": 82,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Mauricio Pochettino",
        "stars": [
          {
            "name": "Christian Pulisic",
            "pos": "RW",
            "club": "AC Milan",
            "desc": "东道主核心",
            "rating": 8.6
          }
        ],
        "star": {
          "name": "Christian Pulisic",
          "pos": "RW",
          "club": "AC Milan",
          "desc": "东道主核心",
          "rating": 8.6
        },
        "injuries": [
          {
            "player": "Christian Pulisic",
            "status": "FIT",
            "note": "揭幕战 4-1 巴拉圭参与进攻组织，状态回升；西雅图主场预计继续担任核心",
            "confirmed": true
          },
          {
            "player": "Folarin Balogun",
            "status": "FIT",
            "note": "揭幕战双响（31'、45+5'），锁定首发中锋",
            "confirmed": true
          },
          {
            "player": "Tyler Adams",
            "status": "FIT",
            "note": "与 McKennie 双后腰运转正常，Pochettino 6/11 仍称 26 人全员可用",
            "confirmed": true
          },
          {
            "player": "Giovanni Reyna",
            "status": "FIT",
            "note": "90+8' 替补破门，更衣室士气加分",
            "confirmed": true
          },
          {
            "player": "Chris Richards",
            "status": "FIT",
            "note": "踝伤已愈，中卫轮换人选；首发待官方确认",
            "confirmed": true
          }
        ],
        "rumors": [
          "Pochettino（赛后）：「4-1 是回应批评的方式，但 D 组才刚开始；对澳大利亚必须当成决赛踢」",
          "揭幕战 Balogun 双响 + Reyna 绝杀后，东道主西雅图 7 万观众预期再掀声浪",
          "D 组美国、澳大利亚同积 3 分——本场胜者大概率握出线主动权",
          "媒体预测 Pulisic-Reyna 宽度 + Adams 屏障，但官方首发仍待开球前确认",
          "4 场热身 3 负的阴影被揭幕战大胜部分冲淡，Pochettino 仍警告「不可轻敌」"
        ]
      },
      "away": {
        "name": "Australia",
        "iso": "au",
        "flag": "",
        "fifa_rank": 24,
        "rating": 74,
        "form": [
          "D",
          "W",
          "L",
          "W",
          "D"
        ],
        "coach": "Graham Arnold",
        "stars": [
          {
            "name": "Mathew Ryan",
            "pos": "GK",
            "club": "Roma",
            "desc": "经验一门",
            "rating": 7.6
          }
        ],
        "star": {
          "name": "Mathew Ryan",
          "pos": "GK",
          "club": "Roma",
          "desc": "经验一门",
          "rating": 7.6
        },
        "injuries": [
          {
            "player": "Patrick Beach",
            "status": "FIT",
            "note": "FotMob 官方 XI 一门替 Ryan；对土耳其 2-0 零封 + MOTM 级表现",
            "confirmed": true
          },
          {
            "player": "Mathew Ryan",
            "status": "FIT",
            "note": "经验一门仍在替补席，Popovic 尚未改回 Ryan 先发",
            "confirmed": true
          },
          {
            "player": "Harry Souttar",
            "status": "FIT",
            "note": "5-4-1 队长中卫，对土耳其全场稳定",
            "confirmed": true
          },
          {
            "player": "Nestory Irankunda",
            "status": "FIT",
            "note": "27' 首开纪录，19 岁 Brighton 球员上位成功",
            "confirmed": true
          },
          {
            "player": "Jackson Irvine",
            "status": "FIT",
            "note": "首轮替补，Okon-Engstler 顶替其中场位置；仍可用",
            "confirmed": true
          }
        ],
        "rumors": [
          "Popovic（赛后）：「我们很难被击败…每次大赛都被低估」——5-4-1 低位反击奏效",
          "对土耳其 2-0：控球不占优但 Irankunda+Metcalfe 反击高效，Beach 一门变阵成亮点",
          "Popovic 赛前续约至 2027 亚洲杯，更衣室稳定",
          "Leckie/Ryan/Irvine 等 veteran 首轮替补，年轻化与经验并存",
          "客场西雅图对东道主美国是本届最难客场之一，预计继续低位+反击"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 1,
        "away_wins": 0,
        "recent": [],
        "note": "美国近年占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 32 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 51,
        "draw": 25,
        "away_win": 24,
        "score": "1-0",
        "confidence": 74,
        "xg_home": 1.68,
        "xg_away": 0.92,
        "key_factor": "东道主西雅图：Pulisic/Reyna 宽度 vs 澳大利亚低位；美国取胜可大幅推进出线",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 12.5
          },
          {
            "score": "1-1",
            "prob": 11.5
          },
          {
            "score": "2-0",
            "prob": 10.5
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
            "score": "0-1",
            "prob": 6.8
          },
          {
            "score": "3-0",
            "prob": 5.9
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "USA 暂列 D 组第 1（3 分 · 已赛 1 场） vs Australia 第 2（3 分 · 已赛 1 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "西雅图凉爽多云，海风微凉 · 18°C · 湿度 62% · 降雨概率 25% · 太平洋海风 3级；凉爽海风——利于东道主维持 90 分钟强度，对推演影响低（18°C · 12:00 PT 开球 · 降雨概率 25%）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "东道主西雅图：Pulisic/Reyna 宽度 vs 澳大利亚低位；美国取胜可大幅推进出线"
          }
        ],
        "base_home_win": 55,
        "base_draw": 24,
        "base_away_win": 21,
        "depth_calibrated": true
      },
      "weather": {
        "city": "西雅图",
        "country": "美国",
        "venue": "Lumen Field",
        "temp": 18,
        "humidity": 62,
        "altitude_m": 50,
        "rain_chance": 25,
        "wind": "太平洋海风 3级",
        "condition_cn": "西雅图凉爽多云，海风微凉",
        "impact_level": "LOW",
        "impact": "Lumen Field 18°C 午间开球，体感舒适；美国高位压迫与澳大利亚低位均不受气候明显制约",
        "impact_summary": "凉爽海风——利于东道主维持 90 分钟强度，对推演影响低",
        "home_adapt": 88,
        "away_adapt": 79,
        "home_note": "西雅图主场，Pochettino 球队习惯太平洋西北凉爽气候；压迫节奏不易因热衰减",
        "away_note": "澳大利亚跨时区作战，18°C 对其体能型打法友好；Ryan 一门经验是稳定因素",
        "prediction_note": "气候对模型影响可忽略；若临场小雨，Lumen Field 天然草排水良好，球速略快",
        "weather_factors": [
          {
            "label": "18°C · 12:00 PT 开球",
            "impact": "低",
            "detail": "北京时间 6月20日 03:00；西雅图午间气温温和"
          },
          {
            "label": "降雨概率 25%",
            "impact": "低",
            "detail": "间歇性 drizzle 可能，对传球影响有限"
          },
          {
            "label": "海风 3级",
            "impact": "略利主队",
            "detail": "长传与传中精度略受影响，东道主更熟悉场地风向"
          }
        ],
        "historical_note": "Lumen Field · D组第2轮 · 东道主美国 · 预报更新 2026-06-19 22:00 本地",
        "forecast_updated": "2026-06-19 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "month": "甲午月",
          "month_element": "金+火",
          "day": "己丑日",
          "day_element": "土",
          "day_dominant": "土",
          "day_summary": "己丑日——己土坐丑，土气厚重。《道德经》曰：「知常曰明。」丑土当令，宜循序渐进、忌半场冒进；非力之大小，乃气之顺逆。",
          "hour_home": "寅时（03:00-05:00）",
          "hour_home_element": "木"
        },
        "wuxing": {
          "home": {
            "team": "USA",
            "colors": "红+白+蓝",
            "elements": "火、金、水",
            "wuxing_short": "火金水杂",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 62,
            "reason": "红属火、白属金、蓝属水。寅时木气初升，木生火——西雅图水气相涵，如「泽中有火」。《道德经》「上善若水」，东道主顺寅木而进。",
            "advantage": "寅木生火，主场水气相涵"
          },
          "away": {
            "team": "Australia",
            "colors": "金+绿",
            "elements": "金、木",
            "wuxing_short": "金木相杂",
            "verdict": "中性偏逆",
            "verdict_color": "#C8A96E",
            "compat": 44,
            "reason": "金绿相杂。丑土日厚重，寅木泄金——如「木入金中」，宜低位守中、忌早段失球。",
            "disadvantage": "金气受寅木所泄，守势需稳"
          },
          "summary": "五行裁定：寅木生火利东道主；澳大利亚金木守中——气运偏逆，早段破局者占先机"
        },
        "hexagram": {
          "name": "泽火革",
          "symbol": "☱☲",
          "number": 49,
          "upper": "兑泽",
          "lower": "离火",
          "quote": "《周易·革卦》：「己日乃革，元亨利贞。」",
          "general": "革卦——泽中有火，除旧布新；宜早段主动变革，忌守旧拖延。",
          "advantage_team": "USA",
          "disadvantage_team": "Australia",
          "hexagram_analysis": "革卦「水火相息」：寅时木助火，兑泽在上——气运宜上半场主动破局一段，卦未明示后段第二高峰。",
          "match_nature": "除旧布新 · 宜早动",
          "yellow_card_risk": "中",
          "yellow_card_reason": "革卦主变革非粗野；高位压迫致战术犯规，预计 3-4 张黄牌。",
          "scenarios": [
            {
              "icon": "☯",
              "label": "气运性质",
              "text": "寅木生火，革故鼎新——先动者占「元亨」"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 25-42 分钟（革卦「己日乃革」、寅木助火——卦只示此一段）"
            },
            {
              "icon": "🟨",
              "label": "纪律",
              "text": "革主主动，黄牌来自压迫阻截"
            }
          ],
          "early_goal": {
            "scenario": "若美国先进球",
            "prediction": "革象全现——寅木助火，追加窗口在 30-45 分钟；忌领先后守旧不革。",
            "favors": "USA",
            "favors_prob": 62
          },
          "no_early_goal": {
            "scenario": "若前 30 分钟无进球",
            "prediction": "革卦宜「待己日」——0-0 仍可期；35-50 分钟水气渐移，先破局者得利。",
            "favors": "USA",
            "favors_prob": 55
          },
          "away_goal": {
            "scenario": "若澳大利亚偷袭破门",
            "prediction": "革遭逆——金木守中偶可惊雷；主队需水火相息耐心反扑，60' 后寅木仍助火。",
            "favors": "USA",
            "favors_prob": 52
          }
        },
        "goal_peak": {
          "scope": "first_half",
          "title": "上半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 25,
              "end_min": 42,
              "hex_reason": "革卦「己日乃革」，寅木助火",
              "time_reason": "寅时木气生火，宜上半场破局"
            }
          ],
          "periods": "第 25-42 分钟",
          "rationale": "寅时木气初升，革卦主「除旧布新」——气运集中于上半场主动一段，卦象未明示下半场第二高峰。宁缺毋滥，只示一窗。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 72,
        "away_score": 36,
        "mystic_verdict": "美国寅木生火，澳大利亚金木守中——革故鼎新，东道主宜早段破局。",
        "model_bridge": "xG 1.68-0.92 支持东道主，Pulisic 宽度 vs 澳大利亚低位是核心。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "group_context": {
        "group": "D",
        "label": "D组 · 第1轮（2场已赛）",
        "matchday": 2,
        "standings": [
          {
            "team": "USA",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 4,
            "ga": 1
          },
          {
            "team": "Australia",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 2,
            "ga": 0
          },
          {
            "team": "Türkiye",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 0,
            "ga": 2
          },
          {
            "team": "Paraguay",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 4
          }
        ],
        "home": {
          "team": "USA",
          "rank": 1,
          "pts": 3,
          "played": 1,
          "if_1st": "32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池） → 当前 G 组第 2倾向 New Zealand",
          "if_1st_r16": "16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者",
          "if_1st_corridor": "比利时/埃及 等 G 组头名走廊",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 G 组第 1倾向 Iran",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/西班牙 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Australia",
          "rank": 2,
          "pts": 3,
          "played": 1,
          "if_1st": "32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池） → 当前 G 组第 2倾向 New Zealand",
          "if_1st_r16": "16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者",
          "if_1st_corridor": "比利时/埃及 等 G 组头名走廊",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 G 组第 1倾向 Iran",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/西班牙 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "C 组：头名 Scotland 3 分 · 次席 Morocco 1 分（32强绑定组）",
          "G 组：头名 Iran 1 分 · 次席 New Zealand 同分（32强绑定组）",
          "H 组四队同积 1 分，形势极度开放",
          "E 组 Germany 3 分领跑",
          "F 组 Sweden 3 分领跑",
          "I 组 Norway 3 分领跑"
        ],
        "path_tradeoff": "D 组次席走 D2–G2 槽，与 C/F 头名次席路径不同；美国/土耳其若争头名需关注第 3 名落位。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": null,
          "reason": "本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。",
          "optimal_summary": "策略最优解（推演）：本组及关联组积分纠缠，本场以抢 3 分（至少 1 分）为先；锻炼新兵与战术演练宜留到末轮、出线形势明朗后再考虑，届时非胜结果方有可接受空间。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "USA 若取胜：积分 6，D 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Australia 若取胜：积分 6，客场抢分将改变 D 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 C 组：头名 Scotland 3 分 · 次席 Morocco 1 分（32强绑定组） · G 组：头名 Iran 1 分 · 次席 New Zealand 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：D 组次席走 D2–G2 槽，与 C/F 头名次席路径不同；美国/土耳其若争头名需关注第 3 名落位。"
        ]
      },
      "depth_calibration": {
        "tier_home": 1,
        "tier_label": "USA 被看好 · 净胜约 1 球",
        "implied_tier": 0.25,
        "tier_gap": 0.75,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 USA（约 62%）",
        "analysis": "魔方：美国 -1 / 大小 2.5；东道主首轮 4-1 后略被看好，模型 xG 1.68 支持小胜但穿 -1 需效率。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 12.6
            },
            {
              "score": "1-1",
              "prob": 11.6
            },
            {
              "score": "2-0",
              "prob": 10.6
            }
          ],
          "one_goal_win_pct": 25.1,
          "two_plus_win_pct": 29.8,
          "full_cover_pct": 29.8,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": 25.1,
          "margin_full_label": "净胜≥2",
          "margin_half_label": "走水净胜=1",
          "fav_cover_ev": -0.152,
          "dog_cover_ev": 0.152,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.6,
          "fair_totals_line": 2,
          "over_2_5_pct": 47.7,
          "over_3_pct": 25.8,
          "totals_lean_cn": "2.5 球参考接近均衡；3 球参考偏少",
          "margin_risk_note": "净胜 1 球概率 25.1%：参考净胜 1 球时，仅赢一球与拉开差距须分开看"
        },
        "spread_odds": {
          "fav": 1.02,
          "dog": 0.82,
          "note": "USA 1.02 · Australia 0.82"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.6,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 47.7,
          "under_pct": 52.3,
          "signal": "high_line",
          "signal_cn": "进球参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。",
          "public_over_pct": 52,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "多进球侧 1 / 少进球侧 0.8 · 少进球侧关注度更高",
          "totals_odds": {
            "over": 1,
            "under": 0.8,
            "note": "多进球 1 · 少进球 0.8"
          },
          "rational_cn": "模型在 总进球约 2.5 个 附近均衡；进球参考偏高但模型仍偏少进球",
          "score_link_cn": "小比分（1-0/1-1）偏少进球 · 2-0/2-1 居中 · 3 球+ 偏多进球"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": -4,
          "draw": 1,
          "away_win": 3
        },
        "adjustment_note": "模型微调：主胜 -4% · 平 +1% · 客 +3%",
        "adjusted_probs": {
          "home_win": 51,
          "draw": 25,
          "away_win": 24
        },
        "display_summary": {
          "fav_name": "USA",
          "expected_total_goals": 2.56,
          "poisson_fav_win_pct": 55,
          "small_lead_pct": 25.1,
          "small_example_score": "1-0",
          "small_example_pct": 12.6,
          "big_cover_pct": 29.8,
          "big_example_score": "2-0",
          "big_example_pct": 10.6,
          "win_shape": {
            "fav_name": "USA",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 29.9%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 12.6,
                "pct": 22.9
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.6,
                "pct": 22.9
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 16.5,
                "pct": 29.9
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 13.3,
                "pct": 24.3
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 45.8
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 29.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24.3
              }
            ],
            "fav_win_pct": 51
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 34.6 分",
            "first_goal_wait": 34.6,
            "fast_pct": 58,
            "moderate_pct": 14.8,
            "slow_pct": 27.3,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 58
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 27.3
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "USA 暂无重要伤停 · Australia 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "继续压迫 / 5-4-1 铁桶（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "凉爽海风——利于东道主维持 90 分钟强度，对推演影响低"
            }
          ],
          "xg_context": {
            "baseline_home": 1.68,
            "baseline_away": 0.92,
            "adjusted_home": 1.68,
            "adjusted_away": 0.92,
            "note": "基准 xG 1.68–0.92（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 0.75,
            "implied_tier_label": "USA 被看好 · 净胜约 0.25 球",
            "market_tier_label": "USA 被看好 · 净胜约 1 球",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75"
          },
          "win_outlook": {
            "fav_name": "USA",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 45.8
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 29.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 24.3
              }
            ],
            "margin_line_cn": "USA · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
            "margin_meet_pct": 29.8,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥2",
            "margin_half_label": "走水净胜=1",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球约 2.5 个",
            "fair_totals_line": 2,
            "model_total_xg": 2.6,
            "totals_line_gap": 0.5,
            "totals_high_pct": 47.7,
            "totals_low_pct": 52.3,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 23.1,
            "win_margin2_low_total_pct": 10.6,
            "win_margin2_high_total_pct": 19.2,
            "readout_cn": "取胜约 51%；若取胜，以「险胜收工」为主（45.8%）。 对着赛前净胜参考，净胜≥2（全达标）约 29.8%；对着外界总进球参考 总进球约 2.5 个，模型终场多于该参考的概率约 47.7%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 12.6
            },
            {
              "score": "1-1",
              "pct": 11.6
            },
            {
              "score": "2-0",
              "pct": 10.6
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 47.7,
            "gap_warning": null,
            "totals_outlook": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
              "pill_cn": "沉闷与精彩几乎五五开，无明显倾向。",
              "detail_cn": "模型推演：达到这一进球节奏与达不到的机率几乎各半，暂无明确倾向；精彩程度仍看临场发挥。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 47.7,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "全场至少 3 球",
              "caution_public_high": false
            },
            "summary_cn": "模型 xG 合计约 2.6 球（公允参考约 2） · 外界总进球参考 2.5，高出模型约 0.5 球 · 外界参考略高于模型公允线（+0.5 球） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "USA · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 29.8% · 达到预期难度偏大 进球氛围：几乎五五开",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "USA",
              "market_expect_cn": "净胜≥2",
              "meet_pct": 29.8,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "USA · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 29.8% · 达到预期难度偏大",
              "detail_cn": "USA · 赛前外界预期 净胜≥2。模型推演达标概率约 29.8%；外界看法高于 xG 隐含约 0.75 球，达到预期难度偏大。",
              "extra_stats_cn": "",
              "full_cover_pct": 29.8,
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
              "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
              "pill_cn": "沉闷与精彩几乎五五开，无明显倾向。",
              "detail_cn": "模型推演：达到这一进球节奏与达不到的机率几乎各半，暂无明确倾向；精彩程度仍看临场发挥。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 47.7,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "全场至少 3 球",
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
                  "fav_name": "USA",
                  "market_expect_cn": "净胜≥2",
                  "meet_pct": 29.8,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "USA · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 29.8% · 达到预期难度偏大",
                  "detail_cn": "USA · 赛前外界预期 净胜≥2。模型推演达标概率约 29.8%；外界看法高于 xG 隐含约 0.75 球，达到预期难度偏大。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 29.8,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥2",
                  "margin_half_label": "走水净胜=1",
                  "tier_gap": 0.75,
                  "show_cover": true
                },
                "text": "达标概率约 29.8% · 达到预期难度偏大",
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
                  "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
                  "pill_cn": "沉闷与精彩几乎五五开，无明显倾向。",
                  "detail_cn": "模型推演：达到这一进球节奏与达不到的机率几乎各半，暂无明确倾向；精彩程度仍看临场发挥。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 47.7,
                  "line_gap": 0.5,
                  "market_line": 2.5,
                  "market_goals_int": 3,
                  "market_goals_cn": "全场至少 3 球",
                  "caution_public_high": false
                },
                "text": "沉闷与精彩几乎五五开，无明显倾向。",
                "color": "#8A96A8",
                "muted": true
              }
            ],
            "methodology_note": "读场优先级：净胜走向 ＞ 进球氛围（对照外界「至少 N 球」预期，中性档几乎五五开；强信号才标沉闷/精彩）。仅供娱乐推演，非投注建议。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "USA",
              "first_goal_pct": 64.6,
              "start_score": "1-0",
              "fav_name": "USA",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 94.7,
              "small_lead_pct": 33.3,
              "big_lead_pct": 45.7,
              "fav_win_pct": 79,
              "fav_draw_pct": 15.7,
              "fav_lose_pct": 5.3,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "USA 保持胜果（净胜≥1）",
                  "pct": 79
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 15.7
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 5.3
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
              "big_delta": 15.9,
              "small_delta": 8.2,
              "narrative": "USA 先破门（已 1-0） → 「继续压迫」；Australia 「维持低位」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "USA",
                "state_label": "USA 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 45.8
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 29.9
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 24.3
                  }
                ],
                "margin_line_cn": "USA · 赛前净胜参考 净胜≥2（全达标） · 走水净胜=1",
                "margin_meet_pct": 45.7,
                "margin_half_pct": 0,
                "margin_fail_pct": 33.3,
                "margin_full_label": "净胜≥2",
                "margin_half_label": "走水净胜=1",
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球约 2.5 个",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.66,
                "totals_line_gap": 0.25,
                "totals_high_pct": 49.3,
                "totals_low_pct": 50.7,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 39.1,
                "win_margin2_low_total_pct": 20,
                "win_margin2_high_total_pct": 25.6,
                "readout_cn": "USA 已 1-0 领先：仍取胜约 79%。 对着外界总进球参考 总进球约 2.5 个，模型终场多于该参考的概率约 49.3%。 常见收尾如 2-0（部分扩大；相对外界总进球参考仍偏少）。"
              }
            },
            {
              "side": "away",
              "team": "Australia",
              "first_goal_pct": 35.4,
              "start_score": "0-1",
              "fav_name": "USA",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 58.8,
              "small_lead_pct": 18.4,
              "big_lead_pct": 12.6,
              "fav_win_pct": 31,
              "fav_draw_pct": 27.8,
              "fav_lose_pct": 41.2,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "USA 追平（平局）",
                  "pct": 27.8
                },
                {
                  "key": "win1",
                  "label": "USA 净胜1球翻盘（如 2-1）",
                  "pct": 18.4
                },
                {
                  "key": "win2",
                  "label": "USA 净胜≥2球翻盘（如 3-1）",
                  "pct": 12.6
                },
                {
                  "key": "upset_hold",
                  "label": "Australia 保持胜果至终场",
                  "pct": 41.2
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.2 分",
                "first_goal_wait": 34.2,
                "fast_pct": 51.3,
                "moderate_pct": 14.7,
                "slow_pct": 34,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 51.3
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 34
                  }
                ]
              },
              "big_delta": -17.2,
              "small_delta": -6.7,
              "narrative": "Australia 先破门（已 0-1） → 「5-4-1 铁桶」；USA 「堆边锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "模型 xG 合计约 2.6 球（公允参考约 2） · 外界总进球参考 2.5，高出模型约 0.5 球 · 外界参考略高于模型公允线（+0.5 球） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球约 2.5 个",
              "totals_high_pct": 47.7,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 22,
              "readout_cn": "USA · 低位反击。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
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
          },
          "goal_timing": {
            "sample_label": "近30场",
            "source_note": "user_screenshot_2026-06-20_usa_aus",
            "home_name": "USA",
            "away_name": "Australia",
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
                "pct": 28
              },
              "home_conceded": {
                "interval": "16–30",
                "pct": 25
              },
              "away_scored": {
                "interval": "46–60",
                "pct": 20
              },
              "away_conceded": {
                "interval": "76–90",
                "pct": 35
              }
            },
            "cross_insight": {
              "has_cross": false,
              "hits": [],
              "cross_intervals": [],
              "summary_cn": "两队高峰时段错开，暂无强重合进攻窗口。"
            },
            "disclaimer_cn": "以上为两队近30场历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。"
          }
        },
        "public_summary_note": "【推演概要】USA · 低位反击。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75（模型微调：主胜 -4% · 平 +1% · 客 +3%）"
      },
      "coach_analysis": {
        "home": {
          "name": "Mauricio Pochettino",
          "age": 53,
          "nation": "阿根廷",
          "tenure": "2024年—",
          "wc_exp": "2014/2018 带队 · 2026 美国主帅",
          "style_tags": [
            "4-3-3",
            "高位",
            "Pulisic 宽度",
            "主场气势"
          ],
          "formation_pref": "4-3-3 · Pulisic-Reyna 双翼",
          "style_summary": "揭幕战 4-1 巴拉圭回应批评，Balogun 双响+Reyna 绝杀。西雅图主场对澳大利亚必须当成决赛踢，预计持续宽度+Adams 屏障。",
          "subs": {
            "timing": "首换 60–65 分钟",
            "pattern": "Reyna 后段奇兵",
            "avg_first_sub": "62'",
            "note": "26 人全员可用"
          },
          "when_leading": {
            "label": "继续压迫",
            "detail": "1 球领先：维持 Seattle 主场强度，忌过早退守。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：55' Pulisic/Reyna 加码宽度。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "对澳大利亚预计控球+肋部渗透。"
          },
          "vs_weak": {
            "label": "对弱队：不留余地",
            "detail": "揭幕战已验证高位效率。"
          },
          "tournament": "大赛经验+东道主压力；Pochettino 强调「不可轻敌」。",
          "traits": [
            "主场",
            "Pulisic 核心",
            "宽度",
            "必须抢分"
          ],
          "match_note": "西雅图主场——Pulisic/Reyna 宽度+Adams 屏障；D 组同积 3 分，胜者握出线主动。"
        },
        "away": {
          "name": "Graham Arnold",
          "age": 61,
          "nation": "澳大利亚",
          "tenure": "2018年—",
          "wc_exp": "2022 带队 · 2026 续任",
          "style_tags": [
            "5-4-1",
            "低位",
            "反击",
            "纪律"
          ],
          "formation_pref": "5-4-1 · Irankunda 速度",
          "style_summary": "对土耳其 2-0 验证低位+反击；Beach 一门变阵成亮点。客场西雅图对东道主是美国本届最难客场之一，预计继续低位偷分。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "Irvine/Leckie 经验替补",
            "avg_first_sub": "68'",
            "note": "弱队体能分配"
          },
          "when_leading": {
            "label": "5-4-1 铁桶",
            "detail": "若意外领先：立即深度退守+反击。"
          },
          "when_trailing": {
            "label": "维持低位",
            "detail": "unlikely 大举压上。"
          },
          "vs_strong": {
            "label": "对强队：龟缩+反击",
            "detail": "对土耳其 2-0 是模板。"
          },
          "vs_weak": {
            "label": "对弱队：相对开放",
            "detail": "对美国预计教科书弱队踢法。"
          },
          "tournament": "「每次大赛都被低估」——Popovic 续约至 2027 亚洲杯，更衣室稳定。",
          "traits": [
            "5-4-1",
            "反击",
            "Beach 一门",
            "客场弱势"
          ],
          "match_note": "5-4-1 低位+Beach 一门；对土耳其 2-0 模板，Irankunda 反击是唯一威胁路径。"
        }
      },
      "upset_alert": {
        "favorite": "USA",
        "underdog": "Australia",
        "favorite_iso": "USA",
        "index": 26,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 22,
        "verdict": "东道主西雅图+揭幕战 4-1 气势——澳大利亚 5-4-1 低位仍有约 22% 平局/偷分空间（对土耳其 2-0 已验证）。",
        "tactical": "Pochettino 4-3-3 宽度 vs Arnold 5-4-1 低位；Pulisic 对位 Souttar，Beach 一门稳定性是变量。",
        "psychology": "美国「当成决赛踢」；澳大利亚「每次大赛被低估」。",
        "historical": "美国近年 H2H 占优；澳大利亚对土耳其反击高效。",
        "factors": [
          {
            "tag": "主场",
            "impact": "强",
            "detail": "Lumen Field 7 万观众+凉爽气候"
          },
          {
            "tag": "低位",
            "impact": "中",
            "detail": "澳大利亚 5-4-1 对土耳其已验证"
          },
          {
            "tag": "D组形势",
            "impact": "强",
            "detail": "双方同积 3 分，胜者握主动"
          }
        ]
      }
    },
    {
      "id": "m30",
      "group": "C",
      "matchday": 2,
      "date": "2026-06-19",
      "time": "18:00",
      "time_local": "18:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "06:00",
      "date_beijing": "6月20日",
      "time_beijing_full": "北京时间 6月20日 06:00",
      "venue": "Gillette Stadium",
      "city": "Boston, USA",
      "note": "C组第2轮 · 苏格兰 vs 摩洛哥 · 波士顿",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Gordon; Hickey, Hanley, Souttar, Robertson; McTominay, McGregor; Gannon-Doak, McGinn, Christie; Adams",
          "away": "Bounou; Hakimi, Saïss, Aguerd; Mazraoui, Amrabat; Ziyech, Ounahi, Sabiri; En-Nesyri, Boufal",
          "source": "BBC / Sky 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Scotland",
        "iso": "sc",
        "flag": "",
        "fifa_rank": 36,
        "rating": 70,
        "form": [
          "D",
          "L",
          "W",
          "D",
          "L"
        ],
        "coach": "Steve Clarke",
        "stars": [
          {
            "name": "Scott McTominay",
            "pos": "CM",
            "club": "Napoli",
            "desc": "中场核心+远射",
            "rating": 8
          }
        ],
        "star": {
          "name": "Scott McTominay",
          "pos": "CM",
          "club": "Napoli",
          "desc": "中场核心+远射",
          "rating": 8
        },
        "injuries": [
          {
            "player": "Billy Gilmour",
            "status": "OUT",
            "note": "膝伤退出整届世界杯，McTominay 独撑中场创造力",
            "confirmed": true
          },
          {
            "player": "Scott McTominay",
            "status": "FIT",
            "note": "Clarke 6/14 确认「perfect and ready」；对海地全场核心",
            "confirmed": true
          },
          {
            "player": "John McGinn",
            "status": "FIT",
            "note": "29' 制胜球 + 7.8 MOTM；刚随维拉夺欧联杯，状态正佳",
            "confirmed": true
          },
          {
            "player": "Scott McKenna",
            "status": "FIT",
            "note": "首轮 Hendry 先发中卫，McKenna 替补待命",
            "confirmed": true
          },
          {
            "player": "Nathan Patterson",
            "status": "DOUBT",
            "note": "6/14 轻微撞击伤被观察；次轮队检仍待官方更新",
            "confirmed": false
          }
        ],
        "rumors": [
          "Clarke（Standard）：「McTominay 可战，Gilmour 缺阵后中场责任更重」",
          "McGinn 制胜后苏格兰 C 组领跑 3 分，更衣室士气为近年大赛最高之一",
          "对摩洛哥：Clarke 预计延续 4-4-2/4-2-3-1，Robertson 宽度 + McGinn 插上",
          "首轮 xG 1.05-1.05 险胜海地，Clarke 称「大赛三分比场面更重要」",
          "C 组巴西、摩洛哥各 1 分，苏格兰若再胜有望握出线主动"
        ]
      },
      "away": {
        "name": "Morocco",
        "iso": "ma",
        "flag": "",
        "fifa_rank": 13,
        "rating": 78,
        "form": [
          "D",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Walid Regragui",
        "stars": [
          {
            "name": "Achraf Hakimi",
            "pos": "RB",
            "club": "PSG",
            "desc": "边路爆点",
            "rating": 8.4
          }
        ],
        "star": {
          "name": "Achraf Hakimi",
          "pos": "RB",
          "club": "PSG",
          "desc": "边路爆点",
          "rating": 8.4
        },
        "injuries": [
          {
            "player": "Nayef Aguerd",
            "status": "OUT",
            "note": "腹股沟伤退出世界杯，Diop+Riad 中卫组合经巴西战检验",
            "confirmed": true
          },
          {
            "player": "Abde Ezzalzouli",
            "status": "OUT",
            "note": "膝伤退出世界杯，定位球选项减少",
            "confirmed": true
          },
          {
            "player": "Achraf Hakimi",
            "status": "FIT",
            "note": "对巴西全场活跃，边路往返无虞",
            "confirmed": true
          },
          {
            "player": "Noussair Mazraoui",
            "status": "FIT",
            "note": "对巴西首发左后卫，肩部伤后已完全恢复",
            "confirmed": true
          },
          {
            "player": "Abdessamad Saibari",
            "status": "FIT",
            "note": "21' 偷袭破门逼平巴西，次轮预计继续先发",
            "confirmed": true
          }
        ],
        "rumors": [
          "Regragui（赛后）：「对巴西 1 分证明我们可以与任何人抗衡；对苏格兰要抢 3 分」",
          "Saibari 冷射 + Vinícius 扳平后，摩洛哥 2022 四强信心延续",
          "Diop（Fulham）+ Riad（Crystal Palace）新中卫链经巴西战磨合，防空仍是隐患",
          "Hakimi-Díaz 右路对 Robertson 左路是本场关键对位",
          "客场波士顿抢分将改变 C 组格局——摩洛哥需打破苏格兰主场气势"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 1,
        "away_wins": 1,
        "recent": [],
        "note": "摩洛哥近年更强"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 30 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 37,
        "draw": 25,
        "away_win": 37,
        "score": "1-1",
        "confidence": 65,
        "xg_home": 1.35,
        "xg_away": 1.28,
        "key_factor": "C组均分乱局：McTominay vs Hakimi · 摩洛哥首轮平巴西 · 泊松倾向 1-1/1-2",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.5
          },
          {
            "score": "1-0",
            "prob": 9.7
          },
          {
            "score": "0-1",
            "prob": 9.2
          },
          {
            "score": "2-1",
            "prob": 8.4
          },
          {
            "score": "1-2",
            "prob": 8
          },
          {
            "score": "0-0",
            "prob": 7.2
          },
          {
            "score": "2-0",
            "prob": 6.6
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Scotland 暂列 C 组第 1（3 分 · 已赛 1 场） vs Morocco 第 2（1 分 · 已赛 1 场）"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "波士顿温和晴朗，夜场舒适 · 21°C · 湿度 55% · 降雨概率 18% · 东北风 2级；气候变量低——均分乱局下，McTominay vs Hakimi 对位不受天气扰动（21°C · 18:00 ET 开球 · 低降雨 18%）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "C组均分乱局：McTominay vs Hakimi · 摩洛哥首轮平巴西 · 泊松倾向 1-1/1-2"
          }
        ],
        "base_home_win": 38,
        "base_draw": 26,
        "base_away_win": 35,
        "depth_calibrated": true
      },
      "weather": {
        "city": "波士顿",
        "country": "美国",
        "venue": "Gillette Stadium",
        "temp": 21,
        "humidity": 55,
        "altitude_m": 85,
        "rain_chance": 18,
        "wind": "东北风 2级",
        "condition_cn": "波士顿温和晴朗，夜场舒适",
        "impact_level": "LOW",
        "impact": "Gillette 21°C 傍晚开球，苏格兰与摩洛哥均适应温带气候；战术对位主导比赛",
        "impact_summary": "气候变量低——均分乱局下，McTominay vs Hakimi 对位不受天气扰动",
        "home_adapt": 82,
        "away_adapt": 84,
        "home_note": "苏格兰球员习惯英伦温带夜场；Robertson 左路往返不受气温制约",
        "away_note": "摩洛哥地中海-撒哈拉过渡带球队，22°C 级夜场是其舒适区；Hakimi 边路不受影响",
        "prediction_note": "模型不因气候微调 xG；若微雨则场地略滑，反击速度微升",
        "weather_factors": [
          {
            "label": "21°C · 18:00 ET 开球",
            "impact": "低",
            "detail": "北京时间 6月20日 06:00；Foxborough 傍晚降温"
          },
          {
            "label": "低降雨 18%",
            "impact": "低",
            "detail": "晴朗为主，天然草状态良好"
          },
          {
            "label": "湿度 55%",
            "impact": "中性",
            "detail": "双方体能消耗正常，无湿热负担"
          }
        ],
        "historical_note": "Gillette Stadium · C组第2轮 · 预报更新 2026-06-19 22:00 本地",
        "forecast_updated": "2026-06-19 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "month": "甲午月",
          "month_element": "金+火",
          "day": "己丑日",
          "day_element": "土",
          "day_dominant": "土",
          "day_summary": "己丑日——己土坐丑，土气厚重。《道德经》曰：「知常曰明。」丑土当令，宜循序渐进、忌半场冒进；非力之大小，乃气之顺逆。",
          "hour_home": "卯时（06:00-08:00）",
          "hour_home_element": "木"
        },
        "wuxing": {
          "home": {
            "team": "Scotland",
            "colors": "深蓝+白",
            "elements": "水、金",
            "wuxing_short": "金水相生",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 54,
            "reason": "深蓝属水、白属金。卯时木气当令，金生水——如「风行水上」。《道德经》「柔弱胜刚强」，苏格兰水金顺卯木而流。",
            "advantage": "卯木泄水气，金水相济宜稳守反击"
          },
          "away": {
            "team": "Morocco",
            "colors": "红+绿",
            "elements": "火、木",
            "wuxing_short": "火木相济",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 56,
            "reason": "红属火、绿属木。卯时木旺，火木相生——如「木火通明」，然丑土日厚重，宜守中待变。",
            "advantage": "卯木助火木，反击为暗流"
          },
          "summary": "五行裁定：卯木当令双方皆沾木气；苏格兰金水相济、摩洛哥火木相生——气运近而不齐，均分乱局宜稳"
        },
        "hexagram": {
          "name": "风水涣",
          "symbol": "☴☵",
          "number": 59,
          "upper": "巽风",
          "lower": "坎水",
          "quote": "《周易·涣卦》：「涣，亨。王假有庙，利涉大川。」",
          "general": "涣卦——风行水上，离散中藏通亨；均势局宜后段破局，忌早段冒进。",
          "advantage_team": null,
          "disadvantage_team": null,
          "hexagram_analysis": "涣卦「利涉大川」：卯时木气助风，坎水在下——气运后段渐动，卦示稳阵后一段破局。",
          "match_nature": "风行水上 · 均势待变",
          "yellow_card_risk": "中",
          "yellow_card_reason": "涣卦主流通非缠斗；McTominay/Hakimi 对位下战术犯规，预计中等黄牌。",
          "scenarios": [
            {
              "icon": "☯",
              "label": "气运性质",
              "text": "卯木当令，双方气运相近——后段「涉大川」者得利"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 72-88 分钟（涣卦「利涉大川」、坎水后段水气再动——卦只示此一段）"
            },
            {
              "icon": "🟨",
              "label": "纪律",
              "text": "均势局，黄牌来自中场绞杀"
            }
          ],
          "early_goal": {
            "scenario": "若苏格兰先进球",
            "prediction": "涣象渐通——金水守中，追加窗口在 76-90 分钟；忌领先后「涣」散。",
            "favors": "Scotland",
            "favors_prob": 58
          },
          "no_early_goal": {
            "scenario": "若前 35 分钟无进球",
            "prediction": "涣卦宜「王假有庙」——0-0 符合均势；下半场 55-70 分钟为第一次破局窗口。",
            "favors": "Draw",
            "favors_prob": 48
          },
          "away_goal": {
            "scenario": "若摩洛哥先进球",
            "prediction": "涣遭逆——火木反击；苏格兰需金水相济耐心，70' 后坎水助反扑。",
            "favors": "Morocco",
            "favors_prob": 54
          }
        },
        "goal_peak": {
          "scope": "second_half",
          "title": "下半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "下半场",
              "half": "second",
              "start_min": 72,
              "end_min": 88,
              "hex_reason": "涣卦「利涉大川」，坎水后段再动",
              "time_reason": "卯时后段木泄水气，后段破局"
            }
          ],
          "periods": "第 72-88 分钟",
          "rationale": "卯时木气当令，涣卦主「风行水上」——均势局气运集中于后段一段，卦象未明示上半场高峰。宁缺毋滥，只示下半场一窗。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 56,
        "away_score": 58,
        "mystic_verdict": "苏格兰金水相济，摩洛哥火木相生——卯木当令，均分乱局宜稳守反击。",
        "model_bridge": "xG 1.35-1.28 几乎均势，Morocco -0.5 浅盘，平局与 1 球差均需保留。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "group_context": {
        "group": "C",
        "label": "C组 · 第1轮（4场已赛）",
        "matchday": 2,
        "standings": [
          {
            "team": "Scotland",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 1,
            "ga": 0
          },
          {
            "team": "Morocco",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Brazil",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Haiti",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 0,
            "ga": 1
          }
        ],
        "home": {
          "team": "Scotland",
          "rank": 1,
          "pts": 3,
          "played": 1,
          "if_1st": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 F 组第 2倾向 Japan",
          "if_1st_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_1st_corridor": "法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区",
          "if_2nd": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 F 组第 1倾向 Sweden",
          "if_2nd_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_2nd_corridor": "墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 D/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Morocco",
          "rank": 2,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 F 组第 2倾向 Japan",
          "if_1st_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_1st_corridor": "法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区",
          "if_2nd": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 F 组第 1倾向 Sweden",
          "if_2nd_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_2nd_corridor": "墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 D/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "F 组：头名 Sweden 3 分 · 次席 Japan 1 分（32强绑定组）",
          "E 组：头名 Germany 3 分 · 次席 Côte d'Ivoire 同分（32强绑定组）",
          "I 组：头名 Norway 3 分 · 次席 France 同分（32强绑定组）",
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "D 组 USA 3 分领跑"
        ],
        "path_tradeoff": "C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": null,
          "reason": "本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。",
          "optimal_summary": "策略最优解（推演）：关联组形势胶着，本场 Scotland 取胜最能巩固主动，Morocco 则需积极抢 3 分；若握手各取 1 分，对领先方尚可接受，对追赶方则略偏保守——此阶段仍以全力争胜、抢 3 分为上策；尚未到以演练或轮换为名调整名次、接受非胜结果的窗口。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Scotland 若取胜：积分 6，C 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Morocco 若取胜：积分 4，客场抢分将改变 C 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 F 组：头名 Sweden 3 分 · 次席 Japan 1 分（32强绑定组） · E 组：头名 Germany 3 分 · 次席 Côte d'Ivoire 同分（32强绑定组） · I 组：头名 Norway 3 分 · 次席 France 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。"
        ]
      },
      "depth_calibration": {
        "tier_home": -0.5,
        "tier_label": "Morocco 被看好 · 净胜约 0.5 球",
        "implied_tier": 0,
        "tier_gap": -0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Morocco（约 55%）",
        "analysis": "魔方：摩洛哥 -0.5 / 大小 2.25 偏小；盘口浅于名气，模型 xG 接近均势，平局与 1 球差均需保留。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12.5
            },
            {
              "score": "1-0",
              "prob": 9.8
            },
            {
              "score": "0-1",
              "prob": 9.3
            }
          ],
          "one_goal_win_pct": 21,
          "two_plus_win_pct": 17.4,
          "full_cover_pct": 35.2,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.296,
          "dog_cover_ev": 0.296,
          "rational_spread_cn": "主队 守住差距概率略高",
          "total_xg": 2.63,
          "fair_totals_line": 2,
          "over_2_5_pct": 48.7,
          "over_3_pct": 26.7,
          "totals_lean_cn": "2.5 球参考接近均衡；3 球参考偏少",
          "margin_risk_note": "净胜≥1 约 35.2%；仅赢 1 球约 0%"
        },
        "spread_odds": {
          "fav": 0.7,
          "dog": 1.1,
          "note": "Scotland 0.7 · Morocco 1.1"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "market_goals_int": 3,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.63,
          "fair_line": 2,
          "line_gap": 0.25,
          "over_pct": 48.7,
          "under_pct": 51.3,
          "signal": "high_line",
          "signal_cn": "进球参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。",
          "public_over_pct": 46,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "多进球侧 0.94 / 少进球侧 0.81 · 少进球侧关注度更高",
          "totals_odds": {
            "over": 0.94,
            "under": 0.81,
            "note": "多进球 0.94 · 少进球 0.81"
          },
          "rational_cn": "模型在 总进球约 2–2.5 个 附近均衡；进球参考偏高但模型仍偏少进球",
          "score_link_cn": "小比分（1-0/1-1）偏少进球 · 2-0/2-1 居中 · 3 球+ 偏多进球"
        },
        "totals_line": 2.25,
        "applied_delta": {
          "home_win": -1,
          "draw": -1,
          "away_win": 2
        },
        "adjustment_note": "模型微调：主胜 -1% · 平 -1% · 客 +2%",
        "adjusted_probs": {
          "home_win": 37,
          "draw": 25,
          "away_win": 37
        },
        "display_summary": {
          "fav_name": "Morocco",
          "expected_total_goals": 2.22,
          "poisson_fav_win_pct": 32.3,
          "small_lead_pct": 19.9,
          "small_example_score": "0-1",
          "small_example_pct": 11.3,
          "big_cover_pct": 12.4,
          "big_example_score": "0-2",
          "big_example_pct": 5.9,
          "win_shape": {
            "fav_name": "Morocco",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 35%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 11.3,
                "pct": 35
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 8.6,
                "pct": 26.6
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 8,
                "pct": 24.8
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 4.4,
                "pct": 13.6
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 61.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 24.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 13.6
              }
            ],
            "fav_win_pct": 37
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 40.4 分",
            "first_goal_wait": 40.4,
            "fast_pct": 52.4,
            "moderate_pct": 14.8,
            "slow_pct": 32.8,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 52.4
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 32.8
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Scotland：Billy Gilmour 缺阵；Nathan Patterson 存疑 · Morocco：Nayef Aguerd、Abde Ezzalzouli 缺阵"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "4-5-1 收缩 / 控节奏（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "气候变量低——均分乱局下，McTominay vs Hakimi 对位不受天气扰动"
            }
          ],
          "xg_context": {
            "baseline_home": 1.35,
            "baseline_away": 1.28,
            "adjusted_home": 1.18,
            "adjusted_away": 1.05,
            "note": "基准 xG 1.35–1.28 → 调整后 1.18–1.05"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": -0.5,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Morocco 被看好 · 净胜约 0.5 球",
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
                "pct": 61.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 24.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 13.6
              }
            ],
            "margin_line_cn": "Morocco · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 32.3,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.25,
            "totals_line_cn": "总进球约 2–2.5 个",
            "fair_totals_line": 2.25,
            "model_total_xg": 2.23,
            "totals_line_gap": 0,
            "totals_high_pct": 51.8,
            "totals_low_pct": 48.2,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 17.3,
            "win_margin2_low_total_pct": 5.9,
            "win_margin2_high_total_pct": 12.4,
            "readout_cn": "取胜约 37%；若取胜，以「险胜收工」为主（61.6%）。 对着赛前净胜参考，净胜≥1（全达标）约 32.3%；对着外界总进球参考 总进球约 2–2.5 个，模型终场多于该参考的概率约 51.8%。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 13.4
            },
            {
              "score": "1-0",
              "pct": 12.7
            },
            {
              "score": "0-1",
              "pct": 11.3
            }
          ],
          "totals_view": {
            "expected_total": 2.2,
            "fair_line": 2.25,
            "market_line": 2.25,
            "line_gap": 0,
            "over_pct": 38.4,
            "gap_warning": null,
            "totals_outlook": {
              "level": "mild_low",
              "label_cn": "略倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "略倾向沉闷",
              "meter_pos": 38,
              "lean_side": "dull",
              "lean_strength": "mild",
              "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
              "pill_cn": "略倾向沉闷（弱信号）。",
              "detail_cn": "模型略偏沉闷——全场进球节奏可能偏慢、难及这一预期；信号偏弱，仅供参考。",
              "headline_cn": "进球氛围：略倾向沉闷（弱信号）",
              "show_lean": false,
              "over_pct": 38.4,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "全场至少 3 球",
              "caution_public_high": false
            },
            "summary_cn": "模型 xG 合计约 2.2 球（公允参考约 2.25） · 外界总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Morocco · 净胜走向：达标与否难下定论",
            "sub_cn": "达标概率约 32.3% · 达标与否难下定论 进球氛围：略倾向沉闷（弱信号）",
            "spread": {
              "level": "uncertain",
              "label_cn": "净胜幅度难下定论",
              "color": "#8A96A8",
              "fav_name": "Morocco",
              "market_expect_cn": "净胜≥1",
              "meet_pct": 32.3,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达标与否难下定论",
              "headline_cn": "Morocco · 净胜走向：达标与否难下定论",
              "pill_cn": "达标概率约 32.3% · 达标与否难下定论",
              "detail_cn": "Morocco · 赛前外界预期 净胜≥1。模型推演达标概率约 32.3%。",
              "extra_stats_cn": "",
              "full_cover_pct": 32.3,
              "half_cover_pct": 0,
              "lose1_pct": 0,
              "margin_full_label": "净胜≥1",
              "margin_half_label": null,
              "tier_gap": -0.5,
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
              "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
              "pill_cn": "略倾向沉闷（弱信号）。",
              "detail_cn": "模型略偏沉闷——全场进球节奏可能偏慢、难及这一预期；信号偏弱，仅供参考。",
              "headline_cn": "进球氛围：略倾向沉闷（弱信号）",
              "show_lean": false,
              "over_pct": 38.4,
              "line_gap": 0,
              "market_line": 2.25,
              "market_goals_int": 3,
              "market_goals_cn": "全场至少 3 球",
              "caution_public_high": false
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
                  "fav_name": "Morocco",
                  "market_expect_cn": "净胜≥1",
                  "meet_pct": 32.3,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达标与否难下定论",
                  "headline_cn": "Morocco · 净胜走向：达标与否难下定论",
                  "pill_cn": "达标概率约 32.3% · 达标与否难下定论",
                  "detail_cn": "Morocco · 赛前外界预期 净胜≥1。模型推演达标概率约 32.3%。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 32.3,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": -0.5,
                  "show_cover": true
                },
                "text": "达标概率约 32.3% · 达标与否难下定论",
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
                  "meter_pos": 38,
                  "lean_side": "dull",
                  "lean_strength": "mild",
                  "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
                  "pill_cn": "略倾向沉闷（弱信号）。",
                  "detail_cn": "模型略偏沉闷——全场进球节奏可能偏慢、难及这一预期；信号偏弱，仅供参考。",
                  "headline_cn": "进球氛围：略倾向沉闷（弱信号）",
                  "show_lean": false,
                  "over_pct": 38.4,
                  "line_gap": 0,
                  "market_line": 2.25,
                  "market_goals_int": 3,
                  "market_goals_cn": "全场至少 3 球",
                  "caution_public_high": false
                },
                "text": "略倾向沉闷（弱信号）。",
                "color": "#7BB8D4",
                "muted": true
              }
            ],
            "methodology_note": "读场优先级：净胜走向 ＞ 进球氛围（对照外界「至少 N 球」预期，中性档几乎五五开；强信号才标沉闷/精彩）。仅供娱乐推演，非投注建议。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Scotland",
              "first_goal_pct": 52.9,
              "start_score": "1-0",
              "fav_name": "Morocco",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 37.2,
              "small_lead_pct": 10,
              "big_lead_pct": 3.8,
              "fav_win_pct": 13.7,
              "fav_draw_pct": 23.5,
              "fav_lose_pct": 62.8,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Morocco 追平（平局）",
                  "pct": 23.5
                },
                {
                  "key": "win1",
                  "label": "Morocco 净胜1球翻盘（如 2-1）",
                  "pct": 10
                },
                {
                  "key": "win2",
                  "label": "Morocco 净胜≥2球翻盘（如 3-1）",
                  "pct": 3.8
                },
                {
                  "key": "upset_hold",
                  "label": "Scotland 保持胜果至终场",
                  "pct": 62.8
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 41.9 分",
                "first_goal_wait": 41.9,
                "fast_pct": 44.4,
                "moderate_pct": 14.1,
                "slow_pct": 41.4,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 44.4
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.1
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 41.4
                  }
                ]
              },
              "big_delta": -8.6,
              "small_delta": -9.9,
              "narrative": "Scotland 先破门（已 1-0） → 「4-5-1 收缩」；Morocco 「堆边锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            },
            {
              "side": "away",
              "team": "Morocco",
              "first_goal_pct": 47.1,
              "start_score": "0-1",
              "fav_name": "Morocco",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 82.3,
              "small_lead_pct": 32.2,
              "big_lead_pct": 24.3,
              "fav_win_pct": 56.6,
              "fav_draw_pct": 25.7,
              "fav_lose_pct": 17.7,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Morocco 保持胜果（净胜≥1）",
                  "pct": 56.6
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 25.7
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 17.7
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 41.1 分",
                "first_goal_wait": 41.1,
                "fast_pct": 45,
                "moderate_pct": 14.2,
                "slow_pct": 40.7,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 45
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.2
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 40.7
                  }
                ]
              },
              "big_delta": 11.9,
              "small_delta": 12.3,
              "narrative": "Morocco 先破门（已 0-1） → 「控节奏」；Scotland 「堆中场」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": {
                "fav_name": "Morocco",
                "state_label": "Morocco 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 61.6
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 24.8
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 13.6
                  }
                ],
                "margin_line_cn": "Morocco · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 56.6,
                "margin_half_pct": 0,
                "margin_fail_pct": 32.2,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球约 2–2.5 个",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.8,
                "totals_line_gap": 0,
                "totals_high_pct": 68.5,
                "totals_low_pct": 31.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 28.6,
                "win_margin2_low_total_pct": 12,
                "win_margin2_high_total_pct": 24.3,
                "readout_cn": "Morocco 已 1-0 领先：仍取胜约 56.6%。 对着外界总进球参考 总进球约 2–2.5 个，模型终场多于该参考的概率约 68.5%。 常见收尾如 2-0（部分扩大；相对外界总进球参考仍偏少）。"
              }
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "模型 xG 合计约 2.2 球（公允参考约 2.25） · 外界总进球参考 2.25 · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球约 2–2.5 个",
              "totals_high_pct": 51.8,
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
              "draw_trap_pct": 32,
              "readout_cn": "Morocco · 低位反击 · 进球偏少。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 32% 冷门空间含平局）。",
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
              "draw_trap_pct": 32,
              "fav_lead_style": "defensive"
            }
          },
          "goal_timing": {
            "sample_label": "近30场",
            "source_note": "user_screenshot_2026-06-20_sco_mar",
            "home_name": "Scotland",
            "away_name": "Morocco",
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
                "interval": "1–15",
                "pct": 19
              },
              "home_conceded": {
                "interval": "76–90",
                "pct": 18
              },
              "away_scored": {
                "interval": "76–90",
                "pct": 22
              },
              "away_conceded": {
                "interval": "61–75",
                "pct": 33
              }
            },
            "cross_insight": {
              "has_cross": true,
              "hits": [
                {
                  "type": "away_attack",
                  "interval": "76–90",
                  "color": "#5BBF8A",
                  "title": "客队进攻有利窗口",
                  "text": "76–90 分：Morocco惯常进球高峰（22%）与Scotland惯常失球高峰（18%）重合——该时段客队破门相对更容易发生。"
                }
              ],
              "cross_intervals": [
                "76–90"
              ],
              "summary_cn": "客队进攻有利窗口 · 76–90 分"
            },
            "disclaimer_cn": "以上为两队近30场历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。"
          }
        },
        "public_summary_note": "【推演概要】Morocco · 低位反击 · 进球偏少。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法低于 xG 隐含约 0.5（模型微调：主胜 -1% · 平 -1% · 客 +2%）"
      },
      "coach_analysis": {
        "home": {
          "name": "Steve Clarke",
          "age": 62,
          "nation": "苏格兰",
          "tenure": "2019年—",
          "wc_exp": "2020 欧洲杯 · 2026 带队",
          "style_tags": [
            "4-2-3-1",
            "McTominay 核心",
            "Robertson 宽度",
            "定位球"
          ],
          "formation_pref": "4-2-3-1 · McGinn 插上",
          "style_summary": "首轮 1-0 海地 McGinn 制胜，C 组领跑 3 分。Gilmour 整届报销后 McTominay 独撑创造力；对摩洛哥均分乱局需再抢 3 分。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "McGinn 打满概率高",
            "avg_first_sub": "67'",
            "note": "大赛三分比场面重要"
          },
          "when_leading": {
            "label": "4-5-1 收缩",
            "detail": "1 球领先：Robertson 宽度+McTominay 屏障。"
          },
          "when_trailing": {
            "label": "堆中场",
            "detail": "先丢球：60' 换进攻手加码。"
          },
          "vs_strong": {
            "label": "对强队：稳守反击",
            "detail": "对巴西会低位；对摩洛哥相对开放。"
          },
          "vs_weak": {
            "label": "对弱队：压制",
            "detail": "对海地 xG 1.05 险胜已验证。"
          },
          "tournament": "大赛士气为近年最高之一；Patterson 队检仍待官方。",
          "traits": [
            "McTominay 依赖",
            "Robertson 宽度",
            "出线主动",
            "Gilmour 缺阵"
          ],
          "match_note": "C 组均分乱局——McTominay/McGinn vs Hakimi；Gilmour 报销后中场创造力是隐患。"
        },
        "away": {
          "name": "Walid Regragui",
          "age": 49,
          "nation": "摩洛哥",
          "tenure": "2022年—",
          "wc_exp": "2022 四强 · 2026 带队",
          "style_tags": [
            "4-3-3",
            "Hakimi 宽度",
            "Saibari 偷袭",
            "转换"
          ],
          "formation_pref": "4-3-3 · Hakimi 爆点",
          "style_summary": "首轮 1-1 逼平巴西，Saibari 冷射+Vinícius 扳平。Aguerd/Abde 报销后 Diop+Riad 中卫链经检验；对苏格兰客场抢 3 分改变 C 组格局。",
          "subs": {
            "timing": "首换 58–65 分钟",
            "pattern": "Hakimi 打满",
            "avg_first_sub": "61'",
            "note": "2022 四强信心"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "1 球领先：Hakimi 宽度+转换。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：Saibari/Ounahi 肋部加码。"
          },
          "vs_strong": {
            "label": "对强队：稳守+反击",
            "detail": "对巴西 1-1 已验证。"
          },
          "vs_weak": {
            "label": "对弱队：压上",
            "detail": "对苏格兰预计相对开放。"
          },
          "tournament": "2022 四强 DNA；Regragui 称「可与任何人抗衡」。",
          "traits": [
            "Hakimi 爆点",
            "Saibari 冷射",
            "转换",
            "防空隐患"
          ],
          "match_note": "2022 四强信心+Saibari 偷袭；客场波士顿抢 3 分改变格局，Robertson-Hakimi 对位关键。"
        }
      },
      "upset_alert": {
        "favorite": "Morocco",
        "underdog": "Scotland",
        "favorite_iso": "MAR",
        "index": 38,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 32,
        "verdict": "C 组均分乱局——摩洛哥 1-1 巴西后盘口略被看好，但 McGinn/McTominay 主场气势使苏格兰冷平空间约 30%。",
        "tactical": "Clarke 4-2-3-1 Robertson 宽度 vs Regragui 4-3-3 Hakimi 爆点；Gilmour 缺阵是苏格兰中场变量。",
        "psychology": "苏格兰 C 组领跑 3 分士气高；摩洛哥 2022 四强信心延续。",
        "historical": "摩洛哥近年 H2H 更强；苏格兰首轮 xG 1.05 险胜海地。",
        "factors": [
          {
            "tag": "均势",
            "impact": "强",
            "detail": "xG 1.35–1.28 接近均势"
          },
          {
            "tag": "停赛/伤病",
            "impact": "中",
            "detail": "Gilmour 报销；Aguerd/Abde 报销"
          },
          {
            "tag": "Hakimi",
            "impact": "强",
            "detail": "边路对 Robertson 是关键对位"
          }
        ]
      }
    },
    {
      "id": "m29",
      "group": "C",
      "matchday": 2,
      "date": "2026-06-19",
      "time": "21:00",
      "time_local": "21:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "09:00",
      "date_beijing": "6月20日",
      "time_beijing_full": "北京时间 6月20日 09:00",
      "venue": "Lincoln Financial Field",
      "city": "Philadelphia, USA",
      "note": "C组第2轮 · 巴西 vs 海地 · 费城",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-4-2",
          "home": "Alisson; Danilo, Marquinhos, Militão; Wendell, Casemiro; Vinícius, Paquetá, Rodrygo; Richarlison, Raphinha",
          "away": "Duverger; Jean, Surpris, Gérard; Pierre, Dumond; Jean-Baptiste, Nazon, Duverger; Arcus, Moreira",
          "source": "Globo / ESPN 预测 · 非官方",
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
          "D",
          "W",
          "W",
          "W",
          "D"
        ],
        "coach": "Carlo Ancelotti",
        "stars": [
          {
            "name": "Vinícius Jr",
            "pos": "LW",
            "club": "Real Madrid",
            "desc": "首轮平摩洛哥",
            "rating": 9
          }
        ],
        "star": {
          "name": "Vinícius Jr",
          "pos": "LW",
          "club": "Real Madrid",
          "desc": "首轮平摩洛哥",
          "rating": 9
        },
        "injuries": [
          {
            "player": "Neymar",
            "status": "DOUBT",
            "note": "小腿伤缺席揭幕战；6/18 合练片段流出，对海地能否复出仍待 Ancelotti 赛前决定",
            "confirmed": false
          },
          {
            "player": "Wesley",
            "status": "OUT",
            "note": "整届报销，右路 Danilo/替补轮换",
            "confirmed": true
          },
          {
            "player": "Vinícius Jr.",
            "status": "FIT",
            "note": "32' 扳平摩洛哥，左路核心；The Standard 几乎锁定首发",
            "confirmed": true
          },
          {
            "player": "Lucas Paquetá",
            "status": "FIT",
            "note": "首战实际 4-4-2 中场核心，组织压力因 Neymar 缺阵上升",
            "confirmed": true
          },
          {
            "player": "Gabriel Magalhães",
            "status": "FIT",
            "note": "与 Marquinhos 中卫搭档经巴西战检验",
            "confirmed": true
          }
        ],
        "rumors": [
          "Ancelotti（SI）：「1-1 摩洛哥令人失望，对海地必须取胜；Neymar 情况每日观察」",
          "首战实际变阵 4-4-2（非赛前 4-2-3-1），Igor Thiago 先发、62' Luiz Henrique 换入",
          "1-1 后巴西 C 组仅 1 分，东道主+五冠压力陡增；媒体称「最不容再失分的一场」",
          "Vinícius+Paquetá 破局能力是关键，海地预计 5 后卫深度低位",
          "FotMob：Alisson 一门稳定，Ancelotti 半场变阵（Danilo/Fabinho）成首战标志"
        ]
      },
      "away": {
        "name": "Haiti",
        "iso": "ht",
        "flag": "",
        "fifa_rank": 87,
        "rating": 62,
        "form": [
          "L",
          "D",
          "L",
          "W",
          "L"
        ],
        "coach": "Sébastien Migné",
        "stars": [
          {
            "name": "Duckens Nazon",
            "pos": "ST",
            "club": "Pau",
            "desc": "锋线支点",
            "rating": 7
          }
        ],
        "star": {
          "name": "Duckens Nazon",
          "pos": "ST",
          "club": "Pau",
          "desc": "锋线支点",
          "rating": 7
        },
        "injuries": [
          {
            "player": "全队（26人）",
            "status": "FIT",
            "note": "Sports Mole 6/13：Migné 全员健康，对苏格兰亦无新增伤停",
            "confirmed": true
          },
          {
            "player": "Duckens Nazon",
            "status": "FIT",
            "note": "队史射手王，首轮替补；对巴西或升首发",
            "confirmed": true
          },
          {
            "player": "Johny Placide",
            "status": "FIT",
            "note": "38 岁队长门将，首轮稳定",
            "confirmed": true
          }
        ],
        "rumors": [
          "Migné（赛后）：「0-1 苏格兰可以接受防守表现，对巴西仍是学习机会」",
          "首轮 15 射 2 正未能转化，Pierrot+Isidor 双前锋试验效果一般",
          "对巴西预计 5-4-1/5-5 深度低位，Bellegarde 中场枢纽 + Nazon 反击支点",
          "首次世界杯正赛，海地无历史包袱；湿热费城夜场或进一步拖慢节奏",
          "Camp：Migné 强调定位球与纪律，「不要给 Vinícius 身后空间」"
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
        "bias_note": "FIFA Match 29 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 58,
        "draw": 23,
        "away_win": 19,
        "score": "1-0",
        "confidence": 78,
        "xg_home": 1.85,
        "xg_away": 0.75,
        "key_factor": "巴西首轮平摩洛哥需取胜：Vinícius+Paquetá vs 海地低位；泊松最可能 2-0/3-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 13.7
          },
          {
            "score": "2-0",
            "prob": 12.7
          },
          {
            "score": "1-1",
            "prob": 10.3
          },
          {
            "score": "2-1",
            "prob": 9.5
          },
          {
            "score": "3-0",
            "prob": 7.8
          },
          {
            "score": "0-0",
            "prob": 7.4
          },
          {
            "score": "3-1",
            "prob": 5.9
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Brazil 暂列 C 组第 3（1 分 · 已赛 1 场） vs Haiti 第 4（0 分 · 已赛 1 场）；巴西仅积 1 分须先抢分；C↔F 绑定：头名 32强避 F 组头名（荷兰若领跑 F 组）、次席 32强或直碰荷兰，16 强半区相反"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "费城夏夜闷热，体感约 30°C · 27°C · 湿度 68% · 降雨概率 30% · 西南风 2级 · 湿热；湿热中等——领先方后段守势体能是隐性变量，利好早段破局的一方（27°C · 21:00 ET 开球 · 湿度 68%）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "巴西首轮平摩洛哥需取胜：Vinícius+Paquetá vs 海地低位；泊松最可能 2-0/3-0"
          }
        ],
        "base_home_win": 63,
        "base_draw": 22,
        "base_away_win": 15,
        "depth_calibrated": true
      },
      "weather": {
        "city": "费城",
        "country": "美国",
        "venue": "Lincoln Financial Field",
        "temp": 27,
        "humidity": 68,
        "altitude_m": 12,
        "rain_chance": 30,
        "wind": "西南风 2级 · 湿热",
        "condition_cn": "费城夏夜闷热，体感约 30°C",
        "impact_level": "MEDIUM",
        "impact": "Lincoln Financial 27°C+68% 湿度，巴西需早段破局避免后段体能下滑；海地低位消耗大",
        "impact_summary": "湿热中等——领先方后段守势体能是隐性变量，利好早段破局的一方",
        "home_adapt": 86,
        "away_adapt": 74,
        "home_note": "巴西南美球员适应湿热，Vinícius 边路爆发需在前 60 分钟兑现",
        "away_note": "海地五后卫低位在湿热下后段专注度易降；Nazon 反击窗口多在 60' 前",
        "prediction_note": "模型因湿热略抬早段 xG 权重；若巴西 2-0 领先，下半场总球面可能回落",
        "weather_factors": [
          {
            "label": "27°C · 21:00 ET 开球",
            "impact": "体感偏高",
            "detail": "北京时间 6月20日 09:00；夏夜仍有余热"
          },
          {
            "label": "湿度 68%",
            "impact": "中",
            "detail": "湿热叠加，替补深度与换人节奏关键"
          },
          {
            "label": "降雨概率 30%",
            "impact": "低-中",
            "detail": "对流雨可能，开放式球场无顶棚"
          }
        ],
        "historical_note": "Lincoln Financial Field · C组 · 巴西 vs 海地 · 预报更新 2026-06-19 22:00 本地",
        "forecast_updated": "2026-06-19 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "month": "甲午月",
          "month_element": "金+火",
          "day": "己丑日",
          "day_element": "土",
          "day_dominant": "土",
          "day_summary": "己丑日——己土坐丑，土气厚重。《道德经》曰：「知常曰明。」丑土当令，宜循序渐进、忌半场冒进；非力之大小，乃气之顺逆。",
          "hour_home": "巳时（09:00-11:00）",
          "hour_home_element": "火"
        },
        "wuxing": {
          "home": {
            "team": "Brazil",
            "colors": "黄+绿+蓝",
            "elements": "土、木、水",
            "wuxing_short": "土木水杂",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 68,
            "reason": "黄属土、绿属木、蓝属水。巳时火气当令，木生火、火生土——如「火在天上」。《道德经》「以其不自生」，巴西火土旺盛顺天时。",
            "advantage": "巳火助木火，热门宜早段破局"
          },
          "away": {
            "team": "Haiti",
            "colors": "蓝+红",
            "elements": "水、火",
            "wuxing_short": "水火既济而未济",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "compat": 38,
            "reason": "蓝属水、红属火。巳时火旺克水——如「火在水上」，宜低位守中、忌与火争锋。",
            "disadvantage": "水火相激而火占上风，气运偏逆"
          },
          "summary": "五行裁定：巳火当令大利火土之巴西；海地水火相杂——气运偏逆，宜守不宜攻"
        },
        "hexagram": {
          "name": "火天大有",
          "symbol": "☲☰",
          "number": 14,
          "upper": "离火",
          "lower": "乾天",
          "quote": "《周易·大有卦》：「自天佑之，吉无不利。」",
          "general": "大有卦——火在天上，顺天者昌；热门宜早段破局，忌骄泰失势。",
          "advantage_team": "Brazil",
          "disadvantage_team": "Haiti",
          "hexagram_analysis": "大有「柔得位乎外而上应乎五」：巳火当令，上下气运各有一段——前半程火盛破局，后段乾天再动。",
          "match_nature": "自天佑之 · 热门顺时",
          "yellow_card_risk": "低",
          "yellow_card_reason": "大有主通泰非粗野；海地低位消耗大，预计 2-3 张黄牌。",
          "scenarios": [
            {
              "icon": "☯",
              "label": "气运性质",
              "text": "巳火当令，火在天上——顺时者「吉无不利」"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 28-44 分钟（大有「火在天上」）及第 70-85 分钟（乾天再动、后段气泄）"
            },
            {
              "icon": "🟨",
              "label": "纪律",
              "text": "压制局，黄牌来自低位阻截"
            }
          ],
          "early_goal": {
            "scenario": "若巴西先进球",
            "prediction": "大有全现——巳火助势，追加窗口在 32-48 分钟；忌「大有」极生骄泰。",
            "favors": "Brazil",
            "favors_prob": 68
          },
          "no_early_goal": {
            "scenario": "若前 25 分钟无进球",
            "prediction": "巳火主旺，0-0 仍可期；30-45 分钟为第一次破局窗口。",
            "favors": "Brazil",
            "favors_prob": 62
          },
          "away_goal": {
            "scenario": "若海地偷袭破门",
            "prediction": "大有逆象——水火偶可惊雷；巴西需火土旺盛耐心反扑，55' 后气运回。",
            "favors": "Brazil",
            "favors_prob": 58
          }
        },
        "goal_peak": {
          "scope": "both_halves",
          "title": "上下半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 28,
              "end_min": 44,
              "hex_reason": "大有「火在天上」，巳火初盛",
              "time_reason": "巳时火气当令，宜上半场破局"
            },
            {
              "label": "下半场",
              "half": "second",
              "start_min": 70,
              "end_min": 85,
              "hex_reason": "乾天再动，后段气泄再开",
              "time_reason": "领先方继续进攻，后段仍有空间"
            }
          ],
          "periods": "第 28-44 分钟 · 第 70-85 分钟",
          "rationale": "巳时火气当令，大有卦「自天佑之」明示上下两段气运——初段火盛破局，后段乾天再动。卦象双段清晰，故示双窗。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 78,
        "away_score": 28,
        "mystic_verdict": "巴西火土旺盛，海地水火偏弱——巳火当令，热门宜早段破局。",
        "model_bridge": "xG 1.85-0.75 深盘 -2.5，大胜需早段破门；海地低位或拖慢节奏。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "group_context": {
        "group": "C",
        "label": "C组 · 第1轮（4场已赛）",
        "matchday": 2,
        "standings": [
          {
            "team": "Scotland",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 1,
            "ga": 0
          },
          {
            "team": "Morocco",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Brazil",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Haiti",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 0,
            "ga": 1
          }
        ],
        "home": {
          "team": "Brazil",
          "rank": 3,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 F 组第 2倾向 Japan",
          "if_1st_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_1st_corridor": "法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区",
          "if_2nd": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 F 组第 1倾向 Sweden",
          "if_2nd_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_2nd_corridor": "墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 D/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Haiti",
          "rank": 4,
          "pts": 0,
          "played": 1,
          "if_1st": "32强 M76 · C 组第 1 vs F 组第 2 → 当前 F 组第 2倾向 Japan",
          "if_1st_r16": "16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者",
          "if_1st_corridor": "法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区",
          "if_2nd": "32强 M75 · F 组第 1 vs C 组第 2 → 当前 F 组第 1倾向 Sweden",
          "if_2nd_r16": "16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者",
          "if_2nd_corridor": "墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 D/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "F 组：头名 Sweden 3 分 · 次席 Japan 1 分（32强绑定组）",
          "E 组：头名 Germany 3 分 · 次席 Côte d'Ivoire 同分（32强绑定组）",
          "I 组：头名 Norway 3 分 · 次席 France 同分（32强绑定组）",
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "D 组 USA 3 分领跑"
        ],
        "path_tradeoff": "C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。",
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": "Brazil",
          "reason": "巴西仅积 1 分、暂列第 3，本轮对海地须全力抢 3 分，无控分空间。末轮才可能出现「C 组头名 vs 次席」路径博弈（32强避荷兰 vs 16强避法国/德国走廊）。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Brazil 若取胜：积分 4，C 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Haiti 若取胜：积分 3，客场抢分将改变 C 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 F 组：头名 Sweden 3 分 · 次席 Japan 1 分（32强绑定组） · E 组：头名 Germany 3 分 · 次席 Côte d'Ivoire 同分（32强绑定组） · I 组：头名 Norway 3 分 · 次席 France 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "巴西路径提示：C 组第 1 → 32强 M76 打 F 组第 2（荷兰若 F 组头名则 32 强避荷兰）→ 16强 M91 进 E/I 次席走廊；C 组第 2 → 32强 M75 极可能碰 F 组第 1（荷兰）→ 16强 M90 进 A/B 次席走廊。末轮才存在「选半区」博弈，本轮须先抢分。",
          "头名/次席博弈：C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。"
        ]
      },
      "depth_calibration": {
        "tier_home": 2.5,
        "tier_label": "Brazil 被看好 · 净胜约 2.5 球",
        "implied_tier": 0.75,
        "tier_gap": 1.75,
        "signal": "blocker_inflate",
        "signal_cn": "大众心理预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Brazil（约 72%）",
        "analysis": "魔方：巴西 -2.5 / 大小 3.5；深盘高于 xG 隐含，大胜需早段破门；海地低位或拖慢节奏。 赛前净胜参考高于 xG 隐含（+1.75），且净胜 1 球占 26.1%——热门净胜拉开偏难。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 13.9
            },
            {
              "score": "2-0",
              "prob": 12.9
            },
            {
              "score": "1-1",
              "prob": 10.4
            }
          ],
          "one_goal_win_pct": 26.1,
          "two_plus_win_pct": 37,
          "full_cover_pct": 17.1,
          "half_cover_pct": 19.9,
          "half_lose_pct": 26.1,
          "push_pct": null,
          "margin_full_label": "净胜≥3",
          "margin_half_label": "部分达标净胜=2",
          "fav_cover_ev": 0,
          "dog_cover_ev": 0,
          "rational_spread_cn": "两边净胜达标概率接近",
          "total_xg": 2.6,
          "fair_totals_line": 2,
          "over_2_5_pct": 47.5,
          "over_3_pct": 25.5,
          "totals_lean_cn": "2.5 球参考接近均衡；3 球参考偏少",
          "margin_risk_note": "净胜≥3 约 17.1%；部分达标净胜=2 约 19.9%；仅赢 1 球约 26.1%"
        },
        "spread_odds": {
          "fav": 0.85,
          "dog": 1,
          "note": "Brazil 0.85 · Haiti 1"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 3.5,
          "market_goals_int": 4,
          "line_label": "总进球约 3.5 个",
          "implied_xg_total": 2.6,
          "fair_line": 2,
          "line_gap": 1.5,
          "over_pct": 25.5,
          "under_pct": 74.5,
          "signal": "high_line",
          "signal_cn": "进球参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。",
          "public_over_pct": 58,
          "public_lean_cn": "舆论略看好多进球（约 58%）",
          "index_note": "多进球侧 0.8 / 少进球侧 1",
          "totals_odds": {
            "over": 0.8,
            "under": 1,
            "note": "多进球 0.8 · 少进球 1"
          },
          "rational_cn": "模型略倾向少进球（总进球约 3.5 个 约 74.5%）；进球参考偏高且舆论更看好多进球场面",
          "score_link_cn": "小比分（1-0/1-1）偏少进球 · 2-0/2-1 居中 · 3 球+ 偏多进球"
        },
        "totals_line": 3.5,
        "applied_delta": {
          "home_win": -5,
          "draw": 1,
          "away_win": 4
        },
        "adjustment_note": "模型微调：主胜 -5% · 平 +1% · 客 +4%",
        "adjusted_probs": {
          "home_win": 58,
          "draw": 23,
          "away_win": 19
        },
        "display_summary": {
          "fav_name": "Brazil",
          "expected_total_goals": 2.21,
          "poisson_fav_win_pct": 56.5,
          "small_lead_pct": 27,
          "small_example_score": "1-0",
          "small_example_pct": 16.4,
          "big_cover_pct": 29.5,
          "big_example_score": "2-0",
          "big_example_pct": 12.5,
          "win_shape": {
            "fav_name": "Brazil",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 33.2%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 16.4,
                "pct": 29.1
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.6,
                "pct": 18.8
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 18.8,
                "pct": 33.2
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 10.7,
                "pct": 18.9
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 47.9
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.2
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 18.9
              }
            ],
            "fav_win_pct": 58
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 40.4 分",
            "first_goal_wait": 40.4,
            "fast_pct": 52.4,
            "moderate_pct": 14.8,
            "slow_pct": 32.8,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 52.4
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 32.8
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Brazil：Wesley 缺阵；Neymar 存疑 · Haiti 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "控节奏 / 5-5 铁桶（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "湿热中等——领先方后段守势体能是隐性变量，利好早段破局的一方"
            }
          ],
          "xg_context": {
            "baseline_home": 1.85,
            "baseline_away": 0.75,
            "adjusted_home": 1.52,
            "adjusted_away": 0.71,
            "note": "基准 xG 1.85–0.75 → 调整后 1.52–0.71"
          },
          "calibration": {
            "signal_cn": "大众心理预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 1.75,
            "implied_tier_label": "Brazil 被看好 · 净胜约 0.5–1 球",
            "market_tier_label": "Brazil 被看好 · 净胜约 2.5 球",
            "summary_cn": "与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 1.75 · 模型认为仅小胜 1 球仍约 27% · 部分达标净胜=2 约 17.6% · 净胜≥3（全达标）约 11.9%"
          },
          "win_outlook": {
            "fav_name": "Brazil",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 47.9
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 33.2
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 18.9
              }
            ],
            "margin_line_cn": "Brazil · 赛前净胜参考 净胜≥3（全达标） · 部分达标净胜=2",
            "margin_meet_pct": 11.9,
            "margin_half_pct": 17.6,
            "margin_fail_pct": 27,
            "margin_full_label": "净胜≥3",
            "margin_half_label": "部分达标净胜=2",
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 3.5,
            "totals_line_cn": "总进球约 3.5 个",
            "fair_totals_line": 2.25,
            "model_total_xg": 2.23,
            "totals_line_gap": 1.25,
            "totals_high_pct": 18.3,
            "totals_low_pct": 81.7,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 28.9,
            "win_margin2_low_total_pct": 12.5,
            "win_margin2_high_total_pct": 10.7,
            "readout_cn": "取胜约 58%；若取胜，以「险胜收工」为主（47.9%）。 对着赛前净胜参考，净胜≥3（全达标）约 11.9%；部分达标净胜=2 约 17.6%；对着外界总进球参考 总进球约 3.5 个，模型终场多于该参考的概率约 18.3%。 注意 2-0 类：净胜扩大但总进球仍可能低于外界参考。"
          },
          "totals_line": 3.5,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 16.4
            },
            {
              "score": "2-0",
              "pct": 12.5
            },
            {
              "score": "1-1",
              "pct": 11.7
            }
          ],
          "totals_view": {
            "expected_total": 2.2,
            "fair_line": 2.25,
            "market_line": 3.5,
            "line_gap": 1.25,
            "over_pct": 18.3,
            "gap_warning": {
              "level": "high",
              "cn": "外界总进球参考 3.5，比模型公允线 2.25 高约 1.25 球——大众心理明显偏多进球；模型对总进球仍宜谨慎表态"
            },
            "totals_outlook": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 18,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照外界「全场至少 4 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
              "pill_cn": "倾向沉闷，精彩度可能一般。",
              "detail_cn": "模型明显偏沉闷——低比分拉锯概率较高，难撑起这一进球节奏（模型自身预期约 2.25 球）。 须警惕「外界预期很精彩、实际偏闷」的落差。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": true,
              "over_pct": 18.3,
              "line_gap": 1.25,
              "market_line": 3.5,
              "market_goals_int": 4,
              "market_goals_cn": "全场至少 4 球",
              "caution_public_high": true
            },
            "summary_cn": "模型 xG 合计约 2.2 球（公允参考约 2.25） · 外界总进球参考 3.5，高出模型约 1.25 球 · ⚠ 外界总进球参考比模型公允线高约 1.25 球，大众心理明显偏多进球 · 进球氛围：倾向沉闷"
          },
          "customer_reading": {
            "headline_cn": "Brazil · 净胜走向：达到预期难度偏大",
            "sub_cn": "达标概率约 11.9% · 达到预期难度偏大 进球氛围：倾向沉闷",
            "spread": {
              "level": "skeptical",
              "label_cn": "外界预期偏高",
              "color": "#D95F6A",
              "fav_name": "Brazil",
              "market_expect_cn": "净胜≥3",
              "meet_pct": 11.9,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "达到预期难度偏大",
              "headline_cn": "Brazil · 净胜走向：达到预期难度偏大",
              "pill_cn": "达标概率约 11.9% · 达到预期难度偏大",
              "detail_cn": "Brazil · 赛前外界预期 净胜≥3。模型推演达标概率约 11.9%；外界看法高于 xG 隐含约 1.75 球，达到预期难度偏大（部分达标净胜=2 约 17.6% · 仅胜 1 球约 27%）。",
              "extra_stats_cn": "部分达标净胜=2 约 17.6% · 仅胜 1 球约 27%",
              "full_cover_pct": 11.9,
              "half_cover_pct": 17.6,
              "lose1_pct": 27,
              "margin_full_label": "净胜≥3",
              "margin_half_label": "部分达标净胜=2",
              "tier_gap": 1.75,
              "show_cover": true
            },
            "totals": {
              "level": "clear_low",
              "label_cn": "倾向沉闷",
              "color": "#7BB8D4",
              "meter_label_cn": "倾向沉闷",
              "meter_pos": 18,
              "lean_side": "dull",
              "lean_strength": "clear",
              "section_intro_cn": "对照外界「全场至少 4 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
              "pill_cn": "倾向沉闷，精彩度可能一般。",
              "detail_cn": "模型明显偏沉闷——低比分拉锯概率较高，难撑起这一进球节奏（模型自身预期约 2.25 球）。 须警惕「外界预期很精彩、实际偏闷」的落差。",
              "headline_cn": "进球氛围：倾向沉闷",
              "show_lean": true,
              "over_pct": 18.3,
              "line_gap": 1.25,
              "market_line": 3.5,
              "market_goals_int": 4,
              "market_goals_cn": "全场至少 4 球",
              "caution_public_high": true
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
                  "fav_name": "Brazil",
                  "market_expect_cn": "净胜≥3",
                  "meet_pct": 11.9,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "达到预期难度偏大",
                  "headline_cn": "Brazil · 净胜走向：达到预期难度偏大",
                  "pill_cn": "达标概率约 11.9% · 达到预期难度偏大",
                  "detail_cn": "Brazil · 赛前外界预期 净胜≥3。模型推演达标概率约 11.9%；外界看法高于 xG 隐含约 1.75 球，达到预期难度偏大（部分达标净胜=2 约 17.6% · 仅胜 1 球约 27%）。",
                  "extra_stats_cn": "部分达标净胜=2 约 17.6% · 仅胜 1 球约 27%",
                  "full_cover_pct": 11.9,
                  "half_cover_pct": 17.6,
                  "lose1_pct": 27,
                  "margin_full_label": "净胜≥3",
                  "margin_half_label": "部分达标净胜=2",
                  "tier_gap": 1.75,
                  "show_cover": true
                },
                "text": "达标概率约 11.9% · 达到预期难度偏大",
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
                  "meter_pos": 18,
                  "lean_side": "dull",
                  "lean_strength": "clear",
                  "section_intro_cn": "对照外界「全场至少 4 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
                  "pill_cn": "倾向沉闷，精彩度可能一般。",
                  "detail_cn": "模型明显偏沉闷——低比分拉锯概率较高，难撑起这一进球节奏（模型自身预期约 2.25 球）。 须警惕「外界预期很精彩、实际偏闷」的落差。",
                  "headline_cn": "进球氛围：倾向沉闷",
                  "show_lean": true,
                  "over_pct": 18.3,
                  "line_gap": 1.25,
                  "market_line": 3.5,
                  "market_goals_int": 4,
                  "market_goals_cn": "全场至少 4 球",
                  "caution_public_high": true
                },
                "text": "倾向沉闷，精彩度可能一般。",
                "color": "#7BB8D4",
                "muted": false
              }
            ],
            "methodology_note": "读场优先级：净胜走向 ＞ 进球氛围（对照外界「至少 N 球」预期，中性档几乎五五开；强信号才标沉闷/精彩）。仅供娱乐推演，非投注建议。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Brazil",
              "first_goal_pct": 68.2,
              "start_score": "1-0",
              "fav_name": "Brazil",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 96.4,
              "small_lead_pct": 36.2,
              "big_lead_pct": 46.2,
              "fav_win_pct": 82.4,
              "fav_draw_pct": 14,
              "fav_lose_pct": 3.6,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Brazil 保持胜果（净胜≥1）",
                  "pct": 82.4
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 14
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 3.6
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
              "big_delta": 16.7,
              "small_delta": 9.2,
              "narrative": "Brazil 先破门（已 1-0） → 「控节奏」；Haiti 「维持低位」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "Brazil",
                "state_label": "Brazil 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 47.9
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 33.2
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 18.9
                  }
                ],
                "margin_line_cn": "Brazil · 赛前净胜参考 净胜≥3（全达标） · 部分达标净胜=2",
                "margin_meet_pct": 17.6,
                "margin_half_pct": 28.5,
                "margin_fail_pct": 36.2,
                "margin_full_label": "净胜≥3",
                "margin_half_label": "部分达标净胜=2",
                "final_2_0_pct": 23,
                "final_3_0_plus_pct": 15.4,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 3.5,
                "totals_line_cn": "总进球约 3.5 个",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.42,
                "totals_line_gap": 1.25,
                "totals_high_pct": 17.1,
                "totals_low_pct": 82.9,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 47.3,
                "win_margin2_low_total_pct": 23,
                "win_margin2_high_total_pct": 12.2,
                "readout_cn": "Brazil 已 1-0 领先：仍取胜约 82.4%。 对着外界总进球参考 总进球约 3.5 个，模型终场多于该参考的概率约 17.1%。 常见收尾：2-0 约 23%（部分达标，非全达标）； 3-0+ 约 15.4%（对着 净胜≥3 全达标）。"
              }
            },
            {
              "side": "away",
              "team": "Haiti",
              "first_goal_pct": 31.8,
              "start_score": "0-1",
              "fav_name": "Brazil",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 58.9,
              "small_lead_pct": 18.3,
              "big_lead_pct": 11.2,
              "fav_win_pct": 29.5,
              "fav_draw_pct": 29.4,
              "fav_lose_pct": 41.1,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Brazil 追平（平局）",
                  "pct": 29.4
                },
                {
                  "key": "win1",
                  "label": "Brazil 净胜1球翻盘（如 2-1）",
                  "pct": 18.3
                },
                {
                  "key": "win2",
                  "label": "Brazil 净胜≥2球翻盘（如 3-1）",
                  "pct": 11.2
                },
                {
                  "key": "upset_hold",
                  "label": "Haiti 保持胜果至终场",
                  "pct": 41.1
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
              "big_delta": -18.3,
              "small_delta": -8.7,
              "narrative": "Haiti 先破门（已 0-1） → 「5-5 铁桶」；Brazil 「堆前锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "模型 xG 合计约 2.2 球（公允参考约 2.25） · 外界总进球参考 3.5，高出模型约 1.25 球 · ⚠ 外界总进球参考比模型公允线高约 1.25 球，大众心理明显偏多进球 · 进球氛围：倾向沉闷",
              "totals_line_cn": "总进球约 3.5 个",
              "totals_high_pct": 18.3,
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
              "depth_label": "有一定轮换空间",
              "draw_trap_pct": 12,
              "readout_cn": "Brazil · 低位反击 · 进球偏少。进球氛围倾向沉闷（模型推演）；时间段分布见下方历史节奏参考。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 12% 冷门空间含平局）。",
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
              "depth_score": 1,
              "depth_label": "有一定轮换空间",
              "draw_trap_pct": 12,
              "fav_lead_style": "defensive"
            }
          },
          "goal_timing": {
            "sample_label": "近30场",
            "source_note": "user_screenshot_2026-06-20_bra_hai",
            "home_name": "Brazil",
            "away_name": "Haiti",
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
                "pct": 29
              },
              "home_conceded": {
                "interval": "31–45",
                "pct": 20
              },
              "away_scored": {
                "interval": "76–90",
                "pct": 23
              },
              "away_conceded": {
                "interval": "16–30",
                "pct": 23
              }
            },
            "cross_insight": {
              "has_cross": false,
              "hits": [],
              "cross_intervals": [],
              "summary_cn": "两队高峰时段错开，暂无强重合进攻窗口。"
            },
            "disclaimer_cn": "以上为两队近30场历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。"
          }
        },
        "public_summary_note": "【推演概要】Brazil · 低位反击 · 进球偏少。 · 与模型 xG 对照：大众心理预期偏高 · 赛前净胜看法高于 xG 隐含约 1.75 · 模型认为仅小胜 1 球仍约 27% · 部分达标净胜=2 约 17.6% · 净胜≥3（全达标）约 11.9%（模型微调：主胜 -5% · 平 +1% · 客 +4%）"
      },
      "coach_analysis": {
        "home": {
          "name": "Carlo Ancelotti",
          "age": 66,
          "nation": "意大利",
          "tenure": "2025年—",
          "wc_exp": "四届世界杯 · 皇马欧冠经验",
          "style_tags": [
            "4-4-2",
            "Vinícius 宽度",
            "Paquetá 组织",
            "变阵"
          ],
          "formation_pref": "4-4-2 / 4-2-3-1 · Vinícius 核心",
          "style_summary": "首轮 1-1 摩洛哥令人失望，实际变阵 4-4-2 非赛前预期。Neymar 每日观察；对海地必须取胜，预计早段破局+持续宽度。",
          "subs": {
            "timing": "首换 55–62 分钟",
            "pattern": "半场变阵传统",
            "avg_first_sub": "58'",
            "note": "Danilo/Fabinho 首战标志"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "2 球领先：轮换保护 Vinícius。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "先丢球：立即加码进攻宽度。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "对摩洛哥已验证。"
          },
          "vs_weak": {
            "label": "对弱队：不留余地",
            "detail": "对海地 xG 1.85 必须兑现。"
          },
          "tournament": "五冠压力+仅 1 分；媒体称「最不容再失分的一场」。",
          "traits": [
            "Vinícius 核心",
            "变阵",
            "Neymar 存疑",
            "必须抢分"
          ],
          "match_note": "仅 1 分不容再失——Vinícius+Paquetá 早段破局；Neymar 每日观察，4-4-2 变阵或延续。"
        },
        "away": {
          "name": "Sébastien Migné",
          "age": 51,
          "nation": "法国",
          "tenure": "2023年—",
          "wc_exp": "2026 带队 · 非洲杯经验",
          "style_tags": [
            "5-4-1",
            "深度低位",
            "Nazon 支点",
            "定位球"
          ],
          "formation_pref": "5-4-1 / 5-5 · Bellegarde 枢纽",
          "style_summary": "首轮 0-1 苏格兰可接受防守表现；对巴西预计 5 后卫深度低位。首次世界杯正赛无历史包袱，湿热费城或拖慢节奏。",
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
            "detail": "对巴西教科书深度低位。"
          },
          "vs_weak": {
            "label": "对弱队：反击",
            "detail": "对苏格兰已验证低位。"
          },
          "tournament": "Migné 强调定位球与纪律——「不要给 Vinícius 身后空间」。",
          "traits": [
            "5 后卫",
            "低位",
            "Nazon 支点",
            "首次正赛"
          ],
          "match_note": "5 后卫深度低位+Bellegarde 枢纽；费城湿热拖慢节奏，定位球是唯一偷分路径。"
        }
      },
      "upset_alert": {
        "favorite": "Brazil",
        "underdog": "Haiti",
        "favorite_iso": "BRA",
        "index": 18,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 12,
        "verdict": "巴西 xG 1.85 深盘但仅 1 分压力——海地 5 后卫低位或拖慢节奏，冷门空间约 12%（平局/0-0 偷分）。",
        "tactical": "Ancelotti 4-4-2 Vinícius 宽度 vs Migné 5-4-1 深度低位；费城湿热利好领先方后段守势。",
        "psychology": "巴西「最不容再失分」；海地首次正赛无包袱。",
        "historical": "无大赛交锋；海地对苏格兰 0-1 防守尚可。",
        "factors": [
          {
            "tag": "深盘",
            "impact": "中",
            "detail": "市场 -2.5 高于 xG 隐含"
          },
          {
            "tag": "低位",
            "impact": "强",
            "detail": "海地 5 后卫+定位球"
          },
          {
            "tag": "Neymar",
            "impact": "中",
            "detail": "复出与否影响破局效率"
          }
        ]
      }
    },
    {
      "id": "m31",
      "group": "D",
      "matchday": 2,
      "date": "2026-06-19",
      "time": "20:00",
      "time_local": "20:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "11:00",
      "date_beijing": "6月20日",
      "time_beijing_full": "北京时间 6月20日 11:00",
      "venue": "Levi's Stadium",
      "city": "Santa Clara, USA",
      "note": "D组第2轮 · 土耳其 vs 巴拉圭 · 旧金山湾区",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-4-2",
          "home": "Günok; Çelik, Demiral, Bardakcı; Kökçü, Özcan; Yıldız, Güler, Aydın; Aktürkoğlu, Yılmaz",
          "away": "Martínez; Velázquez, Gómez, Alonso; Sanabria, Rojas; Romero, Sosa, Almirón; González, Sánchez",
          "source": "FotMob / ESPN 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Türkiye",
        "iso": "tr",
        "flag": "",
        "fifa_rank": 26,
        "rating": 76,
        "form": [
          "W",
          "D",
          "W",
          "L",
          "W"
        ],
        "coach": "Vincenzo Montella",
        "stars": [
          {
            "name": "Arda Güler",
            "pos": "CAM",
            "club": "Real Madrid",
            "desc": "组织核心",
            "rating": 8.2
          }
        ],
        "star": {
          "name": "Arda Güler",
          "pos": "CAM",
          "club": "Real Madrid",
          "desc": "组织核心",
          "rating": 8.2
        },
        "injuries": [
          {
            "player": "Arda Güler",
            "status": "FIT",
            "note": "FIFA 官方 XI 攻击中场 #8，对澳大利亚全场活跃但未能转化",
            "confirmed": true
          },
          {
            "player": "Hakan Çalhanoğlu",
            "status": "FIT",
            "note": "队长 #10，组织核心；0-2 后更衣室需其稳住军心",
            "confirmed": true
          },
          {
            "player": "Kenan Yildiz",
            "status": "FIT",
            "note": "首轮替补未进 XI；对巴拉圭媒体普遍预测回归首发",
            "confirmed": true
          },
          {
            "player": "Kerem Aktürkoglu",
            "status": "FIT",
            "note": "首轮意外出任中锋 #7，30 射 8 正 0 球——位置可能调整",
            "confirmed": true
          },
          {
            "player": "Merih Demiral",
            "status": "FIT",
            "note": "中卫主力，对澳大利亚防线未被击穿但前场效率成问题",
            "confirmed": true
          }
        ],
        "rumors": [
          "Montella（赛后）：「72% 控球却 0 球不可接受；对巴拉圭必须拿出不同态度」",
          "0-2 澳大利亚后土耳其 D 组形势严峻——美国、澳大利亚同积 3 分",
          "首轮 Yildiz 替补、Aktürkoglu 突任中锋的变阵遭质疑，次轮 Yildiz+Güler 双核呼声高",
          "Sports Mole 6/13 曾预测土耳其 2-0 胜澳——与实际反差成更衣室压力来源",
          "Montella 强调 Çalhanoğlu 肋部渗透，Yıldız/Güler 对 Paraguay 低位是破局关键"
        ]
      },
      "away": {
        "name": "Paraguay",
        "iso": "py",
        "flag": "",
        "fifa_rank": 52,
        "rating": 70,
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
            "club": "Atlanta United",
            "desc": "反击速度",
            "rating": 7.8
          }
        ],
        "star": {
          "name": "Miguel Almirón",
          "pos": "RW",
          "club": "Atlanta United",
          "desc": "反击速度",
          "rating": 7.8
        },
        "injuries": [
          {
            "player": "Julio Enciso",
            "status": "FIT",
            "note": "揭幕战替补 73' 登场送助攻（Mauricio 进球），肌肉伤后已恢复出场",
            "confirmed": true
          },
          {
            "player": "Miguel Almirón",
            "status": "FIT",
            "note": "进攻核心；0-4 美国仍是最威胁一点",
            "confirmed": true
          },
          {
            "player": "Gustavo Gómez",
            "status": "FIT",
            "note": "队长中卫，对 Balogun 双响防守失败但本人无伤病",
            "confirmed": true
          },
          {
            "player": "Antonio Sanabria",
            "status": "FIT",
            "note": "支点中锋，Enciso 复出后前场组合选择增多",
            "confirmed": true
          }
        ],
        "rumors": [
          "Alfaro（赛后）：「4-1 是痛苦一课，但对土耳其我们必须进攻——已无路可退」",
          "0-4 美国：Balogun 双响 + Bobadilla 乌龙，Enciso 替补助攻成少数亮点",
          "Enciso 复出缓解前腰创造力危机，Almirón+Enciso 组合或对阵土耳其",
          "Alfaro 传统低位+身体对抗，预选赛 12 场仅 1 负的防守体系仍在",
          "D 组若再负基本出局；Alfaro 称「防守是我们的语言，但本场需要进球」"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 0,
        "away_wins": 0,
        "recent": [],
        "note": "友谊赛土耳其占优"
      },
      "referee": {
        "confirmed": false,
        "pending": true,
        "name": "等待官方确认",
        "nation": "待公布",
        "iso": null,
        "bias_note": "FIFA Match 31 裁判名单赛前公布。",
        "tendencies": [
          "更新来源：FIFA 官方裁判名单 · 赛前新闻发布会"
        ]
      },
      "prediction": {
        "home_win": 47,
        "draw": 25,
        "away_win": 28,
        "score": "1-1",
        "confidence": 68,
        "xg_home": 1.48,
        "xg_away": 1.12,
        "key_factor": "Yıldız/Güler 肋部 vs 巴拉圭低位；美国同日早场取胜则 D 组形势更复杂",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.3
          },
          {
            "score": "1-0",
            "prob": 11
          },
          {
            "score": "2-1",
            "prob": 9.1
          },
          {
            "score": "0-1",
            "prob": 8.3
          },
          {
            "score": "2-0",
            "prob": 8.1
          },
          {
            "score": "0-0",
            "prob": 7.4
          },
          {
            "score": "1-2",
            "prob": 6.9
          }
        ],
        "insight_factors": [
          {
            "icon": "📊",
            "label": "小组积分",
            "text": "Türkiye 暂列 D 组第 3（0 分 · 已赛 1 场） vs Paraguay 第 4（0 分 · 已赛 1 场）；组内 USA 3分、Australia 3分 领先；直接对话权重极高"
          },
          {
            "icon": "🌤️",
            "label": "赛场气候",
            "text": "圣克拉拉晴朗干燥，封闭式 · 23°C · 湿度 48% · 降雨概率 8% · 湾区西风 2级；气候变量低——D 组生死战节奏由战术谨慎度决定，非天气（23°C · 20:00 PT 开球 · 干燥晴朗）"
          },
          {
            "icon": "⚽",
            "label": "战术与阵容",
            "text": "Yıldız/Güler 肋部 vs 巴拉圭低位；美国同日早场取胜则 D 组形势更复杂"
          }
        ],
        "base_home_win": 45,
        "base_draw": 26,
        "base_away_win": 29,
        "depth_calibrated": true
      },
      "weather": {
        "city": "旧金山湾区",
        "country": "美国",
        "venue": "Levi's Stadium",
        "temp": 23,
        "humidity": 48,
        "altitude_m": 15,
        "rain_chance": 8,
        "wind": "湾区西风 2级",
        "condition_cn": "圣克拉拉晴朗干燥，封闭式",
        "impact_level": "LOW",
        "impact": "Levi's Stadium 23°C 干燥晴朗，Yıldız/Güler 肋部渗透与巴拉圭低位均不受气候干扰",
        "impact_summary": "气候变量低——D 组生死战节奏由战术谨慎度决定，非天气",
        "home_adapt": 84,
        "away_adapt": 81,
        "home_note": "土耳其技术型球员在干燥场地触球更顺；Montella 肋部配合不受制约",
        "away_note": "巴拉圭 Alfaro 低位防守对气温不敏感；Almirón 反击速度是核心",
        "prediction_note": "气候对模型影响可忽略；封闭式球场无暴晒，夜场体感舒适",
        "weather_factors": [
          {
            "label": "23°C · 20:00 PT 开球",
            "impact": "低",
            "detail": "北京时间 6月20日 11:00；Santa Clara 夜场微凉"
          },
          {
            "label": "干燥晴朗",
            "impact": "中性",
            "detail": "传球精度与远射条件理想"
          },
          {
            "label": "封闭式球场",
            "impact": "低",
            "detail": "无风扰动，战术执行稳定"
          }
        ],
        "historical_note": "Levi's Stadium · D组第2轮 · 预报更新 2026-06-19 22:00 本地",
        "forecast_updated": "2026-06-19 22:00 本地"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "month": "甲午月",
          "month_element": "金+火",
          "day": "己丑日",
          "day_element": "土",
          "day_dominant": "土",
          "day_summary": "己丑日——己土坐丑，土气厚重。《道德经》曰：「知常曰明。」丑土当令，宜循序渐进、忌半场冒进；非力之大小，乃气之顺逆。",
          "hour_home": "午时（11:00-13:00）",
          "hour_home_element": "火"
        },
        "wuxing": {
          "home": {
            "team": "Türkiye",
            "colors": "红+白",
            "elements": "火、金",
            "wuxing_short": "火金相涵",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 54,
            "reason": "红属火、白属金。午时火气正旺，火炼金成器——如「水火既济」。《道德经》「知止不殆」，土耳其火金宜肋部渗透。",
            "advantage": "午火炼金，组织之气渐明"
          },
          "away": {
            "team": "Paraguay",
            "colors": "红+白+蓝",
            "elements": "火、金、水",
            "wuxing_short": "火金水杂",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 52,
            "reason": "红白金蓝相杂。午时火旺，金水相涵——如「火在水上」，宜低位守中、反击为暗流。",
            "advantage": "火金水杂，守势可延一时"
          },
          "summary": "五行裁定：午时火旺双方皆沾火气；土耳其火金相涵略占「既济」初吉，巴拉圭守中待变"
        },
        "hexagram": {
          "name": "水火既济",
          "symbol": "☵☲",
          "number": 63,
          "upper": "坎水",
          "lower": "离火",
          "quote": "《周易·既济卦》：「初吉，终乱。」",
          "general": "既济卦——水火相济，初吉终乱；生死战宜上半场破局，忌后段松懈。",
          "advantage_team": "Türkiye",
          "disadvantage_team": "Paraguay",
          "hexagram_analysis": "既济「小者亨也」：午时火旺，坎水在上——气运宜上半场相济破局一段，卦示「初吉」后需防「终乱」。",
          "match_nature": "初吉终乱 · 宜早破局",
          "yellow_card_risk": "中",
          "yellow_card_reason": "生死战谨慎开局，后段犯规升；预计 4-5 张黄牌。",
          "scenarios": [
            {
              "icon": "☯",
              "label": "气运性质",
              "text": "午时火旺，水火相济——初段破局者占「初吉」"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 38-52 分钟（既济「水火相济」、午时火盛——卦只示此一段）"
            },
            {
              "icon": "🟨",
              "label": "纪律",
              "text": "生死战，后段「终乱」致黄牌升"
            }
          ],
          "early_goal": {
            "scenario": "若土耳其先进球",
            "prediction": "既济初吉——午火炼金，追加窗口在 42-55 分钟；忌领先后「终乱」。",
            "favors": "Türkiye",
            "favors_prob": 56
          },
          "no_early_goal": {
            "scenario": "若前 40 分钟无进球",
            "prediction": "既济宜「水火相济」——0-0 符合谨慎局；45-60 分钟为破局段。",
            "favors": "Draw",
            "favors_prob": 50
          },
          "away_goal": {
            "scenario": "若巴拉圭偷袭破门",
            "prediction": "既济逆象——火金水杂守中；土耳其需火金相涵耐心，65' 后气运回。",
            "favors": "Türkiye",
            "favors_prob": 52
          }
        },
        "goal_peak": {
          "scope": "first_half",
          "title": "上半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 38,
              "end_min": 52,
              "hex_reason": "既济「水火相济」，午时火盛",
              "time_reason": "生死战宜上半场破局，防后段终乱"
            }
          ],
          "periods": "第 38-52 分钟",
          "rationale": "午时火气正旺，既济卦「初吉终乱」——气运集中于上半场相济一段，卦象未明示下半场第二高峰。宁缺毋滥，只示一窗。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 62,
        "away_score": 48,
        "mystic_verdict": "土耳其火金交争，巴拉圭火金守势——午时火旺，胜负取决于肋部渗透。",
        "model_bridge": "xG 1.48-1.12 略看好主队，大小 2.5 偏小，低比分权重上升。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "group_context": {
        "group": "D",
        "label": "D组 · 第1轮（2场已赛）",
        "matchday": 2,
        "standings": [
          {
            "team": "USA",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 4,
            "ga": 1
          },
          {
            "team": "Australia",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 2,
            "ga": 0
          },
          {
            "team": "Türkiye",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 0,
            "ga": 2
          },
          {
            "team": "Paraguay",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 4
          }
        ],
        "home": {
          "team": "Türkiye",
          "rank": 3,
          "pts": 0,
          "played": 1,
          "if_1st": "32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池） → 当前 G 组第 2倾向 New Zealand",
          "if_1st_r16": "16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者",
          "if_1st_corridor": "比利时/埃及 等 G 组头名走廊",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 G 组第 1倾向 Iran",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/西班牙 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "away": {
          "team": "Paraguay",
          "rank": 4,
          "pts": 0,
          "played": 1,
          "if_1st": "32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池） → 当前 G 组第 2倾向 New Zealand",
          "if_1st_r16": "16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者",
          "if_1st_corridor": "比利时/埃及 等 G 组头名走廊",
          "if_2nd": "32强 M88 · D 组第 2 vs G 组第 2 → 当前 G 组第 1倾向 Iran",
          "if_2nd_r16": "16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者",
          "if_2nd_corridor": "阿根廷/西班牙 半区",
          "if_3rd": "12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 C/E/F/G/H/I/J/K 等组第 3 横向比较",
          "if_3rd_r16": "32 强对手取决于 Annex C 第 3 名组合（495 种可能）"
        },
        "cross_group_notes": [
          "C 组：头名 Scotland 3 分 · 次席 Morocco 1 分（32强绑定组）",
          "G 组：头名 Iran 1 分 · 次席 New Zealand 同分（32强绑定组）",
          "H 组四队同积 1 分，形势极度开放",
          "E 组 Germany 3 分领跑",
          "F 组 Sweden 3 分领跑",
          "I 组 Norway 3 分领跑"
        ],
        "path_tradeoff": "D 组次席走 D2–G2 槽，与 C/F 头名次席路径不同；美国/土耳其若争头名需关注第 3 名落位。",
        "manipulation_risk": {
          "level": "MEDIUM",
          "level_cn": "中",
          "focus_team": null,
          "reason": "本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。",
          "optimal_summary": "策略最优解（推演）：本组及关联组积分纠缠，本场以抢 3 分（至少 1 分）为先；锻炼新兵与战术演练宜留到末轮、出线形势明朗后再考虑，届时非胜结果方有可接受空间。"
        },
        "knockout_note": "48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。",
        "scenarios": [
          "Türkiye 若取胜：积分 3，D 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。",
          "Paraguay 若取胜：积分 3，客场抢分将改变 D 组格局与淘汰赛半区。",
          "平局：双方各 +1 分；在 C 组：头名 Scotland 3 分 · 次席 Morocco 1 分（32强绑定组） · G 组：头名 Iran 1 分 · 次席 New Zealand 同分（32强绑定组） 背景下，名次差 1 位可能改变 32 强对手。",
          "头名/次席博弈：D 组次席走 D2–G2 槽，与 C/F 头名次席路径不同；美国/土耳其若争头名需关注第 3 名落位。"
        ]
      },
      "depth_calibration": {
        "tier_home": 0.5,
        "tier_label": "Türkiye 被看好 · 净胜约 0.5 球",
        "implied_tier": 0,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Türkiye（约 52%）",
        "analysis": "魔方：土耳其 -0.5 / 大小 2.5 偏小；生死战双方谨慎，模型略看好主队但低比分权重上升。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12.4
            },
            {
              "score": "1-0",
              "prob": 11.1
            },
            {
              "score": "2-1",
              "prob": 9.2
            }
          ],
          "one_goal_win_pct": 23.1,
          "two_plus_win_pct": 22.1,
          "full_cover_pct": 45.3,
          "half_cover_pct": 0,
          "half_lose_pct": 0,
          "push_pct": null,
          "margin_full_label": "净胜≥1",
          "margin_half_label": null,
          "fav_cover_ev": -0.094,
          "dog_cover_ev": 0.094,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.6,
          "fair_totals_line": 2,
          "over_2_5_pct": 47.9,
          "over_3_pct": 26,
          "totals_lean_cn": "2.5 球参考接近均衡；3 球参考偏少",
          "margin_risk_note": "净胜≥1 约 45.3%；仅赢 1 球约 0%"
        },
        "spread_odds": {
          "fav": 1,
          "dog": 0.85,
          "note": "Türkiye 1 · Paraguay 0.85"
        },
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "market_goals_int": 3,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.6,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 47.9,
          "under_pct": 52.1,
          "signal": "high_line",
          "signal_cn": "进球参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。",
          "public_over_pct": 38,
          "public_lean_cn": "舆论略看好少进球（约 62%）",
          "index_note": "多进球侧 1.1 / 少进球侧 0.73 · 少进球侧关注度更高",
          "totals_odds": {
            "over": 1.1,
            "under": 0.73,
            "note": "多进球 1.1 · 少进球 0.73"
          },
          "rational_cn": "模型在 总进球约 2.5 个 附近均衡；进球参考偏高但模型仍偏少进球",
          "score_link_cn": "小比分（1-0/1-1）偏少进球 · 2-0/2-1 居中 · 3 球+ 偏多进球"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": 2,
          "draw": -1,
          "away_win": -1
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 -1% · 客 -1%",
        "adjusted_probs": {
          "home_win": 47,
          "draw": 25,
          "away_win": 28
        },
        "display_summary": {
          "fav_name": "Türkiye",
          "expected_total_goals": 2.57,
          "poisson_fav_win_pct": 45.3,
          "small_lead_pct": 23.1,
          "small_example_score": "1-0",
          "small_example_pct": 11.1,
          "big_cover_pct": 22.1,
          "big_example_score": "2-0",
          "big_example_pct": 8.2,
          "win_shape": {
            "fav_name": "Türkiye",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 26.9%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 11.1,
                "pct": 24.4
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.1,
                "pct": 26.7
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 12.2,
                "pct": 26.9
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 9.9,
                "pct": 22
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 51.1
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 26.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 22
              }
            ],
            "fav_win_pct": 47
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 34.6 分",
            "first_goal_wait": 34.6,
            "fast_pct": 58,
            "moderate_pct": 14.8,
            "slow_pct": 27.3,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 58
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 27.3
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Türkiye 暂无重要伤停 · Paraguay 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "控节奏 / 4-5-1 收缩（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "气候变量低——D 组生死战节奏由战术谨慎度决定，非天气"
            }
          ],
          "xg_context": {
            "baseline_home": 1.48,
            "baseline_away": 1.12,
            "adjusted_home": 1.48,
            "adjusted_away": 1.12,
            "note": "基准 xG 1.48–1.12（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Türkiye 被看好 · 净胜约 0.5 球",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5"
          },
          "win_outlook": {
            "fav_name": "Türkiye",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 51.1
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 26.9
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 22
              }
            ],
            "margin_line_cn": "Türkiye · 赛前净胜参考 净胜≥1（全达标）",
            "margin_meet_pct": 45.3,
            "margin_half_pct": 0,
            "margin_fail_pct": 0,
            "margin_full_label": "净胜≥1",
            "margin_half_label": null,
            "final_2_0_pct": null,
            "final_3_0_plus_pct": null,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球约 2.5 个",
            "fair_totals_line": 2,
            "model_total_xg": 2.6,
            "totals_line_gap": 0.5,
            "totals_high_pct": 47.9,
            "totals_low_pct": 52.1,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 19.2,
            "win_margin2_low_total_pct": 8.2,
            "win_margin2_high_total_pct": 14,
            "readout_cn": "取胜约 47%；若取胜，以「险胜收工」为主（51.1%）。 对着赛前净胜参考，净胜≥1（全达标）约 45.3%；对着外界总进球参考 总进球约 2.5 个，模型终场多于该参考的概率约 47.9%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.4
            },
            {
              "score": "1-0",
              "pct": 11.1
            },
            {
              "score": "2-1",
              "pct": 9.2
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "market_line": 2.5,
            "line_gap": 0.5,
            "over_pct": 47.9,
            "gap_warning": null,
            "totals_outlook": {
              "level": "neutral",
              "label_cn": "暂无明显倾向",
              "color": "#8A96A8",
              "meter_label_cn": "几乎五五开",
              "meter_pos": 50,
              "lean_side": "neutral",
              "lean_strength": "none",
              "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
              "pill_cn": "沉闷与精彩几乎五五开，无明显倾向。",
              "detail_cn": "模型推演：达到这一进球节奏与达不到的机率几乎各半，暂无明确倾向；精彩程度仍看临场发挥。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 47.9,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "全场至少 3 球",
              "caution_public_high": false
            },
            "summary_cn": "模型 xG 合计约 2.6 球（公允参考约 2） · 外界总进球参考 2.5，高出模型约 0.5 球 · 外界参考略高于模型公允线（+0.5 球） · 模型在常见进球预期附近均衡，不作强倾向"
          },
          "customer_reading": {
            "headline_cn": "Türkiye · 净胜走向：有达标可能",
            "sub_cn": "达标概率约 45.3% · 有达标可能 进球氛围：几乎五五开",
            "spread": {
              "level": "possible",
              "label_cn": "有达标可能",
              "color": "#C8A96E",
              "fav_name": "Türkiye",
              "market_expect_cn": "净胜≥1",
              "meet_pct": 45.3,
              "meet_pct_label": "模型推演达标概率",
              "verdict_cn": "有达标可能",
              "headline_cn": "Türkiye · 净胜走向：有达标可能",
              "pill_cn": "达标概率约 45.3% · 有达标可能",
              "detail_cn": "Türkiye · 赛前外界预期 净胜≥1。模型推演达标概率约 45.3%；有一定达标空间，但非高把握。",
              "extra_stats_cn": "",
              "full_cover_pct": 45.3,
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
              "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
              "pill_cn": "沉闷与精彩几乎五五开，无明显倾向。",
              "detail_cn": "模型推演：达到这一进球节奏与达不到的机率几乎各半，暂无明确倾向；精彩程度仍看临场发挥。",
              "headline_cn": "进球氛围：几乎五五开",
              "show_lean": false,
              "over_pct": 47.9,
              "line_gap": 0.5,
              "market_line": 2.5,
              "market_goals_int": 3,
              "market_goals_cn": "全场至少 3 球",
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
                  "fav_name": "Türkiye",
                  "market_expect_cn": "净胜≥1",
                  "meet_pct": 45.3,
                  "meet_pct_label": "模型推演达标概率",
                  "verdict_cn": "有达标可能",
                  "headline_cn": "Türkiye · 净胜走向：有达标可能",
                  "pill_cn": "达标概率约 45.3% · 有达标可能",
                  "detail_cn": "Türkiye · 赛前外界预期 净胜≥1。模型推演达标概率约 45.3%；有一定达标空间，但非高把握。",
                  "extra_stats_cn": "",
                  "full_cover_pct": 45.3,
                  "half_cover_pct": 0,
                  "lose1_pct": 0,
                  "margin_full_label": "净胜≥1",
                  "margin_half_label": null,
                  "tier_gap": 0.5,
                  "show_cover": true
                },
                "text": "达标概率约 45.3% · 有达标可能",
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
                  "section_intro_cn": "对照外界「全场至少 3 球」的赛前进球节奏，看模型更偏沉闷还是精彩",
                  "pill_cn": "沉闷与精彩几乎五五开，无明显倾向。",
                  "detail_cn": "模型推演：达到这一进球节奏与达不到的机率几乎各半，暂无明确倾向；精彩程度仍看临场发挥。",
                  "headline_cn": "进球氛围：几乎五五开",
                  "show_lean": false,
                  "over_pct": 47.9,
                  "line_gap": 0.5,
                  "market_line": 2.5,
                  "market_goals_int": 3,
                  "market_goals_cn": "全场至少 3 球",
                  "caution_public_high": false
                },
                "text": "沉闷与精彩几乎五五开，无明显倾向。",
                "color": "#8A96A8",
                "muted": true
              }
            ],
            "methodology_note": "读场优先级：净胜走向 ＞ 进球氛围（对照外界「至少 N 球」预期，中性档几乎五五开；强信号才标沉闷/精彩）。仅供娱乐推演，非投注建议。"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Türkiye",
              "first_goal_pct": 56.9,
              "start_score": "1-0",
              "fav_name": "Türkiye",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 91.7,
              "small_lead_pct": 34.3,
              "big_lead_pct": 38.2,
              "fav_win_pct": 72.4,
              "fav_draw_pct": 19.3,
              "fav_lose_pct": 8.2,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Türkiye 保持胜果（净胜≥1）",
                  "pct": 72.4
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 19.3
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 8.2
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 44.3 分",
                "first_goal_wait": 44.3,
                "fast_pct": 42.6,
                "moderate_pct": 13.9,
                "slow_pct": 43.5,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 42.6
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.9
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 43.5
                  }
                ]
              },
              "big_delta": 16.1,
              "small_delta": 11.2,
              "narrative": "Türkiye 先破门（已 1-0） → 「控节奏」；Paraguay 「堆边锋」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "Türkiye",
                "state_label": "Türkiye 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 51.1
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 26.9
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 22
                  }
                ],
                "margin_line_cn": "Türkiye · 赛前净胜参考 净胜≥1（全达标）",
                "margin_meet_pct": 72.4,
                "margin_half_pct": 0,
                "margin_fail_pct": 34.3,
                "margin_full_label": "净胜≥1",
                "margin_half_label": null,
                "final_2_0_pct": null,
                "final_3_0_plus_pct": null,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球约 2.5 个",
                "fair_totals_line": 2.25,
                "model_total_xg": 1.66,
                "totals_line_gap": 0.25,
                "totals_high_pct": 49.5,
                "totals_low_pct": 50.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 36.5,
                "win_margin2_low_total_pct": 17.5,
                "win_margin2_high_total_pct": 20.6,
                "readout_cn": "Türkiye 已 1-0 领先：仍取胜约 72.4%。 对着外界总进球参考 总进球约 2.5 个，模型终场多于该参考的概率约 49.5%。 常见收尾如 2-0（部分扩大；相对外界总进球参考仍偏少）。"
              }
            },
            {
              "side": "away",
              "team": "Paraguay",
              "first_goal_pct": 43.1,
              "start_score": "0-1",
              "fav_name": "Türkiye",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 50.3,
              "small_lead_pct": 15.2,
              "big_lead_pct": 8.7,
              "fav_win_pct": 24,
              "fav_draw_pct": 26.3,
              "fav_lose_pct": 49.8,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Türkiye 追平（平局）",
                  "pct": 26.3
                },
                {
                  "key": "win1",
                  "label": "Türkiye 净胜1球翻盘（如 2-1）",
                  "pct": 15.2
                },
                {
                  "key": "win2",
                  "label": "Türkiye 净胜≥2球翻盘（如 3-1）",
                  "pct": 8.7
                },
                {
                  "key": "upset_hold",
                  "label": "Paraguay 保持胜果至终场",
                  "pct": 49.8
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.9 分",
                "first_goal_wait": 34.9,
                "fast_pct": 50.6,
                "moderate_pct": 14.7,
                "slow_pct": 34.7,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 50.6
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 34.7
                  }
                ]
              },
              "big_delta": -13.4,
              "small_delta": -7.9,
              "narrative": "Paraguay 先破门（已 0-1） → 「4-5-1 收缩」；Türkiye 「堆前锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "模型 xG 合计约 2.6 球（公允参考约 2） · 外界总进球参考 2.5，高出模型约 0.5 球 · 外界参考略高于模型公允线（+0.5 球） · 模型在常见进球预期附近均衡，不作强倾向",
              "totals_line_cn": "总进球约 2.5 个",
              "totals_high_pct": 47.9,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 28,
              "readout_cn": "Türkiye · 低位反击。总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 28% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_score": 0,
              "depth_label": "深度一般",
              "draw_trap_pct": 28,
              "fav_lead_style": "defensive"
            }
          },
          "goal_timing": {
            "sample_label": "近30场",
            "source_note": "user_screenshot_2026-06-20_tur_pry",
            "home_name": "Türkiye",
            "away_name": "Paraguay",
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
                "pct": 22
              },
              "home_conceded": {
                "interval": "1–15",
                "pct": 22
              },
              "away_scored": {
                "interval": "61–75",
                "pct": 28
              },
              "away_conceded": {
                "interval": "1–15",
                "pct": 27
              }
            },
            "cross_insight": {
              "has_cross": true,
              "hits": [
                {
                  "type": "both_leak",
                  "interval": "1–15",
                  "color": "#C8A96E",
                  "title": "双方易失球时段",
                  "text": "1–15 分：双方惯常失球高峰重合，该时段防守相对更松、总进球面可能抬升。"
                }
              ],
              "cross_intervals": [
                "1–15"
              ],
              "summary_cn": "双方易失球时段 · 1–15 分"
            },
            "disclaimer_cn": "以上为两队近30场历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。"
          }
        },
        "public_summary_note": "【推演概要】Türkiye · 低位反击。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5（模型微调：主胜 +2% · 平 -1% · 客 -1%）"
      },
      "coach_analysis": {
        "home": {
          "name": "Vincenzo Montella",
          "age": 50,
          "nation": "意大利",
          "tenure": "2023年—",
          "wc_exp": "2024 欧洲杯 · 2026 带队",
          "style_tags": [
            "4-2-3-1",
            "Güler 肋部",
            "Yıldız 爆点",
            "控球"
          ],
          "formation_pref": "4-2-3-1 · Çalhanoğlu 组织",
          "style_summary": "0-2 澳大利亚后 D 组形势严峻——72% 控球 0 球遭质疑。对巴拉圭生死战 Yildiz+Güler 双核呼声高，必须拿出不同态度。",
          "subs": {
            "timing": "首换 55–60 分钟",
            "pattern": "Yıldız 次轮回归首发",
            "avg_first_sub": "58'",
            "note": "更衣室压力极大"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "1 球领先：Çalhanoğlu 节拍器。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "先丢球：立即 Yıldız 加码。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "对澳大利亚已暴露效率问题。"
          },
          "vs_weak": {
            "label": "对弱队：压上",
            "detail": "对巴拉圭必须取胜。"
          },
          "tournament": "Montella 强调肋部渗透；Aktürkoglu 突任中锋遭质疑。",
          "traits": [
            "Güler 核心",
            "控球",
            "效率危机",
            "生死战"
          ],
          "match_note": "0-2 后生死战——Yıldız+Güler 肋部 vs 巴拉圭低位；72% 控球 0 球不可再犯。"
        },
        "away": {
          "name": "Gustavo Alfaro",
          "age": 62,
          "nation": "阿根廷",
          "tenure": "2023年—",
          "wc_exp": "2021 美洲杯季军（厄瓜多尔）· 2026 带队",
          "style_tags": [
            "4-4-2",
            "Almirón 速度",
            "低位",
            "身体对抗"
          ],
          "formation_pref": "4-4-2 · Enciso 前腰",
          "style_summary": "0-4 美国是痛苦一课，Enciso 复出缓解创造力危机。对土耳其已无路可退——Alfaro 称「防守是我们的语言，但本场需要进球」。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "Enciso+Almirón 组合",
            "avg_first_sub": "68'",
            "note": "弱队体能分配"
          },
          "when_leading": {
            "label": "4-5-1 收缩",
            "detail": "若意外领先：立即退守。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：Almirón 反击加码。"
          },
          "vs_strong": {
            "label": "对强队：低位+反击",
            "detail": "对美国已验证低位。"
          },
          "vs_weak": {
            "label": "对弱队：相对开放",
            "detail": "对土耳其必须进攻。"
          },
          "tournament": "预选赛 12 场仅 1 负的防守体系；Enciso 助攻成少数亮点。",
          "traits": [
            "Almirón 速度",
            "Enciso 复出",
            "低位",
            "已无路可退"
          ],
          "match_note": "Enciso+Almirón 反击组合；Alfaro 必须进球但传统低位+身体对抗仍是底色。"
        }
      },
      "upset_alert": {
        "favorite": "Türkiye",
        "underdog": "Paraguay",
        "favorite_iso": "TUR",
        "index": 34,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 28,
        "verdict": "D 组生死战——土耳其 0-2 后必须取胜但效率成疑；巴拉圭 Enciso+Almirón 反击使平局约 28%。",
        "tactical": "Montella 4-2-3-1 Yıldız/Güler 肋部 vs Alfaro 4-4-2 低位+Almirón 速度。",
        "psychology": "土耳其 72% 控球 0 球遭质疑；巴拉圭「已无路可退」。",
        "historical": "友谊赛土耳其占优；巴拉圭预选赛防守稳固。",
        "factors": [
          {
            "tag": "效率",
            "impact": "强",
            "detail": "土耳其首轮 30 射 8 正 0 球"
          },
          {
            "tag": "反击",
            "impact": "中",
            "detail": "Almirón+Enciso 组合"
          },
          {
            "tag": "低比分",
            "impact": "强",
            "detail": "大小 2.5 偏小，谨慎对攻"
          }
        ]
      }
    }
  ],
  "nextMatch": {
    "group": "D",
    "matchday": 2,
    "date": "2026-06-19",
    "time": "12:00",
    "time_local": "12:00 PT",
    "timezone": "PDT (UTC-7)",
    "time_beijing": "03:00",
    "date_beijing": "6月20日",
    "time_beijing_full": "北京时间 6月20日 03:00",
    "venue": "Lumen Field",
    "city": "Seattle, USA",
    "home": {
      "name": "USA",
      "iso": "us",
      "fifaRank": 11,
      "rating": 82
    },
    "away": {
      "name": "Australia",
      "iso": "au",
      "fifaRank": 24,
      "rating": 74
    },
    "teaser": "D组第2轮 · 美国 vs 澳大利亚",
    "home_win": 51,
    "draw": 25,
    "away_win": 24,
    "predicted_score": "1-0",
    "key_player_home": "Christian Pulisic",
    "key_player_away": "Mathew Ryan"
  },
  "upcomingMatches": [
    {
      "group": "C",
      "time_beijing_full": "北京时间 6月20日 06:00",
      "venue": "Gillette Stadium",
      "city": "Boston, USA",
      "home": {
        "name": "Scotland",
        "iso": "sc"
      },
      "away": {
        "name": "Morocco",
        "iso": "ma"
      },
      "teaser": "C组第2轮"
    },
    {
      "group": "C",
      "time_beijing_full": "北京时间 6月20日 09:00",
      "venue": "Lincoln Financial Field",
      "city": "Philadelphia, USA",
      "home": {
        "name": "Brazil",
        "iso": "br"
      },
      "away": {
        "name": "Haiti",
        "iso": "ht"
      },
      "teaser": "C组第2轮"
    },
    {
      "group": "D",
      "time_beijing_full": "北京时间 6月20日 11:00",
      "venue": "Levi's Stadium",
      "city": "Santa Clara, USA",
      "home": {
        "name": "Türkiye",
        "iso": "tr"
      },
      "away": {
        "name": "Paraguay",
        "iso": "py"
      },
      "teaser": "D组第2轮"
    }
  ]
};
