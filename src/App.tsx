import { useState } from 'react';
import type { Transaction } from './types/transaction';
import { TransactionsList } from './pages/TransactionsList';
import { TransactionDetail } from './pages/TransactionDetail';
import './App.css';

function App() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleBack = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="app">
      {selectedTransaction ? (
        <TransactionDetail transaction={selectedTransaction} onBack={handleBack} />
      ) : (
        <TransactionsList onTransactionClick={handleTransactionClick} />
      )}
    </div>
  );
}

export default App;