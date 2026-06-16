/**
 * Day 6 official referee appointments — FIFA Matches 17–20 (2026-06-16/17 北京时间)
 * Sources: FIFA · Refereeing World · Sportstar · ESPN (2026-06)
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-16/17';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m17: confirmedRef({
    name: 'Alireza Faghani',
    nation: 'Australia',
    iso: 'au',
    age: 42,
    wc_experience: '2014 · 2018 · 2022 · 2026 — 四届世界杯执法（历史首例）',
    avg_yellow: 4.1,
    avg_red: 0.14,
    avg_penalty: 0.28,
    home_win_rate: 49,
    bias_index: 50,
    bias_note:
      '澳籍顶级裁判，四届世界杯经验。对身体对抗容忍度中等，对拖延战术判罚果断；Mbappé/Mané 禁区内对抗与 Koulibaly 防空犯规是焦点。',
    tendencies: [
      '澳籍助理裁判组：George Lakrindis、James Lindsay',
      '第四官员 Sandro Schärer（瑞士）',
      'VAR Abdullah Al-Shehri（沙特）· AVAR Armando Villarreal · SVAR Tatiana Guzman',
      'I 组揭幕战预计 4–5 张黄牌，点球尺度相对明确',
    ],
    officials: {
      ar1: 'George Lakrindis (AUS)',
      ar2: 'James Lindsay (AUS)',
      fourth: 'Sandro Schärer (SUI)',
      var: 'Abdullah Al-Shehri (KSA)',
      avar: 'Armando Villarreal (USA)',
      svar: 'Tatiana Guzman (NCA)',
    },
  }),

  m18: confirmedRef({
    name: 'Pierre Atcho',
    nation: 'Gabon',
    iso: 'ga',
    age: 38,
    wc_experience: '2026 世界杯首秀主裁 · CAF 精英裁判',
    avg_yellow: 4.6,
    avg_red: 0.12,
    avg_penalty: 0.26,
    home_win_rate: 47,
    bias_index: 48,
    bias_note:
      '加蓬籍主裁，非洲足联精英裁判。伊拉克低位防守战术犯规可能偏多；对 Haaland 禁区内拉扯判罚尺度是变量。',
    tendencies: [
      '加蓬助理裁判组：Boris Ditsoga、Amos Abeigne',
      '第四官员 Amin Omar（埃及）',
      'VAR Guillermo Pacheco（墨西哥）· AVAR Hamza El-Fariq · SVAR Jarred Gillett',
      '弱队密集防守局黄牌或略多，预计 4–6 张',
    ],
    officials: {
      ar1: 'Boris Ditsoga (GAB)',
      ar2: 'Amos Abeigne (GAB)',
      fourth: 'Amin Omar (EGY)',
      var: 'Guillermo Pacheco (MEX)',
      avar: 'Hamza El-Fariq (MAR)',
      svar: 'Jarred Gillett (ENG)',
    },
  }),

  m19: confirmedRef({
    name: 'Szymon Marciniak',
    nation: 'Poland',
    iso: 'pl',
    age: 44,
    wc_experience: '2022 世界杯决赛主裁 · 2026 继续执法',
    avg_yellow: 4.4,
    avg_red: 0.15,
    avg_penalty: 0.31,
    home_win_rate: 51,
    bias_index: 52,
    bias_note:
      '2022 决赛主裁，大赛尺度成熟。阿根廷控球局黄牌或偏少，但对 Belmadi 低位铲抢与 Mahrez 反击拉倒判罚果断。',
    tendencies: [
      '波兰助理裁判组：Tomasz Listkiewicz、Adam Kupsik',
      '第四官员 Campbell-Kirk Kawana-Waugh（新西兰）',
      'VAR Tomasz Kwiatkowski（波兰）· AVAR Dennis Higler · SVAR Mohammed Obaid',
      'Messi/Mahrez 对位犯规是黄牌高发点，预计 4–5 张',
    ],
    officials: {
      ar1: 'Tomasz Listkiewicz (POL)',
      ar2: 'Adam Kupsik (POL)',
      fourth: 'Campbell-Kirk Kawana-Waugh (NZL)',
      var: 'Tomasz Kwiatkowski (POL)',
      avar: 'Dennis Higler (NED)',
      svar: 'Mohammed Obaid (UAE)',
    },
  }),

  m20: confirmedRef({
    name: 'Dahane Beida',
    nation: 'Mauritania',
    iso: 'mr',
    age: 40,
    wc_experience: '2026 世界杯首秀 · CAF 裁判',
    avg_yellow: 4.3,
    avg_red: 0.1,
    avg_penalty: 0.24,
    home_win_rate: 50,
    bias_index: 49,
    bias_note:
      '毛里塔尼亚籍主裁。Rangnick 高位压迫战术犯规尺度是核心变量——对 Al-Tamari 反击被拉倒预计判罚较严。',
    tendencies: [
      '安哥拉/喀麦隆助理裁判组：Jerson Dos Santos、Elvis Noupue',
      '第四官员 Oshane Nation（牙买加）',
      'VAR Mahmoud Ashour（埃及）· AVAR Nicolas Gallo · SVAR Rodolpho Toski',
      '压迫局预计 5–6 张黄牌，Jordan 低位犯规为主',
    ],
    officials: {
      ar1: 'Jerson Dos Santos (ANG)',
      ar2: 'Elvis Noupue (CMR)',
      fourth: 'Oshane Nation (JAM)',
      var: 'Mahmoud Ashour (EGY)',
      avar: 'Nicolas Gallo (COL)',
      svar: 'Rodolpho Toski (BRA)',
    },
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) throw new Error(`Unknown referee id: ${matchId}`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getReferee, REFEREES };
