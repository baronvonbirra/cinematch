import React from 'react';
import { ExternalLink, Star, DollarSign } from 'lucide-react';

export const MovieCard = ({ movie }) => {
  return (
    <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 hover:border-dark-600 transition-all shadow-md flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-lg font-bold text-white leading-snug">
            {movie.title} <span className="text-slate-400 font-normal">({movie.year})</span>
          </h3>
          {movie.fa_rating && (
            <div className="flex items-center gap-1 bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-md text-xs font-semibold border border-amber-500/20">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{movie.fa_rating}</span>
            </div>
          )}
        </div>

        {movie.reason && (
          <p className="text-sm text-slate-300 bg-dark-900/60 p-3 rounded-lg border border-dark-700/50 mb-3 leading-relaxed">
            💡 {movie.reason}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-3">
          {(movie.genres || []).map((genre, i) => (
            <span key={i} className="text-xs bg-dark-700 text-slate-300 px-2 py-0.5 rounded">
              {genre}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-dark-700/50 flex items-center justify-between text-xs text-slate-400">
        {movie.budget ? (
          <span className="flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5" />
            {(movie.budget / 1000000).toFixed(1)}M
          </span>
        ) : <span />}

        <div className="flex gap-2">
          {movie.links?.filmaffinity && (
            <a
              href={movie.links.filmaffinity}
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 flex items-center gap-1 transition-colors"
            >
              FilmAffinity <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
