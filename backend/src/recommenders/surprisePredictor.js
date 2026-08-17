const { createMovieLink } = require('../utils/helpers');

const getSurprisePredictations = async (profile, options = {}) => {
  const movies = [
    {
      title: "La Llegada (Arrival)",
      year: 2016,
      tmdb_id: 329865,
      fa_rating: 7.8,
      score: 0.92,
      reason: "Predicción estándar: 7.5/10. Predicción real: 9.1/10. Sorpresa: +1.6 por diseño sonoro y resolución emocional.",
      genres: ["Sci-Fi", "Drama", "Mystery"],
      budget: 47000000,
      links: createMovieLink(329865)
    }
  ];

  return {
    type: "surprise",
    title: "El Algoritmo de la Sorpresa",
    subtitle: "Películas con discrepancia masiva entre tu predicción inicial y la real",
    movies
  };
};

module.exports = { getSurprisePredictations };
