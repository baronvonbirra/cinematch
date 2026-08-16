const calculateAntiScore = (faRating, similarUsersScore, contradictionScore) => {
  return (faRating * 0.4) + (similarUsersScore * 0.4) + (contradictionScore * 0.2);
};

const calculateEmotionalScore = (darkTone, violence, intenseRomance, sadEnding, complexity) => {
  return (darkTone * 0.3) + (violence * 0.2) + (intenseRomance * 0.2) + (sadEnding * 0.15) + (complexity * 0.15);
};

module.exports = {
  calculateAntiScore,
  calculateEmotionalScore
};
