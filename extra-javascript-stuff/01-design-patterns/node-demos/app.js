'use strict';

console.log(' ');
console.log(' ');

const main = require('./03-behavioral-design-patterns/03-command-pattern/taskRepo');

// The bare minimum for for a sample node project below:
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log(' ');
    console.log(' ');
    console.log('...listening on port 3000...');
    console.log(' ');
});