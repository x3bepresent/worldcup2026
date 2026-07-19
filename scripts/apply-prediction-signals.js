/**
 * 为 matches-data.js / results-data.js 注入深度校准 + 小组形势
 * Run: node scripts/apply-prediction-signals.js
 *
 * HANDICAP[m].totals_line — 内部：亚盘总进球分隔线（超=大比分 / 不足=小比分），
 * 每场在 scripts/handicap-data-*.js 单独录入，勿写死 2.5。
 */
const fs = require('fs');
const path = require('path');
const { sortMatchesByKickoff } = require('./match-sort');
const {
  buildDepthCalibration,
  buildPublicSummaryNote,
  applyDepthToPrediction,
  applyDrawContextAdjust,
  buildGroupContext,
  buildInsightKeyFactors,
  computeQualificationDynamics,
  applyQualificationDrawBoost,
  buildPreviewPostMatchReview,
  buildGoalEfficiencyReview,
  buildGoalEfficiencyPreview,
  enrichActualResultForReview,
  buildGoalTimingDisplay,
  buildHalftimePreview,
  buildMatchContextAdjustments,
} = require('../js/prediction-signals-lib');
const { computeOutcomeFromXg, computeScoreDistribution, applyPoissonToPrediction } = require('./score-model');
const { pickMarketSnapshot } = require('./archive-match.js');
const { refreshBasePrediction, enrichArchivedFull } = require('./archived-enrich.js');
const HANDICAP = {
  ...require('./handicap-data-day1-5'),
  ...require('./handicap-data-day6'),
  ...require('./handicap-data-day7'),
  ...require('./handicap-data-day8'),
  ...require('./handicap-data-day9'),
  ...require('./handicap-data-day10'),
  ...require('./handicap-data-day11'),
  ...require('./handicap-data-day12'),
  ...require('./handicap-data-day13'),
  ...require('./handicap-data-day14'),
  ...require('./handicap-data-day15'),
  ...require('./handicap-data-day16'),
  ...require('./handicap-data-day17'),
  ...require('./handicap-data-day18'),
  ...require('./handicap-data-day19'),
  ...require('./handicap-data-day20'),
  ...require('./handicap-data-day21'),
  ...require('./handicap-data-day22'),
  ...require('./handicap-data-day23'),
  ...require('./handicap-data-day24'),
  ...require('./handicap-data-day25'),
  ...require('./handicap-data-day34'),
  ...require('./handicap-data-day38'),
};
const GOAL_TIMING = {
  ...require('./goal-timing-data-day9'),
  ...require('./goal-timing-data-day10'),
};

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

/** 与 matches-app.js SHOW_DEPTH_CALIBRATION_PANEL 对齐：交稿时可设为 false */
const APPEND_SUMMARY_TO_KEY_FACTOR = false;

