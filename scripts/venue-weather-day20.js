/** Day 20 venue weather — m77–m79 */
const FORECAST_TS = '2026-06-30 22:00 本地';

const VENUE_WEATHER = {
  m78: {
    city: '达拉斯', country: '美国', venue: 'AT&T Stadium',
    pitch_surface: '天然草', stadium_type: '封闭式',
    temp: 34, humidity: 55, altitude_m: 200, rain_chance: 15,
    wind: '封闭', condition_cn: '达拉斯夏夜',
    impact_level: 'MEDIUM', impact_summary: 'M78 科特迪瓦 vs 挪威 · 高温封闭',
    home_adapt: 84, away_adapt: 82,
    weather_factors: [{ label: '34°C 封闭', impact: '中', detail: '北京时间 7月1日 01:00' }],
    forecast_updated: FORECAST_TS,
  },
  m77: {
    city: '纽约/新泽西', country: '美国', venue: 'MetLife Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 26, humidity: 65, altitude_m: 10, rain_chance: 20,
    wind: '微风', condition_cn: '纽约夏晨',
    impact_level: 'LOW', impact_summary: 'M77 法国 vs 瑞典',
    home_adapt: 88, away_adapt: 80,
    weather_factors: [{ label: '26°C', impact: '低', detail: '北京时间 7月1日 05:00' }],
    forecast_updated: FORECAST_TS,
  },
  m79: {
    city: '墨西哥城', country: '墨西哥', venue: 'Estadio Azteca',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 22, humidity: 55, altitude_m: 2240, rain_chance: 30,
    wind: '微风', condition_cn: '墨西哥城夏午',
    impact_level: 'MEDIUM', impact_summary: 'M79 墨西哥 vs 厄瓜多尔 · 海拔 2240m',
    home_adapt: 92, away_adapt: 84,
    weather_factors: [{ label: '22°C · 海拔', impact: '中', detail: '北京时间 7月1日 09:00' }],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
