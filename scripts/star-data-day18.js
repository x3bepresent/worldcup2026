/** Day 18 star players — m73 */
const STARS = {
  m73: {
    home: {
      star: { name: 'Teboho Mokoena', pos: 'CDM', club: 'Sundowns', rating: 7.8, desc: 'A 组次席 · 屏障' },
      stars: [
        { name: 'Teboho Mokoena', pos: 'CDM', club: 'Sundowns', rating: 7.8, desc: '屏障' },
        { name: 'Percy Tau', pos: 'RW', club: 'Al Ahly', rating: 7.6, desc: '反击' },
      ],
    },
    away: {
      star: { name: 'Alphonso Davies', pos: 'LB', club: 'Bayern', rating: 8.6, desc: 'B 组次席 · 宽度' },
      stars: [
        { name: 'Alphonso Davies', pos: 'LB', club: 'Bayern', rating: 8.6, desc: '左路爆点' },
        { name: 'Jonathan David', pos: 'ST', club: 'Lille', rating: 8.2, desc: '锋线' },
      ],
    },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars };
