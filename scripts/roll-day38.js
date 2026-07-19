/**
 * Day 38 rollover — m104（7月20日北京 · 决赛 西班牙 vs 阿根廷）
 * Run: node scripts/catchup-ko-results-m101-m103.js && node scripts/roll-day38.js && node scripts/enrich-day38.js && node scripts/apply-prediction-signals.js && node scripts/enrich-day38.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { lineupFromPrediction } = require('./pending-templates');
const { sortMatchesByKickoff } = require('./match-sort');
const { getReferee } = require('./referee-data-day38');

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
    date_bazi: { year: '丙午年', month: '甲午月', day: '己未日', day_summary: '己未日——土气当令', hour_home: '见各场', hour_home_element: '土' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function buildM104() {
  const xgH = 1.48, xgA = 1.42;
  const TS_REF = TS;
  return {
    id: 'm104', fifa_match_number: 104, fifa_match_id: '400021543',
    group: 'KO', round: 'FINAL', round_cn: '决赛', matchday: null,
    knockout_slot: 'M104 · 决赛 · M101胜(西班牙) vs M102胜(阿根廷)',
    knockout_next: '冠军 / 亚军',
    date: '2026-07-19', time: '15:00', time_local: '15:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '03:00', date_beijing: '7月20日', time_beijing_full: '北京时间 7月20日 03:00',
    venue: 'MetLife Stadium', city: 'East Rutherford, USA',
    note: '决赛 M104 · 西班牙 vs 阿根廷 · 纽约/新泽西 MetLife',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-3-3',
      home: 'Unai Simón; Carvajal, Cubarsí, Le Normand, Cucurella; Rodri, Fabian Ruiz, Pedri; Yamal, Oyarzabal, Nico Williams',
      away: 'E. Martínez; Molina, Romero, Lisandro, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Álvarez, Lautaro',
      source: '媒体预测',
    }),
    home: team('Spain', 'es', 1, 92, ['W', 'W', 'W', 'W', 'W'], 'Luis de la Fuente',
      { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', desc: '半决赛造点破法国 · 右路爆点', rating: 9.3 }),
    away: team('Argentina', 'ar', 2, 91, ['W', 'W', 'W', 'W', 'W'], 'Lionel Scaloni',
      { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', desc: '卫冕核心 · 半决赛两助攻', rating: 9.4 }),
    h2h: {
      home_wins: 6, draws: 2, away_wins: 6,
      recent: [
        { year: 2018, comp: '友谊赛', score: '6-1', winner: 'Spain' },
        { year: 1966, comp: '世界杯小组赛', score: '1-2', winner: 'Argentina' },
      ],
      note: '1966 世界杯小组赛阿根廷胜 · 2018 友谊赛西班牙大胜',
    },
    referee: { ...getReferee('m104'), updated: TS_REF },
    prediction: pred(xgH, xgA, '决赛 M104 · 西班牙 vs 阿根廷 · Yamal vs Messi · 泊松 1-1/1-0。', 68),
    weather: { temp: 29, humidity: 58, condition_cn: '新泽西午后多云', impact_summary: '开放球场 · 气候影响低', home_adapt: 86, away_adapt: 86 },
    mystic: mysticBrief(51, 49, '西班牙木火盛，阿根廷金土守。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM104()]);
}

module.exports = { buildM104, todayMatches: allTodayMatches };

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const recentResults = [
    { id: 'm101', home: 'France', away: 'Spain', score: '0-2', group: 'KO' },
    { id: 'm102', home: 'England', away: 'Argentina', score: '1-2', group: 'KO' },
    { id: 'm103', home: 'France', away: 'England', score: '4-6', group: 'KO' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方 · 决赛对阵已定 · Day 38 决赛开赛';
  RESULTS_DATA.breakingNews = [
    { tag: 'PREVIEW', text: '🏆 决赛：西班牙 vs 阿根廷 · 北京时间 7月20日 03:00 · MetLife', time: '7月20日' },
    { tag: 'OFFICIAL', text: '🏁 半决赛：西班牙2-0法国 · 阿根廷2-1英格兰', time: '路径' },
    { tag: 'OFFICIAL', text: '🥉 季军赛：英格兰6-4法国 · 英格兰获季军', time: '7月18日' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 官方赛程 · Day 38 · 决赛 西班牙 vs 阿根廷',
    phase: 'knockout',
    phase_cn: '淘汰赛 · 决赛',
    breakingNews: [
      { tag: 'UPDATE', text: '📊 推演升级：模型概要 + 淘汰赛晋级路径矩阵', time: '模型' },
      { tag: 'UPDATE', text: '🎯 淘汰赛大小球 R9 已开启：副项不打小 · ★冲突跳过 · 大信心仅绑★大小', time: 'Agent' },
      ...RESULTS_DATA.breakingNews,
    ],
    todayMatches,
    nextMatch: {
      round: 'FINAL', round_cn: '决赛', group: 'KO', matchday: null,
      date: first.date, time: first.time, time_local: first.time_local, timezone: first.timezone,
      time_beijing: first.time_beijing, date_beijing: first.date_beijing,
      time_beijing_full: first.time_beijing_full, venue: first.venue, city: first.city,
      home: { name: first.home.name, iso: first.home.iso, fifaRank: first.home.fifa_rank, rating: first.home.rating },
      away: { name: first.away.name, iso: first.away.iso, fifaRank: first.away.fifa_rank, rating: first.away.rating },
      teaser: `决赛 M104 · ${first.home.name} vs ${first.away.name}`,
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name, key_player_away: first.away.star?.name,
    },
    upcomingMatches: [],
  };

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-07-20',
    fixtures: todayMatches.map((m) => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'FINAL',
    })),
    allResults: recentResults,
    yesterdayResults: [{ id: 'm103', score: '4-6' }],
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 38 · 决赛 · 西班牙 vs 阿根廷' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 38 · 决赛 西班牙 vs 阿根廷\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day38.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 38 rolled —', todayMatches.length, 'match (m104)');
  todayMatches.forEach((m) => console.log(`   ${m.id} ${m.home.name} vs ${m.away.name} · ${m.time_beijing_full}`));
}
