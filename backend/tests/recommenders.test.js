const test = require('node:test');
const assert = require('node:assert');
const { getRecommendationsByType } = require('../src/recommenders/orchestrator');

test('orchestrator returns correct response structure for all types', async () => {
  const types = ['standard', 'anti', 'temporal', 'surprise', 'counterfactual', 'emotional', 'tonal', 'trend', 'forbidden'];
  const profile = { username: 'testuser', movies: [] };

  for (const type of types) {
    const res = await getRecommendationsByType(type, profile);
    assert.strictEqual(res.type, type);
    assert.ok(Array.isArray(res.movies));
    assert.ok(res.movies.length > 0);
    assert.ok(res.movies[0].title);
  }
});
