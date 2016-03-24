var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'webpack');
var BUILD_PATH = path.resolve(APP_PATH, 'build');
module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	entry: APP_PATH,
	//输出的文件名 合并以后的js会命名为bundle.js
	output: {
		path: BUILD_PATH,
		filename: 'my.js'
	},
	//添加我们的插件 会自动生成一个html文件
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Hello World app'
		})
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	},
/*css-loader会遍历css文件，找到所有的url(...)并且处理。
style-loader会把所有的样式插入到你页面的一个style tag中。*/
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style','css','sass'],//从右边到左边加载
				include: APP_PATH
			},
			{
				test:/\.(png|jpg)$/,
				loader:"url?limit=888",/*注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片。*/
			},
			{
				test:/\.jsx$/,
				loader:'babel',
				include:APP_PATH,
				query:{
					preset:['es2015']
				}
			}
		]
	},
};