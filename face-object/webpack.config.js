const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"

    })
  ],
  devServer: {
    contentBase: path.join(__dirname,'./dist'),
    open: true
  },
  module: {
    rules: [
      // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],

          }
        }
      }
    ]
  }
}