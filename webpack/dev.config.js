const { merge } = require("webpack-merge");
const common = require("./common.config.js");

module.exports = merge(common, {
  mode: "development",
  target: "web",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
  },
});
