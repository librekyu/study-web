var http = require('http');
var url  = require('url');
var fs   = require('fs');


var hostname = '127.0.0.1';
var port = 3000;

http
  .createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
      console.log(req.url);
      if (pathname === '/front') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('front\n');
      } else if(pathname == '/back'){
        res.end('back\n');
      }else{
        res.end('adfaafsdf');
      }
    
  })
  .listen(port, hostname);

console.log('Server running at http://' + hostname + ':' + port);
