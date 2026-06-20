/**
 * Day 10 mystic blocks — m33–m36
 * 赛日：庚寅日 · 6月21日
 */
const DISCLAIMER =
  '以上分析援引《道德经》《周易》五行学说，纯属道家文化解读，仅供文化参考，不构成竞技或决策依据';

const BAZI_BASE = {
  year: '丙午年',
  year_element: '火',
  month: '甲午月',
  month_element: '金+火',
  day: '庚寅日',
  day_element: '金+木',
  day_dominant: '金木相战',
  day_summary:
    '庚寅日——庚金坐寅木，金木相战。《道德经》曰：「知止不殆。」宜早段破局、忌领先后松懈；非力之大小，乃气之顺逆。',
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
  const scope = windows.length >= 2 ? 'both_halves' : windows[0].half === 'first' ? 'first_half' : 'second_half';
  const titles = { both_halves: '上下半场进球高峰 · 娱乐预测', first_half: '上半场进球高峰 · 娱乐预测', second_half: '下半场进球高峰 · 娱乐预测' };
  const halfLabels = { first: '上半场', second: '下半场' };
  return {
    scope,
    title: titles[scope] || '本场进球高峰 · 娱乐预测',
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
  m35: buildMystic(
    '丑时（01:00-03:00）', '土',
    {
      home: { team: 'Netherlands', colors: '橙+白+蓝', elements: '火、金、水', wuxing_short: '火金水杂', verdict: '中性偏利', verdict_color: '#C8A96E', compat: 55, reason: '橙色属火。丑土当令，火生土——休斯顿湿热土气厚重，宜早段破局。', advantage: '丑土泄火气，宜上半场主动' },
      away: { team: 'Sweden', colors: '黄+蓝', elements: '土、水', wuxing_short: '土水相涵', verdict: '中性偏利', verdict_color: '#C8A96E', compat: 53, reason: '黄属土、蓝属水。丑土日土气叠加，瑞典土性守中。', advantage: '土水守势，忌早段失球' },
      summary: '五行裁定：丑土当令；荷兰火金、瑞典土水——气运接近，早段破局者占先机',
    },
    { name: '地天泰', symbol: '☷☰', number: 11, upper: '坤地', lower: '乾天', quote: '《周易·泰卦》：「小往大来，吉亨。」', general: '泰卦——天地交泰，小往大来；F 组榜首战宜上半场相济破局。', advantage_team: 'Netherlands', disadvantage_team: null, hexagram_analysis: '泰卦「上下交泰」：丑时土气，乾天在下——气运宜早段主动。', match_nature: '交泰破局 · 宜早动', yellow_card_risk: '中', yellow_card_reason: '榜首战+湿热，预计 4-5 黄。', scenarios: [{ icon: '⏱', label: '进球高峰段', text: '第 28-45 分钟' }] },
    buildGoalPeak([{ half: 'first', start_min: 28, end_min: 45, hex_reason: '泰卦「小往大来」', time_reason: '丑时土气，宜上半场破局' }], '丑时土厚，泰卦主交泰——气运集中于上半场一段。'),
    '荷兰火金交泰，瑞典土水守中——休斯顿湿热，宜早段破局。',
    'xG 1.72-1.05 略看好荷兰，Isak 对 VVD 是竞技关键。',
  ),
  m33: buildMystic(
    '寅时（04:00-06:00）', '木',
    {
      home: { team: 'Germany', colors: '白+黑', elements: '金、水', wuxing_short: '金水相涵', verdict: '有利', verdict_color: '#5BBF8A', compat: 58, reason: '白属金、黑属水。寅木当令，金生水——多伦多 evening 金水相济。', advantage: '寅木泄金气，组织流畅' },
      away: { team: "Côte d'Ivoire", colors: '橙+绿+白', elements: '火、木、金', wuxing_short: '火木金杂', verdict: '中性偏利', verdict_color: '#C8A96E', compat: 52, reason: '橙火、绿木。寅木旺，火木相生宜反击。', advantage: '寅木助火木，转换有暗流' },
      summary: '五行裁定：寅木当令；德国金水、科特迪瓦火木——气运略利热门，忌轻敌',
    },
    { name: '火风鼎', symbol: '☲☴', number: 50, upper: '离火', lower: '巽风', quote: '《周易·鼎卦》：「元吉，亨。」', general: '鼎卦——火风相济，革故鼎新；榜首战宜主动变革。', advantage_team: 'Germany', disadvantage_team: null, hexagram_analysis: '鼎卦「亨」：寅木助风，离火在上——气运宜上半场破局。', match_nature: '鼎新破局 · 宜主动', yellow_card_risk: '中', yellow_card_reason: '榜首战转换快，预计 4-5 黄。', scenarios: [{ icon: '⏱', label: '进球高峰段', text: '第 32-50 分钟' }] },
    buildGoalPeak([{ half: 'first', start_min: 32, end_min: 50, hex_reason: '鼎卦「元亨」', time_reason: '寅木当令，宜上半场破局' }], '寅木当令，鼎卦主革故鼎新——气运集中于上半场一段。'),
    '德国金水相济，科特迪瓦火木反击——寅木当令，热门宜早破局。',
    'xG 2.05-0.95 看好德国，Pépé 反击是变数。',
  ),
  m34: buildMystic(
    '辰时（08:00-10:00）', '土',
    {
      home: { team: 'Ecuador', colors: '黄+蓝+红', elements: '土、水、火', wuxing_short: '土水火杂', verdict: '中性偏利', verdict_color: '#C8A96E', compat: 54, reason: '黄属土。辰土当令，土气厚重——须耐心破密集。', advantage: '辰土当令，宜稳攻' },
      away: { team: 'Curaçao', colors: '蓝+黄', elements: '水、土', wuxing_short: '水土相涵', verdict: '中性偏逆', verdict_color: '#C8A96E', compat: 46, reason: '蓝属水、黄属土。辰土日，弱队土水守中。', advantage: '水土铁桶，忌早段失球' },
      summary: '五行裁定：辰土当令；厄瓜多尔须「破土」；库拉索水土守中',
    },
    { name: '山地剥', symbol: '☶☷', number: 23, upper: '艮山', lower: '坤地', quote: '《周易·剥卦》：「不利有攸往。」', general: '剥卦——山附于地，剥蚀之象；破密集需耐心，忌急躁。', advantage_team: 'Ecuador', disadvantage_team: 'Curaçao', hexagram_analysis: '剥卦「不利有攸往」：弱队宜守；热门须耐心剥蚀。', match_nature: '剥蚀破局 · 忌急躁', yellow_card_risk: '低', yellow_card_reason: '铁桶局，预计 3-4 黄。', scenarios: [{ icon: '⏱', label: '进球高峰段', text: '第 55-72 分钟' }] },
    buildGoalPeak([{ half: 'second', start_min: 55, end_min: 72, hex_reason: '剥卦后段「剥极必复」', time_reason: '辰土后段，铁桶或松动' }], '辰土厚重，剥卦主耐心——气运后段才可能破局。'),
    '厄瓜多尔土火求破，库拉索水土铁桶——辰土日宜耐心围攻。',
    'xG 1.65-0.72 看好厄瓜多尔，Advocaat 5-4-1 是阻力。',
  ),
  m36: buildMystic(
    '午时（12:00-14:00）', '火',
    {
      home: { team: 'Tunisia', colors: '红+白', elements: '火、金', wuxing_short: '火金相涵', verdict: '中性偏逆', verdict_color: '#C8A96E', compat: 48, reason: '红属火、白属金。午火当令，火炼金——须抢分但气运略逆。', advantage: '午火炼金，守中待变' },
      away: { team: 'Japan', colors: '蓝+白', elements: '水、金', wuxing_short: '水金相生', verdict: '有利', verdict_color: '#5BBF8A', compat: 60, reason: '蓝属水、白属金。午火日，水金相济——如「水火既济」初吉。', advantage: '水金流动，控球受益' },
      summary: '五行裁定：午火当令；日本水金相济略占「既济」；突尼斯火金守中',
    },
    { name: '水火既济', symbol: '☵☲', number: 63, upper: '坎水', lower: '离火', quote: '《周易·既济卦》：「初吉，终乱。」', general: '既济卦——世界杯第 1000 场；水火相济，初吉终乱。', advantage_team: 'Japan', disadvantage_team: 'Tunisia', hexagram_analysis: '既济「初吉终乱」：午火当令，坎水在上——日本水金略占先机。', match_nature: '初吉终乱 · 里程碑场次', yellow_card_risk: '中', yellow_card_reason: '第 1000 场+抢分战，预计 4-5 黄。', scenarios: [{ icon: '⏱', label: '进球高峰段', text: '第 38-55 分钟' }] },
    buildGoalPeak([{ half: 'first', start_min: 38, end_min: 55, hex_reason: '既济「水火相济」', time_reason: '午火当令，宜上半场破局' }], '午火当令，既济卦主初吉——气运集中于上半场一段；第 1000 场纪念。'),
    '日本水金既济，突尼斯火金守中——午火当令，控球方略占「初吉」。',
    'xG 1.08-1.42 看好日本，Khazri 定位球是变数。',
  ),
};

function getMystic(matchId) {
  return MYSTIC[matchId] ? JSON.parse(JSON.stringify(MYSTIC[matchId])) : null;
}

module.exports = { getMystic, MYSTIC };
