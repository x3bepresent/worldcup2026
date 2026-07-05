/** Day 25 venue weather — m91–m92 · 7月6日北京开球（16强续战） */
const FORECAST_TS = '2026-07-06 00:00 北京';

const VENUE_WEATHER = {
  m91: {
    city: '纽约/新泽西', country: '美国', venue: 'MetLife Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 28, humidity: 68, altitude_m: 3, rain_chance: 20,
    wind: '东南风 2级', condition_cn: '新泽西夏夜',
    impact_level: 'LOW', impact_summary: 'M91 巴西 vs 挪威 · 气候影响低 · 开放球场利于巴西控球',
    home_adapt: 85, away_adapt: 84,
    weather_factors: [{ label: '28°C 夜场', impact: '低', detail: '北京时间 7月6日 04:00' }],
    forecast_updated: FORECAST_TS,
  },
  m92: {
    city: '墨西哥城', country: '墨西哥', venue: 'Estadio Azteca',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 22, humidity: 55, altitude_m: 2240, rain_chance: 30,
    wind: '西南风 1级', condition_cn: '墨西哥城高原夜场',
    impact_level: 'MEDIUM', impact_summary: 'M92 墨西哥 vs 英格兰 · 海拔2240m · 主场适应优势显著',
    home_adapt: 88, away_adapt: 82,
    weather_factors: [{ label: '2240m 高原', impact: '中', detail: '北京时间 7月6日 08:00' }],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
