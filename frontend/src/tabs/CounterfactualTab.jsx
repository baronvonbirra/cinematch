import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/api';
import { MovieCard } from '../components/MovieCard';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const CounterfactualTab = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scenario, setScenario] = useState('action_lover');

  useEffect(() => {
    if (username) {
      setLoading(true);
      getRecommendations('counterfactual', username, { scenario })
        .then(res => { setData(res); setLoading(false); })
        .catch(() => setLoading(false));
    }
  }, [username, scenario]);

  if (loading) return <LoadingSpinner label="Simulando universo cinematográfico alternativo..." />;
  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="bg-dark-800 border border-dark-700 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-cyan-400">{data.title}</h2>
          <p className="text-sm text-slate-400 mt-1">{data.subtitle}</p>
        </div>

        <select
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          className="bg-dark-900 border border-dark-700 text-white text-sm rounded-lg p-2.5 focus:outline-none focus:border-cyan-500"
        >
          <option value="action_lover">100% Amante de la Acción</option>
          <option value="tarantino_fan">Fanático de Tarantino</option>
          <option value="teen_viewer">Si tuvieras 15 años</option>
          <option value="ultra_critic">Ultra-Crítico Exigente</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};
