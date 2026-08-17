const { createMovieLink } = require('../utils/helpers');

const getAntiRecommendations = async (profile, options = {}) => {
  const movies = [
    {
      title: "La vida es bella",
      year: 1997,
      tmdb_id: 637,
      fa_rating: 8.8,
      score: 0.87,
      reason: "Odias las comedias convencionales (promedio 5.2), pero usuarios con tu perfil exacto la votaron 9/10 porque trasciende el género.",
      genres: ["Comedy", "Drama", "War"],
      budget: 20000000,
      links: createMovieLink(637)
    },
    {
      title: "Paddington 2",
      year: 2017,
      tmdb_id: 346648,
      fa_rating: 7.8,
      score: 0.84,
      reason: "Cine familiar infravalorado por tu perfil, pero con maestría narrativa impecable.",
      genres: ["Comedy", "Adventure", "Family"],
      budget: 40000000,
      links: createMovieLink(346648)
    }
  ];

  return {
    type: "anti",
    title: "Películas Malditas",
    subtitle: "Películas que deberías ODIAR según tu perfil pero que te van a fascinar",
    movies
  };
};

module.exports = { getAntiRecommendations };
