/**
 * m32 USA vs Australia — FIFA 官方首发
 * Source: https://www.fifa.com/en/match-centre/match/17/285023/289273/400021462
 * API: https://api.fifa.com/api/v3/live/football/400021462
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { computeOutcomeFromXg, computeScoreDistribution } = require('./score-model');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const FIFA_MATCH_ID = '400021462';
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

/** 相对媒体预测 xG 调整（Pulisic 等核心替补 + 澳 5-4-1 极守） */
const BASE_XG = { home: 1.68, away: 0.92 };
const XG_IMPACT = {
  xg_home_delta: -0.25,
  xg_away_delta: -0.14,
  summary:
    'FIFA 官方：美国 4-2-3-1 无 Pulisic/Turner（Freese 一门 · Freeman/Tillman/Pepi 青春线）；'
    + '澳大利亚 5-4-1 极守（Beach · Irvine 替补）——主队创造预期下调、平局权重上升。',
};

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 9 (FIFA official XI m32)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
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
    .replace(/Mc([a-z])/g, (_, c) => 'Mc' + c.toUpperCase())
    .replace("O'neill", "O'Neill")
    .replace('Okon-engstler', 'Okon-Engstler');
}

function xiString(team) {
  const starters = team.Players.filter(p => p.Status === 1)
    .sort((a, b) => {
      const po = (p) => (p.Position === 0 ? 0 : p.Position === 1 ? 1 : p.Position === 2 ? 2 : 3);
      const d = po(a) - po(b);
      return d !== 0 ? d : a.ShirtNumber - b.ShirtNumber;
    });
  return starters.map(p => fmtName(p)).join(', ');
}

const OFFICIAL = {
  homeTactics: '4-2-3-1',
  awayTactics: '5-4-1',
  home: 'Freese; Dest, Richards, Ream, Robinson; Adams, McKennie; Freeman, Tillman, Pepi; Balogun',
  away: 'Beach; Circati, Italiano, Souttar, Burgess, Bos; O\'Neill, Okon-Engstler, Leckie, Toure; Velupillay',
};

function verifyAgainstApi(j) {
  const home = j.HomeTeam;
  const away = j.AwayTeam;
  if (j.MatchNumber !== 32) throw new Error('Expected Match 32, got ' + j.MatchNumber);
  if (home.TeamName?.[0]?.Description !== 'USA') throw new Error('Home team mismatch');
  if (away.TeamName?.[0]?.Description !== 'Australia') throw new Error('Away team mismatch');
  const homeStarters = home.Players.filter(p => p.Status === 1).length;
  const awayStarters = away.Players.filter(p => p.Status === 1).length;
  if (homeStarters !== 11 || awayStarters !== 11) {
    throw new Error(`Incomplete XI: home ${homeStarters} away ${awayStarters}`);
  }
  if (home.Tactics !== OFFICIAL.homeTactics) console.warn('⚠ USA tactics:', home.Tactics);
  if (away.Tactics !== OFFICIAL.awayTactics) console.warn('⚠ Australia tactics:', away.Tactics);
}

function applyXgFromLineup(m32) {
  const p = m32.prediction || {};
  const newH = Math.round(Math.max(0.15, BASE_XG.home + XG_IMPACT.xg_home_delta) * 100) / 100;
  const newA = Math.round(Math.max(0.15, BASE_XG.away + XG_IMPACT.xg_away_delta) * 100) / 100;
  const o = computeOutcomeFromXg(newH, newA);
  m32.prediction = {
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
      'FIFA 官方：美国 4-2-3-1（Freese 一门 · 无 Pulisic 首发 · Freeman/Tillman/Pepi）'
      + ' vs 澳大利亚 5-4-1 极守；创造预期下调，平局与小胜 1-0 仍为主路径。',
    depth_calibrated: false,
  };
  return { baseH: BASE_XG.home, baseA: BASE_XG.away, newH, newA, o };
}

