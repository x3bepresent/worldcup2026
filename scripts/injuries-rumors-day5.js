/**
 * Day 5 injuries & locker-room rumors — m13–m16
 * Sources: The Standard · The Stats Zone · Sporting News · RotoWire · Goal · Fox News · beIN · de la Fuente/Garcia 赛前发布会
 * Updated: 2026-06-16
 */

const TEAM_NEWS = {
  m14: {
    home: {
      injuries: [
        {
          player: 'Fermín López',
          status: 'OUT',
          note: '5 月对贝蒂斯右脚骨折，已手术，缺席整届世界杯（约 3 个月）',
          confirmed: true,
        },
        {
          player: 'Lamine Yamal',
          status: 'DOUBT',
          note: '大腿二级撕裂已愈，de la Fuente 确认可出场但**本场不首发**——替补待命，世界杯首秀从替补席开始',
          confirmed: true,
        },
        {
          player: 'Nico Williams',
          status: 'DOUBT',
          note: '5 月 10 日后未出场（轻微腿筋），已恢复训练但 de la Fuente 确认**本场不首发**',
          confirmed: true,
        },
        {
          player: 'Víctor Muñoz',
          status: 'DOUBT',
          note: '小腿伤愈，仅适合替补出场（de la Fuente 赛前确认）',
          confirmed: true,
        },
        {
          player: 'Fabián Ruiz',
          status: 'DOUBT',
          note: '赛季末伤停较多，状态/ sharpness 仍非 100%，但预计进入轮换',
          confirmed: false,
        },
        {
          player: 'Pedri',
          status: 'FIT',
          note: '预计与 Rodri/Zubimendi 搭档中场，欧洲杯后负荷管理完毕',
          confirmed: true,
        },
      ],
      rumors: [
        'de la Fuente 赛前：Yamal 状态「完美」但本场不首发——Ferran Torres + Baena + Oyarzabal 预计领衔锋线（对秘鲁热身赛模板）',
        'Morata、Carvajal、Le Normand 等欧洲杯主力未入选；Cubarsi/Laporte/Cucurella 防线成新核心',
        'Yamal/Williams 替补待命——若 60\' 后仍僵持，双翼或成破局后手',
        'Opta：西班牙胜 78%+ · 最可能 2-0/3-0；无 Fermín 后中路创造力略降但深度仍足',
      ],
    },
    away: {
      injuries: [
        {
          player: 'Logan Costa',
          status: 'FIT',
          note: '比利亚雷亚尔中卫，ACL 赛季几乎报销后已恢复，预计**首发**——H 组防线最大牌',
          confirmed: true,
        },
      ],
      rumors: [
        'Bubista 4-4-2/4-2-3-1 低位是世界杯新军唯一选择，控球率或低于 35%',
        '历史首次晋级世界杯（附加赛击败喀麦隆），Logan Costa + Stopira 防空是关键',
        'Ryan Mendes 经验边锋是反击发起点，定位球偷分是现实目标',
        'H 组另两对手乌拉圭/西班牙均强于佛得角，本场目标少丢当赢',
      ],
    },
  },

  m16: {
    home: {
      injuries: [
        {
          player: 'Zeno Debast',
          status: 'OUT',
          note: '大腿伤，预计世界杯前期无法出场——中卫深度受损',
          confirmed: true,
        },
        {
          player: 'Romelu Lukaku',
          status: 'DOUBT',
          note: 'Garcia 明确：**不会首发对埃及**——赛季仅 5 次意甲出场，De Ketelaere 任伪 9；Lukaku 或替补 25 分钟',
          confirmed: true,
        },
        {
          player: 'Kevin De Bruyne',
          status: 'FIT',
          note: 'Garcia 确认状态良好，预计首发前腰——与 Salah 直接对话',
          confirmed: true,
        },
        {
          player: 'Jeremy Doku',
          status: 'FIT',
          note: '周中训练曾出现呼吸不适，已恢复无后遗症，预计首发左边锋',
          confirmed: true,
        },
      ],
      rumors: [
        'Garcia 4-2-3-1：De Bruyne 串联 Doku/Trossard，De Ketelaere 伪 9 而非 Lukaku',
        '后防 Meunier/Mechele/Ngoy/De Cuyper 非黄金一代级别——防守是本场隐患',
        'Onana + Tielemans 双后腰（维拉组合）提供屏障',
        '大赛慢热有前例（2022 小组赛出局），G 组揭幕必须取 3 分',
      ],
    },
    away: {
      injuries: [
        {
          player: 'Mohamed Salah',
          status: 'FIT',
          note: '利物浦赛季末腿筋伤愈，预计队长首发——G 组最大个人威胁',
          confirmed: true,
        },
        {
          player: 'Omar Marmoush',
          status: 'FIT',
          note: '曼城前锋状态正佳，与 Salah 组成反击双核',
          confirmed: true,
        },
      ],
      rumors: [
        'Hossam Hassan 执教，埃及第四次世界杯仍求小组首次出线',
        '6 月 6 日 1-2 负巴西（热身）——Salah 领衔但后防对 De Bruyne/Doku 宽度存疑',
        'Lasheen/Ashour 双闸任务：限制 De Bruyne 肋部接球',
        '若意外领先会 4-5-1 收缩，Salah 留前场反击',
      ],
    },
  },

  m13: {
    home: {
      injuries: [
        {
          player: 'Nawaf Al-Aqidi',
          status: 'DOUBT',
          note: '肌肉伤，一门存疑——Al-Owais（2022 世界杯 4 场经验）预计首发',
          confirmed: false,
        },
        {
          player: 'Abdullah Al-Hamdan',
          status: 'DOUBT',
          note: '对塞内加尔热身脚踝伤退，出战乌拉圭成疑',
          confirmed: false,
        },
      ],
      rumors: [
        'Donis 预计 3-5-2/3-5-1-1 低位，Salem Al-Dawsari + Al-Buraikan 前场双核',
        '2022 对阿根廷 2-1 爆冷 DNA 仍在，但 Donis 体系与 Mancini 时代不同',
        '全队仅 Abdulhamid 一名海外球员（朗斯），硬实力仍处下风',
        '对厄瓜多尔热身 1-2 负，大赛前状态一般；迈阿密湿热 60\' 后体能是考验',
      ],
    },
    away: {
      injuries: [
        {
          player: 'Ronald Araújo',
          status: 'OUT',
          note: '小腿/肌肉伤，**确认缺席**揭幕战——巴萨中卫赛季末反复',
          confirmed: true,
        },
        {
          player: 'José María Giménez',
          status: 'OUT',
          note: '高等级脚踝扭伤，Bielsa 不会在揭幕战冒险——TyC/RotoWire 确认',
          confirmed: true,
        },
        {
          player: 'Giorgian De Arrascaeta',
          status: 'OUT',
          note: '小腿伤，预计缺席揭幕战（De la Cruz 顶替前腰）',
          confirmed: true,
        },
        {
          player: 'Sebastián Cáceres',
          status: 'DOUBT',
          note: '脑震荡/头部问题，能否首发待定',
          confirmed: false,
        },
        {
          player: 'Matías Viña',
          status: 'DOUBT',
          note: '肌肉伤，左后卫位置存疑',
          confirmed: false,
        },
        {
          player: 'Federico Valverde',
          status: 'FIT',
          note: 'Bielsa 压迫体系发动机，预计首发 CM',
          confirmed: true,
        },
      ],
      rumors: [
        'Bielsa 防线危机：Giménez + R. Araújo 双双缺阵，Bueno/Cáceres/Sanabria 重组中卫',
        'De Arrascaeta 缺阵 → De la Cruz 前腰，进攻创造力略降但 Valverde 覆盖补偿',
        'Núñez 支点 + Pellistri 速度，高位压迫强度不变',
        '媒体：乌拉圭医疗组与 R. Araújo 阵营关系紧张；Bielsa 仍坚持揭幕战高压',
      ],
    },
  },

  m15: {
    home: {
      injuries: [
        {
          player: 'Sardar Azmoun',
          status: 'OUT',
          note: '未入选 26 人大名单（3 月因社媒争议被 Ghalenoei 除名，非伤病）——伊朗「梅西」缺席',
          confirmed: true,
        },
        {
          player: 'Mehdi Taremi',
          status: 'FIT',
          note: '奥林匹亚科斯前锋，进攻唯一世界级支点，预计首发',
          confirmed: true,
        },
      ],
      rumors: [
        '伊朗基地由图森迁至蒂华纳（签证/安全），赛前跨境赴洛杉矶 SoFi',
        '26 人名单含 17 名国内联赛球员——中东局势下国内赛事 2 月起停摆，体能/状态是隐忧',
        'Ghalenoei 预选赛 10 场 10 零封，防守纪律仍是核心竞争力',
        '无 Azmoun 后 Taremi + Jahanbakhsh/Ghoddos 分担进球任务',
      ],
    },
    away: {
      injuries: [
        {
          player: 'Chris Wood',
          status: 'FIT',
          note: '诺丁汉森林前锋，赛季末伤病疑虑已消除，队长预计首发',
          confirmed: true,
        },
      ],
      rumors: [
        'Bazeley 4-4-2 低位，Wood 定位球 + 长传是唯一稳定威胁',
        '大洋洲附加赛晋级，大赛经验有限，FIFA 排名 103',
        '2003 AFC-OFC 0-3 负伊朗（非大赛），本场预计全场被动',
        '若 0-0 进入 70\' 对新西兰即是胜利；Wood 头球是最大冷门点',
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
