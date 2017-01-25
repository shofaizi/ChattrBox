// this module will define the structure of messages and pass messages between ws-client and dom
import socket from './ws-client';
import {ChatForm, ChatList, promptForUsername} from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

let username = '';
username = promptForUsername();

class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, username);

    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      this.chatForm.init((data) => {
        let message = new ChatMessage(data);
        socket.sendMessage(message.serialize());
      // when user submits a message in the form the ChatForm instance will take
      // that data and send it to ChatApp's callback, and the callback will then
      // package it up as a ChatMessage and send it to the WebSocket server
      });
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
      let message = new ChatMessage(data);
      this.chatList.drawMessage(message.serialize());
      // draw new messages as they come in by calling chatList.drawMessage
    });
  }
}

class ChatMessage {
  constructor({
    message: m,
    user: u = username,
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
