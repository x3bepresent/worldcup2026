/**
 * Day 7 official referee appointments — FIFA Matches 21–24
 * Source: FIFA · Law 5 blog · ESPN (2026-06)
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-17/18';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m23: confirmedRef({
    name: 'Abdulrahman Al-Jassim',
    nation: 'Qatar',
    iso: 'qa',
    age: 38,
    wc_experience: '2018 · 2022 · 2026 — 三届世界杯执法',
    avg_yellow: 4.2,
    avg_red: 0.12,
    avg_penalty: 0.29,
    home_win_rate: 50,
    bias_index: 49,
    bias_note:
      '卡塔尔籍顶级裁判。C罗/葡萄牙控球局黄牌或偏少，但对刚果金低位铲抢与 Wissa 反击拉倒判罚果断。',
    tendencies: [
      '卡塔尔助理裁判组：Taleb Al-Marri、Saoud Al-Maqaleh',
      '第四官员 Abongile Tom（南非）',
      'VAR Khamis Al-Marri（卡塔尔）· AVAR Juan Soto · SVAR Hernán Mastrangelo',
      'K组揭幕战预计 4–5 张黄牌，点球尺度相对明确',
    ],
    officials: {
      ar1: 'Taleb Al-Marri (QAT)',
      ar2: 'Saoud Al-Maqaleh (QAT)',
      fourth: 'Abongile Tom (RSA)',
      var: 'Khamis Al-Marri (QAT)',
      avar: 'Juan Soto (VEN)',
      svar: 'Hernán Mastrangelo (ARG)',
    },
  }),

  m22: confirmedRef({
    name: 'Clément Turpin',
    nation: 'France',
    iso: 'fr',
    age: 42,
    wc_experience: '2018 · 2022 · 2026 — 三届世界杯 · 2022 决赛主裁',
    avg_yellow: 4.0,
    avg_red: 0.1,
    avg_penalty: 0.27,
    home_win_rate: 48,
    bias_index: 50,
    bias_note:
      '2022 决赛主裁，大赛尺度成熟。英格兰 vs 克罗地亚 2018 半决赛重演，对 Modrić/Bellingham 犯规判罚是焦点。',
    tendencies: [
      '法国助理裁判组：Nicolas Danos、Benjamin Pagès',
      '第四官员 Katia Garcia（墨西哥）',
      'VAR Jérôme Brisard（法国）· AVAR Willy Delajod · SVAR Fedayi San',
      '大赛老对手局预计 4–5 张黄牌',
    ],
    officials: {
      ar1: 'Nicolas Danos (FRA)',
      ar2: 'Benjamin Pagès (FRA)',
      fourth: 'Katia Garcia (MEX)',
      var: 'Jérôme Brisard (FRA)',
      avar: 'Willy Delajod (FRA)',
      svar: 'Fedayi San (SUI)',
    },
  }),

  m21: confirmedRef({
    name: 'Glenn Nyberg',
    nation: 'Sweden',
    iso: 'se',
    age: 40,
    wc_experience: '2026 世界杯首秀主裁 · UEFA 精英裁判',
    avg_yellow: 4.4,
    avg_red: 0.11,
    avg_penalty: 0.25,
    home_win_rate: 49,
    bias_index: 49,
    bias_note:
      '瑞典籍主裁。Kudus/Partey 对位巴拿马 MLS 班底，对身体对抗容忍度中等；定位球犯规尺度是变量。',
    tendencies: [
      '瑞典助理裁判组：Mahbod Beigi、Andreas Söderkvist',
      '第四官员 Khalid Al-Turais（沙特）',
      'VAR Bram Van Driessche（比利时）· AVAR Marco Di Bello · SVAR Bastian Dankert',
      '弱队密集防守局黄牌或略多，预计 4–6 张',
    ],
    officials: {
      ar1: 'Mahbod Beigi (SWE)',
      ar2: 'Andreas Söderkvist (SWE)',
      fourth: 'Khalid Al-Turais (KSA)',
      var: 'Bram Van Driessche (BEL)',
      avar: 'Marco Di Bello (ITA)',
      svar: 'Bastian Dankert (GER)',
    },
  }),

  m24: confirmedRef({
    name: 'Anthony Taylor',
    nation: 'England',
    iso: 'gb-eng',
    age: 46,
    wc_experience: '2014 · 2018 · 2022 · 2026 — 四届世界杯执法',
    avg_yellow: 4.3,
    avg_red: 0.13,
    avg_penalty: 0.28,
    home_win_rate: 51,
    bias_index: 51,
    bias_note:
      '英格兰籍顶级裁判。Azteca 高原夜战，对 Díaz/James 速度局禁区内拉扯判罚尺度是核心变量。',
    tendencies: [
      '英格兰助理裁判组：Gary Beswick、Adam Nunn',
      '第四官员 Juan Calderón（哥斯达黎加）',
      'VAR Ivan Bebek（克罗地亚）· AVAR Jarred Gillett · SVAR Carlos Del Cerro Grande',
      '哥伦比亚控球局预计 4–5 张黄牌，乌兹别克低位犯规为主',
    ],
    officials: {
      ar1: 'Gary Beswick (ENG)',
      ar2: 'Adam Nunn (ENG)',
      fourth: 'Juan Calderón (CRC)',
      var: 'Ivan Bebek (CRO)',
      avar: 'Jarred Gillett (ENG)',
      svar: 'Carlos Del Cerro Grande (ESP)',
    },
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) return pendingReferee(`FIFA Match ${matchId} 裁判名单赛前公布。`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getReferee, REFEREES };
