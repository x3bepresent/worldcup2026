/**
 * 批量补全 finishedMatches 的 ht_score（FIFA API 进球分钟 + scorers 回退）
 * node scripts/backfill-ht-scores.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const RESULTS_PATH = path.join(ROOT, 'js', 'results-data.js');
const FIFA_INDEX_PATH = path.join(ROOT, 'js', 'fifa-match-index.json');
const TS = new Date().toISOString().replace(/\.\d{3}Z$/, '+08:00');

function loadData(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return new Function(raw + `\nreturn ${varName};`)();
}

function fetchFifa(id) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.fifa.com/api/v3/live/football/${id}`, (res) => {
      let raw = '';
      res.on('data', (c) => { raw += c; });
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function isFirstHalfGoalStr(minStr) {
  const m = String(minStr || '').match(/(\d+)(?:\+(\d+))?/);
  if (!m) return false;
  return parseInt(m[1], 10) <= 45;
}

function htScoreFromFifaGoals(j) {
  let hh = 0;
  let ha = 0;
  for (const g of j.HomeTeam?.Goals || []) {
    if (isFirstHalfGoalStr(g.Minute)) hh += 1;
  }
  for (const g of j.AwayTeam?.Goals || []) {
    if (isFirstHalfGoalStr(g.Minute)) ha += 1;
  }
  return `${hh}-${ha}`;
}

function parseGoalEntries(scorers) {
  if (!scorers) return [];
  return String(scorers).split(/[;·]/).map(s => s.trim()).filter(Boolean);
}

function htScoreFromScorers(scorers) {
  let hh = 0;
  let ha = 0;
  let side = 'home';
  for (const entry of parseGoalEntries(scorers)) {
    if (!/\d+'/.test(entry)) continue;
    const isHt = isFirstHalfGoalStr(entry);
    const isOg = /\(\s*og\s*\)|\bOG\b|乌龙/i.test(entry);
    if (isHt) {
      if (isOg) {
        if (side === 'home') ha += 1;
        else hh += 1;
      } else if (side === 'home') hh += 1;
      else ha += 1;
    }
    if (!isOg) side = side === 'home' ? 'away' : 'home';
  }
  return `${hh}-${ha}`;
}

function matchNumber(id) {
  return parseInt(String(id).replace(/\D/g, ''), 10) || 0;
}

function resolveFifaId(m, index) {
  const n = matchNumber(m.id);
  return m.fifa_match_id
    || m.actualResult?.fifa_match_id
    || index.matches?.[String(n)]?.fifaId
    || null;
}

function writeResults(data) {
  const header = `// 过往赛果 — 精简归档（推演 + 赛果核验 + 复盘概要）
// Last updated: ${TS}
`;
  fs.writeFileSync(RESULTS_PATH, header + `const RESULTS_DATA = ${JSON.stringify(data, null, 2)};\n`);
}

async function main() {
  const index = JSON.parse(fs.readFileSync(FIFA_INDEX_PATH, 'utf8'));
  const data = loadData(RESULTS_PATH, 'RESULTS_DATA');
  const matches = data.finishedMatches || [];

  let updated = 0;
  let fetched = 0;
  let skipped = 0;

  for (const m of matches) {
    const ar = m.actualResult;
    if (!ar || ar.home_score == null || ar.status !== 'FT') {
      skipped += 1;
      continue;
    }

    const fid = resolveFifaId(m, index);
    let ht = null;
    let source = null;

    if (fid) {
      try {
        const j = await fetchFifa(fid);
        if (j.HomeTeam?.Score != null) {
          ht = htScoreFromFifaGoals(j);
          source = 'fifa_goals';
          fetched += 1;
        }
      } catch (e) {
        console.warn('⚠ FIFA', m.id, fid, e.message);
      }
    }

    if (!ht && ar.scorers) {
      ht = htScoreFromScorers(ar.scorers);
      source = 'scorers';
    }

    if (!ht) {
      skipped += 1;
      continue;
    }

    const prev = ar.ht_score;
    if (prev !== ht) {
      ar.ht_score = ht;
      if (m.depth_calibration?.preview_replay) {
        m.depth_calibration.preview_replay.ht_score = ht;
      }
      updated += 1;
      console.log(`  ${m.id} ht ${prev || '—'} → ${ht} (${source})`);
    }
  }

  data.lastUpdated = TS;
  writeResults(data);
  console.log(`✅ ht_score backfill: ${updated} updated · ${fetched} FIFA · ${skipped} skipped · ${matches.length} total`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
