/**
 * Day 19 赛果同步 — m74–m76（2026-06-30 北京时间 · 32强 3场）
 * Run: node scripts/sync-day19-results.js && node scripts/grade-agent-picks.js day19 && node scripts/roll-day20.js && node scripts/enrich-day20.js && node scripts/apply-prediction-signals.js
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

const HANDICAP = { ...require('./handicap-data-day19') };
const { buildM74, buildM75, buildM76 } = require('./roll-day19');

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
    if (g.Type !== 2 && g.Type !== 3) continue;
    if (!g.Minute) continue;
    rows.push(`${playerName(j, g.IdPlayer)} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if (g.Type !== 2 && g.Type !== 3) continue;
    if (!g.Minute) continue;
    rows.push(`${playerName(j, g.IdPlayer)} ${g.Minute}${g.Type === 3 ? ' (og)' : ''}`);
  }
  return rows.join('; ');
}

function inferHt(j) {
  let h = 0; let a = 0;
  for (const g of j.HomeTeam?.Goals || []) {
    if ((g.Type === 2 || g.Type === 3) && g.Minute && (g.Period === 3 || parseInt(g.Minute, 10) <= 45)) h++;
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if ((g.Type === 2 || g.Type === 3) && g.Minute && (g.Period === 3 || parseInt(g.Minute, 10) <= 45)) a++;
  }
  if (h + a > 0) return `${h}-${a}`;
  const hs = j.HomeTeam?.Score ?? 0;
  const as = j.AwayTeam?.Score ?? 0;
  if (hs === 0 && as === 0) return '0-0';
  return null;
}

function isFinished(j) {
  return j.MatchStatus === 0 && j.Period === 10;
}

function winnerName(j) {
  if (j.Winner === j.HomeTeam?.IdTeam) return j.HomeTeam?.TeamName?.[0]?.Description;
  if (j.Winner === j.AwayTeam?.IdTeam) return j.AwayTeam?.TeamName?.[0]?.Description;
  return null;
}

function firstGoalMin(j) {
  const goals = [...(j.HomeTeam?.Goals || []), ...(j.AwayTeam?.Goals || [])]
    .filter(g => (g.Type === 2 || g.Type === 3) && g.Minute);
  if (!goals.length) return null;
  goals.sort((a, b) => parseInt(String(a.Minute).replace(/\D/g, ''), 10) - parseInt(String(b.Minute).replace(/\D/g, ''), 10));
  return parseInt(String(goals[0].Minute).replace(/\D/g, ''), 10) || null;
}

const FIFA_IDS = {
  m76: '400021516',
  m74: '400021513',
  m75: '400021522',
};

const BUILDERS = { m74: buildM74, m75: buildM75, m76: buildM76 };

const MANUAL = {
  m76: {
    home_score: 2, away_score: 1, status: 'FT', label: '全场结束',
    scorers: "Kaishu SANO 29'; Casemiro 56'; GABRIEL MARTINELLI 90'+5'",
    highlights: '休斯顿 · 巴西 2-1 日本 · Sano/Casemiro/Martinelli · 日本 +0.5/1 赢半 · 大 2/2.5 穿',
    ht_score: '0-1', first_goal_min: 29, fifa_id: '400021516', pk_winner: 'Brazil',
  },
  m74: {
    home_score: 1, away_score: 1, status: 'FT', label: '全场结束（点球）',
    scorers: "Julio ENCISO 42'; Kai HAVERTZ 54'",
    highlights: '波士顿 · 德国 1-1 巴拉圭 · 点球巴拉圭晋级 · 巴拉圭 +1.5 全赢 · 小 2.5/3 全赢',
    ht_score: '0-1', first_goal_min: 42, fifa_id: '400021513', pk_winner: 'Paraguay',
  },
  m75: {
    home_score: 1, away_score: 1, status: 'FT', label: '全场结束（点球）',
    scorers: "Cody GAKPO 72'; Issa Diop 90'+1' (og)",
    highlights: '蒙特雷 · 荷兰 1-1 摩洛哥 · 点球摩洛哥晋级 · 摩洛哥 +0/0.5 全赢 · 大 2/2.5 走半',
    ht_score: '0-0', first_goal_min: 72, fifa_id: '400021522', pk_winner: 'Morocco',
  },
};

const REVIEW = {
  m76: '【赛后复盘】实际 2-1 巴西胜 · 半场 0-1 Sano 逆转。Agent：日本 +0.5/1 赢半；★大 2/2.5 穿（3 球）。巴西晋级 M91。',
  m74: '【赛后复盘】90 分钟 1-1 · 点球巴拉圭淘汰德国。Agent：★巴拉圭 +1.5 全赢；★小 2.5/3 全赢（2 球）。冷门：德国 E1 出局。',
  m75: '【赛后复盘】90 分钟 1-1 · 点球摩洛哥胜。Agent：摩洛哥 +0/0.5 全赢；★大 2/2.5 走半（2 球）。摩洛哥 M90 对加拿大。',
};

const SYNC_IDS = ['m76', 'm74', 'm75'];

function patchStars(m, id) {
  if (id === 'm76' && m.home?.stars?.[0]) {
    m.home.stars[0] = { name: 'Gabriel Martinelli', pos: 'LW', club: 'Arsenal', stats: "90+5' 绝杀", rating: 8.6, desc: '2-1 · 巴西晋级' };
    if (m.home.star) m.home.star = { ...m.home.stars[0] };
  }
  if (id === 'm74' && m.away?.stars?.[0]) {
    m.away.stars[0] = { name: 'Julio Enciso', pos: 'FW', club: 'Brighton', stats: "42' + 点球晋级", rating: 8.8, desc: '1-1 · 巴拉圭淘汰德国' };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
  }
  if (id === 'm75' && m.away?.stars?.[0]) {
    m.away.stars[0] = { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', stats: '点球大战晋级', rating: 8.5, desc: '1-1 · 摩洛哥淘汰荷兰' };
    if (m.away.star) m.away.star = { ...m.away.stars[0] };
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
    pk_winner: r.pk_winner || null,
    fifa_match_id: r.fifa_id,
    updated: TS,
  };
  if (REVIEW[reviewKey] && m.prediction) {
    m.prediction.key_factor = REVIEW[reviewKey];
    const idx = m.prediction.insight_factors?.findIndex(f => f.label === '战术与阵容');
    if (idx >= 0) m.prediction.insight_factors[idx].text = REVIEW[reviewKey];
  }
  if (r.status === 'FT') {
    m.note = (m.note || '').replace(/待赛|预览/, '已结束').replace(/ · 已结束.*$/, '')
      + ` · 已结束 ${r.home_score}-${r.away_score}${r.pk_winner ? '（点球' + r.pk_winner + '）' : ''}`;
    if (m.home?.form) {
      const hr = r.pk_winner === m.home.name ? 'W' : r.pk_winner === m.away.name ? 'L'
        : r.home_score > r.away_score ? 'W' : r.home_score < r.away_score ? 'L' : 'D';
      m.home.form = pushForm(m.home.form, hr);
    }
    if (m.away?.form) {
      const ar = r.pk_winner === m.away.name ? 'W' : r.pk_winner === m.home.name ? 'L'
        : r.away_score > r.home_score ? 'W' : r.away_score < r.home_score ? 'L' : 'D';
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
      const pk = winnerName(j);
      if (isFinished(j)) {
        resolved[mid] = {
          ...resolved[mid],
          home_score: hs,
          away_score: as,
          scorers,
          ht_score: inferHt(j) || resolved[mid]?.ht_score,
          first_goal_min: firstGoalMin(j) ?? resolved[mid]?.first_goal_min,
          pk_winner: pk || resolved[mid]?.pk_winner,
          status: 'FT',
          label: pk && hs === as ? '全场结束（点球）' : '全场结束',
          fifa_id: fid,
        };
      }
    } catch (e) {
      console.warn('⚠ FIFA fetch', mid, e.message);
    }
  }

  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches?.find(x => x.id === id);
    if (!m && BUILDERS[id]) m = BUILDERS[id]();
    const fromResults = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    if (!m && fromResults) m = JSON.parse(JSON.stringify(fromResults));
    const r = resolved[id];
    if (!m || !r || r.status !== 'FT') continue;

    const patched = applyResult(JSON.parse(JSON.stringify(m)), r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex(x => x.id === id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = archived;
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter(m => !SYNC_IDS.includes(m.id));

  const day19Results = SYNC_IDS.map(id => {
    const r = resolved[id];
    const m = (RESULTS_DATA.finishedMatches || []).find(x => x.id === id);
    return m && r ? {
      id,
      home: m.home?.name || m.home,
      away: m.away?.name || m.away,
      score: `${r.home_score}-${r.away_score}`,
      group: 'KO',
    } : null;
  }).filter(Boolean);

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方赛果 · Day 19 M74–M76 完结 · 32强连战';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 M74：德国 1-1 巴拉圭 · 点球巴拉圭晋级（冷门）', time: '6月30日' },
    { tag: 'OFFICIAL', text: '🏁 M76：巴西 2-1 日本 · Martinelli 90+5\'', time: '6月30日' },
    { tag: 'OFFICIAL', text: '🏁 M75：荷兰 1-1 摩洛哥 · 点球摩洛哥晋级', time: '6月30日' },
    { tag: 'PREVIEW', text: '⚔️ 7月1日 32强 3 场：科特迪瓦-挪威(01:00) · 法国-瑞典(05:00) · 墨西哥-厄瓜多尔(09:00)', time: '今日赛程' },
  ].slice(0, 12);

  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'Day 19 完结 · Day 20 待滚日';
  MATCH_DATA.breakingNews = RESULTS_DATA.breakingNews;

  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.todayDate = '2026-07-01';
  LIVE_DATA.allResults = [...day19Results, ...(LIVE_DATA.allResults || []).filter(r => !SYNC_IDS.includes(r.id))];
  LIVE_DATA.yesterdayResults = day19Results.map(r => ({ id: r.id, score: r.score }));
  LIVE_DATA.injuries = { note: 'Day 19 完结 · Day 20 32强 3 场待赛' };
  LIVE_DATA.fixtures = [];

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 19 完结\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Auto-synced by scripts/sync-day19-results.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  console.log('✅ Day 19 synced (3/3 finished)');
  for (const id of SYNC_IDS) {
    const r = resolved[id];
    if (r?.status === 'FT') {
      console.log(`   ${id} FT ${r.home_score}-${r.away_score}${r.pk_winner ? ' PK→' + r.pk_winner : ''} · ${r.scorers || ''}`);
    }
  }
  try { rebuildScheduleScores(); } catch (e) { console.warn('⚠ schedule-scores:', e.message); }
}

main().catch(e => { console.error(e); process.exit(1); });
