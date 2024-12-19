// config/db.js
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

mongoose.set('strictQuery', false);

const dbStatus = {
    flag: false
};

mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000, //30 seconds
    socketTimeoutMS: 45000,
    maxPoolSize: 10,
}).then(() => {
    dbStatus.flag = true;
    console.log('Connected to MongoDB database:', dbStatus.flag);
    // Log the database name
    console.log('Database Name:', mongoose.connection.db.databaseName);
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
    // Alternatively, log the database name here if preferred
    console.log('Database Name:', db.db.databaseName);
});

module.exports = dbStatus;