//支持GET和POST的HTTP服务器


var http = require('http');
var items = [];
//判断请求类型
var server = http.createServer(function(req , res){
	if('/'==req.url){
		switch (req.method){
			case 'GET':
				show(res);
				break;
			case 'POST':
				add(req,res);
				break;
			default :
				badRequest(res);
		}
	}else{
		notFound(res)
	}
}).listen(3000);
//展示item
function show(res){
	var html = '<html><head><meta charset="utf-8"><title>Todo List</title></head><body>\
				<h1>Todo List</h1>\
				<ul>'+
				items.map(function(item){
					return '<li>'+item+'</li>';
				}).join('')+
				'</ul>\
				<form method="post" action="/">\
				<p><input type="text" name="item"/></p>\
				<p><input type="submit" value="Add item"/></p>\
				</form></body></html>';
		res.setHeader('Content-Type','text/html');
		res.setHeader('Content-Length',Buffer.byteLength(html));

		res.end(html);
}

//请求地址错误
function notFound(res){
	res.statusCode = 404;
	res.setHeader('Content-Type','text/plain');
	res.end('Not found');
}
//请求失败
function badRequest(res){
	res.statusCode = 400;
	res.setHeader('Content-Type','text/plain');
	res.end('Bad request');
}
//添加item
var qs = require('querystring');
function add(req ,res){
	var body = '';
	req.setEncoding('utf8');
	req.on('data',function(chunk){
		body+=chunk;
	});
	req.on('end',function(){
		var obj = qs.parse(body);
		items.push(obj.item);
		console.log(obj)
		show(res);
	})
}