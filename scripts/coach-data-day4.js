/**
 * 主教练深度分析数据 — Day 4 (m09–m12)
 * Used by scripts/roll-day4.js
 */

function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  nagelsmann: coach('Julian Nagelsmann', {
    age: 38,
    nation: '德国',
    tenure: '2023年9月—',
    wc_exp: '2018 俄罗斯（德国）· 2026 二度执教',
    style_tags: ['高位压迫', '灵活变阵', '肋部渗透', '控球主导'],
    formation_pref: '4-2-3-1 · 必要时 3-4-2-3',
    style_summary:
      '典型的现代德国流派：前场五人组（Musiala/Wirtz/Sané）灵活换位，双后腰保护防线；压迫触发点在对方后卫线接球。纳格尔斯曼以赛前战术准备精细著称，半场调整能力在欧洲顶级。',
    subs: {
      timing: '首换通常 58–65 分钟；领先时略晚（65+），落后时 55 分钟前即变阵',
      pattern: '常见 60\' 同时换 2 人：边锋/10号位 + 中场；75\' 第三波加强控球或提速',
      avg_first_sub: '58\'',
      note: '2024 欧洲杯期间场均首换 59\'；落后时 46–55\' 即改三中卫或加前锋的案例增多',
    },
    when_leading: {
      label: '控节奏 · 适度收手',
      detail:
        '1 球领先：维持压迫但降低冒险传球，双后腰不前压过深；2 球+：60\' 后轮换 Musiala/Wirtz 等核心，Beier/Undav 提速。极少彻底龟缩，但会降 tempo 控场。',
    },
    when_trailing: {
      label: '加码进攻 · 变阵激进',
      detail:
        '先丢球：半场或 55\' 前换进攻型边卫/第三前锋；0–0 僵局 70\' 后换 Woltemade/Beier 高空轰炸。2024 欧洲杯对瑞士先丢球后 15 分钟内连换 3 人追平的模板可能复用。',
    },
    vs_strong: {
      label: '对强队：高位对攻',
      detail:
        '对法国/西班牙级对手仍坚持压迫，但肋部保护加强；不主动放弃控球。心理层面「必须证明自己」时易压上过猛，是被反击的主要风险点。',
    },
    vs_weak: {
      label: '对弱队：不留余地 · 适度轮换',
      detail:
        '对排名 50+ 球队通常全场压制，半场 2–0+ 后 60\' 起轮换替补但维持 4-2-3-1 进攻阵型——「训练新兵」出现在 3 球领先后的 75\'+，而非 60\' 就松懈。本场对库拉索预计属于此模式。',
    },
    tournament: '大赛型教练——2024 欧洲杯四强，临场调整获好评；2026 五届 Neuer 复出后更强调经验与活力的平衡。',
    traits: ['半场调整强', '变阵灵活', '对弱队偶有轻敌慢热', '替补深度利用充分'],
  }),

  advocaat: coach('Dick Advocaat', {
    age: 73,
    nation: '荷兰',
    tenure: '2024—',
    wc_exp: '2018 俄罗斯（阿联酋）· 四届世界杯老帅',
    style_tags: ['5-3-2/3-5-2', '低位防守', '经验主义', '定位球'],
    formation_pref: '3-5-2 · 极端时可 5-4-1',
    style_summary:
      '73 岁老帅，实用主义至上。库拉索世界杯首秀必然以组织纪律和低位防守为第一优先级；五后卫+三中卫压缩中路，限制 Musiala/Wirtz 肋部，反击靠 Chong/Locadia 速度。',
    subs: {
      timing: '首换偏晚，通常 65–72 分钟；落后时 60\' 前换前锋',
      pattern: '常单换前锋或边翼卫；很少 60\' 前连换两人——体能分配优先',
      avg_first_sub: '68\'',
      note: '老帅风格保守，换人偏「补救」而非「主动改变比赛」',
    },
    when_leading: {
      label: '深度退守 · 耗时间',
      detail:
        '若意外领先（极低概率）：立即改 5-4-1，换防守型中场，目标保住 1 球。Advocaat 在 2018 阿联酋对强队曾用类似模板拖过 70 分钟。',
    },
    when_trailing: {
      label: '维持阵型 · 定位球偷分',
      detail:
        '先丢球后 unlikely 大举压上——更可能换一名前锋加强定位球，但五后卫体系不变。0–2 后才会 70\' 改四后卫搏命，避免惨案。',
    },
    vs_strong: {
      label: '对强队：龟缩 + 偷反击',
      detail:
        '本场对德国是教科书式「弱队踢强队」：前 30 分钟零封是胜利，犯规打断节奏，L. Bacuna 定位球是唯一得分希望。不会奋死一搏高位压迫。',
    },
    vs_weak: {
      label: '对弱队：相对开放',
      detail:
        '在 CONCACAF 区对同级对手会 4-3-3 压上；世界杯舞台对德国不适用。无「训练新兵」空间——26 人名单每场几乎固定核心 14 人。',
    },
    tournament: '四届世界杯经验，擅长安抚年轻球员；本场任务明确：少丢当赢，避免 2014 西班牙对荷兰式惨案心态崩盘。',
    traits: ['防守纪律优先', '换人偏保守', '定位球战术', '极少冒险变阵'],
  }),

  koeman: coach('Ronald Koeman', {
    age: 61,
    nation: '荷兰',
    tenure: '2020—',
    wc_exp: '2022 卡塔尔 · 2026 二度带队',
    style_tags: ['4-3-3', '边路宽度', '定位球', '高位线'],
    formation_pref: '4-3-3 · 落后时 3-4-3',
    style_summary:
      '荷兰传统 4-3-3，Dumfries 插上宽度 + Gakpo 内切；de Jong 控节奏，Reijnders 前插。Koeman 2022 世界杯八强，但对阿根廷点球大战出局；定位球（van Dijk）是重要武器。',
    subs: {
      timing: '首换 55–62 分钟；半场落后时 46\' 可能直接变阵',
      pattern: '常换边锋/中场：Summerville、Malen 互替；70\' van Dijk 若黄牌风险会换中卫',
      avg_first_sub: '57\'',
      note: '2022 世界杯场均首换 56\'；对日本可能因 Verbruggen 存疑准备 46\' 门将调整预案',
    },
    when_leading: {
      label: '继续控场 · 边卫仍插上',
      detail:
        '1 球领先：维持 4-3-3 宽度，不早退；2 球+：65\' 换 de Jong 类中场保体能。对日本不会过早 5 后卫——Koeman 风格偏「领先也要压制」。',
    },
    when_trailing: {
      label: '加边锋 · 三中卫可选',
      detail:
        '先丢球：55\' 前换 Malen/Summerville 加强宽度，或 60\' 改 3-4-3 堆前锋。2022 对阿根廷 2-2 时曾 70\' 换 Weghorst 高空轰炸——对日本可能 75\' 类似模板。',
    },
    vs_strong: {
      label: '对强队：对攻不怵',
      detail:
        '对阿根廷/法国级仍 4-3-3 对攻；心理上过信控球，被速度型反击（如日本 Kubo）是主要隐患。本场对日本不会主动收缩。',
    },
    vs_weak: {
      label: '对弱队：全场压制',
      detail:
        '对直布罗陀级对手会 4-0+ 仍主攻；3 球领先 65\' 后轮换替补。本场对日本非弱队，不会留余地练兵。',
    },
    tournament: '2022 八强 + 2024 欧洲杯小组赛出局阴影；对日本首战必须取 3 分，预计首发最强 XI，Verbruggen 存疑是最大变量。',
    traits: ['边路进攻依赖', '定位球强', '领先时不保守', '大赛淘汰赛经验足'],
  }),

  moriyasu: coach('Hajime Moriyasu', {
    age: 56,
    nation: '日本',
    tenure: '2018—',
    wc_exp: '2018 俄罗斯 · 2022 卡塔尔（16强）',
    style_tags: ['3-4-2-1', '肋部渗透', '整体移动', '防反转换'],
    formation_pref: '3-4-2-1 · 必要时 4-2-3-1',
    style_summary:
      '森保一体系：三中卫+双前腰（Kubo/Doan）肋部配合，整体阵型紧凑，由守转攻 3 秒内完成。2022 胜德国、西班牙的模板——低位诱敌 + Kubo 肋部 + 快速转移是核心。',
    subs: {
      timing: '首换 60–70 分钟；落后时 55\' 前换前锋；领先时 70\'+ 换防守中场',
      pattern: '「森保学」：60\' 常换 2–3 人改变节奏；对德国 2022 半场 0-1 后 46\' 连换 4 人',
      avg_first_sub: '61\'',
      note: '远藤航退出后 Sano/Kamada 后腰组合，60\' 换 Mitoma 加强边路是常见后手',
    },
    when_leading: {
      label: '收缩 + 快速反击',
      detail:
        '1 球领先：改 5-3-2 或三中卫更深，Kubo 留前场反击；2 球+：70\' 换防守型中场（Sano 留场）。对荷兰若领先，极可能复制 2022 对西班牙的控节奏防反。',
    },
    when_trailing: {
      label: '46\' 变阵 · 搏命传统',
      detail:
        '先丢球：半场或 46\' 连换 2–3 人改 4-2-3-1 堆进攻；2022 对德国 0-1 半场后换 Asano 等逆转。对荷兰 0–0 僵局 65\' 也会换 Mitoma 提速。',
    },
    vs_strong: {
      label: '对强队：防反 + 肋部',
      detail:
        '对德国/西班牙/荷兰：三中卫低位，不拼控球，专打身后与肋部。心理无畏惧感（2022 已证明），本场对荷兰是「以弱搏强」最优场景。',
    },
    vs_weak: {
      label: '对弱队：控球主导',
      detail:
        '对亚洲弱旅会 4-3-3 压上控球；对荷兰不会用此模式。小组赛末轮对瑞典若已出线，可能轮换 3–4 名主力「训练新兵」。',
    },
    tournament: '2022 16 强历史最佳；森保一大赛临场（尤其半场调整）是日本足球近年最大资产。本场对荷兰爆冷指数 42 的核心支撑之一。',
    traits: ['半场变阵大师', '防反纪律强', '对强队心态稳', '远藤航缺阵略削弱后腰'],
  }),

  fae: coach('Emerse Faé', {
    age: 42,
    nation: '科特迪瓦',
    tenure: '2024—',
    wc_exp: '2024 非洲杯冠军 · 2026 世界杯首秀',
    style_tags: ['4-3-3', '身体对抗', '边路速度', '非洲杯冠军班底'],
    formation_pref: '4-3-3 · 4-4-2 双前锋可选',
    style_summary:
      '2024 非洲杯夺冠教练，强调 Adingra/Doué 边路速度与 Kessié/Sangaré 中场硬度。Faé 从助教转正，大赛经验相对有限但非洲杯决赛逆转尼日利亚显示韧性。',
    subs: {
      timing: '首换 60–68 分钟；落后 55\' 前换 Haller/前锋',
      pattern: '常换边锋或前锋；Kessié 几乎全场不换；70\' 换 Diallo 加强边路',
      avg_first_sub: '63\'',
      note: '非洲杯期间场均首换 64\'；N\'Dicka 伤疑可能 46\' 被迫调整中卫',
    },
    when_leading: {
      label: '适度收缩 · 保体能',
      detail:
        '1 球领先：中场退深，Adingra 留速度反击；2 球+：65\' 换防守型中场。对厄瓜多尔不会过度进攻——非洲球队领先易保守是历史通病，Faé 非洲杯决赛曾 1-0 后收缩。',
    },
    when_trailing: {
      label: '堆前锋 · 高空轰炸',
      detail:
        '先丢球：60\' 前换 Haller（若未首发）或双前锋，加强定位球与传中。0–0 僵局 70\' 换 Diallo 边路突破。',
    },
    vs_strong: {
      label: '对强队：低位 + 反击',
      detail:
        '对德国级会 4-5-1 低位；对厄瓜多尔（同级）会正面对抗，中场 Kessié vs Caicedo 是胜负手。',
    },
    vs_weak: {
      label: '对弱队：压制进攻',
      detail:
        '非洲杯对弱旅 3–0+ 仍主攻；世界杯对德国若已出线末轮可能对库拉索轮换。本场对厄瓜多尔全主力。',
    },
    tournament: '非洲杯冠军是最大资本；世界杯首秀对厄瓜多尔几乎均势，Faé 需证明洲际冠军能复制到世界舞台。',
    traits: ['身体足球', '领先略保守', '非洲杯逆转经验', '中卫伤疑是隐患'],
  }),

  beccacece: coach('Sebastián Beccacece', {
    age: 44,
    nation: '阿根廷',
    tenure: '2024—',
    wc_exp: '2026 带队 · 俱乐部欧战经验',
    style_tags: ['4-4-2/4-2-3-1', '低位防守', 'Caicedo 轴心', '快速转换'],
    formation_pref: '4-4-2 · Caicedo 单后腰',
    style_summary:
      '阿根廷籍，强调防守组织与 Caicedo 后腰屏障；厄瓜多尔 19 场不败的核心是纪律与转换速度。Beccacece 2024 上任后延续 Alfaro 防反底子，加强定位球训练。',
    subs: {
      timing: '首换 62–70 分钟；落后 58\' 前换 Plata/进攻球员',
      pattern: 'Caicedo 极少被换；常换 Plata/Minda 加强边路；75\' 换 Yeboah 速度',
      avg_first_sub: '65\'',
      note: '19 场不败期间换人偏保守——领先时 75\'+ 才调整，保持阵型稳定',
    },
    when_leading: {
      label: '深度低位 · 几乎不换体系',
      detail:
        '1 球领先：4-4-2 变 4-5-1，Caicedo 单后腰蹲守，Estupiñán 回撤；2 球+：仍不换 Caicedo，70\' 换防守边卫。对科特迪瓦领先会极度保守。',
    },
    when_trailing: {
      label: '换边锋 · 保持防守底线',
      detail:
        '先丢球：60\' 换 Plata + 前场堆人，但 Caicedo 不离场——不会 0–2 就三前锋搏命。0–0 时 65\' 换 Minda 加强宽度。',
    },
    vs_strong: {
      label: '对强队：铁桶 + 偷一个',
      detail:
        '对阿根廷/荷兰级：5-4-1 低位，Valencia 反击；2022 对荷兰 1-1、对日本 0-0 的模板。对德国若遇会同样策略。',
    },
    vs_weak: {
      label: '对弱队：控球略增',
      detail:
        '对玻利维亚级会压上；对科特迪瓦同级仍偏谨慎——19 场不败心态下「不输优先」。末轮对已出线对手可能轮换 2–3 人。',
    },
    tournament: '19 场不败 + 2022 小组出线；Beccacece 大赛样本少，但对科特迪瓦这场「不输即赢」心态可能主导战术。',
    traits: ['Caicedo 依赖度高', '领先极度保守', '19场不败心理', '换人偏晚'],
  }),

  potter: coach('Graham Potter', {
    age: 51,
    nation: '英格兰',
    tenure: '2025年10月—',
    wc_exp: '2026 带队 · 球员时代 Östersunds 传奇教练',
    style_tags: ['3-4-3', '务实反击', 'Gyökeres/Isak 双锋', '结构稳定'],
    formation_pref: '3-4-3 / 4-4-2 · 附加赛改务实低位',
    style_summary:
      '2025 年10 月接替 Tomasson，附加赛用 3-4-3 务实反击（对乌克兰/波兰控球率 <33% 仍晋级）。大赛围绕 Gyökeres/Isak 双锋与 wing-back 宽度，瑞典 Östersunds 时期传奇回归。',
    subs: {
      timing: '首换 55–65 分钟；高温蒙特雷可能更早轮换',
      pattern: '常换 Elanga/Bergvall 边翼；Isak/Gyökeres 互替或双锋共存',
      avg_first_sub: '58\'',
      note: '附加赛证明换人果断；34°C 下需比 Tomasson 时代更早轮换',
    },
    when_leading: {
      label: '务实控节奏 · 不早退',
      detail:
        '1 球领先：维持 3-4-3 结构，利用 Gyökeres 反击宽度；2 球+：65\' 可换 Isak 保体能，但不会像 Tomasson 时代过度开放。',
    },
    when_trailing: {
      label: '堆前锋 · 定位球',
      detail:
        '先丢球：55\' 换 Gyökeres/Isak 双锋或 Elanga 速度；附加赛证明低位反击有效，对突尼斯可能复制模板。',
    },
    vs_strong: {
      label: '对强队：低位 + 反击',
      detail:
        '对荷兰/日本会 5-3-2/3-4-3 低位，Gyökeres 反击轴心；对突尼斯（弱于瑞典）预计主导控球。',
    },
    vs_weak: {
      label: '对弱队：控制但不冒进',
      detail:
        '对突尼斯预计全场压制但不轻敌；Isak 体能存疑时 Gyökeres 可能单箭头开场。',
    },
    tournament: '附加赛奇迹晋级（Gyökeres 对乌克兰帽子戏法）；大赛经验来自 Chelsea/Brighton 但国家队首秀——瑞典 1994 季军后再次求稳。',
    traits: ['3-4-3 务实', 'Gyökeres 依赖', 'Isak 体能变量', '高温需早轮换'],
  }),

  lamouchi: coach('Sabri Lamouchi', {
    age: 54,
    nation: '法国',
    tenure: '2026年1月—',
    wc_exp: '2014 世界杯执教科特迪瓦 · 2026 二度带队大赛',
    style_tags: ['4-3-3', '低位防守', 'Skhiri/Hannibal 中场', '反击'],
    formation_pref: '4-3-3 / 4-2-3-1 · 领先时收缩',
    style_summary:
      '2026 年1 月接任突尼斯，大赛经验丰富（2014 科特迪瓦）。强调防守纪律与转换，Skhiri/Hannibal/Mejbri 中场三角，Achouri 速度反击。',
    subs: {
      timing: '首换 60–70 分钟；落后 55\' 前换进攻手',
      pattern: '常换 Achouri/Saad 锋线；Skhiri 极少被换下',
      avg_first_sub: '65\'',
      note: '北非球队换人偏晚；高温下 Lamouchi 可能 55\' 换边翼卫保体能',
    },
    when_leading: {
      label: '4-5-1 收缩',
      detail:
        '若意外领先：退守五后卫，Skhiri 锚定，Achouri/Msakni 留前场；2014 科特迪瓦大赛经验指导保守收尾。',
    },
    when_trailing: {
      label: '换 Khazri/Achouri · 定位球',
      detail:
        '先丢球：60\' 换 Khazri 或加强宽度；0–2 后 70\' 才改三前锋。',
    },
    vs_strong: {
      label: '对强队：龟缩 + 偷反击',
      detail:
        '对瑞典：4-3-3 低位，Skhiri 绞杀，Achouri 速度；34°C 高温下守 0–0 求 1 分是合理目标。',
    },
    vs_weak: {
      label: '对弱队：相对开放',
      detail:
        '对非洲弱旅会压上；对瑞典不适用。小组赛末轮若已出线可能对日本轮换。',
    },
    tournament: '2014 世界杯科特迪瓦主帅；突尼斯预选赛 10 场 10 零封（非洲顶级防守）；大赛「Opening game 抢分」心态。',
    traits: ['防守铁桶', '大赛经验', 'Skhiri 依赖', '高温适应性略优'],
  }),
};

