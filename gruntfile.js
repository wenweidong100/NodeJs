module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'//文件内容的分隔符
			},
			dist: {
				src: ['./gulp/dist/js/*.js'],
				dest: './gulp/dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			//options: {
			//	banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			//},
			dist: {
				files: {
					'./gulp/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'] /*如果不用'<%= concat.dist.dest %>'，而是直接写路径dist/main.js，那很可能在压缩时main.js还没有生成*/
				}
			}
		},
		qunit: {
			files: ['./public/*.html']
		},
		jshint: {
			files: ['./gulp/js/*.js'],
			options: {
				//这里是覆盖JSHint默认配置的选项
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint', 'qunit']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('test', ['jshint', 'qunit']);

	grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};