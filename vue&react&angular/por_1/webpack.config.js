// a1.0访问根目录预览页面
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const vuePlugin = new VueLoaderPlugin();

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html"
})
module.exports = {
    // v1.0
    // 可以设置为development(开发模式)，production(发布模式)
    // 如果设置为development则表示项目处于开发阶段，不会进行压缩和混淆，打包速度会快一些
    // 如果设置为production则表示项目处于上线发布阶段，会进行压缩和混淆，打包速度会慢一些
    mode: "development",

    // v2.0指定编译路径
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "res.js"
    },

    plugins: [htmlPlugin, vuePlugin],


    /* 
        b1.0 loader加载器包含：用于打包js以外的文件
            1).less-loader
            2).sass-loader
            3).url-loader:打包处理css中与url路径有关的文件
            4).babel-loader:处理高级js语法的加载器
            5).postcss-loader
            6).css-loader,style-loader
    
        b2.0 指定多个loader时的顺序是固定的，而调用loader的顺序是从后向前进行调用

        b3.0 安装post-css自动添加css的兼容性前缀（-ie-,-webkit-）
            cnpm i postcss-loader autoprefixer -D

        c1.0 es6js支持 引入bable支持
    */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                //limit用来设置字节数，只有小于limit值的图片，才会转换为base64图片
                use: "url-loader?limit=16940"
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                //exclude为排除项，意思是不要处理node_modules中的js文件
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            }
        ]
    }

    // v3.0自动打包
    // --open 自动打开网页
    // 可以指定端口路径 "dev": "webpack-dev-server --open --host 127.0.0.1 --port 9999"
}