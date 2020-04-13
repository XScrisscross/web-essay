/*express框架浅解
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