const config = require('../config/env');

const fetchMovieFromTmdb = async (movieId) => {
  return {
    id: movieId,
    title: `TMDB Movie ${movieId}`,
    overview: "Pelicula enriquecida desde TMDb API.",
    poster_path: "/sample_poster.jpg",
    vote_average: 8.2,
    vote_count: 1540
  };
};

module.exports = { fetchMovieFromTmdb };
