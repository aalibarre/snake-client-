const net = require("net");
const  connect  = require('./client');
const { setupInput }  = require('./input');
// establishes a connection with the game server

console.log("Connection made");
let conn = connect();
setupInput(conn);


