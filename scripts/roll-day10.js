/**
 * Day 10 rollover: upsert m29–m32 → results-data.js, set today m33–m36（6月21日北京 · 4场）
 * Run: node scripts/sync-day9-results.js && node scripts/roll-day10.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { pendingReferee, lineupFromPrediction } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = '2026-06-21T08:00:00+08:00';

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
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

function team(name, iso, rank, rating, form, coach, star, injuries = [], rumors = []) {
  return { name, iso, flag: '', fifa_rank: rank, rating, form, coach, stars: [star], star, injuries, rumors };
}

function mysticBrief(homeScore, awayScore, verdict) {
  return {
    date_bazi: {
      year: '丙午年',
      month: '甲午月',
      day: '庚寅日',
      day_summary: '庚寅日——金木相战，热门宜早破局；忌领先后松懈。',
      hour_home: '见各场开球时辰',
      hour_home_element: '木',
    },
    wuxing: {
      home: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', advantage: '' },
      away: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', disadvantage: '' },
      summary: '文化解读 · 正式推演见各场详情',
    },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '开赛前结合时辰与阵容再行解读。', scenarios: [] },
    home_score: homeScore,
    away_score: awayScore,
    mystic_verdict: verdict,
    disclaimer: '文化解读 · 非竞技推演',
  };
}

function upsertFinished(list, matches) {
  const out = [...list];
  for (const m of matches) {
    const i = out.findIndex(x => x.id === m.id);
    const copy = JSON.parse(JSON.stringify(m));
    if (i >= 0) out[i] = copy;
    else out.push(copy);
  }
  return out;
}

function upsertGroup(snaps, group, label, table) {
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  return snaps;
}

/** 北京时间 6月21日 01:00 · Match 35 */
function buildM35() {
  const xgH = 1.72, xgA = 1.05;
  return {
    id: 'm35',
    group: 'F',
    matchday: 2,
    date: '2026-06-20',
    time: '12:00',
    time_local: '12:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '01:00',
    date_beijing: '6月21日',
    time_beijing_full: '北京时间 6月21日 01:00',
    venue: 'NRG Stadium',
    city: 'Houston, USA',
    note: 'F组第2轮 · 荷兰 vs 瑞典 · 休斯顿',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-4-2',
      home: 'Verbruggen; Dumfries, De Ligt, Van Dijk, Blind; Reijnders, Wijnaldum, Simons; Gakpo, Depay, Bergwijn',
      away: 'Olsen; Krafth, Lindelöf, Granqvist, Augustinsson; Olsson, Forsberg, Kulusevski; Isak, Gyökeres, Elanga',
      source: 'ESPN / VI 预测 · 非官方',
    }),
    home: team('Netherlands', 'nl', 7, 84, ['D', 'W', 'W', 'D', 'W'], 'Ronald Koeman',
      { name: 'Virgil van Dijk', pos: 'CB', club: 'Liverpool', desc: '队长 · 防线核心', rating: 8.5 }),
    away: team('Sweden', 'se', 25, 74, ['W', 'L', 'D', 'W', 'L'], 'Janne Andersson',
      { name: 'Alexander Isak', pos: 'ST', club: 'Newcastle', desc: '锋线支点', rating: 8.2 }),
    h2h: { home_wins: 2, draws: 1, away_wins: 1, recent: [], note: '大赛交锋荷兰略优' },
    referee: pendingReferee('FIFA Match 35 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'F组榜首对话：瑞典首轮 5-1 后士气高 · 荷兰首轮平日本需取胜；Isak vs Van Dijk · 泊松倾向 2-1/1-1。', 70),
    weather: { temp: 32, humidity: 68, condition_cn: '休斯顿湿热', impact_summary: '高温高湿或拖慢节奏、轮换增多', home_adapt: 80, away_adapt: 78 },
    mystic: mysticBrief(55, 45, '荷兰金水相济，瑞典土金守势；休斯顿午火，宜上半场破局。'),
  };
}

