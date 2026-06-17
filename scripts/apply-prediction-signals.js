/**
 * 为 matches-data.js 注入深度校准 + 小组形势
 * Run: node scripts/apply-prediction-signals.js
 */
const fs = require('fs');
const path = require('path');
const {
  buildDepthCalibration,
  buildPublicSummaryNote,
  applyDepthToPrediction,
  buildGroupContext,
} = require('../js/prediction-signals-lib');
const HANDICAP = {
  ...require('./handicap-data-day6'),
  ...require('./handicap-data-day7'),
};

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const TS = '2026-06-18T10:00:00+08:00';

/** 与 matches-app.js SHOW_DEPTH_CALIBRATION_PANEL 对齐：交稿时可设为 false */
const APPEND_SUMMARY_TO_KEY_FACTOR = false;

/** 剥离历次追加的推演/盘口措辞，保留原始赛前分析 */
function stripDepthCalibrationFromKeyFactor(kf) {
  return (kf || '')
    .replace(/\s*【(?:深度校准|推演概要)[^】]*】[\s\S]*/g, '')
    .replace(/（(?:深度校准|模型微调)：[^）]+）/g, '')
    .replace(/\s*说明：阻断型高开[^。]*。?/g, '')
    .replace(/\s*档位高于 xG 隐含[^。]*。?/g, '')
    .replace(/\s*主盘[^。]*。?/g, '')
    .replace(/\s*附盘[^。]*。?/g, '')
    .replace(/\s*大小[\s\d./]+线[^。]*。?/g, '')
    .replace(/\s*定价[^。]*。?/g, '')
    .replace(/\s*热门穿档[^。]*。?/g, '')
    .replace(/\s*略高一档[^；]*；?/g, '')
    .replace(/\s*穿档[^。]*。?/g, '')
    .replace(/\s*少球侧[^。]*。?/g, '')
    .replace(/\s*，且净胜 1 球占[^。]*——/g, '')
    .replace(/\s*阻断型高开特征明显[^。]*。?/g, '')
    .replace(/\s*，公众 \d+% 集中[^；]*；?/g, '')
    .replace(/[；，]{2,}/g, '；')
    .replace(/[。；，]+$/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

/** 同步首页 nextMatch / 去重 breakingNews / syncSource */
function syncSiteMeta(data) {
  const first = data.todayMatches?.[0];
  if (first) {
    const p = first.prediction || {};
    data.nextMatch = {
      group: first.group,
      matchday: first.matchday,
      date: first.date,
      time: first.time,
      time_local: first.time_local,
      timezone: first.timezone,
      time_beijing: first.time_beijing,
      date_beijing: first.date_beijing,
      time_beijing_full: first.time_beijing_full,
      venue: first.venue,
      city: first.city,
      home: {
        name: first.home.name,
        iso: first.home.iso,
        fifaRank: first.home.fifa_rank,
        rating: first.home.rating,
      },
      away: {
        name: first.away.name,
        iso: first.away.iso,
        fifaRank: first.away.fifa_rank,
        rating: first.away.rating,
      },
      teaser: first.note?.split(' · ').slice(0, 2).join(' · ') || `${first.home.name} vs ${first.away.name}`,
      home_win: p.home_win,
      draw: p.draw,
      away_win: p.away_win,
      predicted_score: p.score,
      key_player_home: first.home.star?.name || first.home.name,
      key_player_away: first.away.star?.name || first.away.name,
    };
  }

  const rest = (data.todayMatches || []).slice(1);
  data.upcomingMatches = rest.map(m => ({
    group: m.group,
    time_beijing_full: m.time_beijing_full,
    venue: m.venue,
    city: m.city,
    home: { name: m.home.name, iso: m.home.iso },
    away: { name: m.away.name, iso: m.away.iso },
    teaser: m.note?.split(' · ')[0] || `${m.group}组：${m.home.name} vs ${m.away.name}`,
  }));

  const baseSync = (data.syncSource || '')
    .replace(/ · 推演概要\+小组形势/g, '')
    .replace(/ · 深度校准\+小组形势/g, '')
    .trim();
  if (!baseSync.includes('推演概要')) {
    data.syncSource = `${baseSync} · 推演概要+小组形势`;
  } else {
    data.syncSource = baseSync;
  }

  const seen = new Set();
  data.breakingNews = (data.breakingNews || []).filter(n => {
    const key = `${n.tag}|${n.text}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
let groupSnapshots = [];
try {
  const RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
  groupSnapshots = RESULTS_DATA.groupSnapshots || [];
} catch {
  groupSnapshots = [];
}

const allHandicap = { ...HANDICAP };

MATCH_DATA.todayMatches = MATCH_DATA.todayMatches.map(m => {
  const copy = JSON.parse(JSON.stringify(m));
  const raw = allHandicap[copy.id];
  if (raw) {
    copy.depth_calibration = buildDepthCalibration(copy, raw);
    copy.prediction = applyDepthToPrediction(copy.prediction, copy.depth_calibration);
    const dc = copy.depth_calibration;
    const kf = copy.prediction.key_factor || '';
    const baseKf = stripDepthCalibrationFromKeyFactor(kf);
    copy.prediction.key_factor = APPEND_SUMMARY_TO_KEY_FACTOR
      ? `${baseKf} ${dc.public_summary_note || buildPublicSummaryNote(dc.display_summary, dc.adjustment_note)}`.trim()
      : baseKf;
  }
  copy.group_context = buildGroupContext(copy, groupSnapshots);
  return copy;
});

syncSiteMeta(MATCH_DATA);

MATCH_DATA.lastUpdated = TS;

if (!MATCH_DATA.breakingNews.some(n => n.text?.includes('推演概要'))) {
  MATCH_DATA.breakingNews.unshift({
    tag: 'UPDATE',
    text: '📊 推演升级：模型概要 + 小组形势/晋级路径已纳入今日赛事',
    time: '模型',
  });
}

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 6 (signals enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`
);

console.log('✅ Applied signals to', MATCH_DATA.todayMatches.length, 'matches');
MATCH_DATA.todayMatches.forEach(m => {
  const dc = m.depth_calibration;
  console.log(
    `   ${m.id} depth=${dc?.signal_cn || '—'} probs=${m.prediction.home_win}/${m.prediction.draw}/${m.prediction.away_win}` +
      (m.prediction.base_home_win != null ? ` (base ${m.prediction.base_home_win}/${m.prediction.base_draw}/${m.prediction.base_away_win})` : '') +
      ` · group_ctx=${m.group_context?.manipulation_risk?.level_cn || '—'}`
  );
});
