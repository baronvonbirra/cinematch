import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const InputForm = ({ onSubmit, loading }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto my-6">
      <div className="relative flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Introduce tu usuario de FilmAffinity (ej: cinefilo_top)..."
          disabled={loading}
          className="w-full bg-dark-800 border border-dark-700 text-white pl-4 pr-32 py-3 rounded-xl focus:outline-none focus:border-red-500 transition-colors shadow-inner"
        />
        <button
          type="submit"
          disabled={loading || !value.trim()}
          className="absolute right-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>{loading ? 'Analizando...' : 'Analizar'}</span>
        </button>
      </div>
    </form>
  );
};
