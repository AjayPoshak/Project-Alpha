"use strict";
var mysql = require("mysql");
var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'mountain',
     database : 'blog'
   });
module.exports = function(response){
  return {
    selectData: function(){
      connection.query('SELECT * from contents', function(err, rows, fields){
             if(!err){
              console.log('Connection is working...', rows);
              response.end(JSON.stringify(rows));
              return rows;
            }
            else
              console.log('Not working...', err);
              return err;
          });
        }
      }
    };
