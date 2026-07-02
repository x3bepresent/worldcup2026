/**
 * Day 22 official referee — m83–m85 · 32强
 * Source: FIFA Match Centre · api.fifa.com · 2026-07-03
 */
const SOURCE = 'FIFA Match Centre · api.fifa.com · 2026-07-03';

function confirmedRef(data) {
  return { confirmed: true, pending: false, source: SOURCE, ...data };
}

const REFEREES = {
  m84: confirmedRef({
    name: 'Glenn Nyberg',
    nation: 'Sweden',
    iso: 'se',
    wc_experience:
      '2026 世界杯 · 32强 M84 主裁 · UEFA 精英 · 执法西班牙 vs 奥地利 · 洛杉矶 SoFi',
    avg_yellow: 4.3,
    avg_red: 0.11,
    avg_penalty: 0.30,
    home_win_rate: 54,
    bias_index: 52,
    bias_note:
      '瑞典主裁执法洛杉矶 SoFi 午间场。西班牙 -1.5@0.87 深盘热门 vs 奥地利铁桶；对 Yamal/Williams 速度犯规与 Sabitzer 绞杀 Rodri 尺度是关键，深盘场早期进球常改盘口节奏。',
    tendencies: [
      'FIFA 官方主裁 · Glenn Nyberg（瑞典）',
      '第四官员 Dahane Beida（毛里塔尼亚）',
      '深盘单场淘汰 · 西班牙须净胜 2+ 穿 -1.5',
      '对战术犯规与禁区拉扯判罚尺度偏严',
      '午间开球 · 体能充沛段或决定穿盘',
    ],
    officials: {
      referee: 'Glenn Nyberg (SWE)',
      fourth: 'Dahane Beida (MTN)',
    },
    fifa_match_id: '400021519',
    note: 'FIFA M84 · 西班牙 vs 奥地利 · Los Angeles SoFi Stadium',
  }),

  m83: confirmedRef({
    name: 'Espen Eskås',
    nation: 'Norway',
    iso: 'no',
    wc_experience:
      '2026 世界杯 · 32强 M83 主裁 · UEFA · 执法葡萄牙 vs 克罗地亚 · 多伦多 BMO Field',
    avg_yellow: 4.5,
    avg_red: 0.13,
    avg_penalty: 0.28,
    home_win_rate: 50,
    bias_index: 50,
    bias_note:
      '挪威主裁执法多伦多夏夜。葡升 -0.5/1@0.90 vs 克 +0.5/1@0.99 均衡盘；C罗 vs 莫德里奇经验对决，对身体对抗与战术犯规尺度需平衡，牌面或影响下半场节奏。',
    tendencies: [
      'FIFA 官方主裁 · Espen Eskås（挪威）',
      '32强均衡盘 · 1-1 路径常见',
      '多伦多湿度偏高 · 补水暂停后犯规尺度或收紧',
      '对老将战术犯规容忍度中等',
    ],
    officials: {
      referee: 'Espen Eskås (NOR)',
    },
    fifa_match_id: '400021526',
    note: 'FIFA M83 · 葡萄牙 vs 克罗地亚 · Toronto BMO Field',
  }),

  m85: confirmedRef({
    name: 'Yael Falcón Pérez',
    nation: 'Argentina',
    iso: 'ar',
    wc_experience:
      '2026 世界杯 · 32强 M85 主裁 · CONMEBOL · 执法瑞士 vs 阿尔及利亚 · 温哥华 BC Place',
    avg_yellow: 4.6,
    avg_red: 0.12,
    avg_penalty: 0.31,
    home_win_rate: 51,
    bias_index: 50,
    bias_note:
      '阿根廷主裁执法温哥华 BC Place。瑞初 -1 退至 -0.5@0.98（市场不信深穿）vs 阿 +0.5@0.91 收水；对马赫雷斯速度犯规与 Xhaka 绞杀尺度受关注，非洲球队身体对抗判罚是关键。',
    tendencies: [
      'FIFA 官方主裁 · Yael Falcón Pérez（阿根廷）',
      'BC Place 可闭合顶棚 · 气候影响低',
      '瑞退档场 · 受让方低水结构',
      '定位球+转换是阿尔及利亚冷门路径',
    ],
    officials: {
      referee: 'Yael Falcón Pérez (ARG)',
    },
    fifa_match_id: '400021527',
    note: 'FIFA M85 · 瑞士 vs 阿尔及利亚 · Vancouver BC Place',
  }),
};

function getReferee(matchId) {
  return REFEREES[matchId] || { confirmed: false, pending: true, name: '等待官方确认' };
}

module.exports = { getReferee, REFEREES, SOURCE };
