/**
 * Day 12 rollover: set today m43/m42/m41/m44（6月23日北京 · I/J 组第2轮）
 * 站内 m 编号 = FIFA MatchNumber（#41 挪威-塞内加尔，非 K/L）
 * Run: node scripts/roll-day12.js && node scripts/enrich-day12.js && node scripts/apply-prediction-signals.js
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
      year: '丙午年', month: '甲午月', day: '癸巳日',
      day_summary: '癸巳日——水火既济，热门宜稳守扩分；忌领先后松懈。',
      hour_home: '见各场开球时辰', hour_home_element: '火',
    },
    wuxing: {
      home: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', advantage: '' },
      away: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', disadvantage: '' },
      summary: '文化解读 · 正式推演见各场详情',
    },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '开赛前结合时辰与阵容再行解读。', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict,
    disclaimer: '文化解读 · 非竞技推演',
  };
}

/** 北京时间 6月23日 01:00 · FIFA #43 */
function buildM43() {
  const xgH = 1.95, xgA = 1.35;
  return {
    id: 'm43',
    fifa_match_number: 43,
    fifa_match_id: '400021494',
    group: 'J',
    matchday: 2,
    date: '2026-06-22',
    time: '12:00',
    time_local: '12:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '01:00',
    date_beijing: '6月23日',
    time_beijing_full: '北京时间 6月23日 01:00',
    venue: 'AT&T Stadium',
    city: 'Arlington, USA',
    note: 'J组第2轮 · 阿根廷 vs 奥地利 · 达拉斯 · 榜首对话',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Lautaro, Garnacho',
      away: 'Pentz; Posch, Alaba, Lienhart, Mwene; Seiwald, Schlager; Baumgartner, Sabitzer, Grüll; Arnautović',
      source: 'ESPN / TyC 预测 · 非官方',
    }),
    home: team('Argentina', 'ar', 1, 94, ['W', 'W', 'W', 'W', 'D'], 'Lionel Scaloni',
      { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', desc: '3-0 阿尔及利亚后 J 组领跑', rating: 9.3 }),
    away: team('Austria', 'at', 28, 74, ['W', 'W', 'D', 'W', 'D'], 'Ralf Rangnick',
      { name: 'David Alaba', pos: 'CB', club: 'Real Madrid', desc: '3-1 约旦后并列榜首', rating: 8.5 }),
    h2h: { home_wins: 2, draws: 1, away_wins: 0, recent: [], note: '阿根廷大赛历史占优' },
    referee: pendingReferee('FIFA Match 43 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'J组榜首对话：阿根廷 3-0 阿尔及利亚 vs 奥地利 3-1 约旦 · Messi/Lautaro vs Alaba/Arnautović · 泊松 2-1/1-1。', 72),
    weather: { temp: 32, humidity: 58, condition_cn: '达拉斯夏夜', impact_summary: '封闭球场 · 高温对体能考验', home_adapt: 86, away_adapt: 82 },
    mystic: mysticBrief(55, 45, '阿根廷天火下照，奥地利金土相涵——榜首对话宜胶着。'),
  };
}

/** 北京时间 6月23日 05:00 · FIFA #42 */
function buildM42() {
  const xgH = 2.15, xgA = 0.72;
  return {
    id: 'm42',
    fifa_match_number: 42,
    fifa_match_id: '400021492',
    group: 'I',
    matchday: 2,
    date: '2026-06-22',
    time: '17:00',
    time_local: '17:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '05:00',
    date_beijing: '6月23日',
    time_beijing_full: '北京时间 6月23日 05:00',
    venue: 'Lincoln Financial Field',
    city: 'Philadelphia, USA',
    note: 'I组第2轮 · 法国 vs 伊拉克 · 费城',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Maignan; Koundé, Saliba, Upamecano, Hernandez; Tchouaméni, Kanté, Camavinga; Dembélé, Mbappé, Thuram',
      away: 'Hassan; Adnan, Tareq, Natiq, Ali; Alaa, Bashar; Aymen, Zidane, Mohanad; Hussein',
      source: 'L\'Équipe / ESPN 预测 · 非官方',
    }),
    home: team('France', 'fr', 3, 91, ['W', 'W', 'W', 'D', 'W'], 'Didier Deschamps',
      { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', desc: '3-1 塞内加尔 · 队史射手王', rating: 9.2 }),
    away: team('Iraq', 'iq', 78, 56, ['L', 'D', 'W', 'L', 'L'], 'Jesús Casas',
      { name: 'Aymen Hussein', pos: 'ST', club: 'Al-Quwa Al-Jawiya', desc: '1-4 挪威后须抢分', rating: 7.0 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [], note: '法国历史占优' },
    referee: pendingReferee('FIFA Match 42 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'I组：法国 3 分 vs 伊拉克 0 分 · Mbappé vs Casas 低位铁桶 · xG 2.15-0.72 泊松 2-0/3-0。', 78),
    weather: { temp: 28, humidity: 62, condition_cn: '费城夏夜', impact_summary: '开放式球场 · 法国深度占优', home_adapt: 88, away_adapt: 72 },
    mystic: mysticBrief(72, 28, '法国火德盛，伊拉克水土守——Mbappé 宜早破局穿盘。'),
  };
}

/** 北京时间 6月23日 08:00 · FIFA #41 */
function buildM41() {
  const xgH = 1.88, xgA = 1.05;
  return {
    id: 'm41',
    fifa_match_number: 41,
    fifa_match_id: '400021491',
    group: 'I',
    matchday: 2,
    date: '2026-06-22',
    time: '20:00',
    time_local: '20:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '08:00',
    date_beijing: '6月23日',
    time_beijing_full: '北京时间 6月23日 08:00',
    venue: 'MetLife Stadium',
    city: 'East Rutherford, USA',
    note: 'I组第2轮 · 挪威 vs 塞内加尔 · 纽约/新泽西',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-3-3',
      home: 'Nyland; Ryerson, Høibråten, Nørgaard, Wolfe; Berg, Ødegaard; Dønnum, Haaland, Sørloth',
      away: 'Diouf; Sabaly, Koulibaly, Diallo, Mendy; Gueye, Ndiaye; Mané, Jackson, Sarr',
      source: 'ESPN / FotMob 预测 · 非官方',
    }),
    home: team('Norway', 'no', 26, 76, ['W', 'W', 'D', 'W', 'D'], 'Ståle Solbakken',
      { name: 'Erling Haaland', pos: 'ST', club: 'Man City', desc: '1-4 伊拉克 · I 组领跑', rating: 9.0 }),
    away: team('Senegal', 'sn', 20, 77, ['L', 'D', 'W', 'W', 'D'], 'Aliou Cissé',
      { name: 'Sadio Mané', pos: 'LW', club: 'Al-Nassr', desc: '1-3 法国后须抢分', rating: 8.5 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 0, recent: [], note: '交锋样本少' },
    referee: pendingReferee('FIFA Match 41 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'I组：挪威 3 分 vs 塞内加尔 0 分 · Haaland vs Mané · 泊松 2-1/1-1。', 70),
    weather: { temp: 26, humidity: 58, condition_cn: '纽约夏夜', impact_summary: 'MetLife 开放式 · 挪威略优', home_adapt: 84, away_adapt: 80 },
    mystic: mysticBrief(58, 42, '挪威金水相生，塞内加尔木气受克——Haaland 如巨斧。'),
  };
}

/** 北京时间 6月23日 11:00 · FIFA #44 */
function buildM44() {
  const xgH = 1.42, xgA = 1.28;
  return {
    id: 'm44',
    fifa_match_number: 44,
    fifa_match_id: '400021499',
    group: 'J',
    matchday: 2,
    date: '2026-06-22',
    time: '20:00',
    time_local: '20:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '11:00',
    date_beijing: '6月23日',
    time_beijing_full: '北京时间 6月23日 11:00',
    venue: "Levi's Stadium",
    city: 'Santa Clara, USA',
    note: 'J组第2轮 · 约旦 vs 阿尔及利亚 · 旧金山湾区',
    lineup: lineupFromPrediction({
      formation: '4-4-2 / 4-2-3-1',
      home: 'Abu Laila; Al-Rosan, Al-Ajalin, Al-Damour; Al-Naimat, Al-Rawashdeh, Al-Tamari; Al-Malki, Al-Rashdan; Al-Dardour',
      away: 'Mandrea; Atal, Mandi, Belkacemi; Benrahma, Aouar, Bentaleb; Mahrez, Bounedjah, Boussoufa',
      source: 'FotMob / ESPN 预测 · 非官方',
    }),
    home: team('Jordan', 'jo', 72, 57, ['L', 'W', 'D', 'L', 'D'], 'Hussein Ammouta',
      { name: 'Musa Al-Tamari', pos: 'RW', club: 'Montpellier', desc: '0 分须抢分 · 反击速度', rating: 7.8 }),
    away: team('Algeria', 'dz', 46, 67, ['L', 'W', 'D', 'L', 'W'], 'Djamel Belmadi',
      { name: 'Riyad Mahrez', pos: 'RW', club: 'Al-Ahli', desc: '0-3 阿根廷后须破局', rating: 8.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 44 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'J组垫底对话：约旦/阿尔及利亚均 0 分 · Al-Tamari vs Mahrez · 泊松 1-1/1-0。', 65),
    weather: { temp: 22, humidity: 52, condition_cn: '湾区夜场凉爽', impact_summary: '气候均衡 · 平局权重高', home_adapt: 78, away_adapt: 80 },
    mystic: mysticBrief(48, 52, '约旦木气守中，阿尔及利亚金水流动——Mahrez 略优。'),
  };
}

const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 11 完结 · Day 12 预览（I/J 组）';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 昨日：西4-0沙 · 比0-0伊 · 乌2-2佛 · 新1-3埃', time: '6月22日' },
  { tag: 'PREVIEW', text: '📅 6月23日 · 阿-奥(01:00) · 法-伊(05:00) · 挪-塞(08:00) · 约-阿(11:00)', time: '今日赛程' },
  { tag: 'PREVIEW', text: 'I/J组第2轮：阿根廷/奥地利榜首对话 · 法国/挪威各3分', time: '焦点' },
  { tag: 'OFFICIAL', text: 'G组埃及 4 · H组西班牙 4 · I/J 各队首轮已赛', time: '积分榜' },
].slice(0, 12);

const todayMatches = [buildM43(), buildM42(), buildM41(), buildM44()];
const first = todayMatches[0];
const p0 = first.prediction;

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 12 preview · I/J 组第2轮',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：西4-0沙 · 比0-0伊 · 乌2-2佛 · 新1-3埃 · Salah 逆转', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 阿-奥(01:00) · 法-伊(05:00) · 挪-塞(08:00) · 约-阿(11:00)', time: '6月23日' },
    { tag: 'PREVIEW', text: 'I/J组第2轮：阿根廷/奥地利榜首对话 · Haaland vs Mané', time: '焦点' },
    { tag: 'OFFICIAL', text: 'G组埃及 4 · H组西班牙 4 · I/J 首轮完结', time: '积分榜' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认', time: '裁判' },
    { tag: 'INJURY', text: 'Day 12 伤病/首发待赛前更新', time: '6月23日' },
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
    teaser: 'J组榜首对话：阿根廷 vs 奥地利 · 达拉斯',
    home_win: p0.home_win,
    draw: p0.draw,
    away_win: p0.away_win,
    predicted_score: p0.score,
    key_player_home: first.home.star?.name || 'Lionel Messi',
    key_player_away: first.away.star?.name || 'David Alaba',
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

const snaps = (RESULTS_DATA.groupSnapshots || []).filter(g => ['G', 'H', 'I', 'J'].includes(g.group));

const LIVE_DATA = {
  lastUpdated: TS,
  todayDate: '2026-06-23',
  fixtures: todayMatches.map(m => ({
    id: m.id,
    fifa_match_number: m.fifa_match_number,
    home: m.home.name,
    away: m.away.name,
    status: 'NS',
    home_score: null,
    away_score: null,
    group: m.group,
  })),
  allResults: day11Results,
  standings: snaps,
  injuries: { note: 'Day 12 · I/J组第2轮 · 阿根廷/奥地利榜首对话' },
  yesterdayResults: day11Results.map(r => ({ id: r.id, score: r.score })),
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 12 preview (I/J)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/roll-day12.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Day 12 (I/J) matches:', todayMatches.map(m => `#${m.fifa_match_number} ${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
