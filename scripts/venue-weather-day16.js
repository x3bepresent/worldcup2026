/** Day 16 venue weather — m61–m66 · G/H/I 组末轮 */
const FORECAST_TS = '2026-06-26 22:00 本地';

const VENUE_WEATHER = {
  m61: {
    city: '波士顿', country: '美国', venue: 'Gillette Stadium',
    pitch_surface: 'FieldTurf 人工草', stadium_type: '开放式',
    temp: 22, humidity: 60, altitude_m: 50, rain_chance: 20,
    wind: '海风 2级', condition_cn: '波士顿夏夜温和',
    impact_level: 'LOW', impact_summary: 'I组榜首战各6分——Haaland vs Mbappé 由战术主导',
    home_adapt: 82, away_adapt: 86,
    home_note: '挪威 6 分同分争头名；Haaland 锋线 vs 法国防线', away_note: '法国 6 分；Mbappé 肋部破局',
    weather_factors: [
      { label: '22°C · 15:00 ET', impact: '低', detail: '北京时间 03:00 · 同开 m62' },
      { label: 'FieldTurf 人工草', impact: '低', detail: '传球速度略快' },
    ],
    forecast_updated: FORECAST_TS,
  },
  m62: {
    city: '多伦多', country: '加拿大', venue: 'BMO Field',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 21, humidity: 62, altitude_m: 90, rain_chance: 25,
    wind: '湖风 2级', condition_cn: '多伦多夏夜',
    impact_level: 'LOW', impact_summary: '塞内加尔 0 分须胜 vs 伊拉克 0 分',
    home_adapt: 80, away_adapt: 78,
    weather_factors: [{ label: '21°C', impact: '低', detail: '北京时间 03:00' }],
    forecast_updated: FORECAST_TS,
  },
  m63: {
    city: '西雅图', country: '美国', venue: 'Lumen Field',
    pitch_surface: 'FieldTurf 人工草', stadium_type: '开放式',
    temp: 18, humidity: 65, altitude_m: 55, rain_chance: 30,
    wind: '普吉特湾 3级', condition_cn: '西雅图凌晨凉湿',
    impact_level: 'LOW', impact_summary: '埃及 4 分 vs 伊朗 2 分须胜',
    home_adapt: 84, away_adapt: 82,
    weather_factors: [{ label: '18°C · 23:00 PT', impact: '低', detail: '北京时间 11:00 · 同开 m64' }],
    forecast_updated: FORECAST_TS,
  },
  m64: {
    city: '温哥华', country: '加拿大', venue: 'BC Place',
    pitch_surface: '人工草（有顶盖）', stadium_type: '封闭式',
    temp: 17, humidity: 68, altitude_m: 15, rain_chance: 25,
    wind: '微凉', condition_cn: '温哥华凌晨凉爽',
    impact_level: 'LOW', impact_summary: '比利时 2 分须胜穿盘 vs 新西兰 1 分',
    home_adapt: 78, away_adapt: 88,
    weather_factors: [{ label: '17°C 封闭球场', impact: '低', detail: 'Doku 肋部穿盘路径' }],
    forecast_updated: FORECAST_TS,
  },
  m65: {
    city: '休斯顿', country: '美国', venue: 'NRG Stadium',
    pitch_surface: 'Hellas 人工草', stadium_type: '可伸缩顶盖',
    temp: 32, humidity: 70, altitude_m: 15, rain_chance: 35,
    wind: '南风 2级 · 湿热', condition_cn: '休斯顿午后湿热',
    impact_level: 'MEDIUM', impact_summary: 'H组末轮各争出线——湿热后段体能是变量',
    home_adapt: 80, away_adapt: 84,
    weather_factors: [{ label: '32°C 体感 36°C', impact: '中', detail: '北京时间 08:00 · 同开 m66' }],
    forecast_updated: FORECAST_TS,
  },
  m66: {
    city: '瓜达拉哈拉', country: '墨西哥', venue: 'Estadio Akron',
    pitch_surface: '天然草', stadium_type: '开放式',
    temp: 26, humidity: 55, altitude_m: 1560, rain_chance: 30,
    wind: '高原微风', condition_cn: '瓜达拉哈拉高原午后',
    impact_level: 'MEDIUM', impact_summary: '高原 1560m——乌拉圭适应好 vs 西班牙控球',
    home_adapt: 86, away_adapt: 88,
    weather_factors: [{ label: '1560m 海拔', impact: '中', detail: '氧气略稀 · 传球节奏略慢' }],
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] ? { ...VENUE_WEATHER[matchId] } : null;
}

module.exports = { venueWeather, VENUE_WEATHER };
