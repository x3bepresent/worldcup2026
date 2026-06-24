/**
 * Enrich Day 14 todayMatches (m51/m52/m49/m50/m53/m54)
 * weather + injuries/rumors + stars + referee
 * Run: node scripts/enrich-day14.js && node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day14');
const { getTeamNews } = require('./injuries-rumors-day14');
const { getReferee } = require('./referee-data-day14');
const { getTeamStars } = require('./star-data-day14');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function patchWeatherInsight(match) {
  const w = match.weather;
  if (!w || !match.prediction?.insight_factors) return;
  const text = `${w.condition_cn || ''} · ${w.temp}°C · 湿度 ${w.humidity}%；${w.impact_summary || w.impact || ''}`;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '赛场气候');
  if (idx >= 0) match.prediction.insight_factors[idx].text = text;
  else match.prediction.insight_factors.push({ icon: '🌤️', label: '赛场气候', text });
}

function ensureInsightFactors(match) {
  if (!match.prediction) return;
  if (!match.prediction.insight_factors) {
    match.prediction.insight_factors = [
      { icon: '📊', label: '小组积分', text: `${match.group}组末轮 · 出线形势见各场详情` },
      { icon: '🌤️', label: '赛场气候', text: '' },
      { icon: '⚽', label: '战术与阵容', text: match.prediction.key_factor || '' },
    ];
  }
}

function applyTeamNews(match) {
  const homeNews = getTeamNews(match.id, 'home');
  const awayNews = getTeamNews(match.id, 'away');
  match.home.injuries = homeNews.injuries;
  match.home.rumors = homeNews.rumors;
  match.away.injuries = awayNews.injuries;
  match.away.rumors = awayNews.rumors;
}

function applyStars(match) {
  const home = getTeamStars(match.id, 'home');
  const away = getTeamStars(match.id, 'away');
  if (home.stars.length) {
    match.home.stars = home.stars;
    match.home.star = home.star;
  }
  if (away.stars.length) {
    match.away.stars = away.stars;
    match.away.star = away.star;
  }
}

function applyReferee(match) {
  const ref = getReferee(match.id);
  ref.updated = TS;
  match.referee = ref;
  if (ref.confirmed && match.note && !/裁判已确认/.test(match.note)) {
    match.note += ` · FIFA 官方裁判已确认（${ref.name}）`;
  }
}

function dedupeNews(news) {
  const seen = new Set();
  return (news || []).filter(n => {
    const key = `${n.tag}|${n.text}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const ids = ['m51', 'm52', 'm49', 'm50', 'm53', 'm54'];
const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  ensureInsightFactors(m);
  const w = venueWeather(m.id);
  if (w) m.weather = w;
  applyTeamNews(m);
  applyStars(m);
  applyReferee(m);
  patchWeatherInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 14 · weather/injuries/stars/referee enriched';

const refLines = [
  { id: 'm51', text: '✅ FIFA 官方裁判 m51 · Danny Makkelie（荷兰）' },
  { id: 'm52', text: '✅ FIFA 官方裁判 m52 · Yoshimi Yamashita（日本）' },
  { id: 'm49', text: '✅ FIFA 官方裁判 m49 · Slavko Vinčić（斯洛文尼亚）' },
  { id: 'm50', text: '✅ FIFA 官方裁判 m50 · Wilton Sampaio（巴西）' },
  { id: 'm53', text: '✅ FIFA 官方裁判 m53 · Mario Escobar（危地马拉）' },
  { id: 'm54', text: '✅ FIFA 官方裁判 m54 · Mohammed Abdulla（阿联酋）' },
];

const filtered = dedupeNews(MATCH_DATA.breakingNews || [])
  .filter(n => !/Day 14 气候|伤病预报|裁判待 FIFA|核心球员/.test(n.text || ''));

filtered.unshift(
  { tag: 'INJURY', text: '✅ Day 14 伤病/更衣室：Davies 主场 · Son 须胜 · Schick 高原破局', time: '6月25日' },
  { tag: 'UPDATE', text: '✅ Day 14 核心球员已更新（m49–m54，各队 3 人）', time: '6月25日' },
  { tag: 'UPDATE', text: '✅ Day 14 气候预报已更新（m49–m54，共6场）', time: '6月25日' },
);

for (const r of refLines) {
  filtered.unshift({ tag: 'OFFICIAL', text: r.text, time: '官方确认' });
}

MATCH_DATA.breakingNews = filtered.slice(0, 14);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 14 (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.lastUpdated = TS;
  LIVE_DATA.injuries = {
    note: 'Day 14 · m51 Davies/Xhaka · m49 Son/Vinícius · m53 Schick/Azteca · m54 Son 须胜',
  };
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/enrich-day14.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );
} catch { /* optional */ }

console.log('✅ Day 14 enriched:', ids.join(', '));
for (const id of ids) {
  const m = MATCH_DATA.todayMatches.find(x => x.id === id);
  if (!m) continue;
  console.log(
    `   ${id} ref=${m.referee?.confirmed ? m.referee.name : 'pending'} · stars H${m.home.stars?.length}/A${m.away.stars?.length} · inj H${m.home.injuries?.length}/A${m.away.injuries?.length}`,
  );
}
