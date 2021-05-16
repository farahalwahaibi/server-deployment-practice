'use strict';

// Access server.js
const server = require( '../server.js' );

const supertest = require ( 'supertest' );
const req = supertest ( server.app );

describe ( 'server',()=>{

  // for notFoundHandler
  it( 'should get 404 status', async()=>{
    const res = await req.get( '/123' );
    expect( res.status ).toBe( 404 );
  } );

  // for home route
  it( 'should get welcome message', async()=>{
    let route = '/';
    const res = await req.get( '/' );
    expect( res.status ).toBe( 200 );
    expect( res.text ).toBe( 'Welcome Back To 401-JavaScript Course' );
  } );

  // for errorHandler
  it( 'should get an error', async()=>{
    const res = await req.get( '/badRequest' );
    expect( res.status ).toBe( 500 );
  } );
} );
