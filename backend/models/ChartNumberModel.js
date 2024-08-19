// models/ChartNumberModel.js
const mongoose = require('mongoose');

const ChartNumberSchema = new mongoose.Schema({
    last_assigned_chart: { type: Number, required: true, default: 0}
});

const chartNumberResponse = mongoose.model('ChartNumberResponse', ChartNumberSchema, 'dashboardChartAssignmentStorage');
console.log('Survey Responses Collection Name:', chartNumberResponse.collection.collectionName);
module.exports = chartNumberResponse;