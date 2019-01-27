'use strict';

const main = require('./main');

// The bare minimum for for a sample node project below:
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});