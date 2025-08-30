import React from 'react';

export const FinancialGrowthIllustration: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 552 419" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_402_2)">
            <rect width="552" height="419" rx="24" fill="#F9F8F6"/>
            <circle cx="276" cy="210" r="180" fill="#FFFBEB"/>
            <path d="M228.5 258.5C220.5 236 226.5 208 238 188.5L260 154.5L285.5 188.5C296.5 208 303.5 235 294 258.5" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M260 155L251 133" stroke="#1E293B" strokeWidth="6" strokeLinecap="round"/>
            <path d="M260 119C260 119 264.5 110.5 273 113.5C281.5 116.5 279 127 279 127" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M260 119C260 119 255.5 110.5 247 113.5C238.5 116.5 241 127 241 127" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M260 259V293" stroke="#1E293B" strokeWidth="6" strokeLinecap="round"/>
            <rect x="226" y="290" width="68" height="15" rx="7.5" fill="#fff" stroke="#1E293B" strokeWidth="6"/>

            {/* Coin 1 */}
            <g className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <circle cx="160" cy="180" r="30" fill="#FBBF24"/>
                <circle cx="160" cy="180" r="22" fill="none" stroke="#fff" strokeWidth="3"/>
                <text x="160" y="186" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">$</text>
            </g>

            {/* Coin 2 */}
            <g className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <circle cx="390" cy="220" r="35" fill="#FBBF24"/>
                <circle cx="390" cy="220" r="27" fill="none" stroke="#fff" strokeWidth="3"/>
                <text x="390" y="227" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">$</text>
            </g>

            {/* Coin 3 */}
            <g className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <circle cx="270" cy="80" r="25" fill="#FBBF24"/>
                <circle cx="270" cy="80" r="18" fill="none" stroke="#fff" strokeWidth="3"/>
                <text x="270" y="86" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">$</text>
            </g>

             {/* Person */}
            <g className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <path d="M360 320 C 360 290, 400 290, 400 320" fill="#818CF8"/>
                <circle cx="380" cy="280" r="20" fill="#C7D2FE"/>
                <path d="M370 275 C 375 270, 385 270, 390 275" stroke="#4338CA" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>

        </g>
        <defs>
            <clipPath id="clip0_402_2">
                <rect width="552" height="419" rx="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);
