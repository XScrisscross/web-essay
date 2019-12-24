const express = require('express');
const app = express();

// 第三方插件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// express的路由管理
const router = require('../router/router.js');
app.use(router);

app.listen(1000, () => {
    console.log('http://127.0.0.1:1000');
});

