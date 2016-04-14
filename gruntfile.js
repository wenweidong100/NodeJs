//module.exports = function(grunt) {
//
//	grunt.initConfig({
//		pkg: grunt.file.readJSON('package.json'),
//		concat: {
//			options: {
//				separator: ';'//文件内容的分隔符
//			},
//			dist: {
//				src: ['./gulp/js/*.js'],
//				dest: './gulp/dist/<%= pkg.name %>.js'
//			}
//		},
//		uglify: {
//			options: {
//				// 此处定义的banner注释将插入到输出文件的顶部
//				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
//			},
//			dist: {
//				files: {
//					'./gulp/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'] /*如果不用'<%= concat.dist.dest %>'，而是直接写路径dist/main.js，那很可能在压缩时main.js还没有生成*/
//				}
//			}
//		},
//		qunit: {
//			files: ['./public/*.html']
//		},
//		/*JSHint只需要一个文件数组(也就是你需要检测的文件数组)， 然后是一个options对象(这个对象用于重写JSHint提供的默认检测规则)。
//		你可以到JSHint官方文档站点中查看完整的文档。如果你乐于使用JSHint提供的默认配置，那么在Gruntfile中就不需要重新定义它们了.*/
//		jshint: {
//			files: ['./gulp/js/*.js'],
//			options: {
//				//这里是覆盖JSHint默认配置的选项
//				globals: {
//					jQuery: true,
//					console: true,
//					module: true,
//					document: true
//				}
//			}
//		},
//		watch: {
//			files: ['<%= concat.files %>'],
//			tasks: ['concat']
//		}
//	});
//
//	grunt.loadNpmTasks('grunt-contrib-uglify');
//	grunt.loadNpmTasks('grunt-contrib-jshint');
//	grunt.loadNpmTasks('grunt-contrib-qunit');
//	grunt.loadNpmTasks('grunt-contrib-watch');
//	grunt.loadNpmTasks('grunt-contrib-concat');
//
//	grunt.registerTask('test', ['jshint', 'qunit']);
//
//	grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
//
//};
//Gruntfiles.js文件将长成这屌样子
//Wrapper函数
/*module.exports = function(grunt) {

	// 配置项目
	grunt.initConfig({
		// 配置任务
	});

	// 加载任务
	grunt.loadNpmTasks('grunt任务插件名');

	// 默认任务.
	grunt.registerTask('default', ['任务名']);

};*/

module.exports = function(grunt){
	var autoprefixer = require('autoprefixer-core');
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		concat: {
			//这里是concat任务的配置信息
		},
		uglify: {
			//这里是uglify任务的配置信息
			options: {
				stripBanners:true,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				src: './grunt/js/*.js',
				dest: './grunt/dest/<%= pkg.name %>-<%= pkg.version %>.js'
			}
		},
		sass:{
			dist:{
				option:{
					style:'compressed'
				},
				expand:true,//启用下面的选项
				cwd:'./animate/',//cwd相当于给所有匹配的文件设置一个相对的起点。
				src:'*.scss',
				dest:'./animate/',
				ext:'.min.css'//输出格式
			},
			dev:{

			}
		},
		jshint:{
			build:['Gruntfile.js','./grunt/js/*.js'],
			options:{
				jshintrc:'.jshintrc'
			}
		},
		watch:{
			dist:{
				files:['./grunt/js/*.js'],
				tasks:['uglify','sass'],
				options:{spawn:false}
			}
		},
		postcss: {
			options: {
				processors: [
					autoprefixer({ browsers: ['last 2 version'] }).postcss
				]
			},
			// dist: {
			//  src: 'src/css/*.css',
			//  dest:'dest/css/*.css'
			// }
			multiple_files: {
				expand: true,
				flatten: true,
				src: './grunt/scss/*.css', // -> src/css/file1.css, src/css/file2.css
				dest: './grunt/dest/' // -> dest/css/file1.css, dest/css/file2.css
			},
		},

		////任意非任务特定属性
		//my_property: 'whatever',
		//my_src_file: ['foo/*.js', 'bar/*.js']
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-postcss');

	//grunt.registerTask('default',['uglify','sass','jshint','watch']);
	//grunt.registerTask('default', ['postcss']);
};






































