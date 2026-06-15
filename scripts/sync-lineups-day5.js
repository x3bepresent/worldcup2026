/**
 * Day 5 lineup sync — FotMob / FIFA (2026-06-16)
 * m14: official + FT 0-0 | m16: official | m13/m15: latest FotMob predicted
 */
const fs = require('fs');
const path = require('path');

const MATCH_PATH = path.join(__dirname, '..', 'js', 'matches-data.js');
const TS = '2026-06-16T06:30:00+08:00';

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 5 (lineup sync)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`
  );
}

function setLineup(m, opts) {
  const prev = m.lineup || {};
  m.lineup = {
    confirmed: opts.confirmed,
    formation: opts.formation,
    home: opts.home,
    away: opts.away,
    note: opts.note,
    predicted: prev.predicted || opts.predictedFallback,
    diff: opts.diff || prev.diff,
    updated: TS,
  };
}

const data = loadMatchData();
data.lastUpdated = TS;
data.syncSource = 'FIFA / FotMob 官方或最新预测阵容 · 2026-06-16';

data.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 西班牙 0-0 佛得角 · Vozinha 9.0 零封爆冷 · xG 2.29-0.29 · Yamal 71\' 替补', time: '赛果' },
  { tag: 'LINEUP', text: '✅ 官方首发 · 比利时 v 埃及：De Bruyne 队长 · De Ketelaere 伪9 · Salah 生日战', time: '官方确认' },
  { tag: 'LINEUP', text: '📋 最新预测 · 沙特-乌拉圭：Muslera · Cáceres/Olivera 中卫 · Al-Owais 一门', time: 'FotMob' },
  { tag: 'LINEUP', text: '📋 最新预测 · 伊朗-新西兰：Taremi+Ghayedi · Wood 队长 · Crocombe 一门', time: 'FotMob' },
  { tag: 'INJURY', text: '乌拉圭：Araújo + De Arrascaeta OUT · Giménez OUT · 比利时 Debast OUT', time: '伤情' },
  { tag: 'REFEREE', text: '✅ Makhadmeh · Abatti · Mariani · Ramos', time: '裁判' },
  { tag: 'PREVIEW', text: '📅 比-埃(03:00) · 沙-乌(06:00) · 伊-新(09:00) 待赛', time: '6月16日' },
];

// ── m14 Spain 0-0 Cape Verde (FT, FIFA official) ──
const m14 = data.todayMatches.find(m => m.id === 'm14');
if (m14) {
  m14.note = 'H组揭幕 · 西班牙 0-0 佛得角 · 已结束';
  m14.actualResult = {
    home_score: 0,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: '无进球 · Vozinha 多次扑救零封',
    highlights: 'xG 2.29-0.29 · 控球 74%-26% · Yamal/Nico Williams 替补登场 · Pedri 8.6 全场最佳',
  };
  setLineup(m14, {
    confirmed: true,
    formation: '4-3-3 / 4-1-4-1',
    home:
      'Simón; Llorente, Cubarsí, Laporte, Cucurella; Fabian Ruiz, Rodri (C), Pedri; Ferran Torres, Oyarzabal, Gavi',
    away:
      'Vozinha; Moreira, Roberto Lopes, Borges, Cabral; Pina; Mendes (C), Duarte, Monteiro, J. Cabral; Livramento',
    note: '✅ FIFA 官方首发已确认 · 全场 0-0（FotMob / BBC）',
    diff: {
      home:
        '⚠️ 实际为 4-3-3：Gavi 首发（非 Yamal）· Yamal 71\'、Nico Williams 87\' 替补 · Fabian Ruiz 71\' 被 Merino 换下',
      away:
        '⚠️ Roberto Lopes 首发中卫（非 Stopira）· 4-1-4-1 低位 · Vozinha 9.0 评分零封',
    },
  });
  m14.prediction.key_factor =
    '【赛后复盘】赛前主胜78%/最可能2-0；实际0-0。xG 2.29 未能转化，Vozinho/Vozinha 零封爆冷；Yamal 71\' 替补未能破局。方向：平局命中（15%）；比分未中。';
  if (m14.home?.stars?.[0]) {
    m14.home.stars = [
      { name: 'Pedri', pos: 'CM', club: 'Barcelona', stats: '8.6 全场最佳', rating: 8.6, desc: '0-0 僵局中最佳球员' },
      { name: 'Rodri', pos: 'DM', club: 'Man City', stats: '队长 · 7.9', rating: 7.9, desc: '87\' 被 Nico Williams 换下' },
      { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', stats: '71\' 替补 · 6.4', rating: 9, desc: '世界杯首秀替补登场' },
    ];
  }
}

// ── m16 Belgium vs Egypt (FotMob official lineup) ──
const m16 = data.todayMatches.find(m => m.id === 'm16');
if (m16) {
  m16.note = 'G组揭幕 · 比利时 vs 埃及 · 官方首发已确认';
  setLineup(m16, {
    confirmed: true,
    formation: '4-2-3-1 / 4-2-3-1',
    home:
      'Courtois; Meunier, Ngoy, Mechele, Castagne; Onana, Tielemans; Trossard, De Bruyne (C), Doku; De Ketelaere',
    away:
      'Shobeir; Hany, Ibrahim, Fathi, El Fotouh; Lasheen, Ateya; Salah (C), Ashour, Ziko; Marmoush',
    note: '✅ FIFA 官方 team sheet（FotMob 2026-06-15 赛前确认）',
    diff: {
      home: '✅ Meunier+Castagne 边卫 · Onana 首发（非 Witsel）· Lukaku 替补 · De Cuyper 未首发',
      away: '⚠️ Shobeir 一门 · Fathi 中卫（非 Abdelmonem）· Ziko 第三前锋（非 Trezeguet 首发）· Salah 34 岁生日',
    },
  });
}

// ── m13 Saudi vs Uruguay (FotMob latest predicted) ──
const m13 = data.todayMatches.find(m => m.id === 'm13');
if (m13) {
  m13.note = 'H组第2场 · 沙特 vs 乌拉圭 · 最新预测阵容（开赛前确认）';
  setLineup(m13, {
    confirmed: false,
    formation: '4-2-3-1 / 4-2-3-1',
    home:
      'Al-Owais; Abdulhamid, Tambakti, Amri, Al-Harbi; N. Al-Dawsari, Al-Khaibari; Mandash, Al-Juwayr, Salem Al-Dawsari; Al-Buraikan',
    away:
      'Muslera; Varela, Cáceres, Olivera, Viña; Bentancur, Ugarte; Valverde; Viñas, Maxi Araújo; Núñez',
    note: '📋 FotMob 最新预测阵容（官方名单开赛前约1小时公布 · 非最终确认）',
    diff: {
      home: '✅ Al-Owais 一门 · Abdulhamid 右闸 · Al-Harbi 替 Al-Shahrani 左闸',
      away: '⚠️ Muslera 替 Rochet · Cáceres+Olivera 中卫（Giménez/Araújo OUT）· De Arrascaeta OUT · Viña 复出',
    },
  });
}

// ── m15 Iran vs NZ (FotMob latest predicted) ──
const m15 = data.todayMatches.find(m => m.id === 'm15');
if (m15) {
  m15.note = 'G组第2场 · 伊朗 vs 新西兰 · 最新预测阵容';
  setLineup(m15, {
    confirmed: false,
    formation: '4-4-2 / 4-2-3-1',
    home:
      'Beiranvand; Hardani, Khalilzadeh, Nemati, Mohammadi; Yousefi, Ezatolahi, Ghoddos, Ghayedi; Alipour, Taremi',
    away:
      'Crocombe; Payne, Surman, Boxall, Cacace; Bell, Stamenic; Garbett, Singh, Just; Wood (C)',
    note: '📋 FotMob 最新预测阵容（官方名单开赛前约1小时公布 · 非最终确认）',
    diff: {
      home: '⚠️ 4-4-2：Alipour 搭档 Taremi · Yousefi 中场 · 无 Azmoun/Jahanbakhsh',
      away: '✅ Wood 队长 · Surman 中卫 · Garbett 右翼 · Crocombe 一门',
    },
  });
}

saveMatchData(data);
console.log('✅ Lineups synced');
console.log('   m14:', m14?.lineup?.confirmed, 'FT', m14?.actualResult?.home_score + '-' + m14?.actualResult?.away_score);
console.log('   m16:', m16?.lineup?.confirmed, 'official');
console.log('   m13:', m13?.lineup?.confirmed, 'predicted');
console.log('   m15:', m15?.lineup?.confirmed, 'predicted');
