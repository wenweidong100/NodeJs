var http = require('http');
var url = require('url');
var items = [];
var server = http.createServer(function(req,res){
	switch(req.method){
		case 'POST':
			console.log(222)
			var item = '';
			req.setEncoding('utf8');
			req.on('data',function(chunk){
				item += chunk;

			});
			req.on('end',function(){
				items.push(item);
				res.end('OK');
			})
			break;
		case 'GET':
			console.log(1)
			items.forEach(function(item , i ){
				res.write(i+')'+item + '\n');
			});
			res.end();
			break;
	}
}).listen(3000);