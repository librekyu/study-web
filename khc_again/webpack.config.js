const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: ["./src/index"],
  }, // 입력
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  }, // webpack으로 읽을 파일들의 확장자
  target: ["es5"],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/env",
                {
                  useBuiltIns: "entry",
                  corejs: 3,
                  targets: {
                    browsers: ["last 3 versions", "ie >= 11"],
                    node: "current",
                  },
                },
                "@babel/preset-env",
                "@babel/preset-react",
              ],
            ],
            plugins: [
              new CleanWebpackPlugin(),
              new HtmlWebpackPlugin({
                template: "./public/index.html",
              }),
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jfif$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  devtool: "source-map",
};
