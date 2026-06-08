// ============================================================
//  2026 World Cup — App Logic
// ============================================================

const FLAG = iso => `https://flagcdn.com/w40/${iso.toLowerCase()}.png`;

// ── Countdown ──────────────────────────────────────────────
function startCountdown() {
  const target = new Date('2026-06-11T18:00:00-04:00');
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hrs').textContent  = '00';
      document.getElementById('cd-min').textContent  = '00';
      document.getElementById('cd-sec').textContent  = '00';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-hrs').textContent  = String(h).padStart(2,'0');
    document.getElementById('cd-min').textContent  = String(m).padStart(2,'0');
    document.getElementById('cd-sec').textContent  = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}

// ── Champ Probability Bars ─────────────────────────────────
function renderChampBars() {
  const max = WC2026.champOdds[0].prob;
  const cont = document.getElementById('champ-bars');
  cont.innerHTML = WC2026.champOdds.map((t, i) => {
    const pct = (t.prob / max * 100).toFixed(1);
    const colors = ['rgba(255,215,0,0.9)','rgba(0,229,255,0.9)','rgba(0,255,136,0.8)',
      'rgba(0,229,255,0.7)','rgba(255,140,0,0.8)','rgba(180,180,255,0.7)',
      'rgba(0,200,100,0.7)','rgba(255,160,0,0.7)','rgba(220,100,100,0.7)',
      'rgba(100,200,220,0.7)','rgba(200,100,200,0.7)','rgba(150,200,150,0.7)',
      'rgba(220,200,100,0.7)','rgba(200,150,100,0.7)','rgba(200,200,100,0.7)',
      'rgba(150,150,150,0.5)'];
    return `<div class="cbar-item fade-in" style="animation-delay:${i*0.05}s">
      <span class="cbar-rank">#${i+1}</span>
      <img class="cbar-flag" src="${FLAG(t.iso)}" alt="${t.name}" onerror="this.style.display='none'">
      <span class="cbar-name">${t.name}</span>
      <div class="cbar-track"><div class="cbar-fill" data-w="${pct}" style="width:0%;background:${colors[i]||colors[colors.length-1]}"></div></div>
      <span class="cbar-pct">${t.prob}%</span>
    </div>`;
  }).join('');
  // Animate bars on scroll
  setTimeout(() => {
    cont.querySelectorAll('.cbar-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 300);
}

// ── Chart.js: Doughnut Champion Probability ────────────────
function renderChampChart() {
  const top8 = WC2026.champOdds.slice(0, 8);
  const ctx = document.getElementById('champChart').getContext('2d');
  const colors = ['#003189','#74ACDF','#009C3B','#CF1124','#AA151B','#888','#006600','#FF6600'];
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: top8.map(t => t.name),
      datasets: [{ data: top8.map(t => t.prob), backgroundColor: colors, borderColor: '#040d1c', borderWidth: 2 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '62%',
      plugins: {
        legend: { position: 'right', labels: { color: '#7a8fb5', font: { size: 11 }, padding: 10, boxWidth: 12 } },
        tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed}%` } }
      }
    }
  });
}

// ── Groups ─────────────────────────────────────────────────
function renderGroups() {
  const container = document.getElementById('groups-content');
  const tabBar = document.getElementById('group-tabs');

  const badgeClass = p => ['ap-1','ap-2','ap-3','ap-4'][p-1];
  const badgeText  = p => ['1st ADVANCE','2nd ADVANCE','3rd POOL','ELIMINATED'][p-1];
  const formHtml = form => form.map(r => `<span class="fd f${r}"></span>`).join('');

  WC2026.groups.forEach((g, gi) => {
    const tab = document.createElement('button');
    tab.className = 'gtab' + (gi === 0 ? ' active' : '');
    tab.textContent = 'Group ' + g.id;
    tab.onclick = () => {
      document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.group-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('panel-' + g.id).classList.add('active');
    };
    tabBar.appendChild(tab);

    const panel = document.createElement('div');
    panel.id = 'panel-' + g.id;
    panel.className = 'group-panel' + (gi === 0 ? ' active' : '');
    panel.innerHTML = `<div class="gcard fade-in">
      <div class="gcard-hdr">
        <span class="gcard-title">第 ${g.id} 组 — 预测排名</span>
        <span style="font-size:0.62rem;color:var(--txt2)">48 Teams · 12 Groups</span>
      </div>
      <div class="gcard-body">
        ${g.teams.map(t => `
          <div class="team-row pr-${t.predicted}">
            <span class="t-pos">${t.predicted}</span>
            <img class="t-flag" src="${FLAG(t.iso)}" alt="${t.name}" onerror="this.style.display='none'">
            <span class="t-name">${t.name}</span>
            <span class="t-rating">${t.rating}</span>
            <div class="t-form">${formHtml(t.form)}</div>
            <span class="adv-pill ${badgeClass(t.predicted)}">${badgeText(t.predicted)}</span>
          </div>`).join('')}
      </div>
    </div>
    <div class="gcard fade-in" style="animation-delay:0.1s">
      <div class="gcard-hdr"><span class="gcard-title">Advance Probability</span></div>
      <div class="gcard-body">
        ${g.teams.map(t => `
          <div style="margin-bottom:0.6rem;">
            <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:3px;">
              <span>${t.name}</span><span style="color:var(--cyan);font-weight:700">${t.adv}%</span>
            </div>
            <div style="height:5px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${t.adv}%;background:linear-gradient(90deg,var(--cyan),var(--gold));border-radius:3px;"></div>
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div class="gcard fade-in" style="animation-delay:0.2s">
      <div class="gcard-hdr"><span class="gcard-title">Key Players</span></div>
      <div class="gcard-body">
        ${g.teams.map(t => `
          <div class="team-row pr-${t.predicted}">
            <img class="t-flag" src="${FLAG(t.iso)}" alt="" onerror="this.style.display='none'">
            <div style="flex:1"><div style="font-size:0.82rem;font-weight:600">${t.name}</div><div style="font-size:0.68rem;color:var(--txt2)">${t.player} · ${t.role}</div></div>
            <span style="font-size:0.65rem;color:var(--txt2)">${t.role}</span>
          </div>`).join('')}
      </div>
    </div>`;
    container.appendChild(panel);
  });
}

// ── Name → ISO lookup for bracket flags ───────────────────
const ISO = {
  'France':'fr','Argentina':'ar','Brazil':'br','England':'gb','Spain':'es',
  'Germany':'de','Portugal':'pt','Netherlands':'nl','Morocco':'ma','Italy':'it',
  'Belgium':'be','Croatia':'hr','Uruguay':'uy','Colombia':'co','USA':'us',
  'Mexico':'mx','Japan':'jp','South Korea':'kr','Denmark':'dk','Serbia':'rs',
  'Turkey':'tr','Switzerland':'ch','Poland':'pl','Nigeria':'ng','Ghana':'gh',
  'Senegal':'sn','Egypt':'eg','Austria':'at','Chile':'cl','Paraguay':'py',
  'Uruguay':'uy','Ecuador':'ec','Tunisia':'tn','Saudi Arabia':'sa',
  'South Africa':'za','Iraq':'iq','Honduras':'hn','Costa Rica':'cr',
  'Bolivia':'bo','Canada':'ca','Jamaica':'jm','Panama':'pa','Iran':'ir',
  'New Zealand':'nz','Scotland':'gb','Venezuela':'ve','Cameroon':'cm',
  'Australia':'au','Jordan':'jo','Iraq':'iq'
};
const FLAGN = name => FLAG(ISO[name] || 'un');

// ── Bracket ────────────────────────────────────────────────
function renderBracket() {
  const bk = WC2026.bracket;
  const wrap = document.getElementById('bracket-inner');

  const matchHtml = (home, away, sH, sA, hw, note) => {
    const hw_wins = sH > sA;
    return `<div class="bm">
      <div class="bt${hw_wins?' win':''}">
        <img class="bt-flag" src="${FLAGN(home)}" alt="" onerror="this.style.opacity='0'">
        <span class="bt-name">${home}</span><span class="bt-score">${sH}</span>
      </div>
      <div class="bt${!hw_wins?' win':''}">
        <img class="bt-flag" src="${FLAGN(away)}" alt="" onerror="this.style.opacity='0'">
        <span class="bt-name">${away}</span><span class="bt-score">${sA}</span>
      </div>
    </div>`;
  };

  const rounds = [
    { label: 'Round of 16', matches: bk.r16 },
    { label: 'Quarter-Finals', matches: bk.qf },
    { label: 'Semi-Finals', matches: bk.sf }
  ];

  rounds.forEach(r => {
    const col = document.createElement('div');
    col.className = 'b-round';
    col.innerHTML = `<div class="b-label">${r.label}</div>
      <div class="b-matches">${r.matches.map(m => matchHtml(m.home, m.away, m.sH, m.sA, m.hw, m.note||'')).join('')}</div>`;
    wrap.appendChild(col);
  });
}

// ── Radar Charts ───────────────────────────────────────────
function renderRadar() {
  const grid = document.getElementById('radar-grid');
  const labels = ['Attack','Defense','Midfield','Pace','Set Pieces','Experience'];

  WC2026.radarTeams.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'radar-card fade-in';
    card.style.animationDelay = (i * 0.08) + 's';
    const champ = WC2026.champOdds.find(c => c.name === t.name);
    card.innerHTML = `<div class="rcard-hdr">
      <img src="${FLAG(champ ? champ.iso : 'un')}" alt="${t.name}" onerror="this.style.display='none'">
      <div><div class="rcard-title">${t.name}</div>
        <div class="rcard-sub">Champion Prob: <strong style="color:var(--gold)">${champ ? champ.prob + '%' : 'N/A'}</strong> · Rating: <strong style="color:var(--cyan)">${champ ? champ.rating : ''}</strong></div>
      </div>
    </div>
    <div class="rcanvas-wrap"><canvas id="radar-${i}"></canvas></div>`;
    grid.appendChild(card);

    const ctx = document.getElementById('radar-' + i).getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          data: t.stats,
          backgroundColor: t.color.replace('0.85', '0.15'),
          borderColor: t.color,
          borderWidth: 2,
          pointBackgroundColor: t.color,
          pointRadius: 3
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          r: {
            min: 70, max: 100,
            ticks: { display: false, stepSize: 10 },
            grid: { color: 'rgba(255,255,255,0.06)' },
            angleLines: { color: 'rgba(255,255,255,0.05)' },
            pointLabels: { color: '#7a8fb5', font: { size: 10 } }
          }
        }
      }
    });
  });
}

