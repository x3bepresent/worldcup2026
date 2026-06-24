/**
 * Day 14 rollover preview — m51/m52/m49/m50/m53/m54（6月25日北京 · A/B/C 组末轮 · 6场）
 * 与 schedule.html 对齐：同日还有 A 组 m53/m54（09:00 北京）
 * Run: node scripts/sync-day13-results.js && node scripts/roll-day14.js && node scripts/enrich-day14.js && node scripts/apply-prediction-signals.js
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '甲午日', day_summary: '甲午日——木火通明', hour_home: '见各场', hour_home_element: '火' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function buildM51() {
  const xgH = 1.55, xgA = 1.38;
  return {
    id: 'm51', fifa_match_number: 51, fifa_match_id: '400021451', group: 'B', matchday: 3,
    date: '2026-06-24', time: '12:00', time_local: '12:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '03:00', date_beijing: '6月25日', time_beijing_full: '北京时间 6月25日 03:00',
    venue: 'BC Place', city: 'Vancouver, Canada', note: 'B组末轮 · 瑞士 vs 加拿大 · 温哥华',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Kobel; Akanji, Schär, Rodríguez, Widmer; Xhaka, Freuler; Vargas, Rieder, Embolo; Ndoye',
      away: 'St. Clair; Johnston, Miller, Cornelius; Buchanan, Eustáquio, Osorio; Larin, David, Ahmed',
      source: 'TSN 预测',
    }),
    home: team('Switzerland', 'ch', 19, 77, ['W', 'D', 'W', 'W', 'D'], 'Murat Yakin',
      { name: 'Granit Xhaka', pos: 'CM', club: 'Sunderland', desc: 'B组榜首对话 · 各4分', rating: 8.2 }),
    away: team('Canada', 'ca', 17, 78, ['W', 'D', 'W', 'W', 'W'], 'Jesse Marsch',
      { name: 'Alphonso Davies', pos: 'LB', club: 'Bayern Munich', desc: '东道主末轮须抢分', rating: 8.5 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [{ year: 2022, comp: '友谊赛', score: '1-0', winner: 'Switzerland' }], note: '瑞士略占优' },
    referee: pendingReferee('FIFA Match 51 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'B组榜首对话各4分 · Xhaka vs Davies · 泊松 1-1/2-1。', 70),
    weather: { temp: 20, humidity: 65, condition_cn: '温哥华凉爽', impact_summary: '气候影响低', home_adapt: 82, away_adapt: 88 },
    mystic: mysticBrief(52, 48, '瑞士金水相济，加拿大木火主场；均分乱局宜稳守。'),
  };
}

function buildM52() {
  const xgH = 1.42, xgA = 1.05;
  return {
    id: 'm52', fifa_match_number: 52, fifa_match_id: '400021448', group: 'B', matchday: 3,
    date: '2026-06-24', time: '12:00', time_local: '12:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '03:00', date_beijing: '6月25日', time_beijing_full: '北京时间 6月25日 03:00',
    venue: 'Lumen Field', city: 'Seattle, USA', note: 'B组末轮 · 波黑 vs 卡塔尔 · 西雅图',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Begović; Dedić, Hadžikadunić, Karić; Tahirović, Stevanović; Bajraktarević, Krpić, Džeko; Prekazi',
      away: 'Barsham; Miguel, Ró-Ró, Aïeb; Hatem, Boudiaf; Afif, Al-Haydos, Muntari; Muntazir',
      source: 'ESPN 预测',
    }),
    home: team('Bosnia and Herzegovina', 'ba', 68, 68, ['L', 'D', 'W', 'L', 'W'], 'Sergej Barbarez',
      { name: 'Edin Džeko', pos: 'ST', club: 'Fiorentina', desc: '1分须取胜', rating: 8.0 }),
    away: team('Qatar', 'qa', 65, 60, ['L', 'D', 'L', 'W', 'L'], 'Luis Castro',
      { name: 'Akram Afif', pos: 'LW', club: 'Al-Sadd', desc: '1分垫底争出线', rating: 7.8 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '0-1', winner: 'Qatar' }], note: '卡塔尔友谊赛胜' },
    referee: pendingReferee('FIFA Match 52 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'B组垫底对话 · Džeko vs Afif · 泊松 2-1/1-1。', 68),
    weather: { temp: 19, humidity: 58, condition_cn: '西雅图凉爽', impact_summary: '气候影响低', home_adapt: 80, away_adapt: 78 },
    mystic: mysticBrief(58, 42, '波黑金土须破局，卡塔尔水火守势。'),
  };
}

function buildM49() {
  const xgH = 0.88, xgA = 1.95;
  return {
    id: 'm49', fifa_match_number: 49, fifa_match_id: '400021455', group: 'C', matchday: 3,
    date: '2026-06-24', time: '15:00', time_local: '15:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '06:00', date_beijing: '6月25日', time_beijing_full: '北京时间 6月25日 06:00',
    venue: 'Hard Rock Stadium', city: 'Miami Gardens, USA', note: 'C组末轮 · 苏格兰 vs 巴西 · 迈阿密',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Gordon; Hickey, Hanley, Souttar, Robertson; McTominay, McGregor; Gannon-Doak, McGinn, Christie; Adams',
      away: 'Alisson; Danilo, Marquinhos, Militão; Wendell, Casemiro; Vinícius, Paquetá, Rodrygo; Raphinha, Richarlison',
      source: 'BBC 预测',
    }),
    home: team('Scotland', 'gb-sct', 38, 71, ['L', 'W', 'D', 'W', 'D'], 'Steve Clarke',
      { name: 'Scott McTominay', pos: 'CM', club: 'Napoli', desc: '3分须抢分', rating: 8.2 }),
    away: team('Brazil', 'br', 5, 88, ['W', 'D', 'W', 'W', 'W'], 'Carlo Ancelotti',
      { name: 'Vinícius Jr', pos: 'LW', club: 'Real Madrid', desc: '4分领跑 · 末轮穿盘', rating: 9.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 2, recent: [{ year: 2022, comp: '友谊赛', score: '2-1', winner: 'Brazil' }], note: '巴西历史占优' },
    referee: pendingReferee('FIFA Match 49 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'C组末轮 · McTominay vs Vinícius · 巴西深盘 · 泊松 0-2/1-2。', 76),
    weather: { temp: 31, humidity: 78, condition_cn: '迈阿密湿热', impact_summary: '湿热高', home_adapt: 78, away_adapt: 85 },
    mystic: mysticBrief(32, 68, '巴西火土旺，苏格兰木水守势。'),
  };
}

function buildM50() {
  const xgH = 1.72, xgA = 0.72;
  return {
    id: 'm50', fifa_match_number: 50, fifa_match_id: '400021452', group: 'C', matchday: 3,
    date: '2026-06-24', time: '15:00', time_local: '15:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '06:00', date_beijing: '6月25日', time_beijing_full: '北京时间 6月25日 06:00',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta, USA', note: 'C组末轮 · 摩洛哥 vs 海地 · 亚特兰大',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-4-2',
      home: 'Bounou; Hakimi, Saïss, Aguerd; Mazraoui, Amrabat; Ziyech, Ounahi, Sabiri; En-Nesyri, Boufal',
      away: 'Duverger; Jean, Surpris, Gérard; Pierre, Dumond; Jean-Baptiste, Nazon, Arcus; Moreira',
      source: 'FotMob 预测',
    }),
    home: team('Morocco', 'ma', 13, 78, ['W', 'D', 'W', 'W', 'D'], 'Walid Regragui',
      { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', desc: '4分领跑 · 末轮穿盘', rating: 8.5 }),
    away: team('Haiti', 'ht', 87, 62, ['L', 'L', 'D', 'L', 'W'], 'Sébastien Migné',
      { name: 'Duckens Nazon', pos: 'ST', club: 'Pau', desc: '0分已出局', rating: 7.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 50 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '摩洛哥 4 分领跑 vs 海地 0 分 · Hakimi vs Nazon · 泊松 2-0/3-0。', 78),
    weather: { temp: 30, humidity: 72, condition_cn: '亚特兰大夏午', impact_summary: '湿热中等', home_adapt: 86, away_adapt: 74 },
    mystic: mysticBrief(72, 28, '摩洛哥金水相生宜穿盘，海地水木偏弱。'),
  };
}

function buildM53() {
  const xgH = 0.95, xgA = 1.88;
  return {
    id: 'm53', fifa_match_number: 53, fifa_match_id: '400021444', group: 'A', matchday: 3,
    date: '2026-06-24', time: '21:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '09:00', date_beijing: '6月25日', time_beijing_full: '北京时间 6月25日 09:00',
    venue: 'Estadio Azteca', city: 'Mexico City, Mexico', note: 'A组末轮 · 捷克 vs 墨西哥 · 阿兹特克',
    lineup: lineupFromPrediction({
      formation: '3-4-3 / 4-2-3-1',
      home: 'Staněk; Holes, Brabec, Zmrhal; Coufal, Souček, Sadílek; Schick, Chytil, Provod',
      away: 'Ochoa; Arteaga, Montes, Vasquez; Álvarez, Chávez; Lozano, Jiménez, Vega; Mora',
      source: 'ESPN 预测',
    }),
    home: team('Czechia', 'cz', 40, 72, ['L', 'D', 'W', 'W', 'L'], 'Ivan Hašek',
      { name: 'Patrik Schick', pos: 'ST', club: 'Bayer Leverkusen', desc: '1分须抢分', rating: 8.0 }),
    away: team('Mexico', 'mx', 12, 80, ['W', 'W', 'W', 'D', 'W'], 'Javier Aguirre',
      { name: 'Raúl Jiménez', pos: 'ST', club: 'Fulham', desc: '6分领跑 · 阿兹特克主场', rating: 8.5 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '0-1', winner: 'Mexico' }], note: '墨西哥略占优' },
    referee: pendingReferee('FIFA Match 53 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'A组末轮 · 墨西哥 6 分领跑 vs 捷克 1 分 · Schick vs Jiménez · 泊松 0-2/1-2。', 74),
    weather: { temp: 24, humidity: 55, condition_cn: '阿兹特克高原', impact_summary: '海拔2240m', home_adapt: 78, away_adapt: 92 },
    mystic: mysticBrief(28, 72, '墨西哥火土旺于高原主场，捷克须早破局。'),
  };
}

function buildM54() {
  const xgH = 1.12, xgA = 1.58;
  return {
    id: 'm54', fifa_match_number: 54, fifa_match_id: '400021445', group: 'A', matchday: 3,
    date: '2026-06-24', time: '21:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '09:00', date_beijing: '6月25日', time_beijing_full: '北京时间 6月25日 09:00',
    venue: 'Estadio BBVA', city: 'Monterrey, Mexico', note: 'A组末轮 · 南非 vs 韩国 · 蒙特雷',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Williams; Mphahlele, Xaba, Mokoena; Modiba, Mthethwa; Tau, Zwane, Baccus; Foster',
      away: 'Jo Hyeon-woo; Kim Min-jae, Kim Young-gwon; Hwang In-beom, Lee Kang-in; Son, Hwang Hee-chan; Cho',
      source: 'BBC 预测',
    }),
    home: team('South Africa', 'za', 58, 65, ['L', 'D', 'L', 'W', 'W'], 'Hugo Broos',
      { name: 'Percy Tau', pos: 'LW', club: 'Al Ahly', desc: '1分须抢分', rating: 7.4 }),
    away: team('South Korea', 'kr', 23, 76, ['W', 'L', 'W', 'D', 'W'], 'Hong Myung-bo',
      { name: '孙兴慜 Son Heung-min', pos: 'LW', club: 'LAFC', desc: '3分争出线', rating: 8.8 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '0-2', winner: 'South Korea' }], note: '韩国友谊赛胜' },
    referee: pendingReferee('FIFA Match 54 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'A组末轮 · 韩国 3 分 vs 南非 1 分 · 孙兴慜 vs Tau · 泊松 1-2/0-2。', 70),
    weather: { temp: 32, humidity: 58, condition_cn: '蒙特雷午后', impact_summary: '湿热中等', home_adapt: 76, away_adapt: 84 },
    mystic: mysticBrief(35, 65, '韩国金水相生略优，南非须防反击。'),
  };
}

function allTodayMatches() {
  return [buildM51(), buildM52(), buildM49(), buildM50(), buildM53(), buildM54()];
}

module.exports = {
  buildM51, buildM52, buildM49, buildM50, buildM53, buildM54,
  todayMatches: allTodayMatches,
};

function upsertFinished(list, matches) {
  const out = [...list];
  for (const m of matches) {
    const i = out.findIndex(x => x.id === m.id);
    const copy = JSON.parse(JSON.stringify(m));
    if (i >= 0) out[i] = copy;
    else out.push(copy);
  }
  return out;
}

function upsertGroup(snaps, group, label, table) {
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  return snaps;
}

if (require.main === module) {
  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  let toArchive = (MATCH_DATA.todayMatches || []).filter(m =>
    ['m47', 'm45', 'm46', 'm48'].includes(m.id) && m.actualResult?.status === 'FT',
  );
  if (toArchive.length < 4) {
    toArchive = ['m47', 'm45', 'm46', 'm48']
      .map(id => (RESULTS_DATA.finishedMatches || []).find(m => m.id === id)
        || (MATCH_DATA.todayMatches || []).find(m => m.id === id))
      .filter(Boolean);
  }

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 13 完结 · Day 14 预览';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 13：葡5-0乌 · 英0-0加 · 巴0-1克 · 哥1-0刚', time: '6月24日' },
    { tag: 'OFFICIAL', text: 'K组：哥伦比亚 6 分 · 葡萄牙 4 分 · L组：英/加各 4 分', time: '积分榜' },
    { tag: 'PREVIEW', text: '📅 6月25日 A/B/C末轮6场 · 瑞-加/波黑-卡(03:00) · 苏-巴/摩-海(06:00) · 捷-墨/南非-韩(09:00)', time: '今日赛程' },
    { tag: 'PREVIEW', text: 'A/B/C组末轮：墨西哥6分 · 瑞士加拿大各4分 · 巴西/摩洛哥领跑', time: '焦点' },
  ].slice(0, 12);

  RESULTS_DATA.finishedMatches = upsertFinished(RESULTS_DATA.finishedMatches || [], toArchive);

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'K', 'K组 · 第2轮后', [
    { team: 'Colombia', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 4, ga: 1 },
    { team: 'Portugal', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 6, ga: 1 },
    { team: 'Congo DR', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 2 },
    { team: 'Uzbekistan', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 8 },
  ]);
  snaps = upsertGroup(snaps, 'L', 'L组 · 第2轮后', [
    { team: 'England', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 2 },
    { team: 'Ghana', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 1, ga: 0 },
    { team: 'Croatia', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 1, ga: 4 },
    { team: 'Panama', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 2 },
  ]);
  RESULTS_DATA.groupSnapshots = snaps;

  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 赛程 · Day 14 preview · A/B/C 组末轮（6场）',
    breakingNews: [
      { tag: 'OFFICIAL', text: '🏁 昨日：葡5-0乌 · 英0-0加 · 巴0-1克 · 哥1-0刚 · C罗双响', time: '赛果回顾' },
      { tag: 'PREVIEW', text: '📅 今日6场 · 瑞-加/波黑-卡(03:00) · 苏-巴/摩-海(06:00) · 捷-墨/南非-韩(09:00)', time: '6月25日' },
      { tag: 'PREVIEW', text: 'A/B/C组末轮：墨西哥6分 · 瑞士加拿大各4分 · 巴西/摩洛哥领跑', time: '焦点' },
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
      teaser: 'B组末轮：瑞士 vs 加拿大 · 温哥华',
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name || 'Granit Xhaka',
      key_player_away: first.away.star?.name || 'Alphonso Davies',
    },
    upcomingMatches: todayMatches.slice(1).map(m => ({
      group: m.group, time_beijing_full: m.time_beijing_full, venue: m.venue, city: m.city,
      home: { name: m.home.name, iso: m.home.iso }, away: { name: m.away.name, iso: m.away.iso },
      teaser: m.note?.split(' · ')[0] || `${m.group}组`,
    })),
  };

  const day13Results = [
    { id: 'm47', home: 'Portugal', away: 'Uzbekistan', score: '5-0', group: 'K' },
    { id: 'm45', home: 'England', away: 'Ghana', score: '0-0', group: 'L' },
    { id: 'm46', home: 'Panama', away: 'Croatia', score: '0-1', group: 'L' },
    { id: 'm48', home: 'Colombia', away: 'Congo DR', score: '1-0', group: 'K' },
  ];

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-25',
    fixtures: todayMatches.map(m => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: m.group,
    })),
    allResults: day13Results,
    standings: snaps.filter(g => ['A', 'B', 'C', 'K', 'L', 'I', 'J'].includes(g.group)),
    injuries: { note: 'Day 14 · A/B/C组末轮6场 · 墨西哥6分 · 瑞士/加拿大各4分' },
    yesterdayResults: day13Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 14 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day14.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Archived:', toArchive.map(m => m.id).join(', '));
  console.log('✅ Day 14:', todayMatches.map(m => `#${m.fifa_match_number} ${m.home.name} vs ${m.away.name}`).join(' | '));
}
