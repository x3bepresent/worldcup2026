/**
 * Day 6 lineup sync — m17 France vs Senegal (2026-06-16)
 * Source: The Standard / BBC · 官方首发已确认
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MATCH_PATH = path.join(ROOT, 'js', 'matches-data.js');
const TS = '2026-06-16T20:00:00+08:00';

function loadMatchData() {
  const src = fs.readFileSync(MATCH_PATH, 'utf8');
  const body = src.replace(/^\/\/[^\n]*\n/gm, '').replace(/^const MATCH_DATA = /, '').replace(/;\s*$/, '');
  return eval(`(${body})`);
}

function saveMatchData(data) {
  fs.writeFileSync(
    MATCH_PATH,
    `// 今日赛事 — Day 6 (lineup sync m17)\n// Last updated: ${TS}\nconst MATCH_DATA = ${JSON.stringify(data, null, 2)};\n`,
  );
}

const data = loadMatchData();
data.lastUpdated = TS;

const lineupItem = {
  tag: 'LINEUP',
  text: '✅ 官方首发 · 法国 v 塞内加尔：Mbappé + Olise/Dembélé/Doué · Rabiot/Tchouaméni · Mendy; Gana Gueye; Ismaila Sarr',
  time: '官方确认',
};
const news = data.breakingNews || [];
if (!news.some(n => n.tag === 'LINEUP' && n.text.includes('法国 v 塞内加尔'))) {
  data.breakingNews = [lineupItem, ...news];
}

const m17 = data.todayMatches?.find(m => m.id === 'm17');
if (m17) {
  m17.note = 'I组揭幕 · 法国 vs 塞内加尔 · 官方首发已确认';
  m17.lineup = {
    confirmed: true,
    formation: '4-2-3-1 / 4-3-3',
    home:
      'Maignan; Koundé, Saliba, Upamecano, Hernandez; Tchouaméni, Rabiot; Olise, Dembélé, Doué; Mbappé',
    away:
      'Mendy; Diatta, Niakhate, Koulibaly, Diouf; Pape Gueye, Gana Gueye, Camara; Mané, Jackson, Sarr',
    note:
      '✅ 官方首发已确认（The Standard / BBC · 2026-06-16 赛前 team sheet）',
    source: 'FIFA team sheet · The Standard',
    updated: TS,
    diff: {
      home:
        '⚠️ 实际 4-2-3-1（非 4-3-3）：Rabiot+Tchouaméni 双闸 · Olise 右翼 + Dembélé 10 号 + Doué 左路 · Kanté/Thuram/Griezmann 替补',
      away:
        '⚠️ Mendy 一门（非 Diouf）· Niakhate 中卫 · Gana Gueye 后腰 · Ismaila Sarr 首发（非 Iliman Ndiaye）',
    },
    predicted: {
      formation: '4-3-3 / 4-3-3',
      home: 'Maignan; Koundé, Saliba, Upamecano, Hernandez; Tchouaméni, Kanté, Camavinga; Dembélé, Mbappé, Thuram',
      away: 'Diouf; Sabaly, Koulibaly, Diallo, Mendy; Gueye, Ndiaye; Mané, Jackson, Sarr',
      source: 'ESPN / L\'Équipe 旧预测 · 已 superseded',
    },
  };

  if (m17.home) {
    m17.home.injuries = [
      { player: 'William Saliba', status: 'FIT', note: '背部伤情已恢复，与 Upamecano 搭档中卫', confirmed: true },
      { player: 'Kylian Mbappé', status: 'FIT', note: '队长 · 单锋首发', confirmed: true },
      { player: 'Adrien Rabiot', status: 'FIT', note: '与 Tchouaméni 组成双闸，Kanté 替补', confirmed: true },
      { player: 'Antoine Griezmann', status: 'BENCH', note: '未进首发，Cherki/Thuram/Barcola 待命', confirmed: true },
    ];
    m17.home.rumors = [
      '【更衣室】Deschamps 排出攻击型 4-2-3-1：Olise 热身赛戴帽后锁定右翼',
      '【战术】Dembélé 伪 10 + Doué 左路 · Mbappé 单箭 · Rabiot/Tchouaméni 保护防线',
      '替补席：Kanté、Cherki、Thuram、Barcola、Mateta — 60\' 后深度轮换仍是优势',
      'Koundé 对位 Ismaila Sarr 边路攻防是法国右路关键',
    ];
    m17.home.stars = [
      { name: 'Kylian Mbappé', pos: 'ST', club: 'Real Madrid', stats: '队长 · 单锋', rating: 9.2, desc: 'I组揭幕核心，对位 Koulibaly/Niakhate' },
      { name: 'Michael Olise', pos: 'RW', club: 'Bayern Munich', stats: '热身赛戴帽', rating: 8.7, desc: '右翼首发，内切+传中破局点' },
      { name: 'William Saliba', pos: 'CB', club: 'Arsenal', stats: '背部伤愈复出', rating: 8.8, desc: '与 Upamecano 中卫搭档已确认' },
    ];
  }

  if (m17.away) {
    m17.away.injuries = [
      { player: 'Kalidou Koulibaly', status: 'FIT', note: '队长 · 伤愈复出后锁定中卫', confirmed: true },
      { player: 'Édouard Mendy', status: 'FIT', note: '一门首发（非 Diouf）', confirmed: true },
      { player: 'Ismaila Sarr', status: 'FIT', note: '右翼首发，对位 Hernandez', confirmed: true },
      { player: 'Nicolas Jackson', status: 'FIT', note: '热身赛红牌后仍首发中锋', confirmed: true },
    ];
    m17.away.rumors = [
      '【战术】4-3-3：Gana Gueye 单后腰 · Pape Gueye/Camara 两侧 · Mané-Jackson-Sarr 三叉戟',
      '【更衣室】Niakhate 搭档 Koulibaly 中卫 · Diatta/Diouf 边卫应对法国宽度',
      'Mané 大赛经验+Jackson 速度是转换唯一路径',
      '替补：Iliman Ndiaye、Mbaye 等攻击手 60\' 后待命',
    ];
    m17.away.stars = [
      { name: 'Sadio Mané', pos: 'LW', club: 'Al-Nassr', stats: '队长 · 左翼', rating: 8.5, desc: '反击发起点，对位 Koundé 是冷门关键' },
      { name: 'Kalidou Koulibaly', pos: 'CB', club: 'Al-Hilal', stats: '队长 · 100+ caps', rating: 8.0, desc: '低位防守领袖，防空 Mbappé' },
      { name: 'Ismaila Sarr', pos: 'RW', club: 'Crystal Palace', stats: '官方首发右翼', rating: 7.9, desc: '对位 Hernandez，转换速度点' },
    ];
  }
}

saveMatchData(data);
console.log('✅ m17 lineup synced (confirmed)');
console.log('   France:', m17?.lineup?.home?.slice(0, 60) + '…');
