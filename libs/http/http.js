var http = require('http');
var server = http.createServer(function(req , res){
	res.writeHead('Content-Type','text/html')
	res.write('hello world');
	res.end();
}).listen(80) //请求头默认的状态码为200  res.setHeader('Content-Type','text/html')  res.writeHeader('Content-Type','text/html')