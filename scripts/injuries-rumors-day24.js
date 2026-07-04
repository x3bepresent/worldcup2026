/** Day 24 injuries & locker room — m89–m90 · 16强开赛（7/5 北京） */
const TEAM_NEWS = {
  m90: {
    home: {
      injuries: [
        { player: 'Alphonso Davies', status: 'FIT', note: '左路引擎 · 攻守转换核心', confirmed: true },
        { player: 'Jonathan David', status: 'FIT', note: '中锋终结点', confirmed: true },
        { player: 'Stephen Eustáquio', status: 'DOUBT', note: '黄牌累积 · 中场调度存疑', confirmed: false },
      ],
      rumors: [
        'Marsch：「摩洛哥是夺冠级别的对手，但我们有 Davies 这样的世界级武器」',
        '预计 4-3-3：Davies 左路突进 · J. David 支点 · Buchanan 右路',
        '32强淘汰南非后信心足 · 主打转换速度',
        '休斯顿封闭空调 · 体能分配是关键',
      ],
    },
    away: {
      injuries: [
        { player: 'Achraf Hakimi', status: 'FIT', note: '右路核心 · 点球淘汰荷兰功臣', confirmed: true },
        { player: 'Youssef En-Nesyri', status: 'FIT', note: '支点中锋 · 争顶', confirmed: true },
        { player: 'Sofyan Amrabat', status: 'FIT', note: '中场屏障', confirmed: true },
        { player: 'Nayef Aguerd', status: 'DOUBT', note: '肌肉疲劳 · 赛前队检', confirmed: false },
      ],
      rumors: [
        'Regragui：「点球淘汰荷兰证明我们的韧性——对加拿大要控制边路」',
        '预计 4-3-3：Hakimi/Mazraoui 双翼卫 · Brahim Díaz 组织 · En-Nesyri 支点',
        '2022 四强班底 · 淘汰赛经验占优',
        '须防 Davies 反击速度 · Hakimi 攻守平衡是胜负手',
      ],
    },
  },
  m89: {
    home: {
      injuries: [
        { player: 'Julio Enciso', status: 'FIT', note: '点球淘汰德国功臣 · 前场爆点', confirmed: true },
        { player: 'Antonio Sanabria', status: 'FIT', note: '支点中锋', confirmed: true },
        { player: 'Miguel Almirón', status: 'FIT', note: '右路速度 · 反击第一出口', confirmed: true },
        { player: 'Gustavo Gómez', status: 'FIT', note: '中卫领袖 · 定位球', confirmed: true },
      ],
      rumors: [
        'Alfaro：「对法国没人看好我们——但对德国也是，我们信铁桶+反击」',
        '预计 4-2-3-1 极深 · Cubas/Villasanti 双屏障 · Enciso 反击',
        '点球淘汰德国的冷门班底 · 低位纪律是生存之道',
        '受让深盘 · 须防 Mbappé 身后球',
      ],
    },
    away: {
      injuries: [
        { player: 'Kylian Mbappé', status: 'FIT', note: '锋线核心 · 队史射手王 · 状态火热', confirmed: true },
        { player: 'Antoine Griezmann', status: 'FIT', note: '前场组织轴', confirmed: true },
        { player: 'Aurélien Tchouaméni', status: 'FIT', note: '后腰屏障', confirmed: true },
        { player: 'Ousmane Dembélé', status: 'DOUBT', note: '大腿轻微不适 · 或 Coman 顶替', confirmed: false },
      ],
      rumors: [
        'Deschamps：「巴拉圭淘汰德国不是偶然——低位铁桶最难破，须耐心」',
        '预计 4-2-3-1：Mbappé 中锋 · Griezmann 前腰 · Dembélé/Coman 边路',
        '锋线豪华 · 破铁桶靠个人能力与定位球',
        '深盘热门 · 须早破门避免陷入闷战',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  return TEAM_NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews, TEAM_NEWS };