function matchNote(homeKey, awayKey) {
  const notes = {
    'nagelsmann-advocaat': {
      home: 'E组揭幕战对世界杯新军——预计 60\' 2–0+ 后轮换 Beier/Undav，仍维持进攻压迫，不会 3–0 就彻底收手。',
      away: '任务明确：5-4-1 守前 30 分钟，L. Bacuna 定位球是唯一得分手段；0–2 后 70\' 才可能改四后卫减少惨案。',
    },
    'koeman-moriyasu': {
      home: 'F组焦点战必须取 3 分——预计最强 XI，领先也不早退；Verbruggen 存疑时 46\' 可能有门将/中卫调整预案。',
      away: '复制 2022 对德国/西班牙模板：三中卫低位 + Kubo 肋部；若 1–0 领先 70\' 后换防守中场收缩。46\' 变阵是最大后手。',
    },
    'fae-beccacece': {
      home: '非洲杯冠军对 19 场不败——中场 Kessié vs Caicedo 决定节奏；领先易保守是 Faé 需克服的历史弱点。',
      away: '19 场不败心态下「不输优先」——领先会 4-5-1 深度低位；先丢球 60\' 换 Plata 但不撤 Caicedo。',
    },
    'potter-lamouchi': {
      home: 'Potter 3-4-3 务实体系——附加赛低位反击成功，对突尼斯预计压制但 Isak 体能是变量；34°C 下 55\' 轮换。',
      away: 'Lamouchi 2014 大赛经验 + 预选赛 10 零封——4-3-3 低位求 1 分，Skhiri/Hannibal 绞杀，Achouri 速度反击。',
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
