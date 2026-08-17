import React from 'react';
import { Film, User, Sparkles, Flame } from 'lucide-react';

export const Dashboard = ({ profile }) => {
  if (!profile) return null;

  const movieCount = profile.movies?.length || 0;
  const topGenres = Object.entries(profile.preferences?.genres || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const topDirectors = Object.entries(profile.preferences?.directors_top || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-red-500/10 text-red-400 rounded-lg">
          <User className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Usuario</p>
          <p className="text-sm font-bold text-white">{profile.username}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
          <Film className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Películas Analizadas</p>
          <p className="text-sm font-bold text-white">{movieCount}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Top Géneros</p>
          <p className="text-sm font-bold text-white">
            {topGenres.map(([g]) => g).join(', ') || 'N/A'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
          <Flame className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Director Favorito</p>
          <p className="text-sm font-bold text-white">
            {topDirectors[0]?.[0] || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};
