/**
 * 赛场气候 / 场地推演影响 — Day 4 (m09–m12)
 */

const VENUE_WEATHER = {
  m09: {
    city: '休斯顿',
    country: '美国',
    venue: 'NRG Stadium',
    temp: 32,
    humidity: 68,
    altitude_m: 15,
    rain_chance: 25,
    wind: '东南风 3级',
    condition_cn: '夜场湿热，体感约 36°C',
    impact_level: 'MEDIUM',
    impact: 'NRG Stadium 海平面 15m，6月夜场 32°C+68% 湿度，对欧洲球队体能消耗明显',
    impact_summary: '32°C 湿热夜场——70 分钟后换人深度成关键；德国替补席明显占优',
    home_adapt: 85,
    away_adapt: 72,
    home_note: '德国球员习惯欧洲夏季作战，但 68% 湿度高于德甲常态；Nagelsmann 轮换深度可抵消下半场体能下滑',
    away_note: '库拉索球员多效力加勒比/荷兰联赛，湿热并不陌生，但面对德国 90 分钟压迫，低位防守体能是最大考验',
    weather_factors: [
      { label: '32°C 夜场湿热', impact: '体能消耗', detail: '68% 湿度下 70\' 后传球精度下降，德国换人窗口 60–75\' 更利扩大比分' },
      { label: '海平面 15m', impact: '无海拔', detail: '双方无高原适应差异，纯比拼体能与替补深度' },
      { label: '可闭合屋顶', impact: '中性', detail: 'NRG 为 NFL 封闭场馆，无突发降雨干扰，场地条件稳定' },
      { label: '降雨 25%', impact: '低', detail: '室内场馆不受雨影响；若训练日有雨，天然草适应性对客队略不利' },
      { label: '开球 01:00 北京', impact: '德国略优', detail: '当地 12:00 CT 午后前段，气温尚未达日间峰值 35°C+，对双方相对友好' },
    ],
    historical_note: 'NRG Stadium 容量 71,054 · 2026 世界杯 E 组揭幕战；休斯顿 6 月平均高温 33°C，历来少因天气改期',
  },

  m10: {
    city: '达拉斯',
    country: '美国',
    venue: 'AT&T Stadium',
    temp: 30,
    humidity: 55,
    altitude_m: 180,
    rain_chance: 10,
    wind: '南风 2级',
    condition_cn: '凌晨微热，可闭合屋顶',
    impact_level: 'LOW',
    impact: 'AT&T Stadium 半封闭可闭合屋顶，180m 低海拔，气候变量对推演权重较低',
    impact_summary: '闭合屋顶消除降雨/风扰；30°C 对荷日两队均可接受，推演以战术对位为主',
    home_adapt: 88,
    away_adapt: 85,
    home_note: '荷兰球员多效力欧洲五大联赛，30°C 完全适应；de Jong 等控球型中场不受气候制约',
    away_note: '日本 2022 卡塔尔已适应高温作战；三中卫低位减少往返跑动，气候影响小于荷兰高位压迫队',
    weather_factors: [
      { label: '闭合屋顶球场', impact: '消除变量', detail: '无雨无强风，传球与定位球落点稳定，利于技术流对攻' },
      { label: '180m 低海拔', impact: '轻微', detail: '较海平面传球略快，长传需微调力度——对日本快速转移略利' },
      { label: '30°C 凌晨', impact: '中性', detail: '当地 15:00 CT 开球，气温适中；90 分钟高强度对双方均等' },
      { label: '湿度 55%', impact: '有利传控', detail: '干燥舒适，地面配合流畅，Gakpo/Kubo 肋部渗透不受场地拖累' },
      { label: '降雨 10%', impact: '无影响', detail: '室内关闭屋顶，推演可忽略降雨因子' },
    ],
    historical_note: 'AT&T Stadium 容量 80,000 · F 组揭幕战；达拉斯 6 月干燥少雨，世界杯期间多为晴朗',
  },

  m11: {
    city: '费城',
    country: '美国',
    venue: 'Lincoln Financial Field',
    temp: 27,
    humidity: 62,
    altitude_m: 12,
    rain_chance: 20,
    wind: '东北风 2级',
    condition_cn: '早场温和，开放式球场',
    impact_level: 'LOW',
    impact: '林肯金融球场开放式天然草，27°C 62% 湿度，对非洲/南美球队均友好',
    impact_summary: '气候均衡——推演重点在中场 Caicedo vs Kessié，非天气因素',
    home_adapt: 80,
    away_adapt: 82,
    home_note: '科特迪瓦球员多效力欧洲/非洲联赛，27°C 舒适；Adingra 等速度型边锋在干燥草皮上发挥更好',
    away_note: '厄瓜多尔来自赤道高原（基多 2850m 训练背景），费城海平面 12m 反而让其体能更充沛；19 场不败期间客场适应力强',
    weather_factors: [
      { label: '27°C 早场', impact: '中性', detail: '北京时间 07:00 对应当地 19:00 ET，晚场气温回落，利于 90 分钟高强度对抗' },
      { label: '开放式天然草', impact: '略利传控', detail: '非人工草，Caicedo 长传与 Estupiñán 左路传中落点更可预测' },
      { label: '湿度 62%', impact: '中等', detail: '费城夏季典型湿度，60\' 后体能下降对双方均等，领先方或更保守' },
      { label: '降雨 20%', impact: '低', detail: '若微雨则场地湿滑，略利防守方（厄瓜多尔 19 场不败低位）' },
      { label: '东北风 2级', impact: '轻微', detail: '影响长传与角球落点，van 式定位球需微调——对两队均等' },
    ],
    historical_note: 'Lincoln Financial Field 容量 69,796 · E 组赛事；费城 6 月平均 28°C，开放式球场受微风影响',
  },

  m12: {
    city: '蒙特雷',
    country: '墨西哥',
    venue: 'Estadio BBVA',
    temp: 34,
    humidity: 45,
    altitude_m: 540,
    rain_chance: 5,
    wind: '西风 2级',
    condition_cn: '晚场干热，开放式球场',
    impact_level: 'MEDIUM',
    impact: 'Estadio BBVA 540m 海拔+34°C 干热，对北欧球队体能考验大于北非球队',
    impact_summary: '34°C 干热是本场重要推演变量——60\' 后瑞典换人需求高于突尼斯，已纳入 xG 权重',
    home_adapt: 75,
    away_adapt: 82,
    home_note: '瑞典来自北欧温带，34°C 干热非其舒适区；Isak 等球员需 55\' 前建立优势，否则 70\' 后体能下滑明显',
    away_note: '突尼斯/北非球员更习惯地中海-撒哈拉干热气候；Lamouchi 低位防守减少跑动，高温适应性评分更高',
    weather_factors: [
      { label: '34°C 干热', impact: '突尼斯略优', detail: '干热下 70\' 后瑞典高位压迫效率下降，Potter 需 55\' 起轮换' },
      { label: '540m 海拔', impact: '轻微缺氧', detail: '较海平面传球略快、体能消耗略增，瑞典球员需额外适应 2–3 天' },
      { label: '湿度 45% 干燥', impact: '有利反击', detail: '球速快、弹跳低，Msakni 直塞与 Isak 身后跑均受益，各取所需' },
      { label: '开放式球场', impact: '风扰轻微', detail: '西风 2级影响角球与远射，瑞典定位球优势需考虑风向' },
      { label: '开球 10:00 北京', impact: '中性', detail: '当地约 20:00 晚场，气温较日间峰值回落，但仍达 30°C+' },
    ],
    historical_note: 'Estadio BBVA（Gigantes de Acero）容量 53,500 · F 组墨西哥主场；蒙特雷 6 月干热少雨，世界杯经典高温场次之一',
  },
};

function venueWeather(matchId) {
  return VENUE_WEATHER[matchId] ? { ...VENUE_WEATHER[matchId] } : null;
}

module.exports = { VENUE_WEATHER, venueWeather };
