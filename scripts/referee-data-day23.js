/**
 * Day 23 official referee — m86–m88 · 32强收官
 * Source: FIFA Match Centre · api.fifa.com · 2026-07-04
 */
const SOURCE = 'FIFA Match Centre · api.fifa.com · 2026-07-04';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m88: confirmedRef({
    name: 'Gustavo Tejera',
    nation: 'Uruguay',
    iso: 'uy',
    wc_experience: '2026 世界杯 · 32强 M88 主裁 · CONMEBOL · 执法澳大利亚 vs 埃及',
    avg_yellow: 4.5,
    avg_red: 0.12,
    avg_penalty: 0.30,
    home_win_rate: 50,
    bias_index: 50,
    bias_note: '乌拉圭主裁执法达拉斯 AT&T 凌晨场。均衡盘澳 -0/0.5 vs 埃及 Salah 轴；对身体对抗与速度犯规尺度需平衡。',
    tendencies: [
      'FIFA 官方主裁 · Gustavo Tejera（乌拉圭）',
      '32强收官首场 · 达拉斯高温封闭',
      '均衡盘 1-1 路径常见',
    ],
    officials: { referee: 'Gustavo Tejera (URU)' },
    fifa_match_id: '400021515',
    note: 'FIFA M88 · 澳大利亚 vs 埃及 · Dallas',
  }),

  m86: confirmedRef({
    name: 'Drew Fischer',
    nation: 'Canada',
    iso: 'ca',
    wc_experience: '2026 世界杯 · 32强 M86 主裁 · CONCACAF · 执法阿根廷 vs 佛得角',
    avg_yellow: 4.2,
    avg_red: 0.10,
    avg_penalty: 0.28,
    home_win_rate: 55,
    bias_index: 52,
    bias_note: '加拿大主裁执法迈阿密晨场。阿根廷 -1.5/2 深盘 vs 佛得角铁桶；对 Messi 被侵犯与非洲球队身体对抗尺度是关键。',
    tendencies: [
      'FIFA 官方主裁 · Drew Fischer（加拿大）',
      '第四官员 Katia Itzel García（墨西哥）',
      '深盘单场 · 迈阿密湿热',
    ],
    officials: {
      referee: 'Drew Fischer (CAN)',
      fourth: 'Katia Itzel García (MEX)',
    },
    fifa_match_id: '400021521',
    note: 'FIFA M86 · 阿根廷 vs 佛得角 · Miami',
  }),

  m87: confirmedRef({
    name: 'Clément Turpin',
    nation: 'France',
    iso: 'fr',
    wc_experience: '2026 世界杯 · 32强 M87 主裁 · UEFA 精英 · 执法哥伦比亚 vs 加纳',
    avg_yellow: 4.4,
    avg_red: 0.11,
    avg_penalty: 0.32,
    home_win_rate: 53,
    bias_index: 51,
    bias_note: '法国主裁执法堪萨斯城。哥伦比亚 -0.5 vs 加纳 Kudus 反击轴；对南美技术犯规与非洲速度犯规平衡执法。',
    tendencies: [
      'FIFA 官方主裁 · Clément Turpin（法国）',
      '第四官员 Alejandro Hernández（西班牙）',
      '浅盘场 · 哥伦比亚主场标签',
    ],
    officials: {
      referee: 'Clément Turpin (FRA)',
      fourth: 'Alejandro Hernández (ESP)',
    },
    fifa_match_id: '400021517',
    note: 'FIFA M87 · 哥伦比亚 vs 加纳 · Kansas City',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || { confirmed: false, pending: true, name: '等待官方确认' };
}

module.exports = { getReferee, REFEREES, SOURCE };
