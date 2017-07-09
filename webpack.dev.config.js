var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
const devConfig = merge(baseConfig,{
    // 开启dev source map
    devtool: 'eval-source-map',
    // 配置plugin
    plugins: [
        new webpack.DefinePlugin({
            'process.env.API_ENV': '"development"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),
        new HtmlwebpackPlugin({
            title: 'react-webpack-demo',
            filename: 'index.html',
            template: path.resolve(SRC_PATH, 'templates', 'index.html')
        })
    ]
})

 module.exports = devConfig;