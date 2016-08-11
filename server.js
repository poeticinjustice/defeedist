'use strict'

// Test to see if there's an environment
// Do not load dotenv in production
const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = DEV ? require('dotenv').config() : undefined;

// dependencies
const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const path        = require('path');

// declarations
const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3009

// set up logging
app.use( logger( DEV ? 'dev' : 'common' ) );

// only accept json
app.use(bodyParser.json());

// routes for stories
app.use( '/stories', require('./routes/stories') );

// create relative path
app.use( express.static(path.join(__dirname, 'dist')))


// Ready
app.listen( PORT , ()=> console.log( `Listening on`, PORT ) )




// lots of help from:
// https://github.com/jasonseminara/react_to-do/tree/solution
