/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('online-instrument-original');

// Insert a few documents into the PaperFoldingTest1 collection.
// db.getCollection('PaperFoldingTest1').insertMany([
//   { question_number: 1, answer_inserted: 'A' },
//   { question_number: 2, answer_inserted: 'B' },
//   { question_number: 3, answer_inserted: 'C' },
//   { question_number: 4, answer_inserted: 'D' },
//   { question_number: 5, answer_inserted: 'E' },
// ]);

// Find and print all documents in the PaperFoldingTest1 collection.
const allAnswers = db.getCollection('PaperFoldingTest1').find({}).toArray();

// Print a message to the output window.
allAnswers.forEach(doc => {
  console.log(`Question Number: ${doc.question_number}, Answer: ${doc.answer_inserted}`);
});

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('PaperFoldingTest1').aggregate([
  // Group by question_number and count the total answers.
  { $group: { _id: '$question_number', totalAnswers: { $sum: 1 } } }
]).toArray().forEach(result => {
  console.log(`Question Number: ${result._id}, Total Answers: ${result.totalAnswers}`);
});