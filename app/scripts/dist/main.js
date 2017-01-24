(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // this module will define the structure of messages and pass messages between ws-client and dom


var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient2.default.init('ws://localhost:3001');
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      //method to represent data in ChatMessage's properties as a plain JS object
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

new ChatApp();
// in terminal run babel app/scripts/src/app.js -o app/scripts/dist/main.js
// to compile app.js into main.js

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 1. connect to the server
var socket = void 0;
// 2. perform initial setup when the connection is first opened
function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}
// 3. forward incoming messages to their handlers
// 4. send outgoing messages

exports.default = {
  init: init
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNDQTs7Ozs7OzBKQURBOzs7SUFHTSxPLEdBQ0osbUJBQWM7QUFBQTs7QUFDWixxQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDRCxDOztJQUdHLFc7QUFDSiw2QkFJRztBQUFBLFFBSFEsQ0FHUixRQUhELE9BR0M7QUFBQSx5QkFGRCxJQUVDO0FBQUEsUUFGSyxDQUVMLDZCQUZPLFFBRVA7QUFBQSw4QkFERCxTQUNDO0FBQUEsUUFEVSxDQUNWLGtDQURhLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNaOztBQUFBOztBQUNELFNBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0Q7Ozs7Z0NBQ1c7QUFBRTtBQUNaLGFBQU07QUFDSixjQUFNLEtBQUssSUFEUDtBQUVKLGlCQUFTLEtBQUssT0FGVjtBQUdKLG1CQUFXLEtBQUs7QUFIWixPQUFOO0FBS0Q7Ozs7OztBQUVILElBQUksT0FBSjtBQUNBO0FBQ0E7O2tCQUVlLE87Ozs7O0FDL0JmOzs7Ozs7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBLElBQUksZUFBSjtBQUNBO0FBQ0EsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQjtBQUNqQixXQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFVBQVEsR0FBUixDQUFZLGVBQVo7QUFDRDtBQUNEO0FBQ0E7O2tCQUVlO0FBQ2IsUUFBTTtBQURPLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gdGhpcyBtb2R1bGUgd2lsbCBkZWZpbmUgdGhlIHN0cnVjdHVyZSBvZiBtZXNzYWdlcyBhbmQgcGFzcyBtZXNzYWdlcyBiZXR3ZWVuIHdzLWNsaWVudCBhbmQgZG9tXG5pbXBvcnQgc29ja2V0IGZyb20gJy4vd3MtY2xpZW50JztcblxuY2xhc3MgQ2hhdEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG4gIH1cbn1cblxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbWVzc2FnZTogbSxcbiAgICB1c2VyOiB1PSdiYXRtYW4nLFxuICAgIHRpbWVzdGFtcDogdD0obmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gIH0pIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtO1xuICAgIHRoaXMudXNlciA9IHU7XG4gICAgdGhpcy50aW1lc3RhbXAgPSB0O1xuICB9XG4gIHNlcmlhbGl6ZSgpIHsgLy9tZXRob2QgdG8gcmVwcmVzZW50IGRhdGEgaW4gQ2hhdE1lc3NhZ2UncyBwcm9wZXJ0aWVzIGFzIGEgcGxhaW4gSlMgb2JqZWN0XG4gICAgcmV0dXJue1xuICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxuICAgIH07XG4gIH1cbn1cbm5ldyBDaGF0QXBwKCk7XG4vLyBpbiB0ZXJtaW5hbCBydW4gYmFiZWwgYXBwL3NjcmlwdHMvc3JjL2FwcC5qcyAtbyBhcHAvc2NyaXB0cy9kaXN0L21haW4uanNcbi8vIHRvIGNvbXBpbGUgYXBwLmpzIGludG8gbWFpbi5qc1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTtcbiIsIi8vIDEuIGNvbm5lY3QgdG8gdGhlIHNlcnZlclxubGV0IHNvY2tldDtcbi8vIDIuIHBlcmZvcm0gaW5pdGlhbCBzZXR1cCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGZpcnN0IG9wZW5lZFxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcbiAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xufVxuLy8gMy4gZm9yd2FyZCBpbmNvbWluZyBtZXNzYWdlcyB0byB0aGVpciBoYW5kbGVyc1xuLy8gNC4gc2VuZCBvdXRnb2luZyBtZXNzYWdlc1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXRcbn1cbiJdfQ==
