/**
 * Day 21 赛前同步 — FIFA 首发/裁判 + M80 临场盘
 * node scripts/sync-day21-prekickoff.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { getReferee, SOURCE } = require('./referee-data-day21');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const HANDICAP_PATH = path.join(ROOT, 'scripts', 'handicap-data-day21.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const FIFA = {
  m80: '400021512',
  m81: '400021524',
  m82: '400021525',
};

/** M80 临场盘（用户 2026-07-02） */
const M80_LINES = {
  spread: { home: '-1.5', home_odds: 0.96, away: '+1.5', away_odds: 0.93 },
  totals: { line: 2.5, line_display: '2.5', over_odds: 1.03, under_odds: 0.85 },
};

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
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

function playerName(p) {
  return p.PlayerName?.[0]?.Description || p.AliasName?.[0]?.Description || p.Name?.[0]?.Description || '';
}

function formatXi(players) {
  return players
    .filter((p) => p.Status === 1)
    .sort((a, b) => (a.ShirtNumber || 99) - (b.ShirtNumber || 99))
    .map(playerName)
    .filter(Boolean)
    .join(', ');
}

function applyLineupFromFifa(match, j) {
  const homeXi = (j.HomeTeam?.Players || []).filter((p) => p.Status === 1);
  const awayXi = (j.AwayTeam?.Players || []).filter((p) => p.Status === 1);
  if (homeXi.length !== 11 || awayXi.length !== 11) return false;

  const homeT = j.HomeTeam.Tactics || '—';
  const awayT = j.AwayTeam.Tactics || '—';
  const prevPredicted = match.lineup?.predicted || null;

  match.lineup = {
    confirmed: true,
    formation: `${homeT} / ${awayT}`,
    home: formatXi(j.HomeTeam.Players),
    away: formatXi(j.AwayTeam.Players),
    note: `✅ FIFA 官方 team sheet（Match ${j.MatchNumber} · ${FIFA[match.id]} · ${TS}）`,
    source: SOURCE,
    updated: TS,
    fifa_match_id: FIFA[match.id],
    predicted: prevPredicted,
  };

  if (match.id === 'm80') {
    match.note = '32强 M80 · 英格兰 vs 刚果（金）· 亚特兰大 · FIFA 官方首发已确认';
    match.prediction = match.prediction || {};
    match.prediction.key_factor =
      'FIFA 官方：英格兰 4-2-3-1（Kane/Rashford/Madueke · 无 Walker/Stones/Saka 首发）'
      + ' vs 刚果 4-3-3（Wissa · Wan-Bissaka/Mbemba）';
    const tac = match.prediction.insight_factors?.find((f) => f.label === '战术与阵容');
    if (tac) tac.text = match.prediction.key_factor;
  }
  return true;
}

function patchM80EnglandNews(match) {
  if (!match.home) return;
  match.home.rumors = [
    '【FIFA 官方 XI】4-2-3-1：Kane #9 · Rashford/Madueke 两翼 · Bellingham #10',
    'Konsta/Oreilly/Guehi/Spence 四后卫 · Rice/Anderson 双后腰',
    'Walker · Stones · Saka · Foden · Mainoo 均未首发 — 轮换幅度大',
    'Pickford 一门 · 深盘 -1.5 仍须净胜 2+',
  ];
  match.home.injuries = [
    { player: 'Kyle Walker', status: 'BENCH', note: 'FIFA 未进首发 XI', confirmed: true },
    { player: 'John Stones', status: 'BENCH', note: 'FIFA 未进首发 XI', confirmed: true },
    { player: 'Bukayo Saka', status: 'BENCH', note: 'FIFA 未进首发 XI', confirmed: true },
  ];
  if (!match.away) return;
  match.away.rumors = [
    '【FIFA 官方 XI】4-3-3：Wissa #11 · Cipenga 锋线',
    'Wan-Bissaka · Tuanzebe · Mbemba · Masuaku 防线',
    'Mukau/Mbuku/Moutoussamy/Sadiki 中场',
  ];
}

