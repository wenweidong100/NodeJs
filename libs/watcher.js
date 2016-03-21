//文件监视器

function Watcher(watchDir , processDir){ //参数分别是监控的目录和放置修改过文件的目录
	this.watchDir = watchDir;
	this.processDir = processDir;
}

//添加继承时间发射器行为的代码
var events = require('events');
var util = require('util');

util.inherits(Watcher,events.EventEmitter); //和Watcher.prototype = new events.EventEmitter()作用是一样的

var fs = require('fs');
var watchDir = './watch';
var processDir = './done';

Watcher.prototype.watch = function(){
	var watcher = this;
	console.log(this)
	fs.readdir(this.processDir , function(err ,files){
		if(err) throw err ;
		for(var index in files){
			watcher.emit('process',files[index]);
		}
	})
}

Watcher.prototype.start = function(){
	var watcher = this ;
	fs.watchFile(processDir,function(){
		watcher.watch();
	})
}

var watcher = new Watcher(watchDir , processDir);


watcher.on('process',function process(file){
	var watchFile = this.processDir + '/' + file ;
	var processedFile = this.watchDir + '/' + file.toLowerCase();

	fs.rename(  watchFile , processedFile, function(err){
		if(err)  throw err;
	})
})


watcher.start();