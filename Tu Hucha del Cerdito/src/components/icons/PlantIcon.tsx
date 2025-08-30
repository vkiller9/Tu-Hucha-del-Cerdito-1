
import React from 'react';

export const PlantIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 17H8V16C8 14.9 8.9 14 10 14H14C15.1 14 16 14.9 16 16V17ZM12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13ZM18 10.5C18 11.33 17.33 12 16.5 12C15.67 12 15 11.33 15 10.5C15 9.67 15.67 9 16.5 9C17.33 9 18 9.67 18 10.5ZM19 14.73C18.42 14.28 17.7 14 17 14H16.5L18.5 16H19V14.73Z" fill="currentColor"/>
    <path d="M7 10h3v10H7z" fill="currentColor" transform="translate(3, -5)" />
    <path d="M17 12c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" fill="currentColor" transform="translate(-2, 0)"/>
    <path d="M12 1c-4.97 0-9 4.03-9 9v7h18v-7c0-4.97-4.03-9-9-9zm-3 9h6v2H9v-2zm0 3h6v2H9v-2z" fill="currentColor" transform="translate(0, 5)"/>
  </svg>
);
