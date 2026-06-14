/**
 * Day 4 full mystic / 竞技推演 blocks for m09–m12
 */
const DISCLAIMER =
  '以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据';

const BAZI_BASE = {
  year: '丙午年',
  year_element: '火',
  year_animal: '马',
  month: '庚午月',
  month_element: '金+火',
  day: '乙酉日',
  day_element: '木+金',
};

const MYSTIC = {
  m09: {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: '丑时（01:00-03:00）',
      hour_home_element: '土',
      day_dominant: '金',
      day_summary:
        '丙午年庚午月乙酉日丑时——年火月金日木，丑时土旺，金气当令而土厚。《周易·夬卦》曰：「扬于王庭，孚号有厉。」木金相战之日，强者宜决断速胜，忌轻敌骄躁；弱队若守如厚土，可延一时之安，终难挡金锋全程。',
    },
    wuxing: {
      home: {
        team: 'Germany',
        colors: '白+黑',
        elements: '金（白）、水（黑）',
        wuxing_short: '金土相生，金锋当令',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 88,
        reason:
          '德国白黑属金水，丑时土旺金生——金得土养，水不泄气。今日乙酉日金气主导，与德国队服气场同频；Musiala/Wirtz 双核如金刃出鞘，中路突破顺应天时。',
        advantage: '开场即压制，xG 3.8 级攻势与五行金锋共振；定位球与肋部渗透在丑时土旺下更易兑现',
      },
      away: {
        team: 'Curaçao',
        colors: '蓝+黄',
        elements: '水（蓝）、土（黄）',
        wuxing_short: '水土受制，筑堤挡洪',
        verdict: '不利',
        verdict_color: '#D95F6A',
        compat: 24,
        reason:
          '库拉索蓝黄属水土，丑时土旺克水——蓝色水德被土所困，黄色土虽可守，却在金气当令之日难化攻势为反击。Advocaat 五后卫如筑堤，堤可延一时，难挡决口。',
        disadvantage: '密集防守消耗大，Chong 速度对位 Kimmich 难持续；先失球后易崩盘，定位球是唯一偷分窗口',
      },
      summary: '五行裁定：德国金土顺局，库拉索水土受制，厚土难挡金锋全程',
    },
    hexagram: {
      name: '夬卦',
      symbol: '☱',
      number: 43,
      upper: '兑泽',
      lower: '乾天',
      quote: '《周易·夬卦》：「扬于王庭，孚号有厉。」',
      general:
        '泽上于天，决断之力。夬卦象征强势一方需速战速决、不容拖延——利于实力碾压、进攻主导的一方。',
      advantage_team: 'Germany',
      disadvantage_team: 'Curaçao',
      hexagram_analysis:
        '夬卦主「决」，德国如天泽决口，Musiala 为决口之水、Wirtz 为金刃；库拉索三中卫五后卫如厚土承金，前 30 分钟不溃则土德可显，但 90 分钟内金锋必破堤。Neuer 复出五届世界杯，门将金德稳阵。',
      match_nature: '强队控场大胜局',
      match_nature_prob: 82,
      yellow_card_risk: '低',
      yellow_card_reason:
        '夬卦主决断非缠斗，预计全场 2-3 张黄牌——库拉索战术犯规阻截 Musiala/Wirtz 为主；德国控球时犯规需求低，红牌概率 <5%。',
      scenarios: [
        { icon: '⚽', label: '比赛性质', text: '德国大胜概率 82%，净胜 3 球以上约 55%；平局 8%，库拉索胜 <5%（xG 3.8-0.3）' },
        { icon: '⏱', label: '进球高峰段', text: '第 15-30 分钟（Musiala 肋部渗透）及第 60-75 分钟（Advocaat 变阵后空档扩大）' },
        { icon: '🟨', label: '黄牌风险', text: '低——约 2-3 张，库拉索阻截双 10 号位战术犯规为主' },
        { icon: '🔄', label: '0-0 平局可能', text: '极低（8%）——夬卦不容强者空手而归；库拉索或拖至 25 分钟后仍难零封' },
        { icon: '⏰', label: '加时赛概率', text: '极低（<2%）——实力差过大，90 分钟内分胜负概率 98%+' },
      ],
      early_goal: {
        scenario: '若前 20 分钟德国率先进球（Musiala/Wirtz 破局）',
        prediction:
          '「扬于王庭」一旦启动——库拉索五后卫或改四后卫，肋部空档暴露；Nagelsmann 双后腰 Pavlović-Nmecha 控场，Havertz 支点牵制中卫，追加 2-3 球概率升至 70%。',
        favors: 'Germany',
        favors_prob: 88,
      },
      no_early_goal: {
        scenario: '若前 30 分钟 0-0（Advocaat 低位奏效）',
        prediction:
          '夬卦主「终必决」——德国半场调整（Sané 宽度 + Musiala 内切）后市面仍控；库拉索体能下滑后第 35-45 分钟失球概率 65%，下半场崩盘风险倍增。',
        favors: 'Germany',
        favors_prob: 78,
      },
      away_goal: {
        scenario: '若库拉索偷袭破门（L. Bacuna 定位球 / Chong 反击）',
        prediction:
          '极低概率（<5%）——若成真，德国反扑如决口之水，Havertz 头球 + Musiala 肋部 15 分钟内扳平概率 80%，终局仍大概率 3-1 以上。',
        favors: 'Germany',
        favors_prob: 85,
      },
      halftime: {
        scenario: '若半场 2-0 或更大比分',
        prediction:
          'Nagelsmann 轮换替补（仍保留 Wirtz 或 Musiala 其一），德国控场不追屠杀但可能再进 1-2 球；库拉索世界杯首秀心态易崩，下半场黄牌或增多。',
        favors: 'Germany',
        favors_prob: 82,
      },
      extra_time: {
        scenario: '若 90 分钟平局进加时（极低概率 <2%）',
        prediction: '夬卦极不支持拖延——德国替补深度碾压，加时 10 分钟内进球概率 85%；点球大战概率 <10%。',
        favors: 'Germany',
        favors_prob: 90,
      },
    },
    home_score: 88,
    away_score: 22,
    mystic_verdict:
      '☱ 夬卦决断——德国金锋当令，Musiala 如决口之水、Wirtz 如金刃出鞘；库拉索厚土能守一时，难挡全程。xG 3.8 与五行同频，此乃 E 组最无悬念之局。',
    disclaimer: DISCLAIMER,
  },

  m10: {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: '寅时（03:00-05:00）',
      hour_home_element: '木',
      day_dominant: '木',
      day_summary:
        '丙午年庚午月乙酉日寅时——寅木当令，木旺金缺，两强相争宜以柔克刚。《周易·同人卦》曰：「同人于野，亨。」技术流对决逢木时，边路速度与肋部渗透者利；忌硬碰硬，宜战术纪律与换人深度决胜。',
    },
    wuxing: {
      home: {
        team: 'Netherlands',
        colors: '橙+白',
        elements: '火（橙）、金（白）',
        wuxing_short: '木火相生，进攻气势旺',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 72,
        reason:
          '荷兰橙色属火，寅时木生火——Gakpo/Dumfries 边路宽度如木火蔓延；van Dijk 定位球金德在木时仍有威胁。Koeman 4-3-3 高位压迫顺应寅木生发之气。',
        advantage: '开场 30 分钟压制力强，de Jong 控球节拍与木时节奏同频；换人深度（Gravenberch/Reijnders）利于 70 分钟后提速',
      },
      away: {
        team: 'Japan',
        colors: '蓝+白',
        elements: '水（蓝）、金（白）',
        wuxing_short: '水木相涵，防守反击可成',
        verdict: '中性',
        verdict_color: '#C8A96E',
        compat: 68,
        reason:
          '日本蓝色属水，寅时木不克水——Moriyasu 三中卫+双前腰如蓄水待时，Kubo 肋部突破如暗流穿石。2022 胜德国之「水克火」模板仍可部分复现，但 Verbruggen 存疑削弱荷兰火德。',
        advantage: 'Kubo-Doan 肋部配合专打 van de Ven 空隙；Mitoma 速度惩罚荷兰高位身后——爆冷指数四场最高',
      },
      summary: '五行裁定：木时两强相争，荷兰火德略占上风，日本水德暗藏爆冷之机',
    },
    hexagram: {
      name: '同人卦',
      symbol: '☰',
      number: 13,
      upper: '乾天',
      lower: '离火',
      quote: '《周易·同人卦》：「同人于野，亨。」',
      general:
        '天火同人，势均力敌之局。同人卦象征两强在野相争、各有拥趸——利于战术纪律更好、肋部渗透更精的一方，非纯实力碾压局。',
      advantage_team: 'Netherlands',
      disadvantage_team: 'Japan',
      hexagram_analysis:
        '同人卦主协作与相争并存——荷兰火德在野（Gakpo 内切 + Dumfries 插上），日本水德潜行（Kubo 肋部 + Kamada 逼抢 de Jong）。van Dijk 如天行健定防线；Kubo 如星火可成燎原，2022 模板仍有效。本场爆冷指数 42，为今日最高。',
      match_nature: '势均力敌小胜局',
      match_nature_prob: 52,
      yellow_card_risk: '中',
      yellow_card_reason:
        '同人卦主相争，预计 4-5 张黄牌——de Jong vs Kamada/Sano 中场绞杀、Dumfries 对位 Mitoma/Doan 犯规；荷兰高位压迫时日本反击被拉倒概率高。',
      scenarios: [
        { icon: '⚽', label: '比赛性质', text: '荷兰小胜 52%，平局 28%，日本爆冷 20%（xG 1.85-1.05，泊松最可能 2-1）' },
        { icon: '⏱', label: '进球高峰段', text: '第 20-35 分钟（双方试探后）及第 70-85 分钟（换人后体能差显现）' },
        { icon: '🟨', label: '黄牌风险', text: '中等——约 4-5 张，中场绞杀 + 边路对位犯规' },
        { icon: '🔄', label: '0-0 平局可能', text: '中（28%）——同人卦允许僵持；日本三中卫压缩空间，荷兰久攻不下概率不低' },
        { icon: '⏰', label: '加时赛概率', text: '低（8%）——F 组首战双方可接受平局，但 90 分钟内分胜负概率仍约 72%' },
      ],
      early_goal: {
        scenario: '若前 25 分钟荷兰率先进球（Gakpo 内切 / van Dijk 定位球）',
        prediction:
          '日本被迫压出三中卫——Kubo 反击空间增大，Mitoma 速度对位 Dumfries 身后；但荷兰控场下「同人」转为荷兰主导，追加进球概率 45%，被扳平概率 38%。',
        favors: 'Netherlands',
        favors_prob: 58,
      },
      no_early_goal: {
        scenario: '若前 30 分钟 0-0（Moriyasu 三中卫奏效）',
        prediction:
          '消耗战格局——荷兰换人深度略优（Reijnders/Gravenberch），de Jong 控球率决定节奏；第 55-70 分钟 Kubo 肋部或 Gakpo 远射破局概率 62%。',
        favors: 'Netherlands',
        favors_prob: 55,
      },
      away_goal: {
        scenario: '若日本先进球（Kubo 肋部 / Doan 配合）',
        prediction:
          '同人卦遭逆——荷兰主场反扑，Gakpo + Malen 扳平概率 60%；若 Verbruggen 存疑影响出球，日本收缩执行 1-0 概率 25%，但 90 分钟荷兰至少扳平概率 65%。',
        favors: 'Netherlands',
        favors_prob: 52,
      },
      halftime: {
        scenario: '若半场 1-1 进入中场',
        prediction:
          'Koeman 变阵（Summerville 速度或加强宽度），荷兰 70 分钟后略占上风；日本远藤航退出削弱后腰硬度，Sano 对位 de Jong 体能存疑。',
        favors: 'Netherlands',
        favors_prob: 58,
      },
      extra_time: {
        scenario: '若 90 分钟平局进加时（概率 8%）',
        prediction:
          '荷兰替补深度 + 身高定位球优势，加时 15 分钟内进球概率 55%；点球大战概率 45%，van Dijk 防空日本点球手心理压力大。',
        favors: 'Netherlands',
        favors_prob: 55,
      },
    },
    home_score: 64,
    away_score: 58,
    mystic_verdict:
      '☰ 同人于野——荷日两强相争，van Dijk 如天行健；Kubo 水德或可偷天换日。木时火水交锋，荷兰略占天时，但日本 2022 模板仍有效——今日四场爆冷指数最高。',
    disclaimer: DISCLAIMER,
  },

  m11: {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: '辰时（07:00-09:00）',
      hour_home_element: '土',
      day_dominant: '土',
      day_summary:
        '丙午年庚午月乙酉日辰时——辰时土旺，火生土、金被土埋。《周易·谦卦》曰：「谦谦君子，卑以自牧。」两非洲/南美劲旅逢土旺之日，宜守中待变、以退为进；忌急躁冒进，定位球与中场绞杀定乾坤。',
    },
    wuxing: {
      home: {
        team: "Côte d'Ivoire",
        colors: '橙+绿',
        elements: '火（橙）、木（绿）',
        wuxing_short: '火土相生，进攻需耐心',
        verdict: '中性',
        verdict_color: '#C8A96E',
        compat: 58,
        reason:
          '科特迪瓦橙绿属火木，辰时土旺火生——Faé 强调身体对抗，Kessié/Sangaré 中场硬度如土中藏火；但 N\'Dicka 伤疑削弱防空，Enner Valencia 定位球需火炼真金方能破山。',
        advantage: 'Simon Adingra 边路速度对位 Estupiñán；非洲杯冠军班底大赛经验，主场费城氛围加持',
      },
      away: {
        team: 'Ecuador',
        colors: '黄+蓝',
        elements: '土（黄）、水（蓝）',
        wuxing_short: '土水相涵，防守如山',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 65,
        reason:
          '厄瓜多尔黄蓝属土水，辰时土旺——Caicedo 如山地之固，19 场不败土德厚重；Beccacece 低位防守+快速转换顺应「谦卦」以退为进。Hincapié 出球中卫稳阵，Plata 速度反击如暗流。',
        advantage: 'Caicedo 绞杀 Kessié 推进，中场控制权倾向客队；平局对双方均可接受，领先方收缩概率高',
      },
      summary: '五行裁定：辰时土旺，厄瓜多尔土德略占上风，科特迪瓦需火炼真金破谦守',
    },
    hexagram: {
      name: '谦卦',
      symbol: '☶',
      number: 15,
      upper: '坤地',
      lower: '艮山',
      quote: '《周易·谦卦》：「谦谦君子，卑以自牧。」',
      general:
        '地山谦，以退为进。谦卦象征防守反击、不骄不躁的一方占优——利于纪律严明、中场硬度更高、能忍受 0-0 的一方。',
      advantage_team: 'Ecuador',
      disadvantage_team: "Côte d'Ivoire",
      hexagram_analysis:
        '谦卦主守中——Caicedo 如艮山不动，Kessié 对位绞杀决定中场归属；科特迪瓦火德（Diallo/Guessand）需耐心方能破山。xG 1.5-1.4 几乎均势，泊松最可能 1-1；Letexier 执法下 Caicedo/Kessié 对抗黄牌风险高。',
      match_nature: '均势胶着局',
      match_nature_prob: 38,
      yellow_card_risk: '中高',
      yellow_card_reason:
        '谦卦主守但绞杀激烈，预计 5-6 张黄牌——Caicedo vs Kessié 中场对抗、Singo/Konan 对位 Plata/Estupiñán；Letexier 对战术犯规尺度偏严。',
      scenarios: [
        { icon: '⚽', label: '比赛性质', text: '平局 35%，科特迪瓦主胜 38%，厄瓜多尔客胜 27%（xG 1.5-1.4 均势）' },
        { icon: '⏱', label: '进球高峰段', text: '第 35-50 分钟（双方体能峰值）及第 75-90 分钟（定位球 / 反击）' },
        { icon: '🟨', label: '黄牌风险', text: '中高——约 5-6 张，Caicedo/Kessié 绞杀 + 边路对位' },
        { icon: '🔄', label: '0-0 平局可能', text: '高（35%）——谦卦主守，双方均可接受 1 分，久攻不下概率不低' },
        { icon: '⏰', label: '加时赛概率', text: '低（6%）——小组赛首战平局可接受，绝杀概率 30%' },
      ],
      early_goal: {
        scenario: '若前 20 分钟率先进球（Guessand 支点 / Valencia 定位球 / Plata 反击）',
        prediction:
          '领先方或收缩执行谦卦「卑以自牧」——被追平概率 48%；若厄瓜多尔领先，Caicedo 绞杀 + Hincapié 防空，科特迪瓦压上易留 Plata 身后空档。',
        favors: 'Draw',
        favors_prob: 48,
      },
      no_early_goal: {
        scenario: '若前 45 分钟 0-0（双方中场绞杀）',
        prediction:
          '下半场体能下降，定位球成关键——科特迪瓦 Singo/Agbadou 身高 vs Hincapié 防空；第 60-75 分钟 Caicedo 反击或 Kessié 远射破局概率 55%。',
        favors: 'Ecuador',
        favors_prob: 42,
      },
      away_goal: {
        scenario: '若厄瓜多尔领先（Valencia 跑位 / Caicedo 长传 Plata）',
        prediction:
          '科特迪瓦压上，Adingra 宽度 + Diomande 冲击；但 Caicedo 反击威胁大，90 分钟厄瓜多尔守 1-0 概率 38%，被追平 45%。',
        favors: 'Ecuador',
        favors_prob: 45,
      },
      halftime: {
        scenario: '若半场 1-1 进入中场',
        prediction:
          '90 分钟难分胜负概率 52%——双方均可接受平局，Faé 与 Beccacece 或同时保守；绝杀来自定位球或 Caicedo 直塞 Plata 概率 30%。',
        favors: 'Draw',
        favors_prob: 52,
      },
      extra_time: {
        scenario: '若 90 分钟平局且需绝杀（概率 6%）',
        prediction:
          '加时赛体能下降，科特迪瓦 African Cup 班底深度略优，但 Caicedo 单点防守仍稳；点球大战概率 40%，门将 Fofana vs Galindez 均非顶级。',
        favors: 'Draw',
        favors_prob: 40,
      },
    },
    home_score: 48,
    away_score: 54,
    mystic_verdict:
      '☶ 谦卦守中——Caicedo 如艮山，19 场不败土德厚；科特迪瓦火德需耐心方能破山。xG 均势下平局气场最浓，厄瓜多尔客不败概率略高于主胜。',
    disclaimer: DISCLAIMER,
  },

  m12: {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: '巳时（09:00-11:00）',
      hour_home_element: '火',
      day_dominant: '火',
      day_summary:
        '丙午年庚午月乙酉日巳时——巳火当令，火旺土燥。《周易·益卦》曰：「利有攸往，利涉大川。」北欧火德与北非金火交锋，先进球者占势；蒙特雷 34°C 干热叠加巳火，体能消耗决定下半场走势。',
    },
    wuxing: {
      home: {
        team: 'Sweden',
        colors: '黄+蓝',
        elements: '土（黄）、水（蓝）',
        wuxing_short: '火土相战，进攻需提速',
        verdict: '中性',
        verdict_color: '#C8A96E',
        compat: 58,
        reason:
          '瑞典黄蓝属土水，巳时火旺土燥——Isak 如风行地上需快攻破局；定位球身高优势（Gyökeres/Isak）是土德变现手段。高温对北欧球员消耗大于突尼斯北非球员。',
        advantage: 'Isak/Gyökeres 锋线 xG 1.55 占优；定位球与角球是主要破局手段，Potter 3-4-3 宽度压制',
      },
      away: {
        team: 'Tunisia',
        colors: '白+红',
        elements: '金（白）、火（红）',
        wuxing_short: '金火相克，反击可借势',
        verdict: '中性',
        verdict_color: '#C8A96E',
        compat: 52,
        reason:
          '突尼斯白红属金火，巳时火旺可借势——Achouri 如暗雷，Lamouchi 4-3-3 低位如山地待时。2018 胜德国之爆冷 DNA 仍在；Skhiri 绞杀 Isak 接球是防守关键。',
        advantage: '34°C 干热适应性略优；Msakni/Khazri 反击 + 定位球远射，0-0 进入 70 分钟后对瑞典更不利',
      },
      summary: '五行裁定：巳时火旺，攻守转换快，先破门者得利；高温放大体能差',
    },
    hexagram: {
      name: '益卦',
      symbol: '☴',
      number: 42,
      upper: '巽风',
      lower: '震雷',
      quote: '《周易·益卦》：「利有攸往，利涉大川。」',
      general:
        '风雷益，利于进取但需防反。益卦象征先进攻、先增益的一方占势——但风雷无常，落后方一记反击可逆转局势。',
      advantage_team: 'Sweden',
      disadvantage_team: 'Tunisia',
      hexagram_analysis:
        '益卦主增益——Isak 如风行地上，Kulusevski 右路宽度；突尼斯若守如震雷不动，Msakni 直塞 Khazri 可「雷动一击」。蒙特雷高温 + 巳火当令，0-0 进入 70 分钟后瑞典体能下滑，突尼斯反击概率升。',
      match_nature: '主队小胜或平局',
      match_nature_prob: 48,
      yellow_card_risk: '中',
      yellow_card_reason:
        '益卦主快攻，预计 4 张黄牌——高温下战术犯规阻截 Isak、Laïdouni 绞杀中场；瑞典定位球争抢中 Meriah 犯规概率高。',
      scenarios: [
        { icon: '⚽', label: '比赛性质', text: '瑞典小胜 48%，平局 30%，突尼斯爆冷 22%（xG 1.55-1.05，泊松 2-1 / 1-1）' },
        { icon: '⏱', label: '进球高峰段', text: '第 25-40 分钟（双方体能尚可）及第 70-85 分钟（高温消耗后）' },
        { icon: '🟨', label: '黄牌风险', text: '中等——约 4 张，高温战术犯规 + 定位球争抢' },
        { icon: '🔄', label: '0-0 平局可能', text: '中（30%）——突尼斯低位 + 34°C 消耗，瑞典久攻不下概率不低' },
        { icon: '⏰', label: '加时赛概率', text: '低（5%）——小组赛次席之争，90 分钟内分胜负概率约 70%' },
      ],
      early_goal: {
        scenario: '若前 25 分钟瑞典率先进球（Isak 支点 / 定位球 Gyökeres）',
        prediction:
          '益卦「利有攸往」——突尼斯被迫压出，Isak 反击空间增大；瑞典控场下追加进球概率 40%，Potter 可轮换 Elanga 提速。',
        favors: 'Sweden',
        favors_prob: 65,
      },
      no_early_goal: {
        scenario: '若前 30 分钟 0-0（Lamouchi 低位奏效）',
        prediction:
          '高温消耗战——下半场 65 分钟后进球概率升；Msakni 直塞 Khazri 反击 vs 瑞典定位球轰炸，平局概率 40%，瑞典小胜 35%。',
        favors: 'Draw',
        favors_prob: 40,
      },
      away_goal: {
        scenario: '若突尼斯领先（Msakni 直塞 / Khazri 远射）',
        prediction:
          '瑞典围攻——Isak 头球 + Kulusevski 传中，定位球扳平概率 55%；若 0-0 进入 70 分钟后突尼斯领先，瑞典高温体能崩盘风险升。',
        favors: 'Sweden',
        favors_prob: 50,
      },
      halftime: {
        scenario: '若半场 0-0 进入中场',
        prediction:
          'Potter 变阵（可能 Gyökeres 双前锋），瑞典 60 分钟后略优；突尼斯 Meriah 防空 + Skhiri 绞杀 Isak 仍是关键。',
        favors: 'Sweden',
        favors_prob: 52,
      },
      extra_time: {
        scenario: '若 90 分钟平局进加时（概率 5%）',
        prediction:
          '加时赛高温对双方均残酷，瑞典锋线深度略优；点球大战概率 35%，Isak 点球心理压力大。',
        favors: 'Sweden',
        favors_prob: 55,
      },
    },
    home_score: 60,
    away_score: 46,
    mystic_verdict:
      '☴ 益卦风雷——Isak 如风，Msakni 如雷；巳时火旺 + 蒙特雷 34°C，先破门者得利。瑞典纸面占优但非顶级，突尼斯 2018 爆冷 DNA 仍存。',
    disclaimer: DISCLAIMER,
  },
};

function getMystic(matchId) {
  const data = MYSTIC[matchId];
  if (!data) throw new Error(`Unknown mystic id: ${matchId}`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getMystic, MYSTIC };
