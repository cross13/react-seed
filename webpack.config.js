const webpackMerge = require('webpack-merge');
const { argv } = require('yargs');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  production: 'prod',
};
/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development'];
const { side } = argv;
const envConfig = require(`./webpack/webpack.${env}.${side}.js`);
module.exports = webpackMerge(common, envConfig);
