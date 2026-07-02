/** Day 22 venue weather — m83–m85 · 7月3日北京开球 */
const FORECAST_TS = '2026-07-03 00:00 北京';

const VENUE_WEATHER = {
  m84: {
    city: '洛杉矶',
    country: '美国',
    venue: 'SoFi Stadium',
    pitch_surface: '天然草',
    stadium_type: '开放式',
    temp: 27,
    humidity: 52,
    altitude_m: 30,
    rain_chance: 5,
    wind: '海风 2级 · 干燥',
    condition_cn: '洛杉矶夏午',
    impact_level: 'LOW',
    impact_summary: 'M84 西班牙 vs 奥地利 · 气候影响低 · 深盘穿盘更看战术',
    home_adapt: 88,
    away_adapt: 85,
    weather_factors: [
      { label: '27°C 干燥', impact: '低', detail: '北京时间 7月3日 03:00 · 当地 7月2日 12:00 PT' },
      { label: 'SoFi 开放式', impact: '低', detail: '午间日照 · 双方均适应北美气候' },
    ],
    forecast_updated: FORECAST_TS,
  },
  m83: {
    city: '多伦多',
    country: '加拿大',
    venue: 'BMO Field',
    pitch_surface: '天然草',
    stadium_type: '开放式',
    temp: 24,
    humidity: 72,
    altitude_m: 90,
    rain_chance: 25,
    wind: '东南风 2级 · 闷热',
    condition_cn: '多伦多夏夜湿热',
    impact_level: 'MEDIUM',
    impact_summary: 'M83 葡萄牙 vs 克罗地亚 · 湿度偏高 · 70 分钟后体能或分化',
    home_adapt: 86,
    away_adapt: 86,
    weather_factors: [
      { label: '24°C · 湿度72%', impact: '中', detail: '北京时间 7月3日 07:00 · 当地 7月2日 19:00 ET' },
      { label: '开放式草皮', impact: '中', detail: '均衡盘场 · 湿热拖慢转换速度' },
    ],
    forecast_updated: FORECAST_TS,
  },
  m85: {
    city: '温哥华',
    country: '加拿大',
    venue: 'BC Place',
    pitch_surface: '人工草',
    stadium_type: '可闭合式',
    temp: 20,
    humidity: 58,
    altitude_m: 15,
    rain_chance: 15,
    wind: '封闭场内 · 微风',
    condition_cn: '温哥华夏午 · 场内恒温',
    impact_level: 'LOW',
    impact_summary: 'M85 瑞士 vs 阿尔及利亚 · BC Place 顶棚常闭 · 气候变量小',
    home_adapt: 87,
    away_adapt: 84,
    weather_factors: [
      { label: '20°C 场内', impact: '低', detail: '北京时间 7月3日 11:00 · 当地 7月2日 20:00 PT' },
      { label: '人工草+封闭', impact: '低', detail: '球速偏快 · 瑞士传控略受益' },
    ],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
