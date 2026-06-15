/**
 * Day 5 rollover: archive m09–m12 → results-data.js, set today m14/m16/m13/m15 (6月16日北京 · 4场)
 * Run: node scripts/roll-day5.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { pendingReferee, lineupFromPrediction } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const TS = '2026-06-16T12:00:00+08:00';

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function team(name, iso, rank, rating, form, coach, star, injuries = [], rumors = []) {
  const stars = [star];
  return { name, iso, flag: '', fifa_rank: rank, rating, form, coach, stars, star, injuries, rumors };
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

function mysticBrief(homeScore, awayScore, verdict) {
  return {
    date_bazi: {
      year: '丙午年',
      month: '庚午月',
      day: '乙酉日',
      day_summary: '乙酉日——木金交争，强队须防迟滞，弱旅宜守中待变。',
      hour_home: '见各场开球时辰',
      hour_home_element: '金',
    },
    wuxing: {
      home: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', advantage: '' },
      away: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', disadvantage: '' },
      summary: '文化解读 · 正式推演见各场详情',
    },
    hexagram: {
      name: '待卦',
      symbol: '☯',
      quote: '赛前更新',
      general: '开赛前结合时辰与阵容再行解读。',
      scenarios: [],
    },
    home_score: homeScore,
    away_score: awayScore,
    mystic_verdict: verdict,
    disclaimer: '文化解读 · 非竞技推演',
  };
}

function weatherBlock(temp, humidity, condition_cn, summary, homeAdapt, awayAdapt) {
  return {
    temp,
    humidity,
    rain_chance: 15,
    condition_cn,
    impact_level: 'LOW',
    impact_summary: summary,
    home_adapt: homeAdapt,
    away_adapt: awayAdapt,
    weather_factors: [],
    historical_note: '',
  };
}

function archiveMatch(m, result, keyFactorAppend) {
  const copy = JSON.parse(JSON.stringify(m));
  copy.note = (copy.note || '').replace(/ · 待赛.*/, '').replace(/ · 已结束.*/, '') + ` · 已结束 ${result.home_score}-${result.away_score}`;
  copy.actualResult = result;
  if (copy.lineup) {
    copy.lineup.note = `${copy.lineup.note || ''} · 全场 ${result.home_score}-${result.away_score}`.trim();
    copy.lineup.updated = TS;
  }
  copy.prediction = {
    ...copy.prediction,
    key_factor: keyFactorAppend || copy.prediction?.key_factor,
  };
  return copy;
}

function buildM14() {
  const xgH = 2.45, xgA = 0.55;
  return {
    id: 'm14',
    group: 'H',
    matchday: 1,
    date: '2026-06-15',
    time: '12:00',
    time_local: '12:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '00:00',
    date_beijing: '6月16日',
    time_beijing_full: '北京时间 6月16日 00:00',
    venue: 'Mercedes-Benz Stadium',
    city: 'Atlanta, USA',
    note: 'H组揭幕 · 西班牙 vs 佛得角 · 亚特兰大',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-4-2',
      home: 'Simón; Carvajal, Le Normand, Laporte, Cucurella; Zubimendi, Pedri, Olmo; Yamal, Oyarzabal, Williams',
      away: 'Vozinha; Stopira, Monteiro, Cabral; Duarte, Semedo, Tavares; Lopes, Borges, Cabral; Platini',
      source: 'ESPN / FotMob 赛前预测 · 非官方',
    }),
    home: team('Spain', 'es', 3, 88, ['W', 'W', 'D', 'W', 'W'], 'Luis de la Fuente',
      { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', desc: '右路爆点，H组揭幕战核心', rating: 9.0 },
      [{ player: 'Pedri', status: 'FIT', note: '中场节拍器预计首发', confirmed: true }],
      ['欧洲杯冠军班底，传控+宽度是主旋律', 'Yamal/Williams 双翼对位佛得角五后卫']),
    away: team('Cape Verde', 'cv', 65, 62, ['D', 'W', 'L', 'W', 'D'], 'Bubista',
      { name: 'Ryan Mendes', pos: 'LW', club: 'Al-Taawoun', desc: '经验边锋，反击速度点', rating: 7.2 },
      [],
      ['非洲杯黑马基因，低位+反击是现实选择', '面对西班牙控球率或低于35%']),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式交锋 · 佛得角世界杯首秀' },
    referee: pendingReferee('FIFA Match 14 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA,
      '西班牙传控碾压局：Yamal/Pedri 对位 Bubista 低位 4-4-2。佛得角目标少丢当赢；xG 2.45-0.55 泊松最可能 3-0/2-0。',
      85),
    weather: weatherBlock(28, 62, '亚特兰大午后偏热', '东南湿热，西班牙传控消耗更大但实力差距明显', 88, 72),
    mystic: mysticBrief(82, 28, '西班牙火德盛，佛得角宜守不宜攻；H组揭幕强队取3分概率高。'),
  };
}

