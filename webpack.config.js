const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  watch: true,
  mode: "production",
  entry: ["./src/style/style.js","./src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
    environment: {
      arrowFunction: false
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./public/index.html"}),
    new MiniCssExtractPlugin({filename: "style.css"})
  ],
}