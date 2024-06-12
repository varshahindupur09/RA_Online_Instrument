// Import dotenv and dotenv-expand
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

// Load the environment variables
const myEnv = dotenv.config();
dotenvExpand(myEnv);