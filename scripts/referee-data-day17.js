/** Day 17 referee placeholders */
const { pendingReferee } = require('./pending-templates');

const REFEREES = {
  m67: pendingReferee('FIFA Match 67 · 巴拿马 vs 英格兰 · 裁判名单赛前公布。'),
  m68: pendingReferee('FIFA Match 68 · 克罗地亚 vs 加纳 · 裁判名单赛前公布。'),
  m69: pendingReferee('FIFA Match 69 · 阿尔及利亚 vs 奥地利 · 裁判名单赛前公布。'),
  m70: pendingReferee('FIFA Match 70 · 约旦 vs 阿根廷 · 裁判名单赛前公布。'),
  m71: pendingReferee('FIFA Match 71 · 哥伦比亚 vs 葡萄牙 · 裁判名单赛前公布。'),
  m72: pendingReferee('FIFA Match 72 · 刚果(金) vs 乌兹别克 · 裁判名单赛前公布。'),
};

function getReferee(matchId) {
  return REFEREES[matchId] || pendingReferee('裁判待确认');
}

module.exports = { getReferee, REFEREES };
