/** Day 15 referee placeholders — pending FIFA confirmation */
const { pendingReferee } = require('./pending-templates');

const REFEREES = {
  m55: pendingReferee('FIFA Match 55 · 库拉索 vs 科特迪瓦 · 裁判名单赛前公布。'),
  m56: pendingReferee('FIFA Match 56 · 厄瓜多尔 vs 德国 · 裁判名单赛前公布。'),
  m57: pendingReferee('FIFA Match 57 · 日本 vs 瑞典 · 裁判名单赛前公布。'),
  m58: pendingReferee('FIFA Match 58 · 突尼斯 vs 荷兰 · 裁判名单赛前公布。'),
  m59: pendingReferee('FIFA Match 59 · 土耳其 vs 美国 · 裁判名单赛前公布。'),
  m60: pendingReferee('FIFA Match 60 · 巴拉圭 vs 澳大利亚 · 裁判名单赛前公布。'),
};

function getReferee(matchId) {
  return REFEREES[matchId] || pendingReferee('裁判待确认');
}

module.exports = { getReferee, REFEREES };
