const express = require('express');
const querystring = require('querystring');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    let dataStr = "";
    req.on("data", data => {
        dataStr += data;
    });
    req.on("end", data => {
        req.body = querystring.parse(dataStr);
        next();
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./form.html"));
});

app.post("/postData", (req, res) => {
    res.send(req.body);
});

app.listen(2000, () => {
    console.log("http://127.0.0.1:2000");
});
