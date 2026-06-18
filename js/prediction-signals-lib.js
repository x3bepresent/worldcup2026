/**
 * 深度校准 & 小组形势推演 — 共享逻辑（Node + Browser）
 * 内部可参考 handicap 数据；对外仅展示「深度档 / 热度校准」等中性表述。
 */

const SIGNAL_META = {
  genuine_favorite: {
    cn: '实力吻合',
    color: '#5BBF8A',
    desc: '赛前舆论与 xG 实力差基本一致，模型信任该方向。',
  },
  heat_deflection: {
    cn: '预期偏热',
    color: '#C8A96E',
    desc: '舆论一边倒但实力差未同步放大，模型略下调热门方权重。',
  },
  blocker_inflate: {
    cn: '预期偏高',
    color: '#D95F6A',
    desc: '赛前舆论显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。',
  },
  neutral: {
    cn: '均衡',
    color: '#7BB8D4',
    desc: '赛前舆论与模型评估接近，未做方向性微调。',
  },
};

/** 由 xG 粗算隐含深度档（主让为正 = 主队更强） */
function impliedTierFromXg(xgHome, xgAway) {
  const diff = (Number(xgHome) || 0) - (Number(xgAway) || 0);
  if (diff >= 2.2) return 1.75;
  if (diff >= 1.6) return 1.25;
  if (diff >= 1.0) return 0.75;
  if (diff >= 0.5) return 0.25;
  if (diff <= -2.2) return -1.75;
  if (diff <= -1.6) return -1.25;
  if (diff <= -1.0) return -0.75;
  if (diff <= -0.5) return -0.25;
  return 0;
}

function classifySignal(marketTier, xgHome, xgAway, publicLean, publicPct) {
  const implied = impliedTierFromXg(xgHome, xgAway);
  const gap = marketTier - implied;
  const leanMatchesFavorite =
    (marketTier > 0 && publicLean === 'home') || (marketTier < 0 && publicLean === 'away');

  if (Math.abs(gap) <= 0.25) {
    return leanMatchesFavorite && publicPct >= 75 ? 'genuine_favorite' : 'neutral';
  }
  if (gap >= 0.5 && publicPct >= 72) return 'blocker_inflate';
  if (gap <= -0.5 && publicPct >= 70) return 'heat_deflection';
  if (Math.abs(gap) <= 0.5) return 'genuine_favorite';
  return gap > 0 ? 'blocker_inflate' : 'heat_deflection';
}

function computeDepthDelta(signal, marketTier, xgHome, xgAway) {
  const implied = impliedTierFromXg(xgHome, xgAway);
  const gap = marketTier - implied;
  let hw = 0;
  let d = 0;
  let aw = 0;

  if (signal === 'genuine_favorite') {
    if (marketTier > 0) { hw += 2; aw -= 1; d -= 1; }
    else if (marketTier < 0) { aw += 2; hw -= 1; d -= 1; }
  } else if (signal === 'heat_deflection') {
    if (marketTier > 0 || publicFavoredSide(marketTier) === 'home') { hw -= 3; aw += 2; d += 1; }
    else { aw -= 3; hw += 2; d += 1; }
  } else if (signal === 'blocker_inflate') {
    if (marketTier > 0) { hw -= 4; aw += 3; d += 1; }
    else { aw -= 4; hw += 3; d += 1; }
  }

  if (Math.abs(gap) >= 1) {
    if (marketTier > 0) { hw -= 1; aw += 1; }
    else if (marketTier < 0) { aw -= 1; hw += 1; }
  }

  return { home_win: hw, draw: d, away_win: aw };
}

function publicFavoredSide(marketTier) {
  return marketTier > 0 ? 'home' : marketTier < 0 ? 'away' : 'balanced';
}

function normalizeProb(hw, d, aw) {
  let h = Math.max(3, hw);
  let dr = Math.max(3, d);
  let a = Math.max(3, aw);
  const t = h + dr + a;
  return {
    home_win: Math.round((h / t) * 100),
    draw: Math.round((dr / t) * 100),
    away_win: Math.round((a / t) * 100),
  };
}

function formatTierLabel(marketTier, homeName, awayName) {
  const t = Number(marketTier);
  const abs = Math.abs(t);
  let tierStr;
  if (abs === 0) tierStr = '势均力敌';
  else if (Math.abs(abs - 1.25) < 0.01) tierStr = '净胜约 1–2 球';
  else if (Math.abs(abs - 1.75) < 0.01) tierStr = '净胜约 1.5–2 球';
  else if (Math.abs(abs - 0.75) < 0.01) tierStr = '净胜约 0.5–1 球';
  else tierStr = '净胜约 ' + abs + ' 球';
  if (t > 0) return homeName + ' 被看好 · ' + tierStr;
  if (t < 0) return awayName + ' 被看好 · ' + tierStr;
  return '势均力敌';
}

function formatTotalsLineLabel(line) {
  const l = Number(line);
  if (Math.abs(l - 2.75) < 0.01) return '总进球约 2.5–3 个';
  if (Math.abs(l - 2.25) < 0.01) return '总进球约 2–2.5 个';
  if (Math.abs(l - 3.25) < 0.01) return '总进球约 3–3.5 个';
  if (l % 1 === 0.5) return '总进球约 ' + l + ' 个';
  return '总进球约 ' + l + ' 个';
}

/** 分段进球线：返回该总进球数下「大球」一侧的赢面权重（0~1） */
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
  return t > l ? 1 : t === l ? 0 : 0;
}

/** 首球节奏标签 — 条形图为时间窗口占比；主标签看「预期等待时间」 */
const EXCITEMENT_MARGIN = 8;
const MATCH_MINUTES = 90;
/** 预期首球等待（分钟）分档 — 对齐世界杯均值首球约 30 分 */
const WAIT_FAST_MAX = 28;
const WAIT_SLOW_MIN = 42;
/** 条形图时间窗口（分钟）— 30 / 45 / 60，比 22/38 更符合半场结构 */
const RHYTHM_WIN_EARLY = 30;
const RHYTHM_WIN_MID = 45;
const RHYTHM_WIN_LATE = 60;

const RHYTHM_TIER_META = {
  fast: { label: '前 30 分内首球', color: '#5BBF8A' },
  moderate: { label: '30–45 分首球', color: '#C8A96E' },
  slow: { label: '45 分后首球', color: '#7BB8D4' },
};

function classifyRhythmLabel(fastPct, modPct, slowPct, expectedWait) {
  const subBase = expectedWait != null
    ? '预期首球等待约 ' + expectedWait + ' 分'
    : '首球等待';

  if (expectedWait != null) {
    if (expectedWait <= WAIT_FAST_MAX) {
      return {
        label_cn: '偏早',
        label_key: 'fast',
        label_color: RHYTHM_TIER_META.fast.color,
        sub_cn: subBase,
      };
    }
    if (expectedWait <= WAIT_SLOW_MIN) {
      return {
        label_cn: '中速开局',
        label_key: 'moderate',
        label_color: RHYTHM_TIER_META.moderate.color,
        sub_cn: subBase,
      };
    }
    return {
      label_cn: '偏晚',
      label_key: 'slow',
      label_color: RHYTHM_TIER_META.slow.color,
      sub_cn: subBase,
    };
  }

  const modLeadSlow = modPct - slowPct;
  const modLeadFast = modPct - fastPct;
  const slowHeavy = slowPct >= 26;
  const fastHot = fastPct >= 32;

  if (slowPct >= modPct + EXCITEMENT_MARGIN && slowPct >= fastPct + EXCITEMENT_MARGIN) {
    return {
      label_cn: '闷战',
      label_key: 'slow',
      label_color: RHYTHM_TIER_META.slow.color,
      sub_cn: subBase + ' · 闷战 ' + slowPct + '% 明显领先',
    };
  }
  if (fastPct >= modPct + EXCITEMENT_MARGIN && fastPct >= slowPct + EXCITEMENT_MARGIN) {
    return {
      label_cn: '偏早',
      label_key: 'fast',
      label_color: RHYTHM_TIER_META.fast.color,
      sub_cn: subBase + ' · 前 30 分内首球 ' + fastPct + '% 明显领先',
    };
  }

  if (slowHeavy && modLeadSlow < EXCITEMENT_MARGIN) {
    return {
      label_cn: '接近均衡 · 略偏闷',
      label_key: 'slow',
      label_color: RHYTHM_TIER_META.slow.color,
      sub_cn: subBase + ' · 闷战 ' + slowPct + '% · 中速开局 ' + modPct + '%（中速领先不足 ' + EXCITEMENT_MARGIN + '%）',
    };
  }
  if (fastHot && modLeadFast < EXCITEMENT_MARGIN) {
    return {
      label_cn: '接近均衡 · 略偏早',
      label_key: 'fast',
      label_color: RHYTHM_TIER_META.fast.color,
      sub_cn: subBase + ' · 前 30 分 ' + fastPct + '% · 30–45 分 ' + modPct + '%（窗口差不足 ' + EXCITEMENT_MARGIN + '%）',
    };
  }
  if (modPct >= slowPct + EXCITEMENT_MARGIN && modPct >= fastPct + EXCITEMENT_MARGIN) {
    return {
      label_cn: '中速开局',
      label_key: 'moderate',
      label_color: RHYTHM_TIER_META.moderate.color,
      sub_cn: subBase + ' · 中速开局 ' + modPct + '% 明显领先',
    };
  }

  if (modLeadSlow >= 0 && modLeadFast >= 0) {
    return {
      label_cn: '接近均衡 · 偏中速',
      label_key: 'moderate',
      label_color: RHYTHM_TIER_META.moderate.color,
      sub_cn: subBase + ' · 中速开局 ' + modPct + '% 略高，但未拉开差距',
    };
  }
  if (slowPct >= fastPct) {
    return {
      label_cn: '接近均衡 · 略偏闷',
      label_key: 'slow',
      label_color: RHYTHM_TIER_META.slow.color,
      sub_cn: subBase + ' · 闷战 ' + slowPct + '% vs 闪电战 ' + fastPct + '%',
    };
  }
  return {
    label_cn: '接近均衡 · 略偏快',
    label_key: 'fast',
    label_color: RHYTHM_TIER_META.fast.color,
    sub_cn: subBase + ' · 闪电战 ' + fastPct + '% vs 闷战 ' + slowPct + '%',
  };
}

