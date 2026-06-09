const fs = require('fs');

// 时间换算：ET (UTC-4) -> 北京时间 (UTC+8) = +12h
function etToBeijing(etTime, dateStr) {
  const [h, m] = etTime.split(':').map(Number);
  const totalMin = h * 60 + (m || 0) + 12 * 60;
  const dayAdd = Math.floor(totalMin / (24 * 60));
  const bjH = Math.floor((totalMin % (24 * 60)) / 60);
  const bjM = totalMin % 60;
  const base = new Date(dateStr);
  base.setDate(base.getDate() + dayAdd);
  const label = `${base.getMonth() + 1}月${base.getDate()}日`;
  const t = `${String(bjH).padStart(2,'0')}:${String(bjM).padStart(2,'0')}`;
  return { time: t, date_label: label, full: `${label} ${t}` };
}

const bj1 = etToBeijing('15:00', '2026-06-11'); // Mexico vs South Africa
const bj2 = etToBeijing('22:00', '2026-06-11'); // South Korea vs Czechia
const bjN = etToBeijing('15:00', '2026-06-12'); // Canada vs Bosnia (next match preview)

const data = {
  lastUpdated: '2026-06-11T06:00:00Z',
  breakingNews: [
    { tag: 'OFFICIAL', text: '开幕战 · Mexico vs South Africa 即将揭幕！Estadio Azteca 将迎来2026世界杯历史性时刻', time: '2h ago' },
    { tag: 'INJURY',   text: '墨西哥前锋 Hirving Lozano 赛前接受最终体测，主帅确认将首发出场', time: '3h ago' },
    { tag: 'RUMOR',    text: '南非队因海拔适应问题训练缩短至45分钟，多名球员出现轻微高原反应', time: '4h ago' },
    { tag: 'OFFICIAL', text: '韩国队长孙兴慜：「这是我最后一届世界杯，我要留下最好的记忆」', time: '5h ago' },
    { tag: 'LINEUP',   text: '捷克媒体：Patrick Schick 首发，4-2-3-1阵型应对韩国速度', time: '6h ago' },
    { tag: 'REFEREE',  text: '开幕战主裁判：Szymon Marciniak（波兰），2022年世界杯决赛执法者', time: '8h ago' },
    { tag: 'RUMOR',    text: '墨西哥更衣室情绪极度高涨，球员表示"主场之利是我们最大武器"', time: '10h ago' }
  ],

  todayMatches: [
    // ══════════ MATCH 1: Mexico vs South Africa ══════════
    {
      id: 'm01',
      group: 'A', matchday: 1,
      date: '2026-06-11',
      time: '15:00', time_local: '15:00 ET / 13:00 本地',
      timezone: 'EDT (UTC-4)',
      time_beijing: bj1.time, date_beijing: bj1.date_label,
      time_beijing_full: '北京时间 ' + bj1.full,
      venue: 'Estadio Azteca', city: 'Mexico City, Mexico',
      note: '2026世界杯开幕战 · 海拔2240m',

      home: {
        name: 'Mexico', iso: 'mx', flag: '🇲🇽',
        fifa_rank: 12, rating: 80,
        form: ['W','W','D','W','L'],
        coach: 'Javier Aguirre',
        star: { name: 'Santiago Giménez', pos: 'ST', club: 'AC Milan', desc: '赛季贡献23球，状态巅峰，主场氛围将激发其斗志' },
        injuries: [
          { player: 'Hirving Lozano', status: 'DOUBT', note: '右踝轻微扭伤，已通过体测，将首发', confirmed: false }
        ],
        rumors: ['更衣室氛围极度高涨，主帅Aguirre赛前鼓舞士气演讲引发热烈反响', '墨西哥媒体：本届球队团结度超越历届，无派系问题']
      },
      away: {
        name: 'South Africa', iso: 'za', flag: '🇿🇦',
        fifa_rank: 58, rating: 65,
        form: ['W','D','L','W','W'],
        coach: 'Hugo Broos',
        star: { name: 'Percy Tau', pos: 'LW', club: 'Al Ahly', desc: 'AFCON最佳球员，技术细腻，是南非唯一能制造威胁的核心' },
        injuries: [
          { player: '多名球员', status: 'DOUBT', note: '高原反应训练缩短，体能储备受影响', confirmed: false }
        ],
        rumors: ['南非体能教练警告：2240m海拔比赛将是巨大挑战，计划放慢节奏保体力', '前锋Lyle Foster赛前训练状态出色，预计首发']
      },

      h2h: {
        home_wins: 3, draws: 1, away_wins: 0,
        recent: [
          { year: 2010, comp: 'WC友谊', score: '2-1', winner: 'Mexico', venue: 'Neutral' },
          { year: 2014, comp: '友谊赛', score: '1-0', winner: 'Mexico', venue: 'Mexico' },
          { year: 2018, comp: '友谊赛', score: '1-1', winner: 'Draw',   venue: 'Neutral' },
          { year: 2022, comp: '友谊赛', score: '2-0', winner: 'Mexico', venue: 'Mexico' }
        ],
        all_time: { played: 4, mexico: 3, draws: 1, south_africa: 0, mexico_goals: 6, sa_goals: 2 },
        note: '历史4次交锋，墨西哥未负，主场优势明显'
      },

      referee: {
        name: 'Szymon Marciniak', nation: '波兰', age: 43,
        wc_final: '2022年世界杯决赛主裁',
        avg_yellow: 4.2, avg_red: 0.18,
        home_win_rate: 52, bias_note: '执法风格：严格但公正，对身体对抗容忍度适中，不轻易出示红牌',
        tendencies: ['大场面经验极丰富', '对假摔零容忍', '开场前20分钟相对宽松']
      },

      prediction: {
        home_win: 68, draw: 20, away_win: 12,
        score: '2-0', confidence: 82,
        xg_home: 2.1, xg_away: 0.7,
        key_factor: '主场+海拔——南非队将在前30分钟体能严重消耗，墨西哥下半场优势显著扩大',
        score_dist: [
          { score:'2-0', prob:28 }, { score:'1-0', prob:20 }, { score:'2-1', prob:14 },
          { score:'3-0', prob:12 }, { score:'3-1', prob:8  }, { score:'1-1', prob:8  },
          { score:'其他',prob:10 }
        ]
      },

      weather: {
        city: '墨西哥城', country: '墨西哥',
        temp: 18, humidity: 68, altitude: 2240,
        rain_chance: 35, wind: '东北风 3级',
        condition: '多云，午后有雷阵雨可能',
        impact_level: 'HIGH',
        impact: '海拔2240m是本届世界杯最高赛场，氧气含量约75%正常水平，对未适应高原的球队是巨大挑战',
        home_adapt: 95, away_adapt: 38,
        home_note: '墨西哥全队在墨西哥城训练备战，海拔完全适应，后半场体能优势将成为决胜因素',
        away_note: '南非球员来自海平面地区，首次参加世界杯，高原适应仅5天，前30分钟后体能将明显下降',
        weather_factors: [
          { label:'高原反应', impact:'南非不利', detail:'2240m海拔将使南非球员乳酸积累速度比正常快35%' },
          { label:'午后降雨可能', impact:'中性', detail:'场地积水对两队影响相当，可能放慢比赛节奏' },
          { label:'18°C温度', impact:'有利比赛', detail:'气温凉爽，有利于高强度对抗，两队体能消耗较慢' },
          { label:'稀薄空气', impact:'长传优势', detail:'球在稀薄空气中飞行更快更远，有利于墨西哥的直塞战术' }
        ],
        historical_note: 'Estadio Azteca是海拔最高的世界杯决赛场（1970、1986），历史上主队胜率高达74%'
      },

      mystic: {
        date_bazi: {
          year: '丙午年', year_element: '火', year_animal: '马',
          month: '庚午月', month_element: '金+火',
          day: '壬午日', day_element: '水+火',
          hour_home: '未时（13:00-15:00）', hour_home_element: '土',
          day_dominant: '火',
          day_summary: '丙午年庚午月壬午日——三「午」叠火，火气冲天。《道德经》曰：「归根曰静，是谓复命。」万物归根之象，于此火旺之日，顺势者得天命，逆势者必耗于无形。开幕战逢此局，必是光耀四方、激情四射之战。'
        },
        wuxing: {
          home: {
            team: 'Mexico', colors: '绿+红', elements: '木（绿）、火（红）',
            wuxing_short: '木生火，顺应火旺之局',
            verdict: '有利', verdict_color: '#5BBF8A', compat: 92,
            reason: '墨西哥绿色属木，红色属火——木生火之配，今日三午重火，木火之队如鱼得水，气场与天地同频。《周易》曰：「与时偕行」，此乃顺时之局。',
            advantage: '开场气势如虹，进攻端精力充沛，主场氛围加持，前半场压制力极强'
          },
          away: {
            team: 'South Africa', colors: '黄+绿+黑', elements: '土（黄）、木（绿）、水（黑）',
            wuxing_short: '土克水，木泄火，内部失衡',
            verdict: '不利', verdict_color: '#D95F6A', compat: 32,
            reason: '南非队服黑色属水，今日大火当令，水逢火克，气场被压制；黄绿虽有土木，但黑色水德被烈火蒸干，三色内耗，自身能量不稳。',
            disadvantage: '气场涣散，体能消耗快（与高原叠加），心理层面难以形成凝聚力'
          },
          summary: '五行裁定：绿红之师顺天应时，黑黄之军内外交困'
        },
        hexagram: {
          name: '乾卦', symbol: '☰', number: 1,
          upper: '乾天', lower: '乾天',
          quote: '《周易·乾卦》：「天行健，君子以自强不息。」',
          general: '纯阳至刚，天之象也。乾卦是六十四卦之首，象征强者主宰、永不停息的进取精神。此局主强者愈强，没有悬念。',
          advantage_team: 'Mexico',
          disadvantage_team: 'South Africa',
          hexagram_analysis: '乾卦纯阳之象，利于主动、强健、阳气旺盛的一方——墨西哥主场开幕，天时地利人和俱占。南非以阴克阳，势必难以抗衡。',
          match_nature: '主场压制局',
          match_nature_prob: 76,
          yellow_card_risk: '中',
          yellow_card_reason: '乾卦主「刚健」，双方均有强烈意志，但强者不需动粗，弱者落后后可能出现铲球。预计全场4-6张黄牌，红牌概率约15%。',
          scenarios: [
            { icon: '⚽', label: '比赛性质', text: '墨西哥主导局，大比分获胜概率76%，平局12%，南非胜仅8%' },
            { icon: '⏱', label: '进球高峰段', text: '第25-40分钟（开幕激情期）及第65-80分钟（南非体能下滑后）' },
            { icon: '🟨', label: '黄牌风险', text: '中等——约4-6张，乾卦主刚，南非落后后铲球增多' },
            { icon: '🔄', label: '0-0平局可能', text: '低（12%）——乾卦不允许强者空手而归，但南非防守可能拖至下半场' },
            { icon: '⏰', label: '加时赛概率', text: '极低（5%）——乾卦主速决，90分钟内分出胜负概率95%' }
          ],
          early_goal: {
            scenario: '若前30分钟墨西哥率先进球',
            prediction: '「天行健」一旦启动，势不可挡——南非在高原+落后双重压力下体能崩溃加速，墨西哥将乘势追加，大比分概率升至70%。',
            favors: 'Mexico', favors_prob: 70
          },
          no_early_goal: {
            scenario: '若前30分钟无进球',
            prediction: '乾卦主「终必得正」——墨西哥耐心等待南非体能下滑，下半场55分钟后将迎来进球高峰，南非消耗殆尽，终难抵挡。',
            favors: 'Mexico（下半场爆发）', favors_prob: 65
          },
          away_goal: {
            scenario: '若南非意外先进球',
            prediction: '乾卦遭逆——但纯阳不受压制，墨西哥将在主场球迷震天声浪中迅速反扑。逆转概率极高（75%），这反而可能激发更激烈的进攻，比赛或走向大比分逆转。',
            favors: 'Mexico（激活）', favors_prob: 62
          },
          halftime: {
            scenario: '若上半场0-0进入中场',
            prediction: '「天命未尽」——下半场南非体能断崖式下滑（高原效应在60分钟后爆发），墨西哥将把握机会，下半场进球概率极高（82%）。',
            favors: 'Mexico', favors_prob: 72
          },
          extra_time: {
            scenario: '若90分钟平局进加时（极低概率5%）',
            prediction: '乾卦极不支持平局拖延，若真出现此局面，南非体能已完全耗尽，加时赛墨西哥10分钟内进球概率78%，点球大战概率仅22%。',
            favors: 'Mexico（碾压）', favors_prob: 78
          }
        },
        home_score: 88, away_score: 28,
        mystic_verdict: '☰ 乾卦纯阳，天行健之象——墨西哥木火顺局，主场三午火旺，天时地利人和尽在其手。南非水德逢火，黑衣水性在烈日下蒸干。此乃开幕战最佳剧本：强者归位，弱者虽勇，终难逆天。',
        disclaimer: '以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据'
      }
    },

    // ══════════ MATCH 2: South Korea vs Czechia ══════════
    {
      id: 'm02',
      group: 'A', matchday: 1,
      date: '2026-06-11',
      time: '22:00', time_local: '22:00 ET / 20:00 本地',
      timezone: 'EDT (UTC-4)',
      time_beijing: bj2.time, date_beijing: bj2.date_label,
      time_beijing_full: '北京时间 ' + bj2.full,
      venue: 'Estadio Akron', city: 'Guadalajara, Mexico',
      note: 'A组第2场 · 海拔1566m · 夜场',

      home: {
        name: 'South Korea', iso: 'kr', flag: '🇰🇷',
        fifa_rank: 23, rating: 76,
        form: ['W','W','D','W','W'],
        coach: 'Hong Myung-bo',
        star: { name: '孙兴慜 Son Heung-min', pos: 'LW', club: 'Tottenham', desc: '现役亚洲第一人，速度+技术+大心脏，世界杯可能是他的收山之作，状态比上届更强' },
        injuries: [
          { player: '黄喜灿 Hwang Hee-chan', status: 'FIT', note: '已完全恢复，首发无虞', confirmed: true }
        ],
        rumors: ['韩国主帅透露将采用5-3-2压迫阵型', '孙兴慜公开表示"这是我的最后一届世界杯，要用冠军来结束"']
      },
      away: {
        name: 'Czechia', iso: 'cz', flag: '🇨🇿',
        fifa_rank: 40, rating: 72,
        form: ['W','D','W','L','W'],
        coach: 'Ivan Hasek',
        star: { name: 'Patrick Schick', pos: 'ST', club: 'Bayer Leverkusen', desc: '身体强壮的中锋，制空能力一流，是捷克队最重要的进攻支点' },
        injuries: [
          { player: 'Tomas Soucek', status: 'FIT', note: '主力中场完全健康', confirmed: true }
        ],
        rumors: ['捷克教练组针对孙兴慜做了大量功课，将安排专人贴身盯防', '消息人士：捷克将采用低位防守反击战术，不打对攻']
      },

      h2h: {
        home_wins: 2, draws: 1, away_wins: 2,
        recent: [
          { year: 2006, comp: 'WC小组赛', score: '2-0', winner: 'South Korea', venue: 'Neutral' },
          { year: 2014, comp: '友谊赛', score: '2-0', winner: 'Czechia', venue: 'Neutral' },
          { year: 2018, comp: '友谊赛', score: '2-1', winner: 'South Korea', venue: 'Neutral' },
          { year: 2022, comp: '友谊赛', score: '2-2', winner: 'Draw', venue: 'Neutral' },
          { year: 2024, comp: '友谊赛', score: '0-1', winner: 'Czechia', venue: 'Neutral' }
        ],
        all_time: { played: 5, south_korea: 2, draws: 1, czechia: 2, korea_goals: 7, czech_goals: 6 },
        note: '历史势均力敌，双方互有胜负，近期捷克略有优势'
      },

      referee: {
        name: 'Wilton Sampaio', nation: '巴西', age: 41,
        wc_final: '2022年卡塔尔世界杯参与执法',
        avg_yellow: 4.8, avg_red: 0.22,
        home_win_rate: 48, bias_note: '执法风格偏向宽松，允许身体对抗，但对拖延时间严格；偏向强队的判罚比例略高',
        tendencies: ['红牌极少出示', '任意球判罚宽松', '补时慷慨（平均加4-6分钟）']
      },

      prediction: {
        home_win: 48, draw: 28, away_win: 24,
        score: '2-1', confidence: 62,
        xg_home: 1.8, xg_away: 1.4,
        key_factor: '孙兴慜个人能力是决定因素，但捷克防守体系严密，比赛悬念极大',
        score_dist: [
          { score:'2-1', prob:22 }, { score:'1-0', prob:16 }, { score:'1-1', prob:18 },
          { score:'2-0', prob:12 }, { score:'0-1', prob:12 }, { score:'2-2', prob:8  },
          { score:'其他',prob:12 }
        ]
      },

      weather: {
        city: '瓜达拉哈拉', country: '墨西哥',
        temp: 22, humidity: 72, altitude: 1566,
        rain_chance: 28, wind: '南风 2级',
        condition: '夜场多云，气候温热湿润',
        impact_level: 'MEDIUM',
        impact: '瓜达拉哈拉海拔1566m，夜场气温舒适，湿度略高，对体能消耗影响中等',
        home_adapt: 55, away_adapt: 52,
        home_note: '韩国在欧洲联赛踢球的球员多（孙兴慜等），习惯平原作战，需适应1566m海拔',
        away_note: '捷克同样来自平原，双方在海拔适应上基本持平',
        weather_factors: [
          { label: '1566m海拔', impact: '双方均受影响', detail: '比墨西哥城低700m，影响相对较小，双方条件基本平等' },
          { label: '夜场22°C', impact: '有利高强度对抗', detail: '夜晚温度适宜，有利于速度型球员（孙兴慜）充分发挥' },
          { label: '72%湿度', impact: '轻微消耗', detail: '湿度偏高，对体能消耗略有影响，下半场后程体能储备重要' },
          { label: '小雨概率28%', impact: '轻微影响', detail: '若降雨，场地湿滑利于突破型球员，孙兴慜速度优势更明显' }
        ],
        historical_note: 'Estadio Akron是墨西哥顶级球场，2026世界杯A组主场，夜场比赛气氛极佳'
      },

      mystic: {
        date_bazi: {
          year: '丙午年', year_element: '火', year_animal: '马',
          month: '庚午月', month_element: '金+火',
          day: '壬午日', day_element: '水+火',
          hour_home: '亥时（21:00-23:00）', hour_home_element: '水',
          day_dominant: '火',
          day_summary: '壬午日亥时——日柱壬水克午火，亥时水气更重，夜场水气渐盛。《道德经》：「上善若水，水善利万物而不争。」水德之时利于智取，不宜强攻，以变应变者得胜。'
        },
        wuxing: {
          home: {
            team: 'South Korea', colors: '红+白', elements: '火（红）、金（白）',
            wuxing_short: '火金并存，金克火受阻',
            verdict: '有利', verdict_color: '#5BBF8A', compat: 68,
            reason: '韩国红色属火，今日三午火旺，红色顺势；白色属金，金克木但受制于火旺之局——总体上火性顺势，韩国气场略占优。',
            advantage: '进攻端活力充沛，特别是速度反击时能量充足，开场前30分钟冲劲极旺'
          },
          away: {
            team: 'Czechia', colors: '红+白+蓝', elements: '火（红）、金（白）、水（蓝）',
            wuxing_short: '水火交战，内部消耗',
            verdict: '不利', verdict_color: '#D95F6A', compat: 45,
            reason: '捷克蓝色属水，今日火旺之局水逢火克；但夜场亥时水气渐升，对捷克略有补益。红白火金与蓝水相战，三色气场混乱，但较南非轻微，尚可一战。',
            disadvantage: '整体气场不稳，进攻效率受阻，但防守端因水德补益夜场或较稳固'
          },
          summary: '五行裁定：韩国火红顺局，捷克水火相战；但差距远不如开幕战悬殊，此乃势均力敌之局'
        },
        hexagram: {
          name: '坎卦', symbol: '☵', number: 29,
          upper: '坎水', lower: '坎水',
          quote: '《周易·坎卦》：「习坎，有孚，维心亨，行有尚。」',
          general: '重水相叠，险中求胜——坎卦象征险境与智慧并存。夜场水气应坎，比赛节奏变化多端，双方均有机会，但犯错者将付出沉重代价。',
          advantage_team: 'South Korea',
          disadvantage_team: 'Czechia',
          hexagram_analysis: '坎卦利于心态稳定、有备而来的一方——韩国有孙兴慜这一「定海神针」，乾坤大旗不倒；捷克依赖整体，坎卦险中若整体一乱，难以复原。',
          match_nature: '胶着悬念局',
          match_nature_prob: 55,
          yellow_card_risk: '中',
          yellow_card_reason: '坎卦主「险」不主「躁」，双方将谨慎作战，黄牌来自战术需要而非情绪失控，预计全场3-5张，红牌概率10%。',
          scenarios: [
            { icon: '⚽', label: '比赛性质', text: '胶着悬念局，进球数1-3球可能性最大，平局概率28%为各场最高' },
            { icon: '⏱', label: '进球高峰段', text: '下半场55-70分钟（双方战术调整后出现空间），及第85+分钟（体能耗尽后的防守漏洞）' },
            { icon: '🟨', label: '黄牌风险', text: '中等——约3-5张，坎卦主谨慎，主要来自战术犯规而非情绪' },
            { icon: '🔄', label: '0-0平局可能', text: '较高（约20%）——双方防守体系均完善，捷克低位防守可能拖入平局' },
            { icon: '⏰', label: '加时赛概率', text: '有一定可能（18%）——坎卦主「险而不决」，若90分钟平局进加时，孙兴慜体力决定结果' }
          ],
          early_goal: {
            scenario: '若前30分钟韩国率先进球',
            prediction: '坎险已过，韩国心理压力解除——孙兴慜将在中前场获得更大发挥空间，捷克被迫打开防线，比赛转为韩国节奏，2球优势概率55%。',
            favors: 'South Korea', favors_prob: 58
          },
          no_early_goal: {
            scenario: '若前30分钟无进球',
            prediction: '「维心亨」——坎卦耐心者得胜，双方将进入消耗战。下半场55分钟后才会出现实质性机会，孙兴慜的一次闪现可能就是唯一进球。',
            favors: 'South Korea（孙兴慜个人能力）', favors_prob: 50
          },
          away_goal: {
            scenario: '若捷克先进球',
            prediction: '坎卦逆境考验——韩国若落后会更加积极，孙兴慜将全面激活，捷克低位防反战术成立。但韩国扳平概率约60%，反超概率45%，总体仍是韩国略优。',
            favors: 'Czechia（防反战术成立）', favors_prob: 52
          },
          halftime: {
            scenario: '若上半场0-0进入中场',
            prediction: '「习坎」——坎险需习，两队下半场战术调整是关键。捷克若坚守，韩国需要创造力；孙兴慜下半场体能维持时，韩国进球概率62%，否则平局可能性大。',
            favors: 'South Korea（依孙兴慜状态）', favors_prob: 55
          },
          extra_time: {
            scenario: '若90分钟平局进入加时',
            prediction: '坎卦加时——险中险，体能与心理双重考验。孙兴慜若状态保持，一次个人突破即可定乾坤；捷克若能撑过加时前15分钟，点球大战反而成为他们的机会。',
            favors: 'South Korea（前15分钟）/ Czechia（点球）', favors_prob: 52
          }
        },
        home_score: 65, away_score: 48,
        mystic_verdict: '☵ 坎卦水险，夜场亥水应时——韩国火红略顺，孙兴慜是这场的「坎中之孚」，心有定数则胜；捷克水火相战，但坎卦给予弱势方以翻盘机会，切勿轻视。此乃本届世界杯最具悬念的开幕日夜场。',
        disclaimer: '以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据'
      }
    }
  ],

  // ══════════ NEXT MATCH PREVIEW: Canada vs Bosnia ══════════
  nextMatch: {
    group: 'B', matchday: 1,
    date: '2026-06-12',
    time: '15:00', time_local: '15:00 ET / 15:00 EDT',
    timezone: 'EDT (UTC-4)',
    time_beijing: bjN.time, date_beijing: bjN.date_label,
    time_beijing_full: '北京时间 ' + bjN.full,
    venue: 'BMO Field', city: 'Toronto, Canada',
    home: { name: 'Canada', iso: 'ca', fifaRank: 17, rating: 78 },
    away: { name: 'Bosnia and Herzegovina', iso: 'ba', fifaRank: 55, rating: 69 },
    teaser: '东道主加拿大迎战波黑，BMO Field主场之利加持。Alphonso Davies的速度对阵Edin Džeko的丰富经验——这将是2026年北美世界杯的第一场东道主主场比赛。预计进球丰富，精彩程度不输开幕战。',
    home_win: 62, draw: 22, away_win: 16,
    predicted_score: '2-1',
    key_player_home: 'Alphonso Davies',
    key_player_away: 'Edin Džeko'
  }
};

fs.writeFileSync(
  'D:/worldcup2026/js/matches-data.js',
  'const MATCH_DATA = ' + JSON.stringify(data, null, 2) + ';',
  'utf8'
);
console.log('✅ Written:', fs.statSync('D:/worldcup2026/js/matches-data.js').size, 'bytes');
console.log('m01 Beijing:', data.todayMatches[0].time_beijing_full);
console.log('m02 Beijing:', data.todayMatches[1].time_beijing_full);
console.log('next Beijing:', data.nextMatch.time_beijing_full);
