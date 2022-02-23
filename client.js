const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // prints a message to the screen when the connection is successfully established
  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
    // sending a name to the server
    conn.write("Name: SSS");
  });

  return conn;
};


module.exports = { connect };


