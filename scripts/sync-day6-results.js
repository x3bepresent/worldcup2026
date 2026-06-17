/**
 * Day 6 赛果同步 — m17–m20（2026-06-17 北京时间 · 4场）
 * Sources: FIFA · ESPN · Sky Sports · FotMob · ABC
 * Run: node scripts/sync-day6-results.js && node scripts/verify-day6-sections.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = '2026-06-17T23:30:00+08:00';

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function serialize(obj, indent = 0) {
  const sp = '  '.repeat(indent);
  if (obj === null) return 'null';
  if (typeof obj !== 'object') return JSON.stringify(obj);
  if (Array.isArray(obj)) {
    if (!obj.length) return '[]';
    return '[\n' + obj.map(v => sp + '  ' + serialize(v, indent + 1)).join(',\n') + '\n' + sp + ']';
  }
  const keys = Object.keys(obj);
  return '{\n' + keys.map(k => sp + '  ' + JSON.stringify(k) + ': ' + serialize(obj[k], indent + 1)).join(',\n') + '\n' + sp + '}';
}

function pushForm(form, r) {
  const f = [...(form || ['W', 'D', 'L', 'W', 'D'])];
  f.shift();
  f.push(r);
  return f;
}

const ACTUAL = {
  m17: {
    home_score: 3,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Mbappé 66', 90+6'; Barcola 82' (Rabiot); Mbaye 90+5'",
    highlights:
      '出席 80,545 · Mbappé 双响追平/超越 Giroud 队史射手王(58球) · Olise 8.3 · Faghani 拒判点球引争议 · Jackson 中柱 · Mané 禁区内争议未吹点',
    attendance: 80545,
    xg_report: 'FotMob xG 约 1.8–0.9 · 半场 0-0 后法国掌控',
  },
  m18: {
    home_score: 1,
    away_score: 4,
    status: 'FT',
    label: '全场结束',
    scorers: "Hussein 39'; Haaland 29', 43'; Østigård 76' (Ødegaard); Hussein OG 90+7'",
    highlights:
      'Gillette Stadium 波士顿 · Haaland 世界杯首秀双响 · Hussein 头球扳平后挪威连进 · Ødegaard 助攻角球 · 挪威 I 组净胜球领跑',
    xg_report: '伊拉克 39\' 头球高光 · 挪威控场后段锁定胜局',
  },
  m19: {
    home_score: 3,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Messi 17', 60', 76' (De Paul / Mac Allister / Nico González)",
    highlights:
      'Arrowhead Stadium 堪萨斯城 · Messi 第200场国家队 · 世界杯首个帽子戏法 · 追平 Klose 16 球纪录 · 六届世界杯均进球 · Marciniak 执法',
    xg_report: '阿根廷全场压制 · Mahrez 反击有限',
  },
  m20: {
    home_score: 3,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Schmid 20'; Olwan 50'; Al-Arab 77' OG; Arnautović 90+13' (pen)",
    highlights:
      "Levi's Stadium 圣克拉拉 · 奥地利 28 年后再取世界杯胜 · Posch 手球 VAR 取消 Arnautović 进球 · 补时点球锁定 · Al-Tamari 威胁不断",
    xg_report: '半场 1-1 开放对攻 · 约旦首秀有竞争力',
  },
};

const REVIEW = {
  m17:
    '【赛后复盘】赛前主胜63%/最可能2-0；实际3-1。Mbappé 66\'+90+6\' 双响成队史射手王，Barcola 82\' 替补破门；Mbaye 90+5\' 挽回颜面。方向：主胜命中；比分未中(2-0→3-1)；泊松 Top3 含 3-1。',
  m18:
    '【赛后复盘】赛前客胜82%/最可能0-1或0-2；实际1-4。Hussein 39\' 头球一度扳平，Haaland 29\'+43\' 世界杯首秀双响，Østigård 76\' 头球，Hussein 90+7\' 乌龙。方向：客胜命中；比分未中；Haaland 兑现核心预期。',
  m19:
    '【赛后复盘】赛前主胜88%/最可能3-0；实际3-0 完全命中。Messi 17\'/60\'/76\' 帽子戏法，追平 Klose 世界杯总进球纪录。方向：主胜+比分双中；Mahrez 反击未能兑现。',
  m20:
    '【赛后复盘】赛前主胜55%/最可能1-0或2-0；实际3-1。Schmid 20\' 远射，Olwan 50\' 扳平，Al-Arab 77\' 乌龙，Arnautović 补时点球。方向：主胜命中；比分未中(2-0→3-1)；Jordan 冷门未兑现但展现竞争力。',
};

const GROUP_I = [
  { team: 'Norway', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 1 },
  { team: 'France', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1 },
  { team: 'Iraq', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 4 },
  { team: 'Senegal', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3 },
];

const GROUP_J = [
  { team: 'Argentina', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 0 },
  { team: 'Austria', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1 },
  { team: 'Jordan', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3 },
  { team: 'Algeria', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 3 },
];

function rankInGroup(team, table) {
  return table.findIndex(r => r.team === team) + 1;
}

function patchGroupContext(gc, group, table, homeTeam, awayTeam) {
  if (!gc) return gc;
  const hr = rankInGroup(homeTeam, table);
  const ar = rankInGroup(awayTeam, table);
  gc.standings = table.map(r => ({
    team: r.team,
    pts: r.pts,
    p: r.p,
    w: r.w,
    d: r.d,
    l: r.l,
    gf: r.gf,
    ga: r.ga,
  }));
  gc.label = `${group}组 · 第 1 轮（已赛）`;
  if (gc.home) {
    gc.home.rank = hr;
    gc.home.pts = table[hr - 1]?.pts ?? 0;
    gc.home.played = 1;
  }
  if (gc.away) {
    gc.away.rank = ar;
    gc.away.pts = table[ar - 1]?.pts ?? 0;
    gc.away.played = 1;
  }
  gc.cross_group_notes =
    group === 'I'
      ? ['J组：阿根廷净胜球领跑 · 奥地利3分', 'G/H组：四队均1分（6月16日）']
      : ['I组：挪威净胜球领跑 · 法国3分', 'G/H组：四队均1分（6月16日）'];
  return gc;
}

function applyResult(m) {
  const id = m.id;
  const r = ACTUAL[id];
  if (!r) return m;
  m.actualResult = {
    home_score: r.home_score,
    away_score: r.away_score,
    status: r.status,
    label: r.label,
    scorers: r.scorers,
    highlights: r.highlights,
  };
  m.note = (m.note || '')
    .replace(/ · 待赛.*$/, '')
    .replace(/ · 已结束.*$/, '')
    .replace(/ · 官方.*$/, '') + ` · 已结束 ${r.home_score}-${r.away_score}`;

  if (m.lineup) {
    m.lineup.note = `${(m.lineup.note || '').replace(/ · 全场.*$/, '')} · 全场 ${r.home_score}-${r.away_score} · ${r.xg_report || ''}`.trim();
    m.lineup.updated = TS;
  }

  if (m.prediction) {
    m.prediction.key_factor = REVIEW[id];
  }

  if (m.home?.form) m.home.form = pushForm(m.home.form, r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D');
  if (m.away?.form) m.away.form = pushForm(m.away.form, r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D');

  if (id === 'm17' && m.home?.stars?.[0]) {
    m.home.stars[0].rating = 9.0;
    m.home.stars[0].desc = '66\'+90+6\' 双响 · 队史射手王(58) · MOTM';
    m.home.stars[0].stats = '2球 · 追平/超越 Giroud';
  }
  if (id === 'm18' && m.away?.stars?.[0]) {
    m.away.stars[0].rating = 9.1;
    m.away.stars[0].desc = '世界杯首秀双响 · 29\'+43\'';
    m.away.stars[0].stats = '2球 · MOTM';
  }
  if (id === 'm19' && m.home?.stars?.[0]) {
    m.home.stars[0].rating = 9.5;
    m.home.stars[0].desc = '17\'/60\'/76\' 帽子戏法 · 追平 Klose 16球';
    m.home.stars[0].stats = '3球 · MOTM';
  }
  if (id === 'm20' && m.home?.stars?.[0]) {
    m.home.stars[0].rating = 8.2;
    m.home.stars[0].desc = '补时点球锁定胜局 · 28年后世界杯再胜';
  }

  const table = m.group === 'I' ? GROUP_I : GROUP_J;
  m.group_context = patchGroupContext(m.group_context, m.group, table, m.home.name, m.away.name);

  return JSON.parse(JSON.stringify(m));
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

const archived = [];
for (const id of ['m17', 'm18', 'm19', 'm20']) {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  if (!m) {
    console.warn('⚠ missing today match', id);
    continue;
  }
  const patched = applyResult(m);
  Object.assign(m, patched);
  if (!RESULTS_DATA.finishedMatches.some(x => x.id === id)) {
    RESULTS_DATA.finishedMatches.push(JSON.parse(JSON.stringify(m)));
    archived.push(id);
  } else {
    const i = RESULTS_DATA.finishedMatches.findIndex(x => x.id === id);
    RESULTS_DATA.finishedMatches[i] = JSON.parse(JSON.stringify(m));
  }
}

function upsertGroup(group, label, table) {
  const snaps = RESULTS_DATA.groupSnapshots || [];
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  RESULTS_DATA.groupSnapshots = snaps;
}

upsertGroup('I', 'I组 · 第 1 轮（2场已赛）', GROUP_I);
upsertGroup('J', 'J组 · 第 1 轮（2场已赛）', GROUP_J);

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 官方赛果 · ESPN/Sky/FotMob · Day 6 四场完结';
MATCH_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月17日 · 法国3-1塞内加尔 · 伊拉克1-4挪威 · 阿根廷3-0阿尔及利亚 · 奥地利3-1约旦', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'Mbappé 双响队史射手王 · Messi 帽子戏法追平 Klose · Haaland 世界杯首秀双响', time: '球星' },
  { tag: 'OFFICIAL', text: 'I组：挪威净胜球领跑 · 法国3分 · J组：阿根廷领跑 · 奥地利3分', time: '积分榜' },
  { tag: 'LINEUP', text: '✅ 法塞战官方首发已确认 · Mbappé/Olise/Dembélé/Doué · Mendy; Mané; Sarr', time: '阵容' },
  { tag: 'REFEREE', text: 'Faghani(法-塞) · Atcho(伊-挪) · Marciniak(阿-阿) · Beida(奥-约) — FIFA 已确认', time: '裁判' },
  { tag: 'INJURY', text: 'Saliba/Mbappé/Mané/Koulibaly 均出场 · Messi 打满帽子戏法 · Alaba 复出参战', time: '伤情' },
  { tag: 'UPDATE', text: '模型推演概要+先进球情景 · 四场赛后核验已可查看', time: '复盘' },
  { tag: 'PREVIEW', text: '下一场 · 葡萄牙-刚果(金)(6月18日 01:00 北京) · K组揭幕', time: '赛程' },
];

MATCH_DATA.nextMatch = {
  group: 'K',
  matchday: 1,
  date: '2026-06-17',
  time: '13:00',
  time_local: '13:00 ET',
  timezone: 'EDT (UTC-4)',
  time_beijing: '01:00',
  date_beijing: '6月18日',
  time_beijing_full: '北京时间 6月18日 01:00',
  venue: 'NRG Stadium',
  city: 'Houston, USA',
  home: { name: 'Portugal', iso: 'pt', fifaRank: 6, rating: 88 },
  away: { name: 'Congo DR', iso: 'cd', fifaRank: 67, rating: 68 },
  teaser: 'K组揭幕：C罗最后一届 · 葡萄牙 vs 刚果（金）',
  home_win: 72,
  draw: 18,
  away_win: 10,
  predicted_score: '2-0',
  key_player_home: 'Cristiano Ronaldo',
  key_player_away: 'Yoane Wissa',
};

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 6 (m17–m20)';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月17日四场 · 法3-1塞 · 伊1-4挪 · 阿3-0阿 · 奥3-1约', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'Messi 帽子戏法 · Mbappé 队史射手王 · Haaland 双响', time: '球星' },
  { tag: 'OFFICIAL', text: 'I/J组首轮：挪威&阿根廷净胜球领跑', time: '积分榜' },
  ...(RESULTS_DATA.breakingNews || []).slice(0, 6),
].slice(0, 12);

const LIVE_DATA = {
  lastUpdated: new Date().toISOString(),
  todayDate: '2026-06-17',
  fixtures: MATCH_DATA.todayMatches.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    status: 'FT',
    home_score: m.actualResult?.home_score,
    away_score: m.actualResult?.away_score,
    group: m.group,
  })),
  allResults: MATCH_DATA.todayMatches.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    score: `${m.actualResult?.home_score}-${m.actualResult?.away_score}`,
    group: m.group,
  })),
  standings: [
    { group: 'I', table: GROUP_I },
    { group: 'J', table: GROUP_J },
  ],
  injuries: {},
  yesterdayResults: [],
};

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 6 (results synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`
);
fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/sync-day6-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`
);

console.log('✅ Synced results:', ['m17', 'm18', 'm19', 'm20'].map(id => {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  return `${id} ${m?.actualResult?.home_score}-${m?.actualResult?.away_score}`;
}).join(' | '));
console.log('✅ Archived new:', archived.join(', ') || '(updated existing)');
console.log('✅ finishedMatches total:', RESULTS_DATA.finishedMatches.length);
