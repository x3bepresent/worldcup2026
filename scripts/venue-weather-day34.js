/** Day 34 venue weather — m101 · 7月15日北京开球（半决赛）
 *  Source: Open-Meteo · 当地 7/14 14:00 CT · 2026-07-14 更新
 */
const FORECAST_TS = '2026-07-14 22:20 北京';

const VENUE_WEATHER = {
  m101: {
    city: '达拉斯', country: '美国', venue: 'AT&T Stadium',
    pitch_surface: '人造/天然混', stadium_type: '可开合屋顶',
    temp: 30, humidity: 62, altitude_m: 167, rain_chance: 16,
    wind: '东风 3级 · 关顶则场内空调', condition_cn: '达拉斯午后高温·多云',
    impact_level: 'MEDIUM',
    impact_summary: 'M101 法国 vs 西班牙 · 30°C 午后·关顶概率高 · 封闭空调控温后气候影响降为中低',
    home_adapt: 86, away_adapt: 85,
    weather_factors: [
      { label: '30°C 午后多云', impact: '中', detail: '北京时间 7月15日 03:00 · 当地 7/14 14:00 CT · Open-Meteo' },
      { label: '关顶空调', impact: '低-中', detail: 'AT&T 可开合屋顶 · 高温时段通常关顶' },
    ],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
