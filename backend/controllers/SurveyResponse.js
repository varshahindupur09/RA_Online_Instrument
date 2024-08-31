// SurveyResponse.js
const SurveyResponse = require('../models/SurveyResponseModel.js');
const dbStatus = require('../config/db.js');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

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
        // Extract all fields from the request body, including page_number
        const updateData = req.body;

        // Find and update the document by ID
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

exports.deleteAllSurveyResponses = async (req, res) => {
    try {
        await SurveyResponse.deleteMany({});
        res.status(200).json({ message: 'All documents deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting documents: ' + err.message });
    }
};

exports.exportSurveyResponsesToExcel = async (req, res) => {
    try {
        const { filename } = req.query;

        // Set a default filename if none is provided
        const outputFilename = filename ? `${filename}.xlsx` : 'SurveyResponsesInExcel.xlsx';

        const data = await SurveyResponse.find({});
        if (!data.length) {
            return res.status(404).json({ message: 'No data found in the collection.' });
        }

        // Convert data to JSON format suitable for XLSX
        const jsonData = data.map(doc => doc.toObject());

        // Create a new workbook and add data to the first sheet
        const worksheet = XLSX.utils.json_to_sheet(jsonData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'SurveyResponses');

        // Generate Excel file buffer
        const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        // Send the Excel file as a response
        res.setHeader('Content-Disposition', 'attachment; filename=${outputFilename}');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(excelBuffer);
    } catch (err) {
        console.error('Error exporting data to Excel:', err);
        res.status(500).json({ message: 'Error exporting data to Excel' });
    }
};