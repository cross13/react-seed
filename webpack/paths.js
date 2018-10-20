const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  srcPath: path.resolve(__dirname, '../src/'),
  outputPath: path.resolve(__dirname, '../', '.build'),
  browserEntryPath: path.resolve(__dirname, '../', 'src/browser/index.jsx'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
