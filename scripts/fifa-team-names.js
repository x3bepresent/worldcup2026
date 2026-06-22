/**
 * Normalize FIFA / site / schedule.html team names to a canonical key.
 */
const FIFA_TO_SCHEDULE = {
  'Korea Republic': 'South Korea',
  'Bosnia and Herzegovina': 'Bosnia & Herz.',
  'Cabo Verde': 'Cape Verde',
  'IR Iran': 'Iran',
  'Democratic Republic of the Congo': 'Congo DR',
  'Congo DR': 'Congo DR',
  Türkiye: 'Türkiye',
  Turkey: 'Türkiye',
  "Côte d'Ivoire": "Côte d'Ivoire",
  'Curaçao': 'Curaçao',
};

const ALIASES = {
  'bosnia and herz.': 'bosnia & herz.',
  'bosnia and herzegovina': 'bosnia & herz.',
  'korea republic': 'south korea',
  'cabo verde': 'cape verde',
  'ir iran': 'iran',
  "cote d'ivoire": "côte d'ivoire",
  turkiye: 'türkiye',
  turkey: 'türkiye',
  'democratic republic of the congo': 'congo dr',
  'congo (dr)': 'congo dr',
};

function normTeam(name) {
  return String(name || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function toScheduleName(name) {
  return FIFA_TO_SCHEDULE[name] || name;
}

function teamKey(name) {
  const schedule = toScheduleName(name);
  const n = normTeam(schedule);
  return ALIASES[n] || n;
}

function teamsPairKey(home, away) {
  return `${teamKey(home)}|${teamKey(away)}`;
}

function teamsMatch(h1, a1, h2, a2) {
  return teamKey(h1) === teamKey(h2) && teamKey(a1) === teamKey(a2);
}

module.exports = {
  FIFA_TO_SCHEDULE,
  toScheduleName,
  teamKey,
  teamsPairKey,
  teamsMatch,
  normTeam,
};
