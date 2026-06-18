/** Day 8 coach profiles — m25–m28 */
function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  hasek: coach('Ivan Hašek', {
    age: 60, nation: '捷克', tenure: '2023年—', wc_exp: '2026 带队',
    style_tags: ['3-4-3', 'Schick 核心', '低位', '定位球'],
    formation_pref: '3-4-3 · Schick 单锋',
    style_summary: '首轮 1-2 惜败韩国，Schick 84\' 挽回颜面。对南非必须抢 3 分，预计压上但防线仍留三中卫。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Souček 屏障+边翼卫插上', avg_first_sub: '62\'', note: '必须取胜心态' },
    when_leading: { label: '控节奏', detail: '1 球领先：维持宽度，不早退。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：55\' 换进攻手加码。' },
    vs_strong: { label: '对强队：低位+反击', detail: '对韩国已验证低位。' },
    vs_weak: { label: '对弱队：压制', detail: '对南非预计控球占优。' },
    tournament: '大赛经验有限，Schick 状态决定上限。',
    traits: ['Schick 依赖', '三中卫', '定位球', '必须抢分'],
  }),
  broos: coach('Hugo Broos', {
    age: 72, nation: '比利时/南非', tenure: '2021年—', wc_exp: '2016 非洲杯冠军（喀麦隆）',
    style_tags: ['4-2-3-1', 'Tau 核心', '转换', '体能'],
    formation_pref: '4-2-3-1 · Tau 左翼',
    style_summary: '首轮 0-2 墨西哥，60\' 后体能崩盘。对捷克若再负基本出局，预计相对开放对攻。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Tau 打满概率高', avg_first_sub: '68\'', note: '弱队换人偏晚' },
    when_leading: { label: '5-4-1 收缩', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：60\' 加码冲击。' },
    vs_strong: { label: '对强队：转换', detail: '对墨西哥已暴露体能问题。' },
    vs_weak: { label: '对弱队：压上', detail: '对捷克会求 3 分。' },
    tournament: '非洲杯冠军经验，但世界杯舞台经验有限。',
    traits: ['Tau 速度', '体能隐患', '转换', '出线压力'],
  }),
  yakin: coach('Murat Yakin', {
    age: 50, nation: '瑞士', tenure: '2021年—', wc_exp: '2022 带队 · 2024 欧洲杯八强',
    style_tags: ['4-2-3-1', 'Akanji 防线', '组织', '纪律'],
    formation_pref: '4-2-3-1 · 双后腰',
    style_summary: '首轮 1-1 卡塔尔，组织优势未完全兑现。对波黑必须取胜，预计控球压制+边路宽度。',
    subs: { timing: '首换 58–65 分钟', pattern: '常换边锋', avg_first_sub: '60\'', note: '换人果断' },
    when_leading: { label: '控节奏', detail: '1 球领先：维持控球。' },
    when_trailing: { label: '堆中场', detail: '先丢球：加强肋部渗透。' },
    vs_strong: { label: '对强队：稳守', detail: '对加拿大会压上。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对波黑 xG 占优。' },
    tournament: '2022/2024 大赛经验，纪律是资产。',
    traits: ['组织', 'Akanji 防线', '纪律', '必须抢分'],
  }),
  savic: coach('Sergej Stojković', {
    age: 58, nation: '塞尔维亚', tenure: '2024年—', wc_exp: '2026 带队',
    style_tags: ['4-3-3', 'Džeko 支点', '身体对抗', '定位球'],
    formation_pref: '4-3-3 · Džeko 单锋',
    style_summary: '首轮 1-1 加拿大，Džeko 经验是最大资产。对瑞士求 1 分可接受，预计 4-5-1 低位+定位球。',
    subs: { timing: '首换 70 分钟+', pattern: 'Džeko 打满', avg_first_sub: '72\'', note: '弱队体能分配' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对瑞士低位+定位球。' },
    vs_weak: { label: '对弱队：相对开放', detail: '对卡塔尔会压上。' },
    tournament: '大赛经验有限，Džeko 是精神领袖。',
    traits: ['Džeko 支点', '定位球', '低位', '身体对抗'],
  }),
  marsch: coach('Jesse Marsch', {
    age: 51, nation: '美国', tenure: '2024年—', wc_exp: '2026 带队 · 欧冠执教经验',
    style_tags: ['4-3-3', '高位', 'Davies 宽度', '体能'],
    formation_pref: '4-3-3 · 高位压迫',
    style_summary: '东道主温哥华主场，首轮 1-1 波黑。对卡塔尔必须取胜，预计全场压制+Davies 左路宽度。',
    subs: { timing: '首换 60–65 分钟', pattern: '高位体能轮换', avg_first_sub: '62\'', note: '主场气势' },
    when_leading: { label: '继续压迫', detail: '1 球领先：维持高位。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：55\' 加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对瑞士会开放。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对卡塔尔预计压制。' },
    tournament: '东道主压力+欧冠经验，Davies 是爆点。',
    traits: ['高位', 'Davies 宽度', '主场', '必须抢分'],
  }),
  sanchez: coach('Félix Sánchez', {
    age: 49, nation: '西班牙', tenure: '2023年—', wc_exp: '2022 带队亚洲杯冠军',
    style_tags: ['4-2-3-1', '低位', '转换', '纪律'],
    formation_pref: '4-2-3-1 · 低位',
    style_summary: '首轮 1-1 瑞士，防守纪律尚可。对加拿大客场（温哥华）预计 5-4-1 低位+反击偷分。',
    subs: { timing: '首换 70 分钟+', pattern: '换人偏晚', avg_first_sub: '72\'', note: '弱队体能优先' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对加拿大教科书弱队踢法。' },
    vs_weak: { label: '对弱队：压上', detail: '对波黑会相对开放。' },
    tournament: '亚洲杯冠军经验，世界杯舞台仍偏保守。',
    traits: ['低位', '纪律', '转换', '客场弱势'],
  }),
  aguirre: coach('Javier Aguirre', {
    age: 66, nation: '墨西哥', tenure: '2024年—', wc_exp: '三届世界杯带队',
    style_tags: ['4-2-3-1', 'Jiménez 核心', '主场', '宽度'],
    formation_pref: '4-2-3-1 · Jiménez 支点',
    style_summary: '首轮 2-0 南非，Jiménez 梅开二度。对韩国 A 组榜首对话，瓜达拉哈拉夜场必须抢 3 分。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Jiménez 70\' 可能换下', avg_first_sub: '62\'', note: '大赛轮换' },
    when_leading: { label: '控节奏', detail: '1 球领先：维持宽度。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：55\' 加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对韩国孙兴慜是最大威胁。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对南非已验证。' },
    tournament: '三届世界杯经验，主场气势是资产。',
    traits: ['Jiménez 状态', '主场', 'Ochoa 防线', '大赛经验'],
  }),
  hong: coach('Hong Myung-bo', {
    age: 55, nation: '韩国', tenure: '2024年—', wc_exp: '2002 队长 · 2026 带队',
    style_tags: ['4-2-3-1', '孙兴慜 核心', '转换', '远射'],
    formation_pref: '4-2-3-1 · 孙兴慜 左翼',
    style_summary: '首轮 2-1 捷克，孙兴慜+李康仁远射破局。对墨西哥 A 组榜首对话，预计稳守反击+孙兴慜 内切。',
    subs: { timing: '首换 65–70 分钟', pattern: '孙兴慜 打满', avg_first_sub: '68\'', note: '核心保护' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先：退守+孙兴慜 反击。' },
    when_trailing: { label: '堆中场', detail: '先丢球：60\' 换进攻手。' },
    vs_strong: { label: '对强队：稳守反击', detail: '对墨西哥低位+孙兴慜 速度。' },
    vs_weak: { label: '对弱队：控球压制', detail: '对南非会压上。' },
    tournament: '2002 四强队长，大赛心理是资产。',
    traits: ['孙兴慜 依赖', '远射', '转换', '大赛 DNA'],
  }),
};

const NOTES = {
  'hasek-broos': { home: '必须抢 3 分——Schick 支点+边翼卫插上；南非体能是后段机会。', away: '出线压力大——Tau 速度+转换；若先丢球 60\' 后体能堪忧。' },
  'yakin-savic': { home: '瑞士组织压制——Akanji 出球+边路宽度；波黑 Džeko 定位球需防。', away: '4-5-1 低位+Džeko 支点偷分；守 0-1 求 1 分是现实目标。' },
  'marsch-sanchez': { home: '温哥华主场高位——Davies 左路+压迫；卡塔尔低位需耐心破局。', away: '5-4-1 低位+反击；守 0-1 可接受，定位球是唯一威胁。' },
  'aguirre-hong': { home: '瓜达拉哈拉夜场——Jiménez 支点+宽度；孙兴慜 内切是最大威胁。', away: '稳守反击+孙兴慜 速度；2018 友谊赛 2-0 胜墨西哥是心理参考。' },
};

function buildCoachAnalysis(homeKey, awayKey) {
  const notes = NOTES[`${homeKey}-${awayKey}`] || { home: '', away: '' };
  return {
    home: { ...PROFILES[homeKey], match_note: notes.home },
    away: { ...PROFILES[awayKey], match_note: notes.away },
  };
}

module.exports = { PROFILES, buildCoachAnalysis };
