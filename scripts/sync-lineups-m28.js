/**
 * m28 Mexico vs Korea Republic — FIFA 官方首发
 * Source: https://www.fifa.com/en/match-centre/match/17/285023/289273/400021442
 * API: https://api.fifa.com/api/v3/live/football/400021442
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021442';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 8 (FIFA official XI m28)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
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

function fmtName(p) {
  const d = p.PlayerName?.[0]?.Description || p.ShortName?.[0]?.Description || '';
  return d.split(' ').map((w, i) => (i === 0 ? w.charAt(0) + w.slice(1).toLowerCase() : w)).join(' ')
    .replace('Alvarez', 'Álvarez')
    .replace('Jesus', 'Jesús')
    .replace('Seunggyu', 'Seung-gyu')
    .replace('Hanbeom', 'Han-beom')
    .replace('Minjae', 'Min-jae')
    .replace('Gihyuk', 'Gi-hyuk')
    .replace('Inbeom', 'In-beom')
    .replace('Seungho', 'Seung-ho')
    .replace('Jaesung', 'Jae-sung')
    .replace('Heungmin', 'Heung-min')
    .replace('Youngwoo', 'Young-woo')
    .replace('Moonhwan', 'Moon-hwan')
    .replace('Kangin', 'Kang-in')
    .replace('Jimenez', 'Jiménez')
    .replace('Quinones', 'Quiñones')
    .replace('Gutierrez', 'Gutiérrez');
}

const OFFICIAL = {
  homeTactics: '4-1-2-3',
  awayTactics: '3-4-3',
  home: 'Rangel; Sánchez, Álvarez, Vásquez, Gallardo; Lira; Romo, Gutiérrez; Jiménez, Quiñones, Alvarado',
  away: 'Kim Seung-gyu; Lee Han-beom, Kim Min-jae, Kim Moon-hwan; Seol Young-woo, Hwang In-beom, Paik Seung-ho, Lee Gi-hyuk; Lee Jae-sung, Son Heung-min, Lee Kang-in',
};

function verifyAgainstApi(home, away) {
  const homeNums = new Set(home.Players.filter(p => p.Status === 1).map(p => p.ShirtNumber));
  const awayNums = new Set(away.Players.filter(p => p.Status === 1).map(p => p.ShirtNumber));
  const expectedHome = new Set([1, 2, 4, 5, 6, 7, 9, 16, 23, 25, 26]);
  const expectedAway = new Set([1, 2, 3, 4, 6, 7, 8, 10, 15, 19, 22]);
  for (const n of expectedHome) if (!homeNums.has(n)) throw new Error('Mexico starter #' + n + ' missing from FIFA API');
  for (const n of expectedAway) if (!awayNums.has(n)) throw new Error('Korea starter #' + n + ' missing from FIFA API');
  if (home.Tactics !== OFFICIAL.homeTactics) console.warn('⚠ Mexico tactics:', home.Tactics);
  if (away.Tactics !== OFFICIAL.awayTactics) console.warn('⚠ Korea tactics:', away.Tactics);
}

async function main() {
  const j = await fetchFifaMatch();
  verifyAgainstApi(j.HomeTeam, j.AwayTeam);
  const homeTactics = j.HomeTeam.Tactics || OFFICIAL.homeTactics;
  const awayTactics = j.AwayTeam.Tactics || OFFICIAL.awayTactics;
  const homeXi = OFFICIAL.home;
  const awayXi = OFFICIAL.away;

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m28 = data.todayMatches?.find(m => m.id === 'm28');
  if (!m28) throw new Error('m28 not found');

  const prevPredicted = m28.lineup?.predicted || {
    formation: '4-3-3 / 3-4-2-1',
    home: m28.lineup?.predicted?.home || '',
    away: m28.lineup?.predicted?.away || '',
    source: 'Sporting News 预测 · 已 superseded',
  };

  m28.note = 'A组榜首战 · 墨西哥 vs 韩国 · FIFA 官方首发已确认';
  m28.lineup = {
    confirmed: true,
    formation: `${homeTactics} / ${awayTactics}`,
    home: homeXi,
    away: awayXi,
    note: `✅ FIFA 官方 team sheet（Match ${j.MatchNumber} · ${FIFA_MATCH_ID} · ${TS}）`,
    source: 'FIFA Match Centre · api.fifa.com',
    updated: TS,
    fifa_match_id: FIFA_MATCH_ID,
    diff: {
      home: '⚠️ 4-1-2-3（非预测 4-3-3）：Sánchez 替 Reyes · Romo 替 Fidalgo · Lira 单后腰 · Mora/Fidalgo 替补',
      away: '⚠️ 3-4-3（非预测 3-4-2-1）：Kim Moon-hwan 进首发 · Lee Gi-hyuk 推前 · Lee Tae-seok 替补 · 孙兴慜+李在城+李康仁 三叉戟',
    },
    predicted: prevPredicted,
  };

  if (m28.prediction) {
    m28.prediction.key_factor =
      'FIFA 官方：墨 4-1-2-3（Álvarez 队长/Sánchez/Romo）vs 韩 3-4-3（Moon-hwan 变阵 · 孙兴慜+李在城+李康仁）；A组榜首战 · 泊松基准 2-1/1-1';
  }

  if (m28.home) {
    m28.home.injuries = [
      { player: 'Raúl Jiménez', status: 'FIT', note: '官方首发中锋', confirmed: true },
      { player: 'César Montes', status: 'OUT', note: '停赛 · Álvarez 队长顶中卫', confirmed: true },
      { player: 'Julián Quiñones', status: 'FIT', note: '官方首发左翼', confirmed: true },
      { player: 'Israel Reyes', status: 'BENCH', note: 'Sánchez 顶替首发右闸', confirmed: true },
      { player: 'Gilberto Mora', status: 'BENCH', note: '未进首发，Romo 中场', confirmed: true },
    ];
    m28.home.rumors = [
      '【官方】FIFA 4-1-2-3：Lira 单后腰 · Romo+Gutiérrez 双 8 · Jiménez 居中 Quiñones/Alvarado 两翼',
      'Álvarez 佩戴队长袖标 · Montes 停赛后 Sánchez 右闸',
    ];
    m28.home.stars = [
      { name: 'Raúl Jiménez', pos: 'ST', club: 'Fulham', stats: '官方 9 号', rating: 8.4, desc: '4-1-2-3 单箭头' },
      { name: 'Edson Álvarez', pos: 'CB', club: 'Fenerbahçe', stats: '队长', rating: 8.0, desc: 'Montes 停赛搭档 Vásquez' },
      { name: 'Julián Quiñones', pos: 'LW', club: 'Al Qadisah', stats: '官方 16 号', rating: 8.2, desc: '左翼对位 Seol' },
    ];
  }

  if (m28.away) {
    m28.away.injuries = [
      { player: '孙兴慜 Son Heung-min', status: 'FIT', note: '队长 · 3-4-3 中锋', confirmed: true },
      { player: '李康仁 Lee Kang-in', status: 'FIT', note: '官方首发 · 右翼', confirmed: true },
      { player: '李在城 Lee Jae-sung', status: 'FIT', note: '官方首发 · 左翼', confirmed: true },
      { player: 'Lee Tae-seok', status: 'BENCH', note: '对捷克首发 · 本场替补', confirmed: true },
      { player: 'Kim Moon-hwan', status: 'FIT', note: '顶替 Lee Tae-seok 进三中卫', confirmed: true },
    ];
    m28.away.rumors = [
      '【官方】FIFA 3-4-3：Moon-hwan 变阵 · Gi-hyuk 推前 · 孙兴慜+李在城+李康仁 三叉戟（非赢捷克 3-4-2-1）',
      'Seol Young-woo 左翼卫 · Hwang In-beom 屏障',
    ];
    m28.away.stars = [
      { name: '孙兴慜 Son Heung-min', pos: 'ST', club: 'LAFC', stats: '队长 · 7 号', rating: 8.8, desc: '3-4-3 中锋' },
      { name: '李康仁 Lee Kang-in', pos: 'RW', club: 'PSG', stats: '官方 19 号', rating: 8.4, desc: '三叉戟右翼' },
      { name: 'Kim Min-jae', pos: 'CB', club: 'Bayern Munich', stats: '官方 4 号', rating: 8.2, desc: '三中卫核心' },
    ];
  }

  if (m28.upset_alert) {
    m28.upset_alert.tactical = 'FIFA 官方：Aguirre 4-1-2-3 vs 洪明甫 3-4-3（Moon-hwan 变阵 · 三叉戟）';
    m28.upset_alert.verdict = 'A组榜首战——韩国变 3-4-3 强攻，孙兴慜+李在城+李康仁 对位墨西哥五后卫体系，平局仍约 28%。';
  }

  const lineupNews = {
    tag: 'LINEUP',
    text: '✅ FIFA 官方首发 · 墨 4-1-2-3 Sánchez/Romo · 韩 3-4-3 Moon-hwan 变阵 孙兴慜+李在城+李康仁',
    time: '官方确认',
  };
  const news = (data.breakingNews || []).filter(n => !(n.tag === 'LINEUP' && /墨西哥|韩国|m28/i.test(n.text)));
  data.breakingNews = [lineupNews, ...news];

  saveMatchData(data);
  console.log('✅ m28 FIFA official lineup synced');
  console.log('   Mexico (' + homeTactics + '):', homeXi);
  console.log('   Korea (' + awayTactics + '):', awayXi);
}

main().catch(e => { console.error(e); process.exit(1); });
