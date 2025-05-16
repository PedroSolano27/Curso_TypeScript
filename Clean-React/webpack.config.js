// Configurações do Webpack
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/Main/index.tsx",

    output: {
        path: path.join(__dirname, "public/js"),
        publicPath: "/js",
        filename: "bundle.js",
    },

    resolve: { extensions: [".ts", ".tsx", ".js", ".css"] },

    devtool: "source-map",

    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        historyApiFallback: {
            disableDotRule: true,
            rewrites: [
                { from: /^\/js\/bundle\.js$/, to: '/js/bundle.js' }, // <-- importante
            ],
        },
        port: 8080,
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ "style-loader","css-loader",]
            }
        ],
    },
    
    plugins: [new CleanWebpackPlugin()],
};