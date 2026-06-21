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
    spread_level: sp.level ?? null,
    spread_market_expect: sp.market_expect_cn ?? null,
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
    note += ` · 已结束 ${ar.home_score}-${ar.away_score}`;
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
  isSlimArchive,
};
