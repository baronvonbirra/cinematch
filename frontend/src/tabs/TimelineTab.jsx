import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/api';
import { MovieCard } from '../components/MovieCard';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const TimelineTab = ({ username, profile }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      setLoading(true);
      getRecommendations('temporal', username)
        .then(res => { setData(res); setLoading(false); })
        .catch(() => setLoading(false));
    }
  }, [username]);

  if (loading) return <LoadingSpinner label="Generando tu timeline cinematográfico..." />;
  if (!data) return null;

  const eras = profile?.temporal?.eras || [];

  return (
    <div className="space-y-6">
      <div className="bg-dark-800 border border-dark-700 p-4 rounded-xl">
        <h2 className="text-xl font-bold text-amber-400">{data.title}</h2>
        <p className="text-sm text-slate-400 mt-1">{data.subtitle}</p>
      </div>

      {eras.length > 0 && (
        <div className="bg-dark-800 border border-dark-700 p-5 rounded-xl space-y-3">
          <h3 className="text-md font-semibold text-white">Tus Eras Detectadas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {eras.map((era, i) => (
              <div key={i} className="bg-dark-900 border border-dark-700 p-3 rounded-lg">
                <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-mono">
                  {era.years}
                </span>
                <p className="text-sm font-bold text-white mt-1">{era.name}</p>
                <p className="text-xs text-slate-400 mt-1">
                  Promedio: <span className="text-amber-400 font-semibold">{era.avg}/10</span>
                </p>
                <p className="text-xs text-slate-400">Gén: {era.genres?.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};
