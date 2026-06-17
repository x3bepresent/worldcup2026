/** Day 6 coach profiles — m17–m20 */
function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  deschamps: coach('Didier Deschamps', {
    age: 56, nation: '法国', tenure: '2012年—', wc_exp: '2018 世界杯冠军 · 2022 决赛',
    style_tags: ['4-2-3-1', 'Mbappé 核心', 'Olise/Doué', '深度轮换'],
    formation_pref: '4-2-3-1 · Rabiot/Tchouaméni 双闸',
    style_summary: '2018 冠军班底延续，Mbappé 速度+Saliba 防线新核。I 组揭幕必须开门红，对塞内加尔预计全场压制。',
    subs: { timing: '首换 60–65 分钟', pattern: '常换 Thuram/Griezmann；领先 2 球+ 轮换', avg_first_sub: '62\'', note: '大赛经验顶级' },
    when_leading: { label: '控节奏 · 适度轮换', detail: '2 球+：65\' 轮换但维持宽度。' },
    when_trailing: { label: '堆边锋 · 肋部渗透', detail: '先丢球：55\' 换进攻手，Mbappé 肋部加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对巴西/阿根廷级高位对攻。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对塞内加尔仍尊重，但 xG 2.3+ 预计压制。' },
    tournament: '三届大赛主帅，心理硬度已验证。',
    traits: ['Mbappé 依赖', '深度碾压', '大赛经验', '轮换合理'],
  }),
  cisse: coach('Aliou Cissé', {
    age: 49, nation: '塞内加尔', tenure: '2015年—', wc_exp: '2022 八强 · 2021 非洲杯冠军',
    style_tags: ['4-3-3', 'Mané 核心', '转换', '身体对抗'],
    formation_pref: '4-3-3 · Koulibaly 防线',
    style_summary: '2021 非洲杯冠军主帅，Mané/Jackson 转换是冷门唯一路径。对法国预计 4-5-1 低位。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Mané 极少被换下', avg_first_sub: '68\'', note: '大赛经验足' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先：退守+Mané 反击。' },
    when_trailing: { label: 'Mané 单核', detail: '先丢球：60\' 换 Jackson 加强冲击。' },
    vs_strong: { label: '对强队：龟缩+转换', detail: '对法国：低位+Mané 速度。' },
    vs_weak: { label: '对弱队：相对开放', detail: '对伊拉克会压上。' },
    tournament: '2022 八强经验，Mané 大赛大场面不可低估。',
    traits: ['Mané 依赖', '转换速度', '低位防守', '非洲杯 DNA'],
  }),
  casas: coach('Jesús Casas', {
    age: 47, nation: '西班牙/墨西哥', tenure: '2022年—', wc_exp: '2026 带队',
    style_tags: ['4-2-3-1', '低位', '定位球', '纪律'],
    formation_pref: '4-5-1 · 领先时五后卫',
    style_summary: '西班牙籍主帅，伊拉克低位+定位球偷分。对挪威 xG 0.82 明显劣势，守 0-0 求 1 分合理。',
    subs: { timing: '首换 70 分钟+', pattern: '换人偏晚', avg_first_sub: '72\'', note: '弱队体能分配优先' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对挪威/Haaland 是教科书弱队踢法。' },
    vs_weak: { label: '不适用', detail: 'I 组挪威/法国均强。' },
    tournament: '亚洲杯经验，大赛防守纪律是资产。',
    traits: ['低位防守', '定位球', '换人极晚', '纪律'],
  }),
  solbakken: coach('Ståle Solbakken', {
    age: 56, nation: '挪威', tenure: '2020年—', wc_exp: '2026 带队 · 28 年后再进世界杯',
    style_tags: ['4-3-3', 'Haaland 核心', 'Ødegaard 节拍', '宽度'],
    formation_pref: '4-3-3 · Haaland 单锋或双锋',
    style_summary: 'Haaland+Ødegaard 双核，对伊拉克预计全场压制。28 年后再进世界杯，首战必须取 3 分。',
    subs: { timing: '首换 58–65 分钟', pattern: '常换 Sørloth/边锋', avg_first_sub: '60\'', note: '换人果断' },
    when_leading: { label: '继续进攻', detail: '1 球领先：维持 4-3-3 宽度。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：55\' 换 Sørloth 双锋。' },
    vs_strong: { label: '对强队：对攻', detail: '对法国会相对保守。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对伊拉克 Haaland 目标至少 2 球。' },
    tournament: '28 年后再进世界杯，Haaland 是最大资产。',
    traits: ['Haaland 依赖', 'Ødegaard 节拍', '宽度', '首战压力'],
  }),
  scaloni: coach('Lionel Scaloni', {
    age: 46, nation: '阿根廷', tenure: '2018年—', wc_exp: '2022 世界杯冠军',
    style_tags: ['4-3-3', 'Messi 核心', 'De Paul 绞杀', '深度'],
    formation_pref: '4-3-3 · Messi 自由人',
    style_summary: '卫冕冠军，Messi 最后一届+ Lautaro/Enzo 新核。对阿尔及利亚预计 xG 2.8+ 全场压制。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Messi 常 70\' 换下', avg_first_sub: '62\'', note: '2022 冠军经验' },
    when_leading: { label: '控节奏 · 保护 Messi', detail: '2 球+：65\' 换 Messi 保体能。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：55\' 换 Julian Alvarez。' },
    vs_strong: { label: '对强队：对攻', detail: '对法国/巴西级对攻。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对阿尔及利亚预计 3 球+。' },
    tournament: '2022 冠军心理硬度已验证；Messi 最后一届动力足。',
    traits: ['Messi 依赖', '冠军 DNA', '深度', 'De Paul 绞杀'],
  }),
  belmadi: coach('Djamel Belmadi', {
    age: 48, nation: '阿尔及利亚', tenure: '2018年—', wc_exp: '2019 非洲杯冠军',
    style_tags: ['4-2-3-1', 'Mahrez 核心', '低位', '转换'],
    formation_pref: '4-2-3-1 · Mahrez 右路',
    style_summary: '2019 非洲杯冠军，Mahrez 反击是唯一变数。对阿根廷预计 4-5-1 低位，2014 逼德国加时是心理资产。',
    subs: { timing: '首换 60–70 分钟', pattern: 'Mahrez 极少被换下', avg_first_sub: '65\'', note: '大赛经验足' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先：退守。' },
    when_trailing: { label: 'Mahrez 单核', detail: '先丢球：60\' 换 Benrahma。' },
    vs_strong: { label: '对强队：龟缩+Mahrez', detail: '对阿根廷：低位+Mahrez 反击。' },
    vs_weak: { label: '对弱队：相对开放', detail: '对约旦会压上。' },
    tournament: '2019 非洲杯冠军+2014 世界杯逼德国加时经验。',
    traits: ['Mahrez 依赖', '低位防守', '大赛经验', '转换'],
  }),
  rangnick: coach('Ralf Rangnick', {
    age: 66, nation: '德国', tenure: '2024年—', wc_exp: '2026 带队 · 高位压迫教父',
    style_tags: ['4-2-3-1', '高位压迫', 'Alaba 出球', 'gegenpressing'],
    formation_pref: '4-2-3-1 · 全场 man-marking 变体',
    style_summary: '高位压迫体系，Alaba 出球+Sabitzer 覆盖。对约旦预计全场压制，先破门则指数骤降。',
    subs: { timing: '首换 55–62 分钟', pattern: '批量换人', avg_first_sub: '58\'', note: '压迫体系换人果断' },
    when_leading: { label: '继续压迫', detail: '1 球领先：维持高位，不早退。' },
    when_trailing: { label: '更疯压迫', detail: '先丢球：压迫强度加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对阿根廷会相对保守。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对约旦预计 xG 1.65+。' },
    tournament: '高位压迫教父，奥地利体系已磨合。',
    traits: ['高位压迫', 'Alaba 出球', '换人果断', '体能消耗大'],
  }),
  ammouta: coach('Hussein Ammouta', {
    age: 59, nation: '约旦', tenure: '2023年—', wc_exp: '2026 带队 · 2024 亚洲杯亚军',
    style_tags: ['4-4-2', 'Al-Tamari 核心', '低位', '定位球'],
    formation_pref: '4-4-2 · Al-Tamari 右路',
    style_summary: '2024 亚洲杯亚军，Al-Tamari 反击+定位球是唯一威胁。对奥地利预计 4-4-2 低位。',
    subs: { timing: '首换 65–75 分钟', pattern: 'Al-Tamari 打满概率高', avg_first_sub: '70\'', note: '弱队换人偏晚' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '维持低位', detail: 'Al-Tamari 反击是唯一希望。' },
    vs_strong: { label: '对强队：龟缩', detail: '对奥地利：低位+Al-Tamari 速度。' },
    vs_weak: { label: '不适用', detail: 'J 组无弱于约旦的对手。' },
    tournament: '亚洲杯亚军信心，大赛经验有限但无包袱。',
    traits: ['Al-Tamari 依赖', '低位防守', '定位球', '亚洲杯 DNA'],
  }),
};

