/**
 * 校验 Agent 让球 reason_cn 中的比分引用是否与盘口数学一致。
 * node scripts/audit-agent-spread-reason.js [day20]
 *
 * 规则（改进 #2）：主路径/示例比分须先过 gradeSpreadForScore，再写「赢半/输半/守住」等。
 */
const path = require('path');
const lib = require('../js/prediction-signals-lib.js');

function auditHandicapFile(filePath) {
  const data = require(filePath);
  const rows = [];
  let errors = 0;

  for (const [id, raw] of Object.entries(data)) {
    if (!raw || typeof raw !== 'object' || !raw.agent_pick?.spread) continue;
    const ap = raw.agent_pick;
    const spread = ap.spread;
    const reason = spread.reason_cn || spread.label_cn || '';
    const result = lib.validateSpreadReasonScoreClaims(
      reason,
      raw.market_tier,
      spread.side,
      raw.public_lean,
    );
    rows.push({ id, match: raw.analysis?.split('·')[0]?.trim() || id, ...result, reason_cn: reason });
    if (!result.ok) errors += result.issues.length;
  }

  return { filePath, rows, errors };
}

const day = process.argv[2] || 'day20';
const file = path.join(__dirname, `handicap-data-${day}.js`);
const { rows, errors } = auditHandicapFile(file);

console.log(`\n=== Agent 让球文案校验 · ${day} ===\n`);
for (const r of rows) {
  const status = r.ok ? 'OK' : 'FAIL';
  console.log(`[${status}] ${r.id} ${r.match || ''}`);
  if (r.checks.length) {
    for (const c of r.checks) {
      console.log(`  ${c.score} → ${c.outcome_cn}${c.hits_no_loss ? '（中）' : '（不中）'}`);
    }
  } else {
    console.log('  （未引用具体比分，跳过比分校验）');
  }
  for (const iss of r.issues) {
    console.log(`  ✗ ${iss.score}: ${iss.fix_cn}`);
    console.log(`    …${iss.snippet}…`);
  }
  if (!r.ok) console.log(`  reason: ${r.reason_cn.slice(0, 120)}${r.reason_cn.length > 120 ? '…' : ''}`);
  console.log('');
}

if (errors) {
  console.log(`共 ${errors} 处文案与盘口数学冲突，请修正后再写 Agent 单。`);
  process.exit(1);
}
console.log('全部通过。');
