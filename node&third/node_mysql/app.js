// 引入mysql模块
const mysql = require("mysql");

// 创建连接
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "node",
});

// 连接
// connection.connect();

// 查询
// connection.query('SELECT * FROM user', function (error, results) {
//     if (error) throw error;
//     console.log('The results is: ', results);
// });

// 插入
// let sql = "insert into user set ?";
// connection.query(sql, { id: null, name: "tom", age: 24 }, function (error, results) {
//     if (error) throw eerror;
//     console.log('The results is: ', results);
// });

// 修改
// let sql = "update user set ? where id = ?";
// let obj = { id: 3, name: "tim", age: 16 };
// connection.query(sql, [obj, obj.id], function (error, results) {
//     if (error) throw eerror;
//     console.log('The results is: ', results);
// });

// 删除
let sql = "delete from user where id = ?";
connection.query(sql, 2, function (error, results) {
    if (error) throw eerror;
    console.log('The results is: ', results);
});

// 关闭
// connection.end();