/** Day 11 injuries & locker room — m37–m40 · 第2轮赛前（6/22 北京） */

const TEAM_NEWS = {
  m38: {
    home: {
      injuries: [
        { player: 'Lamine Yamal', status: 'FIT', note: '0-0 佛得角后核心爆点 · 预计首发 RW · de la Fuente 称「必须更早破局」', confirmed: true },
        { player: 'Pedri', status: 'FIT', note: '中场节拍器 · 对沙特铁桶肋部渗透是关键', confirmed: true },
        { player: 'Dani Olmo', status: 'FIT', note: '10 号位/二前锋灵活位 · 0-0 后或比首轮更靠前', confirmed: true },
        { player: 'Álvaro Morata', status: 'FIT', note: '中锋支点 · 对密集防守头球/做球是破局选项', confirmed: true },
        { player: 'Nico Williams', status: 'FIT', note: '左路宽度 · 与 Yamal 双翼是 de la Fuente 破密首选', confirmed: true },
        { player: 'Unai Simón', status: 'FIT', note: '一门 · 对沙特反击须保持防线高度', confirmed: true },
        { player: 'Fermín López', status: 'OUT', note: '右脚骨折整届缺阵 · 中路创造力深度略受影响', confirmed: true },
      ],
      rumors: [
        'de la Fuente（赛前）：「0-0 不可接受过程；对沙特必须 3 分，Yamal+Pedri 要更早进入状态」',
        'H 组四队均 1 分——西班牙再平则出线形势急转；预计最强 4-3-3 而非轮换',
        'Marca/ESPN 预测：Simón; Carvajal, Laporte, Cubarsí, Cucurella; Zubimendi, Pedri, Olmo; Yamal, Morata, N. Williams',
        '更衣室：0-0 佛得角后球员承认「终结效率是问题」，训练强调禁区内最后一传',
        'Claus 巴西组执法：de la Fuente 提醒定位球与早段破局，避免重蹈 0-0',
      ],
    },
    away: {
      injuries: [
        { player: 'Salem Al-Dawsari', status: 'FIT', note: '队长/左边锋 · 1-1 乌拉圭全场最威胁 · Renard 反击轴心', confirmed: true },
        { player: 'Mohammed Al-Owais', status: 'FIT', note: '一门 · 2022 世界杯 4 场经验 · 对西班牙须重复对乌拉圭表现', confirmed: true },
        { player: 'Salman Al-Faraj', status: 'FIT', note: '中场组织 · 5-4-1 出球点 · 对西班牙须减少失误', confirmed: true },
        { player: 'Ali Al-Boleahi', status: 'FIT', note: '中卫 · 对 Yamal/Williams 速度的一对一', confirmed: true },
        { player: 'Firas Al-Buraikan', status: 'FIT', note: '锋线支点 · 定位球与反击接应', confirmed: true },
        { player: 'Abdullah Al-Hamdan', status: 'DOUBT', note: '首轮后轻微肌肉疲劳 · 仍可能进入轮换名单', confirmed: false },
      ],
      rumors: [
        'Renard（赛前）：「对西班牙不是对乌拉圭——我们会更低位，但 2022 精神仍在」',
        '预计 5-4-1/5-3-2 极深低位 · Al-Dawsari 留前场反击 · Kanno+Al-Faraj 双闸',
        '1-1 乌拉圭后更衣室士气回升；Renard 强调「对西班牙拿 1 分是巨大成功」',
        '全队仍以国内联赛球员为主 · 硬实力差距大但低位纪律是生存之本',
        '亚特兰大夏午开球 · Renard 训练增加 hydration 与拖延节奏演练',
      ],
    },
  },

  m39: {
    home: {
      injuries: [
        { player: 'Kevin De Bruyne', status: 'FIT', note: '队长/前腰 · 1-1 埃及后须主导 G 组乱局', confirmed: true },
        { player: 'Jeremy Doku', status: 'FIT', note: '左路爆点 · 对伊朗 Rezaeian 侧是突破口', confirmed: true },
        { player: 'Romelu Lukaku', status: 'FIT', note: '中锋 · 1-1 埃及后预计首发 · 支点+终结', confirmed: true },
        { player: 'Koen Casteels', status: 'FIT', note: '一门 · 对 Taremi 背身与定位球须警惕', confirmed: true },
        { player: 'Amadou Onana', status: 'FIT', note: '后腰屏障 · 限制 Ezatolahi+Taremi 连线', confirmed: true },
        { player: 'Zeno Debast', status: 'OUT', note: '大腿伤 · 世界杯前期无法出场 · 中卫深度受损', confirmed: true },
        { player: 'Arthur Theate', status: 'FIT', note: '三中卫体系中卫 · Tedesco 3-4-2-1 关键', confirmed: true },
      ],
      rumors: [
        'Tedesco（赛前）：「G 组没人有优势；对伊朗必须拿 3 分，De Bruyne 要在肋部拿球」',
        'Het Laatste Nieuws 预测 3-4-2-1：Casteels; De Cuyper, Theate, De Bast, Castagne; Tielemans, Onana; Doku, De Bruyne, Trossard; Lukaku',
        '1-1 埃及后更衣室：Tedesco 称「过程 OK 结果不够」——本场预计比首轮更激进',
        'G 组四队均 1 分 · 平局对比利时仍被动 · Herrera 阿根廷主裁尺度偏严',
        '伊朗 2-2 新西兰进攻回暖 · Onana+Tielemans 屏障是防守轴心',
      ],
    },
    away: {
      injuries: [
        { player: 'Mehdi Taremi', status: 'FIT', note: '队长/中锋 · 2-2 新西兰破门 · 进攻唯一世界级支点', confirmed: true },
        { player: 'Alireza Beiranvand', status: 'FIT', note: '一门 · 对 Doku 速度须保持防线深度', confirmed: true },
        { player: 'Saeid Ezatolahi', status: 'FIT', note: '后腰屏障 · 预选赛 10 零封 DNA 仍在', confirmed: true },
        { player: 'Alireza Jahanbakhsh', status: 'FIT', note: '右路宽度 · 对 Castagne/De Cuyper 侧反击', confirmed: true },
        { player: 'Sardar Azmoun', status: 'OUT', note: '未进 26 人名单（非伤病）· Taremi 单核锋线', confirmed: true },
        { player: 'Ehsan Hajsafi', status: 'FIT', note: '左后卫/队长副 · 世界杯出场纪录追逐者', confirmed: true },
      ],
      rumors: [
        'Ghalenoei（赛前）：「2-2 新西兰证明进攻可以；对比利时我们不怕对攻，但纪律第一」',
        '预计 4-1-4-1/4-4-2 · Taremi 背身 · Ezatolahi 屏障 · Jahanbakhsh+Ghoddos 宽度',
        '伊朗基地跨境至洛杉矶 · 国内联赛长期停摆后状态仍是隐忧，但 2-2 提振士气',
        '无 Azmoun 后 Taremi 压力更大 · 定位球是伊朗传统破局手段',
        'Herrera 执法：Ghalenoei 提醒球员注意转换犯规与模拟接触',
      ],
    },
  },

  m37: {
    home: {
      injuries: [
        { player: 'Darwin Núñez', status: 'FIT', note: '中锋 · 1-1 沙特全场 xG 占优但未赢 · Bielsa 破局首选', confirmed: true },
        { player: 'Federico Valverde', status: 'FIT', note: '全能中场 · 压迫体系发动机 · 迈阿密湿热下体能分配关键', confirmed: true },
        { player: 'Facundo Pellistri', status: 'FIT', note: '右路速度 · 对 Bebé/Monteiro 侧一对一', confirmed: true },
        { player: 'Ronald Araújo', status: 'DOUBT', note: '小腿伤后恢复训练 · 对佛得角或仍替补 · Cáceres/Araujo 搭档', confirmed: false },
        { player: 'José María Giménez', status: 'DOUBT', note: '脚踝伤后逐步合练 · Bielsa 对密集防守或冒险首发', confirmed: false },
        { player: 'Giorgian De Arrascaeta', status: 'DOUBT', note: '小腿伤 · De la Cruz 继续顶替前腰 · 创造力略降', confirmed: false },
        { player: 'Matías Viña', status: 'FIT', note: '左后卫 · 1-1 沙特后已恢复先发', confirmed: true },
      ],
      rumors: [
        'Bielsa（赛前）：「1-1 沙特是警告——控球不等于胜利；对佛得角必须转化 xG」',
        'Olé 预测 4-2-3-1：Rocher; Núñez, Araujo, Cáceres, Viña; Ugarte, Valverde; Pellistri, De la Cruz, Maxi Araújo; Núñez',
        '0-0 西班牙证明 Vozinha+五后卫有效 · Bielsa 训练强调远射与定位球',
        '迈阿密 31°C/78% 湿度 · Bielsa 仍坚持高位压迫但 60\' 后轮换幅度或加大',
        'Eskås 挪威组执法 · 压迫局战术犯规多，Ugarte/Valverde 黄牌风险',
      ],
    },
    away: {
      injuries: [
        { player: 'Vozinha', status: 'FIT', note: '队长/一门 · 0-0 西班牙 MOM · 本届最铁门将之一', confirmed: true },
        { player: 'Stopira', status: 'FIT', note: '中卫领袖 · 防空+组织 · 对 Núñez 一对一', confirmed: true },
        { player: 'Logan Costa', status: 'FIT', note: '比利亚雷亚尔中卫 · 0-0 西班牙后信心暴涨', confirmed: true },
        { player: 'Ryan Mendes', status: 'FIT', note: '经验边锋 · 反击发起点 · 定位球', confirmed: true },
        { player: 'Bebé', status: 'FIT', note: '右路速度 · 对 Viña 侧是唯一反击希望', confirmed: true },
        { player: 'Jovane Cabral', status: 'BENCH', note: '锋线后手 · 60\' 后若仍 0-0 可能加强反击', confirmed: true },
      ],
      rumors: [
        'Bubista（赛前）：「0-0 西班牙是团队胜利；对乌拉圭我们同样 5-4-1，Vozinha 是信心来源」',
        '预计 5-4-1 极深低位 · Stopira+Logan Costa 防空 · Bebé/Mendes 反击',
        '更衣室：0-0 西班牙后全队相信「可以拿分」——对乌拉圭目标仍是 1 分',
        'BBC：佛得角控球率或低于 30% · 定位球偷分是现实路径',
        '迈阿密湿热对低位队反而有利——乌拉圭压迫体能消耗更大',
      ],
    },
  },

  m40: {
    home: {
      injuries: [
        { player: 'Chris Wood', status: 'FIT', note: '队长/中锋 · 2-2 伊朗连线 Just · G 组最稳定得分点', confirmed: true },
        { player: 'Marko Just', status: 'FIT', note: '2-2 伊朗双响 · 中场前插是新西兰最大惊喜', confirmed: true },
        { player: 'Michael Boxall', status: 'FIT', note: '中卫 · 对 Salah/Marmoush 速度须保持防线', confirmed: true },
        { player: 'Alex Paulsen', status: 'FIT', note: '一门 · 对埃及定位球与 Salah 内切', confirmed: true },
        { player: 'Marco Garbett', status: 'FIT', note: '中场屏障 · 限制 Elneny 组织', confirmed: true },
      ],
      rumors: [
        'Kalezić（赛前）：「2-2 伊朗证明我们可以进球；对埃及 Wood+Just 仍是核心，但要更稳守」',
        'Stuff 预测 4-4-2：Paulsen; Boxall, Kelly, Mitchell; Singh, Garbett, Just, van Hattum; Wood',
        'G 组四队均 1 分 · 新西兰再拿 1 分即可保持竞争力',
        '温哥华 19°C 凉爽 · 利于 Wood 全场跑动与 Just 前插',
        '更衣室：2-2 伊朗后士气大振 · 但 Salah 级别完全不同',
      ],
    },
    away: {
      injuries: [
        { player: 'Mohamed Salah', status: 'FIT', note: '队长/RW · 1-1 比利时后 · G 组最大个人威胁', confirmed: true },
        { player: 'Omar Marmoush', status: 'FIT', note: '伪 9/二前锋 · 与 Salah 组成反击双核', confirmed: true },
        { player: 'Mohamed Elneny', status: 'FIT', note: '后腰屏障 · 限制 Just 前插', confirmed: true },
        { player: 'Mohamed El Shenawy', status: 'FIT', note: '一门 · 对 Wood 头球须警惕', confirmed: true },
        { player: 'Mohamed Trezeguet', status: 'FIT', note: '左路宽度 · 定位球主罚之一', confirmed: true },
        { player: 'Mostafa Mohamed', status: 'FIT', note: '中锋支点 · 与 Marmoush 轮换/双锋', confirmed: true },
      ],
      rumors: [
        'Vitória（赛前）：「1-1 比利时满意过程；对新西兰必须 3 分，Salah 要在肋部拿球」',
        'KingFut 预测 4-2-3-1：El Shenawy; Hany, Hegazi, Abdelmonem, Hamdy; Elneny, Fathy; Trezeguet, Marmoush, Salah; Mostafa Mohamed',
        '1-1 比利时后 Vitória 强调「Salah 一人不够，需要 Marmoush 更多跑动」',
        'BC Place 凉爽利于埃及高位逼抢 · 对 Wood 长传须保持压迫',
        '阿联酋主裁 Al Ali 执法 · Vitória 提醒定位球纪律',
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
