/** Day 23 injuries & locker room — m86–m88 · 32强收官（7/4 北京） */
const TEAM_NEWS = {
  m86: {
    home: {
      injuries: [
        { player: 'Lionel Messi', status: 'FIT', note: 'J 组 3 战 3 胜 · 迈阿密主场 · 预计首发', confirmed: true },
        { player: 'Julián Álvarez', status: 'FIT', note: '锋线轮换核心', confirmed: true },
        { player: 'Leandro Paredes', status: 'DOUBT', note: '小腿轻微疲劳 · 或 Enzo 单后腰', confirmed: false },
      ],
      rumors: [
        'Scaloni：「佛得角 3 连平出线不可轻视，但 -1.5/2 我们必须穿盘」',
        '预计 4-3-3：Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Álvarez, Garnacho',
        'J 组 9 分零失球 · 深盘 -1.5/2@0.94 低水 · Agent ★阿-1.5/2 🔥',
        '迈阿密主场标签 · Messi 最后一届世界杯情感加成',
      ],
    },
    away: {
      injuries: [
        { player: 'Ryan Mendes', status: 'FIT', note: '反击第一出口', confirmed: true },
        { player: 'Jóvio', status: 'FIT', note: '中卫 · 定位球', confirmed: true },
      ],
      rumors: [
        'Bubista：「对阿根廷没有包袱——+1.5/2 是我们熟悉的铁桶+偷一个」',
        '预计 4-4-2 极深 · Platini 孤立 · Mendes 反击',
        'H 组 3 连平出线 · 受让 +1.5/2@0.95',
      ],
    },
  },
  m87: {
    home: {
      injuries: [
        { player: 'James Rodríguez', status: 'FIT', note: 'K 组头名 · 定位球轴', confirmed: true },
        { player: 'Luis Díaz', status: 'FIT', note: '左路爆点', confirmed: true },
        { player: 'Radamel Falcao', status: 'OUT', note: '未入选大名单', confirmed: true },
      ],
      rumors: [
        'Lorenzo：「加纳 DEIJL 池第3 出线——Kudus 速度是我们最要防的」',
        '预计 4-2-3-1：James 前腰 · Díaz/Cuadrado 宽度 · Borré 中锋',
        'FIFA 官方对阵：哥伦比亚 vs 加纳（非厄瓜多尔）· -0.5@0.93',
        'Agent ★哥伦比亚 -0.5 · 副项大 2.5',
      ],
    },
    away: {
      injuries: [
        { player: 'Mohammed Kudus', status: 'FIT', note: '反击轴 · 预计首发', confirmed: true },
        { player: 'Thomas Partey', status: 'FIT', note: '屏障 · 绞杀 James', confirmed: true },
        { player: 'Inaki Williams', status: 'DOUBT', note: '肌肉轻微不适 · 赛前队检', confirmed: false },
      ],
      rumors: [
        'Addo：「哥伦比亚浅盘 -0.5 说明他们也有压力——我们 +0.5 守平就是胜利」',
        '预计 4-3-3 低位+转换 · Kudus 肋部 · Partey 屏障',
        'L 组 4 分压线晋级 · 无包袱心态',
      ],
    },
  },
  m88: {
    home: {
      injuries: [
        { player: 'Mitchell Duke', status: 'FIT', note: '锋线支点', confirmed: true },
        { player: 'Craig Goodwin', status: 'FIT', note: '左路宽度', confirmed: true },
        { player: 'Harry Souttar', status: 'DOUBT', note: '中卫轻微撞伤 · 末练减量', confirmed: false },
      ],
      rumors: [
        'Arnold：「Salah 是埃及全部——但 -0/0.5 均衡盘我们有机会」',
        '预计 4-2-3-1 · Goodwin 宽度 · Duke 支点',
        'D 组 4 分出线 · 32强收官首场 · 达拉斯高温',
        'Agent ★埃及 +0/0.5@0.93 · Salah 反击轴',
      ],
    },
    away: {
      injuries: [
        { player: 'Mohamed Salah', status: 'FIT', note: 'G 组次席 · 反击轴', confirmed: true },
        { player: 'Omar Marmoush', status: 'FIT', note: '速度 · 转换', confirmed: true },
        { player: 'Mohamed Elneny', status: 'FIT', note: '屏障', confirmed: true },
      ],
      rumors: [
        'Hassan：「澳大利亚 D 组次席不虚——Salah 一人改变均衡盘」',
        '预计 4-3-3 低位 · Salah 右路孤立 · Marmoush 速度',
        '受让 +0/0.5@0.93 · 1-1/0-1 路径',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  return TEAM_NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews, TEAM_NEWS };
