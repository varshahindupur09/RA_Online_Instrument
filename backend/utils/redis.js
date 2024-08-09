//backend/utils/redis.js
const Redis = require('ioredis');

// Connect to Redis
const redis = new Redis({
  host: 'rediscacheinstrument-yjxgjt.serverless.use1.cache.amazonaws.com', 
  port: 6379
});

redis.on('connect', () => {
  console.log('Connected to Redis!');
});

redis.on('error', (err) => {
  console.error('Redis error', err);
});
