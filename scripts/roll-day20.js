/**
 * Day 20 rollover — m78–m80（7月1日北京 · 32强 3场）
 * Run: node scripts/sync-day19-results.js && node scripts/roll-day20.js && node scripts/enrich-day20.js && node scripts/apply-prediction-signals.js
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
  { no: 80, id: 'm80', home: 'England', away: 'Congo DR', date_beijing: '7月2日', time_beijing: '00:00', venue: 'Mercedes-Benz Stadium', city: '亚特兰大', slot: 'L1 vs 3rd' },
  { no: 81, id: 'm81', home: 'USA', away: 'Portugal', date_beijing: '7月2日', time_beijing: '04:00', venue: 'SoFi Stadium', city: '洛杉矶', slot: 'B1 vs 3rd' },
  { no: 82, id: 'm82', home: 'Argentina', away: 'Colombia', date_beijing: '7月2日', time_beijing: '08:00', venue: 'Hard Rock Stadium', city: '迈阿密', slot: 'D1 vs G2' },
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '庚子日', day_summary: '庚子日——金水相涵', hour_home: '见各场', hour_home_element: '水' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function isoFor(name) {
  const m = {
    France: 'fr', Sweden: 'se', "Côte d'Ivoire": 'ci', Norway: 'no', Mexico: 'mx', Ecuador: 'ec',
    England: 'gb-eng', 'Congo DR': 'cd', USA: 'us', Portugal: 'pt', Argentina: 'ar', Colombia: 'co',
  };
  return m[name] || 'xx';
}

function buildM78() {
  const xgH = 1.42, xgA = 1.38;
  return {
    id: 'm78', fifa_match_number: 78, fifa_match_id: '400021514',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M78 · E组亚军 vs I组亚军',
    knockout_next: '胜者 → M91（16强 · 对 M76 胜者 · 巴西）',
    date: '2026-06-30', time: '12:00', time_local: '12:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '01:00', date_beijing: '7月1日', time_beijing_full: '北京时间 7月1日 01:00',
    venue: 'AT&T Stadium', city: 'Arlington, USA',
    note: '32强 M78 · 科特迪瓦 vs 挪威 · 达拉斯',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-3-3',
      home: 'Fadiga; Boly, Konaté, Singo; Serper, Kessié, Adingra; Boga, Krasso, Haller',
      away: 'Nyland; Ryerson, Høibråten, Bjørtuft; Berge, Ødegaard, Berg; Højlund, Sorloth, Nusa',
      source: 'ESPN 预测',
    }),
    home: team("Côte d'Ivoire", 'ci', 36, 76, ['W', 'D', 'W', 'L', 'W'], 'Emerse Faé',
      { name: 'Sébastien Haller', pos: 'ST', club: 'Borussia Dortmund', desc: 'E 组次席', rating: 8.0 }),
    away: team('Norway', 'no', 45, 74, ['W', 'W', 'D', 'L', 'W'], 'Ståle Solbakken',
      { name: 'Erling Haaland', pos: 'ST', club: 'Man City', desc: 'I 组次席', rating: 9.0 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2013, comp: '友谊赛', score: '1-2', winner: 'Norway' }], note: '挪威历史略优' },
    referee: pendingReferee('FIFA Match 78 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M78 · 科特迪瓦 E2 vs 挪威 I2 · 均势 · 泊松 1-1/2-1。', 68),
    weather: { temp: 34, humidity: 55, condition_cn: '达拉斯夏夜', impact_summary: '封闭球场高温', home_adapt: 84, away_adapt: 82 },
    mystic: mysticBrief(48, 52, '挪威金旺，科特迪瓦土守反击。'),
  };
}

function buildM77() {
  const xgH = 1.95, xgA = 0.88;
  return {
    id: 'm77', fifa_match_number: 77, fifa_match_id: '400021523',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M77 · I组冠军 vs 瑞典(3rd)',
    knockout_next: '胜者 → M89（16强 · 对 M74 胜者 · 巴拉圭）',
    date: '2026-06-30', time: '16:00', time_local: '16:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '05:00', date_beijing: '7月1日', time_beijing_full: '北京时间 7月1日 05:00',
    venue: 'MetLife Stadium', city: 'East Rutherford, USA',
    note: '32强 M77 · 法国 vs 瑞典 · 纽约/新泽西',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-4-2',
      home: 'Maignan; Koundé, Saliba, Upamecano, Hernandez; Tchouaméni, Camavinga, Griezmann; Dembélé, Mbappé, Thuram',
      away: 'Olsen; Lindelöf, Gudmundsson, Hien; Forsberg, Olsson, Kulusevski; Isak, Gyökeres',
      source: 'BBC 预测',
    }),
    home: team('France', 'fr', 2, 90, ['W', 'W', 'D', 'W', 'W'], 'Didier Deschamps',
      { name: 'Kylian Mbappé', pos: 'LW', club: 'Real Madrid', desc: 'I 组头名', rating: 9.2 }),
    away: team('Sweden', 'se', 26, 78, ['W', 'D', 'W', 'L', 'D'], 'Jon Dahl Tomasson',
      { name: 'Alexander Isak', pos: 'ST', club: 'Newcastle', desc: 'I 组第3 出线', rating: 8.4 }),
    h2h: { home_wins: 3, draws: 1, away_wins: 0, recent: [{ year: 2022, comp: '欧国联', score: '2-1', winner: 'France' }], note: '法国占优' },
    referee: pendingReferee('FIFA Match 77 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M77 · 法国 I1 vs 瑞典(3rd) · 深盘叙事 · 泊松 2-0/2-1。', 80),
    weather: { temp: 26, humidity: 65, condition_cn: '纽约夏晨', impact_summary: '气候影响低', home_adapt: 88, away_adapt: 80 },
    mystic: mysticBrief(70, 30, '法国金水旺，瑞典木守。'),
  };
}

function buildM79() {
  const xgH = 1.68, xgA = 1.05;
  return {
    id: 'm79', fifa_match_number: 79, fifa_match_id: '400021520',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M79 · A组冠军 vs 厄瓜多尔(3rd)',
    knockout_next: '胜者 → M92（16强 · 对 M81 胜者）',
    date: '2026-06-30', time: '20:00', time_local: '20:00 CT', timezone: 'CDT (UTC-6)',
    time_beijing: '09:00', date_beijing: '7月1日', time_beijing_full: '北京时间 7月1日 09:00',
    venue: 'Estadio Azteca', city: 'Mexico City, Mexico',
    note: '32强 M79 · 墨西哥 vs 厄瓜多尔 · 墨西哥城',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Ochoa; Montiel, Vásquez, Héctor Herrera; Álvarez, Romo, Lozano; Vega, Jiménez, Antuna',
      away: 'Domínguez; Torres, Hincapié, Caicedo; Gruezo, Paez; Plata, Sarmiento, Estupiñán; Valencia',
      source: 'FotMob 预测',
    }),
    home: team('Mexico', 'mx', 14, 82, ['W', 'W', 'D', 'W', 'D'], 'Javier Aguirre',
      { name: 'Hirving Lozano', pos: 'RW', club: 'San Diego FC', desc: 'A 组头名 · 主场', rating: 8.3 }),
    away: team('Ecuador', 'ec', 31, 76, ['W', 'D', 'D', 'W', 'L'], 'Sebastián Beccacece',
      { name: 'Enner Valencia', pos: 'ST', club: 'Internacional', desc: 'D 组第3 出线', rating: 8.0 }),
    h2h: { home_wins: 2, draws: 2, away_wins: 1, recent: [{ year: 2024, comp: '友谊赛', score: '0-0', winner: 'draw' }], note: '中美洲德比' },
    referee: pendingReferee('FIFA Match 79 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M79 · 墨西哥 A1 vs 厄瓜多尔(3rd) · 阿兹特克主场 · 泊松 2-0/1-0。', 76),
    weather: { temp: 22, humidity: 55, condition_cn: '墨西哥城夏午', impact_summary: '海拔 2240m', home_adapt: 92, away_adapt: 84 },
    mystic: mysticBrief(62, 38, '墨西哥土旺主场，厄瓜多尔水守。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM78(), buildM77(), buildM79()]);
}

module.exports = {
  buildM77, buildM78, buildM79,
  todayMatches: allTodayMatches,
  R32_PREVIEW,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day19Results = [
    { id: 'm76', home: 'Brazil', away: 'Japan', score: '2-1', group: 'KO' },
    { id: 'm74', home: 'Germany', away: 'Paraguay', score: '1-1', group: 'KO' },
    { id: 'm75', home: 'Netherlands', away: 'Morocco', score: '1-1', group: 'KO' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 19 完结 · Day 20 32强 3场';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 昨日：德国点球负巴拉圭 · 巴西2-1日本 · 摩洛哥点球胜荷兰', time: '6月30日' },
    { tag: 'PREVIEW', text: '⚔️ 今日 3 场：科特迪瓦-挪威(01:00) · 法国-瑞典(05:00) · 墨西哥-厄瓜多尔(09:00)', time: '7月1日' },
    { tag: 'PREVIEW', text: 'M74 胜者巴拉圭 → M89 · M75 胜者摩洛哥 → M90 对加拿大', time: '路径' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 赛程 · Day 20 · 32强 3场',
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
      teaser: `32强 ${first.knockout_slot?.split(' · ')[0] || 'M78'} · ${first.home.name} vs ${first.away.name}`,
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
    todayDate: '2026-07-01',
    fixtures: todayMatches.map(m => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'R32',
    })),
    allResults: day19Results,
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 20 · 32强 3 场 · 科特迪瓦/法国/墨西哥' },
    yesterdayResults: day19Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 20 · 32强 3场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day20.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 20 rolled —', todayMatches.length, 'matches (m78, m77, m79)');
}
