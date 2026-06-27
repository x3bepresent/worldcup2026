/** Sort matches by Beijing kickoff (time_beijing), then FIFA match id. */
function kickoffSortKey(m) {
  const t = String(m?.time_beijing || m?.time || '').trim();
  const parts = t.match(/^(\d{1,2}):(\d{2})$/);
  if (parts) return parseInt(parts[1], 10) * 60 + parseInt(parts[2], 10);
  const n = parseInt(String(m?.id || '').replace(/\D/g, ''), 10);
  return Number.isFinite(n) ? n * 10000 : 0;
}

function matchIdSortKey(m) {
  const n = parseInt(String(m?.id || '').replace(/\D/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

function sortMatchesByKickoff(matches) {
  return [...(matches || [])].sort(
    (a, b) => kickoffSortKey(a) - kickoffSortKey(b) || matchIdSortKey(a) - matchIdSortKey(b)
  );
}

module.exports = { kickoffSortKey, matchIdSortKey, sortMatchesByKickoff };
