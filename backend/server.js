// // backend/server.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const routes = require('./routes/routes');
const chartNumberRoutes = require('./routes/chartNumberRoutes');
const cors = require('cors');
require('dotenv').config(); 
const basicAuth = require('express-basic-auth');

// const redisRoutes = require('./routes/redisRoute');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.get('/test', (req, res) => {
  res.send('Test endpoint working');
});

// Define allowed origins
const allowedOrigins = [
  'https://adg429.com',
  'https://www.adg429.com',
  'https://survey-web-app-env.eba-xxzbj9m.us-east-1.elasticbeanstalk.com',
  'https://backend.adg429.com',
  'http://localhost:8080',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
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
      url: process.env.BACKEND_API_URL,
      description: 'Elastic Beanstalk Server'
    }]
  },
  apis: ['./routes/*.js'],
};


const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Basic authentication for Swagger UI
app.use('/api-docs', basicAuth({
  users: { [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD },
  challenge: true, // triggers the browser to display the authentication dialog
  unauthorizedResponse: 'Unauthorized'
}), swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use the routes defined in routes.js
app.use('/api', routes);
app.use('/api', chartNumberRoutes);

// // Use Redis routes
// app.use('/redis', redisRoutes);

// Define the port number
const PORT = process.env.PORT || 8080;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});