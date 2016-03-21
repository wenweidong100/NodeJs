var fs = require('fs');
//var data = fs.readFileSync('./input.txt');//读取文件

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
	if (err) return console.error(err);
	console.log(data.toString());
});

console.log("程序执行结束!");

//程序执行结束!  //非阻塞代码 ，，完成后再执行回调函数
//data
//console.log(data.toString());


var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");

//阻塞代码
//hello world
//程序执行结束!