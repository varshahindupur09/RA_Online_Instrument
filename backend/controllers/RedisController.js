// controller/redisController.js
const redis = require('../utils/redis');

// exports.setData = async (req, res) => {
//   const { key, value } = req.body;
//   try {
//     await redis.set(key, value, 'EX', 3600); // Set key to expire in 3600 seconds
//     res.status(200).send('Data set successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error setting data in Redis');
//   }
// };

// exports.getData = async (req, res) => {
//   const { key } = req.params;
//   try {
//     const value = await redis.get(key);
//     res.status(200).json({ key, value });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error getting data from Redis');
//   }
// };


// Save user progress in Redis
exports.saveProgress = async (req, res) => {
    const { sessionId, data } = req.body;
    try {
      // Serialize the user data as a JSON string and set it to expire in 30 minutes (1800 seconds)
      await redis.set(sessionId, JSON.stringify(data), 'EX', 1800);
      res.status(200).send('Progress saved');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saving progress');
    }
  };
  
  // Get user progress from Redis
  exports.getProgress = async (req, res) => {
    const { sessionId } = req.params;
    try {
      const data = await redis.get(sessionId);
      if (data) {
        res.status(200).json(JSON.parse(data));
      } else {
        res.status(404).send('Session expired or does not exist');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving progress');
    }
  };

// Start a survey timer
exports.startTimer = async (req, res) => {
    const { sessionId } = req.body;
    try {
      // Set a timer key in Redis to expire in 30 minutes
      await redis.set(`timer:${sessionId}`, 'active', 'EX', 1800);
      res.status(200).send('Timer started');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error starting timer');
    }
};
  
// Check if the timer is still active
exports.checkTimer = async (req, res) => {
    const { sessionId } = req.params;
    try {
      const timerStatus = await redis.get(`timer:${sessionId}`);
      if (timerStatus) {
        res.status(200).send('Timer is active');
      } else {
        res.status(408).send('Time expired');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error checking timer');
    }
  };
  