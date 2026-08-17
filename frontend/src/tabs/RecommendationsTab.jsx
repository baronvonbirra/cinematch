import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/api';
import { MovieCard } from '../components/MovieCard';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const RecommendationsTab = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      setLoading(true);
      getRecommendations('standard', username)
        .then(res => { setData(res); setLoading(false); })
        .catch(() => setLoading(false));
    }
  }, [username]);

  if (loading) return <LoadingSpinner label="Calculando mejores recomendaciones..." />;
  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="bg-dark-800 border border-dark-700 p-4 rounded-xl">
        <h2 className="text-xl font-bold text-white">{data.title}</h2>
        <p className="text-sm text-slate-400 mt-1">{data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};
