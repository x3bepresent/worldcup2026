/**
 * Day 11 赛果同步 — m38/m39/m37/m40（2026-06-22 北京时间 · 4场）
 * Run: node scripts/sync-day11-results.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { archiveFinishedMatch } = require('./archive-match.js');
const { enrichArchivedFull } = require('./archived-enrich.js');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const HANDICAP = { ...require('./handicap-data-day11') };

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

function isHalftime(j) {
  return j.MatchStatus === 3 && (j.Period === 4 || j.Period === 3);
}

function isLive(j) {
  if (isFinished(j) || isHalftime(j)) return false;
  const hs = j.HomeTeam?.Score;
  return hs != null && j.MatchStatus !== 1;
}

const FIFA_IDS = {
  m38: '400021483',
  m39: '400021477',
  m37: '400021487',
  m40: '400021480',
};

const MANUAL = {
  m38: {
    home_score: 4,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Lamine Yamal 10'; Mikel Oyarzabal 21', 24'; Hassan Altambakti 49' (og)",
    highlights:
      'Mercedes-Benz Stadium 亚特兰大 · Yamal 10\' 破局 · Oyarzabal 梅开二度 · 沙特乌龙 · Claus 主裁 · 西班牙 4 分领跑 H 组',
    ht_score: '3-0',
    first_goal_min: 10,
    xg_report: 'FIFA M38 · Yamal 10\' 首开 · Oyarzabal 21\'/24\' 连入两球 · 下半场 Altambakti 乌龙',
    fifa_id: '400021483',
  },
  m39: {
    home_score: 0,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: '—',
    highlights:
      'SoFi Stadium 洛杉矶 · 互交白卷 · Herrera 主裁 · G 组比伊各得 1 分 · 四队仍胶着',
    ht_score: '0-0',
    first_goal_min: null,
    xg_report: 'FIFA M39 · 全场 0-0 · Ezatolahi 屏障 + Casteels 零封',
    fifa_id: '400021477',
  },
  m37: {
    home_score: 2,
    away_score: 2,
    status: 'FT',
    label: '全场结束',
    scorers: "Kevin Pina 21'; Maxi Araujo 44'; Agustin Canobbio 45+6'; Helio Varela 61'",
    highlights:
      'Hard Rock Stadium 迈阿密 · 2-2 · Pina 21\' 佛得角领先 · Araujo/Canobbio 半场前逆转 · Varela 61\' 再扳平 · 弱队开花路径兑现',
    ht_score: '2-1',
    first_goal_min: 21,
    xg_report: 'FIFA M37 · 半场 2-1 · 61\' Varela 扳平 · 全场 2-2 平局',
    fifa_id: '400021487',
  },
  m40: {
    home_score: 1,
    away_score: 3,
    status: 'FT',
    label: '全场结束',
    scorers: "Finn Surman 15'; Mostafa Zico 58'; Mohamed Salah 67'; Trezeguet 82'",
    highlights:
      'BC Place 温哥华 · 半场 1-0 新西兰 · Salah 67\' 反超 · 埃及 3 分领跑 G 组 · Vitória 客场穿盘',
    ht_score: '1-0',
    first_goal_min: 15,
    xg_report: 'FIFA M40 · Surman 15\' 半场领先 · 下半场 Zico/Salah/Trezeguet 三球逆转',
    fifa_id: '400021480',
  },
};

const REVIEW = {
  m38:
    '【赛后复盘】赛前主胜 76%/首推 2-0；实际 4-0。Yamal 10\' 破局 · Oyarzabal 21\'/24\' 梅开 · Altambakti 49\' 乌龙。方向：主胜命中；比分低估（4-0 超 Top7）；总球 4（大 2.75 穿盘）。净胜：-1/1.5 全赢。路径：0-0 后早破局→热门爆发。',
  m39:
    '【赛后复盘】赛前主胜 52%/首推 2-1；实际 0-0。Ezatolahi 屏障 + Casteels 零封。方向：平局（23%）命中；总球 0（小 2.75 穿盘）。净胜：比利时 -1/1.5 全输。路径：升盘后仍无法穿盘，与「大众心理预期偏高」一致。',
  m37:
    '【赛后复盘】赛前主胜 50%/首推 1-0；实际 2-2。Pina 21\' → Araujo 44\'/Canobbio 45+6\' → Varela 61\' 扳平。方向：平局（31%）命中；比分 2-2 在 Top5 内；总球 4（大 2.25 穿）。净胜：乌拉圭 -1 走/输。路径：弱队开花→对攻兑现，Bielsa 破密但未收 3 分。',
  m40:
    '【赛后复盘】赛前势均力敌/首推 1-1；实际 1-3 埃及胜。Surman 15\' 半场 1-0 → Zico 58\'/Salah 67\'/Trezeguet 82\' 逆转。方向：客胜（35%）命中；比分未中；总球 4。路径：Wood 先进球→Salah 单核下半场爆发，埃及 4 分领跑 G 组。',
};

/** G 组 · 第 2 轮完结 */
const GROUP_G_FINAL = [
  { team: 'Egypt', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 3 },
  { team: 'Belgium', pts: 2, p: 2, w: 0, d: 2, l: 0, gf: 1, ga: 1 },
  { team: 'Iran', pts: 2, p: 2, w: 0, d: 2, l: 0, gf: 2, ga: 2 },
  { team: 'New Zealand', pts: 1, p: 2, w: 0, d: 0, l: 2, gf: 3, ga: 5 },
];

