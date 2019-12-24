const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static("./views"));
app.use(express.static("./node_modules"));
app.use(cors());

// 以?传参
app.get('/aa',(req,res)=>{
    res.send(req.query);
})

// 以:传参
app.get('/bb/:id/:name',(req,res)=>{
    res.send(req.query);
})

// 同时使用
app.get('/bb/:ids /:names',(req,res)=>{
    res.send({...req.query,...req.params});
})

// post传参-需要下载body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/postData',(req,res)=>{
   res.send(req.body);
});

app.listen(2000,()=>{
    console.log('http://127.0.0.1:2000')
});
