
import React from 'react';
import { Page } from '../types';
import { HeroIllustration } from './illustrations/HeroIllustration';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Haz crecer tu dinero, <span className="text-yellow-500">moneda a moneda.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            En "Tu Hucha del Cerdito" hacemos que ahorrar y aprender sobre finanzas sea fácil y divertido. Descubre herramientas simples para cuidar tu dinero y alcanzar tus metas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button onClick={() => onNavigate(Page.Quiz)} className="w-full sm:w-auto bg-yellow-400 text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Pon a Prueba tu Saber
            </button>
            <button onClick={() => onNavigate(Page.Tips)} className="w-full sm:w-auto text-slate-700 font-semibold px-8 py-4 rounded-full hover:bg-yellow-100 transition-colors duration-300">
              Explorar Consejos
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <HeroIllustration className="w-full max-w-lg h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;