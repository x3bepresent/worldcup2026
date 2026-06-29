/** Day 19 core players — m74–m76 · 32强 */
const STARS = {
  m76: {
    home: {
      star: { name: 'Vinícius Júnior', pos: 'LW', club: 'Real Madrid', rating: 9.0, desc: 'C 组头名 · 爆点' },
      stars: [
        { name: 'Vinícius Júnior', pos: 'LW', club: 'Real Madrid', rating: 9.0, desc: '一对一 · 7 分零失球轴心' },
        { name: 'Raphinha', pos: 'RW', club: 'Barcelona', rating: 8.6, desc: '宽度 · 定位球' },
        { name: 'Bruno Guimarães', pos: 'CDM', club: 'Newcastle', rating: 8.5, desc: '屏障 · 转换发起点' },
      ],
    },
    away: {
      star: { name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', rating: 8.2, desc: 'F 组次席 · 反击' },
      stars: [
        { name: 'Takefusa Kubo', pos: 'RW', club: 'Real Sociedad', rating: 8.2, desc: '肋部 · 破防第一选择' },
        { name: 'Kaoru Mitoma', pos: 'LW', club: 'Brighton', rating: 8.0, desc: '速度 · 纵深' },
        { name: 'Wataru Endo', pos: 'CDM', club: 'Liverpool', rating: 7.9, desc: '绞杀 · 屏障' },
      ],
    },
  },
  m74: {
    home: {
      star: { name: 'Jamal Musiala', pos: 'AM', club: 'Bayern', rating: 8.8, desc: 'E 组头名 · 穿盘核心' },
      stars: [
        { name: 'Jamal Musiala', pos: 'AM', club: 'Bayern', rating: 8.8, desc: '肋部 · 深盘破局' },
        { name: 'Florian Wirtz', pos: 'AM', club: 'Leverkusen', rating: 8.7, desc: '组织 · 最后一传' },
        { name: 'Kai Havertz', pos: 'ST', club: 'Arsenal', rating: 8.4, desc: '支点 · 定位球' },
      ],
    },
    away: {
      star: { name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', rating: 7.8, desc: 'D 组第3 · 反击' },
      stars: [
        { name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', rating: 7.8, desc: '速度 · 反击第一出口' },
        { name: 'Diego Gómez', pos: 'CM', club: 'Brighton', rating: 7.6, desc: '推进 · 长传' },
        { name: 'Gustavo Gómez', pos: 'CB', club: 'Palmeiras', rating: 7.7, desc: '队长 · 定位球' },
      ],
    },
  },
  m75: {
    home: {
      star: { name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', rating: 8.5, desc: 'F 组头名 · 宽度' },
      stars: [
        { name: 'Cody Gakpo', pos: 'LW', club: 'Liverpool', rating: 8.5, desc: '内切 · 7 分领跑' },
        { name: 'Virgil van Dijk', pos: 'CB', club: 'Liverpool', rating: 8.7, desc: '防线领袖' },
        { name: 'Xavi Simons', pos: 'AM', club: 'RB Leipzig', rating: 8.4, desc: '创造力 · 破密集' },
      ],
    },
    away: {
      star: { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', rating: 8.6, desc: 'C 组次席 · 插上' },
      stars: [
        { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', rating: 8.6, desc: '右路速度 · 反击' },
        { name: 'Sofyan Amrabat', pos: 'CDM', club: 'Manchester Utd', rating: 8.2, desc: '屏障 · 绞杀' },
        { name: 'Youssef En-Nesyri', pos: 'ST', club: 'Sevilla', rating: 8.0, desc: '支点 · 定位球' },
      ],
    },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars };
