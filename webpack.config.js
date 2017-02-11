const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const _src = path.resolve(__dirname, 'src');
const _dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: [
    'whatwg-fetch',
    path.resolve(_src, 'app.js'),
  ],
  output: {
    filename: 'app.bundle.js',
    path: _dist,
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
      { test: /\.s?css$/, exclude: /node_modules/, loaders: ['css-loader', 'style-loader', 'sass-loader'] },
      { test: /\.(png|jpe?g|gif|svg)/, exclude: /node_modules/, loaders: ['file-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(_src, 'app.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
