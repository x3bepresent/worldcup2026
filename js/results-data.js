// 过往赛果 — 手动/自动同步
// score_dist 已废弃 — 页面按 xG 泊松实时计算
// Last updated: 2026-06-14T22:30:00+08:00
const RESULTS_DATA = {
  "lastUpdated": "2026-06-14T22:30:00+08:00",
  "syncSource": "manual + RotoWire 赛果",
  "breakingNews": [
    {
      "tag": "OFFICIAL",
      "text": "🏁 卡塔尔 1-1 瑞士 · Embolo 点球 · Khoukhi 90+4' 绝平 · B组四队各1分",
      "time": "6月14日"
    },
    {
      "tag": "UPDATE",
      "text": "瑞士实际 4-3-3 非 3-4-3 · xG 3.24-0.76 · Vargas 8.1 全场最佳",
      "time": "赛后"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 6月13日（北京时间）· 加拿大 1-1 波黑 · 美国 4-1 巴拉圭 · 全部结束",
      "time": "赛果汇总"
    },
    {
      "tag": "OFFICIAL",
      "text": "B组：加拿大、波黑各1分 · D组：美国3分领跑，巴拉圭0分 -3净胜球",
      "time": "小组形势"
    },
    {
      "tag": "LINEUP",
      "text": "加拿大战：Lukic 21' 首开 · Larin 78' 扳平 · Kolašinac 助攻+门线解围",
      "time": "6月13日"
    },
    {
      "tag": "LINEUP",
      "text": "美国战：Balogun 双响 · Enciso 替补助攻 · Reyna 90+8' 锦上添花",
      "time": "6月13日"
    },
    {
      "tag": "OFFICIAL",
      "text": "A组回顾：墨西哥、韩国各3分 · 详见下方归档",
      "time": "小组动态"
    },
    {
      "tag": "OFFICIAL",
      "text": "🏁 A组第1轮收官 · 墨西哥 2-0 南非 · 韩国 2-1 捷克 · 6月12日（北京时间）全部结束",
      "time": "赛果汇总"
    },
    {
      "tag": "OFFICIAL",
      "text": "A组积分榜：墨西哥、韩国 3分并列榜首；捷克、南非 0分",
      "time": "小组形势"
    },
    {
      "tag": "OFFICIAL",
      "text": "模型复盘：墨西哥 2-0 命中最高概率比分；韩国胜方向判断正确（48%）",
      "time": "赛后推演"
    },
    {
      "tag": "LINEUP",
      "text": "韩国战：孙兴慜 56'、李康仁 71' · Schick 84' 扳回一球",
      "time": "6月12日"
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
        "score": "2-1",
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
        "score": "1-1",
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
        "score": "4-1",
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
      "label": "D组 · 第1轮后",
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
          "pts": 0,
          "p": 0,
          "w": 0,
          "d": 0,
          "l": 0,
          "gf": 0,
          "ga": 0
        },
        {
          "team": "Türkiye",
          "pts": 0,
          "p": 0,
          "w": 0,
          "d": 0,
          "l": 0,
          "gf": 0,
          "ga": 0
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
    }
  ]
};