/** H 组 · 第 2 轮完结 */
const GROUP_H_FINAL = [
  { team: 'Spain', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 0 },
  { team: 'Uruguay', pts: 2, p: 2, w: 0, d: 2, l: 0, gf: 3, ga: 2 },
  { team: 'Cape Verde', pts: 2, p: 2, w: 0, d: 2, l: 0, gf: 2, ga: 2 },
  { team: 'Saudi Arabia', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 5 },
];

function rankInGroup(team, table) {
  return table.findIndex(r => r.team === team) + 1;
}

function patchGroupContext(gc, group, table, homeTeam, awayTeam, extraNotes) {
  if (!gc) return gc;
  const hr = rankInGroup(homeTeam, table);
  const ar = rankInGroup(awayTeam, table);
  gc.standings = table.map(r => ({
    team: r.team, pts: r.pts, p: r.p, w: r.w, d: r.d, l: r.l, gf: r.gf, ga: r.ga,
  }));
  gc.label = `${group}组 · 第2轮进行中`;
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
    updated: TS,
    ...(r.elapsed ? { elapsed: r.elapsed } : {}),
    ...(r.xg_report ? { xg_report: r.xg_report } : {}),
  };

  m.note = (m.note || '')
    .replace(/ · 待赛.*$/, '')
    .replace(/ · 已结束.*$/, '')
    .replace(/ · 进行中.*$/, '')
    .replace(/ · 中场.*$/, '')
    .replace(/ · FIFA 官方.*$/, '')
    + (r.status === 'FT'
      ? ` · 已结束 ${r.home_score}-${r.away_score}`
      : r.status === 'HT'
        ? ` · 中场 ${r.home_score}-${r.away_score}`
        : ` · 进行中 ${r.home_score}-${r.away_score}${r.elapsed ? ' ' + r.elapsed : ''}`);

  if (m.prediction && REVIEW[reviewKey || id]) {
    m.prediction.key_factor = REVIEW[reviewKey || id];
  }

  if (r.status === 'FT') {
    m.home.form = pushForm(m.home.form, r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D');
    m.away.form = pushForm(m.away.form, r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D');
  }

  if (id === 'm38' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Lamine Yamal',
      pos: 'RW',
      club: 'Barcelona',
      stats: '10\' 首开',
      rating: 9.2,
      desc: '0-0 后破局 · 西班牙 4-0 领跑 H 组',
    };
    if (m.home.stars[1] == null) m.home.stars.push({});
    m.home.stars[1] = {
      name: 'Mikel Oyarzabal',
      pos: 'ST',
      club: 'Real Sociedad',
      stats: '21\'+24\' 双响',
      rating: 9.0,
      desc: '梅开二度 · 终结效率问题一扫而空',
    };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }

  if (id === 'm37' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Agustin Canobbio',
      pos: 'RW',
      club: 'Fluminense',
      stats: '45+6\' 破门',
      rating: 7.8,
      desc: '半场反超后未能守住 · 2-2 平局',
    };
    if (m.home.stars[1] == null) m.home.stars.push({});
    m.home.stars[1] = {
      name: 'Maxi Araujo',
      pos: 'LW',
      club: 'Braga',
      stats: '44\' 破门',
      rating: 7.6,
      desc: '半场连入两球之一',
    };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm37' && m.away?.stars?.[0]) {
    m.away.stars[0] = {
      name: 'Helio Varela',
      pos: 'FW',
      club: 'Casa Pia',
      stats: '61\' 扳平',
      rating: 8.5,
      desc: '61\' 2-2 · 弱队开花 MVP',
    };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }

  if (id === 'm40' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Finn Surman',
      pos: 'CM',
      club: 'Southampton',
      stats: '15\' 首开',
      rating: 7.4,
      desc: '半场 1-0 领先 · 未能守住',
    };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm40' && m.away?.stars?.[0]) {
    m.away.stars[0] = {
      name: 'Mohamed Salah',
      pos: 'RW',
      club: 'Liverpool',
      stats: '67\' 反超',
      rating: 9.0,
      desc: '下半场逆转 · 埃及 4 分领跑 G 组',
    };
    if (m.away.stars[1] == null) m.away.stars.push({});
    m.away.stars[1] = {
      name: 'Trezeguet',
      pos: 'LW',
      club: 'Al-Ahly',
      stats: '82\' 锁定',
      rating: 8.2,
      desc: '补时阶段第三球',
    };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }

  if (m.group === 'G' && (id === 'm39' || id === 'm40')) {
    m.group_context = patchGroupContext(
      m.group_context, 'G', GROUP_G_FINAL, m.home.name, m.away.name,
      ['埃及 4 分领跑 · 比/伊各 2 分 · 新西兰 1 分 · 末轮须抢分'],
    );
  }
  if (m.group === 'H') {
    const notes = id === 'm38'
      ? ['西班牙 4 分领跑 · 末轮对佛得角', '沙特 1 分 · 乌拉圭/佛得角各 2 分']
      : ['2-2 平局 · 西班牙 4 分 · 乌/佛各 2 分 · H 组胶着'];
    m.group_context = patchGroupContext(
      m.group_context, 'H', GROUP_H_FINAL, m.home.name, m.away.name, notes,
    );
  }

  return JSON.parse(JSON.stringify(m));
}

