

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
}
// let sdfe = setupInput();




 const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {setupInput};

  // if (key === "e") {
  //   setInterval(() => conn.write('Move: up'), 1000);
  // }