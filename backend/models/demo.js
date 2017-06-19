var pool = require('./index');

var Demo = {};

Demo.getUser = function(username, password, callback) {
    pool.getConnection(function (err, connection) {
        if (!err) {
            var sql = 'SELECT * FROM user_demo WHERE username = ? AND password = ?';
            connection.query(sql, [username, password], function (err, result) {
                if (err) {
                    console.log("Select Error: " + err);
                } else {
                    callback(result);
                }

                connection.release();
            });
        } else {
            console.log("Database connect error");
        }
    })
}

module.exports = Demo;