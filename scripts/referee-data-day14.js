/**
 * Day 14 official referee appointments — FIFA Matches 49–54
 * Source: FIFA · Law5 blog · 2026-06-24
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-24';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m51: confirmedRef({
    name: 'Danny Makkelie',
    nation: 'Netherlands',
    iso: 'nl',
    age: 42,
    wc_experience:
      '2022 世界杯主裁 · 2026 世界杯 · 欧冠/欧联顶级 · UEFA 精英裁判 · 执法 B 组榜首战',
    avg_yellow: 4.3,
    avg_red: 0.1,
    avg_penalty: 0.32,
    home_win_rate: 49,
    bias_index: 50,
    bias_note:
      '荷兰全组执法 B 组末轮榜首战。Yakin 传控 vs Marsch 高位 + Davies 宽度；对身体对抗与禁区内拉扯尺度预计明确，点球尺度相对清晰。',
    tendencies: [
      '荷兰助理：Mario Diks、Hessel Steegstra',
      '第四官员 Iván Barton（萨尔瓦多）· 候补 David Morán（SLV）',
      'VAR Pol van Boekel（荷兰）· AVAR Carlos del Cerro Grande（西班牙）· SVAR Juan Soto（委内瑞拉）',
      '温哥华 18°C 凉爽——榜首对话预计 4–5 张黄牌；对拖延时间容忍度中等',
      '瑞士/加拿大各 4 分 · 平局或不够须主动破局',
    ],
    officials: {
      ar1: 'Mario Diks (NED)',
      ar2: 'Hessel Steegstra (NED)',
      fourth: 'Iván Barton (SLV)',
      reserve_ar: 'David Morán (SLV)',
      var: 'Pol van Boekel (NED)',
      avar: 'Carlos del Cerro Grande (ESP)',
      svar: 'Juan Soto (VEN)',
    },
    fifa_match_id: '400021451',
    fifa_official_id: '328498',
  }),

  m52: confirmedRef({
    name: 'Yoshimi Yamashita',
    nation: 'Japan',
    iso: 'jp',
    age: 38,
    wc_experience:
      '2022 世界杯主裁 · 2023 女足世界杯决赛 · 2026 世界杯 · 亚洲 FIFA 精英女裁判（男女世界杯均执法）',
    avg_yellow: 4.1,
    avg_red: 0.08,
    avg_penalty: 0.28,
    home_win_rate: 47,
    bias_index: 49,
    bias_note:
      '日本主裁执法 B 组垫底对话。Džeko 定位球强攻 vs Sánchez 5-4-1 铁桶；对战术犯规、模拟接触尺度受关注，预计判罚尺度偏稳。',
    tendencies: [
      '日本助理：Naomi Teshirogi、Makoto Bozono',
      '第四官员 Tori Penso（美国）· 候补 Brooke Mayo（USA）',
      'VAR Fu Ming（中国）· AVAR Mohammed Obaid Khadim（UAE）· SVAR Bastian Dankert（GER）',
      '西雅图 17°C 凉湿——波黑须胜、卡塔尔铁桶；定位球与转换犯规是黄牌高发点',
      'B 组末轮 · 胜者仍可能凭净胜球晋级',
    ],
    officials: {
      ar1: 'Naomi Teshirogi (JPN)',
      ar2: 'Makoto Bozono (JPN)',
      fourth: 'Tori Penso (USA)',
      reserve_ar: 'Brooke Mayo (USA)',
      var: 'Fu Ming (CHN)',
      avar: 'Mohammed Obaid Khadim (UAE)',
      svar: 'Bastian Dankert (GER)',
    },
    fifa_match_id: '400021448',
    fifa_official_id: '416164',
  }),

  m49: confirmedRef({
    name: 'Slavko Vinčić',
    nation: 'Slovenia',
    iso: 'si',
    age: 44,
    wc_experience:
      '2022 世界杯主裁 · 2026 世界杯 · 欧冠淘汰赛 · UEFA 精英裁判 · 执法 C 组苏格兰 vs 巴西',
    avg_yellow: 4.6,
    avg_red: 0.12,
    avg_penalty: 0.3,
    home_win_rate: 46,
    bias_index: 48,
    bias_note:
      '斯洛文尼亚主裁执法 C 组焦点战。Clarke 5-4-1 低位 vs 安切洛蒂 深盘；对 McTominay 犯规与 Vinícius 速度尺度受关注，迈阿密湿热下体能犯规或升。',
    tendencies: [
      '斯洛文尼亚助理：Tomaž Klančnik、Andraž Kovačič',
      '第四官员 Raphael Claus（巴西）· 候补 Wagner Reway（BRA）',
      'VAR Marco Di Bello（意大利）· AVAR Armando Villarreal（美国）· SVAR Nicolás Gallo（哥伦比亚）',
      '迈阿密 31°C 湿热——苏格兰 3 分须胜；FIFA 补水暂停概率高',
      '巴西 4 分领跑 · 深盘热门但 Clarke 低位+定位球是冷门点',
    ],
    officials: {
      ar1: 'Tomaž Klančnik (SLO)',
      ar2: 'Andraž Kovačič (SLO)',
      fourth: 'Raphael Claus (BRA)',
      reserve_ar: 'Wagner Reway (BRA)',
      var: 'Marco Di Bello (ITA)',
      avar: 'Armando Villarreal (USA)',
      svar: 'Nicolás Gallo (COL)',
    },
    fifa_match_id: '400021455',
    fifa_official_id: '328499',
  }),

  m50: confirmedRef({
    name: 'Wilton Sampaio',
    nation: 'Brazil',
    iso: 'br',
    age: 43,
    wc_experience:
      '2022 世界杯主裁 · 2026 世界杯 · 南美 CONMEBOL 精英 · 执法 C 组摩洛哥 vs 海地',
    avg_yellow: 5.0,
    avg_red: 0.14,
    avg_penalty: 0.26,
    home_win_rate: 52,
    bias_index: 51,
    bias_note:
      '巴西主裁执法 C 组次轮。Regragui Hakimi 宽度穿盘 vs Garcia 5-4-1 铁桶；对身体对抗容忍度中等偏高，领先方后段拖延是黄牌高发点。',
    tendencies: [
      '巴西助理：Bruno Boschilia、Bruno Pires',
      '第四官员 João Pinheiro（葡萄牙）· 候补 António Nobre（POR）',
      'VAR Antonio García（乌拉圭）· AVAR Erick Miranda（墨西哥）· SVAR Abdullah Alshehri（KSA）',
      '亚特兰大 28°C 封闭式——摩洛哥 4 分领跑须穿盘',
      '海地 0 分须尊严 · 定位球是最大冷门变量',
    ],
    officials: {
      ar1: 'Bruno Boschilia (BRA)',
      ar2: 'Bruno Pires (BRA)',
      fourth: 'João Pinheiro (POR)',
      reserve_ar: 'António Nobre (POR)',
      var: 'Antonio García (URU)',
      avar: 'Erick Miranda (MEX)',
      svar: 'Abdullah Alshehri (KSA)',
    },
    fifa_match_id: '400021452',
    fifa_official_id: '416165',
  }),

  m53: confirmedRef({
    name: 'Mario Escobar',
    nation: 'Guatemala',
    iso: 'gt',
    age: 45,
    wc_experience:
      '2022 世界杯第四官员 · 2026 首场主裁 · CONCACAF 精英 · 中美洲代表执法 Azteca 大战',
    avg_yellow: 4.5,
    avg_red: 0.11,
    avg_penalty: 0.34,
    home_win_rate: 53,
    bias_index: 52,
    bias_note:
      '危地马拉主裁执法 A 组 Azteca 大战。Schick 高原破局 vs 墨西哥 6 分已出线；对禁区内拉扯与 Schick 定位球犯规尺度受关注，主场氛围或影响判罚节奏。',
    tendencies: [
      '危地马拉助理：Juan Daniel López、Leonardo García',
      '第四官员 Ismail Elfath（美国）· 候补 Frank Anderson（USA）',
      'VAR Armando Villarreal（美国）· AVAR Juan Pablo Montiel（巴拉圭）· SVAR Danny Makkelie（荷兰）',
      '阿兹特克 2240m 海拔——捷克 70\' 后体能犯规或升',
      '墨西哥 6 分领跑 · 末轮或轮换但仍要捍卫主场',
    ],
    officials: {
      ar1: 'Juan Daniel López (GUA)',
      ar2: 'Leonardo García (GUA)',
      fourth: 'Ismail Elfath (USA)',
      reserve_ar: 'Frank Anderson (USA)',
      var: 'Armando Villarreal (USA)',
      avar: 'Juan Pablo Montiel (PAR)',
      svar: 'Danny Makkelie (NED)',
    },
    fifa_match_id: '400021444',
    fifa_official_id: '416166',
  }),

  m54: confirmedRef({
    name: 'Mohammed Abdulla',
    nation: 'United Arab Emirates',
    iso: 'ae',
    age: 40,
    wc_experience:
      '2022 世界杯第四官员 · 2026 主裁 · AFC 精英 · 执法 A 组南非 vs 韩国',
    avg_yellow: 4.4,
    avg_red: 0.1,
    avg_penalty: 0.3,
    home_win_rate: 48,
    bias_index: 50,
    bias_note:
      '阿联酋主裁执法 A 组末轮。Son 肋部 vs Tau 反击 + Mokoena 屏障；对转换速度与模拟接触尺度受关注，蒙特雷 33°C 午后体能犯规是焦点。',
    tendencies: [
      '阿联酋助理：Mohamed Al Hammadi、Hasan Al Mahri',
      '第四官员 Ko Hyung-jin（韩国）· 候补 Kim Woo-sung（KOR）',
      'VAR Abdulla Al-Marri（卡塔尔）· AVAR Yoshimi Yamashita（日本）· SVAR Clément Turpin（法国）',
      '蒙特雷 33°C 午后——韩国 3 分须胜 · 南非 1 分须抢分',
      'A 组出线形势复杂 · Son+李刚仁 肋部是核心对位',
    ],
    officials: {
      ar1: 'Mohamed Al Hammadi (UAE)',
      ar2: 'Hasan Al Mahri (UAE)',
      fourth: 'Ko Hyung-jin (KOR)',
      reserve_ar: 'Kim Woo-sung (KOR)',
      var: 'Abdulla Al-Marri (QAT)',
      avar: 'Yoshimi Yamashita (JPN)',
      svar: 'Clément Turpin (FRA)',
    },
    fifa_match_id: '400021445',
    fifa_official_id: '416167',
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) return pendingReferee(`FIFA Match ${matchId?.replace('m', '')} 裁判名单赛前公布。`);
  return { ...data };
}

module.exports = { getReferee, REFEREES };