function buildM16() {
  const xgH = 1.95, xgA = 0.95;
  return {
    id: 'm16',
    group: 'G',
    matchday: 1,
    date: '2026-06-15',
    time: '12:00',
    time_local: '12:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '03:00',
    date_beijing: '6月16日',
    time_beijing_full: '北京时间 6月16日 03:00',
    venue: 'Lumen Field',
    city: 'Seattle, USA',
    note: 'G组揭幕 · 比利时 vs 埃及 · 西雅图',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Casteels; De Cuyper, De Bast, Theate, Castagne; Rits, Tielemans; Doku, De Bruyne, Trossard; Lukaku',
      away: 'El Shenawy; Hany, Rabia, Hegazi; El Shahat, Hamdi, Emam; Salah, Trezeguet, Marmoush',
      source: 'Sports Mole / FotMob 预测 · 非官方',
    }),
    home: team('Belgium', 'be', 4, 86, ['W', 'W', 'D', 'W', 'W'], 'Rudy Garcia',
      { name: 'Kevin De Bruyne', pos: 'CAM', club: 'Man City', desc: '黄金一代末班车核心，G组破局关键', rating: 9.0 },
      [{ player: 'Romelu Lukaku', status: 'FIT', note: '支点中锋预计首发', confirmed: true }],
      ['德布劳内+卢卡库仍是进攻轴心', '西雅图夜场人工草皮利于快速传导']),
    away: team('Egypt', 'eg', 36, 72, ['W', 'D', 'W', 'W', 'L'], 'Hossam Hassan',
      { name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', desc: '埃及唯一世界级爆点，反击发起点', rating: 8.8 },
      [{ player: 'Omar Marmoush', status: 'FIT', note: '德甲状态正佳，二前锋/中锋', confirmed: true }],
      ['Salah 一人球队属性明显', '面对比利时高位需抓转换']),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [{ year: 2019, comp: '友谊赛', score: '2-0', winner: 'Belgium' }], note: '比利时历史占优' },
    referee: pendingReferee('FIFA Match 16 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA,
      'G组焦点：De Bruyne 对位埃及双闸，Salah 反击是唯一变数。比利时纸面占优但大赛慢热有前例；xG 1.95-0.95 泊松最可能 2-1。',
      78),
    weather: weatherBlock(19, 58, '西雅图夜场凉爽', '太平洋西北凉爽，双方体能消耗低于休斯顿/迈阿密', 80, 78),
    mystic: mysticBrief(68, 38, '比利时金气盛而埃及火德孤悬——Salah 如暗雷，先破门则指数骤降。'),
  };
}

