/** Day 9 injuries & locker room — m29–m32 · 更新于首轮后（6/20 赛前） */

const TEAM_NEWS = {
  m32: {
    home: {
      injuries: [
        { player: 'Christian Pulisic', status: 'FIT', note: '揭幕战 4-1 巴拉圭参与进攻组织，状态回升；西雅图主场预计继续担任核心', confirmed: true },
        { player: 'Folarin Balogun', status: 'FIT', note: '揭幕战双响（31\'、45+5\'），锁定首发中锋', confirmed: true },
        { player: 'Tyler Adams', status: 'FIT', note: '与 McKennie 双后腰运转正常，Pochettino 6/11 仍称 26 人全员可用', confirmed: true },
        { player: 'Giovanni Reyna', status: 'FIT', note: '90+8\' 替补破门，更衣室士气加分', confirmed: true },
        { player: 'Chris Richards', status: 'FIT', note: '踝伤已愈，中卫轮换人选；首发待官方确认', confirmed: true },
      ],
      rumors: [
        'Pochettino（赛后）：「4-1 是回应批评的方式，但 D 组才刚开始；对澳大利亚必须当成决赛踢」',
        '揭幕战 Balogun 双响 + Reyna 绝杀后，东道主西雅图 7 万观众预期再掀声浪',
        'D 组美国、澳大利亚同积 3 分——本场胜者大概率握出线主动权',
        '媒体预测 Pulisic-Reyna 宽度 + Adams 屏障，但官方首发仍待开球前确认',
        '4 场热身 3 负的阴影被揭幕战大胜部分冲淡，Pochettino 仍警告「不可轻敌」',
      ],
    },
    away: {
      injuries: [
        { player: 'Patrick Beach', status: 'FIT', note: 'FotMob 官方 XI 一门替 Ryan；对土耳其 2-0 零封 + MOTM 级表现', confirmed: true },
        { player: 'Mathew Ryan', status: 'FIT', note: '经验一门仍在替补席，Popovic 尚未改回 Ryan 先发', confirmed: true },
        { player: 'Harry Souttar', status: 'FIT', note: '5-4-1 队长中卫，对土耳其全场稳定', confirmed: true },
        { player: 'Nestory Irankunda', status: 'FIT', note: '27\' 首开纪录，19 岁 Brighton 球员上位成功', confirmed: true },
        { player: 'Jackson Irvine', status: 'FIT', note: '首轮替补，Okon-Engstler 顶替其中场位置；仍可用', confirmed: true },
      ],
      rumors: [
        'Popovic（赛后）：「我们很难被击败…每次大赛都被低估」——5-4-1 低位反击奏效',
        '对土耳其 2-0：控球不占优但 Irankunda+Metcalfe 反击高效，Beach 一门变阵成亮点',
        'Popovic 赛前续约至 2027 亚洲杯，更衣室稳定',
        'Leckie/Ryan/Irvine 等 veteran 首轮替补，年轻化与经验并存',
        '客场西雅图对东道主美国是本届最难客场之一，预计继续低位+反击',
      ],
    },
  },

  m30: {
    home: {
      injuries: [
        { player: 'Billy Gilmour', status: 'OUT', note: '膝伤退出整届世界杯，McTominay 独撑中场创造力', confirmed: true },
        { player: 'Scott McTominay', status: 'FIT', note: 'Clarke 6/14 确认「perfect and ready」；对海地全场核心', confirmed: true },
        { player: 'John McGinn', status: 'FIT', note: '29\' 制胜球 + 7.8 MOTM；刚随维拉夺欧联杯，状态正佳', confirmed: true },
        { player: 'Scott McKenna', status: 'FIT', note: '首轮 Hendry 先发中卫，McKenna 替补待命', confirmed: true },
        { player: 'Nathan Patterson', status: 'DOUBT', note: '6/14 轻微撞击伤被观察；次轮队检仍待官方更新', confirmed: false },
      ],
      rumors: [
        'Clarke（Standard）：「McTominay 可战，Gilmour 缺阵后中场责任更重」',
        'McGinn 制胜后苏格兰 C 组领跑 3 分，更衣室士气为近年大赛最高之一',
        '对摩洛哥：Clarke 预计延续 4-4-2/4-2-3-1，Robertson 宽度 + McGinn 插上',
        '首轮 xG 1.05-1.05 险胜海地，Clarke 称「大赛三分比场面更重要」',
        'C 组巴西、摩洛哥各 1 分，苏格兰若再胜有望握出线主动',
      ],
    },
    away: {
      injuries: [
        { player: 'Nayef Aguerd', status: 'OUT', note: '腹股沟伤退出世界杯，Diop+Riad 中卫组合经巴西战检验', confirmed: true },
        { player: 'Abde Ezzalzouli', status: 'OUT', note: '膝伤退出世界杯，定位球选项减少', confirmed: true },
        { player: 'Achraf Hakimi', status: 'FIT', note: '对巴西全场活跃，边路往返无虞', confirmed: true },
        { player: 'Noussair Mazraoui', status: 'FIT', note: '对巴西首发左后卫，肩部伤后已完全恢复', confirmed: true },
        { player: 'Abdessamad Saibari', status: 'FIT', note: '21\' 偷袭破门逼平巴西，次轮预计继续先发', confirmed: true },
      ],
      rumors: [
        'Regragui（赛后）：「对巴西 1 分证明我们可以与任何人抗衡；对苏格兰要抢 3 分」',
        'Saibari 冷射 + Vinícius 扳平后，摩洛哥 2022 四强信心延续',
        'Diop（Fulham）+ Riad（Crystal Palace）新中卫链经巴西战磨合，防空仍是隐患',
        'Hakimi-Díaz 右路对 Robertson 左路是本场关键对位',
        '客场波士顿抢分将改变 C 组格局——摩洛哥需打破苏格兰主场气势',
      ],
    },
  },

  m29: {
    home: {
      injuries: [
        { player: 'Neymar', status: 'DOUBT', note: '小腿伤缺席揭幕战；6/18 合练片段流出，对海地能否复出仍待 Ancelotti 赛前决定', confirmed: false },
        { player: 'Wesley', status: 'OUT', note: '整届报销，右路 Danilo/替补轮换', confirmed: true },
        { player: 'Vinícius Jr.', status: 'FIT', note: '32\' 扳平摩洛哥，左路核心；The Standard 几乎锁定首发', confirmed: true },
        { player: 'Lucas Paquetá', status: 'FIT', note: '首战实际 4-4-2 中场核心，组织压力因 Neymar 缺阵上升', confirmed: true },
        { player: 'Gabriel Magalhães', status: 'FIT', note: '与 Marquinhos 中卫搭档经巴西战检验', confirmed: true },
      ],
      rumors: [
        'Ancelotti（SI）：「1-1 摩洛哥令人失望，对海地必须取胜；Neymar 情况每日观察」',
        '首战实际变阵 4-4-2（非赛前 4-2-3-1），Igor Thiago 先发、62\' Luiz Henrique 换入',
        '1-1 后巴西 C 组仅 1 分，东道主+五冠压力陡增；媒体称「最不容再失分的一场」',
        'Vinícius+Paquetá 破局能力是关键，海地预计 5 后卫深度低位',
        'FotMob：Alisson 一门稳定，Ancelotti 半场变阵（Danilo/Fabinho）成首战标志',
      ],
    },
    away: {
      injuries: [
        { player: '全队（26人）', status: 'FIT', note: 'Sports Mole 6/13：Migné 全员健康，对苏格兰亦无新增伤停', confirmed: true },
        { player: 'Duckens Nazon', status: 'FIT', note: '队史射手王，首轮替补；对巴西或升首发', confirmed: true },
        { player: 'Johny Placide', status: 'FIT', note: '38 岁队长门将，首轮稳定', confirmed: true },
      ],
      rumors: [
        'Migné（赛后）：「0-1 苏格兰可以接受防守表现，对巴西仍是学习机会」',
        '首轮 15 射 2 正未能转化，Pierrot+Isidor 双前锋试验效果一般',
        '对巴西预计 5-4-1/5-5 深度低位，Bellegarde 中场枢纽 + Nazon 反击支点',
        '首次世界杯正赛，海地无历史包袱；湿热费城夜场或进一步拖慢节奏',
        'Camp：Migné 强调定位球与纪律，「不要给 Vinícius 身后空间」',
      ],
    },
  },

  m31: {
    home: {
      injuries: [
        { player: 'Arda Güler', status: 'FIT', note: 'FIFA 官方 XI 攻击中场 #8，对澳大利亚全场活跃但未能转化', confirmed: true },
        { player: 'Hakan Çalhanoğlu', status: 'FIT', note: '队长 #10，组织核心；0-2 后更衣室需其稳住军心', confirmed: true },
        { player: 'Kenan Yildiz', status: 'FIT', note: '首轮替补未进 XI；对巴拉圭媒体普遍预测回归首发', confirmed: true },
        { player: 'Kerem Aktürkoglu', status: 'FIT', note: '首轮意外出任中锋 #7，30 射 8 正 0 球——位置可能调整', confirmed: true },
        { player: 'Merih Demiral', status: 'FIT', note: '中卫主力，对澳大利亚防线未被击穿但前场效率成问题', confirmed: true },
      ],
      rumors: [
        'Montella（赛后）：「72% 控球却 0 球不可接受；对巴拉圭必须拿出不同态度」',
        '0-2 澳大利亚后土耳其 D 组形势严峻——美国、澳大利亚同积 3 分',
        '首轮 Yildiz 替补、Aktürkoglu 突任中锋的变阵遭质疑，次轮 Yildiz+Güler 双核呼声高',
        'Sports Mole 6/13 曾预测土耳其 2-0 胜澳——与实际反差成更衣室压力来源',
        'Montella 强调 Çalhanoğlu 肋部渗透，Yıldız/Güler 对 Paraguay 低位是破局关键',
      ],
    },
    away: {
      injuries: [
        { player: 'Julio Enciso', status: 'FIT', note: '揭幕战替补 73\' 登场送助攻（Mauricio 进球），肌肉伤后已恢复出场', confirmed: true },
        { player: 'Miguel Almirón', status: 'FIT', note: '进攻核心；0-4 美国仍是最威胁一点', confirmed: true },
        { player: 'Gustavo Gómez', status: 'FIT', note: '队长中卫，对 Balogun 双响防守失败但本人无伤病', confirmed: true },
        { player: 'Antonio Sanabria', status: 'FIT', note: '支点中锋，Enciso 复出后前场组合选择增多', confirmed: true },
      ],
      rumors: [
        'Alfaro（赛后）：「4-1 是痛苦一课，但对土耳其我们必须进攻——已无路可退」',
        '0-4 美国：Balogun 双响 + Bobadilla 乌龙，Enciso 替补助攻成少数亮点',
        'Enciso 复出缓解前腰创造力危机，Almirón+Enciso 组合或对阵土耳其',
        'Alfaro 传统低位+身体对抗，预选赛 12 场仅 1 负的防守体系仍在',
        'D 组若再负基本出局；Alfaro 称「防守是我们的语言，但本场需要进球」',
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
