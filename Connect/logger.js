function setup(f){
	var regexp = /:(\w+)/g;
	return function logger(req,res,next){
		var str = f.replace(regexp,function(match , pro){
			console.log(match,pro)
			return req[pro];
		});
		console.log(str);
	}
}

module.exports = setup;