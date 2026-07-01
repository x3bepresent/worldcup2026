/**
 * M80 滚球同步：比分 + 皇冠变盘
 * Run: node scripts/sync-m80-live.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const HANDICAP_PATH = path.join(ROOT, 'scripts', 'handicap-data-day21.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

const LIVE = {
  minute: 87,
  score: '2-1',
  home_score: 2,
  away_score: 1,
  status: '2H',
  elapsed: 87,
  spread_cn: '（未报）',
  totals_cn: '3.5 大1.69 小0.46',
  spread_live_cn: 'England 2-1 Congo DR · spread TBD',
  totals_live_cn: '大小 3.5 · 大 1.69 / 小 0.46',
  trap_note: "87'2-1 · 82'大1.04仍偏低水→晚场破门 · 3.5小0.46=3球收工",
  read_cn: '87\'2-1 · 小2.5已死 · 刚果+1.5/2全赢(英只净胜1) · 3.5小锁3球',
  news_text: `🔴 M80 87' 2-1 · 3.5大1.69小0.46 · 小2.5死/刚果受让中`,
};

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function patchLiveData() {
  const live = loadData(LIVE_PATH, 'LIVE_DATA');
  live.lastUpdated = TS;
  const m80 = live.fixtures?.find((f) => f.id === 'm80');
  if (m80) {
    Object.assign(m80, {
      status: LIVE.status,
      home_score: LIVE.home_score,
      away_score: LIVE.away_score,
      elapsed: LIVE.elapsed,
      spread_live_cn: LIVE.spread_live_cn,
      totals_live_cn: LIVE.totals_live_cn,
    });
  }
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced · Day 21 live lines\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(live, null, 2)};\n`,
    'utf8',
  );
}

function patchMatchData() {
  const data = loadData(MATCH_PATH, 'MATCH_DATA');
  data.lastUpdated = TS;
  const news = (data.breakingNews || []).filter((n) => !/^🔴 M80/.test(n.text || ''));
  news.unshift({ tag: 'LIVE', text: LIVE.news_text, time: '滚球' });
  data.breakingNews = news;
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 21 live\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
    'utf8',
  );
}

function patchHandicap() {
  delete require.cache[require.resolve(HANDICAP_PATH)];
  const hc = require(HANDICAP_PATH);
  const m = hc.m80;
  if (!m) return;

  const dup = (m.live_timeline || []).some(
    (e) => e.min === LIVE.minute && e.spread === LIVE.spread_cn,
  );
  if (!dup) {
    m.live_timeline.push({
      min: LIVE.minute,
      score: LIVE.score,
      spread: LIVE.spread_cn,
      totals: LIVE.totals_cn,
      trap_note: LIVE.trap_note,
    });
  }

  m.live = {
    period: '2H',
    minute: LIVE.minute,
    score: LIVE.score,
    captured_at: TS,
    spread_live: {
      home_handicap: '-0.5',
      home_odds: 1.19,
      away_handicap: '+0.5',
      away_odds: 0.72,
      line_display: '英 -0.5',
    },
    totals_live: {
      line: 2.5,
      line_display: '2.5',
      over_odds: 0.85,
      under_odds: 1.02,
    },
    line_move_live_cn: `75' ${LIVE.score} · ${LIVE.spread_cn} · ${LIVE.totals_cn}`,
    read_cn: LIVE.read_cn,
  };

  m.analysis = `M80 · 75' ${LIVE.score} · ${LIVE.spread_cn} · ${LIVE.totals_cn}`;

  fs.writeFileSync(
    HANDICAP_PATH,
    `/** Day 21 handicap — m80–m82 · 32强 · 皇冠 CROWN
 *  spread_open / totals_open = 初盘 · spread_now / totals_now = 现盘
 *  agent_pick：每场 spread + totals 双选项，primary 标★倾向
 */
module.exports = ${JSON.stringify(hc, null, 2)};
`,
    'utf8',
  );
}

patchLiveData();
patchMatchData();
patchHandicap();
console.log(`✅ M80 ${LIVE.minute}' ${LIVE.score} · ${LIVE.totals_cn}`);
