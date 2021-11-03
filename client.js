
const net = require("net");
const connect = function () {
    const conn = net.createConnection({
      host: '165.227.47.243',
      port: 50541
    });

    conn.on("connect", () => {
      console.log("sucessfully connected to game server");
   });
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.write("Name: AAB");
    conn.write("Move: up");









    return conn;
  };

 
  


module.exports = connect;
  
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)