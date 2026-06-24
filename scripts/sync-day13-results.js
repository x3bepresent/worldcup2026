/**
 * Day 13 赛果同步 — m47/m45/m46/m48（2026-06-24 北京时间 · K/L 组第2轮）
 * Run: node scripts/sync-day13-results.js && node scripts/roll-day14.js && node scripts/enrich-day14.js && node scripts/apply-prediction-signals.js
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

const HANDICAP = { ...require('./handicap-data-day13') };

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
  m47: '400021503',
  m45: '400021506',
  m46: '400021511',
  m48: '400021501',
};

const MANUAL = {
  m47: {
    home_score: 5, away_score: 0, status: 'FT', label: '全场结束',
    scorers: "Cristiano Ronaldo 6', 39'; Nuno Mendes 17'; Abduvohid Nematov 60' (og); Rafael Leão 87'",
    highlights: 'NRG 休斯顿 · C罗 6\'/39\' 双响 · Mendes 17\' · Leão 87\' · 葡萄牙 4 分 K 组',
    ht_score: '3-0', first_goal_min: 6, fifa_id: '400021503',
  },
  m45: {
    home_score: 0, away_score: 0, status: 'FT', label: '全场结束',
    scorers: '',
    highlights: 'Gillette 波士顿 · L 组榜首对话闷平 · 英格兰/加纳各 4 分',
    ht_score: '0-0', first_goal_min: null, fifa_id: '400021506',
  },
  m46: {
    home_score: 0, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Ante Budimir 54'",
    highlights: 'BMO 多伦多 · Budimir 54\' 破门 · 克罗地亚 3 分 · 巴拿马 0 分',
    ht_score: '0-0', first_goal_min: 54, fifa_id: '400021511',
  },
  m48: {
    home_score: 1, away_score: 0, status: 'FT', label: '全场结束',
    scorers: "Daniel Muñoz 76'",
    highlights: 'Estadio Akron · Muñoz 76\' · 哥伦比亚 6 分 K 组领跑',
    ht_score: '0-0', first_goal_min: 76, fifa_id: '400021501',
  },
};

const REVIEW = {
  m47: '【赛后复盘】赛前主胜 62%/首推 2-0；实际 5-0 穿盘。C罗 6\'/39\' 双响 · Mendes 17\' · Nematov 60\'(og) · Leão 87\'。方向：主胜命中；比分超预期；总球 5（大 2.75 穿）。路径：破局兑现→C罗 状态回暖。',
  m45: '【赛后复盘】赛前主胜 56%/首推 2-1；实际 0-0。榜首对话闷平 · Kudus/Bellingham 均未破局。方向：平局（21%）命中；比分未中；总球 0（小 2.75 赢）。路径：铁局→双方效率不足。',
  m46: '【赛后复盘】赛前客胜 48%/首推 0-1；实际 0-1 克罗地亚胜。Budimir 54\' 破门 · Modrić 控场穿盘。方向：客胜命中；比分命中；总球 1（小 2.25 赢）。路径：热门穿盘兑现。',
  m48: '【赛后复盘】赛前主胜 68%/首推 2-0；实际 1-0。Muñoz 76\' 晚破门 · Wissa 反击未果。方向：主胜命中；比分 1-0 偏小；总球 1（小 2.5 赢）。路径：领跑巩固→小比分收场。',
};

const GROUP_K_R2 = [
  { team: 'Colombia', pts: 6, p: 2, w: 2, d: 0, l: 0, gf: 4, ga: 1 },
  { team: 'Portugal', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 6, ga: 1 },
  { team: 'Congo DR', pts: 1, p: 2, w: 0, d: 1, l: 1, gf: 1, ga: 2 },
  { team: 'Uzbekistan', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 1, ga: 8 },
];

const GROUP_L_R2 = [
  { team: 'England', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 4, ga: 2 },
  { team: 'Ghana', pts: 4, p: 2, w: 1, d: 1, l: 0, gf: 1, ga: 0 },
  { team: 'Croatia', pts: 3, p: 2, w: 1, d: 0, l: 1, gf: 1, ga: 4 },
  { team: 'Panama', pts: 0, p: 2, w: 0, d: 0, l: 2, gf: 0, ga: 2 },
];

function upsertGroup(snaps, group, label, table) {
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  return snaps;
}

function patchStars(m, id) {
  if (id === 'm47' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al-Nassr',
      stats: "6', 39' 双响", rating: 9.2,
      desc: '5-0 穿盘 · 揭幕战 0 射正后强势反弹',
    };
    if (!m.home.stars[1]) m.home.stars.push({});
    m.home.stars[1] = {
      name: 'Rafael Leão', pos: 'LW', club: 'AC Milan',
      stats: "87' 破门", rating: 8.5,
      desc: '替补/后段锁定比分',
    };
    if (!m.home.stars[2]) m.home.stars.push({});
    m.home.stars[2] = {
      name: 'Nuno Mendes', pos: 'LB', club: 'PSG',
      stats: "17' 破门", rating: 8.3,
      desc: '左翼插上早段破局',
    };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm46' && m.away?.stars?.[0]) {
    m.away.stars[0] = {
      name: 'Ante Budimir', pos: 'ST', club: 'Osasuna',
      stats: "54' 制胜球", rating: 8.0,
      desc: '0-1 穿盘 · Modrić 控场下中锋终结',
    };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }
  if (id === 'm48' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Luis Díaz', pos: 'LW', club: 'Liverpool',
      stats: 'K 组 6 分领跑', rating: 8.6,
      desc: '全场压制 · 队友 Muñoz 76\' 破门',
    };
    if (!m.home.stars[1]) m.home.stars.push({});
    m.home.stars[1] = {
      name: 'Daniel Muñoz', pos: 'RB', club: 'Crystal Palace',
      stats: "76' 制胜球", rating: 8.2,
      desc: '后段插上锁定 1-0',
    };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
}

function applyResult(m, r, reviewKey) {
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
  };
  if (REVIEW[reviewKey] && m.prediction) {
    m.prediction.key_factor = REVIEW[reviewKey];
    const idx = m.prediction.insight_factors?.findIndex(f => f.label === '战术与阵容');
    if (idx >= 0) m.prediction.insight_factors[idx].text = REVIEW[reviewKey];
  }
  if (r.status === 'FT') {
    m.note = (m.note || '').replace(/待赛|预览/, '已结束').replace(/ · 已结束.*$/, '') + ` · 已结束 ${r.home_score}-${r.away_score}`;
    if (m.home?.form) {
      const hr = r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D';
      m.home.form = pushForm(m.home.form, hr);
    }
    if (m.away?.form) {
      const ar = r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D';
      m.away.form = pushForm(m.away.form, ar);
    }
  }
  patchStars(m, reviewKey);
  return m;
}

async function main() {
  const resolved = { ...MANUAL };

  for (const [mid, fid] of Object.entries(FIFA_IDS)) {
    try {
      const j = await fetchFifa(fid);
      const hs = j.HomeTeam?.Score ?? resolved[mid]?.home_score;
      const as = j.AwayTeam?.Score ?? resolved[mid]?.away_score;
      const scorers = formatScorers(j) || resolved[mid]?.scorers;
      if (isFinished(j)) {
        resolved[mid] = {
          ...resolved[mid],
          home_score: hs,
          away_score: as,
          scorers,
          status: 'FT',
          label: '全场结束',
          elapsed: j.MatchTime ? `${j.MatchTime}'` : undefined,
          fifa_id: fid,
        };
      }
    } catch (e) {
      console.warn('⚠ FIFA fetch', mid, e.message);
    }
  }

  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const SYNC_IDS = ['m47', 'm45', 'm46', 'm48'];
  const archiveIds = [];

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches.find(x => x.id === id);
    const fromResults = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    if (!m && fromResults) m = JSON.parse(JSON.stringify(fromResults));
    const r = resolved[id];
    if (!m || !r || r.status !== 'FT') continue;

    const patched = applyResult(m, r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex(x => x.id === id);
    if (i < 0) {
      RESULTS_DATA.finishedMatches.push(archived);
      archiveIds.push(id);
    } else {
      RESULTS_DATA.finishedMatches[i] = archived;
      archiveIds.push(id);
    }
  }

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'K', 'K组 · 第2轮后', GROUP_K_R2);
  snaps = upsertGroup(snaps, 'L', 'L组 · 第2轮后', GROUP_L_R2);
  RESULTS_DATA.groupSnapshots = snaps;
  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 13 完结';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 13：葡5-0乌 · 英0-0加 · 巴0-1克 · 哥1-0刚', time: '6月24日' },
    { tag: 'OFFICIAL', text: 'K组：哥伦比亚 6 分 · 葡萄牙 4 分 · L组：英/加各 4 分', time: '积分榜' },
    { tag: 'PREVIEW', text: '📅 6月25日 B/C组末轮 · 瑞-加(03:00) · 波黑-卡(03:00) · 苏-巴(06:00) · 摩-海(06:00)', time: '今日赛程' },
  ].slice(0, 12);

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'FIFA 官方赛果 · Day 13 完结 · Day 14 预览';

  const day13Results = SYNC_IDS.map(id => {
    const r = resolved[id];
    const m = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    return m && r ? {
      id,
      home: m.home?.name || m.home,
      away: m.away?.name || m.away,
      score: `${r.home_score}-${r.away_score}`,
      group: m.group,
    } : null;
  }).filter(Boolean);

  const day12Results = [
    { id: 'm43', home: 'Argentina', away: 'Austria', score: '2-0', group: 'J' },
    { id: 'm42', home: 'France', away: 'Iraq', score: '3-0', group: 'I' },
    { id: 'm41', home: 'Norway', away: 'Senegal', score: '3-2', group: 'I' },
    { id: 'm44', home: 'Jordan', away: 'Algeria', score: '1-2', group: 'J' },
  ];

  const todayIsDay14 = false;

  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.todayDate = '2026-06-25';
  LIVE_DATA.allResults = day13Results;
  LIVE_DATA.yesterdayResults = day13Results.map(r => ({ id: r.id, score: r.score }));
  LIVE_DATA.injuries = { note: 'Day 13 完结 · C罗 5-0 双响 · 英加 0-0 · 哥伦比亚 6 分' };
  LIVE_DATA.standings = snaps.filter(g => ['K', 'L', 'B', 'C', 'I', 'J'].includes(g.group));

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  if (!todayIsDay14) {
    fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 13 (results synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  }
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/sync-day13-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 13 synced');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r) console.log(`   ${id} FT ${r.home_score}-${r.away_score}`);
  }
  console.log('✅ Archived:', archiveIds.join(', ') || '(updated)');
  try { rebuildScheduleScores(); } catch (e) { console.warn('⚠ schedule-scores:', e.message); }
}

main().catch(e => { console.error(e); process.exit(1); });
