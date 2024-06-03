const mongoose = require('mongoose');  // Corrected from 'mangoose'

const PaperFoldingTest2Schema = new mongoose.Schema({
    question_number: { type: Number, required: true },
    answer_inserted: { type: String, required: true },
});

const PaperFoldingTest2 = mongoose.model('PaperFoldingTest2', PaperFoldingTest2Schema);
module.exports = PaperFoldingTest2;