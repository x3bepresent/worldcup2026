/** Day 14 核心球员 — m51/m52/m49/m50/m53/m54 · A/B/C 组末轮（各队 3 人） */

const STARS = {
  m51: {
    home: [
      {
        name: 'Granit Xhaka',
        pos: 'CM',
        club: 'Sunderland',
        stats: '4-1 波黑 · B 组核心',
        rating: 8.4,
        desc: '各 4 分榜首对话 · 节拍器对位 Eustáquio，Yakin 战术轴心',
      },
      {
        name: 'Breel Embolo',
        pos: 'ST',
        club: 'Monaco',
        stats: '支点+速度 · 破 Marsch 高位',
        rating: 8.2,
        desc: '摩纳哥前锋 · 对 Miller/Cornelius 防空，肋部与 David 对位是破局关键',
      },
      {
        name: 'Manuel Akanji',
        pos: 'CB',
        club: 'Manchester City',
        stats: '曼城中卫 · 防线领袖',
        rating: 8.1,
        desc: '防空 David 头球 · 出球发起压制，对加拿大高位须零失误',
      },
    ],
    away: [
      {
        name: 'Alphonso Davies',
        pos: 'LB',
        club: 'Bayern Munich',
        stats: '东道主末轮 · 6-0 卡塔尔',
        rating: 8.8,
        desc: 'BC Place 主场 · 左翼速度破局，对 Widmer/Rodríguez 是全场最大变量',
      },
      {
        name: 'Jonathan David',
        pos: 'ST',
        club: 'Lille',
        stats: '锋线终结 · 里尔射手',
        rating: 8.5,
        desc: '6-0 卡塔尔后信心足 · 对 Akanji/Schär 一对一，Marsch 破局双核之一',
      },
      {
        name: 'Stephen Eustáquio',
        pos: 'CM',
        club: 'Porto',
        stats: '波尔图节拍 · 对 Xhaka',
        rating: 8.0,
        desc: '中场枢纽 · 限制 Xhaka 前插与瑞士肋部渗透，高位压迫出球点',
      },
    ],
  },

  m52: {
    home: [
      {
        name: 'Edin Džeko',
        pos: 'ST',
        club: 'Roma',
        stats: '1 分须胜 · 定位球威胁',
        rating: 8.0,
        desc: '罗马老将 · 1 分等于出局，定位球+支点是唯一冷门路径',
      },
      {
        name: 'Miralem Pjanić',
        pos: 'CM',
        club: 'Barcelona',
        stats: '节拍器 · 5-4-1 出球',
        rating: 7.8,
        desc: '中场组织轴心 · 破 Qatar 铁桶的肋部最后一传',
      },
      {
        name: 'Sead Kolašinac',
        pos: 'LB',
        club: 'Marseille',
        stats: '左路宽度 · 定位球',
        rating: 7.5,
        desc: '左后卫插上 · 宽度与定位球是波黑强攻关键',
      },
    ],
    away: [
      {
        name: 'Akram Afif',
        pos: 'LW',
        club: 'Al Sadd',
        stats: '肋部渗透 · Sanchez 核心',
        rating: 7.8,
        desc: '0-6 加拿大后 1 分垫底 · 肋部是唯一破局点，对 Kršić 屏障',
      },
      {
        name: 'Almoez Ali',
        pos: 'ST',
        club: 'Al Duhail',
        stats: '亚洲杯金靴 · 定位球',
        rating: 7.6,
        desc: '锋线单箭 · 定位球偷分，对 Hadžikadunić 防空',
      },
      {
        name: 'Hassan Al-Haydos',
        pos: 'CM',
        club: 'Al Sadd',
        stats: '队长 · 远射+定位球',
        rating: 7.3,
        desc: '远射威胁 · 5-4-1 铁桶下定位球是最大冷门变量',
      },
    ],
  },

  m49: {
    home: [
      {
        name: 'Scott McTominay',
        pos: 'CM',
        club: 'Napoli',
        stats: '3 分须胜 · 屏障+远射',
        rating: 8.2,
        desc: '那不勒斯中场 · Clarke 5-4-1 屏障轴心，对 Guimarães/Paquetá 绞杀',
      },
      {
        name: 'John McGinn',
        pos: 'CM',
        club: 'Aston Villa',
        stats: '1-0 海地功臣 · 肋部',
        rating: 8.0,
        desc: '维拉队长 · 肋部渗透与远射，对巴西压上时的反击接应',
      },
      {
        name: 'Che Adams',
        pos: 'ST',
        club: 'Torino',
        stats: '前锋支点 · 定位球',
        rating: 7.6,
        desc: '定位球威胁 · 对 Marquinhos 防空，苏格兰低位唯一前场支点',
      },
    ],
    away: [
      {
        name: 'Vinícius Jr',
        pos: 'LW',
        club: 'Real Madrid',
        stats: '4 分领跑 · 左翼速度',
        rating: 9.0,
        desc: '皇马边锋 · 深盘热门核心，对 Tierney/Ralston 速度破局',
      },
      {
        name: 'Rodrygo',
        pos: 'RW',
        club: 'Real Madrid',
        stats: '肋部+终结 · 轮换灵活',
        rating: 8.5,
        desc: '皇马前锋 · 肋部渗透与禁区内最后一传，破 Clarke 低位关键',
      },
      {
        name: 'Bruno Guimarães',
        pos: 'CDM',
        club: 'Newcastle',
        stats: '纽卡后腰 · 节拍',
        rating: 8.3,
        desc: '破 McTominay 屏障 · 控球发起压制，湿热迈阿密下体能分配关键',
      },
    ],
  },

  m50: {
    home: [
      {
        name: 'Achraf Hakimi',
        pos: 'RB',
        club: 'Paris Saint-Germain',
        stats: '4 分领跑 · 宽度穿盘',
        rating: 8.7,
        desc: '巴黎右卫 · 插上+速度，对海地低位宽度破局是战术轴心',
      },
      {
        name: 'Hakim Ziyech',
        pos: 'RW',
        club: 'Galatasaray',
        stats: '左脚远射 · 定位球',
        rating: 8.3,
        desc: '加拉塔萨雷边锋 · 远射+定位球，破海地 5-4-1 的关键',
      },
      {
        name: 'Youssef En-Nesyri',
        pos: 'ST',
        club: 'Sevilla',
        stats: '1-0 苏格兰功臣 · 支点',
        rating: 8.1,
        desc: '塞维利亚中锋 · 支点+头球，对 Placide 门线须早早破门',
      },
    ],
    away: [
      {
        name: 'Derrick Etienne Jr',
        pos: 'FW',
        club: 'Columbus Crew',
        stats: '锋线速度 · 反击',
        rating: 7.0,
        desc: '0 分须尊严 · 反击唯一威胁，对 Hakimi 插上侧须回追',
      },
      {
        name: 'Zachary Brault-Guillard',
        pos: 'RB',
        club: 'Montpellier',
        stats: '右后卫 · 对 Hakimi',
        rating: 6.8,
        desc: '对 Hakimi 速度的一对一 · 5-4-1 低位防守纪律关键',
      },
      {
        name: 'Johny Placide',
        pos: 'GK',
        club: 'AEL Limassol',
        stats: '一门 · 0-3 巴西后',
        rating: 7.2,
        desc: '对摩洛哥围攻须重复对苏格兰表现 · 定位球防守是冷门点',
      },
    ],
  },

  m53: {
    home: [
      {
        name: 'Patrik Schick',
        pos: 'ST',
        club: 'Bayer Leverkusen',
        stats: '1 分须胜 · 定位球',
        rating: 8.4,
        desc: '勒沃库森射手 · Azteca 2240m 须上半场破局，定位球是唯一路径',
      },
      {
        name: 'Tomáš Souček',
        pos: 'CDM',
        club: 'West Ham',
        stats: '西汉姆屏障 · 绞杀',
        rating: 8.1,
        desc: '限制 Lozano/Guardado 连线 · 高原 70\' 后体能是瓶颈',
      },
      {
        name: 'Antonín Barák',
        pos: 'CM',
        club: 'Fiorentina',
        stats: '佛罗伦萨 · 肋部渗透',
        rating: 7.9,
        desc: '肋部渗透 · 对 Álvarez 屏障，破墨西哥轮换阵容的关键',
      },
    ],
    away: [
      {
        name: 'Raúl Jiménez',
        pos: 'ST',
        club: 'Fulham',
        stats: '6 分已出线 · Azteca 支点',
        rating: 8.5,
        desc: '富勒姆前锋 · 高原主场支点，对 Brabec/Holes 防空',
      },
      {
        name: 'Hirving Lozano',
        pos: 'LW',
        club: 'PSV',
        stats: '左翼速度 · Azteca 宠儿',
        rating: 8.4,
        desc: '埃因霍温边锋 · 左翼速度破局，Schick 侧须回追',
      },
      {
        name: 'Edson Álvarez',
        pos: 'CDM',
        club: 'West Ham',
        stats: '西汉姆后腰 · 屏障',
        rating: 8.2,
        desc: '绞杀 Schick 背身与 Barák 肋部 · 6 分领跑控场轴心',
      },
    ],
  },

  m54: {
    home: [
      {
        name: 'Teboho Mokoena',
        pos: 'CB',
        club: 'Lyon',
        stats: '里昂中卫 · 1 分须抢分',
        rating: 7.8,
        desc: '防线领袖 · 对 Son/Hwang 速度的一对一，低位防空关键',
      },
      {
        name: 'Percy Tau',
        pos: 'RW',
        club: 'Al Ahly',
        stats: '阿尔阿赫利 · 反击速度',
        rating: 7.6,
        desc: '反击轴心 · 对 Kim Min-jae 侧速度，Broos 战术核心',
      },
      {
        name: 'Ronwen Williams',
        pos: 'GK',
        club: 'Mamelodi Sundowns',
        stats: '一门 · 1-1 捷克',
        rating: 7.5,
        desc: '对 Son 远射/定位球须警惕 · 1-1 捷克后信心足',
      },
    ],
    away: [
      {
        name: 'Son Heung-min',
        pos: 'LW',
        club: 'Tottenham',
        stats: '3 分须胜 · 队长',
        rating: 8.9,
        desc: '热刺队长 · 肋部+远射，Klinsmann 战术轴心，须带队全取 3 分',
      },
      {
        name: 'Lee Kang-in',
        pos: 'AM',
        club: 'Paris Saint-Germain',
        stats: '2-1 捷克功臣 · 节拍',
        rating: 8.6,
        desc: '巴黎中场 · 肋部渗透与最后一传，对 Sithole 屏障',
      },
      {
        name: 'Kim Min-jae',
        pos: 'CB',
        club: 'Bayern Munich',
        stats: '拜仁中卫 · 防线领袖',
        rating: 8.4,
        desc: '防空 Makgopa 定位球 · 出球发起压制，对 Tau 反击须保持防线高度',
      },
    ],
  },
};

function withStarCompat(stars) {
  const list = stars.map(s => ({ ...s }));
  return { stars: list, star: { ...list[0] } };
}

function getTeamStars(matchId, side) {
  const list = STARS[matchId]?.[side];
  if (!list?.length) return { stars: [], star: null };
  return withStarCompat(list);
}

module.exports = { STARS, getTeamStars };
