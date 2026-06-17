/** Day 6 injuries & locker room — m17–m20（2026-06-17 赛前更新） */

const TEAM_NEWS = {
  m17: {
    home: {
      injuries: [
        { player: 'William Saliba', status: 'FIT', note: '背部伤情已恢复，与 Upamecano 搭档中卫', confirmed: true },
        { player: 'Kylian Mbappé', status: 'FIT', note: '队长 · 单锋首发', confirmed: true },
        { player: 'Adrien Rabiot', status: 'FIT', note: '与 Tchouaméni 组成双闸，Kanté 替补', confirmed: true },
        { player: 'Antoine Griezmann', status: 'BENCH', note: '未进首发，Cherki/Thuram/Barcola 待命', confirmed: true },
      ],
      rumors: [
        '【更衣室】Deschamps 排出攻击型 4-2-3-1：Olise 热身赛戴帽后锁定右翼',
        '【战术】Dembélé 伪 10 + Doué 左路 · Mbappé 单箭 · Rabiot/Tchouaméni 保护防线',
        '替补席：Kanté、Cherki、Thuram、Barcola、Mateta — 60\' 后深度轮换仍是优势',
        'Koundé 对位 Ismaila Sarr 边路攻防是法国右路关键',
      ],
    },
    away: {
      injuries: [
        { player: 'Kalidou Koulibaly', status: 'FIT', note: '队长 · 伤愈复出后锁定中卫', confirmed: true },
        { player: 'Édouard Mendy', status: 'FIT', note: '一门首发（非 Diouf）', confirmed: true },
        { player: 'Ismaila Sarr', status: 'FIT', note: '右翼首发，对位 Hernandez', confirmed: true },
        { player: 'Nicolas Jackson', status: 'FIT', note: '热身赛红牌后仍首发中锋', confirmed: true },
      ],
      rumors: [
        '【战术】4-3-3：Gana Gueye 单后腰 · Pape Gueye/Camara 两侧 · Mané-Jackson-Sarr 三叉戟',
        '【更衣室】Niakhate 搭档 Koulibaly 中卫 · Diatta/Diouf 边卫应对法国宽度',
        'Mané 大赛经验+Jackson 速度是转换唯一路径',
        '替补：Iliman Ndiaye、Mbaye 等攻击手 60\' 后待命',
      ],
    },
  },
  m18: {
    home: {
      injuries: [
        { player: 'Hassan Raed', status: 'DOUBT', note: '一门手指轻伤，赛前队检待定', confirmed: false },
      ],
      rumors: [
        '【更衣室】Casas 赛前动员强调「90 分钟纪律」，伊拉克本土联赛球员无大牌内讧',
        '【战术】4-5-1 低位，Aymen Hussein 定位球是唯一威胁',
        '对 Haaland 守 0-0 求 1 分是现实目标',
        '硬实力与挪威差距大，但亚洲杯防守纪律是资产',
      ],
    },
    away: {
      injuries: [
        { player: 'Erling Haaland', status: 'FIT', note: 'FIFA 赛前健康声明无限制，预计首发', confirmed: true },
        { player: 'Martin Ødegaard', status: 'FIT', note: '阿森纳队长，节拍器预计首发', confirmed: true },
        { player: 'Alexander Sørloth', status: 'FIT', note: '与 Haaland 双锋或轮换', confirmed: true },
      ],
      rumors: [
        '【更衣室】28 年后再进世界杯，Solbakken 称「首战必须取 3 分，无退路」',
        '【战术】4-3-3：Haaland 单锋 + Ødegaard 前腰，宽度拉开',
        'Haaland 对位伊拉克英冠级防线是最大变量',
        '预选赛火力延续，但大赛慢热需防冷',
      ],
    },
  },
  m19: {
    home: {
      injuries: [
        { player: 'Lionel Messi', status: 'FIT', note: '最后一届世界杯，负荷管理但 J 组揭幕预计首发', confirmed: true },
        { player: 'Paulo Dybala', status: 'OUT', note: '未入选 26 人大名单', confirmed: true },
        { player: 'Lautaro Martínez', status: 'FIT', note: '国米赛季末无新增伤情', confirmed: true },
      ],
      rumors: [
        '【更衣室】Scaloni 称「卫冕从第一场开始」，Messi 最后一届无额外压力传言',
        '【战术】4-3-3：Messi 自由人 + Lautaro 支点 + Enzo 节拍',
        'Messi 70\' 可能换下保体能，Garnacho 待命',
        '对阿尔及利亚预计控球压制，但尊重 2014 逼德国加时',
      ],
    },
    away: {
      injuries: [
        { player: 'Riyad Mahrez', status: 'FIT', note: '沙特联赛状态，右路核心预计首发', confirmed: true },
        { player: 'Ismaël Bennacer', status: 'FIT', note: '中场绞杀，限制 Enzo 是关键', confirmed: true },
        { player: 'Youcef Atal', status: 'DOUBT', note: '大腿轻微不适，赛前队检', confirmed: false },
      ],
      rumors: [
        '【更衣室】Belmadi 2019 非洲杯冠军班底，赛前称「对阿根廷无恐惧，有大赛 DNA」',
        '【战术】4-2-3-1 低位 + Mahrez 反击',
        '2014 世界杯逼德国加时是心理资产',
        '若先破门，5-4-1 收缩执行概率高',
      ],
    },
  },
  m20: {
    home: {
      injuries: [
        { player: 'David Alaba', status: 'FIT', note: '十字韧带伤愈复出，防线+出球核心', confirmed: true },
        { player: 'Marko Arnautović', status: 'FIT', note: '经验支点预计首发', confirmed: true },
        { player: 'Marcel Sabitzer', status: 'FIT', note: 'Rangnick 体系中场引擎', confirmed: true },
      ],
      rumors: [
        '【更衣室】Rangnick 高位体系磨合完成，Alaba 队长回归提振防线沟通',
        '【战术】4-2-3-1 高位压迫，Alaba 出球发起点',
        '对约旦预计全场压制，先破门则 Jordan 崩盘概率高',
        'Sabitzer/Seiwald 双闸覆盖 Al-Tamari 反击',
      ],
    },
    away: {
      injuries: [
        { player: 'Musa Al-Tamari', status: 'FIT', note: '亚洲杯最佳球员，反击核心', confirmed: true },
        { player: 'Yazan Al-Naimat', status: 'FIT', note: '锋线支点，定位球威胁', confirmed: true },
      ],
      rumors: [
        '【更衣室】2024 亚洲杯亚军信心仍在，Ammouta 强调「定位球+纪律」',
        '【战术】4-4-2 低位 + Al-Tamari 右路速度',
        '对 Rangnick 压迫出球困难，60\' 后体能是考验',
        '若意外领先，低位+5 后卫收缩是首选',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  const m = TEAM_NEWS[matchId];
  if (!m) return { injuries: [], rumors: [] };
  return m[side] || { injuries: [], rumors: [] };
}

module.exports = { TEAM_NEWS, getTeamNews };
