const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, argv) {
  const isDevelopment = argv.mode === "development";

  return {
    mode: argv.mode,
    devtool: isDevelopment ? "source-maps" : "eval",
    entry: path.resolve("src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "test",
        template: path.resolve("public", "test.html"),
        filename: "test.html"
      })
    ]
  };
};
