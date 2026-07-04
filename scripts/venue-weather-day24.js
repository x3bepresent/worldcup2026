/** Day 24 venue weather — m89–m90 · 7月5日北京开球（16强） */
const FORECAST_TS = '2026-07-05 00:00 北京';

const VENUE_WEATHER = {
  m90: {
    city: '休斯顿', country: '美国', venue: 'NRG Stadium',
    pitch_surface: '天然草', stadium_type: '封闭式',
    temp: 33, humidity: 62, altitude_m: 15, rain_chance: 15,
    wind: '封闭场内 · 空调', condition_cn: '休斯顿午后高温',
    impact_level: 'MEDIUM', impact_summary: 'M90 加拿大 vs 摩洛哥 · 封闭空调控温 · 边路高强度对抗耗体能',
    home_adapt: 84, away_adapt: 85,
    weather_factors: [{ label: '33°C 封闭空调', impact: '中', detail: '北京时间 7月5日 01:00' }],
    forecast_updated: FORECAST_TS,
  },
  m89: {
    city: '费城', country: '美国', venue: 'Lincoln Financial Field',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 29, humidity: 66, altitude_m: 12, rain_chance: 25,
    wind: '西南风 2级', condition_cn: '费城夏夜',
    impact_level: 'LOW', impact_summary: 'M89 巴拉圭 vs 法国 · 气候影响低 · 夜场凉爽利于法国提速',
    home_adapt: 84, away_adapt: 85,
    weather_factors: [{ label: '29°C 夜场', impact: '低', detail: '北京时间 7月5日 05:00' }],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
