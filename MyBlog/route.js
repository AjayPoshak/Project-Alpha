"use strict";
var fs = require('fs');
var http = require('http');
var url = require('url');
var index = require('./index.js');

http.createServer(function(request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  var url_parts = url.parse(request.url);
  console.log(url_parts.pathname);
  var dbCall = index(response);

  switch(url_parts.pathname){
    case '/':
      console.log('Display roots');
      break;
    case '/showData':
      dbCall.selectData();
      break;
    default:
      console.log('404, Page not found');
      response.statusMessage = "Page Not Found";
      response.statusCode = 404;
      response.end('ok');
  };

}).listen(8000);
console.log("Listening at localhost:8000");
