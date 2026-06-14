const fs = require('fs');
const path = require('path');

function loadData(file, varName) {
  const src = fs.readFileSync(file, 'utf8');
  const body = src
    .replace(/^\/\/[^\n]*\n/gm, '')
    .replace(new RegExp(`^const ${varName} = `), '')
    .replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function serialize(obj, indent = 0) {
  const sp = '  '.repeat(indent);
  if (obj === null) return 'null';
  if (typeof obj !== 'object') return JSON.stringify(obj);
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    return '[\n' + obj.map(v => sp + '  ' + serialize(v, indent + 1)).join(',\n') + '\n' + sp + ']';
  }
  const keys = Object.keys(obj);
  return '{\n' + keys.map(k => sp + '  ' + JSON.stringify(k) + ': ' + serialize(obj[k], indent + 1)).join(',\n') + '\n' + sp + '}';
}

const root = path.join(__dirname, '..', 'js');
const ts = '2026-06-15T00:00:00+08:00';
const MATCH_DATA = loadData(path.join(root, 'matches-data.js'), 'MATCH_DATA');
const RESULTS_DATA = loadData(path.join(root, 'results-data.js'), 'RESULTS_DATA');

// ── Archive m06 Brazil 1-1 Morocco ──
const m06 = MATCH_DATA.todayMatches.find(m => m.id === 'm06');
if (m06) {
  m06.note = 'C组焦点战 · 巴西 vs 摩洛哥 · 已结束 1-1';
  m06.lineup.formation = '4-4-2 / 4-2-3-1';
  m06.lineup.home = 'Alisson; Ibañez, Marquinhos (C), Gabriel, Douglas Santos; Paquetá, Guimarães, Casemiro, Raphinha; Igor Thiago, Vinícius Jr';
  m06.lineup.away = 'Bounou; Hakimi (C), Diop, Riad, Mazraoui; El Aynaoui, Bouaddi; Díaz, Ounahi, El Khannouss; Saibari';
  m06.lineup.note = 'FotMob · 全场 1-1。Saibari 21\' 首开 · Vinícius 32\' 扳平。巴西实际 4-4-2（非赛前 4-2-3-1）；HT 换 Danilo/Fabinho，62\' Luiz Henrique 替 Igor Thiago。';
  m06.lineup.diff = {
    home: '⚠️ 开球 4-4-2 非预测 4-2-3-1；半场 Danilo+Fabinho 换 Ibañez+Casemiro；Douglas Santos 7.8 全场最佳',
    away: '✅ 与预测一致；Saibari 破门 · El Khannouss 7.5'
  };
  m06.lineup.updated = ts;
  m06.actualResult = {
    home_score: 1,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Saibari 21' (Díaz); Vinícius Jr 32' (Guimarães)",
    highlights: 'xG 1.27-1.52 · 巴西 20 届世界杯 opener 不败延续 · 出席 80,663 · Casemiro/Ibañez 各1黄'
  };
  m06.prediction.key_factor = '1-1 平局——摩洛哥 Saibari 21\' 偷袭，Vinícius 32\' 扳平；巴西控球 51% 但 xG 略逊，Ancelotti 半场变阵未能破局。';
  if (m06.home?.stars?.[0]) {
    m06.home.stars[0].desc = '32\' 扳平进球 · 7.3 评分；对位 Hakimi 仍是关键';
  }
  MATCH_DATA.todayMatches = MATCH_DATA.todayMatches.filter(m => m.id !== 'm06');
  if (!RESULTS_DATA.finishedMatches.some(m => m.id === 'm06')) {
    RESULTS_DATA.finishedMatches.push(m06);
  }
}

// ── m07 official lineups ──
const m07 = MATCH_DATA.todayMatches.find(m => m.id === 'm07');
if (m07) {
  m07.note = 'C组第2场 · 海地 vs 苏格兰 · FIFA 官方首发已确认';
  m07.lineup = {
    confirmed: true,
    formation: '4-4-2 / 4-4-2',
    home: 'Placide (C); Arcus, Adé, Delcroix, Expérience; Louicius, Jean Jacques, Bellegarde, Providence; Pierrot, Isidor',
    away: 'Gunn; Hickey, Hendry, Hanley, Robertson (C); Gannon-Doak, McTominay, Ferguson, McGinn; Shankland, Adams',
    note: 'FotMob · FIFA 官方 team sheet（2026-06-14 赛前确认）。',
    predicted: {
      formation: '4-4-2',
      home: 'Placide; Arcus, Adé, Delcroix, Expérience; Casimir, Jean Jacques, Bellegarde, Providence; Isidor, Pierrot',
      away: 'Gunn; Hickey, Hanley, Souttar, Robertson; Gannon-Doak, McTominay, Ferguson, Christie; Adams, Shankland',
      source: 'FotMob · 2026-06-14 Predicted · 非官方'
    },
    diff: {
      home: '⚠️ Louicius 替 Casimir 右翼（Casimir 替补席）',
      away: '⚠️ Hendry 替 Souttar 中卫 · McGinn 替 Christie 中场（Souttar/Christie 替补）'
    },
    source: 'FotMob · FIFA 官方 team sheet · 2026-06-14',
    updated: ts
  };
}

