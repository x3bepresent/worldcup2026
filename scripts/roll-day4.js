/**
 * Day 4: populate todayMatches m09–m12 (6月15日北京 · 4场)
 * Run: node scripts/roll-day4.js
 */
const fs = require('fs');
const path = require('path');
const { pendingReferee, confirmedReferee } = require('./pending-templates');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { buildCoachAnalysis } = require('./coach-data-day4');
const { venueWeather } = require('./venue-weather-day4');
const { getMystic } = require('./mystic-data-day4');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const TS = '2026-06-15T10:00:00+08:00';

function team(name, iso, rank, rating, form, coach, stars, star, injuries = [], rumors = []) {
  const t = { name, iso, flag: '', fifa_rank: rank, rating, form, coach, stars, injuries, rumors };
  t.star = star || (stars[0] ? { ...stars[0] } : {});
  return t;
}

function pred(xgH, xgA, keyFactor, confidence = 72) {
  const o = computeOutcomeFromXg(xgH, xgA);
  return {
    home_win: Math.round(o.home_win),
    draw: Math.round(o.draw),
    away_win: Math.round(o.away_win),
    score: o.score,
    confidence,
    xg_home: xgH,
    xg_away: xgA,
    key_factor: keyFactor,
    score_dist: computeScoreDistribution(xgH, xgA, { topN: 7 }),
  };
}

function upsetAlert(data) {
  return data;
}

