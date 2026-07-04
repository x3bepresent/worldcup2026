/** Day 24 core players — m89–m90 · 16强开赛 */
const STARS = {
  m90: {
    home: {
      star: { name: 'Alphonso Davies', pos: 'LB', club: 'Real Madrid', rating: 8.4, desc: 'B 组次席 · 左路引擎' },
      stars: [
        { name: 'Alphonso Davies', pos: 'LB', club: 'Real Madrid', rating: 8.4, desc: '左路突进 · 攻守转换' },
        { name: 'Jonathan David', pos: 'ST', club: 'Lille', rating: 8.0, desc: '终结 · 支点' },
        { name: 'Tajon Buchanan', pos: 'RW', club: 'Inter', rating: 7.6, desc: '右路宽度 · 一对一' },
      ],
    },
    away: {
      star: { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', rating: 8.6, desc: '右路核心 · 点球淘汰荷兰' },
      stars: [
        { name: 'Achraf Hakimi', pos: 'RB', club: 'PSG', rating: 8.6, desc: '攻守翼卫 · 定位球' },
        { name: 'Brahim Díaz', pos: 'AM', club: 'Real Madrid', rating: 8.1, desc: '组织 · 肋部破局' },
        { name: 'Youssef En-Nesyri', pos: 'ST', club: 'Fenerbahçe', rating: 7.9, desc: '支点 · 争顶' },
      ],
    },
  },
  m89: {
    home: {
      star: { name: 'Julio Enciso', pos: 'AM', club: 'Brighton', rating: 7.6, desc: '点球淘汰德国 · 前场爆点' },
      stars: [
        { name: 'Julio Enciso', pos: 'AM', club: 'Brighton', rating: 7.6, desc: '反击爆点 · 远射' },
        { name: 'Miguel Almirón', pos: 'RW', club: 'Newcastle', rating: 7.5, desc: '速度 · 反击第一出口' },
        { name: 'Gustavo Gómez', pos: 'CB', club: 'Palmeiras', rating: 7.7, desc: '防线领袖 · 定位球' },
      ],
    },
    away: {
      star: { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', rating: 9.4, desc: '锋线核心 · 队史射手王' },
      stars: [
        { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', rating: 9.4, desc: '速度 · 终结 · 破铁桶核心' },
        { name: 'Antoine Griezmann', pos: 'AM', club: 'Atlético', rating: 8.5, desc: '前场组织轴' },
        { name: 'Aurélien Tchouaméni', pos: 'CDM', club: 'Real Madrid', rating: 8.3, desc: '后腰屏障 · 出球' },
      ],
    },
  },
};

function getTeamStars(matchId, side) {
  const s = STARS[matchId]?.[side];
  return s ? { star: s.star, stars: s.stars } : { star: null, stars: [] };
}

module.exports = { getTeamStars, STARS };
