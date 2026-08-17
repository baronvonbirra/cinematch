import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/api';
import { MovieCard } from '../components/MovieCard';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const EmotionalTab = ({ username, profile }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      setLoading(true);
      getRecommendations('emotional', username)
        .then(res => { setData(res); setLoading(false); })
        .catch(() => setLoading(false));
    }
  }, [username]);

  if (loading) return <LoadingSpinner label="Agrupando películas por respuesta emocional..." />;
  if (!data) return null;

  const clusters = profile?.emotional?.clusters || [];

  return (
    <div className="space-y-6">
      <div className="bg-dark-800 border border-dark-700 p-4 rounded-xl">
        <h2 className="text-xl font-bold text-emerald-400">{data.title}</h2>
        <p className="text-sm text-slate-400 mt-1">{data.subtitle}</p>
      </div>

      {clusters.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {clusters.map((cluster, index) => (
            <div key={index} className="bg-dark-800 border border-dark-700 p-4 rounded-xl flex items-start gap-3">
              <span className="text-3xl">{cluster.emoji}</span>
              <div>
                <h4 className="text-sm font-bold text-white">{cluster.name}</h4>
                <p className="text-xs text-emerald-400 font-semibold mt-0.5">Rating Promedio: {cluster.avg_rating}/10</p>
                <p className="text-xs text-slate-400 mt-1">Ejemplos: {cluster.movies?.join(', ')}</p>
              </div>
            </div>
          ))}
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
