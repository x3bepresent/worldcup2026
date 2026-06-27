/**
 * Day 17 rollover — m67–m72（6月28日北京 · J/K/L 组末轮 · 6场）
 * Run: node scripts/sync-day16-results.js && node scripts/roll-day17.js && node scripts/enrich-day17.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { pendingReferee, lineupFromPrediction } = require('./pending-templates');
const { sortMatchesByKickoff } = require('./match-sort');

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
    date_bazi: { year: '丙午年', month: '甲午月', day: '丁酉日', day_summary: '丁酉日——火金相制', hour_home: '见各场', hour_home_element: '金' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function buildM67() {
  const xgH = 0.68, xgA = 2.08;
  return {
    id: 'm67', fifa_match_number: 67, fifa_match_id: '400021508', group: 'L', matchday: 3,
    date: '2026-06-27', time: '17:00', time_local: '17:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '05:00', date_beijing: '6月28日', time_beijing_full: '北京时间 6月28日 05:00',
    venue: 'MetLife Stadium', city: 'East Rutherford, USA',
    note: 'L组末轮 · 巴拿马 vs 英格兰 · 纽约/新泽西',
    lineup: lineupFromPrediction({
      formation: '5-4-1 / 4-2-3-1',
      home: 'Mosquera; Anderson, Escobar, Cummings; Fajardo, Bristán, Rodríguez; Gómez, Torres, Waterman; Ismael',
      away: 'Pickford; Walker, Stones, Guehi, Shaw; Rice, Mainoo; Saka, Bellingham, Foden; Kane',
      source: 'BBC 预测',
    }),
    home: team('Panama', 'pa', 75, 58, ['L', 'L', 'D', 'L', 'W'], 'Thomas Christiansen',
      { name: 'José Fajardo', pos: 'ST', club: 'Plaza Amador', desc: '0 分须奇迹', rating: 7.2 }),
    away: team('England', 'gb-eng', 9, 87, ['W', 'D', 'W', 'W', 'W'], 'Thomas Tuchel',
      { name: 'Jude Bellingham', pos: 'CM', club: 'Real Madrid', desc: '4 分争头名', rating: 9.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '0-6', winner: 'England' }], note: '英格兰历史大胜' },
    referee: pendingReferee('FIFA Match 67 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'L组末轮 · 巴拿马 0 分 vs 英格兰 4 分 · Bellingham/Kane vs 铁桶 · 泊松 0-2/0-3。', 78),
    weather: { temp: 24, humidity: 58, condition_cn: '新泽西夏夜', impact_summary: '气候影响低', home_adapt: 74, away_adapt: 88 },
    mystic: mysticBrief(25, 75, '英格兰金水旺深盘，巴拿马须铁桶。'),
  };
}

function buildM68() {
  const xgH = 1.42, xgA = 1.38;
  return {
    id: 'm68', fifa_match_number: 68, fifa_match_id: '400021509', group: 'L', matchday: 3,
    date: '2026-06-27', time: '17:00', time_local: '17:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '05:00', date_beijing: '6月28日', time_beijing_full: '北京时间 6月28日 05:00',
    venue: 'Lincoln Financial Field', city: 'Philadelphia, USA',
    note: 'L组末轮 · 克罗地亚 vs 加纳 · 费城',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Livaković; Juranović, Gvardiol, Šutalo, Sosa; Modrić, Brozović, Pašalić; Perišić, Kramarić, Ivanušec',
      away: 'Ati-Zigi; Lamptey, Amartey, Djiku; Partey, Idrissu; Kudus, André Ayew, Jordan Ayew; Semenyo',
      source: 'ESPN 预测',
    }),
    home: team('Croatia', 'hr', 15, 79, ['W', 'L', 'W', 'W', 'D'], 'Zlatko Dalić',
      { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', desc: '3 分须胜', rating: 8.8 }),
    away: team('Ghana', 'gh', 60, 65, ['W', 'D', 'W', 'D', 'L'], 'Otto Addo',
      { name: 'Mohammed Kudus', pos: 'RW', club: 'West Ham', desc: '4 分领跑', rating: 8.3 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [{ year: 2014, comp: '友谊赛', score: '1-0', winner: 'Croatia' }], note: '克罗地亚略占优' },
    referee: pendingReferee('FIFA Match 68 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'L组榜首对话 · 加纳 4 分 vs 克罗地亚 3 分须胜 · Modrić vs Kudus · 泊松 1-1/2-1。', 70),
    weather: { temp: 26, humidity: 62, condition_cn: '费城夏夜', impact_summary: '气候影响低', home_adapt: 84, away_adapt: 82 },
    mystic: mysticBrief(52, 48, '均分乱局宜稳守，Modrić 中场定调。'),
  };
}

function buildM69() {
  const xgH = 1.52, xgA = 1.45;
  return {
    id: 'm69', fifa_match_number: 69, fifa_match_id: '400021497', group: 'J', matchday: 3,
    date: '2026-06-27', time: '21:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '10:00', date_beijing: '6月28日', time_beijing_full: '北京时间 6月28日 10:00',
    venue: 'Arrowhead Stadium', city: 'Kansas City, USA',
    note: 'J组末轮 · 阿尔及利亚 vs 奥地利 · 堪萨斯城',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Mandrea; Atal, Mandi, Belkheir; Aouar, Bentaleb; Mahrez, Bennacer, Bounedjah; Bounedjah, Slimani',
      away: 'Pentz; Posch, Alaba, Lienhart; Seiwald, Schlager; Baumgartner, Sabitzer, Grüll; Arnautović',
      source: 'FotMob 预测',
    }),
    home: team('Algeria', 'dz', 46, 67, ['W', 'L', 'W', 'D', 'W'], 'Djamel Belmadi',
      { name: 'Riyad Mahrez', pos: 'RW', club: 'Al-Ahli', desc: '3 分须胜争出线', rating: 8.2 }),
    away: team('Austria', 'at', 28, 74, ['W', 'L', 'W', 'D', 'D'], 'Ralf Rangnick',
      { name: 'David Alaba', pos: 'CB', club: 'Real Madrid', desc: '3 分同分对话', rating: 8.5 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2022, comp: '友谊赛', score: '0-2', winner: 'Austria' }], note: '奥地利友谊赛胜' },
    referee: pendingReferee('FIFA Match 69 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'J组末轮 · 阿尔/奥各 3 分生死战 · Mahrez vs Alaba · 泊松 1-1/2-1。', 68),
    weather: { temp: 30, humidity: 55, condition_cn: '堪萨斯城夏午', impact_summary: '湿热中等', home_adapt: 80, away_adapt: 82 },
    mystic: mysticBrief(51, 49, '同分对话，火土相涵宜胶着。'),
  };
}

function buildM70() {
  const xgH = 0.62, xgA = 2.42;
  return {
    id: 'm70', fifa_match_number: 70, fifa_match_id: '400021495', group: 'J', matchday: 3,
    date: '2026-06-27', time: '21:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '10:00', date_beijing: '6月28日', time_beijing_full: '北京时间 6月28日 10:00',
    venue: 'AT&T Stadium', city: 'Arlington, USA',
    note: 'J组末轮 · 约旦 vs 阿根廷 · 达拉斯',
    lineup: lineupFromPrediction({
      formation: '5-4-1 / 4-3-3',
      home: 'Abu Layla; Al-Rosan, Al-Amro, Al-Bashir; Al-Naimat, Al-Rawashdeh; Al-Malkawi, Al-Dardour, Al-Naimat; Al-Rashdan',
      away: 'Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Lautaro, Garnacho',
      source: 'ESPN 预测',
    }),
    home: team('Jordan', 'jo', 72, 57, ['L', 'L', 'D', 'W', 'D'], 'Hussein Ammouta',
      { name: 'Yazan Al-Naimat', pos: 'ST', club: 'Al-Gharafa', desc: '0 分已出局', rating: 7.4 }),
    away: team('Argentina', 'ar', 1, 94, ['W', 'W', 'W', 'W', 'D'], 'Lionel Scaloni',
      { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', desc: '6 分已锁出线', rating: 9.3 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 1, recent: [{ year: 2011, comp: '友谊赛', score: '0-2', winner: 'Argentina' }], note: '阿根廷占优' },
    referee: pendingReferee('FIFA Match 70 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'J组末轮 · 阿根廷 6 分已出线 vs 约旦 0 分 · Messi 或轮换 · 泊松 0-2/0-3。', 76),
    weather: { temp: 33, humidity: 52, condition_cn: '达拉斯夏午', impact_summary: '封闭球场 · 高温', home_adapt: 72, away_adapt: 88 },
    mystic: mysticBrief(22, 78, '阿根廷火土旺，约旦铁桶守势。'),
  };
}

function buildM71() {
  const xgH = 1.55, xgA = 1.58;
  return {
    id: 'm71', fifa_match_number: 71, fifa_match_id: '400021505', group: 'K', matchday: 3,
    date: '2026-06-27', time: '19:30', time_local: '19:30 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '07:30', date_beijing: '6月28日', time_beijing_full: '北京时间 6月28日 07:30',
    venue: 'Hard Rock Stadium', city: 'Miami Gardens, USA',
    note: 'K组末轮 · 哥伦比亚 vs 葡萄牙 · 迈阿密',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Campos; Muñoz, Sánchez, Lerma; Arias, Barrios, Ríos; Díaz, James, Quinteros; Borré',
      away: 'Costa; Cancelo, Dias, Pepe, Mendes; Palhinha, Vitinha; Leão, Bruno Fernandes, Rafael Leão; Ronaldo',
      source: 'BBC 预测',
    }),
    home: team('Colombia', 'co', 27, 75, ['W', 'W', 'W', 'D', 'W'], 'Néstor Lorenzo',
      { name: 'Luis Díaz', pos: 'LW', club: 'Liverpool', desc: '6 分争头名', rating: 8.6 }),
    away: team('Portugal', 'pt', 6, 88, ['W', 'D', 'W', 'W', 'W'], 'Roberto Martínez',
      { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al-Nassr', desc: '4 分同争头名', rating: 8.8 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2014, comp: '世界杯', score: '0-1', winner: 'Portugal' }], note: '葡萄牙大赛占优' },
    referee: pendingReferee('FIFA Match 71 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'K组榜首战 · 哥伦/葡各争头名 · Díaz vs Ronaldo · 泊松 1-1/2-1。', 72),
    weather: { temp: 31, humidity: 76, condition_cn: '迈阿密湿热', impact_summary: '湿热高', home_adapt: 86, away_adapt: 84 },
    mystic: mysticBrief(48, 52, '榜首对话，火金相制宜对攻。'),
  };
}

function buildM72() {
  const xgH = 1.48, xgA = 0.72;
  return {
    id: 'm72', fifa_match_number: 72, fifa_match_id: '400021500', group: 'K', matchday: 3,
    date: '2026-06-27', time: '19:30', time_local: '19:30 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '07:30', date_beijing: '6月28日', time_beijing_full: '北京时间 6月28日 07:30',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta, USA',
    note: 'K组末轮 · 刚果(金) vs 乌兹别克 · 亚特兰大',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-4-2',
      home: 'Mpebe; Muyuma, Mukau, Batubinsika; Mbemba, Mwamba; Bamba, Kakuta, Wissa; Bakambu',
      away: 'Nesterov; Khusanov, Ismailov, Alikulov; Shomurodov, Jaloliddinov; Hamrobekov, Nasirov; Turgunboev, Abdullaev',
      source: 'ESPN 预测',
    }),
    home: team('Congo DR', 'cd', 61, 63, ['D', 'L', 'W', 'D', 'W'], 'Sébastien Desabre',
      { name: 'Yoane Wissa', pos: 'ST', club: 'Brentford', desc: '1 分须胜争出线', rating: 8.0 }),
    away: team('Uzbekistan', 'uz', 62, 58, ['L', 'L', 'D', 'W', 'L'], 'Slavisa Jokanovic',
      { name: 'Eldor Shomurodov', pos: 'ST', club: 'Cagliari', desc: '0 分已出局', rating: 7.5 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 72 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'K组末轮 · 刚果(金) 1 分须胜 vs 乌兹别克 0 分 · Wissa 穿盘 · 泊松 2-0/1-0。', 74),
    weather: { temp: 29, humidity: 68, condition_cn: '亚特兰大夏午', impact_summary: '湿热中等', home_adapt: 82, away_adapt: 76 },
    mystic: mysticBrief(65, 35, '刚果(金)须破局，乌兹别克守势。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM67(), buildM68(), buildM69(), buildM70(), buildM71(), buildM72()]);
}

module.exports = {
  buildM67, buildM68, buildM69, buildM70, buildM71, buildM72,
  todayMatches: allTodayMatches,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day16Results = [
    { id: 'm61', home: 'Norway', away: 'France', score: '1-4', group: 'I' },
    { id: 'm62', home: 'Senegal', away: 'Iraq', score: '5-0', group: 'I' },
    { id: 'm63', home: 'Egypt', away: 'IR Iran', score: '1-1', group: 'G' },
    { id: 'm64', home: 'New Zealand', away: 'Belgium', score: '1-5', group: 'G' },
    { id: 'm65', home: 'Cabo Verde', away: 'Saudi Arabia', score: '0-0', group: 'H' },
    { id: 'm66', home: 'Uruguay', away: 'Spain', score: '0-1', group: 'H' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 16 完结 · Day 17 预览';
  if (!RESULTS_DATA.breakingNews?.some(n => /Day 16 完结/.test(n.text))) {
    RESULTS_DATA.breakingNews = [
      { tag: 'OFFICIAL', text: '🏁 Day 16 完结：法国4-1挪威 · 比5-1新西兰 · 塞5-0伊 · 西1-0乌 · 埃1-1伊 · 佛0-0沙', time: '6月27日' },
      { tag: 'PREVIEW', text: '📅 6月28日 J/K/L末轮6场 · 巴拿马-英格兰/克罗地亚-加纳(05:00) · 哥伦-葡/刚果-乌兹(07:30) · 阿尔-奥/约-阿(10:00)', time: '今日赛程' },
      { tag: 'PREVIEW', text: 'J/K/L末轮：阿根廷6分 · 英格兰/加纳各4分 · 哥伦6分', time: '焦点' },
    ].slice(0, 12);
  }

  const snaps = RESULTS_DATA.groupSnapshots || [];

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 赛程 · Day 17 preview · J/K/L 组末轮（6场）',
    breakingNews: [
      { tag: 'OFFICIAL', text: '🏁 昨日：法国4-1挪威 · 比利时5-1新西兰 · 塞内加尔5-0伊拉克', time: '赛果回顾' },
      { tag: 'PREVIEW', text: '📅 今日6场 · 巴拿马-英格兰/克罗地亚-加纳(05:00) · 哥伦-葡/刚果-乌兹(07:30) · 阿尔-奥/约-阿(10:00)', time: '6月28日' },
      { tag: 'PREVIEW', text: 'J/K/L末轮：阿根廷已出线 · 英格兰/加纳争L组 · 哥伦/葡争K组头名', time: '焦点' },
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
      teaser: 'L组末轮：巴拿马 vs 英格兰 · 纽约/新泽西',
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name || 'José Fajardo',
      key_player_away: first.away.star?.name || 'Jude Bellingham',
    },
    upcomingMatches: todayMatches.slice(1).map(m => ({
      group: m.group, time_beijing_full: m.time_beijing_full, venue: m.venue, city: m.city,
      home: { name: m.home.name, iso: m.home.iso }, away: { name: m.away.name, iso: m.away.iso },
      teaser: m.note?.split(' · ')[0] || `${m.group}组`,
    })),
  };

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-28',
    fixtures: todayMatches.map(m => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: m.group,
    })),
    allResults: day16Results,
    standings: snaps.filter(g => ['G', 'H', 'I', 'J', 'K', 'L'].includes(g.group)),
    injuries: { note: 'Day 17 · J/K/L组末轮6场 · 阿根廷6分 · 英格兰/加纳各4分 · 哥伦6分' },
    yesterdayResults: day16Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 17 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day17.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 17 rolled —', todayMatches.length, 'matches (m67–m72)');
}
