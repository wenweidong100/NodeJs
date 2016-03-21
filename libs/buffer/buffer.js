
//创建buffer类
//var buf = new Buffer(10);
//var buf = new Buffer([10,20,30,40,50]);
//var buf = new Buffer('hello','utf-8');

//写入缓冲区
var buf = new Buffer(256);
length = buf.write('你好！。d')
console.log(length);
//string - 写入缓冲区的字符串。
//offset - 缓冲区开始写入的索引值，默认为 0 。
//length - 写入的字节数，默认为 buffer.length
//encoding - 使用的编码。默认为 'utf8' 。


//从缓冲区读取数据

//buf.toString()

buf = new Buffer(26);
for(var i=0;i<26;i++){
	buf[i]=i+97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));

//buffer转换为JSON对象

//buf.toJSON()

var buf = new Buffer('hello world');
var json = buf.toJSON(buf);

console.log(json);

//缓冲区合并
//buffer.concat(list)
//list - 用于合并的 Buffer 对象数组列表。
//totalLength - 指定合并后Buffer对象的总长度。

var buffer1 = new Buffer('hello');
var buffer2 = new Buffer('world');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log(buffer1,buffer2,buffer3.toString());

//比较缓冲区
//buf.compare(otherBuffer)
//小的在前面
var buffer1 = new  Buffer('abcde');
var buffer2 = new  Buffer('abcdE');
var result = buffer1.compare(buffer2);

if(result<0) console.log(buffer1,buffer2)
if(result==0) console.log(buffer1,buffer2)
if(result>0) console.log(buffer1,buffer2)

//拷贝缓冲区
//buf.copy()
//targetBuffer - 要拷贝的 Buffer 对象。
//targetStart - 数字, 可选, 默认: 0
//sourceStart - 数字, 可选, 默认: 0
//sourceEnd - 数字, 可选, 默认: buffer.length

var buffer1 = new Buffer('abc');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log(buffer2.toString());

//缓冲区裁剪
//buf.slice();
//start - 数字, 可选, 默认: 0
//end - 数字, 可选, 默认: buffer.length

var buffer1 =new Buffer('runoob');
var buffer2 = buffer1.slice(0);
console.log(buffer2.toString());

//缓冲区长度
//buf.length
//中文占三个长度
var buffer = new Buffer('你好');
console.log(buffer.length);
















































