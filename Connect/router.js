var connect = require('connect');
var route = require('./route');
var routers = {
	GET:{
		'/users':function(req,res){
			res.end('1111')
		},
		'/users/:id':function(req,res){
			res.end('22222')
		}
	},
	DELETE:{
		'/users/:id':function(req,res,id){
			res.end('33333')
		}
	}
};
connect()
	.use(route(routers))
	.listen(80);