function buildM09() {
  const xgH = 3.8, xgA = 0.3;
  return {
    id: 'm09', group: 'E', matchday: 1,
    date: '2026-06-14', time: '13:00', time_local: '12:00 CT',
    timezone: 'CDT (UTC-5)', time_beijing: '01:00', date_beijing: '6月15日',
    time_beijing_full: '北京时间 6月15日 01:00',
    venue: 'NRG Stadium', city: 'Houston, USA',
    note: 'E组揭幕 · 德国 vs 库拉索 · 休斯顿',
    lineup: {
      confirmed: false,
      formation: null,
      home: '等待官方确认', away: '等待官方确认',
      note: 'FotMob Predicted · 赛前约1小时公布官方 XI。',
      predicted: {
        formation: '4-2-3-1 / 3-5-2',
        home: 'Neuer; Kimmich, Tah, Schlotterbeck, Brown; Pavlović, Nmecha; Sané, Musiala, Wirtz; Havertz',
        away: 'Room; Gaari, Obispo, Bazoer; Floranus, Comenencia, L. Bacuna, J. Bacuna, Fonville; Chong, Locadia',
        source: 'FotMob Predicted · 2026-06-15 · 非官方',
      },
      updated: TS,
    },
    home: team('Germany', 'de', 8, 84, ['W', 'W', 'D', 'W', 'W'], 'Julian Nagelsmann', [
      { name: 'Jamal Musiala', pos: 'CAM', club: 'Bayern Munich', stats: '国家队 38+ 场 12 球', rating: 9.0, desc: 'Nagelsmann 战术核心，中路突破与肋部渗透是德国破局关键' },
      { name: 'Florian Wirtz', pos: 'LW', club: 'Liverpool', stats: '勒沃库森赛季 MVP 级别', rating: 8.8, desc: '左路内切+远射，与 Musiala 形成双 10 号位轮换' },
      { name: 'Manuel Neuer', pos: 'GK', club: 'Bayern Munich', stats: '五届世界杯 · 40 岁', rating: 8.2, desc: '复出国家队，SI 称小腿轻微存疑但仍预计首发' },
    ], { name: 'Jamal Musiala', pos: 'CAM', club: 'Bayern Munich', desc: '德国进攻灵魂，对位库拉索五后卫体系中路空隙', rating: 9.0 },
      [{ player: 'Manuel Neuer', status: 'DOUBT', note: 'SI：小腿轻微存疑，仍预计首发', confirmed: false }],
      ['Nagelsmann 4-2-3-1：Musiala/Wirtz 双核 · 库拉索世界杯首秀', 'Opta：德国胜概率 90%+ · 最可能 3-0']),
    away: team('Curaçao', 'cw', 90, 58, ['L', 'W', 'D', 'L', 'W'], 'Dick Advocaat', [
      { name: 'Leandro Bacuna', pos: 'CM', club: 'Free Agent', stats: '72 caps · 队长', rating: 7.0, desc: '经验中场，定位球与长传是库拉索少数威胁手段' },
      { name: 'Tahith Chong', pos: 'LW', club: 'Birmingham', stats: '前曼联青训', rating: 6.8, desc: '反击速度点，面对 Kimmich 对位难度极大' },
      { name: 'Eloy Room', pos: 'GK', club: 'Miami FC', stats: '72 caps', rating: 6.5, desc: '预计面对全场 30+ 射，扑救量是本场唯一看点' },
    ], { name: 'Leandro Bacuna', pos: 'CM', desc: '库拉索队长，Advocaat 3-5-2 中场枢纽', rating: 7.0 },
      [],
      ['人口最少世界杯参赛国 · Advocaat 3-5-2 低位', '目标：前30分钟不丢球，定位球偷分']),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式交锋 · 库拉索世界杯首秀' },
    referee: confirmedReferee({ name: 'Jalal Jayed', nation: 'Jordan', iso: 'jo', source: 'FotMob · FIFA 2026-06-14' }),
    prediction: pred(xgH, xgA,
      '实力悬殊局：德国 xG 3.8 对 0.3，Musiala/Wirtz 对位 Advocaat 五后卫低位。Neuer 复出五届世界杯；库拉索人口最少参赛国，目标零封前 30 分钟。泊松最可能 3-0/4-0。',
      88),
    upset_alert: upsetAlert({
      favorite: '德国', underdog: 'Curaçao', favorite_iso: 'DE',
      index: 14, level: 'LOW', level_cn: '极低',
      cold_result_pct: 16,
      verdict: '四场中爆冷风险最低——FIFA 排名差 82 位，xG 3.8-0.3 碾压；库拉索更现实目标是少丢球而非取胜。',
      tactical: 'Advocaat 3-5-2 五后卫+三中卫，压缩 Musiala/Wirtz 活动空间；Chong 速度对位 Kimmich 是唯一反击点，但德国双后腰 Pavlović-Nmecha 覆盖充分。',
      psychology: '德国大赛底蕴深厚，Neuer 五届世界杯经验稳定军心；库拉索世界杯首秀，先丢球后易崩盘，难维持 90 分钟纪律。',
      historical: '无正式交锋；世界杯历史上人口最少参赛国极少在首战取分，更多以「少输当赢」为目标。',
      factors: [
        { tag: '克制', impact: '弱', detail: '库拉索低位可延缓失球，但缺乏持续反击体系' },
        { tag: '实力差', impact: '强', detail: 'xG 差 3.5+，德国替补深度仍可扩大比分' },
        { tag: '定位球', impact: '中', detail: 'L. Bacuna 定位球是库拉索少数威胁，德国防空占优' },
        { tag: '心理', impact: '弱', detail: '德国首战容错高，库拉索易紧张犯规送定位球' },
      ],
    }),
    coach_analysis: buildCoachAnalysis('nagelsmann', 'advocaat'),
    weather: venueWeather('m09'),
    mystic: getMystic('m09'),
  };
}

