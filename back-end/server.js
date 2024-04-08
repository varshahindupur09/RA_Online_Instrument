// server.js

const express = require('express');
const routes = require('./routes');
const db = require('./config/db');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes defined in routes.js
app.use('/api', routes);

// Define the port number
const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
