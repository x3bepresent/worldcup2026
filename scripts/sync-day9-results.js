/**
 * Day 9 赛果同步 — m29–m32（2026-06-20 北京时间 · 4场）
 * Sources: FIFA API · NBC · SBS · Socceroos
 * Run: node scripts/sync-day9-results.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { archiveFinishedMatch } = require('./archive-match.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

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

function fetchFifa(id) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.fifa.com/api/v3/live/football/${id}`, (res) => {
      let raw = '';
      res.on('data', (c) => { raw += c; });
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function playerName(j, idPlayer) {
  const p = [...(j.HomeTeam?.Players || []), ...(j.AwayTeam?.Players || [])]
    .find(x => x.IdPlayer === idPlayer);
  return p?.PlayerName?.[0]?.Description || p?.AliasName?.[0]?.Description || idPlayer;
}

function formatScorers(j) {
  const rows = [];
  for (const g of j.HomeTeam?.Goals || []) {
    rows.push(`${playerName(j, g.IdPlayer)} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  for (const g of j.AwayTeam?.Goals || []) {
    rows.push(`${playerName(j, g.IdPlayer)} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  return rows.join('; ');
}

function isFinished(j) {
  return j.MatchStatus === 0 && j.Period === 10;
}

const FIFA_IDS = {
  m32: '400021462',
  m30: '400021454',
  m29: '400021457',
  m31: '400021460',
};

/** 手工补充（FIFA API 无半场比分时） */
const MANUAL = {
  m30: {
    home_score: 0,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Ismael Saibari 2'",
    highlights:
      'Gillette 波士顿 · Saibari 开场 71 秒破门 · 摩洛哥 4 分领跑 C 组 · 苏格兰 3 分仍有望出线',
    ht_score: '0-1',
    first_goal_min: 2,
    xg_report: 'FIFA M30 · Saibari 2\' 闪击',
    fifa_id: '400021454',
  },
  m32: {
    home_score: 2,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Cameron Burgess 11' (og); Alex Freeman 43'",
    highlights:
      'Lumen Field 西雅图 · 无 Pulisic 首发 · Burgess 乌龙 + Freeman 头球 · 美国 6 分提前锁定 32 强',
    ht_score: '2-0',
    first_goal_min: 11,
    xg_report: 'FIFA M32 · 连续两场受益于对手乌龙',
    fifa_id: '400021462',
  },
  m29: {
    home_score: 3,
    away_score: 0,
    status: 'LIVE',
    label: '进行中',
    scorers: "Matheus Cunha 23', 36'; Vinícius Jr 45+3'",
    highlights:
      'Lincoln Financial 费城 · Cunha 梅开二度 · Vinícius 补时第三球 · 海地 5-4-1 未能守住',
    ht_score: '3-0',
    first_goal_min: 23,
    xg_report: 'FIFA M29 · 官方 4-4-2 早段破局',
    fifa_id: '400021457',
  },
};

const REVIEW = {
  m30:
    '【赛后复盘】赛前 xG 接近均势/最可能 1-1；实际 0-1 摩洛哥闪击。Saibari 2\' 破门后苏格兰围攻无果。方向：客胜命中；比分 0-1 在分布内；总进球偏少。',
  m32:
    '【赛后复盘】赛前无 Pulisic 首发、模型偏小球；实际 2-0 美国零封。Burgess 11\' 乌龙 + Freeman 43\' 头球；Freese 一门稳。方向：主胜命中；穿 -1 达标；比分低于 xG 大球预期。',
  m29:
    '【赛中】赛前铁局/小球主路径；实际半场 3-0 热门爆发。Cunha 23\'/36\' + Vinícius 45+3\'；海地 5-4-1 早段崩盘。待全场结束归档。',
};

/** C 组：m30 已赛 + m29 按 FIFA 比分（进行中亦计入 interim） */
const GROUP_C = [
  { team: 'Morocco', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 2, ga: 1 },
  { team: 'Brazil', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 1 },
  { team: 'Scotland', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 1, ga: 1 },
  { team: 'Haiti', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 4 },
];

/** D 组：m32 已赛 · 土-巴待赛 */
const GROUP_D = [
  { team: 'USA', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 6, ga: 1 },
  { team: 'Australia', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 2, ga: 2 },
  { team: 'Türkiye', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2 },
  { team: 'Paraguay', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 4 },
];

