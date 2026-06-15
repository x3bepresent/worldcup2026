/**
 * Day 5 injuries & locker-room rumors — m13–m16
 */

const TEAM_NEWS = {
  m14: {
    home: {
      injuries: [
        { player: 'Pedri', status: 'FIT', note: '欧洲杯后负荷管理，预计首发中场核心', confirmed: true },
        { player: 'Gavi', status: 'OUT', note: 'ACL 长期缺阵，未入选大名单', confirmed: true },
      ],
      rumors: [
        'de la Fuente：Yamal 世界杯首秀「无额外压力」，预计右路首发',
        '西班牙欧洲杯冠军班底，传控+宽度是 H 组主旋律',
        'Opta：西班牙胜概率 78%+ · 最可能 2-0/3-0',
      ],
    },
    away: {
      injuries: [],
      rumors: [
        'Bubista 4-4-2 低位是世界杯新军唯一选择，控球率或低于 35%',
        'Ryan Mendes 经验边锋是反击发起点，定位球偷分是现实目标',
        '佛得角 2023 非洲杯八强，但面对西班牙 xG 2.45 预计全场被动',
      ],
    },
  },

  m16: {
    home: {
      injuries: [
        { player: 'Kevin De Bruyne', status: 'FIT', note: '曼城赛季末有轻伤史，赛前训练完整', confirmed: false },
        { player: 'Thibaut Courtois', status: 'OUT', note: '未入选 · Casteels 一门', confirmed: true },
      ],
      rumors: [
        'Rudy Garcia 黄金一代末班车——De Bruyne + Lukaku + Doku 预计首发',
        '西雅图人工草皮利于比利时快速传导',
        '大赛慢热有前例，G 组揭幕需取 3 分',
      ],
    },
    away: {
      injuries: [
        { player: 'Mohamed Salah', status: 'FIT', note: '利物浦赛季核心，埃及绝对进攻发起点', confirmed: true },
      ],
      rumors: [
        'Hossam Hassan 双主帅之一，Salah 一人球队属性明显',
        'Marmoush 德甲状态正佳，与 Salah 组成反击双核',
        '埃及 7 次世界杯经验，但面对比利时需低位+转换',
      ],
    },
  },

  m13: {
    home: {
      injuries: [],
      rumors: [
        'Mancini 2023 上任，强调低位+转换，2022 对阿根廷模板仍在',
        'Al-Dawsari 左路核心，Al-Faraj 中场屏障',
        '迈阿密湿热下 60\' 后体能是最大考验',
      ],
    },
    away: {
      injuries: [
        { player: 'Federico Valverde', status: 'FIT', note: '皇马全能中场，Bielsa 体系覆盖核心', confirmed: true },
      ],
      rumors: [
        'Bielsa 高位压迫强度世界杯顶级，首发或 4-4-2 高压',
        'Núñez 支点 + Valverde 远射是破局双核',
        '乌拉圭历史占优，xG 1.85 明显碾压沙特',
      ],
    },
  },

  m15: {
    home: {
      injuries: [
        { player: 'Mehdi Taremi', status: 'FIT', note: '国米前锋，伊朗进攻支点', confirmed: true },
        { player: 'Sardar Azmoun', status: 'FIT', note: '与 Taremi 双前锋或轮换', confirmed: true },
      ],
      rumors: [
        'Ghalenoei 预选赛 10 场 10 零封，防守纪律亚洲顶级',
        'Taremi/Azmoun 对位新西兰英冠班底防线',
        'SoFi 人工草皮，伊朗传控略占优',
      ],
    },
    away: {
      injuries: [],
      rumors: [
        'Wood 英超支点，定位球是唯一稳定威胁',
        'Bazeley 低位 4-4-2，大赛经验有限',
        '大洋洲附加赛晋级，面对伊朗预计全场被动',
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