/**
 * 进球节奏 — 按 Poisson 首球前等待时间分档（与总进球数分开展示）
 * @param {object} [opts] — minutes: 有效比赛时长；afterFirstGoal: 已有一球时推演下一球节奏
 */
function buildExcitementView(xgHome, xgAway, opts) {
  const xgH = Math.max(0, Number(xgHome) || 0);
  const xgA = Math.max(0, Number(xgAway) || 0);
  const totalXg = xgH + xgA;
  const minutes = opts?.minutes ?? (opts?.afterFirstGoal
    ? MATCH_MINUTES * FIRST_GOAL_REMAIN_XG
    : MATCH_MINUTES);
  const scale = minutes / MATCH_MINUTES;
  const tEarly = RHYTHM_WIN_EARLY * scale;
  const tMid = RHYTHM_WIN_MID * scale;
  const tLate = RHYTHM_WIN_LATE * scale;

  let fastPct = 0;
  let modPct = 0;
  let slowPct = 0;
  let expectedWait = null;

  if (totalXg > 0 && minutes > 0) {
    const rate = totalXg / minutes;
    const pEarly = 1 - Math.exp(-rate * tEarly);
    const pMidEnd = 1 - Math.exp(-rate * tMid);
    const pLateEnd = 1 - Math.exp(-rate * tLate);
    fastPct = Math.round(pEarly * 1000) / 10;
    modPct = Math.round((pMidEnd - pEarly) * 1000) / 10;
    slowPct = Math.round((1 - pMidEnd) * 1000) / 10;
    expectedWait = Math.round((minutes / totalXg) * 10) / 10;
  }

  const meta = classifyRhythmLabel(fastPct, modPct, slowPct, expectedWait);

  return {
    label_cn: meta.label_cn,
    label_key: meta.label_key,
    label_color: meta.label_color,
    sub_cn: meta.sub_cn,
    first_goal_wait: expectedWait,
    fast_pct: fastPct,
    moderate_pct: modPct,
    slow_pct: slowPct,
    tiers: [
      { key: 'fast', label: RHYTHM_TIER_META.fast.label, pct: fastPct },
      { key: 'moderate', label: RHYTHM_TIER_META.moderate.label, pct: modPct },
      { key: 'slow', label: RHYTHM_TIER_META.slow.label, pct: slowPct },
    ],
  };
}

/** @deprecated 保留旧导出名；进球节奏请用 buildExcitementView */
function classifyExcitementLabel(dullPct, modPct, highPct, expectedTotal) {
  return classifyRhythmLabel(highPct, modPct, dullPct, null);
}

/** 先进球后剩余时段 xG 占全场比例（约 25–30 分钟首开 ≈ 剩余 55–60 分钟） */
const FIRST_GOAL_REMAIN_XG = 0.82;

/**
 * 给定已有比分 + 剩余时段 xG，泊松推演终场分布（用于先进球情景）
 */
function computeConditionalDisplaySummary(startH, startA, remXgH, remXgA, marketTier, homeName, awayName) {
  const maxGoals = 5;
  const xgH = Math.max(0, Number(remXgH) || 0);
  const xgA = Math.max(0, Number(remXgA) || 0);
  const sH = Math.max(0, Number(startH) || 0);
  const sA = Math.max(0, Number(startA) || 0);
  const tier = Number(marketTier) || 0;
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : (sH + xgH >= sA + xgA ? 'home' : 'away');
  const favName = favSide === 'home' ? homeName : awayName;

  const fact = [1, 1, 2, 6, 24, 120];
  function pois(k, lam) {
    if (k < 0 || k > maxGoals) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }

  let mass = 0;
  let smallLead = 0;
  let bigCover = 0;
  let favWin = 0;
  let favDraw = 0;
  let favLose = 0;
  let goals01 = 0;
  let goals23 = 0;
  let goals4p = 0;
  let expectedTotalRaw = 0;

  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = pois(h, xgH) * pois(a, xgA);
      mass += p;
      const finalH = sH + h;
      const finalA = sA + a;
      const m = finalH - finalA;
      const favMargin = favSide === 'home' ? m : -m;
      if (favMargin === 1) smallLead += p;
      if (favMargin >= 2) bigCover += p;
      if (favMargin >= 1) favWin += p;
      if (favMargin === 0) favDraw += p;
      if (favMargin < 0) favLose += p;
      const total = finalH + finalA;
      expectedTotalRaw += total * p;
      if (total <= 1) goals01 += p;
      else if (total <= 3) goals23 += p;
      else goals4p += p;
    }
  }
  if (mass <= 0) mass = 1;
  const pct = x => Math.round((x / mass) * 1000) / 10;

  const dullPct = pct(goals01);
  const modPct = pct(goals23);
  const highPct = pct(goals4p);
  const expectedTotal = expectedTotalRaw / mass;
  const excitement = buildExcitementView(remXgH, remXgA, { afterFirstGoal: true });

  return {
    fav_name: favName,
    start_score: sH + '-' + sA,
    expected_total_goals: Math.round(expectedTotal * 100) / 100,
    small_lead_pct: pct(smallLead),
    big_cover_pct: pct(bigCover),
    fav_win_pct: pct(favWin),
    fav_draw_pct: pct(favDraw),
    fav_lose_pct: pct(favLose),
    excitement,
  };
}

const WIN_SHAPE_DEFS = [
  { key: 'narrow_low', label: '险胜 · 控局', example: '如 1-0' },
  { key: 'narrow_open', label: '险胜 · 开放', example: '如 2-1' },
  { key: 'comfort_low', label: '拉开 · 控局', example: '如 2-0' },
  { key: 'comfort_open', label: '拉开 · 开放', example: '如 3-1+' },
];

const WIN_SHAPE_LEAD = {
  narrow_low: '取胜时以险胜·控局为主',
  narrow_open: '取胜时以险胜·开放为主',
  comfort_low: '取胜时以拉开·控局为主',
  comfort_open: '取胜时以拉开·开放为主',
};

/** 取胜条件下四形态占比（合计 100%） */
function buildWinShapeView(favName, favWin, mass, narrowLow, narrowOpen, comfortLow, comfortOpen, fieldPct) {
  const buckets = { narrow_low: narrowLow, narrow_open: narrowOpen, comfort_low: comfortLow, comfort_open: comfortOpen };
  if (favWin <= 0) {
    return {
      fav_name: favName,
      fav_win_pct: null,
      note: '模型认为取胜概率偏低，以下路径仅供参考。',
      lead_cn: null,
      shapes: [],
    };
  }
  let shapes = WIN_SHAPE_DEFS.map(def => ({
    key: def.key,
    label: def.label,
    example: def.example,
    field_pct: fieldPct(buckets[def.key]),
    pct: Math.round((buckets[def.key] / favWin) * 1000) / 10,
  }));
  const sum = shapes.reduce((s, x) => s + x.pct, 0);
  const drift = Math.round((100 - sum) * 10) / 10;
  if (drift !== 0) {
    const top = shapes.reduce((a, b) => (b.pct > a.pct ? b : a));
    top.pct = Math.round((top.pct + drift) * 10) / 10;
  }
  const lead = shapes.reduce((a, b) => (b.pct > a.pct ? b : a));
  const paths = buildSimplifiedWinPaths(shapes);
  return {
    fav_name: favName,
    note: '以下为模型在「该队取胜」假设下的路径分布，三项合计 100%。',
    lead_cn: WIN_SHAPE_LEAD[lead.key] + '（' + lead.label + ' ' + lead.pct + '%）',
    shapes,
    paths,
  };
}

/** 取胜条件下三路合并：险胜 / 零封拉开 / 开放拉开 */
function buildSimplifiedWinPaths(shapes) {
  if (!shapes?.length) return [];
  const pct = k => shapes.find(s => s.key === k)?.pct || 0;
  let rows = [
    { key: 'narrow', label: '险胜收工', example: '如 1-0、2-1', pct: Math.round((pct('narrow_low') + pct('narrow_open')) * 10) / 10 },
    { key: 'clean', label: '零封拉开', example: '如 2-0、3-0', pct: Math.round(pct('comfort_low') * 10) / 10 },
    { key: 'open', label: '开放拉开', example: '如 3-1+', pct: Math.round(pct('comfort_open') * 10) / 10 },
  ];
  const sum = rows.reduce((s, r) => s + r.pct, 0);
  const drift = Math.round((100 - sum) * 10) / 10;
  if (drift !== 0) {
    const top = rows.reduce((a, b) => (b.pct > a.pct ? b : a));
    top.pct = Math.round((top.pct + drift) * 10) / 10;
  }
  return rows;
}

/** 净胜差距参考文案（中性，无盘口用语） */
function formatMarginOutlookLabel(marketTier, favName) {
  const t = Number(marketTier) || 0;
  if (t === 0) return '净胜差距参考 · 势均力敌';
  const abs = Math.abs(t);
  const need = abs >= 1.5 ? '≥2 球' : abs >= 0.75 ? '≥1–2 球' : '≥1 球';
  return favName + ' · 赛前净胜参考 ' + need;
}

/**
 * 取胜路径 + 对着赛前参考线的走线概率（泊松推演，非真实指数）
 * @param {object} [opts] — startH/startA/remRatio 用于「已领先」情景
 */
