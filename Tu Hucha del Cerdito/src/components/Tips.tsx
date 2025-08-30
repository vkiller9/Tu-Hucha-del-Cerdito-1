import React, { useState, useMemo } from 'react';
import { TIPS_DATA } from '../constants';
import { Tip } from '../types';
import { StarIcon } from './icons/StarIcon';

const TipCard: React.FC<{ tip: Tip; onSelect: () => void; }> = ({ tip, onSelect }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer h-full" onClick={onSelect}>
      <div className="flex items-center space-x-4">
        <div className="bg-yellow-100 p-3 rounded-full">
          <tip.icon className="h-6 w-6 text-yellow-600" />
        </div>
        <div>
            <span className="text-xs font-semibold text-yellow-600 uppercase">{tip.category}</span>
            <h3 className="text-lg font-semibold text-slate-800">{tip.title}</h3>
        </div>
      </div>
      <p className="mt-4 text-slate-600 flex-grow">{tip.description}</p>
      <div className="mt-4 text-left text-sm font-semibold text-slate-700 group-hover:text-slate-900">
        Leer más...
      </div>
    </div>
  );
};

const FeaturedTipCard: React.FC<{ tip: Tip; onSelect: () => void; }> = ({ tip, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center gap-8 border-2 border-yellow-200"
    >
      <div className="flex-shrink-0 bg-white p-5 rounded-2xl shadow-md">
        <StarIcon className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-500" />
      </div>
      <div className="text-center md:text-left">
        <span className="text-sm font-bold text-yellow-700 uppercase tracking-widest">Guía Principal</span>
        <h3 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">{tip.title}</h3>
        <p className="mt-3 text-slate-600 max-w-2xl">{tip.description}</p>
        <button className="mt-6 font-semibold text-slate-800 bg-white px-6 py-3 rounded-full shadow-sm hover:bg-slate-50 transition-all transform hover:scale-105">
          Empezar aquí
        </button>
      </div>
    </div>
  );
};

interface TipsProps {
  onSelectTip: (tip: Tip) => void;
}

const Tips: React.FC<TipsProps> = ({ onSelectTip }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const featuredTip = useMemo(() => TIPS_DATA.find(tip => tip.featured), []);
  const regularTips = useMemo(() => TIPS_DATA.filter(tip => !tip.featured), []);
  
  const categories = ['Todos', ...Array.from(new Set(regularTips.map(tip => tip.category)))];

  const filteredTips = useMemo(() => {
    return regularTips.filter(tip => {
      const matchesCategory = selectedCategory === 'Todos' || tip.category === selectedCategory;
      const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || tip.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory, regularTips]);

  return (
    <div className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Blog y Consejos para tu bienestar financiero</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Tu punto de partida. Empieza con nuestra guía principal y luego explora más ideas para tomar el control de tu dinero.
          </p>
        </div>

        <div className="mt-12 space-y-12">
            {featuredTip && <FeaturedTipCard tip={featuredTip} onSelect={() => onSelectTip(featuredTip)} />}
            
            <div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <input
                        type="text"
                        placeholder="Buscar en otros consejos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-72 px-4 py-3 border border-stone-300 rounded-full focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                    />
                    <div className="flex flex-wrap justify-center gap-2 bg-stone-100 p-1 rounded-full">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                                    selectedCategory === category ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:bg-white/60'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTips.map(tip => <TipCard key={tip.id} tip={tip} onSelect={() => onSelectTip(tip)} />)}
                </div>
                {filteredTips.length === 0 && (
                    <p className="text-center mt-12 text-slate-500">No se encontraron resultados con esos criterios.</p>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
