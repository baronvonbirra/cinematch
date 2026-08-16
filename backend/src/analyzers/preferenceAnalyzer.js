const analyzePreferences = (movies = []) => {
  if (!movies || movies.length === 0) {
    return { genres: {}, directors_top: {}, actors_top: {} };
  }

  const genreTotals = {};
  const genreCounts = {};
  const directorTotals = {};
  const directorCounts = {};
  const actorTotals = {};
  const actorCounts = {};

  movies.forEach(movie => {
    const rating = Number(movie.rating) || 0;

    (movie.genres || []).forEach(genre => {
      genreTotals[genre] = (genreTotals[genre] || 0) + rating;
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });

    if (movie.director) {
      directorTotals[movie.director] = (directorTotals[movie.director] || 0) + rating;
      directorCounts[movie.director] = (directorCounts[movie.director] || 0) + 1;
    }

    (movie.actors || []).forEach(actor => {
      actorTotals[actor] = (actorTotals[actor] || 0) + rating;
      actorCounts[actor] = (actorCounts[actor] || 0) + 1;
    });
  });

  const genres = {};
  Object.keys(genreTotals).forEach(g => {
    genres[g] = parseFloat((genreTotals[g] / genreCounts[g]).toFixed(1));
  });

  const directors_top = {};
  Object.keys(directorTotals).forEach(d => {
    directors_top[d] = parseFloat((directorTotals[d] / directorCounts[d]).toFixed(1));
  });

  const actors_top = {};
  Object.keys(actorTotals).forEach(a => {
    actors_top[a] = parseFloat((actorTotals[a] / actorCounts[a]).toFixed(1));
  });

  return { genres, directors_top, actors_top };
};

module.exports = { analyzePreferences };
