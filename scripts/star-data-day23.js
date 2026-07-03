/** Day 23 core players — m86–m88 · 32强收官 */
const STARS = {
  m86: {
    home: {
      star: { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', rating: 9.2, desc: 'J 组头名 9 分' },
      stars: [
        { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', rating: 9.2, desc: '深盘轴心 · 迈阿密主场' },
        { name: 'Julián Álvarez', pos: 'ST', club: 'Atlético', rating: 8.8, desc: '终结 · 跑位' },
        { name: 'Enzo Fernández', pos: 'CM', club: 'Chelsea', rating: 8.6, desc: '组织发起点' },
      ],
    },
    away: {
      star: { name: 'Ryan Mendes', pos: 'LW', club: 'Al Nasr', rating: 7.2, desc: 'H 组亚军 · 反击' },
      stars: [
        { name: 'Ryan Mendes', pos: 'LW', club: 'Al Nasr', rating: 7.2, desc: '速度 · 定位球' },
        { name: 'Jóvio', pos: 'CB', club: 'Famalicão', rating: 7.0, desc: '防线领袖' },
        { name: 'Platini', pos: 'ST', club: 'Santa Clara', rating: 7.1, desc: '支点 · 铁桶轴' },
      ],
    },
  },
  m87: {
    home: {
      star: { name: 'James Rodríguez', pos: 'AM', club: 'León', rating: 8.5, desc: 'K 组头名' },
      stars: [
        { name: 'James Rodríguez', pos: 'AM', club: 'León', rating: 8.5, desc: '定位球 · 最后一传' },
        { name: 'Luis Díaz', pos: 'LW', club: 'Liverpool', rating: 8.6, desc: '宽度 · 一对一' },
        { name: 'Wilmar Barrios', pos: 'CM', club: 'Zenit', rating: 8.0, desc: '屏障 · 绞杀 Kudus' },
      ],
    },
    away: {
      star: { name: 'Mohammed Kudus', pos: 'AM', club: 'West Ham', rating: 8.0, desc: 'DEIJL 池第3 · 反击轴' },
      stars: [
        { name: 'Mohammed Kudus', pos: 'AM', club: 'West Ham', rating: 8.0, desc: '肋部破局 · 速度' },
        { name: 'Thomas Partey', pos: 'CDM', club: 'Arsenal', rating: 8.1, desc: '屏障 · 经验' },
        { name: 'Jordan Ayew', pos: 'ST', club: 'Leicester', rating: 7.6, desc: '支点 · 定位球' },
      ],
    },
  },
  m88: {
    home: {
      star: { name: 'Mathew Ryan', pos: 'GK', club: 'Roma', rating: 7.8, desc: 'D 组亚军' },
      stars: [
        { name: 'Mitchell Duke', pos: 'ST', club: 'Machida', rating: 7.5, desc: '支点 · 定位球' },
        { name: 'Craig Goodwin', pos: 'LW', club: 'Al-Wehda', rating: 7.6, desc: '宽度 · 传中' },
        { name: 'Mathew Ryan', pos: 'GK', club: 'Roma', rating: 7.8, desc: '一门 · 经验' },
      ],
    },
    away: {
      star: { name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', rating: 8.8, desc: 'G 组亚军 · 反击第一选择' },
      stars: [
        { name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', rating: 8.8, desc: '一对一 · 均衡盘轴心' },
        { name: 'Omar Marmoush', pos: 'ST', club: 'Frankfurt', rating: 8.0, desc: '速度 · 转换' },
        { name: 'Mohamed Elneny', pos: 'CM', club: 'Arsenal', rating: 7.7, desc: '屏障 · 绞杀' },
      ],
    },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars, STARS };
