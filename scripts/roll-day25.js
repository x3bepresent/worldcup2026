/**
 * Day 25 rollover — m91–m92（7月6日北京 · 16强续战 2场）
 * Run: node scripts/roll-day25.js && node scripts/enrich-day25.js && node scripts/apply-prediction-signals.js
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
  { no: 93, id: 'm93', home: 'Portugal', away: 'Spain', date_beijing: '7月7日', time_beijing: '03:00', venue: 'AT&T Stadium', city: '达拉斯', slot: 'M83胜 vs M84胜' },
  { no: 94, id: 'm94', home: 'USA', away: 'Belgium', date_beijing: '7月7日', time_beijing: '08:00', venue: 'Lumen Field', city: '西雅图', slot: 'M81胜 vs M82胜' },
  { no: 95, id: 'm95', home: 'Argentina', away: 'Egypt', date_beijing: '7月8日', time_beijing: '00:00', venue: 'Mercedes-Benz Stadium', city: '亚特兰大', slot: 'M86胜 vs M88胜' },
  { no: 96, id: 'm96', home: 'Switzerland', away: 'Colombia', date_beijing: '7月8日', time_beijing: '04:00', venue: 'BC Place', city: '温哥华', slot: 'M85胜 vs M87胜' },
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '乙巳日', day_summary: '乙巳日——木火相生', hour_home: '见各场', hour_home_element: '火' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function isoFor(name) {
  const m = {
    Brazil: 'br', Norway: 'no', Mexico: 'mx', England: 'gb-eng',
    Portugal: 'pt', Spain: 'es', USA: 'us', Belgium: 'be',
    Argentina: 'ar', Egypt: 'eg', Switzerland: 'ch', Colombia: 'co',
  };
  return m[name] || 'xx';
}

function buildM91() {
  const xgH = 1.75, xgA = 0.95;
  return {
    id: 'm91', fifa_match_number: 91, fifa_match_id: '400021532',
    group: 'KO', round: 'R16', round_cn: '16强', matchday: null,
    knockout_slot: 'M91 · 16强 · M76胜(巴西) vs M78胜(挪威)',
    knockout_next: '胜者 → M99（8强 · 对 M92 胜者）',
    date: '2026-07-05', time: '16:00', time_local: '16:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '04:00', date_beijing: '7月6日', time_beijing_full: '北京时间 7月6日 04:00',
    venue: 'MetLife Stadium', city: 'East Rutherford, USA',
    note: '16强 M91 · 巴西 vs 挪威 · 纽约/新泽西',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Alisson; Danilo, Marquinhos, Bento, Wendell; Guimarães, Paquetá; Raphinha, Rodrygo, Vinícius Júnior; Richarlison',
      away: 'Nyland; Ryerson, Høibråten, Nouri, Meling; Berg, Nygren; Ødegaard, Berge, Haaland; Ekitiké',
      source: '媒体预测',
    }),
    home: team('Brazil', 'br', 5, 88, ['W', 'W', 'D', 'W', 'W'], 'Dorival Júnior',
      { name: 'Vinícius Júnior', pos: 'LW', club: 'Real Madrid', desc: 'C组冠军 · 左路爆点', rating: 9.0 }),
    away: team('Norway', 'no', 42, 76, ['W', 'L', 'W', 'W', 'W'], 'Ståle Solbakken',
      { name: 'Erling Haaland', pos: 'ST', club: 'Man City', desc: '2-1 淘汰科特迪瓦 · 终结核心', rating: 9.2 }),
    h2h: { home_wins: 2, draws: 1, away_wins: 0, recent: [{ year: 2022, comp: '友谊赛', score: '4-0', winner: 'Brazil' }], note: '巴西历史占优' },
    referee: pendingReferee('FIFA Match 91 · 待官方确认'),
    prediction: pred(xgH, xgA, '16强 M91 · 巴西 vs 挪威 · Vini/Haaland 对位 · 泊松 2-1/2-0。', 73),
    weather: { temp: 28, humidity: 68, condition_cn: '新泽西夏夜', impact_summary: '开放球场', home_adapt: 85, away_adapt: 84 },
    mystic: mysticBrief(62, 38, '巴西火木盛，挪威金水锐。'),
  };
}

function buildM92() {
  const xgH = 1.35, xgA = 1.45;
  return {
    id: 'm92', fifa_match_number: 92, fifa_match_id: '400021531',
    group: 'KO', round: 'R16', round_cn: '16强', matchday: null,
    knockout_slot: 'M92 · 16强 · M79胜(墨西哥) vs M80胜(英格兰)',
    knockout_next: '胜者 → M99（8强 · 对 M91 胜者）',
    date: '2026-07-05', time: '20:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '08:00', date_beijing: '7月6日', time_beijing_full: '北京时间 7月6日 08:00',
    venue: 'Estadio Azteca', city: 'Mexico City, Mexico',
    note: '16强 M92 · 墨西哥 vs 英格兰 · 墨西哥城',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Acevedo; Montes, Héctor Moreno, Vásquez, Arteaga; Chávez, Pizarro, Lozano; Quiñones, Jiménez, Vega',
      away: 'Pickford; Walker, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, Palmer; Kane',
      source: '媒体预测',
    }),
    home: team('Mexico', 'mx', 14, 82, ['W', 'W', 'D', 'W', 'W'], 'Javier Aguirre',
      { name: 'Raúl Jiménez', pos: 'ST', club: 'Fulham', desc: 'A组冠军 · 主场Azteca支点', rating: 8.1 }),
    away: team('England', 'gb-eng', 4, 87, ['W', 'W', 'W', 'W', 'W'], 'Gareth Southgate',
      { name: 'Harry Kane', pos: 'ST', club: 'Bayern', desc: 'L组冠军 · 终结+组织', rating: 9.0 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 2, recent: [{ year: 2018, comp: '友谊赛', score: '0-1', winner: 'England' }], note: '英格兰近绩占优' },
    referee: pendingReferee('FIFA Match 92 · 待官方确认'),
    prediction: pred(xgH, xgA, '16强 M92 · 墨西哥 vs 英格兰 · Azteca 主场 vs 三狮锋线 · 泊松 1-1/1-2。', 70),
    weather: { temp: 22, humidity: 55, condition_cn: '墨西哥城高原夜场', impact_summary: '海拔2240m', home_adapt: 88, away_adapt: 82 },
    mystic: mysticBrief(48, 52, '墨西哥土火守，英格兰金水进。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM91(), buildM92()]);
}

module.exports = {
  buildM91, buildM92,
  todayMatches: allTodayMatches,
  R16_PREVIEW,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day24Results = [
    { id: 'm89', home: 'Paraguay', away: 'France', score: '0-1', group: 'KO' },
    { id: 'm90', home: 'Canada', away: 'Morocco', score: '0-3', group: 'KO' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 24 完结 · Day 25 16强续战 2场';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: "🏁 M89：巴拉圭 0-1 法国 · Mbappé 70'点球 · 法国晋级8强", time: '7月5日' },
    { tag: 'OFFICIAL', text: "🏁 M90：加拿大 0-3 摩洛哥 · Ounahi 双响 · 摩洛哥晋级8强", time: '7月5日' },
    { tag: 'PREVIEW', text: '⚔️ 16强 7/6：巴西-挪威(04:00) · 墨西哥-英格兰(08:00)', time: '7月6日' },
    { tag: 'PREVIEW', text: '8强预告：法国 vs 摩洛哥(7/9) · 巴西/挪威 vs 墨西哥/英格兰(7/12)', time: '路径' },
    { tag: 'UPDATE', text: '📊 Day24 Agent 双选已全部结算', time: 'Agent' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 官方赛程 · Day 25 · 16强续战 2场',
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
      teaser: `16强 ${first.knockout_slot?.split(' · ')[0] || 'M91'} · ${first.home.name} vs ${first.away.name}`,
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
    todayDate: '2026-07-06',
    fixtures: todayMatches.map((m) => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'R16',
    })),
    allResults: day24Results,
    yesterdayResults: day24Results.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 25 · 巴西/挪威/墨西哥/英格兰 · 16强续战' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 25 · 16强续战 2场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day25.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 25 rolled —', todayMatches.length, 'matches (m91, m92)');
  todayMatches.forEach((m) => console.log(`   ${m.id} ${m.home.name} vs ${m.away.name} · ${m.time_beijing_full}`));
}