function buildM10() {
  const xgH = 1.85, xgA = 1.05;
  return {
    id: 'm10', group: 'F', matchday: 1,
    date: '2026-06-14', time: '16:00', time_local: '15:00 CT',
    timezone: 'CDT (UTC-5)', time_beijing: '04:00', date_beijing: '6月15日',
    time_beijing_full: '北京时间 6月15日 04:00',
    venue: 'AT&T Stadium', city: 'Arlington, USA',
    note: 'F组焦点 · 荷兰 vs 日本 · 达拉斯',
    lineup: {
      confirmed: false, formation: null, home: '等待官方确认', away: '等待官方确认',
      note: 'Verbruggen 乌兹别克热身碰撞后存疑；远藤航已退出大名单。',
      predicted: {
        formation: '4-3-3 / 3-4-2-1',
        home: 'Verbruggen; Dumfries, van Hecke, van Dijk (C), van de Ven; de Jong, Reijnders, Gravenberch; Summerville, Malen, Gakpo',
        away: 'Suzuki; Itakura, Ito, Watanabe; Doan, Kamada, Sano, Nakamura; Kubo, Ito; Ueda',
        source: 'FotMob Predicted · 2026-06-15 · 非官方',
      },
      updated: TS,
    },
    home: team('Netherlands', 'nl', 7, 85, ['W', 'W', 'D', 'W', 'W'], 'Ronald Koeman', [
      { name: 'Virgil van Dijk', pos: 'CB', club: 'Liverpool', stats: '队长 · 世界级中卫', rating: 8.8, desc: '防线领袖，日本 Ueda 制空对位关键' },
      { name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', stats: '左路内切+远射', rating: 8.3, desc: 'F组进攻核心，对位日本三中卫肋部' },
      { name: 'Frenkie de Jong', pos: 'CM', club: 'Barcelona', stats: '控球节拍器', rating: 8.5, desc: '中场出球枢纽，日本 Kamada 逼抢对位' },
    ], { name: 'Virgil van Dijk', pos: 'CB', desc: '荷兰防线定海神针，定位球攻防两端', rating: 8.8 },
      [{ player: 'Bart Verbruggen', status: 'DOUBT', note: '乌兹别克热身碰撞存疑，仍预计首发', confirmed: false }],
      ['Koeman 4-3-3 高位压迫，van Dijk 定位球威胁大', 'F组夺冠热门，首战不可轻敌']),
    away: team('Japan', 'jp', 18, 77, ['W', 'D', 'W', 'W', 'D'], 'Hajime Moriyasu', [
      { name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', stats: '西甲赛季 10+ 助', rating: 8.2, desc: '日本进攻灵魂，肋部突破是最大威胁' },
      { name: 'Kaoru Mitoma', pos: 'LW', club: 'Brighton', stats: '速度型边锋', rating: 8.0, desc: '若首发将直接对位 Dumfries，速度对位看点' },
      { name: 'Wataru Endo', pos: 'CM', club: 'Liverpool', stats: '队长（已退出）', rating: 0, desc: '远藤航因伤退出大名单，Sano/Kamada 顶替后腰' },
    ], { name: 'Takefusa Kubo', pos: 'RW', desc: '日本 10 号位，对位 van de Ven 肋部空隙', rating: 8.2 },
      [{ player: 'Wataru Endo', status: 'OUT', note: '因伤退出世界杯大名单', confirmed: true }],
      ['Moriyasu 三中卫+双前腰体系，Kubo-Doan 肋部配合是核心', '2022 日本曾 2-1 胜德国，不可轻敌']),
    h2h: { home_wins: 1, draws: 2, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '2-1', winner: 'Netherlands' }], note: '历史互有胜负，日本 2022 大赛经验更丰富' },
    referee: confirmedReferee({ name: 'Ismail Elfath', nation: 'USA', iso: 'us', source: 'FotMob · 2026-06-14' }),
    prediction: pred(xgH, xgA,
      'F组技术流对决：荷兰边路宽度（Gakpo/Dumfries）对位日本三中卫；Kubo 肋部是日本唯一稳定破局点。de Jong 控球 vs Kamada 逼抢决定节奏。xG 1.85-1.05 泊松最可能 2-1。',
      76),
    upset_alert: upsetAlert({
      favorite: '荷兰', underdog: '日本', favorite_iso: 'NL',
      index: 42, level: 'ELEVATED', level_cn: '偏高',
      cold_result_pct: 45,
      verdict: '今日四场爆冷指数最高——日本 2022 曾 2-1 胜德国，三中卫+Kubo 肋部对欧洲强队有明确克制模板；荷兰不可轻敌。',
      tactical: 'Moriyasu 3-4-2-1 三中卫压缩肋部，Kubo-Doan 配合专打 van de Ven 与 Dumfries 之间的空隙；荷兰高位压迫时 Mitoma 速度可惩罚身后空档。',
      psychology: '日本 2022 大赛心理硬度已验证，落后时仍执行战术；荷兰 Verbruggen 门将存疑，若早失球可能影响 Koeman 变阵节奏。',
      historical: '日本 2022 世界杯胜德国、西班牙；荷兰近三届世界杯小组赛稳定但 2018 末轮曾 2-1 负比利时；H2H 互有胜负。',
      factors: [
        { tag: '克制', impact: '强', detail: '日本三中卫+双前腰专克欧洲边路宽度打法' },
        { tag: '速度错配', impact: '中', detail: 'Mitoma/Kubo 肋部速度 vs 荷兰边卫回追' },
        { tag: '伤病', impact: '中', detail: '远藤航退出削弱日本后腰；Verbruggen 碰撞存疑——双向' },
        { tag: '心理', impact: '中', detail: '日本大赛经验不输荷兰，先破门后更可能收缩执行' },
      ],
    }),
    coach_analysis: buildCoachAnalysis('koeman', 'moriyasu'),
    weather: venueWeather('m10'),
    mystic: getMystic('m10'),
  };
}

