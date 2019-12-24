// 创建服务器
const express = require('express');
const app = express();

// 引入第三方插件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// 创建session
const session = require("express-session")
app.use(session({
    secret: 'keyboard cat', // 相当于是一个加密密钥，值可以是任意字符串
    resave: false, // 强制session保存到session store中
    saveUninitialized: false // 强制没有“初始化”的session保存到storage中
}))

// 设置express内置ejs渲染模板
app.set("view engine", "ejs");
app.set("views", "./views");

// 静态资源托管
app.use("/bootstrap", express.static("./node_modules/bootstrap"));
app.use("/jquery", express.static("./node_modules/jquery"));
app.use("/ejs", express.static("./node_modules/ejs"));
app.use("/mditor", express.static("./node_modules/mditor"));

// 引入路由
const indexRoute = require('./route/indexRouter.js');
const userRoute = require('./route/userRouter.js');
const articalRoute = require('./route/articalRouter.js');

app.use(indexRoute);
app.use(userRoute);
app.use(articalRoute);

// 监听
app.listen(1000, () => {
    console.log('http://127.0.0.1:1000');
});