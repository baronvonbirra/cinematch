import React from 'react';
import { Film, Zap, Lock, ShieldCheck } from 'lucide-react';
import { InputForm } from '../components/InputForm';

export const Home = ({ onAnalyze, loading, error }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold mb-6">
        <Film className="w-4 h-4" />
        <span>Recomendador de Cine Inteligente sin IA</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
        Descubre cine verdaderamente relevante adaptado a ti
      </h1>

      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        Analizamos profundamente tu perfil de FilmAffinity desde 8 ángulos distintos para entregarte recomendaciones no obvias y sin sesgos.
      </p>

      <InputForm onSubmit={onAnalyze} loading={loading} />

      {error && (
        <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-sm max-w-xl mx-auto">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
        <div className="bg-dark-800 border border-dark-700 p-5 rounded-xl">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg w-fit mb-3">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Respuesta Ultra Rápida</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Caché en Redis de alta velocidad (&lt;100ms) para consultas posteriores instantáneas.
          </p>
        </div>

        <div className="bg-dark-800 border border-dark-700 p-5 rounded-xl">
          <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg w-fit mb-3">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Máxima Privacidad</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Tus datos se mantienen en caché de forma temporal durante 30 días y luego desaparecen automáticamente.
          </p>
        </div>

        <div className="bg-dark-800 border border-dark-700 p-5 rounded-xl">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg w-fit mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Lógica Pura y Transparente</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sin algoritmos oscuros. Explicación clara del motivo de cada recomendación dada.
          </p>
        </div>
      </div>
    </div>
  );
};