function buildM13() {
  const xgH = 0.75, xgA = 1.85;
  return {
    id: 'm13',
    group: 'H',
    matchday: 1,
    date: '2026-06-15',
    time: '18:00',
    time_local: '18:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '06:00',
    date_beijing: '6月16日',
    time_beijing_full: '北京时间 6月16日 06:00',
    venue: 'Hard Rock Stadium',
    city: 'Miami, USA',
    note: 'H组第2场 · 沙特 vs 乌拉圭 · 迈阿密',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-4-2',
      home: 'Al-Owais; Al-Breik, Al-Amri, Al-Boleahi, Al-Shahrani; Al-Faraj, Kanno; Al-Dawsari, Al-Shehri, Al-Hassan; Al-Buraikan',
      away: 'Roche; Núñez, Araujo, Cáceres; Olivera, Ugarte, Valverde; Pellistri, De la Cruz, Bentancur; Núñez',
      source: 'ESPN / Arab News 预测 · 非官方',
    }),
    home: team('Saudi Arabia', 'sa', 58, 68, ['W', 'L', 'D', 'W', 'L'], 'Roberto Mancini',
      { name: 'Salem Al-Dawsari', pos: 'LW', club: 'Al-Hilal', desc: '2022 对阿根廷进球功臣，左路核心', rating: 7.8 },
      [],
      ['Mancini 强调低位+转换，2022 爆冷模板仍在', '迈阿密湿热对体能要求高']),
    away: team('Uruguay', 'uy', 11, 82, ['W', 'W', 'D', 'W', 'W'], 'Marcelo Bielsa',
      { name: 'Darwin Núñez', pos: 'ST', club: 'Liverpool', desc: '高位压迫支点，Bielsa 体系核心', rating: 8.5 },
      [{ player: 'Federico Valverde', status: 'FIT', note: '全能中场，覆盖+远射', confirmed: true }],
      ['Bielsa 高位压迫强度世界杯顶级', '沙特若先丢球易崩盘']),
    h2h: { home_wins: 0, draws: 1, away_wins: 2, recent: [{ year: 2022, comp: '友谊赛', score: '0-2', winner: 'Uruguay' }], note: '乌拉圭历史占优' },
    referee: pendingReferee('FIFA Match 13 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA,
      'Bielsa 高位压迫 vs Mancini 低位：乌拉圭 xG 1.85 明显占优，Valverde/Núñez 对位沙特防线。沙特 2022 爆冷有 DNA 但硬实力差距大；泊松最可能 0-2/1-2。',
      80),
    weather: weatherBlock(31, 72, '迈阿密湿热', '东南湿热夜场，乌拉圭体能深度更占优', 70, 82),
    mystic: mysticBrief(32, 72, '乌拉圭金土相涵，沙特宜守；Bielsa 压迫如巽风，先破门则大势已定。'),
  };
}

function buildM15() {
  const xgH = 1.55, xgA = 0.85;
  return {
    id: 'm15',
    group: 'G',
    matchday: 1,
    date: '2026-06-15',
    time: '21:00',
    time_local: '21:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '09:00',
    date_beijing: '6月16日',
    time_beijing_full: '北京时间 6月16日 09:00',
    venue: 'SoFi Stadium',
    city: 'Inglewood, USA',
    note: 'G组第2场 · 伊朗 vs 新西兰 · 洛杉矶',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-4-2',
      home: 'Beiranvand; Moharrami, Hosseini, Kanani, Ghafouri; Nourollahi, Ezatolahi, Ghoddos; Jahanbakhsh, Taremi, Azmoun',
      away: 'Woodman; Boxall, Kelly, Mitchell; Singh, Howison, van der Ven; Just, Garbett, Singh; Wood',
      source: 'Opta / NZ Football 预测 · 非官方',
    }),
    home: team('Iran', 'ir', 22, 76, ['W', 'W', 'D', 'W', 'W'], 'Amir Ghalenoei',
      { name: 'Mehdi Taremi', pos: 'ST', club: 'Inter Milan', desc: '锋线支点，定位球与背身是破局点', rating: 8.2 },
      [{ player: 'Sardar Azmoun', status: 'FIT', note: '与 Taremi 双前锋或轮换', confirmed: true }],
      ['亚洲区预选赛防守顶级（10场10零封）', 'SoFi 人工草皮，伊朗传控略占优']),
    away: team('New Zealand', 'nz', 103, 58, ['L', 'D', 'W', 'L', 'D'], 'Darren Bazeley',
      { name: 'Chris Wood', pos: 'ST', club: 'Nottm Forest', desc: '英超支点，定位球是唯一稳定威胁', rating: 7.5 },
      [],
      ['大洋洲附加赛晋级，大赛经验有限', 'Wood 一人反击，低位 4-4-2 是现实选择']),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式交锋' },
    referee: pendingReferee('FIFA Match 15 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA,
      '伊朗整体实力占优，Taremi/Azmoun 对位新西兰英冠班底防线。Wood 定位球是冷门点；xG 1.55-0.85 泊松最可能 2-0/1-0。',
      74),
    weather: weatherBlock(22, 55, '洛杉矶夜场舒适', '南加州夜场气温适中，利于传控', 82, 75),
    mystic: mysticBrief(65, 42, '伊朗水土相济，新西兰木气孤悬——Wood 如独木，难支大厦。'),
  };
}

