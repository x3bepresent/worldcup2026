/** Day 6 venue weather — m17–m20（气候因素 → 推演影响 完整版） */

const VENUE_WEATHER = {
  m17: {
    city: '纽约/新泽西',
    country: '美国',
    venue: 'MetLife Stadium',
    temp: 26,
    humidity: 58,
    altitude_m: 10,
    rain_chance: 25,
    wind: '东南风 2级',
    condition_cn: '午后偏热，开放式',
    impact_level: 'LOW',
    impact: 'MetLife 开放式，26°C 午后前段；气候对推演权重低，Mbappé/Mané 战术对位仍是主轴',
    impact_summary: '气候变量低——法国传控深度略受益，塞内加尔转换不受明显制约',
    home_adapt: 88,
    away_adapt: 80,
    home_note: '法国球员习惯欧洲/北美夏季作战；Deschamps 控球轮换体系在 26°C 可全场执行',
    away_note: '塞内加尔适应湿热非洲联赛节奏；Mané/Jackson 冲刺型打法对气温不敏感',
    prediction_note: '模型未因气候下调总 xG；若临场小雨，长传精度略降约 2–3%',
    weather_factors: [
      {
        label: '26°C · 15:00 ET 开球',
        impact: '中性偏利控球',
        detail: '北京时间 03:00 对应当地午后前段，尚未达 30°C 峰值；法国 90 分钟控球消耗可控，领先 2 球后 65\' 轮换仍可按计划执行',
      },
      {
        label: '开放式球场',
        impact: '低变量',
        detail: '无屋顶，但降雨概率 25% 偏低；对两队影响相当，不会系统性压低总进球预期',
      },
      {
        label: '湿度 58%',
        impact: '中性',
        detail: '中等湿度，传球与冲刺均可维持；对塞内加尔低位防守的体能考验小于海湾 70%+ 湿热场次',
      },
      {
        label: '海平面 10m',
        impact: '无海拔差',
        detail: '双方无高原适应差异；Koulibaly 防空与 Thuram 冲刺均不受氧气因素干扰',
      },
      {
        label: '东南风 2级',
        impact: '定位球微调',
        detail: '微风对角球/任意球落点影响有限；法国定位球（Tchouaméni/Kanté 后插上）略利',
      },
    ],
    historical_note: 'MetLife Stadium 容量 82,500 · I 组揭幕战 · 纽约都会区 6 月午后气候稳定',
  },

  m18: {
    city: '波士顿',
    country: '美国',
    venue: 'Gillette Stadium',
    temp: 22,
    humidity: 55,
    altitude_m: 60,
    rain_chance: 20,
    wind: '东北风 2级',
    condition_cn: '傍晚舒适，天然草皮',
    impact_level: 'LOW',
    impact: '新英格兰 22°C 傍晚，天然草传控落点稳定；气候几乎不干扰 Haaland 破局推演',
    impact_summary: '气候均衡——Haaland 对位伊拉克低位是推演核心，天气不构成冷门变量',
    home_adapt: 72,
    away_adapt: 86,
    home_note: '伊拉克球员习惯中东 30°C+ 作战，22°C 反而更利于 90 分钟低位防守专注度',
    away_note: '挪威北欧球员完全适应；Solbakken 宽度拉开+Haaland 冲刺在凉爽傍晚可全场执行',
    prediction_note: '模型未因气候下调总 xG；天然草有利于挪威地面配合与直塞',
    weather_factors: [
      {
        label: '22°C · 18:00 ET 傍晚',
        impact: '有利高强度',
        detail: '北京时间 06:00 对应波士顿入夜前最舒适时段；挪威高位压迫与 Haaland 反复冲刺均可维持 90 分钟',
      },
      {
        label: '天然草皮',
        impact: '略利传控方',
        detail: '传球落点稳定，Ødegaard 直塞与边路宽度配合更流畅；伊拉克解围后二次落点处理难度上升',
      },
      {
        label: '湿度 55% · 降雨 20%',
        impact: '低',
        detail: '干燥舒适，场地不易积水；对 0-0 守平策略与挪威破密集防守均中性',
      },
      {
        label: '低海拔 60m',
        impact: '无',
        detail: '无高原因素；伊拉克定位球是唯一稳定威胁，与气候无关',
      },
      {
        label: '东北风 2级',
        impact: '中性',
        detail: '对 Hussein 头球与挪威传中影响相当，不构成方向性倾斜',
      },
    ],
    historical_note: 'Gillette Stadium 容量 65,878 · I 组第 2 场 · 新英格兰 6 月傍晚历来少极端天气',
  },

  m19: {
    city: '堪萨斯城',
    country: '美国',
    venue: 'Arrowhead Stadium',
    temp: 29,
    humidity: 62,
    altitude_m: 270,
    rain_chance: 30,
    wind: '南风 3级',
    condition_cn: '中西部午后偏热，开放式',
    impact_level: 'MEDIUM',
    impact: '29°C+62% 湿度，开放式；阿根廷深度碾压但 70\' 后阿尔及利亚低位体能是变量',
    impact_summary: '午后偏热——60\' 后传球精度略降，领先方降 tempo 概率上升；总 xG 模型微调约 -6%',
    home_adapt: 86,
    away_adapt: 74,
    home_note: '阿根廷南美球员习惯夏季作战；Scaloni 替补深度（Garnacho/Almada）可应对 70\' 后体能下滑',
    away_note: '阿尔及利亚北非球员熟悉干热，但 90 分钟 Belmadi 低位+Mahrez 反击对体能要求更高',
    prediction_note: '模型已将总 xG 微调约 -6%（MEDIUM 湿热）；Messi 70\' 换下策略与气候高度吻合',
    weather_factors: [
      {
        label: '29°C 午后偏热',
        impact: '体能消耗',
        detail: '62% 湿度下 60\' 后传球精度下降；阿尔及利亚若先守 0-0，70\' 后防线松动概率上升',
      },
      {
        label: '270m 低海拔',
        impact: '轻微',
        detail: '较海平面氧气略稀，但对欧洲/南美球员影响有限；不构成高原冷门变量',
      },
      {
        label: '开放式 · 降雨 30%',
        impact: '中等',
        detail: '若有阵雨场地略滑，Mahrez 启动与阿根廷肋部渗透需调整；总进球预期不因雨单独下调',
      },
      {
        label: '南风 3级',
        impact: '边路微调',
        detail: '对 Attal 插上与 Tagliafico 对位有轻微影响；定位球落点略偏，角球破局权重略升',
      },
      {
        label: '替补深度差',
        impact: '利阿根廷',
        detail: '湿热消耗下替补质量差距放大——Scaloni 60\' 后换 Garnacho 提速 vs Belmadi 换人类型有限',
      },
    ],
    historical_note: 'Arrowhead Stadium 容量 76,416 · J 组揭幕战 · 中西部 6 月午后常有 28–32°C',
  },

  m20: {
    city: '旧金山湾区',
    country: '美国',
    venue: "Levi's Stadium",
    temp: 21,
    humidity: 52,
    altitude_m: 15,
    rain_chance: 5,
    wind: '西风 1级',
    condition_cn: '湾区夜场凉爽，人工草皮',
    impact_level: 'LOW',
    impact: "21°C 夜场 + 人工草皮；Rangnick 压迫节奏可控，气候不是本场推演主轴",
    impact_summary: '气候均衡——Al-Tamari 反击 vs Alaba 出球是核心；人工草略加快传球',
    home_adapt: 84,
    away_adapt: 76,
    home_note: '奥地利球员习惯欧洲联赛；凉爽夜场利于 Rangnick 90 分钟高位线保持',
    away_note: '约旦适应中东-地中海气候；低位防守在 21°C 可维持，但人工草传球速度加快或不利出球',
    prediction_note: '模型未因气候下调总 xG；人工草略利压迫方（传球更快，Jordan 出球失误率上升）',
    weather_factors: [
      {
        label: '21°C · 21:00 PT 夜场',
        impact: '有利压迫',
        detail: '北京时间 12:00 对应湾区上午但当地为前一日 21:00 PT 夜场凉爽；Rangnick 高位强度可全场维持',
      },
      {
        label: '人工草皮',
        impact: '略快 · 利主队',
        detail: '传球速度比天然草快 5–8%，Alaba 出球与 Sabitzer 前插更顺；Jordan 后场出球失误概率上升',
      },
      {
        label: '湿度 52% · 降雨 5%',
        impact: '无',
        detail: '湾区夏季夜场干燥，几乎无天气干扰；总进球预期不因降雨调整',
      },
      {
        label: '海平面 15m',
        impact: '无海拔',
        detail: '双方无高原差异；Arnautović 头球与 Jordan 低位防空均正常发挥',
      },
      {
        label: '西风 1级',
        impact: '中性',
        detail: '微风对 Al-Tamari 反击长传与奥地利边路传中影响可忽略',
      },
    ],
    historical_note: "Levi's Stadium 容量 68,500 · J 组第 2 场 · 湾区 6 月夜场气候稳定，人工草为最大场地变量",
  },
};

function venueWeather(matchId) {
  const w = VENUE_WEATHER[matchId];
  if (!w) throw new Error(`Unknown venue id: ${matchId}`);
  return JSON.parse(JSON.stringify(w));
}

module.exports = { venueWeather, VENUE_WEATHER };
