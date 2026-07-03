/**
 * Day 23 rollover — m86–m88（7月4日北京 · 32强收官 3场）
 * Run: node scripts/roll-day23.js && node scripts/enrich-day23.js && node scripts/apply-prediction-signals.js
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
  { no: 89, id: 'm89', home: 'Germany', away: 'France', date_beijing: '7月5日', time_beijing: '05:00', venue: 'Lincoln Financial Field', city: '费城', slot: 'M74 vs M77' },
  { no: 90, id: 'm90', home: 'Canada', away: 'Netherlands', date_beijing: '7月5日', time_beijing: '01:00', venue: 'NRG Stadium', city: '休斯顿', slot: 'M73 vs M75' },
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '癸卯日', day_summary: '癸卯日——水木相生', hour_home: '见各场', hour_home_element: '木' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function isoFor(name) {
  const m = {
    Argentina: 'ar', 'Cape Verde': 'cv', Colombia: 'co', Ghana: 'gh',
    Australia: 'au', Egypt: 'eg', Germany: 'de', France: 'fr', Canada: 'ca', Netherlands: 'nl',
  };
  return m[name] || 'xx';
}

function buildM88() {
  const xgH = 1.45, xgA = 1.15;
  return {
    id: 'm88', fifa_match_number: 88, fifa_match_id: '400021515',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M88 · D组亚军 vs G组亚军',
    knockout_next: '胜者 → M95（16强 · 对 M86 胜者）',
    date: '2026-07-03', time: '13:00', time_local: '13:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '02:00', date_beijing: '7月4日', time_beijing_full: '北京时间 7月4日 02:00',
    venue: 'AT&T Stadium', city: 'Dallas, USA',
    note: '32强 M88 · 澳大利亚 vs 埃及 · 达拉斯',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Ryan; Atkinson, Souttar, Rowles, Behich; Irvine, Baccus; Goodwin, Metcalfe, Boyle; Duke',
      away: 'El Shenawy; Hany, Rabia, Hegazi, Ayman; Elneny, Hamdi; Trezeguet, Marmoush, Salah; Mostafa',
      source: '媒体预测',
    }),
    home: team('Australia', 'au', 24, 76, ['W', 'D', 'D', 'W', 'L'], 'Graham Arnold',
      { name: 'Mathew Ryan', pos: 'GK', club: 'Roma', desc: 'D 组亚军', rating: 7.8 }),
    away: team('Egypt', 'eg', 36, 75, ['W', 'D', 'D', 'W', 'D'], 'Hossam Hassan',
      { name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', desc: 'G 组亚军', rating: 8.8 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [{ year: 2017, comp: '友谊赛', score: '1-0', winner: 'Australia' }], note: '交锋少' },
    referee: pendingReferee('FIFA Match 88 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M88 · 澳大利亚 D2 vs 埃及 G2 · Salah 轴 · 泊松 1-1/2-1。', 65),
    weather: { temp: 32, humidity: 58, condition_cn: '达拉斯夏夜', impact_summary: '高温封闭', home_adapt: 85, away_adapt: 83 },
    mystic: mysticBrief(48, 52, '澳大利亚土旺，埃及火金韧。'),
  };
}

function buildM86() {
  const xgH = 2.35, xgA = 0.65;
  return {
    id: 'm86', fifa_match_number: 86, fifa_match_id: '400021521',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M86 · J组冠军 vs H组亚军',
    knockout_next: '胜者 → M95（16强 · 对 M88 胜者）',
    date: '2026-07-03', time: '18:00', time_local: '18:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '06:00', date_beijing: '7月4日', time_beijing_full: '北京时间 7月4日 06:00',
    venue: 'Hard Rock Stadium', city: 'Miami, USA',
    note: '32强 M86 · 阿根廷 vs 佛得角 · 迈阿密',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-4-2',
      home: 'Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Fernández, Mac Allister; Messi, Álvarez, Garnacho',
      away: 'Vozinha; Monteiro, Cabo, Ponck, Borges; Duarte, Monteiro; Mendes, Cabral, Ryan; Platini',
      source: '媒体预测',
    }),
    home: team('Argentina', 'ar', 1, 91, ['W', 'W', 'W', 'W', 'W'], 'Lionel Scaloni',
      { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', desc: 'J 组头名 9 分', rating: 9.2 }),
    away: team('Cape Verde', 'cv', 65, 68, ['D', 'D', 'D', 'W', 'D'], 'Bubista',
      { name: 'Ryan Mendes', pos: 'LW', club: 'Al Nasr', desc: 'H 组亚军 · 3 连平出线', rating: 7.2 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '首次大赛交锋' },
    referee: pendingReferee('FIFA Match 86 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M86 · 阿根廷 J1 vs 佛得角 H2 · 深盘 · 泊松 3-0/2-0。', 85),
    weather: { temp: 30, humidity: 75, condition_cn: '迈阿密晨场湿热', impact_summary: '湿热偏高', home_adapt: 88, away_adapt: 80 },
    mystic: mysticBrief(82, 18, '阿根廷火土旺，佛得角金水守。'),
  };
}

function buildM87() {
  const xgH = 1.72, xgA = 0.98;
  return {
    id: 'm87', fifa_match_number: 87, fifa_match_id: '400021517',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M87 · K组冠军 vs 加纳(3rd)',
    knockout_next: '胜者 → M96（16强 · 对 M85 胜者）',
    date: '2026-07-03', time: '20:30', time_local: '20:30 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '09:30', date_beijing: '7月4日', time_beijing_full: '北京时间 7月4日 09:30',
    venue: 'Arrowhead Stadium', city: 'Kansas City, USA',
    note: '32强 M87 · 哥伦比亚 vs 加纳 · 堪萨斯城 · FIFA 官方 DEIJL 池第3',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Mina; Muñoz, Sánchez, Lucumí, Mojica; Barrios, Lerma; Arias, James, Cuadrado; Borré',
      away: 'Ati-Zigi; Lamptey, Amartey, Djiku, Baba; Partey, Abdul; Kudus, Sulemana, Semenyo; Jordan',
      source: '媒体预测',
    }),
    home: team('Colombia', 'co', 12, 84, ['W', 'W', 'D', 'W', 'W'], 'Néstor Lorenzo',
      { name: 'James Rodríguez', pos: 'AM', club: 'León', desc: 'K 组头名', rating: 8.5 }),
    away: team('Ghana', 'gh', 70, 72, ['W', 'D', 'L', 'W', 'D'], 'Otto Addo',
      { name: 'Mohammed Kudus', pos: 'AM', club: 'West Ham', desc: 'DEIJL 池第3', rating: 8.0 }),
    h2h: { home_wins: 2, draws: 1, away_wins: 0, recent: [{ year: 2017, comp: '友谊赛', score: '2-1', winner: 'Colombia' }], note: '哥伦比亚历史占优' },
    referee: pendingReferee('FIFA Match 87 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M87 · 哥伦比亚 K1 vs 加纳(3rd) · James vs Kudus · 泊松 2-1/1-0。', 74),
    weather: { temp: 28, humidity: 62, condition_cn: '堪萨斯城夏午', impact_summary: '开放球场', home_adapt: 86, away_adapt: 84 },
    mystic: mysticBrief(58, 42, '哥伦比亚木火攻，加纳土金守。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM88(), buildM86(), buildM87()]);
}

module.exports = {
  buildM86, buildM87, buildM88,
  todayMatches: allTodayMatches,
  R16_PREVIEW,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day22Results = [
    { id: 'm84', home: 'Spain', away: 'Austria', score: '3-0', group: 'KO' },
    { id: 'm83', home: 'Portugal', away: 'Croatia', score: '2-1', group: 'KO' },
    { id: 'm85', home: 'Switzerland', away: 'Algeria', score: '2-0', group: 'KO' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 22 完结 · Day 23 32强收官 3场';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 M84：西班牙 3-0 奥地利 · Oyarzabal 双响 · 半场 1-0', time: '7月3日' },
    { tag: 'OFFICIAL', text: '🏁 M83：葡萄牙 2-1 克罗地亚 · Ronaldo 68\' · 半场 0-0', time: '7月3日' },
    { tag: 'OFFICIAL', text: '🏁 M85：瑞士 2-0 阿尔及利亚 · Embolo 10\' · 半场 1-0', time: '7月3日' },
    { tag: 'PREVIEW', text: '⚔️ 今日 3 场：澳大利亚-埃及(02:00) · 阿根廷-佛得角(06:00) · 哥伦比亚-加纳(09:30)', time: '7月4日' },
    { tag: 'PREVIEW', text: '32强收官 · 明日 7/5 起 16 强赛', time: '路径' },
    { tag: 'UPDATE', text: '📊 Day22 Agent 复盘已更新', time: 'Agent' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 官方赛程 · Day 23 · 32强收官 3场',
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
      teaser: `32强 ${first.knockout_slot?.split(' · ')[0] || 'M88'} · ${first.home.name} vs ${first.away.name}`,
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name, key_player_away: first.away.star?.name,
    },
    upcomingMatches: [
      ...todayMatches.slice(1).map((m) => ({
        id: m.id, round: 'R32', round_cn: '32强', group: 'KO',
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
    todayDate: '2026-07-04',
    fixtures: todayMatches.map((m) => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'R32',
    })),
    allResults: day22Results,
    yesterdayResults: day22Results.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 23 · 阿根廷/哥伦比亚/澳大利亚 · 32强收官' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 23 · 32强收官 3场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day23.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 23 rolled —', todayMatches.length, 'matches (m88, m86, m87)');
  todayMatches.forEach((m) => console.log(`   ${m.id} ${m.home.name} vs ${m.away.name} · ${m.time_beijing_full}`));
}