function rankInGroup(team, table) {
  return table.findIndex(r => r.team === team) + 1;
}

function patchGroupContext(gc, group, table, homeTeam, awayTeam, extraNotes) {
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
  gc.label = `${group}组 · 第 2 轮（${group === 'D' ? '3 场已赛' : '3 场已赛/进行中'}）`;
  if (gc.home) {
    gc.home.rank = hr;
    gc.home.pts = table[hr - 1]?.pts ?? 0;
    gc.home.played = table[hr - 1]?.p ?? 0;
  }
  if (gc.away) {
    gc.away.rank = ar;
    gc.away.pts = table[ar - 1]?.pts ?? 0;
    gc.away.played = table[ar - 1]?.p ?? 0;
  }
  if (extraNotes?.length) gc.cross_group_notes = extraNotes;
  return gc;
}

function applyResult(m, r, reviewKey) {
  const id = m.id;
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
    .replace(/ · 进行中.*$/, '')
    .replace(/ · FIFA 官方.*$/, '')
    + (r.status === 'FT' ? ` · 已结束 ${r.home_score}-${r.away_score}` : ` · 进行中 ${r.home_score}-${r.away_score}`);

  if (m.lineup?.confirmed) {
    m.lineup.note = `${(m.lineup.note || '').replace(/ · 全场.*$/, '').replace(/ · 进行中.*$/, '')}`
      + (r.status === 'FT' ? ` · 全场 ${r.home_score}-${r.away_score}` : ` · 进行中 ${r.home_score}-${r.away_score}`)
      + ` · ${r.xg_report || ''}`;
    m.lineup.updated = TS;
  }

  if (m.prediction && REVIEW[reviewKey || id]) {
    m.prediction.key_factor = REVIEW[reviewKey || id];
  }

  if (m.home?.form && r.status === 'FT') {
    m.home.form = pushForm(m.home.form, r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D');
  }
  if (m.away?.form && r.status === 'FT') {
    m.away.form = pushForm(m.away.form, r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D');
  }

  if (id === 'm30' && m.away?.stars?.[0]) {
    m.away.stars[0].rating = 8.5;
    m.away.stars[0].desc = '2\' 闪击 · 摩洛哥 4 分';
    m.away.stars[0].stats = '2\' 破门';
  }
  if (id === 'm32' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Alex Freeman',
      pos: 'RB',
      club: 'Benfica',
      stats: '43\' 头球',
      rating: 8.4,
      desc: '无 Pulisic 版破局 · 美国 6 分出线',
    };
  }
  if (id === 'm29' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Matheus Cunha',
      pos: 'ST',
      club: 'Man Utd',
      stats: '23\'+36\' 双响',
      rating: 9.0,
      desc: '官方先发中锋 · 半场梅开二度',
    };
  }

  const table = m.group === 'C' ? GROUP_C : GROUP_D;
  const notes = m.group === 'C'
    ? ['摩洛哥 4 分 · 巴西 4 分（进行中/已赛）', '苏格兰 3 分 · 海地 0 分']
    : ['美国 6 分已锁定 32 强', '澳大利亚 3 分 · 土耳其/巴拉圭 0 分 · 末轮土-巴直接对话'];
  m.group_context = patchGroupContext(m.group_context, m.group, table, m.home.name, m.away.name, notes);

  return JSON.parse(JSON.stringify(m));
}