function computeWinOutlook(xgHome, xgAway, marketTier, totalsLine, favName, winShape, opts) {
  const maxGoals = 5;
  const tier = Number(marketTier) || 0;
  const line = Number(totalsLine) || 2.5;
  const remRatio = opts?.remRatio ?? 1;
  const startH = opts?.startH ?? 0;
  const startA = opts?.startA ?? 0;
  const stateLabel = opts?.stateLabel || null;

  const xgH = Math.max(0, Number(xgHome) || 0) * remRatio;
  const xgA = Math.max(0, Number(xgAway) || 0) * remRatio;
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : (xgHome >= xgAway ? 'home' : 'away');

  const fact = [1, 1, 2, 6, 24, 120];
  function pois(k, lam) {
    if (k < 0 || k > maxGoals) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }

  let mass = 0;
  let favWin = 0;
  let favWinTotalLe2 = 0;
  let favMargin2TotalLe2 = 0;
  let favMargin2TotalHigh = 0;
  let favMargin1 = 0;
  let favMargin2 = 0;
  let totalsHigh = 0;

  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = pois(h, xgH) * pois(a, xgA);
      mass += p;
      const fh = startH + h;
      const fa = startA + a;
      const m = fh - fa;
      const favMargin = favSide === 'home' ? m : -m;
      const total = fh + fa;
      const highW = totalsOverWeight(total, line);
      totalsHigh += p * highW;
      if (favMargin >= 1) {
        favWin += p;
        if (total <= 2) favWinTotalLe2 += p;
        if (favMargin === 1) favMargin1 += p;
        if (favMargin >= 2) {
          favMargin2 += p;
          if (total <= 2) favMargin2TotalLe2 += p;
          if (highW >= 0.5) favMargin2TotalHigh += p;
        }
      }
    }
  }
  if (mass <= 0) mass = 1;
  const pct = x => Math.round((x / mass) * 1000) / 10;

  const cover = computeSpreadCover(
    (Number(xgHome) || 0) * remRatio,
    (Number(xgAway) || 0) * remRatio,
    tier,
    maxGoals
  );
  const totalsHighPct = pct(totalsHigh);
  const totalsLowPct = Math.round((100 - totalsHighPct) * 10) / 10;

  const paths = winShape?.paths?.length
    ? winShape.paths
    : buildSimplifiedWinPaths(winShape?.shapes || []);

  const topPath = paths.length ? paths.reduce((a, b) => (b.pct > a.pct ? b : a)) : null;
  const marginMeet = stateLabel ? pct(favMargin2) : cover.full_cover_pct;
  const marginFail = stateLabel ? pct(favMargin1) : cover.half_lose_pct;

  let readout = '';
  if (stateLabel) {
    readout = stateLabel + '：仍取胜约 ' + pct(favWin) + '%；对着赛前 '
      + formatTotalsLineLabel(line) + '，总进球偏高一侧约 ' + totalsHighPct + '%。';
    if (pct(favMargin2TotalLe2) >= 10) {
      readout += ' 常见收尾如 2-0（净胜达标、总进球仍偏低）。';
    } else if (topPath) {
      readout += ' 若再扩大，偏「' + topPath.label + '」。';
    }
  } else {
    readout = '取胜约 ' + (winShape?.fav_win_pct ?? pct(favWin)) + '%；若取胜，';
    if (topPath) readout += '以「' + topPath.label + '」为主（' + topPath.pct + '%）。';
    readout += ' 对着赛前净胜参考，差距达标约 ' + marginMeet + '%；';
    readout += '对着 ' + formatTotalsLineLabel(line) + '，总进球偏高一侧约 ' + totalsHighPct + '%。';
    if (pct(favMargin2TotalLe2) >= 12) {
      readout += ' 注意 2-0 类：净胜达标但总进球仍可能偏低。';
    }
  }

  return {
    fav_name: favName,
    state_label: stateLabel,
    paths,
    margin_line_cn: formatMarginOutlookLabel(tier, favName),
    margin_meet_pct: marginMeet,
    margin_fail_pct: marginFail,
    margin_fail_note: '常见：仅赢 1 球（如 1-0、2-1）',
    totals_line: line,
    totals_line_cn: formatTotalsLineLabel(line),
    totals_high_pct: totalsHighPct,
    totals_low_pct: totalsLowPct,
    totals_fail_note: '常见：总进球 ≤2（如 1-0、2-0）',
    win_low_total_pct: pct(favWinTotalLe2),
    win_margin2_low_total_pct: pct(favMargin2TotalLe2),
    win_margin2_high_total_pct: pct(favMargin2TotalHigh),
    readout_cn: readout,
  };
}

/**
 * 页面展示用 — 三项简单汇总（内部盘口数据不变，仅提炼泊松概率）
 * @returns {{ fav_name, small_lead_pct, win_shape, big_cover_pct, excitement, ... }}
 */
function computeDisplaySummary(xgHome, xgAway, marketTier, homeName, awayName) {
  const maxGoals = 5;
  const xgH = Math.max(0, Number(xgHome) || 0);
  const xgA = Math.max(0, Number(xgAway) || 0);
  const tier = Number(marketTier) || 0;
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : (xgH >= xgA ? 'home' : 'away');
  const favName = favSide === 'home' ? homeName : awayName;

  const fact = [1, 1, 2, 6, 24, 120];
  function pois(k, lam) {
    if (k < 0 || k > maxGoals) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }

  let mass = 0;
  let smallLead = 0;
  let bigCover = 0;
  let favWin = 0;
  let exampleSmall = 0;
  let exampleBig = 0;
  let goals01 = 0;
  let goals23 = 0;
  let goals4p = 0;
  let expectedTotalRaw = 0;
  let narrowLow = 0;
  let narrowOpen = 0;
  let comfortLow = 0;
  let comfortOpen = 0;
  let smallExH = favSide === 'home' ? 1 : 0;
  let smallExA = favSide === 'home' ? 0 : 1;
  let bigExH = favSide === 'home' ? 2 : 0;
  let bigExA = favSide === 'home' ? 0 : 2;

  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = pois(h, xgH) * pois(a, xgA);
      mass += p;
      const m = h - a;
      const favMargin = favSide === 'home' ? m : -m;
      const total = h + a;
      if (favMargin === 1) smallLead += p;
      if (favMargin >= 2) bigCover += p;
      if (favMargin >= 1) {
        favWin += p;
        if (favMargin === 1 && total <= 2) narrowLow += p;
        else if (favMargin === 1 && total >= 3) narrowOpen += p;
        else if (favMargin >= 2 && total <= 3) comfortLow += p;
        else if (favMargin >= 2 && total >= 4) comfortOpen += p;
      }
      if (h === smallExH && a === smallExA) exampleSmall += p;
      if (h === bigExH && a === bigExA) exampleBig += p;
      expectedTotalRaw += total * p;
      if (total <= 1) goals01 += p;
      else if (total <= 3) goals23 += p;
      else goals4p += p;
    }
  }
  if (mass <= 0) mass = 1;
  const pct = x => Math.round((x / mass) * 1000) / 10;
  const winShape = buildWinShapeView(
    favName,
    favWin,
    mass,
    narrowLow,
    narrowOpen,
    comfortLow,
    comfortOpen,
    pct
  );

  const dullPct = pct(goals01);
  const modPct = pct(goals23);
  const highPct = pct(goals4p);
  const expectedTotal = expectedTotalRaw / mass;
  const excitement = buildExcitementView(xgH, xgA);

  const smallScore = smallExH + '-' + smallExA;
  const bigScore = bigExH + '-' + bigExA;

  return {
    fav_name: favName,
    expected_total_goals: Math.round(expectedTotal * 100) / 100,
    poisson_fav_win_pct: pct(favWin),
    small_lead_pct: pct(smallLead),
    small_example_score: smallScore,
    small_example_pct: pct(exampleSmall),
    big_cover_pct: pct(bigCover),
    big_example_score: bigScore,
    big_example_pct: pct(exampleBig),
    win_shape: winShape,
    excitement,
  };
}

const HALF_XG_RATIO = 0.45;

/** 教练板凳深度粗分（用于「0-0 进半场 → 2H 破局」路径） */
function scoreBenchDepth(coach) {
  if (!coach) return 0;
  const text = [
    coach.style_summary, coach.match_note, coach.subs?.note, coach.subs?.pattern,
    ...(coach.traits || []),
  ].join(' ');
  let score = 0;
  if (/深度|碾压|板凳|轮换|Cherki|Thuram|Barcola|替补/.test(text)) score += 2;
  if (/60'|65'|62'|半场/.test(text)) score += 1;
  if (/保守|保护|C罗|控节奏/.test(text)) score -= 1;
  return Math.max(0, Math.min(3, score));
}

/** 赛前比赛类型标签 */
function inferMatchArchetype(match, xgH, xgA, tier, upsetAlert, ctx) {
  const tags = [];
  const total = xgH + xgA;
  const xgDiff = Math.abs(xgH - xgA);
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : (xgH >= xgA ? 'home' : 'away');
  const favCoach = favSide === 'home' ? ctx?.coach_home : ctx?.coach_away;
  const dogCoach = favSide === 'home' ? ctx?.coach_away : ctx?.coach_home;
  const dogVsStrong = (dogCoach?.vs_strong?.detail || '') + (dogCoach?.style_summary || '');

  if (xgDiff >= 1.0 && (favSide === 'home' ? xgH : xgA) >= 1.75) {
    tags.push({ key: 'dominance', label: '压制局' });
  }
  if (/低位|龟缩|5-4-1|4-5-1|收缩|铁桶|纪律/.test(dogVsStrong)
    || classifyCoachPhase(dogCoach, 'leading') === 'defensive') {
    tags.push({ key: 'low_block', label: '低位反击' });
  }
  if (Math.abs(tier) <= 0.5 && total >= 2.75) {
    tags.push({ key: 'even_open', label: '均势开放' });
  }
  if (total <= 2.25) {
    tags.push({ key: 'low_scoring', label: '进球偏少' });
  }
  if (!tags.length) tags.push({ key: 'balanced', label: '常规对抗' });

  const depthScore = scoreBenchDepth(favCoach);
  const drawTrapPct = upsetAlert?.cold_result_pct
    ?? Math.round((match.prediction?.draw || 20) * 0.85);

  return {
    tags,
    depth_score: depthScore,
    depth_label: depthScore >= 2 ? '板凳深度偏高' : depthScore >= 1 ? '有一定轮换空间' : '深度一般',
    draw_trap_pct: drawTrapPct,
    fav_lead_style: classifyCoachPhase(favCoach, 'leading'),
  };
}

function poissonOutcomeMass(xgH, xgA, marketTier, maxGoals) {
  maxGoals = maxGoals || 5;
  const tier = Number(marketTier) || 0;
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : (xgH >= xgA ? 'home' : 'away');
  const fact = [1, 1, 2, 6, 24, 120];
  function pois(k, lam) {
    if (k < 0 || k > maxGoals) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }
  let mass = 0;
  let favWin = 0;
  let draw = 0;
  let lose = 0;
  let score00 = 0;
  let score11 = 0;
  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = pois(h, xgH) * pois(a, xgA);
      mass += p;
      const m = h - a;
      const favMargin = favSide === 'home' ? m : -m;
      if (favMargin >= 1) favWin += p;
      else if (favMargin === 0) draw += p;
      else lose += p;
      if (h === 0 && a === 0) score00 += p;
      if (h === 1 && a === 1) score11 += p;
    }
  }
  if (mass <= 0) mass = 1;
  const pct = x => Math.round((x / mass) * 1000) / 10;
  return {
    fav_side: favSide,
    fav_win_pct: pct(favWin),
    draw_pct: pct(draw),
    lose_pct: pct(lose),
    score_00_pct: pct(score00),
    score_11_pct: pct(score11),
  };
}

