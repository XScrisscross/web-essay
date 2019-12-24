const express = require("express");
const path = require("path");

const router =  express.Router();

router.get("/",(res,req)=>{
    req.sendFile(path.join(__dirname,"views/index.html"));
});

router.get("/static",(res,req)=>{
    req.sendFile(path.join(__dirname,"views/static.html"));
});

module.exports = router;
