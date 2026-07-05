/** Day 25 injuries & locker room — m91–m92 · 16强续战（7/6 北京） */
const TEAM_NEWS = {
  m91: {
    home: {
      injuries: [
        { player: 'Vinícius Júnior', status: 'FIT', note: '左路爆点 · C组冠军核心', confirmed: true },
        { player: 'Rodrygo', status: 'FIT', note: '右路宽度', confirmed: true },
        { player: 'Raphinha', status: 'FIT', note: '边路突破', confirmed: true },
        { player: 'Marquinhos', status: 'DOUBT', note: '肌肉轻微不适 · 赛前队检', confirmed: false },
      ],
      rumors: [
        'Dorival：「挪威有 Haaland，但我们有完整的进攻体系——须早破门」',
        '预计 4-2-3-1：Vini 左路 · Rodrygo 右路 · Richarlison 支点',
        '2-1 淘汰日本后状态正佳 · 控球+宽度是破挪威铁桶关键',
        '深盘热门 · 须防 Haaland 反击偷一个',
      ],
    },
    away: {
      injuries: [
        { player: 'Erling Haaland', status: 'FIT', note: '终结核心 · 2-1 淘汰科特迪瓦', confirmed: true },
        { player: 'Martin Ødegaard', status: 'FIT', note: '组织轴 · 出球', confirmed: true },
        { player: 'Alexander Sorloth', status: 'FIT', note: '替补奇兵', confirmed: true },
      ],
      rumors: [
        'Solbakken：「对巴西没人看好我们——但 Haaland 能进任何队的球」',
        '预计 4-3-3：Haaland 单箭头 · Ødegaard 前腰 · 低位+反击',
        'I组出线后状态回升 · 受让深盘有守盘空间',
        '须限制 Vini 一对一 · 定位球是少数得分手段',
      ],
    },
  },
  m92: {
    home: {
      injuries: [
        { player: 'Raúl Jiménez', status: 'FIT', note: 'Azteca 支点 · A组冠军', confirmed: true },
        { player: 'Edson Álvarez', status: 'FIT', note: '后腰屏障', confirmed: true },
        { player: 'Hirving Lozano', status: 'FIT', note: '边路速度', confirmed: true },
        { player: 'Guillermo Ochoa', status: 'FIT', note: '门将 · Azteca 守护神', confirmed: true },
      ],
      rumors: [
        'Aguirre：「Azteca 是我们的第12人——对英格兰要打出主场气势」',
        '预计 4-3-3：Jiménez 支点 · Lozano/Vega 双翼 · 高位逼抢',
        '2-0 淘汰厄瓜多尔 · 主场+高原是最大武器',
        '受让浅盘 · 1-1/1-0 是高频路径',
      ],
    },
    away: {
      injuries: [
        { player: 'Harry Kane', status: 'FIT', note: '锋线核心 · 终结+组织', confirmed: true },
        { player: 'Bukayo Saka', status: 'FIT', note: '右路爆点', confirmed: true },
        { player: 'Phil Foden', status: 'FIT', note: '肋部破局', confirmed: true },
        { player: 'John Stones', status: 'DOUBT', note: '小腿存疑 · 或 Guehi 搭档', confirmed: false },
      ],
      rumors: [
        'Southgate：「Azteca 氛围会很强——但我们有 Kane 这样的世界级射手」',
        '预计 4-2-3-1：Kane 单箭头 · Saka/Foden 双翼 · Rice 屏障',
        'L组全胜出线 · 锋线火力足但高原适应是隐患',
        '浅让 -0/0.5 · 早破门避免陷入闷战',
      ],
    },
  },
};

function getTeamNews(matchId, side) {
  return TEAM_NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews, TEAM_NEWS };
