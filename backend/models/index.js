var mysql = require('mysql');

var pool  = mysql.createPool({
    host: 'localhost',
    user: 'root',   // your mysql username
    password: 'root',   // your mysql password
    database: 'demo_db',    // your db
    charset: "utf8"
});

pool.getConnection(function (err, connection) {
    if(err){
        console.log("Database connect error");
    }

})

module.exports = pool;