const net = require('net');

// play.js
const { connect } = require('./client');

console.log('Connecting ...');

let conn = connect();
//put return of fonction connect in conn


conn.on('connect', (play) => {
  console.log('Successfully connected to game server');
  // client.write('Hello there!');// data for client
});


conn.on('connect', (play) => {
  conn.write('Camilo');
});