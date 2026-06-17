/** Day 7 coach profiles — m21–m24 */
function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  martinez: coach('Roberto Martínez', {
    age: 51, nation: '西班牙', tenure: '2022年—', wc_exp: '2018 比利时季军主帅',
    style_tags: ['4-3-3', 'C罗核心', 'B费节拍', '深度轮换'],
    formation_pref: '4-3-3 · C罗单锋或双锋',
    style_summary: 'C罗最后一届+葡萄牙黄金一代末段。K组揭幕对刚果金预计全场压制，Wissa 反击是唯一变数。',
    subs: { timing: '首换 60–65 分钟', pattern: 'C罗 70\' 可能换下', avg_first_sub: '62\'', note: '大赛轮换合理' },
    when_leading: { label: '控节奏 · 保护 C罗', detail: '2 球+：65\' 轮换但维持宽度。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：55\' 换 Leão/Félix 加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对哥伦比亚会相对保守。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对刚果金 xG 2.15+ 预计压制。' },
    tournament: '2018 比利时经验，葡萄牙心理硬度已验证。',
    traits: ['C罗依赖', 'B费节拍', '深度', '大赛经验'],
  }),
  desabre: coach('Sébastien Desabre', {
    age: 47, nation: '法国', tenure: '2016年—', wc_exp: '2026 带队 · 2019 非洲杯季军',
    style_tags: ['4-2-3-1', 'Wissa 核心', '低位', '转换'],
    formation_pref: '4-2-3-1 · Wissa 单锋',
    style_summary: 'Wissa 英超射手是刚果金唯一世界级威胁。对葡萄牙预计 4-5-1 低位，守 0-2 可接受。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Wissa 打满概率高', avg_first_sub: '68\'', note: '弱队换人偏晚' },
    when_leading: { label: '5-4-1 收缩', detail: '若意外领先：立即退守+Wissa 反击。' },
    when_trailing: { label: 'Wissa 单核', detail: '先丢球：60\' 换 Bakambu 加强冲击。' },
    vs_strong: { label: '对强队：龟缩+转换', detail: '对葡萄牙：低位+Wissa 速度。' },
    vs_weak: { label: '对弱队：相对开放', detail: '对乌兹别克会压上。' },
    tournament: '2019 非洲杯季军经验，大赛防守纪律是资产。',
    traits: ['Wissa 依赖', '低位防守', '转换', '非洲杯 DNA'],
  }),
  tuchel: coach('Thomas Tuchel', {
    age: 52, nation: '德国', tenure: '2024年—', wc_exp: '2026 带队 · 欧冠冠军主帅',
    style_tags: ['4-2-3-1', 'Bellingham 核心', '高位', '宽度'],
    formation_pref: '4-2-3-1 · Bellingham 伪 9/10',
    style_summary: '2018 半决赛对手克罗地亚，Tuchel 高位+宽度对位 Modrić 老化中场。L组揭幕必须开门红。',
    subs: { timing: '首换 58–65 分钟', pattern: '常换 Saka/Foden', avg_first_sub: '60\'', note: '换人果断' },
    when_leading: { label: '控节奏 · 适度轮换', detail: '1 球领先：维持宽度，不早退。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：55\' 换 Watkins 双锋。' },
    vs_strong: { label: '对强队：对攻', detail: '对克罗地亚预计对攻。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对巴拿马/Ghana 会压制。' },
    tournament: '欧冠冠军经验，英格兰大赛心理仍是变量。',
    traits: ['Bellingham 核心', '高位', '宽度', '大赛压力'],
  }),
  dalic: coach('Zlatko Dalić', {
    age: 58, nation: '克罗地亚', tenure: '2017年—', wc_exp: '2018 亚军 · 2022 季军',
    style_tags: ['4-3-3', 'Modrić 核心', '控球', '大赛经验'],
    formation_pref: '4-3-3 · Modrić 节拍',
    style_summary: '2018 半决赛胜英格兰是心理资产。Modrić 最后一届+Gvardiol 防线新核，L组揭幕求 1 分合理。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Modrić 常 75\' 换下', avg_first_sub: '68\'', note: '大赛经验顶级' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先：退守+Modrić 控节奏。' },
    when_trailing: { label: '堆中场', detail: '先丢球：60\' 换 Kovačić 加强控制。' },
    vs_strong: { label: '对强队：稳守反击', detail: '对英格兰：低位+Modrić 直塞。' },
    vs_weak: { label: '对弱队：控球压制', detail: '对巴拿马会压上。' },
    tournament: '2018/2022 连续大赛前三，心理硬度已验证。',
    traits: ['Modrić 依赖', '大赛 DNA', '控球', '慢热后段强'],
  }),
  addo: coach('Otto Addo', {
    age: 49, nation: '德国/加纳', tenure: '2024年—', wc_exp: '2022 带队 · 2026 再任',
    style_tags: ['4-2-3-1', 'Kudus 核心', '转换', '身体对抗'],
    formation_pref: '4-2-3-1 · Kudus 右翼',
    style_summary: 'Kudus/Partey 双核，对巴拿马 MLS 班底 xG 1.55 占优。加纳大赛慢热有前例，首战需取 3 分。',
    subs: { timing: '首换 60–65 分钟', pattern: '常换 Semenyo/J. Ayew', avg_first_sub: '62\'', note: '换人合理' },
    when_leading: { label: '4-5-1 收缩', detail: '1 球领先：退守+Kudus 反击。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：55\' 换进攻手加码。' },
    vs_strong: { label: '对强队：龟缩+转换', detail: '对英格兰会低位。' },
    vs_weak: { label: '对弱队：相对开放', detail: '对巴拿马预计压制。' },
    tournament: '2022 世界杯经验，Kudus 英超状态是最大资产。',
    traits: ['Kudus 依赖', 'Partey 屏障', '转换', '大赛慢热'],
  }),
  christiansen: coach('Thomas Christiansen', {
    age: 51, nation: '丹麦/西班牙', tenure: '2021年—', wc_exp: '2026 带队',
    style_tags: ['4-4-2', '低位', '定位球', '纪律'],
    formation_pref: '4-4-2 · Fajardo 支点',
    style_summary: '巴拿马 MLS 班底+定位球偷分。对加纳 xG 0.82 明显劣势，守 0-1 求 1 分是现实目标。',
    subs: { timing: '首换 70 分钟+', pattern: '换人偏晚', avg_first_sub: '72\'', note: '弱队体能分配优先' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对加纳/英格兰是教科书弱队踢法。' },
    vs_weak: { label: '不适用', detail: 'L 组无弱于巴拿马的对手。' },
    tournament: '中北美大赛经验，防守纪律是资产。',
    traits: ['低位防守', '定位球', '换人极晚', '纪律'],
  }),
  katanec: coach('Srečko Katanec', {
    age: 61, nation: '斯洛文尼亚', tenure: '2021年—', wc_exp: '2026 带队 · 亚洲杯四强',
    style_tags: ['4-2-3-1', 'Shomurodov 核心', '低位', '高原适应'],
    formation_pref: '4-2-3-1 · Shomurodov 单锋',
    style_summary: 'Shomurodov 意甲射手+Azteca 高原主场优势。对哥伦比亚 xG 0.88 明显劣势，守 0-1 求 1 分合理。',
    subs: { timing: '首换 70 分钟+', pattern: '换人偏晚', avg_first_sub: '72\'', note: '高原体能分配优先' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '维持低位', detail: 'Shomurodov 反击是唯一希望。' },
    vs_strong: { label: '对强队：龟缩+高原', detail: '对哥伦比亚：低位+Shomurodov 速度。' },
    vs_weak: { label: '不适用', detail: 'K 组无弱于乌兹别克的对手。' },
    tournament: '亚洲杯四强经验，高原适应是隐性优势。',
    traits: ['Shomurodov 依赖', '低位防守', '高原适应', '纪律'],
  }),
  lorenzo: coach('Néstor Lorenzo', {
    age: 58, nation: '阿根廷/哥伦比亚', tenure: '2022年—', wc_exp: '2024 美洲杯亚军',
    style_tags: ['4-2-3-1', 'Díaz 核心', '宽度', '转换'],
    formation_pref: '4-2-3-1 · Díaz 左翼',
    style_summary: 'Díaz/James 双核，对乌兹别克 xG 1.78 明显占优。Azteca 高原夜战，哥伦比亚需早破局。',
    subs: { timing: '首换 58–65 分钟', pattern: '常换 Borré/Díaz', avg_first_sub: '60\'', note: '换人果断' },
    when_leading: { label: '控节奏 · 宽度', detail: '1 球领先：维持 4-2-3-1 宽度。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：55\' 换 Borré 双锋。' },
    vs_strong: { label: '对强队：对攻', detail: '对葡萄牙会相对保守。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对乌兹别克 Díaz 目标至少 1 球。' },
    tournament: '2024 美洲杯亚军，Díaz 状态是最大资产。',
    traits: ['Díaz 依赖', 'James 节拍', '宽度', '高原适应'],
  }),
};

