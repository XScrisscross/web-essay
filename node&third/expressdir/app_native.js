// 引入模块
const express = require("express");
const cors = require("cors");
const path = require("path");

// 创建服务器
const server = express();

// 设置模版引擎
server.set("view engine","ejs");
server.set("views","./ejs_pages");
// 解决跨域问题
server.use(cors());
// 静态资源托管
server.use("/static",express.static("./views"));
//
server.get("/ejss",(req,res)=>{
    res.render("static.ejs",{name:"jack"});
});


// 处理get请求
// 监听
server.get("/",(req,res)=>{
    res.send("首页");

    console.log("ok");
    

    // 测试请求返回数据
    // 返回数组
    // res.send([122,"dsaf",{name:"jack"}]);
    // 返回对象
    // res.send({name:"jack",age:22});
    // 返回页面
    res.sendFile(path.join(__dirname,"index.html"));
});

// 处理post请求
server.post("/",(req,res)=>{
    res.send("首页");
});

// 设置监听接口
server.listen(1000,()=>{
    console.log("http://127.0.0.1:1000");
});