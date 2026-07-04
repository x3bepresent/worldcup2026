/**
 * Day 24 official referee — m89–m90 · 16强开赛
 * Source: FIFA Match Centre · api.fifa.com · 2026-07-05
 */
const SOURCE = 'FIFA Match Centre · api.fifa.com · 2026-07-05';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m90: confirmedRef({
    name: 'Michael Oliver',
    nation: 'England',
    iso: 'gb-eng',
    wc_experience: '2026 世界杯 · 16强 M90 主裁 · UEFA 精英 · 执法加拿大 vs 摩洛哥',
    avg_yellow: 4.0,
    avg_red: 0.10,
    avg_penalty: 0.30,
    home_win_rate: 50,
    bias_index: 50,
    bias_note: '英格兰顶级主裁执法休斯顿 NRG 封闭场。Davies vs Hakimi 边路对攻；对身体对抗尺度稳健，允许比赛流畅，禁区内拉扯判罚果断。',
    tendencies: [
      'FIFA 官方主裁 · Michael Oliver（英格兰）',
      '第四官员 Danny Makkelie（荷兰）',
      '边路对攻 · 休斯顿封闭空调',
    ],
    officials: {
      referee: 'Michael Oliver (ENG)',
      fourth: 'Danny Makkelie (NED)',
    },
    fifa_match_id: '400021530',
    note: 'FIFA M90 · 加拿大 vs 摩洛哥 · Houston',
  }),

  m89: confirmedRef({
    name: 'Ilgiz Tantashev',
    nation: 'Uzbekistan',
    iso: 'uz',
    wc_experience: '2026 世界杯 · 16强 M89 主裁 · AFC 精英 · 执法巴拉圭 vs 法国',
    avg_yellow: 4.6,
    avg_red: 0.13,
    avg_penalty: 0.32,
    home_win_rate: 48,
    bias_index: 50,
    bias_note: '乌兹别克主裁执法费城夏夜。巴拉圭铁桶+犯规打断 vs 法国豪华锋线；对战术犯规、拖延时间容忍度中等，Mbappé 被侵犯尺度是关键。',
    tendencies: [
      'FIFA 官方主裁 · Ilgiz Tantashev（乌兹别克斯坦）',
      '第四官员 Abdulrahman Al-Jassim（卡塔尔）',
      '深盘场 · 巴拉圭战术犯规高发',
    ],
    officials: {
      referee: 'Ilgiz Tantashev (UZB)',
      fourth: 'Abdulrahman Al-Jassim (QAT)',
    },
    fifa_match_id: '400021533',
    note: 'FIFA M89 · 巴拉圭 vs 法国 · Philadelphia',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || { confirmed: false, pending: true, name: '等待官方确认' };
}

module.exports = { getReferee, REFEREES, SOURCE };
