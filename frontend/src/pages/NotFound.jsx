import React from 'react';

export const NotFound = ({ onGoHome }) => {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold text-white mb-2">404 - Página no encontrada</h2>
      <p className="text-slate-400 mb-6">La página que buscas no existe o ha sido movida.</p>
      <button
        onClick={onGoHome}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Volver al inicio
      </button>
    </div>
  );
};
