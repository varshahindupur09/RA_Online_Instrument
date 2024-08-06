// db.js
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

mongoose.set('strictQuery', false);

const dbStatus = {
    flag: false
};

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    dbStatus.flag = true;
    console.log('Connected to MongoDB database:', dbStatus.flag);
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

module.exports = dbStatus;