// ── m08 touch ──
const m08 = MATCH_DATA.todayMatches.find(m => m.id === 'm08');
if (m08) {
  m08.lineup.updated = ts;
  m08.lineup.note = 'FotMob 仍标注 Predicted（6/15 开球前）。澳 3-4-2-1、土 4-2-3-1，Yildiz 在列。';
}

// ── Global metadata ──
MATCH_DATA.lastUpdated = ts;
MATCH_DATA.syncSource = 'FotMob official XI + live results';
MATCH_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 巴西 1-1 摩洛哥 · Saibari 21\' · Vinícius 32\' · C组两队各1分', time: '赛果' },
  { tag: 'LINEUP', text: '✅ m07 海地-苏格兰 FIFA 官方首发：Louicius/Hendry/McGinn 三处变阵', time: '首发确认' },
  { tag: 'LINEUP', text: 'm08 澳-土仍 Predicted · 开球 12:00 北京时间', time: '待赛' },
  { tag: 'OFFICIAL', text: '📅 今日余2场 · 海地-苏格兰(09:00) · 澳-土(12:00) · 北京时间6月14日', time: '赛程' },
  { tag: 'PREVIEW', text: '明日 · 德国-库拉索(01:00) Neuer先发 · 荷兰-日本(04:00) · 科特-厄瓜(07:00)', time: '下三场' },
  { tag: 'OFFICIAL', text: '🏁 卡塔尔 1-1 瑞士 · Khoukhi 90+4\' 绝平 · B组四队各1分', time: '回顾' },
  { tag: 'UPDATE', text: '巴西 opener 20 场不败延续但 xG 1.27-1.52 憾平 · Douglas Santos 7.8', time: '复盘' }
];

RESULTS_DATA.lastUpdated = ts;
RESULTS_DATA.breakingNews.unshift(
  { tag: 'OFFICIAL', text: '🏁 巴西 1-1 摩洛哥 · Saibari/Vinícius 各入一球 · C组摩洛哥、巴西各1分', time: '6月14日' },
  { tag: 'UPDATE', text: '巴西实际 4-4-2 非 4-2-3-1 · 半场 Danilo/Fabinho 换入 · xG 1.27-1.52', time: '赛后' }
);

// Group C snapshot
const gcIdx = RESULTS_DATA.groupSnapshots.findIndex(g => g.group === 'C');
const gcSnap = {
  group: 'C',
  label: 'C组 · 巴西-摩洛哥已赛',
  table: [
    { team: 'Morocco', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
    { team: 'Brazil', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
    { team: 'Haiti', pts: 0, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 },
    { team: 'Scotland', pts: 0, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 }
  ]
};
if (gcIdx >= 0) RESULTS_DATA.groupSnapshots[gcIdx] = gcSnap;
else RESULTS_DATA.groupSnapshots.push(gcSnap);

fs.writeFileSync(
  path.join(root, 'matches-data.js'),
  '// Auto-synced by scripts/update-data.js — manual edits may be overwritten on next sync\n' +
    '// Last API sync: 2026-06-13T15:25:03.814Z\n' +
    `// Last media refresh: ${ts}\n` +
    'const MATCH_DATA = ' + serialize(MATCH_DATA) + ';\n'
);

fs.writeFileSync(
  path.join(root, 'results-data.js'),
  '// 过往赛果 — 手动/自动同步\n' +
    '// score_dist 已废弃 — 页面按 xG 泊松实时计算\n' +
    `// Last updated: ${ts}\n` +
    'const RESULTS_DATA = ' + serialize(RESULTS_DATA) + ';\n'
);

console.log('Synced. today:', MATCH_DATA.todayMatches.map(m => m.id).join(', '));
console.log('finished:', RESULTS_DATA.finishedMatches.map(m => m.id).join(', '));
console.log('m07 confirmed:', MATCH_DATA.todayMatches.find(m => m.id === 'm07')?.lineup?.confirmed);
