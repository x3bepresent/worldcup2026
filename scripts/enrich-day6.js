/**
 * Enrich Day 6 todayMatches (m17–m20) — coach, mystic, weather, injuries, upset_alert
 * Run: node scripts/enrich-day6.js
 */
const fs = require('fs');
const path = require('path');
const { computeScoreDistribution, computeOutcomeFromXg } = require('./score-model');
const { lineupFromPrediction, lineupConfirmed } = require('./pending-templates');
const { buildCoachAnalysis } = require('./coach-data-day6');
const { venueWeather } = require('./venue-weather-day6');
const { getMystic } = require('./mystic-data-day6');
const { getReferee } = require('./referee-data-day6');
const { getTeamNews } = require('./injuries-rumors-day6');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const TS = '2026-06-17T18:00:00+08:00';

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

function upsetAlert(data) {
  return data;
}

function localKickoffFromBeijing(tl) {
  const map = {
    '03:00': { time: '15:00', time_local: '15:00 ET', timezone: 'EDT (UTC-4)' },
    '06:00': { time: '18:00', time_local: '18:00 ET', timezone: 'EDT (UTC-4)' },
    '09:00': { time: '20:00', time_local: '20:00 CT', timezone: 'CDT (UTC-5)' },
    '12:00': { time: '21:00', time_local: '21:00 PT', timezone: 'PDT (UTC-7)' },
  };
  return map[tl] || { time: '15:00', time_local: '15:00 ET', timezone: 'EDT (UTC-4)' };
}

