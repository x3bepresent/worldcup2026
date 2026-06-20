/**
 * Day 9 rollover: upsert m25–m28 → results-data.js, set today m29–m32（6月20日北京 · 4场）
 * Run: node scripts/sync-day8-results.js && node scripts/roll-day9.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { pendingReferee, lineupFromPrediction } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = '2026-06-20T08:00:00+08:00';

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
      day: '己丑日',
      day_summary: '己丑日——土厚藏水，东道主与热门宜循序渐进，忌半场冒进。',
      hour_home: '见各场开球时辰',
      hour_home_element: '土',
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

function buildM32() {
  const xgH = 1.68, xgA = 0.92;
  return {
    id: 'm32',
    group: 'D',
    matchday: 2,
    date: '2026-06-19',
    time: '12:00',
    time_local: '12:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '03:00',
    date_beijing: '6月20日',
    time_beijing_full: '北京时间 6月20日 03:00',
    venue: 'Lumen Field',
    city: 'Seattle, USA',
    note: 'D组第2轮 · 美国 vs 澳大利亚 · 西雅图',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Turner; Dest, Ream, Robinson; Adams, Musah; Pulisic, McKennie, Reyna; Balogun, Weah',
      away: 'Ryan; Atkinson, Souttar, Bos; Irvine, Irvine; Goodwin, Irvine, Boyle; Maclaren, Leckie',
      source: 'ESPN / Fox 预测 · 非官方',
    }),
    home: team('USA', 'us', 11, 82, ['W', 'W', 'D', 'W', 'W'], 'Mauricio Pochettino',
      { name: 'Christian Pulisic', pos: 'RW', club: 'AC Milan', desc: '东道主核心', rating: 8.6 }),
    away: team('Australia', 'au', 24, 74, ['D', 'W', 'L', 'W', 'D'], 'Graham Arnold',
      { name: 'Mathew Ryan', pos: 'GK', club: 'Roma', desc: '经验一门', rating: 7.6 }),
    h2h: { home_wins: 2, draws: 1, away_wins: 0, recent: [], note: '美国近年占优' },
    referee: pendingReferee('FIFA Match 32 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '东道主西雅图：Pulisic/Reyna 宽度 vs 澳大利亚低位；美国取胜可大幅推进出线。', 74),
    weather: { temp: 19, humidity: 65, condition_cn: '西雅图凉爽', impact_summary: '凉爽气候利于高强度压迫', home_adapt: 85, away_adapt: 78 },
    mystic: mysticBrief(58, 42, '美国主场水气相涵，宜先声夺人；澳大利亚土性守势，忌早段丢球。'),
  };
}

function buildM30() {
  const xgH = 1.35, xgA = 1.28;
  return {
    id: 'm30',
    group: 'C',
    matchday: 2,
    date: '2026-06-19',
    time: '18:00',
    time_local: '18:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '06:00',
    date_beijing: '6月20日',
    time_beijing_full: '北京时间 6月20日 06:00',
    venue: 'Gillette Stadium',
    city: 'Boston, USA',
    note: 'C组第2轮 · 苏格兰 vs 摩洛哥 · 波士顿',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Gordon; Hickey, Hanley, Souttar, Robertson; McTominay, McGregor; Gannon-Doak, McGinn, Christie; Adams',
      away: 'Bounou; Hakimi, Saïss, Aguerd; Mazraoui, Amrabat; Ziyech, Ounahi, Sabiri; En-Nesyri, Boufal',
      source: 'BBC / Sky 预测 · 非官方',
    }),
    home: team('Scotland', 'sc', 36, 70, ['D', 'L', 'W', 'D', 'L'], 'Steve Clarke',
      { name: 'Scott McTominay', pos: 'CM', club: 'Napoli', desc: '中场核心+远射', rating: 8.0 }),
    away: team('Morocco', 'ma', 13, 78, ['D', 'W', 'W', 'D', 'W'], 'Walid Regragui',
      { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', desc: '边路爆点', rating: 8.4 }),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [], note: '摩洛哥近年更强' },
    referee: pendingReferee('FIFA Match 30 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'C组均分乱局：McTominay vs Hakimi · 摩洛哥首轮平巴西 · 泊松倾向 1-1/1-2。', 65),
    weather: { temp: 22, humidity: 58, condition_cn: '波士顿温和', impact_summary: '气候影响低', home_adapt: 80, away_adapt: 82 },
    mystic: mysticBrief(48, 52, '苏格兰木火求变，摩洛哥金水相济；均分乱局宜稳守反击。'),
  };
}

function buildM29() {
  const xgH = 1.85, xgA = 0.75;
  return {
    id: 'm29',
    group: 'C',
    matchday: 2,
    date: '2026-06-19',
    time: '20:30',
    time_local: '20:30 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '08:30',
    date_beijing: '6月20日',
    time_beijing_full: '北京时间 6月20日 08:30',
    venue: 'Lincoln Financial Field',
    city: 'Philadelphia, USA',
    note: 'C组第2轮 · 巴西 vs 海地 · 费城',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-4-2',
      home: 'Alisson; Danilo, Marquinhos, Militão; Wendell, Casemiro; Vinícius, Paquetá, Rodrygo; Richarlison, Raphinha',
      away: 'Duverger; Jean, Surpris, Gérard; Pierre, Dumond; Jean-Baptiste, Nazon, Duverger; Arcus, Moreira',
      source: 'Globo / ESPN 预测 · 非官方',
    }),
    home: team('Brazil', 'br', 5, 88, ['D', 'W', 'W', 'W', 'D'], 'Carlo Ancelotti',
      { name: 'Vinícius Jr', pos: 'LW', club: 'Real Madrid', desc: '首轮平摩洛哥', rating: 9.0 }),
    away: team('Haiti', 'ht', 87, 62, ['L', 'D', 'L', 'W', 'L'], 'Sébastien Migné',
      { name: 'Duckens Nazon', pos: 'ST', club: 'Pau', desc: '锋线支点', rating: 7.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无大赛交锋' },
    referee: pendingReferee('FIFA Match 29 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '巴西首轮平摩洛哥需取胜：Vinícius+Paquetá vs 海地低位；泊松最可能 2-0/3-0。', 78),
    weather: { temp: 26, humidity: 62, condition_cn: '费城夏夜', impact_summary: '湿热中等', home_adapt: 84, away_adapt: 76 },
    mystic: mysticBrief(72, 28, '巴西火土旺盛，海地水木偏弱；热门宜早段破局。'),
  };
}

function buildM31() {
  const xgH = 1.48, xgA = 1.12;
  return {
    id: 'm31',
    group: 'D',
    matchday: 2,
    date: '2026-06-19',
    time: '20:00',
    time_local: '20:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '11:00',
    date_beijing: '6月20日',
    time_beijing_full: '北京时间 6月20日 11:00',
    venue: "Levi's Stadium",
    city: 'Santa Clara, USA',
    note: 'D组第2轮 · 土耳其 vs 巴拉圭 · 旧金山湾区',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-4-2',
      home: 'Günok; Çelik, Demiral, Bardakcı; Kökçü, Özcan; Yıldız, Güler, Aydın; Aktürkoğlu, Yılmaz',
      away: 'Martínez; Velázquez, Gómez, Alonso; Sanabria, Rojas; Romero, Sosa, Almirón; González, Sánchez',
      source: 'FotMob / ESPN 预测 · 非官方',
    }),
    home: team('Türkiye', 'tr', 26, 76, ['W', 'D', 'W', 'L', 'W'], 'Vincenzo Montella',
      { name: 'Arda Güler', pos: 'CAM', club: 'Real Madrid', desc: '组织核心', rating: 8.2 }),
    away: team('Paraguay', 'py', 52, 70, ['L', 'W', 'D', 'L', 'W'], 'Gustavo Alfaro',
      { name: 'Miguel Almirón', pos: 'RW', club: 'Atlanta United', desc: '反击速度', rating: 7.8 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [], note: '友谊赛土耳其占优' },
    referee: pendingReferee('FIFA Match 31 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'Yıldız/Güler 肋部 vs 巴拉圭低位；美国同日早场取胜则 D 组形势更复杂。', 68),
    weather: { temp: 24, humidity: 50, condition_cn: '湾区晴朗', impact_summary: '气候变量低', home_adapt: 82, away_adapt: 80 },
    mystic: mysticBrief(52, 48, '土耳其金火交争，巴拉圭土木守势；胜负取决于肋部渗透。'),
  };
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

let toArchive = (MATCH_DATA.todayMatches || []).filter(m => ['m25', 'm26', 'm27', 'm28'].includes(m.id));
if (toArchive.length !== 4) {
  toArchive = ['m25', 'm26', 'm27', 'm28']
    .map(id => (RESULTS_DATA.finishedMatches || []).find(m => m.id === id))
    .filter(Boolean);
}
if (toArchive.length !== 4) {
  console.warn('⚠ Expected 4 Day 8 matches to archive, got', toArchive.length, toArchive.map(m => m.id));
}

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 8 完结 · Day 9 预览';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 Day 8 · 捷1-1南非 · 瑞4-1波 · 加6-0卡 · 墨1-0韩', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: '墨西哥锁定 32 强 · David 帽子戏法 · Manzambi 替补双响', time: '球星' },
  { tag: 'OFFICIAL', text: 'A组墨西哥 6 分 · B组加拿大&瑞士 4 分', time: '积分榜' },
  { tag: 'PREVIEW', text: '📅 6月20日 · 美国-澳(03:00) · 苏-摩(06:00) · 巴-海(08:30) · 土-巴(11:00)', time: '今日赛程' },
  ...RESULTS_DATA.breakingNews.filter(n => !/6月20日/.test(n.text || '')).slice(0, 6),
].slice(0, 12);

RESULTS_DATA.finishedMatches = upsertFinished(RESULTS_DATA.finishedMatches || [], toArchive);

let snaps = RESULTS_DATA.groupSnapshots || [];
snaps = upsertGroup(snaps, 'A', 'A组 · 第2轮后', [
  { team: 'Mexico', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 4, ga: 0 },
  { team: 'South Korea', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2 },
  { team: 'Czechia', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 2, ga: 3 },
  { team: 'South Africa', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 3 },
]);
snaps = upsertGroup(snaps, 'B', 'B组 · 第2轮后', [
  { team: 'Canada', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 7, ga: 1 },
  { team: 'Switzerland', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 5, ga: 2 },
  { team: 'Bosnia and Herzegovina', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 2, ga: 5 },
  { team: 'Qatar', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 7 },
]);
RESULTS_DATA.groupSnapshots = snaps;

const todayMatches = [buildM32(), buildM30(), buildM29(), buildM31()];
const first = todayMatches[0];
const p0 = first.prediction;

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 9 preview',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：捷1-1南非 · 瑞4-1波 · 加6-0卡 · 墨1-0韩 · 墨西哥锁定32强', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 美国-澳(03:00) · 苏-摩(06:00) · 巴-海(08:30) · 土-巴(11:00)', time: '6月20日' },
    { tag: 'PREVIEW', text: 'C/D组第2轮：东道主美国西雅图 · 巴西 vs 海地 · Yıldız/Güler', time: '焦点' },
    { tag: 'OFFICIAL', text: 'A/B组第2轮完结 · 墨西哥&加拿大领跑', time: '积分榜' },
    { tag: 'INJURY', text: 'Koné 骨折赛季报销 · Mokoena 停赛 · 关注美国队检', time: '伤情' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认', time: '裁判' },
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
    teaser: 'D组第2轮：东道主美国 vs 澳大利亚',
    home_win: p0.home_win,
    draw: p0.draw,
    away_win: p0.away_win,
    predicted_score: p0.score,
    key_player_home: first.home.star?.name || 'Christian Pulisic',
    key_player_away: first.away.star?.name || 'Mathew Ryan',
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
  todayDate: '2026-06-20',
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
  standings: snaps.filter(g => ['A', 'B', 'C', 'D'].includes(g.group)),
  injuries: { note: 'Koné 骨折 · Mokoena 停赛' },
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
  `// 今日赛事 — Day 9 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/roll-day9.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Archived:', toArchive.map(m => `${m.id} ${m.actualResult?.home_score ?? '?'}-${m.actualResult?.away_score ?? '?'}`).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
