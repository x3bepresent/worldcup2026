/** Day 19 referee — m74–m76 */
const REFEREES = {
  m76: { name: 'Maurizio Mariani', nation: '意大利', nation_iso: 'it', note: 'FIFA M76 · 巴西 vs 日本 · 休斯顿', fifa_match_id: '400021516' },
  m74: { name: 'Jalal Jayed', nation: '摩洛哥', nation_iso: 'ma', note: 'FIFA M74 · 德国 vs 巴拉圭 · 波士顿', fifa_match_id: '400021513' },
  m75: { name: 'Wilton Sampaio', nation: '巴西', nation_iso: 'br', note: 'FIFA M75 · 荷兰 vs 摩洛哥 · 蒙特雷', fifa_match_id: '400021522' },
};

function getReferee(matchId) {
  return REFEREES[matchId] || { name: '待公布', nation: '—', note: 'FIFA 裁判名单赛前确认' };
}

module.exports = { getReferee, REFEREES };
