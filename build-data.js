const fs = require('fs');
const raw = fs.readFileSync('D:/worldcup2026/js/data.js','utf8')
  .replace(/^const WC2026 = /,'').replace(/;$/,'');
const d = JSON.parse(raw);

// ── 真实12组 ─────────────────────────────────────────────
d.groups = [
  { id:'A', teams:[
    { name:'Mexico',       iso:'mx', rank:12, rating:80, advProb:88, form:['W','W','D','W','L'], player:'S. Giménez',    finish:1 },
    { name:'South Korea',  iso:'kr', rank:23, rating:76, advProb:72, form:['W','W','D','W','W'], player:'Son Heung-min', finish:2 },
    { name:'South Africa', iso:'za', rank:58, rating:65, advProb:28, form:['W','D','L','W','W'], player:'Percy Tau',      finish:3 },
    { name:'Czechia',      iso:'cz', rank:40, rating:72, advProb:58, form:['W','D','W','L','W'], player:'P. Schick',      finish:4 }
  ]},
  { id:'B', teams:[
    { name:'Canada',       iso:'ca', rank:17, rating:78, advProb:82, form:['W','W','W','D','W'], player:'A. Davies',      finish:1 },
    { name:'Switzerland',  iso:'ch', rank:19, rating:77, advProb:78, form:['W','D','W','W','D'], player:'G. Xhaka',       finish:2 },
    { name:'Bosnia Herz.', iso:'ba', rank:55, rating:68, advProb:32, form:['W','L','W','D','W'], player:'E. Džeko',       finish:3 },
    { name:'Qatar',        iso:'qa', rank:68, rating:60, advProb:18, form:['L','D','L','W','L'], player:'A. Afif',        finish:4 }
  ]},
  { id:'C', teams:[
    { name:'Brazil',   iso:'br', rank:5,  rating:88, advProb:92, form:['W','W','W','D','W'], player:'Vinícius Jr',  finish:1 },
    { name:'Morocco',  iso:'ma', rank:14, rating:79, advProb:74, form:['W','W','D','W','W'], player:'H. Ziyech',    finish:2 },
    { name:'Scotland', iso:'gb-sct', rank:38, rating:71, advProb:38, form:['D','W','L','W','D'], player:'A. Robertson', finish:3 },
    { name:'Haiti',    iso:'ht', rank:82, rating:55, advProb:12, form:['D','L','W','L','L'], player:'N. Alexis',    finish:4 }
  ]},
  { id:'D', teams:[
    { name:'USA',       iso:'us', rank:13, rating:79, advProb:84, form:['W','W','D','W','W'], player:'C. Pulisic',  finish:1 },
    { name:'Türkiye',   iso:'tr', rank:32, rating:73, advProb:62, form:['W','D','W','W','L'], player:'H. Çalhanoğlu',finish:2 },
    { name:'Australia', iso:'au', rank:24, rating:72, advProb:54, form:['W','D','W','D','W'], player:'M. Leckie',   finish:3 },
    { name:'Paraguay',  iso:'py', rank:52, rating:67, advProb:24, form:['L','W','D','L','W'], player:'M. Almiron',  finish:4 }
  ]},
  { id:'E', teams:[
    { name:'Germany',        iso:'de', rank:15, rating:84, advProb:90, form:['W','W','W','D','W'], player:'J. Wirtz',     finish:1 },
    { name:'Ecuador',        iso:'ec', rank:44, rating:69, advProb:55, form:['W','D','W','L','W'], player:'M. Caicedo',   finish:2 },
    { name:"Côte d'Ivoire",  iso:'ci', rank:57, rating:68, advProb:48, form:['W','W','D','L','W'], player:'S. Haller',    finish:3 },
    { name:'Curaçao',        iso:'cw', rank:85, rating:52, advProb:8,  form:['L','L','D','W','L'], player:'G. Bacuna',    finish:4 }
  ]},
  { id:'F', teams:[
    { name:'Netherlands', iso:'nl', rank:7,  rating:85, advProb:88, form:['W','W','D','W','W'], player:'V. van Dijk', finish:1 },
    { name:'Japan',       iso:'jp', rank:18, rating:77, advProb:68, form:['W','D','W','W','D'], player:'Mitoma',      finish:2 },
    { name:'Sweden',      iso:'se', rank:25, rating:73, advProb:52, form:['W','D','D','W','W'], player:'A. Isak',     finish:3 },
    { name:'Tunisia',     iso:'tn', rank:62, rating:64, advProb:22, form:['D','W','L','D','W'], player:'Y. Msakni',   finish:4 }
  ]},
  { id:'G', teams:[
    { name:'Belgium',     iso:'be', rank:4,  rating:86, advProb:88, form:['W','W','W','W','D'], player:'K. De Bruyne', finish:1 },
    { name:'Egypt',       iso:'eg', rank:34, rating:72, advProb:60, form:['W','W','D','W','L'], player:'M. Salah',     finish:2 },
    { name:'Iran',        iso:'ir', rank:22, rating:73, advProb:55, form:['W','D','W','D','W'], player:'S. Azmoun',    finish:3 },
    { name:'New Zealand', iso:'nz', rank:92, rating:52, advProb:10, form:['D','L','L','W','L'], player:'C. Wood',      finish:4 }
  ]},
  { id:'H', teams:[
    { name:'Spain',       iso:'es', rank:2,  rating:92, advProb:94, form:['W','W','W','W','W'], player:'Pedri',        finish:1 },
    { name:'Uruguay',     iso:'uy', rank:16, rating:79, advProb:70, form:['W','W','D','W','L'], player:'D. Núñez',     finish:2 },
    { name:'Saudi Arabia',iso:'sa', rank:56, rating:66, advProb:28, form:['W','D','L','W','D'], player:'S. Al-Dawsari',finish:3 },
    { name:'Cabo Verde',  iso:'cv', rank:74, rating:58, advProb:14, form:['W','L','W','D','L'], player:'D. Fortes',    finish:4 }
  ]},
  { id:'I', teams:[
    { name:'France',  iso:'fr', rank:3,  rating:91, advProb:92, form:['W','W','W','D','W'], player:'K. Mbappé',  finish:1 },
    { name:'Norway',  iso:'no', rank:26, rating:76, advProb:65, form:['W','W','D','W','D'], player:'E. Haaland', finish:2 },
    { name:'Senegal', iso:'sn', rank:20, rating:77, advProb:62, form:['W','D','W','W','D'], player:'S. Mané',    finish:3 },
    { name:'Iraq',    iso:'iq', rank:78, rating:56, advProb:10, form:['L','D','W','L','L'], player:'A. Abbas',   finish:4 }
  ]},
  { id:'J', teams:[
    { name:'Argentina', iso:'ar', rank:1,  rating:94, advProb:95, form:['W','W','W','W','D'], player:'L. Messi',    finish:1 },
    { name:'Austria',   iso:'at', rank:28, rating:74, advProb:60, form:['W','D','W','W','D'], player:'M. Arnautovic',finish:2 },
    { name:'Algeria',   iso:'dz', rank:46, rating:67, advProb:38, form:['W','W','D','L','W'], player:'R. Mahrez',   finish:3 },
    { name:'Jordan',    iso:'jo', rank:72, rating:57, advProb:14, form:['D','W','D','L','D'], player:'Y. Al-Naimat',finish:4 }
  ]},
  { id:'K', teams:[
    { name:'Portugal',  iso:'pt', rank:6,  rating:89, advProb:92, form:['W','W','W','W','D'], player:'C. Ronaldo', finish:1 },
    { name:'Colombia',  iso:'co', rank:27, rating:75, advProb:68, form:['W','D','W','W','W'], player:'J. Cuadrado',finish:2 },
    { name:'Uzbekistan',iso:'uz', rank:65, rating:62, advProb:25, form:['W','D','L','W','W'], player:'E. Shomurodov',finish:3 },
    { name:'Congo DR',  iso:'cd', rank:61, rating:63, advProb:22, form:['W','L','W','D','W'], player:'S. Mputu',    finish:4 }
  ]},
  { id:'L', teams:[
    { name:'England',  iso:'gb-eng', rank:9,  rating:87, advProb:90, form:['W','W','W','D','W'], player:'J. Bellingham',finish:1 },
    { name:'Croatia',  iso:'hr',     rank:10, rating:81, advProb:72, form:['W','D','W','D','W'], player:'L. Modrić',    finish:2 },
    { name:'Ghana',    iso:'gh',     rank:60, rating:65, advProb:28, form:['D','W','W','D','L'], player:'T. Partey',    finish:3 },
    { name:'Panama',   iso:'pa',     rank:75, rating:58, advProb:10, form:['W','D','L','L','W'], player:'R. Murillo',   finish:4 }
  ]}
];

