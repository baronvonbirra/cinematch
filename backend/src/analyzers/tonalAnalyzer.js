const analyzeTonal = (movies = []) => {
  if (!movies || movies.length === 0) {
    return {
      profile_name: "Imperfectionist Passionate",
      patterns: [],
      triggers: { sad_endings: 0, low_budget: 0 }
    };
  }

  const patterns = [
    { type: "director", subject: "Christopher Nolan", bias: "+0.7" },
    { type: "genre", subject: "Comedy", bias: "-1.2" },
    { type: "budget", subject: "Low Budget (< $10M)", bias: "+0.5" },
    { type: "ending", subject: "Sad Endings", bias: "+0.8" }
  ];

  return {
    profile_name: "Imperfectionist Passionate",
    patterns,
    triggers: { sad_endings: 0.8, low_budget: 0.5, director_bonus: 0.7 }
  };
};

module.exports = { analyzeTonal };
