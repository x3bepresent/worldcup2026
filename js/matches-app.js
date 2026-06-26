// ============================================================
//  2026 WC — Today's Matches App Logic
// ============================================================

const FLAG = iso => iso ? `flags/${iso.toLowerCase()}.png` : '';

/** 与 index.html #methodology 口径一致 */
const MODEL_TAGLINE = '100,000 次蒙特卡洛模拟 — 综合 Elo 评级、xG 数据、阵容深度与历史战绩加权计算';
const MODEL_SUBLINE = '基于 Elo 评级、xG 期望进球、100,000 次蒙特卡洛模拟及多维度大数据模型';
const PLAY_NOTE_STD = '本站所有胜率、比分均为模型娱乐推演结果，不代表真实赛果，仅供交流娱乐。';

/**
 * 模型推演概要板块 — 页面显示开关
 * false：暂不渲染（数据与脚本仍照常生成，改 true 即恢复显示）
 */
const SHOW_DEPTH_CALIBRATION_PANEL = true;

function isPending(obj) {
  return typeof DATA_INTEGRITY !== 'undefined' && DATA_INTEGRITY.isPending(obj);
}

function matchPendingFactors(m) {
  return typeof DATA_INTEGRITY !== 'undefined' ? DATA_INTEGRITY.matchPendingFactors(m) : [];
}

function pendingBanner(m) {
  const factors = matchPendingFactors(m);
  if (!factors.length) return '';
  return `
    <div style="margin:0 0 1rem;padding:0.65rem 1rem;background:rgba(200,169,110,0.08);border:1px solid rgba(200,169,110,0.25);border-radius:4px;font-size:0.84rem;color:var(--gold);line-height:1.6">
      ⏳ 以下信息尚未完全官方确认：<strong>${factors.join('、')}</strong>。对应栏目显示「等待官方确认」或标注「预测参考」，相关细节暂不纳入推演权重。
    </div>`;
}

function renderLineupPanel(m) {
  const lu = m.lineup;
  if (!lu) return '';
  const label = '首发阵容 · Lineups';
  if (isPending(lu)) {
    const pred = lu.predicted;
    return `
      <div class="mf-panel">
        ${panelLabel(label, 'gold')}
        ${panelLegend('仅展示 FIFA / 球队官方确认的首发。未确认前不使用占位数据充数。')}
        <div class="intel-card intel-card--gold" style="margin-bottom:0.75rem">
          <div style="font-size:0.92rem;font-weight:700;color:var(--gold)">${DATA_INTEGRITY?.PENDING_LABEL || '等待官方确认'}</div>
          <div class="intel-body" style="margin-top:0.35rem">${lu.note || '官方首发名单尚未公布。'}</div>
        </div>
        ${pred ? `
        ${intelSubhead('媒体预测参考（非官方 · 不计入已确认推演)', { caps: true })}
        <div class="intel-body" style="line-height:1.65">
          <div><strong style="color:var(--cyan)">${m.home.name}</strong> ${pred.formation || ''}</div>
          <div style="margin:0.25rem 0 0.5rem;padding-left:0.5rem;color:var(--txt)">${pred.home}</div>
          <div><strong style="color:var(--red)">${m.away.name}</strong></div>
          <div style="margin:0.25rem 0;padding-left:0.5rem;color:var(--txt)">${pred.away}</div>
          ${pred.source ? `<div style="font-size:0.74rem;color:rgba(255,255,255,0.35);margin-top:0.35rem">来源：${pred.source}</div>` : ''}
        ${pred.alt ? `
        <div style="margin-top:0.75rem;padding-top:0.65rem;border-top:1px solid rgba(255,255,255,0.06)">
          ${intelSubhead('备选预测（非官方）', { caps: true })}
          <div class="intel-body" style="line-height:1.65">
            <div><strong style="color:var(--cyan)">${m.home.name}</strong> ${pred.alt.formation || ''}</div>
            <div style="margin:0.25rem 0 0.5rem;padding-left:0.5rem;color:var(--txt)">${pred.alt.home}</div>
            <div><strong style="color:var(--red)">${m.away.name}</strong></div>
            <div style="margin:0.25rem 0;padding-left:0.5rem;color:var(--txt)">${pred.alt.away}</div>
            ${pred.alt.source ? `<div style="font-size:0.74rem;color:rgba(255,255,255,0.35);margin-top:0.35rem">来源：${pred.alt.source}</div>` : ''}
          </div>
        </div>` : ''}
        </div>` : ''}
      </div>`;
  }
  return `
    <div class="mf-panel">
      ${panelLabel(label, 'gold')}<span class="intel-status intel-status--ok"> ● 已确认</span>
      <div class="intel-body" style="line-height:1.65">
        <div style="margin-bottom:0.5rem"><strong>${lu.formation || ''}</strong></div>
        <div><strong style="color:var(--cyan)">${m.home.name}</strong>：${lu.home}</div>
        <div style="margin-top:0.35rem"><strong style="color:var(--red)">${m.away.name}</strong>：${lu.away}</div>
        ${lu.note ? `<div style="font-size:0.76rem;color:var(--txt2);margin-top:0.5rem;line-height:1.55">${lu.note}</div>` : ''}
        ${lu.diff ? `
        <div class="intel-card intel-card--neutral" style="margin-top:0.65rem;border-left:2px solid var(--gold)">
          <div style="font-weight:700;color:var(--gold);margin-bottom:0.25rem;font-size:0.72rem">与预测对比</div>
          <div>${lu.diff.home || ''}</div>
          <div style="margin-top:0.25rem">${lu.diff.away || ''}</div>
        </div>` : ''}
        ${lu.source ? `<div style="font-size:0.74rem;color:rgba(255,255,255,0.35);margin-top:0.5rem">来源：${lu.source}</div>` : ''}
      </div>
    </div>`;
}

function renderRefereePanel(ref) {
  if (isPending(ref)) {
    return `
        ${panelLegend('执法本场的裁判员资料。未获 FIFA 官方确认前，不展示虚假姓名或统计数据。')}
        <div class="intel-card intel-card--gold" style="margin-bottom:0.75rem">
          <div style="font-size:1rem;font-weight:700;color:var(--gold)">${ref.name || (DATA_INTEGRITY?.PENDING_LABEL || '等待官方确认')}</div>
          <div class="intel-body" style="margin-top:0.4rem">${ref.bias_note || ''}</div>
        </div>
        <div class="intel-body">
          ${(ref.tendencies || []).map(t => `· ${t}`).join('<br>')}
        </div>
        <div class="intel-footnote">裁判数据待确认 · 当前推演未纳入执法风格权重</div>`;
  }
  return `
        ${panelLegend('执法资料 — 平均出牌率、判罚风格与潜在偏向分析。<strong>已官方确认</strong>，已纳入推演参考。')}
        <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
          <img src="${FLAG((ref.iso||'un'))}" style="width:28px;height:19px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
          <div>
            <div style="font-weight:700;font-size:1rem">${ref.name}</div>
            <div style="font-size:0.8rem;color:var(--txt2)">${ref.nation}${ref.wc_experience ? ' · ' + ref.wc_experience : ' · FIFA 执法'}${ref.source ? ' · ' + ref.source : ''}</div>
          </div>
        </div>
        ${refereeQuantPanel(ref)}`;
}

const TEAM_CANON = {
  'mexico': 'Mexico', 'south africa': 'South Africa',
  'korea republic': 'South Korea', 'south korea': 'South Korea',
  'czechia': 'Czechia', 'czech republic': 'Czechia',
};
function canonTeam(n) {
  if (!n) return '';
  return TEAM_CANON[n.toLowerCase().trim()] || n;
}

function getLastSyncTime(src) {
  const times = [src?.lastUpdated || (typeof MATCH_DATA !== 'undefined' ? MATCH_DATA.lastUpdated : null)];
  if (!src && typeof LIVE_DATA !== 'undefined' && LIVE_DATA.lastUpdated) times.push(LIVE_DATA.lastUpdated);
  return new Date(Math.max(...times.filter(Boolean).map(t => new Date(t).getTime())));
}

function startLiveTimer(src) {
  const el = document.getElementById('last-updated');
  if (!el) return;
  const base = getLastSyncTime(src);
  const tick = () => {
    const diff = Math.round((Date.now() - base) / 60000);
    if (diff < 1) el.textContent = '刚刚同步';
    else if (diff < 60) el.textContent = `${diff} 分钟前`;
    else el.textContent = `${Math.floor(diff / 60)} 小时前`;
  };
  tick();
  setInterval(tick, 10000);
}

function findLiveFixture(m) {
  if (typeof LIVE_DATA === 'undefined' || !LIVE_DATA.fixtures) return null;
  return LIVE_DATA.fixtures.find(f =>
    canonTeam(f.home) === m.home.name && canonTeam(f.away) === m.away.name
  ) || null;
}

function mergeLiveIntoMatch(m) {
  const live = findLiveFixture(m);
  if (!live) return m;
  const copy = JSON.parse(JSON.stringify(m));
  const finished = ['FT', 'AET', 'PEN'].includes(live.status);
  if (live.home_score != null && live.away_score != null) {
    copy.actualResult = {
      home_score: live.home_score,
      away_score: live.away_score,
      status: live.status,
      label: finished ? '全场结束' : live.status === 'HT' ? '中场' : live.status,
      elapsed: live.elapsed,
    };
  }
  copy._liveStatus = live.status;
  return copy;
}

// ── Breaking News Ticker ───────────────────────────────────
function renderTicker(newsSource) {
  const ticker = document.getElementById('ticker-inner');
  if (!ticker) return;
  const tagColors = { INJURY:'#D95F6A', RUMOR:'#C8A96E', LINEUP:'#7BB8D4', OFFICIAL:'#5BBF8A', REFEREE:'#bb88ff' };
  const tagCN = { INJURY:'伤情', RUMOR:'传言', LINEUP:'阵容', OFFICIAL:'官方', REFEREE:'裁判' };
  const news = newsSource || (typeof MATCH_DATA !== 'undefined' ? MATCH_DATA.breakingNews : []);
  const items = news.map(n =>
    `<span class="tick-item">
      <span class="tick-tag" style="background:${tagColors[n.tag]||'#888'}" title="${n.tag}">${tagCN[n.tag]||n.tag}</span>
      <span class="tick-time" style="opacity:0.55">${n.time}</span>
      ${n.text}
    </span>`
  ).join('<span class="tick-sep">◆</span>');
  ticker.innerHTML = items + '<span class="tick-sep">◆</span>' + items;
}

function refreshData() {
  const btn = document.getElementById('refresh-btn');
  btn.textContent = '刷新中…';
  btn.disabled = true;
  location.reload();
}

// ── Injury Status Badge ────────────────────────────────────
function injuryBadge(status) {
  const map = { OUT:'#D95F6A', DOUBT:'#C8A96E', FIT:'#5BBF8A' };
  return `<span style="font-size:0.64rem;font-weight:800;letter-spacing:0.5px;padding:0.12rem 0.4rem;border-radius:2px;background:${map[status]||'#888'}22;color:${map[status]||'#888'};border:1px solid ${map[status]||'#888'}44">${status}</span>`;
}

function panelLabel(title, tone) {
  const cls = tone ? ` mf-panel-label--${tone}` : '';
  return `<div class="mf-panel-label${cls}">${title}</div>`;
}

function panelLegend(html) {
  return `<div class="intel-legend">${html}</div>`;
}

function intelSubhead(text, opts = {}) {
  const mods = [
    opts.caps && 'intel-subhead--caps',
    opts.cyan && 'intel-subhead--cyan',
    opts.gold && 'intel-subhead--gold',
  ].filter(Boolean).join(' ');
  return `<div class="intel-subhead${mods ? ' ' + mods : ''}">${text}</div>`;
}

function intelFootnote(text) {
  return `<div class="intel-footnote">${text}</div>`;
}

function formatDisplayScore(score) {
  if (score == null || score === '') return '—';
  return String(score).replace(/\s*[-–—]\s*/g, ' – ');
}

function confidenceColor(pct) {
  if (pct >= 80) return '#5BBF8A';
  if (pct >= 60) return '#C8A96E';
  return '#ff8855';
}

function renderTerminalTeamSide(team, side) {
  const isHome = side === 'home';
  const iso = (team.iso || '').toUpperCase();
  const metaClass = isHome ? 'mf-terminal-meta--home' : 'mf-terminal-meta--away';
  return `
    <div class="mf-terminal-side mf-terminal-side--${side}">
      <div class="mf-terminal-flag-wrap">
        <img src="${FLAG(team.iso)}" class="mf-terminal-flag" alt="${team.name}" onerror="this.parentElement.style.display='none'">
      </div>
      <div class="mf-terminal-identity">
        <div class="mf-terminal-name">${team.name}</div>
        <div class="mf-terminal-meta ${metaClass}">${iso ? iso + ' · ' : ''}实力指数 <strong>${team.rating ?? '—'}</strong></div>
      </div>
    </div>`;
}

function renderMatchHero(m, p, finished) {
  const confColor = confidenceColor(p.confidence);
  const upsetHtml = m.upset_alert ? (() => {
    const ua = m.upset_alert;
    const s = upsetLevelStyle(ua.level);
    return `<div class="mf-terminal-upset" style="background:${s.bg};border:1px solid ${s.border};color:${s.color}">
      爆冷 ${ua.level_cn || ua.level} · ${ua.favorite} 需防 ${ua.underdog}
    </div>`;
  })() : '';

  const top2 = getOutcomeTop2(p);
  const drawCoFav = isDrawCoFavorite(p);
  const top2Keys = new Set(top2.map(o => o.key));
  const top2Html = top2.length >= 2 ? `
        <div class="mf-terminal-top2${drawCoFav ? ' mf-terminal-top2--draw' : ''}">
          <span class="mf-terminal-top2-label">Top2</span>
          ${top2.map(o => `
            <span class="mf-terminal-top2-chip mf-terminal-top2-chip--${o.key}">${o.label} ${o.pct}%</span>`).join('')}
          ${drawCoFav ? '<span class="mf-terminal-top2-hint">平局与热门接近 · 勿只盯一方</span>' : ''}
        </div>` : '';

  const footnote = finished
    ? '官方赛果见上方核验区 · 此处为赛前模型冻结预测 · 仅供娱乐推演'
    : `模型娱乐推演 · ${PLAY_NOTE_STD}`;

  const oddsCellClass = (side) => {
    const base = `mf-terminal-odds-cell${top2Keys.has(side) ? ' mf-terminal-odds-cell--top2' : ''}`;
    return base;
  };

  return `
    <div class="mf-teams-hero">
      <div class="mf-terminal-teams">
        ${renderTerminalTeamSide(m.home, 'home')}
        <span class="mf-terminal-vs" aria-hidden="true">vs</span>
        ${renderTerminalTeamSide(m.away, 'away')}
      </div>

      <div class="mf-terminal-market">
        <div class="mf-terminal-market-row">
          <div class="${oddsCellClass('home')}">
            <span class="mf-terminal-odds-val mf-terminal-odds-val--home">${p.home_win}%</span>
            <span class="mf-terminal-odds-lbl">主胜</span>
          </div>
          <div class="${oddsCellClass('draw')}">
            <span class="mf-terminal-odds-val mf-terminal-odds-val--draw">${p.draw}%</span>
            <span class="mf-terminal-odds-lbl">平局</span>
          </div>
          <div class="${oddsCellClass('away')}">
            <span class="mf-terminal-odds-val mf-terminal-odds-val--away">${p.away_win}%</span>
            <span class="mf-terminal-odds-lbl">客胜</span>
          </div>
        </div>
        ${top2Html}
        <div class="mf-terminal-market-bar">
          <div style="width:${p.home_win}%;background:var(--cyan)"></div>
          <div style="width:${p.draw}%;background:rgba(255,255,255,0.15)"></div>
          <div style="width:${p.away_win}%;background:var(--red)"></div>
        </div>
      </div>

      <div class="mf-terminal-focus">
        <div class="mf-terminal-score-card">
          <div class="mf-terminal-score-label">${finished ? '赛前推介比分 Top3' : '娱乐推演比分 Top3'}</div>
          ${renderTerminalTop3Scores(p)}
          <div class="mf-terminal-score-meta">
            xG <span class="xg-home">${p.xg_poisson_home ?? p.xg_home}</span> – <span class="xg-away">${p.xg_poisson_away ?? p.xg_away}</span>
            ${p.xg_tier_calibrated ? ' · <span style="color:var(--txt2)">含深盘校准</span>' : ''}
            · 模型置信 <strong style="color:${confColor}">${p.confidence}%</strong>
          </div>
          ${upsetHtml}
        </div>
      </div>

      <div class="mf-terminal-footnote" title="${MODEL_TAGLINE}">※ ${footnote}</div>
    </div>`;
}

// ── Head to Head Bar ───────────────────────────────────────
function h2hBar(h2h, homeName, awayName) {
  const hw_val = h2h.home_wins || 0;
  const d_val  = h2h.draws    || 0;
  const aw_val = h2h.away_wins|| 0;
  const total  = (hw_val + d_val + aw_val) || 1;
  const hw = Math.round(hw_val / total * 100);
  const dw = Math.round(d_val  / total * 100);
  const aw = 100 - hw - dw;
  const recent = h2h.recent || h2h.last10 || [];

  const recentRows = recent.slice(0, 5).map(g => {
    const venueLabel = g.venue === 'Neutral' ? '中立场' : g.venue === homeName ? `${homeName}主场` : `${g.venue}主场`;
    const venueColor = g.venue === 'Neutral' ? 'var(--txt2)' : g.venue === homeName ? 'var(--cyan)' : 'var(--red)';
    return `
      <div class="intel-h2h-table-row">
        <span style="color:var(--txt2)">${g.year}</span>
        <span style="color:var(--txt)">${g.comp}</span>
        <span class="intel-h2h-score">${g.score}</span>
        <span style="font-size:0.74rem;color:${venueColor};text-align:right;white-space:nowrap">${venueLabel}</span>
      </div>`;
  }).join('');

  return `
    <div class="intel-h2h-stats">
      <span style="color:var(--cyan);font-weight:700">${homeName} ${hw_val}W</span>
      <span>${d_val}D</span>
      <span style="color:var(--red);font-weight:700">${aw_val}W ${awayName}</span>
    </div>
    <div class="intel-h2h-bar">
      <div style="width:${hw}%;background:var(--cyan)"></div>
      <div style="width:${dw}%;background:rgba(255,255,255,0.15)"></div>
      <div style="width:${aw}%;background:var(--red)"></div>
    </div>
    <div class="intel-body">${h2h.note || h2h.notes || ''}</div>
    <div class="intel-divider"></div>
    ${intelSubhead('近期交手记录', { caps: true })}
    <div class="intel-h2h-table-hdr">
      <span>年份</span><span>赛事</span><span style="text-align:center">比分</span><span style="text-align:right">举办地</span>
    </div>
    ${recentRows || '<div class="intel-body">暂无近期交手记录</div>'}
    ${intelFootnote('举办地说明：「主场」指该队在本国 ·「中立场」指第三地举办')}`;
}

