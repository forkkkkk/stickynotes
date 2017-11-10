const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        port: 8080
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use:[{loader: 'style-loader'},{loader: 'css-loader'}]
            },
            {
                test: /\.png$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('@qhr'),
        new HtmlWebpackPlugin({
            template:'./index.template.html'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('index.css')

    ]
}