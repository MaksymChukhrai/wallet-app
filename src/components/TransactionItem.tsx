import React from 'react';
import type { Transaction } from '../types/transaction';
import { formatTransactionDate } from '../utils/dateFormatter';
import '../styles/TransactionItem.css';

interface TransactionItemProps {
  transaction: Transaction;
  onClick: (transaction: Transaction) => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onClick }) => {
  const isPayment = transaction.type === 'Payment';
  const formattedDate = formatTransactionDate(transaction.date);

  return (
    <div className="transaction-item" onClick={() => onClick(transaction)}>
      <div 
        className="transaction-icon"
        data-bg-color={transaction.iconBgColor}
      >
        <i className={`fas ${transaction.icon}`}></i>
      </div>
      
      <div className="transaction-details">
        <div className="transaction-name">{transaction.name}</div>
        <div className="transaction-description">
          {transaction.pending && <span className="pending-badge">Pending - </span>}
          {transaction.description}
        </div>
        <div className="transaction-date">
          {transaction.authorizedUser && (
            <span className="authorized-user">{transaction.authorizedUser} · </span>
          )}
          {formattedDate}
        </div>
      </div>
      
      <div className={`transaction-amount ${isPayment ? 'payment' : 'credit'}`}>
        {isPayment ? '+' : ''}${transaction.amount.toFixed(2)}
      </div>

      <i className="fas fa-chevron-right transaction-arrow"></i>
    </div>
  );
};