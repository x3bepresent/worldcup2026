/**
 * Day 18 rollover — m73（6月29日北京 · 32强揭幕 · M73 A2 vs B2）
 * Run: node scripts/sync-day17-results.js && node scripts/roll-day18.js && node scripts/enrich-day18.js && node scripts/apply-prediction-signals.js
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

/** 32强后续场次预览（按北京时间） */
const R32_PREVIEW = [
  { no: 74, id: 'm74', home: 'Germany', away: 'Paraguay', date_beijing: '6月30日', time_beijing: '04:30', venue: 'Gillette Stadium', city: '波士顿', slot: 'E1 vs 3rd' },
  { no: 76, id: 'm76', home: 'Brazil', away: 'Japan', date_beijing: '6月30日', time_beijing: '01:00', venue: 'NRG Stadium', city: '休斯顿', slot: 'C1 vs F2' },
  { no: 75, id: 'm75', home: 'Netherlands', away: 'Morocco', date_beijing: '6月30日', time_beijing: '09:00', venue: 'Estadio BBVA', city: '蒙特雷', slot: 'F1 vs C2' },
  { no: 77, id: 'm77', home: 'France', away: 'Sweden', date_beijing: '7月1日', time_beijing: '05:00', venue: 'MetLife Stadium', city: '纽约/新泽西', slot: 'I1 vs 3rd' },
  { no: 78, id: 'm78', home: "Côte d'Ivoire", away: 'Norway', date_beijing: '7月1日', time_beijing: '01:00', venue: 'AT&T Stadium', city: '达拉斯', slot: 'E2 vs I2' },
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '戊戌日', day_summary: '戊戌日——土旺相制', hour_home: '见各场', hour_home_element: '土' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function buildM73() {
  const xgH = 0.92, xgA = 1.18;
  return {
    id: 'm73',
    fifa_match_number: 73,
    fifa_match_id: '400021518',
    group: 'KO',
    round: 'R32',
    round_cn: '32强',
    matchday: null,
    knockout_slot: 'M73 · A组亚军 vs B组亚军',
    knockout_next: '胜者 → M90（16强 · 对 M75 胜者）',
    source_rank_home: 'A2',
    source_rank_away: 'B2',
    date: '2026-06-28',
    time: '12:00',
    time_local: '12:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '03:00',
    date_beijing: '6月29日',
    time_beijing_full: '北京时间 6月29日 03:00',
    venue: 'SoFi Stadium',
    city: 'Inglewood, USA',
    note: '32强 M73 · 南非 vs 加拿大 · 洛杉矶 · A2 vs B2',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Williams; Mobbie, Mokoena, Xoki; Teboho, Mashego; Tau, Zwane, Appollis; Foster',
      away: 'St. Clair; Johnston, Miller, Cornelius; Buchanan, Eustaquio, Kone; Laryea, David, Davies; Larin',
      source: 'ESPN 预测',
    }),
    home: team('South Africa', 'za', 59, 65, ['L', 'W', 'D', 'W', 'D'], 'Hugo Broos',
      { name: 'Teboho Mokoena', pos: 'CDM', club: 'Sundowns', desc: 'A 组次席 · 4 分出线', rating: 7.8 }),
    away: team('Canada', 'ca', 27, 78, ['W', 'D', 'L', 'W', 'D'], 'Jesse Marsch',
      { name: 'Alphonso Davies', pos: 'LB', club: 'Bayern', desc: 'B 组次席 · 8 球小组', rating: 8.6 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2024, comp: '友谊赛', score: '0-3', winner: 'Canada' }], note: '加拿大友谊赛占优' },
    referee: pendingReferee('FIFA Match 73 · João Pinheiro（葡萄牙）· 32强揭幕战'),
    prediction: pred(xgH, xgA, '32强 M73 · 南非 A2（4 分 · 2 失球）vs 加拿大 B2（4 分 · 8 进球）· 淘汰赛平局概率抬升 · 泊松 1-1/0-1 · 加时/点球规则生效。', 68),
    weather: { temp: 26, humidity: 55, condition_cn: '洛杉矶夏夜', impact_summary: '气候影响低', home_adapt: 78, away_adapt: 82 },
    mystic: mysticBrief(42, 58, '加拿大金水略旺，南非土守反击。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM73()]);
}

