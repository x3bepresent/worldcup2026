/**
 * Day 8 赛果同步 — m25–m28（2026-06-19 北京时间 · 4场）
 * Sources: FIFA API · NBC · Fox · Sky Sports · TSN
 * Run: node scripts/sync-day8-results.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = '2026-06-19T22:00:00+08:00';

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function pushForm(form, r) {
  const f = [...(form || ['W', 'D', 'L', 'W', 'D'])];
  f.shift();
  f.push(r);
  return f;
}

const ACTUAL = {
  m25: {
    home_score: 1,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Sadílek 6' (Sojka); Mokoena 83' (pen · Šulc 手球)",
    highlights:
      'Mercedes-Benz 亚特兰大 · Sadílek 6\' 首开 · Mokoena 83\' 点球扳平（16 年来南非世界杯再进球）· Schick 错失良机 · 双方各 1 分出线形势严峻',
    ht_score: '1-0',
    first_goal_min: 6,
    xg_report: 'FIFA M25 · Sadílek 6\' · Mokoena 83\' pen',
    fifa_id: '400021440',
  },
  m26: {
    home_score: 4,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Manzambi 74', 90'; Vargas 84'; Xhaka 90+7' (pen); Mahmić 90+3'",
    highlights:
      'SoFi 洛杉矶 · 半场 0-0 · 替补 Manzambi 双响+Vargas · Mahmić 补时扳回 · Muharemović 红牌 · Xhaka 点球锁定 4-1 · 瑞士 4 分领跑 B 组',
    ht_score: '0-0',
    first_goal_min: 74,
    xg_report: 'FIFA M26 · 四球均来自替补/补时阶段',
    fifa_id: '400021446',
  },
  m27: {
    home_score: 6,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Larin 16'; David 29', 45+3', 90+2'; Saliba 64'; Al Mannai 75' (og)",
    highlights:
      'BC Place 温哥华 · 加拿大队史世界杯首胜 · David 帽子戏法（并列 Messi 本届唯一）· Koné 57\' 胫腓骨骨折 · 卡塔尔 2 红 9 人 · 控球近 80%',
    ht_score: '3-0',
    first_goal_min: 16,
    xg_report: 'FIFA M27 · David 3 球 · Saliba 举 Koné 8 号球衣庆祝',
    fifa_id: '400021450',
  },
  m28: {
    home_score: 1,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Romo 50' (Kim Seung-gyu 失误)",
    highlights:
      'Estadio Akron 瓜达拉哈拉 · 墨西哥率先锁定 32 强+ A 组第一 · Romo 50\' 补射 · Kim Seung-gyu 摘球失误 · 韩国多次错失扳平 · Álvarez 门线解围',
    ht_score: '0-0',
    first_goal_min: 50,
    xg_report: 'FIFA M28 · Luis Romo 50\' · 墨西哥 6 分领跑 A 组',
    fifa_id: '400021442',
  },
};

const REVIEW = {
  m25:
    '【赛后复盘】赛前主胜约 54%/最可能 1-0；实际 1-1 平局。Sadílek 6\' 领先，Mokoena 83\' 点球扳平；Schick 错失良机。方向：主胜未中；平局命中；比分 1-1 在 Top3 边缘。',
  m26:
    '【赛后复盘】赛前主胜约 50%/最可能 2-0 或 1-1；实际 4-1 瑞士大胜。替补 Manzambi 双响+Vargas，Mahmić 90+3\' 扳回，Xhaka 点球。方向：主胜命中；比分未中；总进球偏多。',
  m27:
    '【赛后复盘】赛前主胜约 55%/最可能 2-0；实际 6-0 历史性大胜。David 帽子戏法，Larin+Saliba+乌龙；Koné 重伤。方向：主胜命中；比分远超预期；东道主碾压。',
  m28:
    '【赛后复盘】赛前略势均力敌/最可能 2-1 或 1-1；实际 1-0 墨西哥小胜。Romo 50\' 利用 Kim 失误破门；韩国未能扳平。方向：主胜命中；比分 1-0 在分布内；墨西哥锁定出线。',
};

const GROUP_A = [
  { team: 'Mexico', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 4, ga: 0 },
  { team: 'South Korea', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2 },
  { team: 'Czechia', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 2, ga: 3 },
  { team: 'South Africa', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 3 },
];

const GROUP_B = [
  { team: 'Canada', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 7, ga: 1 },
  { team: 'Switzerland', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 5, ga: 2 },
  { team: 'Bosnia and Herzegovina', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 2, ga: 5 },
  { team: 'Qatar', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 7 },
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
  gc.label = `${group}组 · 第 2 轮（已赛）`;
  if (gc.home) {
    gc.home.rank = hr;
    gc.home.pts = table[hr - 1]?.pts ?? 0;
    gc.home.played = 2;
  }
  if (gc.away) {
    gc.away.rank = ar;
    gc.away.pts = table[ar - 1]?.pts ?? 0;
    gc.away.played = 2;
  }
  if (group === 'A') {
    gc.cross_group_notes = ['B组：加拿大&瑞士同积 4 分领跑', '墨西哥已锁定 32 强'];
  } else {
    gc.cross_group_notes = ['A组：墨西哥 6 分已出线 · 韩国 3 分', '加拿大&瑞士末轮直接对话'];
  }
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
    ht_score: r.ht_score,
    first_goal_min: r.first_goal_min,
    fifa_match_id: r.fifa_id,
  };
  m.note = (m.note || '')
    .replace(/ · 待赛.*$/, '')
    .replace(/ · 已结束.*$/, '')
    .replace(/ · FIFA 官方.*$/, '') + ` · 已结束 ${r.home_score}-${r.away_score}`;

  if (m.lineup) {
    m.lineup.note = `${(m.lineup.note || '').replace(/ · 全场.*$/, '')} · 全场 ${r.home_score}-${r.away_score} · ${r.xg_report || ''}`.trim();
    m.lineup.updated = TS;
  }

  if (m.prediction) {
    m.prediction.key_factor = REVIEW[id];
  }

  if (m.home?.form) {
    m.home.form = pushForm(m.home.form, r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D');
  }
  if (m.away?.form) {
    m.away.form = pushForm(m.away.form, r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D');
  }

  if (id === 'm25' && m.home?.stars?.[0]) {
    m.home.stars[0].rating = 7.2;
    m.home.stars[0].desc = '错失良机 · Sadílek 6\' 首开';
  }
  if (id === 'm26' && m.home?.stars?.[0]) {
    m.home.stars[0].rating = 8.8;
    m.home.stars[0].desc = '90+7\' 点球 · 队长锁定 4-1';
    if (m.home.stars[1]) {
      m.home.stars.unshift({
        name: 'Johan Manzambi',
        pos: 'FW',
        club: 'Freiburg',
        stats: '74\'+90\' 双响',
        rating: 9.0,
        desc: '替补双响 · 20 岁世界杯最年轻瑞士进球者之一',
      });
    }
  }
  if (id === 'm27' && m.home?.stars?.[0]) {
    m.home.stars[0].rating = 9.5;
    m.home.stars[0].desc = '帽子戏法 · 队史世界杯首胜核心';
    m.home.stars[0].stats = '3球 · 帽子戏法';
  }
  if (id === 'm28' && m.home?.stars?.[0]) {
    m.home.stars[0].rating = 8.0;
    m.home.stars[0].desc = '锁定 32 强 · Romo 50\' 制胜';
  }
  if (id === 'm28' && m.away?.stars?.[0]) {
    m.away.stars[0].rating = 7.0;
    m.away.stars[0].desc = 'Kim 失误致丢球 · 多次错失扳平';
  }

  const table = m.group === 'A' ? GROUP_A : GROUP_B;
  m.group_context = patchGroupContext(m.group_context, m.group, table, m.home.name, m.away.name);

  return JSON.parse(JSON.stringify(m));
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

const archived = [];
for (const id of ['m25', 'm26', 'm27', 'm28']) {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  if (!m) {
    console.warn('⚠ missing today match', id);
    continue;
  }
  const patched = applyResult(m);
  Object.assign(m, patched);
  const i = RESULTS_DATA.finishedMatches.findIndex(x => x.id === id);
  if (i < 0) {
    RESULTS_DATA.finishedMatches.push(JSON.parse(JSON.stringify(m)));
    archived.push(id);
  } else {
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

upsertGroup('A', 'A组 · 第2轮后', GROUP_A);
upsertGroup('B', 'B组 · 第2轮后', GROUP_B);

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 官方赛果 · Day 8 四场完结';
MATCH_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月19日 · 捷1-1南非 · 瑞4-1波黑 · 加6-0卡 · 墨1-0韩', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: '墨西哥率先锁定 32 强 · 加拿大队史世界杯首胜 · David 帽子戏法', time: '球星' },
  { tag: 'OFFICIAL', text: 'A组：墨西哥 6 分 · B组：加拿大&瑞士同积 4 分', time: '积分榜' },
  { tag: 'INJURY', text: 'Koné 胫腓骨骨折 · Mokoena 下轮停赛(两黄) · Koné 赛季报销', time: '伤情' },
  { tag: 'UPDATE', text: '四场赛后核验已可查看 · 模型推演 vs 官方赛果对照', time: '复盘' },
  { tag: 'PREVIEW', text: '下一场 · 美国-澳大利亚(6月20日 03:00 北京) · D组第2轮', time: '赛程' },
  { tag: 'OFFICIAL', text: '🏁 昨日：捷1-1南非 · 瑞4-1波 · 加6-0卡 · 墨1-0韩', time: '赛果回顾' },
  { tag: 'LINEUP', text: '✅ m28 FIFA 官方首发已归档 · Romo 50\' 制胜', time: '官方' },
];

const firstFt = MATCH_DATA.todayMatches.find(m => m.actualResult?.status === 'FT');
MATCH_DATA.nextMatch = firstFt ? {
  group: firstFt.group,
  matchday: firstFt.matchday,
  date: firstFt.date,
  time: firstFt.time,
  time_local: firstFt.time_local,
  timezone: firstFt.timezone,
  time_beijing: firstFt.time_beijing,
  date_beijing: firstFt.date_beijing,
  time_beijing_full: firstFt.time_beijing_full,
  venue: firstFt.venue,
  city: firstFt.city,
  home: { name: firstFt.home.name, iso: firstFt.home.iso, fifaRank: firstFt.home.fifa_rank, rating: firstFt.home.rating },
  away: { name: firstFt.away.name, iso: firstFt.away.iso, fifaRank: firstFt.away.fifa_rank, rating: firstFt.away.rating },
  teaser: `已结束 ${firstFt.actualResult.home_score}-${firstFt.actualResult.away_score} · 详见赛果核验`,
  home_win: firstFt.prediction?.home_win,
  draw: firstFt.prediction?.draw,
  away_win: firstFt.prediction?.away_win,
  predicted_score: firstFt.prediction?.score,
} : MATCH_DATA.nextMatch;

RESULTS_DATA.lastUpdated = TS;
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 8 (m25–m28)';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 Day 8 · 捷1-1南非 · 瑞4-1波 · 加6-0卡 · 墨1-0韩', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: '墨西哥锁定 32 强 · David 帽子戏法 · Manzambi 替补双响', time: '球星' },
  { tag: 'OFFICIAL', text: 'A/B 组第2轮完结 · 墨西哥&加拿大领跑', time: '积分榜' },
  ...(RESULTS_DATA.breakingNews || []).filter(n => !/Day 8/.test(n.text || '')).slice(0, 6),
].slice(0, 12);

const LIVE_DATA = {
  lastUpdated: new Date().toISOString(),
  todayDate: '2026-06-19',
  fixtures: MATCH_DATA.todayMatches.map(m => ({
    id: m.id,
    home: m.home.name,
    away: m.away.name,
    status: m.actualResult?.status || 'NS',
    home_score: m.actualResult?.home_score ?? null,
    away_score: m.actualResult?.away_score ?? null,
    group: m.group,
  })),
  allResults: MATCH_DATA.todayMatches
    .filter(m => m.actualResult?.status === 'FT')
    .map(m => ({
      id: m.id,
      home: m.home.name,
      away: m.away.name,
      score: `${m.actualResult.home_score}-${m.actualResult.away_score}`,
      group: m.group,
    })),
  standings: [
    { group: 'A', label: 'A组 · 第2轮后', table: GROUP_A },
    { group: 'B', label: 'B组 · 第2轮后', table: GROUP_B },
  ],
  injuries: { note: 'Koné 骨折 · Mokoena 停赛' },
  yesterdayResults: [],
};

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 8 (results synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/sync-day8-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
);

console.log('✅ Synced results:', ['m25', 'm26', 'm27', 'm28'].map(id => {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  return `${id} ${m?.actualResult?.home_score}-${m?.actualResult?.away_score}`;
}).join(' | '));
console.log('✅ Archived new:', archived.join(', ') || '(updated existing)');
console.log('✅ finishedMatches total:', RESULTS_DATA.finishedMatches.length);
