const { createMovieLink } = require('../utils/helpers');

const getEmotionalRecommendations = async (profile, options = {}) => {
  const movies = [
    {
      title: "Requiem por un sueño",
      year: 2000,
      tmdb_id: 641,
      fa_rating: 7.9,
      score: 0.90,
      reason: "Cluster Emotional: 'Películas que te destrozan'. Alta intensidad sensorial e impacto emocional.",
      genres: ["Drama"],
      budget: 4500000,
      links: createMovieLink(641)
    },
    {
      title: "2001: Una odisea del espacio",
      year: 1968,
      tmdb_id: 62,
      fa_rating: 8.3,
      score: 0.88,
      reason: "Cluster Emotional: 'Películas hipnóticas'. Atmósfera inmersiva y ritmo contemplativo.",
      genres: ["Sci-Fi", "Mystery"],
      budget: 10500000,
      links: createMovieLink(62)
    }
  ];

  return {
    type: "emotional",
    title: "Películas Gemelas Ocultas",
    subtitle: "Agrupadas por el impacto emocional y la sensación visceral que te provocan",
    movies
  };
};

module.exports = { getEmotionalRecommendations };
