/** Day 14 injuries & locker room — m51/m52/m49/m50/m53/m54 · A/B/C 组末轮（6/25 北京） */

const TEAM_NEWS = {
  m51: {
    home: {
      injuries: [
        { player: 'Granit Xhaka', status: 'FIT', note: '4-1 波黑后 B 组核心 · 节拍器预计首发 · 对 Davies 侧屏障', confirmed: true },
        { player: 'Manuel Akanji', status: 'FIT', note: '曼城中卫 · 防线领袖 · 防空 David 头球', confirmed: true },
        { player: 'Breel Embolo', status: 'FIT', note: '摩纳哥前锋 · 支点+速度 · 破 Marsch 高位', confirmed: true },
        { player: 'Yann Sommer', status: 'FIT', note: '一门 · 大赛经验 · 对加拿大远射须警惕', confirmed: true },
        { player: 'Fabian Schär', status: 'DOUBT', note: '轻微肌肉疲劳 · 赛前队检 · Elvedi 待命', confirmed: false },
        { player: 'Remo Freuler', status: 'FIT', note: '后腰屏障 · 绞杀 Eustáquio 出球', confirmed: true },
      ],
      rumors: [
        'Yakin（赛前）：「各 4 分榜首对话——平局对双方都可能不够，须主动破局」',
        '【更衣室】4-1 波黑后士气高涨；Yakin 称「加拿大 6-0 卡塔尔证明主场威力，但我们不怕」',
        'TSN 预测 4-2-3-1：Sommer; Widmer, Akanji, Schär, Rodríguez; Xhaka, Freuler; Vargas, Rieder, Embolo; Ndoye',
        'B 组末轮：胜者大概率头名 · 平局则看波黑-卡塔尔赛果',
        '温哥华 18°C 凉爽 · Yakin 训练强调 width 与 Xhaka 前插',
        'Danny Makkelie 荷兰主裁 · 对 Embolo/David 禁区内对抗尺度受关注',
      ],
    },
    away: {
      injuries: [
        { player: 'Alphonso Davies', status: 'FIT', note: '拜仁左卫 · 东道主末轮核心 · 宽度+速度破局', confirmed: true },
        { player: 'Jonathan David', status: 'FIT', note: '里尔射手 · 6-0 卡塔尔后信心足 · 锋线终结', confirmed: true },
        { player: 'Tajon Buchanan', status: 'FIT', note: '布鲁日边锋 · 右路宽度 · 对 Rodríguez 侧', confirmed: true },
        { player: 'Stephen Eustáquio', status: 'FIT', note: '波尔图中场 · 节拍 · 对 Xhaka 一对一', confirmed: true },
        { player: 'Sam Adekugbe', status: 'DOUBT', note: '后卫轻微撞伤 · 仍可能首发', confirmed: false },
        { player: 'Milan Borjan', status: 'FIT', note: '一门 · 对瑞士围攻须重复对卡塔尔表现', confirmed: true },
      ],
      rumors: [
        'Marsch（赛前）：「温哥华是我们的主场——6-0 卡塔尔只是开始，对瑞士须全取 3 分」',
        '【更衣室】6-0 卡塔尔后更衣室士气爆棚；Marsch 强调「Davies+David 是破局双核」',
        '预计 4-3-3 高位：St. Clair; Johnston, Miller, Cornelius; Buchanan, Eustáquio, Osorio; Larin, David, Ahmed',
        '东道主末轮 BC Place · 平局可能仍出线但 Marsch 要头名',
        'Davies 对位 Widmer/Rodríguez 是全场最大战术变量',
      ],
    },
  },

  m52: {
    home: {
      injuries: [
        { player: 'Edin Džeko', status: 'FIT', note: '罗马老将 · 1 分须胜 · 定位球+支点唯一威胁', confirmed: true },
        { player: 'Miralem Pjanić', status: 'FIT', note: '节拍器 · 5-4-1 出球轴心', confirmed: true },
        { player: 'Sead Kolašinac', status: 'FIT', note: '左后卫 · 宽度与定位球', confirmed: true },
        { player: 'Ermedin Demirović', status: 'FIT', note: '斯图加特前锋 · 反击接应', confirmed: true },
        { player: 'Asmir Begović', status: 'FIT', note: '一门 · 经验老将 · 对卡塔尔远射', confirmed: true },
      ],
      rumors: [
        'Petević（赛前）：「1 分等于出局——对卡塔尔必须 3 分，Džeko 定位球是武器」',
        '【更衣室】4-1 负瑞士后球员承认「对加拿大 1-1 若拿 3 分形势不同」；训练强调定位球',
        '预计 4-4-2/4-2-3-1 强攻：Begović; Kolašinac, Hadžikadunić, Baršić; Kršić, Tahirović; Demirović, Džeko',
        'B 组垫底对话 · 胜者仍可能凭净胜球晋级',
        '西雅图 17°C 凉湿 · 利于 90 分钟高强度压迫',
        'Yoshimi Yamashita 日本主裁 · 历史意义场次执法尺度预计偏稳',
      ],
    },
    away: {
      injuries: [
        { player: 'Almoez Ali', status: 'FIT', note: '亚洲杯金靴 · 锋线唯一威胁 · 定位球', confirmed: true },
        { player: 'Akram Afif', status: 'FIT', note: '萨德边锋 · 肋部渗透 · Sanchez 战术核心', confirmed: true },
        { player: 'Hassan Al-Haydos', status: 'FIT', note: '队长 · 远射+定位球', confirmed: true },
        { player: 'Meshaal Barsham', status: 'FIT', note: '一门 · 0-6 加拿大后须零封开局', confirmed: true },
        { player: 'Boualem Khoukhi', status: 'FIT', note: '中卫 · 防空 Džeko 头球', confirmed: true },
      ],
      rumors: [
        'Sánchez（赛前）：「0-6 加拿大是教训——对波黑 5-4-1 铁桶，Afif 肋部是唯一出路」',
        '【更衣室】0-6 后更衣室未崩；Sánchez 强调「拿 1 分仍是成功，但我们要争胜」',
        '预计 5-4-1 极深低位 · Almoez 单箭 · Afif 肋部',
        '硬实力差距大 · 定位球与转换是唯一冷门路径',
        'Yoshimi Yamashita 执法 · Sánchez 提醒球员注意拖延时间与模拟接触',
      ],
    },
  },

  m49: {
    home: {
      injuries: [
        { player: 'Scott McTominay', status: 'FIT', note: '那不勒斯中场 · 3 分须胜 · 屏障+远射', confirmed: true },
        { player: 'John McGinn', status: 'FIT', note: '维拉队长 · 1-0 海地功臣 · 肋部渗透', confirmed: true },
        { player: 'Kieran Tierney', status: 'DOUBT', note: '大腿轻微不适 · 赛前队检 · Ralston 待命', confirmed: false },
        { player: 'Che Adams', status: 'FIT', note: '前锋支点 · 定位球威胁', confirmed: true },
        { player: 'Angus Gunn', status: 'FIT', note: '一门 · 对巴西围攻须保持防线深度', confirmed: true },
      ],
      rumors: [
        'Clarke（赛前）：「3 分须胜——对巴西是巨大挑战，但 McTominay 屏障+定位球是我们的武器」',
        '【更衣室】0-1 摩洛哥后更衣室强调「对海地 1-0 证明能赢，末轮须复制纪律」',
        '预计 5-4-1/5-3-2 低位：Gunn; Tierney, Hanley, Porteous; McGinn, McTominay, Gilmour; Adams, Christie',
        'C 组 3 分被动 · 平局可能出局 · 须抢 3 分',
        '迈阿密 31°C 湿热 · Clarke 训练增加补水与后段体能分配',
        'Slavko Vinčić 斯洛文尼亚主裁 · 对 McTominay 犯规与 Vinícius 速度尺度受关注',
      ],
    },
    away: {
      injuries: [
        { player: 'Vinícius Jr', status: 'FIT', note: '皇马边锋 · 4 分领跑 · 左翼速度破局', confirmed: true },
        { player: 'Rodrygo', status: 'FIT', note: '皇马前锋 · 肋部+终结 · 轮换/首发灵活', confirmed: true },
        { player: 'Raphinha', status: 'FIT', note: '巴萨边锋 · 右路宽度', confirmed: true },
        { player: 'Bruno Guimarães', status: 'FIT', note: '纽卡后腰 · 节拍 · 破 Clarke 低位', confirmed: true },
        { player: 'Marquinhos', status: 'FIT', note: '队长中卫 · 防空 Adams 定位球', confirmed: true },
        { player: 'Alisson', status: 'FIT', note: '一门 · 1-1 摩洛哥后须零失误', confirmed: true },
      ],
      rumors: [
        '安切洛蒂（赛前）：「4 分领跑但苏格兰须抢分会死守——Vinícius 宽度是破局关键」',
        '【更衣室】1-1 摩洛哥后安帅称「过程有亮点」；3-0 海地提振进攻信心',
        '预计 4-2-3-1：Alisson; Danilo, Marquinhos, Militão; Guimarães, Paquetá; Raphinha, Rodrygo, Vinícius; Richarlison',
        '深盘热门 · 湿热迈阿密下轮换与补水是变量',
        'Vinčić 执法 · 安帅提醒球员注意拖延时间与战术犯规',
      ],
    },
  },

  m50: {
    home: {
      injuries: [
        { player: 'Achraf Hakimi', status: 'FIT', note: '巴黎右卫 · 4 分领跑 · 宽度+速度穿盘', confirmed: true },
        { player: 'Hakim Ziyech', status: 'FIT', note: '加拉塔萨雷边锋 · 左脚远射+定位球', confirmed: true },
        { player: 'Youssef En-Nesyri', status: 'FIT', note: '塞维利亚中锋 · 1-0 苏格兰功臣 · 支点', confirmed: true },
        { player: 'Sofyan Amrabat', status: 'FIT', note: '曼联租将后腰 · 屏障+出球', confirmed: true },
        { player: 'Bono', status: 'FIT', note: '一门 · 大赛经验 · 对海地反击', confirmed: true },
      ],
      rumors: [
        'Regragui（赛前）：「4 分领跑——对海地须穿盘，Hakimi 宽度是战术轴心」',
        '【更衣室】1-0 苏格兰、1-1 巴西后士气稳；Regragui 称「末轮不必冒险但须全取 3 分」',
        '预计 4-3-3：Bono; Hakimi, Saïss, Aguerd; Amrabat, Amrabat; Ziyech, Ounahi, Boufal; En-Nesyri',
        'C 组头名在望 · 海地 0 分须抢分但硬实力差距大',
        '亚特兰大 28°C · Regragui 训练强调 width 与转换速度',
        'Wilton Sampaio 巴西主裁 · 对 Hakimi 插上与海地低位犯规尺度受关注',
      ],
    },
    away: {
      injuries: [
        { player: 'Derrick Etienne Jr', status: 'FIT', note: '哥伦布前锋 · 锋线速度 · 反击唯一威胁', confirmed: true },
        { player: 'Zachary Brault-Guillard', status: 'FIT', note: '右后卫 · 对 Hakimi 速度的一对一', confirmed: true },
        { player: 'Johny Placide', status: 'FIT', note: '一门 · 0-3 巴西后须零封开局', confirmed: true },
        { player: 'Derrick Jean-Charles', status: 'FIT', note: '中场屏障 · 绞杀 Ziyech 前插', confirmed: true },
      ],
      rumors: [
        'Garcia（赛前）：「0 分但末轮须尊严——5-4-1 铁桶，定位球偷分是唯一路径」',
        '【更衣室】0-3 巴西、0-1 苏格兰后更衣室强调「对摩洛哥拿 1 分仍是成功」',
        '预计 5-4-1 极深低位 · Etienne 单箭 · 定位球是最大冷门变量',
        '硬实力差距大 · 90 分钟低位纪律是生存之本',
      ],
    },
  },

  m53: {
    home: {
      injuries: [
        { player: 'Patrik Schick', status: 'FIT', note: '勒沃库森射手 · 1 分须胜 · 定位球+支点', confirmed: true },
        { player: 'Tomáš Souček', status: 'FIT', note: '西汉姆后腰 · 屏障 · 绞杀 Lozano 连线', confirmed: true },
        { player: 'Antonín Barák', status: 'FIT', note: '佛罗伦萨中场 · 肋部渗透', confirmed: true },
        { player: 'Tomáš Holes', status: 'DOUBT', note: '轻微脚踝不适 · 赛前队检', confirmed: false },
        { player: 'Tomáš Vaclík', status: 'FIT', note: '一门 · 对墨西哥围攻须警惕高原后段', confirmed: true },
      ],
      rumors: [
        'Silhavy（赛前）：「1 分等于出局——Azteca 2240m 是最大敌人，Schick 上半场须破局」',
        '【更衣室】1-1 南非、1-2 韩国后更衣室强调「对墨西哥是生死战，高原须早进球」',
        '预计 4-2-3-1：Vaclík; Coufal, Brabec, Holes; Souček, Barák; Schick, Barák, Hložek; Chytil',
        'A 组末轮 · 墨西哥 6 分已出线或轮换 · 捷克须抢 3 分',
        '阿兹特克 2240m · Silhavy 训练增加高原适应与补水',
        'Mario Escobar 危地马拉主裁 · 墨西哥主场执法尺度受关注',
      ],
    },
    away: {
      injuries: [
        { player: 'Raúl Jiménez', status: 'FIT', note: '富勒姆前锋 · 6 分已出线 · 高原主场支点', confirmed: true },
        { player: 'Hirving Lozano', status: 'FIT', note: '埃因霍温边锋 · 左翼速度 · Azteca 宠儿', confirmed: true },
        { player: 'Andrés Guardado', status: 'FIT', note: '老将中场 · 大赛经验 · 末轮或轮换仍首发', confirmed: true },
        { player: 'Edson Álvarez', status: 'FIT', note: '西汉姆后腰 · 屏障 · 绞杀 Schick', confirmed: true },
        { player: 'Guillermo Ochoa', status: 'FIT', note: '一门 · Azteca 传奇 · 零封纪录', confirmed: true },
      ],
      rumors: [
        'Lozano（赛前）：「6 分已出线——Azteca 是我们的主场，Schick 定位球须防」',
        '【更衣室】6 分领跑后更衣室放松但 Lozano 称「末轮仍要捍卫 Azteca 不败」',
        '预计 4-3-3/轮换：Ochoa; Araujo, Montes, Vasquez; Álvarez, Pizarro; Lozano, Guardado, Vega; Jiménez',
        '高原 2240m 主场优势 · 捷克 70\' 后体能是瓶颈',
        'Escobar 执法 · 墨西哥提醒球员注意拖延时间',
      ],
    },
  },

  m54: {
    home: {
      injuries: [
        { player: 'Teboho Mokoena', status: 'FIT', note: '里昂中卫 · 1 分须抢分 · 防线领袖', confirmed: true },
        { player: 'Percy Tau', status: 'FIT', note: '阿尔阿赫利边锋 · 反击速度 · 对 Kim 侧', confirmed: true },
        { player: 'Ronwen Williams', status: 'FIT', note: '一门 · 1-1 捷克后信心足', confirmed: true },
        { player: 'Sphephelo Sithole', status: 'FIT', note: '中场屏障 · 绞杀 Son 连线', confirmed: true },
        { player: 'Evidence Makgopa', status: 'FIT', note: '前锋支点 · 定位球', confirmed: true },
      ],
      rumors: [
        'Broos（赛前）：「1 分须抢分——对韩国 3 分，Tau 反击 vs Son 肋部是战术轴心」',
        '【更衣室】1-1 捷克后更衣室士气稳；Broos 强调「对韩国拿 1 分仍是成功但我们要争胜」',
        '预计 4-5-1 低位+反击：Williams; Mokoena, Xoki, Mobbie; Sithole, Zwane; Tau, Makgopa',
        'A 组末轮 · 韩国 3 分须全取 3 分 · 南非 1 分须抢分',
        '蒙特雷 33°C 午后 · Broos 训练强调后段体能',
        'Ko Hyung-jin 韩国第四官员组 · 主裁 Mohammed Abdulla（阿联酋）',
      ],
    },
    away: {
      injuries: [
        { player: 'Son Heung-min', status: 'FIT', note: '热刺队长 · 3 分须胜 · 肋部+远射', confirmed: true },
        { player: 'Lee Kang-in', status: 'FIT', note: '巴黎中场 · 2-1 捷克功臣 · 节拍', confirmed: true },
        { player: 'Kim Min-jae', status: 'FIT', note: '拜仁中卫 · 防线领袖 · 防空 Makgopa', confirmed: true },
        { player: 'Hwang Hee-chan', status: 'FIT', note: '狼队边锋 · 速度破局', confirmed: true },
        { player: 'Jo Hyeon-woo', status: 'FIT', note: '一门 · 对南非反击须保持防线高度', confirmed: true },
      ],
      rumors: [
        'Klinsmann（赛前）：「3 分须胜——Son+李刚仁 肋部是核心，蒙特雷午后体能分配关键」',
        '【更衣室】2-1 捷克、0-2 墨西哥后更衣室强调「末轮须全取 3 分，Son 要带队」',
        '预计 4-2-3-1：Jo; Kim, Jung, Hong; Hwang, Lee; Son, Lee, Hwang; Cho',
        'A 组出线形势复杂 · 须胜且看墨西哥-捷克赛果',
        '33°C 午后 · Klinsmann 轮换与补水管理是重点',
        'Mohammed Abdulla 阿联酋主裁 · 对 Son 速度与 Tau 反击犯规尺度受关注',
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
