/** Day 15 injuries & locker room — m55–m60 · D/E/F 组末轮（6/26 北京） */
const TEAM_NEWS = {
  m55: {
    home: {
      injuries: [
        { player: 'Leandro Bacuna', status: 'FIT', note: '中场核心 · 5-4-1 轴心', confirmed: true },
        { player: 'Rangelo Janga', status: 'FIT', note: '锋线唯一威胁', confirmed: true },
      ],
      rumors: ['Advocaat：「1 分已不可能出线——对科特迪瓦须零封+奇迹」', '预计 5-4-1 极深低位 · 定位球是唯一路径', 'E 组末轮 · 德国 6 分已领跑'],
    },
    away: {
      injuries: [
        { player: 'Nicolas Pépé', status: 'FIT', note: '3 分须胜 · 肋部破局', confirmed: true },
        { player: 'Sébastien Haller', status: 'FIT', note: '支点 · 破密集防守', confirmed: true },
        { player: 'Franck Kessié', status: 'FIT', note: '屏障 · 控制节奏', confirmed: true },
      ],
      rumors: ['Fae：「3 分须胜——厄瓜多尔-德国同开，净胜球可能决定次席」', '预计 4-3-3 强攻 · Pépé/Haller 双锋', '费城夏夜 · 破铁桶定位球是关键'],
    },
  },
  m56: {
    home: {
      injuries: [
        { player: 'Moisés Caicedo', status: 'FIT', note: '1 分须胜 · 屏障轴心', confirmed: true },
        { player: 'Enner Valencia', status: 'FIT', note: '锋线终结 · 定位球', confirmed: true },
      ],
      rumors: ['Beccacece：「对德国须抢 3 分——Caicedo 屏障+Estupiñán 宽度」', 'E 组末轮生死战 · 德国或轮换但深度仍强', 'MetLife 开球与 m55 同时 · 须关注同组赛果'],
    },
    away: {
      injuries: [
        { player: 'Jamal Musiala', status: 'FIT', note: '6 分领跑 · 或轮换', confirmed: true },
        { player: 'Florian Wirtz', status: 'FIT', note: '组织核心', confirmed: true },
        { player: 'Manuel Neuer', status: 'DOUBT', note: '轻微不适 · Ter Stegen 待命', confirmed: false },
      ],
      rumors: ['Nagelsmann：「6 分已够但须尊重对手——轮换幅度赛前保密」', '德国 9 球 2 场后或轮换 · Musiala/Wirtz 仍可能首发', '深盘穿盘 vs 厄瓜多尔须胜矛盾'],
    },
  },
  m57: {
    home: {
      injuries: [
        { player: 'Takefusa Kubo', pos: 'RW', status: 'FIT', note: '4 分 · 一对一破局', confirmed: true },
        { player: 'Wataru Endo', status: 'FIT', note: '屏障 · 绞杀 Isak', confirmed: true },
        { player: 'Kaoru Mitoma', status: 'FIT', note: '左翼速度', confirmed: true },
      ],
      rumors: ['Moriyasu：「4 分仍不够稳——对瑞典须全取 3 分或盯荷兰赛果」', 'F 组出线战 · 达拉斯 34°C 补水是关键', 'Kubo 对位 Krafth 是战术轴心'],
    },
    away: {
      injuries: [
        { player: 'Alexander Isak', status: 'FIT', note: '3 分须胜', confirmed: true },
        { player: 'Emil Forsberg', status: 'FIT', note: '远射+定位球', confirmed: true },
      ],
      rumors: ['Tomasson：「3 分须胜——平局可能出局」', '瑞典 6 球 2 场进攻火但防 6 球 · 须攻守平衡', '湿热午后 · 后段体能是瓶颈'],
    },
  },
  m58: {
    home: {
      injuries: [{ player: 'Wahbi Khazri', status: 'FIT', note: '0 分已出局 · 荣誉战', confirmed: true }],
      rumors: ['Veglio：「0 分但须捍卫尊严——5-4-1 低位+Khazri 远射」', '突尼斯 9 球 2 场失守 · 末轮或轮换'],
    },
    away: {
      injuries: [
        { player: 'Cody Gakpo', status: 'FIT', note: '4 分领跑', confirmed: true },
        { player: 'Virgil van Dijk', status: 'FIT', note: '防线领袖', confirmed: true },
        { player: 'Memphis Depay', status: 'DOUBT', note: '肌肉疲劳 · 赛前队检', confirmed: false },
      ],
      rumors: ['Koeman：「4 分不够稳——须胜但可能轮换 Gakpo 以外位置」', '荷兰 7 球火力 · 对突尼斯深盘', '同开 m57 日本-瑞典 · 出线形势联动'],
    },
  },
  m59: {
    home: {
      injuries: [
        { player: 'Hakan Çalhanoğlu', status: 'FIT', note: '0 分须胜', confirmed: true },
        { player: 'Arda Güler', status: 'FIT', note: '肋部创造力', confirmed: true },
      ],
      rumors: ['Montella：「0 分等于出局——对东道主须早进球」', '土耳其 0 球 2 场 · 进攻乏力是最大问题', 'SoFi 洛杉矶 · 美国或大幅轮换'],
    },
    away: {
      injuries: [
        { player: 'Christian Pulisic', status: 'FIT', note: '6 分已出线 · 或替补', confirmed: true },
        { player: 'Weston McKennie', status: 'FIT', note: '屏障', confirmed: true },
        { player: 'Matt Turner', status: 'FIT', note: '一门 · 轮换待定', confirmed: true },
      ],
      rumors: ['Pochettino：「6 分已出线——末轮轮换但 SoFi 主场仍要赢」', '2-0 澳大利亚、2-0 巴拉圭后士气足', '无 Pulisic 首发可能略抬平局权重'],
    },
  },
  m60: {
    home: {
      injuries: [
        { player: 'Miguel Almirón', status: 'FIT', note: '3 分争出线', confirmed: true },
        { player: 'Gustavo Gómez', status: 'FIT', note: '中卫领袖', confirmed: true },
      ],
      rumors: ['Alfaro：「3 分同分生死战——Almirón 宽度是破局」', '巴拉圭 1-2 美国后须胜 · 定位球关键', 'D 组美国 6 分已基本锁定头名'],
    },
    away: {
      injuries: [
        { player: 'Craig Goodwin', status: 'FIT', note: '左翼传中', confirmed: true },
        { player: 'Harry Souttar', status: 'FIT', note: '防空', confirmed: true },
      ],
      rumors: ['Popovic：「3 分须胜——2-0 美国后士气足但巴拉圭不好打」', '澳大利亚 5-4-1 模板对土耳其验证', '湾区凉爽 · 均分乱局定位球破局'],
    },
  },
};

function getTeamNews(matchId, side) {
  const n = TEAM_NEWS[matchId]?.[side];
  return n ? { injuries: n.injuries || [], rumors: n.rumors || [] } : { injuries: [], rumors: [] };
}

module.exports = { getTeamNews, TEAM_NEWS };
