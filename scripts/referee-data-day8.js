/**
 * Day 8 official referee appointments — FIFA Matches 25–28
 * Source: FIFA · Refereeing World · ESPN · AS USA · Global Sports Archive (2026-06)
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-18';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m25: confirmedRef({
    name: 'Tori Penso',
    nation: 'United States',
    iso: 'us',
    age: 39,
    wc_experience: '2023 女足世界杯决赛主裁 · 2026 史上首位执法男足世界杯的美国女裁判',
    avg_yellow: 3.8,
    avg_red: 0.08,
    avg_penalty: 0.22,
    home_win_rate: 49,
    bias_index: 49,
    bias_note:
      'CONCACAF 顶尖女裁判执法 A 组次轮。Schick/Tau 身体对抗与定位球犯规尺度是焦点；与 Mayo/Nesbitt 全美执法组默契度高。',
    tendencies: [
      '美国助理裁判组：Brooke Mayo、Kathryn Nesbitt',
      '第四官员 Campbell-Kirk Kawana-Waugh（新西兰）· 候补边裁 Isaac Trevis',
      'VAR Tatiana Guzmán（尼加拉瓜）· AVAR Joe Dickerson · SVAR Mohammed Obaid Khadim',
      '亚特兰大次轮抢分战预计 4–5 张黄牌，点球尺度相对明确',
    ],
    officials: {
      ar1: 'Brooke Mayo (USA)',
      ar2: 'Kathryn Nesbitt (USA)',
      fourth: 'Campbell-Kirk Kawana-Waugh (NZL)',
      var: 'Tatiana Guzmán (NCA)',
      avar: 'Joe Dickerson (USA)',
      svar: 'Mohammed Obaid Khadim (UAE)',
    },
  }),

  m26: confirmedRef({
    name: 'João Pinheiro',
    nation: 'Portugal',
    iso: 'pt',
    age: 38,
    wc_experience: '2026 世界杯首秀主裁 · 2025 世预赛波黑 1-1 奥地利',
    avg_yellow: 4.9,
    avg_red: 0.11,
    avg_penalty: 0.26,
    home_win_rate: 48,
    bias_index: 50,
    bias_note:
      '葡萄牙籍主裁。Džeko 支点与瑞士肋部渗透犯规判罚是焦点；Katić/Lukić/Demirović 均有第二张黄牌停赛风险。',
    tendencies: [
      '葡萄牙助理裁判组：Bruno Jesus、Luciano Maia',
      '第四官员 Yusuke Araki（日本）· 候补边裁 Jun Mihara',
      'B 组四队均 1 分，洛杉矶抢分战预计 5–6 张黄牌',
      'Pinheiro 联赛场均近 5 黄，对拖延时间与战术犯规尺度偏严',
    ],
    officials: {
      ar1: 'Bruno Jesus (POR)',
      ar2: 'Luciano Maia (POR)',
      fourth: 'Yusuke Araki (JPN)',
    },
  }),

  m27: confirmedRef({
    name: 'Cristián Garay',
    nation: 'Chile',
    iso: 'cl',
    age: 36,
    wc_experience: '2026 男足世界杯首秀 · 智利 12 年来首位世界杯主裁',
    avg_yellow: 4.2,
    avg_red: 0.09,
    avg_penalty: 0.24,
    home_win_rate: 54,
    bias_index: 52,
    bias_note:
      '智利全组执法温哥华主场战。Davies 高位压迫与卡塔尔低位犯规、东道主节奏控制是判罚焦点。',
    tendencies: [
      '智利助理裁判组：José Retamal、Miguel Rocha',
      '第四官员 Kevin Ortega（秘鲁）· 候补边裁 Michael Orué',
      'VAR Juan Lara（智利）· AVAR Rodolpho Toski · SVAR Nicolás Gallo',
      '东道主 BC Place 次轮预计 4–5 张黄牌，对拖延时间判罚果断',
    ],
    officials: {
      ar1: 'José Retamal (CHI)',
      ar2: 'Miguel Rocha (CHI)',
      fourth: 'Kevin Ortega (PER)',
      var: 'Juan Lara (CHI)',
      avar: 'Rodolpho Toski (BRA)',
      svar: 'Nicolás Gallo (COL)',
    },
  }),

  m28: confirmedRef({
    name: 'Gustavo Tejera',
    nation: 'Uruguay',
    iso: 'uy',
    age: 37,
    wc_experience: '2018 FIFA 国际裁判 · U-17/U-20 世界杯 · 2026 成年世界杯首秀',
    avg_yellow: 5.1,
    avg_red: 0.13,
    avg_penalty: 0.27,
    home_win_rate: 52,
    bias_index: 53,
    bias_note:
      '乌拉圭名哨，执法风格偏严（生涯场均约 5 黄）。孙兴慜/Jiménez 对位与墨西哥主场 A 组榜首战纪律是核心变量。',
    tendencies: [
      '乌拉圭助理裁判组：Carlos Barreiro、Nicolás Tarán',
      '第四官员 Andrés Rojas（哥伦比亚）· 候补边裁 Alexander Guzmán',
      '开幕战墨西哥战已有 3 红，本场预计 5–7 张黄牌，重复犯规容忍度低',
      'Tejera 世界杯首秀即执法榜首对话，点球与禁区内拉扯尺度受关注',
    ],
    officials: {
      ar1: 'Carlos Barreiro (URU)',
      ar2: 'Nicolás Tarán (URU)',
      fourth: 'Andrés Rojas (COL)',
    },
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) return pendingReferee(`FIFA Match ${matchId?.replace('m', '')} 裁判名单赛前公布。`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getReferee, REFEREES };
