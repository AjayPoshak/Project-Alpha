"use strict";
var mysql = require("mysql");
var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'mountain',
     database : 'blog'
   });

   function selectData(){
     console.log("selecting the data");
     connection.connect();

         connection.end();
   };


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

// var data = function(){
//   var mysql = require("mysql");
//   var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mountain',
//     database : 'blog'
//   });
//   connection.connect();
//   var selectData = function(){
//     connection.query('SELECT * from contents', function(err, rows, fields){
//       if(!err){
//         console.log('Connection is working...', rows);
//       }
//       else
//         console.log('Not working...', err);
//     });
//   };
//   connection.end();
// }
// var callData = data();


//temp password: &tWq0xdRfw?Q
//new password: mountain
