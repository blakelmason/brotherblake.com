const express = require('express');
const test = require('./test.routes');

const router = express.Router();

router.use('/test', test);

module.exports = router;