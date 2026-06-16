/** Day 6 venue weather — m17–m20 */

const VENUE_WEATHER = {
  m17: {
    city: '纽约/新泽西', country: '美国', venue: 'MetLife Stadium',
    temp: 26, humidity: 58, altitude_m: 10, rain_chance: 25, wind: '东南风 2级',
    condition_cn: '午后偏热，开放式',
    impact_level: 'LOW',
    impact: 'MetLife 开放式，26°C 对法国传控友好',
    impact_summary: '气候变量低——Mbappé vs Mané 战术对位为主',
    home_adapt: 88, away_adapt: 80,
    home_note: '法国球员习惯欧洲/北美夏季作战',
    away_note: '塞内加尔适应湿热，Mané 反击不受明显制约',
    weather_factors: [
      { label: '26°C 午后', impact: '中性', detail: '北京时间 03:00 对应当地 15:00 ET 前段' },
      { label: '开放式', impact: '低', detail: '降雨 25% 可能略滑' },
    ],
    historical_note: 'MetLife Stadium 容量 82,500 · I 组揭幕战',
  },
  m18: {
    city: '波士顿', country: '美国', venue: 'Gillette Stadium',
    temp: 22, humidity: 55, altitude_m: 60, rain_chance: 20, wind: '东北风 2级',
    condition_cn: '傍晚舒适',
    impact_level: 'LOW',
    impact: '新英格兰 22°C 傍晚，挪威完全适应',
    impact_summary: '气候均衡——Haaland 对位伊拉克低位是推演核心',
    home_adapt: 72, away_adapt: 86,
    home_note: '伊拉克适应中东气候，22°C 舒适',
    away_note: '挪威北欧球员完全适应',
    weather_factors: [{ label: '22°C 傍晚', impact: '有利高强度', detail: '90 分钟压迫均可维持' }],
    historical_note: 'Gillette Stadium 容量 65,878 · I 组第 2 场',
  },
  m19: {
    city: '堪萨斯城', country: '美国', venue: 'Arrowhead Stadium',
    temp: 29, humidity: 62, altitude_m: 270, rain_chance: 30, wind: '南风 3级',
    condition_cn: '中西部午后偏热',
    impact_level: 'LOW',
    impact: '29°C 对阿根廷略有消耗但深度碾压',
    impact_summary: '气候变量低——Messi/Lautaro 对位 Mahrez 是核心',
    home_adapt: 86, away_adapt: 74,
    home_note: '阿根廷南美球员适应夏季',
    away_note: '阿尔及利亚北非气候类似',
    weather_factors: [{ label: '29°C', impact: '中等', detail: '70\' 后传球精度略降' }],
    historical_note: 'Arrowhead Stadium 容量 76,416 · J 组揭幕战',
  },
  m20: {
    city: '旧金山湾区', country: '美国', venue: "Levi's Stadium",
    temp: 21, humidity: 52, altitude_m: 15, rain_chance: 5, wind: '西风 1级',
    condition_cn: '湾区夜场凉爽，人工草皮',
    impact_level: 'LOW',
    impact: '21°C 夜场，Rangnick 压迫体能消耗可控',
    impact_summary: '气候均衡——Al-Tamari 反击 vs Alaba 出球是核心',
    home_adapt: 84, away_adapt: 76,
    home_note: '奥地利适应凉爽夜场',
    away_note: '约旦适应中东-地中海气候',
    weather_factors: [{ label: '人工草皮', impact: '略快', detail: '传球速度略快，Rangnick 压迫受益' }],
    historical_note: "Levi's Stadium 容量 68,500 · J 组第 2 场",
  },
};

function venueWeather(matchId) {
  const w = VENUE_WEATHER[matchId];
  if (!w) throw new Error(`Unknown venue id: ${matchId}`);
  return JSON.parse(JSON.stringify(w));
}

module.exports = { venueWeather, VENUE_WEATHER };
