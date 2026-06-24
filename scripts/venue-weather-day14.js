/** Day 14 venue weather — m51–m54 */
const FORECAST_TS = '2026-06-25 06:00 本地';
const VENUE_WEATHER = {
  m51: { city: '温哥华', venue: 'BC Place', temp: 20, humidity: 65, condition_cn: '温哥华凉爽', impact_summary: '气候影响低', home_adapt: 82, away_adapt: 88, forecast_updated: FORECAST_TS },
  m52: { city: '西雅图', venue: 'Lumen Field', temp: 19, humidity: 58, condition_cn: '西雅图凉爽', impact_summary: '气候影响低', home_adapt: 80, away_adapt: 78, forecast_updated: FORECAST_TS },
  m49: { city: '迈阿密', venue: 'Hard Rock Stadium', temp: 31, humidity: 78, condition_cn: '迈阿密湿热', impact_summary: '湿热高', home_adapt: 78, away_adapt: 85, forecast_updated: FORECAST_TS },
  m50: { city: '亚特兰大', venue: 'Mercedes-Benz Stadium', temp: 30, humidity: 72, condition_cn: '亚特兰大夏午', impact_summary: '湿热中等', home_adapt: 86, away_adapt: 74, forecast_updated: FORECAST_TS },
  m53: { city: '墨西哥城', venue: 'Estadio Azteca', temp: 24, humidity: 55, condition_cn: '阿兹特克高原', impact_summary: '海拔2240m', home_adapt: 78, away_adapt: 92, forecast_updated: FORECAST_TS },
  m54: { city: '蒙特雷', venue: 'Estadio BBVA', temp: 32, humidity: 58, condition_cn: '蒙特雷午后', impact_summary: '湿热中等', home_adapt: 76, away_adapt: 84, forecast_updated: FORECAST_TS },
};
function venueWeather(id) { return VENUE_WEATHER[id] ? { ...VENUE_WEATHER[id] } : null; }
module.exports = { venueWeather, VENUE_WEATHER };
