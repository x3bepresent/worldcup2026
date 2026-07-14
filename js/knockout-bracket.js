/**
 * FIFA 2026 淘汰赛对阵树 · M73–M104
 * 供今日赛事页展示 32强晋级路径矩阵（浏览器）
 */
(function (root) {
  'use strict';

  /** @type {Record<number, { round: string, round_cn: string, desc: string, homeSlot: string, awaySlot: string, home?: string, away?: string }>} */
  const R32 = {
    73: { round: 'R32', round_cn: '32强', desc: 'A组亚军 vs B组亚军', homeSlot: 'A2', awaySlot: 'B2', home: 'South Africa', away: 'Canada', score: '0-1', status: 'FT', winner: 'Canada' },
    74: { round: 'R32', round_cn: '32强', desc: 'E组冠军 vs 最佳第3', homeSlot: 'E1', awaySlot: 'D3', home: 'Germany', away: 'Paraguay' },
    75: { round: 'R32', round_cn: '32强', desc: 'F组冠军 vs C组亚军', homeSlot: 'F1', awaySlot: 'C2', home: 'Netherlands', away: 'Morocco' },
    76: { round: 'R32', round_cn: '32强', desc: 'C组冠军 vs F组亚军', homeSlot: 'C1', awaySlot: 'F2', home: 'Brazil', away: 'Japan' },
    77: { round: 'R32', round_cn: '32强', desc: 'I组冠军 vs 最佳第3', homeSlot: 'I1', awaySlot: '3rd', home: 'France', away: 'Sweden' },
    78: { round: 'R32', round_cn: '32强', desc: 'E组亚军 vs I组亚军', homeSlot: 'E2', awaySlot: 'I2', home: "Côte d'Ivoire", away: 'Norway' },
    79: { round: 'R32', round_cn: '32强', desc: 'A组冠军 vs 最佳第3', homeSlot: 'A1', awaySlot: '3rd', home: 'Mexico', away: 'Ecuador' },
    80: { round: 'R32', round_cn: '32强', desc: 'L组冠军 vs 最佳第3', homeSlot: 'L1', awaySlot: '3rd', home: 'England', away: 'Congo DR', score: '2-1', status: 'FT', winner: 'England' },
    81: { round: 'R32', round_cn: '32强', desc: 'D组冠军 vs 最佳第3', homeSlot: 'D1', awaySlot: '3rd', home: 'USA', away: 'Bosnia & Herz.', score: '2-0', status: 'FT', winner: 'USA' },
    82: { round: 'R32', round_cn: '32强', desc: 'G组冠军 vs 最佳第3', homeSlot: 'G1', awaySlot: '3rd', home: 'Belgium', away: 'Senegal', score: '3-2', status: 'AET', winner: 'Belgium' },
    83: { round: 'R32', round_cn: '32强', desc: 'K组亚军 vs L组亚军', homeSlot: 'K2', awaySlot: 'L2', home: 'Portugal', away: 'Croatia', score: '2-1', status: 'FT', winner: 'Portugal' },
    84: { round: 'R32', round_cn: '32强', desc: 'H组冠军 vs J组亚军', homeSlot: 'H1', awaySlot: 'J2', home: 'Spain', away: 'Austria', score: '3-0', status: 'FT', winner: 'Spain' },
    85: { round: 'R32', round_cn: '32强', desc: 'B组冠军 vs 最佳第3', homeSlot: 'B1', awaySlot: '3rd', home: 'Switzerland', away: 'Algeria', score: '2-0', status: 'FT', winner: 'Switzerland' },
    86: { round: 'R32', round_cn: '32强', desc: 'J组冠军 vs H组亚军', homeSlot: 'J1', awaySlot: 'H2', home: 'Argentina', away: 'Cape Verde', score: '3-2', status: 'AET', winner: 'Argentina' },
    87: { round: 'R32', round_cn: '32强', desc: 'K组冠军 vs 最佳第3', homeSlot: 'K1', awaySlot: '3rd', home: 'Colombia', away: 'Ghana', score: '1-0', status: 'FT', winner: 'Colombia' },
    88: { round: 'R32', round_cn: '32强', desc: 'D组亚军 vs G组亚军', homeSlot: 'D2', awaySlot: 'G2', home: 'Australia', away: 'Egypt', score: '1-1', status: 'PEN', winner: 'Egypt' },
  };

  /** R16+ 完场赛果（FIFA 官方 · 手动同步） */
  const KO_RESULTS = {
    89: { home: 'Paraguay', away: 'France', score: '0-1', status: 'FT', winner: 'France' },
    90: { home: 'Canada', away: 'Morocco', score: '0-3', status: 'FT', winner: 'Morocco' },
    91: { home: 'Brazil', away: 'Norway', score: '1-2', status: 'FT', winner: 'Norway' },
    92: { home: 'Mexico', away: 'England', score: '2-3', status: 'FT', winner: 'England' },
    93: { home: 'Portugal', away: 'Spain', score: '0-1', status: 'FT', winner: 'Spain' },
    94: { home: 'USA', away: 'Belgium', score: '1-4', status: 'FT', winner: 'Belgium' },
    95: { home: 'Argentina', away: 'Egypt', score: '3-2', status: 'FT', winner: 'Argentina' },
    96: { home: 'Switzerland', away: 'Colombia', score: '0-0', status: 'PEN', winner: 'Switzerland' },
    97: { home: 'France', away: 'Morocco', score: '2-0', status: 'FT', winner: 'France' },
    98: { home: 'Spain', away: 'Belgium', score: '2-1', status: 'FT', winner: 'Spain' },
    99: { home: 'Norway', away: 'England', score: '1-2', status: 'AET', winner: 'England' },
    100: { home: 'Argentina', away: 'Switzerland', score: '3-1', status: 'AET', winner: 'Argentina' },
  };

  /** parent match: { no, homeFrom, awayFrom } — homeFrom/awayFrom = source match no */
  const LINKS = {
    89: { round: 'R16', round_cn: '16强', homeFrom: 74, awayFrom: 77 },
    90: { round: 'R16', round_cn: '16强', homeFrom: 73, awayFrom: 75 },
    91: { round: 'R16', round_cn: '16强', homeFrom: 76, awayFrom: 78 },
    92: { round: 'R16', round_cn: '16强', homeFrom: 79, awayFrom: 80 },
    93: { round: 'R16', round_cn: '16强', homeFrom: 83, awayFrom: 84 },
    94: { round: 'R16', round_cn: '16强', homeFrom: 81, awayFrom: 82 },
    95: { round: 'R16', round_cn: '16强', homeFrom: 86, awayFrom: 88 },
    96: { round: 'R16', round_cn: '16强', homeFrom: 85, awayFrom: 87 },
    97: { round: 'QF', round_cn: '8强', homeFrom: 89, awayFrom: 90 },
    98: { round: 'QF', round_cn: '8强', homeFrom: 93, awayFrom: 94 },
    99: { round: 'QF', round_cn: '8强', homeFrom: 91, awayFrom: 92 },
    100: { round: 'QF', round_cn: '8强', homeFrom: 95, awayFrom: 96 },
    101: { round: 'SF', round_cn: '4强', homeFrom: 97, awayFrom: 98 },
    102: { round: 'SF', round_cn: '4强', homeFrom: 99, awayFrom: 100 },
    103: { round: '3P', round_cn: '季军赛', homeFrom: 101, awayFrom: 102, thirdPlace: true },
    104: { round: 'FINAL', round_cn: '决赛', homeFrom: 101, awayFrom: 102 },
  };

  const CHILD_OF = {};
  Object.entries(LINKS).forEach(([no, l]) => {
    const n = Number(no);
    if (l.homeFrom) CHILD_OF[l.homeFrom] = { parent: n, side: 'home' };
    if (l.awayFrom) CHILD_OF[l.awayFrom] = { parent: n, side: 'away' };
  });

  function slotLabel(slot) {
    if (!slot || slot === '3rd') return '最佳第3';
    const g = slot.charAt(0);
    const r = slot.charAt(1);
    const rank = { 1: '冠军', 2: '亚军', 3: '第3' }[r] || slot;
    return g + '组' + rank;
  }

  function ingestMatch(no, home, away, scoreHome, scoreAway, status) {
    if (!no || !home || !away) return;
    const base = R32[no];
    if (!base) return;
    base.home = home;
    base.away = away;
    if (scoreHome != null && scoreAway != null && (status === 'FT' || status === 'AET' || status === 'PEN')) {
      base.score = `${scoreHome}-${scoreAway}`;
      base.status = status;
      if (scoreHome > scoreAway) base.winner = home;
      else if (scoreAway > scoreHome) base.winner = away;
    }
  }

  function refreshFromPage() {
    if (typeof MATCH_DATA !== 'undefined' && MATCH_DATA.todayMatches) {
      MATCH_DATA.todayMatches.forEach((m) => {
        const no = m.fifa_match_number;
        if (!no) return;
        ingestMatch(no, m.home?.name, m.away?.name, m.home_score, m.away_score, m.status);
      });
    }
    if (typeof LIVE_DATA !== 'undefined' && LIVE_DATA.fixtures) {
      LIVE_DATA.fixtures.forEach((f) => {
        const no = f.fifa_match_number;
        if (!no) return;
        ingestMatch(no, f.home, f.away, f.home_score, f.away_score, f.status);
      });
    }
    if (typeof LIVE_DATA !== 'undefined' && LIVE_DATA.yesterdayResults) {
      LIVE_DATA.yesterdayResults.forEach((y) => {
        const id = String(y.id || '').replace(/^m/i, '');
        const no = Number(id);
        const base = R32[no];
        if (!base || !y.score) return;
        const parts = String(y.score).split('-').map(Number);
        if (parts.length === 2 && base.home && base.away) {
          ingestMatch(no, base.home, base.away, parts[0], parts[1], 'FT');
        }
      });
    }
    if (typeof SCHEDULE_SCORES !== 'undefined' && SCHEDULE_SCORES.byFifaNo) {
      Object.entries(SCHEDULE_SCORES.byFifaNo).forEach(([noStr, row]) => {
        const no = Number(noStr);
        const base = R32[no];
        if (!base || !base.home || !base.away) return;
        if (row.home != null && row.away != null) {
          ingestMatch(no, base.home, base.away, row.home, row.away, row.status || 'FT');
        }
      });
    }
    if (typeof RESULTS_DATA !== 'undefined' && RESULTS_DATA.finishedMatches) {
      RESULTS_DATA.finishedMatches.forEach((m) => {
        const no = m.fifa_match_number;
        if (!no || !R32[no]) return;
        const hs = m.home_score ?? m.actual?.home_score;
        const as = m.away_score ?? m.actual?.away_score;
        ingestMatch(no, m.home?.name, m.away?.name, hs, as, m.status || 'FT');
      });
    }
  }

  function resolveLeaf(no) {
    const b = R32[no];
    if (!b) return { no, label: `M${no}`, home: '—', away: '—' };
    const home = b.home || slotLabel(b.homeSlot);
    const away = b.away || slotLabel(b.awaySlot);
    let label = `M${no} · ${home} vs ${away}`;
    if (b.score) label += ` (${b.score})`;
    return {
      no,
      round: b.round,
      round_cn: b.round_cn,
      home,
      away,
      winner: b.winner || null,
      score: b.score || null,
      status: b.status || null,
      label,
      desc: b.desc,
    };
  }

  function formatSiblingOpponent(siblingNo) {
    const leaf = R32[siblingNo];
    if (leaf) {
      if (leaf.winner) return leaf.winner;
      const h = leaf.home || slotLabel(leaf.homeSlot);
      const a = leaf.away || slotLabel(leaf.awaySlot);
      return `M${siblingNo} 胜者（${h} vs ${a}）`;
    }
    const link = LINKS[siblingNo];
    if (link) {
      const left = R32[link.homeFrom];
      const right = R32[link.awayFrom];
      if (left?.winner && right?.winner) {
        return `M${siblingNo} 胜者（${left.winner} vs ${right.winner}）`;
      }
      if (left && right) {
        const lh = left.winner || left.home || slotLabel(left.homeSlot);
        const rh = right.winner || right.home || slotLabel(right.homeSlot);
        return `M${siblingNo} 胜者（${lh} / ${rh} 场胜者）`;
      }
      return `M${siblingNo} 胜者`;
    }
    return `M${siblingNo} 胜者`;
  }

  function resolveNode(no, cache) {
    if (cache[no]) return cache[no];
    if (R32[no]) {
      const leaf = resolveLeaf(no);
      cache[no] = leaf;
      return leaf;
    }
    const link = LINKS[no];
    if (!link) {
      const stub = { no, round_cn: '—', label: `M${no}`, home: '待定', away: '待定' };
      cache[no] = stub;
      return stub;
    }
    const homeNode = resolveNode(link.homeFrom, cache);
    const awayNode = resolveNode(link.awayFrom, cache);
    const homeName = homeNode.winner || `${homeNode.home} / ${homeNode.away} 胜者`;
    const awayName = awayNode.winner || `${awayNode.home} / ${awayNode.away} 胜者`;
    const node = {
      no,
      round: link.round,
      round_cn: link.round_cn,
      home: homeName,
      away: awayName,
      homeFrom: link.homeFrom,
      awayFrom: link.awayFrom,
      label: `M${no} · ${homeName} vs ${awayName}`,
      thirdPlace: !!link.thirdPlace,
    };
    const ko = KO_RESULTS[no];
    if (ko) {
      node.home = ko.home;
      node.away = ko.away;
      node.score = ko.score;
      node.status = ko.status;
      node.winner = ko.winner;
      node.label = `M${no} · ${ko.home} vs ${ko.away} (${ko.score})`;
    }
    cache[no] = node;
    return node;
  }

  function findParentChain(fromNo) {
    const chain = [];
    let cur = fromNo;
    while (CHILD_OF[cur]) {
      const { parent } = CHILD_OF[cur];
      chain.push(parent);
      cur = parent;
    }
    return chain;
  }

  function buildWinnerPath(match) {
    refreshFromPage();
    const fromNo = match.fifa_match_number;
    if (!fromNo) return null;

    const cache = {};
    const parents = findParentChain(fromNo);

    return {
      from_no: fromNo,
      home_name: match.home?.name,
      away_name: match.away?.name,
      home_path: buildSidePath(match.home?.name, fromNo, parents, cache, 'home'),
      away_path: buildSidePath(match.away?.name, fromNo, parents, cache, 'away'),
      parents,
      r32_grid: buildR32Grid(fromNo),
      branch: buildBranchView(fromNo, cache),
    };
  }

  function buildSidePath(teamName, fromNo, parents, cache, side) {
    if (!teamName) return [];
    const path = [];
    const cur = resolveLeaf(fromNo);
    const opp = side === 'home' ? (cur.away) : (cur.home);
    path.push({
      round_cn: '32强',
      match_no: fromNo,
      tag: '本场',
      text: `击败 ${opp}`,
      active: true,
    });

    let prevNo = fromNo;
    for (const parentNo of parents) {
      const link = LINKS[parentNo];
      const slot = CHILD_OF[prevNo]?.side;
      const siblingNo = slot === 'home' ? link.awayFrom : link.homeFrom;
      const parentNode = resolveNode(parentNo, cache);
      const oppLabel = formatSiblingOpponent(siblingNo);

      path.push({
        round_cn: parentNode.round_cn,
        match_no: parentNo,
        tag: `M${parentNo}`,
        text: `对阵 ${oppLabel}`,
        active: false,
      });
      prevNo = parentNo;
    }

    if (path[path.length - 1]?.match_no !== 104) {
      path.push({
        round_cn: '决赛',
        match_no: 104,
        tag: 'M104',
        text: '对阵另一半区决赛胜者',
        active: false,
      });
    }
    return path;
  }

  function buildR32Grid(highlightNo) {
    refreshFromPage();
    const order = [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88];
    return order.map((no) => {
      const leaf = resolveLeaf(no);
      return {
        no,
        ...leaf,
        highlight: no === highlightNo,
        done: !!leaf.winner,
      };
    });
  }

  function buildBranchView(fromNo, cache) {
    const parents = findParentChain(fromNo);
    const nodes = [resolveLeaf(fromNo)];
    parents.forEach((p) => nodes.push(resolveNode(p, cache)));
    return nodes;
  }

  function isKnockoutMatch(match) {
    return match?.group === 'KO' || match?.round === 'R32' || match?.round === 'R16'
      || (typeof MATCH_DATA !== 'undefined' && MATCH_DATA.phase === 'knockout');
  }

  root.KnockoutBracket = {
    R32,
    LINKS,
    refreshFromPage,
    resolveLeaf,
    resolveNode,
    buildWinnerPath,
    buildR32Grid,
    isKnockoutMatch,
    slotLabel,
  };
})(typeof window !== 'undefined' ? window : global);
