var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var root = __dirname;


var server = http.createServer(function(req , res){
	var Url = parse(req.url);
	var path = join(root,Url.pathname);
	//console.log(root,Url,path)
	//var stream = fs.createReadStream(path).pipe(res);
	//stream.on('error',function(err){
	//	res.statusCode = 500;
	//	res.end('Server Error');
	//});

	fs.stat(path , function(err,stat){
		if(err){
			if('ENONET' == err.code){
				res.statusCode = 404;
				res.end('Not Found');
			}else{
				res.statusCode = 500;
				res.end('Internal server error');
			}
		}else{
			res.setHeader('Content-Length',stat.size);
			var stream = fs.createReadStream(path).pipe(res);
			stream.on('error',function(err){
				res.statusCode = 500;
				res.end('Internal server err')
			})
		}
	});


	//stream.on('data',function(err,chunk){
	//	res.write(chunk);
	//});
	//stream.on('end',function(){
	//	res.end();
	//})
}).listen(3000);