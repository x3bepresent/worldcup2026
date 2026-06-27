/** Day 17 injuries/rumors stubs */
const NEWS = {
  m67: {
    home: { injuries: [], rumors: ['巴拿马 0 分须奇迹 · 5-4-1 铁桶'] },
    away: { injuries: [{ player: 'Jude Bellingham', status: 'FIT', note: '4 分争头名', confirmed: true }], rumors: ['Tuchel：末轮须确保出线顺位'] },
  },
  m68: {
    home: { injuries: [{ player: 'Luka Modrić', status: 'FIT', note: '3 分须胜', confirmed: true }], rumors: ['克罗地亚末轮须 3 分'] },
    away: { injuries: [{ player: 'Mohammed Kudus', status: 'FIT', note: '4 分领跑', confirmed: true }], rumors: ['加纳净胜球优势'] },
  },
  m69: {
    home: { injuries: [{ player: 'Riyad Mahrez', status: 'FIT', note: '3 分须胜', confirmed: true }], rumors: ['阿尔及利亚末轮生死战'] },
    away: { injuries: [{ player: 'David Alaba', status: 'FIT', note: '3 分同分', confirmed: true }], rumors: ['奥地利须胜争 J 组次席'] },
  },
  m70: {
    home: { injuries: [], rumors: ['约旦 0 分已出局 · 锻炼新人'] },
    away: { injuries: [{ player: 'Lionel Messi', status: 'FIT', note: '6 分已锁', confirmed: true }], rumors: ['Scaloni 或轮换但 Messi 预计替补登场'] },
  },
  m71: {
    home: { injuries: [{ player: 'Luis Díaz', status: 'FIT', note: '6 分争头名', confirmed: true }], rumors: ['哥伦比亚末轮须保头名'] },
    away: { injuries: [{ player: 'Cristiano Ronaldo', status: 'FIT', note: '4 分争头名', confirmed: true }], rumors: ['葡萄牙须胜抢 K 组第一'] },
  },
  m72: {
    home: { injuries: [{ player: 'Yoane Wissa', status: 'FIT', note: '1 分须胜', confirmed: true }], rumors: ['刚果(金)末轮须 3 分争出线'] },
    away: { injuries: [], rumors: ['乌兹别克 0 分已出局'] },
  },
};

function getTeamNews(matchId, side) {
  return NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews };
