var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors');
app.use(cors())

app.get('/name', function (req, res) {
  fs.readFile( "../castal_scrapt/" + "/" + "final_hotels.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  });
})

//need to be complete...
app.get('/stars', function (req, res) {
  fs.readFile( "../castal_scrapt/" + "/" + "final_hotels.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  });
})
app.get('/stars', function (req, res) {
  fs.readFile( "../castal_scrapt/" + "/" + "final_hotels.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  });
})
app.get('/distance', function (req, res) {
  fs.readFile( "../castal_scrapt/" + "/" + "final_hotels.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("server is starting", host, port)

})