const path = require('path');
var glob = require('glob')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    js: glob.sync(__dirname + "/target/*.js")
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ]
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "bundle.css"
  }),
  new Dotenv()
  ],
  watch: true,
};