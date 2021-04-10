var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

const server = http.createServer(
    function(req, res) { 
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n'); 
    }
);

server.listen(port, hostname);

console.log('Server running at http://'+hostname+':'+port);
