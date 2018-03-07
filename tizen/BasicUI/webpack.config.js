const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    hot: true
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'tizen/dist')
  }
};
