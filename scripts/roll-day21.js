/**
 * Day 21 rollover — m80–m82（7月2日北京 · 32强 3场 · FIFA 官方对阵）
 * Run: node scripts/roll-day21.js && node scripts/enrich-day21.js && node scripts/apply-prediction-signals.js
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
  { no: 83, id: 'm83', home: 'Switzerland', away: 'Canada', date_beijing: '7月3日', time_beijing: '07:00', venue: 'BMO Field', city: '多伦多', slot: 'K2 vs L2' },
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '辛丑日', day_summary: '辛丑日——金土相生', hour_home: '见各场', hour_home_element: '土' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function isoFor(name) {
  const m = {
    England: 'gb-eng', 'Congo DR': 'cd', USA: 'us', 'Bosnia & Herz.': 'ba',
    Belgium: 'be', Senegal: 'sn', Switzerland: 'ch', Canada: 'ca',
  };
  return m[name] || 'xx';
}

function buildM80() {
  const xgH = 1.82, xgA = 0.72;
  return {
    id: 'm80', fifa_match_number: 80, fifa_match_id: '400021512',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M80 · L组冠军 vs 刚果(金)(3rd)',
    knockout_next: '胜者 → M92（16强 · 对 M79 胜者 · 墨西哥）',
    date: '2026-07-01', time: '12:00', time_local: '12:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '00:00', date_beijing: '7月2日', time_beijing_full: '北京时间 7月2日 00:00',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta, USA',
    note: '32强 M80 · 英格兰 vs 刚果（金）· 亚特兰大',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Pickford; Walker, Stones, Guehi, Shaw; Rice, Mainoo; Saka, Bellingham, Foden; Kane',
      away: 'Mpeba; Bokadi, Luyindama, Mbemba; Makiadi, Bamba; Bakambu, Wissa, Mpunga',
      source: '媒体预测',
    }),
    home: team('England', 'gb-eng', 4, 88, ['W', 'W', 'D', 'W', 'W'], 'Gareth Southgate',
      { name: 'Harry Kane', pos: 'ST', club: 'Bayern Munich', desc: 'L 组头名', rating: 9.0 }),
    away: team('Congo DR', 'cd', 67, 68, ['W', 'L', 'D', 'W', 'D'], 'Sébastien Desabre',
      { name: 'Yoane Wissa', pos: 'ST', club: 'Brentford', desc: 'E/H/I/J/K 池第3', rating: 7.8 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [{ year: 2016, comp: '友谊赛', score: '2-0', winner: 'England' }], note: '英格兰占优' },
    referee: pendingReferee('FIFA Match 80 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M80 · 英格兰 L1 vs 刚果(金)(3rd) · 深盘 · 泊松 2-0/2-1。', 78),
    weather: { temp: 28, humidity: 70, condition_cn: '亚特兰大夏夜', impact_summary: '湿热', home_adapt: 86, away_adapt: 80 },
    mystic: mysticBrief(72, 28, '英格兰金旺，刚果金土守。'),
  };
}

function buildM82() {
  const xgH = 1.72, xgA = 1.05;
  return {
    id: 'm82', fifa_match_number: 82, fifa_match_id: '400021525',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M82 · G组冠军 vs 塞内加尔(3rd)',
    knockout_next: '胜者 → M94（16强 · 对 M81 胜者）',
    date: '2026-07-01', time: '13:00', time_local: '13:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '04:00', date_beijing: '7月2日', time_beijing_full: '北京时间 7月2日 04:00',
    venue: 'Lumen Field', city: 'Seattle, USA',
    note: '32强 M82 · 比利时 vs 塞内加尔 · 西雅图',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Courtois; Castagne, Alderweireld, Vertonghen, Theate; Tielemans, Onana; Doku, De Bruyne, Trossard; Lukaku',
      away: 'Mendy; Koulibaly, Diallo, Mendy; Gueye, Ndiaye, Sarr; Jackson, Mané, Dia',
      source: '媒体预测',
    }),
    home: team('Belgium', 'be', 3, 89, ['W', 'W', 'D', 'W', 'W'], 'Domenico Tedesco',
      { name: 'Kevin De Bruyne', pos: 'CAM', club: 'Man City', desc: 'G 组头名', rating: 9.1 }),
    away: team('Senegal', 'sn', 18, 81, ['W', 'D', 'W', 'L', 'W'], 'Aliou Cissé',
      { name: 'Sadio Mané', pos: 'LW', club: 'Al Nassr', desc: 'A/E/H/I/J 池第3', rating: 8.5 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 1, recent: [{ year: 2022, comp: '世界杯', score: '0-2', winner: 'Senegal' }], note: '塞内加尔曾爆冷比利时' },
    referee: pendingReferee('FIFA Match 82 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M82 · 比利时 G1 vs 塞内加尔(3rd) · 德布劳内 vs 马内 · 泊松 2-1/1-1。', 74),
    weather: { temp: 20, humidity: 65, condition_cn: '西雅图夏晨', impact_summary: '气候温和', home_adapt: 85, away_adapt: 84 },
    mystic: mysticBrief(58, 42, '比利时土金旺，塞内加尔火木攻。'),
  };
}

function buildM81() {
  const xgH = 1.58, xgA = 1.08;
  return {
    id: 'm81', fifa_match_number: 81, fifa_match_id: '400021524',
    group: 'KO', round: 'R32', round_cn: '32强', matchday: null,
    knockout_slot: 'M81 · D组冠军 vs 波黑(3rd)',
    knockout_next: '胜者 → M94（16强 · 对 M82 胜者）',
    date: '2026-07-01', time: '17:00', time_local: '17:00 PT', timezone: 'PDT (UTC-7)',
    time_beijing: '08:00', date_beijing: '7月2日', time_beijing_full: '北京时间 7月2日 08:00',
    venue: "Levi's Stadium", city: 'Santa Clara, USA',
    note: '32强 M81 · 美国 vs 波黑 · 旧金山湾区',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Turner; Dest, Richards, Ream, Robinson; Adams, Musah, McKennie; Pulisic, Pepi, Weah',
      away: 'Petkovic; Dedic, Hadzikadunic, Kolasinac; Tahirovic, Bajraktarevic; Dzeko, Tadic, Krunic',
      source: '媒体预测',
    }),
    home: team('USA', 'us', 11, 81, ['W', 'W', 'D', 'L', 'W'], 'Mauricio Pochettino',
      { name: 'Christian Pulisic', pos: 'RW', club: 'AC Milan', desc: 'D 组头名 · 主场', rating: 8.5 }),
    away: team('Bosnia & Herz.', 'ba', 68, 70, ['W', 'L', 'D', 'W', 'D'], 'Sergej Barbarez',
      { name: 'Edin Džeko', pos: 'ST', club: 'Fiorentina', desc: 'B/E/F/I/J 池第3', rating: 8.0 }),
    h2h: { home_wins: 2, draws: 0, away_wins: 1, recent: [{ year: 2023, comp: '友谊赛', score: '3-1', winner: 'USA' }], note: '美国近年占优' },
    referee: pendingReferee('FIFA Match 81 · 待官方确认'),
    prediction: pred(xgH, xgA, '32强 M81 · 美国 D1 vs 波黑(3rd) · 主场 vs 哲科 · 泊松 2-1/1-1。', 70),
    weather: { temp: 24, humidity: 55, condition_cn: '湾区夏午', impact_summary: '气候适宜', home_adapt: 90, away_adapt: 82 },
    mystic: mysticBrief(55, 45, '美国土旺主场，波黑金水守。'),
  };
}

function allTodayMatches() {
  return sortMatchesByKickoff([buildM80(), buildM82(), buildM81()]);
}

module.exports = {
  buildM80, buildM81, buildM82,
  todayMatches: allTodayMatches,
  R32_PREVIEW,
};

if (require.main === module) {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const todayMatches = allTodayMatches();
  const first = todayMatches[0];
  const p0 = first.prediction;

  const day20Results = [
    { id: 'm77', home: 'France', away: 'Sweden', score: '3-0', group: 'KO' },
    { id: 'm78', home: "Côte d'Ivoire", away: 'Norway', score: '1-2', group: 'KO' },
    { id: 'm79', home: 'Mexico', away: 'Ecuador', score: '2-0', group: 'KO' },
  ];

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 20 完结 · Day 21 32强 3场';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 昨日：法国 3-0 瑞典 · 墨西哥 2-0 厄瓜多尔 · 科特迪瓦 1-2 挪威', time: '7月1日' },
    { tag: 'PREVIEW', text: '⚔️ 今日 3 场：英格兰-刚果(金)(00:00) · 比利时-塞内加尔(04:00) · 美国-波黑(08:00)', time: '7月2日' },
    { tag: 'PREVIEW', text: 'M80 胜者 → M92 对墨西哥 · M81/M82 胜者 → M94', time: '路径' },
  ].slice(0, 12);

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 官方赛程 · Day 21 · 32强 3场',
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
      teaser: `32强 ${first.knockout_slot?.split(' · ')[0] || 'M80'} · ${first.home.name} vs ${first.away.name}`,
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
    todayDate: '2026-07-02',
    fixtures: todayMatches.map((m) => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: 'KO', round: 'R32',
    })),
    allResults: day20Results,
    yesterdayResults: day20Results.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 21 · 英格兰/比利时/美国 · FIFA 官方对阵' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 21 · 32强 3场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day21.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);
  console.log('✅ Day 21 rolled —', todayMatches.length, 'matches (m80, m82, m81)');
  todayMatches.forEach((m) => console.log(`   ${m.id} ${m.home.name} vs ${m.away.name} · ${m.time_beijing_full}`));
}
