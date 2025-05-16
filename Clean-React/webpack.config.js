// Configurações do Webpack
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/Main/index.tsx",
    output: {
        path: path.join(_dirname, "public/js"),
        publicPath: "/public/js",
        filename: "bundle.js"
    },
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    devServer: {
        contentBase: "./public",
        writeToDisk: true,
        historyApiFallback: true
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    },
    plugins: [ new CleanWebpackPlugin() ]
}