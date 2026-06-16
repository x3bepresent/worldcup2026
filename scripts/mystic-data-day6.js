/**
 * Day 6 mystic blocks — m17–m20
 * 灵力指数仅据队服五行、赛日八字、卦象气运；与 xG/纸面实力无关。
 * mystic_verdict 可一句桥接竞技模型；卦象/五行正文不写球员强弱。
 */
const DISCLAIMER =
  '以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据';

const BAZI_BASE = {
  year: '丙午年',
  year_element: '火',
  month: '甲午月',
  month_element: '金+火',
  day: '丁亥日',
  day_element: '火+水',
  day_dominant: '水',
  day_summary:
    '丁亥日——丁火坐亥，火水既济而未济。《道德经》曰：「上善若水。」亥水当令，宜顺流守正；忌火性躁进。非力之大小，乃气之顺逆。',
};

function luckScore(side, hexBonus) {
  let s = side.compat ?? 50;
  if (side.verdict === '有利') s += 4;
  else if (side.verdict === '不利') s -= 6;
  else if (side.verdict === '中性偏利') s += 2;
  else if (side.verdict === '中性偏逆') s -= 2;
  return Math.min(92, Math.max(28, Math.round(s + (hexBonus || 0))));
}

function buildMystic(id, hourHome, hourElement, wuxing, hex, verdict, modelBridge) {
  const homeBonus = hex.advantage_team === wuxing.home.team ? 6 : hex.disadvantage_team === wuxing.home.team ? -6 : 0;
  const awayBonus = hex.advantage_team === wuxing.away.team ? 6 : hex.disadvantage_team === wuxing.away.team ? -6 : 0;
  return {
    date_bazi: {
      ...BAZI_BASE,
      hour_home: hourHome,
      hour_home_element: hourElement,
    },
    wuxing,
    hexagram: hex,
    home_score: luckScore(wuxing.home, homeBonus),
    away_score: luckScore(wuxing.away, awayBonus),
    mystic_verdict: verdict,
    model_bridge: modelBridge,
    disclaimer: DISCLAIMER,
  };
}

