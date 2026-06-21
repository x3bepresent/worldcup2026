/** Day 10 injuries & locker room — m33–m36 · m33 首发确认后更新（6/21） */

const TEAM_NEWS = {
  m33: {
    home: {
      injuries: [
        { player: 'Manuel Neuer', status: 'FIT', note: 'FIFA 官方一门 · 对库拉索复出后连续先发', confirmed: true },
        { player: 'Joshua Kimmich', status: 'FIT', note: 'FIFA 官方队长 · 3-4-3 中卫出球核心', confirmed: true },
        { player: 'Jamal Musiala', status: 'FIT', note: 'FIFA 官方先发 · 7-1 库拉索双响+助攻', confirmed: true },
        { player: 'Florian Wirtz', status: 'FIT', note: 'FIFA 官方先发 · 肋部组织轴心', confirmed: true },
        { player: 'Kai Havertz', status: 'FIT', note: 'FIFA 官方中锋 · 首轮戴帽', confirmed: true },
        { player: 'Felix Nmecha', status: 'FIT', note: 'FIFA 官方先发中场 · 替 Goretzka 增加对抗', confirmed: true },
        { player: 'Antonio Rüdiger', status: 'BENCH', note: 'FIFA 官方替补 · 7-1 后轮换', confirmed: true },
        { player: 'Leon Goretzka', status: 'BENCH', note: 'FIFA 官方替补 · Nmecha 先发', confirmed: true },
        { player: 'David Raum', status: 'BENCH', note: 'FIFA 官方替补 · Brown 任翼卫', confirmed: true },
        { player: 'Lennart Karl', status: 'OUT', note: '大腿伤整届缺阵 · Assan Ouédraogo 递补名单', confirmed: true },
      ],
      rumors: [
        '【官方】FIFA 3-4-3：Kimmich 中卫+队长 · Tah/Schlotterbeck 搭档 · Brown 翼卫 · Nmecha 先发',
        'Rüdiger/Goretzka/Raum 均未首发——Nagelsmann 7-1 后适度轮换，肋部 Musiala+Wirtz+Sané 仍是破局点',
        '替补席：Rüdiger · Goretzka · Raum · Undav · Beier — 60\' 后若久攻不下可能变 4-2-3-1',
        'Nagelsmann（赛前）：「对科特迪瓦不是 7-1 的重演，非洲杯冠军转换极快」',
        'Toronto 开球前队检：除 Karl 外全员可用，无新增伤疑',
      ],
    },
    away: {
      injuries: [
        { player: 'Yahia Fofana', status: 'FIT', note: 'FIFA 官方一门 · 1-0 厄瓜多尔零封', confirmed: true },
        { player: 'Franck Kessié', status: 'FIT', note: 'FIFA 官方队长 · 中场屏障', confirmed: true },
        { player: 'Ange-Yoan Bonny', status: 'FIT', note: 'FIFA 官方先发中锋 · 1-0 制胜球', confirmed: true },
        { player: 'Amad Diallo', status: 'FIT', note: 'FIFA 官方先发边路 · 对 Brown/Kimmich 侧是突破口', confirmed: true },
        { player: 'Yan Diomande', status: 'FIT', note: 'FIFA 官方先发 · 年轻锋线速度点', confirmed: true },
        { player: 'Wilfried Singo', status: 'FIT', note: 'FIFA 官方先发右闸 · 对 Sané 一对一', confirmed: true },
        { player: 'Nicolas Pépé', status: 'BENCH', note: 'FIFA 官方替补 · 1-0 厄瓜多尔全场最威胁一点未首发', confirmed: true },
        { player: 'Elye Wahi', status: 'BENCH', note: 'FIFA 官方替补 · 签证风波后合练但未进 XI', confirmed: true },
        { player: 'Evan N\'Dicka', status: 'BENCH', note: 'FIFA 官方替补 · Kossounou+Agbadou 中卫搭档', confirmed: true },
        { player: 'Seko Fofana', status: 'BENCH', note: 'FIFA 官方替补 · Sangaré+Oulai 先发双闸', confirmed: true },
      ],
      rumors: [
        '【官方】FIFA 4-3-3：Amad+Bonny+Diomande 三叉 · Pépé/Wahi/N\'Dicka 均未首发——Faé 选择更年轻锋线',
        'Pépé 替补是最大变量：对厄瓜多尔全场最佳，60\' 后若仍僵局几乎必上',
        'Wahi 归队后仍坐替补席；更衣室消息「尊重教练决定，随时待命」',
        'Faé 改 4-3-3 对攻而非赛前预测的 4-4-2 低位——Kessié+Sangaré 保护防线，Oulai 串联',
        'Singo：「对德国要纪律，但我们也准备好了速度」',
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
        { player: 'Aymen Dahmen', status: 'FIT', note: 'FIFA 官方一门 · 1-5 瑞典后仍获信任', confirmed: true },
        { player: 'Ellyes Skhiri', status: 'FIT', note: 'FIFA 官方先发 · 5-3-2 屏障后腰轴心', confirmed: true },
        { player: 'Hannibal Mejbri', status: 'FIT', note: 'FIFA 官方先发前腰 · 创造力替代 Khazri', confirmed: true },
        { player: 'Elias Saad', status: 'FIT', note: 'FIFA 官方先发前锋 · 与 Tounekti 组成双锋', confirmed: true },
        { player: 'Wahbi Khazri', status: 'OUT', note: 'FIFA 官方未进大名单 · 进攻核心意外缺席', confirmed: true },
        { player: 'Youssef Msakni', status: 'OUT', note: 'FIFA 官方未进大名单 · 经验前腰未随队', confirmed: true },
        { player: 'Aïssa Laïdouni', status: 'OUT', note: 'FIFA 官方未进大名单 · Slimane 顶替中场', confirmed: true },
        { player: 'Ismael Ghari', status: 'BENCH', note: 'FIFA 官方替补 · 60\' 后若需抢分可能上场', confirmed: true },
        { player: 'Firas Chaouat', status: 'BENCH', note: 'FIFA 官方替补 · 锋线后手', confirmed: true },
      ],
      rumors: [
        '【官方】FIFA 5-3-2：Khazri/Msakni/Laidouni 均未进大名单——Zaouali 选低位而非赛前「必须进攻」 rhetoric',
        'Saad+Tounekti 双锋 · Mejbri 前腰 · Skhiri 屏障——定位球与反击是主要威胁',
        'Ghari/Chaouat 替补：若 0-0 僵局，60\' 后可能变 4-4-2 抢分',
        'Zaouali（赛前）：「5-1 是现实检验；对日本我们要抢 3 分」——但官方 XI 更偏稳守',
        'Kovacs 执法世界杯第 1000 场，突尼斯强调纪律避免 early 红牌',
      ],
    },
    away: {
      injuries: [
        { player: 'Zion Suzuki', status: 'FIT', note: 'FIFA 官方一门 · 对荷兰 2-2 后连续先发', confirmed: true },
        { player: 'Ao Tanaka', status: 'FIT', note: 'FIFA 官方先发 · 3-4-3 中场引擎', confirmed: true },
        { player: 'Kaishu Sano', status: 'FIT', note: 'FIFA 官方先发 · 替 Endo 与 Tanaka 双闸', confirmed: true },
        { player: 'Daichi Kamada', status: 'FIT', note: 'FIFA 官方先发前腰 · 肋部组织核心', confirmed: true },
        { player: 'Ritsu Doan', status: 'FIT', note: 'FIFA 官方先发 · 2-2 荷兰破门 · 翼卫宽度', confirmed: true },
        { player: 'Ayase Ueda', status: 'FIT', note: 'FIFA 官方先发中锋 · 3-4-3 单箭头', confirmed: true },
        { player: 'Takefusa Kubo', status: 'OUT', note: '对荷兰左膝扭伤 · 未随队赴蒙特雷', confirmed: true },
        { player: 'Kaoru Mitoma', status: 'OUT', note: 'FIFA 官方未进大名单 · 左路爆点意外缺席', confirmed: true },
        { player: 'Wataru Endo', status: 'OUT', note: 'FIFA 官方未进大名单 · 队长后腰 · Sano 顶替', confirmed: true },
        { player: 'Daizen Maeda', status: 'BENCH', note: 'FIFA 官方替补 · 翼卫/锋线后手', confirmed: true },
      ],
      rumors: [
        '【官方】FIFA 3-4-3：Kubo/Mitoma/Endo 均未进大名单——Moriyasu 大幅轮换变阵三中卫',
        'Sano+Tanaka 双闸 · Kamada 前腰 · Nakamura+Junya Ito+Ueda 前场——控球宽度替代 Mitoma 爆点',
        'Maeda/Hayakawa 替补：60\' 后若久攻不下可能加强边路',
        'F 组形势：荷兰 4 分、瑞典 3 分、日本 1 分——再平则出线被动',
        '第 1000 场：Moriyasu 称「用日本足球的方式尊重历史」',
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
