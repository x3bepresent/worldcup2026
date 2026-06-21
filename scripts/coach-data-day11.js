/** Day 11 coach profiles & upset alerts — m37–m40 */
function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  delafuente: coach('Luis de la Fuente', {
    age: 63, nation: '西班牙', tenure: '2022年—', wc_exp: '2024 欧洲杯冠军 · 2026 带队',
    style_tags: ['4-3-3', '传控', 'Yamal 宽度', 'Pedri 节拍'],
    formation_pref: '4-3-3 · Olmo 10 号位',
    style_summary: '0-0 佛得角后 H 组形势急转；de la Fuente 预计最强 XI，Yamal+Pedri 肋部破局 vs Renard 5-4-1 铁桶。',
    subs: { timing: '首换 55–60 分钟', pattern: 'Morata/Oyarzabal 互替；70\' 换 Zubimendi 控场', avg_first_sub: '58\'', note: '0-0 后换人会更早' },
    when_leading: { label: '继续宽度', detail: '1 球领先：维持 4-3-3，不早退；2 球+：65\' 轮换。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：55\' 加 Morata/额外边锋。' },
    vs_strong: { label: '对强队：传控对攻', detail: '对乌拉圭会高位对攻。' },
    vs_weak: { label: '对弱队：必须穿盘', detail: '对沙特仍须 3 分，xG 2.25 须兑现。' },
    tournament: '欧洲杯冠军班底；0-0 佛得角是本届最大意外之一。',
    traits: ['Yamal 核心', '必须取胜', '破密集', '终结效率'],
  }),
  renard: coach('Manuel Hervé Renard', {
    age: 56, nation: '法国/沙特', tenure: '2024年—', wc_exp: '2012/2015 非洲杯冠军 · 2022 沙特带队',
    style_tags: ['5-4-1', '低位', 'Al-Dawsari 反击', '2022 DNA'],
    formation_pref: '5-4-1 · Al-Owais 一门',
    style_summary: '1-1 乌拉圭后信心回升；对西班牙 Renard 预计更低位，Al-Dawsari 反击 + 定位球偷分是唯一路径。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Al-Buraikan/Al-Shehri 后手', avg_first_sub: '68\'', note: '弱队体能优先' },
    when_leading: { label: '5-5 铁桶', detail: '若意外领先：全员退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对西班牙教科书 5-4-1。' },
    vs_weak: { label: '不适用', detail: 'H 组无弱于沙特的对手。' },
    tournament: '2022 对阿根廷 2-1 仍是心理资产；Renard 大赛低位经验足。',
    traits: ['极深低位', 'Al-Dawsari', '2022 DNA', '偷分动机'],
  }),
  tedesco: coach('Domenico Tedesco', {
    age: 39, nation: '德国/意大利', tenure: '2024年—', wc_exp: '2024 欧洲杯 · 沙尔克/莱比锡经验',
    style_tags: ['3-4-2-1', 'De Bruyne 核心', 'Doku 宽度', '三中卫'],
    formation_pref: '3-4-2-1 · Lukaku 支点',
    style_summary: '1-1 埃及后 G 组乱局；Tedesco 预计 3-4-2-1 全场压制，KDB+Doku 肋部 vs Ghalenoei 铁桶。',
    subs: { timing: '首换 58–65 分钟', pattern: 'Trossard/Lukaku 互替', avg_first_sub: '61\'', note: 'G 组须抢分' },
    when_leading: { label: '继续进攻', detail: '1 球领先：维持宽度，De Bruyne 仍前插。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：55\' 改 3-4-3 堆边锋。' },
    vs_strong: { label: '对强队：对攻', detail: '对埃及 1-1 后须更激进。' },
    vs_weak: { label: '对弱队：穿盘', detail: '对伊朗 xG 1.92 须兑现。' },
    tournament: '接替 Garcia 后战术更灵活；G 组四队均 1 分。',
    traits: ['KDB 核心', '三中卫', '必须取胜', 'Doku 爆点'],
  }),
  ghalenoei: coach('Amir Ghalenoei', {
    age: 61, nation: '伊朗', tenure: '2023年—', wc_exp: '2026 带队 · 亚冠经验',
    style_tags: ['4-1-4-1', 'Taremi 支点', 'Ezatolahi 屏障', '定位球'],
    formation_pref: '4-1-4-1 · 领先时 4-5-1',
    style_summary: '2-2 新西兰进攻回暖；对比利时 Ghalenoei 或 4-5-1 低位求 1 分，Taremi 背身 + 定位球是冷门点。',
    subs: { timing: '首换 60–70 分钟', pattern: 'Jahanbakhsh/Ghoddos 边路', avg_first_sub: '65\'', note: '领先易收缩' },
    when_leading: { label: '4-5-1 收缩', detail: '1 球领先：五后卫，Taremi 留前场。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：60\' 加强定位球。' },
    vs_strong: { label: '对强队：低位', detail: '对比利时低位 + Taremi 反击合理。' },
    vs_weak: { label: '对弱队：压制', detail: '2-2 新西兰已验证进攻。' },
    tournament: '预选赛 10 零封；无 Azmoun 后 Taremi 单核。',
    traits: ['Taremi 核心', '防守纪律', '定位球', '偷分动机'],
  }),
  bielsa: coach('Marcelo Bielsa', {
    age: 70, nation: '阿根廷', tenure: '2023年—', wc_exp: '2010 世界杯（智利）· 2026 带队',
    style_tags: ['4-2-3-1', '高位压迫', 'Valverde 覆盖', 'Núñez 支点'],
    formation_pref: '4-2-3-1 · 全场压迫',
    style_summary: '1-1 沙特控球碾压未赢；对 0-0 西班牙的佛得角 Bielsa 须破密集，Núñez+远射+定位球是破局组合。',
    subs: { timing: '首换 55–62 分钟', pattern: 'Pellistri/前锋批量换', avg_first_sub: '58\'', note: '迈阿密湿热轮换或更早' },
    when_leading: { label: '继续压迫', detail: '1 球领先：维持高位。' },
    when_trailing: { label: '更疯压迫', detail: '先丢球：压迫加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对西班牙高位对攻。' },
    vs_weak: { label: '对弱队：必须穿盘', detail: '对佛得角 xG 1.78 须兑现。' },
    tournament: '防线仍有 Giménez/Araújo 疑虑；压迫强度不变。',
    traits: ['高位压迫', '破密集', 'Núñez 核心', '湿热体能'],
  }),
  bubista: coach('Bubista', {
    age: 48, nation: '佛得角', tenure: '2020年—', wc_exp: '2023 非洲杯八强 · 2026 带队',
    style_tags: ['5-4-1', 'Vozinha 铁桶', 'Bebé 反击', '定位球'],
    formation_pref: '5-4-1 · Vozinha 一门',
    style_summary: '0-0 西班牙后信心暴涨；Bubista 对乌拉圭同样 5-4-1，Vozinha+Stopira 防空是生存之本。',
    subs: { timing: '首换 70 分钟+', pattern: '单换前锋；极少早换', avg_first_sub: '72\'', note: '弱队体能优先' },
    when_leading: { label: '5-5 铁桶', detail: '若意外领先：全员退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对乌拉圭/西班牙同一模板。' },
    vs_weak: { label: '不适用', detail: 'H 组最弱。' },
    tournament: '0-0 西班牙是本届最大冷门之一；更衣室士气高涨。',
    traits: ['Vozinha', '5 后卫', '定位球', '偷分动机'],
  }),
  kalezic: coach('Darije Kalezić', {
    age: 48, nation: '黑山/新西兰', tenure: '2024年—', wc_exp: '2026 带队 · 大洋洲联赛经验',
    style_tags: ['4-4-2', 'Wood 支点', 'Just 前插', '定位球'],
    formation_pref: '4-4-2 · Wood+Just 连线',
    style_summary: '2-2 伊朗 Just 双响后士气大振；对埃及 Kalezić 预计 4-4-2 对攻，Wood 头球 + Just 前插 vs Salah。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Wood 打满；Just 后段或替补', avg_first_sub: '67\'', note: 'G 组须抢分' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先：退守 + Wood 留前场。' },
    when_trailing: { label: '堆前锋', detail: '先丢球：60\' 加强定位球。' },
    vs_strong: { label: '对强队：对攻', detail: '2-2 伊朗后信心提升；对埃及仍处下风。' },
    vs_weak: { label: '不适用', detail: 'G 组最弱之一。' },
    tournament: '2-2 伊朗是大赛最佳表现；Salah 是全新级别考验。',
    traits: ['Wood+Just', '定位球', '士气回升', 'Salah 对位'],
  }),
  vitoria: coach('Rui Vitória', {
    age: 54, nation: '葡萄牙', tenure: '2024年—', wc_exp: '本菲卡/沙特联赛 · 2026 带队',
    style_tags: ['4-2-3-1', 'Salah 核心', 'Marmoush 跑动', '定位球'],
    formation_pref: '4-2-3-1 · Salah RW',
    style_summary: '1-1 比利时后 Vitória 强调 Salah+Marmoush 双核；对新西兰预计全场压制，定位球是破局手段。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Trezeguet/Mostafa Mohamed 互替', avg_first_sub: '63\'', note: 'Salah 极少换下' },
    when_leading: { label: '控节奏', detail: '1 球领先：Elneny 屏障。' },
    when_trailing: { label: 'Salah 单核', detail: '先丢球：堆边锋。' },
    vs_strong: { label: '对强队：低位+Salah', detail: '对比利时 1-1 已验证。' },
    vs_weak: { label: '对弱队：穿盘', detail: '对新西兰须 3 分。' },
    tournament: '接替 Hassan 后战术更开放；Salah 仍是绝对核心。',
    traits: ['Salah 依赖', 'Marmoush', '必须取胜', '定位球'],
  }),
};

const NOTES = {
  'delafuente-renard': {
    home: '0-0 后须 3 分——Yamal+Pedri 肋部 vs Renard 5-4-1；亚特兰大夏午宜早破局。',
    away: '1-1 乌拉圭后更低位；Al-Dawsari 反击 + 2022 DNA，1 分即是胜利。',
  },
  'tedesco-ghalenoei': {
    home: 'G 组乱局须 3 分——KDB+Doku 3-4-2-1 压制 vs Taremi 背身。',
    away: '2-2 新西兰进攻回暖；对比利时或 4-5-1 低位，Taremi 定位球是冷门点。',
  },
  'bielsa-bubista': {
    home: '1-1 沙特控球未赢——对 0-0 西班牙的佛得角须转化 xG；迈阿密湿热体能变量。',
    away: '0-0 西班牙信心暴涨；Vozinha 铁桶 + Bebé 反击，1 分仍是目标。',
  },
  'kalezic-vitoria': {
    home: '2-2 伊朗 Just 双响——Wood+Just vs Salah 全新级别；温哥华凉爽利于对攻。',
    away: '1-1 比利时后须 3 分——Salah+Marmoush 肋部 vs Wood 头球。',
  },
};

const UPSET_ALERTS = {
  m38: {
    favorite: 'Spain', underdog: 'Saudi Arabia', favorite_iso: 'ESP',
    index: 18, level: 'LOW', level_cn: '低',
    cold_result_pct: 12,
    verdict: '西班牙 0-0 佛得角后深盘——Renard 5-4-1 + Al-Dawsari 反击使平局/冷胜空间约 12%。',
    tactical: 'de la Fuente 4-3-3 控球 vs Renard 5-4-1；Yamal 肋部破局是关键。',
    psychology: '西班牙「必须 3 分」；沙特「2022 精神 + 1-1 乌拉圭信心」。',
    historical: '大赛西班牙占优；沙特 2022 对阿根廷仍是心理资产。',
    factors: [
      { tag: '铁桶', impact: '强', detail: 'Renard 5-4-1 极守' },
      { tag: '0-0', impact: '强', detail: '西班牙终结效率成疑' },
      { tag: '气候', impact: '中', detail: '亚特兰大 30°C 夏午' },
    ],
  },
  m39: {
    favorite: 'Belgium', underdog: 'Iran', favorite_iso: 'BEL',
    index: 28, level: 'MEDIUM', level_cn: '中等',
    cold_result_pct: 25,
    verdict: 'G 组均分乱局——伊朗 2-2 新西兰进攻回暖 + Ghalenoei 铁桶，平局/伊朗冷胜约 25%。',
    tactical: 'Tedesco 3-4-2-1 vs Ghalenoei 4-5-1；Taremi 背身 vs Onana 屏障。',
    psychology: '比利时「必须 3 分」；伊朗「2-2 后可以进攻」。',
    historical: '友谊赛比利时略优；伊朗预选赛防守顶级。',
    factors: [
      { tag: 'Taremi', impact: '强', detail: '2-2 新西兰破门' },
      { tag: 'G组乱局', impact: '强', detail: '四队均 1 分' },
      { tag: '气候', impact: '低', detail: 'SoFi 26°C 影响小' },
    ],
  },
  m37: {
    favorite: 'Uruguay', underdog: 'Cape Verde', favorite_iso: 'URU',
    index: 22, level: 'LOW', level_cn: '低',
    cold_result_pct: 18,
    verdict: '乌拉圭 1-1 沙特控球未赢——0-0 西班牙的佛得角 Vozinha 铁桶使平局偷分约 18%。',
    tactical: 'Bielsa 4-2-3-1 压迫 vs Bubista 5-4-1；Núñez 破密集是关键。',
    psychology: '乌拉圭「控球≠胜利」；佛得角「0-0 西班牙可以复制」。',
    historical: '无大赛交锋；佛得角 0-0 西班牙是最大冷门信号。',
    factors: [
      { tag: 'Vozinha', impact: '强', detail: '0-0 西班牙 MOM' },
      { tag: '湿热', impact: '中', detail: '迈阿密 31°C/78%' },
      { tag: '破密集', impact: '强', detail: 'Bielsa 须转化 xG' },
    ],
  },
  m40: {
    favorite: 'Egypt', underdog: 'New Zealand', favorite_iso: 'EGY',
    index: 26, level: 'MEDIUM', level_cn: '中等',
    cold_result_pct: 22,
    verdict: '埃及 Salah 领衔但 1-1 比利时效率一般——Wood+Just 2-2 伊朗后冷门平局约 22%。',
    tactical: 'Vitória 4-2-3-1 vs Kalezić 4-4-2；Salah 肋部 vs Wood 头球。',
    psychology: '埃及「须 3 分」；新西兰「2-2 伊朗可以再来」。',
    historical: '2003 友谊赛伊朗 3-0 新西兰；G 组势均力敌。',
    factors: [
      { tag: 'Wood+Just', impact: '强', detail: '2-2 伊朗 Just 双响' },
      { tag: 'Salah', impact: '强', detail: 'G 组最大个人威胁' },
      { tag: '气候', impact: '低', detail: '温哥华 19°C 凉爽' },
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
  m38: { homeKey: 'delafuente', awayKey: 'renard' },
  m39: { homeKey: 'tedesco', awayKey: 'ghalenoei' },
  m37: { homeKey: 'bielsa', awayKey: 'bubista' },
  m40: { homeKey: 'kalezic', awayKey: 'vitoria' },
};

module.exports = { PROFILES, buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS };
