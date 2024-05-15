// db.js

const mangoose = require('mongoose')
mangoose.connect('mongodb://localhost:27017/online_instrument', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mangoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});