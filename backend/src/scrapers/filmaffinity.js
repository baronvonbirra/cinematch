const generateMockMovies = (username) => {
  const sampleDirectors = ["Christopher Nolan", "Quentin Tarantino", "Denis Villeneuve", "Greta Gerwig", "Hayao Miyazaki", "Martin Scorsese", "Paul Thomas Anderson"];
  const sampleGenres = ["Drama", "Thriller", "Sci-Fi", "Comedy", "Action", "Romance", "Animation", "Crime"];

  const movies = [];
  const baseCount = 50;

  for (let i = 1; i <= baseCount; i++) {
    const mainGenre = sampleGenres[i % sampleGenres.length];
    const secondGenre = sampleGenres[(i + 3) % sampleGenres.length];
    const director = sampleDirectors[i % sampleDirectors.length];

    let rating = 6 + (i % 5);
    if (director === "Christopher Nolan") rating = 9;
    if (mainGenre === "Comedy") rating = 5;

    movies.push({
      id: i,
      title: `Movie ${i} (${director})`,
      year: 1990 + (i % 34),
      genres: [mainGenre, secondGenre],
      director: director,
      actors: [`Actor A${i}`, `Actor B${i}`],
      rating: rating,
      date_voted: new Date(2016 + Math.floor(i / 10), (i % 12), 15).toISOString().split('T')[0],
      budget: 5000000 + (i * 2000000),
      dark_tone: (i % 3 === 0),
      sad_ending: (i % 4 === 0),
      fa_votes: 12000 + i * 500
    });
  }
  return movies;
};

const scrapeFilmAffinityProfile = async (username) => {
  if (!username) {
    throw new Error('Username is required');
  }

  const movies = generateMockMovies(username);

  return {
    username,
    filmaffinity_id: Math.floor(Math.random() * 90000) + 10000,
    scraped_at: new Date().toISOString(),
    movies
  };
};

module.exports = {
  scrapeFilmAffinityProfile
};
