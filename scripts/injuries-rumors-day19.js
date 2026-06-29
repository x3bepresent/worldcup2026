/** Day 19 injuries & locker room — m74–m76 · 32强（6/30 北京） */
const TEAM_NEWS = {
  m76: {
    home: {
      injuries: [
        { player: 'Vinícius Júnior', status: 'FIT', note: 'C 组头名 · 7 分零失球 · 左路爆点', confirmed: true },
        { player: 'Raphinha', status: 'FIT', note: '宽度+定位球 · 3 球 2 助', confirmed: true },
        { player: 'Rodrygo', status: 'FIT', note: '肋部轮换选项 · 破密集', confirmed: true },
        { player: 'Danilo', status: 'DOUBT', note: '小组赛末段轻微肌肉疲劳 · 赛前队检', confirmed: false },
      ],
      rumors: [
        'Dorival：「淘汰赛没有容错——日本 F 组不败，须早破门避免加时」',
        '预计 4-2-3-1 高位 · Vinícius/Raphinha 宽度拉满破日本低位',
        'C 组曾 1-1 摩洛哥 · 破密集+定位球是今日轴心',
        '休斯顿夜场 · 体能优势在 70 分钟后或显现',
      ],
    },
    away: {
      injuries: [
        { player: 'Takefusa Kubo', status: 'FIT', note: 'F 组次席 · 一对一破局', confirmed: true },
        { player: 'Kaoru Mitoma', status: 'FIT', note: '左翼速度 · 反击第一选择', confirmed: true },
        { player: 'Wataru Endo', status: 'FIT', note: '屏障 · 绞杀巴西中路', confirmed: true },
        { player: 'Ko Itakura', status: 'DOUBT', note: '中卫轻微撞伤 · 末练减量', confirmed: false },
      ],
      rumors: [
        'Moriyasu：「对巴西须守平争胜——受让 +0.5/1 结构是我们熟悉的」',
        '预计 4-2-3-1 低位+5 人防线 · Kubo/Mitoma 反击',
        'F 组对荷兰、瑞典均不败 · 定位球+转换是冷门路径',
        'Agent 大信心倾向日本受让 · 皇冠热门巴西高水',
      ],
    },
  },
  m74: {
    home: {
      injuries: [
        { player: 'Jamal Musiala', status: 'FIT', note: 'E 组头名 · 肋部穿盘核心', confirmed: true },
        { player: 'Florian Wirtz', status: 'FIT', note: '组织+最后一传', confirmed: true },
        { player: 'Kai Havertz', status: 'FIT', note: '锋线支点 · 定位球', confirmed: true },
        { player: 'Manuel Neuer', status: 'FIT', note: '一门 · 小组赛 3 场全勤', confirmed: true },
      ],
      rumors: [
        'Nagelsmann：「巴拉圭 D 组第3 出线靠防守——须耐心破铁桶」',
        '预计 4-2-3-1 控球压迫 · Musiala/Wirtz 双 10 号位',
        'E 组 10 球 2 场后末轮小负 · 淘汰赛须兑现深盘',
        'Agent ★小球 2.5/3 · 副选巴拉圭 +1.5 @0.85（诱上结构）',
      ],
    },
    away: {
      injuries: [
        { player: 'Miguel Almirón', status: 'FIT', note: 'D 组第3 出线 · 反击速度', confirmed: true },
        { player: 'Diego Gómez', status: 'FIT', note: '中场推进 · 长传找 Almirón', confirmed: true },
        { player: 'Gustavo Gómez', status: 'FIT', note: '队长中卫 · 定位球威胁', confirmed: true },
        { player: 'Omar Sosa', status: 'FIT', note: '锋线支点 · 5-4-1 轴心', confirmed: true },
      ],
      rumors: [
        'Alfaro：「对德国没有包袱——5-4-1 低位+定位球偷一个」',
        'D 组净胜球劣势靠第3 名横向比较晋级 · 铁桶心态',
        '预计 5-4-1 极深 · 全场 xG 或低于 1.5',
        '受让 +1/1.5 高水 · 平局即赢半结构',
      ],
    },
  },
  m75: {
    home: {
      injuries: [
        { player: 'Cody Gakpo', status: 'FIT', note: 'F 组头名 · 7 分 · 左路宽度', confirmed: true },
        { player: 'Virgil van Dijk', status: 'FIT', note: '防线领袖 · 定位球', confirmed: true },
        { player: 'Xavi Simons', status: 'FIT', note: '肋部创造力 · 破密集', confirmed: true },
        { player: 'Memphis Depay', status: 'DOUBT', note: '肌肉疲劳延续 · 赛前队检决定首发', confirmed: false },
      ],
      rumors: [
        'Koeman：「摩洛哥 C 组次席 7 分不败——2022 阴影仍在，但 F 组头名须主动」',
        '预计 4-3-3 · Gakpo/Simons 宽度 · Depay 或 Brobbey 中锋',
        '皇冠退档 -0.5→-0/0.5 · 模型倾向摩洛哥受让',
        '同区胜者 M90 对加拿大 · 16 强半区已清晰',
      ],
    },
    away: {
      injuries: [
        { player: 'Achraf Hakimi', status: 'FIT', note: 'C 组次席 · 右路插上', confirmed: true },
        { player: 'Sofyan Amrabat', status: 'FIT', note: '屏障 · 绞杀 Simons/Gakpo', confirmed: true },
        { player: 'Youssef En-Nesyri', status: 'FIT', note: '锋线支点 · 定位球', confirmed: true },
        { player: 'Nayef Aguerd', status: 'DOUBT', note: '中卫轻微不适 · 末练单独恢复', confirmed: false },
      ],
      rumors: [
        'Regragui：「对荷兰不摆大巴——小组赛 7 分不败，淘汰赛要进球」',
        '预计 4-2-3-1 · Amrabat 屏障 + Hakimi 反击',
        '2022 半决赛阴影 · 荷兰退盘挺受让是盘口叙事',
        'Agent 双选摩洛哥 +0/0.5 · 小球 2/2.5',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  return TEAM_NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews };
