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

  const footnote = finished
    ? '官方赛果见上方核验区 · 此处为赛前模型冻结预测 · 仅供娱乐推演'
    : `模型娱乐推演 · ${PLAY_NOTE_STD}`;

  return `
    <div class="mf-teams-hero">
      <div class="mf-terminal-teams">
        ${renderTerminalTeamSide(m.home, 'home')}
        <span class="mf-terminal-vs" aria-hidden="true">vs</span>
        ${renderTerminalTeamSide(m.away, 'away')}
      </div>

      <div class="mf-terminal-market">
        <div class="mf-terminal-market-row">
          <div class="mf-terminal-odds-cell">
            <span class="mf-terminal-odds-val mf-terminal-odds-val--home">${p.home_win}%</span>
            <span class="mf-terminal-odds-lbl">主胜</span>
          </div>
          <div class="mf-terminal-odds-cell">
            <span class="mf-terminal-odds-val mf-terminal-odds-val--draw">${p.draw}%</span>
            <span class="mf-terminal-odds-lbl">平局</span>
          </div>
          <div class="mf-terminal-odds-cell">
            <span class="mf-terminal-odds-val mf-terminal-odds-val--away">${p.away_win}%</span>
            <span class="mf-terminal-odds-lbl">客胜</span>
          </div>
        </div>
        <div class="mf-terminal-market-bar">
          <div style="width:${p.home_win}%;background:var(--cyan)"></div>
          <div style="width:${p.draw}%;background:rgba(255,255,255,0.15)"></div>
          <div style="width:${p.away_win}%;background:var(--red)"></div>
        </div>
      </div>

      <div class="mf-terminal-focus">
        <div class="mf-terminal-score-card">
          <div class="mf-terminal-score-label">${finished ? '赛前预测比分' : '娱乐推演比分'}</div>
          <div class="mf-terminal-score">${formatDisplayScore(p.score)}</div>
          <div class="mf-terminal-score-meta">
            xG <span class="xg-home">${p.xg_home}</span> – <span class="xg-away">${p.xg_away}</span>
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

/** 比分分布：仅由 xG 泊松实时计算，不使用 JSON 手写 score_dist */
function getMatchScoreDistribution(p) {
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

const OUTCOME_CN = { home: '主胜', draw: '平局', away: '客胜' };

function getPoissonTopScore(p) {
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

function computeTotalsVerdict(m, ms) {
  const r = m.actualResult;
  const overPct = ms.over_pct;
  if (overPct == null || r?.home_score == null) return { available: false };
  const line = ms.totals_line ?? 2.5;
  const total = r.home_score + r.away_score;
  const actualOver = total > line;
  const push = Math.abs(total - line) < 0.01;
  const modelOver = overPct >= 50;
  let hit = push ? null : modelOver === actualOver;

  const replay = m.depth_calibration?.preview_replay;
  if (replay?.hits?.some(h => /进球氛围|精彩|沉闷/.test(h))) hit = true;
  if (replay?.misses?.some(h => /进球氛围|精彩|沉闷/.test(h))) hit = false;

  return {
    available: true,
    line,
    total,
    overPct,
    modelSide: modelOver ? '大' : '小',
    actualSide: push ? '走' : (actualOver ? '大' : '小'),
    hit,
    note: `模型 over ${overPct}% → 偏${modelOver ? '大' : '小'} · 实际 ${total} 球（线 ${line}）`,
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

function computeGoalTimingVerdict(m) {
  const gt = m.depth_calibration?.display_summary?.goal_timing;
  const firstMin = m.actualResult?.first_goal_min;
  if (!gt?.peaks || firstMin == null) return { available: false };
  const iv = minuteToGoalInterval(firstMin);
  const crossIv = gt.cross_insight?.cross_intervals || [];
  const hit = iv != null && crossIv.includes(iv);
  return {
    available: true,
    firstMin,
    interval: iv,
    hit,
    crossWindows: crossIv,
    note: hit
      ? `首球 ${firstMin}' · ${iv} 落在赛前重合窗口`
      : `首球 ${firstMin}' · ${iv}${crossIv.length ? '（重合窗 ' + crossIv.join('、') + '）' : ''}`,
  };
}

