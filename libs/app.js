//var express = require('express');
//var port = process.env.PORT || 3000
//var app = express();
//
//app.set('views','./views');
//app.set('views engine','jade');
//app.listen(port);
//
//console.log(port +' success');

var fs = require('fs');
//fs.readFile('./views/a.json',function(err,data){
//	console.log(err)
//	console.log(data)
//})

var http = require('http');
var server = http.createServer();
server.on('request',function(req ,res){
	res.writeHead(200,{'Content-Type':'image/png'});
	fs.createReadStream('./views/reply-del.png').pipe(res);
	//res.end('Hello world!');
}).listen(80);
//server;

//var stream = fs.createReadStream('./views/app.js');
//stream.on('data',function(chunk){
//	console.log(chunk);
//})
//stream.on('end',function(){
//	console.log(111);
//})