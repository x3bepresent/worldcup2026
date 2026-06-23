/**
 * Day 13 rollover preview builder — m45–m48（6月24日北京 · K/L 组第2轮 · FIFA #45–#48）
 * Run after Day 12 completes: node scripts/roll-day13.js && node scripts/enrich-day13.js
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
    date_bazi: { year: '丙午年', month: '甲午月', day: '壬辰日', day_summary: '壬辰日——水土相涵', hour_home: '见各场', hour_home_element: '水' },
    wuxing: { home: { verdict: '待定' }, away: { verdict: '待定' }, summary: '文化解读' },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '', scenarios: [] },
    home_score: homeScore, away_score: awayScore, mystic_verdict: verdict, disclaimer: '文化解读 · 非竞技推演',
  };
}

function buildM47() {
  const xgH = 2.05, xgA = 0.78;
  return {
    id: 'm47', fifa_match_number: 47, fifa_match_id: '400021503', group: 'K', matchday: 2,
    date: '2026-06-23', time: '12:00', time_local: '12:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '01:00', date_beijing: '6月24日', time_beijing_full: '北京时间 6月24日 01:00',
    venue: 'NRG Stadium', city: 'Houston, USA', note: 'K组第2轮 · 葡萄牙 vs 乌兹别克 · 休斯顿',
    lineup: lineupFromPrediction({ formation: '4-3-3 / 4-2-3-1', home: 'Costa; Dalot, Pepe, Dias, Mendes; Palhinha, Vitinha, B. Fernandes; Leão, Ronaldo, Félix', away: 'Nafalov; Khusanov, Ismailov, Alikulov; Shomurodov, Masharipov; Abdullaev, Hamrobekov; Turgunboev, Odilov', source: 'ESPN 预测' }),
    home: team('Portugal', 'pt', 6, 89, ['D', 'W', 'W', 'W', 'W'], 'Roberto Martínez', { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al-Nassr', desc: '1-1 刚果后须取胜', rating: 8.8 }),
    away: team('Uzbekistan', 'uz', 65, 62, ['L', 'W', 'D', 'L', 'W'], 'Srečko Katanec', { name: 'Eldor Shomurodov', pos: 'ST', club: 'Roma', desc: '0 分垫底', rating: 7.8 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 47 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '葡萄牙 1-1 刚果后须全取3分 · 乌兹别克 0 分 · 泊松 2-0/3-0。', 78),
    weather: { temp: 33, humidity: 72, condition_cn: '休斯顿湿热', impact_summary: '湿热高', home_adapt: 85, away_adapt: 78 },
    mystic: mysticBrief(74, 26, '葡萄牙火土旺，乌兹别克守中。'),
  };
}

function buildM45() {
  const xgH = 1.85, xgA = 1.12;
  return {
    id: 'm45', fifa_match_number: 45, fifa_match_id: '400021506', group: 'L', matchday: 2,
    date: '2026-06-23', time: '16:00', time_local: '16:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '04:00', date_beijing: '6月24日', time_beijing_full: '北京时间 6月24日 04:00',
    venue: 'Gillette Stadium', city: 'Foxborough, USA', note: 'L组第2轮 · 英格兰 vs 加纳 · 波士顿',
    lineup: lineupFromPrediction({ formation: '4-2-3-1 / 4-2-3-1', home: 'Pickford; Walker, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, B. White; Kane', away: 'Ati-Zigi; Lamptey, Amartey, Djiku, Baba; Partey, S. Ayew; Kudus, Paintsil, J. Ayew; Semenyo', source: 'BBC 预测' }),
    home: team('England', 'gb-eng', 9, 87, ['W', 'W', 'W', 'D', 'W'], 'Thomas Tuchel', { name: 'Jude Bellingham', pos: 'CM', club: 'Real Madrid', desc: '4-2 克罗地亚', rating: 9.0 }),
    away: team('Ghana', 'gh', 60, 65, ['W', 'D', 'W', 'D', 'L'], 'Otto Addo', { name: 'Mohammed Kudus', pos: 'RW', club: 'West Ham', desc: '1-0 巴拿马', rating: 8.2 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [{ year: 2010, comp: '世界杯', score: '1-1', winner: 'draw' }], note: '2010 世界杯 1-1' },
    referee: pendingReferee('FIFA Match 45 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'L组榜首对话 · Bellingham/Kane vs Kudus · 泊松 2-1/1-1。', 72),
    weather: { temp: 24, humidity: 58, condition_cn: '波士顿夏夜', impact_summary: '气候均衡', home_adapt: 84, away_adapt: 82 },
    mystic: mysticBrief(58, 42, '英格兰金土相涵，加纳火土相杂。'),
  };
}

function buildM46() {
  const xgH = 0.95, xgA = 1.42;
  return {
    id: 'm46', fifa_match_number: 46, fifa_match_id: '400021511', group: 'L', matchday: 2,
    date: '2026-06-23', time: '19:00', time_local: '19:00 ET', timezone: 'EDT (UTC-4)',
    time_beijing: '07:00', date_beijing: '6月24日', time_beijing_full: '北京时间 6月24日 07:00',
    venue: 'BMO Field', city: 'Toronto, Canada', note: 'L组第2轮 · 巴拿马 vs 克罗地亚 · 多伦多',
    lineup: lineupFromPrediction({ formation: '4-4-2 / 4-3-3', home: 'Mosquera; Murillo, Escobar, Cummings; Anderson, Godoy; Fajardo, Bárcenas, Rodríguez; Ismael Díaz', away: 'Livaković; Juranović, Gvardiol, Šutalo, Sosa; Modrić, Brozović; Kovačić, Perišić, Rebić; Kramarić', source: 'FotMob 预测' }),
    home: team('Panama', 'pa', 75, 58, ['L', 'W', 'D', 'L', 'W'], 'Thomas Christiansen', { name: 'José Fajardo', pos: 'ST', club: 'Plaza Amador', desc: '0 分须抢分', rating: 7.0 }),
    away: team('Croatia', 'hr', 10, 81, ['L', 'W', 'D', 'W', 'W'], 'Zlatko Dalić', { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', desc: '0 分 · 大赛经验', rating: 8.4 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 46 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '巴拿马/克罗地亚均 0 分 · Modrić vs MLS 班底 · 泊松 0-1/1-2。', 68),
    weather: { temp: 22, humidity: 62, condition_cn: '多伦多凉爽', impact_summary: '气候影响低', home_adapt: 80, away_adapt: 83 },
    mystic: mysticBrief(38, 62, '克罗地亚水木相济略优。'),
  };
}

function buildM48() {
  const xgH = 1.72, xgA = 0.92;
  return {
    id: 'm48', fifa_match_number: 48, fifa_match_id: '400021501', group: 'K', matchday: 2,
    date: '2026-06-23', time: '21:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)',
    time_beijing: '10:00', date_beijing: '6月24日', time_beijing_full: '北京时间 6月24日 10:00',
    venue: 'Estadio Akron', city: 'Guadalajara, Mexico', note: 'K组第2轮 · 哥伦比亚 vs 刚果（金） · 瓜达拉哈拉',
    lineup: lineupFromPrediction({ formation: '4-2-3-1 / 4-2-3-1', home: 'Mármol; Muñoz, Sánchez, Lucumí; Lerma, Ríos; Cuadrado, James, Arias; Borré, Díaz', away: 'Mandjeck; Mpeko, Mukau, Luyindama; Mbemba, Mputu; Bakambu, Bompunga, Mabi; Wissa', source: 'Opta 预测' }),
    home: team('Colombia', 'co', 27, 75, ['W', 'W', 'D', 'W', 'W'], 'Néstor Lorenzo', { name: 'Luis Díaz', pos: 'LW', club: 'Liverpool', desc: '3 分领跑', rating: 8.6 }),
    away: team('Congo DR', 'cd', 61, 63, ['D', 'W', 'L', 'D', 'W'], 'Sébastien Desabre', { name: 'Yoane Wissa', pos: 'ST', club: 'Brentford', desc: '1-1 葡萄牙', rating: 7.6 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 48 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '哥伦比亚 3 分领跑 · Díaz/James vs Wissa · 泊松 2-0/2-1。', 74),
    weather: { temp: 28, humidity: 48, condition_cn: '瓜达拉哈拉午后', impact_summary: '高原1560m', home_adapt: 86, away_adapt: 76 },
    mystic: mysticBrief(68, 32, '哥伦比亚金水相生宜早破局。'),
  };
}

module.exports = {
  buildM47, buildM45, buildM46, buildM48,
  todayMatches: () => [buildM47(), buildM45(), buildM46(), buildM48()],
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
    ['m41', 'm42', 'm43', 'm44'].includes(m.id) && m.actualResult?.status === 'FT',
  );
  if (toArchive.length < 4) {
    toArchive = ['m43', 'm42', 'm41', 'm44']
      .map(id => (RESULTS_DATA.finishedMatches || []).find(m => m.id === id)
        || (MATCH_DATA.todayMatches || []).find(m => m.id === id))
      .filter(Boolean);
  }

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 12 完结 · Day 13 预览';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 12：阿2-0奥 · 法3-0伊 · 挪3-2塞 · 约1-2阿', time: '6月23日' },
    { tag: 'OFFICIAL', text: 'I组：法/挪各 6 分 · J组：阿根廷 6 分', time: '积分榜' },
    { tag: 'PREVIEW', text: '📅 6月24日 · 葡-乌(01:00) · 英-加(04:00) · 巴-克(07:00) · 哥-刚(10:00)', time: '今日赛程' },
    { tag: 'PREVIEW', text: 'K/L组第2轮：葡萄牙须取胜 · 英加榜首对话', time: '焦点' },
  ].slice(0, 12);

  RESULTS_DATA.finishedMatches = upsertFinished(RESULTS_DATA.finishedMatches || [], toArchive);

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'I', 'I组 · 第2轮后', [
    { team: 'France', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 6, ga: 1 },
    { team: 'Norway', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 7, ga: 3 },
    { team: 'Senegal', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 3, ga: 6 },
    { team: 'Iraq', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 7 },
  ]);
  snaps = upsertGroup(snaps, 'J', 'J组 · 第2轮后', [
    { team: 'Argentina', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 5, ga: 0 },
    { team: 'Austria', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 3, ga: 5 },
    { team: 'Algeria', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 4 },
    { team: 'Jordan', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 5 },
  ]);
  RESULTS_DATA.groupSnapshots = snaps;

  const todayMatches = [buildM47(), buildM45(), buildM46(), buildM48()];
  const first = todayMatches[0];
  const p0 = first.prediction;

  const NEW_MATCH_DATA = {
    lastUpdated: TS,
    syncSource: 'FIFA 赛程 · Day 13 preview · K/L 组第2轮',
    breakingNews: [
      { tag: 'OFFICIAL', text: '🏁 昨日：阿2-0奥 · 法3-0伊 · 挪3-2塞 · 约1-2阿 · Messi/Haaland 双响', time: '赛果回顾' },
      { tag: 'PREVIEW', text: '📅 今日4场 · 葡-乌(01:00) · 英-加(04:00) · 巴-克(07:00) · 哥-刚(10:00)', time: '6月24日' },
      { tag: 'PREVIEW', text: 'K/L组第2轮：葡萄牙须取胜 · 英加榜首对话 · 哥伦比亚领跑', time: '焦点' },
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
      teaser: 'K组第2轮：葡萄牙 vs 乌兹别克 · 休斯顿',
      home_win: p0.home_win, draw: p0.draw, away_win: p0.away_win, predicted_score: p0.score,
      key_player_home: first.home.star?.name || 'Cristiano Ronaldo',
      key_player_away: first.away.star?.name || 'Eldor Shomurodov',
    },
    upcomingMatches: todayMatches.slice(1).map(m => ({
      group: m.group, time_beijing_full: m.time_beijing_full, venue: m.venue, city: m.city,
      home: { name: m.home.name, iso: m.home.iso }, away: { name: m.away.name, iso: m.away.iso },
      teaser: m.note?.split(' · ')[0] || `${m.group}组`,
    })),
  };

  const day12Results = [
    { id: 'm43', home: 'Argentina', away: 'Austria', score: '2-0', group: 'J' },
    { id: 'm42', home: 'France', away: 'Iraq', score: '3-0', group: 'I' },
    { id: 'm41', home: 'Norway', away: 'Senegal', score: '3-2', group: 'I' },
    { id: 'm44', home: 'Jordan', away: 'Algeria', score: '1-2', group: 'J' },
  ];

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-24',
    fixtures: todayMatches.map(m => ({
      id: m.id, fifa_match_number: m.fifa_match_number,
      home: m.home.name, away: m.away.name, status: 'NS',
      home_score: null, away_score: null, group: m.group,
    })),
    allResults: day12Results,
    standings: snaps.filter(g => ['I', 'J', 'K', 'L', 'G', 'H'].includes(g.group)),
    injuries: { note: 'Day 13 赛前 · K/L组第2轮' },
    yesterdayResults: day12Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 13 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/roll-day13.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Archived:', toArchive.map(m => m.id).join(', '));
  console.log('✅ Day 13:', todayMatches.map(m => `#${m.fifa_match_number} ${m.home.name} vs ${m.away.name}`).join(' | '));
}
