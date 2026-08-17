const test = require('node:test');
const { after } = require('node:test');
const assert = require('node:assert');
const app = require('../src/index');
const redis = require('../src/config/redis');

after(async () => {
  await redis.disconnect();
});

test('GET /health returns 200 OK', async () => {
  const server = app.listen(0);
  const address = server.address();
  const url = `http://localhost:${address.port}/health`;

  const res = await fetch(url);
  const data = await res.json();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(data.status, 'ok');
  server.close();
});

test('POST /api/analyze creates user profile', async () => {
  const server = app.listen(0);
  const address = server.address();
  const url = `http://localhost:${address.port}/api/analyze`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'integration_user' })
  });
  const data = await res.json();

  assert.strictEqual(res.status, 200);
  assert.ok(data.profile);
  assert.strictEqual(data.profile.username, 'integration_user');
  server.close();
});

test('POST /api/recommend/anti returns recommendations', async () => {
  const server = app.listen(0);
  const address = server.address();
  const url = `http://localhost:${address.port}/api/recommend/anti`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'integration_user' })
  });
  const data = await res.json();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(data.type, 'anti');
  assert.ok(Array.isArray(data.movies));
  server.close();
});
