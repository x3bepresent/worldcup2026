/** Day 34 injuries & locker room — m101 · 半决赛法国 vs 西班牙 */
const TEAM_NEWS = {
  m101: {
    home: {
      injuries: [
        { player: 'Kylian Mbappé', status: 'FIT', note: '金靴领跑 · 状态火热', confirmed: true },
        { player: 'Antoine Griezmann', status: 'FIT', note: '前场组织轴', confirmed: true },
        { player: 'Aurélien Tchouaméni', status: 'FIT', note: '后腰屏障', confirmed: true },
        { player: 'Ousmane Dembélé', status: 'DOUBT', note: '大腿轮换 · 或 Coman 顶替', confirmed: false },
      ],
      rumors: [
        'Deschamps：「西班牙淘汰比利时说明他们很强——半决赛要控制节奏」',
        '预计 4-2-3-1：Mbappé 中锋 · Griezmann 前腰 · Dembélé/Coman 边路',
        '2-0 淘汰摩洛哥后信心足 · 半决赛经验是最大王牌',
        '须限制 Yamal 右路一对一',
      ],
    },
    away: {
      injuries: [
        { player: 'Lamine Yamal', status: 'FIT', note: '右路爆点 · 淘汰葡萄牙功臣', confirmed: true },
        { player: 'Pedri', status: 'FIT', note: '中场组织', confirmed: true },
        { player: 'Rodri', status: 'FIT', note: '后腰核心', confirmed: true },
        { player: 'Nico Williams', status: 'FIT', note: '左路速度', confirmed: true },
      ],
      rumors: [
        'de la Fuente：「对法国是欧洲杯半决赛的续集——我们准备好了」',
        '预计 4-3-3：Yamal 右路 · Nico 左路 · Morata/Oyarzabal 支点',
        '淘汰葡萄牙+比利时 · 传控体系运转良好',
        '须防 Mbappé 身后速度 · Rodri 出球是关键',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  return TEAM_NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews, TEAM_NEWS };
