// ============================================================
//  2026 WC — Today's Matches App Logic
// ============================================================

const FLAG = iso => `https://flagcdn.com/w40/${iso.toLowerCase()}.png`;

// ── Live Update Simulation ─────────────────────────────────
let secondsAgo = 0;
function startLiveTimer() {
  const el = document.getElementById('last-updated');
  if (!el) return;
  const base = new Date(MATCH_DATA.lastUpdated);
  setInterval(() => {
    const diff = Math.round((Date.now() - base) / 60000);
    el.textContent = diff < 1 ? 'just now' : `${diff} min ago`;
  }, 10000);
  el.textContent = 'just now';
}

// ── Breaking News Ticker ───────────────────────────────────
function renderTicker() {
  const ticker = document.getElementById('ticker-inner');
  const tagColors = { INJURY:'#ff4455', RUMOR:'#ffd700', LINEUP:'#00e5ff', OFFICIAL:'#00ff88', REFEREE:'#bb88ff' };
  const items = MATCH_DATA.breakingNews.map(n =>
    `<span class="tick-item">
      <span class="tick-tag" style="background:${tagColors[n.tag]||'#888'}">${n.tag}</span>
      <span class="tick-time">${n.time}</span>
      ${n.text}
    </span>`
  ).join('<span class="tick-sep">◆</span>');
  ticker.innerHTML = items + '<span class="tick-sep">◆</span>' + items;
}

// ── Refresh Simulation ─────────────────────────────────────
function simulateRefresh() {
  const btn = document.getElementById('refresh-btn');
  btn.textContent = 'Updating...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Refreshed!';
    document.getElementById('last-updated').textContent = 'just now';
    const dot = document.getElementById('live-dot');
    if (dot) { dot.style.animation = 'none'; setTimeout(() => dot.style.animation = '', 100); }
    setTimeout(() => { btn.textContent = 'Refresh Data'; btn.disabled = false; }, 2000);
  }, 1800);
}

// ── Injury Status Badge ────────────────────────────────────
function injuryBadge(status) {
  const map = { OUT:'#ff4455', DOUBT:'#ffd700', FIT:'#00ff88' };
  return `<span style="font-size:0.58rem;font-weight:700;letter-spacing:1px;padding:0.12rem 0.4rem;border-radius:2px;background:${map[status]||'#888'}22;color:${map[status]||'#888'};border:1px solid ${map[status]||'#888'}44">${status}</span>`;
}

// ── Form Dots ──────────────────────────────────────────────
function formDots(form) {
  return form.map(r => `<span style="width:9px;height:9px;border-radius:50%;background:${r==='W'?'#00ff88':r==='D'?'rgba(255,255,255,0.25)':'#ff4455'};display:inline-block;"></span>`).join('');
}

