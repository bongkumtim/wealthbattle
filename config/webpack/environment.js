const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.append('Provide',
	new webpack.ProvidePlugin({
		$: 'jquery',
		Jquery: 'jquery',
		Popper: ['poper.js', 'default']
	}))

module.exports = environment
