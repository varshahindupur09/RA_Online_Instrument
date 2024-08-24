// models/SurveyResponseModel.js
const mongoose = require('mongoose');

const SurveyResponseSchema = new mongoose.Schema({
    prolific_id: { type: String}, //, required: true}, //unique: true
    test_name: { type: String, required: true},
    page_number: { type: Number , required: true},
    consent: {type: Boolean},
    chart_number: { type: Number},
    responses: { type: Map, of: String},
    graph_question_durations: [{ type: Number }],
    per_graph_durations: [{ type: [Number] }],
    time_spent: { type: Number},
    completed_at: { type: Date, default: Date.now },
});

// Create a unique compound index
// SurveyResponseSchema.index({ prolific_id: 1, page_number: 1 }, { unique: true });

const SurveyResponse = mongoose.model('SurveyResponse', SurveyResponseSchema, 'surveyresponses');

console.log('Survey Responses Collection Name:', SurveyResponse.collection.collectionName);

module.exports = SurveyResponse;