// ── Head to Head Bar ───────────────────────────────────────
function h2hBar(h2h, homeName, awayName) {
  const total = h2h.all_time.home_wins + h2h.all_time.draws + h2h.all_time.away_wins || 1;
  const hw = Math.round(h2h.all_time.home_wins / total * 100);
  const dw = Math.round(h2h.all_time.draws / total * 100);
  const aw = 100 - hw - dw;
  return `
    <div style="margin-bottom:0.75rem">
      <div style="display:flex;justify-content:space-between;font-size:0.72rem;margin-bottom:4px">
        <span style="color:var(--cyan);font-weight:700">${homeName} ${h2h.all_time.home_wins}W</span>
        <span style="color:var(--txt2)">${h2h.all_time.draws}D</span>
        <span style="color:var(--red);font-weight:700">${h2h.all_time.away_wins}W ${awayName}</span>
      </div>
      <div style="display:flex;height:7px;border-radius:4px;overflow:hidden">
        <div style="width:${hw}%;background:var(--cyan)"></div>
        <div style="width:${dw}%;background:rgba(255,255,255,0.15)"></div>
        <div style="width:${aw}%;background:var(--red)"></div>
      </div>
    </div>
    <div style="font-size:0.72rem;color:var(--txt2);line-height:1.6">${h2h.notes}</div>
    <div style="margin-top:0.75rem">
      <div style="font-size:0.62rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.6rem">近期交手记录</div>
      <!-- 表头 -->
      <div style="display:grid;grid-template-columns:60px 1fr auto auto;gap:0.4rem;font-size:0.58rem;color:rgba(122,143,181,0.5);text-transform:uppercase;letter-spacing:1px;padding:0 0 0.3rem 0;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:0.3rem">
        <span>年份</span><span>赛事</span><span style="text-align:center">比分</span><span style="text-align:right">举办地</span>
      </div>
      ${h2h.last10.slice(0,5).map(g => {
        const venueLabel = g.venue === 'Neutral' ? '中立场' : g.venue === homeName ? `${homeName}主场` : `${g.venue}主场`;
        const venueColor = g.venue === 'Neutral' ? 'var(--txt2)' : g.venue === homeName ? 'var(--cyan)' : 'var(--red)';
        return `
        <div style="display:grid;grid-template-columns:60px 1fr auto auto;gap:0.4rem;font-size:0.72rem;padding:0.3rem 0;border-bottom:1px solid rgba(255,255,255,0.04);align-items:center">
          <span style="color:var(--txt2)">${g.year}</span>
          <span style="color:var(--txt)">${g.comp}</span>
          <span style="font-weight:700;color:var(--gold);font-variant-numeric:tabular-nums;text-align:center">${g.score}</span>
          <span style="font-size:0.62rem;color:${venueColor};text-align:right;white-space:nowrap">${venueLabel}</span>
        </div>`;
      }).join('')}
      <div style="font-size:0.65rem;color:rgba(122,143,181,0.45);margin-top:0.5rem">※ 举办地说明：「主场」指该队在本国踢 ·「中立场」指第三地举办</div>
    </div>`;
}

// ── Score Distribution ─────────────────────────────────────
function scoreDistribution(dist) {
  const max = Math.max(...dist.map(d => d.prob));
  return `<div style="display:flex;flex-wrap:wrap;gap:0.4rem">
    ${dist.map(d => `
      <div style="text-align:center;min-width:52px">
        <div style="font-size:0.7rem;font-weight:700;color:${d.prob===max?'var(--gold)':'var(--txt2)'}">
          ${d.score}
        </div>
        <div style="height:${Math.round(d.prob/max*50)+8}px;background:${d.prob===max?'var(--gold)':'rgba(255,255,255,0.1)'};border-radius:2px 2px 0 0;margin-top:2px;transition:height 0.5s"></div>
        <div style="font-size:0.65rem;color:var(--txt2)">${d.prob}%</div>
      </div>`).join('')}
  </div>`;
}

