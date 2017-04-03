module.exports = {

	entry: './src/app/main.js',
	output: {
		path: __dirname + '/asset',
		publicPath: '/asset/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	}
	
}