/** 北京时间 6月21日 04:00 · Match 33 */
function buildM33() {
  const xgH = 2.05, xgA = 0.95;
  return {
    id: 'm33',
    group: 'E',
    matchday: 2,
    date: '2026-06-20',
    time: '16:00',
    time_local: '16:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '04:00',
    date_beijing: '6月21日',
    time_beijing_full: '北京时间 6月21日 04:00',
    venue: 'BMO Field',
    city: 'Toronto, Canada',
    note: 'E组第2轮 · 德国 vs 科特迪瓦 · 多伦多',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Neuer; Kimmich, Rüdiger, Tah, Raum; Goretzka, Andrich; Musiala, Wirtz, Sané; Havertz',
      away: 'Fodé; Konan, Boly, Aurier; Serper, Sangaré; Zaha, Adingra, Bamba; Krasso, Haller',
      source: 'Kicker / BBC 预测 · 非官方',
    }),
    home: team('Germany', 'de', 8, 86, ['W', 'W', 'D', 'W', 'W'], 'Julian Nagelsmann',
      { name: 'Florian Wirtz', pos: 'CAM', club: 'Leverkusen', desc: '组织核心', rating: 8.7 }),
    away: team("Côte d'Ivoire", 'ci', 36, 75, ['W', 'D', 'L', 'W', 'D'], 'Emerse Faé',
      { name: 'Nicolas Pépé', pos: 'RW', club: 'Trabzonspor', desc: '边路爆点', rating: 8.0 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [], note: '德国大赛占优' },
    referee: pendingReferee('FIFA Match 33 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'E组榜首战：德国 7-1 库拉索后 xG 高位 · 科特迪瓦 1-0 厄瓜多尔 · Wirtz+Musiala vs 非洲杯冠军反击。', 76),
    weather: { temp: 24, humidity: 55, condition_cn: '多伦多温和', impact_summary: '气候影响低', home_adapt: 82, away_adapt: 80 },
    mystic: mysticBrief(62, 38, '德国火金旺盛，科特迪瓦金水杂；多伦多傍晚宜控局。'),
  };
}

/** 北京时间 6月21日 08:00 · Match 34 */
function buildM34() {
  const xgH = 1.65, xgA = 0.72;
  return {
    id: 'm34',
    group: 'E',
    matchday: 2,
    date: '2026-06-20',
    time: '20:00',
    time_local: '20:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '08:00',
    date_beijing: '6月21日',
    time_beijing_full: '北京时间 6月21日 08:00',
    venue: 'Arrowhead Stadium',
    city: 'Kansas City, USA',
    note: 'E组第2轮 · 厄瓜多尔 vs 库拉索 · 堪萨斯城',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 5-4-1',
      home: 'Domínguez; Preciado, Torres, Hincapié, Estupiñán; Caicedo, Gruezo, Plata; Sarmiento, Valencia, Estrada',
      away: 'Rosa; Martina, Lacroes, Maria; Gaari, Leerdam; Janga, Hooi, Rijssel; Beaumont, Jansen, Baas',
      source: 'ESPN 预测 · 非官方',
    }),
    home: team('Ecuador', 'ec', 29, 73, ['L', 'D', 'W', 'L', 'W'], 'Sebastián Beccacece',
      { name: 'Moisés Caicedo', pos: 'DM', club: 'Chelsea', desc: '中场屏障', rating: 8.3 }),
    away: team('Curaçao', 'cw', 88, 65, ['L', 'D', 'L', 'W', 'L'], 'Dick Advocaat',
      { name: 'Leandro Bacuna', pos: 'CM', club: 'Cardiff', desc: '经验老将', rating: 7.2 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 34 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '厄瓜多尔 0-1 科特迪瓦后须抢分；库拉索 1-7 德国后或铁桶 · Caicedo 控中场 · 最可能 2-0/1-0。', 72),
    weather: { temp: 28, humidity: 60, condition_cn: '堪萨斯城夏夜', impact_summary: '湿热中等', home_adapt: 81, away_adapt: 77 },
    mystic: mysticBrief(58, 42, '厄瓜多尔木火求胜，库拉索水土守势；弱队宜深度低位。'),
  };
}

