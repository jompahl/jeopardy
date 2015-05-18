/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

module.exports = {

  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
      'webpack/hot/only-dev-server',
      './src/scripts/components/JeopardyApp.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.scss'],
    alias: {
      'styles': __dirname + '/src/styles',
      'mixins': __dirname + '/src/scripts/mixins',
      'components': __dirname + '/src/scripts/components',
      'stores': __dirname + '/src/scripts/stores',
      'dispatcher': __dirname + '/src/scripts/dispatcher',
      'actions': __dirname + '/src/scripts/actions',
      'questions': __dirname + '/src/questions',
      'constants': __dirname + '/src/scripts/constants'
    }
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jsxhint'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.scss$/,
	  loader: 'style!css!sass!autoprefixer?{browsers:["last 2 version", "Firefox 15"]}'
    }, {
      test: /\.css$/,
	  loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
