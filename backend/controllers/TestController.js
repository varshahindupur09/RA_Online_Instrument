// controllers/TestController.js

exports.testProlificIdAccess = async (req, res) => {
    const prolificId = req.query.PROLIFIC_PID;

    if (!prolificId) {
        return res.status(403).json({ message: 'Access Denied: Prolific ID is required.' });
    }

    res.status(200).json({ message: 'Access granted! Prolific ID is present.' });
};
