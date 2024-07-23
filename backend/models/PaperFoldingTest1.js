// models/PaperFoldingTest.js
const mongoose = require('mongoose');

const PaperFoldingTest1Schema = new mongoose.Schema({
    prolific_id: { type: String, required: true },
    test_name: { type: String, required: true },
    question_1: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_2: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_3: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_4: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_5: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_6: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_7: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_8: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_9: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    question_10: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
});

const PaperFoldingTest1 = mongoose.model('PaperFoldingTest1', PaperFoldingTest1Schema);
module.exports = PaperFoldingTest1;