function buildM11() {
  const xgH = 1.5, xgA = 1.4;
  return {
    id: 'm11', group: 'E', matchday: 1,
    date: '2026-06-14', time: '19:00', time_local: '19:00 ET',
    timezone: 'EDT (UTC-4)', time_beijing: '07:00', date_beijing: '6月15日',
    time_beijing_full: '北京时间 6月15日 07:00',
    venue: 'Lincoln Financial Field', city: 'Philadelphia, USA',
    note: 'E组第2场 · 科特迪瓦 vs 厄瓜多尔 · 费城',
    lineup: {
      confirmed: false, formation: null, home: '等待官方确认', away: '等待官方确认',
      note: 'Evan N\'Dicka 伤疑；厄瓜多尔 19 场不败。',
      predicted: {
        formation: '4-3-3 / 4-4-2',
        home: 'Fofana; Doué, Singo, Agbadou, Konan; Kessié, Sangaré, S. Fofana; Diallo, Guessand, Diomande',
        away: 'Galindez; Ordóñez, Hincapié, Pacho, Estupiñán; Plata, Vite, Caicedo, Minda; Yeboah, Valencia',
        source: 'FotMob Predicted · 2026-06-15 · 非官方',
      },
      updated: TS,
    },
    home: team("Côte d'Ivoire", 'ci', 36, 74, ['W', 'D', 'W', 'W', 'L'], 'Emerse Faé', [
      { name: 'Sébastien Haller', pos: 'ST', club: 'Borussia Dortmund', stats: '非洲杯冠军成员', rating: 8.0, desc: '若首发是支点核心；Guessand 也可能居中' },
      { name: 'Franck Kessié', pos: 'CM', club: 'Al-Ahli', stats: 'B2B 中场屏障', rating: 7.8, desc: '对抗 Caicedo 是中场胜负手' },
      { name: 'Simon Adingra', pos: 'LW', club: 'Brighton', stats: '速度型边锋', rating: 7.9, desc: '对位 Estupiñán 边路速度对决' },
    ], { name: 'Franck Kessié', pos: 'CM', desc: '科特迪瓦中场硬度，对位 Caicedo 关键', rating: 7.8 },
      [{ player: "Evan N'Dicka", status: 'DOUBT', note: '伤疑，Agbadou 可能顶替中卫', confirmed: false }],
      ['非洲杯冠军班底，Faé 强调身体对抗', 'E组德国已赛，本场结果影响出线形势']),
    away: team('Ecuador', 'ec', 31, 75, ['W', 'W', 'D', 'W', 'W'], 'Sebastián Beccacece', [
      { name: 'Moisés Caicedo', pos: 'CDM', club: 'Chelsea', stats: '世界级后腰', rating: 8.5, desc: '厄瓜多尔攻防转换枢纽，限制 Kessié 推进' },
      { name: 'Enner Valencia', pos: 'ST', club: 'Internacional', stats: '队史射手王', rating: 8.0, desc: '经验前锋，定位球与跑位是破局点' },
      { name: 'Piero Hincapié', pos: 'CB', club: 'Bayer Leverkusen', stats: '出球中卫', rating: 8.1, desc: '防线领袖，对位 Diomande/Guessand' },
    ], { name: 'Moisés Caicedo', pos: 'CDM', desc: '厄瓜多尔 19 场不败的基石', rating: 8.5 },
      [], ['19 场不败，Caicedo 领衔中场硬度', 'Beccacece 低位防守+快速转换', '2022 世界杯小组出线经验']),
    h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [{ year: 2024, comp: '友谊赛', score: '2-1', winner: "Côte d'Ivoire" }], note: '样本少，参考价值有限' },
    referee: confirmedReferee({ name: 'Michael Oliver', nation: 'England', iso: 'gb-eng', source: 'FotMob · 2026-06-14' }),
    prediction: pred(xgH, xgA,
      'E组硬碰硬：科特迪瓦身体对抗 vs 厄瓜多尔 19 场不败纪律。Caicedo-Kessié 对位决定中场；xG 1.5-1.4 几乎均势，泊松最可能 1-1，次选 2-1 主队。',
      70),
    upset_alert: upsetAlert({
      favorite: "Côte d'Ivoire", underdog: 'Ecuador', favorite_iso: 'CI',
      index: 36, level: 'MEDIUM', level_cn: '中等',
      cold_result_pct: 48,
      verdict: '名义主队略被看好，但 xG 1.5-1.4 几乎均势——厄瓜多尔 19 场不败+Caicedo 中场硬度，客胜或逼平均属合理冷门区间。',
      tactical: 'Caicedo 限制 Kessié 推进，Estupiñán-Plata 左路速度对位 Konan；科特迪瓦 N\'Dicka 伤疑削弱防空，Enner Valencia 定位球是破局点。',
      psychology: '厄瓜多尔 2022 小组出线经验+19 场不败士气正盛；科特迪瓦非洲杯冠军班底大赛压力不低，久攻不下易急躁。',
      historical: '2024 友谊赛科特迪瓦 2-1 胜厄瓜多尔（样本小）；厄瓜多尔 2022 曾 2-1 胜东道主卡塔尔，大赛慢热后爆发有前例。',
      factors: [
        { tag: '克制', impact: '中', detail: 'Caicedo 绞杀+低位转换专克非洲队高位压迫' },
        { tag: '状态', impact: '强', detail: '厄瓜多尔 19 场不败，防守纪律为本届 E 组顶级' },
        { tag: '伤病', impact: '中', detail: 'N\'Dicka 伤疑削弱科特迪瓦中卫深度' },
        { tag: '心理', impact: '中', detail: '平局对双方均可接受，领先方或保守——利于冷门' },
      ],
      reverse_note: '若按排名倾向厄瓜多尔（FIFA #31），则科特迪瓦主场爆冷指数约 32，仍为中等。',
    }),
    coach_analysis: buildCoachAnalysis('fae', 'beccacece'),
    weather: venueWeather('m11'),
    mystic: getMystic('m11'),
  };
}

