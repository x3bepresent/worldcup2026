/**
 * Day 22 rollover — m83–m85（7月3日北京 · 32强 3场 · FIFA 官方对阵）
 * Run: node scripts/roll-day22.js && node scripts/enrich-day22.js && node scripts/apply-prediction-signals.js
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
  { no: 86, id: 'm86', home: 'Argentina', away: 'Cape Verde', date_beijing: '7月4日', time_beijing: '06:00', venue: 'Hard Rock Stadium', city: '迈阿密', slot: 'J1 vs H2' },
  { no: 87, id: 'm87', home: 'Colombia', away: 'Ecuador', date_beijing: '7月4日', time_beijing: '09:30', venue: 'Arrowhead Stadium', city: '堪萨斯城', slot: 'K1 vs 3rd(DEIJL)' },
  { no: 88, id: 'm88', home: 'Australia', away: 'Egypt', date_beijing: '7月4日', time_beijing: '02:00', venue: 'AT&T Stadium', city: '达拉斯', slot: 'D2 vs G2' },
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '壬寅日', day_summary: '壬寅日——水木相生', hour_home: '见各场', hour_home_element: '木' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function isoFor(name) {
  const m = {
    Portugal: 'pt', Croatia: 'hr', Spain: 'es', Austria: 'at',
    Switzerland: 'ch', Algeria: 'dz', Argentina: 'ar', 'Cape Verde': 'cv',
    Colombia: 'co', Ecuador: 'ec', Australia: 'au', Egypt: 'eg',
  };
  return m[name] || 'xx';
}

function buildM84() {
  const xgH = 2.18, xgA = 0.72;
  return {
    id: 'm84', fifa_match_number: 84, fifa_match_id: '400021519',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M84 · H组冠军 vs J组亚军',
    knockout_next: '胜者 → M93（16强 · 对 M83 胜者）',
    date: '2026-07-02', time: '12:00', time_local: '12:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '03:00', date_beijing: '7月3日', time_beijing_full: '北京时间 7月3日 03:00',
    venue: 'SoFi Stadium', city: 'Los Angeles, USA',
    note: '32强 M84 · 西班牙 vs 奥地利 · 洛杉矶',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Simón; Carvajal, Laporte, Le Normand, Cucurella; Rodri, Zubimendi; Yamal, Olmo, Williams; Morata',
      away: 'Schlager; Laimer, Alaba, Danso, Mwene; Seiwald, Sabitzer; Baumgartner, Grüll, Laimer; Gregoritsch',
      source: '媒体预测',
    }),
    home: team('Spain', 'es', 8, 90, ['W', 'W', 'D', 'W', 'W'], 'Luis de la Fuente',
      { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', desc: 'H 组头名', rating: 9.0 }),
    away: team('Austria', 'at', 22, 78, ['W', 'L', 'D', 'W', 'L'], 'Ralf Rangnick',
      { name: 'Marcel Sabitzer', pos: 'CM', club: 'Dortmund', desc: 'J 组亚军', rating: 8.0 }),
    h2h: { home_wins: 3, draws: 1, away_wins: 0, recent: [{ year: 2023, comp: '欧国联', score: '2-1', winner: 'Spain' }], note: '西班牙近年占优' },
    referee: pendingReferee('FIFA Match 84 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M84 · 西班牙 H1 vs 奥地利 J2 · 深盘 · 泊松 2-0/3-0。', 82),
    weather: { temp: 26, humidity: 55, condition_cn: '洛杉矶夏夜', impact_summary: '气候适宜', home_adapt: 88, away_adapt: 84 },
    mystic: mysticBrief(78, 22, '西班牙火土旺，奥地利金水守。'),
  };
}

function buildM83() {
  const xgH = 1.58, xgA = 1.32;
  return {
    id: 'm83', fifa_match_number: 83, fifa_match_id: '400021526',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M83 · K组亚军 vs L组亚军',
    knockout_next: '胜者 → M93（16强 · 对 M84 胜者）',
    date: '2026-07-02', time: '19:00', time_local: '19:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '07:00', date_beijing: '7月3日', time_beijing_full: '北京时间 7月3日 07:00',
    venue: 'BMO Field', city: 'Toronto, Canada',
    note: '32强 M83 · 葡萄牙 vs 克罗地亚 · 多伦多',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-3-3',
      home: 'Costa; Cancelo, Dias, Inácio, Mendes; Neves, Vitinha, B. Fernandes; Leão, Ronaldo, Jota',
      away: 'Livaković; Juranović, Gvardiol, Šutalo, Perišić; Modrić, Brozović, Kovačić; Rebić, Kramarić, Petković',
      source: '媒体预测',
    }),
    home: team('Portugal', 'pt', 6, 88, ['W', 'D', 'D', 'W', 'W'], 'Roberto Martínez',
      { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al Nassr', desc: 'K 组亚军', rating: 8.8 }),
    away: team('Croatia', 'hr', 10, 84, ['W', 'W', 'L', 'D', 'W'], 'Zlatko Dalić',
      { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', desc: 'L 组亚军', rating: 8.7 }),
    h2h: { home_wins: 2, draws: 1, away_wins: 2, recent: [{ year: 2016, comp: '欧洲杯', score: '1-0', winner: 'Portugal' }], note: '大赛经验均丰富' },
    referee: pendingReferee('FIFA Match 83 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M83 · 葡萄牙 K2 vs 克罗地亚 L2 · C罗 vs 莫德里奇 · 泊松 1-1/2-1。', 68),
    weather: { temp: 24, humidity: 68, condition_cn: '多伦多夏夜', impact_summary: '湿度偏高', home_adapt: 86, away_adapt: 86 },
    mystic: mysticBrief(52, 48, '葡萄牙火土略旺，克罗地亚金水韧。'),
  };
}

function buildM85() {
  const xgH = 1.68, xgA = 0.95;
  return {
    id: 'm85', fifa_match_number: 85, fifa_match_id: '400021527',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M85 · B组冠军 vs 阿尔及利亚(3rd)',
    knockout_next: '胜者 → M96（16强 · 对 M87 胜者）',
    date: '2026-07-02', time: '20:00', time_local: '20:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '11:00', date_beijing: '7月3日', time_beijing_full: '北京时间 7月3日 11:00',
    venue: 'BC Place', city: 'Vancouver, Canada',
    note: '32强 M85 · 瑞士 vs 阿尔及利亚 · 温哥华',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Sommer; Widmer, Akanji, Elvedi, Rodriguez; Xhaka, Freuler; Shaqiri, Rieder, Vargas; Embolo',
      away: 'Mandrea; Atal, Mandi, Belkacemi; Aouar, Bentaleb, Saïd; Mahrez, Bounedjah, Bouanani',
      source: '媒体预测',
    }),
    home: team('Switzerland', 'ch', 19, 82, ['W', 'W', 'D', 'W', 'D'], 'Murat Yakin',
      { name: 'Granit Xhaka', pos: 'CM', club: 'Leverkusen', desc: 'B 组头名', rating: 8.4 }),
    away: team('Algeria', 'dz', 37, 74, ['W', 'D', 'L', 'W', 'D'], 'Vahid Halilhodžić',
      { name: 'Riyad Mahrez', pos: 'RW', club: 'Al Ahli', desc: 'E/F/G/I/J 池第3', rating: 8.2 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [{ year: 2014, comp: '友谊赛', score: '3-0', winner: 'Switzerland' }], note: '瑞士历史占优' },
    referee: pendingReferee('FIFA Match 85 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M85 · 瑞士 B1 vs 阿尔及利亚(3rd) · 沙基里轴 vs 马赫雷斯 · 泊松 2-1/1-0。', 74),
    weather: { temp: 22, humidity: 62, condition_cn: '温哥华夏午', impact_summary: '气候温和', home_adapt: 87, away_adapt: 83 },
    mystic: mysticBrief(62, 38, '瑞士土金稳，阿尔及利亚火木反击。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM84(), buildM83(), buildM85()]);
}

module.exports = {
  buildM83, buildM84, buildM85,
  todayMatches: allTodayMatches,
  R32_PREVIEW,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day21Results = [
    { id: 'm80', home: 'England', away: 'Congo DR', score: '2-1', group: 'KO' },
    { id: 'm81', home: 'USA', away: 'Bosnia & Herz.', score: '2-0', group: 'KO' },
    { id: 'm82', home: 'Belgium', away: 'Senegal', score: '3-2', group: 'KO', note: '常规2-2 · 加时3-2' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 21 完结 · Day 22 32强 3场';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 M80：英格兰 2-1 刚果（金）· Kane 双响 · 半场 0-1', time: '7月2日' },
    { tag: 'OFFICIAL', text: '🏁 M81：美国 2-0 波黑 · Balogun 45\' · Tillman 82\'', time: '7月2日' },
    { tag: 'OFFICIAL', text: '🏁 M82：比利时 常规2-2 · 加时3-2 塞内加尔 · 球盘按90分钟结算 · 半场 0-1', time: '7月2日' },
    { tag: 'PREVIEW', text: '⚔️ 今日 3 场：西班牙-奥地利(03:00) · 葡萄牙-克罗地亚(07:00) · 瑞士-阿尔及利亚(11:00)', time: '7月3日' },
    { tag: 'PREVIEW', text: 'M83/M84 胜者 → M93 · M85 胜者 → M96', time: '路径' },
    { tag: 'UPDATE', text: '🎯 淘汰赛大小球 R9 已开启：副项不打小 · ★冲突跳过 · 大信心仅绑★大小', time: 'Agent' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 官方赛程 · Day 22 · 32强 3场',
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
      teaser: `32强 ${first.knockout_slot?.split(' · ')[0] || 'M84'} · ${first.home.name} vs ${first.away.name}`,
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
      ...R32_PREVIEW.map((m) => ({
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
    todayDate: '2026-07-03',
    fixtures: todayMatches.map((m) => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'R32',
    })),
    allResults: day21Results,
    yesterdayResults: day21Results.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 22 · 西班牙/葡萄牙/瑞士 · FIFA 官方对阵' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 22 · 32强 3场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day22.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 22 rolled —', todayMatches.length, 'matches (m84, m83, m85)');
  todayMatches.forEach((m) => console.log(`   ${m.id} ${m.home.name} vs ${m.away.name} · ${m.time_beijing_full}`));
}
