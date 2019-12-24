const conn = require("../db/db.js");
const moment = require("moment")

module.exports = {
    add: (req, res) => {
        res.render("./artical/add.ejs", { "status": req.session.username, "isLogin": req.session.isLogin, "id": req.session.pid });
    },
    padd: (req, res) => {

        const body = req.body;

        const sql = "insert into blog_articles set ?";
        req.body.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
        conn.query(sql, body, (err, result) => {

            if (err) return res.send({ msg: "文章插入失败", status: 503 })

            if (result.affectedRows == 1) {
                return res.send({ msg: "文章写入成功", status: 200, insertId: body.authorId })
            }
        })

    },
    info: (req, res) => {
        const sql = "select * from blog_articles";

        console.log(req.params);

        conn.query(sql, (err, result) => {

            if (err) return res.send({ msg: "文章插入失败", status: 503 });

            res.render("./artical/info.ejs", { "status": req.session.username, "article": result, "id": req.session.pid, "isLogin": req.session.isLogin });
        })

    },
    edit: (req, res) => {
        let id = req.params.id;
        let sql = "select * from blog_articles where id = ?";
        conn.query(sql, id, function (error, result) {
            if (error) throw error;

            res.render("./artical/edit.ejs", { "article": result[0], "id": req.session.pid, "isLogin": req.session.isLogin, "status": req.session.username });
        });
    },
    pedit: (req, res) => {
        console.log(req.body.id);
        let body = req.body;
        let sql = "update blog_articles set ? where id = ?";

        conn.query(sql, [body, body.id], function (error, results) {
            if (error) throw error;
            res.send({ msg: "文章修改失败", status: 200 });
        });
    }
} 