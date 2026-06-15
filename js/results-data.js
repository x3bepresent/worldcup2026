// 过往赛果 — 手动/自动同步
// score_dist 已废弃 — 页面按 xG 泊松实时计算
// Last updated: 2026-06-16T12:00:00+08:00
const RESULTS_DATA = {
  "lastUpdated": "2026-06-16T12:00:00+08:00",
  "syncSource": "FIFA + FotMob 官方赛果",
  "breakingNews": [
    {
      "tag": "OFFICIAL",
      "text": "🏁 6月15日 · 德国7-1库拉索 · 荷兰2-2日本 · 科特1-0厄瓜 · 瑞典5-1突尼斯 · 当日4场全部结束",
      "time": "赛果汇总"
    },
    {
      "tag": "OFFICIAL",
      "text": "E组：德国/科特各3分 · F组：瑞典3分领跑 · 荷日各1分",
      "time": "小组形势"
    },
    {
      "tag": "LINEUP",
      "text": "德国战：Comenencia 历史首球 · Havertz 双响 · xG 4.22-0.41",
      "time": "6月15日"
    },
    {
      "tag": "LINEUP",
      "text": "荷日战：Kamada 88' 绝平 · 下半场4球 · xG 0.78-0.59",
      "time": "6月15日"
    },
    {
      "tag": "LINEUP",
      "text": "瑞典战：Isak 首球+2助 · Ayari 双响 · Potter 3-4-3 大胜",
      "time": "6月15日"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 6月14日 · 海地0-1苏格兰 · 澳大利亚2-0土耳其 · 详见下方",
      "time": "前日回顾"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 6月14日 · 海地0-1苏格兰 · 澳大利亚2-0土耳其 · 当日4场全部结束",
      "time": "赛果汇总"
    },
    {
      "tag": "OFFICIAL",
      "text": "C组苏格兰3分领跑 · D组美国/澳大利亚同积3分",
      "time": "小组形势"
    },
    {
      "tag": "LINEUP",
      "text": "澳土战：Beach零封8.9 · Irankunda/Metcalfe世界波 · 土72%控球30射0球",
      "time": "6月14日"
    },
    {
      "tag": "LINEUP",
      "text": "海苏战：McGinn 29'制胜 · Gunn零封 · 苏格兰28年后再胜",
      "time": "6月14日"
    }
  ],
  "finishedMatches": [
    {
      "id": "m01",
      "group": "A",
      "matchday": 1,
      "date": "2026-06-11",
      "time": "15:00",
      "time_local": "15:00 ET / 13:00 本地",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "03:00",
      "date_beijing": "6月12日",
      "time_beijing_full": "北京时间 6月12日 03:00",
      "venue": "Estadio Azteca",
      "city": "Mexico City, Mexico",
      "note": "2026世界杯开幕战 · 海拔2240m · 已结束 2-0",
      "actualResult": {
        "home_score": 2,
        "away_score": 0,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Raúl Jiménez 38', 78'",
        "highlights": "Ochoa 零封；南非 60 分钟后高原体能崩盘；Marciniak 4 黄 0 红"
      },
      "home": {
        "name": "Mexico",
        "iso": "mx",
        "flag": "🇲🇽",
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
        "star": {
          "name": "Raúl Jiménez",
          "pos": "ST",
          "club": "Fulham",
          "desc": "本场梅开二度（38', 78'）当选最佳球员。与 Gilberto Mora 搭档双前锋完全压制南非防线，次轮对韩国将是真正的考验",
          "number": 9,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "Edson Álvarez（队长）",
            "status": "FIT",
            "note": "替补出场45分钟，赛后确认踝关节无碍，次轮有望回归首发",
            "confirmed": true
          },
          {
            "player": "Luis Chávez",
            "status": "OUT",
            "note": "本场未出场，仍在康复管理中，次轮出场存疑",
            "confirmed": true
          },
          {
            "player": "César Montes",
            "status": "FIT",
            "note": "打满全场90分钟，赛后确认肌肉无碍，次轮可继续首发",
            "confirmed": true
          },
          {
            "player": "Santiago Giménez",
            "status": "OUT",
            "note": "本场未进入大名单出场，替补席待命，次轮出场仍存疑",
            "confirmed": true
          }
        ],
        "rumors": [
          "40岁 Ochoa 零封完成第六届世界杯首秀，赛后称「这是最好的开幕礼物」",
          "Raúl Jiménez 梅开二度成为全场最佳，Gilberto Mora 首发搭档效果超出预期",
          "主帅 Aguirre：「伤病危机没有击垮我们，Jiménez 用进球回应了所有质疑」",
          "17岁 Gilberto Mora 成为墨西哥世界杯史上最年轻出场球员之一，替补未登场但已进入大名单"
        ]
      },
      "away": {
        "name": "South Africa",
        "iso": "za",
        "flag": "🇿🇦",
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
        "star": {
          "name": "Percy Tau",
          "pos": "LW",
          "club": "Al Ahly",
          "desc": "AFCON最佳球员，技术细腻，是南非唯一能制造威胁的核心；本场被墨西哥压制，仅有1次射正"
        },
        "injuries": [
          {
            "player": "Aubrey Modiba（左后卫）",
            "status": "FIT",
            "note": "复出打满前60分钟后被换下，赛后称「高原让我在第55分钟后像换了一个人」",
            "confirmed": true
          }
        ],
        "rumors": [
          "Broos 赛后：「我们前45分钟踢得不错，但2240m海拔在60分钟后是真实存在的，不是借口」",
          "Lyle Foster 本场仅有1次射门，被墨西哥中卫 Montes 完全限制",
          "南非全场仅2次射正，Percy Tau 一次远射被 Ochoa 扑出",
          "小组次轮对捷克成为「生死战」，Broos 称必须改善体能分配"
        ]
      },
      "h2h": {
        "home_wins": 3,
        "draws": 1,
        "away_wins": 0,
        "recent": [
          {
            "year": 2010,
            "comp": "WC友谊",
            "score": "2-1",
            "winner": "Mexico",
            "venue": "Neutral"
          },
          {
            "year": 2014,
            "comp": "友谊赛",
            "score": "1-0",
            "winner": "Mexico",
            "venue": "Mexico"
          },
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "1-1",
            "winner": "Draw",
            "venue": "Neutral"
          },
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "2-0",
            "winner": "Mexico",
            "venue": "Mexico"
          }
        ],
        "all_time": {
          "played": 4,
          "mexico": 3,
          "draws": 1,
          "south_africa": 0,
          "mexico_goals": 6,
          "sa_goals": 2
        },
        "note": "历史4次交锋，墨西哥未负，主场优势明显"
      },
      "referee": {
        "name": "Szymon Marciniak",
        "nation": "波兰",
        "age": 43,
        "wc_final": "2022年世界杯决赛主裁",
        "avg_yellow": 4.2,
        "avg_red": 0.18,
        "home_win_rate": 52,
        "bias_note": "执法风格：严格但公正，对身体对抗容忍度适中，不轻易出示红牌",
        "tendencies": [
          "大场面经验极丰富",
          "对假摔零容忍",
          "开场前20分钟相对宽松"
        ]
      },
      "prediction": {
        "home_win": 71,
        "draw": 18,
        "away_win": 11,
        "score": "2-0",
        "confidence": 91,
        "xg_home": 2.1,
        "xg_away": 0.5,
        "key_factor": "【赛后复盘】赛前 xG 2.1-0.5 泊松最可能比分 2-0（约16.4%）与赛果完全吻合。高原效应在60分钟后爆发：南非跑动距离较墨西哥少12%，射门 4:14。Jiménez 利用定位球与反击各入一球，Ochoa 零封验证「经验>状态」判断。A组次轮墨西哥 vs 韩国（6/16）将决定小组头名，墨西哥士气与主场延续性均为加分项。"
      },
      "weather": {
        "city": "墨西哥城",
        "country": "墨西哥",
        "temp": 18,
        "humidity": 68,
        "altitude": 2240,
        "rain_chance": 35,
        "wind": "东北风 3级",
        "condition": "多云，午后有雷阵雨可能",
        "impact_level": "HIGH",
        "impact": "海拔2240m是本届世界杯最高赛场，氧气含量约75%正常水平，对未适应高原的球队是巨大挑战",
        "home_adapt": 95,
        "away_adapt": 38,
        "home_note": "墨西哥全队在墨西哥城训练备战，海拔完全适应，后半场体能优势将成为决胜因素",
        "away_note": "南非球员来自海平面地区，首次参加世界杯，高原适应仅5天，前30分钟后体能将明显下降",
        "weather_factors": [
          {
            "label": "高原反应",
            "impact": "南非不利",
            "detail": "2240m海拔将使南非球员乳酸积累速度比正常快35%"
          },
          {
            "label": "午后降雨可能",
            "impact": "中性",
            "detail": "场地积水对两队影响相当，可能放慢比赛节奏"
          },
          {
            "label": "18°C温度",
            "impact": "有利比赛",
            "detail": "气温凉爽，有利于高强度对抗，两队体能消耗较慢"
          },
          {
            "label": "稀薄空气",
            "impact": "长传优势",
            "detail": "球在稀薄空气中飞行更快更远，有利于墨西哥的直塞战术"
          }
        ],
        "historical_note": "Estadio Azteca是海拔最高的世界杯决赛场（1970、1986），历史上主队胜率高达74%"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "壬午日",
          "day_element": "水+火",
          "hour_home": "未时（13:00-15:00）",
          "hour_home_element": "土",
          "day_dominant": "火",
          "day_summary": "丙午年庚午月壬午日——三「午」叠火，火气冲天。《道德经》曰：「归根曰静，是谓复命。」万物归根之象，于此火旺之日，顺势者得天命，逆势者必耗于无形。开幕战逢此局，必是光耀四方、激情四射之战。"
        },
        "wuxing": {
          "home": {
            "team": "Mexico",
            "colors": "绿+红",
            "elements": "木（绿）、火（红）",
            "wuxing_short": "木生火，顺应火旺之局",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 92,
            "reason": "墨西哥绿色属木，红色属火——木生火之配，今日三午重火，木火之队如鱼得水，气场与天地同频。《周易》曰：「与时偕行」，此乃顺时之局。",
            "advantage": "开场气势如虹，进攻端精力充沛，主场氛围加持，前半场压制力极强"
          },
          "away": {
            "team": "South Africa",
            "colors": "黄+绿+黑",
            "elements": "土（黄）、木（绿）、水（黑）",
            "wuxing_short": "土克水，木泄火，内部失衡",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "compat": 32,
            "reason": "南非队服黑色属水，今日大火当令，水逢火克，气场被压制；黄绿虽有土木，但黑色水德被烈火蒸干，三色内耗，自身能量不稳。",
            "disadvantage": "气场涣散，体能消耗快（与高原叠加），心理层面难以形成凝聚力"
          },
          "summary": "五行裁定：绿红之师顺天应时，黑黄之军内外交困"
        },
        "hexagram": {
          "name": "乾卦",
          "symbol": "☰",
          "number": 1,
          "upper": "乾天",
          "lower": "乾天",
          "quote": "《周易·乾卦》：「天行健，君子以自强不息。」",
          "general": "纯阳至刚，天之象也。乾卦是六十四卦之首，象征强者主宰、永不停息的进取精神。此局主强者愈强，没有悬念。",
          "advantage_team": "Mexico",
          "disadvantage_team": "South Africa",
          "hexagram_analysis": "乾卦纯阳之象，利于主动、强健、阳气旺盛的一方——墨西哥主场开幕，天时地利人和俱占。南非以阴克阳，势必难以抗衡。",
          "match_nature": "主场压制局",
          "match_nature_prob": 76,
          "yellow_card_risk": "中",
          "yellow_card_reason": "乾卦主「刚健」，双方均有强烈意志，但强者不需动粗，弱者落后后可能出现铲球。预计全场4-6张黄牌，红牌概率约15%。",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "墨西哥主导局，大比分获胜概率76%，平局12%，南非胜仅8%"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第25-40分钟（开幕激情期）及第65-80分钟（南非体能下滑后）"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中等——约4-6张，乾卦主刚，南非落后后铲球增多"
            },
            {
              "icon": "🔄",
              "label": "0-0平局可能",
              "text": "低（12%）——乾卦不允许强者空手而归，但南非防守可能拖至下半场"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "极低（5%）——乾卦主速决，90分钟内分出胜负概率95%"
            }
          ],
          "early_goal": {
            "scenario": "若前30分钟墨西哥率先进球",
            "prediction": "「天行健」一旦启动，势不可挡——南非在高原+落后双重压力下体能崩溃加速，墨西哥将乘势追加，大比分概率升至70%。",
            "favors": "Mexico",
            "favors_prob": 70
          },
          "no_early_goal": {
            "scenario": "若前30分钟无进球",
            "prediction": "乾卦主「终必得正」——墨西哥耐心等待南非体能下滑，下半场55分钟后将迎来进球高峰，南非消耗殆尽，终难抵挡。",
            "favors": "Mexico（下半场爆发）",
            "favors_prob": 65
          },
          "away_goal": {
            "scenario": "若南非意外先进球",
            "prediction": "乾卦遭逆——但纯阳不受压制，墨西哥将在主场球迷震天声浪中迅速反扑。逆转概率极高（75%），这反而可能激发更激烈的进攻，比赛或走向大比分逆转。",
            "favors": "Mexico（激活）",
            "favors_prob": 62
          },
          "halftime": {
            "scenario": "若上半场0-0进入中场",
            "prediction": "「天命未尽」——下半场南非体能断崖式下滑（高原效应在60分钟后爆发），墨西哥将把握机会，下半场进球概率极高（82%）。",
            "favors": "Mexico",
            "favors_prob": 72
          },
          "extra_time": {
            "scenario": "若90分钟平局进加时（极低概率5%）",
            "prediction": "乾卦极不支持平局拖延，若真出现此局面，南非体能已完全耗尽，加时赛墨西哥10分钟内进球概率78%，点球大战概率仅22%。",
            "favors": "Mexico（碾压）",
            "favors_prob": 78
          }
        },
        "home_score": 88,
        "away_score": 28,
        "mystic_verdict": "☰ 乾卦纯阳，天行健之象——墨西哥木火顺局，主场三午火旺，天时地利人和尽在其手。南非水德逢火，黑衣水性在烈日下蒸干。此乃开幕战最佳剧本：强者归位，弱者虽勇，终难逆天。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      }
    },
    {
      "id": "m02",
      "group": "A",
      "matchday": 1,
      "date": "2026-06-11",
      "time": "22:00",
      "time_local": "22:00 ET / 20:00 本地",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "10:00",
      "date_beijing": "6月12日",
      "time_beijing_full": "北京时间 6月12日 10:00",
      "venue": "Estadio Akron",
      "city": "Guadalajara, Mexico",
      "note": "A组第2场 · 海拔1566m · 夜场 · 已结束 2-1",
      "actualResult": {
        "home_score": 2,
        "away_score": 1,
        "status": "FT",
        "label": "全场结束",
        "scorers": "孙兴慜 56', 李康仁 71' · Schick 84'",
        "highlights": "Sampaio 5 黄；捷克 10 人低位防守被两次洞穿；Schick 头球扳回颜面"
      },
      "home": {
        "name": "South Korea",
        "iso": "kr",
        "flag": "🇰🇷",
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
        "star": {
          "name": "孙兴慜 Son Heung-min",
          "pos": "LW",
          "club": "LAFC（洛杉矶足球俱乐部）",
          "desc": "本场第56分钟远射破门，当选全场最佳。捷克三中卫体系未能限制其内切，次轮对墨西哥将是真正的考验",
          "number": 7,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "黄喜灿 Hwang Hee-chan",
            "status": "FIT",
            "note": "赛季末踝关节轻伤，已完全恢复，BBC确认首发无虞",
            "confirmed": true
          }
        ],
        "rumors": [
          "孙兴慜赛后 BBC 采访：「第一个进球释放了我们，这是完美的世界杯开局」",
          "李康仁（巴黎圣日耳曼）71分钟禁区外远射锁定胜局，韩媒称「巴黎训练的成果」",
          "洪明甫：「我们知道捷克会限制孙兴慜，所以李康仁的远射是战术B计划」",
          "次轮对墨西哥：2018年友谊赛韩国曾2-0胜墨西哥，但本场墨西哥士气正盛"
        ]
      },
      "away": {
        "name": "Czechia",
        "iso": "cz",
        "flag": "🇨🇿",
        "fifa_rank": 40,
        "rating": 72,
        "form": [
          "L",
          "W",
          "D",
          "W",
          "L"
        ],
        "coach": "Ivan Hasek",
        "star": {
          "name": "Patrik Schick",
          "pos": "ST",
          "club": "Bayer Leverkusen",
          "desc": "84分钟头球破门挽回颜面，但全场仅2次射门。低位防守被孙兴慜、李康仁两次远射洞穿，次轮对南非不容再失分",
          "number": 10,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "Tomáš Souček",
            "status": "FIT",
            "note": "主力中场完全健康，将出任中路指挥官",
            "confirmed": true
          }
        ],
        "rumors": [
          "Hasek 赛后：「我们下半场失去了纪律，两次远射失球不可接受」",
          "斯拉维亚布拉格10人体系运转良好但缺乏反击速度，被韩国控球消耗",
          "Souček 中场拦截7次全场最高，但无法阻止两次禁区外远射",
          "次轮对南非：捷克必须取胜，否则出线形势将极其被动"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 1,
        "away_wins": 2,
        "recent": [
          {
            "year": 2006,
            "comp": "WC小组赛",
            "score": "2-0",
            "winner": "South Korea",
            "venue": "Neutral"
          },
          {
            "year": 2014,
            "comp": "友谊赛",
            "score": "2-0",
            "winner": "Czechia",
            "venue": "Neutral"
          },
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "South Korea",
            "venue": "Neutral"
          },
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "2-2",
            "winner": "Draw",
            "venue": "Neutral"
          },
          {
            "year": 2024,
            "comp": "友谊赛",
            "score": "0-1",
            "winner": "Czechia",
            "venue": "Neutral"
          }
        ],
        "all_time": {
          "played": 5,
          "south_korea": 2,
          "draws": 1,
          "czechia": 2,
          "korea_goals": 7,
          "czech_goals": 6
        },
        "note": "历史势均力敌，双方互有胜负，近期捷克略有优势"
      },
      "referee": {
        "name": "Wilton Sampaio",
        "nation": "巴西",
        "age": 41,
        "wc_final": "2022年卡塔尔世界杯参与执法",
        "avg_yellow": 4.8,
        "avg_red": 0.22,
        "home_win_rate": 48,
        "bias_note": "执法风格偏向宽松，允许身体对抗，但对拖延时间严格；偏向强队的判罚比例略高",
        "tendencies": [
          "红牌极少出示",
          "任意球判罚宽松",
          "补时慷慨（平均加4-6分钟）"
        ]
      },
      "prediction": {
        "home_win": 48,
        "draw": 27,
        "away_win": 25,
        "score": "1-1",
        "confidence": 72,
        "xg_home": 1.8,
        "xg_away": 1.2,
        "key_factor": "【赛后复盘】赛前模型倾向韩国胜（48%）与赛果方向一致；xG 1.8-1.2 泊松最可能 1-1（约10.3%），实际 2-1。孙兴慜个人能力是决定性变量——56' 远射打破僵局，验证「坎卦险中求胜」判断。捷克低位防守前60分钟有效，但李康仁 71' 远射暴露三中卫站位过深的问题。Schick 84' 头球证明制空能力仍在，但为时已晚。A组形势：韩墨同积3分，6/16 直接对话或成头名之战。"
      },
      "weather": {
        "city": "瓜达拉哈拉",
        "country": "墨西哥",
        "temp": 22,
        "humidity": 72,
        "altitude": 1566,
        "rain_chance": 28,
        "wind": "南风 2级",
        "condition": "夜场多云，气候温热湿润",
        "impact_level": "MEDIUM",
        "impact": "瓜达拉哈拉海拔1566m，夜场气温舒适，湿度略高，对体能消耗影响中等",
        "home_adapt": 55,
        "away_adapt": 52,
        "home_note": "韩国在欧洲联赛踢球的球员多（孙兴慜等），习惯平原作战，需适应1566m海拔",
        "away_note": "捷克同样来自平原，双方在海拔适应上基本持平",
        "weather_factors": [
          {
            "label": "1566m海拔",
            "impact": "双方均受影响",
            "detail": "比墨西哥城低700m，影响相对较小，双方条件基本平等"
          },
          {
            "label": "夜场22°C",
            "impact": "有利高强度对抗",
            "detail": "夜晚温度适宜，有利于速度型球员（孙兴慜）充分发挥"
          },
          {
            "label": "72%湿度",
            "impact": "轻微消耗",
            "detail": "湿度偏高，对体能消耗略有影响，下半场后程体能储备重要"
          },
          {
            "label": "小雨概率28%",
            "impact": "轻微影响",
            "detail": "若降雨，场地湿滑利于突破型球员，孙兴慜速度优势更明显"
          }
        ],
        "historical_note": "Estadio Akron是墨西哥顶级球场，2026世界杯A组主场，夜场比赛气氛极佳"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "壬午日",
          "day_element": "水+火",
          "hour_home": "亥时（21:00-23:00）",
          "hour_home_element": "水",
          "day_dominant": "火",
          "day_summary": "壬午日亥时——日柱壬水克午火，亥时水气更重，夜场水气渐盛。《道德经》：「上善若水，水善利万物而不争。」水德之时利于智取，不宜强攻，以变应变者得胜。"
        },
        "wuxing": {
          "home": {
            "team": "South Korea",
            "colors": "红+白",
            "elements": "火（红）、金（白）",
            "wuxing_short": "火金并存，金克火受阻",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 68,
            "reason": "韩国红色属火，今日三午火旺，红色顺势；白色属金，金克木但受制于火旺之局——总体上火性顺势，韩国气场略占优。",
            "advantage": "进攻端活力充沛，特别是速度反击时能量充足，开场前30分钟冲劲极旺"
          },
          "away": {
            "team": "Czechia",
            "colors": "红+白+蓝",
            "elements": "火（红）、金（白）、水（蓝）",
            "wuxing_short": "水火交战，内部消耗",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "compat": 45,
            "reason": "捷克蓝色属水，今日火旺之局水逢火克；但夜场亥时水气渐升，对捷克略有补益。红白火金与蓝水相战，三色气场混乱，但较南非轻微，尚可一战。",
            "disadvantage": "整体气场不稳，进攻效率受阻，但防守端因水德补益夜场或较稳固"
          },
          "summary": "五行裁定：韩国火红顺局，捷克水火相战；但差距远不如开幕战悬殊，此乃势均力敌之局"
        },
        "hexagram": {
          "name": "坎卦",
          "symbol": "☵",
          "number": 29,
          "upper": "坎水",
          "lower": "坎水",
          "quote": "《周易·坎卦》：「习坎，有孚，维心亨，行有尚。」",
          "general": "重水相叠，险中求胜——坎卦象征险境与智慧并存。夜场水气应坎，比赛节奏变化多端，双方均有机会，但犯错者将付出沉重代价。",
          "advantage_team": "South Korea",
          "disadvantage_team": "Czechia",
          "hexagram_analysis": "坎卦利于心态稳定、有备而来的一方——韩国有孙兴慜这一「定海神针」，乾坤大旗不倒；捷克依赖整体，坎卦险中若整体一乱，难以复原。",
          "match_nature": "胶着悬念局",
          "match_nature_prob": 55,
          "yellow_card_risk": "中",
          "yellow_card_reason": "坎卦主「险」不主「躁」，双方将谨慎作战，黄牌来自战术需要而非情绪失控，预计全场3-5张，红牌概率10%。",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "胶着悬念局，进球数1-3球可能性最大，平局概率28%为各场最高"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "下半场55-70分钟（双方战术调整后出现空间），及第85+分钟（体能耗尽后的防守漏洞）"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中等——约3-5张，坎卦主谨慎，主要来自战术犯规而非情绪"
            },
            {
              "icon": "🔄",
              "label": "0-0平局可能",
              "text": "较高（约20%）——双方防守体系均完善，捷克低位防守可能拖入平局"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "有一定可能（18%）——坎卦主「险而不决」，若90分钟平局进加时，孙兴慜体力决定结果"
            }
          ],
          "early_goal": {
            "scenario": "若前30分钟韩国率先进球",
            "prediction": "坎险已过，韩国心理压力解除——孙兴慜将在中前场获得更大发挥空间，捷克被迫打开防线，比赛转为韩国节奏，2球优势概率55%。",
            "favors": "South Korea",
            "favors_prob": 58
          },
          "no_early_goal": {
            "scenario": "若前30分钟无进球",
            "prediction": "「维心亨」——坎卦耐心者得胜，双方将进入消耗战。下半场55分钟后才会出现实质性机会，孙兴慜的一次闪现可能就是唯一进球。",
            "favors": "South Korea（孙兴慜个人能力）",
            "favors_prob": 50
          },
          "away_goal": {
            "scenario": "若捷克先进球",
            "prediction": "坎卦逆境考验——韩国若落后会更加积极，孙兴慜将全面激活，捷克低位防反战术成立。但韩国扳平概率约60%，反超概率45%，总体仍是韩国略优。",
            "favors": "Czechia（防反战术成立）",
            "favors_prob": 52
          },
          "halftime": {
            "scenario": "若上半场0-0进入中场",
            "prediction": "「习坎」——坎险需习，两队下半场战术调整是关键。捷克若坚守，韩国需要创造力；孙兴慜下半场体能维持时，韩国进球概率62%，否则平局可能性大。",
            "favors": "South Korea（依孙兴慜状态）",
            "favors_prob": 55
          },
          "extra_time": {
            "scenario": "若90分钟平局进入加时",
            "prediction": "坎卦加时——险中险，体能与心理双重考验。孙兴慜若状态保持，一次个人突破即可定乾坤；捷克若能撑过加时前15分钟，点球大战反而成为他们的机会。",
            "favors": "South Korea（前15分钟）/ Czechia（点球）",
            "favors_prob": 52
          }
        },
        "home_score": 65,
        "away_score": 48,
        "mystic_verdict": "☵ 坎卦水险，夜场亥水应时——韩国火红略顺，孙兴慜是这场的「坎中之孚」，心有定数则胜；捷克水火相战，但坎卦给予弱势方以翻盘机会，切勿轻视。此乃本届世界杯最具悬念的开幕日夜场。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      }
    },
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
      "note": "B组揭幕 · 官方首发已确认 · 推演已重算 · Džeko 替补 · 已结束 1-1",
      "lineup": {
        "confirmed": true,
        "formation": "4-4-2",
        "home": "Crépeau; Johnston, de Fougerolles, Cornelius, Laryea; Buchanan, Eustáquio (C), Koné, Millar; David, Larin",
        "away": "Vasilj; Dedić, Katić, Muharemović, Kolašinac; Alajbegović, Bašić, Tahirović, Bajraktarević; Demirović (C), Lukić",
        "note": "Goal.com / 赛前官方确认首发（2026-06-12）。加拿大与 ESPN 预测 11 人完全一致。波黑与预测出入较大：Džeko 替补；Burnic/Gigović/Memić/Celik/Bazdar 均未首发。",
        "predicted": {
          "formation": "4-4-2",
          "home": "Crépeau; Johnston, de Fougerolles, Cornelius, Laryea; Buchanan, Eustáquio, Koné, Millar; David, Larin",
          "away": "Vasilj; Burnic, Gigović, Muharemović, Memić; Celik, Basic, Bajraktarević; Mahmić, Demirović, Bazdar",
          "source": "ESPN / SI 赛前预测 · 非官方"
        },
        "diff": {
          "home": "✅ 与预测完全一致（11/11）。Bombito 可出战但未进首发，de Fougerolles 搭档 Cornelius 中卫。",
          "away": "⚠️ 与预测 5 处出入：① Džeko 替补（最大意外）② Kolašinac 左后卫 ③ Dedić/Katić 中卫 ④ Lukić 顶替 Bazdar ⑤ Alajbegović+Tahirović 中场（预测无此二人）"
        },
        "source": "Goal.com confirmed XI · 2026-06-12",
        "updated": "2026-06-13T03:30:00+08:00"
      },
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
        "stars": [
          {
            "name": "Jonathan David",
            "pos": "ST",
            "club": "Lille",
            "stats": "国家队 48场 27球 · 本赛季 18球",
            "rating": 8.2,
            "desc": "Davies 缺阵后进攻重担落在 David 肩上。预计与 Larin 双前锋搭档，是破解波黑紧凑防线的首要得分点",
            "number": 10,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Tajon Buchanan",
            "pos": "RM/RW",
            "club": "Villarreal",
            "stats": "本赛季 7球 · 关键传球 1.8/场",
            "rating": 7.8,
            "desc": "Davies 缺席后右路/肋部突破重任加大。Villarreal 赛季表现起伏，但 Marsch 体系下仍是连接中场与锋线的关键纽带",
            "number": 17,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Cyle Larin",
            "pos": "ST",
            "club": "Mallorca",
            "stats": "国家队 70+ 场 30球 · 空中争顶 65%",
            "rating": 7.6,
            "desc": "身体型中锋，与 David 组成双塔。波黑中卫 Gigović、Muharemović 偏年轻，Larin 的制空与背身能力是主队重要变招",
            "number": 9,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "injuries": [
          {
            "player": "Alphonso Davies（队长）",
            "status": "OUT",
            "note": "拜仁欧冠半决赛大腿肌肉伤，Marsch 6月11日发布会官方确认缺席揭幕战；恢复进度良好，小组赛后续场次有望复出",
            "confirmed": true
          },
          {
            "player": "Marcelo Flores",
            "status": "OUT",
            "note": "入选大名单后前十字韧带断裂，确定缺席整届世界杯",
            "confirmed": true
          },
          {
            "player": "Sam Adekugbe",
            "status": "OUT",
            "note": "右后卫十字韧带手术，缺席世界杯全部小组赛",
            "confirmed": true
          },
          {
            "player": "Moïse Bombito",
            "status": "FIT",
            "note": "已通过体检可出战，但官方首发由 de Fougerolles 搭档 Cornelius 中卫，Bombito 替补席待命",
            "confirmed": true
          },
          {
            "player": "Ismaël Koné",
            "status": "FIT",
            "note": "赛前曾出现轻微发烧，已恢复训练；预计与 Eustáquio 搭档双中场",
            "confirmed": true
          },
          {
            "player": "Liam Millar",
            "status": "FIT",
            "note": "踝关节问题已缓解，预计出任左边前卫",
            "confirmed": true
          },
          {
            "player": "Jonathan David",
            "status": "FIT",
            "note": "里尔前锋状态正佳，与 Larin 搭档锋线",
            "confirmed": true
          }
        ],
        "rumors": [
          "Marsch 发布会：「Davies 恢复符合预期，但揭幕战无法出场；Bombito 是好消息」",
          "Richie Laryea（多伦多FC）顶替 Davies 左后卫，熟悉 BMO Field 草皮与氛围",
          "更衣室：Flores 报销打击进攻深度，但 Bombito 复出提振后防士气；Eustáquio 场上领袖角色加重",
          "加拿大近11场友谊赛6胜5平不败，但缺少队长边路爆点，Marsch 改打 4-4-2 强调中路与定位球",
          "TSN：BMO Field 预计创加拿大世界杯上座纪录，主场压力与动力并存"
        ],
        "star": {
          "name": "Jonathan David",
          "pos": "ST",
          "club": "Lille",
          "desc": "Davies 缺阵后进攻重担落在 David 肩上。预计与 Larin 双前锋搭档，是破解波黑紧凑防线的首要得分点",
          "rating": 8.2,
          "stats": "国家队 48场 27球 · 本赛季 18球",
          "number": 10,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        }
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
        "stars": [
          {
            "name": "Edin Džeko",
            "pos": "ST",
            "club": "Fiorentina",
            "stats": "国家队 130+ 场 68球 · 40岁 · 2014+2026 两届世界杯",
            "rating": 7.8,
            "desc": "40岁传奇前锋，与 Kolašinac 是队中仅存的2014世界杯成员。制空、经验与定位球是波黑在反击中的最大威胁",
            "number": 11,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Esmir Bajraktarević",
            "pos": "RW/AM",
            "club": "New England Revolution",
            "stats": "对阵意大利附加赛表现亮眼 · 速度型边锋",
            "rating": 7.5,
            "desc": "淘汰意大利的关键球员之一，快速反击中的核心爆点。加拿大压上时，Bajraktarević 的冲刺是 Barbarez 战术的胜负手",
            "number": 20,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Sead Kolašinac",
            "pos": "CB/LB",
            "club": "Marseille",
            "stats": "铲球 3.2/场 · 2014世界杯经验",
            "rating": 7.4,
            "desc": "后防老将，附加赛对阵威尔士、意大利表现稳健。Davies 缺阵后波黑左路压力减轻，Kolašinac 经验价值上升",
            "number": 5,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "injuries": [
          {
            "player": "Osman Hadžikić",
            "status": "OUT",
            "note": "第三门将肩伤退队，Mladen Jurkas 递补入26人大名单",
            "confirmed": true
          },
          {
            "player": "Edin Džeko",
            "status": "FIT",
            "note": "40岁传奇完全健康，但官方首发 Lukić 突前、Demirović 任队长——Džeko 替补（赛前最大意外之一）",
            "confirmed": true
          },
          {
            "player": "Amir Hadžiahmetović",
            "status": "OUT",
            "note": "膝伤未愈，确定缺席揭幕战",
            "confirmed": true
          },
          {
            "player": "Ermedin Demirović",
            "status": "FIT",
            "note": "官方队长并首发，与 Lukić 搭档锋线（非 Džeko）",
            "confirmed": true
          },
          {
            "player": "Sead Kolašinac",
            "status": "FIT",
            "note": "官方确认左后卫首发（预测名单为 Burnic/Memić 防线）",
            "confirmed": true
          },
          {
            "player": "Jovo Lukić",
            "status": "FIT",
            "note": "官方首发前锋，顶替预测中的 Bazdar/Džeko 支点角色",
            "confirmed": true
          }
        ],
        "rumors": [
          "Džeko（40岁）：「经验是我们的武器，加拿大年轻人会在压力下犯错」",
          "Barbarez 战术：低位紧凑防守 + 快速边路反击，专克 Marsch 高位压迫",
          "淘汰意大利后更衣室士气高涨，年轻球员 Muharemović、Bajraktarević 信心十足",
          "Davies 缺阵对波黑是重大利好——边路威胁下降，可更专注限制 David 与 Larin",
          "赛前友谊赛0-0北马其顿、1-1巴拿马，进攻效率一般，但防守组织稳固"
        ],
        "star": {
          "name": "Edin Džeko",
          "pos": "ST",
          "club": "Fiorentina",
          "desc": "40岁传奇前锋，与 Kolašinac 是队中仅存的2014世界杯成员。制空、经验与定位球是波黑在反击中的最大威胁",
          "rating": 7.8,
          "stats": "国家队 130+ 场 68球 · 40岁 · 2014+2026 两届世界杯",
          "number": 11,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        }
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
          },
          {
            "year": 2012,
            "comp": "友谊赛",
            "score": "1-0",
            "winner": "Canada",
            "venue": "Canada"
          },
          {
            "year": 2008,
            "comp": "友谊赛",
            "score": "2-2",
            "winner": "Draw",
            "venue": "Neutral"
          }
        ],
        "all_time": {
          "played": 4,
          "canada": 3,
          "draws": 1,
          "bosnia": 0,
          "canada_goals": 8,
          "bosnia_goals": 3
        },
        "note": "历史交锋加拿大占优，但样本极少，参考价值有限"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "name": "Facundo Tello",
        "nation": "阿根廷",
        "iso": "ar",
        "age": 42,
        "source": "FIFA 官方任命 · 2026-06-09",
        "wc_experience": "Qatar 2022（3场）· 欧洲杯 2024 · 2026世预赛附加赛",
        "var": "Hernán Mastrangelo（阿根廷）",
        "avg_yellow": 3,
        "avg_red": 0.33,
        "avg_penalty": 0.22,
        "home_win_rate": 48,
        "bias_index": 50,
        "bias_note": "2022世界杯3场共9黄1红，场均3黄，上半场出牌较少、下半场收紧。国际赛场执法相对克制，但允许一定身体对抗——有利于波黑低位防守",
        "tendencies": [
          "上半场流畅度优先",
          "下半场黄牌增多",
          "大场面经验丰富",
          "对东道主无显著偏袒记录"
        ]
      },
      "prediction": {
        "home_win": 53,
        "draw": 26,
        "away_win": 21,
        "score": "1-0",
        "confidence": 70,
        "xg_home": 1.65,
        "xg_away": 0.92,
        "key_factor": "【赛后复盘】赛前模型主胜53%/最可能1-0；实际1-1。Lukic 首开（非Džeko），Larin+Promise David 替补扳平。方向：平局命中；比分未中。Kolašinac 当选最佳。"
      },
      "weather": {
        "city": "多伦多",
        "country": "加拿大",
        "temp": 22,
        "humidity": 65,
        "altitude": 76,
        "altitude_m": 76,
        "rain_chance": 20,
        "wind": "西南风 2级",
        "condition_cn": "多云，凌晨气温舒适",
        "impact_level": "LOW",
        "impact": "海平面球场，无海拔影响；凌晨开球气温适宜高强度比赛",
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
          },
          {
            "label": "湿度 65%",
            "impact": "轻微影响",
            "detail": "传球速度正常，不影响长传精度"
          },
          {
            "label": "降雨概率 20%",
            "impact": "低",
            "detail": "场地干燥，有利于地面配合"
          }
        ],
        "historical_note": "BMO Field 承办2026世界杯B组赛事，加拿大主场氛围预计创纪录"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "癸未日",
          "day_element": "水+土",
          "hour_home": "丑时（01:00-03:00）",
          "hour_home_element": "土",
          "day_dominant": "土",
          "day_summary": "癸未日——水土相涵，东道主如大地承载万民。《周易》曰：「厚德载物」，主场之利在此日尤为显著。丑时土旺，火生土、土生金，顺局之象。"
        },
        "wuxing": {
          "home": {
            "team": "Canada",
            "colors": "红+白",
            "elements": "火、金",
            "wuxing_short": "火金相生",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 85,
            "reason": "加拿大红色属火，丑时土旺火生，主场气势如虹",
            "advantage": "开场冲击力强"
          },
          "away": {
            "team": "Bosnia and Herzegovina",
            "colors": "蓝+白",
            "elements": "水、金",
            "wuxing_short": "水土相克",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "compat": 35,
            "reason": "Džeko 替补后「水德」大减；Kolašinac 左卫如堤，但 Lukic 突前难承支点之重",
            "disadvantage": "定位球与经验断档"
          },
          "summary": "五行裁定：东道主火土顺局；波黑 Džeko 未首发，水土之势再弱"
        },
        "hexagram": {
          "name": "泰卦",
          "symbol": "☷",
          "number": 11,
          "upper": "坤地",
          "lower": "乾天",
          "quote": "《周易·泰卦》：「小往大来，吉亨。」",
          "general": "天地交泰，主场小胜之象。Džeko 替补后客队「暗流」减弱。",
          "advantage_team": "Canada",
          "disadvantage_team": "Bosnia and Herzegovina",
          "hexagram_analysis": "泰卦仍利东道主。加拿大官方首发与预测一致，David+Larin 中路厚土不变；波黑 Džeko 替补如「老将藏锋」，Lukić 突前、Kolašinac 守左——反击仍靠 Bajraktarević，但定位球威胁大减。",
          "match_nature": "东道主小胜局",
          "match_nature_prob": 53,
          "yellow_card_risk": "中",
          "yellow_card_reason": "预计4-5张黄牌，波黑低位防守战术犯规为主",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "加拿大控场小胜53%，平局26%，波黑爆冷21%"
            },
            {
              "icon": "⏱",
              "label": "进球高峰",
              "text": "第20-35分钟及第70-85分钟"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中等——约4-5张，波黑低位铲球增多"
            },
            {
              "icon": "🔄",
              "label": "0-0平局可能",
              "text": "低（约7.7% 泊松）——Džeko 替补后定位球破局手段减少"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "极低（8%）——90分钟内分出胜负概率92%"
            }
          ],
          "early_goal": {
            "scenario": "若加拿大先进球",
            "prediction": "泰卦「小往大来」——Džeko 未在场，波黑更难通过定位球反扑，主队控局概率上升",
            "favors": "Canada",
            "favors_prob": 62
          },
          "no_early_goal": {
            "scenario": "若前30分钟无进球",
            "prediction": "Bajraktarević 个人反击仍是波黑主要手段，但无 Džeko 支点后消耗战平局概率略降",
            "favors": "Draw",
            "favors_prob": 48
          },
          "away_goal": {
            "scenario": "若波黑先进球",
            "prediction": "加拿大主场反扑力度仍大；Lukić 突前难持续牵制，主队扳平概率55%",
            "favors": "Canada",
            "favors_prob": 52
          },
          "halftime": {
            "scenario": "半场0-0",
            "prediction": "下半场 Marsch 换战术+主场声浪；Džeko 若替补登场或成变数，但首发阶段加拿大破门概率60%",
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
        "home_score": 68,
        "away_score": 38,
        "mystic_verdict": "☷ 泰卦天地交——加拿大官方首发不变、地利仍存；波黑 Džeko 替补如「老将藏锋」，Lukić 难承支点，主队小胜之势略增。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 1,
        "away_score": 1,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Lukic 21' (Kolašinac); Larin 78' (Promise David)",
        "highlights": "波黑首开纪录；Kolašinac 助攻+门线解围；加拿大61%控球扳平，队史世界杯首分"
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
      "note": "D组揭幕 · SoFi 主场 · 26人全员可用 · Enciso 存疑 · 官方首发待开球前公布 · 已结束 4-1",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "美国 vs 巴拉圭官方首发尚未公布（开球 09:00 北京时间，通常赛前约1小时确认）。下方为 ESPN/SI 最新媒体预测，非 FIFA 确认名单。",
        "predicted": {
          "formation": "4-2-3-1",
          "home": "Freese; Freeman, McKenzie, Ream, Robinson; McKennie, Adams; Dest, Tillman, Pulisic; Balogun",
          "away": "Fernández; Cáceres, G. Gómez, Alderete, Alonso; Cubas, D. Gómez; Almirón, Bobadilla, Sosa; Sanabria",
          "source": "ESPN 赛前预测 · 非官方",
          "alt": {
            "formation": "3-5-2",
            "home": "Freese; Freeman, McKenzie, Ream; Dest, McKennie, Adams, Tillman, Robinson; Balogun, Pulisic",
            "source": "SI 最新预测 · Richards 可能替补 · 非官方"
          }
        },
        "updated": "2026-06-13T03:30:00+08:00"
      },
      "home": {
        "name": "USA",
        "iso": "us",
        "flag": "",
        "fifa_rank": 13,
        "rating": 79,
        "form": [
          "L",
          "L",
          "L",
          "W",
          "D"
        ],
        "coach": "Mauricio Pochettino",
        "stars": [
          {
            "name": "Christian Pulisic",
            "pos": "LW/AM",
            "club": "AC Milan",
            "stats": "84 caps · 30+ 球 · 对塞内加尔破门",
            "rating": 8.6,
            "desc": "队长兼进攻核心，热身赛打破进球荒状态回升。Pochettino 4-2-3-1 中担任左路/肋部威胁点，是撕开巴拉圭防线的第一突破口",
            "number": 10,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Folarin Balogun",
            "pos": "ST",
            "club": "AS Monaco",
            "stats": "国家队 18+ 场 · 热身赛主力中锋",
            "rating": 7.9,
            "desc": "预计首发中锋，与 Pulisic、Dest 组成前场三角。巴拉圭中卫 Gómez-Alderete 组合需限制其跑位与二点攻击",
            "number": 20,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Weston McKennie",
            "pos": "CM",
            "club": "Juventus",
            "stats": "拦截 2.8/场 · 对德葡比均首发",
            "rating": 7.8,
            "desc": "与 Tyler Adams 组成双后腰，负责限制 Almirón 与 Paraguay 反击出球。热身赛全程主力，体能与覆盖是中场关键",
            "number": 8,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "injuries": [
          {
            "player": "全队（26人）",
            "status": "FIT",
            "note": "Pochettino 6月11日洛杉矶赛前发布会官方确认：26人大名单全部可供选择，无伤病缺阵",
            "confirmed": true
          },
          {
            "player": "Chris Richards",
            "status": "FIT",
            "note": "5月水晶宫时期踝伤已愈，缺席对塞内加尔/德国热身后复出；可搭档 McKenzie 或 Ream 中卫，首发与否待公布",
            "confirmed": true
          },
          {
            "player": "Christian Pulisic",
            "status": "FIT",
            "note": "米兰赛季末无伤病，热身对塞内加尔进球，锁定首发",
            "confirmed": true
          },
          {
            "player": "Giovanni Reyna",
            "status": "FIT",
            "note": "Pochettino 确认全员可用，Reyna 可替补提供进攻变化",
            "confirmed": true
          },
          {
            "player": "Sergiño Dest",
            "status": "FIT",
            "note": "预计出任右翼锋（非传统边卫），ESPN/SBI 预测首发，为 Balogun 输送传中",
            "confirmed": false
          }
        ],
        "rumors": [
          "Pochettino：「26人全部可用，这是医疗团队了不起的工作；对 Paraguay 会非常艰难」",
          "2026年4场热身3负（德国、葡萄牙、比利时），仅3-2胜塞内加尔——东道主压力与近期状态成反差",
          "Pochettino 熟悉南美风格，称 Paraguay「像兄弟一样难缠」，警告不可轻敌",
          "SoFi Stadium 开幕仪式 + 9pm ET 开球，预计7万观众，Fox 全美直播",
          "Dest 改打边锋、Balogun 中锋的 4-2-3-1 是本场最可能阵型（媒体预测，待官方确认）"
        ],
        "star": {
          "name": "Christian Pulisic",
          "pos": "LW/AM",
          "club": "AC Milan",
          "desc": "队长兼进攻核心，热身赛打破进球荒状态回升。Pochettino 4-2-3-1 中担任左路/肋部威胁点，是撕开巴拉圭防线的第一突破口",
          "rating": 8.6,
          "stats": "84 caps · 30+ 球 · 对塞内加尔破门",
          "number": 10,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        }
      },
      "away": {
        "name": "Paraguay",
        "iso": "py",
        "flag": "",
        "fifa_rank": 52,
        "rating": 67,
        "form": [
          "D",
          "D",
          "W",
          "W",
          "L"
        ],
        "coach": "Gustavo Alfaro",
        "stars": [
          {
            "name": "Miguel Almirón",
            "pos": "RW/AM",
            "club": "Atlanta United",
            "stats": "国家队 60+ 场 · 预选赛关键创造者",
            "rating": 7.9,
            "desc": "进攻唯一稳定核心，Enciso 缺阵后创造力重任全落其肩。美国双后腰 McKennie-Adams 需重点限制其接球转身",
            "number": 10,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Gustavo Gómez",
            "pos": "CB",
            "club": "Palmeiras",
            "stats": "队长 · 解放者杯冠军 · 预选赛7场零封参与",
            "rating": 7.7,
            "desc": "队长中卫，Alfaro 体系防守基石。与 Alderete 搭档四后卫，定位球防守是美国角球/传中重点",
            "number": 15,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Antonio Sanabria",
            "pos": "ST",
            "club": "Torino",
            "stats": "意甲经验 · 支点与反击终结",
            "rating": 7.4,
            "desc": "单前锋支点，Enciso 不在时反击依赖 Almirón-Bobadilla 支援。美国中卫 Ream-McKenzie 需限制其背身拿球",
            "number": 9,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "injuries": [
          {
            "player": "Julio Enciso",
            "status": "DOUBT",
            "note": "对尼加拉瓜热身赛肌肉拉伤，揭幕战大概率缺阵；非整届报销，后续场次有望复出",
            "confirmed": true
          },
          {
            "player": "Gustavo Gómez",
            "status": "FIT",
            "note": "队长中卫完全健康，预计与 Alderete 搭档四后卫",
            "confirmed": true
          },
          {
            "player": "Miguel Almirón",
            "status": "FIT",
            "note": "完全健康，进攻核心锁定首发",
            "confirmed": true
          },
          {
            "player": "Omar Alderete",
            "status": "FIT",
            "note": "ESPN 预测首发中卫，媒体预测尚未官方确认",
            "confirmed": false
          },
          {
            "player": "Diego Gómez",
            "status": "FIT",
            "note": "ESPN 预测首发中场，与 Cubas 搭档；媒体预测尚未官方确认",
            "confirmed": false
          }
        ],
        "rumors": [
          "Alfaro 回归传统：高位身体对抗 + 紧凑四后卫，预选赛12场仅1负、7场零封",
          "Enciso 缺阵削弱前腰创造力，Bobadilla/Sosa 或顶替其位置，反击更依赖 Almirón 个人",
          "Alfaro 赛前：「我们不惧怕东道主，防守是我们的语言」",
          "2010年后首次世界杯，2010年曾进八强；预选赛曾胜巴西、阿根廷",
          "热身赛0-0北马其顿、1-1巴拿马，进攻效率一般但防守组织稳固"
        ],
        "star": {
          "name": "Miguel Almirón",
          "pos": "RW/AM",
          "club": "Atlanta United",
          "desc": "进攻唯一稳定核心，Enciso 缺阵后创造力重任全落其肩。美国双后腰 McKennie-Adams 需重点限制其接球转身",
          "rating": 7.9,
          "stats": "国家队 60+ 场 · 预选赛关键创造者",
          "number": 10,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        }
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
          },
          {
            "year": 2010,
            "comp": "友谊赛",
            "score": "1-0",
            "winner": "USA",
            "venue": "USA"
          },
          {
            "year": 2007,
            "comp": "Copa América",
            "score": "3-0",
            "winner": "Paraguay",
            "venue": "Neutral"
          }
        ],
        "all_time": {
          "played": 5,
          "usa": 3,
          "draws": 1,
          "paraguay": 1,
          "usa_goals": 6,
          "paraguay_goals": 3
        },
        "note": "美国历史占优，但巴拉圭防守韧性不可低估"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "name": "Danny Makkelie",
        "nation": "荷兰",
        "iso": "nl",
        "age": 43,
        "source": "FIFA / ESPN · 2026-06-12",
        "var": "Carlos del Cerro Grande（哥斯达黎加）",
        "wc_experience": "Qatar 2022（2场）· 欧洲杯 2020 半决赛 · 欧联杯 2020 决赛",
        "avg_yellow": 3,
        "avg_red": 0,
        "avg_penalty": 0.25,
        "home_win_rate": 50,
        "bias_index": 50,
        "bias_note": "2022世界杯2场共6黄0红，场均3黄。补时倾向较慷慨（欧洲杯曾补时8分钟引发讨论），执法尺度职业、对东道主无显著偏袒。Paraguay 身体对抗风格下黄牌风险中等",
        "tendencies": [
          "补时倾向偏长",
          "大赛经验丰富",
          "对东道主无显著偏袒",
          "点球判罚标准职业"
        ]
      },
      "prediction": {
        "home_win": 61,
        "draw": 24,
        "away_win": 15,
        "score": "2-0",
        "confidence": 75,
        "xg_home": 2.2,
        "xg_away": 0.85,
        "key_factor": "【赛后复盘】赛前主胜61%/最可能2-0；实际4-1。Balogun 双响，Enciso 替补助攻（赛前存疑却出场）。美国超预期，模型胜方向正确但低估进球数。"
      },
      "weather": {
        "city": "洛杉矶",
        "country": "美国",
        "temp": 28,
        "humidity": 55,
        "altitude": 30,
        "altitude_m": 30,
        "rain_chance": 5,
        "wind": "西风 2级",
        "condition_cn": "晴朗，午后偏热",
        "impact_level": "MEDIUM",
        "impact": "28°C 午后气温对体能消耗有影响，Paraguay 南美球员适应性略优",
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
          },
          {
            "label": "海平面 30m",
            "impact": "无海拔",
            "detail": "双方体能条件对等"
          },
          {
            "label": "晴朗无雨",
            "impact": "中性",
            "detail": "视野良好，有利于边路进攻"
          }
        ],
        "historical_note": "SoFi Stadium 2026世界杯D组主场，美国队在此尚未输球"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "癸未日",
          "day_element": "水+土",
          "hour_home": "巳时（09:00-11:00）",
          "hour_home_element": "火",
          "day_dominant": "火",
          "day_summary": "癸未日巳时——火旺土燥，东道主如烈日当空。《道德经》：「知人者智，自知者明。」美国需避免轻敌。巳时火旺，主场气势正盛，但需防骄躁。"
        },
        "wuxing": {
          "home": {
            "team": "USA",
            "colors": "白+蓝+红",
            "elements": "金、水、火",
            "wuxing_short": "火金土旺",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 88,
            "reason": "美国队服多色，巳时火旺，主场气势正盛",
            "advantage": "上半场压制力强"
          },
          "away": {
            "team": "Paraguay",
            "colors": "白+蓝+红",
            "elements": "金、水、火",
            "wuxing_short": "同色相对",
            "verdict": "中性",
            "verdict_color": "#C8A96E",
            "compat": 52,
            "reason": "两队队服五行相近，比拼纯竞技与战术",
            "disadvantage": "客场气场略逊"
          },
          "summary": "五行裁定：美国火时顺局，巴拉圭同色相争需靠防守"
        },
        "hexagram": {
          "name": "大有卦",
          "symbol": "☲",
          "number": 14,
          "upper": "离火",
          "lower": "乾天",
          "quote": "《周易·大有卦》：「自天佑之，吉无不利。」",
          "general": "火在天上，光明盛大。利于占据主场、气势正盛的一方。",
          "advantage_team": "USA",
          "disadvantage_team": "Paraguay",
          "hexagram_analysis": "大有卦火在天上，美国主场如烈日当空。全员可用+Pulisic 状态回升为「自天佑之」；但近期热身3负显骄躁隐患。Paraguay 缺 Enciso 如星火将熄，Almirón 成唯一变数。",
          "match_nature": "东道主控场局",
          "match_nature_prob": 61,
          "yellow_card_risk": "低",
          "yellow_card_reason": "预计3-4张黄牌，Paraguay 战术犯规为主",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "美国控场小胜61%，平局24%，巴拉圭爆冷15%"
            },
            {
              "icon": "⏱",
              "label": "进球高峰",
              "text": "第30-45分钟及第75-90分钟"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "低——约3-4张，Paraguay 低位铲球"
            },
            {
              "icon": "🔄",
              "label": "0-0平局可能",
              "text": "低（25%）——大有卦主自天佑之，主队终有收获"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "极低（5%）——90分钟内分出胜负概率95%"
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
            "prediction": "Paraguay 4-4-1-1 压缩空间奏效，但 Enciso 不在削弱反击；下半场美国换人+主场声浪成为关键",
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
        "mystic_verdict": "☲ 大有卦火在天上——美国26人齐聚如天助，Pulisic 光热渐盛。Paraguay 缺 Enciso 星火将熄，Almirón 独撑难支。然热身三负警示：骄者必败，顺者吉亨。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 4,
        "away_score": 1,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Bobadilla OG 7'; Balogun 31', 45+5 (Pulisic/Tillman); Mauricio 73' (Enciso); Reyna 90+8 (Freeman)",
        "highlights": "Balogun 双响；Enciso 替补送出助攻；美国主场4-1大胜领跑D组"
      }
    },
    {
      "id": "m05",
      "group": "B",
      "matchday": 1,
      "date": "2026-06-13",
      "time": "12:00",
      "time_local": "12:00 PT / 15:00 ET",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "03:00",
      "date_beijing": "6月14日",
      "time_beijing_full": "北京时间 6月14日 03:00",
      "venue": "Levi's Stadium",
      "city": "Santa Clara, USA",
      "note": "B组第2场 · 卡塔尔 vs 瑞士 · 已结束 1-1",
      "lineup": {
        "confirmed": true,
        "formation": "4-3-3 / 4-3-3",
        "home": "Abunada; Al Oui, Pedro Miguel, Khoukhi (C), Homam Elamin; Gaber, Madibo, Laye; Edmilson, Abdurisag, Afif",
        "away": "Kobel; Zakaria, Elvedi, Akanji, Rodríguez; Aebischer, Xhaka (C), Freuler; Ndoye, Embolo, Vargas",
        "note": "FotMob · FIFA 官方 team sheet · 全场 1-1。瑞士实际 4-3-3（Zakaria 后腰、Rodríguez 左后卫）；Khoukhi 90+4' 绝平 Embolo 17' 点球。",
        "predicted": {
          "formation": "4-3-3",
          "home": "Abunada; Al-Oui, Pedro Miguel, Khoukhi, Homam Ahmed; Laye, Fathi, Gaber; Edmilson, Almoez Ali, Afif",
          "away": "Kobel; Widmer, Elvedi, Akanji, Rodríguez; Freuler, Xhaka; Ndoye, Rieder, Vargas; Embolo",
          "source": "Sportstar · 2026-06-13 22:38 预测 · 非官方",
          "alt": {
            "formation": "4-3-3",
            "home": "Abunada; Al-Oui, Khoukhi, Pedro Miguel, Homam Ahmed; Laye, Fathi, Gaber; Abdurisag, Afif, Edmilson",
            "away": "Kobel; Widmer, Akanji, Elvedi, Rodríguez; Xhaka, Freuler; Vargas, Rieder, Ndoye; Amdouni",
            "source": "Sports Mole · 2026-06-13 预测 · 非官方"
          }
        },
        "diff": {
          "home": "✅ 与预测基本一致：Homam Elamin 左后卫、Madibo 后腰、Abdurisag 锋线",
          "away": "⚠️ 实际 4-3-3 非部分媒体赛前 3-4-3 预测；Zakaria 后腰非中卫、Rodríguez 左后卫"
        },
        "source": "FotMob · FIFA 官方 team sheet · 2026-06-14",
        "updated": "2026-06-14T22:30:00+08:00"
      },
      "home": {
        "name": "Qatar",
        "iso": "qa",
        "flag": "",
        "fifa_rank": 68,
        "rating": 60,
        "form": [
          "L",
          "D",
          "L",
          "W",
          "L"
        ],
        "coach": "Julen Lopetegui",
        "stars": [
          {
            "name": "Akram Afif",
            "pos": "LW/AM",
            "club": "Al-Sadd",
            "stats": "125+ caps · 39 国家队进球 · 队长",
            "rating": 8.2,
            "desc": "卡塔尔进攻核心，预选赛15次参与进球。SI/Sports Mole 均预计与 Abdurisag、Edmilson 组成锋线三叉戟",
            "number": 11,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Boualem Khoukhi",
            "pos": "CB",
            "club": "Al-Sadd",
            "stats": "19 国家队进球 · 定位球威胁",
            "rating": 7.4,
            "desc": "中卫+定位球得分点，Sports Mole 预计与 Pedro Miguel 搭档中卫；瑞士高位压迫下后场出球关键",
            "number": 16,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Hassan Al-Haydos",
            "pos": "CM",
            "club": "Al-Sadd",
            "stats": "186 国家队出场 · 队长（大名单）",
            "rating": 7.3,
            "desc": "队史出场王，SI 称可能替补；若未首发则 Afif 领衔 younger front three",
            "number": 10,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "star": {
          "name": "Akram Afif",
          "pos": "LW/AM",
          "club": "Al-Sadd",
          "desc": "卡塔尔进攻核心，预选赛15次参与进球。SI/Sports Mole 均预计与 Abdurisag、Edmilson 组成锋线三叉戟",
          "rating": 8.2,
          "stats": "125+ caps · 39 国家队进球",
          "number": 11,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "全队（26人）",
            "status": "FIT",
            "note": "Yahoo Sports / Sports Mole：Lopetegui 全员健康，无报告伤病缺阵",
            "confirmed": true
          },
          {
            "player": "Mahmud Abunada",
            "status": "FIT",
            "note": "FotMob 官方首发确认：Abunada 一门",
            "confirmed": true
          },
          {
            "player": "Almoez Ali",
            "status": "FIT",
            "note": "官方 XI：替补席；Abdurisag 与 Afif、Edmilson 组成锋线三叉戟",
            "confirmed": true
          }
        ],
        "rumors": [
          "Lopetegui（Yahoo Sports）：首次通过竞技途径晋级，需保持防守纪律但不被动退缩",
          "Sports Mole：Afif + Abdurisag + Edmilson 为首选进攻组合；Abunada 门将位置领先 Barsham",
          "WorldCupWiki：26人中25人效力卡塔尔联赛，Homam Ahmed（Cultural Leonesa）唯一海外球员",
          "B组：加拿大、波黑各1分，卡塔尔/瑞士均为0分——揭幕战抢分压力大",
          "2018 友谊赛卡塔尔曾 1-0 胜瑞士，但 Opta 仍倾向瑞士控场小胜"
        ]
      },
      "away": {
        "name": "Switzerland",
        "iso": "ch",
        "flag": "",
        "fifa_rank": 19,
        "rating": 77,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "D"
        ],
        "coach": "Murat Yakin",
        "stars": [
          {
            "name": "Granit Xhaka",
            "pos": "CM",
            "club": "Sunderland",
            "stats": "队长 · 100+ caps",
            "rating": 8,
            "desc": "中场节拍器，SI 确认与 Freuler 双后腰；Yakin 战术核心",
            "number": 10,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Breel Embolo",
            "pos": "ST",
            "club": "Rennes",
            "stats": "24 国家队进球",
            "rating": 7.8,
            "desc": "FotMob 官方首发确认中锋；Amdouni 替补",
            "number": 7,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Dan Ndoye",
            "pos": "RW",
            "club": "Nottingham Forest",
            "stats": "速度型边锋",
            "rating": 7.6,
            "desc": "FotMob 官方首发确认：3-4-3 左路宽度",
            "number": 11,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "star": {
          "name": "Granit Xhaka",
          "pos": "CM",
          "club": "Sunderland",
          "desc": "中场节拍器，官方 XI 与 Freuler 双后腰；Yakin 战术核心",
          "rating": 8,
          "stats": "队长 · 100+ caps",
          "number": 10,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "Rubén Vargas",
            "status": "FIT",
            "note": "FotMob 官方首发确认：3-4-3 右翼",
            "confirmed": true
          },
          {
            "player": "Manuel Akanji",
            "status": "FIT",
            "note": "FotMob 官方首发确认：三中卫居中",
            "confirmed": true
          },
          {
            "player": "Gregor Kobel",
            "status": "FIT",
            "note": "FotMob 官方首发确认",
            "confirmed": true
          }
        ],
        "rumors": [
          "Sports Mole 6/12：卡塔尔、瑞士均无报告伤病缺阵",
          "Yakin 攻击线人选未定：Embolo（SI）vs Amdouni（Sports Mole）中锋之争",
          "SI：中场 Sow/Jashari/Zakaria 可能替补，Xhaka-Freuler 搭档锁定",
          "101 Great Goals / SI 预测瑞士 2-0 至 0-3 不等，均认为卡塔尔难以破局",
          "近四届世界杯三次进16强，Yakin 强调高位逼抢+快速转移",
          "媒体报道主裁或为 Said Martínez（洪都拉斯）· 待 FIFA 确认"
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
            "winner": "Switzerland"
          }
        ],
        "note": "瑞士历史占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "name": "Héctor Saíd Martínez Sorto",
        "nation": "Honduras",
        "iso": "hn",
        "age": 34,
        "source": "FotMob · FIFA match sheet · 2026-06-13",
        "var": "Mauro Vigliano（阿根廷）",
        "wc_experience": "Qatar 2022（9场助理裁判）· 2026 史首名洪都拉斯主裁 · Gold Cup 2021/2023 决赛",
        "avg_yellow": 4.2,
        "avg_red": 0.18,
        "avg_penalty": 0.12,
        "home_win_rate": 48,
        "bias_index": 50,
        "bias_note": "CONCACAF 区域执法：165场场均约4.2黄、0.18红（Sportstar/PlayerStats），尺度偏严但不滥发红牌。2022世界杯仅任助理裁判，本场为世界杯主裁首秀——对低位铲抢与高位压迫战术犯规出牌果断，瑞士传控型球队需控制犯规次数。",
        "tendencies": [
          "CONCACAF 大赛经验丰富（金杯赛决赛×2）",
          "场均黄牌高于世界杯均值，战术犯规易吃牌",
          "红牌率相对克制（约5场1红）",
          "对东道主/弱队无显著偏袒记录",
          "2026 世界杯主裁首秀，上半场或略宽松"
        ]
      },
      "prediction": {
        "home_win": 18,
        "draw": 24,
        "away_win": 58,
        "score": "0-2",
        "confidence": 76,
        "xg_home": 0.92,
        "xg_away": 1.78,
        "key_factor": "瑞士控场却仅平——Embolo 点球首开，Khoukhi 90+4' 绝平。xG 0.76-3.24 反映瑞士浪费大量机会；卡塔尔 Homam Elamin 助攻绝平。"
      },
      "upset_alert": {
        "favorite": "瑞士",
        "underdog": "卡塔尔",
        "favorite_iso": "CH",
        "index": 26,
        "level": "LOW",
        "level_cn": "偏低",
        "cold_result_pct": 42,
        "verdict": "瑞士控场能力稳定，卡塔尔爆冷取胜概率偏低；更现实的冷门形态是 0-0 / 1-1 逼平。",
        "tactical": "Yakin 高位逼抢+快速转移，卡塔尔双后腰易被 Xhaka 调度拉扯；但若 Widmer/Rodríguez 压上过深，Afif 一对一速度仍有偷袭窗口。",
        "psychology": "卡塔尔 2022 东道主经验尚在，落后时不易崩盘；瑞士近四届世界杯三次进 16 强，小组赛心态成熟，先丢球后内讧风险低。",
        "historical": "2018 友谊赛卡塔尔 1-0 瑞士（样本小）；瑞士近三届世界杯小组赛仅 1 负（2018 0-1 瑞典），对「非传统强队」失分记录少。",
        "factors": [
          {
            "tag": "克制",
            "impact": "弱",
            "detail": "瑞士中场控制+防线高度，卡塔尔反击难成体系"
          },
          {
            "tag": "速度错配",
            "impact": "中",
            "detail": "Afif 若孤立拿球，瑞士边卫回追速度足够"
          },
          {
            "tag": "定位球",
            "impact": "中",
            "detail": "卡塔尔 Khoukhi/Almoez 头球是少数破局手段"
          },
          {
            "tag": "心理",
            "impact": "弱",
            "detail": "瑞士大赛稳定性高，不易被早进球击垮"
          }
        ]
      },
      "weather": {
        "city": "圣克拉拉",
        "country": "美国",
        "temp": 24,
        "humidity": 50,
        "altitude_m": 7,
        "rain_chance": 5,
        "wind": "西北风 2级",
        "condition_cn": "晴朗，湾区午后气温舒适",
        "impact_level": "LOW",
        "impact": "Levi's Stadium 海平面7m，湾区午后24°C干燥晴朗，几乎无气候变量",
        "impact_summary": "湾区午后24°C干燥晴朗，利于传控与高位压迫；无海拔、无降雨干扰",
        "home_adapt": 75,
        "away_adapt": 82,
        "home_note": "卡塔尔球员习惯高温干燥，24°C 对其反而偏凉，需开场快速进入节奏；2022 东道主经验仍在",
        "away_note": "瑞士来自温带气候，50% 湿度与 24°C 完全适应；Xhaka 领衔的传控打法不受天气制约",
        "weather_factors": [
          {
            "label": "24°C 干燥晴朗",
            "impact": "有利传控",
            "detail": "低湿度+无雨，传球速度快，瑞士中场转移与卡塔尔反击均不受场地拖累"
          },
          {
            "label": "海平面 7m",
            "impact": "无海拔影响",
            "detail": "双方体能条件对等，不存在高原缺氧变量"
          },
          {
            "label": "湾区午后开球",
            "impact": "瑞士略优",
            "detail": "本地 12:00 PT 开球，气温尚未升至日间峰值；瑞士整体适应度评分略高（82 vs 75）"
          },
          {
            "label": "低降雨 5%",
            "impact": "中性",
            "detail": "天然草皮干燥，有利于地面配合，不利于长传冲吊"
          }
        ],
        "historical_note": "Levi's Stadium 承办世界杯B组赛事；湾区气候稳定，历来极少因天气改期"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "甲申日",
          "day_element": "木+金",
          "hour_home": "寅时（03:00-05:00）",
          "hour_home_element": "木",
          "day_dominant": "金",
          "day_summary": "甲申日——天干甲木与地支申金相冲，日柱金气为当日之主。《道德经》曰：「金玉满堂，莫之能守。」金旺之日，宜以金德行事后进，不宜火性妄动。寅时木气初升，木生火有限，难改日柱金势。"
        },
        "wuxing": {
          "home": {
            "team": "Qatar",
            "colors": "酒红+白",
            "elements": "火、金",
            "wuxing_short": "火金相战，金多火熄",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "compat": 38,
            "reason": "酒红属火，白属金。甲申日金旺当令，卡塔尔双金（服色+日柱）叠见，火被金泄而难伸，如「孤火遇金风」。《周易·说卦》：「兑为泽、为金」——主队气场如泽下之火，受金气所困。",
            "disadvantage": "火性不得伸张，宜守不宜攻"
          },
          "away": {
            "team": "Switzerland",
            "colors": "红+白",
            "elements": "火、金",
            "wuxing_short": "金火顺局，兑泽在上",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 78,
            "reason": "红白亦属火金，然客队行兑金之位，与申日金气同频共振。庚午月金火并见，金气归行于外，如「金声玉振」。《道德经》：「大制不割」——瑞士金德完整，流转而不散。",
            "advantage": "金气顺日，泽润而进"
          },
          "summary": "五行裁定：甲申金日，双队同火金而位势不同——客队兑金顺天，主队火熄于泽；寅时木助有限，难改大局"
        },
        "hexagram": {
          "name": "困卦",
          "symbol": "☱",
          "number": 47,
          "upper": "兑泽",
          "lower": "坎水",
          "quote": "《周易·困卦》：「困，亨，贞，大人吉，无咎。有言尚。」",
          "general": "泽水困——上兑为泽、下坎为水，泽无水之源则困。主队如泽下之火，受困而难亨；大人（金德顺局者）贞守则吉。",
          "advantage_team": "Switzerland",
          "disadvantage_team": "Qatar",
          "hexagram_analysis": "困卦非纯凶——「亨，贞」示守正者可无咎。然「大人吉」指向金德完整、行止有常之一方：兑泽在上，金气下行，客队如泽润万物。主队坎水在下，火性受困，唯「有言尚」——口号与士气尚在，难改卦象大势。",
          "match_nature": "客队控场小胜",
          "match_nature_prob": 58,
          "yellow_card_risk": "中高",
          "yellow_card_reason": "Martínez 生涯场均4.2黄；卡塔尔低位铲抢+瑞士压迫战术犯规，预计4-6张",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "瑞士客胜58%，平局24%，卡塔尔爆冷18%"
            },
            {
              "icon": "⏱",
              "label": "进球高峰",
              "text": "第25-40分钟及第70-85分钟——瑞士转移提速段"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中等——卡塔尔防守三区犯规增多"
            },
            {
              "icon": "🔄",
              "label": "0-0平局可能",
              "text": "低（约12% 泊松）——瑞士破局手段明显更多"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "极低（5%）——90分钟内分胜负概率95%"
            }
          ],
          "early_goal": {
            "scenario": "若瑞士先进球",
            "prediction": "困卦「大人吉」——卡塔尔被迫压上，Afif 反击空间增大但防线漏洞亦增，瑞士再下一城概率58%",
            "favors": "Switzerland",
            "favors_prob": 62
          },
          "no_early_goal": {
            "scenario": "若前30分钟无进球",
            "prediction": "卡塔尔密集防守消耗体力；Xhaka 远射与定位球成破局关键，瑞士下半场破门概率55%",
            "favors": "Switzerland",
            "favors_prob": 55
          },
          "away_goal": {
            "scenario": "若卡塔尔先进球",
            "prediction": "瑞士整体实力占优，Embolo 支点+边路传中反扑力度大；扳平并反超概率52%",
            "favors": "Switzerland",
            "favors_prob": 52
          },
          "halftime": {
            "scenario": "半场0-0",
            "prediction": "下半场瑞士体能与板凳深度占优，Yakin 换边后提速，客队破局概率58%",
            "favors": "Switzerland",
            "favors_prob": 58
          },
          "extra_time": {
            "scenario": "加时",
            "prediction": "极低概率（5%）",
            "favors": "Switzerland",
            "favors_prob": 55
          }
        },
        "home_score": 38,
        "away_score": 78,
        "mystic_verdict": "☱ 困卦泽水困——甲申金日，卡塔尔火金相战而火熄；瑞士兑金顺天，如「金玉满堂」之守而有度。大人吉在贞守金德者，非力之强弱，乃气之顺逆。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 1,
        "away_score": 1,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Embolo 17' (pen); Khoukhi 90+4'",
        "highlights": "瑞士控球 68%、xG 3.24 vs 0.76 仍被逼平；Khoukhi 头球绝平 · 出席 67,966"
      }
    },
    {
      "id": "m06",
      "group": "C",
      "matchday": 1,
      "date": "2026-06-13",
      "time": "18:00",
      "time_local": "18:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "06:00",
      "date_beijing": "6月14日",
      "time_beijing_full": "北京时间 6月14日 06:00",
      "venue": "MetLife Stadium",
      "city": "East Rutherford, USA",
      "note": "C组焦点战 · 巴西 vs 摩洛哥 · 已结束 1-1",
      "lineup": {
        "confirmed": true,
        "formation": "4-4-2 / 4-2-3-1",
        "home": "Alisson; Ibañez, Marquinhos (C), Gabriel, Douglas Santos; Paquetá, Guimarães, Casemiro, Raphinha; Igor Thiago, Vinícius Jr",
        "away": "Bounou; Hakimi (C), Diop, Riad, Mazraoui; El Aynaoui, Bouaddi; Díaz, Ounahi, El Khannouss; Saibari",
        "note": "FotMob · 全场 1-1。Saibari 21' 首开 · Vinícius 32' 扳平。巴西实际 4-4-2（非赛前 4-2-3-1）；HT 换 Danilo/Fabinho，62' Luiz Henrique 替 Igor Thiago。",
        "predicted": {
          "formation": "4-2-3-1",
          "home": "Alisson; Danilo, Marquinhos, Gabriel, Alex Sandro; Casemiro, Guimarães; Raphinha, Paquetá, Vinícius Jr; Cunha",
          "away": "Bounou; Hakimi, Diop, Riad, Mazraoui; Bouaddi, El Aynaoui; Díaz, Ounahi, El Khannouss; Saibari",
          "source": "FotMob · 2026-06-14 Predicted · 非官方",
          "alt": {
            "formation": "4-2-3-1",
            "home": "Alisson; Danilo, Marquinhos, Gabriel, Alex Sandro; Casemiro, Guimarães; Raphinha, Paquetá, Vinícius Jr; Cunha",
            "away": "Bounou; Hakimi, Diop, Riad, Mazraoui; Amrabat, El Aynaoui; Díaz, Ounahi, El Khannouss; Saibari",
            "source": "Sports Mole · 2026-06-13 预测 · 非官方"
          }
        },
        "diff": {
          "home": "⚠️ 开球 4-4-2 非预测 4-2-3-1；半场 Danilo+Fabinho 换 Ibañez+Casemiro；Douglas Santos 7.8 全场最佳",
          "away": "✅ 与预测一致；Saibari 破门 · El Khannouss 7.5"
        },
        "source": "FotMob · FIFA 官方 team sheet · 2026-06-14",
        "updated": "2026-06-15T00:00:00+08:00"
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
          "W",
          "D",
          "W"
        ],
        "coach": "Carlo Ancelotti",
        "stars": [
          {
            "name": "Vinícius Jr.",
            "pos": "LW",
            "club": "Real Madrid",
            "stats": "皇马赛季核心 · 左路爆点",
            "rating": 9,
            "desc": "32' 扳平进球 · 7.3 评分；对位 Hakimi 仍是关键",
            "number": 7,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Lucas Paquetá",
            "pos": "AM",
            "club": "West Ham",
            "stats": "10号位竞争者",
            "rating": 8.2,
            "desc": "SI/Sports Mole 预测前腰；The Standard 称 Raphinha 可能居中，右路存疑",
            "number": 20,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Matheus Cunha",
            "pos": "ST",
            "club": "Manchester United",
            "stats": "对巴拿马热身首发",
            "rating": 8,
            "desc": "FotMob 官方 XI 先发中锋（替预测 Cunha）；Ancelotti 世界杯首战变阵",
            "number": 9,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "star": {
          "name": "Vinícius Jr.",
          "pos": "LW",
          "club": "Real Madrid",
          "desc": "The Standard/SI 几乎锁定左路首发；对位摩洛哥 Hakimi 是本场关键对位",
          "rating": 9,
          "stats": "皇马赛季核心",
          "number": 7,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "Neymar",
            "status": "OUT",
            "note": "Ancelotti/BBC 6/13 官宣缺阵揭幕战；二级小腿伤，预计下周归队合练，对海地战亦存疑",
            "confirmed": true
          },
          {
            "player": "Wesley",
            "status": "OUT",
            "note": "SI：因伤缺席整届世界杯；右路 Danilo 顶替，CBS 曾预测 Wesley 右后卫",
            "confirmed": true
          },
          {
            "player": "Gabriel Magalhães",
            "status": "FIT",
            "note": "Champions League 决赛后归队较晚，未踢热身但 SI/Sports Mole 预测与 Marquinhos 搭档中卫",
            "confirmed": false
          },
          {
            "player": "Alisson",
            "status": "FIT",
            "note": "The Standard：赛前发布会发言，暗示首发；3月以来仅第二次正式首发",
            "confirmed": false
          }
        ],
        "rumors": [
          "Ancelotti（SI）：Neymar 缺阵改变进攻结构，Paquetá/Raphinha 角色更关键",
          "The Standard：Raphinha 可能踢中路，右路 Endrick/Rayan/Martinelli 竞争",
          "CBS Sports：巴西右卫 Alex Sandro 存疑，Hakimi-Díaz 右路将考验巴西边路",
          "Sports Mole 预测 3-1；SI 预测 2-1——均认为摩洛哥防线经验不足",
          "SI 报道主裁 Slavko Vinčić（斯洛文尼亚）· FotMob 已确认"
        ]
      },
      "away": {
        "name": "Morocco",
        "iso": "ma",
        "flag": "",
        "fifa_rank": 14,
        "rating": 79,
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
            "stats": "2022 四强主力 · 边路往返",
            "rating": 8.5,
            "desc": "SI/Sports Mole 均锁定右后卫；与 Brahim Díaz 组成右路威胁",
            "number": 2,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Brahim Díaz",
            "pos": "RW/AM",
            "club": "Real Madrid",
            "stats": "26场14球 · 对挪威破门",
            "rating": 8.3,
            "desc": "Sports Mole 预计首发；SI 与 El Khannouss、Ounahi 组成攻击线",
            "number": 10,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Sofyan Amrabat",
            "pos": "DM",
            "club": "Fenerbahçe",
            "stats": "2022 世界杯主力后腰",
            "rating": 7.8,
            "desc": "Sports Mole 预测首发屏障；SI 备选 Bouaddi/El Aynaoui 双后腰",
            "number": 4,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "star": {
          "name": "Achraf Hakimi",
          "pos": "RB",
          "club": "PSG",
          "desc": "SI/Sports Mole 均锁定右后卫；与 Brahim Díaz 组成右路威胁",
          "rating": 8.5,
          "stats": "2022 四强主力",
          "number": 2,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "Nayef Aguerd",
            "status": "OUT",
            "note": "Sports Mole / SI / RotoWire：腹股沟伤退出世界杯，由 Diop+Riad 顶替中卫",
            "confirmed": true
          },
          {
            "player": "Abde Ezzalzouli",
            "status": "OUT",
            "note": "Sports Mole：膝伤退出世界杯；替补征召 Marwane Saadane、Amine Sbai",
            "confirmed": true
          },
          {
            "player": "Noussair Mazraoui",
            "status": "FIT",
            "note": "SI 6/13：对挪威肩部伤后已恢复训练，预计首发左后卫（Hakimi 右、Mazraoui 左）",
            "confirmed": false
          }
        ],
        "rumors": [
          "BBC/SI 6/13：Ancelotti 确认 Neymar 缺席揭幕战，Vinícius 领衔进攻",
          "Regragui：Aguerd/Abde 缺阵削弱防线与定位球，Diop（Fulham）+ Riad（Crystal Palace）新中卫组合",
          "SI：Saibari 灵活中锋，El Khannouss 10号位——无 Abde 后定位球选项减少",
          "Sports Mole：Amrabat 仍在预测 XI，与 SI 的 Bouaddi 方案存在分歧",
          "2022 四强士气仍在，但 RotoWire 称防线「inexperienced backline」",
          "CBS：摩洛哥中场技术可匹敌巴西，个人闪光或决定走势"
        ]
      },
      "h2h": {
        "home_wins": 2,
        "draws": 0,
        "away_wins": 0,
        "recent": [
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "Brazil"
          }
        ],
        "note": "巴西历史占优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "name": "Slavko Vinčić",
        "nation": "Slovenia",
        "iso": "si",
        "age": 45,
        "source": "FotMob · FIFA match sheet · 2026-06-13",
        "wc_experience": "Qatar 2022（2场：阿根廷-沙特6黄、威尔士-英格兰2黄）· 2024 欧冠决赛 · 欧洲杯执法",
        "avg_yellow": 4,
        "avg_red": 0,
        "avg_penalty": 0.5,
        "home_win_rate": 50,
        "bias_index": 48,
        "bias_note": "2022世界杯2场共8黄0红，场均4黄；阿根廷-沙特一战出牌较多但允许比赛流畅进行。2024欧冠决赛主裁，大场面经验丰富。本场巴西-摩洛哥边路对位激烈（Vinícius vs Hakimi），战术犯规与抗议吃牌风险偏高，但世界杯阶段红牌极少。",
        "tendencies": [
          "世界杯场均4黄，高于 Ghorbal/Valenzuela",
          "允许一定身体对抗，关键阶段才收紧",
          "2022 零红牌记录",
          "大赛决赛级经验（欧冠2024）",
          "对非洲/南美球队无显著判罚偏向"
        ]
      },
      "prediction": {
        "home_win": 58,
        "draw": 25,
        "away_win": 17,
        "score": "2-1",
        "confidence": 80,
        "xg_home": 2.05,
        "xg_away": 1.05,
        "key_factor": "1-1 平局——摩洛哥 Saibari 21' 偷袭，Vinícius 32' 扳平；巴西控球 51% 但 xG 略逊，Ancelotti 半场变阵未能破局。"
      },
      "upset_alert": {
        "favorite": "巴西",
        "underdog": "摩洛哥",
        "favorite_iso": "BR",
        "index": 44,
        "level": "ELEVATED",
        "level_cn": "偏高",
        "cold_result_pct": 42,
        "verdict": "四场中爆冷风险最高的一场——摩洛哥并非弱旅，边路速度+2022 防反 DNA 对巴西压上型打法有明确克制面；需重点防范。",
        "tactical": "Hakimi/Díaz 反击速度 vs 巴西边卫压上（媒体多次点出 Sandro 一侧回追隐患）；Aguerd 缺阵削弱摩洛哥防空，但巴西无 Neymar 后中路渗透效率下降，僵局时易被偷反击。",
        "psychology": "巴西东道主+五冠压力，Ancelotti 首战容错低；摩洛哥 2022 已证明大赛心理硬度，先破门后更可能收缩执行防反而非慌乱。",
        "historical": "摩洛哥 2022 爆冷比利时、西班牙进四强；巴西近三届世界杯首战 2 平 1 胜（2014 克罗地亚、2018 瑞士、2022 塞尔维亚），慢热+被克制平局有前例。",
        "factors": [
          {
            "tag": "克制",
            "impact": "强",
            "detail": "摩洛哥低位+快速转换，专打巴西控球压上后的身后空档"
          },
          {
            "tag": "速度错配",
            "impact": "强",
            "detail": "Hakimi 对位巴西左卫，Díaz 可惩罚中卫转身"
          },
          {
            "tag": "伤病",
            "impact": "中",
            "detail": "Neymar 缺阵削弱巴西破局；Aguerd 缺阵削弱摩洛哥防空——双向"
          },
          {
            "tag": "心理",
            "impact": "中",
            "detail": "巴西大赛期望值过高，先丢球时年轻球员易急躁"
          }
        ]
      },
      "weather": {
        "city": "东卢瑟福",
        "country": "美国",
        "temp": 26,
        "humidity": 58,
        "altitude_m": 3,
        "rain_chance": 15,
        "wind": "东南风 3级",
        "condition_cn": "多云，新泽西晚场温热",
        "impact_level": "LOW",
        "impact": "MetLife Stadium 海平面3m，6月晚场26°C、湿度58%，对大强度对攻消耗有限",
        "impact_summary": "新泽西晚场26°C温热，湿度中等；利于双方速度型球员，下半场体能仍充足",
        "home_adapt": 85,
        "away_adapt": 80,
        "home_note": "巴西球员习惯南美/欧洲夏季作战，26°C 完全适应；Vinícius 等速度型球员在温热夜场发挥最佳",
        "away_note": "摩洛哥来自地中海-撒哈拉过渡带，高温适应性优于多数欧洲队；Hakimi 边路往返能力不受气候制约",
        "weather_factors": [
          {
            "label": "26°C 晚场",
            "impact": "有利对攻",
            "detail": "未达午后酷热峰值，90分钟高强度可维持；xG 合计3.1，气候不会显著压低进球预期"
          },
          {
            "label": "湿度 58%",
            "impact": "中性",
            "detail": "略增体能消耗但不至明显，传球仍顺畅；比墨西哥城/瓜达拉哈拉低海拔场次影响小得多"
          },
          {
            "label": "东南风 3级",
            "impact": "轻微影响长传",
            "detail": "对 Alisson 开球方向与定位球落点有细微影响，职业球员可快速调整"
          },
          {
            "label": "15% 降雨可能",
            "impact": "中性",
            "detail": "概率低，场地预计干燥；若临场微雨则略利摩洛哥防反（球速稍慢、失误增多）"
          }
        ],
        "historical_note": "MetLife Stadium 承办世界杯C组关键战；纽约都会区6月晚场气候稳定，极少极端天气"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "甲申日",
          "day_element": "木+金",
          "hour_home": "卯时（05:00-07:00）",
          "hour_home_element": "木",
          "day_dominant": "金",
          "day_summary": "甲申日金木相战，卯时木气当令——一日之中木气最旺之刻。《周易·说卦》：「震为雷、为龙、为玄黄。」卯木生发，黄绿之队得时；然日柱申金克木，午后金气复归。"
        },
        "wuxing": {
          "home": {
            "team": "Brazil",
            "colors": "黄+绿",
            "elements": "土、木",
            "wuxing_short": "木土相生，卯时得令",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 85,
            "reason": "黄属土、绿属木。卯时木旺，木克土而土得木气之润——「木土相生」如大地逢春。丙午火年，火生土，主队气场如「厚德载物」。《道德经》：「道生之，德畜之」——巴西木土顺卯时，阳气生发。",
            "advantage": "卯时木气助生发，火年生土，顺时之局"
          },
          "away": {
            "team": "Morocco",
            "colors": "红+绿",
            "elements": "火、木",
            "wuxing_short": "火木相济而金日制木",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "compat": 45,
            "reason": "红属火、绿属木。卯时木旺本可助绿，然甲申日申金当令，金克木——「木遇金则折」。火木虽相济，如风中残烛，防反如「潜龙勿用」，宜守不宜妄动。",
            "disadvantage": "金日制木，火木之气难以伸张"
          },
          "summary": "五行裁定：卯时木旺利主队木土；摩洛哥火木受申金所制，宜潜藏守中"
        },
        "hexagram": {
          "name": "大壮卦",
          "symbol": "☳",
          "number": 34,
          "upper": "震雷",
          "lower": "乾天",
          "quote": "《周易·大壮卦》：「大壮，利贞。」",
          "general": "雷天大壮——震雷动于乾天之上，阳气盛大而不可妄进。「利贞」：正固者昌，躁进者凶。",
          "advantage_team": "Brazil",
          "disadvantage_team": "Morocco",
          "hexagram_analysis": "大壮非纯攻——「利贞」为戒。震雷在乾天，如龙行天上，利于木土得时、阳气正固之一方。摩洛哥火木受制，若学「羝羊触藩」则羸不能退，触藩而困。巴西木土顺卯时，当行「贞」道，不妄动而自强。",
          "match_nature": "主队小胜多球局",
          "match_nature_prob": 58,
          "yellow_card_risk": "中高",
          "yellow_card_reason": "Vinčić 世界杯场均4黄；Hakimi-Vinícius 边路缠斗+中场绞杀，预计5-7张",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "巴西主胜58%，平局25%，摩洛哥爆冷17%"
            },
            {
              "icon": "⏱",
              "label": "进球高峰",
              "text": "第15-30分钟及第60-75分钟——双方对攻最激烈时段"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中等偏高——边路对位+中场绞杀"
            },
            {
              "icon": "🔄",
              "label": "0-0平局可能",
              "text": "低（约8% 泊松）——双方 xG 合计超3"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "极低（6%）——C组焦点战倾向90分钟见分晓"
            }
          ],
          "early_goal": {
            "scenario": "若巴西先进球",
            "prediction": "大壮「利贞」——摩洛哥被迫压上，Hakimi 反击空间增大，但巴西控局再下一城概率60%",
            "favors": "Brazil",
            "favors_prob": 65
          },
          "no_early_goal": {
            "scenario": "若前30分钟无进球",
            "prediction": "双方试探后下半场提速；Vinícius 左路突破仍是破局点，巴西下半场破门概率58%",
            "favors": "Brazil",
            "favors_prob": 58
          },
          "away_goal": {
            "scenario": "若摩洛哥先进球",
            "prediction": "巴西整体实力与板凳深度占优，Ancelotti 换边后加强边路，扳平并反超概率55%",
            "favors": "Brazil",
            "favors_prob": 55
          },
          "halftime": {
            "scenario": "半场0-0",
            "prediction": "下半场巴西体能与人才储备占优，MetLife 夜场声浪助主队，破局概率62%",
            "favors": "Brazil",
            "favors_prob": 62
          },
          "extra_time": {
            "scenario": "加时",
            "prediction": "极低概率（6%）",
            "favors": "Brazil",
            "favors_prob": 58
          }
        },
        "home_score": 85,
        "away_score": 45,
        "mystic_verdict": "☳ 大壮雷天大壮——卯时木旺，巴西木土相生而顺时；摩洛哥火木遇申金则折。非力之强弱，乃「利贞」与「触藩」之分：正固者昌，妄动者困。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 1,
        "away_score": 1,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Saibari 21' (Díaz); Vinícius Jr 32' (Guimarães)",
        "highlights": "xG 1.27-1.52 · 巴西 20 届世界杯 opener 不败延续 · 出席 80,663 · Casemiro/Ibañez 各1黄"
      }
    },
    {
      "id": "m07",
      "group": "C",
      "matchday": 1,
      "date": "2026-06-13",
      "time": "21:00",
      "time_local": "21:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "09:00",
      "date_beijing": "6月14日",
      "time_beijing_full": "北京时间 6月14日 09:00",
      "venue": "Gillette Stadium (Boston Stadium)",
      "city": "Foxborough, USA",
      "note": "C组第2场 · 海地 vs 苏格兰 · 已结束 0-1",
      "lineup": {
        "confirmed": true,
        "formation": "4-4-2 / 4-4-2",
        "home": "Placide (C) #1; Arcus #2, Adé #4, Delcroix #5, Expérience #8; Louicius #11, Jean Jacques #17, Bellegarde #10, Providence #15; Pierrot #20, Isidor #18",
        "away": "Gunn #1; Hickey #2, Hendry #13, Hanley #5, Robertson (C) #3; Gannon-Doak #17, McTominay #4, Ferguson #19, McGinn #7; Shankland #20, Adams #10",
        "note": "FotMob · 全场 0-1。McGinn 29' 破门 · xG 1.05-1.05 势均力敌 · 苏格兰 28 年后再取世界杯胜绩。",
        "predicted": {
          "formation": "4-4-2",
          "home": "Placide; Arcus, Adé, Delcroix, Expérience; Casimir, Jean Jacques, Bellegarde, Providence; Isidor, Pierrot",
          "away": "Gunn; Hickey, Hanley, Souttar, Robertson; Gannon-Doak, McTominay, Ferguson, Christie; Adams, Shankland",
          "source": "FotMob · 2026-06-14 Predicted · 非官方"
        },
        "diff": {
          "home": "⚠️ Louicius #11 替 Casimir #21 右翼（Casimir、Nazon #9 替补）",
          "away": "⚠️ Hendry #13 替 Souttar #15 中卫 · McGinn #7 替 Christie #11 左路（Souttar/Christie/McKenna 替补）"
        },
        "source": "FotMob · FIFA 官方 team sheet · 2026-06-14",
        "updated": "2026-06-15T06:00:00+08:00"
      },
      "home": {
        "name": "Haiti",
        "iso": "ht",
        "flag": "",
        "fifa_rank": 82,
        "rating": 55,
        "form": [
          "D",
          "L",
          "W",
          "L",
          "L"
        ],
        "coach": "Sébastien Migné",
        "stars": [
          {
            "name": "Duckens Nazon",
            "pos": "ST",
            "club": "Austin FC",
            "stats": "44 球/78 场 · 队史射手王",
            "rating": 7.5,
            "desc": "FIFA 官方 XI：Pierrot #20 + Isidor #18 双前锋；Nazon #9 替补席",
            "number": 9,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Johny Placide",
            "pos": "GK",
            "club": "Saint-Étienne",
            "stats": "81 caps · 38岁 · 队长",
            "rating": 7.2,
            "desc": "FIFA 官方 XI 先发门将+队长 #1",
            "number": 1,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Jean-Ricner Bellegarde",
            "pos": "CM",
            "club": "Wolves",
            "stats": "英超经验",
            "rating": 7.3,
            "desc": "FIFA 官方 XI 中场 #10，与 Jean Jacques #17 搭档",
            "number": 10,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "star": {
          "name": "Duckens Nazon",
          "pos": "ST",
          "club": "Austin FC",
          "desc": "官方 XI：Pierrot+Isidor 先发；Nazon 替补",
          "rating": 7.5,
          "stats": "44 球/78 场",
          "number": 9,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "全队（26人）",
            "status": "FIT",
            "note": "Sports Mole 6/13：Migné 全员健康，Out/Doubtful 均为 None",
            "confirmed": true
          }
        ],
        "rumors": [
          "Migné（Sports Mole）：沿用对新西兰 4-0、秘鲁 1-2 两场热身的 4-4-2",
          "Sports Mole：Placide(38) 队长门将 · Ade+Delcroix 中卫 · Bellegarde 中场枢纽",
          "首次世界杯正赛，FIFA 称与海地无正式交锋史——苏格兰更熟悉大赛节奏",
          "热身 4-0 新西兰后 1-2 负秘鲁，防守纪律仍是首要任务",
          "Camp：Nazon+Isidor 双前锋被英媒称为「One Sunderland, one Wolves」组合"
        ]
      },
      "away": {
        "name": "Scotland",
        "iso": "gb-sct",
        "flag": "",
        "fifa_rank": 38,
        "rating": 71,
        "form": [
          "D",
          "W",
          "L",
          "W",
          "D"
        ],
        "coach": "Steve Clarke",
        "stars": [
          {
            "name": "Scott McTominay",
            "pos": "CM",
            "club": "Napoli",
            "stats": "那不勒斯赛季核心",
            "rating": 8.5,
            "desc": "FIFA 官方 XI 中场 #4；Clarke 确认可战",
            "number": 4,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Andrew Robertson",
            "pos": "LB",
            "club": "Tottenham",
            "stats": "队长 · 刚转会热刺",
            "rating": 8.2,
            "desc": "FIFA 官方 XI 队长左后卫 #3；Hendry #13 替 Souttar 中卫",
            "number": 3,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Lawrence Shankland",
            "pos": "ST",
            "club": "Rangers",
            "stats": "热身 3球1助/8球",
            "rating": 7.9,
            "desc": "FIFA 官方 XI 与 Adams #10 双前锋 #20",
            "number": 20,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "star": {
          "name": "John McGinn",
          "pos": "CM",
          "club": "Napoli",
          "desc": "29' 制胜球 · 7.8 全场最佳；苏格兰 1990 年后世界杯再胜",
          "rating": 7.8,
          "stats": "制胜球 · MOTM",
          "number": 4,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "Che Adams",
            "status": "FIT",
            "note": "FotMob 官方 XI：#10 与 Shankland #20 双前锋先发",
            "confirmed": true
          },
          {
            "player": "Billy Gilmour",
            "status": "OUT",
            "note": "Sports Mole：膝伤退出整届世界杯",
            "confirmed": true
          },
          {
            "player": "Scott McKenna",
            "status": "FIT",
            "note": "FotMob 官方 XI：Hendry #13 中卫先发；McKenna #26 替补席",
            "confirmed": true
          },
          {
            "player": "Scott McTominay",
            "status": "FIT",
            "note": "Clarke 6/14 官宣「perfect and ready to go」（Standard）；肠胃不适已恢复",
            "confirmed": true
          },
          {
            "player": "Nathan Patterson",
            "status": "DOUBT",
            "note": "Yahoo 6/14：轻微撞击伤，与 McKenna 一同被医疗组观察",
            "confirmed": false
          }
        ],
        "rumors": [
          "Clarke（Standard 6/14）：McTominay 可首发，Gilmour 缺阵后中场责任更重",
          "ESPN 主裁 Mustapha Ghorbal（阿尔及利亚）· 待 FIFA 最终确认",
          "Sports Mole：4-4-2，Doak 右路 + McGinn 左路宽度，Ferguson 与 McTominay 中路",
          "McGinn 刚随维拉夺得欧联杯，更衣室士气高涨",
          "Sports Mole 预测 1-3 苏格兰胜；海地密集防守+定位球是主要策略",
          "C组另两场巴西-摩洛哥同期进行，苏格兰需抢开局争小组出线主动权"
        ]
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 0,
        "recent": [],
        "note": "无正式交锋记录"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "name": "Mustapha Ghorbal",
        "nation": "Algeria",
        "iso": "dz",
        "age": 40,
        "source": "FotMob · FIFA match sheet · 2026-06-14",
        "wc_experience": "Qatar 2022（2场：荷兰-厄瓜多尔1黄、澳大利亚-丹麦3黄）· 2024 非洲杯 · 2025 世俱杯",
        "avg_yellow": 2,
        "avg_red": 0,
        "avg_penalty": 0,
        "home_win_rate": 50,
        "bias_index": 50,
        "bias_note": "2022世界杯2场仅4黄0红，场均2黄——本届世界杯最克制主裁之一。执法风格偏流畅、少打断比赛节奏，有利于海地低位密集防守拖延时间；苏格兰若缺乏穿透力，黄牌压力较低。IFFHS 2025 最佳裁判提名。",
        "tendencies": [
          "世界杯出牌克制（场均2黄）",
          "允许身体对抗，不轻易中断比赛",
          "2022 零红牌、零点球",
          "非洲/世俱杯大赛经验丰富",
          "对弱队/强队判罚尺度相对一致"
        ]
      },
      "prediction": {
        "home_win": 22,
        "draw": 28,
        "away_win": 50,
        "score": "0-1",
        "confidence": 74,
        "xg_home": 0.85,
        "xg_away": 1.42,
        "key_factor": "McGinn 29' 一锤定音——苏格兰 xG 仅 1.05 但 2 射正 1 进球；海地 15 射 2 正未能转化。Clarke 球队 28 年后世界杯再胜。"
      },
      "upset_alert": {
        "favorite": "Scotland",
        "underdog": "海地",
        "favorite_iso": "GB-SCT",
        "index": 33,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 50,
        "verdict": "苏格兰纸面占优但非顶级强队；海地五后卫+雨战低节奏下，逼平或小胜爆冷有一定空间，需防久攻不下。",
        "tactical": "海地预计 5-4-1 低位+身体对抗，苏格兰缺少 Gilmour 后中场创造力下降，McKenna 存疑削弱防空；海地 Nazon/Jean 反击与定位球是主要威胁。",
        "psychology": "海地世界杯首秀，无历史包袱、易「光脚不怕穿鞋」；苏格兰大赛有久攻不下急躁传统（欧洲杯预选赛曾意外失分），先被破门时心态波动需警惕。",
        "historical": "海地无世界杯交锋史；苏格兰近十年对 FIFA 排名 70+ 球队偶有平局（如 2022 对乌克兰附加赛胶着），对完全陌生对手开局谨慎。",
        "factors": [
          {
            "tag": "克制",
            "impact": "中",
            "detail": "密集低位+雨战减速度，专克苏格兰地面渗透"
          },
          {
            "tag": "速度错配",
            "impact": "弱",
            "detail": "海地反击有速度但整体火力有限"
          },
          {
            "tag": "伤病",
            "impact": "中",
            "detail": "Gilmour 缺阵、McKenna 存疑削弱苏格兰中场与防空"
          },
          {
            "tag": "心理",
            "impact": "中",
            "detail": "苏格兰必须抢开局，久攻不下易冒进留反击空档"
          }
        ]
      },
      "weather": {
        "city": "福克斯堡",
        "country": "美国",
        "temp": 23,
        "humidity": 62,
        "altitude_m": 85,
        "rain_chance": 25,
        "wind": "东北风 2级",
        "condition_cn": "夜场微凉，可能有零星小雨",
        "impact_level": "LOW",
        "impact": "Gillette Stadium 海拔85m可忽略，波士顿6月夜场23°C偏凉湿润，对体能影响有限",
        "impact_summary": "波士顿夜场23°C微凉，湿度62%；苏格兰更习惯此类气候，海地球员需防开场慢热",
        "home_adapt": 70,
        "away_adapt": 78,
        "home_note": "海地球员多效力法甲/MLS，适应温带但波士顿夜凉+湿度对加勒比出身球员开场节奏略慢",
        "away_note": "苏格兰球员来自英伦三岛，23°C 夜场+62% 湿度是其舒适区；McTominay 等体能型球员不受影响",
        "weather_factors": [
          {
            "label": "23°C 夜场微凉",
            "impact": "苏格兰略优",
            "detail": "低温有利于苏格兰高强度逼抢维持90分钟；海地若开场未进入状态易被动"
          },
          {
            "label": "湿度 62%",
            "impact": "中性",
            "detail": "传球仍顺畅，但体能消耗略高于干燥场次；对密集防守的海地反而略利（比赛节奏放缓）"
          },
          {
            "label": "25% 降雨可能",
            "impact": "略利防守方",
            "detail": "若微雨则场地湿滑、球速变慢，有利于海地5-4-1低位防守；苏格兰需加强远射与定位球"
          },
          {
            "label": "东北风 2级",
            "impact": "中性",
            "detail": "风力弱，对高空球影响极小；Gillette 开放式球场但6月夜场风不大"
          }
        ],
        "historical_note": "Gillette Stadium 承办C组赛事；波士顿6月夜场历来气温15-25°C，偶有阵雨"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "甲申日",
          "day_element": "木+金",
          "hour_home": "巳时（09:00-11:00）",
          "hour_home_element": "火",
          "day_dominant": "金",
          "day_summary": "甲申日金旺，巳时火气升——火金交争之刻。《道德经》曰：「知常曰明。」巳火炼金，金气愈纯；水德遇金日则涵，火德遇金日则敛。"
        },
        "wuxing": {
          "home": {
            "team": "Haiti",
            "colors": "蓝+红",
            "elements": "水、火",
            "wuxing_short": "水火既济而未济",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "compat": 32,
            "reason": "蓝属水、红属火。甲申金日，水得金生而火被金所耗——水火本相克，今金日介入，水虽涵而火难明，如「履薄冰」。《周易·既济》：「初吉终乱」——初势或有，终局难守。",
            "disadvantage": "水火内耗，金日制火，气场不稳"
          },
          "away": {
            "team": "Scotland",
            "colors": "深蓝+白",
            "elements": "水、金",
            "wuxing_short": "金水相生，巳火炼金",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 75,
            "reason": "深蓝属水、白属金。甲申日金旺，水得金生——「金水相生」如源清流洁。巳时火起，火炼金成器，金德愈纯。《道德经》：「上善若水」——苏格兰水金顺日，行西南之利。",
            "advantage": "金水顺局，巳火炼金成器"
          },
          "summary": "五行裁定：金日利水金之队；海地水火相战而火敛，如「蹇」途难行"
        },
        "hexagram": {
          "name": "蹇卦",
          "symbol": "☶",
          "number": 39,
          "upper": "坎水",
          "lower": "艮山",
          "quote": "《周易·蹇卦》：「蹇，利西南，不利东北。」",
          "general": "水山蹇——前有坎水、后有艮山，进退维谷。利西南：顺乎水德、行金气者吉；不利东北：逆势而上者凶。",
          "advantage_team": "Scotland",
          "disadvantage_team": "Haiti",
          "hexagram_analysis": "蹇卦主险途——非力之大小，乃「利西南」与「不利东北」之位势。苏格兰水金顺甲申金日，如行西南；海地水火内耗，如蹇于东北。艮为山、为止，主队若守如山可暂「见险而止」，然终非「利西南」之途。",
          "match_nature": "客队小胜低比分",
          "match_nature_prob": 50,
          "yellow_card_risk": "低",
          "yellow_card_reason": "Ghorbal 世界杯场均2黄；海地低位+苏格兰控球，预计2-4张",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "苏格兰客胜50%，平局28%，海地爆冷22%"
            },
            {
              "icon": "⏱",
              "label": "进球高峰",
              "text": "第55-70分钟——海地体能下降、苏格兰加强远射"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "低至中——战术犯规为主，激烈程度有限"
            },
            {
              "icon": "🔄",
              "label": "0-0平局可能",
              "text": "中（约18% 泊松）——海地密集防守可拖入僵局"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "极低（4%）——低比分局仍倾向90分钟分胜负"
            }
          ],
          "early_goal": {
            "scenario": "若苏格兰先进球",
            "prediction": "蹇卦「不利东北」——海地被迫压上，Nazon 反击有空间但难成体系，苏格兰控局概率65%",
            "favors": "Scotland",
            "favors_prob": 65
          },
          "no_early_goal": {
            "scenario": "若前30分钟无进球",
            "prediction": "Clarke 强调抢开局未果则转入耐心渗透；McTominay 远射+定位球成破局关键，下半场破门概率55%",
            "favors": "Scotland",
            "favors_prob": 55
          },
          "away_goal": {
            "scenario": "若海地先进球",
            "prediction": "苏格兰整体实力占优，Robertson 左路传中+McGinn 插上反扑；扳平概率58%，反超52%",
            "favors": "Scotland",
            "favors_prob": 52
          },
          "halftime": {
            "scenario": "半场0-0",
            "prediction": "下半场苏格兰板凳与经验占优，海地五后卫消耗大，客队破局概率58%",
            "favors": "Scotland",
            "favors_prob": 58
          },
          "extra_time": {
            "scenario": "加时",
            "prediction": "极低概率（4%）",
            "favors": "Scotland",
            "favors_prob": 55
          }
        },
        "home_score": 32,
        "away_score": 75,
        "mystic_verdict": "☶ 蹇卦水山蹇——海地水火既济而未济，蹇于东北；苏格兰金水相生，「利西南」而行。非强弱之判，乃位势顺逆：知常曰明，顺日行者吉。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 0,
        "away_score": 1,
        "status": "FT",
        "label": "全场结束",
        "scorers": "McGinn 29'",
        "highlights": "McGinn 7.8 全场最佳 · Gunn 7.7 零封 · xG 1.05-1.05 · 出席 64,146 · Bellegarde/Hickey 各1黄"
      }
    },
    {
      "id": "m08",
      "group": "D",
      "matchday": 1,
      "date": "2026-06-13",
      "time": "21:00",
      "time_local": "21:00 PT",
      "timezone": "PDT (UTC-7)",
      "time_beijing": "12:00",
      "date_beijing": "6月14日",
      "time_beijing_full": "北京时间 6月14日 12:00",
      "venue": "BC Place",
      "city": "Vancouver, Canada",
      "note": "D组第2场 · 澳大利亚 vs 土耳其 · 已结束 2-0",
      "lineup": {
        "confirmed": true,
        "formation": "5-4-1 / 4-2-3-1",
        "home": "Beach #18; Circati #3, Souttar (C) #19, Burgess #21; Italiano #4, Bos #5; Metcalfe #8, O'Neill #13, Okon-Engstler #24, Irankunda #17; Touré #9",
        "away": "Çakır #23; Çelik #2, Demiral #3, Bardakcı #14, Kadioglu #20; Çalhanoğlu (C) #10, Yüksek #16; Güler #8, Kökcü #6, Yilmaz #21; Aktürkoglu #7",
        "note": "FotMob · 全场 2-0。实际 5-4-1 低位反击；Irankunda 27'、Metcalfe 75' · 土耳其控球 72% 但 30 射 8 正 0 球。",
        "predicted": {
          "formation": "3-4-2-1 / 4-2-3-1",
          "home": "Ryan #1; Circati #3, Souttar #19, Burgess #21; Italiano #4, O'Neill #13, Irvine #22, Bos #5; Leckie #7, Metcalfe #8; Touré #9",
          "away": "Çakır #23; Çelik #2, Demiral #3, Bardakcı #14, Kadioglu #20; Kökcü #6, Çalhanoğlu #10; Yilmaz #21, Güler #8, Yildiz #11; Aktürkoglu #7",
          "source": "FotMob · 2026-06-14 Predicted · 非官方"
        },
        "diff": {
          "home": "⚠️ 3 处大变阵：Beach #18 替 Ryan #1 一门 · Okon-Engstler #24 替 Irvine #22 · Irankunda #17 替 Leckie #7（Ryan/Irvine/Leckie 替补）",
          "away": "⚠️ Yüksek #16 进首发后腰 · Kökcü #6 前移 · Yildiz #11 未进 XI（替补）；Aktürkoglu #7 中锋"
        },
        "source": "FotMob · FIFA 官方 team sheet · 2026-06-14",
        "updated": "2026-06-15T06:00:00+08:00"
      },
      "home": {
        "name": "Australia",
        "iso": "au",
        "flag": "",
        "fifa_rank": 24,
        "rating": 72,
        "form": [
          "W",
          "D",
          "W",
          "D",
          "W"
        ],
        "coach": "Tony Popovic",
        "stars": [
          {
            "name": "Patrick Beach",
            "pos": "GK",
            "club": "Melbourne City",
            "stats": "FIFA 官方 XI 先发一门",
            "rating": 7.5,
            "desc": "FotMob 官方 XI #18 替预测 Ryan；Ryan #1 替补席",
            "number": 18,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Nestory Irankunda",
            "pos": "AM",
            "club": "Brighton",
            "stats": "19岁 · 英超",
            "rating": 7.8,
            "desc": "FIFA 官方 XI 双前腰 #17 之一，替预测 Leckie #7",
            "number": 17,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Mohamed Toure",
            "pos": "ST",
            "club": "Norwich City",
            "stats": "诺维奇下半程 10球/12场",
            "rating": 7.9,
            "desc": "FIFA 官方 XI 单前锋 #9；3-4-2-1 支点",
            "number": 9,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Jackson Irvine",
            "pos": "CM",
            "club": "St. Pauli",
            "stats": "14 国家队进球 · 33岁",
            "rating": 7.7,
            "desc": "FIFA 官方 XI 中场 #22 未进先发；Okon-Engstler #24 替其位置",
            "number": 22,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "star": {
          "name": "Patrick Beach",
          "pos": "CB",
          "club": "Sheffield United",
          "desc": "8.9 MOTM · 官方 XI 替 Ryan；零封助澳大利亚 D组 3 分",
          "rating": 8.9,
          "stats": "零封 · MOTM",
          "number": 19,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "全队（26人）",
            "status": "FIT",
            "note": "FotMob 官方 XI 确认；Popovic 赛前续约至 2027 亚洲杯",
            "confirmed": true
          },
          {
            "player": "Mathew Ryan",
            "status": "FIT",
            "note": "FotMob 官方 XI：Beach #18 先发，Ryan #1 替补席",
            "confirmed": true
          },
          {
            "player": "Harry Souttar",
            "status": "FIT",
            "note": "FIFA 官方 XI 队长中卫 #19（Circati #3、Burgess #21 搭档）",
            "confirmed": true
          }
        ],
        "rumors": [
          "Popovic（ESPN）：年轻化与 veteran 核心并存，Toure/Irankunda/Herrington 等新人上位",
          "ESPN Jordan Bos：「我们很难被击败…每次大赛都被低估」——预计五后卫左翼 Bos",
          "Sports Mole 预测 5-4-1：Italiano/Herrington 翼卫，Leckie 提供世界杯经验",
          "美国 4-1 巴拉圭后 D组：美国3分领跑，澳土本场平局亦关键",
          "Popovic 赛前续约至2027亚洲杯，更衣室稳定"
        ]
      },
      "away": {
        "name": "Türkiye",
        "iso": "tr",
        "flag": "",
        "fifa_rank": 32,
        "rating": 73,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "L"
        ],
        "coach": "Vincenzo Montella",
        "stars": [
          {
            "name": "Hakan Çalhanoğlu",
            "pos": "CM",
            "club": "Inter Milan",
            "stats": "队长 · 22球/105场",
            "rating": 8.5,
            "desc": "FIFA 官方 XI 队长 #10，与 Yüksek #16 双后腰",
            "number": 10,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Arda Güler",
            "pos": "AM",
            "club": "Real Madrid",
            "stats": "皇马赛季末伤愈",
            "rating": 8.3,
            "desc": "FIFA 官方 XI 攻击中场 #8",
            "number": 8,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          },
          {
            "name": "Kenan Yildiz",
            "pos": "LW",
            "club": "Juventus",
            "stats": "5 国家队进球",
            "rating": 8,
            "desc": "FotMob 官方 XI：#11 替补未进先发；Yilmaz #21 与 Güler #8 在列",
            "number": 11,
            "number_confirmed": true,
            "number_source": "FIFA 2026 世界杯最终名单"
          }
        ],
        "star": {
          "name": "Hakan Çalhanoğlu",
          "pos": "CM",
          "club": "Inter Milan",
          "desc": "FIFA 官方 XI #10 队长；Yüksek #16 后腰、Güler #8 前腰",
          "rating": 8.5,
          "stats": "队长 · 105 caps",
          "number": 10,
          "number_confirmed": true,
          "number_source": "FIFA 2026 世界杯最终名单"
        },
        "injuries": [
          {
            "player": "Kenan Yildiz",
            "status": "FIT",
            "note": "FotMob 官方 XI：#11 替补席，未进先发（Yilmaz #21 在列）",
            "confirmed": true
          },
          {
            "player": "Arda Güler",
            "status": "FIT",
            "note": "FIFA 官方 XI 攻击中场 #8",
            "confirmed": true
          },
          {
            "player": "Kerem Aktürkoglu",
            "status": "FIT",
            "note": "FIFA 官方 XI 中锋 #7",
            "confirmed": true
          }
        ],
        "rumors": [
          "Sports Mole 6/13 05:00：澳大利亚 Out/Doubtful 均为 None；土耳其仅 Yildiz 存疑",
          "Montella 6/14：FotMob 预测 Yildiz+Guler+Akturkoglu 攻击线 · Kokcu 搭档 Çalhanoğlu",
          "101 Great Goals 预测土耳其 2-0；Sports Mole 预测 0-1 土耳其小胜——均认为质量占优",
          "Sports Mole：Bardakci 顶替 Soyuncu 中卫位置（非旧预测 Soyuncu）",
          "土耳其时隔多年重返世界杯，Montella 强调 Çalhanoğlu 组织核心",
          "Camp：Yildiz 若缺席，Baris Alper Yilmaz 与 Orkun Kokcu 角色上升"
        ]
      },
      "h2h": {
        "home_wins": 1,
        "draws": 1,
        "away_wins": 1,
        "recent": [
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "1-0",
            "winner": "Australia"
          }
        ],
        "note": "交锋互有胜负"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "name": "Jesús Noel Valenzuela Sáez",
        "nation": "Venezuela",
        "iso": "ve",
        "age": 38,
        "source": "FotMob · FIFA match sheet · 2026-06-14",
        "wc_experience": "Qatar 2022（2场：英格兰-美国0-0、法国-波兰3黄）· 2024/2021 美洲杯 · 解放者杯/南美杯决赛",
        "avg_yellow": 2,
        "avg_red": 0,
        "avg_penalty": 0,
        "home_win_rate": 50,
        "bias_index": 52,
        "bias_note": "2022世界杯2场共3黄0红，场均1.5黄——世界杯阶段执法极为流畅。美洲杯俱乐部赛事出牌较多（生涯约5黄/场），但大赛关键战倾向少打断。澳土中场绞杀+BC Place 人工草对抗，整体黄牌风险中等偏低。",
        "tendencies": [
          "世界杯场均1.5黄，流畅度优先",
          "2022 零红牌",
          "南美俱乐部决赛经验丰富",
          "补时相对规范，少过度拖延",
          "对东道主/客队无显著偏袒"
        ]
      },
      "prediction": {
        "home_win": 38,
        "draw": 28,
        "away_win": 34,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.35,
        "xg_away": 1.28,
        "key_factor": "2-0 爆冷——Irankunda 27'、Metcalfe 75' 世界波；Popovic 5-4-1 克制土耳其 72% 控球。Beach 替 Ryan 一门 8.9 评分。"
      },
      "upset_alert": {
        "favorite": "澳大利亚",
        "underdog": "土耳其",
        "favorite_iso": "AU",
        "index": 38,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 62,
        "verdict": "名义主队略被看好，但 xG 几乎持平——土耳其创造力（Güler/Çalhanoğlu）若打穿 5-4-1 即具备爆冷取胜能力；双向冷门均需防范。",
        "tactical": "Popovic 5-4-1 压缩中路，但土耳其 Güler 前腰创造力+Çalhanoğlu 远射/任意球专克低位；Yildiz 若缺阵则左路威胁降档。澳大利亚 Goodwin 反击与 Souttar 定位球是主队反制手段。",
        "psychology": "D 组首场双方均需抢分，澳大利亚主场声浪有利但大赛经验不如土耳其；土耳其若早进球，澳大利亚压上后身后空档增大。",
        "historical": "澳土无大赛交锋；澳大利亚 2006、2022 世界杯均有「对欧洲球队逼平」记录（2022 0-0 丹麦）；土耳其 2002 季军证明大赛爆发能力。",
        "factors": [
          {
            "tag": "克制",
            "impact": "中",
            "detail": "土耳其技术中场可破解澳式身体足球，定位球+远射是破局点"
          },
          {
            "tag": "速度错配",
            "impact": "中",
            "detail": "Goodwin/Yi 反击 vs 土耳其边卫回追，互有窗口"
          },
          {
            "tag": "伤病",
            "impact": "中",
            "detail": "Yildiz #11 官方替补削弱左路；Beach 替 Ryan 一门变阵"
          },
          {
            "tag": "心理",
            "impact": "中",
            "detail": "实力接近，任一方先丢球均可能演变为对攻乱战"
          }
        ],
        "reverse_note": "若按 Sports Mole 倾向土耳其小胜，则澳大利亚爆冷取胜指数约 35，仍为中等。"
      },
      "weather": {
        "city": "温哥华",
        "country": "加拿大",
        "temp": 20,
        "humidity": 55,
        "altitude_m": 4,
        "rain_chance": 30,
        "wind": "西南风 3级",
        "condition_cn": "温哥华夜场，可能有小雨",
        "impact_level": "MEDIUM",
        "impact": "BC Place 封闭穹顶+人工草皮，20°C 夜场；降雨可能但场内可控，人工草传球偏快是主要变量",
        "impact_summary": "BC Place 人工草皮传球速度快于天然草；澳土均熟悉，澳大利亚本土联赛经验略优",
        "home_adapt": 82,
        "away_adapt": 78,
        "home_note": "澳大利亚 A-League 与国家队长期在人工草作战，Popovic 阵容对 BC Place 草皮节奏更熟；Souttar 等英超球员亦适应",
        "away_note": "土耳其球员多效力欧洲联赛（天然草为主），需适应人工草球速偏快、弹跳偏低；Çalhanoğlu 长传转移需微调力度",
        "weather_factors": [
          {
            "label": "人工草皮",
            "impact": "澳大利亚略优",
            "detail": "BC Place 人工草传球速度快、弹跳低，澳超球员更习惯；土耳其防线出球失误风险略增"
          },
          {
            "label": "20°C 夜场+30%降雨",
            "impact": "中性",
            "detail": "BC Place 穹顶可关闭，场外小雨对场内影响有限；20°C 对双方体能均友好"
          },
          {
            "label": "湿度 55%",
            "impact": "中性",
            "detail": "温哥华海滨湿度适中，不影响传控；略利身体对抗型打法（Popovic 战术取向）"
          },
          {
            "label": "西南风 3级",
            "impact": "场外因素",
            "detail": "穹顶关闭时无影响；若开顶则对场内气流有轻微干扰，赛前通常根据降雨决定"
          },
          {
            "label": "D组积分压力",
            "impact": "战术层面",
            "detail": "美国4-1胜巴拉圭后，澳土均不敢冒进；气候稳定有利于执行稳健战术，平局概率上升"
          }
        ],
        "historical_note": "BC Place 承办D组赛事，加拿大另一世界杯主场；穹顶球场气候可控，人工草是本场最大气候变量"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "甲申日",
          "day_element": "木+金",
          "hour_home": "午时（11:00-13:00）",
          "hour_home_element": "火",
          "day_dominant": "金",
          "day_summary": "甲申日金火交战，午时火气最盛——一日之中火势登峰。《道德经》曰：「知其雄，守其雌，为天下溪。」午火虽盛，然申金在日，火金相战而未济，事未竟而不可妄断。"
        },
        "wuxing": {
          "home": {
            "team": "Australia",
            "colors": "黄+绿",
            "elements": "土、木",
            "wuxing_short": "火生土，土木相涵",
            "verdict": "中性偏有利",
            "verdict_color": "#7BAF8A",
            "compat": 56,
            "reason": "黄属土、绿属木。午时火盛，火生土——「火生土」如烈日润大地，主队土德得火之生。《周易·说卦》：「离为火、为日」——午火正应离象，土木得火温而相涵。",
            "advantage": "午时火生土，主场地利相叠"
          },
          "away": {
            "team": "Türkiye",
            "colors": "红+白",
            "elements": "火、金",
            "wuxing_short": "火金相映，与午同气",
            "verdict": "中性",
            "verdict_color": "#C8A96E",
            "compat": 54,
            "reason": "红属火、白属金。午时火旺，火德与队服同气——「同气相求」；然甲申日申金当令，火金交战，金声与火明相争而未定。《道德经》：「挫其锐，解其纷」——土耳其火金并重，宜和不宜激。",
            "disadvantage": "火金内争，午火虽助而申金亦制"
          },
          "summary": "五行裁定：午火生土略利主队；土火金三气交争，势近而未济——此乃「事未竟」之局，非一边倒"
        },
        "hexagram": {
          "name": "未济卦",
          "symbol": "☲",
          "number": 64,
          "upper": "离火",
          "lower": "坎水",
          "quote": "《周易·未济卦》：「未济，亨，小狐汔济，濡其尾，无攸利。」",
          "general": "火水未济——六十四卦之终，事未竟而亨在将来。小狐汔济、濡其尾：近成而慎，躁进者无攸利。",
          "advantage_team": "Australia",
          "disadvantage_team": "Türkiye",
          "hexagram_analysis": "未济卦主「亨而未终」——非胜负已分，乃阴阳未济、水火不交。午时离火在上，澳大利亚火生土略占地利；土耳其火金同气于午而受申金之制，如「小狐汔济」——近成慎尾。此卦最忌以力断之，宜观气运流转。",
          "match_nature": "势均力敌平局局",
          "match_nature_prob": 28,
          "yellow_card_risk": "低至中",
          "yellow_card_reason": "Valenzuela 世界杯场均1.5黄；澳土中场对抗+定位球，预计3-5张",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "澳大利亚38%，平局28%，土耳其34%——最接近的今日场次"
            },
            {
              "icon": "⏱",
              "label": "进球高峰",
              "text": "第20-35分钟及第75-90分钟——双方体能消耗后易出错"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中等——Irvine-Çalhanoğlu 中路对位+定位球争抢"
            },
            {
              "icon": "🔄",
              "label": "0-0平局可能",
              "text": "中（约15% 泊松）——双方均有破门手段"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "极低（3%）——小组赛首轮仍分胜负为主"
            }
          ],
          "early_goal": {
            "scenario": "若澳大利亚先进球",
            "prediction": "未济「小狐汔济」——土耳其需压上，Güler 创造力可扳平，但主队守优势概率52%",
            "favors": "Australia",
            "favors_prob": 52
          },
          "no_early_goal": {
            "scenario": "若前30分钟无进球",
            "prediction": "双方均知D组形势，下半场提速；Çalhanoğlu 任意球与 Goodwin 反击成破局点，平局概率升至35%",
            "favors": "Draw",
            "favors_prob": 35
          },
          "away_goal": {
            "scenario": "若土耳其先进球",
            "prediction": "澳大利亚身体对抗与定位球反扑力度大；Souttar 头球+Maclaren 支点，扳平概率55%",
            "favors": "Draw",
            "favors_prob": 48
          },
          "halftime": {
            "scenario": "半场0-0",
            "prediction": "下半场双方必须抢分，BC Place 声浪略利主队，但土耳其创造力不可低估，平局概率40%",
            "favors": "Draw",
            "favors_prob": 40
          },
          "extra_time": {
            "scenario": "加时",
            "prediction": "极低概率（3%）",
            "favors": "Draw",
            "favors_prob": 45
          }
        },
        "home_score": 56,
        "away_score": 54,
        "mystic_verdict": "☲ 未济火水未济——午时火生土略利澳大利亚，然甲申金火交战、土火金三气未济。非竞技之强弱，乃「亨而未终」：小狐汔济，濡其尾，无攸利——慎判胜负，平局与险胜皆在卦中。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 2,
        "away_score": 0,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Irankunda 27' (Okon-Engstler); Metcalfe 75'",
        "highlights": "Beach 8.9 MOTM · 土耳其 72% 控球 30 射无果 · Yildiz 46' 替补 · 出席 52,497 · D组澳美同积3分"
      }
    },
    {
      "id": "m09",
      "group": "E",
      "matchday": 1,
      "date": "2026-06-14",
      "time": "13:00",
      "time_local": "12:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "01:00",
      "date_beijing": "6月15日",
      "time_beijing_full": "北京时间 6月15日 01:00",
      "venue": "NRG Stadium",
      "city": "Houston, USA",
      "note": "E组揭幕 · 德国 vs 库拉索 · 休斯顿 · 已结束 7-1",
      "lineup": {
        "confirmed": true,
        "formation": "3-4-2-1",
        "home": "Neuer; Kimmich (C), Tah, Schlotterbeck; Pavlović, Nmecha; Brown; Sané, Musiala, Wirtz; Havertz",
        "away": "Room; Floranus, Obispo, Bazoer, Fonville; L. Bacuna (C), Chong; Comenencia, J. Bacuna, Hansen; Locadia",
        "note": "FIFA 官方首发 · 2026-06-14 休斯顿。Nagelsmann 确认 Neuer 首发第 125 场；德国 3-4-2-1，库拉索改打 4-2-3-1（非预测 3-5-2）。 · 全场 7-1",
        "predicted": {
          "formation": "4-2-3-1 / 3-5-2",
          "home": "Neuer; Kimmich, Tah, Schlotterbeck, Brown; Pavlović, Nmecha; Sané, Musiala, Wirtz; Havertz",
          "away": "Room; Gaari, Obispo, Bazoer; Floranus, Comenencia, L. Bacuna, J. Bacuna, Fonville; Chong, Locadia",
          "source": "FotMob Predicted · 赛前 · 非官方"
        },
        "diff": {
          "home": "✅ 与 Nagelsmann 赛前预测基本一致；Kimmich 中卫、Brown 左翼卫为官方布局。",
          "away": "⚠️ 与预测 3-5-2 不同：官方 4-2-3-1，Hansen 首发右翼，Chong 回撤中场。"
        },
        "source": "FIFA.com · Tactical Line-up · Group E · 2026-06-14",
        "updated": "2026-06-16T12:00:00+08:00"
      },
      "home": {
        "name": "Germany",
        "iso": "de",
        "flag": "",
        "fifa_rank": 8,
        "rating": 84,
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
            "name": "Jamal Musiala",
            "pos": "CAM",
            "club": "Bayern Munich",
            "stats": "国家队 38+ 场 12 球",
            "rating": 9,
            "desc": "Nagelsmann 战术核心，中路突破与肋部渗透是德国破局关键"
          },
          {
            "name": "Florian Wirtz",
            "pos": "LW",
            "club": "Liverpool",
            "stats": "勒沃库森赛季 MVP 级别",
            "rating": 8.8,
            "desc": "左路内切+远射，与 Musiala 形成双 10 号位轮换"
          },
          {
            "name": "Manuel Neuer",
            "pos": "GK",
            "club": "Bayern Munich",
            "stats": "五届世界杯 · 第 125 场",
            "rating": 8.2,
            "desc": "Nagelsmann 确认首发，小腿伤愈复出"
          }
        ],
        "injuries": [
          {
            "player": "Lennart Karl",
            "status": "OUT",
            "note": "大腿肌肉撕裂，赛前退出 26 人大名单；Assan Ouédraogo 递补入队",
            "confirmed": true
          },
          {
            "player": "Manuel Neuer",
            "status": "FIT",
            "note": "Nagelsmann 赛前确认：小腿伤愈，预计首发第 125 场国家队 · 五届世界杯",
            "confirmed": true
          }
        ],
        "rumors": [
          "Nagelsmann 赛前：Neuer 已恢复，Baumann 退回替补席；2018/2022 连续小组出局后首战压力极大",
          "Karl 缺阵 → Sané 预计顶替右翼；Brown 左后卫顺位超过 Raum，Nmecha 搭档 Pavlović 双后腰",
          "Kimmich 右后卫 + Tah/Schlotterbeck 中卫组合；Musiala-Wirtz-Havertz 进攻三角不变",
          "Opta：德国胜概率 90%+ · 最可能 3-0；全队无新增伤病，可派最强 XI"
        ],
        "star": {
          "name": "Jamal Musiala",
          "pos": "CAM",
          "club": "Bayern Munich",
          "desc": "德国进攻灵魂，对位库拉索五后卫体系中路空隙",
          "rating": 9
        }
      },
      "away": {
        "name": "Curaçao",
        "iso": "cw",
        "flag": "",
        "fifa_rank": 90,
        "rating": 58,
        "form": [
          "L",
          "W",
          "D",
          "L",
          "W"
        ],
        "coach": "Dick Advocaat",
        "stars": [
          {
            "name": "Leandro Bacuna",
            "pos": "CM",
            "club": "Free Agent",
            "stats": "72 caps · 队长",
            "rating": 7,
            "desc": "经验中场，定位球与长传是库拉索少数威胁手段"
          },
          {
            "name": "Tahith Chong",
            "pos": "LW",
            "club": "Birmingham",
            "stats": "前曼联青训",
            "rating": 6.8,
            "desc": "反击速度点，面对 Kimmich 对位难度极大"
          },
          {
            "name": "Eloy Room",
            "pos": "GK",
            "club": "Miami FC",
            "stats": "72 caps",
            "rating": 6.5,
            "desc": "预计面对全场 30+ 射，扑救量是本场唯一看点"
          }
        ],
        "injuries": [],
        "rumors": [
          "Advocaat 2 月曾因女儿健康辞职、5 月回归——备战期教练组动荡，Fred Rutten 与球员关系紧张",
          "FotMob/媒体：库拉索无新增伤病，3-5-2 低位是本场唯一战术选项",
          "人口最少参赛国 · 世界杯首秀 · 目标：前 30 分钟不丢球，定位球偷分",
          "多数球员荷甲/比甲二三级联赛效力，面对德国 xG 3.8 预计全场被动"
        ],
        "star": {
          "name": "Leandro Bacuna",
          "pos": "CM",
          "desc": "库拉索队长，Advocaat 3-5-2 中场枢纽",
          "rating": 7
        }
      },
      "h2h": {
        "home_wins": 0,
        "draws": 0,
        "away_wins": 0,
        "recent": [],
        "note": "无正式交锋 · 库拉索世界杯首秀"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-14",
        "name": "Jalal Jayed",
        "nation": "Morocco",
        "iso": "ma",
        "age": 38,
        "wc_experience": "2026 世界杯首秀主裁 · FIFA 名单自 2019",
        "avg_yellow": 3.9,
        "avg_red": 0.12,
        "avg_penalty": 0.28,
        "home_win_rate": 54,
        "bias_index": 52,
        "bias_note": "摩洛哥籍主裁，国际赛场出牌适中偏稳。对身体对抗容忍度中等，对战术犯规与拖延较敏感；大赛首秀预计按 FIFA 标准严格执法。",
        "tendencies": [
          "FIFA 2026 首秀主裁，赛前压力低、德国控球局黄牌或偏少",
          "VAR：Hamza El-Fariq（摩洛哥）",
          "助理裁判：Zakaria Brinsi、Mostafa Akarkad（摩洛哥）"
        ],
        "officials": {
          "ar1": "Zakaria Brinsi (MAR)",
          "ar2": "Mostafa Akarkad (MAR)",
          "fourth": "Abongile Tom (RSA)",
          "var": "Hamza El-Fariq (MAR)",
          "avar": "Nicolas Gallo (COL)",
          "svar": "Shaun Evans (AUS)"
        }
      },
      "prediction": {
        "home_win": 94,
        "draw": 5,
        "away_win": 1,
        "score": "3-0",
        "confidence": 88,
        "xg_home": 3.8,
        "xg_away": 0.3,
        "key_factor": "【赛后复盘】赛前主胜94%/最可能3-0；实际7-1。Comenencia 21' 一度1-1，德国半场后连入6球。方向：主胜命中；比分低估进球数。Havertz 双响 · Musiala 世界波。",
        "score_dist": [
          {
            "score": "3-0",
            "prob": 15.2
          },
          {
            "score": "4-0",
            "prob": 14.4
          },
          {
            "score": "2-0",
            "prob": 12
          },
          {
            "score": "5-0",
            "prob": 10.9
          },
          {
            "score": "1-0",
            "prob": 6.3
          },
          {
            "score": "3-1",
            "prob": 4.5
          },
          {
            "score": "4-1",
            "prob": 4.3
          }
        ]
      },
      "upset_alert": {
        "favorite": "德国",
        "underdog": "Curaçao",
        "favorite_iso": "DE",
        "index": 14,
        "level": "LOW",
        "level_cn": "极低",
        "cold_result_pct": 16,
        "verdict": "四场中爆冷风险最低——FIFA 排名差 82 位，xG 3.8-0.3 碾压；库拉索更现实目标是少丢球而非取胜。",
        "tactical": "Advocaat 3-5-2 五后卫+三中卫，压缩 Musiala/Wirtz 活动空间；Chong 速度对位 Kimmich 是唯一反击点，但德国双后腰 Pavlović-Nmecha 覆盖充分。",
        "psychology": "德国大赛底蕴深厚，Neuer 五届世界杯经验稳定军心；库拉索世界杯首秀，先丢球后易崩盘，难维持 90 分钟纪律。",
        "historical": "无正式交锋；世界杯历史上人口最少参赛国极少在首战取分，更多以「少输当赢」为目标。",
        "factors": [
          {
            "tag": "克制",
            "impact": "弱",
            "detail": "库拉索低位可延缓失球，但缺乏持续反击体系"
          },
          {
            "tag": "实力差",
            "impact": "强",
            "detail": "xG 差 3.5+，德国替补深度仍可扩大比分"
          },
          {
            "tag": "定位球",
            "impact": "中",
            "detail": "L. Bacuna 定位球是库拉索少数威胁，德国防空占优"
          },
          {
            "tag": "心理",
            "impact": "弱",
            "detail": "德国首战容错高，库拉索易紧张犯规送定位球"
          }
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Julian Nagelsmann",
          "age": 38,
          "nation": "德国",
          "tenure": "2023年9月—",
          "wc_exp": "2018 俄罗斯（德国）· 2026 二度执教",
          "style_tags": [
            "高位压迫",
            "灵活变阵",
            "肋部渗透",
            "控球主导"
          ],
          "formation_pref": "4-2-3-1 · 必要时 3-4-2-3",
          "style_summary": "典型的现代德国流派：前场五人组（Musiala/Wirtz/Sané）灵活换位，双后腰保护防线；压迫触发点在对方后卫线接球。纳格尔斯曼以赛前战术准备精细著称，半场调整能力在欧洲顶级。",
          "subs": {
            "timing": "首换通常 58–65 分钟；领先时略晚（65+），落后时 55 分钟前即变阵",
            "pattern": "常见 60' 同时换 2 人：边锋/10号位 + 中场；75' 第三波加强控球或提速",
            "avg_first_sub": "58'",
            "note": "2024 欧洲杯期间场均首换 59'；落后时 46–55' 即改三中卫或加前锋的案例增多"
          },
          "when_leading": {
            "label": "控节奏 · 适度收手",
            "detail": "1 球领先：维持压迫但降低冒险传球，双后腰不前压过深；2 球+：60' 后轮换 Musiala/Wirtz 等核心，Beier/Undav 提速。极少彻底龟缩，但会降 tempo 控场。"
          },
          "when_trailing": {
            "label": "加码进攻 · 变阵激进",
            "detail": "先丢球：半场或 55' 前换进攻型边卫/第三前锋；0–0 僵局 70' 后换 Woltemade/Beier 高空轰炸。2024 欧洲杯对瑞士先丢球后 15 分钟内连换 3 人追平的模板可能复用。"
          },
          "vs_strong": {
            "label": "对强队：高位对攻",
            "detail": "对法国/西班牙级对手仍坚持压迫，但肋部保护加强；不主动放弃控球。心理层面「必须证明自己」时易压上过猛，是被反击的主要风险点。"
          },
          "vs_weak": {
            "label": "对弱队：不留余地 · 适度轮换",
            "detail": "对排名 50+ 球队通常全场压制，半场 2–0+ 后 60' 起轮换替补但维持 4-2-3-1 进攻阵型——「训练新兵」出现在 3 球领先后的 75'+，而非 60' 就松懈。本场对库拉索预计属于此模式。"
          },
          "tournament": "大赛型教练——2024 欧洲杯四强，临场调整获好评；2026 五届 Neuer 复出后更强调经验与活力的平衡。",
          "traits": [
            "半场调整强",
            "变阵灵活",
            "对弱队偶有轻敌慢热",
            "替补深度利用充分"
          ],
          "match_note": "E组揭幕战对世界杯新军——预计 60' 2–0+ 后轮换 Beier/Undav，仍维持进攻压迫，不会 3–0 就彻底收手。"
        },
        "away": {
          "name": "Dick Advocaat",
          "age": 73,
          "nation": "荷兰",
          "tenure": "2024—",
          "wc_exp": "2018 俄罗斯（阿联酋）· 四届世界杯老帅",
          "style_tags": [
            "5-3-2/3-5-2",
            "低位防守",
            "经验主义",
            "定位球"
          ],
          "formation_pref": "3-5-2 · 极端时可 5-4-1",
          "style_summary": "73 岁老帅，实用主义至上。库拉索世界杯首秀必然以组织纪律和低位防守为第一优先级；五后卫+三中卫压缩中路，限制 Musiala/Wirtz 肋部，反击靠 Chong/Locadia 速度。",
          "subs": {
            "timing": "首换偏晚，通常 65–72 分钟；落后时 60' 前换前锋",
            "pattern": "常单换前锋或边翼卫；很少 60' 前连换两人——体能分配优先",
            "avg_first_sub": "68'",
            "note": "老帅风格保守，换人偏「补救」而非「主动改变比赛」"
          },
          "when_leading": {
            "label": "深度退守 · 耗时间",
            "detail": "若意外领先（极低概率）：立即改 5-4-1，换防守型中场，目标保住 1 球。Advocaat 在 2018 阿联酋对强队曾用类似模板拖过 70 分钟。"
          },
          "when_trailing": {
            "label": "维持阵型 · 定位球偷分",
            "detail": "先丢球后 unlikely 大举压上——更可能换一名前锋加强定位球，但五后卫体系不变。0–2 后才会 70' 改四后卫搏命，避免惨案。"
          },
          "vs_strong": {
            "label": "对强队：龟缩 + 偷反击",
            "detail": "本场对德国是教科书式「弱队踢强队」：前 30 分钟零封是胜利，犯规打断节奏，L. Bacuna 定位球是唯一得分希望。不会奋死一搏高位压迫。"
          },
          "vs_weak": {
            "label": "对弱队：相对开放",
            "detail": "在 CONCACAF 区对同级对手会 4-3-3 压上；世界杯舞台对德国不适用。无「训练新兵」空间——26 人名单每场几乎固定核心 14 人。"
          },
          "tournament": "四届世界杯经验，擅长安抚年轻球员；本场任务明确：少丢当赢，避免 2014 西班牙对荷兰式惨案心态崩盘。",
          "traits": [
            "防守纪律优先",
            "换人偏保守",
            "定位球战术",
            "极少冒险变阵"
          ],
          "match_note": "任务明确：5-4-1 守前 30 分钟，L. Bacuna 定位球是唯一得分手段；0–2 后 70' 才可能改四后卫减少惨案。"
        }
      },
      "weather": {
        "city": "休斯顿",
        "country": "美国",
        "venue": "NRG Stadium",
        "temp": 32,
        "humidity": 68,
        "altitude_m": 15,
        "rain_chance": 25,
        "wind": "东南风 3级",
        "condition_cn": "夜场湿热，体感约 36°C",
        "impact_level": "MEDIUM",
        "impact": "NRG Stadium 海平面 15m，6月夜场 32°C+68% 湿度，对欧洲球队体能消耗明显",
        "impact_summary": "32°C 湿热夜场——70 分钟后换人深度成关键；德国替补席明显占优",
        "home_adapt": 85,
        "away_adapt": 72,
        "home_note": "德国球员习惯欧洲夏季作战，但 68% 湿度高于德甲常态；Nagelsmann 轮换深度可抵消下半场体能下滑",
        "away_note": "库拉索球员多效力加勒比/荷兰联赛，湿热并不陌生，但面对德国 90 分钟压迫，低位防守体能是最大考验",
        "weather_factors": [
          {
            "label": "32°C 夜场湿热",
            "impact": "体能消耗",
            "detail": "68% 湿度下 70' 后传球精度下降，德国换人窗口 60–75' 更利扩大比分"
          },
          {
            "label": "海平面 15m",
            "impact": "无海拔",
            "detail": "双方无高原适应差异，纯比拼体能与替补深度"
          },
          {
            "label": "可闭合屋顶",
            "impact": "中性",
            "detail": "NRG 为 NFL 封闭场馆，无突发降雨干扰，场地条件稳定"
          },
          {
            "label": "降雨 25%",
            "impact": "低",
            "detail": "室内场馆不受雨影响；若训练日有雨，天然草适应性对客队略不利"
          },
          {
            "label": "开球 01:00 北京",
            "impact": "德国略优",
            "detail": "当地 12:00 CT 午后前段，气温尚未达日间峰值 35°C+，对双方相对友好"
          }
        ],
        "historical_note": "NRG Stadium 容量 71,054 · 2026 世界杯 E 组揭幕战；休斯顿 6 月平均高温 33°C，历来少因天气改期"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "乙酉日",
          "day_element": "木+金",
          "hour_home": "丑时（01:00-03:00）",
          "hour_home_element": "土",
          "day_dominant": "金",
          "day_summary": "丙午年庚午月乙酉日丑时——年火月金日木，丑时土旺，金气当令而土厚。《周易·夬卦》曰：「扬于王庭，孚号有厉。」木金相战之日，强者宜决断速胜，忌轻敌骄躁；弱队若守如厚土，可延一时之安，终难挡金锋全程。"
        },
        "wuxing": {
          "home": {
            "team": "Germany",
            "colors": "白+黑",
            "elements": "金（白）、水（黑）",
            "wuxing_short": "金土相生，金锋当令",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 88,
            "reason": "德国白黑属金水，丑时土旺金生——金得土养，水不泄气。今日乙酉日金气主导，与德国队服气场同频；Musiala/Wirtz 双核如金刃出鞘，中路突破顺应天时。",
            "advantage": "开场即压制，xG 3.8 级攻势与五行金锋共振；定位球与肋部渗透在丑时土旺下更易兑现"
          },
          "away": {
            "team": "Curaçao",
            "colors": "蓝+黄",
            "elements": "水（蓝）、土（黄）",
            "wuxing_short": "水土受制，筑堤挡洪",
            "verdict": "不利",
            "verdict_color": "#D95F6A",
            "compat": 24,
            "reason": "库拉索蓝黄属水土，丑时土旺克水——蓝色水德被土所困，黄色土虽可守，却在金气当令之日难化攻势为反击。Advocaat 五后卫如筑堤，堤可延一时，难挡决口。",
            "disadvantage": "密集防守消耗大，Chong 速度对位 Kimmich 难持续；先失球后易崩盘，定位球是唯一偷分窗口"
          },
          "summary": "五行裁定：德国金土顺局，库拉索水土受制，厚土难挡金锋全程"
        },
        "hexagram": {
          "name": "夬卦",
          "symbol": "☱",
          "number": 43,
          "upper": "兑泽",
          "lower": "乾天",
          "quote": "《周易·夬卦》：「扬于王庭，孚号有厉。」",
          "general": "泽上于天，决断之力。夬卦象征强势一方需速战速决、不容拖延——利于实力碾压、进攻主导的一方。",
          "advantage_team": "Germany",
          "disadvantage_team": "Curaçao",
          "hexagram_analysis": "夬卦主「决」，德国如天泽决口，Musiala 为决口之水、Wirtz 为金刃；库拉索三中卫五后卫如厚土承金，前 30 分钟不溃则土德可显，但 90 分钟内金锋必破堤。Neuer 复出五届世界杯，门将金德稳阵。",
          "match_nature": "强队控场大胜局",
          "match_nature_prob": 82,
          "yellow_card_risk": "低",
          "yellow_card_reason": "夬卦主决断非缠斗，预计全场 2-3 张黄牌——库拉索战术犯规阻截 Musiala/Wirtz 为主；德国控球时犯规需求低，红牌概率 <5%。",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "德国大胜概率 82%，净胜 3 球以上约 55%；平局 8%，库拉索胜 <5%（xG 3.8-0.3）"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 15-30 分钟（Musiala 肋部渗透）及第 60-75 分钟（Advocaat 变阵后空档扩大）"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "低——约 2-3 张，库拉索阻截双 10 号位战术犯规为主"
            },
            {
              "icon": "🔄",
              "label": "0-0 平局可能",
              "text": "极低（8%）——夬卦不容强者空手而归；库拉索或拖至 25 分钟后仍难零封"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "极低（<2%）——实力差过大，90 分钟内分胜负概率 98%+"
            }
          ],
          "early_goal": {
            "scenario": "若前 20 分钟德国率先进球（Musiala/Wirtz 破局）",
            "prediction": "「扬于王庭」一旦启动——库拉索五后卫或改四后卫，肋部空档暴露；Nagelsmann 双后腰 Pavlović-Nmecha 控场，Havertz 支点牵制中卫，追加 2-3 球概率升至 70%。",
            "favors": "Germany",
            "favors_prob": 88
          },
          "no_early_goal": {
            "scenario": "若前 30 分钟 0-0（Advocaat 低位奏效）",
            "prediction": "夬卦主「终必决」——德国半场调整（Sané 宽度 + Musiala 内切）后市面仍控；库拉索体能下滑后第 35-45 分钟失球概率 65%，下半场崩盘风险倍增。",
            "favors": "Germany",
            "favors_prob": 78
          },
          "away_goal": {
            "scenario": "若库拉索偷袭破门（L. Bacuna 定位球 / Chong 反击）",
            "prediction": "极低概率（<5%）——若成真，德国反扑如决口之水，Havertz 头球 + Musiala 肋部 15 分钟内扳平概率 80%，终局仍大概率 3-1 以上。",
            "favors": "Germany",
            "favors_prob": 85
          },
          "halftime": {
            "scenario": "若半场 2-0 或更大比分",
            "prediction": "Nagelsmann 轮换替补（仍保留 Wirtz 或 Musiala 其一），德国控场不追屠杀但可能再进 1-2 球；库拉索世界杯首秀心态易崩，下半场黄牌或增多。",
            "favors": "Germany",
            "favors_prob": 82
          },
          "extra_time": {
            "scenario": "若 90 分钟平局进加时（极低概率 <2%）",
            "prediction": "夬卦极不支持拖延——德国替补深度碾压，加时 10 分钟内进球概率 85%；点球大战概率 <10%。",
            "favors": "Germany",
            "favors_prob": 90
          }
        },
        "home_score": 88,
        "away_score": 22,
        "mystic_verdict": "☱ 夬卦决断——德国金锋当令，Musiala 如决口之水、Wirtz 如金刃出鞘；库拉索厚土能守一时，难挡全程。xG 3.8 与五行同频，此乃 E 组最无悬念之局。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 7,
        "away_score": 1,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Nmecha 6' (Wirtz); Comenencia 21'; Schlotterbeck 38'; Havertz 45+5 pen; Musiala 47' (Kimmich); Brown 68' (Undav); Undav 78'; Havertz 88' (Undav)",
        "highlights": "Comenencia 库拉索世界杯历史首球 · xG 4.22-0.41 · 出席 68,021 · Neuer 第125场 · Musiala/Undav 替补建功"
      }
    },
    {
      "id": "m10",
      "group": "F",
      "matchday": 1,
      "date": "2026-06-14",
      "time": "16:00",
      "time_local": "15:00 CT",
      "timezone": "CDT (UTC-5)",
      "time_beijing": "04:00",
      "date_beijing": "6月15日",
      "time_beijing_full": "北京时间 6月15日 04:00",
      "venue": "AT&T Stadium",
      "city": "Arlington, USA",
      "note": "F组焦点 · 荷兰 vs 日本 · 达拉斯 · 已结束 2-2",
      "lineup": {
        "confirmed": true,
        "formation": "4-3-3 / 3-4-2-1",
        "home": "Verbruggen; Dumfries, van Hecke, van Dijk (C), van de Ven; Gravenberch, de Jong, Reijnders; Summerville, Malen, Gakpo",
        "away": "Suzuki; Taniguchi, Watanabe, Ito; Doan, Kamada, Sano, Nakamura; Kubo, Maeda; Ueda (C)",
        "note": "官方首发 · Yahoo Sports / Sportskeeda · 2026-06-14 达拉斯。Malen 中锋、Weghorst 替补；日本三中卫 Taniguchi-Watanabe-Ito，Maeda+Kubo 双 10。 · 全场 2-2",
        "predicted": {
          "formation": "4-3-3 / 3-4-2-1",
          "home": "Verbruggen; Dumfries, van de Ven, van Dijk (C), Aké; Gravenberch, de Jong, Reijnders; Malen, Gakpo, Weghorst",
          "away": "Suzuki; Itakura, Ito, Tomiyasu; Doan, Kamada, Sano, Nakamura; Kubo, Ito; Ueda",
          "source": "FotMob / ESPN 赛前预测 · 非官方"
        },
        "diff": {
          "home": "⚠️ van Hecke 顶替 Aké 中卫；Malen 中锋（非 Weghorst）；Summerville 左边锋，Gakpo 右路。",
          "away": "⚠️ Taniguchi+Watanabe 中卫搭档（非 Itakura）；Maeda 首发前腰，Tomiyasu/Nagatomo 替补。"
        },
        "source": "Yahoo Sports · Sportskeeda · FIFA Match 10 · 2026-06-14",
        "updated": "2026-06-16T12:00:00+08:00"
      },
      "home": {
        "name": "Netherlands",
        "iso": "nl",
        "flag": "",
        "fifa_rank": 7,
        "rating": 85,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Ronald Koeman",
        "stars": [
          {
            "name": "Virgil van Dijk",
            "pos": "CB",
            "club": "Liverpool",
            "stats": "队长 · 世界级中卫",
            "rating": 8.8,
            "desc": "防线领袖，日本 Ueda 制空对位关键"
          },
          {
            "name": "Cody Gakpo",
            "pos": "LW",
            "club": "Liverpool",
            "stats": "左路内切+远射",
            "rating": 8.3,
            "desc": "F组进攻核心，对位日本三中卫肋部"
          },
          {
            "name": "Frenkie de Jong",
            "pos": "CM",
            "club": "Barcelona",
            "stats": "控球节拍器",
            "rating": 8.5,
            "desc": "中场出球枢纽，日本 Kamada 逼抢对位"
          }
        ],
        "injuries": [
          {
            "player": "Xavi Simons",
            "status": "OUT",
            "note": "4 月 ACL 撕裂，缺席整届世界杯；荷兰进攻创造力最大损失",
            "confirmed": true
          },
          {
            "player": "Jerdy Schouten",
            "status": "OUT",
            "note": "膝伤缺阵，与 Simons 同为 Koeman 体系关键轮换",
            "confirmed": true
          },
          {
            "player": "Matthijs de Ligt",
            "status": "DOUBT",
            "note": "背部问题未完全恢复，能否进入大名单/首发仍不确定",
            "confirmed": false
          },
          {
            "player": "Memphis Depay",
            "status": "DOUBT",
            "note": "科林蒂安赛季末腿筋重伤，109 场 55 球射手王能否首发存疑",
            "confirmed": false
          },
          {
            "player": "Bart Verbruggen",
            "status": "DOUBT",
            "note": "乌兹别克热身碰撞后存疑，仍预计首发；影响后场出球稳定性",
            "confirmed": false
          },
          {
            "player": "Nathan Aké",
            "status": "DOUBT",
            "note": "曼城赛季末出场时间受限，体能与状态需赛前最后评估",
            "confirmed": false
          },
          {
            "player": "Tijjani Reijnders",
            "status": "DOUBT",
            "note": "米兰赛季末分钟数不足，但预计仍进入中场轮换",
            "confirmed": false
          },
          {
            "player": "Denzel Dumfries",
            "status": "FIT",
            "note": "缺席 4 个月后已恢复，预计首发右后卫",
            "confirmed": true
          }
        ],
        "rumors": [
          "Koeman 4-3-3：van Dijk + van de Ven 中卫搭档已锁定；Malen 罗马状态正佳，与 Gakpo 竞争左路",
          "Depay vs Weghorst 中锋之争：前者伤疑，后者或首发；Simons 缺阵削弱肋部渗透",
          "更衣室：Euro 2024 后 de Jong/Gravenberch 双后腰回归，中场质量为近年最佳",
          "F组夺冠热门但伤病潮严重——日本三中卫专克欧洲宽度，本场爆冷指数四场最高"
        ],
        "star": {
          "name": "Virgil van Dijk",
          "pos": "CB",
          "desc": "荷兰防线定海神针，定位球攻防两端",
          "rating": 8.8
        }
      },
      "away": {
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
          "D"
        ],
        "coach": "Hajime Moriyasu",
        "stars": [
          {
            "name": "Takefusa Kubo",
            "pos": "RW",
            "club": "Real Sociedad",
            "stats": "西甲赛季 10+ 助",
            "rating": 8.2,
            "desc": "日本进攻灵魂，肋部突破是最大威胁"
          },
          {
            "name": "Ritsu Doan",
            "pos": "AM",
            "club": "Freiburg",
            "stats": "德甲稳定输出",
            "rating": 8,
            "desc": "Kubo 肋部搭档，专打荷兰边卫空隙"
          },
          {
            "name": "Ayase Ueda",
            "pos": "ST",
            "club": "Feyenoord",
            "stats": "25 球/31 场",
            "rating": 8.1,
            "desc": "费耶诺德赛季金靴级表现，领衔锋线"
          }
        ],
        "injuries": [
          {
            "player": "Kaoru Mitoma",
            "status": "OUT",
            "note": "腿筋伤退出整届世界杯；曾用制胜球 1-0 胜英格兰热身赛",
            "confirmed": true
          },
          {
            "player": "Takumi Minamino",
            "status": "OUT",
            "note": "因伤未入选大名单，减少前场 proven goalscorer 深度",
            "confirmed": true
          },
          {
            "player": "Wataru Endo",
            "status": "OUT",
            "note": "脚部手术恢复后退出大名单；Sano/Kamada 顶替后腰位置",
            "confirmed": true
          },
          {
            "player": "Takehiro Tomiyasu",
            "status": "DOUBT",
            "note": "长期伤后归队，三中卫体系中能否首发仍看赛前训练",
            "confirmed": false
          }
        ],
        "rumors": [
          "Moriyasu 3-4-2-1：Kubo-Doan 肋部仍是唯一稳定破局点；Mitoma 缺阵削弱左路速度",
          "Moriyasu 称「队史最深阵容」——2022 胜德国/西班牙模板仍可部分复现",
          "Ueda 费耶诺德赛季 25 球/31 场，领衔锋线；Suzuki 门将稳固",
          "远藤航退出后中场硬度下降，但 Kamada 逼抢 de Jong 仍是战术关键"
        ],
        "star": {
          "name": "Takefusa Kubo",
          "pos": "RW",
          "desc": "日本 10 号位，对位 van de Ven 肋部空隙",
          "rating": 8.2
        }
      },
      "h2h": {
        "home_wins": 1,
        "draws": 2,
        "away_wins": 1,
        "recent": [
          {
            "year": 2018,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "Netherlands"
          }
        ],
        "note": "历史互有胜负，日本 2022 大赛经验更丰富"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-14",
        "name": "Ismail Elfath",
        "nation": "USA",
        "iso": "us",
        "age": 42,
        "wc_experience": "2022 卡塔尔世界杯执法 · MLS 顶级裁判",
        "avg_yellow": 4,
        "avg_red": 0.1,
        "avg_penalty": 0.32,
        "home_win_rate": 51,
        "bias_index": 50,
        "bias_note": "美国籍 FIFA 精英裁判，2022 世界杯已有执法经验。出牌率中等偏上，对高位压迫后的战术犯规判罚果断；技术流对决中允许比赛流畅进行，但中场绞杀仍会出牌。",
        "tendencies": [
          "2022 世界杯执法经验，大赛节奏把控成熟",
          "VAR：Armando Villarreal（美国）",
          "荷日中场 de Jong vs Kamada 绞杀，预计 4-5 张黄牌"
        ],
        "officials": {
          "ar1": "Corey Parker (USA)",
          "ar2": "Kyle Atkins (USA)",
          "fourth": "Katia Garcia (MEX)",
          "var": "Armando Villarreal (USA)",
          "avar": "Rodolpho Toski (BRA)",
          "svar": "Tomasz Kwiatkowski (POL)"
        }
      },
      "prediction": {
        "home_win": 56,
        "draw": 23,
        "away_win": 22,
        "score": "1-1",
        "confidence": 76,
        "xg_home": 1.85,
        "xg_away": 1.05,
        "key_factor": "【赛后复盘】赛前主胜56%/最可能2-1；实际2-2。van Dijk+Summerville 两度领先，Nakamura+Kamada 两度扳平。方向：平局命中（23%）；日本爆冷指数兑现。",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 10.7
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
            "score": "2-0",
            "prob": 9.4
          },
          {
            "score": "3-1",
            "prob": 6.1
          },
          {
            "score": "3-0",
            "prob": 5.8
          },
          {
            "score": "0-1",
            "prob": 5.8
          }
        ]
      },
      "upset_alert": {
        "favorite": "荷兰",
        "underdog": "日本",
        "favorite_iso": "NL",
        "index": 42,
        "level": "ELEVATED",
        "level_cn": "偏高",
        "cold_result_pct": 45,
        "verdict": "今日四场爆冷指数最高——日本 2022 曾 2-1 胜德国，三中卫+Kubo 肋部对欧洲强队有明确克制模板；荷兰不可轻敌。",
        "tactical": "Moriyasu 3-4-2-1 三中卫压缩肋部，Kubo-Doan 配合专打 van de Ven 与 Dumfries 之间的空隙；荷兰高位压迫时 Mitoma 速度可惩罚身后空档。",
        "psychology": "日本 2022 大赛心理硬度已验证，落后时仍执行战术；荷兰 Verbruggen 门将存疑，若早失球可能影响 Koeman 变阵节奏。",
        "historical": "日本 2022 世界杯胜德国、西班牙；荷兰近三届世界杯小组赛稳定但 2018 末轮曾 2-1 负比利时；H2H 互有胜负。",
        "factors": [
          {
            "tag": "克制",
            "impact": "强",
            "detail": "日本三中卫+双前腰专克欧洲边路宽度打法"
          },
          {
            "tag": "速度错配",
            "impact": "中",
            "detail": "Mitoma/Kubo 肋部速度 vs 荷兰边卫回追"
          },
          {
            "tag": "伤病",
            "impact": "中",
            "detail": "远藤航退出削弱日本后腰；Verbruggen 碰撞存疑——双向"
          },
          {
            "tag": "心理",
            "impact": "中",
            "detail": "日本大赛经验不输荷兰，先破门后更可能收缩执行"
          }
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Ronald Koeman",
          "age": 61,
          "nation": "荷兰",
          "tenure": "2020—",
          "wc_exp": "2022 卡塔尔 · 2026 二度带队",
          "style_tags": [
            "4-3-3",
            "边路宽度",
            "定位球",
            "高位线"
          ],
          "formation_pref": "4-3-3 · 落后时 3-4-3",
          "style_summary": "荷兰传统 4-3-3，Dumfries 插上宽度 + Gakpo 内切；de Jong 控节奏，Reijnders 前插。Koeman 2022 世界杯八强，但对阿根廷点球大战出局；定位球（van Dijk）是重要武器。",
          "subs": {
            "timing": "首换 55–62 分钟；半场落后时 46' 可能直接变阵",
            "pattern": "常换边锋/中场：Summerville、Malen 互替；70' van Dijk 若黄牌风险会换中卫",
            "avg_first_sub": "57'",
            "note": "2022 世界杯场均首换 56'；对日本可能因 Verbruggen 存疑准备 46' 门将调整预案"
          },
          "when_leading": {
            "label": "继续控场 · 边卫仍插上",
            "detail": "1 球领先：维持 4-3-3 宽度，不早退；2 球+：65' 换 de Jong 类中场保体能。对日本不会过早 5 后卫——Koeman 风格偏「领先也要压制」。"
          },
          "when_trailing": {
            "label": "加边锋 · 三中卫可选",
            "detail": "先丢球：55' 前换 Malen/Summerville 加强宽度，或 60' 改 3-4-3 堆前锋。2022 对阿根廷 2-2 时曾 70' 换 Weghorst 高空轰炸——对日本可能 75' 类似模板。"
          },
          "vs_strong": {
            "label": "对强队：对攻不怵",
            "detail": "对阿根廷/法国级仍 4-3-3 对攻；心理上过信控球，被速度型反击（如日本 Kubo）是主要隐患。本场对日本不会主动收缩。"
          },
          "vs_weak": {
            "label": "对弱队：全场压制",
            "detail": "对直布罗陀级对手会 4-0+ 仍主攻；3 球领先 65' 后轮换替补。本场对日本非弱队，不会留余地练兵。"
          },
          "tournament": "2022 八强 + 2024 欧洲杯小组赛出局阴影；对日本首战必须取 3 分，预计首发最强 XI，Verbruggen 存疑是最大变量。",
          "traits": [
            "边路进攻依赖",
            "定位球强",
            "领先时不保守",
            "大赛淘汰赛经验足"
          ],
          "match_note": "F组焦点战必须取 3 分——预计最强 XI，领先也不早退；Verbruggen 存疑时 46' 可能有门将/中卫调整预案。"
        },
        "away": {
          "name": "Hajime Moriyasu",
          "age": 56,
          "nation": "日本",
          "tenure": "2018—",
          "wc_exp": "2018 俄罗斯 · 2022 卡塔尔（16强）",
          "style_tags": [
            "3-4-2-1",
            "肋部渗透",
            "整体移动",
            "防反转换"
          ],
          "formation_pref": "3-4-2-1 · 必要时 4-2-3-1",
          "style_summary": "森保一体系：三中卫+双前腰（Kubo/Doan）肋部配合，整体阵型紧凑，由守转攻 3 秒内完成。2022 胜德国、西班牙的模板——低位诱敌 + Kubo 肋部 + 快速转移是核心。",
          "subs": {
            "timing": "首换 60–70 分钟；落后时 55' 前换前锋；领先时 70'+ 换防守中场",
            "pattern": "「森保学」：60' 常换 2–3 人改变节奏；对德国 2022 半场 0-1 后 46' 连换 4 人",
            "avg_first_sub": "61'",
            "note": "远藤航退出后 Sano/Kamada 后腰组合，60' 换 Mitoma 加强边路是常见后手"
          },
          "when_leading": {
            "label": "收缩 + 快速反击",
            "detail": "1 球领先：改 5-3-2 或三中卫更深，Kubo 留前场反击；2 球+：70' 换防守型中场（Sano 留场）。对荷兰若领先，极可能复制 2022 对西班牙的控节奏防反。"
          },
          "when_trailing": {
            "label": "46' 变阵 · 搏命传统",
            "detail": "先丢球：半场或 46' 连换 2–3 人改 4-2-3-1 堆进攻；2022 对德国 0-1 半场后换 Asano 等逆转。对荷兰 0–0 僵局 65' 也会换 Mitoma 提速。"
          },
          "vs_strong": {
            "label": "对强队：防反 + 肋部",
            "detail": "对德国/西班牙/荷兰：三中卫低位，不拼控球，专打身后与肋部。心理无畏惧感（2022 已证明），本场对荷兰是「以弱搏强」最优场景。"
          },
          "vs_weak": {
            "label": "对弱队：控球主导",
            "detail": "对亚洲弱旅会 4-3-3 压上控球；对荷兰不会用此模式。小组赛末轮对瑞典若已出线，可能轮换 3–4 名主力「训练新兵」。"
          },
          "tournament": "2022 16 强历史最佳；森保一大赛临场（尤其半场调整）是日本足球近年最大资产。本场对荷兰爆冷指数 42 的核心支撑之一。",
          "traits": [
            "半场变阵大师",
            "防反纪律强",
            "对强队心态稳",
            "远藤航缺阵略削弱后腰"
          ],
          "match_note": "复制 2022 对德国/西班牙模板：三中卫低位 + Kubo 肋部；若 1–0 领先 70' 后换防守中场收缩。46' 变阵是最大后手。"
        }
      },
      "weather": {
        "city": "达拉斯",
        "country": "美国",
        "venue": "AT&T Stadium",
        "temp": 30,
        "humidity": 55,
        "altitude_m": 180,
        "rain_chance": 10,
        "wind": "南风 2级",
        "condition_cn": "凌晨微热，可闭合屋顶",
        "impact_level": "LOW",
        "impact": "AT&T Stadium 半封闭可闭合屋顶，180m 低海拔，气候变量对推演权重较低",
        "impact_summary": "闭合屋顶消除降雨/风扰；30°C 对荷日两队均可接受，推演以战术对位为主",
        "home_adapt": 88,
        "away_adapt": 85,
        "home_note": "荷兰球员多效力欧洲五大联赛，30°C 完全适应；de Jong 等控球型中场不受气候制约",
        "away_note": "日本 2022 卡塔尔已适应高温作战；三中卫低位减少往返跑动，气候影响小于荷兰高位压迫队",
        "weather_factors": [
          {
            "label": "闭合屋顶球场",
            "impact": "消除变量",
            "detail": "无雨无强风，传球与定位球落点稳定，利于技术流对攻"
          },
          {
            "label": "180m 低海拔",
            "impact": "轻微",
            "detail": "较海平面传球略快，长传需微调力度——对日本快速转移略利"
          },
          {
            "label": "30°C 凌晨",
            "impact": "中性",
            "detail": "当地 15:00 CT 开球，气温适中；90 分钟高强度对双方均等"
          },
          {
            "label": "湿度 55%",
            "impact": "有利传控",
            "detail": "干燥舒适，地面配合流畅，Gakpo/Kubo 肋部渗透不受场地拖累"
          },
          {
            "label": "降雨 10%",
            "impact": "无影响",
            "detail": "室内关闭屋顶，推演可忽略降雨因子"
          }
        ],
        "historical_note": "AT&T Stadium 容量 80,000 · F 组揭幕战；达拉斯 6 月干燥少雨，世界杯期间多为晴朗"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "乙酉日",
          "day_element": "木+金",
          "hour_home": "寅时（03:00-05:00）",
          "hour_home_element": "木",
          "day_dominant": "木",
          "day_summary": "丙午年庚午月乙酉日寅时——寅木当令，木旺金缺，两强相争宜以柔克刚。《周易·同人卦》曰：「同人于野，亨。」技术流对决逢木时，边路速度与肋部渗透者利；忌硬碰硬，宜战术纪律与换人深度决胜。"
        },
        "wuxing": {
          "home": {
            "team": "Netherlands",
            "colors": "橙+白",
            "elements": "火（橙）、金（白）",
            "wuxing_short": "木火相生，进攻气势旺",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 72,
            "reason": "荷兰橙色属火，寅时木生火——Gakpo/Dumfries 边路宽度如木火蔓延；van Dijk 定位球金德在木时仍有威胁。Koeman 4-3-3 高位压迫顺应寅木生发之气。",
            "advantage": "开场 30 分钟压制力强，de Jong 控球节拍与木时节奏同频；换人深度（Gravenberch/Reijnders）利于 70 分钟后提速"
          },
          "away": {
            "team": "Japan",
            "colors": "蓝+白",
            "elements": "水（蓝）、金（白）",
            "wuxing_short": "水木相涵，防守反击可成",
            "verdict": "中性",
            "verdict_color": "#C8A96E",
            "compat": 68,
            "reason": "日本蓝色属水，寅时木不克水——Moriyasu 三中卫+双前腰如蓄水待时，Kubo 肋部突破如暗流穿石。2022 胜德国之「水克火」模板仍可部分复现，但 Verbruggen 存疑削弱荷兰火德。",
            "advantage": "Kubo-Doan 肋部配合专打 van de Ven 空隙；Mitoma 速度惩罚荷兰高位身后——爆冷指数四场最高"
          },
          "summary": "五行裁定：木时两强相争，荷兰火德略占上风，日本水德暗藏爆冷之机"
        },
        "hexagram": {
          "name": "同人卦",
          "symbol": "☰",
          "number": 13,
          "upper": "乾天",
          "lower": "离火",
          "quote": "《周易·同人卦》：「同人于野，亨。」",
          "general": "天火同人，势均力敌之局。同人卦象征两强在野相争、各有拥趸——利于战术纪律更好、肋部渗透更精的一方，非纯实力碾压局。",
          "advantage_team": "Netherlands",
          "disadvantage_team": "Japan",
          "hexagram_analysis": "同人卦主协作与相争并存——荷兰火德在野（Gakpo 内切 + Dumfries 插上），日本水德潜行（Kubo 肋部 + Kamada 逼抢 de Jong）。van Dijk 如天行健定防线；Kubo 如星火可成燎原，2022 模板仍有效。本场爆冷指数 42，为今日最高。",
          "match_nature": "势均力敌小胜局",
          "match_nature_prob": 52,
          "yellow_card_risk": "中",
          "yellow_card_reason": "同人卦主相争，预计 4-5 张黄牌——de Jong vs Kamada/Sano 中场绞杀、Dumfries 对位 Mitoma/Doan 犯规；荷兰高位压迫时日本反击被拉倒概率高。",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "荷兰小胜 52%，平局 28%，日本爆冷 20%（xG 1.85-1.05，泊松最可能 2-1）"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 20-35 分钟（双方试探后）及第 70-85 分钟（换人后体能差显现）"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中等——约 4-5 张，中场绞杀 + 边路对位犯规"
            },
            {
              "icon": "🔄",
              "label": "0-0 平局可能",
              "text": "中（28%）——同人卦允许僵持；日本三中卫压缩空间，荷兰久攻不下概率不低"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "低（8%）——F 组首战双方可接受平局，但 90 分钟内分胜负概率仍约 72%"
            }
          ],
          "early_goal": {
            "scenario": "若前 25 分钟荷兰率先进球（Gakpo 内切 / van Dijk 定位球）",
            "prediction": "日本被迫压出三中卫——Kubo 反击空间增大，Mitoma 速度对位 Dumfries 身后；但荷兰控场下「同人」转为荷兰主导，追加进球概率 45%，被扳平概率 38%。",
            "favors": "Netherlands",
            "favors_prob": 58
          },
          "no_early_goal": {
            "scenario": "若前 30 分钟 0-0（Moriyasu 三中卫奏效）",
            "prediction": "消耗战格局——荷兰换人深度略优（Reijnders/Gravenberch），de Jong 控球率决定节奏；第 55-70 分钟 Kubo 肋部或 Gakpo 远射破局概率 62%。",
            "favors": "Netherlands",
            "favors_prob": 55
          },
          "away_goal": {
            "scenario": "若日本先进球（Kubo 肋部 / Doan 配合）",
            "prediction": "同人卦遭逆——荷兰主场反扑，Gakpo + Malen 扳平概率 60%；若 Verbruggen 存疑影响出球，日本收缩执行 1-0 概率 25%，但 90 分钟荷兰至少扳平概率 65%。",
            "favors": "Netherlands",
            "favors_prob": 52
          },
          "halftime": {
            "scenario": "若半场 1-1 进入中场",
            "prediction": "Koeman 变阵（Summerville 速度或加强宽度），荷兰 70 分钟后略占上风；日本远藤航退出削弱后腰硬度，Sano 对位 de Jong 体能存疑。",
            "favors": "Netherlands",
            "favors_prob": 58
          },
          "extra_time": {
            "scenario": "若 90 分钟平局进加时（概率 8%）",
            "prediction": "荷兰替补深度 + 身高定位球优势，加时 15 分钟内进球概率 55%；点球大战概率 45%，van Dijk 防空日本点球手心理压力大。",
            "favors": "Netherlands",
            "favors_prob": 55
          }
        },
        "home_score": 64,
        "away_score": 58,
        "mystic_verdict": "☰ 同人于野——荷日两强相争，van Dijk 如天行健；Kubo 水德或可偷天换日。木时火水交锋，荷兰略占天时，但日本 2022 模板仍有效——今日四场爆冷指数最高。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 2,
        "away_score": 2,
        "status": "FT",
        "label": "全场结束",
        "scorers": "van Dijk 51' (Gravenberch); Nakamura 57'; Summerville 64'; Kamada 88' (Shiogai)",
        "highlights": "下半场4球对轰 · Kamada 89' 绝平 · xG 0.78-0.59 · 出席 69,285 · 荷兰16场小组赛不败延续"
      }
    },
    {
      "id": "m11",
      "group": "E",
      "matchday": 1,
      "date": "2026-06-14",
      "time": "19:00",
      "time_local": "19:00 ET",
      "timezone": "EDT (UTC-4)",
      "time_beijing": "07:00",
      "date_beijing": "6月15日",
      "time_beijing_full": "北京时间 6月15日 07:00",
      "venue": "Lincoln Financial Field",
      "city": "Philadelphia, USA",
      "note": "E组第2场 · 科特迪瓦 vs 厄瓜多尔 · 费城 · 已结束 1-0",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "N'Dicka 确认缺阵 · Valencia 小腿存疑 · 官方首发预计开赛前 1 小时公布。 · 全场 1-0",
        "predicted": {
          "formation": "4-3-3 / 4-2-3-1",
          "home": "Fofana; Doué, Agbadou, Kossounou, Konan; Kessié, Sangaré, S. Fofana; Diallo, Guessand, Diomande",
          "away": "Galindez; Ordóñez, Pacho, Hincapié, Estupiñán; Caicedo, Franco; Yeboah, Plata, Páez; Valencia",
          "source": "Sports Mole / FWC Times · 2026-06-15 · 非官方",
          "alt": {
            "formation": "4-3-3 / 4-2-3-1",
            "home": "Fofana; Singo, Diomande, Agbadou, Konan; Sangaré, Kessié, Seri; Amad, Wahi, Adingra",
            "away": "Galindez; Preciado, Pacho, Hincapié, Estupiñán; Caicedo, Franco; Plata, Páez, Sarmiento; Valencia",
            "source": "FWC Times / FotMob 备选预测"
          }
        },
        "updated": "2026-06-16T12:00:00+08:00"
      },
      "home": {
        "name": "Côte d'Ivoire",
        "iso": "ci",
        "flag": "",
        "fifa_rank": 36,
        "rating": 74,
        "form": [
          "W",
          "D",
          "W",
          "W",
          "L"
        ],
        "coach": "Emerse Faé",
        "stars": [
          {
            "name": "Franck Kessié",
            "pos": "CM",
            "club": "Al-Ahli",
            "stats": "B2B 中场屏障",
            "rating": 7.8,
            "desc": "对抗 Caicedo 是中场胜负手"
          },
          {
            "name": "Simon Adingra",
            "pos": "LW",
            "club": "Brighton",
            "stats": "速度型边锋",
            "rating": 7.9,
            "desc": "对位 Estupiñán 边路速度对决"
          },
          {
            "name": "Amad Diallo",
            "pos": "RW",
            "club": "Man United",
            "stats": "曼联边路爆点",
            "rating": 7.8,
            "desc": "Faé 边路首选之一，与 Pepe/Diomande 竞争"
          }
        ],
        "injuries": [
          {
            "player": "Evan N'Dicka",
            "status": "OUT",
            "note": "罗马德比后大腿伤，FotMob/Sports Mole 确认缺席 E 组首战；Agbadou/Kossounou 顶替中卫",
            "confirmed": true
          },
          {
            "player": "Sébastien Haller",
            "status": "OUT",
            "note": "未入选 26 人大名单（非本场伤停，但影响锋线深度）",
            "confirmed": true
          }
        ],
        "rumors": [
          "Faé 锋线抉择：Haller 落选后 Guessand/Wahi/Bonny 三人合计仅 4 粒国家队进球",
          "边路火力：Amad Diallo、Simon Adingra、Nicolas Pepe、Yan Diomande 竞争首发，科特迪瓦主要威胁在宽度",
          "非洲杯冠军班底四连胜入战 · E 组德国已赛，本场结果直接影响出线形势",
          "N'Dicka 缺阵削弱防空，对位 Enner Valencia 定位球与 Hincapié 高度处于劣势"
        ],
        "star": {
          "name": "Franck Kessié",
          "pos": "CM",
          "desc": "科特迪瓦中场硬度，对位 Caicedo 关键",
          "rating": 7.8
        }
      },
      "away": {
        "name": "Ecuador",
        "iso": "ec",
        "flag": "",
        "fifa_rank": 31,
        "rating": 75,
        "form": [
          "W",
          "W",
          "D",
          "W",
          "W"
        ],
        "coach": "Sebastián Beccacece",
        "stars": [
          {
            "name": "Moisés Caicedo",
            "pos": "CDM",
            "club": "Chelsea",
            "stats": "世界级后腰",
            "rating": 8.5,
            "desc": "厄瓜多尔攻防转换枢纽，限制 Kessié 推进"
          },
          {
            "name": "Enner Valencia",
            "pos": "ST",
            "club": "Internacional",
            "stats": "队史 49 球",
            "rating": 8,
            "desc": "队长小腿存疑，仍是唯一稳定进球点"
          },
          {
            "name": "Piero Hincapié",
            "pos": "CB",
            "club": "Bayer Leverkusen",
            "stats": "出球中卫",
            "rating": 8.1,
            "desc": "防线领袖，对位 Diomande/Guessand"
          }
        ],
        "injuries": [
          {
            "player": "Enner Valencia",
            "status": "DOUBT",
            "note": "小腿轻微问题，队长/队史 49 球射手能否首发存疑——全队唯一双位数进球者",
            "confirmed": false
          }
        ],
        "rumors": [
          "Beccacece：19 场不败延续至世界杯 · Caicedo 领衔 Chelsea 级中场硬度",
          "Valencia 若缺阵：Plata（8 球）为次号射手，锋线进球高度依赖老将",
          "Kendry Páez 18 岁天才中场入选；Pacho/Hincapié/Estupiñán 欧洲顶级联赛班底",
          "更衣室消息：La Tri 强调低位防守+快速转换，平局对双方均可接受"
        ],
        "star": {
          "name": "Moisés Caicedo",
          "pos": "CDM",
          "desc": "厄瓜多尔 19 场不败的基石",
          "rating": 8.5
        }
      },
      "h2h": {
        "home_wins": 1,
        "draws": 1,
        "away_wins": 0,
        "recent": [
          {
            "year": 2024,
            "comp": "友谊赛",
            "score": "2-1",
            "winner": "Côte d'Ivoire"
          }
        ],
        "note": "样本少，参考价值有限"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-14",
        "name": "François Letexier",
        "nation": "France",
        "iso": "fr",
        "age": 36,
        "wc_experience": "2024 欧洲杯决赛主裁 · 2026 世界杯执法",
        "wc_final": "2024 欧洲杯决赛主裁",
        "avg_yellow": 4,
        "avg_red": 0.22,
        "avg_penalty": 0.35,
        "home_win_rate": 48,
        "bias_index": 47,
        "bias_note": "法国顶级裁判，2024 欧洲杯决赛主裁。执法风格严谨，对战术犯规与抗议出牌果断；Caicedo/Kessié 类型中场绞杀局黄牌风险偏高，点球判罚尺度相对明确。",
        "tendencies": [
          "欧洲杯决赛级主裁，大赛压力承受力强",
          "VAR：Jarred Gillett（英格兰）",
          "预计 5-6 张黄牌，Oliver 非本场主裁——本场为 Letexier"
        ],
        "officials": {
          "ar1": "Cyril Mugnier (FRA)",
          "ar2": "Mehdi Rahmouni (FRA)",
          "fourth": "Khalid Al-Turais (KSA)",
          "var": "Jarred Gillett (ENG)",
          "avar": "Willy Delajod (FRA)",
          "svar": "Bram Van Driessche (BEL)"
        }
      },
      "prediction": {
        "home_win": 40,
        "draw": 25,
        "away_win": 35,
        "score": "1-1",
        "confidence": 70,
        "xg_home": 1.5,
        "xg_away": 1.4,
        "key_factor": "【赛后复盘】赛前平局35%/最可能1-1；实际1-0主胜。Caicedo 绞杀有效但 Amad 90' 破局。方向：主胜命中（38%）；非洲首胜2026世界杯。",
        "score_dist": [
          {
            "score": "1-1",
            "prob": 11.6
          },
          {
            "score": "2-1",
            "prob": 8.7
          },
          {
            "score": "1-0",
            "prob": 8.3
          },
          {
            "score": "1-2",
            "prob": 8.1
          },
          {
            "score": "0-1",
            "prob": 7.7
          },
          {
            "score": "2-0",
            "prob": 6.2
          },
          {
            "score": "2-2",
            "prob": 6.1
          }
        ]
      },
      "upset_alert": {
        "favorite": "Côte d'Ivoire",
        "underdog": "Ecuador",
        "favorite_iso": "CI",
        "index": 36,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 48,
        "verdict": "名义主队略被看好，但 xG 1.5-1.4 几乎均势——厄瓜多尔 19 场不败+Caicedo 中场硬度，客胜或逼平均属合理冷门区间。",
        "tactical": "Caicedo 限制 Kessié 推进，Estupiñán-Plata 左路速度对位 Konan；科特迪瓦 N'Dicka 伤疑削弱防空，Enner Valencia 定位球是破局点。",
        "psychology": "厄瓜多尔 2022 小组出线经验+19 场不败士气正盛；科特迪瓦非洲杯冠军班底大赛压力不低，久攻不下易急躁。",
        "historical": "2024 友谊赛科特迪瓦 2-1 胜厄瓜多尔（样本小）；厄瓜多尔 2022 曾 2-1 胜东道主卡塔尔，大赛慢热后爆发有前例。",
        "factors": [
          {
            "tag": "克制",
            "impact": "中",
            "detail": "Caicedo 绞杀+低位转换专克非洲队高位压迫"
          },
          {
            "tag": "状态",
            "impact": "强",
            "detail": "厄瓜多尔 19 场不败，防守纪律为本届 E 组顶级"
          },
          {
            "tag": "伤病",
            "impact": "中",
            "detail": "N'Dicka 伤疑削弱科特迪瓦中卫深度"
          },
          {
            "tag": "心理",
            "impact": "中",
            "detail": "平局对双方均可接受，领先方或保守——利于冷门"
          }
        ],
        "reverse_note": "若按排名倾向厄瓜多尔（FIFA #31），则科特迪瓦主场爆冷指数约 32，仍为中等。"
      },
      "coach_analysis": {
        "home": {
          "name": "Emerse Faé",
          "age": 42,
          "nation": "科特迪瓦",
          "tenure": "2024—",
          "wc_exp": "2024 非洲杯冠军 · 2026 世界杯首秀",
          "style_tags": [
            "4-3-3",
            "身体对抗",
            "边路速度",
            "非洲杯冠军班底"
          ],
          "formation_pref": "4-3-3 · 4-4-2 双前锋可选",
          "style_summary": "2024 非洲杯夺冠教练，强调 Adingra/Doué 边路速度与 Kessié/Sangaré 中场硬度。Faé 从助教转正，大赛经验相对有限但非洲杯决赛逆转尼日利亚显示韧性。",
          "subs": {
            "timing": "首换 60–68 分钟；落后 55' 前换 Haller/前锋",
            "pattern": "常换边锋或前锋；Kessié 几乎全场不换；70' 换 Diallo 加强边路",
            "avg_first_sub": "63'",
            "note": "非洲杯期间场均首换 64'；N'Dicka 伤疑可能 46' 被迫调整中卫"
          },
          "when_leading": {
            "label": "适度收缩 · 保体能",
            "detail": "1 球领先：中场退深，Adingra 留速度反击；2 球+：65' 换防守型中场。对厄瓜多尔不会过度进攻——非洲球队领先易保守是历史通病，Faé 非洲杯决赛曾 1-0 后收缩。"
          },
          "when_trailing": {
            "label": "堆前锋 · 高空轰炸",
            "detail": "先丢球：60' 前换 Haller（若未首发）或双前锋，加强定位球与传中。0–0 僵局 70' 换 Diallo 边路突破。"
          },
          "vs_strong": {
            "label": "对强队：低位 + 反击",
            "detail": "对德国级会 4-5-1 低位；对厄瓜多尔（同级）会正面对抗，中场 Kessié vs Caicedo 是胜负手。"
          },
          "vs_weak": {
            "label": "对弱队：压制进攻",
            "detail": "非洲杯对弱旅 3–0+ 仍主攻；世界杯对德国若已出线末轮可能对库拉索轮换。本场对厄瓜多尔全主力。"
          },
          "tournament": "非洲杯冠军是最大资本；世界杯首秀对厄瓜多尔几乎均势，Faé 需证明洲际冠军能复制到世界舞台。",
          "traits": [
            "身体足球",
            "领先略保守",
            "非洲杯逆转经验",
            "中卫伤疑是隐患"
          ],
          "match_note": "非洲杯冠军对 19 场不败——中场 Kessié vs Caicedo 决定节奏；领先易保守是 Faé 需克服的历史弱点。"
        },
        "away": {
          "name": "Sebastián Beccacece",
          "age": 44,
          "nation": "阿根廷",
          "tenure": "2024—",
          "wc_exp": "2026 带队 · 俱乐部欧战经验",
          "style_tags": [
            "4-4-2/4-2-3-1",
            "低位防守",
            "Caicedo 轴心",
            "快速转换"
          ],
          "formation_pref": "4-4-2 · Caicedo 单后腰",
          "style_summary": "阿根廷籍，强调防守组织与 Caicedo 后腰屏障；厄瓜多尔 19 场不败的核心是纪律与转换速度。Beccacece 2024 上任后延续 Alfaro 防反底子，加强定位球训练。",
          "subs": {
            "timing": "首换 62–70 分钟；落后 58' 前换 Plata/进攻球员",
            "pattern": "Caicedo 极少被换；常换 Plata/Minda 加强边路；75' 换 Yeboah 速度",
            "avg_first_sub": "65'",
            "note": "19 场不败期间换人偏保守——领先时 75'+ 才调整，保持阵型稳定"
          },
          "when_leading": {
            "label": "深度低位 · 几乎不换体系",
            "detail": "1 球领先：4-4-2 变 4-5-1，Caicedo 单后腰蹲守，Estupiñán 回撤；2 球+：仍不换 Caicedo，70' 换防守边卫。对科特迪瓦领先会极度保守。"
          },
          "when_trailing": {
            "label": "换边锋 · 保持防守底线",
            "detail": "先丢球：60' 换 Plata + 前场堆人，但 Caicedo 不离场——不会 0–2 就三前锋搏命。0–0 时 65' 换 Minda 加强宽度。"
          },
          "vs_strong": {
            "label": "对强队：铁桶 + 偷一个",
            "detail": "对阿根廷/荷兰级：5-4-1 低位，Valencia 反击；2022 对荷兰 1-1、对日本 0-0 的模板。对德国若遇会同样策略。"
          },
          "vs_weak": {
            "label": "对弱队：控球略增",
            "detail": "对玻利维亚级会压上；对科特迪瓦同级仍偏谨慎——19 场不败心态下「不输优先」。末轮对已出线对手可能轮换 2–3 人。"
          },
          "tournament": "19 场不败 + 2022 小组出线；Beccacece 大赛样本少，但对科特迪瓦这场「不输即赢」心态可能主导战术。",
          "traits": [
            "Caicedo 依赖度高",
            "领先极度保守",
            "19场不败心理",
            "换人偏晚"
          ],
          "match_note": "19 场不败心态下「不输优先」——领先会 4-5-1 深度低位；先丢球 60' 换 Plata 但不撤 Caicedo。"
        }
      },
      "weather": {
        "city": "费城",
        "country": "美国",
        "venue": "Lincoln Financial Field",
        "temp": 27,
        "humidity": 62,
        "altitude_m": 12,
        "rain_chance": 20,
        "wind": "东北风 2级",
        "condition_cn": "早场温和，开放式球场",
        "impact_level": "LOW",
        "impact": "林肯金融球场开放式天然草，27°C 62% 湿度，对非洲/南美球队均友好",
        "impact_summary": "气候均衡——推演重点在中场 Caicedo vs Kessié，非天气因素",
        "home_adapt": 80,
        "away_adapt": 82,
        "home_note": "科特迪瓦球员多效力欧洲/非洲联赛，27°C 舒适；Adingra 等速度型边锋在干燥草皮上发挥更好",
        "away_note": "厄瓜多尔来自赤道高原（基多 2850m 训练背景），费城海平面 12m 反而让其体能更充沛；19 场不败期间客场适应力强",
        "weather_factors": [
          {
            "label": "27°C 早场",
            "impact": "中性",
            "detail": "北京时间 07:00 对应当地 19:00 ET，晚场气温回落，利于 90 分钟高强度对抗"
          },
          {
            "label": "开放式天然草",
            "impact": "略利传控",
            "detail": "非人工草，Caicedo 长传与 Estupiñán 左路传中落点更可预测"
          },
          {
            "label": "湿度 62%",
            "impact": "中等",
            "detail": "费城夏季典型湿度，60' 后体能下降对双方均等，领先方或更保守"
          },
          {
            "label": "降雨 20%",
            "impact": "低",
            "detail": "若微雨则场地湿滑，略利防守方（厄瓜多尔 19 场不败低位）"
          },
          {
            "label": "东北风 2级",
            "impact": "轻微",
            "detail": "影响长传与角球落点，van 式定位球需微调——对两队均等"
          }
        ],
        "historical_note": "Lincoln Financial Field 容量 69,796 · E 组赛事；费城 6 月平均 28°C，开放式球场受微风影响"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "乙酉日",
          "day_element": "木+金",
          "hour_home": "辰时（07:00-09:00）",
          "hour_home_element": "土",
          "day_dominant": "土",
          "day_summary": "丙午年庚午月乙酉日辰时——辰时土旺，火生土、金被土埋。《周易·谦卦》曰：「谦谦君子，卑以自牧。」两非洲/南美劲旅逢土旺之日，宜守中待变、以退为进；忌急躁冒进，定位球与中场绞杀定乾坤。"
        },
        "wuxing": {
          "home": {
            "team": "Côte d'Ivoire",
            "colors": "橙+绿",
            "elements": "火（橙）、木（绿）",
            "wuxing_short": "火土相生，进攻需耐心",
            "verdict": "中性",
            "verdict_color": "#C8A96E",
            "compat": 58,
            "reason": "科特迪瓦橙绿属火木，辰时土旺火生——Faé 强调身体对抗，Kessié/Sangaré 中场硬度如土中藏火；但 N'Dicka 伤疑削弱防空，Enner Valencia 定位球需火炼真金方能破山。",
            "advantage": "Simon Adingra 边路速度对位 Estupiñán；非洲杯冠军班底大赛经验，主场费城氛围加持"
          },
          "away": {
            "team": "Ecuador",
            "colors": "黄+蓝",
            "elements": "土（黄）、水（蓝）",
            "wuxing_short": "土水相涵，防守如山",
            "verdict": "有利",
            "verdict_color": "#5BBF8A",
            "compat": 65,
            "reason": "厄瓜多尔黄蓝属土水，辰时土旺——Caicedo 如山地之固，19 场不败土德厚重；Beccacece 低位防守+快速转换顺应「谦卦」以退为进。Hincapié 出球中卫稳阵，Plata 速度反击如暗流。",
            "advantage": "Caicedo 绞杀 Kessié 推进，中场控制权倾向客队；平局对双方均可接受，领先方收缩概率高"
          },
          "summary": "五行裁定：辰时土旺，厄瓜多尔土德略占上风，科特迪瓦需火炼真金破谦守"
        },
        "hexagram": {
          "name": "谦卦",
          "symbol": "☶",
          "number": 15,
          "upper": "坤地",
          "lower": "艮山",
          "quote": "《周易·谦卦》：「谦谦君子，卑以自牧。」",
          "general": "地山谦，以退为进。谦卦象征防守反击、不骄不躁的一方占优——利于纪律严明、中场硬度更高、能忍受 0-0 的一方。",
          "advantage_team": "Ecuador",
          "disadvantage_team": "Côte d'Ivoire",
          "hexagram_analysis": "谦卦主守中——Caicedo 如艮山不动，Kessié 对位绞杀决定中场归属；科特迪瓦火德（Diallo/Guessand）需耐心方能破山。xG 1.5-1.4 几乎均势，泊松最可能 1-1；Letexier 执法下 Caicedo/Kessié 对抗黄牌风险高。",
          "match_nature": "均势胶着局",
          "match_nature_prob": 38,
          "yellow_card_risk": "中高",
          "yellow_card_reason": "谦卦主守但绞杀激烈，预计 5-6 张黄牌——Caicedo vs Kessié 中场对抗、Singo/Konan 对位 Plata/Estupiñán；Letexier 对战术犯规尺度偏严。",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "平局 35%，科特迪瓦主胜 38%，厄瓜多尔客胜 27%（xG 1.5-1.4 均势）"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 35-50 分钟（双方体能峰值）及第 75-90 分钟（定位球 / 反击）"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中高——约 5-6 张，Caicedo/Kessié 绞杀 + 边路对位"
            },
            {
              "icon": "🔄",
              "label": "0-0 平局可能",
              "text": "高（35%）——谦卦主守，双方均可接受 1 分，久攻不下概率不低"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "低（6%）——小组赛首战平局可接受，绝杀概率 30%"
            }
          ],
          "early_goal": {
            "scenario": "若前 20 分钟率先进球（Guessand 支点 / Valencia 定位球 / Plata 反击）",
            "prediction": "领先方或收缩执行谦卦「卑以自牧」——被追平概率 48%；若厄瓜多尔领先，Caicedo 绞杀 + Hincapié 防空，科特迪瓦压上易留 Plata 身后空档。",
            "favors": "Draw",
            "favors_prob": 48
          },
          "no_early_goal": {
            "scenario": "若前 45 分钟 0-0（双方中场绞杀）",
            "prediction": "下半场体能下降，定位球成关键——科特迪瓦 Singo/Agbadou 身高 vs Hincapié 防空；第 60-75 分钟 Caicedo 反击或 Kessié 远射破局概率 55%。",
            "favors": "Ecuador",
            "favors_prob": 42
          },
          "away_goal": {
            "scenario": "若厄瓜多尔领先（Valencia 跑位 / Caicedo 长传 Plata）",
            "prediction": "科特迪瓦压上，Adingra 宽度 + Diomande 冲击；但 Caicedo 反击威胁大，90 分钟厄瓜多尔守 1-0 概率 38%，被追平 45%。",
            "favors": "Ecuador",
            "favors_prob": 45
          },
          "halftime": {
            "scenario": "若半场 1-1 进入中场",
            "prediction": "90 分钟难分胜负概率 52%——双方均可接受平局，Faé 与 Beccacece 或同时保守；绝杀来自定位球或 Caicedo 直塞 Plata 概率 30%。",
            "favors": "Draw",
            "favors_prob": 52
          },
          "extra_time": {
            "scenario": "若 90 分钟平局且需绝杀（概率 6%）",
            "prediction": "加时赛体能下降，科特迪瓦 African Cup 班底深度略优，但 Caicedo 单点防守仍稳；点球大战概率 40%，门将 Fofana vs Galindez 均非顶级。",
            "favors": "Draw",
            "favors_prob": 40
          }
        },
        "home_score": 48,
        "away_score": 54,
        "mystic_verdict": "☶ 谦卦守中——Caicedo 如艮山，19 场不败土德厚；科特迪瓦火德需耐心方能破山。xG 均势下平局气场最浓，厄瓜多尔客不败概率略高于主胜。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 1,
        "away_score": 0,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Amad Diallo 90' (Singo)",
        "highlights": "Amad 替补90'绝杀 · 厄瓜多尔三门柱 · xG 1.52-1.01 · 出席 68,274 · 终结厄瓜多尔19场不败"
      }
    },
    {
      "id": "m12",
      "group": "F",
      "matchday": 1,
      "date": "2026-06-14",
      "time": "20:00",
      "time_local": "20:00 CT",
      "timezone": "CDT (UTC-6)",
      "time_beijing": "10:00",
      "date_beijing": "6月15日",
      "time_beijing_full": "北京时间 6月15日 10:00",
      "venue": "Estadio BBVA",
      "city": "Monterrey, Mexico",
      "note": "F组第2场 · 瑞典 vs 突尼斯 · 蒙特雷（墨西哥） · 已结束 5-1",
      "lineup": {
        "confirmed": false,
        "formation": null,
        "home": "等待官方确认",
        "away": "等待官方确认",
        "note": "Kulusevski 未入选 · Isak 体能存疑 · Potter 预计 4-4-2；突尼斯 Lamouchi 4-3-3。 · 全场 5-1",
        "predicted": {
          "formation": "4-4-2 / 4-3-3",
          "home": "Johansson; Svensson, Lindelöf, Hien, Gudmundsson; Elanga, Ayari, Bergvall, Sema; Gyökeres, Isak",
          "away": "Dahmen; Valery, Bronn, Talbi, Abdi; Skhiri, Khedira, Mejbri; Achouri, Ben Slimane, Saad",
          "source": "FWC Times / BBC 大名单 · 2026-06-15 · 非官方",
          "alt": {
            "formation": "4-3-3 / 4-4-2",
            "home": "Olsen; Krafth, Lindelöf, Hien, Gudmundsson; Olsson, Bergvall, Edman; Elanga, Isak, Gyökeres",
            "away": "Dahmen; Haddadi, Meriah, Talbi, Laabidi; Skhiri, Laïdouni, Romdhane; Msakni, Jebali, Khazri",
            "source": "FotMob 早期预测（Lamouchi 4-3-3 版本）"
          }
        },
        "updated": "2026-06-16T12:00:00+08:00"
      },
      "home": {
        "name": "Sweden",
        "iso": "se",
        "flag": "",
        "fifa_rank": 25,
        "rating": 73,
        "form": [
          "W",
          "D",
          "D",
          "W",
          "W"
        ],
        "coach": "Graham Potter",
        "stars": [
          {
            "name": "Alexander Isak",
            "pos": "ST",
            "club": "Liverpool",
            "stats": "英超赛季伤病后归队",
            "rating": 8.6,
            "desc": "瑞典进攻绝对核心，体能状态是本场最大变量"
          },
          {
            "name": "Viktor Gyökeres",
            "pos": "ST",
            "club": "Arsenal",
            "stats": "阿森纳新援",
            "rating": 8.4,
            "desc": "可能与 Isak 双前锋或轮换"
          },
          {
            "name": "Anthony Elanga",
            "pos": "RW",
            "club": "Newcastle",
            "stats": "速度型边锋",
            "rating": 8,
            "desc": "Kulusevski 缺阵后右路首选"
          }
        ],
        "injuries": [
          {
            "player": "Dejan Kulusevski",
            "status": "OUT",
            "note": "膝伤整季未出场，未入选 26 人大名单；瑞典右路创造力重大损失",
            "confirmed": true
          },
          {
            "player": "Alexander Isak",
            "status": "DOUBT",
            "note": "利物浦转会后伤病频繁，赛季仅 8 次英超首发；Potter 盼其找回最佳状态",
            "confirmed": false
          }
        ],
        "rumors": [
          "Potter 征召 Gyökeres（阿森纳）+ Isak 双中锋配置，但 Kulusevski 缺阵削弱右路宽度",
          "Potter：「若 Isak 状态在线，他是世界级」——赛前重点恢复其比赛节奏",
          "11 名英超球员入选；Elanga（纽卡）速度或顶替 Kulusevski 右路角色",
          "2018/2022 小组赛均提前出局，大赛稳定性仍是瑞典更衣室老话题"
        ],
        "star": {
          "name": "Alexander Isak",
          "pos": "ST",
          "desc": "瑞典头号射手，面对突尼斯低位防守",
          "rating": 8.6
        }
      },
      "away": {
        "name": "Tunisia",
        "iso": "tn",
        "flag": "",
        "fifa_rank": 62,
        "rating": 64,
        "form": [
          "D",
          "W",
          "L",
          "D",
          "W"
        ],
        "coach": "Sabri Lamouchi",
        "stars": [
          {
            "name": "Wahbi Khazri",
            "pos": "ST",
            "club": "Montpellier",
            "stats": "队史关键先生",
            "rating": 7.5,
            "desc": "经验前锋，定位球与远射"
          },
          {
            "name": "Youssef Msakni",
            "pos": "AM",
            "club": "Al-Arabi",
            "stats": "100+ caps",
            "rating": 7.6,
            "desc": "突尼斯进攻灵魂，10号位"
          },
          {
            "name": "Aïssa Laïdouni",
            "pos": "CM",
            "club": "Union Berlin",
            "stats": "德甲中场硬度",
            "rating": 7.3,
            "desc": "绞杀 Isak 接球，限制瑞典中路"
          }
        ],
        "injuries": [],
        "rumors": [
          "Lamouchi 4-3-3 低位：Skhiri/Hannibal 绞杀 Isak 接球，Achouri 速度反击",
          "2018 世界杯曾 2-1 胜德国，大赛爆冷 DNA；Khazri 定位球与远射是次要威胁",
          "蒙特雷 34°C 干热——北非球员适应性略优于北欧，0-0 进入 70 分钟后对瑞典更不利",
          "FotMob：突尼斯暂无报告伤病，Meriah 防空经验对位瑞典身高优势"
        ],
        "star": {
          "name": "Youssef Msakni",
          "pos": "AM",
          "desc": "突尼斯创造力来源",
          "rating": 7.6
        }
      },
      "h2h": {
        "home_wins": 2,
        "draws": 0,
        "away_wins": 1,
        "recent": [
          {
            "year": 2022,
            "comp": "友谊赛",
            "score": "3-0",
            "winner": "Sweden"
          }
        ],
        "note": "瑞典历史略优"
      },
      "referee": {
        "confirmed": true,
        "pending": false,
        "source": "FIFA · Match officials · 2026-06-14",
        "name": "Yael Falcon",
        "nation": "Argentina",
        "iso": "ar",
        "age": 44,
        "wc_experience": "2025 世俱杯执法 · 阿根廷联赛顶级裁判",
        "avg_yellow": 5.6,
        "avg_red": 0.15,
        "avg_penalty": 0.38,
        "home_win_rate": 53,
        "bias_index": 54,
        "bias_note": "阿根廷籍主裁，出牌率偏高（南美联赛风格）。对犯规与抗议容忍度较低，34°C 高温下战术犯规可能增多；2025 世俱杯已有大赛执法经验。",
        "tendencies": [
          "出牌率南美偏高，高温消耗局黄牌或达 4-5 张",
          "VAR：Juan Lara（智利）",
          "助理裁判：Maximiliano Del Yesso、Facundo Rodriguez（阿根廷）"
        ],
        "officials": {
          "ar1": "Maximiliano Del Yesso (ARG)",
          "ar2": "Facundo Rodriguez (ARG)",
          "fourth": "Juan Calderon (CRC)",
          "var": "Juan Lara (CHI)",
          "avar": "Antonio Garcia (URU)",
          "svar": "Hernan Mastrangelo (ARG)"
        }
      },
      "prediction": {
        "home_win": 49,
        "draw": 26,
        "away_win": 26,
        "score": "1-1",
        "confidence": 72,
        "xg_home": 1.55,
        "xg_away": 1.05,
        "key_factor": "【赛后复盘】赛前主胜49%/最可能1-1；实际5-1。Isak+Gyökeres+Ayari 全面爆发，远超模型预期。方向：主胜命中；比分大幅低估。",
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
        ]
      },
      "upset_alert": {
        "favorite": "瑞典",
        "underdog": "Tunisia",
        "favorite_iso": "SE",
        "index": 34,
        "level": "MEDIUM",
        "level_cn": "中等",
        "cold_result_pct": 40,
        "verdict": "瑞典纸面占优但非顶级强队；突尼斯 4-4-2 低位+蒙特雷 34°C 干热消耗，Msakni/Khazri 反击逼平均有空间。",
        "tactical": "Lamouchi 4-3-3 双闸限制 Isak 接球，Skhiri/Hannibal 绞杀中场；瑞典定位球与身高是主要破局手段，久攻不下易被 Achouri 直塞打身后。",
        "psychology": "突尼斯 2018 曾胜德国，大赛爆冷有 DNA；瑞典若早破门可控场，0-0 进入 70 分钟后高温对北欧球员更不利。",
        "historical": "2022 友谊赛瑞典 3-0 突尼斯；2018 世界杯突尼斯 2-1 胜德国；瑞典大赛稳定性一般，2018/2022 小组赛均提前出局。",
        "factors": [
          {
            "tag": "克制",
            "impact": "中",
            "detail": "突尼斯低位+反击模板对欧洲中等强队有效"
          },
          {
            "tag": "气候",
            "impact": "中",
            "detail": "34°C 干热，突尼斯北非球员适应性略优"
          },
          {
            "tag": "定位球",
            "impact": "中",
            "detail": "瑞典身高占优，但突尼斯 Meriah 防空经验丰富"
          },
          {
            "tag": "心理",
            "impact": "弱",
            "detail": "瑞典 Isak 英超状态正佳，先破门则指数骤降"
          }
        ]
      },
      "coach_analysis": {
        "home": {
          "name": "Graham Potter",
          "age": 51,
          "nation": "英格兰",
          "tenure": "2025年10月—",
          "wc_exp": "2026 带队 · 球员时代 Östersunds 传奇教练",
          "style_tags": [
            "3-4-3",
            "务实反击",
            "Gyökeres/Isak 双锋",
            "结构稳定"
          ],
          "formation_pref": "3-4-3 / 4-4-2 · 附加赛改务实低位",
          "style_summary": "2025 年10 月接替 Tomasson，附加赛用 3-4-3 务实反击（对乌克兰/波兰控球率 <33% 仍晋级）。大赛围绕 Gyökeres/Isak 双锋与 wing-back 宽度，瑞典 Östersunds 时期传奇回归。",
          "subs": {
            "timing": "首换 55–65 分钟；高温蒙特雷可能更早轮换",
            "pattern": "常换 Elanga/Bergvall 边翼；Isak/Gyökeres 互替或双锋共存",
            "avg_first_sub": "58'",
            "note": "附加赛证明换人果断；34°C 下需比 Tomasson 时代更早轮换"
          },
          "when_leading": {
            "label": "务实控节奏 · 不早退",
            "detail": "1 球领先：维持 3-4-3 结构，利用 Gyökeres 反击宽度；2 球+：65' 可换 Isak 保体能，但不会像 Tomasson 时代过度开放。"
          },
          "when_trailing": {
            "label": "堆前锋 · 定位球",
            "detail": "先丢球：55' 换 Gyökeres/Isak 双锋或 Elanga 速度；附加赛证明低位反击有效，对突尼斯可能复制模板。"
          },
          "vs_strong": {
            "label": "对强队：低位 + 反击",
            "detail": "对荷兰/日本会 5-3-2/3-4-3 低位，Gyökeres 反击轴心；对突尼斯（弱于瑞典）预计主导控球。"
          },
          "vs_weak": {
            "label": "对弱队：控制但不冒进",
            "detail": "对突尼斯预计全场压制但不轻敌；Isak 体能存疑时 Gyökeres 可能单箭头开场。"
          },
          "tournament": "附加赛奇迹晋级（Gyökeres 对乌克兰帽子戏法）；大赛经验来自 Chelsea/Brighton 但国家队首秀——瑞典 1994 季军后再次求稳。",
          "traits": [
            "3-4-3 务实",
            "Gyökeres 依赖",
            "Isak 体能变量",
            "高温需早轮换"
          ],
          "match_note": "Potter 3-4-3 务实体系——附加赛低位反击成功，对突尼斯预计压制但 Isak 体能是变量；34°C 下 55' 轮换。"
        },
        "away": {
          "name": "Sabri Lamouchi",
          "age": 54,
          "nation": "法国",
          "tenure": "2026年1月—",
          "wc_exp": "2014 世界杯执教科特迪瓦 · 2026 二度带队大赛",
          "style_tags": [
            "4-3-3",
            "低位防守",
            "Skhiri/Hannibal 中场",
            "反击"
          ],
          "formation_pref": "4-3-3 / 4-2-3-1 · 领先时收缩",
          "style_summary": "2026 年1 月接任突尼斯，大赛经验丰富（2014 科特迪瓦）。强调防守纪律与转换，Skhiri/Hannibal/Mejbri 中场三角，Achouri 速度反击。",
          "subs": {
            "timing": "首换 60–70 分钟；落后 55' 前换进攻手",
            "pattern": "常换 Achouri/Saad 锋线；Skhiri 极少被换下",
            "avg_first_sub": "65'",
            "note": "北非球队换人偏晚；高温下 Lamouchi 可能 55' 换边翼卫保体能"
          },
          "when_leading": {
            "label": "4-5-1 收缩",
            "detail": "若意外领先：退守五后卫，Skhiri 锚定，Achouri/Msakni 留前场；2014 科特迪瓦大赛经验指导保守收尾。"
          },
          "when_trailing": {
            "label": "换 Khazri/Achouri · 定位球",
            "detail": "先丢球：60' 换 Khazri 或加强宽度；0–2 后 70' 才改三前锋。"
          },
          "vs_strong": {
            "label": "对强队：龟缩 + 偷反击",
            "detail": "对瑞典：4-3-3 低位，Skhiri 绞杀，Achouri 速度；34°C 高温下守 0–0 求 1 分是合理目标。"
          },
          "vs_weak": {
            "label": "对弱队：相对开放",
            "detail": "对非洲弱旅会压上；对瑞典不适用。小组赛末轮若已出线可能对日本轮换。"
          },
          "tournament": "2014 世界杯科特迪瓦主帅；突尼斯预选赛 10 场 10 零封（非洲顶级防守）；大赛「Opening game 抢分」心态。",
          "traits": [
            "防守铁桶",
            "大赛经验",
            "Skhiri 依赖",
            "高温适应性略优"
          ],
          "match_note": "Lamouchi 2014 大赛经验 + 预选赛 10 零封——4-3-3 低位求 1 分，Skhiri/Hannibal 绞杀，Achouri 速度反击。"
        }
      },
      "weather": {
        "city": "蒙特雷",
        "country": "墨西哥",
        "venue": "Estadio BBVA",
        "temp": 34,
        "humidity": 45,
        "altitude_m": 540,
        "rain_chance": 5,
        "wind": "西风 2级",
        "condition_cn": "晚场干热，开放式球场",
        "impact_level": "MEDIUM",
        "impact": "Estadio BBVA 540m 海拔+34°C 干热，对北欧球队体能考验大于北非球队",
        "impact_summary": "34°C 干热是本场重要推演变量——60' 后瑞典换人需求高于突尼斯，已纳入 xG 权重",
        "home_adapt": 75,
        "away_adapt": 82,
        "home_note": "瑞典来自北欧温带，34°C 干热非其舒适区；Isak 等球员需 55' 前建立优势，否则 70' 后体能下滑明显",
        "away_note": "突尼斯/北非球员更习惯地中海-撒哈拉干热气候；Lamouchi 低位防守减少跑动，高温适应性评分更高",
        "weather_factors": [
          {
            "label": "34°C 干热",
            "impact": "突尼斯略优",
            "detail": "干热下 70' 后瑞典高位压迫效率下降，Potter 需 55' 起轮换"
          },
          {
            "label": "540m 海拔",
            "impact": "轻微缺氧",
            "detail": "较海平面传球略快、体能消耗略增，瑞典球员需额外适应 2–3 天"
          },
          {
            "label": "湿度 45% 干燥",
            "impact": "有利反击",
            "detail": "球速快、弹跳低，Msakni 直塞与 Isak 身后跑均受益，各取所需"
          },
          {
            "label": "开放式球场",
            "impact": "风扰轻微",
            "detail": "西风 2级影响角球与远射，瑞典定位球优势需考虑风向"
          },
          {
            "label": "开球 10:00 北京",
            "impact": "中性",
            "detail": "当地约 20:00 晚场，气温较日间峰值回落，但仍达 30°C+"
          }
        ],
        "historical_note": "Estadio BBVA（Gigantes de Acero）容量 53,500 · F 组墨西哥主场；蒙特雷 6 月干热少雨，世界杯经典高温场次之一"
      },
      "mystic": {
        "date_bazi": {
          "year": "丙午年",
          "year_element": "火",
          "year_animal": "马",
          "month": "庚午月",
          "month_element": "金+火",
          "day": "乙酉日",
          "day_element": "木+金",
          "hour_home": "巳时（09:00-11:00）",
          "hour_home_element": "火",
          "day_dominant": "火",
          "day_summary": "丙午年庚午月乙酉日巳时——巳火当令，火旺土燥。《周易·益卦》曰：「利有攸往，利涉大川。」北欧火德与北非金火交锋，先进球者占势；蒙特雷 34°C 干热叠加巳火，体能消耗决定下半场走势。"
        },
        "wuxing": {
          "home": {
            "team": "Sweden",
            "colors": "黄+蓝",
            "elements": "土（黄）、水（蓝）",
            "wuxing_short": "火土相战，进攻需提速",
            "verdict": "中性",
            "verdict_color": "#C8A96E",
            "compat": 58,
            "reason": "瑞典黄蓝属土水，巳时火旺土燥——Isak 如风行地上需快攻破局；定位球身高优势（Gyökeres/Isak）是土德变现手段。高温对北欧球员消耗大于突尼斯北非球员。",
            "advantage": "Isak/Gyökeres 锋线 xG 1.55 占优；定位球与角球是主要破局手段，Potter 3-4-3 宽度压制"
          },
          "away": {
            "team": "Tunisia",
            "colors": "白+红",
            "elements": "金（白）、火（红）",
            "wuxing_short": "金火相克，反击可借势",
            "verdict": "中性",
            "verdict_color": "#C8A96E",
            "compat": 52,
            "reason": "突尼斯白红属金火，巳时火旺可借势——Achouri 如暗雷，Lamouchi 4-3-3 低位如山地待时。2018 胜德国之爆冷 DNA 仍在；Skhiri 绞杀 Isak 接球是防守关键。",
            "advantage": "34°C 干热适应性略优；Msakni/Khazri 反击 + 定位球远射，0-0 进入 70 分钟后对瑞典更不利"
          },
          "summary": "五行裁定：巳时火旺，攻守转换快，先破门者得利；高温放大体能差"
        },
        "hexagram": {
          "name": "益卦",
          "symbol": "☴",
          "number": 42,
          "upper": "巽风",
          "lower": "震雷",
          "quote": "《周易·益卦》：「利有攸往，利涉大川。」",
          "general": "风雷益，利于进取但需防反。益卦象征先进攻、先增益的一方占势——但风雷无常，落后方一记反击可逆转局势。",
          "advantage_team": "Sweden",
          "disadvantage_team": "Tunisia",
          "hexagram_analysis": "益卦主增益——Isak 如风行地上，Kulusevski 右路宽度；突尼斯若守如震雷不动，Msakni 直塞 Khazri 可「雷动一击」。蒙特雷高温 + 巳火当令，0-0 进入 70 分钟后瑞典体能下滑，突尼斯反击概率升。",
          "match_nature": "主队小胜或平局",
          "match_nature_prob": 48,
          "yellow_card_risk": "中",
          "yellow_card_reason": "益卦主快攻，预计 4 张黄牌——高温下战术犯规阻截 Isak、Laïdouni 绞杀中场；瑞典定位球争抢中 Meriah 犯规概率高。",
          "scenarios": [
            {
              "icon": "⚽",
              "label": "比赛性质",
              "text": "瑞典小胜 48%，平局 30%，突尼斯爆冷 22%（xG 1.55-1.05，泊松 2-1 / 1-1）"
            },
            {
              "icon": "⏱",
              "label": "进球高峰段",
              "text": "第 25-40 分钟（双方体能尚可）及第 70-85 分钟（高温消耗后）"
            },
            {
              "icon": "🟨",
              "label": "黄牌风险",
              "text": "中等——约 4 张，高温战术犯规 + 定位球争抢"
            },
            {
              "icon": "🔄",
              "label": "0-0 平局可能",
              "text": "中（30%）——突尼斯低位 + 34°C 消耗，瑞典久攻不下概率不低"
            },
            {
              "icon": "⏰",
              "label": "加时赛概率",
              "text": "低（5%）——小组赛次席之争，90 分钟内分胜负概率约 70%"
            }
          ],
          "early_goal": {
            "scenario": "若前 25 分钟瑞典率先进球（Isak 支点 / 定位球 Gyökeres）",
            "prediction": "益卦「利有攸往」——突尼斯被迫压出，Isak 反击空间增大；瑞典控场下追加进球概率 40%，Potter 可轮换 Elanga 提速。",
            "favors": "Sweden",
            "favors_prob": 65
          },
          "no_early_goal": {
            "scenario": "若前 30 分钟 0-0（Lamouchi 低位奏效）",
            "prediction": "高温消耗战——下半场 65 分钟后进球概率升；Msakni 直塞 Khazri 反击 vs 瑞典定位球轰炸，平局概率 40%，瑞典小胜 35%。",
            "favors": "Draw",
            "favors_prob": 40
          },
          "away_goal": {
            "scenario": "若突尼斯领先（Msakni 直塞 / Khazri 远射）",
            "prediction": "瑞典围攻——Isak 头球 + Kulusevski 传中，定位球扳平概率 55%；若 0-0 进入 70 分钟后突尼斯领先，瑞典高温体能崩盘风险升。",
            "favors": "Sweden",
            "favors_prob": 50
          },
          "halftime": {
            "scenario": "若半场 0-0 进入中场",
            "prediction": "Potter 变阵（可能 Gyökeres 双前锋），瑞典 60 分钟后略优；突尼斯 Meriah 防空 + Skhiri 绞杀 Isak 仍是关键。",
            "favors": "Sweden",
            "favors_prob": 52
          },
          "extra_time": {
            "scenario": "若 90 分钟平局进加时（概率 5%）",
            "prediction": "加时赛高温对双方均残酷，瑞典锋线深度略优；点球大战概率 35%，Isak 点球心理压力大。",
            "favors": "Sweden",
            "favors_prob": 55
          }
        },
        "home_score": 60,
        "away_score": 46,
        "mystic_verdict": "☴ 益卦风雷——Isak 如风，Msakni 如雷；巳时火旺 + 蒙特雷 34°C，先破门者得利。瑞典纸面占优但非顶级，突尼斯 2018 爆冷 DNA 仍存。",
        "disclaimer": "以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据"
      },
      "actualResult": {
        "home_score": 5,
        "away_score": 1,
        "status": "FT",
        "label": "全场结束",
        "scorers": "Ayari 7', 90+6' (Bergvall); Isak 30' (Gyökeres); Rekik 43' (Mejbri); Gyökeres 59' (Isak); Svanberg 84' (Isak)",
        "highlights": "Isak 世界杯首球+2助攻 · Svanberg 替补12秒进球 · xG 约3.2-1.0 · Potter 3-4-3 大胜 · 瑞典领跑F组"
      }
    }
  ],
  "groupSnapshots": [
    {
      "group": "A",
      "label": "A组 · 第1轮后",
      "table": [
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
      ]
    },
    {
      "group": "B",
      "label": "B组 · 第1轮（卡塔尔-瑞士已赛）",
      "table": [
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
      ]
    },
    {
      "group": "D",
      "label": "D组 · 第1轮（2场已赛）",
      "table": [
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
      ]
    },
    {
      "group": "C",
      "label": "C组 · 第1轮（4场已赛）",
      "table": [
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
      ]
    },
    {
      "group": "E",
      "label": "E组 · 第1轮（4场已赛）",
      "table": [
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
      ]
    },
    {
      "group": "F",
      "label": "F组 · 第1轮（4场已赛）",
      "table": [
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
      ]
    }
  ]
};
