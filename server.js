'use strict';

// App Dependencies
const express = require( 'express' );
const notFoundHandler = require ( './error-handlers/404.js' );
const errorHandler = require ( './error-handlers/500.js' );

// App Setup
const app = express();

// Home route
app.get( '/',( req,res )=>{
  res.send( 'Welcome Back To 401-JavaScript Course' );
} );

// Bad request route
app.get( '/badRequest',( req,res )=>{
  throw new Error( 'Error, something went wrong' );
} );

app.use( '*', notFoundHandler );
app.use( errorHandler );

// Listening on PORT function
function startListening ( PORT ) {
  app.listen ( PORT,()=>{
    console.log( `listen on PORT ${PORT}` );
  } );
}

// Export For App & startListening function
module.exports = {
  app: app ,
  startListening: startListening ,
};