/** 北京时间 6月21日 12:00 · Match 36 */
function buildM36() {
  const xgH = 1.08, xgA = 1.42;
  return {
    id: 'm36',
    group: 'F',
    matchday: 2,
    date: '2026-06-21',
    time: '00:00',
    time_local: '00:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '12:00',
    date_beijing: '6月21日',
    time_beijing_full: '北京时间 6月21日 12:00',
    venue: 'Estadio BBVA',
    city: 'Monterrey, Mexico',
    note: 'F组第2轮 · 突尼斯 vs 日本 · 蒙特雷',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Dahmen; Dräger, Meriah, Talbi, Laabidi; Skhiri, Laidouni; Khazri, Sliti, Msakni; Jebali',
      away: 'Suzuki; Ito, Tomiyasu, Taniguchi, Hiroki; Endo, Morita; Kubo, Minamino, Doan; Mitoma, Suzuki',
      source: 'FotMob / ESPN 预测 · 非官方',
    }),
    home: team('Tunisia', 'tn', 40, 71, ['L', 'D', 'W', 'L', 'D'], 'Samuel Zaouali',
      { name: 'Wahbi Khazri', pos: 'CAM', club: 'Montpellier', desc: '进攻核心', rating: 7.8 }),
    away: team('Japan', 'jp', 18, 78, ['D', 'W', 'W', 'L', 'D'], 'Hajime Moriyasu',
      { name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', desc: '边路创造力', rating: 8.2 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [], note: '日本近年略优' },
    referee: pendingReferee('FIFA Match 36 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '日本首轮 2-2 荷兰后 xG 不差 · 突尼斯 1-5 瑞典后须抢分 · Kubo+Mitoma vs 北非低位。', 68),
    weather: { temp: 27, humidity: 55, condition_cn: '蒙特雷夜场', impact_summary: '高原气候适中', home_adapt: 79, away_adapt: 83 },
    mystic: mysticBrief(42, 58, '突尼斯土火守中，日本水木流动；夜场宜技术控球。'),
  };
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

let toArchive = (MATCH_DATA.todayMatches || []).filter(m => ['m29', 'm30', 'm31', 'm32'].includes(m.id));
if (toArchive.length !== 4) {
  toArchive = ['m29', 'm30', 'm31', 'm32']
    .map(id => (RESULTS_DATA.finishedMatches || []).find(m => m.id === id) || (MATCH_DATA.todayMatches || []).find(m => m.id === id))
    .filter(Boolean);
}
if (toArchive.length !== 4) {
  console.warn('⚠ Expected 4 Day 9 matches to archive, got', toArchive.length, toArchive.map(m => m.id));
}

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 9 完结 · Day 10 预览';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 昨日：土0-1巴 · 美2-0澳 · 苏0-1摩 · 巴3-0海', time: '6月20日' },
  { tag: 'OFFICIAL', text: '巴拉圭 10 人守成 · 美国 6 分出线 · C/D 组第 2 轮完结', time: '赛果' },
  { tag: 'PREVIEW', text: '📅 6月21日 · 荷-瑞(01:00) · 德-象(04:00) · 厄-库(08:00) · 突-日(12:00)', time: '今日赛程' },
  { tag: 'PREVIEW', text: 'E/F组第2轮：德国 vs 科特迪瓦榜首战 · 荷兰 vs 瑞典', time: '焦点' },
  { tag: 'OFFICIAL', text: 'C组：摩洛哥&巴西 4 分 · D组：美国 6 分', time: '积分榜' },
  ...RESULTS_DATA.breakingNews.filter(n => !/6月20日/.test(n.text || '')).slice(0, 6),
].slice(0, 12);

RESULTS_DATA.finishedMatches = upsertFinished(RESULTS_DATA.finishedMatches || [], toArchive);

