const createMovieLink = (id) => ({
  filmaffinity: `https://www.filmaffinity.com/es/film${id}.html`,
  tmdb: `https://www.themoviedb.org/movie/${id}`,
  vote: `https://www.filmaffinity.com/es/film${id}.html#vote`
});

module.exports = { createMovieLink };
