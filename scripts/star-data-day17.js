/** Day 17 star players */
const STARS = {
  m67: {
    home: { star: { name: 'José Fajardo', pos: 'ST', club: 'Plaza Amador', rating: 7.2, desc: '0 分须奇迹' }, stars: [{ name: 'José Fajardo', pos: 'ST', club: 'Plaza Amador', rating: 7.2, desc: '锋线' }] },
    away: { star: { name: 'Jude Bellingham', pos: 'CM', club: 'Real Madrid', rating: 9.0, desc: '4 分争头名' }, stars: [{ name: 'Jude Bellingham', pos: 'CM', club: 'Real Madrid', rating: 9.0, desc: '核心' }, { name: 'Harry Kane', pos: 'ST', club: 'Bayern', rating: 8.8, desc: '锋线' }, { name: 'Bukayo Saka', pos: 'RW', club: 'Arsenal', rating: 8.6, desc: '宽度' }] },
  },
  m68: {
    home: { star: { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', rating: 8.8, desc: '3 分须胜' }, stars: [{ name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', rating: 8.8, desc: '组织' }, { name: 'Joško Gvardiol', pos: 'CB', club: 'Man City', rating: 8.4, desc: '防线' }] },
    away: { star: { name: 'Mohammed Kudus', pos: 'RW', club: 'West Ham', rating: 8.3, desc: '4 分领跑' }, stars: [{ name: 'Mohammed Kudus', pos: 'RW', club: 'West Ham', rating: 8.3, desc: '核心' }, { name: 'Thomas Partey', pos: 'CDM', club: 'Arsenal', rating: 8.0, desc: '屏障' }] },
  },
  m69: {
    home: { star: { name: 'Riyad Mahrez', pos: 'RW', club: 'Al-Ahli', rating: 8.2, desc: '3 分须胜' }, stars: [{ name: 'Riyad Mahrez', pos: 'RW', club: 'Al-Ahli', rating: 8.2, desc: '肋部' }, { name: 'Ismaël Bennacer', pos: 'CM', club: 'Milan', rating: 7.9, desc: '组织' }] },
    away: { star: { name: 'David Alaba', pos: 'CB', club: 'Real Madrid', rating: 8.5, desc: '3 分同分' }, stars: [{ name: 'David Alaba', pos: 'CB', club: 'Real Madrid', rating: 8.5, desc: '防线' }, { name: 'Marko Arnautović', pos: 'ST', club: 'Inter', rating: 8.0, desc: '锋线' }] },
  },
  m70: {
    home: { star: { name: 'Yazan Al-Naimat', pos: 'ST', club: 'Al-Gharafa', rating: 7.4, desc: '0 分出局' }, stars: [{ name: 'Yazan Al-Naimat', pos: 'ST', club: 'Al-Gharafa', rating: 7.4, desc: '锋线' }] },
    away: { star: { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', rating: 9.3, desc: '6 分已锁' }, stars: [{ name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', rating: 9.3, desc: '核心' }, { name: 'Lautaro Martínez', pos: 'ST', club: 'Inter', rating: 8.8, desc: '锋线' }] },
  },
  m71: {
    home: { star: { name: 'Luis Díaz', pos: 'LW', club: 'Liverpool', rating: 8.6, desc: '6 分争头名' }, stars: [{ name: 'Luis Díaz', pos: 'LW', club: 'Liverpool', rating: 8.6, desc: '速度' }, { name: 'James Rodríguez', pos: 'AM', club: 'León', rating: 8.2, desc: '组织' }] },
    away: { star: { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al-Nassr', rating: 8.8, desc: '4 分争头名' }, stars: [{ name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al-Nassr', rating: 8.8, desc: '锋线' }, { name: 'Bruno Fernandes', pos: 'AM', club: 'Man Utd', rating: 8.5, desc: '组织' }] },
  },
  m72: {
    home: { star: { name: 'Yoane Wissa', pos: 'ST', club: 'Brentford', rating: 8.0, desc: '1 分须胜' }, stars: [{ name: 'Yoane Wissa', pos: 'ST', club: 'Brentford', rating: 8.0, desc: '锋线' }, { name: 'Chancel Mbemba', pos: 'CB', club: 'Marseille', rating: 7.8, desc: '防线' }] },
    away: { star: { name: 'Eldor Shomurodov', pos: 'ST', club: 'Cagliari', rating: 7.5, desc: '0 分出局' }, stars: [{ name: 'Eldor Shomurodov', pos: 'ST', club: 'Cagliari', rating: 7.5, desc: '锋线' }] },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars };
