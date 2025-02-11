// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
// Create a new file that will contain the comments
fs.appendFile('comments.txt', 'New comment\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
// Open comments.txt
fs.open('comments.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
// Create a new file using the appendFile() method:
fs.appendFile('comments.txt', 'New comment\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
// Delete the file system module (fs), and any other modules you are not using
// You can delete the file system module (fs) by using the following code:
// var http = require('http');
// var url = require('url');
// Create a new file using the open() method:
fs.open('comments.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
// Create a new, empty file using the writeFile() method:
fs.writeFile('comments.txt', 'New comment\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
// Create a new, empty file using the open() method:
fs.open('comments.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
// Create a new, empty file using the writeFile() method:
fs.writeFile('comments.txt', 'New comment\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
// Create a new, empty file using the open() method:
fs.open('comments.txt', 'w', function (err, file
