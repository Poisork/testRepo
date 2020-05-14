const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackTools = require('./webpackTools.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: webpackTools.jsLoaders(true)
      }
    ]
  }
});
