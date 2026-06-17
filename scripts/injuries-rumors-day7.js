/** Day 7 injuries & locker room — m21–m24（2026-06-18 赛前更新） */

const TEAM_NEWS = {
  m23: {
    home: {
      injuries: [
        { player: 'Cristiano Ronaldo', status: 'FIT', note: '最后一届世界杯，K组揭幕预计首发', confirmed: true },
        { player: 'Bruno Fernandes', status: 'FIT', note: '曼联队长，B费 节拍器预计首发', confirmed: true },
        { player: 'Rúben Dias', status: 'FIT', note: '曼城中卫，防线领袖', confirmed: true },
        { player: 'Rafael Leão', status: 'FIT', note: '米兰边锋，左翼速度点', confirmed: true },
      ],
      rumors: [
        '【更衣室】Martínez 称「C罗最后一届无额外压力」，葡萄牙 26 人大名单无内讧',
        '【战术】4-3-3：C罗 单锋 + B费 前腰 + Leão/Félix 宽度',
        'C罗 70\' 可能换下保体能，替补席深度仍是 K 组最强',
        '对刚果金预计全场压制，Wissa 反击是唯一变数',
      ],
    },
    away: {
      injuries: [
        { player: 'Yoane Wissa', status: 'FIT', note: '布伦特福德射手，锋线唯一世界级威胁', confirmed: true },
        { player: 'Chancel Mbemba', status: 'FIT', note: '马赛中卫，防线领袖', confirmed: true },
      ],
      rumors: [
        '【战术】4-5-1 低位 + Wissa 单箭，Desabre 强调「90 分钟纪律」',
        '【更衣室】2019 非洲杯季军经验，大赛防守纪律是资产',
        'Wissa 对位 Dias/Pepe 是冷门唯一路径',
        '替补：Bakambu 等攻击手 60\' 后待命',
      ],
    },
  },
  m22: {
    home: {
      injuries: [
        { player: 'Jude Bellingham', status: 'FIT', note: '皇马中场，L组核心预计首发', confirmed: true },
        { player: 'Harry Kane', status: 'FIT', note: '队长 · 锋线支点', confirmed: true },
        { player: 'Bukayo Saka', status: 'FIT', note: '阿森纳右翼，宽度关键', confirmed: true },
        { player: 'John Stones', status: 'DOUBT', note: '大腿轻微不适，赛前队检', confirmed: false },
      ],
      rumors: [
        '【更衣室】Tuchel 称「2018 半决赛是动力不是包袱」',
        '【战术】4-2-3-1：Bellingham 伪 10 + Saka 宽度 + Kane 支点',
        '对克罗地亚 Modrić 75\' 可能换下是后段机会',
        '大赛心理仍是英格兰变量，但 Tuchel 欧冠经验是资产',
      ],
    },
    away: {
      injuries: [
        { player: 'Luka Modrić', status: 'FIT', note: '最后一届世界杯，节拍器预计首发', confirmed: true },
        { player: 'Joško Gvardiol', status: 'FIT', note: '曼城中卫，防线新核', confirmed: true },
        { player: 'Bruno Petković', status: 'OUT', note: '未入选 26 人大名单', confirmed: true },
      ],
      rumors: [
        '【战术】4-3-3：Modrić 节拍 + Perišić 宽度 + Kramarić 支点',
        '【更衣室】2018 胜英格兰是心理资产，Dalić 强调「大赛慢热后段强」',
        'Modrić 75\' 可能换下，Kovačić 待命',
        '守 0–1 进入 70\' 对克罗地亚是现实目标',
      ],
    },
  },
  m21: {
    home: {
      injuries: [
        { player: 'Mohammed Kudus', status: 'FIT', note: '西汉姆边锋，L组最大威胁', confirmed: true },
        { player: 'Thomas Partey', status: 'FIT', note: '中场屏障，绞杀+出球', confirmed: true },
        { player: 'André Ayew', status: 'FIT', note: '队长 · 经验前锋', confirmed: true },
      ],
      rumors: [
        '【更衣室】Addo 赛前动员强调「首战 3 分不容有失」',
        '【战术】4-2-3-1：Kudus 右翼 + Partey 后腰 + Semenyo 支点',
        '加纳大赛慢热有前例，对巴拿马必须早破局',
        'Kudus 对位巴拿马 MLS 班底是碾压局',
      ],
    },
    away: {
      injuries: [
        { player: 'José Fajardo', status: 'FIT', note: '锋线支点，定位球威胁', confirmed: true },
        { player: 'Adalberto Carrasquilla', status: 'DOUBT', note: '中场轻微拉伤，赛前队检', confirmed: false },
      ],
      rumors: [
        '【战术】4-4-2 低位，Fajardo 定位球是唯一威胁',
        '【更衣室】Christiansen 强调「90 分钟纪律」，巴拿马无大牌内讧',
        '对 Kudus 守 0–1 求 1 分是现实目标',
        '硬实力与加纳差距大，但中北美大赛防守纪律是资产',
      ],
    },
  },
  m24: {
    home: {
      injuries: [
        { player: 'Eldor Shomurodov', status: 'FIT', note: '罗马射手，锋线核心', confirmed: true },
        { player: 'Abdulla Abdullaev', status: 'FIT', note: '中场节拍器', confirmed: true },
      ],
      rumors: [
        '【战术】4-2-3-1 低位，Shomurodov 单箭 + Azteca 高原适应',
        '【更衣室】Katanec 称「高原是我们的优势」，亚洲杯四强经验',
        '对 Díaz/James 守 0–1 求 1 分是现实目标',
        '2240m 海拔对哥伦比亚后段体能是隐性变量',
      ],
    },
    away: {
      injuries: [
        { player: 'Luis Díaz', status: 'FIT', note: '利物浦边锋，K组最大威胁', confirmed: true },
        { player: 'James Rodríguez', status: 'FIT', note: '节拍器+远射，预计首发', confirmed: true },
        { player: 'Jefferson Lerma', status: 'FIT', note: '水晶宫后腰，绞杀关键', confirmed: true },
      ],
      rumors: [
        '【更衣室】Lorenzo 称「高原夜战宜早破局」，2024 美洲杯亚军信心',
        '【战术】4-2-3-1：Díaz 左翼 + James 前腰 + Borré 支点',
        'Díaz 对位乌兹别克英冠级防线是碾压局',
        '高原 2240m 后段体能分配是哥伦比亚唯一变量',
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
