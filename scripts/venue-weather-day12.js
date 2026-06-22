/** Day 12 venue weather — m41–m44 */

const FORECAST_TS = '2026-06-23 06:00 本地';

const VENUE_WEATHER = {
  m41: {
    city: '休斯顿',
    country: '美国',
    venue: 'NRG Stadium',
    temp: 33,
    humidity: 72,
    rain_chance: 30,
    wind: '东南风 2级',
    condition_cn: '休斯顿夏夜湿热',
    impact_level: 'HIGH',
    impact: 'NRG 封闭但夜场仍高湿；葡萄牙须早破局避免重蹈 1-1',
    impact_summary: '湿热高——领先方后段体能关键',
    home_adapt: 85,
    away_adapt: 78,
    historical_note: 'NRG · K组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m42: {
    city: '波士顿',
    country: '美国',
    venue: 'Gillette Stadium',
    temp: 24,
    humidity: 58,
    rain_chance: 15,
    wind: '东北风 2级',
    condition_cn: '波士顿夏夜凉爽',
    impact_level: 'LOW',
    impact: '气候均衡；L组榜首对话更看 Bellingham/Kane vs Kudus',
    impact_summary: '气候影响低',
    home_adapt: 84,
    away_adapt: 82,
    historical_note: 'Gillette · L组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m43: {
    city: '多伦多',
    country: '加拿大',
    venue: 'BMO Field',
    temp: 22,
    humidity: 62,
    rain_chance: 20,
    wind: '西风 2级',
    condition_cn: '多伦多傍晚凉爽',
    impact_level: 'LOW',
    impact: '天然草均衡；巴拿马/克罗地亚均须抢分',
    impact_summary: '气候影响低',
    home_adapt: 80,
    away_adapt: 83,
    historical_note: 'BMO Field · L组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m44: {
    city: '瓜达拉哈拉',
    country: '墨西哥',
    venue: 'Estadio Akron',
    temp: 28,
    humidity: 48,
    rain_chance: 10,
    wind: '西风 1级',
    condition_cn: '瓜达拉哈拉午后',
    impact_level: 'MEDIUM',
    impact: '海拔 1560m 略利适应高原的哥伦比亚；刚果金 Wissa 反击是变数',
    impact_summary: '高原中等——体能分配关键',
    home_adapt: 86,
    away_adapt: 76,
    historical_note: 'Akron · K组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] ? { ...VENUE_WEATHER[matchId] } : null;
}

module.exports = { venueWeather, VENUE_WEATHER };
