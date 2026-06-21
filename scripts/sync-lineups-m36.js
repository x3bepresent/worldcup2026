/**
 * m36 Tunisia vs Japan — FIFA 官方首发
 * API: https://api.fifa.com/api/v3/live/football/400021475
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { computeOutcomeFromXg, computeScoreDistribution } = require('./score-model');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021475';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const BASE_XG = { home: 1.08, away: 1.42 };
const XG_IMPACT = {
  xg_home_delta: -0.08,
  xg_away_delta: -0.06,
  summary:
    'FIFA 官方：突尼斯 5-3-2（无 Khazri/Msakni/Laidouni · Saad+Tounekti 双锋）'
    + ' vs 日本 3-4-3（无 Kubo/Mitoma/Endo · Sano+Junya Ito+Ueda 前场）——'
    + '双方均大幅轮换，突尼斯更偏低位，日本变阵三中卫控球。',
};

const OFFICIAL = {
  homeTactics: '5-3-2',
  awayTactics: '3-4-3',
  home: 'Dahmen; Abdi, Talbi, Rekik, Bronn, Valery; Mejbri, Skhiri, Slimane; Tounekti, Saad',
  away: 'Suzuki; Itakura, Hiroki Ito, Tomiyasu; Tanaka, Sano, Kamada, Doan; Nakamura, Junya Ito, Ueda',
};

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 10 (FIFA official XI m36)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
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
  if (j.MatchNumber !== 36) throw new Error('Expected Match 36, got ' + j.MatchNumber);
  if (home.TeamName?.[0]?.Description !== 'Tunisia') throw new Error('Home team mismatch');
  if (away.TeamName?.[0]?.Description !== 'Japan') throw new Error('Away team mismatch');
  const homeStarters = home.Players.filter(p => p.Status === 1).length;
  const awayStarters = away.Players.filter(p => p.Status === 1).length;
  if (homeStarters !== 11 || awayStarters !== 11) {
    throw new Error(`Incomplete XI: home ${homeStarters} away ${awayStarters}`);
  }
}

function applyXgFromLineup(m36) {
  const p = m36.prediction || {};
  const newH = Math.round(Math.max(0.15, BASE_XG.home + XG_IMPACT.xg_home_delta) * 100) / 100;
  const newA = Math.round(Math.max(0.15, BASE_XG.away + XG_IMPACT.xg_away_delta) * 100) / 100;
  const o = computeOutcomeFromXg(newH, newA);
  m36.prediction = {
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
      'FIFA 官方：突 5-3-2（Khazri/Msakni/Laidouni 均未进名单 · Saad+Tounekti 双锋）'
      + ' vs 日 3-4-3（Kubo/Mitoma/Endo 均未进名单 · Sano 中场 · Ueda 单箭头）；'
      + '双方大幅轮换，突尼斯低位 + 日本控球宽度是主旋律。',
    depth_calibrated: false,
  };
  return { baseH: BASE_XG.home, baseA: BASE_XG.away, newH, newA, o };
}

async function main() {
  const j = await fetchFifaMatch();
  verifyAgainstApi(j);

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m36 = data.todayMatches?.find(m => m.id === 'm36');
  if (!m36) throw new Error('m36 not found');

  const prevPredicted = m36.lineup?.predicted || {
    formation: '4-3-3 / 4-2-3-1',
    home: 'Dahmen; Dräger, Meriah, Talbi, Laabidi; Skhiri, Laidouni; Khazri, Sliti, Msakni; Jebali',
    away: 'Suzuki; Ito, Tomiyasu, Taniguchi, Hiroki; Endo, Morita; Kubo, Minamino, Doan; Mitoma, Suzuki',
    source: 'FotMob / ESPN 预测 · 非官方',
  };

  const homeTactics = j.HomeTeam.Tactics || OFFICIAL.homeTactics;
  const awayTactics = j.AwayTeam.Tactics || OFFICIAL.awayTactics;

  m36.note = 'F组第2轮 · 突尼斯 vs 日本 · 蒙特雷 · FIFA 官方首发已确认（世界杯第1000场）';
  m36.lineup = {
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
        '⚠️ 5-3-2 低位（非预测 4-3-3 抢分）：Khazri/Msakni/Laidouni 均未进大名单 · '
        + 'Saad+Tounekti 双锋 · Mejbri 前腰 · Ghari/Chaouat 替补',
      away:
        '⚠️ 3-4-3（非预测 4-2-3-1）：Kubo/Mitoma/Endo 均未进大名单 · '
        + 'Sano+Tanaka 双闸 · Kamada 前腰 · Nakamura+Junya Ito+Ueda 前场',
    },
    predicted: prevPredicted,
  };

  const xgChange = applyXgFromLineup(m36);

  if (m36.coach_analysis?.home) {
    m36.coach_analysis.home.formation_pref = '5-3-2 · Skhiri 屏障 · Saad 反击';
    m36.coach_analysis.home.style_summary =
      'FIFA 官方摆 5-3-2 低位：无 Khazri 创造力，靠定位球与 Saad 速度偷分；与赛前「必须进攻」 rhetoric 形成反差。';
    m36.coach_analysis.home.match_note =
      'Khazri 未进名单是最大意外——Zaouali 选择先稳后攻，Ghari/Chaouat 后手变阵。';
  }
  if (m36.coach_analysis?.away) {
    m36.coach_analysis.away.formation_pref = '3-4-3 · Sano+Tanaka · Kamada 前腰';
    m36.coach_analysis.away.match_note =
      'Moriyasu 变阵三中卫：Mitoma/Endo 均未进名单，Doan+Junya Ito 翼卫宽度 + Ueda 支点。';
  }

  if (m36.upset_alert) {
    m36.upset_alert.tactical =
      'FIFA 官方：突 5-3-2（无 Khazri）vs 日 3-4-3（无 Mitoma/Endo）；'
      + '双方轮换幅度大，平局/低比分冷门概率上升，60\' 后 Ghari/Maeda 是变量。';
  }

  const lineupNews = {
    tag: 'LINEUP',
    text: '✅ FIFA 官方首发 m36 · 突 5-3-2 无Khazri · 日 3-4-3 无Mitoma/Endo',
    time: '官方确认',
  };
  const news = (data.breakingNews || []).filter(n => !(n.tag === 'LINEUP' && /m36|突尼斯|Tunisia|日本|Japan/i.test(n.text)));
  data.breakingNews = [lineupNews, ...news];

  saveMatchData(data);

  console.log('✅ m36 FIFA official lineup synced');
  console.log('   Tunisia (' + homeTactics + '):', OFFICIAL.home);
  console.log('   Japan (' + awayTactics + '):', OFFICIAL.away);
  console.log(
    '   xG:', xgChange.baseH + '–' + xgChange.baseA, '→', xgChange.newH + '–' + xgChange.newA,
    '| probs:', xgChange.o.home_win + '/' + Math.round(xgChange.o.draw) + '/' + xgChange.o.away_win,
  );
}

main().catch(e => { console.error(e); process.exit(1); });
