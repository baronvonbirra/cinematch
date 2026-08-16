const express = require('express');
const config = require('./config/env');
const corsMiddleware = require('./middleware/cors');
const rateLimiter = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');

const analyzeRoute = require('./routes/analyze');
const recommendationsRoute = require('./routes/recommendations');
const statusRoute = require('./routes/status');
const healthRoute = require('./routes/health');

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(rateLimiter);

app.use('/health', healthRoute);
app.use('/api/analyze', analyzeRoute);
app.use('/api/recommend', recommendationsRoute);
app.use('/api/status', statusRoute);

app.use(errorHandler);

if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`CineMatch backend running on port ${config.port}`);
  });
}

module.exports = app;