const NOTES = {
  'martinez-desabre': { home: 'K 组揭幕必须开门红——C罗/B费 肋部+Leão 宽度；2–0 后 65\' 轮换。', away: '4-5-1 低位+Wissa 转换；守 0–2 可接受，0–1 进入 70\' 即是胜利。' },
  'tuchel-dalic': { home: '2018 半决赛重演——Bellingham 伪 10 + Saka 宽度；Modrić 75\' 可能换下。', away: '4-5-1 低位+Modrić 直塞；2018 胜英格兰是心理资产，守 0–1 可接受。' },
  'addo-christiansen': { home: 'Kudus/Partey 对位巴拿马 MLS 班底；首战 3 分不容有失。', away: '4-4-2 低位+Fajardo 定位球偷分；60\' 后体能是最大考验。' },
  'katanec-lorenzo': { home: 'Azteca 高原+Shomurodov 反击；守 0–1 求 1 分是现实目标。', away: 'Díaz/James 宽度——高原夜战宜早破局，对低位需耐心。' },
};

function buildCoachAnalysis(homeKey, awayKey) {
  const notes = NOTES[`${homeKey}-${awayKey}`] || { home: '', away: '' };
  return {
    home: { ...PROFILES[homeKey], match_note: notes.home },
    away: { ...PROFILES[awayKey], match_note: notes.away },
  };
}

module.exports = { PROFILES, buildCoachAnalysis };
