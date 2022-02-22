const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
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
    conn.write("Name: edo");
  });

  // sends the string "Move: up" as data to the server,
  /* conn.on("connect", () => {

    setTimeout(() => {
      conn.write("Move: up");
    }, 50);

    setTimeout(() => {
      conn.write("Move: left");
    }, 100);

    setInterval(() => {
      conn.write("Move: down");
    }, 50);
  }); */



  return conn;
};


module.exports = {
  connect
};