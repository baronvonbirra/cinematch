import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { Analysis } from './pages/Analysis';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useAnalysis } from './hooks/useAnalysis';

export const App = () => {
  const { username, profile, loading, error, startAnalysis } = useAnalysis();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col justify-between">
        <header className="border-b border-dark-800 bg-dark-900/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
              <span className="text-2xl">🎬</span>
              <span className="text-xl font-black text-white tracking-wider">CineMatch</span>
            </div>
            {profile && (
              <button
                onClick={() => window.location.reload()}
                className="text-xs bg-dark-800 hover:bg-dark-700 text-slate-300 px-3 py-1.5 rounded-lg border border-dark-700 transition-colors"
              >
                Nuevo Análisis
              </button>
            )}
          </div>
        </header>

        <main className="flex-1">
          {loading ? (
            <LoadingSpinner label="Analizando tu perfil de FilmAffinity..." />
          ) : profile ? (
            <Analysis profile={profile} username={username} />
          ) : (
            <Home onAnalyze={startAnalysis} loading={loading} error={error} />
          )}
        </main>

        <footer className="border-t border-dark-800 py-6 text-center text-xs text-slate-500">
          <p>© 2026 CineMatch. Recomendaciones inteligentes de películas.</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App;
