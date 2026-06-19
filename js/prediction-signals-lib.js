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
    cn: '大众心理预期偏高',
    color: '#D95F6A',
    desc: '外界赛前净胜/舆论参考显著高于 xG 隐含差距，模型警惕热门方「小胜不足」。',
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

/**
 * 赛前净胜参考档位 → 全达标 / 部分达标 净胜球门槛（娱乐推演口径，对齐亚洲 x.5 档）
 * 例：-2.5 → 全达标净胜≥3，部分达标净胜=2；-1 → 全达标净胜≥2，走水净胜=1
 */
function getTierCoverThresholds(tier) {
  const abs = Math.abs(Number(tier) || 0);
  if (abs < 0.01) {
    return { fullMin: 1, halfExact: null, pushExact: null, fullLabel: '净胜≥1', halfLabel: null };
  }
  const frac = Math.round((abs % 1) * 100) / 100;
  if (frac < 0.01) {
    const n = Math.round(abs);
    return {
      fullMin: n + 1,
      halfExact: null,
      pushExact: n,
      fullLabel: '净胜≥' + (n + 1),
      halfLabel: n > 0 ? '走水净胜=' + n : null,
    };
  }
  if (Math.abs(frac - 0.5) < 0.01) {
    const fullMin = Math.ceil(abs);
    const halfExact = Math.floor(abs);
    return {
      fullMin,
      halfExact: halfExact >= 1 ? halfExact : null,
      pushExact: null,
      fullLabel: '净胜≥' + fullMin,
      halfLabel: halfExact >= 1 ? '部分达标净胜=' + halfExact : null,
    };
  }
  if (Math.abs(frac - 0.75) < 0.01) {
    const fullMin = Math.ceil(abs);
    const halfExact = Math.floor(abs);
    return {
      fullMin,
      halfExact: halfExact >= 1 ? halfExact : null,
      pushExact: null,
      fullLabel: '净胜≥' + fullMin,
      halfLabel: halfExact >= 1 ? '部分达标净胜=' + halfExact : null,
    };
  }
  const fullMin = Math.max(1, Math.ceil(abs));
  return { fullMin, halfExact: null, pushExact: null, fullLabel: '净胜≥' + fullMin, halfLabel: null };
}

