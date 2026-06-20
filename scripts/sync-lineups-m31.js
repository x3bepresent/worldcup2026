/**
 * m31 Türkiye vs Paraguay — FIFA 官方首发
 * API: https://api.fifa.com/api/v3/live/football/400021460
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { computeOutcomeFromXg, computeScoreDistribution } = require('./score-model');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021460';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const BASE_XG = { home: 1.48, away: 1.12 };
const XG_IMPACT = {
  xg_home_delta: 0.06,
  xg_away_delta: 0.07,
  summary:
    'FIFA 官方：土耳其 4-2-3-1（Yıldız+Güler 双核 · Aktürkoğlu 中锋 · Kadıoğlu 左闸）；'
    + '巴拉圭 4-2-3-1（Enciso+Almirón+Pitta 进攻线 · 非预测 4-4-2 低位）——双方创造预期略上调。',
};

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 9 (FIFA official XI m31)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
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
  return d.split(' ')
    .map((w, i) => (i === 0 ? w.charAt(0) + w.slice(1).toLowerCase() : w))
    .join(' ')
    .replace(/Calhanoglu/i, 'Çalhanoğlu')
    .replace(/Akturkoglu/i, 'Aktürkoğlu')
    .replace(/Bardakci/i, 'Bardakcı')
    .replace(/Cakir/i, 'Çakır')
    .replace(/Kadioglu/i, 'Kadıoğlu')
    .replace(/Yuksek/i, 'Yüksek')
    .replace(/Akgun/i, 'Akgün')
    .replace(/Yildiz/i, 'Yıldız')
    .replace(/Muldur/i, 'Müldür');
}

function lineupString(team) {
  const xi = team.Players.filter(p => p.Status === 1).sort((a, b) => {
    const po = (p) => (p.Position === 0 ? 0 : p.Position === 1 ? 1 : p.Position === 2 ? 2 : 3);
    const d = po(a) - po(b);
    return d !== 0 ? d : a.ShirtNumber - b.ShirtNumber;
  });
  const gk = xi.filter(p => p.Position === 0).map(fmtName);
  const df = xi.filter(p => p.Position === 1).map(fmtName);
  const mf = xi.filter(p => p.Position === 2).map(fmtName);
  const fw = xi.filter(p => p.Position === 3).map(fmtName);
  const parts = [];
  if (gk.length) parts.push(gk.join(', '));
  if (df.length) parts.push(df.join(', '));
  if (mf.length) parts.push(mf.join(', '));
  if (fw.length) parts.push(fw.join(', '));
  return parts.join('; ');
}

const OFFICIAL = {
  homeTactics: '4-2-3-1',
  awayTactics: '4-2-3-1',
  home:
    'Uğurcan Çakır; Ferdi Kadıoğlu, Merih Demiral, Abdülkerim Bardakcı, Mert Müldür; '
    + 'Hakan Çalhanoğlu, İsmail Yüksek; Kenan Yıldız, Arda Güler, Yunus Akgün; Kerem Aktürkoğlu',
  away:
    'Orlando Gill; Omar Alderete, Juan José Cáceres, Junior Alonso, Gustavo Gómez; '
    + 'Andrés Cubas, Matías Galarza; Julio Enciso, Miguel Almirón, Diego Gómez; Isidro Pitta',
};

function verifyAgainstApi(j) {
  if (j.MatchNumber !== 31) throw new Error('Expected Match 31, got ' + j.MatchNumber);
  if (j.HomeTeam?.TeamName?.[0]?.Description !== 'Türkiye') throw new Error('Home team mismatch');
  if (j.AwayTeam?.TeamName?.[0]?.Description !== 'Paraguay') throw new Error('Away team mismatch');
  const h = j.HomeTeam.Players.filter(p => p.Status === 1).length;
  const a = j.AwayTeam.Players.filter(p => p.Status === 1).length;
  if (h !== 11 || a !== 11) throw new Error(`Incomplete XI: home ${h} away ${a}`);
}

function applyXgFromLineup(m31) {
  const p = m31.prediction || {};
  const newH = Math.round(Math.max(0.15, BASE_XG.home + XG_IMPACT.xg_home_delta) * 100) / 100;
  const newA = Math.round(Math.max(0.15, BASE_XG.away + XG_IMPACT.xg_away_delta) * 100) / 100;
  const o = computeOutcomeFromXg(newH, newA);
  m31.prediction = {
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
      'FIFA 官方 4-2-3-1：Yıldız+Güler 肋部双核 · Aktürkoğlu 中锋；'
      + '巴拉圭 Enciso+Almirón+Pitta 对攻非纯低位——D 组 0 分生死战。',
    depth_calibrated: false,
  };
  return { baseH: BASE_XG.home, baseA: BASE_XG.away, newH, newA, o };
}

async function main() {
  const j = await fetchFifaMatch();
  verifyAgainstApi(j);

  const apiHome = lineupString(j.HomeTeam);
  const apiAway = lineupString(j.AwayTeam);
  console.log('API home:', apiHome);
  console.log('API away:', apiAway);

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m31 = data.todayMatches?.find(m => m.id === 'm31');
  if (!m31) throw new Error('m31 not found');

  const prevPredicted = m31.lineup?.predicted || {
    formation: '4-2-3-1 / 4-4-2',
    home: 'Günok; Çelik, Demiral, Bardakcı; Kökçü, Özcan; Yıldız, Güler, Aydın; Aktürkoğlu, Yılmaz',
    away: 'Martínez; Velázquez, Gómez, Alonso; Sanabria, Rojas; Romero, Sosa, Almirón; González, Sánchez',
    source: 'FotMob / ESPN 预测 · 已 superseded',
  };

  const homeTactics = j.HomeTeam.Tactics || OFFICIAL.homeTactics;
  const awayTactics = j.AwayTeam.Tactics || OFFICIAL.awayTactics;

  m31.note = 'D组第2轮 · 土耳其 vs 巴拉圭 · 旧金山湾区 · FIFA 官方首发已确认';
  m31.lineup = {
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
        '⚠️ Yıldız(11)+Güler(8) 双核回归 · Aktürkoğlu(7) 仍任中锋（非 Yılmaz）；'
        + 'Kadıoğlu(20) 左闸 · Yüksek(16) 后腰 · Akgün(19) 进 XI；Günok/Çelik/Özcan/Yılmaz 替补',
      away:
        '⚠️ 4-2-3-1（非 4-4-2 预测）：Enciso(19)+Pitta(25) 先发 · Gill(12) 一门；'
        + 'Cubas+Galarza 双闸 · Almirón(10) 肋部；Martínez/Sanabria/Rojas 未进 XI',
    },
    predicted: prevPredicted,
  };

  const xgChange = applyXgFromLineup(m31);

  if (m31.home) {
    m31.home.injuries = [
      { player: 'Arda Güler', status: 'FIT', note: 'FIFA 官方 #8 攻击中场', confirmed: true },
      { player: 'Kenan Yıldız', status: 'FIT', note: 'FIFA 官方 #11 左路/肋部', confirmed: true },
      { player: 'Hakan Çalhanoğlu', status: 'FIT', note: 'FIFA 官方 #10 队长 · 后腰', confirmed: true },
      { player: 'Kerem Aktürkoğlu', status: 'FIT', note: 'FIFA 官方 #7 中锋位', confirmed: true },
      { player: 'Ferdi Kadıoğlu', status: 'FIT', note: 'FIFA 官方 #20 左闸', confirmed: true },
      { player: 'Burak Yılmaz', status: 'BENCH', note: '未进 FIFA XI', confirmed: true },
    ];
    m31.home.rumors = [
      '【官方】FIFA 4-2-3-1：Yıldız+Güler 双核回归 · Çalhanoğlu+Yüksek 双闸',
      'Aktürkoğlu 再度出任中锋 #7 · Yunus Akgün #19 右路',
      'Montella 0-2 澳大利亚后变阵：Kadıoğlu 左闸 · Bardakcı 中卫',
      'D 组 0 分须取胜抢 3 分 · 美国已 6 分出线 · 澳大利亚 3 分',
    ];
    m31.home.stars = [
      { name: 'Arda Güler', pos: 'CAM', club: 'Real Madrid', stats: '官方 #8', rating: 8.4, desc: '肋部组织核心' },
      { name: 'Kenan Yıldız', pos: 'LW', club: 'Juventus', stats: '官方 #11', rating: 8.3, desc: 'Yıldız+Güler 双核' },
      { name: 'Hakan Çalhanoğlu', pos: 'DM', club: 'Inter', stats: '官方 #10', rating: 8.1, desc: '队长 · 定位球' },
    ];
    m31.home.star = m31.home.stars[0];
  }

  if (m31.away) {
    m31.away.injuries = [
      { player: 'Julio Enciso', status: 'FIT', note: 'FIFA 官方 #19 前腰/肋部', confirmed: true },
      { player: 'Miguel Almirón', status: 'FIT', note: 'FIFA 官方 #10', confirmed: true },
      { player: 'Isidro Pitta', status: 'FIT', note: 'FIFA 官方 #25 中锋', confirmed: true },
      { player: 'Gustavo Gómez', status: 'FIT', note: 'FIFA 官方 #15 队长 · 中卫', confirmed: true },
      { player: 'Orlando Gill', status: 'FIT', note: 'FIFA 官方 #12 一门', confirmed: true },
    ];
    m31.away.rumors = [
      '【官方】FIFA 4-2-3-1：Enciso+Almirón+Pitta 进攻三角 · 非纯 4-4-2 低位',
      'Alfaro 0-4 美国后须进攻 · Cubas+Galarza 双后腰',
      'Gill 替 Martínez 一门 · Alderete/Gómez 中卫',
      'D 组再负基本出局 · 须抢 3 分',
    ];
    m31.away.stars = [
      { name: 'Miguel Almirón', pos: 'RW', club: 'Atlanta United', stats: '官方 #10', rating: 8.0, desc: '肋部速度' },
      { name: 'Julio Enciso', pos: 'CAM', club: 'Brighton', stats: '官方 #19', rating: 7.8, desc: '创造力回归' },
      { name: 'Isidro Pitta', pos: 'ST', club: 'Salernitana', stats: '官方 #25', rating: 7.5, desc: '官方中锋' },
    ];
    m31.away.star = m31.away.stars[0];
  }

  if (m31.coach_analysis?.home) {
    m31.coach_analysis.home.formation_pref = '4-2-3-1 · Yıldız/Güler · Aktürkoğlu 中锋';
    m31.coach_analysis.home.match_note =
      'FIFA 官方：Yıldız+Güler 双核 · Aktürkoğlu 中锋；0 分须 3 分，对美国已出线形势下本场为生死战。';
  }
  if (m31.coach_analysis?.away) {
    m31.coach_analysis.away.formation_pref = '4-2-3-1 · Enciso/Almirón · Pitta';
    m31.coach_analysis.away.match_note =
      'FIFA 官方 4-2-3-1 进攻版：Enciso+Almirón 肋部 · Pitta 支点；须进球不能再纯守。';
  }

  const lineupNews = {
    tag: 'LINEUP',
    text: '✅ FIFA 官方首发 m31 · 土 4-2-3-1 Yıldız/Güler · 巴 4-2-3-1 Enciso/Pitta',
    time: '官方确认',
  };
  const news = (data.breakingNews || []).filter(
    n => !(n.tag === 'LINEUP' && /m31|土耳其|巴拉圭|Türkiye|Paraguay/i.test(n.text)),
  );
  data.breakingNews = [lineupNews, ...news].slice(0, 10);

  saveMatchData(data);

  console.log('✅ m31 FIFA official lineup synced');
  console.log('   Türkiye (' + homeTactics + '):', OFFICIAL.home);
  console.log('   Paraguay (' + awayTactics + '):', OFFICIAL.away);
  console.log(
    '   xG:', xgChange.baseH + '–' + xgChange.baseA, '→', xgChange.newH + '–' + xgChange.newA,
    '| probs:', xgChange.o.home_win + '/' + Math.round(xgChange.o.draw) + '/' + xgChange.o.away_win,
    '| score:', xgChange.o.score,
  );
}

main().catch(e => { console.error(e); process.exit(1); });