function baseMatch(id, group, beijing, venue, city, note, xgH, xgA, keyFactor, conf, homeKey, awayKey, buildTeams) {
  const [tb, tl] = beijing.split(' ');
  const local = localKickoffFromBeijing(tl);
  const teams = buildTeams();
  return {
    id,
    group,
    matchday: 1,
    date: '2026-06-16',
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

function buildM17() {
  return baseMatch('m17', 'I', '6月17日 03:00', 'MetLife Stadium', 'East Rutherford, USA',
    'I组揭幕 · 法国 vs 塞内加尔 · 纽约/新泽西', 2.3, 0.9,
    'I组焦点：Mbappé vs Mané，法国深度碾压但塞内加尔 2021 非洲杯冠军身体+转换是冷门点；xG 2.3-0.9 泊松最可能 2-0。',
    68, 'deschamps', 'cisse', () => ({
      lineup: lineupConfirmed({
        formation: '4-2-3-1 / 4-3-3',
        home: 'Maignan; Koundé, Saliba, Upamecano, Hernandez; Tchouaméni, Rabiot; Olise, Dembélé, Doué; Mbappé',
        away: 'Mendy; Diatta, Niakhate, Koulibaly, Diouf; Pape Gueye, Gana Gueye, Camara; Mané, Jackson, Sarr',
        note: '✅ 官方首发已确认（The Standard / BBC · 2026-06-16 赛前）',
        source: 'FIFA team sheet · The Standard',
        diff: {
          home: '4-2-3-1：Rabiot+Tchouaméni · Olise/Dembélé/Doué 支援 Mbappé · Kanté/Thuram 替补',
          away: 'Mendy 一门 · Niakhate 中卫 · Gana Gueye 腰 · Ismaila Sarr 右翼',
        },
        predictedFallback: {
          formation: '4-3-3 / 4-3-3',
          home: 'Maignan; Koundé, Saliba, Upamecano, Hernandez; Tchouaméni, Kanté, Camavinga; Dembélé, Mbappé, Thuram',
          away: 'Diouf; Sabaly, Koulibaly, Diallo, Mendy; Gueye, Ndiaye; Mané, Jackson, Sarr',
          source: 'ESPN / L\'Équipe 旧预测',
        },
      }),
      home: team('France', 'fr', 3, 91, ['W', 'W', 'W', 'D', 'W'], 'Didier Deschamps', [
        { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', stats: '队长 · 单锋', rating: 9.2, desc: 'I组揭幕核心，对位 Koulibaly/Niakhate' },
        { name: 'Michael Olise', pos: 'RW', club: 'Bayern Munich', stats: '热身赛戴帽', rating: 8.7, desc: '右翼首发，内切+传中破局点' },
        { name: 'William Saliba', pos: 'CB', club: 'Arsenal', stats: '背部伤愈复出', rating: 8.8, desc: '与 Upamecano 中卫搭档已确认' },
      ], { name: 'Kylian Mbappé', pos: 'ST', desc: '对位 Koulibaly 速度是破局点', rating: 9.2 },
        getTeamNews('m17', 'home').injuries, getTeamNews('m17', 'home').rumors),
      away: team('Senegal', 'sn', 20, 77, ['W', 'D', 'W', 'W', 'D'], 'Aliou Cissé', [
        { name: 'Sadio Mané', pos: 'LW', club: 'Al-Nassr', stats: '队长 · 左翼', rating: 8.5, desc: '反击发起点，对位 Koundé 是冷门关键' },
        { name: 'Kalidou Koulibaly', pos: 'CB', club: 'Al-Hilal', stats: '队长 · 100+ caps', rating: 8.0, desc: '低位防守领袖，防空 Mbappé' },
        { name: 'Ismaila Sarr', pos: 'RW', club: 'Crystal Palace', stats: '官方首发右翼', rating: 7.9, desc: '对位 Hernandez，转换速度点' },
      ], { name: 'Sadio Mané', pos: 'LW', desc: '一人球队核心，反击是唯一变数', rating: 8.5 },
        getTeamNews('m17', 'away').injuries, getTeamNews('m17', 'away').rumors),
      h2h: { home_wins: 2, draws: 0, away_wins: 0, recent: [{ year: 2022, comp: '友谊赛', score: '5-1', winner: 'France' }], note: '法国历史占优' },
      upset: upsetAlert({
        favorite: 'France', underdog: 'Senegal', favorite_iso: 'FR',
        index: 32, level: 'MEDIUM', level_cn: '中等',
        cold_result_pct: 38,
        verdict: '塞内加尔 2021 非洲杯冠军有爆冷 DNA——Mané/Jackson 速度对位法国压上身后，平局有 24% 空间。',
        tactical: 'Cissé 4-3-3 低位 + 转换；Deschamps 4-3-3 控球，Mbappé 肋部 vs Koulibaly 是核心对位。',
        psychology: '法国大赛底蕴深厚；塞内加尔 2022 世界杯出局后重建，Mané 大赛经验是资产。',
        historical: '2022 友谊赛法国 5-1；但 2002 塞内加尔曾爆冷法国（非本届阵容）。',
        factors: [
          { tag: '核心球员', impact: '强', detail: 'Mbappé vs Mané 决定上限' },
          { tag: '转换', impact: '中', detail: '塞内加尔 Jackson 速度是法国压上后的威胁' },
          { tag: '深度', impact: '强', detail: '法国替补深度碾压，60\' 后差距扩大' },
        ],
      }),
    }));
}

function buildM18() {
  return baseMatch('m18', 'I', '6月17日 06:00', 'Gillette Stadium', 'Foxborough, USA',
    'I组第2场 · 伊拉克 vs 挪威 · 波士顿', 0.82, 1.72,
    'Haaland+Ødegaard 对位伊拉克低位：挪威 xG 1.72 明显占优；伊拉克守 0-0 求 1 分；泊松最可能 0-2/1-2。',
    76, 'casas', 'solbakken', () => ({
      lineup: lineupFromPrediction({
        formation: '4-2-3-1 / 4-3-3',
        home: 'Hassan; Adnan, Tareq, Natiq, Ali; Alaa, Bashar; Aymen, Zidane, Mohanad; Hussein',
        away: 'Nyland; Ryerson, Høibråten, Nørgaard, Wolfe; Berg, Ødegaard; Dønnum, Haaland, Sørloth',
        source: 'FotMob 预测 · 非官方',
      }),
      home: team('Iraq', 'iq', 78, 56, ['L', 'D', 'W', 'L', 'L'], 'Jesús Casas', [
        { name: 'Aymen Hussein', pos: 'ST', club: 'Al-Quwa Al-Jawiya', stats: '亚洲杯最佳射手候选', rating: 7.0, desc: '锋线支点，定位球威胁' },
        { name: 'Mohanad Ali', pos: 'CAM', club: 'Al-Shorta', stats: '10 号核心', rating: 6.9, desc: '反击发起点' },
        { name: 'Hassan Raed', pos: 'GK', club: 'Al-Shorta', stats: '一门', rating: 6.8, desc: '面对 Haaland 考验极大' },
      ], { name: 'Aymen Hussein', pos: 'ST', desc: '定位球是唯一稳定威胁', rating: 7.0 },
        getTeamNews('m18', 'home').injuries, getTeamNews('m18', 'home').rumors),
      away: team('Norway', 'no', 26, 76, ['W', 'W', 'D', 'W', 'D'], 'Ståle Solbakken', [
        { name: 'Erling Haaland', pos: 'ST', club: 'Man City', stats: '英超金靴', rating: 9.0, desc: 'I组最大个人威胁' },
        { name: 'Martin Ødegaard', pos: 'CAM', club: 'Arsenal', stats: '队长 · 节拍器', rating: 8.6, desc: '直塞+远射，破局关键' },
        { name: 'Alexander Sørloth', pos: 'ST', club: 'Atlético', stats: '支点中锋', rating: 8.0, desc: '与 Haaland 双锋或轮换' },
      ], { name: 'Erling Haaland', pos: 'ST', desc: '对位伊拉克英冠级防线是碾压局', rating: 9.0 },
        getTeamNews('m18', 'away').injuries, getTeamNews('m18', 'away').rumors),
      h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式大赛交锋' },
      upset: upsetAlert({
        favorite: 'Norway', underdog: 'Iraq', favorite_iso: 'NO',
        index: 18, level: 'LOW', level_cn: '低',
        cold_result_pct: 20,
        verdict: '挪威纸面碾压，但大赛慢热有前例——伊拉克 4-5-1 低位+定位球偷分仍有 15% 空间。',
        tactical: 'Casas 低位 vs Solbakken 4-3-3 宽度；Haaland 对位 Tareq/Natiq 中卫是胜负手。',
        psychology: '挪威 28 年后再进世界杯，首战需取 3 分；伊拉克无包袱但硬实力差距大。',
        historical: '无正式交锋；挪威预选赛 Haaland 火力是参考。',
        factors: [
          { tag: '实力差', impact: '强', detail: 'xG 差 0.9+，Haaland 终结效率决定比分' },
          { tag: '定位球', impact: '中', detail: '伊拉克 Hussein 头球 vs 挪威防空' },
          { tag: '心理', impact: '弱', detail: '挪威首战容错高' },
        ],
      }),
    }));
}

function buildM19() {
  return baseMatch('m19', 'J', '6月17日 09:00', 'Arrowhead Stadium', 'Kansas City, USA',
    'J组揭幕 · 阿根廷 vs 阿尔及利亚 · 堪萨斯城', 2.8, 0.6,
    '卫冕冠军 vs 非洲劲旅：Messi/Lautaro 对位 Belmadi 低位，Mahrez 反击是唯一变数；xG 2.8-0.6 泊松最可能 3-0/2-0。',
    82, 'scaloni', 'belmadi', () => ({
      lineup: lineupFromPrediction({
        formation: '4-3-3 / 4-2-3-1',
        home: 'Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Lautaro, Garnacho',
        away: 'Mandrea; Atal, Mandi, Belkacemi; Benrahma, Aouar, Bentaleb; Mahrez, Bounedjah, Boussoufa',
        source: 'ESPN / TyC 预测 · 非官方',
      }),
      home: team('Argentina', 'ar', 1, 94, ['W', 'W', 'W', 'W', 'D'], 'Lionel Scaloni', [
        { name: 'Lionel Messi', pos: 'RW', club: 'Inter Miami', stats: '最后一届世界杯', rating: 9.3, desc: 'J组核心，定位球+肋部' },
        { name: 'Lautaro Martínez', pos: 'ST', club: 'Inter Milan', stats: '意甲金靴', rating: 8.8, desc: '支点+跑位，破局关键' },
        { name: 'Enzo Fernández', pos: 'CM', club: 'Chelsea', stats: '世界杯最佳年轻球员', rating: 8.6, desc: '节拍器+远射' },
      ], { name: 'Lionel Messi', pos: 'RW', desc: '最后一届，J组必须开门红', rating: 9.3 },
        getTeamNews('m19', 'home').injuries, getTeamNews('m19', 'home').rumors),
      away: team('Algeria', 'dz', 46, 67, ['W', 'W', 'D', 'L', 'W'], 'Djamel Belmadi', [
        { name: 'Riyad Mahrez', pos: 'RW', club: 'Al-Ahli', stats: '2019 非洲杯冠军核心', rating: 8.0, desc: '左路唯一世界级爆点' },
        { name: 'Ismaël Bennacer', pos: 'CM', club: 'AC Milan', stats: '绞杀+出球', rating: 7.8, desc: '中场屏障，限制 Enzo' },
        { name: 'Youcef Atal', pos: 'RB', club: 'Al-Sadd', stats: '边路速度', rating: 7.5, desc: '反击宽度' },
      ], { name: 'Riyad Mahrez', pos: 'RW', desc: '反击发起点，对位 Tagliafico 是冷门关键', rating: 8.0 },
        getTeamNews('m19', 'away').injuries, getTeamNews('m19', 'away').rumors),
      h2h: { home_wins: 1, draws: 0, away_wins: 0, recent: [{ year: 2014, comp: '友谊赛', score: '4-2', winner: 'Argentina' }], note: '阿根廷历史占优' },
      upset: upsetAlert({
        favorite: 'Argentina', underdog: 'Algeria', favorite_iso: 'AR',
        index: 22, level: 'LOW', level_cn: '低',
        cold_result_pct: 18,
        verdict: '阿根廷四场中爆冷风险较低——但 2014 阿尔及利亚曾逼德国加时，Mahrez 反击有 14% 平局空间。',
        tactical: 'Belmadi 4-2-3-1 低位 + Mahrez 反击；Scaloni 4-3-3 控球，Lautaro 对位 Mandi 是核心对位。',
        psychology: '阿根廷卫冕冠军心理硬度已验证；阿尔及利亚 2019 非洲杯冠军有大赛经验。',
        historical: '2014 友谊赛阿根廷 4-2；2014 世界杯阿尔及利亚 1-1 德国（参考）。',
        factors: [
          { tag: '实力差', impact: '强', detail: 'xG 2.8-0.6 碾压，Messi/Lautaro 决定比分' },
          { tag: '反击', impact: '中', detail: 'Mahrez 速度是阿尔及利亚唯一威胁' },
          { tag: '深度', impact: '强', detail: '阿根廷替补深度仍足' },
        ],
      }),
    }));
}

function buildM20() {
  return baseMatch('m20', 'J', '6月17日 12:00', "Levi's Stadium", 'Santa Clara, USA',
    'J组第2场 · 奥地利 vs 约旦 · 旧金山湾区', 1.65, 0.75,
    'Rangnick 高位压迫 vs Ammouta 低位：Alaba/Arnautović 对位 Jordan 防线；xG 1.65-0.75 泊松最可能 2-0/1-0。',
    74, 'rangnick', 'ammouta', () => ({
      lineup: lineupFromPrediction({
        formation: '4-2-3-1 / 4-4-2',
        home: 'Pentz; Posch, Alaba, Lienhart, Mwene; Seiwald, Schlager; Baumgartner, Sabitzer, Grüll; Arnautović',
        away: 'Abu Laila; Al-Rosan, Al-Ajalin, Al-Damour; Al-Naimat, Al-Rawashdeh, Al-Tamari; Al-Malki, Al-Rashdan; Al-Dardour',
        source: 'Opta / FotMob 预测 · 非官方',
      }),
      home: team('Austria', 'at', 28, 74, ['W', 'D', 'W', 'W', 'D'], 'Ralf Rangnick', [
        { name: 'David Alaba', pos: 'CB', club: 'Real Madrid', stats: '队长 · 防线领袖', rating: 8.5, desc: '出球+防空核心' },
        { name: 'Marcel Sabitzer', pos: 'CM', club: 'Dortmund', stats: '中场引擎', rating: 8.0, desc: '覆盖+远射，Rangnick 体系关键' },
        { name: 'Marko Arnautović', pos: 'ST', club: 'Red Star', stats: '经验支点', rating: 7.8, desc: '背身+定位球破局' },
      ], { name: 'David Alaba', pos: 'CB', desc: 'Rangnick 高位线出球发起点', rating: 8.5 },
        getTeamNews('m20', 'home').injuries, getTeamNews('m20', 'home').rumors),
      away: team('Jordan', 'jo', 72, 57, ['D', 'W', 'D', 'L', 'D'], 'Hussein Ammouta', [
        { name: 'Musa Al-Tamari', pos: 'RW', club: 'Montpellier', stats: '亚洲杯最佳球员', rating: 7.8, desc: '反击速度点，对位 Posch' },
        { name: 'Yazan Al-Naimat', pos: 'ST', club: 'Al-Arabi', stats: '亚洲杯决赛进球', rating: 7.2, desc: '支点+定位球' },
        { name: 'Hussein Abu Laila', pos: 'GK', club: 'Al-Wehdat', stats: '一门', rating: 6.9, desc: '面对 Rangnick 压迫考验大' },
      ], { name: 'Musa Al-Tamari', pos: 'RW', desc: '一人球队核心，反击是唯一希望', rating: 7.8 },
        getTeamNews('m20', 'away').injuries, getTeamNews('m20', 'away').rumors),
      h2h: { home_wins: 0, draws: 0, away_wins: 0, recent: [], note: '无正式交锋' },
      upset: upsetAlert({
        favorite: 'Austria', underdog: 'Jordan', favorite_iso: 'AT',
        index: 28, level: 'LOW', level_cn: '低',
        cold_result_pct: 24,
        verdict: '奥地利纸面占优但 Rangnick 压迫易留身后——Al-Tamari 速度+定位球有 22% 平局空间。',
        tactical: 'Rangnick 4-2-3-1 高位 vs Ammouta 4-4-2 低位；Alaba 出球 vs Al-Tamari 反击是核心对位。',
        psychology: '约旦亚洲杯亚军有大赛信心；奥地利需 J 组开门红。',
        historical: '无正式交锋；约旦亚洲杯表现是参考。',
        factors: [
          { tag: '压迫', impact: '强', detail: 'Rangnick 高位强度大，Jordan 出球困难' },
          { tag: '反击', impact: '中', detail: 'Al-Tamari 速度是约旦唯一威胁' },
          { tag: '定位球', impact: '中', detail: 'Arnautović 头球 vs 约旦防空' },
        ],
      }),
    }));
}

const MATCH_DATA = loadData(MATCH_PATH, 'MATCH_DATA');
MATCH_DATA.lastUpdated = TS;
MATCH_DATA.syncSource = 'FIFA 赛程 · Day 6 完整推演 · coach/mystic/referee/weather';
MATCH_DATA.breakingNews = [
  { tag: 'LINEUP', text: '✅ 官方首发 · 法国 v 塞内加尔：Mbappé + Olise/Dembélé/Doué · Rabiot/Tchouaméni · Mendy; Gana Gueye; Ismaila Sarr', time: '官方确认' },
  { tag: 'PREVIEW', text: '📅 今日4场 · 法国-塞内加尔(03:00) · 伊拉克-挪威(06:00) · 阿根廷-阿尔及利亚(09:00) · 奥地利-约旦(12:00)', time: '6月17日' },
  { tag: 'PREVIEW', text: 'I/J组揭幕：Mbappé vs Mané · Haaland · Messi 最后一届 · Rangnick 压迫', time: '焦点' },
  { tag: 'OFFICIAL', text: '🏁 昨日四场全平 · G/H组均1分 · 详见「过往赛果」', time: '赛果回顾' },
  { tag: 'INJURY', text: 'Messi 负荷管理 · Haaland 肩伤疑云 · Alaba 复出 · Mané 状态正佳', time: '伤情' },
  { tag: 'REFEREE', text: '✅ FIFA 确认：Faghani(法-塞) · Atcho(伊-挪) · Marciniak(阿-阿) · Beida(奥-约)', time: '裁判' },
  { tag: 'UPDATE', text: '灵力/五行/主教练/气候板块已更新至 Day 6 完整版', time: '站点' },
];
MATCH_DATA.todayMatches = [buildM17(), buildM18(), buildM19(), buildM20()];

fs.writeFileSync(
  MATCH_PATH,
  `// 今日赛事 — Day 6 preview (enriched)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};\n`
);

console.log('✅ Enriched:', MATCH_DATA.todayMatches.map(m => m.id).join(', '));
console.log('✅ coach_analysis:', MATCH_DATA.todayMatches.every(m => m.coach_analysis?.home?.name));
console.log('✅ mystic:', MATCH_DATA.todayMatches.map(m => m.mystic?.hexagram?.name).join(', '));

// 深度校准 + 小组形势（依赖 results-data 积分榜）
try {
  require('child_process').execSync('node scripts/apply-prediction-signals.js', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
  });
} catch (e) {
  console.warn('⚠ apply-prediction-signals skipped:', e.message);
}

try {
  require('child_process').execSync('node scripts/stamp-asset-version.js', {
    cwd: ROOT,
    stdio: 'inherit',
  });
} catch (e) {
  console.warn('⚠ stamp-asset-version skipped:', e.message);
}
