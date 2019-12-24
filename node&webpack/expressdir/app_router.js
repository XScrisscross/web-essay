const express = require("express");

const server = express();

const router = require("./router.js");

server.use(router);

server.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
});