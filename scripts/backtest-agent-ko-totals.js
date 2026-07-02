/**
 * 淘汰赛 Agent 双选 · 大小球完整复盘 + 规则回测
 * Run: node scripts/backtest-agent-ko-totals.js
 */
const fs = require('fs');
const path = require('path');

const OUT_JSON = path.join(__dirname, 'backtest-ko-totals-last-run.json');

function outcomeUnits(outcome) {
  switch (outcome) {
    case 'full_win': return { hit: 1, miss: 0, legs: 1, cn: '全赢' };
    case 'half_win': return { hit: 0.5, miss: 0, legs: 1, cn: '赢半' };
    case 'half_lose': return { hit: 0, miss: 0.5, legs: 1, cn: '输半' };
    case 'full_lose': return { hit: 0, miss: 1, legs: 1, cn: '全输' };
    case 'push': return { hit: 0, miss: 0, legs: 0, cn: '走水' };
    default: return { hit: 0, miss: 0, legs: 0, cn: '—' };
  }
}

function pct(hit, legs) {
  return legs ? Math.round((hit / legs) * 1000) / 10 : null;
}

function fmtHit(hit) {
  return Number.isInteger(hit) ? String(hit) : String(Math.round(hit * 10) / 10);
}

function loadKoPicks() {
  const rows = [];
  const files = fs.readdirSync(__dirname)
    .filter(f => /^agent-picks-day(1[7-9]|2[0-9])\.json$/.test(f))
    .sort((a, b) => parseInt(a.match(/day(\d+)/)[1], 10) - parseInt(b.match(/day(\d+)/)[1], 10));
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8'));
    for (const g of data.results?.picks || []) {
      const tu = outcomeUnits(g.totals?.outcome);
      const su = outcomeUnits(g.spread?.outcome);
      rows.push({
        day: data.day,
        date: data.date,
        id: g.id,
        match: g.match,
        score: g.actual_score,
        primary: g.primary,
        star_cn: g.primary === 'totals' ? '★大小' : '★让球',
        totals_role: g.primary === 'totals' ? '★主项' : '副项',
        totals_side: g.totals?.side,
        totals_pick: g.totals?.label_cn || g.totals?.pick_cn,
        totals_out: g.totals?.outcome,
        totals_cn: tu.cn,
        totals_hit: tu.hit,
        spread_pick: g.spread?.label_cn || g.spread?.pick_cn,
        spread_out: g.spread?.outcome,
        spread_cn: su.cn,
        spread_hit: su.hit,
        high_confidence: !!g.high_confidence,
        model_side: g.model_side || null,
        market_side: g.market_side || null,
        pick_side: g.pick_side || g.totals?.side || null,
        recommended_side: g.recommended_side || null,
        situation_conflict: !!g.situation_conflict,
        outcome_key: g.outcome?.key,
        outcome_cn: g.outcome?.cn,
      });
    }
  }
  return rows;
}

function summarizeTotals(rows, filterFn, label) {
  const sel = rows.filter(filterFn);
  let hit = 0;
  let legs = 0;
  let skipped = rows.length - sel.length;
  for (const r of sel) {
    const u = outcomeUnits(r.totals_out);
    hit += u.hit;
    legs += u.legs;
  }
  return { label, hit, legs, pct: pct(hit, legs), n: sel.length, skipped };
}

function bucket(rows, keyFn) {
  const map = new Map();
  for (const r of rows) {
    const k = keyFn(r);
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(r);
  }
  return [...map.entries()].map(([k, rs]) => ({
    bucket: k,
    ...summarizeTotals(rs, () => true, k),
    rows: rs.map(x => x.id),
  }));
}

/** 若改跟 recommended_side（仅 totals），用原赛果推算 */
function totalsOutcomeIfSide(row, side) {
  if (!side || side === row.totals_side) return row.totals_out;
  const invert = {
    full_win: 'full_lose',
    half_win: 'half_lose',
    half_lose: 'half_win',
    full_lose: 'full_win',
    push: 'push',
  };
  return invert[row.totals_out] || row.totals_out;
}

