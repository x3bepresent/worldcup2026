/**
 * Day 7 mystic blocks — m21–m24
 * 进球高峰：纯玄学 · 宁缺毋滥（卦象只示一段则只给一段）
 */
const DISCLAIMER =
  '以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据';

const BAZI_BASE = {
  year: '丙午年',
  year_element: '火',
  month: '甲午月',
  month_element: '金+火',
  day: '戊子日',
  day_element: '土+水',
  day_dominant: '土',
  day_summary:
    '戊子日——戊土坐子，土水相激。《道德经》曰：「知人者智，自知者明。」子水当令，宜守中蓄势；忌土性固执。非力之大小，乃气之顺逆。',
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
  // 晋卦「明出地上」——上下气运各有一段，示双窗
  m23: buildMystic(
    '丑时（01:00-03:00）', '土',
    {
      home: { team: 'Portugal', colors: '红+绿', elements: '火、木', wuxing_short: '火木相生', verdict: '有利', verdict_color: '#5BBF8A', compat: 68, reason: '红属火、绿属木。戊子日土水相激，丑时土稳火——火木相生如「木火通明」，《说卦》离为火，主队服色与丑时同频。', advantage: '丑土稳火，顺时而聚' },
      away: { team: 'Congo DR', colors: '红+黄+蓝', elements: '火、土、水', wuxing_short: '火土相杂', verdict: '中性偏逆', verdict_color: '#C8A96E', compat: 42, reason: '红黄蓝三色相杂，子水当令下火性易散——如「火在水上」，宜守不宜攻。', disadvantage: '气运未齐，转换需待时' },
      summary: '五行裁定：火木相生利葡萄牙；刚果金火土相杂——气运近而不齐',
    },
    {
      name: '火地晋', symbol: '☲☷', number: 35, upper: '离火', lower: '坤地',
      quote: '《周易·晋卦》：「明出地上，晋。」',
      general: '晋卦——火光照地，宜进取而不躁；明出地上，先顺天时破局者得利。',
      advantage_team: 'Portugal', disadvantage_team: 'Congo DR',
      hexagram_analysis: '晋卦「康侯用锡马蕃庶」：离火在下上升，如丑时土中藏火渐明。前半程宜亮局；坤地承火，后段气运再动。',
      match_nature: '明出地上 · 顺火者晋', yellow_card_risk: '中',
      yellow_card_reason: '晋卦非缠斗之象，离火性急则战术犯规略多；预计中等纪律风险。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '火木相生，顺丑时土气者先明后稳' },
        { icon: '⏱', label: '进球高峰段', text: '第 18-32 分钟（晋卦「明出地上」）及第 62-78 分钟（坤地承火、丑土后段助火）' },
        { icon: '🟨', label: '纪律', text: '离火性急，领先后易有阻截之象' },
      ],
      early_goal: { scenario: '若葡萄牙先进球', prediction: '晋象全现——火地相生，追加进球窗口在 20-35 分钟；忌「明出」后躁进触未济。', favors: 'Portugal', favors_prob: 62 },
      no_early_goal: { scenario: '若前 30 分钟无进球', prediction: '丑土主静，气运蓄势；第 32-45 分钟子水渐移，先破局者占「明出」之势。', favors: 'Portugal', favors_prob: 55 },
      away_goal: { scenario: '若刚果金偷袭破门', prediction: '晋遭逆——坎水暗流；主队需以火木相生耐心反扑，65 分钟后土气助火。', favors: 'Portugal', favors_prob: 52 },
    },
    buildGoalPeak(
      [
        { half: 'first', start_min: 18, end_min: 32, hex_reason: '晋卦「明出地上」，离火渐明', time_reason: '丑时土中藏火，气由静转明' },
        { half: 'second', start_min: 62, end_min: 78, hex_reason: '坤地承火，后段气泄再动', time_reason: '丑时后段土旺助火' },
      ],
      '戊子日土水相激，丑时土气稳火；晋卦明示「明出地上」——上半场离火渐明为首次气运窗口，坤地承火、丑土后段助火为第二次。上下两段皆有卦象依据，故示双窗。',
    ),
    '葡萄牙火木相生，刚果金气运未齐——顺丑时土火者先明后稳。',
    'xG 2.15-0.72 碾压，Wissa 反击是唯一变数。',
  ),

  // 既济「初吉终乱」——上下气运分明，示双窗
  m22: buildMystic(
    '寅时（04:00-06:00）', '木',
    {
      home: { team: 'England', colors: '白+红', elements: '金、火', wuxing_short: '金火相涵', verdict: '中性偏利', verdict_color: '#C8A96E', compat: 56, reason: '白属金、红属火。寅时木气初升，金火相涵——如「火在天上」，宜稳不宜急。', advantage: '寅木泄火，控节奏则吉' },
      away: { team: 'Croatia', colors: '红+白+蓝', elements: '火、金、水', wuxing_short: '水火既济', verdict: '中性偏利', verdict_color: '#C8A96E', compat: 54, reason: '红白蓝三色，水火既济。坎水如老泉深流，大赛气运偏守后动。', advantage: '水气在后，后段渐盛' },
      summary: '五行裁定：寅时木气利守势；英克气运相近，平局空间不可低估',
    },
    {
      name: '水火既济', symbol: '☵☲', number: 63, upper: '坎水', lower: '离火',
      quote: '《周易·既济卦》：「初吉终乱。」',
      general: '既济——事已成而需防终乱；先稳后变，后段水气转盛。',
      advantage_team: 'England', disadvantage_team: 'Croatia',
      hexagram_analysis: '既济「水在火上，初吉终乱」：寅时木泄火气，上半场宜试探守中；坎水在后，后段水气渐盛，气运由静转乱。',
      match_nature: '初吉终乱 · 胶着局', yellow_card_risk: '中',
      yellow_card_reason: '既济主慎，非粗野之卦；战术阻截致中等黄牌之象。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '寅时木气，双方守中待发——气运近而不齐' },
        { icon: '⏱', label: '进球高峰段', text: '第 22-38 分钟（寅木动、初吉段气开）及第 72-88 分钟（坎水当令、终乱段气转）' },
        { icon: '🟨', label: '纪律', text: '既济主慎，黄牌来自 tactical 阻截' },
      ],
      early_goal: { scenario: '若英格兰先进球', prediction: '既济「初吉」——领先方忌躁进；坎水在后，75\' 后气运变数升。', favors: 'England', favors_prob: 54 },
      no_early_goal: { scenario: '若前 35 分钟无进球', prediction: '寅木主静，0-0 符合卦象；下半场 40-55 分钟为第一次破局窗口。', favors: 'Draw', favors_prob: 48 },
      away_goal: { scenario: '若克罗地亚先进球', prediction: '既济逆象——水气复萌；英格兰金火需耐心，60-75 分钟反扑窗口。', favors: 'Croatia', favors_prob: 52 },
    },
    buildGoalPeak(
      [
        { half: 'first', start_min: 22, end_min: 38, hex_reason: '既济「初吉」，离火试探后气开', time_reason: '寅时木气初动，动而后生气运易涌' },
        { half: 'second', start_min: 72, end_min: 88, hex_reason: '既济「终乱」，坎水当令', time_reason: '后段水气渐盛，气运由静转乱' },
      ],
      '寅时木气初动，戊子日宜守中；既济卦「初吉终乱」明示前后两段气运——初吉段试探后气开，终乱段坎水当令。卦象双段清晰，故示上下双窗。',
    ),
    '英格兰金火相涵，克罗地亚水火既济——气运相近，平局空间不可低估。',
    'xG 1.62-1.18 略优英格兰，2018 半决赛心理是变量。',
  ),

  // 师卦「以正合」——气运集中一段，宁缺毋滥只示上半场一窗
  m21: buildMystic(
    '辰时（07:00-09:00）', '土',
    {
      home: { team: 'Ghana', colors: '红+黄+绿', elements: '火、土、木', wuxing_short: '土火相杂', verdict: '中性偏利', verdict_color: '#C8A96E', compat: 55, reason: '红黄绿三色，辰时土气当令。土火相杂，木可破土——宜正合破局。', advantage: '辰土稳阵，木火破土' },
      away: { team: 'Panama', colors: '红+蓝+白', elements: '火、水、金', wuxing_short: '金水相生', verdict: '不利', verdict_color: '#E85D5D', compat: 38, reason: '金水相生但戊子日土水相激，水气被土克——如「泽无水」，守势难久。', disadvantage: '气运偏逆，险地偶可惊雷' },
      summary: '五行裁定：辰时土气利加纳；巴拿马金水被土克——气运偏逆',
    },
    {
      name: '地水师', symbol: '☷☵', number: 7, upper: '坤地', lower: '坎水',
      quote: '《周易·师卦》：「师，贞，丈人吉。」',
      general: '师卦——以正合，丈人吉；宜正合破局，忌师出无名。',
      advantage_team: 'Ghana', disadvantage_team: 'Panama',
      hexagram_analysis: '师卦「地中有水」：辰时土旺，正合之气集中一段；坎水伏地，卦未明示后段第二高峰。',
      match_nature: '以正合 · 主队渐优', yellow_card_risk: '低至中',
      yellow_card_reason: '师卦主纪律，低位阻截略多；预计 3-4 张。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '辰土当令，利于正合破局一方' },
        { icon: '⏱', label: '进球高峰段', text: '第 25-42 分钟（辰土稳阵后气运破土——师卦只示此一段）' },
        { icon: '🟨', label: '纪律', text: '师卦重纪律，黄牌来自低位阻截' },
      ],
      early_goal: { scenario: '若加纳先进球', prediction: '师象全现——辰土助火，追加窗口在 30-45 分钟。', favors: 'Ghana', favors_prob: 58 },
      no_early_goal: { scenario: '若前 30 分钟无进球', prediction: '师卦宜「贞」——守正待机，35-50 分钟为破局段。', favors: 'Ghana', favors_prob: 52 },
      away_goal: { scenario: '若巴拿马险地破门', prediction: '师遭逆——地水险地；加纳需以土火正合反扑，60\' 后气运回。', favors: 'Ghana', favors_prob: 50 },
    },
    buildGoalPeak(
      [
        { half: 'first', start_min: 25, end_min: 42, hex_reason: '师卦「以正合」，地中有水、稳后破土', time_reason: '辰时土气当令，气运集中一段' },
      ],
      '辰时土气当令，师卦主「贞」与正合——气运集中於土稳后破土一段，卦象未明示下半场第二高峰。宁缺毋滥，只示上半场一窗。',
    ),
    '加纳土火相杂，巴拿马气运偏逆——辰土正合，先动气运者占「丈人吉」。',
    'xG 1.55-0.82 占优，加纳大赛慢热需防。',
  ),

  // 大有「元亨」——火气一处独旺，宁缺毋滥只示上半场一窗
  m24: buildMystic(
    '巳时（10:00-12:00）', '火',
    {
      home: { team: 'Uzbekistan', colors: '白+蓝+绿', elements: '金、水、木', wuxing_short: '金水相生', verdict: '中性偏利', verdict_color: '#C8A96E', compat: 52, reason: '白蓝绿属金水木。地气上升，金水相生宜守中待变。', advantage: '地气守中，可延一时' },
      away: { team: 'Colombia', colors: '黄+红+蓝', elements: '土、火、水', wuxing_short: '火土相生', verdict: '有利', verdict_color: '#5BBF8A', compat: 66, reason: '巳时火气当令，火土相生如「火在天上」——顺天时者元亨。', advantage: '巳火助火土，宜早顺天' },
      summary: '五行裁定：巳火当令利哥伦比亚；乌兹别克金水守中可延一时',
    },
    {
      name: '火天大有', symbol: '☲☰', number: 14, upper: '离火', lower: '乾天',
      quote: '《周易·大有卦》：「元亨。」',
      general: '大有——火在天上，元亨；顺天时者得利，忌亢龙有悔。',
      advantage_team: 'Colombia', disadvantage_team: 'Uzbekistan',
      hexagram_analysis: '大有「自天佑之」：巳火当令，离火在天，气运一处独旺；卦象未示后段再动第二高峰。',
      match_nature: '火在天上 · 客队顺时', yellow_card_risk: '低',
      yellow_card_reason: '大有主顺遂，非缠斗之卦；预计黄牌偏少。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '巳火当令，利于火土相生一方' },
        { icon: '⏱', label: '进球高峰段', text: '第 15-30 分钟（大有「火在天上」、巳火初盛——卦只示此一段）' },
        { icon: '🟨', label: '纪律', text: '大有非缠斗，黄牌偏少' },
      ],
      early_goal: { scenario: '若哥伦比亚先进球', prediction: '大有元亨——追加窗口在 25-40 分钟；忌轻敌触「亢龙有悔」。', favors: 'Colombia', favors_prob: 65 },
      no_early_goal: { scenario: '若前 25 分钟无进球', prediction: '守中延局；30-45 分钟巳火仍旺，破局概率升。', favors: 'Colombia', favors_prob: 58 },
      away_goal: { scenario: '若乌兹别克偷袭破门', prediction: '大有遭逆——地气上升偶可惊雷；客队需火天相生反扑，55\' 前宜破局。', favors: 'Colombia', favors_prob: 56 },
    },
    buildGoalPeak(
      [
        { half: 'first', start_min: 15, end_min: 30, hex_reason: '大有「火在天上」，元亨气一处独旺', time_reason: '巳时火气当令，离火初盛' },
      ],
      '巳时火气当令，大有卦「火在天上、元亨」——气运集中於开场离火渐盛一段，卦未明示后段第二高峰。宁缺毋滥，只示上半场一窗。',
    ),
    '哥伦比亚火土相生，乌兹别克金水守中——巳火顺天者元亨。',
    'xG 0.88-1.78 哥伦比亚碾压，海拔是乌兹别克唯一隐性优势。',
  ),
};

function getMystic(matchId) {
  const m = MYSTIC[matchId];
  if (!m) throw new Error(`Unknown mystic: ${matchId}`);
  return JSON.parse(JSON.stringify(m));
}

module.exports = { getMystic, MYSTIC, buildGoalPeak };
