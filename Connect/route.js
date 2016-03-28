var parse = require('url').parse;
module.exports = function route(o){
	return function(req,res,next){
		if(!o[req.method]){
			next();
			return;
		}
		var routes = o[req.method];
		console.log(routes)
		var url = parse(req.url);
		var paths = Object.keys(routes);
		console.log(paths)
		for(var i = 0 ; i < paths.length ; i++){
			var path = paths[i];
			console.log(path)
			var fn = routes[path];
			console.log(fn)
			path = path.replace(/\//g,'\\/').replace(/:(w+)/g,'([^\\/]+)');

			var re = new RegExp('^'+path+'$');

			var captures = url.pathname.match(re);

			if(captures){
				var args = [req,res].concat(captures.slice(1));
				fn.apply(null,args);
				return;
			}
		}
		next();
	}
}