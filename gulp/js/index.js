// 加载依赖库
var express      = require('express');
var fs           = require('fs');
var path         = require('path');
var libUrl       = require('url');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('cookie-session');
var bodyParser   = require('body-parser');
var async        = require('async');

// 创建项目实例
var app          = express();
var isDev        = "development" == app.get('env');
// process.chdir('./node/express-scss/');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var compiler = webpack(require('../../webpack.config.js'));
app.use(webpackDevMiddleware(compiler, {
	stats:{colors:true}
}));

// 加载路由控制配置文件
express.UserConfig = require('./config');

// 定义EJS模板引擎和模板文件位置，也可以使用jade或其他模型引擎
app.set('views', express.UserConfig.staticDir);
app.set('view engine', 'ejs');

// 定义icon图标
app.use(favicon());

// 定义日志和输出级别
app.use(logger('dev'));

// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// 定义cookie解析器
app.use(cookieParser());
// dev开发模式下执行下面动作
if(isDev){
	app.use(express.UserConfig.compileSCSS);
	app.use(express.UserConfig.compileTemplate);
}
app.use(express.UserConfig.combo);

// 定义静态文件目录
//app.use(express['static'](express.UserConfig.staticDir));
app.use(express.static(express.UserConfig.staticDir));

app.use(session({name:'_SSID_', keys:['skey1', 'skey2']}));

async.series([//{{{
	function(){
		express.UserConfig.routes(app, path.join(__dirname, 'routes'), '/');
	},
	function(){
		/// catch 404 and forward to error handler
		app.use(function(req, res, next) {
			var err = new Error('Not Found');
			err.status = 404;
			next(err);
		});

		/// error handlers

		// development error handler
		// will print stacktrace
		if (app.get('env') === 'development') {
			app.use(function(err, req, res, next) {
				res.status(err.status || 500);
				res.render('error', {
					message: err.message,
					error: err
				});
			});
		}

		// production error handler
		// no stacktraces leaked to user
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: {}
			});
		});
	}
]);//}}}

// 输出模型app
module.exports = app;
/* vim:set fdm=marker tabstop=4 shiftwidth=4 softtabstop=4: */
