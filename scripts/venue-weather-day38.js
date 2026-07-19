/** Day 38 venue weather — m104 · 7月20日北京开球（决赛）
 *  Source: Open-Meteo 量级参考 · MetLife 夏日午后 · 2026-07-19 更新
 */
const FORECAST_TS = '2026-07-19 22:00 北京';

const VENUE_WEATHER = {
  m104: {
    city: '纽约/新泽西', country: '美国', venue: 'MetLife Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 29, humidity: 58, altitude_m: 3, rain_chance: 18,
    wind: '西南风 2级', condition_cn: '新泽西午后·多云间晴',
    impact_level: 'LOW',
    impact_summary: 'M104 西班牙 vs 阿根廷 · 29°C 午后多云 · 开放球场气候影响低 · 利于双方传控推进',
    home_adapt: 86, away_adapt: 86,
    weather_factors: [
      { label: '29°C 午后多云', impact: '低', detail: '北京时间 7月20日 03:00 · 当地 7/19 15:00 ET' },
      { label: '西南风 2级', impact: '低', detail: '对远射/定位球影响有限' },
    ],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
