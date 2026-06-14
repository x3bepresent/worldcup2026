/**
 * Day 4 injuries & locker-room rumors — m09–m12
 * Sources: Standard · Sports Mole · FotMob · BBC · Nagelsmann/Koeman 赛前发布会
 */

const TEAM_NEWS = {
  m09: {
    home: {
      injuries: [
        {
          player: 'Lennart Karl',
          status: 'OUT',
          note: '大腿肌肉撕裂，赛前退出 26 人大名单；Assan Ouédraogo 递补入队',
          confirmed: true,
        },
        {
          player: 'Manuel Neuer',
          status: 'FIT',
          note: 'Nagelsmann 赛前确认：小腿伤愈，预计首发第 125 场国家队 · 五届世界杯',
          confirmed: true,
        },
      ],
      rumors: [
        'Nagelsmann 赛前：Neuer 已恢复，Baumann 退回替补席；2018/2022 连续小组出局后首战压力极大',
        'Karl 缺阵 → Sané 预计顶替右翼；Brown 左后卫顺位超过 Raum，Nmecha 搭档 Pavlović 双后腰',
        'Kimmich 右后卫 + Tah/Schlotterbeck 中卫组合；Musiala-Wirtz-Havertz 进攻三角不变',
        'Opta：德国胜概率 90%+ · 最可能 3-0；全队无新增伤病，可派最强 XI',
      ],
    },
    away: {
      injuries: [],
      rumors: [
        'Advocaat 2 月曾因女儿健康辞职、5 月回归——备战期教练组动荡，Fred Rutten 与球员关系紧张',
        'FotMob/媒体：库拉索无新增伤病，3-5-2 低位是本场唯一战术选项',
        '人口最少参赛国 · 世界杯首秀 · 目标：前 30 分钟不丢球，定位球偷分',
        '多数球员荷甲/比甲二三级联赛效力，面对德国 xG 3.8 预计全场被动',
      ],
    },
  },

  m10: {
    home: {
      injuries: [
        {
          player: 'Xavi Simons',
          status: 'OUT',
          note: '4 月 ACL 撕裂，缺席整届世界杯；荷兰进攻创造力最大损失',
          confirmed: true,
        },
        {
          player: 'Jerdy Schouten',
          status: 'OUT',
          note: '膝伤缺阵，与 Simons 同为 Koeman 体系关键轮换',
          confirmed: true,
        },
        {
          player: 'Matthijs de Ligt',
          status: 'DOUBT',
          note: '背部问题未完全恢复，能否进入大名单/首发仍不确定',
          confirmed: false,
        },
        {
          player: 'Memphis Depay',
          status: 'DOUBT',
          note: '科林蒂安赛季末腿筋重伤，109 场 55 球射手王能否首发存疑',
          confirmed: false,
        },
        {
          player: 'Bart Verbruggen',
          status: 'DOUBT',
          note: '乌兹别克热身碰撞后存疑，仍预计首发；影响后场出球稳定性',
          confirmed: false,
        },
        {
          player: 'Nathan Aké',
          status: 'DOUBT',
          note: '曼城赛季末出场时间受限，体能与状态需赛前最后评估',
          confirmed: false,
        },
        {
          player: 'Tijjani Reijnders',
          status: 'DOUBT',
          note: '米兰赛季末分钟数不足，但预计仍进入中场轮换',
          confirmed: false,
        },
        {
          player: 'Denzel Dumfries',
          status: 'FIT',
          note: '缺席 4 个月后已恢复，预计首发右后卫',
          confirmed: true,
        },
      ],
      rumors: [
        'Koeman 4-3-3：van Dijk + van de Ven 中卫搭档已锁定；Malen 罗马状态正佳，与 Gakpo 竞争左路',
        'Depay vs Weghorst 中锋之争：前者伤疑，后者或首发；Simons 缺阵削弱肋部渗透',
        '更衣室：Euro 2024 后 de Jong/Gravenberch 双后腰回归，中场质量为近年最佳',
        'F组夺冠热门但伤病潮严重——日本三中卫专克欧洲宽度，本场爆冷指数四场最高',
      ],
    },
    away: {
      injuries: [
        {
          player: 'Kaoru Mitoma',
          status: 'OUT',
          note: '腿筋伤退出整届世界杯；曾用制胜球 1-0 胜英格兰热身赛',
          confirmed: true,
        },
        {
          player: 'Takumi Minamino',
          status: 'OUT',
          note: '因伤未入选大名单，减少前场 proven goalscorer 深度',
          confirmed: true,
        },
        {
          player: 'Wataru Endo',
          status: 'OUT',
          note: '脚部手术恢复后退出大名单；Sano/Kamada 顶替后腰位置',
          confirmed: true,
        },
        {
          player: 'Takehiro Tomiyasu',
          status: 'DOUBT',
          note: '长期伤后归队，三中卫体系中能否首发仍看赛前训练',
          confirmed: false,
        },
      ],
      rumors: [
        'Moriyasu 3-4-2-1：Kubo-Doan 肋部仍是唯一稳定破局点；Mitoma 缺阵削弱左路速度',
        'Moriyasu 称「队史最深阵容」——2022 胜德国/西班牙模板仍可部分复现',
        'Ueda 费耶诺德赛季 25 球/31 场，领衔锋线；Suzuki 门将稳固',
        '远藤航退出后中场硬度下降，但 Kamada 逼抢 de Jong 仍是战术关键',
      ],
    },
  },

  m11: {
    home: {
      injuries: [
        {
          player: "Evan N'Dicka",
          status: 'OUT',
          note: '罗马德比后大腿伤，FotMob/Sports Mole 确认缺席 E 组首战；Agbadou/Kossounou 顶替中卫',
          confirmed: true,
        },
        {
          player: 'Sébastien Haller',
          status: 'OUT',
          note: '未入选 26 人大名单（非本场伤停，但影响锋线深度）',
          confirmed: true,
        },
      ],
      rumors: [
        'Faé 锋线抉择：Haller 落选后 Guessand/Wahi/Bonny 三人合计仅 4 粒国家队进球',
        '边路火力：Amad Diallo、Simon Adingra、Nicolas Pepe、Yan Diomande 竞争首发，科特迪瓦主要威胁在宽度',
        '非洲杯冠军班底四连胜入战 · E 组德国已赛，本场结果直接影响出线形势',
        'N\'Dicka 缺阵削弱防空，对位 Enner Valencia 定位球与 Hincapié 高度处于劣势',
      ],
    },
    away: {
      injuries: [
        {
          player: 'Enner Valencia',
          status: 'DOUBT',
          note: '小腿轻微问题，队长/队史 49 球射手能否首发存疑——全队唯一双位数进球者',
          confirmed: false,
        },
      ],
      rumors: [
        'Beccacece：19 场不败延续至世界杯 · Caicedo 领衔 Chelsea 级中场硬度',
        'Valencia 若缺阵：Plata（8 球）为次号射手，锋线进球高度依赖老将',
        'Kendry Páez 18 岁天才中场入选；Pacho/Hincapié/Estupiñán 欧洲顶级联赛班底',
        '更衣室消息：La Tri 强调低位防守+快速转换，平局对双方均可接受',
      ],
    },
  },

  m12: {
    home: {
      injuries: [
        {
          player: 'Dejan Kulusevski',
          status: 'OUT',
          note: '膝伤整季未出场，未入选 26 人大名单；瑞典右路创造力重大损失',
          confirmed: true,
        },
        {
          player: 'Alexander Isak',
          status: 'DOUBT',
          note: '利物浦转会后伤病频繁，赛季仅 8 次英超首发；Potter 盼其找回最佳状态',
          confirmed: false,
        },
      ],
      rumors: [
        'Potter 征召 Gyökeres（阿森纳）+ Isak 双中锋配置，但 Kulusevski 缺阵削弱右路宽度',
        'Potter：「若 Isak 状态在线，他是世界级」——赛前重点恢复其比赛节奏',
        '11 名英超球员入选；Elanga（纽卡）速度或顶替 Kulusevski 右路角色',
        '2018/2022 小组赛均提前出局，大赛稳定性仍是瑞典更衣室老话题',
      ],
    },
    away: {
      injuries: [],
      rumors: [
        'Lamouchi 4-3-3 低位：Skhiri/Hannibal 绞杀 Isak 接球，Achouri 速度反击',
        '2018 世界杯曾 2-1 胜德国，大赛爆冷 DNA；Khazri 定位球与远射是次要威胁',
        '蒙特雷 34°C 干热——北非球员适应性略优于北欧，0-0 进入 70 分钟后对瑞典更不利',
        'FotMob：突尼斯暂无报告伤病，Meriah 防空经验对位瑞典身高优势',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  const block = TEAM_NEWS[matchId]?.[side];
  if (!block) throw new Error(`Unknown team news: ${matchId}/${side}`);
  return JSON.parse(JSON.stringify(block));
}

module.exports = { getTeamNews, TEAM_NEWS };
