const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 5003,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/bootstrap",
      },
      shared: ["faker"], //remove array and replace this -> {faker:{singleton:true}}
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
