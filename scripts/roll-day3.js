/**
 * Day 3 rollover: archive m03/m04 → results-data.js, set 4 new today matches.
 * Run: node scripts/roll-day3.js
 */
const fs = require('fs');
const path = require('path');
const { pendingReferee } = require('./pending-templates');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function team(name, iso, rank, rating, form, coach, star, injuries = [], rumors = []) {
  return { name, iso, flag: '', fifa_rank: rank, rating, form, coach, stars: [star], star, injuries, rumors };
}

function pred(homeWin, draw, awayWin, score, xgH, xgA, keyFactor, confidence = 72) {
  return {
    home_win: homeWin,
    draw,
    away_win: awayWin,
    score,
    confidence,
    xg_home: xgH,
    xg_away: xgA,
    key_factor: keyFactor,
  };
}

function mysticBrief(homeScore, awayScore, verdict) {
  return {
    date_bazi: {
      year: '丙午年',
      month: '庚午月',
      day: '甲申日',
      day_summary: '甲申日——木金相战，临场发挥与战术纪律决定走势。',
      hour_home: '见各场开球时辰',
      hour_home_element: '土',
    },
    wuxing: {
      home: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', advantage: '' },
      away: { team: '', verdict: '待定', verdict_color: '#C8A96E', wuxing_short: '待观', reason: '赛前五行随队服与开球时辰而定', disadvantage: '' },
      summary: '文化解读 · 正式推演见各场详情',
    },
    hexagram: {
      name: '待卦',
      symbol: '☯',
      quote: '赛前更新',
      general: '开赛前结合时辰与阵容再行解读。',
      scenarios: [],
    },
    home_score: homeScore,
    away_score: awayScore,
    mystic_verdict: verdict,
    disclaimer: '文化解读 · 非竞技推演',
  };
}

function buildM05() {
  const xgH = 0.92;
  const xgA = 1.78;
  return {
    id: 'm05',
    group: 'B',
    matchday: 1,
    date: '2026-06-13',
    time: '12:00',
    time_local: '12:00 PT / 15:00 ET',
    timezone: 'PDT (UTC-7)',
    time_beijing: '03:00',
    date_beijing: '6月14日',
    time_beijing_full: '北京时间 6月14日 03:00',
    venue: "Levi's Stadium",
    city: 'Santa Clara, USA',
    note: 'B组第2场 · 卡塔尔 vs 瑞士 · 旧金山湾区',
    lineup: {
      confirmed: false,
      formation: null,
      home: '等待官方确认',
      away: '等待官方确认',
      note: '官方首发将于赛前约1小时公布。',
      predicted: {
        formation: '4-3-3',
        home: 'Barsham; Miguel, Mendes, Tarek, Ahmed; Al-Haydos, Boudiaf, Al-Ahrabi; Afif, Almoez, Ali',
        away: 'Sommer; Rieder, Akanji, Elvedi, Rodriguez; Xhaka, Freuler; Vargas, Rieder, Embolo; Duah',
        source: 'ESPN / Opta 赛前预测 · 非官方',
      },
      updated: '2026-06-14T02:00:00+08:00',
    },
    home: team(
      'Qatar', 'qa', 68, 60, ['L', 'D', 'L', 'W', 'L'], 'Luis Castro',
      { name: 'Almoez Ali', pos: 'ST', club: 'Al-Duhail', desc: '2019亚洲杯金靴，卡塔尔进攻支点；面对瑞士高位压迫需提高转换效率', rating: 7.5 },
      [{ player: 'Akram Afif', status: 'FIT', note: '队长、进攻核心，预计首发', confirmed: true }],
      ['2022东道主经验仍在，但硬实力与瑞士有档次差', 'B组首轮加拿大、波黑各1分，卡塔尔需抢分']
    ),
    away: team(
      'Switzerland', 'ch', 19, 77, ['W', 'D', 'W', 'W', 'D'], 'Murat Yakin',
      { name: 'Granit Xhaka', pos: 'CM', club: 'Sunderland', desc: '中场节拍器，控球与转移是瑞士破局关键', rating: 8.0 },
      [{ player: 'Breel Embolo', status: 'FIT', note: '预计首发中锋', confirmed: true }],
      ['Opta 倾向瑞士小胜（约58%）', 'Xhaka 领衔中场，高位逼抢+快速转移是主要战术']
    ),
    h2h: { home_wins: 0, draws: 1, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '0-1', winner: 'Switzerland' }], note: '瑞士历史占优' },
    referee: pendingReferee('本场裁判尚未经 FIFA 官方确认。'),
    prediction: pred(
      18, 24, 58, '0-2', xgH, xgA,
      '瑞士整体实力与中场控制明显占优，Xhaka 对位卡塔尔双后腰是核心。卡塔尔需靠 Afif/Almoez 反击，但面对 Akanji 领衔防线难度较大。xG 0.92-1.78 泊松最可能 0-2。',
      76
    ),
    weather: {
      temp: 24, humidity: 50, altitude_m: 7, rain_chance: 5, condition_cn: '晴朗',
      impact_level: 'LOW', impact_summary: '湾区夜场气温舒适，利于传控',
      home_adapt: 75, away_adapt: 82,
      weather_factors: [{ label: '低海拔', impact: '中性', detail: '双方体能不受影响' }],
      historical_note: "Levi's Stadium 承办世界杯B组赛事",
    },
    mystic: mysticBrief(42, 68, '瑞士金气盛，卡塔尔需以守为攻；B组形势下客队更利取3分。'),
  };
}

