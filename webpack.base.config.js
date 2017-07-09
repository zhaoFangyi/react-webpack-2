var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
module.exports = {
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js'
    },
    resolve: {
        extensions: ['','.js', '.jsx']
        //root: APP_PATH
    },
    module: {
        // 配置preLoaders, 将eslint添加进去
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint-loader'],
                include: SRC_PATH,
                enforce: 'pre'
            }, {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: SRC_PATH,
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            }
        ]
    }
};