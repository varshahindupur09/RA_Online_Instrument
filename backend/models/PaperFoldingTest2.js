const mongoose = require('mongoose'); 

const PaperFoldingTest2Schema = new mongoose.Schema({
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

const PaperFoldingTest2 = mongoose.model('PaperFoldingTest2', PaperFoldingTest2Schema);
module.exports = PaperFoldingTest2;