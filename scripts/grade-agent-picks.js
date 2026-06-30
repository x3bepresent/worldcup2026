/**
 * 结算 agent 双盘口选项 — node scripts/grade-agent-picks.js [day17]
 * 每场：让球 + 大小球；统计倾向/非倾向/交叉赛果（倾向错但另一项对）
 *
 * 结算口径：不败即中 — 全赢 / 赢半 / 走水 → 中；输半 / 全输 → 不中
 *
 * 写单前校验：node scripts/audit-agent-spread-reason.js day20
 * — 让球 reason_cn 引用的比分须与 gradeSpreadForScore 一致，避免「2-0 仍赢盘」类错误。
 */
const fs = require('fs');
const path = require('path');
const lib = require('../js/prediction-signals-lib.js');

function loadResults() {
  const text = fs.readFileSync(path.join(__dirname, '..', 'js', 'results-data.js'), 'utf8');
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  return JSON.parse(text.slice(start, end + 1));
}

function loadMatches() {
  const text = fs.readFileSync(path.join(__dirname, '..', 'js', 'matches-data.js'), 'utf8');
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  return JSON.parse(text.slice(start, end + 1));
}

function getActual(m) {
  const ar = m.actualResult;
  if (ar?.home_score != null && ar?.away_score != null) {
    return {
      h: ar.home_score,
      a: ar.away_score,
      total: ar.home_score + ar.away_score,
      margin: ar.home_score - ar.away_score,
    };
  }
  return null;
}

function totalsOverWeight(totalGoals, line) {
  const t = totalGoals;
  const l = Number(line);
  if (Math.abs(l - 2.75) < 0.01) {
    if (t >= 4) return 1;
    if (t === 3) return 0.5;
    return 0;
  }
  if (Math.abs(l - 2.25) < 0.01) {
    if (t >= 3) return 1;
    if (t === 2) return 0.5;
    return 0;
  }
  if (Math.abs(l - 3.25) < 0.01) {
    if (t >= 4) return 1;
    if (t === 3) return 0.5;
    return 0;
  }
  if (Math.abs(l - 1.75) < 0.01) {
    if (t >= 3) return 1;
    if (t === 2) return 0.5;
    return 0;
  }
  if (Math.abs(l % 1 - 0.75) < 0.01) {
    const base = Math.floor(l);
    if (t >= base + 2) return 1;
    if (t === base + 1) return 0.5;
    return 0;
  }
  if (Math.abs(l % 1 - 0.25) < 0.01) {
    const base = Math.floor(l);
    if (t >= base + 1) return 1;
    if (t === base) return 0.5;
    return 0;
  }
  if (l % 1 === 0.5) return t > l ? 1 : 0;
  if (Math.abs(l % 1) < 0.01) return t > l ? 1 : t === l ? 0.5 : 0;
  return t > l ? 1 : t === l ? 0.5 : 0;
}

function invertSpreadOutcome(o) {
  return {
    full_win: 'full_lose',
    half_win: 'half_lose',
    push: 'push',
    half_lose: 'half_win',
    full_lose: 'full_win',
  }[o];
}

const OUTCOME_CN = {
  full_win: '全赢',
  half_win: '赢半',
  push: '走水',
  half_lose: '输半',
  full_lose: '全输',
};

function sideHitsNoLoss(outcome) {
  return outcome === 'full_win' || outcome === 'half_win' || outcome === 'push';
}

/** 热门方让球结算 @returns {'full_win'|'half_win'|'push'|'half_lose'|'full_lose'} */
function favSpreadOutcome(favMargin, tier) {
  const abs = Math.abs(Number(tier) || 0);
  const th = lib.getTierCoverThresholds(tier);
  const frac = Math.round((abs % 1) * 100) / 100;
  const base = Math.floor(abs);

  if (abs < 0.01) {
    if (favMargin > 0) return 'full_win';
    if (favMargin === 0) return 'push';
    return 'full_lose';
  }
  if (frac < 0.01) {
    if (favMargin >= th.fullMin) return 'full_win';
    if (th.pushExact != null && favMargin === th.pushExact) return 'push';
    return 'full_lose';
  }
  if (Math.abs(frac - 0.5) < 0.01) {
    if (favMargin >= th.fullMin) return 'full_win';
    if (th.halfExact != null && favMargin === th.halfExact) return 'half_win';
    return 'full_lose';
  }
  if (Math.abs(frac - 0.75) < 0.01) {
    if (favMargin > th.fullMin) return 'full_win';
    if (favMargin === th.fullMin) return 'half_win';
    if (th.halfExact != null && favMargin === th.halfExact) return 'half_win';
    if (favMargin === base || (base === 0 && favMargin === 0)) return 'half_lose';
    return 'full_lose';
  }
  if (Math.abs(frac - 0.25) < 0.01) {
    if (favMargin >= th.fullMin) return 'full_win';
    if (abs >= 1 && favMargin === base && th.pushExact == null) return 'half_lose';
    if (abs < 1 && favMargin === 0) return 'half_lose';
    return 'full_lose';
  }
  if (favMargin >= th.fullMin) return 'full_win';
  return 'full_lose';
}

