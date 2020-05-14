const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge({
  customizeArray: merge.unique(
      'plugins',
      ['HtmlWebpackPlugin'],
      plugin => plugin.constructor && plugin.constructor.name
  ),
})(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[hash].js',
  },
  devServer: {
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css',
    }),
  ],
});
