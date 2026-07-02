/**
 * 过往赛果精简归档 — 只保留复盘/回测所需字段
 * node scripts/migrate-slim-results.js  压缩已有 records
 */
'use strict';

function pickPrediction(p) {
  if (!p) return null;
  const out = {
    xg_home: p.xg_home,
    xg_away: p.xg_away,
    home_win: p.home_win,
    draw: p.draw,
    away_win: p.away_win,
    score: p.score,
    confidence: p.confidence,
    key_factor: p.key_factor,
  };
  if (p.base_home_win != null) {
    out.base_home_win = p.base_home_win;
    out.base_draw = p.base_draw;
    out.base_away_win = p.base_away_win;
  }
  if (p.depth_calibrated) out.depth_calibrated = p.depth_calibrated;
  return out;
}

function pickMarketSnapshot(m) {
  const dc = m.depth_calibration || {};
  const ds = dc.display_summary || {};
  const tv = ds.totals_view || {};
  const sp = ds.customer_reading?.spread || {};
  const to = ds.customer_reading?.totals || {};
  return {
    market_tier: dc.tier_home ?? 0,
    tier_label: dc.tier_label || null,
    totals_line: dc.totals_line ?? tv.market_line ?? 2.5,
    over_pct: tv.over_pct ?? null,
    fair_line: tv.fair_line ?? null,
    line_gap: tv.line_gap ?? null,
    full_cover_pct: sp.full_cover_pct ?? sp.meet_pct ?? null,
    fav_win_pct: sp.fav_win_pct ?? null,
    cover_given_win_pct: sp.cover_given_win_pct ?? null,
    spread_level: sp.level ?? null,
    spread_market_expect: sp.market_expect_cn ?? null,
    line_move_tag: dc.market_line_movement?.tag ?? null,
    line_move_cn: dc.market_line_movement?.tag_cn ?? null,
    agent_pick_primary: dc.agent_pick?.primary ?? null,
    agent_pick_tendency_cn: dc.agent_pick?.tendency_cn ?? null,
    agent_pick_confidence: dc.agent_pick?.confidence ?? null,
    agent_spread_cn: dc.agent_pick?.spread?.label_cn ?? null,
    agent_totals_cn: dc.agent_pick?.totals?.label_cn ?? null,
    totals_level: to.level ?? null,
    totals_show_lean: to.show_lean ?? false,
    totals_lean_side: to.lean_side ?? null,
  };
}

function pickDepthCalibration(m) {
  const dc = m.depth_calibration || {};
  const ds = dc.display_summary || {};
  const slim = {
    public_summary_note: dc.public_summary_note || null,
    preview_replay: dc.preview_replay || null,
    goal_efficiency: dc.goal_efficiency || null,
    goal_efficiency_preview: dc.goal_efficiency_preview
      ? {
          path_type: dc.goal_efficiency_preview.path_type,
          path_label: dc.goal_efficiency_preview.path_label,
          lean: dc.goal_efficiency_preview.lean,
          lean_cn: dc.goal_efficiency_preview.lean_cn,
          lean_mode: dc.goal_efficiency_preview.lean_mode,
          summary_cn: dc.goal_efficiency_preview.summary_cn,
        }
      : null,
  };
  const dsSlim = {};
  if (ds.baseline_label) dsSlim.baseline_label = ds.baseline_label;
  if (ds.goal_timing) dsSlim.goal_timing = ds.goal_timing;
  if (ds.customer_reading) {
    dsSlim.customer_reading = {
      spread: ds.customer_reading.spread
        ? {
            show_cover: ds.customer_reading.spread.show_cover,
            level: ds.customer_reading.spread.level,
            full_cover_pct:
              ds.customer_reading.spread.full_cover_pct ?? ds.customer_reading.spread.meet_pct,
            fav_win_pct: ds.customer_reading.spread.fav_win_pct ?? null,
            cover_given_win_pct: ds.customer_reading.spread.cover_given_win_pct ?? null,
            dog_hold_pct: ds.customer_reading.spread.dog_hold_pct ?? null,
            market_expect_cn: ds.customer_reading.spread.market_expect_cn,
            pill_cn: ds.customer_reading.spread.pill_cn,
          }
        : null,
      totals: ds.customer_reading.totals
        ? {
            level: ds.customer_reading.totals.level,
            show_lean: ds.customer_reading.totals.show_lean,
            lean_side: ds.customer_reading.totals.lean_side,
            pill_cn: ds.customer_reading.totals.pill_cn,
          }
        : null,
    };
  }
  if (ds.totals_view) {
    dsSlim.totals_view = {
      over_pct: ds.totals_view.over_pct,
      market_line: ds.totals_view.market_line,
      fair_line: ds.totals_view.fair_line,
      line_gap: ds.totals_view.line_gap,
    };
  }
  if (ds.totals_line != null) dsSlim.totals_line = ds.totals_line;
  if (Object.keys(dsSlim).length) slim.display_summary = dsSlim;
  return slim;
}

