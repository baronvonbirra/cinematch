import React from 'react';

export const LoadingSpinner = ({ label = 'Cargando análisis...' }) => {
  return (
    <div className="flex flex-col items-center justify-center my-12 gap-3">
      <div className="w-10 h-10 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin"></div>
      <p className="text-sm text-slate-400 font-medium">{label}</p>
    </div>
  );
};