// ── Render Single Match ────────────────────────────────────
function renderMatch(m) {
  const p = m.prediction;
  const tag = (label, color) => `<span style="font-size:0.58rem;letter-spacing:1.5px;text-transform:uppercase;padding:0.12rem 0.5rem;border-radius:2px;background:${color}22;color:${color};border:1px solid ${color}44;font-weight:700">${label}</span>`;

  return `
  <div class="match-full-card fade-in">
    <!-- MATCH HEADER -->
    <div class="mf-header">
      <div class="mf-meta">
        ${tag('GROUP ' + m.group, '#00e5ff')}
        ${tag('MATCHDAY ' + m.matchday, '#888888')}
        <span style="font-size:0.72rem;color:var(--txt2)">${m.venue} · ${m.city}</span>
      </div>
      <div class="mf-kickoff">${m.time} <span style="font-size:0.65rem;color:var(--txt2)">${m.timezone}</span></div>
    </div>

    <!-- TEAMS HERO ROW -->
    <div class="mf-teams-hero">
      <div class="mf-team-side">
        <img src="${FLAG(m.home.iso)}" class="mf-flag" alt="${m.home.name}" onerror="this.style.display='none'">
        <div class="mf-team-name">${m.home.name}</div>
        <div class="mf-team-rating">Rating <strong style="color:var(--cyan)">${m.home.rating}</strong></div>
        <div class="mf-team-form">${formDots(m.home.form)}</div>
      </div>
      <div class="mf-vs-col">
        <div class="mf-vs-text">VS</div>
        <div class="mf-prob-trio">
          <div><span style="color:var(--cyan);font-size:1.2rem;font-weight:800">${p.home_win}%</span><br><span style="font-size:0.6rem;color:var(--txt2)">${m.home.name} 胜</span></div>
          <div><span style="color:var(--txt2);font-size:1.1rem;font-weight:700">${p.draw}%</span><br><span style="font-size:0.6rem;color:var(--txt2)">平局</span></div>
          <div><span style="color:var(--red);font-size:1.2rem;font-weight:800">${p.away_win}%</span><br><span style="font-size:0.6rem;color:var(--txt2)">${m.away.name} 胜</span></div>
        </div>
        <div style="display:flex;height:5px;border-radius:3px;overflow:hidden;margin-top:0.5rem;width:180px">
          <div style="width:${p.home_win}%;background:var(--cyan)"></div>
          <div style="width:${p.draw}%;background:rgba(255,255,255,0.15)"></div>
          <div style="width:${p.away_win}%;background:var(--red)"></div>
        </div>
        <div style="margin-top:0.75rem;text-align:center">
          <div style="font-size:0.6rem;letter-spacing:2px;color:var(--txt2);text-transform:uppercase;margin-bottom:0.25rem">预测比分</div>
          <div style="font-size:2rem;font-weight:800;color:var(--gold);font-variant-numeric:tabular-nums">${p.predicted_score.home} — ${p.predicted_score.away}</div>
          <div style="font-size:0.62rem;color:var(--txt2)">期望进球 xG：${p.xG.home} — ${p.xG.away}</div>
          <div style="font-size:0.62rem;color:var(--txt2);margin-top:0.2rem">模型置信度：<strong style="color:${p.confidence>=80?'#00ff88':p.confidence>=60?'#ffd700':'#ff8855'}">${p.confidence}%</strong></div>
        </div>
      </div>
      <div class="mf-team-side mf-team-right">
        <img src="${FLAG(m.away.iso)}" class="mf-flag" alt="${m.away.name}" onerror="this.style.display='none'">
        <div class="mf-team-name">${m.away.name}</div>
        <div class="mf-team-rating">Rating <strong style="color:var(--red)">${m.away.rating}</strong></div>
        <div class="mf-team-form">${formDots(m.away.form)}</div>
      </div>
    </div>

    <!-- 4-COLUMN DETAIL GRID -->
    <div class="mf-detail-grid">

      <!-- STAR PLAYERS HOME -->
      <div class="mf-panel">
        <div class="mf-panel-label" style="color:var(--cyan)">⭐ ${m.home.name} 核心球员</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">本场最具威胁的球员 — 包含位置、所在俱乐部、近期状态与赛前特别说明</div>
        ${m.home.stars.map(s => `
          <div class="star-row">
            <div style="flex:1">
              <div style="font-size:0.85rem;font-weight:700">${s.name}</div>
              <div style="font-size:0.68rem;color:var(--txt2)">${s.pos}位 · ${s.club}</div>
              <div style="font-size:0.68rem;color:var(--txt2)">赛季数据：${s.stat}</div>
              <div style="font-size:0.7rem;color:var(--txt);margin-top:0.15rem">📌 ${s.notable}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:0.62rem;color:var(--txt2);margin-bottom:2px">近期状态</div>
              <span style="font-size:0.75rem;white-space:nowrap">${s.form}</span>
            </div>
          </div>`).join('')}
      </div>

      <!-- STAR PLAYERS AWAY -->
      <div class="mf-panel">
        <div class="mf-panel-label" style="color:var(--red)">⭐ ${m.away.name} 核心球员</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">本场最具威胁的球员 — 包含位置、所在俱乐部、近期状态与赛前特别说明</div>
        ${m.away.stars.map(s => `
          <div class="star-row">
            <div style="flex:1">
              <div style="font-size:0.85rem;font-weight:700">${s.name}</div>
              <div style="font-size:0.68rem;color:var(--txt2)">${s.pos}位 · ${s.club}</div>
              <div style="font-size:0.68rem;color:var(--txt2)">赛季数据：${s.stat}</div>
              <div style="font-size:0.7rem;color:var(--txt);margin-top:0.15rem">📌 ${s.notable}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:0.62rem;color:var(--txt2);margin-bottom:2px">近期状态</div>
              <span style="font-size:0.75rem;white-space:nowrap">${s.form}</span>
            </div>
          </div>`).join('')}
      </div>

      <!-- H2H -->
      <div class="mf-panel">
        <div class="mf-panel-label">📊 历史交锋记录（H2H）</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">两队历史上所有正式比赛的胜负统计，以及近 5 次对阵的具体比分与赛事名称</div>
        ${h2hBar(m.h2h, m.home.name, m.away.name)}
      </div>

      <!-- REFEREE -->
      <div class="mf-panel">
        <div class="mf-panel-label">🧑‍⚖️ 本场裁判分析</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">执法本场的裁判员资料 — 含平均出牌率、判罚风格与潜在偏向分析，对预测有直接影响</div>
        <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
          <img src="${FLAG(m.referee.iso)}" style="width:28px;height:19px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
          <div>
            <div style="font-weight:700;font-size:0.9rem">${m.referee.name}</div>
            <div style="font-size:0.68rem;color:var(--txt2)">${m.referee.nationality} · FIFA since ${m.referee.fifa_since}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem;margin-bottom:0.75rem">
          <div style="text-align:center;background:rgba(255,215,0,0.06);border:1px solid rgba(255,215,0,0.15);border-radius:4px;padding:0.4rem">
            <div style="font-size:1.1rem;font-weight:800;color:var(--gold)">${m.referee.yellows_per_game}</div>
            <div style="font-size:0.58rem;color:var(--txt2)">Yellow/Game</div>
          </div>
          <div style="text-align:center;background:rgba(255,68,85,0.06);border:1px solid rgba(255,68,85,0.15);border-radius:4px;padding:0.4rem">
            <div style="font-size:1.1rem;font-weight:800;color:var(--red)">${m.referee.reds_per_game}</div>
            <div style="font-size:0.58rem;color:var(--txt2)">Red/Game</div>
          </div>
          <div style="text-align:center;background:rgba(0,229,255,0.06);border:1px solid rgba(0,229,255,0.15);border-radius:4px;padding:0.4rem">
            <div style="font-size:1.1rem;font-weight:800;color:var(--cyan)">${m.referee.penalties_per_game}</div>
            <div style="font-size:0.58rem;color:var(--txt2)">Pen/Game</div>
          </div>
        </div>
        <div style="font-size:0.72rem;color:var(--txt2);line-height:1.6;margin-bottom:0.5rem">${m.referee.style}</div>
        <div style="font-size:0.7rem;background:rgba(255,215,0,0.05);border:1px solid rgba(255,215,0,0.15);border-radius:3px;padding:0.5rem;color:var(--gold);line-height:1.5">
          ⚠ ${m.referee.bias_notes}
        </div>
      </div>

      <!-- INJURIES HOME -->
      <div class="mf-panel">
        <div class="mf-panel-label" style="color:var(--red)">🏥 ${m.home.name} — 伤病 & 更衣室动态</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">赛前确认的伤病停赛信息（红色 = 确认缺阵 / 黄色 = 存疑），以及来自训练营的内部传言</div>
        ${m.home.injuries.map(inj => `
          <div style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem;padding:0.5rem;background:rgba(255,68,85,0.05);border-radius:3px;border:1px solid rgba(255,68,85,0.12)">
            ${injuryBadge(inj.status)}
            <div>
              <div style="font-size:0.8rem;font-weight:600">${inj.name}</div>
              <div style="font-size:0.67rem;color:var(--txt2)">${inj.reason}</div>
              ${inj.confirmed ? '<span style="font-size:0.6rem;color:#ff4455">● Officially confirmed</span>' : '<span style="font-size:0.6rem;color:#ffd700">● Unconfirmed report</span>'}
            </div>
          </div>`).join('')}
        <div style="margin-top:0.6rem">
          <div style="font-size:0.6rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.4rem">Camp Rumors</div>
          ${m.home.rumors.map(r => `<div style="font-size:0.7rem;color:var(--txt2);line-height:1.55;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.04)">💬 ${r}</div>`).join('')}
        </div>
      </div>

      <!-- INJURIES AWAY -->
      <div class="mf-panel">
        <div class="mf-panel-label" style="color:var(--red)">🏥 ${m.away.name} — 伤病 & 更衣室动态</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">赛前确认的伤病停赛信息（红色 = 确认缺阵 / 黄色 = 存疑），以及来自训练营的内部传言</div>
        ${m.away.injuries.map(inj => `
          <div style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem;padding:0.5rem;background:rgba(255,68,85,0.05);border-radius:3px;border:1px solid rgba(255,68,85,0.12)">
            ${injuryBadge(inj.status)}
            <div>
              <div style="font-size:0.8rem;font-weight:600">${inj.name}</div>
              <div style="font-size:0.67rem;color:var(--txt2)">${inj.reason}</div>
              ${inj.confirmed ? '<span style="font-size:0.6rem;color:#ff4455">● Officially confirmed</span>' : '<span style="font-size:0.6rem;color:#ffd700">● Unconfirmed report</span>'}
            </div>
          </div>`).join('')}
        <div style="margin-top:0.6rem">
          <div style="font-size:0.6rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.4rem">Camp Rumors</div>
          ${m.away.rumors.map(r => `<div style="font-size:0.7rem;color:var(--txt2);line-height:1.55;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.04)">💬 ${r}</div>`).join('')}
        </div>
      </div>

      <!-- KEY FACTORS -->
      <div class="mf-panel">
        <div class="mf-panel-label">🔑 综合预测关键因素</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">模型判断本场胜负最重要的几个变量 — 这些因素已纳入上方的胜率计算中</div>
        ${p.key_factors.map((f,i) => `
          <div style="display:flex;gap:0.5rem;margin-bottom:0.6rem;font-size:0.75rem;line-height:1.55;padding:0.4rem;background:rgba(255,255,255,0.03);border-radius:3px;border-left:2px solid var(--gold)">
            <span style="color:var(--gold);font-weight:700;flex-shrink:0">${i+1}.</span>
            <span>${f}</span>
          </div>`).join('')}
      </div>

      <!-- SCORE DISTRIBUTION -->
      <div class="mf-panel">
        <div class="mf-panel-label">📈 本场比分概率分布</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">
          模型预测<strong style="color:var(--txt)">本场比赛</strong>各种比分出现的概率。<span style="color:var(--gold)">金色柱</span>为最可能比分，柱越高概率越大。<br>
          注：与裁判无关，纯为本场进球数量的概率预测。
        </div>
        ${scoreDistribution(p.score_distribution)}
        <div style="margin-top:1.25rem">
          <div style="font-size:0.62rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.5rem">📋 ${m.home.name} 近5场战绩</div>
          ${m.home.last5.map(g => `
            <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.7rem;padding:0.25rem 0;border-bottom:1px solid rgba(255,255,255,0.04)">
              <span style="color:var(--txt2)">${g.date} vs <strong style="color:var(--txt)">${g.opp}</strong></span>
              <span style="display:flex;align-items:center;gap:0.35rem">
                <span style="font-variant-numeric:tabular-nums;font-weight:700">${g.score}</span>
                <span style="font-size:0.6rem;font-weight:700;padding:0.08rem 0.3rem;border-radius:2px;background:${g.result==='W'?'rgba(0,255,136,0.15)':g.result==='D'?'rgba(255,255,255,0.08)':'rgba(255,68,85,0.15)'};color:${g.result==='W'?'var(--green)':g.result==='D'?'var(--txt2)':'var(--red)'}">${g.result==='W'?'胜':g.result==='D'?'平':'负'}</span>
              </span>
            </div>`).join('')}
        </div>
      </div>

    </div><!-- end detail grid -->
  </div>`;
}

