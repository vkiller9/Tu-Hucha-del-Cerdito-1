import React from 'react';

export const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.316-5.033 9.75 9.75 0 011.838-3.442.563.563 0 01.81-.154A4.5 4.5 0 0112 5.25a4.5 4.5 0 012.536 1.371.563.563 0 01.81.154 9.75 9.75 0 011.838 3.442 9.75 9.75 0 011.316 5.033zM12 5.25v-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l-1.5-1.5M15 12.75l1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 18.75h4.5" />
    </svg>
);