// ── Weather Panel ─────────────────────────────────────────
function weatherPanel(w, homeName, awayName) {
  if (!w) return '';

  const impactColor = { HIGH:'#D95F6A', MEDIUM:'#C8A96E', LOW:'#5BBF8A' }[w.impact_level] || '#888';
  const tempC = w.temp_c || w.temp || 20;
  const tempF = w.temp_f || Math.round(tempC * 9/5 + 32);
  const altM  = w.altitude_m || w.altitude || 0;
  const windStr = w.wind || (w.wind_kmh != null ? w.wind_kmh + ' km/h' : '—');
  const condition = w.condition_cn || w.condition || '';
  const impactText = w.impact_summary || w.impact || '';
  const icon = w.icon || (altM > 2000 ? '⛰' : w.rain_chance > 50 ? '🌧' : w.rain_chance > 20 ? '⛅' : '☀');

  const homeAdaptScore = w.home_adapt != null ? w.home_adapt : 70;
  const awayAdaptScore = w.away_adapt != null ? w.away_adapt : 70;
  const homeAdaptColor = homeAdaptScore >= 80 ? '#5BBF8A' : homeAdaptScore >= 55 ? '#C8A96E' : '#D95F6A';
  const awayAdaptColor = awayAdaptScore >= 80 ? '#5BBF8A' : awayAdaptScore >= 55 ? '#C8A96E' : '#D95F6A';
  const homeAdaptLabel = homeAdaptScore >= 80 ? '高度适应' : homeAdaptScore >= 55 ? '一般适应' : '适应困难';
  const awayAdaptLabel = awayAdaptScore >= 80 ? '高度适应' : awayAdaptScore >= 55 ? '一般适应' : '适应困难';

  const adaptBar = (team, score, color, label, note) => `
    <div style="margin-bottom:0.75rem;padding:0.65rem;background:rgba(255,255,255,0.03);border-radius:4px;border-left:3px solid ${color}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem">
        <span style="font-size:0.92rem;font-weight:700">${team}</span>
        <div style="display:flex;align-items:center;gap:0.4rem">
          <div style="width:80px;height:5px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden">
            <div style="width:${score}%;height:100%;background:${color};border-radius:3px"></div>
          </div>
          <span style="font-size:0.86rem;font-weight:700;color:${color}">${score}/100</span>
        </div>
      </div>
      <div style="font-size:0.76rem;color:${color};margin-bottom:0.3rem;font-weight:600">${label}</div>
      <div style="font-size:0.8rem;color:var(--txt2);line-height:1.55">${note || ''}</div>
    </div>`;

  const factors = w.weather_factors || [];
  const impactRgb = impactColor.replace('#','').match(/../g).map(h=>parseInt(h,16)).join(',');

  return `
    <div class="mf-panel mf-panel--wide mf-panel--weather">
      ${panelLabel('赛场气候分析 · 对推演的影响', 'home')}
      ${panelLegend(`${w.venue ? `<strong>${w.venue}</strong>${w.city ? ' · ' + w.city + (w.country ? '，' + w.country : '') : ''} · ` : ''}温度、湿度、海拔与降雨对体能和战术的影响，已纳入本场胜率权重。`)}

      <!-- 天气概览 -->
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:0.75rem;margin-bottom:1.25rem">
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1.8rem;line-height:1">${icon}</div>
          <div style="font-size:0.96rem;font-weight:700;margin-top:0.3rem">${tempC}°C / ${tempF}°F</div>
          <div style="font-size:0.74rem;color:var(--txt2)">${condition}</div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1.4rem;font-weight:800;color:var(--cyan)">${w.humidity}%</div>
          <div style="font-size:0.74rem;color:var(--txt2);margin-top:0.2rem">相对湿度</div>
          <div style="font-size:0.72rem;color:var(--txt2)">${w.humidity > 70 ? '⚠ 高湿度影响体能' : w.humidity > 50 ? '中等湿度' : '干燥舒适'}</div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1.4rem;font-weight:800;color:var(--gold)">${altM}m</div>
          <div style="font-size:0.74rem;color:var(--txt2);margin-top:0.2rem">海拔高度</div>
          <div style="font-size:0.72rem;color:var(--txt2)">${altM > 2000 ? '⚠ 高原缺氧影响大' : altM > 1000 ? '中海拔，轻微影响' : '海平面，无影响'}</div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1.4rem;font-weight:800;color:${w.rain_chance > 50 ? 'var(--red)' : w.rain_chance > 20 ? 'var(--gold)' : 'var(--green)'}">${w.rain_chance}%</div>
          <div style="font-size:0.74rem;color:var(--txt2);margin-top:0.2rem">降雨概率</div>
          <div style="font-size:0.72rem;color:var(--txt2)">${w.rain_chance > 50 ? '⚠ 场地积水风险' : w.rain_chance > 20 ? '轻度降雨可能' : '干燥场地'}</div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1rem;font-weight:800;color:var(--txt)">${windStr}</div>
          <div style="font-size:0.74rem;color:var(--txt2);margin-top:0.2rem">风向风力</div>
          <div style="font-size:0.72rem;color:var(--txt2)">影响高空球落点</div>
        </div>
        <div style="background:rgba(${impactRgb},0.1);border:1px solid ${impactColor}44;border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:0.76rem;font-weight:800;color:${impactColor};letter-spacing:1px">${w.impact_level} IMPACT</div>
          <div style="font-size:0.74rem;color:var(--txt2);margin-top:0.3rem;line-height:1.62">${impactText}</div>
        </div>
      </div>

      <!-- 双队气候适应性 -->
      ${intelSubhead('各队气候适应度评分', { caps: true })}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1rem">
        ${adaptBar(homeName, homeAdaptScore, homeAdaptColor, homeAdaptLabel, w.home_note)}
        ${adaptBar(awayName, awayAdaptScore, awayAdaptColor, awayAdaptLabel, w.away_note)}
      </div>

      <!-- 气候对预测的影响 -->
      ${intelSubhead('气候因素 → 推演影响', { caps: true })}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:0.4rem;margin-bottom:0.75rem">
        ${factors.length ? factors.map(f => `
          <div class="intel-card--factor">
            <span class="intel-factor-mark">◆</span>
            <span><strong>${f.label || f}</strong>${f.impact ? ' · ' + f.impact : ''}${f.detail ? ' — ' + f.detail : ''}</span>
          </div>`).join('') : `
          <div class="intel-body" style="padding:0.5rem">暂无分项推演影响数据 · 请参考上方综合影响评级</div>`}
      </div>
      ${w.prediction_note ? `
      <div class="intel-strip intel-strip--model" style="margin-bottom:0.75rem">
        <strong style="color:#7BB8D4">模型纳入</strong> · ${w.prediction_note}
      </div>` : ''}
      ${w.historical_note ? intelFootnote(w.historical_note) : ''}
    </div>`;
}

function hasPoissonInputs(p) {
  return p && p.xg_home != null && p.xg_away != null
    && Number(p.xg_home) >= 0 && Number(p.xg_away) >= 0;
}

/** 比分分布：由 xG 泊松实时计算（优先 tier 校准后 xG） */
function getMatchScoreDistribution(p) {
  const pair = getPoissonXgPair(p);
  if (typeof computeScoreDistribution === 'function' && pair) {
    return computeScoreDistribution(pair.xgHome, pair.xgAway, { topN: 5 });
  }
  if (typeof computeScoreDistribution === 'function' && hasPoissonInputs(p)) {
    return computeScoreDistribution(p.xg_home, p.xg_away, { topN: 5 });
  }
  return null;
}

function formatScoreStr(h, a) {
  return `${h}-${a}`;
}

function getOfficialScoreStr(m) {
  const r = m.actualResult;
  if (!r || r.home_score == null || r.away_score == null) return null;
  return formatScoreStr(r.home_score, r.away_score);
}

function getScoreOutcome(h, a) {
  if (h > a) return 'home';
  if (h < a) return 'away';
  return 'draw';
}

function getPredictedOutcome(p) {
  const hw = p.home_win, d = p.draw, aw = p.away_win;
  const max = Math.max(hw, d, aw);
  if (hw === max) return 'home';
  if (aw === max) return 'away';
  return 'draw';
}

function rankOutcomes(p) {
  const lib = window.PREDICTION_SIGNALS;
  if (lib?.rankOutcomes) return lib.rankOutcomes(p);
  return [
    { key: 'home', pct: p.home_win ?? 0, label: '主胜' },
    { key: 'draw', pct: p.draw ?? 0, label: '平局' },
    { key: 'away', pct: p.away_win ?? 0, label: '客胜' },
  ].sort((a, b) => b.pct - a.pct);
}

function getOutcomeTop2(p) {
  return rankOutcomes(p).slice(0, 2);
}

function isDrawCoFavorite(p) {
  const lib = window.PREDICTION_SIGNALS;
  if (lib?.isDrawCoFavorite) return lib.isDrawCoFavorite(p);
  const ranked = rankOutcomes(p);
  const draw = ranked.find(o => o.key === 'draw');
  if (!draw || draw.pct < 27) return false;
  return ranked[0].pct - draw.pct <= 8;
}

const OUTCOME_CN = { home: '主胜', draw: '平局', away: '客胜' };

function getPoissonXgPair(p) {
  if (!p) return null;
  const h = p.xg_poisson_home ?? p.xg_home;
  const a = p.xg_poisson_away ?? p.xg_away;
  if (h == null || a == null) return null;
  return { xgHome: h, xgAway: a };
}

function getMatchScoreTop3(p) {
  if (p?.score_top3?.length) return p.score_top3;
  const pair = getPoissonXgPair(p);
  if (typeof computeTopScores === 'function' && pair) {
    return computeTopScores(pair.xgHome, pair.xgAway, 3);
  }
  if (typeof computeScoreDistribution === 'function' && pair) {
    return computeScoreDistribution(pair.xgHome, pair.xgAway, { topN: 3 });
  }
  if (p?.score) return [{ score: p.score, prob: p.score_prob ?? null }];
  return [];
}

function renderTerminalTop3Scores(p) {
  const top3 = getMatchScoreTop3(p);
  if (!top3.length) {
    return `<div class="mf-terminal-score">${formatDisplayScore(p?.score)}</div>`;
  }
  const primary = top3[0];
  const rest = top3.slice(1);
  const expected = p?.expected_score;
  const showExpected = expected && expected !== primary.score;
  return `
    <div class="mf-terminal-top3">
      <div class="mf-terminal-top3-primary">
        <span class="mf-terminal-score mf-terminal-score--lead">${formatDisplayScore(primary.score)}</span>
        ${primary.prob != null ? `<span class="mf-terminal-top3-pct">${primary.prob}%</span>` : ''}
      </div>
      ${rest.length ? `<div class="mf-terminal-top3-row">${rest.map((s, i) => `
        <span class="mf-terminal-top3-alt" title="排名第 ${i + 2}">
          <span class="mf-terminal-top3-alt-score">${formatDisplayScore(s.score)}</span>
          <span class="mf-terminal-top3-alt-pct">${s.prob}%</span>
        </span>`).join('')}</div>` : ''}
      ${showExpected ? `<div class="mf-terminal-expected">xG 期望 ${formatDisplayScore(expected)}</div>` : ''}
    </div>`;
}

