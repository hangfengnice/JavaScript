const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve("dist")
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", 
              // {
              //   "modules": "commonjs",  //设置ES6 模块转译的模块格式 默认是 commonjs
              //   "useBuiltIns": "usage", 
              // }
            ],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  devServer: {
    contentBase: "./dist",
    stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html"
    })
  ]
};
