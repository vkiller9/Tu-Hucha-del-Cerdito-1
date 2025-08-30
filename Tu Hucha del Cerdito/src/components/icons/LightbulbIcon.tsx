import React from 'react';

export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a11.999 11.999 0 01-4.5 0m4.5-2.311a6.012 6.012 0 003.75 0m-3.75 0a6.012 6.012 0 01-3.75 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
