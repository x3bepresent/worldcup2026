/** Day 15 stars — m55–m60 */
const STARS = {
  m55: {
    home: { stars: [{ name: 'Leandro Bacuna', pos: 'CM', club: 'Cardiff', stats: '1 分垫底', rating: 6.8, desc: '经验中场 · 铁桶轴心' }], star: { name: 'Leandro Bacuna', pos: 'CM', club: 'Cardiff', stats: '1 分垫底', rating: 6.8, desc: '须奇迹' } },
    away: { stars: [{ name: 'Nicolas Pépé', pos: 'RW', club: 'Villarreal', stats: '3 分须胜', rating: 8.0, desc: '肋部破局' }, { name: 'Sébastien Haller', pos: 'ST', club: 'Borussia Dortmund', stats: '支点', rating: 7.8, desc: '防空破密集' }, { name: 'Franck Kessié', pos: 'CM', club: 'Al-Ain', stats: '屏障', rating: 7.9, desc: '中场控制' }], star: { name: 'Nicolas Pépé', pos: 'RW', club: 'Villarreal', stats: '3 分须胜', rating: 8.0, desc: '肋部破局' } },
  },
  m56: {
    home: { stars: [{ name: 'Moisés Caicedo', pos: 'CDM', club: 'Chelsea', stats: '1 分须胜', rating: 8.2, desc: '屏障+出球' }, { name: 'Enner Valencia', pos: 'ST', club: 'Internacional', stats: '锋线', rating: 7.9, desc: '定位球威胁' }, { name: 'Pervis Estupiñán', pos: 'LB', club: 'Brighton', stats: '左翼', rating: 7.7, desc: '宽度破局' }], star: { name: 'Moisés Caicedo', pos: 'CDM', club: 'Chelsea', stats: '1 分须胜', rating: 8.2, desc: '屏障+出球' } },
    away: { stars: [{ name: 'Jamal Musiala', pos: 'AM', club: 'Bayern Munich', stats: '6 分领跑', rating: 8.8, desc: '肋部穿盘' }, { name: 'Florian Wirtz', pos: 'AM', club: 'Bayer Leverkusen', stats: '组织', rating: 8.6, desc: '前场串联' }, { name: 'Joshua Kimmich', pos: 'RB', club: 'Bayern Munich', stats: '节拍', rating: 8.4, desc: '控球轴心' }], star: { name: 'Jamal Musiala', pos: 'AM', club: 'Bayern Munich', stats: '6 分领跑', rating: 8.8, desc: '肋部穿盘' } },
  },
  m57: {
    home: { stars: [{ name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', stats: '4 分争头名', rating: 8.3, desc: '一对一破局' }, { name: 'Wataru Endo', pos: 'CDM', club: 'Liverpool', stats: '屏障', rating: 8.0, desc: '绞杀 Isak 背身' }, { name: 'Kaoru Mitoma', pos: 'LW', club: 'Brighton', stats: '左翼', rating: 8.1, desc: '速度宽度' }], star: { name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', stats: '4 分争头名', rating: 8.3, desc: '一对一破局' } },
    away: { stars: [{ name: 'Alexander Isak', pos: 'ST', club: 'Newcastle', stats: '3 分须胜', rating: 8.4, desc: '锋线终结' }, { name: 'Emil Forsberg', pos: 'AM', club: 'New York Red Bulls', stats: '远射', rating: 7.9, desc: '定位球' }, { name: 'Victor Lindelöf', pos: 'CB', club: 'Aston Villa', stats: '中卫', rating: 7.6, desc: '防空 Kubo 传中' }], star: { name: 'Alexander Isak', pos: 'ST', club: 'Newcastle', stats: '3 分须胜', rating: 8.4, desc: '锋线终结' } },
  },
  m58: {
    home: { stars: [{ name: 'Wahbi Khazri', pos: 'AM', club: 'Montpellier', stats: '0 分出局', rating: 7.5, desc: '远射+定位球' }], star: { name: 'Wahbi Khazri', pos: 'AM', club: 'Montpellier', stats: '0 分出局', rating: 7.5, desc: '荣誉之战' } },
    away: { stars: [{ name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', stats: '4 分领跑', rating: 8.5, desc: '左翼速度' }, { name: 'Virgil van Dijk', pos: 'CB', club: 'Liverpool', stats: '防线', rating: 8.6, desc: '防空领袖' }, { name: 'Xavi Simons', pos: 'AM', club: 'RB Leipzig', stats: '前腰', rating: 8.3, desc: '肋部渗透' }], star: { name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', stats: '4 分领跑', rating: 8.5, desc: '左翼速度' } },
  },
  m59: {
    home: { stars: [{ name: 'Hakan Çalhanoğlu', pos: 'CM', club: 'Inter Milan', stats: '0 分须胜', rating: 8.1, desc: '远射+定位球' }, { name: 'Arda Güler', pos: 'AM', club: 'Real Madrid', stats: '前腰', rating: 8.0, desc: '肋部创造力' }, { name: 'Merih Demiral', pos: 'CB', club: 'Al-Ahli', stats: '中卫', rating: 7.7, desc: '防空' }], star: { name: 'Hakan Çalhanoğlu', pos: 'CM', club: 'Inter Milan', stats: '0 分须胜', rating: 8.1, desc: '远射+定位球' } },
    away: { stars: [{ name: 'Christian Pulisic', pos: 'RW', club: 'AC Milan', stats: '6 分已出线', rating: 8.6, desc: '右路破局' }, { name: 'Weston McKennie', pos: 'CM', club: 'Juventus', stats: '屏障', rating: 8.0, desc: '中场绞杀' }, { name: 'Folarin Balogun', pos: 'ST', club: 'Monaco', stats: '锋线', rating: 8.1, desc: '终结' }], star: { name: 'Christian Pulisic', pos: 'RW', club: 'AC Milan', stats: '6 分已出线', rating: 8.6, desc: '右路破局' } },
  },
  m60: {
    home: { stars: [{ name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', stats: '3 分争出线', rating: 8.0, desc: '右路速度' }, { name: 'Gustavo Gómez', pos: 'CB', club: 'Palmeiras', stats: '中卫', rating: 7.8, desc: '防线领袖' }, { name: 'Ramón Sosa', pos: 'LW', club: 'Nottingham Forest', stats: '左翼', rating: 7.6, desc: '宽度' }], star: { name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', stats: '3 分争出线', rating: 8.0, desc: '右路速度' } },
    away: { stars: [{ name: 'Mathew Ryan', pos: 'GK', club: 'Roma', stats: '3 分同分', rating: 7.8, desc: '一门经验' }, { name: 'Mitchell Duke', pos: 'ST', club: 'Machida Zelvia', stats: '支点', rating: 7.5, desc: '身体对抗' }, { name: 'Craig Goodwin', pos: 'LW', club: 'Adelaide United', stats: '左翼', rating: 7.6, desc: '传中破局' }], star: { name: 'Craig Goodwin', pos: 'LW', club: 'Adelaide United', stats: '3 分同分', rating: 7.6, desc: '传中破局' } },
  },
};

function getTeamStars(matchId, side) {
  return STARS[matchId]?.[side] || { stars: [], star: null };
}

module.exports = { getTeamStars, STARS };
