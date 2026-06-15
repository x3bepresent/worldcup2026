/**
 * 主教练深度分析 — Day 5 (m13–m16)
 */
function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  delafuente: coach('Luis de la Fuente', {
    age: 63,
    nation: '西班牙',
    tenure: '2022年—',
    wc_exp: '2024 欧洲杯冠军 · 2026 带队',
    style_tags: ['4-3-3', '传控', '肋部渗透', 'Yamal 宽度'],
    formation_pref: '4-3-3 · 必要时 4-2-3-1',
    style_summary:
      '欧洲杯冠军班底，Pedri 节拍 + Yamal/Williams 双翼宽度。de la Fuente 强调控球主导与高位线协同，对弱队不留余地但会 3–0 后轮换。',
    subs: { timing: '首换 60–65 分钟；3 球领先 55\' 起轮换', pattern: '常换 Olmo/Oyarzabal 互替；70\' 换 Zubimendi 控场', avg_first_sub: '62\'', note: '欧洲杯期间轮换合理，大赛经验足' },
    when_leading: { label: '控节奏 · 适度轮换', detail: '2 球+：60\' 换 Yamal 保体能，仍维持 4-3-3 宽度，不会彻底收手。' },
    when_trailing: { label: '加边锋 · 堆前场', detail: '先丢球：55\' 换 Morata/额外边锋，肋部渗透加码。' },
    vs_strong: { label: '对强队：传控对攻', detail: '对德国/法国级仍坚持控球，但肋部保护加强。' },
    vs_weak: { label: '对弱队：全场压制', detail: '对佛得角预计 70%+ 控球，Yamal 右路是破局核心，3–0 后仍主攻但 65\' 轮换。' },
    tournament: '2024 欧洲杯冠军，大赛心理硬度已验证；H 组揭幕战必须开门红。',
    traits: ['传控主导', '轮换合理', '对弱队不留余地', 'Yamal 依赖'],
  }),

  bubista: coach('Bubista', {
    age: 48,
    nation: '佛得角',
    tenure: '2020年—',
    wc_exp: '2026 带队 · 2023 非洲杯八强',
    style_tags: ['4-4-2', '低位防守', '反击', '定位球'],
    formation_pref: '4-4-2 · 领先时 5-4-1',
    style_summary:
      '2023 非洲杯八强黑马主帅，世界杯首秀必然低位。五后卫/四中场压缩，Mendes 反击 + 定位球是唯一威胁。',
    subs: { timing: '首换 65–75 分钟；落后 60\' 换前锋', pattern: '单换边锋或前锋；很少早换', avg_first_sub: '70\'', note: '弱队体能分配优先，换人偏晚' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守，耗到终场。' },
    when_trailing: { label: '维持低位', detail: '先丢球 unlikely 大举压上——更可能换一名前锋加强定位球。' },
    vs_strong: { label: '对强队：龟缩', detail: '本场对西班牙是教科书弱队踢法：前 30 分钟零封是胜利。' },
    vs_weak: { label: '不适用', detail: '世界杯 H 组无弱于佛得角的对手。' },
    tournament: '非洲杯黑马经验，大赛首秀球员心理是最大变量。',
    traits: ['防守纪律', '换人极晚', '定位球', '反击速度'],
  }),

  garcia: coach('Rudy Garcia', {
    age: 60,
    nation: '比利时/法国',
    tenure: '2025年—',
    wc_exp: '2012 欧洲杯冠军（助理）· 2026 带队',
    style_tags: ['4-2-3-1', 'De Bruyne 核心', '边路速度', '定位球'],
    formation_pref: '4-2-3-1 · Doku 宽度',
    style_summary:
      '黄金一代末班车，De Bruyne 前腰 + Lukaku 支点 + Doku 爆点。Garcia 大赛慢热有前例，但 G 组揭幕必须取 3 分。',
    subs: { timing: '首换 58–65 分钟；落后 55\' 变阵', pattern: '常换 Trossard/Doku 边锋；70\' 换 Tielemans 控场', avg_first_sub: '60\'', note: '2012 欧洲杯助理经验，临场调整稳健' },
    when_leading: { label: '继续进攻 · 不早退', detail: '1 球领先：维持 4-2-3-1，De Bruyne 仍前插；2 球+：65\' 轮换但保持宽度。' },
    when_trailing: { label: '堆前锋 · 加时压迫', detail: '先丢球：55\' 换 Trossard 或改 3-4-3 堆边锋。' },
    vs_strong: { label: '对强队：对攻', detail: '对法国级会高位对攻；对埃及预计全场压制。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对新西兰/埃及弱于比利时时全场压制，Lukaku 目标至少 1 球。' },
    tournament: '接替 Domenico Tedesco，大赛经验来自 2012 助理角色；G 组慢热是历史弱点。',
    traits: ['De Bruyne 依赖', '大赛慢热', '边路速度', '定位球'],
  }),

  hassan: coach('Hossam Hassan', {
    age: 58,
    nation: '埃及',
    tenure: '2024年—',
    wc_exp: '球员时代 1990 世界杯 · 2026 执教',
    style_tags: ['4-3-3', 'Salah 核心', '低位转换', '定位球'],
    formation_pref: '4-3-3 · 领先时 4-5-1',
    style_summary:
      '埃及传奇前锋转型主帅，进攻完全围绕 Salah。面对比利时预计 4-5-1 低位，Marmoush 反击 + Salah 速度是唯一变数。',
    subs: { timing: '首换 60–70 分钟；落后 55\' 换进攻手', pattern: '常换 Trezeguet/Marmoush；Salah 极少被换下', avg_first_sub: '65\'', note: 'Salah 打满 90 分钟是常态' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先：退守五后卫，Salah 留前场反击。' },
    when_trailing: { label: 'Salah 单核 · 定位球', detail: '先丢球：60\' 换 Trezeguet 加强宽度，Salah 仍核心。' },
    vs_strong: { label: '对强队：龟缩 + Salah', detail: '对比利时：低位 + Salah 反击，守 0–0 求 1 分合理。' },
    vs_weak: { label: '对弱队：相对开放', detail: '对新西兰会压上；对比利时不适用。' },
    tournament: '7 次世界杯球员经验，但执教大赛首秀；Salah 一人球队属性明显。',
    traits: ['Salah 依赖', '低位防守', '大赛经验（球员）', '定位球'],
  }),

  mancini: coach('Georgios Donis', {
    age: 54,
    nation: '希腊',
    tenure: '2025年—',
    wc_exp: '2026 带队 · 沙特/希腊联赛经验',
    style_tags: ['3-5-2', '低位防守', '转换', '2022 爆冷 DNA'],
    formation_pref: '3-5-2 / 3-5-1-1 · 极端时 5-4-1',
    style_summary:
      '希腊籍主帅，三中卫低位体系。Al-Dawsari/Al-Buraikan 前场双核，2022 对阿根廷 2–1 仍是心理资产，但对 Bielsa 压迫强度完全不同。',
    subs: { timing: '首换 60–68 分钟；落后 55\' 换前锋', pattern: '常换 Al-Shehri/Al-Buraikan；Al-Faraj 极少换下', avg_first_sub: '63\'', note: '对厄瓜多尔热身 1-2 负，大赛前状态一般' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先（对乌拉圭极低）：退守 + Al-Dawsari 反击。' },
    when_trailing: { label: '换前锋 · 定位球', detail: '先丢球：60\' 换 Al-Buraikan 加强冲击，但低位底线不变。' },
    vs_strong: { label: '对强队：低位 + 偷分', detail: '对乌拉圭：3-5-2 低位，Al-Owais 替 Al-Aqidi 一门；Bielsa 压迫下 60\' 后体能是考验。' },
    vs_weak: { label: '不适用', detail: 'H 组乌拉圭/西班牙均强于沙特。' },
    tournament: '2022 沙特爆冷阿根廷是最大心理资产；全队仅 Abdulhamid 一名海外球员。',
    traits: ['低位防守', '三中卫', '2022 爆冷 DNA', 'Al-Dawsari 依赖'],
  }),

  bielsa: coach('Marcelo Bielsa', {
    age: 70,
    nation: '阿根廷',
    tenure: '2023年—',
    wc_exp: '2010 世界杯（智利）· 2026 二度带队大赛',
    style_tags: ['4-4-2 高位', '疯狂压迫', 'Valverde 覆盖', 'Núñez 支点'],
    formation_pref: '4-4-2 · 全场 man-marking 变体',
    style_summary:
      'Bielsa 高位压迫世界杯顶级强度，Valverde 覆盖 + Núñez 支点 + Pellistri 速度。对沙特预计全场压制，先破门则指数骤降。',
    subs: { timing: '首换 55–62 分钟；Bielsa 换人果断', pattern: '常换 Pellistri/中场；70\' 第三波调整', avg_first_sub: '58\'', note: 'Bielsa 风格换人偏早且批量' },
    when_leading: { label: '继续压迫 · 不松懈', detail: '1 球领先：维持高位，Bielsa 极少早退；2 球+：65\' 轮换但压迫强度不减。' },
    when_trailing: { label: '更疯压迫 · 堆前锋', detail: '先丢球：55\' 换进攻手，压迫强度反而加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对西班牙会高位对攻；对沙特全场压制。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对沙特预计 xG 1.85+ 全场压制，Núñez 目标至少 1 球。' },
    tournament: '2010 智利世界杯八强经验；乌拉圭 2026 预选赛强势，Bielsa 体系已磨合 2 年+。',
    traits: ['高位压迫', '换人果断', '体能消耗大', 'Valverde 覆盖'],
  }),

  ghalenoei: coach('Amir Ghalenoei', {
    age: 61,
    nation: '伊朗',
    tenure: '2023年—',
    wc_exp: '2026 带队 · 亚冠/伊朗联赛经验',
    style_tags: ['4-3-3', '防守纪律', 'Taremi 支点', '定位球'],
    formation_pref: '4-3-3 · 领先时 4-5-1',
    style_summary:
      '预选赛 10 场 10 零封，防守纪律亚洲顶级。Taremi/Azmoun 双锋，Ezatolahi 后腰屏障，对新西兰预计全场压制。',
    subs: { timing: '首换 60–70 分钟；领先 65\' 换防守', pattern: '常换 Jahanbakhsh/Ghoddos 边路；Taremi 极少换下', avg_first_sub: '65\'', note: '伊朗换人偏保守，领先易收缩' },
    when_leading: { label: '4-5-1 控节奏', detail: '1 球领先：退守五后卫，Taremi 留前场；2 球+：70\' 换防守中场。' },
    when_trailing: { label: '堆前锋 · 定位球', detail: '先丢球：60\' 换 Azmoun 双锋，加强定位球。' },
    vs_strong: { label: '对强队：低位', detail: '对比利时/埃及级会 4-5-1 低位；对新西兰全场压制。' },
    vs_weak: { label: '对弱队：控制', detail: '对新西兰预计 60%+ 控球，Taremi 背身是破局关键。' },
    tournament: '预选赛防守顶级；大赛进攻创造力仍是伊朗历史弱点。',
    traits: ['防守铁桶', 'Taremi 依赖', '领先易保守', '定位球'],
  }),

  bazeley: coach('Darren Bazeley', {
    age: 53,
    nation: '新西兰',
    tenure: '2023年—',
    wc_exp: '2026 带队 · 大洋洲联赛经验',
    style_tags: ['4-4-2', 'Wood 支点', '低位', '定位球'],
    formation_pref: '4-4-2 · 领先时 5-4-1',
    style_summary:
      '大洋洲附加赛晋级，Wood 英超支点 + 低位 4-4-2 是现实选择。面对伊朗预计全场被动，定位球是唯一威胁。',
    subs: { timing: '首换 65–75 分钟', pattern: '常单换前锋或边卫；Wood 打满概率高', avg_first_sub: '70\'', note: '弱队换人偏晚' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守，Wood 留前场。' },
    when_trailing: { label: '维持低位', detail: '先丢球 unlikely 压上——Wood 定位球是唯一希望。' },
    vs_strong: { label: '对强队：龟缩', detail: '对伊朗：4-4-2 低位，Wood 定位球 + 长传。' },
    vs_weak: { label: '不适用', detail: 'G 组无弱于新西兰的对手。' },
    tournament: '大赛经验有限，Wood 一人球队属性明显。',
    traits: ['Wood 依赖', '低位防守', '定位球', '大赛经验少'],
  }),
};

function matchNote(homeKey, awayKey) {
  const notes = {
    'delafuente-bubista': {
      home: 'H 组揭幕必须开门红——预计最强 XI，Yamal 右路；3–0 后 65\' 轮换但维持宽度。',
      away: '4-4-2 低位守前 30 分钟，Mendes 反击 + 定位球偷分；0–2 后 70\' 才可能改三前锋。',
    },
    'garcia-hassan': {
      home: 'G 组揭幕 De Bruyne 必须主导——大赛慢热是隐患，领先也不早退；Salah 反击是最大威胁。',
      away: '4-5-1 低位求 1 分，Salah 留前场；若 0–0 进入 70\' 对埃及即是胜利。',
    },
    'mancini-bielsa': {
      home: '2022 爆冷 DNA 仍在，但 Bielsa 压迫强度完全不同——4-5-1 低位，60\' 后体能是考验。',
      away: '全场高位压迫，先破门则沙特崩盘概率 75%+；Valverde 覆盖是破局关键。',
    },
    'ghalenoei-bazeley': {
      home: '预选赛 10 零封防守纪律——对新西兰预计压制，Taremi 背身 + 定位球破局；领先易保守。',
      away: 'Wood 定位球 + 长传是唯一威胁，4-4-2 低位守 0–0 求 1 分是现实目标。',
    },
  };
  return notes[`${homeKey}-${awayKey}`] || { home: '', away: '' };
}

function buildCoachAnalysis(homeKey, awayKey) {
  const notes = matchNote(homeKey, awayKey);
  return {
    home: { ...PROFILES[homeKey], match_note: notes.home },
    away: { ...PROFILES[awayKey], match_note: notes.away },
  };
}

module.exports = { PROFILES, buildCoachAnalysis };
