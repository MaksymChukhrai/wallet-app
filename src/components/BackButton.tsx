import React from 'react';
import '../styles/BackButton.css';

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button className="back-button" onClick={onClick} aria-label="Go back">
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};