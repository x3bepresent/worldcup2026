/**
 * Enrich Day 8 todayMatches (m25–m28) — coach, mystic, weather, injuries, upset_alert
 * Run: node scripts/roll-day8.js && node scripts/enrich-day8.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { lineupFromPrediction } = require('./pending-templates');
const { buildCoachAnalysis } = require('./coach-data-day8');
const { venueWeather } = require('./venue-weather-day8');
const { getMystic } = require('./mystic-data-day8');
const { getReferee } = require('./referee-data-day8');
const { getTeamNews } = require('./injuries-rumors-day8');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const TS = '2026-06-19T10:00:00+08:00';

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function team(name, iso, rank, rating, form, coachName, stars, star, injuries, rumors) {
  const t = { name, iso, flag: '', fifa_rank: rank, rating, form, coach: coachName, stars, injuries, rumors };
  t.star = star || (stars[0] ? { ...stars[0] } : {});
  return t;
}

function pred(xgH, xgA, keyFactor, confidence = 72) {
  const o = computeOutcomeFromXg(xgH, xgA);
  return {
    home_win: Math.round(o.home_win),
    draw: Math.round(o.draw),
    away_win: Math.round(o.away_win),
    score: o.score,
    confidence,
    xg_home: xgH,
    xg_away: xgA,
    key_factor: keyFactor,
    score_dist: computeScoreDistribution(xgH, xgA, { topN: 7 }),
  };
}

function localKickoffFromBeijing(tl) {
  const map = {
    '00:00': { time: '12:00', time_local: '12:00 ET', timezone: 'EDT (UTC-4)' },
    '03:00': { time: '15:00', time_local: '15:00 PT', timezone: 'PDT (UTC-7)' },
    '06:00': { time: '18:00', time_local: '18:00 PT', timezone: 'PDT (UTC-7)' },
    '09:00': { time: '21:00', time_local: '21:00 CT', timezone: 'CDT (UTC-5)' },
  };
  return map[tl] || { time: '12:00', time_local: '12:00 ET', timezone: 'EDT (UTC-4)' };
}

function baseMatch(id, group, matchday, beijing, venue, city, note, xgH, xgA, keyFactor, conf, homeKey, awayKey, buildTeams) {
  const [tb, tl] = beijing.split(' ');
  const local = localKickoffFromBeijing(tl);
  const teams = buildTeams();
  return {
    id,
    group,
    matchday,
    date: '2026-06-18',
    time: local.time,
    time_local: local.time_local,
    timezone: local.timezone,
    time_beijing: tl,
    date_beijing: tb,
    time_beijing_full: `北京时间 ${tb} ${tl}`,
    venue,
    city,
    note,
    lineup: teams.lineup,
    home: teams.home,
    away: teams.away,
    h2h: teams.h2h,
    referee: getReferee(id),
    prediction: pred(xgH, xgA, keyFactor, conf),
    upset_alert: teams.upset,
    coach_analysis: buildCoachAnalysis(homeKey, awayKey),
    weather: venueWeather(id),
    mystic: getMystic(id),
  };
}

function buildM25() {
  const lineup = lineupFromPrediction({
    formation: '3-4-2-1 / 4-3-3',
    home: 'Kovář; Chaloupek, Hranáč, Krejčí; Coufal, Souček, Sojka, Zelený; Provod, Šulc; Schick',
    away: 'Williams; Mudau, Okon, Mbokazi, Modiba; Mokoena, Mbatha, Adams; Appollis, Foster, Mofokeng',
    source: 'SI / Al Jazeera / Opta 预测 · 非官方',
    alt: {
      formation: '3-4-2-1 / 5-3-2',
      home: 'Kovář; Chaloupek, Hranáč, Krejčí; Coufal, Souček, Sojka, Zelený; Provod, Hložek; Schick',
      away: 'Williams; Mudau, Okon, Mbokazi, Modiba, Sibisi; Mokoena, Mbatha, Adams; Moremi, Mofokeng, Appollis; Foster',
      source: 'beIN / Livescore 备选预测',
    },
  });
  lineup.note =
    '官方首发尚未确认；下方为媒体预测（已剔除 Sithole、Zwane 揭幕战红牌停赛）。不计入已确认推演权重。';

  return baseMatch('m25', 'A', 2, '6月19日 00:00', 'Mercedes-Benz Stadium', 'Atlanta, USA',
    'A组第2轮 · 捷克 vs 南非 · 亚特兰大', 1.52, 0.88,
    '捷克 3-4-2-1 抢分：Schick+Provod/Šulc 双前腰；南非 Sithole/Zwane 红牌停赛，Mbatha/Mofokeng 顶替；泊松最可能 1-0/2-0。',
    72, 'hasek', 'broos', () => ({
      lineup,
      home: team('Czechia', 'cz', 40, 72, ['L', 'W', 'D', 'W', 'L'], 'Ivan Hašek', [
        { name: 'Patrik Schick', pos: 'ST', club: 'Bayer Leverkusen', stats: '84\' 挽回颜面', rating: 8.0, desc: '必须抢分之战核心' },
        { name: 'Tomáš Souček', pos: 'DM', club: 'West Ham', stats: '屏障', rating: 7.8, desc: '三中卫前保护' },
        { name: 'Lukáš Provod', pos: 'CAM', club: 'Slavia', stats: '10 号', rating: 7.4, desc: '肋部渗透' },
      ], { name: 'Patrik Schick', pos: 'ST', desc: '对南非不容再失分', rating: 8.0 },
        getTeamNews('m25', 'home').injuries, getTeamNews('m25', 'home').rumors),
      away: team('South Africa', 'za', 58, 65, ['L', 'W', 'D', 'L', 'W'], 'Hugo Broos', [
        { name: 'Lyle Foster', pos: 'ST', club: 'Burnley', stats: '锋线支点', rating: 7.2, desc: '次轮生死战预计首发' },
        { name: 'Teboho Mokoena', pos: 'DM', club: 'Mamelodi Sundowns', stats: '屏障', rating: 7.0, desc: '中场绞杀' },
        { name: 'Relebohile Mofokeng', pos: 'RW', club: 'Orlando Pirates', stats: '顶替 Zwane', rating: 6.9, desc: '边路速度' },
      ], { name: 'Lyle Foster', pos: 'ST', desc: 'Sithole/Zwane 停赛下锋线担当', rating: 7.2 },
        getTeamNews('m25', 'away').injuries, getTeamNews('m25', 'away').rumors),
      h2h: { home_wins: 1, draws: 1, away_wins: 0, recent: [], note: '友谊赛交锋有限' },
      upset: {
        favorite: 'Czechia', underdog: 'South Africa', favorite_iso: 'CZE',
        index: 28, level: 'LOW', level_cn: '低',
        cold_result_pct: 24,
        verdict: '捷克纸面占优且南非中场双核停赛——Foster/Mofokeng 难完全替代 Zwane 创造力，平局空间收窄至约 26%。',
        tactical: 'Hašek 3-4-2-1 压上 vs Broos 4-3-3 转换；Schick 对位南非中卫，Mbatha 顶 Sithole 屏障位是关键。',
        psychology: '南非再负基本出局但缺两名揭幕战主力；捷克必须抢分。',
        historical: '无大赛交锋；揭幕战 3 红后 Broos 变阵压力极大。',
        factors: [
          { tag: '停赛', impact: '强', detail: 'Sithole、Zwane 红牌缺席，南非中场创造力下滑' },
          { tag: '出线压力', impact: '强', detail: '双方均需 3 分' },
          { tag: '实力差', impact: '中', detail: 'xG 差约 0.6，Schick 决定上限' },
        ],
      },
    }));
}

function buildM26() {
  return baseMatch('m26', 'B', 2, '6月19日 03:00', 'SoFi Stadium', 'Los Angeles, USA',
    'B组第2轮 · 瑞士 vs 波黑 · 洛杉矶', 1.55, 1.05,
    '瑞士首轮平卡塔尔需取胜：Xhaka/Akanji 组织优势；波黑 Džeko 定位球偷分；泊松最可能 2-0/1-1。',
    68, 'yakin', 'savic', () => ({
      lineup: lineupFromPrediction({
        formation: '4-2-3-1 / 4-3-3',
        home: 'Kobel; Rieder, Akanji, Rodríguez; Xhaka, Freuler; Vargas, Rieder, Embolo; Duah',
        away: 'Bešić; Džeko, Bajraktarević, Tahić; Hadžiahmetović, Kršić; Mlakar, Bajić, Demirović; Burić',
        source: 'BBC / FotMob 预测 · 非官方',
      }),
      home: team('Switzerland', 'ch', 19, 78, ['D', 'W', 'W', 'D', 'W'], 'Murat Yakin', [
        { name: 'Granit Xhaka', pos: 'CM', club: 'Bayer Leverkusen', stats: '节拍器', rating: 8.2, desc: '组织+远射' },
        { name: 'Manuel Akanji', pos: 'CB', club: 'Man City', stats: '防线领袖', rating: 8.0, desc: '出球+防空' },
        { name: 'Breel Embolo', pos: 'ST', club: 'Monaco', stats: '支点', rating: 7.8, desc: '身体对抗' },
      ], { name: 'Granit Xhaka', pos: 'CM', desc: '对波黑必须取胜', rating: 8.2 },
        getTeamNews('m26', 'home').injuries, getTeamNews('m26', 'home').rumors),
      away: team('Bosnia and Herzegovina', 'ba', 72, 68, ['D', 'L', 'W', 'D', 'L'], 'Sergej Stojković', [
        { name: 'Edin Džeko', pos: 'ST', club: 'Fenerbahçe', stats: '39 岁支点', rating: 7.8, desc: '定位球+经验' },
        { name: 'Miroslav Stevanović', pos: 'RW', club: 'Servette', stats: '边路', rating: 7.0, desc: '传中威胁' },
        { name: 'Amar Hadžiahmetović', pos: 'CM', club: 'Konyaspor', stats: '屏障', rating: 6.9, desc: '中场绞杀' },
      ], { name: 'Edin Džeko', pos: 'ST', desc: '低位+定位球偷分', rating: 7.8 },
        getTeamNews('m26', 'away').injuries, getTeamNews('m26', 'away').rumors),
      h2h: { home_wins: 2, draws: 1, away_wins: 0, recent: [], note: '瑞士近年占优' },
      upset: {
        favorite: 'Switzerland', underdog: 'Bosnia and Herzegovina', favorite_iso: 'SUI',
        index: 32, level: 'MEDIUM', level_cn: '中等',
        cold_result_pct: 28,
        verdict: '瑞士组织占优但 Džeko 定位球是经典冷门路径——平局约 28%。',
        tactical: 'Yakin 4-2-3-1 控球 vs Stojković 4-5-1 低位+Džeko 支点。',
        psychology: '波黑首轮平加拿大有信心；瑞士必须取胜。',
        historical: '瑞士近年 H2H 占优。',
        factors: [
          { tag: '定位球', impact: '强', detail: 'Džeko 193cm 支点' },
          { tag: '组织', impact: '强', detail: 'Xhaka/Akanji 瑞士优势' },
          { tag: '平局', impact: '中', detail: '波黑守 0-1 可接受' },
        ],
      },
    }));
}

function buildM27() {
  return baseMatch('m27', 'B', 2, '6月19日 06:00', 'BC Place', 'Vancouver, Canada',
    'B组第2轮 · 加拿大 vs 卡塔尔 · 温哥华（东道主）', 1.62, 0.88,
    '东道主温哥华主场：Davies/David 高位压迫；卡塔尔首轮平瑞士低位韧性；泊松最可能 2-0/1-0。',
    74, 'marsch', 'sanchez', () => ({
      lineup: lineupFromPrediction({
        formation: '4-3-3 / 4-2-3-1',
        home: 'St. Clair; Johnston, Miller, Cornelius; Davies, Buchanan, Eustáquio, Laryea; David, Larin, Hoilett',
        away: 'Barsham; Pedro Miguel, Salama, Tarek; Ahmed, Boudiaf; Ali, Afif, Muntari; Almoez Ali',
        source: 'TSN / ESPN 预测 · 非官方',
      }),
      home: team('Canada', 'ca', 48, 72, ['D', 'W', 'L', 'W', 'D'], 'Jesse Marsch', [
        { name: 'Alphonso Davies', pos: 'LB', club: 'Bayern Munich', stats: '温哥华爆点', rating: 8.5, desc: '左路速度+助攻' },
        { name: 'Jonathan David', pos: 'ST', club: 'Lille', stats: '终结', rating: 8.2, desc: '跑位+射门' },
        { name: 'Stephen Eustáquio', pos: 'CM', club: 'Porto', stats: '节拍器', rating: 7.8, desc: '出球+远射' },
      ], { name: 'Alphonso Davies', pos: 'LB', desc: '东道主主场必须取胜', rating: 8.5 },
        getTeamNews('m27', 'home').injuries, getTeamNews('m27', 'home').rumors),
      away: team('Qatar', 'qa', 35, 70, ['D', 'W', 'D', 'L', 'W'], 'Félix Sánchez', [
        { name: 'Almoez Ali', pos: 'ST', club: 'Al-Duhail', stats: '亚洲杯金靴', rating: 7.6, desc: '锋线核心' },
        { name: 'Akram Afif', pos: 'LW', club: 'Al-Sadd', stats: '亚洲杯MVP', rating: 7.5, desc: '肋部+定位球' },
        { name: 'Hassan Al-Haydos', pos: 'CM', club: 'Al-Sadd', stats: '队长', rating: 7.2, desc: '远射威胁' },
      ], { name: 'Almoez Ali', pos: 'ST', desc: '低位反击发起点', rating: 7.6 },
        getTeamNews('m27', 'away').injuries, getTeamNews('m27', 'away').rumors),
      h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
      upset: {
        favorite: 'Canada', underdog: 'Qatar', favorite_iso: 'CAN',
        index: 22, level: 'LOW', level_cn: '低',
        cold_result_pct: 18,
        verdict: '东道主温哥华主场优势明显——卡塔尔 5-4-1 低位仍有 16% 平局空间。',
        tactical: 'Marsch 高位+Davies 左路 vs Sánchez 5-4-1 低位。',
        psychology: '加拿大东道主压力+必须取胜；卡塔尔首轮平瑞士有信心。',
        historical: '无大赛交锋。',
        factors: [
          { tag: '主场', impact: '强', detail: '温哥华 BC Place 东道主' },
          { tag: '高位', impact: '强', detail: 'Marsch 压迫对卡塔尔出球是考验' },
          { tag: '低位', impact: '中', detail: '卡塔尔首轮平瑞士已验证' },
        ],
      },
    }));
}

function buildM28() {
  const lineup = {
    confirmed: true,
    formation: '4-1-2-3 / 3-4-3',
    home: 'Rangel; Sánchez, Álvarez, Vásquez, Gallardo; Lira; Romo, Gutiérrez; Jiménez, Quiñones, Alvarado',
    away: 'Kim Seung-gyu; Lee Han-beom, Kim Min-jae, Kim Moon-hwan; Seol Young-woo, Hwang In-beom, Paik Seung-ho, Lee Gi-hyuk; Lee Jae-sung, Son Heung-min, Lee Kang-in',
    note: '✅ FIFA 官方 team sheet（Match 28 · 400021442）',
    source: 'FIFA Match Centre · api.fifa.com',
    diff: {
      home: '⚠️ 4-1-2-3：Sánchez 替 Reyes · Romo 替 Fidalgo · Lira 单后腰',
      away: '⚠️ 3-4-3：Kim Moon-hwan 变阵 · Lee Tae-seok 替补 · 三叉戟',
    },
    predicted: {
      formation: '4-3-3 / 3-4-2-1',
      home: 'Rangel; Reyes, Álvarez, Vásquez, Gallardo; Fidalgo, Lira, Gutiérrez; Alvarado, Jiménez, Quiñones',
      away: 'Kim Seung-gyu; Lee Han-beom, Kim Min-jae, Lee Gi-hyuk; Seol Young-woo, Hwang In-beom, Paik Seung-ho, Lee Tae-seok; Lee Jae-sung, Lee Kang-in; Son Heung-min',
      source: 'Sporting News 预测 · 已 superseded',
    },
  };

  return baseMatch('m28', 'A', 2, '6月19日 09:00', 'Estadio Akron', 'Guadalajara, Mexico',
    'A组榜首战 · 墨西哥 vs 韩国 · FIFA 官方首发已确认', 1.52, 1.32,
    'FIFA 官方：墨 4-1-2-3（Álvarez 队长/Sánchez/Romo）vs 韩 3-4-3（Moon-hwan 变阵 · 孙兴慜+李在城+李康仁）；泊松最可能 2-1/1-1。',
    68, 'aguirre', 'hong', () => ({
      lineup,
      home: team('Mexico', 'mx', 12, 80, ['W', 'W', 'W', 'D', 'W'], 'Javier Aguirre', [
        { name: 'Raúl Jiménez', pos: 'ST', club: 'Fulham', stats: '首轮双响', rating: 8.4, desc: '支点+终结' },
        { name: 'Raúl Rangel', pos: 'GK', club: 'Guadalajara', stats: '主场一门', rating: 7.6, desc: '瓜达拉哈拉预计首发' },
        { name: 'Edson Álvarez', pos: 'CB', club: 'Fenerbahçe', stats: '顶 Montes', rating: 8.0, desc: '停赛空缺中卫' },
      ], { name: 'Raúl Jiménez', pos: 'ST', desc: 'A组榜首战核心', rating: 8.4 },
        getTeamNews('m28', 'home').injuries, getTeamNews('m28', 'home').rumors),
      away: team('South Korea', 'kr', 23, 76, ['W', 'W', 'W', 'D', 'W'], 'Hong Myung-bo', [
        { name: '孙兴慜 Son Heung-min', pos: 'ST', club: 'LAFC', stats: '队长 · 7 号', rating: 8.8, desc: '3-4-3 中锋' },
        { name: '李康仁 Lee Kang-in', pos: 'RW', club: 'PSG', stats: '官方 19 号', rating: 8.4, desc: '三叉戟右翼' },
        { name: '李在城 Lee Jae-sung', pos: 'LW', club: 'Mainz', stats: '官方 10 号', rating: 8.0, desc: '三叉戟左翼' },
        { name: 'Kim Min-jae', pos: 'CB', club: 'Bayern Munich', stats: '官方 4 号', rating: 8.2, desc: '三中卫核心' },
      ], { name: '孙兴慜 Son Heung-min', pos: 'ST', desc: 'FIFA 官方 3-4-3 中锋', rating: 8.8 },
        getTeamNews('m28', 'away').injuries, getTeamNews('m28', 'away').rumors),
      h2h: { home_wins: 1, draws: 1, away_wins: 1, recent: [{ year: 2018, comp: '友谊赛', score: '0-2', winner: 'South Korea' }], note: '2018 友谊赛韩国 2-0 胜' },
      upset: {
        favorite: 'Mexico', underdog: 'South Korea', favorite_iso: 'MEX',
        index: 35, level: 'MEDIUM', level_cn: '中等',
        cold_result_pct: 30,
        verdict: 'A组榜首对话势均力敌——韩国 3-4-2-1 李在城+李康仁喂孙兴慜，平局约 28%。',
        tactical: 'Aguirre 4-3-3 主场宽度 vs 洪明甫 3-4-2-1 薛英佑/李太锡翼卫+黄仁范屏障。',
        psychology: '墨西哥主场夜场气势；韩国 2018 友谊赛 2-0 胜是心理参考。',
        historical: '2018 友谊赛韩国 2-0 胜墨西哥。',
        factors: [
          { tag: '球星', impact: '强', detail: 'Jiménez vs 孙兴慜' },
          { tag: '阵型', impact: '强', detail: '韩沿用赢捷克 3-4-2-1' },
          { tag: '主场', impact: '强', detail: '瓜达拉哈拉夜场' },
        ],
      },
    }));
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 8 完整推演 · coach/mystic/referee/weather';
MATCH_DATA.breakingNews = [
  { tag: 'PREVIEW', text: '📅 今日4场 · 捷克-南非(00:00) · 瑞士-波黑(03:00) · 加拿大-卡塔尔(06:00) · 墨西哥-韩国(09:00)', time: '6月19日' },
  { tag: 'PREVIEW', text: 'A/B组第2轮：Schick 抢分战 · 东道主温哥华 · 墨西哥 vs 孙兴慜 榜首对话', time: '焦点' },
  { tag: 'LINEUP', text: '✅ FIFA 官方首发 · 墨 4-1-2-3 Sánchez/Romo · 韩 3-4-3 Moon-hwan 变阵 孙兴慜+李在城+李康仁', time: '官方确认' },
  { tag: 'OFFICIAL', text: '🏁 昨日：葡1-1刚果(金) · 英4-2克 · 加纳1-0巴 · 乌1-3哥伦 · 详见「过往赛果」', time: '赛果回顾' },
  { tag: 'INJURY', text: 'Montes 停赛 · Quiñones 队检 · Bae/Kim Tae-hyeon 韩替补 · 孙兴慜 FIT', time: '伤情' },
  { tag: 'REFEREE', text: '✅ FIFA 确认：Penso(捷-南非) · Pinheiro(瑞-波) · Garay(加-卡) · Tejera(墨-韩)', time: '裁判' },
  { tag: 'OFFICIAL', text: 'K/L组首轮完结 · 哥伦比亚&英格兰领跑 · 今日 A/B 组第2轮', time: '积分榜' },
  { tag: 'UPDATE', text: '灵力/五行/主教练/气候板块已更新至 Day 8 完整版', time: '站点' },
];
MATCH_DATA.todayMatches = [buildM25(), buildM26(), buildM27(), buildM28()];

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 8 preview (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
);

console.log('✅ Enriched:', MATCH_DATA.todayMatches.map(m => m.id).join(', '));
console.log('✅ coach_analysis:', MATCH_DATA.todayMatches.every(m => m.coach_analysis?.home?.name));
console.log('✅ mystic:', MATCH_DATA.todayMatches.map(m => m.mystic?.hexagram?.name).join(', '));

try {
  require('child_process').execSync('node scripts/apply-prediction-signals.js', {
    cwd: ROOT,
    stdio: 'inherit',
  });
} catch (e) {
  console.warn('⚠ apply-prediction-signals skipped:', e.message);
}

try {
  require('child_process').execSync('node scripts/stamp-asset-version.js', { cwd: ROOT, stdio: 'inherit' });
} catch (e) {
  console.warn('⚠ stamp skipped:', e.message);
}
