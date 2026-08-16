const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  tmdbApiKey: process.env.TMDB_API_KEY || 'demo_tmdb_key',
  filmaffinityTimeout: parseInt(process.env.FILMAFFINITY_TIMEOUT || '10000', 10)
};