function spreadSideOutcome(margin, tier, side, publicLean) {
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : (publicLean === 'away' ? 'away' : publicLean === 'home' ? 'home' : null);
  const favMargin = favSide === 'home' ? margin : favSide === 'away' ? -margin : margin;
  const favOut = favSpreadOutcome(favMargin, tier);
  if (side === 'fav') return favOut;
  if (side === 'dog') return invertSpreadOutcome(favOut);
  return 'full_lose';
}

/** 大球方结算 — x/x+0.5（.25）恰 base 球：大球输半；x+0.5/x+1（.75）恰 base+1 球：大球赢半 */
function totalsOverOutcome(total, line) {
  const w = totalsOverWeight(total, line);
  const l = Number(line);
  const isInt = Math.abs(l % 1) < 0.01;
  if (w >= 1) return 'full_win';
  if (w <= 0) return 'full_lose';
  if (isInt && total === l) return 'push';
  const base = Math.floor(l);
  const frac = Math.round((l % 1) * 100) / 100;
  if (Math.abs(frac - 0.25) < 0.01 && total === base) return 'half_lose';
  if (Math.abs(frac - 0.75) < 0.01 && total === base + 1) return 'half_win';
  if (Math.abs(l - 1.75) < 0.01 && total === 2) return 'half_win';
  if (Math.abs(l - 1.75) < 0.01 && total === 1) return 'full_lose';
  return 'half_lose';
}

function totalsSideOutcome(total, line, side) {
  const overOut = totalsOverOutcome(total, line);
  if (side === 'over') return overOut;
  if (side === 'under') return invertSpreadOutcome(overOut);
  return 'full_lose';
}

function actualSpreadHit(margin, tier, side, publicLean) {
  return sideHitsNoLoss(spreadSideOutcome(margin, tier, side, publicLean));
}

function actualTotalsHit(total, line, side) {
  return sideHitsNoLoss(totalsSideOutcome(total, line, side));
}

function gradeLeg(market, leg, raw, actual) {
  if (!actual || !leg) return { hit: undefined, note: '未开赛/无赛果' };
  const tier = raw?.market_tier ?? 0;
  const line = raw?.totals_line ?? 2.5;
  const score = `${actual.h}-${actual.a}`;

  if (market === 'spread') {
    const outcome = spreadSideOutcome(actual.margin, tier, leg.side, raw?.public_lean);
    const hit = sideHitsNoLoss(outcome);
    return {
      hit,
      outcome,
      note: `${score} · 净胜 ${actual.margin > 0 ? '+' : ''}${actual.margin} · ${OUTCOME_CN[outcome]}`,
    };
  }
  const outcome = totalsSideOutcome(actual.total, line, leg.side);
  const hit = sideHitsNoLoss(outcome);
  return {
    hit,
    outcome,
    note: `${score} 总${actual.total} · 线 ${line} · ${OUTCOME_CN[outcome]}`,
  };
}

function tallyBucket(hit) {
  if (hit === undefined) return { hit: 0, miss: 0, push: 0, pending: 1 };
  if (hit === true) return { hit: 1, miss: 0, push: 0, pending: 0 };
  if (hit === false) return { hit: 0, miss: 1, push: 0, pending: 0 };
  if (hit === null) return { hit: 0, miss: 0, push: 1, pending: 0 };
  return { hit: 0, miss: 0, push: 0, pending: 1 };
}

