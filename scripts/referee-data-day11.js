/**
 * Day 11 official referee appointments — FIFA Matches 37–40
 * Source: FIFA api.fifa.com · Sportstar · Tehran Times · AllFootball · The National · 2026-06-22
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-22';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m38: confirmedRef({
    name: 'Raphael Claus',
    nation: 'Brazil',
    iso: 'br',
    age: 44,
    wc_experience:
      '2022 世界杯第四官员 · 2026 主裁——南美顶级 · 巴甲/解放者杯场均约 25 犯规',
    avg_yellow: 4.6,
    avg_red: 0.14,
    avg_penalty: 0.28,
    home_win_rate: 49,
    bias_index: 50,
    bias_note:
      '巴西全组执法（Claus+Manis+Figueiredo）。西班牙控球破局 vs Renard 5-4-1 铁桶；对战术犯规、拖延时间容忍度中等，点球尺度相对明确。',
    tendencies: [
      '巴西助理：Danilo Manis、Rodrigo Figueiredo',
      '第四官员 Andrés Rojas（哥伦比亚）· 候补 Alexander Guzmán（COL）',
      'VAR Andrés Rojas（COL）——部分名单待 FIFA 开球前最终确认',
      '亚特兰大夏午 30°C——领先方后段拖延与战术犯规是黄牌高发点',
      '西班牙 0-0 后须破局；沙特 1-1 乌拉圭低位纪律受考验',
    ],
    officials: {
      ar1: 'Danilo Manis (BRA)',
      ar2: 'Rodrigo Figueiredo (BRA)',
      fourth: 'Andrés Rojas (COL)',
      var: 'Andrés Rojas (COL)',
      reserve_ar: 'Alexander Guzmán (COL)',
    },
    fifa_match_id: '400021483',
    fifa_official_id: '416158',
  }),

  m39: confirmedRef({
    name: 'Darío Herrera',
    nation: 'Argentina',
    iso: 'ar',
    age: 42,
    wc_experience:
      '2026 世界杯主裁 · 阿根廷顶级 · 南美 WCQ/解放者杯执法 · 身体对抗判罚果断',
    avg_yellow: 5.0,
    avg_red: 0.16,
    avg_penalty: 0.32,
    home_win_rate: 51,
    bias_index: 52,
    bias_note:
      '阿根廷组执法 G 组均分乱局。Doku/KDB 肋部 vs Taremi/Ezatolahi 屏障；对身体对抗与模拟接触尺度受关注，预计 4–5 张黄牌。',
    tendencies: [
      '阿根廷助理：Cristian Navarro、Gabriel Chade',
      '第四官员 Yusuke Araki（日本）· 候补 Jun Mihara（JPN）',
      'VAR/AVAR 待 FIFA 开球前完整公布',
      'SoFi 封闭球场气候影响低——判罚节奏与转换犯规是焦点',
      'G 组四队均 1 分，平局对双方均可接受但比利时更须 3 分',
    ],
    officials: {
      ar1: 'Cristian Navarro (ARG)',
      ar2: 'Gabriel Chade (ARG)',
      fourth: 'Yusuke Araki (JPN)',
      reserve_ar: 'Jun Mihara (JPN)',
    },
    fifa_match_id: '400021477',
    fifa_official_id: '328496',
  }),

  m37: confirmedRef({
    name: 'Espen Eskås',
    nation: 'Norway',
    iso: 'no',
    age: 41,
    wc_experience:
      '2026 世界杯主裁 · 挪威/北欧联赛 · UEFA 精英裁判 · 出牌率中等偏稳',
    avg_yellow: 4.2,
    avg_red: 0.1,
    avg_penalty: 0.25,
    home_win_rate: 47,
    bias_index: 49,
    bias_note:
      '挪威全组执法。Bielsa 高位压迫 vs Bubista 5-4-1 铁桶；迈阿密湿热下战术犯规打断节奏，Tori Penso 任第四官员。',
    tendencies: [
      '挪威助理：Jan Erik Engan、Isaak Bashevkin',
      '第四官员 Tori Penso（美国）· 候补 Brooke Mayo（USA）',
      'VAR/AVAR 待 FIFA 开球前完整公布',
      '迈阿密 31°C/78% 湿度——Bielsa 压迫局黄牌或偏多',
      '佛得角 0-0 西班牙后低位更自信；乌拉圭 1-1 控球未赢须破密集',
    ],
    officials: {
      ar1: 'Jan Erik Engan (NOR)',
      ar2: 'Isaak Bashevkin (NOR)',
      fourth: 'Tori Penso (USA)',
      reserve_ar: 'Brooke Mayo (USA)',
    },
    fifa_match_id: '400021487',
    fifa_official_id: '416160',
  }),

  m40: confirmedRef({
    name: 'Omar Mohamed Al Ali',
    nation: 'UAE',
    iso: 'ae',
    age: 37,
    wc_experience:
      '2022 世界杯 VAR · 2026 主裁——阿联酋代表亚洲 · AFC 精英裁判',
    avg_yellow: 4.4,
    avg_red: 0.12,
    avg_penalty: 0.3,
    home_win_rate: 50,
    bias_index: 50,
    bias_note:
      '阿联酋组执法。Wood vs Salah 对位 + 双方均须抢分；温哥华凉爽利于高强度，对拖延与战术犯规尺度预计稳健。',
    tendencies: [
      '阿联酋助理：Mohammed Al Hammadi',
      '其余 VAR/AVAR/第四官员待 FIFA 开球前完整公布',
      '延续阿联酋裁判世界杯传统（Bujsaim 1994–2002 三届主裁）',
      'G 组四队均 1 分——平局对双方均可接受',
      'BC Place 19°C 凉爽——90 分钟对抗强度可维持',
    ],
    officials: {
      ar1: 'Mohammed Al Hammadi (UAE)',
      ar2: '（FIFA 开赛前公布）',
      fourth: '（FIFA 开赛前公布）',
    },
    fifa_match_id: '400021480',
    fifa_official_id: '328497',
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) return pendingReferee(`FIFA Match ${matchId?.replace('m', '')} 裁判名单赛前公布。`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getReferee, REFEREES };
