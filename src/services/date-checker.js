const YEAR = 2015;
export const calendar_day_has_passed = day => (Date.now() > Date.parse(`${YEAR}-12-${day}`));