// ── Archive Day 4 ───────────────────────────────────────────
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

const byId = id => MATCH_DATA.todayMatches.find(m => m.id === id);

const archived = [
  archiveMatch(byId('m09'), {
    home_score: 7,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Nmecha 6' (Wirtz); Comenencia 21'; Schlotterbeck 38'; Havertz 45+5 pen; Musiala 47' (Kimmich); Brown 68' (Undav); Undav 78'; Havertz 88' (Undav)",
    highlights: 'Comenencia 库拉索世界杯历史首球 · xG 4.22-0.41 · 出席 68,021 · Neuer 第125场 · Musiala/Undav 替补建功',
  }, '【赛后复盘】赛前主胜94%/最可能3-0；实际7-1。Comenencia 21\' 一度1-1，德国半场后连入6球。方向：主胜命中；比分低估进球数。Havertz 双响 · Musiala 世界波。'),

  archiveMatch(byId('m10'), {
    home_score: 2,
    away_score: 2,
    status: 'FT',
    label: '全场结束',
    scorers: "van Dijk 51' (Gravenberch); Nakamura 57'; Summerville 64'; Kamada 88' (Shiogai)",
    highlights: '下半场4球对轰 · Kamada 89\' 绝平 · xG 0.78-0.59 · 出席 69,285 · 荷兰16场小组赛不败延续',
  }, '【赛后复盘】赛前主胜56%/最可能2-1；实际2-2。van Dijk+Summerville 两度领先，Nakamura+Kamada 两度扳平。方向：平局命中（23%）；日本爆冷指数兑现。'),

  archiveMatch(byId('m11'), {
    home_score: 1,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Amad Diallo 90' (Singo)",
    highlights: 'Amad 替补90\'绝杀 · 厄瓜多尔三门柱 · xG 1.52-1.01 · 出席 68,274 · 终结厄瓜多尔19场不败',
  }, '【赛后复盘】赛前平局35%/最可能1-1；实际1-0主胜。Caicedo 绞杀有效但 Amad 90\' 破局。方向：主胜命中（38%）；非洲首胜2026世界杯。'),

  archiveMatch(byId('m12'), {
    home_score: 5,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Ayari 7', 90+6' (Bergvall); Isak 30' (Gyökeres); Rekik 43' (Mejbri); Gyökeres 59' (Isak); Svanberg 84' (Isak)",
    highlights: 'Isak 世界杯首球+2助攻 · Svanberg 替补12秒进球 · xG 约3.2-1.0 · Potter 3-4-3 大胜 · 瑞典领跑F组',
  }, '【赛后复盘】赛前主胜49%/最可能1-1；实际5-1。Isak+Gyökeres+Ayari 全面爆发，远超模型预期。方向：主胜命中；比分大幅低估。'),
];

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA + FotMob 官方赛果';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月15日 · 德国7-1库拉索 · 荷兰2-2日本 · 科特1-0厄瓜 · 瑞典5-1突尼斯 · 当日4场全部结束', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'E组：德国/科特各3分 · F组：瑞典3分领跑 · 荷日各1分', time: '小组形势' },
  { tag: 'LINEUP', text: '德国战：Comenencia 历史首球 · Havertz 双响 · xG 4.22-0.41', time: '6月15日' },
  { tag: 'LINEUP', text: '荷日战：Kamada 88\' 绝平 · 下半场4球 · xG 0.78-0.59', time: '6月15日' },
  { tag: 'LINEUP', text: '瑞典战：Isak 首球+2助 · Ayari 双响 · Potter 3-4-3 大胜', time: '6月15日' },
  { tag: 'OFFICIAL', text: '🏁 6月14日 · 海地0-1苏格兰 · 澳大利亚2-0土耳其 · 详见下方', time: '前日回顾' },
  ...RESULTS_DATA.breakingNews.slice(0, 4),
].slice(0, 12);