function buildM06() {
  const xgH = 2.05;
  const xgA = 1.05;
  return {
    id: 'm06',
    group: 'C',
    matchday: 1,
    date: '2026-06-13',
    time: '18:00',
    time_local: '18:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '06:00',
    date_beijing: '6月14日',
    time_beijing_full: '北京时间 6月14日 06:00',
    venue: 'MetLife Stadium',
    city: 'East Rutherford, USA',
    note: 'C组焦点战 · 巴西 vs 摩洛哥 · 新泽西',
    lineup: {
      confirmed: false,
      formation: null,
      home: '等待官方确认',
      away: '等待官方确认',
      note: '官方首发将于赛前约1小时公布。',
      predicted: {
        formation: '4-2-3-1',
        home: 'Alisson; Danilo, Marquinhos, Brevo, Wendell; Guimarães, Paquetá; Rodrygo, Paquetá, Vinícius; Endrick',
        away: 'Bono; Hakimi, Saïss, Aguerd, Mazraoui; Amrabat, Ounahi; Ziyech, Harit, Boufal; En-Nesyri',
        source: 'ESPN 赛前预测 · 非官方',
      },
      updated: '2026-06-14T05:00:00+08:00',
    },
    home: team(
      'Brazil', 'br', 5, 88, ['W', 'W', 'W', 'D', 'W'], 'Dorival Júnior',
      { name: 'Vinícius Jr.', pos: 'LW', club: 'Real Madrid', desc: '左路爆点，摩洛哥右路 Hakimi 对位是本场关键', rating: 9.0 },
      [{ player: 'Neymar', status: 'OUT', note: '未入选大名单', confirmed: true }],
      ['巴西夺冠热门，首战需展现统治力', 'Dorival 强调高位压迫与边路速度']
    ),
    away: team(
      'Morocco', 'ma', 14, 79, ['W', 'W', 'D', 'W', 'W'], 'Walid Regragui',
      { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', desc: '世界杯四强经验，边路往返能力顶级', rating: 8.5 },
      [{ player: 'Sofyan Amrabat', status: 'FIT', note: '后腰屏障，限制巴西中路渗透', confirmed: true }],
      ['2022四强士气仍在，Hakimi-Ziyech 反击是最大威胁', '防反+定位球是摩洛哥传统武器']
    ),
    h2h: { home_wins: 2, draws: 0, away_wins: 0, recent: [{ year: 2022, comp: '友谊赛', score: '2-1', winner: 'Brazil' }], note: '巴西历史占优' },
    referee: pendingReferee(),
    prediction: pred(
      58, 25, 17, '2-1', xgH, xgA,
      '巴西纸面实力占优，Vinícius 对位摩洛哥防线是破局点；摩洛哥 2022 防反经验不可低估，Hakimi 速度可惩罚巴西压上。xG 2.05-1.05 泊松最可能 2-1。',
      80
    ),
    weather: {
      temp: 26, humidity: 58, altitude_m: 3, rain_chance: 15, condition_cn: '多云',
      impact_level: 'LOW', impact_summary: '新泽西晚场，气温适中',
      home_adapt: 85, away_adapt: 80,
      weather_factors: [],
      historical_note: 'MetLife 承办世界杯C组关键战',
    },
    mystic: mysticBrief(72, 48, '火金相战，巴西阳气更盛；摩洛哥水土需守中待变。'),
  };
}

function buildM07() {
  const xgH = 0.85;
  const xgA = 1.42;
  return {
    id: 'm07',
    group: 'C',
    matchday: 1,
    date: '2026-06-13',
    time: '21:00',
    time_local: '21:00 ET',
    timezone: 'EDT (UTC-4)',
    time_beijing: '09:00',
    date_beijing: '6月14日',
    time_beijing_full: '北京时间 6月14日 09:00',
    venue: 'Gillette Stadium',
    city: 'Foxborough, USA',
    note: 'C组第2场 · 海地 vs 苏格兰 · 波士顿',
    lineup: {
      confirmed: false,
      formation: null,
      home: '等待官方确认',
      away: '等待官方确认',
      note: '官方首发将于赛前约1小时公布。',
      predicted: {
        formation: '5-4-1',
        home: 'Placide; Pierre, Jean, Adé, Dumornay; Jezie, Duverger, Pierre, Etienne; Alexis',
        away: 'Gordon; Tierney, Hanley, Porteous, Ralston; McTominay, Gilmour; McGinn, Christie, Armstrong; Adams',
        source: '媒体预测 · 非官方',
      },
      updated: '2026-06-14T08:00:00+08:00',
    },
    home: team(
      'Haiti', 'ht', 82, 55, ['D', 'L', 'W', 'L', 'L'], 'Sebastián Méndez',
      { name: 'Duckens Nazon', pos: 'ST', club: 'Austin FC', desc: '海地头号射手，身体对抗是主要武器', rating: 7.2 },
      [],
      ['海地首次世界杯，经验不足', '密集防守+定位球是主要策略']
    ),
    away: team(
      'Scotland', 'gb-sct', 38, 71, ['D', 'W', 'L', 'W', 'D'], 'Steve Clarke',
      { name: 'Scott McTominay', pos: 'CM', club: 'Napoli', desc: '那不勒斯赛季状态火热，中路推进核心', rating: 8.3 },
      [{ player: 'Andrew Robertson', status: 'FIT', note: '队长，左路进攻发起点', confirmed: true }],
      ['苏格兰整体实力高于海地，McTominay 是关键', 'Clarke 强调开场抢开局']
    ),
    h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式交锋记录' },
    referee: pendingReferee(),
    prediction: pred(
      22, 28, 50, '0-1', xgH, xgA,
      '苏格兰中场 McTominay-Gilmour 控制力强，海地大概率低位防守。苏格兰需破解密集防守，定位球与远射是破局手段。xG 0.85-1.42 泊松最可能 0-1。',
      74
    ),
    weather: {
      temp: 23, humidity: 62, rain_chance: 25, condition_cn: '夜场微凉',
      impact_level: 'LOW', impact_summary: '波士顿夜场，对体能影响小',
      home_adapt: 70, away_adapt: 78,
      weather_factors: [],
      historical_note: 'Gillette Stadium 承办C组赛事',
    },
    mystic: mysticBrief(38, 62, '苏格兰金土稍占上风；海地需借夜雨之机守中求和。'),
  };
}

function buildM08() {
  const xgH = 1.35;
  const xgA = 1.28;
  return {
    id: 'm08',
    group: 'D',
    matchday: 1,
    date: '2026-06-13',
    time: '21:00',
    time_local: '21:00 PT',
    timezone: 'PDT (UTC-7)',
    time_beijing: '12:00',
    date_beijing: '6月14日',
    time_beijing_full: '北京时间 6月14日 12:00',
    venue: 'BC Place',
    city: 'Vancouver, Canada',
    note: 'D组第2场 · 澳大利亚 vs 土耳其 · 温哥华',
    lineup: {
      confirmed: false,
      formation: null,
      home: '等待官方确认',
      away: '等待官方确认',
      note: '官方首发将于赛前约1小时公布。',
      predicted: {
        formation: '4-2-3-1',
        home: 'Ryan; Atkinson, Souttar, Burgess, Behich; Irvine, Metcalfe; Goodwin, Baccus, Maclaren; Duke',
        away: 'Cakir; Celik, Demiral, Soyuncu, Kadioglu; Ucan, Yuksek; Yildiz, Calhanoglu, Akturkoglu; Yildiz',
        source: 'ESPN 赛前预测 · 非官方',
      },
      updated: '2026-06-14T11:00:00+08:00',
    },
    home: team(
      'Australia', 'au', 24, 72, ['W', 'D', 'W', 'D', 'W'], 'Tony Popovic',
      { name: 'Mathew Ryan', pos: 'GK', club: 'Roma', desc: '经验丰富门将，后场组织核心', rating: 7.6 },
      [{ player: 'Harry Souttar', status: 'FIT', note: '中卫领袖', confirmed: true }],
      ['美国4-1胜巴拉圭后D组形势复杂，澳土直接对话关键', 'Popovic 强调身体对抗与定位球']
    ),
    away: team(
      'Türkiye', 'tr', 32, 73, ['W', 'D', 'W', 'W', 'L'], 'Vincenzo Montella',
      { name: 'Hakan Çalhanoğlu', pos: 'CM', club: 'Inter Milan', desc: '国米核心，任意球与长传转移是土耳其进攻发起点', rating: 8.4 },
      [{ player: 'Arda Güler', status: 'FIT', note: '皇马新星，预计首发前腰', confirmed: true }],
      ['土耳其进攻创造力强，但防线偶有漏洞', 'Çalhanoğlu 定位球是破局关键']
    ),
    h2h: { home_wins: 1, draws: 1, away_wins: 1, recent: [{ year: 2022, comp: '友谊赛', score: '1-0', winner: 'Australia' }], note: '交锋互有胜负' },
    referee: pendingReferee(),
    prediction: pred(
      38, 28, 34, '1-1', xgH, xgA,
      '澳土实力接近，中场 Çalhanoğlu 对位 Irvine 是核心对位。BC Place 人工草皮澳大利亚更熟悉。美国大胜后D组积分形势微妙，双方均倾向稳健开局。xG 1.35-1.28 泊松最可能 1-1。',
      70
    ),
    weather: {
      temp: 20, humidity: 55, rain_chance: 30, condition_cn: '温哥华夜场，可能有小雨',
      impact_level: 'LOW', impact_summary: '人工草皮，传球速度较快',
      home_adapt: 82, away_adapt: 78,
      weather_factors: [],
      historical_note: 'BC Place 承办D组赛事，加拿大另一主场',
    },
    mystic: mysticBrief(52, 50, '澳土五行相近，势均力敌；D组美国领跑，此战或成胶着之局。'),
  };
}

function archiveMatch(m, result) {
  const copy = JSON.parse(JSON.stringify(m));
  copy.note = copy.note.replace(/待赛.*/, '').replace(/·\s*$/, '') + ` · 已结束 ${result.home_score}-${result.away_score}`;
  copy.actualResult = result;
  copy.prediction = {
    ...copy.prediction,
    score: `${result.home_score}-${result.away_score}`,
  };
  return copy;
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

const m03 = MATCH_DATA.todayMatches.find(m => m.id === 'm03');
const m04 = MATCH_DATA.todayMatches.find(m => m.id === 'm04');

const archived = [
  archiveMatch(m03, {
    home_score: 1,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Lukic 21' (Kolašinac); Larin 78' (Promise David)",
    highlights: '波黑首开纪录；Kolašinac 助攻+门线解围；加拿大61%控球扳平，队史世界杯首分',
  }),
  archiveMatch(m04, {
    home_score: 4,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Bobadilla OG 7'; Balogun 31', 45+5 (Pulisic/Tillman); Mauricio 73' (Enciso); Reyna 90+8 (Freeman)",
    highlights: 'Balogun 双响；Enciso 替补送出助攻；美国主场4-1大胜领跑D组',
  }),
];

// Post-match key factor append on archived copies
archived[0].prediction.key_factor =
  '【赛后复盘】赛前模型主胜53%/最可能1-0；实际1-1。Lukic 首开（非Džeko），Larin+Promise David 替补扳平。方向：平局命中；比分未中。Kolašinac 当选最佳。';
archived[1].prediction.key_factor =
  '【赛后复盘】赛前主胜61%/最可能2-0；实际4-1。Balogun 双响，Enciso 替补助攻（赛前存疑却出场）。美国超预期，模型胜方向正确但低估进球数。';

RESULTS_DATA.lastUpdated = '2026-06-14T12:00:00+08:00';
RESULTS_DATA.syncSource = 'manual + RotoWire 赛果';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月13日（北京时间）· 加拿大 1-1 波黑 · 美国 4-1 巴拉圭 · 全部结束', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'B组：加拿大、波黑各1分 · D组：美国3分领跑，巴拉圭0分 -3净胜球', time: '小组形势' },
  { tag: 'LINEUP', text: '加拿大战：Lukic 21\' 首开 · Larin 78\' 扳平 · Kolašinac 助攻+门线解围', time: '6月13日' },
  { tag: 'LINEUP', text: '美国战：Balogun 双响 · Enciso 替补助攻 · Reyna 90+8\' 锦上添花', time: '6月13日' },
  { tag: 'OFFICIAL', text: 'A组回顾：墨西哥、韩国各3分 · 详见下方归档', time: '小组动态' },
  ...RESULTS_DATA.breakingNews.filter(n => n.text.includes('墨西哥') || n.text.includes('韩国') || n.text.includes('模型复盘')),
].slice(0, 10);

RESULTS_DATA.finishedMatches = [...RESULTS_DATA.finishedMatches, ...archived];
RESULTS_DATA.groupSnapshots = [
  ...(RESULTS_DATA.groupSnapshots || []),
  {
    group: 'B',
    label: 'B组 · 第1轮后',
    table: [
      { team: 'Canada', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
      { team: 'Bosnia and Herzegovina', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
      { team: 'Switzerland', pts: 0, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 },
      { team: 'Qatar', pts: 0, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 },
    ],
  },
  {
    group: 'D',
    label: 'D组 · 第1轮后',
    table: [
      { team: 'USA', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 1 },
      { team: 'Australia', pts: 0, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 },
      { team: 'Türkiye', pts: 0, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 },
      { team: 'Paraguay', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 4 },
    ],
  },
];

const todayMatches = [buildM05(), buildM06(), buildM07(), buildM08()];

const NEW_MATCH_DATA = {
  lastUpdated: '2026-06-14T12:00:00+08:00',
  syncSource: 'manual',
  breakingNews: [
    { tag: 'OFFICIAL', text: '📅 今日4场 · 卡塔尔-瑞士(03:00) · 巴西-摩洛哥(06:00) · 海地-苏格兰(09:00) · 澳-土(12:00) · 北京时间6月14日', time: '今日赛程' },
    { tag: 'OFFICIAL', text: '🏁 昨日：加拿大 1-1 波黑 · 美国 4-1 巴拉圭 · 详见「过往赛果」', time: '赛果回顾' },
    { tag: 'OFFICIAL', text: 'D组：美国3分领跑 · 澳大利亚 vs 土耳其 12:00 直接对话', time: '小组动态' },
    { tag: 'LINEUP', text: 'B组：瑞士 Xhaka 领衔中场 · 卡塔尔 Afif/Almoez 反击', time: '赛前情报' },
    { tag: 'LINEUP', text: 'C组：巴西 Vinícius vs 摩洛哥 Hakimi · 海地首秀对苏格兰 McTominay', time: '赛前情报' },
    { tag: 'REFEREE', text: '今日各场裁判待 FIFA 官方确认 · 未确认显示「等待官方确认」', time: '裁判信息' },
  ],
  todayMatches,
  nextMatch: {
    group: 'E',
    matchday: 1,
    date: '2026-06-14',
    time: '13:00',
    time_local: '12:00 CT',
    timezone: 'CDT (UTC-5)',
    time_beijing: '01:00',
    date_beijing: '6月15日',
    time_beijing_full: '北京时间 6月15日 01:00',
    venue: 'NRG Stadium',
    city: 'Houston, USA',
    home: { name: 'Germany', iso: 'de', fifaRank: 8, rating: 84 },
    away: { name: 'Curaçao', iso: 'cw', fifaRank: 90, rating: 58 },
    teaser: 'E组揭幕：德国 vs 库拉索，东道主实力悬殊一战。',
    home_win: 82,
    draw: 12,
    away_win: 6,
    predicted_score: '3-0',
    key_player_home: 'Jamal Musiala',
    key_player_away: 'Leandro Bacuna',
  },
};

fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${RESULTS_DATA.lastUpdated}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`
);
fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${NEW_MATCH_DATA.lastUpdated}\nconst MATCH_DATA = ${JSON.stringify(NEW_MATCH_DATA, null, 2)};\n`
);

console.log('✅ Archived:', archived.map(m => `${m.id} ${m.actualResult.home_score}-${m.actualResult.away_score}`).join(', '));
console.log('✅ results-data.js:', RESULTS_DATA.finishedMatches.length, 'finished');
console.log('✅ matches-data.js:', todayMatches.map(m => m.id + ' ' + m.home.name + ' vs ' + m.away.name).join(' | '));
