/**
 * Day 8 mystic blocks — m25–m28
 * 灵力指数仅据队服五行、赛日八字、卦象气运；与 xG/纸面实力无关。
 * mystic_verdict 可一句桥接竞技模型；卦象/五行正文不写球员强弱。
 * 进球高峰：纯玄学 · 宁缺毋滥（卦象只示一段则只给一段）
 */
const DISCLAIMER =
  '以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据';

const BAZI_BASE = {
  year: '丙午年',
  year_element: '火',
  month: '甲午月',
  month_element: '金+火',
  day: '己丑日',
  day_element: '土',
  day_dominant: '土',
  day_summary:
    '己丑日——己土坐丑，土气厚重。《道德经》曰：「上善若水。」丑土当令，宜守中蓄势、厚积薄发；忌土性固执、躁进冒失。非力之大小，乃气之顺逆。',
};

function luckScore(side, hexBonus) {
  let s = side.compat ?? 50;
  if (side.verdict === '有利') s += 4;
  else if (side.verdict === '不利') s -= 6;
  else if (side.verdict === '中性偏利') s += 2;
  else if (side.verdict === '中性偏逆') s -= 2;
  return Math.min(92, Math.max(28, Math.round(s + (hexBonus || 0))));
}

function buildGoalPeak(windows, rationale) {
  const scope = windows.length >= 2
    ? 'both_halves'
    : windows[0].half === 'first'
      ? 'first_half'
      : windows[0].half === 'second'
        ? 'second_half'
        : 'single';
  const titles = {
    both_halves: '上下半场进球高峰 · 娱乐预测',
    first_half: '上半场进球高峰 · 娱乐预测',
    second_half: '下半场进球高峰 · 娱乐预测',
    single: '本场进球高峰 · 娱乐预测',
  };
  const halfLabels = { first: '上半场', second: '下半场', match: '本场' };
  return {
    scope,
    title: titles[scope],
    windows: windows.map(w => ({ label: halfLabels[w.half] || w.half, ...w })),
    periods: windows.map(w => `第 ${w.start_min}-${w.end_min} 分钟`).join(' · '),
    rationale,
    note: '娱乐解读 · 纯玄学参考 · 非赛程或竞技推演',
    logic_hint: '依赛日八字、开球时辰、卦象与五行生克推断；卦象只示一段气运则只给一段，不凑数。',
  };
}

function buildMystic(hourHome, hourElement, wuxing, hex, goalPeak, verdict, modelBridge) {
  const homeBonus = hex.advantage_team === wuxing.home.team ? 6 : hex.disadvantage_team === wuxing.home.team ? -6 : 0;
  const awayBonus = hex.advantage_team === wuxing.away.team ? 6 : hex.disadvantage_team === wuxing.away.team ? -6 : 0;
  return {
    date_bazi: { ...BAZI_BASE, hour_home: hourHome, hour_home_element: hourElement },
    wuxing,
    hexagram: hex,
    goal_peak: goalPeak,
    home_score: luckScore(wuxing.home, homeBonus),
    away_score: luckScore(wuxing.away, awayBonus),
    mystic_verdict: verdict,
    model_bridge: modelBridge,
    disclaimer: DISCLAIMER,
  };
}

