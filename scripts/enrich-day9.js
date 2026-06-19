/**
 * Enrich Day 9 todayMatches (m29–m32)
 * weather + mystic + injuries/rumors + coach_analysis + upset_alert
 * 裁判 / 首发保持 roll-day9 占位（等待官方确认）
 * Run: node scripts/enrich-day9.js
 */
const fs = require('fs');
const path = require('path');
const { venueWeather } = require('./venue-weather-day9');
const { getMystic } = require('./mystic-data-day9');
const { getTeamNews } = require('./injuries-rumors-day9');
const { buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS } = require('./coach-data-day9');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const LIVE_PATH = path.join(ROOT, 'js', 'live-data.js');
const TS = '2026-06-20T14:00:00+08:00';

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function patchWeatherInsight(match) {
  const w = match.weather;
  if (!w || !match.prediction?.insight_factors) return;
  const text = `${w.condition_cn || ''} · ${w.temp}°C · 湿度 ${w.humidity}%；${w.impact_summary || w.impact || ''}`;
  const idx = match.prediction.insight_factors.findIndex(f => f.label === '赛场气候');
  if (idx >= 0) {
    match.prediction.insight_factors[idx].text = text;
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

function applyCoachAndUpset(match) {
  const keys = MATCH_COACH_KEYS[match.id];
  if (!keys) return;
  match.coach_analysis = buildCoachAnalysis(keys.homeKey, keys.awayKey);
  const upset = getUpsetAlert(match.id);
  if (upset) match.upset_alert = upset;
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

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
const ids = ['m32', 'm30', 'm29', 'm31'];

for (const m of MATCH_DATA.todayMatches || []) {
  if (!ids.includes(m.id)) continue;
  const w = venueWeather(m.id);
  const my = getMystic(m.id);
  if (w) m.weather = w;
  if (my) m.mystic = my;
  applyTeamNews(m);
  applyCoachAndUpset(m);
  patchWeatherInsight(m);
}

MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 9 · weather/mystic/injuries/coach enriched';

const filtered = dedupeNews(MATCH_DATA.breakingNews || [])
  .filter(n => !/Koné 骨折|Mokoena 停赛/.test(n.text || ''));

const injuryHeadline = '✅ Day 9 伤病&更衣室动态已更新（m29–m32）；裁判/首发仍待 FIFA 官方';
if (!filtered.some(n => /伤病.*更衣室/.test(n.text || ''))) {
  filtered.unshift({ tag: 'INJURY', text: injuryHeadline, time: '6月20日' });
}
const coachHeadline = '✅ Day 9 教练分析&冷门预警已纳入（m29–m32）';
if (!filtered.some(n => /教练分析/.test(n.text || ''))) {
  filtered.unshift({ tag: 'UPDATE', text: coachHeadline, time: '6月20日' });
}
MATCH_DATA.breakingNews = filtered.slice(0, 12);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 9 preview (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

try {
  const LIVE_DATA = loadData(LIVE_PATH, 'LIVE_DATA');
  LIVE_DATA.injuries = {
    note: 'Gilmour/Aguerd/Abde/Wesley 整届 OUT · Neymar/Patterson 队检 · Enciso 已复出',
  };
  LIVE_DATA.lastUpdated = TS;
  fs.writeFileSync(
    LIVE_PATH,
    `// Auto-synced by scripts/enrich-day9.js\n// Updated: ${TS}\nconst LIVE_DATA = ${JSON.stringify(LIVE_DATA, null, 2)};\n`,
  );
} catch (e) {
  console.warn('⚠ live-data skip:', e.message);
}

console.log('✅ Enriched:', ids.join(', '));
console.log('   mystic:', MATCH_DATA.todayMatches.map(m => `${m.id} ${m.mystic?.hexagram?.name}`).join(' · '));
console.log('   coach:', MATCH_DATA.todayMatches.map(m => `${m.id} ${m.coach_analysis?.home?.name ? 'OK' : '—'}`).join(' · '));
console.log('   injuries:', MATCH_DATA.todayMatches.map(m => {
  const h = (m.home?.injuries || []).filter(i => /OUT|DOUBT|SUSPENDED/i.test(i.status)).length;
  const a = (m.away?.injuries || []).filter(i => /OUT|DOUBT|SUSPENDED/i.test(i.status)).length;
  return `${m.id} ${h}+${a} flags`;
}).join(' · '));

try {
  require('child_process').execSync('node scripts/apply-prediction-signals.js', {
    cwd: ROOT,
    stdio: 'inherit',
  });
} catch (e) {
  console.warn('⚠ apply-prediction-signals skipped:', e.message);
}

try {
  require('child_process').execSync('node scripts/stamp-asset-version.js', { cwd: ROOT, stdio: 'inherit' });
} catch (e) {
  console.warn('⚠ stamp skipped:', e.message);
}
