const express = require('express');
const router = express.Router();
const redis = require('../config/redis');
const { getRecommendationsByType } = require('../recommenders/orchestrator');

router.post('/:type', async (req, res, next) => {
  try {
    const { type } = req.params;
    const { username, options = {} } = req.body;

    if (!username) {
      return res.status(400).json({ error: true, message: 'Username is required' });
    }

    const normUser = username.toLowerCase();
    const recKey = `recommendations:${normUser}:${type}`;
    const cachedRecs = await redis.get(recKey);

    if (cachedRecs) {
      return res.status(200).json(JSON.parse(cachedRecs));
    }

    const profileKey = `profile:${normUser}`;
    const profileData = await redis.get(profileKey);

    let profile = profileData ? JSON.parse(profileData) : null;
    if (!profile) {
      profile = { username: normUser, movies: [] };
    }

    const recommendations = await getRecommendationsByType(type, profile, options);

    await redis.set(recKey, JSON.stringify(recommendations), 'EX', 86400);

    return res.status(200).json(recommendations);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
