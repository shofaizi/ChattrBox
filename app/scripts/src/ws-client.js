// 1. connect to the server
let socket;
// 2. perform initial setup when the connection is first opened
function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}
// 3. forward incoming messages to their handlers
function registerOpenHandler(handlerFunction) {
  socket.onopen = () => {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = (e) => {
    console.log('message', e.data);
    let data = JSON.parse(e.data);
    // receive data and convert to object with JSON.parse
    handlerFunction(data);
  }
}
// 4. send outgoing messages
function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
  // send data as a string to server
}

export default {
  init, // short cut for 'init:init'
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
}
