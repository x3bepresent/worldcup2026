/** Day 38 injuries & locker room — m104 · 决赛西班牙 vs 阿根廷 */
const TEAM_NEWS = {
  m104: {
    home: {
      injuries: [
        { player: 'Lamine Yamal', status: 'FIT', note: '半决赛造点 · 状态火热', confirmed: true },
        { player: 'Rodri', status: 'FIT', note: '后腰核心 · 半决赛完赛', confirmed: true },
        { player: 'Pedri', status: 'FIT', note: '中场组织', confirmed: true },
        { player: 'Nico Williams', status: 'FIT', note: '左路速度', confirmed: true },
      ],
      rumors: [
        'de la Fuente：「这是一代人的决赛——我们准备好了」',
        '预计 4-3-3：Yamal 右路 · Nico 左路 · Oyarzabal 支点',
        '2-0 淘汰法国 · 37 场正式比赛不败纪录',
        '须限制 Messi 肋部拿球 · Rodri 出球是关键',
      ],
    },
    away: {
      injuries: [
        { player: 'Lionel Messi', status: 'FIT', note: '半决赛两助攻 · 决赛经验', confirmed: true },
        { player: 'Lautaro Martínez', status: 'FIT', note: '半决赛绝杀 · 终结', confirmed: true },
        { player: 'Enzo Fernández', status: 'FIT', note: '中场串联', confirmed: true },
        { player: 'Julián Álvarez', status: 'FIT', note: '8强远射破门', confirmed: true },
      ],
      rumors: [
        'Scaloni：「卫冕之路走到最后一战——享受决赛」',
        '预计 4-3-3：Messi 伪边 · Alvarez/Lautaro 轮转支点',
        '2-1 淘汰英格兰 · 多场淘汰赛逆转经验',
        '须防 Yamal 右路一对一 · 定位球是第二破局点',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  return TEAM_NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews, TEAM_NEWS };