module.exports = {
  buildM73,
  todayMatches: allTodayMatches,
  R32_PREVIEW,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day17Results = [
    { id: 'm67', home: 'Panama', away: 'England', score: '0-2', group: 'L' },
    { id: 'm68', home: 'Croatia', away: 'Ghana', score: '2-1', group: 'L' },
    { id: 'm69', home: 'Algeria', away: 'Austria', score: '3-3', group: 'J' },
    { id: 'm70', home: 'Jordan', away: 'Argentina', score: '1-3', group: 'J' },
    { id: 'm71', home: 'Colombia', away: 'Portugal', score: '0-0', group: 'K' },
    { id: 'm72', home: 'Congo DR', away: 'Uzbekistan', score: '3-1', group: 'K' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 17 完结 · Day 18 32强预览';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 小组赛收官：阿根廷/哥伦比亚/英格兰头名 · 48→32 强对阵已定', time: '6月28日' },
    { tag: 'PREVIEW', text: '⚔️ 6月29日 03:00 32强揭幕 · 南非 vs 加拿大（M73 · A2 vs B2）· 洛杉矶', time: '今日赛程' },
    { tag: 'PREVIEW', text: '📅 6月30日：德国-巴拉圭 · 巴西-日本 · 荷兰-摩洛哥 · 32强连战', time: '明日预告' },
    { tag: 'PREVIEW', text: 'M73 胜者 → 16强 M90 · 对 M75 胜者（荷兰/摩洛哥走廊）', time: '路径' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 赛程 · Day 18 · 32强揭幕（M73）',
    phase: 'knockout',
    phase_cn: '淘汰赛 · 32强',
    breakingNews: RESULTS_DATA.breakingNews,
    todayMatches,
    nextMatch: {
      round: 'R32',
      round_cn: '32强',
      group: 'KO',
      matchday: null,
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
      teaser: '32强 M73 · 南非 vs 加拿大 · A2 vs B2',
      home_win: p0.home_win,
      draw: p0.draw,
      away_win: p0.away_win,
      predicted_score: p0.score,
      key_player_home: first.home.star?.name || 'Teboho Mokoena',
      key_player_away: first.away.star?.name || 'Alphonso Davies',
    },
    upcomingMatches: R32_PREVIEW.map(m => ({
      id: m.id,
      round: 'R32',
      round_cn: '32强',
      group: 'KO',
      time_beijing_full: `北京时间 ${m.date_beijing} ${m.time_beijing}`,
      venue: m.venue,
      city: m.city,
      home: { name: m.home, iso: m.home === 'Germany' ? 'de' : m.home === 'Brazil' ? 'br' : m.home === 'Netherlands' ? 'nl' : m.home === 'France' ? 'fr' : m.home === 'Ivory Coast' ? 'ci' : 'py' },
      away: { name: m.away, iso: m.away === 'Paraguay' ? 'py' : m.away === 'Japan' ? 'jp' : m.away === 'Morocco' ? 'ma' : m.away === 'Sweden' ? 'se' : 'no' },
      teaser: `M${m.no} · ${m.slot}`,
    })),
  };

  const snaps = RESULTS_DATA.groupSnapshots || [];

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-29',
    fixtures: todayMatches.map(m => ({
      id: m.id,
      fifa_match_number: m.fifa_match_number,
      home: m.home.name,
      away: m.away.name,
      status: 'NS',
      home_score: null,
      away_score: null,
      group: 'KO',
      round: 'R32',
    })),
    allResults: day17Results,
    standings: snaps,
    injuries: { note: 'Day 18 · 32强揭幕 M73 · 南非 vs 加拿大 · 小组赛已收官' },
    yesterdayResults: day17Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 18 · 32强揭幕\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day18.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 18 rolled —', todayMatches.length, 'match (m73 · 32强揭幕)');
  console.log('   预览后续 32强：', R32_PREVIEW.map(m => `M${m.no}`).join(', '));
}
