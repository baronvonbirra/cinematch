const Redis = require('ioredis');
const config = require('./env');

class MemoryStore {
  constructor() {
    this.store = new Map();
    this.ttls = new Map();
  }

  async get(key) {
    if (this.ttls.has(key) && Date.now() > this.ttls.get(key)) {
      this.store.delete(key);
      this.ttls.delete(key);
      return null;
    }
    return this.store.get(key) || null;
  }

  async set(key, value, mode, duration) {
    this.store.set(key, value);
    if (mode === 'EX' && duration) {
      this.ttls.set(key, Date.now() + duration * 1000);
    }
    return 'OK';
  }

  async del(key) {
    this.store.delete(key);
    this.ttls.delete(key);
    return 1;
  }

  async ttl(key) {
    if (!this.store.has(key)) return -2;
    if (!this.ttls.has(key)) return -1;
    const remaining = Math.ceil((this.ttls.get(key) - Date.now()) / 1000);
    return remaining > 0 ? remaining : -2;
  }

  async keys(pattern) {
    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
    const results = [];
    for (const key of this.store.keys()) {
      if (regex.test(key)) {
        if (!(this.ttls.has(key) && Date.now() > this.ttls.get(key))) {
          results.push(key);
        }
      }
    }
    return results;
  }
}

let client;
let isConnected = false;
const memoryFallback = new MemoryStore();

try {
  client = new Redis(config.redisUrl, {
    maxRetriesPerRequest: 1,
    enableOfflineQueue: false,
    retryStrategy() {
      return null; // Don't retry endlessly if Redis is down
    }
  });

  client.on('connect', () => { isConnected = true; });
  client.on('error', () => { isConnected = false; });
} catch (e) {
  isConnected = false;
}

const redisWrapper = {
  async get(key) {
    if (isConnected) {
      try { return await client.get(key); } catch (e) { isConnected = false; }
    }
    return await memoryFallback.get(key);
  },
  async set(key, value, mode, duration) {
    if (isConnected) {
      try { return await client.set(key, value, mode, duration); } catch (e) { isConnected = false; }
    }
    return await memoryFallback.set(key, value, mode, duration);
  },
  async del(key) {
    if (isConnected) {
      try { return await client.del(key); } catch (e) { isConnected = false; }
    }
    return await memoryFallback.del(key);
  },
  async ttl(key) {
    if (isConnected) {
      try { return await client.ttl(key); } catch (e) { isConnected = false; }
    }
    return await memoryFallback.ttl(key);
  },
  async keys(pattern) {
    if (isConnected) {
      try { return await client.keys(pattern); } catch (e) { isConnected = false; }
    }
    return await memoryFallback.keys(pattern);
  },
  isNativeConnected() {
    return isConnected;
  },
  async disconnect() {
    if (client) {
      try {
        await client.quit();
      } catch (e) {
        client.disconnect();
      }
    }
  }
};

module.exports = redisWrapper;
