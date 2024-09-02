// //controllers/authController.js
// const redis = require('../utils/redis');

// exports.createSession = async (req, res) => {
//     const prolificId = req.body.prolificId;  // Capture the prolificId sent from the client

//     const sessionId = generateUniqueId();  // Generate a unique session ID
//     const sessionData = { prolificId, timestamp: new Date() };

//     // Store the session information in Redis
//     await redis.set(`session:${sessionId}`, JSON.stringify(sessionData), 'EX', 1800); // 1800 seconds = 30 minutes

//     // Return the session ID and prolificId to the client
//     res.json({ sessionId, prolificId });
// };

// function generateUniqueId() {
//     return require('crypto').randomBytes(16).toString('hex');  // Simple example of generating a unique ID
// }
