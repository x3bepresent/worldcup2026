/** Day 8 injuries & locker room — m25–m28 */

const TEAM_NEWS = {
  m25: {
    home: {
      injuries: [
        { player: 'Patrik Schick', status: 'FIT', note: '勒沃库森射手，必须抢分之战核心', confirmed: true },
        { player: 'Tomáš Souček', status: 'FIT', note: '西汉姆屏障，三中卫前保护', confirmed: true },
      ],
      rumors: ['首轮 1-2 韩国后 Hašek 强调「对南非不容再失分」', 'Schick 84\' 头球挽回颜面，次轮预计首发'],
    },
    away: {
      injuries: [
        { player: 'Percy Tau', status: 'FIT', note: '布莱顿边路，南非唯一爆点', confirmed: true },
      ],
      rumors: ['首轮 0-2 墨西哥后 Broos 称「出线形势严峻」', '60\' 后体能崩盘是前车之鉴'],
    },
  },
  m26: {
    home: {
      injuries: [
        { player: 'Manuel Akanji', status: 'FIT', note: '曼城中卫，出球+防空', confirmed: true },
        { player: 'Granit Xhaka', status: 'FIT', note: '勒沃库森节拍器', confirmed: true },
      ],
      rumors: ['首轮 1-1 卡塔尔后 Yakin 强调「对波黑必须取胜」'],
    },
    away: {
      injuries: [
        { player: 'Edin Džeko', status: 'FIT', note: '39 岁支点，定位球威胁', confirmed: true },
      ],
      rumors: ['首轮 1-1 加拿大，Džeko 经验是最大资产', '对瑞士预计 4-5-1 低位'],
    },
  },
  m27: {
    home: {
      injuries: [
        { player: 'Alphonso Davies', status: 'FIT', note: '拜仁左路，温哥华主场爆点', confirmed: true },
        { player: 'Jonathan David', status: 'FIT', note: '里尔射手，终结关键', confirmed: true },
      ],
      rumors: ['东道主温哥华主场，Marsch 高位压迫是战术核心', '对卡塔尔必须取胜'],
    },
    away: {
      injuries: [
        { player: 'Almoez Ali', status: 'FIT', note: '卡塔尔锋线核心', confirmed: true },
      ],
      rumors: ['首轮 1-1 瑞士，防守纪律尚可', '客场对加拿大预计 5-4-1 低位'],
    },
  },
  m28: {
    home: {
      injuries: [
        { player: 'Raúl Jiménez', status: 'FIT', note: '首轮梅开二度，状态火热', confirmed: true },
        { player: 'Luis Chávez', status: 'DOUBT', note: '康复管理中，次轮出场存疑', confirmed: false },
        { player: 'Guillermo Ochoa', status: 'FIT', note: '40 岁一门，第六届世界杯', confirmed: true },
      ],
      rumors: ['Jiménez 梅开二度后 Aguirre 称「对韩国是真正考验」', '瓜达拉哈拉夜场主场气势'],
    },
    away: {
      injuries: [
        { player: '孙兴慜 Son Heung-min', status: 'FIT', note: 'LAFC 前锋，A组最大威胁', confirmed: true },
        { player: '李康仁', status: 'FIT', note: '巴黎中场，首轮远射破门', confirmed: true },
      ],
      rumors: ['洪明甫：「孙兴慜被限制时李康仁远射是 B 计划」', '2018 友谊赛 2-0 胜墨西哥是心理参考'],
    },
  },
};

function getTeamNews(matchId, side) {
  const block = TEAM_NEWS[matchId]?.[side];
  if (!block) return { injuries: [], rumors: [] };
  return JSON.parse(JSON.stringify(block));
}

module.exports = { getTeamNews, TEAM_NEWS };
