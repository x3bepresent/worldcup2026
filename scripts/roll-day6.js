/**
 * Day 6 rollover: archive m14/m16/m13/m15 → results-data.js, set today m17/m18/m19/m20 (6月17日北京 · 4场)
 * Run: node scripts/roll-day6.js && node scripts/enrich-day6.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { pendingReferee, lineupFromPrediction } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const TS = '2026-06-17T12:00:00+08:00';

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
      day: '丁亥日',
      day_summary: '丁亥日——火水既济，强队宜早破局，弱旅守中待变。',
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
    rain_chance: 20,
    condition_cn,
    impact_level: 'LOW',
    impact_summary: summary,
    home_adapt: homeAdapt,
    away_adapt: awayAdapt,
    weather_factors: [],
    historical_note: '',
  };
}

function archiveMatch(m, result, keyFactorAppend) {
  const copy = JSON.parse(JSON.stringify(m));
  copy.note = (copy.note || '').replace(/ · 待赛.*/, '').replace(/ · 已结束.*/, '').replace(/ · 官方.*$/, '') + ` · 已结束 ${result.home_score}-${result.away_score}`;
  copy.actualResult = result;
  if (copy.lineup) {
    copy.lineup.note = `${(copy.lineup.note || '').replace(/ · 全场.*/, '')} · 全场 ${result.home_score}-${result.away_score}`.trim();
    copy.lineup.updated = TS;
  }
  if (copy.prediction) {
    copy.prediction = { ...copy.prediction, key_factor: keyFactorAppend || copy.prediction.key_factor };
  }
  return copy;
}

const ACTUAL = {
  m14: {
    home_score: 0,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: '无进球 · Vozinha 多次扑救零封',
    highlights: 'xG 2.29-0.29 · 控球 74%-26% · Yamal 71\'/Nico Williams 87\' 替补 · Pedri 8.6 MOTM · Vozinha 9.0',
  },
  m16: {
    home_score: 1,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Ashour (hydration break); Hany OG 65' (Lukaku on, Meunier cross)",
    highlights: 'Salah 34 岁生日战 · De Bruyne 中柱 · Lukaku 65\' 替补即奏效 · 埃及仍无世界杯胜绩 · xG 约1.4-1.1',
  },
  m13: {
    home_score: 1,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Al-Amri 41' (corner spill); Maxi Araújo 80' (rebound)",
    highlights: '迈阿密 31°C 湿热 · Ugarte 中柱 · Bielsa 半场换 Núñez/Viña · 乌拉圭控球碾压但未取3分',
  },
  m15: {
    home_score: 2,
    away_score: 2,
    status: 'FT',
    label: '全场结束',
    scorers: "Just 7', 55' (Wood); Rezaeian 32'; Mohebi 64' (Rezaeian cross)",
    highlights: 'Just 双响 · Wood 两次助攻 · Taremi 中柱 · Crocombe 出击险酿祸 · 场外政治抗议 · xG 约1.8-1.6',
  },
};

const REVIEW = {
  m14: '【赛后复盘】赛前主胜78%/最可能3-0；实际0-0。Vozinha 9.0 零封历史冷门，Gavi 首发 Yamal 71\' 替补；xG 2.29-0.29。方向：平局命中（14%）；68年来首次单日四场全平之一。',
  m16: '【赛后复盘】赛前主胜56%/最可能2-1；实际1-1。Ashour 补水点前破门，Lukaku 65\' 替补致 Hany 乌龙；Salah 75\' 被换。方向：平局命中（23%）；埃及四届世界杯仍零胜。',
  m13: '【赛后复盘】赛前客胜62%/最可能0-2；实际1-1。Al-Amri 半场前破门，Maxi Araújo 80\' 扳平；乌拉圭 Dominates 但 H 组四队均1分。方向：平局命中（22%）。',
  m15: '【赛后复盘】赛前主胜58%/最可能2-0；实际2-2。Just 双响 Wood 连线，Rezaeian+Mohebi 两次扳平；G组四队均1分。方向：平局命中（26%）；新西兰仍未首胜但取分。',
};

