const path = require('path');
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// console.log('path', __dirname + './app/app.jsx');
console.log('path', path.resolve(__dirname, './app/actions'));
console.log('path', path.resolve(__dirname, 'app/actions'));

console.log('path.resolve(__dirname, app)', path.resolve(__dirname, 'app'));

module.exports = {
  entry: './app/app.jsx',
  // entry: path.resolve(__dirname, './app/app.jsx'),
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
    },
    // when doing 'require' and 'import', webpack will check this directories for files
    // e.g. import ... from 'filename', no need to specify path or file extensions
    modules: [
      'src',
      'styles',
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.scss', '.css']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // allows to use @import statements
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [ require('autoprefixer')];
              }
            }
          },
          // converts SASS/SCSS to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            'url-loader?limit=8192',
            'img-loader',
            'file-loader?name=/public/images/[name].[ext]'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
