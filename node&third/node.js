/*
    nodejs相关概念
    1.CommonJS语法分析
    创建的模块将对象由Module.exports导出,require()引入相关模块,对其他模块的成员进行操作

    2.Module.exports与exports
    Module.exports才是真正的接口,exports只不过是它的一个辅助工具.最终返回给调用的是Module.exports而不是exports.
    所有的exports收集到的属性和方法,都赋值给了Module.exports.当然,这有个前提,就是Module.exports本身不具备任何属性和方法.
    如果,Module.exports已经具备一些属性和方法,那么exports收集来的信息将被忽略.

    /-------------------------------初涉nodejs相关概念及用法--------------------------------------/

    1.nodejs与浏览器端的js区?.
    js:ECMAScript 核心 + DOM + BOM
    nodejs:ECMAScript 核心 + 全局变量 + 核心API成员

    2.Node中的API为什么几乎都是异步操作
    什么样的操作需要使用异步处理:要把耗时的操作,放到异步中去执行
    异步执行任务的好处:能够提高耗时的任务它的执行效率,提高JS解析引擎的工作效率

    3.nodejs中的作用域
    全局作用域和模块作用域
    全局作用域:通过global存放和使用, 会产生全局污染
    模块作用域:模块中的成员有自己的作用域,引入后无法被直接使用

    4.module require exports/module.exports
    module:CommonJS规范中定义的一个对象
    require:引入其他模块
    module.exports:暴露模块成员供外界使用

    5.module.exports与exports
    module.exports和exports默认引用了同一个空对象
    module.exports和exports作用一致，都可以向外暴露成员
    一个模块作用域中,向外暴露私有成员时,永远以module.exports为准

    6.浏览器端的AMD和CMD模块化规范
    浏览器端不能使用CommonJS规范,因为CommonJS下,模块是同步加载的,
    AMD/CMD可以理解为是commonjs在浏览器端的解决方案,AMD/CMD下,模块都是异步加载的

    7.Node.js中 '模块' 和 '包' 的概念
    模块:Node.js中模块是Node.js的基本组成部分,一般一个模块对应一个Nodejs文件,Node.js有自己的核心模块,也可以引用他人的模块和自己写模块
    包:包相当于模块组成的一个大的模块,相当于模块的扩展,不等于应用程序

    8.包的结构
    package--
        --lib
        --bin
        --test
        --doc
        package.json--{
                        name：包的名称，必须是唯一
                        main: 入口函数
                        description：包的简要说明
                        version：符合语义化版本识别规范的版本字符串
                        keywords：关键字数据，通常用于搜索
                        maintainers：维护者数组，每个元素要包含name、email、web可选字段
                        contributors：贡献者数组，格式与maintainers相同。包的坐着应该是贡献者数据的第一个元素
                        bugs：提交bug的地址，可以是网址或者电子邮件地址
                        licenses：许可证数组，每个元素要包含type和url字段
                        repositories：仓库托管地址数组，每个元素要包含type、url和path字段
                        dependencies：包的依赖，一个关联数组，由包名称和版本号组成
                        devDependencies：开发依赖项，表示一个包在开发期间用到的依赖项
                    }
    注意:包以一个单独的文件夹存在,必须包含package.json

    9.npm常用指令
    node:执行node相关程序
    npm:管理工具,用于下载相关依赖
    nodemon:可以重启执行nodejs的插件,即时刻保持更新(npm i nodemon -g)
    cnpm:国内淘宝提供的镜像网站下载插件(npm i cnpm -g)
	yarn:也是一个js包管理工具 (npm i yarn -g)
        npm i/install 包名 : 下载
        npm init -y[-f] : 初始化
        npm remove 包名 : 卸载

        -g : 全局安装
        -D : 测试安装
        -S : 当前目录安装
        包名@version : 以某种版本下载

        other:
        npm install gulp 安装最新版本
        npm install gulp@3.9.1 安装指定版本
        npm update [-g] [<pkg>...] 更新模块
        npm outdated [[<@scope>/]<pkg> ...] 检查模块是否过时
        npm ls [[<@scope>/]<pkg> ...] 查看安装的模块
        npm root [-g] 查看包的安装路径

        npm start 启动
        npm stop 暂停
        npm restart 重启
        npm test 测试

    10.yarn与npm的区别
    npm的缺点:npm下载慢,出现问题不会停止下载而是继续往下下载包
    yarn的优点:快速,缓存
        命令对比:
        npm install
        yarn

        npm install react --save
        yarn add react

        npm uninstall react --save
        yarn remove react

        npm install react --save-dev
        yarn add react --dev

        npm update --save
        yarn upgrade../
    
    11.express框架
        1)获取参数
        `user?id=10&name=zs` => `get('/user)` => req.query
        `user/10/zs` => `get('/user/:id/:name')` => req.params
        `post提交`比较特殊:
            `npm i body-parser -S`(安装) => `require('body-parser')`(引入) =>
            `app.use(bodyParser.urlencoded({ extended: false }))`(注册) => req.body
        2)混合开发模式
        jquery+模板渲染引擎(art-template或者原生语法)+后端页面(.ejs,.jsp,.php)+bootstrap+后端语言(nodejs,php)+后端框架(express)
        3)前后端分离
        前:css+html+js+前段框架+插件+后台接口
        4)跨域表单提交不支持jsonp
        后台接口处理(nodejs:引入cors模块可以跨域,并且支持ajax)
        5)express框架是针对于nodejs-http模块的封装,但不会覆盖原生nodejs-http的方法(jquery...)
        `npm i express -S`(安装) =>  `const app = express()`(创建服务器) =>
        `app.get('请求地址', (req, res) => { 处理函数 })`(get请求)
        `app.post('请求地址', (req, res) => { 处理函数 })`(post请求)
        `app.listen(端口, IP地址, 启动成功后的回调函数)`(启动)
        6)express数据发送
        `res.send()`(支持那些格式?string-{}-[]-buffer) - (即text/html-json)
        `res.sendFile()`()
            `res.sendFile(path.join(__dirname, './view/index.html'))` - 绝对路径
            `res.sendFile('./view/movie.html', { root: __dirname })` - 相对路径
        7)express下的ejs渲染模板(原生语法)
        `npm i ejs -S`(安装) => 
        `app.set('view engine', 'ejs')`(默认配置) =>
        `app.set('views', './views')`(存放路径) =>
        `res.render('渲染的ejs页面', { 要渲染的数据对象 })`(渲染)
        8)express下的art-template渲染模板(简洁语法) -- art-template需要引入,因为后面要用到相关方法
        `cnpm i art-template express-art-template -S`(安装) =>
        `app.engine('自定义模板引擎的名称', 渲染函数)`
        `app.set('view engine', '具体模板引擎的名称')`
*/
server.engine("html", require("express-art-template"));
server.set("view engine", "html");
server.set("views", "./views");
server.get("/", (req, res) => {
    res.render("index.html", { name: "rose" });
});
/*
        9)路由模块Router
            -创建
*/
const express = require('express')
const router = express.Router()
router.get('/', (req, res) => { })
router.get('/movie', (req, res) => { })
router.get('/about', (req, res) => { })
module.exports = router
/* 
            -使用
*/
const router = require('./router.js')
app.use(router)
/*
        10)express中间件
            应用级别:挂载在app上的
            路由级别:即单独抽取出来的router文件,router.get...
            唯一内置中间件:express.static()
            第三方插件:如body-parser 引入+注册
*/
