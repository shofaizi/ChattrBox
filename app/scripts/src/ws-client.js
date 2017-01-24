// 1. connect to the server
let socket;
// 2. perform initial setup when the connection is first opened
function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}
// 3. forward incoming messages to their handlers
// 4. send outgoing messages

export default {
  init: init
}
