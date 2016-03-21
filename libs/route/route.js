var http = require('http');
var url = require('url');

function start(route){
	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;
		console.log(pathname+'  received');

		route(pathname);

		res.writeHead('200',{'content-Type':'text/plain'});
		res.write('hello world');
		res.end();
	}

	http.createServer(onRequest).listen(3000);
	console.log('start')
}

module.exports.start = start;