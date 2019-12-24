const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    const cookie = {};
    req.cookies

    if (cookies.isvisit === "yes") {
        res.send("不要太贪心");
    } else {
        const expiresTime = new Date(Date.now() + 10 *1000).toUTCString();
        res.wh
    }
    
})

app.listen(1000,()=>{
    console.log('http://127.0.0.1:1000');
});