/**
 * Day 15 rollover — m55/m56/m57/m58/m59/m60（6月26日北京 · D/E/F 组末轮 · 6场）
 * Run: node scripts/roll-day15.js && node scripts/enrich-day15.js && node scripts/apply-prediction-signals.js
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '乙未日', day_summary: '乙未日——木土相制', hour_home: '见各场', hour_home_element: '土' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function buildM55() {
  const xgH = 0.78, xgA = 1.68;
  return {
    id: 'm55', fifa_match_number: 55, fifa_match_id: '400021468', group: 'E', matchday: 3,
    date: '2026-06-25', time: '16:00', time_local: '16:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '04:00', date_beijing: '6月26日', time_beijing_full: '北京时间 6月26日 04:00',
    venue: 'Lincoln Financial Field', city: 'Philadelphia, USA',
    note: 'E组末轮 · 库拉索 vs 科特迪瓦 · 费城',
    lineup: lineupFromPrediction({
      formation: '5-4-1 / 4-3-3',
      home: 'Rosa; Martina, Larmond, Maria, Gaari, Kemper; Leerdam, Janga, Hooijer; Rijssel; van der Sar',
      away: 'Fadiga; Konan, Boly, Aurier; Seri, Kessié; Boga, Gradel, Zaha; Krasso, Adingra',
      source: 'ESPN 预测',
    }),
    home: team('Curaçao', 'cw', 88, 58, ['L', 'D', 'L', 'W', 'L'], 'Dick Advocaat',
      { name: 'Leandro Bacuna', pos: 'CM', club: 'Cardiff', desc: '1 分垫底 · 须奇迹', rating: 6.8 }),
    away: team("Côte d'Ivoire", 'ci', 36, 72, ['W', 'L', 'W', 'D', 'W'], 'Emerse Fae',
      { name: 'Nicolas Pépé', pos: 'RW', club: 'Villarreal', desc: '3 分须胜争出线', rating: 8.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 55 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'E组末轮 · 科特迪瓦 3 分须胜 vs 库拉索 1 分 · Pépé vs 铁桶 · 泊松 0-2/1-2。', 70),
    weather: { temp: 26, humidity: 62, condition_cn: '费城夏夜', impact_summary: '气候影响低', home_adapt: 74, away_adapt: 82 },
    mystic: mysticBrief(30, 70, '科特迪瓦火土旺须破局，库拉索守势。'),
  };
}

function buildM56() {
  const xgH = 0.92, xgA = 1.88;
  return {
    id: 'm56', fifa_match_number: 56, fifa_match_id: '400021466', group: 'E', matchday: 3,
    date: '2026-06-25', time: '16:00', time_local: '16:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '04:00', date_beijing: '6月26日', time_beijing_full: '北京时间 6月26日 04:00',
    venue: 'MetLife Stadium', city: 'East Rutherford, USA',
    note: 'E组末轮 · 厄瓜多尔 vs 德国 · 纽约/新泽西',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Domínguez; Preciado, Torres, Hincapié, Estupiñán; Gruezo, Caicedo; Plata, Ibarra, Sarmiento; Valencia',
      away: 'Ter Stegen; Kimmich, Rüdiger, Tah, Mittelstädt; Andrich, Kroos; Musiala, Wirtz, Sané; Füllkrug',
      source: 'BBC 预测',
    }),
    home: team('Ecuador', 'ec', 29, 74, ['L', 'D', 'W', 'W', 'L'], 'Sebastián Beccacece',
      { name: 'Moisés Caicedo', pos: 'CDM', club: 'Chelsea', desc: '1 分须胜', rating: 8.2 }),
    away: team('Germany', 'de', 11, 87, ['W', 'W', 'W', 'D', 'W'], 'Julian Nagelsmann',
      { name: 'Jamal Musiala', pos: 'AM', club: 'Bayern Munich', desc: '6 分领跑 · 或轮换', rating: 8.8 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2017, comp: '友谊赛', score: '2-1', winner: 'Germany' }], note: '德国历史占优' },
    referee: pendingReferee('FIFA Match 56 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'E组末轮 · 德国 6 分 vs 厄瓜多尔 1 分须胜 · Caicedo vs Musiala · 泊松 0-2/1-2。', 76),
    weather: { temp: 25, humidity: 65, condition_cn: '新泽西夏夜', impact_summary: '气候均衡', home_adapt: 80, away_adapt: 86 },
    mystic: mysticBrief(28, 72, '德国金水相生深盘，厄瓜多尔须早破局。'),
  };
}

function buildM57() {
  const xgH = 1.58, xgA = 1.32;
  return {
    id: 'm57', fifa_match_number: 57, fifa_match_id: '400021471', group: 'F', matchday: 3,
    date: '2026-06-25', time: '19:00', time_local: '19:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '07:00', date_beijing: '6月26日', time_beijing_full: '北京时间 6月26日 07:00',
    venue: 'AT&T Stadium', city: 'Arlington, USA',
    note: 'F组末轮 · 日本 vs 瑞典 · 达拉斯',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-4-2',
      home: 'Suzuki; Ito, Tomiyasu, Suzuki, Mitoma; Endo, Morita; Kubo, Minamino, Doan; Maeda',
      away: 'Olsen; Augustinsson, Lindelöf, Krafth; Forsberg, Olsson, Kulusevski; Isak, Gyökeres',
      source: 'FotMob 预测',
    }),
    home: team('Japan', 'jp', 18, 77, ['W', 'D', 'W', 'W', 'L'], 'Hajime Moriyasu',
      { name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', desc: '4 分争头名', rating: 8.3 }),
    away: team('Sweden', 'se', 32, 73, ['L', 'W', 'D', 'W', 'L'], 'Jon Dahl Tomasson',
      { name: 'Alexander Isak', pos: 'ST', club: 'Newcastle', desc: '3 分须胜', rating: 8.4 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '2-1', winner: 'Japan' }], note: '互有胜负' },
    referee: pendingReferee('FIFA Match 57 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'F组末轮 · 日本 4 分 vs 瑞典 3 分须胜 · Kubo vs Isak · 泊松 2-1/1-1。', 72),
    weather: { temp: 33, humidity: 58, condition_cn: '达拉斯午后晴热', impact_summary: '湿热中等', home_adapt: 84, away_adapt: 80 },
    mystic: mysticBrief(52, 48, '日本火木相生主场略优，瑞典须胜。'),
  };
}

function buildM58() {
  const xgH = 0.68, xgA = 2.05;
  return {
    id: 'm58', fifa_match_number: 58, fifa_match_id: '400021473', group: 'F', matchday: 3,
    date: '2026-06-25', time: '19:00', time_local: '19:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '07:00', date_beijing: '6月26日', time_beijing_full: '北京时间 6月26日 07:00',
    venue: 'Arrowhead Stadium', city: 'Kansas City, USA',
    note: 'F组末轮 · 突尼斯 vs 荷兰 · 堪萨斯城',
    lineup: lineupFromPrediction({
      formation: '5-4-1 / 4-3-3',
      home: 'Dahmen; Talbi, Meriah, Bronn; Laabidi, Skhiri, Laidouni; Sliti, Msakni, Khazri; Jebali',
      away: 'Verbruggen; Dumfries, De Ligt, Van Dijk, Blind; Reijnders, Wijnaldum; Gakpo, Simons, Depay; Brobbey',
      source: 'BBC 预测',
    }),
    home: team('Tunisia', 'tn', 41, 68, ['L', 'L', 'D', 'W', 'L'], 'Samuel Veglio',
      { name: 'Wahbi Khazri', pos: 'AM', club: 'Montpellier', desc: '0 分已出局', rating: 7.5 }),
    away: team('Netherlands', 'nl', 7, 86, ['W', 'D', 'W', 'W', 'D'], 'Ronald Koeman',
      { name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', desc: '4 分领跑 · 末轮穿盘', rating: 8.5 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2010, comp: '友谊赛', score: '0-1', winner: 'Netherlands' }], note: '荷兰占优' },
    referee: pendingReferee('FIFA Match 58 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'F组末轮 · 荷兰 4 分 vs 突尼斯 0 分 · Gakpo vs Khazri · 泊松 0-2/1-3。', 78),
    weather: { temp: 32, humidity: 55, condition_cn: '堪萨斯城午后热', impact_summary: '湿热中等', home_adapt: 76, away_adapt: 88 },
    mystic: mysticBrief(25, 75, '荷兰火土旺深盘，突尼斯守势。'),
  };
}

function buildM59() {
  const xgH = 0.85, xgA = 1.78;
  return {
    id: 'm59', fifa_match_number: 59, fifa_match_id: '400021459', group: 'D', matchday: 3,
    date: '2026-06-25', time: '22:00', time_local: '19:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '10:00', date_beijing: '6月26日', time_beijing_full: '北京时间 6月26日 10:00',
    venue: 'SoFi Stadium', city: 'Inglewood, USA',
    note: 'D组末轮 · 土耳其 vs 美国 · 洛杉矶',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Çakır; Çelik, Demiral, Bardakcı, Kadioglu; İnanç, Yıldız; Güler, Çalhanoğlu, Yılmaz; Aktürkoğlu',
      away: 'Turner; Dest, Richards, Ream, Robinson; Adams, Musah; Pulisic, McKennie, Weah; Balogun',
      source: 'ESPN 预测',
    }),
    home: team('Türkiye', 'tr', 42, 70, ['L', 'L', 'W', 'D', 'W'], 'Vincenzo Montella',
      { name: 'Hakan Çalhanoğlu', pos: 'CM', club: 'Inter Milan', desc: '0 分须胜', rating: 8.1 }),
    away: team('USA', 'us', 15, 82, ['W', 'W', 'W', 'D', 'W'], 'Mauricio Pochettino',
      { name: 'Christian Pulisic', pos: 'RW', club: 'AC Milan', desc: '6 分已出线 · 或轮换', rating: 8.6 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 1, recent: [{ year: 2016, comp: '友谊赛', score: '0-1', winner: 'USA' }], note: '美国友谊赛胜' },
    referee: pendingReferee('FIFA Match 59 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'D组末轮 · 美国 6 分 vs 土耳其 0 分须胜 · Çalhanoğlu vs Pulisic · 泊松 0-2/1-2。', 74),
    weather: { temp: 24, humidity: 60, condition_cn: '洛杉矶夏夜', impact_summary: '气候影响低', home_adapt: 78, away_adapt: 90 },
    mystic: mysticBrief(32, 68, '美国火土旺主场，土耳其须胜。'),
  };
}

function buildM60() {
  const xgH = 1.42, xgA = 1.28;
  return {
    id: 'm60', fifa_match_number: 60, fifa_match_id: '400021461', group: 'D', matchday: 3,
    date: '2026-06-25', time: '22:00', time_local: '19:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '10:00', date_beijing: '6月26日', time_beijing_full: '北京时间 6月26日 10:00',
    venue: "Levi's Stadium", city: 'Santa Clara, USA',
    note: 'D组末轮 · 巴拉圭 vs 澳大利亚 · 旧金山湾区',
    lineup: lineupFromPrediction({
      formation: '4-4-2 / 4-2-3-1',
      home: 'Martínez; Velázquez, Gómez, Alonso, Espínola; Sosa, Villamayor; Almirón, Romero, Sanabria; González',
      away: 'Ryan; Atkinson, Souttar, Bos; Metcalfe, Irvine; Goodwin, Leckie, Baccus; Taggart',
      source: 'BBC 预测',
    }),
    home: team('Paraguay', 'py', 52, 68, ['L', 'W', 'D', 'L', 'W'], 'Gustavo Alfaro',
      { name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', desc: '3 分争出线', rating: 8.0 }),
    away: team('Australia', 'au', 24, 74, ['W', 'L', 'W', 'D', 'W'], 'Tony Popovic',
      { name: 'Mathew Ryan', pos: 'GK', club: 'Roma', desc: '3 分同分争出线', rating: 7.8 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 0, recent: [{ year: 2015, comp: '友谊赛', score: '0-0', winner: 'draw' }], note: '友谊赛平局' },
    referee: pendingReferee('FIFA Match 60 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'D组末轮 · 巴拉圭/澳大利亚各 3 分 · Almirón vs Goodwin · 泊松 1-1/2-1。', 70),
    weather: { temp: 22, humidity: 58, condition_cn: '湾区夏夜凉爽', impact_summary: '气候影响低', home_adapt: 82, away_adapt: 84 },
    mystic: mysticBrief(48, 52, '均分乱局宜稳守，定位球破局。'),
  };
}

function allTodayMatches() {
  return [buildM55(), buildM56(), buildM57(), buildM58(), buildM59(), buildM60()];
}

module.exports = {
  buildM55, buildM56, buildM57, buildM58, buildM59, buildM60,
  todayMatches: allTodayMatches,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day14Results = [
    { id: 'm51', home: 'Switzerland', away: 'Canada', score: '2-1', group: 'B' },
    { id: 'm52', home: 'Bosnia and Herzegovina', away: 'Qatar', score: '3-1', group: 'B' },
    { id: 'm49', home: 'Scotland', away: 'Brazil', score: '0-3', group: 'C' },
    { id: 'm50', home: 'Morocco', away: 'Haiti', score: '4-2', group: 'C' },
    { id: 'm53', home: 'Czechia', away: 'Mexico', score: '0-3', group: 'A' },
    { id: 'm54', home: 'South Africa', away: 'South Korea', score: '1-0', group: 'A' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 14 完结 · Day 15 预览';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 14 完结：墨3-0捷 · 南非1-0韩 · 瑞2-1加 · 波黑3-1卡 · 苏0-3巴 · 摩4-2海', time: '6月25日' },
    { tag: 'PREVIEW', text: '📅 6月26日 D/E/F末轮6场 · 库拉索-科特迪瓦/厄瓜多尔-德国(04:00) · 日本-瑞典/突尼斯-荷兰(07:00) · 土耳其-美国/巴拉圭-澳大利亚(10:00)', time: '今日赛程' },
    { tag: 'PREVIEW', text: 'D/E/F组末轮：美国/德国6分 · 日本荷兰各4分 · 巴拉圭澳大利亚各3分', time: '焦点' },
  ].slice(0, 12);

  const snaps = RESULTS_DATA.groupSnapshots || [];

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 赛程 · Day 15 preview · D/E/F 组末轮（6场）',
    breakingNews: [
      { tag: 'OFFICIAL', text: '🏁 昨日：墨3-0捷 · 南非1-0韩爆冷 · 瑞2-1加 · 苏0-3巴', time: '赛果回顾' },
      { tag: 'PREVIEW', text: '📅 今日6场 · 库拉索-科特迪瓦/厄瓜多尔-德国(04:00) · 日本-瑞典/突尼斯-荷兰(07:00) · 土-美/巴拉圭-澳(10:00)', time: '6月26日' },
      { tag: 'PREVIEW', text: 'D/E/F末轮：美国德国已6分 · 日本瑞典争F组 · 巴拉圭澳大利亚生死战', time: '焦点' },
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
      teaser: 'E组末轮：库拉索 vs 科特迪瓦 · 费城',
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name || 'Leandro Bacuna',
      key_player_away: first.away.star?.name || 'Nicolas Pépé',
    },
    upcomingMatches: todayMatches.slice(1).map(m => ({
      group: m.group, time_beijing_full: m.time_beijing_full, venue: m.venue, city: m.city,
      home: { name: m.home.name, iso: m.home.iso }, away: { name: m.away.name, iso: m.away.iso },
      teaser: m.note?.split(' · ')[0] || `${m.group}组`,
    })),
  };

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-26',
    fixtures: todayMatches.map(m => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: m.group,
    })),
    allResults: day14Results,
    standings: snaps.filter(g => ['D', 'E', 'F', 'A', 'B', 'C'].includes(g.group)),
    injuries: { note: 'Day 15 · D/E/F组末轮6场 · 美国/德国6分 · 日本荷兰各4分' },
    yesterdayResults: day14Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 15 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day15.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 15:', todayMatches.map(m => `#${m.fifa_match_number} ${m.home.name} vs ${m.away.name}`).join(' | '));
}
