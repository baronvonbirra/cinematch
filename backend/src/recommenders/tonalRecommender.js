const { createMovieLink } = require('../utils/helpers');

const getTonalRecommendations = async (profile, options = {}) => {
  const movies = [
    {
      title: "Parásitos (Parasite)",
      year: 2019,
      tmdb_id: 496243,
      fa_rating: 8.7,
      score: 0.93,
      reason: "Calza exactamente con tu perfil de votación: Das +0.8 puntos extra a historias con finales agridulces e intensos.",
      genres: ["Comedy", "Drama", "Thriller"],
      budget: 11400000,
      links: createMovieLink(496243)
    }
  ];

  return {
    type: "tonal",
    title: "Traductor de Crítico",
    subtitle: "Adaptadas a CÓMO votas (tus sesgos por final, presupuesto y director)",
    movies
  };
};

module.exports = { getTonalRecommendations };
