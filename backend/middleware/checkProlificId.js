// backend/middleware/checkProlificId.js

const checkProlificId = (req, res, next) => {
    const prolificId = req.query.PROLIFIC_PID;
    
    // Check if the Prolific ID is provided in the URL
    if (!prolificId) {
        return res.status(403).send('Access Denied: Prolific ID is required');
    }

    // If Prolific ID is present, proceed to the next middleware or route handler
    next();
};

module.exports = checkProlificId;