function getPoissonTopScore(p) {
  const pair = getPoissonXgPair(p);
  if (typeof computeOutcomeFromXg === 'function' && pair) {
    return computeOutcomeFromXg(pair.xgHome, pair.xgAway).score;
  }
  if (typeof computeOutcomeFromXg === 'function' && hasPoissonInputs(p)) {
    return computeOutcomeFromXg(p.xg_home, p.xg_away).score;
  }
  return null;
}

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
  if (Math.abs(frac - 0.5) < 0.01 || Math.abs(frac - 0.75) < 0.01) {
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

function actualSpreadResult(marginHome, tier) {
  if (tier === 0) return 'n/a';
  const favSide = tier > 0 ? 'home' : 'away';
  const favMargin = favSide === 'home' ? marginHome : -marginHome;
  const th = getTierCoverThresholds(tier);
  if (favMargin >= th.fullMin) return 'full_cover';
  if (th.halfExact != null && favMargin === th.halfExact) return 'half_cover';
  if (th.pushExact != null && favMargin === th.pushExact) return 'push';
  if (favMargin === 1) return 'half_lose';
  if (favMargin <= 0) return 'full_lose';
  if (favMargin >= 2 && favMargin < th.fullMin) return 'half_cover';
  return 'partial';
}

const SPREAD_RESULT_CN = {
  full_cover: '全达标',
  half_cover: '部分达标',
  half_lose: '赢1未达标',
  full_lose: '热门未赢',
  push: '走水',
  partial: '部分',
  'n/a': '—',
};

function getMarketSnapshot(m) {
  const ms = m.market_snapshot || {};
  const dc = m.depth_calibration || {};
  const ds = dc.display_summary || {};
  const tv = ds.totals_view || {};
  const sp = ds.customer_reading?.spread || {};
  const to = ds.customer_reading?.totals || {};
  return {
    market_tier: ms.market_tier ?? dc.tier_home ?? 0,
    totals_line: ms.totals_line ?? ds.totals_line ?? tv.market_line ?? 2.5,
    over_pct: ms.over_pct ?? tv.over_pct ?? null,
    full_cover_pct: ms.full_cover_pct ?? sp.full_cover_pct ?? sp.meet_pct ?? null,
    spread_level: ms.spread_level ?? sp.level ?? null,
    spread_market_expect: ms.spread_market_expect ?? sp.market_expect_cn ?? null,
    totals_level: ms.totals_level ?? to.level ?? null,
    totals_show_lean: ms.totals_show_lean ?? to.show_lean ?? false,
    totals_lean_side: ms.totals_lean_side ?? to.lean_side ?? null,
    tier_label: ms.tier_label ?? dc.tier_label ?? null,
  };
}

function minuteToGoalInterval(min) {
  const m = Number(min);
  if (Number.isNaN(m)) return null;
  if (m <= 15) return '1–15';
  if (m <= 30) return '16–30';
  if (m <= 45) return '31–45';
  if (m <= 60) return '46–60';
  if (m <= 75) return '61–75';
  if (m <= 90) return '76–90';
  return '90+';
}

/** 从 scorers 字符串提取全部进球分钟（含补时） */
function parseAllGoalMinutes(scorers) {
  if (!scorers) return [];
  return [...String(scorers).matchAll(/(\d+)(?:\+(\d+))?'/g)]
    .map(m => parseInt(m[1], 10) + (m[2] ? parseInt(m[2], 10) : 0));
}

function parseGoalEntries(scorers) {
  if (!scorers) return [];
  return String(scorers).split(/[;·]/).map(s => s.trim()).filter(Boolean);
}

function parseMinuteFromEntry(entry) {
  const m = entry.match(/(\d+)(?:\+(\d+))?'/);
  if (!m) return null;
  return parseInt(m[1], 10) + (m[2] ? parseInt(m[2], 10) : 0);
}

function isOwnGoalEntry(entry) {
  return /\(\s*og\s*\)|\bOG\b|乌龙/i.test(entry);
}

/** 按 scorers 顺序推断主客队进球分钟（统计用；复杂乌龙局可能不完整） */
function inferGoalMinutesBySide(scorers, homeScore, awayScore) {
  const entries = parseGoalEntries(scorers);
  const home = [];
  const away = [];
  let h = 0;
  let a = 0;
  for (const e of entries) {
    const min = parseMinuteFromEntry(e);
    if (min == null) continue;
    if (isOwnGoalEntry(e)) {
      if (h < homeScore) {
        home.push(min);
        h += 1;
      } else {
        away.push(min);
        a += 1;
      }
      continue;
    }
    if (h < homeScore) {
      home.push(min);
      h += 1;
    } else if (a < awayScore) {
      away.push(min);
      a += 1;
    }
  }
  return {
    home,
    away,
    complete: h === homeScore && a === awayScore,
  };
}

function computeTotalsVerdict(m, ms) {
  const r = m.actualResult;
  const overPct = ms.over_pct;
  if (overPct == null || r?.home_score == null) return { available: false };
  const line = ms.totals_line ?? 2.5;
  const total = r.home_score + r.away_score;
  const actualOver = total > line;
  const push = Math.abs(total - line) < 0.01;
  const modelOver = overPct >= 50;
  const hit = push ? null : modelOver === actualOver;

  return {
    available: true,
    line,
    total,
    overPct,
    modelSide: modelOver ? '大' : '小',
    actualSide: push ? '走' : (actualOver ? '大' : '小'),
    hit,
    note: `模型超 ${line} 约 ${overPct}% → ${modelOver ? '大' : '小'}比分方向 · 实际 ${total} 球`
      + (!ms.totals_show_lean ? ' · 氛围未强判' : ''),
  };
}

function computeMarginVerdict(m, ms, margin) {
  const tier = ms.market_tier;
  if (!tier) return { available: false };
  const spreadActual = actualSpreadResult(margin, tier);
  const fullPred = ms.full_cover_pct;
  const level = ms.spread_level;
  let hit = null;

  if (spreadActual === 'full_cover') {
    hit = fullPred != null ? fullPred >= 35 : null;
  } else if (spreadActual === 'half_cover') {
    hit = level === 'narrow' || level === 'partial' || (fullPred != null && fullPred < 45);
  } else if (spreadActual === 'half_lose' || spreadActual === 'full_lose') {
    hit = level === 'skeptical' || (fullPred != null && fullPred < 35);
  }

  const replay = m.depth_calibration?.preview_replay;
  if (replay?.hits?.some(h => /净胜|小胜|部分达标/.test(h))) hit = true;
  if (replay?.misses?.some(h => /净胜/.test(h))) hit = false;

  return {
    available: true,
    actual: SPREAD_RESULT_CN[spreadActual] || spreadActual,
    marketExpect: ms.spread_market_expect || ms.tier_label || '—',
    modelPct: fullPred,
    hit,
    note: `外界 ${ms.spread_market_expect || '净胜档'} · 实际 ${SPREAD_RESULT_CN[spreadActual] || spreadActual}`
      + (fullPred != null ? ` · 模型全达标 ${fullPred}%` : ''),
  };
}

function computeGoalTimingPeakStats(gt, sideMins, homeName, awayName) {
  const peaks = gt?.peaks;
  if (!peaks) return null;
  const rows = [
    {
      key: 'home_scored',
      label: `${homeName || gt.home_name || '主队'} 进球高峰 ${peaks.home_scored?.interval || '—'}`,
      peakIv: peaks.home_scored?.interval,
      mins: sideMins.home.filter(m => minuteToGoalInterval(m) === peaks.home_scored?.interval),
    },
    {
      key: 'home_conceded',
      label: `${homeName || gt.home_name || '主队'} 失球高峰 ${peaks.home_conceded?.interval || '—'}`,
      peakIv: peaks.home_conceded?.interval,
      mins: sideMins.away.filter(m => minuteToGoalInterval(m) === peaks.home_conceded?.interval),
    },
    {
      key: 'away_scored',
      label: `${awayName || gt.away_name || '客队'} 进球高峰 ${peaks.away_scored?.interval || '—'}`,
      peakIv: peaks.away_scored?.interval,
      mins: sideMins.away.filter(m => minuteToGoalInterval(m) === peaks.away_scored?.interval),
    },
    {
      key: 'away_conceded',
      label: `${awayName || gt.away_name || '客队'} 失球高峰 ${peaks.away_conceded?.interval || '—'}`,
      peakIv: peaks.away_conceded?.interval,
      mins: sideMins.home.filter(m => minuteToGoalInterval(m) === peaks.away_conceded?.interval),
    },
  ].filter(r => r.peakIv).map(r => ({
    ...r,
    hit: r.mins.length > 0,
    note: r.mins.length
      ? `${r.mins.map(m => m + "'").join('、')} 落在 ${r.peakIv} 分`
      : `本场无进球落在 ${r.peakIv} 分`,
  }));
  const hitCount = rows.filter(r => r.hit).length;
  return {
    rows,
    hitCount,
    totalRows: rows.length,
    summary_cn: rows.length
      ? `历史高峰核验：${hitCount}/${rows.length} 项有进/失球落在对应时段`
      : null,
    sideParseComplete: sideMins.complete,
  };
}

/** 双重合窗口：全场任一球落在重合时段即命中（不看首球） */
function computeGoalTimingVerdict(m) {
  const gt = m.depth_calibration?.display_summary?.goal_timing;
  const r = m.actualResult;
  const crossIv = gt?.cross_insight?.cross_intervals || [];
  if (!crossIv.length) return { available: false, reason: 'no_cross' };

  const allMins = parseAllGoalMinutes(r?.scorers);
  const totalGoals = (r?.home_score ?? 0) + (r?.away_score ?? 0);
  const minsInCross = allMins.filter(min => crossIv.includes(minuteToGoalInterval(min)));
  const hitIntervals = [...new Set(minsInCross.map(minuteToGoalInterval))];
  const hit = minsInCross.length > 0;

  const sideMins = inferGoalMinutesBySide(r?.scorers, r?.home_score ?? 0, r?.away_score ?? 0);
  const peakStats = computeGoalTimingPeakStats(gt, sideMins, m.home?.name, m.away?.name);

  let note;
  if (totalGoals === 0) {
    note = `0 球 · 双重合窗 ${crossIv.join('、')} 无进球`;
  } else if (hit) {
    note = `双重合窗 ${hitIntervals.join('、')} 有进球（${minsInCross.map(m => m + "'").join('、')}）`;
  } else {
    note = `全场 ${totalGoals} 球（${allMins.map(m => m + "'").join('、') || '—'}）均未落在双重合窗 ${crossIv.join('、')}`;
  }

  return {
    available: true,
    hit,
    crossWindows: crossIv,
    goalMinutes: allMins,
    minsInCross,
    hitIntervals,
    peakStats,
    note,
  };
}

/** 赛前进球路径评分（与 prediction-signals-lib 口径一致） */
function scoreGoalPathPreview(favXg, dogXg, gap, xgT) {
  const s = { fav_burst: 10, dog_bloom: 10, open: 8, low: 10 };
  const favCrush = favXg >= 2.0 && dogXg <= 0.55 && gap >= 1.4;

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

function splitGoalEffSidesFromMatch(m) {
  const p = m.prediction;
  if (!p || p.xg_home == null || p.xg_away == null) return null;
  const xgH = Number(p.xg_home);
  const xgA = Number(p.xg_away);
  const xgT = Math.round((xgH + xgA) * 100) / 100;
  const gap = Math.round(Math.abs(xgH - xgA) * 100) / 100;
  return {
    xgH,
    xgA,
    xgT,
    gap,
    favXg: Math.max(xgH, xgA),
    dogXg: Math.min(xgH, xgA),
  };
}

function computeGoalEfficiencyPreviewPath(m) {
  const sides = splitGoalEffSidesFromMatch(m);
  if (!sides) return null;
  const scores = scoreGoalPathPreview(sides.favXg, sides.dogXg, sides.gap, sides.xgT);
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = ranked[0][0];
  const lowScore = scores.low;
  const burstScore = scores.fav_burst + scores.dog_bloom + scores.open;
  let lean = 'neutral';
  if (burstScore > lowScore + 20) lean = 'high';
  else if (lowScore > burstScore + 12) lean = 'low';
  const overPct = m.market_snapshot?.over_pct;
  if (overPct != null) {
    if (overPct >= 55) lean = 'high';
    else if (overPct <= 45) lean = 'low';
  }
  return { path: primary, lean, pathLabel: { fav_burst: '热门爆发', dog_bloom: '弱队开花', open: '对攻', low: '铁局/小比分' }[primary] };
}

/** 赛前进球路径 vs 赛后实际路径是否一致 */
function computeGoalEfficiencyHit(m) {
  const ge = m.depth_calibration?.goal_efficiency;
  const preview = computeGoalEfficiencyPreviewPath(m);
  if (!ge || !preview) return null;

  const predPath = preview.path;
  const actualPath = ge.path_type;
  const goals = ge.total_goals;
  const line = m.market_snapshot?.totals_line ?? 2.5;

  const pathMap = { open: 'open_game' };
  if ((pathMap[predPath] || predPath) === actualPath) return true;

  if (predPath === 'low') {
    return goals <= 2 || (actualPath === 'mixed' && goals <= 3);
  }
  if (predPath === 'fav_burst') {
    return actualPath === 'fav_burst' || (ge.fav_eff >= 1.5 && goals >= 3);
  }
  if (predPath === 'dog_bloom') {
    return actualPath === 'dog_bloom' || ge.dog_eff >= 1.2;
  }
  if (predPath === 'open') {
    return actualPath === 'open_game' || (ge.fav_eff >= 1.2 && ge.dog_eff >= 1.0 && goals >= 4);
  }
  if (preview.lean === 'high') return goals > line;
  if (preview.lean === 'low') return goals < line || Math.abs(goals - line) < 0.01;
  return false;
}

function statPct(hit, n) {
  return n ? Math.round((hit / n) * 1000) / 10 : 0;
}

function statPctClass(pct) {
  if (pct >= 55) return 'results-stat-pct--good';
  if (pct >= 45) return 'results-stat-pct--mid';
  return 'results-stat-pct--low';
}

function matchSortKey(m) {
  const n = parseInt(String(m?.id || '').replace(/\D/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

function sortedFinishedMatches(matches) {
  return [...(matches || [])].sort((a, b) => matchSortKey(a) - matchSortKey(b));
}

function parseHtScore(ht) {
  if (!ht || typeof ht !== 'string') return null;
  const m = ht.trim().match(/^(\d+)\s*-\s*(\d+)$/);
  if (!m) return null;
  return { h: parseInt(m[1], 10), a: parseInt(m[2], 10) };
}

function isFirstHalfGoalEntry(entry) {
  const m = String(entry).match(/(\d+)(?:\+(\d+))?'/);
  if (!m) return false;
  const base = parseInt(m[1], 10);
  return base <= 45;
}

function splitGoalsByHalfFromScorers(scorers) {
  const entries = parseGoalEntries(scorers);
  let ht = 0;
  let sh = 0;
  for (const e of entries) {
    if (!/\d+'/.test(e)) continue;
    if (isFirstHalfGoalEntry(e)) ht += 1;
    else sh += 1;
  }
  return { ht, sh };
}

/** 单场核验布尔值 — 供滚动趋势序列使用 */
function extractVerdictHits(m) {
  const v = computePredictionVerdict(m);
  if (!v) return null;
  const ht = v.halftime?.available ? v.halftime.htDirHit : null;
  return {
    direction: v.outcomeHit,
    top3: v.anyTop3Hit,
    top5: v.anyTop5Hit,
    goalPath: v.goalEfficiencyHit,
    atmosphere: v.atmosphereHit,
    htDirection: ht,
  };
}

/**
 * 滚动窗口 + 按轮次聚合 — 近期命中率走势
 * @param {object[]} matches finishedMatches
 * @param {{ window?: number }} opts
 */
function computeResultsTrendSeries(matches, opts = {}) {
  const windowSize = opts.window ?? 6;
  const sorted = sortedFinishedMatches(matches);
  const hitRows = sorted.map(m => ({ id: m.id, hits: extractVerdictHits(m) })).filter(r => r.hits);

  const metricDefs = [
    { key: 'direction', color: '#7BB8D4' },
    { key: 'htDirection', color: '#E8A54B' },
    { key: 'top3', color: 'var(--gold)' },
    { key: 'top5', color: '#C8A96E' },
    { key: 'goalPath', color: '#5BBF8A' },
    { key: 'atmosphere', color: '#9B7EDE' },
  ];

  const rolling = {};
  for (const { key } of metricDefs) {
    const points = [];
    for (let i = windowSize - 1; i < hitRows.length; i++) {
      const slice = hitRows.slice(i - windowSize + 1, i + 1);
      let hit = 0;
      let n = 0;
      for (const row of slice) {
        const val = row.hits[key];
        if (val === null || val === undefined) continue;
        n += 1;
        if (val) hit += 1;
      }
      if (!n) continue;
      points.push({
        endId: hitRows[i].id,
        pct: statPct(hit, n),
        hit,
        n,
      });
    }
    const last = points[points.length - 1];
    const prev = points.length > 1 ? points[points.length - 2] : null;
    const mid = Math.max(1, Math.floor(points.length / 2));
    const early = points.slice(0, mid);
    const late = points.slice(mid);
    const avg = arr => (arr.length ? arr.reduce((s, p) => s + p.pct, 0) / arr.length : null);
    const earlyAvg = avg(early);
    const lateAvg = avg(late);
    rolling[key] = {
      points,
      windowSize,
      stepDelta: last && prev ? Math.round((last.pct - prev.pct) * 10) / 10 : null,
      trendDelta: earlyAvg != null && lateAvg != null ? Math.round((lateAvg - earlyAvg) * 10) / 10 : null,
      latestPct: last?.pct ?? null,
    };
  }

  const byDay = new Map();
  for (const m of sorted) {
    const d = m.matchday || 0;
    if (!byDay.has(d)) byDay.set(d, []);
    byDay.get(d).push(m);
  }
  const matchdays = [...byDay.keys()].sort((a, b) => a - b);
  const byMatchday = {};
  for (const { key } of metricDefs) {
    byMatchday[key] = matchdays.map(d => {
      const stats = computeResultsAggregateStats(byDay.get(d));
      const data = stats[key] || stats.goalPath;
      return { matchday: d, pct: data?.pct ?? 0, n: data?.n ?? 0, muted: !data?.n };
    });
  }

  const htN = hitRows.filter(r => r.hits.htDirection != null).length;
  return { rolling, byMatchday, matchdays, metricDefs, htSampleN: htN };
}

function renderSparklineSvg(points, color, opts = {}) {
  if (!points?.length) return '';
  const w = opts.width || 108;
  const h = opts.height || 30;
  const pad = 4;
  const vals = points.map(p => p.pct ?? 0);
  const min = Math.min(30, ...vals);
  const max = Math.max(70, ...vals);
  const range = max - min || 1;
  const step = points.length > 1 ? (w - pad * 2) / (points.length - 1) : 0;
  const coords = vals.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const last = vals[vals.length - 1];
  const lx = pad + (vals.length - 1) * step;
  const ly = h - pad - ((last - min) / range) * (h - pad * 2);
  const area = `${pad},${h - pad} ${coords.join(' ')} ${lx.toFixed(1)},${h - pad}`;
  return `<svg class="results-trend-spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">
    <polygon class="results-trend-fill" points="${area}" fill="${color}" fill-opacity="0.12"/>
    <polyline class="results-trend-line" fill="none" stroke="${color}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" points="${coords.join(' ')}"/>
    <circle class="results-trend-dot" cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="2.5" fill="${color}"/>
  </svg>`;
}

function renderTrendBadge(delta, label) {
  if (delta == null || Math.abs(delta) < 0.5) {
    return `<span class="results-trend-badge results-trend-badge--flat" title="${label || ''}">→ 持平</span>`;
  }
  if (delta > 0) {
    return `<span class="results-trend-badge results-trend-badge--up" title="${label || ''}">↑ +${delta}%</span>`;
  }
  return `<span class="results-trend-badge results-trend-badge--down" title="${label || ''}">↓ ${delta}%</span>`;
}

/** 归档/market_snapshot 是否表达了进球氛围倾向（含略偏，不含纯五五开） */
function hasAtmosphereLean(ms) {
  if (ms.totals_show_lean) return true;
  const level = ms.totals_level || '';
  return /^mild_|^clear_/.test(level);
}

function computeAtmosphereStrongHit(m) {
  const ms = getMarketSnapshot(m);
  const r = m.actualResult;
  if (!hasAtmosphereLean(ms) || r?.home_score == null) return null;
  const total = r.home_score + r.away_score;
  const line = ms.totals_line ?? 2.5;
  if (Math.abs(total - line) < 0.01) return null;
  const level = ms.totals_level || '';
  const dull = ms.totals_lean_side === 'dull' || level.includes('low');
  const bright = ms.totals_lean_side === 'bright' || ms.totals_lean_side === 'exciting'
    || level.includes('high');
  if (dull) return total < line;
  if (bright) return total > line;
  return null;
}

function computeResultsAggregateStats(matches) {
  let dirHit = 0;
  let dirN = 0;
  let top3Hit = 0;
  let top3N = 0;
  let top5Hit = 0;
  let top5N = 0;
  let pathHit = 0;
  let pathN = 0;
  let atmHit = 0;
  let atmN = 0;
  let atmNeutral = 0;
  let htHit = 0;
  let htN = 0;

  for (const m of matches || []) {
    const v = computePredictionVerdict(m);
    if (!v) continue;
    dirN += 1;
    if (v.outcomeHit) dirHit += 1;
    if (v.halftime?.available) {
      htN += 1;
      if (v.halftime.htDirHit) htHit += 1;
    }
    top3N += 1;
    if (v.anyTop3Hit) top3Hit += 1;
    top5N += 1;
    if (v.anyTop5Hit) top5Hit += 1;
    const eff = computeGoalEfficiencyHit(m);
    if (eff != null) {
      pathN += 1;
      if (eff) pathHit += 1;
    }
    const atm = computeAtmosphereStrongHit(m);
    if (atm === null) {
      const ms = getMarketSnapshot(m);
      if (!hasAtmosphereLean(ms)) atmNeutral += 1;
    } else {
      atmN += 1;
      if (atm) atmHit += 1;
    }
  }

  return {
    direction: { hit: dirHit, n: dirN, pct: statPct(dirHit, dirN) },
    htDirection: { hit: htHit, n: htN, pct: statPct(htHit, htN) },
    top3: { hit: top3Hit, n: top3N, pct: statPct(top3Hit, top3N) },
    top5: { hit: top5Hit, n: top5N, pct: statPct(top5Hit, top5N) },
    goalPath: { hit: pathHit, n: pathN, pct: statPct(pathHit, pathN) },
    atmosphere: { hit: atmHit, n: atmN, pct: statPct(atmHit, atmN), neutral: atmNeutral },
    /** @deprecated 与 goalPath 同口径，保留兼容 */
    goalEff: { hit: pathHit, n: pathN, pct: statPct(pathHit, pathN) },
  };
}

function renderResultsSummaryStats(stats, trends) {
  if (!stats?.direction?.n) return '';
  const windowSize = trends?.rolling?.direction?.windowSize ?? 6;
  const cards = [
    {
      key: 'direction',
      icon: '🎯',
      label: '方向正确率',
      sub: '赛前概率最高项 = 实际胜平负',
      data: stats.direction,
    },
    {
      key: 'htDirection',
      icon: '⏱️',
      label: '半场方向正确率',
      sub: stats.htDirection.n
        ? '赛前最高概率项 = 半场胜平负（有 ht_score 场次）'
        : '待补全半场比分后统计',
      data: stats.htDirection.n ? stats.htDirection : { hit: 0, n: 0, pct: 0 },
      muted: !stats.htDirection.n,
    },
    {
      key: 'top3',
      icon: '📊',
      label: '比分前三正确率',
      sub: '泊松 Top3 含实际',
      data: stats.top3,
    },
    {
      key: 'top5',
      icon: '📈',
      label: '比分前五正确率',
      sub: '泊松 Top5 含实际',
      data: stats.top5,
    },
    {
      key: 'goalPath',
      icon: '🛤️',
      label: '进球路径正确率',
      sub: '赛前主路径 vs 赛后兑现',
      data: stats.goalPath,
    },
    {
      key: 'atmosphere',
      icon: '🌡️',
      label: '进球氛围正确率',
      sub: stats.atmosphere.n
        ? `偏闷/偏精彩 vs 实际总进球线 · ${stats.atmosphere.neutral} 场五五开未计`
        : `暂无倾向样本 · ${stats.atmosphere.neutral} 场五五开`,
      data: stats.atmosphere.n ? stats.atmosphere : { hit: 0, n: 0, pct: 0 },
      muted: !stats.atmosphere.n,
    },
  ];

  const trendNote = trends?.rolling?.direction?.points?.length
    ? `近 ${windowSize} 场滚动命中率 · 箭头对比前半程 vs 后半程均值`
    : '';

  return `
    <div class="results-stats-bar fade-in">
      <div class="results-stats-head">
        <span class="results-stats-title">累计推演核验</span>
        <span class="results-stats-meta">${stats.direction.n} 场已归档 · 冻结赛前推演 vs 官方赛果${trendNote ? ` · ${trendNote}` : ''}</span>
      </div>
      <div class="results-stats-grid">
        ${cards.map(c => {
          const roll = trends?.rolling?.[c.key];
          const md = trends?.byMatchday?.[c.key] || [];
          const color = trends?.metricDefs?.find(d => d.key === c.key)?.color || 'var(--gold)';
          const sparkPts = roll?.points?.length >= 2 ? roll.points : md.filter(p => p.n > 0);
          const trendDelta = roll?.trendDelta;
          const trendHtml = !c.muted && sparkPts.length >= 2 ? `
            <div class="results-stat-trend">
              ${renderSparklineSvg(sparkPts, color)}
              <div class="results-stat-trend-meta">
                ${renderTrendBadge(trendDelta, '后半程 vs 前半程滚动均值')}
                ${roll?.latestPct != null ? `<span class="results-stat-trend-latest">近窗 ${roll.latestPct}%</span>` : ''}
              </div>
            </div>` : '';
          return `
          <div class="results-stat-card results-stat-card--${c.key}${c.muted ? ' results-stat-card--muted' : ''}">
            <div class="results-stat-card-top">
              <span class="results-stat-icon" aria-hidden="true">${c.icon}</span>
              <span class="results-stat-label">${c.label}</span>
            </div>
            <div class="results-stat-pct ${c.muted ? '' : statPctClass(c.data.pct)}">${c.muted ? '—' : `${c.data.pct}<span class="results-stat-unit">%</span>`}</div>
            ${trendHtml}
            <div class="results-stat-foot">
              <span class="results-stat-hit">${c.muted ? '样本不足' : `${c.data.hit} / ${c.data.n} 场命中`}</span>
              <span class="results-stat-sub">${c.sub}</span>
            </div>
          </div>`;
        }).join('')}
      </div>
      ${trends?.matchdays?.length >= 2 ? `
      <div class="results-trend-legend">
        <span class="results-trend-legend-title">按轮次走势（MD${trends.matchdays.join(' → MD')}）</span>
        <div class="results-trend-md-row">
          ${cards.filter(c => !c.muted).map(c => {
            const md = trends.byMatchday[c.key] || [];
            const color = trends.metricDefs?.find(d => d.key === c.key)?.color || 'var(--gold)';
            const labels = md.map(p => `MD${p.matchday} ${p.n ? p.pct + '%' : '—'}`).join(' · ');
            return `<span class="results-trend-md-chip" style="--trend-color:${color}">${c.label.split('正确')[0]} ${labels}</span>`;
          }).join('')}
        </div>
      </div>` : ''}
    </div>`;
}

function computePredictionVerdict(m) {
  const p = m.prediction;
  const r = m.actualResult;
  if (!r || r.home_score == null || !['FT', 'AET', 'PEN'].includes(r.status)) return null;

  const official = formatScoreStr(r.home_score, r.away_score);
  const predScore = p?.score || '—';
  const poissonTop = getPoissonTopScore(p);
  const dist = getMatchScoreDistribution(p);
  const top3 = dist ? dist.slice(0, 3) : [];
  const top5 = dist ? dist.slice(0, 5) : [];
  const officialOutcome = getScoreOutcome(r.home_score, r.away_score);
  const predOutcome = getPredictedOutcome(p);
  const ms = getMarketSnapshot(m);
  const margin = r.home_score - r.away_score;

  let dataIntegrity = 'ok';
  let dataIntegrityNote = '预测记录完整（赛前数据未与官方赛果混写）';
  if (poissonTop && predScore === official && predScore !== poissonTop) {
    dataIntegrity = 'suspect';
    dataIntegrityNote = '⚠ 预测比分与官方赛果相同，但与泊松最可能比分不一致——数据疑似被赛果覆盖，请核对';
  } else if (poissonTop && predScore !== poissonTop && predScore !== official) {
    dataIntegrity = 'manual';
    dataIntegrityNote = '预测比分与泊松最可能值不同（人工设定或历史版本）';
  }

  return {
    official,
    predScore,
    poissonTop,
    scoreHit: predScore === official,
    outcomeHit: officialOutcome === predOutcome,
    officialOutcome,
    predOutcome,
    predOutcomePct: p[`${predOutcome === 'home' ? 'home_win' : predOutcome === 'away' ? 'away_win' : 'draw'}`],
    top3: top3.map(d => ({ ...d, hit: d.score === official })),
    anyTop3Hit: top3.some(d => d.score === official),
    top5: top5.map(d => ({ ...d, hit: d.score === official })),
    anyTop5Hit: top5.some(d => d.score === official),
    dataIntegrity,
    dataIntegrityNote,
    totals: computeTotalsVerdict(m, ms),
    margin: computeMarginVerdict(m, ms, margin),
    goalTiming: computeGoalTimingVerdict(m),
    goalEfficiencyHit: computeGoalEfficiencyHit(m),
    atmosphereHit: computeAtmosphereStrongHit(m),
    halftime: computeHalftimeVerdict(m, { officialOutcome, predOutcome, outcomeHit: officialOutcome === predOutcome }),
  };
}

/** 上下半场复盘 — 有 ht_score 或 scorers 分钟时可分析 */
function computeHalftimeVerdict(m, ctx) {
  const r = m.actualResult;
  const ht = parseHtScore(r?.ht_score);
  if (!ht || r?.home_score == null) return { available: false };

  const htOutcome = getScoreOutcome(ht.h, ht.a);
  const ftOutcome = ctx.officialOutcome;
  const htGoals = ht.h + ht.a;
  const ftGoals = r.home_score + r.away_score;
  const shGoals = ftGoals - htGoals;
  const byHalf = splitGoalsByHalfFromScorers(r?.scorers);
  const htMins = parseAllGoalMinutes(r?.scorers).filter(min => min <= 45);
  const shMins = parseAllGoalMinutes(r?.scorers).filter(min => min > 45);

  const directionFlipped = htOutcome !== ftOutcome;
  const htDirHit = htOutcome === ctx.predOutcome;
  const ftDirHit = ctx.outcomeHit;

  let pattern = 'steady';
  if (directionFlipped) pattern = htDirHit && !ftDirHit ? 'second_half_flip' : !htDirHit && ftDirHit ? 'second_half_rescue' : 'volatile';
  else if (shGoals > htGoals && htGoals === 0) pattern = 'late_burst';
  else if (htGoals > shGoals) pattern = 'early_heavy';

  const halvesNote = byHalf.ht + byHalf.sh > 0
    ? `进球分布：上半 ${byHalf.ht} · 下半 ${byHalf.sh}（由 scorers 解析）`
    : `比分分布：上半 ${htGoals} 球 · 下半 ${shGoals} 球`;

  let note;
  if (directionFlipped) {
    note = `半场 ${r.ht_score}（${OUTCOME_CN[htOutcome]}）→ 全场 ${OUTCOME_CN[ftOutcome]} · ${halvesNote}`;
  } else {
    note = `半场至全场均为 ${OUTCOME_CN[ftOutcome]} · ${halvesNote}`;
  }

  return {
    available: true,
    ht_score: r.ht_score,
    htGoals,
    shGoals,
    htOutcome,
    ftOutcome,
    directionFlipped,
    htDirHit,
    ftDirHit,
    pattern,
    htMins,
    shMins,
    note,
    insight: pattern === 'second_half_flip'
      ? '下半场改写结局 — 总进球/时段模块可重点复盘'
      : pattern === 'early_heavy'
        ? '上半场定调 — 与进球时间段高峰窗可交叉验证'
        : pattern === 'late_burst'
          ? '下半场爆发 — 偏精彩氛围或弱队开花路径更常见'
          : null,
  };
}

function verdictBadge(hit, hitLabel, missLabel) {
  return hit
    ? `<span style="font-size:0.74rem;font-weight:700;padding:0.1rem 0.45rem;border-radius:2px;background:rgba(91,191,138,0.15);color:#5BBF8A;border:1px solid rgba(91,191,138,0.35)">✓ ${hitLabel || '命中'}</span>`
    : `<span style="font-size:0.74rem;font-weight:700;padding:0.1rem 0.45rem;border-radius:2px;background:rgba(217,95,106,0.1);color:#D95F6A;border:1px solid rgba(217,95,106,0.28)">✗ ${missLabel || '未中'}</span>`;
}

function renderScenarioOutcomeRow(o, expectedKey) {
  return `
      <div class="dc-scenario-outcome${o.key === expectedKey ? ' dc-scenario-outcome--key' : ''}">
        <span class="dc-scenario-outcome-label">${o.label}</span>
        <span class="dc-scenario-outcome-pct">${o.pct}<span>%</span></span>
      </div>`;
}

function renderScenarioOutcomesBlock(sc, expectedKey) {
  const outcomes = sc.outcomes || [];
  const recoveryKeys = ['draw', 'win1', 'win2'];
  const recoveryRows = outcomes.filter(o => recoveryKeys.includes(o.key));
  const otherRows = outcomes.filter(o => !recoveryKeys.includes(o.key));
  const favRecoverPct = sc.fav_recover_pct != null
    ? sc.fav_recover_pct
    : Math.round(recoveryRows.reduce((s, o) => s + (o.pct || 0), 0) * 10) / 10;
  const totalKey = expectedKey === 'fav_recover';

  if (!sc.scorer_is_fav && recoveryRows.length === 3) {
    return `
        <div class="dc-scenario-outcomes dc-scenario-outcomes--split">
          <div class="dc-scenario-recover-head">
            <span>分项终局</span>
            <span class="dc-scenario-col-hdr">概率</span>
          </div>
          <div class="dc-scenario-recover-body">
            <div class="dc-scenario-recover-rows">
              ${recoveryRows.map(o => renderScenarioOutcomeRow(o, expectedKey)).join('')}
            </div>
            <div class="dc-scenario-outcomes-total${totalKey ? ' dc-scenario-outcomes-total--key' : ''}">
              <span class="dc-scenario-total-label">${sc.fav_name}<br>追分合计</span>
              <span class="dc-scenario-total-pct">${favRecoverPct}<span>%</span></span>
              <span class="dc-scenario-total-sub${totalKey ? ' dc-scenario-total-sub--key' : ''}">含追平 + 翻盘</span>
            </div>
          </div>
          ${otherRows.length ? `<div class="dc-scenario-outcomes-other">${otherRows.map(o => renderScenarioOutcomeRow(o, expectedKey)).join('')}</div>` : ''}
        </div>`;
  }

  return `
        <div class="dc-scenario-outcomes">
          ${outcomes.map(o => renderScenarioOutcomeRow(o, expectedKey)).join('')}
        </div>`;
}

const BIG_COVER_HIGHLIGHT_MIN_PCT = 35;

/** @deprecated UI 已改用 win_shape；保留供内部情景推演 */
function shouldHighlightBigCover(summary) {
  const big = Number(summary?.big_cover_pct) || 0;
  const small = Number(summary?.small_lead_pct) || 0;
  return big >= BIG_COVER_HIGHLIGHT_MIN_PCT && big > small;
}

const WIN_SHAPE_COLORS = {
  narrow_low: '#7BB8D4',
  narrow_open: '#6A9EC4',
  comfort_low: '#C8A96E',
  comfort_open: '#5BBF8A',
};

const WIN_PATH_COLORS = {
  narrow: '#7BB8D4',
  clean: '#C8A96E',
  open: '#5BBF8A',
};

const GOAL_TIMING_INTERVALS = ['1–15', '16–30', '31–45', '46–60', '61–75', '76–90', '90+'];

function renderGoalTimingAxis(intervals, crossSet) {
  const cols = intervals.map((iv, idx) => `
    <span class="dc-gt-tl-col${crossSet.has(iv) ? ' dc-gt-tl-col--cross' : ''}${idx >= 4 ? ' dc-gt-tl-col--2h' : ''}">${iv}</span>`).join('');
  return `
    <div class="dc-gt-axis">
      <div class="dc-gt-axis-flow">
        <span>开球</span>
        <span class="dc-gt-axis-arrow" aria-hidden="true">→</span>
        <span>终场</span>
      </div>
      <div class="dc-gt-tl-row dc-gt-tl-row--hdr">
        <div class="dc-gt-tl-row-label dc-gt-tl-row-label--axis">比赛时间</div>
        <div class="dc-gt-tl-cols">${cols}</div>
        <div class="dc-gt-tl-peak-read dc-gt-tl-peak-read--hdr">高峰段</div>
      </div>
      <div class="dc-gt-half-band" aria-hidden="true">
        <span class="dc-gt-half dc-gt-half--1">上半场</span>
        <span class="dc-gt-half dc-gt-half--2">下半场</span>
      </div>
    </div>`;
}

function renderGoalTimingTimelineRow(label, icon, peak, intervals, side, tone, crossSet) {
  const peakIv = peak?.interval;
  const cells = intervals.map((iv, idx) => {
    const isOn = iv === peakIv;
    const isCross = isOn && crossSet.has(iv);
    return `
      <span class="dc-gt-tl-cell-wrap${idx === 2 ? ' dc-gt-tl-cell-wrap--ht' : ''}">
        <span class="dc-gt-tl-cell dc-gt-tl-cell--${side} dc-gt-tl-cell--${tone}${isOn ? ' dc-gt-tl-cell--on' : ''}${isCross ? ' dc-gt-tl-cell--cross' : ''}"></span>
      </span>`;
  }).join('');
  return `
    <div class="dc-gt-tl-row">
      <div class="dc-gt-tl-row-label dc-gt-tl-row-label--${tone}">
        <span class="dc-gt-tl-row-icon" aria-hidden="true">${icon}</span>
        <span class="dc-gt-tl-row-text">${label}</span>
      </div>
      <div class="dc-gt-tl-cells">${cells}</div>
      <div class="dc-gt-tl-peak-read${crossSet.has(peakIv) ? ' dc-gt-tl-peak-read--cross' : ''}">
        <strong>${peakIv}</strong> 分
        <span>${peak.pct}%</span>
      </div>
    </div>`;
}

function renderGoalTimingTeamBlock(teamName, side, scoredPeak, concededPeak, intervals, crossSet) {
  return `
    <div class="dc-gt-team-block dc-gt-tl-team--${side}">
      <div class="dc-gt-team-block-name">${teamName}</div>
      ${renderGoalTimingTimelineRow('进球高峰', '⚽', scoredPeak, intervals, side, 'score', crossSet)}
      ${renderGoalTimingTimelineRow('失球高峰', '⚠️', concededPeak, intervals, side, 'leak', crossSet)}
    </div>`;
}

function renderGoalTimingTimeline(home, away, peaks, intervals, crossIntervals) {
  const crossSet = new Set(crossIntervals || []);
  return `
    <div class="dc-gt-timeline">
      ${renderGoalTimingAxis(intervals, crossSet)}
      ${renderGoalTimingTeamBlock(home, 'home', peaks.home_scored, peaks.home_conceded, intervals, crossSet)}
      ${renderGoalTimingTeamBlock(away, 'away', peaks.away_scored, peaks.away_conceded, intervals, crossSet)}
    </div>`;
}

function renderGoalTimingKey(home, away) {
  return `
    <div class="dc-gt-key">
      <span class="dc-gt-key-team">${home}</span>
      <span class="dc-gt-key-item">
        <span class="dc-gt-tl-cell dc-gt-tl-cell--home dc-gt-tl-cell--score dc-gt-tl-cell--on dc-gt-key-dot"></span>进球
      </span>
      <span class="dc-gt-key-item">
        <span class="dc-gt-tl-cell dc-gt-tl-cell--home dc-gt-tl-cell--leak dc-gt-tl-cell--on dc-gt-key-dot"></span>失球
      </span>
      <span class="dc-gt-key-sep">|</span>
      <span class="dc-gt-key-team">${away}</span>
      <span class="dc-gt-key-item">
        <span class="dc-gt-tl-cell dc-gt-tl-cell--away dc-gt-tl-cell--score dc-gt-tl-cell--on dc-gt-key-dot"></span>进球
      </span>
      <span class="dc-gt-key-item">
        <span class="dc-gt-tl-cell dc-gt-tl-cell--away dc-gt-tl-cell--leak dc-gt-tl-cell--on dc-gt-key-dot"></span>失球
      </span>
      <span class="dc-gt-key-item dc-gt-key-item--muted">从左到右为比赛进行顺序</span>
    </div>`;
}

function publicTotalsLineLabel(line) {
  const lib = typeof window !== 'undefined' ? window.PREDICTION_SIGNALS : null;
  if (line != null && lib?.formatPublicTotalsLine) return lib.formatPublicTotalsLine(line);
  if (line != null && Number.isFinite(Number(line))) return '总进球参考 ' + line;
  return '总进球参考 —';
}

function modelTotalsLineLabel(fair) {
  const lib = typeof window !== 'undefined' ? window.PREDICTION_SIGNALS : null;
  if (fair != null && lib?.formatModelTotalsLine) return lib.formatModelTotalsLine(fair);
  if (fair != null && Number.isFinite(Number(fair))) return '合理值 ' + fair;
  return '合理值 —';
}

function totalsGapLabel(gap) {
  const lib = typeof window !== 'undefined' ? window.PREDICTION_SIGNALS : null;
  if (lib?.formatTotalsLineGap) return lib.formatTotalsLineGap(gap);
  const g = Number(gap);
  if (!Number.isFinite(g) || Math.abs(g) < 0.01) return null;
  return g > 0 ? '高于合理值 ' + g : '低于合理值 ' + Math.abs(g);
}

function renderGoalTimingCrossBox(cross) {
  if (!cross) return '';
  if (!cross.has_cross) {
    return `
      <div class="dc-gt-cross dc-gt-cross--muted">
        <span class="dc-gt-cross-tag">节奏读法</span>
        <p class="dc-gt-cross-text">${cross.summary_cn}</p>
      </div>`;
  }
  const items = (cross.hits || []).map(h => `
    <div class="dc-gt-cross-hit" style="border-left-color:${h.color || '#E8A54B'}">
      <div class="dc-gt-cross-hit-title">${h.title} · ${h.interval} 分</div>
      <p class="dc-gt-cross-hit-text">${h.text}</p>
    </div>`).join('');
  return `
    <div class="dc-gt-cross dc-gt-cross--active">
      <span class="dc-gt-cross-tag">双重合 · 重点参考</span>
      ${items}
    </div>`;
}

function renderGoalTimingBlock(gt, homeName, awayName) {
  const home = gt?.home_name || homeName || '主队';
  const away = gt?.away_name || awayName || '客队';
  const peaks = gt?.peaks;
  const hasData = peaks?.home_scored?.interval && peaks?.home_conceded?.interval
    && peaks?.away_scored?.interval && peaks?.away_conceded?.interval;
  const crossIv = gt?.cross_insight?.cross_intervals || [];
  const intervals = gt?.intervals?.length ? gt.intervals : GOAL_TIMING_INTERVALS;

  const sampleLabel = gt?.sample_label || '近30场';

  const body = hasData ? `
      ${renderGoalTimingCrossBox(gt.cross_insight)}
      ${renderGoalTimingTimeline(home, away, peaks, intervals, crossIv)}
      ${renderGoalTimingKey(home, away)}`
    : `<p class="dc-gt-pending">尚未收到数据</p>`;

  return `
    <div class="dc-goal-timing${hasData ? '' : ' dc-goal-timing--pending'}">
      <div class="dc-gt-head">
        <span class="dc-gt-title">${sampleLabel} · 进球时间段节奏</span>
        ${hasData ? '<span class="dc-gt-sample">历史统计</span>' : ''}
      </div>
      ${body}
      <p class="dc-gt-disclaimer">${hasData ? (gt.disclaimer_cn || '') : '近30场进失球高峰时段；发截图后可更新。'}</p>
    </div>`;
}

function renderHalftimePreviewBlock(ht, homeName, awayName) {
  if (!ht) return '';
  const top3 = (ht.top3_scores || []).slice(0, 3);
  return `
    <div class="dc-halftime-preview">
      <div class="dc-gt-head">
        <span class="dc-gt-title">半场推演 · HT Preview</span>
        <span class="dc-gt-sample">xG 拆分 ${Math.round((ht.ht_xg_share || 0.44) * 100)}%</span>
      </div>
      <div class="dc-ht-probs">
        <div class="dc-ht-prob dc-ht-prob--home">
          <span class="dc-ht-prob-label">${homeName || '主'}</span>
          <span class="dc-ht-prob-val">${ht.home_win}<span>%</span></span>
        </div>
        <div class="dc-ht-prob dc-ht-prob--draw">
          <span class="dc-ht-prob-label">平</span>
          <span class="dc-ht-prob-val">${ht.draw}<span>%</span></span>
        </div>
        <div class="dc-ht-prob dc-ht-prob--away">
          <span class="dc-ht-prob-label">${awayName || '客'}</span>
          <span class="dc-ht-prob-val">${ht.away_win}<span>%</span></span>
        </div>
      </div>
      <div class="dc-meta-row">
        <span class="dc-meta-label">半场 xG</span>
        <span class="dc-meta-value">${ht.xg_home_ht} – ${ht.xg_away_ht} · 下半 ${ht.xg_home_2h} – ${ht.xg_away_2h}</span>
      </div>
      <div class="dc-meta-row">
        <span class="dc-meta-label">最可能半场</span>
        <span class="dc-meta-value">${ht.top_score}（${ht.top_score_prob}%）${top3.length ? ' · ' + top3.map(s => s.score + ' ' + s.prob + '%').join(' / ') : ''}</span>
      </div>
      <div class="dc-meta-row">
        <span class="dc-meta-label">半场进球</span>
        <span class="dc-meta-value">期望 ${ht.ht_goals_expected} 球 · ≥1球 ${ht.ht_over_0_5_pct}% · ≥2球 ${ht.ht_over_1_5_pct}%</span>
      </div>
      <p class="dc-gt-disclaimer">${ht.disclaimer_cn || ''}</p>
    </div>`;
}

function renderGoalAtmosphereMeter(outlook, opts) {
  if (!outlook) return '';
  const hideIntro = opts?.hideIntro;
  const hideKv = opts?.hideKv;
  const pos = outlook.meter_pos ?? 50;
  const side = outlook.lean_side || 'neutral';
  const strength = outlook.lean_strength || 'none';
  const tag = outlook.meter_label_cn || outlook.label_cn || '几乎五五开';
  const tagColor = outlook.color || '#8A96A8';
  const marketCn = outlook.market_goals_cn || publicTotalsLineLabel(outlook.market_line);

  return `
    <div class="dc-read-meter dc-ga-meter dc-ga-meter--${side} dc-ga-meter--${strength}${hideKv ? ' dc-ga-meter--compact' : ''}">
      ${!hideIntro && outlook.section_intro_cn ? `<p class="dc-ga-meter-intro">${outlook.section_intro_cn}</p>` : ''}
      ${!hideKv ? `
      <div class="dc-spread-meter-kv dc-ga-meter-kv">
        <span class="dc-spread-meter-k">总进球参考</span>
        <span class="dc-spread-meter-v dc-ga-meter-v">${marketCn}</span>
      </div>` : ''}
      <div class="dc-ga-meter-ends">
        <span class="dc-ga-meter-end dc-ga-meter-end--dull">沉闷</span>
        <span class="dc-ga-meter-end dc-ga-meter-end--exciting">精彩</span>
      </div>
      <div class="dc-ga-meter-track" role="img" aria-label="进球氛围：${tag}">
        <div class="dc-ga-meter-fill dc-ga-meter-fill--dull"></div>
        <div class="dc-ga-meter-fill dc-ga-meter-fill--exciting"></div>
        <div class="dc-ga-meter-center"></div>
        <div class="dc-ga-meter-thumb" style="left:${pos}%">
          <span class="dc-ga-meter-thumb-dot"></span>
        </div>
      </div>
      <div class="dc-read-meter-tag" style="color:${tagColor}">${tag}</div>
      ${outlook.detail_cn ? `<p class="dc-read-meter-foot dc-read-meter-foot--detail">${outlook.detail_cn}</p>` : ''}
    </div>`;
}

function renderSpreadOutlookMeter(sp) {
  if (!sp) return '';
  if (!sp.show_cover) {
    return `<p class="dc-read-meter-foot">${sp.detail_cn || sp.pill_cn || ''}</p>`;
  }
  const pct = sp.meet_pct ?? 0;
  const barW = Math.max(4, Math.min(100, pct));
  return `
    <div class="dc-read-meter dc-spread-meter dc-spread-meter--${sp.level || 'uncertain'}">
      <div class="dc-spread-meter-kv">
        <span class="dc-spread-meter-k">外界净胜猜测</span>
        <span class="dc-spread-meter-v">${sp.market_expect_cn || '—'}</span>
      </div>
      <div class="dc-spread-meter-bar-wrap">
        <div class="dc-spread-meter-bar-head">
          <span class="dc-spread-meter-bar-label">${sp.meet_pct_label || '模型推演达标概率'}</span>
          <span class="dc-spread-meter-pct" style="color:${sp.color || '#7BB8D4'}">${pct}%</span>
        </div>
        <div class="dc-spread-meter-bar" role="img" aria-label="达标概率 ${pct}%">
          <div class="dc-spread-meter-bar-fill" style="width:${barW}%;background:${sp.color || '#7BB8D4'}"></div>
        </div>
      </div>
      <div class="dc-read-meter-tag dc-spread-meter-verdict" style="color:${sp.color || '#8A96A8'}">${sp.verdict_cn || ''}</div>
      ${sp.extra_stats_cn ? `<p class="dc-read-meter-foot dc-read-meter-foot--sub">${sp.extra_stats_cn}</p>` : ''}
    </div>`;
}

function renderReadingPillHead(p) {
  const team = p.key === 'spread' && p.outlook?.fav_name
    ? `<span class="dc-reading-pill-team">${p.outlook.fav_name}</span>` : '';
  const label = p.key === 'totals' ? '进球氛围' : p.label;
  return `
      <div class="dc-reading-pill-head">
        <span class="dc-reading-pill-icon">${p.icon}</span>
        <span class="dc-reading-pill-label" style="color:${p.color || '#7BB8D4'}">${label}</span>
        ${team}
      </div>`;
}

function renderTotalsStatStrip(totalsView, prediction) {
  const expTotal = totalsView?.expected_total;
  if (expTotal == null) return '';
  const mLine = totalsView.market_line;
  const fair = totalsView.fair_line;
  const gap = totalsView.line_gap;
  const chips = [];
  if (mLine != null) {
    chips.push(`<span class="dc-totals-stat"><span class="dc-totals-stat-k">参考</span><span class="dc-totals-stat-v">${mLine}</span></span>`);
  }
  if (fair != null) {
    chips.push(`<span class="dc-totals-stat"><span class="dc-totals-stat-k">合理值</span><span class="dc-totals-stat-v">${fair}</span></span>`);
  }
  if (gap > 0.01) {
    chips.push(`<span class="dc-totals-stat dc-totals-stat--warn"><span class="dc-totals-stat-k">高于合理值</span><span class="dc-totals-stat-v">${gap}</span></span>`);
  } else if (gap < -0.01) {
    chips.push(`<span class="dc-totals-stat dc-totals-stat--low"><span class="dc-totals-stat-k">低于合理值</span><span class="dc-totals-stat-v">${Math.abs(gap)}</span></span>`);
  }
  chips.push(`<span class="dc-totals-stat"><span class="dc-totals-stat-k">预测</span><span class="dc-totals-stat-v">${expTotal}</span></span>`);
  return `<div class="dc-totals-stat-strip">${chips.join('')}</div>`;
}

function renderTotalsHintFootnote(totalsView, prediction) {
  const expTotal = totalsView?.expected_total;
  if (expTotal == null) return '';
  const predScore = prediction?.score;
  const scoreNorm = predScore ? String(predScore).replace(/\s/g, '') : '';
  const predGoals = /^\d+-\d+$/.test(scoreNorm)
    ? scoreNorm.split('-').map(n => parseInt(n, 10)).reduce((a, b) => a + b, 0)
    : null;
  let hint = '上方「预测」为推演总进球，与首推比分<strong>口径不同</strong>。';
  if (predScore && predGoals != null) {
    hint += `首推 ${formatDisplayScore(predScore)}（${predGoals} 球）。`;
  }
  return `<p class="dc-totals-hint-foot">${hint}</p>`;
}

function renderCombinedTotalsPill(p, totalsView, prediction) {
  const outlook = p.outlook;
  const gapWarn = totalsView?.gap_warning?.cn;
  return `
    <div class="dc-reading-pill dc-reading-pill--meter dc-reading-pill--totals-combined${p.muted ? ' dc-reading-pill--muted' : ''}">
      ${renderReadingPillHead(p)}
      ${renderTotalsStatStrip(totalsView, prediction)}
      ${outlook ? renderGoalAtmosphereMeter(outlook, { hideIntro: true, hideKv: true }) : ''}
      ${gapWarn ? `<p class="dc-totals-gap-warn">${gapWarn}</p>` : ''}
      ${renderTotalsHintFootnote(totalsView, prediction)}
    </div>`;
}

function renderCustomerReadingCard(reading, totalsView, prediction) {
  if (!reading?.pills?.length) return '';
  const pills = reading.pills.map(p => {
    if (p.key === 'totals' && p.outlook) {
      return renderCombinedTotalsPill(p, totalsView, prediction);
    }
    if (p.key === 'spread' && p.outlook) {
      return `
    <div class="dc-reading-pill dc-reading-pill--meter dc-reading-pill--primary">
      ${renderReadingPillHead(p)}
      ${renderSpreadOutlookMeter(p.outlook)}
    </div>`;
    }
    return `
    <div class="dc-reading-pill${p.primary ? ' dc-reading-pill--primary' : ''}${p.muted ? ' dc-reading-pill--muted' : ''}">
      ${renderReadingPillHead(p)}
      <p class="dc-reading-pill-text">${p.text}</p>
    </div>`;
  }).join('');
  const drawRow = reading.draw_risk ? `
    <div class="dc-reading-draw" style="border-left-color:${reading.draw_risk.color}">
      <span class="dc-reading-draw-label">平局空间</span>
      <span class="dc-reading-draw-text">${reading.draw_risk.note}</span>
    </div>` : '';
  return `
    <div class="dc-reading-card">
      <div class="dc-reading-head">
        <span class="dc-reading-title">赛前读场要点</span>
        <span class="dc-reading-badge">娱乐推演 · 非投注建议</span>
      </div>
      <div class="dc-reading-pills">${pills}</div>
      ${drawRow}
      <p class="dc-reading-footnote">${reading.methodology_note || ''}</p>
    </div>`;
}

function renderWinOutlookBlock(wo, ws) {
  if (!wo && !ws?.paths?.length) return renderWinShapeBlock(ws);
  const o = wo || {};
  const paths = o.paths || ws?.paths || [];
  const favName = o.fav_name || ws?.fav_name || '—';
  const favWin = ws?.fav_win_pct;

  const pathStack = paths.map(p => `
    <span class="dc-win-shape-seg" style="width:${p.pct}%;background:${WIN_PATH_COLORS[p.key] || '#888'}" title="${p.label} ${p.pct}%"></span>`).join('');
  const pathRows = paths.map(p => `
    <div class="dc-win-shape-row">
      <span class="dc-win-shape-dot" style="background:${WIN_PATH_COLORS[p.key] || '#888'}"></span>
      <span class="dc-win-shape-name">${p.label}</span>
      <span class="dc-win-shape-ex">${p.example}</span>
      <span class="dc-win-shape-pct">${p.pct}<span>%</span></span>
    </div>`).join('');

  const lineRows = o.totals_line_cn ? `
    <div class="dc-outlook-lines">
      <div class="dc-outlook-line">
        <span class="dc-outlook-line-label">${o.margin_line_cn || '净胜差距'}</span>
        <span class="dc-outlook-line-pct">${o.margin_full_label || '全达标'}约 <strong>${o.margin_meet_pct ?? '—'}%</strong></span>
        <span class="dc-outlook-line-note">${o.margin_fail_note || ''}（约 ${o.margin_fail_pct ?? '—'}%）</span>
      </div>
      ${o.margin_half_label && (o.margin_half_pct ?? 0) > 0 ? `
      <div class="dc-outlook-line">
        <span class="dc-outlook-line-label">${o.margin_half_label}</span>
        <span class="dc-outlook-line-pct">约 <strong>${o.margin_half_pct}%</strong></span>
        <span class="dc-outlook-line-note">如 2-0：部分达标，非全达标</span>
      </div>` : ''}
      <div class="dc-outlook-line">
        <span class="dc-outlook-line-label">${o.totals_line_cn || publicTotalsLineLabel(o.totals_line)}</span>
        <span class="dc-outlook-line-pct">超线约 <strong>${o.totals_high_pct ?? '—'}%</strong></span>
        <span class="dc-outlook-line-note">${modelTotalsLineLabel(o.fair_totals_line)}${o.totals_line_gap > 0.01 ? ' · 高于合理值 ' + o.totals_line_gap : o.totals_line_gap < -0.01 ? ' · 低于合理值 ' + Math.abs(o.totals_line_gap) : ''}</span>
      </div>
      ${o.win_margin2_low_total_pct >= 10 ? `
      <div class="dc-outlook-line dc-outlook-line--warn">
        <span class="dc-outlook-line-label">重叠风险</span>
        <span class="dc-outlook-line-note">约 ${o.win_margin2_low_total_pct}% 为 2-0 类：净胜扩大但总进球仍可能仅 2 个</span>
      </div>` : ''}
    </div>` : '';

  return `
    <div class="dc-win-shape-card">
      <div class="dc-win-shape-head">
        <div class="dc-win-shape-title">${favName} · 若取胜怎么走</div>
        ${favWin != null ? `<div class="dc-win-shape-win">全场取胜约 ${favWin}%</div>` : ''}
      </div>
      <div class="dc-win-shape-note">以下为「该队取胜」条件下的路径分布（泊松推演 · 非赛果承诺）</div>
      ${paths.length ? `<div class="dc-win-shape-stack" aria-hidden="true">${pathStack}</div>
      <div class="dc-win-shape-rows">${pathRows}</div>` : ''}
      ${lineRows}
      ${o.readout_cn ? `<div class="dc-win-shape-lead">${o.readout_cn}</div>` : (ws?.lead_cn ? `<div class="dc-win-shape-lead">${ws.lead_cn}</div>` : '')}
    </div>`;
}

function renderMatchPreviewBlock(mp) {
  if (!mp) return '';
  const morph = mp.morphology || {};
  const typeTags = (morph.type_tags || []).map(t =>
    `<span class="dc-mp-tag">${t.label}</span>`).join('');

  return `
    <div class="dc-mp-block">
      <div class="dc-mp-morph">
        <div class="dc-mp-head">比赛形态</div>
        <div class="dc-mp-tags">${typeTags}${morph.depth_label ? `<span class="dc-mp-tag dc-mp-tag--depth">${morph.depth_label}</span>` : ''}</div>
        ${morph.readout_cn ? `<p class="dc-mp-readout">${morph.readout_cn}</p>` : ''}
      </div>
    </div>`;
}

function renderWinShapeBlock(ws) {
  if (!ws?.shapes?.length) return '';
  const stack = ws.shapes.map(sh => `
    <span class="dc-win-shape-seg" style="width:${sh.pct}%;background:${WIN_SHAPE_COLORS[sh.key] || '#888'}" title="${sh.label} ${sh.pct}%"></span>`).join('');
  const rows = ws.shapes.map(sh => `
    <div class="dc-win-shape-row">
      <span class="dc-win-shape-dot" style="background:${WIN_SHAPE_COLORS[sh.key] || '#888'}"></span>
      <span class="dc-win-shape-name">${sh.label}</span>
      <span class="dc-win-shape-ex">${sh.example}</span>
      <span class="dc-win-shape-pct">${sh.pct}<span>%</span></span>
    </div>`).join('');
  return `
    <div class="dc-win-shape-card">
      <div class="dc-win-shape-head">
        <div class="dc-win-shape-title">若 ${ws.fav_name} 取胜 · 赛果形态</div>
        ${ws.fav_win_pct != null ? `<div class="dc-win-shape-win">全场取胜约 ${ws.fav_win_pct}%</div>` : ''}
      </div>
      <div class="dc-win-shape-note">${ws.note || ''}</div>
      <div class="dc-win-shape-stack" aria-hidden="true">${stack}</div>
      <div class="dc-win-shape-rows">${rows}</div>
      ${ws.lead_cn ? `<div class="dc-win-shape-lead">${ws.lead_cn}</div>` : ''}
    </div>`;
}

/** 冷门防范 + 平局陷阱 — 合并为模型推演概要内简短说明 */
function renderUpsetDrawRiskNote(ua, drawTrapNote) {
  if (!ua && !drawTrapNote) return '';
  const s = ua ? upsetLevelStyle(ua.level) : {
    color: '#7BB8D4',
    bg: 'rgba(123,184,212,0.08)',
    border: 'rgba(123,184,212,0.25)',
  };
  const lines = [];
  if (ua) {
    const head = `${ua.favorite} 需防 ${ua.underdog} · ${ua.level_cn || ua.level || '—'}`
      + (ua.cold_result_pct != null ? ` · 冷门空间约 ${ua.cold_result_pct}%` : '');
    lines.push(`<div class="dc-upset-draw-line dc-upset-draw-line--head"><strong style="color:${s.color}">冷门与平局风险</strong> · ${head}</div>`);
    if (ua.verdict) lines.push(`<div class="dc-upset-draw-line">${ua.verdict}</div>`);
  }
  if (drawTrapNote) {
    lines.push(`<div class="dc-upset-draw-line dc-upset-draw-line--trap">${drawTrapNote}</div>`);
  }
  return `
    <div class="dc-upset-draw-risk" style="background:${s.bg};border:1px solid ${s.border};border-left:3px solid ${s.color}">
      ${lines.join('')}
    </div>`;
}

function renderLiveWatchList(items) {
  if (!items?.length) return '';
  const rows = items.map(it => `
    <li class="dc-ge-live-watch dc-ge-live-watch--${it.severity || 'mid'}">
      <span class="dc-ge-live-dot" aria-hidden="true"></span>
      <div class="dc-ge-live-body">
        <span class="dc-ge-live-watch-k">${it.label}</span>
        <span class="dc-ge-live-watch-d">${it.detail}</span>
      </div>
    </li>`).join('');
  return `
    <div class="dc-ge-live-wrap">
      <div class="dc-ge-live-head">
        <span class="dc-ge-live-icon" aria-hidden="true"></span>
        <span>赛中观察</span>
        <span class="dc-ge-live-sub">预防用 · 非默认预测</span>
      </div>
      <ul class="dc-ge-live-list">${rows}</ul>
    </div>`;
}

function renderGoalEfficiencyPreviewBlock(gp) {
  if (!gp?.summary_cn) return '';
  const tags = (gp.tags || []).map(t => `
    <span class="dc-ge-tag" style="color:${t.color};background:${t.bg};border:1px solid ${t.color}44">${t.label}</span>`).join('');
  const scenarioRows = (gp.scenarios || []).slice(0, 4).map((sc, i) => `
    <div class="dc-ge-scenario${i === 0 ? ' dc-ge-scenario--primary' : ''}">
      <div class="dc-ge-scenario-head">
        <span class="dc-ge-scenario-label">${sc.label}</span>
        <span class="dc-ge-scenario-pct">${sc.prob_pct}%</span>
      </div>
      <div class="dc-ge-scenario-ex">${sc.example}</div>
    </div>`).join('');
  const watchRows = (gp.watch_notes || []).map(n => `<li>${n}</li>`).join('');
  const guessN = gp.guess_n ?? 3;
  const lineNum = Number(gp.totals_line);
  const probMeet = gp.prob_meet_guess;
  const probOver = gp.prob_over_line;
  const probSameMetric = probMeet != null && probOver != null
    && Math.abs(probMeet - probOver) < 0.05
    && Number.isFinite(lineNum) && lineNum % 1 === 0.5;
  const probItems = [];
  if (probSameMetric) {
    probItems.push({ k: '超 ' + gp.totals_line, v: probOver });
  } else {
    if (probMeet != null) probItems.push({ k: '至少 ' + guessN + ' 球', v: probMeet });
    if (probOver != null) probItems.push({ k: '超 ' + gp.totals_line, v: probOver });
  }
  if (gp.prob_2_or_less != null) {
    probItems.push({ k: '≤2 球', v: gp.prob_2_or_less });
  }
  const probRow = probItems.length ? `
    <div class="dc-ge-stat-strip dc-ge-stat-strip--prob${probItems.length === 2 ? ' dc-ge-stat-strip--pair' : ''}">
      ${probItems.map(it => `
      <div class="dc-ge-stat">
        <span class="dc-ge-stat-k">${it.k}</span>
        <span class="dc-ge-stat-v">${it.v}<small>%</small></span>
      </div>`).join('')}
    </div>` : '';
  const pathLeanClass = gp.lean === 'prevention_high' ? 'prevention' : gp.lean;
  const showPathBadge = gp.lean_cn && (
    gp.lean_mode === 'prediction' || gp.lean_mode === 'prevention' || gp.lean === 'split'
  );
  const pathBadge = showPathBadge
    ? `<span class="dc-goal-eff-path dc-goal-eff-path--${pathLeanClass}">${gp.lean_cn}</span>`
    : '';
  const xgNote = gp.xg_note
    ? `<p class="dc-goal-eff-xg-note">${gp.xg_note}<span class="dc-goal-eff-xg-sep"> · </span>与「进球氛围」口径不同</p>`
    : '';
  const leanNote = gp.lean_note
    ? `<div class="dc-goal-eff-callout${gp.lean_mode === 'prevention' ? ' dc-goal-eff-callout--prevention' : ''}${gp.modules_aligned ? ' dc-goal-eff-callout--aligned' : ''}">${gp.lean_note}</div>`
    : '';
  const atmosphereLink = gp.atmosphere_link_cn && gp.lean_mode !== 'prevention' && !gp.lean_note?.includes(gp.atmosphere_link_cn)
    ? `<p class="dc-goal-eff-atm-link">${gp.atmosphere_link_cn}</p>`
    : '';
  const liveWatchHtml = renderLiveWatchList(gp.live_watch);
  const summaryDetails = gp.summary_cn ? `
    <details class="dc-ge-details">
      <summary>展开结构说明</summary>
      <p>${gp.summary_cn}</p>
    </details>` : '';
  return `
    <div class="dc-goal-eff dc-goal-eff--preview">
      <div class="dc-goal-eff-head">
        <span class="dc-goal-eff-title">进球路径预估</span>
        ${pathBadge}
      </div>
      ${xgNote}
      ${leanNote}
      ${atmosphereLink}
      ${tags ? `<div class="dc-goal-eff-tags">${tags}</div>` : ''}
      <div class="dc-ge-stat-strip dc-ge-stat-strip--xg">
        <div class="dc-ge-stat">
          <span class="dc-ge-stat-k">热门 ${gp.fav_name}</span>
          <span class="dc-ge-stat-v"><strong>${gp.fav_xg}</strong><small>基准 xG</small></span>
        </div>
        <div class="dc-ge-stat">
          <span class="dc-ge-stat-k">弱队 ${gp.dog_name}</span>
          <span class="dc-ge-stat-v"><strong>${gp.dog_xg}</strong><small>差 ${gp.xg_gap}</small></span>
        </div>
      </div>
      ${probRow}
      <div class="dc-ge-scenarios">${scenarioRows}</div>
      ${liveWatchHtml}
      ${watchRows ? `<ul class="dc-ge-watch">${watchRows}</ul>` : ''}
      ${summaryDetails}
      ${gp.in_mid_band ? `<div class="dc-goal-eff-hint">${gp.sample_note || '样本规则'} · 弱队效率≥1.2 易大比分 · 弱队&lt;0.6 易小比分</div>` : ''}
    </div>`;
}

function renderGoalEfficiencyBlock(ge) {
  if (!ge?.summary_cn) return '';
  const tags = (ge.tags || []).map(t => `
    <span class="dc-ge-tag" style="color:${t.color};background:${t.bg};border:1px solid ${t.color}33">${t.label}</span>`).join('');
  return `
    <div class="dc-goal-eff">
      <div class="dc-goal-eff-head">
        <span>进球效率复盘</span>
        ${ge.path_label ? `<span class="dc-goal-eff-path">${ge.path_label}</span>` : ''}
      </div>
      <div class="dc-goal-eff-tags">${tags}</div>
      <div class="dc-goal-eff-bars">
        <div class="dc-goal-eff-row">
          <span class="dc-goal-eff-side">热门 ${ge.fav_name}</span>
          <span class="dc-goal-eff-num">xG ${ge.fav_xg} → ${ge.fav_goals} 球</span>
          <span class="dc-goal-eff-pill" style="--eff:${Math.min(ge.fav_eff, 3) / 3}">效率 ${ge.fav_eff}</span>
        </div>
        <div class="dc-goal-eff-row">
          <span class="dc-goal-eff-side">弱队 ${ge.dog_name}</span>
          <span class="dc-goal-eff-num">xG ${ge.dog_xg} → ${ge.dog_goals} 球</span>
          <span class="dc-goal-eff-pill dc-goal-eff-pill--dog" style="--eff:${Math.min(ge.dog_eff, 3) / 3}">效率 ${ge.dog_eff}</span>
        </div>
      </div>
      <p class="dc-goal-eff-summary">${ge.summary_cn}</p>
      ${ge.in_mid_band ? '<div class="dc-goal-eff-hint">xG 2.0–3.0 · 弱队效率≥1.2 易大比分 · 弱队&lt;0.6 易小比分</div>' : ''}
    </div>`;
}

/** 模型推演概要 — 综合 xG · 教练 · 伤病 · 气候 · 先进球情景 */
function renderDepthCalibrationBlock(dc, upsetAlert, prediction, homeName, awayName) {
  if (!SHOW_DEPTH_CALIBRATION_PANEL) return '';
  if (!dc) return '';
  const goalEffOnly = renderGoalEfficiencyBlock(dc.goal_efficiency)
    || renderGoalEfficiencyPreviewBlock(dc.goal_efficiency_preview);
  const s = dc.display_summary;
  if (!s) {
    return goalEffOnly
      ? `<div class="depth-calib-strip depth-calib-strip--simple depth-calib-strip--eff-only">${goalEffOnly}</div>`
      : '';
  }

  const factors = s.context_factors || [];
  const scenarios = s.first_goal_scenarios || [];
  const cal = s.calibration || {};
  const replay = dc.preview_replay;
  const goalEff = dc.goal_efficiency;
  const reading = s.customer_reading;
  const totalsView = s.totals_view || {};
  const readingCard = renderCustomerReadingCard(reading, totalsView, prediction);
  const goalTimingHtml = renderGoalTimingBlock(s.goal_timing, homeName, awayName);
  const halftimeHtml = renderHalftimePreviewBlock(s.halftime_preview, homeName, awayName);
  const replayRow = replay?.summary_cn ? `
    <div class="dc-preview-replay">
      <div class="dc-preview-replay-head">赛后复盘</div>
      <p>${replay.summary_cn}</p>
      ${replay.actual_score ? `<span class="dc-preview-replay-meta">实际 ${replay.actual_score}${replay.ht_score ? ' · 半场 ' + replay.ht_score : ''}${replay.totals_actual != null ? ' · 总进球 ' + replay.totals_actual : ''}</span>` : ''}
    </div>` : '';
  const goalEffRow = renderGoalEfficiencyBlock(goalEff)
    || renderGoalEfficiencyPreviewBlock(dc.goal_efficiency_preview);
  const xgCtx = s.xg_context || {};
  const scorePatterns = s.score_patterns || {};

  const factorRow = factors.length ? `
    <div class="dc-context-row">
      ${factors.map(f => `
        <div class="dc-context-pill">
          <span class="dc-context-icon">${f.icon}</span>
          <span class="dc-context-label">${f.label}</span>
          <span class="dc-context-note">${f.note}</span>
        </div>`).join('')}
    </div>` : '';

  const calibrationRow = cal.summary_cn ? `
    <div class="dc-calibration-strip" style="border-left-color:${cal.signal_color || '#7BB8D4'}">
      <span class="dc-calibration-tag" style="color:${cal.signal_color || '#7BB8D4'}">${cal.signal_cn || '—'}</span>
      <span class="dc-calibration-text">${cal.summary_cn}</span>
    </div>` : '';

  const xgRow = xgCtx.note ? `
    <div class="dc-meta-row dc-meta-row--xg">${xgCtx.note}</div>` : '';

  const scorePatternRow = scorePatterns.length ? `
    <div class="dc-meta-row">
      <span class="dc-meta-label">赛果形态</span>
      <span class="dc-meta-value">${scorePatterns.map(p => p.score + ' ' + p.pct + '%').join(' · ')}</span>
    </div>` : '';

  const mp = s.match_preview;
  const previewHtml = renderMatchPreviewBlock(mp);
  const upsetDrawNote = renderUpsetDrawRiskNote(upsetAlert, mp?.draw_trap_note);
  const winShapeHtml = renderWinOutlookBlock(s.win_outlook, s.win_shape);
  const scenarioCards = scenarios.map(sc => {
    const outcomes = sc.outcomes || [];
    const favRecoverPct = sc.fav_recover_pct != null
      ? sc.fav_recover_pct
      : Math.round(((sc.fav_win_pct || 0) + (sc.fav_draw_pct || 0)) * 10) / 10;
    const upsetPct = sc.fav_lose_pct != null
      ? sc.fav_lose_pct
      : (outcomes.find(o => o.key === 'upset_hold') || {}).pct;
    const expectedKey = sc.expected_key
      || (sc.scorer_is_fav
        ? 'hold_win'
        : (favRecoverPct >= (upsetPct || 0) ? 'fav_recover' : (outcomes.reduce((a, b) => (b.pct > a.pct ? b : a), outcomes[0] || {}).key)));
    const favRefStrip = !sc.scorer_is_fav && favRecoverPct != null ? `
        <div class="dc-scenario-ref${expectedKey === 'fav_recover' ? ' dc-scenario-ref--key' : ''}">
          <span class="dc-scenario-ref-label">赛前热门视角</span>
          <span><strong>${sc.fav_name}</strong> 仍有望追分 — 见右侧<strong>追分合计</strong>（平或胜 ${favRecoverPct}%）</span>
          <span class="dc-scenario-ref-sub">· 下方三项为拆分概率 · 冷门守胜 ${upsetPct ?? '—'}%</span>
        </div>` : '';
    const outcomeHtml = renderScenarioOutcomesBlock(sc, expectedKey);
    return `
      <div class="dc-scenario-card">
        <div class="dc-scenario-head">
          <span class="dc-scenario-title">若 ${sc.team} 先进球${sc.start_score ? ' · 已 ' + sc.start_score : ''}</span>
          <span class="dc-scenario-pct">首开约 ${sc.first_goal_pct}%</span>
        </div>
        ${favRefStrip}
        ${outcomeHtml}
        ${sc.live_outlook?.readout_cn ? `
        <div class="dc-scenario-live-outlook">
          <span class="dc-scenario-live-label">若已 1-0 领先 · 赛前参考</span>
          <p>${sc.live_outlook.readout_cn}</p>
          <span class="dc-scenario-live-meta">${sc.live_outlook.margin_full_label || '净胜全达标'}约 ${sc.live_outlook.margin_meet_pct}%${sc.live_outlook.margin_half_label && sc.live_outlook.margin_half_pct ? ' · ' + sc.live_outlook.margin_half_label + ' 约 ' + sc.live_outlook.margin_half_pct + '%' : ''}${sc.live_outlook.final_2_0_pct != null ? ' · 2-0 约 ' + sc.live_outlook.final_2_0_pct + '%' : ''}${sc.live_outlook.final_3_0_plus_pct != null ? ' · 3-0+ 约 ' + sc.live_outlook.final_3_0_plus_pct + '%' : ''} · 终场多于外界 ${sc.live_outlook.totals_line} 球参考约 ${sc.live_outlook.totals_high_pct}%</span>
        </div>` : ''}
        <p class="dc-scenario-narrative">${sc.narrative}</p>
      </div>`;
  }).join('');

  return `
    <div class="depth-calib-strip depth-calib-strip--simple">
      <div class="depth-calib-head depth-calib-head--simple">
        <span class="depth-calib-title">📊 模型推演概要</span>
        <span class="depth-calib-tier">${s.baseline_label || '综合 xG · 教练 · 伤病 · 气候'}</span>
      </div>
      ${readingCard}
      ${goalTimingHtml}
      ${halftimeHtml}
      ${calibrationRow}
      ${replayRow}
      ${goalEffRow}
      ${xgRow}
      ${factorRow}
      ${previewHtml || ''}
      ${upsetDrawNote}
      ${winShapeHtml ? `
      <details class="dc-details-fold">
        <summary>${s.fav_name} · 若取胜怎么走 · 对着赛前参考线</summary>
        ${winShapeHtml}
      </details>` : ''}
      ${scorePatternRow}
      ${scenarios.length ? `
      <div class="dc-scenario-section">
        <div class="dc-scenario-section-title">情景预读</div>
        <div class="dc-scenario-legend">赛前假设情景，供读场参考（无 LIVE 数据时不自动切换）。</div>
        <div class="dc-scenario-subtitle">先进球情景</div>
        <div class="dc-scenario-row">${scenarioCards}</div>
      </div>` : ''}
    </div>`;
}

/** 小组形势 & 晋级路径预判 — UI helpers */
function gcPathBody(text) {
  if (!text) return '—';
  return String(text)
    .replace(/^32强\s*/i, '')
    .replace(/^16强\s*/i, '')
    .replace(/→\s*当前\s+/g, '→ ')
    .trim();
}

function gcRankZone(rank) {
  if (rank <= 2) return { cls: 'gc-zone--direct', label: '直接出线区', icon: '✓' };
  if (rank === 3) return { cls: 'gc-zone--third', label: '第3争8', icon: '③' };
  return { cls: 'gc-zone--out', label: '出局区', icon: '—' };
}

function gcPathTrack(rankKey, label, icon, r32, r16, corridor) {
  const r32Text = gcPathBody(r32);
  const r16Text = r16 ? gcPathBody(r16) : '';
  return `
    <div class="gc-path-track gc-path-track--${rankKey}">
      <div class="gc-path-track-head">
        <span class="gc-path-badge gc-path-badge--${rankKey}">${icon} ${label}</span>
      </div>
      <div class="gc-path-flow">
        <div class="gc-path-node">
          <span class="gc-path-node-tag">32强</span>
          <span class="gc-path-node-text">${r32Text}</span>
        </div>
        ${r16Text ? `
        <span class="gc-path-arrow" aria-hidden="true">→</span>
        <div class="gc-path-node gc-path-node--r16">
          <span class="gc-path-node-tag">16强</span>
          <span class="gc-path-node-text">${r16Text}</span>
        </div>` : ''}
      </div>
      ${corridor ? `<div class="gc-path-corridor">${corridor}</div>` : ''}
    </div>`;
}

function gcTeamPathCard(t, gc, side) {
  const zone = gcRankZone(Number(t.rank) || 99);
  const isFocus = side === 'home' || side === 'away';
  return `
    <article class="gc-team-card${isFocus ? ' gc-team-card--focus' : ''}">
      <header class="gc-team-card-head">
        <div class="gc-team-card-name">${t.team}</div>
        <div class="gc-team-card-meta">
          <span class="gc-rank-pill ${zone.cls}">第 ${t.rank} 名</span>
          <span class="gc-pts-pill">${t.pts} 分 · ${t.played} 场</span>
        </div>
      </header>
      <div class="gc-path-tracks">
        ${gcPathTrack('r1', '若夺第 1', '🥇', t.if_1st, t.if_1st_r16, t.if_1st_corridor)}
        ${gcPathTrack('r2', '若列第 2', '🥈', t.if_2nd, t.if_2nd_r16, t.if_2nd_corridor)}
        ${gcPathTrack('r3', '若列第 3', '🥉', t.if_3rd, t.if_3rd_r16, null)}
      </div>
    </article>`;
}

function gcStandingsTable(gc) {
  const homeName = gc.home?.team;
  const awayName = gc.away?.team;
  const rows = (gc.standings || []).map((r, i) => {
    const rank = i + 1;
    const zone = gcRankZone(rank);
    const gd = (r.gf || 0) - (r.ga || 0);
    const gdStr = gd > 0 ? `+${gd}` : String(gd);
    const isMatchTeam = r.team === homeName || r.team === awayName;
    return `
      <tr class="gc-standings-tr ${zone.cls}${isMatchTeam ? ' gc-standings-tr--match' : ''}">
        <td class="gc-standings-rank">
          <span class="gc-standings-rank-num">${rank}</span>
          <span class="gc-standings-zone-icon" title="${zone.label}">${zone.icon}</span>
        </td>
        <td class="gc-standings-team">${r.team}${isMatchTeam ? ' <span class="gc-standings-dot">●</span>' : ''}</td>
        <td>${r.p}</td>
        <td>${r.gf}-${r.ga}</td>
        <td class="gc-standings-gd">${gdStr}</td>
        <td class="gc-standings-pts">${r.pts}</td>
      </tr>`;
  }).join('');
  return `
    <div class="gc-standings-wrap">
      <div class="gc-section-label">积分榜 · ${gc.label || gc.group + '组'}</div>
      <div class="gc-zone-legend">
        <span class="gc-zone-legend-item gc-zone--direct">①② 直接出线</span>
        <span class="gc-zone-legend-item gc-zone--third">③ 争最佳第3（12取8）</span>
      </div>
      <table class="gc-standings-table">
        <thead>
          <tr>
            <th>#</th>
            <th>球队</th>
            <th>赛</th>
            <th>进失</th>
            <th>净胜</th>
            <th>分</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/** 小组形势 & 晋级路径预判 */
function renderGroupContextPanel(gc) {
  if (!gc) return '';
  const risk = gc.manipulation_risk || {};
  const riskLevel = risk.level || 'LOW';
  const riskColor = riskLevel === 'HIGH' ? '#D95F6A' : riskLevel === 'MEDIUM' ? '#C8A96E' : '#5BBF8A';
  const crossChips = (gc.cross_group_notes || []).map(n => {
    const isOpen = /四队同分|极度开放/.test(n);
    const isLinked = /绑定组/.test(n);
    return `<span class="gc-chip${isOpen ? ' gc-chip--alert' : ''}${isLinked ? ' gc-chip--linked' : ''}">${n}</span>`;
  }).join('');
  const scenarios = (gc.scenarios || []).slice(0, 4).map((s, i) => {
    const icon = i === 0 ? '⚽' : /巴西|路径/.test(s) ? '🇧🇷' : /平局|若/.test(s) ? '⚖' : '💡';
    return `<div class="gc-scenario-card"><span class="gc-scenario-icon">${icon}</span><span>${s}</span></div>`;
  }).join('');

  return `
    <div class="group-context-panel gc-panel-v2">
      <header class="gc-panel-header">
        <div class="gc-panel-header-left">
          <span class="gc-panel-icon">📊</span>
          <div>
            <div class="group-context-title">小组形势 & 晋级路径预判</div>
            <div class="gc-panel-sub">${gc.group} 组 · 第 ${gc.matchday || '—'} 轮</div>
          </div>
        </div>
        <div class="gc-format-pills">
          <span class="gc-format-pill">48 队</span>
          <span class="gc-format-pill">32 强起</span>
          <span class="gc-format-pill gc-format-pill--gold">8×第3</span>
        </div>
      </header>
      ${panelLegend('FIFA 2026 官方槽位 · 绑定组（C↔F 等）· 末轮或存在选半区博弈')}

      <div class="gc-panel-body">
        ${gcStandingsTable(gc)}

        <div class="gc-section-label">本场两队 · 出线名次对应路径</div>
        <div class="gc-team-grid">
          ${gcTeamPathCard(gc.home, gc, 'home')}
          ${gcTeamPathCard(gc.away, gc, 'away')}
        </div>

        ${crossChips ? `
        <div class="gc-linked-block">
          <div class="gc-section-label">绑定组 / 关联形势</div>
          <div class="gc-chip-row">${crossChips}</div>
        </div>` : ''}

        ${gc.path_tradeoff ? `
        <div class="gc-tradeoff-card">
          <div class="gc-tradeoff-head">⚔ 头名 vs 次席 · 半区博弈</div>
          <p class="gc-tradeoff-body">${gc.path_tradeoff}</p>
        </div>` : ''}

        ${scenarios ? `
        <div class="gc-scenario-grid">${scenarios}</div>` : ''}

        ${gc.knockout_note ? `<div class="gc-format-note">${gc.knockout_note}</div>` : ''}

        <div class="gc-risk-card gc-risk-card--${riskLevel.toLowerCase()}" style="--gc-risk-color:${riskColor}">
          <div class="gc-risk-head">
            <span class="gc-risk-meter" aria-hidden="true"></span>
            <span class="gc-risk-title">控分动机</span>
            <span class="gc-risk-badge">${risk.level_cn || '低'}</span>
            ${risk.focus_team ? `<span class="gc-risk-focus">关注 ${risk.focus_team}</span>` : ''}
          </div>
          <p class="gc-risk-text">${risk.reason || ''}</p>
          ${risk.optimal_summary ? `
          <div class="gc-risk-optimal">
            <span class="gc-risk-optimal-icon" aria-hidden="true">💡</span>
            <span class="gc-risk-optimal-text">${risk.optimal_summary}</span>
          </div>` : ''}
        </div>
      </div>
    </div>`;
}

function verdictBadgeOrNeutral(state, hitLabel, missLabel, neutralLabel) {
  if (state == null) {
    return `<span style="font-size:0.74rem;font-weight:600;padding:0.1rem 0.45rem;border-radius:2px;background:rgba(255,255,255,0.05);color:var(--txt2);border:1px solid rgba(255,255,255,0.1)">— ${neutralLabel || '无判定'}</span>`;
  }
  return verdictBadge(state, hitLabel, missLabel);
}

function parseScorePair(scoreStr) {
  if (!scoreStr || scoreStr === '—') return [null, null];
  const parts = String(scoreStr).replace(/\s/g, '').split('-');
  return [parts[0] ?? null, parts[1] ?? null];
}

function verdictChip(label, hit, neutral) {
  if (neutral) return `<span class="vchip vchip--na">${label}</span>`;
  return `<span class="vchip ${hit ? 'vchip--hit' : 'vchip--miss'}">${label} ${hit ? '✓' : '✗'}</span>`;
}

function renderScoreCompareTeamRow(team, goals, role) {
  const g = goals != null ? goals : '—';
  const flag = team?.iso
    ? `<img src="${FLAG(team.iso)}" class="score-compare-flag" alt="" onerror="this.style.display='none'">`
    : '<span class="score-compare-flag score-compare-flag--ph"></span>';
  const roleLabel = role === 'home' ? '主' : '客';
  return `
    <div class="score-compare-team">
      <div class="score-compare-team-id">
        <span class="score-compare-role" aria-hidden="true">${roleLabel}</span>
        ${flag}
        <span class="score-compare-name" title="${team?.name || ''}">${team?.name || '—'}</span>
      </div>
      <span class="score-compare-goals">${g}</span>
    </div>`;
}

function renderScoreCompareBoard(m, homeGoals, awayGoals) {
  return `
    <div class="score-compare-board">
      ${renderScoreCompareTeamRow(m.home, homeGoals, 'home')}
      <div class="score-compare-sep" aria-hidden="true"></div>
      ${renderScoreCompareTeamRow(m.away, awayGoals, 'away')}
    </div>`;
}

/** 官方 vs 赛前 — 并排比分对照（赛果页主视觉） */
function renderScoreCompareHero(m, v) {
  const r = m.actualResult;
  const p = m.prediction || {};
  const [predH, predA] = parseScorePair(v.predScore);
  const htNote = r.ht_score ? ` · 半场 ${r.ht_score}` : '';
  const poissonNote = v.poissonTop && v.poissonTop !== v.predScore
    ? ` · 泊松最可能 ${v.poissonTop}`
    : '';

  const t = v.totals;
  const mg = v.margin;
  const gt = v.goalTiming;

  const chips = [
    verdictChip('方向', v.outcomeHit),
    verdictChip('比分', v.scoreHit),
    verdictChip('Top3', v.anyTop3Hit),
    verdictChip('Top5', v.anyTop5Hit),
    t.available ? verdictChip('总进球', t.hit, t.hit == null) : '',
    mg.available ? verdictChip('净胜', mg.hit, mg.hit == null) : '',
    v.goalEfficiencyHit != null ? verdictChip('进球路径', v.goalEfficiencyHit) : '',
    v.atmosphereHit != null ? verdictChip('进球氛围', v.atmosphereHit) : '',
    gt.available ? verdictChip('时段', gt.hit, gt.hit == null) : '',
  ].filter(Boolean).join('');

  return `
    <div class="score-compare-hero">
      <div class="score-compare-col score-compare-col--official">
        <div class="score-compare-col-head">
          <span class="score-compare-col-icon" aria-hidden="true">🏁</span>
          <span class="score-compare-col-title">官方赛果</span>
        </div>
        ${renderScoreCompareBoard(m, r.home_score, r.away_score)}
        <div class="score-compare-foot score-compare-foot--official">
          ${OUTCOME_CN[v.officialOutcome]}${htNote}
        </div>
      </div>
      <div class="score-compare-mid" aria-hidden="true">
        <span class="score-compare-vs">VS</span>
        <span class="score-compare-mid-label">对照</span>
      </div>
      <div class="score-compare-col score-compare-col--pred">
        <div class="score-compare-col-head">
          <span class="score-compare-col-icon" aria-hidden="true">📊</span>
          <span class="score-compare-col-title">赛前预测</span>
        </div>
        ${renderScoreCompareBoard(m, predH, predA)}
        <div class="score-compare-foot score-compare-foot--pred">
          ${OUTCOME_CN[v.predOutcome]} ${v.predOutcomePct}%${poissonNote}
        </div>
      </div>
    </div>
    <div class="score-compare-chips">${chips}</div>
    <div class="score-compare-xg">
      赛前 xG <strong>${p.xg_home ?? '—'}</strong> – <strong>${p.xg_away ?? '—'}</strong>
      · 模型置信 <strong>${p.confidence ?? '—'}%</strong>
    </div>`;
}

function renderMarketVerdictDetails(v) {
  const t = v.totals;
  const mg = v.margin;
  const gt = v.goalTiming;
  const ht = v.halftime;
  if (!t.available && !mg.available && !gt.available && !ht?.available) return '';
  return `
    <div class="pred-verdict-details">
      ${ht?.available ? `
      <div class="pred-verdict-detail pred-verdict-detail--stack">
        <div class="pred-verdict-detail-row">
          <span class="pred-verdict-detail-label">上下半场</span>
          <span class="pred-verdict-detail-val">${ht.note}</span>
        </div>
        <div class="pred-verdict-ht-chips">
          ${verdictBadge(ht.htDirHit, '半场方向中', '半场方向偏')}
          ${ht.directionFlipped
            ? `<span class="pred-verdict-ht-flip">下半场改写</span>`
            : `<span class="pred-verdict-ht-steady">半场至全场一致</span>`}
          ${ht.ftDirHit != null ? verdictBadge(ht.ftDirHit, '全场方向中', '全场方向偏') : ''}
        </div>
        ${ht.insight ? `<p class="pred-verdict-ht-insight">${ht.insight}</p>` : ''}
      </div>` : ''}
      ${t.available ? `
      <div class="pred-verdict-detail">
        <span class="pred-verdict-detail-label">总进球</span>
        <span class="pred-verdict-detail-val">预测偏${t.modelSide} · 实际${t.actualSide}（线 ${t.line}）</span>
        ${verdictBadgeOrNeutral(t.hit, '命中', '未中', '走水')}
      </div>` : ''}
      ${mg.available ? `
      <div class="pred-verdict-detail">
        <span class="pred-verdict-detail-label">净胜档</span>
        <span class="pred-verdict-detail-val">实际 ${mg.actual}${mg.modelPct != null ? ` · 模型全达标 ${mg.modelPct}%` : ''}</span>
        ${verdictBadgeOrNeutral(mg.hit, '一致', '偏差', '难判')}
      </div>` : ''}
      ${v.goalEfficiencyHit != null ? `
      <div class="pred-verdict-detail">
        <span class="pred-verdict-detail-label">进球路径</span>
        <span class="pred-verdict-detail-val">赛前主路径 vs 赛后效率标签</span>
        ${verdictBadge(v.goalEfficiencyHit, '一致', '偏差')}
      </div>` : ''}
      ${v.atmosphereHit != null ? `
      <div class="pred-verdict-detail">
        <span class="pred-verdict-detail-label">进球氛围</span>
        <span class="pred-verdict-detail-val">强倾向 vs 实际总进球</span>
        ${verdictBadge(v.atmosphereHit, '一致', '偏差')}
      </div>` : ''}
      ${gt.available ? `
      <div class="pred-verdict-detail pred-verdict-detail--stack">
        <div class="pred-verdict-detail-row">
          <span class="pred-verdict-detail-label">双重合时段</span>
          <span class="pred-verdict-detail-val">${gt.note}</span>
          ${verdictBadgeOrNeutral(gt.hit, '命中', '未中', '无球')}
        </div>
        ${gt.peakStats?.rows?.length ? `
        <div class="pred-verdict-gt-stats">
          <span class="pred-verdict-gt-stats-label">历史高峰核验（统计）</span>
          ${gt.peakStats.summary_cn ? `<span class="pred-verdict-gt-stats-sum">${gt.peakStats.summary_cn}</span>` : ''}
          <ul class="pred-verdict-gt-stats-list">
            ${gt.peakStats.rows.map(row => `
              <li class="pred-verdict-gt-stats-item${row.hit ? ' pred-verdict-gt-stats-item--hit' : ''}">
                ${row.label} · ${row.note} ${row.hit ? '✓' : '—'}
              </li>`).join('')}
          </ul>
          ${gt.peakStats.sideParseComplete === false ? '<span class="pred-verdict-gt-stats-warn">主客进球分钟为推断值，复杂乌龙局请对照 scorers</span>' : ''}
        </div>` : ''}
      </div>` : ''}
    </div>`;
}

function predictionVerdictPanel(m) {
  const v = computePredictionVerdict(m);
  if (!v) return '';
  const integrityColor = v.dataIntegrity === 'ok' ? '#5BBF8A' : v.dataIntegrity === 'suspect' ? '#D95F6A' : '#C8A96E';
  const integrityIcon = v.dataIntegrity === 'ok' ? '✓' : v.dataIntegrity === 'suspect' ? '⚠' : 'ℹ';
  const showIntegrity = v.dataIntegrity !== 'ok';
  const top3Html = v.top3.length
    ? `<div class="pred-verdict-top3">
        <span class="pred-verdict-top3-label">概率前三比分</span>
        <div class="pred-verdict-top3-chips">
          ${v.top3.map((d, i) => `
            <span class="pred-verdict-top3-chip${d.hit ? ' pred-verdict-top3-chip--hit' : ''}">
              #${i + 1} ${d.score} <em>${d.prob}%</em>${d.hit ? ' ✓' : ''}
            </span>`).join('')}
        </div>
      </div>`
    : '';

  return `
    <div class="pred-verdict-panel">
      ${renderScoreCompareHero(m, v)}
      ${top3Html}
      ${renderMarketVerdictDetails(v)}
      ${showIntegrity ? `
      <div class="intel-strip pred-verdict-integrity" style="border-left-color:${integrityColor}">
        <span style="color:${integrityColor};font-weight:700">${integrityIcon} 数据完整性</span> · ${v.dataIntegrityNote}
      </div>` : ''}
    </div>`;
}

// ── Score Distribution ─────────────────────────────────────
function scoreDistribution(dist, opts = {}) {
  if (!dist?.length) {
    return `<div class="intel-card intel-card--gold">暂无 xG 数据，无法推算比分概率分布。</div>`;
  }
  const max = Math.max(...dist.map(d => d.prob));
  const official = opts.officialScore;
  const showHits = !!official;
  return `<div class="score-dist-grid" role="list" aria-label="比分概率 Top 5">
    ${dist.map((d, i) => {
      const rank = i + 1;
      const hit = showHits && d.score === official;
      const tierClass = rank <= 3 ? `score-dist-card--r${rank}` : 'score-dist-card--plain';
      const hitClass = hit ? ' score-dist-card--hit' : '';
      const barH = Math.max(8, Math.round((d.prob / max) * 100));
      const rankHtml = rank <= 3
        ? `<span class="score-dist-rank">#${rank}</span>`
        : `<span class="score-dist-rank score-dist-rank--plain">${rank}</span>`;
      return `
      <div class="score-dist-card ${tierClass}${hitClass}" role="listitem">
        ${rankHtml}
        <span class="score-dist-score">${d.score}${hit ? '<span class="score-dist-hit" title="官方赛果">✓</span>' : ''}</span>
        <div class="score-dist-bar-track" aria-hidden="true">
          <div class="score-dist-bar" style="--bar-h:${barH}%"></div>
        </div>
        <span class="score-dist-pct"><span class="score-dist-pct-val">${d.prob}</span><span class="score-dist-pct-unit">%</span></span>
      </div>`;
    }).join('')}
  </div>`;
}

function poissonScoreFootnote(p) {
  if (!hasPoissonInputs(p) || typeof computeOutcomeFromXg !== 'function') return '';
  const o = computeOutcomeFromXg(p.xg_home, p.xg_away);
  const parts = [
    `泊松最可能比分 <strong>${o.score}</strong>（${o.score_prob}%）`,
    `网格内胜平负 ${o.home_win}% / ${o.draw}% / ${o.away_win}%`,
  ];
  if (o.tail_mass_pct > 0) parts.push(`未列入表内的高比分约 ${o.tail_mass_pct}%`);
  return `<div class="intel-footnote mf-pred-poisson-foot">${parts.join(' · ')}</div>`;
}

function upsetLevelStyle(level) {
  const map = {
    LOW: { color: '#5BBF8A', bg: 'rgba(91,191,138,0.08)', border: 'rgba(91,191,138,0.28)' },
    MEDIUM: { color: '#C8A96E', bg: 'rgba(200,169,110,0.08)', border: 'rgba(200,169,110,0.28)' },
    ELEVATED: { color: '#ff8855', bg: 'rgba(255,136,85,0.1)', border: 'rgba(255,136,85,0.32)' },
    HIGH: { color: '#D95F6A', bg: 'rgba(217,95,106,0.1)', border: 'rgba(217,95,106,0.32)' },
  };
  return map[level] || map.MEDIUM;
}

/** 主教练深度分析 — 战术风格 / 换人 / 领先落后 / 强弱队策略 */
function coachScenarioBlock(icon, title, label, detail, accent) {
  const color = accent || 'var(--gold)';
  return `
    <div style="padding:0.55rem 0.65rem;background:rgba(255,255,255,0.025);border-radius:4px;border-left:3px solid ${color};margin-bottom:0.45rem">
      <div style="font-size:0.74rem;letter-spacing:1px;color:${color};margin-bottom:0.2rem">${icon} ${title}${label ? ` · <strong>${label}</strong>` : ''}</div>
      <div style="font-size:0.84rem;color:var(--txt2);line-height:1.6">${detail || '—'}</div>
    </div>`;
}

function renderCoachCard(c, teamName, sideColor) {
  if (!c) return '';
  const tags = (c.style_tags || []).map(t =>
    `<span style="font-size:0.68rem;padding:0.12rem 0.4rem;border-radius:2px;background:${sideColor}18;color:${sideColor};border:1px solid ${sideColor}33;margin:0 0.25rem 0.25rem 0;display:inline-block">${t}</span>`
  ).join('');

  return `
    <div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:6px;padding:1rem;height:100%">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:0.75rem;margin-bottom:0.75rem;flex-wrap:wrap">
        <div>
          <div style="font-size:1rem;font-weight:800;color:${sideColor}">${c.name}</div>
          <div style="font-size:0.8rem;color:var(--txt2);margin-top:0.2rem">${teamName} · ${c.nation || ''}${c.age ? ` · ${c.age}岁` : ''}${c.tenure ? ` · ${c.tenure}` : ''}</div>
          ${c.wc_exp ? `<div style="font-size:0.76rem;color:var(--txt2);margin-top:0.25rem;line-height:1.62">🏆 ${c.wc_exp}</div>` : ''}
        </div>
        <div style="text-align:right;font-size:0.76rem;color:var(--txt2);line-height:1.62">
          <div>偏好阵型</div>
          <div style="font-weight:700;color:var(--txt);margin-top:0.15rem">${c.formation_pref || '—'}</div>
        </div>
      </div>

      <div style="margin-bottom:0.65rem">${tags}</div>
      <div style="font-size:0.86rem;line-height:1.65;color:var(--txt);margin-bottom:0.85rem;padding:0.55rem;background:rgba(255,255,255,0.03);border-radius:4px">
        ${c.style_summary || ''}
      </div>

      ${intelSubhead('换人习惯', { caps: true })}
      ${coachScenarioBlock('🔄', '换人窗口', c.subs?.timing, c.subs?.pattern, sideColor)}
      <div style="font-size:0.76rem;color:var(--txt2);margin:-0.25rem 0 0.65rem 0.5rem;line-height:1.62">
        场均首换约 <strong style="color:${sideColor}">${c.subs?.avg_first_sub || '—'}</strong>${c.subs?.note ? ` · ${c.subs.note}` : ''}
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.45rem;margin-bottom:0.65rem">
        ${coachScenarioBlock('🟢', '领先时', c.when_leading?.label, c.when_leading?.detail, '#5BBF8A')}
        ${coachScenarioBlock('🔴', '落后时', c.when_trailing?.label, c.when_trailing?.detail, '#D95F6A')}
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.45rem;margin-bottom:0.65rem">
        ${coachScenarioBlock('💪', '对强队', c.vs_strong?.label, c.vs_strong?.detail, '#ff8855')}
        ${coachScenarioBlock('🎯', '对弱队', c.vs_weak?.label, c.vs_weak?.detail, '#7BB8D4')}
      </div>

      ${c.tournament ? `
      <div style="font-size:0.84rem;line-height:1.6;padding:0.5rem 0.6rem;background:rgba(255,255,255,0.03);border-radius:4px;margin-bottom:0.65rem;border:1px solid rgba(255,255,255,0.06)">
        <span style="font-size:0.72rem;letter-spacing:1px;color:var(--gold)">大赛心态 · </span>${c.tournament}
      </div>` : ''}

      ${(c.traits || []).length ? `
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-bottom:0.65rem">
        ${c.traits.map(t => `<span style="font-size:0.72rem;padding:0.15rem 0.45rem;border-radius:2px;background:rgba(255,255,255,0.05);color:var(--txt2);border:1px solid var(--border)">${t}</span>`).join('')}
      </div>` : ''}

      ${c.match_note ? `
      <div style="font-size:0.84rem;line-height:1.65;padding:0.55rem 0.65rem;background:${sideColor}0a;border-radius:4px;border:1px solid ${sideColor}28">
        <strong style="color:${sideColor}">本场预判 · </strong>${c.match_note}
      </div>` : ''}
    </div>`;
}

function coachAnalysisPanel(ca, homeName, awayName) {
  if (!ca || (!ca.home && !ca.away)) return '';
  return `
    <div class="mf-panel mf-panel--wide mf-panel--coach">
      ${panelLabel('主教练深度分析 · 战术与临场决策', 'accent')}
      ${panelLegend('风格标签、换人窗口、领先/落后决策、对强弱队策略及大赛心态 — 供推演临场变阵与比赛走势参考。')}
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1rem">
        ${renderCoachCard(ca.home, homeName, 'var(--cyan)')}
        ${renderCoachCard(ca.away, awayName, 'var(--red)')}
      </div>
      ${intelFootnote('基于公开执教履历、大赛样本与媒体报道归纳 · 仅供娱乐推演 · 非官方战术指令')}
    </div>`;
}

/** 综合推演关键因素条目（积分榜 · 气候 · 战术） */
function renderInsightFactorRows(factors, fallback) {
  const list = factors?.length ? factors : (fallback ? [{ icon: '→', label: null, text: fallback }] : []);
  if (!list.length) return '<div class="intel-body" style="opacity:0.75">暂无关键因素</div>';
  return list.map(f => `
        <div class="intel-highlight mf-pred-insight-highlight mf-pred-insight-factor">
          <span class="intel-highlight-arrow">${f.icon || '→'}</span>
          <span>${f.label ? `<strong class="mf-pred-insight-factor-label">${f.label}</strong> · ` : ''}${f.text}</span>
        </div>`).join('');
}

/** 终端区下方 · 综合推演关键因素 + 比分概率分布（置于模型推演概要之上） */
function renderPredictionInsightStrip(p, m, finished) {
  const officialScore = finished ? getOfficialScoreStr(m) : null;
  const verdict = finished ? computePredictionVerdict(m) : null;
  const calNote = m.prediction?.depth_calibrated ? '（含<strong>舆论校准</strong>微调）' : '';
  const verdictHtml = finished && verdict
    ? ` <strong class="mf-pred-insight-verdict mf-pred-insight-verdict--${verdict.anyTop3Hit ? 'hit' : 'miss'}">官方 ${officialScore} · Top3 ${verdict.anyTop3Hit ? '有命中' : '均未中'}</strong>`
    : '';
  const factorRows = renderInsightFactorRows(p.insight_factors, p.key_factor || '综合因素分析');
  return `
    <div class="mf-pred-insight-strip">
      <div class="mf-pred-insight-section">
        <div class="mf-pred-insight-head">
          <span class="mf-pred-insight-title">综合推演关键因素</span>
        </div>
        <p class="mf-pred-insight-legend">模型判断本场走势的重要变量 — 含<strong>小组积分</strong>、<strong>赛场气候</strong>与战术阵容；已纳入终端胜平负娱乐推演${calNote}${finished ? ' · 下方为<strong>赛前</strong>泊松分布' : ''}。</p>
        <div class="mf-pred-insight-factors">${factorRows}</div>
      </div>
      <div class="mf-pred-insight-divider" aria-hidden="true"></div>
      <div class="mf-pred-insight-section">
        <div class="mf-pred-insight-head">
          <span class="mf-pred-insight-title">本场比分概率分布</span>
          <span class="mf-pred-insight-meta">xG <span class="xg-home">${p.xg_home ?? '—'}</span> – <span class="xg-away">${p.xg_away ?? '—'}</span></span>
        </div>
        <p class="mf-pred-insight-legend">由本场 xG 对 <strong>0-0 至 5-5</strong> 共 36 种比分做独立泊松推演；展示 Top <strong>5</strong>。与终端区胜平负为不同口径。${verdictHtml}</p>
        <div class="mf-pred-score-dist">${scoreDistribution(getMatchScoreDistribution(p), { officialScore })}</div>
        ${poissonScoreFootnote(p)}
      </div>
    </div>`;
}

// ── Render Single Match ────────────────────────────────────
function resultBanner(m) {
  const r = m.actualResult;
  if (!r || r.home_score == null) return '';
  const finished = ['FT', 'AET', 'PEN'].includes(r.status);
  const live = !finished && r.status && r.status !== 'NS';
  const bg = finished ? 'rgba(91,191,138,0.12)' : 'rgba(200,169,110,0.12)';
  const border = finished ? 'rgba(91,191,138,0.35)' : 'rgba(200,169,110,0.35)';
  const color = finished ? '#5BBF8A' : '#C8A96E';
  const label = finished ? '官方赛果' : (r.label || r.status) + (r.elapsed ? ` ${r.elapsed}'` : '');
  return `
    <div style="padding:0.65rem 1.25rem;background:${bg};border-bottom:1px solid ${border};display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap">
      <span style="font-size:0.74rem;font-weight:800;letter-spacing:2px;color:${color}">${label}</span>
      <span style="font-size:1.35rem;font-weight:800;color:var(--gold)">${m.home.name} ${r.home_score} — ${r.away_score} ${m.away.name}</span>
      ${finished ? '<span style="font-size:0.76rem;color:var(--txt2)">数据来源 API 官方同步</span>' : ''}
    </div>`;
}

function renderStarNumberBadge(s) {
  const hasOfficial = typeof DATA_INTEGRITY !== 'undefined' && DATA_INTEGRITY.hasOfficialNumber(s);
  if (hasOfficial) {
    return `<span style="display:inline-flex;align-items:center;gap:0.3rem;flex-shrink:0;margin-right:0.4rem">
      <span style="font-size:0.92rem;font-weight:800;color:var(--cyan);min-width:1.75rem;text-align:center;font-variant-numeric:tabular-nums;line-height:1">#${s.number}</span>
      <span style="font-size:0.62rem;font-weight:700;letter-spacing:0.5px;padding:0.06rem 0.28rem;border-radius:2px;background:rgba(91,191,138,0.12);color:#5BBF8A;border:1px solid rgba(91,191,138,0.32)" title="${s.number_source || 'FIFA 官方名单'}">官方</span>
    </span>`;
  }
  return `<span style="display:inline-flex;align-items:center;gap:0.25rem;flex-shrink:0;margin-right:0.4rem" title="号码尚未经 FIFA 最终名单官方确认">
    <span style="font-size:0.84rem;font-weight:700;color:rgba(122,143,181,0.45);min-width:1.75rem;text-align:center">—</span>
  </span>`;
}

function renderStarPanel(team) {
  const list = team.stars?.length ? team.stars : (team.star ? [team.star] : []);
  if (!list.length) return '<div style="color:var(--txt2);font-size:0.84rem">暂无数据</div>';
  const officialCount = list.filter(s => typeof DATA_INTEGRITY !== 'undefined' && DATA_INTEGRITY.hasOfficialNumber(s)).length;
  const footnote = officialCount
    ? intelFootnote(`球衣号码来源：FIFA 2026 世界杯最终名单（${officialCount}/${list.length} 人已官方确认）`)
    : '';
  return list.map(s => `
    <div class="star-row">
      <div style="flex:1">
        <div style="display:flex;align-items:center;flex-wrap:wrap;gap:0.15rem;font-size:0.92rem;font-weight:700;line-height:1.35">
          ${renderStarNumberBadge(s)}
          <span>${s.name}</span>
          ${s.rating ? `<span style="font-size:0.74rem;color:var(--gold);font-weight:700">★ ${s.rating}</span>` : ''}
        </div>
        <div class="intel-body" style="margin-top:0.2rem;padding-left:2.15rem">${s.pos} · ${s.club}${s.stats ? ` · ${s.stats}` : ''}</div>
        <div style="font-size:0.76rem;color:var(--txt);margin-top:0.25rem;padding-left:2.15rem;line-height:1.55">${s.desc}</div>
      </div>
    </div>`).join('') + footnote;
}

function renderInjuryRows(injuries) {
  if (!injuries?.length) return '<div class="intel-body" style="opacity:0.75">暂无确认伤病信息</div>';
  return injuries.map(inj => `
    <div class="intel-injury-row">
      ${injuryBadge(inj.status)}
      <div>
        <div class="intel-injury-name">${inj.player}</div>
        <div class="intel-body">${inj.note}</div>
        ${inj.confirmed
          ? '<span class="intel-status" style="color:#D95F6A">● 官方确认</span>'
          : '<span class="intel-status" style="color:#C8A96E">● 待核实 / 媒体报道</span>'}
      </div>
    </div>`).join('');
}

function renderRumorBlock(rumors) {
  if (!rumors?.length) return '';
  return `
    <div style="margin-top:0.65rem;padding-top:0.55rem;border-top:1px solid rgba(255,255,255,0.06)">
      ${intelSubhead('Camp Rumors', { caps: true })}
      ${rumors.map(r => `<div class="intel-body" style="padding:0.35rem 0;border-bottom:1px solid rgba(255,255,255,0.04)">${r}</div>`).join('')}
    </div>`;
}

function refereeQuantPanel(ref) {
  if (isPending(ref)) return '';
  const pen = ref.avg_penalty != null ? ref.avg_penalty : '—';
  const hwr = ref.home_win_rate;
  const bias = ref.bias_index;
  const biasLabel = bias == null ? '' : bias >= 58 ? '略倾向主队' : bias <= 42 ? '略倾向客队' : '相对中立';
  const biasColor = bias == null ? 'var(--txt2)' : bias >= 58 ? 'var(--cyan)' : bias <= 42 ? 'var(--red)' : 'var(--gold)';
  return `
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem;margin-bottom:0.75rem">
          <div style="text-align:center;background:rgba(255,215,0,0.06);border:1px solid rgba(255,215,0,0.15);border-radius:4px;padding:0.4rem">
            <div style="font-size:1.1rem;font-weight:800;color:var(--gold)">${ref.avg_yellow}</div>
            <div style="font-size:0.68rem;color:var(--txt2)">黄牌/场</div>
          </div>
          <div style="text-align:center;background:rgba(217,95,106,0.06);border:1px solid rgba(217,95,106,0.15);border-radius:4px;padding:0.4rem">
            <div style="font-size:1.1rem;font-weight:800;color:var(--red)">${ref.avg_red}</div>
            <div style="font-size:0.68rem;color:var(--txt2)">红牌/场</div>
          </div>
          <div style="text-align:center;background:rgba(0,229,255,0.06);border:1px solid rgba(0,229,255,0.15);border-radius:4px;padding:0.4rem">
            <div style="font-size:1.1rem;font-weight:800;color:var(--cyan)">${pen}</div>
            <div style="font-size:0.68rem;color:var(--txt2)">点球/场</div>
          </div>
        </div>
        ${hwr != null ? `
        <div style="margin-bottom:0.75rem;padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:4px;border:1px solid var(--border)">
          <div style="font-size:0.74rem;letter-spacing:1px;color:var(--txt2);margin-bottom:0.35rem">量化执法倾向（模型参考）</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;font-size:0.84rem">
            <div>执法后<strong style="color:var(--cyan)">主队胜率 ${hwr}%</strong></div>
            <div>偏向指数 <strong style="color:${biasColor}">${bias ?? '—'}/100</strong> · ${biasLabel}</div>
          </div>
          ${bias != null ? `<div style="margin-top:0.4rem;height:5px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden">
            <div style="width:${bias}%;height:100%;background:${biasColor};border-radius:3px"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.66rem;color:var(--txt2);margin-top:2px">
            <span>客队</span><span>中立50</span><span>主队</span>
          </div>` : ''}
        </div>` : ''}
        ${ref.wc_final ? `<div style="font-size:0.8rem;color:var(--gold);margin-bottom:0.5rem">🏆 ${ref.wc_final}</div>` : ''}
        <div style="font-size:0.84rem;color:var(--txt2);line-height:1.6;margin-bottom:0.5rem">${ref.bias_note}</div>
        <div style="font-size:0.82rem;background:rgba(200,169,110,0.07);border:1px solid rgba(255,215,0,0.15);border-radius:3px;padding:0.5rem;color:var(--gold);line-height:1.62">
          ⚠ ${(ref.tendencies||[]).join(' · ')}
        </div>`;
}

function isArchivedMatch(m) {
  return m?.archived === true;
}

/** 归档复盘视图 — 核验 + 推演概要 + 比分分布（不含赛前情报墙） */
function renderArchivedMatch(m) {
  const p = m.prediction;
  const tag = (label, color) => `<span style="font-size:0.68rem;letter-spacing:1.5px;text-transform:uppercase;padding:0.12rem 0.5rem;border-radius:2px;background:${color}22;color:${color};border:1px solid ${color}44;font-weight:700">${label}</span>`;
  const finished = true;
  const r = m.actualResult || {};
  const highlightsHtml = r.highlights || r.scorers
    ? `<div class="mf-archived-meta intel-strip" style="margin:0 1.25rem 1rem">
        ${r.scorers ? `<div><strong>进球</strong> · ${r.scorers}</div>` : ''}
        ${r.highlights ? `<div style="margin-top:0.35rem;color:var(--txt2)">${r.highlights}</div>` : ''}
      </div>`
    : '';
  const summaryNote = m.depth_calibration?.public_summary_note;
  const summaryHtml = summaryNote
    ? `<div class="intel-strip intel-strip--model" style="margin:0 1.25rem 1rem">${summaryNote}</div>`
    : '';
  const lineupHtml = m.lineup?.confirmed
    ? `<div class="mf-panel mf-panel--wide" style="margin:0 1.25rem 1rem">
        ${panelLabel('官方首发 · 归档快照', 'gold')}
        <div class="intel-body">${m.lineup.formation || '—'}${m.lineup.impact?.summary ? ' · ' + m.lineup.impact.summary : ''}</div>
      </div>`
    : '';

  return `
  <div class="match-full-card fade-in match-full-card--archived">
    <div class="mf-header mf-header--archived">
      <div class="mf-meta">
        ${tag('GROUP ' + m.group, '#7BB8D4')}
        ${m.matchday ? tag('MATCHDAY ' + m.matchday, '#888888') : ''}
        ${tag('已归档复盘', '#5BBF8A')}
        <span style="font-size:0.84rem;color:var(--txt2)">${m.venue || ''}${m.city ? ' · ' + m.city : ''}</span>
      </div>
      <div class="mf-kickoff" style="text-align:right">
        <div style="font-size:0.72rem;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:2px">🇨🇳 北京时间</div>
        <div style="font-size:1.1rem;font-weight:800;color:var(--gold);letter-spacing:1px;line-height:1.1">${m.date_beijing || ''} ${m.time_beijing || ''}</div>
        ${m.archivedAt ? `<div style="font-size:0.68rem;color:var(--txt2);margin-top:2px">归档 ${String(m.archivedAt).slice(0, 10)}</div>` : ''}
      </div>
    </div>
    ${predictionVerdictPanel(m)}
    ${renderPredictionInsightStrip(p, m, finished)}
    ${renderDepthCalibrationBlock(m.depth_calibration, null, p, m.home?.name, m.away?.name)}
    ${summaryHtml}
    ${highlightsHtml}
    ${lineupHtml}
    ${m.note ? `<div class="intel-footnote" style="margin:0 1.25rem 1.5rem">${m.note}</div>` : ''}
  </div>`;
}

function renderMatch(m) {
  if (isArchivedMatch(m)) return renderArchivedMatch(m);
  const p = m.prediction;
  const tag = (label, color) => `<span style="font-size:0.68rem;letter-spacing:1.5px;text-transform:uppercase;padding:0.12rem 0.5rem;border-radius:2px;background:${color}22;color:${color};border:1px solid ${color}44;font-weight:700">${label}</span>`;
  const finished = m.actualResult && ['FT', 'AET', 'PEN'].includes(m.actualResult.status);

  return `
  <div class="match-full-card fade-in">
    ${finished ? predictionVerdictPanel(m) : resultBanner(m)}
    ${pendingBanner(m)}
    <!-- MATCH HEADER -->
    <div class="mf-header">
      <div class="mf-meta">
        ${tag('GROUP ' + m.group, '#7BB8D4')}
        ${tag('MATCHDAY ' + m.matchday, '#888888')}
        ${finished ? tag('已结束', '#5BBF8A') : tag('待赛', '#C8A96E')}
        <span style="font-size:0.84rem;color:var(--txt2)">${m.venue} · ${m.city}</span>
      </div>
      <div class="mf-kickoff" style="text-align:right">
        <div style="font-size:0.72rem;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:2px">🇨🇳 北京时间</div>
        <div style="font-size:1.1rem;font-weight:800;color:var(--gold);letter-spacing:1px;line-height:1.1">${m.date_beijing||''} ${m.time_beijing||m.time}</div>
        <div style="font-size:0.72rem;color:var(--txt2);margin-top:2px">当地 ${m.time_local||m.time} · ${m.timezone}</div>
      </div>
    </div>

    <!-- TEAMS HERO · Match Terminal -->
    ${renderMatchHero(m, p, finished)}

    ${renderPredictionInsightStrip(p, m, finished)}
    ${renderDepthCalibrationBlock(m.depth_calibration, m.upset_alert, p, m.home?.name, m.away?.name)}

    <!-- 4-COLUMN DETAIL GRID -->
    <div class="mf-detail-grid">

      <!-- STAR PLAYERS HOME -->
      <div class="mf-panel mf-panel--split-right">
        ${panelLabel(`${m.home.name} 核心球员 · Key Players`, 'home')}
        ${panelLegend('本场最具威胁球员（3 人）— 球衣号来自 FIFA 最终名单，「官方」标签为已确认号码。')}
        ${renderStarPanel(m.home)}
      </div>

      <!-- STAR PLAYERS AWAY -->
      <div class="mf-panel">
        ${panelLabel(`${m.away.name} 核心球员 · Key Players`, 'away')}
        ${panelLegend('本场最具威胁球员（3 人）— 球衣号来自 FIFA 最终名单，「官方」标签为已确认号码。')}
        ${renderStarPanel(m.away)}
      </div>

      <!-- H2H -->
      <div class="mf-panel">
        ${panelLabel('历史交锋 · H2H')}
        ${panelLegend('正式比赛胜负统计与近 5 次对阵明细。')}
        ${h2hBar(m.h2h, m.home.name, m.away.name)}
      </div>

      <!-- REFEREE -->
      <div class="mf-panel">
        ${panelLabel('裁判分析 · Referee')}
        ${renderRefereePanel(m.referee)}
      </div>

      ${m.lineup ? renderLineupPanel(m) : ''}

      <!-- INJURIES HOME -->
      <div class="mf-panel mf-panel--split-right">
        ${panelLabel(`${m.home.name} — 伤病 & 更衣室动态`, 'home')}
        ${panelLegend('确认缺阵 / 存疑标注见状态徽章；含训练营传言，仅供推演参考。')}
        ${renderInjuryRows(m.home.injuries)}
        ${renderRumorBlock(m.home.rumors)}
      </div>

      <!-- INJURIES AWAY -->
      <div class="mf-panel">
        ${panelLabel(`${m.away.name} — 伤病 & 更衣室动态`, 'away')}
        ${panelLegend('确认缺阵 / 存疑标注见状态徽章；含训练营传言，仅供推演参考。')}
        ${renderInjuryRows(m.away.injuries)}
        ${renderRumorBlock(m.away.rumors)}
      </div>

      ${coachAnalysisPanel(m.coach_analysis, m.home.name, m.away.name)}

      <!-- WEATHER PANEL (full width) -->
      ${weatherPanel(m.weather, m.home.name, m.away.name)}

    </div><!-- end detail grid -->

    ${renderGroupContextPanel(m.group_context)}

    <!-- 灵力分析已下线（无回测口径，与 xG 推演重复） -->
    ${mysticPanel(m.mystic, m.home.name, m.away.name)}
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
          <div style="font-size:0.8rem;color:var(--txt2)">FIFA #${nm.home.fifaRank} · Rating ${nm.home.rating}</div>
        </div>
      </div>
      <div style="flex:1;text-align:center;min-width:120px">
        <div style="font-size:0.74rem;letter-spacing:1.5px;color:var(--gold)">GROUP ${nm.group} · 明日赛事</div>
        <div style="font-size:0.68rem;font-weight:700;color:var(--gold);letter-spacing:1px;margin-top:3px">🇨🇳 北京时间</div>
        <div style="font-size:1.55rem;font-weight:800;color:var(--gold);margin:0.1rem 0;line-height:1.1">${nm.date_beijing||''} ${nm.time_beijing||nm.time}</div>
        <div style="font-size:0.74rem;color:var(--txt2)">当地 ${nm.time_local||nm.time} · ${nm.timezone||''}</div>
        <div style="font-size:0.74rem;color:var(--txt2);margin-top:2px">${nm.venue} · ${nm.city}</div>
      </div>
      <div style="display:flex;align-items:center;gap:0.6rem;text-align:right">
        <div>
          <div style="font-size:1rem;font-weight:700">${nm.away.name}</div>
          <div style="font-size:0.8rem;color:var(--txt2)">FIFA #${nm.away.fifaRank} · Rating ${nm.away.rating}</div>
        </div>
        <img src="${FLAG(nm.away.iso)}" style="width:44px;height:30px;object-fit:cover;border-radius:3px" onerror="this.style.opacity='0'">
      </div>
    </div>
    <p style="font-size:0.92rem;color:var(--txt2);line-height:1.7;margin-bottom:1rem">${nm.teaser}</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:0.5rem;margin-bottom:1rem">
      <div style="font-size:0.84rem;color:var(--txt2);line-height:1.7">${nm.teaser||''}</div>
    </div>
    <div style="background:rgba(200,169,110,0.07);border:1px solid rgba(255,215,0,0.2);border-radius:4px;padding:0.75rem;display:flex;gap:2rem;flex-wrap:wrap;align-items:center">
      <div style="text-align:center"><div style="font-size:0.72rem;color:var(--txt2);letter-spacing:1px">模型推演胜率</div><div style="font-size:1.4rem;font-weight:800;color:var(--cyan)">${nm.home_win}%</div></div>
      <div style="text-align:center"><div style="font-size:0.72rem;color:var(--txt2);letter-spacing:1px">平局推演</div><div style="font-size:1.4rem;font-weight:800;color:var(--txt2)">${nm.draw||0}%</div></div>
      <div style="text-align:center"><div style="font-size:0.72rem;color:var(--txt2);letter-spacing:1px">冷门推演</div><div style="font-size:1.4rem;font-weight:800;color:var(--red)">${nm.away_win}%</div></div>
      <div style="margin-left:auto;text-align:right">
        <div style="font-size:0.72rem;color:var(--txt2);letter-spacing:1px;margin-bottom:0.2rem">娱乐推演比分</div>
        <div style="font-size:2rem;font-weight:800;color:var(--gold)">${nm.predicted_score}</div>
        <div class="play-note">数据模型娱乐推演 · ${MODEL_TAGLINE}</div>
      </div>
    </div>`;
}

// ── Hexagram Scenario Card ─────────────────────────────────
function renderScenario(icon, title, body, favors, prob, bg, border, color) {
  return `
    <div style="padding:0.65rem 0.8rem;background:${bg};border:1px solid ${border};border-radius:4px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.35rem;flex-wrap:wrap;gap:0.3rem">
        <div style="font-size:0.82rem;font-weight:700;color:${color}">${icon} ${title}</div>
        <div style="font-size:0.74rem;padding:0.1rem 0.45rem;border-radius:3px;background:${color}20;
          color:${color};border:1px solid ${color}40;white-space:nowrap">
          有利方 ${favors} · ${prob}%
        </div>
      </div>
      <div style="font-size:0.78rem;color:rgba(210,195,235,0.7);line-height:1.6">${body}</div>
    </div>`;
}

// ── Mystic / Taoist Panel ─────────────────────────────────
function mysticPanel(mx, homeName, awayName) {
  return '';
}

// ── Group Standings (results page) ─────────────────────────
function renderGroupSnapshots(snapshots) {
  if (!snapshots?.length) return '';
  return snapshots.map(g => `
    <div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:1.25rem;margin-bottom:1.5rem">
      <div style="font-size:0.76rem;letter-spacing:2px;color:var(--gold);margin-bottom:0.75rem;font-weight:700">${g.label || '小组积分榜'}</div>
      <div style="display:grid;grid-template-columns:2fr repeat(7,1fr);gap:0.35rem;font-size:0.8rem;padding-bottom:0.4rem;border-bottom:1px solid var(--border);color:var(--txt2)">
        <span>球队</span><span style="text-align:center">赛</span><span style="text-align:center">胜</span><span style="text-align:center">平</span><span style="text-align:center">负</span><span style="text-align:center">进</span><span style="text-align:center">失</span><span style="text-align:center">分</span>
      </div>
      ${g.table.map((r,i) => `
        <div style="display:grid;grid-template-columns:2fr repeat(7,1fr);gap:0.35rem;font-size:0.86rem;padding:0.45rem 0;border-bottom:1px solid rgba(255,255,255,0.04);align-items:center">
          <span style="font-weight:${i<2?'700':'500'};color:${i<2?'var(--cyan)':'var(--txt)'}">${i+1}. ${r.team}</span>
          <span style="text-align:center;color:var(--txt2)">${r.p}</span>
          <span style="text-align:center">${r.w}</span>
          <span style="text-align:center">${r.d}</span>
          <span style="text-align:center">${r.l}</span>
          <span style="text-align:center">${r.gf}</span>
          <span style="text-align:center">${r.ga}</span>
          <span style="text-align:center;font-weight:800;color:var(--gold)">${r.pts}</span>
        </div>`).join('')}
    </div>`).join('');
}

// ── Init ───────────────────────────────────────────────────
function initMatchesPage() {
  if (typeof MATCH_DATA === 'undefined') {
    const cont = document.getElementById('matches-container');
    if (cont) cont.innerHTML = '<p style="color:var(--red);padding:2rem">数据加载失败，请刷新页面。</p>';
    return;
  }
  try {
    renderTicker(MATCH_DATA.breakingNews);
    startLiveTimer();
  } catch (e) {
    console.error(e);
  }

  const syncEl = document.getElementById('sync-status');
  if (syncEl) {
    const hasLive = typeof LIVE_DATA !== 'undefined' && LIVE_DATA.fixtures?.length;
    syncEl.textContent = hasLive
      ? `API 已同步 · ${LIVE_DATA.fixtures.length} 场赛事`
      : '手动更新 · 每日自动同步';
    syncEl.style.color = hasLive ? 'var(--green)' : 'var(--txt2)';
  }

  const footerUpd = document.getElementById('footer-updated');
  if (footerUpd) footerUpd.textContent = getLastSyncTime().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) + ' 北京时间';

  const dateEl = document.getElementById('today-date');
  if (dateEl && MATCH_DATA.todayMatches?.length) {
    const groups = [...new Set(MATCH_DATA.todayMatches.map(m => m.group))].sort().join('/');
    dateEl.textContent = `📅 ${MATCH_DATA.todayMatches[0].date_beijing || '今日'} — ${MATCH_DATA.todayMatches.length} 场待赛 · ${groups}组`;
  }

  const cont = document.getElementById('matches-container');
  if (!cont) return;
  if (!MATCH_DATA.todayMatches?.length) {
    cont.innerHTML = '<p style="color:var(--txt2);padding:2rem;text-align:center">今日暂无待赛场次 · 请查看下方「明日预告」<br><span style="font-size:0.85rem;opacity:0.75;margin-top:0.75rem;display:inline-block">若刚更新过数据仍为空，请 <strong>Ctrl+F5</strong> 强刷清除浏览器缓存</span></p>';
  } else {
    MATCH_DATA.todayMatches.forEach(raw => {
      const m = mergeLiveIntoMatch(raw);
      cont.innerHTML += renderMatch(m);
      cont.innerHTML += '<div style="height:2rem"></div>';
    });
  }

  renderNextMatch();

  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05 });
  setTimeout(() => document.querySelectorAll('.fade-in').forEach(el => obs.observe(el)), 200);

  const btn = document.getElementById('refresh-btn');
  if (btn) btn.addEventListener('click', refreshData);
}

function initResultsPage() {
  if (typeof RESULTS_DATA === 'undefined') return;
  renderTicker(RESULTS_DATA.breakingNews);
  startLiveTimer(RESULTS_DATA);

  const footerUpd = document.getElementById('footer-updated');
  if (footerUpd) footerUpd.textContent = getLastSyncTime(RESULTS_DATA).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) + ' 北京时间';

  const snap = document.getElementById('standings-snapshots');
  if (snap) snap.innerHTML = renderGroupSnapshots(RESULTS_DATA.groupSnapshots);

  const statsEl = document.getElementById('results-summary-stats');
  if (statsEl) {
    const finished = RESULTS_DATA.finishedMatches;
    const stats = computeResultsAggregateStats(finished);
    const trends = computeResultsTrendSeries(finished, { window: 6 });
    statsEl.innerHTML = renderResultsSummaryStats(stats, trends);
  }

  const dateEl = document.getElementById('results-date');
  if (dateEl) {
    dateEl.textContent = `📅 已归档 ${RESULTS_DATA.finishedMatches.length} 场 · 精简复盘模式（推演 vs 赛果核验）`;
  }

  const cont = document.getElementById('results-container');
  if (!cont) return;
  RESULTS_DATA.finishedMatches.forEach(m => {
    cont.innerHTML += renderMatch(m);
    cont.innerHTML += '<div style="height:2rem"></div>';
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05 });
  setTimeout(() => document.querySelectorAll('.fade-in').forEach(el => obs.observe(el)), 200);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('results-container')) initResultsPage();
  else initMatchesPage();
});
