import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/api';
import { MovieCard } from '../components/MovieCard';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const TonalTab = ({ username, profile }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      setLoading(true);
      getRecommendations('tonal', username)
        .then(res => { setData(res); setLoading(false); })
        .catch(() => setLoading(false));
    }
  }, [username]);

  if (loading) return <LoadingSpinner label="Traduciendo tus sesgos de votación..." />;
  if (!data) return null;

  const tonal = profile?.tonal;

  return (
    <div className="space-y-6">
      <div className="bg-dark-800 border border-dark-700 p-4 rounded-xl">
        <h2 className="text-xl font-bold text-indigo-400">{data.title}</h2>
        <p className="text-sm text-slate-400 mt-1">{data.subtitle}</p>
      </div>

      {tonal && (
        <div className="bg-dark-800 border border-dark-700 p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between border-b border-dark-700 pb-3">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Perfil Tonal Detectado</span>
            <span className="text-sm font-bold text-indigo-400">{tonal.profile_name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {(tonal.patterns || []).map((pattern, idx) => (
              <div key={idx} className="bg-dark-900 border border-dark-700 p-3 rounded-lg flex justify-between items-center">
                <span className="text-xs text-slate-300">{pattern.type}: <strong>{pattern.subject}</strong></span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${pattern.bias.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                  {pattern.bias} pts
                </span>
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
