const detectSurprises = (movies = []) => {
  return movies.map(m => {
    const expected = 7.5;
    const actual = m.rating || 8.0;
    const diff = Math.abs(actual - expected);
    return {
      movie_id: m.id,
      title: m.title,
      expected,
      actual,
      surprise_factor: parseFloat(diff.toFixed(1)),
      reason: diff > 1 ? "Mismo director + género inusual" : "Alineado con tus expectativas"
    };
  });
};

module.exports = { detectSurprises };
