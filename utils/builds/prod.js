// Production Config
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  mode: 'production',
  entry: './src/Index.js',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importedLoader: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      path: path.resolve(__dirname, 'dist')
    })
  ]
}

module.exports = config

