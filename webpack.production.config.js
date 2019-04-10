const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:__dirname + '/app/main.js',
    output:{
        path:__dirname + '/build',
        filename: "bundle-[hash].js"
    },
    devtool:'null',
    devServer:{
        contentBase:".public",
        historyApiFallback:true,
        inline:true,
        hot:true
    },
    module:{
        rules:[{
            test:/(\.jsx|\.jx)$/,
            use:{
                loader:'babel-loader'
            },
            exclude:/node_modules/
        },{
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:[{
                    loader:'css-loader',
                    options:{
                        module:true
                    }
                },{
                    loader:'postcss-loader'
                }]
            })
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        // new webpack.HtmlModeleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('style.css')
    ]
}