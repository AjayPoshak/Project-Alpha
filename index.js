"use strict";
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mountain',
    database: 'blog'
});
/**
 * This exports the functions to require call
 * @param  {response} standard response type
 * @return {rows|err}  return rows or err based on the database response
 */
module.exports = function(response) {
    return {
        selectData: function() {
            connection.query('SELECT * FROM contents ORDER BY createdon DESC LIMIT 5', function(err, rows, fields) {
                if (!err) {
                    console.log('Connection is working...', rows);
                    response.end(JSON.stringify(rows));
                    return rows;
                } else
                    console.log('Not working...', err);
                return err;
            });
        },
        getArticlebyId: function(articleId) {
            if (parseInt(articleId) === parseInt(articleId)) {
                connection.query('SELECT * FROM contents WHERE articleid=' + parseInt(articleId),
                    function(err, rows, field) {
                        if (!err) {
                            console.log(rows);
                            response.end(JSON.stringify(rows));
                            return rows;
                        } else {
                            console.log("Not working...", err);
                            return err;
                        }
                    });
            }
        }
    }
};