function buildM12() {
  const xgH = 1.55, xgA = 1.05;
  return {
    id: 'm12', group: 'F', matchday: 1,
    date: '2026-06-14', time: '20:00', time_local: '20:00 CT',
    timezone: 'CDT (UTC-6)', time_beijing: '10:00', date_beijing: '6月15日',
    time_beijing_full: '北京时间 6月15日 10:00',
    venue: 'Estadio BBVA', city: 'Monterrey, Mexico',
    note: 'F组第2场 · 瑞典 vs 突尼斯 · 蒙特雷（墨西哥）',
    lineup: {
      confirmed: false, formation: null, home: '等待官方确认', away: '等待官方确认',
      note: 'Isak 领衔瑞典锋线；突尼斯 Msakni 经验中场。',
      predicted: {
        formation: '4-3-3 / 4-4-2',
        home: 'Olsen; Krafth, Lindelöf, Gudmundsson, Svanberg; Olsson, Edman, Kulusevski; Isak, Gyökeres, Elanga',
        away: 'Dahmen; Haddadi, Meriah, Talbi, Laabidi; Skhiri, Laïdouni, Romdhane; Msakni, Jebali, Khazri',
        source: 'FotMob Predicted · 2026-06-15 · 非官方',
      },
      updated: TS,
    },
    home: team('Sweden', 'se', 25, 73, ['W', 'D', 'D', 'W', 'W'], 'Jon Dahl Tomasson', [
      { name: 'Alexander Isak', pos: 'ST', club: 'Newcastle', stats: '英超赛季 20+ 球', rating: 8.6, desc: '瑞典进攻绝对核心，对位突尼斯双中卫' },
      { name: 'Dejan Kulusevski', pos: 'RW', club: 'Tottenham', stats: '边路持球+助攻', rating: 8.2, desc: '右路宽度，与 Isak 配合是破局手段' },
      { name: 'Viktor Gyökeres', pos: 'ST', club: 'Sporting CP', stats: '葡超金靴', rating: 8.4, desc: '可能与 Isak 双前锋或轮换' },
    ], { name: 'Alexander Isak', pos: 'ST', desc: '瑞典头号射手，面对突尼斯低位防守', rating: 8.6 }),
    away: team('Tunisia', 'tn', 62, 64, ['D', 'W', 'L', 'D', 'W'], 'Samuel Zaouali', [
      { name: 'Wahbi Khazri', pos: 'ST', club: 'Montpellier', stats: '队史关键先生', rating: 7.5, desc: '经验前锋，定位球与远射' },
      { name: 'Youssef Msakni', pos: 'AM', club: 'Al-Arabi', stats: '100+ caps', rating: 7.6, desc: '突尼斯进攻灵魂，10号位' },
      { name: 'Aïssa Laïdouni', pos: 'CM', club: 'Union Berlin', stats: '德甲中场硬度', rating: 7.3, desc: '绞杀 Isak 接球，限制瑞典中路' },
    ], { name: 'Youssef Msakni', pos: 'AM', desc: '突尼斯创造力来源', rating: 7.6 },
      [], ['Zaouali 4-4-2 低位防守，Msakni 反击', '瑞典身高与定位球优势明显', '蒙特雷高温对欧洲球队略有消耗']),
    h2h: { home_wins: 2, draws: 0, away_wins: 1, recent: [{ year: 2022, comp: '友谊赛', score: '3-0', winner: 'Sweden' }], note: '瑞典历史略优' },
    referee: pendingReferee('F组蒙特雷场次裁判待 FIFA 最终确认。'),
    prediction: pred(xgH, xgA,
      'F组次席之争：瑞典 Isak/Kulusevski 对位突尼斯低位 4-4-2。瑞典定位球与身高占优；突尼斯 Msakni 反击是唯一变数。xG 1.55-1.05 泊松最可能 2-1 或 1-1。',
      72),
    upset_alert: upsetAlert({
      favorite: '瑞典', underdog: 'Tunisia', favorite_iso: 'SE',
      index: 34, level: 'MEDIUM', level_cn: '中等',
      cold_result_pct: 40,
      verdict: '瑞典纸面占优但非顶级强队；突尼斯 4-4-2 低位+蒙特雷 34°C 干热消耗，Msakni/Khazri 反击逼平均有空间。',
      tactical: 'Zaouali 4-4-2 双闸限制 Isak 接球，Laïdouni 绞杀中场；瑞典定位球与身高是主要破局手段，久攻不下易被 Msakni 直塞打身后。',
      psychology: '突尼斯 2018 曾胜德国，大赛爆冷有 DNA；瑞典若早破门可控场，0-0 进入 70 分钟后高温对北欧球员更不利。',
      historical: '2022 友谊赛瑞典 3-0 突尼斯；2018 世界杯突尼斯 2-1 胜德国；瑞典大赛稳定性一般，2018/2022 小组赛均提前出局。',
      factors: [
        { tag: '克制', impact: '中', detail: '突尼斯低位+反击模板对欧洲中等强队有效' },
        { tag: '气候', impact: '中', detail: '34°C 干热，突尼斯北非球员适应性略优' },
        { tag: '定位球', impact: '中', detail: '瑞典身高占优，但突尼斯 Meriah 防空经验丰富' },
        { tag: '心理', impact: '弱', detail: '瑞典 Isak 英超状态正佳，先破门则指数骤降' },
      ],
    }),
    coach_analysis: buildCoachAnalysis('tomasson', 'zaouali'),
    weather: venueWeather('m12'),
    mystic: getMystic('m12'),
  };
}

