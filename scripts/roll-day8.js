/**
 * Day 8 rollover: upsert m23–m24 → results-data.js, set today m25–m28 (6月19日北京 · 4场)
 * Run: node scripts/roll-day8.js && node scripts/enrich-day8.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { pendingReferee, lineupFromPrediction } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = '2026-06-19T08:00:00+08:00';

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

function team(name, iso, rank, rating, form, coach, star, injuries = [], rumors = []) {
  return { name, iso, flag: '', fifa_rank: rank, rating, form, coach, stars: [star], star, injuries, rumors };
}

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

function buildM25() {
  const xgH = 1.48, xgA = 0.95;
  return {
    id: 'm25',
    group: 'A',
    matchday: 2,
    date: '2026-06-18',
    time: '12:00',
    time_local: '12:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '00:00',
    date_beijing: '6月19日',
    time_beijing_full: '北京时间 6月19日 00:00',
    venue: 'Mercedes-Benz Stadium',
    city: 'Atlanta, USA',
    note: 'A组第2轮 · 捷克 vs 南非 · 亚特兰大',
    lineup: lineupFromPrediction({
      formation: '3-4-3 / 4-2-3-1',
      home: 'Staněk; Holes, Brabec, Zmrhal; Coufal, Souček, Sadílek, Jurásek; Schick, Chytil, Provod',
      away: 'Williams; Mphahlele, Xaba, Mokoena; Modiba, Mthethwa; Tau, Zwane, Baccus; Foster, Lorch',
      source: 'Opta / ESPN 预测 · 非官方',
    }),
    home: team('Czechia', 'cz', 40, 72, ['L', 'W', 'D', 'W', 'L'], 'Ivan Hašek',
      { name: 'Patrik Schick', pos: 'ST', club: 'Bayer Leverkusen', desc: '首轮 84\' 挽回颜面，必须抢分', rating: 8.0 }),
    away: team('South Africa', 'za', 58, 65, ['L', 'W', 'D', 'L', 'W'], 'Hugo Broos',
      { name: 'Percy Tau', pos: 'LW', club: 'Brighton', desc: '南非唯一爆点', rating: 7.4 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [], note: '友谊赛交锋有限' },
    referee: pendingReferee('FIFA Match 25 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '捷克首轮惜败韩国需抢分：Schick 支点+Souček 屏障；南非 0-2 墨西哥后出线压力大；泊松最可能 2-0/1-1。', 70),
    weather: { temp: 30, humidity: 62, condition_cn: '亚特兰大闷热', impact_summary: '闷热对双方后段体能均有考验', home_adapt: 80, away_adapt: 78 },
    mystic: { hexagram: { name: '待卦' }, mystic_verdict: '赛前更新' },
  };
}

function buildM26() {
  const xgH = 1.55, xgA = 1.05;
  return {
    id: 'm26',
    group: 'B',
    matchday: 2,
    date: '2026-06-18',
    time: '15:00',
    time_local: '15:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '03:00',
    date_beijing: '6月19日',
    time_beijing_full: '北京时间 6月19日 03:00',
    venue: 'SoFi Stadium',
    city: 'Los Angeles, USA',
    note: 'B组第2轮 · 瑞士 vs 波黑 · 洛杉矶',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Kobel; Rieder, Akanji, Rodríguez; Xhaka, Freuler; Vargas, Rieder, Embolo; Duah',
      away: 'Bešić; Džeko, Bajraktarević, Tahić; Hadžiahmetović, Kršić; Mlakar, Bajić, Demirović; Burić',
      source: 'BBC / FotMob 预测 · 非官方',
    }),
    home: team('Switzerland', 'ch', 19, 78, ['D', 'W', 'W', 'D', 'W'], 'Murat Yakin',
      { name: 'Granit Xhaka', pos: 'CM', club: 'Bayer Leverkusen', desc: '节拍器+远射', rating: 8.2 }),
    away: team('Bosnia and Herzegovina', 'ba', 72, 68, ['D', 'L', 'W', 'D', 'L'], 'Sergej Stojković',
      { name: 'Edin Džeko', pos: 'ST', club: 'Fenerbahçe', desc: '39 岁支点，定位球威胁', rating: 7.8 }),
    h2h: { home_wins: 2, draws: 1, away_wins: 0, recent: [], note: '瑞士近年占优' },
    referee: pendingReferee('FIFA Match 26 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '瑞士首轮平卡塔尔需取胜：Xhaka/Akanji 组织优势；波黑 Džeko 定位球偷分；泊松最可能 2-0/1-1。', 68),
    weather: { temp: 26, humidity: 55, condition_cn: '洛杉矶晴朗', impact_summary: '气候变量低', home_adapt: 82, away_adapt: 80 },
    mystic: { hexagram: { name: '待卦' }, mystic_verdict: '赛前更新' },
  };
}

function buildM27() {
  const xgH = 1.62, xgA = 0.88;
  return {
    id: 'm27',
    group: 'B',
    matchday: 2,
    date: '2026-06-18',
    time: '18:00',
    time_local: '18:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '06:00',
    date_beijing: '6月19日',
    time_beijing_full: '北京时间 6月19日 06:00',
    venue: 'BC Place',
    city: 'Vancouver, Canada',
    note: 'B组第2轮 · 加拿大 vs 卡塔尔 · 温哥华（东道主）',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'St. Clair; Johnston, Miller, Cornelius; Davies, Buchanan, Eustáquio, Laryea; David, Larin, Hoilett',
      away: 'Barsham; Pedro Miguel, Salama, Tarek; Ahmed, Boudiaf; Ali, Afif, Muntari; Almoez Ali',
      source: 'TSN / ESPN 预测 · 非官方',
    }),
    home: team('Canada', 'ca', 48, 72, ['D', 'W', 'L', 'W', 'D'], 'Jesse Marsch',
      { name: 'Alphonso Davies', pos: 'LB', club: 'Bayern Munich', desc: '温哥华主场爆点', rating: 8.5 }),
    away: team('Qatar', 'qa', 35, 70, ['D', 'W', 'D', 'L', 'W'], 'Félix Sánchez',
      { name: 'Almoez Ali', pos: 'ST', club: 'Al-Duhail', desc: '亚洲杯金靴，锋线核心', rating: 7.6 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 27 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '东道主温哥华主场：Davies/David 高位压迫；卡塔尔首轮平瑞士低位韧性；泊松最可能 2-0/1-0。', 74),
    weather: { temp: 18, humidity: 70, condition_cn: '温哥华凉爽', impact_summary: '凉爽气候略利东道主', home_adapt: 86, away_adapt: 74 },
    mystic: { hexagram: { name: '待卦' }, mystic_verdict: '赛前更新' },
  };
}

function buildM28() {
  const xgH = 1.52, xgA = 1.32;
  return {
    id: 'm28',
    group: 'A',
    matchday: 2,
    date: '2026-06-18',
    time: '21:00',
    time_local: '21:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '09:00',
    date_beijing: '6月19日',
    time_beijing_full: '北京时间 6月19日 09:00',
    venue: 'Estadio Akron',
    city: 'Guadalajara, Mexico',
    note: 'A组榜首战 · 墨西哥 vs 韩国 · 瓜达拉哈拉',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Ochoa; Arteaga, Montes, Vasquez; Álvarez, Chávez; Lozano, Jiménez, Vega; Mora, Antuna',
      away: 'Jo Hyeon-woo; Kim Min-jae, Kim Young-gwon, Kim Tae-hwan; Hwang In-beom, Lee Kang-in; Son, Hwang Hee-chan, Paik; Cho Gue-sung',
      source: 'ESPN / BBC 预测 · 非官方',
    }),
    home: team('Mexico', 'mx', 12, 80, ['W', 'W', 'W', 'D', 'W'], 'Javier Aguirre',
      { name: 'Raúl Jiménez', pos: 'ST', club: 'Fulham', desc: '首轮梅开二度，状态火热', rating: 8.4 }),
    away: team('South Korea', 'kr', 23, 76, ['W', 'W', 'W', 'D', 'W'], 'Hong Myung-bo',
      { name: '孙兴慜 Son Heung-min', pos: 'LW', club: 'LAFC', desc: '首轮 56\' 远射破门', rating: 8.8 }),
    h2h: { home_wins: 1, draws: 1, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '0-2', winner: 'South Korea' }], note: '2018 友谊赛韩国 2-0 胜' },
    referee: pendingReferee('FIFA Match 28 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'A组榜首对话：Jiménez 状态 vs 孙兴慜；瓜达拉哈拉夜场主场气势；泊松最可能 2-1/1-1。', 68),
    weather: { temp: 22, humidity: 58, condition_cn: '瓜达拉哈拉夜场', impact_summary: '海拔1566m双方首轮均有经验', home_adapt: 88, away_adapt: 82 },
    mystic: { hexagram: { name: '待卦' }, mystic_verdict: '赛前更新' },
  };
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

const toArchive = (MATCH_DATA.todayMatches || []).filter(m => ['m23', 'm22', 'm21', 'm24'].includes(m.id));
if (toArchive.length !== 4) {
  console.warn('⚠ Expected 4 Day 7 matches to archive, got', toArchive.length, toArchive.map(m => m.id));
}

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 7 完结 · Day 8 预览';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月18日 · 葡1-1刚果(金) · 英4-2克 · 加纳1-0巴 · 乌1-3哥伦', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'Wissa 历史性扳平 · Kane 双响 · Díaz 传射 · Yirenkyi 绝杀', time: '球星' },
  { tag: 'OFFICIAL', text: 'K组：哥伦比亚领跑 · L组：英格兰&加纳同积3分', time: '积分榜' },
  { tag: 'PREVIEW', text: '📅 6月19日 · 捷克-南非(00:00) · 瑞士-波黑(03:00) · 加拿大-卡塔尔(06:00) · 墨西哥-韩国(09:00)', time: '今日赛程' },
  ...RESULTS_DATA.breakingNews.filter(n => !/6月19日/.test(n.text || '')).slice(0, 6),
].slice(0, 12);

RESULTS_DATA.finishedMatches = upsertFinished(RESULTS_DATA.finishedMatches || [], toArchive);

let snaps = RESULTS_DATA.groupSnapshots || [];
snaps = upsertGroup(snaps, 'K', 'K组 · 第1轮（4场已赛）', [
  { team: 'Colombia', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1 },
  { team: 'Portugal', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Congo DR', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Uzbekistan', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3 },
]);
snaps = upsertGroup(snaps, 'L', 'L组 · 第1轮（4场已赛）', [
  { team: 'England', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 2 },
  { team: 'Ghana', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 1, ga: 0 },
  { team: 'Croatia', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 2, ga: 4 },
  { team: 'Panama', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 1 },
]);
RESULTS_DATA.groupSnapshots = snaps;

const todayMatches = [buildM25(), buildM26(), buildM27(), buildM28()];
const first = todayMatches[0];
const p0 = first.prediction;

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 8 preview',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：葡1-1刚果(金) · 英4-2克 · 加纳1-0巴 · 乌1-3哥伦 · 详见「过往赛果」', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 捷克-南非(00:00) · 瑞士-波黑(03:00) · 加拿大-卡塔尔(06:00) · 墨西哥-韩国(09:00)', time: '6月19日' },
    { tag: 'PREVIEW', text: 'A/B组第2轮：Schick 抢分战 · 东道主温哥华 · 墨西哥 vs 孙兴慜 榜首对话', time: '焦点' },
    { tag: 'OFFICIAL', text: 'K/L组首轮完结 · 哥伦比亚&英格兰领跑', time: '积分榜' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认 · 未确认显示「等待官方确认」', time: '裁判' },
  ],
  todayMatches,
  nextMatch: {
    group: first.group,
    matchday: first.matchday,
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
    teaser: 'A组第2轮：捷克必须抢分 vs 南非',
    home_win: p0.home_win,
    draw: p0.draw,
    away_win: p0.away_win,
    predicted_score: p0.score,
    key_player_home: first.home.star?.name || 'Patrik Schick',
    key_player_away: first.away.star?.name || 'Percy Tau',
  },
  upcomingMatches: todayMatches.slice(1).map(m => ({
    group: m.group,
    time_beijing_full: m.time_beijing_full,
    venue: m.venue,
    city: m.city,
    home: { name: m.home.name, iso: m.home.iso },
    away: { name: m.away.name, iso: m.away.iso },
    teaser: m.note?.split(' · ')[0] || `${m.group}组`,
  })),
};

const LIVE_DATA = {
  lastUpdated: new Date().toISOString(),
  todayDate: '2026-06-19',
  fixtures: todayMatches.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    status: 'NS',
    home_score: null,
    away_score: null,
    group: m.group,
  })),
  allResults: toArchive.filter(m => m.actualResult?.status === 'FT').map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    score: `${m.actualResult.home_score}-${m.actualResult.away_score}`,
    group: m.group,
  })),
  standings: snaps.filter(g => ['K', 'L', 'A', 'B'].includes(g.group)),
  injuries: {},
  yesterdayResults: toArchive.map(m => ({
    id: m.id,
    score: m.actualResult ? `${m.actualResult.home_score}-${m.actualResult.away_score}` : '—',
  })),
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 8 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/roll-day8.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Archived/upserted:', toArchive.map(m => `${m.id} ${m.actualResult?.home_score ?? '?'}-${m.actualResult?.away_score ?? '?'}`).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
