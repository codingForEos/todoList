const webpack = require('webpack');
module.exports = {
    devtool:'eval-source-map',
    entry:__dirname + "/index.js",
    output:{
        path:__dirname + "/static",
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['es2015','react']
            }},
            {
            test:/\.css$/,
            loader:'style-loader!css-loader'
            }]
    },
    devServer: {
        // 本地服务器加载文件所在页面
        contentBase: "./static",
        // 不跳转
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    plugins: [
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
    ]
}