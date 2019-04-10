const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool:'eval-source-map',
    entry:__dirname + '/app/main.js',//唯一入口文件
    output:{
        path:__dirname + '/public',//打包后的文件存储位置
        filename:'bundle-[hash].js' //打包后输出文件的文件名
    },
    devServer:{
        contentBase:'./public',
        historyApiFallback:true,
        inline:true,
        port:'8900'
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader:"babel-loader"
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader",
                        options:{
                            modules:true,
                            localIdentName:'[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader:"postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
        // new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextPlugin('style.css')
    ]
};