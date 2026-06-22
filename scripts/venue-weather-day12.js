/** Day 12 venue weather — m41–m44 · I/J 组 */

const FORECAST_TS = '2026-06-23 06:00 本地';

const VENUE_WEATHER = {
  m43: {
    city: '达拉斯',
    country: '美国',
    venue: 'AT&T Stadium',
    temp: 32,
    humidity: 58,
    rain_chance: 20,
    wind: '南风 2级',
    condition_cn: '达拉斯夏夜',
    impact_level: 'MEDIUM',
    impact: '封闭球场但夏夜仍偏热；阿根廷/奥地利榜首对话',
    impact_summary: '高温中等——体能分配关键',
    home_adapt: 86,
    away_adapt: 82,
    historical_note: 'AT&T · J组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m42: {
    city: '费城',
    country: '美国',
    venue: 'Lincoln Financial Field',
    temp: 28,
    humidity: 62,
    rain_chance: 25,
    wind: '东南风 2级',
    condition_cn: '费城夏夜',
    impact_level: 'LOW',
    impact: '开放式球场；法国深度碾压伊拉克',
    impact_summary: '气候影响低',
    home_adapt: 88,
    away_adapt: 72,
    historical_note: 'Lincoln Financial · I组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m41: {
    city: '纽约/新泽西',
    country: '美国',
    venue: 'MetLife Stadium',
    temp: 26,
    humidity: 58,
    rain_chance: 15,
    wind: '东北风 2级',
    condition_cn: '纽约夏夜',
    impact_level: 'LOW',
    impact: 'Haaland vs Mané 焦点战',
    impact_summary: '气候影响低',
    home_adapt: 84,
    away_adapt: 80,
    historical_note: 'MetLife · I组第2轮 · 预报 ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m44: {
    city: '旧金山湾区',
    country: '美国',
    venue: "Levi's Stadium",
    temp: 22,
    humidity: 52,
    rain_chance: 10,
    wind: '西风 2级',
    condition_cn: '湾区夜场凉爽',
    impact_level: 'LOW',
    impact: '垫底对话；Mahrez 反击是变数',
    impact_summary: '凉爽均衡',
    home_adapt: 78,
    away_adapt: 80,
    historical_note: "Levi's · J组第2轮 · 预报 " + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] ? { ...VENUE_WEATHER[matchId] } : null;
}

module.exports = { venueWeather, VENUE_WEATHER };
