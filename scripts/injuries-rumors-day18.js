/** Day 18 injuries & rumors — m73 */
const NEWS = {
  m73: {
    home: {
      injuries: [{ player: 'Ronwen Williams', status: '存疑', detail: '小组赛末段轻微不适 · 赛前体检', source: '队报' }],
      rumors: [{ text: '南非延续 A 组末轮低位+反击思路 · 淘汰赛加时规则生效', tag: '战术' }],
    },
    away: {
      injuries: [],
      rumors: [{ text: '加拿大 B 组次席出线 · Davies 宽度+David 终结为破局点', tag: '战术' }],
    },
  },
};

function getTeamNews(matchId, side) {
  const n = NEWS[matchId]?.[side];
  return n || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews };
