/**
 * Day 7 赛果同步 — m23–m24（2026-06-18 北京时间 · 4场）
 * Sources: FIFA · ESPN · Sky Sports · ABC · Fox Sports
 * Run: node scripts/sync-day7-results.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = '2026-06-18T22:00:00+08:00';

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
  m23: {
    home_score: 1,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "João Neves 6' (Neto); Yoane Wissa 45+5' (Masuaku)",
    highlights:
      'NRG Stadium 休斯顿 · 刚果（金）52 年后再战世界杯首分+首球 · Wissa 头球扳平 · C罗 全场 0 射正 · Cancelo 倒钩越位无效 · 葡萄牙仅 1 次射正',
    ht_score: '1-1',
    first_goal_min: 6,
    xg_report: 'FIFA/Sky：Neves 6\' 头球破局 · Wissa 45+5\' 历史性扳平 · 葡萄牙控球占优但终结欠佳',
  },
  m22: {
    home_score: 4,
    away_score: 2,
    status: 'FT',
    label: '全场结束',
    scorers: "Kane 12' (pen), 42'; Bellingham 47'; Rashford 85'; Baturina 36'; Musa 45+5'",
    highlights:
      'AT&T Stadium 达拉斯 · 凯恩双响追平莱因克尔世界杯进球纪录 · 半场 2-2 对攻 · 贝林厄姆下半场破局 · 拉什福德 85\' 锁定胜局 · 点球争议',
    ht_score: '2-2',
    first_goal_min: 12,
    xg_report: 'ESPN：凯恩 12\'(点)+42\' · 克罗地亚 Baturina 36\'、Musa 45+5\' 扳平后英格兰再进两球',
  },
  m21: {
    home_score: 1,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Caleb Yirenkyi 90+4'",
    highlights:
      'BMO Field 多伦多 · 大雨泥泞鏖战 · 加纳门将伤退 · Yirenkyi 补时绝杀 · 巴拿马世界杯第二战仍难求一胜',
    ht_score: '0-0',
    first_goal_min: 94,
    xg_report: 'ABC/ESPN：全场沉闷至补时 · Yirenkyi 90+4\' 门前混战破门',
  },
  m24: {
    home_score: 1,
    away_score: 3,
    status: 'FT',
    label: '全场结束',
    scorers: "Muñoz 41' (Díaz); Fayzullaev 60'; Díaz 65'; Campaz 90+6' (Díaz)",
    highlights:
      'Estadio Azteca 墨西哥城 · 乌兹别克世界杯首秀首球(Fayzullaev) · Díaz 传射 · Campaz 补时头球 · 哥伦比亚领跑 K 组',
    ht_score: '1-0',
    first_goal_min: 41,
    xg_report: 'FIFA：Muñoz 41\' 转身破门 · Shomurodov 射门被 Vargas 扑出 Fayzullaev 补射 · Díaz 65\' 再领先',
  },
};

const REVIEW = {
  m23:
    '【赛后复盘】赛前主胜约 70%/最可能 2-0；实际 1-1 冷门。Neves 6\' 头球领先，Wissa 45+5\' 历史性扳平；C罗 0 射正。方向：主胜未中；平局命中；比分未中；爆冷指数有效。',
  m22:
    '【赛后复盘】赛前英格兰略优/最可能 2-1；实际 4-2 对攻大戏。Kane 12\'(点)+42\' 双响，Baturina 36\'、Musa 45+5\' 扳平半场 2-2，Bellingham 47\'、Rashford 85\' 锁定。方向：主胜命中；比分未中；总进球偏多。',
  m21:
    '【赛后复盘】赛前加纳占优/最可能 2-0 或 1-0；实际 1-0 补时绝杀。Yirenkyi 90+4\' 破门，全场沉闷。方向：主胜命中；比分方向命中(1-0)；模型慢热预期部分兑现。',
  m24:
    '【赛后复盘】赛前客胜约 60%/最可能 0-2 或 1-2；实际 1-3。Muñoz 41\'、Díaz 65\'、Campaz 90+6\'；乌兹别克 Fayzullaev 60\' 队史世界杯首球。方向：客胜命中；比分接近(1-2→1-3)。',
};

const GROUP_K = [
  { team: 'Colombia', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1 },
  { team: 'Portugal', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Congo DR', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1 },
  { team: 'Uzbekistan', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3 },
];

const GROUP_L = [
  { team: 'England', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 2 },
  { team: 'Ghana', pts: 3, p: 1, w: 1, d: 0, l: 0, gf: 1, ga: 0 },
  { team: 'Croatia', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 2, ga: 4 },
  { team: 'Panama', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 1 },
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
    group === 'K'
      ? ['L组：英格兰&加纳同积3分 · 净胜球英格兰领先', 'I/J组：挪威&阿根廷净胜球领跑']
      : ['K组：哥伦比亚领跑 · 葡萄牙/刚果（金）各1分', 'I/J组：挪威&阿根廷净胜球领跑'];
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

  if (m.home?.form) {
    m.home.form = pushForm(m.home.form, r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D');
  }
  if (m.away?.form) {
    m.away.form = pushForm(m.away.form, r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D');
  }

  if (id === 'm23' && m.away?.stars?.[0]) {
    m.away.stars[0].rating = 8.5;
    m.away.stars[0].desc = '45+5\' 头球扳平 · 队史世界杯首球+首分';
    m.away.stars[0].stats = '1球 · MOTM';
  }
  if (id === 'm22' && m.home?.stars?.[0]) {
    m.home.stars[0].rating = 9.2;
    m.home.stars[0].desc = '12\'(点)+42\' 双响 · 追平莱因克尔世界杯进球';
    m.home.stars[0].stats = '2球 · MOTM';
  }
  if (id === 'm21' && m.home?.stars?.[2]) {
    m.home.stars[2].rating = 8.0;
    m.home.stars[2].desc = '90+4\' 补时绝杀 · 多伦多雨战';
    m.home.stars[2].stats = '制胜球';
  }
  if (id === 'm24' && m.away?.stars?.[0]) {
    m.away.stars[0].rating = 9.0;
    m.away.stars[0].desc = '传射+策动 · Muñoz/Campaz 破门助攻';
    m.away.stars[0].stats = '1球1助 · MOTM';
  }

  const table = m.group === 'K' ? GROUP_K : GROUP_L;
  m.group_context = patchGroupContext(m.group_context, m.group, table, m.home.name, m.away.name);

  return JSON.parse(JSON.stringify(m));
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

const archived = [];
for (const id of ['m23', 'm22', 'm21', 'm24']) {
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

upsertGroup('K', 'K组 · 第 1 轮（4场已赛）', GROUP_K);
upsertGroup('L', 'L组 · 第 1 轮（4场已赛）', GROUP_L);

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 官方赛果 · ESPN/Sky/ABC · Day 7 四场完结';
MATCH_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月18日 · 葡萄牙1-1刚果(金) · 英格兰4-2克罗地亚 · 加纳1-0巴拿马 · 乌兹别克1-3哥伦比亚', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'Wissa 队史首球扳平 · Kane 双响 · Yirenkyi 补时绝杀 · Díaz 传射', time: '球星' },
  { tag: 'OFFICIAL', text: 'K组：哥伦比亚领跑 · L组：英格兰&加纳同积3分', time: '积分榜' },
  { tag: 'UPDATE', text: '四场赛后核验已可查看 · 模型推演 vs 官方赛果对照', time: '复盘' },
  { tag: 'PREVIEW', text: '下一场 · 捷克-南非(6月19日 00:00 北京) · A组第2轮', time: '赛程' },
  { tag: 'INJURY', text: 'C罗 0 射正仍出战 · 加纳门将伤退 · Stones 队检', time: '伤情' },
  { tag: 'OFFICIAL', text: '🏁 昨日：法3-1塞 · 伊1-4挪 · 阿3-0阿 · 奥3-1约', time: '赛果回顾' },
  { tag: 'UPDATE', text: '灵力/五行/主教练/气候板块 · Day 7 完整版', time: '站点' },
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
RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 6–7 (m17–m24)';
RESULTS_DATA.breakingNews = [
  { tag: 'OFFICIAL', text: '🏁 6月18日四场 · 葡1-1刚果(金) · 英4-2克 · 加纳1-0巴 · 乌1-3哥伦', time: '赛果汇总' },
  { tag: 'OFFICIAL', text: 'Wissa 历史性扳平 · Kane 双响 · Díaz 传射 · Yirenkyi 绝杀', time: '球星' },
  { tag: 'OFFICIAL', text: 'K/L组首轮完结 · 哥伦比亚&英格兰领跑', time: '积分榜' },
  ...(RESULTS_DATA.breakingNews || []).filter(n => !/6月18日四场/.test(n.text || '')).slice(0, 6),
].slice(0, 12);

const LIVE_DATA = {
  lastUpdated: new Date().toISOString(),
  todayDate: '2026-06-18',
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
    { group: 'K', table: GROUP_K },
    { group: 'L', table: GROUP_L },
  ],
  injuries: {},
  yesterdayResults: [],
};

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 7 (results synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`
);
fs.writeFileSync(
  RESULTS_PATH,
  `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`
);
fs.writeFileSync(
  LIVE_PATH,
  `// Auto-synced by scripts/sync-day7-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`
);

console.log('✅ Synced results:', ['m23', 'm22', 'm21', 'm24'].map(id => {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  return `${id} ${m?.actualResult?.home_score}-${m?.actualResult?.away_score}`;
}).join(' | '));
console.log('✅ Archived new:', archived.join(', ') || '(updated existing)');
console.log('✅ finishedMatches total:', RESULTS_DATA.finishedMatches.length);