async function main() {
  const resolved = { ...MANUAL };
  for (const [mid, fid] of Object.entries(FIFA_IDS)) {
    try {
      const j = await fetchFifa(fid);
      const hs = j.HomeTeam?.Score ?? resolved[mid]?.home_score;
      const as = j.AwayTeam?.Score ?? resolved[mid]?.away_score;
      const scorers = formatScorers(j) || resolved[mid]?.scorers;
      const ft = isFinished(j);
      if (mid !== 'm31') {
        resolved[mid] = {
          ...resolved[mid],
          home_score: hs,
          away_score: as,
          scorers,
          status: ft ? 'FT' : (hs != null ? 'LIVE' : 'NS'),
          label: ft ? '全场结束' : (hs != null ? '进行中' : '未开赛'),
          fifa_id: fid,
        };
      }
    } catch (e) {
      console.warn('⚠ FIFA fetch', mid, e.message);
    }
  }

  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  const archiveIds = [];
  for (const id of ['m32', 'm30', 'm29']) {
    const m = MATCH_DATA.todayMatches.find(x => x.id === id);
    const r = resolved[id];
    if (!m || !r || r.status === 'NS') continue;
    const patched = applyResult(m, r, id);
    Object.assign(m, patched);
    if (r.status === 'FT') {
      const archived = archiveFinishedMatch(patched, { archivedAt: TS });
      const i = RESULTS_DATA.finishedMatches.findIndex(x => x.id === id);
      if (i < 0) {
        RESULTS_DATA.finishedMatches.push(archived);
        archiveIds.push(id);
      } else {
        RESULTS_DATA.finishedMatches[i] = archived;
      }
    }
  }

  // m31 仅更新小组形势（美国已 6 分）
  const m31 = MATCH_DATA.todayMatches.find(x => x.id === 'm31');
  if (m31) {
    m31.group_context = patchGroupContext(
      m31.group_context,
      'D',
      GROUP_D,
      m31.home.name,
      m31.away.name,
      [
        '美国 6 分已锁定 32 强 · 澳大利亚 3 分',
        '土耳其/巴拉圭均为 0 分 — 本场胜者 3 分仍落后澳大利亚，须末轮再抢分',
        'C 组：摩洛哥&巴西 4 分领跑',
      ],
    );
    if (m31.prediction?.insight_factors) {
      const idx = m31.prediction.insight_factors.findIndex(f => f.label === '小组积分');
      if (idx >= 0) {
        m31.prediction.insight_factors[idx].text =
          'Türkiye 暂列 D 组第 3（0 分 · 已赛 1 场） vs Paraguay 第 4（0 分 · 已赛 1 场）；'
          + '美国 6 分已出线 · 澳大利亚 3 分；本场胜者 3 分仍排第 3，末轮须再抢分';
      }
    }
  }

  function upsertGroup(snapshots, group, label, table) {
    const i = snapshots.findIndex(g => g.group === group);
    const snap = { group, label, table };
    if (i >= 0) snapshots[i] = snap;
    else snapshots.push(snap);
    return snapshots;
  }

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'C', 'C组 · 第2轮后', GROUP_C);
  snaps = upsertGroup(snaps, 'D', 'D组 · 第2轮（3场已赛）', GROUP_D);
  RESULTS_DATA.groupSnapshots = snaps;

  const finishedToday = ['m32', 'm30'].filter(id => resolved[id]?.status === 'FT');
  const liveToday = ['m29'].filter(id => resolved[id]?.status === 'LIVE');

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'FIFA 官方赛果 · Day 9 进行中';
  MATCH_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: `🏁 6月20日 · 美2-0澳 · 苏0-1摩${resolved.m29?.status === 'LIVE' ? ' · 巴' + resolved.m29.home_score + '-' + resolved.m29.away_score + '海(进行中)' : ''}`, time: '赛果汇总' },
    { tag: 'OFFICIAL', text: '美国 6 分提前锁定 32 强 · 无 Pulisic 首发仍 2-0 零封', time: 'D组' },
    { tag: 'OFFICIAL', text: '摩洛哥 Saibari 2\' 闪击 · 苏格兰 3 分仍有望出线', time: 'C组' },
    ...(resolved.m29?.status === 'LIVE'
      ? [{ tag: 'LIVE', text: `🔴 进行中 · 巴西 ${resolved.m29.home_score}-${resolved.m29.away_score} 海地 · Cunha 双响`, time: '直播' }]
      : []),
    { tag: 'PREVIEW', text: '⏳ 待赛 · 土耳其 vs 巴拉圭（11:00 北京）· D 组 0 分直接对话', time: '赛程' },
    { tag: 'OFFICIAL', text: 'D组：美国 6 · 澳大利亚 3 · 土耳其/巴拉圭 0', time: '积分榜' },
    { tag: 'OFFICIAL', text: '🏁 昨日：捷1-1南非 · 瑞4-1波 · 加6-0卡 · 墨1-0韩', time: '赛果回顾' },
    ...(MATCH_DATA.breakingNews || []).filter(n => n.tag === 'LINEUP').slice(0, 2),
  ].slice(0, 10);

  const nextNs = MATCH_DATA.todayMatches.find(m => !m.actualResult || m.actualResult.status === 'NS');
  const nextLive = MATCH_DATA.todayMatches.find(m => m.actualResult?.status === 'LIVE');
  const next = nextLive || nextNs || MATCH_DATA.todayMatches.find(m => m.id === 'm31');
  if (next) {
    const p = next.prediction || {};
    MATCH_DATA.nextMatch = {
      group: next.group,
      matchday: next.matchday,
      date: next.date,
      time: next.time,
      time_local: next.time_local,
      timezone: next.timezone,
      time_beijing: next.time_beijing,
      date_beijing: next.date_beijing,
      time_beijing_full: next.time_beijing_full,
      venue: next.venue,
      city: next.city,
      home: { name: next.home.name, iso: next.home.iso, fifaRank: next.home.fifa_rank, rating: next.home.rating },
      away: { name: next.away.name, iso: next.away.iso, fifaRank: next.away.fifa_rank, rating: next.away.rating },
      teaser: next.actualResult?.status === 'LIVE'
        ? `进行中 ${next.actualResult.home_score}-${next.actualResult.away_score}`
        : (next.note?.split(' · ').slice(0, 2).join(' · ') || `${next.home.name} vs ${next.away.name}`),
      home_win: p.home_win,
      draw: p.draw,
      away_win: p.away_win,
      predicted_score: p.score,
      key_player_home: next.home.star?.name || next.home.name,
      key_player_away: next.away.star?.name || next.away.name,
    };
  }

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 9 (m30/m32 完结 · m29 进行中)';

  const day8Results = [
    { id: 'm25', home: 'Czechia', away: 'South Africa', score: '1-1', group: 'A' },
    { id: 'm26', home: 'Switzerland', away: 'Bosnia and Herzegovina', score: '4-1', group: 'B' },
    { id: 'm27', home: 'Canada', away: 'Qatar', score: '6-0', group: 'B' },
    { id: 'm28', home: 'Mexico', away: 'South Korea', score: '1-0', group: 'A' },
  ];
  const todayFt = MATCH_DATA.todayMatches
    .filter(m => m.actualResult?.status === 'FT')
    .map(m => ({
      id: m.id,
      home: m.home.name,
      away: m.away.name,
      score: `${m.actualResult.home_score}-${m.actualResult.away_score}`,
      group: m.group,
    }));

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-06-20',
    fixtures: MATCH_DATA.todayMatches.map(m => ({
      id: m.id,
      home: m.home.name,
      away: m.away.name,
      status: m.actualResult?.status || 'NS',
      home_score: m.actualResult?.home_score ?? null,
      away_score: m.actualResult?.away_score ?? null,
      group: m.group,
    })),
    allResults: [...day8Results, ...todayFt],
    standings: [
      ...(RESULTS_DATA.groupSnapshots || []).filter(g => ['A', 'B'].includes(g.group)),
      { group: 'C', label: 'C组 · 第2轮后', table: GROUP_C },
      { group: 'D', label: 'D组 · 第2轮（3场已赛）', table: GROUP_D },
    ],
    injuries: { note: 'Gilmour/Aguerd/Abde/Wesley 整届 OUT · Neymar 替补 · Enciso 已复出' },
    yesterdayResults: day8Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 9 (results synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
  );
  fs.writeFileSync(
    RESULTS_PATH,
    `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
  );
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/sync-day9-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );

  console.log('✅ Day 9 results synced');
  for (const id of ['m32', 'm30', 'm29', 'm31']) {
    const r = resolved[id];
    const m = MATCH_DATA.todayMatches.find(x => x.id === id);
    if (r?.home_score != null) {
      console.log(`   ${id} ${r.status} ${r.home_score}-${r.away_score}${id === 'm31' ? ' (未赛)' : ''}`);
    } else if (m) {
      console.log(`   ${id} NS`);
    }
  }
  console.log('✅ Archived FT:', archiveIds.join(', ') || '(none new)');
  console.log('✅ D组积分榜:', GROUP_D.map(t => `${t.team} ${t.pts}分`).join(' · '));
  console.log('   → 土耳其仍为 0 分第 3；美国 6 分已出线');
}

main().catch(e => { console.error(e); process.exit(1); });
