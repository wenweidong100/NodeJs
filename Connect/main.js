var connect = require('connect');
var logger = require('./logger');
var app = connect();

console.log(app.length) //3
app.use(function(req,res,next){
	//console.log('%s %s',req.method,req.url);
	next();
});

/*app.use('/admin',function(req ,res ,next){
	var authorization = req.headers.authorization;
	if(!authorization) return next(new Error('Unauthorized'));
	var parts = authorization.split(' ');
	var scheme = parts[0];
	var auth = new Buffer(parts[1],'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];
	authenticateWithDatebase(user , pass , function(err){
		if(err) return next(err);
		next();
	})
});
app.use('/admin',function(req,res,next){
	switch(req.url){
		case '/':
			res.end('try /users');
			break;
		case '/users':
			res.setHeader('Content-Type','application/json');
			res.end(JSON.stringify(['tobi','loki','jane']));
			break;
	}
});*/
app.use(function(req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.end('hello world');
	next()
});
app.use(logger(':method :url'))
app.listen(80);