function updateHandicapM80() {
  delete require.cache[require.resolve(HANDICAP_PATH)];
  const hc = require(HANDICAP_PATH);
  const m = hc.m80;
  if (!m) return;

  m.totals_line = M80_LINES.totals.line;
  m.totals_over_odds = M80_LINES.totals.over_odds;
  m.totals_under_odds = M80_LINES.totals.under_odds;
  m.totals_now = { ...M80_LINES.totals };
  m.line_move = {
    tag: 'totals_rise_under_chase',
    cn: '临场：大小回2.5小低水 · 英-1.5稳',
    detail: '让球 英 -1.5 0.96/刚果0.93 不动。大小 2/2.5→2.5 · 大1.03小0.85（升整球线、小降水=收小）。',
  };
  m.analysis = 'M80 · 英格兰 vs 刚果（金） · 现 -1.5 英 0.96 / 刚果 0.93 · 大小 2.5 大 1.03 小 0.85 · FIFA 首发已确认 · Agent：★大2/2.5+刚果受让。';
  m.live_timeline = (m.live_timeline || []).filter((e) => !/2\/2\.5 大0\.84/.test(e.totals || ''));
  m.live_timeline.push({
    min: 0,
    score: '0-0',
    spread: '英-1.5@0.96/刚果0.93',
    totals: '2.5 大1.03小0.85',
    trap_note: '大小回2.5小0.85低水',
  });
  if (m.live) {
    m.live.captured_at = TS;
    m.live.totals_live = { ...M80_LINES.totals };
    m.live.line_move_live_cn = '现：英 -1.5 0.96 / 刚果 0.93 · 2.5 大 1.03 小 0.85';
    m.live.read_cn = '大小2/2.5→2.5小0.85收小；英首发轮换大。';
  }

  const tpl = `/** Day 21 handicap — m80–m82 · 32强 · 皇冠 CROWN
 *  spread_open / totals_open = 初盘 · spread_now / totals_now = 现盘
 *  agent_pick：每场 spread + totals 双选项，primary 标★倾向
 */
module.exports = ${JSON.stringify(hc, null, 2)};
`;
  fs.writeFileSync(HANDICAP_PATH, tpl);
}

function patchLiveData() {
  const live = loadData(LIVE_PATH, 'LIVE_DATA');
  live.lastUpdated = TS;
  const m80 = live.fixtures?.find((f) => f.id === 'm80');
  if (m80) {
    m80.spread_live_cn = 'England -1.5@0.96 · Congo DR +1.5@0.93';
    m80.totals_live_cn = '大小 2.5 · 大 1.03 / 小 0.85';
    m80.lineup_confirmed = true;
  }
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/sync-day21-prekickoff.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(live, null, 2)};\n`,
  );
}

async function main() {
  const data = loadData(MATCH_PATH, 'MATCH_DATA');
  data.lastUpdated = TS;
  data.syncSource = 'FIFA 官方 · Day 21 裁判/首发 · M80 临场盘';

  const lineupOk = [];
  for (const id of ['m80', 'm81', 'm82']) {
    const m = data.todayMatches?.find((x) => x.id === id);
    if (!m) continue;
    m.referee = { ...getReferee(id), updated: TS };

    const j = await fetchFifa(FIFA[id]);
    if (applyLineupFromFifa(m, j)) {
      lineupOk.push(id);
      if (id === 'm80') patchM80EnglandNews(m);
    } else {
      m.lineup = {
        ...(m.lineup || {}),
        note: `裁判已确认 · 首发待 FIFA 公布（${TS}）`,
        updated: TS,
      };
    }
  }

  const news = (data.breakingNews || []).filter(
    (n) => !/M80.*首发|英格兰.*XI|裁判.*M8[012]/.test(n.text || ''),
  );
  if (lineupOk.includes('m80')) {
    news.unshift({
      tag: 'OFFICIAL',
      text: '✅ m80 FIFA 官方首发：英格兰轮换（无 Walker/Stones/Saka）· 刚果 Wissa 领衔',
      time: '7月2日',
    });
  }
  news.unshift({
    tag: 'OFFICIAL',
    text: '🏁 Day21 裁判：M80 Makhadmeh(约) · M81 Claus(巴) · M82 Martinez(洪)',
    time: '7月2日',
  });
  if (lineupOk.includes('m80')) {
    news.unshift({
      tag: 'LINE',
      text: 'M80 临场：大小 2.5 大1.03小0.85（回整球线收小）· 英 -1.5 不变',
      time: '皇冠',
    });
  }
  data.breakingNews = news.slice(0, 14);

  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 21 pre-kickoff\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
  );

  updateHandicapM80();
  patchLiveData();

  const { execSync } = require('child_process');
  execSync('node scripts/apply-prediction-signals.js', { cwd: ROOT, stdio: 'inherit' });

  console.log('✅ Day 21 pre-kickoff sync');
  console.log('   裁判：m80 Makhadmeh · m81 Claus · m82 Martinez');
  console.log('   首发：', lineupOk.length ? lineupOk.join(', ') : '待公布');
  console.log('   M80 盘：2.5 大1.03小0.85');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