function upsertGroup(snapshots, group, label, table) {
  const i = snapshots.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snapshots[i] = snap;
  else snapshots.push(snap);
  return snapshots;
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
      const ht = isHalftime(j);
      const live = isLive(j);

      let status = resolved[mid]?.status || 'NS';
      let label = resolved[mid]?.label || '未开赛';
      if (ft) { status = 'FT'; label = '全场结束'; }
      else if (ht) { status = 'HT'; label = '中场'; }
      else if (live || (hs != null && mid === 'm37')) {
        status = 'LIVE';
        label = '进行中';
      }

      const elapsed = j.MatchTime ? `${j.MatchTime}'` : resolved[mid]?.elapsed;

      resolved[mid] = {
        ...resolved[mid],
        home_score: hs ?? resolved[mid]?.home_score,
        away_score: as ?? resolved[mid]?.away_score,
        scorers: scorers || resolved[mid]?.scorers,
        status,
        label,
        elapsed,
        fifa_id: fid,
      };
    } catch (e) {
      console.warn('⚠ FIFA fetch', mid, e.message);
    }
  }

  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  const SYNC_IDS = ['m38', 'm39', 'm37', 'm40'];
  const archiveIds = [];

  for (const id of SYNC_IDS) {
    const m = MATCH_DATA.todayMatches.find(x => x.id === id);
    const r = resolved[id];
    if (!m || !r || r.status === 'NS') continue;

    const patched = applyResult(m, r, id);
    Object.assign(m, patched);

    if (r.status === 'FT') {
      const enriched = enrichArchivedFull(patched, HANDICAP);
      const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
      const i = (RESULTS_DATA.finishedMatches || []).findIndex(x => x.id === id);
      if (i < 0) {
        RESULTS_DATA.finishedMatches.push(archived);
        archiveIds.push(id);
      } else {
        RESULTS_DATA.finishedMatches[i] = archived;
      }
    }
  }

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'G', 'G组 · 第2轮后', GROUP_G_FINAL);
  snaps = upsertGroup(snaps, 'H', 'H组 · 第2轮后', GROUP_H_FINAL);
  RESULTS_DATA.groupSnapshots = snaps;

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'FIFA 官方赛果 · Day 11 进行中';

  const nextLive = MATCH_DATA.todayMatches.find(m => ['HT', 'LIVE'].includes(m.actualResult?.status));
  const nextNs = MATCH_DATA.todayMatches.find(m => !m.actualResult || m.actualResult.status === 'NS');
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
      teaser: next.actualResult?.status === 'HT'
        ? `中场 ${next.actualResult.home_score}-${next.actualResult.away_score}`
        : next.actualResult?.status === 'LIVE'
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

  MATCH_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 新 1-3 埃 · 半场1-0 · Salah 67\' 逆转 · 埃及 4 分领跑 G 组', time: 'G组' },
    { tag: 'OFFICIAL', text: '🏁 乌 2-2 佛 · Varela 61\' 扳平 · 西班牙 4 分领跑 H 组', time: 'H组' },
    { tag: 'OFFICIAL', text: '🏁 西 4-0 沙 · 比 0-0 伊 · Day 11 四场完结', time: '6月22日' },
    { tag: 'PREVIEW', text: '📅 6月24日 · 葡-乌(01:00) · 英-加(04:00) · 巴-克(07:00) · 哥-刚(10:00)', time: 'K/L组' },
    ...(MATCH_DATA.breakingNews || []).filter(n => !/乌 2-|西 4-0|比 0-0|新 1-3|Day 11/.test(n.text || '')).slice(0, 4),
  ].slice(0, 12);

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 11 全部完结 (m37–m40)';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 11：西4-0沙 · 比0-0伊 · 乌2-2佛 · 新1-3埃', time: '6月22日' },
    { tag: 'OFFICIAL', text: 'G组：埃及 4 · 比/伊 2 · 新 1 · H组：西 4 · 乌/佛 2 · 沙 1', time: '积分榜' },
    { tag: 'PREVIEW', text: '📅 6月24日 K/L组第2轮 · 葡萄牙 · 英格兰 · 巴拿马 · 哥伦比亚', time: '今日赛程' },
    ...(RESULTS_DATA.breakingNews || []).filter(n => !/Day 11：|6月22日.*西4/.test(n.text || '')).slice(0, 6),
  ].slice(0, 12);

  const day10Results = [
    { id: 'm35', home: 'Netherlands', away: 'Sweden', score: '5-1', group: 'F' },
    { id: 'm33', home: 'Germany', away: "Côte d'Ivoire", score: '2-1', group: 'E' },
    { id: 'm34', home: 'Ecuador', away: 'Curaçao', score: '0-0', group: 'E' },
    { id: 'm36', home: 'Tunisia', away: 'Japan', score: '0-4', group: 'F' },
  ];
  const day11Results = [
    { id: 'm38', home: 'Spain', away: 'Saudi Arabia', score: '4-0', group: 'H' },
    { id: 'm39', home: 'Belgium', away: 'Iran', score: '0-0', group: 'G' },
    { id: 'm37', home: 'Uruguay', away: 'Cape Verde', score: '2-2', group: 'H' },
    { id: 'm40', home: 'New Zealand', away: 'Egypt', score: '1-3', group: 'G' },
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
    todayDate: '2026-06-22',
    fixtures: MATCH_DATA.todayMatches.map(m => ({
      id: m.id,
      home: m.home.name,
      away: m.away.name,
      status: m.actualResult?.status || 'NS',
      home_score: m.actualResult?.home_score ?? null,
      away_score: m.actualResult?.away_score ?? null,
      ht_score: m.actualResult?.ht_score ?? null,
      group: m.group,
    })),
    allResults: [...day10Results, ...day11Results],
    standings: [
      ...(RESULTS_DATA.groupSnapshots || []).filter(g => ['E', 'F'].includes(g.group)),
      { group: 'G', label: 'G组 · 第2轮后', table: GROUP_G_FINAL },
      { group: 'H', label: 'H组 · 第2轮后', table: GROUP_H_FINAL },
    ],
    injuries: { note: 'Day 11 完结 · 埃及 4 分 · 西班牙 4 分 · 乌/佛 2-2' },
    yesterdayResults: day10Results.map(r => ({ id: r.id, score: r.score })),
  };

  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 11 (results synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
  );
  fs.writeFileSync(
    RESULTS_PATH,
    `// 过往赛果 — 精简归档\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`,
  );
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/sync-day11-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );

  console.log('✅ Day 11 results synced');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r?.home_score != null) {
      console.log(`   ${id} ${r.status} ${r.home_score}-${r.away_score}`);
    }
  }
  console.log('✅ Archived FT:', archiveIds.join(', ') || '(none new)');
  console.log('✅ G组:', GROUP_G_FINAL.map(t => `${t.team} ${t.pts}分`).join(' · '));
  console.log('✅ H组:', GROUP_H_FINAL.map(t => `${t.team} ${t.pts}分`).join(' · '));
  try {
    rebuildScheduleScores();
  } catch (e) {
    console.warn('⚠ schedule-scores rebuild failed:', e.message);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