/** 净胜差距参考文案（中性，无盘口用语） */
function formatMarginOutlookLabel(marketTier, favName) {
  const t = Number(marketTier) || 0;
  if (t === 0) return '净胜差距参考 · 势均力敌';
  const th = getTierCoverThresholds(t);
  let s = favName + ' · 赛前净胜参考 ' + th.fullLabel + '（全达标）';
  if (th.halfLabel) s += ' · ' + th.halfLabel;
  return s;
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
  let favMarginFull = 0;
  let favMarginHalf = 0;
  let favFinal20 = 0;
  let favFinal30Plus = 0;
  let totalsHigh = 0;
  const th = getTierCoverThresholds(tier);

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
      if (favMargin >= th.fullMin) favMarginFull += p;
      else if (th.halfExact != null && favMargin === th.halfExact) favMarginHalf += p;
      if (favSide === 'home') {
        if (fh === 2 && fa === 0) favFinal20 += p;
        if (fh >= 3 && fa === 0) favFinal30Plus += p;
      } else {
        if (fa === 2 && fh === 0) favFinal20 += p;
        if (fa >= 3 && fh === 0) favFinal30Plus += p;
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
  const marginMeet = stateLabel ? pct(favMarginFull) : cover.full_cover_pct;
  const marginHalf = stateLabel ? pct(favMarginHalf) : cover.half_cover_pct;
  const marginFail = stateLabel ? pct(favMargin1) : cover.half_lose_pct;

  const fairLineNote = cover.total_xg != null
    ? '模型公允总进球约 ' + (cover.fair_totals_line ?? estimateFairTotalsLine(xgHome, xgAway).fair_line)
    : null;

  let readout = '';
  if (stateLabel) {
    readout = stateLabel + '：仍取胜约 ' + pct(favWin) + '%。';
    readout += ' 对着外界总进球参考 ' + formatTotalsLineLabel(line).replace(' 球线', '')
      + '，模型终场多于该参考的概率约 ' + totalsHighPct + '%。';
    if (th.fullMin >= 3 && stateLabel) {
      readout += ' 常见收尾：2-0 约 ' + pct(favFinal20) + '%（部分达标，非全达标）；'
        + ' 3-0+ 约 ' + pct(favFinal30Plus) + '%（对着 ' + th.fullLabel + ' 全达标）。';
    } else if (pct(favMargin2TotalLe2) >= 10) {
      readout += ' 常见收尾如 2-0（部分扩大；相对外界总进球参考仍偏少）。';
    } else if (topPath) {
      readout += ' 若再扩大，偏「' + topPath.label + '」。';
    }
  } else {
    readout = '取胜约 ' + (winShape?.fav_win_pct ?? pct(favWin)) + '%；若取胜，';
    if (topPath) readout += '以「' + topPath.label + '」为主（' + topPath.pct + '%）。';
    readout += ' 对着赛前净胜参考，' + th.fullLabel + '（全达标）约 ' + marginMeet + '%；';
    if (th.halfLabel && marginHalf > 0) {
      readout += th.halfLabel + ' 约 ' + marginHalf + '%；';
    }
    readout += '对着外界总进球参考 ' + formatTotalsLineLabel(line).replace(' 球线', '')
      + '，模型终场多于该参考的概率约 ' + totalsHighPct + '%。';
    if (pct(favMargin2TotalLe2) >= 12) {
      readout += ' 注意 2-0 类：净胜扩大但总进球仍可能低于外界参考。';
    }
  }

  const fairTotals = estimateFairTotalsLine(
    (Number(xgHome) || 0) * remRatio,
    (Number(xgAway) || 0) * remRatio
  );
  const totalsLineGap = Math.round((line - fairTotals.fair_line) * 100) / 100;

  return {
    fav_name: favName,
    state_label: stateLabel,
    paths,
    margin_line_cn: formatMarginOutlookLabel(tier, favName),
    margin_meet_pct: marginMeet,
    margin_half_pct: marginHalf,
    margin_fail_pct: marginFail,
    margin_full_label: th.fullLabel,
    margin_half_label: th.halfLabel,
    final_2_0_pct: stateLabel && th.halfExact === 2 ? pct(favFinal20) : null,
    final_3_0_plus_pct: stateLabel && th.fullMin >= 3 ? pct(favFinal30Plus) : null,
    margin_fail_note: '常见：仅赢 1 球（如 1-0、2-1）',
    totals_line: line,
    totals_line_cn: formatTotalsLineLabel(line),
    fair_totals_line: fairTotals.fair_line,
    model_total_xg: fairTotals.total_xg,
    totals_line_gap: totalsLineGap,
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

function buildMorphologyReadout(archetype, totalsView, favName) {
  const typeLabels = archetype.tags.map(t => t.label).join(' · ');
  const outlook = totalsView?.totals_outlook;
  let tail = '';
  if (outlook && !outlook.show_lean) {
    tail = '总进球走向模型暂无明确倾向；进球时间段娱乐解读见下方「灵力分析」。';
  } else if (outlook?.show_lean) {
    tail = '进球氛围' + outlook.label_cn + '（模型推演）；时间段分布见下方历史节奏参考。';
  } else if (archetype.tags.some(t => t.key === 'low_scoring')) {
    tail = '进球预期不高，小比分与平局权重上升。';
  } else if (archetype.tags.some(t => t.key === 'even_open')) {
    tail = '双方势均，比赛可能较开放，但具体总进球仍难强判。';
  } else {
    tail = '按 xG 与教练风格综合读场；进球时间段见「灵力分析」。';
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
    readout_cn: buildMorphologyReadout(archetype, totalsView, favName),
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

/** 赛后复盘：对照赛前读场要点（赛果归档时写入 depth_calibration.preview_replay） */
function buildPreviewPostMatchReview(displaySummary, actualResult, homeName, awayName, depthMeta) {
  if (!displaySummary || !actualResult) return null;
  const hs = actualResult.home_score;
  const as = actualResult.away_score;
  const total = hs + as;
  const ht = actualResult.ht_score || actualResult.half_time;
  const hits = [];
  const misses = [];
  const reading = displaySummary.customer_reading;
  const totalsLine = displaySummary.totals_line ?? depthMeta?.totals_line ?? 2.5;
  const tier = depthMeta?.tier_home ?? 0;
  const actualScore = hs + '-' + as;
  const actualOver = total > totalsLine;
  const actualPush = Math.abs(total - totalsLine) < 0.01;

  if (reading?.spread?.show_cover) {
    const th = getTierCoverThresholds(tier);
    const margin = hs - as;
    const favSide = tier > 0 ? 'home' : 'away';
    const favMargin = favSide === 'home' ? margin : -margin;
    let spreadResult = 'other';
    if (favMargin >= th.fullMin) spreadResult = 'full';
    else if (th.halfExact != null && favMargin === th.halfExact) spreadResult = 'half';
    else if (favMargin === 1) spreadResult = 'narrow';

    const fullPred = reading.spread.full_cover_pct ?? 0;
    if (spreadResult === 'full' && fullPred >= 35) hits.push('净胜全达标方向一致');
    else if (spreadResult === 'full' && fullPred < 30) misses.push('净胜全达标超预期（模型曾偏谨慎）');
    else if ((spreadResult === 'narrow' || spreadResult === 'half') && reading.spread.level === 'narrow') {
      hits.push('小胜/部分达标与模型一致');
    } else if (spreadResult === 'full' && reading.spread.level === 'skeptical') {
      misses.push('净胜全达标但模型曾提示外界偏高');
    } else if (spreadResult !== 'full' && reading.spread.level === 'likely') {
      misses.push('净胜全达标未兑现');
    }
  }

  const totalsOutlook = reading?.totals || displaySummary.totals_view?.totals_outlook;
  if (totalsOutlook) {
    if (totalsOutlook.show_lean && totalsOutlook.level.includes('high') && actualOver) {
      hits.push('进球氛围偏精彩一致');
    } else if (totalsOutlook.show_lean && totalsOutlook.level.includes('low') && !actualOver && !actualPush) {
      hits.push('进球氛围偏沉闷一致');
    } else if (totalsOutlook.show_lean && totalsOutlook.level.includes('high') && !actualOver) {
      misses.push('模型偏精彩但实际偏闷');
    } else if (totalsOutlook.show_lean && totalsOutlook.level.includes('low') && actualOver) {
      misses.push('模型偏沉闷但实际偏精彩');
    } else if (!totalsOutlook.show_lean && Math.abs(total - (displaySummary.expected_total_goals || total)) >= 2) {
      misses.push('总进球尾部偏差大（赛前已标注无明显倾向）');
    } else if (!totalsOutlook.show_lean) {
      hits.push('赛前进球氛围未强判（符合模型五五开读法）');
    }
  }

  const pick = displaySummary.poisson_fav_win_pct != null
    ? (displaySummary.fav_name === homeName ? 'home' : 'away')
    : null;
  const actualOut = margin => (margin > 0 ? 'home' : margin < 0 ? 'away' : 'draw');
  const out = actualOut(hs - as);

  let summary_cn = '';
  if (hits.length) summary_cn += '命中：' + hits.join(' · ') + '。';
  if (misses.length) summary_cn += (summary_cn ? ' ' : '') + '偏差：' + misses.join(' · ') + '。';
  if (!summary_cn) {
    summary_cn = '本场赛前读场以净胜档为主；实际 ' + actualScore + '，可对照上方要点复盘。';
  }

  return {
    actual_score: actualScore,
    ht_score: ht || null,
    hits,
    misses,
    summary_cn,
    totals_actual: total,
    totals_line: totalsLine,
    spread_level: reading?.spread?.level || null,
    totals_level: totalsOutlook?.level || null,
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

function lineupContextNote(match) {
  const lu = match.lineup;
  if (!lu?.confirmed) return null;
  return lu.impact?.summary || (lu.diff?.home ? '官方首发已确认 · 变阵见 lineup.diff' : null);
}

/** 伤病 + 气候 → 调整后 xG（基准 xG 含 sync-lineups 预调；此处仅追加展示因子） */
function buildMatchContextAdjustments(match, xgHome, xgAway) {
  const homeInj = summarizeInjuries(match.home?.name || '主队', match.home?.injuries);
  const awayInj = summarizeInjuries(match.away?.name || '客队', match.away?.injuries);
  const wx = weatherXgModifier(match.weather);
  const lineupNote = lineupContextNote(match);

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
  if (lineupNote) {
    factors.push({ icon: '📋', label: '官方首发', note: lineupNote });
  }
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
  const th = getTierCoverThresholds(tier);

  let favFullCover = 0;
  let favHalfCover = 0;
  let favHalfLose = 0;
  let favFullLose = 0;
  let favPush = 0;
  let dogFullWin = 0;
  let dogHalfWin = 0;

  if (favSide !== 'balanced') {
    for (const c of top) {
      const m = c.home - c.away;
      const favMargin = favSide === 'home' ? m : -m;
      const p = c.prob;
      if (favMargin >= th.fullMin) favFullCover += p;
      else if (th.halfExact != null && favMargin === th.halfExact) favHalfCover += p;
      else if (th.pushExact != null && favMargin === th.pushExact) favPush += p;
      else if (favMargin === 1) favHalfLose += p;
      else if (favMargin <= 0) favFullLose += p;
    }
    dogFullWin = favFullLose;
    dogHalfWin = favHalfLose;
  } else if (tier > 0) {
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
    half_cover_pct: pct(favHalfCover),
    half_lose_pct: pct(favHalfLose),
    push_pct: th.pushExact != null ? pct(favPush) : (isIntegerOne ? pct(win1) : null),
    margin_full_label: th.fullLabel,
    margin_half_label: th.halfLabel,
    fav_cover_ev: Math.round(favEv * 1000) / 1000,
    dog_cover_ev: Math.round(dogEv * 1000) / 1000,
    rational_spread_cn: rationalSpreadCn,
    total_xg: Math.round((xgH + xgA) * 100) / 100,
    fair_totals_line: estimateFairTotalsLine(xgH, xgA).fair_line,
    over_2_5_pct: over25Pct,
    over_3_pct: over3Pct,
    totals_lean_cn: totalsLeanCn,
    margin_risk_note:
      th.halfLabel && pct(favHalfCover) >= 8
        ? th.fullLabel + ' 约 ' + pct(favFullCover) + '%；' + th.halfLabel + ' 约 ' + pct(favHalfCover)
          + '%；仅赢 1 球约 ' + pct(favHalfLose) + '%'
        : isIntegerOne
          ? '净胜 1 球概率 ' + pct(win1) + '%：参考净胜 1 球时，仅赢一球与拉开差距须分开看'
          : pct(favHalfLose) >= 20
            ? '净胜 1 球概率 ' + pct(favHalfLose) + '%：常见「赢球但净胜仅 1 球」'
            : th.fullLabel + ' 约 ' + pct(favFullCover) + '%；仅赢 1 球约 ' + pct(favHalfLose) + '%',
  };
}

const TOTALS_SIGNAL = {
  aligned: { cn: '进球参考贴合', color: '#5BBF8A', desc: '赛前进球参考与 xG 总进球预期基本一致。' },
  high_line: { cn: '进球参考偏高', color: '#C8A96E', desc: '赛前进球参考高于 xG 隐含，模型倾向偏少进球方向。' },
  low_line: { cn: '进球参考偏低', color: '#7BB8D4', desc: '赛前进球参考低于 xG 隐含，模型倾向偏多进球方向。' },
};

/** 泊松 — 全场总进球 ≥ minGoals（整数门槛，用于进球氛围） */
function probTotalsAtLeast(xgHome, xgAway, minGoals, maxGoals) {
  maxGoals = maxGoals || 5;
  const min = Math.max(0, Math.round(Number(minGoals) || 0));
  const xgH = Math.max(0, Number(xgHome) || 0);
  const xgA = Math.max(0, Number(xgAway) || 0);
  const fact = [1, 1, 2, 6, 24, 120];
  function pois(k, lam) {
    if (k < 0 || k > maxGoals) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }
  let hit = 0;
  let mass = 0;
  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = pois(h, xgH) * pois(a, xgA);
      mass += p;
      if (h + a >= min) hit += p;
    }
  }
  if (mass <= 0) return 50;
  return Math.round((hit / mass) * 1000) / 10;
}

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
  const marketGoalsInt = formatMarketGoalsInteger(line);
  const overOdds = raw.totals_over_odds;
  const underOdds = raw.totals_under_odds;
  const overIdx = Number(raw.totals_over_index ?? overOdds ?? 1);
  const underIdx = Number(raw.totals_under_index ?? underOdds ?? 1);
  const publicOver = raw.totals_public_over_pct ?? 50;
  const overPct = probTotalsAtLeast(xgHome, xgAway, marketGoalsInt);
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
    market_goals_int: marketGoalsInt,
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

/**
 * 大小球盘口 → 整数进球门槛（展示与进球氛围计算共用）
 * 1.25 / 1.5 / 1.75 → 2；2.25 / 2.5 / 2.75 → 3；整盘如 2.0 → 2
 */
function formatMarketGoalsInteger(marketLine) {
  const n = Number(marketLine);
  if (!Number.isFinite(n)) return 3;
  if (Number.isInteger(n)) return n;
  return Math.ceil(n);
}

/**
 * 总进球读场分级（回测校准：40–60% 不作倾向表态）
 * 对照外界「全场至少 N 球」预期，读沉闷 ↔ 精彩；不说百分比、不写大小球。
 */
function classifyTotalsOutlook(overPct, lineGap, marketLine, fairLine) {
  const over = Number(overPct) || 50;
  const gap = Number(lineGap) || 0;
  const market = marketLine ?? 2.5;
  const fair = fairLine ?? 2.5;
  const marketGoalsInt = formatMarketGoalsInteger(market);
  const marketGoalsCn = '全场至少 ' + marketGoalsInt + ' 球';
  const section_intro_cn = '对照外界「' + marketGoalsCn + '」的赛前进球节奏，看模型更偏沉闷还是精彩';
  const dist = Math.abs(over - 50);

  let level = 'neutral';
  if (dist <= 10) level = 'neutral';
  else if (dist <= 20) level = over > 50 ? 'mild_high' : 'mild_low';
  else level = over > 50 ? 'clear_high' : 'clear_low';

  const leanSide = level === 'neutral'
    ? 'neutral'
    : (level.includes('high') ? 'exciting' : 'dull');
  const leanStrength = level === 'neutral'
    ? 'none'
    : (level.startsWith('mild') ? 'mild' : 'clear');

  const meta = {
    neutral: { label_cn: '暂无明显倾向', color: '#8A96A8', meter_label_cn: '几乎五五开' },
    mild_low: { label_cn: '略倾向沉闷', color: '#7BB8D4', meter_label_cn: '略倾向沉闷' },
    mild_high: { label_cn: '略倾向精彩', color: '#E8A54B', meter_label_cn: '略倾向精彩' },
    clear_low: { label_cn: '倾向沉闷', color: '#7BB8D4', meter_label_cn: '倾向沉闷' },
    clear_high: { label_cn: '倾向精彩', color: '#E8A54B', meter_label_cn: '倾向精彩' },
  }[level];

  const showLean = level === 'clear_high' || level === 'clear_low';
  const meterPos = level === 'neutral'
    ? 50
    : Math.max(14, Math.min(86, Math.round(over)));

  let detail_cn = '';
  let headline_cn = '';
  let pill_cn = '';

  if (level === 'neutral') {
    detail_cn = '模型推演：达到这一进球节奏与达不到的机率几乎各半，暂无明确倾向；精彩程度仍看临场发挥。';
    headline_cn = '进球氛围：几乎五五开';
    pill_cn = '沉闷与精彩几乎五五开，无明显倾向。';
  } else if (level === 'mild_low') {
    detail_cn = '模型略偏沉闷——全场进球节奏可能偏慢、难及这一预期；信号偏弱，仅供参考。';
    headline_cn = '进球氛围：略倾向沉闷（弱信号）';
    pill_cn = '略倾向沉闷（弱信号）。';
  } else if (level === 'mild_high') {
    detail_cn = '模型略偏精彩——进球节奏有望接近或达到这一预期；信号偏弱，仅供参考。';
    headline_cn = '进球氛围：略倾向精彩（弱信号）';
    pill_cn = '略倾向精彩（弱信号）。';
  } else if (level === 'clear_low') {
    detail_cn = '模型明显偏沉闷——低比分拉锯概率较高，难撑起这一进球节奏（模型自身预期约 ' + fair + ' 球）。';
    headline_cn = '进球氛围：倾向沉闷';
    pill_cn = '倾向沉闷，精彩度可能一般。';
  } else {
    detail_cn = '模型明显偏精彩——对攻与破门节奏相对可期，较易达到这一进球预期（模型自身预期约 ' + fair + ' 球）。';
    headline_cn = '进球氛围：倾向精彩';
    pill_cn = '倾向精彩，观赛更有看头。';
  }

  if (gap >= 1.0 && level === 'neutral') {
    detail_cn += ' 注：外界这一进球预期高于模型自身判断，大众心理偏多进球，但模型仍接近五五开。';
    headline_cn = '进球氛围：几乎五五开 · 外界预期偏高';
  } else if (gap >= 1.25) {
    detail_cn += ' 须警惕「外界预期很精彩、实际偏闷」的落差。';
  }

  return {
    level,
    label_cn: meta.label_cn,
    color: meta.color,
    meter_label_cn: meta.meter_label_cn,
    meter_pos: meterPos,
    lean_side: leanSide,
    lean_strength: leanStrength,
    section_intro_cn,
    pill_cn,
    detail_cn,
    headline_cn,
    show_lean: showLean,
    over_pct: over,
    line_gap: gap,
    market_line: market,
    market_goals_int: marketGoalsInt,
    market_goals_cn: marketGoalsCn,
    caution_public_high: gap >= 1.0,
  };
}

/**
 * 净胜档读场（核心：热门能否达到赛前外界净胜预期）
 */
function classifySpreadOutlook(cover, tier, tierGap, favName, winOutlook) {
  const t = Number(tier) || 0;
  const gap = Number(tierGap) || 0;
  const th = getTierCoverThresholds(t);
  const pct = n => Math.round((Number(n) || 0) * 10) / 10;
  const full = pct(cover?.full_cover_pct ?? winOutlook?.margin_meet_pct ?? 0);
  const half = pct(cover?.half_cover_pct ?? winOutlook?.margin_half_pct ?? 0);
  const lose1 = pct(cover?.half_lose_pct ?? winOutlook?.margin_fail_pct ?? 0);

  if (Math.abs(t) < 0.01) {
    return {
      level: 'even',
      label_cn: '势均力敌',
      color: '#8A96A8',
      fav_name: null,
      market_expect_cn: '势均力敌',
      meet_pct: null,
      verdict_cn: '无明确净胜拉开预期',
      headline_cn: '净胜走向：双方实力接近',
      pill_cn: '双方实力接近，暂无单侧净胜预期。',
      detail_cn: '赛前外界为势均力敌档，模型未给出哪一方能明显拉开净胜的信号。',
      full_cover_pct: full,
      half_cover_pct: half,
      show_cover: false,
    };
  }

  let level = 'uncertain';
  let label_cn = '净胜幅度难下定论';
  let color = '#8A96A8';
  let verdict_cn = '达标与否难下定论';

  if (full >= 50) {
    level = 'likely';
    label_cn = '达到预期较有希望';
    color = '#5BBF8A';
    verdict_cn = '达到预期较有希望';
  } else if (full >= 35) {
    level = 'possible';
    label_cn = '有达标可能';
    color = '#C8A96E';
    verdict_cn = '有达标可能';
  } else if (gap >= 0.5 && full < 30) {
    level = 'skeptical';
    label_cn = '外界预期偏高';
    color = '#D95F6A';
    verdict_cn = '达到预期难度偏大';
  } else if (lose1 >= 28) {
    level = 'narrow';
    label_cn = '更可能小胜';
    color = '#C8A96E';
    verdict_cn = '更可能小胜，难拉开净胜';
  } else if (half >= 20 && th.halfLabel) {
    level = 'partial';
    label_cn = '部分达标更现实';
    color = '#C8A96E';
    verdict_cn = '部分达标更现实';
  }

  const extras = [];
  if (th.halfLabel && half >= 12) extras.push(th.halfLabel + ' 约 ' + half + '%');
  if (lose1 >= 18) extras.push('仅胜 1 球约 ' + lose1 + '%');

  let detail_cn = favName + ' · 赛前外界预期 ' + th.fullLabel
    + '。模型推演达标概率约 ' + full + '%';
  if (level === 'skeptical') {
    detail_cn += '；外界看法高于 xG 隐含约 ' + gap + ' 球，达到预期难度偏大';
  } else if (level === 'narrow') {
    detail_cn += '；赢球可期，但净胜难拉到预期档';
  } else if (level === 'likely') {
    detail_cn += '；模型认为达到外界预期档的概率相对较高';
  } else if (level === 'possible') {
    detail_cn += '；有一定达标空间，但非高把握';
  } else if (level === 'partial') {
    detail_cn += '；全档达标偏难，部分达标更现实';
  }
  if (extras.length) detail_cn += '（' + extras.join(' · ') + '）';
  detail_cn += '。';

  const headline_cn = favName + ' · 净胜走向：' + verdict_cn;
  const pill_cn = '达标概率约 ' + full + '% · ' + verdict_cn;

  return {
    level,
    label_cn,
    color,
    fav_name: favName,
    market_expect_cn: th.fullLabel,
    meet_pct: full,
    meet_pct_label: '模型推演达标概率',
    verdict_cn,
    headline_cn,
    pill_cn,
    detail_cn,
    extra_stats_cn: extras.join(' · '),
    full_cover_pct: full,
    half_cover_pct: half,
    lose1_pct: lose1,
    margin_full_label: th.fullLabel,
    margin_half_label: th.halfLabel,
    tier_gap: gap,
    show_cover: true,
  };
}

/** 两队高峰是否落在同一 15 分钟段 — 供读场「重合窗口」提示 */
function buildGoalTimingCrossInsight(peaks, homeName, awayName) {
  if (!peaks?.home_scored?.interval) return null;
  const same = (a, b) => a?.interval && b?.interval && a.interval === b.interval;

  const hits = [];
  if (same(peaks.away_scored, peaks.home_conceded)) {
    hits.push({
      type: 'away_attack',
      interval: peaks.away_scored.interval,
      color: '#5BBF8A',
      title: '客队进攻有利窗口',
      text: peaks.away_scored.interval + ' 分：' + awayName + '惯常进球高峰（' + peaks.away_scored.pct
        + '%）与' + homeName + '惯常失球高峰（' + peaks.home_conceded.pct
        + '%）重合——该时段客队破门相对更容易发生。',
    });
  }
  if (same(peaks.home_scored, peaks.away_conceded)) {
    hits.push({
      type: 'home_attack',
      interval: peaks.home_scored.interval,
      color: '#7BB8D4',
      title: '主队进攻有利窗口',
      text: peaks.home_scored.interval + ' 分：' + homeName + '惯常进球高峰（' + peaks.home_scored.pct
        + '%）与' + awayName + '惯常失球高峰（' + peaks.away_conceded.pct
        + '%）重合——该时段主队破门相对更容易发生。',
    });
  }
  if (same(peaks.home_scored, peaks.away_scored) && !same(peaks.home_scored, peaks.away_conceded)) {
    hits.push({
      type: 'open_play',
      interval: peaks.home_scored.interval,
      color: '#E8A54B',
      title: '对攻高发时段',
      text: peaks.home_scored.interval + ' 分：双方惯常进球高峰重合，该时段比赛更开放、进球面相对更大。',
    });
  }
  if (same(peaks.home_conceded, peaks.away_conceded)) {
    hits.push({
      type: 'both_leak',
      interval: peaks.home_conceded.interval,
      color: '#C8A96E',
      title: '双方易失球时段',
      text: peaks.home_conceded.interval + ' 分：双方惯常失球高峰重合，该时段防守相对更松、总进球面可能抬升。',
    });
  }

  const crossIntervals = [...new Set(hits.map(h => h.interval))];
  return {
    has_cross: hits.length > 0,
    hits,
    cross_intervals: crossIntervals,
    summary_cn: hits.length
      ? hits.length === 1
        ? hits[0].title + ' · ' + hits[0].interval + ' 分'
        : '发现 ' + hits.length + ' 处节奏重合窗口'
      : '两队高峰时段错开，暂无强重合进攻窗口。',
  };
}

/** 进失球时间段 — 每队高峰 + 两队节奏交叉读法 */
function buildGoalTimingDisplay(raw, homeName, awayName) {
  if (!raw?.home?.scored?.length) return null;
  const intervals = raw.intervals || ['1–15', '16–30', '31–45', '46–60', '61–75', '76–90', '90+'];
  function peakIdx(arr) {
    let best = 0;
    for (let i = 1; i < arr.length; i++) {
      if ((arr[i] ?? 0) > (arr[best] ?? 0)) best = i;
    }
    return best;
  }
  const hs = peakIdx(raw.home.scored);
  const hc = peakIdx(raw.home.conceded);
  const as = peakIdx(raw.away.scored);
  const ac = peakIdx(raw.away.conceded);
  const sample = raw.sample_label || '近期样本';
  const peaks = {
    home_scored: { interval: intervals[hs], pct: raw.home.scored[hs] },
    home_conceded: { interval: intervals[hc], pct: raw.home.conceded[hc] },
    away_scored: { interval: intervals[as], pct: raw.away.scored[as] },
    away_conceded: { interval: intervals[ac], pct: raw.away.conceded[ac] },
  };
  const cross = buildGoalTimingCrossInsight(peaks, homeName, awayName);
  return {
    sample_label: sample,
    source_note: raw._source || 'manual',
    home_name: homeName,
    away_name: awayName,
    intervals,
    peaks,
    cross_insight: cross,
    disclaimer_cn: '以上为两队' + sample + '历史进球/失球时间段统计，供读场参考；非本场赛果预测，与灵力分析娱乐板块无关。',
  };
}

/** 客户读场要点 — 净胜为主、进球氛围次之、胜平负弱化 */
function buildCustomerReading(match, displaySummary, tier, tierGap, cover, adjusted) {
  const totalsView = displaySummary.totals_view || {};
  const totalsOutlook = totalsView.totals_outlook
    || classifyTotalsOutlook(
      totalsView.over_pct,
      totalsView.line_gap,
      totalsView.market_line,
      totalsView.fair_line
    );
  const spreadOutlook = classifySpreadOutlook(
    cover, tier, tierGap, displaySummary.fav_name, displaySummary.win_outlook
  );

  const drawPct = adjusted?.draw ?? 0;
  const maxWin = Math.max(adjusted?.home_win ?? 0, adjusted?.away_win ?? 0);
  let drawRisk = null;
  if (drawPct >= 30) {
    drawRisk = {
      level: 'high',
      color: '#C8A96E',
      note: '平局权重约 ' + drawPct + '%，小组赛易出守平——勿只盯胜负一方。',
    };
  } else if (drawPct >= 26 && maxWin - drawPct < 14) {
    drawRisk = {
      level: 'medium',
      color: '#C8A96E',
      note: '平局约 ' + drawPct + '%，与热门取胜概率接近，存在「赢球变平局」空间。',
    };
  }

  const headline_cn = spreadOutlook.headline_cn;

  const sub_cn = [
    spreadOutlook.pill_cn || spreadOutlook.detail_cn,
    totalsOutlook.headline_cn,
    drawRisk ? drawRisk.note : null,
  ].filter(Boolean).join(' ');

  const totalsLeanHigh = totalsOutlook.lean_side === 'exciting';
  const pills = [
    {
      key: 'spread',
      icon: '⚖️',
      label: '净胜走向',
      outlook: spreadOutlook,
      text: spreadOutlook.pill_cn || spreadOutlook.detail_cn,
      color: spreadOutlook.color,
      primary: true,
    },
    {
      key: 'totals',
      icon: totalsOutlook.show_lean
        ? (totalsLeanHigh ? '✨' : '🌙')
        : '◎',
      label: '进球氛围',
      outlook: totalsOutlook,
      text: totalsOutlook.pill_cn || totalsOutlook.detail_cn,
      color: totalsOutlook.color,
      muted: !totalsOutlook.show_lean,
    },
  ];

  return {
    headline_cn,
    sub_cn,
    spread: spreadOutlook,
    totals: totalsOutlook,
    draw_risk: drawRisk,
    pills,
    methodology_note: '读场优先级：净胜走向 ＞ 进球氛围（对照外界「至少 N 球」预期，中性档几乎五五开；强信号才标沉闷/精彩）。仅供娱乐推演，非投注建议。',
  };
}

/** 页面展示 — 预期校准（中性表述，不出现盘口/赔率） */
function buildCalibrationDisplay(meta, tierGap, cover, impliedTier, marketTier, homeName, awayName) {
  const gap = Math.round(tierGap * 100) / 100;
  const th = getTierCoverThresholds(marketTier);
  let gapText = '与赛前净胜看法基本一致';
  if (gap >= 0.35) gapText = '赛前净胜看法高于 xG 隐含约 ' + gap;
  else if (gap <= -0.35) gapText = '赛前净胜看法低于 xG 隐含约 ' + Math.abs(gap);
  else if (gap >= 0.15) gapText = '赛前净胜看法略高（约 +' + gap + '）';
  else if (gap <= -0.15) gapText = '赛前净胜看法略低（约 ' + gap + '）';

  let marginText = '';
  if (cover.half_lose_pct >= 12) {
    marginText = ' · 模型认为仅小胜 1 球仍约 ' + cover.half_lose_pct + '%';
  }
  if (th.halfLabel && (cover.half_cover_pct ?? 0) >= 8) {
    marginText += ' · ' + th.halfLabel + ' 约 ' + cover.half_cover_pct + '%';
  }
  if ((cover.full_cover_pct ?? 0) >= 5 && th.fullMin >= 3) {
    marginText += ' · ' + th.fullLabel + '（全达标）约 ' + cover.full_cover_pct + '%';
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
  const gap = totals.line_gap ?? 0;
  const marketLine = totals.market_line ?? totals.fair_line;
  const fairLine = totals.fair_line;
  let gapNote = '';
  if (gap >= 1.25) {
    gapNote = ' · ⚠ 外界总进球参考比模型公允线高约 ' + gap + ' 球，大众心理明显偏多进球';
  } else if (gap >= 1.0) {
    gapNote = ' · ⚠ 外界参考比模型公允线高约 ' + gap + ' 球，偏高明显';
  } else if (gap >= 0.5) {
    gapNote = ' · 外界参考略高于模型公允线（+' + gap + ' 球）';
  } else if (gap <= -0.5) {
    gapNote = ' · 外界参考低于模型公允线（' + gap + ' 球）';
  }
  let gapWarning = null;
  if (gap >= 1.25) {
    gapWarning = {
      level: 'high',
      cn: '外界总进球参考 ' + marketLine + '，比模型公允线 ' + fairLine + ' 高约 ' + gap
        + ' 球——大众心理明显偏多进球；模型对总进球仍宜谨慎表态',
    };
  } else if (gap >= 1.0) {
    gapWarning = {
      level: 'medium',
      cn: '外界总进球参考 ' + marketLine + ' 比模型公允线 ' + fairLine + ' 高约 ' + gap + ' 球，偏高明显',
    };
  }

  const totalsOutlook = classifyTotalsOutlook(totals.over_pct, gap, marketLine, fairLine);
  let modelLean = totalsOutlook.headline_cn;
  if (!totalsOutlook.show_lean) {
    modelLean = '模型在常见进球预期附近均衡，不作强倾向';
  }

  return {
    expected_total: Number(et),
    fair_line: fairLine,
    market_line: marketLine,
    line_gap: gap,
    over_pct: totals.over_pct,
    gap_warning: gapWarning,
    totals_outlook: totalsOutlook,
    summary_cn: '模型 xG 合计约 ' + et + ' 球（公允参考约 ' + fairLine + '）'
      + ' · 外界总进球参考 ' + marketLine
      + (gap > 0.01 ? '，高出模型约 ' + gap + ' 球' : gap < -0.01 ? '，低于模型约 ' + Math.abs(gap) + ' 球' : '')
      + gapNote + ' · ' + modelLean,
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
  displaySummary.customer_reading = buildCustomerReading(
    match, displaySummary, tier, tierGap, coverAdj, adjusted
  );
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

/** 2026 48 队制 — FIFA 官方 32 强/16 强对阵槽位（Annex C 第3名组合暂用池化描述） */
const KNOCKOUT_BRACKET = {
  A: {
    linked: ['B'],
    first: {
      r32: '32强 M79 · A 组第 1 vs 最佳第 3（C/E/F/H/I 池）',
      r16: '16强 M92 · 对阵 L 组第 1 vs 最佳第 3（E/H/I/J/K 池）之胜者',
      r16_corridor: '出线后半区对手强度取决于第 3 名组合',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M73 · A 组第 2 vs B 组第 2',
      r16: '16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者',
      r16_corridor: '若 F 组头名为荷兰、C 组次席为巴西，此半区将提前碰强队',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'C,E,F,H,I',
    tradeoff: 'A 组次席走 M73→M90 通道，与 B 组次席同槽；头名则打第 3 名，路径更不确定。',
  },
  B: {
    linked: ['A'],
    first: {
      r32: '32强 M85 · B 组第 1 vs 最佳第 3（E/F/G/I/J 池）',
      r16: '16强 M96 · 对阵 K 组第 1 vs 最佳第 3（D/E/I/J/L 池）之胜者',
      r16_corridor: '上半区深度取决于第 3 名落位',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M73 · B 组第 2 vs A 组第 2',
      r16: '16强 M90 · 对阵 F 组第 1 vs C 组第 2 之胜者',
      r16_corridor: '墨/韩/加/瑞次席若出线，16 强或遇 F1/C2 胜者（荷兰/巴西走廊）',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'A,E,F,H,I,J,K,L',
    tradeoff: 'B 组次席与 A 组次席同进 M73，16 强进入 M90 上半区。',
  },
  C: {
    linked: ['F', 'E', 'I'],
    first: {
      r32: '32强 M76 · C 组第 1 vs F 组第 2',
      r16: '16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者',
      r16_corridor: '法国/挪威/塞内加尔/德国（E/I 次席走廊）— 16 强硬仗区',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M75 · F 组第 1 vs C 组第 2',
      r16: '16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者',
      r16_corridor: '墨西哥/韩国/加拿大/瑞士（A/B 次席走廊）— 16 强相对温和',
      r32_tier: 'HARD',
    },
    third_pool: 'D,E,F,G,H,I,J,K',
    tradeoff: 'C 组头名 32 强打 F 组第 2（荷兰若夺 F 组头名则 32 强避荷兰），但 16 强进入 E2/I2 胜者通道；次席 32 强极可能直碰 F 组头名（荷兰），16 强路径反而更顺。强队末轮或存在「保次席避 16 强豪强」博弈。',
  },
  D: {
    linked: ['C', 'G'],
    first: {
      r32: '32强 M81 · D 组第 1 vs 最佳第 3（B/E/F/I/J 池）',
      r16: '16强 M94 · 对阵 G 组第 1 vs 最佳第 3（A/E/H/I/J 池）之胜者',
      r16_corridor: '比利时/埃及 等 G 组头名走廊',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M88 · D 组第 2 vs G 组第 2',
      r16: '16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者',
      r16_corridor: '阿根廷/西班牙 半区',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'C,E,F,G,H,I,J,K',
    tradeoff: 'D 组次席走 D2–G2 槽，与 C/F 头名次席路径不同；美国/土耳其若争头名需关注第 3 名落位。',
  },
  E: {
    linked: ['I', 'F'],
    first: {
      r32: '32强 M74 · E 组第 1 vs 最佳第 3（A/B/C/D/F 池）',
      r16: '16强 M89 · 对阵 E 组第 1/第 3 组合 vs I 组第 1/第 3 组合之胜者',
      r16_corridor: '德国头名出线后 16 强对手取决于第 3 名组合',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M78 · E 组第 2 vs I 组第 2',
      r16: '16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者',
      r16_corridor: '德国/科特迪瓦次席若出线，16 强或遇 C1/F2 胜者（巴西/日本/瑞典走廊）',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'F,G,H,I,J,K,L',
    tradeoff: 'E 组次席与 I 组次席同槽 M78，胜者进入 M91 与 C/F 半区交汇。',
  },
  F: {
    linked: ['C', 'E'],
    first: {
      r32: '32强 M75 · F 组第 1 vs C 组第 2',
      r16: '16强 M90 · 对阵 A 组第 2 vs B 组第 2 之胜者',
      r16_corridor: '荷兰若夺 F 组头名，32 强直接对话 C 组次席（巴西若列次席则提前相遇）',
      r32_tier: 'HARD',
    },
    second: {
      r32: '32强 M76 · C 组第 1 vs F 组第 2',
      r16: '16强 M91 · 对阵 E 组第 2 vs I 组第 2 之胜者',
      r16_corridor: 'F 组次席 32 强碰 C 组头名，16 强进 E/I 次席走廊',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'E,G,H,I,J,K,L',
    tradeoff: 'F 组与 C 组绑定：头名次席决定 32 强是否提前碰面，并切换 16 强进入 M90 或 M91 半区。',
  },
  G: {
    linked: ['D', 'H'],
    first: {
      r32: '32强 M82 · G 组第 1 vs 最佳第 3（A/E/H/I/J 池）',
      r16: '16强 M94 · 对阵 D 组第 1 vs 最佳第 3 之胜者',
      r16_corridor: '比利时头名通道',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M88 · D 组第 2 vs G 组第 2',
      r16: '16强 M95 · 对阵 J 组第 1 vs H 组第 2 之胜者',
      r16_corridor: '阿根廷/乌拉圭 半区',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'E,F,H,I,J,K',
    tradeoff: 'G 组次席与 D 组次席同槽，16 强进入 J/H 半区。',
  },
  H: {
    linked: ['J', 'G'],
    first: {
      r32: '32强 M84 · H 组第 1 vs J 组第 2',
      r16: '16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者',
      r16_corridor: '西班牙头名 → 16 强或遇 K/L 次席',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M86 · J 组第 1 vs H 组第 2',
      r16: '16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者',
      r16_corridor: '沙特/佛得角次席通道',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'E,F,G,I,J,K',
    tradeoff: 'H 组与 J 组绑定；头名次席决定 32 强对位。',
  },
  I: {
    linked: ['E', 'J'],
    first: {
      r32: '32强 M77 · I 组第 1 vs 最佳第 3（C/D/F/G/H 池）',
      r16: '16强 M89 · 半区取决于第 3 名组合',
      r16_corridor: '法国头名出线后路径受 Annex C 第 3 名组合影响',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M78 · E 组第 2 vs I 组第 2',
      r16: '16强 M91 · 对阵 C 组第 1 vs F 组第 2 之胜者',
      r16_corridor: '挪威/塞内加尔次席 → 16 强或遇巴西/瑞典/日本走廊',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'J,K,L,G,H',
    tradeoff: 'I 组次席走 M78，与 E 组次席同槽，16 强汇入 C/F 半区。',
  },
  J: {
    linked: ['H', 'I'],
    first: {
      r32: '32强 M86 · J 组第 1 vs H 组第 2',
      r16: '16强 M95 · 对阵 D 组第 2 vs G 组第 2 之胜者',
      r16_corridor: '阿根廷头名半区',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M84 · H 组第 1 vs J 组第 2',
      r16: '16强 M93 · 对阵 K 组第 2 vs L 组第 2 之胜者',
      r16_corridor: '约旦/阿尔及利亚次席通道',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'I,K,L,G,H',
    tradeoff: 'J 组与 H 组绑定；阿根廷若头名走 M86→M95。',
  },
  K: {
    linked: ['L', 'J'],
    first: {
      r32: '32强 M87 · K 组第 1 vs 最佳第 3（D/E/I/J/L 池）',
      r16: '16强 M96 · 对阵 B 组第 1 vs 最佳第 3 之胜者',
      r16_corridor: '葡萄牙头名通道',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M83 · K 组第 2 vs L 组第 2',
      r16: '16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者',
      r16_corridor: '哥伦比亚/乌兹别克次席 → 16 强或遇西班牙/阿根廷半区',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'J,L,I,H',
    tradeoff: 'K 组次席与 L 组次席同槽 M83。',
  },
  L: {
    linked: ['K', 'A'],
    first: {
      r32: '32强 M80 · L 组第 1 vs 最佳第 3（E/H/I/J/K 池）',
      r16: '16强 M92 · 对阵 A 组第 1 vs 最佳第 3 之胜者',
      r16_corridor: '英格兰头名通道',
      r32_tier: 'MEDIUM',
    },
    second: {
      r32: '32强 M83 · K 组第 2 vs L 组第 2',
      r16: '16强 M93 · 对阵 H 组第 1 vs J 组第 2 之胜者',
      r16_corridor: '克罗地亚/加纳次席通道',
      r32_tier: 'MEDIUM',
    },
    third_pool: 'K,J,I,H',
    tradeoff: 'L 组次席走 M83，16 强进入 H/J 半区。',
  },
};

/** @deprecated 保留兼容；新逻辑请用 KNOCKOUT_BRACKET */
const KNOCKOUT_PATHS = Object.fromEntries(
  Object.entries(KNOCKOUT_BRACKET).map(([g, b]) => [
    g,
    {
      r32_1st: b.first.r32,
      r32_2nd: b.second.r32,
      third_pool: b.third_pool,
    },
  ]),
);

const STRONG_TEAMS = new Set([
  'Brazil', 'France', 'Argentina', 'England', 'Germany', 'Spain', 'Portugal',
  'Netherlands', 'Belgium', 'USA', 'Mexico', 'Morocco', 'Colombia', 'Uruguay',
]);

function linkedGroupNote(group, snapshots) {
  const bracket = KNOCKOUT_BRACKET[group];
  if (!bracket?.linked?.length) return [];
  return bracket.linked.map(lg => {
    const snap = (snapshots || []).find(s => s.group === lg);
    const table = snap?.table?.length ? snap.table : buildDefaultTable(lg);
    const sorted = sortTable(table);
    const leader = sorted[0];
    const runner = sorted[1];
    if (!leader) return `${lg} 组形势待定`;
    const tie = leader.pts === runner?.pts && leader.p < 3;
    const rank2 = tie ? `${runner.team} 同分` : `${runner.team} ${runner.pts} 分`;
    return `${lg} 组：头名 ${leader.team} ${leader.pts} 分 · 次席 ${rank2}（32强绑定组）`;
  });
}

function enrichPathWithLiveOpponent(pathBase, group, rank, snapshots) {
  const pairMap = { C: 'F', F: 'C', D: 'G', G: 'D', H: 'J', J: 'H', E: 'I', I: 'E', A: 'B', B: 'A', K: 'L', L: 'K' };
  const linked = pairMap[group];
  if (!linked) return pathBase;
  const snap = (snapshots || []).find(s => s.group === linked);
  const table = snap?.table?.length ? snap.table : buildDefaultTable(linked);
  const sorted = sortTable(table);
  const oppIdx = rank === 1 ? 1 : 0;
  const opp = sorted[oppIdx];
  if (!opp) return pathBase;
  const slot = rank === 1 ? '第 2' : '第 1';
  const likely = opp.team + (STRONG_TEAMS.has(opp.team) ? '（强队）' : '');
  return `${pathBase} → 当前 ${linked} 组${slot}倾向 ${likely}`;
}

function buildTeamPathScenario(group, rank, snapshots) {
  const b = KNOCKOUT_BRACKET[group];
  if (!b) {
    return {
      if_r32: '32强路径待定',
      if_r16: '—',
      r16_corridor: '',
    };
  }
  const block = rank === 1 ? b.first : rank === 2 ? b.second : null;
  if (!block) {
    return {
      if_r32: `12 个小组第 3 中取成绩最好的 8 支进 32 强（先比积分 → 净胜球 → 进球数 → 公平竞赛分）；本组需与 ${(b.third_pool || '').replace(/,/g, '/')} 等组第 3 横向比较`,
      if_r16: '32 强对手取决于 Annex C 第 3 名组合（495 种可能）',
      r16_corridor: '第 3 名出线队 32 强多对阵某组头名，16 强路径末轮再定',
    };
  }
  return {
    if_r32: enrichPathWithLiveOpponent(block.r32, group, rank, snapshots),
    if_r16: block.r16,
    r16_corridor: block.r16_corridor,
    r32_tier: block.r32_tier,
  };
}

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

function buildOptimalStrategySummary(ctx) {
  const {
    group, matchday, homeTeam, awayTeam, homeRow, awayRow, sorted,
    focusTeam, fLeader, crossNotes,
  } = ctx;
  const hr = homeRow || { pts: 0, p: 0 };
  const ar = awayRow || { pts: 0, p: 0 };
  const focus = focusTeam || (STRONG_TEAMS.has(homeTeam) ? homeTeam : STRONG_TEAMS.has(awayTeam) ? awayTeam : homeTeam);
  const fRow = sorted.find(r => r.team === focus) || hr;
  const fRank = sorted.findIndex(r => r.team === focus) + 1;
  const notes = crossNotes || [];
  const tightGroup = notes.some(n => /四队同积|四队同分|均1分|同积/.test(n));
  const f1 = fLeader || 'F 组头名球队';

  /** 出线分已稳时的婉转表述：演练 + 非胜可接受（不说「故意输球」） */
  const softNonWin =
    '可借机锻炼新兵、尝试新战术演练——在出线分已足够的前提下，非胜结果亦可接受，'
    + '以换取更顺的淘汰半区；但须守住净胜球边界，避免失手跌入第 3 争八区。';

  const mustWinNow =
    '此阶段仍以全力争胜、抢 3 分为上策；尚未到以演练或轮换为名调整名次、接受非胜结果的窗口。';

  if (matchday >= 3 && group === 'C' && STRONG_TEAMS.has(focus)) {
    return '策略最优解（推演）：若 ' + focus + ' 末轮前已确保出线，可在「保头名、32强避开 ' + f1 + '」'
      + '与「落在次席、置换更温和 16 强半区」之间取舍。' + softNonWin
      + '出线分未稳时，' + mustWinNow;
  }

  if (matchday >= 3 && fRow.pts >= 4 && fRank === 1) {
    return '策略最优解（推演）：' + focus + ' 已握出线主动，末轮或适度收敛进攻、锻炼新兵并演练新战术，把核心体能留给淘汰赛；'
      + '若次席仍紧追，仍宜控制场面——' + softNonWin;
  }

  if (matchday >= 3 && fRank === 2 && (group === 'C' || group === 'F')) {
    return '策略最优解（推演）：' + focus + ' 维持次席有时是更顺的长路——32 强或可接受与绑定组头名对话，'
      + '以换取 16 强进入相对温和半区。出线无忧时，可结合轮换与新战术演练，非胜结果亦在可接受区间，但须盯紧净胜球。';
  }

  if (matchday >= 3 && fRow.pts >= 3) {
    return '策略最优解（推演）：' + focus + ' 末轮可在「保住现有名次」与「为淘汰赛选半区」之间微调；'
      + '未完全锁定出线前，' + mustWinNow
      + '已锁定后，' + softNonWin;
  }

  if (tightGroup) {
    if (hr.pts !== ar.pts) {
      const leaderSide = hr.pts > ar.pts ? homeTeam : awayTeam;
      const chaser = hr.pts > ar.pts ? awayTeam : homeTeam;
      return '策略最优解（推演）：关联组形势胶着，本场 ' + leaderSide + ' 取胜最能巩固主动，'
        + chaser + ' 则需积极抢 3 分；若握手各取 1 分，对领先方尚可接受，对追赶方则略偏保守——'
        + mustWinNow;
    }
    return '策略最优解（推演）：本组及关联组积分纠缠，本场以抢 3 分（至少 1 分）为先；'
      + '锻炼新兵与战术演练宜留到末轮、出线形势明朗后再考虑，届时非胜结果方有可接受空间。';
  }

  if (matchday === 2 && hr.pts <= 1 && ar.pts <= 1) {
    return '策略最优解（推演）：双方积分均不宽裕，' + mustWinNow;
  }

  if (matchday === 2 && Math.abs(hr.pts - ar.pts) <= 1) {
    return '策略最优解（推演）：' + homeTeam + ' 与 ' + awayTeam + ' 积分接近，取胜的一方更能掌握直接对话主动；'
      + '若只能取 1 分，亦需同步关注绑定组赛果与净胜球——' + mustWinNow;
  }

  return '策略最优解（推演）：结合绑定组同期赛果，本场以确保积分不吃亏为前提；'
    + '出线形势逐渐清晰后，方可在末轮以锻炼新兵、演练新战术为契机，委婉取舍名次与半区——切忌在未安全出线时提前「铺路」。';
}

function finishManipulationRisk(base, ctx) {
  const out = { ...base };
  if (out.level === 'MEDIUM' || out.level === 'HIGH') {
    out.optimal_summary = buildOptimalStrategySummary({
      ...ctx,
      focusTeam: out.focus_team,
    });
  }
  return out;
}

function assessManipulationRisk(group, matchday, homeTeam, awayTeam, table, crossNotes, snapshots) {
  const sorted = sortTable(table);
  const homeRow = sorted.find(r => r.team === homeTeam);
  const awayRow = sorted.find(r => r.team === awayTeam);
  const leader = sorted[0];
  const bracket = KNOCKOUT_BRACKET[group];
  const fSnap = (snapshots || []).find(s => s.group === 'F');
  const fLeader = fSnap?.table?.length ? sortTable(fSnap.table)[0]?.team : 'Netherlands';
  const ctx = {
    group, matchday, homeTeam, awayTeam, homeRow, awayRow, sorted,
    fLeader, bracket, crossNotes, snapshots,
  };

  if (matchday <= 1) {
    return finishManipulationRisk({
      level: 'LOW',
      level_cn: '低',
      focus_team: null,
      reason: '小组赛第 1 轮，各队普遍抢分意愿强，故意控分动机低；以下路径预判供后续轮次参考。',
    }, ctx);
  }

  const strongInMatch = [homeTeam, awayTeam].filter(t => STRONG_TEAMS.has(t));

  if (group === 'C' && matchday === 2) {
    if (homeTeam === 'Brazil' || awayTeam === 'Brazil') {
      const bRow = homeTeam === 'Brazil' ? homeRow : awayRow;
      if (bRow && bRow.pts <= 1) {
        return finishManipulationRisk({
          level: 'LOW',
          level_cn: '低',
          focus_team: 'Brazil',
          reason: '巴西仅积 ' + bRow.pts + ' 分、暂列第 ' + (sorted.findIndex(r => r.team === 'Brazil') + 1)
            + '，本轮对海地须全力抢 3 分，无控分空间。末轮才可能出现「C 组头名 vs 次席」路径博弈（32强避荷兰 vs 16强避法国/德国走廊）。',
        }, ctx);
      }
    }
  }

  if (matchday >= 3 && bracket?.tradeoff && strongInMatch.length) {
    const focus = strongInMatch[0];
    let reason = bracket.tradeoff;
    if (group === 'C') {
      reason = 'C 组末轮：若 ' + focus + ' 已确保出线，头名 32 强打 F 组第 2（' + fLeader + ' 若夺 F 组头名则 32 强避荷兰），'
        + '但 16 强进入 E2/I2 通道（法国/德国/挪威/塞内加尔）；次席 32 强极可能直碰 F 组头名，16 强走 A2/B2 温和通道。'
        + '历史上有强队「算分选半区」先例，但末轮仍须先确保出线。';
    }
    return finishManipulationRisk({
      level: 'MEDIUM',
      level_cn: '中',
      focus_team: focus,
      reason,
    }, ctx);
  }

  if (matchday >= 3 && leader && leader.pts >= 4) {
    return finishManipulationRisk({
      level: 'MEDIUM',
      level_cn: '中',
      focus_team: leader.team,
      reason: leader.team + ' 末轮或存在「避开某 32 强对手 / 保小组第 2 进更顺半区」的战术选择，需结合绑定组（如 C↔F）同期赛果。',
    }, ctx);
  }
  const notes = crossNotes || [];
  if (notes.some(n => n.includes('四队同分') || n.includes('均1分') || n.includes('同积'))) {
    return finishManipulationRisk({
      level: 'MEDIUM',
      level_cn: '中',
      focus_team: null,
      reason: '本组或关联组积分胶着，第 2、3 轮可能出现算分踢法；本轮仍应以抢分为主。',
    }, ctx);
  }
  if (group === 'C' && matchday === 2 && bracket?.tradeoff) {
    return finishManipulationRisk({
      level: 'LOW',
      level_cn: '低',
      focus_team: 'Brazil',
      reason: '本轮无控分空间；但 C↔F 绑定：F 组头名当前倾向 ' + fLeader
        + '。若荷兰夺 F 组第 1，巴西若最终列 C 组第 2 将在 32 强直碰荷兰；若夺 C 组第 1 则 32 强打 F 组第 2，但 16 强进 E/I 次席走廊。',
    }, ctx);
  }
  return finishManipulationRisk({
    level: 'LOW',
    level_cn: '低',
    focus_team: null,
    reason: '暂无明确控分动机；出线后 32 强/16 强路径见下方绑定组预判。',
  }, ctx);
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
  const homeRow = sorted.find(r => r.team === match.home.name) || { team: match.home.name, pts: 0, p: 0 };
  const awayRow = sorted.find(r => r.team === match.away.name) || { team: match.away.name, pts: 0, p: 0 };
  const bracket = KNOCKOUT_BRACKET[g] || {};
  const linkedNotes = linkedGroupNote(g, groupSnapshots);
  const crossGroups = ['G', 'H', 'E', 'F', 'I', 'D'].filter(x => x !== g && !(bracket.linked || []).includes(x));
  const crossSnapshots = crossGroups
    .map(cg => (groupSnapshots || []).find(s => s.group === cg))
    .filter(Boolean);

  const crossNotes = [
    ...linkedNotes,
    ...crossSnapshots.map(cs => {
      const pts = cs.table.map(t => t.pts);
      const allSame = pts.length && pts.every(pt => pt === pts[0]);
      const firstRow = cs.table[0];
      if (allSame && firstRow && firstRow.p >= 1) {
        return cs.group + ' 组四队同积 ' + pts[0] + ' 分，形势极度开放';
      }
      const leader = sortTable(cs.table)[0];
      return cs.group + ' 组 ' + leader.team + ' ' + leader.pts + ' 分领跑';
    }),
  ];

  const risk = assessManipulationRisk(
    g, match.matchday || 1, match.home.name, match.away.name, table, crossNotes, groupSnapshots,
  );

  const teamScenario = (name, row) => {
    const p1 = buildTeamPathScenario(g, 1, groupSnapshots);
    const p2 = buildTeamPathScenario(g, 2, groupSnapshots);
    const p3 = buildTeamPathScenario(g, 3, groupSnapshots);
    return {
      team: name,
      rank: sorted.findIndex(r => r.team === name) + 1 || '—',
      pts: row.pts,
      played: row.p,
      if_1st: p1.if_r32,
      if_1st_r16: p1.if_r16,
      if_1st_corridor: p1.r16_corridor,
      if_2nd: p2.if_r32,
      if_2nd_r16: p2.if_r16,
      if_2nd_corridor: p2.r16_corridor,
      if_3rd: p3.if_r32,
      if_3rd_r16: p3.if_r16,
    };
  };

  const buildScenarioLines = () => {
    const md = match.matchday || 1;
    const lines = [
      `${match.home.name} 若取胜：积分 ${homeRow.pts + 3}，${g} 组排名有望上升；32 强/16 强槽位随最终名次（第 1/第 2）切换，见下方路径。`,
      `${match.away.name} 若取胜：积分 ${awayRow.pts + 3}，客场抢分将改变 ${g} 组格局与淘汰赛半区。`,
      `平局：双方各 +1 分；在 ${linkedNotes.join(' · ') || '绑定组'} 背景下，名次差 1 位可能改变 32 强对手。`,
    ];
    if (g === 'C' && (match.home.name === 'Brazil' || match.away.name === 'Brazil')) {
      lines.push(
        '巴西路径提示：C 组第 1 → 32强 M76 打 F 组第 2（荷兰若 F 组头名则 32 强避荷兰）→ 16强 M91 进 E/I 次席走廊；'
        + 'C 组第 2 → 32强 M75 极可能碰 F 组第 1（荷兰）→ 16强 M90 进 A/B 次席走廊。末轮才存在「选半区」博弈，本轮须先抢分。',
      );
    }
    if (md >= 2 && bracket.tradeoff) {
      lines.push('头名/次席博弈：' + bracket.tradeoff);
    }
    return lines;
  };

  return {
    group: g,
    label: snap?.label || `${g}组 · 第 ${match.matchday || 1} 轮`,
    matchday: match.matchday || 1,
    standings: sorted,
    home: teamScenario(match.home.name, homeRow),
    away: teamScenario(match.away.name, awayRow),
    cross_group_notes: crossNotes,
    path_tradeoff: bracket.tradeoff || null,
    manipulation_risk: risk,
    knockout_note: '48 队制：12 组各前 2（24 支）+ 12 个小组第 3 中成绩最好的 8 支 = 32 强起淘汰赛（非以往 32 队直接 16 强）；第 3 名横向比积分→净胜球→进球。C↔F 等绑定组末轮或算分选半区。',
    scenarios: buildScenarioLines(),
  };
}

/** 小组积分形势一句话（供综合推演关键因素） */
function buildGroupStandingsNote(match, gc) {
  if (!gc?.home || !gc?.away) return null;
  const g = gc.group;
  const h = gc.home;
  const a = gc.away;
  const table = gc.standings || [];
  const leaders = table.filter(r => r.pts > Math.max(h.pts, a.pts));
  let stakes = '';

  if (g === 'A' && h.pts === 0 && a.pts === 0) {
    stakes = '双方首轮皆负、同积 0 分垫底；墨西哥与韩国各 3 分领跑，本场胜者仍须末轮抢分';
  } else if (g === 'A' && h.pts === 3 && a.pts === 3) {
    const hGd = (table.find(r => r.team === match.home.name)?.gf || 0)
      - (table.find(r => r.team === match.home.name)?.ga || 0);
    const aGd = (table.find(r => r.team === match.away.name)?.gf || 0)
      - (table.find(r => r.team === match.away.name)?.ga || 0);
    stakes = `A 组榜首直接对话（净胜球 ${match.home.name} ${hGd >= 0 ? '+' : ''}${hGd} vs ${match.away.name} ${aGd >= 0 ? '+' : ''}${aGd}）；胜者掌握出线主动权`;
  } else if (g === 'B' && table.length && table.every(r => r.pts === table[0].pts)) {
    stakes = `B 组四队同积 ${table[0].pts} 分，本轮赛果将显著重排积分榜`;
  } else if (g === 'C' && (match.home.name === 'Brazil' || match.away.name === 'Brazil')) {
    stakes = '巴西仅积 ' + (match.home.name === 'Brazil' ? h.pts : a.pts)
      + ' 分须先抢分；C↔F 绑定：头名 32强避 F 组头名（荷兰若领跑 F 组）、次席 32强或直碰荷兰，16 强半区相反';
  } else if (leaders.length) {
    stakes = `组内 ${leaders.map(r => r.team + ' ' + r.pts + '分').join('、')} 领先；直接对话权重极高`;
  }

  const base = `${match.home.name} 暂列 ${g} 组第 ${h.rank}（${h.pts} 分 · 已赛 ${h.played} 场）`
    + ` vs ${match.away.name} 第 ${a.rank}（${a.pts} 分 · 已赛 ${a.played} 场）`;
  return stakes ? base + '；' + stakes : base;
}

/**
 * 综合推演关键因素 — 积分榜 + 气候 + 战术要点
 * @param {object} match
 * @param {object} [groupContext]
 * @param {string} [baseKeyFactor] — 剥离校准追加后的原始 key_factor
 */
function buildInsightKeyFactors(match, groupContext, baseKeyFactor) {
  const factors = [];
  const standingsNote = buildGroupStandingsNote(match, groupContext);
  if (standingsNote) {
    factors.push({ icon: '📊', label: '小组积分', text: standingsNote });
  }

  const w = match.weather;
  if (w) {
    const wx = weatherXgModifier(w);
    const bits = [
      w.condition_cn,
      w.temp != null ? w.temp + '°C' : null,
      w.humidity != null ? '湿度 ' + w.humidity + '%' : null,
      w.rain_chance != null ? '降雨概率 ' + w.rain_chance + '%' : null,
      w.altitude_m > 1000 && !(w.condition_cn || '').includes('海拔')
        ? '海拔 ' + w.altitude_m + 'm' : null,
      w.wind || null,
    ].filter(Boolean);
    const factorBits = (w.weather_factors || []).map(f => f.label).slice(0, 2);
    factors.push({
      icon: '🌤️',
      label: '赛场气候',
      text: bits.join(' · ') + '；' + (w.impact_summary || wx.note)
        + (factorBits.length ? '（' + factorBits.join(' · ') + '）' : ''),
    });
  }

  const tactical = (baseKeyFactor || match.prediction?.key_factor || '').trim();
  if (tactical) {
    factors.push({ icon: '⚽', label: '战术与阵容', text: tactical });
  }

  return factors;
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
  classifyTotalsOutlook,
  probTotalsOver,
  probTotalsAtLeast,
  formatMarketGoalsInteger,
  classifySpreadOutlook,
  buildCustomerReading,
  buildGoalTimingDisplay,
  applyDepthToPrediction,
  buildGroupContext,
  buildGroupStandingsNote,
  buildInsightKeyFactors,
  KNOCKOUT_PATHS,
  KNOCKOUT_BRACKET,
  GROUP_TEAMS,
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = exportsObj;
}
if (typeof window !== 'undefined') {
  window.PREDICTION_SIGNALS = exportsObj;
}
