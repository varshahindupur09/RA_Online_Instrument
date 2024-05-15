const { override, devServer } = require('customize-cra');

module.exports = override(
  devServer({
    // Customize webpack dev server options here
    host: '0.0.0.0' // Set host to accept requests from any IP address
  })
);