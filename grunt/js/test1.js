//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
//cssmin = require('gulp-minify-css');//压缩模块
//确保本地已安装gulp-sourcemaps [cnpm install gulp-sourcemaps --save-dev]
	sourcemaps = require('gulp-sourcemaps');
//定义一个testLess任务（自定义任务名称）
gulp.task('testSass', function () {
	//gulp.src(['./gulp/scss/test.scss','./gulp/scss/test1.scss']) //该任务针对的文件 //多个文件用数组的形式传入参数
	gulp.src(['gulp/scss.scss', 'gulp/scss{reset,test}.scss'])//编译src目录下的所有less文件//除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
		//.pipe(sourcemaps.init())
		.pipe(sass()) //该任务调用的模块
		//.pipe(cssmin()) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('./gulp/css')); //将会在src/css下生成index.css
});
gulp.task('jsmin', function () {
	gulp.src('gulp/js/index.js')
		//.pipe(uglify())
		.pipe(uglify({
			mangle: true,//类型：Boolean 默认：true 是否修改变量名
			compress: false,//类型：Boolean 默认：true 是否完全压缩
			preserveComments: 'all' //保留所有注释
		}))
		.pipe(gulp.dest('./gulp/dist/js'));
});
gulp.task('testConcat', function () {
	gulp.src('gulp/dist/js/*.js')
		.pipe(concat('concat.js'))//合并后的文件名
		.pipe(gulp.dest('./gulp/dist/'));
});
gulp.task('default',['testSass','jsmin','testConcat']); //定义默认任务
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径
