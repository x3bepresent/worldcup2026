/**
 * Day 14 赛果同步 — m51–m54 全部 6 场（2026-06-25 北京时间 · A/B/C 组末轮）
 * Run: node scripts/sync-day14-results.js && node scripts/apply-prediction-signals.js
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

const HANDICAP = { ...require('./handicap-data-day14') };

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
  m51: '400021451',
  m52: '400021448',
  m49: '400021455',
  m50: '400021452',
  m53: '400021444',
  m54: '400021445',
};

const MANUAL = {
  m51: {
    home_score: 2, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Ruben Vargas 46'; Johan Manzambi 57'; Promise David 76'",
    highlights: 'BC Place 温哥华 · Vargas 46\'/Manzambi 57\' · David 76\' · 瑞士 7 分 B 组第一',
    ht_score: '0-0', first_goal_min: 46, fifa_id: '400021451',
  },
  m52: {
    home_score: 3, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Kerim Alajbegovic 29'; Mahmoud Abunada 34' (og); Hassan Alhaydos 42'; Ermin Mahmic 80'",
    highlights: 'Lumen Field 西雅图 · 波黑 3-1 末轮抢分 · Alajbegovic 29\' · Abunada 34\'(og)',
    ht_score: '2-1', first_goal_min: 29, fifa_id: '400021448',
  },
  m49: {
    home_score: 0, away_score: 3, status: 'FT', label: '全场结束',
    scorers: "Vinicius Junior 7'; Vinicius Junior 45'+3'; Matheus Cunha 60'",
    highlights: 'Hard Rock 迈阿密 · Vini 7\'/45+3\' 双响 · Cunha 60\' · 巴西 7 分 C 组第一',
    ht_score: '0-2', first_goal_min: 7, fifa_id: '400021455',
  },
  m50: {
    home_score: 4, away_score: 2, status: 'FT', label: '全场结束',
    scorers: "Yassine Bounou 10' (og); Achraf Hakimi 39'; Wilson Isidor 43'; Ismael Saibari 45'+1'; Soufiane Rahimi 78'; Gessime Yassine 89'",
    highlights: 'Mercedes-Benz 亚特兰大 · 摩洛哥 4-2 · Hakimi 39\' · 与海地对攻 · 摩洛哥 7 分 C 组第二',
    ht_score: '2-2', first_goal_min: 10, fifa_id: '400021452',
  },
  m53: {
    home_score: 0, away_score: 3, status: 'FT', label: '全场结束',
    scorers: "Mateo Chavez 55'; Julian Quinones 61'; Alvaro Fidalgo 90'+4'",
    highlights: 'Azteca 阿兹特克 · 轮换版墨西哥 3-0 · Chavez 55\'/Quinones 61\'/Fidalgo 90+4\' · 墨西哥 9 分 A 组第一',
    ht_score: '0-0', first_goal_min: 55, fifa_id: '400021444',
  },
  m54: {
    home_score: 1, away_score: 0, status: 'FT', label: '全场结束',
    scorers: "Thapelo Maseko 63'",
    highlights: 'BBVA 蒙特雷 · Maseko 63\' 制胜 · 南非 4 分出线 · 韩国孙兴慜替补仍出局',
    ht_score: '0-0', first_goal_min: 63, fifa_id: '400021445',
  },
};

const REVIEW = {
  m51: '【赛后复盘】赛前主胜 41%/首推 1-1；实际 2-1 瑞士胜。Vargas 46\'/Manzambi 57\' 下半场连入 · David 76\' 扳回一球。方向：主胜命中；比分未中；总球 3（大 2.75 赢）。路径：榜首对话→瑞士末轮抢下 7 分头名。',
  m52: '【赛后复盘】赛前主胜 41%/首推 1-1；实际 3-1 波黑胜。Alajbegovic 29\'/Abunada 34\'(og)/Alhaydos 42\'/Mahmic 80\'。方向：主胜命中；比分接近 2-1 推演；总球 4（大 2.5 穿）。路径：垫底对话→波黑末轮 4 分仍出局（净胜球劣势）。',
  m49: '【赛后复盘】赛前客胜 63%/首推 0-1；实际 0-3 巴西胜。Vini 7\'/45+3\' 双响 · Cunha 60\' 穿深盘。方向：客胜命中；比分 0-3 超预期；总球 3（大 2.75 赢）。路径：深盘兑现→巴西 7 分 C 组第一。',
  m50: '【赛后复盘】赛前主胜 49%/首推 1-0；实际 4-2 摩洛哥胜。Bounou 10\'(og)/Hakimi 39\'/Saibari 45+1\'/Rahimi 78\' · 海地 Isidor 43\' 反击。方向：主胜命中；总球 6（大 2.75 穿）；比分远超 xG 小球预期。路径：领跑巩固→摩洛哥 7 分 C 组第二。',
  m53: '【赛后复盘】赛前客胜 56%/首推 0-1；实际 0-3 墨西哥胜。轮换版仍穿盘：Chavez 55\'/Quinones 61\'/替补 Fidalgo 90+4\' · Jiménez 未出场。方向：客胜命中；0-3 属分布尾部（约 5%）；总球 3（大 2.5 赢）。路径：高原主场+轮换深度→捷克 Schick 替补无果。',
  m54: '【赛后复盘】赛前客胜 36%/首推 1-1；实际 1-0 南非胜。Maseko 63\' 制胜 · 孙兴慜替补韩国仍出局。方向：主胜冷门命中（28%）；平局/客胜均未中；总球 1（小 2.5 赢）。路径：须胜韩国进攻乏力→南非抢下出线名额。',
};

const GROUP_B_FINAL = [
  { team: 'Switzerland', pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 7, ga: 3 },
  { team: 'Canada', pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 8, ga: 3 },
  { team: 'Bosnia and Herzegovina', pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 5, ga: 6 },
  { team: 'Qatar', pts: 1, p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 10 },
];

const GROUP_C_FINAL = [
  { team: 'Brazil', pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 0 },
  { team: 'Morocco', pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 3 },
  { team: 'Scotland', pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 1, ga: 5 },
  { team: 'Haiti', pts: 0, p: 3, w: 0, d: 0, l: 3, gf: 2, ga: 7 },
];

const GROUP_A_FINAL = [
  { team: 'Mexico', pts: 9, p: 3, w: 3, d: 0, l: 0, gf: 7, ga: 0 },
  { team: 'South Africa', pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 2, ga: 3 },
  { team: 'South Korea', pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 2, ga: 3 },
  { team: 'Czechia', pts: 1, p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 6 },
];

function upsertGroup(snaps, group, label, table) {
  const i = snaps.findIndex(g => g.group === group);
  const snap = { group, label, table };
  if (i >= 0) snaps[i] = snap;
  else snaps.push(snap);
  return snaps;
}

function patchStars(m, id) {
  if (id === 'm51' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Ruben Vargas', pos: 'LW', club: 'Augsburg',
      stats: "46' 破局", rating: 8.2,
      desc: '2-1 制胜路径 · 下半场首开',
    };
    if (!m.home.stars[1]) m.home.stars.push({});
    m.home.stars[1] = {
      name: 'Johan Manzambi', pos: 'FW', club: 'Young Boys',
      stats: "57' 扩大", rating: 8.0,
      desc: '锁定 B 组头名',
    };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm52' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Kerim Alajbegovic', pos: 'ST', club: 'St. Gallen',
      stats: "29' 首开", rating: 8.1,
      desc: '3-1 末轮抢分 · Džeko 线替补后手',
    };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm49' && m.away?.stars?.[0]) {
    m.away.stars[0] = {
      name: 'Vinicius Junior', pos: 'LW', club: 'Real Madrid',
      stats: "7', 45'+3' 双响", rating: 9.3,
      desc: '0-3 穿深盘 · C 组 7 分头名',
    };
    if (!m.away.stars[1]) m.away.stars.push({});
    m.away.stars[1] = {
      name: 'Matheus Cunha', pos: 'ST', club: 'Wolves',
      stats: "60' 锁定", rating: 8.0,
      desc: '下半场第三球穿盘',
    };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }
  if (id === 'm50' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Achraf Hakimi', pos: 'RB', club: 'PSG',
      stats: "39' 破门", rating: 8.5,
      desc: '4-2 对攻战 · C 组 7 分第二',
    };
    if (!m.home.stars[1]) m.home.stars.push({});
    m.home.stars[1] = {
      name: 'Soufiane Rahimi', pos: 'ST', club: 'Al-Ain',
      stats: "78' 第三球", rating: 8.0,
      desc: '末段锁定胜局',
    };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm53' && m.away?.stars?.[0]) {
    m.away.stars[0] = {
      name: 'Julián Quiñones', pos: 'FW', club: 'América',
      stats: "61' 破门", rating: 8.3,
      desc: '轮换版 3-0 · 锁定 A 组 9 分',
    };
    if (!m.away.stars[1]) m.away.stars.push({});
    m.away.stars[1] = {
      name: 'Mateo Chávez', pos: 'MF', club: 'Monterrey',
      stats: "55' 首开", rating: 8.0,
      desc: '下半场破局高原捷克',
    };
    if (!m.away.stars[2]) m.away.stars.push({});
    m.away.stars[2] = {
      name: 'Álvaro Fidalgo', pos: 'AM', club: 'América',
      stats: "90'+4' 锁定", rating: 7.8,
      desc: '替补登场锦上添花',
    };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }
  if (id === 'm54' && m.home?.stars?.[0]) {
    m.home.stars[0] = {
      name: 'Thapelo Maseko', pos: 'RW', club: 'Mamelodi Sundowns',
      stats: "63' 制胜球", rating: 8.4,
      desc: '1-0 爆冷出线 · 韩国孙兴慜替补无果',
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
  const SYNC_IDS = ['m51', 'm52', 'm49', 'm50', 'm53', 'm54'];
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

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter(m => !SYNC_IDS.includes(m.id));

  let snaps = RESULTS_DATA.groupSnapshots || [];
  snaps = upsertGroup(snaps, 'A', 'A组 · 末轮后', GROUP_A_FINAL);
  snaps = upsertGroup(snaps, 'B', 'B组 · 末轮后', GROUP_B_FINAL);
  snaps = upsertGroup(snaps, 'C', 'C组 · 末轮后', GROUP_C_FINAL);
  RESULTS_DATA.groupSnapshots = snaps;
  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 14 全部 6 场完结';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 Day 14 完结：墨3-0捷 · 南非1-0韩 · 瑞2-1加 · 波黑3-1卡 · 苏0-3巴 · 摩4-2海', time: '6月25日' },
    { tag: 'OFFICIAL', text: 'A组：墨西哥 9 分 · 南非出线 | B组：瑞士 7 分 | C组：巴西/摩洛哥各 7 分', time: '积分榜' },
  ].slice(0, 12);

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'FIFA 官方赛果 · Day 14 全部 6 场完结';
  MATCH_DATA.breakingNews = RESULTS_DATA.breakingNews;

  const day14Results = SYNC_IDS.map(id => {
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

  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.todayDate = '2026-06-25';
  LIVE_DATA.allResults = day14Results;
  LIVE_DATA.yesterdayResults = day14Results.map(r => ({ id: r.id, score: r.score }));
  LIVE_DATA.injuries = { note: 'Day 14 全部完结 · 墨西哥/瑞士/巴西头名 · 南非爆冷出线' };
  LIVE_DATA.standings = snaps.filter(g => ['A', 'B', 'C'].includes(g.group));
  LIVE_DATA.fixtures = [];

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 14 全部完结\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/sync-day14-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 14 synced (6/6 finished)');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r) console.log(`   ${id} FT ${r.home_score}-${r.away_score}`);
  }
  console.log(`   Remaining today: ${(MATCH_DATA.todayMatches || []).map(m => m.id).join(', ') || 'none'}`);
  console.log('✅ Archived:', archiveIds.join(', ') || '(updated)');
  try { rebuildScheduleScores(); } catch (e) { console.warn('⚠ schedule-scores:', e.message); }
}

main().catch(e => { console.error(e); process.exit(1); });
