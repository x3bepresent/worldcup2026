// ============================================================
//  2026 WC — Today's Matches App Logic
// ============================================================

const FLAG = iso => iso ? `flags/${iso.toLowerCase()}.png` : '';

/** 与 index.html #methodology 口径一致 */
const MODEL_TAGLINE = '100,000 次蒙特卡洛模拟 — 综合 Elo 评级、xG 数据、阵容深度与历史战绩加权计算';
const MODEL_SUBLINE = '基于 Elo 评级、xG 期望进球、100,000 次蒙特卡洛模拟及多维度大数据模型';
const PLAY_NOTE_STD = '本站所有胜率、比分均为模型娱乐推演结果，不代表真实赛果，仅供交流娱乐。';

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
    <div style="margin:0 0 1rem;padding:0.65rem 1rem;background:rgba(200,169,110,0.08);border:1px solid rgba(200,169,110,0.25);border-radius:4px;font-size:0.72rem;color:var(--gold);line-height:1.6">
      ⏳ 以下信息尚未完全官方确认：<strong>${factors.join('、')}</strong>。对应栏目显示「等待官方确认」或标注「预测参考」，相关细节暂不纳入推演权重。
    </div>`;
}

function renderLineupPanel(m) {
  const lu = m.lineup;
  if (!lu) return '';
  const label = '📋 首发阵容';
  if (isPending(lu)) {
    const pred = lu.predicted;
    return `
      <div class="mf-panel">
        <div class="mf-panel-label">${label}</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">仅展示 FIFA / 球队官方确认的首发。未确认前不使用占位数据充数。</div>
        <div style="padding:0.75rem;background:rgba(200,169,110,0.08);border:1px solid rgba(200,169,110,0.22);border-radius:4px;margin-bottom:0.75rem">
          <div style="font-size:0.85rem;font-weight:700;color:var(--gold)">${DATA_INTEGRITY?.PENDING_LABEL || '等待官方确认'}</div>
          <div style="font-size:0.68rem;color:var(--txt2);margin-top:0.35rem;line-height:1.55">${lu.note || '官方首发名单尚未公布。'}</div>
        </div>
        ${pred ? `
        <div style="font-size:0.62rem;letter-spacing:1px;color:var(--txt2);margin-bottom:0.4rem">媒体预测参考（非官方 · 不计入已确认推演）</div>
        <div style="font-size:0.72rem;color:var(--txt2);line-height:1.65">
          <div><strong style="color:var(--cyan)">${m.home.name}</strong> ${pred.formation || ''}</div>
          <div style="margin:0.25rem 0 0.5rem;padding-left:0.5rem;color:var(--txt)">${pred.home}</div>
          <div><strong style="color:var(--red)">${m.away.name}</strong></div>
          <div style="margin:0.25rem 0;padding-left:0.5rem;color:var(--txt)">${pred.away}</div>
          ${pred.source ? `<div style="font-size:0.62rem;color:rgba(255,255,255,0.35);margin-top:0.35rem">来源：${pred.source}</div>` : ''}
        ${pred.alt ? `
        <div style="margin-top:0.75rem;padding-top:0.65rem;border-top:1px solid rgba(255,255,255,0.06)">
          <div style="font-size:0.62rem;letter-spacing:1px;color:var(--txt2);margin-bottom:0.35rem">备选预测（非官方）</div>
          <div style="font-size:0.72rem;color:var(--txt2);line-height:1.65">
            <div><strong style="color:var(--cyan)">${m.home.name}</strong> ${pred.alt.formation || ''}</div>
            <div style="margin:0.25rem 0 0.5rem;padding-left:0.5rem;color:var(--txt)">${pred.alt.home}</div>
            <div><strong style="color:var(--red)">${m.away.name}</strong></div>
            <div style="margin:0.25rem 0;padding-left:0.5rem;color:var(--txt)">${pred.alt.away}</div>
            ${pred.alt.source ? `<div style="font-size:0.62rem;color:rgba(255,255,255,0.35);margin-top:0.35rem">来源：${pred.alt.source}</div>` : ''}
          </div>
        </div>` : ''}
        </div>` : ''}
      </div>`;
  }
  return `
    <div class="mf-panel">
      <div class="mf-panel-label">${label} <span style="font-size:0.58rem;color:#5BBF8A">● 已确认</span></div>
      <div style="font-size:0.72rem;color:var(--txt2);line-height:1.65">
        <div style="margin-bottom:0.5rem"><strong>${lu.formation || ''}</strong></div>
        <div><strong style="color:var(--cyan)">${m.home.name}</strong>：${lu.home}</div>
        <div style="margin-top:0.35rem"><strong style="color:var(--red)">${m.away.name}</strong>：${lu.away}</div>
        ${lu.note ? `<div style="font-size:0.65rem;color:var(--txt2);margin-top:0.5rem;line-height:1.55">${lu.note}</div>` : ''}
        ${lu.diff ? `
        <div style="margin-top:0.65rem;padding:0.5rem;background:rgba(255,255,255,0.03);border-radius:3px;border-left:2px solid var(--gold);font-size:0.65rem;line-height:1.6;color:var(--txt2)">
          <div style="font-weight:700;color:var(--gold);margin-bottom:0.25rem">与预测对比</div>
          <div>${lu.diff.home || ''}</div>
          <div style="margin-top:0.25rem">${lu.diff.away || ''}</div>
        </div>` : ''}
        ${lu.source ? `<div style="font-size:0.62rem;color:rgba(255,255,255,0.35);margin-top:0.5rem">来源：${lu.source}</div>` : ''}
      </div>
    </div>`;
}

function renderRefereePanel(ref) {
  if (isPending(ref)) {
    return `
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">执法本场的裁判员资料。未获 FIFA 官方确认前，不展示虚假姓名或统计数据。</div>
        <div style="padding:0.85rem;background:rgba(200,169,110,0.08);border:1px solid rgba(200,169,110,0.25);border-radius:4px;margin-bottom:0.75rem">
          <div style="font-size:0.95rem;font-weight:700;color:var(--gold)">${ref.name || (DATA_INTEGRITY?.PENDING_LABEL || '等待官方确认')}</div>
          <div style="font-size:0.72rem;color:var(--txt2);margin-top:0.4rem;line-height:1.6">${ref.bias_note || ''}</div>
        </div>
        <div style="font-size:0.68rem;color:var(--txt2);line-height:1.55">
          ${(ref.tendencies || []).map(t => `· ${t}`).join('<br>')}
        </div>
        <div class="play-note" style="margin-top:0.65rem">裁判数据待确认 · 当前推演未纳入执法风格权重</div>`;
  }
  return `
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">执法本场的裁判员资料 — 含平均出牌率、判罚风格与潜在偏向分析<span style="color:#5BBF8A">（已官方确认，已纳入推演参考）</span></div>
        <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem">
          <img src="${FLAG((ref.iso||'un'))}" style="width:28px;height:19px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
          <div>
            <div style="font-weight:700;font-size:0.9rem">${ref.name}</div>
            <div style="font-size:0.68rem;color:var(--txt2)">${ref.nation}${ref.wc_experience ? ' · ' + ref.wc_experience : ' · FIFA 执法'}${ref.source ? ' · ' + ref.source : ''}</div>
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
  return `<span style="font-size:0.58rem;font-weight:700;letter-spacing:1px;padding:0.12rem 0.4rem;border-radius:2px;background:${map[status]||'#888'}22;color:${map[status]||'#888'};border:1px solid ${map[status]||'#888'}44">${status}</span>`;
}

