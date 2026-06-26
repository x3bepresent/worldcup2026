/**
 * Day 16 rollover — m61–m66（6月27日北京 · G/H/I 组末轮 · 6场）
 * Run: node scripts/sync-day15-results.js && node scripts/roll-day16.js && node scripts/enrich-day16.js && node scripts/apply-prediction-signals.js
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

function team(name, iso, rank, rating, form, coach, star) {
  return { name, iso, flag: '', fifa_rank: rank, rating, form, coach, stars: [star], star, injuries: [], rumors: [] };
}

function mysticBrief(homeScore, awayScore, verdict) {
  return {
    date_bazi: { year: '丙午年', month: '甲午月', day: '丙申日', day_summary: '丙申日——火金相制', hour_home: '见各场', hour_home_element: '金' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function buildM61() {
  const xgH = 1.48, xgA = 1.52;
  return {
    id: 'm61', fifa_match_number: 61, fifa_match_id: '400021489', group: 'I', matchday: 3,
    date: '2026-06-26', time: '15:00', time_local: '15:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '03:00', date_beijing: '6月27日', time_beijing_full: '北京时间 6月27日 03:00',
    venue: 'Gillette Stadium', city: 'Foxborough, USA',
    note: 'I组末轮 · 挪威 vs 法国 · 波士顿',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-3-3',
      home: 'Nyland; Ryerson, Hanche-Olsen, Bjørkan; Ødegaard, Berge, Berg; Haaland, Sorloth, Bobb',
      away: 'Maignan; Koundé, Saliba, Upamecano, Hernandez; Kanté, Tchouaméni; Dembélé, Griezmann, Mbappé; Thuram',
      source: 'BBC 预测',
    }),
    home: team('Norway', 'no', 45, 76, ['W', 'W', 'W', 'L', 'W'], 'Ståle Solbakken',
      { name: 'Erling Haaland', pos: 'ST', club: 'Man City', desc: '6 分同分争头名', rating: 9.2 }),
    away: team('France', 'fr', 2, 91, ['W', 'W', 'W', 'D', 'W'], 'Didier Deschamps',
      { name: 'Kylian Mbappé', pos: 'LW', club: 'Real Madrid', desc: '6 分同分争头名', rating: 9.4 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2023, comp: '友谊赛', score: '1-2', winner: 'France' }], note: '法国友谊赛胜' },
    referee: pendingReferee('FIFA Match 61 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'I组榜首战各 6 分 · Haaland vs Mbappé · 泊松 1-1/2-1。', 70),
    weather: { temp: 22, humidity: 60, condition_cn: '波士顿夏夜', impact_summary: '气候影响低', home_adapt: 82, away_adapt: 86 },
    mystic: mysticBrief(48, 52, '均分榜首战，火金相制宜稳守。'),
  };
}

function buildM62() {
  const xgH = 1.72, xgA = 0.88;
  return {
    id: 'm62', fifa_match_number: 62, fifa_match_id: '400021493', group: 'I', matchday: 3,
    date: '2026-06-26', time: '15:00', time_local: '15:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '03:00', date_beijing: '6月27日', time_beijing_full: '北京时间 6月27日 03:00',
    venue: 'BMO Field', city: 'Toronto, Canada',
    note: 'I组末轮 · 塞内加尔 vs 伊拉克 · 多伦多',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Mendy; Sabaly, Koulibaly, Diallo; Gueye, Ndiaye, Sarr; Jackson, Mané, Jackson',
      away: 'Hassan; Adnan, Tareeq, Al-Saadi; Alaa, Rashid; Hussein, Faeq, Mohanad; Aso',
      source: 'ESPN 预测',
    }),
    home: team('Senegal', 'sn', 18, 77, ['L', 'L', 'W', 'D', 'W'], 'Aliou Cissé',
      { name: 'Sadio Mané', pos: 'LW', club: 'Al-Nassr', desc: '0 分须胜', rating: 8.5 }),
    away: team('Iraq', 'iq', 58, 65, ['L', 'L', 'D', 'W', 'L'], 'Jesús Casas',
      { name: 'Aymen Hussein', pos: 'ST', club: 'Al-Shorta', desc: '0 分已出局', rating: 7.8 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 62 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'I组末轮 · 塞内加尔 0 分须胜 vs 伊拉克 0 分 · Mané vs 铁桶 · 泊松 2-0/1-0。', 74),
    weather: { temp: 21, humidity: 62, condition_cn: '多伦多夏夜', impact_summary: '气候影响低', home_adapt: 80, away_adapt: 78 },
    mystic: mysticBrief(62, 38, '塞内加尔火土旺须破局。'),
  };
}

function buildM63() {
  const xgH = 1.38, xgA = 1.22;
  return {
    id: 'm63', fifa_match_number: 63, fifa_match_id: '400021479', group: 'G', matchday: 3,
    date: '2026-06-26', time: '23:00', time_local: '23:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '11:00', date_beijing: '6月27日', time_beijing_full: '北京时间 6月27日 11:00',
    venue: 'Lumen Field', city: 'Seattle, USA',
    note: 'G组末轮 · 埃及 vs 伊朗 · 西雅图',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'El Shenawy; Hany, Hegazi, Abdelmonem; Elneny, Hamdi; Salah, Trezeguet, Marmoush; Mostafa',
      away: 'Beiranvand; Moharrami, Hosseini, Kanani; Nourollahi, Ezatolahi; Jahanbakhsh, Taremi, Ghoddos; Azmoun',
      source: 'FotMob 预测',
    }),
    home: team('Egypt', 'eg', 36, 72, ['W', 'D', 'W', 'L', 'D'], 'Hossam Hassan',
      { name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', desc: '4 分领跑', rating: 9.0 }),
    away: team('IR Iran', 'ir', 20, 75, ['D', 'D', 'W', 'W', 'L'], 'Amir Ghalenoei',
      { name: 'Mehdi Taremi', pos: 'ST', club: 'Inter Milan', desc: '2 分须胜', rating: 8.3 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [{ year: 2019, comp: '友谊赛', score: '2-0', winner: 'Egypt' }], note: '埃及略占优' },
    referee: pendingReferee('FIFA Match 63 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'G组末轮 · 埃及 4 分 vs 伊朗 2 分须胜 · Salah vs Taremi · 泊松 1-1/2-1。', 68),
    weather: { temp: 18, humidity: 65, condition_cn: '西雅图凌晨凉湿', impact_summary: '气候影响低', home_adapt: 84, away_adapt: 82 },
    mystic: mysticBrief(52, 48, '埃及水土相济略优，伊朗须胜。'),
  };
}

function buildM64() {
  const xgH = 0.82, xgA = 1.75;
  return {
    id: 'm64', fifa_match_number: 64, fifa_match_id: '400021481', group: 'G', matchday: 3,
    date: '2026-06-26', time: '23:00', time_local: '23:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '11:00', date_beijing: '6月27日', time_beijing_full: '北京时间 6月27日 11:00',
    venue: 'BC Place', city: 'Vancouver, Canada',
    note: 'G组末轮 · 新西兰 vs 比利时 · 温哥华',
    lineup: lineupFromPrediction({
      formation: '5-4-1 / 4-2-3-1',
      home: 'Elliott; Boxall, Tuiloma, Kelly; Singh, Garvey, van Hattum; Just, Wood, Singh; Waine',
      away: 'Casteels; Meunier, Alderweireld, Vertonghen, Theate; Onana, Tielemans; Doku, De Ketelaere, Trossard; Openda',
      source: 'BBC 预测',
    }),
    home: team('New Zealand', 'nz', 104, 58, ['L', 'L', 'D', 'W', 'L'], 'Darije Kalezić',
      { name: 'Chris Wood', pos: 'ST', club: 'Nottm Forest', desc: '1 分须奇迹', rating: 7.5 }),
    away: team('Belgium', 'be', 8, 86, ['D', 'D', 'W', 'W', 'D'], 'Domenico Tedesco',
      { name: 'Jérémy Doku', pos: 'LW', club: 'Man City', desc: '2 分须胜争出线', rating: 8.6 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 1, recent: [{ year: 2014, comp: '友谊赛', score: '0-2', winner: 'Belgium' }], note: '比利时占优' },
    referee: pendingReferee('FIFA Match 64 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'G组末轮 · 比利时 2 分须胜 vs 新西兰 1 分 · Doku 肋部穿盘 · 泊松 0-2/1-2。', 76),
    weather: { temp: 17, humidity: 68, condition_cn: '温哥华凌晨凉爽', impact_summary: '气候影响低', home_adapt: 78, away_adapt: 88 },
    mystic: mysticBrief(28, 72, '比利时金水相生深盘。'),
  };
}

function buildM65() {
  const xgH = 1.15, xgA = 1.45;
  return {
    id: 'm65', fifa_match_number: 65, fifa_match_id: '400021485', group: 'H', matchday: 3,
    date: '2026-06-26', time: '20:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '08:00', date_beijing: '6月27日', time_beijing_full: '北京时间 6月27日 08:00',
    venue: 'NRG Stadium', city: 'Houston, USA',
    note: 'H组末轮 · 佛得角 vs 沙特 · 休斯顿',
    lineup: lineupFromPrediction({
      formation: '4-4-2 / 4-2-3-1',
      home: 'Vozinha; Stopira, Monteiro, Cabo; Mendes, Pina, Semedo; Bebé, Cabral, Ryan; Platini',
      away: 'Al-Owais; Al-Breik, Al-Amri, Al-Shahrani; Al-Faraj, Kanno; Al-Dawsari, Al-Malki, Al-Hassan; Al-Buraikan',
      source: 'ESPN 预测',
    }),
    home: team('Cabo Verde', 'cv', 65, 66, ['D', 'D', 'W', 'L', 'D'], 'Bubista',
      { name: 'Ryan Mendes', pos: 'LW', club: 'Lille', desc: '2 分争出线', rating: 7.8 }),
    away: team('Saudi Arabia', 'sa', 53, 68, ['L', 'D', 'W', 'D', 'L'], 'Roberto Mancini',
      { name: 'Salem Al-Dawsari', pos: 'LW', club: 'Al-Hilal', desc: '1 分须胜', rating: 8.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 65 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'H组末轮 · 各争出线 · Al-Dawsari vs Bebé · 泊松 1-1/1-2。', 68),
    weather: { temp: 32, humidity: 70, condition_cn: '休斯顿午后湿热', impact_summary: '湿热中等', home_adapt: 80, away_adapt: 84 },
    mystic: mysticBrief(42, 58, '沙特火土略优须胜。'),
  };
}

function buildM66() {
  const xgH = 1.05, xgA = 1.68;
  return {
    id: 'm66', fifa_match_number: 66, fifa_match_id: '400021484', group: 'H', matchday: 3,
    date: '2026-06-26', time: '20:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '08:00', date_beijing: '6月27日', time_beijing_full: '北京时间 6月27日 08:00',
    venue: 'Estadio Akron', city: 'Zapopan, Mexico',
    note: 'H组末轮 · 乌拉圭 vs 西班牙 · 瓜达拉哈拉',
    lineup: lineupFromPrediction({
      formation: '4-4-2 / 4-3-3',
      home: 'Rochet; Nández, Giménez, Cáceres, Viña; Valverde, Ugarte, Bentancur; Pellistri, Núñez, Darwin',
      away: 'Simón; Carvajal, Laporte, Le Normand, Cucurella; Rodri, Pedri; Yamal, Olmo, Williams; Morata',
      source: 'BBC 预测',
    }),
    home: team('Uruguay', 'uy', 14, 82, ['D', 'D', 'W', 'W', 'L'], 'Marcelo Bielsa',
      { name: 'Federico Valverde', pos: 'CM', club: 'Real Madrid', desc: '2 分须胜', rating: 8.8 }),
    away: team('Spain', 'es', 3, 90, ['W', 'D', 'W', 'W', 'D'], 'Luis de la Fuente',
      { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', desc: '4 分领跑', rating: 9.0 }),
    h2h: { home_wins: 1, draws: 2, away_wins: 1, recent: [{ year: 2022, comp: '友谊赛', score: '0-1', winner: 'Spain' }], note: '互有胜负' },
    referee: pendingReferee('FIFA Match 66 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'H组末轮 · 西班牙 4 分 vs 乌拉圭 2 分须胜 · Yamal vs Valverde · 泊松 1-2/0-2。', 74),
    weather: { temp: 26, humidity: 55, condition_cn: '瓜达拉哈拉高原午后', impact_summary: '高原中等', home_adapt: 86, away_adapt: 88 },
    mystic: mysticBrief(35, 65, '西班牙火土旺深盘，乌拉圭须胜。'),
  };
}

function allTodayMatches() {
  return [buildM61(), buildM62(), buildM63(), buildM64(), buildM65(), buildM66()];
}

module.exports = {
  buildM61, buildM62, buildM63, buildM64, buildM65, buildM66,
  todayMatches: allTodayMatches,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day15Results = [
    { id: 'm55', home: 'Curaçao', away: "Côte d'Ivoire", score: '0-2', group: 'E' },
    { id: 'm56', home: 'Ecuador', away: 'Germany', score: '2-1', group: 'E' },
    { id: 'm57', home: 'Japan', away: 'Sweden', score: '1-1', group: 'F' },
    { id: 'm58', home: 'Tunisia', away: 'Netherlands', score: '1-3', group: 'F' },
    { id: 'm59', home: 'Türkiye', away: 'USA', score: '3-2', group: 'D' },
    { id: 'm60', home: 'Paraguay', away: 'Australia', score: '0-0', group: 'D' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 15 完结 · Day 16 预览';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 15：厄瓜多尔2-1德国 · 土3-2美 · 荷3-1突 · 日1-1瑞 · 澳0-0巴', time: '6月26日' },
    { tag: 'PREVIEW', text: '📅 6月27日 G/H/I末轮6场 · 挪威-法国/塞内加尔-伊拉克(03:00) · 佛得角-沙特/乌拉圭-西班牙(08:00) · 埃及-伊朗/新西兰-比利时(11:00)', time: '今日赛程' },
    { tag: 'PREVIEW', text: 'G/H/I末轮：挪威法国各6分 · 埃及4分领跑 · 西班牙4分', time: '焦点' },
  ].slice(0, 12);

  const snaps = RESULTS_DATA.groupSnapshots || [];

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 赛程 · Day 16 preview · G/H/I 组末轮（6场）',
    breakingNews: [
      { tag: 'OFFICIAL', text: '🏁 昨日：厄瓜多尔2-1德国爆冷 · 土耳其3-2美国 · 荷兰3-1突尼斯', time: '赛果回顾' },
      { tag: 'PREVIEW', text: '📅 今日6场 · 挪威-法国/塞内加尔-伊拉克(03:00) · 佛得角-沙特/乌拉圭-西班牙(08:00) · 埃及-伊朗/新西兰-比利时(11:00)', time: '6月27日' },
      { tag: 'PREVIEW', text: 'G/H/I末轮：挪威法国各6分榜首战 · 埃及4分 · 比利时2分须胜', time: '焦点' },
      { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认', time: '裁判' },
    ],
    todayMatches,
    nextMatch: {
      group: first.group, matchday: first.matchday, date: first.date, time: first.time,
      time_local: first.time_local, timezone: first.timezone,
      time_beijing: first.time_beijing, date_beijing: first.date_beijing,
      time_beijing_full: first.time_beijing_full, venue: first.venue, city: first.city,
      home: { name: first.home.name, iso: first.home.iso, fifaRank: first.home.fifa_rank, rating: first.home.rating },
      away: { name: first.away.name, iso: first.away.iso, fifaRank: first.away.fifa_rank, rating: first.away.rating },
      teaser: 'I组榜首战：挪威 vs 法国 · 波士顿',
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name || 'Erling Haaland',
      key_player_away: first.away.star?.name || 'Kylian Mbappé',
    },
    upcomingMatches: todayMatches.slice(1).map(m => ({
      group: m.group, time_beijing_full: m.time_beijing_full, venue: m.venue, city: m.city,
      home: { name: m.home.name, iso: m.home.iso }, away: { name: m.away.name, iso: m.away.iso },
      teaser: m.note?.split(' · ')[0] || `${m.group}组`,
    })),
  };

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-27',
    fixtures: todayMatches.map(m => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: m.group,
    })),
    allResults: day15Results,
    standings: snaps.filter(g => ['G', 'H', 'I', 'D', 'E', 'F'].includes(g.group)),
    injuries: { note: 'Day 16 · G/H/I组末轮6场 · 挪威法国各6分 · 埃及4分 · 西班牙4分' },
    yesterdayResults: day15Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 16 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day16.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 16:', todayMatches.map(m => `#${m.fifa_match_number} ${m.home.name} vs ${m.away.name}`).join(' | '));
}
