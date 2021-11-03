
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










    return conn;
  };

 
  


module.exports = connect;
  