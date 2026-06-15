/**
 * Sync Day 5 official pre-match info into matches-data.js
 * Sources: FIFA / BBC / The Standard / Foot Africa / FotMob (2026-06-15)
 */
const fs = require('fs');
const path = require('path');

const MATCH_PATH = path.join(__dirname, '..', 'js', 'matches-data.js');
const TS = '2026-06-16T01:00:00+08:00';

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 5 (official sync)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`
  );
}

const data = loadMatchData();
data.lastUpdated = TS;
data.syncSource = 'FIFA 官方首发 + 赛前 team sheet · BBC / FotMob / The Standard';

data.breakingNews = [
  {
    tag: 'LINEUP',
    text: '✅ 官方首发 · 西班牙 v 佛得角：Yamal/Williams 替补，Rodri 队长，Gavi+Oyarzabal+Torres 首发',
    time: '官方确认',
  },
  {
    tag: 'LINEUP',
    text: '⏳ 比利时-埃及 / 沙特-乌拉圭 / 伊朗-新西兰：FIFA 名单开赛前约1小时公布',
    time: '待确认',
  },
  {
    tag: 'INJURY',
    text: '乌拉圭：Giménez + R. Araújo + De Arrascaeta 确认缺席揭幕战 · Cáceres/Viña 待定',
    time: '伤情',
  },
  {
    tag: 'INJURY',
    text: '比利时：Debast 缺阵 · Lukaku 替补 · De Ketelaere 伪9 · Doku/De Bruyne 预计首发',
    time: '伤情',
  },
  {
    tag: 'REFEREE',
    text: '✅ FIFA 确认：Makhadmeh(西-佛) · Abatti(比-埃) · Mariani(沙-乌) · Ramos(伊-新)',
    time: '裁判',
  },
  {
    tag: 'PREVIEW',
    text: '📅 今日4场 · 西班牙-佛得角(00:00) · 比利时-埃及(03:00) · 沙特-乌拉圭(06:00) · 伊朗-新西兰(09:00)',
    time: '6月16日',
  },
  {
    tag: 'OFFICIAL',
    text: '🏁 昨日：德国7-1 · 荷兰2-2日本 · 科特1-0 · 瑞典5-1 · 详见「过往赛果」',
    time: '赛果回顾',
  },
];

const m14 = data.todayMatches.find(m => m.id === 'm14');
if (m14) {
  m14.note = 'H组揭幕 · 西班牙 vs 佛得角 · 官方首发已确认';
  m14.lineup = {
    confirmed: true,
    formation: '4-3-3 / 4-2-3-1',
    home:
      'Simón; Llorente, Laporte, Cubarsi, Cucurella; Fabian Ruiz, Rodri (C), Pedri, Gavi; Ferran Torres, Oyarzabal',
    away:
      'Vozinha; Moreira, Borges, Pico Lopes, Cabral; Pina, Duarte; Mendes (C), Monteiro, Jovane Cabral; Livramento',
    note: '✅ FIFA 官方 team sheet 已确认（2026-06-15 · BBC Sport / Foot Africa / worldcupstats FIFA）',
    predicted: m14.lineup?.predicted || {
      formation: '4-3-3 / 4-4-2',
      home: 'Simón; García, Cubarsi, Laporte, Cucurella; Ruiz, Rodri, Pedri; Baena, Oyarzabal, Ferran Torres',
      away: 'Vozinha; Stopira, Monteiro, Cabral; Duarte, Semedo, Tavares; Lopes, Borges, Cabral; Platini',
      source: 'ESPN / FotMob 赛前预测 · 非官方',
    },
    diff: {
      home:
        '⚠️ Yamal、Nico Williams、Muñoz 替补 · Llorente 替 García 右闸 · Gavi 首发 · Baena 替补 · Cucurella 当日确认转会皇马',
      away:
        '⚠️ Moreira/Borges/Lopes/Cabral 防线 vs 预测 Stopira/Semedo · Livramento 单箭头 · Roberto Lopes（都柏林出生）首发',
    },
    updated: TS,
  };
  const ruiz = m14.home.injuries.find(i => i.player === 'Fabián Ruiz');
  if (ruiz) {
    ruiz.status = 'FIT';
    ruiz.note = 'FIFA 官方首发确认 · 与 Rodri/Pedri/Gavi 搭档中场';
    ruiz.confirmed = true;
  }
  m14.home.rumors = [
    '✅ 官方：Yamal/Williams 替补 · Rodri 队长 · Gavi+Torres+Oyarzabal 领衔',
    'Cucurella 赛前确认 £51.8m 加盟皇马 · Marc Cucurella 仍首发本场',
    'Morata、Carvajal、Le Normand 等欧洲杯主力未入选；Cubarsi/Laporte 防线成核心',
    'Yamal/Williams 60\' 后或成破局后手 · 替补席含 Baena、Yamal、Williams、Olmo',
  ];
  m14.home.stars = [
    {
      name: 'Rodri',
      pos: 'DM',
      club: 'Man City',
      stats: '队长 · 官方首发',
      rating: 9,
      desc: 'FIFA 官方确认佩戴队长袖标，中场屏障',
    },
    {
      name: 'Mikel Oyarzabal',
      pos: 'ST',
      club: 'Real Sociedad',
      stats: '官方首发中锋',
      rating: 8.5,
      desc: 'de la Fuente 首选箭头，与 Torres 搭档锋线',
    },
    {
      name: 'Lamine Yamal',
      pos: 'RW',
      club: 'Barcelona',
      stats: '官方替补',
      rating: 9,
      desc: '状态「完美」但本场替补 · 世界杯首秀待命',
    },
  ];
}

const m16 = data.todayMatches.find(m => m.id === 'm16');
if (m16) {
  m16.note = 'G组揭幕 · 比利时 vs 埃及 · 官方名单开赛前约1小时公布';
  m16.lineup.note =
    '⏳ FIFA 官方 team sheet 尚未公布（通常开赛前1小时）· 下方为 The Standard / Sporting News 最新预测';
  m16.lineup.predicted = {
    formation: '4-2-3-1 / 4-3-3',
    home: 'Courtois; Meunier, Mechele, Ngoy, Castagne; Onana, Tielemans; Trossard, De Bruyne, Doku; De Ketelaere',
    away: 'Shobeir; Hany, Ibrahim, Fathy, Fatouh; Lasheen, Attia, Ashour; Trezeguet, Salah, Marmoush',
    source: 'The Standard / Yahoo Sports 最新预测 · 非官方',
  };
  m16.home.rumors = [
    'Garcia 4-2-3-1：De Ketelaere 伪9 · Lukaku 替补（仅5次意甲出场后复出）',
    '中卫 Mechele+Ngoy 预计搭档（对突尼斯热身5-0模板）· Debast 确认缺阵',
    'Salah 34岁生日当天出战 · Marmoush 状态正佳',
    'Opta 25,000次模拟：比利时37.2% · 埃及35.5% · 平局27.3% — 本场最接近之一',
  ];
  m16.away.rumors = [
    'Hossam Hassan 第四次世界杯 · 仍求小组首次出线',
    'Salah 腿筋伤愈确认首发 · Shobeir 可能替 El Shenawy 一门',
    'Hamdy Fathy 可能中卫/后腰双用 · Trezeguet 竞争第三前锋',
    '6月6日 1-2 负巴西热身 · 后防对 De Bruyne/Doku 宽度存疑',
  ];
}

const m13 = data.todayMatches.find(m => m.id === 'm13');
if (m13) {
  m13.note = 'H组第2场 · 沙特 vs 乌拉圭 · 官方名单开赛前约1小时公布';
  m13.lineup.note =
    '⏳ FIFA 官方 team sheet 尚未公布 · Bielsa 确认 Giménez/Araújo/De Arrascaeta 缺席揭幕战';
  m13.lineup.predicted = {
    formation: '4-2-3-1 / 4-3-3',
    home: 'Al-Owais; Abdulhamid, Al-Amri, Al-Boleahi, Al-Shahrani; Kanno, Al-Faraj; Al-Dawsari, Al-Shehri, Al-Hassouni; Al-Buraikan',
    away: 'Rochet; Varela, Bueno, Cáceres, Olivera; Ugarte, Valverde, Bentancur; Pellistri, De la Cruz, Núñez',
    source: 'Goal.com / worldcuppass 最新预测 · 非官方',
  };
  const gim = m13.away.injuries.find(i => i.player === 'José María Giménez');
  if (gim) {
    gim.note = '高等级脚踝扭伤，TyC/DSports 确认**缺席揭幕战**——Cáceres/Bueno 重组中卫';
    gim.confirmed = true;
  }
  m13.away.rumors = [
    '✅ TyC/DSports：Giménez 不冒险出战揭幕战 · Araújo/De Arrascaeta 同样 OUT',
    'Bueno+Cáceres 预计中卫 · De la Cruz 替 De Arrascaeta 前腰',
    'Núñez 支点 + Pellistri 速度 · Valverde 压迫体系发动机',
    'Donis 3-5-2 低位 · Al-Dawsari + Al-Buraikan 前场双核',
  ];
}

const m15 = data.todayMatches.find(m => m.id === 'm15');
if (m15) {
  m15.note = 'G组第2场 · 伊朗 vs 新西兰 · 官方名单开赛前约1小时公布';
  m15.lineup.note = '⏳ FIFA 官方 team sheet 尚未公布 · 伊朗已从图森基地迁至蒂华纳';
  m15.home.rumors = [
    '伊朗基地由图森迁至蒂华纳（签证/安全），赛前跨境赴洛杉矶 SoFi',
    'Ghalenoei 预选赛 10 场 10 零封 · Taremi 领衔无 Azmoun 锋线',
    '26 人含 17 名国内联赛球员 · 国内赛事2月起停摆，体能是隐忧',
    'Opta 强烈看好伊朗 · 新西兰 4-4-2 低位靠 Wood 定位球',
  ];
}

saveMatchData(data);
console.log('✅ matches-data.js official sync complete');
console.log('   m14 lineup confirmed:', m14?.lineup?.confirmed);
console.log('   Updated:', TS);