// ── Match Predictions ──────────────────────────────────────
function renderMatches() {
  const grid = document.getElementById('matches-grid');
  grid.innerHTML = WC2026.matches.map((m, i) => {
    const isFinal = m.stage === 'THE FINAL';
    return `<div class="match-card fade-in${isFinal ? '" style="border-color:rgba(255,215,0,0.35)' : ''}" style="animation-delay:${i*0.05}s">
      <div class="m-stage"><span>${m.stage}</span><span class="m-date">${m.date}</span></div>
      <div class="m-teams">
        <div class="m-team">
          <img src="${FLAG(m.ha)}" alt="${m.home}" onerror="this.style.display='none'">
          <span class="m-team-name">${m.home}</span>
        </div>
        <div style="text-align:center;flex-shrink:0">
          <div class="m-score">${m.sH}<span class="m-sep"> : </span>${m.sA}</div>
          <div style="font-size:0.58rem;color:var(--txt2);letter-spacing:1px">预测比分</div>
        </div>
        <div class="m-team right">
          <img src="${FLAG(m.ba)}" alt="${m.away}" onerror="this.style.display='none'">
          <span class="m-team-name">${m.away}</span>
        </div>
      </div>
      <div class="m-xg">
        <span>期望进球 xG 主队：<span>${m.xH}</span></span>
        <span>期望进球 xG 客队：<span>${m.xA}</span></span>
      </div>
      <div class="m-prob">
        <div class="prob-h" style="width:${m.hw}%"></div>
        <div class="prob-d" style="width:${m.d}%"></div>
        <div class="prob-a" style="width:${m.aw}%"></div>
      </div>
      <div class="m-prob-labels">
        <span>${m.home} Win ${m.hw}%</span>
        <span>Draw ${m.d}%</span>
        <span>${m.away} Win ${m.aw}%</span>
      </div>
      <div class="m-basis">${m.basis}</div>
    </div>`;
  }).join('');
}

