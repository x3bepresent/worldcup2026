/** Day 20 referee — m77–m79 · 待官方确认 */
const { pendingReferee } = require('./pending-templates');

const REFS = {
  m78: pendingReferee('FIFA M78 · 科特迪瓦 vs 挪威 · 待官方确认'),
  m77: pendingReferee('FIFA M77 · 法国 vs 瑞典 · 待官方确认'),
  m79: pendingReferee('FIFA M79 · 墨西哥 vs 厄瓜多尔 · 待官方确认'),
};

function getReferee(matchId) {
  return REFS[matchId] || pendingReferee('待官方确认');
}

module.exports = { getReferee, REFS };