const RULES = [
  {
    id: 'R0',
    name: '现状（全打）',
    filter: () => true,
  },
  {
    id: 'R1',
    name: '仅★=大小时打大小（放弃副项）',
    filter: r => r.primary === 'totals',
  },
  {
    id: 'R2',
    name: '放弃副项小球（★=让球 且 选小 → 跳过）',
    filter: r => !(r.primary === 'spread' && r.totals_side === 'under'),
  },
  {
    id: 'R3',
    name: '副项大小只打大（★=让球时仅保留 over）',
    filter: r => r.primary === 'totals' || r.totals_side === 'over',
  },
  {
    id: 'R4',
    name: '淘汰赛不打小球（全部 under 跳过）',
    filter: r => r.totals_side !== 'under',
  },
  {
    id: 'R5',
    name: '★=大小 OR 副项大（R1∪副项over）',
    filter: r => r.primary === 'totals' || r.totals_side === 'over',
  },
  {
    id: 'R6',
    name: '★=大小且非冲突（situation_conflict 则跳过）',
    filter: r => r.primary === 'totals' && !r.situation_conflict,
  },
  {
    id: 'R7',
    name: '有 recommended 时改跟推荐方向（模拟）',
    filter: () => true,
    remap: r => {
      if (!r.recommended_side || r.recommended_side === r.totals_side) return r;
      return { ...r, totals_out: totalsOutcomeIfSide(r, r.recommended_side), totals_side: r.recommended_side };
    },
  },
  {
    id: 'R8',
    name: '组合：★=大小无冲突 + 副项仅大球',
    filter: r => (r.primary === 'totals' && !r.situation_conflict) || (r.primary === 'spread' && r.totals_side === 'over'),
  },
  {
    id: 'R9',
    name: '组合：R8 + 大信心大小仅当★=大小',
    filter: r => {
      if (r.high_confidence && r.primary !== 'totals') return false;
      return (r.primary === 'totals' && !r.situation_conflict) || (r.primary === 'spread' && r.totals_side === 'over');
    },
  },
];

function runRule(rows, rule) {
  const applied = rows.map(r => (rule.remap ? rule.remap(r) : r));
  const sel = applied.filter(rule.filter);
  let hit = 0;
  let legs = 0;
  const picks = [];
  for (const r of sel) {
    const u = outcomeUnits(r.totals_out);
    hit += u.hit;
    legs += u.legs;
    picks.push({
      id: r.id,
      side: r.totals_side,
      out: r.totals_out,
      hit: u.hit,
      star: r.totals_role,
    });
  }
  return {
    id: rule.id,
    name: rule.name,
    hit,
    legs,
    pct: pct(hit, legs),
    played: sel.length,
    skipped: rows.length - sel.length,
    picks,
  };
}

