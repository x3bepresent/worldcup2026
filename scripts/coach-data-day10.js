/** Day 10 coach profiles — m33–m36 */
function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  nagelsmann: coach('Julian Nagelsmann', {
    age: 38, nation: '德国', tenure: '2024年—', wc_exp: '2026 带队 · 拜仁/莱比锡经验',
    style_tags: ['4-2-3-1', 'Wirtz+Musiala', '高位', '肋部渗透'],
    formation_pref: '4-2-3-1 · Musiala 10 号位',
    style_summary: '7-1 库拉索后 E 组净胜球优势；对科特迪瓦 Nagelsmann 警告「非洲杯冠军反击极快」，预计控球但防 Pépé 速度。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Havertz 支点+Sané 宽度', avg_first_sub: '62\'', note: '全员可用' },
    when_leading: { label: '控节奏', detail: '2 球领先：轮换保护 Musiala/Wirtz。' },
    when_trailing: { label: '堆攻击手', detail: 'unlikely 先丢球。' },
    vs_strong: { label: '对强队：控球+防反', detail: '对科特迪瓦须平衡压上与转换风险。' },
    vs_weak: { label: '对弱队：不留余地', detail: '7-1 已验证。' },
    tournament: '德国更衣室士气因 7-1 回升；Toronto 榜首战。',
    traits: ['Wirtz 核心', 'Musiala 爆发', '榜首战', '防反击'],
  }),
  fae: coach('Emerse Faé', {
    age: 42, nation: '科特迪瓦', tenure: '2023年—', wc_exp: '2023 非洲杯冠军 · 2026 带队',
    style_tags: ['4-4-2', 'Pépé 速度', 'Kessié 屏障', '转换'],
    formation_pref: '4-4-2 · Bonny 支点',
    style_summary: '1-0 厄瓜多尔零封后信心高；Faé 称对德国「纪律+速度，不是龟缩」，Pépé+Kessié 是战术轴心。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Pépé 打满概率高', avg_first_sub: '68\'', note: '非洲杯 DNA' },
    when_leading: { label: '4-5-1 收缩', detail: '1 球领先：Kessié 屏障+长传找 Pépé。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：Pépé 反击加码。' },
    vs_strong: { label: '对强队：低位+转换', detail: '对德国教科书反击模板。' },
    vs_weak: { label: '对弱队：压上', detail: '对厄瓜多尔 1-0 已验证。' },
    tournament: '2023 非洲杯冠军身份；Faé 强调「不能给肋部空间」。',
    traits: ['Pépé 爆点', 'Kessié 屏障', '转换', '榜首战'],
  }),
  beccacece: coach('Sebastián Beccacece', {
    age: 45, nation: '阿根廷', tenure: '2024年—', wc_exp: '2026 带队 · 南美青训背景',
    style_tags: ['4-3-3', 'Caicedo 屏障', 'Páez 创造力', '宽度'],
    formation_pref: '4-3-3 · Valencia 支点',
    style_summary: '0-1 科特迪瓦后 0 分危急；对库拉索必须 3 分，Beccacece 预计 4-3-3 围攻 Advocaat 铁桶。',
    subs: { timing: '首换 55–60 分钟', pattern: 'Páez 后手', avg_first_sub: '58\'', note: '出线压力大' },
    when_leading: { label: '继续压迫', detail: '1 球领先：维持宽度。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：60\' 换进攻手。' },
    vs_strong: { label: '对强队：稳守', detail: '对科特迪瓦已验证低位。' },
    vs_weak: { label: '对弱队：必须穿盘', detail: '对库拉索 xG 1.65 须兑现。' },
    tournament: '0 分起步；Kansas City 必须取胜。',
    traits: ['Caicedo 核心', '必须抢分', '破密集', '宽度'],
  }),
  advocaat: coach('Dick Advocaat', {
    age: 78, nation: '荷兰', tenure: '2024年—', wc_exp: '多届大赛 · 2026 库拉索',
    style_tags: ['5-4-1', '极深低位', 'Janga 反击', '定位球'],
    formation_pref: '5-4-1 · Room 一门',
    style_summary: '1-7 德国后 Advocaat 称「对厄瓜多尔 5-4-1 是生存」；78 岁老帅更衣室凝聚力是加勒比球队精神支柱。',
    subs: { timing: '首换 70 分钟+', pattern: '换人偏晚', avg_first_sub: '72\'', note: '弱队体能优先' },
    when_leading: { label: '5-5 铁桶', detail: '若意外领先：全员退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对德国 1-7 已验证。' },
    vs_weak: { label: '对弱队：偷分', detail: '对厄瓜多尔 1 分也有价值。' },
    tournament: '首次世界杯；Advocaat「代表加勒比骄傲」。',
    traits: ['5 后卫', '极守', '定位球', '偷分动机'],
  }),
  koeman: coach('Ronald Koeman', {
    age: 62, nation: '荷兰', tenure: '2024年—', wc_exp: '2020 欧洲杯 · 2026 二进宫',
    style_tags: ['4-3-3', 'Gakpo 宽度', 'Simons 肋部', 'VVD 防线'],
    formation_pref: '4-3-3 · Depay 支点',
    style_summary: '2-2 日本后可接受但 F 组被动；对瑞典必须取胜，Koeman 强调休斯顿湿热下补水与效率。',
    subs: { timing: '首换 58–65 分钟', pattern: 'Simons+Gakpo 宽度', avg_first_sub: '61\'', note: '再失分则出线告急' },
    when_leading: { label: '控节奏', detail: '1 球领先：Reijnders 节拍器。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：Gakpo/Simons 加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对瑞典 Isak 对位 VVD。' },
    vs_weak: { label: '对弱队：压上', detail: '对突尼斯会不同。' },
    tournament: 'Koeman 二进宫压力；F 组再平则被动。',
    traits: ['Gakpo 核心', '必须取胜', '湿热', 'Isak 对位'],
  }),
  andersson: coach('Janne Andersson', {
    age: 62, nation: '瑞典', tenure: '2016年—', wc_exp: '2018/2022 世界杯 · 2026 带队',
    style_tags: ['4-4-2', 'Isak 支点', 'Forsberg 组织', '身体对抗'],
    formation_pref: '4-4-2 · Isak+Gyökeres',
    style_summary: '5-1 突尼斯后 F 组领跑；Andersson 称对荷兰「证明能赢强队」，Isak 状态火热是更衣室最大话题。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Isak 打满', avg_first_sub: '67\'', note: '5-1 士气高' },
    when_leading: { label: '4-5-1 收缩', detail: '1 球领先：Forsberg 定位球。' },
    when_trailing: { label: '堆前锋', detail: 'unlikely 先丢球。' },
    vs_strong: { label: '对强队：反击+定位球', detail: '对荷兰 Isak 速度。' },
    vs_weak: { label: '对弱队：压制', detail: '5-1 突尼斯已验证。' },
    tournament: '2018 后最强小组赛开局；休斯顿体能考验。',
    traits: ['Isak 爆发', 'Forsberg 定位球', '领跑', '身体对抗'],
  }),
  zaouali: coach('Samuel Zaouali', {
    age: 45, nation: '突尼斯', tenure: '2024年—', wc_exp: '2026 带队 · 非洲联赛经验',
    style_tags: ['4-3-3', 'Khazri 自由人', 'Skhiri 屏障', '定位球'],
    formation_pref: '4-3-3 · Khazri 10 号位',
    style_summary: '1-5 瑞典后 0 分垫底；对日本必须 3 分，Zaouali 预计高位逼抢+Khazri 创造力，第 1000 场是动力。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Khazri 核心', avg_first_sub: '63\'', note: '必须进攻' },
    when_leading: { label: '控节奏', detail: '若意外领先：Skhiri 屏障。' },
    when_trailing: { label: '堆攻击手', detail: '先丢球：Msakni 加码。' },
    vs_strong: { label: '对强队：低位', detail: '对瑞典 1-5 已暴露问题。' },
    vs_weak: { label: '对弱队：压上', detail: '对日本必须抢分。' },
    tournament: '0 分危急；世界杯第 1000 场。',
    traits: ['Khazri 核心', '必须抢分', '第1000场', '高位逼抢'],
  }),
  moriyasu: coach('Hajime Moriyasu', {
    age: 56, nation: '日本', tenure: '2018年—', wc_exp: '2022 16 强 · 2026 带队',
    style_tags: ['4-2-3-1', 'Kubo 肋部', 'Mitoma 宽度', '控球'],
    formation_pref: '4-2-3-1 · Endo 单闸',
    style_summary: '2-2 荷兰后 Moriyasu 称「可以用控球对攻」；对突尼斯必须 3 分，Mitoma+Kubo 是破局关键。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Doan 右路', avg_first_sub: '62\'', note: '控球主导' },
    when_leading: { label: '控节奏', detail: '1 球领先：Endo 屏障。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：Mitoma 加码。' },
    vs_strong: { label: '对强队：对攻', detail: '2-2 荷兰已验证。' },
    vs_weak: { label: '对弱队：穿盘', detail: '对突尼斯 xG 优势。' },
    tournament: 'Moriyasu 长期执教稳定；第 1000 场用「日本足球方式」致敬历史。',
    traits: ['Kubo+Mitoma', '控球', '必须取胜', '里程碑场次'],
  }),
};