const NOTES = {
  'deschamps-cisse': { home: 'I 组揭幕必须开门红——Mbappé 肋部+Dembele 宽度；2–0 后 65\' 轮换。', away: '4-5-1 低位+Mané/Jackson 转换；守 0–1 负可接受，0–0 进入 70\' 即是胜利。' },
  'casas-solbakken': { home: '4-5-1 低位守 0–0，Hussein 定位球偷分；60\' 后体能是最大考验。', away: 'Haaland 必须主导——首战 3 分不容有失，对低位需耐心。' },
  'scaloni-belmadi': { home: '卫冕冠军 J 组揭幕——Messi 负荷管理，70\' 可能换下；Lautaro 对位 Mandi 是核心。', away: '4-5-1 低位+Mahrez 反击；2014 逼德国加时是心理资产，守 0–1 可接受。' },
  'rangnick-ammouta': { home: '高位压迫全场——Alaba 出球+Arnautović 支点；先破门则 Jordan 崩盘概率 70%+。', away: '4-4-2 低位+Al-Tamari 反击；定位球偷分是现实目标。' },
};

function buildCoachAnalysis(homeKey, awayKey) {
  const notes = NOTES[`${homeKey}-${awayKey}`] || { home: '', away: '' };
  return {
    home: { ...PROFILES[homeKey], match_note: notes.home },
    away: { ...PROFILES[awayKey], match_note: notes.away },
  };
}

module.exports = { PROFILES, buildCoachAnalysis };
