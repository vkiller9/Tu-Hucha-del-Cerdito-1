
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base text-slate-500">
          &copy; {new Date().getFullYear()} Tu Hucha del Cerdito. Todos los derechos reservados.
        </p>
         <p className="mt-2 text-sm text-slate-400">
          Hecho con el objetivo de hacer las finanzas accesibles para todos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;