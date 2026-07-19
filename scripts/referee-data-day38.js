/**
 * Day 38 official referee — m104 · 决赛
 * Source: FIFA Match Centre · 2026-07-16 公布
 */
const SOURCE = 'FIFA Match Centre · 2026-07-16';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m104: confirmedRef({
    name: 'Slavko Vinčić',
    nation: 'Slovenia',
    iso: 'si',
    wc_experience: '2022 · 2026 世界杯 · 2024 欧冠决赛主裁 · 决赛 M104',
    avg_yellow: 4.1,
    avg_red: 0.1,
    avg_penalty: 0.25,
    home_win_rate: 48,
    bias_index: 50,
    bias_note: '斯洛文尼亚主裁执法 MetLife 决赛。西班牙传控 vs 阿根廷身体对抗；欧冠决赛级尺度，关键判罚果断。',
    tendencies: [
      'FIFA 官方主裁 · Slavko Vinčić（斯洛文尼亚）',
      '助理：Tomaž Klančnik、Andraž Kovačič（斯洛文尼亚）',
      '第四官员 Adham Makhadmeh（约旦）',
      '决赛 · Yamal vs Messi',
    ],
    officials: {
      referee: 'Slavko Vinčić (SVN)',
      assistants: 'Tomaž Klančnik / Andraž Kovačič (SVN)',
      fourth: 'Adham Makhadmeh (JOR)',
    },
    fifa_match_id: '400021543',
    note: 'FIFA M104 · 西班牙 vs 阿根廷 · MetLife Stadium',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || { confirmed: false, pending: true, name: '等待官方确认' };
}

module.exports = { getReferee, REFEREES, SOURCE };
