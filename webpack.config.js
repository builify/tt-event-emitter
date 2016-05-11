const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');
const commandLineArgs = require('command-line-args');

// Command line arguments.
const cli = commandLineArgs([
  { name: 'no-minimize', alias: 'n', type: Boolean } // Minimize.
]);

// Get CLI options.
const options = cli.parse();
const optionsMinimize = !!(_.has(options, 'no-minimize') && options['no-minimize']);

// Config related.
const entryFile = path.join(__dirname, 'source', 'index.js');
const outputPath = path.join(__dirname, 'dist');
const fileName = `tt-event-emitter${optionsMinimize ? '.min' : ''}.js`;
const packPlugins = optionsMinimize ? [new webpack.optimize.UglifyJsPlugin({ minimize: true })] : [];

module.exports = {
  entry: entryFile,
  output: {
    path: outputPath,
    filename: fileName,
    libraryTarget: 'umd',
    library: 'TTEventEmitter'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  },
  plugins: packPlugins
};
