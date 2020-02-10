const path = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: "babel-loader"
  //       }
  //     },
  //     {
  //       test: /\.(png|jpg|gif)$/i,
  //       use: [
  //         {
  //           loader: "url-loader",
  //           options: {
  //             limit: 8192
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `index.html`),
      filename: `index.html`
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    stats: "errors-only"
    // hot: true
  },
  devtool: "source-map"
};
