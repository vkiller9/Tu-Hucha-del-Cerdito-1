import React from 'react';

export const FriendlyGuideIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#FFFBEB"/>
        <circle cx="50" cy="50" r="48" stroke="#FBBF24" strokeWidth="4"/>
        
        {/* Hair */}
        <path d="M30 55 C 30 25, 70 25, 70 55 C 80 50, 85 60, 75 70 C 65 80, 50 85, 40 75 Z" fill="#A16207"/>
        
        {/* Face */}
        <circle cx="50" cy="55" r="25" fill="#FEF3C7"/>
        
        {/* Eyes */}
        <circle cx="42" cy="55" r="4" fill="#854D0E"/>
        <circle cx="58" cy="55" r="4" fill="#854D0E"/>
        
        {/* Mouth */}
        <path d="M45 68 Q 50 73 55 68" stroke="#854D0E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        
        {/* Body */}
        <path d="M30 90 C 40 80, 60 80, 70 90 L 50 100 Z" fill="#FBBF24" />
    </svg>
);