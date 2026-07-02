/** Day 22 injuries & locker room — m83–m85 · 32强（7/3 北京） */
const TEAM_NEWS = {
  m84: {
    home: {
      injuries: [
        { player: 'Lamine Yamal', status: 'FIT', note: 'H 组头名 · 3 场 5 球进攻轴 · 预计首发 RW', confirmed: true },
        { player: 'Nico Williams', status: 'FIT', note: '左路宽度 · 对奥地利低位关键', confirmed: true },
        { player: 'Pedri', status: 'FIT', note: '肋部组织 · 破密集', confirmed: true },
        { player: 'Carvajal', status: 'DOUBT', note: '右腿轻微不适 · 赛前队检决定能否首发', confirmed: false },
      ],
      rumors: [
        'de la Fuente：「淘汰赛没有容错——奥地利 J 组次席有 Sabitzer/Alaba，须早破门穿 -1.5」',
        '预计 4-3-3：Simón; Carvajal/Laporte, Le Normand, Cucurella; Rodri, Zubimendi; Yamal, Olmo, N. Williams; Morata',
        'H 组 3 场仅 5 球 · 进攻效率偏低但零失球防守稳 · 深盘 -1.5@0.87 低水挺穿',
        'Agent ★西班牙 -1.5 · 副项大 2.5/3@0.86（升线+大侧降水）',
        '更衣室：老将 Morata 与年轻球员 Yamal 分工明确 · 无内讧报道',
      ],
    },
    away: {
      injuries: [
        { player: 'David Alaba', status: 'FIT', note: '防线领袖 · 对位 Morata/Yamal', confirmed: true },
        { player: 'Marcel Sabitzer', status: 'FIT', note: '屏障 Rodri · 远射破局点', confirmed: true },
        { player: 'Gregoritsch', status: 'FIT', note: '锋线支点 · 反击第一落点', confirmed: true },
        { player: 'Laimer', status: 'DOUBT', note: '中场轻微撞伤 · 末练减量', confirmed: false },
      ],
      rumors: [
        'Rangnick：「对西班牙没有包袱——+1.5@1.02 是我们熟悉的铁桶+转换」',
        '预计 4-2-3-1 低位 · Sabitzer/Seiwald 双屏障 · Gregoritsch 孤立前场',
        'J 组对阿根廷 1 胜 1 负 · 遇强队可收缩 · 定位球偷一个仍是路径',
        '受让 +1.5 高水 · 0-2/1-3 全输 · 0-1/1-1 赢盘',
      ],
    },
  },
  m83: {
    home: {
      injuries: [
        { player: 'Cristiano Ronaldo', status: 'FIT', note: 'K 组 5 分出线 · 淘汰赛须兑现 · 预计首发 ST', confirmed: true },
        { player: 'Bruno Fernandes', status: 'FIT', note: '肋部穿盘 · 定位球', confirmed: true },
        { player: 'Vitinha', status: 'FIT', note: '控球节拍 · 对 Modrić 中场博弈', confirmed: true },
        { player: 'Pepe', status: 'DOUBT', note: '41 岁中卫 · 连续作战体能 · 或轮换 Íñacio', confirmed: false },
      ],
      rumors: [
        'Martínez：「克罗地亚 L 组 6 分不虚——Modrić 仍是世界级，但我们会升压」',
        '预计 4-3-3：Costa; Cancelo, Dias, Inácio; Mendes; Palhinha, Vitinha, B. Fernandes; Leão, Ronaldo, Jota',
        'K 组 0-0 哥伦比亚暴露破密集难题 · 临场升 -0.5/1@0.90 市场略挺葡',
        'Agent ★克罗地亚 +0.5/1@0.99 · 模型 1-1 概率高 · 副项大 2.5/3',
        '更衣室：C罗与 B 费分工清晰 · Martínez 强调「别被大赛经验吓住」',
      ],
    },
    away: {
      injuries: [
        { player: 'Luka Modrić', status: 'FIT', note: '最后一届世界杯 · 节拍器预计首发', confirmed: true },
        { player: 'Joško Gvardiol', status: 'FIT', note: '防线核心 · 左路出球', confirmed: true },
        { player: 'Andrej Kramarić', status: 'FIT', note: '支点 · 定位球', confirmed: true },
        { player: 'Brozović', status: 'DOUBT', note: '小腿轻微疲劳 · 赛前队检', confirmed: false },
      ],
      rumors: [
        'Dalić：「葡萄牙有 C罗和 B费，但 1-1 是我们能接受的——+0.5/1 结构对我们有利」',
        '预计 4-3-3：Livaković; Juranović, Gvardiol, Šutalo, Perišić; Modrić, Kovačić; Rebić, Sarr, Kramarić',
        'L 组曾 2-4 英格兰半场对攻 · 证明进攻可以 · 淘汰赛或更务实',
        '升档 +0.5/1@0.99 · 1-1 全赢 / 1-0 输半 / 0-1 全赢',
        '更衣室：Modrić 赛前称「这可能是我的最后一场世界杯」· 全队士气凝聚',
      ],
    },
  },
  m85: {
    home: {
      injuries: [
        { player: 'Granit Xhaka', status: 'FIT', note: 'B 组头名 7 分 · 控场轴心', confirmed: true },
        { player: 'Manuel Akanji', status: 'FIT', note: '防线领袖', confirmed: true },
        { player: 'Xherdan Shaqiri', status: 'FIT', note: '定位球 · 破密集', confirmed: true },
        { player: 'Embolo', status: 'DOUBT', note: '膝部旧伤管理 · 赛前决定能否首发', confirmed: false },
      ],
      rumors: [
        'Yakin：「阿尔及利亚有 Mahrez——我们不会轻敌，但必须主导球权」',
        '预计 4-2-3-1：Sommer; Widmer, Akanji, Elvedi, Rodriguez; Xhaka, Freuler; Shaqiri, Rieder, Vargas; Embolo/Duah',
        '皇冠初 -1@1.02 退至 -0.5@0.98 · 市场不信瑞士深穿 · Agent 转挺受让',
        'B 组 7 分但末轮对加拿大非大胜 · 进攻上限受质疑',
        '更衣室：Xhaka 强调「退盘不是坏事——降低预期反而踢得更开」',
      ],
    },
    away: {
      injuries: [
        { player: 'Riyad Mahrez', status: 'FIT', note: 'J 组第3 晋级 · 反击第一爆点', confirmed: true },
        { player: 'Ramy Bensebaini', status: 'FIT', note: '中卫 · 定位球', confirmed: true },
        { player: 'Aouar', status: 'FIT', note: '中场推进', confirmed: true },
        { player: 'Bounedjah', status: 'DOUBT', note: '肌肉轻微不适 · 或由 Bounedjah/Amoura 轮换', confirmed: false },
      ],
      rumors: [
        'Halilhodžić：「瑞士退盘说明他们也有压力——我们 +0.5@0.91 低水，守平就是胜利」',
        '预计 4-3-3 低位+转换 · Mahrez 右路孤立 · 定位球+反击',
        'J 组 4 分压线晋级 · 对阿根廷 0-3 但曾逼平奥地利 · 无包袱',
        'Agent ★阿尔及利亚 +0.5@0.91 · 大小降 2/2.5 小 0.90（R9 副项不打小）',
        '更衣室：Mahrez 赛前社交媒体低调 · 全队强调「非洲球队淘汰赛冷门传统」',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  return TEAM_NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews, TEAM_NEWS };