// ── Form Dots ──────────────────────────────────────────────
// Renders last-5-match results as colored dots (newest on right)
// 🟢 green=Win  ⚪ grey=Draw  🔴 red=Loss
function formDots(form) {
  const label = {'W':'胜','D':'平','L':'负'};
  const color = {'W':'#5BBF8A','D':'rgba(255,255,255,0.28)','L':'#D95F6A'};
  const dots = form.map((r,i) =>
    `<span title="${label[r]||r}" style="width:10px;height:10px;border-radius:50%;background:${color[r]||'#888'};display:inline-block;cursor:default" aria-label="${label[r]}"></span>`
  ).join('');
  return `<div style="display:flex;align-items:center;gap:3px">${dots}</div>`;
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
  return `
    <div style="margin-bottom:0.75rem">
      <div style="display:flex;justify-content:space-between;font-size:0.72rem;margin-bottom:4px">
        <span style="color:var(--cyan);font-weight:700">${homeName} ${hw_val}W</span>
        <span style="color:var(--txt2)">${d_val}D</span>
        <span style="color:var(--red);font-weight:700">${aw_val}W ${awayName}</span>
      </div>
      <div style="display:flex;height:7px;border-radius:4px;overflow:hidden">
        <div style="width:${hw}%;background:var(--cyan)"></div>
        <div style="width:${dw}%;background:rgba(255,255,255,0.15)"></div>
        <div style="width:${aw}%;background:var(--red)"></div>
      </div>
    </div>
    <div style="font-size:0.72rem;color:var(--txt2);line-height:1.6">${h2h.note || h2h.notes || ''}</div>
    <div style="margin-top:0.75rem">
      <div style="font-size:0.62rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.6rem">近期交手记录</div>
      <!-- 表头 -->
      <div style="display:grid;grid-template-columns:60px 1fr auto auto;gap:0.4rem;font-size:0.58rem;color:rgba(122,143,181,0.5);text-transform:uppercase;letter-spacing:1px;padding:0 0 0.3rem 0;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:0.3rem">
        <span>年份</span><span>赛事</span><span style="text-align:center">比分</span><span style="text-align:right">举办地</span>
      </div>
      ${recent.slice(0,5).map(g => {
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
        <span style="font-size:0.8rem;font-weight:700">${team}</span>
        <div style="display:flex;align-items:center;gap:0.4rem">
          <div style="width:80px;height:5px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden">
            <div style="width:${score}%;height:100%;background:${color};border-radius:3px"></div>
          </div>
          <span style="font-size:0.75rem;font-weight:700;color:${color}">${score}/100</span>
        </div>
      </div>
      <div style="font-size:0.65rem;color:${color};margin-bottom:0.3rem;font-weight:600">${label}</div>
      <div style="font-size:0.68rem;color:var(--txt2);line-height:1.55">${note || ''}</div>
    </div>`;

  const factors = w.weather_factors || [];
  const impactRgb = impactColor.replace('#','').match(/../g).map(h=>parseInt(h,16)).join(',');

  return `
    <div class="mf-panel" style="grid-column: 1 / -1; border-right:none; background:rgba(0,229,255,0.015)">
      <div class="mf-panel-label" style="color:var(--cyan)">🌤 赛场气候分析 · 对推演的影响</div>
      <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:1rem;line-height:1.5">
        ${w.venue ? `<strong style="color:var(--txt)">${w.venue}</strong>${w.city ? ` · ${w.city}${w.country ? '，' + w.country : ''}` : ''} · ` : ''}
        气候条件（温度、湿度、海拔、降雨）对球队体能、战术风格产生直接影响，已纳入本场胜率计算权重
      </div>

      <!-- 天气概览 -->
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:0.75rem;margin-bottom:1.25rem">
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1.8rem;line-height:1">${icon}</div>
          <div style="font-size:0.85rem;font-weight:700;margin-top:0.3rem">${tempC}°C / ${tempF}°F</div>
          <div style="font-size:0.62rem;color:var(--txt2)">${condition}</div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1.4rem;font-weight:800;color:var(--cyan)">${w.humidity}%</div>
          <div style="font-size:0.62rem;color:var(--txt2);margin-top:0.2rem">相对湿度</div>
          <div style="font-size:0.6rem;color:var(--txt2)">${w.humidity > 70 ? '⚠ 高湿度影响体能' : w.humidity > 50 ? '中等湿度' : '干燥舒适'}</div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1.4rem;font-weight:800;color:var(--gold)">${altM}m</div>
          <div style="font-size:0.62rem;color:var(--txt2);margin-top:0.2rem">海拔高度</div>
          <div style="font-size:0.6rem;color:var(--txt2)">${altM > 2000 ? '⚠ 高原缺氧影响大' : altM > 1000 ? '中海拔，轻微影响' : '海平面，无影响'}</div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1.4rem;font-weight:800;color:${w.rain_chance > 50 ? 'var(--red)' : w.rain_chance > 20 ? 'var(--gold)' : 'var(--green)'}">${w.rain_chance}%</div>
          <div style="font-size:0.62rem;color:var(--txt2);margin-top:0.2rem">降雨概率</div>
          <div style="font-size:0.6rem;color:var(--txt2)">${w.rain_chance > 50 ? '⚠ 场地积水风险' : w.rain_chance > 20 ? '轻度降雨可能' : '干燥场地'}</div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:1rem;font-weight:800;color:var(--txt)">${windStr}</div>
          <div style="font-size:0.62rem;color:var(--txt2);margin-top:0.2rem">风向风力</div>
          <div style="font-size:0.6rem;color:var(--txt2)">影响高空球落点</div>
        </div>
        <div style="background:rgba(${impactRgb},0.1);border:1px solid ${impactColor}44;border-radius:4px;padding:0.75rem;text-align:center">
          <div style="font-size:0.65rem;font-weight:800;color:${impactColor};letter-spacing:1px">${w.impact_level} IMPACT</div>
          <div style="font-size:0.62rem;color:var(--txt2);margin-top:0.3rem;line-height:1.5">${impactText}</div>
        </div>
      </div>

      <!-- 双队气候适应性 -->
      <div style="font-size:0.62rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.6rem">各队气候适应度评分</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1rem">
        ${adaptBar(homeName, homeAdaptScore, homeAdaptColor, homeAdaptLabel, w.home_note)}
        ${adaptBar(awayName, awayAdaptScore, awayAdaptColor, awayAdaptLabel, w.away_note)}
      </div>

      <!-- 气候对预测的影响 -->
      <div style="font-size:0.62rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.5rem">气候因素 → 推演影响</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:0.4rem;margin-bottom:0.75rem">
        ${factors.length ? factors.map(f => `
          <div style="display:flex;gap:0.4rem;font-size:0.72rem;line-height:1.55;padding:0.35rem 0.5rem;background:rgba(255,255,255,0.02);border-radius:3px">
            <span style="color:var(--cyan);flex-shrink:0">◆</span>
            <span><strong>${f.label || f}</strong>${f.impact ? ' · ' + f.impact : ''}${f.detail ? ' — ' + f.detail : ''}</span>
          </div>`).join('') : `
          <div style="font-size:0.72rem;color:var(--txt2);padding:0.5rem;line-height:1.55">暂无分项推演影响数据 · 请参考上方综合影响评级</div>`}
      </div>
      <div style="font-size:0.65rem;color:rgba(122,143,181,0.5);line-height:1.5">📌 ${w.historical_note || ''}</div>
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
  };
}

function verdictBadge(hit, hitLabel, missLabel) {
  return hit
    ? `<span style="font-size:0.62rem;font-weight:700;padding:0.1rem 0.45rem;border-radius:2px;background:rgba(91,191,138,0.15);color:#5BBF8A;border:1px solid rgba(91,191,138,0.35)">✓ ${hitLabel || '命中'}</span>`
    : `<span style="font-size:0.62rem;font-weight:700;padding:0.1rem 0.45rem;border-radius:2px;background:rgba(217,95,106,0.1);color:#D95F6A;border:1px solid rgba(217,95,106,0.28)">✗ ${missLabel || '未中'}</span>`;
}

function predictionVerdictPanel(m) {
  const v = computePredictionVerdict(m);
  if (!v) return '';
  const integrityColor = v.dataIntegrity === 'ok' ? '#5BBF8A' : v.dataIntegrity === 'suspect' ? '#D95F6A' : '#C8A96E';
  const integrityIcon = v.dataIntegrity === 'ok' ? '✓' : v.dataIntegrity === 'suspect' ? '⚠' : 'ℹ';
  return `
    <div class="pred-verdict-panel">
      <div class="pred-verdict-title">📋 赛果 vs 预测核验</div>
      <div class="pred-verdict-grid">
        <div class="pred-verdict-card" style="background:rgba(91,191,138,0.08);border:1px solid rgba(91,191,138,0.25)">
          <div class="pred-verdict-card-label" style="color:#5BBF8A">官方赛果</div>
          <div class="pred-verdict-card-body">
            <div class="pred-verdict-official">${m.home.name} ${m.actualResult.home_score} — ${m.actualResult.away_score} ${m.away.name}</div>
            <div class="pred-verdict-sub">实际结果 · ${OUTCOME_CN[v.officialOutcome]}</div>
          </div>
        </div>
        <div class="pred-verdict-card" style="background:rgba(200,169,110,0.08);border:1px solid rgba(200,169,110,0.25)">
          <div class="pred-verdict-card-label" style="color:var(--gold)">赛前预测比分</div>
          <div class="pred-verdict-card-body">
            <div class="pred-verdict-score-row">
              <span class="pred-verdict-pred-score">${v.predScore}</span>
              ${verdictBadge(v.scoreHit, '比分命中', '比分未中')}
            </div>
            <div class="pred-verdict-sub">泊松最可能 ${v.poissonTop || '—'} · 仅赛前冻结</div>
          </div>
        </div>
        <div class="pred-verdict-card" style="background:rgba(255,255,255,0.03);border:1px solid var(--border)">
          <div class="pred-verdict-card-label" style="color:var(--txt2)">胜平负预测</div>
          <div class="pred-verdict-card-body">
            <div class="pred-verdict-score-row">
              <span style="font-size:1rem;font-weight:700;color:var(--txt)">${OUTCOME_CN[v.predOutcome]} ${v.predOutcomePct}%</span>
              ${verdictBadge(v.outcomeHit, '方向命中', '方向未中')}
            </div>
            <div class="pred-verdict-sub">实际 ${OUTCOME_CN[v.officialOutcome]}</div>
          </div>
        </div>
        <div class="pred-verdict-card" style="background:rgba(255,255,255,0.03);border:1px solid var(--border)">
          <div class="pred-verdict-card-label" style="color:var(--txt2)">概率前三比分</div>
          <div class="pred-verdict-card-body">
            <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
              ${v.top3.length ? v.top3.map((d, i) => `
                <span style="font-size:0.72rem;font-weight:700;padding:0.15rem 0.45rem;border-radius:3px;
                  background:${d.hit ? 'rgba(91,191,138,0.15)' : 'rgba(255,255,255,0.04)'};
                  color:${d.hit ? '#5BBF8A' : 'var(--txt2)'};
                  border:1px solid ${d.hit ? 'rgba(91,191,138,0.4)' : 'rgba(255,255,255,0.08)'}">
                  #${i + 1} ${d.score} ${d.prob}% ${d.hit ? '✓' : ''}
                </span>`).join('') : '<span class="pred-verdict-sub">暂无 xG 分布</span>'}
            </div>
            <div style="margin-top:0.15rem">${verdictBadge(v.anyTop3Hit, 'Top3 有命中', 'Top3 均未中')}</div>
          </div>
        </div>
      </div>
      <div style="font-size:0.68rem;line-height:1.55;padding:0.5rem 0.65rem;border-radius:3px;background:rgba(255,255,255,0.025);border-left:3px solid ${integrityColor};color:var(--txt2)">
        <span style="color:${integrityColor};font-weight:700">${integrityIcon} 数据完整性</span> · ${v.dataIntegrityNote}
      </div>
    </div>`;
}

// ── Score Distribution ─────────────────────────────────────
function scoreDistribution(dist, opts = {}) {
  if (!dist?.length) {
    return `<div style="padding:0.65rem;background:rgba(200,169,110,0.08);border:1px solid rgba(200,169,110,0.22);border-radius:4px;font-size:0.72rem;color:var(--gold);line-height:1.55">
      暂无 xG 数据，无法推算比分概率分布。
    </div>`;
  }
  const max = Math.max(...dist.map(d => d.prob));
  const official = opts.officialScore;
  const showHits = !!official;
  return `<div style="display:flex;flex-wrap:wrap;gap:0.4rem">
    ${dist.map((d, i) => {
      const hit = showHits && d.score === official;
      const isTop3 = i < 3;
      return `
      <div style="text-align:center;min-width:52px;padding:0.25rem 0.15rem;border-radius:4px;
        border:1px solid ${hit ? 'rgba(91,191,138,0.5)' : isTop3 && showHits ? 'rgba(200,169,110,0.25)' : 'transparent'};
        background:${hit ? 'rgba(91,191,138,0.1)' : 'transparent'}">
        <div style="font-size:0.58rem;color:var(--txt2);margin-bottom:1px">${isTop3 ? `#${i + 1}` : ''}</div>
        <div style="font-size:0.7rem;font-weight:700;color:${hit ? '#5BBF8A' : d.prob===max?'var(--gold)':'var(--txt2)'}">
          ${d.score}${hit ? ' ✓' : ''}
        </div>
        <div style="height:${Math.round(d.prob/max*50)+8}px;background:${hit ? '#5BBF8A' : d.prob===max?'var(--gold)':'rgba(255,255,255,0.1)'};border-radius:2px 2px 0 0;margin-top:2px;transition:height 0.5s"></div>
        <div style="font-size:0.65rem;color:var(--txt2)">${d.prob}%</div>
      </div>`;
    }).join('')}
  </div>`;
}

function poissonScoreFootnote(p) {
  if (!hasPoissonInputs(p) || typeof computeOutcomeFromXg !== 'function') return '';
  const o = computeOutcomeFromXg(p.xg_home, p.xg_away);
  return `<div style="font-size:0.62rem;color:rgba(122,143,181,0.65);line-height:1.55;margin-top:0.5rem">
    泊松最可能比分 <strong style="color:var(--txt)">${o.score}</strong>（${o.score_prob}%）·
    网格内胜平负 ${o.home_win}% / ${o.draw}% / ${o.away_win}%
    ${o.tail_mass_pct > 0 ? ` · 未列入表内的高比分约 ${o.tail_mass_pct}%` : ''}
  </div>`;
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

function upsetImpactColor(impact) {
  if (impact === '强') return '#ff8855';
  if (impact === '中') return '#C8A96E';
  return '#7a8fb5';
}

/** 主教练深度分析 — 战术风格 / 换人 / 领先落后 / 强弱队策略 */
function coachScenarioBlock(icon, title, label, detail, accent) {
  const color = accent || 'var(--gold)';
  return `
    <div style="padding:0.55rem 0.65rem;background:rgba(255,255,255,0.025);border-radius:4px;border-left:3px solid ${color};margin-bottom:0.45rem">
      <div style="font-size:0.62rem;letter-spacing:1px;color:${color};margin-bottom:0.2rem">${icon} ${title}${label ? ` · <strong>${label}</strong>` : ''}</div>
      <div style="font-size:0.72rem;color:var(--txt2);line-height:1.6">${detail || '—'}</div>
    </div>`;
}

function renderCoachCard(c, teamName, sideColor) {
  if (!c) return '';
  const tags = (c.style_tags || []).map(t =>
    `<span style="font-size:0.58rem;padding:0.12rem 0.4rem;border-radius:2px;background:${sideColor}18;color:${sideColor};border:1px solid ${sideColor}33;margin:0 0.25rem 0.25rem 0;display:inline-block">${t}</span>`
  ).join('');

  return `
    <div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:6px;padding:1rem;height:100%">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:0.75rem;margin-bottom:0.75rem;flex-wrap:wrap">
        <div>
          <div style="font-size:1rem;font-weight:800;color:${sideColor}">${c.name}</div>
          <div style="font-size:0.68rem;color:var(--txt2);margin-top:0.2rem">${teamName} · ${c.nation || ''}${c.age ? ` · ${c.age}岁` : ''}${c.tenure ? ` · ${c.tenure}` : ''}</div>
          ${c.wc_exp ? `<div style="font-size:0.65rem;color:var(--txt2);margin-top:0.25rem;line-height:1.5">🏆 ${c.wc_exp}</div>` : ''}
        </div>
        <div style="text-align:right;font-size:0.65rem;color:var(--txt2);line-height:1.5">
          <div>偏好阵型</div>
          <div style="font-weight:700;color:var(--txt);margin-top:0.15rem">${c.formation_pref || '—'}</div>
        </div>
      </div>

      <div style="margin-bottom:0.65rem">${tags}</div>
      <div style="font-size:0.74rem;line-height:1.65;color:var(--txt);margin-bottom:0.85rem;padding:0.55rem;background:rgba(255,255,255,0.03);border-radius:4px">
        ${c.style_summary || ''}
      </div>

      <div style="font-size:0.62rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.45rem">换人习惯</div>
      ${coachScenarioBlock('🔄', '换人窗口', c.subs?.timing, c.subs?.pattern, sideColor)}
      <div style="font-size:0.65rem;color:var(--txt2);margin:-0.25rem 0 0.65rem 0.5rem;line-height:1.5">
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
      <div style="font-size:0.72rem;line-height:1.6;padding:0.5rem 0.6rem;background:rgba(255,255,255,0.03);border-radius:4px;margin-bottom:0.65rem;border:1px solid rgba(255,255,255,0.06)">
        <span style="font-size:0.6rem;letter-spacing:1px;color:var(--gold)">大赛心态 · </span>${c.tournament}
      </div>` : ''}

      ${(c.traits || []).length ? `
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-bottom:0.65rem">
        ${c.traits.map(t => `<span style="font-size:0.6rem;padding:0.15rem 0.45rem;border-radius:2px;background:rgba(255,255,255,0.05);color:var(--txt2);border:1px solid var(--border)">${t}</span>`).join('')}
      </div>` : ''}

      ${c.match_note ? `
      <div style="font-size:0.72rem;line-height:1.65;padding:0.55rem 0.65rem;background:${sideColor}0a;border-radius:4px;border:1px solid ${sideColor}28">
        <strong style="color:${sideColor}">本场预判 · </strong>${c.match_note}
      </div>` : ''}
    </div>`;
}

function coachAnalysisPanel(ca, homeName, awayName) {
  if (!ca || (!ca.home && !ca.away)) return '';
  return `
    <div class="mf-panel" style="grid-column:1 / -1;border-right:none;background:rgba(100,120,180,0.04);border:1px solid rgba(100,120,180,0.15)">
      <div class="mf-panel-label" style="color:#9aadff">👔 主教练深度分析 · 战术与临场决策</div>
      <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:1rem;line-height:1.55">
        风格标签、换人窗口、领先/落后决策、对强弱队不同策略及大赛心态——供推演临场变阵与比赛走势参考
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1rem">
        ${renderCoachCard(ca.home, homeName, 'var(--cyan)')}
        ${renderCoachCard(ca.away, awayName, 'var(--red)')}
      </div>
      <div style="font-size:0.58rem;color:rgba(122,143,181,0.55);line-height:1.5;margin-top:0.75rem">基于公开执教履历、大赛样本与媒体报道归纳 · 仅供娱乐推演 · 非官方战术指令</div>
    </div>`;
}

/** 强队爆冷防范 · 爆冷指数（打法克制 / 心理 / 历史冷门） */
function upsetAlertPanel(ua) {
  if (!ua) return '';
  const s = upsetLevelStyle(ua.level);
  const idx = Math.min(100, Math.max(0, Number(ua.index) || 0));
  const factors = (ua.factors || []).map(f => `
    <div style="font-size:0.72rem;line-height:1.55;padding:0.45rem 0.55rem;background:rgba(255,255,255,0.03);border-radius:3px;border-left:2px solid ${upsetImpactColor(f.impact)}">
      <span style="font-weight:700;color:${upsetImpactColor(f.impact)}">${f.tag || '因素'} · ${f.impact || '—'}</span>
      <span style="color:var(--txt2)"> — ${f.detail || ''}</span>
    </div>`).join('');

  return `
    <div class="mf-panel" style="grid-column:1 / -1;border-right:none;background:${s.bg};border:1px solid ${s.border}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:0.85rem">
        <div>
          <div class="mf-panel-label" style="color:${s.color}">⚡ 强队爆冷防范 · 预演分析</div>
          <div style="font-size:0.68rem;color:var(--txt2);line-height:1.5;margin-top:0.25rem">
            针对官方排名/模型热门 <strong style="color:var(--txt)">${ua.favorite}</strong> — 评估
            <strong style="color:var(--red)">${ua.underdog}</strong> 以克制打法、心理弱点或历史冷门制造 upset 的可能
          </div>
        </div>
        <div style="text-align:center;min-width:120px;padding:0.5rem 0.75rem;background:rgba(0,0,0,0.2);border-radius:6px;border:1px solid ${s.border}">
          <div style="font-size:0.58rem;letter-spacing:1.5px;color:var(--txt2);text-transform:uppercase">爆冷指数</div>
          <div style="font-size:2rem;font-weight:800;color:${s.color};line-height:1.1">${idx}</div>
          <div style="font-size:0.68rem;font-weight:700;color:${s.color}">${ua.level_cn || ua.level}</div>
          ${ua.cold_result_pct != null ? `<div style="font-size:0.6rem;color:var(--txt2);margin-top:0.25rem">冷门赛果区间 ${ua.cold_result_pct}%<br><span style="opacity:0.75">（${ua.underdog} 胜或逼平）</span></div>` : ''}
        </div>
      </div>

      <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;margin-bottom:0.85rem">
        <div style="width:${idx}%;height:100%;background:linear-gradient(90deg,${s.color}88,${s.color});border-radius:3px"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.55rem;color:var(--txt2);margin-top:-0.65rem;margin-bottom:0.85rem">
        <span>0 稳</span><span>25</span><span>40 警戒</span><span>55+ 高危</span>
      </div>

      <div style="font-size:0.78rem;line-height:1.65;padding:0.55rem 0.65rem;background:rgba(255,255,255,0.04);border-radius:4px;border-left:3px solid ${s.color};margin-bottom:0.85rem">
        <strong style="color:${s.color}">结论 · </strong>${ua.verdict || ''}
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.65rem;margin-bottom:0.75rem">
        <div style="font-size:0.72rem;line-height:1.6;padding:0.5rem;background:rgba(255,255,255,0.02);border-radius:3px">
          <div style="font-size:0.6rem;letter-spacing:1px;color:var(--cyan);margin-bottom:0.3rem">打法克制</div>
          ${ua.tactical || '—'}
        </div>
        <div style="font-size:0.72rem;line-height:1.6;padding:0.5rem;background:rgba(255,255,255,0.02);border-radius:3px">
          <div style="font-size:0.6rem;letter-spacing:1px;color:var(--gold);margin-bottom:0.3rem">心理防线</div>
          ${ua.psychology || '—'}
        </div>
        <div style="font-size:0.72rem;line-height:1.6;padding:0.5rem;background:rgba(255,255,255,0.02);border-radius:3px">
          <div style="font-size:0.6rem;letter-spacing:1px;color:var(--txt2);margin-bottom:0.3rem">历史冷门</div>
          ${ua.historical || '—'}
        </div>
      </div>

      <div style="font-size:0.62rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.45rem">风险因子矩阵</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:0.4rem">
        ${factors}
      </div>
      ${ua.reverse_note ? `<div style="font-size:0.65rem;color:rgba(122,143,181,0.75);line-height:1.5;margin-top:0.65rem">📌 ${ua.reverse_note}</div>` : ''}
      <div style="font-size:0.6rem;color:rgba(122,143,181,0.55);line-height:1.5;margin-top:0.5rem">指数口径：打法错配 + 心理韧性 + 伤病扰动 + 历史被爆冷频率；仅供娱乐推演，非投注建议。</div>
    </div>`;
}

/** 右侧第2行：综合推演关键因素 + 其下方的比分概率分布（同一格内堆叠） */
function renderRightAnalysisPanel(p, m) {
  const finished = m.actualResult && ['FT', 'AET', 'PEN'].includes(m.actualResult.status);
  const officialScore = finished ? getOfficialScoreStr(m) : null;
  const verdict = finished ? computePredictionVerdict(m) : null;
  return `
      <div class="mf-panel mf-panel-right-stack">
        <div class="mf-panel-label">🔑 综合推演关键因素</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">模型判断本场走势的重要变量 — 已纳入上方胜率娱乐推演${finished ? ' · 下方为<strong style="color:var(--gold)">赛前</strong>泊松分布，与官方赛果对照' : ''}</div>
        <div style="display:flex;gap:0.5rem;font-size:0.75rem;line-height:1.6;padding:0.4rem;
          background:rgba(255,255,255,0.03);border-radius:3px;border-left:2px solid var(--gold);margin-bottom:1.25rem">
          <span style="color:var(--gold);font-weight:700;flex-shrink:0">→</span>
          <span>${p.key_factor || '综合因素分析'}</span>
        </div>
        <div class="mf-panel-label" style="margin-top:0.25rem">📈 本场比分概率分布</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">
          由本场 xG（<strong style="color:var(--cyan)">${p.xg_home ?? '—'}</strong> — <strong style="color:var(--red)">${p.xg_away ?? '—'}</strong>）对 <strong style="color:var(--txt)">0-0 至 5-5</strong> 共 36 种比分做独立泊松推演，实时计算、不存手写概率；展示 Top <strong style="color:var(--txt)">5</strong>。<br>
          上方胜平负为综合模型（含主场、伤病等），与此处 xG 泊松比分分布为不同口径。
          ${finished && verdict ? `<br><strong style="color:${verdict.anyTop3Hit ? '#5BBF8A' : '#D95F6A'}">官方 ${officialScore} · Top3 ${verdict.anyTop3Hit ? '有命中' : '均未中'}</strong>` : ''}
        </div>
        ${scoreDistribution(getMatchScoreDistribution(p), { officialScore })}
        ${poissonScoreFootnote(p)}
        <div style="margin-top:1.25rem">
          <div style="font-size:0.62rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.5rem">📋 ${m.home.name} 近5场战绩</div>
          ${m.home.form.map(r => `<span style="display:inline-block;width:22px;height:22px;line-height:22px;
            text-align:center;border-radius:50%;font-size:0.7rem;font-weight:700;margin-right:3px;
            background:${r === 'W' ? 'rgba(91,191,138,0.25)' : r === 'D' ? 'rgba(150,150,150,0.15)' : 'rgba(217,95,106,0.2)'};
            color:${r === 'W' ? '#5BBF8A' : r === 'D' ? '#aaa' : '#D95F6A'}">${r}</span>`).join('')}
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
      <span style="font-size:0.62rem;font-weight:800;letter-spacing:2px;color:${color}">${label}</span>
      <span style="font-size:1.35rem;font-weight:800;color:var(--gold)">${m.home.name} ${r.home_score} — ${r.away_score} ${m.away.name}</span>
      ${finished ? '<span style="font-size:0.65rem;color:var(--txt2)">数据来源 API 官方同步</span>' : ''}
    </div>`;
}

function renderStarNumberBadge(s) {
  const hasOfficial = typeof DATA_INTEGRITY !== 'undefined' && DATA_INTEGRITY.hasOfficialNumber(s);
  if (hasOfficial) {
    return `<span style="display:inline-flex;align-items:center;gap:0.3rem;flex-shrink:0;margin-right:0.4rem">
      <span style="font-size:0.82rem;font-weight:800;color:var(--cyan);min-width:1.75rem;text-align:center;font-variant-numeric:tabular-nums;line-height:1">#${s.number}</span>
      <span style="font-size:0.5rem;font-weight:700;letter-spacing:0.5px;padding:0.06rem 0.28rem;border-radius:2px;background:rgba(91,191,138,0.12);color:#5BBF8A;border:1px solid rgba(91,191,138,0.32)" title="${s.number_source || 'FIFA 官方名单'}">官方</span>
    </span>`;
  }
  return `<span style="display:inline-flex;align-items:center;gap:0.25rem;flex-shrink:0;margin-right:0.4rem" title="号码尚未经 FIFA 最终名单官方确认">
    <span style="font-size:0.72rem;font-weight:700;color:rgba(122,143,181,0.45);min-width:1.75rem;text-align:center">—</span>
  </span>`;
}

function renderStarPanel(team) {
  const list = team.stars?.length ? team.stars : (team.star ? [team.star] : []);
  if (!list.length) return '<div style="color:var(--txt2);font-size:0.72rem">暂无数据</div>';
  const officialCount = list.filter(s => typeof DATA_INTEGRITY !== 'undefined' && DATA_INTEGRITY.hasOfficialNumber(s)).length;
  const footnote = officialCount
    ? `<div style="font-size:0.58rem;color:rgba(122,143,181,0.65);margin-top:0.5rem;line-height:1.45">球衣号码来源：FIFA 2026 世界杯最终名单（${officialCount}/${list.length} 人已官方确认）</div>`
    : '';
  return list.map(s => `
    <div class="star-row">
      <div style="flex:1">
        <div style="display:flex;align-items:center;flex-wrap:wrap;gap:0.15rem;font-size:0.85rem;font-weight:700;line-height:1.35">
          ${renderStarNumberBadge(s)}
          <span>${s.name}</span>
          ${s.rating ? `<span style="font-size:0.62rem;color:var(--gold);font-weight:700">★ ${s.rating}</span>` : ''}
        </div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-top:0.2rem;padding-left:2.15rem">${s.pos} · ${s.club}${s.stats ? ` · ${s.stats}` : ''}</div>
        <div style="font-size:0.7rem;color:var(--txt);margin-top:0.25rem;padding-left:2.15rem">📌 ${s.desc}</div>
      </div>
    </div>`).join('') + footnote;
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
            <div style="font-size:0.58rem;color:var(--txt2)">黄牌/场</div>
          </div>
          <div style="text-align:center;background:rgba(217,95,106,0.06);border:1px solid rgba(217,95,106,0.15);border-radius:4px;padding:0.4rem">
            <div style="font-size:1.1rem;font-weight:800;color:var(--red)">${ref.avg_red}</div>
            <div style="font-size:0.58rem;color:var(--txt2)">红牌/场</div>
          </div>
          <div style="text-align:center;background:rgba(0,229,255,0.06);border:1px solid rgba(0,229,255,0.15);border-radius:4px;padding:0.4rem">
            <div style="font-size:1.1rem;font-weight:800;color:var(--cyan)">${pen}</div>
            <div style="font-size:0.58rem;color:var(--txt2)">点球/场</div>
          </div>
        </div>
        ${hwr != null ? `
        <div style="margin-bottom:0.75rem;padding:0.6rem;background:rgba(255,255,255,0.03);border-radius:4px;border:1px solid var(--border)">
          <div style="font-size:0.62rem;letter-spacing:1px;color:var(--txt2);margin-bottom:0.35rem">量化执法倾向（模型参考）</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;font-size:0.72rem">
            <div>执法后<strong style="color:var(--cyan)">主队胜率 ${hwr}%</strong></div>
            <div>偏向指数 <strong style="color:${biasColor}">${bias ?? '—'}/100</strong> · ${biasLabel}</div>
          </div>
          ${bias != null ? `<div style="margin-top:0.4rem;height:5px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden">
            <div style="width:${bias}%;height:100%;background:${biasColor};border-radius:3px"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.55rem;color:var(--txt2);margin-top:2px">
            <span>客队</span><span>中立50</span><span>主队</span>
          </div>` : ''}
        </div>` : ''}
        ${ref.wc_final ? `<div style="font-size:0.68rem;color:var(--gold);margin-bottom:0.5rem">🏆 ${ref.wc_final}</div>` : ''}
        <div style="font-size:0.72rem;color:var(--txt2);line-height:1.6;margin-bottom:0.5rem">${ref.bias_note}</div>
        <div style="font-size:0.7rem;background:rgba(200,169,110,0.07);border:1px solid rgba(255,215,0,0.15);border-radius:3px;padding:0.5rem;color:var(--gold);line-height:1.5">
          ⚠ ${(ref.tendencies||[]).join(' · ')}
        </div>`;
}

function renderMatch(m) {
  const p = m.prediction;
  const tag = (label, color) => `<span style="font-size:0.58rem;letter-spacing:1.5px;text-transform:uppercase;padding:0.12rem 0.5rem;border-radius:2px;background:${color}22;color:${color};border:1px solid ${color}44;font-weight:700">${label}</span>`;
  const finished = m.actualResult && ['FT', 'AET', 'PEN'].includes(m.actualResult.status);

  return `
  <div class="match-full-card fade-in">
    ${resultBanner(m)}
    ${predictionVerdictPanel(m)}
    ${pendingBanner(m)}
    <!-- MATCH HEADER -->
    <div class="mf-header">
      <div class="mf-meta">
        ${tag('GROUP ' + m.group, '#7BB8D4')}
        ${tag('MATCHDAY ' + m.matchday, '#888888')}
        ${finished ? tag('已结束', '#5BBF8A') : tag('待赛', '#C8A96E')}
        <span style="font-size:0.72rem;color:var(--txt2)">${m.venue} · ${m.city}</span>
      </div>
      <div class="mf-kickoff" style="text-align:right">
        <div style="font-size:0.6rem;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:2px">🇨🇳 北京时间</div>
        <div style="font-size:1.1rem;font-weight:800;color:var(--gold);letter-spacing:1px;line-height:1.1">${m.date_beijing||''} ${m.time_beijing||m.time}</div>
        <div style="font-size:0.6rem;color:var(--txt2);margin-top:2px">当地 ${m.time_local||m.time} · ${m.timezone}</div>
      </div>
    </div>

    <!-- TEAMS HERO ROW -->
    <div class="mf-teams-hero">
      <div class="mf-team-side">
        <img src="${FLAG(m.home.iso)}" class="mf-flag" alt="${m.home.name}" onerror="this.style.display='none'">
        <div class="mf-team-name">${m.home.name}</div>
        <div class="mf-team-rating">Rating <strong style="color:var(--cyan)">${m.home.rating}</strong></div>
        <div style="font-size:0.55rem;color:rgba(255,255,255,0.3);letter-spacing:1.5px;text-transform:uppercase;margin-top:0.4rem;margin-bottom:2px">近5场 🟢胜 ⬜平 🔴负</div>
        <div class="mf-team-form">${formDots(m.home.form)}</div>
      </div>
      <div class="mf-vs-col">
        <div class="mf-vs-text">VS</div>
        <div class="mf-prob-trio">
          <div><span style="color:var(--cyan);font-size:1.2rem;font-weight:800">${p.home_win}%</span><br><span style="font-size:0.6rem;color:var(--txt2)">${m.home.name} 胜</span></div>
          <div><span style="color:var(--txt2);font-size:1.1rem;font-weight:700">${p.draw}%</span><br><span style="font-size:0.6rem;color:var(--txt2)">平局</span></div>
          <div><span style="color:var(--red);font-size:1.2rem;font-weight:800">${p.away_win}%</span><br><span style="font-size:0.6rem;color:var(--txt2)">${m.away.name} 胜</span></div>
        </div>
        <div class="mf-prob-bar">
          <div style="width:${p.home_win}%;background:var(--cyan)"></div>
          <div style="width:${p.draw}%;background:rgba(255,255,255,0.15)"></div>
          <div style="width:${p.away_win}%;background:var(--red)"></div>
        </div>
        <div class="play-note" style="margin-top:0.35rem">${MODEL_TAGLINE}</div>
        <div class="play-note">模型推演胜率 · ${PLAY_NOTE_STD}</div>
        <div class="mf-predict-block">
          <div class="mf-predict-label">${finished ? '赛前预测比分' : '娱乐推演比分'}</div>
          <div class="mf-predict-score">${p.score}</div>
          ${finished ? '' : `<div class="play-note">${MODEL_TAGLINE}</div>`}
          <div class="mf-predict-note">${finished ? '官方赛果见上方核验区 · 此处为赛前模型预测' : PLAY_NOTE_STD}</div>
          <div class="mf-predict-meta" title="xG（期望进球数）= 根据射门位置、角度、质量统计出的理论进球数，反映攻击质量而非实际比分">期望进球 xG：<strong style="color:var(--cyan)">${p.xg_home}</strong> — <strong style="color:var(--red)">${p.xg_away}</strong></div>
          <div class="mf-predict-meta">推演置信度（娱乐参考）：<strong style="color:${p.confidence>=80?'#5BBF8A':p.confidence>=60?'#C8A96E':'#ff8855'}">${p.confidence}%</strong></div>
          ${m.upset_alert ? (() => {
            const ua = m.upset_alert;
            const s = upsetLevelStyle(ua.level);
            return `<div style="margin-top:0.55rem;padding:0.35rem 0.5rem;border-radius:3px;background:${s.bg};border:1px solid ${s.border};font-size:0.62rem;line-height:1.45">
              <span style="color:${s.color};font-weight:700">爆冷指数 ${ua.index}</span>
              <span style="color:var(--txt2)"> · ${ua.favorite} 需防 ${ua.underdog}</span>
            </div>`;
          })() : ''}
        </div>
      </div>
      <div class="mf-team-side mf-team-right">
        <img src="${FLAG(m.away.iso)}" class="mf-flag" alt="${m.away.name}" onerror="this.style.display='none'">
        <div class="mf-team-name">${m.away.name}</div>
        <div class="mf-team-rating">Rating <strong style="color:var(--red)">${m.away.rating}</strong></div>
        <div style="font-size:0.55rem;color:rgba(255,255,255,0.3);letter-spacing:1.5px;text-transform:uppercase;margin-top:0.4rem;margin-bottom:2px">近5场 🟢胜 ⬜平 🔴负</div>
        <div class="mf-team-form">${formDots(m.away.form)}</div>
      </div>
    </div>

    <!-- 4-COLUMN DETAIL GRID -->
    <div class="mf-detail-grid">

      <!-- STAR PLAYERS HOME -->
      <div class="mf-panel">
        <div class="mf-panel-label" style="color:var(--cyan)">⭐ ${m.home.name} 核心球员</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">本场最具威胁的球员（3人）— 名称前为 FIFA 最终名单球衣号，带「官方」标签为已确认号码</div>
        ${renderStarPanel(m.home)}
      </div>

      <!-- STAR PLAYERS AWAY -->
      <div class="mf-panel">
        <div class="mf-panel-label" style="color:var(--red)">⭐ ${m.away.name} 核心球员</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">本场最具威胁的球员（3人）— 名称前为 FIFA 最终名单球衣号，带「官方」标签为已确认号码</div>
        ${renderStarPanel(m.away)}
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
        ${renderRefereePanel(m.referee)}
      </div>

      ${m.lineup ? renderLineupPanel(m) : ''}

      <!-- INJURIES HOME -->
      <div class="mf-panel">
        <div class="mf-panel-label" style="color:var(--red)">🏥 ${m.home.name} — 伤病 & 更衣室动态</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">赛前确认的伤病停赛信息（红色 = 确认缺阵 / 黄色 = 存疑），以及来自训练营的内部传言</div>
        ${(m.home.injuries || []).map(inj => `
          <div style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem;padding:0.5rem;background:rgba(255,68,85,0.05);border-radius:3px;border:1px solid rgba(255,68,85,0.12)">
            ${injuryBadge(inj.status)}
            <div>
              <div style="font-size:0.8rem;font-weight:600">${inj.player}</div>
              <div style="font-size:0.67rem;color:var(--txt2)">${inj.note}</div>
              ${inj.confirmed ? '<span style="font-size:0.6rem;color:#D95F6A">● 官方确认</span>' : '<span style="font-size:0.6rem;color:#C8A96E">● 待核实 / 媒体报道</span>'}
            </div>
          </div>`).join('')}
        <div style="margin-top:0.6rem">
          <div style="font-size:0.6rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.4rem">Camp Rumors</div>
          ${(m.home.rumors || []).map(r => `<div style="font-size:0.7rem;color:var(--txt2);line-height:1.55;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.04)">💬 ${r}</div>`).join('')}
        </div>
      </div>

      <!-- INJURIES AWAY -->
      <div class="mf-panel">
        <div class="mf-panel-label" style="color:var(--red)">🏥 ${m.away.name} — 伤病 & 更衣室动态</div>
        <div style="font-size:0.68rem;color:var(--txt2);margin-bottom:0.75rem;line-height:1.5">赛前确认的伤病停赛信息（红色 = 确认缺阵 / 黄色 = 存疑），以及来自训练营的内部传言</div>
        ${(m.away.injuries || []).map(inj => `
          <div style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem;padding:0.5rem;background:rgba(255,68,85,0.05);border-radius:3px;border:1px solid rgba(255,68,85,0.12)">
            ${injuryBadge(inj.status)}
            <div>
              <div style="font-size:0.8rem;font-weight:600">${inj.player}</div>
              <div style="font-size:0.67rem;color:var(--txt2)">${inj.note}</div>
              ${inj.confirmed ? '<span style="font-size:0.6rem;color:#D95F6A">● 官方确认</span>' : '<span style="font-size:0.6rem;color:#C8A96E">● 待核实 / 媒体报道</span>'}
            </div>
          </div>`).join('')}
        <div style="margin-top:0.6rem">
          <div style="font-size:0.6rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt2);margin-bottom:0.4rem">Camp Rumors</div>
          ${(m.away.rumors || []).map(r => `<div style="font-size:0.7rem;color:var(--txt2);line-height:1.55;padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.04)">💬 ${r}</div>`).join('')}
        </div>
      </div>

      ${renderRightAnalysisPanel(p, m)}

      ${upsetAlertPanel(m.upset_alert)}

      ${coachAnalysisPanel(m.coach_analysis, m.home.name, m.away.name)}

      <!-- WEATHER PANEL (full width) -->
      ${weatherPanel(m.weather, m.home.name, m.away.name)}

    </div><!-- end detail grid -->

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
          <div style="font-size:0.68rem;color:var(--txt2)">FIFA #${nm.home.fifaRank} · Rating ${nm.home.rating}</div>
        </div>
      </div>
      <div style="flex:1;text-align:center;min-width:120px">
        <div style="font-size:0.62rem;letter-spacing:1.5px;color:var(--gold)">GROUP ${nm.group} · 明日赛事</div>
        <div style="font-size:0.58rem;font-weight:700;color:var(--gold);letter-spacing:1px;margin-top:3px">🇨🇳 北京时间</div>
        <div style="font-size:1.55rem;font-weight:800;color:var(--gold);margin:0.1rem 0;line-height:1.1">${nm.date_beijing||''} ${nm.time_beijing||nm.time}</div>
        <div style="font-size:0.62rem;color:var(--txt2)">当地 ${nm.time_local||nm.time} · ${nm.timezone||''}</div>
        <div style="font-size:0.62rem;color:var(--txt2);margin-top:2px">${nm.venue} · ${nm.city}</div>
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
      <div style="font-size:0.72rem;color:var(--txt2);line-height:1.7">${nm.teaser||''}</div>
    </div>
    <div style="background:rgba(200,169,110,0.07);border:1px solid rgba(255,215,0,0.2);border-radius:4px;padding:0.75rem;display:flex;gap:2rem;flex-wrap:wrap;align-items:center">
      <div style="text-align:center"><div style="font-size:0.6rem;color:var(--txt2);letter-spacing:1px">模型推演胜率</div><div style="font-size:1.4rem;font-weight:800;color:var(--cyan)">${nm.home_win}%</div></div>
      <div style="text-align:center"><div style="font-size:0.6rem;color:var(--txt2);letter-spacing:1px">平局推演</div><div style="font-size:1.4rem;font-weight:800;color:var(--txt2)">${nm.draw||0}%</div></div>
      <div style="text-align:center"><div style="font-size:0.6rem;color:var(--txt2);letter-spacing:1px">冷门推演</div><div style="font-size:1.4rem;font-weight:800;color:var(--red)">${nm.away_win}%</div></div>
      <div style="margin-left:auto;text-align:right">
        <div style="font-size:0.6rem;color:var(--txt2);letter-spacing:1px;margin-bottom:0.2rem">娱乐推演比分</div>
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
        <div style="font-size:0.7rem;font-weight:700;color:${color}">${icon} ${title}</div>
        <div style="font-size:0.62rem;padding:0.1rem 0.45rem;border-radius:3px;background:${color}20;
          color:${color};border:1px solid ${color}40;white-space:nowrap">
          有利方 ${favors} · ${prob}%
        </div>
      </div>
      <div style="font-size:0.67rem;color:rgba(210,195,235,0.7);line-height:1.6">${body}</div>
    </div>`;
}

// ── Mystic / Taoist Panel ─────────────────────────────────
function mysticPanel(mx, homeName, awayName) {
  if (!mx) return '';

  const P = 'rgba(120,85,185,'; // purple shorthand
  const elColors = {'木':'#5C9E78','火':'#C06848','土':'#A8853A','金':'#B0A070','水':'#5080A0'};
  const elTag = el => {
    const k = Object.keys(elColors).find(k => el.includes(k))||'土';
    return `<span style="font-size:0.62rem;padding:0.1rem 0.4rem;border-radius:2px;background:${elColors[k]}22;color:${elColors[k]};border:1px solid ${elColors[k]}44;margin-right:3px;white-space:nowrap">${el}</span>`;
  };
  const elTags = s => String(s || '土').split('、').filter(Boolean).map(elTag).join('') || elTag('土');

  const scoreBar = (name, score, color, verdict) => `
    <div style="background:rgba(255,255,255,0.03);border:1px solid ${P}0.15);border-radius:5px;padding:0.7rem">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.4rem">
        <span style="font-size:0.82rem;font-weight:700">${name}</span>
        <span style="font-size:0.72rem;font-weight:800;padding:0.1rem 0.5rem;border-radius:3px;
          background:${color}22;color:${color};border:1px solid ${color}44">${verdict}</span>
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem">
        <div style="flex:1;height:7px;background:rgba(255,255,255,0.07);border-radius:4px;overflow:hidden">
          <div style="width:${score}%;height:100%;background:${color};border-radius:4px"></div>
        </div>
        <span style="font-size:0.78rem;font-weight:800;color:${color};width:38px;text-align:right">${score}/100</span>
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
          <div style="font-size:0.62rem;color:${P}0.55);letter-spacing:1px">道家五行 · 赛日八字 · 卦象推演 · 走势解读</div>
        </div>
      </div>
      <span style="font-size:0.6rem;color:${P}0.35);letter-spacing:1px">文化解读 · 非竞技推演</span>
    </div>

    <div style="padding:1.25rem;display:flex;flex-direction:column;gap:1.25rem">

      <!-- ① 赛日八字 -->
      <div style="background:rgba(255,255,255,0.025);border:1px solid ${P}0.15);border-radius:6px;padding:1rem">
        <div style="font-size:0.62rem;letter-spacing:2px;color:#9B7DD4;margin-bottom:0.4rem">
          📅 赛日八字 · ${mx.date_bazi.day}（比赛当天，非打开页面的日期）
        </div>
        <div style="display:flex;gap:0.5rem;margin-bottom:0.75rem;flex-wrap:wrap">
          ${['year','month','day'].map(k=>`
            <div style="flex:1;min-width:72px;text-align:center;background:${P}0.08);border:1px solid ${P}0.2);border-radius:4px;padding:0.45rem">
              <div style="font-size:1.05rem;font-weight:800;color:#9B7DD4">${mx.date_bazi[k].replace(/[年月日]/g,'')}</div>
              <div style="font-size:0.55rem;color:${P}0.5);margin-top:2px">${{year:'年柱',month:'月柱',day:'日柱'}[k]}</div>
            </div>`).join('')}
          <div style="flex:1;min-width:72px;text-align:center;background:${elColors[mx.date_bazi.hour_home_element]||'#888'}18;
            border:1px solid ${elColors[mx.date_bazi.hour_home_element]||'#888'}44;border-radius:4px;padding:0.45rem">
            <div style="font-size:0.72rem;font-weight:700;color:${elColors[mx.date_bazi.hour_home_element]||'#9B7DD4'}">${mx.date_bazi.hour_home.split('（')[0]}</div>
            <div style="font-size:0.55rem;color:${P}0.5);margin-top:2px">开球时辰 · ${mx.date_bazi.hour_home_element}属</div>
          </div>
        </div>
        <div style="font-size:0.7rem;color:${P}0.65);line-height:1.7">${mx.date_bazi.day_summary}</div>
      </div>

      <!-- ② 五行优劣势 —— 核心对比 -->
      <div>
        <div style="font-size:0.65rem;letter-spacing:2px;color:#9B7DD4;margin-bottom:0.75rem">☯ 五行优劣势 · 队服配局分析</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:0.75rem">
          <!-- 主队 -->
          <div style="border:2px solid ${wx.home.verdict_color}55;border-radius:6px;overflow:hidden">
            <div style="padding:0.5rem 0.75rem;background:${wx.home.verdict_color}18;
              display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ${wx.home.verdict_color}33">
              <span style="font-weight:800;font-size:0.88rem">${homeWx.team}</span>
              <span style="font-size:0.78rem;font-weight:800;color:${homeWx.verdict_color||'#C8A96E'};
                padding:0.1rem 0.5rem;border-radius:3px;background:${(homeWx.verdict_color||'#C8A96E')}20">
                ${verdictLabel(homeWx.verdict)}
              </span>
            </div>
            <div style="padding:0.65rem 0.75rem">
              <div style="font-size:0.68rem;color:rgba(210,195,235,0.5);margin-bottom:0.3rem">队服：${homeWx.colors}</div>
              <div style="margin-bottom:0.5rem">${elTags(homeWx.elements)}</div>
              <div style="font-size:0.72rem;color:${homeWx.verdict_color||'#C8A96E'};font-weight:700;margin-bottom:0.4rem">${homeWx.wuxing_short||'—'}</div>
              <div style="font-size:0.68rem;color:rgba(210,195,235,0.68);line-height:1.6;margin-bottom:0.5rem">${homeWx.reason||''}</div>
              <div style="font-size:0.65rem;padding:0.35rem 0.5rem;background:${(homeWx.verdict_color||'#C8A96E')}15;
                border-radius:3px;color:${homeWx.verdict_color||'#C8A96E'};line-height:1.5">
                ${homeWx.verdict==='有利'?'↑ 加成：':homeWx.verdict==='不利'?'↓ 减分：':'◆ '}${homeWx.advantage||homeWx.disadvantage||'待更新'}
              </div>
            </div>
          </div>
          <!-- 客队 -->
          <div style="border:2px solid ${(awayWx.verdict_color||'#C8A96E')}55;border-radius:6px;overflow:hidden">
            <div style="padding:0.5rem 0.75rem;background:${(awayWx.verdict_color||'#C8A96E')}18;
              display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ${(awayWx.verdict_color||'#C8A96E')}33">
              <span style="font-weight:800;font-size:0.88rem">${awayWx.team}</span>
              <span style="font-size:0.78rem;font-weight:800;color:${awayWx.verdict_color||'#C8A96E'};
                padding:0.1rem 0.5rem;border-radius:3px;background:${(awayWx.verdict_color||'#C8A96E')}20">
                ${verdictLabel(awayWx.verdict)}
              </span>
            </div>
            <div style="padding:0.65rem 0.75rem">
              <div style="font-size:0.68rem;color:rgba(210,195,235,0.5);margin-bottom:0.3rem">队服：${awayWx.colors}</div>
              <div style="margin-bottom:0.5rem">${elTags(awayWx.elements)}</div>
              <div style="font-size:0.72rem;color:${awayWx.verdict_color||'#C8A96E'};font-weight:700;margin-bottom:0.4rem">${awayWx.wuxing_short||'—'}</div>
              <div style="font-size:0.68rem;color:rgba(210,195,235,0.68);line-height:1.6;margin-bottom:0.5rem">${awayWx.reason||''}</div>
              <div style="font-size:0.65rem;padding:0.35rem 0.5rem;background:${(awayWx.verdict_color||'#C8A96E')}15;
                border-radius:3px;color:${awayWx.verdict_color||'#C8A96E'};line-height:1.5">
                ${awayWx.verdict==='有利'?'↑ 加成：':awayWx.verdict==='不利'?'↓ 减分：':'◆ '}${awayWx.advantage||awayWx.disadvantage||'待更新'}
              </div>
            </div>
          </div>
        </div>
        <div style="font-size:0.72rem;color:rgba(210,195,235,0.48);text-align:center;
          padding:0.4rem;background:${P}0.06);border-radius:3px">
          五行裁定：${wx.summary||'赛前更新'}
        </div>
      </div>

      <!-- ③ 卦象推演 全情景分析 -->
      <div style="background:rgba(255,255,255,0.025);border:1px solid ${P}0.15);border-radius:6px;overflow:hidden">

        <!-- 卦象标题栏 -->
        <div style="padding:0.85rem 1rem;border-bottom:1px solid ${P}0.12);display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
          <div style="text-align:center;min-width:64px">
            <div style="font-size:2.2rem;line-height:1;color:#9B7DD4">${hx.symbol}</div>
            <div style="font-size:0.78rem;font-weight:800;color:rgba(255,255,255,0.9);margin-top:2px">${hx.name}</div>
            <div style="font-size:0.55rem;color:${P}0.45)">第${hx.number}卦 · ${hx.upper}/${hx.lower}</div>
          </div>
          <div style="flex:1;min-width:200px">
            <div style="font-size:0.62rem;letter-spacing:2px;color:#9B7DD4;margin-bottom:0.35rem">🀄 卦象推演 · 全情景分析</div>
            <div style="font-size:0.68rem;color:rgba(210,195,235,0.5);line-height:1.65;font-style:italic;margin-bottom:0.35rem">「${hx.quote.replace(/《.*?》：/,'')}」</div>
            <div style="font-size:0.7rem;color:rgba(210,195,235,0.78);line-height:1.6">${hx.general}</div>
            ${hx.hexagram_analysis ? `<div style="font-size:0.68rem;color:rgba(210,195,235,0.62);line-height:1.65;margin-top:0.5rem;padding:0.5rem 0.65rem;background:${P}0.06);border-radius:4px;border-left:2px solid ${P}0.35)">${hx.hexagram_analysis}</div>` : ''}
          </div>
        </div>

        <div style="padding:1rem;display:flex;flex-direction:column;gap:0.85rem">

          <!-- 有利/不利 + 比赛基本性质 -->
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:0.5rem">
            <div style="padding:0.5rem 0.6rem;background:rgba(91,191,138,0.07);border:1px solid rgba(91,191,138,0.22);border-radius:4px;text-align:center">
              <div style="font-size:0.58rem;color:rgba(0,255,136,0.55);margin-bottom:0.2rem">卦象有利</div>
              <div style="font-size:0.78rem;font-weight:800;color:#5BBF8A">✅ ${hx.advantage_team}</div>
            </div>
            <div style="padding:0.5rem 0.6rem;background:rgba(217,95,106,0.06);border:1px solid rgba(217,95,106,0.2);border-radius:4px;text-align:center">
              <div style="font-size:0.58rem;color:rgba(255,68,85,0.55);margin-bottom:0.2rem">卦象不利</div>
              <div style="font-size:0.78rem;font-weight:800;color:#D95F6A">❌ ${hx.disadvantage_team}</div>
            </div>
            <div style="padding:0.5rem 0.6rem;background:rgba(255,215,0,0.06);border:1px solid rgba(255,215,0,0.2);border-radius:4px;text-align:center">
              <div style="font-size:0.58rem;color:rgba(255,215,0,0.55);margin-bottom:0.2rem">比赛性质</div>
              <div style="font-size:0.75rem;font-weight:800;color:#C8A96E">${hx.match_nature}</div>
            </div>
            <div style="padding:0.5rem 0.6rem;background:${cardRiskColor}12;border:1px solid ${cardRiskColor}33;border-radius:4px;text-align:center">
              <div style="font-size:0.58rem;color:${cardRiskColor}99;margin-bottom:0.2rem">🟨 纪律风险</div>
              <div style="font-size:0.75rem;font-weight:800;color:${cardRiskColor}">${hx.yellow_card_risk}</div>
            </div>
          </div>

          <!-- 竞技推演（xG / 泊松 / 球员） -->
          <div style="font-size:0.62rem;letter-spacing:2px;color:${P}0.55);padding:0.35rem 0;border-bottom:1px solid ${P}0.12)">
            📊 竞技推演 · xG / 泊松 / 球员对位
            <span style="font-weight:400;letter-spacing:0.5px;color:${P}0.4);margin-left:0.35rem">（进球高峰、胜率分布、分情景走势）</span>
          </div>

          <!-- 基本预测5项 -->
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.45rem">
            ${hx.scenarios.map(s=>`
              <div style="padding:0.5rem 0.65rem;background:${P}0.04);border:1px solid ${P}0.1);border-radius:4px">
                <div style="font-size:0.72rem;font-weight:700;margin-bottom:0.2rem">${s.icon} ${s.label}</div>
                <div style="font-size:0.66rem;color:rgba(210,195,235,0.62);line-height:1.5">${s.text}</div>
              </div>`).join('')}
          </div>

          <!-- 分情景推演 标题 -->
          <div style="font-size:0.62rem;letter-spacing:2px;color:${P}0.6);padding-bottom:0.35rem;border-bottom:1px solid ${P}0.12)">
            📌 分情景推演 · 各种比赛走向完整解析
          </div>

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
              <div style="font-size:0.68rem;font-weight:700;color:${cardRiskColor};margin-bottom:0.2rem">纪律详解 · 风险等级：${hx.yellow_card_risk}</div>
              <div style="font-size:0.67rem;color:rgba(210,195,235,0.62);line-height:1.55">${hx.yellow_card_reason}</div>
            </div>
          </div>

        </div>
      </div>

      <!-- ④ 灵力胜率总裁定 -->
      <div style="background:${P}0.05);border:1px solid ${P}0.2);border-radius:6px;padding:1rem">
        <div style="font-size:0.62rem;letter-spacing:2px;color:#9B7DD4;margin-bottom:0.75rem">⚖ 灵力胜率总裁定</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:0.85rem">
          ${scoreBar(homeName, mx.home_score, '#9B7DD4', homeWx.verdict==='有利'?'天时有利':'逆势')}
          ${scoreBar(awayName, mx.away_score, 'rgba(120,85,185,0.45)', awayWx.verdict==='有利'?'天时有利':'逆势')}
        </div>
        <div style="font-size:0.82rem;color:rgba(230,200,255,0.88);line-height:1.75;
          padding:0.85rem 1rem;background:${P}0.08);border-radius:4px;border-left:3px solid #9B7DD4;margin-bottom:0.6rem">
          ${mx.mystic_verdict}
        </div>
        <div style="font-size:0.6rem;color:${P}0.3);line-height:1.5">${mx.disclaimer}</div>
      </div>

    </div>
  </div>`;
}

// ── Group Standings (results page) ─────────────────────────
function renderGroupSnapshots(snapshots) {
  if (!snapshots?.length) return '';
  return snapshots.map(g => `
    <div style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:1.25rem;margin-bottom:1.5rem">
      <div style="font-size:0.65rem;letter-spacing:2px;color:var(--gold);margin-bottom:0.75rem;font-weight:700">${g.label || '小组积分榜'}</div>
      <div style="display:grid;grid-template-columns:2fr repeat(7,1fr);gap:0.35rem;font-size:0.68rem;padding-bottom:0.4rem;border-bottom:1px solid var(--border);color:var(--txt2)">
        <span>球队</span><span style="text-align:center">赛</span><span style="text-align:center">胜</span><span style="text-align:center">平</span><span style="text-align:center">负</span><span style="text-align:center">进</span><span style="text-align:center">失</span><span style="text-align:center">分</span>
      </div>
      ${g.table.map((r,i) => `
        <div style="display:grid;grid-template-columns:2fr repeat(7,1fr);gap:0.35rem;font-size:0.75rem;padding:0.45rem 0;border-bottom:1px solid rgba(255,255,255,0.04);align-items:center">
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

  const dateEl = document.getElementById('results-date');
  if (dateEl) {
    dateEl.textContent = `📅 已归档 ${RESULTS_DATA.finishedMatches.length} 场 · 含加拿大/美国揭幕战`;
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
