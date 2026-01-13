import React from 'react';
import { calculateDailyPoints, formatPoints } from '../utils/pointsCalculator';
import '../styles/DailyPoints.css';

export const DailyPoints: React.FC = () => {
  const points = calculateDailyPoints();
  const formattedPoints = formatPoints(points);

  return (
    <div className="daily-points">
      <div className="daily-points-label">Daily Points</div>
      <div className="daily-points-value">{formattedPoints}</div>
    </div>
  );
};