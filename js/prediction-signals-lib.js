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

/**
 * 让球盘口文案 — market_tier 正=主让、负=客让；返回热门 -X / 受让 +X
 */
function formatSpreadHandicapLines(marketTier, homeName, awayName) {
  const t = Number(marketTier) || 0;
  const abs = Math.round(Math.abs(t) * 100) / 100;
  if (abs < 0.01) {
    return {
      favSide: null,
      favName: null,
      dogName: null,
      favHandicapCn: null,
      dogHandicapCn: null,
      lineAbs: 0,
    };
  }
  const favSide = t > 0 ? 'home' : 'away';
  const favName = favSide === 'home' ? homeName : awayName;
  const dogName = favSide === 'home' ? awayName : homeName;
  const lineStr = String(abs).replace(/\.0+$/, '').replace(/(\.\d)0+$/, '$1');
  return {
    favSide,
    favName,
    dogName,
    favHandicapCn: favName + ' -' + lineStr,
    dogHandicapCn: dogName + ' +' + lineStr,
    lineAbs: abs,
  };
}

function formatTierLabel(marketTier, homeName, awayName) {
  const hk = formatSpreadHandicapLines(marketTier, homeName, awayName);
  if (!hk.favHandicapCn) return '势均力敌';
  return hk.favHandicapCn + ' · ' + hk.dogHandicapCn;
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
    ? '模型自估总进球约 ' + (cover.fair_totals_line ?? estimateFairTotalsLine(xgHome, xgAway).fair_line)
    : null;

  let readout = '';
  if (stateLabel) {
    readout = stateLabel + '：仍取胜约 ' + pct(favWin) + '%。';
    readout += ' 对着' + formatPublicTotalsLine(line)
      + '，模型超线概率约 ' + totalsHighPct + '%。';
    if (th.fullMin >= 3 && stateLabel) {
      readout += ' 常见收尾：2-0 约 ' + pct(favFinal20) + '%（部分达标，非全达标）；'
        + ' 3-0+ 约 ' + pct(favFinal30Plus) + '%（对着 ' + th.fullLabel + ' 全达标）。';
    } else if (pct(favMargin2TotalLe2) >= 10) {
      readout += ' 常见 2-0 收尾（相对' + formatPublicTotalsLine(line) + '仍偏小比分）。';
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
    readout += '对着' + formatPublicTotalsLine(line)
      + '，模型超线概率约 ' + totalsHighPct + '%。';
    if (pct(favMargin2TotalLe2) >= 12) {
      readout += ' 2-0 类：净胜扩大但总进球仍可能低于' + formatPublicTotalsLine(line) + '。';
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
    totals_line_cn: formatPublicTotalsLine(line),
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

const GOAL_EFF_TAGS = {
  high: { key: 'high_scoring', label: '大比分', color: '#D95F6A', bg: 'rgba(217,95,106,0.12)' },
  low: { key: 'low_scoring', label: '小比分', color: '#7BB8D4', bg: 'rgba(123,184,212,0.1)' },
  three: { key: 'three_goals', label: '3球', color: '#C8A96E', bg: 'rgba(200,169,110,0.1)' },
  fav_burst: { key: 'fav_burst', label: '热门爆发', color: '#FF6B35', bg: 'rgba(255,107,53,0.1)' },
  dog_bloom: { key: 'dog_bloom', label: '弱队开花', color: '#E8B84B', bg: 'rgba(232,184,75,0.12)' },
  open: { key: 'open_game', label: '对攻兑现', color: '#9B7EDE', bg: 'rgba(155,126,222,0.1)' },
  dog_quiet: { key: 'dog_quiet', label: '弱队哑火', color: '#6B8FA3', bg: 'rgba(107,143,163,0.12)' },
  fav_quiet: { key: 'fav_quiet', label: '热门哑火', color: '#6B8FA3', bg: 'rgba(107,143,163,0.12)' },
  iron: { key: 'iron', label: '铁局', color: '#888899', bg: 'rgba(136,136,153,0.1)' },
  even_xg: { key: 'even_xg', label: 'xG接近', color: '#5BBF8A', bg: 'rgba(91,191,138,0.08)' },
  lean_high: { key: 'lean_high', label: '大比分预测', color: '#D95F6A', bg: 'rgba(217,95,106,0.1)' },
  lean_low: { key: 'lean_low', label: '小比分预测', color: '#7BB8D4', bg: 'rgba(123,184,212,0.1)' },
  prevention_high: {
    key: 'prevention_high',
    label: '预防大比分',
    color: '#E8A54B',
    bg: 'rgba(232,165,75,0.12)',
  },
  dog_threat: { key: 'dog_threat', label: '弱队有球', color: '#E8B84B', bg: 'rgba(232,184,75,0.1)' },
  dog_weak: { key: 'dog_weak', label: '弱队难进球', color: '#6B8FA3', bg: 'rgba(107,143,163,0.1)' },
  fav_dominant: { key: 'fav_dominant', label: 'xG碾压', color: '#FF6B35', bg: 'rgba(255,107,53,0.08)' },
};

function splitGoalEffSides(match) {
  const p = match?.prediction;
  if (!p || p.xg_home == null || p.xg_away == null) return null;
  const xgPack = resolveGoalPathXg(match);
  if (!xgPack) return null;
  const { xgH, xgA, baselineH, baselineA, adjustedH, adjustedA, xg_note: xgNote } = xgPack;
  const xgT = Math.round((xgH + xgA) * 100) / 100;
  const gap = Math.round(Math.abs(xgH - xgA) * 100) / 100;
  const favSide = xgH >= xgA ? 'home' : 'away';
  const homeName = match.home?.name || '主队';
  const awayName = match.away?.name || '客队';
  return {
    xgH,
    xgA,
    xgT,
    gap,
    baselineH,
    baselineA,
    adjustedH,
    adjustedA,
    xgNote,
    favName: favSide === 'home' ? homeName : awayName,
    dogName: favSide === 'home' ? awayName : homeName,
    favXg: Math.max(xgH, xgA),
    dogXg: Math.min(xgH, xgA),
  };
}

/**
 * 进球路径 — 始终用 prediction 基准 xG（赛果反推规则的训练口径）
 * 与进球氛围（调整后 xG）刻意分离；note 中并列展示调整后供对照。
 */
function resolveGoalPathXg(match) {
  const p = match?.prediction;
  if (!p || p.xg_home == null || p.xg_away == null) return null;
  const baselineH = p.xg_home;
  const baselineA = p.xg_away;
  let adjustedH = baselineH;
  let adjustedA = baselineA;
  const dcCtx = match.depth_calibration?.display_summary?.xg_context
    || match.display_summary?.xg_context;
  if (dcCtx?.adjusted_home != null && dcCtx?.adjusted_away != null) {
    adjustedH = dcCtx.adjusted_home;
    adjustedA = dcCtx.adjusted_away;
  } else {
    const ctx = buildMatchContextAdjustments(match, baselineH, baselineA);
    adjustedH = ctx.xg_home;
    adjustedA = ctx.xg_away;
  }
  const sameAdj = adjustedH === baselineH && adjustedA === baselineA;
  const xg_note = sameAdj
    ? '结构推演用基准 xG ' + baselineH + '–' + baselineA
    : '结构推演用基准 xG ' + baselineH + '–' + baselineA
      + '（进球氛围用调整后 ' + adjustedH + '–' + adjustedA + '）';
  return {
    xgH: baselineH,
    xgA: baselineA,
    baselineH,
    baselineA,
    adjustedH,
    adjustedA,
    xg_note,
  };
}

/** 路径大/小标签 — 回测校准：≥60% / ≤40% 才出具（32 场样本约 100% 命中） */
const PATH_LEAN_HIGH_PCT = 60;
const PATH_LEAN_LOW_PCT = 40;

function classifyGoalPathLean(probMeetGuess, prob2Minus, prob4Plus, pathScores) {
  const meet = Number(probMeetGuess) || 50;
  const p2 = Number(prob2Minus) || 50;
  const p4 = Number(prob4Plus) || 0;
  const openW = (pathScores.fav_burst || 0) + (pathScores.dog_bloom || 0) + (pathScores.open || 0);
  const lowW = pathScores.low || 0;

  if (meet >= PATH_LEAN_HIGH_PCT) {
    return { lean: 'high', lean_cn: '大比分猜测', lean_confidence: meet };
  }
  if (meet <= PATH_LEAN_LOW_PCT) {
    return { lean: 'low', lean_cn: '小比分猜测', lean_confidence: Math.round((100 - meet) * 10) / 10 };
  }
  if (p2 >= 55 && p4 >= 22) {
    return { lean: 'split', lean_cn: '大/小比分分裂', lean_confidence: null };
  }
  if (openW >= 35 && lowW >= 30) {
    return { lean: 'split', lean_cn: '大/小比分分裂', lean_confidence: null };
  }
  return { lean: 'neutral', lean_cn: '中性', lean_confidence: null };
}

function getAtmosphereContextFromMatch(match) {
  const tv = match.depth_calibration?.display_summary?.totals_view
    || match.depth_calibration?.totals_view;
  const outlook = tv?.totals_outlook;
  const level = outlook?.level || 'neutral';
  return {
    outlook,
    expected_total: tv?.expected_total,
    dull: outlook?.lean_side === 'dull' || level.includes('low'),
    exciting: outlook?.lean_side === 'exciting' || level.includes('high'),
    neutral: level === 'neutral' || outlook?.lean_side === 'neutral',
    headline: outlook?.pill_cn || outlook?.headline_cn || outlook?.label_cn,
    over_pct: outlook?.over_pct,
  };
}

function hasPreventionStructure(pathType, tagKeys, prob4Plus, pathScores) {
  const openW = (pathScores.fav_burst || 0) + (pathScores.dog_bloom || 0) + (pathScores.open || 0);
  const lowW = pathScores.low || 0;
  if (pathType === 'dog_bloom' || pathType === 'open') return true;
  if (tagKeys.includes('dog_threat') || tagKeys.includes('dog_bloom')) return true;
  if (prob4Plus >= 22 && pathType !== 'low') return true;
  if (openW >= lowW + 20 && pathType !== 'low') return true;
  return false;
}

function buildLiveWatchItems(favName, dogName, pathType, tagKeys) {
  const items = [
    {
      key: 'dog_goal',
      label: dogName + '进球',
      detail: '弱队破门 → 预防大比分抬升；对照弱队开花/对攻路径',
      severity: 'high',
    },
    {
      key: 'dog_eff',
      label: '弱队效率≥1.0',
      detail: '弱队射门兑现超预期 → 上调大比分留意（样本：效率≥1.2 易凑 3 球+）',
      severity: 'high',
    },
    {
      key: 'fav_only',
      label: '仅' + favName + '进球',
      detail: '热门单榜领先、弱队仍无球 → 仍按进球氛围小比分，不必因路径升级',
      severity: 'calm',
    },
  ];
  if (pathType === 'dog_bloom' || tagKeys.includes('dog_bloom')) {
    items.push({
      key: 'bloom_score',
      label: '弱队开花比分',
      detail: '留意 2-2、1-2 等弱队 contribution 抬高总进球',
      severity: 'mid',
    });
  }
  if (pathType === 'fav_burst') {
    items.push({
      key: 'fav_burst_live',
      label: '热门连击',
      detail: '2-0、3-0 且弱队无球 → 总球仍可偏小比分',
      severity: 'calm',
    });
  }
  return items;
}

/**
 * 路径 lean 展示：prediction（与氛围同向预测）vs prevention（氛围偏闷时的岔路预警）
 */
function resolveGoalPathLeanPresentation(opts) {
  const {
    baseLean, atmosphere, pathType, pathLabel, prob4Plus, pathScores, tagKeys,
    favName, dogName,
  } = opts;
  const atm = atmosphere || {};
  const base = baseLean.lean;
  let lean = base;
  let lean_cn = baseLean.lean_cn;
  let lean_mode = 'neutral';
  let prevention_reason_cn = null;
  let atmosphere_link_cn = null;
  let modules_aligned = false;
  let live_watch = [];

  const structRisk = hasPreventionStructure(pathType, tagKeys, prob4Plus, pathScores);

  if (base === 'high') {
    if (atm.exciting) {
      lean_mode = 'prediction';
      lean_cn = '大比分预测';
      modules_aligned = true;
      atmosphere_link_cn = '与进球氛围同向——可参考权重提高';
    } else {
      lean = 'prevention_high';
      lean_mode = 'prevention';
      lean_cn = '预防大比分';
      prevention_reason_cn = '基准 xG 结构偏多球，但进球氛围偏闷'
        + (atm.expected_total != null ? '（预测约 ' + atm.expected_total + '）' : '')
        + '——作岔路预警，非默认剧本';
    }
  } else if (base === 'low') {
    lean_mode = 'prediction';
    lean_cn = '小比分预测';
    if (atm.dull) {
      modules_aligned = true;
      atmosphere_link_cn = '与进球氛围同向——可参考权重提高';
    } else if (atm.exciting) {
      atmosphere_link_cn = '路径偏小比分、氛围偏精彩——以氛围为主，结构作辅助';
    }
  } else if (base === 'split') {
    lean_mode = 'neutral';
    lean_cn = '大/小比分分裂';
  } else if (atm.dull && structRisk) {
    lean = 'prevention_high';
    lean_mode = 'prevention';
    lean_cn = '预防大比分';
    prevention_reason_cn = '进球氛围偏闷'
      + (atm.expected_total != null ? '（预测约 ' + atm.expected_total + '）' : '')
      + '，但「' + pathLabel + '」结构需防弱队开花抬高总进球';
  } else if (pathType === 'fav_burst') {
    lean_mode = 'prediction';
    lean_cn = '热门爆发路径';
    atmosphere_link_cn = atm.dull
      ? '结构偏多球，但进球氛围偏闷——热门效率仍可能爆表（尾部风险）'
      : '热门效率路径与结构一致';
  }

  if (lean_mode === 'prevention' || (atm.dull && structRisk && base === 'neutral')) {
    live_watch = buildLiveWatchItems(favName, dogName, pathType, tagKeys);
  }

  return {
    lean,
    lean_cn,
    lean_mode,
    lean_confidence: baseLean.lean_confidence,
    prevention_reason_cn,
    atmosphere_link_cn,
    modules_aligned,
    live_watch,
  };
}

function scoreGoalPathPreview(favXg, dogXg, gap, xgT) {
  const s = { fav_burst: 10, dog_bloom: 10, open: 8, low: 10 };
  const favCrush = isFavCrushScenario(favXg, dogXg, gap);

  if (dogXg < 0.65 && !favCrush) s.low += 34;
  if (dogXg >= 0.75 && dogXg <= 1.08 && gap >= 0.45 && gap <= 0.65) s.fav_burst += 30;
  if (dogXg >= 0.72 && gap >= 0.55 && gap <= 0.95 && !favCrush) s.dog_bloom += 28;
  if (dogXg >= 0.82 && favXg >= 1.2 && gap >= 0.5 && gap <= 0.95) s.open += 26;
  if (favCrush) {
    s.fav_burst += 28;
    s.low -= 14;
    s.dog_bloom -= 6;
    s.open += 4;
  } else if (gap >= 1.0) {
    s.low += 30;
    s.dog_bloom -= 6;
    s.open -= 4;
  }
  if (gap < 0.4) s.low += 26;
  if (favXg >= 2.0 && gap >= 1.3 && !favCrush) s.low += 24;
  if (xgT >= 2.65) { s.open += 10; s.dog_bloom += 6; }
  if (xgT <= 2.25 && dogXg < 0.82 && !favCrush) s.low += 18;
  if (xgT <= 2.25 && !favCrush) s.low += 10;
  if (favXg < 1.55 && gap >= 0.5 && gap <= 0.75) {
    s.low += 12;
    s.fav_burst -= 6;
  }
  for (const k of Object.keys(s)) s[k] = Math.max(1, s[k]);
  return s;
}

const GOAL_PATH_PREVIEW_META = {
  fav_burst: {
    label: '热门爆发',
    example: '2-0 / 3-0 / 4-1',
    note: '样本：热门效率≥1.5 时高比分常见；弱队 xG≈1.0 但只进 1 球时也常见此路径。',
  },
  dog_bloom: {
    label: '弱队开花',
    example: '2-2 / 1-3 / 3-1',
    note: '样本：弱队效率≥1.2 时 71% 总进球≥3；弱队 xG≥0.8 且差值 0.5–0.9 需防此路径。',
  },
  open: {
    label: '对攻/open',
    example: '2-2 / 4-2 / 3-2',
    note: '双方 xG 均有进球预期，任一方效率达标即可凑出 4 球。',
  },
  low: {
    label: '铁局/小比分',
    example: '1-0 / 1-1 / 0-0',
    note: '样本：弱队效率<0.6 时总进球难破 3；xG 差≥1.0 时小比分更常见。',
  },
};

/** 赛前进球路径预估 — 基准 xG + 已赛样本结构规则；大/小标签仅强信号 */
function buildGoalEfficiencyPreview(match) {
  const sides = splitGoalEffSides(match);
  if (!sides) return null;
  const {
    xgH, xgA, xgT, gap, favName, dogName, favXg, dogXg, baselineH, baselineA, xgNote,
  } = sides;

  const totalsLine = match.depth_calibration?.totals_line ?? 2.5;
  const guessN = formatMarketGoalsInteger(totalsLine);
  const probOverLine = probTotalsOver(xgH, xgA, totalsLine);
  const probMeetGuess = probTotalsAtLeast(xgH, xgA, guessN);
  const prob4Plus = probTotalsAtLeast(xgH, xgA, 4);
  const prob2Minus = Math.round((100 - probTotalsAtLeast(xgH, xgA, 3)) * 10) / 10;

  const pathScores = scoreGoalPathPreview(favXg, dogXg, gap, xgT);
  const pathTotal = Object.values(pathScores).reduce((a, b) => a + b, 0);
  const scenarios = Object.keys(GOAL_PATH_PREVIEW_META).map(key => ({
    key,
    label: GOAL_PATH_PREVIEW_META[key].label,
    example: GOAL_PATH_PREVIEW_META[key].example,
    note: GOAL_PATH_PREVIEW_META[key].note,
    prob_pct: Math.round((pathScores[key] / pathTotal) * 100),
  })).sort((a, b) => b.prob_pct - a.prob_pct);

  const primary = scenarios[0];
  const pathType = primary.key;
  const pathLabel = primary.label;

  const leanPack = classifyGoalPathLean(probMeetGuess, prob2Minus, prob4Plus, pathScores);
  const atmosphere = getAtmosphereContextFromMatch(match);

  const tags = [];
  if (dogXg >= 0.78 && gap >= 0.5 && gap < 1.0) tags.push(GOAL_EFF_TAGS.dog_threat);
  if (dogXg < 0.65) tags.push(GOAL_EFF_TAGS.dog_weak);
  if (gap >= 1.0) tags.push(GOAL_EFF_TAGS.fav_dominant);
  if (gap < 0.4) tags.push(GOAL_EFF_TAGS.even_xg);
  const primaryTag = GOAL_EFF_TAGS[primary.key === 'low' ? 'low' : primary.key];
  if (primaryTag && !tags.some(t => t.key === primaryTag.key)) tags.push(primaryTag);
  const tagKeys = tags.map(t => t.key);

  const pres = resolveGoalPathLeanPresentation({
    baseLean: leanPack,
    atmosphere,
    pathType,
    pathLabel,
    prob4Plus,
    pathScores,
    tagKeys,
    favName,
    dogName,
  });
  const lean = pres.lean;
  const leanCn = pres.lean_cn;

  if (pres.lean_mode === 'prediction') {
    if (lean === 'high') tags.unshift(GOAL_EFF_TAGS.lean_high);
    else if (lean === 'low') tags.unshift(GOAL_EFF_TAGS.lean_low);
  } else if (pres.lean_mode === 'prevention') {
    tags.unshift(GOAL_EFF_TAGS.prevention_high);
  }

  const watchNotes = [];
  if (dogXg >= 0.75) watchNotes.push('弱队上半场效率≥1.0 → 关注弱队开花路径');
  if (dogXg < 0.65) watchNotes.push('弱队 xG 偏低——哑火则难破 3 球');
  if (gap >= 1.0) watchNotes.push('xG 差≥1.0——样本多为小比分');
  if (favXg >= 1.5 && dogXg >= 0.9 && gap <= 0.65) {
    watchNotes.push('结构类似 m12/m26——热门爆发路径需防 4+ 球');
  }

  let patternNote = primary.note;
  if (match.lineup?.confirmed) patternNote += ' 已纳入官方首发变阵对 xG 的修正。';

  let leanNote = null;
  if (pres.lean_mode === 'prevention') {
    leanNote = pres.prevention_reason_cn;
  } else if (lean === 'neutral' && pres.live_watch?.length) {
    leanNote = '总进球大/小标签未达强信号（基准 xG · 需≥' + PATH_LEAN_HIGH_PCT + '% 或 ≤' + PATH_LEAN_LOW_PCT
      + '%）；下方为预防性观察项，默认仍以进球氛围为准。';
  } else if (lean === 'neutral') {
    leanNote = '总进球大/小标签未达强信号（基准 xG · 需≥' + PATH_LEAN_HIGH_PCT + '% 或 ≤' + PATH_LEAN_LOW_PCT
      + '%），以下以进球故事线为主。';
  } else if (lean === 'split') {
    leanNote = '大/小概率接近或路径互斥——不作单边大/小标签。';
  } else if (pres.atmosphere_link_cn) {
    leanNote = pres.atmosphere_link_cn;
  }

  const probLineSame = Math.abs(probMeetGuess - probOverLine) < 0.05
    && Number(totalsLine) % 1 === 0.5;
  const probSummaryCn = probLineSame
    ? '超 ' + totalsLine + ' 约 ' + probOverLine + '% · ≤2球 ' + prob2Minus + '%'
    : '至少 ' + guessN + ' 球约 ' + probMeetGuess + '% · 超 ' + totalsLine + ' 约 ' + probOverLine
      + '% · ≤2球 ' + prob2Minus + '%';

  const summary_cn =
    '【路径·基准 xG】合计 ' + xgT + ' · ' + favName + ' ' + favXg + ' / ' + dogName + ' ' + dogXg
    + ' → 主路径「' + pathLabel + '」约 ' + primary.prob_pct + '%'
    + (pres.lean_mode !== 'neutral' ? ' · ' + leanCn : '')
    + '。 ' + probSummaryCn + '。'
    + patternNote;

  return {
    mode: 'preview',
    xg_total: xgT,
    xg_gap: gap,
    xg_home: xgH,
    xg_away: xgA,
    xg_baseline_home: baselineH,
    xg_baseline_away: baselineA,
    xg_note: xgNote,
    lean_note: leanNote,
    fav_name: favName,
    dog_name: dogName,
    fav_xg: favXg,
    dog_xg: dogXg,
    path_type: pathType,
    path_label: pathLabel,
    lean,
    lean_cn: leanCn,
    lean_mode: pres.lean_mode,
    lean_confidence: pres.lean_confidence,
    prevention_reason_cn: pres.prevention_reason_cn,
    atmosphere_link_cn: pres.atmosphere_link_cn,
    modules_aligned: pres.modules_aligned,
    live_watch: pres.live_watch,
    prob_over_line: probOverLine,
    prob_meet_guess: probMeetGuess,
    guess_n: guessN,
    prob_4_plus: prob4Plus,
    prob_2_or_less: prob2Minus,
    totals_line: totalsLine,
    scenarios,
    tags,
    watch_notes: watchNotes,
    pattern_note: patternNote,
    summary_cn,
    in_mid_band: xgT >= 2.0 && xgT <= 3.0,
    sample_note: '结构规则来自已赛 22 场（xG 2.0–3.0 · 排除 m27）· 大/小标签用基准 xG 泊松 ≥'
      + PATH_LEAN_HIGH_PCT + '%/≤' + PATH_LEAN_LOW_PCT + '%',
  };
}

/**
 * 赛后进球效率复盘：热门/弱队 xG 兑现 + 路径标签（大球/小球 · 爆发/开花/哑火）
 * 写入 depth_calibration.goal_efficiency（赛果页展示）
 */
function buildGoalEfficiencyReview(match) {
  const ar = match?.actualResult;
  if (!ar || ar.home_score == null || ar.away_score == null) return null;
  const sides = splitGoalEffSides(match);
  if (!sides) return null;

  const { xgH, xgA, xgT, gap, favName, dogName, favXg, dogXg } = sides;
  const hs = ar.home_score;
  const as = ar.away_score;
  const goals = hs + as;
  const diff = Math.round((goals - xgT) * 10) / 10;
  const favSide = xgH >= xgA ? 'home' : 'away';
  const favGoals = favSide === 'home' ? hs : as;
  const dogGoals = favSide === 'home' ? as : hs;
  const favEff = Math.round((favGoals / favXg) * 100) / 100;
  const dogEff = Math.round((dogGoals / dogXg) * 100) / 100;

  const TAG = GOAL_EFF_TAGS;

  const tags = [];
  if (goals >= 4) tags.push(TAG.high);
  else if (goals === 3) tags.push(TAG.three);
  else tags.push(TAG.low);

  if (goals === 0) tags.push(TAG.iron);
  if (gap < 0.4) tags.push(TAG.even_xg);
  if (dogEff >= 1.2) tags.push(TAG.dog_bloom);
  if (dogEff < 0.6) tags.push(TAG.dog_quiet);
  if (favEff < 1.0) tags.push(TAG.fav_quiet);

  let pathType = 'mixed';
  let pathLabel = '混合路径';

  if (favEff >= 1.5 && dogEff < 1.2) {
    pathType = 'fav_burst';
    pathLabel = '热门爆发';
    tags.push(TAG.fav_burst);
  } else if (dogEff >= 1.2 && favEff >= 1.2) {
    pathType = 'open_game';
    pathLabel = '对攻兑现';
    tags.push(TAG.open);
  } else if (dogEff >= 1.2) {
    pathType = 'dog_bloom';
    pathLabel = '弱队开花';
  }

  const uniqTags = [];
  const seen = new Set();
  for (const t of tags) {
    if (!seen.has(t.key)) {
      seen.add(t.key);
      uniqTags.push(t);
    }
  }

  let patternNote = '';
  if (favEff >= 1.5 && goals >= 4) {
    patternNote = '热门效率≥1.5 且总进球≥4——样本内高比分硬路径（热门打穿）。';
  } else if (dogEff >= 1.2 && goals >= 4) {
    patternNote = '弱队超额兑现（效率≥1.2）——弱队进球超预期，易凑出 3 球以上。';
  } else if (dogEff < 0.6 && favEff < 1.0) {
    patternNote = '双方效率均低——总进球难起，铁局/小比分概率高。';
  } else if (dogEff < 0.6) {
    patternNote = '弱队哑火（效率<0.6）——样本内总进球难破 3。';
  } else if (favEff < 1.0 && goals <= 2) {
    patternNote = '热门未达 xG 预期——小比分收场常见。';
  } else if (goals === 3) {
    patternNote = '总进球 3 个——介于大/小之间，对照 xG 总偏差 ' + (diff >= 0 ? '+' : '') + diff + '。';
  } else {
    patternNote = '对照赛前 xG 总 ' + xgT + '，实际 ' + goals + ' 球（' + (diff >= 0 ? '+' : '') + diff + '）。';
  }

  const rc = ar.red_card_context;
  let redCardNote = '';
  if (rc) {
    if (rc.count >= 2 && rc.team_role === 'trailing') {
      redCardNote =
        '【红牌】弱队双红且已大败——结构性偏离，不宜纳入中间带样本（参照 m27）。';
      pathType = 'red_card_outlier';
      pathLabel = '红牌极端局';
    } else if (rc.count === 1 && rc.team_role === 'leading') {
      redCardNote =
        '【红牌】领先方单红、10 人守满下半场——总球≤2 常见，弱队效率可<1.2 仍小胜（参照 m31）。';
      if (goals <= 2 && pathType === 'mixed') {
        pathType = 'low';
        pathLabel = '铁局/小比分';
      }
    } else if (rc.count === 1 && rc.team_role === 'trailing') {
      redCardNote =
        '【红牌】落后方单红——人数劣势叠比分压力，热门穿盘概率上升（样本待补）。';
    }
    if (redCardNote) patternNote = (patternNote + ' ' + redCardNote).trim();
  }

  const summary_cn =
    '赛前 xG 总 ' + xgT + '（差 ' + gap + '）· 热门 ' + favName + ' ' + favXg + '→' + favGoals
    + '（效率 ' + favEff + '）· 弱队 ' + dogName + ' ' + dogXg + '→' + dogGoals
    + '（效率 ' + dogEff + '）→ ' + pathLabel + '。' + patternNote;

  const out = {
    xg_total: xgT,
    xg_gap: gap,
    xg_home: xgH,
    xg_away: xgA,
    fav_name: favName,
    dog_name: dogName,
    fav_xg: favXg,
    dog_xg: dogXg,
    fav_goals: favGoals,
    dog_goals: dogGoals,
    fav_eff: favEff,
    dog_eff: dogEff,
    total_goals: goals,
    goal_diff_vs_xg: diff,
    path_type: pathType,
    path_label: pathLabel,
    tags: uniqTags,
    pattern_note: patternNote,
    summary_cn,
    in_mid_band: xgT >= 2.0 && xgT <= 3.0,
  };
  if (rc) out.red_card_context = rc;
  if (redCardNote) out.red_card_note = redCardNote;
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

function collectTacticalText(match) {
  let kf = match.prediction?.key_factor || '';
  kf = kf.replace(/【赛后复盘】[\s\S]*/g, '').trim();
  const ctx = match.pre_match_context;
  const coachH = match.coach_analysis?.home || ctx?.coach_analysis?.home;
  const coachA = match.coach_analysis?.away || ctx?.coach_analysis?.away;
  return [
    match.note?.replace(/ · 已结束.*$/, ''),
    kf,
    ctx?.key_factor_pre,
    coachH?.style_summary,
    coachH?.match_note,
    coachA?.style_summary,
    coachA?.match_note,
    match.upset_alert?.tactical || ctx?.upset_alert?.tactical,
    match.lineup?.diff?.home || ctx?.lineup_diff?.home,
    match.lineup?.diff?.away || ctx?.lineup_diff?.away,
    ...(match.home?.rumors || ctx?.home_rumors || []),
    ...(match.away?.rumors || ctx?.away_rumors || []),
  ].filter(Boolean).join(' ');
}

/** 热门碾压弱队（回测：gap≥1 时不应一律推「铁局」） */
function isFavCrushScenario(favXg, dogXg, gap) {
  return favXg >= 2.0 && dogXg <= 0.55 && gap >= 1.4;
}

function normalizeGroupTeamName(name) {
  if (name === 'IR Iran') return 'Iran';
  return name;
}

function findTableRow(table, teamName) {
  const norm = normalizeGroupTeamName(teamName);
  return (table || []).find(r => r.team === teamName || normalizeGroupTeamName(r.team) === norm);
}

function getGroupTableForMatch(match, groupSnapshots) {
  const g = match.group;
  if (match.group_context?.standings?.length === 4) return match.group_context.standings;
  const snap = (groupSnapshots || []).find(s => s.group === g);
  return snap?.table?.length ? snap.table : buildDefaultTable(g);
}

function otherGroupTeamsInMatch(group, homeName, awayName, table) {
  const h = normalizeGroupTeamName(homeName);
  const a = normalizeGroupTeamName(awayName);
  const fromTable = (table || []).map(r => r.team);
  const pool = fromTable.length === 4 ? fromTable : (GROUP_TEAMS[group] || []);
  return pool
    .filter(t => normalizeGroupTeamName(t) !== h && normalizeGroupTeamName(t) !== a)
    .map(t => findTableRow(table, t))
    .filter(Boolean);
}

/** 末轮另一场三种赛果下，双方是否均列前二 */
function bothQualifyWithDraw(homeRow, awayRow, otherRows) {
  if (!homeRow || !awayRow || otherRows.length !== 2) return false;
  const [o1, o2] = otherRows;
  const hFinal = { ...homeRow, pts: homeRow.pts + 1 };
  const aFinal = { ...awayRow, pts: awayRow.pts + 1 };
  return otherMatchOutcomes(o1, o2).every(oc => {
    const top2 = sortTable([
      hFinal,
      aFinal,
      { ...o1, pts: oc.o1Pts },
      { ...o2, pts: oc.o2Pts },
    ]).slice(0, 2).map(r => r.team);
    return teamNameInList(homeRow.team, top2) && teamNameInList(awayRow.team, top2);
  });
}

function otherMatchOutcomes(o1, o2) {
  return [
    { o1Pts: o1.pts + 3, o2Pts: o2.pts },
    { o1Pts: o1.pts + 1, o2Pts: o2.pts + 1 },
    { o1Pts: o1.pts, o2Pts: o2.pts + 3 },
  ];
}

function teamNameInList(teamName, list) {
  return (list || []).some(t => t === teamName || normalizeGroupTeamName(t) === normalizeGroupTeamName(teamName));
}

/** 本场取 ptsAfter 后，三种平行赛果下是否稳居前二 */
function teamStaysTop2WithPts(teamRow, partnerRow, otherRows, ptsAfter) {
  const [o1, o2] = otherRows;
  const self = { ...teamRow, pts: ptsAfter };
  return otherMatchOutcomes(o1, o2).every(oc => {
    const top2 = sortTable([
      self,
      { ...partnerRow },
      { ...o1, pts: oc.o1Pts },
      { ...o2, pts: oc.o2Pts },
    ]).slice(0, 2).map(r => r.team);
    return teamNameInList(teamRow.team, top2);
  });
}

/** 输球（本场 0 分）是否仍稳居前二 */
function teamAlreadyQualified(teamRow, partnerRow, otherRows) {
  return teamStaysTop2WithPts(teamRow, partnerRow, otherRows, teamRow.pts);
}

/** 某场赛果下谁列前二 */
function top2TeamsAfter(homeRow, homePts, awayRow, awayPts, o1, o2, oc) {
  return sortTable([
    { ...homeRow, pts: homePts },
    { ...awayRow, pts: awayPts },
    { ...o1, pts: oc.o1Pts },
    { ...o2, pts: oc.o2Pts },
  ]).slice(0, 2).map(r => r.team);
}

/**
 * 零和结构：有胜负时恰有一队晋级、一队淘汰（三种平行赛果下均成立）。
 * 即用户所述——「踢平都出线；分出胜负只有一个能活」。
 */
function isZeroSumDecisiveMatch(homeRow, awayRow, otherRows) {
  const [o1, o2] = otherRows;
  return otherMatchOutcomes(o1, o2).every(oc => {
    const ifHomeWins = top2TeamsAfter(homeRow, homeRow.pts + 3, awayRow, awayRow.pts, o1, o2, oc);
    const ifAwayWins = top2TeamsAfter(homeRow, homeRow.pts, awayRow, awayRow.pts + 3, o1, o2, oc);
    const homeWinZeroSum = teamNameInList(homeRow.team, ifHomeWins) && !teamNameInList(awayRow.team, ifHomeWins);
    const awayWinZeroSum = teamNameInList(awayRow.team, ifAwayWins) && !teamNameInList(homeRow.team, ifAwayWins);
    return homeWinZeroSum && awayWinZeroSum;
  });
}

function weakIsHomeTeam(weakRow, homeRow) {
  return teamNameInList(weakRow.team, [homeRow.team]);
}

function standingsAfter(homeRow, homePts, awayRow, awayPts, o1, o2, oc) {
  return sortTable([
    { ...homeRow, pts: homePts },
    { ...awayRow, pts: awayPts },
    { ...o1, pts: oc.o1Pts },
    { ...o2, pts: oc.o2Pts },
  ]);
}

/** 48 队制：该名次+积分是否已基本无缘淘汰赛（含争八第 3） */
function isKnockoutEliminated(rank, pts) {
  if (rank >= 4) return true;
  if (rank === 3 && pts <= 3) return true;
  return false;
}

function weakResultOutcomes(weakRow, strongRow, homeRow, awayRow, otherRows, weakAdd, strongAdd) {
  const [o1, o2] = otherRows;
  const weakHome = weakIsHomeTeam(weakRow, homeRow);
  return otherMatchOutcomes(o1, o2).map(oc => {
    const hPts = homeRow.pts + (weakHome ? weakAdd : strongAdd);
    const aPts = awayRow.pts + (weakHome ? strongAdd : weakAdd);
    const st = standingsAfter(homeRow, hPts, awayRow, aPts, o1, o2, oc);
    const rank = st.findIndex(r => teamNameInList(weakRow.team, [r.team])) + 1;
    const pts = weakRow.pts + weakAdd;
    return { rank, pts, eliminated: isKnockoutEliminated(rank, pts) };
  });
}

/**
 * 不对称「保平争第三」—— 48 队制争八场景：
 * 强队已锁前二；弱队输球必死、平局可争第 3 进争八池、赢球稳进。
 */
function detectAsymmetricThirdDrawSafety(homeRow, awayRow, otherRows, homeName, awayName, match) {
  const pairs = [
    { strong: homeRow, weak: awayRow, strongName: homeName, weakName: awayName },
    { strong: awayRow, weak: homeRow, strongName: awayName, weakName: homeName },
  ];
  const homeRating = match?.home?.rating || match?.home?.fifa_rank || 0;
  const awayRating = match?.away?.rating || match?.away?.fifa_rank || 0;

  for (const p of pairs) {
    const strongIn = teamAlreadyQualified(p.strong, p.weak, otherRows);
    const weakIn = teamAlreadyQualified(p.weak, p.strong, otherRows);
    if (!strongIn || weakIn) continue;

    const lossOuts = weakResultOutcomes(p.weak, p.strong, homeRow, awayRow, otherRows, 0, 3);
    const drawOuts = weakResultOutcomes(p.weak, p.strong, homeRow, awayRow, otherRows, 1, 1);
    const winOuts = weakResultOutcomes(p.weak, p.strong, homeRow, awayRow, otherRows, 3, 0);

    const weakDeadOnLoss = lossOuts.every(r => r.eliminated);
    const weakThirdLiveOnDraw = drawOuts.some(r => r.rank === 3 && !r.eliminated);
    const weakThroughOnWin = winOuts.every(r => !r.eliminated && (r.rank <= 2 || r.rank === 3));

    if (!weakDeadOnLoss || !weakThirdLiveOnDraw) continue;

    const weakIsHome = weakIsHomeTeam(p.weak, homeRow);
    const weakRating = weakIsHome ? homeRating : awayRating;
    const strongRating = weakIsHome ? awayRating : homeRating;
    const weakLikelyUnderdog = (strongRating && weakRating && weakRating < strongRating - 4)
      || STRONG_TEAMS.has(p.strongName) && !STRONG_TEAMS.has(p.weakName);

    return {
      strong_side: p.strongName,
      weak_side: p.weakName,
      weak_is_home: weakIsHome,
      weak_dead_on_loss: weakDeadOnLoss,
      weak_third_live_on_draw: weakThirdLiveOnDraw,
      weak_through_on_win: weakThroughOnWin,
      weak_likely_underdog: weakLikelyUnderdog,
      draw_pts_if_draw: p.weak.pts + 1,
    };
  }
  return null;
}

/**
 * 末轮出线博弈 — 逻辑剖析（区分「默契球」vs「已出线控分/争顺位」）
 * @returns {object|null}
 */
function analyzeQualificationLogic(match, groupSnapshots) {
  const md = match.matchday || 1;
  if (md < 3) return null;

  const homeName = match.home?.name;
  const awayName = match.away?.name;
  if (!homeName || !awayName) return null;

  const table = getGroupTableForMatch(match, groupSnapshots);
  const homeRow = findTableRow(table, homeName);
  const awayRow = findTableRow(table, awayName);
  const otherRows = otherGroupTeamsInMatch(match.group, homeName, awayName, table);
  if (!homeRow || !awayRow || otherRows.length !== 2) return null;

  const [o1, o2] = otherRows;
  const bothQualifyIfDraw = bothQualifyWithDraw(homeRow, awayRow, otherRows);
  const zeroSumDecisive = isZeroSumDecisiveMatch(homeRow, awayRow, otherRows);
  const homeAlreadyIn = teamAlreadyQualified(homeRow, awayRow, otherRows);
  const awayAlreadyIn = teamAlreadyQualified(awayRow, homeRow, otherRows);
  const bothAlreadyIn = homeAlreadyIn && awayAlreadyIn;
  const homeOutIfLoss = !teamStaysTop2WithPts(homeRow, awayRow, otherRows, homeRow.pts);
  const awayOutIfLoss = !teamStaysTop2WithPts(awayRow, homeRow, otherRows, awayRow.pts);
  const equalPts = homeRow.pts === awayRow.pts;
  const bracket = KNOCKOUT_BRACKET[match.group];

  const logicSteps = [];
  logicSteps.push(
    homeName + ' ' + homeRow.pts + ' 分 vs ' + awayName + ' ' + awayRow.pts + ' 分；'
    + '同组另一场 ' + o1.team + '（' + o1.pts + ' 分）vs ' + o2.team + '（' + o2.pts + ' 分）',
  );

  let scenarioType = null;

  /**
   * 默契球（结构型）—— 与用户定义对齐：
   * ① 握手 → 双方都能出线；② 有胜负 → 零和（仅胜者活、败者死）；③ 且赛前并非「输球也稳出线」。
   * 典型：双方各 3 分末轮对话。实力接近是心理层，不在此硬编码。
   * 反例：各 6 分已出线 —— 一方赢球时 loser 仍可能在前二，非零和。
   */
  const tacitDrawStructure = bothQualifyIfDraw && zeroSumDecisive && !bothAlreadyIn;

  /**
   * 已出线控分：输球亦锁前二 —— 胜负不影响「进不进淘汰赛」，只影响头/次席与 32 强/16 强对位。
   * 可能轮换练兵，但不存在「必须握手才能两人携手出线」的逻辑。
   */
  const pathControlStructure = bothAlreadyIn && bothQualifyIfDraw;

  const asymmetricThird = detectAsymmetricThirdDrawSafety(
    homeRow, awayRow, otherRows, homeName, awayName, match,
  );

  if (tacitDrawStructure) {
    scenarioType = 'tacit_draw';
    logicSteps.push('逻辑：若握手 → 双方均可出线（不论同组另一场结果）');
    logicSteps.push('逻辑：若有胜负 → 胜者晋级、败者淘汰（零和，只活一队）');
    logicSteps.push('逻辑：此结构下，实力接近的双方不愿冒险 —— 各取 1 分携手晋级是理性选择');
    if (equalPts && homeRow.pts <= 3) {
      logicSteps.push('典型：双方同积 ' + homeRow.pts + ' 分末轮对话 —— 「踢平都活、谁输谁死」');
    }
  } else if (asymmetricThird) {
    scenarioType = 'asymmetric_third';
    logicSteps.push('逻辑：' + asymmetricThird.strong_side + ' 已锁前二（输球亦稳出线）→ 本场胜负对其仅影响顺位/练兵');
    logicSteps.push('逻辑：' + asymmetricThird.weak_side + ' 仍不确定 —— 输球基本出局；握手可列第 3，仍有机会进「12 进 8」争八池（'
      + asymmetricThird.draw_pts_if_draw + ' 分）');
    logicSteps.push('逻辑：弱队若赢球当然稳进，但怕冒进输球 → 理性策略转为「保平争胜」，主动性偏保守');
    logicSteps.push('逻辑：强队无生死压力或接受低强度 → 与弱队「各取所需」的平局概率上升（不对称默契）');
  } else if (pathControlStructure) {
    scenarioType = 'path_control';
    logicSteps.push('逻辑：即使本场输球，' + homeName + '、' + awayName + ' 仍稳居前二 → 均已出线');
    logicSteps.push('逻辑：胜负不改变「进不进淘汰赛」，只决定头名/次席 → 32 强/16 强对位不同'
      + (bracket?.tradeoff ? '（' + bracket.tradeoff + '）' : ''));
    logicSteps.push('逻辑：可轮换、试战术，但≠默契球 —— 没有「必须平局才能两人携手出线」的必要；头名之争仍可能真刀真枪');
  } else if (bothAlreadyIn) {
    scenarioType = 'path_control';
    logicSteps.push('逻辑：双方均已锁定出线；本场影响排名与淘汰路径，非生死战');
  } else if (homeOutIfLoss || awayOutIfLoss) {
    scenarioType = 'must_fight';
    logicSteps.push('逻辑：至少一方输球可能出局 → 须全力抢分，无控分/默契空间');
  }

  return {
    home_pts: homeRow.pts,
    away_pts: awayRow.pts,
    home_already_qualified: homeAlreadyIn,
    away_already_qualified: awayAlreadyIn,
    both_already_qualified: bothAlreadyIn,
    both_qualify_if_draw: bothQualifyIfDraw,
    zero_sum_decisive: zeroSumDecisive,
    home_out_if_loss: homeOutIfLoss,
    away_out_if_loss: awayOutIfLoss,
    tacit_draw_structure: tacitDrawStructure,
    path_control_structure: pathControlStructure,
    asymmetric_third: asymmetricThird,
    scenario_type: scenarioType,
    logic_steps: logicSteps,
    path_tradeoff: bracket?.tradeoff || null,
  };
}

/**
 * 末轮出线博弈 → 推演修正（基于逻辑分类，非一律抬平局）
 */
function computeQualificationDynamics(match, groupSnapshots) {
  const logic = analyzeQualificationLogic(match, groupSnapshots);
  if (!logic?.scenario_type) return null;

  let drawBoost = 0;
  let xgScaleHome = 1;
  let xgScaleAway = 1;
  const notes = [];

  if (logic.scenario_type === 'tacit_draw') {
    drawBoost += 10;
    xgScaleHome *= 0.88;
    xgScaleAway *= 0.88;
    notes.push('默契球结构：平局为双方携手出线交汇点');
    if (logic.home_out_if_loss && logic.away_out_if_loss) {
      drawBoost += 2;
      notes.push('双方输球均有出局风险');
    }
  } else if (logic.scenario_type === 'asymmetric_third') {
    const asym = logic.asymmetric_third;
    drawBoost += 7;
    if (asym.weak_likely_underdog) drawBoost += 2;
    notes.push('争八不对称：弱队保平争第三，平局权重上调');
    if (asym.weak_is_home) {
      xgScaleHome *= 0.93;
      xgScaleAway *= 0.96;
    } else {
      xgScaleHome *= 0.96;
      xgScaleAway *= 0.93;
    }
    notes.push(asym.weak_side + ' 输球出局 · 平局争第 3 · 赢球稳进');
  } else if (logic.scenario_type === 'path_control') {
    xgScaleHome *= 0.94;
    xgScaleAway *= 0.94;
    notes.push('已出线：或轮换/练兵，xG 略降');
    notes.push('头名/次席影响淘汰对位，不额外抬平局');
  } else if (logic.scenario_type === 'must_fight') {
    return null;
  }

  if (!drawBoost && xgScaleHome >= 0.99 && xgScaleAway >= 0.99) return null;

  let summary;
  if (logic.scenario_type === 'tacit_draw') {
    summary = '对称默契球：踢平都活、谁输谁死，推演上调平局权重';
  } else if (logic.scenario_type === 'asymmetric_third') {
    summary = '争八不对称默契：强队已出线，弱队保平争第三（输球出局）';
  } else if (logic.scenario_type === 'path_control') {
    summary = '已出线控分：胜负只争头/次席与淘汰对位，可练兵但≠默契球';
  } else {
    summary = logic.logic_steps[logic.logic_steps.length - 1] || '';
  }

  return {
    scenario_type: logic.scenario_type,
    mutual_draw_advances: logic.tacit_draw_structure,
    path_control: logic.path_control_structure,
    asymmetric_third: logic.asymmetric_third,
    both_already_qualified: logic.both_already_qualified,
    home_already_qualified: logic.home_already_qualified,
    away_already_qualified: logic.away_already_qualified,
    home_out_if_loss: logic.home_out_if_loss,
    away_out_if_loss: logic.away_out_if_loss,
    logic_steps: logic.logic_steps,
    drawBoost: Math.min(12, drawBoost),
    xgScaleHome,
    xgScaleAway,
    notes,
    summary,
  };
}

/**
 * 平局 / 铁桶 / 势均力敌 — 回测 v2 修正层
 * @returns {{ drawBoost, ironBucket, closeXg, gap, notes }}
 */
function detectDrawContextFlags(match, xgHome, xgAway, qualDynamics) {
  const xgH = Number(xgHome) || 0;
  const xgA = Number(xgAway) || 0;
  const gap = Math.round(Math.abs(xgH - xgA) * 100) / 100;
  const text = collectTacticalText(match);
  const ironBucket = /5-4-1|5-3-2|铁桶|低位|deep block|low block|守平|可接受.*1分|闷平|密集防守|铁桶零封/i.test(text);
  const mustFight = /须抢分|必须.*3分|出线.*被动|垫底|0分|抢分/i.test(text);
  const closeXg = gap < 0.4;
  const favXg = Math.max(xgH, xgA);
  const dogXg = Math.min(xgH, xgA);

  let drawBoost = 0;
  const notes = [];
  if (gap < 0.15) {
    drawBoost += 4;
    notes.push('xG 极接近');
  } else if (gap < 0.38 && (ironBucket || mustFight)) {
    drawBoost += 3;
    notes.push('xG 接近且战术偏保守');
  }
  if (ironBucket && favXg < 1.9 && gap < 1.1) {
    drawBoost += 7;
    notes.push('热门难破密集');
  } else if (!ironBucket && favXg < 1.9 && dogXg < 1.0 && gap >= 0.85 && gap < 1.15) {
    drawBoost += 4;
    notes.push('xG 暗示胶着');
  }
  if (mustFight && ironBucket) {
    drawBoost += 3;
    notes.push('抢分遇铁桶');
  }
  const deepTier = Math.abs(Number(match.market_snapshot?.market_tier) || 0);
  if (deepTier >= 1.75 && gap < 1.05 && dogXg < 0.85) {
    drawBoost += 5;
    notes.push('深盘但 xG 难拉开');
  }
  if (qualDynamics?.drawBoost) {
    drawBoost += qualDynamics.drawBoost;
    notes.push(...(qualDynamics.notes || []));
  }

  return {
    drawBoost: Math.min(18, drawBoost),
    ironBucket,
    closeXg,
    gap,
    notes,
    qual_dynamics: qualDynamics || null,
  };
}

/** 在泊松胜平负上叠加平局修正（从胜负两侧按比例扣回） */
function applyDrawContextAdjust(probs, match, xgHome, xgAway, groupSnapshots) {
  const qualDynamics = computeQualificationDynamics(match, groupSnapshots);
  const ctx = detectDrawContextFlags(match, xgHome, xgAway, qualDynamics);
  const hw = Number(probs.home_win) || 0;
  const d = Number(probs.draw) || 0;
  const aw = Number(probs.away_win) || 0;
  if (ctx.drawBoost <= 0) {
    return { home_win: hw, draw: d, away_win: aw, draw_context: ctx };
  }
  const winTotal = hw + aw || 1;
  const boost = ctx.drawBoost;
  const adj = normalizeProb(
    hw - boost * (hw / winTotal),
    d + boost,
    aw - boost * (aw / winTotal),
  );
  return { ...adj, draw_context: ctx };
}

/** 在深度校准后的胜平负上叠加末轮出线博弈平局修正 */
function applyQualificationDrawBoost(probs, qualDynamics) {
  if (!qualDynamics?.drawBoost) return probs;
  const hw = Number(probs.home_win) || 0;
  const d = Number(probs.draw) || 0;
  const aw = Number(probs.away_win) || 0;
  const winTotal = hw + aw || 1;
  const boost = qualDynamics.drawBoost;
  return normalizeProb(
    hw - boost * (hw / winTotal),
    d + boost,
    aw - boost * (aw / winTotal),
  );
}

/** 胜平负概率排序（高→低） */
function rankOutcomes(probs) {
  const p = probs || {};
  return [
    { key: 'home', pct: Number(p.home_win) || 0, label: '主胜' },
    { key: 'draw', pct: Number(p.draw) || 0, label: '平局' },
    { key: 'away', pct: Number(p.away_win) || 0, label: '客胜' },
  ].sort((a, b) => b.pct - a.pct);
}

function getOutcomeTop2(probs) {
  return rankOutcomes(probs).slice(0, 2).map(o => o.key);
}

function isDrawInTop2(probs) {
  return getOutcomeTop2(probs).includes('draw');
}

/** 平局与最高项接近 — UI Top2 / draw_risk 共用阈值 */
function isDrawCoFavorite(probs, marginPct = 8, minDraw = 27) {
  const ranked = rankOutcomes(probs);
  const draw = ranked.find(o => o.key === 'draw');
  if (!draw || draw.pct < minDraw) return false;
  return ranked[0].pct - draw.pct <= marginPct;
}

function outcomeTop2Hit(probs, actualKey) {
  return getOutcomeTop2(probs).includes(actualKey);
}

/** 伤病 + 气候 → 调整后 xG（基准 xG 含 sync-lineups 预调；此处仅追加展示因子） */
function buildMatchContextAdjustments(match, xgHome, xgAway, groupSnapshots) {
  const homeInj = summarizeInjuries(match.home?.name || '主队', match.home?.injuries);
  const awayInj = summarizeInjuries(match.away?.name || '客队', match.away?.injuries);
  const wx = weatherXgModifier(match.weather);
  const lineupNote = lineupContextNote(match);
  const qualDynamics = computeQualificationDynamics(match, groupSnapshots);
  const tac = detectDrawContextFlags(match, xgHome, xgAway, qualDynamics);

  let xgH = Math.max(0.15, xgHome * (1 - homeInj.mod) * wx.mod);
  let xgA = Math.max(0.15, xgAway * (1 - awayInj.mod) * wx.mod);
  if (qualDynamics) {
    xgH *= qualDynamics.xgScaleHome;
    xgA *= qualDynamics.xgScaleAway;
  }
  if (tac.ironBucket && tac.gap < 1.05) {
    xgH = Math.round(xgH * 0.94 * 100) / 100;
    xgA = Math.round(xgA * 0.96 * 100) / 100;
  }
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
  if (qualDynamics?.summary) {
    factors.push({
      icon: '🎯',
      label: '出线博弈',
      note: qualDynamics.summary
        + (qualDynamics.scenario_type === 'tacit_draw' ? ' · 对称默契球'
          : qualDynamics.scenario_type === 'asymmetric_third' ? ' · 争八不对称'
          : qualDynamics.scenario_type === 'path_control' ? ' · 已出线争顺位' : ''),
    });
  }
  if (tac.drawBoost > 0) {
    factors.push({
      icon: '⚖️',
      label: '平局修正',
      note: '回测校准：' + tac.notes.join(' · ') + '（平 +' + tac.drawBoost + '%）',
    });
  }
  return {
    xg_home: xgH,
    xg_away: xgA,
    factors,
    coach_home: coachH,
    coach_away: coachA,
    draw_context: tac,
    qual_dynamics: qualDynamics,
  };
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

/** 动态泊松网格上限：ceil(xG)+3，至少 6、至多 10 */
function computeDynamicMaxGoals(xgHome, xgAway) {
  const xgH = Math.max(0, Number(xgHome) || 0);
  const xgA = Math.max(0, Number(xgAway) || 0);
  return Math.min(10, Math.max(6, Math.ceil(xgH) + 3, Math.ceil(xgA) + 3));
}

/**
 * 穿盘概率校准 — 基于 58 场有让球归档回测的分段收缩（Brier 0.254→0.236）
 * raw 为泊松网格加总；输出为展示用校准值
 */
function calibrateSpreadCoverPct(rawPct) {
  const raw = Number(rawPct);
  if (rawPct == null || Number.isNaN(raw)) return null;
  const bins = [
    [0, 25, 28],
    [25, 35, 52],
    [35, 45, 58],
    [45, 55, 42],
    [55, 65, 40],
    [65, 101, 48],
  ];
  for (let i = 0; i < bins.length; i++) {
    const lo = bins[i][0];
    const hi = bins[i][1];
    const target = bins[i][2];
    if (raw >= lo && raw < hi) {
      return Math.round((0.55 * raw + 0.45 * target) * 10) / 10;
    }
  }
  return Math.round(raw * 10) / 10;
}

function applySpreadCalibrationToCover(cover) {
  if (!cover || cover.full_cover_pct == null) return cover;
  const rawCover = cover.full_cover_pct;
  const rawDog = cover.dog_hold_pct;
  const calCover = calibrateSpreadCoverPct(rawCover);
  const calDog = calCover != null ? Math.round((100 - calCover) * 10) / 10 : rawDog;
  return Object.assign({}, cover, {
    full_cover_pct_raw: rawCover,
    dog_hold_pct_raw: rawDog,
    full_cover_pct: calCover,
    dog_hold_pct: calDog,
  });
}

/** 泊松全表 — 穿盘 / 净胜球 / 大小球（内部推演，非真实盘口 API） */
function computeSpreadCover(xgHome, xgAway, marketTierHome, maxGoals) {
  const xgH = Math.max(0, Number(xgHome) || 0);
  const xgA = Math.max(0, Number(xgAway) || 0);
  const tier = Number(marketTierHome) || 0;
  if (maxGoals == null) maxGoals = computeDynamicMaxGoals(xgH, xgA);

  let win1 = 0;
  let win2p = 0;
  let draw = 0;
  let awayWin = 0;
  let mass = 0;
  let over25 = 0;
  let over3 = 0;
  const top = [];

  const fact = [1];
  for (let i = 1; i <= maxGoals; i++) fact[i] = fact[i - 1] * i;
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
  const dogHoldPct = favSide === 'balanced' ? null : pct(mass - favFullCover);
  const favWinMass = favFullCover + favHalfCover + favHalfLose + favPush;
  const favWinPct = favSide === 'balanced' ? null : pct(favWinMass);
  const coverGivenWinPct = favWinMass > 0 ? Math.round((favFullCover / favWinMass) * 1000) / 10 : null;
  const gridTailPct = Math.round((1 - mass) * 1000) / 10;

  let rationalSpreadCn = '均衡';
  if (favEv > 0.04) rationalSpreadCn = (favSide === 'home' ? '主队' : '客队') + ' 净胜达标概率略高';
  else if (dogEv > 0.04) rationalSpreadCn = (favSide === 'home' ? '客队' : '主队') + ' 守住差距概率略高';
  else if (favEv < -0.04) rationalSpreadCn = (favSide === 'home' ? '客队' : '主队') + ' 更有机会守住差距（热门净胜拉开偏难）';
  else rationalSpreadCn = '两边净胜达标概率接近';

  const totalsLine25 = 2.5;
  const totalsLine3 = 3;
  const over25Pct = pct(over25);
  const over3Pct = pct(over3);
  let totalsLeanCn = over25Pct >= 58 ? '超 2.5 偏大比分（约 ' + over25Pct + '%）'
    : over25Pct <= 42 ? '超 2.5 偏小比分（约 ' + (100 - over25Pct) + '%）'
      : '超 2.5 接近均衡';
  if (over3Pct >= 55) totalsLeanCn += '；4球+偏多';
  else if (over3Pct <= 40) totalsLeanCn += '；4球+偏少';

  return applySpreadCalibrationToCover({
    top3_scores: top3,
    one_goal_win_pct: pct(win1),
    two_plus_win_pct: pct(win2p),
    full_cover_pct: pct(favFullCover),
    dog_hold_pct: dogHoldPct,
    fav_win_pct: favWinPct,
    cover_given_win_pct: coverGivenWinPct,
    grid_max_goals: maxGoals,
    grid_tail_pct: gridTailPct,
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
  });
}

/** 内部：亚盘总进球分隔线 vs 模型 fair_line */
const TOTALS_SIGNAL = {
  aligned: { cn: '线与模型贴合', color: '#5BBF8A', desc: '总进球参考与合理值接近。' },
  high_line: { cn: '参考偏高', color: '#C8A96E', desc: '总进球参考高于合理值，模型偏小比分。' },
  low_line: { cn: '参考偏低', color: '#7BB8D4', desc: '总进球参考低于合理值，模型偏大比分。' },
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
 * 大小球盘面推演
 * @param raw.totals_line — 内部录入：亚盘总进球分隔线（超线=大比分 · 不足=小比分），每场在 scripts/handicap-data-*.js 单独指定
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
  const overPct = probTotalsOver(xgHome, xgAway, line);
  const underPct = Math.round((100 - overPct) * 10) / 10;
  const fair = estimateFairTotalsLine(xgHome, xgAway);
  const lineGap = Math.round((line - fair.fair_line) * 100) / 100;

  let signal = 'aligned';
  if (lineGap >= 0.25) signal = 'high_line';
  else if (lineGap <= -0.25) signal = 'low_line';

  const meta = TOTALS_SIGNAL[signal] || TOTALS_SIGNAL.aligned;
  const lineLabel = formatTotalsLineLabel(line);
  const guessCn = formatPublicTotalsLine(line);

  let rationalCn = overPct >= 58 ? '模型略看大比分（超 ' + line + ' 约 ' + overPct + '%）'
    : overPct <= 42 ? '模型略看小比分（超 ' + line + ' 约 ' + underPct + '% 难达）'
      : '超 ' + line + ' 球接近五五开（约 ' + overPct + '%）';

  if (signal === 'high_line' && publicOver >= 58) {
    rationalCn += '；参考高于合理值';
  } else if (signal === 'high_line' && underIdx < overIdx - 0.05) {
    rationalCn += '；参考高于合理值但模型仍偏小比分';
  } else if (signal === 'low_line' && publicOver <= 42) {
    rationalCn += '；参考低于合理值';
  }

  const idxNote = overOdds != null && underOdds != null
    ? '大比分侧 ' + overOdds + ' / 小比分侧 ' + underOdds
      + (underIdx < overIdx - 0.05 ? ' · 小比分侧更热' : overIdx > underIdx + 0.05 ? ' · 大比分侧更热' : '')
      + (raw.totals_line_open != null && raw.totals_line_open !== line
        ? ' · 录入 ' + raw.totals_line_open + '→' + line : '')
    : overIdx > underIdx + 0.03
      ? '大比分侧权重略高'
      : underIdx > overIdx + 0.03
        ? '小比分侧权重略高'
        : '大/小比分两侧接近';

  const totalsOdds = overOdds != null && underOdds != null
    ? { over: overOdds, under: underOdds, note: '大比分 ' + overOdds + ' · 小比分 ' + underOdds }
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
    score_link_cn: '小比分 1-0/1-1 · 2-0/2-1 居中 · 3球+ 大比分',
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

/** 对外展示：总进球参考线（内部来源为亚盘分隔线，不在页面写「亚盘」） */
function formatPublicTotalsLine(marketLine) {
  const l = Number(marketLine);
  if (!Number.isFinite(l)) return '总进球参考 —';
  return '总进球参考 ' + l;
}

function formatModelTotalsLine(fairLine) {
  const f = Number(fairLine);
  if (!Number.isFinite(f)) return '合理值 —';
  return '合理值 ' + f;
}

function formatExpectedTotalsLine(expectedTotal) {
  const e = Number(expectedTotal);
  if (!Number.isFinite(e)) return '预测 —';
  return '预测 ' + e;
}

function formatTotalsLineGap(gap) {
  const g = Number(gap);
  if (!Number.isFinite(g) || Math.abs(g) < 0.01) return null;
  if (g > 0) return '高于合理值 ' + g;
  return '低于合理值 ' + Math.abs(g);
}

/** @deprecated 别名，兼容旧调用 */
function formatPublicGoalsGuess(marketLine) {
  return formatPublicTotalsLine(marketLine);
}

function formatPublicGoalsGuessIntro(marketLine) {
  return '对照' + formatPublicTotalsLine(marketLine) + '，看偏闷还是偏精彩';
}

/**
 * 总进球读场分级（回测校准：40–60% 不作倾向表态）
 * 内部对照 raw.totals_line（亚盘总进球分隔线），读超线大比分 ↔ 不足小比分。
 */
function classifyTotalsOutlook(overPct, lineGap, marketLine, fairLine, opts) {
  const over = Number(overPct) || 50;
  const gap = Number(lineGap) || 0;
  const pathPrimary = opts?.pathPrimary;
  const favCrush = opts?.favCrush;
  const market = marketLine ?? 2.5;
  const fair = fairLine ?? 2.5;
  const marketGoalsInt = formatMarketGoalsInteger(market);
  const marketGoalsCn = formatPublicTotalsLine(market);
  const section_intro_cn = formatPublicGoalsGuessIntro(market);
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

  let showLean = level === 'clear_high' || level === 'clear_low';
  if (showLean && Math.abs(gap) >= 0.75) showLean = false;
  if (showLean && (pathPrimary === 'fav_burst' || favCrush)) showLean = false;
  const meterPos = level === 'neutral'
    ? 50
    : Math.max(14, Math.min(86, Math.round(over)));

  let detail_cn = '';
  let headline_cn = '';
  let pill_cn = '';

  if (level === 'neutral') {
    detail_cn = '模型五五开，临场决定节奏。';
    headline_cn = '进球氛围：几乎五五开';
    pill_cn = '几乎五五开';
  } else if (level === 'mild_low') {
    detail_cn = '略偏闷，模型更看小比分（难超线 ' + market + '）；弱信号。';
    headline_cn = '进球氛围：略偏闷';
    pill_cn = '略偏闷（弱）';
  } else if (level === 'mild_high') {
    detail_cn = '略偏精彩，较易超线走大比分；弱信号。';
    headline_cn = '进球氛围：略偏精彩';
    pill_cn = '略偏精彩（弱）';
  } else if (level === 'clear_low') {
    detail_cn = '倾向沉闷——小比分概率高（' + formatModelTotalsLine(fair) + '）。';
    headline_cn = '进球氛围：倾向沉闷';
    pill_cn = '倾向沉闷';
  } else {
    detail_cn = '倾向精彩——较易打出大比分（' + formatModelTotalsLine(fair) + '）。';
    headline_cn = '进球氛围：倾向精彩';
    pill_cn = '倾向精彩，观赛更有看头。';
  }

  if (gap >= 1.0 && level === 'neutral') {
    detail_cn += ' 参考高于合理值，但模型仍五五开。';
    headline_cn = '进球氛围：五五开 · 参考偏高';
  } else if (gap >= 1.25) {
    detail_cn += ' 警惕参考定得偏高、实际仍走小比分。';
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
 * 让球读场 — 热门 -X 能否穿盘 / 受让 +X 能否守住（同一泊松表的两面）
 */
function classifySpreadOutlook(cover, tier, tierGap, favName, winOutlook, homeName, awayName) {
  const t = Number(tier) || 0;
  const gap = Number(tierGap) || 0;
  const th = getTierCoverThresholds(t);
  const hk = formatSpreadHandicapLines(t, homeName, awayName);
  const pct = n => Math.round((Number(n) || 0) * 10) / 10;
  const full = pct(cover?.full_cover_pct ?? winOutlook?.margin_meet_pct ?? 0);
  const rawFull = pct(cover?.full_cover_pct_raw ?? full);
  const half = pct(cover?.half_cover_pct ?? winOutlook?.margin_half_pct ?? 0);
  const lose1 = pct(cover?.half_lose_pct ?? winOutlook?.margin_fail_pct ?? 0);
  const dogHold = pct(cover?.dog_hold_pct ?? (full != null ? Math.max(0, 100 - full) : null));
  const favWin = pct(cover?.fav_win_pct ?? 0);
  const coverGivenWin = pct(cover?.cover_given_win_pct ?? 0);
  const gridTail = pct(cover?.grid_tail_pct ?? 0);

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

  const twoStageParts = [];
  if (favWin > 0) twoStageParts.push(hk.favName + ' 取胜约 ' + favWin + '%');
  if (coverGivenWin > 0) twoStageParts.push('赢球后穿盘约 ' + coverGivenWin + '%');
  if (dogHold != null) twoStageParts.push(hk.dogHandicapCn + ' 守住约 ' + dogHold + '%');
  const two_stage_cn = twoStageParts.join(' · ');

  let detail_cn = two_stage_cn || (hk.favHandicapCn + ' 穿盘约 ' + full + '%（' + th.fullLabel + '）'
    + ' · ' + hk.dogHandicapCn + ' 守住约 ' + dogHold + '%');
  if (Math.abs(rawFull - full) >= 1.5) {
    detail_cn += '（泊松 raw ' + rawFull + '% → 校准 ' + full + '%）';
  }
  if (level === 'skeptical') {
    detail_cn += '；盘口相对 xG 偏深约 ' + Math.abs(gap) + ' 球，热门穿盘难度偏大';
  } else if (level === 'narrow') {
    detail_cn += '；热门赢球可期，但难稳定净胜穿盘';
  } else if (level === 'likely') {
    detail_cn += '；模型认为热门穿盘概率相对较高';
  } else if (level === 'possible') {
    detail_cn += '；穿盘与受让守住均有一定空间';
  } else if (level === 'partial') {
    detail_cn += '；全穿偏难，仅赢一球/受让守住更现实';
  }
  if (extras.length) detail_cn += '（' + extras.join(' · ') + '）';
  detail_cn += '。';

  const headline_cn = hk.favHandicapCn + ' 穿盘：' + verdict_cn;
  const pill_cn = (favWin > 0 && coverGivenWin > 0
    ? hk.favName + ' 胜 ' + favWin + '% · 胜后穿 ' + coverGivenWin + '% · ' + hk.dogHandicapCn + ' 守 ' + dogHold + '%'
    : hk.favHandicapCn + ' 穿盘 ' + full + '% · ' + hk.dogHandicapCn + ' 守住 ' + dogHold + '%');

  return {
    level,
    label_cn,
    color,
    fav_name: favName,
    dog_name: hk.dogName,
    fav_handicap_cn: hk.favHandicapCn,
    dog_handicap_cn: hk.dogHandicapCn,
    market_expect_cn: hk.favHandicapCn + ' · ' + th.fullLabel,
    meet_pct: full,
    dog_hold_pct: dogHold,
    fav_win_pct: favWin || null,
    cover_given_win_pct: coverGivenWin || null,
    full_cover_pct_raw: rawFull,
    meet_pct_label: hk.favHandicapCn + ' 穿盘概率（校准）',
    dog_hold_label: hk.dogHandicapCn + ' 守住概率（校准）',
    two_stage_cn,
    grid_tail_pct: gridTail > 0.3 ? gridTail : null,
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

/** 世界杯历史均值：全场 xG 约 44% 落在上半场（可经 goal_timing 微调） */
const DEFAULT_HT_XG_SHARE = 0.44;

function inferHtXgShare(goalTiming) {
  if (!goalTiming?.cross_insight?.cross_intervals?.length) return DEFAULT_HT_XG_SHARE;
  const early = ['1–15', '16–30', '31–45', '1-15', '16-30', '31-45'];
  const cross = goalTiming.cross_insight.cross_intervals;
  const earlyHits = cross.filter(iv => early.some(e => String(iv).includes(e.split('–')[0].split('-')[0]))).length;
  if (earlyHits >= 2) return 0.48;
  if (cross.length && earlyHits === 0) return 0.40;
  return DEFAULT_HT_XG_SHARE;
}

function poissonOutcomeLite(xgH, xgA) {
  const fact = [1, 1, 2, 6, 24, 120];
  function pois(k, lam) {
    if (k < 0 || k > 5) return 0;
    if (lam <= 0) return k === 0 ? 1 : 0;
    return Math.exp(-lam) * Math.pow(lam, k) / fact[k];
  }
  let hw = 0;
  let dr = 0;
  let aw = 0;
  let top = { score: '0-0', prob: 0 };
  let mass = 0;
  const xgHome = Math.max(0, Number(xgH) || 0);
  const xgAway = Math.max(0, Number(xgA) || 0);
  for (let h = 0; h <= 5; h++) {
    for (let a = 0; a <= 5; a++) {
      const p = pois(h, xgHome) * pois(a, xgAway);
      mass += p;
      if (h > a) hw += p;
      else if (h === a) dr += p;
      else aw += p;
      if (p > top.prob) top = { score: h + '-' + a, prob: p };
    }
  }
  const m = mass || 1;
  const top3 = [];
  for (let h = 0; h <= 5; h++) {
    for (let a = 0; a <= 5; a++) {
      const p = pois(h, xgHome) * pois(a, xgAway) / m;
      top3.push({ score: h + '-' + a, prob: Math.round(p * 1000) / 10 });
    }
  }
  top3.sort((a, b) => b.prob - a.prob);
  return {
    home_win: Math.round((hw / m) * 1000) / 10,
    draw: Math.round((dr / m) * 1000) / 10,
    away_win: Math.round((aw / m) * 1000) / 10,
    score: top.score,
    score_prob: Math.round((top.prob / m) * 1000) / 10,
    top3: top3.slice(0, 3),
  };
}

/** 赛前半场推演 — 按历史上下半进球比例拆分 xG */
function buildHalftimePreview(xgH, xgA, homeName, awayName, goalTiming) {
  const share = inferHtXgShare(goalTiming);
  const xgHtH = Math.round((Number(xgH) || 0) * share * 100) / 100;
  const xgHtA = Math.round((Number(xgA) || 0) * share * 100) / 100;
  const xg2hH = Math.round(((Number(xgH) || 0) - xgHtH) * 100) / 100;
  const xg2hA = Math.round(((Number(xgA) || 0) - xgHtA) * 100) / 100;
  const ht = poissonOutcomeLite(xgHtH, xgHtA);
  const htGoals = xgHtH + xgHtA;
  const htOver05 = probTotalsAtLeast(xgHtH, xgHtA, 1);
  const htOver15 = probTotalsAtLeast(xgHtH, xgHtA, 2);
  const pick = ht.home_win >= ht.draw && ht.home_win >= ht.away_win
    ? 'home'
    : ht.away_win >= ht.draw ? 'away' : 'draw';
  const pickName = pick === 'home' ? homeName : pick === 'away' ? awayName : '平局';
  return {
    ht_xg_share: share,
    xg_home_ht: xgHtH,
    xg_away_ht: xgHtA,
    xg_home_2h: xg2hH,
    xg_away_2h: xg2hA,
    home_win: ht.home_win,
    draw: ht.draw,
    away_win: ht.away_win,
    top_score: ht.score,
    top_score_prob: ht.score_prob,
    top3_scores: ht.top3,
    ht_goals_expected: Math.round(htGoals * 100) / 100,
    ht_over_0_5_pct: htOver05,
    ht_over_1_5_pct: htOver15,
    pick,
    pick_name: pickName,
    summary_cn: '半场 xG ' + xgHtH + '–' + xgHtA + '（约占全场 ' + Math.round(share * 100) + '%）'
      + ' · 最可能 ' + ht.score + '（' + ht.score_prob + '%）'
      + ' · 胜平负 ' + ht.home_win + '/' + ht.draw + '/' + ht.away_win
      + ' · 半场≥1球约 ' + htOver05 + '%',
    disclaimer_cn: '按世界杯历史上下半进球比例拆分全场 xG；供节奏读场，非官方半场盘口。',
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
    cover, tier, tierGap, displaySummary.fav_name, displaySummary.win_outlook,
    match.home.name, match.away.name
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
  } else if (drawPct >= 27 && maxWin - drawPct <= 8) {
    drawRisk = {
      level: 'medium',
      color: '#C8A96E',
      note: '平局约 ' + drawPct + '%，与热门取胜概率接近（Top2 区间），存在「赢球变平局」空间。',
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
      label: '让球盘',
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
    methodology_note: '读场：净胜走向 ＞ 进球氛围。仅供娱乐推演。',
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
function buildTotalsDisplay(totals, expectedTotalGoals, xgPair) {
  const et = typeof expectedTotalGoals === 'number'
    ? (Math.round(expectedTotalGoals * 100) / 100).toFixed(1)
    : String(expectedTotalGoals);
  const gap = totals.line_gap ?? 0;
  const marketLine = totals.market_line ?? totals.fair_line;
  const fairLine = totals.fair_line;
  let gapNote = '';
  if (gap >= 1.25) {
    gapNote = ' · ⚠ ' + formatTotalsLineGap(gap);
  } else if (gap >= 0.5) {
    gapNote = ' · ' + formatTotalsLineGap(gap);
  } else if (gap <= -0.5) {
    gapNote = ' · ' + formatTotalsLineGap(gap);
  }
  let gapWarning = null;
  if (gap >= 1.25) {
    gapWarning = {
      level: 'high',
      cn: formatPublicTotalsLine(marketLine) + '，' + formatModelTotalsLine(fairLine)
        + '——' + formatTotalsLineGap(gap) + '，模型宜谨慎',
    };
  } else if (gap >= 1.0) {
    gapWarning = {
      level: 'medium',
      cn: formatPublicTotalsLine(marketLine) + ' vs ' + formatModelTotalsLine(fairLine)
        + '，' + formatTotalsLineGap(gap),
    };
  }

  const xgH = Number(xgPair?.xg_home) || 0;
  const xgA = Number(xgPair?.xg_away) || 0;
  const pathGap = Math.abs(xgH - xgA);
  const favXg = Math.max(xgH, xgA);
  const dogXg = Math.min(xgH, xgA);
  const pathScores = scoreGoalPathPreview(favXg, dogXg, pathGap, xgH + xgA);
  const pathPrimary = Object.entries(pathScores).sort((a, b) => b[1] - a[1])[0][0];
  const totalsOutlook = classifyTotalsOutlook(totals.over_pct, gap, marketLine, fairLine, {
    pathPrimary,
    favCrush: isFavCrushScenario(favXg, dogXg, pathGap),
  });
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
    summary_cn: formatExpectedTotalsLine(et) + ' · ' + formatModelTotalsLine(fairLine)
      + ' · ' + formatPublicTotalsLine(marketLine)
      + (formatTotalsLineGap(gap) ? '（' + formatTotalsLineGap(gap) + '）' : '')
      + gapNote + ' · ' + modelLean,
  };
}

const TOTALS_SIDE_CN = { over: '大球', under: '小球', neutral: '观望' };

function totalsSideFromOverPct(overPct) {
  if (overPct >= 55) return 'over';
  if (overPct <= 45) return 'under';
  return 'neutral';
}

function totalsSideFromLineGap(gap) {
  if (gap >= 0.25) return 'under';
  if (gap <= -0.25) return 'over';
  return 'neutral';
}

function totalsSideFromOdds(overOdds, underOdds) {
  if (overOdds == null || underOdds == null) return 'neutral';
  if (overOdds <= 0.95 && overOdds < underOdds - 0.02) return 'over';
  if (underOdds <= 0.95 && underOdds < overOdds - 0.02) return 'under';
  return 'neutral';
}

function totalsSideFromSituation(qualDynamics) {
  if (!qualDynamics?.scenario_type) return 'neutral';
  const t = qualDynamics.scenario_type;
  if (t === 'tacit_draw' || t === 'asymmetric_third') return 'under';
  if (t === 'path_control') return 'under';
  return 'neutral';
}

/**
 * 大小球三层合并：模型 + 盘面（线+水）多数决；形势仅同分或一致时加成，与模型+盘冲突则降权
 */
function computeTotalsPickLayers(totalsAnalysis, raw, qualDynamics) {
  const modelSide = totalsSideFromOverPct(totalsAnalysis.over_pct);
  const lineSide = totalsSideFromLineGap(totalsAnalysis.line_gap);
  const overOdds = raw.totals_over_odds ?? raw.totals_now?.over_odds;
  const underOdds = raw.totals_under_odds ?? raw.totals_now?.under_odds;
  const oddsSide = totalsSideFromOdds(overOdds, underOdds);
  const situationSide = totalsSideFromSituation(qualDynamics);

  const votes = { model: modelSide, line: lineSide, odds: oddsSide, situation: situationSide };
  let overScore = 0;
  let underScore = 0;
  [modelSide, lineSide, oddsSide].forEach(s => {
    if (s === 'over') overScore += 1;
    if (s === 'under') underScore += 1;
  });

  let marketSide = 'neutral';
  if (overScore > underScore) marketSide = 'over';
  else if (underScore > overScore) marketSide = 'under';

  let recommendedSide = marketSide;
  if (recommendedSide === 'neutral') {
    if (modelSide !== 'neutral') recommendedSide = modelSide;
    else if (situationSide !== 'neutral') recommendedSide = situationSide;
  }

  const modelMarketAgree = modelSide !== 'neutral' && marketSide !== 'neutral' && modelSide === marketSide;
  const situationDampened = situationSide !== 'neutral'
    && marketSide !== 'neutral'
    && situationSide !== marketSide
    && (modelMarketAgree || (modelSide === marketSide && modelSide !== 'neutral'));
  const conflict = situationDampened;

  let conflictCn = null;
  if (conflict) {
    conflictCn = '形势偏' + TOTALS_SIDE_CN[situationSide]
      + '，模型与盘口指向' + TOTALS_SIDE_CN[marketSide]
      + ' · 形势降权，跟模型+盘面';
  }

  const voteSummary = ['model', 'line', 'odds', 'situation']
    .map(k => TOTALS_SIDE_CN[votes[k]] + '(' + k + ')')
    .join(' · ');

  return {
    model_side: modelSide,
    situation_side: situationSide,
    market_line_side: lineSide,
    market_odds_side: oddsSide,
    market_side: marketSide,
    recommended_side: recommendedSide,
    conflict,
    conflict_cn: conflictCn,
    situation_dampened: situationDampened,
    votes,
    vote_summary_cn: voteSummary,
    merge_rule_cn: '模型+盘面（线+水）多数决；形势仅同分或一致时加成，冲突则降权',
  };
}

function enrichAgentPickWithLayers(agentPick, layers, totalsAnalysis) {
  if (!agentPick) return null;
  const out = JSON.parse(JSON.stringify(agentPick));
  const pickSide = out.totals?.side || layers.recommended_side;
  out.pick_meta = {
    model_side: layers.model_side,
    situation_side: layers.situation_side,
    market_line_side: layers.market_line_side,
    market_odds_side: layers.market_odds_side,
    market_side: layers.market_side,
    pick_side: pickSide,
    recommended_side: layers.recommended_side,
    merge_rule_cn: layers.merge_rule_cn,
    conflict: layers.conflict,
    conflict_cn: layers.conflict_cn,
    votes: layers.votes,
    vote_summary_cn: layers.vote_summary_cn,
    situation_dampened: layers.situation_dampened,
    over_pct: totalsAnalysis.over_pct,
    line_gap: totalsAnalysis.line_gap,
  };
  if (out.totals) {
    if (layers.conflict) {
      out.totals.situation_conflict = true;
      out.totals.situation_conflict_cn = layers.conflict_cn;
    }
    if (pickSide !== layers.recommended_side && layers.recommended_side !== 'neutral') {
      out.totals.manual_override = true;
      out.totals.recommended_side = layers.recommended_side;
    }
  }
  return out;
}

/**
 * 盘路变化展示 — 初盘/现盘（用户录入）+ 世界杯主客说明
 */
function buildMarketLineMovement(raw, homeName, awayName) {
  if (!raw?.spread_now && !raw?.line_move) return null;
  const tagMeta = {
    flat: { cn: '盘口平稳', color: '#7BB8D4' },
    fav_defense: { cn: '热门防守', color: '#D95F6A' },
    fav_strength: { cn: '热门加强', color: '#5BBF8A' },
    dog_value: { cn: '受让增值', color: '#5BBF8A' },
    correction: { cn: '盘口修正', color: '#C8A96E' },
    away_edge: { cn: '向客队倾斜', color: '#7BB8D4' },
    home_edge: { cn: '向主队倾斜', color: '#7BB8D4' },
  };
  const open = raw.spread_open;
  const now = raw.spread_now;
  const tn = raw.totals_now;
  const tag = raw.line_move?.tag || 'flat';
  const meta = tagMeta[tag] || tagMeta.flat;
  const fmtSpread = block => {
    if (!block) return null;
    const hOdds = block.home_odds != null ? '@' + block.home_odds : '';
    const aOdds = block.away_odds != null ? '@' + block.away_odds : '';
    return homeName + ' ' + block.home_handicap + hOdds + ' · ' + awayName + ' ' + block.away_handicap + aOdds;
  };
  return {
    wc_note: raw.wc_venue_note
      || '世界杯中立赛场 · FIFA 主/客仅为赛历标签，不等于真实主场优势',
    spread_open_cn: fmtSpread(open),
    spread_now_cn: fmtSpread(now),
    totals_now_cn: tn
      ? '大小 ' + (tn.line_display || tn.line) + ' · 大 ' + tn.over_odds + ' / 小 ' + tn.under_odds
      : null,
    tag,
    tag_cn: raw.line_move?.cn || meta.cn,
    tag_color: meta.color,
    detail_cn: raw.line_move?.detail || '',
  };
}

/**
 * @param {object} raw — 内部录入，含 market_tier / public_lean / public_pct
 */
function buildDepthCalibration(match, raw, groupSnapshots) {
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
  const qualDynamics = groupSnapshots
    ? computeQualificationDynamics(match, groupSnapshots)
    : null;
  const totalsPickLayers = computeTotalsPickLayers(totals, raw, qualDynamics);
  const agentPick = enrichAgentPickWithLayers(raw.agent_pick || null, totalsPickLayers, totals);
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
  displaySummary.totals_view = buildTotalsDisplay(totalsAdj, displaySummary.expected_total_goals, {
    xg_home: ctx.xg_home,
    xg_away: ctx.xg_away,
  });
  displaySummary.customer_reading = buildCustomerReading(
    match, displaySummary, tier, tierGap, coverAdj, adjusted
  );
  displaySummary.first_goal_scenarios = computeFirstGoalScenarios(
    match, ctx.xg_home, ctx.xg_away, tier, displaySummary, totalsLine
  );
  displaySummary.match_preview = buildMatchPreview(
    match, displaySummary, adjusted, tier, ctx
  );
  displaySummary.halftime_preview = buildHalftimePreview(
    ctx.xg_home, ctx.xg_away, match.home.name, match.away.name, null
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
    market_line_movement: buildMarketLineMovement(raw, match.home.name, match.away.name),
    totals_pick_layers: totalsPickLayers,
    agent_pick: agentPick,
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
    tradeoff: 'D 组次席走 M88（D2 vs G2）；头名 M81 打第 3 名池。美国已出线时，土/巴争次席并须关注相互战绩与净胜球。',
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
  const focus = (focusTeam && teamInMatch(focusTeam, homeTeam, awayTeam))
    ? focusTeam
    : (STRONG_TEAMS.has(homeTeam) ? homeTeam : STRONG_TEAMS.has(awayTeam) ? awayTeam : homeTeam);
  const fRow = sorted.find(r => r.team === focus) || hr;
  const fRank = sorted.findIndex(r => r.team === focus) + 1;
  const notes = crossNotes || [];
  const tightGroup = notes.some(n => /四队同积|四队同分|均1分|同积/.test(n));
  const f1 = fLeader || 'F 组头名球队';

  if (group === 'D' && matchday === 2 && homeTeam === 'Türkiye' && awayTeam === 'Paraguay') {
    const usaPts = (sorted.find(r => r.team === 'USA') || {}).pts || 0;
    const ausPts = (sorted.find(r => r.team === 'Australia') || {}).pts || 0;
    if (usaPts >= 6) {
      return '策略最优解（推演）：美国 ' + usaPts + ' 分已出线，本场是土-巴「零分生死战」——'
        + '非胜结果几乎等同于放弃小组前二；取胜亦仅至 3 分，仍落后于澳大利亚 '
        + ausPts + ' 分且首轮 0-2 相互战绩处劣势。末轮土耳其对美国须再抢分，并需澳大利亚对巴拉圭失分；'
        + '现阶段绝无演练或接受平局的空间。';
    }
  }

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

function teamInMatch(team, homeTeam, awayTeam) {
  return team === homeTeam || team === awayTeam;
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

  const hr = homeRow || { pts: 0, p: 0 };
  const ar = awayRow || { pts: 0, p: 0 };

  const qualDyn = computeQualificationDynamics(
    { group, matchday, home: { name: homeTeam }, away: { name: awayTeam } },
    snapshots,
  );
  const qualLogic = analyzeQualificationLogic(
    { group, matchday, home: { name: homeTeam }, away: { name: awayTeam } },
    snapshots,
  );
  if (qualLogic?.tacit_draw_structure) {
    return finishManipulationRisk({
      level: 'HIGH',
      level_cn: '高',
      focus_team: null,
      reason: homeTeam + ' 与 ' + awayTeam + ' 末轮存在「默契平局」结构：握手双方均可出线；'
        + '若分出胜负则零和（仅胜者晋级、败者淘汰）'
        + (qualLogic.home_pts === qualLogic.away_pts && qualLogic.home_pts <= 3
          ? '（双方同积 ' + qualLogic.home_pts + ' 分，典型「踢平都活、谁输谁死」）'
          : '')
        + '。实力接近时双方或不愿冒险，推演上调平局权重。',
      logic_steps: qualLogic.logic_steps,
    }, ctx);
  }
  if (qualLogic?.asymmetric_third) {
    const a = qualLogic.asymmetric_third;
    return finishManipulationRisk({
      level: 'MEDIUM',
      level_cn: '中',
      focus_team: a.weak_side,
      reason: a.strong_side + ' 已锁前二；' + a.weak_side + ' 仍不确定：输球基本出局，握手可争第 3 进「12 进 8」争八池（'
        + a.draw_pts_if_draw + ' 分），赢球则稳进。弱队或「保平争胜」、强队可低强度——不对称默契，推演略抬平局。',
      logic_steps: qualLogic.logic_steps,
    }, ctx);
  }
  if (qualLogic?.path_control_structure) {
    return finishManipulationRisk({
      level: 'MEDIUM',
      level_cn: '中',
      focus_team: STRONG_TEAMS.has(homeTeam) ? homeTeam : STRONG_TEAMS.has(awayTeam) ? awayTeam : null,
      reason: homeTeam + '、' + awayTeam + ' 均已锁定出线（输球亦稳居前二）。'
        + '胜负不影响晋级，只争头名/次席及淘汰赛对位'
        + (bracket?.tradeoff ? '（' + bracket.tradeoff + '）' : '')
        + '。可轮换练兵，但≠默契球——没有「必须平局才能携手出线」的逻辑。',
      logic_steps: qualLogic.logic_steps,
    }, ctx);
  }

  /** 末轮垫底生死战：双方均无控分空间（如波黑 vs 卡塔尔各 1 分） */
  if (matchday >= 3 && hr.pts <= 1 && ar.pts <= 1) {
    return finishManipulationRisk({
      level: 'LOW',
      level_cn: '低',
      focus_team: null,
      reason: homeTeam + '（' + hr.pts + ' 分）与 ' + awayTeam + '（' + ar.pts + ' 分）末轮生死战，均无控分空间，须全力抢 3 分。',
    }, ctx);
  }

  /** 末轮须胜才能争出线（弱队侧）；已出线强队同场时不覆盖其控分研判 */
  if (matchday >= 3 && (hr.pts <= 3 || ar.pts <= 3)) {
    const homeRank = sorted.findIndex(r => r.team === homeTeam) + 1;
    const awayRank = sorted.findIndex(r => r.team === awayTeam) + 1;
    const homeMustWin = homeRank >= 2 && hr.pts <= 3 && leader && hr.pts < leader.pts;
    const awayMustWin = awayRank >= 2 && ar.pts <= 3 && leader && ar.pts < leader.pts;
    const leaderInMatch = leader && teamInMatch(leader.team, homeTeam, awayTeam);
    const leaderSecure = leaderInMatch && leader.pts >= 6;
    if ((homeMustWin || awayMustWin) && !leaderSecure) {
      const needy = homeMustWin && awayMustWin
        ? homeTeam + '、' + awayTeam
        : homeMustWin ? homeTeam : awayTeam;
      return finishManipulationRisk({
        level: 'LOW',
        level_cn: '低',
        focus_team: null,
        reason: needy + ' 末轮须抢 3 分争出线，无控分空间；路径博弈须等积分落袋后再谈。',
      }, ctx);
    }
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

  if (group === 'D' && matchday === 2) {
    const usa = sorted.find(r => r.team === 'USA');
    const aus = sorted.find(r => r.team === 'Australia');
    const isTurPar = (homeTeam === 'Türkiye' && awayTeam === 'Paraguay')
      || (homeTeam === 'Paraguay' && awayTeam === 'Türkiye');
    if (isTurPar && usa && usa.pts >= 6) {
      const gSnap = (snapshots || []).find(s => s.group === 'G');
      const gSecond = gSnap?.table?.length ? sortTable(gSnap.table)[1]?.team : 'New Zealand';
      return finishManipulationRisk({
        level: 'HIGH',
        level_cn: '高',
        focus_team: 'Türkiye',
        reason: '美国 ' + usa.pts + ' 分已提前锁定 32 强（M81 头名槽），本场不影响东道主出线。'
          + '土耳其/巴拉圭均为 0 分——胜者 3 分仍暂列第 3，落后澳大利亚 ' + (aus?.pts ?? 3)
          + ' 分；末轮土耳其对美国、澳大利亚对巴拉圭须再抢分。'
          + '土耳其首轮 0-2 负澳大利亚，同分情况下相互战绩处劣势，大比分取胜仍有净胜球/进球数价值。'
          + '若夺小组第 2：32强 M88 打 G 组第 2（当前倾向 ' + gSecond + '）→ 16强 M95 进 J1/H2 走廊。',
      }, ctx);
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

  if (matchday >= 3 && leader && teamInMatch(leader.team, homeTeam, awayTeam)) {
    const runner = sorted[1];
    const topClash = runner && teamInMatch(runner.team, homeTeam, awayTeam)
      && Math.abs(leader.pts - runner.pts) <= 1;
    if (topClash) {
      return finishManipulationRisk({
        level: 'LOW',
        level_cn: '低',
        focus_team: null,
        reason: leader.team + ' 与 ' + runner.team + ' 积分纠缠、直接对话，均未锁定出线，末轮无控分空间。',
      }, ctx);
    }
    if (leader.pts >= 4) {
      return finishManipulationRisk({
        level: 'MEDIUM',
        level_cn: '中',
        focus_team: leader.team,
        reason: leader.team + ' 末轮或存在「避开某 32 强对手 / 保小组第 2 进更顺半区」的战术选择，需结合绑定组（如 C↔F）同期赛果。',
      }, ctx);
    }
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
    if (g === 'D' && match.home.name === 'Türkiye' && match.away.name === 'Paraguay') {
      const usa = sorted.find(r => r.team === 'USA');
      const aus = sorted.find(r => r.team === 'Australia');
      const gSnap = (groupSnapshots || []).find(s => s.group === 'G');
      const g2 = gSnap?.table?.length ? sortTable(gSnap.table)[1]?.team : 'New Zealand';
      lines.length = 0;
      lines.push(
        'Türkiye 若取胜：积分 3，暂列第 3；仍落后澳大利亚 ' + (aus?.pts ?? 3)
        + ' 分且相互战绩处劣势——须末轮对美国再抢分，并盼澳大利亚对巴拉圭失分；若最终小组第 2 → 32强 M88 打 G 组第 2（倾向 '
        + g2 + '）→ 16强 M95。',
      );
      lines.push(
        'Paraguay 若取胜：同样 3 分，出线形势与土耳其镜像；末轮澳大利亚对巴拉圭为直接对话。',
      );
      lines.push(
        '平局：双方各 1 分——在「美国 ' + (usa?.pts ?? 6) + ' 分已出线、澳大利亚 '
        + (aus?.pts ?? 3) + ' 分占次席」背景下，1 分对土/巴均几乎无出线价值。',
      );
      lines.push(
        '负者：继续 0 分垫底，小组前二希望渺茫；第 3 名争八需极端赛果组合，基本出局。',
      );
      lines.push(
        '末轮赛程：土耳其 vs 美国（东道主或轮换但仍须防丢分）· 澳大利亚 vs 巴拉圭——'
        + '土耳其须末轮两战全胜且澳大利亚末轮失分，方有机会逆转次席。',
      );
      return lines;
    }
    if (md >= 2 && bracket.tradeoff) {
      lines.push('头名/次席博弈：' + bracket.tradeoff);
    }
    return lines;
  };

  let pathTradeoff = bracket.tradeoff || null;
  if (g === 'D' && sorted[0]?.team === 'USA' && sorted[0].pts >= 6) {
    const gSnap = (groupSnapshots || []).find(s => s.group === 'G');
    const g2 = gSnap?.table?.length ? sortTable(gSnap.table)[1]?.team : 'New Zealand';
    pathTradeoff = '美国 ' + sorted[0].pts + ' 分已锁 M81 头名；土/巴争 M88 次席（D2 vs G2 · 倾向 '
      + g2 + '）——土耳其同分须靠净胜球/进球数弥补对澳 0-2 的相互战绩劣势。';
  }

  return {
    group: g,
    label: snap?.label || `${g}组 · 第 ${match.matchday || 1} 轮`,
    matchday: match.matchday || 1,
    standings: sorted,
    home: teamScenario(match.home.name, homeRow),
    away: teamScenario(match.away.name, awayRow),
    cross_group_notes: crossNotes,
    path_tradeoff: pathTradeoff,
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
  } else if (g === 'D' && match.home.name === 'Türkiye' && match.away.name === 'Paraguay') {
    const usa = table.find(r => r.team === 'USA');
    const aus = table.find(r => r.team === 'Australia');
    stakes = '美国 ' + (usa?.pts ?? 6) + ' 分已出线 · 澳大利亚 ' + (aus?.pts ?? 3)
      + ' 分暂列次席；土/巴均为 0 分——本场胜者 3 分仍须末轮再抢分'
      + '（末轮土对美国 · 澳对巴拉圭），且土耳其首轮 0-2 负澳、相互战绩处劣势';
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

  const risk = groupContext?.manipulation_risk;
  if (risk && (risk.level === 'HIGH' || risk.level === 'MEDIUM')) {
    const gist = risk.reason || risk.optimal_summary || '';
    const logicHint = risk.logic_steps?.length
      ? ' · ' + risk.logic_steps.filter(s => s.startsWith('逻辑：')).slice(-1)[0].replace(/^逻辑：/, '')
      : '';
    if (gist) {
      factors.push({
        icon: '🎯',
        label: '出线博弈',
        text: gist.split('。')[0] + logicHint
          + (risk.level_cn === '高' ? ' · 默契球结构' : risk.level_cn === '中' ? ' · 已出线争顺位' : ''),
      });
    }
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
  formatSpreadHandicapLines,
  formatTierLabel,
  computeSpreadCover,
  computeDynamicMaxGoals,
  calibrateSpreadCoverPct,
  getTierCoverThresholds,
  computeTotalsAnalysis,
  classifyExcitementLabel,
  buildExcitementView,
  computeDisplaySummary,
  buildMatchContextAdjustments,
  detectDrawContextFlags,
  applyDrawContextAdjust,
  analyzeQualificationLogic,
  computeQualificationDynamics,
  applyQualificationDrawBoost,
  rankOutcomes,
  getOutcomeTop2,
  isDrawInTop2,
  isDrawCoFavorite,
  outcomeTop2Hit,
  isFavCrushScenario,
  scoreGoalPathPreview,
  buildScenarioOutcomes,
  pickScenarioExpectedKey,
  computeConditionalDisplaySummary,
  computeWinOutlook,
  computeFirstGoalScenarios,
  buildMatchPreview,
  buildPreviewPostMatchReview,
  buildGoalEfficiencyReview,
  buildGoalEfficiencyPreview,
  classifyGoalPathLean,
  resolveGoalPathLeanPresentation,
  getAtmosphereContextFromMatch,
  buildLiveWatchItems,
  resolveGoalPathXg,
  PATH_LEAN_HIGH_PCT,
  PATH_LEAN_LOW_PCT,
  enrichActualResultForReview,
  inferMatchArchetype,
  buildDepthCalibration,
  computeTotalsPickLayers,
  enrichAgentPickWithLayers,
  buildMarketLineMovement,
  buildPublicSummaryNote,
  buildCalibrationDisplay,
  buildTotalsDisplay,
  classifyTotalsOutlook,
  probTotalsOver,
  probTotalsAtLeast,
  formatMarketGoalsInteger,
  formatPublicTotalsLine,
  formatModelTotalsLine,
  formatExpectedTotalsLine,
  formatTotalsLineGap,
  formatPublicGoalsGuess,
  formatPublicGoalsGuessIntro,
  classifySpreadOutlook,
  buildCustomerReading,
  buildGoalTimingDisplay,
  buildHalftimePreview,
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
