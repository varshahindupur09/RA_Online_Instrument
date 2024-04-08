// models/PaperFoldingTest2.js

const mangoose = require('mangoose');

const PaperFoldingTest2Schema = new mangoose.Schema({
    question_number: { type: Number, required: true },
    answer_inserted: { type: String, required: true },
})

const PaperFoldingTest2 = mangoose.model('PaperFoldingTest2', PaperFoldingTest2Schema);

module.exports = PaperFoldingTest2;