/**
 * Day 22 referee — m83–m85 · 32强 · 待 FIFA 官方确认
 */
const SOURCE = 'FIFA Match Centre · 待官方确认 · 2026-07-03';

function pendingRef(data) {
  return { confirmed: false, pending: true, source: SOURCE, ...data };
}

const REFEREES = {
  m83: pendingRef({
    name: '待官方确认',
    nation: '—',
    iso: 'xx',
    wc_experience: '32强 M83 · 葡萄牙 vs 克罗地亚 · 多伦多 BMO Field',
    avg_yellow: 4.4,
    avg_red: 0.12,
    avg_penalty: 0.3,
    home_win_rate: 50,
    bias_index: 50,
    bias_note: '均衡盘场 · C罗 vs 莫德里奇经验对决 · 对身体对抗与战术犯规尺度需关注。',
    tendencies: ['FIFA 官方主裁 · 待确认', '多伦多夏夜 · 湿度偏高', '平手/浅盘常见 1-1 路径'],
    fifa_match_id: '400021526',
    note: 'FIFA M83 · 葡萄牙 vs 克罗地亚 · Toronto',
  }),

  m84: pendingRef({
    name: '待官方确认',
    nation: '—',
    iso: 'xx',
    wc_experience: '32强 M84 · 西班牙 vs 奥地利 · 洛杉矶 SoFi Stadium',
    avg_yellow: 4.2,
    avg_red: 0.1,
    avg_penalty: 0.28,
    home_win_rate: 54,
    bias_index: 52,
    bias_note: '深盘场 · 西班牙 -1.5 热门 vs 奥地利铁桶 · 禁区拉扯与定位球判罚关键。',
    tendencies: ['FIFA 官方主裁 · 待确认', '洛杉矶夏夜', '深盘常见早期进球改盘口'],
    fifa_match_id: '400021519',
    note: 'FIFA M84 · 西班牙 vs 奥地利 · LA',
  }),

  m85: pendingRef({
    name: '待官方确认',
    nation: '—',
    iso: 'xx',
    wc_experience: '32强 M85 · 瑞士 vs 阿尔及利亚 · 温哥华 BC Place',
    avg_yellow: 4.3,
    avg_red: 0.11,
    avg_penalty: 0.32,
    home_win_rate: 51,
    bias_index: 50,
    bias_note: '瑞士 -0.5 浅盘 vs 阿尔及利亚马赫雷斯反击轴 · 非洲速度犯规尺度需平衡。',
    tendencies: ['FIFA 官方主裁 · 待确认', '温哥华夏午 · 气候温和', '浅盘常见 1-0 / 2-1 路径'],
    fifa_match_id: '400021527',
    note: 'FIFA M85 · 瑞士 vs 阿尔及利亚 · Vancouver',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || { confirmed: false, pending: true, name: '等待官方确认' };
}

module.exports = { getReferee, REFEREES, SOURCE };
