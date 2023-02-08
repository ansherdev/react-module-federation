const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  performance: {
    hints: false,
  },
};
