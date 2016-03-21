//var net = require('net');
//var server = net.createServer(function(socket){
//	socket.on('data',function(data){
//		socket.write(data);
//	})
//}).listen(80);
//
//
//
//var EventEmitter = require('events').EventEmitter;
//var channel = new EventEmitter();
//channel.emit('join');
//channel.on('join',function(){
//	console.log('Ok!')
//});

var events = require('events');
var Emitter = new events.EventEmitter;
Emitter.on('errors',function(err){
	console.log(err);
});
Emitter.emit('errors',new Error('something is wrong'));