import React from 'react';

export const CommunityIllustration: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background shapes */}
        <circle cx="150" cy="175" r="140" fill="#FFFBEB" />
        <circle cx="450" cy="175" r="160" fill="#EFF6FF" />

        {/* Person 1 */}
        <g className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <rect x="80" y="200" width="60" height="80" rx="30" fill="#FECACA" />
            <circle cx="110" cy="170" r="30" fill="#FEE2E2" />
            <circle cx="105" cy="165" r="3" fill="#B91C1C" />
            <circle cx="115" cy="165" r="3" fill="#B91C1C" />
            <path d="M105 175 Q 110 180 115 175" stroke="#B91C1C" strokeWidth="2" fill="none" />
        </g>
        
        {/* Person 2 (Center) */}
        <g className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <rect x="270" y="180" width="80" height="120" rx="40" fill="#A7F3D0" />
            <circle cx="310" cy="140" r="40" fill="#D1FAE5" />
            <circle cx="300" cy="135" r="4" fill="#065F46" />
            <circle cx="320" cy="135" r="4" fill="#065F46" />
            <path d="M305 148 Q 310 155 315 148" stroke="#065F46" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* Person 3 */}
        <g className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <rect x="460" y="210" width="70" height="90" rx="35" fill="#BFDBFE" />
            <circle cx="495" cy="175" r="35" fill="#DBEAFE" />
            <circle cx="488" cy="170" r="3.5" fill="#1E40AF" />
            <circle cx="502" cy="170" r="3.5" fill="#1E40AF" />
            <path d="M490 182 Q 495 188 500 182" stroke="#1E40AF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Floating Icons */}
        <g className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <circle cx="50" cy="100" r="15" fill="#FBBF24" />
            <text x="50" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">+</text>
        </g>
         <g className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <rect x="200" y="80" width="30" height="30" rx="8" fill="#818CF8" transform="rotate(15 200 80)"/>
            <path d="M208 95 L 215 88 L 222 95" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(15 200 80)"/>
        </g>
        <g className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <path d="M400 80 L 415 95 L 430 80 L 415 65 Z" fill="#60A5FA" />
        </g>
    </svg>
);