/** market_tier 恒为正幅度；public_lean 决定符号（主/客热门） */
function signedTierFromHandicap(raw, dc) {
  const mag = Math.abs(Number(dc?.tier_home ?? raw?.market_tier) || 0);
  if (mag < 0.5) return 0;
  const lean = raw?.public_lean;
  if (lean === 'away') return -mag;
  if (lean === 'home') return mag;
  return mag;
}

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
  if (rest.length) {
    data.upcomingMatches = rest.map(m => ({
      group: m.group,
      time_beijing_full: m.time_beijing_full,
      venue: m.venue,
      city: m.city,
      home: { name: m.home.name, iso: m.home.iso },
      away: { name: m.away.name, iso: m.away.iso },
      teaser: m.note?.split(' · ')[0] || `${m.group}组：${m.home.name} vs ${m.away.name}`,
    }));
  }

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
    const key = `${n.tag}|${(n.text || '').trim()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function enrichMatchSignals(m, handicapMap, snapshots) {
  const copy = JSON.parse(JSON.stringify(m));
  if (copy.prediction?.xg_home != null) {
    copy.prediction = refreshBasePrediction(copy, snapshots);
  }
  const raw = handicapMap[copy.id];
  if (raw) {
    copy.depth_calibration = buildDepthCalibration(copy, raw, snapshots);
    copy.market_snapshot = pickMarketSnapshot(copy);
    if (copy.actualResult && copy.depth_calibration?.display_summary) {
      const ar = enrichActualResultForReview(copy);
      copy.depth_calibration.preview_replay = buildPreviewPostMatchReview(
        copy.depth_calibration.display_summary,
        ar,
        copy.home?.name,
        copy.away?.name,
        {
          tier_home: copy.depth_calibration.tier_home,
          tier_gap: copy.depth_calibration.tier_gap,
          totals_line: copy.depth_calibration.totals_line,
        }
      );
    }
    if (copy.prediction) {
      copy.prediction = applyDepthToPrediction(copy.prediction, copy.depth_calibration);
      const ctx = buildMatchContextAdjustments(copy, copy.prediction.xg_home, copy.prediction.xg_away, snapshots);
      if (ctx.qual_dynamics) copy.prediction.qual_dynamics = ctx.qual_dynamics;
      copy.prediction = applyPoissonToPrediction(
        copy.prediction,
        ctx.xg_home,
        ctx.xg_away,
        signedTierFromHandicap(raw, copy.depth_calibration),
      );
      if (ctx.qual_dynamics?.drawBoost) {
        const boosted = applyQualificationDrawBoost(copy.prediction, ctx.qual_dynamics);
        copy.prediction.home_win = boosted.home_win;
        copy.prediction.draw = boosted.draw;
        copy.prediction.away_win = boosted.away_win;
      }
      const gtRaw = GOAL_TIMING[copy.id];
      if (gtRaw && copy.depth_calibration?.display_summary) {
        copy.depth_calibration.display_summary.goal_timing = buildGoalTimingDisplay(
          gtRaw, copy.home?.name, copy.away?.name
        );
        copy.depth_calibration.display_summary.halftime_preview = buildHalftimePreview(
          copy.prediction.xg_home,
          copy.prediction.xg_away,
          copy.home?.name,
          copy.away?.name,
          copy.depth_calibration.display_summary.goal_timing
        );
      }
      const dc = copy.depth_calibration;
      const kf = copy.prediction.key_factor || '';
      const baseKf = stripDepthCalibrationFromKeyFactor(kf);
      copy.prediction.key_factor = APPEND_SUMMARY_TO_KEY_FACTOR
        ? `${baseKf} ${dc.public_summary_note || buildPublicSummaryNote(dc.display_summary, dc.adjustment_note)}`.trim()
        : baseKf;
    }
  } else if (copy.prediction?.xg_home != null) {
    const ctx = buildMatchContextAdjustments(copy, copy.prediction.xg_home, copy.prediction.xg_away, snapshots);
    if (ctx.qual_dynamics) copy.prediction.qual_dynamics = ctx.qual_dynamics;
    copy.prediction = applyPoissonToPrediction(copy.prediction, ctx.xg_home, ctx.xg_away, 0);
  }
  if (snapshots?.length && copy.group !== 'KO') {
    copy.group_context = buildGroupContext(copy, snapshots);
  } else if (copy.group === 'KO') {
    delete copy.group_context;
  }
  if (copy.prediction) {
    const baseKf = stripDepthCalibrationFromKeyFactor(copy.prediction.key_factor || '');
    copy.prediction.insight_factors = buildInsightKeyFactors(copy, copy.group_context, baseKf);
    if (copy.prediction.qual_dynamics?.summary && copy.group_context?.manipulation_risk) {
      copy.group_context.manipulation_risk.qual_model = copy.prediction.qual_dynamics;
    }
  }
  if (copy.actualResult?.home_score != null && copy.prediction?.xg_home != null) {
    const ge = buildGoalEfficiencyReview(copy);
    if (ge) {
      if (!copy.depth_calibration) copy.depth_calibration = {};
      copy.depth_calibration.goal_efficiency = ge;
    }
  } else if (copy.prediction?.xg_home != null) {
    const gp = buildGoalEfficiencyPreview(copy);
    if (gp) {
      if (!copy.depth_calibration) copy.depth_calibration = {};
      copy.depth_calibration.goal_efficiency_preview = gp;
    }
  }
  return copy;
}

/** 精简归档场次 — 全量 v2 重算（handicap + 胜平负 + 复盘） */
function enrichArchivedMatch(m, handicapMap, snapshots) {
  return enrichArchivedFull(m, handicapMap, GOAL_TIMING, snapshots);
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
let RESULTS_DATA = null;
try {
  RESULTS_DATA = loadData(RESULTS_PATH, 'RESULTS_DATA');
} catch {
  RESULTS_DATA = null;
}
const groupSnapshots = RESULTS_DATA?.groupSnapshots || [];

const allHandicap = { ...HANDICAP };

MATCH_DATA.todayMatches = sortMatchesByKickoff(
  MATCH_DATA.todayMatches.map(m => enrichMatchSignals(m, allHandicap, groupSnapshots))
);

if (RESULTS_DATA?.finishedMatches?.length) {
  let resultsUpdated = 0;
  RESULTS_DATA.finishedMatches = RESULTS_DATA.finishedMatches.map(m => {
    if (m.archived) {
      resultsUpdated += 1;
      return enrichArchivedMatch(m, allHandicap, groupSnapshots);
    }
    if (allHandicap[m.id]) {
      resultsUpdated += 1;
      return enrichMatchSignals(m, allHandicap, groupSnapshots);
    }
    if (m.actualResult?.home_score != null && m.prediction?.xg_home != null) {
      const copy = JSON.parse(JSON.stringify(m));
      const ge = buildGoalEfficiencyReview(copy);
      if (ge) {
        if (!copy.depth_calibration) copy.depth_calibration = {};
        copy.depth_calibration.goal_efficiency = ge;
        resultsUpdated += 1;
        return copy;
      }
    }
    return m;
  });
  RESULTS_DATA.lastUpdated = TS;
  if (resultsUpdated) {
    fs.writeFileSync(
      RESULTS_PATH,
      `// 过往赛果 — 精简归档（推演 + 赛果核验 + 复盘概要）\n// Last updated: ${TS}\nconst RESULTS_DATA = ${JSON.stringify(RESULTS_DATA, null, 2)};\n`
    );
    console.log('✅ Applied signals to', resultsUpdated, 'finished matches in results-data.js');
  }
}

syncSiteMeta(MATCH_DATA);

MATCH_DATA.lastUpdated = TS;

if (!MATCH_DATA.breakingNews.some(n => /R9|淘汰赛大小/.test(n.text || ''))) {
  MATCH_DATA.breakingNews.unshift({
    tag: 'UPDATE',
    text: '🎯 淘汰赛大小球 R9 已开启：副项不打小 · ★冲突跳过 · 大信心仅绑★大小',
    time: 'Agent',
  });
}

if (!MATCH_DATA.breakingNews.some(n => /推演升级|推演概要/.test(n.text || ''))) {
  MATCH_DATA.breakingNews.unshift({
    tag: 'UPDATE',
    text: '📊 推演升级：模型概要 + 淘汰赛晋级路径矩阵',
    time: '模型',
  });
}

syncSiteMeta(MATCH_DATA);

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — ${MATCH_DATA.phase_cn || MATCH_DATA.syncSource || 'preview'} (signals enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`
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