/** 赛前进球路径评分（与 prediction-signals-lib 口径一致） */
function scoreGoalPathPreview(favXg, dogXg, gap, xgT) {
  const s = { fav_burst: 10, dog_bloom: 10, open: 8, low: 10 };
  if (dogXg < 0.65) s.low += 34;
  if (dogXg >= 0.75 && dogXg <= 1.08 && gap >= 0.45 && gap <= 0.65) s.fav_burst += 30;
  if (dogXg >= 0.72 && gap >= 0.55 && gap <= 0.95) s.dog_bloom += 28;
  if (dogXg >= 0.82 && favXg >= 1.2 && gap >= 0.5 && gap <= 0.95) s.open += 26;
  if (gap >= 1.0) {
    s.low += 30;
    s.dog_bloom -= 6;
    s.open -= 4;
  }
  if (gap < 0.4) s.low += 26;
  if (favXg >= 2.0 && gap >= 1.3) s.low += 24;
  if (xgT >= 2.65) { s.open += 10; s.dog_bloom += 6; }
  if (xgT <= 2.25 && dogXg < 0.82) s.low += 18;
  if (xgT <= 2.25) s.low += 10;
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
  return { path: primary, lean, pathLabel: { fav_burst: '热门爆发', dog_bloom: '弱队开花', open: '对攻', low: '铁局/小球' }[primary] };
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

function computeResultsAggregateStats(matches) {
  let dirHit = 0;
  let dirN = 0;
  let top3Hit = 0;
  let top3N = 0;
  let effHit = 0;
  let effN = 0;

  for (const m of matches || []) {
    const v = computePredictionVerdict(m);
    if (!v) continue;
    dirN += 1;
    if (v.outcomeHit) dirHit += 1;
    top3N += 1;
    if (v.anyTop3Hit) top3Hit += 1;
    const eff = computeGoalEfficiencyHit(m);
    if (eff != null) {
      effN += 1;
      if (eff) effHit += 1;
    }
  }

  return {
    direction: { hit: dirHit, n: dirN, pct: statPct(dirHit, dirN) },
    top3: { hit: top3Hit, n: top3N, pct: statPct(top3Hit, top3N) },
    goalEff: { hit: effHit, n: effN, pct: statPct(effHit, effN) },
  };
}

function renderResultsSummaryStats(stats) {
  if (!stats?.direction?.n) return '';
  const cards = [
    {
      key: 'direction',
      icon: '🎯',
      label: '方向正确率',
      sub: '胜平负最高项',
      data: stats.direction,
    },
    {
      key: 'top3',
      icon: '📊',
      label: '比分前三正确率',
      sub: '泊松 Top3 含实际',
      data: stats.top3,
    },
    {
      key: 'goalEff',
      icon: '⚡',
      label: '进球效率正确率',
      sub: '赛前路径 vs 赛后兑现',
      data: stats.goalEff,
    },
  ];

  return `
    <div class="results-stats-bar fade-in">
      <div class="results-stats-head">
        <span class="results-stats-title">累计推演核验</span>
        <span class="results-stats-meta">${stats.direction.n} 场已归档 · 赛前冻结推演对照官方赛果</span>
      </div>
      <div class="results-stats-grid">
        ${cards.map(c => `
          <div class="results-stat-card results-stat-card--${c.key}">
            <div class="results-stat-card-top">
              <span class="results-stat-icon" aria-hidden="true">${c.icon}</span>
              <span class="results-stat-label">${c.label}</span>
            </div>
            <div class="results-stat-pct ${statPctClass(c.data.pct)}">${c.data.pct}<span class="results-stat-unit">%</span></div>
            <div class="results-stat-foot">
              <span class="results-stat-hit">${c.data.hit} / ${c.data.n} 场命中</span>
              <span class="results-stat-sub">${c.sub}</span>
            </div>
          </div>`).join('')}
      </div>
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
    dataIntegrity,
    dataIntegrityNote,
    totals: computeTotalsVerdict(m, ms),
    margin: computeMarginVerdict(m, ms, margin),
    goalTiming: computeGoalTimingVerdict(m),
    goalEfficiencyHit: computeGoalEfficiencyHit(m),
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
      <span class="dc-gt-cross-tag">重合窗口</span>
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
      <p class="dc-gt-disclaimer">${hasData ? (gt.disclaimer_cn || '') : '近30场进失球高峰时段；发截图后可更新。与灵力分析娱乐板块无关。'}</p>
    </div>`;
}

function renderGoalAtmosphereMeter(outlook) {
  if (!outlook) return '';
  const pos = outlook.meter_pos ?? 50;
  const side = outlook.lean_side || 'neutral';
  const strength = outlook.lean_strength || 'none';
  const tag = outlook.meter_label_cn || outlook.label_cn || '几乎五五开';
  const tagColor = outlook.color || '#8A96A8';
  const marketCn = outlook.market_goals_cn || '全场至少 — 球';

  return `
    <div class="dc-read-meter dc-ga-meter dc-ga-meter--${side} dc-ga-meter--${strength}">
      ${outlook.section_intro_cn ? `<p class="dc-ga-meter-intro">${outlook.section_intro_cn}</p>` : ''}
      <div class="dc-spread-meter-kv dc-ga-meter-kv">
        <span class="dc-spread-meter-k">赛前外界预期</span>
        <span class="dc-spread-meter-v dc-ga-meter-v">${marketCn}</span>
      </div>
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
        <span class="dc-spread-meter-k">赛前外界预期</span>
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
  return `
      <div class="dc-reading-pill-head">
        <span class="dc-reading-pill-icon">${p.icon}</span>
        <span class="dc-reading-pill-label" style="color:${p.color || '#7BB8D4'}">${p.label}</span>
        ${team}
      </div>`;
}

function renderCustomerReadingCard(reading) {
  if (!reading?.pills?.length) return '';
  const pills = reading.pills.map(p => {
    if (p.key === 'totals' && p.outlook) {
      return `
    <div class="dc-reading-pill dc-reading-pill--meter${p.muted ? ' dc-reading-pill--muted' : ''}">
      ${renderReadingPillHead(p)}
      ${renderGoalAtmosphereMeter(p.outlook)}
    </div>`;
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

function renderTotalsRefRow(totalsView, prediction) {
  const expTotal = totalsView?.expected_total;
  const xgH = prediction?.xg_home;
  const xgA = prediction?.xg_away;
  const xgSum = xgH != null && xgA != null ? Math.round((xgH + xgA) * 100) / 100 : null;

  if (expTotal == null) return '';

  const predScore = prediction?.score;
  const scoreNorm = predScore ? String(predScore).replace(/\s/g, '') : '';
  const predGoals = /^\d+-\d+$/.test(scoreNorm)
    ? scoreNorm.split('-').map(n => parseInt(n, 10)).reduce((a, b) => a + b, 0)
    : null;

  let primary = `模型预期约 <strong>${expTotal}</strong> 个总进球`;
  if (xgSum != null) primary += ` <span class="dc-rhythm-totals-xg">（xG ${xgH} + ${xgA}）</span>`;
  if (totalsView?.market_line != null && totalsView?.fair_line != null) {
    const marketInt = totalsView.totals_outlook?.market_goals_int
      ?? totalsView.market_goals_int
      ?? Math.ceil(Number(totalsView.market_line));
    primary += ` · 外界预期 <strong>全场至少 ${marketInt} 球</strong>`;
    primary += ` · 模型自身约 <strong>${totalsView.fair_line}</strong> 球`;
    if (totalsView.line_gap >= 1) {
      primary += ` <span class="dc-rhythm-totals-warn">（外界高出约 ${totalsView.line_gap} 球）</span>`;
    } else if (totalsView.line_gap > 0.01) {
      primary += `（外界 +${totalsView.line_gap}）`;
    }
  }

  const gapWarn = totalsView?.gap_warning?.cn;
  const outlook = totalsView?.totals_outlook;
  const outlookRow = outlook ? renderGoalAtmosphereMeter(outlook) : '';

  let hint = '与终端娱乐推演比分是<strong>不同口径</strong>：';
  if (predScore && predGoals != null) {
    hint += `首推 <strong>${formatDisplayScore(predScore)}</strong> 是最可能单场赛果（${predGoals} 球）；`;
  } else {
    hint += '首推比分是最可能单场赛果；';
  }
  hint += '此处为泊松网格加权的<strong>全场期望总进球</strong>，统计各类可能比分，故可与首推比分不同。';

  return `
    <div class="dc-rhythm-totals-ref">
      <span class="dc-rhythm-dim-label">总进球参考</span>
      <span class="dc-rhythm-totals-text dc-rhythm-totals-text--model">${primary}</span>
      ${outlook ? '<div class="dc-rhythm-totals-atmosphere"><span class="dc-rhythm-dim-label dc-rhythm-dim-label--sub">进球氛围</span>' + outlookRow + '</div>' : ''}
      ${gapWarn ? `<p class="dc-rhythm-totals-warn-line">${gapWarn}</p>` : ''}
      <p class="dc-rhythm-totals-hint">${hint}</p>
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
        <span class="dc-outlook-line-label">外界总进球参考 ${o.totals_line ?? '—'} 球</span>
        <span class="dc-outlook-line-pct">终场多于该参考约 <strong>${o.totals_high_pct ?? '—'}%</strong></span>
        <span class="dc-outlook-line-note">模型公允约 ${o.fair_totals_line ?? '—'} 球${o.totals_line_gap > 0 ? ' · 外界高出 ' + o.totals_line_gap + ' 球' : ''}</span>
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

function renderMatchPreviewBlock(mp, totalsRefRow) {
  if (!mp) return '';
  const morph = mp.morphology || {};
  const typeTags = (morph.type_tags || []).map(t =>
    `<span class="dc-mp-tag">${t.label}</span>`).join('');

  return `
    <div class="dc-mp-block">
      <div class="dc-mp-morph">
        <div class="dc-mp-head">比赛形态</div>
        <div class="dc-mp-tags">${typeTags}${morph.depth_label ? `<span class="dc-mp-tag dc-mp-tag--depth">${morph.depth_label}</span>` : ''}</div>
        ${totalsRefRow || ''}
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

function renderGoalEfficiencyPreviewBlock(gp) {
  if (!gp?.summary_cn) return '';
  const tags = (gp.tags || []).map(t => `
    <span class="dc-ge-tag" style="color:${t.color};background:${t.bg};border:1px solid ${t.color}33">${t.label}</span>`).join('');
  const scenarioRows = (gp.scenarios || []).slice(0, 4).map(sc => `
    <div class="dc-ge-scenario">
      <div class="dc-ge-scenario-head">
        <span class="dc-ge-scenario-label">${sc.label}</span>
        <span class="dc-ge-scenario-pct">约 ${sc.prob_pct}%</span>
      </div>
      <div class="dc-ge-scenario-ex">${sc.example}</div>
    </div>`).join('');
  const watchRows = (gp.watch_notes || []).map(n => `<li>${n}</li>`).join('');
  const probRow = gp.prob_over_line != null ? `
    <div class="dc-ge-prob-row">
      <span>≥${gp.totals_line} 球 ${gp.prob_over_line}%</span>
      <span>≥4 球 ${gp.prob_4_plus}%</span>
      <span>≤2 球 ${gp.prob_2_or_less}%</span>
    </div>` : '';
  return `
    <div class="dc-goal-eff dc-goal-eff--preview">
      <div class="dc-goal-eff-head">
        <span>进球路径预估</span>
        ${gp.lean_cn ? `<span class="dc-goal-eff-path dc-goal-eff-path--${gp.lean || 'neutral'}">${gp.lean_cn}</span>` : ''}
      </div>
      <div class="dc-goal-eff-tags">${tags}</div>
      <div class="dc-goal-eff-bars dc-goal-eff-bars--preview">
        <div class="dc-goal-eff-row">
          <span class="dc-goal-eff-side">热门 ${gp.fav_name}</span>
          <span class="dc-goal-eff-num">赛前 xG ${gp.fav_xg}</span>
        </div>
        <div class="dc-goal-eff-row">
          <span class="dc-goal-eff-side">弱队 ${gp.dog_name}</span>
          <span class="dc-goal-eff-num">赛前 xG ${gp.dog_xg} · 差 ${gp.xg_gap}</span>
        </div>
      </div>
      ${probRow}
      <div class="dc-ge-scenarios">${scenarioRows}</div>
      <p class="dc-goal-eff-summary">${gp.summary_cn}</p>
      ${watchRows ? `<ul class="dc-ge-watch">${watchRows}</ul>` : ''}
      ${gp.in_mid_band ? `<div class="dc-goal-eff-hint">${gp.sample_note || '样本规则'} · 弱队效率≥1.2 易大球 · 弱队&lt;0.6 易小球 · 热门≥1.5 样本内大球率 100%</div>` : ''}
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
      ${ge.in_mid_band ? '<div class="dc-goal-eff-hint">样本提示：xG 总 2.0–3.0 区间 · 弱队效率≥1.2 易大球 · 弱队&lt;0.6 易小球 · 热门≥1.5 样本内大球率 100%</div>' : ''}
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
  const readingCard = renderCustomerReadingCard(reading);
  const goalTimingHtml = renderGoalTimingBlock(s.goal_timing, homeName, awayName);
  const replayRow = replay?.summary_cn ? `
    <div class="dc-preview-replay">
      <div class="dc-preview-replay-head">赛后复盘</div>
      <p>${replay.summary_cn}</p>
      ${replay.actual_score ? `<span class="dc-preview-replay-meta">实际 ${replay.actual_score}${replay.ht_score ? ' · 半场 ' + replay.ht_score : ''}${replay.totals_actual != null ? ' · 总进球 ' + replay.totals_actual : ''}</span>` : ''}
    </div>` : '';
  const goalEffRow = renderGoalEfficiencyBlock(goalEff)
    || renderGoalEfficiencyPreviewBlock(dc.goal_efficiency_preview);
  const xgCtx = s.xg_context || {};
  const scorePatterns = s.score_patterns || [];
  const totalsView = s.totals_view || {};

  const totalsRefRow = renderTotalsRefRow(totalsView, prediction);

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
  const previewHtml = renderMatchPreviewBlock(mp, totalsRefRow);
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
    t.available ? verdictChip('大小', t.hit, t.hit == null) : '',
    mg.available ? verdictChip('净胜', mg.hit, mg.hit == null) : '',
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
  if (!t.available && !mg.available && !gt.available) return '';
  return `
    <div class="pred-verdict-details">
      ${t.available ? `
      <div class="pred-verdict-detail">
        <span class="pred-verdict-detail-label">大小球</span>
        <span class="pred-verdict-detail-val">预测偏${t.modelSide} · 实际${t.actualSide}（线 ${t.line}）</span>
        ${verdictBadgeOrNeutral(t.hit, '命中', '未中', '走水')}
      </div>` : ''}
      ${mg.available ? `
      <div class="pred-verdict-detail">
        <span class="pred-verdict-detail-label">净胜档</span>
        <span class="pred-verdict-detail-val">实际 ${mg.actual}${mg.modelPct != null ? ` · 模型全达标 ${mg.modelPct}%` : ''}</span>
        ${verdictBadgeOrNeutral(mg.hit, '一致', '偏差', '难判')}
      </div>` : ''}
      ${gt.available ? `
      <div class="pred-verdict-detail">
        <span class="pred-verdict-detail-label">进球时段</span>
        <span class="pred-verdict-detail-val">${gt.note}</span>
        ${verdictBadgeOrNeutral(gt.hit, '命中', '未中', '无窗')}
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

    <!-- MYSTIC PANEL (outside grid, full width) -->
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
  if (!mx) return '';

  const P = 'rgba(120,85,185,'; // purple shorthand
  const elColors = {'木':'#5C9E78','火':'#C06848','土':'#A8853A','金':'#B0A070','水':'#5080A0'};
  const elTag = el => {
    const k = Object.keys(elColors).find(k => el.includes(k))||'土';
    return `<span style="font-size:0.74rem;padding:0.1rem 0.4rem;border-radius:2px;background:${elColors[k]}22;color:${elColors[k]};border:1px solid ${elColors[k]}44;margin-right:3px;white-space:nowrap">${el}</span>`;
  };
  const elTags = s => String(s || '土').split('、').filter(Boolean).map(elTag).join('') || elTag('土');

  const scoreBar = (name, score, color, verdict) => `
    <div style="background:rgba(255,255,255,0.03);border:1px solid ${P}0.15);border-radius:5px;padding:0.7rem">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.4rem">
        <span style="font-size:0.92rem;font-weight:700">${name}</span>
        <span style="font-size:0.84rem;font-weight:800;padding:0.1rem 0.5rem;border-radius:3px;
          background:${color}22;color:${color};border:1px solid ${color}44">${verdict}</span>
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem">
        <div style="flex:1;height:7px;background:rgba(255,255,255,0.07);border-radius:4px;overflow:hidden">
          <div style="width:${score}%;height:100%;background:${color};border-radius:4px"></div>
        </div>
        <span style="font-size:0.9rem;font-weight:800;color:${color};width:38px;text-align:right">${score}/100</span>
      </div>
    </div>`;

  const wx = mx.wuxing || {};
  const homeWx = { colors: '—', elements: '土', advantage: '', disadvantage: '', ...wx.home, team: wx.home?.team || homeName };
  const awayWx = { colors: '—', elements: '水', advantage: '', disadvantage: '', ...wx.away, team: wx.away?.team || awayName };
  const hx = {
    symbol: '☯',
    name: '待卦',
    number: 0,
    upper: '—',
    lower: '—',
    quote: '赛前更新',
    general: '开赛前结合阵容与时辰再行解读。',
    advantage_team: homeName,
    disadvantage_team: awayName,
    match_nature: '待观察',
    yellow_card_risk: '中',
    yellow_card_reason: '赛前暂无执法数据',
    scenarios: [],
    ...(mx.hexagram || {}),
  };
  if (!Array.isArray(hx.scenarios)) hx.scenarios = [];
  const scenarioItems = hx.scenarios.map(s =>
    typeof s === 'string' ? { icon: '☯', label: '卦气', text: s } : s
  );
  const peakFromScenario = scenarioItems.find(s => /进球高峰/.test(s.label || ''));
  const goalPeak = mx.goal_peak || (peakFromScenario ? {
    title: '进球高峰 · 娱乐预测',
    scope: 'single',
    periods: peakFromScenario.text,
    rationale: peakFromScenario.text,
    note: '娱乐解读 · 纯玄学参考 · 非赛程或竞技推演',
  } : null);
  const goalPeakWindows = goalPeak?.windows?.length ? goalPeak.windows : null;
  const scenarioGrid = goalPeak
    ? scenarioItems.filter(s => !/进球高峰/.test(s.label || ''))
    : scenarioItems;
  const cardRiskColor = {'高':'#D95F6A','中':'#C8A96E','低':'#5BBF8A','低至中':'#7BAF8A'}[hx.yellow_card_risk]||'#888';
  const verdictLabel = v => (v === '有利' ? '✅ 有利' : v === '不利' ? '❌ 不利' : '⏳ 待定');

  return `
  <div style="margin-top:0.5rem;border:1px solid ${P}0.3);border-radius:8px;overflow:hidden;
    background:linear-gradient(160deg,rgba(28,18,52,0.45) 0%,rgba(14,10,28,0.55) 100%)">

    <!-- 标题栏 -->
    <div style="padding:0.85rem 1.25rem;border-bottom:1px solid ${P}0.2);
      display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem">
      <div style="display:flex;align-items:center;gap:0.75rem">
        <span style="font-size:1.6rem">☯</span>
        <div>
          <div style="font-size:1rem;font-weight:800;color:#9B7DD4;letter-spacing:2px">灵力分析</div>
          <div style="font-size:0.74rem;color:${P}0.55);letter-spacing:1px">道家五行 · 赛日八字 · 卦象推演 · 走势解读</div>
        </div>
      </div>
      <span style="font-size:0.72rem;color:${P}0.35);letter-spacing:1px">文化解读 · 非竞技推演</span>
    </div>

    <div style="padding:1.25rem;display:flex;flex-direction:column;gap:1.25rem">

      <!-- ① 赛日八字 -->
      <div style="background:rgba(255,255,255,0.025);border:1px solid ${P}0.15);border-radius:6px;padding:1rem">
        <div style="font-size:0.74rem;letter-spacing:2px;color:#9B7DD4;margin-bottom:0.4rem">
          📅 赛日八字 · ${mx.date_bazi.day}（比赛当天，非打开页面的日期）
        </div>
        <div style="display:flex;gap:0.5rem;margin-bottom:0.75rem;flex-wrap:wrap">
          ${['year','month','day'].map(k=>`
            <div style="flex:1;min-width:72px;text-align:center;background:${P}0.08);border:1px solid ${P}0.2);border-radius:4px;padding:0.45rem">
              <div style="font-size:1.05rem;font-weight:800;color:#9B7DD4">${mx.date_bazi[k].replace(/[年月日]/g,'')}</div>
              <div style="font-size:0.66rem;color:${P}0.5);margin-top:2px">${{year:'年柱',month:'月柱',day:'日柱'}[k]}</div>
            </div>`).join('')}
          <div style="flex:1;min-width:72px;text-align:center;background:${elColors[mx.date_bazi.hour_home_element]||'#888'}18;
            border:1px solid ${elColors[mx.date_bazi.hour_home_element]||'#888'}44;border-radius:4px;padding:0.45rem">
            <div style="font-size:0.84rem;font-weight:700;color:${elColors[mx.date_bazi.hour_home_element]||'#9B7DD4'}">${mx.date_bazi.hour_home.split('（')[0]}</div>
            <div style="font-size:0.66rem;color:${P}0.5);margin-top:2px">开球时辰 · ${mx.date_bazi.hour_home_element}属</div>
          </div>
        </div>
        <div style="font-size:0.82rem;color:${P}0.65);line-height:1.7">${mx.date_bazi.day_summary}</div>
      </div>

      <!-- ② 五行优劣势 —— 核心对比 -->
      <div>
        <div style="font-size:0.76rem;letter-spacing:2px;color:#9B7DD4;margin-bottom:0.75rem">☯ 五行优劣势 · 队服配局分析</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:0.75rem">
          <!-- 主队 -->
          <div style="border:2px solid ${wx.home.verdict_color}55;border-radius:6px;overflow:hidden">
            <div style="padding:0.5rem 0.75rem;background:${wx.home.verdict_color}18;
              display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ${wx.home.verdict_color}33">
              <span style="font-weight:800;font-size:0.98rem">${homeWx.team}</span>
              <span style="font-size:0.9rem;font-weight:800;color:${homeWx.verdict_color||'#C8A96E'};
                padding:0.1rem 0.5rem;border-radius:3px;background:${(homeWx.verdict_color||'#C8A96E')}20">
                ${verdictLabel(homeWx.verdict)}
              </span>
            </div>
            <div style="padding:0.65rem 0.75rem">
              <div style="font-size:0.8rem;color:rgba(210,195,235,0.5);margin-bottom:0.3rem">队服：${homeWx.colors}</div>
              <div style="margin-bottom:0.5rem">${elTags(homeWx.elements)}</div>
              <div style="font-size:0.84rem;color:${homeWx.verdict_color||'#C8A96E'};font-weight:700;margin-bottom:0.4rem">${homeWx.wuxing_short||'—'}</div>
              <div style="font-size:0.8rem;color:rgba(210,195,235,0.68);line-height:1.6;margin-bottom:0.5rem">${homeWx.reason||''}</div>
              <div style="font-size:0.76rem;padding:0.35rem 0.5rem;background:${(homeWx.verdict_color||'#C8A96E')}15;
                border-radius:3px;color:${homeWx.verdict_color||'#C8A96E'};line-height:1.62">
                ${homeWx.verdict==='有利'?'↑ 加成：':homeWx.verdict==='不利'?'↓ 减分：':'◆ '}${homeWx.advantage||homeWx.disadvantage||'待更新'}
              </div>
            </div>
          </div>
          <!-- 客队 -->
          <div style="border:2px solid ${(awayWx.verdict_color||'#C8A96E')}55;border-radius:6px;overflow:hidden">
            <div style="padding:0.5rem 0.75rem;background:${(awayWx.verdict_color||'#C8A96E')}18;
              display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ${(awayWx.verdict_color||'#C8A96E')}33">
              <span style="font-weight:800;font-size:0.98rem">${awayWx.team}</span>
              <span style="font-size:0.9rem;font-weight:800;color:${awayWx.verdict_color||'#C8A96E'};
                padding:0.1rem 0.5rem;border-radius:3px;background:${(awayWx.verdict_color||'#C8A96E')}20">
                ${verdictLabel(awayWx.verdict)}
              </span>
            </div>
            <div style="padding:0.65rem 0.75rem">
              <div style="font-size:0.8rem;color:rgba(210,195,235,0.5);margin-bottom:0.3rem">队服：${awayWx.colors}</div>
              <div style="margin-bottom:0.5rem">${elTags(awayWx.elements)}</div>
              <div style="font-size:0.84rem;color:${awayWx.verdict_color||'#C8A96E'};font-weight:700;margin-bottom:0.4rem">${awayWx.wuxing_short||'—'}</div>
              <div style="font-size:0.8rem;color:rgba(210,195,235,0.68);line-height:1.6;margin-bottom:0.5rem">${awayWx.reason||''}</div>
              <div style="font-size:0.76rem;padding:0.35rem 0.5rem;background:${(awayWx.verdict_color||'#C8A96E')}15;
                border-radius:3px;color:${awayWx.verdict_color||'#C8A96E'};line-height:1.62">
                ${awayWx.verdict==='有利'?'↑ 加成：':awayWx.verdict==='不利'?'↓ 减分：':'◆ '}${awayWx.advantage||awayWx.disadvantage||'待更新'}
              </div>
            </div>
          </div>
        </div>
        <div style="font-size:0.84rem;color:rgba(210,195,235,0.48);text-align:center;
          padding:0.4rem;background:${P}0.06);border-radius:3px">
          五行裁定：${wx.summary||'赛前更新'}
        </div>
      </div>

      ${goalPeak ? `
      <!-- ②½ 进球高峰 · 娱乐预测（纯玄学 · 宁缺毋滥） -->
      <div style="background:linear-gradient(135deg,rgba(200,169,110,0.1) 0%,rgba(120,85,185,0.08) 100%);
        border:1px solid rgba(200,169,110,0.35);border-radius:6px;padding:1rem;overflow:hidden">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem">
          <div style="font-size:0.76rem;letter-spacing:2px;color:#C8A96E;font-weight:700">
            ⏱ ${goalPeak.title || '进球高峰 · 娱乐预测'}
          </div>
          <span style="font-size:0.68rem;color:rgba(200,169,110,0.55);letter-spacing:0.5px">纯玄学 · 宁缺毋滥</span>
        </div>
        ${goalPeakWindows ? `
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:0.75rem">
          ${goalPeakWindows.map(w => `
            <div style="padding:0.65rem 0.75rem;background:rgba(0,0,0,0.15);border-radius:4px;border-left:3px solid rgba(200,169,110,0.5)">
              <div style="font-size:0.72rem;color:rgba(200,169,110,0.65);margin-bottom:0.25rem">${w.label || '时段'}</div>
              <div style="font-size:1.1rem;font-weight:800;color:#E8D4A8;letter-spacing:0.5px">第 ${w.start_min}–${w.end_min} 分钟</div>
              ${w.hex_reason ? `<div style="font-size:0.78rem;color:rgba(210,195,235,0.58);margin-top:0.35rem;line-height:1.55">卦：${w.hex_reason}</div>` : ''}
              ${w.time_reason ? `<div style="font-size:0.78rem;color:rgba(210,195,235,0.58);line-height:1.55">时：${w.time_reason}</div>` : ''}
            </div>`).join('')}
        </div>` : `
        <div style="font-size:1.15rem;font-weight:800;color:#E8D4A8;letter-spacing:0.5px;margin-bottom:0.65rem;line-height:1.45">
          ${goalPeak.periods}
        </div>`}
        <div style="font-size:0.84rem;color:rgba(210,195,235,0.72);line-height:1.75;margin-bottom:0.5rem">
          ${goalPeak.rationale}
        </div>
        ${goalPeak.logic_hint ? `<div style="font-size:0.74rem;color:rgba(200,169,110,0.42);line-height:1.6;margin-bottom:0.45rem">${goalPeak.logic_hint}</div>` : ''}
        <div style="font-size:0.72rem;color:rgba(200,169,110,0.45);font-style:italic">
          ${goalPeak.note || '娱乐解读 · 纯玄学参考 · 非赛程或竞技推演'}
        </div>
      </div>` : ''}

      <!-- ③ 卦象推演 全情景分析 -->
      <div style="background:rgba(255,255,255,0.025);border:1px solid ${P}0.15);border-radius:6px;overflow:hidden">

        <!-- 卦象标题栏 -->
        <div style="padding:0.85rem 1rem;border-bottom:1px solid ${P}0.12);display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
          <div style="text-align:center;min-width:64px">
            <div style="font-size:2.2rem;line-height:1;color:#9B7DD4">${hx.symbol}</div>
            <div style="font-size:0.9rem;font-weight:800;color:rgba(255,255,255,0.9);margin-top:2px">${hx.name}</div>
            <div style="font-size:0.66rem;color:${P}0.45)">第${hx.number}卦 · ${hx.upper}/${hx.lower}</div>
          </div>
          <div style="flex:1;min-width:200px">
            <div style="font-size:0.74rem;letter-spacing:2px;color:#9B7DD4;margin-bottom:0.35rem">🀄 卦象推演 · 全情景分析</div>
            <div style="font-size:0.8rem;color:rgba(210,195,235,0.5);line-height:1.65;font-style:italic;margin-bottom:0.35rem">「${hx.quote.replace(/《.*?》：/,'')}」</div>
            <div style="font-size:0.82rem;color:rgba(210,195,235,0.78);line-height:1.6">${hx.general}</div>
            ${hx.hexagram_analysis ? `<div style="font-size:0.8rem;color:rgba(210,195,235,0.62);line-height:1.65;margin-top:0.5rem;padding:0.5rem 0.65rem;background:${P}0.06);border-radius:4px;border-left:2px solid ${P}0.35)">${hx.hexagram_analysis}</div>` : ''}
          </div>
        </div>

        <div style="padding:1rem;display:flex;flex-direction:column;gap:0.85rem">

          <!-- 有利/不利 + 比赛基本性质 -->
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:0.5rem">
            <div style="padding:0.5rem 0.6rem;background:rgba(91,191,138,0.07);border:1px solid rgba(91,191,138,0.22);border-radius:4px;text-align:center">
              <div style="font-size:0.68rem;color:rgba(0,255,136,0.55);margin-bottom:0.2rem">卦象有利</div>
              <div style="font-size:0.9rem;font-weight:800;color:#5BBF8A">✅ ${hx.advantage_team}</div>
            </div>
            <div style="padding:0.5rem 0.6rem;background:rgba(217,95,106,0.06);border:1px solid rgba(217,95,106,0.2);border-radius:4px;text-align:center">
              <div style="font-size:0.68rem;color:rgba(255,68,85,0.55);margin-bottom:0.2rem">卦象不利</div>
              <div style="font-size:0.9rem;font-weight:800;color:#D95F6A">❌ ${hx.disadvantage_team}</div>
            </div>
            <div style="padding:0.5rem 0.6rem;background:rgba(255,215,0,0.06);border:1px solid rgba(255,215,0,0.2);border-radius:4px;text-align:center">
              <div style="font-size:0.68rem;color:rgba(255,215,0,0.55);margin-bottom:0.2rem">比赛性质</div>
              <div style="font-size:0.86rem;font-weight:800;color:#C8A96E">${hx.match_nature}</div>
            </div>
            <div style="padding:0.5rem 0.6rem;background:${cardRiskColor}12;border:1px solid ${cardRiskColor}33;border-radius:4px;text-align:center">
              <div style="font-size:0.68rem;color:${cardRiskColor}99;margin-bottom:0.2rem">🟨 纪律风险</div>
              <div style="font-size:0.86rem;font-weight:800;color:${cardRiskColor}">${hx.yellow_card_risk}</div>
            </div>
          </div>

          <!-- 卦气走势 · 分情景（纯卦象/气运，非竞技数据） -->
          ${scenarioGrid.length ? `
          <div style="font-size:0.74rem;letter-spacing:2px;color:${P}0.55);padding:0.35rem 0;border-bottom:1px solid ${P}0.12)">
            ☯ 卦气走势 · 分情景
            <span style="font-weight:400;letter-spacing:0.5px;color:${P}0.4);margin-left:0.35rem">（气运流转，与 xG/实力无关）</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.45rem">
            ${scenarioGrid.map(s=>`
              <div style="padding:0.5rem 0.65rem;background:${P}0.04);border:1px solid ${P}0.1);border-radius:4px">
                <div style="font-size:0.84rem;font-weight:700;margin-bottom:0.2rem">${s.icon} ${s.label}</div>
                <div style="font-size:0.78rem;color:rgba(210,195,235,0.62);line-height:1.62">${s.text}</div>
              </div>`).join('')}
          </div>` : ''}

          ${(hx.early_goal || hx.no_early_goal || hx.away_goal || hx.halftime || hx.extra_time) ? `
          <div style="font-size:0.74rem;letter-spacing:2px;color:${P}0.6);padding-bottom:0.35rem;border-bottom:1px solid ${P}0.12)">
            📌 卦象分情景 · 走势解析
          </div>` : ''}

          <!-- 情景1：强队先进球 -->
          ${hx.early_goal ? renderScenario('🟢', hx.early_goal.scenario, hx.early_goal.prediction, hx.early_goal.favors, hx.early_goal.favors_prob, 'rgba(91,191,138,0.07)', 'rgba(91,191,138,0.22)', '#5BBF8A') : ''}

          ${hx.no_early_goal ? renderScenario('🟡', hx.no_early_goal.scenario, hx.no_early_goal.prediction, hx.no_early_goal.favors, hx.no_early_goal.favors_prob, 'rgba(200,169,110,0.07)', 'rgba(200,169,110,0.22)', '#C8A96E') : ''}

          ${hx.away_goal ? renderScenario('🔴', hx.away_goal.scenario, hx.away_goal.prediction, hx.away_goal.favors, hx.away_goal.favors_prob, 'rgba(217,95,106,0.07)', 'rgba(217,95,106,0.2)', '#ff8888') : ''}

          ${hx.halftime ? renderScenario('⬜', hx.halftime.scenario, hx.halftime.prediction, hx.halftime.favors, hx.halftime.favors_prob, 'rgba(150,150,200,0.05)', 'rgba(150,150,200,0.15)', '#aaaadd') : ''}

          ${hx.extra_time ? renderScenario('⏰', hx.extra_time.scenario, hx.extra_time.prediction, hx.extra_time.favors, hx.extra_time.favors_prob, 'rgba(100,150,255,0.05)', 'rgba(100,150,255,0.15)', '#88aaff') : ''}

          <!-- 黄牌详细分析 -->
          <div style="padding:0.6rem 0.75rem;background:${cardRiskColor}10;border:1px solid ${cardRiskColor}30;border-radius:4px;
            display:flex;gap:0.6rem;align-items:flex-start">
            <span style="font-size:1rem;flex-shrink:0">🟨</span>
            <div>
              <div style="font-size:0.8rem;font-weight:700;color:${cardRiskColor};margin-bottom:0.2rem">纪律详解 · 风险等级：${hx.yellow_card_risk}</div>
              <div style="font-size:0.78rem;color:rgba(210,195,235,0.62);line-height:1.55">${hx.yellow_card_reason}</div>
            </div>
          </div>

        </div>
      </div>

      <!-- ④ 灵力胜率总裁定 -->
      <div style="background:${P}0.05);border:1px solid ${P}0.2);border-radius:6px;padding:1rem">
        <div style="font-size:0.74rem;letter-spacing:2px;color:#9B7DD4;margin-bottom:0.75rem">⚖ 灵力胜率总裁定</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:0.85rem">
          ${scoreBar(homeName, mx.home_score, '#9B7DD4', homeWx.verdict==='有利'?'天时有利':'逆势')}
          ${scoreBar(awayName, mx.away_score, 'rgba(120,85,185,0.45)', awayWx.verdict==='有利'?'天时有利':'逆势')}
        </div>
        <div style="font-size:0.92rem;color:rgba(230,200,255,0.88);line-height:1.75;
          padding:0.85rem 1rem;background:${P}0.08);border-radius:4px;border-left:3px solid #9B7DD4;margin-bottom:0.6rem">
          ${mx.mystic_verdict}
        </div>
        ${mx.model_bridge ? `<div style="font-size:0.8rem;color:rgba(210,195,235,0.55);line-height:1.6;margin-bottom:0.6rem;padding:0.5rem 0.65rem;background:rgba(123,184,212,0.06);border-radius:4px;border:1px solid rgba(123,184,212,0.15)">↔ ${mx.model_bridge}</div>` : ''}
        <div style="font-size:0.72rem;color:${P}0.3);line-height:1.62">${mx.disclaimer}</div>
      </div>

    </div>
  </div>`;
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
    cont.innerHTML = '<p style="color:var(--txt2);padding:2rem;text-align:center">今日暂无待赛场次 · 请查看下方「明日预告」</p>';
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
    const stats = computeResultsAggregateStats(RESULTS_DATA.finishedMatches);
    statsEl.innerHTML = renderResultsSummaryStats(stats);
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
