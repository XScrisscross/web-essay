const moment = require("moment")
const conn = require("../db/db.js");

module.exports = {
    register: (req, res) => {
        let sql = "select count(*) as count from blog_users where username = ?";
        conn.query(sql, req.body.username, (err, result) => {
            if (err) return res.send({ msg: "用户查询失败", status: 503 });
            if (result[0].count >= 1) {
                return res.send({ msg: "用户已经存在", status: 504 });
            } else {
                let sql1 = "insert into blog_users set ?";
                req.body.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
                conn.query(sql1, req.body, (err, result) => {
                    if (err) return res.send({ msg: "用户插入失败", status: 505 });
                    res.send({ msg: "用户创建成功", status: 200 });
                });
            }
        });
    },
    login: (req, res) => {
        const body = req.body;

        if (body.username <= 0 || body.password <= 0) {
            res.send({ msg: '输入内容有误，请重新输入', status: 502 });
        }

        const sql = "select count(*) as count,id from blog_users where username=? and password=?"
        conn.query(sql, [body.username, body.password], (err, result) => {

            if (err) return res.send({ msg: "用户查询失败", status: 503 })

            if (result[0] && result[0].count > 0) {
                req.session.username = req.body.username;
                req.session.isLogin = true;
                req.session.pid = result[0].id;
                // console.log(req.session, result[0].id);
                return res.send({ msg: "登录成功", status: 200 })
            }

        })
    },
    logout: (req, res) => {
        req.session.destroy(function (err) {
            if (err) throw err;
            console.log('用户退出成功！');
            // 实现服务器端的跳转，这个对比于 客户端跳转
            res.redirect('/');
        });
    }
   
}