function buildM17() {
  const xgH = 2.3, xgA = 0.9;
  return {
    id: 'm17',
    group: 'I',
    matchday: 1,
    date: '2026-06-16',
    time: '15:00',
    time_local: '15:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '03:00',
    date_beijing: '6月17日',
    time_beijing_full: '北京时间 6月17日 03:00',
    venue: 'MetLife Stadium',
    city: 'East Rutherford, USA',
    note: 'I组揭幕 · 法国 vs 塞内加尔 · 纽约/新泽西',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-3-3',
      home: 'Maignan; Koundé, Saliba, Upamecano, Hernandez; Tchouaméni, Kanté, Camavinga; Dembélé, Mbappé, Thuram',
      away: 'Diouf; Sabaly, Koulibaly, Diallo, Mendy; Gueye, Ndiaye; Mané, Jackson, Sarr',
      source: 'ESPN / L\'Équipe 预测 · 非官方',
    }),
    home: team('France', 'fr', 3, 91, ['W', 'W', 'W', 'D', 'W'], 'Didier Deschamps',
      { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', desc: 'I组揭幕核心，速度与终结', rating: 9.2 }),
    away: team('Senegal', 'sn', 20, 77, ['W', 'D', 'W', 'W', 'D'], 'Aliou Cissé',
      { name: 'Sadio Mané', pos: 'LW', club: 'Al-Nassr', desc: '非洲杯冠军队长，反击发起点', rating: 8.5 }),
    h2h: { home_wins: 2, draws: 0, away_wins: 0, recent: [{ year: 2022, comp: '友谊赛', score: '5-1', winner: 'France' }], note: '法国历史占优' },
    referee: pendingReferee('FIFA Match 17 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'I组焦点：Mbappé vs Mané，法国深度碾压但塞内加尔身体+转换是冷门点；xG 2.3-0.9 泊松最可能 2-0。', 68),
    weather: weatherBlock(24, 58, '午后偏热', 'MetLife 开放式，法国传控深度占优', 88, 76),
    mystic: mysticBrief(72, 35, '法国火德盛，塞内加尔木气受克——Mané 如孤雷，先破门则指数骤降。'),
  };
}

function buildM18() {
  const xgH = 0.82, xgA = 1.72;
  return {
    id: 'm18',
    group: 'I',
    matchday: 1,
    date: '2026-06-16',
    time: '18:00',
    time_local: '18:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '06:00',
    date_beijing: '6月17日',
    time_beijing_full: '北京时间 6月17日 06:00',
    venue: 'Gillette Stadium',
    city: 'Foxborough, USA',
    note: 'I组第2场 · 伊拉克 vs 挪威 · 波士顿',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-3-3',
      home: 'Hassan; Adnan, Tareq, Natiq, Ali; Alaa, Bashar; Aymen, Zidane, Mohanad; Hussein',
      away: 'Nyland; Ryerson, Høibråten, Nørgaard, Wolfe; Berg, Ødegaard; Dønnum, Haaland, Sørloth',
      source: 'FotMob 预测 · 非官方',
    }),
    home: team('Iraq', 'iq', 78, 56, ['L', 'D', 'W', 'L', 'L'], 'Jesús Casas',
      { name: 'Aymen Hussein', pos: 'ST', club: 'Al-Quwa Al-Jawiya', desc: '锋线支点，定位球威胁', rating: 7.0 }),
    away: team('Norway', 'no', 26, 76, ['W', 'W', 'D', 'W', 'D'], 'Ståle Solbakken',
      { name: 'Erling Haaland', pos: 'ST', club: 'Man City', desc: 'I组最大个人威胁，终结核心', rating: 9.0 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
    referee: pendingReferee('FIFA Match 18 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'Haaland+Ødegaard 对位伊拉克低位：挪威 xG 1.72 明显占优；伊拉克守 0-0 求 1 分是现实目标；泊松最可能 0-2/1-2。', 76),
    weather: weatherBlock(22, 55, '傍晚舒适', '新英格兰初夏，挪威适应良好', 70, 84),
    mystic: mysticBrief(28, 68, '挪威金水相生，Haaland 如巨斧破阵；伊拉克宜守不宜攻。'),
  };
}

function buildM19() {
  const xgH = 2.8, xgA = 0.6;
  return {
    id: 'm19',
    group: 'J',
    matchday: 1,
    date: '2026-06-16',
    time: '20:00',
    time_local: '20:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '09:00',
    date_beijing: '6月17日',
    time_beijing_full: '北京时间 6月17日 09:00',
    venue: 'Arrowhead Stadium',
    city: 'Kansas City, USA',
    note: 'J组揭幕 · 阿根廷 vs 阿尔及利亚 · 堪萨斯城',
    lineup: lineupFromPrediction({
      formation: '4-3-3 / 4-2-3-1',
      home: 'Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Lautaro, Garnacho',
      away: 'Mandrea; Atal, Mandi, Belkacemi; Benrahma, Aouar, Bentaleb; Mahrez, Bounedjah, Boussoufa',
      source: 'ESPN / TyC 预测 · 非官方',
    }),
    home: team('Argentina', 'ar', 1, 94, ['W', 'W', 'W', 'W', 'D'], 'Lionel Scaloni',
      { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', desc: '最后一届世界杯，J组核心', rating: 9.3 }),
    away: team('Algeria', 'dz', 46, 67, ['W', 'W', 'D', 'L', 'W'], 'Djamel Belmadi',
      { name: 'Riyad Mahrez', pos: 'RW', club: 'Al-Ahli', desc: '非洲杯冠军核心，左路唯一爆点', rating: 8.0 }),
    h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [{ year: 2014, comp: '友谊赛', score: '4-2', winner: 'Argentina' }], note: '阿根廷历史占优' },
    referee: pendingReferee('FIFA Match 19 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, '卫冕冠军 vs 非洲劲旅：Messi/Lautaro 对位 Belmadi 低位，Mahrez 反击是唯一变数；xG 2.8-0.6 泊松最可能 3-0/2-0。', 82),
    weather: weatherBlock(29, 60, '中西部午后偏热', 'Arrowhead 开放式，阿根廷深度碾压', 86, 72),
    mystic: mysticBrief(85, 25, '阿根廷天火下照，Mahrez 如暗星——先破门则 J 组格局生变。'),
  };
}

function buildM20() {
  const xgH = 1.65, xgA = 0.75;
  return {
    id: 'm20',
    group: 'J',
    matchday: 1,
    date: '2026-06-16',
    time: '21:00',
    time_local: '21:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '12:00',
    date_beijing: '6月17日',
    time_beijing_full: '北京时间 6月17日 12:00',
    venue: "Levi's Stadium",
    city: 'Santa Clara, USA',
    note: 'J组第2场 · 奥地利 vs 约旦 · 旧金山湾区',
    lineup: lineupFromPrediction({
      formation: '4-2-3-1 / 4-4-2',
      home: 'Pentz; Posch, Alaba, Lienhart, Mwene; Seiwald, Schlager; Baumgartner, Sabitzer, Grüll; Arnautović',
      away: 'Abu Laila; Al-Rosan, Al-Ajalin, Al-Damour; Al-Naimat, Al-Rawashdeh, Al-Tamari; Al-Malki, Al-Rashdan; Al-Dardour',
      source: 'Opta / FotMob 预测 · 非官方',
    }),
    home: team('Austria', 'at', 28, 74, ['W', 'D', 'W', 'W', 'D'], 'Ralf Rangnick',
      { name: 'David Alaba', pos: 'CB', club: 'Real Madrid', desc: '防线领袖，出球+防空核心', rating: 8.5 }),
    away: team('Jordan', 'jo', 72, 57, ['D', 'W', 'D', 'L', 'D'], 'Hussein Ammouta',
      { name: 'Musa Al-Tamari', pos: 'RW', club: 'Montpellier', desc: '亚洲杯最佳球员，反击速度点', rating: 7.8 }),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式交锋' },
    referee: pendingReferee('FIFA Match 20 裁判名单赛前公布。'),
    prediction: pred(xgH, xgA, 'Rangnick 高位压迫 vs Ammouta 低位：Alaba/Arnautović 对位 Jordan 英冠班底；xG 1.65-0.75 泊松最可能 2-0/1-0。', 74),
    weather: weatherBlock(21, 52, '湾区夜场凉爽', 'Levi\'s 人工草皮，奥地利传控略占优', 82, 74),
    mystic: mysticBrief(62, 38, '奥地利金土相涵，约旦木气孤悬——Al-Tamari 如独木难支。'),
  };
}

// ── Archive Day 5 ───────────────────────────────────────────
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

const byId = id => MATCH_DATA.todayMatches.find(m => m.id === id);

const archived = ['m14', 'm16', 'm13', 'm15'].map(id => {
  const m = byId(id);
  if (!m) throw new Error(`Missing match ${id}`);
  return archiveMatch(m, ACTUAL[id], REVIEW[id]);
});

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA + FotMob / FOX 官方赛果 · Day 5';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月16日 · 四场全平创68年纪录 · 西0-0佛 · 比1-1埃 · 沙1-1乌 · 伊2-2新', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'G/H组：四队均1分 · Vozinha 9.0 · Just 双响 · Lukaku 替补致乌龙', time: '小组形势' },
  { tag: 'LINEUP', text: '西班牙战：Vozinha 零封 · Pedri 8.6 · Yamal 71\' 替补', time: '6月16日' },
  { tag: 'LINEUP', text: '比埃战：Ashour 破门 · Lukaku 65\' · Hany 乌龙 · Salah 生日战', time: '6月16日' },
  { tag: 'LINEUP', text: '沙乌战：Al-Amri 41\' · Maxi Araújo 80\' · 迈阿密湿热', time: '6月16日' },
  { tag: 'LINEUP', text: "伊新战：Just 7'+55' · Rezaeian/Mohebi 扳平 · Wood 两次助攻", time: '6月16日' },
  { tag: 'OFFICIAL', text: '🏁 6月15日 · 德国7-1 · 荷兰2-2日本 · 详见下方', time: '前日回顾' },
  ...RESULTS_DATA.breakingNews.slice(0, 4),
].slice(0, 12);

RESULTS_DATA.finishedMatches = [...RESULTS_DATA.finishedMatches, ...archived];

function upsertGroup(group, label, table) {
  const snaps = RESULTS_DATA.groupSnapshots || [];
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  RESULTS_DATA.groupSnapshots = snaps;
}

upsertGroup('G', 'G组 · 第1轮（4场已赛）', [
  { team: 'Belgium', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Egypt', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Iran', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
  { team: 'New Zealand', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
]);

upsertGroup('H', 'H组 · 第1轮（4场已赛）', [
  { team: 'Spain', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0 },
  { team: 'Cape Verde', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0 },
  { team: 'Saudi Arabia', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Uruguay', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
]);

const todayMatches = [buildM17(), buildM18(), buildM19(), buildM20()];

const NEW_MATCH_DATA = {
  lastUpdated: TS,
  syncSource: 'FIFA 赛程 · Day 6 preview',
  breakingNews: [
    { tag: 'OFFICIAL', text: '🏁 昨日：四场全平 · 西0-0佛 · 比1-1埃 · 沙1-1乌 · 伊2-2新 · 详见「过往赛果」', time: '赛果回顾' },
    { tag: 'PREVIEW', text: '📅 今日4场 · 法国-塞内加尔(03:00) · 伊拉克-挪威(06:00) · 阿根廷-阿尔及利亚(09:00) · 奥地利-约旦(12:00)', time: '6月17日' },
    { tag: 'PREVIEW', text: 'I/J组揭幕：Mbappé vs Mané · Haaland · Messi 最后一届 · Rangnick 高位压迫', time: '焦点' },
    { tag: 'OFFICIAL', text: 'G/H组四队均1分 · 今日 I/J 组开战', time: '积分榜' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认 · 未确认显示「等待官方确认」', time: '裁判' },
  ],
  todayMatches,
  nextMatch: {
    group: 'I',
    matchday: 1,
    date: '2026-06-16',
    time: '15:00',
    time_local: '15:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '03:00',
    date_beijing: '6月17日',
    time_beijing_full: '北京时间 6月17日 03:00',
    venue: 'MetLife Stadium',
    city: 'East Rutherford, USA',
    home: { name: 'France', iso: 'fr', fifaRank: 3, rating: 91 },
    away: { name: 'Senegal', iso: 'sn', fifaRank: 20, rating: 77 },
    teaser: 'I组揭幕：法国 vs 非洲杯冠军塞内加尔，Mbappé vs Mané。',
    home_win: 62,
    draw: 24,
    away_win: 14,
    predicted_score: '2-0',
    key_player_home: 'Kylian Mbappé',
    key_player_away: 'Sadio Mané',
  },
  upcomingMatches: [
    {
      group: 'J',
      time_beijing_full: '北京时间 6月17日 09:00',
      venue: 'Arrowhead Stadium',
      city: 'Kansas City, USA',
      home: { name: 'Argentina', iso: 'ar' },
      away: { name: 'Algeria', iso: 'dz' },
      teaser: 'J组：Messi vs Mahrez',
    },
    {
      group: 'K',
      time_beijing_full: '北京时间 6月18日 01:00',
      venue: 'NRG Stadium',
      city: 'Houston, USA',
      home: { name: 'Portugal', iso: 'pt' },
      away: { name: 'Congo DR', iso: 'cd' },
      teaser: 'K组揭幕：葡萄牙 vs 刚果（金）',
    },
  ],
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 6 preview\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`
);

console.log('✅ Archived:', archived.map(m => `${m.id} ${m.actualResult.home_score}-${m.actualResult.away_score}`).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => `${m.id} ${m.home.name} vs ${m.away.name}`).join(' | '));
console.log('✅ Predictions:', todayMatches.map(m => `${m.id} ${m.prediction.score} (${m.prediction.home_win}/${m.prediction.draw}/${m.prediction.away_win})`).join('\n   '));