// ── Final Prediction Card ──────────────────────────────────
function renderFinal() {
  const f = WC2026.bracket.final;
  document.getElementById('final-card').innerHTML = `
    <span class="final-lbl">FIFA World Cup Final · Jul 19, 2026 · MetLife Stadium, NJ</span>
    <div class="final-teams">
      <div class="final-team">
        <img src="${FLAG('fr')}" alt="${f.home}">
        <div class="final-team-name">${f.home}</div>
        <div style="font-size:0.72rem;color:var(--txt2)">2018 Champions</div>
      </div>
      <div>
        <div class="final-score">${f.sH}<span class="final-score-sep">—</span>${f.sA}</div>
        <div style="font-size:0.65rem;color:var(--txt2);margin-top:0.25rem">加时赛 · 预测结果</div>
      </div>
      <div class="final-team">
        <img src="${FLAG('ar')}" alt="${f.away}">
        <div class="final-team-name">${f.away}</div>
        <div style="font-size:0.72rem;color:var(--txt2)">2022 Champions</div>
      </div>
    </div>
    <div class="final-note">${f.note}</div>
    <div class="final-mvp">Tournament MVP: ${f.mvp} · Top Scorer: ${f.topScorer} (${f.goals} goals)</div>`;
}

// ── Methodology ────────────────────────────────────────────
function renderMethodology() {
  const grid = document.getElementById('method-grid');
  const widths = { '25%': '100%', '20%': '80%', '15%': '60%', '10%': '40%', '5%': '20%' };
  grid.innerHTML = WC2026.methodology.map((m, i) => `
    <div class="method-card fade-in" style="animation-delay:${i*0.08}s">
      <div class="method-hdr"><span class="method-name">${m.name}</span><span class="method-weight">${m.weight}</span></div>
      <div class="method-bar" style="width:${widths[m.weight]||'50%'}"></div>
      <div class="method-desc">${m.desc}</div>
    </div>`).join('');
}

// ── Scroll Animation ───────────────────────────────────────
function initScrollFade() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  renderChampBars();
  renderChampChart();
  renderGroups();
  renderBracket();
  renderFinal();
  renderRadar();
  renderMatches();
  renderMethodology();
  setTimeout(initScrollFade, 100);
});
