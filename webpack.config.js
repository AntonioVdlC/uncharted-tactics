const webpack = require("webpack")

module.exports = {
    entry: "./public/js/game.src/main.js",
    output: {
        path: "./public/js",
        filename: "game.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
}
