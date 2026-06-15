/**
 * Enrich Day 5 todayMatches (m14/m16/m13/m15) with full panels:
 * referee, coach, mystic, weather, injuries, upset_alert, 3-star players
 * Run: node scripts/enrich-day5.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { lineupFromPrediction } = require('./pending-templates');
const { buildCoachAnalysis } = require('./coach-data-day5');
const { venueWeather } = require('./venue-weather-day5');
const { getMystic } = require('./mystic-data-day5');
const { getReferee } = require('./referee-data-day5');
const { getTeamNews } = require('./injuries-rumors-day5');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const TS = '2026-06-16T18:00:00+08:00';

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function team(name, iso, rank, rating, form, coachName, stars, star, injuries, rumors) {
  const t = { name, iso, flag: '', fifa_rank: rank, rating, form, coach: coachName, stars, injuries, rumors };
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

function buildM14() {
  const xgH = 2.45, xgA = 0.55;
  return {
    id: 'm14', group: 'H', matchday: 1,
    date: '2026-06-15', time: '12:00', time_local: '12:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '00:00', date_beijing: '6月16日', time_beijing_full: '北京时间 6月16日 00:00',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta, USA',
    note: 'H组揭幕 · 西班牙 vs 佛得角 · 亚特兰大',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-4-2',
      home: 'Simón; Carvajal, Le Normand, Laporte, Cucurella; Zubimendi, Pedri, Olmo; Yamal, Oyarzabal, Williams',
      away: 'Vozinha; Stopira, Monteiro, Cabral; Duarte, Semedo, Tavares; Lopes, Borges, Cabral; Platini',
      source: 'ESPN / FotMob 赛前预测 · 非官方',
    }),
    home: team('Spain', 'es', 3, 88, ['W', 'W', 'D', 'W', 'W'], 'Luis de la Fuente', [
      { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', stats: '欧洲杯后世界杯首秀', rating: 9.0, desc: '右路爆点，H组揭幕核心' },
      { name: 'Pedri', pos: 'CM', club: 'Barcelona', stats: '中场节拍器', rating: 8.8, desc: '控球枢纽，肋部渗透发起点' },
      { name: 'Nico Williams', pos: 'LW', club: 'Athletic', stats: '欧洲杯冠军成员', rating: 8.6, desc: '左路速度，与 Yamal 双翼宽度' },
    ], { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', desc: '世界杯首秀，右路破局关键', rating: 9.0 },
      getTeamNews('m14', 'home').injuries, getTeamNews('m14', 'home').rumors),
    away: team('Cape Verde', 'cv', 65, 62, ['D', 'W', 'L', 'W', 'D'], 'Bubista', [
      { name: 'Ryan Mendes', pos: 'LW', club: 'Al-Taawoun', stats: '100+ caps', rating: 7.2, desc: '经验边锋，反击速度点' },
      { name: 'Júlio Tavares', pos: 'ST', club: 'Al-Fayha', stats: '锋线支点', rating: 7.0, desc: '定位球与背身是少数威胁' },
      { name: 'Stopira', pos: 'CB', club: 'Basaksehir', stats: '防线领袖', rating: 6.9, desc: '低位防守组织核心' },
    ], { name: 'Ryan Mendes', pos: 'LW', desc: '反击发起点，对位 Carvajal 难度极大', rating: 7.2 },
      getTeamNews('m14', 'away').injuries, getTeamNews('m14', 'away').rumors),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式交锋 · 佛得角世界杯首秀' },
    referee: getReferee('m14'),
    prediction: pred(xgH, xgA,
      '西班牙传控碾压局：Yamal/Pedri 对位 Bubista 低位 4-4-2。佛得角目标少丢当赢；xG 2.45-0.55 泊松最可能 3-0/2-0。',
      85),
    upset_alert: upsetAlert({
      favorite: 'Spain', underdog: 'Cape Verde', favorite_iso: 'ES',
      index: 12, level: 'LOW', level_cn: '极低',
      cold_result_pct: 10,
      verdict: '四场中爆冷风险最低——欧洲杯冠军 vs 世界杯新军，xG 2.45-0.55 碾压。',
      tactical: 'Bubista 4-4-2 五后卫压缩肋部；Mendes 速度对位 Carvajal 是唯一反击点。',
      psychology: '西班牙大赛心理已验证；佛得角首秀易紧张，先丢球后难维持 90 分钟纪律。',
      historical: '无正式交锋；非洲杯黑马基因不足以对西班牙构成实质威胁。',
      factors: [
        { tag: '实力差', impact: '强', detail: 'xG 差 1.9+，西班牙替补深度仍可扩大比分' },
        { tag: '克制', impact: '弱', detail: '佛得角低位可延缓失球，缺乏持续反击体系' },
        { tag: '心理', impact: '弱', detail: '西班牙容错高，佛得角易犯规送定位球' },
      ],
    }),
    coach_analysis: buildCoachAnalysis('delafuente', 'bubista'),
    weather: venueWeather('m14'),
    mystic: getMystic('m14'),
  };
}

function buildM16() {
  const xgH = 1.95, xgA = 0.95;
  return {
    id: 'm16', group: 'G', matchday: 1,
    date: '2026-06-15', time: '12:00', time_local: '12:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '03:00', date_beijing: '6月16日', time_beijing_full: '北京时间 6月16日 03:00',
    venue: 'Lumen Field', city: 'Seattle, USA',
    note: 'G组揭幕 · 比利时 vs 埃及 · 西雅图',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Casteels; De Cuyper, De Bast, Theate, Castagne; Rits, Tielemans; Doku, De Bruyne, Trossard; Lukaku',
      away: 'El Shenawy; Hany, Rabia, Hegazi; El Shahat, Hamdi, Emam; Salah, Trezeguet, Marmoush',
      source: 'Sports Mole / FotMob 预测 · 非官方',
    }),
    home: team('Belgium', 'be', 4, 86, ['W', 'W', 'D', 'W', 'W'], 'Rudy Garcia', [
      { name: 'Kevin De Bruyne', pos: 'CAM', club: 'Man City', stats: '黄金一代核心', rating: 9.0, desc: 'G组破局关键，前腰节拍器' },
      { name: 'Romelu Lukaku', pos: 'ST', club: 'Roma', stats: '支点中锋', rating: 8.5, desc: '背身牵制 + 定位球威胁' },
      { name: 'Jérémy Doku', pos: 'LW', club: 'Man City', stats: '边路爆点', rating: 8.4, desc: '左路内切+速度，对位埃及边卫' },
    ], { name: 'Kevin De Bruyne', pos: 'CAM', desc: 'De Bruyne vs 埃及双闸是本场核心对位', rating: 9.0 },
      getTeamNews('m16', 'home').injuries, getTeamNews('m16', 'home').rumors),
    away: team('Egypt', 'eg', 36, 72, ['W', 'D', 'W', 'W', 'L'], 'Hossam Hassan', [
      { name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', stats: '埃及队长', rating: 8.8, desc: '唯一世界级爆点，反击发起点' },
      { name: 'Omar Marmoush', pos: 'ST', club: 'Man City', stats: '德甲状态正佳', rating: 8.2, desc: '二前锋/中锋，与 Salah 配合' },
      { name: 'Mohamed El Shenawy', pos: 'GK', club: 'Ahly', stats: '非洲杯冠军门将', rating: 7.8, desc: '低位防守最后一道屏障' },
    ], { name: 'Mohamed Salah', pos: 'RW', desc: '一人球队核心，反击是唯一变数', rating: 8.8 },
      getTeamNews('m16', 'away').injuries, getTeamNews('m16', 'away').rumors),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [{ year: 2019, comp: '友谊赛', score: '2-0', winner: 'Belgium' }], note: '比利时历史占优' },
    referee: getReferee('m16'),
    prediction: pred(xgH, xgA,
      'G组焦点：De Bruyne 对位埃及双闸，Salah 反击是唯一变数。比利时纸面占优但大赛慢热有前例；xG 1.95-0.95 泊松最可能 2-1。',
      78),
    upset_alert: upsetAlert({
      favorite: 'Belgium', underdog: 'Egypt', favorite_iso: 'BE',
      index: 38, level: 'MEDIUM', level_cn: '中等',
      cold_result_pct: 42,
      verdict: 'Salah 一人球队可制造冷门——埃及 7 次世界杯经验，低位+Salah 反击逼平均有空间。',
      tactical: 'Hassan 4-5-1 低位限制 De Bruyne 接球；Salah 速度惩罚比利时压上身后空档。',
      psychology: '比利时大赛慢热是历史弱点；Salah 先破门则 Garcia 变阵压力倍增。',
      historical: '2019 友谊赛比利时 2-0；但 Salah 大赛大场面经验不可低估。',
      factors: [
        { tag: '核心球员', impact: '强', detail: 'Salah 状态决定埃及上限，De Bruyne 对比利时同理' },
        { tag: '克制', impact: '中', detail: '埃及低位+Salah 模板对欧洲强队有效' },
        { tag: '心理', impact: '中', detail: 'G 组揭幕，比利时需取 3 分但易急躁' },
      ],
    }),
    coach_analysis: buildCoachAnalysis('garcia', 'hassan'),
    weather: venueWeather('m16'),
    mystic: getMystic('m16'),
  };
}

function buildM13() {
  const xgH = 0.75, xgA = 1.85;
  return {
    id: 'm13', group: 'H', matchday: 1,
    date: '2026-06-15', time: '18:00', time_local: '18:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '06:00', date_beijing: '6月16日', time_beijing_full: '北京时间 6月16日 06:00',
    venue: 'Hard Rock Stadium', city: 'Miami, USA',
    note: 'H组第2场 · 沙特 vs 乌拉圭 · 迈阿密',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-4-2',
      home: 'Al-Owais; Al-Breik, Al-Amri, Al-Boleahi, Al-Shahrani; Al-Faraj, Kanno; Al-Dawsari, Al-Shehri, Al-Hassan; Al-Buraikan',
      away: 'Roche; Núñez, Araujo, Cáceres; Olivera, Ugarte, Valverde; Pellistri, De la Cruz, Bentancur; Núñez',
      source: 'ESPN / Arab News 预测 · 非官方',
    }),
    home: team('Saudi Arabia', 'sa', 58, 68, ['W', 'L', 'D', 'W', 'L'], 'Roberto Mancini', [
      { name: 'Salem Al-Dawsari', pos: 'LW', club: 'Al-Hilal', stats: '2022 对阿根廷进球', rating: 7.8, desc: '左路核心，反击发起点' },
      { name: 'Salem Al-Faraj', pos: 'CM', club: 'Al-Hilal', stats: '队长 · 中场屏障', rating: 7.5, desc: '绞杀与出球枢纽' },
      { name: 'Firas Al-Buraikan', pos: 'ST', club: 'Al-Ahli', stats: '锋线支点', rating: 7.3, desc: '定位球与背身' },
    ], { name: 'Salem Al-Dawsari', pos: 'LW', desc: '2022 爆冷 DNA 象征，左路唯一稳定威胁', rating: 7.8 },
      getTeamNews('m13', 'home').injuries, getTeamNews('m13', 'home').rumors),
    away: team('Uruguay', 'uy', 11, 82, ['W', 'W', 'D', 'W', 'W'], 'Marcelo Bielsa', [
      { name: 'Darwin Núñez', pos: 'ST', club: 'Liverpool', stats: '高位压迫支点', rating: 8.5, desc: 'Bielsa 体系核心，破局关键' },
      { name: 'Federico Valverde', pos: 'CM', club: 'Real Madrid', stats: '全能中场', rating: 8.8, desc: '覆盖+远射，Bielsa 压迫发动机' },
      { name: 'Facundo Pellistri', pos: 'RW', club: 'Man United', stats: '右路速度', rating: 8.0, desc: '反击宽度与肋部渗透' },
    ], { name: 'Federico Valverde', pos: 'CM', desc: 'Bielsa 压迫体系覆盖核心', rating: 8.8 },
      getTeamNews('m13', 'away').injuries, getTeamNews('m13', 'away').rumors),
    h2h: { home_wins: 0, draws: 1, away_wins: 2, recent: [{ year: 2022, comp: '友谊赛', score: '0-2', winner: 'Uruguay' }], note: '乌拉圭历史占优' },
    referee: getReferee('m13'),
    prediction: pred(xgH, xgA,
      'Bielsa 高位压迫 vs Mancini 低位：乌拉圭 xG 1.85 明显占优，Valverde/Núñez 对位沙特防线。沙特 2022 爆冷有 DNA 但硬实力差距大；泊松最可能 0-2/1-2。',
      80),
    upset_alert: upsetAlert({
      favorite: 'Uruguay', underdog: 'Saudi Arabia', favorite_iso: 'UY',
      index: 28, level: 'LOW', level_cn: '低',
      cold_result_pct: 22,
      verdict: '乌拉圭纸面碾压，但沙特 2022 对阿根廷 2-1 是心理资产——Mancini 低位+Al-Dawsari 偷分仍有 15% 空间。',
      tactical: 'Bielsa 4-4-2 高压 vs Mancini 4-5-1；Valverde 覆盖切断 Al-Faraj 出球是胜负手。',
      psychology: '2022 爆冷 DNA 仍在，但 Bielsa 压迫强度完全不同；沙特先丢球易崩盘。',
      historical: '2022 友谊赛乌拉圭 2-0；沙特 2022 世界杯胜阿根廷是最大冷门参考。',
      factors: [
        { tag: '压迫', impact: '强', detail: 'Bielsa 高位压迫世界杯顶级，沙特出球困难' },
        { tag: 'DNA', impact: '中', detail: '2022 爆冷模板对阿根廷有效，对乌拉圭难度更大' },
        { tag: '气候', impact: '中', detail: '迈阿密 31°C 湿热，60\' 后沙特体能是考验' },
      ],
    }),
    coach_analysis: buildCoachAnalysis('mancini', 'bielsa'),
    weather: venueWeather('m13'),
    mystic: getMystic('m13'),
  };
}

function buildM15() {
  const xgH = 1.55, xgA = 0.85;
  return {
    id: 'm15', group: 'G', matchday: 1,
    date: '2026-06-15', time: '21:00', time_local: '21:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '09:00', date_beijing: '6月16日', time_beijing_full: '北京时间 6月16日 09:00',
    venue: 'SoFi Stadium', city: 'Inglewood, USA',
    note: 'G组第2场 · 伊朗 vs 新西兰 · 洛杉矶',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-4-2',
      home: 'Beiranvand; Moharrami, Hosseini, Kanani, Ghafouri; Nourollahi, Ezatolahi, Ghoddos; Jahanbakhsh, Taremi, Azmoun',
      away: 'Woodman; Boxall, Kelly, Mitchell; Singh, Howison, van der Ven; Just, Garbett, Singh; Wood',
      source: 'Opta / NZ Football 预测 · 非官方',
    }),
    home: team('Iran', 'ir', 22, 76, ['W', 'W', 'D', 'W', 'W'], 'Amir Ghalenoei', [
      { name: 'Mehdi Taremi', pos: 'ST', club: 'Inter Milan', stats: '锋线支点', rating: 8.2, desc: '背身+定位球破局关键' },
      { name: 'Sardar Azmoun', pos: 'ST', club: 'Shabab Al-Ahli', stats: '与 Taremi 双锋', rating: 8.0, desc: '跑位+远射，锋线互补' },
      { name: 'Alireza Jahanbakhsh', pos: 'RW', club: 'Feyenoord', stats: '边路速度', rating: 7.8, desc: '宽度与肋部渗透' },
    ], { name: 'Mehdi Taremi', pos: 'ST', desc: '伊朗进攻绝对核心，对位 NZ 英冠防线', rating: 8.2 },
      getTeamNews('m15', 'home').injuries, getTeamNews('m15', 'home').rumors),
    away: team('New Zealand', 'nz', 103, 58, ['L', 'D', 'W', 'L', 'D'], 'Darren Bazeley', [
      { name: 'Chris Wood', pos: 'ST', club: 'Nottm Forest', stats: '英超支点', rating: 7.5, desc: '定位球唯一稳定威胁' },
      { name: 'Marko Stamenic', pos: 'CM', club: 'Oxford', stats: '中场屏障', rating: 6.8, desc: '绞杀 Taremi 接球' },
      { name: 'Alex Paulsen', pos: 'GK', club: 'Bournemouth', stats: '年轻门将', rating: 6.7, desc: '面对 Taremi/Azmoun 考验极大' },
    ], { name: 'Chris Wood', pos: 'ST', desc: '一人球队核心，定位球是冷门唯一希望', rating: 7.5 },
      getTeamNews('m15', 'away').injuries, getTeamNews('m15', 'away').rumors),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [{ year: 2003, comp: 'AFC-OFC Challenge', score: '3-0', winner: 'Iran' }], note: '2003 伊朗 3-0 胜（非正式大赛）' },
    referee: getReferee('m15'),
    prediction: pred(xgH, xgA,
      '伊朗整体实力占优，Taremi/Azmoun 对位新西兰英冠班底防线。Wood 定位球是冷门点；xG 1.55-0.85 泊松最可能 2-0/1-0。',
      74),
    upset_alert: upsetAlert({
      favorite: 'Iran', underdog: 'New Zealand', favorite_iso: 'IR',
      index: 32, level: 'MEDIUM', level_cn: '中等',
      cold_result_pct: 35,
      verdict: '伊朗纸面占优但大赛进攻创造力历史偏弱——Wood 定位球 + 伊朗领先易保守，平局有 26% 空间。',
      tactical: 'Bazeley 4-4-2 低位 + Wood 支点；Ghalenoei 10 零封防守 vs Wood 头球是核心对位。',
      psychology: '新西兰大赛经验有限但无包袱；伊朗预选赛压力释放后或慢热。',
      historical: '2003 伊朗 3-0；Wood 英超经验是 NZ 唯一世界级资产。',
      factors: [
        { tag: '定位球', impact: '中', detail: 'Wood 头球 vs 伊朗防空，伊朗历史弱点' },
        { tag: '防守', impact: '强', detail: '伊朗预选赛 10 零封，纪律顶级' },
        { tag: '心理', impact: '弱', detail: '伊朗领先易保守，给 Wood 定位球机会' },
      ],
    }),
    coach_analysis: buildCoachAnalysis('ghalenoei', 'bazeley'),
    weather: venueWeather('m15'),
    mystic: getMystic('m15'),
  };
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 裁判 + Day 5 完整推演 · coach/mystic/referee/weather';
MATCH_DATA.breakingNews = [
  { tag: 'REFEREE', text: '✅ FIFA 确认：Makhadmeh(西-佛) · Abatti(比-埃) · Mariani(沙-乌) · Ramos(伊-新)', time: '裁判' },
  { tag: 'PREVIEW', text: '📅 今日4场 · 西班牙-佛得角(00:00) · 比利时-埃及(03:00) · 沙特-乌拉圭(06:00) · 伊朗-新西兰(09:00)', time: '6月16日' },
  { tag: 'PREVIEW', text: 'G/H组揭幕：Salah vs De Bruyne · Yamal 世界杯首秀 · Bielsa 高位压迫', time: '焦点' },
  { tag: 'OFFICIAL', text: '🏁 昨日：德国7-1 · 荷兰2-2日本 · 科特1-0 · 瑞典5-1 · 详见「过往赛果」', time: '赛果回顾' },
  { tag: 'UPDATE', text: '灵力分析/五行/主教练/裁判/气候板块已全部更新至 Day 5 完整版', time: '站点' },
];
MATCH_DATA.todayMatches = [buildM14(), buildM16(), buildM13(), buildM15()];

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 5 preview (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`
);

console.log('✅ Enriched:', MATCH_DATA.todayMatches.map(m => m.id).join(', '));
console.log('✅ coach_analysis:', MATCH_DATA.todayMatches.every(m => m.coach_analysis?.home?.name));
console.log('✅ mystic hexagram:', MATCH_DATA.todayMatches.map(m => m.mystic?.hexagram?.name).join(', '));
console.log('✅ referees:', MATCH_DATA.todayMatches.map(m => m.referee?.name).join(', '));
