/**
 * 赛场气候 / 场地推演 — Day 5 (m13–m16)
 */

const VENUE_WEATHER = {
  m14: {
    city: '亚特兰大',
    country: '美国',
    venue: 'Mercedes-Benz Stadium',
    temp: 28,
    humidity: 62,
    altitude_m: 320,
    rain_chance: 20,
    wind: '东南风 2级',
    condition_cn: '午夜前段，可闭合屋顶',
    impact_level: 'LOW',
    impact: 'Mercedes-Benz 闭合屋顶，320m 低海拔，28°C 对西班牙传控友好',
    impact_summary: '闭合屋顶消除降雨变量；西班牙替补深度可抵消传控消耗',
    home_adapt: 90,
    away_adapt: 74,
    home_note: '西班牙欧洲杯冠军班底习惯夏季作战；Yamal/Pedri 技术流不受 28°C 明显制约',
    away_note: '佛得角球员多效力葡超/非洲联赛，湿热并不陌生，但 90 分钟低位防守对世界杯新军是最大考验',
    weather_factors: [
      { label: '闭合屋顶', impact: '消除变量', detail: '无雨无强风，传控落点稳定，利于西班牙肋部渗透' },
      { label: '28°C 午夜', impact: '中性', detail: '北京时间 00:00 对应当地 12:00 ET 前段，气温尚未达峰值' },
      { label: '湿度 62%', impact: '中等', detail: '东南湿热，70\' 后传球精度略降，领先方或降 tempo' },
    ],
    historical_note: 'Mercedes-Benz Stadium 容量 71,000 · H 组揭幕战',
  },

  m16: {
    city: '西雅图',
    country: '美国',
    venue: 'Lumen Field',
    temp: 19,
    humidity: 58,
    altitude_m: 50,
    rain_chance: 35,
    wind: '西风 2级',
    condition_cn: '夜场凉爽，开放式球场',
    impact_level: 'LOW',
    impact: '太平洋西北 19°C 凉爽夜场，双方体能消耗低于迈阿密/休斯顿',
    impact_summary: '气候变量低——推演以 De Bruyne vs Salah 战术对位为主',
    home_adapt: 82,
    away_adapt: 80,
    home_note: '比利时球员多效力欧洲联赛，凉爽夜场完全适应；人工草皮传球速度略快',
    away_note: '埃及球员习惯北非-地中海气候，19°C 舒适；Salah 反击不受高温拖累',
    weather_factors: [
      { label: '19°C 凉爽', impact: '有利高强度', detail: '90 分钟压迫/反击均可维持，Bielsa 式强度在此场不适用但比利时高位可全场执行' },
      { label: '人工草皮', impact: '略快', detail: '传球速度略快，De Bruyne 直塞与 Salah 启动略利' },
      { label: '降雨 35%', impact: '低', detail: '开放式球场若小雨可能滑，但赛前预报以多云为主' },
    ],
    historical_note: 'Lumen Field 容量 69,000 · G 组揭幕战',
  },

  m13: {
    city: '迈阿密',
    country: '美国',
    venue: 'Hard Rock Stadium',
    temp: 31,
    humidity: 72,
    altitude_m: 3,
    rain_chance: 25,
    wind: '东南风 3级',
    condition_cn: '湿热夜场，开放式',
    impact_level: 'MEDIUM',
    impact: '31°C+72% 湿度，Bielsa 高位压迫体能消耗极大，但乌拉圭深度更优',
    impact_summary: '湿热夜场——60\' 后沙特低位防守体能是最大变量',
    home_adapt: 72,
    away_adapt: 84,
    home_note: '沙特球员习惯海湾湿热，但面对 Bielsa 90 分钟压迫，Mancini 低位消耗仍大',
    away_note: '乌拉圭南美球员适应湿热；Valverde 覆盖能力在 70\' 后仍是破局关键',
    weather_factors: [
      { label: '31°C 湿热', impact: '体能消耗', detail: '72% 湿度下 60\' 后传球精度下降，沙特换人窗口 55–65\' 关键' },
      { label: '海平面 3m', impact: '无海拔', detail: '双方无高原适应差异' },
      { label: '开放式球场', impact: '中性', detail: '若有阵雨，场地略滑，长传转移需调整' },
    ],
    historical_note: 'Hard Rock Stadium 容量 65,000 · H 组第 2 场',
  },

  m15: {
    city: '洛杉矶',
    country: '美国',
    venue: 'SoFi Stadium',
    temp: 22,
    humidity: 55,
    altitude_m: 30,
    rain_chance: 5,
    wind: '西风 1级',
    condition_cn: '夜场舒适，人工草皮',
    impact_level: 'LOW',
    impact: '南加州 22°C 夜场，SoFi 人工草皮，伊朗传控略占优',
    impact_summary: '气候均衡——Wood 定位球与 Taremi 背身是推演核心',
    home_adapt: 85,
    away_adapt: 78,
    home_note: '伊朗预选赛 10 场 10 零封，防守纪律顶级；22°C 利于 90 分钟压迫',
    away_note: '新西兰 Wood 英超经验，定位球不受气候影响；整体低位防守体能 70\' 后下滑',
    weather_factors: [
      { label: '22°C 夜场', impact: '中性', detail: '北京时间 09:00 对应当地 18:00 PT，气温舒适' },
      { label: '人工草皮', impact: '略利传控', detail: '伊朗地面配合更流畅，Jahanbakhsh 边路速度受益' },
      { label: '降雨 5%', impact: '无', detail: 'SoFi 可闭合，几乎无天气干扰' },
    ],
    historical_note: 'SoFi Stadium 容量 70,000 · G 组第 2 场',
  },
};

function venueWeather(matchId) {
  const w = VENUE_WEATHER[matchId];
  if (!w) throw new Error(`Unknown venue id: ${matchId}`);
  return JSON.parse(JSON.stringify(w));
}

module.exports = { venueWeather, VENUE_WEATHER };
