/** Day 23 venue weather — m86–m88 · 7月4日北京开球 */
const FORECAST_TS = '2026-07-04 00:00 北京';

const VENUE_WEATHER = {
  m88: {
    city: '达拉斯', country: '美国', venue: 'AT&T Stadium',
    pitch_surface: '天然草', stadium_type: '封闭式',
    temp: 31, humidity: 55, altitude_m: 200, rain_chance: 10,
    wind: '封闭场内 · 微风', condition_cn: '达拉斯夏夜高温',
    impact_level: 'MEDIUM', impact_summary: 'M88 澳大利亚 vs 埃及 · 封闭仍偏热 · 70 分钟后体能关键',
    home_adapt: 85, away_adapt: 83,
    weather_factors: [{ label: '31°C 封闭', impact: '中', detail: '北京时间 7月4日 02:00' }],
    forecast_updated: FORECAST_TS,
  },
  m86: {
    city: '迈阿密', country: '美国', venue: 'Hard Rock Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 29, humidity: 78, altitude_m: 5, rain_chance: 35,
    wind: '东南风 2级 · 高湿', condition_cn: '迈阿密晨场湿热',
    impact_level: 'HIGH', impact_summary: 'M86 阿根廷 vs 佛得角 · 湿热拖慢节奏 · 深盘穿盘须早破门',
    home_adapt: 88, away_adapt: 79,
    weather_factors: [{ label: '29°C · 湿度78%', impact: '高', detail: '北京时间 7月4日 06:00' }],
    forecast_updated: FORECAST_TS,
  },
  m87: {
    city: '堪萨斯城', country: '美国', venue: 'Arrowhead Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 27, humidity: 60, altitude_m: 280, rain_chance: 20,
    wind: '西风 2级', condition_cn: '堪萨斯城夏午',
    impact_level: 'LOW', impact_summary: 'M87 哥伦比亚 vs 加纳 · 气候影响低',
    home_adapt: 86, away_adapt: 84,
    weather_factors: [{ label: '27°C', impact: '低', detail: '北京时间 7月4日 09:30' }],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
