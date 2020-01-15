const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = {connect};

console.log('Connecting ...');
connect();

// play.js
const { connect } = require('./client');
console.log('Connecting ...');
connect();