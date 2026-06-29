/**
 * Day 19 rollover — m74–m76（6月30日北京 · 32强 3场）
 * Run: node scripts/sync-day18-results.js && node scripts/roll-day19.js && node scripts/enrich-day19.js && node scripts/apply-prediction-signals.js
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

const R32_PREVIEW = [
  { no: 77, id: 'm77', home: 'France', away: 'Sweden', date_beijing: '7月1日', time_beijing: '05:00', venue: 'MetLife Stadium', city: '纽约/新泽西', slot: 'I1 vs 3rd' },
  { no: 78, id: 'm78', home: "Côte d'Ivoire", away: 'Norway', date_beijing: '7月1日', time_beijing: '01:00', venue: 'AT&T Stadium', city: '达拉斯', slot: 'E2 vs I2' },
  { no: 79, id: 'm79', home: 'Mexico', away: 'Ecuador', date_beijing: '7月1日', time_beijing: '09:00', venue: 'Estadio Azteca', city: '墨西哥城', slot: 'A1 vs 3rd' },
  { no: 80, id: 'm80', home: 'England', away: 'Congo DR', date_beijing: '7月2日', time_beijing: '00:00', venue: 'Mercedes-Benz Stadium', city: '亚特兰大', slot: 'L1 vs 3rd' },
];

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
    date_bazi: { year: '丙午年', month: '甲午月', day: '己亥日', day_summary: '己亥日——水土相涵', hour_home: '见各场', hour_home_element: '水' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function isoFor(name) {
  const m = {
    Germany: 'de', Paraguay: 'py', Brazil: 'br', Japan: 'jp', Netherlands: 'nl', Morocco: 'ma',
    France: 'fr', Sweden: 'se', "Côte d'Ivoire": 'ci', Norway: 'no', Mexico: 'mx', Ecuador: 'ec',
    England: 'gb-eng', 'Congo DR': 'cd',
  };
  return m[name] || 'xx';
}

function buildM76() {
  const xgH = 1.88, xgA = 0.98;
  return {
    id: 'm76', fifa_match_number: 76, fifa_match_id: '400021516',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M76 · C组冠军 vs F组亚军',
    knockout_next: '胜者 → M91（16强 · 对 M78 胜者）',
    date: '2026-06-29', time: '12:00', time_local: '12:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '01:00', date_beijing: '6月30日', time_beijing_full: '北京时间 6月30日 01:00',
    venue: 'NRG Stadium', city: 'Houston, USA',
    note: '32强 M76 · 巴西 vs 日本 · 休斯顿',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Alisson; Danilo, Marquinhos, Gabriel, Wendell; Paquetá, Gerson; Raphinha, Rodrygo, Vinícius; Richarlison',
      away: 'Suzuki; Ito, Tomiyasu, Taniguchi; Endo, Morita; Kubo, Minamino, Mitoma; Maeda, Asano',
      source: 'ESPN 预测',
    }),
    home: team('Brazil', 'br', 3, 92, ['W', 'W', 'D', 'W', 'W'], 'Dorival Júnior',
      { name: 'Vinícius Júnior', pos: 'LW', club: 'Real Madrid', desc: 'C 组头名 7 分', rating: 9.0 }),
    away: team('Japan', 'jp', 18, 78, ['W', 'D', 'D', 'W', 'D'], 'Hajime Moriyasu',
      { name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', desc: 'F 组次席 5 分', rating: 8.2 }),
    h2h: { home_wins: 2, draws: 0, away_wins: 1, recent: [{ year: 2022, comp: '友谊赛', score: '1-0', winner: 'Japan' }], note: '日本偶有冷门' },
    referee: pendingReferee('FIFA Match 76 · Maurizio Mariani（意大利）'),
    prediction: pred(xgH, xgA, '32强 M76 · 巴西 C1（7 分零失球）vs 日本 F2（5 分不败）· 日本低位+转换 · 泊松 2-0/1-0。', 76),
    weather: { temp: 32, humidity: 58, condition_cn: '休斯顿夏夜', impact_summary: '封闭球场高温', home_adapt: 88, away_adapt: 84 },
    mystic: mysticBrief(68, 32, '巴西火土旺，日本水守反击。'),
  };
}

function buildM74() {
  const xgH = 1.82, xgA = 0.72;
  return {
    id: 'm74', fifa_match_number: 74, fifa_match_id: '400021513',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M74 · E组冠军 vs 巴拉圭(3rd)',
    knockout_next: '胜者 → M89（16强 · 对 M77 胜者）',
    date: '2026-06-29', time: '16:30', time_local: '16:30 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '04:30', date_beijing: '6月30日', time_beijing_full: '北京时间 6月30日 04:30',
    venue: 'Gillette Stadium', city: 'Foxborough, USA',
    note: '32强 M74 · 德国 vs 巴拉圭 · 波士顿',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 5-4-1',
      home: 'Neuer; Kimmich, Rüdiger, Tah, Mittelstädt; Kroos, Andrich; Wirtz, Musiala, Sané; Havertz',
      away: 'Martínez; Velázquez, Gómez, Alonso; Kaku, Sánchez; Almirón, Sosa, Benítez; Romero, Sosa',
      source: 'BBC 预测',
    }),
    home: team('Germany', 'de', 11, 86, ['W', 'W', 'L', 'W', 'D'], 'Julian Nagelsmann',
      { name: 'Jamal Musiala', pos: 'AM', club: 'Bayern', desc: 'E 组头名', rating: 8.8 }),
    away: team('Paraguay', 'py', 52, 68, ['W', 'D', 'D', 'L', 'W'], 'Gustavo Alfaro',
      { name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', desc: 'D 组第3 出线', rating: 7.8 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [{ year: 2010, comp: '友谊赛', score: '3-1', winner: 'Germany' }], note: '德国历史占优' },
    referee: pendingReferee('FIFA Match 74 · Jalal Jayed（摩洛哥）'),
    prediction: pred(xgH, xgA, '32强 M74 · 德国 E1 vs 巴拉圭 D 组第3 · 深盘 -1/1.5 · 泊松 2-0/3-0。', 78),
    weather: { temp: 24, humidity: 62, condition_cn: '波士顿夏晨', impact_summary: '气候影响低', home_adapt: 86, away_adapt: 78 },
    mystic: mysticBrief(72, 28, '德国金旺深盘，巴拉圭土守。'),
  };
}

function buildM75() {
  const xgH = 1.52, xgA = 1.28;
  return {
    id: 'm75', fifa_match_number: 75, fifa_match_id: '400021522',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M75 · F组冠军 vs C组亚军',
    knockout_next: '胜者 → M90（16强 · 对 M73 胜者 · 加拿大）',
    date: '2026-06-29', time: '20:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '09:00', date_beijing: '6月30日', time_beijing_full: '北京时间 6月30日 09:00',
    venue: 'Estadio BBVA', city: 'Guadalupe, Mexico',
    note: '32强 M75 · 荷兰 vs 摩洛哥 · 蒙特雷',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Verbruggen; Dumfries, De Ligt, Van Dijk, Blind; Reijnders, Wijnaldum; Gakpo, Simons, Depay; Brobbey',
      away: 'Bono; Hakimi, Saïss, Aguerd; Amrabat, Azzedine; Ziyech, Ounahi, Boufal; En-Nesyri',
      source: 'FotMob 预测',
    }),
    home: team('Netherlands', 'nl', 7, 84, ['W', 'W', 'D', 'W', 'D'], 'Ronald Koeman',
      { name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', desc: 'F 组头名 7 分', rating: 8.5 }),
    away: team('Morocco', 'ma', 13, 80, ['W', 'W', 'D', 'W', 'D'], 'Walid Regragui',
      { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', desc: 'C 组次席 7 分', rating: 8.6 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 1, recent: [{ year: 2022, comp: '世界杯', score: '2-0', winner: 'Morocco' }], note: '2022 摩洛哥胜' },
    referee: pendingReferee('FIFA Match 75 · Wilton Sampaio（巴西）'),
    prediction: pred(xgH, xgA, '32强 M75 · 荷兰 F1 vs 摩洛哥 C2 · 2022 冷门阴影 · 泊松 1-1/2-1。', 70),
    weather: { temp: 30, humidity: 48, condition_cn: '蒙特雷夏午', impact_summary: '海拔 540m', home_adapt: 84, away_adapt: 86 },
    mystic: mysticBrief(52, 48, '荷摩均势，火土相制宜胶着。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM76(), buildM74(), buildM75()]);
}

module.exports = {
  buildM74, buildM75, buildM76,
  todayMatches: allTodayMatches,
  R32_PREVIEW,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day18Results = [{ id: 'm73', home: 'South Africa', away: 'Canada', score: '0-1', group: 'KO' }];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 18 M73 完结 · Day 19 32强 3场';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 昨日 M73：南非 0-1 加拿大 · Eustaquio 90+2\'', time: '6月29日' },
    { tag: 'PREVIEW', text: '⚔️ 今日 3 场：巴西-日本(01:00) · 德国-巴拉圭(04:30) · 荷兰-摩洛哥(09:00)', time: '6月30日' },
    { tag: 'PREVIEW', text: 'M75 胜者 vs 加拿大(M73) · M90 16强走廊', time: '路径' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 赛程 · Day 19 · 32强 3场',
    phase: 'knockout',
    phase_cn: '淘汰赛 · 32强',
    breakingNews: RESULTS_DATA.breakingNews,
    todayMatches,
    nextMatch: {
      round: 'R32', round_cn: '32强', group: 'KO', matchday: null,
      date: first.date, time: first.time, time_local: first.time_local, timezone: first.timezone,
      time_beijing: first.time_beijing, date_beijing: first.date_beijing,
      time_beijing_full: first.time_beijing_full, venue: first.venue, city: first.city,
      home: { name: first.home.name, iso: first.home.iso, fifaRank: first.home.fifa_rank, rating: first.home.rating },
      away: { name: first.away.name, iso: first.away.iso, fifaRank: first.away.fifa_rank, rating: first.away.rating },
      teaser: `32强 ${first.knockout_slot?.split(' · ')[0] || 'M76'} · ${first.home.name} vs ${first.away.name}`,
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name, key_player_away: first.away.star?.name,
    },
    upcomingMatches: [
      ...todayMatches.slice(1).map(m => ({
        id: m.id, round: 'R32', round_cn: '32强', group: 'KO',
        time_beijing_full: m.time_beijing_full, venue: m.venue, city: m.city,
        home: { name: m.home.name, iso: m.home.iso }, away: { name: m.away.name, iso: m.away.iso },
        teaser: m.knockout_slot?.split(' · ')[0] || m.id,
      })),
      ...R32_PREVIEW.map(m => ({
        id: m.id, round: 'R32', round_cn: '32强', group: 'KO',
        time_beijing_full: `北京时间 ${m.date_beijing} ${m.time_beijing}`,
        venue: m.venue, city: m.city,
        home: { name: m.home, iso: isoFor(m.home) }, away: { name: m.away, iso: isoFor(m.away) },
        teaser: `M${m.no} · ${m.slot}`,
      })),
    ],
  };

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-30',
    fixtures: todayMatches.map(m => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'R32',
    })),
    allResults: day18Results,
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 19 · 32强 3 场 · 巴西/德国/荷兰' },
    yesterdayResults: day18Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 19 · 32强 3场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day19.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 19 rolled —', todayMatches.length, 'matches (m76, m74, m75)');
}
