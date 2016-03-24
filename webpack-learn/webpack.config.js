var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/entry.js'),
	output: {
		path: path.resolve(__dirname, './assets'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
		]
	},

	resolve:{
		extensions:['','.js','.json']
	},
};