import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { XIcon } from './icons/XIcon';
import { PiggyBankLogoIcon } from './icons/PiggyBankLogoIcon';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavigate(Page.Home)} className="flex items-center space-x-2 group">
               <PiggyBankLogoIcon className="h-10 w-10 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
               <span className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">Tu Hucha del Cerdito</span>
            </button>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((page) => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`text-base font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <button onClick={() => handleNavigate(Page.Simulator)} className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-700 transition-colors duration-300">
              Empezar Ahora
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-stone-100">
              <span className="sr-only">Abrir menú</span>
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <HamburgerIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((page) => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'text-slate-600 hover:bg-stone-100 hover:text-slate-900'
                }`}
              >
                {page}
              </button>
            ))}
            <div className="pt-4 px-3">
                 <button onClick={() => handleNavigate(Page.Simulator)} className="w-full bg-slate-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-700 transition-colors duration-300">
                    Empezar Ahora
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;