function poissonHtScorePct(xgH, xgA, htH, htA, maxGoals) {
  maxGoals = maxGoals || 4;
  const fh = xgH * HALF_XG_RATIO;
  const fa = xgA * HALF_XG_RATIO;
  const fact = [1, 1, 2, 6, 24];
  function pois(k, lam) {
    if (k < 0 || k > maxGoals) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }
  return Math.round(pois(htH, fh) * pois(htA, fa) * 1000) / 10;
}

function buildMorphologyReadout(archetype, excitement, totalsView, favName) {
  const typeLabels = archetype.tags.map(t => t.label).join(' · ');
  const wait = excitement?.first_goal_wait;
  const totalHint = totalsView?.expected_total != null
    ? '总进球约 ' + totalsView.expected_total + ' 个'
    : '';
  let tail = '';
  if (archetype.tags.some(t => t.key === 'dominance') && archetype.tags.some(t => t.key === 'low_block')) {
    tail = wait != null && wait <= 30
      ? '热门可能早早破局，也可能被拖进下半场；低位队守平时需防平局。'
      : '若半场仍 0-0，' + (archetype.depth_score >= 2 ? '热门板凳有破局权。' : '比赛易趋闷。');
  } else if (archetype.tags.some(t => t.key === 'low_scoring')) {
    tail = '进球预期不高，小比分与平局权重上升。';
  } else if (archetype.tags.some(t => t.key === 'even_open')) {
    tail = '双方势均，总进球与互有进球概率都不低。';
  } else {
    tail = totalHint ? totalHint + '；按常规模型读即可。' : '按 xG 与教练风格综合读场。';
  }
  return favName + ' · ' + typeLabels + '。' + tail;
}

/**
 * 未知赛赛前预读（形态标签；无 LIVE 激活）
 */
function buildMatchPreview(match, displaySummary, adjusted, tier, ctx) {
  const xgH = ctx.xg_home;
  const xgA = ctx.xg_away;
  const archetype = inferMatchArchetype(match, xgH, xgA, tier, match.upset_alert, ctx);
  const excitement = displaySummary.excitement;
  const totalsView = displaySummary.totals_view;
  const favName = displaySummary.fav_name;

  const morphology = {
    totals_summary: totalsView?.summary_cn || null,
    totals_line_cn: displaySummary.win_outlook?.totals_line_cn,
    totals_high_pct: displaySummary.win_outlook?.totals_high_pct,
    type_tags: archetype.tags,
    depth_label: archetype.depth_label,
    draw_trap_pct: archetype.draw_trap_pct,
    readout_cn: buildMorphologyReadout(archetype, excitement, totalsView, favName),
  };

  let drawTrapNote = null;
  if (archetype.tags.some(t => t.key === 'low_block')) {
    drawTrapNote = '平局风险：低位反击队若先进球或被追平，'
      + '1-1 / 0-0 比客胜更现实（约 ' + archetype.draw_trap_pct + '% 冷门空间含平局）。';
  }

  return {
    morphology,
    draw_trap_note: drawTrapNote,
    archetype,
  };
}

