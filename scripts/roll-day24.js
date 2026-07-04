/**
 * Day 24 rollover — m89–m90（7月5日北京 · 16强开赛 2场）
 * Run: node scripts/roll-day24.js && node scripts/enrich-day24.js && node scripts/apply-prediction-signals.js && node scripts/enrich-day24.js
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

const R16_PREVIEW = [
  { no: 91, id: 'm91', home: 'Brazil', away: 'Norway', date_beijing: '7月6日', time_beijing: '04:00', venue: 'MetLife Stadium', city: '纽约/新泽西', slot: 'M76胜 vs M78胜' },
  { no: 92, id: 'm92', home: 'Mexico', away: 'England', date_beijing: '7月6日', time_beijing: '08:00', venue: 'Estadio Azteca', city: '墨西哥城', slot: 'M79胜 vs M80胜' },
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '甲辰日', day_summary: '甲辰日——木土相制', hour_home: '见各场', hour_home_element: '木' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function isoFor(name) {
  const m = {
    Paraguay: 'py', France: 'fr', Canada: 'ca', Morocco: 'ma',
    Brazil: 'br', Norway: 'no', Mexico: 'mx', England: 'gb-eng',
  };
  return m[name] || 'xx';
}

function buildM90() {
  const xgH = 1.15, xgA = 1.35;
  return {
    id: 'm90', fifa_match_number: 90, fifa_match_id: '400021530',
    group: 'KO', round: 'R16', round_cn: '16强', matchday: null,
    knockout_slot: 'M90 · 16强 · M73胜(加拿大) vs M75胜(摩洛哥)',
    knockout_next: '胜者 → M97（8强 · 对 M89 胜者）',
    date: '2026-07-04', time: '12:00', time_local: '12:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '01:00', date_beijing: '7月5日', time_beijing_full: '北京时间 7月5日 01:00',
    venue: 'NRG Stadium', city: 'Houston, USA',
    note: '16强 M90 · 加拿大 vs 摩洛哥 · 休斯顿',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-3-3',
      home: 'Crépeau; Johnston, Vitória, Cornelius, Davies; Koné, Eustáquio, Buchanan; Larin, J. David, Shaffelburg',
      away: 'Bounou; Hakimi, Aguerd, Saïss, Mazraoui; Amrabat, Ounahi, Amallah; Brahim Díaz, En-Nesyri, Ziyech',
      source: '媒体预测',
    }),
    home: team('Canada', 'ca', 40, 77, ['W', 'D', 'W', 'W', 'L'], 'Jesse Marsch',
      { name: 'Alphonso Davies', pos: 'LB', club: 'Real Madrid', desc: 'B 组次席 · 左路引擎', rating: 8.4 }),
    away: team('Morocco', 'ma', 13, 84, ['W', 'W', 'D', 'W', 'W'], 'Walid Regragui',
      { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', desc: '点球淘汰荷兰 · 右路核心', rating: 8.6 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2022, comp: '世界杯', score: '1-2', winner: 'Morocco' }], note: '2022 小组赛摩洛哥 2-1' },
    referee: pendingReferee('FIFA Match 90 · 待官方确认'),
    prediction: pred(xgH, xgA, '16强 M90 · 加拿大 vs 摩洛哥 · Davies vs Hakimi 边路对攻 · 泊松 1-1/1-0。', 68),
    weather: { temp: 33, humidity: 62, condition_cn: '休斯顿午后高温', impact_summary: '封闭空调', home_adapt: 84, away_adapt: 85 },
    mystic: mysticBrief(46, 54, '加拿大木气升，摩洛哥火金锐。'),
  };
}

function buildM89() {
  const xgH = 0.80, xgA = 1.90;
  return {
    id: 'm89', fifa_match_number: 89, fifa_match_id: '400021533',
    group: 'KO', round: 'R16', round_cn: '16强', matchday: null,
    knockout_slot: 'M89 · 16强 · M74胜(巴拉圭) vs M77胜(法国)',
    knockout_next: '胜者 → M97（8强 · 对 M90 胜者）',
    date: '2026-07-04', time: '17:00', time_local: '17:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '05:00', date_beijing: '7月5日', time_beijing_full: '北京时间 7月5日 05:00',
    venue: 'Lincoln Financial Field', city: 'Philadelphia, USA',
    note: '16强 M89 · 巴拉圭 vs 法国 · 费城',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Coronel; Espínola, Gómez, Balbuena, Alonso; Cubas, Villasanti; Almirón, Enciso, Sosa; Sanabria',
      away: 'Maignan; Koundé, Saliba, Upamecano, T. Hernández; Tchouaméni, Camavinga; Dembélé, Griezmann, Mbappé; Kolo Muani',
      source: '媒体预测',
    }),
    home: team('Paraguay', 'py', 45, 74, ['W', 'D', 'D', 'W', 'D'], 'Gustavo Alfaro',
      { name: 'Julio Enciso', pos: 'AM', club: 'Brighton', desc: '点球淘汰德国 · 前场爆点', rating: 7.6 }),
    away: team('France', 'fr', 2, 91, ['W', 'W', 'W', 'D', 'W'], 'Didier Deschamps',
      { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', desc: '锋线核心 · 队史射手王', rating: 9.4 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '大赛首次交锋' },
    referee: pendingReferee('FIFA Match 89 · 待官方确认'),
    prediction: pred(xgH, xgA, '16强 M89 · 巴拉圭 vs 法国 · Alfaro 铁桶 vs 法国豪华锋线 · 泊松 0-2/1-2。', 74),
    weather: { temp: 29, humidity: 66, condition_cn: '费城夏夜', impact_summary: '开放球场', home_adapt: 84, away_adapt: 85 },
    mystic: mysticBrief(30, 70, '巴拉圭土守，法国火木盛。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM90(), buildM89()]);
}

module.exports = {
  buildM89, buildM90,
  todayMatches: allTodayMatches,
  R16_PREVIEW,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day23Results = [
    { id: 'm86', home: 'Argentina', away: 'Cape Verde', score: '3-2', group: 'KO' },
    { id: 'm87', home: 'Colombia', away: 'Ghana', score: '1-0', group: 'KO' },
    { id: 'm88', home: 'Australia', away: 'Egypt', score: '1-1', group: 'KO' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 23 完结 · Day 24 16强开赛 2场';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: "🏁 M86：阿根廷 常规1-1→加时3-2 佛得角 · Messi 29' · 晋级16强", time: '7月4日' },
    { tag: 'OFFICIAL', text: "🏁 M87：哥伦比亚 1-0 加纳 · Arias 14' · 晋级16强", time: '7月4日' },
    { tag: 'OFFICIAL', text: '🏁 M88：澳大利亚 1-1 埃及 · 点球(4-2)埃及晋级', time: '7月4日' },
    { tag: 'PREVIEW', text: '⚔️ 16强 7/5：加拿大-摩洛哥(01:00) · 巴拉圭-法国(05:00)', time: '7月5日' },
    { tag: 'PREVIEW', text: '16强续战 7/6：巴西-挪威(04:00) · 墨西哥-英格兰(08:00)', time: '路径' },
    { tag: 'UPDATE', text: '📊 Day23 Agent 双选已全部结算（按90分钟）', time: 'Agent' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 官方赛程 · Day 24 · 16强开赛 2场',
    phase: 'knockout',
    phase_cn: '淘汰赛 · 16强',
    breakingNews: RESULTS_DATA.breakingNews,
    todayMatches,
    nextMatch: {
      round: 'R16', round_cn: '16强', group: 'KO', matchday: null,
      date: first.date, time: first.time, time_local: first.time_local, timezone: first.timezone,
      time_beijing: first.time_beijing, date_beijing: first.date_beijing,
      time_beijing_full: first.time_beijing_full, venue: first.venue, city: first.city,
      home: { name: first.home.name, iso: first.home.iso, fifaRank: first.home.fifa_rank, rating: first.home.rating },
      away: { name: first.away.name, iso: first.away.iso, fifaRank: first.away.fifa_rank, rating: first.away.rating },
      teaser: `16强 ${first.knockout_slot?.split(' · ')[0] || 'M90'} · ${first.home.name} vs ${first.away.name}`,
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name, key_player_away: first.away.star?.name,
    },
    upcomingMatches: [
      ...todayMatches.slice(1).map((m) => ({
        id: m.id, round: 'R16', round_cn: '16强', group: 'KO',
        time_beijing_full: m.time_beijing_full, venue: m.venue, city: m.city,
        home: { name: m.home.name, iso: m.home.iso }, away: { name: m.away.name, iso: m.away.iso },
        teaser: m.knockout_slot?.split(' · ')[0] || m.id,
      })),
      ...R16_PREVIEW.map((m) => ({
        id: m.id, round: 'R16', round_cn: '16强', group: 'KO',
        time_beijing_full: `北京时间 ${m.date_beijing} ${m.time_beijing}`,
        venue: m.venue, city: m.city,
        home: { name: m.home, iso: isoFor(m.home) }, away: { name: m.away, iso: isoFor(m.away) },
        teaser: `M${m.no} · ${m.slot}`,
      })),
    ],
  };

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-07-05',
    fixtures: todayMatches.map((m) => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'R16',
    })),
    allResults: day23Results,
    yesterdayResults: day23Results.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 24 · 法国/摩洛哥/加拿大/巴拉圭 · 16强开赛' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 24 · 16强开赛 2场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day24.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 24 rolled —', todayMatches.length, 'matches (m89, m90)');
  todayMatches.forEach((m) => console.log(`   ${m.id} ${m.home.name} vs ${m.away.name} · ${m.time_beijing_full}`));
}
