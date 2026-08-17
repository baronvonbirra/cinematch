const analyzeEmotional = (movies = []) => {
  const clusters = [
    {
      name: "Películas que te destrozan",
      emoji: "💔",
      avg_rating: 8.5,
      movies: movies.slice(0, 3).map(m => m.title)
    },
    {
      name: "Películas que te hacen sentir vivo",
      emoji: "⚡",
      avg_rating: 8.8,
      movies: movies.slice(3, 6).map(m => m.title)
    },
    {
      name: "Películas hipnóticas",
      emoji: "🌀",
      avg_rating: 8.2,
      movies: movies.slice(6, 9).map(m => m.title)
    },
    {
      name: "Películas absurdas geniales",
      emoji: "🎭",
      avg_rating: 7.9,
      movies: movies.slice(9, 12).map(m => m.title)
    }
  ];

  return { clusters };
};

module.exports = { analyzeEmotional };
