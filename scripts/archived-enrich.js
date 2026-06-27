/**
 * 归档场次完整 enrichment — handicap + v2 胜平负 + 赛后复盘
 */
const {
  buildDepthCalibration,
  applyDepthToPrediction,
  applyDrawContextAdjust,
  applyQualificationDrawBoost,
  buildPreviewPostMatchReview,
  buildGoalEfficiencyReview,
  enrichActualResultForReview,
  buildGoalTimingDisplay,
  buildHalftimePreview,
  buildMatchContextAdjustments,
} = require('../js/prediction-signals-lib');
const { computeOutcomeFromXg, computeScoreDistribution, applyPoissonToPrediction } = require('./score-model');
const { pickMarketSnapshot } = require('./archive-match.js');

function signedTierFromHandicap(raw, dc) {
  const mag = Math.abs(Number(dc?.tier_home ?? raw?.market_tier) || 0);
  if (mag < 0.5) return 0;
  const lean = raw?.public_lean;
  if (lean === 'away') return -mag;
  if (lean === 'home') return mag;
  return mag;
}

function mergePreMatchContext(m) {
  const copy = JSON.parse(JSON.stringify(m));
  const ctx = copy.pre_match_context;
  if (!ctx) return copy;
  if (ctx.coach_analysis && !copy.coach_analysis) copy.coach_analysis = ctx.coach_analysis;
  if (ctx.upset_alert && !copy.upset_alert) copy.upset_alert = ctx.upset_alert;
  if (ctx.home_rumors?.length) {
    copy.home = { ...copy.home, rumors: ctx.home_rumors };
  }
  if (ctx.away_rumors?.length) {
    copy.away = { ...copy.away, rumors: ctx.away_rumors };
  }
  if (ctx.lineup_diff) {
    copy.lineup = {
      ...copy.lineup,
      diff: ctx.lineup_diff,
      formation: ctx.lineup_formation || copy.lineup?.formation,
      confirmed: copy.lineup?.confirmed ?? true,
    };
  }
  return copy;
}

function refreshBasePrediction(match, groupSnapshots) {
  const p = match.prediction;
  if (!p || p.xg_home == null || p.xg_away == null) return p;
  const raw = computeOutcomeFromXg(p.xg_home, p.xg_away);
  const adj = applyDrawContextAdjust(
    { home_win: raw.home_win, draw: raw.draw, away_win: raw.away_win },
    match,
    p.xg_home,
    p.xg_away,
    groupSnapshots,
  );
  let out = {
    ...p,
    home_win: adj.home_win,
    draw: adj.draw,
    away_win: adj.away_win,
    score: raw.score,
    score_dist: computeScoreDistribution(p.xg_home, p.xg_away, { topN: 7 }),
    base_home_win: adj.home_win,
    base_draw: adj.draw,
    base_away_win: adj.away_win,
    depth_calibrated: false,
    draw_context: adj.draw_context,
    qual_dynamics: adj.draw_context?.qual_dynamics || null,
  };
  const ctx = buildMatchContextAdjustments(match, p.xg_home, p.xg_away, groupSnapshots);
  if (ctx.qual_dynamics) out.qual_dynamics = ctx.qual_dynamics;
  out = applyPoissonToPrediction(out, ctx.xg_home, ctx.xg_away, 0);
  return out;
}

function enrichArchivedFull(m, handicapMap, goalTimingMap, groupSnapshots) {
  const copy = mergePreMatchContext(m);
  if (copy.prediction?.xg_home != null) {
    copy.prediction = refreshBasePrediction(copy, groupSnapshots);
  }

  const raw = handicapMap[copy.id];
  if (raw) {
    copy.depth_calibration = buildDepthCalibration(copy, raw, groupSnapshots);
    copy.market_snapshot = pickMarketSnapshot({ depth_calibration: copy.depth_calibration });
    if (copy.prediction) {
      copy.prediction = applyDepthToPrediction(copy.prediction, copy.depth_calibration);
      const ctx = buildMatchContextAdjustments(copy, copy.prediction.xg_home, copy.prediction.xg_away, groupSnapshots);
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
    }
    const gtRaw = goalTimingMap?.[copy.id];
    if (gtRaw && copy.depth_calibration?.display_summary) {
      copy.depth_calibration.display_summary.goal_timing = buildGoalTimingDisplay(
        gtRaw, copy.home?.name, copy.away?.name,
      );
      copy.depth_calibration.display_summary.halftime_preview = buildHalftimePreview(
        copy.prediction.xg_home,
        copy.prediction.xg_away,
        copy.home?.name,
        copy.away?.name,
        copy.depth_calibration.display_summary.goal_timing,
      );
    }
  }

  if (copy.actualResult?.home_score != null && copy.prediction?.xg_home != null) {
    const ge = buildGoalEfficiencyReview(copy);
    if (ge) {
      if (!copy.depth_calibration) copy.depth_calibration = {};
      copy.depth_calibration.goal_efficiency = ge;
    }
    const dc = copy.depth_calibration;
    const fullDc = raw ? buildDepthCalibration(copy, raw, groupSnapshots) : dc;
    if (fullDc?.display_summary) {
      if (!dc) copy.depth_calibration = fullDc;
      const ar = enrichActualResultForReview(copy);
      (copy.depth_calibration || dc).preview_replay = buildPreviewPostMatchReview(
        fullDc.display_summary,
        ar,
        copy.home?.name,
        copy.away?.name,
        {
          tier_home: fullDc.tier_home,
          tier_gap: fullDc.tier_gap,
          totals_line: fullDc.totals_line,
        },
      );
    }
  }

  return copy;
}

module.exports = {
  mergePreMatchContext,
  refreshBasePrediction,
  enrichArchivedFull,
};
