var http = require('http');
var url = require('url');
var fs = require('fs');

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



  const issuelist = require('./issueclass');
  let issueListObj = issuelist.saySomething(); 
  console.log(issueListObj)

  fs.writeFile('issuelist.json', JSON.stringify(issueListObj), function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

  fs.readFile('issuelist.json', function (err, data) {
    if (err) throw err;
    console.log(JSON.parse(data));
  }); 
