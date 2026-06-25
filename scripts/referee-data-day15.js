/**
 * Day 15 official referee appointments — FIFA Matches 55–60
 * Source: FIFA · Law5 blog · 2026-06-25
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-25';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m55: confirmedRef({
    name: 'Glenn Nyberg',
    nation: 'Sweden',
    iso: 'se',
    age: 37,
    wc_experience:
      '2026 世界杯 · 小组赛加纳 vs 巴拿马主裁 · UEFA 精英裁判 · 执法 E 组库拉索 vs 科特迪瓦',
    avg_yellow: 4.2,
    avg_red: 0.1,
    avg_penalty: 0.31,
    home_win_rate: 47,
    bias_index: 49,
    bias_note:
      '瑞典主裁执法 E 组末轮。Advocaat 5-4-1 铁桶 vs Fae 4-3-3 须胜穿盘；对 Pépé 肋部犯规与禁区内拉扯尺度受关注，费城夏夜体能犯规或升。',
    tendencies: [
      '瑞典助理：Mahbod Beigi、Andreas Söderkvist',
      '第四官员 Sandro Schärer（瑞士）· 候补 Stéphane De Almeida（SUI）',
      'VAR Carlos Del Cerro Grande（西班牙）· AVAR Leodan Gonzalez（乌拉圭）· SVAR Juan Soto（委内瑞拉）',
      '费城 Lincoln Financial 24°C 夏夜——科特迪瓦须胜破密集',
      '同开 m56 厄瓜多尔-德国决定 E 组次席',
    ],
    officials: {
      ar1: 'Mahbod Beigi (SWE)',
      ar2: 'Andreas Söderkvist (SWE)',
      fourth: 'Sandro Schärer (SUI)',
      reserve_ar: 'Stéphane De Almeida (SUI)',
      var: 'Carlos Del Cerro Grande (ESP)',
      avar: 'Leodan Gonzalez (URU)',
      svar: 'Juan Soto (VEN)',
    },
    fifa_match_id: '400021468',
  }),

  m56: confirmedRef({
    name: 'Tori Penso',
    nation: 'United States',
    iso: 'us',
    age: 37,
    wc_experience:
      '2026 世界杯 · 历史第三位执法男足世界杯女裁判 · CONCACAF 精英 · 执法 E 组厄瓜多尔 vs 德国',
    avg_yellow: 4.0,
    avg_red: 0.08,
    avg_penalty: 0.29,
    home_win_rate: 46,
    bias_index: 48,
    bias_note:
      '美国女裁判执法 E 组焦点战。Beccacece 须胜 vs Nagelsmann 6 分或轮换；对 Caicedo 屏障犯规与 Musiala 速度尺度受关注，MetLife 人工草对德国短传略有影响。',
    tendencies: [
      '美国助理：Brooke Mayo、Kathryn Nesbitt',
      '第四官员 Campbell-Kirk Kawana-Waugh（新西兰）· 候补 Isaac Trevis（NZL）',
      'VAR Joe Dickerson（美国）· AVAR Fu Ming（中国）· SVAR Khamis Al Marri（卡塔尔）',
      'MetLife 25°C 夏夜 · FieldTurf 人工草',
      '德国 6 分领跑 · 轮换幅度是最大变量',
    ],
    officials: {
      ar1: 'Brooke Mayo (USA)',
      ar2: 'Kathryn Nesbitt (USA)',
      fourth: 'Campbell-Kirk Kawana-Waugh (NZL)',
      reserve_ar: 'Isaac Trevis (NZL)',
      var: 'Joe Dickerson (USA)',
      avar: 'Fu Ming (CHN)',
      svar: 'Khamis Al Marri (QAT)',
    },
    fifa_match_id: '400021466',
  }),

  m57: confirmedRef({
    name: 'Iván Barton',
    nation: 'El Salvador',
    iso: 'sv',
    age: 35,
    wc_experience:
      '2026 世界杯 · 巴拉圭 vs 土耳其主裁（Almirón 红牌）· CONCACAF 精英 · 执法 F 组日本 vs 瑞典生死战',
    avg_yellow: 4.5,
    avg_red: 0.15,
    avg_penalty: 0.33,
    home_win_rate: 48,
    bias_index: 50,
    bias_note:
      '萨尔瓦多主裁执法 F 组出线战。Moriyasu Kubo 肋部 vs Tomasson Isak 反击；对身体对抗与模拟接触尺度受关注，达拉斯 34°C 湿热下体能犯规是焦点。',
    tendencies: [
      '萨尔瓦多助理：David Morán、Antonio Pupiro（尼加拉瓜）',
      '第四官员 Dahane Beida（毛里塔尼亚）· 候补 Jerson Emiliano Dos Santos（安哥拉）',
      'VAR Nicolás Gallo（哥伦比亚）· AVAR Guillermo Pacheco（墨西哥）· SVAR Rodolpho Toski（巴西）',
      '达拉斯 AT&T 34°C 有顶盖仍热——FIFA 补水暂停概率高',
      '日本 4 分 vs 瑞典 3 分须胜 · 平局可能双双出局',
    ],
    officials: {
      ar1: 'David Morán (SLV)',
      ar2: 'Antonio Pupiro (NCA)',
      fourth: 'Dahane Beida (MTN)',
      reserve_ar: 'Jerson Emiliano Dos Santos (ANG)',
      var: 'Nicolás Gallo (COL)',
      avar: 'Guillermo Pacheco (MEX)',
      svar: 'Rodolpho Toski (BRA)',
    },
    fifa_match_id: '400021471',
  }),

  m58: confirmedRef({
    name: 'Katia Itzel García',
    nation: 'Mexico',
    iso: 'mx',
    age: 38,
    wc_experience:
      '2026 世界杯 · 第三位执法男足世界杯女裁判 · 日本 vs 荷兰第四官员履历 · 执法 F 组突尼斯 vs 荷兰',
    avg_yellow: 3.9,
    avg_red: 0.07,
    avg_penalty: 0.27,
    home_win_rate: 45,
    bias_index: 47,
    bias_note:
      '墨西哥女裁判执法 F 组末轮。Veglio 5-4-1 荣誉战 vs Koeman 4 分须胜巩固；对 Gakpo 肋部速度与 Khazri 远射犯规尺度受关注，Arrowhead 开放式 32°C 午后。',
    tendencies: [
      '墨西哥助理：Sandra Ramírez · 西班牙 José Enrique Naranjo Pérez',
      '第四官员 Juan Gabriel Benitez（巴拉圭）· 候补 Milciades Saldivar（PAR）',
      'VAR Erick Miranda（墨西哥）· AVAR Mohammed Obaid Khadim（阿联酋）· SVAR Hernan Mastrangelo（阿根廷）',
      '堪萨斯城 Arrowhead 32°C 开放式 · 天然草',
      '同开 m57 联动 F 组出线 · 荷兰深盘或轮换',
    ],
    officials: {
      ar1: 'Sandra Ramírez (MEX)',
      ar2: 'José Enrique Naranjo Pérez (ESP)',
      fourth: 'Juan Gabriel Benitez (PAR)',
      reserve_ar: 'Milciades Saldivar (PAR)',
      var: 'Erick Miranda (MEX)',
      avar: 'Mohammed Obaid Khadim (UAE)',
      svar: 'Hernan Mastrangelo (ARG)',
    },
    fifa_match_id: '400021473',
  }),

  m59: confirmedRef({
    name: 'Mustapha Ghorbal',
    nation: 'Algeria',
    iso: 'dz',
    age: 35,
    wc_experience:
      '2026 世界杯 · CAF 精英裁判 · 执法 D 组土耳其 vs 美国 · SoFi 主场大战',
    avg_yellow: 4.4,
    avg_red: 0.11,
    avg_penalty: 0.32,
    home_win_rate: 50,
    bias_index: 51,
    bias_note:
      '阿尔及利亚主裁执法 D 组末轮。Montella 0 分须胜 vs Pochettino 6 分已出线或轮换；对 Çalhanoğlu 远射与 Pulisic 速度尺度受关注，SoFi 凉爽封闭球场利于高强度对攻。',
    tendencies: [
      '阿尔及利亚助理：Mokrane Gourari、Abbes Akram Zerhoun',
      '第四官员 Omar Al Ali（阿联酋）· 候补 Mohammed Al Hammadi（UAE）',
      'VAR Antonio García（乌拉圭）· AVAR Mahmoud Ashour（埃及）· SVAR Juan Lara（智利）',
      'SoFi 23°C 有顶盖 · Hellas Matrix 人工草',
      '美国主场 SoFi · 土耳其 0 球 2 场须奇迹',
    ],
    officials: {
      ar1: 'Mokrane Gourari (ALG)',
      ar2: 'Abbes Akram Zerhoun (ALG)',
      fourth: 'Omar Al Ali (UAE)',
      reserve_ar: 'Mohammed Al Hammadi (UAE)',
      var: 'Antonio García (URU)',
      avar: 'Mahmoud Ashour (EGY)',
      svar: 'Juan Lara (CHI)',
    },
    fifa_match_id: '400021459',
  }),

  m60: confirmedRef({
    name: 'Clément Turpin',
    nation: 'France',
    iso: 'fr',
    age: 42,
    wc_experience:
      '2018/2022 世界杯主裁 · 2026 第二场 · UEFA 精英 · 执法 D 组巴拉圭 vs 澳大利亚生死战',
    avg_yellow: 4.3,
    avg_red: 0.12,
    avg_penalty: 0.3,
    home_win_rate: 49,
    bias_index: 50,
    bias_note:
      '法国主裁执法 D 组末轮生死战。Alfaro 4-4-2 宽度 vs Popovic 5-4-1 铁桶；对 Almirón 速度与 Goodwin 传中犯规尺度受关注，湾区 21°C 凉爽利于 90 分钟高强度。',
    tendencies: [
      '法国助理：Nicolas Danos、Benjamin Pagès',
      '第四官员 Oshane Nation（牙买加）· 候补 Caleb Wales（特立尼达）',
      'VAR Jérôme Brisard（法国）· AVAR Willy Delajod（法国）· SVAR Hamza El Fariq（摩洛哥）',
      'Levi\'s Stadium 21°C 湾区凉爽 · Bandera 混合天然草',
      '各 3 分同分 · 谁犯错谁回家',
    ],
    officials: {
      ar1: 'Nicolas Danos (FRA)',
      ar2: 'Benjamin Pagès (FRA)',
      fourth: 'Oshane Nation (JAM)',
      reserve_ar: 'Caleb Wales (TRI)',
      var: 'Jérôme Brisard (FRA)',
      avar: 'Willy Delajod (FRA)',
      svar: 'Hamza El Fariq (MAR)',
    },
    fifa_match_id: '400021461',
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) return pendingReferee(`FIFA Match ${matchId?.replace('m', '')} 裁判名单赛前公布。`);
  return { ...data };
}

module.exports = { getReferee, REFEREES };
