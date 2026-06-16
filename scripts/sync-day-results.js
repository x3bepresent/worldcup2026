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
const ts = '2026-06-15T06:00:00+08:00';
const MATCH_DATA = loadData(path.join(root, 'matches-data.js'), 'MATCH_DATA');
const RESULTS_DATA = loadData(path.join(root, 'results-data.js'), 'RESULTS_DATA');

function archiveMatch(id, patch) {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  if (!m) return false;
  Object.assign(m, patch.meta || {});
  if (patch.lineup) Object.assign(m.lineup, patch.lineup);
  if (patch.actualResult) m.actualResult = patch.actualResult;
  if (patch.predictionKey) m.prediction.key_factor = patch.predictionKey;
  if (patch.starAway) m.away.star = { ...m.away.star, ...patch.starAway };
  if (patch.starHome) m.home.star = { ...m.home.star, ...patch.starHome };
  MATCH_DATA.todayMatches = MATCH_DATA.todayMatches.filter(x => x.id !== id);
  if (!RESULTS_DATA.finishedMatches.some(x => x.id === id)) {
    RESULTS_DATA.finishedMatches.push(m);
  }
  return true;
}

// m07 Haiti 0-1 Scotland
archiveMatch('m07', {
  meta: { note: 'C组第2场 · 海地 vs 苏格兰 · 已结束 0-1' },
  lineup: {
    formation: '4-4-2 / 4-4-2',
    note: 'FotMob · 全场 0-1。McGinn 29\' 破门 · xG 1.05-1.05 势均力敌 · 苏格兰 28 年后再取世界杯胜绩。',
    updated: ts
  },
  actualResult: {
    home_score: 0,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "McGinn 29'",
    highlights: 'McGinn 7.8 全场最佳 · Gunn 7.7 零封 · xG 1.05-1.05 · 出席 64,146 · Bellegarde/Hickey 各1黄'
  },
  predictionKey: 'McGinn 29\' 一锤定音——苏格兰 xG 仅 1.05 但 2 射正 1 进球；海地 15 射 2 正未能转化。Clarke 球队 28 年后世界杯再胜。',
  starAway: {
    name: 'John McGinn',
    desc: '29\' 制胜球 · 7.8 全场最佳；苏格兰 1990 年后世界杯再胜',
    rating: 7.8,
    stats: '制胜球 · MOTM'
  }
});

// m08 Australia 2-0 Turkey
archiveMatch('m08', {
  meta: { note: 'D组第2场 · 澳大利亚 vs 土耳其 · 已结束 2-0' },
  lineup: {
    formation: '5-4-1 / 4-2-3-1',
    home: 'Beach #18; Circati #3, Souttar (C) #19, Burgess #21; Italiano #4, Bos #5; Metcalfe #8, O\'Neill #13, Okon-Engstler #24, Irankunda #17; Touré #9',
    note: 'FotMob · 全场 2-0。实际 5-4-1 低位反击；Irankunda 27\'、Metcalfe 75\' · 土耳其控球 72% 但 30 射 8 正 0 球。',
    updated: ts
  },
  actualResult: {
    home_score: 2,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Irankunda 27' (Okon-Engstler); Metcalfe 75'",
    highlights: 'Beach 8.9 MOTM · 土耳其 72% 控球 30 射无果 · Yildiz 46\' 替补 · 出席 52,497 · D组澳美同积3分'
  },
  predictionKey: '2-0 爆冷——Irankunda 27\'、Metcalfe 75\' 世界波；Popovic 5-4-1 克制土耳其 72% 控球。Beach 替 Ryan 一门 8.9 评分。',
  starHome: {
    name: 'Patrick Beach',
    desc: '8.9 MOTM · 官方 XI 替 Ryan；零封助澳大利亚 D组 3 分',
    rating: 8.9,
    stats: '零封 · MOTM'
  }
});

// Group snapshots
const upsertGroup = (group, label, table) => {
  const i = RESULTS_DATA.groupSnapshots.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) RESULTS_DATA.groupSnapshots[i] = snap;
  else RESULTS_DATA.groupSnapshots.push(snap);
};

upsertGroup('C', 'C组 · 第1轮（4场已赛）', [
  { team: 'Scotland', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 1, ga: 0 },
  { team: 'Morocco', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Brazil', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Haiti', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 1 }
]);

upsertGroup('D', 'D组 · 第1轮（2场已赛）', [
  { team: 'USA', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 1 },
  { team: 'Australia', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0 },
  { team: 'Türkiye', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2 },
  { team: 'Paraguay', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 4 }
]);

MATCH_DATA.lastUpdated = ts;
MATCH_DATA.syncSource = 'FotMob official results + XI';
MATCH_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 澳大利亚 2-0 土耳其 · Irankunda 27\' · Metcalfe 75\' · D组澳美同积3分', time: '赛果' },
  { tag: 'OFFICIAL', text: '🏁 海地 0-1 苏格兰 · McGinn 29\' · 苏格兰领跑C组 · xG 1.05-1.05', time: '赛果' },
  { tag: 'OFFICIAL', text: '📅 6月14日（北京）4场全部结束 · 卡塔尔1-1瑞士 · 巴西1-1摩洛哥 · 详见赛果页', time: '日结' },
  { tag: 'PREVIEW', text: '下一场 · 德国-库拉索(01:00) · 荷兰-日本(04:00) · 科特-厄瓜(07:00) · 6月15日', time: '赛程' },
  { tag: 'UPDATE', text: 'Beach 8.9 零封 · 土耳其72%控球30射0球 · McGinn 28年后再胜', time: '复盘' },
  { tag: 'OFFICIAL', text: 'C组：苏格兰3分 · 巴西/摩洛哥各1 · 海地0', time: '积分榜' },
  { tag: 'OFFICIAL', text: 'D组：美国/澳大利亚各3分 · 土耳其/巴拉圭0分', time: '积分榜' }
];

MATCH_DATA.nextMatch = {
  ...MATCH_DATA.nextMatch,
  lineup: {
    confirmed: false,
    predicted: {
      formation: '4-2-3-1 / 3-5-2',
      home: 'Neuer; Kimmich, Tah, Schlotterbeck, Brown; Pavlović, Nmecha; Sané, Musiala, Wirtz; Havertz',
      away: 'Room; Gaari, Obispo, Bazoer; Floranus, Comenencia, L. Bacuna, J. Bacuna, Fonville; Chong, Locadia',
      source: 'FotMob Predicted · 2026-06-15 · 非官方'
    }
  },
  teaser: 'E组揭幕：Neuer 五届世界杯门将，德国对阵人口最少世界杯新军库拉索。'
};

RESULTS_DATA.lastUpdated = ts;
RESULTS_DATA.breakingNews.unshift(
  { tag: 'OFFICIAL', text: '🏁 6月14日 · 海地0-1苏格兰 · 澳大利亚2-0土耳其 · 当日4场全部结束', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'C组苏格兰3分领跑 · D组美国/澳大利亚同积3分', time: '小组形势' },
  { tag: 'LINEUP', text: '澳土战：Beach零封8.9 · Irankunda/Metcalfe世界波 · 土72%控球30射0球', time: '6月14日' },
  { tag: 'LINEUP', text: '海苏战：McGinn 29\'制胜 · Gunn零封 · 苏格兰28年后再胜', time: '6月14日' }
);

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

console.log('Archived. todayMatches:', MATCH_DATA.todayMatches.length);
console.log('finished:', RESULTS_DATA.finishedMatches.map(m => m.id).join(', '));
