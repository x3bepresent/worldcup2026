/** Day 16 star players */
const STARS = {
  m61: {
    home: { star: { name: 'Erling Haaland', pos: 'ST', club: 'Man City', rating: 9.2, desc: '6 分榜首战' }, stars: [{ name: 'Erling Haaland', pos: 'ST', club: 'Man City', rating: 9.2, desc: '锋线核心' }, { name: 'Martin Ødegaard', pos: 'CM', club: 'Arsenal', rating: 8.5, desc: '组织核心' }, { name: 'Alexander Sørloth', pos: 'ST', club: 'Atlético', rating: 8.0, desc: '双锋体系' }] },
    away: { star: { name: 'Kylian Mbappé', pos: 'LW', club: 'Real Madrid', rating: 9.4, desc: '6 分榜首战' }, stars: [{ name: 'Kylian Mbappé', pos: 'LW', club: 'Real Madrid', rating: 9.4, desc: '锋线核心' }, { name: 'Antoine Griezmann', pos: 'AM', club: 'Atlético', rating: 8.6, desc: '肋部组织' }, { name: 'N\'Golo Kanté', pos: 'CDM', club: 'Al-Ittihad', rating: 8.2, desc: '屏障' }] },
  },
  m62: {
    home: { star: { name: 'Sadio Mané', pos: 'LW', club: 'Al-Nassr', rating: 8.5, desc: '0 分须胜' }, stars: [{ name: 'Sadio Mané', pos: 'LW', club: 'Al-Nassr', rating: 8.5, desc: '锋线核心' }, { name: 'Kalidou Koulibaly', pos: 'CB', club: 'Al-Hilal', rating: 8.0, desc: '防线领袖' }, { name: 'Nicolas Jackson', pos: 'ST', club: 'Chelsea', rating: 7.9, desc: '锋线支点' }] },
    away: { star: { name: 'Aymen Hussein', pos: 'ST', club: 'Al-Shorta', rating: 7.8, desc: '0 分出局' }, stars: [{ name: 'Aymen Hussein', pos: 'ST', club: 'Al-Shorta', rating: 7.8, desc: '锋线' }, { name: 'Mohannad Ali', pos: 'LW', club: 'Al-Quwa', rating: 7.5, desc: '速度型' }] },
  },
  m63: {
    home: { star: { name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', rating: 9.0, desc: '4 分领跑' }, stars: [{ name: 'Mohamed Salah', pos: 'RW', club: 'Liverpool', rating: 9.0, desc: '核心' }, { name: 'Omar Marmoush', pos: 'AM', club: 'Man City', rating: 8.2, desc: '肋部' }, { name: 'Mohamed Elneny', pos: 'CDM', club: 'Arsenal', rating: 7.8, desc: '屏障' }] },
    away: { star: { name: 'Mehdi Taremi', pos: 'ST', club: 'Inter Milan', rating: 8.3, desc: '2 分须胜' }, stars: [{ name: 'Mehdi Taremi', pos: 'ST', club: 'Inter Milan', rating: 8.3, desc: '锋线' }, { name: 'Alireza Jahanbakhsh', pos: 'RW', club: 'Feyenoord', rating: 7.9, desc: '宽度' }, { name: 'Sardar Azmoun', pos: 'ST', club: 'Roma', rating: 7.8, desc: '双锋' }] },
  },
  m64: {
    home: { star: { name: 'Chris Wood', pos: 'ST', club: 'Nottm Forest', rating: 7.5, desc: '1 分须奇迹' }, stars: [{ name: 'Chris Wood', pos: 'ST', club: 'Nottm Forest', rating: 7.5, desc: '锋线' }, { name: 'Marko Stamenić', pos: 'CM', club: 'Nottingham', rating: 7.2, desc: '中场' }] },
    away: { star: { name: 'Jérémy Doku', pos: 'LW', club: 'Man City', rating: 8.6, desc: '2 分须胜' }, stars: [{ name: 'Jérémy Doku', pos: 'LW', club: 'Man City', rating: 8.6, desc: '肋部' }, { name: 'Loïs Openda', pos: 'ST', club: 'Leipzig', rating: 8.2, desc: '锋线' }, { name: 'Youri Tielemans', pos: 'CM', club: 'Aston Villa', rating: 8.0, desc: '组织' }] },
  },
  m65: {
    home: { star: { name: 'Ryan Mendes', pos: 'LW', club: 'Lille', rating: 7.8, desc: '2 分争出线' }, stars: [{ name: 'Ryan Mendes', pos: 'LW', club: 'Lille', rating: 7.8, desc: '边路' }, { name: 'Bebé', pos: 'RW', club: 'Rayo', rating: 7.6, desc: '速度' }] },
    away: { star: { name: 'Salem Al-Dawsari', pos: 'LW', club: 'Al-Hilal', rating: 8.0, desc: '1 分须胜' }, stars: [{ name: 'Salem Al-Dawsari', pos: 'LW', club: 'Al-Hilal', rating: 8.0, desc: '核心' }, { name: 'Saud Abdulhamid', pos: 'RB', club: 'Roma', rating: 7.7, desc: '边路' }] },
  },
  m66: {
    home: { star: { name: 'Federico Valverde', pos: 'CM', club: 'Real Madrid', rating: 8.8, desc: '2 分须胜' }, stars: [{ name: 'Federico Valverde', pos: 'CM', club: 'Real Madrid', rating: 8.8, desc: 'B2B' }, { name: 'Darwin Núñez', pos: 'ST', club: 'Liverpool', rating: 8.3, desc: '锋线' }, { name: 'Facundo Pellistri', pos: 'RW', club: 'Man Utd', rating: 7.8, desc: '速度' }] },
    away: { star: { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', rating: 9.0, desc: '4 分领跑' }, stars: [{ name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', rating: 9.0, desc: '肋部' }, { name: 'Pedri', pos: 'CM', club: 'Barcelona', rating: 8.7, desc: '控球' }, { name: 'Rodri', pos: 'CDM', club: 'Man City', rating: 8.8, desc: '屏障' }] },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars };
