import React from 'react';
import '../styles/NoPaymentDue.css';

export const NoPaymentDue: React.FC = () => {
  return (
    <div className="no-payment-due">
      <div className="no-payment-due-header">
        No Payment Due
      </div>
      <div className="no-payment-message">You've paid your September balance.</div>
      <i className="fas fa-check checkmark"></i>
    </div>
  );
};