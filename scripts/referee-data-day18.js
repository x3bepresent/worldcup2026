/** Day 18 referee — m73 · FIFA Match 73 */
const REFEREES = {
  m73: {
    name: 'João Pinheiro',
    nation: '葡萄牙',
    nation_iso: 'pt',
    age: 44,
    wc_exp: '2022 世界杯 · 2026 32强 M73',
    style: '对身体对抗尺度明确 · 转换犯规抓得紧',
    note: 'FIFA 官方 · 32强揭幕战 M73 · 南非 vs 加拿大 · 洛杉矶 SoFi',
    fifa_match_id: '400021518',
    var: 'Juan Martinez (西班牙)',
  },
};

function getReferee(matchId) {
  return REFEREES[matchId] || { name: '待公布', nation: '—', note: 'FIFA 裁判名单赛前确认' };
}

module.exports = { getReferee, REFEREES };
