var http = require('http');
var formidable =require('formidable');
var items = [];
//判断请求类型
var server = http.createServer(function(req , res){
	if('/'==req.url){
		switch (req.method){
			case 'GET':
				show(res);
				break;
			case 'POST':
				upload(req,res);
				break;
			default :
				badRequest(res);
		}
	}else{
		notFound(res)
	}
}).listen(3000);


function show(res){
	var html = '<html><head><meta charset="utf-8"><title>Todo List</title></head><body>\
				<h1>Todo List</h1>\
				<ul>'+
		items.map(function(item){
			return '<li>'+item+'</li>';
		}).join('')+
		'</ul>\
		<form method="post" action="/" enctype="multipart/form-data">\
		<p><input type="text" name="item"/></p>\
		<p><input type="file" name="file"/></p>\
		<p><input type="submit" value="upload"/></p>\
		</form></body></html>';
	res.setHeader('Content-Type','text/html');
	res.setHeader('Content-Length',Buffer.byteLength(html));

	res.end(html);
}


function upload(req ,res){
	if(!isFormData(req)){
		res.statusCode = 400;
		res.end('bad request');
		return;
	}
	var form = new formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		console.log(fields);
		console.log(files);
		res.end('complete');
	});
	form.on('progress',function(rec , exp){
		var per = Math.floor((rec/exp)*100);
		console.log(per);
	})
}

function isFormData(req){
	var type = req.headers['content-type']||'';
	return 0 == type.indexOf('multipart/form-data');
}