RESULTS_DATA.finishedMatches = [...RESULTS_DATA.finishedMatches, ...archived];

function upsertGroup(group, label, table) {
  const snaps = RESULTS_DATA.groupSnapshots || [];
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  RESULTS_DATA.groupSnapshots = snaps;
}

upsertGroup('E', 'E组 · 第1轮（4场已赛）', [
  { team: 'Germany', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 7, ga: 1 },
  { team: "Côte d'Ivoire", pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 1, ga: 0 },
  { team: 'Ecuador', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 1 },
  { team: 'Curaçao', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 7 },
]);

upsertGroup('F', 'F组 · 第1轮（4场已赛）', [
  { team: 'Sweden', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 5, ga: 1 },
  { team: 'Japan', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
  { team: 'Netherlands', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
  { team: 'Tunisia', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 5 },
]);

// ── Day 5 today ─────────────────────────────────────────────
const todayMatches = [buildM14(), buildM16(), buildM13(), buildM15()];

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 5 preview',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：德国7-1 · 荷兰2-2日本 · 科特1-0 · 瑞典5-1 · 详见「过往赛果」', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 西班牙-佛得角(00:00) · 比利时-埃及(03:00) · 沙特-乌拉圭(06:00) · 伊朗-新西兰(09:00)', time: '6月16日' },
    { tag: 'PREVIEW', text: 'G/H组揭幕：Salah vs De Bruyne · Yamal 世界杯首秀 · Bielsa 高位压迫', time: '焦点' },
    { tag: 'OFFICIAL', text: 'E组德国/科特各3分 · F组瑞典领跑 · 荷日各1分', time: '积分榜' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认 · 未确认显示「等待官方确认」', time: '裁判' },
  ],
  todayMatches,
  nextMatch: {
    group: 'H',
    matchday: 1,
    date: '2026-06-15',
    time: '12:00',
    time_local: '12:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '00:00',
    date_beijing: '6月16日',
    time_beijing_full: '北京时间 6月16日 00:00',
    venue: 'Mercedes-Benz Stadium',
    city: 'Atlanta, USA',
    home: { name: 'Spain', iso: 'es', fifaRank: 3, rating: 88 },
    away: { name: 'Cape Verde', iso: 'cv', fifaRank: 65, rating: 62 },
    teaser: 'H组揭幕：欧洲杯冠军西班牙 vs 世界杯新军佛得角。',
    home_win: 78,
    draw: 14,
    away_win: 8,
    predicted_score: '3-0',
    key_player_home: 'Lamine Yamal',
    key_player_away: 'Ryan Mendes',
  },
  upcomingMatches: [
    {
      group: 'G',
      time_beijing_full: '北京时间 6月16日 03:00',
      venue: 'Lumen Field',
      city: 'Seattle, USA',
      home: { name: 'Belgium', iso: 'be' },
      away: { name: 'Egypt', iso: 'eg' },
      teaser: 'G组：De Bruyne vs Salah',
    },
    {
      group: 'I',
      time_beijing_full: '北京时间 6月17日 03:00',
      venue: 'MetLife Stadium',
      city: 'East Rutherford, USA',
      home: { name: 'France', iso: 'fr' },
      away: { name: 'Senegal', iso: 'sn' },
      teaser: 'I组揭幕：法国 vs 塞内加尔',
    },
  ],
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 5 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`
);

console.log('✅ Archived:', archived.map(m => `${m.id} ${m.actualResult.home_score}-${m.actualResult.away_score}`).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
console.log('✅ Predictions:', todayMatches.map(m => `${m.id} ${m.prediction.score} (${m.prediction.home_win}/${m.prediction.draw}/${m.prediction.away_win})`).join('\n   '));
