/**
 * 数据完整性约定 — 浏览器端与 matches-app.js 共用
 * 手动维护 js/matches-data.js / js/results-data.js 时请遵守：
 *   · 未官方确认 → confirmed: false，显示「等待官方确认」，勿填虚假统计
 *   · 已官方确认 → confirmed: true，填写 source / updated
 *   · 媒体预测阵容 → 仅放在 lineup.predicted，lineup.confirmed 保持 false
 */
const DATA_INTEGRITY = {
  PENDING_LABEL: '等待官方确认',

  isPending(obj) {
    if (!obj) return true;
    if (obj.pending === true) return true;
    if (obj.confirmed === false) return true;
    if (obj.name === this.PENDING_LABEL) return true;
    return false;
  },

  pendingReferee(note) {
    return {
      confirmed: false,
      pending: true,
      name: this.PENDING_LABEL,
      nation: '待公布',
      iso: null,
      bias_note:
        note ||
        '本场裁判尚未经 FIFA 官方确认。本站不使用占位裁判数据；确认后将更新执法统计并重新纳入推演。',
      tendencies: ['更新来源：FIFA 官方裁判名单 · 赛前新闻发布会'],
    };
  },

  /** 返回影响推演的待确认项标签 */
  matchPendingFactors(m) {
    const factors = [];
    if (this.isPending(m.referee)) factors.push('裁判');
    if (m.lineup && this.isPending(m.lineup)) factors.push('首发阵容');
    const inj = [...(m.home?.injuries || []), ...(m.away?.injuries || [])];
    if (inj.some(i => i.confirmed === false && (i.status === 'OUT' || i.status === 'DOUBT'))) {
      factors.push('部分伤病');
    }
    return factors;
  },
};