function pickTeam(t) {
  if (!t) return { name: '—', iso: '' };
  return {
    name: t.name,
    iso: t.iso || '',
    fifaRank: t.fifaRank,
    rating: t.rating,
  };
}

function pickPreMatchContext(m) {
  const stripReview = (s) => (s || '').replace(/【赛后复盘】[\s\S]*/g, '').trim();
  const ctx = {
    key_factor_pre: stripReview(m.prediction?.key_factor) || null,
  };
  if (m.coach_analysis?.home || m.coach_analysis?.away) {
    ctx.coach_analysis = {
      home: m.coach_analysis.home ? {
        formation_pref: m.coach_analysis.home.formation_pref,
        style_summary: m.coach_analysis.home.style_summary,
        match_note: m.coach_analysis.home.match_note,
      } : null,
      away: m.coach_analysis.away ? {
        formation_pref: m.coach_analysis.away.formation_pref,
        style_summary: m.coach_analysis.away.style_summary,
        match_note: m.coach_analysis.away.match_note,
      } : null,
    };
  }
  if (m.upset_alert) {
    ctx.upset_alert = {
      level: m.upset_alert.level,
      level_cn: m.upset_alert.level_cn,
      tactical: m.upset_alert.tactical,
      verdict: m.upset_alert.verdict,
    };
  }
  const hr = (m.home?.rumors || []).slice(0, 4);
  const ar = (m.away?.rumors || []).slice(0, 4);
  if (hr.length) ctx.home_rumors = hr;
  if (ar.length) ctx.away_rumors = ar;
  if (m.lineup?.diff) {
    ctx.lineup_diff = { home: m.lineup.diff.home, away: m.lineup.diff.away };
  }
  if (m.lineup?.formation) ctx.lineup_formation = m.lineup.formation;
  const has = Object.values(ctx).some(v => v != null && v !== '');
  return has ? ctx : null;
}

/** 从完整赛前 match 对象生成精简归档 */
function archiveFinishedMatch(m, opts = {}) {
  const archivedAt = opts.archivedAt || new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');
  const ar = m.actualResult;
  let note = (m.note || '')
    .replace(/ · 待赛.*$/, '')
    .replace(/ · 进行中.*$/, '')
    .replace(/ · 已结束.*$/, '')
    .replace(/ · 官方.*$/, '');
  if (ar?.home_score != null) {
    if (ar.regulation_home_score != null && ar.regulation_away_score != null) {
      note += ` · 已结束 ${ar.regulation_home_score}-${ar.regulation_away_score}(90')→${ar.home_score}-${ar.away_score}(加时)`;
    } else {
      note += ` · 已结束 ${ar.home_score}-${ar.away_score}`;
    }
  }

  const out = {
    id: m.id,
    archived: true,
    archivedAt,
    group: m.group,
    matchday: m.matchday,
    date_beijing: m.date_beijing,
    time_beijing: m.time_beijing,
    time_beijing_full: m.time_beijing_full,
    venue: m.venue,
    city: m.city,
    note: note.trim(),
    home: pickTeam(m.home),
    away: pickTeam(m.away),
    prediction: pickPrediction(m.prediction),
    market_snapshot: pickMarketSnapshot(m),
    depth_calibration: pickDepthCalibration(m),
    actualResult: ar ? { ...ar } : null,
  };

  if (m.lineup?.confirmed && m.lineup.formation) {
    out.lineup = {
      confirmed: true,
      formation: m.lineup.formation,
      impact: m.lineup.impact || null,
    };
  }

  const preCtx = pickPreMatchContext(m);
  if (preCtx) out.pre_match_context = preCtx;

  return out;
}

function isSlimArchive(m) {
  return m?.archived === true;
}

module.exports = {
  archiveFinishedMatch,
  pickPrediction,
  pickMarketSnapshot,
  pickDepthCalibration,
  pickTeam,
  pickPreMatchContext,
  isSlimArchive,
};
