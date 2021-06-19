
var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    
    response.end('ola mundo \n');
}).listen(8000,'127.0.0.1');
console.log('rodando servidor na porta 8000')
z