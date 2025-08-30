import React from 'react';

export const LevelMasterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 21V17M12 17H16C18.7614 17 21 14.7614 21 12C21 9.23858 18.7614 7 16 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H12Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7V4M12 4H15M12 4H9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21H15" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);