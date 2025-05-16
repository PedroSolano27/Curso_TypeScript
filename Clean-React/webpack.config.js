// Configurações do Webpack
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/Main/index.tsx",
    output: {
        path: path.join(_dirname, "public/js"),
        publicPath: "/public/js",
        filename: "bundle.js",
    },
    resolve: { extensions: [".ts", ".tsx", ".js", ".css", ".scss"] },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(s?)css$/,
                use: [{
                    loader: "style-loader",
                }, {
                    loader: "css-loader",
                    options: { modules: true },
                }, {
                    loader: "sass-loader",
                }]
            }
        ]
    },
    devServer: {
        contentBase: "./public",
        writeToDisk: true,
        historyApiFallback: true,
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
    },
    plugins: [ new CleanWebpackPlugin() ],
}