const NOTES = {
  'nagelsmann-fae': {
    home: 'E 组榜首战——Wirtz+Musiala 肋部 vs Pépé 反击；7-1 后德国须防转换。',
    away: '2023 非洲杯冠军；Faé 强调纪律+速度，Kessié 屏障是关键。',
  },
  'beccacece-advocaat': {
    home: '0 分必须 3 分——Caicedo 屏障 + 宽度破 Advocaat 5-4-1 铁桶。',
    away: '1-7 德国后极深低位；1 分对库拉索仍有价值，定位球偷分。',
  },
  'koeman-andersson': {
    home: 'F 组再失分则被动——Gakpo/Simons 宽度 vs Isak 支点；休斯顿湿热体能变量。',
    away: '5-1 突尼斯领跑——Isak 状态火热，平局对瑞典仍有利。',
  },
  'zaouali-moriyasu': {
    home: '0 分必须抢分——Khazri 创造力 vs Endo 屏障；世界杯第 1000 场动力。',
    away: '2-2 荷兰后控球自信——Mitoma+Kubo 对突尼斯高位逼抢。',
  },
};

const UPSET_ALERTS = {
  m33: {
    favorite: 'Germany', underdog: "Côte d'Ivoire", favorite_iso: 'GER',
    index: 22, level: 'LOW', level_cn: '低',
    cold_result_pct: 18,
    verdict: '德国 7-1 后深盘但科特迪瓦 2023 非洲杯冠军——Pépé 反击使平局/冷胜空间约 18%。',
    tactical: 'Nagelsmann 4-2-3-1 控球 vs Faé 4-4-2 转换；Kessié 对 Wirtz 对位关键。',
    psychology: '德国「7-1 是态度不是模板」；Faé「我们要在转换中惩罚」。',
    historical: '大赛德国占优；科特迪瓦非洲杯冠军信心。',
    factors: [
      { tag: '榜首战', impact: '强', detail: '胜者大概率锁定出线' },
      { tag: '反击', impact: '强', detail: 'Pépé 速度 vs 德国压上' },
      { tag: '气候', impact: '低', detail: '多伦多 22°C 影响小' },
    ],
  },
  m34: {
    favorite: 'Ecuador', underdog: 'Curaçao', favorite_iso: 'ECU',
    index: 20, level: 'LOW', level_cn: '低',
    cold_result_pct: 15,
    verdict: '厄瓜多尔 0 分须穿盘——Advocaat 5-4-1 铁桶使 1-1 偷分空间约 15%。',
    tactical: 'Beccacece 4-3-3 围攻 vs Advocaat 5-4-1；Caicedo 破密集是关键。',
    psychology: '厄瓜多尔「必须 3 分」；库拉索「代表加勒比骄傲」。',
    historical: '无大赛交锋；库拉索 1-7 德国后更低预期。',
    factors: [
      { tag: '铁桶', impact: '强', detail: 'Advocaat 5-4-1 极守' },
      { tag: '出线', impact: '强', detail: '厄瓜多尔 0 分已落后' },
      { tag: '主裁', impact: '中', detail: '马宁历史性执法' },
    ],
  },
  m35: {
    favorite: 'Netherlands', underdog: 'Sweden', favorite_iso: 'NED',
    index: 32, level: 'MEDIUM', level_cn: '中等',
    cold_result_pct: 30,
    verdict: '瑞典 5-1 领跑后 Isak 状态火热——荷兰 2-2 日本效率成疑，瑞典冷胜/平局约 30%。',
    tactical: 'Koeman 4-3-3 vs Andersson 4-4-2；Isak 对 VVD 是关键对位。',
    psychology: '荷兰「必须取胜」；瑞典「2018 后最强开局」。',
    historical: '大赛荷兰略优；瑞典 5-1 士气高。',
    factors: [
      { tag: 'Isak', impact: '强', detail: '5-1 双响状态' },
      { tag: '湿热', impact: '中', detail: '休斯顿 33°C 体能变量' },
      { tag: 'F组形势', impact: '强', detail: '荷兰再失分则被动' },
    ],
  },
  m36: {
    favorite: 'Japan', underdog: 'Tunisia', favorite_iso: 'JPN',
    index: 24, level: 'LOW', level_cn: '低',
    cold_result_pct: 20,
    verdict: '日本 2-2 荷兰后控球自信——突尼斯 1-5 后须抢分，Khazri 定位球使约 20% 偷分空间。',
    tactical: 'Moriyasu 4-2-3-1 控球 vs Zaouali 4-3-3 逼抢；Kubo+Mitoma 宽度。',
    psychology: '第 1000 场历史意义；突尼斯「必须 3 分」。',
    historical: '日本近年略优；突尼斯 1-5 瑞典暴露防线。',
    factors: [
      { tag: '里程碑', impact: '中', detail: '世界杯第 1000 场' },
      { tag: '控球', impact: '强', detail: '日本 Kubo+Mitoma' },
      { tag: '出线', impact: '强', detail: '双方均需 3 分' },
    ],
  },
};

function buildCoachAnalysis(homeKey, awayKey) {
  const notes = NOTES[`${homeKey}-${awayKey}`] || { home: '', away: '' };
  return {
    home: { ...PROFILES[homeKey], match_note: notes.home },
    away: { ...PROFILES[awayKey], match_note: notes.away },
  };
}

function getUpsetAlert(matchId) {
  return UPSET_ALERTS[matchId] ? { ...UPSET_ALERTS[matchId] } : null;
}

const MATCH_COACH_KEYS = {
  m33: { homeKey: 'nagelsmann', awayKey: 'fae' },
  m34: { homeKey: 'beccacece', awayKey: 'advocaat' },
  m35: { homeKey: 'koeman', awayKey: 'andersson' },
  m36: { homeKey: 'zaouali', awayKey: 'moriyasu' },
};

module.exports = { PROFILES, buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS };
