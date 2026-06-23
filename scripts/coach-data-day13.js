/** Day 13 coach profiles & upset alerts — m47/m45/m46/m48 · K/L 组第2轮 */
function coach(name, data) {
  return { name, ...data };
}

const PROFILES = {
  martinez: coach('Roberto Martínez', {
    age: 51, nation: '西班牙', tenure: '2022年—', wc_exp: '2018 比利时季军主帅 · 2026 葡萄牙带队',
    style_tags: ['4-3-3', 'C罗核心', 'B费节拍', '须破局'],
    formation_pref: '4-3-3 · C罗单锋 + Leão 宽度',
    style_summary: '1-1 刚果金冷门后 K 组被动；Martínez 预计最强 XI 围攻乌兹别克，C罗 0 射正后更衣室压力上升，B费+Leão 肋部破局是必选项。',
    subs: { timing: '首换 55–60 分钟', pattern: 'Félix/Leão 互替；C罗 70\' 可能换下', avg_first_sub: '58\'', note: '1-1 后换人会更早' },
    when_leading: { label: '继续宽度', detail: '1 球领先：维持 4-3-3 穿盘，不早退。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：55\' 换 Leão/Félix 加码。' },
    vs_strong: { label: '对强队：对攻', detail: '对哥伦比亚末轮会相对保守。' },
    vs_weak: { label: '对弱队：必须穿盘', detail: '对 0 分乌兹别克 xG 2.05 须兑现。' },
    tournament: '1-1 刚果金是本届最大冷门信号之一；Martínez 赛前称「过程 OK 结果不够」。',
    traits: ['C罗依赖', 'B费节拍', '必须取胜', '更衣室压力'],
  }),
  katanec: coach('Srečko Katanec', {
    age: 61, nation: '斯洛文尼亚', tenure: '2021年—', wc_exp: '2026 带队 · 亚洲杯四强',
    style_tags: ['4-2-3-1', 'Shomurodov 核心', '低位', '定位球'],
    formation_pref: '4-2-3-1 · Shomurodov 单锋',
    style_summary: '1-3 哥伦比亚后 0 分垫底；Katanec 对葡萄牙预计 5-4-1 极深低位，Shomurodov 反击 + 定位球偷分是唯一路径。',
    subs: { timing: '首换 70 分钟+', pattern: '换人偏晚；体能分配优先', avg_first_sub: '72\'', note: '弱队体能优先' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '维持低位', detail: 'Shomurodov 反击是唯一希望。' },
    vs_strong: { label: '对强队：龟缩', detail: '对葡萄牙教科书 5-4-1。' },
    vs_weak: { label: '不适用', detail: 'K 组已无更弱对手。' },
    tournament: '亚洲杯四强经验；首轮 1-3 后更衣室强调「对葡萄牙拿 1 分仍是成功」。',
    traits: ['Shomurodov 依赖', '极深低位', '定位球', '偷分动机'],
  }),
  tuchel: coach('Thomas Tuchel', {
    age: 52, nation: '德国', tenure: '2024年—', wc_exp: '欧冠冠军主帅 · 2026 英格兰带队',
    style_tags: ['4-2-3-1', 'Bellingham 核心', '高位', '宽度'],
    formation_pref: '4-2-3-1 · Kane 支点 + Saka 宽度',
    style_summary: '4-2 克罗地亚半场对攻后 L 组领跑；对加纳 Tuchel 预计维持高位+宽度，Bellingham 伪 10 对位 Partey 屏障是战术轴心。',
    subs: { timing: '首换 58–65 分钟', pattern: 'Rashford/Foden 后手；Kane 打满', avg_first_sub: '60\'', note: '榜首战轮换有限' },
    when_leading: { label: '控节奏 · 适度轮换', detail: '2 球+：65\' 轮换保护 Bellingham。' },
    when_trailing: { label: '堆前锋', detail: 'unlikely 先丢球；若先丢则 55\' 换 Watkins。' },
    vs_strong: { label: '对强队：对攻', detail: '4-2 克罗地亚已验证高位对攻。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对加纳须全取 3 分巩固榜首。' },
    tournament: 'Tuchel 称「4-2 只是开始」；Stones 赛前队检是唯一变数。',
    traits: ['Bellingham 核心', '高位', '榜首战', 'Kane 点球'],
  }),
  addo: coach('Otto Addo', {
    age: 49, nation: '德国/加纳', tenure: '2024年—', wc_exp: '2022 带队 · 2026 再任',
    style_tags: ['4-2-3-1', 'Kudus 核心', '转换', '身体对抗'],
    formation_pref: '4-2-3-1 · Kudus 右翼',
    style_summary: '1-0 巴拿马补时绝杀后与英格兰同分；Addo 对 Tuchel 预计 4-5-1 低位 + Kudus 反击，Yirenkyi 补时破门提振更衣室士气。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Semenyo/J. Ayew 后手', avg_first_sub: '62\'', note: '榜首对话体能关键' },
    when_leading: { label: '4-5-1 收缩', detail: '若意外领先：Partey 屏障+长传找 Kudus。' },
    when_trailing: { label: '堆边锋', detail: '先丢球：55\' 换进攻手加码。' },
    vs_strong: { label: '对强队：龟缩+转换', detail: '对英格兰低位 + Kudus 速度是唯一路径。' },
    vs_weak: { label: '对弱队：压上', detail: '1-0 巴拿马已验证。' },
    tournament: 'Addo 赛前：「英格兰很强，但 2022 非洲球队不怕他们」；Kudus 英超状态是最大资产。',
    traits: ['Kudus 爆点', 'Partey 屏障', '转换', '同分榜首战'],
  }),
  christiansen: coach('Thomas Christiansen', {
    age: 51, nation: '丹麦/西班牙', tenure: '2021年—', wc_exp: '2026 巴拿马带队',
    style_tags: ['4-4-2', '低位', '定位球', 'Fajardo 支点'],
    formation_pref: '4-4-2 · Fajardo 定位球',
    style_summary: '0-1 加纳补时失利后 0 分危急；Christiansen 对克罗地亚预计 5-4-1 极守，Fajardo 定位球偷分 vs Modrić 控球是唯一冷门点。',
    subs: { timing: '首换 70 分钟+', pattern: '换人偏晚', avg_first_sub: '72\'', note: '弱队体能分配优先' },
    when_leading: { label: '5-4-1 铁桶', detail: '若意外领先：立即退守。' },
    when_trailing: { label: '维持低位', detail: 'unlikely 大举压上。' },
    vs_strong: { label: '对强队：龟缩', detail: '对克罗地亚/英格兰同一模板。' },
    vs_weak: { label: '不适用', detail: 'L 组已无更弱对手。' },
    tournament: '补时输给加纳后更衣室强调「对克罗地亚仍须抢分」；MLS 班底体能是隐患。',
    traits: ['极深低位', '定位球', 'Fajardo', '0 分须抢分'],
  }),
  dalic: coach('Zlatko Dalić', {
    age: 58, nation: '克罗地亚', tenure: '2017年—', wc_exp: '2018 亚军 · 2022 季军',
    style_tags: ['4-3-3', 'Modrić 核心', '控球', '大赛经验'],
    formation_pref: '4-3-3 · Modrić 节拍',
    style_summary: '2-4 英格兰半场对攻后 0 分被动；Dalić 对巴拿马预计全场压制，Modrić 75\' 可能换下，Gvardiol 防线须防 Fajardo 定位球。',
    subs: { timing: '首换 60–65 分钟', pattern: 'Modrić 常 75\' 换下；Kovačić 待命', avg_first_sub: '65\'', note: '0 分须抢分' },
    when_leading: { label: '控节奏', detail: '1 球领先：维持宽度，Modrić 控节拍。' },
    when_trailing: { label: '堆中场', detail: '先丢球：60\' 换 Kovačić 加强控制。' },
    vs_strong: { label: '对强队：稳守反击', detail: '对英格兰已验证可对攻。' },
    vs_weak: { label: '对弱队：控球压制', detail: '对巴拿马 xG 1.42 须兑现。' },
    tournament: '2018/2022 大赛 DNA 仍在；2-4 后 Dalić 称「对巴拿马必须 3 分，Modrić 仍是核心」。',
    traits: ['Modrić 依赖', '大赛 DNA', '须穿盘', 'Gvardiol 防线'],
  }),
  lorenzo: coach('Néstor Lorenzo', {
    age: 58, nation: '阿根廷/哥伦比亚', tenure: '2022年—', wc_exp: '2024 美洲杯亚军',
    style_tags: ['4-2-3-1', 'Díaz 核心', '宽度', '领跑'],
    formation_pref: '4-2-3-1 · Díaz 左翼',
    style_summary: '3-1 乌兹别克后 K 组领跑；Lorenzo 对刚果金预计轮换有限，Díaz/James 宽度 + 高原夜战宜早破局穿盘。',
    subs: { timing: '首换 58–65 分钟', pattern: 'Borré/Díaz 互替', avg_first_sub: '60\'', note: '领跑可适度轮换' },
    when_leading: { label: '控节奏 · 宽度', detail: '1 球领先：维持 4-2-3-1 宽度。' },
    when_trailing: { label: '堆前锋', detail: 'unlikely 先丢球；若先丢则 55\' 换 Borré。' },
    vs_strong: { label: '对强队：对攻', detail: '对葡萄牙末轮会相对保守。' },
    vs_weak: { label: '对弱队：不留余地', detail: '对刚果金 Wissa 反击是唯一变数。' },
    tournament: '2024 美洲杯亚军；3-1 乌兹别克后更衣室士气高涨，Lerma 屏障稳固。',
    traits: ['Díaz 核心', 'James 节拍', 'K 组领跑', '高原夜战'],
  }),
  desabre: coach('Sébastien Desabre', {
    age: 47, nation: '法国', tenure: '2016年—', wc_exp: '2026 带队 · 2019 非洲杯季军',
    style_tags: ['4-2-3-1', 'Wissa 核心', '低位', '转换'],
    formation_pref: '4-2-3-1 · Wissa 单锋',
    style_summary: '1-1 葡萄牙历史性扳平后信心暴涨；Desabre 对哥伦比亚预计 4-5-1 低位，Wissa 速度 + 定位球偷分 vs Díaz 宽度是冷门路径。',
    subs: { timing: '首换 65–70 分钟', pattern: 'Wissa 打满概率高', avg_first_sub: '68\'', note: '弱队换人偏晚' },
    when_leading: { label: '5-4-1 收缩', detail: '若意外领先：立即退守+Wissa 反击。' },
    when_trailing: { label: 'Wissa 单核', detail: '先丢球：60\' 换 Bakambu 加强冲击。' },
    vs_strong: { label: '对强队：龟缩+转换', detail: '对哥伦比亚：低位+Wissa 速度。' },
    vs_weak: { label: '不适用', detail: 'K 组已无更弱对手。' },
    tournament: '1-1 葡萄牙（Wissa 45+5\'）是本届最大冷门之一；Desabre 大赛防守纪律是资产。',
    traits: ['Wissa 依赖', '低位防守', '转换', '1-1 葡萄牙信心'],
  }),
};

const NOTES = {
  'martinez-katanec': {
    home: '1-1 刚果后须 3 分——C罗/B费 肋部+Leão 宽度 vs Katanec 5-4-1；休斯顿湿热宜早破局。',
    away: '1-3 哥伦比亚后 0 分垫底；Shomurodov 反击+定位球偷分，1 分即是胜利。',
  },
  'tuchel-addo': {
    home: 'L 组榜首对话——Bellingham 伪 10 + Saka 宽度 vs Partey 屏障；4-2 克罗地亚后高位对攻延续。',
    away: '1-0 巴拿马补时绝杀后与英格兰同分；Kudus 反击 vs Tuchel 高位，低位+转换是唯一路径。',
  },
  'christiansen-dalic': {
    home: '0 分须抢分——Fajardo 定位球偷分 vs Modrić 控球；5-4-1 铁桶是生存之本。',
    away: '2-4 英格兰后须穿盘——Modrić 节拍 + Gvardiol 防线 vs MLS 班底，xG 1.42 须兑现。',
  },
  'lorenzo-desabre': {
    home: 'K 组领跑宜穿盘——Díaz/James 宽度 vs Wissa 反击；高原夜战 2240m 后段体能是变量。',
    away: '1-1 葡萄牙信心暴涨——Wissa 速度+定位球偷分 vs Díaz 肋部，守 0-1 进 70\' 可接受。',
  },
};

const UPSET_ALERTS = {
  m47: {
    favorite: 'Portugal', underdog: 'Uzbekistan', favorite_iso: 'POR',
    index: 16, level: 'LOW', level_cn: '低',
    cold_result_pct: 14,
    verdict: '葡萄牙 1-1 刚果后深盘——Katanec 5-4-1 + Shomurodov 反击使平局偷分空间约 14%。',
    tactical: 'Martínez 4-3-3 围攻 vs Katanec 5-4-1；C罗 破局是关键。',
    psychology: '葡萄牙「必须 3 分」；乌兹别克「0 分仍可为荣誉而战」。',
    historical: '无大赛交锋；葡萄牙 1-1 刚果金是冷门信号。',
    factors: [
      { tag: 'C罗', impact: '强', detail: '1-1 后 0 射正压力' },
      { tag: '铁桶', impact: '中', detail: 'Katanec 5-4-1 极守' },
      { tag: '湿热', impact: '中', detail: '休斯顿 32°C 夏夜' },
    ],
  },
  m45: {
    favorite: 'England', underdog: 'Ghana', favorite_iso: 'ENG',
    index: 28, level: 'MEDIUM', level_cn: '中等',
    cold_result_pct: 24,
    verdict: '加纳 1-0 巴拿马后与英格兰同分——Kudus 反击 + Addo 低位使平局/加纳冷胜约 24%。',
    tactical: 'Tuchel 4-2-3-1 高位 vs Addo 4-5-1；Kudus 对 Walker 速度对位关键。',
    psychology: '英格兰「4-2 只是开始」；加纳「2022 非洲球队不怕英格兰」。',
    historical: '大赛英格兰占优；加纳 Kudus 英超状态是变量。',
    factors: [
      { tag: 'Kudus', impact: '强', detail: 'L 组最大反击威胁' },
      { tag: '榜首战', impact: '强', detail: '胜者大概率锁定出线' },
      { tag: 'Stones', impact: '中', detail: '赛前队检存疑' },
    ],
  },
  m46: {
    favorite: 'Croatia', underdog: 'Panama', favorite_iso: 'CRO',
    index: 18, level: 'LOW', level_cn: '低',
    cold_result_pct: 16,
    verdict: '克罗地亚 2-4 英格兰后须穿盘——Christiansen 5-4-1 + Fajardo 定位球使 1-1 偷分约 16%。',
    tactical: 'Dalić 4-3-3 控球 vs Christiansen 5-4-1；Modrić 破密集是关键。',
    psychology: '克罗地亚「对巴拿马必须 3 分」；巴拿马「补时输球仍须抢分」。',
    historical: '无大赛交锋；巴拿马 MLS 班底防守纪律是资产。',
    factors: [
      { tag: 'Modrić', impact: '强', detail: '最后一届大赛核心' },
      { tag: '定位球', impact: '中', detail: 'Fajardo 偷分路径' },
      { tag: '气候', impact: '低', detail: '多伦多 22°C 凉爽' },
    ],
  },
  m48: {
    favorite: 'Colombia', underdog: 'Congo DR', favorite_iso: 'COL',
    index: 22, level: 'LOW', level_cn: '低',
    cold_result_pct: 18,
    verdict: '哥伦比亚 K 组领跑——Desabre 1-1 葡萄牙信心 + Wissa 反击使平局偷分约 18%。',
    tactical: 'Lorenzo 4-2-3-1 宽度 vs Desabre 4-5-1；Wissa 对 Gvardiol 速度对位。',
    psychology: '哥伦比亚「宜穿盘巩固榜首」；刚果「1-1 葡萄牙可以复制」。',
    historical: '无大赛交锋；刚果 1-1 葡萄牙是最大冷门信号。',
    factors: [
      { tag: 'Wissa', impact: '强', detail: '45+5\' 扳平葡萄牙' },
      { tag: 'Díaz', impact: '强', detail: '3-1 乌兹别克状态' },
      { tag: '高原', impact: '中', detail: '瓜达拉哈拉 1560m 夜战' },
    ],
  },
};

function buildCoachAnalysis(homeKey, awayKey) {
  const notes = NOTES[`${homeKey}-${awayKey}`] || { home: '', away: '' };
  return {
    home: { ...PROFILES[homeKey], match_note: notes.home },
    away: { ...PROFILES[awayKey], match_note: notes.away },
  };
}

function getUpsetAlert(matchId) {
  return UPSET_ALERTS[matchId] ? { ...UPSET_ALERTS[matchId] } : null;
}

const MATCH_COACH_KEYS = {
  m47: { homeKey: 'martinez', awayKey: 'katanec' },
  m45: { homeKey: 'tuchel', awayKey: 'addo' },
  m46: { homeKey: 'christiansen', awayKey: 'dalic' },
  m48: { homeKey: 'lorenzo', awayKey: 'desabre' },
};

module.exports = { PROFILES, buildCoachAnalysis, getUpsetAlert, MATCH_COACH_KEYS };