async function main() {
  const j = await fetchFifaMatch();
  verifyAgainstApi(j);

  const data = loadMatchData();
  data.lastUpdated = TS;

  const m32 = data.todayMatches?.find(m => m.id === 'm32');
  if (!m32) throw new Error('m32 not found');

  const prevPredicted = m32.lineup?.predicted || {
    formation: '4-3-3 / 4-2-3-1',
    home: 'Turner; Dest, Ream, Robinson; Adams, Musah; Pulisic, McKennie, Reyna; Balogun, Weah',
    away: 'Ryan; Atkinson, Souttar, Bos; Irvine, Irvine; Goodwin, Irvine, Boyle; Maclaren, Leckie',
    source: 'ESPN / Fox 预测 · 已 superseded',
  };

  const homeTactics = j.HomeTeam.Tactics || OFFICIAL.homeTactics;
  const awayTactics = j.AwayTeam.Tactics || OFFICIAL.awayTactics;

  m32.note = 'D组第2轮 · 美国 vs 澳大利亚 · 西雅图 · FIFA 官方首发已确认';
  m32.lineup = {
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
        '⚠️ 4-2-3-1（非预测 4-3-3）：Freese 替 Turner 一门 · Pulisic/Reyna/Weah/Musah 替补 · '
        + 'Freeman+Tillman+Pepi 青春三叉 · Richards 中卫',
      away:
        '⚠️ 5-4-1（非预测 4-2-3-1）：Beach 一门 · Irvine/MacLaren 替补 · '
        + 'Circati/Italiano/Toure/Velupillay 年轻化 · Popovic 极守',
    },
    predicted: prevPredicted,
  };

  const xgChange = applyXgFromLineup(m32);

  if (m32.home) {
    m32.home.star = {
      name: 'Folarin Balogun',
      pos: 'ST',
      club: 'Monaco',
      desc: '官方首发中锋 · 揭幕战双响',
      rating: 8.4,
    };
    m32.home.stars = [m32.home.star];
    m32.home.injuries = [
      { player: 'Folarin Balogun', status: 'FIT', note: '官方首发中锋 · 揭幕战双响', confirmed: true },
      { player: 'Chris Richards', status: 'FIT', note: '官方首发中卫 · 替 Ream 搭档', confirmed: true },
      { player: 'Matt Freese', status: 'FIT', note: 'FIFA 官方一门（Turner 替补）', confirmed: true },
      { player: 'Tyler Adams', status: 'FIT', note: '与 McKennie 双闸 · 官方首发', confirmed: true },
      { player: 'Christian Pulisic', status: 'BENCH', note: 'FIFA 官方替补 · 未进 XI', confirmed: true },
      { player: 'Matt Turner', status: 'BENCH', note: '经验一门替补 Freese', confirmed: true },
      { player: 'Giovanni Reyna', status: 'BENCH', note: '后手变阵选项 · 揭幕战 90+8\' 破门', confirmed: true },
    ];
    m32.home.rumors = [
      '【官方】FIFA 4-2-3-1：Freese 一门 · Pulisic/Reyna/Weah 均未首发——Pochettino 大幅轮换还是战术保密待观察',
      'Freeman+Tillman+Pepi 青春线搭档 Balogun，宽度与一对一突破预期弱于 Pulisic 版',
      '替补席：Turner · Pulisic · Reyna · Weah · Aaronson — 60\' 后若僵局可能集体上阵',
      'D 组同积 3 分，西雅图主场仍须抢分；无 Pulisic 首发或略抬平局权重',
    ];
  }

  if (m32.away) {
    m32.away.star = {
      name: 'Patrick Beach',
      pos: 'GK',
      club: 'Melbourne Victory',
      desc: '官方一门 · 对土耳其零封',
      rating: 7.8,
    };
    m32.away.stars = [m32.away.star];
    m32.away.injuries = [
      { player: 'Patrick Beach', status: 'FIT', note: 'FIFA 官方一门 · 对土耳其 2-0 零封', confirmed: true },
      { player: 'Harry Souttar', status: 'FIT', note: '5-4-1 队长中卫 · 官方首发', confirmed: true },
      { player: 'Mathew Ryan', status: 'BENCH', note: '经验一门替补 Beach', confirmed: true },
      { player: 'Jackson Irvine', status: 'BENCH', note: '队长替补 · Okon-Engstler 首发中场', confirmed: true },
      { player: 'Mathew Leckie', status: 'FIT', note: '5-4-1 边路 · 官方首发', confirmed: true },
    ];
    m32.away.rumors = [
      '【官方】FIFA 5-4-1：Beach · Souttar 领衔五后卫 · Irvine 替补——Popovic 对东道主极守',
      'Circati/Italiano/Toure/Velupillay 年轻化 XI，反击支点 Leckie+Toure',
      '客场西雅图对 无 Pulisic 版美国仍难，但 5-4-1+Beach 零封模板已在对土耳其验证',
    ];
  }

  if (m32.coach_analysis?.home) {
    m32.coach_analysis.home.formation_pref = '4-2-3-1 · Freeman/Tillman/Pepi（无 Pulisic 首发）';
    m32.coach_analysis.home.style_summary =
      'FIFA 官方大幅变阵：Freese 一门、Pulisic 替补，Freeman/Tillman/Pepi 青春线。宽度与后手（Reyna/Pulisic）仍是关键。';
    m32.coach_analysis.home.when_trailing = {
      label: '后手加码',
      detail: '先丢球：55\' Pulisic/Reyna/Weah 可能集体上阵。',
    };
    m32.coach_analysis.home.match_note =
      '官方 4-2-3-1 无 Pulisic——创造预期下调；西雅图主场仍须抢分，后手深度是优势。';
  }

  if (m32.upset_alert) {
    m32.upset_alert.index = 34;
    m32.upset_alert.cold_result_pct = 28;
    m32.upset_alert.tactical =
      'FIFA 官方：Pochettino 4-2-3-1（无 Pulisic · Freese 一门）vs Arnold 5-4-1；客队极守+主队轮换抬升平局空间。';
    m32.upset_alert.verdict =
      '东道主西雅图仍占优，但 Pulisic 替补+澳 5-4-1 极守——平局/偷分空间由约 22% 升至约 28%。';
  }

  const lineupNews = {
    tag: 'LINEUP',
    text: '✅ FIFA 官方首发 m32 · 美 4-2-3-1 Freese/无Pulisic · 澳 5-4-1 Beach极守',
    time: '官方确认',
  };
  const news = (data.breakingNews || []).filter(n => !(n.tag === 'LINEUP' && /m32|美国|Australia|USA/i.test(n.text)));
  data.breakingNews = [lineupNews, ...news];
  const injIdx = data.breakingNews.findIndex(n => n.tag === 'INJURY' && /裁判\/首发仍待/.test(n.text || ''));
  if (injIdx >= 0) {
    data.breakingNews[injIdx] = {
      ...data.breakingNews[injIdx],
      text: '✅ Day 9 伤病&更衣室动态已更新（m29–m32）；m32 首发已确认 · 其余场裁判/首发待 FIFA',
    };
  }

  saveMatchData(data);

  console.log('✅ m32 FIFA official lineup synced');
  console.log('   USA (' + homeTactics + '):', OFFICIAL.home);
  console.log('   Australia (' + awayTactics + '):', OFFICIAL.away);
  console.log(
    '   xG:', xgChange.baseH + '–' + xgChange.baseA, '→', xgChange.newH + '–' + xgChange.newA,
    '| probs:', xgChange.o.home_win + '/' + Math.round(xgChange.o.draw) + '/' + xgChange.o.away_win,
  );
}

main().catch(e => { console.error(e); process.exit(1); });
