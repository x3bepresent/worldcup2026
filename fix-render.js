const fs = require('fs');
let src = fs.readFileSync('D:/worldcup2026/js/matches-app.js', 'utf8');

// ─── 1. 预测比分：p.predicted_score.home — p.predicted_score.away → p.score ─
src = src.replace(
  /\$\{p\.predicted_score\.home\} — \$\{p\.predicted_score\.away\}/g,
  '${p.score}'
);

// ─── 2. xG: p.xG.home — p.xG.away → p.xg_home — p.xg_away ─────────────────
src = src.replace(
  /期望进球 xG：\$\{p\.xG\.home\} — \$\{p\.xG\.away\}/g,
  '期望进球 xG：${p.xg_home} — ${p.xg_away}'
);

// ─── 3. 核心球星：m.home.stars.map → 单个 m.home.star ───────────────────────
// Replace home stars block
src = src.replace(
  /\$\{m\.home\.stars\.map\(s => `[\s\S]*?`\)\.join\(''\)\}/,
  `\${(()=>{ const s=m.home.star; return s ? \`
          <div class="star-row">
            <div style="flex:1">
              <div style="font-size:0.85rem;font-weight:700">\${s.name}</div>
              <div style="font-size:0.68rem;color:var(--txt2)">\${s.pos} · \${s.club}</div>
              <div style="font-size:0.7rem;color:var(--txt);margin-top:0.25rem">📌 \${s.desc}</div>
            </div>
          </div>\` : '<div style="color:var(--txt2);font-size:0.72rem">暂无数据</div>'; })()}`
);

// Replace away stars block
src = src.replace(
  /\$\{m\.away\.stars\.map\(s => `[\s\S]*?`\)\.join\(''\)\}/,
  `\${(()=>{ const s=m.away.star; return s ? \`
          <div class="star-row">
            <div style="flex:1">
              <div style="font-size:0.85rem;font-weight:700">\${s.name}</div>
              <div style="font-size:0.68rem;color:var(--txt2)">\${s.pos} · \${s.club}</div>
              <div style="font-size:0.7rem;color:var(--txt);margin-top:0.25rem">📌 \${s.desc}</div>
            </div>
          </div>\` : '<div style="color:var(--txt2);font-size:0.72rem">暂无数据</div>'; })()}`
);

// ─── 4. Key factors: p.key_factors.map → p.key_factor (string) ──────────────
src = src.replace(
  /\$\{p\.key_factors\.map\(\(f,i\) => `[\s\S]*?`\)\.join\(''\)\}/,
  `<div style="display:flex;gap:0.5rem;font-size:0.75rem;line-height:1.6;padding:0.4rem;
    background:rgba(255,255,255,0.03);border-radius:3px;border-left:2px solid var(--gold)">
    <span style="color:var(--gold);font-weight:700;flex-shrink:0">→</span>
    <span>\${p.key_factor||'综合因素分析'}</span>
  </div>`
);

// ─── 5. Score distribution: p.score_distribution → p.score_dist ─────────────
src = src.replace(/p\.score_distribution/g, 'p.score_dist');

// ─── 6. 近5场战绩 m.home.last5 / m.away.last5 — 改为从form渲染 ──────────────
// Remove the last5 block (complex template, replace with form display)
src = src.replace(
  /\$\{m\.home\.last5\.map\(g => `[\s\S]*?`\)\.join\(''\)\}/,
  `\${m.home.form.map(r=>\`<span style="display:inline-block;width:22px;height:22px;line-height:22px;
    text-align:center;border-radius:50%;font-size:0.7rem;font-weight:700;margin-right:3px;
    background:\${r==='W'?'rgba(91,191,138,0.25)':r==='D'?'rgba(150,150,150,0.15)':'rgba(217,95,106,0.2)'};
    color:\${r==='W'?'#5BBF8A':r==='D'?'#aaa':'#D95F6A'}">\${r}</span>\`).join('')}`
);
src = src.replace(
  /\$\{m\.away\.last5\.map\(g => `[\s\S]*?`\)\.join\(''\)\}/,
  `\${m.away.form.map(r=>\`<span style="display:inline-block;width:22px;height:22px;line-height:22px;
    text-align:center;border-radius:50%;font-size:0.7rem;font-weight:700;margin-right:3px;
    background:\${r==='W'?'rgba(91,191,138,0.25)':r==='D'?'rgba(150,150,150,0.15)':'rgba(217,95,106,0.2)'};
    color:\${r==='W'?'#5BBF8A':r==='D'?'#aaa':'#D95F6A'}">\${r}</span>\`).join('')}`
);

// ─── 7. Referee field names ──────────────────────────────────────────────────
src = src.replace(/m\.referee\.iso\b/g, "(m.referee.iso||'un')");
src = src.replace(/m\.referee\.nationality\b/g, 'm.referee.nation');
src = src.replace(/m\.referee\.fifa_since\b/g, "'FIFA 执法'");
src = src.replace(/m\.referee\.yellows_per_game\b/g, 'm.referee.avg_yellow');
src = src.replace(/m\.referee\.reds_per_game\b/g, 'm.referee.avg_red');
src = src.replace(/m\.referee\.penalties_per_game\b/g, "'-'");
src = src.replace(/m\.referee\.style\b/g, 'm.referee.bias_note');
src = src.replace(/m\.referee\.bias_notes\b/g, "(m.referee.tendencies||[]).join(' · ')");

// ─── 8. Injury field names: inj.name→inj.player, inj.reason→inj.note ────────
src = src.replace(/inj\.name\b/g, 'inj.player');
src = src.replace(/inj\.reason\b/g, 'inj.note');

// ─── 9. nextMatch: nm.preview_points, nm.prediction ─────────────────────────
// Replace preview_points block with teaser
src = src.replace(
  /\$\{nm\.preview_points\.map\(pt => `[\s\S]*?`\)\.join\(''\)\}/,
  `<div style="font-size:0.72rem;color:var(--txt2);line-height:1.7">\${nm.teaser||''}</div>`
);
// Replace nm.prediction.* with direct fields
src = src.replace(/\$\{nm\.prediction\.home_win\}%/g, '${nm.home_win}%');
src = src.replace(/\$\{nm\.prediction\.draw\}%/g,     '${nm.draw||0}%');
src = src.replace(/\$\{nm\.prediction\.away_win\}%/g,  '${nm.away_win}%');
src = src.replace(/\$\{nm\.prediction\.score\}/g,       '${nm.predicted_score}');

// ─── 10. nm.home.fifaRank → nm.home.fifaRank (already correct in data) ──────
// data has fifaRank, keep as is

fs.writeFileSync('D:/worldcup2026/js/matches-app.js', src, 'utf8');

// Verify
try { new Function(src); console.log('✅ Syntax OK'); }
catch(e) { console.error('❌ Syntax error:', e.message); }

// Quick check remaining problem patterns
const checks = ['stars.map','predicted_score.','p.xG.','key_factors.map','score_distribution','last5.map',
  'preview_points.map','nm.prediction.','fifa_since','bias_notes','penalties_per_game'];
checks.forEach(c => {
  if(src.includes(c)) console.log('⚠ Still found:', c);
});
console.log('Done. Size:', fs.statSync('D:/worldcup2026/js/matches-app.js').size);
