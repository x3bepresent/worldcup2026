/** Day 22 core players — m83–m85 · 32强 */
const STARS = {
  m84: {
    home: {
      star: { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', rating: 9.0, desc: 'H 组头名 · 右路爆点' },
      stars: [
        { name: 'Lamine Yamal', pos: 'RW', club: 'Barcelona', rating: 9.0, desc: '一对一 · 破奥地利低位第一选择' },
        { name: 'Nico Williams', pos: 'LW', club: 'Athletic', rating: 8.8, desc: '左路速度 · 宽度拉满' },
        { name: 'Rodri', pos: 'CDM', club: 'Man City', rating: 8.9, desc: '屏障 · 控球发起点' },
      ],
    },
    away: {
      star: { name: 'Marcel Sabitzer', pos: 'CM', club: 'Dortmund', rating: 8.0, desc: 'J 组次席 · 绞杀+远射' },
      stars: [
        { name: 'Marcel Sabitzer', pos: 'CM', club: 'Dortmund', rating: 8.0, desc: '屏障 Rodri/Olmo · 定位球' },
        { name: 'David Alaba', pos: 'CB', club: 'Real Madrid', rating: 8.3, desc: '防线领袖 · 经验组织' },
        { name: 'Gregoritsch', pos: 'ST', club: 'Freiburg', rating: 7.6, desc: '支点 · 反击第一落点' },
      ],
    },
  },
  m83: {
    home: {
      star: { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al Nassr', rating: 8.8, desc: 'K 组亚军 · 终结点' },
      stars: [
        { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al Nassr', rating: 8.8, desc: '定位球+禁区 · 淘汰赛须兑现' },
        { name: 'Bruno Fernandes', pos: 'AM', club: 'Man Utd', rating: 8.7, desc: '最后一传 · 肋部穿盘' },
        { name: 'Vitinha', pos: 'CM', club: 'PSG', rating: 8.5, desc: '控球节拍 · 对克中场绞杀' },
      ],
    },
    away: {
      star: { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', rating: 8.7, desc: 'L 组亚军 · 节拍器' },
      stars: [
        { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', rating: 8.7, desc: '大赛经验 · 控制节奏拖入均衡' },
        { name: 'Joško Gvardiol', pos: 'CB', club: 'Man City', rating: 8.4, desc: '左路出球 · 防线核心' },
        { name: 'Andrej Kramarić', pos: 'ST', club: 'Hoffenheim', rating: 8.0, desc: '支点 · 定位球威胁' },
      ],
    },
  },
  m85: {
    home: {
      star: { name: 'Granit Xhaka', pos: 'CM', club: 'Leverkusen', rating: 8.4, desc: 'B 组头名 · 控场轴心' },
      stars: [
        { name: 'Granit Xhaka', pos: 'CM', club: 'Leverkusen', rating: 8.4, desc: '长传调度 · 绞杀马赫雷斯' },
        { name: 'Manuel Akanji', pos: 'CB', club: 'Inter', rating: 8.2, desc: '防线领袖 · 出球' },
        { name: 'Breel Embolo', pos: 'ST', club: 'Monaco', rating: 8.0, desc: '支点 · 破密集' },
      ],
    },
    away: {
      star: { name: 'Riyad Mahrez', pos: 'RW', club: 'Al Ahli', rating: 8.2, desc: 'E/F/G/I/J 池第3 · 反击轴' },
      stars: [
        { name: 'Riyad Mahrez', pos: 'RW', club: 'Al Ahli', rating: 8.2, desc: '一对一 · 瑞士退盘后的冷门爆点' },
        { name: 'Sofiane Feghouli', pos: 'RW', club: 'Kayserispor', rating: 7.8, desc: '宽度 · 定位球' },
        { name: 'Ramy Bensebaini', pos: 'CB', club: 'Dortmund', rating: 7.9, desc: '中卫 · 定位球威胁' },
      ],
    },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars, STARS };
