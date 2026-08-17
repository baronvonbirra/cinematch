const express = require('express');
const router = express.Router();
const redis = require('../config/redis');

router.get('/:username', async (req, res, next) => {
  try {
    const { username } = req.params;
    if (!username) {
      return res.status(400).json({ error: true, message: 'Username is required' });
    }

    const normUser = username.toLowerCase();
    const profileKey = `profile:${normUser}`;
    const data = await redis.get(profileKey);

    if (!data) {
      return res.status(404).json({ cached: false, message: 'User profile not found in cache' });
    }

    const profile = JSON.parse(data);
    const ttl = await redis.ttl(profileKey);

    return res.status(200).json({
      cached: true,
      expires_in_seconds: ttl,
      last_updated: profile.scraped_at,
      movies_count: (profile.movies || []).length,
      favorite_genres: Object.keys(profile.preferences?.genres || {}).slice(0, 3),
      current_era: profile.temporal?.eras?.slice(-1)[0]?.name || "Eclectic Mastery"
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
