const conn = require("../db/db.js");

module.exports = {
    getAllData: (req, res) => {
        let sql = "select * from heros";
        conn.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    getOneData: (req, res) => {
        let id = req.params.id;
        let sql = "select * from heros where id =?";
        conn.query(sql, id, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    addHero: (req, res) => {
        const hero = req.body;
        const dt = new Date();
        const y = dt.getFullYear();
        const m = (dt.getMonth() + 1).toString().padStart(2, "0");
        const d = dt.getDate().toString().padStart(2, "0");
        const hh = dt.getHours();
        const mm = dt.getMinutes();
        const ss = dt.getSeconds();

        hero.ctime = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;

        let sql = "insert into heros set ?";
        conn.query(sql, hero, function (error, results) {
            if (error) throw error;
            res.send(hero);
        });
    },
    deletehero: (req, res) => {
        const { id } = req.params;
        let sql = "update heros set isdel = 1 where id = ?";
        conn.query(sql, id, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }
}
