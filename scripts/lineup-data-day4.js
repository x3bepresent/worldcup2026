/**
 * Day 4 lineup data — m09–m12
 * Confirmed: FIFA.com / Yahoo Sports / Sportskeeda
 * Projected: Sports Mole / FWC Times / FotMob (pre-kickoff)
 */

const TS_CONFIRMED = '2026-06-15T22:00:00+08:00';
const TS_PROJECTED = '2026-06-15T22:00:00+08:00';

const LINEUPS = {
  m09: {
    confirmed: true,
    formation: '3-4-2-1',
    home: 'Neuer; Kimmich (C), Tah, Schlotterbeck; Pavlović, Nmecha; Brown; Sané, Musiala, Wirtz; Havertz',
    away: 'Room; Floranus, Obispo, Bazoer, Fonville; L. Bacuna (C), Chong; Comenencia, J. Bacuna, Hansen; Locadia',
    note:
      'FIFA 官方首发 · 2026-06-14 休斯顿。Nagelsmann 确认 Neuer 首发第 125 场；德国 3-4-2-1，库拉索改打 4-2-3-1（非预测 3-5-2）。',
    predicted: {
      formation: '4-2-3-1 / 3-5-2',
      home: 'Neuer; Kimmich, Tah, Schlotterbeck, Brown; Pavlović, Nmecha; Sané, Musiala, Wirtz; Havertz',
      away: 'Room; Gaari, Obispo, Bazoer; Floranus, Comenencia, L. Bacuna, J. Bacuna, Fonville; Chong, Locadia',
      source: 'FotMob Predicted · 赛前 · 非官方',
    },
    diff: {
      home: '✅ 与 Nagelsmann 赛前预测基本一致；Kimmich 中卫、Brown 左翼卫为官方布局。',
      away: '⚠️ 与预测 3-5-2 不同：官方 4-2-3-1，Hansen 首发右翼，Chong 回撤中场。',
    },
    source: 'FIFA.com · Tactical Line-up · Group E · 2026-06-14',
    updated: TS_CONFIRMED,
  },

  m10: {
    confirmed: true,
    formation: '4-3-3 / 3-4-2-1',
    home:
      'Verbruggen; Dumfries, van Hecke, van Dijk (C), van de Ven; Gravenberch, de Jong, Reijnders; Summerville, Malen, Gakpo',
    away:
      'Suzuki; Taniguchi, Watanabe, Ito; Doan, Kamada, Sano, Nakamura; Kubo, Maeda; Ueda (C)',
    note:
      '官方首发 · Yahoo Sports / Sportskeeda · 2026-06-14 达拉斯。Malen 中锋、Weghorst 替补；日本三中卫 Taniguchi-Watanabe-Ito，Maeda+Kubo 双 10。',
    predicted: {
      formation: '4-3-3 / 3-4-2-1',
      home:
        'Verbruggen; Dumfries, van de Ven, van Dijk (C), Aké; Gravenberch, de Jong, Reijnders; Malen, Gakpo, Weghorst',
      away: 'Suzuki; Itakura, Ito, Tomiyasu; Doan, Kamada, Sano, Nakamura; Kubo, Ito; Ueda',
      source: 'FotMob / ESPN 赛前预测 · 非官方',
    },
    diff: {
      home: '⚠️ van Hecke 顶替 Aké 中卫；Malen 中锋（非 Weghorst）；Summerville 左边锋，Gakpo 右路。',
      away: '⚠️ Taniguchi+Watanabe 中卫搭档（非 Itakura）；Maeda 首发前腰，Tomiyasu/Nagatomo 替补。',
    },
    source: 'Yahoo Sports · Sportskeeda · FIFA Match 10 · 2026-06-14',
    updated: TS_CONFIRMED,
  },

  m11: {
    confirmed: false,
    formation: null,
    home: '等待官方确认',
    away: '等待官方确认',
    note: "N'Dicka 确认缺阵 · Valencia 小腿存疑 · 官方首发预计开赛前 1 小时公布。",
    predicted: {
      formation: '4-3-3 / 4-2-3-1',
      home:
        'Fofana; Doué, Agbadou, Kossounou, Konan; Kessié, Sangaré, S. Fofana; Diallo, Guessand, Diomande',
      away:
        'Galindez; Ordóñez, Pacho, Hincapié, Estupiñán; Caicedo, Franco; Yeboah, Plata, Páez; Valencia',
      source: 'Sports Mole / FWC Times · 2026-06-15 · 非官方',
      alt: {
        formation: '4-3-3 / 4-2-3-1',
        home:
          'Fofana; Singo, Diomande, Agbadou, Konan; Sangaré, Kessié, Seri; Amad, Wahi, Adingra',
        away:
          'Galindez; Preciado, Pacho, Hincapié, Estupiñán; Caicedo, Franco; Plata, Páez, Sarmiento; Valencia',
        source: 'FWC Times / FotMob 备选预测',
      },
    },
    updated: TS_PROJECTED,
  },

  m12: {
    confirmed: false,
    formation: null,
    home: '等待官方确认',
    away: '等待官方确认',
    note: 'Kulusevski 未入选 · Isak 体能存疑 · Potter 预计 4-4-2；突尼斯 Lamouchi 4-3-3。',
    predicted: {
      formation: '4-4-2 / 4-3-3',
      home:
        'Johansson; Svensson, Lindelöf, Hien, Gudmundsson; Elanga, Ayari, Bergvall, Sema; Gyökeres, Isak',
      away:
        'Dahmen; Valery, Bronn, Talbi, Abdi; Skhiri, Khedira, Mejbri; Achouri, Ben Slimane, Saad',
      source: 'FWC Times / BBC 大名单 · 2026-06-15 · 非官方',
      alt: {
        formation: '4-3-3 / 4-4-2',
        home:
          'Olsen; Krafth, Lindelöf, Hien, Gudmundsson; Olsson, Bergvall, Edman; Elanga, Isak, Gyökeres',
        away:
          'Dahmen; Haddadi, Meriah, Talbi, Laabidi; Skhiri, Laïdouni, Romdhane; Msakni, Jebali, Khazri',
        source: 'FotMob 早期预测（Lamouchi 4-3-3 版本）',
      },
    },
    updated: TS_PROJECTED,
  },
};

function getLineup(matchId) {
  const data = LINEUPS[matchId];
  if (!data) throw new Error(`Unknown lineup id: ${matchId}`);
  return JSON.parse(JSON.stringify(data));
}

module.exports = { getLineup, LINEUPS };
