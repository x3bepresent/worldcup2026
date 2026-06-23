/** Day 13 核心球员 — m47/m45/m46/m48 · K/L 组第2轮（各队 3 人） */

const STARS = {
  m47: {
    home: [
      {
        name: 'Cristiano Ronaldo',
        pos: 'ST',
        club: 'Al-Nassr',
        stats: '揭幕战 0 射正 · 大赛 22 球',
        rating: 8.8,
        desc: '1-1 刚果后须全取 3 分；破局压力与终结效率是本场最大变量',
      },
      {
        name: 'Bruno Fernandes',
        pos: 'AM',
        club: 'Manchester United',
        stats: '肋部关键传球 · 定位球主罚',
        rating: 8.5,
        desc: 'B费 节拍器 · 对 Katanec 5-4-1 铁桶的肋部渗透与最后一传是关键',
      },
      {
        name: 'Rafael Leão',
        pos: 'LW',
        club: 'AC Milan',
        stats: '速度型边锋 · 边路 1v1',
        rating: 8.3,
        desc: '左翼爆点 · 1-1 后 Martínez 或比首轮更靠前，与 C罗 形成宽度破局',
      },
    ],
    away: [
      {
        name: 'Eldor Shomurodov',
        pos: 'ST',
        club: 'Roma',
        stats: '1-3 哥伦比亚 · 锋线单箭',
        rating: 7.8,
        desc: '0 分垫底 · 反击与定位球唯一威胁，守 0-1 进 70\' 即是胜利',
      },
      {
        name: 'Abdukodir Khusanov',
        pos: 'CB',
        club: 'Manchester City',
        stats: '曼城租将 · 中卫领袖',
        rating: 7.4,
        desc: '对 C罗/Leão 速度的一对一 · 5-4-1 铁桶的防空与出球轴心',
      },
      {
        name: 'Jasurbek Hamrobekov',
        pos: 'CDM',
        club: 'Pakhtakor',
        stats: '后腰屏障 · 绞杀组织',
        rating: 7.2,
        desc: '双闸之一 · 限制 B费 肋部拿球，低位防守纪律是生存之本',
      },
    ],
  },

  m45: {
    home: [
      {
        name: 'Jude Bellingham',
        pos: 'AM',
        club: 'Real Madrid',
        stats: '4-2 克罗地亚 · 47\'+85\' 参与进球',
        rating: 9.0,
        desc: 'L 组核心 · 伪 10 对位 Partey 屏障，榜首战须延续对克罗地亚的进攻状态',
      },
      {
        name: 'Harry Kane',
        pos: 'ST',
        club: 'Bayern Munich',
        stats: '12\'(点)+42\' 双响 · 队长',
        rating: 8.9,
        desc: '锋线支点+终结 · 点球与运动战双响后信心足，对加纳低位须早早破门',
      },
      {
        name: 'Bukayo Saka',
        pos: 'RW',
        club: 'Arsenal',
        stats: '右路宽度 · 肋部串联',
        rating: 8.6,
        desc: '右翼宽度关键 · 与 Kudus 侧对位，Tuchel 4-2-3-1 破密集的重要出球点',
      },
    ],
    away: [
      {
        name: 'Mohammed Kudus',
        pos: 'RW',
        club: 'West Ham',
        stats: '英超状态 · L 组最大反击威胁',
        rating: 8.2,
        desc: '1-0 巴拿马后同分榜首 · 对 Tuchel 高位逼抢的反击轴心，Addo 战术核心',
      },
      {
        name: 'Thomas Partey',
        pos: 'CDM',
        club: 'Arsenal',
        stats: '后腰屏障 · 绞杀+出球',
        rating: 7.9,
        desc: '中场双闸 · 限制 Bellingham 肋部与 Kane 背身，低位防守的枢纽',
      },
      {
        name: 'Caleb Yirenkyi',
        pos: 'MF',
        club: 'Hammarby',
        stats: '补时绝杀巴拿马',
        rating: 7.5,
        desc: '揭幕战 90+ 分钟破门功臣 · 替补/轮换奇兵，定位球与后段冲击是冷门点',
      },
    ],
  },

  m46: {
    home: [
      {
        name: 'José Fajardo',
        pos: 'ST',
        club: 'Plaza Amador',
        stats: '定位球威胁 · 锋线支点',
        rating: 7.0,
        desc: '0 分须抢分 · 5-4-1 铁桶下定位球偷分是唯一冷门路径',
      },
      {
        name: 'Adalberto Carrasquilla',
        pos: 'CM',
        club: 'Houston Dynamo',
        stats: 'MLS 核心 · 赛前队检',
        rating: 6.8,
        desc: '中场组织存疑（轻微拉伤）· 若首发则是破 Dalić 压迫的出球点',
      },
      {
        name: 'Ismael Díaz',
        pos: 'LW',
        club: 'FC Tulsa',
        stats: '边路速度 · 反击接应',
        rating: 6.9,
        desc: '左路速度点 · 对克罗地亚压上时的反击接应，MLS 班底体能分配关键',
      },
    ],
    away: [
      {
        name: 'Luka Modrić',
        pos: 'CM',
        club: 'Real Madrid',
        stats: '最后一届世界杯 · 大赛节拍器',
        rating: 8.4,
        desc: '2-4 英格兰后 0 分被动 · 须带队穿盘，75\' 可能换下是后段变量',
      },
      {
        name: 'Joško Gvardiol',
        pos: 'CB',
        club: 'Manchester City',
        stats: '曼城中卫 · 防线新核',
        rating: 8.2,
        desc: '防空 Fajardo 定位球 · 出球发起压制，对 MLS 班底须零失误',
      },
      {
        name: 'Andrej Kramarić',
        pos: 'ST',
        club: 'Hoffenheim',
        stats: '锋线支点 · 破密集',
        rating: 8.0,
        desc: '中锋做球+终结 · 对巴拿马 5-4-1 的肋部渗透与禁区内最后一传',
      },
    ],
  },

  m48: {
    home: [
      {
        name: 'Luis Díaz',
        pos: 'LW',
        club: 'Liverpool',
        stats: '3-1 乌兹别克破门 · K 组领跑',
        rating: 8.6,
        desc: 'K 组最大威胁 · 左翼宽度对 Wissa 反击侧须回追，宜早破局穿盘',
      },
      {
        name: 'James Rodríguez',
        pos: 'AM',
        club: 'León',
        stats: '节拍器+远射 · 大赛经验',
        rating: 8.3,
        desc: '前腰组织与远射 · 高原夜战破刚果低位的关键，与 Díaz 双核',
      },
      {
        name: 'Jefferson Lerma',
        pos: 'CDM',
        club: 'Crystal Palace',
        stats: '后腰绞杀 · 屏障',
        rating: 7.8,
        desc: '限制 Wissa 背身与反击连线 · 3-1 乌兹别克后防线稳固轴心',
      },
    ],
    away: [
      {
        name: 'Yoane Wissa',
        pos: 'ST',
        club: 'Brentford',
        stats: '45+5\' 扳平葡萄牙 · 英超射手',
        rating: 7.8,
        desc: '1-1 葡萄牙历史性扳平功臣 · 锋线唯一世界级威胁，速度+跑位是冷门核心',
      },
      {
        name: 'Chancel Mbemba',
        pos: 'CB',
        club: 'Marseille',
        stats: '马赛中卫 · 防线领袖',
        rating: 7.5,
        desc: '对 Díaz/James 宽度的一对一 · 5-4-1 低位防空与出球',
      },
      {
        name: 'Théo Bongonda',
        pos: 'RW',
        club: 'Anorthosis',
        stats: '边路速度 · Wissa 接应',
        rating: 7.2,
        desc: '右路反击速度点 · 与 Wissa 组成转换双箭，定位球是非洲球队传统武器',
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
