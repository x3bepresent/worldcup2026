/** Day 13 venue weather — m47/m45/m46/m48 */
const FORECAST_TS = '2026-06-24 06:00 本地';
const VENUE_WEATHER = {
  m47: { city: '休斯顿', venue: 'NRG Stadium', temp: 33, humidity: 72, condition_cn: '休斯顿湿热', impact_summary: '湿热高', home_adapt: 85, away_adapt: 78, forecast_updated: FORECAST_TS },
  m45: { city: '波士顿', venue: 'Gillette Stadium', temp: 24, humidity: 58, condition_cn: '波士顿夏夜', impact_summary: '气候均衡', home_adapt: 84, away_adapt: 82, forecast_updated: FORECAST_TS },
  m46: { city: '多伦多', venue: 'BMO Field', temp: 22, humidity: 62, condition_cn: '多伦多凉爽', impact_summary: '气候影响低', home_adapt: 80, away_adapt: 83, forecast_updated: FORECAST_TS },
  m48: { city: '瓜达拉哈拉', venue: 'Estadio Akron', temp: 28, humidity: 48, condition_cn: '瓜达拉哈拉午后', impact_summary: '高原1560m', home_adapt: 86, away_adapt: 76, forecast_updated: FORECAST_TS },
};
function venueWeather(id) { return VENUE_WEATHER[id] ? { ...VENUE_WEATHER[id] } : null; }
module.exports = { venueWeather, VENUE_WEATHER };