function enrichActualResultForReview(match) {
  const ar = match?.actualResult;
  if (!ar) return null;
  const out = { ...ar };
  if (!out.ht_score && match.lineup?.note) {
    const htM = match.lineup.note.match(/半场\s*(\d-\d)/);
    if (htM) out.ht_score = htM[1];
  }
  if (out.first_goal_min == null && ar.scorers) {
    const mins = [...String(ar.scorers).matchAll(/(\d+)(?:\+(\d+))?'/g)]
      .map(m => parseInt(m[1], 10) + (m[2] ? parseInt(m[2], 10) : 0));
    if (mins.length) out.first_goal_min = Math.min(...mins);
  }
  return out;
}

/** 赛后复盘：对照赛前预读（仅赛果归档时写入 depth_calibration.preview_replay） */
function buildPreviewPostMatchReview(preview, actualResult, homeName, awayName) {
  if (!preview || !actualResult) return null;
  const hs = actualResult.home_score;
  const as = actualResult.away_score;
  const total = hs + as;
  const ht = actualResult.ht_score || actualResult.half_time;
  const hits = [];
  const misses = [];

  const expTotal = preview.morphology?.totals_summary;
  if (total <= 2 && /偏少|≤2|2\.[0-2]/.test(expTotal || '')) hits.push('总进球偏少方向一致');
  if (total >= 4 && preview.morphology?.totals_high_pct >= 45) hits.push('总进球偏多方向一致');

  return {
    actual_score: hs + '-' + as,
    ht_score: ht || null,
    hits,
    misses,
    summary_cn: (hits.length ? '命中：' + hits.join(' · ') + '。' : '')
      + (misses.length ? ' 偏差：' + misses.join(' · ') + '。' : ''),
  };
}

/** 从教练 profile 推断领先/落后时的战术倾向 */
function classifyCoachPhase(coach, phase) {
  const block = phase === 'leading' ? coach?.when_leading : coach?.when_trailing;
  const text = ((block?.label || '') + (block?.detail || '') + (coach?.style_summary || '')).toLowerCase();
  if (/收缩|退守|铁桶|龟缩|低位|4-5-1|5-4-1|控节奏|维持低位|守/.test(text)) return 'defensive';
  if (/压迫|对攻|堆边锋|堆前锋|进攻|宽度|不留余地|继续|加码|冲击|更疯/.test(text)) return 'aggressive';
  return 'balanced';
}

function injuryXgPenalty(injuries) {
  let pen = 0;
  for (const inj of injuries || []) {
    const st = (inj.status || '').toUpperCase();
    if (st === 'OUT' || st === 'OUT_FOR_SEASON' || st === 'SUSPENDED') pen += 0.09;
    else if (st === 'DOUBT' || st === 'QUESTIONABLE') pen += 0.035;
  }
  return Math.min(0.28, pen);
}

function summarizeInjuries(teamName, injuries) {
  const outs = (injuries || []).filter(i => /OUT|SUSPENDED/i.test(i.status || ''));
  const doubts = (injuries || []).filter(i => /DOUBT|QUESTIONABLE/i.test(i.status || ''));
  if (!outs.length && !doubts.length) {
    return { mod: 0, note: teamName + ' 暂无重要伤停' };
  }
  const parts = [];
  if (outs.length) parts.push(outs.map(i => i.player).slice(0, 2).join('、') + ' 缺阵');
  if (doubts.length) parts.push(doubts.map(i => i.player).slice(0, 2).join('、') + ' 存疑');
  return { mod: injuryXgPenalty(injuries), note: teamName + '：' + parts.join('；') };
}

function weatherXgModifier(weather) {
  if (!weather) return { mod: 1, note: '气候信息暂无' };
  let mod = 1;
  const lvl = (weather.impact_level || '').toUpperCase();
  if (lvl === 'HIGH') mod *= 0.88;
  else if (lvl === 'MEDIUM') mod *= 0.94;
  if ((weather.rain_chance || 0) >= 55) mod *= 0.92;
  else if ((weather.rain_chance || 0) >= 35) mod *= 0.96;
  if ((weather.temp || 20) >= 33) mod *= 0.94;
  if ((weather.temp || 20) <= 5) mod *= 0.96;
  const note = weather.impact_summary || weather.impact
    || (weather.condition_cn ? weather.condition_cn + ' · 影响' + (lvl || '低') : '赛场气候已纳入考量');
  return { mod, note };
}

/** 伤病 + 气候 → 调整后 xG（仅用于展示概要） */
function buildMatchContextAdjustments(match, xgHome, xgAway) {
  const homeInj = summarizeInjuries(match.home?.name || '主队', match.home?.injuries);
  const awayInj = summarizeInjuries(match.away?.name || '客队', match.away?.injuries);
  const wx = weatherXgModifier(match.weather);

  let xgH = Math.max(0.15, xgHome * (1 - homeInj.mod) * wx.mod);
  let xgA = Math.max(0.15, xgAway * (1 - awayInj.mod) * wx.mod);
  xgH = Math.round(xgH * 100) / 100;
  xgA = Math.round(xgA * 100) / 100;

  const coachH = match.coach_analysis?.home;
  const coachA = match.coach_analysis?.away;
  const factors = [
    { icon: '🏥', label: '伤病', note: homeInj.note + ' · ' + awayInj.note },
    {
      icon: '👔',
      label: '教练风格',
      note: (coachH?.when_leading?.label || '—') + ' / ' + (coachA?.when_leading?.label || '—')
        + '（领先时）',
    },
    { icon: '🌤️', label: '气候', note: wx.note },
  ];
  return { xg_home: xgH, xg_away: xgA, factors, coach_home: coachH, coach_away: coachA };
}

function applyScenarioXg(xgH, xgA, coachHome, coachAway, scorerSide) {
  const homeLead = classifyCoachPhase(coachHome, 'leading');
  const homeTrail = classifyCoachPhase(coachHome, 'trailing');
  const awayLead = classifyCoachPhase(coachAway, 'leading');
  const awayTrail = classifyCoachPhase(coachAway, 'trailing');

  const leadMod = { defensive: 0.88, balanced: 0.94, aggressive: 1.03 };
  const trailMod = { defensive: 0.93, balanced: 1.06, aggressive: 1.16 };

  let h = xgH;
  let a = xgA;
  let leadStyle;
  let trailStyle;

  if (scorerSide === 'home') {
    leadStyle = homeLead;
    trailStyle = awayTrail;
    h *= leadMod[homeLead];
    a *= trailMod[awayTrail];
  } else {
    leadStyle = awayLead;
    trailStyle = homeTrail;
    h *= trailMod[homeTrail];
    a *= leadMod[awayLead];
  }

  let totalMod = 1;
  if (leadStyle === 'defensive') totalMod *= 0.90;
  if (leadStyle === 'aggressive') totalMod *= 1.04;
  if (trailStyle === 'aggressive') totalMod *= 1.06;
  if (trailStyle === 'defensive') totalMod *= 0.96;
  h *= totalMod;
  a *= totalMod;

  return {
    xg_home: Math.round(h * 100) / 100,
    xg_away: Math.round(a * 100) / 100,
    lead_style: leadStyle,
    trail_style: trailStyle,
  };
}

function buildScenarioNarrative(scorerName, chaserName, scorerCoach, chaserCoach, summary, baseline, leadStyle, trailStyle, scorerIsFav) {
  const leadLabel = scorerCoach?.when_leading?.label || '巩固防守';
  const trailLabel = chaserCoach?.when_trailing?.label || '组织反扑';
  const bigDelta = Math.round((summary.big_cover_pct - baseline.big_cover_pct) * 10) / 10;
  const startNote = summary.start_score ? '（已 ' + summary.start_score + '）' : '';

  let bigNote = '净胜两球及以上概率与全场预期接近';
  if (!scorerIsFav && bigDelta <= -4) {
    bigNote = '热门先丢球' + startNote + '，需再进至少两球才能净胜两球以上，该路径概率明显下降';
  } else if (scorerIsFav && bigDelta <= -4) {
    bigNote = '领先后倾向控节奏，净胜两球及以上概率下降';
  } else if (scorerIsFav && bigDelta >= 4) {
    bigNote = '领先方继续进攻，仍有较大空间扩大比分';
  } else if (!scorerIsFav && bigDelta >= 2) {
    bigNote = '落后方压上反扑，比赛更开放，但热门要净胜两球以上仍须连续破门';
  } else if (bigDelta <= -4) {
    bigNote = '净胜两球及以上概率下降';
  } else if (bigDelta >= 4) {
    bigNote = '净胜两球及以上概率上升';
  }

  if (leadStyle === 'defensive' && trailStyle === 'defensive') {
    if (scorerIsFav) bigNote = '领先后双方可能转入守势，比分差距不易再拉大';
  } else if (leadStyle === 'defensive' && trailStyle === 'aggressive') {
    bigNote = '领先方收缩、落后方压上，比赛更开放；净胜两球以上仍取决于热门能否连续破门';
  }

  return scorerName + ' 先破门' + startNote + ' → 「' + leadLabel + '」；' + chaserName + ' 「' + trailLabel + '」。'
    + bigNote + '。';
}

/** 先进球情景 — 终场结局概率（按热门先/后破门分开展示） */
function buildScenarioOutcomes(summary, scorerIsFav, scorerName) {
  const fav = summary.fav_name;
  if (scorerIsFav) {
    return [
      { key: 'hold_win', label: fav + ' 保持胜果（净胜≥1）', pct: summary.fav_win_pct },
      { key: 'drawn', label: '被扳平', pct: summary.fav_draw_pct },
      { key: 'lost', label: '被逆转落败', pct: summary.fav_lose_pct },
    ];
  }
  const scorer = scorerName || '先进球队';
  return [
    { key: 'draw', label: fav + ' 追平（平局）', pct: summary.fav_draw_pct },
    { key: 'win1', label: fav + ' 净胜1球翻盘（如 2-1）', pct: summary.small_lead_pct },
    { key: 'win2', label: fav + ' 净胜≥2球翻盘（如 3-1）', pct: summary.big_cover_pct },
    { key: 'upset_hold', label: scorer + ' 保持胜果至终场', pct: summary.fav_lose_pct },
  ];
}

/** 高亮项：热门先进球 → 赛前热门仍胜；冷门先进球 → 热门追分合计更高则高亮合计，否则高亮最高单条终局 */
function pickScenarioExpectedKey(outcomes, scorerIsFav, summary) {
  if (!outcomes?.length) return null;
  if (scorerIsFav) {
    const hold = outcomes.find(o => o.key === 'hold_win');
    if (hold) return hold.key;
  }
  const recoverPct = (summary?.fav_win_pct || 0) + (summary?.fav_draw_pct || 0);
  const upsetPct = summary?.fav_lose_pct || 0;
  if (recoverPct >= upsetPct) return 'fav_recover';
  return outcomes.reduce((best, o) => (o.pct > best.pct ? o : best), outcomes[0]).key;
}

function computeFirstGoalScenarios(match, xgH, xgA, marketTier, baseline, totalsLine) {
  totalsLine = Number(totalsLine) || 2.5;
  const coachH = match.coach_analysis?.home;
  const coachA = match.coach_analysis?.away;
  const homeName = match.home?.name || '主队';
  const awayName = match.away?.name || '客队';
  const tier = Number(marketTier) || 0;
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : (xgH >= xgA ? 'home' : 'away');
  const total = xgH + xgA;
  const pHome = total > 0 ? Math.round((xgH / total) * 1000) / 10 : 50;
  const pAway = Math.round((100 - pHome) * 10) / 10;

  function pack(scorerSide, teamName, firstPct) {
    const adj = applyScenarioXg(xgH, xgA, coachH, coachA, scorerSide);
    const startH = scorerSide === 'home' ? 1 : 0;
    const startA = scorerSide === 'away' ? 1 : 0;
    const remH = adj.xg_home * FIRST_GOAL_REMAIN_XG;
    const remA = adj.xg_away * FIRST_GOAL_REMAIN_XG;
    const summary = computeConditionalDisplaySummary(
      startH, startA, remH, remA, marketTier, homeName, awayName
    );
    const chaserName = scorerSide === 'home' ? awayName : homeName;
    const scorerCoach = scorerSide === 'home' ? coachH : coachA;
    const chaserCoach = scorerSide === 'home' ? coachA : coachH;
    const scorerIsFav = scorerSide === favSide;
    const outcomes = buildScenarioOutcomes(summary, scorerIsFav, teamName);
    const fav_recover_pct = Math.round((summary.fav_win_pct + summary.fav_draw_pct) * 10) / 10;
    const expected_key = pickScenarioExpectedKey(outcomes, scorerIsFav, summary);
    const liveOutlook = scorerIsFav
      ? computeWinOutlook(
          adj.xg_home, adj.xg_away, marketTier,
          totalsLine,
          summary.fav_name,
          baseline?.win_shape,
          {
            startH, startA,
            remRatio: FIRST_GOAL_REMAIN_XG,
            stateLabel: teamName + ' 已 1-0 领先',
          }
        )
      : null;
    return {
      side: scorerSide,
      team: teamName,
      first_goal_pct: firstPct,
      start_score: summary.start_score,
      fav_name: summary.fav_name,
      scorer_is_fav: scorerIsFav,
      expected_key,
      fav_recover_pct,
      small_lead_pct: summary.small_lead_pct,
      big_lead_pct: summary.big_cover_pct,
      fav_win_pct: summary.fav_win_pct,
      fav_draw_pct: summary.fav_draw_pct,
      fav_lose_pct: summary.fav_lose_pct,
      outcomes,
      excitement: summary.excitement,
      big_delta: Math.round((summary.big_cover_pct - baseline.big_cover_pct) * 10) / 10,
      small_delta: Math.round((summary.small_lead_pct - baseline.small_lead_pct) * 10) / 10,
      narrative: buildScenarioNarrative(
        teamName, chaserName, scorerCoach, chaserCoach, summary, baseline,
        adj.lead_style, adj.trail_style, scorerIsFav
      ),
      live_outlook: liveOutlook,
    };
  }

  return [
    pack('home', homeName, pHome),
    pack('away', awayName, pAway),
  ];
}

/** 泊松全表 — 穿盘 / 净胜球 / 大小球（内部推演，非真实盘口 API） */
function computeSpreadCover(xgHome, xgAway, marketTierHome, maxGoals) {
  maxGoals = maxGoals || 5;
  const xgH = Math.max(0, Number(xgHome) || 0);
  const xgA = Math.max(0, Number(xgAway) || 0);
  const tier = Number(marketTierHome) || 0;

  let win1 = 0;
  let win2p = 0;
  let draw = 0;
  let awayWin = 0;
  let mass = 0;
  let over25 = 0;
  let over3 = 0;
  const top = [];

  const fact = [1, 1, 2, 6, 24, 120];
  function pois(k, lam) {
    if (k < 0 || k > maxGoals) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }

  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = pois(h, xgH) * pois(a, xgA);
      mass += p;
      top.push({ score: h + '-' + a, prob: p, home: h, away: a });
      const m = h - a;
      if (m === 0) draw += p;
      else if (m < 0) awayWin += p;
      else if (m === 1) win1 += p;
      else win2p += p;
      if (h + a > 2.5) over25 += p;
      if (h + a > 3) over3 += p;
    }
  }
  if (mass <= 0) mass = 1;
  top.sort((a, b) => b.prob - a.prob);

  const pct = x => Math.round((x / mass) * 1000) / 10;
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : 'balanced';
  const absTier = Math.abs(tier);
  const isIntegerOne = absTier === 1 && Math.abs(tier % 1) === 0;

  // 亚洲分段档：-1.25 = 一半 -1 一半 -1.5（主队让球视角）
  let favFullCover = 0;
  let favHalfLose = 0;
  let favFullLose = 0;
  let dogFullWin = 0;
  let dogHalfWin = 0;

  if (tier > 0) {
    favFullCover = win2p;
    favHalfLose = win1;
    favFullLose = draw + awayWin;
    dogFullWin = draw + awayWin;
    dogHalfWin = win1;
  } else if (tier < 0) {
    let aw1 = 0;
    let aw2p = 0;
    for (const c of top) {
      const m = c.home - c.away;
      if (m === -1) aw1 += c.prob;
      else if (m <= -2) aw2p += c.prob;
    }
    favFullCover = aw2p;
    favHalfLose = aw1;
    favFullLose = draw + win1 + win2p;
    dogFullWin = draw + win1 + win2p;
    dogHalfWin = aw1;
  }

  let favEv = 0;
  let dogEv = 0;
  if (Math.abs(tier % 1) === 0.25 || Math.abs(tier % 1) === 0.75) {
    favEv = pct(favFullCover) / 100 - pct(favHalfLose) / 100 * 0.5 - pct(favFullLose) / 100;
    dogEv = pct(dogFullWin) / 100 + pct(dogHalfWin) / 100 * 0.5 - pct(favFullCover) / 100;
  } else if (absTier === 0.5) {
    favEv = pct(favFullCover + favHalfLose) / 100 - pct(favFullLose - favHalfLose) / 100;
    dogEv = -favEv;
  } else if (isIntegerOne || absTier === 2) {
    // 整 -1 档：净胜 1 球走盘，不计入穿档
    favEv = pct(favFullCover) / 100 - pct(favFullLose) / 100;
    dogEv = pct(dogFullWin) / 100 - pct(favFullCover) / 100;
  }

  const top3 = top.slice(0, 3).map(c => ({ score: c.score, prob: pct(c.prob) }));

  let rationalSpreadCn = '均衡';
  if (favEv > 0.04) rationalSpreadCn = (favSide === 'home' ? '主队' : '客队') + ' 净胜达标概率略高';
  else if (dogEv > 0.04) rationalSpreadCn = (favSide === 'home' ? '客队' : '主队') + ' 守住差距概率略高';
  else if (favEv < -0.04) rationalSpreadCn = (favSide === 'home' ? '客队' : '主队') + ' 更有机会守住差距（热门净胜拉开偏难）';
  else rationalSpreadCn = '两边净胜达标概率接近';

  const totalsLine25 = 2.5;
  const totalsLine3 = 3;
  const over25Pct = pct(over25);
  const over3Pct = pct(over3);
  let totalsLeanCn = over25Pct >= 58 ? '2.5 球参考偏多进球（约 ' + over25Pct + '%）'
    : over25Pct <= 42 ? '2.5 球参考偏少进球（约 ' + (100 - over25Pct) + '%）'
      : '2.5 球参考接近均衡';
  if (over3Pct >= 55) totalsLeanCn += '；3 球参考亦偏多';
  else if (over3Pct <= 40) totalsLeanCn += '；3 球参考偏少';

  return {
    top3_scores: top3,
    one_goal_win_pct: pct(win1),
    two_plus_win_pct: pct(win2p),
    full_cover_pct: pct(favFullCover),
    half_lose_pct: pct(favHalfLose),
    fav_cover_ev: Math.round(favEv * 1000) / 1000,
    dog_cover_ev: Math.round(dogEv * 1000) / 1000,
    rational_spread_cn: rationalSpreadCn,
    total_xg: Math.round((xgH + xgA) * 100) / 100,
    over_2_5_pct: over25Pct,
    over_3_pct: over3Pct,
    totals_lean_cn: totalsLeanCn,
    margin_risk_note:
      isIntegerOne
        ? '净胜 1 球概率 ' + pct(win1) + '%：参考净胜 1 球时，仅赢一球与拉开差距须分开看'
        : pct(favHalfLose) >= 20
          ? '净胜 1 球概率 ' + pct(favHalfLose) + '%：常见「赢球但净胜仅 1 球」'
          : '净胜 1 球概率较低，净胜拉开 2 球+ 约 ' + pct(favFullCover) + '%',
    push_pct: isIntegerOne ? pct(win1) : null,
  };
}

