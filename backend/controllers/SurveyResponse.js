// SurveyResponse.js
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
        // console.log("Starting exportSurveyResponsesToExcel...");

        // Fetch all survey responses from the database
        const responses = await SurveyResponse.find({}).lean(); // Use lean() to get plain JavaScript objects
        // console.log("Fetched survey responses from database:", responses.length);

        // Check if any data was fetched
        if (responses.length === 0) {
            return res.status(404).json({ message: 'No data found in the collection.' });
        }
        
        // console.log("cleaned *********")
        // Convert the MongoDB ObjectId and other special types into strings
        const cleanedResponses = responses.map((doc, index) => {
            doc._id = doc._id.toString(); // Convert _id from ObjectId to string
            
            // // Log the conversion of the first response for debugging
            // if (index === 5) {
            //     console.log("Original Document:", doc);
            //     console.log("Cleaned Response:", doc);
            // }
            
            return doc;
        });
        // console.log("cleaned done *********")

        // Flatten the nested objects in each document
        const flattenedResponses = cleanedResponses.map((doc, index) => {
            const flattenedDoc = flattenObject(doc);

            // // Log the first flattened response for debugging
            // if (index === 5) {
            //     console.log("Flattened Response:", flattenedDoc);
            // }

            return flattenedDoc;
        });
        // console.log("Flattened responses:", flattenedResponses.length);

        // Create a new Excel workbook and worksheet
        const worksheet = XLSX.utils.json_to_sheet(flattenedResponses);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'SurveyResponses');
        // console.log("Created Excel workbook.");

        // Write the Excel file to a buffer
        const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
        // console.log("Excel file written to buffer.");

        // Set response headers for file download
        res.setHeader('Content-Disposition', 'attachment; filename=SurveyResponsesNodeJSAPI.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        // Send the buffer as a file download
        res.send(excelBuffer);
        // console.log("Excel file sent successfully.");

    } catch (err) {
        console.error("Error exporting data to Excel:", err);
        res.status(500).json({ message: 'Error exporting data to Excel' });
    }
};