// ── Render Next Match Preview ──────────────────────────────
function renderNextMatch() {
  const nm = MATCH_DATA.nextMatch;
  const cont = document.getElementById('next-match-card');
  cont.innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1.25rem">
      <div style="display:flex;align-items:center;gap:0.6rem">
        <img src="${FLAG(nm.home.iso)}" style="width:44px;height:30px;object-fit:cover;border-radius:3px" onerror="this.style.opacity='0'">
        <div>
          <div style="font-size:1rem;font-weight:700">${nm.home.name}</div>
          <div style="font-size:0.68rem;color:var(--txt2)">FIFA #${nm.home.fifaRank} · Rating ${nm.home.rating}</div>
        </div>
      </div>
      <div style="flex:1;text-align:center;min-width:120px">
        <div style="font-size:0.65rem;letter-spacing:2px;text-transform:uppercase;color:var(--gold)">Group ${nm.group} · Tomorrow</div>
        <div style="font-size:1.6rem;font-weight:800;color:var(--gold);margin:0.25rem 0">${nm.time}</div>
        <div style="font-size:0.7rem;color:var(--txt2)">${nm.venue} · ${nm.city}</div>
      </div>
      <div style="display:flex;align-items:center;gap:0.6rem;text-align:right">
        <div>
          <div style="font-size:1rem;font-weight:700">${nm.away.name}</div>
          <div style="font-size:0.68rem;color:var(--txt2)">FIFA #${nm.away.fifaRank} · Rating ${nm.away.rating}</div>
        </div>
        <img src="${FLAG(nm.away.iso)}" style="width:44px;height:30px;object-fit:cover;border-radius:3px" onerror="this.style.opacity='0'">
      </div>
    </div>
    <p style="font-size:0.82rem;color:var(--txt2);line-height:1.7;margin-bottom:1rem">${nm.teaser}</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:0.5rem;margin-bottom:1rem">
      ${nm.preview_points.map(pt => `<div style="font-size:0.72rem;color:var(--txt2);display:flex;gap:0.4rem;line-height:1.5"><span style="color:var(--gold);flex-shrink:0">→</span>${pt}</div>`).join('')}
    </div>
    <div style="background:rgba(255,215,0,0.05);border:1px solid rgba(255,215,0,0.2);border-radius:4px;padding:0.75rem;display:flex;gap:2rem;flex-wrap:wrap;align-items:center">
      <div style="text-align:center"><div style="font-size:0.6rem;color:var(--txt2);letter-spacing:1px">主队胜率</div><div style="font-size:1.4rem;font-weight:800;color:var(--cyan)">${nm.prediction.home_win}%</div></div>
      <div style="text-align:center"><div style="font-size:0.6rem;color:var(--txt2);letter-spacing:1px">平局概率</div><div style="font-size:1.4rem;font-weight:800;color:var(--txt2)">${nm.prediction.draw}%</div></div>
      <div style="text-align:center"><div style="font-size:0.6rem;color:var(--txt2);letter-spacing:1px">冷门概率</div><div style="font-size:1.4rem;font-weight:800;color:var(--red)">${nm.prediction.away_win}%</div></div>
      <div style="margin-left:auto;text-align:right"><div style="font-size:0.6rem;color:var(--txt2);letter-spacing:1px;margin-bottom:0.2rem">预测比分</div><div style="font-size:2rem;font-weight:800;color:var(--gold)">${nm.prediction.score}</div></div>
    </div>`;
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
  startLiveTimer();

  const cont = document.getElementById('matches-container');
  MATCH_DATA.todayMatches.forEach(m => {
    cont.innerHTML += renderMatch(m);
    cont.innerHTML += '<div style="height:2rem"></div>';
  });

  renderNextMatch();

  // Scroll fade
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05 });
  setTimeout(() => document.querySelectorAll('.fade-in').forEach(el => obs.observe(el)), 200);

  document.getElementById('refresh-btn').addEventListener('click', simulateRefresh);
});
