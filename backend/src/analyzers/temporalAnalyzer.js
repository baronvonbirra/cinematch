const analyzeTemporal = (movies = []) => {
  if (!movies || movies.length === 0) {
    return { eras: [] };
  }

  const yearMap = {};
  movies.forEach(m => {
    const year = m.date_voted ? new Date(m.date_voted).getFullYear() : (m.year || 2020);
    if (!yearMap[year]) yearMap[year] = [];
    yearMap[year].push(m);
  });

  const years = Object.keys(yearMap).sort((a, b) => Number(a) - Number(b));

  if (years.length === 0) {
    return { eras: [] };
  }

  const eras = [];
  const chunkSize = Math.max(1, Math.ceil(years.length / 3));

  for (let i = 0; i < years.length; i += chunkSize) {
    const chunkYears = years.slice(i, i + chunkSize);
    const chunkMovies = chunkYears.flatMap(y => yearMap[y]);

    const startYear = chunkYears[0];
    const endYear = chunkYears[chunkYears.length - 1];

    const avg = parseFloat((chunkMovies.reduce((acc, m) => acc + (m.rating || 0), 0) / chunkMovies.length).toFixed(1));

    const genreCount = {};
    chunkMovies.forEach(m => (m.genres || []).forEach(g => genreCount[g] = (genreCount[g] || 0) + 1));
    const topGenres = Object.keys(genreCount).sort((a, b) => genreCount[b] - genreCount[a]).slice(0, 2);

    let eraName = "Blockbuster Era";
    if (i / chunkSize >= 1 && i / chunkSize < 2) eraName = "Arthouse Awakening";
    if (i / chunkSize >= 2) eraName = "Eclectic Mastery";

    eras.push({
      name: eraName,
      years: `${startYear}-${endYear}`,
      avg,
      genres: topGenres,
      shift_trigger: topGenres[0] ? `Expansion in ${topGenres[0]}` : "General Shift"
    });
  }

  return { eras };
};

module.exports = { analyzeTemporal };
