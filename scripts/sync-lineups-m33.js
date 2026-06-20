/**
 * m33 Germany vs Côte d'Ivoire — FIFA 官方首发
 * API: https://api.fifa.com/api/v3/live/football/400021469
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { computeOutcomeFromXg, computeScoreDistribution } = require('./score-model');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021469';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const BASE_XG = { home: 2.05, away: 0.95 };
const XG_IMPACT = {
  xg_home_delta: 0.04,
  xg_away_delta: -0.06,
  summary:
    'FIFA 官方：德国 3-4-3（Kimmich 中卫 · Rüdiger/Goretzka 替补 · Nmecha 先发）'
    + ' vs 科特迪瓦 4-3-3（Pépé/Wahi/N\'Dicka 替补 · Amad+Diomande 先发）——'
    + '客队少了 Pépé 爆点、前场更年轻；主队变阵三中卫略抬肋部宽度。',
};

const OFFICIAL = {
  homeTactics: '3-4-3',
  awayTactics: '4-3-3',
  home: 'Neuer; Tah, Kimmich, Schlotterbeck; Brown, Pavlovic, Nmecha, Sané; Musiala, Wirtz, Havertz',
  away: 'Fofana; Konan, Kossounou, Agbadou, Singo; Kessié, Sangaré, Oulai; Amad, Bonny, Diomande',
};

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 10 (FIFA official XI m33)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
  );
}

function fetchFifaMatch() {
  return new Promise((resolve, reject) => {
    https.get(`https://api.fifa.com/api/v3/live/football/${FIFA_MATCH_ID}`, (res) => {
      let raw = '';
      res.on('data', (c) => { raw += c; });
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function verifyAgainstApi(j) {
  const home = j.HomeTeam;
  const away = j.AwayTeam;
  if (j.MatchNumber !== 33) throw new Error('Expected Match 33, got ' + j.MatchNumber);
  if (home.TeamName?.[0]?.Description !== 'Germany') throw new Error('Home team mismatch');
  if (away.TeamName?.[0]?.Description !== "Côte d'Ivoire") throw new Error('Away team mismatch');
  const homeStarters = home.Players.filter(p => p.Status === 1).length;
  const awayStarters = away.Players.filter(p => p.Status === 1).length;
  if (homeStarters !== 11 || awayStarters !== 11) {
    throw new Error(`Incomplete XI: home ${homeStarters} away ${awayStarters}`);
  }
}

function applyXgFromLineup(m33) {
  const p = m33.prediction || {};
  const newH = Math.round(Math.max(0.15, BASE_XG.home + XG_IMPACT.xg_home_delta) * 100) / 100;
  const newA = Math.round(Math.max(0.15, BASE_XG.away + XG_IMPACT.xg_away_delta) * 100) / 100;
  const o = computeOutcomeFromXg(newH, newA);
  m33.prediction = {
    ...p,
    xg_home: newH,
    xg_away: newA,
    home_win: o.home_win,
    draw: Math.round(o.draw),
    away_win: o.away_win,
    score: o.score,
    score_dist: computeScoreDistribution(newH, newA, { topN: 7 }),
    base_home_win: o.home_win,
    base_draw: Math.round(o.draw),
    base_away_win: o.away_win,
    key_factor:
      'FIFA 官方：德国 3-4-3（Kimmich 中卫 · Nmecha 先发）'
      + ' vs 科特迪瓦 4-3-3（无 Pépé 首发 · Amad+Diomande 锋线）；'
      + '榜首战变阵后肋部宽度上升，客队反击爆点改由替补提供。',
    depth_calibrated: false,
  };
  return { baseH: BASE_XG.home, baseA: BASE_XG.away, newH, newA, o };
}

async function main() {
  const j = await fetchFifaMatch();
  verifyAgainstApi(j);

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m33 = data.todayMatches?.find(m => m.id === 'm33');
  if (!m33) throw new Error('m33 not found');

  const prevPredicted = m33.lineup?.predicted || {
    formation: '4-2-3-1 / 4-3-3',
    home: 'Neuer; Kimmich, Rüdiger, Tah, Raum; Goretzka, Andrich; Musiala, Wirtz, Sané; Havertz',
    away: 'Fodé; Konan, Boly, Aurier; Serper, Sangaré; Zaha, Adingra, Bamba; Krasso, Haller',
    source: 'Kicker / BBC 预测 · 已 superseded',
  };

  const homeTactics = j.HomeTeam.Tactics || OFFICIAL.homeTactics;
  const awayTactics = j.AwayTeam.Tactics || OFFICIAL.awayTactics;

  m33.note = 'E组第2轮 · 德国 vs 科特迪瓦 · 多伦多 · FIFA 官方首发已确认';
  m33.lineup = {
    confirmed: true,
    formation: `${homeTactics} / ${awayTactics}`,
    home: OFFICIAL.home,
    away: OFFICIAL.away,
    note: `✅ FIFA 官方 team sheet（Match ${j.MatchNumber} · ${FIFA_MATCH_ID} · ${TS}）`,
    source: 'FIFA Match Centre · api.fifa.com',
    updated: TS,
    fifa_match_id: FIFA_MATCH_ID,
    impact: {
      ...XG_IMPACT,
      xg_home_before: BASE_XG.home,
      xg_away_before: BASE_XG.away,
    },
    diff: {
      home:
        '⚠️ 3-4-3（非预测 4-2-3-1）：Kimmich 中卫+队长 · Rüdiger/Raum/Goretzka 替补 · '
        + 'Nmecha 先发替 Goretzka · Brown 翼卫',
      away:
        '⚠️ 4-3-3（非预测 4-4-2 低位）：Pépé/Wahi/N\'Dicka 均未首发 · '
        + 'Amad+Diomande+Bonny 三叉 · Oulai 先发 · Kossounou/Agbadou 中卫',
    },
    predicted: prevPredicted,
  };

  const xgChange = applyXgFromLineup(m33);

  if (m33.coach_analysis?.home) {
    m33.coach_analysis.home.formation_pref = '3-4-3 · Kimmich 中卫 · Musiala/Wirtz/Sané 肋部';
    m33.coach_analysis.home.style_summary =
      'FIFA 官方变阵三中卫：Kimmich 出球+Brown 翼卫宽度；Rüdiger/Goretzka 轮换，Nmecha 增加对抗。';
    m33.coach_analysis.home.match_note =
      '官方 3-4-3 对科特 4-3-3——肋部双核空间更大，但防线轮换略抬冷门波动。';
  }
  if (m33.coach_analysis?.away) {
    m33.coach_analysis.away.formation_pref = '4-3-3 · Amad/Diomande/Bonny（Pépé 替补）';
    m33.coach_analysis.away.match_note =
      'Faé 未摆 4-4-2 低位，改 4-3-3 对攻意味更浓；Pépé/Wahi 后手是最大变量。';
  }

  if (m33.upset_alert) {
    m33.upset_alert.tactical =
      'FIFA 官方：Nagelsmann 3-4-3（Rüdiger 休）vs Faé 4-3-3（Pépé 替补）；'
      + '客队首发更年轻，平局/偷分仍看 60\' 后 Pépé+Wahi 组合。';
  }

  const lineupNews = {
    tag: 'LINEUP',
    text: '✅ FIFA 官方首发 m33 · 德 3-4-3 Kimmich中卫 · 科特 4-3-3 Pépé/Wahi替补',
    time: '官方确认',
  };
  const news = (data.breakingNews || []).filter(n => !(n.tag === 'LINEUP' && /m33|德国|Germany|科特/i.test(n.text)));
  data.breakingNews = [lineupNews, ...news];

  saveMatchData(data);

  console.log('✅ m33 FIFA official lineup synced');
  console.log('   Germany (' + homeTactics + '):', OFFICIAL.home);
  console.log("   Côte d'Ivoire (" + awayTactics + '):', OFFICIAL.away);
  console.log(
    '   xG:', xgChange.baseH + '–' + xgChange.baseA, '→', xgChange.newH + '–' + xgChange.newA,
    '| probs:', xgChange.o.home_win + '/' + Math.round(xgChange.o.draw) + '/' + xgChange.o.away_win,
  );
}

main().catch(e => { console.error(e); process.exit(1); });
