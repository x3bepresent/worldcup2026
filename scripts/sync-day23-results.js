/**
 * Day 23 赛果同步 — m86–m88 · 32强收官
 * 加时/点球场：home_score/away_score = 最终(含加时)比分（展示）；
 *              regulation_home_score/away_score = 90 分钟比分（让球/大小球结算按此）
 * Run: node scripts/sync-day23-results.js && node scripts/grade-agent-picks.js day23
 */
const fs = require('fs');
const path = require('path');
const { archiveFinishedMatch } = require('./archive-match.js');
const { enrichArchivedFull } = require('./archived-enrich.js');
const { rebuildScheduleScores } = require('./rebuild-schedule-scores.js');
const { buildM86, buildM87, buildM88 } = require('./roll-day23.js');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const HANDICAP = { ...require('./handicap-data-day23.js') };
const SYNC_IDS = ['m86', 'm87', 'm88'];
const BUILDERS = { m86: buildM86, m87: buildM87, m88: buildM88 };

// FIFA Match Centre · api.fifa.com · 2026-07-04
const MANUAL = {
  m86: {
    home_score: 3,
    away_score: 2,
    regulation_home_score: 1,
    regulation_away_score: 1,
    status: 'AET',
    label: '加时结束',
    scorers: "Lionel MESSI 29'; Lisandro MARTÍNEZ 92' (加时); Diney BORGES 111' (乌龙·加时); Deroy DUARTE 59'; Sidny Lopes CABRAL 103' (加时)",
    highlights: "迈阿密 Hard Rock · 阿根廷 常规1-1 → 加时3-2 佛得角 · 半场1-0 · Messi 29' · 出席 64,478",
    ht_score: '1-0',
    fifa_match_id: '400021521',
    note: "32强 M86 · 已结束 1-1(90')→3-2(加时) · 阿根廷晋级",
  },
  m87: {
    home_score: 1,
    away_score: 0,
    status: 'FT',
    label: '全场结束',
    scorers: "Jhon ARIAS 14'",
    highlights: "堪萨斯城 Arrowhead · 哥伦比亚 1-0 加纳 · Arias 14' · 半场1-0 · 出席 69,045",
    ht_score: '1-0',
    fifa_match_id: '400021517',
    note: '32强 M87 · 已结束 1-0 · 哥伦比亚晋级',
  },
  m88: {
    home_score: 1,
    away_score: 1,
    regulation_home_score: 1,
    regulation_away_score: 1,
    status: 'PEN',
    label: '全场结束（点球）',
    scorers: "Mohamed HANY 55' (乌龙); Emam ASHOUR 13'",
    highlights: "达拉斯 AT&T · 澳大利亚 1-1 埃及 · 点球埃及晋级 · Ashour 13' · Hany 55'og · 半场0-1 · 出席 70,244",
    ht_score: '0-1',
    pk_winner: 'Egypt',
    pk_score: '4-2',
    fifa_match_id: '400021515',
    note: "32强 M88 · 已结束 1-1(90') · 点球(4-2)埃及晋级",
  },
};

const REVIEW = {
  m86: "【复盘】阿根廷 常规1-1 → 加时3-2 佛得角 · Messi 29' · 半场1-0。球盘按90分钟(1-1)：★佛+2/2.5赢半 · 小3全赢(总2)。受让方向与小球均命中，深盘穿盘失败。",
  m87: "【复盘】哥伦比亚 1-0 加纳 · Arias 14' · 半场1-0。球盘：★哥-0.5全赢 · 大2.5全输(总1)。浅盘低水穿盘兑现，大球副项落空。",
  m88: "【复盘】澳大利亚 1-1 埃及 · 点球(4-2)埃及晋级 · Ashour 13'/Hany 55'og · 半场0-1。球盘按90分钟(1-1)：★澳-0/0.5输半 · 小2走水(总2)。均衡盘平局。",
};

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function pushForm(form, r) {
  const f = [...(form || ['W', 'D', 'L', 'W', 'D'])];
  f.shift();
  f.push(r);
  return f;
}

