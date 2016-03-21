var canadianDollar = 0.91;
function roundTwoDecimals(amount){
	return Math.round(amount*100)/100;
}

exports.canadianToUS = function(can){
	return roundTwoDecimals(can * canadianDollar);
}

exports.UStoCanadian = function(us){
	return roundTwoDecimals(us / canadianDollar);
}


///module.export 可以返回一个函数，对象，变量等

//如果只需要从模块中得到一个函数，那么require中返回一个函数的代码要比返回一个对象更加优雅！！！

//module.export.listen 是 export.listen的简写  如果弄不清楚他们的区别就统一使用module.export.listen