/**
 * Day 12 rollover: archive m37–m40 → results, set today m41–m44（6月24日北京 · K/L 组第2轮）
 * Run: node scripts/sync-day11-results.js && node scripts/roll-day12.js && node scripts/enrich-day12.js && node scripts/apply-prediction-signals.js
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
      day: '壬辰日',
      day_summary: '壬辰日——水土相涵，热门宜稳守扩分；忌领先后松懈。',
      hour_home: '见各场开球时辰',
      hour_home_element: '水',
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

/** 北京时间 6月24日 01:00 · Match 47 · FIFA 400021503 */
function buildM41() {
  const xgH = 2.05, xgA = 0.78;
  return {
    id: 'm41',
    fifa_match_id: '400021503',
    group: 'K',
    matchday: 2,
    date: '2026-06-23',
    time: '12:00',
    time_local: '12:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '01:00',
    date_beijing: '6月24日',
    time_beijing_full: '北京时间 6月24日 01:00',
    venue: 'NRG Stadium',
    city: 'Houston, USA',
    note: 'K组第2轮 · 葡萄牙 vs 乌兹别克 · 休斯顿',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Costa; Dalot, Pepe, Dias, Mendes; Palhinha, Vitinha, B. Fernandes; Leão, Ronaldo, Félix',
      away: 'Nafalov; Khusanov, Ismailov, Alikulov; Shomurodov, Masharipov; Abdullaev, Hamrobekov; Turgunboev, Odilov',
      source: 'ESPN / Record 预测 · 非官方',
    }),
    home: team('Portugal', 'pt', 6, 89, ['D', 'W', 'W', 'W', 'W'], 'Roberto Martínez',
      { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al-Nassr', desc: '1-1 刚果后须取胜 · K组核心', rating: 8.8 }),
    away: team('Uzbekistan', 'uz', 65, 62, ['L', 'W', 'D', 'L', 'W'], 'Srečko Katanec',
      { name: 'Eldor Shomurodov', pos: 'ST', club: 'Roma', desc: '0 分垫底 · 须抢分', rating: 7.8 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 47 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'K组：葡萄牙 1-1 刚果后须全取3分 · 乌兹别克 1-3 哥伦比亚后 0 分 · C罗+深度 vs Katanec 低位 · 泊松 2-0/3-0。', 78),
    weather: { temp: 33, humidity: 72, condition_cn: '休斯顿夏夜湿热', impact_summary: '湿热高，须早破局', home_adapt: 85, away_adapt: 78 },
    mystic: mysticBrief(74, 26, '葡萄牙火土旺，乌兹别克木气守中——休斯顿夜水，宜上半场穿盘。'),
  };
}

/** 北京时间 6月24日 04:00 · Match 45 · FIFA 400021506 */
function buildM42() {
  const xgH = 1.85, xgA = 1.12;
  return {
    id: 'm42',
    fifa_match_id: '400021506',
    group: 'L',
    matchday: 2,
    date: '2026-06-23',
    time: '16:00',
    time_local: '16:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '04:00',
    date_beijing: '6月24日',
    time_beijing_full: '北京时间 6月24日 04:00',
    venue: 'Gillette Stadium',
    city: 'Foxborough, USA',
    note: 'L组第2轮 · 英格兰 vs 加纳 · 波士顿',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Pickford; Walker, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, B. White; Kane',
      away: 'Ati-Zigi; Lamptey, Amartey, Djiku, Baba; Partey, S. Ayew; Kudus, Paintsil, J. Ayew; Semenyo',
      source: 'BBC / SportsMole 预测 · 非官方',
    }),
    home: team('England', 'gb-eng', 9, 87, ['W', 'W', 'W', 'D', 'W'], 'Thomas Tuchel',
      { name: 'Jude Bellingham', pos: 'CM', club: 'Real Madrid', desc: '4-2 克罗地亚后 L组领跑', rating: 9.0 }),
    away: team('Ghana', 'gh', 60, 65, ['W', 'D', 'W', 'D', 'L'], 'Otto Addo',
      { name: 'Mohammed Kudus', pos: 'RW', club: 'West Ham', desc: '1-0 巴拿马后并列榜首', rating: 8.2 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [{ year: 2010, comp: '世界杯', score: '1-1', winner: 'draw' }], note: '2010 世界杯 1-1 · 大赛老对手' },
    referee: pendingReferee('FIFA Match 45 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'L组榜首对话：英格兰 4-2 克罗地亚 xG 占优 · 加纳 1-0 巴拿马低位 · Bellingham/Kane vs Kudus/Partey · 泊松 2-1/1-1。', 72),
    weather: { temp: 24, humidity: 58, condition_cn: '波士顿夏夜凉爽', impact_summary: '气候均衡', home_adapt: 84, away_adapt: 82 },
    mystic: mysticBrief(58, 42, '英格兰金土相涵，加纳火土相杂——Gillette 夜场宜胶着。'),
  };
}

/** 北京时间 6月24日 07:00 · Match 46 · FIFA 400021511 */
function buildM43() {
  const xgH = 0.95, xgA = 1.42;
  return {
    id: 'm43',
    fifa_match_id: '400021511',
    group: 'L',
    matchday: 2,
    date: '2026-06-23',
    time: '19:00',
    time_local: '19:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '07:00',
    date_beijing: '6月24日',
    time_beijing_full: '北京时间 6月24日 07:00',
    venue: 'BMO Field',
    city: 'Toronto, Canada',
    note: 'L组第2轮 · 巴拿马 vs 克罗地亚 · 多伦多',
    lineup: lineupFromPrediction({
      formation: '4-4-2 / 4-3-3',
      home: 'Mosquera; Murillo, Escobar, Cummings; Anderson, Godoy; Fajardo, Bárcenas, Rodríguez; Ismael Díaz',
      away: 'Livaković; Juranović, Gvardiol, Šutalo, Sosa; Modrić, Brozović; Kovačić, Perišić, Rebić; Kramarić',
      source: 'FotMob / ESPN 预测 · 非官方',
    }),
    home: team('Panama', 'pa', 75, 58, ['L', 'W', 'D', 'L', 'W'], 'Thomas Christiansen',
      { name: 'José Fajardo', pos: 'ST', club: 'Plaza Amador', desc: '0 分须抢分 · 定位球威胁', rating: 7.0 }),
    away: team('Croatia', 'hr', 10, 81, ['L', 'W', 'D', 'W', 'W'], 'Zlatko Dalić',
      { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', desc: '0 分 · 大赛经验须破局', rating: 8.4 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 46 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'L组：巴拿马/克罗地亚均 0 分须取胜 · Modrić/Gvardiol vs MLS 班底 · 泊松 0-1/1-2。', 68),
    weather: { temp: 22, humidity: 62, condition_cn: '多伦多傍晚凉爽', impact_summary: '气候影响低', home_adapt: 80, away_adapt: 83 },
    mystic: mysticBrief(38, 62, '克罗地亚水木相济，巴拿马金水相生——Modrić 如老泉，客胜空间略优。'),
  };
}

/** 北京时间 6月24日 10:00 · Match 48 · FIFA 400021501 */
function buildM44() {
  const xgH = 1.72, xgA = 0.92;
  return {
    id: 'm44',
    fifa_match_id: '400021501',
    group: 'K',
    matchday: 2,
    date: '2026-06-23',
    time: '21:00',
    time_local: '20:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '10:00',
    date_beijing: '6月24日',
    time_beijing_full: '北京时间 6月24日 10:00',
    venue: 'Estadio Akron',
    city: 'Guadalajara, Mexico',
    note: 'K组第2轮 · 哥伦比亚 vs 刚果（金） · 瓜达拉哈拉',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Mármol; Muñoz, Sánchez, Lucumí; Lerma, Ríos; Cuadrado, James, Arias; Borré, Díaz',
      away: 'Mandjeck; Mpeko, Mukau, Luyindama; Mbemba, Mputu; Bakambu, Bompunga, Mabi; Wissa',
      source: 'Opta / ESPN 预测 · 非官方',
    }),
    home: team('Colombia', 'co', 27, 75, ['W', 'W', 'D', 'W', 'W'], 'Néstor Lorenzo',
      { name: 'Luis Díaz', pos: 'LW', club: 'Liverpool', desc: '3 分领跑 · 边路最大威胁', rating: 8.6 }),
    away: team('Congo DR', 'cd', 61, 63, ['D', 'W', 'L', 'D', 'W'], 'Sébastien Desabre',
      { name: 'Yoane Wissa', pos: 'ST', club: 'Brentford', desc: '1-1 葡萄牙后须抢分', rating: 7.6 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 48 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'K组：哥伦比亚 3 分领跑 · 刚果 1-1 葡萄牙后须抢分 · Díaz/James vs Wissa 反击 · 泊松 2-0/2-1。', 74),
    weather: { temp: 28, humidity: 48, condition_cn: '瓜达拉哈拉午后', impact_summary: '高原1560m · 体能分配关键', home_adapt: 86, away_adapt: 76 },
    mystic: mysticBrief(68, 32, '哥伦比亚金水相生，刚果金木气孤悬——高原午火，宜早破局穿盘。'),
  };
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

let toArchive = (MATCH_DATA.todayMatches || []).filter(m => ['m37', 'm38', 'm39', 'm40'].includes(m.id));
if (toArchive.length !== 4) {
  toArchive = ['m37', 'm38', 'm39', 'm40']
    .map(id => (RESULTS_DATA.finishedMatches || []).find(m => m.id === id) || (MATCH_DATA.todayMatches || []).find(m => m.id === id))
    .filter(Boolean);
}

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 11 完结 · Day 12 预览';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 Day 11：西4-0沙 · 比0-0伊 · 乌2-2佛 · 新1-3埃', time: '6月22日' },
  { tag: 'OFFICIAL', text: 'G组：埃及 4 · 比/伊 2 · 新 1 · H组：西 4 · 乌/佛 2 · 沙 1', time: '积分榜' },
  { tag: 'PREVIEW', text: '📅 6月24日 · 葡-乌(01:00) · 英-加(04:00) · 巴-克(07:00) · 哥-刚(10:00)', time: '今日赛程' },
  { tag: 'PREVIEW', text: 'K/L组第2轮：葡萄牙须取胜 · 英加榜首对话 · 哥伦比亚领跑', time: '焦点' },
  ...(RESULTS_DATA.breakingNews || []).filter(n => !/Day 11：|6月22日.*西4/.test(n.text || '')).slice(0, 6),
].slice(0, 12);

RESULTS_DATA.finishedMatches = upsertFinished(RESULTS_DATA.finishedMatches || [], toArchive);

let snaps = RESULTS_DATA.groupSnapshots || [];
snaps = upsertGroup(snaps, 'G', 'G组 · 第2轮后', [
  { team: 'Egypt', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 3 },
  { team: 'Belgium', pts: 2, p: 2, w: 0, d: 2, l: 0, gf: 1, ga: 1 },
  { team: 'Iran', pts: 2, p: 2, w: 0, d: 2, l: 0, gf: 2, ga: 2 },
  { team: 'New Zealand', pts: 1, p: 2, w: 0, d: 0, l: 2, gf: 3, ga: 5 },
]);
snaps = upsertGroup(snaps, 'H', 'H组 · 第2轮后', [
  { team: 'Spain', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 0 },
  { team: 'Uruguay', pts: 2, p: 2, w: 0, d: 2, l: 0, gf: 3, ga: 2 },
  { team: 'Cape Verde', pts: 2, p: 2, w: 0, d: 2, l: 0, gf: 2, ga: 2 },
  { team: 'Saudi Arabia', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 5 },
]);
snaps = upsertGroup(snaps, 'K', 'K组 · 第1轮后', [
  { team: 'Colombia', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1 },
  { team: 'Portugal', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Congo DR', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Uzbekistan', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3 },
]);
snaps = upsertGroup(snaps, 'L', 'L组 · 第1轮后', [
  { team: 'England', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 2 },
  { team: 'Ghana', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 1, ga: 0 },
  { team: 'Croatia', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 2, ga: 4 },
  { team: 'Panama', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 1 },
]);
RESULTS_DATA.groupSnapshots = snaps;

const todayMatches = [buildM41(), buildM42(), buildM43(), buildM44()];
const first = todayMatches[0];
const p0 = first.prediction;

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 12 preview',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：西4-0沙 · 比0-0伊 · 乌2-2佛 · 新1-3埃 · Salah 逆转', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 葡-乌(01:00) · 英-加(04:00) · 巴-克(07:00) · 哥-刚(10:00)', time: '6月24日' },
    { tag: 'PREVIEW', text: 'K/L组第2轮：葡萄牙须取胜 · 英加榜首对话 · 哥伦比亚领跑', time: '焦点' },
    { tag: 'OFFICIAL', text: 'G组埃及 4 分 · H组西班牙 4 分 · K组哥伦比亚 3 分 · L组英加各 3 分', time: '积分榜' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认', time: '裁判' },
    { tag: 'INJURY', text: 'Day 12 伤病/首发待赛前更新', time: '6月24日' },
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
    teaser: 'K组第2轮：葡萄牙 vs 乌兹别克 · 休斯顿',
    home_win: p0.home_win,
    draw: p0.draw,
    away_win: p0.away_win,
    predicted_score: p0.score,
    key_player_home: first.home.star?.name || 'Cristiano Ronaldo',
    key_player_away: first.away.star?.name || 'Eldor Shomurodov',
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

const day11Results = [
  { id: 'm38', home: 'Spain', away: 'Saudi Arabia', score: '4-0', group: 'H' },
  { id: 'm39', home: 'Belgium', away: 'Iran', score: '0-0', group: 'G' },
  { id: 'm37', home: 'Uruguay', away: 'Cape Verde', score: '2-2', group: 'H' },
  { id: 'm40', home: 'New Zealand', away: 'Egypt', score: '1-3', group: 'G' },
];

const LIVE_DATA = {
  lastUpdated: TS,
  todayDate: '2026-06-23',
  fixtures: todayMatches.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    status: 'NS',
    home_score: null,
    away_score: null,
    group: m.group,
  })),
  allResults: day11Results,
  standings: snaps.filter(g => ['G', 'H', 'K', 'L'].includes(g.group)),
  injuries: { note: 'Day 12 赛前更新 · K/L组第2轮 · 葡萄牙/英格兰/哥伦比亚须抢分' },
  yesterdayResults: day11Results.map(r => ({ id: r.id, score: r.score })),
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 12 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/roll-day12.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Archived refs:', toArchive.map(m => m.id).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
