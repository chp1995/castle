var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listhotels', function (req, res) {
    // fs.readFile( __dirname + "/" + "hotels.json", 'utf8', function (err, data) {
    fs.readFile( "../scrapt_python/" + "final_hotels.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})



var server = app.listen(8081, function () {
  // var host = server.address().address
  // var port = server.address().port
  // console.log("应用实例，访问地址为 http://%s:%s", host, port)
})