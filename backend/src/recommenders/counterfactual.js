const { createMovieLink } = require('../utils/helpers');

const getCounterfactualRecommendations = async (profile, options = {}) => {
  const scenario = options.scenario || "action_lover";

  const movies = [
    {
      title: "Mad Max: Fury Road",
      year: 2015,
      tmdb_id: 76341,
      fa_rating: 7.7,
      score: 0.95,
      reason: `Escenario simulado [${scenario}]: Si fueras 100% amante de la acción frenética, esta sería tu obra maestra indiscutible.`,
      genres: ["Action", "Adventure", "Sci-Fi"],
      budget: 150000000,
      links: createMovieLink(76341)
    }
  ];

  return {
    type: "counterfactual",
    title: "Cine Contrafáctico",
    subtitle: `Simulación de preferencias para el escenario: ${scenario}`,
    movies
  };
};

module.exports = { getCounterfactualRecommendations };
