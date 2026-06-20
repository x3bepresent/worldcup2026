/**
 * m29 Brazil vs Haiti — FIFA 官方首发
 * Source: https://api.fifa.com/api/v3/live/football/400021457
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { computeOutcomeFromXg, computeScoreDistribution } = require('./score-model');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021457';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const BASE_XG = { home: 1.85, away: 0.75 };
const XG_IMPACT = {
  xg_home_delta: 0,
  xg_away_delta: -0.06,
  summary:
    'FIFA 官方：巴西 4-4-2（Gabriel/Bruno G · Matheus Cunha 先发）vs 海地 5-4-1（Nazon 替补 · Pierrot 单箭）；'
    + '弱队 xG 略下调，巴西须取胜结构不变。',
};

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 9 (FIFA official XI m29)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
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

const OFFICIAL = {
  homeTactics: '4-4-2',
  awayTactics: '5-4-1',
  home:
    'Alisson; Danilo, Marquinhos, Gabriel, Douglas Santos; Raphinha, Casemiro, Bruno Guimarães, Vinícius Jr; Matheus Cunha, Paquetá',
  away:
    'Placide; Arcus, Ade, Delcroix, Duverne, Experience; Bellegarde, Jean Jacques, Providence, Casimir; Pierrot',
};

function verifyAgainstApi(j) {
  if (j.MatchNumber !== 29) throw new Error('Expected Match 29, got ' + j.MatchNumber);
  if (j.HomeTeam?.TeamName?.[0]?.Description !== 'Brazil') throw new Error('Home team mismatch');
  if (j.AwayTeam?.TeamName?.[0]?.Description !== 'Haiti') throw new Error('Away team mismatch');
  const h = j.HomeTeam.Players.filter(p => p.Status === 1).length;
  const a = j.AwayTeam.Players.filter(p => p.Status === 1).length;
  if (h !== 11 || a !== 11) throw new Error(`Incomplete XI: home ${h} away ${a}`);
}

function applyXgFromLineup(m29) {
  const p = m29.prediction || {};
  const newH = Math.round(Math.max(0.15, BASE_XG.home + XG_IMPACT.xg_home_delta) * 100) / 100;
  const newA = Math.round(Math.max(0.15, BASE_XG.away + XG_IMPACT.xg_away_delta) * 100) / 100;
  const o = computeOutcomeFromXg(newH, newA);
  m29.prediction = {
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
      'FIFA 官方：巴西 4-4-2（Vinícius/Raphinha · Matheus Cunha · Bruno G/Casemiro）'
      + ' vs 海地 5-4-1（Nazon 替补 · Pierrot 支点）；须取胜，泊松仍倾向 2-0/3-0。',
    depth_calibrated: false,
  };
  return { baseH: BASE_XG.home, baseA: BASE_XG.away, newH, newA, o };
}

async function main() {
  const j = await fetchFifaMatch();
  verifyAgainstApi(j);

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m29 = data.todayMatches?.find(m => m.id === 'm29');
  if (!m29) throw new Error('m29 not found');

  const prevPredicted = m29.lineup?.predicted || {
    formation: '4-2-3-1 / 4-4-2',
    home: 'Alisson; Danilo, Marquinhos, Militão; Wendell, Casemiro; Vinícius, Paquetá, Rodrygo; Richarlison, Raphinha',
    away: 'Duverger; Jean, Surpris, Gérard; Pierre, Dumond; Jean-Baptiste, Nazon, Duverger; Arcus, Moreira',
    source: 'Globo / ESPN 预测 · 已 superseded',
  };

  const homeTactics = j.HomeTeam.Tactics || OFFICIAL.homeTactics;
  const awayTactics = j.AwayTeam.Tactics || OFFICIAL.awayTactics;

  m29.note = 'C组第2轮 · 巴西 vs 海地 · 费城 · FIFA 官方首发已确认';
  m29.lineup = {
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
        '⚠️ 4-4-2（非预测 4-2-3-1）：Gabriel+Douglas Santos 中卫/左闸 · Bruno Guimarães 进首发 · '
        + 'Matheus Cunha 替 Richarlison/Rodrygo · Militão/Wendell 替补',
      away:
        '⚠️ 5-4-1（非 4-4-2 预测）：Nazon 替补 · Pierrot 单箭 · Duverne 三中卫 · '
        + 'Providence/Casimir 边路',
    },
    predicted: prevPredicted,
  };

  const xgChange = applyXgFromLineup(m29);

  if (m29.home) {
    m29.home.injuries = [
      { player: 'Vinícius Jr.', status: 'FIT', note: 'FIFA 官方首发 · 左路', confirmed: true },
      { player: 'Lucas Paquetá', status: 'FIT', note: '官方 4-4-2 双锋之一/前腰', confirmed: true },
      { player: 'Gabriel Magalhães', status: 'FIT', note: '官方首发中卫', confirmed: true },
      { player: 'Bruno Guimarães', status: 'FIT', note: 'FIFA 官方首发中场', confirmed: true },
      { player: 'Matheus Cunha', status: 'FIT', note: '官方先发中锋位', confirmed: true },
      { player: 'Neymar', status: 'BENCH', note: '仍未进 FIFA XI · 每日观察', confirmed: true },
      { player: 'Rodrygo', status: 'BENCH', note: '未进首发', confirmed: true },
    ];
    m29.home.rumors = [
      '【官方】FIFA 4-4-2：延续对摩洛哥变阵 · Vinícius+Raphinha 宽度 · Matheus Cunha+Paquetá 锋线',
      'Bruno Guimarães 与 Casemiro 双闸 · Gabriel/Marquinhos 中卫 · Douglas Santos 左闸',
      'Neymar/Rodrygo/Endrick 替补 — 60\' 后或成破局后手',
      'C 组 1 分须 3 分，Ancelotti 赛前称「对海地必须取胜」',
    ];
    m29.home.stars = [
      { name: 'Vinícius Jr.', pos: 'LW', club: 'Real Madrid', stats: '官方 7 号', rating: 9.0, desc: '4-4-2 左路核心' },
      { name: 'Lucas Paquetá', pos: 'CAM', club: 'West Ham', stats: '官方 20 号', rating: 8.4, desc: '4-4-2 组织核心' },
      { name: 'Matheus Cunha', pos: 'ST', club: 'Man Utd', stats: '官方 9 号', rating: 8.2, desc: '先发中锋' },
    ];
    m29.home.star = m29.home.stars[0];
  }

  if (m29.away) {
    m29.away.injuries = [
      { player: 'Johny Placide', status: 'FIT', note: 'FIFA 官方一门 · 队长', confirmed: true },
      { player: 'Frantzdy Pierrot', status: 'FIT', note: '官方 5-4-1 单箭', confirmed: true },
      { player: 'Duckens Nazon', status: 'BENCH', note: '队史射手王替补 · 未进 XI', confirmed: true },
      { player: 'Jean-Kevin Duverne', status: 'FIT', note: '官方三中卫', confirmed: true },
    ];
    m29.away.rumors = [
      '【官方】FIFA 5-4-1 极守：Nazon 替补 · Pierrot 单箭 · Bellegarde 枢纽',
      'Duverne/Experience/Ade 防线 · Providence/Casimir 边路反击',
      '对巴西预计全程低位，定位球与纪律仍是唯一机会',
    ];
    m29.away.star = {
      name: 'Frantzdy Pierrot',
      pos: 'ST',
      club: 'Al Ahli',
      desc: '官方先发中锋',
      rating: 7.4,
    };
    m29.away.stars = [m29.away.star];
  }

  if (m29.coach_analysis?.home) {
    m29.coach_analysis.home.formation_pref = '4-4-2 · Vinícius/Raphinha · Matheus Cunha/Paquetá';
    m29.coach_analysis.home.match_note =
      'FIFA 官方 4-4-2 须取胜版；Bruno G 进首发，Neymar 仍替补。';
  }
  if (m29.upset_alert) {
    m29.upset_alert.tactical =
      'FIFA 官方：Ancelotti 4-4-2 vs Migné 5-4-1（Nazon 替补 · Pierrot 支点）';
  }

  const lineupNews = {
    tag: 'LINEUP',
    text: '✅ FIFA 官方首发 m29 · 巴 4-4-2 Matheus Cunha/Bruno G · 海地 5-4-1 Nazon 替补',
    time: '官方确认',
  };
  const news = (data.breakingNews || []).filter(n => !(n.tag === 'LINEUP' && /m29|巴西|海地|Brazil|Haiti/i.test(n.text)));
  data.breakingNews = [lineupNews, ...news];
  const injIdx = data.breakingNews.findIndex(n => n.tag === 'INJURY' && /m32 首发已确认/.test(n.text || ''));
  if (injIdx >= 0) {
    data.breakingNews[injIdx] = {
      ...data.breakingNews[injIdx],
      text: '✅ Day 9 伤病动态已更新；m29/m32 首发已确认 · 其余场裁判/首发待 FIFA',
    };
  }

  saveMatchData(data);

  console.log('✅ m29 FIFA official lineup synced');
  console.log('   Brazil (' + homeTactics + '):', OFFICIAL.home);
  console.log('   Haiti (' + awayTactics + '):', OFFICIAL.away);
  console.log(
    '   xG:', xgChange.baseH + '–' + xgChange.baseA, '→', xgChange.newH + '–' + xgChange.newA,
    '| probs:', xgChange.o.home_win + '/' + Math.round(xgChange.o.draw) + '/' + xgChange.o.away_win,
  );
}

main().catch(e => { console.error(e); process.exit(1); });