let snaps = RESULTS_DATA.groupSnapshots || [];
snaps = upsertGroup(snaps, 'C', 'C组 · 第2轮后', [
  { team: 'Morocco', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 2, ga: 1 },
  { team: 'Brazil', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 3, ga: 0 },
  { team: 'Scotland', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 1, ga: 2 },
  { team: 'Haiti', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 3 },
]);
snaps = upsertGroup(snaps, 'D', 'D组 · 第2轮后', [
  { team: 'USA', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 6, ga: 1 },
  { team: 'Australia', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 4 },
  { team: 'Paraguay', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 4 },
  { team: 'Türkiye', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 3 },
]);
snaps = upsertGroup(snaps, 'E', 'E组 · 第1轮后', [
  { team: 'Germany', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 7, ga: 1 },
  { team: "Côte d'Ivoire", pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 1, ga: 0 },
  { team: 'Ecuador', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 1 },
  { team: 'Curaçao', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 7 },
]);
snaps = upsertGroup(snaps, 'F', 'F组 · 第1轮后', [
  { team: 'Sweden', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 5, ga: 1 },
  { team: 'Japan', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
  { team: 'Netherlands', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
  { team: 'Tunisia', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 5 },
]);
RESULTS_DATA.groupSnapshots = snaps;

const todayMatches = [buildM35(), buildM33(), buildM34(), buildM36()];
const first = todayMatches[0];
const p0 = first.prediction;

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 10 preview',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：土0-1巴 · 美2-0澳 · 苏0-1摩 · 巴3-0海 · 巴拉圭 10 人守成', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 荷-瑞(01:00) · 德-象(04:00) · 厄-库(08:00) · 突-日(12:00)', time: '6月21日' },
    { tag: 'PREVIEW', text: 'E/F组第2轮：德国 vs 科特迪瓦 · 荷兰 vs 瑞典 · 日本再战', time: '焦点' },
    { tag: 'OFFICIAL', text: 'C/D组第2轮完结 · 美国 6 分出线 · 土耳其 0 分', time: '积分榜' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认', time: '裁判' },
    { tag: 'INJURY', text: 'Day 10 伤病/首发待赛前更新', time: '6月21日' },
  ],
  todayMatches,
  nextMatch: {
    group: first.group,
    matchday: first.matchday,
    date: first.date,
    time: first.time,
    time_local: first.time_local,
    timezone: first.timezone,
    time_beijing: first.time_beijing,
    date_beijing: first.date_beijing,
    time_beijing_full: first.time_beijing_full,
    venue: first.venue,
    city: first.city,
    home: { name: first.home.name, iso: first.home.iso, fifaRank: first.home.fifa_rank, rating: first.home.rating },
    away: { name: first.away.name, iso: first.away.iso, fifaRank: first.away.fifa_rank, rating: first.away.rating },
    teaser: 'F组第2轮：荷兰 vs 瑞典 · 休斯顿',
    home_win: p0.home_win,
    draw: p0.draw,
    away_win: p0.away_win,
    predicted_score: p0.score,
    key_player_home: first.home.star?.name || 'Virgil van Dijk',
    key_player_away: first.away.star?.name || 'Alexander Isak',
  },
  upcomingMatches: todayMatches.slice(1).map(m => ({
    group: m.group,
    time_beijing_full: m.time_beijing_full,
    venue: m.venue,
    city: m.city,
    home: { name: m.home.name, iso: m.home.iso },
    away: { name: m.away.name, iso: m.away.iso },
    teaser: m.note?.split(' · ')[0] || `${m.group}组`,
  })),
};

const day9Results = toArchive.filter(m => m.actualResult?.status === 'FT').map(m => ({
  id: m.id,
  home: m.home?.name || m.home,
  away: m.away?.name || m.away,
  score: `${m.actualResult.home_score}-${m.actualResult.away_score}`,
  group: m.group,
}));

const LIVE_DATA = {
  lastUpdated: TS,
  todayDate: '2026-06-21',
  fixtures: todayMatches.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    status: 'NS',
    home_score: null,
    away_score: null,
    group: m.group,
  })),
  allResults: day9Results,
  standings: snaps.filter(g => ['C', 'D', 'E', 'F'].includes(g.group)),
  injuries: { note: 'Day 10 赛前更新 · 关注德国/荷兰/日本队检' },
  yesterdayResults: day9Results.map(r => ({ id: r.id, score: r.score })),
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 10 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/roll-day10.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Archived:', toArchive.map(m => `${m.id} ${m.actualResult?.home_score ?? '?'}-${m.actualResult?.away_score ?? '?'}`).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
