var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './source/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { // SCSS
        test: /\.scss|.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoader: 1, modules: true, localIdentName: '[path]___[name]__[local]___[hash:base64:5]' } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      { // JavaScript
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: 'public',
    historyApiFallback: true,
    hot: true,
  },
};