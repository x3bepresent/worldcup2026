/**
 * Day 21 official referee — m80–m82 · 32强
 * Source: FIFA Match Centre · api.fifa.com · 2026-07-02
 */
const SOURCE = 'FIFA Match Centre · api.fifa.com · 2026-07-02';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m80: confirmedRef({
    name: 'Adham Makhadmeh',
    nation: 'Jordan',
    iso: 'jo',
    wc_experience: '2026 世界杯 · 32强 M80 主裁 · AFC 精英 · 执法英格兰 vs 刚果（金）',
    avg_yellow: 4.2,
    avg_red: 0.1,
    avg_penalty: 0.3,
    home_win_rate: 50,
    bias_index: 50,
    bias_note:
      '约旦主裁执法亚特兰大 Mercedes-Benz 夜场。英格兰深盘热门 vs 刚果反击；对非洲球队身体对抗与英格兰定位球犯规尺度需关注。',
    tendencies: [
      'FIFA 官方主裁 · Adham Makhadmeh（约旦）',
      '32强单场淘汰 · 亚特兰大湿热夜场',
      '深盘场常见早期进球改盘口节奏',
    ],
    officials: {
      referee: 'Adham Makhadmeh (JOR)',
    },
    fifa_match_id: '400021512',
    note: 'FIFA M80 · 英格兰 vs 刚果（金）· Atlanta',
  }),

  m81: confirmedRef({
    name: 'Raphael Claus',
    nation: 'Brazil',
    iso: 'br',
    wc_experience: '2026 世界杯 · 32强 M81 主裁 · CONMEBOL · 执法美国 vs 波黑',
    avg_yellow: 4.6,
    avg_red: 0.12,
    avg_penalty: 0.35,
    home_win_rate: 52,
    bias_index: 51,
    bias_note:
      '巴西主裁执法旧金山湾区 · 美国 -1/1.5 深盘 vs 波黑铁桶；对主队有利判罚与禁区拉扯尺度是关键。',
    tendencies: [
      'FIFA 官方主裁 · Raphael Claus（巴西）',
      '第四官员 Darío Herrera（阿根廷）',
      '湾区晨场 · 美国主场标签',
    ],
    officials: {
      referee: 'Raphael Claus (BRA)',
      fourth: 'Darío Herrera (ARG)',
    },
    fifa_match_id: '400021524',
    note: 'FIFA M81 · 美国 vs 波黑 · SF Bay Area',
  }),

  m82: confirmedRef({
    name: 'Said Martinez',
    nation: 'Honduras',
    iso: 'hn',
    wc_experience: '2026 世界杯 · 32强 M82 主裁 · CONCACAF · 执法比利时 vs 塞内加尔',
    avg_yellow: 4.5,
    avg_red: 0.14,
    avg_penalty: 0.32,
    home_win_rate: 49,
    bias_index: 50,
    bias_note:
      '洪都拉斯主裁执法西雅图 · 比利时退档平半低水 vs 塞内加尔马内轴；对非洲速度犯规与欧洲战术犯规平衡执法。',
    tendencies: [
      'FIFA 官方主裁 · Said Martinez（洪都拉斯）',
      '西雅图夏晨 · 气候温和',
      '均衡盘常见 1-1 / 1-0 路径',
    ],
    officials: {
      referee: 'Said Martinez (HON)',
    },
    fifa_match_id: '400021525',
    note: 'FIFA M82 · 比利时 vs 塞内加尔 · Seattle',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || { confirmed: false, pending: true, name: '等待官方确认' };
}

module.exports = { getReferee, REFEREES, SOURCE };
