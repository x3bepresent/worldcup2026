/** Day 15 venue weather — m55–m60 · D/E/F 组末轮 · 2026-06-26 开球前预报 */
const FORECAST_TS = '2026-06-25 22:00 本地';

const VENUE_WEATHER = {
  m55: {
    city: '费城', country: '美国', venue: 'Lincoln Financial Field',
    temp: 24, humidity: 65, altitude_m: 12, rain_chance: 20,
    wind: '东北风 2级 · 夏夜', condition_cn: '费城夏夜温和',
    impact_level: 'LOW', impact_summary: '气候影响低——科特迪瓦须胜，库拉索铁桶守势',
    home_adapt: 74, away_adapt: 82,
    impact: 'Lincoln Financial 24°C 夏夜，库拉索 5-4-1 低位 vs 科特迪瓦肋部渗透',
    historical_note: '费城 · E组末轮 · 库拉索 vs 科特迪瓦 · ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m56: {
    city: '纽约/新泽西', country: '美国', venue: 'MetLife Stadium',
    temp: 25, humidity: 62, altitude_m: 10, rain_chance: 25,
    wind: '海风 2级', condition_cn: '新泽西夏夜',
    impact_level: 'LOW', impact_summary: '气候均衡——厄瓜多尔须胜 vs 德国深盘',
    home_adapt: 80, away_adapt: 86,
    impact: 'MetLife 25°C，厄瓜多尔高原球队适应良好；德国或轮换',
    historical_note: 'MetLife · E组末轮 · 厄瓜多尔 vs 德国 · ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m57: {
    city: '达拉斯', country: '美国', venue: 'AT&T Stadium',
    temp: 34, humidity: 55, altitude_m: 200, rain_chance: 15,
    wind: '南风 1级 · 晴热', condition_cn: '达拉斯午后晴热，体感约 38°C',
    impact_level: 'MEDIUM', impact_summary: '湿热中等——日本/瑞典均分争出线，后段体能是变量',
    home_adapt: 84, away_adapt: 80,
    impact: 'AT&T 34°C 有顶盖但仍热，F 组出线战补水暂停概率高',
    historical_note: '达拉斯 · F组末轮 · 日本 vs 瑞典 · ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m58: {
    city: '堪萨斯城', country: '美国', venue: 'Arrowhead Stadium',
    temp: 32, humidity: 58, altitude_m: 270, rain_chance: 30,
    wind: '西风 2级 · 热', condition_cn: '堪萨斯城午后热',
    impact_level: 'MEDIUM', impact_summary: '荷兰深盘 vs 突尼斯 0 分——战术差距大于气候',
    home_adapt: 76, away_adapt: 88,
    impact: 'Arrowhead 开放式 32°C，荷兰轮换版仍占优',
    historical_note: '堪萨斯城 · F组末轮 · 突尼斯 vs 荷兰 · ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m59: {
    city: '洛杉矶', country: '美国', venue: 'SoFi Stadium',
    temp: 23, humidity: 58, altitude_m: 30, rain_chance: 10,
    wind: '海风 1级', condition_cn: '洛杉矶夏夜凉爽',
    impact_level: 'LOW', impact_summary: '美国 6 分或轮换 · 土耳其须胜',
    home_adapt: 78, away_adapt: 92,
    impact: 'SoFi 23°C 凉爽，Pochettino 末轮轮换幅度是最大变量',
    historical_note: '洛杉矶 · D组末轮 · 土耳其 vs 美国 · ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
  m60: {
    city: '旧金山湾区', country: '美国', venue: "Levi's Stadium",
    temp: 21, humidity: 62, altitude_m: 15, rain_chance: 15,
    wind: '太平洋 breeze 2级', condition_cn: '湾区夏夜凉爽',
    impact_level: 'LOW', impact_summary: '均分生死战——巴拉圭/澳大利亚各 3 分',
    home_adapt: 82, away_adapt: 84,
    impact: 'Levi\'s 21°C 凉爽，定位球与转换是破局路径',
    historical_note: '湾区 · D组末轮 · 巴拉圭 vs 澳大利亚 · ' + FORECAST_TS,
    forecast_updated: FORECAST_TS,
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] ? { ...VENUE_WEATHER[matchId] } : null;
}

module.exports = { venueWeather, VENUE_WEATHER };