const MYSTIC = {
  // 需卦「有孚光亨」——险在前宜待，示上半场一窗
  m25: buildMystic(
    '子时（00:00-02:00）', '水',
    {
      home: {
        team: 'Czechia', colors: '红+白', elements: '火、金', wuxing_short: '金火相涵',
        verdict: '中性偏利', verdict_color: '#C8A96E', compat: 56,
        reason: '红属火、白属金。己丑土日厚重，子时水旺——金生水、水泄金，如「云上于天」有待而发。火金相涵宜守中破局，非关纸面强弱，乃气运蓄势。',
        advantage: '子时水气泄金生火，稳后渐明',
      },
      away: {
        team: 'South Africa', colors: '绿+黄', elements: '木、土', wuxing_short: '木土相杂',
        verdict: '中性偏逆', verdict_color: '#C8A96E', compat: 44,
        reason: '绿属木、黄属土。丑土当令下木气受制——如「木入土中」，宜守不宜攻；子时水气虽旺，木土未齐。',
        disadvantage: '气运未齐，转换需待丑土后段',
      },
      summary: '五行裁定：子时水旺利金火蓄势之队；南非木土相杂——气运偏守，先破局者占先机',
    },
    {
      name: '水天需', symbol: '☵☰', number: 5, upper: '坎水', lower: '乾天',
      quote: '《周易·需卦》：「有孚，光亨，贞吉。」',
      general: '需卦——云上于天，有险在前宜待时而动；先顺天时破局者得利，忌躁进。',
      advantage_team: 'Czechia', disadvantage_team: 'South Africa',
      hexagram_analysis: '需卦「利涉大川」：坎水在上，乾天在下，气运宜「待」后而动。子时水旺，卦未明示下半场第二高峰。',
      match_nature: '有险在前 · 宜慎行', yellow_card_risk: '中',
      yellow_card_reason: '需卦主等待非缠斗；坎水险象下战术犯规略多，预计中等纪律风险。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '土水相激，子时水旺——先破局者占「光亨」之势' },
        { icon: '⏱', label: '进球高峰段', text: '第 22-38 分钟（需卦「云上于天」、子时水转明——卦只示此一段）' },
        { icon: '🟨', label: '纪律', text: '坎水主险，领先后阻截犯规略多' },
      ],
      early_goal: {
        scenario: '若捷克先进球', prediction: '需象渐通——金火相涵，追加窗口在 28-42 分钟；忌「需」而未济时躁进。',
        favors: 'Czechia', favors_prob: 58,
      },
      no_early_goal: {
        scenario: '若前 30 分钟无进球', prediction: '需卦主「待」——丑土蓄势；35-50 分钟水气渐移，先破局者得利。',
        favors: 'Czechia', favors_prob: 52,
      },
      away_goal: {
        scenario: '若南非偷袭破门', prediction: '需遭逆——木土险地偶可惊雷；主队需以金火耐心反扑，60\' 后土气助火。',
        favors: 'Czechia', favors_prob: 50,
      },
    },
    buildGoalPeak(
      [{ half: 'first', start_min: 22, end_min: 38, hex_reason: '需卦「云上于天」，坎水渐通', time_reason: '子时水旺，气由待转亨' }],
      '己丑土日厚重，子时水气当令；需卦主「有孚光亨」——气运集中于待而后发一段，卦象未明示下半场第二高峰。宁缺毋滥，只示上半场一窗。',
    ),
    '捷克金火相涵，南非木土相杂——子时水旺，先顺天时破局者占「光亨」。',
    'xG 1.48-0.95 略优捷克，Tau 速度反击是唯一变数。',
  ),

  // 谦卦「卑以自牧」——丑时土旺，示下半场一窗
  m26: buildMystic(
    '丑时（02:00-04:00）', '土',
    {
      home: {
        team: 'Switzerland', colors: '红+白', elements: '火、金', wuxing_short: '金火相涵',
        verdict: '有利', verdict_color: '#5BBF8A', compat: 62,
        reason: '红属火、白属金。丑时土旺与己丑日同气——土能生金，金火相涵如「地中有山」，谦而能进。《说卦》坤为地，主队服色得丑土之承。',
        advantage: '丑土稳金，组织之气渐聚',
      },
      away: {
        team: 'Bosnia and Herzegovina', colors: '蓝+白', elements: '水、金', wuxing_short: '金水相生',
        verdict: '中性偏利', verdict_color: '#C8A96E', compat: 52,
        reason: '蓝属水、白属金。金水相生本吉，然丑土当令克水——如「金沉土中」，宜低位守中、暗流待发。',
        advantage: '金水守势，定位球为暗流',
      },
      summary: '五行裁定：丑土当令利金火相涵之瑞士；波黑金水相生但受土克——气运近而不齐',
    },
    {
      name: '地山谦', symbol: '☷☶', number: 15, upper: '坤地', lower: '艮山',
      quote: '《周易·谦卦》：「谦，亨，君子有终。」',
      general: '谦卦——地中有山，卑以自牧；宜守中出奇，忌矜夸躁进。',
      advantage_team: 'Switzerland', disadvantage_team: 'Bosnia and Herzegovina',
      hexagram_analysis: '谦卦「裒多益寡」：坤地承山，丑土当令气运后段渐动；艮山主止，卦示稳后破局一段。',
      match_nature: '谦受益 · 主队渐优', yellow_card_risk: '低至中',
      yellow_card_reason: '谦卦主守正，低位阻截略多；预计 3-4 张黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '丑土当令，金火相涵者渐占「亨」' },
        { icon: '⏱', label: '进球高峰段', text: '第 58-75 分钟（谦卦「君子有终」、丑土后段土旺助金——卦只示此一段）' },
        { icon: '🟨', label: '纪律', text: '谦卦重守正，黄牌来自低位阻截' },
      ],
      early_goal: {
        scenario: '若瑞士先进球', prediction: '谦象全现——丑土助金，追加窗口在 65-78 分钟；忌轻敌触「满招损」。',
        favors: 'Switzerland', favors_prob: 60,
      },
      no_early_goal: {
        scenario: '若前 35 分钟无进球', prediction: '谦卦宜「卑以自牧」——0-0 符合卦象；下半场 50-65 分钟为破局段。',
        favors: 'Draw', favors_prob: 46,
      },
      away_goal: {
        scenario: '若波黑定位球破门', prediction: '谦遭逆——金水暗流；瑞士需以金火相涵耐心反扑，70\' 后土气助金。',
        favors: 'Switzerland', favors_prob: 54,
      },
    },
    buildGoalPeak(
      [{ half: 'second', start_min: 58, end_min: 75, hex_reason: '谦卦「君子有终」，坤地承山后段气动', time_reason: '丑时土旺后段，土能生金' }],
      '丑时与己丑日土气叠旺，谦卦主「卑以自牧」——气运集中于稳阵后破局一段，卦象未明示上半场高峰。宁缺毋滥，只示下半场一窗。',
    ),
    '瑞士金火相涵，波黑金水守中——丑土当令，谦而能进者占「亨」。',
    'xG 1.55-1.05 组织占优，Džeko 定位球是经典冷门路径。',
  ),

  // 泰卦「小往大来」——卯时木气，示上下双窗
  m27: buildMystic(
    '卯时（06:00-08:00）', '木',
    {
      home: {
        team: 'Canada', colors: '红+白', elements: '火、金', wuxing_short: '金火相涵',
        verdict: '有利', verdict_color: '#5BBF8A', compat: 64,
        reason: '红属火、白属金。卯时木气初升，木生火——如「天地交泰」。《道德经》「小国寡民」而东道主气运聚于主场，金火得木助而明。',
        advantage: '卯木生火，东道主气运渐盛',
      },
      away: {
        team: 'Qatar', colors: '枣红+白', elements: '火、金', wuxing_short: '火金内敛',
        verdict: '中性偏逆', verdict_color: '#C8A96E', compat: 46,
        reason: '枣红属火、白属金。火金相涵但己丑土日厚重，卯木泄火气——如「火在木上」，宜守不宜攻。',
        disadvantage: '气运偏守，低位可延一时',
      },
      summary: '五行裁定：卯木生火利东道主；卡塔尔火金内敛——气运偏逆，宜守',
    },
    {
      name: '地天泰', symbol: '☷☰', number: 11, upper: '坤地', lower: '乾天',
      quote: '《周易·泰卦》：「小往大来，吉亨。」',
      general: '泰卦——天地交泰，小往大来；顺时者亨通，忌骄泰致否。',
      advantage_team: 'Canada', disadvantage_team: 'Qatar',
      hexagram_analysis: '泰卦「天地交而万物通」：卯时木气助火，上下气运各有一段——坤地承天，前半程交泰，后段气泄再动。',
      match_nature: '小往大来 · 东道主顺时', yellow_card_risk: '中',
      yellow_card_reason: '泰卦主通泰非粗野；高位压迫致战术犯规，预计中等黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '卯木生火，天地交泰——顺时者「吉亨」' },
        { icon: '⏱', label: '进球高峰段', text: '第 18-32 分钟（泰卦「小往大来」）及第 62-78 分钟（坤地承天、后段气再动）' },
        { icon: '🟨', label: '纪律', text: '泰主通泰，黄牌来自压迫阻截' },
      ],
      early_goal: {
        scenario: '若加拿大先进球', prediction: '泰象全现——卯木助火，追加窗口在 22-38 分钟；忌「泰」极生否。',
        favors: 'Canada', favors_prob: 64,
      },
      no_early_goal: {
        scenario: '若前 25 分钟无进球', prediction: '卯木主静，气运蓄势；30-45 分钟为第一次破局窗口。',
        favors: 'Canada', favors_prob: 58,
      },
      away_goal: {
        scenario: '若卡塔尔偷袭破门', prediction: '泰遭逆——火金守中偶可惊雷；主队需木火相生耐心反扑，55\' 后气运回。',
        favors: 'Canada', favors_prob: 56,
      },
    },
    buildGoalPeak(
      [
        { half: 'first', start_min: 18, end_min: 32, hex_reason: '泰卦「小往大来」，天地初交', time_reason: '卯时木气生火，气由静转亨' },
        { half: 'second', start_min: 62, end_min: 78, hex_reason: '坤地承天，后段气泄再动', time_reason: '卯木后段仍助火' },
      ],
      '卯时木气初升，己丑土日宜守中；泰卦「小往大来」明示上下两段气运——初交段破局，后段坤地承天再动。卦象双段清晰，故示双窗。',
    ),
    '加拿大卯木生火，卡塔尔火金守中——天地交泰，东道主顺时者「吉亨」。',
    'xG 1.62-0.88 碾压，温哥华主场+Davies 左路是核心。',
  ),

  // 同人卦「二人同心」——巳时火旺，示双窗对攻
  m28: buildMystic(
    '巳时（09:00-11:00）', '火',
    {
      home: {
        team: 'Mexico', colors: '绿+白+红', elements: '木、金、火', wuxing_short: '火土相杂',
        verdict: '中性偏利', verdict_color: '#C8A96E', compat: 54,
        reason: '绿属木、白属金、红属火。巳时火气当令，木生火、火土相杂——如「天与火同」，主场夜场气运聚于火。',
        advantage: '巳火助红绿，主场气势可延',
      },
      away: {
        team: 'South Korea', colors: '红+蓝+白', elements: '火、水、金', wuxing_short: '金水相济',
        verdict: '中性偏利', verdict_color: '#C8A96E', compat: 56,
        reason: '红属火、蓝属水、白属金。巳时火旺，金水相济如「火在水上」——气运相近，远射为暗流。',
        advantage: '巳火不专主一方，金水可济',
      },
      summary: '五行裁定：巳火当令双方皆沾火气；墨西哥主场略占「同人」之势，韩国金水相济——气运近而不齐',
    },
    {
      name: '天火同人', symbol: '☰☲', number: 13, upper: '乾天', lower: '离火',
      quote: '《周易·同人卦》：「同人于野，亨。」',
      general: '同人卦——天与火同，二人同心；利对攻开放之局，忌各怀心思。',
      advantage_team: 'Mexico', disadvantage_team: 'South Korea',
      hexagram_analysis: '同人「柔得位得中」：巳火当令，离火在下、乾天在上，上下气运分明——前半程同心破局，后段火金相克气转。',
      match_nature: '同人于野 · 胶着对攻', yellow_card_risk: '中',
      yellow_card_reason: '同人主开放非粗野；对攻节奏下战术犯规，预计中等黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '巳火当令，双方火气相近——气运近而不齐' },
        { icon: '⏱', label: '进球高峰段', text: '第 20-36 分钟（同人「于野」、火气初盛）及第 68-84 分钟（离火后段、乾天再动）' },
        { icon: '🟨', label: '纪律', text: '对攻局，黄牌来自 tactical 阻截' },
      ],
      early_goal: {
        scenario: '若墨西哥先进球', prediction: '同人「于野亨」——巳火助势，追加窗口在 25-40 分钟；忌领先后「同人」散。',
        favors: 'Mexico', favors_prob: 54,
      },
      no_early_goal: {
        scenario: '若前 30 分钟无进球', prediction: '巳火主旺，0-0 仍可期；下半场 40-55 分钟第一次破局窗口升。',
        favors: 'Draw', favors_prob: 50,
      },
      away_goal: {
        scenario: '若韩国先进球', prediction: '同人逆象——金水相济反扑；墨西哥需火土相杂耐心，65\' 后主场气运回。',
        favors: 'South Korea', favors_prob: 52,
      },
    },
    buildGoalPeak(
      [
        { half: 'first', start_min: 20, end_min: 36, hex_reason: '同人「于野」，离火初盛', time_reason: '巳时火气当令，气运易涌' },
        { half: 'second', start_min: 68, end_min: 84, hex_reason: '乾天再动，后段火金相克', time_reason: '巳火后段仍旺，气由同转变' },
      ],
      '巳时火气当令，同人卦「于野亨」明示对攻两段气运——初段同心破局，后段乾天再动。卦象双段清晰，故示上下双窗。',
    ),
    '墨西哥火土相杂，韩国金水相济——巳火当令，气运相近，平局空间不可低估。',
    'xG 1.52-1.32 势均力敌，孙兴慜+李康仁远射是韩国最大变数。',
  ),
};

function getMystic(matchId) {
  const m = MYSTIC[matchId];
  if (!m) throw new Error(`Unknown mystic: ${matchId}`);
  return JSON.parse(JSON.stringify(m));
}

module.exports = { getMystic, MYSTIC, buildGoalPeak };
