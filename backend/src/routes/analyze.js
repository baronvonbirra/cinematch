const express = require('express');
const router = express.Router();
const redis = require('../config/redis');
const { scrapeFilmAffinityProfile } = require('../scrapers/filmaffinity');
const { analyzePreferences } = require('../analyzers/preferenceAnalyzer');
const { analyzeTemporal } = require('../analyzers/temporalAnalyzer');
const { analyzeTonal } = require('../analyzers/tonalAnalyzer');
const { analyzeEmotional } = require('../analyzers/emotionalAnalyzer');

router.post('/', async (req, res, next) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({ error: true, message: 'Username is required' });
    }

    const key = `profile:${username.toLowerCase()}`;
    const cached = await redis.get(key);

    if (cached) {
      return res.status(200).json({
        status: 'cached',
        profile: JSON.parse(cached)
      });
    }

    const rawData = await scrapeFilmAffinityProfile(username);
    const movies = rawData.movies || [];

    const preferences = analyzePreferences(movies);
    const temporal = analyzeTemporal(movies);
    const tonal = analyzeTonal(movies);
    const emotional = analyzeEmotional(movies);

    const profile = {
      username: rawData.username,
      filmaffinity_id: rawData.filmaffinity_id,
      scraped_at: rawData.scraped_at,
      movies,
      preferences,
      temporal,
      tonal,
      emotional
    };

    await redis.set(key, JSON.stringify(profile), 'EX', 2592000);

    return res.status(200).json({
      status: 'analyzed',
      profile
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
