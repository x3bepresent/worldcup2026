/** Day 16 referee placeholders */
const { pendingReferee } = require('./pending-templates');

const REFEREES = {
  m61: pendingReferee('FIFA Match 61 · 挪威 vs 法国 · 裁判名单赛前公布。'),
  m62: pendingReferee('FIFA Match 62 · 塞内加尔 vs 伊拉克 · 裁判名单赛前公布。'),
  m63: pendingReferee('FIFA Match 63 · 埃及 vs 伊朗 · 裁判名单赛前公布。'),
  m64: pendingReferee('FIFA Match 64 · 新西兰 vs 比利时 · 裁判名单赛前公布。'),
  m65: pendingReferee('FIFA Match 65 · 佛得角 vs 沙特 · 裁判名单赛前公布。'),
  m66: pendingReferee('FIFA Match 66 · 乌拉圭 vs 西班牙 · 裁判名单赛前公布。'),
};

function getReferee(matchId) {
  return REFEREES[matchId] || pendingReferee('裁判待确认');
}

module.exports = { getReferee, REFEREES };
