const mongoose = require('mongoose');  // Corrected from 'mangoose'

const PaperFoldingTest1Schema = new mongoose.Schema({
    question_number: { type: Number, required: true },
    answer_inserted: { type: String, required: true },
});

const PaperFoldingTest1 = mongoose.model('PaperFoldingTest1', PaperFoldingTest1Schema);
module.exports = PaperFoldingTest1;