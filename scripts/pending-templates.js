/**
 * 未获官方确认时的占位结构 — 禁止用虚假姓名/统计数据充数。
 * 手动更新 matches-data.js / results-data.js 时，确认后设 confirmed: true 并填入真实数据。
 */

const PENDING_LABEL = '等待官方确认';

function pendingReferee(note) {
  return {
    confirmed: false,
    pending: true,
    name: PENDING_LABEL,
    nation: '待公布',
    iso: null,
    bias_note:
      note ||
      '本场裁判尚未经 FIFA 官方确认。本站不使用占位裁判数据；确认后将更新执法统计并重新纳入推演。',
    tendencies: ['更新来源：FIFA 官方裁判名单 · 赛前新闻发布会'],
  };
}

function confirmedReferee(data) {
  return { confirmed: true, pending: false, ...data };
}

function pendingLineup(note) {
  return {
    confirmed: false,
    formation: null,
    home: PENDING_LABEL,
    away: PENDING_LABEL,
    note:
      note ||
      '官方首发名单尚未公布。以下为媒体预测时仅写入 predicted 字段，页面会标注「预测参考」。',
    predicted: null,
  };
}

function lineupFromPrediction({ formation, home, away, source }) {
  return {
    confirmed: false,
    formation: null,
    home: PENDING_LABEL,
    away: PENDING_LABEL,
    note: '官方首发尚未确认；下方为媒体预测，不计入已确认推演权重。',
    predicted: { formation, home, away, source: source || '媒体预测' },
  };
}

module.exports = {
  PENDING_LABEL,
  pendingReferee,
  confirmedReferee,
  pendingLineup,
  lineupFromPrediction,
};
