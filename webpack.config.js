const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    popup: "./src/popup/index.tsx",
    contentScript: "./src/contentScript.ts",
    background: "./src/background.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};