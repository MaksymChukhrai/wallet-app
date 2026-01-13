export const calculateDailyPoints = (date: Date = new Date()): number => {
  const dayOfSeason = getDayOfSeason(date);

  if (dayOfSeason === 1) return 2;
  if (dayOfSeason === 2) return 3;

  let prevPrev = 2;
  let prev = 3;
  let current = 0;

  for (let day = 3; day <= dayOfSeason; day++) {
    current = Math.round(prevPrev + prev * 0.6);
    prevPrev = prev;
    prev = current;
  }

  return current;
};

export const formatPoints = (points: number): string => {
  if (points >= 1000) {
    return `${Math.round(points / 1000)}K`;
  }
  return points.toString();
};

const getDayOfSeason = (date: Date): number => {
  const month = date.getMonth();

  let seasonStart: Date;

  if (month >= 2 && month < 5) {
    seasonStart = new Date(date.getFullYear(), 2, 1);
  } else if (month >= 5 && month < 8) {
    seasonStart = new Date(date.getFullYear(), 5, 1);
  } else if (month >= 8 && month < 11) {
    seasonStart = new Date(date.getFullYear(), 8, 1);
  } else {
    if (month === 11) {
      seasonStart = new Date(date.getFullYear(), 11, 1);
    } else {
      seasonStart = new Date(date.getFullYear() - 1, 11, 1);
    }
  }

  const diffTime = date.getTime() - seasonStart.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1;
};
