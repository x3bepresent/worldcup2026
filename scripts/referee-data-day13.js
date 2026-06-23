/**
 * Day 13 official referee appointments — FIFA Matches 45–48
 * Source: FIFA · Law5 blog · Sports Mole · Dailysports · 2026-06-20/23
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-20';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m47: confirmedRef({
    name: 'Jalal Jayed',
    nation: 'Morocco',
    iso: 'ma',
    age: 44,
    wc_experience:
      '2026 世界杯主裁 · 摩洛哥顶级 · AFC/CAF 执法经验 · 全非组执法葡萄牙战',
    avg_yellow: 4.5,
    avg_red: 0.12,
    avg_penalty: 0.3,
    home_win_rate: 50,
    bias_index: 50,
    bias_note:
      '摩洛哥全组执法 K 组次轮。C罗/B费 肋部破局 vs Katanec 5-4-1 铁桶；对战术犯规、拖延时间容忍度中等，点球尺度相对明确。',
    tendencies: [
      '摩洛哥助理：Zakaria Brinsi、Mostafa Akarkad',
      '第四官员 Abongile Tom（南非）· 候补 Zakhele Siwela（RSA）',
      'VAR Leodan González（乌拉圭）· AVAR Hamza El Fariq（MAR）· SVAR Hernán Mastrangelo（ARG）',
      '休斯顿 32°C 夏夜——领先方后段拖延与战术犯规是黄牌高发点',
      '葡萄牙 1-1 刚果后须破局；乌兹别克 0 分垫底低位纪律受考验',
    ],
    officials: {
      ar1: 'Zakaria Brinsi (MAR)',
      ar2: 'Mostafa Akarkad (MAR)',
      fourth: 'Abongile Tom (RSA)',
      reserve_ar: 'Zakhele Siwela (RSA)',
      var: 'Leodan González (URU)',
      avar: 'Hamza El Fariq (MAR)',
      svar: 'Hernán Mastrangelo (ARG)',
    },
    fifa_match_id: '400021503',
    fifa_official_id: '328497',
  }),

  m45: confirmedRef({
    name: 'Héctor Said Martínez',
    nation: 'Honduras',
    iso: 'hn',
    age: 34,
    wc_experience:
      '2026 世界杯主裁首秀——已执法卡塔尔 1-1 瑞士（3 黄 1 点）· 中美洲 CONCACAF 代表',
    avg_yellow: 4.2,
    avg_red: 0.1,
    avg_penalty: 0.35,
    home_win_rate: 48,
    bias_index: 51,
    bias_note:
      '洪都拉斯全组执法 L 组榜首战。Tuchel 高位 vs Addo 低位 + Kudus 反击；对身体对抗与禁区内拉扯尺度受关注，预计 4–5 张黄牌。',
    tendencies: [
      '洪都拉斯助理：Walter López、Christian Ramírez',
      '第四官员 Ma Ning（中国）· 候补 Zhou Fei（CHN）',
      'VAR Armando Villarreal（美国）· AVAR Erick Miranda（MEX）· SVAR Abdullah Alshehri（KSA）',
      'Gillette 波士顿夏夜——英格兰 4-2 克罗地亚后高位逼抢或引战术犯规',
      'L 组榜首对话：加纳 1-0 巴拿马后与英格兰同分',
    ],
    officials: {
      ar1: 'Walter López (HON)',
      ar2: 'Christian Ramírez (HON)',
      fourth: 'Ma Ning (CHN)',
      reserve_ar: 'Zhou Fei (CHN)',
      var: 'Armando Villarreal (USA)',
      avar: 'Erick Miranda (MEX)',
      svar: 'Abdullah Alshehri (KSA)',
    },
    fifa_match_id: '400021506',
    fifa_official_id: '416161',
  }),

  m46: confirmedRef({
    name: 'Pierre Atcho',
    nation: 'Gabon',
    iso: 'ga',
    age: 38,
    wc_experience:
      '2026 世界杯主裁——已执法挪威 3-2 伊拉克（本届首场）· 加蓬 CAF 精英裁判',
    avg_yellow: 4.8,
    avg_red: 0.14,
    avg_penalty: 0.28,
    home_win_rate: 47,
    bias_index: 49,
    bias_note:
      '加蓬全组执法 L 组次轮。Dalić 控球破局 vs Christiansen 5-4-1 铁桶；对战术犯规、拖延时间容忍度中等，多伦多凉爽利于高强度对抗。',
    tendencies: [
      '加蓬助理：Boris Ditsoga、Amos Abeigne Ndong',
      '第四官员 Khalid Al-Turais（沙特）· 候补 Mohammed Al-Bakry（KSA）',
      'VAR Nicolás Gallo（哥伦比亚）· AVAR Fu Ming（中国）· SVAR Bastian Dankert（GER）',
      '巴拿马 0 分须抢分 · 克罗地亚 2-4 英格兰后须穿盘',
      '多伦多 22°C 凉爽——90 分钟对抗强度可维持',
    ],
    officials: {
      ar1: 'Boris Ditsoga (GAB)',
      ar2: 'Amos Abeigne Ndong (GAB)',
      fourth: 'Khalid Al-Turais (KSA)',
      reserve_ar: 'Mohammed Al-Bakry (KSA)',
      var: 'Nicolás Gallo (COL)',
      avar: 'Fu Ming (CHN)',
      svar: 'Bastian Dankert (GER)',
    },
    fifa_match_id: '400021511',
    fifa_official_id: '416162',
  }),

  m48: confirmedRef({
    name: 'Maurizio Mariani',
    nation: 'Italy',
    iso: 'it',
    age: 44,
    wc_experience:
      '2026 世界杯主裁 · 意大利 Serie A 顶级 · UEFA 精英裁判 · 意大利于组执法',
    avg_yellow: 4.4,
    avg_red: 0.11,
    avg_penalty: 0.32,
    home_win_rate: 51,
    bias_index: 52,
    bias_note:
      '意大利全组执法 K 组次轮。Díaz/James 宽度 vs Wissa 反击；对禁区内拉扯与转换犯规尺度预计偏严，高原夜战体能犯规或升。',
    tendencies: [
      '意大利助理：Daniele Bindoni、Alberto Tegoni',
      '第四官员 Juan Calderón（哥斯达黎加）· 候补 Juan Carlos Mora（CRC）',
      'VAR Marco Di Bello（意大利）· AVAR Mohammed Obaid Khadim（UAE）· SVAR Carlos Del Cerro Grande（ESP）',
      '哥伦比亚 K 组领跑宜穿盘 · 刚果 1-1 葡萄牙信心暴涨',
      '瓜达拉哈拉 1560m 海拔夜战——后段体能与拖延时间是焦点',
    ],
    officials: {
      ar1: 'Daniele Bindoni (ITA)',
      ar2: 'Alberto Tegoni (ITA)',
      fourth: 'Juan Calderón (CRC)',
      reserve_ar: 'Juan Carlos Mora (CRC)',
      var: 'Marco Di Bello (ITA)',
      avar: 'Mohammed Obaid Khadim (UAE)',
      svar: 'Carlos Del Cerro Grande (ESP)',
    },
    fifa_match_id: '400021501',
    fifa_official_id: '416163',
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) return pendingReferee(`FIFA Match ${matchId?.replace('m', '')} 裁判名单赛前公布。`);
  return { ...data };
}

module.exports = { getReferee, REFEREES };
