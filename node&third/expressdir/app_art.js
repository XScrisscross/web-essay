const express = require("express");

const server = express();

server.engine("html",require("express-art-template"));

server.set("view engine","html");
server.set("views","./ejs_pages");

server.get("/",(req,res)=>{
    res.render("index.html",{name:"rose"});
});

server.listen(1000,()=>{
    console.log("http://127.0.0.1:1000");
});