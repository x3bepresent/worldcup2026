/** Day 19 star players — m74–m76 */
const STARS = {
  m76: {
    home: { star: { name: 'Vinícius Júnior', pos: 'LW', club: 'Real Madrid', rating: 9.0, desc: 'C 组头名' }, stars: [{ name: 'Vinícius Júnior', pos: 'LW', club: 'Real Madrid', rating: 9.0, desc: '爆点' }, { name: 'Raphinha', pos: 'RW', club: 'Barcelona', rating: 8.6, desc: '宽度' }] },
    away: { star: { name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', rating: 8.2, desc: 'F 组次席' }, stars: [{ name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', rating: 8.2, desc: '反击' }, { name: 'Kaoru Mitoma', pos: 'LW', club: 'Brighton', rating: 8.0, desc: '速度' }] },
  },
  m74: {
    home: { star: { name: 'Jamal Musiala', pos: 'AM', club: 'Bayern', rating: 8.8, desc: 'E 组头名' }, stars: [{ name: 'Jamal Musiala', pos: 'AM', club: 'Bayern', rating: 8.8, desc: '肋部' }, { name: 'Florian Wirtz', pos: 'AM', club: 'Leverkusen', rating: 8.7, desc: '组织' }] },
    away: { star: { name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', rating: 7.8, desc: 'D 组第3出线' }, stars: [{ name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', rating: 7.8, desc: '反击' }] },
  },
  m75: {
    home: { star: { name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', rating: 8.5, desc: 'F 组头名' }, stars: [{ name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', rating: 8.5, desc: '宽度' }, { name: 'Memphis Depay', pos: 'ST', club: 'Corinthians', rating: 8.2, desc: '锋线' }] },
    away: { star: { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', rating: 8.6, desc: 'C 组次席' }, stars: [{ name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', rating: 8.6, desc: '右路' }, { name: 'Sofiane Boufal', pos: 'LW', club: 'Angers', rating: 8.0, desc: '创造力' }] },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars };
