var http  = require('http');
var fs    = require('fs');
var path  = require('path');
var mime  = require('mime');
var cache = {}


//辅助函数

function send404(res){
	res.writeHead(404,{'content-Type':'text/plain'});
	res.write('Error 404 :resource not found');
	res.end();
}

function sendFile(res , filePath , fileCotents){
	res.writeHead(200,{'content-Type':mime.lookup(path.basename(filePath))});
	res.end(fileCotents);
}

function serverStatic(res , cache , absPath){
	if(cache[absPath]){
		sendFile(res ,absPath ,cache[absPath]);
	}else{
		fs.exists(absPath , function(exists){
			if(exists){
				fs.readFile(absPath ,function(err ,data){
					if(err) send404(res);
					else{
						cache[absPath] = data;
						sendFile(res ,absPath ,data);
					}
				})
			}else{
				send404(res);
			}
		})
	}
}


//启动http服务器

var server = http.createServer(function(req , res){
	var filePath = false ;
	if(req.url == '/'){
		filePath = 'public/index.html';
	}else{
		filePath = 'public'+req.url;
	}
	var absPath = './' + filePath;
	serverStatic(res , cache , absPath);
}).listen(3000,function(){
	console.log('server listening on port 80')
})


//设置Socket.IO服务器

var chatServer = require('./libs/chat_server');
chatServer.listen(server);






































