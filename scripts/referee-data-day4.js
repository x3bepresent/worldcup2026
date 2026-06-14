/**
 * Day 4 official referee appointments — FIFA Matches 9-12 (2026-06-14)
 * Source: FIFA official appointment (via @FIFAWorldCup) · Refereeing World · Sportstar
 */

const SOURCE = 'FIFA · Match officials · 2026-06-14';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m09: confirmedRef({
    name: 'Jalal Jayed',
    nation: 'Morocco',
    iso: 'ma',
    age: 38,
    wc_experience: '2026 世界杯首秀主裁 · FIFA 名单自 2019',
    avg_yellow: 3.9,
    avg_red: 0.12,
    avg_penalty: 0.28,
    home_win_rate: 54,
    bias_index: 52,
    bias_note:
      '摩洛哥籍主裁，国际赛场出牌适中偏稳。对身体对抗容忍度中等，对战术犯规与拖延较敏感；大赛首秀预计按 FIFA 标准严格执法。',
    tendencies: [
      'FIFA 2026 首秀主裁，赛前压力低、德国控球局黄牌或偏少',
      'VAR：Hamza El-Fariq（摩洛哥）',
      '助理裁判：Zakaria Brinsi、Mostafa Akarkad（摩洛哥）',
    ],
    officials: {
      ar1: 'Zakaria Brinsi (MAR)',
      ar2: 'Mostafa Akarkad (MAR)',
      fourth: 'Abongile Tom (RSA)',
      var: 'Hamza El-Fariq (MAR)',
      avar: 'Nicolas Gallo (COL)',
      svar: 'Shaun Evans (AUS)',
    },
  }),

  m10: confirmedRef({
    name: 'Ismail Elfath',
    nation: 'USA',
    iso: 'us',
    age: 42,
    wc_experience: '2022 卡塔尔世界杯执法 · MLS 顶级裁判',
    avg_yellow: 4.0,
    avg_red: 0.1,
    avg_penalty: 0.32,
    home_win_rate: 51,
    bias_index: 50,
    bias_note:
      '美国籍 FIFA 精英裁判，2022 世界杯已有执法经验。出牌率中等偏上，对高位压迫后的战术犯规判罚果断；技术流对决中允许比赛流畅进行，但中场绞杀仍会出牌。',
    tendencies: [
      '2022 世界杯执法经验，大赛节奏把控成熟',
      'VAR：Armando Villarreal（美国）',
      '荷日中场 de Jong vs Kamada 绞杀，预计 4-5 张黄牌',
    ],
    officials: {
      ar1: 'Corey Parker (USA)',
      ar2: 'Kyle Atkins (USA)',
      fourth: 'Katia Garcia (MEX)',
      var: 'Armando Villarreal (USA)',
      avar: 'Rodolpho Toski (BRA)',
      svar: 'Tomasz Kwiatkowski (POL)',
    },
  }),

  m11: confirmedRef({
    name: 'François Letexier',
    nation: 'France',
    iso: 'fr',
    age: 36,
    wc_experience: '2024 欧洲杯决赛主裁 · 2026 世界杯执法',
    wc_final: '2024 欧洲杯决赛主裁',
    avg_yellow: 4.0,
    avg_red: 0.22,
    avg_penalty: 0.35,
    home_win_rate: 48,
    bias_index: 47,
    bias_note:
      '法国顶级裁判，2024 欧洲杯决赛主裁。执法风格严谨，对战术犯规与抗议出牌果断；Caicedo/Kessié 类型中场绞杀局黄牌风险偏高，点球判罚尺度相对明确。',
    tendencies: [
      '欧洲杯决赛级主裁，大赛压力承受力强',
      'VAR：Jarred Gillett（英格兰）',
      '预计 5-6 张黄牌，Oliver 非本场主裁——本场为 Letexier',
    ],
    officials: {
      ar1: 'Cyril Mugnier (FRA)',
      ar2: 'Mehdi Rahmouni (FRA)',
      fourth: 'Khalid Al-Turais (KSA)',
      var: 'Jarred Gillett (ENG)',
      avar: 'Willy Delajod (FRA)',
      svar: 'Bram Van Driessche (BEL)',
    },
  }),

  m12: confirmedRef({
    name: 'Yael Falcon',
    nation: 'Argentina',
    iso: 'ar',
    age: 44,
    wc_experience: '2025 世俱杯执法 · 阿根廷联赛顶级裁判',
    avg_yellow: 5.6,
    avg_red: 0.15,
    avg_penalty: 0.38,
    home_win_rate: 53,
    bias_index: 54,
    bias_note:
      '阿根廷籍主裁，出牌率偏高（南美联赛风格）。对犯规与抗议容忍度较低，34°C 高温下战术犯规可能增多；2025 世俱杯已有大赛执法经验。',
    tendencies: [
      '出牌率南美偏高，高温消耗局黄牌或达 4-5 张',
      'VAR：Juan Lara（智利）',
      '助理裁判：Maximiliano Del Yesso、Facundo Rodriguez（阿根廷）',
    ],
    officials: {
      ar1: 'Maximiliano Del Yesso (ARG)',
      ar2: 'Facundo Rodriguez (ARG)',
      fourth: 'Juan Calderon (CRC)',
      var: 'Juan Lara (CHI)',
      avar: 'Antonio Garcia (URU)',
      svar: 'Hernan Mastrangelo (ARG)',
    },
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) throw new Error(`Unknown referee id: ${matchId}`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getReferee, REFEREES };