function main() {
  const rows = loadKoPicks();
  if (!rows.length) {
    console.error('无淘汰赛已结算样本');
    process.exit(1);
  }

  const spreadHit = rows.reduce((s, r) => s + outcomeUnits(r.spread_out).hit, 0);
  const spreadLegs = rows.reduce((s, r) => s + outcomeUnits(r.spread_out).legs, 0);

  console.log('══════════════════════════════════════════════════════════════');
  console.log('  淘汰赛 Agent 双选 · 大小球完整复盘（Day17 起 · 赢半=0.5）');
  console.log('══════════════════════════════════════════════════════════════\n');

  console.log('【总览】');
  console.log(`  场次 ${rows.length} · 大小 ${fmtHit(rows.reduce((s, r) => s + r.totals_hit, 0))}/${rows.length} = ${pct(rows.reduce((s, r) => s + r.totals_hit, 0), rows.length)}%`);
  console.log(`  让球 ${fmtHit(spreadHit)}/${spreadLegs} = ${pct(spreadHit, spreadLegs)}%（对照）\n`);

  console.log('【分层】');
  for (const b of bucket(rows, r => r.totals_role)) {
    console.log(`  ${b.bucket}: ${fmtHit(b.hit)}/${b.legs} = ${b.pct}%  (${b.n}注 · ${b.rows.join(', ')})`);
  }
  console.log('');
  for (const b of bucket(rows, r => (r.totals_side === 'over' ? '大球 over' : '小球 under'))) {
    console.log(`  ${b.bucket}: ${fmtHit(b.hit)}/${b.legs} = ${b.pct}%  (${b.n}注)`);
  }
  console.log('');
  for (const b of bucket(rows, r => `${r.star_cn} · 大小${r.totals_side}`)) {
    console.log(`  ${b.bucket}: ${fmtHit(b.hit)}/${b.legs} = ${b.pct}%`);
  }
  console.log('');
  const hc = rows.filter(r => r.high_confidence);
  const hcTot = summarizeTotals(hc, () => true, '大信心-大小');
  const hcStarTot = summarizeTotals(hc, r => r.primary === 'totals', '大信心且★=大小');
  console.log(`  大信心场大小: ${fmtHit(hcTot.hit)}/${hcTot.legs} = ${hcTot.pct}%`);
  console.log(`  大信心且★=大小: ${fmtHit(hcStarTot.hit)}/${hcStarTot.legs} = ${hcStarTot.pct}%\n`);

  console.log('【完整逐场表】');
  console.log('Day  ID   比分   ★    大小角色  选      结果   有效  让球结果  大信心  模型/盘/冲突');
  console.log('─'.repeat(95));
  for (const r of rows) {
    const mm = [r.model_side, r.market_side].filter(Boolean).join('/') || '—';
    const cf = r.situation_conflict ? '⚠冲突' : '';
    const rec = r.recommended_side && r.recommended_side !== r.pick_side ? `→推${r.recommended_side}` : '';
    console.log(
      `${String(r.day).padStart(2)}  ${r.id}  ${(r.score || '—').padEnd(5)}  ${r.star_cn.padEnd(4)}  ${r.totals_role.padEnd(6)}  ${(r.totals_side || '?').padEnd(4)}  ${r.totals_cn.padEnd(4)}  ${fmtHit(r.totals_hit).padStart(3)}  ${r.spread_cn.padEnd(4)}  ${r.high_confidence ? '🔥' : '  '}     ${mm} ${cf}${rec}`
    );
  }

  console.log('\n══════════════════════════════════════════════════════════════');
  console.log('  规则回测（仅大小球注单）');
  console.log('══════════════════════════════════════════════════════════════\n');
  console.log('规则ID  命中率      有效命中  打出/跳过  说明');
  console.log('─'.repeat(90));

  const ruleResults = RULES.map(rule => runRule(rows, rule));
  const baseline = ruleResults[0];
  for (const rr of ruleResults) {
    const delta = rr.pct != null && baseline.pct != null ? (rr.pct - baseline.pct) : 0;
    const deltaStr = rr.id === 'R0' ? '' : ` (${delta >= 0 ? '+' : ''}${Math.round(delta * 10) / 10}pp)`;
    console.log(
      `${rr.id.padEnd(6)}  ${String(rr.pct ?? '—').padStart(5)}%${deltaStr.padEnd(8)}  ${fmtHit(rr.hit)}/${rr.legs}`.padEnd(28) +
      `  ${rr.played}/${rows.length}打 ${rr.skipped}跳  ${rr.name}`
    );
  }

  const best = [...ruleResults].filter(r => r.legs >= 3).sort((a, b) => (b.pct || 0) - (a.pct || 0))[0];
  console.log(`\n【推荐】样本≥3注最高：${best.id} ${best.name} → ${best.pct}% (${fmtHit(best.hit)}/${best.legs})`);

  console.log('\n【R8 组合规则 逐场是否打出】');
  const r8 = ruleResults.find(r => r.id === 'R8');
  for (const p of r8.picks) {
    console.log(`  ${p.id} ${p.star} ${p.side} → ${p.out} (${p.hit})`);
  }
  const skippedR8 = rows.filter(r => !RULES.find(x => x.id === 'R8').filter(r));
  console.log('  跳过:', skippedR8.map(r => `${r.id}(${r.totals_role}${r.totals_side})`).join(', ') || '无');

  const payload = {
    generated_at: new Date().toISOString(),
    sample: { matches: rows.length, days: [...new Set(rows.map(r => r.day))] },
    overview: {
      totals: { hit: rows.reduce((s, r) => s + r.totals_hit, 0), legs: rows.length, pct: pct(rows.reduce((s, r) => s + r.totals_hit, 0), rows.length) },
      spread: { hit: spreadHit, legs: spreadLegs, pct: pct(spreadHit, spreadLegs) },
    },
    buckets: {
      by_role: bucket(rows, r => r.totals_role),
      by_side: bucket(rows, r => r.totals_side),
      by_star_side: bucket(rows, r => `${r.star_cn}/${r.totals_side}`),
    },
    rows,
    rule_results: ruleResults,
    recommended_rule: best,
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + '\n');
  console.log(`\n✅ 已写入 ${OUT_JSON}`);
}

main();
