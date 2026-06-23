/** Day 13 injuries & locker room — m47/m45/m46/m48 · K/L 组第2轮（6/24 北京） */

const TEAM_NEWS = {
  m47: {
    home: {
      injuries: [
        { player: 'Cristiano Ronaldo', status: 'FIT', note: '1-1 刚果 0 射正后压力上升 · 预计首发 ST · Martínez 称「须更早进入状态」', confirmed: true },
        { player: 'Bruno Fernandes', status: 'FIT', note: 'B费 节拍器 · 对乌兹别克铁桶肋部渗透是关键', confirmed: true },
        { player: 'Rúben Dias', status: 'FIT', note: '曼城中卫 · 防线领袖 · 须防 Shomurodov 反击', confirmed: true },
        { player: 'Rafael Leão', status: 'FIT', note: '米兰边锋 · 左翼速度破局点 · 1-1 后或比首轮更靠前', confirmed: true },
        { player: 'João Félix', status: 'FIT', note: '二前锋/边路灵活位 · 破密集防守轮换选项', confirmed: true },
        { player: 'Vitinha', status: 'FIT', note: '巴黎中场 · 控球节拍 · 对弱队须主导球权', confirmed: true },
        { player: 'Diogo Costa', status: 'FIT', note: '一门 · 对 Shomurodov 反击须保持防线高度', confirmed: true },
      ],
      rumors: [
        'Martínez（赛前）：「1-1 不可接受结果；对乌兹别克必须 3 分，C罗+B费 要更早破局」',
        '【更衣室】1-1 刚果后媒体曝「C罗球迷质疑 Neves 不传球」；Martínez 公开力挺 B费/Neves 分工',
        'ESPN 预测 4-3-3：Costa; Dalot, Pepe, Dias, Mendes; Palhinha, Vitinha, B. Fernandes; Leão, Ronaldo, Félix',
        'K 组 1 分被动——哥伦比亚 3 分领跑；本场再平则出线形势急转',
        '休斯顿 32°C 夏夜 · Martínez 训练强调 hydration 与早段破局',
        'Jalal Jayed 摩洛哥主裁 · 对 C罗 禁区内对抗与拖延时间尺度受关注',
      ],
    },
    away: {
      injuries: [
        { player: 'Eldor Shomurodov', status: 'FIT', note: '罗马射手 · 锋线唯一世界级威胁 · 反击轴心', confirmed: true },
        { player: 'Odilbek Abdullaev', status: 'FIT', note: '中场节拍 · 5-4-1 出球点', confirmed: true },
        { player: 'Utkirbek Nafalov', status: 'FIT', note: '一门 · 对葡萄牙围攻须重复对哥伦比亚表现', confirmed: true },
        { player: 'Abdukodir Khusanov', status: 'FIT', note: '曼城租将中卫 · 对 C罗/Leão 速度的一对一', confirmed: true },
        { player: 'Jasurbek Hamrobekov', status: 'FIT', note: '后腰屏障 · 绞杀 B费 肋部', confirmed: true },
        { player: 'Otabek Shukurov', status: 'DOUBT', note: '首轮后轻微肌肉疲劳 · 仍可能进入轮换名单', confirmed: false },
      ],
      rumors: [
        'Katanec（赛前）：「对葡萄牙不是对哥伦比亚——我们会更低位，但亚洲杯四强经验仍在」',
        '预计 5-4-1/5-3-2 极深低位 · Shomurodov 留前场反击 · Hamrobekov 双闸',
        '1-3 哥伦比亚后更衣室士气未崩；Katanec 强调「对葡萄牙拿 1 分是巨大成功」',
        '全队仍以本土联赛球员为主 · 硬实力差距大但低位纪律是生存之本',
        '塔什干球迷关注时区（北京时间 01:00 = 当地 22:00）· 全队适应良好',
      ],
    },
  },

  m45: {
    home: {
      injuries: [
        { player: 'Jude Bellingham', status: 'FIT', note: '4-2 克罗地亚双响后 L 组核心 · 伪 10 预计首发', confirmed: true },
        { player: 'Harry Kane', status: 'FIT', note: '队长 · 点球+运动战双响 · 锋线支点', confirmed: true },
        { player: 'Bukayo Saka', status: 'FIT', note: '阿森纳右翼 · 宽度关键 · 对 Kudus 侧对位', confirmed: true },
        { player: 'John Stones', status: 'DOUBT', note: '大腿轻微不适 · 赛前队检 · Guehi 待命', confirmed: false },
        { player: 'Phil Foden', status: 'FIT', note: '曼城攻击手 · 肋部渗透 · 轮换/首发灵活', confirmed: true },
        { player: 'Declan Rice', status: 'FIT', note: '后腰屏障 · 限制 Kudus/Partey 连线', confirmed: true },
        { player: 'Jordan Pickford', status: 'FIT', note: '一门 · 对加纳反击须保持防线深度', confirmed: true },
      ],
      rumors: [
        'Tuchel（赛前）：「4-2 只是开始；对加纳须全取 3 分巩固榜首」',
        '【更衣室】Bellingham 4-2 后称「半场 2-2 提醒我们大赛无轻松局」；Kane 点球+运动战双响提振士气',
        'BBC 预测 4-2-3-1：Pickford; Walker, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, B. White; Kane',
        'L 组榜首对话——加纳 1-0 巴拿马后与英格兰同分；平局对双方均可接受但英格兰更须 3 分',
        'Gillette 波士顿夏夜 · Tuchel 提醒定位球与转换犯规',
        'Said Martinez 洪都拉斯主裁 · 已执法卡塔尔 1-1 瑞士（3 黄 1 点）',
      ],
    },
    away: {
      injuries: [
        { player: 'Mohammed Kudus', status: 'FIT', note: '西汉姆边锋 · L 组最大反击威胁 · Addo 战术轴心', confirmed: true },
        { player: 'Thomas Partey', status: 'FIT', note: '中场屏障 · 绞杀 Bellingham 肋部', confirmed: true },
        { player: 'André Ayew', status: 'FIT', note: '队长 · 经验前锋 · 定位球威胁', confirmed: true },
        { player: 'Caleb Yirenkyi', status: 'FIT', note: '补时绝杀巴拿马功臣 · 替补/轮换奇兵', confirmed: true },
        { player: 'Jordan Ayew', status: 'FIT', note: '锋线宽度 · 对 Walker 速度的一对一', confirmed: true },
        { player: 'Lawrence Ati-Zigi', status: 'FIT', note: '一门 · 对 Kane/Saka 须保持防线高度', confirmed: true },
      ],
      rumors: [
        'Addo（赛前）：「英格兰很强，但 2022 非洲球队不怕他们；Kudus 是我们的武器」',
        '预计 4-5-1/4-4-2 低位 · Kudus 右翼反击 · Partey 双闸',
        '1-0 巴拿马补时绝杀后更衣室士气高涨；Addo 强调「对英格兰拿 1 分是巨大成功」',
        'Kudus 英超状态是最大资产 · 对 Tuchel 高位逼抢体能分配是关键',
        'Said Martinez 执法 · Addo 提醒球员注意转换犯规与模拟接触',
      ],
    },
  },

  m46: {
    home: {
      injuries: [
        { player: 'José Fajardo', status: 'FIT', note: '锋线支点 · 定位球唯一威胁 · 0 分须抢分', confirmed: true },
        { player: 'Adalberto Carrasquilla', status: 'DOUBT', note: '中场轻微拉伤 · 赛前队检 · 首轮后仍未完全恢复', confirmed: false },
        { player: 'Michael Amir Murillo', status: 'FIT', note: '右后卫 · 对 Perišić 宽度的一对一', confirmed: true },
        { player: 'Jaime Penedo', status: 'FIT', note: '一门 · 对 Modrić 远射/定位球须警惕', confirmed: true },
        { player: 'Ismael Díaz', status: 'FIT', note: '锋线速度点 · 反击接应', confirmed: true },
      ],
      rumors: [
        'Christiansen（赛前）：「0 分但补时只差一球；对克罗地亚 5-4-1 是生存，Fajardo 定位球是武器」',
        '【更衣室】补时输给加纳后球员承认「最后 5 分钟是教训」；训练强调定位球与拖延节奏',
        'FotMob 预测 4-4-2 低位：Mosquera; Murillo, Escobar, Cummings; Anderson, Godoy; Fajardo, Bárcenas, Rodríguez; Ismael Díaz',
        '硬实力与克罗地亚差距大 · MLS 班底防守纪律是资产',
        '多伦多 22°C 凉爽 · 利于 90 分钟低位防守',
        'Pierre Atcho 加蓬主裁 · 已执法挪威 3-2 伊拉克（本届首场）',
      ],
    },
    away: {
      injuries: [
        { player: 'Luka Modrić', status: 'FIT', note: '最后一届世界杯 · 节拍器预计首发 · 75\' 可能换下', confirmed: true },
        { player: 'Joško Gvardiol', status: 'FIT', note: '曼城中卫 · 防线新核 · 防空 Fajardo 定位球', confirmed: true },
        { player: 'Mateo Kovačić', status: 'FIT', note: '中场轮换 · Modrić 后手接替', confirmed: true },
        { player: 'Ivan Perišić', status: 'FIT', note: '左路宽度 · 对 Murillo 侧突破', confirmed: true },
        { player: 'Andrej Kramarić', status: 'FIT', note: '锋线支点 · 破密集关键', confirmed: true },
        { player: 'Dominik Livaković', status: 'FIT', note: '一门 · 2-4 英格兰后须零封开局', confirmed: true },
      ],
      rumors: [
        'Dalić（赛前）：「2-4 英格兰半场对攻证明进攻可以；对巴拿马必须 3 分，Modrić 仍是核心」',
        '【更衣室】2-4 后 Dalić 称「过程有亮点结果不够」；Baturina/Musa 半场扳平提振进攻信心',
        'FotMob 预测 4-3-3：Livaković; Juranović, Gvardiol, Šutalo, Sosa; Modrić, Brozović; Kovačić, Perišić, Rebić; Kramarić',
        '0 分被动 · 巴拿马是「必须拿下的 3 分」；Modrić 75\' 换下是后段体能变量',
        'Pierre Atcho 执法 · Dalić 提醒球员注意拖延时间与战术犯规',
      ],
    },
  },

  m48: {
    home: {
      injuries: [
        { player: 'Luis Díaz', status: 'FIT', note: '利物浦边锋 · K 组最大威胁 · 3-1 乌兹别克破门', confirmed: true },
        { player: 'James Rodríguez', status: 'FIT', note: '节拍器+远射 · 预计首发 · 高原夜战关键', confirmed: true },
        { player: 'Jefferson Lerma', status: 'FIT', note: '水晶宫后腰 · 绞杀 Wissa 连线', confirmed: true },
        { player: 'Rafael Santos Borré', status: 'FIT', note: '中锋支点 · 定位球头球 · 破刚果低位', confirmed: true },
        { player: 'Santiago Arias', status: 'FIT', note: '右后卫 · 宽度与定位球', confirmed: true },
        { player: 'David Ospina', status: 'FIT', note: '一门 · 大赛经验 · 对 Wissa 反击', confirmed: true },
      ],
      rumors: [
        'Lorenzo（赛前）：「K 组领跑须穿盘；Díaz/James 宽度对 Wissa 反击是战术轴心」',
        '【更衣室】3-1 乌兹别克后士气高涨；Lorenzo 称「高原夜战宜早破局，不拖入后段体能战」',
        '预计 4-2-3-1：Ospina; Arias, Sánchez, Sánchez, Mojica; Lerma, Barrios; Díaz, James, Cuadrado; Borré',
        'K 组 3 分领跑 · 平局仍可接受但 3 分可基本锁定出线',
        '瓜达拉哈拉 1560m 海拔 · 刚果金后段体能或成变量',
        'Maurizio Mariani 意大利主裁 · 对 Díaz 肋部突破与 Wissa 反击犯规尺度受关注',
      ],
    },
    away: {
      injuries: [
        { player: 'Yoane Wissa', status: 'FIT', note: '布伦特福德射手 · 45+5\' 扳平葡萄牙 · 锋线唯一世界级威胁', confirmed: true },
        { player: 'Chancel Mbemba', status: 'FIT', note: '马赛中卫 · 防线领袖 · 对 Díaz 速度的一对一', confirmed: true },
        { player: 'Théo Bongonda', status: 'FIT', note: '边路速度 · Wissa 反击接应', confirmed: true },
        { player: 'Arnaud Zombo Anguissa', status: 'FIT', note: '中场屏障 · 绞杀 James 前插', confirmed: true },
        { player: 'Lionel Mpasi', status: 'FIT', note: '一门 · 1-1 葡萄牙表现获赞', confirmed: true },
      ],
      rumors: [
        'Desabre（赛前）：「1-1 葡萄牙是历史时刻；对哥伦比亚我们不怕，Wissa 是我们的武器」',
        '预计 4-5-1 低位 · Wissa 单箭 · Mbemba 防空 Díaz/James 宽度',
        '【更衣室】1-1 葡萄牙后全队信心暴涨；Desabre 强调「对哥伦比亚拿 1 分仍是成功」',
        'Wissa 对位哥伦比亚防线是冷门唯一路径 · 定位球是非洲球队传统破局手段',
        '高原夜战 1560m · Desabre 训练增加后段体能分配演练',
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
