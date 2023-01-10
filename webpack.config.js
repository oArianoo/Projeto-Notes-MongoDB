const path = require("path");
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "frontend", "script.js"),
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
};
