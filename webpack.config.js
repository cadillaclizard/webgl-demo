// webpack.config.js

const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  devServer: {
    historyApiFallback: true,
    filename: 'app.js',
    compress: true
  },
  module: {
    rules: [
      // Typescript
      { test: /\.ts$/, loader: 'ts-loader' },
      // CSS / SCSS
      { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static'
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([{ from: 'static', to: 'static' }])
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
};