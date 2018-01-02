var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './source/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { // SCSS
        test: /\.scss$|css$/,
        use: [
          { loader: 'css-loader', options: { importLoader: 1, modules: true, localIdentName: '[path]___[name]__[local]___[hash:base64:5]' } },
          { loader: 'sass-loader', options: { sourceMap: false } }
        ]
      },
      { // JavaScript
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
};