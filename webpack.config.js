const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    resolve:{
        modules: [__dirname,"src","node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif|ico|jpeg)$/,
                use: ["file-loader"],
            },
        ],
    },
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback: true,
		open: true
    },
};