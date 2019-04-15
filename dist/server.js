"use strict";

require('dotenv').config();

var express = require('express');

var bodyParser = require('body-parser');

var path = require('path'); // express setup


var server = express();
var PORT = process && process.env && process.env.PORT || undefined || 3001; // body parser configuration

server.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));
server.use(bodyParser.json());

if ((process && process.env && process.env.NODE_ENV || undefined) === 'production') {
  server.use(express.static(path.join(__dirname, '..', '/client/build')));
  server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '/client/build/index.js'));
  });
}

server.listen(PORT, function () {
  return console.log("\uD83C\uDF0E  ==> Server listening on PORT ".concat(PORT, "!"));
});