const todayMatches = [buildM09(), buildM10(), buildM11(), buildM12()];

const MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FotMob Predicted + xG Poisson · Day 4 preview',
  breakingNews: [
    { tag: 'PREVIEW', text: '📅 今日4场 · 德国-库拉索(01:00) · 荷兰-日本(04:00) · 科特-厄瓜(07:00) · 瑞典-突尼斯(10:00)', time: '6月15日' },
    { tag: 'PREVIEW', text: 'E组：德国 xG 3.8 碾压库拉索 · 科特迪瓦 vs 厄瓜多尔 19场不败', time: 'E组' },
    { tag: 'PREVIEW', text: 'F组：荷兰 vs 日本 技术流焦点 · 瑞典 Isak 对位突尼斯 Msakni', time: 'F组' },
    { tag: 'LINEUP', text: 'Neuer 五届世界杯预计首发 · Musiala/Wirtz 双核 · 库拉索 3-5-2 低位', time: '德国战' },
    { tag: 'LINEUP', text: '日本远藤航退出 · Verbruggen 门将存疑 · Kubo 肋部是破局点', time: '荷日战' },
    { tag: 'OFFICIAL', text: '🏁 昨日：海地0-1苏格兰 · 澳大利亚2-0土耳其 · 详见赛果页', time: '回顾' },
    { tag: 'REFEREE', text: '德国/荷兰/科特迪瓦场次裁判已确认 · 瑞典-突尼斯待公布', time: '裁判' },
  ],
  todayMatches,
  nextMatch: {
    group: 'G', matchday: 1, date: '2026-06-15', time: '12:00', time_local: '12:00 PT',
    timezone: 'PDT (UTC-7)', time_beijing: '03:00', date_beijing: '6月16日',
    time_beijing_full: '北京时间 6月16日 03:00',
    venue: 'Lumen Field', city: 'Seattle, USA',
    home: { name: 'Belgium', iso: 'be', fifaRank: 4, rating: 86 },
    away: { name: 'Egypt', iso: 'eg', fifaRank: 36, rating: 72 },
    teaser: 'G组揭幕：比利时黄金一代末班车 vs 萨拉赫领衔埃及。',
    home_win: 62, draw: 22, away_win: 16, predicted_score: '2-1',
    key_player_home: 'Kevin De Bruyne', key_player_away: 'Mohamed Salah',
  },
  upcomingMatches: [
    {
      group: 'H', time_beijing_full: '北京时间 6月16日 00:00',
      venue: 'Mercedes-Benz Stadium', city: 'Atlanta, USA',
      home: { name: 'Spain', iso: 'es' }, away: { name: 'Cape Verde', iso: 'cv' },
      teaser: 'H组：西班牙 vs 佛得角',
    },
    {
      group: 'H', time_beijing_full: '北京时间 6月16日 06:00',
      venue: 'Hard Rock Stadium', city: 'Miami, USA',
      home: { name: 'Saudi Arabia', iso: 'sa' }, away: { name: 'Uruguay', iso: 'uy' },
      teaser: 'H组：沙特 vs 乌拉圭',
    },
  ],
};

fs.writeFileSync(
  MATCH_PATH,
  '// 今日赛事 — Day 4 preview\n' +
    `// Last updated: ${TS}\n` +
    `const MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`
);

console.log('✅ Day 4 todayMatches:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
console.log('✅ Predictions:', todayMatches.map(m => `${m.id} ${m.prediction.score} (${m.prediction.home_win}/${m.prediction.draw}/${m.prediction.away_win})`).join('\n   '));
