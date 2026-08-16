const test = require('node:test');
const assert = require('node:assert');
const { analyzePreferences } = require('../src/analyzers/preferenceAnalyzer');
const { analyzeTemporal } = require('../src/analyzers/temporalAnalyzer');
const { analyzeTonal } = require('../src/analyzers/tonalAnalyzer');
const { analyzeEmotional } = require('../src/analyzers/emotionalAnalyzer');
const { detectSurprises } = require('../src/analyzers/surpriseDetector');

test('analyzePreferences computes correct averages', () => {
  const mockMovies = [
    { rating: 9, genres: ['Drama'], director: 'Nolan', actors: ['Actor A'] },
    { rating: 7, genres: ['Drama', 'Sci-Fi'], director: 'Nolan', actors: ['Actor B'] }
  ];

  const result = analyzePreferences(mockMovies);
  assert.strictEqual(result.genres['Drama'], 8);
  assert.strictEqual(result.genres['Sci-Fi'], 7);
  assert.strictEqual(result.directors_top['Nolan'], 8);
});

test('analyzeTemporal returns eras structure', () => {
  const mockMovies = [
    { rating: 8, year: 2018, date_voted: '2018-05-01', genres: ['Drama'] },
    { rating: 9, year: 2022, date_voted: '2022-06-01', genres: ['Sci-Fi'] }
  ];

  const result = analyzeTemporal(mockMovies);
  assert.strictEqual(Array.isArray(result.eras), true);
  assert.ok(result.eras.length > 0);
});

test('analyzeTonal and emotional return expected metadata', () => {
  const tonal = analyzeTonal([]);
  const emotional = analyzeEmotional([]);
  assert.ok(tonal.profile_name);
  assert.ok(Array.isArray(emotional.clusters));
});

test('detectSurprises identifies score gaps', () => {
  const mockMovies = [{ id: 1, title: 'Test Movie', rating: 9.5 }];
  const surprises = detectSurprises(mockMovies);
  assert.strictEqual(surprises.length, 1);
  assert.strictEqual(surprises[0].surprise_factor, 2.0);
});
