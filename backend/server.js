// server.js

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const routes = require('./routes');
const db = require('./config/db');
const cors = require('cors');
require('dotenv').config(); 

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors({
  origin: 'http://adg429.com',
  optionsSuccessStatus: 200
}));

// Swagger set up
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Study API',
      version: '1.0.0',
      description: 'A simple API for managing tests',
    },
    servers: [{
      url: process.env.API_BASE_URL, // Adjust if your API base URL is different : http://localhost:3000/api
      description: 'AWS Development Server'
    }]
  },
  apis: ['./routes.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use the routes defined in routes.js
app.use('/api', routes);

// Define the port number
const PORT = process.env.PORT || 8080;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
