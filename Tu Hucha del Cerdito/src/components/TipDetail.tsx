import React from 'react';
import { Tip, ContentBlock } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface TipDetailProps {
  tip: Tip;
  onClose: () => void;
}

const TipDetail: React.FC<TipDetailProps> = ({ tip, onClose }) => {
  return (
    <div className="py-20 sm:py-24 animate-fade-in-up">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onClose} className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 font-semibold mb-8 group">
          <ArrowLeftIcon className="h-5 w-5 transform transition-transform group-hover:-translate-x-1" />
          <span>Volver a todos los consejos</span>
        </button>

        <article className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
          <div className="mb-8 flex items-center space-x-4">
            <div className="bg-yellow-100 p-4 rounded-full">
                <tip.icon className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
                <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">{tip.category}</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">{tip.title}</h1>
            </div>
          </div>
          
          <div className="border-t border-b border-stone-200 py-6 my-8">
            <div className="flex items-center space-x-3">
              <tip.author.avatar className="h-12 w-12 text-slate-500" />
              <div>
                <p className="font-semibold text-slate-800">{tip.author.name}</p>
                <p className="text-sm text-slate-500">Tu compañera en el viaje hacia el bienestar financiero</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            {tip.content.map((item, index) => {
              if (typeof item === 'string') {
                return (
                  <p key={index} className="leading-relaxed">
                    {item}
                  </p>
                );
              }
              // It's a visual block
              const BlockIcon = item.icon;
              return (
                <div key={index} className="!mt-10 p-6 bg-stone-100 rounded-xl border border-stone-200 not-prose">
                    <div className="flex items-center space-x-4">
                        <div className="bg-white p-3 rounded-full shadow-sm">
                            <BlockIcon className="h-7 w-7 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800">{item.subheading}</h3>
                    </div>
                    <p className="mt-4 text-slate-600 text-base leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </div>
  );
};

export default TipDetail;