function mergeTally(a, b) {
  return {
    hit: a.hit + b.hit,
    miss: a.miss + b.miss,
    push: a.push + b.push,
    pending: a.pending + b.pending,
  };
}

function pct(hit, miss) {
  const n = hit + miss;
  return n ? Math.round((hit / n) * 1000) / 10 : null;
}

/** 单场双项赛果归类 — 含「倾向未中、另一项命中」 */
function classifyMatchOutcome(primary, spreadHit, totalsHit) {
  const primaryHit = primary === 'totals' ? totalsHit : spreadHit;
  const secondaryHit = primary === 'totals' ? spreadHit : totalsHit;
  const primaryCn = primary === 'totals' ? '大小球' : '让球盘';
  const secondaryCn = primary === 'totals' ? '让球盘' : '大小球';

  if (primaryHit === undefined || secondaryHit === undefined) {
    return {
      key: 'pending',
      cn: '待赛',
      analytics_cn: null,
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }

  const pWin = primaryHit === true;
  const pLose = primaryHit === false;
  const sWin = secondaryHit === true;
  const sLose = secondaryHit === false;

  if (pWin && sWin) {
    return {
      key: 'both_hit',
      cn: `★${primaryCn}与${secondaryCn}均命中`,
      analytics_cn: '倾向正确，双项验证通过',
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }
  if (pLose && sLose) {
    return {
      key: 'both_miss',
      cn: `★${primaryCn}与${secondaryCn}均未中`,
      analytics_cn: '全盘失误，需复盘模型、盘路与倾向规则',
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }
  if (pWin && sLose) {
    return {
      key: 'primary_hit_secondary_miss',
      cn: `★${primaryCn}命中，${secondaryCn}未中`,
      analytics_cn: '倾向正确；非倾向项失误，可降权备用项展示',
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }
  if (pLose && sWin) {
    return {
      key: 'primary_miss_secondary_hit',
      cn: `★${primaryCn}未中，${secondaryCn}项命中`,
      analytics_cn: '倾向权重可能偏高——复盘时应优先看命中项，并反推是否应改倾向或降低倾向在决策中的权重',
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }
  if (pWin && !sWin && !sLose) {
    return {
      key: 'primary_hit_secondary_push',
      cn: `★${primaryCn}命中，${secondaryCn}走水/半`,
      analytics_cn: '倾向正确',
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }
  if (pLose && !sWin && !sLose) {
    return {
      key: 'primary_miss_secondary_push',
      cn: `★${primaryCn}未中，${secondaryCn}走水/半`,
      analytics_cn: '倾向失误，备用项未分胜负',
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }
  if (!pWin && !pLose && sWin) {
    return {
      key: 'primary_push_secondary_hit',
      cn: `★${primaryCn}走水/半，${secondaryCn}命中`,
      analytics_cn: '倾向项走水，备用项正确——倾向判定边界情况',
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }
  if (!pWin && !pLose && sLose) {
    return {
      key: 'primary_push_secondary_miss',
      cn: `★${primaryCn}走水/半，${secondaryCn}未中`,
      analytics_cn: null,
      primary_hit: primaryHit,
      secondary_hit: secondaryHit,
      primary_market: primary,
      secondary_market: primary === 'totals' ? 'spread' : 'totals',
    };
  }
  return {
    key: 'both_push',
    cn: '双项走水/半',
    analytics_cn: null,
    primary_hit: primaryHit,
    secondary_hit: secondaryHit,
    primary_market: primary,
    secondary_market: primary === 'totals' ? 'spread' : 'totals',
  };
}

function buildCrossAnalysis(graded) {
  const patterns = {
    both_hit: [],
    both_miss: [],
    primary_hit_secondary_miss: [],
    primary_miss_secondary_hit: [],
    primary_hit_secondary_push: [],
    primary_miss_secondary_push: [],
    primary_push_secondary_hit: [],
    primary_push_secondary_miss: [],
    both_push: [],
    pending: [],
  };
  for (const g of graded) {
    const key = g.outcome?.key || 'pending';
    if (patterns[key]) patterns[key].push({ id: g.id, match: g.match, cn: g.outcome.cn });
    else patterns.pending.push({ id: g.id, match: g.match });
  }
  const scored = graded.filter(g => g.outcome?.key !== 'pending');
  const n = scored.length;
  return {
    summary_cn: '交叉赛果用于反推倾向权重：若「倾向错、另一项对」偏多，应下调倾向优先级或改判定规则',
    primary_miss_secondary_hit: {
      n: patterns.primary_miss_secondary_hit.length,
      pct: n ? Math.round((patterns.primary_miss_secondary_hit.length / n) * 1000) / 10 : null,
      label_cn: '倾向未中 · 另一项命中',
      matches: patterns.primary_miss_secondary_hit,
      analytics_cn: '虽倾向错了，但双选中的另一项对了——实际可命中却被倾向标签误导，是改进重点',
    },
    primary_hit_secondary_miss: {
      n: patterns.primary_hit_secondary_miss.length,
      pct: n ? Math.round((patterns.primary_hit_secondary_miss.length / n) * 1000) / 10 : null,
      label_cn: '倾向命中 · 另一项未中',
      matches: patterns.primary_hit_secondary_miss,
    },
    both_hit: { n: patterns.both_hit.length, matches: patterns.both_hit },
    both_miss: { n: patterns.both_miss.length, matches: patterns.both_miss },
    pending: patterns.pending.length,
  };
}

function buildHighConfidenceStats(graded) {
  const hc = graded.filter(g => g.high_confidence);
  if (!hc.length) return null;
  let spreadT = { hit: 0, miss: 0 };
  let totalsT = { hit: 0, miss: 0 };
  let primaryT = { hit: 0, miss: 0 };
  const cross = { primary_miss_secondary_hit: [], primary_hit_secondary_miss: [], both_hit: [], both_miss: [] };
  for (const g of hc) {
    spreadT.hit += g.spread.hit === true ? 1 : 0;
    spreadT.miss += g.spread.hit === false ? 1 : 0;
    totalsT.hit += g.totals.hit === true ? 1 : 0;
    totalsT.miss += g.totals.hit === false ? 1 : 0;
    if (g.primary_hit === true) primaryT.hit += 1;
    if (g.primary_hit === false) primaryT.miss += 1;
    const k = g.outcome?.key;
    if (k && cross[k]) cross[k].push(g.id);
  }
  return {
    n: hc.length,
    ids: hc.map(g => g.id),
    spread: { ...spreadT, pct: pct(spreadT.hit, spreadT.miss) },
    totals: { ...totalsT, pct: pct(totalsT.hit, totalsT.miss) },
    primary: { ...primaryT, pct: pct(primaryT.hit, primaryT.miss) },
    cross,
  };
}

function buildLayerAlignmentStats(graded) {
  const scored = graded.filter(g => g.totals?.hit === true || g.totals?.hit === false);
  const buckets = {
    pick_follows_model_market: { hit: 0, miss: 0, n: 0 },
    pick_vs_recommended: { hit: 0, miss: 0, n: 0 },
    situation_conflict_pick: { hit: 0, miss: 0, n: 0 },
  };
  for (const g of scored) {
    const hit = g.totals.hit === true;
    const pick = g.pick_side;
    const rec = g.recommended_side;
    const model = g.model_side;
    const market = g.market_side;
    if (pick && model && market && pick === model && pick === market) {
      buckets.pick_follows_model_market.n += 1;
      if (hit) buckets.pick_follows_model_market.hit += 1;
      else buckets.pick_follows_model_market.miss += 1;
    }
    if (pick && rec && pick !== rec) {
      buckets.pick_vs_recommended.n += 1;
      if (hit) buckets.pick_vs_recommended.hit += 1;
      else buckets.pick_vs_recommended.miss += 1;
    }
    if (g.situation_conflict) {
      buckets.situation_conflict_pick.n += 1;
      if (hit) buckets.situation_conflict_pick.hit += 1;
      else buckets.situation_conflict_pick.miss += 1;
    }
  }
  const fmt = b => ({
    ...b,
    pct: b.hit + b.miss ? Math.round((b.hit / (b.hit + b.miss)) * 1000) / 10 : null,
  });
  return {
    summary_cn: '大小球三层对齐：pick_side 与 model/market/recommended 赛后反推',
    pick_follows_model_market: fmt(buckets.pick_follows_model_market),
    pick_vs_recommended: fmt(buckets.pick_vs_recommended),
    situation_conflict_resolved: fmt(buckets.situation_conflict_pick),
    per_match: scored.map(g => ({
      id: g.id,
      model_side: g.model_side,
      situation_side: g.situation_side,
      market_side: g.market_side,
      pick_side: g.pick_side,
      recommended_side: g.recommended_side,
      totals_hit: g.totals.hit,
    })),
  };
}

function loadHandicapForDay(dayNum) {
  const p = path.join(__dirname, `handicap-data-day${dayNum}.js`);
  if (fs.existsSync(p)) {
    return require(p);
  }
  return {};
}

function gradeDay(jsonPath) {
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const handicap = loadHandicapForDay(data.day);
  const results = loadResults();
  const today = loadMatches();
  const byId = {};
  [...(results.finishedMatches || []), ...(today.todayMatches || [])].forEach(m => { byId[m.id] = m; });

  let spreadT = { hit: 0, miss: 0, push: 0, pending: 0 };
  let totalsT = { hit: 0, miss: 0, push: 0, pending: 0 };
  let primaryT = { hit: 0, miss: 0, push: 0, pending: 0 };
  let secondaryT = { hit: 0, miss: 0, push: 0, pending: 0 };
  let allT = { hit: 0, miss: 0, push: 0, pending: 0 };
  const graded = [];

  for (const pick of data.picks) {
    const m = byId[pick.id];
    const raw = handicap[pick.id];
    const ap = raw?.agent_pick || pick;
    const actual = m ? getActual(m) : null;
    const spreadLeg = ap.spread || pick.spread;
    const totalsLeg = ap.totals || pick.totals;
    const primary = ap.primary || pick.primary || 'spread';

    const gs = gradeLeg('spread', spreadLeg, raw, actual);
    const gt = gradeLeg('totals', totalsLeg, raw, actual);
    const outcome = classifyMatchOutcome(primary, gs.hit, gt.hit);
    const secondaryHit = outcome.secondary_hit;
    const pickMeta = ap.pick_meta || null;

    spreadT = mergeTally(spreadT, tallyBucket(gs.hit));
    totalsT = mergeTally(totalsT, tallyBucket(gt.hit));
    primaryT = mergeTally(primaryT, tallyBucket(outcome.primary_hit));
    secondaryT = mergeTally(secondaryT, tallyBucket(secondaryHit));
    allT = mergeTally(allT, tallyBucket(gs.hit));
    allT = mergeTally(allT, tallyBucket(gt.hit));

    graded.push({
      id: pick.id,
      match: pick.match,
      primary,
      tendency_cn: ap.tendency_cn || pick.tendency_cn,
      high_confidence: ap.confidence === 'high',
      confidence_cn: ap.confidence_cn || null,
      model_side: pickMeta?.model_side || null,
      situation_side: pickMeta?.situation_side || null,
      market_side: pickMeta?.market_side || null,
      pick_side: pickMeta?.pick_side || totalsLeg?.side || null,
      recommended_side: pickMeta?.recommended_side || null,
      situation_conflict: pickMeta?.conflict || false,
      spread: { ...spreadLeg, hit: gs.hit, grade_note: gs.note },
      totals: { ...totalsLeg, hit: gt.hit, grade_note: gt.note },
      primary_hit: outcome.primary_hit,
      secondary_hit: secondaryHit,
      secondary_market: outcome.secondary_market,
      outcome,
      actual_score: actual ? `${actual.h}-${actual.a}` : null,
    });
  }

  const crossAnalysis = buildCrossAnalysis(graded);
  const highConfidence = buildHighConfidenceStats(graded);
  const layerStats = buildLayerAlignmentStats(graded);

  data.results = {
    graded_at: new Date().toISOString(),
    grade_rule_cn: '不败即中：全赢/赢半/走水算中，输半/全输算不中',
    spread: { ...spreadT, pct: pct(spreadT.hit, spreadT.miss) },
    totals: { ...totalsT, pct: pct(totalsT.hit, totalsT.miss) },
    primary: { ...primaryT, pct: pct(primaryT.hit, primaryT.miss), label_cn: '倾向项（★）' },
    secondary: { ...secondaryT, pct: pct(secondaryT.hit, secondaryT.miss), label_cn: '非倾向项' },
    all_legs: { ...allT, pct: pct(allT.hit, allT.miss) },
    cross_analysis: crossAnalysis,
    layer_alignment: layerStats,
    high_confidence: highConfidence,
    picks: graded,
  };
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + '\n');

  console.log(`\n📋 Agent 双盘口结算 — Day ${data.day}\n`);
  graded.forEach(g => {
    const sIcon = g.spread.hit === true ? '✓' : g.spread.hit === false ? '✗' : g.actual_score ? '—' : '…';
    const tIcon = g.totals.hit === true ? '✓' : g.totals.hit === false ? '✗' : g.actual_score ? '—' : '…';
    const star = g.primary === 'totals' ? '★大小' : '★让球';
    const hc = g.high_confidence ? ' 🔥大信心' : '';
    console.log(`  ${g.id} ${g.match}${hc}  ${star}`);
    console.log(`    ${sIcon} 让球 ${g.spread.pick_cn || g.spread.label_cn} — ${g.spread.grade_note}`);
    console.log(`    ${tIcon} 大小 ${g.totals.pick_cn || g.totals.label_cn} — ${g.totals.grade_note}`);
    if (g.actual_score && g.outcome?.key !== 'pending') {
      console.log(`    → ${g.outcome.cn}${g.outcome.analytics_cn ? ' · ' + g.outcome.analytics_cn : ''}`);
    }
  });

  const r = data.results;
  console.log('\n── 命中率 ──');
  console.log(`  让球盘：${r.spread.hit}/${r.spread.hit + r.spread.miss} = ${r.spread.pct ?? '—'}%`);
  console.log(`  大小球：${r.totals.hit}/${r.totals.hit + r.totals.miss} = ${r.totals.pct ?? '—'}%`);
  console.log(`  倾向项★：${r.primary.hit}/${r.primary.hit + r.primary.miss} = ${r.primary.pct ?? '—'}%`);
  console.log(`  非倾向项：${r.secondary.hit}/${r.secondary.hit + r.secondary.miss} = ${r.secondary.pct ?? '—'}%`);
  console.log(`  全部 12 项：${r.all_legs.hit}/${r.all_legs.hit + r.all_legs.miss} = ${r.all_legs.pct ?? '—'}%`);

  const ca = r.cross_analysis;
  console.log('\n── 交叉赛果（反推用）──');
  console.log(`  倾向未中·另一项命中：${ca.primary_miss_secondary_hit.n} 场${ca.primary_miss_secondary_hit.pct != null ? ` (${ca.primary_miss_secondary_hit.pct}%)` : ''}`);
  ca.primary_miss_secondary_hit.matches.forEach(m => console.log(`    · ${m.id} ${m.match}`));
  console.log(`  倾向命中·另一项未中：${ca.primary_hit_secondary_miss.n} 场`);
  console.log(`  双项均中：${ca.both_hit.n} · 双项均未中：${ca.both_miss.n}`);

  if (r.high_confidence) {
    const h = r.high_confidence;
    console.log(`\n── 大信心场 (${h.n} 场: ${h.ids.join(', ')}) ──`);
    console.log(`  倾向★：${h.primary.hit}/${h.primary.hit + h.primary.miss} = ${h.primary.pct ?? '—'}%`);
    console.log(`  让球：${h.spread.hit}/${h.spread.hit + h.spread.miss} = ${h.spread.pct ?? '—'}% · 大小：${h.totals.hit}/${h.totals.hit + h.totals.miss} = ${h.totals.pct ?? '—'}%`);
  }

  if (r.spread.pending === data.picks.length) console.log('\n  暂无赛果，待赛后运行本脚本。');

  try {
    require('./build-agent-stats.js').build();
  } catch (e) {
    console.warn('build-agent-stats skipped:', e.message);
  }

  return data.results;
}

const arg = process.argv[2] || 'day17';
if (arg === 'day17' || arg === 'all') {
  gradeDay(path.join(__dirname, 'agent-picks-day17.json'));
}
if (arg === 'day18' || arg === 'all') {
  gradeDay(path.join(__dirname, 'agent-picks-day18.json'));
}
if (arg === 'day19' || arg === 'all') {
  gradeDay(path.join(__dirname, 'agent-picks-day19.json'));
}
if (arg === 'day20' || arg === 'all') {
  gradeDay(path.join(__dirname, 'agent-picks-day20.json'));
}
