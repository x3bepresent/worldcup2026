/**
 * Day 7 rollover: upsert m17–m20 → results-data.js, set today m23/m22/m21/m24 (6月18日北京 · 4场)
 * Run: node scripts/roll-day7.js && node scripts/enrich-day7.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { pendingReferee, lineupFromPrediction } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = '2026-06-18T08:00:00+08:00';

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

function mysticBrief(homeScore, awayScore, verdict) {
  return {
    date_bazi: {
      year: '丙午年',
      month: '甲午月',
      day: '戊子日',
      day_summary: '戊子日——土水相激，强队宜稳守破局，弱旅忌急躁冒进。',
      hour_home: '见各场开球时辰',
      hour_home_element: '水',
    },
    wuxing: {
      home: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', advantage: '' },
      away: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', disadvantage: '' },
      summary: '文化解读 · 正式推演见各场详情',
    },
    hexagram: { name: '待卦', symbol: '☯', quote: '赛前更新', general: '开赛前结合时辰与阵容再行解读。', scenarios: [] },
    home_score: homeScore,
    away_score: awayScore,
    mystic_verdict: verdict,
    disclaimer: '文化解读 · 非竞技推演',
  };
}

function weatherBlock(temp, humidity, condition_cn, summary, homeAdapt, awayAdapt) {
  return {
    temp,
    humidity,
    rain_chance: 25,
    condition_cn,
    impact_level: 'LOW',
    impact_summary: summary,
    home_adapt: homeAdapt,
    away_adapt: awayAdapt,
    weather_factors: [],
    historical_note: '',
  };
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

function buildM23() {
  const xgH = 2.15, xgA = 0.72;
  return {
    id: 'm23',
    group: 'K',
    matchday: 1,
    date: '2026-06-17',
    time: '12:00',
    time_local: '12:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '01:00',
    date_beijing: '6月18日',
    time_beijing_full: '北京时间 6月18日 01:00',
    venue: 'NRG Stadium',
    city: 'Houston, USA',
    note: 'K组揭幕 · 葡萄牙 vs 刚果（金） · 休斯顿',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Costa; Dalot, Pepe, Dias, Mendes; Palhinha, Vitinha, B. Fernandes; Leão, Ronaldo, Félix',
      away: 'Mandjeck; Mpeko, Mukau, Luyindama; Mbemba, Mputu; Bakambu, Bompunga, Mabi; Wissa',
      source: 'ESPN / Record 预测 · 非官方',
    }),
    home: team('Portugal', 'pt', 6, 89, ['W', 'W', 'W', 'W', 'D'], 'Roberto Martínez',
      { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al-Nassr', desc: '最后一届世界杯，K组核心', rating: 8.8 }),
    away: team('Congo DR', 'cd', 61, 63, ['W', 'L', 'W', 'D', 'W'], 'Sébastien Desabre',
      { name: 'Yoane Wissa', pos: 'ST', club: 'Brentford', desc: '英超射手，刚果金唯一爆点', rating: 7.6 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 23 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'C罗最后一届+葡萄牙深度碾压：Wissa 反击是唯一变数；xG 2.15-0.72 泊松最可能 2-0/3-0。', 78),
    weather: weatherBlock(32, 68, '休斯顿湿热', 'NRG 封闭式，高温高湿略利适应北美夏季的葡萄牙', 84, 76),
    mystic: mysticBrief(78, 32, '葡萄牙火土相生，刚果金木气孤悬——C罗如定海神针，先破门则指数骤降。'),
  };
}

function buildM22() {
  const xgH = 1.62, xgA = 1.18;
  return {
    id: 'm22',
    group: 'L',
    matchday: 1,
    date: '2026-06-17',
    time: '16:00',
    time_local: '16:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '04:00',
    date_beijing: '6月18日',
    time_beijing_full: '北京时间 6月18日 04:00',
    venue: 'AT&T Stadium',
    city: 'Arlington, USA',
    note: 'L组揭幕 · 英格兰 vs 克罗地亚 · 达拉斯',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Pickford; Walker, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, B. White; Kane',
      away: 'Livaković; Juranović, Gvardiol, Šutalo, Sosa; Modrić, Brozović; Kovačić, Perišić, Rebić; Kramarić',
      source: 'BBC / SportsMole 预测 · 非官方',
    }),
    home: team('England', 'gb-eng', 9, 87, ['W', 'W', 'W', 'D', 'W'], 'Thomas Tuchel',
      { name: 'Jude Bellingham', pos: 'CM', club: 'Real Madrid', desc: '中场核心，L组引擎', rating: 9.0 }),
    away: team('Croatia', 'hr', 10, 81, ['W', 'D', 'W', 'D', 'W'], 'Zlatko Dalić',
      { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', desc: '最后一届世界杯，节拍器', rating: 8.4 }),
    h2h: { home_wins: 1, draws: 2, away_wins: 1, recent: [{ year: 2018, comp: '世界杯半决赛', score: '2-1', winner: 'Croatia' }], note: '2018 半决赛克罗地亚胜 · 大赛老对手' },
    referee: pendingReferee('FIFA Match 22 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '2018 半决赛重演：Bellingham/Kane vs Modrić/Gvardiol；英格兰 xG 略优但克罗地亚大赛慢热后段强；泊松最可能 2-1/1-1。', 70),
    weather: weatherBlock(34, 55, '达拉斯午后炎热', 'AT&T 封闭式，高温对双方体能均有考验', 82, 80),
    mystic: mysticBrief(58, 52, '英格兰金土相涵，克罗地亚水木相济——Modrić 如老泉深流，平局空间不可低估。'),
  };
}

function buildM21() {
  const xgH = 1.55, xgA = 0.82;
  return {
    id: 'm21',
    group: 'L',
    matchday: 1,
    date: '2026-06-17',
    time: '19:00',
    time_local: '19:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '07:00',
    date_beijing: '6月18日',
    time_beijing_full: '北京时间 6月18日 07:00',
    venue: 'BMO Field',
    city: 'Toronto, Canada',
    note: 'L组第2场 · 加纳 vs 巴拿马 · 多伦多',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-4-2',
      home: 'Ati-Zigi; Lamptey, Amartey, Djiku, Baba; Partey, S. Ayew; Kudus, Paintsil, J. Ayew; Semenyo',
      away: 'Mosquera; Murillo, Escobar, Cummings; Anderson, Godoy; Fajardo, Bárcenas, Rodríguez; Ismael Díaz',
      source: 'FotMob 预测 · 非官方',
    }),
    home: team('Ghana', 'gh', 60, 65, ['D', 'W', 'W', 'D', 'L'], 'Otto Addo',
      { name: 'Mohammed Kudus', pos: 'RW', club: 'West Ham', desc: '边路爆点，L组关键', rating: 8.2 }),
    away: team('Panama', 'pa', 75, 58, ['W', 'D', 'L', 'L', 'W'], 'Thomas Christiansen',
      { name: 'José Fajardo', pos: 'ST', club: 'Plaza Amador', desc: '锋线支点，定位球威胁', rating: 7.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 21 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'Kudus/Partey 对位巴拿马 MLS 班底：加纳 xG 1.55 占优但大赛慢热有前例；泊松最可能 2-0/1-0。', 72),
    weather: weatherBlock(22, 62, '多伦多傍晚凉爽', 'BMO Field 天然草，气候均衡', 80, 78),
    mystic: mysticBrief(55, 42, '加纳土火相杂，巴拿马金水相生——Kudus 如骤雨，先破门则巴拿马难翻身。'),
  };
}

function buildM24() {
  const xgH = 0.88, xgA = 1.78;
  return {
    id: 'm24',
    group: 'K',
    matchday: 1,
    date: '2026-06-17',
    time: '21:00',
    time_local: '21:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '10:00',
    date_beijing: '6月18日',
    time_beijing_full: '北京时间 6月18日 10:00',
    venue: 'Estadio Azteca',
    city: 'Mexico City, Mexico',
    note: 'K组第2场 · 乌兹别克 vs 哥伦比亚 · 墨西哥城',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-2-3-1',
      home: 'Nafalov; Khusanov, Ismailov, Alikulov; Shomurodov, Masharipov; Abdullaev, Hamrobekov; Turgunboev, Odilov; Abdullaev',
      away: 'Mármol; Muñoz, Sánchez, Lucumí; Lerma, Ríos; Cuadrado, James, Arias; Borré, Díaz',
      source: 'Opta / ESPN 预测 · 非官方',
    }),
    home: team('Uzbekistan', 'uz', 65, 62, ['W', 'D', 'L', 'W', 'W'], 'Srečko Katanec',
      { name: 'Eldor Shomurodov', pos: 'ST', club: 'Roma', desc: '意甲射手，乌兹别克核心', rating: 7.8 }),
    away: team('Colombia', 'co', 27, 75, ['W', 'D', 'W', 'W', 'W'], 'Néstor Lorenzo',
      { name: 'Luis Díaz', pos: 'LW', club: 'Liverpool', desc: '边路速度+内切，K组最大威胁', rating: 8.6 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 24 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'Díaz/James 对位乌兹别克低位：哥伦比亚 xG 1.78 明显占优；海拔 2240m 略利主队适应；泊松最可能 0-2/1-2。', 76),
    weather: weatherBlock(24, 55, '墨西哥城海拔2240m', 'Azteca 高海拔+晚场，乌兹别克体能分配是关键', 74, 82),
    mystic: mysticBrief(38, 68, '哥伦比亚金水相生，乌兹别克土气守中——Díaz 如疾风，高原夜战宜早破局。'),
  };
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

const toArchive = (MATCH_DATA.todayMatches || []).filter(m => ['m17', 'm18', 'm19', 'm20'].includes(m.id));
if (toArchive.length !== 4) {
  console.warn('⚠ Expected 4 Day 6 matches to archive, got', toArchive.length);
}

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 6 完结 · Day 7 预览';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月17日 · 法国3-1塞 · 伊1-4挪 · 阿3-0阿 · 奥3-1约', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'Messi 帽子戏法 · Mbappé 队史射手王 · Haaland 双响 · I/J组首轮完结', time: '球星' },
  { tag: 'OFFICIAL', text: 'I组：挪威净胜球领跑 · J组：阿根廷净胜球领跑', time: '积分榜' },
  { tag: 'LINEUP', text: 'Day 6 四场官方首发均已同步 · 详见各场详情', time: '6月17日' },
  { tag: 'PREVIEW', text: '📅 6月18日 · 葡-刚果(金)(01:00) · 英-克(04:00) · 加纳-巴拿马(07:00) · 乌-哥伦(10:00)', time: '今日赛程' },
  ...RESULTS_DATA.breakingNews.filter(n => !n.text?.includes('6月17日四场')).slice(0, 6),
].slice(0, 12);

RESULTS_DATA.finishedMatches = upsertFinished(RESULTS_DATA.finishedMatches || [], toArchive);

let snaps = RESULTS_DATA.groupSnapshots || [];
snaps = upsertGroup(snaps, 'I', 'I组 · 第1轮（4场已赛）', [
  { team: 'Norway', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 1 },
  { team: 'France', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1 },
  { team: 'Iraq', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 4 },
  { team: 'Senegal', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3 },
]);
snaps = upsertGroup(snaps, 'J', 'J组 · 第1轮（4场已赛）', [
  { team: 'Argentina', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 0 },
  { team: 'Austria', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1 },
  { team: 'Jordan', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3 },
  { team: 'Algeria', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 3 },
]);
RESULTS_DATA.groupSnapshots = snaps;

const todayMatches = [buildM23(), buildM22(), buildM21(), buildM24()];
const first = todayMatches[0];
const p0 = first.prediction;

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 7 preview',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：法3-1塞 · 伊1-4挪 · 阿3-0阿 · 奥3-1约 · Messi 帽子戏法 · 详见「过往赛果」', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 葡萄牙-刚果(金)(01:00) · 英格兰-克罗地亚(04:00) · 加纳-巴拿马(07:00) · 乌兹别克-哥伦比亚(10:00)', time: '6月18日' },
    { tag: 'PREVIEW', text: 'K/L组揭幕：C罗最后一届 · 2018 半决赛重演 · Kudus vs 巴拿马 · Díaz 高原夜战', time: '焦点' },
    { tag: 'OFFICIAL', text: 'I/J组首轮完结 · 挪威&阿根廷净胜球领跑 · 今日 K/L 组开战', time: '积分榜' },
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
    teaser: 'K组揭幕：C罗最后一届 · 葡萄牙 vs 刚果（金）',
    home_win: p0.home_win,
    draw: p0.draw,
    away_win: p0.away_win,
    predicted_score: p0.score,
    key_player_home: first.home.star?.name || 'Cristiano Ronaldo',
    key_player_away: first.away.star?.name || 'Yoane Wissa',
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
  todayDate: '2026-06-18',
  fixtures: todayMatches.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    status: 'NS',
    home_score: null,
    away_score: null,
    group: m.group,
  })),
  allResults: toArchive.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    score: `${m.actualResult.home_score}-${m.actualResult.away_score}`,
    group: m.group,
  })),
  standings: snaps.filter(g => ['I', 'J'].includes(g.group)),
  injuries: {},
  yesterdayResults: toArchive.map(m => ({
    id: m.id,
    score: `${m.actualResult.home_score}-${m.actualResult.away_score}`,
  })),
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 7 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/roll-day7.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Archived/upserted:', toArchive.map(m => `${m.id} ${m.actualResult?.home_score}-${m.actualResult?.away_score}`).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
