var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('./input.txt');
//
////设置编码
//readerStream.setEncoding('utf8');
//
////处理流事件
//
//readerStream.on('data',function(chunk){
//	data+=chunk;
//});
//
//readerStream.on('end',function(chunk){
//	console.log(data);
//});
//
//
//readerStream.on('error',function(err){
//	console.log(err.stack);
//})
//
//console.log('执行完毕');


//创建写入流

var data = 'baidu.com';
var write = fs.createWriteStream('output.txt');//会自动生成一个文件

//write.write(data,'utf8');
//
//write.end();
//
//write.on('finish',function(){
//	console.log('写入完成');
//});
//
//write.on('error',function(err){
//	console.log(err.stack);
//});

console.log('执行完毕');

readerStream.pipe(write);


//链式流
var zlib = require('zlib');
//压缩input.txt

//readerStream
//	.pipe(zlib.createGzip()) //传送到这里
//	.pipe(fs.createWriteStream('input.txt.gz'));

console.log('压缩完毕')

fs.createReadStream('input.txt.gz')
			.pipe(zlib.createGunzip())//传送到这里
			.pipe(fs.createWriteStream('inputs.txt'))
console.log('解压完成')