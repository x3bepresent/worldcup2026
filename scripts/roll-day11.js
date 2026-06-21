/**
 * Day 11 rollover: archive m33–m36 → results, set today m38/m39/m37/m40（6月22日北京 · 4场）
 * Run: node scripts/sync-day10-results.js && node scripts/roll-day11.js && node scripts/enrich-day11.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { pendingReferee, lineupFromPrediction } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

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
      day: '辛卯日',
      day_summary: '辛卯日——金木相战，热门宜早破局；忌领先后松懈。',
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

/** 北京时间 6月22日 00:00 · Match 38 */
function buildM38() {
  const xgH = 2.25, xgA = 0.62;
  return {
    id: 'm38',
    group: 'H',
    matchday: 2,
    date: '2026-06-21',
    time: '12:00',
    time_local: '12:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '00:00',
    date_beijing: '6月22日',
    time_beijing_full: '北京时间 6月22日 00:00',
    venue: 'Mercedes-Benz Stadium',
    city: 'Atlanta, USA',
    note: 'H组第2轮 · 西班牙 vs 沙特 · 亚特兰大',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 5-4-1',
      home: 'Simón; Carvajal, Laporte, Cubarsí, Cucurella; Zubimendi, Pedri, Olmo; Yamal, Morata, Williams',
      away: 'Al-Owais; Al-Breik, Al-Amri, Al-Boleahi, Al-Shahrani; Al-Dawsari, Kanno, Al-Faraj; Al-Shehri, Al-Dawsari, Al-Buraikan',
      source: 'Marca / ESPN 预测 · 非官方',
    }),
    home: team('Spain', 'es', 3, 88, ['D', 'W', 'W', 'D', 'W'], 'Luis de la Fuente',
      { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', desc: '0-0 后须破局', rating: 9.0 }),
    away: team('Saudi Arabia', 'sa', 58, 68, ['D', 'L', 'W', 'D', 'L'], 'Manuel Hervé Renard',
      { name: 'Salem Al-Dawsari', pos: 'LW', club: 'Al-Hilal', desc: '1-1 乌拉圭后信心', rating: 7.8 }),
    h2h: { home_wins: 2, draws: 1, away_wins: 0, recent: [], note: '西班牙大赛占优' },
    referee: pendingReferee('FIFA Match 38 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'H组：西班牙 0-0 佛得角效率归零后须取胜 · 沙特 1-1 乌拉圭低位顽强 · Yamal+Pedri vs Renard 铁桶 · 泊松 2-0/1-0。', 78),
    weather: { temp: 30, humidity: 65, condition_cn: '亚特兰大夏午', impact_summary: '湿热中等，封闭球场影响有限', home_adapt: 86, away_adapt: 80 },
    mystic: mysticBrief(72, 28, '西班牙火金旺，沙特水土守；亚特兰大午火，宜上半场破局。'),
  };
}

/** 北京时间 6月22日 03:00 · Match 39 */
function buildM39() {
  const xgH = 1.92, xgA = 1.05;
  return {
    id: 'm39',
    group: 'G',
    matchday: 2,
    date: '2026-06-21',
    time: '15:00',
    time_local: '12:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '03:00',
    date_beijing: '6月22日',
    time_beijing_full: '北京时间 6月22日 03:00',
    venue: 'SoFi Stadium',
    city: 'Inglewood, USA',
    note: 'G组第2轮 · 比利时 vs 伊朗 · 洛杉矶',
    lineup: lineupFromPrediction({
      formation: '3-4-2-1 / 4-1-4-1',
      home: 'Casteels; De Cuyper, Theate, De Bast, Castagne; Tielemans, Onana; Doku, De Bruyne, Trossard; Lukaku',
      away: 'Beiranvand; Rezaeian, Hosseini, Kanani, Mohammadi; Ezatolahi, Nourollahi; Jahanbakhsh, Ghoddos, Taremi; Azmoun',
      source: 'Het Laatste Nieuws / ESPN 预测 · 非官方',
    }),
    home: team('Belgium', 'be', 4, 85, ['D', 'W', 'W', 'D', 'W'], 'Domenico Tedesco',
      { name: 'Kevin De Bruyne', pos: 'CAM', club: 'Man City', desc: '1-1 埃及后须主导', rating: 8.8 }),
    away: team('Iran', 'ir', 22, 76, ['D', 'D', 'W', 'L', 'W'], 'Amir Ghalenoei',
      { name: 'Mehdi Taremi', pos: 'ST', club: 'Inter', desc: '2-2 新西兰后士气', rating: 8.1 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [], note: '友谊赛比利时略优' },
    referee: pendingReferee('FIFA Match 39 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'G组均分乱局：比利时 1-1 埃及效率一般 · 伊朗 2-2 新西兰进攻回暖 · Doku+KDB vs Taremi · 1-1/2-1。', 70),
    weather: { temp: 26, humidity: 55, condition_cn: '洛杉矶温和', impact_summary: '气候影响低', home_adapt: 84, away_adapt: 82 },
    mystic: mysticBrief(58, 42, '比利时金水相济，伊朗火土守中；G组四队均1分，宜稳。'),
  };
}

/** 北京时间 6月22日 06:00 · Match 37 */
function buildM37() {
  const xgH = 1.78, xgA = 0.82;
  return {
    id: 'm37',
    group: 'H',
    matchday: 2,
    date: '2026-06-21',
    time: '18:00',
    time_local: '18:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '06:00',
    date_beijing: '6月22日',
    time_beijing_full: '北京时间 6月22日 06:00',
    venue: 'Hard Rock Stadium',
    city: 'Miami, USA',
    note: 'H组第2轮 · 乌拉圭 vs 佛得角 · 迈阿密',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 5-4-1',
      home: 'Rocher; Núñez, Araujo, Cáceres, Viña; Ugarte, Valverde; Pellistri, De la Cruz, Maxi Araújo; Núñez',
      away: 'Vozinha; Monteiro, Cabo, Ponck; Borges, Lopes; Semedo, Pina, Moreira; Cabral, Bebé',
      source: 'Olé / BBC 预测 · 非官方',
    }),
    home: team('Uruguay', 'uy', 9, 82, ['D', 'W', 'W', 'D', 'W'], 'Marcelo Bielsa',
      { name: 'Darwin Núñez', pos: 'ST', club: 'Liverpool', desc: '1-1 沙特控球未赢', rating: 8.4 }),
    away: team('Cape Verde', 'cv', 73, 62, ['D', 'L', 'D', 'W', 'L'], 'Bubista',
      { name: 'Vozinha', pos: 'GK', club: 'AEL Limassol', desc: '0-0 西班牙 MOM', rating: 8.5 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 37 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'H组：乌拉圭 1-1 沙特控球碾压未取3分 · 佛得角 0-0 西班牙 Vozinha 铁桶 · Bielsa 须破密集 · 1-0/2-0。', 74),
    weather: { temp: 31, humidity: 78, condition_cn: '迈阿密湿热', impact_summary: '高湿或拖慢节奏', home_adapt: 80, away_adapt: 78 },
    mystic: mysticBrief(65, 35, '乌拉圭金水相济，佛得角土守；迈阿密晚场宜控局。'),
  };
}

/** 北京时间 6月22日 09:00 · Match 40 */
function buildM40() {
  const xgH = 1.12, xgA = 1.18;
  return {
    id: 'm40',
    group: 'G',
    matchday: 2,
    date: '2026-06-21',
    time: '18:00',
    time_local: '18:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '09:00',
    date_beijing: '6月22日',
    time_beijing_full: '北京时间 6月22日 09:00',
    venue: 'BC Place',
    city: 'Vancouver, Canada',
    note: 'G组第2轮 · 新西兰 vs 埃及 · 温哥华',
    lineup: lineupFromPrediction({
      formation: '4-4-2 / 4-2-3-1',
      home: 'Baptiste; Boxall, Kelly, Mitchell; Singh, Garbett, Just, van Hattum; Wood, Singh; Just, Wood',
      away: 'El Shenawy; Hany, Hegazi, Abdelmonem, Hamdy; Elneny, Fathy; Trezeguet, Marmoush, Salah; Mostafa Mohamed',
      source: 'Stuff / KingFut 预测 · 非官方',
    }),
    home: team('New Zealand', 'nz', 103, 58, ['D', 'D', 'L', 'W', 'L'], 'Darije Kalezić',
      { name: 'Chris Wood', pos: 'ST', club: 'Nottm Forest', desc: '2-2 伊朗连线 Just', rating: 7.6 }),
    away: team('Egypt', 'eg', 36, 72, ['D', 'D', 'W', 'L', 'W'], 'Rui Vitória',
      { name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', desc: '1-1 比利时后', rating: 8.9 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 0, recent: [], note: '友谊赛平局' },
    referee: pendingReferee('FIFA Match 40 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'G组四队均1分：新西兰 2-2 伊朗 Just 双响 · 埃及 1-1 比利时 · Wood vs Salah · 势均力敌 1-1/1-2。', 65),
    weather: { temp: 19, humidity: 62, condition_cn: '温哥华凉爽', impact_summary: '凉爽利于高强度', home_adapt: 82, away_adapt: 80 },
    mystic: mysticBrief(46, 54, '新西兰木土守中，埃及金水流动；温哥华晚场宜胶着。'),
  };
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

let toArchive = (MATCH_DATA.todayMatches || []).filter(m => ['m33', 'm34', 'm35', 'm36'].includes(m.id));
if (toArchive.length !== 4) {
  toArchive = ['m33', 'm34', 'm35', 'm36']
    .map(id => (RESULTS_DATA.finishedMatches || []).find(m => m.id === id) || (MATCH_DATA.todayMatches || []).find(m => m.id === id))
    .filter(Boolean);
}

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 10 完结 · Day 11 预览';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 昨日：荷5-1瑞 · 德2-1科特 · 厄0-0库 · 突0-4日（第1000场）', time: '6月21日' },
  { tag: 'OFFICIAL', text: 'F组：荷兰 4 · 日本 4 · 瑞典 3 · 突 0 · E组：德国 6 分领跑', time: '积分榜' },
  { tag: 'PREVIEW', text: '📅 6月22日 · 西-沙(00:00) · 比-伊(03:00) · 乌-佛(06:00) · 新-埃(09:00)', time: '今日赛程' },
  { tag: 'PREVIEW', text: 'G/H组第2轮：四队均1分乱局 · 西班牙须破铁桶 · 比利时伊朗榜首对话', time: '焦点' },
  ...(RESULTS_DATA.breakingNews || []).filter(n => !/6月21日.*荷5-1/.test(n.text || '')).slice(0, 6),
].slice(0, 12);

RESULTS_DATA.finishedMatches = upsertFinished(RESULTS_DATA.finishedMatches || [], toArchive);

let snaps = RESULTS_DATA.groupSnapshots || [];
snaps = upsertGroup(snaps, 'E', 'E组 · 第2轮后', [
  { team: 'Germany', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 9, ga: 2 },
  { team: "Côte d'Ivoire", pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2 },
  { team: 'Ecuador', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 0, ga: 1 },
  { team: 'Curaçao', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 7 },
]);
snaps = upsertGroup(snaps, 'F', 'F组 · 第2轮后', [
  { team: 'Netherlands', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 7, ga: 3 },
  { team: 'Japan', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 6, ga: 2 },
  { team: 'Sweden', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 6, ga: 6 },
  { team: 'Tunisia', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 9 },
]);
snaps = upsertGroup(snaps, 'G', 'G组 · 第1轮后', [
  { team: 'Belgium', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Egypt', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Iran', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
  { team: 'New Zealand', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
]);
snaps = upsertGroup(snaps, 'H', 'H组 · 第1轮后', [
  { team: 'Spain', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0 },
  { team: 'Saudi Arabia', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Uruguay', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Cape Verde', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0 },
]);
RESULTS_DATA.groupSnapshots = snaps;

const todayMatches = [buildM38(), buildM39(), buildM37(), buildM40()];
const first = todayMatches[0];
const p0 = first.prediction;

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 11 preview',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：荷5-1瑞 · 德2-1科特 · 厄0-0库 · 突0-4日 · 日本第1000场大胜', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 西-沙(00:00) · 比-伊(03:00) · 乌-佛(06:00) · 新-埃(09:00)', time: '6月22日' },
    { tag: 'PREVIEW', text: 'G/H组第2轮：四队均1分 · 西班牙须破局 · 比利时 vs 伊朗', time: '焦点' },
    { tag: 'OFFICIAL', text: 'E组德国 6 分出线在望 · F组荷日 4 分并列', time: '积分榜' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认', time: '裁判' },
    { tag: 'INJURY', text: 'Day 11 伤病/首发待赛前更新', time: '6月22日' },
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
    teaser: 'H组第2轮：西班牙 vs 沙特 · 亚特兰大',
    home_win: p0.home_win,
    draw: p0.draw,
    away_win: p0.away_win,
    predicted_score: p0.score,
    key_player_home: first.home.star?.name || 'Lamine Yamal',
    key_player_away: first.away.star?.name || 'Salem Al-Dawsari',
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

const day10Results = [
  { id: 'm35', home: 'Netherlands', away: 'Sweden', score: '5-1', group: 'F' },
  { id: 'm33', home: 'Germany', away: "Côte d'Ivoire", score: '2-1', group: 'E' },
  { id: 'm34', home: 'Ecuador', away: 'Curaçao', score: '0-0', group: 'E' },
  { id: 'm36', home: 'Tunisia', away: 'Japan', score: '0-4', group: 'F' },
];

const LIVE_DATA = {
  lastUpdated: TS,
  todayDate: '2026-06-22',
  fixtures: todayMatches.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    status: 'NS',
    home_score: null,
    away_score: null,
    group: m.group,
  })),
  allResults: day10Results,
  standings: snaps.filter(g => ['E', 'F', 'G', 'H'].includes(g.group)),
  injuries: { note: 'Day 11 赛前更新 · G/H组第2轮 · 关注西班牙/比利时首发' },
  yesterdayResults: day10Results.map(r => ({ id: r.id, score: r.score })),
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 11 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/roll-day11.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Archived refs:', toArchive.map(m => m.id).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
