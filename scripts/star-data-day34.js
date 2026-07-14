/** Day 34 core players — m101 · 半决赛 */
const STARS = {
  m101: {
    home: {
      star: { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', rating: 9.5, desc: '金靴领跑 · 半决赛核心' },
      stars: [
        { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', rating: 9.5, desc: '速度 · 终结 · 破局' },
        { name: 'Antoine Griezmann', pos: 'AM', club: 'Atlético', rating: 8.6, desc: '前场组织轴' },
        { name: 'Aurélien Tchouaméni', pos: 'CDM', club: 'Real Madrid', rating: 8.4, desc: '后腰屏障 · 出球' },
      ],
    },
    away: {
      star: { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', rating: 9.2, desc: '右路爆点 · 淘汰葡萄牙' },
      stars: [
        { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', rating: 9.2, desc: '一对一 · 倒三角 · 破局核心' },
        { name: 'Pedri', pos: 'CM', club: 'Barcelona', rating: 8.7, desc: '中场组织 · 节奏控制' },
        { name: 'Rodri', pos: 'CDM', club: 'Man City', rating: 9.0, desc: '后腰核心 · 出球+防守' },
      ],
    },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars, STARS };
