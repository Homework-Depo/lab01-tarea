var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('../index.html', function(error, html) {
    res.write(html);
    res.end();
  });
}).listen(8080);