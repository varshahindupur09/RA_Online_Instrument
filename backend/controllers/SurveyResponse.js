const SurveyResponse = require('../models/SurveyResponseModel.js');
const dbStatus = require('../config/db.js');

console.log('Database connection flag: ', dbStatus.flag);

exports.createSurveyResponse = async (req, res) => {
    try {
        // Create a new instance of SurveyResponse with the request body
        const newResponse = new SurveyResponse(req.body);
        await newResponse.save();

        res.status(201).json({ message: 'Document inserted successfully', data: newResponse });
    } catch (err) {
        res.status(500).json({ message: 'Error inserting document: ' + err.message });
    }
};

exports.getAllSurveyResponses = async (req, res) => {
    try {
        const responses = await SurveyResponse.find();
        res.status(200).json(responses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching documents: ' + err.message });
    }
};

exports.getSurveyResponseById = async (req, res) => {
    try {
        const response = await SurveyResponse.findById(req.params.id);
        if (!response) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching document: ' + err.message });
    }
};

exports.updateSurveyResponse = async (req, res) => {
    try {
        // Update only allowed fields; exclude page_number if needed
        const { page_number, ...updateData } = req.body;

        const updatedResponse = await SurveyResponse.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedResponse) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.status(200).json(updatedResponse);
    } catch (err) {
        res.status(500).json({ message: 'Error updating document: ' + err.message });
    }
};

exports.deleteSurveyResponse = async (req, res) => {
    try {
        const deletedResponse = await SurveyResponse.findByIdAndDelete(req.params.id);
        if (!deletedResponse) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.status(200).json({ message: 'Document deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting document: ' + err.message });
    }
};

exports.dbHealthCheckResponse = async (req, res) => {
    if (!dbStatus.flag) {
        return res.status(503).json({ message: 'Database connection unsuccessful' });
    }
    res.status(200).json({ message: 'Database connection successful' });
};
