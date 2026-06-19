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
        { player: 'Sphephelo Sithole', status: 'OUT', note: '揭幕战对墨西哥直红停赛，缺席对捷克', confirmed: true },
        { player: 'Themba Zwane', status: 'OUT', note: '揭幕战对墨西哥直红停赛，缺席对捷克', confirmed: true },
        { player: 'Lyle Foster', status: 'FIT', note: '锋线支点，次轮生死战预计首发', confirmed: true },
      ],
      rumors: [
        '首轮 0-2 墨西哥后 Broos 称「出线形势严峻」',
        'SI/Al Jazeera：Mbatha 顶 Sithole、Mofokeng 顶 Zwane，预计 4-3-3',
        '揭幕战 3 张红牌后中场创造力大减，Foster 成唯一稳定得分点',
      ],
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
        { player: 'Raúl Jiménez', status: 'FIT', note: 'FIFA 官方首发中锋', confirmed: true },
        { player: 'César Montes', status: 'OUT', note: '停赛 · Álvarez 队长顶中卫', confirmed: true },
        { player: 'Julián Quiñones', status: 'FIT', note: 'FIFA 官方首发左翼', confirmed: true },
        { player: 'Israel Reyes', status: 'BENCH', note: 'Sánchez 顶替首发右闸', confirmed: true },
        { player: 'Gilberto Mora', status: 'BENCH', note: '未进首发，Romo 中场', confirmed: true },
      ],
      rumors: ['FIFA 官方 4-1-2-3：Lira 单后腰 · Romo+Gutiérrez · Álvarez 队长', 'Sánchez 替 Reyes 右闸'],
    },
    away: {
      injuries: [
        { player: '孙兴慜 Son Heung-min', status: 'FIT', note: '队长 · FIFA 官方 3-4-3 中锋', confirmed: true },
        { player: '李康仁 Lee Kang-in', status: 'FIT', note: 'FIFA 官方首发 · 三叉戟右翼', confirmed: true },
        { player: '李在城 Lee Jae-sung', status: 'FIT', note: 'FIFA 官方首发 · 三叉戟左翼', confirmed: true },
        { player: 'Kim Moon-hwan', status: 'FIT', note: 'FIFA 官方三中卫（替 Lee Tae-seok）', confirmed: true },
        { player: 'Lee Tae-seok', status: 'BENCH', note: '对捷克首发 · 本场替补', confirmed: true },
      ],
      rumors: [
        'FIFA 官方 3-4-3：Moon-hwan 变阵 · Gi-hyuk 推前 · 孙兴慜+李在城+李康仁 三叉戟',
        '洪明甫未沿用赢捷克 3-4-2-1，改强攻阵型',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  const block = TEAM_NEWS[matchId]?.[side];
  if (!block) return { injuries: [], rumors: [] };
  return JSON.parse(JSON.stringify(block));
}

module.exports = { getTeamNews, TEAM_NEWS };
