import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="2" dy="4" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/> 
                </feMerge>
            </filter>
        </defs>

        {/* Ground */}
        <path d="M-10 350 Q250 320 510 350 L510 410 L-10 410 Z" fill="#E5E7EB"/>

        {/* Piggy Bank */}
        <g filter="url(#shadow)" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Body */}
            <path d="M200 250 C 150 250, 140 200, 180 180 C 220 160, 300 160, 340 190 C 380 220, 380 280, 330 300 C 280 320, 250 320, 220 300 C 190 280, 190 260, 200 250 Z" fill="#FBBF24"/>
            {/* Snout */}
            <ellipse cx="175" cy="225" rx="25" ry="20" fill="#FDE68A"/>
            <ellipse cx="170" cy="225" rx="4" ry="6" fill="#FBBF24"/>
            <ellipse cx="180" cy="225" rx="4" ry="6" fill="#FBBF24"/>
            {/* Eye */}
            <circle cx="230" cy="215" r="7" fill="#1F2937"/>
            <circle cx="232" cy="213" r="2" fill="white"/>
            {/* Ear */}
            <path d="M260 170 C 270 150, 290 160, 280 180 Z" fill="#FDE68A"/>
            {/* Slot */}
            <rect x="250" y="185" width="40" height="10" rx="5" fill="#B45309" transform="rotate(-10 270 190)"/>
            {/* Tail */}
            <path d="M350 230 Q 370 220 370 240 T 350 250" stroke="#FDE68A" strokeWidth="6" fill="none" strokeLinecap="round"/>
            {/* Legs */}
            <rect x="220" y="295" width="25" height="40" rx="12.5" fill="#FDE68A"/>
            <rect x="300" y="295" width="25" height="40" rx="12.5" fill="#FDE68A"/>
        </g>

        {/* Plant Stalk from piggy */}
         <path d="M270 190 Q 260 150, 280 120 T 300 80" stroke="#16A34A" strokeWidth="8" fill="none" strokeLinecap="round" className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}/>

        {/* Coins as leaves/flowers */}
        <g className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <circle cx="305" cy="75" r="20" fill="#FBBF24" filter="url(#shadow)"/>
            <text x="305" y="81" textAnchor="middle" fill="#A26207" fontSize="18" fontWeight="bold">€</text>
        </g>
        <g className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <circle cx="250" cy="110" r="15" fill="#FBBF24" filter="url(#shadow)"/>
            <text x="250" y="115" textAnchor="middle" fill="#A26207" fontSize="14" fontWeight="bold">€</text>
        </g>
         <g className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <circle cx="330" cy="130" r="18" fill="#FBBF24" filter="url(#shadow)"/>
            <text x="330" y="136" textAnchor="middle" fill="#A26207" fontSize="16" fontWeight="bold">€</text>
        </g>

        {/* Watering Can */}
        <g className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <path d="M80 100 C 50 100, 40 140, 70 170 L 130 170 C 160 140, 150 100, 120 100 Z" fill="#93C5FD"/>
            <path d="M130 110 L 160 90 L 170 100 L 140 120 Z" fill="#60A5FA"/>
            <path d="M40 130 Q 20 120, 30 100" stroke="#60A5FA" strokeWidth="10" fill="none" strokeLinecap="round"/>
            {/* Water drops */}
            <path d="M165 110 Q 170 120 160 130" fill="#BFDBFE"/>
            <path d="M175 120 Q 180 130 170 140" fill="#BFDBFE"/>
             <path d="M185 130 Q 190 140 180 150" fill="#BFDBFE"/>
        </g>
    </svg>
);
