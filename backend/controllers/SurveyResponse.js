// SurveyResponse.js
const SurveyResponse = require('../models/SurveyResponseModel.js');
const dbStatus = require('../config/db.js');

// Define users for basic authentication
const USERS = {
    'varshahindupur': 'I@snoSou#021', 
    'kellywellman': 'let$me*ju56Be',
    'theresalibby': 'hop%e7w0)week!1'
};

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

// Fetch all survey responses for a particular Prolific ID
exports.getSurveyResponsesByProlificId = async (req, res) => {
    try {
        const prolificId = req.params.prolificId;
        const responses = await SurveyResponse.find({ prolific_id: prolificId }).lean(); // Use lean() for better performance

        if (responses.length === 0) {
            return res.status(404).json({ message: 'No survey responses found for this Prolific ID.' });
        }

        res.status(200).json({ message: 'Survey responses fetched successfully.', data: responses });
    } catch (err) {
        console.error('Error fetching survey responses:', err);
        res.status(500).json({ message: 'Error fetching survey responses' });
    }
};

// Delete all survey responses for a particular Prolific ID
exports.deleteSurveyResponsesByProlificId = async (req, res) => {
    try {
        const prolificId = req.params.prolificId;
        const result = await SurveyResponse.deleteMany({ prolific_id: prolificId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No survey responses found to delete for this Prolific ID.' });
        }

        res.status(200).json({ message: `Deleted ${result.deletedCount} survey response(s) for Prolific ID: ${prolificId}` });
    } catch (err) {
        console.error('Error deleting survey responses:', err);
        res.status(500).json({ message: 'Error deleting survey responses' });
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

const XLSX = require('xlsx');

function flattenObject(ob) {
    let result = {};

    for (const i in ob) {
        if ((typeof ob[i]) === 'object' && ob[i] !== null && !Array.isArray(ob[i])) {
            const flatObject = flattenObject(ob[i]);
            for (const x in flatObject) {
                result[`${i}.${x}`] = flatObject[x];
            }
        } else {
            result[i] = ob[i];
        }
    }

    return result;
}

exports.exportSurveyResponsesToExcel = async (req, res) => {
    try {
        // Fetch filename from query parameters, defaulting to 'SurveyResponses' if not provided
        const filename = req.query.filename || 'SurveyResponsesNodeJSAPI';

        // Fetch all survey responses from the database
        const responses = await SurveyResponse.find({}).lean();

        // Check if any data was fetched
        if (responses.length === 0) {
            return res.status(404).json({ message: 'No data found in the collection.' });
        }

        // Define the desired column order
        const desiredOrder = [
            "_id", "prolific_id", "test_name", "page_number",
            "responses.FL_question_1", "responses.FL_question_2", "responses.FL_question_3", "responses.PFT1_question_1" ,"responses.PFT1_question_2" ,
            "responses.PFT1_question_3" ,"responses.PFT1_question_4" ,"responses.PFT1_question_5" ,"responses.PFT1_question_6" ,"responses.PFT1_question_7" ,
            "responses.PFT1_question_8" , "responses.PFT1_question_9" ,"responses.PFT1_question_10" ,"responses.PFT2_question_1" ,"responses.PFT2_question_2" ,"responses.PFT2_question_3", "responses.PFT2_question_4", 
            "responses.PFT2_question_5", "responses.PFT2_question_6", "responses.PFT2_question_7", "responses.PFT2_question_8", "responses.PFT2_question_9", "responses.PFT2_question_10", "responses.SRT_question1", "responses.SRT_question2", "responses.ACT_question_attempt_1", 
            "responses.ACT_question_attempt_2", "responses.ACT_attention_check", "responses.RT1_question1", "responses.RT1_question2", "responses.RT1_question3", "responses.RT1_question4", "responses.RT1_question5", "responses.RT1_question6", "responses.RT1_question7", 
            "responses.RT1_question8", "responses.RT1_question9", "responses.RT1_question10", "responses.RT2_question1", "responses.RT2_question2", "responses.RT2_question3",
            "responses.RT2_question4", "responses.RT2_question5", "responses.RT2_question6", "responses.RT2_question7", "responses.RT2_question8", "responses.RT2_question9", 
            "responses.RT2_question10", "responses.CBG_question", "responses.SCD_question1", "responses.SCD_question2", "responses.SCD_question3", "responses.SCD_question4", 
            "responses.SCD_question5", "responses.SCD_question6", "responses.SCD_question7", "responses.SCD_question8", "responses.SCD_question9", "responses.SCD_question10", 
            "responses.SCD_question11", "responses.SCD_question12", "responses.SCD_question13", "responses.SCD_question14", "responses.SCD_question15", "responses.SCD_question16", "responses.SCD_question17",
            "responses.SCD_question18", "responses.SCD_question19", "responses.SCD_question20", "responses.SCD_question21", "responses.SCD_question22", "responses.SCD_question23", 
            "responses.SCD_question24", "graph_question_durations", "per_graph_durations", "responses.attention_check", "responses.mentalDemand", "responses.physicalDemand", "responses.temporalDemand", "responses.performance", "responses.effort", 
            "responses.frustration", "responses.age", "responses.education-level", "responses.work-experience", "responses.management-experience", "responses.employment-sector", "responses.text-feedback", 
            "incentive_calculation", "total_pay_till_now", "current_visit_test_name", "next_visit_test_name", "last_visited_test_name" ,"chart_number", "consent","__v"
        ];

        // Flatten each document and filter for the desired columns
        const cleanedAndFilteredResponses = responses.map((doc) => {
            // Flatten the document
            const flatDoc = flattenObject(doc);

            // Reorder and filter columns according to desiredOrder
            const reorderedDoc = {};
            desiredOrder.forEach(col => {
                if (flatDoc.hasOwnProperty(col)) reorderedDoc[col] = flatDoc[col];
            });
            return reorderedDoc;
        });

        // Create Excel workbook and worksheet from reordered data
        const worksheet = XLSX.utils.json_to_sheet(cleanedAndFilteredResponses);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'SurveyResponses');

        // Write the Excel file to a buffer
        const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        // Set response headers to trigger file download
        res.setHeader('Content-Disposition', `attachment; filename="${filename}.xlsx"`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        // Send the buffer as a file download
        res.send(excelBuffer);

    } catch (err) {
        console.error("Error exporting data to Excel:", err);
        res.status(500).json({ message: 'Error exporting data to Excel' });
    }
};

exports.deleteSurveyResponseWithEmptyProlificId = async (req, res) => {
    try {
        const result = await SurveyResponse.deleteMany({ prolific_id: "" });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No survey responses found with an empty Prolific ID.' });
        }

        res.status(200).json({
            message: `Deleted ${result.deletedCount} survey response(s) with an empty Prolific ID`,
        });
    } catch (err) {
        console.error('Error deleting survey responses:', err);
        res.status(500).json({ message: 'Error deleting survey responses' });
    }
};

