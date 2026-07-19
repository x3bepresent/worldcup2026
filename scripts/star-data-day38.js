/** Day 38 core players — m104 · 决赛 */
const STARS = {
  m104: {
    home: {
      star: { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', rating: 9.3, desc: '右路爆点 · 半决赛点杀法国' },
      stars: [
        { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', rating: 9.3, desc: '一对一 · 倒三角 · 破局核心' },
        { name: 'Rodri', pos: 'CDM', club: 'Man City', rating: 9.1, desc: '后腰核心 · 出球+防守' },
        { name: 'Pedri', pos: 'CM', club: 'Barcelona', rating: 8.8, desc: '中场组织 · 节奏控制' },
      ],
    },
    away: {
      star: { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', rating: 9.4, desc: '卫冕核心 · 半决赛助攻双响' },
      stars: [
        { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', rating: 9.4, desc: '组织 · 任意球 · 决赛经验' },
        { name: 'Lautaro Martínez', pos: 'ST', club: 'Inter', rating: 8.9, desc: '半决赛制胜球 · 终结' },
        { name: 'Enzo Fernández', pos: 'CM', club: 'Chelsea', rating: 8.6, desc: '中场串联 · 关键进球' },
      ],
    },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars, STARS };
