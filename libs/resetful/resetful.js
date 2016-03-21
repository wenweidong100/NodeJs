var express = require('express');
var app = express();
var fs = require("fs");
var id = 2;
app.get('/listUsers', function (req, res) {
	fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});
})

var user = {
	"user4" : {
		"name" : "mohit",
		"password" : "password4",
		"profession" : "teacher",
		"id": 5
	}
}
app.get('/addUser', function (req, res) {
	// 读取已存在的数据
	fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
		data = JSON.parse( data );
		data["user4"] = user["user4"];
		console.log( data );
		res.end( JSON.stringify(data));
	});
})

app.get('/:id', function (req, res) { //可选参数影响deleteUser运行
	// 首先我们读取已存在的用户
	console.log( 'dasdasds');
	fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
		data = JSON.parse( data );
		var user = data["user" + req.params.id]
		//console.log( user );
		//console.log( data );
		console.log( req.params );
		res.end( JSON.stringify(user));
	});
})
app.get('/deleteUser', function (req, res) {

	// First read existing users.
	fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
		data = JSON.parse( data );

		delete data["user" + 2];
		console.log( JSON.stringify(data) +'1');
		res.end( JSON.stringify(data));
	});
})
var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http:", host, port)

})