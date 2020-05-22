const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 5000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/fonts",
          outputPath: "fonts",
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(le|sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#0C9D57",
                  "layout-header-background": "#0C9D57",
                  "layout-body-background": "#ffffff",
                  "layout-footer-background": "#f0f2f5",
                  "card-head-color": "#0C9D57",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
