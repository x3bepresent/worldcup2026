/**
 * Day 5 official referee appointments — FIFA Matches 13–16 (2026-06-15/16)
 * Sources: FIFA · FotMob · Ahram Online · Foot Africa
 */

const SOURCE = 'FIFA · Match officials · 2026-06-15/16';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m14: confirmedRef({
    name: 'Adham Makhadmeh',
    nation: 'Jordan',
    iso: 'jo',
    age: 39,
    wc_experience: '2026 世界杯首秀主裁 · AFC 精英裁判',
    avg_yellow: 4.2,
    avg_red: 0.1,
    avg_penalty: 0.3,
    home_win_rate: 52,
    bias_index: 51,
    bias_note:
      '约旦籍 FIFA 精英裁判，2026 世界杯首秀。出牌适中，对身体对抗容忍度中等；西班牙控球局黄牌或偏少，但对拖延战术仍会警告。',
    tendencies: [
      'AFC 55+ 亚冠执法经验，大赛首秀预计按 FIFA 标准执法',
      '西班牙传控 vs 低位防守，预计 3-4 张黄牌（佛得角战术犯规为主）',
      'VAR 组赛前随 FIFA 官方名单公布',
    ],
    officials: {
      ar1: 'Ahmad Al-Rawashdeh (JOR)',
      ar2: 'Mohammad Al-Abdullah (JOR)',
      fourth: 'TBD (FIFA)',
      var: 'TBD (FIFA)',
      avar: 'TBD (FIFA)',
      svar: 'TBD (FIFA)',
    },
  }),

  m16: confirmedRef({
    name: 'Ramon Abatti',
    nation: 'Brazil',
    iso: 'br',
    age: 36,
    wc_experience: '2026 世界杯执法 · 巴甲顶级裁判',
    avg_yellow: 4.8,
    avg_red: 0.18,
    avg_penalty: 0.35,
    home_win_rate: 50,
    bias_index: 49,
    bias_note:
      '巴西籍主裁，南美联赛出牌率略高。De Bruyne vs Salah 对决中对身体对抗判罚果断；G组揭幕战预计 4-5 张黄牌，点球尺度相对明确。',
    tendencies: [
      '巴西助理裁判组：Danilo Manis、Rafael Alves',
      '第四官员 Kevin Ortega（秘鲁）',
      'Salah 反击被拉倒、比利时高位犯规是黄牌高发点',
    ],
    officials: {
      ar1: 'Danilo Manis (BRA)',
      ar2: 'Rafael Alves (BRA)',
      fourth: 'Kevin Ortega (PER)',
      var: 'TBD (FIFA)',
      avar: 'TBD (FIFA)',
      svar: 'TBD (FIFA)',
    },
  }),

  m13: confirmedRef({
    name: 'Maurizio Mariani',
    nation: 'Italy',
    iso: 'it',
    age: 44,
    wc_experience: '2026 世界杯首秀 · 意甲/欧联执法',
    avg_yellow: 4.5,
    avg_red: 0.12,
    avg_penalty: 0.32,
    home_win_rate: 48,
    bias_index: 47,
    bias_note:
      '意大利籍主裁，2026 世界杯首秀。迈阿密湿热夜场，Bielsa 高位压迫局战术犯规多；预计 5-6 张黄牌，对抗议出牌果断。',
    tendencies: [
      '2026 世界杯首秀 · 迈阿密「火烈鸟粉」裁判服',
      'Bielsa 压迫 vs Mancini 低位，沙特犯规打断节奏概率高',
      '乌拉圭 Valverde/Núñez 反击被拉倒是点球/黄牌关键',
    ],
    officials: {
      ar1: 'TBD (ITA)',
      ar2: 'TBD (ITA)',
      fourth: 'TBD (FIFA)',
      var: 'TBD (FIFA)',
      avar: 'TBD (FIFA)',
      svar: 'TBD (FIFA)',
    },
  }),

  m15: confirmedRef({
    name: 'César Arturo Ramos',
    nation: 'Mexico',
    iso: 'mx',
    age: 42,
    wc_experience: '2018/2022 世界杯执法 · 2026 三度执法',
    avg_yellow: 4.3,
    avg_red: 0.15,
    avg_penalty: 0.38,
    home_win_rate: 54,
    bias_index: 52,
    bias_note:
      '墨西哥籍 FIFA 精英裁判，2018/2022 世界杯已有经验。伊朗传控 vs 新西兰低位，Taremi/Wood 禁区内对抗是点球判罚焦点；预计 4 张黄牌左右。',
    tendencies: [
      '大赛经验丰富，SoFi 人工草皮局节奏流畅',
      '伊朗 Ezatolahi 绞杀 + Wood 背身对抗，中场黄牌风险中等',
      '2022 世界杯执法经验，关键判罚压力承受力强',
    ],
    officials: {
      ar1: 'TBD (MEX)',
      ar2: 'TBD (MEX)',
      fourth: 'TBD (FIFA)',
      var: 'TBD (FIFA)',
      avar: 'TBD (FIFA)',
      svar: 'TBD (FIFA)',
    },
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) throw new Error(`Unknown referee id: ${matchId}`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getReferee, REFEREES };
