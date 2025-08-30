import React from 'react';

export const LevelManagerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 10H21" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 14H21" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V14M12 14V10M12 10C15.3137 10 18 8.20914 18 6C18 3.79086 15.3137 2 12 2C8.68629 2 6 3.79086 6 6C6 8.20914 8.68629 10 12 10Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10C12 8 13 6 15 5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10C12 8 11 6 9 5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14V18" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);