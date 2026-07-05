/**
 * Day 25 official referee — m91–m92 · 16强续战
 * Source: FIFA Match Centre · api.fifa.com · 2026-07-06
 */
const SOURCE = 'FIFA Match Centre · api.fifa.com · 2026-07-06';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m91: confirmedRef({
    name: 'Ismail Elfath',
    nation: 'USA',
    iso: 'us',
    wc_experience: '2026 世界杯 · 16强 M91 主裁 · CONCACAF 精英 · 执法巴西 vs 挪威',
    avg_yellow: 4.2,
    avg_red: 0.12,
    avg_penalty: 0.28,
    home_win_rate: 52,
    bias_index: 50,
    bias_note: '美国主裁执法 MetLife 开放场。巴西控球 vs 挪威 Haaland 反击；对身体对抗尺度稳健，定位球判罚果断。',
    tendencies: [
      'FIFA 官方主裁 · Ismail Elfath（美国）',
      '第四官员 Said Martinez（洪都拉斯）',
      'Vini vs Haaland · 新泽西夏夜',
    ],
    officials: {
      referee: 'Ismail Elfath (USA)',
      fourth: 'Said Martinez (HON)',
    },
    fifa_match_id: '400021532',
    note: 'FIFA M91 · 巴西 vs 挪威 · MetLife',
  }),

  m92: confirmedRef({
    name: 'Alireza Faghani',
    nation: 'Australia',
    iso: 'au',
    wc_experience: '2026 世界杯 · 16强 M92 主裁 · AFC 精英 · 执法墨西哥 vs 英格兰',
    avg_yellow: 4.4,
    avg_red: 0.10,
    avg_penalty: 0.30,
    home_win_rate: 48,
    bias_index: 50,
    bias_note: '伊朗裔澳籍主裁执法 Azteca 高原夜场。墨西哥主场氛围 vs 英格兰三狮；对拖延时间容忍度低，关键判罚果断。',
    tendencies: [
      'FIFA 官方主裁 · Alireza Faghani（澳大利亚）',
      '第四官员 Jalal Jayed（摩洛哥）',
      'Azteca 高原 · Kane vs Jiménez',
    ],
    officials: {
      referee: 'Alireza Faghani (AUS)',
      fourth: 'Jalal Jayed (MAR)',
    },
    fifa_match_id: '400021531',
    note: 'FIFA M92 · 墨西哥 vs 英格兰 · Azteca',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || { confirmed: false, pending: true, name: '等待官方确认' };
}

module.exports = { getReferee, REFEREES, SOURCE };
