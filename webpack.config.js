var webpack = require('webpack');

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});//代码压缩

//var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common');//把公共模块提取出来, 并取名为'common'(名字自起), webpack之后再out文件夹下生成common.js, 测试时记得引入提取出来的公共模块js文件

var ExtractTextPlugin = require("extract-text-webpack-plugin");//将css独立引入变成link标签形式, 使用该插件需要独立下载'npm install extract-text-webpack-plugin --save-dev', 同时下面的rules也必须更改

var providePlugin = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'});//引入jquery

module.exports = {
    //entry : {index1: './src/js/entry.js', index2: './src/js/entry2.js'},//多个html
    entry :  './src/js/entry.js',
    output : {
        filename : 'index.js',
        //publicPath: './out/',
        publicPath: 'http://localhost:8080/out',
        path : __dirname + '/out'
    },
    module : {
        rules: [
            {test: /.js$/, use: ['babel-loader']},
            //{test: /.css$/, use: ['style-loader', 'css-loader']},/*解析css, 并把css添加到html的style标签里*/
            {test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},/*解析css, 并把css变成文件通过link标签引入*/
            {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=img/[hash:8].[name].[ext]']},/*解析图片*/
            {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}/*解析less, 把less解析成浏览器可以识别的css语言*/
        ]
    },
    plugins: [uglifyPlugin, new ExtractTextPlugin('[name].css'),providePlugin]//插件集合
};
