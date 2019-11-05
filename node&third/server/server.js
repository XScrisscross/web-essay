const http = require('http');
const fs = require('fs');
const path = require('path');
const template = require('art-template');

const server = http.createServer();

server.on('request', (req, res) => {
    let url = req.url;

    res.writeHeader(200, {
        'Content-Type': 'text/html;charset=utf8'
    });

    if (url === '/') {
        url = "/views/index.html";
        var htmlTemp = template(path.join(__dirname, url), {
            arr: [
                {
                    name: "jack",
                    age: 22
                }, {
                    name: "rose",
                    age: 22
                }
            ]
        });

        fs.readFile(path.join(__dirname, url), (err, data) => {
            res.end(htmlTemp);
        });
    } else {
        fs.readFile(path.join(__dirname, url), (err, data) => {
            res.end(data);
        });
    }

});

server.listen(1000, () => {
    console.log("http://127.0.0.1:1000");
});