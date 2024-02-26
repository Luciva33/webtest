

const mysql = require("mysql");

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myapp'  //データベースを選ぶ
});

con.connect((err) => {
    if (err) {
        console.error(`Errorだよ!:${err.stack}`);
        return;
    }
    console.log(`接続成功!!:${con.threadId}`);
});

con.query('SELECT * FROM `members`', (error, results) => {
    // console.log(results);
    for (const obj of results) {
        console.log(obj.name);
    };
});