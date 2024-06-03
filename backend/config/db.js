require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const caCertificatePath = path.join(__dirname, 'global-bundle.pem');
const ca = [fs.readFileSync(caCertificatePath)];

const mongoURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/${process.env.DB_NAME}?tls=true&replicaSet=rs0&retryWrites=false`;

mongoose.connect(mongoURI, {
    tls: true, // Use TLS instead of SSL for Amazon DocumentDB
    tlsCAFile: caCertificatePath // Pass the path directly to the tlsCAFile option
}).then(() => {
    console.log('Connected to MongoDB database');
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});
