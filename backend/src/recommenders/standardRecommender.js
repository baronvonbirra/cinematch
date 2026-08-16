const { createMovieLink } = require('../utils/helpers');

const getStandardRecommendations = async (profile, options = {}) => {
  const movies = [
    {
      title: "Oppenheimer",
      year: 2023,
      tmdb_id: 872585,
      fa_rating: 8.2,
      score: 0.94,
      reason: "Dirigida por Christopher Nolan, tu director favorito, con temática histórica intensa.",
      genres: ["Biography", "Drama", "History"],
      budget: 100000000,
      links: createMovieLink(872585)
    },
    {
      title: "Dune: Parte Dos",
      year: 2024,
      tmdb_id: 693134,
      fa_rating: 8.3,
      score: 0.91,
      reason: "Alta afinidad con género Sci-Fi y valoración de directores aclamados.",
      genres: ["Sci-Fi", "Adventure"],
      budget: 190000000,
      links: createMovieLink(693134)
    },
    {
      title: "Anatomía de una caída",
      year: 2023,
      tmdb_id: 915935,
      fa_rating: 7.9,
      score: 0.88,
      reason: "Drama de ritmo intrincado perfecto para tu perfil analítico.",
      genres: ["Drama", "Crime", "Thriller"],
      budget: 6200000,
      links: createMovieLink(915935)
    }
  ];

  return {
    type: "standard",
    title: "Recomendaciones Principales",
    subtitle: "Basadas en tu combinación perfecta de directores, géneros y valoraciones",
    movies
  };
};

module.exports = { getStandardRecommendations };
