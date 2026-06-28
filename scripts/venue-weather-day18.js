/** Day 18 venue weather — m73 · 32强 · 洛杉矶 */
const FORECAST_TS = '2026-06-28 22:00 本地';

const VENUE_WEATHER = {
  m73: {
    city: '洛杉矶', country: '美国', venue: 'SoFi Stadium',
    pitch_surface: '人工草', stadium_type: '开放式',
    temp: 26, humidity: 55, altitude_m: 30, rain_chance: 5,
    wind: '海风 2级', condition_cn: '洛杉矶夏夜',
    impact_level: 'LOW', impact_summary: '32强揭幕 · 南非 vs 加拿大 · 气候影响低',
    home_adapt: 78, away_adapt: 82,
    weather_factors: [{ label: '26°C · 12:00 PT', impact: '低', detail: '北京时间 6月29日 03:00 · 32强 M73' }],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
