// routes/redisRoute.js
const express = require('express');
const router = express.Router();
const redisController = require('../controllers/RedisController');

// router.post('/set-data', redisController.setData);
// router.get('/get-data/:key', redisController.getData);

router.post('/save-progress', redisController.saveProgress);
router.get('/get-progress/:sessionId', redisController.getProgress);
router.post('/start-timer', redisController.startTimer);
router.get('/check-timer/:sessionId', redisController.checkTimer);

module.exports = router;