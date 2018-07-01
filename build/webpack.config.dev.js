'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.ts'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: "ts-loader",
        options:{
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'        
      }
      // {
      //   test: [
      //       /\.vue$/, 
      //       /\.css$/,
      //       // /\.styl(us)?$/,
      //       /\.js$/
      //   ],
      //   use: [
      //       'vue-loader',
      //       'css-loader',
      //       // 'stylus-loader',
      //       'babel-loader'
      //   ]
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
    })
  ]
}