import React from 'react';

export const LevelApprenticeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 21V19M12 19C16.9706 19 21 14.9706 21 10C21 5.02944 16.9706 1 12 1C7.02944 1 3 5.02944 3 10C3 14.9706 7.02944 19 12 19Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10H21" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 14H21" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19V14M12 14C15.3137 14 18 12.2091 18 10C18 7.79086 15.3137 6 12 6C8.68629 6 6 7.79086 6 10C6 12.2091 8.68629 14 12 14Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);