const TOTALS_SIGNAL = {
  aligned: { cn: '进球参考贴合', color: '#5BBF8A', desc: '赛前进球参考与 xG 总进球预期基本一致。' },
  high_line: { cn: '进球参考偏高', color: '#C8A96E', desc: '赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。' },
  low_line: { cn: '进球参考偏低', color: '#7BB8D4', desc: '赛前进球参考低于 xG 隐含，模型倾向偏多进球方向。' },
};

/** 泊松 — 指定进球线的大/小概率 */
function probTotalsOver(xgHome, xgAway, line, maxGoals) {
  maxGoals = maxGoals || 5;
  const xgH = Math.max(0, Number(xgHome) || 0);
  const xgA = Math.max(0, Number(xgAway) || 0);
  const fact = [1, 1, 2, 6, 24, 120];
  function pois(k, lam) {
    if (k < 0 || k > maxGoals) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }
  let over = 0;
  let mass = 0;
  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = pois(h, xgH) * pois(a, xgA);
      mass += p;
      const total = h + a;
      const w = totalsOverWeight(total, line);
      over += p * w;
    }
  }
  if (mass <= 0) return 50;
  return Math.round((over / mass) * 1000) / 10;
}

/** 粗算 xG 对应的「50/50 进球线」 */
function estimateFairTotalsLine(xgHome, xgAway) {
  const total = (Number(xgHome) || 0) + (Number(xgAway) || 0);
  const candidates = [2, 2.25, 2.5, 2.75, 3, 3.25, 3.5];
  let best = 2.5;
  let bestDiff = 999;
  for (const c of candidates) {
    const over = probTotalsOver(xgHome, xgAway, c);
    const d = Math.abs(over - 50);
    if (d < bestDiff) { bestDiff = d; best = c; }
  }
  return { fair_line: best, total_xg: Math.round(total * 100) / 100 };
}

/**
 * 大小球盘面推演（内部录入 market line + 两侧指数）
 * totals_over_index / totals_under_index：内部相对热度，>1 表示该侧更「贵」
 */
function computeTotalsAnalysis(xgHome, xgAway, raw) {
  const line = Number(raw.totals_line) || 2.5;
  const overOdds = raw.totals_over_odds;
  const underOdds = raw.totals_under_odds;
  const overIdx = Number(raw.totals_over_index ?? overOdds ?? 1);
  const underIdx = Number(raw.totals_under_index ?? underOdds ?? 1);
  const publicOver = raw.totals_public_over_pct ?? 50;
  const overPct = probTotalsOver(xgHome, xgAway, line);
  const underPct = Math.round((100 - overPct) * 10) / 10;
  const fair = estimateFairTotalsLine(xgHome, xgAway);
  const lineGap = Math.round((line - fair.fair_line) * 100) / 100;

  let signal = 'aligned';
  if (lineGap >= 0.25) signal = 'high_line';
  else if (lineGap <= -0.25) signal = 'low_line';

  const meta = TOTALS_SIGNAL[signal] || TOTALS_SIGNAL.aligned;
  const lineLabel = formatTotalsLineLabel(line);
  const lineDisplay = lineLabel.replace(' 球线', '');

  let rationalCn = overPct >= 58 ? '模型略倾向多进球（' + lineDisplay + ' 约 ' + overPct + '%）'
    : overPct <= 42 ? '模型略倾向少进球（' + lineDisplay + ' 约 ' + underPct + '%）'
      : '模型在 ' + lineDisplay + ' 附近均衡';

  if (signal === 'high_line' && publicOver >= 58) {
    rationalCn += '；进球参考偏高且舆论更看好多进球场面';
  } else if (signal === 'high_line' && underIdx < overIdx - 0.05) {
    rationalCn += '；进球参考偏高但模型仍偏少进球';
  } else if (signal === 'low_line' && publicOver <= 42) {
    rationalCn += '；进球参考偏低且舆论更看好少进球场面';
  }

  const idxNote = overOdds != null && underOdds != null
    ? '多进球侧 ' + overOdds + ' / 少进球侧 ' + underOdds
      + (underIdx < overIdx - 0.05 ? ' · 少进球侧关注度更高' : overIdx > underIdx + 0.05 ? ' · 多进球侧关注度更高' : '')
    : overIdx > underIdx + 0.03
      ? '多进球侧参考权重相对更高'
      : underIdx > overIdx + 0.03
        ? '少进球侧参考权重相对更高'
        : '多/少进球两侧参考接近均衡';

  const totalsOdds = overOdds != null && underOdds != null
    ? { over: overOdds, under: underOdds, note: '多进球 ' + overOdds + ' · 少进球 ' + underOdds }
    : null;

  return {
    market_line: line,
    line_label: lineLabel,
    implied_xg_total: fair.total_xg,
    fair_line: fair.fair_line,
    line_gap: lineGap,
    over_pct: overPct,
    under_pct: underPct,
    signal,
    signal_cn: meta.cn,
    signal_color: meta.color,
    signal_desc: meta.desc,
    public_over_pct: publicOver,
    public_lean_cn: publicOver >= 58 ? '舆论略看好多进球（约 ' + publicOver + '%）'
      : publicOver <= 42 ? '舆论略看好少进球（约 ' + (100 - publicOver) + '%）'
        : '舆论对总进球看法较分散',
    index_note: idxNote,
    totals_odds: totalsOdds,
    rational_cn: rationalCn,
    score_link_cn: '小比分（1-0/1-1）偏少进球 · 2-0/2-1 居中 · 3 球+ 偏多进球',
  };
}

