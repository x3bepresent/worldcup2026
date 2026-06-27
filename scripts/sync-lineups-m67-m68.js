/**
 * m67 Panama vs England · m68 Croatia vs Ghana — FIFA 官方首发（05:00 北京）
 * Run: node scripts/sync-lineups-m67-m68.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { computeOutcomeFromXg, computeScoreDistribution } = require('./score-model');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const MATCHES = {
  m67: {
    fifaId: '400021508',
    baseXg: { home: 0.68, away: 2.08 },
    impact: {
      xg_home_delta: 0,
      xg_away_delta: -0.18,
      summary:
        '英格兰 FIFA 官方 5 处轮换（Rice/Foden/Walker-Stones 等替补）；Kane+Bellingham+Saka+Rashford+Rogers 仍在。'
        + '中场控场降档 → 客队 xG 下调，深盘穿盘难度维持偏高。',
    },
    official: {
      homeTactics: '5-4-1',
      awayTactics: '4-2-3-1',
      home:
        'Orlando Mosquera; Amir Murillo, José Córdoba, Fidel Escobar, Andrés Andrade, Cristian Martínez; '
        + 'Carlos Harvey, Edgar Bárcenas, José Luis Rodríguez, Tomás Rodríguez; Jorge Gutiérrez',
      away:
        'Jordan Pickford; Jarell Quansah, Ezri Konsa, Marc Guéhi, Nico O\'Reilly; '
        + 'Elliot Anderson, Jude Bellingham; Bukayo Saka, Morgan Rogers, Marcus Rashford; Harry Kane',
    },
    diff: {
      home:
        '⚠️ Fajardo 替补 · Gutiérrez(26) 突前；Murillo+Córdoba 中卫 · 维持 5-4-1 铁桶',
      away:
        '⚠️ 5 处轮换：Quansah/O\'Reilly/Anderson/Rogers/Rashford 进 XI；'
        + 'Rice(4)·Mainoo(16)·Foden 未进 · Stones(5) 替补 · James 伤缺',
    },
    keyFactor:
      'L组末轮 · 巴拿马 5-4-1 铁桶 vs 英格兰官方 5 轮换 4-2-3-1 · Rice/Foden 替补 · 深盘穿盘仍难',
  },
  m68: {
    fifaId: '400021509',
    baseXg: { home: 1.42, away: 1.38 },
    impact: {
      xg_home_delta: -0.06,
      xg_away_delta: -0.12,
      summary:
        '克罗地亚 Gvardiol·Brozović·Kramarić 未进 XI（Budimir 中锋 · Kovačić 搭档 Modrić）；'
        + '加纳 Kudus 替补 · Asare 一门 · 4-1-2-3 偏守。双方进攻点轮换，总 xG 略降。',
    },
    official: {
      homeTactics: '4-2-3-1',
      awayTactics: '4-1-2-3',
      home:
        'Dominik Livaković; Josip Stanisic, Marin Pongračić, Josip Šutalo; '
        + 'Mateo Kovačić, Luka Modrić; Ivan Perišić, Martin Baturina, Nikola Vlašić, Petar Šušić; Ante Budimir',
      away:
        'Benjamin Asare; Gideon Mensah, Jonas Adjetey, Derrick Luckassen, Marvin Senaya; Thomas Partey; '
        + 'Kwasi Sibo, Elisha Owusu; Antoine Semenyo, Jordan Ayew, Kamaldeen Sulemana',
    },
    diff: {
      home:
        '⚠️ Gvardiol·Brozović·Kramarić 替补；Budimir(11) 先发 · Vlašić+Baturina 肋部 · 须胜 3 分',
      away:
        '⚠️ Kudus 未进 XI · Asare(16) 替 Ati-Zigi；Partey 单后腰 4-1-2-3 · 4 分可平出线',
    },
    keyFactor:
      'L组 · 加纳 4 分 vs 克罗地亚须胜 · 官方：Gvardiol/Kudus 轮换 · Modrić vs Partey · 泊松 1-1/1-0',
  },
};

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 17 (FIFA official XI m67–m68)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
  );
}

function fetchFifaMatch(id) {
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

function verifyXi(j, cfg) {
  const h = j.HomeTeam?.Players?.filter(p => p.Status === 1).length || 0;
  const a = j.AwayTeam?.Players?.filter(p => p.Status === 1).length || 0;
  if (h !== 11 || a !== 11) throw new Error(`${j.MatchNumber}: incomplete XI home ${h} away ${a}`);
}

function applyXg(match, cfg) {
  const p = match.prediction || {};
  const { baseXg, impact, keyFactor } = cfg;
  const newH = Math.round(Math.max(0.15, baseXg.home + impact.xg_home_delta) * 100) / 100;
  const newA = Math.round(Math.max(0.15, baseXg.away + impact.xg_away_delta) * 100) / 100;
  const o = computeOutcomeFromXg(newH, newA);
  match.prediction = {
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
    key_factor: keyFactor,
    depth_calibrated: false,
  };
  return { newH, newA, o };
}

async function syncOne(data, id, cfg) {
  const j = await fetchFifaMatch(cfg.fifaId);
  verifyXi(j, cfg);
  const m = data.todayMatches?.find(x => x.id === id);
  if (!m) throw new Error(`${id} not found`);

  const prevPredicted = m.lineup?.predicted || m.lineup;
  const homeTactics = j.HomeTeam?.Tactics || cfg.official.homeTactics;
  const awayTactics = j.AwayTeam?.Tactics || cfg.official.awayTactics;

  m.note = m.note.replace(/等待官方|预测/, 'FIFA 官方首发') + ' · FIFA 官方首发已确认';
  if (!m.note.includes('FIFA')) m.note += ' · FIFA 官方首发已确认';

  m.lineup = {
    confirmed: true,
    formation: `${homeTactics} / ${awayTactics}`,
    home: cfg.official.home,
    away: cfg.official.away,
    note: `✅ FIFA 官方 team sheet（Match ${j.MatchNumber} · ${cfg.fifaId} · ${TS}）`,
    source: 'FIFA Match Centre · api.fifa.com',
    updated: TS,
    fifa_match_id: cfg.fifaId,
    impact: {
      ...cfg.impact,
      xg_home_before: cfg.baseXg.home,
      xg_away_before: cfg.baseXg.away,
    },
    diff: cfg.diff,
    predicted: prevPredicted?.predicted || prevPredicted,
  };

  const xg = applyXg(m, cfg);

  if (id === 'm67') {
    m.away.injuries = [
      { player: 'Reece James', status: 'OUT', note: '伤缺 · Quansah 替右闸', confirmed: true },
      { player: 'Jude Bellingham', status: 'FIT', note: 'FIFA 官方 #10 先发', confirmed: true },
      { player: 'Harry Kane', status: 'FIT', note: 'FIFA 官方 #9 队长', confirmed: true },
      { player: 'Declan Rice', status: 'BENCH', note: 'FIFA 官方替补 #4 · 5 轮换', confirmed: true },
      { player: 'John Stones', status: 'BENCH', note: 'FIFA 官方替补 #5', confirmed: true },
    ];
    m.away.rumors = [
      '【官方】Tuchel 5 处轮换：Rice·Mainoo·Foden·Gordon·Madueke 替补',
      'Quansah 世界杯首秀 · Saka+Rashford+Rogers 进攻线',
      '4 分争头名 · 赢球锁 L 组第一',
    ];
    m.home.rumors = [
      '【官方】5-4-1 铁桶 · Gutiérrez 替 Fajardo 突前',
      '0 分已出局 · Murillo+Córdoba 防线',
    ];
  }

  if (id === 'm68') {
    m.home.injuries = [
      { player: 'Joško Gvardiol', status: 'BENCH', note: 'FIFA 未进 XI · Pongračić+Šutalo 中卫', confirmed: true },
      { player: 'Luka Modrić', status: 'FIT', note: 'FIFA 官方 #10 · 200 场里程碑', confirmed: true },
    ];
    m.home.rumors = [
      '【官方】Gvardiol·Brozović·Kramarić 轮换 · Budimir 先发中锋',
      '克罗地亚 3 分须胜抢榜首',
    ];
    m.away.injuries = [
      { player: 'Mohammed Kudus', status: 'BENCH', note: 'FIFA 未进 XI · Sulemana+Semenyo 边路', confirmed: true },
      { player: 'Thomas Partey', status: 'FIT', note: 'FIFA 官方单后腰 #5', confirmed: true },
    ];
    m.away.rumors = [
      '【官方】Kudus 替补 · Asare 一门 · 4-1-2-3 可接受平局',
      '加纳 4 分领跑 · 平局仍保出线主动权',
    ];
  }

  if (m.prediction?.insight_factors) {
    const tac = m.prediction.insight_factors.find(f => f.label === '战术与阵容');
    if (tac) tac.text = cfg.keyFactor;
  }

  console.log(`✅ ${id} FIFA XI · xG ${xg.newH}–${xg.newA} (was ${cfg.baseXg.home}–${cfg.baseXg.away}) · ${xg.o.score} ${xg.o.home_win}/${Math.round(xg.o.draw)}/${xg.o.away_win}`);
  return xg;
}

async function main() {
  const data = loadMatchData();
  data.lastUpdated = TS;
  data.syncSource = 'FIFA 官方首发 m67–m68 · Day 17';

  for (const [id, cfg] of Object.entries(MATCHES)) {
    await syncOne(data, id, cfg);
  }

  saveMatchData(data);
  console.log('📝 matches-data.js updated');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
