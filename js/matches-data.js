// 今日赛事 — Day 8 (signals enriched)
// Last updated: 2026-06-19T10:00:00+08:00
const MATCH_DATA = {
  "lastUpdated": "2026-06-19T10:00:00+08:00",
  "syncSource": "FIFA 赛程 · Day 8 完整推演 · coach/mystic/referee/weather · 推演概要+小组形势",
  "breakingNews": [
    {
      "tag": "UPDATE",
      "text": "📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事",
      "time": "模型"
    },
    {
      "tag": "PREVIEW",
      "text": "📅 今日4场 · 捷克-南非(00:00) · 瑞士-波黑(03:00) · 加拿大-卡塔尔(06:00) · 墨西哥-韩国(09:00)",
      "time": "6月19日"
    },
    {
      "tag": "PREVIEW",
      "text": "A/B组第2轮：Schick 抢分战 · 东道主温哥华 · 墨西哥 vs 孙兴慜 榜首对话",
      "time": "焦点"
    },
    {
      "tag": "LINEUP",
      "text": "📋 预测首发 · 捷 3-4-2-1 Schick 领衔 · 南非 Sithole/Zwane 停赛 Mbatha/Mofokeng 顶替",
      "time": "预测"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 昨日：葡1-1刚果(金) · 英4-2克 · 加纳1-0巴 · 乌1-3哥伦 · 详见「过往赛果」",
      "time": "赛果回顾"
    },
    {
      "tag": "INJURY",
      "text": "Jiménez/孙兴慜/Davies 均 FIT · Chávez 队检 · Džeko 打满",
      "time": "伤情"
    },
    {
      "tag": "REFEREE",
      "text": "✅ FIFA 确认：Penso(捷-南非) · Pinheiro(瑞-波) · Garay(加-卡) · Tejera(墨-韩)",
      "time": "裁判"
    },
    {
      "tag": "OFFICIAL",
      "text": "K/L组首轮完结 · 哥伦比亚&英格兰领跑 · 今日 A/B 组第2轮",
      "time": "积分榜"
    },
    {
      "tag": "UPDATE",
      "text": "灵力/五行/主教练/气候板块已更新至 Day 8 完整版",
      "time": "站点"
    }
  ],
  "todayMatches": [
    {
      "id": "m25",
      "group": "A",
      "matchday": 2,
      "date": "2026-06-18",
      "time": "12:00",
      "time_local": "12:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "00:00",
      "date_beijing": "6月19日",
      "time_beijing_full": "北京时间 6月19日 00:00",
      "venue": "Mercedes-Benz Stadium",
      "city": "Atlanta, USA",
      "note": "A组第2轮 · 捷克 vs 南非 · 亚特兰大",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测（已剔除 Sithole、Zwane 揭幕战红牌停赛）。不计入已确认推演权重。",
        "predicted": {
          "formation": "3-4-2-1 / 4-3-3",
          "home": "Kovář; Chaloupek, Hranáč, Krejčí; Coufal, Souček, Sojka, Zelený; Provod, Šulc; Schick",
          "away": "Williams; Mudau, Okon, Mbokazi, Modiba; Mokoena, Mbatha, Adams; Appollis, Foster, Mofokeng",
          "source": "SI / Al Jazeera / Opta 预测 · 非官方",
          "alt": {
            "formation": "3-4-2-1 / 5-3-2",
            "home": "Kovář; Chaloupek, Hranáč, Krejčí; Coufal, Souček, Sojka, Zelený; Provod, Hložek; Schick",
            "away": "Williams; Mudau, Okon, Mbokazi, Modiba, Sibisi; Mokoena, Mbatha, Adams; Moremi, Mofokeng, Appollis; Foster",
            "source": "beIN / Livescore 备选预测"
          }
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
          "W",
          "D",
          "W",
          "L"
        ],
        "coach": "Ivan Hašek",
        "stars": [
          {
            "name": "Patrik Schick",
            "pos": "ST",
            "club": "Bayer Leverkusen",
            "stats": "84' 挽回颜面",
            "rating": 8,
            "desc": "必须抢分之战核心"
          },
          {
            "name": "Tomáš Souček",
            "pos": "DM",
            "club": "West Ham",
            "stats": "屏障",
            "rating": 7.8,
            "desc": "三中卫前保护"
          },
          {
            "name": "Lukáš Provod",
            "pos": "CAM",
            "club": "Slavia",
            "stats": "10 号",
            "rating": 7.4,
            "desc": "肋部渗透"
          }
        ],
        "injuries": [
          {
            "player": "Patrik Schick",
            "status": "FIT",
            "note": "勒沃库森射手，必须抢分之战核心",
            "confirmed": true
          },
          {
            "player": "Tomáš Souček",
            "status": "FIT",
            "note": "西汉姆屏障，三中卫前保护",
            "confirmed": true
          }
        ],
        "rumors": [
          "首轮 1-2 韩国后 Hašek 强调「对南非不容再失分」",
          "Schick 84' 头球挽回颜面，次轮预计首发"
        ],
        "star": {
          "name": "Patrik Schick",
          "pos": "ST",
          "desc": "对南非不容再失分",
          "rating": 8
        }
      },
      "away": {
        "name": "South Africa",
        "iso": "za",
        "flag": "",
        "fifa_rank": 58,
        "rating": 65,
        "form": [
          "L",
          "W",
          "D",
          "L",
          "W"
        ],
        "coach": "Hugo Broos",
        "stars": [
          {
            "name": "Lyle Foster",
            "pos": "ST",
            "club": "Burnley",
            "stats": "锋线支点",
            "rating": 7.2,
            "desc": "次轮生死战预计首发"
          },
          {
            "name": "Teboho Mokoena",
            "pos": "DM",
            "club": "Mamelodi Sundowns",
            "stats": "屏障",
            "rating": 7,
            "desc": "中场绞杀"
          },
          {
            "name": "Relebohile Mofokeng",
            "pos": "RW",
            "club": "Orlando Pirates",
            "stats": "顶替 Zwane",
            "rating": 6.9,
            "desc": "边路速度"
          }
        ],
        "injuries": [
          {
            "player": "Sphephelo Sithole",
            "status": "OUT",
            "note": "揭幕战对墨西哥直红停赛，缺席对捷克",
            "confirmed": true
          },
          {
            "player": "Themba Zwane",
            "status": "OUT",
            "note": "揭幕战对墨西哥直红停赛，缺席对捷克",
            "confirmed": true
          },
          {
            "player": "Lyle Foster",
            "status": "FIT",
            "note": "锋线支点，次轮生死战预计首发",
            "confirmed": true
          }
        ],
        "rumors": [
          "首轮 0-2 墨西哥后 Broos 称「出线形势严峻」",
          "SI/Al Jazeera：Mbatha 顶 Sithole、Mofokeng 顶 Zwane，预计 4-3-3",
          "揭幕战 3 张红牌后中场创造力大减，Foster 成唯一稳定得分点"
        ],
        "star": {
          "name": "Lyle Foster",
          "pos": "ST",
          "desc": "Sithole/Zwane 停赛下锋线担当",
          "rating": 7.2
        }
      },
      "h2h": {
        "home_wins": 1,
        "draws": 1,
        "away_wins": 0,
        "recent": [],
        "note": "友谊赛交锋有限"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-18",
        "name": "Tori Penso",
        "nation": "United States",
        "iso": "us",
        "age": 39,
        "wc_experience": "2023 女足世界杯决赛主裁 · 2026 史上首位执法男足世界杯的美国女裁判",
        "avg_yellow": 3.8,
        "avg_red": 0.08,
        "avg_penalty": 0.22,
        "home_win_rate": 49,
        "bias_index": 49,
        "bias_note": "CONCACAF 顶尖女裁判执法 A 组次轮。Schick/Tau 身体对抗与定位球犯规尺度是焦点；与 Mayo/Nesbitt 全美执法组默契度高。",
        "tendencies": [
          "美国助理裁判组：Brooke Mayo、Kathryn Nesbitt",
          "第四官员 Campbell-Kirk Kawana-Waugh（新西兰）· 候补边裁 Isaac Trevis",
          "VAR Tatiana Guzmán（尼加拉瓜）· AVAR Joe Dickerson · SVAR Mohammed Obaid Khadim",
          "亚特兰大次轮抢分战预计 4–5 张黄牌，点球尺度相对明确"
        ],
        "officials": {
          "ar1": "Brooke Mayo (USA)",
          "ar2": "Kathryn Nesbitt (USA)",
          "fourth": "Campbell-Kirk Kawana-Waugh (NZL)",
          "var": "Tatiana Guzmán (NCA)",
          "avar": "Joe Dickerson (USA)",
          "svar": "Mohammed Obaid Khadim (UAE)"
        }
      },
      "prediction": {
        "home_win": 54,
        "draw": 25,
        "away_win": 21,
        "score": "1-0",
        "confidence": 72,
        "xg_home": 1.52,
        "xg_away": 0.88,
        "key_factor": "捷克 3-4-2-1 抢分：Schick+Provod/Šulc 双前腰；南非 Sithole/Zwane 红牌停赛，Mbatha/Mofokeng 顶替；泊松最可能 1-0/2-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 13.8
          },
          {
            "score": "1-1",
            "prob": 12.1
          },
          {
            "score": "2-0",
            "prob": 10.5
          },
          {
            "score": "2-1",
            "prob": 9.2
          },
          {
            "score": "0-0",
            "prob": 9.1
          },
          {
            "score": "0-1",
            "prob": 8
          },
          {
            "score": "1-2",
            "prob": 5.3
          }
        ],
        "base_home_win": 52,
        "base_draw": 26,
        "base_away_win": 22,
        "depth_calibrated": true
      },
      "upset_alert": {
        "favorite": "Czechia",
        "underdog": "South Africa",
        "favorite_iso": "CZE",
        "index": 28,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 24,
        "verdict": "捷克纸面占优且南非中场双核停赛——Foster/Mofokeng 难完全替代 Zwane 创造力，平局空间收窄至约 26%。",
        "tactical": "Hašek 3-4-2-1 压上 vs Broos 4-3-3 转换；Schick 对位南非中卫，Mbatha 顶 Sithole 屏障位是关键。",
        "psychology": "南非再负基本出局但缺两名揭幕战主力；捷克必须抢分。",
        "historical": "无大赛交锋；揭幕战 3 红后 Broos 变阵压力极大。",
        "factors": [
          {
            "tag": "停赛",
            "impact": "强",
            "detail": "Sithole、Zwane 红牌缺席，南非中场创造力下滑"
          },
          {
            "tag": "出线压力",
            "impact": "强",
            "detail": "双方均需 3 分"
          },
          {
            "tag": "实力差",
            "impact": "中",
            "detail": "xG 差约 0.6，Schick 决定上限"
          }
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Ivan Hašek",
          "age": 60,
          "nation": "捷克",
          "tenure": "2023年—",
          "wc_exp": "2026 带队",
          "style_tags": [
            "3-4-3",
            "Schick 核心",
            "低位",
            "定位球"
          ],
          "formation_pref": "3-4-3 · Schick 单锋",
          "style_summary": "首轮 1-2 惜败韩国，Schick 84' 挽回颜面。对南非必须抢 3 分，预计压上但防线仍留三中卫。",
          "subs": {
            "timing": "首换 60–65 分钟",
            "pattern": "Souček 屏障+边翼卫插上",
            "avg_first_sub": "62'",
            "note": "必须取胜心态"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "1 球领先：维持宽度，不早退。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "先丢球：55' 换进攻手加码。"
          },
          "vs_strong": {
            "label": "对强队：低位+反击",
            "detail": "对韩国已验证低位。"
          },
          "vs_weak": {
            "label": "对弱队：压制",
            "detail": "对南非预计控球占优。"
          },
          "tournament": "大赛经验有限，Schick 状态决定上限。",
          "traits": [
            "Schick 依赖",
            "三中卫",
            "定位球",
            "必须抢分"
          ],
          "match_note": "必须抢 3 分——Schick 支点+边翼卫插上；南非体能是后段机会。"
        },
        "away": {
          "name": "Hugo Broos",
          "age": 72,
          "nation": "比利时/南非",
          "tenure": "2021年—",
          "wc_exp": "2016 非洲杯冠军（喀麦隆）",
          "style_tags": [
            "4-2-3-1",
            "Tau 核心",
            "转换",
            "体能"
          ],
          "formation_pref": "4-2-3-1 · Tau 左翼",
          "style_summary": "首轮 0-2 墨西哥，60' 后体能崩盘。对捷克若再负基本出局，预计相对开放对攻。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "Tau 打满概率高",
            "avg_first_sub": "68'",
            "note": "弱队换人偏晚"
          },
          "when_leading": {
            "label": "5-4-1 收缩",
            "detail": "若意外领先：立即退守。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：60' 加码冲击。"
          },
          "vs_strong": {
            "label": "对强队：转换",
            "detail": "对墨西哥已暴露体能问题。"
          },
          "vs_weak": {
            "label": "对弱队：压上",
            "detail": "对捷克会求 3 分。"
          },
          "tournament": "非洲杯冠军经验，但世界杯舞台经验有限。",
          "traits": [
            "Tau 速度",
            "体能隐患",
            "转换",
            "出线压力"
          ],
          "match_note": "出线压力大——Tau 速度+转换；若先丢球 60' 后体能堪忧。"
        }
      },
      "weather": {
        "temp": 30,
        "humidity": 62,
        "rain_chance": 35,
        "condition_cn": "亚特兰大闷热，封闭式",
        "impact_level": "MEDIUM",
        "impact_summary": "闷热变量中等——双方后段体能是隐性变量",
        "home_adapt": 80,
        "away_adapt": 78,
        "weather_factors": [
          {
            "label": "30°C · 12:00 ET 开球",
            "impact": "中性",
            "detail": "北京时间 6月19日 00:00；午后前段气温尚可"
          },
          {
            "label": "封闭式球场",
            "impact": "略降直射",
            "detail": "无屋顶暴晒但湿度仍高"
          }
        ],
        "historical_note": "Mercedes-Benz Stadium · A组第2轮"
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
          "day_summary": "己丑日——己土坐丑，土气厚重。《道德经》曰：「上善若水。」丑土当令，宜守中蓄势、厚积薄发；忌土性固执、躁进冒失。非力之大小，乃气之顺逆。",
          "hour_home": "子时（00:00-02:00）",
          "hour_home_element": "水"
        },
        "wuxing": {
          "home": {
            "team": "Czechia",
            "colors": "红+白",
            "elements": "火、金",
            "wuxing_short": "金火相涵",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 56,
            "reason": "红属火、白属金。己丑土日厚重，子时水旺——金生水、水泄金，如「云上于天」有待而发。火金相涵宜守中破局，非关纸面强弱，乃气运蓄势。",
            "advantage": "子时水气泄金生火，稳后渐明"
          },
          "away": {
            "team": "South Africa",
            "colors": "绿+黄",
            "elements": "木、土",
            "wuxing_short": "木土相杂",
            "verdict": "中性偏逆",
            "verdict_color": "#C8A96E",
            "compat": 44,
            "reason": "绿属木、黄属土。丑土当令下木气受制——如「木入土中」，宜守不宜攻；子时水气虽旺，木土未齐。",
            "disadvantage": "气运未齐，转换需待丑土后段"
          },
          "summary": "五行裁定：子时水旺利金火蓄势之队；南非木土相杂——气运偏守，先破局者占先机"
        },
        "hexagram": {
          "name": "水天需",
          "symbol": "☵☰",
          "number": 5,
          "upper": "坎水",
          "lower": "乾天",
          "quote": "《周易·需卦》：「有孚，光亨，贞吉。」",
          "general": "需卦——云上于天，有险在前宜待时而动；先顺天时破局者得利，忌躁进。",
          "advantage_team": "Czechia",
          "disadvantage_team": "South Africa",
          "hexagram_analysis": "需卦「利涉大川」：坎水在上，乾天在下，气运宜「待」后而动。子时水旺，卦未明示下半场第二高峰。",
          "match_nature": "有险在前 · 宜慎行",
          "yellow_card_risk": "中",
          "yellow_card_reason": "需卦主等待非缠斗；坎水险象下战术犯规略多，预计中等纪律风险。",
          "scenarios": [
            {
              "icon": "☯",
              "label": "气运性质",
              "text": "土水相激，子时水旺——先破局者占「光亨」之势"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 22-38 分钟（需卦「云上于天」、子时水转明——卦只示此一段）"
            },
            {
              "icon": "🟨",
              "label": "纪律",
              "text": "坎水主险，领先后阻截犯规略多"
            }
          ],
          "early_goal": {
            "scenario": "若捷克先进球",
            "prediction": "需象渐通——金火相涵，追加窗口在 28-42 分钟；忌「需」而未济时躁进。",
            "favors": "Czechia",
            "favors_prob": 58
          },
          "no_early_goal": {
            "scenario": "若前 30 分钟无进球",
            "prediction": "需卦主「待」——丑土蓄势；35-50 分钟水气渐移，先破局者得利。",
            "favors": "Czechia",
            "favors_prob": 52
          },
          "away_goal": {
            "scenario": "若南非偷袭破门",
            "prediction": "需遭逆——木土险地偶可惊雷；主队需以金火耐心反扑，60' 后土气助火。",
            "favors": "Czechia",
            "favors_prob": 50
          }
        },
        "goal_peak": {
          "scope": "first_half",
          "title": "上半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 22,
              "end_min": 38,
              "hex_reason": "需卦「云上于天」，坎水渐通",
              "time_reason": "子时水旺，气由待转亨"
            }
          ],
          "periods": "第 22-38 分钟",
          "rationale": "己丑土日厚重，子时水气当令；需卦主「有孚光亨」——气运集中于待而后发一段，卦象未明示下半场第二高峰。宁缺毋滥，只示上半场一窗。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 64,
        "away_score": 36,
        "mystic_verdict": "捷克金火相涵，南非木土相杂——子时水旺，先顺天时破局者占「光亨」。",
        "model_bridge": "xG 1.48-0.95 略优捷克，Tau 速度反击是唯一变数。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "depth_calibration": {
        "tier_home": 0.75,
        "tier_label": "Czechia 被看好 · 净胜约 0.5–1 球",
        "implied_tier": 0.25,
        "tier_gap": 0.5,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Czechia（约 62%）",
        "analysis": "捷克首轮惜败韩国需抢分；南非 0-2 墨西哥且 Sithole/Zwane 红牌停赛，中场削弱。模型略看好捷克，平局权重下调。 赛前净胜参考高于 xG 隐含（+0.5），且净胜 1 球占 25.4%——热门净胜拉开偏难。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 13.9
            },
            {
              "score": "1-1",
              "prob": 12.2
            },
            {
              "score": "2-0",
              "prob": 10.5
            }
          ],
          "one_goal_win_pct": 25.4,
          "two_plus_win_pct": 26.6,
          "full_cover_pct": 26.6,
          "half_lose_pct": 25.4,
          "fav_cover_ev": -0.34,
          "dog_cover_ev": 0.34,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.4,
          "over_2_5_pct": 42.7,
          "over_3_pct": 21.7,
          "totals_lean_cn": "2.5 球参考接近均衡；3 球参考偏少",
          "margin_risk_note": "净胜 1 球概率 25.4%：常见「赢球但净胜仅 1 球」",
          "push_pct": null
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.25,
          "line_label": "总进球约 2–2.5 个",
          "implied_xg_total": 2.4,
          "fair_line": 2.25,
          "line_gap": 0,
          "over_pct": 55.9,
          "under_pct": 44.1,
          "signal": "aligned",
          "signal_cn": "进球参考贴合",
          "signal_color": "#5BBF8A",
          "signal_desc": "赛前进球参考与 xG 总进球预期基本一致。",
          "public_over_pct": 46,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "少进球侧参考权重相对更高",
          "totals_odds": null,
          "rational_cn": "模型在 总进球约 2–2.5 个 附近均衡",
          "score_link_cn": "小比分（1-0/1-1）偏少进球 · 2-0/2-1 居中 · 3 球+ 偏多进球"
        },
        "totals_line": 2.25,
        "applied_delta": {
          "home_win": 2,
          "draw": -1,
          "away_win": -1
        },
        "adjustment_note": "模型微调：主胜 +2% · 平 -1% · 客 -1%",
        "adjusted_probs": {
          "home_win": 54,
          "draw": 25,
          "away_win": 21
        },
        "display_summary": {
          "fav_name": "Czechia",
          "expected_total_goals": 2.01,
          "poisson_fav_win_pct": 54.2,
          "small_lead_pct": 27.6,
          "small_example_score": "1-0",
          "small_example_pct": 18.2,
          "big_cover_pct": 26.5,
          "big_example_score": "2-0",
          "big_example_pct": 12.5,
          "win_shape": {
            "fav_name": "Czechia",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·控局为主（险胜 · 控局 33.6%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 18.2,
                "pct": 33.6
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 9.4,
                "pct": 17.4
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 18.2,
                "pct": 33.6
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 8.4,
                "pct": 15.4
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 51
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
                "pct": 15.4
              }
            ],
            "fav_win_pct": 54
          },
          "excitement": {
            "label_cn": "偏晚",
            "label_key": "slow",
            "label_color": "#7BB8D4",
            "sub_cn": "预期首球等待约 44.6 分",
            "first_goal_wait": 44.6,
            "fast_pct": 49,
            "moderate_pct": 14.6,
            "slow_pct": 36.4,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 49
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.6
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 36.4
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Czechia 暂无重要伤停 · South Africa：Sphephelo Sithole、Themba Zwane 缺阵"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "控节奏 / 5-4-1 收缩（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "闷热变量中等——双方后段体能是隐性变量"
            }
          ],
          "xg_context": {
            "baseline_home": 1.52,
            "baseline_away": 0.88,
            "adjusted_home": 1.37,
            "adjusted_away": 0.65,
            "note": "基准 xG 1.52–0.88 → 调整后 1.37–0.65"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.5,
            "implied_tier_label": "Czechia 被看好 · 净胜约 0.25 球",
            "market_tier_label": "Czechia 被看好 · 净胜约 0.5–1 球",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5 · 热门仅净胜 1 球概率 27.6%"
          },
          "win_outlook": {
            "fav_name": "Czechia",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 51
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
                "pct": 15.4
              }
            ],
            "margin_line_cn": "Czechia · 赛前净胜参考 ≥1–2 球",
            "margin_meet_pct": 26.5,
            "margin_fail_pct": 27.6,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.25,
            "totals_line_cn": "总进球约 2–2.5 个",
            "totals_high_pct": 46.2,
            "totals_low_pct": 53.8,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 30.7,
            "win_margin2_low_total_pct": 12.5,
            "win_margin2_high_total_pct": 26.5,
            "readout_cn": "取胜约 54%；若取胜，以「险胜收工」为主（51%）。 对着赛前净胜参考，差距达标约 26.5%；对着 总进球约 2–2.5 个，总进球偏高一侧约 46.2%。 注意 2-0 类：净胜达标但总进球仍可能偏低。"
          },
          "totals_line": 2.25,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 18.2
            },
            {
              "score": "0-0",
              "pct": 13.3
            },
            {
              "score": "2-0",
              "pct": 12.5
            }
          ],
          "totals_view": {
            "expected_total": 2,
            "fair_line": 2.25,
            "line_gap": 0,
            "over_pct": 46.2,
            "summary_cn": "预期约 2.0 个总进球 · 赛前参考进球参考贴合 · 模型在常见进球预期附近均衡"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Czechia",
              "first_goal_pct": 67.8,
              "start_score": "1-0",
              "fav_name": "Czechia",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 94.5,
              "small_lead_pct": 35.4,
              "big_lead_pct": 42.5,
              "fav_win_pct": 77.9,
              "fav_draw_pct": 16.6,
              "fav_lose_pct": 5.5,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Czechia 保持胜果（净胜≥1）",
                  "pct": 77.9
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 16.6
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 5.5
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 48.1 分",
                "first_goal_wait": 48.1,
                "fast_pct": 40,
                "moderate_pct": 13.5,
                "slow_pct": 46.5,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 40
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 13.5
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 46.5
                  }
                ]
              },
              "big_delta": 16,
              "small_delta": 7.8,
              "narrative": "Czechia 先破门（已 1-0） → 「控节奏」；South Africa 「堆边锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": {
                "fav_name": "Czechia",
                "state_label": "Czechia 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 51
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
                    "pct": 15.4
                  }
                ],
                "margin_line_cn": "Czechia · 赛前净胜参考 ≥1–2 球",
                "margin_meet_pct": 42.5,
                "margin_fail_pct": 35.4,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.25,
                "totals_line_cn": "总进球约 2–2.5 个",
                "totals_high_pct": 61.9,
                "totals_low_pct": 38.1,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 41.9,
                "win_margin2_low_total_pct": 20.4,
                "win_margin2_high_total_pct": 42.5,
                "readout_cn": "Czechia 已 1-0 领先：仍取胜约 77.9%；对着赛前 总进球约 2–2.5 个，总进球偏高一侧约 61.9%。 常见收尾如 2-0（净胜达标、总进球仍偏低）。"
              }
            },
            {
              "side": "away",
              "team": "South Africa",
              "first_goal_pct": 32.2,
              "start_score": "0-1",
              "fav_name": "Czechia",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 56.3,
              "small_lead_pct": 17.1,
              "big_lead_pct": 9.3,
              "fav_win_pct": 26.4,
              "fav_draw_pct": 29.9,
              "fav_lose_pct": 43.6,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Czechia 追平（平局）",
                  "pct": 29.9
                },
                {
                  "key": "win1",
                  "label": "Czechia 净胜1球翻盘（如 2-1）",
                  "pct": 17.1
                },
                {
                  "key": "win2",
                  "label": "Czechia 净胜≥2球翻盘（如 3-1）",
                  "pct": 9.3
                },
                {
                  "key": "upset_hold",
                  "label": "South Africa 保持胜果至终场",
                  "pct": 43.6
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 43.5 分",
                "first_goal_wait": 43.5,
                "fast_pct": 43.2,
                "moderate_pct": 14,
                "slow_pct": 42.8,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 43.2
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 42.8
                  }
                ]
              },
              "big_delta": -17.2,
              "small_delta": -10.5,
              "narrative": "South Africa 先破门（已 0-1） → 「5-4-1 收缩」；Czechia 「堆前锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预期约 2.0 个总进球 · 赛前参考进球参考贴合 · 模型在常见进球预期附近均衡",
              "totals_line_cn": "总进球约 2–2.5 个",
              "totals_high_pct": 46.2,
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
              "draw_trap_pct": 24,
              "readout_cn": "Czechia · 低位反击 · 进球偏少。进球预期不高，小比分与平局权重上升。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 24% 冷门空间含平局）。",
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
              "draw_trap_pct": 24,
              "fav_lead_style": "defensive"
            }
          }
        },
        "public_summary_note": "【推演概要】Czechia · 低位反击 · 进球偏少。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法高于 xG 隐含约 0.5 · 热门仅净胜 1 球概率 27.6%（模型微调：主胜 +2% · 平 -1% · 客 -1%）"
      },
      "group_context": {
        "group": "A",
        "label": "A组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Mexico",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 2,
            "ga": 0
          },
          {
            "team": "South Korea",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 2,
            "ga": 1
          },
          {
            "team": "Czechia",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 2
          },
          {
            "team": "South Africa",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 0,
            "ga": 2
          }
        ],
        "home": {
          "team": "Czechia",
          "rank": 3,
          "pts": 0,
          "played": 1,
          "if_1st": "32强 · 对阵 B 组第 2",
          "if_2nd": "32强 · 对阵 B 组第 1",
          "if_3rd": "若列小组第 3，需与 B/E/F/H/I/J/K/L 等组第 3 比净胜球/进球"
        },
        "away": {
          "team": "South Africa",
          "rank": 4,
          "pts": 0,
          "played": 1,
          "if_1st": "32强 · 对阵 B 组第 2",
          "if_2nd": "32强 · 对阵 B 组第 1",
          "if_3rd": "若列小组第 3，需与 B/E/F/H/I/J/K/L 等组第 3 比净胜球/进球"
        },
        "cross_group_notes": [
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "E 组 Germany 3 分领跑",
          "F 组 Sweden 3 分领跑"
        ],
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "暂无明确控分动机；出线路径仍取决于后续直接对话。"
        },
        "knockout_note": "48 队制：12 组前 2 + 8 个最佳第 3 进入 32 强；末轮可能出现算分/控分战术。",
        "scenarios": [
          "Czechia 若取胜：积分 3，A 组排名有望上升；过早预测 32 强对手仍不可靠。",
          "South Africa 若取胜：积分 3，客场抢分将改变 A 组格局。",
          "平局：双方各 +1 分；在 G 组四队同积 1 分，形势极度开放；H 组四队同积 1 分，形势极度开放；E 组 Germany 3 分领跑；F 组 Sweden 3 分领跑 背景下，第 2 轮直接对话权重上升。"
        ]
      }
    },
    {
      "id": "m26",
      "group": "B",
      "matchday": 2,
      "date": "2026-06-18",
      "time": "15:00",
      "time_local": "15:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "03:00",
      "date_beijing": "6月19日",
      "time_beijing_full": "北京时间 6月19日 03:00",
      "venue": "SoFi Stadium",
      "city": "Los Angeles, USA",
      "note": "B组第2轮 · 瑞士 vs 波黑 · 洛杉矶",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-3-3",
          "home": "Kobel; Rieder, Akanji, Rodríguez; Xhaka, Freuler; Vargas, Rieder, Embolo; Duah",
          "away": "Bešić; Džeko, Bajraktarević, Tahić; Hadžiahmetović, Kršić; Mlakar, Bajić, Demirović; Burić",
          "source": "BBC / FotMob 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Switzerland",
        "iso": "ch",
        "flag": "",
        "fifa_rank": 19,
        "rating": 78,
        "form": [
          "D",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Murat Yakin",
        "stars": [
          {
            "name": "Granit Xhaka",
            "pos": "CM",
            "club": "Bayer Leverkusen",
            "stats": "节拍器",
            "rating": 8.2,
            "desc": "组织+远射"
          },
          {
            "name": "Manuel Akanji",
            "pos": "CB",
            "club": "Man City",
            "stats": "防线领袖",
            "rating": 8,
            "desc": "出球+防空"
          },
          {
            "name": "Breel Embolo",
            "pos": "ST",
            "club": "Monaco",
            "stats": "支点",
            "rating": 7.8,
            "desc": "身体对抗"
          }
        ],
        "injuries": [
          {
            "player": "Manuel Akanji",
            "status": "FIT",
            "note": "曼城中卫，出球+防空",
            "confirmed": true
          },
          {
            "player": "Granit Xhaka",
            "status": "FIT",
            "note": "勒沃库森节拍器",
            "confirmed": true
          }
        ],
        "rumors": [
          "首轮 1-1 卡塔尔后 Yakin 强调「对波黑必须取胜」"
        ],
        "star": {
          "name": "Granit Xhaka",
          "pos": "CM",
          "desc": "对波黑必须取胜",
          "rating": 8.2
        }
      },
      "away": {
        "name": "Bosnia and Herzegovina",
        "iso": "ba",
        "flag": "",
        "fifa_rank": 72,
        "rating": 68,
        "form": [
          "D",
          "L",
          "W",
          "D",
          "L"
        ],
        "coach": "Sergej Stojković",
        "stars": [
          {
            "name": "Edin Džeko",
            "pos": "ST",
            "club": "Fenerbahçe",
            "stats": "39 岁支点",
            "rating": 7.8,
            "desc": "定位球+经验"
          },
          {
            "name": "Miroslav Stevanović",
            "pos": "RW",
            "club": "Servette",
            "stats": "边路",
            "rating": 7,
            "desc": "传中威胁"
          },
          {
            "name": "Amar Hadžiahmetović",
            "pos": "CM",
            "club": "Konyaspor",
            "stats": "屏障",
            "rating": 6.9,
            "desc": "中场绞杀"
          }
        ],
        "injuries": [
          {
            "player": "Edin Džeko",
            "status": "FIT",
            "note": "39 岁支点，定位球威胁",
            "confirmed": true
          }
        ],
        "rumors": [
          "首轮 1-1 加拿大，Džeko 经验是最大资产",
          "对瑞士预计 4-5-1 低位"
        ],
        "star": {
          "name": "Edin Džeko",
          "pos": "ST",
          "desc": "低位+定位球偷分",
          "rating": 7.8
        }
      },
      "h2h": {
        "home_wins": 2,
        "draws": 1,
        "away_wins": 0,
        "recent": [],
        "note": "瑞士近年占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-18",
        "name": "João Pinheiro",
        "nation": "Portugal",
        "iso": "pt",
        "age": 38,
        "wc_experience": "2026 世界杯首秀主裁 · 2025 世预赛波黑 1-1 奥地利",
        "avg_yellow": 4.9,
        "avg_red": 0.11,
        "avg_penalty": 0.26,
        "home_win_rate": 48,
        "bias_index": 50,
        "bias_note": "葡萄牙籍主裁。Džeko 支点与瑞士肋部渗透犯规判罚是焦点；Katić/Lukić/Demirović 均有第二张黄牌停赛风险。",
        "tendencies": [
          "葡萄牙助理裁判组：Bruno Jesus、Luciano Maia",
          "第四官员 Yusuke Araki（日本）· 候补边裁 Jun Mihara",
          "B 组四队均 1 分，洛杉矶抢分战预计 5–6 张黄牌",
          "Pinheiro 联赛场均近 5 黄，对拖延时间与战术犯规尺度偏严"
        ],
        "officials": {
          "ar1": "Bruno Jesus (POR)",
          "ar2": "Luciano Maia (POR)",
          "fourth": "Yusuke Araki (JPN)"
        }
      },
      "prediction": {
        "home_win": 50,
        "draw": 25,
        "away_win": 25,
        "score": "1-1",
        "confidence": 68,
        "xg_home": 1.55,
        "xg_away": 1.05,
        "key_factor": "瑞士首轮平卡塔尔需取胜：Xhaka/Akanji 组织优势；波黑 Džeko 定位球偷分；泊松最可能 2-0/1-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 12.1
          },
          {
            "score": "1-0",
            "prob": 11.5
          },
          {
            "score": "2-1",
            "prob": 9.4
          },
          {
            "score": "2-0",
            "prob": 8.9
          },
          {
            "score": "0-1",
            "prob": 7.8
          },
          {
            "score": "0-0",
            "prob": 7.4
          },
          {
            "score": "1-2",
            "prob": 6.3
          }
        ],
        "base_home_win": 49,
        "base_draw": 26,
        "base_away_win": 26,
        "depth_calibrated": true
      },
      "upset_alert": {
        "favorite": "Switzerland",
        "underdog": "Bosnia and Herzegovina",
        "favorite_iso": "SUI",
        "index": 32,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 28,
        "verdict": "瑞士组织占优但 Džeko 定位球是经典冷门路径——平局约 28%。",
        "tactical": "Yakin 4-2-3-1 控球 vs Stojković 4-5-1 低位+Džeko 支点。",
        "psychology": "波黑首轮平加拿大有信心；瑞士必须取胜。",
        "historical": "瑞士近年 H2H 占优。",
        "factors": [
          {
            "tag": "定位球",
            "impact": "强",
            "detail": "Džeko 193cm 支点"
          },
          {
            "tag": "组织",
            "impact": "强",
            "detail": "Xhaka/Akanji 瑞士优势"
          },
          {
            "tag": "平局",
            "impact": "中",
            "detail": "波黑守 0-1 可接受"
          }
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Murat Yakin",
          "age": 50,
          "nation": "瑞士",
          "tenure": "2021年—",
          "wc_exp": "2022 带队 · 2024 欧洲杯八强",
          "style_tags": [
            "4-2-3-1",
            "Akanji 防线",
            "组织",
            "纪律"
          ],
          "formation_pref": "4-2-3-1 · 双后腰",
          "style_summary": "首轮 1-1 卡塔尔，组织优势未完全兑现。对波黑必须取胜，预计控球压制+边路宽度。",
          "subs": {
            "timing": "首换 58–65 分钟",
            "pattern": "常换边锋",
            "avg_first_sub": "60'",
            "note": "换人果断"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "1 球领先：维持控球。"
          },
          "when_trailing": {
            "label": "堆中场",
            "detail": "先丢球：加强肋部渗透。"
          },
          "vs_strong": {
            "label": "对强队：稳守",
            "detail": "对加拿大会压上。"
          },
          "vs_weak": {
            "label": "对弱队：不留余地",
            "detail": "对波黑 xG 占优。"
          },
          "tournament": "2022/2024 大赛经验，纪律是资产。",
          "traits": [
            "组织",
            "Akanji 防线",
            "纪律",
            "必须抢分"
          ],
          "match_note": "瑞士组织压制——Akanji 出球+边路宽度；波黑 Džeko 定位球需防。"
        },
        "away": {
          "name": "Sergej Stojković",
          "age": 58,
          "nation": "塞尔维亚",
          "tenure": "2024年—",
          "wc_exp": "2026 带队",
          "style_tags": [
            "4-3-3",
            "Džeko 支点",
            "身体对抗",
            "定位球"
          ],
          "formation_pref": "4-3-3 · Džeko 单锋",
          "style_summary": "首轮 1-1 加拿大，Džeko 经验是最大资产。对瑞士求 1 分可接受，预计 4-5-1 低位+定位球。",
          "subs": {
            "timing": "首换 70 分钟+",
            "pattern": "Džeko 打满",
            "avg_first_sub": "72'",
            "note": "弱队体能分配"
          },
          "when_leading": {
            "label": "5-4-1 铁桶",
            "detail": "若意外领先：立即退守。"
          },
          "when_trailing": {
            "label": "维持低位",
            "detail": "unlikely 大举压上。"
          },
          "vs_strong": {
            "label": "对强队：龟缩",
            "detail": "对瑞士低位+定位球。"
          },
          "vs_weak": {
            "label": "对弱队：相对开放",
            "detail": "对卡塔尔会压上。"
          },
          "tournament": "大赛经验有限，Džeko 是精神领袖。",
          "traits": [
            "Džeko 支点",
            "定位球",
            "低位",
            "身体对抗"
          ],
          "match_note": "4-5-1 低位+Džeko 支点偷分；守 0-1 求 1 分是现实目标。"
        }
      },
      "weather": {
        "temp": 26,
        "humidity": 55,
        "rain_chance": 10,
        "condition_cn": "洛杉矶晴朗，封闭式",
        "impact_level": "LOW",
        "impact_summary": "气候变量低——战术对位决定比赛",
        "home_adapt": 82,
        "away_adapt": 80,
        "weather_factors": [
          {
            "label": "26°C · 15:00 PT 开球",
            "impact": "低",
            "detail": "北京时间 6月19日 03:00"
          }
        ],
        "historical_note": "SoFi Stadium · B组第2轮"
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
          "day_summary": "己丑日——己土坐丑，土气厚重。《道德经》曰：「上善若水。」丑土当令，宜守中蓄势、厚积薄发；忌土性固执、躁进冒失。非力之大小，乃气之顺逆。",
          "hour_home": "丑时（02:00-04:00）",
          "hour_home_element": "土"
        },
        "wuxing": {
          "home": {
            "team": "Switzerland",
            "colors": "红+白",
            "elements": "火、金",
            "wuxing_short": "金火相涵",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 62,
            "reason": "红属火、白属金。丑时土旺与己丑日同气——土能生金，金火相涵如「地中有山」，谦而能进。《说卦》坤为地，主队服色得丑土之承。",
            "advantage": "丑土稳金，组织之气渐聚"
          },
          "away": {
            "team": "Bosnia and Herzegovina",
            "colors": "蓝+白",
            "elements": "水、金",
            "wuxing_short": "金水相生",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 52,
            "reason": "蓝属水、白属金。金水相生本吉，然丑土当令克水——如「金沉土中」，宜低位守中、暗流待发。",
            "advantage": "金水守势，定位球为暗流"
          },
          "summary": "五行裁定：丑土当令利金火相涵之瑞士；波黑金水相生但受土克——气运近而不齐"
        },
        "hexagram": {
          "name": "地山谦",
          "symbol": "☷☶",
          "number": 15,
          "upper": "坤地",
          "lower": "艮山",
          "quote": "《周易·谦卦》：「谦，亨，君子有终。」",
          "general": "谦卦——地中有山，卑以自牧；宜守中出奇，忌矜夸躁进。",
          "advantage_team": "Switzerland",
          "disadvantage_team": "Bosnia and Herzegovina",
          "hexagram_analysis": "谦卦「裒多益寡」：坤地承山，丑土当令气运后段渐动；艮山主止，卦示稳后破局一段。",
          "match_nature": "谦受益 · 主队渐优",
          "yellow_card_risk": "低至中",
          "yellow_card_reason": "谦卦主守正，低位阻截略多；预计 3-4 张黄牌。",
          "scenarios": [
            {
              "icon": "☯",
              "label": "气运性质",
              "text": "丑土当令，金火相涵者渐占「亨」"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 58-75 分钟（谦卦「君子有终」、丑土后段土旺助金——卦只示此一段）"
            },
            {
              "icon": "🟨",
              "label": "纪律",
              "text": "谦卦重守正，黄牌来自低位阻截"
            }
          ],
          "early_goal": {
            "scenario": "若瑞士先进球",
            "prediction": "谦象全现——丑土助金，追加窗口在 65-78 分钟；忌轻敌触「满招损」。",
            "favors": "Switzerland",
            "favors_prob": 60
          },
          "no_early_goal": {
            "scenario": "若前 35 分钟无进球",
            "prediction": "谦卦宜「卑以自牧」——0-0 符合卦象；下半场 50-65 分钟为破局段。",
            "favors": "Draw",
            "favors_prob": 46
          },
          "away_goal": {
            "scenario": "若波黑定位球破门",
            "prediction": "谦遭逆——金水暗流；瑞士需以金火相涵耐心反扑，70' 后土气助金。",
            "favors": "Switzerland",
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
              "start_min": 58,
              "end_min": 75,
              "hex_reason": "谦卦「君子有终」，坤地承山后段气动",
              "time_reason": "丑时土旺后段，土能生金"
            }
          ],
          "periods": "第 58-75 分钟",
          "rationale": "丑时与己丑日土气叠旺，谦卦主「卑以自牧」——气运集中于稳阵后破局一段，卦象未明示上半场高峰。宁缺毋滥，只示下半场一窗。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 72,
        "away_score": 48,
        "mystic_verdict": "瑞士金火相涵，波黑金水守中——丑土当令，谦而能进者占「亨」。",
        "model_bridge": "xG 1.55-1.05 组织占优，Džeko 定位球是经典冷门路径。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "depth_calibration": {
        "tier_home": 0.5,
        "tier_label": "Switzerland 被看好 · 净胜约 0.5 球",
        "implied_tier": 0.25,
        "tier_gap": 0.25,
        "signal": "genuine_favorite",
        "signal_cn": "实力吻合",
        "signal_color": "#5BBF8A",
        "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Switzerland（约 58%）",
        "analysis": "瑞士首轮平卡塔尔；波黑首轮平加拿大。双方均需 3 分，模型略看好瑞士组织优势。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 12.2
            },
            {
              "score": "1-0",
              "prob": 11.6
            },
            {
              "score": "2-1",
              "prob": 9.4
            }
          ],
          "one_goal_win_pct": 23.9,
          "two_plus_win_pct": 24.7,
          "full_cover_pct": 24.7,
          "half_lose_pct": 23.9,
          "fav_cover_ev": 0.213,
          "dog_cover_ev": -0.213,
          "rational_spread_cn": "主队 净胜达标概率略高",
          "total_xg": 2.6,
          "over_2_5_pct": 47.8,
          "over_3_pct": 26,
          "totals_lean_cn": "2.5 球参考接近均衡；3 球参考偏少",
          "margin_risk_note": "净胜 1 球概率 23.9%：常见「赢球但净胜仅 1 球」",
          "push_pct": null
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.6,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 47.8,
          "under_pct": 52.2,
          "signal": "high_line",
          "signal_cn": "进球参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。",
          "public_over_pct": 50,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "多/少进球两侧参考接近均衡",
          "totals_odds": null,
          "rational_cn": "模型在 总进球约 2.5 个 附近均衡",
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
          "home_win": 50,
          "draw": 25,
          "away_win": 25
        },
        "display_summary": {
          "fav_name": "Switzerland",
          "expected_total_goals": 2.57,
          "poisson_fav_win_pct": 48.7,
          "small_lead_pct": 23.9,
          "small_example_score": "1-0",
          "small_example_pct": 11.6,
          "big_cover_pct": 24.7,
          "big_example_score": "2-0",
          "big_example_pct": 9,
          "win_shape": {
            "fav_name": "Switzerland",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 28%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 11.6,
                "pct": 23.8
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 12.4,
                "pct": 25.4
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 13.6,
                "pct": 28
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 11.1,
                "pct": 22.8
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 49.2
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
                "pct": 22.8
              }
            ],
            "fav_win_pct": 50
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
              "note": "Switzerland 暂无重要伤停 · Bosnia and Herzegovina 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "控节奏 / 5-4-1 铁桶（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "气候变量低——战术对位决定比赛"
            }
          ],
          "xg_context": {
            "baseline_home": 1.55,
            "baseline_away": 1.05,
            "adjusted_home": 1.55,
            "adjusted_away": 1.05,
            "note": "基准 xG 1.55–1.05（未因伤病/气候下调）"
          },
          "calibration": {
            "signal_cn": "实力吻合",
            "signal_color": "#5BBF8A",
            "signal_desc": "赛前舆论与 xG 实力差基本一致，模型信任该方向。",
            "tier_gap": 0.25,
            "implied_tier_label": "Switzerland 被看好 · 净胜约 0.25 球",
            "market_tier_label": "Switzerland 被看好 · 净胜约 0.5 球",
            "summary_cn": "与模型 xG 对照：实力吻合 · 赛前净胜看法略高（约 +0.25） · 热门仅净胜 1 球概率 23.9%"
          },
          "win_outlook": {
            "fav_name": "Switzerland",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 49.2
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
                "pct": 22.8
              }
            ],
            "margin_line_cn": "Switzerland · 赛前净胜参考 ≥1 球",
            "margin_meet_pct": 24.7,
            "margin_fail_pct": 23.9,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球约 2.5 个",
            "totals_high_pct": 47.8,
            "totals_low_pct": 52.2,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 20.6,
            "win_margin2_low_total_pct": 9,
            "win_margin2_high_total_pct": 15.7,
            "readout_cn": "取胜约 50%；若取胜，以「险胜收工」为主（49.2%）。 对着赛前净胜参考，差距达标约 24.7%；对着 总进球约 2.5 个，总进球偏高一侧约 47.8%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.2
            },
            {
              "score": "1-0",
              "pct": 11.6
            },
            {
              "score": "2-1",
              "pct": 9.4
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "line_gap": 0.5,
            "over_pct": 47.8,
            "summary_cn": "预期约 2.6 个总进球 · 赛前参考进球参考偏高 · 模型在常见进球预期附近均衡"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Switzerland",
              "first_goal_pct": 59.6,
              "start_score": "1-0",
              "fav_name": "Switzerland",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 92.9,
              "small_lead_pct": 34.1,
              "big_lead_pct": 40.8,
              "fav_win_pct": 74.9,
              "fav_draw_pct": 18,
              "fav_lose_pct": 7.1,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Switzerland 保持胜果（净胜≥1）",
                  "pct": 74.9
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 18
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 7.1
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
              "big_delta": 16.1,
              "small_delta": 10.2,
              "narrative": "Switzerland 先破门（已 1-0） → 「控节奏」；Bosnia and Herzegovina 「维持低位」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "Switzerland",
                "state_label": "Switzerland 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 49.2
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
                    "pct": 22.8
                  }
                ],
                "margin_line_cn": "Switzerland · 赛前净胜参考 ≥1 球",
                "margin_meet_pct": 40.8,
                "margin_fail_pct": 34.1,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球约 2.5 个",
                "totals_high_pct": 49.3,
                "totals_low_pct": 50.7,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 37.6,
                "win_margin2_low_total_pct": 18.5,
                "win_margin2_high_total_pct": 22.3,
                "readout_cn": "Switzerland 已 1-0 领先：仍取胜约 74.9%；对着赛前 总进球约 2.5 个，总进球偏高一侧约 49.3%。 常见收尾如 2-0（净胜达标、总进球仍偏低）。"
              }
            },
            {
              "side": "away",
              "team": "Bosnia and Herzegovina",
              "first_goal_pct": 40.4,
              "start_score": "0-1",
              "fav_name": "Switzerland",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 53.3,
              "small_lead_pct": 16.4,
              "big_lead_pct": 10,
              "fav_win_pct": 26.4,
              "fav_draw_pct": 26.9,
              "fav_lose_pct": 46.7,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Switzerland 追平（平局）",
                  "pct": 26.9
                },
                {
                  "key": "win1",
                  "label": "Switzerland 净胜1球翻盘（如 2-1）",
                  "pct": 16.4
                },
                {
                  "key": "win2",
                  "label": "Switzerland 净胜≥2球翻盘（如 3-1）",
                  "pct": 10
                },
                {
                  "key": "upset_hold",
                  "label": "Bosnia and Herzegovina 保持胜果至终场",
                  "pct": 46.7
                }
              ],
              "excitement": {
                "label_cn": "中速开局",
                "label_key": "moderate",
                "label_color": "#C8A96E",
                "sub_cn": "预期首球等待约 34.6 分",
                "first_goal_wait": 34.6,
                "fast_pct": 50.9,
                "moderate_pct": 14.7,
                "slow_pct": 34.4,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 50.9
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14.7
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 34.4
                  }
                ]
              },
              "big_delta": -14.7,
              "small_delta": -7.5,
              "narrative": "Bosnia and Herzegovina 先破门（已 0-1） → 「5-4-1 铁桶」；Switzerland 「堆中场」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预期约 2.6 个总进球 · 赛前参考进球参考偏高 · 模型在常见进球预期附近均衡",
              "totals_line_cn": "总进球约 2.5 个",
              "totals_high_pct": 47.8,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "深度一般",
              "draw_trap_pct": 28,
              "readout_cn": "Switzerland · 低位反击。总进球约 2.6 个；按常规模型读即可。"
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
          }
        },
        "public_summary_note": "【推演概要】Switzerland · 低位反击。 · 与模型 xG 对照：实力吻合 · 赛前净胜看法略高（约 +0.25） · 热门仅净胜 1 球概率 23.9%（模型微调：主胜 +2% · 平 -1% · 客 -1%）"
      },
      "group_context": {
        "group": "B",
        "label": "B组 · 第1轮（卡塔尔-瑞士已赛）",
        "matchday": 2,
        "standings": [
          {
            "team": "Switzerland",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Qatar",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Canada",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Bosnia and Herzegovina",
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
          "team": "Switzerland",
          "rank": 1,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 · 对阵 A 组第 2",
          "if_2nd": "32强 · 对阵 A 组第 1",
          "if_3rd": "若列小组第 3，需与 A/E/F/H/I/J/K/L 等组第 3 比净胜球/进球"
        },
        "away": {
          "team": "Bosnia and Herzegovina",
          "rank": 4,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 · 对阵 A 组第 2",
          "if_2nd": "32强 · 对阵 A 组第 1",
          "if_3rd": "若列小组第 3，需与 A/E/F/H/I/J/K/L 等组第 3 比净胜球/进球"
        },
        "cross_group_notes": [
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "E 组 Germany 3 分领跑",
          "F 组 Sweden 3 分领跑"
        ],
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "暂无明确控分动机；出线路径仍取决于后续直接对话。"
        },
        "knockout_note": "48 队制：12 组前 2 + 8 个最佳第 3 进入 32 强；末轮可能出现算分/控分战术。",
        "scenarios": [
          "Switzerland 若取胜：积分 4，B 组排名有望上升；过早预测 32 强对手仍不可靠。",
          "Bosnia and Herzegovina 若取胜：积分 4，客场抢分将改变 B 组格局。",
          "平局：双方各 +1 分；在 G 组四队同积 1 分，形势极度开放；H 组四队同积 1 分，形势极度开放；E 组 Germany 3 分领跑；F 组 Sweden 3 分领跑 背景下，第 2 轮直接对话权重上升。"
        ]
      }
    },
    {
      "id": "m27",
      "group": "B",
      "matchday": 2,
      "date": "2026-06-18",
      "time": "18:00",
      "time_local": "18:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "06:00",
      "date_beijing": "6月19日",
      "time_beijing_full": "北京时间 6月19日 06:00",
      "venue": "BC Place",
      "city": "Vancouver, Canada",
      "note": "B组第2轮 · 加拿大 vs 卡塔尔 · 温哥华（东道主）",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "St. Clair; Johnston, Miller, Cornelius; Davies, Buchanan, Eustáquio, Laryea; David, Larin, Hoilett",
          "away": "Barsham; Pedro Miguel, Salama, Tarek; Ahmed, Boudiaf; Ali, Afif, Muntari; Almoez Ali",
          "source": "TSN / ESPN 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
        "name": "Canada",
        "iso": "ca",
        "flag": "",
        "fifa_rank": 48,
        "rating": 72,
        "form": [
          "D",
          "W",
          "L",
          "W",
          "D"
        ],
        "coach": "Jesse Marsch",
        "stars": [
          {
            "name": "Alphonso Davies",
            "pos": "LB",
            "club": "Bayern Munich",
            "stats": "温哥华爆点",
            "rating": 8.5,
            "desc": "左路速度+助攻"
          },
          {
            "name": "Jonathan David",
            "pos": "ST",
            "club": "Lille",
            "stats": "终结",
            "rating": 8.2,
            "desc": "跑位+射门"
          },
          {
            "name": "Stephen Eustáquio",
            "pos": "CM",
            "club": "Porto",
            "stats": "节拍器",
            "rating": 7.8,
            "desc": "出球+远射"
          }
        ],
        "injuries": [
          {
            "player": "Alphonso Davies",
            "status": "FIT",
            "note": "拜仁左路，温哥华主场爆点",
            "confirmed": true
          },
          {
            "player": "Jonathan David",
            "status": "FIT",
            "note": "里尔射手，终结关键",
            "confirmed": true
          }
        ],
        "rumors": [
          "东道主温哥华主场，Marsch 高位压迫是战术核心",
          "对卡塔尔必须取胜"
        ],
        "star": {
          "name": "Alphonso Davies",
          "pos": "LB",
          "desc": "东道主主场必须取胜",
          "rating": 8.5
        }
      },
      "away": {
        "name": "Qatar",
        "iso": "qa",
        "flag": "",
        "fifa_rank": 35,
        "rating": 70,
        "form": [
          "D",
          "W",
          "D",
          "L",
          "W"
        ],
        "coach": "Félix Sánchez",
        "stars": [
          {
            "name": "Almoez Ali",
            "pos": "ST",
            "club": "Al-Duhail",
            "stats": "亚洲杯金靴",
            "rating": 7.6,
            "desc": "锋线核心"
          },
          {
            "name": "Akram Afif",
            "pos": "LW",
            "club": "Al-Sadd",
            "stats": "亚洲杯MVP",
            "rating": 7.5,
            "desc": "肋部+定位球"
          },
          {
            "name": "Hassan Al-Haydos",
            "pos": "CM",
            "club": "Al-Sadd",
            "stats": "队长",
            "rating": 7.2,
            "desc": "远射威胁"
          }
        ],
        "injuries": [
          {
            "player": "Almoez Ali",
            "status": "FIT",
            "note": "卡塔尔锋线核心",
            "confirmed": true
          }
        ],
        "rumors": [
          "首轮 1-1 瑞士，防守纪律尚可",
          "客场对加拿大预计 5-4-1 低位"
        ],
        "star": {
          "name": "Almoez Ali",
          "pos": "ST",
          "desc": "低位反击发起点",
          "rating": 7.6
        }
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 0,
        "recent": [],
        "note": "无正式大赛交锋"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-18",
        "name": "Cristián Garay",
        "nation": "Chile",
        "iso": "cl",
        "age": 36,
        "wc_experience": "2026 男足世界杯首秀 · 智利 12 年来首位世界杯主裁",
        "avg_yellow": 4.2,
        "avg_red": 0.09,
        "avg_penalty": 0.24,
        "home_win_rate": 54,
        "bias_index": 52,
        "bias_note": "智利全组执法温哥华主场战。Davies 高位压迫与卡塔尔低位犯规、东道主节奏控制是判罚焦点。",
        "tendencies": [
          "智利助理裁判组：José Retamal、Miguel Rocha",
          "第四官员 Kevin Ortega（秘鲁）· 候补边裁 Michael Orué",
          "VAR Juan Lara（智利）· AVAR Rodolpho Toski · SVAR Nicolás Gallo",
          "东道主 BC Place 次轮预计 4–5 张黄牌，对拖延时间判罚果断"
        ],
        "officials": {
          "ar1": "José Retamal (CHI)",
          "ar2": "Miguel Rocha (CHI)",
          "fourth": "Kevin Ortega (PER)",
          "var": "Juan Lara (CHI)",
          "avar": "Rodolpho Toski (BRA)",
          "svar": "Nicolás Gallo (COL)"
        }
      },
      "prediction": {
        "home_win": 50,
        "draw": 26,
        "away_win": 24,
        "score": "1-0",
        "confidence": 74,
        "xg_home": 1.62,
        "xg_away": 0.88,
        "key_factor": "东道主温哥华主场：Davies/David 高位压迫；卡塔尔首轮平瑞士低位韧性；泊松最可能 2-0/1-0",
        "score_dist": [
          {
            "score": "1-0",
            "prob": 13.3
          },
          {
            "score": "1-1",
            "prob": 11.7
          },
          {
            "score": "2-0",
            "prob": 10.8
          },
          {
            "score": "2-1",
            "prob": 9.5
          },
          {
            "score": "0-0",
            "prob": 8.2
          },
          {
            "score": "0-1",
            "prob": 7.2
          },
          {
            "score": "3-0",
            "prob": 5.8
          }
        ],
        "base_home_win": 55,
        "base_draw": 25,
        "base_away_win": 21,
        "depth_calibrated": true
      },
      "upset_alert": {
        "favorite": "Canada",
        "underdog": "Qatar",
        "favorite_iso": "CAN",
        "index": 22,
        "level": "LOW",
        "level_cn": "低",
        "cold_result_pct": 18,
        "verdict": "东道主温哥华主场优势明显——卡塔尔 5-4-1 低位仍有 16% 平局空间。",
        "tactical": "Marsch 高位+Davies 左路 vs Sánchez 5-4-1 低位。",
        "psychology": "加拿大东道主压力+必须取胜；卡塔尔首轮平瑞士有信心。",
        "historical": "无大赛交锋。",
        "factors": [
          {
            "tag": "主场",
            "impact": "强",
            "detail": "温哥华 BC Place 东道主"
          },
          {
            "tag": "高位",
            "impact": "强",
            "detail": "Marsch 压迫对卡塔尔出球是考验"
          },
          {
            "tag": "低位",
            "impact": "中",
            "detail": "卡塔尔首轮平瑞士已验证"
          }
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Jesse Marsch",
          "age": 51,
          "nation": "美国",
          "tenure": "2024年—",
          "wc_exp": "2026 带队 · 欧冠执教经验",
          "style_tags": [
            "4-3-3",
            "高位",
            "Davies 宽度",
            "体能"
          ],
          "formation_pref": "4-3-3 · 高位压迫",
          "style_summary": "东道主温哥华主场，首轮 1-1 波黑。对卡塔尔必须取胜，预计全场压制+Davies 左路宽度。",
          "subs": {
            "timing": "首换 60–65 分钟",
            "pattern": "高位体能轮换",
            "avg_first_sub": "62'",
            "note": "主场气势"
          },
          "when_leading": {
            "label": "继续压迫",
            "detail": "1 球领先：维持高位。"
          },
          "when_trailing": {
            "label": "堆边锋",
            "detail": "先丢球：55' 加码。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "对瑞士会开放。"
          },
          "vs_weak": {
            "label": "对弱队：不留余地",
            "detail": "对卡塔尔预计压制。"
          },
          "tournament": "东道主压力+欧冠经验，Davies 是爆点。",
          "traits": [
            "高位",
            "Davies 宽度",
            "主场",
            "必须抢分"
          ],
          "match_note": "温哥华主场高位——Davies 左路+压迫；卡塔尔低位需耐心破局。"
        },
        "away": {
          "name": "Félix Sánchez",
          "age": 49,
          "nation": "西班牙",
          "tenure": "2023年—",
          "wc_exp": "2022 带队亚洲杯冠军",
          "style_tags": [
            "4-2-3-1",
            "低位",
            "转换",
            "纪律"
          ],
          "formation_pref": "4-2-3-1 · 低位",
          "style_summary": "首轮 1-1 瑞士，防守纪律尚可。对加拿大客场（温哥华）预计 5-4-1 低位+反击偷分。",
          "subs": {
            "timing": "首换 70 分钟+",
            "pattern": "换人偏晚",
            "avg_first_sub": "72'",
            "note": "弱队体能优先"
          },
          "when_leading": {
            "label": "5-4-1 铁桶",
            "detail": "若意外领先：立即退守。"
          },
          "when_trailing": {
            "label": "维持低位",
            "detail": "unlikely 大举压上。"
          },
          "vs_strong": {
            "label": "对强队：龟缩",
            "detail": "对加拿大教科书弱队踢法。"
          },
          "vs_weak": {
            "label": "对弱队：压上",
            "detail": "对波黑会相对开放。"
          },
          "tournament": "亚洲杯冠军经验，世界杯舞台仍偏保守。",
          "traits": [
            "低位",
            "纪律",
            "转换",
            "客场弱势"
          ],
          "match_note": "5-4-1 低位+反击；守 0-1 可接受，定位球是唯一威胁。"
        }
      },
      "weather": {
        "temp": 18,
        "humidity": 70,
        "rain_chance": 40,
        "condition_cn": "温哥华凉爽多雨",
        "impact_level": "MEDIUM",
        "impact_summary": "凉爽+可能小雨——卡塔尔低位防守专注度是考验",
        "home_adapt": 86,
        "away_adapt": 74,
        "weather_factors": [
          {
            "label": "18°C · 18:00 PT 开球",
            "impact": "略利主队",
            "detail": "北京时间 6月19日 06:00"
          },
          {
            "label": "人工草",
            "impact": "中性",
            "detail": "双方均需适应"
          }
        ],
        "historical_note": "BC Place · 东道主加拿大主场 · B组第2轮"
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
          "day_summary": "己丑日——己土坐丑，土气厚重。《道德经》曰：「上善若水。」丑土当令，宜守中蓄势、厚积薄发；忌土性固执、躁进冒失。非力之大小，乃气之顺逆。",
          "hour_home": "卯时（06:00-08:00）",
          "hour_home_element": "木"
        },
        "wuxing": {
          "home": {
            "team": "Canada",
            "colors": "红+白",
            "elements": "火、金",
            "wuxing_short": "金火相涵",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 64,
            "reason": "红属火、白属金。卯时木气初升，木生火——如「天地交泰」。《道德经》「小国寡民」而东道主气运聚于主场，金火得木助而明。",
            "advantage": "卯木生火，东道主气运渐盛"
          },
          "away": {
            "team": "Qatar",
            "colors": "枣红+白",
            "elements": "火、金",
            "wuxing_short": "火金内敛",
            "verdict": "中性偏逆",
            "verdict_color": "#C8A96E",
            "compat": 46,
            "reason": "枣红属火、白属金。火金相涵但己丑土日厚重，卯木泄火气——如「火在木上」，宜守不宜攻。",
            "disadvantage": "气运偏守，低位可延一时"
          },
          "summary": "五行裁定：卯木生火利东道主；卡塔尔火金内敛——气运偏逆，宜守"
        },
        "hexagram": {
          "name": "地天泰",
          "symbol": "☷☰",
          "number": 11,
          "upper": "坤地",
          "lower": "乾天",
          "quote": "《周易·泰卦》：「小往大来，吉亨。」",
          "general": "泰卦——天地交泰，小往大来；顺时者亨通，忌骄泰致否。",
          "advantage_team": "Canada",
          "disadvantage_team": "Qatar",
          "hexagram_analysis": "泰卦「天地交而万物通」：卯时木气助火，上下气运各有一段——坤地承天，前半程交泰，后段气泄再动。",
          "match_nature": "小往大来 · 东道主顺时",
          "yellow_card_risk": "中",
          "yellow_card_reason": "泰卦主通泰非粗野；高位压迫致战术犯规，预计中等黄牌。",
          "scenarios": [
            {
              "icon": "☯",
              "label": "气运性质",
              "text": "卯木生火，天地交泰——顺时者「吉亨」"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 18-32 分钟（泰卦「小往大来」）及第 62-78 分钟（坤地承天、后段气再动）"
            },
            {
              "icon": "🟨",
              "label": "纪律",
              "text": "泰主通泰，黄牌来自压迫阻截"
            }
          ],
          "early_goal": {
            "scenario": "若加拿大先进球",
            "prediction": "泰象全现——卯木助火，追加窗口在 22-38 分钟；忌「泰」极生否。",
            "favors": "Canada",
            "favors_prob": 64
          },
          "no_early_goal": {
            "scenario": "若前 25 分钟无进球",
            "prediction": "卯木主静，气运蓄势；30-45 分钟为第一次破局窗口。",
            "favors": "Canada",
            "favors_prob": 58
          },
          "away_goal": {
            "scenario": "若卡塔尔偷袭破门",
            "prediction": "泰遭逆——火金守中偶可惊雷；主队需木火相生耐心反扑，55' 后气运回。",
            "favors": "Canada",
            "favors_prob": 56
          }
        },
        "goal_peak": {
          "scope": "both_halves",
          "title": "上下半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 18,
              "end_min": 32,
              "hex_reason": "泰卦「小往大来」，天地初交",
              "time_reason": "卯时木气生火，气由静转亨"
            },
            {
              "label": "下半场",
              "half": "second",
              "start_min": 62,
              "end_min": 78,
              "hex_reason": "坤地承天，后段气泄再动",
              "time_reason": "卯木后段仍助火"
            }
          ],
          "periods": "第 18-32 分钟 · 第 62-78 分钟",
          "rationale": "卯时木气初升，己丑土日宜守中；泰卦「小往大来」明示上下两段气运——初交段破局，后段坤地承天再动。卦象双段清晰，故示双窗。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 74,
        "away_score": 38,
        "mystic_verdict": "加拿大卯木生火，卡塔尔火金守中——天地交泰，东道主顺时者「吉亨」。",
        "model_bridge": "xG 1.62-0.88 碾压，温哥华主场+Davies 左路是核心。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "depth_calibration": {
        "tier_home": 1,
        "tier_label": "Canada 被看好 · 净胜约 1 球",
        "implied_tier": 0.25,
        "tier_gap": 0.75,
        "signal": "blocker_inflate",
        "signal_cn": "预期偏高",
        "signal_color": "#D95F6A",
        "signal_desc": "赛前舆论显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
        "blocker_spread_note": "说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "public_lean_cn": "舆论倾向 Canada（约 68%）",
        "analysis": "东道主加拿大温哥华主场；卡塔尔首轮平瑞士有韧性。模型看好加拿大但需防闷战。 赛前净胜参考高于 xG 隐含（+0.75），且净胜 1 球占 25.5%——热门净胜拉开偏难。 说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-0",
              "prob": 13.4
            },
            {
              "score": "1-1",
              "prob": 11.8
            },
            {
              "score": "2-0",
              "prob": 10.8
            }
          ],
          "one_goal_win_pct": 25.5,
          "two_plus_win_pct": 29.1,
          "full_cover_pct": 29.1,
          "half_lose_pct": 25.5,
          "fav_cover_ev": -0.164,
          "dog_cover_ev": 0.164,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.5,
          "over_2_5_pct": 45.3,
          "over_3_pct": 23.7,
          "totals_lean_cn": "2.5 球参考接近均衡；3 球参考偏少",
          "margin_risk_note": "净胜 1 球概率 25.5%：参考净胜 1 球时，仅赢一球与拉开差距须分开看",
          "push_pct": 25.5
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.5,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 45.3,
          "under_pct": 54.7,
          "signal": "high_line",
          "signal_cn": "进球参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。",
          "public_over_pct": 54,
          "public_lean_cn": "舆论对总进球看法较分散",
          "index_note": "多/少进球两侧参考接近均衡",
          "totals_odds": null,
          "rational_cn": "模型在 总进球约 2.5 个 附近均衡",
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
          "home_win": 50,
          "draw": 26,
          "away_win": 24
        },
        "display_summary": {
          "fav_name": "Canada",
          "expected_total_goals": 2.23,
          "poisson_fav_win_pct": 52.8,
          "small_lead_pct": 26.2,
          "small_example_score": "1-0",
          "small_example_pct": 15.5,
          "big_cover_pct": 26.6,
          "big_example_score": "2-0",
          "big_example_pct": 11.3,
          "win_shape": {
            "fav_name": "Canada",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以拉开·控局为主（拉开 · 控局 31.8%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 15.5,
                "pct": 29.2
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 10.8,
                "pct": 20.4
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 16.8,
                "pct": 31.8
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 9.8,
                "pct": 18.6
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 49.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 31.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 18.6
              }
            ],
            "fav_win_pct": 50
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 40 分",
            "first_goal_wait": 40,
            "fast_pct": 52.8,
            "moderate_pct": 14.8,
            "slow_pct": 32.5,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 52.8
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 32.5
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Canada 暂无重要伤停 · Qatar 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "继续压迫 / 5-4-1 铁桶（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "凉爽+可能小雨——卡塔尔低位防守专注度是考验"
            }
          ],
          "xg_context": {
            "baseline_home": 1.62,
            "baseline_away": 0.88,
            "adjusted_home": 1.46,
            "adjusted_away": 0.79,
            "note": "基准 xG 1.62–0.88 → 调整后 1.46–0.79"
          },
          "calibration": {
            "signal_cn": "预期偏高",
            "signal_color": "#D95F6A",
            "signal_desc": "赛前舆论显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。",
            "tier_gap": 0.75,
            "implied_tier_label": "Canada 被看好 · 净胜约 0.25 球",
            "market_tier_label": "Canada 被看好 · 净胜约 1 球",
            "summary_cn": "与模型 xG 对照：预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75 · 热门仅净胜 1 球概率 26.2%"
          },
          "win_outlook": {
            "fav_name": "Canada",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 49.6
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 31.8
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 18.6
              }
            ],
            "margin_line_cn": "Canada · 赛前净胜参考 ≥1–2 球",
            "margin_meet_pct": 26.6,
            "margin_fail_pct": 26.2,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球约 2.5 个",
            "totals_high_pct": 38.8,
            "totals_low_pct": 61.2,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 26.7,
            "win_margin2_low_total_pct": 11.3,
            "win_margin2_high_total_pct": 15.3,
            "readout_cn": "取胜约 50%；若取胜，以「险胜收工」为主（49.6%）。 对着赛前净胜参考，差距达标约 26.6%；对着 总进球约 2.5 个，总进球偏高一侧约 38.8%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-0",
              "pct": 15.5
            },
            {
              "score": "1-1",
              "pct": 12.2
            },
            {
              "score": "2-0",
              "pct": 11.3
            }
          ],
          "totals_view": {
            "expected_total": 2.2,
            "fair_line": 2.25,
            "line_gap": 0.25,
            "over_pct": 38.8,
            "summary_cn": "预期约 2.2 个总进球 · 赛前参考进球参考偏高 · 模型略偏少进球（约 61.2%）"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Canada",
              "first_goal_pct": 64.9,
              "start_score": "1-0",
              "fav_name": "Canada",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 95.5,
              "small_lead_pct": 30.3,
              "big_lead_pct": 51.6,
              "fav_win_pct": 81.9,
              "fav_draw_pct": 13.6,
              "fav_lose_pct": 4.5,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Canada 保持胜果（净胜≥1）",
                  "pct": 81.9
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 13.6
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 4.5
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
              "big_delta": 25,
              "small_delta": 4.1,
              "narrative": "Canada 先破门（已 1-0） → 「继续压迫」；Qatar 「维持低位」。领先方继续进攻，仍有较大空间扩大比分。",
              "live_outlook": {
                "fav_name": "Canada",
                "state_label": "Canada 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 49.6
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 31.8
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 18.6
                  }
                ],
                "margin_line_cn": "Canada · 赛前净胜参考 ≥1–2 球",
                "margin_meet_pct": 51.6,
                "margin_fail_pct": 30.3,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球约 2.5 个",
                "totals_high_pct": 54.5,
                "totals_low_pct": 45.5,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 35.9,
                "win_margin2_low_total_pct": 19.8,
                "win_margin2_high_total_pct": 31.8,
                "readout_cn": "Canada 已 1-0 领先：仍取胜约 81.9%；对着赛前 总进球约 2.5 个，总进球偏高一侧约 54.5%。 常见收尾如 2-0（净胜达标、总进球仍偏低）。"
              }
            },
            {
              "side": "away",
              "team": "Qatar",
              "first_goal_pct": 35.1,
              "start_score": "0-1",
              "fav_name": "Canada",
              "scorer_is_fav": false,
              "expected_key": "fav_recover",
              "fav_recover_pct": 56.1,
              "small_lead_pct": 17.2,
              "big_lead_pct": 10,
              "fav_win_pct": 27.2,
              "fav_draw_pct": 28.9,
              "fav_lose_pct": 43.9,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Canada 追平（平局）",
                  "pct": 28.9
                },
                {
                  "key": "win1",
                  "label": "Canada 净胜1球翻盘（如 2-1）",
                  "pct": 17.2
                },
                {
                  "key": "win2",
                  "label": "Canada 净胜≥2球翻盘（如 3-1）",
                  "pct": 10
                },
                {
                  "key": "upset_hold",
                  "label": "Qatar 保持胜果至终场",
                  "pct": 43.9
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
              "big_delta": -16.6,
              "small_delta": -9,
              "narrative": "Qatar 先破门（已 0-1） → 「5-4-1 铁桶」；Canada 「堆边锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预期约 2.2 个总进球 · 赛前参考进球参考偏高 · 模型略偏少进球（约 61.2%）",
              "totals_line_cn": "总进球约 2.5 个",
              "totals_high_pct": 38.8,
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
              "readout_cn": "Canada · 低位反击 · 进球偏少。进球预期不高，小比分与平局权重上升。"
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
        "public_summary_note": "【推演概要】Canada · 低位反击 · 进球偏少。 · 与模型 xG 对照：预期偏高 · 赛前净胜看法高于 xG 隐含约 0.75 · 热门仅净胜 1 球概率 26.2%（模型微调：主胜 -4% · 平 +1% · 客 +3%）"
      },
      "group_context": {
        "group": "B",
        "label": "B组 · 第1轮（卡塔尔-瑞士已赛）",
        "matchday": 2,
        "standings": [
          {
            "team": "Switzerland",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Qatar",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Canada",
            "pts": 1,
            "p": 1,
            "w": 0,
            "d": 1,
            "l": 0,
            "gf": 1,
            "ga": 1
          },
          {
            "team": "Bosnia and Herzegovina",
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
          "team": "Canada",
          "rank": 3,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 · 对阵 A 组第 2",
          "if_2nd": "32强 · 对阵 A 组第 1",
          "if_3rd": "若列小组第 3，需与 A/E/F/H/I/J/K/L 等组第 3 比净胜球/进球"
        },
        "away": {
          "team": "Qatar",
          "rank": 2,
          "pts": 1,
          "played": 1,
          "if_1st": "32强 · 对阵 A 组第 2",
          "if_2nd": "32强 · 对阵 A 组第 1",
          "if_3rd": "若列小组第 3，需与 A/E/F/H/I/J/K/L 等组第 3 比净胜球/进球"
        },
        "cross_group_notes": [
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "E 组 Germany 3 分领跑",
          "F 组 Sweden 3 分领跑"
        ],
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "暂无明确控分动机；出线路径仍取决于后续直接对话。"
        },
        "knockout_note": "48 队制：12 组前 2 + 8 个最佳第 3 进入 32 强；末轮可能出现算分/控分战术。",
        "scenarios": [
          "Canada 若取胜：积分 4，B 组排名有望上升；过早预测 32 强对手仍不可靠。",
          "Qatar 若取胜：积分 4，客场抢分将改变 B 组格局。",
          "平局：双方各 +1 分；在 G 组四队同积 1 分，形势极度开放；H 组四队同积 1 分，形势极度开放；E 组 Germany 3 分领跑；F 组 Sweden 3 分领跑 背景下，第 2 轮直接对话权重上升。"
        ]
      }
    },
    {
      "id": "m28",
      "group": "A",
      "matchday": 2,
      "date": "2026-06-18",
      "time": "21:00",
      "time_local": "21:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "09:00",
      "date_beijing": "6月19日",
      "time_beijing_full": "北京时间 6月19日 09:00",
      "venue": "Estadio Akron",
      "city": "Guadalajara, Mexico",
      "note": "A组榜首战 · 墨西哥 vs 韩国 · 瓜达拉哈拉",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。",
        "predicted": {
          "formation": "4-2-3-1 / 4-2-3-1",
          "home": "Ochoa; Arteaga, Montes, Vasquez; Álvarez, Chávez; Lozano, Jiménez, Vega; Mora, Antuna",
          "away": "Jo Hyeon-woo; Kim Min-jae, Kim Young-gwon, Kim Tae-hwan; Hwang In-beom, Lee Kang-in; Son, Hwang Hee-chan, Paik; Cho Gue-sung",
          "source": "ESPN / BBC 预测 · 非官方",
          "alt": null
        }
      },
      "home": {
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
            "name": "Raúl Jiménez",
            "pos": "ST",
            "club": "Fulham",
            "stats": "首轮双响",
            "rating": 8.4,
            "desc": "支点+终结"
          },
          {
            "name": "Guillermo Ochoa",
            "pos": "GK",
            "club": "Salernitana",
            "stats": "40 岁一门",
            "rating": 7.8,
            "desc": "第六届世界杯"
          },
          {
            "name": "Hirving Lozano",
            "pos": "RW",
            "club": "PSV",
            "stats": "边路速度",
            "rating": 8,
            "desc": "宽度+内切"
          }
        ],
        "injuries": [
          {
            "player": "Raúl Jiménez",
            "status": "FIT",
            "note": "首轮梅开二度，状态火热",
            "confirmed": true
          },
          {
            "player": "Luis Chávez",
            "status": "DOUBT",
            "note": "康复管理中，次轮出场存疑",
            "confirmed": false
          },
          {
            "player": "Guillermo Ochoa",
            "status": "FIT",
            "note": "40 岁一门，第六届世界杯",
            "confirmed": true
          }
        ],
        "rumors": [
          "Jiménez 梅开二度后 Aguirre 称「对韩国是真正考验」",
          "瓜达拉哈拉夜场主场气势"
        ],
        "star": {
          "name": "Raúl Jiménez",
          "pos": "ST",
          "desc": "A组榜首战核心",
          "rating": 8.4
        }
      },
      "away": {
        "name": "South Korea",
        "iso": "kr",
        "flag": "",
        "fifa_rank": 23,
        "rating": 76,
        "form": [
          "W",
          "W",
          "W",
          "D",
          "W"
        ],
        "coach": "Hong Myung-bo",
        "stars": [
          {
            "name": "孙兴慜 Son Heung-min",
            "pos": "LW",
            "club": "LAFC",
            "stats": "56' 远射",
            "rating": 8.8,
            "desc": "A组最大威胁"
          },
          {
            "name": "李康仁 Lee Kang-in",
            "pos": "CAM",
            "club": "PSG",
            "stats": "71' 远射",
            "rating": 8.4,
            "desc": "肋部+远射"
          },
          {
            "name": "Kim Min-jae",
            "pos": "CB",
            "club": "Bayern Munich",
            "stats": "防线领袖",
            "rating": 8.2,
            "desc": "防空+出球"
          }
        ],
        "injuries": [
          {
            "player": "孙兴慜 Son Heung-min",
            "status": "FIT",
            "note": "LAFC 前锋，A组最大威胁",
            "confirmed": true
          },
          {
            "player": "李康仁",
            "status": "FIT",
            "note": "巴黎中场，首轮远射破门",
            "confirmed": true
          }
        ],
        "rumors": [
          "洪明甫：「孙兴慜被限制时李康仁远射是 B 计划」",
          "2018 友谊赛 2-0 胜墨西哥是心理参考"
        ],
        "star": {
          "name": "孙兴慜 Son Heung-min",
          "pos": "LW",
          "desc": "对墨西哥稳守反击",
          "rating": 8.8
        }
      },
      "h2h": {
        "home_wins": 1,
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
        "note": "2018 友谊赛韩国 2-0 胜"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-18",
        "name": "Gustavo Tejera",
        "nation": "Uruguay",
        "iso": "uy",
        "age": 37,
        "wc_experience": "2018 FIFA 国际裁判 · U-17/U-20 世界杯 · 2026 成年世界杯首秀",
        "avg_yellow": 5.1,
        "avg_red": 0.13,
        "avg_penalty": 0.27,
        "home_win_rate": 52,
        "bias_index": 53,
        "bias_note": "乌拉圭名哨，执法风格偏严（生涯场均约 5 黄）。孙兴慜/Jiménez 对位与墨西哥主场 A 组榜首战纪律是核心变量。",
        "tendencies": [
          "乌拉圭助理裁判组：Carlos Barreiro、Nicolás Tarán",
          "第四官员 Andrés Rojas（哥伦比亚）· 候补边裁 Alexander Guzmán",
          "开幕战墨西哥战已有 3 红，本场预计 5–7 张黄牌，重复犯规容忍度低",
          "Tejera 世界杯首秀即执法榜首对话，点球与禁区内拉扯尺度受关注"
        ],
        "officials": {
          "ar1": "Carlos Barreiro (URU)",
          "ar2": "Nicolás Tarán (URU)",
          "fourth": "Andrés Rojas (COL)"
        }
      },
      "prediction": {
        "home_win": 42,
        "draw": 25,
        "away_win": 33,
        "score": "1-1",
        "confidence": 68,
        "xg_home": 1.52,
        "xg_away": 1.32,
        "key_factor": "A组榜首对话：Jiménez 状态 vs 孙兴慜；瓜达拉哈拉夜场主场气势；泊松最可能 2-1/1-1",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 11.7
          },
          {
            "score": "2-1",
            "prob": 8.9
          },
          {
            "score": "1-0",
            "prob": 8.9
          },
          {
            "score": "1-2",
            "prob": 7.7
          },
          {
            "score": "0-1",
            "prob": 7.7
          },
          {
            "score": "2-0",
            "prob": 6.7
          },
          {
            "score": "2-2",
            "prob": 5.9
          }
        ],
        "base_home_win": 42,
        "base_draw": 25,
        "base_away_win": 33,
        "depth_calibrated": true
      },
      "upset_alert": {
        "favorite": "Mexico",
        "underdog": "South Korea",
        "favorite_iso": "MEX",
        "index": 35,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 30,
        "verdict": "A组榜首对话势均力敌——孙兴慜+李康仁远射是韩国最大变数，平局约 28%。",
        "tactical": "Aguirre 4-2-3-1 主场宽度 vs 洪明甫 4-2-3-1 稳守反击+孙兴慜 内切。",
        "psychology": "墨西哥主场夜场气势；韩国 2018 友谊赛 2-0 胜是心理参考。",
        "historical": "2018 友谊赛韩国 2-0 胜墨西哥。",
        "factors": [
          {
            "tag": "球星",
            "impact": "强",
            "detail": "Jiménez vs 孙兴慜"
          },
          {
            "tag": "主场",
            "impact": "强",
            "detail": "瓜达拉哈拉夜场"
          },
          {
            "tag": "远射",
            "impact": "中",
            "detail": "李康仁 B 计划"
          }
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Javier Aguirre",
          "age": 66,
          "nation": "墨西哥",
          "tenure": "2024年—",
          "wc_exp": "三届世界杯带队",
          "style_tags": [
            "4-2-3-1",
            "Jiménez 核心",
            "主场",
            "宽度"
          ],
          "formation_pref": "4-2-3-1 · Jiménez 支点",
          "style_summary": "首轮 2-0 南非，Jiménez 梅开二度。对韩国 A 组榜首对话，瓜达拉哈拉夜场必须抢 3 分。",
          "subs": {
            "timing": "首换 60–65 分钟",
            "pattern": "Jiménez 70' 可能换下",
            "avg_first_sub": "62'",
            "note": "大赛轮换"
          },
          "when_leading": {
            "label": "控节奏",
            "detail": "1 球领先：维持宽度。"
          },
          "when_trailing": {
            "label": "堆前锋",
            "detail": "先丢球：55' 加码。"
          },
          "vs_strong": {
            "label": "对强队：对攻",
            "detail": "对韩国孙兴慜是最大威胁。"
          },
          "vs_weak": {
            "label": "对弱队：不留余地",
            "detail": "对南非已验证。"
          },
          "tournament": "三届世界杯经验，主场气势是资产。",
          "traits": [
            "Jiménez 状态",
            "主场",
            "Ochoa 防线",
            "大赛经验"
          ],
          "match_note": "瓜达拉哈拉夜场——Jiménez 支点+宽度；孙兴慜 内切是最大威胁。"
        },
        "away": {
          "name": "Hong Myung-bo",
          "age": 55,
          "nation": "韩国",
          "tenure": "2024年—",
          "wc_exp": "2002 队长 · 2026 带队",
          "style_tags": [
            "4-2-3-1",
            "孙兴慜 核心",
            "转换",
            "远射"
          ],
          "formation_pref": "4-2-3-1 · 孙兴慜 左翼",
          "style_summary": "首轮 2-1 捷克，孙兴慜+李康仁远射破局。对墨西哥 A 组榜首对话，预计稳守反击+孙兴慜 内切。",
          "subs": {
            "timing": "首换 65–70 分钟",
            "pattern": "孙兴慜 打满",
            "avg_first_sub": "68'",
            "note": "核心保护"
          },
          "when_leading": {
            "label": "4-5-1 收缩",
            "detail": "若意外领先：退守+孙兴慜 反击。"
          },
          "when_trailing": {
            "label": "堆中场",
            "detail": "先丢球：60' 换进攻手。"
          },
          "vs_strong": {
            "label": "对强队：稳守反击",
            "detail": "对墨西哥低位+孙兴慜 速度。"
          },
          "vs_weak": {
            "label": "对弱队：控球压制",
            "detail": "对南非会压上。"
          },
          "tournament": "2002 四强队长，大赛心理是资产。",
          "traits": [
            "孙兴慜 依赖",
            "远射",
            "转换",
            "大赛 DNA"
          ],
          "match_note": "稳守反击+孙兴慜 速度；2018 友谊赛 2-0 胜墨西哥是心理参考。"
        }
      },
      "weather": {
        "temp": 22,
        "humidity": 58,
        "rain_chance": 25,
        "condition_cn": "瓜达拉哈拉夜场，海拔1566m",
        "impact_level": "MEDIUM",
        "impact_summary": "海拔变量中等——墨西哥主场气势+夜场氛围",
        "home_adapt": 88,
        "away_adapt": 82,
        "weather_factors": [
          {
            "label": "22°C · 21:00 本地 开球",
            "impact": "夜场利好",
            "detail": "北京时间 6月19日 09:00"
          },
          {
            "label": "海拔 1566m",
            "impact": "双方已适应",
            "detail": "韩国首轮同场地作战"
          }
        ],
        "historical_note": "Estadio Akron · A组榜首战 · 墨西哥 vs 韩国"
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
          "day_summary": "己丑日——己土坐丑，土气厚重。《道德经》曰：「上善若水。」丑土当令，宜守中蓄势、厚积薄发；忌土性固执、躁进冒失。非力之大小，乃气之顺逆。",
          "hour_home": "巳时（09:00-11:00）",
          "hour_home_element": "火"
        },
        "wuxing": {
          "home": {
            "team": "Mexico",
            "colors": "绿+白+红",
            "elements": "木、金、火",
            "wuxing_short": "火土相杂",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 54,
            "reason": "绿属木、白属金、红属火。巳时火气当令，木生火、火土相杂——如「天与火同」，主场夜场气运聚于火。",
            "advantage": "巳火助红绿，主场气势可延"
          },
          "away": {
            "team": "South Korea",
            "colors": "红+蓝+白",
            "elements": "火、水、金",
            "wuxing_short": "金水相济",
            "verdict": "中性偏利",
            "verdict_color": "#C8A96E",
            "compat": 56,
            "reason": "红属火、蓝属水、白属金。巳时火旺，金水相济如「火在水上」——气运相近，远射为暗流。",
            "advantage": "巳火不专主一方，金水可济"
          },
          "summary": "五行裁定：巳火当令双方皆沾火气；墨西哥主场略占「同人」之势，韩国金水相济——气运近而不齐"
        },
        "hexagram": {
          "name": "天火同人",
          "symbol": "☰☲",
          "number": 13,
          "upper": "乾天",
          "lower": "离火",
          "quote": "《周易·同人卦》：「同人于野，亨。」",
          "general": "同人卦——天与火同，二人同心；利对攻开放之局，忌各怀心思。",
          "advantage_team": "Mexico",
          "disadvantage_team": "South Korea",
          "hexagram_analysis": "同人「柔得位得中」：巳火当令，离火在下、乾天在上，上下气运分明——前半程同心破局，后段火金相克气转。",
          "match_nature": "同人于野 · 胶着对攻",
          "yellow_card_risk": "中",
          "yellow_card_reason": "同人主开放非粗野；对攻节奏下战术犯规，预计中等黄牌。",
          "scenarios": [
            {
              "icon": "☯",
              "label": "气运性质",
              "text": "巳火当令，双方火气相近——气运近而不齐"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 20-36 分钟（同人「于野」、火气初盛）及第 68-84 分钟（离火后段、乾天再动）"
            },
            {
              "icon": "🟨",
              "label": "纪律",
              "text": "对攻局，黄牌来自 tactical 阻截"
            }
          ],
          "early_goal": {
            "scenario": "若墨西哥先进球",
            "prediction": "同人「于野亨」——巳火助势，追加窗口在 25-40 分钟；忌领先后「同人」散。",
            "favors": "Mexico",
            "favors_prob": 54
          },
          "no_early_goal": {
            "scenario": "若前 30 分钟无进球",
            "prediction": "巳火主旺，0-0 仍可期；下半场 40-55 分钟第一次破局窗口升。",
            "favors": "Draw",
            "favors_prob": 50
          },
          "away_goal": {
            "scenario": "若韩国先进球",
            "prediction": "同人逆象——金水相济反扑；墨西哥需火土相杂耐心，65' 后主场气运回。",
            "favors": "South Korea",
            "favors_prob": 52
          }
        },
        "goal_peak": {
          "scope": "both_halves",
          "title": "上下半场进球高峰 · 娱乐预测",
          "windows": [
            {
              "label": "上半场",
              "half": "first",
              "start_min": 20,
              "end_min": 36,
              "hex_reason": "同人「于野」，离火初盛",
              "time_reason": "巳时火气当令，气运易涌"
            },
            {
              "label": "下半场",
              "half": "second",
              "start_min": 68,
              "end_min": 84,
              "hex_reason": "乾天再动，后段火金相克",
              "time_reason": "巳火后段仍旺，气由同转变"
            }
          ],
          "periods": "第 20-36 分钟 · 第 68-84 分钟",
          "rationale": "巳时火气当令，同人卦「于野亨」明示对攻两段气运——初段同心破局，后段乾天再动。卦象双段清晰，故示上下双窗。",
          "note": "娱乐解读 · 纯玄学参考 · 非赛程或竞技推演",
          "logic_hint": "依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。"
        },
        "home_score": 62,
        "away_score": 52,
        "mystic_verdict": "墨西哥火土相杂，韩国金水相济——巳火当令，气运相近，平局空间不可低估。",
        "model_bridge": "xG 1.52-1.32 势均力敌，孙兴慜+李康仁远射是韩国最大变数。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "depth_calibration": {
        "tier_home": 0.25,
        "tier_label": "Mexico 被看好 · 净胜约 0.25 球",
        "implied_tier": 0,
        "tier_gap": 0.25,
        "signal": "neutral",
        "signal_cn": "均衡",
        "signal_color": "#7BB8D4",
        "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
        "blocker_spread_note": "",
        "public_lean_cn": "舆论倾向 Mexico（约 52%）",
        "analysis": "A组榜首对话：墨西哥 Jiménez 状态 vs 孙兴慜。瓜达拉哈拉夜场，模型略看好墨西哥主场。",
        "spread_cover": {
          "top3_scores": [
            {
              "score": "1-1",
              "prob": 11.8
            },
            {
              "score": "2-1",
              "prob": 9
            },
            {
              "score": "1-0",
              "prob": 8.9
            }
          ],
          "one_goal_win_pct": 21.5,
          "two_plus_win_pct": 20.4,
          "full_cover_pct": 20.4,
          "half_lose_pct": 21.5,
          "fav_cover_ev": -0.484,
          "dog_cover_ev": 0.485,
          "rational_spread_cn": "客队 守住差距概率略高",
          "total_xg": 2.84,
          "over_2_5_pct": 53.7,
          "over_3_pct": 31.2,
          "totals_lean_cn": "2.5 球参考接近均衡；3 球参考偏少",
          "margin_risk_note": "净胜 1 球概率 21.5%：常见「赢球但净胜仅 1 球」",
          "push_pct": null
        },
        "spread_odds": null,
        "spread_alt": null,
        "totals_analysis": {
          "market_line": 2.5,
          "line_label": "总进球约 2.5 个",
          "implied_xg_total": 2.84,
          "fair_line": 2,
          "line_gap": 0.5,
          "over_pct": 53.7,
          "under_pct": 46.3,
          "signal": "high_line",
          "signal_cn": "进球参考偏高",
          "signal_color": "#C8A96E",
          "signal_desc": "赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。",
          "public_over_pct": 58,
          "public_lean_cn": "舆论略看好多进球（约 58%）",
          "index_note": "多进球侧参考权重相对更高",
          "totals_odds": null,
          "rational_cn": "模型在 总进球约 2.5 个 附近均衡；进球参考偏高且舆论更看好多进球场面",
          "score_link_cn": "小比分（1-0/1-1）偏少进球 · 2-0/2-1 居中 · 3 球+ 偏多进球"
        },
        "totals_line": 2.5,
        "applied_delta": {
          "home_win": 0,
          "draw": 0,
          "away_win": 0
        },
        "adjustment_note": "模型微调：主胜 +0% · 平 +0% · 客 +0%",
        "adjusted_probs": {
          "home_win": 42,
          "draw": 25,
          "away_win": 33
        },
        "display_summary": {
          "fav_name": "Mexico",
          "expected_total_goals": 2.6,
          "poisson_fav_win_pct": 40.1,
          "small_lead_pct": 21.6,
          "small_example_score": "1-0",
          "small_example_pct": 10.1,
          "big_cover_pct": 18.5,
          "big_example_score": "2-0",
          "big_example_pct": 7,
          "win_shape": {
            "fav_name": "Mexico",
            "note": "以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。",
            "lead_cn": "取胜时以险胜·开放为主（险胜 · 开放 28.6%）",
            "shapes": [
              {
                "key": "narrow_low",
                "label": "险胜 · 控局",
                "example": "如 1-0",
                "field_pct": 10.1,
                "pct": 25.2
              },
              {
                "key": "narrow_open",
                "label": "险胜 · 开放",
                "example": "如 2-1",
                "field_pct": 11.5,
                "pct": 28.6
              },
              {
                "key": "comfort_low",
                "label": "拉开 · 控局",
                "example": "如 2-0",
                "field_pct": 10.2,
                "pct": 25.4
              },
              {
                "key": "comfort_open",
                "label": "拉开 · 开放",
                "example": "如 3-1+",
                "field_pct": 8.3,
                "pct": 20.8
              }
            ],
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 53.8
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 25.4
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.8
              }
            ],
            "fav_win_pct": 42
          },
          "excitement": {
            "label_cn": "中速开局",
            "label_key": "moderate",
            "label_color": "#C8A96E",
            "sub_cn": "预期首球等待约 34.4 分",
            "first_goal_wait": 34.4,
            "fast_pct": 58.2,
            "moderate_pct": 14.8,
            "slow_pct": 27,
            "tiers": [
              {
                "key": "fast",
                "label": "前 30 分内首球",
                "pct": 58.2
              },
              {
                "key": "moderate",
                "label": "30–45 分首球",
                "pct": 14.8
              },
              {
                "key": "slow",
                "label": "45 分后首球",
                "pct": 27
              }
            ]
          },
          "baseline_label": "全场预期（含伤病·气候）",
          "context_factors": [
            {
              "icon": "🏥",
              "label": "伤病",
              "note": "Mexico：Luis Chávez 存疑 · South Korea 暂无重要伤停"
            },
            {
              "icon": "👔",
              "label": "教练风格",
              "note": "控节奏 / 4-5-1 收缩（领先时）"
            },
            {
              "icon": "🌤️",
              "label": "气候",
              "note": "海拔变量中等——墨西哥主场气势+夜场氛围"
            }
          ],
          "xg_context": {
            "baseline_home": 1.52,
            "baseline_away": 1.32,
            "adjusted_home": 1.38,
            "adjusted_away": 1.24,
            "note": "基准 xG 1.52–1.32 → 调整后 1.38–1.24"
          },
          "calibration": {
            "signal_cn": "均衡",
            "signal_color": "#7BB8D4",
            "signal_desc": "赛前舆论与模型评估接近，未做方向性微调。",
            "tier_gap": 0.25,
            "implied_tier_label": "势均力敌",
            "market_tier_label": "Mexico 被看好 · 净胜约 0.25 球",
            "summary_cn": "与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25） · 热门仅净胜 1 球概率 21.6%"
          },
          "win_outlook": {
            "fav_name": "Mexico",
            "state_label": null,
            "paths": [
              {
                "key": "narrow",
                "label": "险胜收工",
                "example": "如 1-0、2-1",
                "pct": 53.8
              },
              {
                "key": "clean",
                "label": "零封拉开",
                "example": "如 2-0、3-0",
                "pct": 25.4
              },
              {
                "key": "open",
                "label": "开放拉开",
                "example": "如 3-1+",
                "pct": 20.8
              }
            ],
            "margin_line_cn": "Mexico · 赛前净胜参考 ≥1 球",
            "margin_meet_pct": 18.5,
            "margin_fail_pct": 21.6,
            "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
            "totals_line": 2.5,
            "totals_line_cn": "总进球约 2.5 个",
            "totals_high_pct": 48.4,
            "totals_low_pct": 51.6,
            "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
            "win_low_total_pct": 17.1,
            "win_margin2_low_total_pct": 7,
            "win_margin2_high_total_pct": 11.5,
            "readout_cn": "取胜约 42%；若取胜，以「险胜收工」为主（53.8%）。 对着赛前净胜参考，差距达标约 18.5%；对着 总进球约 2.5 个，总进球偏高一侧约 48.4%。"
          },
          "totals_line": 2.5,
          "score_patterns": [
            {
              "score": "1-1",
              "pct": 12.5
            },
            {
              "score": "1-0",
              "pct": 10.1
            },
            {
              "score": "0-1",
              "pct": 9.1
            }
          ],
          "totals_view": {
            "expected_total": 2.6,
            "fair_line": 2,
            "line_gap": 0.5,
            "over_pct": 48.4,
            "summary_cn": "预期约 2.6 个总进球 · 赛前参考进球参考偏高 · 模型在常见进球预期附近均衡"
          },
          "first_goal_scenarios": [
            {
              "side": "home",
              "team": "Mexico",
              "first_goal_pct": 52.7,
              "start_score": "1-0",
              "fav_name": "Mexico",
              "scorer_is_fav": true,
              "expected_key": "hold_win",
              "fav_recover_pct": 89.6,
              "small_lead_pct": 34.3,
              "big_lead_pct": 34,
              "fav_win_pct": 68.3,
              "fav_draw_pct": 21.3,
              "fav_lose_pct": 10.4,
              "outcomes": [
                {
                  "key": "hold_win",
                  "label": "Mexico 保持胜果（净胜≥1）",
                  "pct": 68.3
                },
                {
                  "key": "drawn",
                  "label": "被扳平",
                  "pct": 21.3
                },
                {
                  "key": "lost",
                  "label": "被逆转落败",
                  "pct": 10.4
                }
              ],
              "excitement": {
                "label_cn": "偏晚",
                "label_key": "slow",
                "label_color": "#7BB8D4",
                "sub_cn": "预期首球等待约 43.9 分",
                "first_goal_wait": 43.9,
                "fast_pct": 42.9,
                "moderate_pct": 14,
                "slow_pct": 43.1,
                "tiers": [
                  {
                    "key": "fast",
                    "label": "前 30 分内首球",
                    "pct": 42.9
                  },
                  {
                    "key": "moderate",
                    "label": "30–45 分首球",
                    "pct": 14
                  },
                  {
                    "key": "slow",
                    "label": "45 分后首球",
                    "pct": 43.1
                  }
                ]
              },
              "big_delta": 15.5,
              "small_delta": 12.7,
              "narrative": "Mexico 先破门（已 1-0） → 「控节奏」；South Korea 「堆中场」。领先后双方可能转入守势，比分差距不易再拉大。",
              "live_outlook": {
                "fav_name": "Mexico",
                "state_label": "Mexico 已 1-0 领先",
                "paths": [
                  {
                    "key": "narrow",
                    "label": "险胜收工",
                    "example": "如 1-0、2-1",
                    "pct": 53.8
                  },
                  {
                    "key": "clean",
                    "label": "零封拉开",
                    "example": "如 2-0、3-0",
                    "pct": 25.4
                  },
                  {
                    "key": "open",
                    "label": "开放拉开",
                    "example": "如 3-1+",
                    "pct": 20.8
                  }
                ],
                "margin_line_cn": "Mexico · 赛前净胜参考 ≥1 球",
                "margin_meet_pct": 34,
                "margin_fail_pct": 34.3,
                "margin_fail_note": "常见：仅赢 1 球（如 1-0、2-1）",
                "totals_line": 2.5,
                "totals_line_cn": "总进球约 2.5 个",
                "totals_high_pct": 50.1,
                "totals_low_pct": 49.9,
                "totals_fail_note": "常见：总进球 ≤2（如 1-0、2-0）",
                "win_low_total_pct": 34.7,
                "win_margin2_low_total_pct": 16,
                "win_margin2_high_total_pct": 18,
                "readout_cn": "Mexico 已 1-0 领先：仍取胜约 68.3%；对着赛前 总进球约 2.5 个，总进球偏高一侧约 50.1%。 常见收尾如 2-0（净胜达标、总进球仍偏低）。"
              }
            },
            {
              "side": "away",
              "team": "South Korea",
              "first_goal_pct": 47.3,
              "start_score": "0-1",
              "fav_name": "Mexico",
              "scorer_is_fav": false,
              "expected_key": "upset_hold",
              "fav_recover_pct": 45.6,
              "small_lead_pct": 13.5,
              "big_lead_pct": 7,
              "fav_win_pct": 20.5,
              "fav_draw_pct": 25.1,
              "fav_lose_pct": 54.4,
              "outcomes": [
                {
                  "key": "draw",
                  "label": "Mexico 追平（平局）",
                  "pct": 25.1
                },
                {
                  "key": "win1",
                  "label": "Mexico 净胜1球翻盘（如 2-1）",
                  "pct": 13.5
                },
                {
                  "key": "win2",
                  "label": "Mexico 净胜≥2球翻盘（如 3-1）",
                  "pct": 7
                },
                {
                  "key": "upset_hold",
                  "label": "South Korea 保持胜果至终场",
                  "pct": 54.4
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
              "big_delta": -11.5,
              "small_delta": -8.1,
              "narrative": "South Korea 先破门（已 0-1） → 「4-5-1 收缩」；Mexico 「堆前锋」。领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门。",
              "live_outlook": null
            }
          ],
          "match_preview": {
            "morphology": {
              "totals_summary": "预期约 2.6 个总进球 · 赛前参考进球参考偏高 · 模型在常见进球预期附近均衡",
              "totals_line_cn": "总进球约 2.5 个",
              "totals_high_pct": 48.4,
              "type_tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_label": "板凳深度偏高",
              "draw_trap_pct": 30,
              "readout_cn": "Mexico · 低位反击。总进球约 2.6 个；按常规模型读即可。"
            },
            "draw_trap_note": "平局风险：低位反击队若先进球或被追平，1-1 / 0-0 比客胜更现实（约 30% 冷门空间含平局）。",
            "archetype": {
              "tags": [
                {
                  "key": "low_block",
                  "label": "低位反击"
                }
              ],
              "depth_score": 2,
              "depth_label": "板凳深度偏高",
              "draw_trap_pct": 30,
              "fav_lead_style": "defensive"
            }
          }
        },
        "public_summary_note": "【推演概要】Mexico · 低位反击。 · 与模型 xG 对照：均衡 · 赛前净胜看法略高（约 +0.25） · 热门仅净胜 1 球概率 21.6%（模型微调：主胜 +0% · 平 +0% · 客 +0%）"
      },
      "group_context": {
        "group": "A",
        "label": "A组 · 第1轮后",
        "matchday": 2,
        "standings": [
          {
            "team": "Mexico",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 2,
            "ga": 0
          },
          {
            "team": "South Korea",
            "pts": 3,
            "p": 1,
            "w": 1,
            "d": 0,
            "l": 0,
            "gf": 2,
            "ga": 1
          },
          {
            "team": "Czechia",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 1,
            "ga": 2
          },
          {
            "team": "South Africa",
            "pts": 0,
            "p": 1,
            "w": 0,
            "d": 0,
            "l": 1,
            "gf": 0,
            "ga": 2
          }
        ],
        "home": {
          "team": "Mexico",
          "rank": 1,
          "pts": 3,
          "played": 1,
          "if_1st": "32强 · 对阵 B 组第 2",
          "if_2nd": "32强 · 对阵 B 组第 1",
          "if_3rd": "若列小组第 3，需与 B/E/F/H/I/J/K/L 等组第 3 比净胜球/进球"
        },
        "away": {
          "team": "South Korea",
          "rank": 2,
          "pts": 3,
          "played": 1,
          "if_1st": "32强 · 对阵 B 组第 2",
          "if_2nd": "32强 · 对阵 B 组第 1",
          "if_3rd": "若列小组第 3，需与 B/E/F/H/I/J/K/L 等组第 3 比净胜球/进球"
        },
        "cross_group_notes": [
          "G 组四队同积 1 分，形势极度开放",
          "H 组四队同积 1 分，形势极度开放",
          "E 组 Germany 3 分领跑",
          "F 组 Sweden 3 分领跑"
        ],
        "manipulation_risk": {
          "level": "LOW",
          "level_cn": "低",
          "focus_team": null,
          "reason": "暂无明确控分动机；出线路径仍取决于后续直接对话。"
        },
        "knockout_note": "48 队制：12 组前 2 + 8 个最佳第 3 进入 32 强；末轮可能出现算分/控分战术。",
        "scenarios": [
          "Mexico 若取胜：积分 6，A 组排名有望上升；过早预测 32 强对手仍不可靠。",
          "South Korea 若取胜：积分 6，客场抢分将改变 A 组格局。",
          "平局：双方各 +1 分；在 G 组四队同积 1 分，形势极度开放；H 组四队同积 1 分，形势极度开放；E 组 Germany 3 分领跑；F 组 Sweden 3 分领跑 背景下，第 2 轮直接对话权重上升。"
        ]
      }
    }
  ],
  "nextMatch": {
    "group": "A",
    "matchday": 2,
    "date": "2026-06-18",
    "time": "12:00",
    "time_local": "12:00 ET",
    "timezone": "EDT (UTC-4)",
    "time_beijing": "00:00",
    "date_beijing": "6月19日",
    "time_beijing_full": "北京时间 6月19日 00:00",
    "venue": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "home": {
      "name": "Czechia",
      "iso": "cz",
      "fifaRank": 40,
      "rating": 72
    },
    "away": {
      "name": "South Africa",
      "iso": "za",
      "fifaRank": 58,
      "rating": 65
    },
    "teaser": "A组第2轮 · 捷克 vs 南非",
    "home_win": 54,
    "draw": 25,
    "away_win": 21,
    "predicted_score": "1-0",
    "key_player_home": "Patrik Schick",
    "key_player_away": "Lyle Foster"
  },
  "upcomingMatches": [
    {
      "group": "B",
      "time_beijing_full": "北京时间 6月19日 03:00",
      "venue": "SoFi Stadium",
      "city": "Los Angeles, USA",
      "home": {
        "name": "Switzerland",
        "iso": "ch"
      },
      "away": {
        "name": "Bosnia and Herzegovina",
        "iso": "ba"
      },
      "teaser": "B组第2轮"
    },
    {
      "group": "B",
      "time_beijing_full": "北京时间 6月19日 06:00",
      "venue": "BC Place",
      "city": "Vancouver, Canada",
      "home": {
        "name": "Canada",
        "iso": "ca"
      },
      "away": {
        "name": "Qatar",
        "iso": "qa"
      },
      "teaser": "B组第2轮"
    },
    {
      "group": "A",
      "time_beijing_full": "北京时间 6月19日 09:00",
      "venue": "Estadio Akron",
      "city": "Guadalajara, Mexico",
      "home": {
        "name": "Mexico",
        "iso": "mx"
      },
      "away": {
        "name": "South Korea",
        "iso": "kr"
      },
      "teaser": "A组榜首战"
    }
  ]
};
