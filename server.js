require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const routes = require('./routes');

// express setup
const server = express();
const PORT = 3001;

// body parser configuration
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json());

//routes
server.use(routes);

if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
  server.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

server.listen(PORT, function () {
  console.log(`🌎  ==> Server listening on PORT ${PORT}!`);
});