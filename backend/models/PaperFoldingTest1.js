// models/PaperFoldingTest1.js

const mangoose = require('mangoose');

const PaperFoldingTest1Schema = new mangoose.Schema({
    question_number: { type: Number, required: true },
    answer_inserted: { type: String, required: true },
})

const PaperFoldingTest1 = mangoose.model('PaperFoldingTest1', PaperFoldingTest1Schema);

module.exports = PaperFoldingTest1;