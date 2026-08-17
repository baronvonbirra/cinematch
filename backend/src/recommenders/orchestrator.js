const { getStandardRecommendations } = require('./standardRecommender');
const { getAntiRecommendations } = require('./antiRecommender');
const { getTemporalRecommendations } = require('./temporalRecommender');
const { getSurprisePredictations } = require('./surprisePredictor');
const { getCounterfactualRecommendations } = require('./counterfactual');
const { getEmotionalRecommendations } = require('./emotionalRecommender');
const { getTonalRecommendations } = require('./tonalRecommender');
const { getTrendRecommendations } = require('./trendSpotter');
const { getForbiddenRecommendations } = require('./biasBreakerFinder');

const recommenders = {
  standard: getStandardRecommendations,
  anti: getAntiRecommendations,
  temporal: getTemporalRecommendations,
  surprise: getSurprisePredictations,
  counterfactual: getCounterfactualRecommendations,
  emotional: getEmotionalRecommendations,
  tonal: getTonalRecommendations,
  trend: getTrendRecommendations,
  forbidden: getForbiddenRecommendations
};

const getRecommendationsByType = async (type, profile, options = {}) => {
  const recommender = recommenders[type] || recommenders.standard;
  return await recommender(profile, options);
};

module.exports = {
  getRecommendationsByType,
  recommenders
};
