/** Day 19 venue weather — m74–m76 */
const FORECAST_TS = '2026-06-29 22:00 本地';

const VENUE_WEATHER = {
  m76: {
    city: '休斯顿', country: '美国', venue: 'NRG Stadium',
    pitch_surface: '天然草', stadium_type: '封闭式',
    temp: 32, humidity: 58, altitude_m: 15, rain_chance: 20,
    wind: '封闭', condition_cn: '休斯顿夏夜',
    impact_level: 'MEDIUM', impact_summary: 'M76 巴西 vs 日本 · 高温封闭',
    home_adapt: 88, away_adapt: 84,
    weather_factors: [{ label: '32°C 封闭', impact: '中', detail: '北京时间 6月30日 01:00' }],
    forecast_updated: FORECAST_TS,
  },
  m74: {
    city: '波士顿', country: '美国', venue: 'Gillette Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 24, humidity: 62, altitude_m: 60, rain_chance: 25,
    wind: '海风 2级', condition_cn: '波士顿夏晨',
    impact_level: 'LOW', impact_summary: 'M74 德国 vs 巴拉圭',
    home_adapt: 86, away_adapt: 78,
    weather_factors: [{ label: '24°C', impact: '低', detail: '北京时间 6月30日 04:30' }],
    forecast_updated: FORECAST_TS,
  },
  m75: {
    city: '蒙特雷', country: '墨西哥', venue: 'Estadio BBVA',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 30, humidity: 48, altitude_m: 540, rain_chance: 15,
    wind: '微风', condition_cn: '蒙特雷夏午',
    impact_level: 'MEDIUM', impact_summary: 'M75 荷兰 vs 摩洛哥 · 海拔 540m',
    home_adapt: 84, away_adapt: 86,
    weather_factors: [{ label: '30°C · 海拔', impact: '中', detail: '北京时间 6月30日 09:00' }],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
