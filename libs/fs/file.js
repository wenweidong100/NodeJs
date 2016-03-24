/*
var fs = require("fs");

// 异步读取
fs.readFile('inputs.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");*/


/*
var fs = require("fs");

// 异步模式下打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("文件打开成功！");
	console.log(fd);
});*/


//fs.stat(path, callback) 通过异步模式获取文件信息
/*
var fs = require('fs');

fs.stat('input.txt', function (err, stats) {
	console.log(stats)
	console.log(stats.isFile()); 		//true
	console.log(stats.isDirectory()); 		//false
})*/


//异步模式下写入文件 fs.writeFile(filename, data[, options], callback)
var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('inputs.txt', '123213',  function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("数据写入成功！");
	console.log("--------我是分割线-------------")
	console.log("读取写入的数据！");
	fs.readFile('inputs.txt', function (err, data) {
		if (err) {
			return console.error(err);
		}
		console.log("异步读取文件数据: " + data.toString());
	});
});

//异步模式下读取文件 fs.read(fd, buffer, offset, length, position, callback)

/*fd - 通过 fs.open() 方法返回的文件描述符。
buffer - 数据写入的缓冲区。
offset - 缓冲区写入的写入偏移量。
length - 要从文件中读取的字节数。
position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。*/

/*var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("文件打开成功！");
	console.log("准备读取文件：");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
		if (err){
			console.log(err);
		}
		console.log(bytes + "  字节被读取");

		// 仅输出读取的字节
		if(bytes > 0){
			console.log(buf.slice(0, bytes).toString());
		}
		// 关闭文件
		fs.close(fd, function(err){
			if (err){
				console.log(err);
			}
			console.log("文件关闭成功");
		});
	});
});*/

//fs.ftruncate(fd, len, callback) 异步模式下截取文件
//fd - 通过 fs.open() 方法返回的文件描述符。
//len - 文件内容截取的长度。
//callback - 回调函数，没有参数。

/*var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log("文件打开成功！");
	console.log("截取10字节后的文件内容。");

	// 截取文件
	fs.ftruncate(fd, 10, function(err){
		if (err){
			console.log(err);
		}
		console.log("文件截取成功。");
		console.log("读取相同的文件");
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
			if (err){
				console.log(err);
			}

			// 仅输出读取的字节
			if(bytes > 0){
				console.log(buf.slice(0, bytes).toString());
			}

			// 关闭文件
			fs.close(fd, function(err){
				if (err){
					console.log(err);
				}
				console.log("文件关闭成功！");
			});
		});
	});
});*/


//fs.unlink(path, callback)删除文件
/*var fs = require("fs");

console.log("准备删除文件！");
fs.unlink('inputs.txt', function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("文件删除成功！");
});*/

//fs.mkdir(path[, mode], callback)
//path - 文件路径。
//mode - 设置目录权限，默认为 0777。
//callback - 回调函数，没有参数。
//var fs = require("fs");
//
////console.log(创建目录 /tmp/test);
//fs.mkdir(__dirname+'/tmp',function(err){
//	if (err) {
//		return console.error(err);
//	}
//	console.log("目录创建成功。");
//});

//读取目录 fs.readdir(path, callback)

/*var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir(__dirname,function(err, files){
	if (err) {
		return console.error(err);
	}
	files.forEach( function (file){
		console.log( file );
	});

	console.log( files );//数组
});*/


//fs.rmdir(path, callback) 删除目录


var fs = require("fs");

console.log("准备删除目录");
fs.rmdir(__dirname+'/tmp',function(err){
	if (err) {
		return console.error(err);
	}
	console.log("读取 目录");
	fs.readdir(__dirname,function(err, files){
		if (err) {
			return console.error(err);
		}
		files.forEach( function (file){
			console.log( file );
		});
	});
});



















