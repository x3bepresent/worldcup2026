/**
 * Day 10 赛果同步 — m33–m36（2026-06-21 北京时间 · 4场）
 * Run: node scripts/sync-day10-results.js && node scripts/apply-prediction-signals.js
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
  m35: '400021472',
  // m33: '400021469',
  // m34: '400021465',
  // m36: '400021475',
};

/** 手工补充（FIFA API 无半场比分 / 助攻时） */
const MANUAL = {
  m35: {
    home_score: 5,
    away_score: 1,
    status: 'FT',
    label: '全场结束',
    scorers: "Brian Brobbey 5', 17'; Cody Gakpo 47', 54'; Anthony Elanga 59'; Calvin Summerville 89'",
    highlights:
      'NRG Stadium 休斯顿 · Brobbey/Gakpo 各梅开二度 · Elanga 59\' 瑞典破门 · Oliver 主裁 · 荷兰 4 分领跑 F 组',
    ht_score: '2-0',
    first_goal_min: 5,
    xg_report: 'FIFA M35 · Brobbey 5\'/17\' 上半场双响 · Gakpo 47\'/54\' 下半场双响',
    fifa_id: '400021472',
  },
};

const REVIEW = {
  m35:
    '【赛后复盘】赛前氛围偏闷（约 1.9 球）/ 最可能 1-1；路径模块「预防大比分」+ 弱队开花。实际 5-1：Brobbey 5\'/17\' + Gakpo 47\'/54\' 双梅开，Elanga 59\' 弱队破门。方向：主胜命中（55%）；比分远超泊松分布；总球 6（大 2.75，穿 -0.75）。路径：弱队进球触发预防留意→热门爆发（荷兰效率爆表）；氛围模块显著低估。',
};

