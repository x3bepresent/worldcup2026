/** Day 16 injuries/rumors stubs */
const NEWS = {
  m61: {
    home: { injuries: [{ player: 'Erling Haaland', status: 'FIT', note: '锋线核心 · 6 分榜首战', confirmed: true }], rumors: ['Solbakken：「对法国须全取 3 分争头名」'] },
    away: { injuries: [{ player: 'Kylian Mbappé', status: 'FIT', note: '锋线核心', confirmed: true }], rumors: ['Deschamps 或轮换但 Mbappé 预计首发'] },
  },
  m62: {
    home: { injuries: [{ player: 'Sadio Mané', status: 'FIT', note: '0 分须胜', confirmed: true }], rumors: ['Cissé：「对伊拉克是荣誉之战也是必须赢的比赛」'] },
    away: { injuries: [], rumors: ['伊拉克 0 分已出局 · 末轮锻炼新人'] },
  },
  m63: {
    home: { injuries: [{ player: 'Mohamed Salah', status: 'FIT', note: '4 分领跑', confirmed: true }], rumors: ['埃及须防平局被反超'] },
    away: { injuries: [{ player: 'Mehdi Taremi', status: 'FIT', note: '2 分须胜', confirmed: true }], rumors: ['伊朗末轮须 3 分'] },
  },
  m64: {
    home: { injuries: [], rumors: ['新西兰 1 分须奇迹 · 5-4-1 铁桶'] },
    away: { injuries: [{ player: 'Jérémy Doku', status: 'FIT', note: '2 分须胜', confirmed: true }], rumors: ['比利时两连平后须穿盘'] },
  },
  m65: {
    home: { injuries: [], rumors: ['佛得角 2 分争出线'] },
    away: { injuries: [{ player: 'Salem Al-Dawsari', status: 'FIT', note: '1 分须胜', confirmed: true }], rumors: ['沙特末轮须 3 分'] },
  },
  m66: {
    home: { injuries: [{ player: 'Federico Valverde', status: 'FIT', note: '2 分须胜', confirmed: true }], rumors: ['Bielsa 高位压迫 vs 西班牙控球'] },
    away: { injuries: [{ player: 'Lamine Yamal', status: 'FIT', note: '4 分领跑', confirmed: true }], rumors: ['西班牙 4 分不够稳 · 须胜巩固'] },
  },
};

function getTeamNews(matchId, side) {
  return NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews };
