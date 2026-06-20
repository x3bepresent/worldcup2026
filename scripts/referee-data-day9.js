/**
 * Day 9 official referee appointments — FIFA Match 31 (m29–m32 pending)
 * Source: FIFA api.fifa.com · Global Sports Archive · Refereeing World (2026-06)
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-19';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m31: confirmedRef({
    name: 'Iván Barton',
    nation: 'El Salvador',
    iso: 'sv',
    age: 35,
    wc_experience:
      '2022 世界杯 3 场（德1-2日 · 巴1-0瑞 · 英3-0塞）· 2025 世俱杯 · FIFA 国际裁判自 2018',
    avg_yellow: 5.0,
    avg_red: 0.11,
    avg_penalty: 0.26,
    home_win_rate: 50,
    bias_index: 52,
    bias_note:
      '萨尔瓦多名哨执法 D 组生死战。Çalhanoğlu 定位球与 Gómez/Cubas 防守犯规、Yıldız/Güler 肋部被侵犯尺度是焦点；Barton 生涯场均约 5 黄，对拖延时间与重复犯规容忍度低。',
    tendencies: [
      '萨尔瓦多助理裁判组：David Morán、Henri Antonio Pupiro',
      '第四官员 Oshane Nation（牙买加）· 候补边裁 Caleb Wales（特立尼达）',
      'VAR Khamis Mohammed Al Marri（卡塔尔）· AVAR Tatiana Guzmán · SVAR Abdullah Dhafer Al Shehri',
      'D 组 0 分生死战预计 5–6 张黄牌，点球与禁区内拉扯尺度受关注',
      '2022 世界杯曾执法德国负日本 — 对高位压迫下战术犯规判罚果断',
    ],
    officials: {
      ar1: 'David Morán (SLV)',
      ar2: 'Henri Antonio Pupiro (SLV)',
      fourth: 'Oshane Nation (JAM)',
      var: 'Khamis Mohammed Al Marri (QAT)',
      avar: 'Tatiana Guzmán (NCA)',
      svar: 'Abdullah Dhafer Al Shehri (KSA)',
    },
    fifa_match_id: '400021460',
    fifa_official_id: '408378',
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) return pendingReferee(`FIFA Match ${matchId?.replace('m', '')} 裁判名单赛前公布。`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getReferee, REFEREES };
