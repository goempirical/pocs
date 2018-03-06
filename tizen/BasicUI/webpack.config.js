const path = require('path');
module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: path.resolve(__dirname, 'tizen'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
