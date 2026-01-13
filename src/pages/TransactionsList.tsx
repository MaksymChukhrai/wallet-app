import React, { useState } from 'react';
import type { Transaction } from '../types/transaction';
import { CardBalance } from '../components/CardBalance';
import { NoPaymentDue } from '../components/NoPaymentDue';
import { DailyPoints } from '../components/DailyPoints';
import { TransactionItem } from '../components/TransactionItem';
import transactionsData from '../data/transactions.json';
import '../styles/TransactionsList.css';

interface TransactionsListProps {
  onTransactionClick: (transaction: Transaction) => void;
}

export const TransactionsList: React.FC<TransactionsListProps> = ({ onTransactionClick }) => {
  const [transactions] = useState<Transaction[]>(transactionsData.transactions as Transaction[]);
  const [cardBalance] = useState(transactionsData.cardBalance);

  return (
    <div className="transactions-list-container">
      <header className="header">
        <div className="time">10:48</div>
        <div className="status-icons">
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
        </div>
      </header>

      <div className="content">
        <div className="top-section">
          <div className="card-balance-column-container">
            <CardBalance
              limit={cardBalance.limit}
              balance={cardBalance.balance}
              available={cardBalance.available}
            />
            <DailyPoints />
          </div>
          
          <NoPaymentDue />
        </div>

        <div className="transactions-section">
          <h2 className="section-title">Latest Transactions</h2>
          <div className="transactions-list">
            {transactions.slice(0, 10).map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onClick={onTransactionClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};