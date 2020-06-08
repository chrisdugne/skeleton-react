const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    nexus: './src/index.js'
  },
  devtool: 'inline-source-map',
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: path.resolve(__dirname, './src'),
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  devServer: {
    contentBase: './sandbox',
    watchContentBase: true,
    compress: true
  },
  plugins: [],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
