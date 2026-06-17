/**
 * Day 6 lineup sync — m18–m20 (post-match confirmed XIs)
 * Sources: Yahoo Sports / Mixvale / SportsGambler / BBC / FotMob
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const TS = '2026-06-17T23:45:00+08:00';

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 6 (results + lineups synced)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
  );
}

const LINEUPS = {
  m18: {
    formation: '4-4-2 / 4-3-3',
    home: 'Hassan (c); H.Ali, Tahseen, Hashim, Doski; Jasim, Ismael, Al-Ammari, Bayesh; Hussein, M.Ali',
    away: 'Nyland; Ryerson, Ajer, Heggem, Møller Wolfe; Ødegaard (c), Berge, Aursnes; Sørloth, Haaland, Nusa',
    note: '✅ 官方首发已确认（Yahoo Sports / Mixvale · 2026-06-16 赛前 team sheet） · 全场 1-4 · Haaland 双响 · Hussein 39\' 头球',
    source: 'FIFA team sheet · Yahoo Sports',
    diff: {
      home: '⚠️ Jalal Hassan 一门（非 Raed）· Ali Jasim + Ali Al-Hamadi 锋线 · 4-4-2 紧凑防守',
      away: '⚠️ Heggem 搭档 Ajer（Østigård 替补后 76\' 进球）· Nusa 左翼 · Sørloth 右翼 · Berge 单闸',
    },
    predicted: {
      formation: '4-2-3-1 / 4-3-3',
      home: 'Hassan; Adnan, Tareq, Natiq, Ali; Alaa, Bashar; Aymen, Zidane, Mohanad; Hussein',
      away: 'Nyland; Ryerson, Høibråten, Nørgaard, Wolfe; Berg, Ødegaard; Dønnum, Haaland, Sørloth',
      source: 'FotMob 预测 · 已 superseded',
    },
    homeInjuries: [
      { player: 'Jalal Hassan', status: 'FIT', note: '队长 · 一门首发（Raed 未出场）', confirmed: true },
      { player: 'Aymen Hussein', status: 'FIT', note: '39\' 头球破门 · 90+7\' 乌龙', confirmed: true },
    ],
    awayInjuries: [
      { player: 'Erling Haaland', status: 'FIT', note: '世界杯首秀双响 29\'/43\'', confirmed: true },
      { player: 'Martin Ødegaard', status: 'FIT', note: '队长 · 控场核心 · 助攻 Østigård', confirmed: true },
      { player: 'Leo Østigård', status: 'BENCH', note: '替补 76\' 头球破门', confirmed: true },
    ],
  },
  m19: {
    formation: '4-3-3 / 4-2-3-1',
    home: 'Martínez; Montiel, Romero, L. Martínez, Medina; De Paul, Mac Allister, Enzo; Almada, Messi (c), Lautaro',
    away: 'L. Zidane; Belghali, Mandi, Bensebaini, Ait-Nouri; Bentaleb, Boudaoui; Hadj Moussa, Chaibi, Gouiri, Maza',
    note: '✅ 官方首发已确认（FotMob / ESPN · 2026-06-16 赛前 team sheet） · 全场 3-0 · Messi 帽子戏法 · Mahrez 替补',
    source: 'FIFA team sheet · FotMob',
    diff: {
      home: '⚠️ Medina 左后卫 · Almada 左翼（非 Garnacho）· 10/10 冠军成员首发 · Montiel 右闸',
      away: '⚠️ Luca Zidane 一门 · Mahrez 替补 · Gouiri/Maza 锋线 · Chaibi 威胁最大',
    },
    predicted: {
      formation: '4-3-3 / 4-2-3-1',
      home: 'Martínez; Molina, Romero, Otamendi, Tagliafico; De Paul, Enzo, Mac Allister; Messi, Lautaro, Garnacho',
      away: 'Mandrea; Atal, Mandi, Belkacemi; Benrahma, Aouar, Bentaleb; Mahrez, Bounedjah, Boussoufa',
      source: 'ESPN / TyC 预测 · 已 superseded',
    },
    homeInjuries: [
      { player: 'Lionel Messi', status: 'FIT', note: '17\'/60\'/76\' 帽子戏法 · 追平 Klose 16球', confirmed: true },
      { player: 'Emiliano Martínez', status: 'FIT', note: '扑出 Chaibi 射门 · 零封', confirmed: true },
    ],
    awayInjuries: [
      { player: 'Riyad Mahrez', status: 'BENCH', note: '未进首发 · 60\' 后替补', confirmed: true },
      { player: 'Luca Zidane', status: 'FIT', note: '一门 · 无力阻止 Messi 三球', confirmed: true },
    ],
  },
  m20: {
    formation: '4-2-3-1 / 3-2-4-1',
    home: 'Schlager; Posch, Lienhart, Alaba (c), Mwene; Seiwald, X. Schlager; Schmid, Laimer, Sabitzer; Kalajdžić',
    away: 'Abulaila; Nasib, Abu Al-Arab, Abualnadi; Haddad, Abu Taha; Fakhouri, Al-Rashdan, Al-Rawabdeh, Olwan; Tamari',
    note: '✅ 官方首发已确认（SportsGambler / BBC · 2026-06-16 赛前 team sheet） · 全场 3-1 · Schmid 远射 · Arnautović 替补点球',
    source: 'FIFA team sheet · SportsGambler',
    diff: {
      home: '⚠️ Kalajdžić 单锋（Arnautović 替补 90+13\' 点球）· Schmid 首发远射破门 · 双 Schlager 后腰',
      away: '⚠️ 3-2-4-1 五中场 · Tamari 单箭 · Olwan 50\' 扳平 · Abu Al-Arab 77\' 乌龙',
    },
    predicted: {
      formation: '4-2-3-1 / 4-4-2',
      home: 'Pentz; Posch, Alaba, Lienhart, Mwene; Seiwald, Schlager; Baumgartner, Sabitzer, Grüll; Arnautović',
      away: 'Abu Laila; Al-Rosan, Al-Ajalin, Al-Damour; Al-Naimat, Al-Rawashdeh, Al-Tamari; Al-Malki, Al-Rashdan; Al-Dardour',
      source: 'Opta / FotMob 预测 · 已 superseded',
    },
    homeInjuries: [
      { player: 'David Alaba', status: 'FIT', note: '队长 · 伤愈复出 · 防线领袖', confirmed: true },
      { player: 'Marko Arnautović', status: 'BENCH', note: '替补 · VAR 取消进球后 90+13\' 点球制胜', confirmed: true },
    ],
    awayInjuries: [
      { player: 'Mousa Al-Tamari', status: 'FIT', note: '队长 · 单锋 · 持续威胁', confirmed: true },
      { player: 'Ali Iyad Olwan', status: 'FIT', note: '50\' 扳平 · 约旦世界杯首球', confirmed: true },
    ],
  },
};

const data = loadMatchData();
data.lastUpdated = TS;

for (const [id, L] of Object.entries(LINEUPS)) {
  const m = data.todayMatches?.find(x => x.id === id);
  if (!m) continue;
  m.lineup = {
    confirmed: true,
    formation: L.formation,
    home: L.home,
    away: L.away,
    note: L.note,
    source: L.source,
    updated: TS,
    diff: L.diff,
    predicted: L.predicted,
  };
  if (m.home && L.homeInjuries) m.home.injuries = L.homeInjuries;
  if (m.away && L.awayInjuries) m.away.injuries = L.awayInjuries;
}

const lineupNews = {
  tag: 'LINEUP',
  text: '✅ 四场官方首发均已确认 · 伊-挪 / 阿-阿 / 奥-约 team sheet 已同步 · Mahrez/Arnautović 替补',
  time: '阵容',
};
const news = data.breakingNews || [];
data.breakingNews = news.map(n =>
  n.tag === 'LINEUP' && n.text.includes('法塞战')
    ? { tag: 'LINEUP', text: '✅ 四场官方首发均已确认 · 法塞/伊挪/阿阿/奥约 team sheet 同步', time: '阵容' }
    : n,
);
if (!data.breakingNews.some(n => n.tag === 'LINEUP' && n.text.includes('四场'))) {
  data.breakingNews.splice(3, 0, lineupNews);
}

data.upcomingMatches = [
  {
    group: 'K',
    time_beijing_full: '北京时间 6月18日 01:00',
    venue: 'NRG Stadium',
    city: 'Houston, USA',
    home: { name: 'Portugal', iso: 'pt' },
    away: { name: 'Congo DR', iso: 'cd' },
    teaser: 'K组揭幕：C罗最后一届',
  },
  {
    group: 'L',
    time_beijing_full: '北京时间 6月18日 04:00',
    venue: 'AT&T Stadium',
    city: 'Arlington, USA',
    home: { name: 'England', iso: 'gb-eng' },
    away: { name: 'Croatia', iso: 'hr' },
    teaser: 'L组：三狮 vs 格子军团',
  },
  {
    group: 'L',
    time_beijing_full: '北京时间 6月18日 07:00',
    venue: 'BMO Field',
    city: 'Toronto, Canada',
    home: { name: 'Ghana', iso: 'gh' },
    away: { name: 'Panama', iso: 'pa' },
    teaser: 'L组第2场',
  },
  {
    group: 'K',
    time_beijing_full: '北京时间 6月18日 10:00',
    venue: 'Estadio Azteca',
    city: 'Mexico City, Mexico',
    home: { name: 'Uzbekistan', iso: 'uz' },
    away: { name: 'Colombia', iso: 'co' },
    teaser: 'K组：乌兹别克 vs 哥伦比亚',
  },
];

saveMatchData(data);
console.log('✅ m18–m20 lineups synced (confirmed)');
['m18', 'm19', 'm20'].forEach(id => {
  const m = data.todayMatches.find(x => x.id === id);
  console.log(`   ${id}: ${m?.lineup?.home?.slice(0, 50)}…`);
});
