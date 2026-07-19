/**
 * Catch-up KO results M101–M103（半决赛 + 季军赛）
 * 写入精简 archived finishedMatches + rebuild schedule-scores + 更新对阵树
 * Run: node scripts/catchup-ko-results-m101-m103.js
 */
const fs = require('fs');
const path = require('path');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');

const ROOT = path.join(__dirname, '..');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const BRACKET_PATH = path.join(ROOT, 'js', 'knockout-bracket.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const ISO = {
  France: 'fr', Spain: 'es', England: 'gb-eng', Argentina: 'ar',
};

/** FIFA official */
const ROWS = [
  { id: 'm101', no: 101, fifaId: '400021541', home: 'France', away: 'Spain', hs: 0, as: 2, status: 'FT', date_beijing: '7月15日', time_beijing: '03:00', note: '半决赛 M101 · 西班牙淘汰法国', label: '全场结束' },
  { id: 'm102', no: 102, fifaId: '400021540', home: 'England', away: 'Argentina', hs: 1, as: 2, status: 'FT', date_beijing: '7月16日', time_beijing: '03:00', note: '半决赛 M102 · 阿根廷淘汰英格兰', label: '全场结束' },
  { id: 'm103', no: 103, fifaId: '400021542', home: 'France', away: 'England', hs: 4, as: 6, status: 'FT', date_beijing: '7月19日', time_beijing: '05:00', note: '季军赛 M103 · 英格兰6-4法国获季军', label: '全场结束' },
];

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function slimArchive(row) {
  return {
    id: row.id,
    archived: true,
    archivedAt: TS,
    group: 'KO',
    matchday: null,
    fifa_match_number: row.no,
    date_beijing: row.date_beijing,
    time_beijing: row.time_beijing,
    note: row.note,
    home: { name: row.home, iso: ISO[row.home] || 'xx' },
    away: { name: row.away, iso: ISO[row.away] || 'xx' },
    prediction: { key_factor: `【补档】${row.note}` },
    actualResult: {
      home_score: row.hs,
      away_score: row.as,
      status: row.status,
      label: row.label,
      fifa_match_id: row.fifaId,
      updated: TS,
    },
  };
}

function patchBracket() {
  let src = fs.readFileSync(BRACKET_PATH, 'utf8');
  const inject = `  const KO_RESULTS = {
    89: { home: 'Paraguay', away: 'France', score: '0-1', status: 'FT', winner: 'France' },
    90: { home: 'Canada', away: 'Morocco', score: '0-3', status: 'FT', winner: 'Morocco' },
    91: { home: 'Brazil', away: 'Norway', score: '1-2', status: 'FT', winner: 'Norway' },
    92: { home: 'Mexico', away: 'England', score: '2-3', status: 'FT', winner: 'England' },
    93: { home: 'Portugal', away: 'Spain', score: '0-1', status: 'FT', winner: 'Spain' },
    94: { home: 'USA', away: 'Belgium', score: '1-4', status: 'FT', winner: 'Belgium' },
    95: { home: 'Argentina', away: 'Egypt', score: '3-2', status: 'FT', winner: 'Argentina' },
    96: { home: 'Switzerland', away: 'Colombia', score: '0-0', status: 'PEN', winner: 'Switzerland' },
    97: { home: 'France', away: 'Morocco', score: '2-0', status: 'FT', winner: 'France' },
    98: { home: 'Spain', away: 'Belgium', score: '2-1', status: 'FT', winner: 'Spain' },
    99: { home: 'Norway', away: 'England', score: '1-2', status: 'AET', winner: 'England' },
    100: { home: 'Argentina', away: 'Switzerland', score: '3-1', status: 'AET', winner: 'Argentina' },
    101: { home: 'France', away: 'Spain', score: '0-2', status: 'FT', winner: 'Spain' },
    102: { home: 'England', away: 'Argentina', score: '1-2', status: 'FT', winner: 'Argentina' },
    103: { home: 'France', away: 'England', score: '4-6', status: 'FT', winner: 'England' },
  };`;
  if (!/101: \{ home: 'France'/.test(src)) {
    src = src.replace(/  const KO_RESULTS = \{[\s\S]*?\n  \};/, inject);
    fs.writeFileSync(BRACKET_PATH, src);
    console.log('✅ knockout-bracket KO_RESULTS patched (m101–m103)');
  } else {
    console.log('ℹ️ knockout-bracket already has m101–m103');
  }
}

function main() {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  if (!RESULTS_DATA.finishedMatches) RESULTS_DATA.finishedMatches = [];

  for (const row of ROWS) {
    const archived = slimArchive(row);
    const i = RESULTS_DATA.finishedMatches.findIndex((x) => x.id === row.id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = { ...RESULTS_DATA.finishedMatches[i], ...archived, actualResult: archived.actualResult };
    console.log(`✅ ${row.id} ${row.home} ${row.hs}-${row.as} ${row.away} (${row.status})`);
  }

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方 · M101–M103 补档 · 决赛开启';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 半决赛：西班牙2-0法国 · 阿根廷2-1英格兰', time: '路径' },
    { tag: 'OFFICIAL', text: '🥉 季军赛：英格兰6-4法国', time: '7月18日' },
    { tag: 'PREVIEW', text: '🏆 决赛：西班牙 vs 阿根廷 · 北京时间 7月20日 03:00 · MetLife', time: '7月20日' },
  ].slice(0, 12);

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  patchBracket();
  try { rebuildScheduleScores(); } catch (e) { console.warn('schedule-scores:', e.message); }
  console.log('✅ catch-up M101–M103 done');
}

main();
