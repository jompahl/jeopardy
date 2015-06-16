/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: false,
  devtool: false,
  entry: './src/scripts/components/FlicWebshopApp.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'styles': __dirname + '/src/styles',
      'svg': __dirname + '/src/svg',
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
      loader: 'style-loader!css-loader!sass-loader?outputStyle=compressed!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

};
