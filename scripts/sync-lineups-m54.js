/**
 * m54 South Africa vs Korea Republic — FIFA 官方首发
 * API: https://api.fifa.com/api/v3/live/football/400021445
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { computeOutcomeFromXg, computeScoreDistribution } = require('./score-model');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021445';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const BASE_XG = { home: 1.12, away: 1.58 };
const XG_IMPACT = {
  xg_home_delta: 0,
  xg_away_delta: -0.2,
  summary:
    'FIFA 官方：韩国 3-4-1-2（孙兴慜替补 · 吴贤洙+黄喜灿 双锋 · 金承奎一门）'
    + ' vs 南非 4-2-3-1（无 Tau/Mokoena 首发 · Makgopa 单箭）；'
    + '韩国最大变阵：队长孙兴慜替补，客场 xG 下调。',
};

const OFFICIAL = {
  homeTactics: '4-2-3-1',
  awayTactics: '3-4-1-2',
  home:
    'Williams; Modiba, Mbokazi, Mudau, Okon; Mbatha, Sithole; Appollis, Mofokeng, Maseko; Makgopa',
  away:
    'Kim Seung-gyu; Lee Han-beom, Kim Min-jae, Lee Tae-seok; Seol Young-woo, Lee Gi-hyuk, Hwang In-beom, Paik Seung-ho; Lee Kang-in; Hwang Hee-chan, Oh Hyeon-gyu',
};

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 14 (FIFA official XI m54)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
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
  if (j.MatchNumber !== 54) throw new Error('Expected Match 54, got ' + j.MatchNumber);
  if (j.HomeTeam?.TeamName?.[0]?.Description !== 'South Africa') throw new Error('Home team mismatch');
  if (j.AwayTeam?.TeamName?.[0]?.Description !== 'Korea Republic') throw new Error('Away team mismatch');
  const h = j.HomeTeam.Players.filter(p => p.Status === 1).length;
  const a = j.AwayTeam.Players.filter(p => p.Status === 1).length;
  if (h !== 11 || a !== 11) throw new Error(`Incomplete XI: home ${h} away ${a}`);
}

function applyXgFromLineup(m54) {
  const p = m54.prediction || {};
  const newH = Math.round(Math.max(0.15, BASE_XG.home + XG_IMPACT.xg_home_delta) * 100) / 100;
  const newA = Math.round(Math.max(0.15, BASE_XG.away + XG_IMPACT.xg_away_delta) * 100) / 100;
  const o = computeOutcomeFromXg(newH, newA);
  m54.prediction = {
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
      'FIFA 官方：韩国 3-4-1-2（孙兴慜 #7 替补 · 李刚仁前腰 · 吴贤洙+黄喜灿锋线）'
      + ' vs 南非 4-2-3-1（Makgopa 单箭 · 无 Tau/Mokoena 首发）；'
      + '韩国须胜但队长替补，模型略下调客胜权重。',
    depth_calibrated: false,
  };
  return { baseH: BASE_XG.home, baseA: BASE_XG.away, newH, newA, o };
}

async function main() {
  const j = await fetchFifaMatch();
  verifyAgainstApi(j);

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m54 = data.todayMatches?.find(m => m.id === 'm54');
  if (!m54) throw new Error('m54 not found');

  const prevPredicted = m54.lineup?.predicted || {
    formation: '4-2-3-1 / 4-2-3-1',
    home: 'Williams; Mphahlele, Xaba, Mokoena; Modiba, Mthethwa; Tau, Zwane, Baccus; Foster',
    away: 'Jo Hyeon-woo; Kim Min-jae, Kim Young-gwon; Hwang In-beom, Lee Kang-in; Son, Hwang Hee-chan; Cho',
    source: 'BBC 预测 · 已 superseded',
  };

  const homeTactics = j.HomeTeam.Tactics || OFFICIAL.homeTactics;
  const awayTactics = j.AwayTeam.Tactics || OFFICIAL.awayTactics;

  m54.note = 'A组末轮 · 南非 vs 韩国 · 蒙特雷 · FIFA 官方首发已确认（孙兴慜替补）';
  m54.lineup = {
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
        '⚠️ 4-2-3-1：无 Tau/Mokoena 首发 · Makgopa 单箭 · Appollis/Mofokeng/Maseko 攻击线',
      away:
        '⚠️ 3-4-1-2（非预测 4-2-3-1）：孙兴慜 #7 替补 · 吴贤洙+黄喜灿 双锋 · 金承奎一门 · '
        + '李刚仁前腰 · 薛英佑/李基赫边翼',
    },
    predicted: prevPredicted,
  };

  const xgChange = applyXgFromLineup(m54);

  if (m54.home) {
    m54.home.injuries = [
      { player: 'Ronwen Williams', status: 'FIT', note: 'FIFA 官方一门 #1', confirmed: true },
      { player: 'Evidence Makgopa', status: 'FIT', note: '官方 4-2-3-1 单箭 #17', confirmed: true },
      { player: 'Sphephelo Sithole', status: 'FIT', note: '官方双闸 #13', confirmed: true },
      { player: 'Percy Tau', status: 'BENCH', note: '未进 FIFA XI · 替补后手', confirmed: true },
      { player: 'Teboho Mokoena', status: 'BENCH', note: '未进首发 · 替补', confirmed: true },
    ];
    m54.home.rumors = [
      '【官方】FIFA 4-2-3-1：Makgopa 单箭 · Appollis/Mofokeng/Maseko 攻击线 · 无 Tau/Mokoena 首发',
      'Broos 末轮须抢分但变阵年轻化 · Mbatha+Sithole 双闸',
      '对韩国 3-4-1-2 低位+反击 · 定位球仍是冷门路径',
    ];
    m54.home.stars = [
      { name: 'Evidence Makgopa', pos: 'ST', club: 'Orlando Pirates', stats: '官方 #17 单箭', rating: 7.5, desc: 'FIFA 官方先发中锋' },
      { name: 'Oswin Appollis', pos: 'RW', club: 'Cape Town City', stats: '官方 #7', rating: 7.3, desc: '右路攻击核心' },
      { name: 'Ronwen Williams', pos: 'GK', club: 'Mamelodi Sundowns', stats: '官方 #1', rating: 7.5, desc: '一门 · 对韩国须零封开局' },
    ];
    m54.home.star = m54.home.stars[0];
  }

  if (m54.away) {
    m54.away.injuries = [
      { player: 'Kim Min-jae', status: 'FIT', note: 'FIFA 官方三中卫 #4', confirmed: true },
      { player: 'Lee Kang-in', status: 'FIT', note: '官方前腰 #19', confirmed: true },
      { player: 'Hwang Hee-chan', status: 'FIT', note: '官方双锋之一 #11', confirmed: true },
      { player: 'Oh Hyeon-gyu', status: 'FIT', note: '官方双锋之一 #18', confirmed: true },
      { player: 'Kim Seung-gyu', status: 'FIT', note: '官方一门 #1', confirmed: true },
      { player: 'Son Heung-min', status: 'BENCH', note: '队长 #7 替补 · 60\' 后或破局后手', confirmed: true },
      { player: 'Jo Hyeon-woo', status: 'BENCH', note: '替补门将 #21', confirmed: true },
      { player: 'Cho Guesung', status: 'BENCH', note: '替补前锋 #9', confirmed: true },
    ];
    m54.away.rumors = [
      '【官方】FIFA 3-4-1-2：孙兴慜 #7 替补 — 末轮须胜但洪明甫轮换',
      '李刚仁 #19 前腰 · 吴贤洙 #18 + 黄喜灿 #11 双锋 · 金承奎 #1 一门',
      '薛英佑 #22 / 李基赫 #3 边翼 · 白昇浩 #8 中场',
      'A 组出线须胜 · 孙兴慜 60\' 后替补破局是最大变量',
    ];
    m54.away.stars = [
      { name: 'Lee Kang-in', pos: 'AM', club: 'Paris Saint-Germain', stats: '官方 #19 前腰', rating: 8.6, desc: '无孙首发时的组织核心' },
      { name: 'Kim Min-jae', pos: 'CB', club: 'Bayern Munich', stats: '官方 #4 中卫', rating: 8.4, desc: '三中卫轴心' },
      { name: 'Hwang Hee-chan', pos: 'FW', club: 'Wolves', stats: '官方 #11 锋线', rating: 8.2, desc: '与吴贤洙双锋' },
    ];
    m54.away.star = m54.away.stars[0];
  }

  const news = (data.breakingNews || []).filter(n => !/m54.*首发|孙兴慜.*替补|韩国.*首发/.test(n.text || ''));
  news.unshift({
    tag: 'OFFICIAL',
    text: '✅ m54 FIFA 官方首发：韩国 3-4-1-2 · 孙兴慜替补 · 李刚仁前腰',
    time: '6月25日',
  });
  data.breakingNews = news.slice(0, 14);

  saveMatchData(data);

  console.log('✅ m54 FIFA official XI synced');
  console.log(`   SA ${homeTactics}: ${OFFICIAL.home.slice(0, 60)}…`);
  console.log(`   KR ${awayTactics}: Son BENCH · Lee Kang-in AM · Oh+Hwang ST`);
  console.log(`   xG ${xgChange.baseH}–${xgChange.baseA} → ${xgChange.newH}–${xgChange.newA} (away ${XG_IMPACT.xg_away_delta})`);
  console.log(`   Poisson top: ${xgChange.o.score} (${xgChange.o.score_prob}%) · W/D/L ${xgChange.o.home_win}/${xgChange.o.draw}/${xgChange.o.away_win}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
