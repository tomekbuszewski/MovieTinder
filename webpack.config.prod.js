var path = require('path');

module.exports = {
  devtool: 'none',
  entry: './source/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { // SVG
        test: /\.svg$/,
        loader: 'babel-loader!svg-react-loader'
      },
      { // SCSS
        test: /\.scss$|css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoader: 1, modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' } },
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