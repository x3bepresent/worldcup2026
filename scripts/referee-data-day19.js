/**
 * Day 19 official referee — m74–m76 · 32强
 * Source: FIFA · Wikipedia 2026 WC officials · 2026-06-29
 */
const SOURCE = 'FIFA · Match officials · 2026-06-29';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m76: confirmedRef({
    name: 'Maurizio Mariani',
    nation: 'Italy',
    iso: 'it',
    age: 43,
    wc_experience:
      '2026 世界杯 · 32强 M76 主裁 · 小组赛沙特-乌拉圭、哥伦比亚-刚果(金) · Serie A 精英 · 本届唯一意大利主裁',
    avg_yellow: 4.4,
    avg_red: 0.12,
    avg_penalty: 0.28,
    home_win_rate: 51,
    bias_index: 52,
    bias_note:
      '意大利主裁执法休斯顿 NRG 夜场。巴西 C 组零失球高位压迫 vs 日本 F 组不败低位转换；对 Vinícius 速度犯规与 Endo 战术犯规尺度受关注，优势判罚利于日本反击。',
    tendencies: [
      '助理：Daniele Bindoni、Alberto Tegoni（意大利）',
      '第四官员 Sandro Schärer（瑞士）· 候补 Stéphane De Almeida（SUI）',
      'VAR Marco Di Bello（意大利）· AVAR Juan Martinez（西班牙）',
      '休斯顿 32°C 封闭 · 补水暂停后体能犯规或升',
      '小组赛已执法巴西相关场次 · 对南美-欧洲对抗尺度有经验',
    ],
    officials: {
      ar1: 'Daniele Bindoni (ITA)',
      ar2: 'Alberto Tegoni (ITA)',
      fourth: 'Sandro Schärer (SUI)',
      var: 'Marco Di Bello (ITA)',
      avar: 'Juan Martinez (ESP)',
    },
    fifa_match_id: '400021516',
    note: 'FIFA M76 · 巴西 vs 日本 · 休斯顿 NRG Stadium',
  }),

  m74: confirmedRef({
    name: 'Jalal Jayed',
    nation: 'Morocco',
    iso: 'ma',
    age: 41,
    wc_experience:
      '2026 世界杯 · 32强 M74 主裁 · 小组赛德国-库拉索、葡萄牙-乌兹别克 · CAF 精英裁判',
    avg_yellow: 4.8,
    avg_red: 0.15,
    avg_penalty: 0.32,
    home_win_rate: 49,
    bias_index: 50,
    bias_note:
      '摩洛哥主裁执法波士顿 Gillette 凌晨场。德国 E 组头名深盘穿盘 vs 巴拉圭 D 组第3 铁桶+定位球；对 Musiala 肋部被拉与巴拉圭禁区拉扯判罚尺度是关键。',
    tendencies: [
      '助理：Zakaria Brinsi、Mostafa Akarkad（摩洛哥）',
      '第四官员 Ma Ning（中国）· 候补 Zhou Fei（CHN）',
      'VAR Tatiana Guzmán（尼加拉瓜）· AVAR Hamza El-Fariq（摩洛哥）· SVAR Abdullah Al-Shehri（沙特）',
      '小组赛已执法德国 · 熟悉 Nagelsmann 球队节奏',
      '深盘场常见早期点球争议 · 定位球犯规需盯紧',
    ],
    officials: {
      ar1: 'Zakaria Brinsi (MAR)',
      ar2: 'Mostafa Akarkad (MAR)',
      fourth: 'Ma Ning (CHN)',
      var: 'Tatiana Guzmán (NCA)',
      avar: 'Hamza El-Fariq (MAR)',
      svar: 'Abdullah Al-Shehri (KSA)',
    },
    fifa_match_id: '400021513',
    note: 'FIFA M74 · 德国 vs 巴拉圭 · 波士顿 Gillette Stadium',
  }),

  m75: confirmedRef({
    name: 'Wilton Sampaio',
    nation: 'Brazil',
    iso: 'br',
    age: 43,
    wc_experience:
      '2026 世界杯 · 32强 M75 主裁 · 小组赛墨西哥-南非、挪威-塞内加尔 · CONMEBOL 精英 · 2018/2022 世界杯执法',
    avg_yellow: 5.2,
    avg_red: 0.18,
    avg_penalty: 0.35,
    home_win_rate: 48,
    bias_index: 49,
    bias_note:
      '巴西主裁执法蒙特雷 BBVA 上午场。荷兰 F 组头名 vs 摩洛哥 C 组次席（2022 阴影）；对 Hakimi 插上犯规与 Amrabat 绞杀 Gakpo 尺度受关注，牌面可能偏紧。',
    tendencies: [
      '助理：Bruno Pires、Bruno Boschilia（巴西）',
      '第四官员 Cristián Garay（智利）· 候补 Jose Retamal（CHI）',
      'VAR Juan Gabriel Benítez（巴拉圭）· AVAR Eduardo Cardozo（PAR）',
      '蒙特雷 28°C · 淘汰赛身体对抗升级',
      '执法牌面偏多 · 对 Amrabat 累计犯规需预警',
    ],
    officials: {
      ar1: 'Bruno Pires (BRA)',
      ar2: 'Bruno Boschilia (BRA)',
      fourth: 'Cristián Garay (CHI)',
      var: 'Juan Gabriel Benítez (PAR)',
      avar: 'Eduardo Cardozo (PAR)',
    },
    fifa_match_id: '400021522',
    note: 'FIFA M75 · 荷兰 vs 摩洛哥 · 蒙特雷 Estadio BBVA',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || {
    confirmed: false,
    pending: true,
    name: '等待官方确认',
    nation: '待公布',
    note: 'FIFA 裁判名单赛前确认',
  };
}

module.exports = { getReferee, REFEREES };
