// npx作用  再无package.json的情况下使用  npx的作用是先检查本地有没有安装某个package，如果没有去远程registry找，找到的话直接使用，不用下载到本地node-modules包里面，这样就能优化本地项目的大小，也可以避免安装package到全局。
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development', //production
    devServer: {
        open: false, // 默认打开浏览器
        port: 3000, //端口
        progress: false, // 进度条
        contentBase: './build', // 构建目录
        compress: true // 是否压缩
    },
    entry: './app/text.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html', //模板
            filename: './dist/index.html', // 打包后的名字
            minify: {
                removeAttributeQuotes: true, // 去除引号
                collapseWhitespace: true // 单行
            },
            hash:true // hash值
        })
    ]
}