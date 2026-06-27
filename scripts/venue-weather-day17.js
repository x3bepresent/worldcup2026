/** Day 17 venue weather — m67–m72 · J/K/L 组末轮 */
const FORECAST_TS = '2026-06-27 22:00 本地';

const VENUE_WEATHER = {
  m67: {
    city: '纽约/新泽西', country: '美国', venue: 'MetLife Stadium',
    pitch_surface: 'FieldTurf 人工草', stadium_type: '开放式',
    temp: 24, humidity: 58, altitude_m: 10, rain_chance: 15,
    wind: '微风 2级', condition_cn: '新泽西夏夜',
    impact_level: 'LOW', impact_summary: '英格兰深盘 · 巴拿马铁桶',
    home_adapt: 74, away_adapt: 88,
    weather_factors: [{ label: '24°C · 17:00 ET', impact: '低', detail: '北京时间 05:00 · 同开 m68' }],
    forecast_updated: FORECAST_TS,
  },
  m68: {
    city: '费城', country: '美国', venue: 'Lincoln Financial Field',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 26, humidity: 62, altitude_m: 15, rain_chance: 20,
    wind: '东南风 2级', condition_cn: '费城夏夜',
    impact_level: 'LOW', impact_summary: 'L组榜首对话 · 加纳 4 分 vs 克罗地亚 3 分',
    home_adapt: 84, away_adapt: 82,
    weather_factors: [{ label: '26°C', impact: '低', detail: '北京时间 05:00' }],
    forecast_updated: FORECAST_TS,
  },
  m69: {
    city: '堪萨斯城', country: '美国', venue: 'Arrowhead Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 30, humidity: 55, altitude_m: 280, rain_chance: 25,
    wind: '南风 3级', condition_cn: '堪萨斯城夏午',
    impact_level: 'MEDIUM', impact_summary: 'J组同分生死战 · 阿尔及利亚 vs 奥地利各 3 分',
    home_adapt: 80, away_adapt: 82,
    weather_factors: [{ label: '30°C · 20:00 CT', impact: '中', detail: '北京时间 10:00 · 同开 m70' }],
    forecast_updated: FORECAST_TS,
  },
  m70: {
    city: '达拉斯', country: '美国', venue: 'AT&T Stadium',
    pitch_surface: '人工草（有顶盖）', stadium_type: '封闭式',
    temp: 33, humidity: 52, altitude_m: 200, rain_chance: 10,
    wind: '封闭无风', condition_cn: '达拉斯夏午',
    impact_level: 'MEDIUM', impact_summary: '阿根廷 6 分已出线 · 或轮换',
    home_adapt: 72, away_adapt: 88,
    weather_factors: [{ label: '33°C 封闭', impact: '中', detail: '北京时间 10:00' }],
    forecast_updated: FORECAST_TS,
  },
  m71: {
    city: '迈阿密', country: '美国', venue: 'Hard Rock Stadium',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 31, humidity: 76, altitude_m: 5, rain_chance: 40,
    wind: '海风 3级', condition_cn: '迈阿密湿热',
    impact_level: 'MEDIUM', impact_summary: 'K组榜首战 · 哥伦 6 分 vs 葡萄牙 4 分',
    home_adapt: 86, away_adapt: 84,
    weather_factors: [{ label: '31°C 湿度 76%', impact: '中', detail: '北京时间 07:30 · 同开 m72' }],
    forecast_updated: FORECAST_TS,
  },
  m72: {
    city: '亚特兰大', country: '美国', venue: 'Mercedes-Benz Stadium',
    pitch_surface: '人工草（有顶盖）', stadium_type: '封闭式',
    temp: 29, humidity: 68, altitude_m: 320, rain_chance: 30,
    wind: '封闭', condition_cn: '亚特兰大夏午',
    impact_level: 'LOW', impact_summary: '刚果(金) 1 分须胜 vs 乌兹别克 0 分',
    home_adapt: 82, away_adapt: 76,
    weather_factors: [{ label: '29°C 封闭', impact: '低', detail: '北京时间 07:30' }],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] || null;
}

module.exports = { venueWeather, VENUE_WEATHER };
