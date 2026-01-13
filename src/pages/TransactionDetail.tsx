import React from 'react';
import type { Transaction } from '../types/transaction';
import { BackButton } from '../components/BackButton';
import { formatDetailDate } from '../utils/dateFormatter';
import '../styles/TransactionDetail.css';

interface TransactionDetailProps {
  transaction: Transaction;
  onBack: () => void;
}

export const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction, onBack }) => {
  return (
    <div className="transaction-detail-container">
      <header className="header">
        <div className="time">10:48</div>
        <div className="status-icons">
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
        </div>
      </header>

      <div className="detail-content">
        <div className="detail-header">
          <BackButton onClick={onBack} />
        </div>

        <div className="detail-amount">
          ${transaction.amount.toFixed(2)}
        </div>

        <div className="detail-name">
          {transaction.name}
        </div>

        <div className="detail-date">
          {formatDetailDate(transaction.date)}
        </div>

        <div className="detail-info-section">
          <div className="detail-info-row">
            <span className="detail-info-label">Status:</span>
            <span className={`detail-info-value status-${transaction.status?.toLowerCase()}`}>
              {transaction.status || 'Approved'}
            </span>
          </div>

          <div className="detail-info-row">
            <span className="detail-card-info">{transaction.cardUsed}</span>
          </div>

          <div className="detail-divider"></div>

          <div className="detail-info-row">
            <span className="detail-info-label">Total</span>
            <span className="detail-info-value detail-total">
              ${transaction.amount.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="bottom-bar"></div>
    </div>
  );
};