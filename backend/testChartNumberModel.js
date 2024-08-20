const mongoose = require('mongoose');
const chartNumberResponse = require('./models/ChartNumberModel'); // Adjust path as necessary

require('dotenv').config(); 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
  

  async function testInsert() {
    try {
      const newChartNumber = new chartNumberResponse({
        last_assigned_chart: 1
      });
      const savedChartNumber = await newChartNumber.save();
      console.log('Inserted Chart Number:', savedChartNumber);
    } catch (err) {
      console.error('Error inserting chart number:', err);
    }
  }
  
  async function testFetch() {
    try {
      const chartNumber = await chartNumberResponse.findOne();
      console.log('Fetched Chart Number:', chartNumber);
    } catch (err) {
      console.error('Error fetching chart number:', err);
    }
  }

testInsert().then(() => testFetch());

// // After the test functions run
// .then(() => mongoose.disconnect())
// .then(() => console.log('MongoDB disconnected'))
// .catch(err => console.error('Error during tests:', err));