import React from 'react';

export const RetirementIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25H18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 8.25H8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25V4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5V21.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.607 17.607l-1.47-1.47" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.863 7.864l-1.47-1.47" />
    </svg>
);