// ── 精选真实赛程预测（10场） ───────────────────────────────
// 时间均为北京时间
d.matches = [
  // 开幕日 Jun 11 -> 北京时间 Jun 12
  { stage:'Group A', date:'🇨🇳 6月12日 03:00', home:'Mexico',       away:'South Africa',         home_score:'2',away_score:'0', xg_h:2.1,xg_a:0.7, prob_h:68,prob_d:20,prob_a:12 },
  { stage:'Group A', date:'🇨🇳 6月12日 10:00', home:'South Korea',  away:'Czechia',              home_score:'2',away_score:'1', xg_h:1.8,xg_a:1.4, prob_h:48,prob_d:28,prob_a:24 },
  // Jun 12 -> 北京时间 Jun 13
  { stage:'Group D', date:'🇨🇳 6月13日 03:00', home:'Canada',       away:'Bosnia and Herzegovina',home_score:'2',away_score:'1', xg_h:1.9,xg_a:1.2, prob_h:62,prob_d:22,prob_a:16 },
  { stage:'Group D', date:'🇨🇳 6月13日 09:00', home:'USA',          away:'Paraguay',             home_score:'2',away_score:'0', xg_h:2.0,xg_a:0.8, prob_h:65,prob_d:22,prob_a:13 },
  // Jun 13 -> 北京时间 Jun 14
  { stage:'Group C', date:'🇨🇳 6月14日 06:00', home:'Brazil',       away:'Morocco',              home_score:'2',away_score:'1', xg_h:2.4,xg_a:1.1, prob_h:58,prob_d:25,prob_a:17 },
  // Jun 14 -> 北京时间 Jun 15
  { stage:'Group E', date:'🇨🇳 6月15日 01:00', home:'Germany',      away:'Curaçao',              home_score:'4',away_score:'0', xg_h:3.8,xg_a:0.3, prob_h:90,prob_d:8, prob_a:2  },
  { stage:'Group E', date:'🇨🇳 6月15日 07:00', home:"Côte d'Ivoire",away:'Ecuador',              home_score:'1',away_score:'1', xg_h:1.5,xg_a:1.4, prob_h:38,prob_d:35,prob_a:27 },
  // Jun 16 -> 北京时间 Jun 17
  { stage:'Group I', date:'🇨🇳 6月17日 03:00', home:'France',       away:'Senegal',              home_score:'2',away_score:'0', xg_h:2.3,xg_a:0.9, prob_h:62,prob_d:24,prob_a:14 },
  { stage:'Group J', date:'🇨🇳 6月17日 09:00', home:'Argentina',    away:'Algeria',              home_score:'3',away_score:'0', xg_h:2.8,xg_a:0.6, prob_h:78,prob_d:14,prob_a:8  },
  // Final prediction
  { stage:'THE FINAL', date:'🇨🇳 7月20日 04:00', home:'Argentina',   away:'France', home_score:'2', away_score:'1', xg_h:1.9,xg_a:1.8, prob_h:38,prob_d:28,prob_a:34, note:'AET · 预测结果' }
];

fs.writeFileSync('D:/worldcup2026/js/data.js','const WC2026 = '+JSON.stringify(d,null,2)+';','utf8');
console.log('✅ data.js updated:', fs.statSync('D:/worldcup2026/js/data.js').size,'bytes');
console.log('Groups:', d.groups.map(g=>g.id+'('+g.teams[0].name+')').join(', '));
