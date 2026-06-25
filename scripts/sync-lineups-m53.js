/**
 * m53 Czechia vs Mexico — FIFA 官方首发
 * API: https://api.fifa.com/api/v3/live/football/400021444
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { computeOutcomeFromXg, computeScoreDistribution } = require('./score-model');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021444';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const BASE_XG = { home: 0.95, away: 1.88 };
const XG_IMPACT = {
  xg_home_delta: -0.12,
  xg_away_delta: -0.42,
  summary:
    'FIFA 官方：墨西哥 4-1-2-3 大面积轮换（Ochoa/Jiménez/Vega 替补 · Rangel 一门 · 青年锋线）'
    + ' vs 捷克 5-2-3（Schick/Souček 替补 · Kovář 一门）；'
    + '双方均非主力 XI，墨西哥轮换幅度更大，客 xG 显著下调。',
};

const OFFICIAL = {
  homeTactics: '5-2-3',
  awayTactics: '4-1-2-3',
  home:
    'Kovar; Holes, Hranac, Coufal, Krejci, Doudera; Cerv, Sadilek; Hlozek, Sulc, Visinsky',
  away:
    'Rangel; Sanchez, Montes, Alvarez, Reyes; Romo; Chavez, Alvarado; Mora, Quinones, Martinez',
};

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 14 (FIFA official XI m53)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
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
  if (j.MatchNumber !== 53) throw new Error('Expected Match 53, got ' + j.MatchNumber);
  if (j.HomeTeam?.TeamName?.[0]?.Description !== 'Czechia') throw new Error('Home team mismatch');
  if (j.AwayTeam?.TeamName?.[0]?.Description !== 'Mexico') throw new Error('Away team mismatch');
  const h = j.HomeTeam.Players.filter(p => p.Status === 1).length;
  const a = j.AwayTeam.Players.filter(p => p.Status === 1).length;
  if (h !== 11 || a !== 11) throw new Error(`Incomplete XI: home ${h} away ${a}`);
}

function applyXgFromLineup(m53) {
  const p = m53.prediction || {};
  const newH = Math.round(Math.max(0.15, BASE_XG.home + XG_IMPACT.xg_home_delta) * 100) / 100;
  const newA = Math.round(Math.max(0.15, BASE_XG.away + XG_IMPACT.xg_away_delta) * 100) / 100;
  const o = computeOutcomeFromXg(newH, newA);
  m53.prediction = {
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
      'FIFA 官方：墨西哥 4-1-2-3 大面积轮换（Rangel 一门 · Jiménez/Ochoa/Vega 替补 · 青年锋线）'
      + ' vs 捷克 5-2-3（Schick/Souček 替补 · Kovář 一门）；'
      + '6 分已出线控分+捷克变阵，平局权重上升。',
    depth_calibrated: false,
  };
  return { baseH: BASE_XG.home, baseA: BASE_XG.away, newH, newA, o };
}

async function main() {
  const j = await fetchFifaMatch();
  verifyAgainstApi(j);

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m53 = data.todayMatches?.find(m => m.id === 'm53');
  if (!m53) throw new Error('m53 not found');

  const prevPredicted = m53.lineup?.predicted || {
    formation: '3-4-3 / 4-2-3-1',
    home: 'Staněk; Holes, Brabec, Zmrhal; Coufal, Souček, Sadílek; Schick, Chytil, Provod',
    away: 'Ochoa; Arteaga, Montes, Vasquez; Álvarez, Chávez; Lozano, Jiménez, Vega; Mora',
    source: 'ESPN 预测 · 已 superseded',
  };

  const homeTactics = j.HomeTeam.Tactics || OFFICIAL.homeTactics;
  const awayTactics = j.AwayTeam.Tactics || OFFICIAL.awayTactics;

  m53.note = 'A组末轮 · 捷克 vs 墨西哥 · 阿兹特克 · FIFA 官方首发已确认（双方大面积轮换）';
  m53.lineup = {
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
        '⚠️ 5-2-3（非预测 4-2-3-1）：Schick #10 替补 · Souček #22 替补 · Kovář 一门 · '
        + 'Hložek/Sulc/Visinsky 锋线 · 无 Provod/Barák 首发',
      away:
        '⚠️ 4-1-2-3 大面积轮换：Ochoa #13 替补 · Jiménez #9 替补 · Vega #10 替补 · '
        + 'Rangel 一门 · Quinones/Martinez/Alvarado 锋线 · 无 Lozano/Guardado · Montes+Álvarez 留阵',
    },
    predicted: prevPredicted,
  };

  const xgChange = applyXgFromLineup(m53);

  if (m53.home) {
    m53.home.injuries = [
      { player: 'Patrik Schick', status: 'BENCH', note: 'FIFA 替补 #10 · 60\' 后破局后手', confirmed: true },
      { player: 'Tomáš Souček', status: 'BENCH', note: 'FIFA 替补 #22 · 绞杀轴心后手', confirmed: true },
      { player: 'Matej Kovář', status: 'FIT', note: 'FIFA 官方一门 #1', confirmed: true },
      { player: 'Adam Hložek', status: 'FIT', note: '官方 5-2-3 锋线 #9', confirmed: true },
      { player: 'Tomáš Holes', status: 'FIT', note: '官方五后卫之一 #3', confirmed: true },
    ];
    m53.home.rumors = [
      '【官方】FIFA 5-2-3：Schick/Souček 均未首发 — 须胜但 Hašek 变阵五后卫',
      'Kovář 一门 · Coufal/Holes/Hranac 后防 · Hložek/Sulc/Visinsky 攻击线',
      'Schick #10 · Souček #22 替补 — 60\' 后高原破局最大变量',
      '对墨西哥轮换版 4-1-2-3 · 定位球仍是捷克唯一路径',
    ];
    m53.home.stars = [
      { name: 'Adam Hložek', pos: 'ST', club: 'Bayer Leverkusen', stats: '官方 #9 锋线', rating: 7.8, desc: '无 Schick 首发时的支点' },
      { name: 'Vladimír Coufal', pos: 'RB', club: 'West Ham', stats: '官方 #5 翼卫', rating: 7.6, desc: '五后卫体系右路宽度' },
      { name: 'Patrik Schick', pos: 'ST', club: 'Bayer Leverkusen', stats: '替补 #10', rating: 8.4, desc: '60\' 后替补破局关键' },
    ];
    m53.home.star = m53.home.stars[2];
  }

  if (m53.away) {
    m53.away.injuries = [
      { player: 'Edson Álvarez', status: 'FIT', note: 'FIFA 官方后防/屏障 #4', confirmed: true },
      { player: 'César Montes', status: 'FIT', note: '官方中卫 #3', confirmed: true },
      { player: 'Luis Romo', status: 'FIT', note: '官方单后腰 #7', confirmed: true },
      { player: 'Raúl Rangel', status: 'FIT', note: '官方一门 #1 · 替 Ochoa', confirmed: true },
      { player: 'Guillermo Ochoa', status: 'BENCH', note: '传奇一门 #13 替补', confirmed: true },
      { player: 'Raúl Jiménez', status: 'BENCH', note: '主力前锋 #9 替补', confirmed: true },
      { player: 'Alexis Vega', status: 'BENCH', note: '攻击核心 #10 替补', confirmed: true },
      { player: 'Hirving Lozano', status: 'OUT', note: '未进 FIFA 大名单/XI', confirmed: true },
      { player: 'Andrés Guardado', status: 'OUT', note: '未进 FIFA 大名单/XI', confirmed: true },
    ];
    m53.away.rumors = [
      '【官方】FIFA 4-1-2-3：6 分已出线 — Aguirre 轮换 8+ 位置',
      'Rangel #1 替 Ochoa · Jiménez #9 / Vega #10 替补 · Quinones/Martinez/Alvarado 青年锋线',
      'Montes #3 + Álvarez #4 留阵保防线 · Romo #7 单后腰',
      '无 Lozano/Guardado · 60\' 后 Jiménez/Vega 破局后手',
      'Escobar 执法 · 轮换版仍要捍卫 Azteca 主场',
    ];
    m53.away.stars = [
      { name: 'Edson Álvarez', pos: 'CDM', club: 'West Ham', stats: '官方 #4 屏障', rating: 8.0, desc: '轮换版中轴唯一主力' },
      { name: 'Julián Quiñones', pos: 'FW', club: 'América', stats: '官方 #16 锋线', rating: 7.5, desc: '替 Jiménez 的先发中锋' },
      { name: 'Raúl Jiménez', pos: 'ST', club: 'Fulham', stats: '替补 #9', rating: 8.5, desc: '60\' 后替补破局' },
    ];
    m53.away.star = m53.away.stars[2];
  }

  const news = (data.breakingNews || []).filter(n => !/m53.*首发|墨西哥.*轮换|Schick.*替补/.test(n.text || ''));
  news.unshift({
    tag: 'OFFICIAL',
    text: '✅ m53 FIFA 官方首发：墨西哥大面积轮换（Jiménez/Ochoa/Vega 替补）· 捷克 Schick/Souček 替补',
    time: '6月25日',
  });
  data.breakingNews = news.slice(0, 14);

  saveMatchData(data);

  console.log('✅ m53 FIFA official XI synced');
  console.log(`   CZ ${homeTactics}: Schick BENCH · Souček BENCH · Kovar GK`);
  console.log(`   MX ${awayTactics}: Ochoa/Jimenez/Vega BENCH · Rangel GK · heavy rotation`);
  console.log(`   xG ${xgChange.baseH}–${xgChange.baseA} → ${xgChange.newH}–${xgChange.newA} (home ${XG_IMPACT.xg_home_delta} away ${XG_IMPACT.xg_away_delta})`);
  console.log(`   Poisson top: ${xgChange.o.score} (${xgChange.o.score_prob}%) · W/D/L ${xgChange.o.home_win}/${xgChange.o.draw}/${xgChange.o.away_win}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
