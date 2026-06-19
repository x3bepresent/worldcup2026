/**
 * Day 9 mystic blocks — m29–m32
 * 灵力指数据队服五行、赛日八字、开球时辰、卦象；与 xG 无关。
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
    '己丑日——己土坐丑，土气厚重。《道德经》曰：「知常曰明。」丑土当令，宜循序渐进、忌半场冒进；非力之大小，乃气之顺逆。',
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
  // 革卦「己日乃革」——寅时木气，示上半场破局一窗
  m32: buildMystic(
    '寅时（03:00-05:00）', '木',
    {
      home: {
        team: 'USA', colors: '红+白+蓝', elements: '火、金、水', wuxing_short: '火金水杂',
        verdict: '有利', verdict_color: '#5BBF8A', compat: 62,
        reason: '红属火、白属金、蓝属水。寅时木气初升，木生火——西雅图水气相涵，如「泽中有火」。《道德经》「上善若水」，东道主顺寅木而进。',
        advantage: '寅木生火，主场水气相涵',
      },
      away: {
        team: 'Australia', colors: '金+绿', elements: '金、木', wuxing_short: '金木相杂',
        verdict: '中性偏逆', verdict_color: '#C8A96E', compat: 44,
        reason: '金绿相杂。丑土日厚重，寅木泄金——如「木入金中」，宜低位守中、忌早段失球。',
        disadvantage: '金气受寅木所泄，守势需稳',
      },
      summary: '五行裁定：寅木生火利东道主；澳大利亚金木守中——气运偏逆，早段破局者占先机',
    },
    {
      name: '泽火革', symbol: '☱☲', number: 49, upper: '兑泽', lower: '离火',
      quote: '《周易·革卦》：「己日乃革，元亨利贞。」',
      general: '革卦——泽中有火，除旧布新；宜早段主动变革，忌守旧拖延。',
      advantage_team: 'USA', disadvantage_team: 'Australia',
      hexagram_analysis: '革卦「水火相息」：寅时木助火，兑泽在上——气运宜上半场主动破局一段，卦未明示后段第二高峰。',
      match_nature: '除旧布新 · 宜早动', yellow_card_risk: '中',
      yellow_card_reason: '革卦主变革非粗野；高位压迫致战术犯规，预计 3-4 张黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '寅木生火，革故鼎新——先动者占「元亨」' },
        { icon: '⏱', label: '进球高峰段', text: '第 25-42 分钟（革卦「己日乃革」、寅木助火——卦只示此一段）' },
        { icon: '🟨', label: '纪律', text: '革主主动，黄牌来自压迫阻截' },
      ],
      early_goal: {
        scenario: '若美国先进球', prediction: '革象全现——寅木助火，追加窗口在 30-45 分钟；忌领先后守旧不革。',
        favors: 'USA', favors_prob: 62,
      },
      no_early_goal: {
        scenario: '若前 30 分钟无进球', prediction: '革卦宜「待己日」——0-0 仍可期；35-50 分钟水气渐移，先破局者得利。',
        favors: 'USA', favors_prob: 55,
      },
      away_goal: {
        scenario: '若澳大利亚偷袭破门', prediction: '革遭逆——金木守中偶可惊雷；主队需水火相息耐心反扑，60\' 后寅木仍助火。',
        favors: 'USA', favors_prob: 52,
      },
    },
    buildGoalPeak(
      [{ half: 'first', start_min: 25, end_min: 42, hex_reason: '革卦「己日乃革」，寅木助火', time_reason: '寅时木气生火，宜上半场破局' }],
      '寅时木气初升，革卦主「除旧布新」——气运集中于上半场主动一段，卦象未明示下半场第二高峰。宁缺毋滥，只示一窗。',
    ),
    '美国寅木生火，澳大利亚金木守中——革故鼎新，东道主宜早段破局。',
    'xG 1.68-0.92 支持东道主，Pulisic 宽度 vs 澳大利亚低位是核心。',
  ),

  // 涣卦「王假有庙」——卯时木气，示下半场一窗
  m30: buildMystic(
    '卯时（06:00-08:00）', '木',
    {
      home: {
        team: 'Scotland', colors: '深蓝+白', elements: '水、金', wuxing_short: '金水相生',
        verdict: '中性偏利', verdict_color: '#C8A96E', compat: 54,
        reason: '深蓝属水、白属金。卯时木气当令，金生水——如「风行水上」。《道德经》「柔弱胜刚强」，苏格兰水金顺卯木而流。',
        advantage: '卯木泄水气，金水相济宜稳守反击',
      },
      away: {
        team: 'Morocco', colors: '红+绿', elements: '火、木', wuxing_short: '火木相济',
        verdict: '中性偏利', verdict_color: '#C8A96E', compat: 56,
        reason: '红属火、绿属木。卯时木旺，火木相生——如「木火通明」，然丑土日厚重，宜守中待变。',
        advantage: '卯木助火木，反击为暗流',
      },
      summary: '五行裁定：卯木当令双方皆沾木气；苏格兰金水相济、摩洛哥火木相生——气运近而不齐，均分乱局宜稳',
    },
    {
      name: '风水涣', symbol: '☴☵', number: 59, upper: '巽风', lower: '坎水',
      quote: '《周易·涣卦》：「涣，亨。王假有庙，利涉大川。」',
      general: '涣卦——风行水上，离散中藏通亨；均势局宜后段破局，忌早段冒进。',
      advantage_team: null, disadvantage_team: null,
      hexagram_analysis: '涣卦「利涉大川」：卯时木气助风，坎水在下——气运后段渐动，卦示稳阵后一段破局。',
      match_nature: '风行水上 · 均势待变', yellow_card_risk: '中',
      yellow_card_reason: '涣卦主流通非缠斗；McTominay/Hakimi 对位下战术犯规，预计中等黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '卯木当令，双方气运相近——后段「涉大川」者得利' },
        { icon: '⏱', label: '进球高峰段', text: '第 72-88 分钟（涣卦「利涉大川」、坎水后段水气再动——卦只示此一段）' },
        { icon: '🟨', label: '纪律', text: '均势局，黄牌来自中场绞杀' },
      ],
      early_goal: {
        scenario: '若苏格兰先进球', prediction: '涣象渐通——金水守中，追加窗口在 76-90 分钟；忌领先后「涣」散。',
        favors: 'Scotland', favors_prob: 58,
      },
      no_early_goal: {
        scenario: '若前 35 分钟无进球', prediction: '涣卦宜「王假有庙」——0-0 符合均势；下半场 55-70 分钟为第一次破局窗口。',
        favors: 'Draw', favors_prob: 48,
      },
      away_goal: {
        scenario: '若摩洛哥先进球', prediction: '涣遭逆——火木反击；苏格兰需金水相济耐心，70\' 后坎水助反扑。',
        favors: 'Morocco', favors_prob: 54,
      },
    },
    buildGoalPeak(
      [{ half: 'second', start_min: 72, end_min: 88, hex_reason: '涣卦「利涉大川」，坎水后段再动', time_reason: '卯时后段木泄水气，后段破局' }],
      '卯时木气当令，涣卦主「风行水上」——均势局气运集中于后段一段，卦象未明示上半场高峰。宁缺毋滥，只示下半场一窗。',
    ),
    '苏格兰金水相济，摩洛哥火木相生——卯木当令，均分乱局宜稳守反击。',
    'xG 1.35-1.28 几乎均势，Morocco -0.5 浅盘，平局与 1 球差均需保留。',
  ),

  // 大有卦「自天佑之」——巳时火旺，示上下双窗
  m29: buildMystic(
    '巳时（09:00-11:00）', '火',
    {
      home: {
        team: 'Brazil', colors: '黄+绿+蓝', elements: '土、木、水', wuxing_short: '土木水杂',
        verdict: '有利', verdict_color: '#5BBF8A', compat: 68,
        reason: '黄属土、绿属木、蓝属水。巳时火气当令，木生火、火生土——如「火在天上」。《道德经》「以其不自生」，巴西火土旺盛顺天时。',
        advantage: '巳火助木火，热门宜早段破局',
      },
      away: {
        team: 'Haiti', colors: '蓝+红', elements: '水、火', wuxing_short: '水火既济而未济',
        verdict: '不利', verdict_color: '#D95F6A', compat: 38,
        reason: '蓝属水、红属火。巳时火旺克水——如「火在水上」，宜低位守中、忌与火争锋。',
        disadvantage: '水火相激而火占上风，气运偏逆',
      },
      summary: '五行裁定：巳火当令大利火土之巴西；海地水火相杂——气运偏逆，宜守不宜攻',
    },
    {
      name: '火天大有', symbol: '☲☰', number: 14, upper: '离火', lower: '乾天',
      quote: '《周易·大有卦》：「自天佑之，吉无不利。」',
      general: '大有卦——火在天上，顺天者昌；热门宜早段破局，忌骄泰失势。',
      advantage_team: 'Brazil', disadvantage_team: 'Haiti',
      hexagram_analysis: '大有「柔得位乎外而上应乎五」：巳火当令，上下气运各有一段——前半程火盛破局，后段乾天再动。',
      match_nature: '自天佑之 · 热门顺时', yellow_card_risk: '低',
      yellow_card_reason: '大有主通泰非粗野；海地低位消耗大，预计 2-3 张黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '巳火当令，火在天上——顺时者「吉无不利」' },
        { icon: '⏱', label: '进球高峰段', text: '第 28-44 分钟（大有「火在天上」）及第 70-85 分钟（乾天再动、后段气泄）' },
        { icon: '🟨', label: '纪律', text: '压制局，黄牌来自低位阻截' },
      ],
      early_goal: {
        scenario: '若巴西先进球', prediction: '大有全现——巳火助势，追加窗口在 32-48 分钟；忌「大有」极生骄泰。',
        favors: 'Brazil', favors_prob: 68,
      },
      no_early_goal: {
        scenario: '若前 25 分钟无进球', prediction: '巳火主旺，0-0 仍可期；30-45 分钟为第一次破局窗口。',
        favors: 'Brazil', favors_prob: 62,
      },
      away_goal: {
        scenario: '若海地偷袭破门', prediction: '大有逆象——水火偶可惊雷；巴西需火土旺盛耐心反扑，55\' 后气运回。',
        favors: 'Brazil', favors_prob: 58,
      },
    },
    buildGoalPeak(
      [
        { half: 'first', start_min: 28, end_min: 44, hex_reason: '大有「火在天上」，巳火初盛', time_reason: '巳时火气当令，宜上半场破局' },
        { half: 'second', start_min: 70, end_min: 85, hex_reason: '乾天再动，后段气泄再开', time_reason: '领先方继续进攻，后段仍有空间' },
      ],
      '巳时火气当令，大有卦「自天佑之」明示上下两段气运——初段火盛破局，后段乾天再动。卦象双段清晰，故示双窗。',
    ),
    '巴西火土旺盛，海地水火偏弱——巳火当令，热门宜早段破局。',
    'xG 1.85-0.75 深盘 -2.5，大胜需早段破门；海地低位或拖慢节奏。',
  ),

  // 既济卦「初吉终乱」——午时火旺，示上半场一窗
  m31: buildMystic(
    '午时（11:00-13:00）', '火',
    {
      home: {
        team: 'Türkiye', colors: '红+白', elements: '火、金', wuxing_short: '火金相涵',
        verdict: '中性偏利', verdict_color: '#C8A96E', compat: 54,
        reason: '红属火、白属金。午时火气正旺，火炼金成器——如「水火既济」。《道德经》「知止不殆」，土耳其火金宜肋部渗透。',
        advantage: '午火炼金，组织之气渐明',
      },
      away: {
        team: 'Paraguay', colors: '红+白+蓝', elements: '火、金、水', wuxing_short: '火金水杂',
        verdict: '中性偏利', verdict_color: '#C8A96E', compat: 52,
        reason: '红白金蓝相杂。午时火旺，金水相涵——如「火在水上」，宜低位守中、反击为暗流。',
        advantage: '火金水杂，守势可延一时',
      },
      summary: '五行裁定：午时火旺双方皆沾火气；土耳其火金相涵略占「既济」初吉，巴拉圭守中待变',
    },
    {
      name: '水火既济', symbol: '☵☲', number: 63, upper: '坎水', lower: '离火',
      quote: '《周易·既济卦》：「初吉，终乱。」',
      general: '既济卦——水火相济，初吉终乱；生死战宜上半场破局，忌后段松懈。',
      advantage_team: 'Türkiye', disadvantage_team: 'Paraguay',
      hexagram_analysis: '既济「小者亨也」：午时火旺，坎水在上——气运宜上半场相济破局一段，卦示「初吉」后需防「终乱」。',
      match_nature: '初吉终乱 · 宜早破局', yellow_card_risk: '中',
      yellow_card_reason: '生死战谨慎开局，后段犯规升；预计 4-5 张黄牌。',
      scenarios: [
        { icon: '☯', label: '气运性质', text: '午时火旺，水火相济——初段破局者占「初吉」' },
        { icon: '⏱', label: '进球高峰段', text: '第 38-52 分钟（既济「水火相济」、午时火盛——卦只示此一段）' },
        { icon: '🟨', label: '纪律', text: '生死战，后段「终乱」致黄牌升' },
      ],
      early_goal: {
        scenario: '若土耳其先进球', prediction: '既济初吉——午火炼金，追加窗口在 42-55 分钟；忌领先后「终乱」。',
        favors: 'Türkiye', favors_prob: 56,
      },
      no_early_goal: {
        scenario: '若前 40 分钟无进球', prediction: '既济宜「水火相济」——0-0 符合谨慎局；45-60 分钟为破局段。',
        favors: 'Draw', favors_prob: 50,
      },
      away_goal: {
        scenario: '若巴拉圭偷袭破门', prediction: '既济逆象——火金水杂守中；土耳其需火金相涵耐心，65\' 后气运回。',
        favors: 'Türkiye', favors_prob: 52,
      },
    },
    buildGoalPeak(
      [{ half: 'first', start_min: 38, end_min: 52, hex_reason: '既济「水火相济」，午时火盛', time_reason: '生死战宜上半场破局，防后段终乱' }],
      '午时火气正旺，既济卦「初吉终乱」——气运集中于上半场相济一段，卦象未明示下半场第二高峰。宁缺毋滥，只示一窗。',
    ),
    '土耳其火金交争，巴拉圭火金守势——午时火旺，胜负取决于肋部渗透。',
    'xG 1.48-1.12 略看好主队，大小 2.5 偏小，低比分权重上升。',
  ),
};

function getMystic(matchId) {
  const m = MYSTIC[matchId];
  if (!m) throw new Error(`Unknown mystic: ${matchId}`);
  return JSON.parse(JSON.stringify(m));
}

module.exports = { getMystic, MYSTIC, buildGoalPeak };