function buildPublicSummaryNote(displaySummary, adjustmentNote) {
  if (!displaySummary) return '';
  const s = displaySummary;
  const cal = s.calibration?.summary_cn || '';
  const tail = cal ? cal + '（' + adjustmentNote + '）' : adjustmentNote;
  const mp = s.match_preview;
  const morph = mp?.morphology;
  if (mp?.morphology?.readout_cn) {
    return `【推演概要】${morph.readout_cn.split('。')[0]}。 · ${tail}`;
  }
  const wo = s.win_outlook;
  const ws = s.win_shape;
  const favWin = ws?.fav_win_pct ?? s.poisson_fav_win_pct;
  if (wo?.readout_cn) {
    const top = ws?.paths?.length
      ? ws.paths.reduce((a, b) => (b.pct > a.pct ? b : a))
      : null;
    return `【推演概要】${wo.fav_name || s.fav_name} 取胜约 ${favWin}%`
      + (top ? ` · 若取胜 ${top.label} ${top.pct}%` : '')
      + ` · ${wo.readout_cn.split('。')[0]}。 · ${tail}`;
  }
  return `【推演概要】${s.fav_name} 净胜1球 ${s.small_lead_pct}% · 净胜≥2 ${s.big_cover_pct}% · ${tail}`;
}

/** 页面展示 — 预期校准（中性表述，不出现盘口/赔率） */
function buildCalibrationDisplay(meta, tierGap, cover, impliedTier, marketTier, homeName, awayName) {
  const gap = Math.round(tierGap * 100) / 100;
  let gapText = '与赛前净胜看法基本一致';
  if (gap >= 0.35) gapText = '赛前净胜看法高于 xG 隐含约 ' + gap;
  else if (gap <= -0.35) gapText = '赛前净胜看法低于 xG 隐含约 ' + Math.abs(gap);
  else if (gap >= 0.15) gapText = '赛前净胜看法略高（约 +' + gap + '）';
  else if (gap <= -0.15) gapText = '赛前净胜看法略低（约 ' + gap + '）';

  let marginText = '';
  if (cover.half_lose_pct >= 12) {
    marginText = ' · 热门仅净胜 1 球概率 ' + cover.half_lose_pct + '%';
  }

  return {
    signal_cn: meta.cn,
    signal_color: meta.color,
    signal_desc: meta.desc,
    tier_gap: gap,
    implied_tier_label: formatTierLabel(impliedTier, homeName, awayName),
    market_tier_label: formatTierLabel(marketTier, homeName, awayName),
    summary_cn: '与模型 xG 对照：' + meta.cn + ' · ' + gapText + marginText,
  };
}

/** 页面展示 — 总进球对照（中性表述） */
function buildTotalsDisplay(totals, expectedTotalGoals) {
  const et = typeof expectedTotalGoals === 'number'
    ? (Math.round(expectedTotalGoals * 100) / 100).toFixed(1)
    : String(expectedTotalGoals);
  let modelLean = '模型在常见进球预期附近均衡';
  if (totals.over_pct >= 58) {
    modelLean = '模型略偏多进球（约 ' + totals.over_pct + '%）';
  } else if (totals.over_pct <= 42) {
    modelLean = '模型略偏少进球（约 ' + totals.under_pct + '%）';
  }
  const lineNote = totals.signal_cn || '贴合';
  return {
    expected_total: Number(et),
    fair_line: totals.fair_line,
    line_gap: totals.line_gap,
    over_pct: totals.over_pct,
    summary_cn: '预期约 ' + et + ' 个总进球 · 赛前参考' + lineNote + ' · ' + modelLean,
  };
}

/**
 * @param {object} raw — 内部录入，含 market_tier / public_lean / public_pct
 */
function buildDepthCalibration(match, raw) {
  const p = match.prediction || {};
  const xgH = p.xg_home ?? 0;
  const xgA = p.xg_away ?? 0;
  const tier = Number(raw.market_tier) || 0;
  const publicLean = raw.public_lean || (tier > 0 ? 'home' : tier < 0 ? 'away' : 'balanced');
  const publicPct = raw.public_pct ?? 50;
  const signal = raw.signal_override || classifySignal(tier, xgH, xgA, publicLean, publicPct);
  const meta = SIGNAL_META[signal] || SIGNAL_META.neutral;
  const delta = computeDepthDelta(signal, tier, xgH, xgA);

  const base = {
    home_win: p.base_home_win ?? p.home_win ?? 33,
    draw: p.base_draw ?? p.draw ?? 34,
    away_win: p.base_away_win ?? p.away_win ?? 33,
  };
  const adjusted = normalizeProb(
    base.home_win + delta.home_win,
    base.draw + delta.draw,
    base.away_win + delta.away_win
  );

  const leanCn =
    publicLean === 'home' ? '舆论倾向 ' + match.home.name + '（约 ' + publicPct + '%）'
      : publicLean === 'away' ? '舆论倾向 ' + match.away.name + '（约 ' + publicPct + '%）'
        : '舆论看法较分散';

  const cover = computeSpreadCover(xgH, xgA, tier);
  const totals = computeTotalsAnalysis(xgH, xgA, raw);
  const implied = impliedTierFromXg(xgH, xgA);
  const tierGap = tier - implied;

  const favOdds = raw.spread_fav_odds;
  const dogOdds = raw.spread_dog_odds;
  const spreadOdds = favOdds != null && dogOdds != null
    ? {
        fav: favOdds,
        dog: dogOdds,
        note: match.home.name + ' ' + favOdds + ' · ' + match.away.name + ' ' + dogOdds,
      }
    : null;

  let spreadAlt = null;
  if (raw.spread_alt_tier != null) {
    const altTier = Number(raw.spread_alt_tier);
    const altFav = raw.spread_alt_fav_odds;
    const altDog = raw.spread_alt_dog_odds;
    spreadAlt = {
      tier: altTier,
      tier_label: formatTierLabel(altTier, match.home.name, match.away.name),
      cover: computeSpreadCover(xgH, xgA, altTier),
      odds: altFav != null && altDog != null
        ? { fav: altFav, dog: altDog, note: match.home.name + ' ' + altFav + ' · ' + match.away.name + ' ' + altDog }
        : null,
    };
  }

  const blockerSpreadNote =
    signal === 'blocker_inflate'
      ? '说明：赛前净胜参考高于模型隐含时，仅赢一球的比例仍不可忽视；赢球与净胜拉开须分开看。'
      : '';

  let analysis = raw.analysis || meta.desc;
  if (tierGap >= 0.5 && cover.half_lose_pct >= 18) {
    analysis += ' 赛前净胜参考高于 xG 隐含（+' + Math.round(tierGap * 100) / 100 + '），且净胜 1 球占 '
      + cover.half_lose_pct + '%——热门净胜拉开偏难。';
  }
  if (blockerSpreadNote) analysis += ' ' + blockerSpreadNote;

  const ctx = buildMatchContextAdjustments(match, xgH, xgA);
  const coverAdj = computeSpreadCover(ctx.xg_home, ctx.xg_away, tier);
  const totalsAdj = computeTotalsAnalysis(ctx.xg_home, ctx.xg_away, raw);
  const displaySummary = computeDisplaySummary(
    ctx.xg_home, ctx.xg_away, tier, match.home.name, match.away.name
  );
  displaySummary.baseline_label = '全场预期（含伤病·气候）';
  displaySummary.context_factors = ctx.factors;
  displaySummary.xg_context = {
    baseline_home: xgH,
    baseline_away: xgA,
    adjusted_home: ctx.xg_home,
    adjusted_away: ctx.xg_away,
    note: xgH === ctx.xg_home && xgA === ctx.xg_away
      ? '基准 xG ' + xgH + '–' + xgA + '（未因伤病/气候下调）'
      : '基准 xG ' + xgH + '–' + xgA + ' → 调整后 ' + ctx.xg_home + '–' + ctx.xg_away,
  };
  displaySummary.calibration = buildCalibrationDisplay(
    meta, tierGap, coverAdj, implied, tier, match.home.name, match.away.name
  );
  const favSide = tier > 0 ? 'home' : tier < 0 ? 'away' : (ctx.xg_home >= ctx.xg_away ? 'home' : 'away');
  if (displaySummary.win_shape) {
    displaySummary.win_shape.fav_win_pct = favSide === 'home' ? adjusted.home_win : adjusted.away_win;
  }
  const totalsLine = raw.totals_line ?? 2.5;
  displaySummary.win_outlook = computeWinOutlook(
    ctx.xg_home, ctx.xg_away, tier, totalsLine,
    displaySummary.fav_name, displaySummary.win_shape
  );
  displaySummary.totals_line = totalsLine;
  displaySummary.score_patterns = (coverAdj.top3_scores || []).map(s => ({
    score: s.score,
    pct: s.prob,
  }));
  displaySummary.totals_view = buildTotalsDisplay(totalsAdj, displaySummary.expected_total_goals);
  displaySummary.first_goal_scenarios = computeFirstGoalScenarios(
    match, ctx.xg_home, ctx.xg_away, tier, displaySummary, totalsLine
  );
  displaySummary.match_preview = buildMatchPreview(
    match, displaySummary, adjusted, tier, ctx
  );

  return {
    tier_home: tier,
    tier_label: formatTierLabel(tier, match.home.name, match.away.name),
    implied_tier: implied,
    tier_gap: Math.round(tierGap * 100) / 100,
    signal,
    signal_cn: meta.cn,
    signal_color: meta.color,
    signal_desc: meta.desc,
    blocker_spread_note: blockerSpreadNote,
    public_lean_cn: leanCn,
    analysis,
    spread_cover: cover,
    spread_odds: spreadOdds,
    spread_alt: spreadAlt,
    totals_analysis: totals,
    totals_line: raw.totals_line ?? 2.5,
    applied_delta: delta,
    adjustment_note: '模型微调：主胜 ' + (delta.home_win >= 0 ? '+' : '') + delta.home_win
      + '% · 平 ' + (delta.draw >= 0 ? '+' : '') + delta.draw
      + '% · 客 ' + (delta.away_win >= 0 ? '+' : '') + delta.away_win + '%',
    adjusted_probs: adjusted,
    display_summary: displaySummary,
    public_summary_note: buildPublicSummaryNote(
      displaySummary,
      '模型微调：主胜 ' + (delta.home_win >= 0 ? '+' : '') + delta.home_win
        + '% · 平 ' + (delta.draw >= 0 ? '+' : '') + delta.draw
        + '% · 客 ' + (delta.away_win >= 0 ? '+' : '') + delta.away_win + '%'
    ),
  };
}

