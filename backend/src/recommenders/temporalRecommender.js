const { createMovieLink } = require('../utils/helpers');

const getTemporalRecommendations = async (profile, options = {}) => {
  const movies = [
    {
      title: "Drive My Car",
      year: 2021,
      tmdb_id: 739405,
      fa_rating: 7.6,
      score: 0.89,
      reason: "Calza exactamente con tu era favorita 'Arthouse Awakening' que no pudiste ver a tiempo.",
      genres: ["Drama"],
      budget: 1200000,
      links: createMovieLink(739405)
    },
    {
      title: "Zone of Interest",
      year: 2023,
      tmdb_id: 467244,
      fa_rating: 7.7,
      score: 0.86,
      reason: "Evolución perfecta para tu era actual 'Eclectic Mastery'.",
      genres: ["Drama", "History", "War"],
      budget: 15000000,
      links: createMovieLink(467244)
    }
  ];

  return {
    type: "temporal",
    title: "Timeline Cinemático",
    subtitle: "Joyas ocultas de tus eras doradas de consumo cinematográfico",
    movies
  };
};

module.exports = { getTemporalRecommendations };
