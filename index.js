'use strict';

// Read Environment 
require( 'dotenv' ).config();

// App Setup
const PORT = process.env.PORT || 4000 ;

// Access server.js file
const server = require ( './server.js' ) ;

server.startListening( PORT ) ;
