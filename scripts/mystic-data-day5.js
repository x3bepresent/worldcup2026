/**
 * Day 5 full mystic / 竞技推演 blocks for m13–m16
 */
const DISCLAIMER =
  '以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据';

const BAZI_BASE = {
  year: '丙午年',
  year_element: '火',
  year_animal: '马',
  month: '甲午月',
  month_element: '木+火',
  day: '丙戌日',
  day_element: '火+土',
};

const MYSTIC = {
  m14: {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: '子时（23:00-01:00）',
      hour_home_element: '水',
      day_dominant: '火土',
      day_summary:
        '丙午年甲午月丙戌日子时——火土当令，子水潜藏。《周易·大有卦》曰：「元亨。」强队如日中天，弱旅宜守中待变；忌轻敌，宜速战速决。',
    },
    wuxing: {
      home: {
        team: 'Spain',
        colors: '红+黄',
        elements: '火（红）、土（黄）',
        wuxing_short: '火土同频，如日中天',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 90,
        reason:
          '西班牙红黄属火土，丙戌日火土当令——Yamal/Pedri 如烈日当空，传控宽度与天时同频。子水不克火土，反润木生火，Olmo 肋部如暗流助焰。',
        advantage: '开场即压制，xG 2.45 与五行共振；定位球 Laporte/Le Normand 土德防空占优',
      },
      away: {
        team: 'Cape Verde',
        colors: '蓝+白+红',
        elements: '水（蓝）、金（白）、火（红）',
        wuxing_short: '水土受火克，筑堤难久',
        verdict: '不利',
        verdict_color: '#D95F6A',
        compat: 28,
        reason:
          '佛得角蓝水遇火土日——Bubista 4-4-2 低位如筑堤挡洪，前 30 分钟或可守，但 90 分钟内火土决口难挡。Mendes 反击如细流，难成决口。',
        disadvantage: '密集防守消耗大，60\' 后体能下滑；定位球是唯一偷分窗口',
      },
      summary: '五行裁定：西班牙火土顺局，佛得角水土受制，H 组揭幕最无悬念之局',
    },
    hexagram: {
      name: '大有卦',
      symbol: '☲',
      number: 14,
      upper: '离火',
      lower: '乾天',
      quote: '《周易·大有卦》：「元亨。」',
      general: '火在天上，普照万物。大有卦象征强者如日中天——利于实力碾压、控球主导的一方。',
      advantage_team: 'Spain',
      disadvantage_team: 'Cape Verde',
      hexagram_analysis:
        '大有卦主「盛」——西班牙 Yamal 如天火下照，Pedri 为薪火相传；佛得角四中场如厚土承火，前 30 分钟不溃则土德可显，但 90 分钟内必破。de la Fuente 传控与天时同频。',
      match_nature: '强队控场大胜局',
      match_nature_prob: 85,
      yellow_card_risk: '低',
      yellow_card_reason: '大有卦主顺遂非缠斗，预计 3-4 张黄牌——佛得角战术犯规阻截 Yamal 为主。',
      scenarios: [
        { icon: '⚽', label: '比赛性质', text: '西班牙大胜 78%，净胜 2 球以上约 55%；平局 15%，佛得角胜 <8%（xG 2.45-0.55）' },
        { icon: '⏱', label: '进球高峰段', text: '第 20-35 分钟（Yamal 肋部）及第 65-80 分钟（Bubista 变阵后空档）' },
        { icon: '🟨', label: '黄牌风险', text: '低——约 3-4 张，佛得角阻截为主' },
        { icon: '🔄', label: '0-0 平局可能', text: '极低（15%）——大有卦不容强者空手而归' },
        { icon: '⏰', label: '加时赛概率', text: '极低（<2%）' },
      ],
      early_goal: {
        scenario: '若前 20 分钟西班牙率先进球（Yamal/Pedri 破局）',
        prediction: '「元亨」启动——佛得角 4-4-2 或改五后卫，肋部空档暴露；追加 2-3 球概率 70%。',
        favors: 'Spain',
        favors_prob: 88,
      },
      no_early_goal: {
        scenario: '若前 30 分钟 0-0（Bubista 低位奏效）',
        prediction: '大有卦主「终必盛」——西班牙半场调整，Olmo 宽度 + Yamal 内切，第 35-45 分钟失球概率 65%。',
        favors: 'Spain',
        favors_prob: 82,
      },
      away_goal: {
        scenario: '若佛得角偷袭破门（Mendes 反击 / 定位球）',
        prediction: '极低概率（<8%）——若成真，西班牙反扑如天火重燃，15 分钟内扳平概率 85%。',
        favors: 'Spain',
        favors_prob: 86,
      },
      halftime: {
        scenario: '若半场 2-0 或更大比分',
        prediction: 'de la Fuente 轮换替补，西班牙控场不追屠杀但可能再进 1-2 球。',
        favors: 'Spain',
        favors_prob: 84,
      },
      extra_time: {
        scenario: '若 90 分钟平局（极低概率）',
        prediction: '西班牙替补深度碾压，加时 10 分钟内进球概率 90%。',
        favors: 'Spain',
        favors_prob: 92,
      },
    },
    home_score: 88,
    away_score: 22,
    mystic_verdict:
      '☲ 大有卦——西班牙火土当令，Yamal 如天火下照；佛得角厚土能守一时，难挡全程。xG 2.45 与五行同频，H 组揭幕最顺之局。',
    disclaimer: DISCLAIMER,
  },

  m16: {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: '丑时（01:00-03:00）',
      hour_home_element: '土',
      day_dominant: '火土',
      day_summary:
        '丙戌日丑时——丑土当令，火土相生。《周易·睽卦》曰：「小事吉。」两强相争宜以战术纪律决胜，Salah 如离火独明，忌比利时轻敌。',
    },
    wuxing: {
      home: {
        team: 'Belgium',
        colors: '红+黑',
        elements: '火（红）、水（黑）',
        wuxing_short: '火土相生，De Bruyne 为枢',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 72,
        reason:
          '比利时红属火，丑时土旺火生——De Bruyne 如土中藏火，Doku 边路如木火蔓延。Lukaku 支点土德稳固，G 组揭幕天时略利主队。',
        advantage: 'De Bruyne 前腰位置与丑时土旺同频；西雅图凉爽利于 90 分钟高位',
      },
      away: {
        team: 'Egypt',
        colors: '白+红+黑',
        elements: '金（白）、火（红）、水（黑）',
        wuxing_short: 'Salah 离火独明，余者受制',
        verdict: '中性',
        verdict_color: '#C8A96E',
        compat: 58,
        reason:
          '埃及白红属金火，Salah 如离火独明——全队进攻系于一人。丑时土旺克水，Marmoush 反击如暗流，但 De Bruyne 绞杀后难持续。',
        disadvantage: 'Salah 一人球队，先丢球后缺乏 B 计划；低位 4-5-1 久守难支',
      },
      summary: '五行裁定：比利时火土略占上风，埃及 Salah 离火可成暗雷',
    },
    hexagram: {
      name: '睽卦',
      symbol: '☱',
      number: 38,
      upper: '离火',
      lower: '兑泽',
      quote: '《周易·睽卦》：「小事吉。」',
      general: '火泽睽，两强相背而争。睽卦象征势均力敌但各有倚仗——利于战术纪律更好、核心球员状态更佳的一方。',
      advantage_team: 'Belgium',
      disadvantage_team: 'Egypt',
      hexagram_analysis:
        '睽卦主「乖异而动」——比利时 De Bruyne 如泽中藏火，Salah 如离火独明。Garcia 大赛慢热是睽卦之「异」，但替补深度（Doku/Trossard）可解。Salah 先破门则指数骤降。',
      match_nature: '主队小胜局',
      match_nature_prob: 58,
      yellow_card_risk: '中',
      yellow_card_reason: '睽卦主相争，预计 4-5 张——Salah 反击被拉倒、比利时高位犯规。',
      scenarios: [
        { icon: '⚽', label: '比赛性质', text: '比利时小胜 60%，平局 22%，埃及爆冷 18%（xG 1.95-0.95，最可能 2-1）' },
        { icon: '⏱', label: '进球高峰段', text: '第 25-40 分钟及第 70-85 分钟（换人后）' },
        { icon: '🟨', label: '黄牌风险', text: '中等——4-5 张，Salah 反击 + De Bruyne 绞杀' },
        { icon: '🔄', label: '0-0 平局可能', text: '中（22%）——埃及低位 + Salah 偷分' },
        { icon: '⏰', label: '加时赛概率', text: '低（5%）' },
      ],
      early_goal: {
        scenario: '若比利时率先进球（De Bruyne/Lukaku）',
        prediction: '埃及被迫压出——Salah 反击空间增大，但比利时控场追加进球概率 45%。',
        favors: 'Belgium',
        favors_prob: 65,
      },
      no_early_goal: {
        scenario: '若前 30 分钟 0-0（Hassan 低位奏效）',
        prediction: '消耗战——De Bruyne 70\' 后体能优势显现，Salah 孤立无援概率增。',
        favors: 'Belgium',
        favors_prob: 58,
      },
      away_goal: {
        scenario: '若 Salah 先破门（反击 / 定位球）',
        prediction: '睽卦逆——比利时反扑，Trossard 扳平概率 55%；90 分钟至少平局概率 70%。',
        favors: 'Belgium',
        favors_prob: 52,
      },
      halftime: { scenario: '若半场 1-1', prediction: 'Garcia 变阵加强宽度，比利时 70\' 后略优。', favors: 'Belgium', favors_prob: 58 },
      extra_time: { scenario: '若 90 分钟平局', prediction: '比利时替补深度 + 身高优势，加时进球概率 55%。', favors: 'Belgium', favors_prob: 62 },
    },
    home_score: 68,
    away_score: 38,
    mystic_verdict: '☱ 睽卦——De Bruyne 土中藏火，Salah 离火独明；比利时纸面占优但大赛慢热，Salah 是最大变数。',
    disclaimer: DISCLAIMER,
  },

  m13: {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: '卯时（05:00-07:00）',
      hour_home_element: '木',
      day_dominant: '火土',
      day_summary:
        '丙戌日卯时——卯木当令，木生火。《周易·巽卦》曰：「小亨。」风入木中，Bielsa 压迫如巽风拂林；沙特宜守，忌与风竞速。',
    },
    wuxing: {
      home: {
        team: 'Saudi Arabia',
        colors: '绿+白',
        elements: '木（绿）、金（白）',
        wuxing_short: '木遇巽风，宜守不宜攻',
        verdict: '不利',
        verdict_color: '#D95F6A',
        compat: 32,
        reason: '沙特绿属木，卯时木旺但 Bielsa 巽风（木）更盛——Mancini 低位如林待风，风过林摧。Al-Dawsari 反击如落叶，难成气候。',
        disadvantage: 'Bielsa 压迫下出球困难，60\' 后体能崩盘风险高',
      },
      away: {
        team: 'Uruguay',
        colors: '天蓝+白+黑',
        elements: '水（蓝）、金（白）、水（黑）',
        wuxing_short: '金水相涵，巽风助势',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 78,
        reason: '乌拉圭天蓝属水，卯木生水——Valverde 覆盖如巽风入林，Núñez 支点金德稳固。Bielsa 高位与卯时木气同频，压迫强度天时助力。',
        advantage: '全场压制，xG 1.85 与巽风共振；迈阿密湿热对沙特低位更不利',
      },
      summary: '五行裁定：乌拉圭巽风当令，沙特木气受制，Bielsa 压迫局',
    },
    hexagram: {
      name: '巽卦',
      symbol: '☴',
      number: 57,
      upper: '巽风',
      lower: '巽风',
      quote: '《周易·巽卦》：「小亨，利有攸往，利见大人。」',
      general: '随风巽，柔顺而入。巽卦象征持续渗透、高压逼迫——利于高位压迫、体能深度更优的一方。',
      advantage_team: 'Uruguay',
      disadvantage_team: 'Saudi Arabia',
      hexagram_analysis:
        '巽卦主「入」——Bielsa 压迫如双巽叠风，Valverde 覆盖无孔不入；Mancini 2022 爆冷 DNA 在巽风面前难复现。Núñez 先破门则沙特崩盘概率 75%。',
      match_nature: '客队控场胜局',
      match_nature_prob: 72,
      yellow_card_risk: '高',
      yellow_card_reason: '巽卦主入，压迫局战术犯规多；Mariani 预计 5-6 张黄牌。',
      scenarios: [
        { icon: '⚽', label: '比赛性质', text: '乌拉圭胜 63%，平局 22%，沙特爆冷 15%（xG 0.75-1.85，最可能 0-2/1-2）' },
        { icon: '⏱', label: '进球高峰段', text: '第 15-30 分钟（Bielsa 压迫奏效）及第 60-75 分钟（沙特体能下滑）' },
        { icon: '🟨', label: '黄牌风险', text: '高——5-6 张，沙特战术犯规打断节奏' },
        { icon: '🔄', label: '0-0 平局可能', text: '低（22%）——巽风不容久滞' },
        { icon: '⏰', label: '加时赛概率', text: '极低（3%）' },
      ],
      early_goal: {
        scenario: '若乌拉圭前 20 分钟进球（Núñez/Valverde）',
        prediction: '巽风入林——沙特被迫压出，追加失球概率 65%；Mancini 低位崩溃模板。',
        favors: 'Uruguay',
        favors_prob: 82,
      },
      no_early_goal: {
        scenario: '若前 30 分钟 0-0（Mancini 低位奏效）',
        prediction: '巽风持续——60\' 后沙特体能下滑，Valverde 远射/Núñez 破局概率 70%。',
        favors: 'Uruguay',
        favors_prob: 75,
      },
      away_goal: { scenario: '若沙特偷袭（Al-Dawsari）', prediction: '极低（<15%）——乌拉圭反扑 15 分钟内扳平概率 80%。', favors: 'Uruguay', favors_prob: 78 },
      halftime: { scenario: '若半场 0-0', prediction: 'Bielsa 下半场加码压迫，沙特 60\' 后崩盘风险倍增。', favors: 'Uruguay', favors_prob: 72 },
      extra_time: { scenario: '若 90 分钟平局', prediction: '乌拉圭替补深度碾压，加时进球概率 70%。', favors: 'Uruguay', favors_prob: 85 },
    },
    home_score: 32,
    away_score: 72,
    mystic_verdict: '☴ 巽卦——Bielsa 双巽叠风，Valverde 无孔不入；沙特 2022 DNA 难挡今日天时。乌拉圭 xG 1.85 与五行同频。',
    disclaimer: DISCLAIMER,
  },

  m15: {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: '巳时（09:00-11:00）',
      hour_home_element: '火',
      day_dominant: '火土',
      day_summary:
        '丙戌日巳时——巳火当令，火土极盛。《周易·渐卦》曰：「女归吉。」循序渐进，伊朗水土相济，Wood 独木难支。',
    },
    wuxing: {
      home: {
        team: 'Iran',
        colors: '白+绿+红',
        elements: '金（白）、木（绿）、火（红）',
        wuxing_short: '水火木金相济，循序渐进而吉',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 70,
        reason: '伊朗白绿红属金木火，巳火当令——Taremi 支点土德（丙戌日），Jahanbakhsh 边路如木火蔓延。预选赛 10 零封防守纪律与渐卦「渐进」同频。',
        advantage: '传控压制新西兰，Taremi 背身 + 定位球破局；SoFi 人工草皮利传控',
      },
      away: {
        team: 'New Zealand',
        colors: '白+黑',
        elements: '金（白）、水（黑）',
        wuxing_short: '金气孤悬，Wood 如独木',
        verdict: '不利',
        verdict_color: '#D95F6A',
        compat: 38,
        reason: '新西兰白黑属金水，巳火克金——Wood 英超支点如独木难支大厦。Bazeley 4-4-2 低位可守一时，但 90 分钟内渐卦「渐进」利于伊朗。',
        disadvantage: 'Wood 定位球是唯一威胁；整体实力差距大，反击点单一',
      },
      summary: '五行裁定：伊朗火土渐进而吉，新西兰金水受制，Wood 独木难支',
    },
    hexagram: {
      name: '渐卦',
      symbol: '☶',
      number: 53,
      upper: '巽风',
      lower: '艮山',
      quote: '《周易·渐卦》：「女归吉，利贞。」',
      general: '山上有木，渐进之象。渐卦象征循序渐进、步步为营——利于整体实力占优、防守纪律更好的一方。',
      advantage_team: 'Iran',
      disadvantage_team: 'New Zealand',
      hexagram_analysis:
        '渐卦主「进」——伊朗 Taremi 如艮山稳固，Jahanbakhsh 如巽风渐侵；Wood 如孤木于山，定位球偶可惊雷，但 90 分钟内渐卦利主队。Ghalenoei 10 零封防守与渐卦同频。',
      match_nature: '主队控场小胜局',
      match_nature_prob: 62,
      yellow_card_risk: '低',
      yellow_card_reason: '渐卦主循序非缠斗，预计 3-4 张黄牌。',
      scenarios: [
        { icon: '⚽', label: '比赛性质', text: '伊朗胜 54%，平局 26%，新西兰爆冷 20%（xG 1.55-0.85，最可能 2-0/1-0）' },
        { icon: '⏱', label: '进球高峰段', text: '第 30-45 分钟及第 70-85 分钟（Taremi 破局）' },
        { icon: '🟨', label: '黄牌风险', text: '低——3-4 张' },
        { icon: '🔄', label: '0-0 平局可能', text: '中（26%）——Wood 定位球 + 伊朗进攻创造力历史弱点' },
        { icon: '⏰', label: '加时赛概率', text: '极低（2%）' },
      ],
      early_goal: {
        scenario: '若伊朗率先进球（Taremi/Azmoun）',
        prediction: '渐卦「进」——新西兰被迫压出，Wood 孤立，追加失球概率 40%。',
        favors: 'Iran',
        favors_prob: 72,
      },
      no_early_goal: {
        scenario: '若前 30 分钟 0-0（Bazeley 低位奏效）',
        prediction: '渐卦允许僵持——伊朗 70\' 后 Taremi 背身破局概率 65%；Wood 定位球是唯一冷门点。',
        favors: 'Iran',
        favors_prob: 58,
      },
      away_goal: {
        scenario: '若 Wood 定位球破门',
        prediction: '渐卦暂逆——伊朗反扑，Azmoun 扳平概率 60%；90 分钟伊朗胜概率仍 55%。',
        favors: 'Iran',
        favors_prob: 55,
      },
      halftime: { scenario: '若半场 1-0 伊朗', prediction: 'Ghalenoei 4-5-1 收缩，控场至终场概率 70%。', favors: 'Iran', favors_prob: 68 },
      extra_time: { scenario: '若 90 分钟平局', prediction: '伊朗替补深度略优，加时进球概率 55%。', favors: 'Iran', favors_prob: 60 },
    },
    home_score: 65,
    away_score: 42,
    mystic_verdict: '☶ 渐卦——伊朗循序渐进而吉，Taremi 艮山稳固；Wood 如孤木，定位球偶可惊雷但难改大局。',
    disclaimer: DISCLAIMER,
  },
};

function getMystic(matchId) {
  const data = MYSTIC[matchId];
  if (!data) throw new Error(`Unknown mystic id: ${matchId}`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getMystic, MYSTIC };