/** F 组：第 2 轮部分（荷瑞已赛 · 突日待赛） */
const GROUP_F = [
  { team: 'Netherlands', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 7, ga: 3 },
  { team: 'Sweden', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 6, ga: 6 },
  { team: 'Japan', pts: 1, p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2 },
  { team: 'Tunisia', pts: 0, p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 5 },
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
  gc.label = `${group}组 · 第 2 轮（部分）`;
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
    ...(r.live_stats ? { live_stats: r.live_stats } : {}),
    ...(r.red_card_context ? { red_card_context: r.red_card_context } : {}),
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

  if (id === 'm35' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Cody Gakpo',
      pos: 'LW',
      club: 'Liverpool',
      stats: '47\'+54\' 双响',
      rating: 9.2,
      desc: '下半场双梅开 · 荷兰 5-1 领跑 F 组',
    };
    if (m.home.stars[1] == null) m.home.stars.push({});
    m.home.stars[1] = {
      name: 'Brian Brobbey',
      pos: 'ST',
      club: 'Ajax',
      stats: '5\'+17\' 双响',
      rating: 8.8,
      desc: '上半场双响破局 · 替 Depay 首发建功',
    };
    if (m.home.star) {
      m.home.star = { ...m.home.stars[0] };
    }
  }
  if (id === 'm35' && m.away?.stars?.[0]) {
    m.away.stars[0] = {
      name: 'Anthony Elanga',
      pos: 'RW',
      club: 'Newcastle',
      stats: '59\' 破门',
      rating: 7.2,
      desc: '弱队唯一进球 · 预防路径触发',
    };
  }

  if (m.group === 'F') {
    const notes = [
      '荷兰 4 分领跑 · 瑞典 3 分 · 日本/突尼斯各赛 1 场',
      '末轮：突尼斯 vs 日本（m36）决定 F 组次席争夺',
    ];
    m.group_context = patchGroupContext(m.group_context, m.group, GROUP_F, m.home.name, m.away.name, notes);
  }

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
      resolved[mid] = {
        ...resolved[mid],
        home_score: hs ?? resolved[mid]?.home_score,
        away_score: as ?? resolved[mid]?.away_score,
        scorers: scorers || resolved[mid]?.scorers,
        status: ft ? 'FT' : (hs != null ? 'LIVE' : resolved[mid]?.status || 'NS'),
        label: ft ? '全场结束' : (hs != null ? '进行中' : resolved[mid]?.label || '未开赛'),
        fifa_id: fid,
      };
    } catch (e) {
      console.warn('⚠ FIFA fetch', mid, e.message);
    }
  }

  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  const SYNC_IDS = ['m35'];
  const archiveIds = [];
  for (const id of SYNC_IDS) {
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

  function upsertGroup(snapshots, group, label, table) {
    const i = snapshots.findIndex(g => g.group === group);
    const snap = { group, label, table };
    if (i >= 0) snapshots[i] = snap;
    else snapshots.push(snap);
    return snapshots;
  }

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'F', 'F组 · 第2轮（部分）', GROUP_F);
  RESULTS_DATA.groupSnapshots = snaps;

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'FIFA 官方赛果 · Day 10 部分同步';
  MATCH_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 荷 5-1 瑞 · Brobbey/Gakpo 各双响 · Elanga 59\' · 荷兰 4 分领跑 F 组', time: 'F组' },
    { tag: 'OFFICIAL', text: 'F组：荷兰 4 · 瑞典 3 · 日本 1 · 突尼斯 0（突日待赛）', time: '积分榜' },
    ...(MATCH_DATA.breakingNews || []).filter(n => !n.text?.includes('荷 5-1')).slice(0, 8),
  ].slice(0, 10);

  const nextNs = MATCH_DATA.todayMatches.find(m => !m.actualResult || m.actualResult.status === 'NS');
  const nextLive = MATCH_DATA.todayMatches.find(m => m.actualResult?.status === 'LIVE');
  const next = nextLive || nextNs || MATCH_DATA.todayMatches[0];
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
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 10 部分 (m35)';

  const day9Results = [
    { id: 'm32', home: 'USA', away: 'Australia', score: '2-0', group: 'D' },
    { id: 'm30', home: 'Scotland', away: 'Morocco', score: '0-1', group: 'C' },
    { id: 'm29', home: 'Brazil', away: 'Haiti', score: '3-0', group: 'C' },
    { id: 'm31', home: 'Türkiye', away: 'Paraguay', score: '0-1', group: 'D' },
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
    todayDate: '2026-06-21',
    fixtures: MATCH_DATA.todayMatches.map(m => ({
      id: m.id,
      home: m.home.name,
      away: m.away.name,
      status: m.actualResult?.status || 'NS',
      home_score: m.actualResult?.home_score ?? null,
      away_score: m.actualResult?.away_score ?? null,
      group: m.group,
    })),
    allResults: [...day9Results, ...todayFt],
    standings: [
      ...(RESULTS_DATA.groupSnapshots || []).filter(g => ['C', 'D'].includes(g.group)),
      { group: 'F', label: 'F组 · 第2轮（部分）', table: GROUP_F },
    ],
    injuries: { note: 'Kubo OUT m36 · Timber 兄弟 OUT m35 · Wahi 归队 m33' },
    yesterdayResults: day9Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 10 (results synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
  );
  fs.writeFileSync(
    RESULTS_PATH,
    `// 过往赛果 — 手动/自动同步\n// score_dist 已废弃 — 页面按 xG 泊松实时计算\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
  );
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/sync-day10-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );

  console.log('✅ Day 10 results synced (partial)');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r?.home_score != null) {
      console.log(`   ${id} ${r.status} ${r.home_score}-${r.away_score}`);
    }
  }
  console.log('✅ Archived FT:', archiveIds.join(', ') || '(none new)');
  console.log('✅ F组积分榜:', GROUP_F.map(t => `${t.team} ${t.pts}分`).join(' · '));
}

main().catch(e => { console.error(e); process.exit(1); });