const MYSTIC = {
  m17: buildMystic(
    'm17',
    '寅时（03:00-05:00）',
    '木',
    {
      home: {
        team: 'France',
        colors: '蓝+白',
        elements: '水、金',
        wuxing_short: '金水相涵，亥水得时',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 66,
        reason:
          '蓝属水、白属金。丁亥日亥水当令，金生水、水得地气，如「上善若水」。《说卦》：「坎为水」——主队服色与当令水气同频，非关纸面强弱，乃气运顺时。',
        advantage: '亥水助金生水，顺流而聚',
      },
      away: {
        team: 'Senegal',
        colors: '白+绿+黄',
        elements: '金、木、土',
        wuxing_short: '木得寅时，土金相杂',
        verdict: '中性偏利',
        verdict_color: '#C8A96E',
        compat: 58,
        reason:
          '绿属木、黄属土、白属金。寅时木气初升，木气可泄水而克土，位势杂而不纯——如「雷在地中」，宜守中待变，非力不足，乃五行未齐。',
        advantage: '寅木助绿衣，守势可延一时',
      },
      summary: '五行裁定：亥水当令利金水之队；塞内加尔木得寅时而有守中之气——气运近而不齐，非一边倒',
    },
    {
      name: '大有卦',
      symbol: '☲',
      number: 14,
      upper: '离火',
      lower: '乾天',
      quote: '《周易·大有卦》：「元亨。」',
      general:
        '火在天上，普照万物——大有主「明照四方」，利守正聚光、顺天应时者，非论孰强孰弱。',
      advantage_team: 'France',
      disadvantage_team: 'Senegal',
      hexagram_analysis:
        '大有「柔得尊位」：离火在上，如天光下照。蓝白如水映日，近「自天佑之」之象；客队木气在暗，宜「遏恶扬善」守中。元亨在顺，不在力。',
      match_nature: '顺气者明照',
      yellow_card_risk: '中',
      yellow_card_reason: '大有主顺遂非缠斗；离火性急，领先后犯规多来自战术阻截，预计 3–4 张黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '水火既济之日，先顺天时者得利——非实力预判' },
        { icon: '🌅', label: '寅时', text: '木气初升，利于守中带发；忌寅木过旺而火性躁进' },
        { icon: '🟨', label: '纪律', text: '离火主明，判罚尺度偏严，黄牌来自战术犯规' },
      ],
      early_goal: {
        scenario: '若主队先进球',
        prediction: '大有「自天佑之」——领先方气运更聚，但离火性急，需防「亢龙有悔」式冒进',
        favors: 'France',
        favors_prob: 58,
      },
      no_early_goal: {
        scenario: '若前30分钟无进球',
        prediction: '亥水主静，双方气运胶着；下半场水气渐移，先破局者占「明照」之势',
        favors: 'France',
        favors_prob: 52,
      },
      away_goal: {
        scenario: '若客队先进球',
        prediction: '大有遭逆——木气得寅时而暗雷可鸣；主队需以金水相生耐心反扑，非力不足，乃位势暂逆',
        favors: 'Senegal',
        favors_prob: 48,
      },
    },
    '☲ 大有卦——亥水当令，法国金水顺流；塞内加尔木得寅时守中。非竞技强弱，乃「元亨」在顺：先顺天时者明照。',
    '竞技走势（xG/泊松）见上方「模型推演概要」；此处仅论气运，二者可对照不可混为一谈。'
  ),

  m18: buildMystic(
    'm18',
    '卯时（05:00-07:00）',
    '木',
    {
      home: {
        team: 'Iraq',
        colors: '白+绿',
        elements: '金、木',
        wuxing_short: '木得卯时，金木相涵',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 68,
        reason:
          '白属金、绿属木。卯时木气当令，木气最旺——主队绿衣得时，如「雷在地中」蓄势。丁亥日水旺生木，气运在守中待发，与纸面排名无关。',
        advantage: '卯木当令，绿衣得时',
      },
      away: {
        team: 'Norway',
        colors: '红+白+蓝',
        elements: '火、金、水',
        wuxing_short: '火金交争，卯木泄火',
        verdict: '中性偏逆',
        verdict_color: '#C8A96E',
        compat: 56,
        reason:
          '红属火、白属金、蓝属水。卯木当令，木生火亦耗金；亥日水旺克火——客队火性受亥水所制，如「金声遇雨」，决断之气难伸。',
        disadvantage: '火性受制，金气被木泄',
      },
      summary: '五行裁定：卯时木旺大利绿衣主队；挪威火金交争而气运受制——此判据气，不据FIFA排名',
    },
    {
      name: '夬卦',
      symbol: '☱',
      number: 43,
      upper: '兑泽',
      lower: '乾天',
      quote: '《周易·夬卦》：「扬于王庭，孚号有厉。」',
      general:
        '泽上于天，决而能和——夬主「当决则决」，利于金气行止有常、不妄动者；非实力碾压之卦。',
      advantage_team: 'Iraq',
      disadvantage_team: 'Norway',
      hexagram_analysis:
        '夬卦「刚决柔」：兑泽在上，然卯时木旺，主队木气得令可制金。客队若急攻则触「孚号有厉」；守正待机者，气运可转。',
      match_nature: '木旺决金',
      yellow_card_risk: '中',
      yellow_card_reason: '夬主决断，战术犯规来自阻截；预计 4 张左右，红牌概率低。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '卯木当令，利于守中蓄势一方——与谁更强无关' },
        { icon: '☱', label: '兑泽', text: '金气在上，忌急躁冒进；「有厉」示慎决' },
        { icon: '🟨', label: '纪律', text: '夬非缠斗之卦，黄牌来自战术需要' },
      ],
      early_goal: {
        scenario: '若伊拉克先进球',
        prediction: '夬「扬于王庭」——木气得时，守势更固；客队火性受制，反扑需防「有厉」',
        favors: 'Iraq',
        favors_prob: 55,
      },
      no_early_goal: {
        scenario: '若前30分钟无进球',
        prediction: '卯木主静，气运胶着；下半场木气仍旺，主队守中之气渐显',
        favors: 'Iraq',
        favors_prob: 52,
      },
      away_goal: {
        scenario: '若挪威先进球',
        prediction: '夬遭逆——客队暂占兑金之位，但卯木克金，主队气运可渐回；忌客队轻敌',
        favors: 'Norway',
        favors_prob: 46,
      },
    },
    '☱ 夬卦——卯时木旺，伊拉克绿衣得令；挪威火金受制。非力之强弱，乃「当决则决」：顺木气者吉，躁进者有厉。',
    '竞技面挪威为热门，但灵力指数因卯时木气偏向主队；走势概率见「模型推演概要」。'
  ),

  m19: buildMystic(
    'm19',
    '巳时（09:00-11:00）',
    '火',
    {
      home: {
        team: 'Argentina',
        colors: '蓝+白',
        elements: '水、金',
        wuxing_short: '金水遇巳火，气蒸为云',
        verdict: '中性偏逆',
        verdict_color: '#C8A96E',
        compat: 54,
        reason:
          '蓝属水、白属金。巳时火旺，火克金、火蒸水——主队服色受当日火气所制，如「云上于天」而未雨，气运未齐。',
        disadvantage: '巳火当令，金水受制',
      },
      away: {
        team: 'Algeria',
        colors: '白+绿+红',
        elements: '金、木、火',
        wuxing_short: '木火相生，巳时得令',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 70,
        reason:
          '绿属木、红属火、白属金。巳时火旺，木生火、火得时——客队绿红与当日火气同频，如「风火家人」，气运顺遂，不论卫冕冠军名号。',
        advantage: '巳火当令，木火相生',
      },
      summary: '五行裁定：巳火当令大利木火之队；阿根廷金水受火所制——气运偏逆，非纸面冷门与否',
    },
    {
      name: '乾卦',
      symbol: '☰',
      number: 1,
      upper: '乾天',
      lower: '乾天',
      quote: '《周易·乾卦》：「元亨利贞。」',
      general:
        '天行健，君子以自强不息——乾主刚健不息，利于气运纯阳、行止有常者；非「强者必胜」之卦。',
      advantage_team: 'Algeria',
      disadvantage_team: 'Argentina',
      hexagram_analysis:
        '乾卦纯阳，然巳时火旺，木火一方得时更合「利贞」。主队金水受火制，如「龙困于泽」——非实力不足，乃位势与气运暂逆。',
      match_nature: '火盛则变',
      yellow_card_risk: '中',
      yellow_card_reason: '乾主刚健，双方意志强；巳火性急，预计 4–5 张黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '巳火当令，木火顺时者占「元亨」——与排名无关' },
        { icon: '☰', label: '乾天', text: '刚健不息，忌骄；「利贞」示守正者吉' },
        { icon: '🔥', label: '巳时', text: '火气最旺，利于火木属性服色' },
      ],
      early_goal: {
        scenario: '若阿尔及利亚先进球',
        prediction: '乾「亢龙有悔」警示领先方——巳火助木火，气运大顺；主队需以金水耐心，忌躁',
        favors: 'Algeria',
        favors_prob: 56,
      },
      no_early_goal: {
        scenario: '若前30分钟无进球',
        prediction: '巳火主动，气运渐移；木火一方占「天行健」之势渐显',
        favors: 'Algeria',
        favors_prob: 53,
      },
      away_goal: {
        scenario: '若阿根廷先进球',
        prediction: '乾遭逆——客队暂占纯阳，但巳火仍制金水；气运可胶着至下半场',
        favors: 'Argentina',
        favors_prob: 47,
      },
    },
    '☰ 乾卦——巳火当令，阿尔及利亚木火顺天；阿根廷金水受火所制。非卫冕冠军强弱，乃「利贞」与气运顺逆之分。',
    '竞技模型仍偏阿根廷，灵力指数因巳火当令偏客队；二者对照见「模型推演概要」。'
  ),

  m20: buildMystic(
    'm20',
    '午时（11:00-13:00）',
    '火',
    {
      home: {
        team: 'Austria',
        colors: '白+红',
        elements: '金、火',
        wuxing_short: '火金相映，午时同气',
        verdict: '有利',
        verdict_color: '#5BBF8A',
        compat: 67,
        reason:
          '白属金、红属火。午时火旺，火金同气——主队红白与午火共振，如「火在天上」而不过亢，气运顺时。',
        advantage: '午火助红，金火相涵',
      },
      away: {
        team: 'Jordan',
        colors: '白+黑+红',
        elements: '金、水、火',
        wuxing_short: '水火相战，午火克水',
        verdict: '不利',
        verdict_color: '#D95F6A',
        compat: 48,
        reason:
          '黑属水、红属火、白属金。午时火极盛，水被火蒸——客队水气受制，如「未济」之象，气运难伸，与排名无关。',
        disadvantage: '午火克水，水火未济',
      },
      summary: '五行裁定：午时火旺利火金主队；约旦水火相战而水熄——气运偏逆',
    },
    {
      name: '渐卦',
      symbol: '☴',
      number: 53,
      upper: '巽风',
      lower: '艮山',
      quote: '《周易·渐卦》：「女归吉，利贞。」',
      general:
        '风在山，渐进之道——渐主循序渐进、以柔克刚，利于守正积累、不躁进者；非压迫方必胜。',
      advantage_team: 'Austria',
      disadvantage_team: 'Jordan',
      hexagram_analysis:
        '渐卦「鸿渐于陆」：巽风在上，午火生土（间接助金火）。主队气运如风行山上，循序而进；客队水气受制，宜「利贞」守中。',
      match_nature: '循序而进',
      yellow_card_risk: '低至中',
      yellow_card_reason: '渐主循序非缠斗；预计 3–4 张黄牌，来自战术犯规。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '午时火盛，火金顺气者渐进有利' },
        { icon: '☴', label: '巽风', text: '风渐于山，忌躁进；守正积累者吉' },
        { icon: '🔥', label: '午时', text: '火气极盛，水气受制' },
      ],
      early_goal: {
        scenario: '若奥地利先进球',
        prediction: '渐「女归吉」——领先方宜循序控局，忌「鸿渐于陵」式冒进',
        favors: 'Austria',
        favors_prob: 57,
      },
      no_early_goal: {
        scenario: '若前30分钟无进球',
        prediction: '渐卦主静，气运胶着；午火助主队，下半场风渐而进',
        favors: 'Austria',
        favors_prob: 54,
      },
      away_goal: {
        scenario: '若约旦先进球',
        prediction: '渐遭逆——客队暂占「鸿渐于磐」守势；主队火金可循序反扑，气运未终',
        favors: 'Jordan',
        favors_prob: 44,
      },
    },
    '☴ 渐卦——午时火盛，奥地利火金同气循序；约旦水火未济。非力之强弱，乃「利贞」与渐进之道：顺火者吉。',
    '竞技走势与净胜概率见「模型推演概要」；灵力仅论当日气运。'
  ),
};

function getMystic(matchId) {
  const data = MYSTIC[matchId];
  if (!data) throw new Error(`Unknown mystic id: ${matchId}`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getMystic, MYSTIC };
