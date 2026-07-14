/**
 * Day 34 official referee — m101 · 半决赛
 * Source: FIFA Match Centre · api.fifa.com · 2026-07-14
 */
const SOURCE = 'FIFA Match Centre · api.fifa.com · 2026-07-14';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m101: confirmedRef({
    name: 'Iván Arcides Barton Cisneros',
    nation: 'El Salvador',
    iso: 'sv',
    wc_experience: '2026 世界杯 · 半决赛 M101 主裁 · CONCACAF · 执法法国 vs 西班牙',
    avg_yellow: 4.3,
    avg_red: 0.12,
    avg_penalty: 0.28,
    home_win_rate: 50,
    bias_index: 50,
    bias_note: '萨尔瓦多主裁执法达拉斯 AT&T。法国身体对抗 vs 西班牙传控；半决赛尺度稳健，关键判罚果断。',
    tendencies: [
      'FIFA 官方主裁 · Iván Barton（萨尔瓦多）',
      '第四官员 Glenn Nyberg（瑞典）',
      '半决赛 · Mbappé vs Yamal',
    ],
    officials: {
      referee: 'Iván Barton (SLV)',
      fourth: 'Glenn Nyberg (SWE)',
    },
    fifa_match_id: '400021541',
    note: 'FIFA M101 · 法国 vs 西班牙 · Dallas AT&T',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || { confirmed: false, pending: true, name: '等待官方确认' };
}

module.exports = { getReferee, REFEREES, SOURCE };
