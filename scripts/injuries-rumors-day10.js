/** Day 10 injuries & locker room — m33–m36 · 更新于 E/F 组第 2 轮赛前（6/20 晚间） */

const TEAM_NEWS = {
  m33: {
    home: {
      injuries: [
        { player: 'Jamal Musiala', status: 'FIT', note: '7-1 库拉索梅开二度+助攻，Nagelsmann 确认「完全可用」', confirmed: true },
        { player: 'Florian Wirtz', status: 'FIT', note: '组织核心状态正佳；对科特迪瓦肋部渗透是破局关键', confirmed: true },
        { player: 'Kai Havertz', status: 'FIT', note: '中锋支点，首轮戴帽后更衣室士气极高', confirmed: true },
        { player: 'Manuel Neuer', status: 'FIT', note: '小腿伤愈后对库拉索复出；Nagelsmann 称「经验与领导力不可替代」', confirmed: true },
        { player: 'Joshua Kimmich', status: 'FIT', note: '右闸/后腰摇摆，7-1 后战术自由度提升', confirmed: true },
        { player: 'Lennart Karl', status: 'OUT', note: '大腿伤赛前退出，Assan Ouédraogo 递补入队', confirmed: true },
      ],
      rumors: [
        'Nagelsmann（赛前）：「7-1 是态度回应，但对科特迪瓦是不同比赛——非洲杯冠军边路速度极快」',
        '德媒：训练演练多种阵型以限制 Pépé/Amad  flank 速度，人员预计与首轮相近',
        '德国 7-1 库拉索后 E 组净胜球 +6，科特迪瓦 1-0 厄瓜多尔同积 3 分——Toronto 榜首战',
        '更衣室：Musiala+Wirtz 双核被称「新一代节拍器」；Neuer 40 岁回归一门成话题',
        'Toronto 最后一次队检：除 Karl 外无新增伤疑',
      ],
    },
    away: {
      injuries: [
        { player: 'Nicolas Pépé', status: 'FIT', note: '边路爆点；1-0 厄瓜多尔全场最威胁一点', confirmed: true },
        { player: 'Franck Kessié', status: 'FIT', note: '中场屏障+前插，Faé 战术轴心', confirmed: true },
        { player: 'Seko Fofana', status: 'FIT', note: '串联中场，对德国高位需出球质量', confirmed: true },
        { player: 'Evan N\'Dicka', status: 'FIT', note: '中卫主力，对 Havertz 空中球是考验', confirmed: true },
        { player: 'Ange-Yoan Bonny', status: 'FIT', note: '锋线支点，1-0 制胜球贡献者', confirmed: true },
        { player: 'Elye Wahi', status: 'FIT', note: '签证风波后已抵 Toronto 合练；与 Bonny/Guessand 争首发', confirmed: true },
      ],
      rumors: [
        'Faé（赛前）：「1-0 厄瓜多尔证明我们可以零封；对德国要纪律+速度，不是龟缩」',
        'Wahi 入境加拿大一度受阻（场外调查传闻），FIF 确认授权后周五与队合练——更衣室称「欢迎归队」',
        'Singo：「全队在加拿大受到欢迎，期待明天好结果」',
        '预计 4-4-2 低位+双前锋（Wahi 或 Bonny）+ Pépé 边路，Kessié 保护防线',
        'Faé 强调「不能给 Wirtz 和 Musiala 肋部空间」',
      ],
    },
  },

  m34: {
    home: {
      injuries: [
        { player: 'Moisés Caicedo', status: 'FIT', note: '中场屏障；0-1 科特迪瓦后须扛住 Advocaat 铁桶', confirmed: true },
        { player: 'Enner Valencia', status: 'FIT', note: '队长锋线，对科特迪瓦踢满 90 分钟——体能疑虑已解', confirmed: true },
        { player: 'Kendry Páez', status: 'FIT', note: '年轻创造力；Beccacece 可能给予更多自由度', confirmed: true },
        { player: 'Piero Hincapié', status: 'DOUBT', note: '肌肉小问题持续，对库拉索仍可能先发', confirmed: true },
        { player: 'Alexander Domínguez', status: 'FIT', note: '经验一门，0-1 后更衣室仍信任防线', confirmed: true },
      ],
      rumors: [
        'Beccacece（赛前）：「0-1 可接受过程不可接受；对库拉索必须 3 分，否则出线形势严峻」',
        'E 组：德国/科特迪瓦同积 3 分，厄瓜多尔 0 分已落后半个身位',
        '19 场不败纪录刚被科特迪瓦终结——更衣室强调「必须立即回应」',
        'Advocaat 称库拉索「对德国学到一课，对厄瓜多尔会更保守」——须破 5-4-1',
        'Kansas City 夜场 · 马宁主裁：Beccacece 提醒定位球与早段破局',
      ],
    },
    away: {
      injuries: [
        { player: 'Leandro Bacuna', status: 'FIT', note: '队长经验中场；1-7 后更衣室仍听 Advocaat 指挥', confirmed: true },
        { player: 'Eloy Room', status: 'FIT', note: '一门；对德国 7 失球但多次扑救', confirmed: true },
        { player: 'Rangelo Janga', status: 'FIT', note: '1-7 中唯一进球者；反击希望', confirmed: true },
        { player: 'Livano Comenencia', status: 'FIT', note: '对德国攻入队史世界杯首球，预计继续先发', confirmed: true },
        { player: 'Sontje Hansen', status: 'FIT', note: '半场被换下但无伤病报告，预计仍在轮换名单', confirmed: true },
      ],
      rumors: [
        'Advocaat（赛前）：「7-1 是痛苦，但德国也给了我们空间教训；对厄瓜多尔 5-4-1 是生存之道」',
        '库拉索首次世界杯正赛，更衣室强调「代表加勒比骄傲」',
        '预计极深低位 + Locadia/Hansen 反击 + 定位球偷分',
        '马宁主裁+中国裁判组：Advocaat 提醒球员注意战术犯规纪律',
        '平局对库拉索价值极大；厄瓜多尔必须耐心破密集',
      ],
    },
  },

  m35: {
    home: {
      injuries: [
        { player: 'Jurriën Timber', status: 'OUT', note: '腹股沟长期伤，未进世界杯名单', confirmed: true },
        { player: 'Quinten Timber', status: 'OUT', note: '训练 concussion，无法出战瑞典', confirmed: true },
        { player: 'Virgil van Dijk', status: 'FIT', note: '队长中卫；2-2 日本后防线组织责任加重', confirmed: true },
        { player: 'Cody Gakpo', status: 'FIT', note: '2-2 破门；Koeman 进攻宽度首选', confirmed: true },
        { player: 'Memphis Depay', status: 'FIT', note: '大腿伤愈，对日本替补后有望首发替 Malen', confirmed: true },
        { player: 'Tijjani Reijnders', status: 'FIT', note: '中场推进核心，休斯顿湿热下体能分配关键', confirmed: true },
        { player: 'Xavi Simons', status: 'FIT', note: '肋部创造力；Koeman 称「必须比首轮更高效」', confirmed: true },
      ],
      rumors: [
        'Koeman（赛前）：「2-2 日本可以接受过程，对瑞典必须取胜；瑞典 5-1 后不是同一级别的轻松」',
        'F 组：瑞典 3 分领跑，荷兰/日本各 1 分——荷兰再失分则出线告急',
        'Koeman 无新增伤疑；Depay 恢复或替 Malen 首发，De Jong+Reijnders+Gravenberch 中场不动',
        'Andersson 预计沿用 5-1 突尼斯原班，Isak+Gyökeres 双前锋',
        'Oliver 执法：荷兰球员熟悉英超裁判尺度，预计对抗强度不低',
      ],
    },
    away: {
      injuries: [
        { player: 'Gabriel Gudmundsson', status: 'DOUBT', note: '对突尼斯抽筋下场，赛后称无碍、预计可战荷兰', confirmed: true },
        { player: 'Alexander Isak', status: 'FIT', note: '5-1 突尼斯双响+1 助，本届状态最佳前锋之一', confirmed: true },
        { player: 'Viktor Gyökeres', status: 'FIT', note: '支点中锋，与 Isak 双前锋或轮换', confirmed: true },
        { player: 'Emil Forsberg', status: 'FIT', note: '经验前腰，定位球主罚', confirmed: true },
        { player: 'Victor Lindelöf', status: 'FIT', note: '中卫主力，对 Depay/Gakpo 速度', confirmed: true },
        { player: 'Dejan Kulusevski', status: 'FIT', note: '肋部推进，对 Blind 侧翼是突破口', confirmed: true },
      ],
      rumors: [
        'Andersson（赛前）：「5-1 只是开始；对荷兰我们要证明能赢强队，Isak 是箭头」',
        '瑞典更衣室士气因 5-1 暴涨；媒体称「2018 后最强小组赛开局」',
        'Gudmundsson 抽筋后已恢复训练；Bergvall 或继续替补，Ayari 中场位置稳固',
        'Isak 将对位 club 队友 Van Dijk + Van Hecke——更衣室话题',
        '平局对瑞典仍有利（7 分大概率出线），荷兰必须进攻',
      ],
    },
  },

  m36: {
    home: {
      injuries: [
        { player: 'Wahbi Khazri', status: 'FIT', note: '进攻核心；1-5 瑞典后仍是定位球与创造力来源', confirmed: true },
        { player: 'Aïssa Laïdouni', status: 'FIT', note: '中场工兵，对 Japan Endo 对位', confirmed: true },
        { player: 'Ellyes Skhiri', status: 'FIT', note: '屏障后腰，Zaouali 战术轴心', confirmed: true },
        { player: 'Youssef Msakni', status: 'FIT', note: '经验前腰，须利用日本肋部空档', confirmed: true },
        { player: 'Aymen Dahmen', status: 'FIT', note: '一门，1-5 后仍获更衣室信任', confirmed: true },
      ],
      rumors: [
        'Zaouali（赛前）：「5-1 是现实检验；对日本我们要抢 3 分，否则只能争最佳第三」',
        '突尼斯 0 分垫底，日本 1 分——本场突尼斯必须进攻',
        'Kubo 缺阵对日本边路是机会——Zaouali 称「要逼日本走中路」',
        '世界杯第 1000 场：Zaouali 称「历史场次是动力，不是压力」',
        'Kovacs 执法里程碑场次，突尼斯强调纪律避免 early 红牌',
      ],
    },
    away: {
      injuries: [
        { player: 'Takefusa Kubo', status: 'OUT', note: '对荷兰左膝扭伤，未随队赴蒙特雷；Moriyasu 称有望淘汰赛阶段回归', confirmed: true },
        { player: 'Kaoru Mitoma', status: 'FIT', note: '左路爆点，对 Laïdouni 侧翼', confirmed: true },
        { player: 'Wataru Endo', status: 'FIT', note: '队长后腰屏障', confirmed: true },
        { player: 'Ritsu Doan', status: 'FIT', note: '2-2 荷兰破门；Kubo 缺阵后右路责任加重', confirmed: true },
        { player: 'Takehiro Tomiyasu', status: 'FIT', note: '中卫/右闸，防线领袖', confirmed: true },
        { player: 'Ao Tanaka', status: 'FIT', note: '中场引擎，Kubo 缺阵后串联任务上升', confirmed: true },
      ],
      rumors: [
        'Moriyasu（赛前）：「Kubo 略伤缺席本场，对突尼斯仍要 3 分；Doan+Mitoma 要拉开宽度」',
        '日本未带 Kubo 前往蒙特雷——更衣室：Mitoma+Doan 被称「必须集体补位」',
        'F 组形势：瑞典 3 分，日本 1 分——再平则出线被动',
        '第 1000 场：Moriyasu 称「用日本足球的方式尊重历史」',
        '预计 4-2-3-1 控球主导，Endo+Tanaka 双闸 + Kamada 前腰',
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
