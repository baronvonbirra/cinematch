const { createMovieLink } = require('../utils/helpers');

const getForbiddenRecommendations = async (profile, options = {}) => {
  const movies = [
    {
      title: "Cien años de perdón",
      year: 2016,
      tmdb_id: 341855,
      fa_rating: 6.4,
      score: 0.82,
      reason: "Rompe tu sesgo contra producciones nacionales recientes. Usuarios con tu misma matriz de valoración la puntuaron sobre 8.0.",
      genres: ["Thriller", "Crime"],
      budget: 5000000,
      links: createMovieLink(341855)
    }
  ];

  return {
    type: "forbidden",
    title: "La Película Prohibida",
    subtitle: "Títulos fuera de tu zona de confort diseñados para romper tu burbuja",
    movies
  };
};

module.exports = { getForbiddenRecommendations };
