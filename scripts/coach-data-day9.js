/** Day 9 coach profiles — m29–m32 */
function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  pochettino: coach('Mauricio Pochettino', {
    age: 53, nation: '阿根廷', tenure: '2024年—', wc_exp: '2014/2018 带队 · 2026 美国主帅',
    style_tags: ['4-3-3', '高位', 'Pulisic 宽度', '主场气势'],
    formation_pref: '4-3-3 · Pulisic-Reyna 双翼',
    style_summary: '揭幕战 4-1 巴拉圭回应批评，Balogun 双响+Reyna 绝杀。西雅图主场对澳大利亚必须当成决赛踢，预计持续宽度+Adams 屏障。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Reyna 后段奇兵', avg_first_sub: '62\'', note: '26 人全员可用' },
    when_leading: { label: '继续压迫', detail: '1 球领先：维持 Seattle 主场强度，忌过早退守。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：55\' Pulisic/Reyna 加码宽度。' },
    vs_strong: { label: '对强队：对攻', detail: '对澳大利亚预计控球+肋部渗透。' },
    vs_weak: { label: '对弱队：不留余地', detail: '揭幕战已验证高位效率。' },
    tournament: '大赛经验+东道主压力；Pochettino 强调「不可轻敌」。',
    traits: ['主场', 'Pulisic 核心', '宽度', '必须抢分'],
  }),
  arnold: coach('Graham Arnold', {
    age: 61, nation: '澳大利亚', tenure: '2018年—', wc_exp: '2022 带队 · 2026 续任',
    style_tags: ['5-4-1', '低位', '反击', '纪律'],
    formation_pref: '5-4-1 · Irankunda 速度',
    style_summary: '对土耳其 2-0 验证低位+反击；Beach 一门变阵成亮点。客场西雅图对东道主是美国本届最难客场之一，预计继续低位偷分。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Irvine/Leckie 经验替补', avg_first_sub: '68\'', note: '弱队体能分配' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即深度退守+反击。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩+反击', detail: '对土耳其 2-0 是模板。' },
    vs_weak: { label: '对弱队：相对开放', detail: '对美国预计教科书弱队踢法。' },
    tournament: '「每次大赛都被低估」——Popovic 续约至 2027 亚洲杯，更衣室稳定。',
    traits: ['5-4-1', '反击', 'Beach 一门', '客场弱势'],
  }),
  clarke: coach('Steve Clarke', {
    age: 62, nation: '苏格兰', tenure: '2019年—', wc_exp: '2020 欧洲杯 · 2026 带队',
    style_tags: ['4-2-3-1', 'McTominay 核心', 'Robertson 宽度', '定位球'],
    formation_pref: '4-2-3-1 · McGinn 插上',
    style_summary: '首轮 1-0 海地 McGinn 制胜，C 组领跑 3 分。Gilmour 整届报销后 McTominay 独撑创造力；对摩洛哥均分乱局需再抢 3 分。',
    subs: { timing: '首换 65–70 分钟', pattern: 'McGinn 打满概率高', avg_first_sub: '67\'', note: '大赛三分比场面重要' },
    when_leading: { label: '4-5-1 收缩', detail: '1 球领先：Robertson 宽度+McTominay 屏障。' },
    when_trailing: { label: '堆中场', detail: '先丢球：60\' 换进攻手加码。' },
    vs_strong: { label: '对强队：稳守反击', detail: '对巴西会低位；对摩洛哥相对开放。' },
    vs_weak: { label: '对弱队：压制', detail: '对海地 xG 1.05 险胜已验证。' },
    tournament: '大赛士气为近年最高之一；Patterson 队检仍待官方。',
    traits: ['McTominay 依赖', 'Robertson 宽度', '出线主动', 'Gilmour 缺阵'],
  }),
  regragui: coach('Walid Regragui', {
    age: 49, nation: '摩洛哥', tenure: '2022年—', wc_exp: '2022 四强 · 2026 带队',
    style_tags: ['4-3-3', 'Hakimi 宽度', 'Saibari 偷袭', '转换'],
    formation_pref: '4-3-3 · Hakimi 爆点',
    style_summary: '首轮 1-1 逼平巴西，Saibari 冷射+Vinícius 扳平。Aguerd/Abde 报销后 Diop+Riad 中卫链经检验；对苏格兰客场抢 3 分改变 C 组格局。',
    subs: { timing: '首换 58–65 分钟', pattern: 'Hakimi 打满', avg_first_sub: '61\'', note: '2022 四强信心' },
    when_leading: { label: '控节奏', detail: '1 球领先：Hakimi 宽度+转换。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：Saibari/Ounahi 肋部加码。' },
    vs_strong: { label: '对强队：稳守+反击', detail: '对巴西 1-1 已验证。' },
    vs_weak: { label: '对弱队：压上', detail: '对苏格兰预计相对开放。' },
    tournament: '2022 四强 DNA；Regragui 称「可与任何人抗衡」。',
    traits: ['Hakimi 爆点', 'Saibari 冷射', '转换', '防空隐患'],
  }),
  ancelotti: coach('Carlo Ancelotti', {
    age: 66, nation: '意大利', tenure: '2025年—', wc_exp: '四届世界杯 · 皇马欧冠经验',
    style_tags: ['4-4-2', 'Vinícius 宽度', 'Paquetá 组织', '变阵'],
    formation_pref: '4-4-2 / 4-2-3-1 · Vinícius 核心',
    style_summary: '首轮 1-1 摩洛哥令人失望，实际变阵 4-4-2 非赛前预期。Neymar 每日观察；对海地必须取胜，预计早段破局+持续宽度。',
    subs: { timing: '首换 55–62 分钟', pattern: '半场变阵传统', avg_first_sub: '58\'', note: 'Danilo/Fabinho 首战标志' },
    when_leading: { label: '控节奏', detail: '2 球领先：轮换保护 Vinícius。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：立即加码进攻宽度。' },
    vs_strong: { label: '对强队：对攻', detail: '对摩洛哥已验证。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对海地 xG 1.85 必须兑现。' },
    tournament: '五冠压力+仅 1 分；媒体称「最不容再失分的一场」。',
    traits: ['Vinícius 核心', '变阵', 'Neymar 存疑', '必须抢分'],
  }),
  migne: coach('Sébastien Migné', {
    age: 51, nation: '法国', tenure: '2023年—', wc_exp: '2026 带队 · 非洲杯经验',
    style_tags: ['5-4-1', '深度低位', 'Pierrot 支点', '定位球'],
    formation_pref: '5-4-1 / 5-5 · Bellegarde 枢纽',
    style_summary: '首轮 0-1 苏格兰可接受防守表现；对巴西预计 5 后卫深度低位。首次世界杯正赛无历史包袱，湿热费城或拖慢节奏。',
    subs: { timing: '首换 70 分钟+', pattern: '换人偏晚', avg_first_sub: '72\'', note: '弱队体能优先' },
    when_leading: { label: '5-5 铁桶', detail: '若意外领先：全员退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对巴西教科书深度低位。' },
    vs_weak: { label: '对弱队：反击', detail: '对苏格兰已验证低位。' },
    tournament: 'Migné 强调定位球与纪律——「不要给 Vinícius 身后空间」。',
    traits: ['5 后卫', '低位', 'Pierrot 支点', 'Nazon 替补后手'],
  }),
  montella: coach('Vincenzo Montella', {
    age: 50, nation: '意大利', tenure: '2023年—', wc_exp: '2024 欧洲杯 · 2026 带队',
    style_tags: ['4-2-3-1', 'Güler 肋部', 'Yıldız 爆点', '控球'],
    formation_pref: '4-2-3-1 · Çalhanoğlu 组织',
    style_summary: '0-2 澳大利亚后 D 组形势严峻——72% 控球 0 球遭质疑。对巴拉圭生死战 Yildiz+Güler 双核呼声高，必须拿出不同态度。',
    subs: { timing: '首换 55–60 分钟', pattern: 'Yıldız 次轮回归首发', avg_first_sub: '58\'', note: '更衣室压力极大' },
    when_leading: { label: '控节奏', detail: '1 球领先：Çalhanoğlu 节拍器。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：立即 Yıldız 加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对澳大利亚已暴露效率问题。' },
    vs_weak: { label: '对弱队：压上', detail: '对巴拉圭必须取胜。' },
    tournament: 'Montella 强调肋部渗透；Aktürkoglu 突任中锋遭质疑。',
    traits: ['Güler 核心', '控球', '效率危机', '生死战'],
  }),
  alfaro: coach('Gustavo Alfaro', {
    age: 62, nation: '阿根廷', tenure: '2023年—', wc_exp: '2021 美洲杯季军（厄瓜多尔）· 2026 带队',
    style_tags: ['4-4-2', 'Almirón 速度', '低位', '身体对抗'],
    formation_pref: '4-4-2 · Enciso 前腰',
    style_summary: '0-4 美国是痛苦一课，Enciso 复出缓解创造力危机。对土耳其已无路可退——Alfaro 称「防守是我们的语言，但本场需要进球」。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Enciso+Almirón 组合', avg_first_sub: '68\'', note: '弱队体能分配' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：Almirón 反击加码。' },
    vs_strong: { label: '对强队：低位+反击', detail: '对美国已验证低位。' },
    vs_weak: { label: '对弱队：相对开放', detail: '对土耳其必须进攻。' },
    tournament: '预选赛 12 场仅 1 负的防守体系；Enciso 助攻成少数亮点。',
    traits: ['Almirón 速度', 'Enciso 复出', '低位', '已无路可退'],
  }),
};