function applyResult(m, r, reviewKey) {
  const regH = r.regulation_home_score ?? null;
  const regA = r.regulation_away_score ?? null;
  m.actualResult = {
    home_score: r.home_score,
    away_score: r.away_score,
    regulation_home_score: regH,
    regulation_away_score: regA,
    status: r.status || 'FT',
    label: r.label || '全场结束',
    scorers: r.scorers,
    highlights: r.highlights,
    ht_score: r.ht_score,
    pk_winner: r.pk_winner || null,
    pk_score: r.pk_score || null,
    fifa_match_id: r.fifa_match_id,
    updated: TS,
  };
  if (reviewKey && REVIEW[reviewKey]) {
    m.prediction = m.prediction || {};
    m.prediction.key_factor = REVIEW[reviewKey];
  }
  m.note = r.note || `32强 ${m.id?.toUpperCase()} · 已结束 ${r.home_score}-${r.away_score}`;
  // 让球/大小球用 90 分钟比分推近赛果结局
  const bh = regH != null ? regH : r.home_score;
  const ba = regA != null ? regA : r.away_score;
  if (m.home?.form) {
    m.home.form = pushForm(m.home.form, bh > ba ? 'W' : bh < ba ? 'L' : 'D');
  }
  if (m.away?.form) {
    m.away.form = pushForm(m.away.form, ba > bh ? 'W' : ba < bh ? 'L' : 'D');
  }
  return m;
}

function main() {
  const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');

  for (const id of SYNC_IDS) {
    let m = MATCH_DATA.todayMatches?.find((x) => x.id === id);
    if (!m && BUILDERS[id]) m = BUILDERS[id]();
    if (!m) m = (RESULTS_DATA.finishedMatches || []).find((x) => x.id === id);
    const r = MANUAL[id];
    if (!m || !r) continue;
    const patched = applyResult(JSON.parse(JSON.stringify(m)), r, id);
    const enriched = enrichArchivedFull(patched, HANDICAP);
    const archived = archiveFinishedMatch(enriched, { archivedAt: TS });
    const i = (RESULTS_DATA.finishedMatches || []).findIndex((x) => x.id === id);
    if (i < 0) RESULTS_DATA.finishedMatches.push(archived);
    else RESULTS_DATA.finishedMatches[i] = archived;
  }

  MATCH_DATA.todayMatches = (MATCH_DATA.todayMatches || []).filter((m) => !SYNC_IDS.includes(m.id));
  MATCH_DATA.lastUpdated = TS;
  MATCH_DATA.syncSource = 'Day 23 完结 · M86–M88 全部完场 · 32强收官';

  RESULTS_DATA.lastUpdated = TS;
  RESULTS_DATA.syncSource = 'FIFA 官方 · Day 23 M86–M88 完结 · 16强开启';
  RESULTS_DATA.breakingNews = [
    { tag: 'OFFICIAL', text: "🏁 M86：阿根廷 常规1-1→加时3-2 佛得角 · Messi 29' · 晋级16强", time: '7月4日' },
    { tag: 'OFFICIAL', text: "🏁 M87：哥伦比亚 1-0 加纳 · Arias 14' · 晋级16强", time: '7月4日' },
    { tag: 'OFFICIAL', text: '🏁 M88：澳大利亚 1-1 埃及 · 点球(4-2)埃及晋级', time: '7月4日' },
    { tag: 'PREVIEW', text: '⚔️ 16强开赛 7/5：加拿大-摩洛哥(01:00) · 巴拉圭-法国(05:00)', time: '7月5日' },
    { tag: 'UPDATE', text: '📊 Day23 Agent 双选已全部结算（按90分钟）', time: '复盘' },
  ].slice(0, 12);

  const day23Ft = SYNC_IDS.map((id) => {
    const r = MANUAL[id];
    const m = (RESULTS_DATA.finishedMatches || []).find((x) => x.id === id);
    return {
      id,
      home: m?.home?.name || id,
      away: m?.away?.name || id,
      score: `${r.home_score}-${r.away_score}`,
      group: 'KO',
    };
  });

  const LIVE_DATA = {
    lastUpdated: TS,
    todayDate: '2026-07-04',
    fixtures: [],
    allResults: day23Ft,
    yesterdayResults: day23Ft.map((r) => ({ id: r.id, score: r.score })),
    standings: RESULTS_DATA.groupSnapshots || [],
    injuries: { note: 'Day 23 全部完场 · M86–M88 已归档 · 16强 7/5 开赛' },
  };

  fs.writeFileSync(RESULTS_PATH, `// 过往赛果\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`);
  fs.writeFileSync(MATCH_PATH, `// 今日赛事 — Day 23 全部完场\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`);
  fs.writeFileSync(LIVE_PATH, `// Day 23 FT · M86–M88\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`);

  for (const id of SYNC_IDS) {
    const r = MANUAL[id];
    const reg = r.regulation_home_score != null ? ` · 90'${r.regulation_home_score}-${r.regulation_away_score}` : '';
    console.log(`✅ ${id} ${r.status} ${r.home_score}-${r.away_score}${reg} · HT ${r.ht_score} · ${r.scorers}`);
  }
  try { rebuildScheduleScores(); } catch (e) { console.warn('schedule-scores:', e.message); }
}

main();
