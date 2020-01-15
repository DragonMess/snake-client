const net = require('net');

// play.js
const { connect } = require('./client');

console.log('Connecting ...');

let conn = connect();
//put return of fonction connect in conn


conn.on('connect', () => {
  console.log('Successfully connected to game server');
  // client.write('Hello there!');// data for client
  conn.write('Camilo');
  setInterval(() => conn.write('Move: up'), 1000);
  setInterval(() => conn.write('Move: left'), 1500);
});

