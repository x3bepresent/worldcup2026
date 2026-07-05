/** Day 25 core players — m91–m92 · 16强续战 */
const STARS = {
  m91: {
    home: {
      star: { name: 'Vinícius Júnior', pos: 'LW', club: 'Real Madrid', rating: 9.0, desc: 'C组冠军 · 左路爆点' },
      stars: [
        { name: 'Vinícius Júnior', pos: 'LW', club: 'Real Madrid', rating: 9.0, desc: '一对一 · 破局核心' },
        { name: 'Raphinha', pos: 'RW', club: 'Barcelona', rating: 8.4, desc: '边路突破 · 宽度' },
        { name: 'Bruno Guimarães', pos: 'CDM', club: 'Newcastle', rating: 8.3, desc: '后腰屏障 · 出球' },
      ],
    },
    away: {
      star: { name: 'Erling Haaland', pos: 'ST', club: 'Man City', rating: 9.2, desc: '终结核心 · 2-1 淘汰科特迪瓦' },
      stars: [
        { name: 'Erling Haaland', pos: 'ST', club: 'Man City', rating: 9.2, desc: '禁区终结 · 反击威胁' },
        { name: 'Martin Ødegaard', pos: 'AM', club: 'Arsenal', rating: 8.5, desc: '组织轴 · 定位球' },
        { name: 'Felix Nmecha', pos: 'CM', club: 'Dortmund', rating: 7.8, desc: '中场跑动 · 屏障' },
      ],
    },
  },
  m92: {
    home: {
      star: { name: 'Raúl Jiménez', pos: 'ST', club: 'Fulham', rating: 8.1, desc: 'Azteca 支点 · A组冠军' },
      stars: [
        { name: 'Raúl Jiménez', pos: 'ST', club: 'Fulham', rating: 8.1, desc: '支点 · 定位球' },
        { name: 'Hirving Lozano', pos: 'LW', club: 'PSV', rating: 7.9, desc: '边路速度 · 一对一' },
        { name: 'Edson Álvarez', pos: 'CDM', club: 'West Ham', rating: 8.0, desc: '后腰屏障 · 犯规打断' },
      ],
    },
    away: {
      star: { name: 'Harry Kane', pos: 'ST', club: 'Bayern', rating: 9.0, desc: '锋线核心 · L组全胜' },
      stars: [
        { name: 'Harry Kane', pos: 'ST', club: 'Bayern', rating: 9.0, desc: '终结 · 组织 · 定位球' },
        { name: 'Bukayo Saka', pos: 'RW', club: 'Arsenal', rating: 8.6, desc: '右路爆点 · 一对一' },
        { name: 'Phil Foden', pos: 'AM', club: 'Man City', rating: 8.5, desc: '肋部破局 · 创造力' },
      ],
    },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars, STARS };
