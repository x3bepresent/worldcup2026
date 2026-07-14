/**
 * Day 34 rollover — m101（7月15日北京 · 半决赛 法国 vs 西班牙）
 * Run: node scripts/roll-day34.js && node scripts/enrich-day34.js && node scripts/apply-prediction-signals.js
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

const SF_PREVIEW = [
  { no: 102, id: 'm102', home: 'England', away: 'Argentina', date_beijing: '7月16日', time_beijing: '03:00', venue: 'Mercedes-Benz Stadium', city: '亚特兰大', slot: 'M99胜 vs M100胜' },
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '甲寅日', day_summary: '甲寅日——木气当令', hour_home: '见各场', hour_home_element: '木' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function isoFor(name) {
  const m = { France: 'fr', Spain: 'es', England: 'gb-eng', Argentina: 'ar' };
  return m[name] || 'xx';
}

function buildM101() {
  const xgH = 1.45, xgA = 1.55;
  return {
    id: 'm101', fifa_match_number: 101, fifa_match_id: '400021541',
    group: 'KO', round: 'SF', round_cn: '半决赛', matchday: null,
    knockout_slot: 'M101 · 半决赛 · M97胜(法国) vs M98胜(西班牙)',
    knockout_next: '胜者 → M104 决赛 · 负者 → M103 季军赛',
    date: '2026-07-14', time: '14:00', time_local: '14:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '03:00', date_beijing: '7月15日', time_beijing_full: '北京时间 7月15日 03:00',
    venue: 'AT&T Stadium', city: 'Arlington, USA',
    note: '半决赛 M101 · 法国 vs 西班牙 · 达拉斯',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Maignan; Koundé, Saliba, Upamecano, T. Hernández; Tchouaméni, Camavinga; Dembélé, Griezmann, Mbappé; Kolo Muani',
      away: 'Unai Simón; Carvajal, Cubarsí, Le Normand, Cucurella; Rodri, Fabian Ruiz; Pedri; Yamal, Morata, Nico Williams',
      source: '媒体预测',
    }),
    home: team('France', 'fr', 2, 91, ['W', 'W', 'W', 'W', 'W'], 'Didier Deschamps',
      { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', desc: '金靴领跑 · 2-0淘汰摩洛哥', rating: 9.5 }),
    away: team('Spain', 'es', 3, 90, ['W', 'W', 'W', 'W', 'W'], 'Luis de la Fuente',
      { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', desc: '右路爆点 · 淘汰葡萄牙/比利时', rating: 9.2 }),
    h2h: {
      home_wins: 1, draws: 1, away_wins: 1,
      recent: [
        { year: 2021, comp: '欧国联', score: '2-1', winner: 'France' },
        { year: 2024, comp: '欧洲杯半决赛', score: '1-2', winner: 'Spain' },
      ],
      note: '欧洲杯2024半决赛西班牙2-1法国',
    },
    referee: pendingReferee('FIFA Match 101 · 待官方确认'),
    prediction: pred(xgH, xgA, '半决赛 M101 · 法国 vs 西班牙 · Mbappé vs Yamal · 泊松 1-1/1-2。', 70),
    weather: { temp: 31, humidity: 54, condition_cn: '达拉斯午后高温', impact_summary: '可开合屋顶', home_adapt: 86, away_adapt: 85 },
    mystic: mysticBrief(48, 52, '法国火金锐，西班牙木火盛。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM101()]);
}

module.exports = { buildM101, todayMatches: allTodayMatches, SF_PREVIEW };

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const recentResults = [
    { id: 'm97', home: 'France', away: 'Morocco', score: '2-0', group: 'KO' },
    { id: 'm98', home: 'Spain', away: 'Belgium', score: '2-1', group: 'KO' },
    { id: 'm99', home: 'Norway', away: 'England', score: '1-2', group: 'KO' },
    { id: 'm100', home: 'Argentina', away: 'Switzerland', score: '3-1', group: 'KO' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方 · 4强对阵已定 · Day 34 半决赛开赛';
  RESULTS_DATA.breakingNews = [
    { tag: 'PREVIEW', text: '⚔️ 半决赛：法国 vs 西班牙 · 北京时间 7月15日 03:00 · 达拉斯 AT&T', time: '7月15日' },
    { tag: 'PREVIEW', text: '⚔️ 半决赛：英格兰 vs 阿根廷 · 北京时间 7月16日 03:00 · 亚特兰大', time: '7月16日' },
    { tag: 'OFFICIAL', text: '🏁 8强：法国2-0摩洛哥 · 西班牙2-1比利时 · 挪威加时1-2英格兰 · 阿根廷加时3-1瑞士', time: '路径' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 官方赛程 · Day 34 · 半决赛 法国 vs 西班牙',
    phase: 'knockout',
    phase_cn: '淘汰赛 · 半决赛',
    breakingNews: RESULTS_DATA.breakingNews,
    todayMatches,
    nextMatch: {
      round: 'SF', round_cn: '半决赛', group: 'KO', matchday: null,
      date: first.date, time: first.time, time_local: first.time_local, timezone: first.timezone,
      time_beijing: first.time_beijing, date_beijing: first.date_beijing,
      time_beijing_full: first.time_beijing_full, venue: first.venue, city: first.city,
      home: { name: first.home.name, iso: first.home.iso, fifaRank: first.home.fifa_rank, rating: first.home.rating },
      away: { name: first.away.name, iso: first.away.iso, fifaRank: first.away.fifa_rank, rating: first.away.rating },
      teaser: `半决赛 M101 · ${first.home.name} vs ${first.away.name}`,
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name, key_player_away: first.away.star?.name,
    },
    upcomingMatches: SF_PREVIEW.map((m) => ({
      id: m.id, round: 'SF', round_cn: '半决赛', group: 'KO',
      time_beijing_full: `北京时间 ${m.date_beijing} ${m.time_beijing}`,
      venue: m.venue, city: m.city,
      home: { name: m.home, iso: isoFor(m.home) }, away: { name: m.away, iso: isoFor(m.away) },
      teaser: `M${m.no} · ${m.slot}`,
    })),
  };

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-07-15',
    fixtures: todayMatches.map((m) => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'SF',
    })),
    allResults: recentResults,
    yesterdayResults: recentResults.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 34 · 半决赛 · 法国 vs 西班牙' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 34 · 半决赛 法国 vs 西班牙\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day34.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 34 rolled —', todayMatches.length, 'match (m101)');
  todayMatches.forEach((m) => console.log(`   ${m.id} ${m.home.name} vs ${m.away.name} · ${m.time_beijing_full}`));
}