const NOTES = {
  'pochettino-arnold': {
    home: '西雅图主场——Pulisic/Reyna 宽度+Adams 屏障；D 组同积 3 分，胜者握出线主动。',
    away: '5-4-1 低位+Beach 一门；对土耳其 2-0 模板，Irankunda 反击是唯一威胁路径。',
  },
  'clarke-regragui': {
    home: 'C 组均分乱局——McTominay/McGinn vs Hakimi；Gilmour 报销后中场创造力是隐患。',
    away: '2022 四强信心+Saibari 偷袭；客场波士顿抢 3 分改变格局，Robertson-Hakimi 对位关键。',
  },
  'ancelotti-migne': {
    home: '仅 1 分不容再失——Vinícius+Paquetá 早段破局；Neymar 每日观察，4-4-2 变阵或延续。',
    away: '5 后卫深度低位+Bellegarde 枢纽；费城湿热拖慢节奏，定位球是唯一偷分路径。',
  },
  'montella-alfaro': {
    home: '0-2 后生死战——Yıldız+Güler 肋部 vs 巴拉圭低位；72% 控球 0 球不可再犯。',
    away: 'Enciso+Almirón 反击组合；Alfaro 必须进球但传统低位+身体对抗仍是底色。',
  },
};

const UPSET_ALERTS = {
  m32: {
    favorite: 'USA', underdog: 'Australia', favorite_iso: 'USA',
    index: 26, level: 'LOW', level_cn: '低',
    cold_result_pct: 22,
    verdict: '东道主西雅图+揭幕战 4-1 气势——澳大利亚 5-4-1 低位仍有约 22% 平局/偷分空间（对土耳其 2-0 已验证）。',
    tactical: 'Pochettino 4-3-3 宽度 vs Arnold 5-4-1 低位；Pulisic 对位 Souttar，Beach 一门稳定性是变量。',
    psychology: '美国「当成决赛踢」；澳大利亚「每次大赛被低估」。',
    historical: '美国近年 H2H 占优；澳大利亚对土耳其反击高效。',
    factors: [
      { tag: '主场', impact: '强', detail: 'Lumen Field 7 万观众+凉爽气候' },
      { tag: '低位', impact: '中', detail: '澳大利亚 5-4-1 对土耳其已验证' },
      { tag: 'D组形势', impact: '强', detail: '双方同积 3 分，胜者握主动' },
    ],
  },
  m30: {
    favorite: 'Morocco', underdog: 'Scotland', favorite_iso: 'MAR',
    index: 38, level: 'MEDIUM', level_cn: '中等',
    cold_result_pct: 32,
    verdict: 'C 组均分乱局——摩洛哥 1-1 巴西后盘口略被看好，但 McGinn/McTominay 主场气势使苏格兰冷平空间约 30%。',
    tactical: 'Clarke 4-2-3-1 Robertson 宽度 vs Regragui 4-3-3 Hakimi 爆点；Gilmour 缺阵是苏格兰中场变量。',
    psychology: '苏格兰 C 组领跑 3 分士气高；摩洛哥 2022 四强信心延续。',
    historical: '摩洛哥近年 H2H 更强；苏格兰首轮 xG 1.05 险胜海地。',
    factors: [
      { tag: '均势', impact: '强', detail: 'xG 1.35–1.28 接近均势' },
      { tag: '停赛/伤病', impact: '中', detail: 'Gilmour 报销；Aguerd/Abde 报销' },
      { tag: 'Hakimi', impact: '强', detail: '边路对 Robertson 是关键对位' },
    ],
  },
  m29: {
    favorite: 'Brazil', underdog: 'Haiti', favorite_iso: 'BRA',
    index: 18, level: 'LOW', level_cn: '低',
    cold_result_pct: 12,
    verdict: '巴西 xG 1.85 深盘但仅 1 分压力——海地 5 后卫低位或拖慢节奏，冷门空间约 12%（平局/0-0 偷分）。',
    tactical: 'FIFA 官方：Ancelotti 4-4-2 vs Migné 5-4-1（Nazon 替补 · Pierrot 支点）',
    psychology: '巴西「最不容再失分」；海地首次正赛无包袱。',
    historical: '无大赛交锋；海地对苏格兰 0-1 防守尚可。',
    factors: [
      { tag: '深盘', impact: '中', detail: '市场 -2.5 高于 xG 隐含' },
      { tag: '低位', impact: '强', detail: '海地 5 后卫+定位球' },
      { tag: 'Neymar', impact: '中', detail: 'FIFA 官方替补 · 60\' 后破局后手' },
    ],
  },
  m31: {
    favorite: 'Türkiye', underdog: 'Paraguay', favorite_iso: 'TUR',
    index: 34, level: 'MEDIUM', level_cn: '中等',
    cold_result_pct: 28,
    verdict: 'D 组生死战——土耳其 0-2 后必须取胜但效率成疑；巴拉圭 Enciso+Almirón 反击使平局约 28%。',
    tactical: 'Montella 4-2-3-1 Yıldız/Güler 肋部 vs Alfaro 4-4-2 低位+Almirón 速度。',
    psychology: '土耳其 72% 控球 0 球遭质疑；巴拉圭「已无路可退」。',
    historical: '友谊赛土耳其占优；巴拉圭预选赛防守稳固。',
    factors: [
      { tag: '效率', impact: '强', detail: '土耳其首轮 30 射 8 正 0 球' },
      { tag: '反击', impact: '中', detail: 'Almirón+Enciso 组合' },
      { tag: '低比分', impact: '强', detail: '大小 2.5 偏小，谨慎对攻' },
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
  m32: { homeKey: 'pochettino', awayKey: 'arnold' },
  m30: { homeKey: 'clarke', awayKey: 'regragui' },
  m29: { homeKey: 'ancelotti', awayKey: 'migne' },
  m31: { homeKey: 'montella', awayKey: 'alfaro' },
};

module.exports = { PROFILES, buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS };
