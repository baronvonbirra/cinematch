const { createMovieLink } = require('../utils/helpers');

const getTrendRecommendations = async (profile, options = {}) => {
  const movies = [
    {
      title: "Monster (Kaibutsu)",
      year: 2023,
      tmdb_id: 1050035,
      fa_rating: 7.9,
      score: 0.89,
      reason: "Menos de 2,000 votos en FilmAffinity pero con puntuación en ascenso rápido en festivales.",
      genres: ["Drama", "Mystery"],
      budget: 5000000,
      links: createMovieLink(1050035)
    }
  ];

  return {
    type: "trend",
    title: "Descubridor de Tendencias",
    subtitle: "Películas prácticamente desconocidas a punto de explotar que coinciden con tu perfil",
    movies
  };
};

module.exports = { getTrendRecommendations };
