"use strict";
var fs = require('fs');
var http = require('http');
var url = require('url');
var index = require('./index.js');
/**
 * Creating the server with request and response parameters
 * request : standard request object
 * response : standard response object
 */
http.createServer(function(request, response) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    var url_parts = url.parse(request.url);
    console.log(url_parts.pathname);
    console.log(url_parts);
    var slashLocation = url_parts.pathname.toString().substring(1).indexOf('/');
    console.log("slashLocation::::" + slashLocation);
    var updatedPathName = url_parts.pathname;
    if (slashLocation !== -1)
      updatedPathName = url_parts.pathname.substring(0, slashLocation+1);
    console.log(url_parts.pathname);

    var dbCall = index(response);

    switch (updatedPathName) {
        case '/':
            console.log('Display roots');
            break;
        case '/showHomePageData':
            dbCall.selectData();
            break;
        case '/getArticlebyId':
            var id = url_parts.pathname.toString().substring(slashLocation+2);
            console.log('getting article by id..........'+id);
            dbCall.getArticlebyId(id);
            break;
        default:
            console.log('404, Page not found');
            response.statusMessage = "Page Not Found";
            response.statusCode = 404;
            response.end('ok');
    };

}).listen(8001);
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
console.log("Listening at localhost:8001");
