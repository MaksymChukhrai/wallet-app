import React from 'react';
import '../styles/CardBalance.css';

interface CardBalanceProps {
  limit: number;
  balance: number;
  available: number;
}

export const CardBalance: React.FC<CardBalanceProps> = ({ balance, available }) => {
  return (
    <div className="card-balance">
      <div className="card-balance-header">
        <span className="card-balance-label">Card Balance</span>
      </div>
      <div className="card-balance-amount">${balance.toFixed(2)}</div>
      <div className="card-balance-available">${available.toFixed(2)} Available</div>
    </div>
  );
};