// controllers/ChartNumberController.js
const express = require('express');
const router = express.Router();

const ChartNumberResponse = require('../models/ChartNumberModel');

// Add the last assigned chart number
exports.createChartNumber = async (req, res) => {
    try {
        const chartNumber = new ChartNumberResponse(req.body);
        await chartNumber.save();
        res.status(201).json({ message: 'Document inserted successfully', data: chartNumber });
    } catch (err) {
        res.status(500).json({ message: 'Error inserting document: ' + err.message });
    }
};

// Get the last assigned chart number
exports.getChartNumber = async (req, res) => {
    try {
        const chartNumber = await ChartNumberResponse.findOne().sort({ _id: -1 }).limit(1);
        if (!chartNumber) {
            return res.status(404).json({ message: 'No chart number found' });
        }
        res.json(chartNumber);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching chart number: ' + err.message });
    }
};

// Update an existing chart number
exports.updateChartNumber = async (req, res) => {
    try {
        const { id } = req.params;
        const chartNumber = await ChartNumberResponse.findByIdAndUpdate(id, req.body, { new: true });
        if (!chartNumber) {
            return res.status(404).json({ message: 'Chart number not found' });
        }
        res.json({ message: 'Chart number updated successfully', data: chartNumber });
    } catch (err) {
        res.status(500).json({ message: 'Error updating chart number: ' + err.message });
    }
};

// Delete a chart number
exports.deleteChartNumber = async (req, res) => {
    try {
        const { id } = req.params;
        const chartNumber = await ChartNumberResponse.findByIdAndDelete(id);
        if (!chartNumber) {
            return res.status(404).json({ message: 'Chart number not found' });
        }
        res.json({ message: 'Chart number deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting chart number: ' + err.message });
    }
};


module.exports = router;
