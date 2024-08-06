// // backend/server.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const routes = require('./routes/routes');
const cors = require('cors');
require('dotenv').config(); 

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

// // Use CORS middleware
// app.use(cors({
//   origin: '*', // Allow all origins for testing
//   optionsSuccessStatus: 200,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// Define allowed origins
const allowedOrigins = [
  'https://adg429.com',
  'https://www.adg429.com',
  'http://survey-web-app-env.eba-xxzbj9m.us-east-1.elasticbeanstalk.com',
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
      url: 'http://localhost:8080',
      description: 'Elastic Beanstalk Server'
    }]
  },
   apis: ['./routes/*.js'],
};

// // Swagger set up
// const swaggerOptions = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Study API',
//       version: '1.0.0',
//       description: 'A simple API for managing tests',
//     },
//     servers: [{
//       url: 'http://survey-web-app-env.eba-xxzjbj9m.us-east-1.elasticbeanstalk.com', //'http://localhost:8080',
//       description: 'Elastic Beanstalk Server'
//     }]
//   },
//   apis: ['./routes/*.js'],
// };

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