//util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。

var util = require('util');
function Base(){
	this.name = 'base';
	this.base='1991';
	this.sayhello=function(){
		console.log('hello'+this.name);
	}
}

Base.prototype.showName = function(){
	console.log(this.name)
}
function Sub(){
	this.name = 'sub';
}
util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayhello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayhello();
console.log(objSub);

//Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。




console.log('-------------------')
//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。

function Person(){
	this.name = 'byvoid';
	this.tostring=function(){
		return this.name;
	}
}

var obj = new Person();
console.log(util.inspect(obj),typeof util.inspect(obj));
console.log(util.inspect(obj,true));

//util.isArray(object)如果给定的参数 "object" 是一个数组返回true，否则返回false。
console.log(util.isArray([]))/*true*/
console.log(util.isArray(new Array))/*true*/
console.log(util.isArray({}))/*false*/

//util.isRegExp(object)
//如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
//util.isDate(object)
//如果给定的参数 "object" 是一个日期返回true，否则返回false。
//util.isError(object)
//如果给定的参数 "object" 是一个错误对象返回true，否则返回false。