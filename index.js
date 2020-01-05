/**
 * Required External Modules
 */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

/**
 * App Variables
 */

/**
 *  App Configuration
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes Definitions
 */
routes(app);

/**
 * Server Activation
 */
const server = app.listen(3500, function() {
  console.log(`app running on port ${server.address().port}`);
});
