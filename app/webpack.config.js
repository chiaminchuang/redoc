const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
    publicPath: "/"
  },

  // 幫助 webpack 輸出檔案 debug
  devtool: "source-map",

  resolve: {
    // 加入'.ts' and '.tsx' 結尾
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.(ts|tsx)$/, use: ["babel-loader"], exclude: /node_modules/ }
    ]
  },
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build")
    },
    historyApiFallback: true,
    watchFiles: ["src/**/*.tsx", "src/**/*.css"],
    hot: true,
    liveReload: true,
    port: 8081
  }
}
