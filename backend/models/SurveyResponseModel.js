// models/SurveyResponseModel.js
const mongoose = require('mongoose');

const SurveyResponseSchema = new mongoose.Schema({
    prolific_id: { type: String, required: true },
    test_name: { type: String, required: true },
    page_number: { type: Number, required: true },
    consent: { type: String, required: true },
    responses: { type: Map, of: String},
    time_spent: { type: Number, required: false },
    completed_at: { type: Date, default: Date.now },
});

const SurveyResponse = mongoose.model('SurveyResponse', SurveyResponseSchema);
module.exports = SurveyResponse;
