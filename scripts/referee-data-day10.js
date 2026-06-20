/**
 * Day 10 official referee appointments — FIFA Matches 33–36
 * Source: FIFA api.fifa.com · Wikipedia Group E/F · 2026-06-20
 */
const { pendingReferee } = require('./pending-templates');

const SOURCE = 'FIFA · Match officials · 2026-06-20';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m33: confirmedRef({
    name: 'Juan Gabriel Benítez',
    nation: 'Paraguay',
    iso: 'py',
    age: 44,
    wc_experience:
      '2026 世界杯首秀主裁（此前任第四官员）· 南美 WCQ 场均约 22.6 犯规 · FIFA 国际裁判',
    avg_yellow: 4.8,
    avg_red: 0.15,
    avg_penalty: 0.22,
    home_win_rate: 48,
    bias_index: 50,
    bias_note:
      '巴拉圭名哨执法 E 组榜首战。德国高位压迫下战术犯规、科特迪瓦 Pépé/Kessié 转换速度、禁区内拉扯尺度是焦点；本届首次担任主裁。',
    tendencies: [
      '巴拉圭助理：Eduardo Cardozo、Milcíades Saldívar',
      '第四官员 Khalid Al-Turais（沙特）· 候补 Mohammed Al-Bakry',
      'VAR Antonio García（乌拉圭）· AVAR Guillermo Pacheco · SVAR Juan Soto',
      '榜首战预计 4–5 张黄牌；对重复犯规与拖延时间容忍度中等',
      '德国 7-1 后节奏快，科特迪瓦 1-0 厄瓜多尔后反击纪律受考验',
    ],
    officials: {
      ar1: 'Eduardo Cardozo (PAR)',
      ar2: 'Milcíades Saldívar (PAR)',
      fourth: 'Khalid Al-Turais (KSA)',
      var: 'Antonio García (URU)',
      avar: 'Guillermo Pacheco (MEX)',
      svar: 'Juan Soto (VEN)',
    },
    fifa_match_id: '400021469',
    fifa_official_id: '416159',
  }),

  m34: confirmedRef({
    name: 'Ning Ma',
    nation: 'China',
    iso: 'cn',
    age: 47,
    wc_experience:
      '2022 世界杯第四官员 · 2026 首场主裁——24 年来首位执法世界杯的中国主裁 · 中超场均约 26.4 犯规',
    avg_yellow: 5.2,
    avg_red: 0.12,
    avg_penalty: 0.28,
    home_win_rate: 52,
    bias_index: 51,
    bias_note:
      '中国主裁历史性执法。厄瓜多尔 Caicedo 屏障 + 库拉索 Advocaat 铁桶低位；三名中国裁判同场（马宁主裁、周飞边裁、傅明 VAR）为世界杯首次。',
    tendencies: [
      '中国助理：Zhou Fei · 第四官员 Campbell-Kirk Kawana-Waugh（新西兰）',
      'VAR Fu Ming（中国）· 中国裁判组同场执法',
      '库拉索 1-7 德国后预计 5-4-1 极守；对战术犯规与模拟接触尺度受关注',
      '厄瓜多尔 0-1 后抢分动机强，Advocaat 低位或拖慢节奏',
      '历史意义场次——判罚尺度预计偏稳、避免过度干预',
    ],
    officials: {
      ar1: 'Zhou Fei (CHN)',
      ar2: 'Saoud Ahmed Saoud Abdulla Al Maqaleh (BHR)',
      fourth: 'Campbell-Kirk Kawana-Waugh (NZL)',
      var: 'Fu Ming (CHN)',
    },
    fifa_match_id: '400021465',
    fifa_official_id: '328495',
  }),

  m35: confirmedRef({
    name: 'Michael Oliver',
    nation: 'England',
    iso: 'gb-eng',
    age: 41,
    wc_experience:
      '2018/2022 世界杯 · 2024 欧洲杯 · 英超顶级裁判 · 2026 本届首场主裁',
    avg_yellow: 3.9,
    avg_red: 0.08,
    avg_penalty: 0.31,
    home_win_rate: 46,
    bias_index: 49,
    bias_note:
      '英格兰名哨执法 F 组榜首对话。荷兰 Koeman 肋部 vs 瑞典 Isak 支点；Oliver 以允许对抗、少打断节奏著称，休斯顿湿热下体能犯规或升。',
    tendencies: [
      '英格兰助理：Stuart Burt、James Mainwaring',
      '第四官员 Abongile Tom（南非）· 候补 Zakhele Siwela',
      'VAR Jarred Gillett（澳大利亚）',
      '瑞典 5-1 突尼斯后身体对抗强；荷兰 2-2 日本需取胜',
      '预计卡牌适中；对禁区内拉扯与手球 VAR 复核积极',
    ],
    officials: {
      ar1: 'Stuart Burt (ENG)',
      ar2: 'James Mainwaring (ENG)',
      fourth: 'Abongile Tom (RSA)',
      var: 'Jarred Gillett (AUS)',
    },
    fifa_match_id: '400021472',
    fifa_official_id: '347710',
  }),

  m36: confirmedRef({
    name: 'Istvan Kovacs',
    nation: 'Romania',
    iso: 'ro',
    age: 40,
    wc_experience:
      '2022 世界杯 · 2024 欧洲杯 · UEFA 精英裁判 · 执法世界杯史上第 1000 场比赛',
    avg_yellow: 4.5,
    avg_red: 0.18,
    avg_penalty: 0.25,
    home_win_rate: 50,
    bias_index: 50,
    bias_note:
      '罗马尼亚名哨执法「世界杯第 1000 场」——FIFA 特制金色袖标球衣。日本 Kubo+Mitoma 控球 vs 突尼斯 Khazri 定位球；里程碑场次判罚尺度预计稳健。',
    tendencies: [
      '罗马尼亚助理裁判组 · VAR/AVAR 待 FIFA 开赛前完整公布',
      'FIFA 第 1000 场纪念 · Collina 称「选中当时最佳主裁之一」',
      '突尼斯 1-5 瑞典后须抢分；日本 2-2 荷兰后 Moriyasu 控球主导',
      '蒙特雷夜场 · 预计 4–5 黄 · 对拖延与战术犯规零容忍',
      '历史场次——点球/红牌尺度受全球关注',
    ],
    officials: {
      fourth: '（FIFA 开赛前公布完整执法组）',
    },
    fifa_match_id: '400021475',
    fifa_official_id: '314605',
    milestone_note: 'FIFA World Cup 第 1000 场比赛 · 特制金色袖标',
  }),
};

function getReferee(matchId) {
  const data = REFEREES[matchId];
  if (!data) return pendingReferee(`FIFA Match ${matchId?.replace('m', '')} 裁判名单赛前公布。`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getReferee, REFEREES };
