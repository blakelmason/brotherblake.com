require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// express setup
const server = express();
const PORT = process.env.PORT || 3001;

// body parser configuration
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, '..', '/client/build')));
  server.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', '/client/build/index.js'));
  });
}

server.listen(PORT, () =>
  console.log(`🌎  ==> Server listening on PORT ${PORT}!`)
);
