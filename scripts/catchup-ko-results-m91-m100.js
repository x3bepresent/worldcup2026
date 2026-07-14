/**
 * Catch-up KO results M91–M100 (站点停在 Day25 之后)
 * 写入精简 archived finishedMatches + rebuild schedule-scores
 * Run: node scripts/catchup-ko-results-m91-m100.js
 */
const fs = require('fs');
const path = require('path');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');

const ROOT = path.join(__dirname, '..');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const ISO = {
  Brazil: 'br', Norway: 'no', Mexico: 'mx', England: 'gb-eng',
  Portugal: 'pt', Spain: 'es', USA: 'us', Belgium: 'be',
  Argentina: 'ar', Egypt: 'eg', Switzerland: 'ch', Colombia: 'co',
  France: 'fr', Morocco: 'ma',
};

/** FIFA official · api.fifa.com */
const ROWS = [
  { id: 'm91', no: 91, fifaId: '400021532', home: 'Brazil', away: 'Norway', hs: 1, as: 2, status: 'FT', date_beijing: '7月6日', time_beijing: '04:00', note: '16强 M91 · 挪威淘汰巴西', label: '全场结束' },
  { id: 'm92', no: 92, fifaId: '400021531', home: 'Mexico', away: 'England', hs: 2, as: 3, status: 'FT', date_beijing: '7月6日', time_beijing: '09:00', note: '16强 M92 · 英格兰淘汰墨西哥', label: '全场结束' },
  { id: 'm93', no: 93, fifaId: '400021529', home: 'Portugal', away: 'Spain', hs: 0, as: 1, status: 'FT', date_beijing: '7月7日', time_beijing: '03:00', note: '16强 M93 · 西班牙淘汰葡萄牙', label: '全场结束' },
  { id: 'm94', no: 94, fifaId: '400021534', home: 'USA', away: 'Belgium', hs: 1, as: 4, status: 'FT', date_beijing: '7月7日', time_beijing: '08:00', note: '16强 M94 · 比利时淘汰美国', label: '全场结束' },
  { id: 'm95', no: 95, fifaId: '400021528', home: 'Argentina', away: 'Egypt', hs: 3, as: 2, status: 'FT', date_beijing: '7月8日', time_beijing: '00:00', note: '16强 M95 · 阿根廷淘汰埃及', label: '全场结束' },
  { id: 'm96', no: 96, fifaId: '400021535', home: 'Switzerland', away: 'Colombia', hs: 0, as: 0, status: 'PEN', date_beijing: '7月8日', time_beijing: '04:00', note: "16强 M96 · 瑞士点球(4-3)淘汰哥伦比亚", label: '全场结束（点球）', pk_winner: 'Switzerland', pk_score: '4-3', regulation_home_score: 0, regulation_away_score: 0 },
  { id: 'm97', no: 97, fifaId: '400021536', home: 'France', away: 'Morocco', hs: 2, as: 0, status: 'FT', date_beijing: '7月10日', time_beijing: '04:00', note: '8强 M97 · 法国淘汰摩洛哥', label: '全场结束' },
  { id: 'm98', no: 98, fifaId: '400021538', home: 'Spain', away: 'Belgium', hs: 2, as: 1, status: 'FT', date_beijing: '7月11日', time_beijing: '03:00', note: '8强 M98 · 西班牙淘汰比利时', label: '全场结束' },
  { id: 'm99', no: 99, fifaId: '400021539', home: 'Norway', away: 'England', hs: 1, as: 2, status: 'AET', date_beijing: '7月12日', time_beijing: '05:00', note: "8强 M99 · 英格兰加时淘汰挪威", label: '加时结束', regulation_home_score: 1, regulation_away_score: 1 },
  { id: 'm100', no: 100, fifaId: '400021537', home: 'Argentina', away: 'Switzerland', hs: 3, as: 1, status: 'AET', date_beijing: '7月12日', time_beijing: '09:00', note: '8强 M100 · 阿根廷加时淘汰瑞士', label: '加时结束' },
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
      regulation_home_score: row.regulation_home_score ?? null,
      regulation_away_score: row.regulation_away_score ?? null,
      status: row.status,
      label: row.label,
      pk_winner: row.pk_winner || null,
      pk_score: row.pk_score || null,
      fifa_match_id: row.fifaId,
      updated: TS,
    },
  };
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
  RESULTS_DATA.syncSource = 'FIFA 官方 · M91–M100 补档 · 半决赛开启';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: '🏁 8强收官：法国/西班牙/英格兰/阿根廷晋级4强', time: '7月12日' },
    { tag: 'PREVIEW', text: '⚔️ 半决赛 7/15：法国 vs 西班牙(03:00 · 达拉斯)', time: '7月15日' },
    { tag: 'PREVIEW', text: '⚔️ 半决赛 7/16：英格兰 vs 阿根廷(03:00 · 亚特兰大)', time: '7月16日' },
  ].slice(0, 12);

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  try { rebuildScheduleScores(); } catch (e) { console.warn('schedule-scores:', e.message); }
  console.log('✅ catch-up M91–M100 done');
}

main();
