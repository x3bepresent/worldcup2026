/** Day 11 venue weather — m37–m40 */

const FORECAST_TS = '2026-06-22 06:00 本地';

const VENUE_WEATHER = {
  m38: {
    city: '亚特兰大',
    country: '美国',
    venue: 'Mercedes-Benz Stadium',
    temp: 30,
    humidity: 65,
    rain_chance: 25,
    wind: '东南风 2级',
    condition_cn: '亚特兰大夏午闷热',
    impact_level: 'MEDIUM',
    impact: '封闭球场但午间开球仍偏热；西班牙须早破局避免重蹈 0-0',
    impact_summary: '湿热中等——领先方后段体能与专注度关键',
    home_adapt: 86,
    away_adapt: 80,
    historical_note: 'Mercedes-Benz · H组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m39: {
    city: '洛杉矶',
    country: '美国',
    venue: 'SoFi Stadium',
    temp: 26,
    humidity: 55,
    rain_chance: 5,
    wind: '海风 2级',
    condition_cn: '洛杉矶温和',
    impact_level: 'LOW',
    impact: '气候对比赛影响低；G组均分乱局更看战术',
    impact_summary: '气候影响低',
    home_adapt: 84,
    away_adapt: 82,
    historical_note: 'SoFi · G组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m37: {
    city: '迈阿密',
    country: '美国',
    venue: 'Hard Rock Stadium',
    temp: 31,
    humidity: 78,
    rain_chance: 40,
    wind: '东南风 3级 · 高湿',
    condition_cn: '迈阿密晚场湿热',
    impact_level: 'HIGH',
    impact: '高湿拖慢节奏；佛得角低位+乌拉圭控球或成闷局',
    impact_summary: '湿热偏高——破密集防守难度上升',
    home_adapt: 80,
    away_adapt: 78,
    historical_note: 'Hard Rock · H组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m40: {
    city: '温哥华',
    country: '加拿大',
    venue: 'BC Place',
    temp: 19,
    humidity: 62,
    rain_chance: 15,
    wind: '太平洋 breeze 2级',
    condition_cn: '温哥华凉爽',
    impact_level: 'LOW',
    impact: '凉爽利于高强度；Salah vs Wood 对位是焦点',
    impact_summary: '凉爽气候利于对攻',
    home_adapt: 82,
    away_adapt: 80,
    historical_note: 'BC Place · G组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] ? { ...VENUE_WEATHER[matchId] } : null;
}

module.exports = { venueWeather, VENUE_WEATHER };