function applyDepthToPrediction(prediction, depth) {
  if (!prediction || !depth) return prediction;
  const out = { ...prediction };
  if (out.base_home_win == null) {
    out.base_home_win = out.home_win;
    out.base_draw = out.draw;
    out.base_away_win = out.away_win;
  }
  out.home_win = depth.adjusted_probs.home_win;
  out.draw = depth.adjusted_probs.draw;
  out.away_win = depth.adjusted_probs.away_win;
  out.depth_calibrated = true;
  return out;
}

/** 2026 48 队制 — 小组出线后 32 强对阵路径（简化版，用于形势预判） */
const KNOCKOUT_PATHS = {
  A: { r32_1st: '32强 · 对阵 B 组第 2', r32_2nd: '32强 · 对阵 B 组第 1', third_pool: 'B,E,F,H,I,J,K,L' },
  B: { r32_1st: '32强 · 对阵 A 组第 2', r32_2nd: '32强 · 对阵 A 组第 1', third_pool: 'A,E,F,H,I,J,K,L' },
  C: { r32_1st: '32强 · 对阵 D 组第 2', r32_2nd: '32强 · 对阵 D 组第 1', third_pool: 'D,E,F,G,H,I,J,K' },
  D: { r32_1st: '32强 · 对阵 C 组第 2', r32_2nd: '32强 · 对阵 C 组第 1', third_pool: 'C,E,F,G,H,I,J,K' },
  E: { r32_1st: '32强 · 对阵 F 组第 2', r32_2nd: '32强 · 对阵 F 组第 1', third_pool: 'F,G,H,I,J,K,L' },
  F: { r32_1st: '32强 · 对阵 E 组第 2', r32_2nd: '32强 · 对阵 E 组第 1', third_pool: 'E,G,H,I,J,K,L' },
  G: { r32_1st: '32强 · 可能对阵 E/F/H/I 组第 2 或第 3', r32_2nd: '32强 · 可能对阵 E/F/H/I 组第 1', third_pool: 'E,F,H,I,J,K' },
  H: { r32_1st: '32强 · 可能对阵 G/E/F 组第 2 或第 3', r32_2nd: '32强 · 可能对阵 G/E/F 组第 1', third_pool: 'E,F,G,I,J,K' },
  I: { r32_1st: '32强 · 可能对阵 J/K 组第 2 或第 3', r32_2nd: '32强 · 可能对阵 J/K 组第 1', third_pool: 'J,K,L,G,H' },
  J: { r32_1st: '32强 · 可能对阵 I/K 组第 2 或第 3', r32_2nd: '32强 · 可能对阵 I/K 组第 1', third_pool: 'I,K,L,G,H' },
  K: { r32_1st: '32强 · 可能对阵 L/J 组第 2 或第 3', r32_2nd: '32强 · 可能对阵 L/J 组第 1', third_pool: 'J,L,I,H' },
  L: { r32_1st: '32强 · 可能对阵 K/J 组第 2 或第 3', r32_2nd: '32强 · 可能对阵 K/J 组第 1', third_pool: 'K,J,I,H' },
};

const GROUP_TEAMS = {
  A: ['Mexico', 'South Korea', 'South Africa', 'Czechia'],
  B: ['Canada', 'Switzerland', 'Bosnia Herz.', 'Qatar'],
  C: ['Brazil', 'Morocco', 'Scotland', 'Haiti'],
  D: ['USA', 'Türkiye', 'Australia', 'Paraguay'],
  E: ['Germany', "Côte d'Ivoire", 'Ecuador', 'Curaçao'],
  F: ['Netherlands', 'Japan', 'Sweden', 'Tunisia'],
  G: ['Belgium', 'Egypt', 'Iran', 'New Zealand'],
  H: ['Spain', 'Uruguay', 'Saudi Arabia', 'Cape Verde'],
  I: ['France', 'Senegal', 'Norway', 'Iraq'],
  J: ['Argentina', 'Austria', 'Algeria', 'Jordan'],
  K: ['Portugal', 'Colombia', 'Uzbekistan', 'Congo DR'],
  L: ['England', 'Croatia', 'Ghana', 'Panama'],
};

function sortTable(table) {
  return [...table].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const gdA = a.gf - a.ga;
    const gdB = b.gf - b.ga;
    if (gdB !== gdA) return gdB - gdA;
    return b.gf - a.gf;
  });
}

function buildDefaultTable(group) {
  return (GROUP_TEAMS[group] || []).map(team => ({
    team, pts: 0, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0,
  }));
}

function assessManipulationRisk(group, matchday, homeTeam, awayTeam, table, crossNotes) {
  if (matchday <= 1) {
    return {
      level: 'LOW',
      level_cn: '低',
      focus_team: null,
      reason: '小组赛第 1 轮，各队普遍抢分意愿强，故意控分动机低；以下路径预判供后续轮次参考。',
    };
  }
  const sorted = sortTable(table);
  const leader = sorted[0];
  const notes = crossNotes || [];
  if (matchday >= 3 && leader && leader.pts >= 4) {
    return {
      level: 'MEDIUM',
      level_cn: '中',
      focus_team: leader.team,
      reason: leader.team + ' 末轮或存在「避开某 32 强对手 / 保小组第 2」的战术选择，需结合同期其他组赛果。',
    };
  }
  if (notes.some(n => n.includes('四队同分') || n.includes('均1分'))) {
    return {
      level: 'MEDIUM',
      level_cn: '中',
      focus_team: null,
      reason: '本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。',
    };
  }
  return {
    level: 'LOW',
    level_cn: '低',
    focus_team: null,
    reason: '暂无明确控分动机；出线路径仍取决于后续直接对话。',
  };
}

/**
 * @param {object} match
 * @param {object[]} groupSnapshots — RESULTS_DATA.groupSnapshots
 */
function buildGroupContext(match, groupSnapshots) {
  const g = match.group;
  const snap = (groupSnapshots || []).find(s => s.group === g);
  const table = snap?.table?.length ? snap.table : buildDefaultTable(g);
  const sorted = sortTable(table);
  const paths = KNOCKOUT_PATHS[g] || {};
  const homeRow = sorted.find(r => r.team === match.home.name) || { team: match.home.name, pts: 0, p: 0 };
  const awayRow = sorted.find(r => r.team === match.away.name) || { team: match.away.name, pts: 0, p: 0 };

  const crossGroups = ['G', 'H', 'E', 'F'].filter(x => x !== g);
  const crossSnapshots = crossGroups
    .map(cg => (groupSnapshots || []).find(s => s.group === cg))
    .filter(Boolean);

  const crossNotes = crossSnapshots.map(cs => {
    const pts = cs.table.map(t => t.pts);
    const allSame = pts.length && pts.every(pt => pt === pts[0]);
    const firstRow = cs.table[0];
    if (allSame && firstRow && firstRow.p >= 1) {
      return cs.group + ' 组四队同积 ' + pts[0] + ' 分，形势极度开放';
    }
    const leader = sortTable(cs.table)[0];
    return cs.group + ' 组 ' + leader.team + ' ' + leader.pts + ' 分领跑';
  });

  const risk = assessManipulationRisk(g, match.matchday || 1, match.home.name, match.away.name, table, crossNotes);

  const teamScenario = (name, row) => ({
    team: name,
    rank: sorted.findIndex(r => r.team === name) + 1 || '—',
    pts: row.pts,
    played: row.p,
    if_1st: paths.r32_1st || '32强路径待定',
    if_2nd: paths.r32_2nd || '32强路径待定',
    if_3rd: paths.third_pool
      ? '若列小组第 3，需与 ' + paths.third_pool.replace(/,/g, '/') + ' 等组第 3 比净胜球/进球'
      : '最佳第 3 出线待定',
  });

  return {
    group: g,
    label: snap?.label || `${g}组 · 第 ${match.matchday || 1} 轮`,
    matchday: match.matchday || 1,
    standings: sorted,
    home: teamScenario(match.home.name, homeRow),
    away: teamScenario(match.away.name, awayRow),
    cross_group_notes: crossNotes,
    manipulation_risk: risk,
    knockout_note: '48 队制：12 组前 2 + 8 个最佳第 3 进入 32 强；末轮可能出现算分/控分战术。',
    scenarios: [
      `${match.home.name} 若取胜：积分 ${homeRow.pts + 3}，${g} 组排名有望上升；过早预测 32 强对手仍不可靠。`,
      `${match.away.name} 若取胜：积分 ${awayRow.pts + 3}，客场抢分将改变 ${g} 组格局。`,
      `平局：双方各 +1 分；在 ${crossNotes.join('；') || '其他组'} 背景下，第 2 轮直接对话权重上升。`,
    ],
  };
}

const exportsObj = {
  SIGNAL_META,
  impliedTierFromXg,
  computeSpreadCover,
  computeTotalsAnalysis,
  classifyExcitementLabel,
  buildExcitementView,
  computeDisplaySummary,
  buildMatchContextAdjustments,
  buildScenarioOutcomes,
  pickScenarioExpectedKey,
  computeConditionalDisplaySummary,
  computeWinOutlook,
  computeFirstGoalScenarios,
  buildMatchPreview,
  buildPreviewPostMatchReview,
  enrichActualResultForReview,
  inferMatchArchetype,
  buildDepthCalibration,
  buildPublicSummaryNote,
  buildCalibrationDisplay,
  buildTotalsDisplay,
  applyDepthToPrediction,
  buildGroupContext,
  KNOCKOUT_PATHS,
  GROUP_TEAMS,
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = exportsObj;
}
if (typeof window !== 'undefined') {
  window.PREDICTION_SIGNALS = exportsObj;
}
