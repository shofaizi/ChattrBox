var path = require('path');

var extractFilePath = function (url) {
  var filePath;
  var fileName = 'index.html';

  if (url.length > 1) {
    fileName = url.substring(1);// to strip off the 1st character which will be '/'
  }
  console.log('The file is: ' + fileName);

  filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
}

module.exports = extractFilePath;
