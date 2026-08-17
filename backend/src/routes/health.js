const express = require('express');
const router = express.Router();
const redis = require('../config/redis');

router.get('/', async (req, res) => {
  res.status(200).json({
    status: 'ok',
    redis: redis.isNativeConnected() ? 'connected' : 'memory_fallback',
    tmdb: 'ok',
    uptime: process.uptime()
  });
});

module.exports = router;
