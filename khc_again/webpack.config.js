const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "bundle.js",
  },
  target: ["es5"],
  module: {
    rules: [
      {
        test: /\.js$/,
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
              ],
            ],
            plugins: [],
          },
        },
      },
    ],
  },
  devtool: "source-map",
};
