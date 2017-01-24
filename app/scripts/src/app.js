// this module will define the structure of messages and pass messages between ws-client and dom
import socket from './ws-client';

class ChatApp {
  constructor() {
    socket.init('ws://localhost:3001');
  }
}

class ChatMessage {
  constructor({
    message: m,
    user: u='batman',
    timestamp: t=(new Date()).getTime()
  }) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize() { //method to represent data in ChatMessage's properties as a plain JS object
    return{
      user: this.user,
      message: this.message,
      timestamp: this.timestamp
    };
  }
}
new ChatApp();
// in terminal run babel app/scripts/src/app.js -o app/scripts/dist/main.js
// to compile app.js into main.js

export default ChatApp;
