const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const StartServerPlugin = require('start-server-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  entry: ['webpack/hot/poll?1000', path.join(__dirname, '..', 'src/server/index')],
  watch: true,
  target: 'node',
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  output: {
    path: commonPaths.outputPath,
    publicPath: 'http://localhost:3001/',
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        loader: 'null-loader',
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs: ['--inspect'], // allow debugging
      signal: 'SIGUSR2', // signal to send for HMR (defaults to `false`, uses 'SIGUSR2' if `true`)
      keyboard: true
    }),
  ],
};
