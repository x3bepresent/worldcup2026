/** Day 25 venue weather — m91–m92 · 7月6日北京开球（16强续战）
 *  Source: Open-Meteo · 开球时段当地预报 · 2026-07-06 02:15 北京更新
 */
const FORECAST_TS = '2026-07-06 02:15 北京';

const VENUE_WEATHER = {
  m91: {
    city: '纽约/新泽西', country: '美国', venue: 'MetLife Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 28, humidity: 65, altitude_m: 3, rain_chance: 13,
    wind: '东南风 2级', condition_cn: '新泽西午后·多云',
    impact_level: 'LOW',
    impact_summary: 'M91 巴西 vs 挪威 · 28°C 多云 · 开放球场气候影响低 · 利于巴西控球推进',
    home_adapt: 85, away_adapt: 84,
    weather_factors: [
      { label: '28°C 多云', impact: '低', detail: '北京时间 7月6日 04:00 · 当地 7/5 16:00' },
      { label: '东南风 2级', impact: '低', detail: '10km/h · 对长传影响有限' },
    ],
    forecast_updated: FORECAST_TS,
  },
  m92: {
    city: '墨西哥城', country: '墨西哥', venue: 'Estadio Azteca',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 18, humidity: 78, altitude_m: 2240, rain_chance: 91,
    wind: '南风 1级', condition_cn: '墨西哥城高原·高湿·降雨风险',
    impact_level: 'HIGH',
    impact_summary: 'M92 墨西哥 vs 英格兰 · 开球时段降雨概率91% · 2240m高原+湿滑草皮 · 英格兰适应劣势放大',
    home_adapt: 89, away_adapt: 78,
    weather_factors: [
      { label: '降雨91%', impact: '高', detail: '北京时间 7月6日 08:00 · 当地 7/5 20:00 · 对流雨风险' },
      { label: '2240m 18°C', impact: '中', detail: '高原夜场偏凉高湿 · 体能消耗↑' },
    ],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
