const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    // client.write('Hello there!');// data for client
    conn.write('Name: Cam');
    // setInterval(() => conn.write('Move: up'), 1000);
    
  });
  conn.on("data",(data)=> {
    console.log("This server says, ", data)
  })


  return conn;
}

module.exports = {connect};
// export function like object 
// 