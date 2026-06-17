/**
 * Enrich Day 7 todayMatches (m23/m22/m21/m24) — coach, mystic, weather, injuries, upset_alert
 * Run: node scripts/roll-day7.js && node scripts/enrich-day7.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { lineupFromPrediction } = require('./pending-templates');
const { buildCoachAnalysis } = require('./coach-data-day7');
const { venueWeather } = require('./venue-weather-day7');
const { getMystic } = require('./mystic-data-day7');
const { getReferee } = require('./referee-data-day7');
const { getTeamNews } = require('./injuries-rumors-day7');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const TS = '2026-06-18T10:00:00+08:00';

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
    '01:00': { time: '12:00', time_local: '12:00 CT', timezone: 'CDT (UTC-5)' },
    '04:00': { time: '16:00', time_local: '16:00 CT', timezone: 'CDT (UTC-5)' },
    '07:00': { time: '19:00', time_local: '19:00 ET', timezone: 'EDT (UTC-4)' },
    '10:00': { time: '21:00', time_local: '21:00 CT', timezone: 'CDT (UTC-5)' },
  };
  return map[tl] || { time: '12:00', time_local: '12:00 CT', timezone: 'CDT (UTC-5)' };
}

function baseMatch(id, group, beijing, venue, city, note, xgH, xgA, keyFactor, conf, homeKey, awayKey, buildTeams) {
  const [tb, tl] = beijing.split(' ');
  const local = localKickoffFromBeijing(tl);
  const teams = buildTeams();
  return {
    id,
    group,
    matchday: 1,
    date: '2026-06-17',
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

function buildM23() {
  return baseMatch('m23', 'K', '6月18日 01:00', 'NRG Stadium', 'Houston, USA',
    'K组揭幕 · 葡萄牙 vs 刚果（金） · 休斯顿', 2.15, 0.72,
    'C罗最后一届+葡萄牙深度碾压：Wissa 反击是唯一变数；xG 2.15-0.72 泊松最可能 2-0/3-0。',
    78, 'martinez', 'desabre', () => ({
      lineup: lineupFromPrediction({
        formation: '4-3-3 / 4-2-3-1',
        home: 'Costa; Dalot, Pepe, Dias, Mendes; Palhinha, Vitinha, B. Fernandes; Leão, Ronaldo, Félix',
        away: 'Mandjeck; Mpeko, Mukau, Luyindama; Mbemba, Mputu; Bakambu, Bompunga, Mabi; Wissa',
        source: 'ESPN / Record 预测 · 非官方',
      }),
      home: team('Portugal', 'pt', 6, 89, ['W', 'W', 'W', 'W', 'D'], 'Roberto Martínez', [
        { name: 'Cristiano Ronaldo', pos: 'ST', club: 'Al-Nassr', stats: '最后一届世界杯', rating: 8.8, desc: 'K组核心，定位球+肋部' },
        { name: 'Bruno Fernandes', pos: 'CAM', club: 'Man Utd', stats: 'B费 节拍器', rating: 8.6, desc: '直塞+远射，破局关键' },
        { name: 'Rafael Leão', pos: 'LW', club: 'AC Milan', stats: '意甲最佳', rating: 8.5, desc: '左翼速度+内切' },
      ], { name: 'Cristiano Ronaldo', pos: 'ST', desc: '最后一届，K组必须开门红', rating: 8.8 },
        getTeamNews('m23', 'home').injuries, getTeamNews('m23', 'home').rumors),
      away: team('Congo DR', 'cd', 61, 63, ['W', 'L', 'W', 'D', 'W'], 'Sébastien Desabre', [
        { name: 'Yoane Wissa', pos: 'ST', club: 'Brentford', stats: '英超射手', rating: 7.6, desc: '锋线唯一世界级威胁' },
        { name: 'Chancel Mbemba', pos: 'CB', club: 'Marseille', stats: '防线领袖', rating: 7.2, desc: '低位防守核心' },
        { name: 'Cédric Bakambu', pos: 'ST', club: 'Betis', stats: '经验前锋', rating: 7.0, desc: '替补奇兵' },
      ], { name: 'Yoane Wissa', pos: 'ST', desc: '反击发起点，对位 Dias 是冷门关键', rating: 7.6 },
        getTeamNews('m23', 'away').injuries, getTeamNews('m23', 'away').rumors),
      h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
      upset: {
        favorite: 'Portugal', underdog: 'Congo DR', favorite_iso: 'PT',
        index: 22, level: 'LOW', level_cn: '低',
        cold_result_pct: 16,
        verdict: '葡萄牙四场中爆冷风险最低——但 Wissa 英超射手反击有 12% 平局空间。',
        tactical: 'Desabre 4-5-1 低位 + Wissa 反击；Martínez 4-3-3 控球，C罗 肋部 vs Mbemba 是核心对位。',
        psychology: '葡萄牙大赛底蕴深厚；刚果金 2019 非洲杯季军有大赛经验。',
        historical: '无正式交锋；Wissa 英超状态是参考。',
        factors: [
          { tag: '实力差', impact: '强', detail: 'xG 差 1.4+，C罗/B费 决定比分' },
          { tag: '反击', impact: '中', detail: 'Wissa 速度是刚果金唯一威胁' },
          { tag: '深度', impact: '强', detail: '葡萄牙替补深度碾压' },
        ],
      },
    }));
}

function buildM22() {
  return baseMatch('m22', 'L', '6月18日 04:00', 'AT&T Stadium', 'Arlington, USA',
    'L组揭幕 · 英格兰 vs 克罗地亚 · 达拉斯', 1.62, 1.18,
    '2018 半决赛重演：Bellingham/Kane vs Modrić/Gvardiol；英格兰 xG 略优但克罗地亚大赛慢热后段强；泊松最可能 2-1/1-1。',
    70, 'tuchel', 'dalic', () => ({
      lineup: lineupFromPrediction({
        formation: '4-2-3-1 / 4-3-3',
        home: 'Pickford; Walker, Stones, Guehi, Shaw; Rice, Bellingham; Saka, Foden, B. White; Kane',
        away: 'Livaković; Juranović, Gvardiol, Šutalo, Sosa; Modrić, Brozović; Kovačić, Perišić, Rebić; Kramarić',
        source: 'BBC / SportsMole 预测 · 非官方',
      }),
      home: team('England', 'gb-eng', 9, 87, ['W', 'W', 'W', 'D', 'W'], 'Thomas Tuchel', [
        { name: 'Jude Bellingham', pos: 'CM', club: 'Real Madrid', stats: 'L组核心', rating: 9.0, desc: '中场引擎，伪 10/8 双栖' },
        { name: 'Harry Kane', pos: 'ST', club: 'Bayern Munich', stats: '队长 · 英超金靴', rating: 8.8, desc: '支点+终结，破局关键' },
        { name: 'Bukayo Saka', pos: 'RW', club: 'Arsenal', stats: '英超最佳', rating: 8.7, desc: '右翼宽度+内切' },
      ], { name: 'Jude Bellingham', pos: 'CM', desc: '对位 Modrić 老化中场是破局点', rating: 9.0 },
        getTeamNews('m22', 'home').injuries, getTeamNews('m22', 'home').rumors),
      away: team('Croatia', 'hr', 10, 81, ['W', 'D', 'W', 'D', 'W'], 'Zlatko Dalić', [
        { name: 'Luka Modrić', pos: 'CM', club: 'Real Madrid', stats: '最后一届世界杯', rating: 8.4, desc: '节拍器+直塞，大赛经验' },
        { name: 'Joško Gvardiol', pos: 'CB', club: 'Man City', stats: '防线新核', rating: 8.5, desc: '出球+防空，对位 Kane' },
        { name: 'Ivan Perišić', pos: 'LW', club: 'PSV', stats: '大赛老将', rating: 8.0, desc: '左路宽度+传中' },
      ], { name: 'Luka Modrić', pos: 'CM', desc: '2018 胜英格兰是心理资产', rating: 8.4 },
        getTeamNews('m22', 'away').injuries, getTeamNews('m22', 'away').rumors),
      h2h: { home_wins: 1, draws: 2, away_wins: 1, recent: [{ year: 2018, comp: '世界杯半决赛', score: '2-1', winner: 'Croatia' }], note: '2018 半决赛克罗地亚胜 · 大赛老对手' },
      upset: {
        favorite: 'England', underdog: 'Croatia', favorite_iso: 'ENG',
        index: 38, level: 'MEDIUM', level_cn: '中等',
        cold_result_pct: 32,
        verdict: '2018 半决赛克罗地亚胜英格兰——Modrić 大赛慢热后段强，平局有 28% 空间。',
        tactical: 'Dalić 4-3-3 控球 + Modrić 直塞；Tuchel 4-2-3-1 高位，Bellingham 对位 Modrić 是核心对位。',
        psychology: '英格兰大赛心理仍是变量；克罗地亚 2018/2022 连续前三心理硬度已验证。',
        historical: '2018 半决赛克罗地亚 2-1 胜；2020 欧洲杯 1-0 英格兰胜。',
        factors: [
          { tag: '历史', impact: '强', detail: '2018 半决赛克罗地亚胜是心理资产' },
          { tag: '中场', impact: '强', detail: 'Modrić vs Bellingham 决定节奏' },
          { tag: '心理', impact: '中', detail: '英格兰大赛压力 vs 克罗地亚大赛 DNA' },
        ],
      },
    }));
}

function buildM21() {
  return baseMatch('m21', 'L', '6月18日 07:00', 'BMO Field', 'Toronto, Canada',
    'L组第2场 · 加纳 vs 巴拿马 · 多伦多', 1.55, 0.82,
    'Kudus/Partey 对位巴拿马 MLS 班底：加纳 xG 1.55 占优但大赛慢热有前例；泊松最可能 2-0/1-0。',
    72, 'addo', 'christiansen', () => ({
      lineup: lineupFromPrediction({
        formation: '4-2-3-1 / 4-4-2',
        home: 'Ati-Zigi; Lamptey, Amartey, Djiku, Baba; Partey, S. Ayew; Kudus, Paintsil, J. Ayew; Semenyo',
        away: 'Mosquera; Murillo, Escobar, Cummings; Anderson, Godoy; Fajardo, Bárcenas, Rodríguez; Ismael Díaz',
        source: 'FotMob 预测 · 非官方',
      }),
      home: team('Ghana', 'gh', 60, 65, ['D', 'W', 'W', 'D', 'L'], 'Otto Addo', [
        { name: 'Mohammed Kudus', pos: 'RW', club: 'West Ham', stats: '英超最佳候选', rating: 8.2, desc: '边路爆点，L组关键' },
        { name: 'Thomas Partey', pos: 'DM', club: 'Arsenal', stats: '中场屏障', rating: 8.0, desc: '绞杀+出球，Rice 级对手' },
        { name: 'Antoine Semenyo', pos: 'ST', club: 'Bournemouth', stats: '英超射手', rating: 7.8, desc: '支点+跑位' },
      ], { name: 'Mohammed Kudus', pos: 'RW', desc: '对位巴拿马 MLS 班底是碾压局', rating: 8.2 },
        getTeamNews('m21', 'home').injuries, getTeamNews('m21', 'home').rumors),
      away: team('Panama', 'pa', 75, 58, ['W', 'D', 'L', 'L', 'W'], 'Thomas Christiansen', [
        { name: 'José Fajardo', pos: 'ST', club: 'Plaza Amador', stats: '锋线支点', rating: 7.0, desc: '定位球威胁' },
        { name: 'Adalberto Carrasquilla', pos: 'CM', club: 'Houston Dynamo', stats: 'MLS 核心', rating: 6.9, desc: '中场节拍' },
        { name: 'Michael Murillo', pos: 'RB', club: 'Marseille', stats: '边路速度', rating: 6.8, desc: '反击宽度' },
      ], { name: 'José Fajardo', pos: 'ST', desc: '定位球是唯一稳定威胁', rating: 7.0 },
        getTeamNews('m21', 'away').injuries, getTeamNews('m21', 'away').rumors),
      h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
      upset: {
        favorite: 'Ghana', underdog: 'Panama', favorite_iso: 'GH',
        index: 24, level: 'LOW', level_cn: '低',
        cold_result_pct: 22,
        verdict: '加纳纸面占优但大赛慢热有前例——巴拿马 MLS 班底+定位球偷分仍有 18% 平局空间。',
        tactical: 'Christiansen 4-4-2 低位 vs Addo 4-2-3-1 宽度；Kudus 对位 Murillo 边路是胜负手。',
        psychology: '加纳 2022 世界杯出局后重建；巴拿马无包袱但硬实力差距大。',
        historical: '无正式交锋；Kudus 英超状态是参考。',
        factors: [
          { tag: '实力差', impact: '强', detail: 'xG 差 0.7+，Kudus 终结效率决定比分' },
          { tag: '定位球', impact: '中', detail: 'Fajardo 头球 vs 加纳防空' },
          { tag: '慢热', impact: '中', detail: '加纳大赛慢热需防冷' },
        ],
      },
    }));
}

function buildM24() {
  return baseMatch('m24', 'K', '6月18日 10:00', 'Estadio Azteca', 'Mexico City, Mexico',
    'K组第2场 · 乌兹别克 vs 哥伦比亚 · 墨西哥城', 0.88, 1.78,
    'Díaz/James 对位乌兹别克低位：哥伦比亚 xG 1.78 明显占优；海拔 2240m 略利主队适应；泊松最可能 0-2/1-2。',
    76, 'katanec', 'lorenzo', () => ({
      lineup: lineupFromPrediction({
        formation: '4-2-3-1 / 4-2-3-1',
        home: 'Nafalov; Khusanov, Ismailov, Alikulov; Shomurodov, Masharipov; Abdullaev, Hamrobekov; Turgunboev, Odilov; Abdullaev',
        away: 'Mármol; Muñoz, Sánchez, Lucumí; Lerma, Ríos; Cuadrado, James, Arias; Borré, Díaz',
        source: 'Opta / ESPN 预测 · 非官方',
      }),
      home: team('Uzbekistan', 'uz', 65, 62, ['W', 'D', 'L', 'W', 'W'], 'Srečko Katanec', [
        { name: 'Eldor Shomurodov', pos: 'ST', club: 'Roma', stats: '意甲射手', rating: 7.8, desc: '锋线核心，反击发起点' },
        { name: 'Abdulla Abdullaev', pos: 'CM', club: 'Pakhtakor', stats: '10 号核心', rating: 7.0, desc: '节拍器+远射' },
        { name: 'Utkirbek Boltaev', pos: 'GK', club: 'Pakhtakor', stats: '一门', rating: 6.8, desc: '面对 Díaz 考验极大' },
      ], { name: 'Eldor Shomurodov', pos: 'ST', desc: 'Azteca 高原+反击是唯一希望', rating: 7.8 },
        getTeamNews('m24', 'home').injuries, getTeamNews('m24', 'home').rumors),
      away: team('Colombia', 'co', 27, 75, ['W', 'D', 'W', 'W', 'W'], 'Néstor Lorenzo', [
        { name: 'Luis Díaz', pos: 'LW', club: 'Liverpool', stats: '英超最佳候选', rating: 8.6, desc: '边路速度+内切，K组最大威胁' },
        { name: 'James Rodríguez', pos: 'CAM', club: 'León', stats: '节拍器+远射', rating: 8.2, desc: '直塞+定位球破局' },
        { name: 'Jefferson Lerma', pos: 'DM', club: 'Crystal Palace', stats: '绞杀+出球', rating: 7.8, desc: '中场屏障' },
      ], { name: 'Luis Díaz', pos: 'LW', desc: '对位乌兹别克防线是碾压局', rating: 8.6 },
        getTeamNews('m24', 'away').injuries, getTeamNews('m24', 'away').rumors),
      h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
      upset: {
        favorite: 'Colombia', underdog: 'Uzbekistan', favorite_iso: 'CO',
        index: 20, level: 'LOW', level_cn: '低',
        cold_result_pct: 18,
        verdict: '哥伦比亚纸面碾压，但 Azteca 2240m 高原+乌兹别克低位——Shomurodov 反击有 14% 平局空间。',
        tactical: 'Katanec 4-2-3-1 低位 vs Lorenzo 4-2-3-1 宽度；Díaz 对位 Alikulov 中卫是胜负手。',
        psychology: '哥伦比亚 2024 美洲杯亚军信心；乌兹别克亚洲杯四强+高原适应是隐性优势。',
        historical: '无正式交锋；Díaz 利物浦状态是参考。',
        factors: [
          { tag: '实力差', impact: '强', detail: 'xG 差 0.9+，Díaz 终结效率决定比分' },
          { tag: '高原', impact: '中', detail: '2240m 海拔略利主队，哥伦比亚后段体能是变量' },
          { tag: '反击', impact: '中', detail: 'Shomurodov 速度是乌兹别克唯一威胁' },
        ],
      },
    }));
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 7 完整推演 · coach/mystic/referee/weather';
MATCH_DATA.breakingNews = [
  { tag: 'PREVIEW', text: '📅 今日4场 · 葡萄牙-刚果(金)(01:00) · 英格兰-克罗地亚(04:00) · 加纳-巴拿马(07:00) · 乌兹别克-哥伦比亚(10:00)', time: '6月18日' },
  { tag: 'PREVIEW', text: 'K/L组揭幕：C罗最后一届 · 2018 半决赛重演 · Kudus vs 巴拿马 · Díaz 高原夜战', time: '焦点' },
  { tag: 'OFFICIAL', text: '🏁 昨日：法3-1塞 · 伊1-4挪 · 阿3-0阿 · 奥3-1约 · Messi 帽子戏法 · 详见「过往赛果」', time: '赛果回顾' },
  { tag: 'INJURY', text: 'C罗/Kane/Díaz 均 FIT · Stones 队检 · Carrasquilla 疑云', time: '伤情' },
  { tag: 'REFEREE', text: '✅ FIFA 确认：Al-Jassim(葡-刚) · Turpin(英-克) · Nyberg(加-巴) · Taylor(乌-哥)', time: '裁判' },
  { tag: 'OFFICIAL', text: 'I/J组首轮完结 · 挪威&阿根廷净胜球领跑 · 今日 K/L 组开战', time: '积分榜' },
  { tag: 'UPDATE', text: '灵力/五行/主教练/气候板块已更新至 Day 7 完整版', time: '站点' },
];
MATCH_DATA.todayMatches = [buildM23(), buildM22(), buildM21(), buildM24()];

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 7 preview (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`,
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
