export const TRIMESTER_RANGES = [
  { label: '1st Trimester', weeks: [1, 12], color: '#FF6B9D', desc: 'Weeks 1–12' },
  { label: '2nd Trimester', weeks: [13, 27], color: '#E91E63', desc: 'Weeks 13–27' },
  { label: '3rd Trimester', weeks: [28, 40], color: '#C2185B', desc: 'Weeks 28–40' },
  { label: 'Postpartum', weeks: [41, 52], color: '#880E4F', desc: 'After birth' },
];

export function getPregnancyData(conceptionDate) {
  const conception = new Date(conceptionDate);
  const now = new Date();

  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weeksPregnant = Math.floor((now - conception) / msPerWeek);

  // Due date is ~40 weeks from LMP, which is ~38 weeks from conception
  const dueDate = new Date(conception.getTime() + 38 * msPerWeek);
  const daysUntilDue = Math.ceil((dueDate - now) / (24 * 60 * 60 * 1000));

  let trimester = null;
  let postpartum = false;

  if (weeksPregnant < 1) {
    trimester = TRIMESTER_RANGES[0];
  } else if (weeksPregnant <= 12) {
    trimester = TRIMESTER_RANGES[0];
  } else if (weeksPregnant <= 27) {
    trimester = TRIMESTER_RANGES[1];
  } else if (weeksPregnant <= 40) {
    trimester = TRIMESTER_RANGES[2];
  } else {
    trimester = TRIMESTER_RANGES[3];
    postpartum = true;
  }

  const progress = Math.min(weeksPregnant / 40, 1);

  return {
    weeksPregnant: Math.max(0, weeksPregnant),
    dueDate,
    daysUntilDue: Math.max(0, daysUntilDue),
    trimester,
    postpartum,
    progress,
  };
}

export function formatDueDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
