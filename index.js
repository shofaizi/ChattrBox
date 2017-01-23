var http = require('http');
// access HTTP module
var fs = require('fs');

var server = http.createServer(function (req,res) {
  console.log('Responding to a request');
  var url = req.url;

  var fileName = 'index.html';
  if (url.length > 1) {
    fileName = url.substring(1);
    // to strip off the 1st character which will be '/'
  }
  console.log(fileName);
  fs.readFile('app/index.html', function (err, data) {
    res.end(data);
  })
});

server.listen(3000);
