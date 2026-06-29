/** Day 19 injuries & rumors — m74–m76 */
const NEWS = {
  m76: { home: { injuries: [], rumors: [{ text: '巴西 C 组头名 · 日本 F 组次席不败 · 淘汰赛单场', tag: '战术' }] }, away: { injuries: [], rumors: [{ text: '日本低位+转换 · 巴西须破密集', tag: '战术' }] } },
  m74: { home: { injuries: [], rumors: [{ text: '德国 E 组头名深盘 · 巴拉圭 D 组第3 争八出线', tag: '战术' }] }, away: { injuries: [], rumors: [{ text: '巴拉圭铁桶+定位球', tag: '战术' }] } },
  m75: { home: { injuries: [], rumors: [{ text: '荷兰 F 组头名 · 摩洛哥 C 组次席 7 分', tag: '战术' }] }, away: { injuries: [], rumors: [{ text: '摩洛哥小组赛不败 · 淘汰赛经验', tag: '战术' }] } },
};

function getTeamNews(matchId, side) {
  return NEWS[matchId]?.[side] || { injuries: [], rumors: [] };
}

module.exports = { getTeamNews };
