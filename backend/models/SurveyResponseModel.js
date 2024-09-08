// models/SurveyResponseModel.js
const mongoose = require('mongoose');

const SurveyResponseSchema = new mongoose.Schema({
    prolific_id: { type: String}, //, required: true}, //unique: true //coming from url & input field
    test_name: { type: String, required: true},
    page_number: { type: Number, required: true},
    consent: {type: Boolean},
    chart_number: { type: Number},
    responses: { type: Map, of: String}, //another later comes in here
    graph_question_durations: [{ type: Number }],
    per_graph_durations: [{ type: [Number] }],
    time_spent: { type: Number }, // Total time spent on the page
    started_at: { type: Date }, // Time when the survey began
    ended_at: { type: Date }, // Time when the survey ended
    time_user_entered_current_page: { type: Date, default: Date.now }, // Time when the user entered the current page
    last_visited_test_name: { type: String}, 
    current_visit_test_name: { type: String},
    next_visit_test_name:  { type: String},
    incentive_calculation: { type: String},
    each_page_pay_calculation: { type: String}, //each page calculation
    total_pay_till_now: { type: String}, //total calculation including current page pay
});

// Create a unique compound index
SurveyResponseSchema.index({ prolific_id: 1, page_number: 1 }, { unique: true });

const SurveyResponse = mongoose.model('SurveyResponse', SurveyResponseSchema, 'surveyresponses');

console.log('Survey Responses Collection Name:', SurveyResponse.collection.collectionName);

module.exports = SurveyResponse;
