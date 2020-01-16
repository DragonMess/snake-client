const handleUserInput = function(key,connection) {
  let keyT = "";

 if (key === '\u0003') {
   process.exit();
 }else if (key === "w") {
   keyT ="Move: up";
  
  console.log("w");
 }else if (key === "s") {
  keyT ="Move: down";
  console.log("s");
 }else if (key === "a") {
  keyT ="Move: left";
  console.log("a");
 }else if (key === "d") {
  keyT ="Move: right";
  console.log("d");
 }else if (key === "q") {
  keyT ="Say: K.O.";
  console.log("q");
 }
 console.log('keyT', keyT)
 connection.write(keyT);
};
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', function(key){
    handleUserInput(key,conn)});
    //
  
  return stdin;//return object stdin
}

module.exports = {setupInput};

