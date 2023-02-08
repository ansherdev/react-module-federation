const { merge } = require("webpack-merge");

const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
});
